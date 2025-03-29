// ==UserScript==
// @name         Florr WASM Override
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Replace florr.io client.wasm with a custom version
// @match        *://florr.io/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const ORIGINAL_WASM_URL = "https://static.florr.io/f9b2ac67df32d936b1f7ac300c29e5dd46745824/client.wasm";
    const CUSTOM_WASM_URL = "https://raw.githubusercontent.com/yourusername/yourrepo/main/client.wasm";

    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
        if (typeof args[0] === "string" && args[0].includes("client.wasm")) {
            console.log("[WASM OVERRIDE] Redirecting to custom WASM");
            args[0] = CUSTOM_WASM_URL;
        }
        return originalFetch(...args);
    };

    // For instantiateStreaming (Some sites use this)
    const originalInstantiateStreaming = WebAssembly.instantiateStreaming;
    WebAssembly.instantiateStreaming = async (source, importObject) => {
        if (source instanceof Response && source.url.includes("client.wasm")) {
            console.log("[WASM OVERRIDE] Redirecting instantiateStreaming to custom WASM");
            const newResponse = await fetch(CUSTOM_WASM_URL);
            return originalInstantiateStreaming(newResponse, importObject);
        }
        return originalInstantiateStreaming(source, importObject);
    };
})();
