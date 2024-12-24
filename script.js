!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (e.document)
            return t(e);
        throw new Error("jQuery requires a window with a document")
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, P) {
    "use strict";
    function y(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
    function m(e) {
        return null != e && e === e.window
    }
    var t = []
      , H = Object.getPrototypeOf
      , s = t.slice
      , M = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , R = t.push
      , W = t.indexOf
      , q = {}
      , F = q.toString
      , B = q.hasOwnProperty
      , U = B.toString
      , z = U.call(Object)
      , g = {}
      , x = C.document
      , V = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function Q(e, t, n) {
        var i, o, r = (n = n || x).createElement("script");
        if (r.text = e,
        t)
            for (i in V)
                (o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r)
    }
    function p(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? q[F.call(e)] || "object" : typeof e
    }
    var e = "3.6.0"
      , E = function(e, t) {
        return new E.fn.init(e,t)
    };
    function G(e) {
        var t = !!e && "length"in e && e.length
          , n = p(e);
        return !y(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: e,
        constructor: E,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = E.merge(this.constructor(), e);
            return e.prevObject = this,
            e
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: R,
        sort: t.sort,
        splice: t.splice
    },
    E.extend = E.fn.extend = function() {
        var e, t, n, i, o, r = arguments[0] || {}, a = 1, s = arguments.length, l = !1;
        for ("boolean" == typeof r && (l = r,
        r = arguments[a] || {},
        a++),
        "object" == typeof r || y(r) || (r = {}),
        a === s && (r = this,
        a--); a < s; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = e[t],
                    "__proto__" !== t && r !== n && (l && n && (E.isPlainObject(n) || (i = Array.isArray(n))) ? (o = r[t],
                    o = i && !Array.isArray(o) ? [] : i || E.isPlainObject(o) ? o : {},
                    i = !1,
                    r[t] = E.extend(l, o, n)) : void 0 !== n && (r[t] = n));
        return r
    }
    ,
    E.extend({
        expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== F.call(e) || (e = H(e)) && ("function" != typeof (e = B.call(e, "constructor") && e.constructor) || U.call(e) !== z))
        },
        isEmptyObject: function(e) {
            for (var t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            Q(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, i = 0;
            if (G(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (G(Object(e)) ? E.merge(t, "string" == typeof e ? [e] : e) : R.call(t, e)),
            t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : W.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                e[o++] = t[i];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, a = !n; o < r; o++)
                !t(e[o], o) != a && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, r = 0, a = [];
            if (G(e))
                for (i = e.length; r < i; r++)
                    null != (o = t(e[r], r, n)) && a.push(o);
            else
                for (r in e)
                    null != (o = t(e[r], r, n)) && a.push(o);
            return M(a)
        },
        guid: 1,
        support: g
    }),
    "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
    E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        q["[object " + t + "]"] = t.toLowerCase()
    });
    function i(e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && E(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
    function K(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var e = function(P) {
        function d(e, t) {
            return e = "0x" + e.slice(1) - 65536,
            t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
        }
        function H(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }
        function M() {
            C()
        }
        var e, h, b, r, R, f, W, q, w, l, c, C, x, n, E, p, i, o, m, S = "sizzle" + +new Date, u = P.document, T = 0, F = 0, B = I(), U = I(), z = I(), g = I(), V = function(e, t) {
            return e === t && (c = !0),
            0
        }, Q = {}.hasOwnProperty, t = [], G = t.pop, K = t.push, $ = t.push, X = t.slice, y = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, Y = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", a = "[\\x20\\t\\r\\n\\f]", s = "(?:\\\\[\\da-fA-F]{1,6}" + a + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", J = "\\[" + a + "*(" + s + ")(?:" + a + "*([*^$|!~]?=)" + a + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + s + "))|)" + a + "*\\]", Z = ":(" + s + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + J + ")*)|.*)\\)|)", ee = new RegExp(a + "+","g"), v = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$","g"), te = new RegExp("^" + a + "*," + a + "*"), ne = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"), ie = new RegExp(a + "|>"), oe = new RegExp(Z), re = new RegExp("^" + s + "$"), _ = {
            ID: new RegExp("^#(" + s + ")"),
            CLASS: new RegExp("^\\.(" + s + ")"),
            TAG: new RegExp("^(" + s + "|[*])"),
            ATTR: new RegExp("^" + J),
            PSEUDO: new RegExp("^" + Z),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + a + "*(even|odd|(([+-]|)(\\d*)n|)" + a + "*(?:([+-]|)" + a + "*(\\d+)|))" + a + "*\\)|)","i"),
            bool: new RegExp("^(?:" + Y + ")$","i"),
            needsContext: new RegExp("^" + a + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + a + "*((?:-\\d)?\\d*)" + a + "*\\)|)(?=[^-]|$)","i")
        }, ae = /HTML$/i, se = /^(?:input|select|textarea|button)$/i, le = /^h\d$/i, k = /^[^{]+\{\s*\[native \w/, ce = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ue = /[+~]/, A = new RegExp("\\\\[\\da-fA-F]{1,6}" + a + "?|\\\\([^\\r\\n\\f])","g"), de = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, he = ye(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            $.apply(t = X.call(u.childNodes), u.childNodes),
            t[u.childNodes.length].nodeType
        } catch (e) {
            $ = {
                apply: t.length ? function(e, t) {
                    K.apply(e, X.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function D(e, t, n, i) {
            var o, r, a, s, l, c, u = t && t.ownerDocument, d = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d)
                return n;
            if (!i && (C(t),
            t = t || x,
            E)) {
                if (11 !== d && (s = ce.exec(e)))
                    if (o = s[1]) {
                        if (9 === d) {
                            if (!(c = t.getElementById(o)))
                                return n;
                            if (c.id === o)
                                return n.push(c),
                                n
                        } else if (u && (c = u.getElementById(o)) && m(t, c) && c.id === o)
                            return n.push(c),
                            n
                    } else {
                        if (s[2])
                            return $.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((o = s[3]) && h.getElementsByClassName && t.getElementsByClassName)
                            return $.apply(n, t.getElementsByClassName(o)),
                            n
                    }
                if (h.qsa && !g[e + " "] && (!p || !p.test(e)) && (1 !== d || "object" !== t.nodeName.toLowerCase())) {
                    if (c = e,
                    u = t,
                    1 === d && (ie.test(e) || ne.test(e))) {
                        for ((u = ue.test(e) && ge(t.parentNode) || t) === t && h.scope || ((a = t.getAttribute("id")) ? a = a.replace(de, H) : t.setAttribute("id", a = S)),
                        r = (l = f(e)).length; r--; )
                            l[r] = (a ? "#" + a : ":scope") + " " + j(l[r]);
                        c = l.join(",")
                    }
                    try {
                        return $.apply(n, u.querySelectorAll(c)),
                        n
                    } catch (t) {
                        g(e, !0)
                    } finally {
                        a === S && t.removeAttribute("id")
                    }
                }
            }
            return q(e.replace(v, "$1"), t, n, i)
        }
        function I() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > b.cacheLength && delete e[i.shift()],
                e[t + " "] = n
            }
        }
        function N(e) {
            return e[S] = !0,
            e
        }
        function L(e) {
            var t = x.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t)
            }
        }
        function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                b.attrHandle[n[i]] = t
        }
        function pe(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function me(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && he(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function O(a) {
            return N(function(r) {
                return r = +r,
                N(function(e, t) {
                    for (var n, i = a([], e.length, r), o = i.length; o--; )
                        e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in h = D.support = {},
        R = D.isXML = function(e) {
            var t = e && e.namespaceURI
              , e = e && (e.ownerDocument || e).documentElement;
            return !ae.test(t || e && e.nodeName || "HTML")
        }
        ,
        C = D.setDocument = function(e) {
            var e = e ? e.ownerDocument || e : u;
            return e != x && 9 === e.nodeType && e.documentElement && (n = (x = e).documentElement,
            E = !R(x),
            u != x && (e = x.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", M, !1) : e.attachEvent && e.attachEvent("onunload", M)),
            h.scope = L(function(e) {
                return n.appendChild(e).appendChild(x.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            h.attributes = L(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            h.getElementsByTagName = L(function(e) {
                return e.appendChild(x.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            h.getElementsByClassName = k.test(x.getElementsByClassName),
            h.getById = L(function(e) {
                return n.appendChild(e).id = S,
                !x.getElementsByName || !x.getElementsByName(S).length
            }),
            h.getById ? (b.filter.ID = function(e) {
                var t = e.replace(A, d);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && E)
                    return (t = t.getElementById(e)) ? [t] : []
            }
            ) : (b.filter.ID = function(e) {
                var t = e.replace(A, d);
                return function(e) {
                    e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return e && e.value === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && E) {
                    var n, i, o, r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r];
                        for (o = t.getElementsByName(e),
                        i = 0; r = o[i++]; )
                            if ((n = r.getAttributeNode("id")) && n.value === e)
                                return [r]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = h.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" !== e)
                    return r;
                for (; n = r[o++]; )
                    1 === n.nodeType && i.push(n);
                return i
            }
            ,
            b.find.CLASS = h.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            i = [],
            p = [],
            (h.qsa = k.test(x.querySelectorAll)) && (L(function(e) {
                var t;
                n.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && p.push("[*^$]=" + a + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || p.push("\\[" + a + "*(?:value|" + Y + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || p.push("~="),
                (t = x.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || p.push("\\[" + a + "*name" + a + "*=" + a + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || p.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || p.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                p.push("[\\r\\n\\f]")
            }),
            L(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = x.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && p.push("name" + a + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && p.push(":enabled", ":disabled"),
                n.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                p.push(",.*:")
            })),
            (h.matchesSelector = k.test(o = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector)) && L(function(e) {
                h.disconnectedMatch = o.call(e, "*"),
                o.call(e, "[s!='']:x"),
                i.push("!=", Z)
            }),
            p = p.length && new RegExp(p.join("|")),
            i = i.length && new RegExp(i.join("|")),
            e = k.test(n.compareDocumentPosition),
            m = e || k.test(n.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , t = t && t.parentNode;
                return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            V = e ? function(e, t) {
                var n;
                return e === t ? (c = !0,
                0) : !e.compareDocumentPosition - !t.compareDocumentPosition || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e == x || e.ownerDocument == u && m(u, e) ? -1 : t == x || t.ownerDocument == u && m(u, t) ? 1 : l ? y(l, e) - y(l, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return c = !0,
                    0;
                var n, i = 0, o = e.parentNode, r = t.parentNode, a = [e], s = [t];
                if (!o || !r)
                    return e == x ? -1 : t == x ? 1 : o ? -1 : r ? 1 : l ? y(l, e) - y(l, t) : 0;
                if (o === r)
                    return pe(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[i] === s[i]; )
                    i++;
                return i ? pe(a[i], s[i]) : a[i] == u ? -1 : s[i] == u ? 1 : 0
            }
            ),
            x
        }
        ,
        D.matches = function(e, t) {
            return D(e, null, null, t)
        }
        ,
        D.matchesSelector = function(e, t) {
            if (C(e),
            h.matchesSelector && E && !g[t + " "] && (!i || !i.test(t)) && (!p || !p.test(t)))
                try {
                    var n = o.call(e, t);
                    if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    g(t, !0)
                }
            return 0 < D(t, x, null, [e]).length
        }
        ,
        D.contains = function(e, t) {
            return (e.ownerDocument || e) != x && C(e),
            m(e, t)
        }
        ,
        D.attr = function(e, t) {
            (e.ownerDocument || e) != x && C(e);
            var n = b.attrHandle[t.toLowerCase()]
              , n = n && Q.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== n ? n : h.attributes || !E ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }
        ,
        D.escape = function(e) {
            return (e + "").replace(de, H)
        }
        ,
        D.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        D.uniqueSort = function(e) {
            var t, n = [], i = 0, o = 0;
            if (c = !h.detectDuplicates,
            l = !h.sortStable && e.slice(0),
            e.sort(V),
            c) {
                for (; t = e[o++]; )
                    t === e[o] && (i = n.push(o));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return l = null,
            e
        }
        ,
        r = D.getText = function(e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += r(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += r(t);
            return n
        }
        ,
        (b = D.selectors = {
            cacheLength: 50,
            createPseudo: N,
            match: _,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(A, d),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(A, d),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || D.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && D.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return _.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && oe.test(n) && (t = (t = f(n, !0)) && n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(A, d).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + a + ")" + e + "(" + a + "|$)")) && B(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(e) {
                        e = D.attr(e, t);
                        return null == e ? "!=" === n : !n || (e += "",
                        "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(ee, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(p, e, t, m, g) {
                    var v = "nth" !== p.slice(0, 3)
                      , y = "last" !== p.slice(-4)
                      , _ = "of-type" === e;
                    return 1 === m && 0 === g ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var i, o, r, a, s, l, c = v != y ? "nextSibling" : "previousSibling", u = e.parentNode, d = _ && e.nodeName.toLowerCase(), h = !n && !_, f = !1;
                        if (u) {
                            if (v) {
                                for (; c; ) {
                                    for (a = e; a = a[c]; )
                                        if (_ ? a.nodeName.toLowerCase() === d : 1 === a.nodeType)
                                            return !1;
                                    l = c = "only" === p && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? u.firstChild : u.lastChild],
                            y && h) {
                                for (f = (s = (i = (o = (r = (a = u)[S] || (a[S] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[p] || [])[0] === T && i[1]) && i[2],
                                a = s && u.childNodes[s]; a = ++s && a && a[c] || (f = s = 0,
                                l.pop()); )
                                    if (1 === a.nodeType && ++f && a === e) {
                                        o[p] = [T, s, f];
                                        break
                                    }
                            } else if (!1 === (f = h ? s = (i = (o = (r = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[p] || [])[0] === T && i[1] : f))
                                for (; (a = ++s && a && a[c] || (f = s = 0,
                                l.pop())) && ((_ ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++f || (h && ((o = (r = a[S] || (a[S] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[p] = [T, f]),
                                a !== e)); )
                                    ;
                            return (f -= g) === m || f % m == 0 && 0 <= f / m
                        }
                    }
                },
                PSEUDO: function(e, r) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || D.error("unsupported pseudo: " + e);
                    return a[S] ? a(r) : 1 < a.length ? (t = [e, e, "", r],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function(e, t) {
                        for (var n, i = a(e, r), o = i.length; o--; )
                            e[n = y(e, i[o])] = !(t[n] = i[o])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: N(function(e) {
                    var i = []
                      , o = []
                      , s = W(e.replace(v, "$1"));
                    return s[S] ? N(function(e, t, n, i) {
                        for (var o, r = s(e, null, i, []), a = e.length; a--; )
                            (o = r[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, t, n) {
                        return i[0] = e,
                        s(i, null, n, o),
                        i[0] = null,
                        !o.pop()
                    }
                }),
                has: N(function(t) {
                    return function(e) {
                        return 0 < D(t, e).length
                    }
                }),
                contains: N(function(t) {
                    return t = t.replace(A, d),
                    function(e) {
                        return -1 < (e.textContent || r(e)).indexOf(t)
                    }
                }),
                lang: N(function(n) {
                    return re.test(n || "") || D.error("unsupported lang: " + n),
                    n = n.replace(A, d).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = P.location && P.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === n
                },
                focus: function(e) {
                    return e === x.activeElement && (!x.hasFocus || x.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return le.test(e.nodeName)
                },
                input: function(e) {
                    return se.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: O(function() {
                    return [0]
                }),
                last: O(function(e, t) {
                    return [t - 1]
                }),
                eq: O(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: O(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: O(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: O(function(e, t, n) {
                    for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; )
                        e.push(i);
                    return e
                }),
                gt: O(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = function(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }(e);
        function ve() {}
        function j(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function ye(a, e, t) {
            var s = e.dir
              , l = e.next
              , c = l || s
              , u = t && "parentNode" === c
              , d = F++;
            return e.first ? function(e, t, n) {
                for (; e = e[s]; )
                    if (1 === e.nodeType || u)
                        return a(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var i, o, r = [T, d];
                if (n) {
                    for (; e = e[s]; )
                        if ((1 === e.nodeType || u) && a(e, t, n))
                            return !0
                } else
                    for (; e = e[s]; )
                        if (1 === e.nodeType || u)
                            if (o = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[s] || e;
                            else {
                                if ((i = o[c]) && i[0] === T && i[1] === d)
                                    return r[2] = i[2];
                                if ((o[c] = r)[2] = a(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function _e(o) {
            return 1 < o.length ? function(e, t, n) {
                for (var i = o.length; i--; )
                    if (!o[i](e, t, n))
                        return !1;
                return !0
            }
            : o[0]
        }
        function be(e, t, n, i, o) {
            for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
                !(r = e[s]) || n && !n(r, i, o) || (a.push(r),
                c && t.push(s));
            return a
        }
        function we(e) {
            for (var i, t, n, o = e.length, r = b.relative[e[0].type], a = r || b.relative[" "], s = r ? 1 : 0, l = ye(function(e) {
                return e === i
            }, a, !0), c = ye(function(e) {
                return -1 < y(i, e)
            }, a, !0), u = [function(e, t, n) {
                e = !r && (n || t !== w) || ((i = t).nodeType ? l : c)(e, t, n);
                return i = null,
                e
            }
            ]; s < o; s++)
                if (t = b.relative[e[s].type])
                    u = [ye(_e(u), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < o && !b.relative[e[n].type]; n++)
                            ;
                        return function e(f, p, m, g, v, t) {
                            return g && !g[S] && (g = e(g)),
                            v && !v[S] && (v = e(v, t)),
                            N(function(e, t, n, i) {
                                var o, r, a, s = [], l = [], c = t.length, u = e || function(e, t, n) {
                                    for (var i = 0, o = t.length; i < o; i++)
                                        D(e, t[i], n);
                                    return n
                                }(p || "*", n.nodeType ? [n] : n, []), d = !f || !e && p ? u : be(u, s, f, n, i), h = m ? v || (e ? f : c || g) ? [] : t : d;
                                if (m && m(d, h, n, i),
                                g)
                                    for (o = be(h, l),
                                    g(o, [], n, i),
                                    r = o.length; r--; )
                                        (a = o[r]) && (h[l[r]] = !(d[l[r]] = a));
                                if (e) {
                                    if (v || f) {
                                        if (v) {
                                            for (o = [],
                                            r = h.length; r--; )
                                                (a = h[r]) && o.push(d[r] = a);
                                            v(null, h = [], o, i)
                                        }
                                        for (r = h.length; r--; )
                                            (a = h[r]) && -1 < (o = v ? y(e, a) : s[r]) && (e[o] = !(t[o] = a))
                                    }
                                } else
                                    h = be(h === t ? h.splice(c, h.length) : h),
                                    v ? v(null, t, h, i) : $.apply(t, h)
                            })
                        }(1 < s && _e(u), 1 < s && j(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(v, "$1"), t, s < n && we(e.slice(s, n)), n < o && we(e = e.slice(n)), n < o && j(e))
                    }
                    u.push(t)
                }
            return _e(u)
        }
        return ve.prototype = b.filters = b.pseudos,
        b.setFilters = new ve,
        f = D.tokenize = function(e, t) {
            var n, i, o, r, a, s, l, c = U[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (a = e,
            s = [],
            l = b.preFilter; a; ) {
                for (r in n && !(i = te.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                s.push(o = [])),
                n = !1,
                (i = ne.exec(a)) && (n = i.shift(),
                o.push({
                    value: n,
                    type: i[0].replace(v, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(i = _[r].exec(a)) || l[r] && !(i = l[r](i)) || (n = i.shift(),
                    o.push({
                        value: n,
                        type: r,
                        matches: i
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? D.error(e) : U(e, s).slice(0)
        }
        ,
        W = D.compile = function(e, t) {
            var n, g, v, y, _, i, o = [], r = [], a = z[e + " "];
            if (!a) {
                for (n = (t = t || f(e)).length; n--; )
                    ((a = we(t[n]))[S] ? o : r).push(a);
                (a = z(e, (y = 0 < (v = o).length,
                _ = 0 < (g = r).length,
                i = function(e, t, n, i, o) {
                    var r, a, s, l = 0, c = "0", u = e && [], d = [], h = w, f = e || _ && b.find.TAG("*", o), p = T += null == h ? 1 : Math.random() || .1, m = f.length;
                    for (o && (w = t == x || t || o); c !== m && null != (r = f[c]); c++) {
                        if (_ && r) {
                            for (a = 0,
                            t || r.ownerDocument == x || (C(r),
                            n = !E); s = g[a++]; )
                                if (s(r, t || x, n)) {
                                    i.push(r);
                                    break
                                }
                            o && (T = p)
                        }
                        y && ((r = !s && r) && l--,
                        e) && u.push(r)
                    }
                    if (l += c,
                    y && c !== l) {
                        for (a = 0; s = v[a++]; )
                            s(u, d, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--; )
                                    u[c] || d[c] || (d[c] = G.call(i));
                            d = be(d)
                        }
                        $.apply(i, d),
                        o && !e && 0 < d.length && 1 < l + v.length && D.uniqueSort(i)
                    }
                    return o && (T = p,
                    w = h),
                    u
                }
                ,
                y ? N(i) : i))).selector = e
            }
            return a
        }
        ,
        q = D.select = function(e, t, n, i) {
            var o, r, a, s, l, c = "function" == typeof e && e, u = !i && f(e = c.selector || e);
            if (n = n || [],
            1 === u.length) {
                if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (a = r[0]).type && 9 === t.nodeType && E && b.relative[r[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(A, d), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(r.shift().value.length)
                }
                for (o = _.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o],
                !b.relative[s = a.type]); )
                    if ((l = b.find[s]) && (i = l(a.matches[0].replace(A, d), ue.test(r[0].type) && ge(t.parentNode) || t))) {
                        if (r.splice(o, 1),
                        e = i.length && j(r))
                            break;
                        return $.apply(n, i),
                        n
                    }
            }
            return (c || W(e, u))(i, t, !E, n, !t || ue.test(e) && ge(t.parentNode) || t),
            n
        }
        ,
        h.sortStable = S.split("").sort(V).join("") === S,
        h.detectDuplicates = !!c,
        C(),
        h.sortDetached = L(function(e) {
            return 1 & e.compareDocumentPosition(x.createElement("fieldset"))
        }),
        L(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        h.attributes && L(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        L(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(Y, function(e, t, n) {
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }),
        D
    }(C)
      , X = (E.find = e,
    E.expr = e.selectors,
    E.expr[":"] = E.expr.pseudos,
    E.uniqueSort = E.unique = e.uniqueSort,
    E.text = e.getText,
    E.isXMLDoc = e.isXML,
    E.contains = e.contains,
    E.escapeSelector = e.escape,
    E.expr.match.needsContext);
    function l(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var Y = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function J(e, n, i) {
        return y(n) ? E.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? E.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? E.grep(e, function(e) {
            return -1 < W.call(n, e) !== i
        }) : E.filter(n, e, i)
    }
    E.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? E.find.matchesSelector(i, e) ? [i] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    E.fn.extend({
        find: function(e) {
            var t, n, i = this.length, o = this;
            if ("string" != typeof e)
                return this.pushStack(E(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (E.contains(o[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                E.find(e, o[t], n);
            return 1 < i ? E.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(J(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(J(this, e || [], !0))
        },
        is: function(e) {
            return !!J(this, "string" == typeof e && X.test(e) ? E(e) : e || [], !1).length
        }
    });
    var Z, ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, te = ((E.fn.init = function(e, t, n) {
        if (e) {
            if (n = n || Z,
            "string" != typeof e)
                return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : ee.exec(e)) || !i[1] && t)
                return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
            if (i[1]) {
                if (t = t instanceof E ? t[0] : t,
                E.merge(this, E.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : x, !0)),
                Y.test(i[1]) && E.isPlainObject(t))
                    for (var i in t)
                        y(this[i]) ? this[i](t[i]) : this.attr(i, t[i])
            } else
                (n = x.getElementById(i[2])) && (this[0] = n,
                this.length = 1)
        }
        return this
    }
    ).prototype = E.fn,
    Z = E(x),
    /^(?:parents|prev(?:Until|All))/), ne = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function ie(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0, o = this.length, r = [], a = "string" != typeof e && E(e);
            if (!X.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(1 < r.length ? E.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? W.call(E(e), this[0]) : W.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    E.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return i(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return i(e, "parentNode", n)
        },
        next: function(e) {
            return ie(e, "nextSibling")
        },
        prev: function(e) {
            return ie(e, "previousSibling")
        },
        nextAll: function(e) {
            return i(e, "nextSibling")
        },
        prevAll: function(e) {
            return i(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return i(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return i(e, "previousSibling", n)
        },
        siblings: function(e) {
            return K((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return K(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && H(e.contentDocument) ? e.contentDocument : (l(e, "template") && (e = e.content || e),
            E.merge([], e.childNodes))
        }
    }, function(i, o) {
        E.fn[i] = function(e, t) {
            var n = E.map(this, o, e);
            return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = E.filter(t, n)),
            1 < this.length && (ne[i] || E.uniqueSort(n),
            te.test(i)) && n.reverse(),
            this.pushStack(n)
        }
    });
    var S = /[^\x20\t\r\n\f]+/g;
    function u(e) {
        return e
    }
    function oe(e) {
        throw e
    }
    function re(e, t, n, i) {
        var o;
        try {
            e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    E.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i,
        n = {},
        E.each(e.match(S) || [], function(e, t) {
            n[t] = !0
        }),
        n) : E.extend({}, i);
        function o() {
            for (s = s || i.once,
            a = r = !0; c.length; u = -1)
                for (t = c.shift(); ++u < l.length; )
                    !1 === l[u].apply(t[0], t[1]) && i.stopOnFalse && (u = l.length,
                    t = !1);
            i.memory || (t = !1),
            r = !1,
            s && (l = t ? [] : "")
        }
        var r, t, a, s, l = [], c = [], u = -1, d = {
            add: function() {
                return l && (t && !r && (u = l.length - 1,
                c.push(t)),
                function n(e) {
                    E.each(e, function(e, t) {
                        y(t) ? i.unique && d.has(t) || l.push(t) : t && t.length && "string" !== p(t) && n(t)
                    })
                }(arguments),
                t) && !r && o(),
                this
            },
            remove: function() {
                return E.each(arguments, function(e, t) {
                    for (var n; -1 < (n = E.inArray(t, l, n)); )
                        l.splice(n, 1),
                        n <= u && u--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < E.inArray(e, l) : 0 < l.length
            },
            empty: function() {
                return l = l && [],
                this
            },
            disable: function() {
                return s = c = [],
                l = t = "",
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return s = c = [],
                t || r || (l = t = ""),
                this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t],
                c.push(t),
                r) || o(),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!a
            }
        };
        return d
    }
    ,
    E.extend({
        Deferred: function(e) {
            var r = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]]
              , o = "pending"
              , a = {
                state: function() {
                    return o
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var o = arguments;
                    return E.Deferred(function(i) {
                        E.each(r, function(e, t) {
                            var n = y(o[t[4]]) && o[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        o = null
                    }).promise()
                },
                then: function(t, n, i) {
                    var l = 0;
                    function c(o, r, a, s) {
                        return function() {
                            function e() {
                                var e, t;
                                if (!(o < l)) {
                                    if ((e = a.apply(n, i)) === r.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    y(t) ? s ? t.call(e, c(l, r, u, s), c(l, r, oe, s)) : (l++,
                                    t.call(e, c(l, r, u, s), c(l, r, oe, s), c(l, r, u, r.notifyWith))) : (a !== u && (n = void 0,
                                    i = [e]),
                                    (s || r.resolveWith)(n, i))
                                }
                            }
                            var n = this
                              , i = arguments
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace),
                                    l <= o + 1 && (a !== oe && (n = void 0,
                                    i = [e]),
                                    r.rejectWith(n, i))
                                }
                            }
                            ;
                            o ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return E.Deferred(function(e) {
                        r[0][3].add(c(0, e, y(i) ? i : u, e.notifyWith)),
                        r[1][3].add(c(0, e, y(t) ? t : u)),
                        r[2][3].add(c(0, e, y(n) ? n : oe))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? E.extend(e, a) : a
                }
            }
              , s = {};
            return E.each(r, function(e, t) {
                var n = t[2]
                  , i = t[5];
                a[t[1]] = n.add,
                i && n.add(function() {
                    o = i
                }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    o[t] = this,
                    r[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || a.resolveWith(o, r)
                }
            }
            var n = arguments.length
              , i = n
              , o = Array(i)
              , r = s.call(arguments)
              , a = E.Deferred();
            if (n <= 1 && (re(e, a.done(t(i)).resolve, a.reject, !n),
            "pending" === a.state() || y(r[i] && r[i].then)))
                return a.then();
            for (; i--; )
                re(r[i], t(i), a.reject);
            return a.promise()
        }
    });
    var ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
      , se = (E.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && ae.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    E.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ,
    E.Deferred());
    function le() {
        x.removeEventListener("DOMContentLoaded", le),
        C.removeEventListener("load", le),
        E.ready()
    }
    E.fn.ready = function(e) {
        return se.then(e).catch(function(e) {
            E.readyException(e)
        }),
        this
    }
    ,
    E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || se.resolveWith(x, [E])
        }
    }),
    E.ready.then = se.then,
    "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? C.setTimeout(E.ready) : (x.addEventListener("DOMContentLoaded", le),
    C.addEventListener("load", le));
    function d(e, t, n, i, o, r, a) {
        var s = 0
          , l = e.length
          , c = null == n;
        if ("object" === p(n))
            for (s in o = !0,
            n)
                d(e, t, s, n[s], !0, r, a);
        else if (void 0 !== i && (o = !0,
        y(i) || (a = !0),
        t = c ? a ? (t.call(e, i),
        null) : (c = t,
        function(e, t, n) {
            return c.call(E(e), n)
        }
        ) : t))
            for (; s < l; s++)
                t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    }
    var ce = /^-ms-/
      , ue = /-([a-z])/g;
    function de(e, t) {
        return t.toUpperCase()
    }
    function _(e) {
        return e.replace(ce, "ms-").replace(ue, de)
    }
    function v(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    function he() {
        this.expando = E.expando + he.uid++
    }
    he.uid = 1,
    he.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            v(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t)
                o[_(t)] = n;
            else
                for (i in t)
                    o[_(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][_(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(_) : (t = _(t))in i ? [t] : t.match(S) || []).length;
                    for (; n--; )
                        delete i[t[n]]
                }
                void 0 !== t && !E.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !E.isEmptyObject(e)
        }
    };
    var b = new he
      , c = new he
      , fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , pe = /[A-Z]/g;
    function me(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(pe, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : fe.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                c.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    E.extend({
        hasData: function(e) {
            return c.hasData(e) || b.hasData(e)
        },
        data: function(e, t, n) {
            return c.access(e, t, n)
        },
        removeData: function(e, t) {
            c.remove(e, t)
        },
        _data: function(e, t, n) {
            return b.access(e, t, n)
        },
        _removeData: function(e, t) {
            b.remove(e, t)
        }
    }),
    E.fn.extend({
        data: function(n, e) {
            var t, i, o, r = this[0], a = r && r.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    c.set(this, n)
                }) : d(this, function(e) {
                    var t;
                    if (r && void 0 === e)
                        return void 0 !== (t = c.get(r, n)) || void 0 !== (t = me(r, n)) ? t : void 0;
                    this.each(function() {
                        c.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = c.get(r),
            1 === r.nodeType) && !b.get(r, "hasDataAttrs")) {
                for (t = a.length; t--; )
                    a[t] && 0 === (i = a[t].name).indexOf("data-") && (i = _(i.slice(5)),
                    me(r, i, o[i]));
                b.set(r, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                c.remove(this, e)
            })
        }
    }),
    E.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return i = b.get(e, t = (t || "fx") + "queue"),
                n && (!i || Array.isArray(n) ? i = b.access(e, t, E.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t)
              , i = n.length
              , o = n.shift()
              , r = E._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(),
            i--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(e, function() {
                E.dequeue(e, t)
            }, r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return b.get(e, n) || b.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    b.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --o || r.resolveWith(a, [a])
            }
            var i, o = 1, r = E.Deferred(), a = this, s = this.length;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (i = b.get(a[s], e + "queueHooks")) && i.empty && (o++,
                i.empty.add(n));
            return n(),
            r.promise(t)
        }
    });
    function ge(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && T(e) && "none" === E.css(e, "display")
    }
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ve = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$","i")
      , h = ["Top", "Right", "Bottom", "Left"]
      , w = x.documentElement
      , T = function(e) {
        return E.contains(e.ownerDocument, e)
    }
      , ye = {
        composed: !0
    };
    w.getRootNode && (T = function(e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(ye) === e.ownerDocument
    }
    );
    function _e(e, t, n, i) {
        var o, r, a = 20, s = i ? function() {
            return i.cur()
        }
        : function() {
            return E.css(e, t, "")
        }
        , l = s(), c = n && n[3] || (E.cssNumber[t] ? "" : "px"), u = e.nodeType && (E.cssNumber[t] || "px" !== c && +l) && ve.exec(E.css(e, t));
        if (u && u[3] !== c) {
            for (c = c || u[3],
            u = +(l /= 2) || 1; a--; )
                E.style(e, t, u + c),
                (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0),
                u /= r;
            E.style(e, t, (u *= 2) + c),
            n = n || []
        }
        return n && (u = +u || +l || 0,
        o = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
        i) && (i.unit = c,
        i.start = u,
        i.end = o),
        o
    }
    var be = {};
    function $(e, t) {
        for (var n, i, o, r, a, s, l = [], c = 0, u = e.length; c < u; c++)
            (i = e[c]).style && (n = i.style.display,
            t ? ("none" === n && (l[c] = b.get(i, "display") || null,
            l[c] || (i.style.display = "")),
            "" === i.style.display && ge(i) && (l[c] = (s = r = o = void 0,
            r = i.ownerDocument,
            a = i.nodeName,
            (s = be[a]) || (o = r.body.appendChild(r.createElement(a)),
            s = E.css(o, "display"),
            o.parentNode.removeChild(o),
            be[a] = s = "none" === s ? "block" : s)))) : "none" !== n && (l[c] = "none",
            b.set(i, "display", n)));
        for (c = 0; c < u; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    E.fn.extend({
        show: function() {
            return $(this, !0)
        },
        hide: function() {
            return $(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ge(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var we = /^(?:checkbox|radio)$/i
      , Ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , xe = /^$|^module$|\/(?:java|ecma)script/i
      , n = x.createDocumentFragment().appendChild(x.createElement("div"))
      , k = ((N = x.createElement("input")).setAttribute("type", "radio"),
    N.setAttribute("checked", "checked"),
    N.setAttribute("name", "t"),
    n.appendChild(N),
    g.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked,
    n.innerHTML = "<textarea>x</textarea>",
    g.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue,
    n.innerHTML = "<option></option>",
    g.option = !!n.lastChild,
    {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    });
    function A(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && l(e, t) ? E.merge([e], n) : n
    }
    function Ee(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            b.set(e[n], "globalEval", !t || b.get(t[n], "globalEval"))
    }
    k.tbody = k.tfoot = k.colgroup = k.caption = k.thead,
    k.th = k.td,
    g.option || (k.optgroup = k.option = [1, "<select multiple='multiple'>", "</select>"]);
    var Se = /<|&#?\w+;/;
    function Te(e, t, n, i, o) {
        for (var r, a, s, l, c, u = t.createDocumentFragment(), d = [], h = 0, f = e.length; h < f; h++)
            if ((r = e[h]) || 0 === r)
                if ("object" === p(r))
                    E.merge(d, r.nodeType ? [r] : r);
                else if (Se.test(r)) {
                    for (a = a || u.appendChild(t.createElement("div")),
                    s = (Ce.exec(r) || ["", ""])[1].toLowerCase(),
                    s = k[s] || k._default,
                    a.innerHTML = s[1] + E.htmlPrefilter(r) + s[2],
                    c = s[0]; c--; )
                        a = a.lastChild;
                    E.merge(d, a.childNodes),
                    (a = u.firstChild).textContent = ""
                } else
                    d.push(t.createTextNode(r));
        for (u.textContent = "",
        h = 0; r = d[h++]; )
            if (i && -1 < E.inArray(r, i))
                o && o.push(r);
            else if (l = T(r),
            a = A(u.appendChild(r), "script"),
            l && Ee(a),
            n)
                for (c = 0; r = a[c++]; )
                    xe.test(r.type || "") && n.push(r);
        return u
    }
    var $e = /^([^.]*)(?:\.(.+)|)/;
    function a() {
        return !0
    }
    function f() {
        return !1
    }
    function ke(e, t) {
        return e === function() {
            try {
                return x.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ae(e, t, n, i, o, r) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                Ae(e, s, n, i, t[s], r);
            return e
        }
        if (null == i && null == o ? (o = n,
        i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
        i = void 0) : (o = i,
        i = n,
        n = void 0)),
        !1 === o)
            o = f;
        else if (!o)
            return e;
        return 1 === r && (a = o,
        (o = function(e) {
            return E().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = E.guid++)),
        e.each(function() {
            E.event.add(this, t, o, i, n)
        })
    }
    function De(e, o, r) {
        r ? (b.set(e, o, !1),
        E.event.add(e, o, {
            namespace: !1,
            handler: function(e) {
                var t, n, i = b.get(this, o);
                if (1 & e.isTrigger && this[o]) {
                    if (i.length)
                        (E.event.special[o] || {}).delegateType && e.stopPropagation();
                    else if (i = s.call(arguments),
                    b.set(this, o, i),
                    t = r(this, o),
                    this[o](),
                    i !== (n = b.get(this, o)) || t ? b.set(this, o, !1) : n = {},
                    i !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n && n.value
                } else
                    i.length && (b.set(this, o, {
                        value: E.event.trigger(E.extend(i[0], E.Event.prototype), i.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === b.get(e, o) && E.event.add(e, o, a)
    }
    E.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, a, s, l, c, u, d, h, f, p = b.get(t);
            if (v(t))
                for (n.handler && (n = (r = n).handler,
                o = r.selector),
                o && E.find.matchesSelector(w, o),
                n.guid || (n.guid = E.guid++),
                s = (s = p.events) || (p.events = Object.create(null)),
                a = (a = p.handle) || (p.handle = function(e) {
                    return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(S) || [""]).length; l--; )
                    d = f = (h = $e.exec(e[l]) || [])[1],
                    h = (h[2] || "").split(".").sort(),
                    d && (c = E.event.special[d] || {},
                    d = (o ? c.delegateType : c.bindType) || d,
                    c = E.event.special[d] || {},
                    f = E.extend({
                        type: d,
                        origType: f,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && E.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, r),
                    (u = s[d]) || ((u = s[d] = []).delegateCount = 0,
                    c.setup && !1 !== c.setup.call(t, i, h, a)) || t.addEventListener && t.addEventListener(d, a),
                    c.add && (c.add.call(t, f),
                    f.handler.guid || (f.handler.guid = n.guid)),
                    o ? u.splice(u.delegateCount++, 0, f) : u.push(f),
                    E.event.global[d] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, a, s, l, c, u, d, h, f, p, m, g = b.hasData(e) && b.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(S) || [""]).length; c--; )
                    if (f = m = (s = $e.exec(t[c]) || [])[1],
                    p = (s[2] || "").split(".").sort(),
                    f) {
                        for (d = E.event.special[f] || {},
                        h = l[f = (i ? d.delegateType : d.bindType) || f] || [],
                        s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = r = h.length; r--; )
                            u = h[r],
                            !o && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1),
                            u.selector && h.delegateCount--,
                            d.remove && d.remove.call(e, u));
                        a && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || E.removeEvent(e, f, g.handle),
                        delete l[f])
                    } else
                        for (f in l)
                            E.event.remove(e, f + t[c], n, i, !0);
                E.isEmptyObject(l) && b.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, a = new Array(arguments.length), s = E.event.fix(e), e = (b.get(this, "events") || Object.create(null))[s.type] || [], l = E.event.special[s.type] || {};
            for (a[0] = s,
            t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
            if (s.delegateTarget = this,
            !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
                for (r = E.event.handlers.call(this, s, e),
                t = 0; (i = r[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                        s.data = o.data,
                        void 0 !== (o = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (s.result = o) && (s.preventDefault(),
                        s.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, a, s = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [],
                        a = {},
                        n = 0; n < l; n++)
                            void 0 === a[o = (i = t[n]).selector + " "] && (a[o] = i.needsContext ? -1 < E(o, this).index(c) : E.find(o, this, null, [c]).length),
                            a[o] && r.push(i);
                        r.length && s.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this,
            l < t.length && s.push({
                elem: c,
                handlers: t.slice(l)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[E.expando] ? e : new E.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    e = this || e;
                    return we.test(e.type) && e.click && l(e, "input") && De(e, "click", a),
                    !1
                },
                trigger: function(e) {
                    e = this || e;
                    return we.test(e.type) && e.click && l(e, "input") && De(e, "click"),
                    !0
                },
                _default: function(e) {
                    e = e.target;
                    return we.test(e.type) && e.click && l(e, "input") && b.get(e, "click") || l(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    E.Event = function(e, t) {
        if (!(this instanceof E.Event))
            return new E.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? a : f,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && E.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[E.expando] = !0
    }
    ,
    E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = a,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = a,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = a,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, E.event.addProp),
    E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        E.event.special[e] = {
            setup: function() {
                return De(this, e, ke),
                !1
            },
            trigger: function() {
                return De(this, e),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }),
    E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        E.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = e.relatedTarget, i = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = i.origType,
                t = i.handler.apply(this, arguments),
                e.type = o),
                t
            }
        }
    }),
    E.fn.extend({
        on: function(e, t, n, i) {
            return Ae(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Ae(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
                i = e.handleObj,
                E(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
            else {
                if ("object" != typeof e)
                    return !1 !== t && "function" != typeof t || (n = t,
                    t = void 0),
                    !1 === n && (n = f),
                    this.each(function() {
                        E.event.remove(this, e, n, t)
                    });
                for (o in e)
                    this.off(o, t, e[o])
            }
            return this
        }
    });
    var Ie = /<script|<style|<link/i
      , Ne = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Oe(e, t) {
        return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }
    function je(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Pe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function He(e, t) {
        var n, i, o, r;
        if (1 === t.nodeType) {
            if (b.hasData(e) && (r = b.get(e).events))
                for (o in b.remove(t, "handle events"),
                r)
                    for (n = 0,
                    i = r[o].length; n < i; n++)
                        E.event.add(t, o, r[o][n]);
            c.hasData(e) && (e = c.access(e),
            e = E.extend({}, e),
            c.set(t, e))
        }
    }
    function D(n, i, o, r) {
        i = M(i);
        var e, t, a, s, l, c, u = 0, d = n.length, h = d - 1, f = i[0], p = y(f);
        if (p || 1 < d && "string" == typeof f && !g.checkClone && Ne.test(f))
            return n.each(function(e) {
                var t = n.eq(e);
                p && (i[0] = f.call(this, e, t.html())),
                D(t, i, o, r)
            });
        if (d && (t = (e = Te(i, n[0].ownerDocument, !1, n, r)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || r)) {
            for (s = (a = E.map(A(e, "script"), je)).length; u < d; u++)
                l = e,
                u !== h && (l = E.clone(l, !0, !0),
                s) && E.merge(a, A(l, "script")),
                o.call(n[u], l, u);
            if (s)
                for (c = a[a.length - 1].ownerDocument,
                E.map(a, Pe),
                u = 0; u < s; u++)
                    l = a[u],
                    xe.test(l.type || "") && !b.access(l, "globalEval") && E.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && !l.noModule && E._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, c) : Q(l.textContent.replace(Le, ""), l, c))
        }
        return n
    }
    function Me(e, t, n) {
        for (var i, o = t ? E.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || E.cleanData(A(i)),
            i.parentNode && (n && T(i) && Ee(A(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var i, o, r, a, s, l, c, u = e.cloneNode(!0), d = T(e);
            if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (a = A(u),
                i = 0,
                o = (r = A(e)).length; i < o; i++)
                    s = r[i],
                    "input" === (c = (l = a[i]).nodeName.toLowerCase()) && we.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (r = r || A(e),
                    a = a || A(u),
                    i = 0,
                    o = r.length; i < o; i++)
                        He(r[i], a[i]);
                else
                    He(e, u);
            return 0 < (a = A(u, "script")).length && Ee(a, !d && A(e, "script")),
            u
        },
        cleanData: function(e) {
            for (var t, n, i, o = E.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (v(n)) {
                    if (t = n[b.expando]) {
                        if (t.events)
                            for (i in t.events)
                                o[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
                        n[b.expando] = void 0
                    }
                    n[c.expando] && (n[c.expando] = void 0)
                }
        }
    }),
    E.fn.extend({
        detach: function(e) {
            return Me(this, e, !0)
        },
        remove: function(e) {
            return Me(this, e)
        },
        text: function(e) {
            return d(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return D(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return D(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Oe(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return D(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return D(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (E.cleanData(A(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return d(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ie.test(e) && !k[(Ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (E.cleanData(A(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return D(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(A(this)),
                t) && t.replaceChild(e, this)
            }, n)
        }
    }),
    E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        E.fn[e] = function(e) {
            for (var t, n = [], i = E(e), o = i.length - 1, r = 0; r <= o; r++)
                t = r === o ? this : this.clone(!0),
                E(i[r])[a](t),
                R.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    function Re(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : C).getComputedStyle(e)
    }
    function We(e, t, n) {
        var i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in n = n.call(e),
        t)
            e.style[i] = o[i];
        return n
    }
    var qe, Fe, Be, Ue, ze, Ve, Qe, o, Ge = new RegExp("^(" + e + ")(?!px)[a-z%]+$","i"), Ke = new RegExp(h.join("|"),"i");
    function Xe(e, t, n) {
        var i, o, r = e.style;
        return (n = n || Re(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || T(e) || (o = E.style(e, t)),
        !g.pixelBoxStyles()) && Ge.test(o) && Ke.test(t) && (e = r.width,
        t = r.minWidth,
        i = r.maxWidth,
        r.minWidth = r.maxWidth = r.width = o,
        o = n.width,
        r.width = e,
        r.minWidth = t,
        r.maxWidth = i),
        void 0 !== o ? o + "" : o
    }
    function Ye(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function Je() {
        var e;
        o && (Qe.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
        o.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
        w.appendChild(Qe).appendChild(o),
        e = C.getComputedStyle(o),
        qe = "1%" !== e.top,
        Ve = 12 === Ze(e.marginLeft),
        o.style.right = "60%",
        Ue = 36 === Ze(e.right),
        Fe = 36 === Ze(e.width),
        o.style.position = "absolute",
        Be = 12 === Ze(o.offsetWidth / 3),
        w.removeChild(Qe),
        o = null)
    }
    function Ze(e) {
        return Math.round(parseFloat(e))
    }
    Qe = x.createElement("div"),
    (o = x.createElement("div")).style && (o.style.backgroundClip = "content-box",
    o.cloneNode(!0).style.backgroundClip = "",
    g.clearCloneStyle = "content-box" === o.style.backgroundClip,
    E.extend(g, {
        boxSizingReliable: function() {
            return Je(),
            Fe
        },
        pixelBoxStyles: function() {
            return Je(),
            Ue
        },
        pixelPosition: function() {
            return Je(),
            qe
        },
        reliableMarginLeft: function() {
            return Je(),
            Ve
        },
        scrollboxSize: function() {
            return Je(),
            Be
        },
        reliableTrDimensions: function() {
            var e, t, n;
            return null == ze && (e = x.createElement("table"),
            t = x.createElement("tr"),
            n = x.createElement("div"),
            e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
            t.style.cssText = "border:1px solid",
            t.style.height = "1px",
            n.style.height = "9px",
            n.style.display = "block",
            w.appendChild(e).appendChild(t).appendChild(n),
            n = C.getComputedStyle(t),
            ze = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight,
            w.removeChild(e)),
            ze
        }
    }));
    var et = ["Webkit", "Moz", "ms"]
      , tt = x.createElement("div").style
      , nt = {};
    function it(e) {
        return E.cssProps[e] || nt[e] || (e in tt ? e : nt[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--; )
                if ((e = et[n] + t)in tt)
                    return e
        }(e) || e)
    }
    var ot = /^(none|table(?!-c[ea]).+)/
      , rt = /^--/
      , at = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , st = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function lt(e, t, n) {
        var i = ve.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function ct(e, t, n, i, o, r) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += E.css(e, n + h[a], !0, o)),
            i ? ("content" === n && (l -= E.css(e, "padding" + h[a], !0, o)),
            "margin" !== n && (l -= E.css(e, "border" + h[a] + "Width", !0, o))) : (l += E.css(e, "padding" + h[a], !0, o),
            "padding" !== n ? l += E.css(e, "border" + h[a] + "Width", !0, o) : s += E.css(e, "border" + h[a] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - .5)) || 0),
        l
    }
    function ut(e, t, n) {
        var i = Re(e)
          , o = (!g.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, i)
          , r = o
          , a = Xe(e, t, i)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ge.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!g.boxSizingReliable() && o || !g.reliableTrDimensions() && l(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === E.css(e, "boxSizing", !1, i),
        r = s in e) && (a = e[s]),
        (a = parseFloat(a) || 0) + ct(e, t, n || (o ? "border" : "content"), r, i, a) + "px"
    }
    function r(e, t, n, i, o) {
        return new r.prototype.init(e,t,n,i,o)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t)
                        return "" === (t = Xe(e, "opacity")) ? "1" : t
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, a, s = _(t), l = rt.test(t), c = e.style;
                if (l || (t = it(s)),
                a = E.cssHooks[t] || E.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (o = a.get(e, !1, i)) ? o : c[t];
                "string" == (r = typeof n) && (o = ve.exec(n)) && o[1] && (n = _e(e, t, o),
                r = "number"),
                null != n && n == n && ("number" !== r || l || (n += o && o[3] || (E.cssNumber[s] ? "" : "px")),
                g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var o, r = _(t);
            return rt.test(t) || (t = it(r)),
            "normal" === (o = void 0 === (o = (r = E.cssHooks[t] || E.cssHooks[r]) && "get"in r ? r.get(e, !0, n) : o) ? Xe(e, t, i) : o) && t in st && (o = st[t]),
            ("" === n || n) && (r = parseFloat(o),
            !0 === n || isFinite(r)) ? r || 0 : o
        }
    }),
    E.each(["height", "width"], function(e, a) {
        E.cssHooks[a] = {
            get: function(e, t, n) {
                if (t)
                    return !ot.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ut(e, a, n) : We(e, at, function() {
                        return ut(e, a, n)
                    })
            },
            set: function(e, t, n) {
                var i = Re(e)
                  , o = !g.scrollboxSize() && "absolute" === i.position
                  , r = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i)
                  , n = n ? ct(e, a, n, r, i) : 0;
                return r && o && (n -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(i[a]) - ct(e, a, "border", !1, i) - .5)),
                n && (r = ve.exec(t)) && "px" !== (r[3] || "px") && (e.style[a] = t,
                t = E.css(e, a)),
                lt(0, t, n)
            }
        }
    }),
    E.cssHooks.marginLeft = Ye(g.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Xe(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, r) {
        E.cssHooks[o + r] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[o + h[t] + r] = i[t] || i[t - 2] || i[0];
                return n
            }
        },
        "margin" !== o && (E.cssHooks[o + r].set = lt)
    }),
    E.fn.extend({
        css: function(e, t) {
            return d(this, function(e, t, n) {
                var i, o, r = {}, a = 0;
                if (Array.isArray(t)) {
                    for (i = Re(e),
                    o = t.length; a < o; a++)
                        r[t[a]] = E.css(e, t[a], !1, i);
                    return r
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((E.Tween = r).prototype = {
        constructor: r,
        init: function(e, t, n, i, o, r) {
            this.elem = e,
            this.prop = n,
            this.easing = o || E.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (E.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = r.propHooks[this.prop];
            return (e && e.get ? e : r.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = r.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (n && n.set ? n : r.propHooks._default).set(this),
            this
        }
    }).init.prototype = r.prototype,
    (r.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = E.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[it(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = r.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    E.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    E.fx = r.prototype.init,
    E.fx.step = {};
    var I, dt, N, ht = /^(?:toggle|show|hide)$/, ft = /queueHooks$/;
    function pt() {
        dt && (!1 === x.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(pt) : C.setTimeout(pt, E.fx.interval),
        E.fx.tick())
    }
    function mt() {
        return C.setTimeout(function() {
            I = void 0
        }),
        I = Date.now()
    }
    function gt(e, t) {
        var n, i = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            o["margin" + (n = h[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function vt(e, t, n) {
        for (var i, o = (L.tweeners[t] || []).concat(L.tweeners["*"]), r = 0, a = o.length; r < a; r++)
            if (i = o[r].call(n, t, e))
                return i
    }
    function L(o, e, t) {
        var n, r, i, a, s, l, c, u = 0, d = L.prefilters.length, h = E.Deferred().always(function() {
            delete f.elem
        }), f = function() {
            if (r)
                return !1;
            for (var e = I || mt(), e = Math.max(0, p.startTime + p.duration - e), t = 1 - (e / p.duration || 0), n = 0, i = p.tweens.length; n < i; n++)
                p.tweens[n].run(t);
            return h.notifyWith(o, [p, t, e]),
            t < 1 && i ? e : (i || h.notifyWith(o, [p, 1, 0]),
            h.resolveWith(o, [p]),
            !1)
        }, p = h.promise({
            elem: o,
            props: E.extend({}, e),
            opts: E.extend(!0, {
                specialEasing: {},
                easing: E.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: I || mt(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                t = E.Tween(o, p.opts, e, t, p.opts.specialEasing[e] || p.opts.easing);
                return p.tweens.push(t),
                t
            },
            stop: function(e) {
                var t = 0
                  , n = e ? p.tweens.length : 0;
                if (!r) {
                    for (r = !0; t < n; t++)
                        p.tweens[t].run(1);
                    e ? (h.notifyWith(o, [p, 1, 0]),
                    h.resolveWith(o, [p, e])) : h.rejectWith(o, [p, e])
                }
                return this
            }
        }), m = p.props, g = m, v = p.opts.specialEasing;
        for (i in g)
            if (s = v[a = _(i)],
            l = g[i],
            Array.isArray(l) && (s = l[1],
            l = g[i] = l[0]),
            i !== a && (g[a] = l,
            delete g[i]),
            (c = E.cssHooks[a]) && "expand"in c)
                for (i in l = c.expand(l),
                delete g[a],
                l)
                    i in g || (g[i] = l[i],
                    v[i] = s);
            else
                v[a] = s;
        for (; u < d; u++)
            if (n = L.prefilters[u].call(p, o, m, p.opts))
                return y(n.stop) && (E._queueHooks(p.elem, p.opts.queue).stop = n.stop.bind(n)),
                n;
        return E.map(m, vt, p),
        y(p.opts.start) && p.opts.start.call(o, p),
        p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always),
        E.fx.timer(E.extend(f, {
            elem: o,
            anim: p,
            queue: p.opts.queue
        })),
        p
    }
    E.Animation = E.extend(L, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return _e(n.elem, e, ve.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, i = 0, o = (e = y(e) ? (t = e,
            ["*"]) : e.match(S)).length; i < o; i++)
                n = e[i],
                L.tweeners[n] = L.tweeners[n] || [],
                L.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, o, r, a, s, l, c, u = "width"in t || "height"in t, d = this, h = {}, f = e.style, p = e.nodeType && ge(e), m = b.get(e, "fxshow");
            for (i in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            d.always(function() {
                d.always(function() {
                    a.unqueued--,
                    E.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (o = t[i],
                ht.test(o)) {
                    if (delete t[i],
                    r = r || "toggle" === o,
                    o === (p ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i])
                            continue;
                        p = !0
                    }
                    h[i] = m && m[i] || E.style(e, i)
                }
            if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(h))
                for (i in u && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
                null == (c = m && m.display) && (c = b.get(e, "display")),
                "none" === (u = E.css(e, "display")) && (c ? u = c : ($([e], !0),
                c = e.style.display || c,
                u = E.css(e, "display"),
                $([e]))),
                "inline" === u || "inline-block" === u && null != c) && "none" === E.css(e, "float") && (l || (d.done(function() {
                    f.display = c
                }),
                null == c && (u = f.display,
                c = "none" === u ? "" : u)),
                f.display = "inline-block"),
                n.overflow && (f.overflow = "hidden",
                d.always(function() {
                    f.overflow = n.overflow[0],
                    f.overflowX = n.overflow[1],
                    f.overflowY = n.overflow[2]
                })),
                l = !1,
                h)
                    l || (m ? "hidden"in m && (p = m.hidden) : m = b.access(e, "fxshow", {
                        display: c
                    }),
                    r && (m.hidden = !p),
                    p && $([e], !0),
                    d.done(function() {
                        for (i in p || $([e]),
                        b.remove(e, "fxshow"),
                        h)
                            E.style(e, i, h[i])
                    })),
                    l = vt(p ? m[i] : 0, i, d),
                    i in m || (m[i] = l.start,
                    p && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? L.prefilters.unshift(e) : L.prefilters.push(e)
        }
    }),
    E.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? E.extend({}, e) : {
            complete: n || !n && t || y(e) && e,
            duration: e,
            easing: n && t || t && !y(t) && t
        };
        return E.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in E.fx.speeds ? i.duration = E.fx.speeds[i.duration] : i.duration = E.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            y(i.old) && i.old.call(this),
            i.queue && E.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    E.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ge).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            function o() {
                var e = L(this, E.extend({}, t), a);
                (r || b.get(this, "finish")) && e.stop(!0)
            }
            var r = E.isEmptyObject(t)
              , a = E.speed(e, n, i);
            return o.finish = o,
            r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function(o, e, r) {
            function a(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            }
            return "string" != typeof o && (r = e,
            e = o,
            o = void 0),
            e && this.queue(o || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != o && o + "queueHooks"
                  , n = E.timers
                  , i = b.get(this);
                if (t)
                    i[t] && i[t].stop && a(i[t]);
                else
                    for (t in i)
                        i[t] && i[t].stop && ft.test(t) && a(i[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r),
                    e = !1,
                    n.splice(t, 1));
                !e && r || E.dequeue(this, o)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = b.get(this), n = t[a + "queue"], i = t[a + "queueHooks"], o = E.timers, r = n ? n.length : 0;
                for (t.finish = !0,
                E.queue(this, a, []),
                i && i.stop && i.stop.call(this, !0),
                e = o.length; e--; )
                    o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0),
                    o.splice(e, 1));
                for (e = 0; e < r; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    E.each(["toggle", "show", "hide"], function(e, i) {
        var o = E.fn[i];
        E.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(gt(i, !0), e, t, n)
        }
    }),
    E.each({
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        E.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }),
    E.timers = [],
    E.fx.tick = function() {
        var e, t = 0, n = E.timers;
        for (I = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(),
        I = void 0
    }
    ,
    E.fx.timer = function(e) {
        E.timers.push(e),
        E.fx.start()
    }
    ,
    E.fx.interval = 13,
    E.fx.start = function() {
        dt || (dt = !0,
        pt())
    }
    ,
    E.fx.stop = function() {
        dt = null
    }
    ,
    E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    E.fn.delay = function(i, e) {
        return i = E.fx && E.fx.speeds[i] || i,
        this.queue(e = e || "fx", function(e, t) {
            var n = C.setTimeout(e, i);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    N = x.createElement("input"),
    n = x.createElement("select").appendChild(x.createElement("option")),
    N.type = "checkbox",
    g.checkOn = "" !== N.value,
    g.optSelected = n.selected,
    (N = x.createElement("input")).value = "t",
    N.type = "radio",
    g.radioValue = "t" === N.value;
    var yt, _t = E.expr.attrHandle, bt = (E.fn.extend({
        attr: function(e, t) {
            return d(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }),
    E.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === r && E.isXMLDoc(e) || (o = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? yt : void 0)),
                void 0 !== n ? null === n ? void E.removeAttr(e, t) : o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : !(o && "get"in o && null !== (i = o.get(e, t))) && null == (i = E.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    var n;
                    if (!g.radioValue && "radio" === t && l(e, "input"))
                        return n = e.value,
                        e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, o = t && t.match(S);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    e.removeAttribute(n)
        }
    }),
    yt = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = _t[t] || E.find.attr;
        _t[t] = function(e, t, n) {
            var i, o, r = t.toLowerCase();
            return n || (o = _t[r],
            _t[r] = i,
            i = null != a(e, t, n) ? r : null,
            _t[r] = o),
            i
        }
    }),
    /^(?:input|select|textarea|button)$/i), wt = /^(?:a|area)$/i;
    function O(e) {
        return (e.match(S) || []).join(" ")
    }
    function j(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Ct(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(S) || []
    }
    E.fn.extend({
        prop: function(e, t) {
            return d(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }),
    E.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && E.isXMLDoc(e) || (t = E.propFix[t] || t,
                o = E.propHooks[t]),
                void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    g.optSelected || (E.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex,
            e.parentNode) && e.parentNode.selectedIndex
        }
    }),
    E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        E.propFix[this.toLowerCase()] = this
    }),
    E.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, a, s = 0;
            if (y(t))
                return this.each(function(e) {
                    E(this).addClass(t.call(this, e, j(this)))
                });
            if ((e = Ct(t)).length)
                for (; n = this[s++]; )
                    if (a = j(n),
                    i = 1 === n.nodeType && " " + O(a) + " ") {
                        for (r = 0; o = e[r++]; )
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a !== (a = O(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, a, s = 0;
            if (y(t))
                return this.each(function(e) {
                    E(this).removeClass(t.call(this, e, j(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = Ct(t)).length)
                for (; n = this[s++]; )
                    if (a = j(n),
                    i = 1 === n.nodeType && " " + O(a) + " ") {
                        for (r = 0; o = e[r++]; )
                            for (; -1 < i.indexOf(" " + o + " "); )
                                i = i.replace(" " + o + " ", " ");
                        a !== (a = O(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(o, t) {
            var r = typeof o
              , a = "string" == r || Array.isArray(o);
            return "boolean" == typeof t && a ? t ? this.addClass(o) : this.removeClass(o) : y(o) ? this.each(function(e) {
                E(this).toggleClass(o.call(this, e, j(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (a)
                    for (t = 0,
                    n = E(this),
                    i = Ct(o); e = i[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    void 0 !== o && "boolean" != r || ((e = j(this)) && b.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", !e && !1 !== o && b.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, n = 0, i = " " + e + " "; t = this[n++]; )
                if (1 === t.nodeType && -1 < (" " + O(j(t)) + " ").indexOf(i))
                    return !0;
            return !1
        }
    });
    function xt(e) {
        e.stopPropagation()
    }
    var Et = /\r/g
      , St = (E.fn.extend({
        val: function(t) {
            var n, e, i, o = this[0];
            return arguments.length ? (i = y(t),
            this.each(function(e) {
                1 === this.nodeType && (null == (e = i ? t.call(this, e, E(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = E.map(e, function(e) {
                    return null == e ? "" : e + ""
                })),
                (n = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set"in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : o ? (n = E.valHooks[o.type] || E.valHooks[o.nodeName.toLowerCase()]) && "get"in n && void 0 !== (e = n.get(o, "value")) ? e : "string" == typeof (e = o.value) ? e.replace(Et, "") : null == e ? "" : e : void 0
        }
    }),
    E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : O(E.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, i = e.selectedIndex, o = "select-one" === e.type, r = o ? null : [], a = o ? i + 1 : n.length, s = i < 0 ? a : o ? i : 0; s < a; s++)
                        if (((t = n[s]).selected || s === i) && !t.disabled && (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))) {
                            if (t = E(t).val(),
                            o)
                                return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = E.makeArray(t), a = o.length; a--; )
                        ((i = o[a]).selected = -1 < E.inArray(E.valHooks.option.get(i), r)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    E.each(["radio", "checkbox"], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        },
        g.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    g.focusin = "onfocusin"in C,
    /^(?:focusinfocus|focusoutblur)$/)
      , Tt = (E.extend(E.event, {
        trigger: function(e, t, n, i) {
            var o, r, a, s, l, c, u, d = [n || x], h = B.call(e, "type") ? e.type : e, f = B.call(e, "namespace") ? e.namespace.split(".") : [], p = u = r = n = n || x;
            if (3 !== n.nodeType && 8 !== n.nodeType && !St.test(h + E.event.triggered) && (-1 < h.indexOf(".") && (h = (f = h.split(".")).shift(),
            f.sort()),
            s = h.indexOf(":") < 0 && "on" + h,
            (e = e[E.expando] ? e : new E.Event(h,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
            e.namespace = f.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : E.makeArray(t, [e]),
            c = E.event.special[h] || {},
            i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!i && !c.noBubble && !m(n)) {
                    for (a = c.delegateType || h,
                    St.test(a + h) || (p = p.parentNode); p; p = p.parentNode)
                        d.push(p),
                        r = p;
                    r === (n.ownerDocument || x) && d.push(r.defaultView || r.parentWindow || C)
                }
                for (o = 0; (p = d[o++]) && !e.isPropagationStopped(); )
                    u = p,
                    e.type = 1 < o ? a : c.bindType || h,
                    (l = (b.get(p, "events") || Object.create(null))[e.type] && b.get(p, "handle")) && l.apply(p, t),
                    (l = s && p[s]) && l.apply && v(p) && (e.result = l.apply(p, t),
                    !1 === e.result) && e.preventDefault();
                return e.type = h,
                i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !v(n) || s && y(n[h]) && !m(n) && ((r = n[s]) && (n[s] = null),
                E.event.triggered = h,
                e.isPropagationStopped() && u.addEventListener(h, xt),
                n[h](),
                e.isPropagationStopped() && u.removeEventListener(h, xt),
                E.event.triggered = void 0,
                r) && (n[s] = r),
                e.result
            }
        },
        simulate: function(e, t, n) {
            n = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(n, null, t)
        }
    }),
    E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return E.event.trigger(e, t, n, !0)
        }
    }),
    g.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function o(e) {
            E.event.simulate(i, e.target, E.event.fix(e))
        }
        E.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = b.access(e, i);
                t || e.addEventListener(n, o, !0),
                b.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = b.access(e, i) - 1;
                t ? b.access(e, i, t) : (e.removeEventListener(n, o, !0),
                b.remove(e, i))
            }
        }
    }),
    C.location)
      , $t = {
        guid: Date.now()
    }
      , kt = /\?/
      , At = (E.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ,
    /\[\]$/)
      , Dt = /\r?\n/g
      , It = /^(?:submit|button|image|reset|file)$/i
      , Nt = /^(?:input|select|textarea|keygen)/i;
    E.param = function(e, t) {
        function n(e, t) {
            t = y(t) ? t() : t,
            o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var i, o = [];
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e))
            E.each(e, function() {
                n(this.name, this.value)
            });
        else
            for (i in e)
                !function n(i, e, o, r) {
                    if (Array.isArray(e))
                        E.each(e, function(e, t) {
                            o || At.test(i) ? r(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, r)
                        });
                    else if (o || "object" !== p(e))
                        r(i, e);
                    else
                        for (var t in e)
                            n(i + "[" + t + "]", e[t], o, r)
                }(i, e[i], t, n);
        return o.join("&")
    }
    ,
    E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && Nt.test(this.nodeName) && !It.test(e) && (this.checked || !we.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g
      , Ot = /#.*$/
      , jt = /([?&])_=[^&]*/
      , Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ht = /^(?:GET|HEAD)$/
      , Mt = /^\/\//
      , Rt = {}
      , Wt = {}
      , qt = "*/".concat("*")
      , Ft = x.createElement("a");
    function Bt(r) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, i = 0, o = e.toLowerCase().match(S) || [];
            if (y(t))
                for (; n = o[i++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }
    function Ut(t, i, o, r) {
        var a = {}
          , s = t === Wt;
        function l(e) {
            var n;
            return a[e] = !0,
            E.each(t[e] || [], function(e, t) {
                t = t(i, o, r);
                return "string" != typeof t || s || a[t] ? s ? !(n = t) : void 0 : (i.dataTypes.unshift(t),
                l(t),
                !1)
            }),
            n
        }
        return l(i.dataTypes[0]) || !a["*"] && l("*")
    }
    function zt(e, t) {
        var n, i, o = E.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
        return i && E.extend(!0, e, i),
        e
    }
    Ft.href = Tt.href,
    E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, E.ajaxSettings), t) : zt(E.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(Rt),
        ajaxTransport: Bt(Wt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0);
            var l, c, u, n, d, h, f, i, o, p = E.ajaxSetup({}, t = t || {}), m = p.context || p, g = p.context && (m.nodeType || m.jquery) ? E(m) : E.event, v = E.Deferred(), y = E.Callbacks("once memory"), _ = p.statusCode || {}, r = {}, a = {}, s = "canceled", b = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n)
                            for (n = {}; t = Pt.exec(u); )
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? u : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e,
                    r[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    if (e)
                        if (h)
                            b.always(e[b.status]);
                        else
                            for (var t in e)
                                _[t] = [_[t], e[t]];
                    return this
                },
                abort: function(e) {
                    e = e || s;
                    return l && l.abort(e),
                    w(0, e),
                    this
                }
            };
            if (v.promise(b),
            p.url = ((e || p.url || Tt.href) + "").replace(Mt, Tt.protocol + "//"),
            p.type = t.method || t.type || p.method || p.type,
            p.dataTypes = (p.dataType || "*").toLowerCase().match(S) || [""],
            null == p.crossDomain) {
                o = x.createElement("a");
                try {
                    o.href = p.url,
                    o.href = o.href,
                    p.crossDomain = Ft.protocol + "//" + Ft.host != o.protocol + "//" + o.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = E.param(p.data, p.traditional)),
            Ut(Rt, p, t, b),
            !h) {
                for (i in (f = E.event && p.global) && 0 == E.active++ && E.event.trigger("ajaxStart"),
                p.type = p.type.toUpperCase(),
                p.hasContent = !Ht.test(p.type),
                c = p.url.replace(Ot, ""),
                p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Lt, "+")) : (o = p.url.slice(c.length),
                p.data && (p.processData || "string" == typeof p.data) && (c += (kt.test(c) ? "&" : "?") + p.data,
                delete p.data),
                !1 === p.cache && (c = c.replace(jt, "$1"),
                o = (kt.test(c) ? "&" : "?") + "_=" + $t.guid++ + o),
                p.url = c + o),
                p.ifModified && (E.lastModified[c] && b.setRequestHeader("If-Modified-Since", E.lastModified[c]),
                E.etag[c]) && b.setRequestHeader("If-None-Match", E.etag[c]),
                (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && b.setRequestHeader("Content-Type", p.contentType),
                b.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : p.accepts["*"]),
                p.headers)
                    b.setRequestHeader(i, p.headers[i]);
                if (p.beforeSend && (!1 === p.beforeSend.call(m, b, p) || h))
                    return b.abort();
                if (s = "abort",
                y.add(p.complete),
                b.done(p.success),
                b.fail(p.error),
                l = Ut(Wt, p, t, b)) {
                    if (b.readyState = 1,
                    f && g.trigger("ajaxSend", [b, p]),
                    h)
                        return b;
                    p.async && 0 < p.timeout && (d = C.setTimeout(function() {
                        b.abort("timeout")
                    }, p.timeout));
                    try {
                        h = !1,
                        l.send(r, w)
                    } catch (e) {
                        if (h)
                            throw e;
                        w(-1, e)
                    }
                } else
                    w(-1, "No Transport")
            }
            return b;
            function w(e, t, n, i) {
                var o, r, a, s = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                l = void 0,
                u = i || "",
                b.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (a = function(e, t, n) {
                    for (var i, o, r, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in s)
                            if (s[o] && s[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0]in n)
                        r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            a = a || o
                        }
                        r = r || a
                    }
                    if (r)
                        return r !== l[0] && l.unshift(r),
                        n[r]
                }(p, b, n)),
                !i && -1 < E.inArray("script", p.dataTypes) && E.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}
                ),
                a = function(e, t, n, i) {
                    var o, r, a, s, l, c = {}, u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters)
                            c[a.toLowerCase()] = e.converters[a];
                    for (r = u.shift(); r; )
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = r,
                        r = u.shift())
                            if ("*" === r)
                                r = l;
                            else if ("*" !== l && l !== r) {
                                if (!(a = c[l + " " + r] || c["* " + r]))
                                    for (o in c)
                                        if ((s = o.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                            !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0],
                                            u.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + l + " to " + r
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, a, b, i),
                i ? (p.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (E.lastModified[c] = n),
                n = b.getResponseHeader("etag")) && (E.etag[c] = n),
                204 === e || "HEAD" === p.type ? s = "nocontent" : 304 === e ? s = "notmodified" : (s = a.state,
                o = a.data,
                i = !(r = a.error))) : (r = s,
                !e && s || (s = "error",
                e < 0 && (e = 0))),
                b.status = e,
                b.statusText = (t || s) + "",
                i ? v.resolveWith(m, [o, s, b]) : v.rejectWith(m, [b, s, r]),
                b.statusCode(_),
                _ = void 0,
                f && g.trigger(i ? "ajaxSuccess" : "ajaxError", [b, p, i ? o : r]),
                y.fireWith(m, [b, s]),
                f && (g.trigger("ajaxComplete", [b, p]),
                --E.active || E.event.trigger("ajaxStop")))
            }
        },
        getJSON: function(e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return E.get(e, void 0, t, "script")
        }
    }),
    E.each(["get", "post"], function(e, o) {
        E[o] = function(e, t, n, i) {
            return y(t) && (i = i || n,
            n = t,
            t = void 0),
            E.ajax(E.extend({
                url: e,
                type: o,
                dataType: i,
                data: t,
                success: n
            }, E.isPlainObject(e) && e))
        }
    }),
    E.ajaxPrefilter(function(e) {
        for (var t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    E._evalUrl = function(e, t, n) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                E.globalEval(e, t, n)
            }
        })
    }
    ,
    E.fn.extend({
        wrapAll: function(e) {
            return this[0] && (y(e) && (e = e.call(this[0])),
            e = E(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return y(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = E(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = y(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                E(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    E.expr.pseudos.hidden = function(e) {
        return !E.expr.pseudos.visible(e)
    }
    ,
    E.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    E.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Vt = {
        0: 200,
        1223: 204
    }
      , Qt = E.ajaxSettings.xhr();
    g.cors = !!Qt && "withCredentials"in Qt,
    g.ajax = Qt = !!Qt,
    E.ajaxTransport(function(o) {
        var r, a;
        if (g.cors || Qt && !o.crossDomain)
            return {
                send: function(e, t) {
                    var n, i = o.xhr();
                    if (i.open(o.type, o.url, o.async, o.username, o.password),
                    o.xhrFields)
                        for (n in o.xhrFields)
                            i[n] = o.xhrFields[n];
                    for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType),
                    o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        i.setRequestHeader(n, e[n]);
                    r = function(e) {
                        return function() {
                            r && (r = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null,
                            "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Vt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                binary: i.response
                            } : {
                                text: i.responseText
                            }, i.getAllResponseHeaders()))
                        }
                    }
                    ,
                    i.onload = r(),
                    a = i.onerror = i.ontimeout = r("error"),
                    void 0 !== i.onabort ? i.onabort = a : i.onreadystatechange = function() {
                        4 === i.readyState && C.setTimeout(function() {
                            r && a()
                        })
                    }
                    ,
                    r = r("abort");
                    try {
                        i.send(o.hasContent && o.data || null)
                    } catch (e) {
                        if (r)
                            throw e
                    }
                },
                abort: function() {
                    r && r()
                }
            }
    }),
    E.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return E.globalEval(e),
                e
            }
        }
    }),
    E.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    E.ajaxTransport("script", function(n) {
        var i, o;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    i = E("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", o = function(e) {
                        i.remove(),
                        o = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    x.head.appendChild(i[0])
                },
                abort: function() {
                    o && o()
                }
            }
    });
    var Gt = []
      , Kt = /(=)\?(?=&|$)|\?\?/
      , Xt = (E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || E.expando + "_" + $t.guid++;
            return this[e] = !0,
            e
        }
    }),
    E.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, o, r, a = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Kt, "$1" + i) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
            e.converters["script json"] = function() {
                return r || E.error(i + " was not called"),
                r[0]
            }
            ,
            e.dataTypes[0] = "json",
            o = C[i],
            C[i] = function() {
                r = arguments
            }
            ,
            n.always(function() {
                void 0 === o ? E(C).removeProp(i) : C[i] = o,
                e[i] && (e.jsonpCallback = t.jsonpCallback,
                Gt.push(i)),
                r && y(o) && o(r[0]),
                r = o = void 0
            }),
            "script"
    }),
    g.createHTMLDocument = ((e = x.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === e.childNodes.length),
    E.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (g.createHTMLDocument ? ((i = (t = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href,
        t.head.appendChild(i)) : t = x),
        i = !n && [],
        (n = Y.exec(e)) ? [t.createElement(n[1])] : (n = Te([e], t, i),
        i && i.length && E(i).remove(),
        E.merge([], n.childNodes)));
        var i
    }
    ,
    E.fn.load = function(e, t, n) {
        var i, o, r, a = this, s = e.indexOf(" ");
        return -1 < s && (i = O(e.slice(s)),
        e = e.slice(0, s)),
        y(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        0 < a.length && E.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments,
            a.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    E.expr.pseudos.animated = function(t) {
        return E.grep(E.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    E.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, a, s = E.css(e, "position"), l = E(e), c = {};
            "static" === s && (e.style.position = "relative"),
            r = l.offset(),
            i = E.css(e, "top"),
            a = E.css(e, "left"),
            s = ("absolute" === s || "fixed" === s) && -1 < (i + a).indexOf("auto") ? (o = (s = l.position()).top,
            s.left) : (o = parseFloat(i) || 0,
            parseFloat(a) || 0),
            null != (t = y(t) ? t.call(e, n, E.extend({}, r)) : t).top && (c.top = t.top - r.top + o),
            null != t.left && (c.left = t.left - r.left + s),
            "using"in t ? t.using.call(e, c) : l.css(c)
        }
    },
    E.fn.extend({
        offset: function(t) {
            var e, n;
            return arguments.length ? void 0 === t ? this : this.each(function(e) {
                E.offset.setOffset(this, t, e)
            }) : (n = this[0]) ? n.getClientRects().length ? (e = n.getBoundingClientRect(),
            n = n.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], o = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === E.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = E(e).offset()).top += E.css(e, "borderTopWidth", !0),
                    o.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - E.css(i, "marginTop", !0),
                    left: t.left - o.left - E.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === E.css(e, "position"); )
                    e = e.offsetParent;
                return e || w
            })
        }
    }),
    E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var r = "pageYOffset" === o;
        E.fn[t] = function(e) {
            return d(this, function(e, t, n) {
                var i;
                if (m(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                void 0 === n)
                    return i ? i[o] : e[t];
                i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    E.each(["top", "left"], function(e, n) {
        E.cssHooks[n] = Ye(g.pixelPosition, function(e, t) {
            if (t)
                return t = Xe(e, n),
                Ge.test(t) ? E(e).position()[n] + "px" : t
        })
    }),
    E.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        E.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(i, r) {
            E.fn[r] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e)
                  , o = i || (!0 === e || !0 === t ? "margin" : "border");
                return d(this, function(e, t, n) {
                    var i;
                    return m(e) ? 0 === r.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (i = e.documentElement,
                    Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? E.css(e, t, o) : E.style(e, t, n, o)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        E.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g)
      , Yt = (E.proxy = function(e, t) {
        var n, i;
        if ("string" == typeof t && (i = e[t],
        t = e,
        e = i),
        y(e))
            return n = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, n.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || E.guid++,
            i
    }
    ,
    E.holdReady = function(e) {
        e ? E.readyWait++ : E.ready(!0)
    }
    ,
    E.isArray = Array.isArray,
    E.parseJSON = JSON.parse,
    E.nodeName = l,
    E.isFunction = y,
    E.isWindow = m,
    E.camelCase = _,
    E.type = p,
    E.now = Date.now,
    E.isNumeric = function(e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    E.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    }),
    C.jQuery)
      , Jt = C.$;
    return E.noConflict = function(e) {
        return C.$ === E && (C.$ = Jt),
        e && C.jQuery === E && (C.jQuery = Yt),
        E
    }
    ,
    void 0 === P && (C.jQuery = C.$ = E),
    E
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(C) {
    C.ui = C.ui || {},
    C.ui.version = "1.12.1";
    var o, i, x, E, r, a, s, l, c, n, e, u = 0, d = Array.prototype.slice;
    function S(e, t, n) {
        return [parseFloat(e[0]) * (c.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (c.test(e[1]) ? n / 100 : 1)]
    }
    function T(e, t) {
        return parseInt(C.css(e, t), 10) || 0
    }
    C.cleanData = (o = C.cleanData,
    function(e) {
        for (var t, n, i = 0; null != (n = e[i]); i++)
            try {
                (t = C._data(n, "events")) && t.remove && C(n).triggerHandler("remove")
            } catch (e) {}
        o(e)
    }
    ),
    C.widget = function(e, n, t) {
        var i, o, r, a = {}, s = e.split(".")[0], l = s + "-" + (e = e.split(".")[1]);
        return t || (t = n,
        n = C.Widget),
        C.isArray(t) && (t = C.extend.apply(null, [{}].concat(t))),
        C.expr[":"][l.toLowerCase()] = function(e) {
            return !!C.data(e, l)
        }
        ,
        C[s] = C[s] || {},
        i = C[s][e],
        o = C[s][e] = function(e, t) {
            if (!this._createWidget)
                return new o(e,t);
            arguments.length && this._createWidget(e, t)
        }
        ,
        C.extend(o, i, {
            version: t.version,
            _proto: C.extend({}, t),
            _childConstructors: []
        }),
        (r = new n).options = C.widget.extend({}, r.options),
        C.each(t, function(t, i) {
            function o() {
                return n.prototype[t].apply(this, arguments)
            }
            function r(e) {
                return n.prototype[t].apply(this, e)
            }
            C.isFunction(i) ? a[t] = function() {
                var e, t = this._super, n = this._superApply;
                return this._super = o,
                this._superApply = r,
                e = i.apply(this, arguments),
                this._super = t,
                this._superApply = n,
                e
            }
            : a[t] = i
        }),
        o.prototype = C.widget.extend(r, {
            widgetEventPrefix: i && r.widgetEventPrefix || e
        }, a, {
            constructor: o,
            namespace: s,
            widgetName: e,
            widgetFullName: l
        }),
        i ? (C.each(i._childConstructors, function(e, t) {
            var n = t.prototype;
            C.widget(n.namespace + "." + n.widgetName, o, t._proto)
        }),
        delete i._childConstructors) : n._childConstructors.push(o),
        C.widget.bridge(e, o),
        o
    }
    ,
    C.widget.extend = function(e) {
        for (var t, n, i = d.call(arguments, 1), o = 0, r = i.length; o < r; o++)
            for (t in i[o])
                n = i[o][t],
                i[o].hasOwnProperty(t) && void 0 !== n && (C.isPlainObject(n) ? e[t] = C.isPlainObject(e[t]) ? C.widget.extend({}, e[t], n) : C.widget.extend({}, n) : e[t] = n);
        return e
    }
    ,
    C.widget.bridge = function(r, t) {
        var a = t.prototype.widgetFullName || r;
        C.fn[r] = function(n) {
            var e = "string" == typeof n
              , i = d.call(arguments, 1)
              , o = this;
            return e ? this.length || "instance" !== n ? this.each(function() {
                var e, t = C.data(this, a);
                return "instance" === n ? (o = t,
                !1) : t ? C.isFunction(t[n]) && "_" !== n.charAt(0) ? (e = t[n].apply(t, i)) !== t && void 0 !== e ? (o = e && e.jquery ? o.pushStack(e.get()) : e,
                !1) : void 0 : C.error("no such method '" + n + "' for " + r + " widget instance") : C.error("cannot call methods on " + r + " prior to initialization; attempted to call method '" + n + "'")
            }) : o = void 0 : (i.length && (n = C.widget.extend.apply(null, [n].concat(i))),
            this.each(function() {
                var e = C.data(this, a);
                e ? (e.option(n || {}),
                e._init && e._init()) : C.data(this, a, new t(n,this))
            })),
            o
        }
    }
    ,
    C.Widget = function() {}
    ,
    C.Widget._childConstructors = [],
    C.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(e, t) {
            t = C(t || this.defaultElement || this)[0],
            this.element = C(t),
            this.uuid = u++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = C(),
            this.hoverable = C(),
            this.focusable = C(),
            this.classesElementLookup = {},
            t !== this && (C.data(t, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(e) {
                    e.target === t && this.destroy()
                }
            }),
            this.document = C(t.style ? t.ownerDocument : t.document || t),
            this.window = C(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = C.widget.extend({}, this.options, this._getCreateOptions(), e),
            this._create(),
            this.options.disabled && this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: C.noop,
        _create: C.noop,
        _init: C.noop,
        destroy: function() {
            var n = this;
            this._destroy(),
            C.each(this.classesElementLookup, function(e, t) {
                n._removeClass(t, e)
            }),
            this.element.off(this.eventNamespace).removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace)
        },
        _destroy: C.noop,
        widget: function() {
            return this.element
        },
        option: function(e, t) {
            var n, i, o, r = e;
            if (0 === arguments.length)
                return C.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (r = {},
                e = (n = e.split(".")).shift(),
                n.length) {
                    for (i = r[e] = C.widget.extend({}, this.options[e]),
                    o = 0; o < n.length - 1; o++)
                        i[n[o]] = i[n[o]] || {},
                        i = i[n[o]];
                    if (e = n.pop(),
                    1 === arguments.length)
                        return void 0 === i[e] ? null : i[e];
                    i[e] = t
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[e] ? null : this.options[e];
                    r[e] = t
                }
            return this._setOptions(r),
            this
        },
        _setOptions: function(e) {
            for (var t in e)
                this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return "classes" === e && this._setOptionClasses(t),
            this.options[e] = t,
            "disabled" === e && this._setOptionDisabled(t),
            this
        },
        _setOptionClasses: function(e) {
            var t, n, i;
            for (t in e)
                i = this.classesElementLookup[t],
                e[t] !== this.options.classes[t] && i && i.length && (n = C(i.get()),
                this._removeClass(i, t),
                n.addClass(this._classes({
                    element: n,
                    keys: t,
                    classes: e,
                    add: !0
                })))
        },
        _setOptionDisabled: function(e) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e),
            e && (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(o) {
            var r = []
              , a = this;
            function e(e, t) {
                for (var n, i = 0; i < e.length; i++)
                    n = a.classesElementLookup[e[i]] || C(),
                    n = o.add ? C(C.unique(n.get().concat(o.element.get()))) : C(n.not(o.element).get()),
                    a.classesElementLookup[e[i]] = n,
                    r.push(e[i]),
                    t && o.classes[e[i]] && r.push(o.classes[e[i]])
            }
            return o = C.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, o),
            this._on(o.element, {
                remove: "_untrackClassesElement"
            }),
            o.keys && e(o.keys.match(/\S+/g) || [], !0),
            o.extra && e(o.extra.match(/\S+/g) || []),
            r.join(" ")
        },
        _untrackClassesElement: function(n) {
            var i = this;
            C.each(i.classesElementLookup, function(e, t) {
                -1 !== C.inArray(n.target, t) && (i.classesElementLookup[e] = C(t.not(n.target).get()))
            })
        },
        _removeClass: function(e, t, n) {
            return this._toggleClass(e, t, n, !1)
        },
        _addClass: function(e, t, n) {
            return this._toggleClass(e, t, n, !0)
        },
        _toggleClass: function(e, t, n, i) {
            var o = "string" == typeof e || null === e;
            return (e = {
                extra: o ? t : n,
                keys: o ? e : t,
                element: o ? this.element : e,
                add: i = "boolean" == typeof i ? i : n
            }).element.toggleClass(this._classes(e), i),
            this
        },
        _on: function(o, r, e) {
            var a, s = this;
            "boolean" != typeof o && (e = r,
            r = o,
            o = !1),
            e ? (r = a = C(r),
            this.bindings = this.bindings.add(r)) : (e = r,
            r = this.element,
            a = this.widget()),
            C.each(e, function(e, t) {
                function n() {
                    if (o || !0 !== s.options.disabled && !C(this).hasClass("ui-state-disabled"))
                        return ("string" == typeof t ? s[t] : t).apply(s, arguments)
                }
                "string" != typeof t && (n.guid = t.guid = t.guid || n.guid || C.guid++);
                var i = e.match(/^([\w:-]*)\s*(.*)$/)
                  , e = i[1] + s.eventNamespace;
                (i = i[2]) ? a.on(e, i, n) : r.on(e, n)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            e.off(t).off(t),
            this.bindings = C(this.bindings.not(e).get()),
            this.focusable = C(this.focusable.not(e).get()),
            this.hoverable = C(this.hoverable.not(e).get())
        },
        _delay: function(e, t) {
            var n = this;
            return setTimeout(function() {
                return ("string" == typeof e ? n[e] : e).apply(n, arguments)
            }, t || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e),
            this._on(e, {
                mouseenter: function(e) {
                    this._addClass(C(e.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(e) {
                    this._removeClass(C(e.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e),
            this._on(e, {
                focusin: function(e) {
                    this._addClass(C(e.currentTarget), null, "ui-state-focus")
                },
                focusout: function(e) {
                    this._removeClass(C(e.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(e, t, n) {
            var i, o, r = this.options[e];
            if (n = n || {},
            (t = C.Event(t)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(),
            t.target = this.element[0],
            o = t.originalEvent)
                for (i in o)
                    i in t || (t[i] = o[i]);
            return this.element.trigger(t, n),
            !(C.isFunction(r) && !1 === r.apply(this.element[0], [t].concat(n)) || t.isDefaultPrevented())
        }
    },
    C.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(r, a) {
        C.Widget.prototype["_" + r] = function(t, e, n) {
            var i, o = (e = "string" == typeof e ? {
                effect: e
            } : e) ? !0 !== e && "number" != typeof e && e.effect || a : r;
            "number" == typeof (e = e || {}) && (e = {
                duration: e
            }),
            i = !C.isEmptyObject(e),
            e.complete = n,
            e.delay && t.delay(e.delay),
            i && C.effects && C.effects.effect[o] ? t[r](e) : o !== r && t[o] ? t[o](e.duration, e.easing, n) : t.queue(function(e) {
                C(this)[r](),
                n && n.call(t[0]),
                e()
            })
        }
    }),
    C.widget,
    x = Math.max,
    E = Math.abs,
    r = /left|center|right/,
    a = /top|center|bottom/,
    s = /[\+\-]\d+(\.[\d]+)?%?/,
    l = /^\w+/,
    c = /%$/,
    n = C.fn.position,
    C.position = {
        scrollbarWidth: function() {
            var e, t, n;
            return void 0 !== i ? i : (n = (t = C("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>")).children()[0],
            C("body").append(t),
            e = n.offsetWidth,
            t.css("overflow", "scroll"),
            e === (n = n.offsetWidth) && (n = t[0].clientWidth),
            t.remove(),
            i = e - n)
        },
        getScrollInfo: function(e) {
            var t = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x")
              , n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y")
              , t = "scroll" === t || "auto" === t && e.width < e.element[0].scrollWidth;
            return {
                width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? C.position.scrollbarWidth() : 0,
                height: t ? C.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(e) {
            var t = C(e || window)
              , n = C.isWindow(t[0])
              , i = !!t[0] && 9 === t[0].nodeType;
            return {
                element: t,
                isWindow: n,
                isDocument: i,
                offset: n || i ? {
                    left: 0,
                    top: 0
                } : C(e).offset(),
                scrollLeft: t.scrollLeft(),
                scrollTop: t.scrollTop(),
                width: t.outerWidth(),
                height: t.outerHeight()
            }
        }
    },
    C.fn.position = function(d) {
        if (!d || !d.of)
            return n.apply(this, arguments);
        d = C.extend({}, d);
        var h, f, p, m, g, e, v = C(d.of), y = C.position.getWithinInfo(d.within), _ = C.position.getScrollInfo(y), b = (d.collision || "flip").split(" "), w = {}, t = 9 === (e = (t = v)[0]).nodeType ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : C.isWindow(e) ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: t.scrollTop(),
                left: t.scrollLeft()
            }
        } : e.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: e.pageY,
                left: e.pageX
            }
        } : {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        };
        return v[0].preventDefault && (d.at = "left top"),
        f = t.width,
        p = t.height,
        m = t.offset,
        g = C.extend({}, m),
        C.each(["my", "at"], function() {
            var e, t, n = (d[this] || "").split(" ");
            (n = 1 === n.length ? r.test(n[0]) ? n.concat(["center"]) : a.test(n[0]) ? ["center"].concat(n) : ["center", "center"] : n)[0] = r.test(n[0]) ? n[0] : "center",
            n[1] = a.test(n[1]) ? n[1] : "center",
            e = s.exec(n[0]),
            t = s.exec(n[1]),
            w[this] = [e ? e[0] : 0, t ? t[0] : 0],
            d[this] = [l.exec(n[0])[0], l.exec(n[1])[0]]
        }),
        1 === b.length && (b[1] = b[0]),
        "right" === d.at[0] ? g.left += f : "center" === d.at[0] && (g.left += f / 2),
        "bottom" === d.at[1] ? g.top += p : "center" === d.at[1] && (g.top += p / 2),
        h = S(w.at, f, p),
        g.left += h[0],
        g.top += h[1],
        this.each(function() {
            var n, e, a = C(this), s = a.outerWidth(), l = a.outerHeight(), t = T(this, "marginLeft"), i = T(this, "marginTop"), o = s + t + T(this, "marginRight") + _.width, r = l + i + T(this, "marginBottom") + _.height, c = C.extend({}, g), u = S(w.my, a.outerWidth(), a.outerHeight());
            "right" === d.my[0] ? c.left -= s : "center" === d.my[0] && (c.left -= s / 2),
            "bottom" === d.my[1] ? c.top -= l : "center" === d.my[1] && (c.top -= l / 2),
            c.left += u[0],
            c.top += u[1],
            n = {
                marginLeft: t,
                marginTop: i
            },
            C.each(["left", "top"], function(e, t) {
                C.ui.position[b[e]] && C.ui.position[b[e]][t](c, {
                    targetWidth: f,
                    targetHeight: p,
                    elemWidth: s,
                    elemHeight: l,
                    collisionPosition: n,
                    collisionWidth: o,
                    collisionHeight: r,
                    offset: [h[0] + u[0], h[1] + u[1]],
                    my: d.my,
                    at: d.at,
                    within: y,
                    elem: a
                })
            }),
            d.using && (e = function(e) {
                var t = m.left - c.left
                  , n = t + f - s
                  , i = m.top - c.top
                  , o = i + p - l
                  , r = {
                    target: {
                        element: v,
                        left: m.left,
                        top: m.top,
                        width: f,
                        height: p
                    },
                    element: {
                        element: a,
                        left: c.left,
                        top: c.top,
                        width: s,
                        height: l
                    },
                    horizontal: n < 0 ? "left" : 0 < t ? "right" : "center",
                    vertical: o < 0 ? "top" : 0 < i ? "bottom" : "middle"
                };
                f < s && E(t + n) < f && (r.horizontal = "center"),
                p < l && E(i + o) < p && (r.vertical = "middle"),
                x(E(t), E(n)) > x(E(i), E(o)) ? r.important = "horizontal" : r.important = "vertical",
                d.using.call(this, e, r)
            }
            ),
            a.offset(C.extend(c, {
                using: e
            }))
        })
    }
    ,
    C.ui.position = {
        fit: {
            left: function(e, t) {
                var n = t.within
                  , i = n.isWindow ? n.scrollLeft : n.offset.left
                  , o = n.width
                  , r = e.left - t.collisionPosition.marginLeft
                  , a = i - r
                  , s = r + t.collisionWidth - o - i;
                t.collisionWidth > o ? 0 < a && s <= 0 ? (n = e.left + a + t.collisionWidth - o - i,
                e.left += a - n) : e.left = !(0 < s && a <= 0) && s < a ? i + o - t.collisionWidth : i : 0 < a ? e.left += a : 0 < s ? e.left -= s : e.left = x(e.left - r, e.left)
            },
            top: function(e, t) {
                var n = t.within
                  , i = n.isWindow ? n.scrollTop : n.offset.top
                  , o = t.within.height
                  , r = e.top - t.collisionPosition.marginTop
                  , a = i - r
                  , s = r + t.collisionHeight - o - i;
                t.collisionHeight > o ? 0 < a && s <= 0 ? (n = e.top + a + t.collisionHeight - o - i,
                e.top += a - n) : e.top = !(0 < s && a <= 0) && s < a ? i + o - t.collisionHeight : i : 0 < a ? e.top += a : 0 < s ? e.top -= s : e.top = x(e.top - r, e.top)
            }
        },
        flip: {
            left: function(e, t) {
                var n = (l = t.within).offset.left + l.scrollLeft
                  , i = l.width
                  , o = l.isWindow ? l.scrollLeft : l.offset.left
                  , r = (c = e.left - t.collisionPosition.marginLeft) - o
                  , a = c + t.collisionWidth - i - o
                  , s = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0
                  , l = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0
                  , c = -2 * t.offset[0];
                r < 0 ? ((n = e.left + s + l + c + t.collisionWidth - i - n) < 0 || n < E(r)) && (e.left += s + l + c) : 0 < a && (0 < (o = e.left - t.collisionPosition.marginLeft + s + l + c - o) || E(o) < a) && (e.left += s + l + c)
            },
            top: function(e, t) {
                var n = (l = t.within).offset.top + l.scrollTop
                  , i = l.height
                  , o = l.isWindow ? l.scrollTop : l.offset.top
                  , r = (c = e.top - t.collisionPosition.marginTop) - o
                  , a = c + t.collisionHeight - i - o
                  , s = "top" === t.my[1] ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0
                  , l = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0
                  , c = -2 * t.offset[1];
                r < 0 ? ((n = e.top + s + l + c + t.collisionHeight - i - n) < 0 || n < E(r)) && (e.top += s + l + c) : 0 < a && (0 < (o = e.top - t.collisionPosition.marginTop + s + l + c - o) || E(o) < a) && (e.top += s + l + c)
            }
        },
        flipfit: {
            left: function() {
                C.ui.position.flip.left.apply(this, arguments),
                C.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                C.ui.position.flip.top.apply(this, arguments),
                C.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    C.ui.position,
    C.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    },
    C.fn.extend({
        uniqueId: (e = 0,
        function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++e)
            })
        }
        ),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && C(this).removeAttr("id")
            })
        }
    }),
    C.ui.safeActiveElement = function(t) {
        var n;
        try {
            n = t.activeElement
        } catch (e) {
            n = t.body
        }
        return n = (n = n || t.body).nodeName ? n : t.body
    }
    ,
    C.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element,
            this.mouseHandled = !1,
            this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }),
            this._addClass("ui-menu", "ui-widget ui-widget-content"),
            this._on({
                "mousedown .ui-menu-item": function(e) {
                    e.preventDefault()
                },
                "click .ui-menu-item": function(e) {
                    var t = C(e.target)
                      , n = C(C.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && t.not(".ui-state-disabled").length && (this.select(e),
                    e.isPropagationStopped() || (this.mouseHandled = !0),
                    t.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]),
                    this.active) && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer))
                },
                "mouseenter .ui-menu-item": function(e) {
                    var t, n;
                    this.previousFilter || (t = C(e.target).closest(".ui-menu-item"),
                    n = C(e.currentTarget),
                    t[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"),
                    this.focus(e, n)))
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(e, t) {
                    var n = this.active || this.element.find(this.options.items).eq(0);
                    t || this.focus(e, n)
                },
                blur: function(e) {
                    this._delay(function() {
                        C.contains(this.element[0], C.ui.safeActiveElement(this.document[0])) || this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }),
            this.refresh(),
            this._on(this.document, {
                click: function(e) {
                    this._closeOnDocumentClick(e) && this.collapseAll(e),
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),
            e.children().each(function() {
                var e = C(this);
                e.data("ui-menu-submenu-caret") && e.remove()
            })
        },
        _keydown: function(e) {
            var t, n, i, o = !0;
            switch (e.keyCode) {
            case C.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;
            case C.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;
            case C.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;
            case C.ui.keyCode.END:
                this._move("last", "last", e);
                break;
            case C.ui.keyCode.UP:
                this.previous(e);
                break;
            case C.ui.keyCode.DOWN:
                this.next(e);
                break;
            case C.ui.keyCode.LEFT:
                this.collapse(e);
                break;
            case C.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;
            case C.ui.keyCode.ENTER:
            case C.ui.keyCode.SPACE:
                this._activate(e);
                break;
            case C.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;
            default:
                t = this.previousFilter || "",
                i = o = !1,
                n = 96 <= e.keyCode && e.keyCode <= 105 ? (e.keyCode - 96).toString() : String.fromCharCode(e.keyCode),
                clearTimeout(this.filterTimer),
                n === t ? i = !0 : n = t + n,
                t = this._filterMenuItems(n),
                (t = i && -1 !== t.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : t).length || (n = String.fromCharCode(e.keyCode),
                t = this._filterMenuItems(n)),
                t.length ? (this.focus(e, t),
                this.previousFilter = n,
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter
            }
            o && e.preventDefault()
        },
        _activate: function(e) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
        },
        refresh: function() {
            var e, t, i = this, o = this.options.icons.submenu, n = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length),
            t = n.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = C(this)
                  , t = e.prev()
                  , n = C("<span>").data("ui-menu-submenu-caret", !0);
                i._addClass(n, "ui-menu-icon", "ui-icon " + o),
                t.attr("aria-haspopup", "true").prepend(n),
                e.attr("aria-labelledby", t.attr("id"))
            }),
            this._addClass(t, "ui-menu", "ui-widget ui-widget-content ui-front"),
            (e = n.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                var e = C(this);
                i._isDivider(e) && i._addClass(e, "ui-menu-divider", "ui-widget-content")
            }),
            n = (t = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }),
            this._addClass(t, "ui-menu-item")._addClass(n, "ui-menu-item-wrapper"),
            e.filter(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active && !C.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(e, t) {
            var n;
            "icons" === e && (n = this.element.find(".ui-menu-icon"),
            this._removeClass(n, null, this.options.icons.submenu)._addClass(n, null, t.submenu)),
            this._super(e, t)
        },
        _setOptionDisabled: function(e) {
            this._super(e),
            this.element.attr("aria-disabled", String(e)),
            this._toggleClass(null, "ui-state-disabled", !!e)
        },
        focus: function(e, t) {
            var n;
            this.blur(e, e && "focus" === e.type),
            this._scrollIntoView(t),
            this.active = t.first(),
            n = this.active.children(".ui-menu-item-wrapper"),
            this._addClass(n, null, "ui-state-active"),
            this.options.role && this.element.attr("aria-activedescendant", n.attr("id")),
            n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),
            this._addClass(n, null, "ui-state-active"),
            e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay),
            (n = t.children(".ui-menu")).length && e && /^mouse/.test(e.type) && this._startOpening(n),
            this.activeMenu = t.parent(),
            this._trigger("focus", e, {
                item: t
            })
        },
        _scrollIntoView: function(e) {
            var t, n, i;
            this._hasScroll() && (n = parseFloat(C.css(this.activeMenu[0], "borderTopWidth")) || 0,
            i = parseFloat(C.css(this.activeMenu[0], "paddingTop")) || 0,
            t = e.offset().top - this.activeMenu.offset().top - n - i,
            n = this.activeMenu.scrollTop(),
            i = this.activeMenu.height(),
            e = e.outerHeight(),
            t < 0 ? this.activeMenu.scrollTop(n + t) : i < t + e && this.activeMenu.scrollTop(n + t - i + e))
        },
        blur: function(e, t) {
            t || clearTimeout(this.timer),
            this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"),
            this._trigger("blur", e, {
                item: this.active
            }),
            this.active = null)
        },
        _startOpening: function(e) {
            clearTimeout(this.timer),
            "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(),
                this._open(e)
            }, this.delay))
        },
        _open: function(e) {
            var t = C.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer),
            this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
            e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(t)
        },
        collapseAll: function(t, n) {
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                var e = n ? this.element : C(t && t.target).closest(this.element.find(".ui-menu"));
                e.length || (e = this.element),
                this._close(e),
                this.blur(t),
                this._removeClass(e.find(".ui-state-active"), null, "ui-state-active"),
                this.activeMenu = e
            }, this.delay)
        },
        _close: function(e) {
            (e = e || (this.active ? this.active.parent() : this.element)).find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(e) {
            return !C(e.target).closest(".ui-menu").length
        },
        _isDivider: function(e) {
            return !/[^\-\u2014\u2013\s]/.test(e.text())
        },
        collapse: function(e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(),
            this.focus(e, t))
        },
        expand: function(e) {
            var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            t && t.length && (this._open(t.parent()),
            this._delay(function() {
                this.focus(e, t)
            }))
        },
        next: function(e) {
            this._move("next", "first", e)
        },
        previous: function(e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(e, t, n) {
            var i;
            (i = this.active ? "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0) : i) && i.length && this.active || (i = this.activeMenu.find(this.options.items)[t]()),
            this.focus(n, i)
        },
        nextPage: function(e) {
            var t, n, i;
            this.active ? this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top,
            i = this.element.height(),
            this.active.nextAll(".ui-menu-item").each(function() {
                return (t = C(this)).offset().top - n - i < 0
            }),
            this.focus(e, t)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(e)
        },
        previousPage: function(e) {
            var t, n, i;
            this.active ? this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top,
            i = this.element.height(),
            this.active.prevAll(".ui-menu-item").each(function() {
                return 0 < (t = C(this)).offset().top - n + i
            }),
            this.focus(e, t)) : this.focus(e, this.activeMenu.find(this.options.items).first())) : this.next(e)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || C(e.target).closest(".ui-menu-item");
            var t = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0),
            this._trigger("select", e, t)
        },
        _filterMenuItems: function(e) {
            var e = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
              , t = new RegExp("^" + e,"i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return t.test(C.trim(C(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    }),
    C.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var n, i, o, e = "textarea" === (t = this.element[0].nodeName.toLowerCase()), t = "input" === t;
            this.isMultiLine = e || !t && this._isContentEditable(this.element),
            this.valueMethod = this.element[e || t ? "val" : "text"],
            this.isNewMenu = !0,
            this._addClass("ui-autocomplete-input"),
            this.element.attr("autocomplete", "off"),
            this._on(this.element, {
                keydown: function(e) {
                    if (this.element.prop("readOnly"))
                        i = o = n = !0;
                    else {
                        i = o = n = !1;
                        var t = C.ui.keyCode;
                        switch (e.keyCode) {
                        case t.PAGE_UP:
                            n = !0,
                            this._move("previousPage", e);
                            break;
                        case t.PAGE_DOWN:
                            n = !0,
                            this._move("nextPage", e);
                            break;
                        case t.UP:
                            n = !0,
                            this._keyEvent("previous", e);
                            break;
                        case t.DOWN:
                            n = !0,
                            this._keyEvent("next", e);
                            break;
                        case t.ENTER:
                            this.menu.active && (n = !0,
                            e.preventDefault(),
                            this.menu.select(e));
                            break;
                        case t.TAB:
                            this.menu.active && this.menu.select(e);
                            break;
                        case t.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term),
                            this.close(e),
                            e.preventDefault());
                            break;
                        default:
                            i = !0,
                            this._searchTimeout(e)
                        }
                    }
                },
                keypress: function(e) {
                    if (n)
                        n = !1,
                        this.isMultiLine && !this.menu.element.is(":visible") || e.preventDefault();
                    else if (!i) {
                        var t = C.ui.keyCode;
                        switch (e.keyCode) {
                        case t.PAGE_UP:
                            this._move("previousPage", e);
                            break;
                        case t.PAGE_DOWN:
                            this._move("nextPage", e);
                            break;
                        case t.UP:
                            this._keyEvent("previous", e);
                            break;
                        case t.DOWN:
                            this._keyEvent("next", e)
                        }
                    }
                },
                input: function(e) {
                    o ? (o = !1,
                    e.preventDefault()) : this._searchTimeout(e)
                },
                focus: function() {
                    this.selectedItem = null,
                    this.previous = this._value()
                },
                blur: function(e) {
                    this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching),
                    this.close(e),
                    this._change(e))
                }
            }),
            this._initSource(),
            this.menu = C("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"),
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
            this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(),
                    this.cancelBlur = !0,
                    this._delay(function() {
                        delete this.cancelBlur,
                        this.element[0] !== C.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    })
                },
                menufocus: function(e, t) {
                    var n;
                    this.isNewMenu && (this.isNewMenu = !1,
                    e.originalEvent) && /^mouse/.test(e.originalEvent.type) ? (this.menu.blur(),
                    this.document.one("mousemove", function() {
                        C(e.target).trigger(e.originalEvent)
                    })) : (n = t.item.data("ui-autocomplete-item"),
                    !1 !== this._trigger("focus", e, {
                        item: n
                    }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value),
                    (n = t.item.attr("aria-label") || n.value) && C.trim(n).length && (this.liveRegion.children().hide(),
                    C("<div>").text(n).appendTo(this.liveRegion)))
                },
                menuselect: function(e, t) {
                    var n = t.item.data("ui-autocomplete-item")
                      , i = this.previous;
                    this.element[0] !== C.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"),
                    this.previous = i,
                    this._delay(function() {
                        this.previous = i,
                        this.selectedItem = n
                    })),
                    !1 !== this._trigger("select", e, {
                        item: n
                    }) && this._value(n.value),
                    this.term = this._value(),
                    this.close(e),
                    this.selectedItem = n
                }
            }),
            this.liveRegion = C("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body),
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching),
            this.element.removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this._super(e, t),
            "source" === e && this._initSource(),
            "appendTo" === e && this.menu.element.appendTo(this._appendTo()),
            "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(e) {
            var t = this.menu.element[0];
            return e.target === this.element[0] || e.target === t || C.contains(t, e.target)
        },
        _closeOnClickOutside: function(e) {
            this._isEventTargetInWidget(e) || this.close()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e = (e = (e = e && (e.jquery || e.nodeType ? C(e) : this.document.find(e).eq(0))) && e[0] ? e : this.element.closest(".ui-front, dialog")).length ? e : this.document[0].body
        },
        _initSource: function() {
            var n, i, o = this;
            C.isArray(this.options.source) ? (n = this.options.source,
            this.source = function(e, t) {
                t(C.ui.autocomplete.filter(n, e.term))
            }
            ) : "string" == typeof this.options.source ? (i = this.options.source,
            this.source = function(e, t) {
                o.xhr && o.xhr.abort(),
                o.xhr = C.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(e) {
                        t(e)
                    },
                    error: function() {
                        t([])
                    }
                })
            }
            ) : this.source = this.options.source
        },
        _searchTimeout: function(i) {
            clearTimeout(this.searching),
            this.searching = this._delay(function() {
                var e = this.term === this._value()
                  , t = this.menu.element.is(":visible")
                  , n = i.altKey || i.ctrlKey || i.metaKey || i.shiftKey;
                e && (!e || t || n) || (this.selectedItem = null,
                this.search(null, i))
            }, this.options.delay)
        },
        search: function(e, t) {
            return e = null != e ? e : this._value(),
            this.term = this._value(),
            e.length < this.options.minLength ? this.close(t) : !1 !== this._trigger("search", t) ? this._search(e) : void 0
        },
        _search: function(e) {
            this.pending++,
            this._addClass("ui-autocomplete-loading"),
            this.cancelSearch = !1,
            this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var t = ++this.requestIndex;
            return C.proxy(function(e) {
                t === this.requestIndex && this.__response(e),
                this.pending--,
                this.pending || this._removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(e) {
            e = e && this._normalize(e),
            this._trigger("response", null, {
                content: e
            }),
            !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e),
            this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0,
            this._close(e)
        },
        _close: function(e) {
            this._off(this.document, "mousedown"),
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.blur(),
            this.isNewMenu = !0,
            this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : C.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : C.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label
                })
            })
        },
        _suggest: function(e) {
            var t = this.menu.element.empty();
            this._renderMenu(t, e),
            this.isNewMenu = !0,
            this.menu.refresh(),
            t.show(),
            this._resizeMenu(),
            t.position(C.extend({
                of: this.element
            }, this.options.position)),
            this.options.autoFocus && this.menu.next(),
            this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(n, e) {
            var i = this;
            C.each(e, function(e, t) {
                i._renderItemData(n, t)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(e, t) {
            return C("<li>").append(C("<div>").text(t.label)).appendTo(e)
        },
        _move: function(e, t) {
            if (this.menu.element.is(":visible"))
                return this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term),
                void this.menu.blur()) : void this.menu[e](t);
            this.search(null, t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(e, t),
            t.preventDefault())
        },
        _isContentEditable: function(e) {
            var t;
            return !!e.length && ("inherit" === (t = e.prop("contentEditable")) ? this._isContentEditable(e.parent()) : "true" === t)
        }
    }),
    C.extend(C.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(e, t) {
            var n = new RegExp(C.ui.autocomplete.escapeRegex(t),"i");
            return C.grep(e, function(e) {
                return n.test(e.label || e.value || e)
            })
        }
    }),
    C.widget("ui.autocomplete", C.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (1 < e ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var t;
            this._superApply(arguments),
            this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults,
            this.liveRegion.children().hide(),
            C("<div>").text(t).appendTo(this.liveRegion))
        }
    }),
    C.ui.autocomplete
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = e || self).bootstrap = {}, e.jQuery)
}(this, function(e, u) {
    "use strict";
    function P(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function t(e, t, n) {
        t && P(e.prototype, t),
        n && P(e, n)
    }
    function r(i) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {}
              , t = Object.keys(o);
            (t = "function" == typeof Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable
            })) : t).forEach(function(e) {
                var t = i
                  , n = o[e = e];
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n
            })
        }
        return i
    }
    u = u && u.hasOwnProperty("default") ? u.default : u;
    var H = "transitionend";
    var d = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()),
            document.getElementById(e); )
                ;
            return e
        },
        getSelectorFromElement: function(e) {
            var t, n = e.getAttribute("data-target");
            n && "#" !== n || (n = (t = e.getAttribute("href")) && "#" !== t ? t.trim() : "");
            try {
                return document.querySelector(n) ? n : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            var t, n, i;
            return e && (t = u(e).css("transition-duration"),
            e = u(e).css("transition-delay"),
            n = parseFloat(t),
            i = parseFloat(e),
            n || i) ? (t = t.split(",")[0],
            e = e.split(",")[0],
            1e3 * (parseFloat(t) + parseFloat(e))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            u(e).trigger(H)
        },
        supportsTransitionEnd: function() {
            return Boolean(H)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i]
                      , r = t[i]
                      , r = r && d.isElement(r) ? "element" : {}.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(o).test(r))
                        throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + r + '" but expected type "' + o + '".')
                }
        },
        findShadowRoot: function(e) {
            return document.documentElement.attachShadow ? "function" != typeof e.getRootNode ? e instanceof ShadowRoot ? e : e.parentNode ? d.findShadowRoot(e.parentNode) : null : (e = e.getRootNode())instanceof ShadowRoot ? e : null : null
        }
    }
      , M = (u.fn.emulateTransitionEnd = function(e) {
        var t = this
          , n = !1;
        return u(this).one(d.TRANSITION_END, function() {
            n = !0
        }),
        setTimeout(function() {
            n || d.triggerTransitionEnd(t)
        }, e),
        this
    }
    ,
    u.event.special[d.TRANSITION_END] = {
        bindType: H,
        delegateType: H,
        handle: function(e) {
            if (u(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments)
        }
    },
    "alert")
      , R = "bs.alert"
      , n = "." + R
      , W = u.fn[M]
      , q = {
        CLOSE: "close" + n,
        CLOSED: "closed" + n,
        CLICK_DATA_API: "click" + n + ".data-api"
    }
      , i = ((n = o.prototype).close = function(e) {
        var t = this._element;
        e && (t = this._getRootElement(e)),
        this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
    }
    ,
    n.dispose = function() {
        u.removeData(this._element, R),
        this._element = null
    }
    ,
    n._getRootElement = function(e) {
        var t = d.getSelectorFromElement(e)
          , n = !1;
        return n = (n = t ? document.querySelector(t) : n) || u(e).closest(".alert")[0]
    }
    ,
    n._triggerCloseEvent = function(e) {
        var t = u.Event(q.CLOSE);
        return u(e).trigger(t),
        t
    }
    ,
    n._removeElement = function(t) {
        var e, n = this;
        u(t).removeClass("show"),
        u(t).hasClass("fade") ? (e = d.getTransitionDurationFromElement(t),
        u(t).one(d.TRANSITION_END, function(e) {
            return n._destroyElement(t, e)
        }).emulateTransitionEnd(e)) : this._destroyElement(t)
    }
    ,
    n._destroyElement = function(e) {
        u(e).detach().trigger(q.CLOSED).remove()
    }
    ,
    o._jQueryInterface = function(n) {
        return this.each(function() {
            var e = u(this)
              , t = e.data(R);
            t || (t = new o(this),
            e.data(R, t)),
            "close" === n && t[n](this)
        })
    }
    ,
    o._handleDismiss = function(t) {
        return function(e) {
            e && e.preventDefault(),
            t.close(this)
        }
    }
    ,
    t(o, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }]),
    o);
    function o(e) {
        this._element = e
    }
    u(document).on(q.CLICK_DATA_API, '[data-dismiss="alert"]', i._handleDismiss(new i)),
    u.fn[M] = i._jQueryInterface,
    u.fn[M].Constructor = i,
    u.fn[M].noConflict = function() {
        return u.fn[M] = W,
        i._jQueryInterface
    }
    ;
    var F = "button"
      , B = "bs.button"
      , n = "." + B
      , a = ".data-api"
      , U = u.fn[F]
      , z = "active"
      , s = '[data-toggle^="button"]'
      , n = {
        CLICK_DATA_API: "click" + n + a,
        FOCUS_BLUR_DATA_API: "focus" + n + a + " blur" + n + a
    }
      , V = ((a = Q.prototype).toggle = function() {
        var e = !0
          , t = !0
          , n = u(this._element).closest('[data-toggle="buttons"]')[0];
        if (n) {
            var i, o = this._element.querySelector('input:not([type="hidden"])');
            if (o) {
                if ("radio" === o.type && (o.checked && this._element.classList.contains(z) ? e = !1 : (i = n.querySelector(".active")) && u(i).removeClass(z)),
                e) {
                    if (o.hasAttribute("disabled") || n.hasAttribute("disabled") || o.classList.contains("disabled") || n.classList.contains("disabled"))
                        return;
                    o.checked = !this._element.classList.contains(z),
                    u(o).trigger("change")
                }
                o.focus(),
                t = !1
            }
        }
        t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(z)),
        e && u(this._element).toggleClass(z)
    }
    ,
    a.dispose = function() {
        u.removeData(this._element, B),
        this._element = null
    }
    ,
    Q._jQueryInterface = function(t) {
        return this.each(function() {
            var e = u(this).data(B);
            e || (e = new Q(this),
            u(this).data(B, e)),
            "toggle" === t && e[t]()
        })
    }
    ,
    t(Q, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }]),
    Q);
    function Q(e) {
        this._element = e
    }
    u(document).on(n.CLICK_DATA_API, s, function(e) {
        e.preventDefault();
        e = e.target;
        u(e).hasClass("btn") || (e = u(e).closest(".btn")),
        V._jQueryInterface.call(u(e), "toggle")
    }).on(n.FOCUS_BLUR_DATA_API, s, function(e) {
        var t = u(e.target).closest(".btn")[0];
        u(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }),
    u.fn[F] = V._jQueryInterface,
    u.fn[F].Constructor = V,
    u.fn[F].noConflict = function() {
        return u.fn[F] = U,
        V._jQueryInterface
    }
    ;
    var l = "carousel"
      , G = "bs.carousel"
      , c = "." + G
      , a = ".data-api"
      , K = u.fn[l]
      , X = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , Y = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , J = "next"
      , Z = "prev"
      , h = {
        SLIDE: "slide" + c,
        SLID: "slid" + c,
        KEYDOWN: "keydown" + c,
        MOUSEENTER: "mouseenter" + c,
        MOUSELEAVE: "mouseleave" + c,
        TOUCHSTART: "touchstart" + c,
        TOUCHMOVE: "touchmove" + c,
        TOUCHEND: "touchend" + c,
        POINTERDOWN: "pointerdown" + c,
        POINTERUP: "pointerup" + c,
        DRAG_START: "dragstart" + c,
        LOAD_DATA_API: "load" + c + a,
        CLICK_DATA_API: "click" + c + a
    }
      , f = "active"
      , ee = ".active.carousel-item"
      , te = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , p = ((n = m.prototype).next = function() {
        this._isSliding || this._slide(J)
    }
    ,
    n.nextWhenVisible = function() {
        !document.hidden && u(this._element).is(":visible") && "hidden" !== u(this._element).css("visibility") && this.next()
    }
    ,
    n.prev = function() {
        this._isSliding || this._slide(Z)
    }
    ,
    n.pause = function(e) {
        e || (this._isPaused = !0),
        this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (d.triggerTransitionEnd(this._element),
        this.cycle(!0)),
        clearInterval(this._interval),
        this._interval = null
    }
    ,
    n.cycle = function(e) {
        e || (this._isPaused = !1),
        this._interval && (clearInterval(this._interval),
        this._interval = null),
        this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
    }
    ,
    n.to = function(e) {
        var t = this
          , n = (this._activeElement = this._element.querySelector(ee),
        this._getItemIndex(this._activeElement));
        e > this._items.length - 1 || e < 0 || (this._isSliding ? u(this._element).one(h.SLID, function() {
            return t.to(e)
        }) : n === e ? (this.pause(),
        this.cycle()) : this._slide(n < e ? J : Z, this._items[e]))
    }
    ,
    n.dispose = function() {
        u(this._element).off(c),
        u.removeData(this._element, G),
        this._items = null,
        this._config = null,
        this._element = null,
        this._interval = null,
        this._isPaused = null,
        this._isSliding = null,
        this._activeElement = null,
        this._indicatorsElement = null
    }
    ,
    n._getConfig = function(e) {
        return e = r({}, X, e),
        d.typeCheckConfig(l, e, Y),
        e
    }
    ,
    n._handleSwipe = function() {
        var e = Math.abs(this.touchDeltaX);
        e <= 40 || (0 < (e = e / this.touchDeltaX) && this.prev(),
        e < 0 && this.next())
    }
    ,
    n._addEventListeners = function() {
        var t = this;
        this._config.keyboard && u(this._element).on(h.KEYDOWN, function(e) {
            return t._keydown(e)
        }),
        "hover" === this._config.pause && u(this._element).on(h.MOUSEENTER, function(e) {
            return t.pause(e)
        }).on(h.MOUSELEAVE, function(e) {
            return t.cycle(e)
        }),
        this._config.touch && this._addTouchEventListeners()
    }
    ,
    n._addTouchEventListeners = function() {
        var e, t, n = this;
        this._touchSupported && (e = function(e) {
            n._pointerEvent && te[e.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = e.originalEvent.clientX : n._pointerEvent || (n.touchStartX = e.originalEvent.touches[0].clientX)
        }
        ,
        t = function(e) {
            n._pointerEvent && te[e.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = e.originalEvent.clientX - n.touchStartX),
            n._handleSwipe(),
            "hover" === n._config.pause && (n.pause(),
            n.touchTimeout && clearTimeout(n.touchTimeout),
            n.touchTimeout = setTimeout(function(e) {
                return n.cycle(e)
            }, 500 + n._config.interval))
        }
        ,
        u(this._element.querySelectorAll(".carousel-item img")).on(h.DRAG_START, function(e) {
            return e.preventDefault()
        }),
        this._pointerEvent ? (u(this._element).on(h.POINTERDOWN, e),
        u(this._element).on(h.POINTERUP, t),
        this._element.classList.add("pointer-event")) : (u(this._element).on(h.TOUCHSTART, e),
        u(this._element).on(h.TOUCHMOVE, function(e) {
            (e = e).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
        }),
        u(this._element).on(h.TOUCHEND, t)))
    }
    ,
    n._keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName))
            switch (e.which) {
            case 37:
                e.preventDefault(),
                this.prev();
                break;
            case 39:
                e.preventDefault(),
                this.next()
            }
    }
    ,
    n._getItemIndex = function(e) {
        return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [],
        this._items.indexOf(e)
    }
    ,
    n._getItemByDirection = function(e, t) {
        var n = e === J
          , i = e === Z
          , o = this._getItemIndex(t)
          , r = this._items.length - 1;
        return (i && 0 === o || n && o === r) && !this._config.wrap ? t : -1 == (i = (o + (e === Z ? -1 : 1)) % this._items.length) ? this._items[this._items.length - 1] : this._items[i]
    }
    ,
    n._triggerSlideEvent = function(e, t) {
        var n = this._getItemIndex(e)
          , i = this._getItemIndex(this._element.querySelector(ee))
          , e = u.Event(h.SLIDE, {
            relatedTarget: e,
            direction: t,
            from: i,
            to: n
        });
        return u(this._element).trigger(e),
        e
    }
    ,
    n._setActiveIndicatorElement = function(e) {
        var t;
        this._indicatorsElement && (t = [].slice.call(this._indicatorsElement.querySelectorAll(".active")),
        u(t).removeClass(f),
        t = this._indicatorsElement.children[this._getItemIndex(e)]) && u(t).addClass(f)
    }
    ,
    n._slide = function(e, t) {
        var n, i, o, r = this, a = this._element.querySelector(ee), s = this._getItemIndex(a), l = t || a && this._getItemByDirection(e, a), t = this._getItemIndex(l), c = Boolean(this._interval), e = e === J ? (n = "carousel-item-left",
        i = "carousel-item-next",
        "left") : (n = "carousel-item-right",
        i = "carousel-item-prev",
        "right");
        l && u(l).hasClass(f) ? this._isSliding = !1 : !this._triggerSlideEvent(l, e).isDefaultPrevented() && a && l && (this._isSliding = !0,
        c && this.pause(),
        this._setActiveIndicatorElement(l),
        o = u.Event(h.SLID, {
            relatedTarget: l,
            direction: e,
            from: s,
            to: t
        }),
        u(this._element).hasClass("slide") ? (u(l).addClass(i),
        d.reflow(l),
        u(a).addClass(n),
        u(l).addClass(n),
        e = parseInt(l.getAttribute("data-interval"), 10),
        this._config.interval = e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
        e) : this._config.defaultInterval || this._config.interval,
        s = d.getTransitionDurationFromElement(a),
        u(a).one(d.TRANSITION_END, function() {
            u(l).removeClass(n + " " + i).addClass(f),
            u(a).removeClass(f + " " + i + " " + n),
            r._isSliding = !1,
            setTimeout(function() {
                return u(r._element).trigger(o)
            }, 0)
        }).emulateTransitionEnd(s)) : (u(a).removeClass(f),
        u(l).addClass(f),
        this._isSliding = !1,
        u(this._element).trigger(o)),
        c) && this.cycle()
    }
    ,
    m._jQueryInterface = function(i) {
        return this.each(function() {
            var e = u(this).data(G)
              , t = r({}, X, u(this).data())
              , n = ("object" == typeof i && (t = r({}, t, i)),
            "string" == typeof i ? i : t.slide);
            if (e || (e = new m(this,t),
            u(this).data(G, e)),
            "number" == typeof i)
                e.to(i);
            else if ("string" == typeof n) {
                if (void 0 === e[n])
                    throw new TypeError('No method named "' + n + '"');
                e[n]()
            } else
                t.interval && t.ride && (e.pause(),
                e.cycle())
        })
    }
    ,
    m._dataApiClickHandler = function(e) {
        var t, n, i = d.getSelectorFromElement(this);
        i && (i = u(i)[0]) && u(i).hasClass("carousel") && (t = r({}, u(i).data(), u(this).data()),
        (n = this.getAttribute("data-slide-to")) && (t.interval = !1),
        m._jQueryInterface.call(u(i), t),
        n && u(i).data(G).to(n),
        e.preventDefault())
    }
    ,
    t(m, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }, {
        key: "Default",
        get: function() {
            return X
        }
    }]),
    m);
    function m(e, t) {
        this._items = null,
        this._interval = null,
        this._activeElement = null,
        this._isPaused = !1,
        this._isSliding = !1,
        this.touchTimeout = null,
        this.touchStartX = 0,
        this.touchDeltaX = 0,
        this._config = this._getConfig(t),
        this._element = e,
        this._indicatorsElement = this._element.querySelector(".carousel-indicators"),
        this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints,
        this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
        this._addEventListeners()
    }
    u(document).on(h.CLICK_DATA_API, "[data-slide], [data-slide-to]", p._dataApiClickHandler),
    u(window).on(h.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
            var i = u(e[t]);
            p._jQueryInterface.call(i, i.data())
        }
    }),
    u.fn[l] = p._jQueryInterface,
    u.fn[l].Constructor = p,
    u.fn[l].noConflict = function() {
        return u.fn[l] = K,
        p._jQueryInterface
    }
    ;
    var g = "collapse"
      , v = "bs.collapse"
      , s = "." + v
      , ne = u.fn[g]
      , ie = {
        toggle: !0,
        parent: ""
    }
      , oe = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , re = {
        SHOW: "show" + s,
        SHOWN: "shown" + s,
        HIDE: "hide" + s,
        HIDDEN: "hidden" + s,
        CLICK_DATA_API: "click" + s + ".data-api"
    }
      , y = "show"
      , ae = "collapse"
      , se = "collapsing"
      , le = "collapsed"
      , ce = '[data-toggle="collapse"]'
      , ue = ((a = _.prototype).toggle = function() {
        u(this._element).hasClass(y) ? this.hide() : this.show()
    }
    ,
    a.show = function() {
        var e, t, n, i, o = this;
        this._isTransitioning || u(this._element).hasClass(y) || (e = this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
            return "string" == typeof o._config.parent ? e.getAttribute("data-parent") === o._config.parent : e.classList.contains(ae)
        })).length ? null : e) && (i = u(e).not(this._selector).data(v)) && i._isTransitioning || (n = u.Event(re.SHOW),
        u(this._element).trigger(n),
        n.isDefaultPrevented() || (e && (_._jQueryInterface.call(u(e).not(this._selector), "hide"),
        i || u(e).data(v, null)),
        t = this._getDimension(),
        u(this._element).removeClass(ae).addClass(se),
        this._element.style[t] = 0,
        this._triggerArray.length && u(this._triggerArray).removeClass(le).attr("aria-expanded", !0),
        this.setTransitioning(!0),
        n = "scroll" + (t[0].toUpperCase() + t.slice(1)),
        i = d.getTransitionDurationFromElement(this._element),
        u(this._element).one(d.TRANSITION_END, function() {
            u(o._element).removeClass(se).addClass(ae).addClass(y),
            o._element.style[t] = "",
            o.setTransitioning(!1),
            u(o._element).trigger(re.SHOWN)
        }).emulateTransitionEnd(i),
        this._element.style[t] = this._element[n] + "px"))
    }
    ,
    a.hide = function() {
        var e = this;
        if (!this._isTransitioning && u(this._element).hasClass(y)) {
            var t = u.Event(re.HIDE);
            if (u(this._element).trigger(t),
            !t.isDefaultPrevented()) {
                var t = this._getDimension()
                  , n = (this._element.style[t] = this._element.getBoundingClientRect()[t] + "px",
                d.reflow(this._element),
                u(this._element).addClass(se).removeClass(ae).removeClass(y),
                this._triggerArray.length);
                if (0 < n)
                    for (var i = 0; i < n; i++) {
                        var o = this._triggerArray[i]
                          , r = d.getSelectorFromElement(o);
                        null === r || u([].slice.call(document.querySelectorAll(r))).hasClass(y) || u(o).addClass(le).attr("aria-expanded", !1)
                    }
                this.setTransitioning(!0),
                this._element.style[t] = "";
                t = d.getTransitionDurationFromElement(this._element);
                u(this._element).one(d.TRANSITION_END, function() {
                    e.setTransitioning(!1),
                    u(e._element).removeClass(se).addClass(ae).trigger(re.HIDDEN)
                }).emulateTransitionEnd(t)
            }
        }
    }
    ,
    a.setTransitioning = function(e) {
        this._isTransitioning = e
    }
    ,
    a.dispose = function() {
        u.removeData(this._element, v),
        this._config = null,
        this._parent = null,
        this._element = null,
        this._triggerArray = null,
        this._isTransitioning = null
    }
    ,
    a._getConfig = function(e) {
        return (e = r({}, ie, e)).toggle = Boolean(e.toggle),
        d.typeCheckConfig(g, e, oe),
        e
    }
    ,
    a._getDimension = function() {
        return u(this._element).hasClass("width") ? "width" : "height"
    }
    ,
    a._getParent = function() {
        var e, n = this, t = (d.isElement(this._config.parent) ? (e = this._config.parent,
        void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent),
        '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'), t = [].slice.call(e.querySelectorAll(t));
        return u(t).each(function(e, t) {
            n._addAriaAndCollapsedClass(_._getTargetFromElement(t), [t])
        }),
        e
    }
    ,
    a._addAriaAndCollapsedClass = function(e, t) {
        e = u(e).hasClass(y);
        t.length && u(t).toggleClass(le, !e).attr("aria-expanded", e)
    }
    ,
    _._getTargetFromElement = function(e) {
        e = d.getSelectorFromElement(e);
        return e ? document.querySelector(e) : null
    }
    ,
    _._jQueryInterface = function(i) {
        return this.each(function() {
            var e = u(this)
              , t = e.data(v)
              , n = r({}, ie, e.data(), "object" == typeof i && i ? i : {});
            if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
            t || (t = new _(this,n),
            e.data(v, t)),
            "string" == typeof i) {
                if (void 0 === t[i])
                    throw new TypeError('No method named "' + i + '"');
                t[i]()
            }
        })
    }
    ,
    t(_, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }, {
        key: "Default",
        get: function() {
            return ie
        }
    }]),
    _);
    function _(t, e) {
        this._isTransitioning = !1,
        this._element = t,
        this._config = this._getConfig(e),
        this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
        for (var n = [].slice.call(document.querySelectorAll(ce)), i = 0, o = n.length; i < o; i++) {
            var r = n[i]
              , a = d.getSelectorFromElement(r)
              , s = [].slice.call(document.querySelectorAll(a)).filter(function(e) {
                return e === t
            });
            null !== a && 0 < s.length && (this._selector = a,
            this._triggerArray.push(r))
        }
        this._parent = this._config.parent ? this._getParent() : null,
        this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
        this._config.toggle && this.toggle()
    }
    u(document).on(re.CLICK_DATA_API, ce, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = u(this)
          , e = d.getSelectorFromElement(this)
          , e = [].slice.call(document.querySelectorAll(e));
        u(e).each(function() {
            var e = u(this)
              , t = e.data(v) ? "toggle" : n.data();
            ue._jQueryInterface.call(e, t)
        })
    }),
    u.fn[g] = ue._jQueryInterface,
    u.fn[g].Constructor = ue,
    u.fn[g].noConflict = function() {
        return u.fn[g] = ne,
        ue._jQueryInterface
    }
    ;
    for (var de = "undefined" != typeof window && "undefined" != typeof document, he = ["Edge", "Trident", "Firefox"], fe = 0, pe = 0; pe < he.length; pe += 1)
        if (de && 0 <= navigator.userAgent.indexOf(he[pe])) {
            fe = 1;
            break
        }
    var me = de && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, fe))
        }
    }
    ;
    function ge(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    function b(e, t) {
        return 1 !== e.nodeType ? [] : (e = e.ownerDocument.defaultView.getComputedStyle(e, null),
        t ? e[t] : e)
    }
    function ve(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function ye(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#document":
            return e.body
        }
        var t = b(e)
          , n = t.overflow
          , i = t.overflowX
          , t = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + t + i) ? e : ye(ve(e))
    }
    var _e = de && !(!window.MSInputMethodContext || !document.documentMode)
      , be = de && /MSIE 10/.test(navigator.userAgent);
    function we(e) {
        return 11 === e ? _e : 10 !== e && _e || be
    }
    function Ce(e) {
        if (!e)
            return document.documentElement;
        for (var t = we(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === b(n, "position") ? Ce(n) : n : (e ? e.ownerDocument : document).documentElement
    }
    function xe(e) {
        return null !== e.parentNode ? xe(e.parentNode) : e
    }
    function Ee(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , i = n ? e : t
          , n = n ? t : e
          , o = document.createRange();
        o.setStart(i, 0),
        o.setEnd(n, 0);
        o = o.commonAncestorContainer;
        return e !== o && t !== o || i.contains(n) ? "BODY" === (n = (i = o).nodeName) || "HTML" !== n && Ce(i.firstElementChild) !== i ? Ce(o) : o : (n = xe(e)).host ? Ee(n.host, t) : Ee(e, xe(t).host)
    }
    function Se(e, t) {
        var t = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft"
          , n = e.nodeName;
        return ("BODY" !== n && "HTML" !== n ? e : (n = e.ownerDocument.documentElement,
        e.ownerDocument.scrollingElement || n))[t]
    }
    function Te(e, t) {
        var t = "x" === t ? "Left" : "Top"
          , n = "Left" == t ? "Right" : "Bottom";
        return parseFloat(e["border" + t + "Width"], 10) + parseFloat(e["border" + n + "Width"], 10)
    }
    function $e(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], we(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }
    function ke(e) {
        var t = e.body
          , e = e.documentElement
          , n = we(10) && getComputedStyle(e);
        return {
            height: $e("Height", t, e, n),
            width: $e("Width", t, e, n)
        }
    }
    function Ae(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var n = function(e, t, n) {
        return t && De(e.prototype, t),
        n && De(e, n),
        e
    }
      , w = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n, i = arguments[t];
            for (n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
        }
        return e
    }
    ;
    function De(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function C(e) {
        return w({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function Ie(e) {
        var t = {};
        try {
            we(10) ? (t = e.getBoundingClientRect(),
            i = Se(e, "top"),
            o = Se(e, "left"),
            t.top += i,
            t.left += o,
            t.bottom += i,
            t.right += o) : t = e.getBoundingClientRect()
        } catch (e) {}
        var n, i = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
        }, o = "HTML" === e.nodeName ? ke(e.ownerDocument) : {}, t = o.width || e.clientWidth || i.right - i.left, o = o.height || e.clientHeight || i.bottom - i.top, t = e.offsetWidth - t, o = e.offsetHeight - o;
        return (t || o) && (t -= Te(n = b(e), "x"),
        o -= Te(n, "y"),
        i.width -= t,
        i.height -= o),
        C(i)
    }
    function Ne(e, t, n) {
        var n = 2 < arguments.length && void 0 !== n && n
          , i = we(10)
          , o = "HTML" === t.nodeName
          , r = Ie(e)
          , a = Ie(t)
          , e = ye(e)
          , s = b(t)
          , l = parseFloat(s.borderTopWidth, 10)
          , c = parseFloat(s.borderLeftWidth, 10)
          , a = (n && o && (a.top = Math.max(a.top, 0),
        a.left = Math.max(a.left, 0)),
        C({
            top: r.top - a.top - l,
            left: r.left - a.left - c,
            width: r.width,
            height: r.height
        }));
        return a.marginTop = 0,
        a.marginLeft = 0,
        !i && o && (r = parseFloat(s.marginTop, 10),
        o = parseFloat(s.marginLeft, 10),
        a.top -= l - r,
        a.bottom -= l - r,
        a.left -= c - o,
        a.right -= c - o,
        a.marginTop = r,
        a.marginLeft = o),
        a = (i && !n ? t.contains(e) : t === e && "BODY" !== e.nodeName) ? function(e, t, n) {
            var n = 2 < arguments.length && void 0 !== n && n
              , i = Se(t, "top")
              , t = Se(t, "left")
              , n = n ? -1 : 1;
            return e.top += i * n,
            e.bottom += i * n,
            e.left += t * n,
            e.right += t * n,
            e
        }(a, t) : a
    }
    function Le(e) {
        if (!e || !e.parentElement || we())
            return document.documentElement;
        for (var t = e.parentElement; t && "none" === b(t, "transform"); )
            t = t.parentElement;
        return t || document.documentElement
    }
    function Oe(e, t, n, i, o) {
        var r, o = 4 < arguments.length && void 0 !== o && o, a = {
            top: 0,
            left: 0
        }, s = o ? Le(e) : Ee(e, t), s = ("viewport" === i ? a = function(e, t) {
            var t = 1 < arguments.length && void 0 !== t && t
              , n = e.ownerDocument.documentElement
              , e = Ne(e, n)
              , i = Math.max(n.clientWidth, window.innerWidth || 0)
              , o = Math.max(n.clientHeight, window.innerHeight || 0)
              , r = t ? 0 : Se(n)
              , t = t ? 0 : Se(n, "left");
            return C({
                top: r - e.top + e.marginTop,
                left: t - e.left + e.marginLeft,
                width: i,
                height: o
            })
        }(s, o) : (r = void 0,
        "scrollParent" === i ? "BODY" === (r = ye(ve(t))).nodeName && (r = e.ownerDocument.documentElement) : r = "window" === i ? e.ownerDocument.documentElement : i,
        t = Ne(r, s, o),
        "HTML" !== r.nodeName || function e(t) {
            var n = t.nodeName;
            return "BODY" !== n && "HTML" !== n && ("fixed" === b(t, "position") || !!(n = ve(t)) && e(n))
        }(s) ? a = t : (o = (i = ke(e.ownerDocument)).height,
        r = i.width,
        a.top += t.top - t.marginTop,
        a.bottom = o + t.top,
        a.left += t.left - t.marginLeft,
        a.right = r + t.left)),
        "number" == typeof (n = n || 0));
        return a.left += s ? n : n.left || 0,
        a.top += s ? n : n.top || 0,
        a.right -= s ? n : n.right || 0,
        a.bottom -= s ? n : n.bottom || 0,
        a
    }
    function je(e, t, n, i, o, r) {
        var a, r = 5 < arguments.length && void 0 !== r ? r : 0;
        return -1 === e.indexOf("auto") ? e : (i = Oe(n, i, r, o),
        a = {
            top: {
                width: i.width,
                height: t.top - i.top
            },
            right: {
                width: i.right - t.right,
                height: i.height
            },
            bottom: {
                width: i.width,
                height: i.bottom - t.bottom
            },
            left: {
                width: t.left - i.left,
                height: i.height
            }
        },
        (0 < (o = (r = Object.keys(a).map(function(e) {
            return w({
                key: e
            }, a[e], {
                area: (e = a[e]).width * e.height
            })
        }).sort(function(e, t) {
            return t.area - e.area
        })).filter(function(e) {
            var t = e.width
              , e = e.height;
            return t >= n.clientWidth && e >= n.clientHeight
        })).length ? o : r)[0].key + ((t = e.split("-")[1]) ? "-" + t : ""))
    }
    function Pe(e, t, n, i) {
        i = 3 < arguments.length && void 0 !== i ? i : null;
        return Ne(n, i ? Le(t) : Ee(t, n), i)
    }
    function He(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e)
          , n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0)
          , t = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + t,
            height: e.offsetHeight + n
        }
    }
    function Me(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function Re(e, t, n) {
        n = n.split("-")[0];
        var e = He(e)
          , i = {
            width: e.width,
            height: e.height
        }
          , o = -1 !== ["right", "left"].indexOf(n)
          , r = o ? "top" : "left"
          , a = o ? "left" : "top"
          , s = o ? "height" : "width"
          , o = o ? "width" : "height";
        return i[r] = t[r] + t[s] / 2 - e[s] / 2,
        i[a] = n === a ? t[a] - e[o] : t[Me(a)],
        i
    }
    function We(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function qe(e, n, t) {
        return (void 0 === t ? e : e.slice(0, (e = e,
        i = t,
        Array.prototype.findIndex ? e.findIndex(function(e) {
            return e.name === i
        }) : (t = We(e, function(e) {
            return e.name === i
        }),
        e.indexOf(t))))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && ge(t) && (n.offsets.popper = C(n.offsets.popper),
            n.offsets.reference = C(n.offsets.reference),
            n = t(n, e))
        }),
        n;
        var i
    }
    function Fe(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }
    function Be(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var o = t[i]
              , o = o ? "" + o + n : e;
            if (void 0 !== document.body.style[o])
                return o
        }
        return null
    }
    function Ue(e) {
        e = e.ownerDocument;
        return e ? e.defaultView : window
    }
    function ze(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function Ve(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && ze(i[e]) && (t = "px"),
            n.style[e] = i[e] + t
        })
    }
    var Qe = de && /Firefox/i.test(navigator.userAgent);
    function Ge(e, t, n) {
        var i, o = We(e, function(e) {
            return e.name === t
        }), e = !!o && e.some(function(e) {
            return e.name === n && e.enabled && e.order < o.order
        });
        return e || (i = "`" + t + "`",
        console.warn("`" + n + "`" + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")),
        e
    }
    var s = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
      , Ke = s.slice(3);
    function Xe(e, t) {
        t = 1 < arguments.length && void 0 !== t && t,
        e = Ke.indexOf(e),
        e = Ke.slice(e + 1).concat(Ke.slice(0, e));
        return t ? e.reverse() : e
    }
    function Ye(e, s, l, t) {
        var o = [0, 0]
          , i = -1 !== ["right", "left"].indexOf(t)
          , t = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , e = t.indexOf(We(t, function(e) {
            return -1 !== e.search(/,|\s/)
        }))
          , n = (t[e] && -1 === t[e].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."),
        /\s*,\s*|\s+/);
        return (-1 !== e ? [t.slice(0, e).concat([t[e].split(n)[0]]), [t[e].split(n)[1]].concat(t.slice(e + 1))] : [t]).map(function(e, t) {
            var a = (1 === t ? !i : i) ? "height" : "width"
              , n = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                n = !0,
                e) : n ? (e[e.length - 1] += t,
                n = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return t = a,
                n = s,
                i = l,
                o = (e = e).match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                r = +o[1],
                o = o[2],
                r ? 0 !== o.indexOf("%") ? "vh" !== o && "vw" !== o ? r : ("vh" === o ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : C("%p" === o ? n : i)[t] / 100 * r : e;
                var t, n, i, o, r
            })
        }).forEach(function(n, i) {
            n.forEach(function(e, t) {
                ze(e) && (o[i] += e * ("-" === n[t - 1] ? -1 : 1))
            })
        }),
        o
    }
    var a = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t, n, i, o = e.placement, r = o.split("-")[0], o = o.split("-")[1];
                    return o && (t = (n = e.offsets).reference,
                    n = n.popper,
                    i = (r = -1 !== ["bottom", "top"].indexOf(r)) ? "width" : "height",
                    r = {
                        start: Ae({}, r = r ? "left" : "top", t[r]),
                        end: Ae({}, r, t[r] + t[i] - n[i])
                    },
                    e.offsets.popper = w({}, n, r[o])),
                    e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var t = t.offset
                      , n = e.placement
                      , i = e.offsets
                      , o = i.popper
                      , i = i.reference
                      , n = n.split("-")[0]
                      , t = ze(+t) ? [+t, 0] : Ye(t, o, i, n);
                    return "left" === n ? (o.top += t[0],
                    o.left -= t[1]) : "right" === n ? (o.top += t[0],
                    o.left += t[1]) : "top" === n ? (o.left += t[0],
                    o.top -= t[1]) : "bottom" === n && (o.left += t[0],
                    o.top += t[1]),
                    e.popper = o,
                    e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, i) {
                    var t = i.boundariesElement || Ce(e.instance.popper)
                      , n = (e.instance.reference === t && (t = Ce(t)),
                    Be("transform"))
                      , o = e.instance.popper.style
                      , r = o.top
                      , a = o.left
                      , s = o[n]
                      , l = (o.top = "",
                    o.left = "",
                    o[n] = "",
                    Oe(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed))
                      , t = (o.top = r,
                    o.left = a,
                    o[n] = s,
                    i.boundaries = l,
                    i.priority)
                      , c = e.offsets.popper
                      , u = {
                        primary: function(e) {
                            var t = c[e];
                            return c[e] < l[e] && !i.escapeWithReference && (t = Math.max(c[e], l[e])),
                            Ae({}, e, t)
                        },
                        secondary: function(e) {
                            var t = "right" === e ? "left" : "top"
                              , n = c[t];
                            return c[e] > l[e] && !i.escapeWithReference && (n = Math.min(c[t], l[e] - ("right" === e ? c.width : c.height))),
                            Ae({}, t, n)
                        }
                    };
                    return t.forEach(function(e) {
                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                        c = w({}, c, u[t](e))
                    }),
                    e.offsets.popper = c,
                    e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , n = t.popper
                      , t = t.reference
                      , i = e.placement.split("-")[0]
                      , o = Math.floor
                      , i = -1 !== ["top", "bottom"].indexOf(i)
                      , r = i ? "right" : "bottom"
                      , a = i ? "left" : "top"
                      , i = i ? "width" : "height";
                    return n[r] < o(t[a]) && (e.offsets.popper[a] = o(t[a]) - n[i]),
                    n[a] > o(t[r]) && (e.offsets.popper[a] = o(t[r])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    if (Ge(e.instance.modifiers, "arrow", "keepTogether")) {
                        t = t.element;
                        if ("string" == typeof t) {
                            if (!(t = e.instance.popper.querySelector(t)))
                                return e
                        } else if (!e.instance.popper.contains(t))
                            return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                            e;
                        var n = e.placement.split("-")[0]
                          , i = e.offsets
                          , o = i.popper
                          , i = i.reference
                          , n = -1 !== ["left", "right"].indexOf(n)
                          , r = n ? "height" : "width"
                          , a = n ? "Top" : "Left"
                          , s = a.toLowerCase()
                          , l = n ? "left" : "top"
                          , n = n ? "bottom" : "right"
                          , c = He(t)[r]
                          , n = (i[n] - c < o[s] && (e.offsets.popper[s] -= o[s] - (i[n] - c)),
                        i[s] + c > o[n] && (e.offsets.popper[s] += i[s] + c - o[n]),
                        e.offsets.popper = C(e.offsets.popper),
                        i[s] + i[r] / 2 - c / 2)
                          , i = b(e.instance.popper)
                          , u = parseFloat(i["margin" + a], 10)
                          , i = parseFloat(i["border" + a + "Width"], 10)
                          , a = n - e.offsets.popper[s] - u - i
                          , a = Math.max(Math.min(o[r] - c, a), 0);
                        e.arrowElement = t,
                        e.offsets.arrow = (Ae(n = {}, s, Math.round(a)),
                        Ae(n, l, ""),
                        n)
                    }
                    return e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(l, c) {
                    if (!(Fe(l.instance.modifiers, "inner") || l.flipped && l.placement === l.originalPlacement)) {
                        var u = Oe(l.instance.popper, l.instance.reference, c.padding, c.boundariesElement, l.positionFixed)
                          , d = l.placement.split("-")[0]
                          , h = Me(d)
                          , f = l.placement.split("-")[1] || ""
                          , p = [];
                        switch (c.behavior) {
                        case "flip":
                            p = [d, h];
                            break;
                        case "clockwise":
                            p = Xe(d);
                            break;
                        case "counterclockwise":
                            p = Xe(d, !0);
                            break;
                        default:
                            p = c.behavior
                        }
                        p.forEach(function(e, t) {
                            if (d !== e || p.length === t + 1)
                                return l;
                            d = l.placement.split("-")[0],
                            h = Me(d);
                            var e = l.offsets.popper
                              , n = l.offsets.reference
                              , i = Math.floor
                              , n = "left" === d && i(e.right) > i(n.left) || "right" === d && i(e.left) < i(n.right) || "top" === d && i(e.bottom) > i(n.top) || "bottom" === d && i(e.top) < i(n.bottom)
                              , o = i(e.left) < i(u.left)
                              , r = i(e.right) > i(u.right)
                              , a = i(e.top) < i(u.top)
                              , e = i(e.bottom) > i(u.bottom)
                              , i = "left" === d && o || "right" === d && r || "top" === d && a || "bottom" === d && e
                              , s = -1 !== ["top", "bottom"].indexOf(d)
                              , o = !!c.flipVariations && (s && "start" === f && o || s && "end" === f && r || !s && "start" === f && a || !s && "end" === f && e);
                            (n || i || o) && (l.flipped = !0,
                            (n || i) && (d = p[t + 1]),
                            o && (f = "end" === f ? "start" : "start" === f ? "end" : f),
                            l.placement = d + (f ? "-" + f : ""),
                            l.offsets.popper = w({}, l.offsets.popper, Re(l.instance.popper, l.offsets.reference, l.placement)),
                            l = qe(l.instance.modifiers, l, "flip"))
                        })
                    }
                    return l
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = e.offsets
                      , o = i.popper
                      , i = i.reference
                      , r = -1 !== ["left", "right"].indexOf(n)
                      , a = -1 === ["top", "left"].indexOf(n);
                    return o[r ? "left" : "top"] = i[n] - (a ? o[r ? "width" : "height"] : 0),
                    e.placement = Me(t),
                    e.offsets.popper = C(o),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (Ge(e.instance.modifiers, "hide", "preventOverflow")) {
                        var t = e.offsets.reference
                          , n = We(e.instance.modifiers, function(e) {
                            return "preventOverflow" === e.name
                        }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide)
                                return e;
                            e.hide = !0,
                            e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide)
                                return e;
                            e.hide = !1,
                            e.attributes["x-out-of-boundaries"] = !1
                        }
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x
                      , i = t.y
                      , o = e.offsets.popper
                      , r = We(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, s, l, r = void 0 !== r ? r : t.gpuAcceleration, t = Ce(e.instance.popper), c = Ie(t), o = {
                        position: o.position
                    }, u = (m = e,
                    l = window.devicePixelRatio < 2 || !Qe,
                    a = (f = m.offsets).popper,
                    f = f.reference,
                    u = Math.round,
                    d = Math.floor,
                    h = function(e) {
                        return e
                    }
                    ,
                    f = u(f.width),
                    p = u(a.width),
                    s = -1 !== ["left", "right"].indexOf(m.placement),
                    m = -1 !== m.placement.indexOf("-"),
                    g = l ? u : h,
                    {
                        left: (s = l ? s || m || f % 2 == p % 2 ? u : d : h)(f % 2 == 1 && p % 2 == 1 && !m && l ? a.left - 1 : a.left),
                        top: g(a.top),
                        bottom: g(a.bottom),
                        right: s(a.right)
                    }), d = "bottom" === n ? "top" : "bottom", h = "right" === i ? "left" : "right", f = Be("transform"), p = "bottom" == d ? "HTML" === t.nodeName ? -t.clientHeight + u.bottom : -c.height + u.bottom : u.top, m = "right" == h ? "HTML" === t.nodeName ? -t.clientWidth + u.right : -c.width + u.right : u.left, g = (r && f ? (o[f] = "translate3d(" + m + "px, " + p + "px, 0)",
                    o[d] = 0,
                    o[h] = 0,
                    o.willChange = "transform") : (l = "right" == h ? -1 : 1,
                    o[d] = p * ("bottom" == d ? -1 : 1),
                    o[h] = m * l,
                    o.willChange = d + ", " + h),
                    {
                        "x-placement": e.placement
                    });
                    return e.attributes = w({}, g, e.attributes),
                    e.styles = w({}, o, e.styles),
                    e.arrowStyles = w({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    var t, n;
                    return Ve(e.instance.popper, e.styles),
                    t = e.instance.popper,
                    n = e.attributes,
                    Object.keys(n).forEach(function(e) {
                        !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                    }),
                    e.arrowElement && Object.keys(e.arrowStyles).length && Ve(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, n, i, o) {
                    o = Pe(o, t, e, n.positionFixed),
                    o = je(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", o),
                    Ve(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    }
      , x = (n(Je, [{
        key: "update",
        value: function() {
            return function() {
                var e;
                this.state.isDestroyed || ((e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {}
                }).offsets.reference = Pe(this.state, this.popper, this.reference, this.options.positionFixed),
                e.placement = je(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                e.originalPlacement = e.placement,
                e.positionFixed = this.options.positionFixed,
                e.offsets.popper = Re(this.popper, e.offsets.reference, e.placement),
                e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                e = qe(this.modifiers, e),
                this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                this.options.onCreate(e)))
            }
            .call(this)
        }
    }, {
        key: "destroy",
        value: function() {
            return function() {
                return this.state.isDestroyed = !0,
                Fe(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                this.popper.style.position = "",
                this.popper.style.top = "",
                this.popper.style.left = "",
                this.popper.style.right = "",
                this.popper.style.bottom = "",
                this.popper.style.willChange = "",
                this.popper.style[Be("transform")] = ""),
                this.disableEventListeners(),
                this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                this
            }
            .call(this)
        }
    }, {
        key: "enableEventListeners",
        value: function() {
            return function() {
                var e, t, n;
                this.state.eventsEnabled || (this.state = (e = this.reference,
                this.options,
                t = this.state,
                n = this.scheduleUpdate,
                t.updateBound = n,
                Ue(e).addEventListener("resize", t.updateBound, {
                    passive: !0
                }),
                function e(t, n, i, o) {
                    var r = "BODY" === t.nodeName
                      , t = r ? t.ownerDocument.defaultView : t;
                    t.addEventListener(n, i, {
                        passive: !0
                    }),
                    r || e(ye(t.parentNode), n, i, o),
                    o.push(t)
                }(n = ye(e), "scroll", t.updateBound, t.scrollParents),
                t.scrollElement = n,
                t.eventsEnabled = !0,
                t))
            }
            .call(this)
        }
    }, {
        key: "disableEventListeners",
        value: function() {
            return function() {
                var e, t;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
                this.state = (e = this.reference,
                t = this.state,
                Ue(e).removeEventListener("resize", t.updateBound),
                t.scrollParents.forEach(function(e) {
                    e.removeEventListener("scroll", t.updateBound)
                }),
                t.updateBound = null,
                t.scrollParents = [],
                t.scrollElement = null,
                t.eventsEnabled = !1,
                t))
            }
            .call(this)
        }
    }]),
    Je);
    function Je(e, t) {
        var n = this
          , i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}
          , o = this;
        if (!(o instanceof Je))
            throw new TypeError("Cannot call a class as a function");
        this.scheduleUpdate = function() {
            return requestAnimationFrame(n.update)
        }
        ,
        this.update = me(this.update.bind(this)),
        this.options = w({}, Je.Defaults, i),
        this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
        },
        this.reference = e && e.jquery ? e[0] : e,
        this.popper = t && t.jquery ? t[0] : t,
        this.options.modifiers = {},
        Object.keys(w({}, Je.Defaults.modifiers, i.modifiers)).forEach(function(e) {
            n.options.modifiers[e] = w({}, Je.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
        }),
        this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
            return w({
                name: e
            }, n.options.modifiers[e])
        }).sort(function(e, t) {
            return e.order - t.order
        }),
        this.modifiers.forEach(function(e) {
            e.enabled && ge(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
        }),
        this.update();
        o = this.options.eventsEnabled;
        o && this.enableEventListeners(),
        this.state.eventsEnabled = o
    }
    x.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
    x.placements = s,
    x.Defaults = a;
    var Ze = "dropdown"
      , et = "bs.dropdown"
      , E = "." + et
      , n = ".data-api"
      , tt = u.fn[Ze]
      , nt = new RegExp("38|40|27")
      , S = {
        HIDE: "hide" + E,
        HIDDEN: "hidden" + E,
        SHOW: "show" + E,
        SHOWN: "shown" + E,
        CLICK: "click" + E,
        CLICK_DATA_API: "click" + E + n,
        KEYDOWN_DATA_API: "keydown" + E + n,
        KEYUP_DATA_API: "keyup" + E + n
    }
      , it = "disabled"
      , T = "show"
      , ot = "dropdown-menu-right"
      , rt = '[data-toggle="dropdown"]'
      , at = ".dropdown-menu"
      , st = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    }
      , lt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    }
      , $ = ((s = k.prototype).toggle = function() {
        if (!this._element.disabled && !u(this._element).hasClass(it)) {
            var e = k._getParentFromElement(this._element)
              , t = u(this._menu).hasClass(T);
            if (k._clearMenus(),
            !t) {
                var t = {
                    relatedTarget: this._element
                }
                  , n = u.Event(S.SHOW, t);
                if (u(e).trigger(n),
                !n.isDefaultPrevented()) {
                    if (!this._inNavbar) {
                        if (void 0 === x)
                            throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                        n = this._element;
                        "parent" === this._config.reference ? n = e : d.isElement(this._config.reference) && (n = this._config.reference,
                        void 0 !== this._config.reference.jquery) && (n = this._config.reference[0]),
                        "scrollParent" !== this._config.boundary && u(e).addClass("position-static"),
                        this._popper = new x(n,this._menu,this._getPopperConfig())
                    }
                    "ontouchstart"in document.documentElement && 0 === u(e).closest(".navbar-nav").length && u(document.body).children().on("mouseover", null, u.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    u(this._menu).toggleClass(T),
                    u(e).toggleClass(T).trigger(u.Event(S.SHOWN, t))
                }
            }
        }
    }
    ,
    s.show = function() {
        var e, t, n;
        this._element.disabled || u(this._element).hasClass(it) || u(this._menu).hasClass(T) || (e = {
            relatedTarget: this._element
        },
        t = u.Event(S.SHOW, e),
        n = k._getParentFromElement(this._element),
        u(n).trigger(t),
        t.isDefaultPrevented()) || (u(this._menu).toggleClass(T),
        u(n).toggleClass(T).trigger(u.Event(S.SHOWN, e)))
    }
    ,
    s.hide = function() {
        var e, t, n;
        this._element.disabled || u(this._element).hasClass(it) || !u(this._menu).hasClass(T) || (e = {
            relatedTarget: this._element
        },
        t = u.Event(S.HIDE, e),
        n = k._getParentFromElement(this._element),
        u(n).trigger(t),
        t.isDefaultPrevented()) || (u(this._menu).toggleClass(T),
        u(n).toggleClass(T).trigger(u.Event(S.HIDDEN, e)))
    }
    ,
    s.dispose = function() {
        u.removeData(this._element, et),
        u(this._element).off(E),
        this._element = null,
        (this._menu = null) !== this._popper && (this._popper.destroy(),
        this._popper = null)
    }
    ,
    s.update = function() {
        this._inNavbar = this._detectNavbar(),
        null !== this._popper && this._popper.scheduleUpdate()
    }
    ,
    s._addEventListeners = function() {
        var t = this;
        u(this._element).on(S.CLICK, function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            t.toggle()
        })
    }
    ,
    s._getConfig = function(e) {
        return e = r({}, this.constructor.Default, u(this._element).data(), e),
        d.typeCheckConfig(Ze, e, this.constructor.DefaultType),
        e
    }
    ,
    s._getMenuElement = function() {
        var e;
        return this._menu || (e = k._getParentFromElement(this._element)) && (this._menu = e.querySelector(at)),
        this._menu
    }
    ,
    s._getPlacement = function() {
        var e = u(this._element.parentNode)
          , t = "bottom-start";
        return e.hasClass("dropup") ? (t = "top-start",
        u(this._menu).hasClass(ot) && (t = "top-end")) : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : u(this._menu).hasClass(ot) && (t = "bottom-end"),
        t
    }
    ,
    s._detectNavbar = function() {
        return 0 < u(this._element).closest(".navbar").length
    }
    ,
    s._getOffset = function() {
        var t = this
          , e = {};
        return "function" == typeof this._config.offset ? e.fn = function(e) {
            return e.offsets = r({}, e.offsets, t._config.offset(e.offsets, t._element) || {}),
            e
        }
        : e.offset = this._config.offset,
        e
    }
    ,
    s._getPopperConfig = function() {
        var e = {
            placement: this._getPlacement(),
            modifiers: {
                offset: this._getOffset(),
                flip: {
                    enabled: this._config.flip
                },
                preventOverflow: {
                    boundariesElement: this._config.boundary
                }
            }
        };
        return "static" === this._config.display && (e.modifiers.applyStyle = {
            enabled: !1
        }),
        e
    }
    ,
    k._jQueryInterface = function(t) {
        return this.each(function() {
            var e = u(this).data(et);
            if (e || (e = new k(this,"object" == typeof t ? t : null),
            u(this).data(et, e)),
            "string" == typeof t) {
                if (void 0 === e[t])
                    throw new TypeError('No method named "' + t + '"');
                e[t]()
            }
        })
    }
    ,
    k._clearMenus = function(e) {
        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
            for (var t = [].slice.call(document.querySelectorAll(rt)), n = 0, i = t.length; n < i; n++) {
                var o, r = k._getParentFromElement(t[n]), a = u(t[n]).data(et), s = {
                    relatedTarget: t[n]
                };
                e && "click" === e.type && (s.clickEvent = e),
                a && (a = a._menu,
                !u(r).hasClass(T) || e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && u.contains(r, e.target) || (o = u.Event(S.HIDE, s),
                u(r).trigger(o),
                o.isDefaultPrevented()) || ("ontouchstart"in document.documentElement && u(document.body).children().off("mouseover", null, u.noop),
                t[n].setAttribute("aria-expanded", "false"),
                u(a).removeClass(T),
                u(r).removeClass(T).trigger(u.Event(S.HIDDEN, s))))
            }
    }
    ,
    k._getParentFromElement = function(e) {
        var t, n = d.getSelectorFromElement(e);
        return (t = n ? document.querySelector(n) : t) || e.parentNode
    }
    ,
    k._dataApiKeydownHandler = function(e) {
        var t, n, i;
        (/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || u(e.target).closest(at).length) : !nt.test(e.which)) || (e.preventDefault(),
        e.stopPropagation(),
        this.disabled) || u(this).hasClass(it) || (t = k._getParentFromElement(this),
        (i = u(t).hasClass(T)) && (!i || 27 !== e.which && 32 !== e.which) ? 0 !== (i = [].slice.call(t.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"))).length && (n = i.indexOf(e.target),
        38 === e.which && 0 < n && n--,
        40 === e.which && n < i.length - 1 && n++,
        i[n = n < 0 ? 0 : n].focus()) : (27 === e.which && (i = t.querySelector(rt),
        u(i).trigger("focus")),
        u(this).trigger("click")))
    }
    ,
    t(k, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }, {
        key: "Default",
        get: function() {
            return st
        }
    }, {
        key: "DefaultType",
        get: function() {
            return lt
        }
    }]),
    k);
    function k(e, t) {
        this._element = e,
        this._popper = null,
        this._config = this._getConfig(t),
        this._menu = this._getMenuElement(),
        this._inNavbar = this._detectNavbar(),
        this._addEventListeners()
    }
    u(document).on(S.KEYDOWN_DATA_API, rt, $._dataApiKeydownHandler).on(S.KEYDOWN_DATA_API, at, $._dataApiKeydownHandler).on(S.CLICK_DATA_API + " " + S.KEYUP_DATA_API, $._clearMenus).on(S.CLICK_DATA_API, rt, function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        $._jQueryInterface.call(u(this), "toggle")
    }).on(S.CLICK_DATA_API, ".dropdown form", function(e) {
        e.stopPropagation()
    }),
    u.fn[Ze] = $._jQueryInterface,
    u.fn[Ze].Constructor = $,
    u.fn[Ze].noConflict = function() {
        return u.fn[Ze] = tt,
        $._jQueryInterface
    }
    ;
    var ct = "modal"
      , ut = "bs.modal"
      , A = "." + ut
      , dt = u.fn[ct]
      , ht = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , ft = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , D = {
        HIDE: "hide" + A,
        HIDDEN: "hidden" + A,
        SHOW: "show" + A,
        SHOWN: "shown" + A,
        FOCUSIN: "focusin" + A,
        RESIZE: "resize" + A,
        CLICK_DISMISS: "click.dismiss" + A,
        KEYDOWN_DISMISS: "keydown.dismiss" + A,
        MOUSEUP_DISMISS: "mouseup.dismiss" + A,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + A,
        CLICK_DATA_API: "click" + A + ".data-api"
    }
      , pt = "modal-open"
      , mt = "fade"
      , gt = "show"
      , vt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , yt = ".sticky-top"
      , _t = ((a = bt.prototype).toggle = function(e) {
        return this._isShown ? this.hide() : this.show(e)
    }
    ,
    a.show = function(e) {
        var t, n = this;
        this._isShown || this._isTransitioning || (u(this._element).hasClass(mt) && (this._isTransitioning = !0),
        t = u.Event(D.SHOW, {
            relatedTarget: e
        }),
        u(this._element).trigger(t),
        this._isShown) || t.isDefaultPrevented() || (this._isShown = !0,
        this._checkScrollbar(),
        this._setScrollbar(),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        u(this._element).on(D.CLICK_DISMISS, '[data-dismiss="modal"]', function(e) {
            return n.hide(e)
        }),
        u(this._dialog).on(D.MOUSEDOWN_DISMISS, function() {
            u(n._element).one(D.MOUSEUP_DISMISS, function(e) {
                u(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
            })
        }),
        this._showBackdrop(function() {
            return n._showElement(e)
        }))
    }
    ,
    a.hide = function(e) {
        var t = this;
        e && e.preventDefault(),
        this._isShown && !this._isTransitioning && (e = u.Event(D.HIDE),
        u(this._element).trigger(e),
        this._isShown) && !e.isDefaultPrevented() && (this._isShown = !1,
        (e = u(this._element).hasClass(mt)) && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        u(document).off(D.FOCUSIN),
        u(this._element).removeClass(gt),
        u(this._element).off(D.CLICK_DISMISS),
        u(this._dialog).off(D.MOUSEDOWN_DISMISS),
        e ? (e = d.getTransitionDurationFromElement(this._element),
        u(this._element).one(d.TRANSITION_END, function(e) {
            return t._hideModal(e)
        }).emulateTransitionEnd(e)) : this._hideModal())
    }
    ,
    a.dispose = function() {
        [window, this._element, this._dialog].forEach(function(e) {
            return u(e).off(A)
        }),
        u(document).off(D.FOCUSIN),
        u.removeData(this._element, ut),
        this._config = null,
        this._element = null,
        this._dialog = null,
        this._backdrop = null,
        this._isShown = null,
        this._isBodyOverflowing = null,
        this._ignoreBackdropClick = null,
        this._isTransitioning = null,
        this._scrollbarWidth = null
    }
    ,
    a.handleUpdate = function() {
        this._adjustDialog()
    }
    ,
    a._getConfig = function(e) {
        return e = r({}, ht, e),
        d.typeCheckConfig(ct, e, ft),
        e
    }
    ,
    a._showElement = function(e) {
        function t() {
            n._config.focus && n._element.focus(),
            n._isTransitioning = !1,
            u(n._element).trigger(o)
        }
        var n = this
          , i = u(this._element).hasClass(mt)
          , o = (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
        this._element.style.display = "block",
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        u(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body").scrollTop = 0 : this._element.scrollTop = 0,
        i && d.reflow(this._element),
        u(this._element).addClass(gt),
        this._config.focus && this._enforceFocus(),
        u.Event(D.SHOWN, {
            relatedTarget: e
        }));
        i ? (e = d.getTransitionDurationFromElement(this._dialog),
        u(this._dialog).one(d.TRANSITION_END, t).emulateTransitionEnd(e)) : t()
    }
    ,
    a._enforceFocus = function() {
        var t = this;
        u(document).off(D.FOCUSIN).on(D.FOCUSIN, function(e) {
            document !== e.target && t._element !== e.target && 0 === u(t._element).has(e.target).length && t._element.focus()
        })
    }
    ,
    a._setEscapeEvent = function() {
        var t = this;
        this._isShown && this._config.keyboard ? u(this._element).on(D.KEYDOWN_DISMISS, function(e) {
            27 === e.which && (e.preventDefault(),
            t.hide())
        }) : this._isShown || u(this._element).off(D.KEYDOWN_DISMISS)
    }
    ,
    a._setResizeEvent = function() {
        var t = this;
        this._isShown ? u(window).on(D.RESIZE, function(e) {
            return t.handleUpdate(e)
        }) : u(window).off(D.RESIZE)
    }
    ,
    a._hideModal = function() {
        var e = this;
        this._element.style.display = "none",
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._isTransitioning = !1,
        this._showBackdrop(function() {
            u(document.body).removeClass(pt),
            e._resetAdjustments(),
            e._resetScrollbar(),
            u(e._element).trigger(D.HIDDEN)
        })
    }
    ,
    a._removeBackdrop = function() {
        this._backdrop && (u(this._backdrop).remove(),
        this._backdrop = null)
    }
    ,
    a._showBackdrop = function(e) {
        var t, n = this, i = u(this._element).hasClass(mt) ? mt : "";
        this._isShown && this._config.backdrop ? (this._backdrop = document.createElement("div"),
        this._backdrop.className = "modal-backdrop",
        i && this._backdrop.classList.add(i),
        u(this._backdrop).appendTo(document.body),
        u(this._element).on(D.CLICK_DISMISS, function(e) {
            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
        }),
        i && d.reflow(this._backdrop),
        u(this._backdrop).addClass(gt),
        e && (i ? (i = d.getTransitionDurationFromElement(this._backdrop),
        u(this._backdrop).one(d.TRANSITION_END, e).emulateTransitionEnd(i)) : e())) : !this._isShown && this._backdrop ? (u(this._backdrop).removeClass(gt),
        i = function() {
            n._removeBackdrop(),
            e && e()
        }
        ,
        u(this._element).hasClass(mt) ? (t = d.getTransitionDurationFromElement(this._backdrop),
        u(this._backdrop).one(d.TRANSITION_END, i).emulateTransitionEnd(t)) : i()) : e && e()
    }
    ,
    a._adjustDialog = function() {
        var e = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
        this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
    }
    ,
    a._resetAdjustments = function() {
        this._element.style.paddingLeft = "",
        this._element.style.paddingRight = ""
    }
    ,
    a._checkScrollbar = function() {
        var e = document.body.getBoundingClientRect();
        this._isBodyOverflowing = e.left + e.right < window.innerWidth,
        this._scrollbarWidth = this._getScrollbarWidth()
    }
    ,
    a._setScrollbar = function() {
        var e, t, o = this;
        this._isBodyOverflowing && (e = [].slice.call(document.querySelectorAll(vt)),
        t = [].slice.call(document.querySelectorAll(yt)),
        u(e).each(function(e, t) {
            var n = t.style.paddingRight
              , i = u(t).css("padding-right");
            u(t).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
        }),
        u(t).each(function(e, t) {
            var n = t.style.marginRight
              , i = u(t).css("margin-right");
            u(t).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
        }),
        e = document.body.style.paddingRight,
        t = u(document.body).css("padding-right"),
        u(document.body).data("padding-right", e).css("padding-right", parseFloat(t) + this._scrollbarWidth + "px")),
        u(document.body).addClass(pt)
    }
    ,
    a._resetScrollbar = function() {
        var e = [].slice.call(document.querySelectorAll(vt))
          , e = (u(e).each(function(e, t) {
            var n = u(t).data("padding-right");
            u(t).removeData("padding-right"),
            t.style.paddingRight = n || ""
        }),
        [].slice.call(document.querySelectorAll(yt)))
          , e = (u(e).each(function(e, t) {
            var n = u(t).data("margin-right");
            void 0 !== n && u(t).css("margin-right", n).removeData("margin-right")
        }),
        u(document.body).data("padding-right"));
        u(document.body).removeData("padding-right"),
        document.body.style.paddingRight = e || ""
    }
    ,
    a._getScrollbarWidth = function() {
        var e = document.createElement("div")
          , t = (e.className = "modal-scrollbar-measure",
        document.body.appendChild(e),
        e.getBoundingClientRect().width - e.clientWidth);
        return document.body.removeChild(e),
        t
    }
    ,
    bt._jQueryInterface = function(n, i) {
        return this.each(function() {
            var e = u(this).data(ut)
              , t = r({}, ht, u(this).data(), "object" == typeof n && n ? n : {});
            if (e || (e = new bt(this,t),
            u(this).data(ut, e)),
            "string" == typeof n) {
                if (void 0 === e[n])
                    throw new TypeError('No method named "' + n + '"');
                e[n](i)
            } else
                t.show && e.show(i)
        })
    }
    ,
    t(bt, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }, {
        key: "Default",
        get: function() {
            return ht
        }
    }]),
    bt);
    function bt(e, t) {
        this._config = this._getConfig(t),
        this._element = e,
        this._dialog = e.querySelector(".modal-dialog"),
        this._backdrop = null,
        this._isShown = !1,
        this._isBodyOverflowing = !1,
        this._ignoreBackdropClick = !1,
        this._isTransitioning = !1,
        this._scrollbarWidth = 0
    }
    u(document).on(D.CLICK_DATA_API, '[data-toggle="modal"]', function(e) {
        var t, n = this, i = d.getSelectorFromElement(this), i = (i && (t = document.querySelector(i)),
        u(t).data(ut) ? "toggle" : r({}, u(t).data(), u(this).data())), o = ("A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault(),
        u(t).one(D.SHOW, function(e) {
            e.isDefaultPrevented() || o.one(D.HIDDEN, function() {
                u(n).is(":visible") && n.focus()
            })
        }));
        _t._jQueryInterface.call(u(t), i, this)
    }),
    u.fn[ct] = _t._jQueryInterface,
    u.fn[ct].Constructor = _t,
    u.fn[ct].noConflict = function() {
        return u.fn[ct] = dt,
        _t._jQueryInterface
    }
    ;
    var wt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , Ct = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
      , xt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function Et(e, o, t) {
        if (0 === e.length)
            return e;
        if (t && "function" == typeof t)
            return t(e);
        for (var t = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(o), a = [].slice.call(t.body.querySelectorAll("*")), n = 0, i = a.length; n < i; n++)
            !function(e) {
                var t = a[e]
                  , e = t.nodeName.toLowerCase();
                if (-1 === r.indexOf(t.nodeName.toLowerCase()))
                    return t.parentNode.removeChild(t);
                var n = [].slice.call(t.attributes)
                  , i = [].concat(o["*"] || [], o[e] || []);
                n.forEach(function(e) {
                    !function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n))
                            return -1 === wt.indexOf(n) || Boolean(e.nodeValue.match(Ct) || e.nodeValue.match(xt));
                        for (var i = t.filter(function(e) {
                            return e instanceof RegExp
                        }), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o]))
                                return 1
                    }(e, i) && t.removeAttribute(e.nodeName)
                })
            }(n);
        return t.body.innerHTML
    }
    var I = "tooltip"
      , St = "bs.tooltip"
      , N = "." + St
      , Tt = u.fn[I]
      , $t = "bs-tooltip"
      , kt = new RegExp("(^|\\s)" + $t + "\\S+","g")
      , At = ["sanitize", "whiteList", "sanitizeFn"]
      , Dt = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object"
    }
      , It = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , Nt = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }
    }
      , Lt = "show"
      , Ot = {
        HIDE: "hide" + N,
        HIDDEN: "hidden" + N,
        SHOW: "show" + N,
        SHOWN: "shown" + N,
        INSERTED: "inserted" + N,
        CLICK: "click" + N,
        FOCUSIN: "focusin" + N,
        FOCUSOUT: "focusout" + N,
        MOUSEENTER: "mouseenter" + N,
        MOUSELEAVE: "mouseleave" + N
    }
      , jt = "fade"
      , Pt = "show"
      , Ht = "hover"
      , Mt = "focus"
      , L = ((n = Rt.prototype).enable = function() {
        this._isEnabled = !0
    }
    ,
    n.disable = function() {
        this._isEnabled = !1
    }
    ,
    n.toggleEnabled = function() {
        this._isEnabled = !this._isEnabled
    }
    ,
    n.toggle = function(e) {
        var t, n;
        this._isEnabled && (e ? (t = this.constructor.DATA_KEY,
        (n = u(e.currentTarget).data(t)) || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
        u(e.currentTarget).data(t, n)),
        n._activeTrigger.click = !n._activeTrigger.click,
        n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)) : u(this.getTipElement()).hasClass(Pt) ? this._leave(null, this) : this._enter(null, this))
    }
    ,
    n.dispose = function() {
        clearTimeout(this._timeout),
        u.removeData(this.element, this.constructor.DATA_KEY),
        u(this.element).off(this.constructor.EVENT_KEY),
        u(this.element).closest(".modal").off("hide.bs.modal"),
        this.tip && u(this.tip).remove(),
        this._isEnabled = null,
        this._timeout = null,
        this._hoverState = null,
        (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
        this._popper = null,
        this.element = null,
        this.config = null,
        this.tip = null
    }
    ,
    n.show = function() {
        var t = this;
        if ("none" === u(this.element).css("display"))
            throw new Error("Please use show on visible elements");
        var e, n, i = u.Event(this.constructor.Event.SHOW);
        this.isWithContent() && this._isEnabled && (u(this.element).trigger(i),
        n = d.findShadowRoot(this.element),
        n = u.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element),
        !i.isDefaultPrevented()) && n && (i = this.getTipElement(),
        n = d.getUID(this.constructor.NAME),
        i.setAttribute("id", n),
        this.element.setAttribute("aria-describedby", n),
        this.setContent(),
        this.config.animation && u(i).addClass(jt),
        n = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
        n = this._getAttachment(n),
        this.addAttachmentClass(n),
        e = this._getContainer(),
        u(i).data(this.constructor.DATA_KEY, this),
        u.contains(this.element.ownerDocument.documentElement, this.tip) || u(i).appendTo(e),
        u(this.element).trigger(this.constructor.Event.INSERTED),
        this._popper = new x(this.element,i,{
            placement: n,
            modifiers: {
                offset: this._getOffset(),
                flip: {
                    behavior: this.config.fallbackPlacement
                },
                arrow: {
                    element: ".arrow"
                },
                preventOverflow: {
                    boundariesElement: this.config.boundary
                }
            },
            onCreate: function(e) {
                e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
            },
            onUpdate: function(e) {
                return t._handlePopperPlacementChange(e)
            }
        }),
        u(i).addClass(Pt),
        "ontouchstart"in document.documentElement && u(document.body).children().on("mouseover", null, u.noop),
        e = function() {
            t.config.animation && t._fixTransition();
            var e = t._hoverState;
            t._hoverState = null,
            u(t.element).trigger(t.constructor.Event.SHOWN),
            "out" === e && t._leave(null, t)
        }
        ,
        u(this.tip).hasClass(jt) ? (n = d.getTransitionDurationFromElement(this.tip),
        u(this.tip).one(d.TRANSITION_END, e).emulateTransitionEnd(n)) : e())
    }
    ,
    n.hide = function(e) {
        function t() {
            n._hoverState !== Lt && i.parentNode && i.parentNode.removeChild(i),
            n._cleanTipClass(),
            n.element.removeAttribute("aria-describedby"),
            u(n.element).trigger(n.constructor.Event.HIDDEN),
            null !== n._popper && n._popper.destroy(),
            e && e()
        }
        var n = this
          , i = this.getTipElement()
          , o = u.Event(this.constructor.Event.HIDE);
        u(this.element).trigger(o),
        o.isDefaultPrevented() || (u(i).removeClass(Pt),
        "ontouchstart"in document.documentElement && u(document.body).children().off("mouseover", null, u.noop),
        this._activeTrigger.click = !1,
        this._activeTrigger[Mt] = !1,
        this._activeTrigger[Ht] = !1,
        u(this.tip).hasClass(jt) ? (o = d.getTransitionDurationFromElement(i),
        u(i).one(d.TRANSITION_END, t).emulateTransitionEnd(o)) : t(),
        this._hoverState = "")
    }
    ,
    n.update = function() {
        null !== this._popper && this._popper.scheduleUpdate()
    }
    ,
    n.isWithContent = function() {
        return Boolean(this.getTitle())
    }
    ,
    n.addAttachmentClass = function(e) {
        u(this.getTipElement()).addClass($t + "-" + e)
    }
    ,
    n.getTipElement = function() {
        return this.tip = this.tip || u(this.config.template)[0],
        this.tip
    }
    ,
    n.setContent = function() {
        var e = this.getTipElement();
        this.setElementContent(u(e.querySelectorAll(".tooltip-inner")), this.getTitle()),
        u(e).removeClass(jt + " " + Pt)
    }
    ,
    n.setElementContent = function(e, t) {
        "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = Et(t, this.config.whiteList, this.config.sanitizeFn)),
        e.html(t)) : e.text(t) : this.config.html ? u(t).parent().is(e) || e.empty().append(t) : e.text(u(t).text())
    }
    ,
    n.getTitle = function() {
        return this.element.getAttribute("data-original-title") || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
    }
    ,
    n._getOffset = function() {
        var t = this
          , e = {};
        return "function" == typeof this.config.offset ? e.fn = function(e) {
            return e.offsets = r({}, e.offsets, t.config.offset(e.offsets, t.element) || {}),
            e
        }
        : e.offset = this.config.offset,
        e
    }
    ,
    n._getContainer = function() {
        return !1 === this.config.container ? document.body : d.isElement(this.config.container) ? u(this.config.container) : u(document).find(this.config.container)
    }
    ,
    n._getAttachment = function(e) {
        return It[e.toUpperCase()]
    }
    ,
    n._setListeners = function() {
        var n = this;
        this.config.trigger.split(" ").forEach(function(e) {
            var t;
            "click" === e ? u(n.element).on(n.constructor.Event.CLICK, n.config.selector, function(e) {
                return n.toggle(e)
            }) : "manual" !== e && (t = e === Ht ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN,
            e = e === Ht ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT,
            u(n.element).on(t, n.config.selector, function(e) {
                return n._enter(e)
            }).on(e, n.config.selector, function(e) {
                return n._leave(e)
            }))
        }),
        u(this.element).closest(".modal").on("hide.bs.modal", function() {
            n.element && n.hide()
        }),
        this.config.selector ? this.config = r({}, this.config, {
            trigger: "manual",
            selector: ""
        }) : this._fixTitle()
    }
    ,
    n._fixTitle = function() {
        var e = typeof this.element.getAttribute("data-original-title");
        !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
        this.element.setAttribute("title", ""))
    }
    ,
    n._enter = function(e, t) {
        var n = this.constructor.DATA_KEY;
        (t = t || u(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
        u(e.currentTarget).data(n, t)),
        e && (t._activeTrigger["focusin" === e.type ? Mt : Ht] = !0),
        u(t.getTipElement()).hasClass(Pt) || t._hoverState === Lt ? t._hoverState = Lt : (clearTimeout(t._timeout),
        t._hoverState = Lt,
        t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
            t._hoverState === Lt && t.show()
        }, t.config.delay.show) : t.show())
    }
    ,
    n._leave = function(e, t) {
        var n = this.constructor.DATA_KEY;
        (t = t || u(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
        u(e.currentTarget).data(n, t)),
        e && (t._activeTrigger["focusout" === e.type ? Mt : Ht] = !1),
        t._isWithActiveTrigger() || (clearTimeout(t._timeout),
        t._hoverState = "out",
        t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
            "out" === t._hoverState && t.hide()
        }, t.config.delay.hide) : t.hide())
    }
    ,
    n._isWithActiveTrigger = function() {
        for (var e in this._activeTrigger)
            if (this._activeTrigger[e])
                return !0;
        return !1
    }
    ,
    n._getConfig = function(e) {
        var t = u(this.element).data();
        return Object.keys(t).forEach(function(e) {
            -1 !== At.indexOf(e) && delete t[e]
        }),
        "number" == typeof (e = r({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }),
        "number" == typeof e.title && (e.title = e.title.toString()),
        "number" == typeof e.content && (e.content = e.content.toString()),
        d.typeCheckConfig(I, e, this.constructor.DefaultType),
        e.sanitize && (e.template = Et(e.template, e.whiteList, e.sanitizeFn)),
        e
    }
    ,
    n._getDelegateConfig = function() {
        var e = {};
        if (this.config)
            for (var t in this.config)
                this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
        return e
    }
    ,
    n._cleanTipClass = function() {
        var e = u(this.getTipElement())
          , t = e.attr("class").match(kt);
        null !== t && t.length && e.removeClass(t.join(""))
    }
    ,
    n._handlePopperPlacementChange = function(e) {
        var t = e.instance;
        this.tip = t.popper,
        this._cleanTipClass(),
        this.addAttachmentClass(this._getAttachment(e.placement))
    }
    ,
    n._fixTransition = function() {
        var e = this.getTipElement()
          , t = this.config.animation;
        null === e.getAttribute("x-placement") && (u(e).removeClass(jt),
        this.config.animation = !1,
        this.hide(),
        this.show(),
        this.config.animation = t)
    }
    ,
    Rt._jQueryInterface = function(n) {
        return this.each(function() {
            var e = u(this).data(St)
              , t = "object" == typeof n && n;
            if ((e || !/dispose|hide/.test(n)) && (e || (e = new Rt(this,t),
            u(this).data(St, e)),
            "string" == typeof n)) {
                if (void 0 === e[n])
                    throw new TypeError('No method named "' + n + '"');
                e[n]()
            }
        })
    }
    ,
    t(Rt, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }, {
        key: "Default",
        get: function() {
            return Nt
        }
    }, {
        key: "NAME",
        get: function() {
            return I
        }
    }, {
        key: "DATA_KEY",
        get: function() {
            return St
        }
    }, {
        key: "Event",
        get: function() {
            return Ot
        }
    }, {
        key: "EVENT_KEY",
        get: function() {
            return N
        }
    }, {
        key: "DefaultType",
        get: function() {
            return Dt
        }
    }]),
    Rt);
    function Rt(e, t) {
        if (void 0 === x)
            throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
        this._isEnabled = !0,
        this._timeout = 0,
        this._hoverState = "",
        this._activeTrigger = {},
        this._popper = null,
        this.element = e,
        this.config = this._getConfig(t),
        this.tip = null,
        this._setListeners()
    }
    u.fn[I] = L._jQueryInterface,
    u.fn[I].Constructor = L,
    u.fn[I].noConflict = function() {
        return u.fn[I] = Tt,
        L._jQueryInterface
    }
    ;
    var Wt, qt = "popover", Ft = "bs.popover", O = "." + Ft, Bt = u.fn[qt], Ut = "bs-popover", zt = new RegExp("(^|\\s)" + Ut + "\\S+","g"), Vt = r({}, L.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }), Qt = r({}, L.DefaultType, {
        content: "(string|element|function)"
    }), Gt = {
        HIDE: "hide" + O,
        HIDDEN: "hidden" + O,
        SHOW: "show" + O,
        SHOWN: "shown" + O,
        INSERTED: "inserted" + O,
        CLICK: "click" + O,
        FOCUSIN: "focusin" + O,
        FOCUSOUT: "focusout" + O,
        MOUSEENTER: "mouseenter" + O,
        MOUSELEAVE: "mouseleave" + O
    }, Kt = (s = Wt = L,
    (a = Xt).prototype = Object.create(s.prototype),
    (a.prototype.constructor = a).__proto__ = s,
    (a = Xt.prototype).isWithContent = function() {
        return this.getTitle() || this._getContent()
    }
    ,
    a.addAttachmentClass = function(e) {
        u(this.getTipElement()).addClass(Ut + "-" + e)
    }
    ,
    a.getTipElement = function() {
        return this.tip = this.tip || u(this.config.template)[0],
        this.tip
    }
    ,
    a.setContent = function() {
        var e = u(this.getTipElement())
          , t = (this.setElementContent(e.find(".popover-header"), this.getTitle()),
        this._getContent());
        "function" == typeof t && (t = t.call(this.element)),
        this.setElementContent(e.find(".popover-body"), t),
        e.removeClass("fade show")
    }
    ,
    a._getContent = function() {
        return this.element.getAttribute("data-content") || this.config.content
    }
    ,
    a._cleanTipClass = function() {
        var e = u(this.getTipElement())
          , t = e.attr("class").match(zt);
        null !== t && 0 < t.length && e.removeClass(t.join(""))
    }
    ,
    Xt._jQueryInterface = function(n) {
        return this.each(function() {
            var e = u(this).data(Ft)
              , t = "object" == typeof n ? n : null;
            if ((e || !/dispose|hide/.test(n)) && (e || (e = new Xt(this,t),
            u(this).data(Ft, e)),
            "string" == typeof n)) {
                if (void 0 === e[n])
                    throw new TypeError('No method named "' + n + '"');
                e[n]()
            }
        })
    }
    ,
    t(Xt, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }, {
        key: "Default",
        get: function() {
            return Vt
        }
    }, {
        key: "NAME",
        get: function() {
            return qt
        }
    }, {
        key: "DATA_KEY",
        get: function() {
            return Ft
        }
    }, {
        key: "Event",
        get: function() {
            return Gt
        }
    }, {
        key: "EVENT_KEY",
        get: function() {
            return O
        }
    }, {
        key: "DefaultType",
        get: function() {
            return Qt
        }
    }]),
    Xt);
    function Xt() {
        return Wt.apply(this, arguments) || this
    }
    u.fn[qt] = Kt._jQueryInterface,
    u.fn[qt].Constructor = Kt,
    u.fn[qt].noConflict = function() {
        return u.fn[qt] = Bt,
        Kt._jQueryInterface
    }
    ;
    var j = "scrollspy"
      , Yt = "bs.scrollspy"
      , Jt = "." + Yt
      , Zt = u.fn[j]
      , en = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , tn = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , nn = {
        ACTIVATE: "activate" + Jt,
        SCROLL: "scroll" + Jt,
        LOAD_DATA_API: "load" + Jt + ".data-api"
    }
      , on = "active"
      , rn = ".nav, .list-group"
      , an = ".nav-link"
      , sn = ".list-group-item"
      , ln = "position"
      , cn = ((n = un.prototype).refresh = function() {
        var t = this
          , e = this._scrollElement === this._scrollElement.window ? "offset" : ln
          , i = "auto" === this._config.method ? e : this._config.method
          , o = i === ln ? this._getScrollTop() : 0;
        this._offsets = [],
        this._targets = [],
        this._scrollHeight = this._getScrollHeight(),
        [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
            var t, e = d.getSelectorFromElement(e);
            if (t = e ? document.querySelector(e) : t) {
                var n = t.getBoundingClientRect();
                if (n.width || n.height)
                    return [u(t)[i]().top + o, e]
            }
            return null
        }).filter(function(e) {
            return e
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).forEach(function(e) {
            t._offsets.push(e[0]),
            t._targets.push(e[1])
        })
    }
    ,
    n.dispose = function() {
        u.removeData(this._element, Yt),
        u(this._scrollElement).off(Jt),
        this._element = null,
        this._scrollElement = null,
        this._config = null,
        this._selector = null,
        this._offsets = null,
        this._targets = null,
        this._activeTarget = null,
        this._scrollHeight = null
    }
    ,
    n._getConfig = function(e) {
        var t;
        return "string" != typeof (e = r({}, en, "object" == typeof e && e ? e : {})).target && ((t = u(e.target).attr("id")) || (t = d.getUID(j),
        u(e.target).attr("id", t)),
        e.target = "#" + t),
        d.typeCheckConfig(j, e, tn),
        e
    }
    ,
    n._getScrollTop = function() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
    }
    ,
    n._getScrollHeight = function() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    n._getOffsetHeight = function() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
    }
    ,
    n._process = function() {
        var e = this._getScrollTop() + this._config.offset
          , t = this._getScrollHeight()
          , n = this._config.offset + t - this._getOffsetHeight();
        if (this._scrollHeight !== t && this.refresh(),
        n <= e) {
            t = this._targets[this._targets.length - 1];
            this._activeTarget !== t && this._activate(t)
        } else if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0])
            this._activeTarget = null,
            this._clear();
        else
            for (var i = this._offsets.length; i--; )
                this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i])
    }
    ,
    n._activate = function(t) {
        this._activeTarget = t,
        this._clear();
        var e = this._selector.split(",").map(function(e) {
            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
        })
          , e = u([].slice.call(document.querySelectorAll(e.join(","))));
        (e.hasClass("dropdown-item") ? (e.closest(".dropdown").find(".dropdown-toggle").addClass(on),
        e) : (e.addClass(on),
        e.parents(rn).prev(an + ", " + sn).addClass(on),
        e.parents(rn).prev(".nav-item").children(an))).addClass(on),
        u(this._scrollElement).trigger(nn.ACTIVATE, {
            relatedTarget: t
        })
    }
    ,
    n._clear = function() {
        [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
            return e.classList.contains(on)
        }).forEach(function(e) {
            return e.classList.remove(on)
        })
    }
    ,
    un._jQueryInterface = function(t) {
        return this.each(function() {
            var e = u(this).data(Yt);
            if (e || (e = new un(this,"object" == typeof t && t),
            u(this).data(Yt, e)),
            "string" == typeof t) {
                if (void 0 === e[t])
                    throw new TypeError('No method named "' + t + '"');
                e[t]()
            }
        })
    }
    ,
    t(un, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }, {
        key: "Default",
        get: function() {
            return en
        }
    }]),
    un);
    function un(e, t) {
        var n = this;
        this._element = e,
        this._scrollElement = "BODY" === e.tagName ? window : e,
        this._config = this._getConfig(t),
        this._selector = this._config.target + " " + an + "," + this._config.target + " " + sn + "," + this._config.target + " .dropdown-item",
        this._offsets = [],
        this._targets = [],
        this._activeTarget = null,
        this._scrollHeight = 0,
        u(this._scrollElement).on(nn.SCROLL, function(e) {
            return n._process(e)
        }),
        this.refresh(),
        this._process()
    }
    u(window).on(nn.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--; ) {
            var n = u(e[t]);
            cn._jQueryInterface.call(n, n.data())
        }
    }),
    u.fn[j] = cn._jQueryInterface,
    u.fn[j].Constructor = cn,
    u.fn[j].noConflict = function() {
        return u.fn[j] = Zt,
        cn._jQueryInterface
    }
    ;
    var dn = "bs.tab"
      , s = "." + dn
      , hn = u.fn.tab
      , fn = {
        HIDE: "hide" + s,
        HIDDEN: "hidden" + s,
        SHOW: "show" + s,
        SHOWN: "shown" + s,
        CLICK_DATA_API: "click" + s + ".data-api"
    }
      , pn = "active"
      , mn = ".active"
      , gn = "> li > .active"
      , vn = ((a = yn.prototype).show = function() {
        var e, t, n, i, o, r, a = this;
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && u(this._element).hasClass(pn) || u(this._element).hasClass("disabled") || (t = u(this._element).closest(".nav, .list-group")[0],
        n = d.getSelectorFromElement(this._element),
        t && (o = "UL" === t.nodeName || "OL" === t.nodeName ? gn : mn,
        i = (i = u.makeArray(u(t).find(o)))[i.length - 1]),
        o = u.Event(fn.HIDE, {
            relatedTarget: this._element
        }),
        r = u.Event(fn.SHOW, {
            relatedTarget: i
        }),
        i && u(i).trigger(o),
        u(this._element).trigger(r),
        r.isDefaultPrevented()) || o.isDefaultPrevented() || (n && (e = document.querySelector(n)),
        this._activate(this._element, t),
        r = function() {
            var e = u.Event(fn.HIDDEN, {
                relatedTarget: a._element
            })
              , t = u.Event(fn.SHOWN, {
                relatedTarget: i
            });
            u(i).trigger(e),
            u(a._element).trigger(t)
        }
        ,
        e ? this._activate(e, e.parentNode, r) : r())
    }
    ,
    a.dispose = function() {
        u.removeData(this._element, dn),
        this._element = null
    }
    ,
    a._activate = function(e, t, n) {
        function i() {
            return o._transitionComplete(e, r, n)
        }
        var o = this
          , r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? u(t).children(mn) : u(t).find(gn))[0]
          , t = n && r && u(r).hasClass("fade");
        r && t ? (t = d.getTransitionDurationFromElement(r),
        u(r).removeClass("show").one(d.TRANSITION_END, i).emulateTransitionEnd(t)) : i()
    }
    ,
    a._transitionComplete = function(e, t, n) {
        var i;
        t && (u(t).removeClass(pn),
        (i = u(t.parentNode).find("> .dropdown-menu .active")[0]) && u(i).removeClass(pn),
        "tab" === t.getAttribute("role")) && t.setAttribute("aria-selected", !1),
        u(e).addClass(pn),
        "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
        d.reflow(e),
        e.classList.contains("fade") && e.classList.add("show"),
        e.parentNode && u(e.parentNode).hasClass("dropdown-menu") && ((i = u(e).closest(".dropdown")[0]) && (t = [].slice.call(i.querySelectorAll(".dropdown-toggle")),
        u(t).addClass(pn)),
        e.setAttribute("aria-expanded", !0)),
        n && n()
    }
    ,
    yn._jQueryInterface = function(n) {
        return this.each(function() {
            var e = u(this)
              , t = e.data(dn);
            if (t || (t = new yn(this),
            e.data(dn, t)),
            "string" == typeof n) {
                if (void 0 === t[n])
                    throw new TypeError('No method named "' + n + '"');
                t[n]()
            }
        })
    }
    ,
    t(yn, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }]),
    yn);
    function yn(e) {
        this._element = e
    }
    u(document).on(fn.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(),
        vn._jQueryInterface.call(u(this), "show")
    }),
    u.fn.tab = vn._jQueryInterface,
    u.fn.tab.Constructor = vn,
    u.fn.tab.noConflict = function() {
        return u.fn.tab = hn,
        vn._jQueryInterface
    }
    ;
    var _n = "toast"
      , bn = "bs.toast"
      , n = "." + bn
      , wn = u.fn[_n]
      , Cn = {
        CLICK_DISMISS: "click.dismiss" + n,
        HIDE: "hide" + n,
        HIDDEN: "hidden" + n,
        SHOW: "show" + n,
        SHOWN: "shown" + n
    }
      , xn = "show"
      , En = "showing"
      , Sn = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Tn = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , $n = ((s = kn.prototype).show = function() {
        function e() {
            n._element.classList.remove(En),
            n._element.classList.add(xn),
            u(n._element).trigger(Cn.SHOWN),
            n._config.autohide && n.hide()
        }
        var t, n = this;
        u(this._element).trigger(Cn.SHOW),
        this._config.animation && this._element.classList.add("fade");
        this._element.classList.remove("hide"),
        this._element.classList.add(En),
        this._config.animation ? (t = d.getTransitionDurationFromElement(this._element),
        u(this._element).one(d.TRANSITION_END, e).emulateTransitionEnd(t)) : e()
    }
    ,
    s.hide = function(e) {
        var t = this;
        this._element.classList.contains(xn) && (u(this._element).trigger(Cn.HIDE),
        e ? this._close() : this._timeout = setTimeout(function() {
            t._close()
        }, this._config.delay))
    }
    ,
    s.dispose = function() {
        clearTimeout(this._timeout),
        this._timeout = null,
        this._element.classList.contains(xn) && this._element.classList.remove(xn),
        u(this._element).off(Cn.CLICK_DISMISS),
        u.removeData(this._element, bn),
        this._element = null,
        this._config = null
    }
    ,
    s._getConfig = function(e) {
        return e = r({}, Tn, u(this._element).data(), "object" == typeof e && e ? e : {}),
        d.typeCheckConfig(_n, e, this.constructor.DefaultType),
        e
    }
    ,
    s._setListeners = function() {
        var e = this;
        u(this._element).on(Cn.CLICK_DISMISS, '[data-dismiss="toast"]', function() {
            return e.hide(!0)
        })
    }
    ,
    s._close = function() {
        function e() {
            n._element.classList.add("hide"),
            u(n._element).trigger(Cn.HIDDEN)
        }
        var t, n = this;
        this._element.classList.remove(xn),
        this._config.animation ? (t = d.getTransitionDurationFromElement(this._element),
        u(this._element).one(d.TRANSITION_END, e).emulateTransitionEnd(t)) : e()
    }
    ,
    kn._jQueryInterface = function(n) {
        return this.each(function() {
            var e = u(this)
              , t = e.data(bn);
            if (t || (t = new kn(this,"object" == typeof n && n),
            e.data(bn, t)),
            "string" == typeof n) {
                if (void 0 === t[n])
                    throw new TypeError('No method named "' + n + '"');
                t[n](this)
            }
        })
    }
    ,
    t(kn, null, [{
        key: "VERSION",
        get: function() {
            return "4.3.1"
        }
    }, {
        key: "DefaultType",
        get: function() {
            return Sn
        }
    }, {
        key: "Default",
        get: function() {
            return Tn
        }
    }]),
    kn);
    function kn(e, t) {
        this._element = e,
        this._config = this._getConfig(t),
        this._timeout = null,
        this._setListeners()
    }
    if (u.fn[_n] = $n._jQueryInterface,
    u.fn[_n].Constructor = $n,
    u.fn[_n].noConflict = function() {
        return u.fn[_n] = wn,
        $n._jQueryInterface
    }
    ,
    void 0 === u)
        throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    a = u.fn.jquery.split(" ")[0].split(".");
    if (a[0] < 2 && a[1] < 9 || 1 === a[0] && 9 === a[1] && a[2] < 1 || 4 <= a[0])
        throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    e.Util = d,
    e.Alert = i,
    e.Button = V,
    e.Carousel = p,
    e.Collapse = ue,
    e.Dropdown = $,
    e.Modal = _t,
    e.Popover = Kt,
    e.Scrollspy = cn,
    e.Tab = vn,
    e.Toast = $n,
    e.Tooltip = L,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function(a, i) {
    "use strict";
    function s() {}
    function o(e, t) {
        if (e)
            for (var n = 0, i = (e = "object" == typeof e ? [].slice.call(e) : e).length; n < i; n++)
                t.call(e, e[n], n)
    }
    function t(e, t) {
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return t !== i && null !== t && n === e
    }
    function r(e) {
        return t("Function", e)
    }
    function l(e) {
        return t("Array", e)
    }
    function c(e) {
        (e = e || s)._done || (e(),
        e._done = 1)
    }
    function u(e) {
        var t, n, i, o = {};
        if ("object" == typeof e)
            for (t in e)
                e[t] && (o = {
                    name: t,
                    url: e[t]
                });
        else
            o = {
                name: -1 !== (i = (n = (n = (n = e).split("/"))[n.length - 1]).indexOf("?")) ? n.substring(0, i) : n,
                url: e
            };
        return (i = b[o.name]) && i.url === o.url ? i : b[o.name] = o
    }
    function d(e) {
        for (var t in e = e || b)
            if (e.hasOwnProperty(t) && e[t].state !== $)
                return;
        return 1
    }
    function h(t) {
        t.state === i && (t.state = E,
        t.onpreload = [],
        n({
            url: t.url,
            type: "cache"
        }, function() {
            var e;
            (e = t).state = S,
            o(e.onpreload, function(e) {
                e.call()
            })
        }))
    }
    function f(e, t) {
        t = t || s,
        e.state === $ ? t() : e.state === T ? x.ready(e.name, t) : e.state === E ? e.onpreload.push(function() {
            f(e, t)
        }) : (e.state = T,
        n(e, function() {
            e.state = $,
            t(),
            o(_[e.name], function(e) {
                c(e)
            }),
            m && d() && o(_.ALL, function(e) {
                c(e)
            })
        }))
    }
    function n(i, t) {
        function e(e) {
            e = e || a.event,
            r.onload = r.onreadystatechange = r.onerror = null,
            t()
        }
        function o(e) {
            ("load" === (e = e || a.event).type || /loaded|complete/.test(r.readyState) && (!v.documentMode || v.documentMode < 9)) && (a.clearTimeout(i.errorTimeout),
            a.clearTimeout(i.cssTimeout),
            r.onload = r.onreadystatechange = r.onerror = null,
            t())
        }
        var r, n;
        t = t || s,
        "css" === (n = (n = (n = i.url) || "").split("?")[0].split("."))[n.length - 1].toLowerCase() ? ((r = v.createElement("link")).type = "text/" + (i.type || "css"),
        r.rel = "stylesheet",
        r.href = i.url,
        i.cssRetries = 0,
        i.cssTimeout = a.setTimeout(function e() {
            if (i.state !== $ && i.cssRetries <= 20) {
                for (var t = 0, n = v.styleSheets.length; t < n; t++)
                    if (v.styleSheets[t].href === r.href)
                        return void o({
                            type: "load"
                        });
                i.cssRetries++,
                i.cssTimeout = a.setTimeout(e, 250)
            }
        }, 500)) : ((r = v.createElement("script")).type = "text/" + (i.type || "javascript"),
        r.src = i.url),
        r.onload = r.onreadystatechange = o,
        r.onerror = e,
        r.async = !1,
        r.defer = !1,
        i.errorTimeout = a.setTimeout(function() {
            e({
                type: "timeout"
            })
        }, 7e3),
        (n = v.head || v.getElementsByTagName("head")[0]).insertBefore(r, n.lastChild)
    }
    function e() {
        v.body ? m || (m = !0,
        function() {
            for (var e, t = v.getElementsByTagName("script"), n = 0, i = t.length; n < i; n++)
                if (e = t[n].getAttribute("data-headjs-load"))
                    return x.load(e)
        }(),
        o(y, function(e) {
            c(e)
        })) : (a.clearTimeout(x.readyTimeout),
        x.readyTimeout = a.setTimeout(e, 50))
    }
    function p() {
        v.addEventListener ? (v.removeEventListener("DOMContentLoaded", p, !1),
        e()) : "complete" === v.readyState && (v.detachEvent("onreadystatechange", p),
        e())
    }
    var m, g, v = a.document, y = [], _ = {}, b = {}, w = "async"in v.createElement("script") || "MozAppearance"in v.documentElement.style || a.opera, C = a.head_conf && a.head_conf.head || "head", x = a[C] = a[C] || function() {
        x.ready.apply(null, arguments)
    }
    , E = 1, S = 2, T = 3, $ = 4;
    if ("complete" === v.readyState)
        e();
    else if (v.addEventListener)
        v.addEventListener("DOMContentLoaded", p, !1),
        a.addEventListener("load", e, !1);
    else {
        v.attachEvent("onreadystatechange", p),
        a.attachEvent("onload", e),
        g = !1;
        try {
            g = !a.frameElement && v.documentElement
        } catch (e) {}
        g && g.doScroll && function t() {
            if (!m) {
                try {
                    g.doScroll("left")
                } catch (e) {
                    return a.clearTimeout(x.readyTimeout),
                    void (x.readyTimeout = a.setTimeout(t, 50))
                }
                e()
            }
        }()
    }
    x.load = x.js = w ? function() {
        var e = arguments
          , t = e[e.length - 1]
          , n = {};
        return r(t) || (t = null),
        l(e[0]) ? (e[0].push(t),
        x.load.apply(null, e[0])) : (o(e, function(e) {
            e !== t && (e = u(e),
            n[e.name] = e)
        }),
        o(e, function(e) {
            e !== t && f(e = u(e), function() {
                d(n) && c(t)
            })
        })),
        x
    }
    : function() {
        var e = arguments
          , t = e[e.length - 1]
          , n = [].slice.call(e, 1)
          , i = n[0];
        return r(t) || (t = null),
        l(e[0]) ? (e[0].push(t),
        x.load.apply(null, e[0])) : i ? (o(n, function(e) {
            !r(e) && e && h(u(e))
        }),
        f(u(e[0]), r(i) ? i : function() {
            x.load.apply(null, n)
        }
        )) : f(u(e[0])),
        x
    }
    ,
    x.test = function(e, t, n, i) {
        return e = "object" == typeof e ? e : {
            test: e,
            success: !!t && (l(t) ? t : [t]),
            failure: !!n && (l(n) ? n : [n]),
            callback: i || s
        },
        (t = !!e.test) && e.success ? (e.success.push(e.callback),
        x.load.apply(null, e.success)) : t || !e.failure ? i() : (e.failure.push(e.callback),
        x.load.apply(null, e.failure)),
        x
    }
    ,
    x.ready = function(e, t) {
        var n, i;
        return e === v ? (m ? c(t) : y.push(t),
        x) : (r(e) && (t = e,
        e = "ALL"),
        l(e) ? (n = {},
        o(e, function(e) {
            n[e] = b[e],
            x.ready(e, function() {
                d(n) && c(t)
            })
        }),
        x) : "string" == typeof e && r(t) ? ((i = b[e]) && i.state === $ || "ALL" === e && d() && m ? c(t) : (i = _[e]) ? i.push(t) : i = _[e] = [t],
        x) : x)
    }
    ,
    x.ready(v, function() {
        d() && o(_.ALL, function(e) {
            c(e)
        }),
        x.feature && x.feature("domloaded", !0)
    })
}(window),
function(e, t) {
    var n, i;
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self,
    n = e.Cookies,
    (i = e.Cookies = t()).noConflict = function() {
        return e.Cookies = n,
        i
    }
    )
}(this, function() {
    "use strict";
    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n, i = arguments[t];
            for (n in i)
                e[n] = i[n]
        }
        return e
    }
    return function t(s, r) {
        function n(e, t, n) {
            if ("undefined" != typeof document) {
                "number" == typeof (n = a({}, r, n)).expires && (n.expires = new Date(Date.now() + 864e5 * n.expires)),
                n.expires && (n.expires = n.expires.toUTCString()),
                e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var i, o = "";
                for (i in n)
                    n[i] && (o += "; " + i,
                    !0 !== n[i]) && (o += "=" + n[i].split(";")[0]);
                return document.cookie = e + "=" + s.write(t, e) + o
            }
        }
        return Object.create({
            set: n,
            get: function(e) {
                if ("undefined" != typeof document && (!arguments.length || e)) {
                    for (var t = document.cookie ? document.cookie.split("; ") : [], n = {}, i = 0; i < t.length; i++) {
                        var o = t[i].split("=")
                          , r = o.slice(1).join("=");
                        try {
                            var a = decodeURIComponent(o[0]);
                            if (n[a] = s.read(r, a),
                            e === a)
                                break
                        } catch (e) {}
                    }
                    return e ? n[e] : n
                }
            },
            remove: function(e, t) {
                n(e, "", a({}, t, {
                    expires: -1
                }))
            },
            withAttributes: function(e) {
                return t(this.converter, a({}, this.attributes, e))
            },
            withConverter: function(e) {
                return t(a({}, this.converter, e), this.attributes)
            }
        }, {
            attributes: {
                value: Object.freeze(r)
            },
            converter: {
                value: Object.freeze(s)
            }
        })
    }({
        read: function(e) {
            return (e = '"' === e[0] ? e.slice(1, -1) : e).replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(e) {
            return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
    }, {
        path: "/"
    })
}),
function(a) {
    a(function() {
        function o(o, e, r) {
            a.each(e, function(e, t) {
                var n, i;
                t.code === o.data("code") && (o.attr("data-init", "1"),
                ($link = a('<a target="_blank" rel="nofollow sponsored" style="display:block; width:100%; height:100%;"></a>').attr("href", r + t.url)).appendTo(o),
                "html" === t.format ? (i = $link,
                lottie.loadAnimation({
                    container: i[0],
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    path: t.path
                })) : "image" === t.format && (i = $link,
                t = t,
                (n = document.createElement("img")).setAttribute("src", t.src),
                n.setAttribute("style", "max-width:100%; max-height:100%;"),
                i.append(n)))
            })
        }
        jQuery.adsStack = {},
        jQuery.dfpAdsCap = function(e) {
            void 0 === a.adsStack["dfpAdsCap_" + e] && (a.adsStack["dfpAdsCap_" + e] = 1)
        }
        ,
        jQuery.initTaAction = function(e, t) {
            timeSincePageLoad = 0,
            window.performance && window.performance.now && (timeSincePageLoad = Math.round(window.performance.now())),
            "premium" === e ? a("[id$='DESKTOP_Premium_Banner_0']").contents().click(function(e) {
                timeSincePageLoad = 0,
                window.performance && window.performance.now && (timeSincePageLoad = Math.round(window.performance.now()))
            }) : "premium2" === e && a("[id$='DESKTOP_Premium2_Banner_0']").contents().click(function(e) {
                timeSincePageLoad = 0,
                window.performance && window.performance.now && (timeSincePageLoad = Math.round(window.performance.now()))
            })
        }
        ,
        jQuery.updateAdsSize = function(e, t, n) {}
        ;
        var r = {};
        jQuery.tabletkiInitAds2 = function(e) {
            e = r[e];
            e && a(".tabletki-adunit:not([data-init])") && o(a(".tabletki-adunit:not([data-init])"), e.banners, clickTagRedirect)
        }
        ,
        jQuery.tabletkiInitAds = function(t, i) {
            a("#DESKTOP_Premium_Banner").css("height", "0"),
            a.ajax({
                url: t,
                type: "GET",
                dataType: "json",
                success: function(n) {
                    var e;
                    void 0 !== (r[t] = n) && void 0 !== n.banners && (e = !1,
                    a(".tabletki-adunit").each(function() {
                        a(this).hasClass("listen-dom-events") && (e = !0),
                        o(a(this), n.banners, i)
                    }),
                    void 0 !== n.pixels && a.each(n.pixels, function(e, t) {
                        var n = document.createElement("img");
                        n.setAttribute("src", t),
                        document.getElementsByTagName("body")[0].appendChild(n)
                    }),
                    e) && new MutationObserver( (e, t) => {
                        e.forEach(e => {
                            "childList" === e.type && a(e.addedNodes).each(function() {
                                a(this).is(".tabletki-adunit:not([data-init])") ? o(a(this), n.banners, i) : a(this).find(".tabletki-adunit:not([data-init])").each(function() {
                                    o(a(this), n.banners, i)
                                })
                            })
                        }
                        )
                    }
                    ).observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                },
                error: function() {},
                beforeSend: function(e) {}
            })
        }
    })
}(window.jQuery);
var AjaxTypes = {
    JSON: "application/json; charset=utf-8",
    POST: "application/x-www-form-urlencoded; charset=utf-8",
    GET: "GET"
}
  , ajaxWrapper = (Object.freeze(AjaxTypes),
function(e) {
    if (null == e || "" == $.trim(e))
        throw new Error("empty url is not allowed");
    this._url = e
}
)
  , addCustomTooltip = (ajaxWrapper.prototype = {
    data: function(e) {
        return this._sendData = e,
        this
    },
    always: function(e) {
        return this._alwaysCallback = e,
        this
    },
    fail: function(e) {
        return this._failCallback = e,
        this
    },
    __execute: function(a, t) {
        if (this._sendData && a == AjaxTypes.JSON && "object" != typeof this._sendData)
            throw new Error("JSON data type must be an 'object'");
        a == AjaxTypes.GET && 0 < this._url.length && this._url.charAt(this._url.length - 1);
        var e = a == AjaxTypes.GET ? AjaxTypes.GET : "POST"
          , n = a != AjaxTypes.GET ? a : void 0
          , s = {
            url: this._url,
            type: e,
            statusCode: {
                404: function() {}
            }
        }
          , l = (this._sendData && (s.data = a == AjaxTypes.JSON ? JSON.stringify(this._sendData) : this._sendData),
        n && (s.contentType = n),
        null != this._loader && this._loader.show(),
        this);
        return $.ajax(s).done(function(e) {
            t && t(e)
        }).fail(function(e, t, n) {
            l._failCallback && l._failCallback(t, n);
            var t = e.responseText
              , n = e.getResponseHeader("tabletki-ajax")
              , i = e.getResponseHeader("x-tabletkiserver");
            let o = "";
            n || i || 429 !== e.status && 403 !== e.status && 503 !== e.status || (o = "cf_challenge=true");
            var r, n = {};
            n.Text = window.location.href + "; " + l._url + "; " + o,
            n.HttpStatus = e.status ? e.status.toString() : "-",
            n.HttpMethod = a,
            n.RequestName = l._url,
            n.RequestBody = s.data,
            t && (n.ResponseText = t),
            sendScriptLog(n, LogLevel.Error),
            o && (r = l._url + "?cf_challenge=" + encodeURIComponent(document.location.href),
            setTimeout(function() {
                replaceLocation(r)
            }, 100))
        }).always(function() {
            null != l._loader && l._loader.hide(),
            l._alwaysCallback && l._alwaysCallback()
        }),
        this
    },
    get: function(e) {
        return this.__execute(AjaxTypes.GET, e)
    },
    post: function(e) {
        return this.__execute(AjaxTypes.POST, e)
    },
    json: function(e) {
        return this.__execute(AjaxTypes.JSON, e)
    },
    useLoader: function(e) {
        return this._loader = "function" == typeof Loader ? new Loader(e || "body") : null,
        this
    }
},
function(e, t, n="bottom", i="custom-tooltip") {
    isMobileView() && (n = "top"),
    setTimeout(function() {
        e.tooltip({
            title: t,
            placement: n,
            delay: {
                show: 500,
                hide: 2200
            },
            template: '<div class="tooltip ' + i + '" role="tooltip"><div class= "arrow"></div> <div class="tooltip-inner"></div></div>'
        }),
        e.tooltip("show"),
        setTimeout(function() {
            e.tooltip("dispose")
        }, 2200)
    }, 50)
}
);
function attachCarousel(e) {
    var t, n, i = e.find(".carousel-simple-row");
    0 < i.length && (i.css("transform", ""),
    t = i.find(".carousel-simple-item"),
    n = $(t[0]).outerWidth(!0),
    n = Math.floor(e.outerWidth(!0) / n),
    e.hasClass("carousel-simple") || (e.addClass("carousel-simple"),
    0 == e.find(".btn-carousel").length && ($('<button class="btn btn-carousel btn-carousel-next"></button>').insertBefore(i),
    $('<button class="btn btn-carousel btn-carousel-prev"></button>').insertBefore(i))),
    e.find(".btn-carousel-prev").addClass("d-none"),
    e.addClass("first-slide"),
    n < t.length ? (e.find(".btn-carousel-next").removeClass("d-none"),
    e.removeClass("last-slide")) : e.find(".btn-carousel-next").addClass("d-none"))
}
function getXTranslateValues(e) {
    return !e || null == (e = (e = e.css("transform") && e.css("transform").replace(/[^0-9\-.,]/g, "").split(",")) && (e[12] || e[4])) ? 0 : e
}
function addSmallScroll(e) {
    e ? e.attachElementScroll() : $(".small-scroll").each(function() {
        $(this).attachElementScroll()
    })
}
function removeSmallScroll(e) {
    e ? e.detachElementScroll() : $(".small-scroll").each(function() {
        var e = $(this);
        e.hasClass("scroll-always") || e.detachElementScroll()
    })
}
function addSmallScrollWrapper(e) {
    e && (e.parent().hasClass("scroll-menu-inner-container") || e.wrap("<div class='scroll-menu-container'></div>").wrap("<div class='scroll-menu-inner-container'></div>"),
    e.parents(".scroll-menu-container").height(e.outerHeight(!0)))
}
function removeSmallScrollWrapper(e) {
    e && e.detachElementScroll()
}
$.fn.attachSimpleCarousel = function() {
    var t = $(this);
    t.length && t.each(function() {
        attachCarousel($el = $(this))
    }),
    $(".btn-carousel-next").on("click", function() {
        $elBtnNext = $(this),
        $elBtnPrev = $elBtnNext.next(".btn-carousel-prev"),
        t = $elBtnNext.parent(),
        $elCarouselRow = t.find(".carousel-simple-row"),
        $elCarouselItems = $elCarouselRow.find(".carousel-simple-item"),
        slideWidth = $($elCarouselItems[0]).outerWidth(!0),
        itemsShow = Math.floor(t.outerWidth(!0) / slideWidth),
        minPos = (itemsShow - $elCarouselItems.length) * slideWidth,
        curPos = getXTranslateValues($elCarouselRow),
        (translatePos = parseInt(curPos) - slideWidth) <= minPos && ($elBtnNext.addClass("d-none"),
        t.removeClass("first-slide"),
        $elBtnPrev.removeClass("d-none"),
        t.addClass("last-slide"),
        $elCarouselRow.css("transform", `translateX(${minPos}px)`)),
        translatePos > minPos && ($elBtnPrev.removeClass("d-none"),
        t.removeClass("last-slide"),
        t.removeClass("first-slide"),
        $elCarouselRow.css("transform", `translateX(${translatePos}px)`))
    }),
    $(".btn-carousel-prev").on("click", function(e) {
        $elBtnPrev = $(this),
        $elBtnNext = $elBtnPrev.parent().find(".btn-carousel-next"),
        t = $elBtnNext.parent(),
        $elCarouselRow = t.find(".carousel-simple-row"),
        $elCarouselItems = $elCarouselRow.find(".carousel-simple-item"),
        slideWidth = $($elCarouselItems[0]).outerWidth(!0),
        itemsShow = Math.floor(t.outerWidth(!0) / slideWidth),
        minPos = 0,
        curPos = getXTranslateValues($elCarouselRow),
        (translatePos = parseInt(curPos) + slideWidth) >= minPos && ($elBtnPrev.addClass("d-none"),
        t.removeClass("last-slide"),
        $elBtnNext.removeClass("d-none"),
        t.addClass("first-slide"),
        $elCarouselRow.css("transform", `translateX(${minPos}px)`)),
        translatePos < minPos && ($elBtnNext.removeClass("d-none"),
        t.removeClass("last-slide"),
        t.removeClass("first-slide"),
        $elCarouselRow.css("transform", `translateX(${translatePos}px)`))
    })
}
,
$.fn.detachSimpleCarousel = function() {
    var e = $(this);
    e.length && e.each(function() {
        ($el = $(this)).find(".carousel-simple-row").css("transform", ""),
        e.find(".btn-carousel").remove(),
        e.removeClass("carousel-simple")
    })
}
,
$.fn.attachDragger = function() {
    var t, n, i = !1;
    $(this).on("mousedown mouseup mousemove", function(e) {
        "mousedown" == e.type && (i = !0,
        t = [e.clientX, e.clientY]),
        "mouseup" == e.type && (i = !1),
        "mousemove" == e.type && 1 == i && (n = [e.clientX, e.clientY],
        n = [n[0] - t[0], n[1] - t[1]],
        $(this).scrollLeft($(this).scrollLeft() - n[0]),
        t = [e.clientX, e.clientY])
    }),
    $(window).on("mouseup", function() {
        i = !1
    })
}
,
$.fn.detachDragger = function() {
    $(this).off("mousedown mouseup mousemove")
}
,
$.fn.attachElementScroll = function() {
    var e = $(this);
    e.parent().hasClass("scroll-menu-inner-container") || e.wrap("<div class='scroll-menu-container'></div>").wrap("<div class='scroll-menu-inner-container'></div>"),
    e.parents(".scroll-menu-container").height(e.outerHeight(!0)),
    e.parents(".scroll-menu-inner-container").attachDragger()
}
,
$.fn.detachElementScroll = function() {
    var e = $(this);
    e.parent().hasClass("scroll-menu-inner-container") && e.unwrap().unwrap()
}
;
var scrollTopButton = function() {
    "use strict";
    return $(window).scroll(function(e) {
        100 < $(this).scrollTop() && !$(".video-link").hasClass("active") ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut()
    }),
    $(".scroll-top").click(function(e) {
        e.preventDefault(),
        $("html, body").animate({
            scrollTop: 0
        }, 500)
    }),
    {
        init: function() {
            $(".scroll-top").length && $(".scroll-top").hide()
        }
    }
}();
class Loader {
    constructor(e, t) {
        this._element = $(e),
        this._options = t || {}
    }
    _setOpacity(e) {
        this._element.css("opacity", e)
    }
    show() {
        return this._setOpacity(this._options.opacity || .5),
        this
    }
    hide() {
        return this._setOpacity(this._options.opacity || 1),
        this
    }
}
function showAlert(e, t="top-center") {
    ($toastContent = $(".toast .toast-body .toast-body-content")).length && $toastContent.text(e),
    $(".toast").addClass(t),
    $(".toast").toast("show")
}
function hideAlert() {
    $(".toast").toast("hide")
}
class Modal {
    constructor(e) {
        if (0 == $(e).length)
            throw new Error("Cannot find modal element " + e);
        this.modal = $(e).modal(),
        this.modalElem = $(e);
        var t = this;
        $(document).off("shown.bs.modal", e),
        $(document).on("shown.bs.modal", e, function(e) {
            t.innerBeforeShowFunction && t.innerBeforeShowFunction(t.modal)
        })
    }
    beforeShow(e) {
        return this.innerBeforeShowFunction = e,
        this
    }
    afterHide(e) {
        if (e) {
            const t = this;
            this.modal.off("hidden.bs.modal"),
            this.modal.on("hidden.bs.modal", function() {
                e(t.modal)
            })
        }
        return this
    }
    confirm(e) {
        var t = this
          , n = $(t.modalElem).find(".confirm-modal-button");
        return n && (n.off("click", t.modalName),
        n.on("click", t.modalName, function() {
            e && e(t.modal)
        })),
        this
    }
    cancel(e) {
        var t = this
          , n = $(t.modalElem).find(".cancel-modal-button");
        return n && (n.off("click", t.modalName),
        n.on("click", t.modalName, function() {
            e && e(t.modal)
        })),
        this
    }
    show() {
        return this.modal.modal("show"),
        this
    }
}
var localStorageWrapper = function() {
    "use strict";
    return {
        isLocalStorageEnabled: function() {
            if ("undefined" == typeof Storage)
                return !1;
            try {
                return localStorage.setItem("lcs", 1),
                localStorage.removeItem("lcs"),
                !0
            } catch (e) {
                return !1
            }
        },
        getItem: function(e) {
            return this.isLocalStorageEnabled() ? window.localStorage.getItem(e) : Cookies.get(e) || null
        },
        setItem: function(e, t) {
            this.isLocalStorageEnabled() ? window.localStorage.setItem(e, t) : Cookies.set(e, t, {
                expires: 365
            })
        },
        removeItem: function(e) {
            this.isLocalStorageEnabled() ? window.localStorage.removeItem(e) : Cookies.remove(e)
        }
    }
}();
function changeLocation(e) {
    var t;
    e && (null != (t = "function" == typeof Loader ? new Loader("body") : null) && t.show(),
    window.location.href = e)
}
function replaceLocation(e) {
    var t;
    e && (null != (t = "function" == typeof Loader ? new Loader("body") : null) && t.show(),
    window.location.replace(e),
    null != t) && t.hide()
}
function reloadLocation() {
    var e = "function" == typeof Loader ? new Loader("body") : null;
    null != e && e.show(),
    window.location.reload(!0)
}
function changeLocationPathName(e) {
    var t;
    e && (null != (t = "function" == typeof Loader ? new Loader("body") : null) && t.show(),
    window.location.pathname = e)
}
$.ajaxPrefilter(function(e, t, n) {
    e.crossDomain || (n.setRequestHeader(__TabletkiConstants.xsrfHearerName, $(`input:hidden[name="${__TabletkiConstants.xsrfFormName}"]`).val()),
    n.setRequestHeader("tabletki-ajax", (new Date).getTime()),
    0 < $("#correlationId").length && "" != $("#correlationId").val() && n.setRequestHeader("Correlation-Id", $("#correlationId").val()))
});
const LogLevel = {
    Information: "Information",
    Warning: "Warning",
    Error: "Error"
};
!function() {
    function c(e, t) {
        e.Level = t;
        t = e,
        (e = {}).RequestName = window.location.href,
        e.UserAgent = navigator.userAgent,
        e.NetworkType = navigator.connection ? navigator.connection.effectiveType : "Unknown";
        t = $.extend({}, t, e),
        e = new XMLHttpRequest;
        e.open("POST", "/ajax/log/script", !0),
        e.setRequestHeader("Content-Type", "application/json"),
        e.setRequestHeader("tabletki-ajax", (new Date).getTime().toString());
        try {
            e.send(JSON.stringify(t))
        } catch (e) {}
    }
    window.addEventListener("error", function(e) {
        var {message: t, filename: n, lineno: i, colno: o, error: r} = e
          , a = "00" == "" + n + i + o
          , t = a ? "Unknown JavaScript error in external script" : t + ` at ${n}:${i}:` + o
          , i = n && (n.startsWith("chrome-extension://") || n.startsWith("moz-extension://"))
          , o = a || i ? LogLevel.Warning : LogLevel.Error;
        if ((a = {}).ErrorMessage = t,
        i && n)
            try {
                var s = new URL(n)
                  , l = s.host;
                a.ExtensionId = l,
                a.ExtensionType = s.protocol.replace(":", "")
            } catch (e) {
                console.warn("Помилка обробки URL:", n, e)
            }
        r && (a.Error = r.toString(),
        r.cause && (a.ErrorCause = r.cause.toString()),
        r.stack) && (a.StackTrace = r.stack.toString()),
        c(a, o)
    }),
    window.logScriptError = function(e) {
        var t = {};
        t.Text = e,
        c(t, LogLevel.Error)
    }
    ,
    window.sendScriptLog = c
}();
var gaHelper = function() {
    "use strict";
    return {
        pushRaw: function(e) {
            window.dataLayer = window.dataLayer || [],
            window.dataLayer.push(e)
        },
        push: function(e, t) {
            t = t || {};
            e = Object.assign({}, {
                event: e
            }, t);
            this.pushRaw(e)
        }
    }
}();
function isMobileView() {
    return window.matchMedia("(max-width: 900px)").matches
}
function isMapMobileView() {
    return window.matchMedia("(max-width: 930px)").matches
}
function isLaptopView() {
    return window.matchMedia("(min-width: 1200px)").matches
}
$(function() {
    $(".ga-home-page").click(function() {
        gaHelper.push("Main_Click")
    }),
    $(".ga-catalog").click(function() {
        gaHelper.push("Search_&_Catalog_Click")
    }),
    $(".ga-bread-crumbs").click(function() {
        gaHelper.push("Bread_Crumbs_Click")
    }),
    $(".ga-cabinet").click(function() {
        gaHelper.push("Personal_Account_Click")
    }),
    $(".ga-shopping-list").click(function() {
        gaHelper.push("ShoppingList_Click")
    }),
    $(".ga-cart-click").click(function() {
        gaHelper.push("Cart_Click")
    }),
    $(".ga-prod-instructions").click(function() {
        gaHelper.push("Instruction_Click")
    }),
    $(".ga-prod-descr").click(function() {
        gaHelper.push("Description_Click")
    }),
    $(".ga-prod-main").click(function() {
        gaHelper.push("All_About_Product_Click")
    }),
    $(".ga-prod-share").click(function() {
        gaHelper.push("Product_Card_Sharring")
    }),
    $(".ga-prod-shoplist").click(function() {
        gaHelper.push("ShoppingList_Adding")
    }),
    $(".ga-prod-pharmacy").click(function() {
        gaHelper.push("Pharmacies_Button_Click")
    }),
    $(".ga-prod-faq").click(function() {
        gaHelper.push("FAQ_Link_Click")
    }),
    $(".ga-prod-analogs").click(function() {
        gaHelper.push("Analogs_Link_Click")
    }),
    $(".ga-cart-add").click(function() {
        gaHelper.push("Cart_Click")
    }),
    $(".ga-cart-remove").click(function() {
        gaHelper.push("Cart_Item_Removing")
    }),
    $(".ga-cart-confirm-reserve").click(function() {
        gaHelper.push("Reserve_Confirmation_Click")
    }),
    $(".ga-cart-open").click(function() {
        gaHelper.push("Open_Cart")
    }),
    $(".ga-cart-continue").click(function() {
        gaHelper.push("Continue_Click")
    }),
    $(".ga-cart-qty-change").click(function() {
        gaHelper.push("Quantity_Changing")
    }),
    $(".ga-fav-pharmacy-add").click(function() {
        gaHelper.push("My_Pharmacy_Adding")
    }),
    $(".ga-fav-pharmacy-remove").click(function() {
        gaHelper.push("My_Pharmacy_Removing")
    }),
    $(".ga-fav-sku-add").click(function() {
        gaHelper.push("Favorite_Goods_Adding")
    }),
    $(".ga-fav-sku-remove").click(function() {
        gaHelper.push("Favorite_Goods_Removing")
    }),
    $(".ga-shoplist-item-add").click(function() {
        gaHelper.push("ShoppingList_Item_Adding")
    }),
    $(".ga-shoplist-item-remove").click(function() {
        gaHelper.push("ShoppingList_Item_Removing")
    }),
    $(".ga-shoplist-filter").click(function() {
        gaHelper.push("Filters_Click")
    }),
    $(".ga-shoplist-filter-save").click(function() {
        gaHelper.push("Filters_ Applied")
    }),
    $(".ga-shoplist-pharmacy").click(function() {
        gaHelper.push("ShoppingList_Pharmacies_Click_Applied")
    }),
    $(".ga-shoplist-tab").click(function() {
        gaHelper.push("ShoppingList_Click")
    })
}),
$(function() {
    window.GAEcommerceEvents = {};
    var n = {
        event: "autoEvent",
        eventCategory: "Ecommerce"
    };
    function s(e, t) {
        t = $.extend({}, n, {
            eventAction: e
        }, t);
        t.eventAction = e,
        gaHelper.pushRaw(t)
    }
    $(document.body).on("click", "[data-ga-select-content-event] [data-ga-event-trigger]", function() {
        var e = $(this).closest("[data-ga-select-content-event]")
          , t = e.data("ga-product-id")
          , n = e.data("ga-product-name")
          , i = e.data("ga-product-brand")
          , o = e.data("ga-product-price");
        s("product_click", {
            ecommerce: {
                click: {
                    actionField: {
                        stores: e.data("ga-product-stores")
                    },
                    products: [{
                        id: null == t ? void 0 : t.toString(),
                        name: n,
                        brand: i,
                        price: o,
                        quantity: 1
                    }]
                }
            }
        })
    }),
    $(document).ready(function() {
        var e, t, n, i, o = $("[data-ga-view-item-event]");
        0 !== o.length && (e = o.data("ga-product-id"),
        t = o.data("ga-product-name"),
        n = o.data("ga-product-stores"),
        i = o.data("ga-product-brand"),
        o = o.data("ga-product-price"),
        s("view_item", {
            ecommerce: {
                view_item: {
                    actionField: {
                        stores: n
                    },
                    products: [{
                        id: null == e ? void 0 : e.toString(),
                        name: t,
                        brand: i,
                        price: o,
                        quantity: 1
                    }]
                }
            }
        }))
    }),
    $(document.body).on("ga-add-to-cart", "[data-ga-add-to-cart-event]", function(e, t) {
        var n = $(this)
          , i = n.data("ga-product-id")
          , o = n.data("ga-product-name")
          , r = n.data("ga-product-brand")
          , a = n.data("ga-product-price");
        s("addToCart", {
            ecommerce: {
                currencyCode: "UAH",
                add: {
                    actionField: {
                        event_id: n.data("ga-order-id")
                    },
                    products: [{
                        id: null == i ? void 0 : i.toString(),
                        name: o,
                        brand: r,
                        price: a,
                        quantity: t.count
                    }]
                }
            }
        })
    }),
    $(document.body).on("ga-remove-from-cart", "[data-ga-remove-from-cart-event]", function(e, t) {
        var n = $(this)
          , i = n.data("ga-product-id")
          , o = n.data("ga-product-name")
          , r = n.data("ga-product-brand")
          , a = n.data("ga-product-price");
        s("remove_from_cart", {
            ecommerce: {
                currencyCode: "UAH",
                remove: {
                    actionField: {
                        event_id: n.data("ga-order-id")
                    },
                    products: [{
                        id: null == i ? void 0 : i.toString(),
                        name: o,
                        brand: r,
                        price: a,
                        quantity: t.count
                    }]
                }
            }
        })
    }),
    $(document).ready(function() {
        var r, e, t, n = $("[data-ga-checkout-event]");
        0 !== n.length && (r = [],
        e = n.data("ga-order-id"),
        t = !0 === n.data("ga-order-with-delivery"),
        $("[data-ga-product-item]", n).each(function() {
            var e = $(this)
              , t = e.data("ga-product-id")
              , n = e.data("ga-product-name")
              , i = e.data("ga-product-brand")
              , o = e.data("ga-product-price")
              , e = e.data("ga-product-quantity");
            r.push({
                id: null == t ? void 0 : t.toString(),
                name: n,
                brand: i,
                price: o,
                quantity: e
            })
        }),
        s("checkout", {
            ecommerce: {
                currencyCode: "UAH",
                checkout: {
                    actionField: {
                        event_id: e,
                        delivery_status: t
                    },
                    products: r
                }
            }
        }))
    }),
    $(document).ready(function() {
        var r, e, t, n, i, o = $("[data-ga-purchase-event]");
        0 !== o.length && (r = [],
        e = o.data("ga-order-id"),
        t = o.data("ga-order-code"),
        n = o.data("ga-order-price"),
        i = !0 === o.data("ga-order-with-delivery"),
        $("[data-ga-product-item]", o).each(function() {
            var e = $(this)
              , t = e.data("ga-product-id")
              , n = e.data("ga-product-name")
              , i = e.data("ga-product-brand")
              , o = e.data("ga-product-price")
              , e = e.data("ga-product-quantity");
            r.push({
                id: null == t ? void 0 : t.toString(),
                name: n,
                brand: i,
                price: o,
                quantity: e
            })
        }),
        s("purchase", {
            eventLabel: t,
            eventValue: n,
            ecommerce: {
                currencyCode: "UAH",
                purchase: {
                    actionField: {
                        event_id: e,
                        delivery_status: i
                    },
                    products: r
                }
            }
        }))
    }),
    GAEcommerceEvents.triggerAddToWithListGAEvent = function(e) {
        var t = e.data("ga-product-id")
          , n = e.data("ga-product-name")
          , i = e.data("ga-product-brand")
          , e = e.data("ga-product-price");
        s("add_to_wishlist", {
            ecommerce: {
                currencyCode: "UAH",
                add_to_wishlist: {
                    products: [{
                        id: null == t ? void 0 : t.toString(),
                        name: n,
                        brand: i,
                        price: e,
                        quantity: 1
                    }]
                }
            }
        })
    }
    ,
    GAEcommerceEvents.triggerAddToShoppingListGAEvent = function(e) {
        var t = e.data("ga-product-id")
          , n = e.data("ga-product-name")
          , i = e.data("ga-product-brand")
          , e = e.data("ga-product-price");
        s("add_to_shoppinglist", {
            ecommerce: {
                currencyCode: "UAH",
                add_to_shoppinglist: {
                    products: [{
                        id: null == t ? void 0 : t.toString(),
                        name: n,
                        brand: i,
                        price: e,
                        quantity: 1
                    }]
                }
            }
        })
    }
    ,
    GAEcommerceEvents.triggerSearchGAEvent = function(e) {
        s("search", {
            search: {
                search_query: e
            }
        })
    }
    ,
    $(document).ready(function() {
        var e, t = $("[data-ga-delivery-event]");
        0 !== t.length && !1 != (!0 === t.data("ga-order-with-delivery")) && (e = t.data("ga-order-id"),
        s("delivery_complete", {
            delivery: {
                city: t.data("ga-order-city"),
                post_type: t.data("ga-order-post-type"),
                product_quantity: t.data("ga-order-product-quantity"),
                event_id: e
            }
        }))
    }),
    GAEcommerceEvents.triggerSuccessSignUpGAEvent = function(e) {
        s("registration", {
            eventCategory: "login",
            eventLabel: e
        })
    }
    ,
    GAEcommerceEvents.triggerSuccessSignInGAEvent = function(e) {
        s("login", {
            eventCategory: "login",
            eventLabel: e
        })
    }
}),
$(document).ready(function() {
    var e, t, n = 14, i = {
        wasShown: !1,
        wasClosed: !1
    }, o = "tabletki.applink", r = $(".app-link");
    function a() {
        try {
            var e = Cookies.get(o);
            return e ? JSON.parse(e) : i
        } catch (e) {
            return s(i),
            i
        }
    }
    function s(e) {
        e = JSON.stringify(e);
        Cookies.set(o, e, {
            expires: n
        })
    }
    r.on("click", ".icon-close", function() {
        r.removeClass("active");
        var e = a();
        e.wasClosed = !0,
        s(e)
    }),
    isMobileView() && (e = a(),
    t = "pageLinkClosed",
    Cookies.get(t)) && !0 !== e.wasShown && !0 !== e.wasClosed && (e = Cookies.get(t),
    (t = new Date(e)).setDate(t.getDate() + 14),
    t <= new Date) && setTimeout(function() {
        r.addClass("active")
    }, 5e3)
}),
$(document).ready(function() {
    function e(e) {
        e.length && e.hasClass("show") && (e.modal("hide"),
        $(".modal-backdrop").css("top", "0"))
    }
    function t(i, e, o) {
        var r = $(".container__page").hasClass(e);
        $(i).hover(function() {
            var e = $(this)
              , t = !o || e.find(".dropdown-products__list li").length
              , n = !!o && o.find(".scrollable-wrap");
            !r && t ? ($(e).addClass("show"),
            $(e).find(".dropdown-menu").stop(!0, !0).fadeIn(200)) : t || ($(e).removeClass("show"),
            $(e).find(".dropdown-menu").stop(!0, !0).fadeOut(50)),
            n && n.get(0).scrollHeight > Math.round(n.height()) ? i.addClass("scroll-active") : i.removeClass("scroll-active")
        }, function() {
            r || ($(this).removeClass("show"),
            $(this).find(".dropdown-menu").stop(!0, !0).delay(100).fadeOut(100))
        })
    }
    var n, i;
    $(window).resize(function() {
        $("#menuLevel_1").length && !isMobileView() && (location.href = "/category/"),
        e($("#menuModal")),
        e($("#menuServicesModall"))
    }),
    $(".header__button-catalog").on("click", function(e) {
        var t = $(this);
        t.hasClass("show") ? (t.removeClass("show"),
        $("#menuModal").modal("hide"),
        $(".modal-backdrop").css("top", "0")) : (t.addClass("show"),
        $("#menuModal").modal("show"),
        $("body").hasClass("banner-active"),
        $(".modal-backdrop").css({
            top: "60px",
            position: "absolute"
        }),
        $("html, body").animate({
            scrollTop: 0
        }, 150))
    }),
    $("#menuModal").on("hidden.bs.modal", function() {
        $(".menu__level-two").addClass("d-none"),
        $(".header__button-catalog").removeClass("show"),
        $(".menu__container").removeClass("large")
    }),
    $("#menuModal").on("show.bs.modal", function() {
        new ajaxWrapper("/category/menu").post(function(e) {
            $("#menuModal .modal-body").html(e)
        })
    }),
    $("#menuModal").on("mouseover", ".menu__level-one .menu__item", function() {
        var e = $(this).attr("id") + "_1";
        $("#" + e).length && ($(".menu__level-two .menu__sublevel").removeClass("d-none").addClass("d-none"),
        $(".menu__container").removeClass("large").addClass("large"),
        $("#" + e).removeClass("d-none"),
        $(".menu__level-two").removeClass("d-none"))
    }),
    $("#userLogoutItem").on("click", function(e) {
        var t = $("#userLoginItem");
        t.hasClass("logged-in") && (t.removeClass("logged-in"),
        $(".menu-panel__subitem").addClass("disabled"),
        $("#userLogoutItem").addClass("d-none"),
        t.find("a span").text("Вход / Регистрация"))
    }),
    $("body").on("click", "#userLogout", function() {
        return new Modal("#confirmLogoutModal").confirm(function(e) {
            new ajaxWrapper("/cabinet/logout").post(function(e) {
                reloadLocation()
            }),
            e.modal("hide")
        }).show(),
        !1
    }),
    t($(".shopping-list-dropdown"), "shopping-list", $(".shopping-list-dropdown")),
    t($(".shopping-card-top__dropdown"), "shopping-card", $(".shopping-card-top__dropdown")),
    t($(".profile-dropdown")),
    $(".header__button-services").on("click", function() {
        var e = $(this)
          , t = e.offset().left;
        e.hasClass("show") ? ($("#menuServicesModal").modal("hide"),
        $(".modal-backdrop").css("top", "0")) : (e.addClass("show"),
        $("#menuServicesModal").modal("show"),
        $(".modal-menu-services .modal-dialog").css("left", t),
        $("body").hasClass("banner-active"),
        $(".modal-backdrop").css({
            top: "60px",
            position: "absolute"
        }),
        $("html, body").animate({
            scrollTop: 0
        }, 150))
    }),
    $("#menuServicesModal").on("hidden.bs.modal", function() {
        $(".header__button-services").removeClass("show")
    }),
    n = $("#app-dropdown"),
    i = $(".header__button-app"),
    $(document).mouseup(function(e) {
        i.is(e.target) || 0 !== i.has(e.target).length || n.is(e.target) || 0 !== n.has(e.target).length || (n.removeClass("show"),
        i.addClass("collapsed"))
    }),
    $(document).on("keyup", function(e) {
        "Escape" === e.key && (n.removeClass("show"),
        i.addClass("collapsed"))
    }),
    $("#shoppingCardTopMenu").on("click", ".dropdown-products__delete-btn", function() {
        var e = $(this)
          , t = e.data("code").toString()
          , n = e.data("pharmacy").toString()
          , i = e.data("ga-order-id")
          , t = {
            innerCode: t,
            pharmacyId: n,
            count: e.data("ga-product-quantity"),
            orderId: i,
            delivery: "1" == e.data("delivery")
        };
        e.trigger("ga-remove-from-cart", [{
            count: t.count
        }]),
        deleteItemFromCartRequest(t, !1)
    }),
    $("#shoppingListTopMenu").on("click", ".dropdown-products__delete-btn", function() {
        var i = $(this).closest(".dropdown-products__list-item")
          , o = $(i).data("code").toString()
          , e = $(i).data("type");
        deleteShoppingListItemRequest({
            code: o,
            type: e
        }, function(e) {
            var t, n;
            e = e,
            t = $("#headerShoppingListBadge"),
            n = $("#dropdownShoppingListBadge"),
            e = 1 <= e ? e : "+",
            t.html(e),
            n.html(e),
            showAlert(Global.ShoppingListRemoveGoods),
            i.remove(),
            $(`.btn.btn-link.btn-to-list[data-intcode="${o}"]`).removeClass("selected")
        })
    }),
    $(document).on("click", ".container-warning-opener", function() {
        var e = $(this).data("action");
        new ajaxWrapper(e).get(function(e) {
            $("#containerWarningContent").html(e),
            new Modal("#containerWarningModal").show()
        })
    })
}),
$(document).ready(function() {
    function n(t) {
        new ajaxWrapper("/ajax/locations/getCities/").get(function(e) {
            document.querySelector("#sidepanelMenuCityBody").innerHTML = e,
            i(),
            "function" == typeof t && t()
        })
    }
    function t() {
        var e = $("#sidepanelMenuCity .search-items__container");
        e.hasClass("search-fixed") && (e.removeClass("search-fixed"),
        $("#sidepanelMenuCity .sidepanel__container").removeClass("full-width"),
        $("body").css("overflow-y", "auto"),
        $(".search-items__backdrop").length && $(".search-items__backdrop").remove(),
        $(".search-items__container .search-close").length && $(".search-items__container .search-close").remove(),
        $("html, body").animate({
            scrollTop: 0
        }, 200))
    }
    function i() {
        0 < $("#sidepanelCitySearch").length && ($("#sidepanelCitySearch").autocomplete({
            source: function(e, t) {
                new ajaxWrapper("/ajax/locations/searchCity/").data({
                    searchText: e.term
                }).get(function(e) {
                    t(e)
                })
            },
            select: function(e, t) {
                o(t.item)
            },
            appendTo: "#sidepanelCitySearchHolder",
            open: function() {
                isMobileView() && adjustAutoCompletePosition(".сity__search", ".ui-autocomplete.sidepanelCitySearch")
            },
            close: function() {}
        }).autocomplete("instance")._renderItem = function(e, t) {
            t = $("<li class='search-autocomplete-group'></li>").append("<div class='search-top__item single'><span>" + t.name + "</span><img src='/images/left-top-arrow-2.svg' width='32' height='32'></div>");
            return t.appendTo(e),
            $(e).addClass("sidepanelCitySearch"),
            t
        }
        ,
        $("#sidepanelMenuCity").off("click", ".search-items__container"),
        $("#sidepanelMenuCity").on("click", ".search-items__container", function(e) {
            e.target == this ? (t(),
            $("#sidepanelCitySearch").autocomplete("close")) : "searchCityClear" == e.target.id ? ($("#sidepanelCitySearch").val(""),
            $("#sidepanelCitySearch").trigger("focus"),
            $("#searchCityClear").addClass("d-none")) : "sidepanelCitySearch" == e.target.id && $("html, body").animate({
                scrollTop: 0
            }, {
                duration: 200,
                complete: function() {
                    $("#sidepanelMenuCity .sidepanel__container").addClass("full-width"),
                    0 == $("#sidepanelMenuCityBody .search-items__container .search-close").length && $('<div class="search-close d-none" id="searchCityClear"></div>').insertBefore("#sidepanelCitySearch")
                }
            })
        }),
        $("#sidepanelCitySearch").on("keyup", function() {
            var e = $("#searchCityClear")
              , t = $(this);
            e.length && (t.val() ? e.removeClass("d-none") : e.addClass("d-none"))
        }))
    }
    function o(e) {
        new ajaxWrapper("/ajax/locations/changeCity").data({
            locationId: e.id
        }).post(function(e) {
            var t, n, i;
            "undefined" != typeof PreGeoLocation && PreGeoLocation.resetGeoSettings(),
            !0 === $("#isSelectedCategory").data("value") ? (n = e,
            t = decodeURI(location.pathname),
            location.pathname = t.replace(n.from, n.to)) : (t = window.location.pathname,
            /(.*\/pharmacy\/)(.*)/.test(t) || /(.*\/tm\/)(\d*\/)/.test(t) ? (n = e,
            null != (e = "function" == typeof Loader ? new Loader("body") : null) && e.show(),
            e = decodeURI(location.pathname),
            i = decodeURI(n.from),
            n = decodeURI(n.to),
            location.pathname = e.replace(i, n)) : reloadLocation())
        })
    }
    window.MenuCity = {
        showSidePanelMenuCity: n,
        toggleMobileSearch: function() {
            0 < $("#sidepanelCitySearch").length && ($("#sidepanelCitySearch").autocomplete("close"),
            isMobileView() || $(".search-items__container").hasClass("search-fixed") && t())
        }
    },
    i(),
    $("#openAddressPanel").on("click", function() {
        return new ajaxWrapper("/ajax/locations/getCities/").get(function(e) {
            $(e).insertAfter("#sidepanelMenuCity .sidepanel__header"),
            i(),
            sidePanel.openSidepanel("sidepanelMenuCity")
        }),
        !1
    }),
    $(".header__button-address, .header__city-mobile").on("click", function() {
        n();
        var e = $("#sidepanelMenuCity")
          , t = (new Modal(e).show(),
        $(this).addClass("show"),
        $(this));
        return e.on("hidden.bs.modal", function() {
            t.removeClass("show")
        }),
        !1
    }),
    $("#sidepanelMenuCity").on("click", ".tag", function() {
        $(this).hasClass("tag__active") || ($(this).find(".tag__active").removeClass("tag__active"),
        $(this).addClass("tag__active"),
        sidePanel.closeSidepanel("sidepanelMenuCity"),
        o({
            id: $(this).data("id"),
            name: $(this).text()
        }))
    })
}),
$(document).on("show.bs.tooltip", ".tooltiped", function() {
    $($(this).data("bs.tooltip").tip).addClass("text-tooltip")
}),
$(document).on("show.bs.modal", ".modal", function() {
    var e = 1040 + 10 * $(".modal:visible").length;
    $(this).css("z-index", e),
    setTimeout(function() {
        $(".modal-backdrop").not(".modal-stack").css("z-index", e - 1).addClass("modal-stack")
    }, 0)
}),
$(document).on("show.bs.modal", "#largeImagesModal", function() {
    $(this).css("z-index", 4010),
    setTimeout(function() {
        $(".modal-backdrop").css("z-index", 4009).addClass("modal-stack")
    }, 0)
}),
$("#largeImagesModal").on("hidden.bs.modal", function(e) {
    $(this).find("#carouselLargeImages").empty()
}),
$("#sidepanelBranch").on("click", ".product-photo__image .carousel-item", function(e) {
    $el = $(this);
    var t = $("#largeImagesModal")
      , n = t.find("#carouselLargeImages")
      , i = $("#carouselPharmacyPhoto").find(".product-photo__circle-indicators")
      , o = $el.parent().clone()
      , r = !0;
    o.find(".carousel-item img").each(function(e, t) {
        $(t).attr("src", $(t).data("big-uri")),
        "" == $(t).data("big-uri") && (r = !1)
    }),
    o.length && (n.find(".carousel-inner").remove(),
    o.appendTo(n)),
    i.length && 1 < i.find("li").length && (i.clone().appendTo(n),
    n.find(".product-photo__circle-indicators li").attr("data-target", "#carouselLargeImages"),
    680 < window.innerWidth) && ($("<a class='carousel-control-prev' href='#carouselLargeImages' role='button' data-slide='prev'><button class='btn btn-carousel btn-carousel-prev'></button><span class='sr-only'>Previous</span></a>").appendTo(n),
    $("<a class='carousel-control-next' href='#carouselLargeImages' role='button' data-slide='next'><button class='btn btn-carousel btn-carousel-next'></button><span class='sr-only'>Next</span></a>").appendTo(n)),
    r && t.modal("show")
}),
$(".tabbar-nav__item").click(function() {
    var e = $(this);
    console.log(e),
    $(".tabbar-nav__item").data("active", ""),
    e.data("active", "active")
}),
$("#btnHeaderCatalog").click(function() {
    document.location.href = $(this).data("url")
}),
$(".selectLang").on("change", "input[name='sw']", function() {
    var e = $(this).data("culture-first")
      , t = $(this).data("culture-second")
      , e = ($(this).is(":checked") ? $("[name=culture]").val(e) : $("[name=culture]").val(t),
    window.location.pathname + ("" != window.location.search ? window.location.search : ""));
    return $("[name=returnUrl]").val(e),
    $(".selectLang").parent().submit(),
    !1
}),
$(".select-language-group").on("change", ".btn-check", function() {
    var e = $("#btnUkrRadio").data("culture")
      , t = $("#btnRusRadio").data("culture")
      , e = ($("#btnUkrRadio").is(":checked") ? $("[name=culture]").val(e) : $("[name=culture]").val(t),
    window.location.pathname + ("" != window.location.search ? window.location.search : ""));
    return $("[name=returnUrl]").val(e),
    $(".select-language-group").parent().submit(),
    !1
}),
$(".selectLangHome").on("click", function() {
    var e = $(this).data("culture")
      , e = ($("[name=culture]").val(e),
    window.location.pathname + ("" != window.location.search ? window.location.search : ""));
    return $("[name=returnUrl]").val(e),
    $(".selectLangHome").parent().submit(),
    !1
}),
jQuery.ui.autocomplete.prototype._resizeMenu = function() {
    this.menu.element.outerWidth(this.element.outerWidth())
}
;
var sidePanel = function() {
    "use strict";
    function t(e) {
        $("#" + e).removeClass("visible"),
        $("#" + e).attr("aria-hidden", "true"),
        $("#" + e).attr("tabindex", "-1"),
        $("#" + e).find(".sidepanel__container").width(0),
        isMobileView() && $("html, body").css("overflow-y", "")
    }
    return $(".sidepanel").on("click", function(e) {
        e.target == this && t($(e.target).attr("id"))
    }),
    $("body").tooltip({
        selector: '[data-toggle="tooltip"]'
    }),
    $(document).on("click", ".sidepanel .close, .sidepanel__header", function(e) {
        t($(e.target).parents(".sidepanel").attr("id"))
    }),
    {
        openSidepanel: function(t, e) {
            e && e(t);
            e = 411;
            680 < $(window).width() && $("#" + t).hasClass("sidepanel-filter") ? e = 600 : 680 < $(window).width() && $("#" + t).hasClass("sidepanel-delivery-map") && (e = $(window).width()),
            isMobileView() && $("html, body").css("overflow-y", "hidden"),
            $("#" + t).find(".sidepanel__container").width(e),
            $("#" + t).addClass("visible"),
            $("#" + t).find('[data-toggle="tooltip"]').tooltip(),
            $("#" + t).attr("aria-hidden", null),
            $("#" + t).attr("tabindex", null),
            setTimeout(function() {
                var e;
                isMobileView() && (e = $("#" + t).find(".sidepanel__container").width(),
                $("#" + t).find(".sidepanel__header").length) && $("#" + t).find(".close").css("left", e)
            }, 300)
        },
        closeSidepanel: function(e) {
            t(e)
        }
    }
}()
  , bottomPanel = function() {
    "use strict";
    function t(e) {
        $("#" + e).removeClass("visible"),
        $("#" + e).attr("aria-hidden", "true"),
        $("#" + e).attr("tabindex", "-1"),
        $("#" + e).find(".bottompanel__container").height(0)
    }
    return $(".bottompanel").on("click", function(e) {
        e.target == this && t($(e.target).attr("id"))
    }),
    $(document).on("click", ".bottompanel .close, .bottompanel__header", function(e) {
        t($(e.target).parents(".bottompanel").attr("id"))
    }),
    {
        openBottompanel: function(e, t) {
            t && t(e),
            $("#" + e).find(".bottompanel__container").css("height", "auto"),
            $("#" + e).attr("aria-hidden", null),
            $("#" + e).attr("tabindex", null),
            setTimeout(function() {
                $("#" + e).addClass("visible")
            }, 300)
        },
        closeBottompanel: function(e) {
            t(e)
        }
    }
}()
  , body = document.querySelector("body");
function scrollbarVisible(e) {
    return e && e.scrollHeight > e.clientHeight
}
function iosHideBodyScroll(e, t) {
    t && !scrollbarVisible(t) && e.preventDefault()
}
var _touchmoveHandler = function(e) {
    iosHideBodyScroll(e, $(".headerSearchSmall")[0])
};
function hideSearchSmallContainer() {
    $(".container__search-small").hasClass("search-fixed") && ($(".container__search-small").removeClass("search-fixed"),
    $("body").removeClass("body-hidden"),
    body.removeEventListener("touchmove", _touchmoveHandler, {
        passive: !1
    }),
    $(".container__search-small--backdrop").length && $(".container__search-small--backdrop").remove(),
    $(".container__search-small .search-close").length && $(".container__search-small .search-close").remove(),
    $("html, body").animate({
        scrollTop: 0
    }, 20))
}
function showSearchSmallContainer() {
    $("html, body").animate({
        scrollTop: 0
    }, {
        duration: 20,
        complete: function() {
            $("body").addClass("body-hidden"),
            body.addEventListener("touchmove", _touchmoveHandler, {
                passive: !1
            }),
            $(".container__search-small").addClass("search-fixed"),
            0 == $(".container__search-small--backdrop").length && $('<div class="container__search-small--backdrop"></div>').insertAfter(".container__search-small"),
            0 == $(".container__search-small .search-close").length && $('<div class="search-close d-none" id="searchSmallClear"></div>').insertBefore("#headerSearchSmall")
        }
    })
}
$("#headerSearchSmall").on("click", function(e) {
    $(".container__search-small").hasClass("search-fixed") || showSearchSmallContainer()
}),
$(".container__search-small").on("click", function(e) {
    e.preventDefault(),
    e.target == this ? (hideSearchSmallContainer(),
    $("#headerSearchSmall").autocomplete("close")) : "searchSmallClear" == e.target.id && ($("#headerSearchSmall").val(""),
    $("#headerSearchSmall").trigger("focus"),
    $("#searchSmallClear").addClass("d-none"))
}),
$("#headerSearchSmall").on("keydown", function(e) {
    !isMobileView() || $(".container__search-small").hasClass("search-fixed") || showSearchSmallContainer()
}),
$("#headerSearchSmall").on("keyup", function(e) {
    $el = $(this),
    ($clear = $("#searchSmallClear")).length && ($el.val() ? $clear.removeClass("d-none") : $clear.addClass("d-none"))
});
var shoppingListLink = $("#shoppingListLink").attr("href")
  , extendedSearchLink = $("#extendedSearchLink").attr("href");
function renderHeaderSearchItem(e, t, n, i) {
    var i = $.ui.autocomplete.escapeRegex(i)
      , i = new RegExp(i,"i")
      , o = ""
      , r = e.find("li");
    if (isMobileView() || (r.length || 4 === t.type ? (e.removeClass("p-0 border-0"),
    $("#" + n).removeClass("list-empty")) : (e.addClass("p-0 border-0"),
    $("#" + n).addClass("list-empty"))),
    0 == t.type)
        o = $("<li class='search-top__group search-top__group--name ui-state-disabled'><label class='search-top__label'> " + t.name + "</label></li>");
    else if (1 == t.type)
        r = t.name.replace(i, "<span class='green'>$&</span>"),
        i = "" == t.pageLocation ? "ui-state-disabled" : "",
        o = "" !== t.image ? $("<li class='search-top__group " + i + "'><div class='search-top__item'><div class='search-top__image-info-row'><div class='search-top__img-container'><img alt='' src='" + t.image + "' height='36' width='36'></div><div class='search-top__info-container'><h4>" + r + "</h4><div class='search-top__details'>" + t.description + "</div></div></div></div></li>") : $("<li class='search-top__group " + i + "'><div class='search-top__item'><div class='search-top__image-info'><h4>" + r + "</h4><div class='search-top__details'>" + t.description + "</div></div></div></li>");
    else if (2 == t.type)
        o = $(`<li class='search-top__group search-top__group--name'><a class='btn btn-secondary search-top__btn justify-content-start'><span>${Global.AllSearchResults}</span></a></li>`);
    else if (3 == t.type)
        (o = $("<li class='search-top__group search-top__group-buttons search-top__group--name ui-state-disabled'><div class='search-top__search-buttons' style='pointer-events: all'>" + `<a class='btn btn-search-top' href='${shoppingListLink}'><img src='/images/icon-search-list-orange-2.svg' width='32' height='32'><span>${Global.SearchMultipleGoods}</span></a>` + "</div></li>")).appendTo(e);
    else if (4 == t.type)
        o = $("<li class='search-top__group search-top__group--name ui-state-disabled'><label class='search-top__nothing-found-label'>" + t.name + "</label></li>");
    else if (5 == t.type) {
        console.log("Tags: ", t);
        var a = $("<div class='tag-top-search__container' style='pointer-events: all'></div>");
        if (t.tags)
            for (const s of t.tags)
                a.append(`<div class='tag-top-search'>${s.title}</div>`);
        (o = $("<li class='search-top__group search-top__group--name ui-state-disabled'></li>")).append(a),
        o.appendTo(e)
    }
    return o.appendTo(e),
    $(e).addClass(n),
    o
}
function onAutoCompleteItemSelected(e, t) {
    if (!t.item)
        return !1;
    "" !== t.item.pageLocation && (GAEcommerceEvents.triggerSearchGAEvent(t.item.pageLocation),
    saveSuggestion(t.item, function() {
        changeLocation(t.item.pageLocation)
    }))
}
function saveSuggestion(e, t) {
    e && new ajaxWrapper("/ajax/search/saveSuggestion").data(e).json().always(t)
}
function getAutoCompleteSource(e, t) {
    new ajaxWrapper("/ajax/search/suggest").data({
        searchText: e.term
    }).post(t)
}
function adjustAutoCompletePosition(e, t) {
    var n, e = $(e);
    e.length && (n = e.offset()) && (n = n.top + e.height(),
    $(t).filter(":visible").css({
        top: n
    }))
}
function showHeaderSearchResults(t) {
    t = $.trim(t.val());
    if ("" != t && 3 <= t.length) {
        let e = "" != __TabletkiConstants.cultureName ? `/${__TabletkiConstants.cultureName}/search/${encodeURIComponent(t)}/` : `/search/${encodeURIComponent(t)}/`;
        GAEcommerceEvents.triggerSearchGAEvent(decodeURI(e)),
        saveSuggestion({
            name: t,
            code: "",
            screenViewType: "QCV"
        }, function() {
            changeLocation(e)
        })
    }
}
function deleteShoppingListItemRequest(e, t) {
    new ajaxWrapper("/shoppinglist/deleteItem").data(e).post(t)
}
function updateShoppingListBadge() {
    new ajaxWrapper("/ajax/shoppingList/getCurrent").post(function(e) {
        var t = "#headerShoppingListBadge"
          , n = "#shoppingListTopMenuDropdown"
          , e = $(e)
          , i = e.find(t)
          , e = e.find(n);
        $(t).text(i.html()),
        $(n).html(e.html())
    })
}
function deleteItemFromCartRequest(t, e=!0, n=null) {
    new ajaxWrapper("/ajax/shoppingCart/deleteItem").data(t).always(function() {
        updateShoppingCartBadge(e)
    }).json(function(e) {
        $("#pharmacyReserveCont_" + t.orderId).html(e),
        showAlert(Global.DeletedFromCart),
        "function" == typeof n && n()
    })
}
function updateShoppingCartBadge(i=!0) {
    new ajaxWrapper("/ajax/shoppingCart/getCurrent").post(function(e) {
        var t, n;
        i ? ($("#shoppingCartRightMenuCont").html(e),
        $("#smallMenuCartBadge").text($("#headerCartBadge").text())) : (t = "#headerCartBadge",
        n = (e = $(e)).find(t),
        e = e.find("#menuCont"),
        $(t).text(n.html()),
        $("#menuCont").html(e.html()))
    })
}
$("#headerSearchSmall").length && ($("#headerSearchSmall").autocomplete({
    source: getAutoCompleteSource,
    minLength: 0,
    select: onAutoCompleteItemSelected,
    appendTo: "#mobileSearchModal",
    open: function() {
        var e;
        isMobileView() && (adjustAutoCompletePosition(".container__search-small", ".ui-autocomplete.headerSearchSmall"),
        (e = $(".headerSearchSmall")).length) && window.visualViewport && (e.outerHeight(window.visualViewport.height),
        window.visualViewport.addEventListener("resize", function() {
            e.outerHeight(window.visualViewport.height)
        }))
    },
    close: function() {
        isMobileView() && $(".container__search-small--backdrop").length && $(".ui-autocomplete.headerSearchSmall").show()
    }
}).focus(function() {
    $(this).data("uiAutocomplete").search(""),
    $("#mobileSearchModal").addClass("focus-input")
}).autocomplete("instance")._renderItem = function(e, t) {
    return renderHeaderSearchItem(e, t, "headerSearchSmall", this.term)
}
),
$("#inpHeaderSearch").length && ($("#inpHeaderSearch").autocomplete({
    source: getAutoCompleteSource,
    open: function() {
        isMobileView() || $(this).addClass("menu-opened")
    },
    close: function() {
        isMobileView() || $(this).removeClass("menu-opened")
    },
    minLength: 0,
    select: onAutoCompleteItemSelected
}).focus(function() {
    var e = $(this).val();
    $(this).data("uiAutocomplete").search(e)
}).autocomplete("instance")._renderItem = function(e, t) {
    return renderHeaderSearchItem(e, t, "inpHeaderSearch", this.term)
}
),
$("#inpHeaderSearch").on("keyup", function(e) {
    $el = $(this),
    $clear = $("#inpHeaderSearchClear"),
    $searchAll = $("#inpHeaderSearchAllBtn"),
    $clear.length && ($el.val() ? $clear.removeClass("d-none") : $clear.addClass("d-none"))
}),
$("#inpHeaderSearchClear").on("click", function() {
    $("#inpHeaderSearch").val(""),
    $("#inpHeaderSearch").trigger("focus"),
    $("#inpHeaderSearchClear").addClass("d-none")
}),
$("#triggerSearchButton").on("click", function() {
    (isMobileView() ? ($(".container__search-small").addClass("search-fixed"),
    $("#headerSearchSmall")) : $("#inpHeaderSearch")).focus()
}),
$("#headerSearchLocation").length && ($("#headerSearchLocation").autocomplete({
    source: getAutoCompleteSource,
    open: function() {
        isMobileView() || $(this).addClass("menu-opened")
    },
    close: function() {
        isMobileView() || $(this).removeClass("menu-opened")
    },
    minLength: 0,
    select: onAutoCompleteItemSelected
}).focus(function() {
    $(this).data("uiAutocomplete").search("")
}).autocomplete("instance")._renderItem = function(e, t) {
    return renderHeaderSearchItem(e, t, "headerSearchLocation", this.term)
}
,
$(".location__search").on("click", function(e) {
    "homeSearchLocationItemsClear" == e.target.id && ($("#headerSearchLocation").val(""),
    $("#headerSearchLocation").trigger("focus"),
    $("#homeSearchLocationItemsClear").addClass("d-none"))
}),
$("#headerSearchLocation").on("keyup", function(e) {
    $el = $(this),
    $clear = $("#homeSearchLocationItemsClear"),
    $searchAll = $("#homeSearchLocationAllBtn"),
    $clear.length && ($el.val() ? $clear.removeClass("d-none") : $clear.addClass("d-none")),
    isMobileView() || $searchAll.length && ($el.val() ? $searchAll.removeClass("d-none") : $searchAll.addClass("d-none"))
})),
$("#homePageSearch").length && ($("#homePageSearch").autocomplete({
    source: getAutoCompleteSource,
    minLength: 0,
    select: onAutoCompleteItemSelected,
    open: function() {
        isMobileView() ? adjustAutoCompletePosition(".home__search", ".ui-autocomplete.homePageSearch") : $("#homePageSearch").addClass("show-dropdown")
    },
    close: function() {
        $("#homePageSearch").removeClass("show-dropdown "),
        isMobileView() && $(".home-backdrop").length && $(".ui-autocomplete.homePageSearch").show()
    }
}).focus(function() {
    var e = $(this).val();
    $(this).data("uiAutocomplete").search(e)
}).autocomplete("instance")._renderItem = function(e, t) {
    return renderHeaderSearchItem(e, t, "homePageSearch", this.term)
}
),
$("#headerSearchSmall").on("keypress", function(e) {
    $el = $(this),
    13 == e.which && showHeaderSearchResults($el)
}),
$("#homeSearchAllBtn, #inpHeaderSearchAllBtn, #homeSearchLocationAllBtn").on("click", function(e) {
    $el = $(this).parent().next(),
    $.trim($el.val()).length < 3 ? $el.autocomplete("search", "").trigger("focus") : showHeaderSearchResults($el)
}),
$("#inpHeaderSearch, #headerSearchLocation , #homePageSearch").on("keypress", function(e) {
    $el = $(this),
    13 == e.which && showHeaderSearchResults($el)
}),
$(".filter-group__show-all-btn, .sidepanel-filter .filter-group__show-all-btn").on("click", function(e) {
    $el = $(this),
    $parenGroup = $el.parent().find(".filter-group__body"),
    $el.toggleClass("full-list"),
    $parenGroup.toggleClass("hidden-items")
}),
$(".filter-group__search").on("input", function() {
    var t, e = $(this), n = e.parent().next(), e = e.val().trim(), i = 0;
    e ? (t = e.toLowerCase(),
    $(".custom-control.custom-checkbox[data-search]", n).each(function() {
        var e = $(this).data("search");
        ("number" == typeof e ? e.toString() : "string" == typeof e ? e : "").toLowerCase().includes(t) ? $(this).parent().show() : ($(this).parent().hide(),
        i++)
    }),
    i === $(".custom-control.custom-checkbox[data-search]", n).length ? n.addClass("pt-0").find(".filter-group__empty").show() : n.removeClass("pt-0").find(".filter-group__empty").hide()) : $(".custom-control.custom-checkbox[data-search]", n).each(function() {
        n.removeClass("pt-0").find(".filter-group__empty").hide(),
        $(this).parent().show()
    })
}),
$(".filter-group__search-container").on("click", function(e) {
    var t;
    "filterSearchItemsClear" == e.target.id && (e = $(e.target).next(),
    t = e.parent().next(),
    e.val(""),
    e.trigger("focus"),
    $("#filterSearchItemsClear").addClass("d-none"),
    $(".custom-control.custom-checkbox[data-search]", t).each(function() {
        t.removeClass("pt-0").find(".filter-group__empty").hide(),
        $(this).parent().show()
    }))
}),
$(".filter-group__search, .sidepanel-filter .filter-group__search").on("keyup", function(e) {
    $el = $(this),
    ($clear = $("#filterSearchItemsClear")).length && ($el.val() ? $clear.removeClass("d-none") : $clear.addClass("d-none"))
}),
$(".catalog-search__extended-block-header-btn").on("click", function(e) {
    var t = $(this).closest(".catalog-search__extended-block")
      , n = $(this).data("modal-title")
      , t = $(".catalog-search__extended-block-list", t).clone()
      , i = $("#advancedGroupsModal")
      , n = (t.find("li").removeClass("d-none").removeClass("last-show"),
    i.find(".modal-title").text(n),
    i.find(".catalog-search__extended-block-wrapper"));
    n.html(""),
    n.append(t),
    i.modal("show")
}),
$(".tag-extended__show-all").on("click", function(e) {
    $el = $(this),
    $parentGroup = $el.parent(),
    $el.toggleClass("full-list"),
    $parentGroup.toggleClass("show-hidden-items")
}),
$(function() {
    function e(e=!1) {
        window.matchMedia("(max-width: 680px)").matches || $(".container__page").hasClass("show-map") && window.matchMedia("(min-width: 930px)").matches ? ($(".footer__nav--links .footer__nav--subheader, .footer__nav--top-links .footer__nav--subheader").attr("data-toggle", "collapse"),
        e && $(".footer__nav--links .footer__nav--subheader, .footer__nav--top-links .footer__nav--subheader").removeAttr("aria-expanded").attr("aria-expanded", "false").addClass("collapsed").next().find(".collapse").removeClass("show")) : $(".footer__nav--links .footer__nav--subheader, .footer__nav--top-links .footer__nav--subheader").removeAttr("data-toggle").removeAttr("aria-expanded").attr("aria-expanded", "true").removeClass("collapsed").next().find(".collapse").addClass("show")
    }
    e(!0),
    $(window).resize(function() {
        e()
    }),
    $("#footerExtendedSearch").on("click", function(e) {
        isMobileView() && (e.preventDefault(),
        e = $("#footerExtendedSearchModal"),
        new Modal(e).show())
    })
}),
$(document).ready(function() {
    var t, n, i = 365, e = "instructionsVideoShown", o = "pageLinkClosed", r = $(".container__page").hasClass("page-home");
    function a() {
        new Modal("#instructionsVideoModal").show(),
        Cookies.set(e, "true", {
            expires: i
        })
    }
    function s(e) {
        e = $(e)[0];
        e && e.contentWindow && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
    }
    function l(e) {
        e = $(e)[0];
        e && e.contentWindow && e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
    }
    $(".faq-video-holder").click(function() {
        a()
    }),
    $(".video-link").on("click", function(e) {
        a(),
        $(this).hide().removeClass("active"),
        Cookies.get(o) || ($(".faq-page-link").addClass("active"),
        $(".scroll-top").addClass("top-position"))
    }),
    $(".faq-page-link").click(function(e) {
        ($(e.target).hasClass("icon-close") || $(e.target).is("svg")) && (e.preventDefault(),
        $(this).removeClass("active"),
        e = (new Date).toISOString(),
        Cookies.set(o, e, {
            expires: i
        }),
        $(".scroll-top").removeClass("top-position"))
    }),
    !Cookies.get(e) && r ? $(".video-link").show().addClass("active") : Cookies.get(o) || ($(".faq-page-link").addClass("active"),
    $(".scroll-top").addClass("top-position")),
    $("#instructionsVideoModal").on("show.bs.modal", function() {
        l($(window).width() < 680 ? "#instructionsVideoMobile" : "#instructionsVideo")
    }),
    $("#instructionsVideoModal").on("hidden.bs.modal", function() {
        s("#instructionsVideoMobile"),
        s("#instructionsVideo")
    }),
    t = $("#documentImageLarge"),
    n = t.find(".modal-body .img-holder"),
    $(".faq-card .faq-img").on("click", function() {
        var e = $(this).find("img").clone();
        $(this).addClass("active"),
        e.appendTo(n),
        new Modal(t).show()
    }),
    t.on("hidden.bs.modal", function() {
        $(".faq-img").removeClass("active"),
        n.empty()
    })
}),
$(document).ready(function() {
    var n = $("#confirmContactPhone")
      , i = $("#confirmContactEmail")
      , o = $("#confirmContactUserName")
      , e = $("#antispamConfirmContactsModal");
    0 < n.length && n.mask("+38 (000) 000-00-00"),
    e.length && new Modal(e).confirm(function(e) {
        var t = window.location.pathname.match(/\/([^/]+)\/?$/)
          , t = t ? t[1] : null;
        new ajaxWrapper("/ajax/antiSpam/submitEmailPhone").data({
            cartId: t,
            userName: o.val(),
            email: i.val(),
            phone: n.val()
        }).post(function() {
            e.modal("hide"),
            setTimeout( () => {
                new Modal("#successContactsModal").show()
            }
            , 200)
        }).fail(function() {
            e.modal("hide"),
            new Modal("#errorContactsModal").show()
        })
    }).show()
}),
$(document).ready(function() {
    var r, n, a = $("#theme-style"), e = a.attr("href"), s = e ? e.split("?")[1] : "", l = $(".reset-theme-btn"), i = Cookies.get("fontSize"), e = Cookies.get("fontSizeText"), c = new Map, t = ($("body *").each(function() {
        var e = window.getComputedStyle(this)
          , e = parseFloat(e.getPropertyValue("font-size"));
        c.set(this, e)
    }),
    (i ? (u(i, e),
    $("body").removeClass("font-size-normal font-size-large font-size-x-large").addClass(i),
    $('.accessibility-font-size .btn[data-font-size="' + i.replace("font-size-", "") + '"]')) : ($("body").addClass("font-size-normal"),
    $('.accessibility-font-size .btn[data-font-size="normal"]'))).addClass("active"),
    new MutationObserver(function(e) {
        e.forEach(e => {
            "childList" === e.type && 0 < e.addedNodes.length && e.addedNodes.forEach(e => {
                var t;
                e.nodeType === Node.ELEMENT_NODE && ((t = $(e)).find("*").addBack().each(function() {
                    var e;
                    c.has(this) || (e = window.getComputedStyle(this),
                    e = parseFloat(e.getPropertyValue("font-size")),
                    c.set(this, e))
                }),
                requestAnimationFrame( () => {
                    t.find("*").addBack().each(function() {
                        var e, t, n;
                        i && void 0 !== (e = c.get(this)) && (t = 1,
                        "font-size-large" === i ? t = 1.2 : "font-size-x-large" === i && (t = 1.4),
                        n = e * t,
                        $(this).attr("style", function(e, t) {
                            return (t || "").replace(/font-size:.*?;/g, "") + " font-size: " + n + "px !important;"
                        }))
                    })
                }
                ))
            }
            )
        }
        )
    }
    ));
    function u(i, e, t="body") {
        var o = 1;
        "font-size-large" === i ? (o = 1.2,
        l.removeClass("disabled")) : "font-size-x-large" === i ? (o = 1.4,
        l.removeClass("disabled")) : "font-size-normal" === i && (o = 1,
        l.addClass("disabled")),
        $(t).find(".accessibility-font-size .accessibility-type__mode").text(e),
        $(t).find("*").each(function() {
            var n, e = $(this), t = c.get(this);
            e.hasClass("hide-fz-accessibility") || void 0 !== t && ("font-size-normal" === i ? e.css("font-size", "") : (n = t * o,
            e.attr("style", function(e, t) {
                return (t || "").replace(/font-size:.*?;/g, "") + " font-size: " + n + "px !important;"
            })))
        })
    }
    function o(e, t) {
        var n = $("#theme-base").data("href") + "?"
          , i = $("#theme-contrast").data("href") + "?"
          , o = $("#theme-black-white").data("href") + "?"
          , r = n + s;
        "standard" === e ? (r = n + s,
        l.addClass("disabled"),
        $("body").removeClass("theme-contrast theme-black-white")) : "contrast" === e ? (r = i + s,
        l.removeClass("disabled"),
        $("body").removeClass("theme-black-white").addClass("theme-contrast")) : "black-white" === e && (r = o + s,
        l.removeClass("disabled"),
        $("body").removeClass("theme-contrast").addClass("theme-black-white")),
        $(".accessibility-theme .accessibility-type__mode").text(t),
        a.attr("href", r),
        $(".accessibility-theme .btn").removeClass("active"),
        $('.accessibility-theme [data-mode="' + e + '"]').addClass("active")
    }
    $(".accessibility-font-observer").each(function() {
        t.observe(this, {
            childList: !0,
            subtree: !0
        })
    }),
    $(".accessibility-font-size .btn").click(function(e) {
        e.preventDefault();
        var e = $(this).data("font-size")
          , t = $(this).data("text");
        $(".accessibility-font-size .btn").removeClass("active"),
        $(this).addClass("active"),
        u("font-size-" + e, t),
        $("body").removeClass("font-size-normal font-size-large font-size-x-large").addClass("font-size-" + e),
        Cookies.set("fontSize", "font-size-" + e, {
            expires: 365
        }),
        i = "font-size-" + e
    }),
    $(document).on("show.bs.modal", ".modal", function() {
        var e = $(".accessibility-font-size .btn.active")
          , t = "font-size-" + e.data("font-size")
          , n = e.data("text")
          , i = this;
        setTimeout(function() {
            $(i).find("*").each(function() {
                var e;
                $(this);
                c.has(this) || (e = window.getComputedStyle(this),
                e = parseFloat(e.getPropertyValue("font-size")),
                c.set(this, e))
            }),
            u(t, n, i)
        }, 180)
    }),
    r = jQuery,
    n = r.ui.autocomplete.prototype._renderItem,
    r.ui.autocomplete.prototype._renderItem = function(e, t) {
        e = n.call(this, e, t),
        t = r(".accessibility-font-size .btn.active");
        return u("font-size-" + t.data("font-size"), t.data("text"), e),
        e
    }
    ,
    r(document).on("autocompleteopen", function(e, t) {
        var n = r(".accessibility-font-size .btn.active")
          , i = "font-size-" + n.data("font-size")
          , o = n.data("text");
        setTimeout(function() {
            r(e.target).autocomplete("widget").find("*").each(function() {
                r(this);
                var e = window.getComputedStyle(this)
                  , e = parseFloat(e.getPropertyValue("font-size"));
                c.has(this) || c.set(this, e)
            }),
            u(i, o, r(e.target).autocomplete("widget"))
        }, 0)
    });
    var e = Cookies.get("themeMode")
      , d = Cookies.get("themeText");
    e && d ? o(e, d) : o("standard"),
    $(".accessibility-theme .btn").on("click", function(e) {
        e.preventDefault();
        var e = $(this).data("mode")
          , t = $(this).data("text");
        Cookies.set("themeMode", e, {
            expires: 365
        }),
        Cookies.set("themeText", t, {
            expires: 365
        }),
        o(e, t)
    }),
    $(".reset-theme-btn").on("click", function() {
        var e = $('[data-mode="standard"]').data("text")
          , t = $('[data-mode="standardFont"]').data("text");
        $(".accessibility-type__mode-controls .btn").removeClass("active"),
        $('[data-mode="standard"]').addClass("active"),
        o("standard", e),
        Cookies.remove("themeMode"),
        Cookies.remove("fontSize"),
        Cookies.remove("fontSizeText"),
        i = "font-size-normal",
        $("body").removeClass("font-size-normal font-size-large font-size-x-large").addClass("font-size-normal"),
        u(i, t),
        $('.accessibility-font-size .btn[data-font-size="normal"]').addClass("active"),
        $(this).addClass("disabled")
    }),
    a.on("load", function() {
        $("#theme-style-loader").remove(),
        $("body").css({
            visibility: "visible",
            opacity: "1"
        })
    }),
    setTimeout(function() {
        $("#theme-style-loader").remove(),
        $("body").css({
            visibility: "visible",
            opacity: "1"
        })
    }, 100),
    $("#accessibilityModalOpener, #accessibilityModalHeaderOpener, #accessibilityOpener").on("click", function(e) {
        e.preventDefault();
        var t = $(this)
          , e = (t.addClass("active"),
        $("#accessibilityModal"));
        new Modal(e).show(),
        e.on("hidden.bs.modal", function() {
            t.removeClass("active")
        })
    })
}),
$(document).ready(function() {
    $(document).on("click", ".product-info-opener", function(e) {
        var i = $("#productPreviewModal")
          , o = i.find(".modal-dialog")
          , t = $(this).data("product-id");
        console.log(e.target),
        e.target.closest(".icon-close") || (new ajaxWrapper("/ajax/productInfo/modalContent").data({
            productId: t
        }).get(function(e) {
            o.html(e);
            var t = i.find(".modal-header")
              , n = i.find(".modal-body");
            $("#carouselProductPhoto, #carouselLargeImages").on("slid.bs.carousel", function() {
                var e, t;
                $el = $(this),
                e = $el,
                t = e.find(".carousel-inner .carousel-item.active").index(),
                e.find(".product-photo__circle-indicators li").removeClass("active"),
                e.find(".product-photo__circle-indicators li:eq(" + t + ")").addClass("active")
            }),
            n.on("scroll", function() {
                0 < n.scrollTop() ? t.addClass("active-scroll") : t.removeClass("active-scroll")
            })
        }),
        new Modal(i).show())
    })
}),
$(document).ready(function() {
    const e = $(".anchors-base a").map(function() {
        return {
            id: $(this).attr("href"),
            link: this
        }
    }).get();
    var t, n;
    $(".anchors-base a").on("click", function() {
        $(".anchors-base a").removeClass("active"),
        $(this).addClass("active")
    }),
    $(window).on("scroll", function() {
        let i = $(document).scrollTop();
        e.forEach(e => {
            var t = $(e.id).offset().top - 50
              , n = $(e.id).outerHeight();
            i >= t && i < t + n && ($(".anchors-base a").removeClass("active"),
            $(e.link).addClass("active"))
        }
        )
    }),
    n = window.location.hash,
    $(".anchors-base a").removeClass("active"),
    n && (t = $(`.anchors-base a[href='${n}']`)).length && (t.addClass("active"),
    $("html, body").animate({
        scrollTop: $(n).offset().top
    }, 500))
});
