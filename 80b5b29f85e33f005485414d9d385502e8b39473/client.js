null;
var l;
l || (l = typeof Module !== 'undefined' ? Module : {});
(function(D) {
    function Cb(a, b, c, d) {
        a || (a = this);
        this.parent = a;
        this.Mg = a.Mg;
        this.ti = null;
        this.id = f.em++;
        this.name = b;
        this.mode = c;
        this.Fg = {};
        this.Ig = {};
        this.xi = d
    }

    function N(a) {
        return "string" != typeof a ? 0 : ta(a)
    }

    function ha(a) {
        switch (a) {
            case 0:
                return 48;
            case 1:
                return 49;
            case 2:
                return 50;
            case 3:
                return 51;
            case 4:
                return 52;
            case 5:
                return 53;
            case 6:
                return 54;
            case 7:
                return 55;
            case 8:
                return 56;
            case 9:
                return 57;
            case 10:
                return 65;
            case 11:
                return 66;
            case 12:
                return 67;
            case 13:
                return 68;
            case 14:
                return 69;
            case 15:
                return 70;
            default:
                return 63
        }
    }

    function Qc() {
        window.onbeforeunload = null;
        location.reload(!0)
    }

    function Rc(a) {
        window.navigator.clipboard.writeText(a).then(function() {}).catch(function() {
            var b = document.activeElement,
                c = document.createElement("textarea");
            c.style.position = "fixed";
            c.style.top = 0;
            c.style.left = 0;
            c.style.width = "2em";
            c.style.height = "2em";
            c.style.margin = 0;
            c.style.padding = 0;
            c.style.border = "none";
            c.style.outline = "none";
            c.style.boxShadow = "none";
            c.style.background = "transparent";
            c.value = a;
            document.body.appendChild(c);
            c.focus();
            c.select();
            var d = !1;
            try {
                (d = document.execCommand("copy")) || console.log("execCommand copy failed")
            } catch (e) {}
            try {
                document.body.removeChild(c), d || window.prompt("Copy the following link to your clipboard:", a), b && b.focus()
            } catch (e) {}
        })
    }

    function fb(a, b) {
        gb += b;
        10485760 < gb && (gb = 0, Db = new TextDecoder("utf8"));
        //console.log(Db.decode(U.subarray(a, a + b)))
        return Db.decode(U.subarray(a, a + b))
    }

    function Eb() {
        (Fb = hb.Vh("Game", "aA0") && hb.Vh("Game", "\u69fd\u4f4d") && hb.Vh("Game", "\u88c5\u5099")) ? console.log("Fonts loaded"): window.requestAnimationFrame(Eb)
    }

    function Sc(a) {
        return l.locateFile ? l.locateFile(a, ra) : ra + a
    }

    function ua(a, b, c) {
        var d = b + c;
        for (c = b; a[c] && !(c >= d);) ++c;
        if (16 < c - b && a.buffer && Gb) return Gb.decode(a.subarray(b, c));
        for (d = ""; b < c;) {
            var e = a[b++];
            if (e & 128) {
                var g = a[b++] & 63;
                if (192 == (e & 224)) d += String.fromCharCode((e & 31) << 6 | g);
                else {
                    var h = a[b++] & 63;
                    e = 224 == (e & 240) ? (e & 15) << 12 | g << 6 | h : (e & 7) << 18 | g << 12 | h << 6 | a[b++] & 63;
                    65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023))
                }
            } else d += String.fromCharCode(e)
        }
        //console.log(d, b, c)
        return d
    }

    function y(a,
        b) {
        return a ? ua(U, a, b) : ""
    }

    function Na(a, b, c, d) {
        if (!(0 < d)) return 0;
        var e = c;
        d = c + d - 1;
        for (var g = 0; g < a.length; ++g) {
            var h = a.charCodeAt(g);
            if (55296 <= h && 57343 >= h) {
                var n = a.charCodeAt(++g);
                h = 65536 + ((h & 1023) << 10) | n & 1023
            }
            if (127 >= h) {
                if (c >= d) break;
                b[c++] = h
            } else {
                if (2047 >= h) {
                    if (c + 1 >= d) break;
                    b[c++] = 192 | h >> 6
                } else {
                    if (65535 >= h) {
                        if (c + 2 >= d) break;
                        b[c++] = 224 | h >> 12
                    } else {
                        if (c + 3 >= d) break;
                        b[c++] = 240 | h >> 18;
                        b[c++] = 128 | h >> 12 & 63
                    }
                    b[c++] = 128 | h >> 6 & 63
                }
                b[c++] = 128 | h & 63
            }
        }
        b[c] = 0;
        return c - e
    }

    function L(a, b, c) {
        return Na(a, U, b, c)
    }

    function Oa(a) {
        for (var b =
                0, c = 0; c < a.length; ++c) {
            var d = a.charCodeAt(c);
            127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3
        }
        return b
    }

    function Pa() {
        sa++;
        l.monitorRunDependencies && l.monitorRunDependencies(sa)
    }

    function va() {
        sa--;
        l.monitorRunDependencies && l.monitorRunDependencies(sa);
        if (0 == sa && (null !== ib && (clearInterval(ib), ib = null), Aa)) {
            var a = Aa;
            Aa = null;
            a()
        }
    }

    function da(a) {
        if (l.onAbort) l.onAbort(a);
        a = "Aborted(" + a + ")";
        ba(a);
        wa = !0;
        Qa = 1;
        throw new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
    }

    function Hb(a) {
        return a.startsWith("data:application/octet-stream;base64,")
    }

    function Ib(a) {
        try {
            if (a == ka && Ba) return new Uint8Array(Ba);
            if (Jb) return Jb(a);
            throw "both async and sync fetching of the wasm failed";
        } catch (b) {
            da(b)
        }
    }

    function Tc() {
        return Ba || "function" != typeof fetch ? Promise.resolve().then(function() {
            return Ib(ka)
        }) : fetch(ka, {
            credentials: "same-origin"
        }).then(function(a) {
            if (!a.ok) throw "failed to load wasm binary file at '" + ka + "'";
            return a.arrayBuffer()
        }).catch(function() {
            return Ib(ka)
        })
    }

    function Kb(a) {
        this.name = "ExitStatus";
        this.message = "Program terminated with exit(" +
            a + ")";
        this.status = a
    }

    function Uc(a, b, c) {
        a.addEventListener(b, c, {
            once: !0
        })
    }

    function Vc(a, b) {
        b || (b = [document, document.getElementById("canvas")]);
        ["keydown", "mousedown", "touchstart"].forEach(function(c) {
            b.forEach(function(d) {
                d && Uc(d, c, () => {
                    "suspended" === a.state && a.resume()
                })
            })
        })
    }

    function Ra(a) {
        for (; 0 < a.length;) a.shift()(l)
    }

    function Lb(a) {
        var b = Mb();
        a = a();
        Nb(b);
        return a
    }

    function S(a) {
        var b = Sa[a];
        b || (a >= Sa.length && (Sa.length = a + 1), Sa[a] = b = Ob.get(a));
        return b
    }

    function jb(a, b, c) {
        a.includes("j") ? (a = l["dynCall_" +
            a], b = c && c.length ? a.apply(null, [b].concat(c)) : a.call(null, b)) : b = S(b).apply(null, c);
        return b
    }

    function Pb(a) {
        if (a instanceof Kb || "unwind" == a) return Qa;
        kb(1, a)
    }

    function Qb(a, b, c = "i8") {
        c.endsWith("*") && (c = "*");
        switch (c) {
            case "i1":
                X[a >> 0] = b;
                break;
            case "i8":
                X[a >> 0] = b;
                break;
            case "i16":
                xa[a >> 1] = b;
                break;
            case "i32":
                m[a >> 2] = b;
                break;
            case "i64":
                T = [b >>> 0, (G = b, 1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
                m[a >> 2] = T[0];
                m[a + 4 >> 2] = T[1];
                break;
            case "float":
                I[a >> 2] = b;
                break;
            case "double":
                ea[a >> 3] = b;
                break;
            case "*":
                B[a >> 2] = b;
                break;
            default:
                da("invalid type for setValue: " + c)
        }
    }

    function Rb() {
        if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
            var a = new Uint8Array(1);
            return () => {
                crypto.getRandomValues(a);
                return a[0]
            }
        }
        return () => da("randomDevice")
    }

    function lb(a, b, c) {
        c = 0 < c ? c : Oa(a) + 1;
        c = Array(c);
        a = Na(a, c, 0, c.length);
        b && (c.length = a);
        return c
    }

    function Wc(a, b, c, d) {
        var e = d ? "" : "al " + a;
        Xc(a, g => {
            g || da('Loading data file "' + a + '" failed (no arrayBuffer).');
            b(new Uint8Array(g));
            e && va(e)
        }, () => {
            if (c) c();
            else throw 'Loading data file "' + a + '" failed.';
        });
        e && Pa(e)
    }

    function Ca(a, b) {
        r.Eg.bj = a;
        r.Eg.cj = b;
        if (!r.Eg.Rh) return 1;
        r.Eg.Rj || (r.Eg.Rj = !0);
        if (0 == a) r.Eg.Ch = function() {
            var d = Math.max(0, r.Eg.Am + b - mb()) | 0;
            setTimeout(r.Eg.Yi, d)
        }, r.Eg.method = "timeout";
        else if (1 == a) r.Eg.Ch = function() {
            r.requestAnimationFrame(r.Eg.Yi)
        }, r.Eg.method = "rAF";
        else if (2 == a) {
            if ("undefined" == typeof setImmediate) {
                var c = [];
                addEventListener("message", d => {
                    if ("setimmediate" === d.data || "setimmediate" ===
                        d.data.target) d.stopPropagation(), c.shift()()
                }, !0);
                setImmediate = function(d) {
                    c.push(d);
                    postMessage("setimmediate", "*")
                }
            }
            r.Eg.Ch = function() {
                setImmediate(r.Eg.Yi)
            };
            r.Eg.method = "immediate"
        }
        return 0
    }

    function Sb(a) {
        Qa = a;
        if (!Yc) {
            if (l.onExit) l.onExit(a);
            wa = !0
        }
        kb(a, new Kb(a))
    }

    function Tb(a, b, c, d, e) {
        !r.Eg.Rh || da("emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
        r.Eg.Rh =
            a;
        r.Eg.hj = d;
        var g = r.Eg.Qh;
        r.Eg.Rj = !1;
        r.Eg.Yi = function() {
            if (!wa)
                if (0 < r.Eg.Nk.length) {
                    var h = Date.now(),
                        n = r.Eg.Nk.shift();
                    n.Rh(n.hj);
                    if (r.Eg.Qj) {
                        var q = r.Eg.Qj,
                            u = 0 == q % 1 ? q - 1 : Math.floor(q);
                        r.Eg.Qj = n.Pm ? u : (8 * q + (u + .5)) / 9
                    }
                    Da('main loop blocker "' + n.name + '" took ' + (Date.now() - h) + " ms");
                    r.Eg.Hm();
                    g < r.Eg.Qh || setTimeout(r.Eg.Yi, 0)
                } else g < r.Eg.Qh || (r.Eg.lj = r.Eg.lj + 1 | 0, 1 == r.Eg.bj && 1 < r.Eg.cj && 0 != r.Eg.lj % r.Eg.cj ? r.Eg.Ch() : (0 == r.Eg.bj && (r.Eg.Am = mb()), r.Eg.tm(a), g < r.Eg.Qh || ("object" == typeof SDL && SDL.audio && SDL.audio.lm &&
                    SDL.audio.lm(), r.Eg.Ch())))
        };
        e || (b && 0 < b ? Ca(0, 1E3 / b) : Ca(1, 1), r.Eg.Ch());
        if (c) throw "unwind";
    }

    function Ta(a) {
        if (!wa) try {
            a()
        } catch (b) {
            Pb(b)
        }
    }

    function Ub(a, b) {
        return setTimeout(function() {
            Ta(a)
        }, b)
    }

    function Ea(a) {
        Ea.Tj || (Ea.Tj = {});
        Ea.Tj[a] || (Ea.Tj[a] = 1, ba(a))
    }

    function ta(a) {
        var b = Oa(a) + 1,
            c = Y(b);
        c && Na(a, X, c, b);
        return c
    }

    function Vb(a, b) {
        nb.length = 0;
        var c;
        for (b >>= 2; c = U[a++];) b += 105 != c & b, nb.push(105 == c ? m[b] : ea[b++ >> 1]), ++b;
        return nb
    }

    function Wb(a, b, c) {
        b = Vb(b, c);
        return Xb[a].apply(null, b)
    }

    function aa(a) {
        a =
            2 < a ? y(a) : a;
        return Ua[a] || document.querySelector(a)
    }

    function Yb(a) {
        return Lb(function() {
            var b = Va(8),
                c = b + 4,
                d = Va(a.id.length + 1);
            L(a.id, d, a.id.length + 1);
            if (d = aa(d)) m[b >> 2] = d.width, m[c >> 2] = d.height;
            return [m[b >> 2], m[c >> 2]]
        })
    }

    function Zb(a, b, c) {
        a = aa(a);
        if (!a) return -4;
        a.width = b;
        a.height = c;
        return 0
    }

    function $b(a, b, c) {
        a.Om ? Lb(function() {
            var d = Va(a.id.length + 1);
            L(a.id, d, a.id.length + 1);
            Zb(d, b, c)
        }) : (a.width = b, a.height = c)
    }

    function Zc(a) {
        function b() {
            document.fullscreenElement || document.webkitFullscreenElement ||
                document.msFullscreenElement || (document.removeEventListener("fullscreenchange", b), document.removeEventListener("webkitfullscreenchange", b), $b(a, d, e), a.style.width = g, a.style.height = h, a.style.backgroundColor = n, q || (document.body.style.backgroundColor = "white"), document.body.style.backgroundColor = q, a.style.paddingLeft = u, a.style.paddingRight = v, a.style.paddingTop = A, a.style.paddingBottom = E, a.style.marginLeft = t, a.style.marginRight = F, a.style.marginTop = M, a.style.marginBottom = Q, document.body.style.margin = Z, document.documentElement.style.overflow =
                    ma, document.body.scroll = C, a.style.Bh = R, a.hi && a.hi.xh.viewport(0, 0, d, e), Wa.Hi && S(Wa.Hi)(37, 0, Wa.dk))
        }
        var c = Yb(a),
            d = c[0],
            e = c[1],
            g = a.style.width,
            h = a.style.height,
            n = a.style.backgroundColor,
            q = document.body.style.backgroundColor,
            u = a.style.paddingLeft,
            v = a.style.paddingRight,
            A = a.style.paddingTop,
            E = a.style.paddingBottom,
            t = a.style.marginLeft,
            F = a.style.marginRight,
            M = a.style.marginTop,
            Q = a.style.marginBottom,
            Z = document.body.style.margin,
            ma = document.documentElement.style.overflow,
            C = document.body.scroll,
            R = a.style.Bh;
        document.addEventListener("fullscreenchange", b);
        document.addEventListener("webkitfullscreenchange", b);
        return b
    }

    function ob(a, b, c) {
        a.style.paddingLeft = a.style.paddingRight = c + "px";
        a.style.paddingTop = a.style.paddingBottom = b + "px"
    }

    function Xa(a) {
        return 0 > Ua.indexOf(a) ? a.getBoundingClientRect() : {
            left: 0,
            top: 0
        }
    }

    function pb(a, b) {
        if (0 != b.Sj || 0 != b.jj) {
            Zc(a);
            var c = b.ym ? innerWidth : screen.width,
                d = b.ym ? innerHeight : screen.height,
                e = Xa(a),
                g = e.width;
            e = e.height;
            var h = Yb(a),
                n = h[0];
            h = h[1];
            3 == b.Sj ? (ob(a, (d - e) / 2, (c - g) / 2),
                c = g, d = e) : 2 == b.Sj && (c * h < n * d ? (g = h * c / n, ob(a, (d - g) / 2, 0), d = g) : (g = n * d / h, ob(a, 0, (c - g) / 2), c = g));
            a.style.backgroundColor || (a.style.backgroundColor = "black");
            document.body.style.backgroundColor || (document.body.style.backgroundColor = "black");
            a.style.width = c + "px";
            a.style.height = d + "px";
            1 == b.Fl && (a.style.Bh = "optimizeSpeed", a.style.Bh = "-moz-crisp-edges", a.style.Bh = "-o-crisp-edges", a.style.Bh = "-webkit-optimize-contrast", a.style.Bh = "optimize-contrast", a.style.Bh = "crisp-edges", a.style.Bh = "pixelated");
            g = 2 == b.jj ? devicePixelRatio :
                1;
            0 != b.jj && (c = c * g | 0, d = d * g | 0, $b(a, c, d), a.hi && a.hi.xh.viewport(0, 0, c, d))
        }
        if (a.requestFullscreen) a.requestFullscreen();
        else if (a.webkitRequestFullscreen) a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        else return w.fullscreenEnabled() ? -3 : -1;
        Wa = b;
        b.Hi && S(b.Hi)(37, 0, b.dk);
        return 0
    }

    function qb(a) {
        if (a.requestPointerLock) a.requestPointerLock();
        else if (a.Xi) a.Xi();
        else return document.body.requestPointerLock || document.body.Xi ? -3 : -1;
        return 0
    }

    function ac(a, b) {
        ea[a >> 3] = b.timestamp;
        for (var c = 0; c < b.axes.length; ++c) ea[a +
            8 * c + 16 >> 3] = b.axes[c];
        for (c = 0; c < b.buttons.length; ++c) ea[a + 8 * c + 528 >> 3] = "object" == typeof b.buttons[c] ? b.buttons[c].value : b.buttons[c];
        for (c = 0; c < b.buttons.length; ++c) m[a + 4 * c + 1040 >> 2] = "object" == typeof b.buttons[c] ? b.buttons[c].pressed : 1 == b.buttons[c];
        m[a + 1296 >> 2] = b.connected;
        m[a + 1300 >> 2] = b.index;
        m[a + 8 >> 2] = b.axes.length;
        m[a + 12 >> 2] = b.buttons.length;
        L(b.id, a + 1304, 64);
        L(b.mapping, a + 1368, 64)
    }

    function na(a, b, c, d) {
        for (var e = 0; e < a; e++) {
            var g = k[c](),
                h = g && p.Sh(d);
            g ? (g.name = h, d[h] = g) : p.Dg(1282);
            m[b + 4 * e >> 2] = h
        }
    }

    function bc(a,
        b, c, d, e, g, h, n) {
        b = p.Jg[b];
        if (a = k[a](b, c)) d = n && L(a.name, n, d), e && (m[e >> 2] = d), g && (m[g >> 2] = a.size), h && (m[h >> 2] = a.type)
    }

    function Fa(a, b) {
        B[a >> 2] = b;
        B[a + 4 >> 2] = (b - B[a >> 2]) / 4294967296
    }

    function Ya(a, b, c) {
        if (b) {
            var d = D;
            switch (a) {
                case 36346:
                    d = 1;
                    break;
                case 36344:
                    0 != c && 1 != c && p.Dg(1280);
                    return;
                case 34814:
                case 36345:
                    d = 0;
                    break;
                case 34466:
                    var e = k.getParameter(34467);
                    d = e ? e.length : 0;
                    break;
                case 33309:
                    if (2 > p.Rg.version) {
                        p.Dg(1282);
                        return
                    }
                    d = 2 * (k.getSupportedExtensions() || []).length;
                    break;
                case 33307:
                case 33308:
                    if (2 > p.Rg.version) {
                        p.Dg(1280);
                        return
                    }
                    d = 33307 == a ? 3 : 0
            }
            if (d === D) switch (e = k.getParameter(a), typeof e) {
                case "number":
                    d = e;
                    break;
                case "boolean":
                    d = e ? 1 : 0;
                    break;
                case "string":
                    p.Dg(1280);
                    return;
                case "object":
                    if (null === e) switch (a) {
                        case 34964:
                        case 35725:
                        case 34965:
                        case 36006:
                        case 36007:
                        case 32873:
                        case 34229:
                        case 36662:
                        case 36663:
                        case 35053:
                        case 35055:
                        case 36010:
                        case 35097:
                        case 35869:
                        case 32874:
                        case 36389:
                        case 35983:
                        case 35368:
                        case 34068:
                            d = 0;
                            break;
                        default:
                            p.Dg(1280);
                            return
                    } else {
                        if (e instanceof Float32Array || e instanceof Uint32Array || e instanceof Int32Array || e instanceof Array) {
                            for (a = 0; a < e.length; ++a) switch (c) {
                                case 0:
                                    m[b + 4 * a >> 2] = e[a];
                                    break;
                                case 2:
                                    I[b + 4 * a >> 2] = e[a];
                                    break;
                                case 4:
                                    X[b + a >> 0] = e[a] ? 1 : 0
                            }
                            return
                        }
                        try {
                            d = e.name | 0
                        } catch (g) {
                            p.Dg(1280);
                            ba("GL_INVALID_ENUM in glGet" + c + "v: Unknown object returned from WebGL getParameter(" + a + ")! (error: " + g + ")");
                            return
                        }
                    }
                    break;
                default:
                    p.Dg(1280);
                    ba("GL_INVALID_ENUM in glGet" + c + "v: Native code calling glGet" + c + "v(" + a + ") and it returns " + e + " of type " + typeof e + "!");
                    return
            }
            switch (c) {
                case 1:
                    Fa(b, d);
                    break;
                case 0:
                    m[b >>
                        2] = d;
                    break;
                case 2:
                    I[b >> 2] = d;
                    break;
                case 4:
                    X[b >> 0] = d ? 1 : 0
            }
        } else p.Dg(1281)
    }

    function cc(a, b, c, d) {
        if (c) {
            b = k.getIndexedParameter(a, b);
            switch (typeof b) {
                case "boolean":
                    a = b ? 1 : 0;
                    break;
                case "number":
                    a = b;
                    break;
                case "object":
                    if (null === b) switch (a) {
                            case 35983:
                            case 35368:
                                a = 0;
                                break;
                            default:
                                p.Dg(1280);
                                return
                        } else if (b instanceof WebGLBuffer) a = b.name | 0;
                        else {
                            p.Dg(1280);
                            return
                        } break;
                default:
                    p.Dg(1280);
                    return
            }
            switch (d) {
                case 1:
                    Fa(c, a);
                    break;
                case 0:
                    m[c >> 2] = a;
                    break;
                case 2:
                    I[c >> 2] = a;
                    break;
                case 4:
                    X[c >> 0] = a ? 1 : 0;
                    break;
                default:
                    throw "internal emscriptenWebGLGetIndexed() error, bad type: " +
                        d;
            }
        } else p.Dg(1281)
    }

    function Ga(a) {
        var b = Oa(a) + 1,
            c = Y(b);
        L(a, c, b);
        return c
    }

    function dc(a) {
        return "]" == a.slice(-1) && a.lastIndexOf("[")
    }

    function ec(a) {
        var b = a.Di,
            c = a.Zk,
            d;
        if (!b)
            for (a.Di = b = {}, a.Yk = {}, d = 0; d < k.getProgramParameter(a, 35718); ++d) {
                var e = k.getActiveUniform(a, d);
                var g = e.name;
                e = e.size;
                var h = dc(g);
                h = 0 < h ? g.slice(0, h) : g;
                var n = a.Xj;
                a.Xj += e;
                c[h] = [e, n];
                for (g = 0; g < e; ++g) b[n] = g, a.Yk[n++] = h
            }
    }

    function J(a) {
        var b = k.rl;
        if (b) {
            var c = b.Di[a];
            "number" == typeof c && (b.Di[a] = c = k.getUniformLocation(b, b.Yk[a] + (0 < c ? "[" +
                c + "]" : "")));
            return c
        }
        p.Dg(1282)
    }

    function rb(a, b, c, d) {
        if (c)
            if (a = p.Jg[a], ec(a), a = k.getUniform(a, J(b)), "number" == typeof a || "boolean" == typeof a) switch (d) {
                case 0:
                    m[c >> 2] = a;
                    break;
                case 2:
                    I[c >> 2] = a
            } else
                for (b = 0; b < a.length; b++) switch (d) {
                    case 0:
                        m[c + 4 * b >> 2] = a[b];
                        break;
                    case 2:
                        I[c + 4 * b >> 2] = a[b]
                } else p.Dg(1281)
    }

    function Za(a, b, c, d) {
        if (c)
            if (a = k.getVertexAttrib(a, b), 34975 == b) m[c >> 2] = a && a.name;
            else if ("number" == typeof a || "boolean" == typeof a) switch (d) {
            case 0:
                m[c >> 2] = a;
                break;
            case 2:
                I[c >> 2] = a;
                break;
            case 5:
                m[c >> 2] = Math.fround(a)
        } else
            for (b =
                0; b < a.length; b++) switch (d) {
                case 0:
                    m[c + 4 * b >> 2] = a[b];
                    break;
                case 2:
                    I[c + 4 * b >> 2] = a[b];
                    break;
                case 5:
                    m[c + 4 * b >> 2] = Math.fround(a[b])
            } else p.Dg(1281)
    }

    function Ha(a) {
        a -= 5120;
        return 0 == a ? X : 1 == a ? U : 2 == a ? xa : 4 == a ? m : 6 == a ? I : 5 == a || 28922 == a || 28520 == a || 30779 == a || 30782 == a ? B : P
    }

    function Ia(a) {
        return 31 - Math.clz32(a.BYTES_PER_ELEMENT)
    }

    function $c(a, b) {
        if (!w.fullscreenEnabled()) return -1;
        a = aa(a);
        return a ? a.requestFullscreen || a.webkitRequestFullscreen ? w.ij() ? pb(a, b) : b.xl ? (w.lk(pb, 1, [a, b]), 1) : -2 : -3 : -4
    }

    function ad(a, b, c, d, e, g) {
        a = {
            target: aa(a),
            Sg: g,
            ah: d,
            eh: function(h) {
                h = h || event;
                var n = S(d)(e, 0, b);
                n && (n = y(n));
                if (n) return h.preventDefault(), h.returnValue = n
            },
            $g: c
        };
        w.gh(a)
    }

    function fc(a, b, c, d, e, g) {
        w.sk || (w.sk = Y(256));
        a = {
            target: aa(a),
            Sg: g,
            ah: d,
            eh: function(h) {
                h = h || event;
                var n = h.target.id ? h.target.id : "",
                    q = w.sk;
                L(w.vj(h.target), q + 0, 128);
                L(n, q + 128, 128);
                S(d)(e, q, b) && h.preventDefault()
            },
            $g: c
        };
        w.gh(a)
    }

    function gc(a, b, c, d, e, g) {
        w.tk || (w.tk = Y(280));
        w.gh({
            target: a,
            Sg: g,
            ah: d,
            eh: function(h) {
                h = h || event;
                var n = w.tk,
                    q = document.fullscreenElement ||
                    document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement,
                    u = !!q;
                m[n >> 2] = u;
                m[n + 4 >> 2] = w.fullscreenEnabled();
                var v = u ? q : w.km,
                    A = v && v.id ? v.id : "";
                L(w.vj(v), n + 8, 128);
                L(A, n + 136, 128);
                m[n + 264 >> 2] = v ? v.clientWidth : 0;
                m[n + 268 >> 2] = v ? v.clientHeight : 0;
                m[n + 272 >> 2] = screen.width;
                m[n + 276 >> 2] = screen.height;
                u && (w.km = q);
                S(d)(e, n, b) && h.preventDefault()
            },
            $g: c
        })
    }

    function hc(a, b, c, d, e, g) {
        w.vk || (w.vk = Y(1432));
        a = {
            target: aa(a),
            ji: !0,
            Sg: g,
            ah: d,
            eh: function(h) {
                h = h || event;
                var n = w.vk;
                ac(n, h.gamepad);
                S(d)(e, n, b) && h.preventDefault()
            },
            $g: c
        };
        w.gh(a)
    }

    function sb(a, b, c, d, e, g) {
        w.Ek || (w.Ek = Y(176));
        a = {
            target: aa(a),
            ji: !0,
            Sg: g,
            ah: d,
            eh: function(h) {
                var n = w.Ek;
                ea[n >> 3] = h.timeStamp;
                var q = n >> 2;
                m[q + 2] = h.location;
                m[q + 3] = h.ctrlKey;
                m[q + 4] = h.shiftKey;
                m[q + 5] = h.altKey;
                m[q + 6] = h.metaKey;
                m[q + 7] = h.repeat;
                m[q + 8] = h.charCode;
                m[q + 9] = h.keyCode;
                m[q + 10] = h.which;
                L(h.key || "", n + 44, 32);
                L(h.code || "", n + 76, 32);
                L(h.char || "", n + 108, 32);
                L(h.locale || "", n + 140, 32);
                S(d)(e, n, b) && h.preventDefault()
            },
            $g: c
        };
        w.gh(a)
    }

    function ic(a, b, c) {
        ea[a >> 3] =
            b.timeStamp;
        a >>= 2;
        m[a + 2] = b.screenX;
        m[a + 3] = b.screenY;
        m[a + 4] = b.clientX;
        m[a + 5] = b.clientY;
        m[a + 6] = b.ctrlKey;
        m[a + 7] = b.shiftKey;
        m[a + 8] = b.altKey;
        m[a + 9] = b.metaKey;
        xa[2 * a + 20] = b.button;
        xa[2 * a + 21] = b.buttons;
        m[a + 11] = b.movementX;
        m[a + 12] = b.movementY;
        c = Xa(c);
        m[a + 13] = b.clientX - c.left;
        m[a + 14] = b.clientY - c.top
    }

    function Ja(a, b, c, d, e, g) {
        w.Hj || (w.Hj = Y(72));
        a = aa(a);
        w.gh({
            target: a,
            ji: "mousemove" != g && "mouseenter" != g && "mouseleave" != g,
            Sg: g,
            ah: d,
            eh: function(h) {
                h = h || event;
                ic(w.Hj, h, a);
                S(d)(e, w.Hj, b) && h.preventDefault()
            },
            $g: c
        })
    }

    function $a(a, b, c, d, e, g) {
        w.Lk || (w.Lk = Y(260));
        w.gh({
            target: a,
            Sg: g,
            ah: d,
            eh: function(h) {
                h = h || event;
                var n = w.Lk,
                    q = document.pointerLockElement || document.qn || document.Nn || document.sn;
                m[n >> 2] = !!q;
                var u = q && q.id ? q.id : "";
                L(w.vj(q), n + 4, 128);
                L(u, n + 132, 128);
                S(d)(e, n, b) && h.preventDefault()
            },
            $g: c
        })
    }

    function bd(a, b, c, d, e, g) {
        w.Xk || (w.Xk = Y(36));
        a = aa(a);
        w.gh({
            target: a,
            Sg: g,
            ah: d,
            eh: function(h) {
                h = h || event;
                if (h.target == a) {
                    var n = document.body;
                    if (n) {
                        var q = w.Xk;
                        m[q >> 2] = h.detail;
                        m[q + 4 >> 2] = n.clientWidth;
                        m[q + 8 >> 2] = n.clientHeight;
                        m[q + 12 >> 2] = innerWidth;
                        m[q + 16 >> 2] = innerHeight;
                        m[q + 20 >> 2] = outerWidth;
                        m[q + 24 >> 2] = outerHeight;
                        m[q + 28 >> 2] = pageXOffset;
                        m[q + 32 >> 2] = pageYOffset;
                        S(d)(e, q, b) && h.preventDefault()
                    }
                }
            },
            $g: c
        })
    }

    function ab(a, b, c, d, e, g) {
        w.Vk || (w.Vk = Y(1696));
        a = aa(a);
        w.gh({
            target: a,
            ji: "touchstart" == g || "touchend" == g,
            Sg: g,
            ah: d,
            eh: function(h) {
                for (var n, q = {}, u = h.touches, v = 0; v < u.length; ++v) n = u[v], n.Ck = n.Kk = 0, q[n.identifier] = n;
                for (v = 0; v < h.changedTouches.length; ++v) n = h.changedTouches[v], n.Ck = 1, q[n.identifier] = n;
                for (v = 0; v < h.targetTouches.length; ++v) q[h.targetTouches[v].identifier].Kk =
                    1;
                u = w.Vk;
                ea[u >> 3] = h.timeStamp;
                var A = u >> 2;
                m[A + 3] = h.ctrlKey;
                m[A + 4] = h.shiftKey;
                m[A + 5] = h.altKey;
                m[A + 6] = h.metaKey;
                A += 7;
                var E = Xa(a),
                    t = 0;
                for (v in q)
                    if (n = q[v], m[A + 0] = n.identifier, m[A + 1] = n.screenX, m[A + 2] = n.screenY, m[A + 3] = n.clientX, m[A + 4] = n.clientY, m[A + 5] = n.pageX, m[A + 6] = n.pageY, m[A + 7] = n.Ck, m[A + 8] = n.Kk, m[A + 9] = n.clientX - E.left, m[A + 10] = n.clientY - E.top, A += 13, 31 < ++t) break;
                m[u + 8 >> 2] = t;
                S(d)(e, u, b) && h.preventDefault()
            },
            $g: c
        })
    }

    function cd(a, b, c, d, e, g) {
        w.$k || (w.$k = Y(8));
        w.gh({
            target: a,
            Sg: g,
            ah: d,
            eh: function(h) {
                h = h || event;
                var n = w.$k,
                    q = ["hidden", "visible", "prerender", "unloaded"].indexOf(document.visibilityState);
                m[n >> 2] = document.hidden;
                m[n + 4 >> 2] = q;
                S(d)(e, n, b) && h.preventDefault()
            },
            $g: c
        })
    }

    function dd(a, b, c, d, e, g) {
        w.al || (w.al = Y(104));
        w.gh({
            target: a,
            ji: !0,
            Sg: g,
            ah: d,
            eh: function(h) {
                h = h || event;
                var n = w.al;
                ic(n, h, a);
                ea[n + 72 >> 3] = h.deltaX;
                ea[n + 80 >> 3] = h.deltaY;
                ea[n + 88 >> 3] = h.deltaZ;
                m[n + 96 >> 2] = h.deltaMode;
                S(d)(e, n, b) && h.preventDefault()
            },
            $g: c
        })
    }

    function tb(a, b, c, d, e) {
        function g(R) {
            var ca = 0,
                ja = 0;
            R && (ja = C.response ? C.response.byteLength :
                0, ca = Y(ja), U.set(new Uint8Array(C.response), ca));
            B[a + 12 >> 2] = ca;
            O.Xg(a + 16, ja)
        }
        var h = B[a + 8 >> 2];
        if (h) {
            var n = y(h),
                q = a + 112,
                u = y(q);
            u || (u = "GET");
            var v = B[q + 52 >> 2],
                A = B[q + 56 >> 2],
                E = !!B[q + 60 >> 2],
                t = B[q + 68 >> 2],
                F = B[q + 72 >> 2];
            h = B[q + 76 >> 2];
            var M = B[q + 80 >> 2],
                Q = B[q + 84 >> 2];
            q = B[q + 88 >> 2];
            var Z = !!(v & 1),
                ma = !!(v & 2);
            v = !!(v & 64);
            t = t ? y(t) : D;
            F = F ? y(F) : D;
            var C = new XMLHttpRequest;
            C.withCredentials = E;
            C.open(u, n, !v, t, F);
            v || (C.timeout = A);
            C.Ln = n;
            C.responseType = "arraybuffer";
            M && (n = y(M), C.overrideMimeType(n));
            if (h)
                for (;;) {
                    u = B[h >> 2];
                    if (!u) break;
                    n = B[h + 4 >> 2];
                    if (!n) break;
                    h += 8;
                    u = y(u);
                    n = y(n);
                    C.setRequestHeader(u, n)
                }
            O.Zj.push(C);
            B[a + 0 >> 2] = O.Zj.length;
            h = Q && q ? U.slice(Q, Q + q) : null;
            C.onload = R => {
                g(Z && !ma);
                var ca = C.response ? C.response.byteLength : 0;
                O.Xg(a + 24, 0);
                ca && O.Xg(a + 32, ca);
                P[a + 40 >> 1] = C.readyState;
                P[a + 42 >> 1] = C.status;
                C.statusText && L(C.statusText, a + 44, 64);
                200 <= C.status && 300 > C.status ? b && b(a, C, R) : c && c(a, C, R)
            };
            C.onerror = R => {
                g(Z);
                var ca = C.status;
                O.Xg(a + 24, 0);
                O.Xg(a + 32, C.response ? C.response.byteLength : 0);
                P[a + 40 >> 1] = C.readyState;
                P[a + 42 >> 1] = ca;
                c && c(a, C,
                    R)
            };
            C.ontimeout = R => {
                c && c(a, C, R)
            };
            C.onprogress = R => {
                var ca = Z && ma && C.response ? C.response.byteLength : 0,
                    ja = 0;
                Z && ma && (ja = Y(ca), U.set(new Uint8Array(C.response), ja));
                B[a + 12 >> 2] = ja;
                O.Xg(a + 16, ca);
                O.Xg(a + 24, R.loaded - ca);
                O.Xg(a + 32, R.total);
                P[a + 40 >> 1] = C.readyState;
                3 <= C.readyState && 0 === C.status && 0 < R.loaded && (C.status = 200);
                P[a + 42 >> 1] = C.status;
                C.statusText && L(C.statusText, a + 44, 64);
                d && d(a, C, R);
                ja && pa(ja)
            };
            C.onreadystatechange = R => {
                P[a + 40 >> 1] = C.readyState;
                2 <= C.readyState && (P[a + 42 >> 1] = C.status);
                e && e(a, C, R)
            };
            try {
                C.send(h)
            } catch (R) {
                c &&
                    c(a, C, R)
            }
        } else c(a, 0, "no url specified!")
    }

    function jc(a, b, c, d, e) {
        if (a) {
            var g = B[b + 112 + 64 >> 2];
            g || (g = B[b + 8 >> 2]);
            var h = y(g);
            try {
                var n = a.transaction(["FILES"], "readwrite").objectStore("FILES").put(c, h);
                n.onsuccess = () => {
                    P[b + 40 >> 1] = 4;
                    P[b + 42 >> 1] = 200;
                    L("OK", b + 44, 64);
                    d(b, 0, h)
                };
                n.onerror = q => {
                    P[b + 40 >> 1] = 4;
                    P[b + 42 >> 1] = 413;
                    L("Payload Too Large", b + 44, 64);
                    e(b, 0, q)
                }
            } catch (q) {
                e(b, 0, q)
            }
        } else e(b, 0, "IndexedDB not available!")
    }

    function ed(a, b, c, d) {
        if (a) {
            var e = B[b + 112 + 64 >> 2];
            e || (e = B[b + 8 >> 2]);
            e = y(e);
            try {
                var g = a.transaction(["FILES"],
                    "readonly").objectStore("FILES").get(e);
                g.onsuccess = h => {
                    if (h.target.result) {
                        h = h.target.result;
                        var n = h.byteLength || h.length,
                            q = Y(n);
                        U.set(new Uint8Array(h), q);
                        B[b + 12 >> 2] = q;
                        O.Xg(b + 16, n);
                        O.Xg(b + 24, 0);
                        O.Xg(b + 32, n);
                        P[b + 40 >> 1] = 4;
                        P[b + 42 >> 1] = 200;
                        L("OK", b + 44, 64);
                        c(b, 0, h)
                    } else P[b + 40 >> 1] = 4, P[b + 42 >> 1] = 404, L("Not Found", b + 44, 64), d(b, 0, "no data")
                };
                g.onerror = h => {
                    P[b + 40 >> 1] = 4;
                    P[b + 42 >> 1] = 404;
                    L("Not Found", b + 44, 64);
                    d(b, 0, h)
                }
            } catch (h) {
                d(b, 0, h)
            }
        } else d(b, 0, "IndexedDB not available!")
    }

    function fd(a, b, c, d) {
        if (a) {
            var e =
                B[b + 112 + 64 >> 2];
            e || (e = B[b + 8 >> 2]);
            e = y(e);
            try {
                var g = a.transaction(["FILES"], "readwrite").objectStore("FILES").delete(e);
                g.onsuccess = h => {
                    h = h.target.result;
                    B[b + 12 >> 2] = 0;
                    O.Xg(b + 16, 0);
                    O.Xg(b + 24, 0);
                    O.Xg(b + 32, 0);
                    P[b + 40 >> 1] = 4;
                    P[b + 42 >> 1] = 200;
                    L("OK", b + 44, 64);
                    c(b, 0, h)
                };
                g.onerror = h => {
                    P[b + 40 >> 1] = 4;
                    P[b + 42 >> 1] = 404;
                    L("Not Found", b + 44, 64);
                    d(b, 0, h)
                }
            } catch (h) {
                d(b, 0, h)
            }
        } else d(b, 0, "IndexedDB not available!")
    }

    function Ka() {
        if (!Ka.Tk) {
            var a = {
                    USER: "web_user",
                    LOGNAME: "web_user",
                    PATH: "/",
                    PWD: "/",
                    HOME: "/home/web_user",
                    LANG: ("object" ==
                        typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                    _: kc || "./this.program"
                },
                b;
            for (b in ub) ub[b] === D ? delete a[b] : a[b] = ub[b];
            var c = [];
            for (b in a) c.push(b + "=" + a[b]);
            Ka.Tk = c
        }
        return Ka.Tk
    }

    function bb(a, b) {
        bb.Ok || (bb.Ok = Rb());
        for (var c = 0; c < b; c++) X[a + c >> 0] = bb.Ok();
        return 0
    }

    function cb(a) {
        return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400)
    }

    function gd(a, b, c, d) {
        function e(t, F, M) {
            for (t = "number" == typeof t ? t.toString() : t || ""; t.length < F;) t = M[0] + t;
            return t
        }

        function g(t, F) {
            return e(t,
                F, "0")
        }

        function h(t, F) {
            function M(Z) {
                return 0 > Z ? -1 : 0 < Z ? 1 : 0
            }
            var Q;
            0 === (Q = M(t.getFullYear() - F.getFullYear())) && 0 === (Q = M(t.getMonth() - F.getMonth())) && (Q = M(t.getDate() - F.getDate()));
            return Q
        }

        function n(t) {
            switch (t.getDay()) {
                case 0:
                    return new Date(t.getFullYear() - 1, 11, 29);
                case 1:
                    return t;
                case 2:
                    return new Date(t.getFullYear(), 0, 3);
                case 3:
                    return new Date(t.getFullYear(), 0, 2);
                case 4:
                    return new Date(t.getFullYear(), 0, 1);
                case 5:
                    return new Date(t.getFullYear() - 1, 11, 31);
                case 6:
                    return new Date(t.getFullYear() -
                        1, 11, 30)
            }
        }

        function q(t) {
            var F = t.Oh;
            for (t = new Date((new Date(t.Ph + 1900, 0, 1)).getTime()); 0 < F;) {
                var M = cb(t.getFullYear()),
                    Q = t.getMonth();
                M = (M ? lc : mc)[Q];
                if (F > M - t.getDate()) F -= M - t.getDate() + 1, t.setDate(1), 11 > Q ? t.setMonth(Q + 1) : (t.setMonth(0), t.setFullYear(t.getFullYear() + 1));
                else {
                    t.setDate(t.getDate() + F);
                    break
                }
            }
            Q = new Date(t.getFullYear() + 1, 0, 4);
            F = n(new Date(t.getFullYear(), 0, 4));
            Q = n(Q);
            return 0 >= h(F, t) ? 0 >= h(Q, t) ? t.getFullYear() + 1 : t.getFullYear() : t.getFullYear() - 1
        }
        var u = m[d + 40 >> 2];
        d = {
            Dm: m[d >> 2],
            Cm: m[d + 4 >>
                2],
            dj: m[d + 8 >> 2],
            Wj: m[d + 12 >> 2],
            ej: m[d + 16 >> 2],
            Ph: m[d + 20 >> 2],
            rh: m[d + 24 >> 2],
            Oh: m[d + 28 >> 2],
            In: m[d + 32 >> 2],
            Bm: m[d + 36 >> 2],
            Em: u ? y(u) : ""
        };
        c = y(c);
        u = {
            "%c": "%a %b %d %H:%M:%S %Y",
            "%D": "%m/%d/%y",
            "%F": "%Y-%m-%d",
            "%h": "%b",
            "%r": "%I:%M:%S %p",
            "%R": "%H:%M",
            "%T": "%H:%M:%S",
            "%x": "%m/%d/%y",
            "%X": "%H:%M:%S",
            "%Ec": "%c",
            "%EC": "%C",
            "%Ex": "%m/%d/%y",
            "%EX": "%H:%M:%S",
            "%Ey": "%y",
            "%EY": "%Y",
            "%Od": "%d",
            "%Oe": "%e",
            "%OH": "%H",
            "%OI": "%I",
            "%Om": "%m",
            "%OM": "%M",
            "%OS": "%S",
            "%Ou": "%u",
            "%OU": "%U",
            "%OV": "%V",
            "%Ow": "%w",
            "%OW": "%W",
            "%Oy": "%y"
        };
        for (var v in u) c = c.replace(new RegExp(v, "g"), u[v]);
        var A = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            E = "January February March April May June July August September October November December".split(" ");
        u = {
            "%a": function(t) {
                return A[t.rh].substring(0, 3)
            },
            "%A": function(t) {
                return A[t.rh]
            },
            "%b": function(t) {
                return E[t.ej].substring(0, 3)
            },
            "%B": function(t) {
                return E[t.ej]
            },
            "%C": function(t) {
                return g((t.Ph + 1900) / 100 | 0, 2)
            },
            "%d": function(t) {
                return g(t.Wj, 2)
            },
            "%e": function(t) {
                return e(t.Wj,
                    2, " ")
            },
            "%g": function(t) {
                return q(t).toString().substring(2)
            },
            "%G": function(t) {
                return q(t)
            },
            "%H": function(t) {
                return g(t.dj, 2)
            },
            "%I": function(t) {
                t = t.dj;
                0 == t ? t = 12 : 12 < t && (t -= 12);
                return g(t, 2)
            },
            "%j": function(t) {
                for (var F = t.Wj, M = cb(t.Ph + 1900) ? lc : mc, Q = 0, Z = 0; Z <= t.ej - 1; Q += M[Z++]);
                return g(F + Q, 3)
            },
            "%m": function(t) {
                return g(t.ej + 1, 2)
            },
            "%M": function(t) {
                return g(t.Cm, 2)
            },
            "%n": function() {
                return "\n"
            },
            "%p": function(t) {
                return 0 <= t.dj && 12 > t.dj ? "AM" : "PM"
            },
            "%S": function(t) {
                return g(t.Dm, 2)
            },
            "%t": function() {
                return "\t"
            },
            "%u": function(t) {
                return t.rh || 7
            },
            "%U": function(t) {
                return g(Math.floor((t.Oh + 7 - t.rh) / 7), 2)
            },
            "%V": function(t) {
                var F = Math.floor((t.Oh + 7 - (t.rh + 6) % 7) / 7);
                2 >= (t.rh + 371 - t.Oh - 2) % 7 && F++;
                if (F) 53 == F && (M = (t.rh + 371 - t.Oh) % 7, 4 == M || 3 == M && cb(t.Ph) || (F = 1));
                else {
                    F = 52;
                    var M = (t.rh + 7 - t.Oh - 1) % 7;
                    (4 == M || 5 == M && cb(t.Ph % 400 - 1)) && F++
                }
                return g(F, 2)
            },
            "%w": function(t) {
                return t.rh
            },
            "%W": function(t) {
                return g(Math.floor((t.Oh + 7 - (t.rh + 6) % 7) / 7), 2)
            },
            "%y": function(t) {
                return (t.Ph + 1900).toString().substring(2)
            },
            "%Y": function(t) {
                return t.Ph +
                    1900
            },
            "%z": function(t) {
                t = t.Bm;
                var F = 0 <= t;
                t = Math.abs(t) / 60;
                return (F ? "+" : "-") + String("0000" + (t / 60 * 100 + t % 60)).slice(-4)
            },
            "%Z": function(t) {
                return t.Em
            },
            "%%": function() {
                return "%"
            }
        };
        c = c.replace(/%%/g, "\x00\x00");
        for (v in u) c.includes(v) && (c = c.replace(new RegExp(v, "g"), u[v](d)));
        c = c.replace(/\0\0/g, "%");
        v = lb(c, !1);
        if (v.length > b) return 0;
        X.set(v, a);
        return v.length - 1
    }

    function nc() {
        function a() {
            if (!db && (db = !0, l.calledRun = !0, !wa)) {
                l.noFSInit || f.uh.zj || f.uh();
                f.Bk = !1;
                qa.uh();
                Ra(oc);
                Ra(hd);
                if (l.onRuntimeInitialized) l.onRuntimeInitialized();
                if (pc) {
                    var b = l._main;
                    try {
                        var c = b(0, 0);
                        Qa = c;
                        Sb(c)
                    } catch (d) {
                        Pb(d)
                    }
                }
                if (l.postRun)
                    for ("function" == typeof l.postRun && (l.postRun = [l.postRun]); l.postRun.length;) qc.unshift(l.postRun.shift());
                Ra(qc)
            }
        }
        if (!(0 < sa)) {
            if (l.preRun)
                for ("function" == typeof l.preRun && (l.preRun = [l.preRun]); l.preRun.length;) rc.unshift(l.preRun.shift());
            Ra(rc);
            0 < sa || (l.setStatus ? (l.setStatus("Running..."), setTimeout(function() {
                setTimeout(function() {
                    l.setStatus("")
                }, 1);
                a()
            }, 1)) : a())
        }
    }
    var ya = [],
        la = [],
        z = [],
        vb = [],
        ia = [],
        wb = [],
        fa = [],
        xb = [],
        jd = [],
        Fb = !1,
        Db = new TextDecoder("utf8"),
        gb = 0,
        hb = function() {
            function a() {
                if (!b) {
                    b = !0;
                    var e = document.body,
                        g = document.body.firstChild,
                        h = document.getElementById("fontdetectHelper") || document.createElement("div");
                    h.id = "fontdetectHelper";
                    d = document.createElement("span");
                    d.innerText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    h.appendChild(d);
                    e.insertBefore(h, g);
                    h.style.position = "fixed";
                    h.style.visibility = "hidden";
                    h.style.top = "-200px";
                    h.style.left = "-100000px";
                    h.style.width = "100000px";
                    h.style.height =
                        "200px";
                    h.style.fontSize = "100px"
                }
            }
            var b = !1,
                c = ["serif", "sans-serif", "monospace", "cursive", "fantasy"],
                d = null;
            return {
                xn: function(e, g, h, n) {
                    if (e) {
                        var q = n && n.cm ? n.cm : 100,
                            u = n && n.dm ? n.dm : 2E3;
                        if (g || h) {
                            if (b || a(), this.Vh(e)) return void(g && g(e));
                            var v = this,
                                A = (new Date).getTime(),
                                E = setInterval(function() {
                                    if (v.Vh(e)) return clearInterval(E), void g(e);
                                    (new Date).getTime() - A > u && (clearInterval(E), h && h(e))
                                }, q)
                        }
                    }
                },
                Vh: function(e, g) {
                    var h = 0,
                        n = 0;
                    b || a();
                    d.innerText = g || "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    for (g = 0; g < c.length; ++g) {
                        if (d.style.fontFamily = '"' + e + '",' + c[g], h = d.offsetWidth, 0 < g && h != n) return !1;
                        n = h
                    }
                    return !0
                },
                Pn: function(e) {
                    e = (e instanceof Element ? window.getComputedStyle(e).getPropertyValue("font-family") : window.gn ? (void 0)(e).Tm("font-family") : "").split(",");
                    for (var g = e.shift(); g;) {
                        g = g.replace(/^\s*['"]?\s*([^'"]*)\s*['"]?\s*$/, "$1");
                        for (var h = 0; h < c.length; h++)
                            if (g == c[h]) return g;
                        if (this.Vh(g)) return g;
                        g = e.shift()
                    }
                    return null
                }
            }
        }(),
        kd = function() {}.toString;
    "undefined" != typeof window && (document.addEventListener("paste",
        function(a) {
            var b = !0;
            a.target && "textInput" == a.target.className && (b = !1);
            if (b) {
                a.preventDefault();
                try {
                    var c = N(a.clipboardData.getData("text/plain"))
                } catch (d) {
                    return
                }
                sc(c);
                pa(c)
            }
        }, {
            capture: !0
        }), window.onbeforeunload = function() {
        if (tc()) return "Are you sure you want to leave?"
    }, window.addEventListener("blur", function() {
        yb()
    }), document.addEventListener("visibilitychange", function() {
        ("hidden" === document.visibilityState || document.hidden) && yb()
    }), window.addEventListener("mousedown", function(a) {
        a.preventDefault =
            function() {}
    }, {
        capture: !0
    }), window.addEventListener("dragstart", function(a) {
        a.preventDefault()
    }, {
        capture: !0
    }), window.addEventListener("selectstart", function(a) {
        var b = !0;
        a.target && "textInput" == a.target.className && (b = !1);
        b || (a.preventDefault = function() {});
        a.preventDefault()
    }, {
        capture: !0
    }), window.addEventListener("keydown", function(a) {
        var b = !0,
            c = a.keyCode;
        a.target && "textInput" == a.target.className && (b = !1);
        if (122 == c || 123 == c) b = !1;
        (a.ctrlKey || a.metaKey) && 88 == c && (b = !1);
        (a.ctrlKey || a.metaKey) && 67 == c && (b = !1);
        (a.ctrlKey || a.metaKey) && 86 == c && (b = !1);
        9 == c && a.preventDefault();
        b || (a.preventDefault = function() {})
    }, {
        capture: !0
    }), window.addEventListener("keypress", function(a) {
        var b = !0;
        a.target && "textInput" == a.target.className && (b = !1);
        b || (a.preventDefault = function() {})
    }, {
        capture: !0
    }), document.addEventListener("copy", function(a) {
        var b = !0;
        a.target && "textInput" == a.target.className && (b = !1);
        b && (a.preventDefault(), b = uc()) && (a.clipboardData.setData("text/plain", y(b)), pa(b))
    }, {
        capture: !0
    }), document.addEventListener("cut",
        function(a) {
            var b = !0;
            a.target && "textInput" == a.target.className && (b = !1);
            b && (a.preventDefault(), b = vc()) && (a.clipboardData.setData("text/plain", y(b)), pa(b))
        }, {
            capture: !0
        }), window.addEventListener("wheel", function(a) {
        var b = !1;
        a.wheelDeltaY ? a.wheelDeltaY === -3 * a.deltaY && (b = !0) : 0 === a.deltaMode && (b = !0);
        var c = a.deltaY / 175;
        b && (c *= 3);
        0 != a.deltaMode && (1 == a.deltaMode ? c /= 18 : 2 == a.deltaMode && (c /= 1E3));
        wc(c)
    }), window.cp6 = window.cp6 || {}, window.cp6.disconnect = function() {
        xc()
    }, window.cp6.forceServerID = function(a) {
        (a =
            N(a)) && yc(a);
        pa(a)
    }, window.cp6.simulateContextLoss = function() {
        zc()
    });
    Eb();
    l = l || {};
    var zb = {},
        eb = {};
    "undefined" != typeof window && window.addEventListener("beforeunload", function() {
        for (var a in eb) {
            var b = a;
            if (zb[b]) {
                try {
                    zb[b].close()
                } catch (c) {
                    console.error(c)
                }
                delete zb[b]
            }
            if (eb[b]) {
                try {
                    eb[b].close()
                } catch (c) {
                    console.error(c)
                }
                delete eb[b]
            }
            Ac(b, 0)
        }
    });
    var Bc = Object.assign({}, l),
        kc = "./this.program",
        kb = (a, b) => {
            throw b;
        },
        ra = "",
        Jb;
    "undefined" != typeof document && document.currentScript && (ra = document.currentScript.src);
    console.log(ra)
    ra = 0 !== ra.indexOf("blob:") ? ra.substr(0, ra.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "";
    var Cc = a => {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.send(null);
        return b.responseText
    };
    var Xc = (a, b, c) => {
        var d = new XMLHttpRequest;
        d.open("GET", a, !0);
        d.responseType = "arraybuffer";
        d.onload = () => {
            200 == d.status || 0 == d.status && d.response ? b(d.response) : c()
        };
        d.onerror = c;
        d.send(null)
    };
    var ld = a => document.title = a;
    var Da = l.print || console.log.bind(console),
        ba = l.printErr || console.warn.bind(console);
    Object.assign(l, Bc);
    Bc = null;
    l.thisProgram && (kc = l.thisProgram);
    l.quit && (kb = l.quit);
    var Ba;
    l.wasmBinary && (Ba = l.wasmBinary);
    var Yc = l.noExitRuntime || !0;
    "object" != typeof WebAssembly && da("no native wasm support detected");
    var Dc, wa = !1,
        Qa, Gb = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : D,
        Ec, X, U, xa, P, m, B, I, ea, Ob, rc = [],
        oc = [],
        hd = [],
        md = [],
        qc = [],
        sa = 0,
        ib = null,
        Aa = null;
    var ka = "https://raw.githubusercontent.com/rwH9G7T6vN/r4hq32lyDa/refs/heads/main/80b5b29f85e33f005485414d9d385502e8b39473/client.wasm"; //
    //Hb(ka) || (ka = Sc(ka)); // https://raw.githubusercontent.com/rwH9G7T6vN/r4hq32lyDa/refs/heads/main/80b5b29f85e33f005485414d9d385502e8b39473/client.wasm
    var G, T, Xb = {
            3674880: a => ta(encodeURIComponent(y(a))),
            3674943: () => {
                if (!document.referrer) return !1;
                var a = (new URL(document.referrer)).host;
                if ("florr.io" == a || -1 == a.indexOf("florr")) return !1;
                window.top.location = "https://florr.io/";
                return !0
            },
            3675169: () => {
                if (window == window.top || window.parent == window.top) return !1;
                window.top.location = "https://florr.io/";
                return !0
            },
            3675299: () => {
                try {
                    window.screen.orientation.lock("landscape").catch(function() {})
                } catch (a) {}
            },
            3675386: () => {
                function a() {
                    console.log("%cDO NOT PASTE ANYTHING IN HERE. IF YOU DIDN'T WRITE THE CODE, YOU DON'T KNOW WHAT IT DOES. IT MIGHT CAUSE YOUR ACCOUNT TO GET BANNED. YOU HAVE BEEN WARNED. DO NOT TRUST OTHERS.",
                        "background: #f00; color: #fff; border-radius: 2px; padding: 2px;")
                }
                setInterval(a, 5E3);
                a()
            },
            3675695: () => {
                document.getElementById("canvas").style.cursor = "default"
            },
            3675759: () => {
                document.getElementById("canvas").style.cursor = "pointer"
            },
            3675823: () => {
                document.getElementById("canvas").style.cursor = "text"
            },
            3675884: a => {
                Rc(y(a))
            },
            3675925: a => {
                fa[a].blur()
            },
            3675957: a => {
                fa[a].focus()
            },
            3675990: a => {
                var b = document.createElement("input");
                b.type = "text";
                b.className = "textInput";
                b.value = y(a);
                b.style.position = "fixed";
                b.onfocus = function() {
                    Fc(c)
                };
                document.getElementById("textInputContainer").appendChild(b);
                if (0 < xb.length) {
                    var c = xb.pop();
                    fa[c] = b
                } else c = fa.length, fa.push(b);
                return c
            },
            3676422: (a, b, c, d, e, g, h, n, q, u, v, A, E) => {
                a = fa[a];
                v = document.getElementById("canvas").width / (v ? window.innerHeight : window.innerWidth);
                a.maxLength = 0 > u ? null : u;
                a.disabled = !E;
                a.style.left = b / v + "px";
                a.style.top = c / v + "px";
                a.style.width = (d - 2 * q) / v + "px";
                a.style.height = e / v + "px";
                a.style.fontSize = (2048 * g | 0) / 2048 / v + "px";
                a.style.color = "rgb(" + (h >> 16) + ", " +
                    (h >> 8 & 255) + ", " + (h & 255) + ")";
                a.style.paddingLeft = q / v + "px";
                a.style.paddingRight = q / v + "px";
                a.style.textAlign = A ? "center" : "start";
                n ? document.activeElement != a && a.focus() : document.activeElement == a && a.blur()
            },
            3677112: a => {
                document.getElementById("textInputContainer").removeChild(fa[a]);
                fa[a] = null;
                xb.push(a)
            },
            3677255: (a, b) => {
                fa[a].value = y(b)
            },
            3677316: (a, b, c) => {
                a = fa[a];
                "backward" == a.selectionDirection ? (B[b >> 2] = a.selectionEnd, B[c >> 2] = a.selectionStart) : (B[b >> 2] = a.selectionStart, B[c >> 2] = a.selectionEnd)
            },
            3677542: (a,
                b, c) => {
                a = fa[a];
                b > c ? (a.selectionStart = c, a.selectionEnd = b, a.selectionDirection = "backward") : b < c ? (a.selectionStart = b, a.selectionEnd = c, a.selectionDirection = "forward") : (a.selectionStart = a.selectionEnd = b, a.selectionDirection = "none")
            },
            3677859: (a, b) => {
                a = fa[a];
                return a.value != y(b) ? N(a.value) : 0
            },
            3677970: a => {
                a = fa[a];
                document.activeElement != a && a.focus()
            },
            3678049: () => "https:" == location.protocol,
            3678091: a => {
                try {
                    window.location = y(a)
                } catch (b) {
                    console.error(b)
                }
            },
            3678168: a => {
                try {
                    window.open(y(a), "_blank").focus()
                } catch (b) {
                    console.error(b)
                }
            },
            3678258: () => N(window.location.hash.slice(1)),
            3678317: () => {
                if (window.location.hash) {
                    try {
                        window.history.replaceState(null, "", window.location.origin + window.location.pathname + window.location.search);
                        return
                    } catch (a) {}
                    "#" != window.location.hash && (window.location.hash = "")
                }
            },
            3678563: () => -1 != navigator.userAgent.indexOf("iPhone") || -1 != navigator.userAgent.indexOf("iPad") || -1 != navigator.userAgent.indexOf("Android") || -1 != navigator.userAgent.indexOf("Mobile") || -1 != navigator.userAgent.indexOf("Tablet"),
            3678805: () =>
                -1 != navigator.userAgent.indexOf("iPad") || -1 != navigator.userAgent.indexOf("Tablet"),
            3678905: () => -1 != navigator.userAgent.indexOf("iPhone") || -1 != navigator.userAgent.indexOf("iPad") || -1 != navigator.userAgent.indexOf("Macintosh"),
            3679055: () => window.innerWidth < window.innerHeight,
            3679106: (a, b) => {
                window.localStorage[y(a)] = y(b)
            },
            3679168: a => {
                delete window.localStorage[y(a)]
            },
            3679218: a => N(window.localStorage[y(a)] || null),
            3679293: a => {
                wb.push(a);
                ia[a] = null
            },
            3679344: () => {
                var a = new Path2D;
                if (0 < wb.length) {
                    var b = wb.pop();
                    ia[b] = a;
                    return b
                }
                ia.push(a);
                return ia.length - 1
            },
            3679525: (a, b, c) => {
                ia[a].moveTo(b, c)
            },
            3679559: (a, b, c) => {
                ia[a].lineTo(b, c)
            },
            3679593: (a, b, c, d, e) => {
                ia[a].quadraticCurveTo(b, c, d, e)
            },
            3679645: (a, b, c, d, e, g, h) => {
                ia[a].bezierCurveTo(b, c, d, e, g, h)
            },
            3679702: a => {
                ia[a].closePath()
            },
            3679733: () => N(location.hostname),
            3679780: () => "undefined" != typeof window.Android,
            3679832: () => -1 != window.navigator.userAgent.indexOf("Android") && /\bwv\b/.test(window.navigator.userAgent),
            3679941: () => /webview/i.test(window.navigator.userAgent),
            3679997: () => /\(Linux; Android [0-9.]+; [^\)]*Build/i.test(window.navigator.userAgent),
            3680083: () => N(navigator.userAgent),
            3680132: () => N(document.referrer),
            3680179: () => N(navigator.language),
            3680227: () => {
                var a = document.getElementById("canvas"),
                    b = document.createElement("canvas");
                b.id = "canvasOverlay";
                a.parentNode.insertBefore(b, a.nextSibling)
            },
            3680436: () => document.documentElement.clientWidth || window.innerWidth,
            3680506: () => document.documentElement.clientHeight || window.innerHeight,
            3680578: () => {
                var a = document.getElementById("canvas"),
                    b = document.getElementById("canvasOverlay");
                b.width != a.width && (b.width = a.width);
                b.height != a.height && (b.height = a.height)
            },
            3680848: a => {
                document.getElementById("canvas").dataset.fakeLandscape = a ? "true" : "false";
                document.getElementById("textInputContainer").dataset.fakeLandscape = a ? "true" : "false"
            },
            3681064: () => N((new URL(window.location)).searchParams.get("state")),
            3681146: () => N((new URL(window.location)).searchParams.get("code")),
            3681227: a => {
                a = new URL(y(a));
                var b = new URL(window.location),
                    c = !1;
                a.searchParams.forEach(function(d,
                    e) {
                    -1 == b.searchParams.getAll(e).indexOf(d) && (c = !0)
                });
                return c ? !1 : !0
            },
            3681495: () => {
                try {
                    var a = new URL(window.location);
                    a.searchParams.delete("state");
                    a.searchParams.delete("code");
                    a.searchParams.delete("oauth2");
                    window.history.replaceState({}, document.title, a)
                } catch (b) {
                    console.error(b)
                }
            },
            3681728: () => !!(window.googletag && "undefined" != typeof window.google_srt && window.aiptag && window.aiptag.cmd && window.aiptag.cmd.player && window.aiptag.cmd.player.push && window.aiptag.adplayer && window.aiptag.adplayer.startPreRoll),
            3682019: a => !!(y(a) in window),
            3682062: (a, b, c) => !!window[y(a)][y(b)][y(c)],
            3682137: (a, b, c) => !!window[y(a)][y(b)][y(c)],
            3682212: (a, b, c) => !!window[y(a)][y(b)][y(c)],
            3682287: (a, b, c) => !!window[y(a)][y(b)][y(c)],
            3682362: (a, b, c) => !!window[y(a)][y(b)](y(c)),
            3682437: (a, b, c) => 0 < window[y(a)][y(b)](y(c)).length,
            3682521: (a, b, c) => {
                a = window[y(a)][y(b)][y(c)];
                return !("function" == typeof a && kd.apply(a).indexOf(!0))
            },
            3682613: (a, b, c) => {
                window[y(c)](y(a), function(d) {
                    Ab(d[y(b)])
                })
            },
            3682709: (a, b, c) => {
                window[y(c)](y(a), function(d) {
                    Ab(d[y(b)])
                })
            },
            3682805: a => {
                a = new RegExp(y(a));
                for (var b in window)
                    if (a.test(b)) return !0;
                return !1
            },
            3682912: (a, b) => !!window[y(a)][y(b)],
            3682969: (a, b, c) => {
                var d = new Image;
                d.Xl = !1;
                d.onload = function() {
                    d.Xl = !0
                };
                var e = y(a);
                d.onerror = function() {
                    console.error("Failed to load image " + e)
                };
                0 == e.indexOf("static/") ? (a = "application/octet-binary", 115 == U[b] && (a = "image/svg+xml"), d.src = window.URL.createObjectURL(new Blob([new Uint8Array(X.buffer, b, c - b)], {
                    type: a
                }))) : d.src = e;
                for (b = 0; b < ya.length; ++b)
                    if (null == ya[b]) return ya[b] = d, b;
                ya.push(d);
                return ya.length - 1
            },
            3683618: a => {
                ya[a] = null
            },
            3683645: () => "undefined" != typeof performance && performance.now,
            3683709: () => performance.now(),
            3683739: () => Date.now(),
            3683762: function() {
                function a(d) {
                    d = y(d);
                    pa(d);
                    return d
                }

                function b(d) {
                    return function() {
                        return a(d.apply(this, arguments))
                    }
                }

                function c(d) {
                    return function() {
                        return JSON.parse("[" + y(d.apply(this, arguments)).trim().split("\n").join(",") + "]")
                    }
                }
                window.florrio = window.florrio || {};
                window.florrio.utils = window.florrio.utils || {};
                window.florrio.utils.generateMobImage =
                    b(Gc);
                window.florrio.utils.generatePetalImage = b(Hc);
                window.florrio.utils.calculateDropChance = Ic;
                window.florrio.utils.getMobs = c(Jc);
                window.florrio.utils.getPetals = c(Kc);
                window.florrio.utils.getTalents = c(Lc);
                window.florrio.utils.getAssemblerMatrix = function(d) {
                    return function() {
                        return JSON.parse(a(d.apply(this, arguments)))
                    }
                }(Mc)
            },
            3685062: () => "https:" == location.protocol,
            3685104: (a, b, c) => {
                var d = document.createElement("canvas");
                d.width = a;
                d.height = b;
                a = d.getContext("2d", {
                    storage: c ? "discardable" : "persistent"
                });
                if (0 < vb.length) {
                    var e = vb.pop();
                    z[e] = a
                } else e = z.length, z.push(a);
                d.Jj = function() {
                    Nc(e)
                };
                d.Kj = function() {
                    Oc(e)
                };
                return e
            },
            3685582: a => {
                a = z[a];
                a.direction && (a.direction = "ltr")
            },
            3685655: a => {
                var b = z[a].canvas;
                vb.push(a);
                delete b.Jj;
                delete b.Kj;
                b.width = 0;
                b.height = 0;
                z[a] = null
            },
            3685849: a => {
                z[a].save()
            },
            3685878: a => {
                z[a].restore()
            },
            3685910: a => {
                z[a].setTransform(1, 0, 0, 1, 0, 0)
            },
            3685963: (a, b, c, d, e, g, h) => {
                z[a].setTransform(b, c, d, e, g, h)
            },
            3686022: (a, b, c) => {
                a = z[a].canvas;
                a.width = b;
                a.height = c
            },
            3686103: (a, b, c) => {
                a = z[a].canvas;
                m[b >> 2] = a.width;
                m[c >> 2] = a.height
            },
            3686210: a => {
                z[a].fill()
            },
            3686239: (a, b, c) => {
                z[a].fill(ia[b], c ? "nonzero" : "evenodd")
            },
            3686309: a => {
                z[a].stroke()
            },
            3686340: (a, b) => {
                z[a].stroke(ia[b])
            },
            3686384: a => {
                z[a].clip()
            },
            3686413: (a, b) => {
                z[a].clip(ia[b])
            },
            3686455: a => {
                z[a].beginPath()
            },
            3686489: a => {
                z[a].closePath()
            },
            3686523: (a, b, c, d, e) => {
                z[a].rect(b, c, d, e)
            },
            3686566: a => {
                a = z[a];
                var b = a.canvas;
                a.clearRect(0, 0, b.width, b.height)
            },
            3686673: (a, b, c, d, e) => {
                z[a].clearRect(b, c, d, e)
            },
            3686761: a => {
                z[a].fillRect(0, 0, 1, 1)
            },
            3686804: (a,
                b, c) => {
                z[a].strokeRect(0, 0, b, c)
            },
            3686851: a => "string" == typeof z[a].strokeStyle,
            3686911: (a, b, c, d) => {
                b |= 0;
                c |= 0;
                d |= 0;
                z[a].fillStyle = String.fromCharCode(35, ha(b >> 4 & 15), ha(b & 15), ha(c >> 4 & 15), ha(c & 15), ha(d >> 4 & 15), ha(d & 15))
            },
            3687181: (a, b, c, d) => {
                b |= 0;
                c |= 0;
                d |= 0;
                z[a].strokeStyle = String.fromCharCode(35, ha(b >> 4 & 15), ha(b & 15), ha(c >> 4 & 15), ha(c & 15), ha(d >> 4 & 15), ha(d & 15))
            },
            3687453: (a, b) => {
                z[a].globalAlpha = b
            },
            3687492: (a, b) => {
                z[a].globalAlpha = b
            },
            3687531: (a, b, c) => {
                z[a].moveTo(b, c)
            },
            3687568: (a, b, c) => {
                z[a].lineTo(b, c)
            },
            3687605: (a,
                b, c, d, e) => {
                z[a].quadraticCurveTo(b, c, d, e)
            },
            3687660: (a, b, c, d, e, g, h) => {
                z[a].bezierCurveTo(b, c, d, e, g, h)
            },
            3687720: (a, b, c, d, e, g, h) => {
                z[a].arc(b, c, d, e, g, !!h)
            },
            3687772: (a, b, c, d, e, g, h, n, q) => {
                z[a].ellipse(b, c, d, e, g, h, n, !!q)
            },
            3687836: (a, b) => {
                z[a].lineWidth = b
            },
            3687873: (a, b) => {
                z[a].drawImage(z[b].canvas, 0, 0)
            },
            3687936: (a, b) => {
                z[a].drawImage(z[b].canvas, 0, 0, 1, 1)
            },
            3688005: (a, b, c, d, e, g) => {
                z[a].drawImage(z[b].canvas, c, d, e, g, 0, 0, 1, 1)
            },
            3688090: (a, b, c, d, e) => {
                z[a].fillText(fb(b, c), d, e)
            },
            3688159: (a, b, c, d, e) => {
                z[a].strokeText(fb(b,
                    c), d, e)
            },
            3688230: (a, b, c) => {
                a = z[a].measureText("0aA-_");
                I[b >> 2] = -a.fontBoundingBoxAscent;
                I[c >> 2] = a.fontBoundingBoxDescent
            },
            3688373: (a, b, c) => z[a].measureText(fb(b, c)).width,
            3688450: (a, b) => {
                z[a].font = "700 " + (2048 * b | 0) / 2048 + "px Game, Microsoft YaHei, sans-serif"
            },
            3688552: a => {
                z[a].textAlign = "center"
            },
            3688595: a => {
                z[a].lineCap = "butt"
            },
            3688634: a => {
                z[a].lineCap = "round"
            },
            3688674: a => {
                z[a].lineCap = "square"
            },
            3688715: a => {
                z[a].lineJoin = "round"
            },
            3688756: a => {
                z[a].lineJoin = "miter"
            },
            3688797: (a, b) => {
                z[a].miterLimit =
                    b
            },
            3688835: a => {
                z[a].setLineDash(jd)
            },
            3688884: (a, b) => {
                z[a].lineDashOffset = b
            },
            3688926: a => {
                z[a].globalCompositeOperation = "source-over"
            },
            3688991: a => {
                z[a].globalCompositeOperation = "destination-in"
            },
            3689059: a => {
                z[a].globalCompositeOperation = "copy"
            },
            3689117: a => {
                z[a].globalCompositeOperation = "lighter"
            },
            3689178: a => {
                z[a].globalCompositeOperation = "multiply"
            },
            3689240: (a, b, c, d, e, g) => {
                z[a].putImageData(new ImageData(new Uint8ClampedArray(X.buffer, b, c * d * 4), c, d), e, g)
            },
            3689360: (a, b) => {
                z[a].imageSmoothingEnabled = !!b
            },
            3689414: a => N(z[a].canvas.toDataURL()),
            3689479: (a, b) => {
                a = document.getElementById(y(a));
                if (null == a) return -1;
                b = a.getContext("2d", {
                    alpha: !!b
                });
                z.push(b);
                return z.length - 1
            },
            3689699: () => Fb,
            3689727: () => /^((?!chrome|android|firefox|edge).)*safari/i.test(window.navigator.userAgent),
            3689818: a => {
                var b = y(a);
                setTimeout(function() {
                    window.onbeforeunload = null;
                    var c = new URL(window.location);
                    c.hash = "";
                    c.searchParams.set("cp6_web_hash", b);
                    window.location = c
                }, 500)
            },
            3690043: () => {
                setTimeout(Qc, 500)
            },
            3690076: a => {
                a = y(a);
                var b = new WebSocket(a);
                (new URL(a)).hostname != (new URL(b.url)).hostname && (document.getElementById("loading").style.display = "none", document.getElementById("unsupported").style.display = "none", document.getElementById("errorDialog").style.display = "block", document.getElementById("canvas").style.display = "none");
                b.binaryType = "arraybuffer";
                b.th = [];
                b.onopen = function() {
                    b.th.push([2, 0, 0]);
                    La()
                };
                b.onerror = function() {
                    b.th.push([3, 0, 0]);
                    La()
                };
                b.onclose = function() {
                    b.th.push([4, 0, 0]);
                    La()
                };
                b.onmessage = function(c) {
                    c =
                        new Uint8Array(c.data);
                    var d = Y(c.length);
                    X.set(c, d);
                    b.th.push([1, d, c.length]);
                    La()
                };
                for (a = 0; a < la.length; ++a)
                    if (null == la[a]) return la[a] = b, a;
                la.push(b);
                return la.length - 1
            },
            3690829: a => {
                var b = la[a];
                b.onopen = b.onclose = b.onmessage = b.onerror = function() {};
                for (var c = 0; c < b.th.length; ++c) pa(b.th[c][1]);
                b.th = null;
                try {
                    b.close()
                } catch (d) {}
                la[a] = null
            },
            3691055: a => 1 == la[a].readyState,
            3691099: (a, b, c) => {
                a = la[a];
                if (1 != a.readyState) return 0;
                try {
                    a.send(X.subarray(b, b + c))
                } catch (d) {
                    return 0
                }
                return 1
            },
            3691236: (a, b, c) => {
                a =
                    la[a];
                if (0 == a.th.length) return 0;
                a = a.th.shift();
                B[b >> 2] = a[1];
                m[c >> 2] = a[2];
                return a[0]
            },
            3691388: () => N(navigator.userAgent),
            3691437: () => N(navigator.language),
            3691485: () => N(navigator.vendor || ""),
            3691537: () => N((navigator.languages || []).join(",")),
            3691604: () => N(Array.prototype.slice.apply(window.navigator.mimeTypes).map(function(a) {
                return a.type + "," + a.suffixes
            }).join(";")),
            3691753: () => N(Array.prototype.slice.apply(navigator.plugins).map(function(a) {
                return a.name
            }).join(",")),
            3691874: () => N((new Date("August 1, 2000 00:00:00")).getTimezoneOffset().toString()),
            3691972: () => N(screen.width + "x" + screen.height + "x" + window.devicePixelRatio),
            3692068: () => {
                try {
                    return window.localStorage, !1
                } catch (a) {
                    return !0
                }
            },
            3692140: () => "zh" == window.navigator.language.slice(0, 2),
            3692197: a => {
                document.documentElement.lang = y(a).replace(/_/g, "-")
            },
            3692270: () => N(window.navigator.languages.join(",")),
            3692336: a => {
                document.documentElement.lang = y(a).replace(/_/g, "-")
            },
            3692409: () => {
                window.florrio = window.florrio || {};
                window.florrio.utils = window.florrio.utils || {};
                window.florrio.utils.uploadCustomLang =
                    function() {
                        window.showOpenFilePicker({
                            id: "custom-lang-upload",
                            multiple: !0,
                            excludeAcceptAllOption: !0,
                            types: [{
                                description: "Translation files",
                                accept: {
                                    "text/plain": [".txt"]
                                }
                            }]
                        }).then(async function(a) {
                            a = (await Promise.all(a.map(async function(b) {
                                b = await b.getFile();
                                return "changelog.txt" == b.name ? (localStorage.setItem("florrio_custom_changelog", await b.text()), "") : await b.text()
                            }))).join("\n");
                            localStorage.setItem("florrio_custom_lang", a);
                            window.location.reload(!0)
                        }).catch(function(a) {
                            console.error(a)
                        })
                    }
            },
            3693202: () => "fontBoundingBoxDescent" in window.TextMetrics.prototype,
            3693271: a => {
                var b = z[a],
                    c = z[a].canvas;
                b.reset && b.reset();
                c.Jj && c.Jj();
                setTimeout(function() {
                    c.Kj && c.Kj()
                }, 1E3)
            },
            3693507: () => "https:" == location.protocol,
            3693549: () => "undefined" !== typeof AudioContext || "undefined" !== typeof webkitAudioContext ? !0 : !1,
            3693696: () => "undefined" !== typeof navigator.mediaDevices && "undefined" !== typeof navigator.mediaDevices.getUserMedia || "undefined" !== typeof navigator.webkitGetUserMedia ? !0 : !1,
            3693930: a => {
                "undefined" ===
                typeof l.SDL2 && (l.SDL2 = {});
                var b = l.SDL2;
                a ? b.capture = {} : b.audio = {};
                b.Og || ("undefined" !== typeof AudioContext ? b.Og = new AudioContext : "undefined" !== typeof webkitAudioContext && (b.Og = new webkitAudioContext), b.Og && Vc(b.Og));
                return b.Og === D ? -1 : 0
            },
            3694423: () => l.SDL2.Og.sampleRate,
            3694491: (a, b, c, d) => {
                function e() {}

                function g(n) {
                    h.capture.Bi !== D && (clearTimeout(h.capture.Bi), h.capture.Bi = D);
                    h.capture.Vi = h.Og.createMediaStreamSource(n);
                    h.capture.Zg = h.Og.createScriptProcessor(b, a, 1);
                    h.capture.Zg.onaudioprocess =
                        function(q) {
                            h !== D && h.capture !== D && (q.outputBuffer.getChannelData(0).fill(0), h.capture.kj = q.inputBuffer, jb("vi", c, [d]))
                        };
                    h.capture.Vi.connect(h.capture.Zg);
                    h.capture.Zg.connect(h.Og.destination);
                    h.capture.stream = n
                }
                var h = l.SDL2;
                h.capture.$i = h.Og.createBuffer(a, b, h.Og.sampleRate);
                h.capture.$i.getChannelData(0).fill(0);
                h.capture.Bi = setTimeout(function() {
                    h.capture.kj = h.capture.$i;
                    jb("vi", c, [d])
                }, b / h.Og.sampleRate * 1E3);
                navigator.mediaDevices !== D && navigator.mediaDevices.getUserMedia !== D ? navigator.mediaDevices.getUserMedia({
                    audio: !0,
                    video: !1
                }).then(g).catch(e) : navigator.webkitGetUserMedia !== D && navigator.webkitGetUserMedia({
                    audio: !0,
                    video: !1
                }, g, e)
            },
            3696143: (a, b, c, d) => {
                var e = l.SDL2;
                e.audio.Zg = e.Og.createScriptProcessor(b, 0, a);
                e.audio.Zg.onaudioprocess = function(g) {
                    e !== D && e.audio !== D && (e.audio.jk = g.outputBuffer, jb("vi", c, [d]))
                };
                e.audio.Zg.connect(e.Og.destination)
            },
            3696553: (a, b) => {
                for (var c = l.SDL2, d = c.capture.kj.numberOfChannels, e = 0; e < d; ++e) {
                    var g = c.capture.kj.getChannelData(e);
                    if (g.length != b) throw "Web Audio capture buffer length mismatch! Destination size: " +
                        g.length + " samples vs expected " + b + " samples!";
                    if (1 == d)
                        for (var h = 0; h < b; ++h) Qb(a + 4 * h, g[h], "float");
                    else
                        for (h = 0; h < b; ++h) Qb(a + 4 * (h * d + e), g[h], "float")
                }
            },
            3697158: (a, b) => {
                for (var c = l.SDL2, d = c.audio.jk.numberOfChannels, e = 0; e < d; ++e) {
                    var g = c.audio.jk.getChannelData(e);
                    if (g.length != b) throw "Web Audio output buffer length mismatch! Destination size: " + g.length + " samples vs expected " + b + " samples!";
                    for (var h = 0; h < b; ++h) g[h] = I[a + (h * d + e << 2) >> 2]
                }
            },
            3697638: a => {
                var b = l.SDL2;
                if (a) {
                    b.capture.Bi !== D && clearTimeout(b.capture.Bi);
                    if (b.capture.stream !== D) {
                        a = b.capture.stream.getAudioTracks();
                        for (var c = 0; c < a.length; c++) b.capture.stream.removeTrack(a[c]);
                        b.capture.stream = D
                    }
                    b.capture.Zg !== D && (b.capture.Zg.onaudioprocess = function() {}, b.capture.Zg.disconnect(), b.capture.Zg = D);
                    b.capture.Vi !== D && (b.capture.Vi.disconnect(), b.capture.Vi = D);
                    b.capture.$i !== D && (b.capture.$i = D);
                    b.capture = D
                } else b.audio.Zg != D && (b.audio.Zg.disconnect(), b.audio.Zg = D), b.audio = D;
                b.Og !== D && b.audio === D && b.capture === D && (b.Og.close(), b.Og = D)
            },
            3698810: (a, b, c) => {
                l.SDL2 ||
                    (l.SDL2 = {});
                var d = l.SDL2;
                d.pl !== l.canvas && (d.jh = l.createContext(l.canvas, !1, !0), d.pl = l.canvas);
                if (d.w !== a || d.Nl !== b || d.Ql !== d.jh) d.image = d.jh.createImageData(a, b), d.w = a, d.Nl = b, d.Ql = d.jh;
                a = d.image.data;
                b = c >> 2;
                var e = 0;
                if ("undefined" !== typeof CanvasPixelArray && a instanceof CanvasPixelArray)
                    for (c = a.length; e < c;) {
                        var g = m[b];
                        a[e] = g & 255;
                        a[e + 1] = g >> 8 & 255;
                        a[e + 2] = g >> 16 & 255;
                        a[e + 3] = 255;
                        b++;
                        e += 4
                    } else if (d.tl !== a && (d.sl = new Int32Array(a.buffer), d.ul = new Uint8Array(a.buffer), d.tl = a), a = d.sl, c = a.length, a.set(m.subarray(b,
                            b + c)), a = d.ul, b = 3, e = b + 4 * c, 0 == c % 8)
                        for (; b < e;) a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0, a[b] = 255, b = b + 4 | 0;
                    else
                        for (; b < e;) a[b] = 255, b = b + 4 | 0;
                d.jh.putImageData(d.image, 0, 0)
            },
            3700279: (a, b, c, d, e) => {
                var g = document.createElement("canvas");
                g.width = a;
                g.height = b;
                var h = g.getContext("2d");
                a = h.createImageData(a, b);
                b = a.data;
                e >>= 2;
                var n = 0,
                    q;
                if ("undefined" !== typeof CanvasPixelArray && b instanceof CanvasPixelArray)
                    for (q = b.length; n < q;) {
                        var u = m[e];
                        b[n] = u & 255;
                        b[n + 1] = u >> 8 & 255;
                        b[n + 2] = u >> 16 & 255;
                        b[n + 3] = u >> 24 & 255;
                        e++;
                        n += 4
                    } else b = new Int32Array(b.buffer), q = b.length, b.set(m.subarray(e, e + q));
                h.putImageData(a, 0, 0);
                c = 0 === c && 0 === d ? "url(" + g.toDataURL() + "), auto" : "url(" + g.toDataURL() + ") " + c + " " + d + ", auto";
                d = Y(c.length + 1);
                L(c, d, c.length + 1);
                return d
            },
            3701268: a => {
                l.canvas && (l.canvas.style.cursor = y(a))
            },
            3701351: () => {
                l.canvas && (l.canvas.style.cursor = "none")
            },
            3701420: () => window.innerWidth,
            3701450: () => window.innerHeight,
            3701481: (a, b) => {
                alert(y(a) + "\n\n" + y(b))
            },
            3701538: () => N(window.navigator.language || ""),
            3701599: () => N((window.navigator.languages || []).join(",")),
            3701671: () => (new Date).getTimezoneOffset(),
            3701714: () => N(window.navigator.platform || ""),
            3701775: () => N((window.navigator.userAgent || "").replace(/[0-9.]/gm, "")),
            3701863: () => N(window.navigator.vendor || ""),
            3701922: () => window.navigator.hardwareConcurrency,
            3701971: () => {
                var a = document.getElementById("xsolla-container");
                if (a) {
                    var b = document.getElementById("xsolla-container2");
                    b && (delete window.xsolla_window,
                        delete a.dataset.active, b.removeChild(document.getElementById("xsolla-iframe")))
                }
            },
            3702277: () => {
                var a = document.getElementById("xsolla-container");
                return a ? !!a.dataset.active : !1
            },
            3702406: a => {
                var b = document.getElementById("xsolla-container");
                if (b) {
                    var c = document.getElementById("xsolla-container2");
                    if (c) {
                        var d = document.createElement("iframe");
                        d.setAttribute("id", "xsolla-iframe");
                        d.setAttribute("src", y(a));
                        window.xsolla_window = d.contentWindow;
                        window.xsolla_listener_setup || (window.xsolla_listener_setup = !0, window.addEventListener("message", function(e) {
                            e.source == window.xsolla_window && console.log("Received xsolla message:", e)
                        }), (a = document.getElementById("xsolla-close")) && a.addEventListener("click", Pc));
                        b.dataset.active = "true";
                        c.appendChild(d)
                    }
                }
            }
        },
        Sa = [],
        K = {
            Cj: a => "/" === a.charAt(0),
            zm: a => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1),
            Ij: (a, b) => {
                for (var c = 0, d = a.length - 1; 0 <= d; d--) {
                    var e = a[d];
                    "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--)
                }
                if (b)
                    for (; c; c--) a.unshift("..");
                return a
            },
            normalize: a => {
                var b = K.Cj(a),
                    c = "/" === a.substr(-1);
                (a = K.Ij(a.split("/").filter(d => !!d), !b).join("/")) || b || (a = ".");
                a && c && (a += "/");
                return (b ? "/" : "") + a
            },
            dirname: a => {
                var b = K.zm(a);
                a = b[0];
                b = b[1];
                if (!a && !b) return ".";
                b && (b = b.substr(0, b.length - 1));
                return a + b
            },
            yh: a => {
                if ("/" === a) return "/";
                a = K.normalize(a);
                a = a.replace(/\/$/, "");
                var b = a.lastIndexOf("/");
                return -1 === b ? a : a.substr(b + 1)
            },
            join: function() {
                return K.normalize(Array.prototype.slice.call(arguments, 0).join("/"))
            },
            Hh: (a, b) => K.normalize(a + "/" + b)
        },
        oa = {
            resolve: function() {
                for (var a = "", b = !1, c = arguments.length - 1; - 1 <= c && !b; c--) {
                    b = 0 <= c ? arguments[c] : f.Li();
                    if ("string" != typeof b) throw new TypeError("Arguments to path.resolve must be strings");
                    if (!b) return "";
                    a = b + "/" + a;
                    b = K.Cj(b)
                }
                a = K.Ij(a.split("/").filter(d => !!d), !b).join("/");
                return (b ? "/" : "") + a || "."
            },
            Pk: (a, b) => {
                function c(h) {
                    for (var n = 0; n < h.length && "" === h[n]; n++);
                    for (var q = h.length - 1; 0 <= q && "" === h[q]; q--);
                    return n > q ? [] : h.slice(n, q - n + 1)
                }
                a = oa.resolve(a).substr(1);
                b = oa.resolve(b).substr(1);
                a = c(a.split("/"));
                b = c(b.split("/"));
                for (var d = Math.min(a.length, b.length), e = d, g = 0; g < d; g++)
                    if (a[g] !== b[g]) {
                        e = g;
                        break
                    } d = [];
                for (g = e; g < a.length; g++) d.push("..");
                d = d.concat(b.slice(e));
                return d.join("/")
            }
        },
        qa = {
            Wk: [],
            uh: function() {},
            Hn: function() {},
            register: function(a, b) {
                qa.Wk[a] = {
                    input: [],
                    Wg: [],
                    ai: b
                };
                f.Pj(a, qa.Ig)
            },
            Ig: {
                open: function(a) {
                    var b = qa.Wk[a.node.xi];
                    if (!b) throw new f.Cg(43);
                    a.Ng = b;
                    a.seekable = !1
                },
                close: function(a) {
                    a.Ng.ai.flush(a.Ng)
                },
                flush: function(a) {
                    a.Ng.ai.flush(a.Ng)
                },
                read: function(a, b, c, d) {
                    if (!a.Ng || !a.Ng.ai.yk) throw new f.Cg(60);
                    for (var e = 0, g = 0; g < d; g++) {
                        try {
                            var h = a.Ng.ai.yk(a.Ng)
                        } catch (n) {
                            throw new f.Cg(29);
                        }
                        if (h === D && 0 === e) throw new f.Cg(6);
                        if (null === h || h === D) break;
                        e++;
                        b[c + g] = h
                    }
                    e && (a.node.timestamp = Date.now());
                    return e
                },
                write: function(a, b, c, d) {
                    if (!a.Ng || !a.Ng.ai.Mj) throw new f.Cg(60);
                    try {
                        for (var e = 0; e < d; e++) a.Ng.ai.Mj(a.Ng, b[c + e])
                    } catch (g) {
                        throw new f.Cg(29);
                    }
                    d && (a.node.timestamp = Date.now());
                    return e
                }
            },
            wl: {
                yk: function(a) {
                    if (!a.input.length) {
                        var b = null;
                        "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "),
                            null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(), null !== b && (b += "\n"));
                        if (!b) return null;
                        a.input = lb(b, !0)
                    }
                    return a.input.shift()
                },
                Mj: function(a, b) {
                    null === b || 10 === b ? (Da(ua(a.Wg, 0)), a.Wg = []) : 0 != b && a.Wg.push(b)
                },
                flush: function(a) {
                    a.Wg && 0 < a.Wg.length && (Da(ua(a.Wg, 0)), a.Wg = [])
                }
            },
            vl: {
                Mj: function(a, b) {
                    null === b || 10 === b ? (ba(ua(a.Wg, 0)), a.Wg = []) : 0 != b && a.Wg.push(b)
                },
                flush: function(a) {
                    a.Wg && 0 < a.Wg.length && (ba(ua(a.Wg, 0)), a.Wg = [])
                }
            }
        },
        H = {
            qh: null,
            Mg: function() {
                return H.createNode(null, "/", 16895, 0)
            },
            createNode: function(a, b, c, d) {
                if (f.Ul(c) || f.Vl(c)) throw new f.Cg(63);
                H.qh || (H.qh = {
                    dir: {
                        node: {
                            nh: H.Fg.nh,
                            Ug: H.Fg.Ug,
                            Ih: H.Fg.Ih,
                            wh: H.Fg.wh,
                            zi: H.Fg.zi,
                            ei: H.Fg.ei,
                            Ai: H.Fg.Ai,
                            yi: H.Fg.yi,
                            Dh: H.Fg.Dh
                        },
                        stream: {
                            oh: H.Ig.oh
                        }
                    },
                    file: {
                        node: {
                            nh: H.Fg.nh,
                            Ug: H.Fg.Ug
                        },
                        stream: {
                            oh: H.Ig.oh,
                            read: H.Ig.read,
                            write: H.Ig.write,
                            ii: H.Ig.ii,
                            Wh: H.Ig.Wh,
                            Zh: H.Ig.Zh
                        }
                    },
                    link: {
                        node: {
                            nh: H.Fg.nh,
                            Ug: H.Fg.Ug,
                            Mh: H.Fg.Mh
                        },
                        stream: {}
                    },
                    fk: {
                        node: {
                            nh: H.Fg.nh,
                            Ug: H.Fg.Ug
                        },
                        stream: f.il
                    }
                });
                c = f.createNode(a, b, c, d);
                f.Tg(c.mode) ? (c.Fg = H.qh.dir.node, c.Ig =
                    H.qh.dir.stream, c.Hg = {}) : f.isFile(c.mode) ? (c.Fg = H.qh.file.node, c.Ig = H.qh.file.stream, c.Lg = 0, c.Hg = null) : f.ri(c.mode) ? (c.Fg = H.qh.link.node, c.Ig = H.qh.link.stream) : f.Ni(c.mode) && (c.Fg = H.qh.fk.node, c.Ig = H.qh.fk.stream);
                c.timestamp = Date.now();
                a && (a.Hg[b] = c, a.timestamp = c.timestamp);
                return c
            },
            cn: function(a) {
                return a.Hg ? a.Hg.subarray ? a.Hg.subarray(0, a.Lg) : new Uint8Array(a.Hg) : new Uint8Array(0)
            },
            qk: function(a, b) {
                var c = a.Hg ? a.Hg.length : 0;
                c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)),
                    c = a.Hg, a.Hg = new Uint8Array(b), 0 < a.Lg && a.Hg.set(c.subarray(0, a.Lg), 0))
            },
            rm: function(a, b) {
                if (a.Lg != b)
                    if (0 == b) a.Hg = null, a.Lg = 0;
                    else {
                        var c = a.Hg;
                        a.Hg = new Uint8Array(b);
                        c && a.Hg.set(c.subarray(0, Math.min(b, a.Lg)));
                        a.Lg = b
                    }
            },
            Fg: {
                nh: function(a) {
                    var b = {};
                    b.zl = f.Ni(a.mode) ? a.id : 1;
                    b.Aj = a.id;
                    b.mode = a.mode;
                    b.gm = 1;
                    b.uid = 0;
                    b.Ml = 0;
                    b.xi = a.xi;
                    f.Tg(a.mode) ? b.size = 4096 : f.isFile(a.mode) ? b.size = a.Lg : b.size = f.ri(a.mode) ? a.link.length : 0;
                    b.ck = new Date(a.timestamp);
                    b.Ik = new Date(a.timestamp);
                    b.ik = new Date(a.timestamp);
                    b.dl =
                        4096;
                    b.el = Math.ceil(b.size / b.dl);
                    return b
                },
                Ug: function(a, b) {
                    b.mode !== D && (a.mode = b.mode);
                    b.timestamp !== D && (a.timestamp = b.timestamp);
                    b.size !== D && H.rm(a, b.size)
                },
                Ih: function() {
                    throw f.sj[44];
                },
                wh: function(a, b, c, d) {
                    return H.createNode(a, b, c, d)
                },
                zi: function(a, b, c) {
                    if (f.Tg(a.mode)) {
                        try {
                            var d = f.vh(b, c)
                        } catch (g) {}
                        if (d)
                            for (var e in d.Hg) throw new f.Cg(55);
                    }
                    delete a.parent.Hg[a.name];
                    a.parent.timestamp = Date.now();
                    a.name = c;
                    b.Hg[c] = a;
                    b.timestamp = a.parent.timestamp;
                    a.parent = b
                },
                ei: function(a, b) {
                    delete a.Hg[b];
                    a.timestamp = Date.now()
                },
                Ai: function(a, b) {
                    var c = f.vh(a, b),
                        d;
                    for (d in c.Hg) throw new f.Cg(55);
                    delete a.Hg[b];
                    a.timestamp = Date.now()
                },
                yi: function(a) {
                    var b = [".", ".."],
                        c;
                    for (c in a.Hg) a.Hg.hasOwnProperty(c) && b.push(c);
                    return b
                },
                Dh: function(a, b, c) {
                    a = H.createNode(a, b, 41471, 0);
                    a.link = c;
                    return a
                },
                Mh: function(a) {
                    if (!f.ri(a.mode)) throw new f.Cg(28);
                    return a.link
                }
            },
            Ig: {
                read: function(a, b, c, d, e) {
                    var g = a.node.Hg;
                    if (e >= a.node.Lg) return 0;
                    a = Math.min(a.node.Lg - e, d);
                    if (8 < a && g.subarray) b.set(g.subarray(e, e + a), c);
                    else
                        for (d =
                            0; d < a; d++) b[c + d] = g[e + d];
                    return a
                },
                write: function(a, b, c, d, e, g) {
                    if (!d) return 0;
                    a = a.node;
                    a.timestamp = Date.now();
                    if (b.subarray && (!a.Hg || a.Hg.subarray)) {
                        if (g) return a.Hg = b.subarray(c, c + d), a.Lg = d;
                        if (0 === a.Lg && 0 === e) return a.Hg = b.slice(c, c + d), a.Lg = d;
                        if (e + d <= a.Lg) return a.Hg.set(b.subarray(c, c + d), e), d
                    }
                    H.qk(a, e + d);
                    if (a.Hg.subarray && b.subarray) a.Hg.set(b.subarray(c, c + d), e);
                    else
                        for (g = 0; g < d; g++) a.Hg[e + g] = b[c + g];
                    a.Lg = Math.max(a.Lg, e + d);
                    return d
                },
                oh: function(a, b, c) {
                    1 === c ? b += a.position : 2 === c && f.isFile(a.node.mode) &&
                        (b += a.node.Lg);
                    if (0 > b) throw new f.Cg(28);
                    return b
                },
                ii: function(a, b, c) {
                    H.qk(a.node, b + c);
                    a.node.Lg = Math.max(a.node.Lg, b + c)
                },
                Wh: function(a, b, c, d, e) {
                    if (!f.isFile(a.node.mode)) throw new f.Cg(43);
                    a = a.node.Hg;
                    if (e & 2 || a.buffer !== Ec) {
                        if (0 < c || c + b < a.length) a = a.subarray ? a.subarray(c, c + b) : Array.prototype.slice.call(a, c, c + b);
                        c = !0;
                        da();
                        b = void 0;
                        if (!b) throw new f.Cg(48);
                        X.set(a, b)
                    } else c = !1, b = a.byteOffset;
                    return {
                        An: b,
                        Lm: c
                    }
                },
                Zh: function(a, b, c, d, e) {
                    if (!f.isFile(a.node.mode)) throw new f.Cg(43);
                    if (e & 2) return 0;
                    H.Ig.write(a,
                        b, 0, d, c, !1);
                    return 0
                }
            },
        },
        f = {
            root: null,
            ui: [],
            mk: {},
            streams: [],
            em: 1,
            ph: null,
            kk: "/",
            zj: !1,
            Bk: !0,
            Cg: null,
            sj: {},
            El: null,
            aj: 0,
            Kg: (a, b = {}) => {
                a = oa.resolve(f.Li(), a);
                if (!a) return {
                    path: "",
                    node: null
                };
                b = Object.assign({
                    qj: !0,
                    Oj: 0
                }, b);
                if (8 < b.Oj) throw new f.Cg(32);
                a = K.Ij(a.split("/").filter(h => !!h), !1);
                for (var c = f.root, d = "/", e = 0; e < a.length; e++) {
                    var g = e === a.length - 1;
                    if (g && b.parent) break;
                    c = f.vh(c, a[e]);
                    d = K.Hh(d, a[e]);
                    f.Gh(c) && (!g || g && b.qj) && (c = c.ti.root);
                    if (!g || b.mh)
                        for (g = 0; f.ri(c.mode);)
                            if (c = f.Mh(d), d = oa.resolve(K.dirname(d),
                                    c), c = f.Kg(d, {
                                    Oj: b.Oj + 1
                                }).node, 40 < g++) throw new f.Cg(32);
                }
                return {
                    path: d,
                    node: c
                }
            },
            Ah: a => {
                for (var b;;) {
                    if (f.Oi(a)) return a = a.Mg.Hk, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
                    b = b ? a.name + "/" + b : a.name;
                    a = a.parent
                }
            },
            xj: (a, b) => {
                for (var c = 0, d = 0; d < b.length; d++) c = (c << 5) - c + b.charCodeAt(d) | 0;
                return (a + c >>> 0) % f.ph.length
            },
            zk: a => {
                var b = f.xj(a.parent.id, a.name);
                a.Kh = f.ph[b];
                f.ph[b] = a
            },
            Ak: a => {
                var b = f.xj(a.parent.id, a.name);
                if (f.ph[b] === a) f.ph[b] = a.Kh;
                else
                    for (b = f.ph[b]; b;) {
                        if (b.Kh === a) {
                            b.Kh = a.Kh;
                            break
                        }
                        b = b.Kh
                    }
            },
            vh: (a, b) => {
                var c =
                    f.Yl(a);
                if (c) throw new f.Cg(c, a);
                for (c = f.ph[f.xj(a.id, b)]; c; c = c.Kh) {
                    var d = c.name;
                    if (c.parent.id === a.id && d === b) return c
                }
                return f.Ih(a, b)
            },
            createNode: (a, b, c, d) => {
                a = new f.bl(a, b, c, d);
                f.zk(a);
                return a
            },
            oj: a => {
                f.Ak(a)
            },
            Oi: a => a === a.parent,
            Gh: a => !!a.ti,
            isFile: a => 32768 === (a & 61440),
            Tg: a => 16384 === (a & 61440),
            ri: a => 40960 === (a & 61440),
            Ni: a => 8192 === (a & 61440),
            Ul: a => 24576 === (a & 61440),
            Vl: a => 4096 === (a & 61440),
            fn: a => 49152 === (a & 49152),
            Gl: {
                r: 0,
                "r+": 2,
                w: 577,
                "w+": 578,
                a: 1089,
                "a+": 1090
            },
            am: a => {
                var b = f.Gl[a];
                if ("undefined" ==
                    typeof b) throw Error("Unknown file open mode: " + a);
                return b
            },
            rk: a => {
                var b = ["r", "w", "rw"][a & 3];
                a & 512 && (b += "w");
                return b
            },
            Lh: (a, b) => {
                if (f.Bk) return 0;
                if (!b.includes("r") || a.mode & 292) {
                    if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) return 2
                } else return 2;
                return 0
            },
            Yl: a => {
                var b = f.Lh(a, "x");
                return b ? b : a.Fg.Ih ? 0 : 2
            },
            Gj: (a, b) => {
                try {
                    return f.vh(a, b), 20
                } catch (c) {}
                return f.Lh(a, "wx")
            },
            Ui: (a, b, c) => {
                try {
                    var d = f.vh(a, b)
                } catch (e) {
                    return e.lh
                }
                if (a = f.Lh(a, "wx")) return a;
                if (c) {
                    if (!f.Tg(d.mode)) return 54;
                    if (f.Oi(d) || f.Ah(d) === f.Li()) return 10
                } else if (f.Tg(d.mode)) return 31;
                return 0
            },
            Zl: (a, b) => a ? f.ri(a.mode) ? 32 : f.Tg(a.mode) && ("r" !== f.rk(b) || b & 512) ? 31 : f.Lh(a, f.rk(b)) : 44,
            cl: 4096,
            fm: (a = 0, b = f.cl) => {
                for (; a <= b; a++)
                    if (!f.streams[a]) return a;
                throw new f.Cg(33);
            },
            Th: a => f.streams[a],
            hk: (a, b, c) => {
                f.Fi || (f.Fi = function() {
                    this.Zi = {}
                }, f.Fi.prototype = {}, Object.defineProperties(f.Fi.prototype, {
                    object: {
                        get: function() {
                            return this.node
                        },
                        set: function(d) {
                            this.node = d
                        }
                    },
                    flags: {
                        get: function() {
                            return this.Zi.flags
                        },
                        set: function(d) {
                            this.Zi.flags =
                                d
                        }
                    },
                    position: {
                        get: function() {
                            return this.Zi.position
                        },
                        set: function(d) {
                            this.Zi.position = d
                        }
                    }
                }));
                a = Object.assign(new f.Fi, a);
                b = f.fm(b, c);
                a.mi = b;
                return f.streams[b] = a
            },
            jl: a => {
                f.streams[a] = null
            },
            il: {
                open: a => {
                    a.Ig = f.Hl(a.node.xi).Ig;
                    a.Ig.open && a.Ig.open(a)
                },
                oh: () => {
                    throw new f.Cg(70);
                }
            },
            Ej: a => a >> 8,
            on: a => a & 255,
            Jh: (a, b) => a << 8 | b,
            Pj: (a, b) => {
                f.mk[a] = {
                    Ig: b
                }
            },
            Hl: a => f.mk[a],
            xk: a => {
                var b = [];
                for (a = [a]; a.length;) {
                    var c = a.pop();
                    b.push(c);
                    a.push.apply(a, c.ui)
                }
                return b
            },
            Uk: (a, b) => {
                function c(h) {
                    f.aj--;
                    return b(h)
                }

                function d(h) {
                    if (h) {
                        if (!d.Al) return d.Al = !0, c(h)
                    } else ++g >= e.length && c(null)
                }
                "function" == typeof a && (b = a, a = !1);
                f.aj++;
                1 < f.aj && ba("warning: " + f.aj + " FS.syncfs operations in flight at once, probably just doing extra work");
                var e = f.xk(f.root.Mg),
                    g = 0;
                e.forEach(h => {
                    if (!h.type.Uk) return d(null);
                    h.type.Uk(h, a, d)
                })
            },
            Mg: (a, b, c) => {
                var d = "/" === c,
                    e = !c;
                if (d && f.root) throw new f.Cg(10);
                if (!d && !e) {
                    var g = f.Kg(c, {
                        qj: !1
                    });
                    c = g.path;
                    g = g.node;
                    if (f.Gh(g)) throw new f.Cg(10);
                    if (!f.Tg(g.mode)) throw new f.Cg(54);
                }
                b = {
                    type: a,
                    yn: b,
                    Hk: c,
                    ui: []
                };
                a = a.Mg(b);
                a.Mg = b;
                b.root = a;
                d ? f.root = a : g && (g.ti = b, g.Mg && g.Mg.ui.push(b));
                return a
            },
            Kn: a => {
                a = f.Kg(a, {
                    qj: !1
                });
                if (!f.Gh(a.node)) throw new f.Cg(28);
                a = a.node;
                var b = a.ti,
                    c = f.xk(b);
                Object.keys(f.ph).forEach(d => {
                    for (d = f.ph[d]; d;) {
                        var e = d.Kh;
                        c.includes(d.Mg) && f.oj(d);
                        d = e
                    }
                });
                a.ti = null;
                a.Mg.ui.splice(a.Mg.ui.indexOf(b), 1)
            },
            Ih: (a, b) => a.Fg.Ih(a, b),
            wh: (a, b, c) => {
                var d = f.Kg(a, {
                    parent: !0
                }).node;
                a = K.yh(a);
                if (!a || "." === a || ".." === a) throw new f.Cg(28);
                var e = f.Gj(d, a);
                if (e) throw new f.Cg(e);
                if (!d.Fg.wh) throw new f.Cg(63);
                return d.Fg.wh(d, a, b, c)
            },
            create: (a, b) => {
                b = b !== D ? b : 438;
                return f.wh(a, b & 4095 | 32768, 0)
            },
            fh: (a, b) => {
                b = b !== D ? b : 511;
                return f.wh(a, b & 1023 | 16384, 0)
            },
            pn: (a, b) => {
                a = a.split("/");
                for (var c = "", d = 0; d < a.length; ++d)
                    if (a[d]) {
                        c += "/" + a[d];
                        try {
                            f.fh(c, b)
                        } catch (e) {
                            if (20 != e.lh) throw e;
                        }
                    }
            },
            Wi: (a, b, c) => {
                "undefined" == typeof c && (c = b, b = 438);
                return f.wh(a, b | 8192, c)
            },
            Dh: (a, b) => {
                if (!oa.resolve(a)) throw new f.Cg(44);
                var c = f.Kg(b, {
                    parent: !0
                }).node;
                if (!c) throw new f.Cg(44);
                b = K.yh(b);
                var d = f.Gj(c, b);
                if (d) throw new f.Cg(d);
                if (!c.Fg.Dh) throw new f.Cg(63);
                return c.Fg.Dh(c,
                    b, a)
            },
            zi: (a, b) => {
                var c = K.dirname(a),
                    d = K.dirname(b),
                    e = K.yh(a),
                    g = K.yh(b);
                var h = f.Kg(a, {
                    parent: !0
                });
                var n = h.node;
                h = f.Kg(b, {
                    parent: !0
                });
                h = h.node;
                if (!n || !h) throw new f.Cg(44);
                if (n.Mg !== h.Mg) throw new f.Cg(75);
                var q = f.vh(n, e);
                a = oa.Pk(a, d);
                if ("." !== a.charAt(0)) throw new f.Cg(28);
                a = oa.Pk(b, c);
                if ("." !== a.charAt(0)) throw new f.Cg(55);
                try {
                    var u = f.vh(h, g)
                } catch (v) {}
                if (q !== u) {
                    b = f.Tg(q.mode);
                    if (e = f.Ui(n, e, b)) throw new f.Cg(e);
                    if (e = u ? f.Ui(h, g, b) : f.Gj(h, g)) throw new f.Cg(e);
                    if (!n.Fg.zi) throw new f.Cg(63);
                    if (f.Gh(q) ||
                        u && f.Gh(u)) throw new f.Cg(10);
                    if (h !== n && (e = f.Lh(n, "w"))) throw new f.Cg(e);
                    f.Ak(q);
                    try {
                        n.Fg.zi(q, h, g)
                    } catch (v) {
                        throw v;
                    } finally {
                        f.zk(q)
                    }
                }
            },
            Ai: a => {
                var b = f.Kg(a, {
                    parent: !0
                }).node;
                a = K.yh(a);
                var c = f.vh(b, a),
                    d = f.Ui(b, a, !0);
                if (d) throw new f.Cg(d);
                if (!b.Fg.Ai) throw new f.Cg(63);
                if (f.Gh(c)) throw new f.Cg(10);
                b.Fg.Ai(b, a);
                f.oj(c)
            },
            yi: a => {
                a = f.Kg(a, {
                    mh: !0
                }).node;
                if (!a.Fg.yi) throw new f.Cg(54);
                return a.Fg.yi(a)
            },
            ei: a => {
                var b = f.Kg(a, {
                    parent: !0
                }).node;
                if (!b) throw new f.Cg(44);
                a = K.yh(a);
                var c = f.vh(b, a),
                    d = f.Ui(b,
                        a, !1);
                if (d) throw new f.Cg(d);
                if (!b.Fg.ei) throw new f.Cg(63);
                if (f.Gh(c)) throw new f.Cg(10);
                b.Fg.ei(b, a);
                f.oj(c)
            },
            Mh: a => {
                a = f.Kg(a).node;
                if (!a) throw new f.Cg(44);
                if (!a.Fg.Mh) throw new f.Cg(28);
                return oa.resolve(f.Ah(a.parent), a.Fg.Mh(a))
            },
            stat: (a, b) => {
                a = f.Kg(a, {
                    mh: !b
                }).node;
                if (!a) throw new f.Cg(44);
                if (!a.Fg.nh) throw new f.Cg(63);
                return a.Fg.nh(a)
            },
            mn: a => f.stat(a, !0),
            Ii: (a, b, c) => {
                a = "string" == typeof a ? f.Kg(a, {
                    mh: !c
                }).node : a;
                if (!a.Fg.Ug) throw new f.Cg(63);
                a.Fg.Ug(a, {
                    mode: b & 4095 | a.mode & -4096,
                    timestamp: Date.now()
                })
            },
            hn: (a, b) => {
                f.Ii(a, b, !0)
            },
            Zm: (a, b) => {
                a = f.Th(a);
                if (!a) throw new f.Cg(8);
                f.Ii(a.node, b)
            },
            ek: (a, b, c, d) => {
                a = "string" == typeof a ? f.Kg(a, {
                    mh: !d
                }).node : a;
                if (!a.Fg.Ug) throw new f.Cg(63);
                a.Fg.Ug(a, {
                    timestamp: Date.now()
                })
            },
            jn: (a, b, c) => {
                f.ek(a, b, c, !0)
            },
            $m: (a, b, c) => {
                a = f.Th(a);
                if (!a) throw new f.Cg(8);
                f.ek(a.node, b, c)
            },
            truncate: (a, b) => {
                if (0 > b) throw new f.Cg(28);
                a = "string" == typeof a ? f.Kg(a, {
                    mh: !0
                }).node : a;
                if (!a.Fg.Ug) throw new f.Cg(63);
                if (f.Tg(a.mode)) throw new f.Cg(31);
                if (!f.isFile(a.mode)) throw new f.Cg(28);
                var c =
                    f.Lh(a, "w");
                if (c) throw new f.Cg(c);
                a.Fg.Ug(a, {
                    size: b,
                    timestamp: Date.now()
                })
            },
            bn: (a, b) => {
                a = f.Th(a);
                if (!a) throw new f.Cg(8);
                if (0 === (a.flags & 2097155)) throw new f.Cg(28);
                f.truncate(a.node, b)
            },
            Mn: (a, b, c) => {
                a = f.Kg(a, {
                    mh: !0
                }).node;
                a.Fg.Ug(a, {
                    timestamp: Math.max(b, c)
                })
            },
            open: (a, b, c) => {
                if ("" === a) throw new f.Cg(44);
                b = "string" == typeof b ? f.am(b) : b;
                c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
                if ("object" == typeof a) var d = a;
                else {
                    a = K.normalize(a);
                    try {
                        d = f.Kg(a, {
                            mh: !(b & 131072)
                        }).node
                    } catch (g) {}
                }
                var e = !1;
                if (b & 64)
                    if (d) {
                        if (b &
                            128) throw new f.Cg(20);
                    } else d = f.wh(a, c, 0), e = !0;
                if (!d) throw new f.Cg(44);
                f.Ni(d.mode) && (b &= -513);
                if (b & 65536 && !f.Tg(d.mode)) throw new f.Cg(54);
                if (!e && (c = f.Zl(d, b))) throw new f.Cg(c);
                b & 512 && !e && f.truncate(d, 0);
                b &= -131713;
                d = f.hk({
                    node: d,
                    path: f.Ah(d),
                    flags: b,
                    seekable: !0,
                    position: 0,
                    Ig: d.Ig,
                    Fm: [],
                    error: !1
                });
                d.Ig.open && d.Ig.open(d);
                !l.logReadFiles || b & 1 || (f.Nj || (f.Nj = {}), a in f.Nj || (f.Nj[a] = 1));
                return d
            },
            close: a => {
                if (f.oi(a)) throw new f.Cg(8);
                a.wj && (a.wj = null);
                try {
                    a.Ig.close && a.Ig.close(a)
                } catch (b) {
                    throw b;
                } finally {
                    f.jl(a.mi)
                }
                a.mi = null
            },
            oi: a => null === a.mi,
            oh: (a, b, c) => {
                if (f.oi(a)) throw new f.Cg(8);
                if (!a.seekable || !a.Ig.oh) throw new f.Cg(70);
                if (0 != c && 1 != c && 2 != c) throw new f.Cg(28);
                a.position = a.Ig.oh(a, b, c);
                a.Fm = [];
                return a.position
            },
            read: (a, b, c, d, e) => {
                if (0 > d || 0 > e) throw new f.Cg(28);
                if (f.oi(a)) throw new f.Cg(8);
                if (1 === (a.flags & 2097155)) throw new f.Cg(8);
                if (f.Tg(a.node.mode)) throw new f.Cg(31);
                if (!a.Ig.read) throw new f.Cg(28);
                var g = "undefined" != typeof e;
                if (!g) e = a.position;
                else if (!a.seekable) throw new f.Cg(70);
                b = a.Ig.read(a, b, c, d, e);
                g || (a.position += b);
                return b
            },
            write: (a, b, c, d, e, g) => {
                if (0 > d || 0 > e) throw new f.Cg(28);
                if (f.oi(a)) throw new f.Cg(8);
                if (0 === (a.flags & 2097155)) throw new f.Cg(8);
                if (f.Tg(a.node.mode)) throw new f.Cg(31);
                if (!a.Ig.write) throw new f.Cg(28);
                a.seekable && a.flags & 1024 && f.oh(a, 0, 2);
                var h = "undefined" != typeof e;
                if (!h) e = a.position;
                else if (!a.seekable) throw new f.Cg(70);
                b = a.Ig.write(a, b, c, d, e, g);
                h || (a.position += b);
                return b
            },
            ii: (a, b, c) => {
                if (f.oi(a)) throw new f.Cg(8);
                if (0 > b || 0 >= c) throw new f.Cg(28);
                if (0 === (a.flags & 2097155)) throw new f.Cg(8);
                if (!f.isFile(a.node.mode) && !f.Tg(a.node.mode)) throw new f.Cg(43);
                if (!a.Ig.ii) throw new f.Cg(138);
                a.Ig.ii(a, b, c)
            },
            Wh: (a, b, c, d, e) => {
                if (0 !== (d & 2) && 0 === (e & 2) && 2 !== (a.flags & 2097155)) throw new f.Cg(2);
                if (1 === (a.flags & 2097155)) throw new f.Cg(2);
                if (!a.Ig.Wh) throw new f.Cg(43);
                return a.Ig.Wh(a, b, c, d, e)
            },
            Zh: (a, b, c, d, e) => a && a.Ig.Zh ? a.Ig.Zh(a, b, c, d, e) : 0,
            un: () => 0,
            Bj: (a, b, c) => {
                if (!a.Ig.Bj) throw new f.Cg(59);
                return a.Ig.Bj(a, b, c)
            },
            Cn: (a, b = {}) => {
                b.flags = b.flags || 0;
                b.encoding =
                    b.encoding || "binary";
                if ("utf8" !== b.encoding && "binary" !== b.encoding) throw Error('Invalid encoding type "' + b.encoding + '"');
                var c, d = f.open(a, b.flags);
                a = f.stat(a).size;
                var e = new Uint8Array(a);
                f.read(d, e, 0, a, 0);
                "utf8" === b.encoding ? c = ua(e, 0) : "binary" === b.encoding && (c = e);
                f.close(d);
                return c
            },
            Tn: (a, b, c = {}) => {
                c.flags = c.flags || 577;
                a = f.open(a, c.flags, c.mode);
                if ("string" == typeof b) {
                    var d = new Uint8Array(Oa(b) + 1);
                    b = Na(b, d, 0, d.length);
                    f.write(a, d, 0, b, D, c.gl)
                } else if (ArrayBuffer.isView(b)) f.write(a, b, 0, b.byteLength,
                    D, c.gl);
                else throw Error("Unsupported data type");
                f.close(a)
            },
            Li: () => f.kk,
            Nm: a => {
                a = f.Kg(a, {
                    mh: !0
                });
                if (null === a.node) throw new f.Cg(44);
                if (!f.Tg(a.node.mode)) throw new f.Cg(54);
                var b = f.Lh(a.node, "x");
                if (b) throw new f.Cg(b);
                f.kk = a.path
            },
            ll: () => {
                f.fh("/tmp");
                f.fh("/home");
                f.fh("/home/web_user")
            },
            kl: () => {
                f.fh("/dev");
                f.Pj(f.Jh(1, 3), {
                    read: () => 0,
                    write: (b, c, d, e) => e
                });
                f.Wi("/dev/null", f.Jh(1, 3));
                qa.register(f.Jh(5, 0), qa.wl);
                qa.register(f.Jh(6, 0), qa.vl);
                f.Wi("/dev/tty", f.Jh(5, 0));
                f.Wi("/dev/tty1", f.Jh(6, 0));
                var a = Rb();
                f.zh("/dev", "random", a);
                f.zh("/dev", "urandom", a);
                f.fh("/dev/shm");
                f.fh("/dev/shm/tmp")
            },
            nl: () => {
                f.fh("/proc");
                var a = f.fh("/proc/self");
                f.fh("/proc/self/fd");
                f.Mg({
                    Mg: () => {
                        var b = f.createNode(a, "fd", 16895, 73);
                        b.Fg = {
                            Ih: (c, d) => {
                                var e = f.Th(+d);
                                if (!e) throw new f.Cg(8);
                                c = {
                                    parent: null,
                                    Mg: {
                                        Hk: "fake"
                                    },
                                    Fg: {
                                        Mh: () => e.path
                                    }
                                };
                                return c.parent = c
                            }
                        };
                        return b
                    }
                }, {}, "/proc/self/fd")
            },
            ol: () => {
                l.stdin ? f.zh("/dev", "stdin", l.stdin) : f.Dh("/dev/tty", "/dev/stdin");
                l.stdout ? f.zh("/dev", "stdout", null, l.stdout) : f.Dh("/dev/tty",
                    "/dev/stdout");
                l.stderr ? f.zh("/dev", "stderr", null, l.stderr) : f.Dh("/dev/tty1", "/dev/stderr");
                f.open("/dev/stdin", 0);
                f.open("/dev/stdout", 1);
                f.open("/dev/stderr", 1)
            },
            pk: () => {
                f.Cg || (f.Cg = function(a, b) {
                    this.node = b;
                    this.vm = function(c) {
                        this.lh = c
                    };
                    this.vm(a);
                    this.message = "FS error"
                }, f.Cg.prototype = Error(), f.Cg.prototype.constructor = f.Cg, [44].forEach(a => {
                    f.sj[a] = new f.Cg(a);
                    f.sj[a].stack = "<generic error, no stack>"
                }))
            },
            Uj: () => {
                f.pk();
                f.ph = Array(4096);
                f.Mg(H, {}, "/");
                f.ll();
                f.kl();
                f.nl();
                f.El = {
                    MEMFS: H
                }
            },
            uh: (a,
                b, c) => {
                f.uh.zj = !0;
                f.pk();
                l.stdin = a || l.stdin;
                l.stdout = b || l.stdout;
                l.stderr = c || l.stderr;
                f.ol()
            },
            Bn: () => {
                f.uh.zj = !1;
                for (var a = 0; a < f.streams.length; a++) {
                    var b = f.streams[a];
                    b && f.close(b)
                }
            },
            uj: (a, b) => {
                var c = 0;
                a && (c |= 365);
                b && (c |= 146);
                return c
            },
            an: (a, b) => {
                a = f.gj(a, b);
                return a.pj ? a.object : null
            },
            gj: (a, b) => {
                try {
                    var c = f.Kg(a, {
                        mh: !b
                    });
                    a = c.path
                } catch (e) {}
                var d = {
                    Oi: !1,
                    pj: !1,
                    error: 0,
                    name: null,
                    path: null,
                    object: null,
                    hm: !1,
                    jm: null,
                    im: null
                };
                try {
                    c = f.Kg(a, {
                        parent: !0
                    }), d.hm = !0, d.jm = c.path, d.im = c.node, d.name = K.yh(a), c = f.Kg(a, {
                        mh: !b
                    }), d.pj = !0, d.path = c.path, d.object = c.node, d.name = c.node.name, d.Oi = "/" === c.path
                } catch (e) {
                    d.error = e.lh
                }
                return d
            },
            Rm: (a, b) => {
                a = "string" == typeof a ? a : f.Ah(a);
                for (b = b.split("/").reverse(); b.length;) {
                    var c = b.pop();
                    if (c) {
                        var d = K.Hh(a, c);
                        try {
                            f.fh(d)
                        } catch (e) {}
                        a = d
                    }
                }
                return d
            },
            ml: (a, b, c, d, e) => {
                a = K.Hh("string" == typeof a ? a : f.Ah(a), b);
                return f.create(a, f.uj(d, e))
            },
            gk: (a, b, c, d, e, g) => {
                var h = b;
                a && (a = "string" == typeof a ? a : f.Ah(a), h = b ? K.Hh(a, b) : a);
                a = f.uj(d, e);
                h = f.create(h, a);
                if (c) {
                    if ("string" == typeof c) {
                        b = Array(c.length);
                        d = 0;
                        for (e = c.length; d < e; ++d) b[d] = c.charCodeAt(d);
                        c = b
                    }
                    f.Ii(h, a | 146);
                    b = f.open(h, 577);
                    f.write(b, c, 0, c.length, 0, g);
                    f.close(b);
                    f.Ii(h, a)
                }
                return h
            },
            zh: (a, b, c, d) => {
                a = K.Hh("string" == typeof a ? a : f.Ah(a), b);
                b = f.uj(!!c, !!d);
                f.zh.Ej || (f.zh.Ej = 64);
                var e = f.Jh(f.zh.Ej++, 0);
                f.Pj(e, {
                    open: g => {
                        g.seekable = !1
                    },
                    close: () => {
                        d && d.buffer && d.buffer.length && d(10)
                    },
                    read: (g, h, n, q) => {
                        for (var u = 0, v = 0; v < q; v++) {
                            try {
                                var A = c()
                            } catch (E) {
                                throw new f.Cg(29);
                            }
                            if (A === D && 0 === u) throw new f.Cg(6);
                            if (null === A || A === D) break;
                            u++;
                            h[n + v] = A
                        }
                        u && (g.node.timestamp =
                            Date.now());
                        return u
                    },
                    write: (g, h, n, q) => {
                        for (var u = 0; u < q; u++) try {
                            d(h[n + u])
                        } catch (v) {
                            throw new f.Cg(29);
                        }
                        q && (g.node.timestamp = Date.now());
                        return u
                    }
                });
                return f.Wi(a, b, e)
            },
            rj: a => {
                if (a.Dk || a.Wl || a.link || a.Hg) return !0;
                if ("undefined" != typeof XMLHttpRequest) throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                if (Cc) try {
                    a.Hg = lb(Cc(a.url), !0), a.Lg = a.Hg.length
                } catch (b) {
                    throw new f.Cg(29);
                } else throw Error("Cannot load without read() or XMLHttpRequest.");
            },
            Qm: (a, b, c, d, e) => {
                if ("undefined" != typeof XMLHttpRequest) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                c = {
                    Dk: !1,
                    url: c
                };
                var g = f.ml(a, b, c, d, e);
                c.Hg ? g.Hg = c.Hg : c.url && (g.Hg = null, g.url = c.url);
                Object.defineProperties(g, {
                    Lg: {
                        get: function() {
                            return this.Hg.length
                        }
                    }
                });
                var h = {};
                Object.keys(g.Ig).forEach(n => {
                    var q = g.Ig[n];
                    h[n] = function() {
                        f.rj(g);
                        return q.apply(null, arguments)
                    }
                });
                h.read = (n, q, u, v, A) => {
                    f.rj(g);
                    n = n.node.Hg;
                    if (A >= n.length) q = 0;
                    else {
                        v = Math.min(n.length - A, v);
                        if (n.slice)
                            for (var E = 0; E < v; E++) q[u + E] = n[A + E];
                        else
                            for (E = 0; E < v; E++) q[u + E] = n.get(A + E);
                        q = v
                    }
                    return q
                };
                h.Wh = () => {
                    f.rj(g);
                    da();
                    throw new f.Cg(48);
                };
                g.Ig = h;
                return g
            },
            Sm: (a, b, c, d, e, g, h, n, q, u) => {
                function v(t) {
                    function F(M) {
                        u && u();
                        n || f.gk(a, b, M, d, e, q);
                        g && g();
                        va(E)
                    }
                    r.Ol(t, A, F, () => {
                        h && h();
                        va(E)
                    }) || F(t)
                }
                var A = b ? oa.resolve(K.Hh(a, b)) : a,
                    E = "cp " + A;
                Pa(E);
                "string" == typeof c ? Wc(c, t => v(t), h) : v(c)
            },
            indexedDB: () => window.indexedDB ||
                window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
            $j: () => "EM_FS_" + window.location.pathname,
            ak: 20,
            gi: "FILE_DATA",
            Gn: (a, b, c) => {
                b = b || (() => {});
                c = c || (() => {});
                var d = f.indexedDB();
                try {
                    var e = d.open(f.$j(), f.ak)
                } catch (g) {
                    return c(g)
                }
                e.onupgradeneeded = () => {
                    Da("creating db");
                    e.result.createObjectStore(f.gi)
                };
                e.onsuccess = () => {
                    var g = e.result.transaction([f.gi], "readwrite"),
                        h = g.objectStore(f.gi),
                        n = 0,
                        q = 0,
                        u = a.length;
                    a.forEach(v => {
                        v = h.put(f.gj(v).object.Hg, v);
                        v.onsuccess = () => {
                            n++;
                            n + q == u && (0 == q ? b() : c())
                        };
                        v.onerror = () => {
                            q++;
                            n + q == u && (0 == q ? b() : c())
                        }
                    });
                    g.onerror = c
                };
                e.onerror = c
            },
            kn: (a, b, c) => {
                b = b || (() => {});
                c = c || (() => {});
                var d = f.indexedDB();
                try {
                    var e = d.open(f.$j(), f.ak)
                } catch (g) {
                    return c(g)
                }
                e.onupgradeneeded = c;
                e.onsuccess = () => {
                    var g = e.result;
                    try {
                        var h = g.transaction([f.gi], "readonly")
                    } catch (A) {
                        c(A);
                        return
                    }
                    var n = h.objectStore(f.gi),
                        q = 0,
                        u = 0,
                        v = a.length;
                    a.forEach(A => {
                        var E = n.get(A);
                        E.onsuccess = () => {
                            f.gj(A).pj && f.ei(A);
                            f.gk(K.dirname(A), K.yh(A), E.result, !0, !0, !0);
                            q++;
                            q + u == v && (0 == u ? b() : c())
                        };
                        E.onerror = () => {
                            u++;
                            q + u == v && (0 == u ? b() : c())
                        }
                    });
                    h.onerror = c
                };
                e.onerror = c
            }
        },
        V = {
            Km: 5,
            fl: function(a, b, c) {
                if (K.Cj(b)) return b;
                if (-100 === a) a = f.Li();
                else {
                    a = f.Th(a);
                    if (!a) throw new f.Cg(8);
                    a = a.path
                }
                if (0 == b.length) {
                    if (!c) throw new f.Cg(44);
                    return a
                }
                return K.Hh(a, b)
            },
            Xm: function(a, b, c) {
                try {
                    var d = a(b)
                } catch (e) {
                    if (e && e.node && K.normalize(b) !== K.normalize(f.Ah(e.node))) return -54;
                    throw e;
                }
                m[c >> 2] = d.zl;
                m[c + 4 >> 2] = 0;
                m[c + 8 >> 2] = d.Aj;
                m[c + 12 >> 2] = d.mode;
                m[c + 16 >> 2] = d.gm;
                m[c + 20 >> 2] = d.uid;
                m[c + 24 >> 2] = d.Ml;
                m[c + 28 >> 2] = d.xi;
                m[c + 32 >> 2] = 0;
                T = [d.size >>>
                    0, (G = d.size, 1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)
                ];
                m[c + 40 >> 2] = T[0];
                m[c + 44 >> 2] = T[1];
                m[c + 48 >> 2] = 4096;
                m[c + 52 >> 2] = d.el;
                T = [Math.floor(d.ck.getTime() / 1E3) >>> 0, (G = Math.floor(d.ck.getTime() / 1E3), 1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
                m[c + 56 >> 2] = T[0];
                m[c + 60 >> 2] = T[1];
                m[c + 64 >> 2] = 0;
                T = [Math.floor(d.Ik.getTime() / 1E3) >>> 0, (G = Math.floor(d.Ik.getTime() /
                    1E3), 1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
                m[c + 72 >> 2] = T[0];
                m[c + 76 >> 2] = T[1];
                m[c + 80 >> 2] = 0;
                T = [Math.floor(d.ik.getTime() / 1E3) >>> 0, (G = Math.floor(d.ik.getTime() / 1E3), 1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
                m[c + 88 >> 2] = T[0];
                m[c + 92 >> 2] = T[1];
                m[c + 96 >> 2] = 0;
                T = [d.Aj >>> 0, (G = d.Aj, 1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) |
                    0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) / 4294967296) >>> 0 : 0)];
                m[c + 104 >> 2] = T[0];
                m[c + 108 >> 2] = T[1];
                return 0
            },
            Wm: function(a, b, c, d, e) {
                f.Zh(b, U.slice(a, a + c), e, c, d)
            },
            fi: D,
            get: function() {
                V.fi += 4;
                return m[V.fi - 4 >> 2]
            },
            Ll: function(a) {
                return y(a)
            },
            Uh: function(a) {
                a = f.Th(a);
                if (!a) throw new f.Cg(8);
                return a
            }
        };
    var mb = () => performance.now();
    var r = {
            Eg: {
                Rj: !1,
                Ch: null,
                method: "",
                Qh: 0,
                Rh: null,
                hj: 0,
                bj: 0,
                cj: 0,
                lj: 0,
                Nk: [],
                pause: function() {
                    r.Eg.Ch = null;
                    r.Eg.Qh++
                },
                resume: function() {
                    r.Eg.Qh++;
                    var a = r.Eg.bj,
                        b = r.Eg.cj,
                        c = r.Eg.Rh;
                    r.Eg.Rh =
                        null;
                    Tb(c, 0, !1, r.Eg.hj, !0);
                    Ca(a, b);
                    r.Eg.Ch()
                },
                Hm: function() {
                    if (l.setStatus) {
                        var a = l.statusMessage || "Please wait...",
                            b = r.Eg.Qj,
                            c = r.Eg.Ym;
                        b ? b < c ? l.setStatus(a + " (" + (c - b) + "/" + c + ")") : l.setStatus(a) : l.setStatus("")
                    }
                },
                tm: function(a) {
                    wa || l.preMainLoop && !1 === l.preMainLoop() || (Ta(a), l.postMainLoop && l.postMainLoop())
                }
            },
            pi: !1,
            Lj: !1,
            Gk: [],
            Sn: [],
            uh: function() {
                function a() {
                    r.Lj = document.pointerLockElement === l.canvas || document.mozPointerLockElement === l.canvas || document.webkitPointerLockElement === l.canvas || document.msPointerLockElement ===
                        l.canvas
                }
                l.preloadPlugins || (l.preloadPlugins = []);
                if (!r.Tl) {
                    r.Tl = !0;
                    try {
                        r.Mi = !0
                    } catch (c) {
                        r.Mi = !1, ba("warning: no blob constructor, cannot create blobs with mimetypes")
                    }
                    r.BlobBuilder = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : r.Mi ? null : ba("warning: no BlobBuilder");
                    r.Gi = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : D;
                    l.Jk || "undefined" != typeof r.Gi || (ba("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),
                        l.Jk = !0);
                    l.preloadPlugins.push({
                        canHandle: function(c) {
                            return !l.Jk && /\.(jpg|jpeg|png|bmp)$/i.test(c)
                        },
                        handle: function(c, d, e, g) {
                            var h = null;
                            if (r.Mi) try {
                                h = new Blob([c], {
                                    type: r.tj(d)
                                }), h.size !== c.length && (h = new Blob([(new Uint8Array(c)).buffer], {
                                    type: r.tj(d)
                                }))
                            } catch (u) {
                                Ea("Blob constructor present but fails: " + u + "; falling back to blob builder")
                            }
                            h || (h = new r.BlobBuilder, h.append((new Uint8Array(c)).buffer), h = h.getBlob());
                            var n = r.Gi.createObjectURL(h),
                                q = new Image;
                            q.onload = () => {
                                q.complete || da("Image " + d +
                                    " could not be decoded");
                                var u = document.createElement("canvas");
                                u.width = q.width;
                                u.height = q.height;
                                u.getContext("2d").drawImage(q, 0, 0);
                                r.Gi.revokeObjectURL(n);
                                e && e(c)
                            };
                            q.onerror = () => {
                                Da("Image " + n + " could not be decoded");
                                g && g()
                            };
                            q.src = n
                        }
                    });
                    l.preloadPlugins.push({
                        canHandle: function(c) {
                            return !l.vn && c.substr(-4) in {
                                ".ogg": 1,
                                ".wav": 1,
                                ".mp3": 1
                            }
                        },
                        handle: function(c, d, e, g) {
                            function h() {
                                q || (q = !0, e && e(c))
                            }

                            function n() {
                                q || (q = !0, new Audio, g && g())
                            }
                            var q = !1;
                            if (r.Mi) {
                                try {
                                    var u = new Blob([c], {
                                        type: r.tj(d)
                                    })
                                } catch (A) {
                                    return n()
                                }
                                u =
                                    r.Gi.createObjectURL(u);
                                var v = new Audio;
                                v.addEventListener("canplaythrough", () => h(v), !1);
                                v.onerror = function() {
                                    if (!q) {
                                        ba("warning: browser could not fully decode audio " + d + ", trying slower base64 approach");
                                        for (var A = "", E = 0, t = 0, F = 0; F < c.length; F++)
                                            for (E = E << 8 | c[F], t += 8; 6 <= t;) {
                                                var M = E >> t - 6 & 63;
                                                t -= 6;
                                                A += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [M]
                                            }
                                        2 == t ? (A += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [(E & 3) << 4], A += "==") : 4 == t && (A += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [(E &
                                            15) << 2], A += "=");
                                        v.src = "data:audio/x-" + d.substr(-3) + ";base64," + A;
                                        h(v)
                                    }
                                };
                                v.src = u;
                                Ub(function() {
                                    h(v)
                                }, 1E4)
                            } else return n()
                        }
                    });
                    var b = l.canvas;
                    b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || (() => {}), b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || (() => {}), b.exitPointerLock = b.exitPointerLock.bind(document), document.addEventListener("pointerlockchange",
                        a, !1), document.addEventListener("mozpointerlockchange", a, !1), document.addEventListener("webkitpointerlockchange", a, !1), document.addEventListener("mspointerlockchange", a, !1), l.elementPointerLock && b.addEventListener("click", c => {
                        !r.Lj && l.canvas.requestPointerLock && (l.canvas.requestPointerLock(), c.preventDefault())
                    }, !1))
                }
            },
            Ol: function(a, b, c, d) {
                r.uh();
                var e = !1;
                l.preloadPlugins.forEach(function(g) {
                    !e && g.canHandle(b) && (g.handle(a, b, c, d), e = !0)
                });
                return e
            },
            ki: function(a, b, c, d) {
                if (b && l.jh && a == l.canvas) return l.jh;
                var e;
                if (b) {
                    var g = {
                        antialias: !1,
                        alpha: !1,
                        Fj: 2
                    };
                    if (d)
                        for (var h in d) g[h] = d[h];
                    if ("undefined" != typeof p && (e = p.ki(a, g))) var n = p.getContext(e).xh
                } else n = a.getContext("2d");
                if (!n) return null;
                c && (b || "undefined" == typeof k || da("cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), l.jh = n, b && p.si(e), l.Im = b, r.Gk.forEach(function(q) {
                    q()
                }), r.uh());
                return n
            },
            Um: function() {},
            uk: !1,
            Qi: D,
            ci: D,
            requestFullscreen: function(a, b) {
                function c() {
                    r.pi = !1;
                    var g = d.parentNode;
                    (document.fullscreenElement ||
                        document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === g ? (d.exitFullscreen = r.exitFullscreen, r.Qi && d.requestPointerLock(), r.pi = !0, r.ci ? r.wm() : r.Ei(d)) : (g.parentNode.insertBefore(d, g), g.parentNode.removeChild(g), r.ci ? r.xm() : r.Ei(d));
                    if (l.onFullScreen) l.onFullScreen(r.pi);
                    if (l.onFullscreen) l.onFullscreen(r.pi)
                }
                r.Qi = a;
                r.ci = b;
                "undefined" == typeof r.Qi && (r.Qi = !0);
                "undefined" == typeof r.ci && (r.ci = !1);
                var d = l.canvas;
                r.uk || (r.uk = !0, document.addEventListener("fullscreenchange", c, !1), document.addEventListener("mozfullscreenchange", c, !1), document.addEventListener("webkitfullscreenchange", c, !1), document.addEventListener("MSFullscreenChange", c, !1));
                var e = document.createElement("div");
                d.parentNode.insertBefore(e, d);
                e.appendChild(d);
                e.requestFullscreen = e.requestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen || (e.webkitRequestFullscreen ? () => e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : null) || (e.webkitRequestFullScreen ?
                    () => e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : null);
                e.requestFullscreen()
            },
            exitFullscreen: function() {
                if (!r.pi) return !1;
                (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {}).apply(document, []);
                return !0
            },
            $h: 0,
            Dl: function(a) {
                var b = Date.now();
                if (0 === r.$h) r.$h = b + 1E3 / 60;
                else
                    for (; b + 2 >= r.$h;) r.$h += 1E3 / 60;
                setTimeout(a, Math.max(r.$h - b, 0))
            },
            requestAnimationFrame: function(a) {
                if ("function" == typeof requestAnimationFrame) requestAnimationFrame(a);
                else {
                    var b = r.Dl;
                    b(a)
                }
            },
            Fn: function(a) {
                return Ub(a)
            },
            En: function(a) {
                return r.requestAnimationFrame(function() {
                    Ta(a)
                })
            },
            tj: function(a) {
                return {
                    jpg: "image/jpeg",
                    jpeg: "image/jpeg",
                    png: "image/png",
                    bmp: "image/bmp",
                    ogg: "audio/ogg",
                    wav: "audio/wav",
                    mp3: "audio/mpeg"
                } [a.substr(a.lastIndexOf(".") + 1)]
            },
            getUserMedia: function(a) {
                window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
                window.getUserMedia(a)
            },
            Il: function(a) {
                return a.movementX || a.mozMovementX || a.webkitMovementX ||
                    0
            },
            Jl: function(a) {
                return a.movementY || a.mozMovementY || a.webkitMovementY || 0
            },
            dn: function(a) {
                switch (a.type) {
                    case "DOMMouseScroll":
                        var b = a.detail / 3;
                        break;
                    case "mousewheel":
                        b = a.wheelDelta / 120;
                        break;
                    case "wheel":
                        b = a.deltaY;
                        switch (a.deltaMode) {
                            case 0:
                                b /= 100;
                                break;
                            case 1:
                                b /= 3;
                                break;
                            case 2:
                                b *= 80;
                                break;
                            default:
                                throw "unrecognized mouse wheel delta mode: " + a.deltaMode;
                        }
                        break;
                    default:
                        throw "unrecognized mouse wheel event: " + a.type;
                }
                return b
            },
            Xh: 0,
            Yh: 0,
            vi: 0,
            wi: 0,
            touches: {},
            Fk: {},
            Mm: function(a) {
                if (r.Lj) "mousemove" !=
                    a.type && "mozMovementX" in a ? r.vi = r.wi = 0 : (r.vi = r.Il(a), r.wi = r.Jl(a)), "undefined" != typeof SDL ? (r.Xh = SDL.Xh + r.vi, r.Yh = SDL.Yh + r.wi) : (r.Xh += r.vi, r.Yh += r.wi);
                else {
                    var b = l.canvas.getBoundingClientRect(),
                        c = l.canvas.width,
                        d = l.canvas.height,
                        e = "undefined" != typeof window.scrollX ? window.scrollX : window.pageXOffset,
                        g = "undefined" != typeof window.scrollY ? window.scrollY : window.pageYOffset;
                    if ("touchstart" === a.type || "touchend" === a.type || "touchmove" === a.type) {
                        var h = a.Jn;
                        if (h !== D)
                            if (e = h.pageX - (e + b.left), g = h.pageY - (g + b.top),
                                e *= c / b.width, g *= d / b.height, b = {
                                    x: e,
                                    y: g
                                }, "touchstart" === a.type) r.Fk[h.identifier] = b, r.touches[h.identifier] = b;
                            else if ("touchend" === a.type || "touchmove" === a.type)(a = r.touches[h.identifier]) || (a = b), r.Fk[h.identifier] = a, r.touches[h.identifier] = b
                    } else h = a.pageX - (e + b.left), a = a.pageY - (g + b.top), h *= c / b.width, a *= d / b.height, r.vi = h - r.Xh, r.wi = a - r.Yh, r.Xh = h, r.Yh = a
                }
            },
            sm: [],
            Yj: function() {
                var a = l.canvas;
                r.sm.forEach(function(b) {
                    b(a.width, a.height)
                })
            },
            um: function(a, b, c) {
                r.Ei(l.canvas, a, b);
                c || r.Yj()
            },
            Rn: 0,
            Qn: 0,
            wm: function() {
                "undefined" !=
                typeof SDL && (m[SDL.screen >> 2] = B[SDL.screen >> 2] | 8388608);
                r.Ei(l.canvas);
                r.Yj()
            },
            xm: function() {
                "undefined" != typeof SDL && (m[SDL.screen >> 2] = B[SDL.screen >> 2] & -8388609);
                r.Ei(l.canvas);
                r.Yj()
            },
            Ei: function(a, b, c) {
                b && c ? (a.Jm = b, a.Pl = c) : (b = a.Jm, c = a.Pl);
                var d = b,
                    e = c;
                l.forcedAspectRatio && 0 < l.forcedAspectRatio && (d / e < l.forcedAspectRatio ? d = Math.round(e * l.forcedAspectRatio) : e = Math.round(d / l.forcedAspectRatio));
                if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement ||
                        document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
                    var g = Math.min(screen.width / d, screen.height / e);
                    d = Math.round(d * g);
                    e = Math.round(e * g)
                }
                r.ci ? (a.width != d && (a.width = d), a.height != e && (a.height = e), "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height"))) : (a.width != b && (a.width = b), a.height != c && (a.height = c), "undefined" != typeof a.style && (d != b || e != c ? (a.style.setProperty("width", d + "px", "important"), a.style.setProperty("height", e + "px", "important")) :
                    (a.style.removeProperty("width"), a.style.removeProperty("height"))))
            }
        },
        x = {
            errorCode: 12288,
            nj: !1,
            Rg: 0,
            Ki: 0,
            Ji: 0,
            Qg: {
                alpha: !1,
                depth: !1,
                stencil: !1,
                antialias: !1
            },
            di: {},
            Gg: function(a) {
                x.errorCode = a
            },
            hl: function(a, b, c, d, e) {
                if (62E3 != a) return x.Gg(12296), 0;
                if (b)
                    for (;;) {
                        a = m[b >> 2];
                        if (12321 == a) x.Qg.alpha = 0 < m[b + 4 >> 2];
                        else if (12325 == a) x.Qg.depth = 0 < m[b + 4 >> 2];
                        else if (12326 == a) x.Qg.stencil = 0 < m[b + 4 >> 2];
                        else if (12337 == a) a = m[b + 4 >> 2], x.Qg.antialias = 0 < a;
                        else if (12338 == a) a = m[b + 4 >> 2], x.Qg.antialias = 1 == a;
                        else if (12544 ==
                            a) x.Qg.ln = 12547 != m[b + 4 >> 2];
                        else if (12344 == a) break;
                        b += 8
                    }
                if (!(c && d || e)) return x.Gg(12300), 0;
                e && (m[e >> 2] = 1);
                c && 0 < d && (m[c >> 2] = 62002);
                x.Gg(12288);
                return 1
            }
        },
        p = {
            counter: 1,
            Fh: [],
            Jg: [],
            ni: [],
            bi: [],
            Nh: [],
            Vg: [],
            sh: [],
            ih: [],
            wn: {},
            Pg: [],
            hh: [],
            Ci: [],
            Eh: [],
            di: {},
            Sk: {},
            Gm: 4,
            Dg: function(a) {
                p.Dj || (p.Dj = a)
            },
            Sh: function(a) {
                for (var b = p.counter++, c = a.length; c < b; c++) a[c] = null;
                return b
            },
            Kl: function(a, b, c, d) {
                a = "";
                for (var e = 0; e < b; ++e) {
                    var g = d ? m[d + 4 * e >> 2] : -1;
                    a += y(m[c + 4 * e >> 2], 0 > g ? D : g)
                }
                return a
            },
            ki: function(a, b) {
                a.wk || (a.wk =
                    a.getContext, a.getContext = function(d, e) {
                        e = a.wk(d, e);
                        return "webgl" == d == e instanceof WebGLRenderingContext ? e : null
                    });
                var c = a.getContext("webgl2", b);
                return c ? p.mm(c, b) : 0
            },
            mm: function(a, b) {
                var c = p.Sh(p.ih),
                    d = {
                        en: c,
                        attributes: b,
                        version: b.Fj,
                        xh: a
                    };
                a.canvas && (a.canvas.hi = d);
                p.ih[c] = d;
                ("undefined" == typeof b.nk || b.nk) && p.Rl(d);
                return c
            },
            si: function(a) {
                p.Rg = p.ih[a];
                l.jh = k = p.Rg && p.Rg.xh;
                return !(a && !k)
            },
            getContext: function(a) {
                return p.ih[a]
            },
            yl: function(a) {
                p.Rg === p.ih[a] && (p.Rg = null);
                "object" == typeof w && w.pm(p.ih[a].xh.canvas);
                p.ih[a] && p.ih[a].xh.canvas && (p.ih[a].xh.canvas.hi = D);
                p.ih[a] = null
            },
            Rl: function(a) {
                a || (a = p.Rg);
                if (!a.Sl) {
                    a.Sl = !0;
                    var b = a.xh;
                    b.Vm = b.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");
                    b.nn = b.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
                    2 <= a.version && (b.Yg = b.getExtension("EXT_disjoint_timer_query_webgl2"));
                    if (2 > a.version || !b.Yg) b.Yg = b.getExtension("EXT_disjoint_timer_query");
                    b.tn = b.getExtension("WEBGL_multi_draw");
                    (b.getSupportedExtensions() || []).forEach(function(c) {
                        c.includes("lose_context") ||
                            c.includes("debug") || b.getExtension(c)
                    })
                }
            }
        },
        nb = [],
        w = {
            yj: 0,
            om: function() {
                for (var a = w.dh.length - 1; 0 <= a; --a) w.fj(a);
                w.dh = [];
                w.bh = []
            },
            nm: function() {
                w.qm || (md.push(w.om), w.qm = !0)
            },
            bh: [],
            lk: function(a, b, c) {
                function d(h, n) {
                    if (h.length != n.length) return !1;
                    for (var q in h)
                        if (h[q] != n[q]) return !1;
                    return !0
                }
                for (var e in w.bh) {
                    var g = w.bh[e];
                    if (g.Vj == a && d(g.bk, c)) return
                }
                w.bh.push({
                    Vj: a,
                    Mk: b,
                    bk: c
                });
                w.bh.sort(function(h, n) {
                    return h.Mk < n.Mk
                })
            },
            Qk: function(a) {
                for (var b = 0; b < w.bh.length; ++b) w.bh[b].Vj == a && (w.bh.splice(b,
                    1), --b)
            },
            ij: function() {
                return w.yj && w.ql.ji
            },
            Rk: function() {
                if (w.ij())
                    for (var a = 0; a < w.bh.length; ++a) {
                        var b = w.bh[a];
                        w.bh.splice(a, 1);
                        --a;
                        b.Vj.apply(null, b.bk)
                    }
            },
            dh: [],
            pm: function(a, b) {
                for (var c = 0; c < w.dh.length; ++c) w.dh[c].target != a || b && b != w.dh[c].Sg || w.fj(c--)
            },
            fj: function(a) {
                var b = w.dh[a];
                b.target.removeEventListener(b.Sg, b.Bl, b.$g);
                w.dh.splice(a, 1)
            },
            gh: function(a) {
                function b(d) {
                    ++w.yj;
                    w.ql = a;
                    w.Rk();
                    a.eh(d);
                    w.Rk();
                    --w.yj
                }
                if (a.ah) a.Bl = b, a.target.addEventListener(a.Sg, b, a.$g), w.dh.push(a), w.nm();
                else
                    for (var c =
                            0; c < w.dh.length; ++c) w.dh[c].target == a.target && w.dh[c].Sg == a.Sg && w.fj(c--)
            },
            vj: function(a) {
                return a ? a == window ? "#window" : a == screen ? "#screen" : a && a.nodeName ? a.nodeName : "" : ""
            },
            fullscreenEnabled: function() {
                return document.fullscreenEnabled || document.webkitFullscreenEnabled
            }
        },
        Wa = {},
        Ua = [0, document, window],
        za = [],
        O = {
            Zj: [],
            Xg: function(a, b) {
                B[a >> 2] = b;
                B[a + 4 >> 2] = b / 4294967296 | 0
            },
            openDatabase: function(a, b, c, d) {
                try {
                    var e = indexedDB.open(a, b)
                } catch (g) {
                    return d(g)
                }
                e.onupgradeneeded = g => {
                    g = g.target.result;
                    g.objectStoreNames.contains("FILES") &&
                        g.deleteObjectStore("FILES");
                    g.createObjectStore("FILES")
                };
                e.onsuccess = g => c(g.target.result);
                e.onerror = g => d(g)
            },
            Uj: function() {
                O.openDatabase("emscripten_filesystem", 1, a => {
                    O.li = a;
                    va("library_fetch_init")
                }, () => {
                    O.li = !1;
                    va("library_fetch_init")
                });
                "undefined" != typeof ENVIRONMENT_IS_FETCH_WORKER && ENVIRONMENT_IS_FETCH_WORKER || Pa("library_fetch_init")
            }
        },
        nd = ["default", "low-power", "high-performance"],
        ub = {},
        lc = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        mc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    Object.defineProperties(Cb.prototype, {
        read: {
            get: function() {
                return 365 === (this.mode & 365)
            },
            set: function(a) {
                a ? this.mode |= 365 : this.mode &= -366
            }
        },
        write: {
            get: function() {
                return 146 === (this.mode & 146)
            },
            set: function(a) {
                a ? this.mode |= 146 : this.mode &= -147
            }
        },
        Wl: {
            get: function() {
                return f.Tg(this.mode)
            }
        },
        Dk: {
            get: function() {
                return f.Ni(this.mode)
            }
        }
    });
    f.bl = Cb;
    f.Uj();
    l.requestFullscreen = function(a, b) {
        r.requestFullscreen(a, b)
    };
    l.requestAnimationFrame = function(a) {
        r.requestAnimationFrame(a)
    };
    l.setCanvasSize = function(a, b, c) {
        r.um(a, b, c)
    };
    l.pauseMainLoop = function() {
        r.Eg.pause()
    };
    l.resumeMainLoop = function() {
        r.Eg.resume()
    };
    l.getUserMedia = function() {
        r.getUserMedia()
    };
    l.createContext = function(a, b, c, d) {
        return r.ki(a, b, c, d)
    };
    for (var k, Bb = 0; 32 > Bb; ++Bb) za.push(Array(Bb));
    O.Uj();
    var pd = {
        L: function(a, b, c) {
            V.fi = c;
            try {
                var d = V.Uh(a);
                switch (b) {
                    case 0:
                        var e = V.get();
                        return 0 > e ? -28 : f.hk(d, e).mi;
                    case 1:
                    case 2:
                        return 0;
                    case 3:
                        return d.flags;
                    case 4:
                        return e = V.get(), d.flags |= e, 0;
                    case 5:
                        return e = V.get(), xa[e + 0 >> 1] = 2, 0;
                    case 6:
                    case 7:
                        return 0;
                    case 16:
                    case 8:
                        return -28;
                    case 9:
                        return -1;
                    default:
                        return -28
                }
            } catch (g) {
                if ("undefined" ==
                    typeof f || !(g instanceof f.Cg)) throw g;
                return -g.lh
            }
        },
        Ma: function(a, b, c) {
            V.fi = c;
            try {
                var d = V.Uh(a);
                switch (b) {
                    case 21509:
                    case 21505:
                        return d.Ng ? 0 : -59;
                    case 21510:
                    case 21511:
                    case 21512:
                    case 21506:
                    case 21507:
                    case 21508:
                        return d.Ng ? 0 : -59;
                    case 21519:
                        if (!d.Ng) return -59;
                        var e = V.get();
                        return m[e >> 2] = 0;
                    case 21520:
                        return d.Ng ? -28 : -59;
                    case 21531:
                        return e = V.get(), f.Bj(d, b, e);
                    case 21523:
                        return d.Ng ? 0 : -59;
                    case 21524:
                        return d.Ng ? 0 : -59;
                    default:
                        da("bad ioctl syscall " + b)
                }
            } catch (g) {
                if ("undefined" == typeof f || !(g instanceof f.Cg)) throw g;
                return -g.lh
            }
        },
        Oa: function(a, b, c, d) {
            V.fi = d;
            try {
                b = V.Ll(b);
                b = V.fl(a, b);
                var e = d ? V.get() : 0;
                return f.open(b, c, e).mi
            } catch (g) {
                if ("undefined" == typeof f || !(g instanceof f.Cg)) throw g;
                return -g.lh
            }
        },
        Qa: function() {
            return Date.now()
        },
        e: function(a) {
            delete O.Zj[a - 1]
        },
        Pa: function() {
            return !0
        },
        b: function() {
            da("")
        },
        Fa: function(a) {
            if (12448 == a) return x.Gg(12288), 1;
            x.Gg(12300);
            return 0
        },
        Oc: function(a, b, c, d, e) {
            return x.hl(a, b, c, d, e)
        },
        sc: function(a, b, c, d) {
            if (62E3 != a) return x.Gg(12296), 0;
            for (a = 1;;) {
                b = m[d >> 2];
                if (12440 == b) a = m[d + 4 >> 2];
                else if (12344 == b) break;
                else return x.Gg(12292), 0;
                d += 8
            }
            if (2 > a || 3 < a) return x.Gg(12293), 0;
            x.Qg.Fj = a - 1;
            x.Qg.$l = 0;
            x.context = p.ki(l.canvas, x.Qg);
            if (0 != x.context) return x.Gg(12288), p.si(x.context), l.Im = !0, r.Gk.forEach(function(e) {
                e()
            }), p.si(null), 62004;
            x.Gg(12297);
            return 0
        },
        Yb: function(a, b) {
            if (62E3 != a) return x.Gg(12296), 0;
            if (62002 != b) return x.Gg(12293), 0;
            x.Gg(12288);
            return 62006
        },
        hc: function(a, b) {
            if (62E3 != a) return x.Gg(12296), 0;
            if (62004 != b) return x.Gg(12294), 0;
            p.yl(x.context);
            x.Gg(12288);
            x.Rg == b && (x.Rg = 0);
            return 1
        },
        Mb: function(a, b) {
            if (62E3 != a) return x.Gg(12296), 0;
            if (62006 != b) return x.Gg(12301), 1;
            x.Ki == b && (x.Ki = 0);
            x.Ji == b && (x.Ji = 0);
            x.Gg(12288);
            return 1
        },
        Dc: function(a, b, c, d) {
            if (62E3 != a) return x.Gg(12296), 0;
            if (62002 != b) return x.Gg(12293), 0;
            if (!d) return x.Gg(12300), 0;
            x.Gg(12288);
            switch (c) {
                case 12320:
                    return m[d >> 2] = x.Qg.alpha ? 32 : 24, 1;
                case 12321:
                    return m[d >> 2] = x.Qg.alpha ? 8 : 0, 1;
                case 12322:
                    return m[d >> 2] = 8, 1;
                case 12323:
                    return m[d >> 2] = 8, 1;
                case 12324:
                    return m[d >> 2] = 8, 1;
                case 12325:
                    return m[d >>
                        2] = x.Qg.depth ? 24 : 0, 1;
                case 12326:
                    return m[d >> 2] = x.Qg.stencil ? 8 : 0, 1;
                case 12327:
                    return m[d >> 2] = 12344, 1;
                case 12328:
                    return m[d >> 2] = 62002, 1;
                case 12329:
                    return m[d >> 2] = 0, 1;
                case 12330:
                    return m[d >> 2] = 4096, 1;
                case 12331:
                    return m[d >> 2] = 16777216, 1;
                case 12332:
                    return m[d >> 2] = 4096, 1;
                case 12333:
                    return m[d >> 2] = 0, 1;
                case 12334:
                    return m[d >> 2] = 0, 1;
                case 12335:
                    return m[d >> 2] = 12344, 1;
                case 12337:
                    return m[d >> 2] = x.Qg.antialias ? 4 : 0, 1;
                case 12338:
                    return m[d >> 2] = x.Qg.antialias ? 1 : 0, 1;
                case 12339:
                    return m[d >> 2] = 4, 1;
                case 12340:
                    return m[d >>
                        2] = 12344, 1;
                case 12341:
                case 12342:
                case 12343:
                    return m[d >> 2] = -1, 1;
                case 12345:
                case 12346:
                    return m[d >> 2] = 0, 1;
                case 12347:
                    return m[d >> 2] = 0, 1;
                case 12348:
                    return m[d >> 2] = 1;
                case 12349:
                case 12350:
                    return m[d >> 2] = 0, 1;
                case 12351:
                    return m[d >> 2] = 12430, 1;
                case 12352:
                    return m[d >> 2] = 4, 1;
                case 12354:
                    return m[d >> 2] = 0, 1;
                default:
                    return x.Gg(12292), 0
            }
        },
        M: function() {
            x.Gg(12288);
            return 62E3
        },
        Ca: function() {
            return x.errorCode
        },
        id: function(a, b, c) {
            if (62E3 != a) return x.Gg(12296), 0;
            b && (m[b >> 2] = 1);
            c && (m[c >> 2] = 4);
            x.nj = !0;
            x.Gg(12288);
            return 1
        },
        Bb: function(a, b, c, d) {
            if (62E3 != a) return x.Gg(12296), 0;
            if (0 != d && 62004 != d) return x.Gg(12294), 0;
            if (0 != c && 62006 != c || 0 != b && 62006 != b) return x.Gg(12301), 0;
            p.si(d ? x.context : null);
            x.Rg = d;
            x.Ji = b;
            x.Ki = c;
            x.Gg(12288);
            return 1
        },
        Da: function(a, b) {
            if (62E3 != a) return x.Gg(12296), 0;
            x.Gg(12288);
            if (x.di[b]) return x.di[b];
            switch (b) {
                case 12371:
                    a = ta("Emscripten");
                    break;
                case 12372:
                    a = ta("1.4 Emscripten EGL");
                    break;
                case 12373:
                    a = ta("");
                    break;
                case 12429:
                    a = ta("OpenGL_ES");
                    break;
                default:
                    return x.Gg(12300), 0
            }
            return x.di[b] =
                a
        },
        qb: function() {
            if (x.nj)
                if (l.jh)
                    if (l.jh.isContextLost()) x.Gg(12302);
                    else return x.Gg(12288), 1;
            else x.Gg(12290);
            else x.Gg(12289);
            return 0
        },
        fb: function(a, b) {
            if (62E3 != a) return x.Gg(12296), 0;
            0 == b ? Ca(0, 0) : Ca(1, b);
            x.Gg(12288);
            return 1
        },
        Zc: function(a) {
            if (62E3 != a) return x.Gg(12296), 0;
            x.Rg = 0;
            x.Ki = 0;
            x.Ji = 0;
            x.nj = !1;
            x.Gg(12288);
            return 1
        },
        Na: function() {
            x.Gg(12288);
            return 1
        },
        Wa: function() {
            x.Gg(12288);
            return 1
        },
        c: Wb,
        a: Wb,
        d: function(a, b, c) {
            b = Vb(b, c);
            return Xb[a].apply(null, b)
        },
        ua: function() {
            if (!w.fullscreenEnabled()) return -1;
            w.Qk(pb);
            var a = Ua[1];
            if (a.exitFullscreen) a.fullscreenElement && a.exitFullscreen();
            else if (a.webkitExitFullscreen) a.webkitFullscreenElement && a.webkitExitFullscreen();
            else return -1;
            return 0
        },
        za: function() {
            w.Qk(qb);
            if (document.exitPointerLock) document.exitPointerLock();
            else if (document.bm) document.bm();
            else return -1;
            return 0
        },
        Aa: function() {
            throw "unwind";
        },
        h: function() {
            return devicePixelRatio
        },
        f: function(a, b, c) {
            a = aa(a);
            if (!a) return -4;
            a = Xa(a);
            ea[b >> 3] = a.width;
            ea[c >> 3] = a.height;
            return 0
        },
        ge: function(a, b) {
            if (0 >
                a || a >= w.Pi.length) return -5;
            if (!w.Pi[a]) return -7;
            ac(b, w.Pi[a]);
            return 0
        },
        m: mb,
        re: function() {
            return w.Pi.length
        },
        Ba: function(a, b) {
            m[a >> 2] = screen.width;
            m[b >> 2] = screen.height
        },
        X: function(a) {
            k.activeTexture(a)
        },
        W: function(a, b) {
            k.attachShader(p.Jg[a], p.Vg[b])
        },
        Mc: function(a, b) {
            k.beginQuery(a, p.Pg[b])
        },
        na: function(a, b) {
            k.Yg.beginQueryEXT(a, p.Pg[b])
        },
        rc: function(a) {
            k.beginTransformFeedback(a)
        },
        V: function(a, b, c) {
            k.bindAttribLocation(p.Jg[a], b, y(c))
        },
        U: function(a, b) {
            35051 == a ? k.mj = b : 35052 == a && (k.kh = b);
            k.bindBuffer(a,
                p.Fh[b])
        },
        oc: function(a, b, c) {
            k.bindBufferBase(a, b, p.Fh[c])
        },
        pc: function(a, b, c, d, e) {
            k.bindBufferRange(a, b, p.Fh[c], d, e)
        },
        T: function(a, b) {
            k.bindFramebuffer(a, p.ni[b])
        },
        S: function(a, b) {
            k.bindRenderbuffer(a, p.bi[b])
        },
        rb: function(a, b) {
            k.bindSampler(a, p.hh[b])
        },
        R: function(a, b) {
            k.bindTexture(a, p.Nh[b])
        },
        ib: function(a, b) {
            k.bindTransformFeedback(a, p.Ci[b])
        },
        xc: function(a) {
            k.bindVertexArray(p.sh[a])
        },
        ea: function(a) {
            k.bindVertexArray(p.sh[a])
        },
        Q: function(a, b, c, d) {
            k.blendColor(a, b, c, d)
        },
        P: function(a) {
            k.blendEquation(a)
        },
        Lf: function(a, b) {
            k.blendEquationSeparate(a, b)
        },
        Kf: function(a, b) {
            k.blendFunc(a, b)
        },
        Jf: function(a, b, c, d) {
            k.blendFuncSeparate(a, b, c, d)
        },
        Ac: function(a, b, c, d, e, g, h, n, q, u) {
            k.blitFramebuffer(a, b, c, d, e, g, h, n, q, u)
        },
        If: function(a, b, c, d) {
            c && b ? k.bufferData(a, U, d, c, b) : k.bufferData(a, b, d)
        },
        Hf: function(a, b, c, d) {
            c && k.bufferSubData(a, b, U, d, c)
        },
        Gf: function(a) {
            return k.checkFramebufferStatus(a)
        },
        Ff: function(a) {
            k.clear(a)
        },
        Rb: function(a, b, c, d) {
            k.clearBufferfi(a, b, c, d)
        },
        Sb: function(a, b, c) {
            k.clearBufferfv(a, b, I, c >> 2)
        },
        Ub: function(a, b, c) {
            k.clearBufferiv(a, b, m, c >> 2)
        },
        Tb: function(a, b, c) {
            k.clearBufferuiv(a, b, B, c >> 2)
        },
        Ef: function(a, b, c, d) {
            k.clearColor(a, b, c, d)
        },
        Df: function(a) {
            k.clearDepth(a)
        },
        Cf: function(a) {
            k.clearStencil(a)
        },
        Ab: function(a, b, c, d) {
            return k.clientWaitSync(p.Eh[a], b, (c >>> 0) + 4294967296 * d)
        },
        Af: function(a, b, c, d) {
            k.colorMask(!!a, !!b, !!c, !!d)
        },
        zf: function(a) {
            k.compileShader(p.Vg[a])
        },
        yf: function(a, b, c, d, e, g, h, n) {
            k.kh || !h ? k.compressedTexImage2D(a, b, c, d, e, g, h, n) : k.compressedTexImage2D(a, b, c, d, e, g, U, n, h)
        },
        Sc: function(a,
            b, c, d, e, g, h, n, q) {
            k.kh ? k.compressedTexImage3D(a, b, c, d, e, g, h, n, q) : k.compressedTexImage3D(a, b, c, d, e, g, h, U, q, n)
        },
        xf: function(a, b, c, d, e, g, h, n, q) {
            k.kh || !n ? k.compressedTexSubImage2D(a, b, c, d, e, g, h, n, q) : k.compressedTexSubImage2D(a, b, c, d, e, g, h, U, q, n)
        },
        Rc: function(a, b, c, d, e, g, h, n, q, u, v) {
            k.kh ? k.compressedTexSubImage3D(a, b, c, d, e, g, h, n, q, u, v) : k.compressedTexSubImage3D(a, b, c, d, e, g, h, n, q, U, v, u)
        },
        Pb: function(a, b, c, d, e) {
            k.copyBufferSubData(a, b, c, d, e)
        },
        wf: function(a, b, c, d, e, g, h, n) {
            k.copyTexImage2D(a, b, c, d, e, g, h, n)
        },
        vf: function(a, b, c, d, e, g, h, n) {
            k.copyTexSubImage2D(a, b, c, d, e, g, h, n)
        },
        Tc: function(a, b, c, d, e, g, h, n, q) {
            k.copyTexSubImage3D(a, b, c, d, e, g, h, n, q)
        },
        uf: function() {
            var a = p.Sh(p.Jg),
                b = k.createProgram();
            b.name = a;
            b.Ti = b.Ri = b.Si = 0;
            b.Xj = 1;
            p.Jg[a] = b;
            return a
        },
        tf: function(a) {
            var b = p.Sh(p.Vg);
            p.Vg[b] = k.createShader(a);
            return b
        },
        sf: function(a) {
            k.cullFace(a)
        },
        rf: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = m[b + 4 * c >> 2],
                    e = p.Fh[d];
                e && (k.deleteBuffer(e), e.name = 0, p.Fh[d] = null, d == k.mj && (k.mj = 0), d == k.kh && (k.kh = 0))
            }
        },
        qf: function(a,
            b) {
            for (var c = 0; c < a; ++c) {
                var d = m[b + 4 * c >> 2],
                    e = p.ni[d];
                e && (k.deleteFramebuffer(e), e.name = 0, p.ni[d] = null)
            }
        },
        pf: function(a) {
            if (a) {
                var b = p.Jg[a];
                b ? (k.deleteProgram(b), b.name = 0, p.Jg[a] = null) : p.Dg(1281)
            }
        },
        Pc: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = m[b + 4 * c >> 2],
                    e = p.Pg[d];
                e && (k.deleteQuery(e), p.Pg[d] = null)
            }
        },
        pa: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = m[b + 4 * c >> 2],
                    e = p.Pg[d];
                e && (k.Yg.deleteQueryEXT(e), p.Pg[d] = null)
            }
        },
        of: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = m[b + 4 * c >> 2],
                    e = p.bi[d];
                e && (k.deleteRenderbuffer(e),
                    e.name = 0, p.bi[d] = null)
            }
        },
        tb: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = m[b + 4 * c >> 2],
                    e = p.hh[d];
                e && (k.deleteSampler(e), e.name = 0, p.hh[d] = null)
            }
        },
        nf: function(a) {
            if (a) {
                var b = p.Vg[a];
                b ? (k.deleteShader(b), p.Vg[a] = null) : p.Dg(1281)
            }
        },
        Cb: function(a) {
            if (a) {
                var b = p.Eh[a];
                b ? (k.deleteSync(b), b.name = 0, p.Eh[a] = null) : p.Dg(1281)
            }
        },
        mf: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = m[b + 4 * c >> 2],
                    e = p.Nh[d];
                e && (k.deleteTexture(e), e.name = 0, p.Nh[d] = null)
            }
        },
        hb: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = m[b + 4 * c >> 2],
                    e = p.Ci[d];
                e && (k.deleteTransformFeedback(e),
                    e.name = 0, p.Ci[d] = null)
            }
        },
        wc: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = m[b + 4 * c >> 2];
                k.deleteVertexArray(p.sh[d]);
                p.sh[d] = null
            }
        },
        da: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = m[b + 4 * c >> 2];
                k.deleteVertexArray(p.sh[d]);
                p.sh[d] = null
            }
        },
        lf: function(a) {
            k.depthFunc(a)
        },
        kf: function(a) {
            k.depthMask(!!a)
        },
        jf: function(a, b) {
            k.depthRange(a, b)
        },
        hf: function(a, b) {
            k.detachShader(p.Jg[a], p.Vg[b])
        },
        gf: function(a) {
            k.disable(a)
        },
        ef: function(a) {
            k.disableVertexAttribArray(a)
        },
        df: function(a, b, c) {
            k.drawArrays(a, b, c)
        },
        Gb: function(a,
            b, c, d) {
            k.drawArraysInstanced(a, b, c, d)
        },
        $: function(a, b, c, d) {
            k.drawArraysInstanced(a, b, c, d)
        },
        bd: function(a, b, c, d) {
            k.drawArraysInstanced(a, b, c, d)
        },
        cd: function(a, b, c, d) {
            k.drawArraysInstanced(a, b, c, d)
        },
        Ta: function(a, b, c, d) {
            k.drawArraysInstanced(a, b, c, d)
        },
        Ic: function(a, b) {
            for (var c = za[a], d = 0; d < a; d++) c[d] = m[b + 4 * d >> 2];
            k.drawBuffers(c)
        },
        Yc: function(a, b) {
            for (var c = za[a], d = 0; d < a; d++) c[d] = m[b + 4 * d >> 2];
            k.drawBuffers(c)
        },
        aa: function(a, b) {
            for (var c = za[a], d = 0; d < a; d++) c[d] = m[b + 4 * d >> 2];
            k.drawBuffers(c)
        },
        cf: function(a,
            b, c, d) {
            k.drawElements(a, b, c, d)
        },
        Fb: function(a, b, c, d, e) {
            k.drawElementsInstanced(a, b, c, d, e)
        },
        _: function(a, b, c, d, e) {
            k.drawElementsInstanced(a, b, c, d, e)
        },
        _c: function(a, b, c, d, e) {
            k.drawElementsInstanced(a, b, c, d, e)
        },
        $c: function(a, b, c, d, e) {
            k.drawElementsInstanced(a, b, c, d, e)
        },
        ad: function(a, b, c, d, e) {
            k.drawElementsInstanced(a, b, c, d, e)
        },
        Wc: function(a, b, c, d, e, g) {
            k.drawElements(a, d, e, g)
        },
        bf: function(a) {
            k.enable(a)
        },
        af: function(a) {
            k.enableVertexAttribArray(a)
        },
        Lc: function(a) {
            k.endQuery(a)
        },
        ma: function(a) {
            k.Yg.endQueryEXT(a)
        },
        qc: function() {
            k.endTransformFeedback()
        },
        Eb: function(a, b) {
            return (a = k.fenceSync(a, b)) ? (b = p.Sh(p.Eh), a.name = b, p.Eh[b] = a, b) : 0
        },
        $e: function() {
            k.finish()
        },
        _e: function() {
            k.flush()
        },
        Ze: function(a, b, c, d) {
            k.framebufferRenderbuffer(a, b, c, p.bi[d])
        },
        Ye: function(a, b, c, d, e) {
            k.framebufferTexture2D(a, b, c, p.Nh[d], e)
        },
        yc: function(a, b, c, d, e) {
            k.framebufferTextureLayer(a, b, p.Nh[c], d, e)
        },
        Xe: function(a) {
            k.frontFace(a)
        },
        We: function(a, b) {
            na(a, b, "createBuffer", p.Fh)
        },
        Ue: function(a, b) {
            na(a, b, "createFramebuffer", p.ni)
        },
        Qc: function(a,
            b) {
            na(a, b, "createQuery", p.Pg)
        },
        qa: function(a, b) {
            for (var c = 0; c < a; c++) {
                var d = k.Yg.createQueryEXT();
                if (!d) {
                    for (p.Dg(1282); c < a;) m[b + 4 * c++ >> 2] = 0;
                    break
                }
                var e = p.Sh(p.Pg);
                d.name = e;
                p.Pg[e] = d;
                m[b + 4 * c >> 2] = e
            }
        },
        Te: function(a, b) {
            na(a, b, "createRenderbuffer", p.bi)
        },
        ub: function(a, b) {
            na(a, b, "createSampler", p.hh)
        },
        Se: function(a, b) {
            na(a, b, "createTexture", p.Nh)
        },
        gb: function(a, b) {
            na(a, b, "createTransformFeedback", p.Ci)
        },
        vc: function(a, b) {
            na(a, b, "createVertexArray", p.sh)
        },
        ca: function(a, b) {
            na(a, b, "createVertexArray", p.sh)
        },
        Ve: function(a) {
            k.generateMipmap(a)
        },
        Re: function(a, b, c, d, e, g, h) {
            bc("getActiveAttrib", a, b, c, d, e, g, h)
        },
        Qe: function(a, b, c, d, e, g, h) {
            bc("getActiveUniform", a, b, c, d, e, g, h)
        },
        Ib: function(a, b, c, d, e) {
            a = p.Jg[a];
            if (a = k.getActiveUniformBlockName(a, b)) e && 0 < c ? (c = L(a, e, c), d && (m[d >> 2] = c)) : d && (m[d >> 2] = 0)
        },
        Jb: function(a, b, c, d) {
            if (d)
                if (a = p.Jg[a], 35393 == c) c = k.getActiveUniformBlockName(a, b), m[d >> 2] = c.length + 1;
                else {
                    if (a = k.getActiveUniformBlockParameter(a, b, c), null !== a)
                        if (35395 == c)
                            for (c = 0; c < a.length; c++) m[d + 4 * c >> 2] = a[c];
                        else m[d >>
                            2] = a
                }
            else p.Dg(1281)
        },
        Lb: function(a, b, c, d, e) {
            if (e)
                if (0 < b && 0 == c) p.Dg(1281);
                else {
                    a = p.Jg[a];
                    for (var g = [], h = 0; h < b; h++) g.push(m[c + 4 * h >> 2]);
                    if (a = k.getActiveUniforms(a, g, d))
                        for (b = a.length, h = 0; h < b; h++) m[e + 4 * h >> 2] = a[h]
                }
            else p.Dg(1281)
        },
        Pe: function(a, b, c, d) {
            a = k.getAttachedShaders(p.Jg[a]);
            var e = a.length;
            e > b && (e = b);
            m[c >> 2] = e;
            for (b = 0; b < e; ++b) m[d + 4 * b >> 2] = p.Vg.indexOf(a[b])
        },
        Oe: function(a, b) {
            return k.getAttribLocation(p.Jg[a], y(b))
        },
        Ne: function(a, b) {
            Ya(a, b, 4)
        },
        vb: function(a, b, c) {
            c ? Fa(c, k.getBufferParameter(a, b)) :
                p.Dg(1281)
        },
        Me: function(a, b, c) {
            c ? m[c >> 2] = k.getBufferParameter(a, b) : p.Dg(1281)
        },
        Le: function() {
            var a = k.getError() || p.Dj;
            p.Dj = 0;
            return a
        },
        Ke: function(a, b) {
            Ya(a, b, 2)
        },
        cc: function(a, b) {
            return k.getFragDataLocation(p.Jg[a], y(b))
        },
        Je: function(a, b, c, d) {
            a = k.getFramebufferAttachmentParameter(a, b, c);
            if (a instanceof WebGLRenderbuffer || a instanceof WebGLTexture) a = a.name | 0;
            m[d >> 2] = a
        },
        wb: function(a, b, c) {
            cc(a, b, c, 1)
        },
        yb: function(a, b) {
            Ya(a, b, 1)
        },
        tc: function(a, b, c) {
            cc(a, b, c, 0)
        },
        Ie: function(a, b) {
            Ya(a, b, 0)
        },
        Va: function(a,
            b, c, d, e) {
            if (0 > d) p.Dg(1281);
            else if (e) {
                if (a = k.getInternalformatParameter(a, b, c), null !== a)
                    for (b = 0; b < a.length && b < d; ++b) m[e + 4 * b >> 2] = a[b]
            } else p.Dg(1281)
        },
        bb: function() {
            p.Dg(1282)
        },
        Ge: function(a, b, c, d) {
            a = k.getProgramInfoLog(p.Jg[a]);
            null === a && (a = "(unknown error)");
            b = 0 < b && d ? L(a, d, b) : 0;
            c && (m[c >> 2] = b)
        },
        He: function(a, b, c) {
            if (c)
                if (a >= p.counter) p.Dg(1281);
                else if (a = p.Jg[a], 35716 == b) a = k.getProgramInfoLog(a), null === a && (a = "(unknown error)"), m[c >> 2] = a.length + 1;
            else if (35719 == b) {
                if (!a.Ti)
                    for (b = 0; b < k.getProgramParameter(a,
                            35718); ++b) a.Ti = Math.max(a.Ti, k.getActiveUniform(a, b).name.length + 1);
                m[c >> 2] = a.Ti
            } else if (35722 == b) {
                if (!a.Ri)
                    for (b = 0; b < k.getProgramParameter(a, 35721); ++b) a.Ri = Math.max(a.Ri, k.getActiveAttrib(a, b).name.length + 1);
                m[c >> 2] = a.Ri
            } else if (35381 == b) {
                if (!a.Si)
                    for (b = 0; b < k.getProgramParameter(a, 35382); ++b) a.Si = Math.max(a.Si, k.getActiveUniformBlockName(a, b).length + 1);
                m[c >> 2] = a.Si
            } else m[c >> 2] = k.getProgramParameter(a, b);
            else p.Dg(1281)
        },
        ga: function(a, b, c) {
            c ? (a = p.Pg[a], b = 2 > p.Rg.version ? k.Yg.getQueryObjectEXT(a,
                b) : k.getQueryParameter(a, b), Fa(c, "boolean" == typeof b ? b ? 1 : 0 : b)) : p.Dg(1281)
        },
        ja: function(a, b, c) {
            c ? (a = k.Yg.getQueryObjectEXT(p.Pg[a], b), m[c >> 2] = "boolean" == typeof a ? a ? 1 : 0 : a) : p.Dg(1281)
        },
        fa: function(a, b, c) {
            c ? (a = p.Pg[a], b = 2 > p.Rg.version ? k.Yg.getQueryObjectEXT(a, b) : k.getQueryParameter(a, b), Fa(c, "boolean" == typeof b ? b ? 1 : 0 : b)) : p.Dg(1281)
        },
        Jc: function(a, b, c) {
            c ? (a = k.getQueryParameter(p.Pg[a], b), m[c >> 2] = "boolean" == typeof a ? a ? 1 : 0 : a) : p.Dg(1281)
        },
        ha: function(a, b, c) {
            c ? (a = k.Yg.getQueryObjectEXT(p.Pg[a], b), m[c >> 2] =
                "boolean" == typeof a ? a ? 1 : 0 : a) : p.Dg(1281)
        },
        Kc: function(a, b, c) {
            c ? m[c >> 2] = k.getQuery(a, b) : p.Dg(1281)
        },
        ka: function(a, b, c) {
            c ? m[c >> 2] = k.Yg.getQueryEXT(a, b) : p.Dg(1281)
        },
        Fe: function(a, b, c) {
            c ? m[c >> 2] = k.getRenderbufferParameter(a, b) : p.Dg(1281)
        },
        kb: function(a, b, c) {
            c ? I[c >> 2] = k.getSamplerParameter(p.hh[a], b) : p.Dg(1281)
        },
        lb: function(a, b, c) {
            c ? m[c >> 2] = k.getSamplerParameter(p.hh[a], b) : p.Dg(1281)
        },
        De: function(a, b, c, d) {
            a = k.getShaderInfoLog(p.Vg[a]);
            null === a && (a = "(unknown error)");
            b = 0 < b && d ? L(a, d, b) : 0;
            c && (m[c >> 2] = b)
        },
        Be: function(a, b, c, d) {
            a = k.getShaderPrecisionFormat(a, b);
            m[c >> 2] = a.rangeMin;
            m[c + 4 >> 2] = a.rangeMax;
            m[d >> 2] = a.precision
        },
        Ae: function(a, b, c, d) {
            if (a = k.getShaderSource(p.Vg[a])) b = 0 < b && d ? L(a, d, b) : 0, c && (m[c >> 2] = b)
        },
        Ee: function(a, b, c) {
            c ? 35716 == b ? (a = k.getShaderInfoLog(p.Vg[a]), null === a && (a = "(unknown error)"), m[c >> 2] = a ? a.length + 1 : 0) : 35720 == b ? (a = k.getShaderSource(p.Vg[a]), m[c >> 2] = a ? a.length + 1 : 0) : m[c >> 2] = k.getShaderParameter(p.Vg[a], b) : p.Dg(1281)
        },
        ze: function(a) {
            var b = p.di[a];
            if (!b) {
                switch (a) {
                    case 7939:
                        b = k.getSupportedExtensions() || [];
                        b = b.concat(b.map(function(d) {
                            return "GL_" + d
                        }));
                        b = Ga(b.join(" "));
                        break;
                    case 7936:
                    case 7937:
                    case 37445:
                    case 37446:
                        (b = k.getParameter(a)) || p.Dg(1280);
                        b = b && Ga(b);
                        break;
                    case 7938:
                        b = Ga("OpenGL ES 3.0 (" + k.getParameter(7938) + ")");
                        break;
                    case 35724:
                        b = k.getParameter(35724);
                        var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                        null !== c && (3 == c[1].length && (c[1] += "0"), b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
                        b = Ga(b);
                        break;
                    default:
                        p.Dg(1280)
                }
                p.di[a] = b
            }
            return b
        },
        Qb: function(a, b) {
            if (2 > p.Rg.version) return p.Dg(1282),
                0;
            var c = p.Sk[a];
            if (c) return 0 > b || b >= c.length ? (p.Dg(1281), 0) : c[b];
            switch (a) {
                case 7939:
                    return c = k.getSupportedExtensions() || [], c = c.concat(c.map(function(d) {
                        return "GL_" + d
                    })), c = c.map(function(d) {
                        return Ga(d)
                    }), c = p.Sk[a] = c, 0 > b || b >= c.length ? (p.Dg(1281), 0) : c[b];
                default:
                    return p.Dg(1280), 0
            }
        },
        xb: function(a, b, c, d, e) {
            0 > c ? p.Dg(1281) : e ? (a = k.getSyncParameter(p.Eh[a], b), null !== a && (m[e >> 2] = a, d && (m[d >> 2] = 1))) : p.Dg(1281)
        },
        ye: function(a, b, c) {
            c ? I[c >> 2] = k.getTexParameter(a, b) : p.Dg(1281)
        },
        xe: function(a, b, c) {
            c ? m[c >> 2] =
                k.getTexParameter(a, b) : p.Dg(1281)
        },
        mc: function(a, b, c, d, e, g, h) {
            a = p.Jg[a];
            if (a = k.getTransformFeedbackVarying(a, b)) h && 0 < c ? (c = L(a.name, h, c), d && (m[d >> 2] = c)) : d && (m[d >> 2] = 0), e && (m[e >> 2] = a.size), g && (m[g >> 2] = a.type)
        },
        Kb: function(a, b) {
            return k.getUniformBlockIndex(p.Jg[a], y(b))
        },
        Ob: function(a, b, c, d) {
            if (d)
                if (0 < b && (0 == c || 0 == d)) p.Dg(1281);
                else {
                    a = p.Jg[a];
                    for (var e = [], g = 0; g < b; g++) e.push(y(m[c + 4 * g >> 2]));
                    if (a = k.getUniformIndices(a, e))
                        for (b = a.length, g = 0; g < b; g++) m[d + 4 * g >> 2] = a[g]
                }
            else p.Dg(1281)
        },
        ue: function(a, b) {
            b =
                y(b);
            if (a = p.Jg[a]) {
                ec(a);
                var c = a.Di,
                    d = 0,
                    e = b,
                    g = dc(b);
                0 < g && (d = parseInt(b.slice(g + 1)) >>> 0, e = b.slice(0, g));
                if ((e = a.Zk[e]) && d < e[0] && (d += e[1], c[d] = c[d] || k.getUniformLocation(a, b))) return d
            } else p.Dg(1281);
            return -1
        },
        we: function(a, b, c) {
            rb(a, b, c, 2)
        },
        ve: function(a, b, c) {
            rb(a, b, c, 0)
        },
        dc: function(a, b, c) {
            rb(a, b, c, 0)
        },
        kc: function(a, b, c) {
            Za(a, b, c, 0)
        },
        jc: function(a, b, c) {
            Za(a, b, c, 0)
        },
        qe: function(a, b, c) {
            c ? m[c >> 2] = k.getVertexAttribOffset(a, b) : p.Dg(1281)
        },
        te: function(a, b, c) {
            Za(a, b, c, 2)
        },
        se: function(a, b, c) {
            Za(a, b, c, 5)
        },
        pe: function(a, b) {
            k.hint(a, b)
        },
        _a: function(a, b, c) {
            for (var d = za[b], e = 0; e < b; e++) d[e] = m[c + 4 * e >> 2];
            k.invalidateFramebuffer(a, d)
        },
        Za: function(a, b, c, d, e, g, h) {
            for (var n = za[b], q = 0; q < b; q++) n[q] = m[c + 4 * q >> 2];
            k.invalidateSubFramebuffer(a, n, d, e, g, h)
        },
        oe: function(a) {
            return (a = p.Fh[a]) ? k.isBuffer(a) : 0
        },
        ne: function(a) {
            return k.isEnabled(a)
        },
        me: function(a) {
            return (a = p.ni[a]) ? k.isFramebuffer(a) : 0
        },
        le: function(a) {
            return (a = p.Jg[a]) ? k.isProgram(a) : 0
        },
        Nc: function(a) {
            return (a = p.Pg[a]) ? k.isQuery(a) : 0
        },
        oa: function(a) {
            return (a =
                p.Pg[a]) ? k.Yg.isQueryEXT(a) : 0
        },
        ke: function(a) {
            return (a = p.bi[a]) ? k.isRenderbuffer(a) : 0
        },
        sb: function(a) {
            return (a = p.hh[a]) ? k.isSampler(a) : 0
        },
        je: function(a) {
            return (a = p.Vg[a]) ? k.isShader(a) : 0
        },
        Db: function(a) {
            return k.isSync(p.Eh[a])
        },
        ie: function(a) {
            return (a = p.Nh[a]) ? k.isTexture(a) : 0
        },
        eb: function(a) {
            return k.isTransformFeedback(p.Ci[a])
        },
        uc: function(a) {
            return (a = p.sh[a]) ? k.isVertexArray(a) : 0
        },
        ba: function(a) {
            return (a = p.sh[a]) ? k.isVertexArray(a) : 0
        },
        he: function(a) {
            k.lineWidth(a)
        },
        fe: function(a) {
            a = p.Jg[a];
            k.linkProgram(a);
            a.Di = 0;
            a.Zk = {}
        },
        db: function() {
            k.pauseTransformFeedback()
        },
        ee: function(a, b) {
            3317 == a && (p.Gm = b);
            k.pixelStorei(a, b)
        },
        de: function(a, b) {
            k.polygonOffset(a, b)
        },
        ab: function() {
            p.Dg(1280)
        },
        $a: function() {
            p.Dg(1280)
        },
        la: function(a, b) {
            k.Yg.queryCounterEXT(p.Pg[a], b)
        },
        Xc: function(a) {
            k.readBuffer(a)
        },
        ce: function(a, b, c, d, e, g, h) {
            if (k.mj) k.readPixels(a, b, c, d, e, g, h);
            else {
                var n = Ha(g);
                k.readPixels(a, b, c, d, e, g, n, h >> Ia(n))
            }
        },
        be: function() {},
        ae: function(a, b, c, d) {
            k.renderbufferStorage(a, b, c, d)
        },
        zc: function(a, b, c, d, e) {
            k.renderbufferStorageMultisample(a,
                b, c, d, e)
        },
        cb: function() {
            k.resumeTransformFeedback()
        },
        $d: function(a, b) {
            k.sampleCoverage(a, !!b)
        },
        nb: function(a, b, c) {
            k.samplerParameterf(p.hh[a], b, c)
        },
        mb: function(a, b, c) {
            k.samplerParameterf(p.hh[a], b, I[c >> 2])
        },
        pb: function(a, b, c) {
            k.samplerParameteri(p.hh[a], b, c)
        },
        ob: function(a, b, c) {
            k.samplerParameteri(p.hh[a], b, m[c >> 2])
        },
        _d: function(a, b, c, d) {
            k.scissor(a, b, c, d)
        },
        Zd: function() {
            p.Dg(1280)
        },
        Yd: function(a, b, c, d) {
            b = p.Kl(a, b, c, d);
            k.shaderSource(p.Vg[a], b)
        },
        Xd: function(a, b, c) {
            k.stencilFunc(a, b, c)
        },
        Wd: function(a,
            b, c, d) {
            k.stencilFuncSeparate(a, b, c, d)
        },
        Vd: function(a) {
            k.stencilMask(a)
        },
        Ud: function(a, b) {
            k.stencilMaskSeparate(a, b)
        },
        Td: function(a, b, c) {
            k.stencilOp(a, b, c)
        },
        Sd: function(a, b, c, d) {
            k.stencilOpSeparate(a, b, c, d)
        },
        Rd: function(a, b, c, d, e, g, h, n, q) {
            if (k.kh) k.texImage2D(a, b, c, d, e, g, h, n, q);
            else if (q) {
                var u = Ha(n);
                k.texImage2D(a, b, c, d, e, g, h, n, u, q >> Ia(u))
            } else k.texImage2D(a, b, c, d, e, g, h, n, null)
        },
        Vc: function(a, b, c, d, e, g, h, n, q, u) {
            if (k.kh) k.texImage3D(a, b, c, d, e, g, h, n, q, u);
            else if (u) {
                var v = Ha(q);
                k.texImage3D(a, b, c, d,
                    e, g, h, n, q, v, u >> Ia(v))
            } else k.texImage3D(a, b, c, d, e, g, h, n, q, null)
        },
        Qd: function(a, b, c) {
            k.texParameterf(a, b, c)
        },
        Pd: function(a, b, c) {
            k.texParameterf(a, b, I[c >> 2])
        },
        Od: function(a, b, c) {
            k.texParameteri(a, b, c)
        },
        Md: function(a, b, c) {
            k.texParameteri(a, b, m[c >> 2])
        },
        Ya: function(a, b, c, d, e) {
            k.texStorage2D(a, b, c, d, e)
        },
        Xa: function(a, b, c, d, e, g) {
            k.texStorage3D(a, b, c, d, e, g)
        },
        Ld: function(a, b, c, d, e, g, h, n, q) {
            if (k.kh) k.texSubImage2D(a, b, c, d, e, g, h, n, q);
            else if (q) {
                var u = Ha(n);
                k.texSubImage2D(a, b, c, d, e, g, h, n, u, q >> Ia(u))
            } else k.texSubImage2D(a,
                b, c, d, e, g, h, n, null)
        },
        Uc: function(a, b, c, d, e, g, h, n, q, u, v) {
            if (k.kh) k.texSubImage3D(a, b, c, d, e, g, h, n, q, u, v);
            else if (v) {
                var A = Ha(u);
                k.texSubImage3D(a, b, c, d, e, g, h, n, q, u, A, v >> Ia(A))
            } else k.texSubImage3D(a, b, c, d, e, g, h, n, q, u, null)
        },
        nc: function(a, b, c, d) {
            a = p.Jg[a];
            for (var e = [], g = 0; g < b; g++) e.push(y(m[c + 4 * g >> 2]));
            k.transformFeedbackVaryings(a, e, d)
        },
        Kd: function(a, b) {
            k.uniform1f(J(a), b)
        },
        Jd: function(a, b, c) {
            b && k.uniform1fv(J(a), I, c >> 2, b)
        },
        Id: function(a, b) {
            k.uniform1i(J(a), b)
        },
        Hd: function(a, b, c) {
            b && k.uniform1iv(J(a),
                m, c >> 2, b)
        },
        bc: function(a, b) {
            k.uniform1ui(J(a), b)
        },
        Zb: function(a, b, c) {
            b && k.uniform1uiv(J(a), B, c >> 2, b)
        },
        Gd: function(a, b, c) {
            k.uniform2f(J(a), b, c)
        },
        Fd: function(a, b, c) {
            b && k.uniform2fv(J(a), I, c >> 2, 2 * b)
        },
        Ed: function(a, b, c) {
            k.uniform2i(J(a), b, c)
        },
        Dd: function(a, b, c) {
            b && k.uniform2iv(J(a), m, c >> 2, 2 * b)
        },
        ac: function(a, b, c) {
            k.uniform2ui(J(a), b, c)
        },
        Xb: function(a, b, c) {
            b && k.uniform2uiv(J(a), B, c >> 2, 2 * b)
        },
        Cd: function(a, b, c, d) {
            k.uniform3f(J(a), b, c, d)
        },
        Bd: function(a, b, c) {
            b && k.uniform3fv(J(a), I, c >> 2, 3 * b)
        },
        Ad: function(a,
            b, c, d) {
            k.uniform3i(J(a), b, c, d)
        },
        zd: function(a, b, c) {
            b && k.uniform3iv(J(a), m, c >> 2, 3 * b)
        },
        $b: function(a, b, c, d) {
            k.uniform3ui(J(a), b, c, d)
        },
        Wb: function(a, b, c) {
            b && k.uniform3uiv(J(a), B, c >> 2, 3 * b)
        },
        yd: function(a, b, c, d, e) {
            k.uniform4f(J(a), b, c, d, e)
        },
        xd: function(a, b, c) {
            b && k.uniform4fv(J(a), I, c >> 2, 4 * b)
        },
        wd: function(a, b, c, d, e) {
            k.uniform4i(J(a), b, c, d, e)
        },
        vd: function(a, b, c) {
            b && k.uniform4iv(J(a), m, c >> 2, 4 * b)
        },
        _b: function(a, b, c, d, e) {
            k.uniform4ui(J(a), b, c, d, e)
        },
        Vb: function(a, b, c) {
            b && k.uniform4uiv(J(a), B, c >> 2, 4 * b)
        },
        Hb: function(a,
            b, c) {
            a = p.Jg[a];
            k.uniformBlockBinding(a, b, c)
        },
        ud: function(a, b, c, d) {
            b && k.uniformMatrix2fv(J(a), !!c, I, d >> 2, 4 * b)
        },
        Hc: function(a, b, c, d) {
            b && k.uniformMatrix2x3fv(J(a), !!c, I, d >> 2, 6 * b)
        },
        Fc: function(a, b, c, d) {
            b && k.uniformMatrix2x4fv(J(a), !!c, I, d >> 2, 8 * b)
        },
        td: function(a, b, c, d) {
            b && k.uniformMatrix3fv(J(a), !!c, I, d >> 2, 9 * b)
        },
        Gc: function(a, b, c, d) {
            b && k.uniformMatrix3x2fv(J(a), !!c, I, d >> 2, 6 * b)
        },
        Cc: function(a, b, c, d) {
            b && k.uniformMatrix3x4fv(J(a), !!c, I, d >> 2, 12 * b)
        },
        sd: function(a, b, c, d) {
            b && k.uniformMatrix4fv(J(a), !!c, I, d >>
                2, 16 * b)
        },
        Ec: function(a, b, c, d) {
            b && k.uniformMatrix4x2fv(J(a), !!c, I, d >> 2, 8 * b)
        },
        Bc: function(a, b, c, d) {
            b && k.uniformMatrix4x3fv(J(a), !!c, I, d >> 2, 12 * b)
        },
        rd: function(a) {
            a = p.Jg[a];
            k.useProgram(a);
            k.rl = a
        },
        qd: function(a) {
            k.validateProgram(p.Jg[a])
        },
        pd: function(a, b) {
            k.vertexAttrib1f(a, b)
        },
        od: function(a, b) {
            k.vertexAttrib1f(a, I[b >> 2])
        },
        nd: function(a, b, c) {
            k.vertexAttrib2f(a, b, c)
        },
        md: function(a, b) {
            k.vertexAttrib2f(a, I[b >> 2], I[b + 4 >> 2])
        },
        ld: function(a, b, c, d) {
            k.vertexAttrib3f(a, b, c, d)
        },
        kd: function(a, b) {
            k.vertexAttrib3f(a,
                I[b >> 2], I[b + 4 >> 2], I[b + 8 >> 2])
        },
        jd: function(a, b, c, d, e) {
            k.vertexAttrib4f(a, b, c, d, e)
        },
        hd: function(a, b) {
            k.vertexAttrib4f(a, I[b >> 2], I[b + 4 >> 2], I[b + 8 >> 2], I[b + 12 >> 2])
        },
        jb: function(a, b) {
            k.vertexAttribDivisor(a, b)
        },
        Y: function(a, b) {
            k.vertexAttribDivisor(a, b)
        },
        dd: function(a, b) {
            k.vertexAttribDivisor(a, b)
        },
        ed: function(a, b) {
            k.vertexAttribDivisor(a, b)
        },
        Ua: function(a, b) {
            k.vertexAttribDivisor(a, b)
        },
        ic: function(a, b, c, d, e) {
            k.vertexAttribI4i(a, b, c, d, e)
        },
        fc: function(a, b) {
            k.vertexAttribI4i(a, m[b >> 2], m[b + 4 >> 2], m[b + 8 >> 2],
                m[b + 12 >> 2])
        },
        gc: function(a, b, c, d, e) {
            k.vertexAttribI4ui(a, b, c, d, e)
        },
        ec: function(a, b) {
            k.vertexAttribI4ui(a, B[b >> 2], B[b + 4 >> 2], B[b + 8 >> 2], B[b + 12 >> 2])
        },
        lc: function(a, b, c, d, e) {
            k.vertexAttribIPointer(a, b, c, d, e)
        },
        gd: function(a, b, c, d, e, g) {
            k.vertexAttribPointer(a, b, c, !!d, e, g)
        },
        fd: function(a, b, c, d) {
            k.viewport(a, b, c, d)
        },
        zb: function(a, b, c, d) {
            k.waitSync(p.Eh[a], b, (c >>> 0) + 4294967296 * d)
        },
        n: function() {
            return 0
        },
        ta: function() {
            return !0
        },
        Ra: function(a, b, c) {
            U.copyWithin(a, b, b + c)
        },
        va: function(a, b, c) {
            return $c(a, {
                Sj: m[c >>
                    2],
                jj: m[c + 4 >> 2],
                Fl: m[c + 8 >> 2],
                xl: b,
                Hi: m[c + 12 >> 2],
                dk: m[c + 16 >> 2]
            })
        },
        I: function(a, b) {
            a = aa(a);
            return a ? a.requestPointerLock || a.Xi ? w.ij() ? qb(a) : b ? (w.lk(qb, 2, [a]), 1) : -2 : -1 : -4
        },
        l: function() {
            da("OOM")
        },
        Nb: function() {},
        Ce: function() {
            return (w.Pi = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null) ? 0 : -1
        },
        o: function(a, b, c) {
            if ("undefined" == typeof onbeforeunload) return -1;
            if (1 !== c) return -5;
            ad(2, a, !0, b, 28, "beforeunload");
            return 0
        },
        A: function(a, b, c, d, e) {
            fc(a,
                b, c, d, 12, "blur", e);
            return 0
        },
        g: Zb,
        k: function(a, b, c) {
            a = aa(a);
            if (!a) return -4;
            a.style.width = b + "px";
            a.style.height = c + "px";
            return 0
        },
        B: function(a, b, c, d, e) {
            fc(a, b, c, d, 13, "focus", e);
            return 0
        },
        r: function(a, b, c, d, e) {
            if (!w.fullscreenEnabled()) return -1;
            a = aa(a);
            if (!a) return -4;
            gc(a, b, c, d, 19, "fullscreenchange", e);
            gc(a, b, c, d, 19, "webkitfullscreenchange", e);
            return 0
        },
        j: function(a, b, c, d) {
            if (!navigator.getGamepads && !navigator.webkitGetGamepads) return -1;
            hc(2, a, b, c, 26, "gamepadconnected", d);
            return 0
        },
        i: function(a, b, c,
            d) {
            if (!navigator.getGamepads && !navigator.webkitGetGamepads) return -1;
            hc(2, a, b, c, 27, "gamepaddisconnected", d);
            return 0
        },
        u: function(a, b, c, d, e) {
            sb(a, b, c, d, 2, "keydown", e);
            return 0
        },
        s: function(a, b, c, d, e) {
            sb(a, b, c, d, 1, "keypress", e);
            return 0
        },
        t: function(a, b, c, d, e) {
            sb(a, b, c, d, 3, "keyup", e);
            return 0
        },
        Nd: function(a, b, c) {
            a = S(a);
            Tb(a, b, c)
        },
        G: function(a, b, c, d, e) {
            Ja(a, b, c, d, 5, "mousedown", e);
            return 0
        },
        E: function(a, b, c, d, e) {
            Ja(a, b, c, d, 33, "mouseenter", e);
            return 0
        },
        D: function(a, b, c, d, e) {
            Ja(a, b, c, d, 34, "mouseleave", e);
            return 0
        },
        H: function(a, b, c, d, e) {
            Ja(a, b, c, d, 8, "mousemove", e);
            return 0
        },
        F: function(a, b, c, d, e) {
            Ja(a, b, c, d, 6, "mouseup", e);
            return 0
        },
        v: function(a, b, c, d, e) {
            if (!document || !document.body || !(document.body.requestPointerLock || document.body.rn || document.body.On || document.body.Xi)) return -1;
            a = aa(a);
            if (!a) return -4;
            $a(a, b, c, d, 20, "pointerlockchange", e);
            $a(a, b, c, d, 20, "mozpointerlockchange", e);
            $a(a, b, c, d, 20, "webkitpointerlockchange", e);
            $a(a, b, c, d, 20, "mspointerlockchange", e);
            return 0
        },
        q: function(a, b, c, d, e) {
            bd(a, b, c,
                d, 10, "resize", e);
            return 0
        },
        w: function(a, b, c, d, e) {
            ab(a, b, c, d, 25, "touchcancel", e);
            return 0
        },
        y: function(a, b, c, d, e) {
            ab(a, b, c, d, 23, "touchend", e);
            return 0
        },
        x: function(a, b, c, d, e) {
            ab(a, b, c, d, 24, "touchmove", e);
            return 0
        },
        z: function(a, b, c, d, e) {
            ab(a, b, c, d, 22, "touchstart", e);
            return 0
        },
        p: function(a, b, c, d) {
            cd(Ua[1], a, b, c, 21, "visibilitychange", d);
            return 0
        },
        C: function(a, b, c, d, e) {
            a = aa(a);
            return "undefined" != typeof a.onwheel ? (dd(a, b, c, d, 9, "wheel", e), 0) : -1
        },
        wa: function(a) {
            ld(y(a))
        },
        ra: function(a, b, c, d, e) {
            function g(W) {
                Q ?
                    W() : Ta(W)
            }
            var h = a + 112,
                n = y(h),
                q = B[h + 36 >> 2],
                u = B[h + 40 >> 2],
                v = B[h + 44 >> 2],
                A = B[h + 48 >> 2],
                E = B[h + 52 >> 2],
                t = !!(E & 4),
                F = !!(E & 32),
                M = !!(E & 16),
                Q = !!(E & 64),
                Z = W => {
                    g(() => {
                        q ? S(q)(W) : b && b(W)
                    })
                },
                ma = W => {
                    g(() => {
                        v ? S(v)(W) : d && d(W)
                    })
                },
                C = W => {
                    g(() => {
                        u ? S(u)(W) : c && c(W)
                    })
                },
                R = W => {
                    g(() => {
                        A ? S(A)(W) : e && e(W)
                    })
                };
            E = W => {
                tb(W, Z, C, ma, R)
            };
            var ca = (W, od) => {
                    jc(O.li, W, od.response, Ma => {
                        g(() => {
                            q ? S(q)(Ma) : b && b(Ma)
                        })
                    }, Ma => {
                        g(() => {
                            q ? S(q)(Ma) : b && b(Ma)
                        })
                    })
                },
                ja = W => {
                    tb(W, ca, C, ma, R)
                };
            if ("EM_IDB_STORE" === n) n = B[h + 84 >> 2], jc(O.li, a, U.slice(n, n + B[h + 88 >> 2]), Z,
                C);
            else if ("EM_IDB_DELETE" === n) fd(O.li, a, Z, C);
            else if (M) {
                if (F) return 0;
                tb(a, t ? ca : Z, C, ma, R)
            } else ed(O.li, a, Z, F ? C : t ? ja : E);
            return a
        },
        xa: function(a, b) {
            b >>= 2;
            b = {
                alpha: !!m[b + 0],
                depth: !!m[b + 1],
                stencil: !!m[b + 2],
                antialias: !!m[b + 3],
                premultipliedAlpha: !!m[b + 4],
                preserveDrawingBuffer: !!m[b + 5],
                powerPreference: nd[m[b + 6]],
                failIfMajorPerformanceCaveat: !!m[b + 7],
                Fj: m[b + 8],
                $l: m[b + 9],
                nk: m[b + 10],
                Cl: m[b + 11],
                zn: m[b + 12],
                Dn: m[b + 13]
            };
            a = aa(a);
            return !a || b.Cl ? 0 : p.ki(a, b)
        },
        ya: function(a) {
            a >>= 2;
            for (var b = 0; 14 > b; ++b) m[a + b] = 0;
            m[a +
                0] = m[a + 1] = m[a + 3] = m[a + 4] = m[a + 8] = m[a + 10] = 1
        },
        sa: function(a) {
            return p.si(a) ? 0 : -5
        },
        Ia: function(a, b) {
            var c = 0;
            Ka().forEach(function(d, e) {
                var g = b + c;
                e = B[a + 4 * e >> 2] = g;
                for (g = 0; g < d.length; ++g) X[e++ >> 0] = d.charCodeAt(g);
                X[e >> 0] = 0;
                c += d.length + 1
            });
            return 0
        },
        Ja: function(a, b) {
            var c = Ka();
            B[a >> 2] = c.length;
            var d = 0;
            c.forEach(function(e) {
                d += e.length + 1
            });
            B[b >> 2] = d;
            return 0
        },
        K: function(a) {
            try {
                var b = V.Uh(a);
                f.close(b);
                return 0
            } catch (c) {
                if ("undefined" == typeof f || !(c instanceof f.Cg)) throw c;
                return c.lh
            }
        },
        La: function(a, b, c, d) {
            try {
                a: {
                    var e =
                        V.Uh(a);a = b;
                    for (var g = b = 0; g < c; g++) {
                        var h = B[a >> 2],
                            n = B[a + 4 >> 2];
                        a += 8;
                        var q = f.read(e, X, h, n, void 0);
                        if (0 > q) {
                            var u = -1;
                            break a
                        }
                        b += q;
                        if (q < n) break
                    }
                    u = b
                }
                m[d >> 2] = u;
                return 0
            }
            catch (v) {
                if ("undefined" == typeof f || !(v instanceof f.Cg)) throw v;
                return v.lh
            }
        },
        Ea: function(a, b, c, d, e) {
            try {
                b = c + 2097152 >>> 0 < 4194305 - !!b ? (b >>> 0) + 4294967296 * c : NaN;
                if (isNaN(b)) return 61;
                var g = V.Uh(a);
                f.oh(g, b, d);
                T = [g.position >>> 0, (G = g.position, 1 <= +Math.abs(G) ? 0 < G ? (Math.min(+Math.floor(G / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((G - +(~~G >>> 0)) /
                    4294967296) >>> 0 : 0)];
                m[e >> 2] = T[0];
                m[e + 4 >> 2] = T[1];
                g.wj && 0 === b && 0 === d && (g.wj = null);
                return 0
            } catch (h) {
                if ("undefined" == typeof f || !(h instanceof f.Cg)) throw h;
                return h.lh
            }
        },
        Ka: function(a, b, c, d) {
            try {
                a: {
                    var e = V.Uh(a);a = b;
                    for (var g = b = 0; g < c; g++) {
                        var h = B[a >> 2],
                            n = B[a + 4 >> 2];
                        a += 8;
                        var q = f.write(e, X, h, n, void 0);
                        if (0 > q) {
                            var u = -1;
                            break a
                        }
                        b += q
                    }
                    u = b
                }
                B[d >> 2] = u;
                return 0
            }
            catch (v) {
                if ("undefined" == typeof f || !(v instanceof f.Cg)) throw v;
                return v.lh
            }
        },
        Ga: bb,
        ff: function(a) {
            k.clear(a)
        },
        Z: function(a, b, c, d) {
            k.clearColor(a, b, c, d)
        },
        Bf: function(a) {
            k.clearDepth(a)
        },
        O: function(a) {
            k.clearStencil(a)
        },
        N: function(a) {
            k.depthMask(!!a)
        },
        ia: function(a, b, c, d) {
            k.viewport(a, b, c, d)
        },
        Sa: Sb,
        J: function() {},
        Ha: function(a, b, c, d) {
            return gd(a, b, c, d)
        }
    };
    (function() {
        function a(e) {
            l.asm = e.exports;
            Dc = l.asm.Mf;
            Ec = e = Dc.buffer;
            l.HEAP8 = X = new Int8Array(e);
            l.HEAP16 = xa = new Int16Array(e);
            l.HEAP32 = m = new Int32Array(e);
            l.HEAPU8 = U = new Uint8Array(e);
            l.HEAPU16 = P = new Uint16Array(e);
            l.HEAPU32 = B = new Uint32Array(e);
            l.HEAPF32 = I = new Float32Array(e);
            l.HEAPF64 = ea = new Float64Array(e);
            Ob = l.asm.sg;
            oc.unshift(l.asm.Nf);
            va("wasm-instantiate")
        }

        function b(e) {
            a(e.instance)
        }

        function c(e) {
            return Tc().then(function(g) {
                return WebAssembly.instantiate(g, d)
            }).then(function(g) {
                return g
            }).then(e, function(g) {
                ba("failed to asynchronously prepare wasm: " + g);
                da(g)
            })
        }
        var d = {
            a: pd
        };
        Pa("wasm-instantiate");
        if (l.instantiateWasm) try {
            return l.instantiateWasm(d, a)
        } catch (e) {
            return ba("Module.instantiateWasm callback failed with error: " + e), !1
        }(function() {
            return Ba || "function" != typeof WebAssembly.instantiateStreaming ||
                Hb(ka) || "function" != typeof fetch ? c(b) : fetch(ka, {
                    credentials: "same-origin"
                }).then(function(e) {
                    return WebAssembly.instantiateStreaming(e, d).then(b, function(g) {
                        ba("wasm streaming compile failed: " + g);
                        ba("falling back to ArrayBuffer instantiation");
                        return c(b)
                    })
                })
        })();
        return {}
    })();
    l.___wasm_call_ctors = function() {
        return (l.___wasm_call_ctors = l.asm.Nf).apply(null, arguments)
    };
    var Y = l._malloc = function() {
            return (Y = l._malloc = l.asm.Of).apply(null, arguments)
        },
        pa = l._free = function() {
            return (pa = l._free = l.asm.Pf).apply(null,
                arguments)
        };
    l._webRTCProxyOpen = function() {
        return (l._webRTCProxyOpen = l.asm.Qf).apply(null, arguments)
    };
    l._webRTCProxyMessage = function() {
        return (l._webRTCProxyMessage = l.asm.Rf).apply(null, arguments)
    };
    var Ac = l._webRTCProxyClosed = function() {
            return (Ac = l._webRTCProxyClosed = l.asm.Sf).apply(null, arguments)
        },
        Fc = l._cp6_text_input_focus = function() {
            return (Fc = l._cp6_text_input_focus = l.asm.Tf).apply(null, arguments)
        },
        sc = l._cp6_on_paste = function() {
            return (sc = l._cp6_on_paste = l.asm.Uf).apply(null, arguments)
        },
        uc = l._cp6_on_copy =
        function() {
            return (uc = l._cp6_on_copy = l.asm.Vf).apply(null, arguments)
        },
        vc = l._cp6_on_cut = function() {
            return (vc = l._cp6_on_cut = l.asm.Wf).apply(null, arguments)
        },
        tc = l._cp6_browser_quit_confirmation = function() {
            return (tc = l._cp6_browser_quit_confirmation = l.asm.Xf).apply(null, arguments)
        };
    l._cp6_location_hash_changed = function() {
        return (l._cp6_location_hash_changed = l.asm.Yf).apply(null, arguments)
    };
    l._emscripten_sleep = function() {
        return (l._emscripten_sleep = l.asm.Zf).apply(null, arguments)
    };
    var wc = l._cp6_mouse_wheel =
        function() {
            return (wc = l._cp6_mouse_wheel = l.asm._f).apply(null, arguments)
        },
        yb = l._cp6_window_blur = function() {
            return (yb = l._cp6_window_blur = l.asm.$f).apply(null, arguments)
        };
    l._main = function() {
        return (l._main = l.asm.ag).apply(null, arguments)
    };
    l._aip_complete = function() {
        return (l._aip_complete = l.asm.bg).apply(null, arguments)
    };
    var Ab = l._le_check = function() {
            return (Ab = l._le_check = l.asm.cg).apply(null, arguments)
        },
        Pc = l._xsolla_close_iframe = function() {
            return (Pc = l._xsolla_close_iframe = l.asm.dg).apply(null, arguments)
        },
        Gc = l._Util_GenerateMobImage = function() {
            return (Gc = l._Util_GenerateMobImage = l.asm.eg).apply(null, arguments)
        },
        Hc = l._Util_GeneratePetalImage = function() {
            return (Hc = l._Util_GeneratePetalImage = l.asm.fg).apply(null, arguments)
        },
        Jc = l._Util_GetMobs = function() {
            return (Jc = l._Util_GetMobs = l.asm.gg).apply(null, arguments)
        },
        Kc = l._Util_GetPetals = function() {
            return (Kc = l._Util_GetPetals = l.asm.hg).apply(null, arguments)
        },
        Lc = l._Util_GetTalents = function() {
            return (Lc = l._Util_GetTalents = l.asm.ig).apply(null, arguments)
        },
        Ic = l._Util_CalculateDropChance =
        function() {
            return (Ic = l._Util_CalculateDropChance = l.asm.jg).apply(null, arguments)
        },
        Mc = l._Util_GetAssemblerMatrix = function() {
            return (Mc = l._Util_GetAssemblerMatrix = l.asm.kg).apply(null, arguments)
        },
        xc = l._cp6_force_disconnect = function() {
            return (xc = l._cp6_force_disconnect = l.asm.lg).apply(null, arguments)
        },
        yc = l._cp6_force_server_id = function() {
            return (yc = l._cp6_force_server_id = l.asm.mg).apply(null, arguments)
        },
        Nc = l._cp6_canvas_context_lost = function() {
            return (Nc = l._cp6_canvas_context_lost = l.asm.ng).apply(null, arguments)
        },
        Oc = l._cp6_canvas_context_restored = function() {
            return (Oc = l._cp6_canvas_context_restored = l.asm.og).apply(null, arguments)
        },
        zc = l._cp6_simulate_context_loss = function() {
            return (zc = l._cp6_simulate_context_loss = l.asm.pg).apply(null, arguments)
        };
    l._cp6_timeout_fire = function() {
        return (l._cp6_timeout_fire = l.asm.qg).apply(null, arguments)
    };
    var La = l._cp6_check_ws = function() {
            return (La = l._cp6_check_ws = l.asm.rg).apply(null, arguments)
        },
        Mb = l.stackSave = function() {
            return (Mb = l.stackSave = l.asm.tg).apply(null, arguments)
        },
        Nb =
        l.stackRestore = function() {
            return (Nb = l.stackRestore = l.asm.ug).apply(null, arguments)
        },
        Va = l.stackAlloc = function() {
            return (Va = l.stackAlloc = l.asm.vg).apply(null, arguments)
        };
    l.dynCall_jiji = function() {
        return (l.dynCall_jiji = l.asm.wg).apply(null, arguments)
    };
    l.dynCall_ji = function() {
        return (l.dynCall_ji = l.asm.xg).apply(null, arguments)
    };
    l.dynCall_viijii = function() {
        return (l.dynCall_viijii = l.asm.yg).apply(null, arguments)
    };
    l.dynCall_iiiiij = function() {
        return (l.dynCall_iiiiij = l.asm.zg).apply(null, arguments)
    };
    l.dynCall_iiiiijj =
        function() {
            return (l.dynCall_iiiiijj = l.asm.Ag).apply(null, arguments)
        };
    l.dynCall_iiiiiijj = function() {
        return (l.dynCall_iiiiiijj = l.asm.Bg).apply(null, arguments)
    };
    var db;
    Aa = function b() {
        db || nc();
        db || (Aa = b)
    };
    if (l.preInit)
        for ("function" == typeof l.preInit && (l.preInit = [l.preInit]); 0 < l.preInit.length;) l.preInit.pop()();
    var pc = !0;
    l.noInitialRun && (pc = !1);
    nc()
})();