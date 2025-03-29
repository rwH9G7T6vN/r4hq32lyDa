// ==UserScript==
// @name         Florr.io wasm svg
// @namespace    http://tampermonkey.net/
// @version      1.7
// @description  hi
// @author       cuntfron
// @match        *://florr.io/*
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const PATCH_LIST_URL = "https://raw.githubusercontent.com/rwH9G7T6vN/r4hq32lyDa/main/patches.txt";
    const encoder = new TextEncoder();
    let patchList = [];
    let patchesApplied = false;

    function fetchPatches() {
        return new Promise((resolve) => {
            GM_xmlhttpRequest({
                method: "GET",
                url: PATCH_LIST_URL,
                onload: function(res) {
                    const text = res.responseText;
                    const patches = text.split('\n').map(line => {
                        const parts = line.split(' BREAK ');
                        return parts.length === 2 ? { find: parts[0], replace: parts[1] } : null;
                    }).filter(Boolean);
                    resolve(patches);
                },
                onerror: function(err) {
                    console.error("[WASM] Failed to load patches:", err);
                    resolve([]);
                }
            });
        });
    }

    function findOccurrences(buffer, search) {
        let matches = [];
        for (let i = 0; i <= buffer.length - search.length; i++) {
            if (buffer.slice(i, i + search.length).every((val, idx) => val === search[idx])) {
                matches.push(i);
            }
        }
        return matches;
    }

    async function patchWasm(buffer) {
        if (patchesApplied) return null;

        let bytes = new Uint8Array(buffer);
        let patched = false;

        for (const { find, replace } of patchList) {
            const findBytes = encoder.encode(find);
            const replaceBytes = encoder.encode(replace.padEnd(find.length, '\0'));
            const occurrences = findOccurrences(bytes, findBytes);

            if (occurrences.length) {
                patched = true;
                occurrences.forEach(offset => {
                    bytes.set(replaceBytes, offset);
                });
            }
        }

        if (!patched) return null;
        patchesApplied = true;
        return bytes.buffer;
    }

    async function interceptWasm(buffer, importObject) {
        if (patchesApplied) return WebAssembly.instantiate(buffer, importObject);
        const patchedBuffer = await patchWasm(buffer);
        return WebAssembly.instantiate(patchedBuffer || buffer, importObject);
    }

    (async function init() {
    patchList = await fetchPatches();
    console.log(`[WASM] Loaded ${patchList.length} patches.`);

    setTimeout(() => {  // Delay interception to ensure WASM is loaded
        const originalInstantiateStreaming = WebAssembly.instantiateStreaming;
        WebAssembly.instantiateStreaming = async (source, importObject) => {
            if (patchesApplied || !(source instanceof Response && source.url.includes("client.wasm"))) {
                return originalInstantiateStreaming(source, importObject);
            }
            console.log("[WASM] Intercepting (streaming)");
            return interceptWasm(await source.clone().arrayBuffer(), importObject);
        };

        const originalInstantiate = WebAssembly.instantiate;
        WebAssembly.instantiate = async (buffer, importObject) => {
            if (patchesApplied) {
                return originalInstantiate(buffer, importObject);
            }
            if (buffer instanceof ArrayBuffer) {
                console.log("[WASM] Intercepting (instantiate)");
                return interceptWasm(buffer, importObject);
            }
            return originalInstantiate(buffer, importObject);
        };

        const originalFetch = window.fetch;
        window.fetch = async (...args) => {
            const res = await originalFetch(...args);
            if (!patchesApplied && typeof args[0] === "string" && args[0].includes("client.wasm")) {
                console.log("[WASM] Intercepting (fetch)");
                const buffer = await res.clone().arrayBuffer();
                const patchedBuffer = await patchWasm(buffer);
                return patchedBuffer ? new Response(patchedBuffer, { headers: { "Content-Type": "application/wasm" } }) : res;
            }
            return res;
        };
    }, 100);  // 100ms delay to ensure WASM loads before interception
})();
})();
