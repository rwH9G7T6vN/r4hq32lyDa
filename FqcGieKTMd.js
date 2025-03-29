// ==UserScript==
// @name         Florr WASM Remote Patcher
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Patch florr.io WASM strings remotely
// @match        *://florr.io/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const PATCH_LIST_URL = "https://raw.githubusercontent.com/rwH9G7T6vN/r4hq32lyDa/main/patches.txt";

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    async function fetchPatches() {
        try {
            const res = await fetch(PATCH_LIST_URL);
            const text = await res.text();
            return text.split('\n').map(line => {
                const parts = line.split(' BREAK ');
                if (parts.length === 2) {
                    return { find: parts[0], replace: parts[1] };
                }
                return null;
            }).filter(p => p);
        } catch (err) {
            console.error("[WASM PATCHER] Failed to load patches:", err);
            return [];
        }
    }

    function findOccurrences(buffer, search) {
        const matches = [];
        for (let i = 0; i <= buffer.length - search.length; i++) {
            let found = true;
            for (let j = 0; j < search.length; j++) {
                if (buffer[i + j] !== search[j]) {
                    found = false;
                    break;
                }
            }
            if (found) matches.push(i);
        }
        return matches;
    }

    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
        if (typeof args[0] === "string" && args[0].includes("client.wasm")) {
            console.log("[WASM PATCHER] Intercepting WASM");
            const [patches, response] = await Promise.all([
                fetchPatches(),
                originalFetch(...args)
            ]);
            const buffer = await response.arrayBuffer();
            let bytes = new Uint8Array(buffer);

            patches.forEach(patch => {
                const findBytes = encoder.encode(patch.find);
                const replaceBytes = encoder.encode(patch.replace.padEnd(patch.find.length, '\0'));
                const occurrences = findOccurrences(bytes, findBytes);
                console.log(`[WASM PATCHER] Found ${occurrences.length} occurrence(s) of "${patch.find}"`);

                occurrences.forEach(offset => {
                    for (let i = 0; i < findBytes.length; i++) {
                        bytes[offset + i] = replaceBytes[i];
                    }
                    console.log(`[WASM PATCHER] Patched at 0x${offset.toString(16)}`);
                });
            });

            return new Response(bytes, {
                headers: { "Content-Type": "application/wasm" }
            });
        }
        return originalFetch(...args);
    };
})();
