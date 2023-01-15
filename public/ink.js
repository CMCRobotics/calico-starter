!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).inkjs = {})
}(this, (function(t) {
    "use strict";
    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    function i(t, e, n) {
        return e && r(t.prototype, e),
        n && r(t, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t
    }
    function a(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        e && s(t, e)
    }
    function o(t) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    function s(t, e) {
        return (s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function l() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            ))),
            !0
        } catch (t) {
            return !1
        }
    }
    function u(t, e, n) {
        return (u = l() ? Reflect.construct.bind() : function(t, e, n) {
            var r = [null];
            r.push.apply(r, e);
            var i = new (Function.bind.apply(t, r));
            return n && s(i, n.prototype),
            i
        }
        ).apply(null, arguments)
    }
    function c(t) {
        var e = "function" == typeof Map ? new Map : void 0;
        return (c = function(t) {
            if (null === t || (n = t,
            -1 === Function.toString.call(n).indexOf("[native code]")))
                return t;
            var n;
            if ("function" != typeof t)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t))
                    return e.get(t);
                e.set(t, r)
            }
            function r() {
                return u(t, arguments, o(this).constructor)
            }
            return r.prototype = Object.create(t.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            s(r, t)
        }
        )(t)
    }
    function h(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function f(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e))
            return e;
        if (void 0 !== e)
            throw new TypeError("Derived constructors may only return object or undefined");
        return h(t)
    }
    function d(t) {
        var e = l();
        return function() {
            var n, r = o(t);
            if (e) {
                var i = o(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else
                n = r.apply(this, arguments);
            return f(this, n)
        }
    }
    function v(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = o(t)); )
            ;
        return t
    }
    function p() {
        return (p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
            var r = v(t, e);
            if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value
            }
        }
        ).apply(this, arguments)
    }
    function m(t, e) {
        return function(t) {
            if (Array.isArray(t))
                return t
        }(t) || function(t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null == n)
                return;
            var r, i, a = [], o = !0, s = !1;
            try {
                for (n = n.call(t); !(o = (r = n.next()).done) && (a.push(r.value),
                !e || a.length !== e); o = !0)
                    ;
            } catch (t) {
                s = !0,
                i = t
            } finally {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (s)
                        throw i
                }
            }
            return a
        }(t, e) || y(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function g(t) {
        return function(t) {
            if (Array.isArray(t))
                return C(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                return Array.from(t)
        }(t) || y(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function y(t, e) {
        if (t) {
            if ("string" == typeof t)
                return C(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? C(t, e) : void 0
        }
    }
    function C(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++)
            r[n] = t[n];
        return r
    }
    function S(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = y(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var r = 0
                  , i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, o = !0, s = !1;
        return {
            s: function() {
                n = n.call(t)
            },
            n: function() {
                var t = n.next();
                return o = t.done,
                t
            },
            e: function(t) {
                s = !0,
                a = t
            },
            f: function() {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (s)
                        throw a
                }
            }
        }
    }
    var b, w = i((function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
          , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
          , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
          , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        n(this, t),
        this.sourceFilename = e,
        this.pluginNames = r,
        this.countAllVisits = i,
        this.errorHandler = a,
        this.fileHandler = o
    }
    )), k = i((function t(e, r, i) {
        n(this, t),
        this.length = e,
        this.debugMetadata = r,
        this.text = i
    }
    ));
    !function(t) {
        t[t.Author = 0] = "Author",
        t[t.Warning = 1] = "Warning",
        t[t.Error = 2] = "Error"
    }(b || (b = {}));
    var E = i((function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
          , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        n(this, t),
        this.identifier = e,
        this.isByReference = r,
        this.isDivertTarget = i
    }
    ));
    function _(t, e) {
        return t instanceof e ? x(t) : null
    }
    function T(t, e) {
        if (t instanceof e)
            return x(t);
        throw new Error("".concat(t, " is not of type ").concat(e))
    }
    function A(t) {
        return t.hasValidName && t.name ? t : null
    }
    function P(t) {
        return void 0 === t ? null : t
    }
    function N(t) {
        return "object" === e(t) && "function" == typeof t.Equals
    }
    function x(t, e) {
        return t
    }
    function O(t) {
        return null != t
    }
    var I, F = function() {
        function t() {
            var e = this;
            n(this, t),
            this._alreadyHadError = !1,
            this._alreadyHadWarning = !1,
            this._debugMetadata = null,
            this._runtimeObject = null,
            this.content = [],
            this.parent = null,
            this.GetType = function() {
                return e.typeName
            }
            ,
            this.AddContent = function(t) {
                null === e.content && (e.content = []);
                var n, r = S(Array.isArray(t) ? t : [t]);
                try {
                    for (r.s(); !(n = r.n()).done; ) {
                        var i = n.value;
                        i.hasOwnProperty("parent") && (i.parent = e),
                        e.content.push(i)
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                return Array.isArray(t) ? void 0 : t
            }
            ,
            this.InsertContent = function(t, n) {
                return null === e.content && (e.content = []),
                n.parent = e,
                e.content.splice(t, 0, n),
                n
            }
            ,
            this.Find = function(t) {
                return function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                      , r = _(e, t);
                    if (null !== r && (null === n || !0 === n(r)))
                        return r;
                    if (null === e.content)
                        return null;
                    var i, a = S(e.content);
                    try {
                        for (a.s(); !(i = a.n()).done; ) {
                            var o = i.value
                              , s = o.Find && o.Find(t)(n);
                            if (s)
                                return s
                        }
                    } catch (t) {
                        a.e(t)
                    } finally {
                        a.f()
                    }
                    return null
                }
            }
            ,
            this.FindAll = function(t) {
                return function(n, r) {
                    var i = Array.isArray(r) ? r : []
                      , a = _(e, t);
                    if (null === a || n && !0 !== n(a) || i.push(a),
                    null === e.content)
                        return [];
                    var o, s = S(e.content);
                    try {
                        for (s.s(); !(o = s.n()).done; ) {
                            var l = o.value;
                            l.FindAll && l.FindAll(t)(n, i)
                        }
                    } catch (t) {
                        s.e(t)
                    } finally {
                        s.f()
                    }
                    return i
                }
            }
            ,
            this.Warning = function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                e.Error(t, n, !0)
            }
        }
        return i(t, [{
            key: "debugMetadata",
            get: function() {
                return null === this._debugMetadata && this.parent ? this.parent.debugMetadata : this._debugMetadata
            },
            set: function(t) {
                this._debugMetadata = t
            }
        }, {
            key: "hasOwnDebugMetadata",
            get: function() {
                return Boolean(this.debugMetadata)
            }
        }, {
            key: "typeName",
            get: function() {
                return "ParsedObject"
            }
        }, {
            key: "story",
            get: function() {
                for (var t = this; t.parent; )
                    t = t.parent;
                return t
            }
        }, {
            key: "runtimeObject",
            get: function() {
                return this._runtimeObject || (this._runtimeObject = this.GenerateRuntimeObject(),
                this._runtimeObject && (this._runtimeObject.debugMetadata = this.debugMetadata)),
                this._runtimeObject
            },
            set: function(t) {
                this._runtimeObject = t
            }
        }, {
            key: "runtimePath",
            get: function() {
                if (!this.runtimeObject.path)
                    throw new Error;
                return this.runtimeObject.path
            }
        }, {
            key: "containerForCounting",
            get: function() {
                return this.runtimeObject
            }
        }, {
            key: "ancestry",
            get: function() {
                for (var t = [], e = this.parent; e; )
                    t.push(e),
                    e = e.parent;
                return t = t.reverse()
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                if (null !== this.content) {
                    var e, n = S(this.content);
                    try {
                        for (n.s(); !(e = n.n()).done; ) {
                            e.value.ResolveReferences(t)
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                }
            }
        }, {
            key: "Error",
            value: function(t) {
                function e(e) {
                    return t.apply(this, arguments)
                }
                return e.toString = function() {
                    return t.toString()
                }
                ,
                e
            }((function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null === e && (e = this),
                !(e._alreadyHadError && !n || e._alreadyHadWarning && n)) {
                    if (!this.parent)
                        throw new Error("No parent object to send error to: ".concat(t));
                    this.parent.Error(t, e, n),
                    n ? e._alreadyHadWarning = !0 : e._alreadyHadError = !0
                }
            }
            ))
        }]),
        t
    }(), W = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i;
            return n(this, r),
            (i = e.call(this)).warningMessage = t,
            i.GenerateRuntimeObject = function() {
                return i.Warning(i.warningMessage),
                null
            }
            ,
            i
        }
        return i(r, [{
            key: "typeName",
            get: function() {
                return "AuthorWarning"
            }
        }]),
        r
    }(F), R = function() {
        function t() {
            if (n(this, t),
            this._components = [],
            this._componentsString = null,
            this._isRelative = !1,
            "string" == typeof arguments[0]) {
                var e = arguments[0];
                this.componentsString = e
            } else if (arguments[0]instanceof t.Component && arguments[1]instanceof t) {
                var r = arguments[0]
                  , i = arguments[1];
                this._components.push(r),
                this._components = this._components.concat(i._components)
            } else if (arguments[0]instanceof Array) {
                var a = arguments[0]
                  , o = !!arguments[1];
                this._components = this._components.concat(a),
                this._isRelative = o
            }
        }
        return i(t, [{
            key: "isRelative",
            get: function() {
                return this._isRelative
            }
        }, {
            key: "componentCount",
            get: function() {
                return this._components.length
            }
        }, {
            key: "head",
            get: function() {
                return this._components.length > 0 ? this._components[0] : null
            }
        }, {
            key: "tail",
            get: function() {
                return this._components.length >= 2 ? new t(this._components.slice(1, this._components.length)) : t.self
            }
        }, {
            key: "length",
            get: function() {
                return this._components.length
            }
        }, {
            key: "lastComponent",
            get: function() {
                var t = this._components.length - 1;
                return t >= 0 ? this._components[t] : null
            }
        }, {
            key: "containsNamedComponent",
            get: function() {
                for (var t = 0, e = this._components.length; t < e; t++)
                    if (!this._components[t].isIndex)
                        return !0;
                return !1
            }
        }, {
            key: "GetComponent",
            value: function(t) {
                return this._components[t]
            }
        }, {
            key: "PathByAppendingPath",
            value: function(e) {
                for (var n = new t, r = 0, i = 0; i < e._components.length && e._components[i].isParent; ++i)
                    r++;
                for (var a = 0; a < this._components.length - r; ++a)
                    n._components.push(this._components[a]);
                for (var o = r; o < e._components.length; ++o)
                    n._components.push(e._components[o]);
                return n
            }
        }, {
            key: "componentsString",
            get: function() {
                return null == this._componentsString && (this._componentsString = this._components.join("."),
                this.isRelative && (this._componentsString = "." + this._componentsString)),
                this._componentsString
            },
            set: function(e) {
                if (this._components.length = 0,
                this._componentsString = e,
                null != this._componentsString && "" != this._componentsString) {
                    "." == this._componentsString[0] && (this._isRelative = !0,
                    this._componentsString = this._componentsString.substring(1));
                    var n, r = S(this._componentsString.split("."));
                    try {
                        for (r.s(); !(n = r.n()).done; ) {
                            var i = n.value;
                            /^(\-|\+)?([0-9]+|Infinity)$/.test(i) ? this._components.push(new t.Component(parseInt(i))) : this._components.push(new t.Component(i))
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                }
            }
        }, {
            key: "toString",
            value: function() {
                return this.componentsString
            }
        }, {
            key: "Equals",
            value: function(t) {
                if (null == t)
                    return !1;
                if (t._components.length != this._components.length)
                    return !1;
                if (t.isRelative != this.isRelative)
                    return !1;
                for (var e = 0, n = t._components.length; e < n; e++)
                    if (!t._components[e].Equals(this._components[e]))
                        return !1;
                return !0
            }
        }, {
            key: "PathByAppendingComponent",
            value: function(e) {
                var n, r = new t;
                return (n = r._components).push.apply(n, g(this._components)),
                r._components.push(e),
                r
            }
        }], [{
            key: "self",
            get: function() {
                var e = new t;
                return e._isRelative = !0,
                e
            }
        }]),
        t
    }();
    R.parentId = "^",
    function(t) {
        var e = function() {
            function e(t) {
                n(this, e),
                this.index = -1,
                this.name = null,
                "string" == typeof t ? this.name = t : this.index = t
            }
            return i(e, [{
                key: "isIndex",
                get: function() {
                    return this.index >= 0
                }
            }, {
                key: "isParent",
                get: function() {
                    return this.name == t.parentId
                }
            }, {
                key: "toString",
                value: function() {
                    return this.isIndex ? this.index.toString() : this.name
                }
            }, {
                key: "Equals",
                value: function(t) {
                    return null != t && t.isIndex == this.isIndex && (this.isIndex ? this.index == t.index : this.name == t.name)
                }
            }], [{
                key: "ToParent",
                value: function() {
                    return new e(t.parentId)
                }
            }]),
            e
        }();
        t.Component = e
    }(R || (R = {})),
    function(t) {
        function e(t, e) {
            if (!t)
                throw void 0 !== e && console.warn(e),
                console.trace && console.trace(),
                new Error("")
        }
        t.AssertType = function(t, n, r) {
            e(t instanceof n, r)
        }
        ,
        t.Assert = e
    }(I || (I = {}));
    var D = function(t) {
        a(r, t);
        var e = d(r);
        function r() {
            return n(this, r),
            e.apply(this, arguments)
        }
        return i(r)
    }(c(Error));
    function L(t) {
        throw new D("".concat(t, " is null or undefined"))
    }
    var V = function() {
        function t() {
            n(this, t),
            this.parent = null,
            this._debugMetadata = null,
            this._path = null
        }
        return i(t, [{
            key: "debugMetadata",
            get: function() {
                return null === this._debugMetadata && this.parent ? this.parent.debugMetadata : this._debugMetadata
            },
            set: function(t) {
                this._debugMetadata = t
            }
        }, {
            key: "ownDebugMetadata",
            get: function() {
                return this._debugMetadata
            }
        }, {
            key: "DebugLineNumberOfPath",
            value: function(t) {
                if (null === t)
                    return null;
                var e = this.rootContentContainer;
                if (e) {
                    var n = e.ContentAtPath(t).obj;
                    if (n) {
                        var r = n.debugMetadata;
                        if (null !== r)
                            return r.startLineNumber
                    }
                }
                return null
            }
        }, {
            key: "path",
            get: function() {
                if (null == this._path)
                    if (null == this.parent)
                        this._path = new R;
                    else {
                        for (var t = [], e = this, n = _(e.parent, tt); null !== n; ) {
                            var r = A(e);
                            if (null != r && r.hasValidName) {
                                if (null === r.name)
                                    return L("namedChild.name");
                                t.unshift(new R.Component(r.name))
                            } else
                                t.unshift(new R.Component(n.content.indexOf(e)));
                            e = n,
                            n = _(n.parent, tt)
                        }
                        this._path = new R(t)
                    }
                return this._path
            }
        }, {
            key: "ResolvePath",
            value: function(t) {
                if (null === t)
                    return L("path");
                if (t.isRelative) {
                    var e = _(this, tt);
                    return null === e && (I.Assert(null !== this.parent, "Can't resolve relative path because we don't have a parent"),
                    e = _(this.parent, tt),
                    I.Assert(null !== e, "Expected parent to be a container"),
                    I.Assert(t.GetComponent(0).isParent),
                    t = t.tail),
                    null === e ? L("nearestContainer") : e.ContentAtPath(t)
                }
                var n = this.rootContentContainer;
                return null === n ? L("contentContainer") : n.ContentAtPath(t)
            }
        }, {
            key: "ConvertPathToRelative",
            value: function(t) {
                for (var e = this.path, n = Math.min(t.length, e.length), r = -1, i = 0; i < n; ++i) {
                    var a = e.GetComponent(i)
                      , o = t.GetComponent(i);
                    if (!a.Equals(o))
                        break;
                    r = i
                }
                if (-1 == r)
                    return t;
                for (var s = e.componentCount - 1 - r, l = [], u = 0; u < s; ++u)
                    l.push(R.Component.ToParent());
                for (var c = r + 1; c < t.componentCount; ++c)
                    l.push(t.GetComponent(c));
                return new R(l,!0)
            }
        }, {
            key: "CompactPathString",
            value: function(t) {
                var e = null
                  , n = null;
                t.isRelative ? (n = t.componentsString,
                e = this.path.PathByAppendingPath(t).componentsString) : (n = this.ConvertPathToRelative(t).componentsString,
                e = t.componentsString);
                return n.length < e.length ? n : e
            }
        }, {
            key: "rootContentContainer",
            get: function() {
                for (var t = this; t.parent; )
                    t = t.parent;
                return _(t, tt)
            }
        }, {
            key: "Copy",
            value: function() {
                throw Error("Not Implemented: Doesn't support copying")
            }
        }, {
            key: "SetChild",
            value: function(t, e, n) {
                t[e] && (t[e] = null),
                t[e] = n,
                t[e] && (t[e].parent = this)
            }
        }, {
            key: "Equals",
            value: function(t) {
                return t === this
            }
        }]),
        t
    }()
      , j = function() {
        function t(e) {
            n(this, t),
            e = void 0 !== e ? e.toString() : "",
            this.string = e
        }
        return i(t, [{
            key: "Length",
            get: function() {
                return this.string.length
            }
        }, {
            key: "Append",
            value: function(t) {
                null !== t && (this.string += t)
            }
        }, {
            key: "AppendLine",
            value: function(t) {
                void 0 !== t && this.Append(t),
                this.string += "\n"
            }
        }, {
            key: "AppendFormat",
            value: function(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                    n[r - 1] = arguments[r];
                this.string += t.replace(/{(\d+)}/g, (function(t, e) {
                    return void 0 !== n[e] ? n[e] : t
                }
                ))
            }
        }, {
            key: "toString",
            value: function() {
                return this.string
            }
        }, {
            key: "Clear",
            value: function() {
                this.string = ""
            }
        }]),
        t
    }()
      , B = function() {
        function t() {
            if (n(this, t),
            this.originName = null,
            this.itemName = null,
            void 0 !== arguments[1]) {
                var e = arguments[0]
                  , r = arguments[1];
                this.originName = e,
                this.itemName = r
            } else if (arguments[0]) {
                var i = arguments[0]
                  , a = i.toString().split(".");
                this.originName = a[0],
                this.itemName = a[1]
            }
        }
        return i(t, [{
            key: "isNull",
            get: function() {
                return null == this.originName && null == this.itemName
            }
        }, {
            key: "fullName",
            get: function() {
                return (null !== this.originName ? this.originName : "?") + "." + this.itemName
            }
        }, {
            key: "toString",
            value: function() {
                return this.fullName
            }
        }, {
            key: "Equals",
            value: function(e) {
                if (e instanceof t) {
                    var n = e;
                    return n.itemName == this.itemName && n.originName == this.originName
                }
                return !1
            }
        }, {
            key: "copy",
            value: function() {
                return new t(this.originName,this.itemName)
            }
        }, {
            key: "serialized",
            value: function() {
                return JSON.stringify({
                    originName: this.originName,
                    itemName: this.itemName
                })
            }
        }], [{
            key: "Null",
            get: function() {
                return new t(null,null)
            }
        }, {
            key: "fromSerializedKey",
            value: function(e) {
                var n = JSON.parse(e);
                if (!t.isLikeInkListItem(n))
                    return t.Null;
                var r = n;
                return new t(r.originName,r.itemName)
            }
        }, {
            key: "isLikeInkListItem",
            value: function(t) {
                return "object" === e(t) && (!(!t.hasOwnProperty("originName") || !t.hasOwnProperty("itemName")) && (("string" == typeof t.originName || null === e(t.originName)) && ("string" == typeof t.itemName || null === e(t.itemName))))
            }
        }]),
        t
    }()
      , M = function(t) {
        a(o, t);
        var r = d(o);
        function o() {
            var t, i = arguments;
            if (n(this, o),
            (t = r.call(this, i[0]instanceof o ? i[0] : [])).origins = null,
            t._originNames = [],
            arguments[0]instanceof o) {
                var a = arguments[0]
                  , s = a.originNames;
                null !== s && (t._originNames = s.slice()),
                null !== a.origins && (t.origins = a.origins.slice())
            } else if ("string" == typeof arguments[0]) {
                var l = arguments[0]
                  , u = arguments[1];
                if (t.SetInitialOriginName(l),
                null === u.listDefinitions)
                    return f(t, L("originStory.listDefinitions"));
                var c = u.listDefinitions.TryListGetDefinition(l, null);
                if (!c.exists)
                    throw new Error("InkList origin could not be found in story when constructing new list: " + l);
                if (null === c.result)
                    return f(t, L("def.result"));
                t.origins = [c.result]
            } else if ("object" === e(arguments[0]) && arguments[0].hasOwnProperty("Key") && arguments[0].hasOwnProperty("Value")) {
                var h = arguments[0];
                t.Add(h.Key, h.Value)
            }
            return t
        }
        return i(o, [{
            key: "AddItem",
            value: function(t) {
                if (t instanceof B) {
                    var e = t;
                    if (null == e.originName)
                        return void this.AddItem(e.itemName);
                    if (null === this.origins)
                        return L("this.origins");
                    var n, r = S(this.origins);
                    try {
                        for (r.s(); !(n = r.n()).done; ) {
                            var i = n.value;
                            if (i.name == e.originName) {
                                var a = i.TryGetValueForItem(e, 0);
                                if (a.exists)
                                    return void this.Add(e, a.result);
                                throw new Error("Could not add the item " + e + " to this list because it doesn't exist in the original list definition in ink.")
                            }
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                    throw new Error("Failed to add item to list because the item was from a new list definition that wasn't previously known to this list. Only items from previously known lists can be used, so that the int value can be found.")
                }
                var o = t
                  , s = null;
                if (null === this.origins)
                    return L("this.origins");
                var l, u = S(this.origins);
                try {
                    for (u.s(); !(l = u.n()).done; ) {
                        var c = l.value;
                        if (null === o)
                            return L("itemName");
                        if (c.ContainsItemWithName(o)) {
                            if (null != s)
                                throw new Error("Could not add the item " + o + " to this list because it could come from either " + c.name + " or " + s.name);
                            s = c
                        }
                    }
                } catch (t) {
                    u.e(t)
                } finally {
                    u.f()
                }
                if (null == s)
                    throw new Error("Could not add the item " + o + " to this list because it isn't known to any list definitions previously associated with this list.");
                var h = new B(s.name,o)
                  , f = s.ValueForItem(h);
                this.Add(h, f)
            }
        }, {
            key: "ContainsItemNamed",
            value: function(t) {
                var e, n = S(this);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var r = m(e.value, 1)[0];
                        if (B.fromSerializedKey(r).itemName == t)
                            return !0
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                return !1
            }
        }, {
            key: "ContainsKey",
            value: function(t) {
                return this.has(t.serialized())
            }
        }, {
            key: "Add",
            value: function(t, e) {
                var n = t.serialized();
                if (this.has(n))
                    throw new Error("The Map already contains an entry for ".concat(t));
                this.set(n, e)
            }
        }, {
            key: "Remove",
            value: function(t) {
                return this.delete(t.serialized())
            }
        }, {
            key: "Count",
            get: function() {
                return this.size
            }
        }, {
            key: "originOfMaxItem",
            get: function() {
                if (null == this.origins)
                    return null;
                var t = this.maxItem.Key.originName
                  , e = null;
                return this.origins.every((function(n) {
                    return n.name != t || (e = n,
                    !1)
                }
                )),
                e
            }
        }, {
            key: "originNames",
            get: function() {
                if (this.Count > 0) {
                    null == this._originNames && this.Count > 0 ? this._originNames = [] : (this._originNames || (this._originNames = []),
                    this._originNames.length = 0);
                    var t, e = S(this);
                    try {
                        for (e.s(); !(t = e.n()).done; ) {
                            var n = m(t.value, 1)[0]
                              , r = B.fromSerializedKey(n);
                            if (null === r.originName)
                                return L("item.originName");
                            this._originNames.push(r.originName)
                        }
                    } catch (t) {
                        e.e(t)
                    } finally {
                        e.f()
                    }
                }
                return this._originNames
            }
        }, {
            key: "SetInitialOriginName",
            value: function(t) {
                this._originNames = [t]
            }
        }, {
            key: "SetInitialOriginNames",
            value: function(t) {
                this._originNames = null == t ? null : t.slice()
            }
        }, {
            key: "maxItem",
            get: function() {
                var t, e = {
                    Key: B.Null,
                    Value: 0
                }, n = S(this);
                try {
                    for (n.s(); !(t = n.n()).done; ) {
                        var r = m(t.value, 2)
                          , i = r[0]
                          , a = r[1]
                          , o = B.fromSerializedKey(i);
                        (e.Key.isNull || a > e.Value) && (e = {
                            Key: o,
                            Value: a
                        })
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                return e
            }
        }, {
            key: "minItem",
            get: function() {
                var t, e = {
                    Key: B.Null,
                    Value: 0
                }, n = S(this);
                try {
                    for (n.s(); !(t = n.n()).done; ) {
                        var r = m(t.value, 2)
                          , i = r[0]
                          , a = r[1]
                          , o = B.fromSerializedKey(i);
                        (e.Key.isNull || a < e.Value) && (e = {
                            Key: o,
                            Value: a
                        })
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                return e
            }
        }, {
            key: "inverse",
            get: function() {
                var t = new o;
                if (null != this.origins) {
                    var e, n = S(this.origins);
                    try {
                        for (n.s(); !(e = n.n()).done; ) {
                            var r, i = S(e.value.items);
                            try {
                                for (i.s(); !(r = i.n()).done; ) {
                                    var a = m(r.value, 2)
                                      , s = a[0]
                                      , l = a[1]
                                      , u = B.fromSerializedKey(s);
                                    this.ContainsKey(u) || t.Add(u, l)
                                }
                            } catch (t) {
                                i.e(t)
                            } finally {
                                i.f()
                            }
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                }
                return t
            }
        }, {
            key: "all",
            get: function() {
                var t = new o;
                if (null != this.origins) {
                    var e, n = S(this.origins);
                    try {
                        for (n.s(); !(e = n.n()).done; ) {
                            var r, i = S(e.value.items);
                            try {
                                for (i.s(); !(r = i.n()).done; ) {
                                    var a = m(r.value, 2)
                                      , s = a[0]
                                      , l = a[1]
                                      , u = B.fromSerializedKey(s);
                                    t.set(u.serialized(), l)
                                }
                            } catch (t) {
                                i.e(t)
                            } finally {
                                i.f()
                            }
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                }
                return t
            }
        }, {
            key: "Union",
            value: function(t) {
                var e, n = new o(this), r = S(t);
                try {
                    for (r.s(); !(e = r.n()).done; ) {
                        var i = m(e.value, 2)
                          , a = i[0]
                          , s = i[1];
                        n.set(a, s)
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                return n
            }
        }, {
            key: "Intersect",
            value: function(t) {
                var e, n = new o, r = S(this);
                try {
                    for (r.s(); !(e = r.n()).done; ) {
                        var i = m(e.value, 2)
                          , a = i[0]
                          , s = i[1];
                        t.has(a) && n.set(a, s)
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                return n
            }
        }, {
            key: "HasIntersection",
            value: function(t) {
                var e, n = S(this);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var r = m(e.value, 1)[0];
                        if (t.has(r))
                            return !0
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                return !1
            }
        }, {
            key: "Without",
            value: function(t) {
                var e, n = new o(this), r = S(t);
                try {
                    for (r.s(); !(e = r.n()).done; ) {
                        var i = m(e.value, 1)[0];
                        n.delete(i)
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                return n
            }
        }, {
            key: "Contains",
            value: function(t) {
                if ("string" == typeof t)
                    return this.ContainsItemNamed(t);
                var e = t;
                if (0 == e.size || 0 == this.size)
                    return !1;
                var n, r = S(e);
                try {
                    for (r.s(); !(n = r.n()).done; ) {
                        var i = m(n.value, 1)[0];
                        if (!this.has(i))
                            return !1
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                return !0
            }
        }, {
            key: "GreaterThan",
            value: function(t) {
                return 0 != this.Count && (0 == t.Count || this.minItem.Value > t.maxItem.Value)
            }
        }, {
            key: "GreaterThanOrEquals",
            value: function(t) {
                return 0 != this.Count && (0 == t.Count || this.minItem.Value >= t.minItem.Value && this.maxItem.Value >= t.maxItem.Value)
            }
        }, {
            key: "LessThan",
            value: function(t) {
                return 0 != t.Count && (0 == this.Count || this.maxItem.Value < t.minItem.Value)
            }
        }, {
            key: "LessThanOrEquals",
            value: function(t) {
                return 0 != t.Count && (0 == this.Count || this.maxItem.Value <= t.maxItem.Value && this.minItem.Value <= t.minItem.Value)
            }
        }, {
            key: "MaxAsList",
            value: function() {
                return this.Count > 0 ? new o(this.maxItem) : new o
            }
        }, {
            key: "MinAsList",
            value: function() {
                return this.Count > 0 ? new o(this.minItem) : new o
            }
        }, {
            key: "ListWithSubRange",
            value: function(t, e) {
                if (0 == this.Count)
                    return new o;
                var n = this.orderedItems
                  , r = 0
                  , i = Number.MAX_SAFE_INTEGER;
                Number.isInteger(t) ? r = t : t instanceof o && t.Count > 0 && (r = t.minItem.Value),
                Number.isInteger(e) ? i = e : t instanceof o && t.Count > 0 && (i = e.maxItem.Value);
                var a = new o;
                a.SetInitialOriginNames(this.originNames);
                var s, l = S(n);
                try {
                    for (l.s(); !(s = l.n()).done; ) {
                        var u = s.value;
                        u.Value >= r && u.Value <= i && a.Add(u.Key, u.Value)
                    }
                } catch (t) {
                    l.e(t)
                } finally {
                    l.f()
                }
                return a
            }
        }, {
            key: "Equals",
            value: function(t) {
                if (t instanceof o == !1)
                    return !1;
                if (t.Count != this.Count)
                    return !1;
                var e, n = S(this);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var r = m(e.value, 1)[0];
                        if (!t.has(r))
                            return !1
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                return !0
            }
        }, {
            key: "orderedItems",
            get: function() {
                var t, e = new Array, n = S(this);
                try {
                    for (n.s(); !(t = n.n()).done; ) {
                        var r = m(t.value, 2)
                          , i = r[0]
                          , a = r[1]
                          , o = B.fromSerializedKey(i);
                        e.push({
                            Key: o,
                            Value: a
                        })
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                return e.sort((function(t, e) {
                    return null === t.Key.originName ? L("x.Key.originName") : null === e.Key.originName ? L("y.Key.originName") : t.Value == e.Value ? t.Key.originName.localeCompare(e.Key.originName) : t.Value < e.Value ? -1 : t.Value > e.Value ? 1 : 0
                }
                )),
                e
            }
        }, {
            key: "toString",
            value: function() {
                for (var t = this.orderedItems, e = new j, n = 0; n < t.length; n++) {
                    n > 0 && e.Append(", ");
                    var r = t[n].Key;
                    if (null === r.itemName)
                        return L("item.itemName");
                    e.Append(r.itemName)
                }
                return e.toString()
            }
        }, {
            key: "valueOf",
            value: function() {
                return NaN
            }
        }], [{
            key: "FromString",
            value: function(t, e) {
                var n, r = null === (n = e.listDefinitions) || void 0 === n ? void 0 : n.FindSingleItemListWithName(t);
                if (r)
                    return null === r.value ? L("listValue.value") : new o(r.value);
                throw new Error("Could not find the InkListItem from the string '" + t + "' to create an InkList because it doesn't exist in the original list definition in ink.")
            }
        }]),
        o
    }(c(Map))
      , G = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i;
            return n(this, r),
            (i = e.call(this, t)).useEndLineNumber = !1,
            i.message = t,
            i.name = "StoryException",
            i
        }
        return i(r)
    }(c(Error));
    function q(t, e, n) {
        if (null === t)
            return {
                result: n,
                exists: !1
            };
        var r = t.get(e);
        return void 0 === r ? {
            result: n,
            exists: !1
        } : {
            result: r,
            exists: !0
        }
    }
    var U, K = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i;
            return n(this, r),
            (i = e.call(this)).value = t,
            i
        }
        return i(r, [{
            key: "valueObject",
            get: function() {
                return this.value
            }
        }, {
            key: "toString",
            value: function() {
                return null === this.value ? L("Value.value") : this.value.toString()
            }
        }]),
        r
    }(function(t) {
        a(r, t);
        var e = d(r);
        function r() {
            return n(this, r),
            e.apply(this, arguments)
        }
        return i(r, [{
            key: "Copy",
            value: function() {
                return T(r.Create(this.valueObject), V)
            }
        }, {
            key: "BadCastException",
            value: function(t) {
                return new G("Can't cast " + this.valueObject + " from " + this.valueType + " to " + t)
            }
        }], [{
            key: "Create",
            value: function(t, e) {
                if (e) {
                    if (e === U.Int && Number.isInteger(Number(t)))
                        return new J(Number(t));
                    if (e === U.Float && !isNaN(t))
                        return new z(Number(t))
                }
                return "boolean" == typeof t ? new H(Boolean(t)) : "string" == typeof t ? new $(String(t)) : Number.isInteger(Number(t)) ? new J(Number(t)) : isNaN(t) ? t instanceof R ? new X(T(t, R)) : t instanceof M ? new Z(T(t, M)) : null : new z(Number(t))
            }
        }]),
        r
    }(V)), H = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            return n(this, r),
            e.call(this, t || !1)
        }
        return i(r, [{
            key: "isTruthy",
            get: function() {
                return Boolean(this.value)
            }
        }, {
            key: "valueType",
            get: function() {
                return U.Bool
            }
        }, {
            key: "Cast",
            value: function(t) {
                if (null === this.value)
                    return L("Value.value");
                if (t == this.valueType)
                    return this;
                if (t == U.Int)
                    return new J(this.value ? 1 : 0);
                if (t == U.Float)
                    return new z(this.value ? 1 : 0);
                if (t == U.String)
                    return new $(this.value ? "true" : "false");
                throw this.BadCastException(t)
            }
        }, {
            key: "toString",
            value: function() {
                return this.value ? "true" : "false"
            }
        }]),
        r
    }(K), J = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            return n(this, r),
            e.call(this, t || 0)
        }
        return i(r, [{
            key: "isTruthy",
            get: function() {
                return 0 != this.value
            }
        }, {
            key: "valueType",
            get: function() {
                return U.Int
            }
        }, {
            key: "Cast",
            value: function(t) {
                if (null === this.value)
                    return L("Value.value");
                if (t == this.valueType)
                    return this;
                if (t == U.Bool)
                    return new H(0 !== this.value);
                if (t == U.Float)
                    return new z(this.value);
                if (t == U.String)
                    return new $("" + this.value);
                throw this.BadCastException(t)
            }
        }]),
        r
    }(K), z = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            return n(this, r),
            e.call(this, t || 0)
        }
        return i(r, [{
            key: "isTruthy",
            get: function() {
                return 0 != this.value
            }
        }, {
            key: "valueType",
            get: function() {
                return U.Float
            }
        }, {
            key: "Cast",
            value: function(t) {
                if (null === this.value)
                    return L("Value.value");
                if (t == this.valueType)
                    return this;
                if (t == U.Bool)
                    return new H(0 !== this.value);
                if (t == U.Int)
                    return new J(this.value);
                if (t == U.String)
                    return new $("" + this.value);
                throw this.BadCastException(t)
            }
        }]),
        r
    }(K), $ = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i;
            return n(this, r),
            (i = e.call(this, t || ""))._isNewline = "\n" == i.value,
            i._isInlineWhitespace = !0,
            null === i.value ? f(i, L("Value.value")) : (i.value.length > 0 && i.value.split("").every((function(t) {
                return " " == t || "\t" == t || (i._isInlineWhitespace = !1,
                !1)
            }
            )),
            i)
        }
        return i(r, [{
            key: "valueType",
            get: function() {
                return U.String
            }
        }, {
            key: "isTruthy",
            get: function() {
                return null === this.value ? L("Value.value") : this.value.length > 0
            }
        }, {
            key: "isNewline",
            get: function() {
                return this._isNewline
            }
        }, {
            key: "isInlineWhitespace",
            get: function() {
                return this._isInlineWhitespace
            }
        }, {
            key: "isNonWhitespace",
            get: function() {
                return !this.isNewline && !this.isInlineWhitespace
            }
        }, {
            key: "Cast",
            value: function(t) {
                if (t == this.valueType)
                    return this;
                if (t == U.Int) {
                    var e = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                          , n = parseInt(t);
                        return Number.isNaN(n) ? {
                            result: e,
                            exists: !1
                        } : {
                            result: n,
                            exists: !0
                        }
                    }(this.value);
                    if (e.exists)
                        return new J(e.result);
                    throw this.BadCastException(t)
                }
                if (t == U.Float) {
                    var n = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                          , n = parseFloat(t);
                        return Number.isNaN(n) ? {
                            result: e,
                            exists: !1
                        } : {
                            result: n,
                            exists: !0
                        }
                    }(this.value);
                    if (n.exists)
                        return new z(n.result);
                    throw this.BadCastException(t)
                }
                throw this.BadCastException(t)
            }
        }]),
        r
    }(K), X = function(t) {
        a(r, t);
        var e = d(r);
        function r() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return n(this, r),
            e.call(this, t)
        }
        return i(r, [{
            key: "valueType",
            get: function() {
                return U.DivertTarget
            }
        }, {
            key: "targetPath",
            get: function() {
                return null === this.value ? L("Value.value") : this.value
            },
            set: function(t) {
                this.value = t
            }
        }, {
            key: "isTruthy",
            get: function() {
                throw new Error("Shouldn't be checking the truthiness of a divert target")
            }
        }, {
            key: "Cast",
            value: function(t) {
                if (t == this.valueType)
                    return this;
                throw this.BadCastException(t)
            }
        }, {
            key: "toString",
            value: function() {
                return "DivertTargetValue(" + this.targetPath + ")"
            }
        }]),
        r
    }(K), Y = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
            return n(this, r),
            (i = e.call(this, t))._contextIndex = a,
            i
        }
        return i(r, [{
            key: "contextIndex",
            get: function() {
                return this._contextIndex
            },
            set: function(t) {
                this._contextIndex = t
            }
        }, {
            key: "variableName",
            get: function() {
                return null === this.value ? L("Value.value") : this.value
            },
            set: function(t) {
                this.value = t
            }
        }, {
            key: "valueType",
            get: function() {
                return U.VariablePointer
            }
        }, {
            key: "isTruthy",
            get: function() {
                throw new Error("Shouldn't be checking the truthiness of a variable pointer")
            }
        }, {
            key: "Cast",
            value: function(t) {
                if (t == this.valueType)
                    return this;
                throw this.BadCastException(t)
            }
        }, {
            key: "toString",
            value: function() {
                return "VariablePointerValue(" + this.variableName + ")"
            }
        }, {
            key: "Copy",
            value: function() {
                return new r(this.variableName,this.contextIndex)
            }
        }]),
        r
    }(K), Z = function(t) {
        a(r, t);
        var e = d(r);
        function r(t, i) {
            var a;
            return n(this, r),
            a = e.call(this, null),
            t || i ? t instanceof M ? a.value = new M(t) : t instanceof B && "number" == typeof i && (a.value = new M({
                Key: t,
                Value: i
            })) : a.value = new M,
            a
        }
        return i(r, [{
            key: "isTruthy",
            get: function() {
                return null === this.value ? L("this.value") : this.value.Count > 0
            }
        }, {
            key: "valueType",
            get: function() {
                return U.List
            }
        }, {
            key: "Cast",
            value: function(t) {
                if (null === this.value)
                    return L("Value.value");
                if (t == U.Int) {
                    var e = this.value.maxItem;
                    return e.Key.isNull ? new J(0) : new J(e.Value)
                }
                if (t == U.Float) {
                    var n = this.value.maxItem;
                    return n.Key.isNull ? new z(0) : new z(n.Value)
                }
                if (t == U.String) {
                    var r = this.value.maxItem;
                    return r.Key.isNull ? new $("") : new $(r.Key.toString())
                }
                if (t == this.valueType)
                    return this;
                throw this.BadCastException(t)
            }
        }], [{
            key: "RetainListOriginsForAssignment",
            value: function(t, e) {
                var n = _(t, r)
                  , i = _(e, r);
                return i && null === i.value ? L("newList.value") : n && null === n.value ? L("oldList.value") : void (n && i && 0 == i.value.Count && i.value.SetInitialOriginNames(n.value.originNames))
            }
        }]),
        r
    }(K);
    !function(t) {
        t[t.Bool = -1] = "Bool",
        t[t.Int = 0] = "Int",
        t[t.Float = 1] = "Float",
        t[t.List = 2] = "List",
        t[t.String = 3] = "String",
        t[t.DivertTarget = 4] = "DivertTarget",
        t[t.VariablePointer = 5] = "VariablePointer"
    }(U || (U = {}));
    var Q = function() {
        function t() {
            n(this, t),
            this.obj = null,
            this.approximate = !1
        }
        return i(t, [{
            key: "correctObj",
            get: function() {
                return this.approximate ? null : this.obj
            }
        }, {
            key: "container",
            get: function() {
                return this.obj instanceof tt ? this.obj : null
            }
        }, {
            key: "copy",
            value: function() {
                var e = new t;
                return e.obj = this.obj,
                e.approximate = this.approximate,
                e
            }
        }]),
        t
    }()
      , tt = function(t) {
        a(r, t);
        var e = d(r);
        function r() {
            var t;
            return n(this, r),
            (t = e.apply(this, arguments)).name = null,
            t._content = [],
            t.namedContent = new Map,
            t.visitsShouldBeCounted = !1,
            t.turnIndexShouldBeCounted = !1,
            t.countingAtStartOnly = !1,
            t._pathToFirstLeafContent = null,
            t
        }
        return i(r, [{
            key: "hasValidName",
            get: function() {
                return null != this.name && this.name.length > 0
            }
        }, {
            key: "content",
            get: function() {
                return this._content
            },
            set: function(t) {
                this.AddContent(t)
            }
        }, {
            key: "namedOnlyContent",
            get: function() {
                var t, e = new Map, n = S(this.namedContent);
                try {
                    for (n.s(); !(t = n.n()).done; ) {
                        var r = m(t.value, 2)
                          , i = r[0]
                          , a = T(r[1], V);
                        e.set(i, a)
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                var o, s = S(this.content);
                try {
                    for (s.s(); !(o = s.n()).done; ) {
                        var l = A(o.value);
                        null != l && l.hasValidName && e.delete(l.name)
                    }
                } catch (t) {
                    s.e(t)
                } finally {
                    s.f()
                }
                return 0 == e.size && (e = null),
                e
            },
            set: function(t) {
                var e = this.namedOnlyContent;
                if (null != e) {
                    var n, r = S(e);
                    try {
                        for (r.s(); !(n = r.n()).done; ) {
                            var i = m(n.value, 1)[0];
                            this.namedContent.delete(i)
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                }
                if (null != t) {
                    var a, o = S(t);
                    try {
                        for (o.s(); !(a = o.n()).done; ) {
                            var s = A(m(a.value, 2)[1]);
                            null != s && this.AddToNamedContentOnly(s)
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                }
            }
        }, {
            key: "countFlags",
            get: function() {
                var t = 0;
                return this.visitsShouldBeCounted && (t |= r.CountFlags.Visits),
                this.turnIndexShouldBeCounted && (t |= r.CountFlags.Turns),
                this.countingAtStartOnly && (t |= r.CountFlags.CountStartOnly),
                t == r.CountFlags.CountStartOnly && (t = 0),
                t
            },
            set: function(t) {
                var e = t;
                (e & r.CountFlags.Visits) > 0 && (this.visitsShouldBeCounted = !0),
                (e & r.CountFlags.Turns) > 0 && (this.turnIndexShouldBeCounted = !0),
                (e & r.CountFlags.CountStartOnly) > 0 && (this.countingAtStartOnly = !0)
            }
        }, {
            key: "pathToFirstLeafContent",
            get: function() {
                return null == this._pathToFirstLeafContent && (this._pathToFirstLeafContent = this.path.PathByAppendingPath(this.internalPathToFirstLeafContent)),
                this._pathToFirstLeafContent
            }
        }, {
            key: "internalPathToFirstLeafContent",
            get: function() {
                for (var t = [], e = this; e instanceof r; )
                    e.content.length > 0 && (t.push(new R.Component(0)),
                    e = e.content[0]);
                return new R(t)
            }
        }, {
            key: "AddContent",
            value: function(t) {
                if (t instanceof Array) {
                    var e, n = S(t);
                    try {
                        for (n.s(); !(e = n.n()).done; ) {
                            var r = e.value;
                            this.AddContent(r)
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                } else {
                    var i = t;
                    if (this._content.push(i),
                    i.parent)
                        throw new Error("content is already in " + i.parent);
                    i.parent = this,
                    this.TryAddNamedContent(i)
                }
            }
        }, {
            key: "TryAddNamedContent",
            value: function(t) {
                var e = A(t);
                null != e && e.hasValidName && this.AddToNamedContentOnly(e)
            }
        }, {
            key: "AddToNamedContentOnly",
            value: function(t) {
                if (I.AssertType(t, V, "Can only add Runtime.Objects to a Runtime.Container"),
                T(t, V).parent = this,
                null === t.name)
                    return L("namedContentObj.name");
                this.namedContent.set(t.name, t)
            }
        }, {
            key: "ContentAtPath",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                -1 == n && (n = t.length);
                var i = new Q;
                i.approximate = !1;
                for (var a = this, o = this, s = e; s < n; ++s) {
                    var l = t.GetComponent(s);
                    if (null == a) {
                        i.approximate = !0;
                        break
                    }
                    var u = a.ContentWithPathComponent(l);
                    if (null == u) {
                        i.approximate = !0;
                        break
                    }
                    o = u,
                    a = _(u, r)
                }
                return i.obj = o,
                i
            }
        }, {
            key: "InsertContent",
            value: function(t, e) {
                if (this.content.splice(e, 0, t),
                t.parent)
                    throw new Error("content is already in " + t.parent);
                t.parent = this,
                this.TryAddNamedContent(t)
            }
        }, {
            key: "AddContentsOfContainer",
            value: function(t) {
                var e;
                (e = this.content).push.apply(e, g(t.content));
                var n, r = S(t.content);
                try {
                    for (r.s(); !(n = r.n()).done; ) {
                        var i = n.value;
                        i.parent = this,
                        this.TryAddNamedContent(i)
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
            }
        }, {
            key: "ContentWithPathComponent",
            value: function(t) {
                if (t.isIndex)
                    return t.index >= 0 && t.index < this.content.length ? this.content[t.index] : null;
                if (t.isParent)
                    return this.parent;
                if (null === t.name)
                    return L("component.name");
                var e = q(this.namedContent, t.name, null);
                return e.exists ? T(e.result, V) : null
            }
        }, {
            key: "BuildStringOfHierarchy",
            value: function() {
                var t;
                if (0 == arguments.length)
                    return t = new j,
                    this.BuildStringOfHierarchy(t, 0, null),
                    t.toString();
                t = arguments[0];
                var e = arguments[1]
                  , n = arguments[2];
                function i() {
                    for (var n = 0; n < 4 * e; ++n)
                        t.Append(" ")
                }
                i(),
                t.Append("["),
                this.hasValidName && t.AppendFormat(" ({0})", this.name),
                this == n && t.Append("  <---"),
                t.AppendLine(),
                e++;
                for (var a = 0; a < this.content.length; ++a) {
                    var o = this.content[a];
                    if (o instanceof r) {
                        var s = o;
                        s.BuildStringOfHierarchy(t, e, n)
                    } else
                        i(),
                        o instanceof $ ? (t.Append('"'),
                        t.Append(o.toString().replace("\n", "\\n")),
                        t.Append('"')) : t.Append(o.toString());
                    a != this.content.length - 1 && t.Append(","),
                    o instanceof r || o != n || t.Append("  <---"),
                    t.AppendLine()
                }
                var l, u = new Map, c = S(this.namedContent);
                try {
                    for (c.s(); !(l = c.n()).done; ) {
                        var h = m(l.value, 2)
                          , f = h[0]
                          , d = h[1];
                        this.content.indexOf(T(d, V)) >= 0 || u.set(f, d)
                    }
                } catch (t) {
                    c.e(t)
                } finally {
                    c.f()
                }
                if (u.size > 0) {
                    i(),
                    t.AppendLine("-- named: --");
                    var v, p = S(u);
                    try {
                        for (p.s(); !(v = p.n()).done; ) {
                            var g = m(v.value, 2)
                              , y = g[1];
                            I.AssertType(y, r, "Can only print out named Containers");
                            var C = y;
                            C.BuildStringOfHierarchy(t, e, n),
                            t.AppendLine()
                        }
                    } catch (t) {
                        p.e(t)
                    } finally {
                        p.f()
                    }
                }
                e--,
                i(),
                t.Append("]")
            }
        }]),
        r
    }(V);
    !function(t) {
        var e;
        (e = t.CountFlags || (t.CountFlags = {}))[e.Visits = 1] = "Visits",
        e[e.Turns = 2] = "Turns",
        e[e.CountStartOnly = 4] = "CountStartOnly"
    }(tt || (tt = {}));
    var et = function(t) {
        a(r, t);
        var e = d(r);
        function r() {
            var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.CommandType.NotSet;
            return n(this, r),
            (t = e.call(this))._commandType = i,
            t
        }
        return i(r, [{
            key: "commandType",
            get: function() {
                return this._commandType
            }
        }, {
            key: "Copy",
            value: function() {
                return new r(this.commandType)
            }
        }, {
            key: "toString",
            value: function() {
                return this.commandType.toString()
            }
        }], [{
            key: "EvalStart",
            value: function() {
                return new r(r.CommandType.EvalStart)
            }
        }, {
            key: "EvalOutput",
            value: function() {
                return new r(r.CommandType.EvalOutput)
            }
        }, {
            key: "EvalEnd",
            value: function() {
                return new r(r.CommandType.EvalEnd)
            }
        }, {
            key: "Duplicate",
            value: function() {
                return new r(r.CommandType.Duplicate)
            }
        }, {
            key: "PopEvaluatedValue",
            value: function() {
                return new r(r.CommandType.PopEvaluatedValue)
            }
        }, {
            key: "PopFunction",
            value: function() {
                return new r(r.CommandType.PopFunction)
            }
        }, {
            key: "PopTunnel",
            value: function() {
                return new r(r.CommandType.PopTunnel)
            }
        }, {
            key: "BeginString",
            value: function() {
                return new r(r.CommandType.BeginString)
            }
        }, {
            key: "EndString",
            value: function() {
                return new r(r.CommandType.EndString)
            }
        }, {
            key: "NoOp",
            value: function() {
                return new r(r.CommandType.NoOp)
            }
        }, {
            key: "ChoiceCount",
            value: function() {
                return new r(r.CommandType.ChoiceCount)
            }
        }, {
            key: "Turns",
            value: function() {
                return new r(r.CommandType.Turns)
            }
        }, {
            key: "TurnsSince",
            value: function() {
                return new r(r.CommandType.TurnsSince)
            }
        }, {
            key: "ReadCount",
            value: function() {
                return new r(r.CommandType.ReadCount)
            }
        }, {
            key: "Random",
            value: function() {
                return new r(r.CommandType.Random)
            }
        }, {
            key: "SeedRandom",
            value: function() {
                return new r(r.CommandType.SeedRandom)
            }
        }, {
            key: "VisitIndex",
            value: function() {
                return new r(r.CommandType.VisitIndex)
            }
        }, {
            key: "SequenceShuffleIndex",
            value: function() {
                return new r(r.CommandType.SequenceShuffleIndex)
            }
        }, {
            key: "StartThread",
            value: function() {
                return new r(r.CommandType.StartThread)
            }
        }, {
            key: "Done",
            value: function() {
                return new r(r.CommandType.Done)
            }
        }, {
            key: "End",
            value: function() {
                return new r(r.CommandType.End)
            }
        }, {
            key: "ListFromInt",
            value: function() {
                return new r(r.CommandType.ListFromInt)
            }
        }, {
            key: "ListRange",
            value: function() {
                return new r(r.CommandType.ListRange)
            }
        }, {
            key: "ListRandom",
            value: function() {
                return new r(r.CommandType.ListRandom)
            }
        }, {
            key: "BeginTag",
            value: function() {
                return new r(r.CommandType.BeginTag)
            }
        }, {
            key: "EndTag",
            value: function() {
                return new r(r.CommandType.EndTag)
            }
        }]),
        r
    }(V);
    !function(t) {
        var e;
        (e = t.CommandType || (t.CommandType = {}))[e.NotSet = -1] = "NotSet",
        e[e.EvalStart = 0] = "EvalStart",
        e[e.EvalOutput = 1] = "EvalOutput",
        e[e.EvalEnd = 2] = "EvalEnd",
        e[e.Duplicate = 3] = "Duplicate",
        e[e.PopEvaluatedValue = 4] = "PopEvaluatedValue",
        e[e.PopFunction = 5] = "PopFunction",
        e[e.PopTunnel = 6] = "PopTunnel",
        e[e.BeginString = 7] = "BeginString",
        e[e.EndString = 8] = "EndString",
        e[e.NoOp = 9] = "NoOp",
        e[e.ChoiceCount = 10] = "ChoiceCount",
        e[e.Turns = 11] = "Turns",
        e[e.TurnsSince = 12] = "TurnsSince",
        e[e.ReadCount = 13] = "ReadCount",
        e[e.Random = 14] = "Random",
        e[e.SeedRandom = 15] = "SeedRandom",
        e[e.VisitIndex = 16] = "VisitIndex",
        e[e.SequenceShuffleIndex = 17] = "SequenceShuffleIndex",
        e[e.StartThread = 18] = "StartThread",
        e[e.Done = 19] = "Done",
        e[e.End = 20] = "End",
        e[e.ListFromInt = 21] = "ListFromInt",
        e[e.ListRange = 22] = "ListRange",
        e[e.ListRandom = 23] = "ListRandom",
        e[e.BeginTag = 24] = "BeginTag",
        e[e.EndTag = 25] = "EndTag",
        e[e.TOTAL_VALUES = 26] = "TOTAL_VALUES"
    }(et || (et = {}));
    var nt = function(t) {
        a(r, t);
        var e = d(r);
        function r() {
            var t;
            return n(this, r),
            (t = e.apply(this, arguments))._prototypeRuntimeConstantExpression = null,
            t.outputWhenComplete = !1,
            t.GenerateRuntimeObject = function() {
                var e = new tt;
                return e.AddContent(et.EvalStart()),
                t.GenerateIntoContainer(e),
                t.outputWhenComplete && e.AddContent(et.EvalOutput()),
                e.AddContent(et.EvalEnd()),
                e
            }
            ,
            t.GenerateConstantIntoContainer = function(e) {
                null === t._prototypeRuntimeConstantExpression && (t._prototypeRuntimeConstantExpression = new tt,
                t.GenerateIntoContainer(t._prototypeRuntimeConstantExpression));
                var n, r = S(t._prototypeRuntimeConstantExpression.content);
                try {
                    for (r.s(); !(n = r.n()).done; ) {
                        var i = n.value.Copy();
                        i && e.AddContent(i)
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
            }
            ,
            t.toString = function() {
                return "No string value in JavaScript."
            }
            ,
            t
        }
        return i(r, [{
            key: "typeName",
            get: function() {
                return "Expression"
            }
        }, {
            key: "Equals",
            value: function(t) {
                return !1
            }
        }]),
        r
    }(F)
      , rt = function(t) {
        a(r, t);
        var e = d(r);
        function r() {
            return n(this, r),
            e.apply(this, arguments)
        }
        return i(r)
    }(V)
      , it = function(t) {
        a(r, t);
        var e = d(r);
        function r() {
            var t;
            if (n(this, r),
            (t = e.call(this))._name = null,
            t._numberOfParameters = 0,
            t._prototype = null,
            t._isPrototype = !1,
            t._operationFuncs = null,
            0 === arguments.length)
                r.GenerateNativeFunctionsIfNecessary();
            else if (1 === arguments.length) {
                var i = arguments[0];
                r.GenerateNativeFunctionsIfNecessary(),
                t.name = i
            } else if (2 === arguments.length) {
                var a = arguments[0]
                  , o = arguments[1];
                t._isPrototype = !0,
                t.name = a,
                t.numberOfParameters = o
            }
            return t
        }
        return i(r, [{
            key: "name",
            get: function() {
                return null === this._name ? L("NativeFunctionCall._name") : this._name
            },
            set: function(t) {
                this._name = t,
                this._isPrototype || (null === r._nativeFunctions ? L("NativeFunctionCall._nativeFunctions") : this._prototype = r._nativeFunctions.get(this._name) || null)
            }
        }, {
            key: "numberOfParameters",
            get: function() {
                return this._prototype ? this._prototype.numberOfParameters : this._numberOfParameters
            },
            set: function(t) {
                this._numberOfParameters = t
            }
        }, {
            key: "Call",
            value: function(t) {
                if (this._prototype)
                    return this._prototype.Call(t);
                if (this.numberOfParameters != t.length)
                    throw new Error("Unexpected number of parameters");
                var e, n = !1, r = S(t);
                try {
                    for (r.s(); !(e = r.n()).done; ) {
                        var i = e.value;
                        if (i instanceof rt)
                            throw new G('Attempting to perform operation on a void value. Did you forget to "return" a value from a function you called here?');
                        i instanceof Z && (n = !0)
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                if (2 == t.length && n)
                    return this.CallBinaryListOperation(t);
                var a = this.CoerceValuesToSingleType(t)
                  , o = a[0].valueType;
                return o == U.Int || o == U.Float || o == U.String || o == U.DivertTarget || o == U.List ? this.CallType(a) : null
            }
        }, {
            key: "CallType",
            value: function(t) {
                var e = T(t[0], K)
                  , n = e.valueType
                  , i = e
                  , a = t.length;
                if (2 == a || 1 == a) {
                    if (null === this._operationFuncs)
                        return L("NativeFunctionCall._operationFuncs");
                    var o = this._operationFuncs.get(n);
                    if (!o) {
                        var s = U[n];
                        throw new G("Cannot perform operation " + this.name + " on " + s)
                    }
                    if (2 == a) {
                        var l = T(t[1], K)
                          , u = o;
                        if (null === i.value || null === l.value)
                            return L("NativeFunctionCall.Call BinaryOp values");
                        var c = u(i.value, l.value);
                        return K.Create(c)
                    }
                    var h = o;
                    if (null === i.value)
                        return L("NativeFunctionCall.Call UnaryOp value");
                    var f = h(i.value);
                    return this.name === r.Int ? K.Create(f, U.Int) : this.name === r.Float ? K.Create(f, U.Float) : K.Create(f, e.valueType)
                }
                throw new Error("Unexpected number of parameters to NativeFunctionCall: " + t.length)
            }
        }, {
            key: "CallBinaryListOperation",
            value: function(t) {
                if (("+" == this.name || "-" == this.name) && t[0]instanceof Z && t[1]instanceof J)
                    return this.CallListIncrementOperation(t);
                var e = T(t[0], K)
                  , n = T(t[1], K);
                if (!("&&" != this.name && "||" != this.name || e.valueType == U.List && n.valueType == U.List)) {
                    if (null === this._operationFuncs)
                        return L("NativeFunctionCall._operationFuncs");
                    var r = this._operationFuncs.get(U.Int);
                    if (null === r)
                        return L("NativeFunctionCall.CallBinaryListOperation op");
                    var i = function(t) {
                        if ("boolean" == typeof t)
                            return t;
                        throw new Error("".concat(t, " is not a boolean"))
                    }(r(e.isTruthy ? 1 : 0, n.isTruthy ? 1 : 0));
                    return new H(i)
                }
                if (e.valueType == U.List && n.valueType == U.List)
                    return this.CallType([e, n]);
                throw new G("Can not call use " + this.name + " operation on " + U[e.valueType] + " and " + U[n.valueType])
            }
        }, {
            key: "CallListIncrementOperation",
            value: function(t) {
                var e = T(t[0], Z)
                  , n = T(t[1], J)
                  , r = new M;
                if (null === e.value)
                    return L("NativeFunctionCall.CallListIncrementOperation listVal.value");
                var i, a = S(e.value);
                try {
                    for (a.s(); !(i = a.n()).done; ) {
                        var o = m(i.value, 2)
                          , s = o[0]
                          , l = o[1]
                          , u = B.fromSerializedKey(s);
                        if (null === this._operationFuncs)
                            return L("NativeFunctionCall._operationFuncs");
                        var c = this._operationFuncs.get(U.Int);
                        if (null === n.value)
                            return L("NativeFunctionCall.CallListIncrementOperation intVal.value");
                        var h = c(l, n.value)
                          , f = null;
                        if (null === e.value.origins)
                            return L("NativeFunctionCall.CallListIncrementOperation listVal.value.origins");
                        var d, v = S(e.value.origins);
                        try {
                            for (v.s(); !(d = v.n()).done; ) {
                                var p = d.value;
                                if (p.name == u.originName) {
                                    f = p;
                                    break
                                }
                            }
                        } catch (t) {
                            v.e(t)
                        } finally {
                            v.f()
                        }
                        if (null != f) {
                            var g = f.TryGetItemWithValue(h, B.Null);
                            g.exists && r.Add(g.result, h)
                        }
                    }
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
                return new Z(r)
            }
        }, {
            key: "CoerceValuesToSingleType",
            value: function(t) {
                var e, n = U.Int, r = null, i = S(t);
                try {
                    for (i.s(); !(e = i.n()).done; ) {
                        var a = T(e.value, K);
                        a.valueType > n && (n = a.valueType),
                        a.valueType == U.List && (r = _(a, Z))
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
                var o = [];
                if (U[n] == U[U.List]) {
                    var s, l = S(t);
                    try {
                        for (l.s(); !(s = l.n()).done; ) {
                            var u = T(s.value, K);
                            if (u.valueType == U.List)
                                o.push(u);
                            else {
                                if (u.valueType != U.Int) {
                                    var c = U[u.valueType];
                                    throw new G("Cannot mix Lists and " + c + " values in this operation")
                                }
                                var h = parseInt(u.valueObject);
                                if (null === (r = T(r, Z)).value)
                                    return L("NativeFunctionCall.CoerceValuesToSingleType specialCaseList.value");
                                var f = r.value.originOfMaxItem;
                                if (null === f)
                                    return L("NativeFunctionCall.CoerceValuesToSingleType list");
                                var d = f.TryGetItemWithValue(h, B.Null);
                                if (!d.exists)
                                    throw new G("Could not find List item with the value " + h + " in " + f.name);
                                var v = new Z(d.result,h);
                                o.push(v)
                            }
                        }
                    } catch (t) {
                        l.e(t)
                    } finally {
                        l.f()
                    }
                } else {
                    var p, m = S(t);
                    try {
                        for (m.s(); !(p = m.n()).done; ) {
                            var g = T(p.value, K).Cast(n);
                            o.push(g)
                        }
                    } catch (t) {
                        m.e(t)
                    } finally {
                        m.f()
                    }
                }
                return o
            }
        }, {
            key: "AddOpFuncForType",
            value: function(t, e) {
                null == this._operationFuncs && (this._operationFuncs = new Map),
                this._operationFuncs.set(t, e)
            }
        }, {
            key: "toString",
            value: function() {
                return 'Native "' + this.name + '"'
            }
        }], [{
            key: "CallWithName",
            value: function(t) {
                return new r(t)
            }
        }, {
            key: "CallExistsWithName",
            value: function(t) {
                return this.GenerateNativeFunctionsIfNecessary(),
                this._nativeFunctions.get(t)
            }
        }, {
            key: "Identity",
            value: function(t) {
                return t
            }
        }, {
            key: "GenerateNativeFunctionsIfNecessary",
            value: function() {
                if (null == this._nativeFunctions) {
                    this._nativeFunctions = new Map,
                    this.AddIntBinaryOp(this.Add, (function(t, e) {
                        return t + e
                    }
                    )),
                    this.AddIntBinaryOp(this.Subtract, (function(t, e) {
                        return t - e
                    }
                    )),
                    this.AddIntBinaryOp(this.Multiply, (function(t, e) {
                        return t * e
                    }
                    )),
                    this.AddIntBinaryOp(this.Divide, (function(t, e) {
                        return Math.floor(t / e)
                    }
                    )),
                    this.AddIntBinaryOp(this.Mod, (function(t, e) {
                        return t % e
                    }
                    )),
                    this.AddIntUnaryOp(this.Negate, (function(t) {
                        return -t
                    }
                    )),
                    this.AddIntBinaryOp(this.Equal, (function(t, e) {
                        return t == e
                    }
                    )),
                    this.AddIntBinaryOp(this.Greater, (function(t, e) {
                        return t > e
                    }
                    )),
                    this.AddIntBinaryOp(this.Less, (function(t, e) {
                        return t < e
                    }
                    )),
                    this.AddIntBinaryOp(this.GreaterThanOrEquals, (function(t, e) {
                        return t >= e
                    }
                    )),
                    this.AddIntBinaryOp(this.LessThanOrEquals, (function(t, e) {
                        return t <= e
                    }
                    )),
                    this.AddIntBinaryOp(this.NotEquals, (function(t, e) {
                        return t != e
                    }
                    )),
                    this.AddIntUnaryOp(this.Not, (function(t) {
                        return 0 == t
                    }
                    )),
                    this.AddIntBinaryOp(this.And, (function(t, e) {
                        return 0 != t && 0 != e
                    }
                    )),
                    this.AddIntBinaryOp(this.Or, (function(t, e) {
                        return 0 != t || 0 != e
                    }
                    )),
                    this.AddIntBinaryOp(this.Max, (function(t, e) {
                        return Math.max(t, e)
                    }
                    )),
                    this.AddIntBinaryOp(this.Min, (function(t, e) {
                        return Math.min(t, e)
                    }
                    )),
                    this.AddIntBinaryOp(this.Pow, (function(t, e) {
                        return Math.pow(t, e)
                    }
                    )),
                    this.AddIntUnaryOp(this.Floor, r.Identity),
                    this.AddIntUnaryOp(this.Ceiling, r.Identity),
                    this.AddIntUnaryOp(this.Int, r.Identity),
                    this.AddIntUnaryOp(this.Float, (function(t) {
                        return t
                    }
                    )),
                    this.AddFloatBinaryOp(this.Add, (function(t, e) {
                        return t + e
                    }
                    )),
                    this.AddFloatBinaryOp(this.Subtract, (function(t, e) {
                        return t - e
                    }
                    )),
                    this.AddFloatBinaryOp(this.Multiply, (function(t, e) {
                        return t * e
                    }
                    )),
                    this.AddFloatBinaryOp(this.Divide, (function(t, e) {
                        return t / e
                    }
                    )),
                    this.AddFloatBinaryOp(this.Mod, (function(t, e) {
                        return t % e
                    }
                    )),
                    this.AddFloatUnaryOp(this.Negate, (function(t) {
                        return -t
                    }
                    )),
                    this.AddFloatBinaryOp(this.Equal, (function(t, e) {
                        return t == e
                    }
                    )),
                    this.AddFloatBinaryOp(this.Greater, (function(t, e) {
                        return t > e
                    }
                    )),
                    this.AddFloatBinaryOp(this.Less, (function(t, e) {
                        return t < e
                    }
                    )),
                    this.AddFloatBinaryOp(this.GreaterThanOrEquals, (function(t, e) {
                        return t >= e
                    }
                    )),
                    this.AddFloatBinaryOp(this.LessThanOrEquals, (function(t, e) {
                        return t <= e
                    }
                    )),
                    this.AddFloatBinaryOp(this.NotEquals, (function(t, e) {
                        return t != e
                    }
                    )),
                    this.AddFloatUnaryOp(this.Not, (function(t) {
                        return 0 == t
                    }
                    )),
                    this.AddFloatBinaryOp(this.And, (function(t, e) {
                        return 0 != t && 0 != e
                    }
                    )),
                    this.AddFloatBinaryOp(this.Or, (function(t, e) {
                        return 0 != t || 0 != e
                    }
                    )),
                    this.AddFloatBinaryOp(this.Max, (function(t, e) {
                        return Math.max(t, e)
                    }
                    )),
                    this.AddFloatBinaryOp(this.Min, (function(t, e) {
                        return Math.min(t, e)
                    }
                    )),
                    this.AddFloatBinaryOp(this.Pow, (function(t, e) {
                        return Math.pow(t, e)
                    }
                    )),
                    this.AddFloatUnaryOp(this.Floor, (function(t) {
                        return Math.floor(t)
                    }
                    )),
                    this.AddFloatUnaryOp(this.Ceiling, (function(t) {
                        return Math.ceil(t)
                    }
                    )),
                    this.AddFloatUnaryOp(this.Int, (function(t) {
                        return Math.floor(t)
                    }
                    )),
                    this.AddFloatUnaryOp(this.Float, r.Identity),
                    this.AddStringBinaryOp(this.Add, (function(t, e) {
                        return t + e
                    }
                    )),
                    this.AddStringBinaryOp(this.Equal, (function(t, e) {
                        return t === e
                    }
                    )),
                    this.AddStringBinaryOp(this.NotEquals, (function(t, e) {
                        return !(t === e)
                    }
                    )),
                    this.AddStringBinaryOp(this.Has, (function(t, e) {
                        return t.includes(e)
                    }
                    )),
                    this.AddStringBinaryOp(this.Hasnt, (function(t, e) {
                        return !t.includes(e)
                    }
                    )),
                    this.AddListBinaryOp(this.Add, (function(t, e) {
                        return t.Union(e)
                    }
                    )),
                    this.AddListBinaryOp(this.Subtract, (function(t, e) {
                        return t.Without(e)
                    }
                    )),
                    this.AddListBinaryOp(this.Has, (function(t, e) {
                        return t.Contains(e)
                    }
                    )),
                    this.AddListBinaryOp(this.Hasnt, (function(t, e) {
                        return !t.Contains(e)
                    }
                    )),
                    this.AddListBinaryOp(this.Intersect, (function(t, e) {
                        return t.Intersect(e)
                    }
                    )),
                    this.AddListBinaryOp(this.Equal, (function(t, e) {
                        return t.Equals(e)
                    }
                    )),
                    this.AddListBinaryOp(this.Greater, (function(t, e) {
                        return t.GreaterThan(e)
                    }
                    )),
                    this.AddListBinaryOp(this.Less, (function(t, e) {
                        return t.LessThan(e)
                    }
                    )),
                    this.AddListBinaryOp(this.GreaterThanOrEquals, (function(t, e) {
                        return t.GreaterThanOrEquals(e)
                    }
                    )),
                    this.AddListBinaryOp(this.LessThanOrEquals, (function(t, e) {
                        return t.LessThanOrEquals(e)
                    }
                    )),
                    this.AddListBinaryOp(this.NotEquals, (function(t, e) {
                        return !t.Equals(e)
                    }
                    )),
                    this.AddListBinaryOp(this.And, (function(t, e) {
                        return t.Count > 0 && e.Count > 0
                    }
                    )),
                    this.AddListBinaryOp(this.Or, (function(t, e) {
                        return t.Count > 0 || e.Count > 0
                    }
                    )),
                    this.AddListUnaryOp(this.Not, (function(t) {
                        return 0 == t.Count ? 1 : 0
                    }
                    )),
                    this.AddListUnaryOp(this.Invert, (function(t) {
                        return t.inverse
                    }
                    )),
                    this.AddListUnaryOp(this.All, (function(t) {
                        return t.all
                    }
                    )),
                    this.AddListUnaryOp(this.ListMin, (function(t) {
                        return t.MinAsList()
                    }
                    )),
                    this.AddListUnaryOp(this.ListMax, (function(t) {
                        return t.MaxAsList()
                    }
                    )),
                    this.AddListUnaryOp(this.Count, (function(t) {
                        return t.Count
                    }
                    )),
                    this.AddListUnaryOp(this.ValueOfList, (function(t) {
                        return t.maxItem.Value
                    }
                    ));
                    this.AddOpToNativeFunc(this.Equal, 2, U.DivertTarget, (function(t, e) {
                        return t.Equals(e)
                    }
                    )),
                    this.AddOpToNativeFunc(this.NotEquals, 2, U.DivertTarget, (function(t, e) {
                        return !t.Equals(e)
                    }
                    ))
                }
            }
        }, {
            key: "AddOpToNativeFunc",
            value: function(t, e, n, i) {
                if (null === this._nativeFunctions)
                    return L("NativeFunctionCall._nativeFunctions");
                var a = this._nativeFunctions.get(t);
                a || (a = new r(t,e),
                this._nativeFunctions.set(t, a)),
                a.AddOpFuncForType(n, i)
            }
        }, {
            key: "AddIntBinaryOp",
            value: function(t, e) {
                this.AddOpToNativeFunc(t, 2, U.Int, e)
            }
        }, {
            key: "AddIntUnaryOp",
            value: function(t, e) {
                this.AddOpToNativeFunc(t, 1, U.Int, e)
            }
        }, {
            key: "AddFloatBinaryOp",
            value: function(t, e) {
                this.AddOpToNativeFunc(t, 2, U.Float, e)
            }
        }, {
            key: "AddFloatUnaryOp",
            value: function(t, e) {
                this.AddOpToNativeFunc(t, 1, U.Float, e)
            }
        }, {
            key: "AddStringBinaryOp",
            value: function(t, e) {
                this.AddOpToNativeFunc(t, 2, U.String, e)
            }
        }, {
            key: "AddListBinaryOp",
            value: function(t, e) {
                this.AddOpToNativeFunc(t, 2, U.List, e)
            }
        }, {
            key: "AddListUnaryOp",
            value: function(t, e) {
                this.AddOpToNativeFunc(t, 1, U.List, e)
            }
        }]),
        r
    }(V);
    it.Add = "+",
    it.Subtract = "-",
    it.Divide = "/",
    it.Multiply = "*",
    it.Mod = "%",
    it.Negate = "_",
    it.Equal = "==",
    it.Greater = ">",
    it.Less = "<",
    it.GreaterThanOrEquals = ">=",
    it.LessThanOrEquals = "<=",
    it.NotEquals = "!=",
    it.Not = "!",
    it.And = "&&",
    it.Or = "||",
    it.Min = "MIN",
    it.Max = "MAX",
    it.Pow = "POW",
    it.Floor = "FLOOR",
    it.Ceiling = "CEILING",
    it.Int = "INT",
    it.Float = "FLOAT",
    it.Has = "?",
    it.Hasnt = "!?",
    it.Intersect = "^",
    it.ListMin = "LIST_MIN",
    it.ListMax = "LIST_MAX",
    it.All = "LIST_ALL",
    it.Count = "LIST_COUNT",
    it.ValueOfList = "LIST_VALUE",
    it.Invert = "LIST_INVERT",
    it._nativeFunctions = null;
    var at = function(t) {
        a(r, t);
        var e = d(r);
        function r(t, i) {
            var a;
            if (n(this, r),
            (a = e.call(this)).isInt = function() {
                return "int" == a.subtype
            }
            ,
            a.isFloat = function() {
                return "float" == a.subtype
            }
            ,
            a.isBool = function() {
                return "bool" == a.subtype
            }
            ,
            a.GenerateIntoContainer = function(t) {
                a.isInt() ? t.AddContent(new J(a.value)) : a.isFloat() ? t.AddContent(new z(a.value)) : a.isBool() && t.AddContent(new H(a.value))
            }
            ,
            a.toString = function() {
                return String(a.value)
            }
            ,
            ("number" != typeof t || Number.isNaN(t)) && "boolean" != typeof t)
                throw new Error("Unexpected object type in NumberExpression.");
            return a.value = t,
            a.subtype = i,
            a
        }
        return i(r, [{
            key: "typeName",
            get: function() {
                return "Number"
            }
        }, {
            key: "Equals",
            value: function(t) {
                var e = _(t, r);
                return !!e && (e.subtype == this.subtype && e.value == this.value)
            }
        }]),
        r
    }(nt)
      , ot = function(t) {
        a(r, t);
        var e = d(r);
        function r(t, i) {
            var a;
            return n(this, r),
            (a = e.call(this)).op = i,
            a.GenerateIntoContainer = function(t) {
                a.innerExpression.GenerateIntoContainer(t),
                t.AddContent(it.CallWithName(a.nativeNameForOp))
            }
            ,
            a.toString = function() {
                return a.nativeNameForOp + a.innerExpression
            }
            ,
            a.innerExpression = a.AddContent(t),
            a
        }
        return i(r, [{
            key: "nativeNameForOp",
            get: function() {
                return "-" === this.op ? "_" : "not" === this.op ? "!" : this.op
            }
        }, {
            key: "typeName",
            get: function() {
                return "UnaryExpression"
            }
        }]),
        r
    }(nt);
    ot.WithInner = function(t, e) {
        var n = _(t, at);
        if (n) {
            if ("-" === e) {
                if (n.isInt())
                    return new at(-n.value,"int");
                if (n.isFloat())
                    return new at(-n.value,"float")
            } else if ("!" == e || "not" == e) {
                if (n.isInt())
                    return new at(0 == n.value,"bool");
                if (n.isFloat())
                    return new at(0 == n.value,"bool");
                if (n.isBool())
                    return new at(!n.value,"bool")
            }
            throw new Error("Unexpected operation or number type")
        }
        return new ot(t,e)
    }
    ;
    var st = function(t) {
        a(r, t);
        var e = d(r);
        function r(t, i, a) {
            var o;
            return n(this, r),
            (o = e.call(this)).opName = a,
            o.GenerateIntoContainer = function(t) {
                o.leftExpression.GenerateIntoContainer(t),
                o.rightExpression.GenerateIntoContainer(t),
                o.opName = o.NativeNameForOp(o.opName),
                t.AddContent(it.CallWithName(o.opName))
            }
            ,
            o.NativeNameForOp = function(t) {
                return "and" === t ? "&&" : "or" === t ? "||" : "mod" === t ? "%" : "has" === t ? "?" : "hasnt" === t ? "!?" : t
            }
            ,
            o.toString = function() {
                return "(".concat(o.leftExpression, " ").concat(o.opName, " ").concat(o.rightExpression, ")")
            }
            ,
            o.leftExpression = o.AddContent(t),
            o.rightExpression = o.AddContent(i),
            o.opName = a,
            o
        }
        return i(r, [{
            key: "typeName",
            get: function() {
                return "BinaryExpression"
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                if (p(o(r.prototype), "ResolveReferences", this).call(this, t),
                "?" === this.NativeNameForOp(this.opName)) {
                    var e = _(this.leftExpression, ot);
                    null === e || "not" !== e.op && "!" !== e.op || this.Error("Using 'not' or '!' here negates '".concat(e.innerExpression, "' rather than the result of the '?' or 'has' operator. You need to add parentheses around the (A ? B) expression."))
                }
            }
        }]),
        r
    }(nt)
      , lt = i((function t(e) {
        var r = this;
        n(this, t),
        this.set = new Set,
        this.Add = function(t) {
            return r.set.add(t)
        }
        ,
        this.AddRange = function(t, e) {
            for (var n = t.charCodeAt(0); n <= e.charCodeAt(0); ++n)
                r.Add(String.fromCharCode(n));
            return r
        }
        ,
        this.AddCharacters = function(t) {
            if ("string" == typeof t || Array.isArray(t)) {
                var e, n = S(t);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var i = e.value;
                        r.Add(i)
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
            } else {
                var a, o = S(t.set);
                try {
                    for (o.s(); !(a = o.n()).done; ) {
                        var s = a.value;
                        r.Add(s)
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
            }
            return r
        }
        ,
        e && this.AddCharacters(e)
    }
    ));
    lt.FromRange = function(t, e) {
        return (new lt).AddRange(t, e)
    }
    ;
    var ut = function() {
        function t(e, r) {
            var i = this
              , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            if (n(this, t),
            this._start = e,
            this._end = r,
            this._correspondingCharSet = new lt,
            this._excludes = new Set,
            this.ToCharacterSet = function() {
                if (0 === i._correspondingCharSet.set.size)
                    for (var t = i.start.charCodeAt(0), e = String.fromCharCode(t); t <= i.end.charCodeAt(0); t += 1)
                        i._excludes.has(e) || i._correspondingCharSet.AddCharacters(e);
                return i._correspondingCharSet
            }
            ,
            a instanceof lt)
                this._excludes = a.set;
            else {
                var o, s = S(a);
                try {
                    for (s.s(); !(o = s.n()).done; ) {
                        var l = o.value;
                        this._excludes.add(l)
                    }
                } catch (t) {
                    s.e(t)
                } finally {
                    s.f()
                }
            }
        }
        return i(t, [{
            key: "start",
            get: function() {
                return this._start
            }
        }, {
            key: "end",
            get: function() {
                return this._end
            }
        }]),
        t
    }();
    ut.Define = function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        return new ut(t,e,n)
    }
    ;
    var ct, ht = function(t) {
        a(r, t);
        var e = d(r);
        function r() {
            var t, i = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return n(this, r),
            (t = e.call(this))._pathOnChoice = null,
            t.hasCondition = !1,
            t.hasStartContent = !1,
            t.hasChoiceOnlyContent = !1,
            t.isInvisibleDefault = !1,
            t.onceOnly = !0,
            t.onceOnly = i,
            t
        }
        return i(r, [{
            key: "pathOnChoice",
            get: function() {
                if (null != this._pathOnChoice && this._pathOnChoice.isRelative) {
                    var t = this.choiceTarget;
                    t && (this._pathOnChoice = t.path)
                }
                return this._pathOnChoice
            },
            set: function(t) {
                this._pathOnChoice = t
            }
        }, {
            key: "choiceTarget",
            get: function() {
                return null === this._pathOnChoice ? L("ChoicePoint._pathOnChoice") : this.ResolvePath(this._pathOnChoice).container
            }
        }, {
            key: "pathStringOnChoice",
            get: function() {
                return null === this.pathOnChoice ? L("ChoicePoint.pathOnChoice") : this.CompactPathString(this.pathOnChoice)
            },
            set: function(t) {
                this.pathOnChoice = new R(t)
            }
        }, {
            key: "flags",
            get: function() {
                var t = 0;
                return this.hasCondition && (t |= 1),
                this.hasStartContent && (t |= 2),
                this.hasChoiceOnlyContent && (t |= 4),
                this.isInvisibleDefault && (t |= 8),
                this.onceOnly && (t |= 16),
                t
            },
            set: function(t) {
                this.hasCondition = (1 & t) > 0,
                this.hasStartContent = (2 & t) > 0,
                this.hasChoiceOnlyContent = (4 & t) > 0,
                this.isInvisibleDefault = (8 & t) > 0,
                this.onceOnly = (16 & t) > 0
            }
        }, {
            key: "toString",
            value: function() {
                return null === this.pathOnChoice ? L("ChoicePoint.pathOnChoice") : "Choice: -> " + this.pathOnChoice.toString()
            }
        }]),
        r
    }(V);
    !function(t) {
        t[t.Tunnel = 0] = "Tunnel",
        t[t.Function = 1] = "Function",
        t[t.FunctionEvaluationFromGame = 2] = "FunctionEvaluationFromGame"
    }(ct || (ct = {}));
    var ft, dt = function() {
        function t() {
            n(this, t),
            this.container = null,
            this.index = -1,
            2 === arguments.length && (this.container = arguments[0],
            this.index = arguments[1])
        }
        return i(t, [{
            key: "Resolve",
            value: function() {
                return this.index < 0 ? this.container : null == this.container ? null : 0 == this.container.content.length ? this.container : this.index >= this.container.content.length ? null : this.container.content[this.index]
            }
        }, {
            key: "isNull",
            get: function() {
                return null == this.container
            }
        }, {
            key: "path",
            get: function() {
                return this.isNull ? null : this.index >= 0 ? this.container.path.PathByAppendingComponent(new R.Component(this.index)) : this.container.path
            }
        }, {
            key: "toString",
            value: function() {
                return this.container ? "Ink Pointer -> " + this.container.path.toString() + " -- index " + this.index : "Ink Pointer (null)"
            }
        }, {
            key: "copy",
            value: function() {
                return new t(this.container,this.index)
            }
        }], [{
            key: "StartOf",
            value: function(e) {
                return new t(e,0)
            }
        }, {
            key: "Null",
            get: function() {
                return new t(null,-1)
            }
        }]),
        t
    }(), vt = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i;
            return n(this, r),
            (i = e.call(this))._targetPath = null,
            i._targetPointer = dt.Null,
            i.variableDivertName = null,
            i.pushesToStack = !1,
            i.stackPushType = 0,
            i.isExternal = !1,
            i.externalArgs = 0,
            i.isConditional = !1,
            i.pushesToStack = !1,
            void 0 !== t && (i.pushesToStack = !0,
            i.stackPushType = t),
            i
        }
        return i(r, [{
            key: "targetPath",
            get: function() {
                if (null != this._targetPath && this._targetPath.isRelative) {
                    var t = this.targetPointer.Resolve();
                    t && (this._targetPath = t.path)
                }
                return this._targetPath
            },
            set: function(t) {
                this._targetPath = t,
                this._targetPointer = dt.Null
            }
        }, {
            key: "targetPointer",
            get: function() {
                if (this._targetPointer.isNull) {
                    var t = this.ResolvePath(this._targetPath).obj;
                    if (null === this._targetPath)
                        return L("this._targetPath");
                    if (null === this._targetPath.lastComponent)
                        return L("this._targetPath.lastComponent");
                    if (this._targetPath.lastComponent.isIndex) {
                        if (null === t)
                            return L("targetObj");
                        this._targetPointer.container = t.parent instanceof tt ? t.parent : null,
                        this._targetPointer.index = this._targetPath.lastComponent.index
                    } else
                        this._targetPointer = dt.StartOf(t instanceof tt ? t : null)
                }
                return this._targetPointer.copy()
            }
        }, {
            key: "targetPathString",
            get: function() {
                return null == this.targetPath ? null : this.CompactPathString(this.targetPath)
            },
            set: function(t) {
                this.targetPath = null == t ? null : new R(t)
            }
        }, {
            key: "hasVariableTarget",
            get: function() {
                return null != this.variableDivertName
            }
        }, {
            key: "Equals",
            value: function(t) {
                var e = t;
                return e instanceof r && this.hasVariableTarget == e.hasVariableTarget && (this.hasVariableTarget ? this.variableDivertName == e.variableDivertName : null === this.targetPath ? L("this.targetPath") : this.targetPath.Equals(e.targetPath))
            }
        }, {
            key: "toString",
            value: function() {
                if (this.hasVariableTarget)
                    return "Divert(variable: " + this.variableDivertName + ")";
                if (null == this.targetPath)
                    return "Divert(null)";
                var t = new j
                  , e = this.targetPath.toString();
                return t.Append("Divert"),
                this.isConditional && t.Append("?"),
                this.pushesToStack && (this.stackPushType == ct.Function ? t.Append(" function") : t.Append(" tunnel")),
                t.Append(" -> "),
                t.Append(this.targetPathString),
                t.Append(" ("),
                t.Append(e),
                t.Append(")"),
                t.toString()
            }
        }]),
        r
    }(V);
    !function(t) {
        t[t.Knot = 0] = "Knot",
        t[t.List = 1] = "List",
        t[t.ListItem = 2] = "ListItem",
        t[t.Var = 3] = "Var",
        t[t.SubFlowAndWeave = 4] = "SubFlowAndWeave",
        t[t.Arg = 5] = "Arg",
        t[t.Temp = 6] = "Temp"
    }(ft || (ft = {}));
    var pt = function(t) {
        a(r, t);
        var e = d(r);
        function r(t, i) {
            var a;
            return n(this, r),
            (a = e.call(this)).variableName = t || null,
            a.isNewDeclaration = !!i,
            a.isGlobal = !1,
            a
        }
        return i(r, [{
            key: "toString",
            value: function() {
                return "VarAssign to " + this.variableName
            }
        }]),
        r
    }(V)
      , mt = function(t) {
        a(r, t);
        var e = d(r);
        function r(t, i, a) {
            var o;
            return n(this, r),
            (o = e.call(this))._condition = null,
            o._innerContentContainer = null,
            o._outerContainer = null,
            o._runtimeChoice = null,
            o._returnToR1 = null,
            o._returnToR2 = null,
            o._r1Label = null,
            o._r2Label = null,
            o._divertToStartContentOuter = null,
            o._divertToStartContentInner = null,
            o._startContentRuntimeContainer = null,
            o.isInvisibleDefault = !1,
            o.hasWeaveStyleInlineBrackets = !1,
            o.GenerateRuntimeObject = function() {
                if (o._outerContainer = new tt,
                o._runtimeChoice = new ht(o.onceOnly),
                o._runtimeChoice.isInvisibleDefault = o.isInvisibleDefault,
                (o.startContent || o.choiceOnlyContent || o.condition) && o._outerContainer.AddContent(et.EvalStart()),
                o.startContent) {
                    o._returnToR1 = new X,
                    o._outerContainer.AddContent(o._returnToR1);
                    var t = new pt("$r",!0);
                    o._outerContainer.AddContent(t),
                    o._outerContainer.AddContent(et.BeginString()),
                    o._divertToStartContentOuter = new vt,
                    o._outerContainer.AddContent(o._divertToStartContentOuter),
                    o._startContentRuntimeContainer = o.startContent.GenerateRuntimeObject(),
                    o._startContentRuntimeContainer.name = "s";
                    var e = new vt;
                    e.variableDivertName = "$r",
                    o._startContentRuntimeContainer.AddContent(e),
                    o._outerContainer.AddToNamedContentOnly(o._startContentRuntimeContainer),
                    o._r1Label = new tt,
                    o._r1Label.name = "$r1",
                    o._outerContainer.AddContent(o._r1Label),
                    o._outerContainer.AddContent(et.EndString()),
                    o._runtimeChoice.hasStartContent = !0
                }
                if (o.choiceOnlyContent) {
                    o._outerContainer.AddContent(et.BeginString());
                    var n = o.choiceOnlyContent.GenerateRuntimeObject();
                    o._outerContainer.AddContentsOfContainer(n),
                    o._outerContainer.AddContent(et.EndString()),
                    o._runtimeChoice.hasChoiceOnlyContent = !0
                }
                if (o.condition && (o.condition.GenerateIntoContainer(o._outerContainer),
                o._runtimeChoice.hasCondition = !0),
                (o.startContent || o.choiceOnlyContent || o.condition) && o._outerContainer.AddContent(et.EvalEnd()),
                o._outerContainer.AddContent(o._runtimeChoice),
                o._innerContentContainer = new tt,
                o.startContent) {
                    o._returnToR2 = new X,
                    o._innerContentContainer.AddContent(et.EvalStart()),
                    o._innerContentContainer.AddContent(o._returnToR2),
                    o._innerContentContainer.AddContent(et.EvalEnd());
                    var r = new pt("$r",!0);
                    o._innerContentContainer.AddContent(r),
                    o._divertToStartContentInner = new vt,
                    o._innerContentContainer.AddContent(o._divertToStartContentInner),
                    o._r2Label = new tt,
                    o._r2Label.name = "$r2",
                    o._innerContentContainer.AddContent(o._r2Label)
                }
                if (o.innerContent) {
                    var i = o.innerContent.GenerateRuntimeObject();
                    o._innerContentContainer.AddContentsOfContainer(i)
                }
                return o.story.countAllVisits && (o._innerContentContainer.visitsShouldBeCounted = !0),
                o._innerContentContainer.countingAtStartOnly = !0,
                o._outerContainer
            }
            ,
            o.toString = function() {
                return null !== o.choiceOnlyContent ? "* ".concat(o.startContent, "[").concat(o.choiceOnlyContent, "]...") : "* ".concat(o.startContent, "...")
            }
            ,
            o.startContent = t,
            o.choiceOnlyContent = i,
            o.innerContent = a,
            o.indentationDepth = 1,
            t && o.AddContent(o.startContent),
            i && o.AddContent(o.choiceOnlyContent),
            a && o.AddContent(o.innerContent),
            o.onceOnly = !0,
            o
        }
        return i(r, [{
            key: "runtimeChoice",
            get: function() {
                if (!this._runtimeChoice)
                    throw new Error;
                return this._runtimeChoice
            }
        }, {
            key: "name",
            get: function() {
                var t;
                return (null === (t = this.identifier) || void 0 === t ? void 0 : t.name) || null
            }
        }, {
            key: "condition",
            get: function() {
                return this._condition
            },
            set: function(t) {
                this._condition = t,
                t && this.AddContent(t)
            }
        }, {
            key: "runtimeContainer",
            get: function() {
                return this._innerContentContainer
            }
        }, {
            key: "innerContentContainer",
            get: function() {
                return this._innerContentContainer
            }
        }, {
            key: "containerForCounting",
            get: function() {
                return this._innerContentContainer
            }
        }, {
            key: "runtimePath",
            get: function() {
                if (!this.innerContentContainer || !this.innerContentContainer.path)
                    throw new Error;
                return this.innerContentContainer.path
            }
        }, {
            key: "typeName",
            get: function() {
                return "Choice"
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                var e;
                if (this._innerContentContainer && (this.runtimeChoice.pathOnChoice = this._innerContentContainer.path,
                this.onceOnly && (this._innerContentContainer.visitsShouldBeCounted = !0)),
                this._returnToR1) {
                    if (!this._r1Label)
                        throw new Error;
                    this._returnToR1.targetPath = this._r1Label.path
                }
                if (this._returnToR2) {
                    if (!this._r2Label)
                        throw new Error;
                    this._returnToR2.targetPath = this._r2Label.path
                }
                if (this._divertToStartContentOuter) {
                    if (!this._startContentRuntimeContainer)
                        throw new Error;
                    this._divertToStartContentOuter.targetPath = this._startContentRuntimeContainer.path
                }
                if (this._divertToStartContentInner) {
                    if (!this._startContentRuntimeContainer)
                        throw new Error;
                    this._divertToStartContentInner.targetPath = this._startContentRuntimeContainer.path
                }
                p(o(r.prototype), "ResolveReferences", this).call(this, t),
                this.identifier && ((null === (e = this.identifier) || void 0 === e ? void 0 : e.name) || "").length > 0 && t.CheckForNamingCollisions(this, this.identifier, ft.SubFlowAndWeave)
            }
        }]),
        r
    }(F)
      , gt = i((function t() {
        var e = this;
        n(this, t),
        this.characterIndex = 0,
        this.characterInLineIndex = 0,
        this.lineIndex = 0,
        this.reportedErrorInScope = !1,
        this.uniqueId = 0,
        this.customFlags = 0,
        this.CopyFrom = function(n) {
            t._uniqueIdCounter++,
            e.uniqueId = t._uniqueIdCounter,
            e.characterIndex = n.characterIndex,
            e.characterInLineIndex = n.characterInLineIndex,
            e.lineIndex = n.lineIndex,
            e.customFlags = n.customFlags,
            e.reportedErrorInScope = !1
        }
        ,
        this.SquashFrom = function(t) {
            e.characterIndex = t.characterIndex,
            e.characterInLineIndex = t.characterInLineIndex,
            e.lineIndex = t.lineIndex,
            e.reportedErrorInScope = t.reportedErrorInScope,
            e.customFlags = t.customFlags
        }
    }
    ));
    gt._uniqueIdCounter = 1e3;
    var yt = function() {
        function t() {
            var e = this;
            n(this, t),
            this._stack = [],
            this._numElements = 0,
            this.StringParserState = function() {
                e._stack = new Array(200);
                for (var t = 0; t < 200; ++t)
                    e._stack[t] = new gt;
                e._numElements = 1
            }
            ,
            this.Push = function() {
                if (e._numElements >= e._stack.length && e._numElements > 0)
                    throw new Error("Stack overflow in parser state.");
                var t = e._stack[e._numElements - 1]
                  , n = e._stack[e._numElements];
                return e._numElements++,
                n.CopyFrom(t),
                n.uniqueId
            }
            ,
            this.Pop = function(t) {
                if (1 == e._numElements)
                    throw new Error("Attempting to remove final stack element is illegal! Mismatched Begin/Succceed/Fail?");
                if (e.currentElement.uniqueId != t)
                    throw new Error("Mismatched rule IDs while Poping - do you have mismatched Begin/Succeed/Fail?");
                e._numElements -= 1
            }
            ,
            this.Peek = function(t) {
                if (e.currentElement.uniqueId != t)
                    throw new Error("Mismatched rule IDs while Peeking - do you have mismatched Begin/Succeed/Fail?");
                return e._stack[e._numElements - 1]
            }
            ,
            this.PeekPenultimate = function() {
                return e._numElements >= 2 ? e._stack[e._numElements - 2] : null
            }
            ,
            this.Squash = function() {
                if (e._numElements < 2)
                    throw new Error("Attempting to remove final stack element is illegal! Mismatched Begin/Succceed/Fail?");
                var t = e._stack[e._numElements - 2]
                  , n = e._stack[e._numElements - 1];
                t.SquashFrom(n),
                e._numElements -= 1
            }
            ,
            this.NoteErrorReported = function() {
                var t, n = S(e._stack);
                try {
                    for (n.s(); !(t = n.n()).done; ) {
                        t.value.reportedErrorInScope = !0
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
            }
            ;
            for (var r = 0; r < 200; r++)
                this._stack[r] = new gt;
            this._numElements = 1
        }
        return i(t, [{
            key: "currentElement",
            get: function() {
                return this._stack[this._numElements - 1]
            }
        }, {
            key: "lineIndex",
            get: function() {
                return this.currentElement.lineIndex
            },
            set: function(t) {
                this.currentElement.lineIndex = t
            }
        }, {
            key: "characterIndex",
            get: function() {
                return this.currentElement.characterIndex
            },
            set: function(t) {
                this.currentElement.characterIndex = t
            }
        }, {
            key: "characterInLineIndex",
            get: function() {
                return this.currentElement.characterInLineIndex
            },
            set: function(t) {
                this.currentElement.characterInLineIndex = t
            }
        }, {
            key: "customFlags",
            get: function() {
                return this.currentElement.customFlags
            },
            set: function(t) {
                this.currentElement.customFlags = t
            }
        }, {
            key: "errorReportedAlreadyInScope",
            get: function() {
                return this.currentElement.reportedErrorInScope
            }
        }, {
            key: "stackHeight",
            get: function() {
                return this._numElements
            }
        }]),
        t
    }()
      , Ct = Symbol("ParseSuccessStruct")
      , St = function() {
        function t(e) {
            var r = this;
            n(this, t),
            this.ParseRule = null,
            this.errorHandler = null,
            this.hadError = !1,
            this.BeginRule = function() {
                return r.state.Push()
            }
            ,
            this.FailRule = function(t) {
                return r.state.Pop(t),
                null
            }
            ,
            this.CancelRule = function(t) {
                r.state.Pop(t)
            }
            ,
            this.SucceedRule = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , i = r.state.Peek(e)
                  , a = r.state.PeekPenultimate();
                r.RuleDidSucceed && r.RuleDidSucceed(n, a, i),
                r.state.Squash();
                var o = n;
                return null === o && (o = t.ParseSuccess),
                o
            }
            ,
            this.Expect = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                  , i = r.ParseObject(t);
                if (null === i) {
                    var a;
                    null === e && (e = t.name);
                    var o = r.LineRemainder();
                    a = null === o || 0 === o.length ? "end of line" : "'".concat(o, "'"),
                    r.Error("Expected ".concat(e, " but saw ").concat(a)),
                    null !== n && (i = n())
                }
                return i
            }
            ,
            this.Error = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                r.ErrorOnLine(t, r.lineIndex + 1, e)
            }
            ,
            this.ErrorWithParsedObject = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                r.ErrorOnLine(t, e.debugMetadata ? e.debugMetadata.startLineNumber : -1, n)
            }
            ,
            this.ErrorOnLine = function(t, e, n) {
                if (!r.state.errorReportedAlreadyInScope) {
                    var i = n ? "Warning" : "Error";
                    if (!r.errorHandler)
                        throw new Error("".concat(i, " on line ").concat(e, ": ").concat(t));
                    r.errorHandler(t, r.index, e - 1, n),
                    r.state.NoteErrorReported()
                }
                n || (r.hadError = !0)
            }
            ,
            this.Warning = function(t) {
                return r.Error(t, !0)
            }
            ,
            this.LineRemainder = function() {
                return r.Peek((function() {
                    return r.ParseUntilCharactersFromString("\n\r")
                }
                ))
            }
            ,
            this.SetFlag = function(t, e) {
                e ? r.state.customFlags |= t : r.state.customFlags &= ~t
            }
            ,
            this.GetFlag = function(t) {
                return Boolean(r.state.customFlags & t)
            }
            ,
            this.ParseObject = function(t) {
                var e = r.BeginRule()
                  , n = r.state.stackHeight
                  , i = t();
                if (n !== r.state.stackHeight)
                    throw new Error("Mismatched Begin/Fail/Succeed rules");
                return null === i ? r.FailRule(e) : (r.SucceedRule(e, i),
                i)
            }
            ,
            this.Parse = function(t) {
                var e = r.BeginRule()
                  , n = t();
                return null === n ? (r.FailRule(e),
                null) : (r.SucceedRule(e, n),
                n)
            }
            ,
            this.OneOf = function(t) {
                var e, n = S(t);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var i = e.value
                          , a = r.ParseObject(i);
                        if (null !== a)
                            return a
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                return null
            }
            ,
            this.OneOrMore = function(t) {
                var e = []
                  , n = null;
                do {
                    null !== (n = r.ParseObject(t)) && e.push(n)
                } while (null !== n);
                return e.length > 0 ? e : null
            }
            ,
            this.Optional = function(e) {
                return function() {
                    var n = r.ParseObject(e);
                    return null === n ? t.ParseSuccess : n
                }
            }
            ,
            this.Exclude = function(e) {
                return function() {
                    return r.ParseObject(e) && t.ParseSuccess
                }
            }
            ,
            this.OptionalExclude = function(e) {
                return function() {
                    return r.ParseObject(e),
                    t.ParseSuccess
                }
            }
            ,
            this.String = function(t) {
                return function() {
                    return r.ParseString(t)
                }
            }
            ,
            this.TryAddResultToList = function(e, n) {
                var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (e !== t.ParseSuccess) {
                    if (r && Array.isArray(e)) {
                        var i = e;
                        if (null !== i) {
                            var a, o = S(i);
                            try {
                                for (o.s(); !(a = o.n()).done; ) {
                                    var s = a.value;
                                    n.push(s)
                                }
                            } catch (t) {
                                o.e(t)
                            } finally {
                                o.f()
                            }
                            return
                        }
                    }
                    n.push(e)
                }
            }
            ,
            this.Interleave = function(e, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                  , a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
                  , o = r.BeginRule()
                  , s = []
                  , l = r.ParseObject(e);
                if (null === l)
                    return r.FailRule(o);
                r.TryAddResultToList(l, s, a);
                var u = null
                  , c = null;
                do {
                    if (null !== i && null !== r.Peek(i))
                        break;
                    if (null === (u = r.ParseObject(n)))
                        break;
                    if (r.TryAddResultToList(u, s, a),
                    c = null,
                    null !== u) {
                        if (null === (c = r.ParseObject(e)))
                            break;
                        r.TryAddResultToList(c, s, a)
                    }
                } while ((null !== u || null !== c) && (u !== t.ParseSuccess || c != t.ParseSuccess) && r.remainingLength > 0);
                return 0 === s.length ? r.FailRule(o) : r.SucceedRule(o, s)
            }
            ,
            this.ParseString = function(t) {
                if (t.length > r.remainingLength)
                    return null;
                for (var e = r.BeginRule(), n = r.index, i = r.characterInLineIndex, a = r.lineIndex, o = !0, s = 0; s < t.length; s += 1) {
                    var l = t[s];
                    if (r._chars[n] !== l) {
                        o = !1;
                        break
                    }
                    "\n" === l && (a++,
                    i = -1),
                    n++,
                    i++
                }
                return r.index = n,
                r.characterInLineIndex = i,
                r.lineIndex = a,
                o ? r.SucceedRule(e, t) : r.FailRule(e)
            }
            ,
            this.ParseSingleCharacter = function() {
                if (r.remainingLength > 0) {
                    var t = r._chars[r.index];
                    return "\n" === t && (r.lineIndex += 1,
                    r.characterInLineIndex = -1),
                    r.index += 1,
                    r.characterInLineIndex += 1,
                    t
                }
                return "0"
            }
            ,
            this.ParseUntilCharactersFromString = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                return r.ParseCharactersFromString(t, !1, e)
            }
            ,
            this.ParseUntilCharactersFromCharSet = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                return r.ParseCharactersFromCharSet(t, !1, e)
            }
            ,
            this.ParseCharactersFromString = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1
                  , i = new lt(t);
                return "number" == typeof e ? r.ParseCharactersFromCharSet(i, !0, e) : r.ParseCharactersFromCharSet(i, e, n)
            }
            ,
            this.ParseCharactersFromCharSet = function(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                -1 === n && (n = Number.MAX_SAFE_INTEGER);
                for (var i = r.index, a = r.index, o = r.characterInLineIndex, s = r.lineIndex, l = 0; a < r._chars.length && t.set.has(r._chars[a]) === e && l < n; )
                    "\n" === r._chars[a] && (s += 1,
                    o = -1),
                    a += 1,
                    o += 1,
                    l += 1;
                r.index = a,
                r.characterInLineIndex = o,
                r.lineIndex = s;
                var u = r.index;
                return u > i ? r._chars.slice(i, r.index).join("") : null
            }
            ,
            this.Peek = function(t) {
                var e = r.BeginRule()
                  , n = t();
                return r.CancelRule(e),
                n
            }
            ,
            this.ParseInt = function() {
                var e = r.index
                  , n = r.characterInLineIndex
                  , i = null !== r.ParseString("-");
                r.ParseCharactersFromString(" \t");
                var a, o = r.ParseCharactersFromCharSet(t.numbersCharacterSet);
                return null === o ? (r.index = e,
                r.characterInLineIndex = n,
                null) : Number.isNaN(Number(o)) ? (r.Error("Failed to read integer value: " + o + ". Perhaps it's out of the range of acceptable numbers ink supports? (" + Number.MIN_SAFE_INTEGER + " to " + Number.MAX_SAFE_INTEGER + ")"),
                null) : (a = Number(o),
                i ? -a : a)
            }
            ,
            this.ParseFloat = function() {
                var e = r.index
                  , n = r.characterInLineIndex
                  , i = r.ParseInt();
                if (null !== i && null !== r.ParseString(".")) {
                    var a = r.ParseCharactersFromCharSet(t.numbersCharacterSet);
                    return Number("".concat(i, ".").concat(a))
                }
                return r.index = e,
                r.characterInLineIndex = n,
                null
            }
            ,
            this.ParseNewline = function() {
                var t = r.BeginRule();
                return r.ParseString("\r"),
                null === r.ParseString("\n") ? r.FailRule(t) : r.SucceedRule(t, "\n")
            }
            ;
            var i = this.PreProcessInputString(e);
            this.state = new yt,
            this._chars = e ? i.split("") : [],
            this.inputString = i
        }
        return i(t, [{
            key: "currentCharacter",
            get: function() {
                return this.index >= 0 && this.remainingLength > 0 ? this._chars[this.index] : "0"
            }
        }, {
            key: "PreProcessInputString",
            value: function(t) {
                return t
            }
        }, {
            key: "endOfInput",
            get: function() {
                return this.index >= this._chars.length
            }
        }, {
            key: "remainingString",
            get: function() {
                return this._chars.slice(this.index, this.index + this.remainingLength).join("")
            }
        }, {
            key: "remainingLength",
            get: function() {
                return this._chars.length - this.index
            }
        }, {
            key: "lineIndex",
            get: function() {
                return this.state.lineIndex
            },
            set: function(t) {
                this.state.lineIndex = t
            }
        }, {
            key: "characterInLineIndex",
            get: function() {
                return this.state.characterInLineIndex
            },
            set: function(t) {
                this.state.characterInLineIndex = t
            }
        }, {
            key: "index",
            get: function() {
                return this.state.characterIndex
            },
            set: function(t) {
                this.state.characterIndex = t
            }
        }, {
            key: "ParseUntil",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                  , r = this.BeginRule()
                  , i = new lt;
                null !== e && (i.set = new Set([].concat(g(i.set.values()), g(e.set.values())))),
                null !== n && (i.set = new Set([].concat(g(i.set.values()), g(n.set.values()))));
                for (var a = ""; ; ) {
                    var o = this.ParseUntilCharactersFromCharSet(i);
                    if (o && (a += o),
                    null !== this.Peek(t))
                        break;
                    if (this.endOfInput)
                        break;
                    var s = this.currentCharacter;
                    if (null === e || !e.set.has(s))
                        break;
                    a += s,
                    "\n" === s && (this.lineIndex += 1,
                    this.characterInLineIndex = -1),
                    this.index += 1,
                    this.characterInLineIndex += 1
                }
                return a.length > 0 ? this.SucceedRule(r, String(a)) : this.FailRule(r)
            }
        }]),
        t
    }();
    St.ParseSuccess = Ct,
    St.numbersCharacterSet = new lt("0123456789");
    var bt, wt = function(t) {
        a(r, t);
        var e = d(r);
        function r() {
            var t;
            return n(this, r),
            (t = e.apply(this, arguments))._commentOrNewlineStartCharacter = new lt("/\r\n"),
            t._commentBlockEndCharacter = new lt("*"),
            t._newlineCharacters = new lt("\n\r"),
            t.Process = function() {
                var e = t.Interleave(t.Optional(t.CommentsAndNewlines), t.Optional(t.MainInk));
                return null !== e ? e.join("") : ""
            }
            ,
            t.MainInk = function() {
                return t.ParseUntil(t.CommentsAndNewlines, t._commentOrNewlineStartCharacter, null)
            }
            ,
            t.CommentsAndNewlines = function() {
                var e = t.Interleave(t.Optional(t.ParseNewline), t.Optional(t.ParseSingleComment));
                return null !== e ? e.join("") : null
            }
            ,
            t.ParseSingleComment = function() {
                return t.OneOf([t.EndOfLineComment, t.BlockComment])
            }
            ,
            t.EndOfLineComment = function() {
                return null === t.ParseString("//") ? null : (t.ParseUntilCharactersFromCharSet(t._newlineCharacters),
                "")
            }
            ,
            t.BlockComment = function() {
                if (null === t.ParseString("/*"))
                    return null;
                var e = t.lineIndex
                  , n = t.ParseUntil(t.String("*/"), t._commentBlockEndCharacter, null);
                return t.endOfInput || t.ParseString("*/"),
                null != n ? "\n".repeat(t.lineIndex - e) : null
            }
            ,
            t
        }
        return i(r, [{
            key: "PreProcessInputString",
            value: function(t) {
                return t
            }
        }]),
        r
    }(St), kt = function(t) {
        a(r, t);
        var e = d(r);
        function r(t, i) {
            var a;
            return n(this, r),
            (a = e.call(this)).initialCondition = t,
            a.branches = i,
            a._reJoinTarget = null,
            a.GenerateRuntimeObject = function() {
                var t = new tt;
                a.initialCondition && t.AddContent(a.initialCondition.runtimeObject);
                var e, n = S(a.branches);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var r = e.value.runtimeObject;
                        t.AddContent(r)
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                return null === a.initialCondition || null === a.branches[0].ownExpression || a.branches[a.branches.length - 1].isElse || t.AddContent(et.PopEvaluatedValue()),
                a._reJoinTarget = et.NoOp(),
                t.AddContent(a._reJoinTarget),
                t
            }
            ,
            a.initialCondition && a.AddContent(a.initialCondition),
            null !== a.branches && a.AddContent(a.branches),
            a
        }
        return i(r, [{
            key: "typeName",
            get: function() {
                return "Conditional"
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                var e, n = this._reJoinTarget.path, i = S(this.branches);
                try {
                    for (i.s(); !(e = i.n()).done; ) {
                        var a = e.value;
                        if (!a.returnDivert)
                            throw new Error;
                        a.returnDivert.targetPath = n
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
                p(o(r.prototype), "ResolveReferences", this).call(this, t)
            }
        }]),
        r
    }(F), Et = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i;
            return n(this, r),
            (i = e.call(this)).text = t,
            i.GenerateRuntimeObject = function() {
                return new $(i.text)
            }
            ,
            i.toString = function() {
                return i.text
            }
            ,
            i
        }
        return i(r, [{
            key: "typeName",
            get: function() {
                return "Text"
            }
        }]),
        r
    }(F), _t = function(t) {
        a(r, t);
        var e = d(r);
        function r(t, i) {
            var a;
            return n(this, r),
            (a = e.call(this))._expression = null,
            a.GenerateRuntimeObject = function() {
                return null
            }
            ,
            a.constantIdentifier = t,
            i && (a._expression = a.AddContent(i)),
            a
        }
        return i(r, [{
            key: "constantName",
            get: function() {
                var t;
                return null === (t = this.constantIdentifier) || void 0 === t ? void 0 : t.name
            }
        }, {
            key: "expression",
            get: function() {
                if (!this._expression)
                    throw new Error;
                return this._expression
            }
        }, {
            key: "typeName",
            get: function() {
                return "CONST"
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                p(o(r.prototype), "ResolveReferences", this).call(this, t),
                t.CheckForNamingCollisions(this, this.constantIdentifier, ft.Var)
            }
        }]),
        r
    }(F);
    !function(t) {
        t[t.Story = 0] = "Story",
        t[t.Knot = 1] = "Knot",
        t[t.Stitch = 2] = "Stitch",
        t[t.WeavePoint = 3] = "WeavePoint"
    }(bt || (bt = {}));
    var Tt = function(t) {
        a(r, t);
        var e = d(r);
        function r(t, i) {
            var a;
            return n(this, r),
            (a = e.call(this)).indentationDepth = i,
            a.GenerateRuntimeObject = function() {
                var t = new tt;
                if (t.name = a.name,
                a.story.countAllVisits && (t.visitsShouldBeCounted = !0),
                t.countingAtStartOnly = !0,
                a.content) {
                    var e, n = S(a.content);
                    try {
                        for (n.s(); !(e = n.n()).done; ) {
                            var r = e.value;
                            t.AddContent(r.runtimeObject)
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                }
                return t
            }
            ,
            a.toString = function() {
                var t, e;
                return "- ".concat((null === (t = a.identifier) || void 0 === t ? void 0 : t.name) ? "(" + (null === (e = a.identifier) || void 0 === e ? void 0 : e.name) + ")" : "gather")
            }
            ,
            t && (a.identifier = t),
            a
        }
        return i(r, [{
            key: "name",
            get: function() {
                var t;
                return (null === (t = this.identifier) || void 0 === t ? void 0 : t.name) || null
            }
        }, {
            key: "runtimeContainer",
            get: function() {
                return this.runtimeObject
            }
        }, {
            key: "typeName",
            get: function() {
                return "Gather"
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                p(o(r.prototype), "ResolveReferences", this).call(this, t),
                this.identifier && (this.identifier.name || "").length > 0 && t.CheckForNamingCollisions(this, this.identifier, ft.SubFlowAndWeave)
            }
        }]),
        r
    }(F)
      , At = function() {
        function t(e, r) {
            var i = this;
            n(this, t),
            this._dotSeparatedComponents = null,
            this.toString = function() {
                return null === i.components || 0 === i.components.length ? i.baseTargetLevel === bt.WeavePoint ? "-> <next gather point>" : "<invalid Path>" : "-> ".concat(i.dotSeparatedComponents)
            }
            ,
            this.ResolveFromContext = function(t) {
                if (null == i.components || 0 == i.components.length)
                    return null;
                var e = i.ResolveBaseTarget(t);
                return null === e ? null : i.components.length > 1 ? i.ResolveTailComponents(e) : e
            }
            ,
            this.ResolveBaseTarget = function(t) {
                for (var e = i.firstComponent, n = t; n; ) {
                    var r = n === t
                      , a = i.GetChildFromContext(n, e, null, r);
                    if (a)
                        return a;
                    n = n.parent
                }
                return null
            }
            ,
            this.ResolveTailComponents = function(t) {
                var e = t;
                if (!i.components)
                    return null;
                for (var n = 1; n < i.components.length; ++n) {
                    var r = i.components[n].name
                      , a = void 0
                      , o = _(e, Ot);
                    if (a = null !== o ? o.flowLevel + 1 : bt.WeavePoint,
                    null === (e = i.GetChildFromContext(e, r, a)))
                        break
                }
                return e
            }
            ,
            this.GetChildFromContext = function(t, e, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                  , i = null === n
                  , a = _(t, zt);
                if (e && null !== a && (i || n === bt.WeavePoint))
                    return a.WeavePointNamed(e);
                var o = _(t, Ot);
                if (e && null !== o) {
                    var s = r || o.flowLevel === bt.Knot;
                    return o.ContentWithNameAtLevel(e, n, s)
                }
                return null
            }
            ,
            Object.values(bt).includes(e) ? (this._baseTargetLevel = e,
            this.components = r || []) : Array.isArray(e) ? (this._baseTargetLevel = null,
            this.components = e || []) : (this._baseTargetLevel = null,
            this.components = [e])
        }
        return i(t, [{
            key: "baseTargetLevel",
            get: function() {
                return this.baseLevelIsAmbiguous ? bt.Story : this._baseTargetLevel
            }
        }, {
            key: "baseLevelIsAmbiguous",
            get: function() {
                return !this._baseTargetLevel
            }
        }, {
            key: "firstComponent",
            get: function() {
                return null != this.components && this.components.length ? this.components[0].name : null
            }
        }, {
            key: "numberOfComponents",
            get: function() {
                return this.components ? this.components.length : 0
            }
        }, {
            key: "dotSeparatedComponents",
            get: function() {
                return null == this._dotSeparatedComponents && (this._dotSeparatedComponents = (this.components ? this.components : []).map((function(t) {
                    return t.name
                }
                )).filter(O).join(".")),
                this._dotSeparatedComponents
            }
        }, {
            key: "typeName",
            get: function() {
                return "Path"
            }
        }]),
        t
    }()
      , Pt = function(t) {
        a(r, t);
        var e = d(r);
        function r() {
            var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return n(this, r),
            (t = e.call(this)).returnedExpression = null,
            t.GenerateRuntimeObject = function() {
                var e = new tt;
                return t.returnedExpression ? e.AddContent(t.returnedExpression.runtimeObject) : (e.AddContent(et.EvalStart()),
                e.AddContent(new rt),
                e.AddContent(et.EvalEnd())),
                e.AddContent(et.PopFunction()),
                e
            }
            ,
            i && (t.returnedExpression = t.AddContent(i)),
            t
        }
        return i(r, [{
            key: "typeName",
            get: function() {
                return "ReturnType"
            }
        }]),
        r
    }(F);
    function Nt(t) {
        for (var e = t.parent; e; ) {
            if (e.hasOwnProperty("iamFlowbase") && e.iamFlowbase())
                return e;
            e = e.parent
        }
        return null
    }
    var xt = function() {
        function t(e) {
            var r = this;
            n(this, t),
            this.debugMetadata = null,
            this.toString = function() {
                return r.name || "undefined identifer"
            }
            ,
            this.name = e
        }
        return i(t, [{
            key: "typeName",
            get: function() {
                return "Identifier"
            }
        }], [{
            key: "Done",
            value: function() {
                return new t("DONE")
            }
        }]),
        t
    }()
      , Ot = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return n(this, r),
            (i = e.call(this)).isFunction = s,
            i._rootWeave = null,
            i._subFlowsByName = new Map,
            i._startingSubFlowDivert = null,
            i._startingSubFlowRuntime = null,
            i._firstChildFlow = null,
            i.variableDeclarations = new Map,
            i.identifier = null,
            i.args = null,
            i.iamFlowbase = function() {
                return !0
            }
            ,
            i.SplitWeaveAndSubFlowContent = function(t, e) {
                var n, a, o = [], s = [];
                i._subFlowsByName = new Map;
                var l, u = S(t);
                try {
                    for (u.s(); !(l = u.n()).done; ) {
                        var c = l.value
                          , h = _(c, r);
                        h ? (null === i._firstChildFlow && (i._firstChildFlow = h),
                        s.push(c),
                        (null === (n = h.identifier) || void 0 === n ? void 0 : n.name) && i._subFlowsByName.set(null === (a = h.identifier) || void 0 === a ? void 0 : a.name, h)) : o.push(c)
                    }
                } catch (t) {
                    u.e(t)
                } finally {
                    u.f()
                }
                e && o.push(new Tt(null,1), new jt(new At(xt.Done())));
                var f = [];
                return o.length > 0 && (i._rootWeave = new zt(o,0),
                f.push(i._rootWeave)),
                s.length > 0 && f.push.apply(f, s),
                f
            }
            ,
            i.ResolveVariableWithName = function(t, e) {
                var n, r = {}, a = null === e ? h(i) : Nt(e);
                if (a) {
                    if (null !== a.args) {
                        var o, s = S(a.args);
                        try {
                            for (s.s(); !(o = s.n()).done; ) {
                                if ((null === (n = o.value.identifier) || void 0 === n ? void 0 : n.name) === t)
                                    return r.found = !0,
                                    r.isArgument = !0,
                                    r.ownerFlow = a,
                                    r
                            }
                        } catch (t) {
                            s.e(t)
                        } finally {
                            s.f()
                        }
                    }
                    if (a !== i.story && a.variableDeclarations.has(t))
                        return r.found = !0,
                        r.ownerFlow = a,
                        r.isTemporary = !0,
                        r
                }
                return i.story.variableDeclarations.has(t) ? (r.found = !0,
                r.ownerFlow = i.story,
                r.isGlobal = !0,
                r) : (r.found = !1,
                r)
            }
            ,
            i.AddNewVariableDeclaration = function(t) {
                var e = t.variableName;
                if (i.variableDeclarations.has(e)) {
                    var n = i.variableDeclarations.get(e)
                      , r = "";
                    return n.debugMetadata && (r = " (".concat(n.debugMetadata, ")")),
                    void i.Error("found declaration variable '".concat(e, "' that was already declared").concat(r), t, !1)
                }
                i.variableDeclarations.set(t.variableName, t)
            }
            ,
            i.ResolveWeavePointNaming = function() {
                i._rootWeave && i._rootWeave.ResolveWeavePointNaming();
                var t, e = S(i._subFlowsByName);
                try {
                    for (e.s(); !(t = e.n()).done; ) {
                        var n = m(t.value, 2)[1];
                        n.hasOwnProperty("ResolveWeavePointNaming") && n.ResolveWeavePointNaming()
                    }
                } catch (t) {
                    e.e(t)
                } finally {
                    e.f()
                }
            }
            ,
            i.GenerateRuntimeObject = function() {
                var t, e = null;
                i.isFunction ? i.CheckForDisallowedFunctionFlowControl() : i.flowLevel !== bt.Knot && i.flowLevel !== bt.Stitch || null !== (e = i.Find(Pt)()) && i.Error("Return statements can only be used in knots that are declared as functions: == function ".concat(i.identifier, " =="), e);
                var n = new tt;
                n.name = null === (t = i.identifier) || void 0 === t ? void 0 : t.name,
                i.story.countAllVisits && (n.visitsShouldBeCounted = !0),
                i.GenerateArgumentVariableAssignments(n);
                for (var a = 0; null !== i.content && a < i.content.length; ) {
                    var o = i.content[a];
                    if (o instanceof r) {
                        var s = o
                          , l = s.runtimeObject;
                        0 !== a || s.hasParameters || i.flowLevel !== bt.Knot || (i._startingSubFlowDivert = new vt,
                        n.AddContent(i._startingSubFlowDivert),
                        i._startingSubFlowRuntime = l);
                        var u = l
                          , c = n.namedContent.get(u.name) || null;
                        if (c) {
                            var h = "".concat(i.GetType(), " already contains flow named '").concat(u.name, "' (at ").concat(c.debugMetadata, ")");
                            i.Error(h, s)
                        }
                        n.AddToNamedContentOnly(u)
                    } else
                        o && n.AddContent(o.runtimeObject);
                    a += 1
                }
                return i.flowLevel === bt.Story || i.isFunction || null === i._rootWeave || null !== e || i._rootWeave.ValidateTermination(i.WarningInTermination),
                n
            }
            ,
            i.GenerateArgumentVariableAssignments = function(t) {
                var e;
                if (null !== i.args && 0 !== i.args.length)
                    for (var n = i.args.length - 1; n >= 0; --n) {
                        var r = (null === (e = i.args[n].identifier) || void 0 === e ? void 0 : e.name) || null
                          , a = new pt(r,!0);
                        t.AddContent(a)
                    }
            }
            ,
            i.ContentWithNameAtLevel = function(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if ((n === i.flowLevel || null === n) && t === (null === (e = i.identifier) || void 0 === e ? void 0 : e.name))
                    return h(i);
                if (n === bt.WeavePoint || null === n) {
                    var a = null;
                    if (i._rootWeave && (a = i._rootWeave.WeavePointNamed(t)))
                        return a;
                    if (n === bt.WeavePoint)
                        return r ? i.DeepSearchForAnyLevelContent(t) : null
                }
                if (null !== n && n < i.flowLevel)
                    return null;
                var o = i._subFlowsByName.get(t) || null;
                return !o || null !== n && n !== o.flowLevel ? r ? i.DeepSearchForAnyLevelContent(t) : null : o
            }
            ,
            i.DeepSearchForAnyLevelContent = function(t) {
                var e = i.ContentWithNameAtLevel(t, bt.WeavePoint, !1);
                if (e)
                    return e;
                var n, r = S(i._subFlowsByName);
                try {
                    for (r.s(); !(n = r.n()).done; ) {
                        var a = m(n.value, 2)[1].ContentWithNameAtLevel(t, null, !0);
                        if (a)
                            return a
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                return null
            }
            ,
            i.CheckForDisallowedFunctionFlowControl = function() {
                i.flowLevel !== bt.Knot && i.Error("Functions cannot be stitches - i.e. they should be defined as '== function myFunc ==' rather than internal to another knot.");
                var t, e = S(i._subFlowsByName);
                try {
                    for (e.s(); !(t = e.n()).done; ) {
                        var n = m(t.value, 2)
                          , r = n[0]
                          , a = n[1];
                        i.Error("Functions may not contain stitches, but saw '".concat(r, "' within the function '").concat(i.identifier, "'"), a)
                    }
                } catch (t) {
                    e.e(t)
                } finally {
                    e.f()
                }
                if (!i._rootWeave)
                    throw new Error;
                var o, s = S(i._rootWeave.FindAll(jt)());
                try {
                    for (s.s(); !(o = s.n()).done; ) {
                        var l = o.value;
                        l.isFunctionCall || l.parent instanceof Vt || i.Error("Functions may not contain diverts, but saw '".concat(l, "'"), l)
                    }
                } catch (t) {
                    s.e(t)
                } finally {
                    s.f()
                }
                var u, c = S(i._rootWeave.FindAll(mt)());
                try {
                    for (c.s(); !(u = c.n()).done; ) {
                        var h = u.value;
                        i.Error("Functions may not contain choices, but saw '".concat(h, "'"), h)
                    }
                } catch (t) {
                    c.e(t)
                } finally {
                    c.f()
                }
            }
            ,
            i.WarningInTermination = function(t) {
                var e = "Apparent loose end exists where the flow runs out. Do you need a '-> DONE' statement, choice or divert?";
                t.parent === i._rootWeave && i._firstChildFlow && (e = "".concat(e, " Note that if you intend to enter '").concat(i._firstChildFlow.identifier, "' next, you need to divert to it explicitly."));
                var n = _(t, jt);
                n && n.isTunnel && (e += " When final tunnel to '".concat(n.target, " ->' returns it won't have anywhere to go.")),
                i.Warning(e, t)
            }
            ,
            i.toString = function() {
                return "".concat(i.typeName, " '").concat(i.identifier, "'")
            }
            ,
            i.identifier = t,
            i.args = o,
            null === a && (a = []),
            i.PreProcessTopLevelObjects(a),
            a = i.SplitWeaveAndSubFlowContent(a, "Story" == i.GetType() && !l),
            i.AddContent(a),
            i
        }
        return i(r, [{
            key: "hasParameters",
            get: function() {
                return null !== this.args && this.args.length > 0
            }
        }, {
            key: "subFlowsByName",
            get: function() {
                return this._subFlowsByName
            }
        }, {
            key: "typeName",
            get: function() {
                return this.isFunction ? "Function" : String(this.flowLevel)
            }
        }, {
            key: "name",
            get: function() {
                var t;
                return (null === (t = this.identifier) || void 0 === t ? void 0 : t.name) || null
            }
        }, {
            key: "PreProcessTopLevelObjects",
            value: function(t) {}
        }, {
            key: "ResolveReferences",
            value: function(t) {
                var e, n;
                if (this._startingSubFlowDivert) {
                    if (!this._startingSubFlowRuntime)
                        throw new Error;
                    this._startingSubFlowDivert.targetPath = this._startingSubFlowRuntime.path
                }
                if (p(o(r.prototype), "ResolveReferences", this).call(this, t),
                null !== this.args) {
                    var i, a = S(this.args);
                    try {
                        for (a.s(); !(i = a.n()).done; ) {
                            var s = i.value;
                            t.CheckForNamingCollisions(this, s.identifier, ft.Arg, "argument")
                        }
                    } catch (t) {
                        a.e(t)
                    } finally {
                        a.f()
                    }
                    for (var l = 0; l < this.args.length; l += 1)
                        for (var u = l + 1; u < this.args.length; u += 1)
                            (null === (e = this.args[l].identifier) || void 0 === e ? void 0 : e.name) == (null === (n = this.args[u].identifier) || void 0 === n ? void 0 : n.name) && this.Error("Multiple arguments with the same name: '".concat(this.args[l].identifier, "'"))
                }
                if (this.flowLevel !== bt.Story) {
                    var c = this.flowLevel === bt.Knot ? ft.Knot : ft.SubFlowAndWeave;
                    t.CheckForNamingCollisions(this, this.identifier, c)
                }
            }
        }]),
        r
    }(F)
      , It = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i;
            n(this, r),
            (i = e.call(this)).dontFlatten = !1,
            i.TrimTrailingWhitespace = function() {
                for (var t = i.content.length - 1; t >= 0; --t) {
                    var e = _(i.content[t], Et);
                    if (null === e)
                        break;
                    if (e.text = e.text.replace(new RegExp(/[ \t]/g), ""),
                    0 !== e.text.length)
                        break;
                    i.content.splice(t, 1)
                }
            }
            ,
            i.GenerateRuntimeObject = function() {
                var t = new tt;
                if (null !== i.content) {
                    var e, n = S(i.content);
                    try {
                        for (n.s(); !(e = n.n()).done; ) {
                            var r = e.value.runtimeObject;
                            r && t.AddContent(r)
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                }
                return i.dontFlatten && i.story.DontFlattenContainer(t),
                t
            }
            ,
            i.toString = function() {
                return "ContentList(".concat(i.content.join(", "), ")")
            }
            ,
            t && i.AddContent(t);
            for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
                o[s - 1] = arguments[s];
            return o && i.AddContent(o),
            i
        }
        return i(r, [{
            key: "runtimeContainer",
            get: function() {
                return this.runtimeObject
            }
        }, {
            key: "typeName",
            get: function() {
                return "ContentList"
            }
        }]),
        r
    }(F)
      , Ft = function(t) {
        a(r, t);
        var e = d(r);
        function r() {
            var t, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return n(this, r),
            (t = e.call(this)).pathForCount = null,
            t.name = i,
            t
        }
        return i(r, [{
            key: "containerForCount",
            get: function() {
                return null === this.pathForCount ? null : this.ResolvePath(this.pathForCount).container
            }
        }, {
            key: "pathStringForCount",
            get: function() {
                return null === this.pathForCount ? null : this.CompactPathString(this.pathForCount)
            },
            set: function(t) {
                this.pathForCount = null === t ? null : new R(t)
            }
        }, {
            key: "toString",
            value: function() {
                return null != this.name ? "var(" + this.name + ")" : "read_count(" + this.pathStringForCount + ")"
            }
        }]),
        r
    }(V)
      , Wt = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i;
            return n(this, r),
            (i = e.call(this)).pathIdentifiers = t,
            i._runtimeVarRef = null,
            i.isConstantReference = !1,
            i.isListItemReference = !1,
            i.GenerateIntoContainer = function(t) {
                var e = i.story.constants.get(i.name);
                if (e)
                    return e.GenerateConstantIntoContainer(t),
                    void (i.isConstantReference = !0);
                if (i._runtimeVarRef = new Ft(i.name),
                1 === i.path.length || 2 === i.path.length) {
                    var n = ""
                      , r = "";
                    1 === i.path.length ? n = i.path[0] : (r = i.path[0],
                    n = i.path[1]),
                    i.story.ResolveListItem(r, n, h(i)) && (i.isListItemReference = !0)
                }
                t.AddContent(i._runtimeVarRef)
            }
            ,
            i.toString = function() {
                return "{".concat(i.path.join("."), "}")
            }
            ,
            i
        }
        return i(r, [{
            key: "name",
            get: function() {
                return this.path.join(".")
            }
        }, {
            key: "path",
            get: function() {
                return this.pathIdentifiers.map((function(t) {
                    return t.name
                }
                )).filter(O)
            }
        }, {
            key: "identifier",
            get: function() {
                if (!this.pathIdentifiers || 0 == this.pathIdentifiers.length)
                    return null;
                var t = this.path.join(".");
                return new xt(t)
            }
        }, {
            key: "runtimeVarRef",
            get: function() {
                return this._runtimeVarRef
            }
        }, {
            key: "typeName",
            get: function() {
                return "ref"
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                if (p(o(r.prototype), "ResolveReferences", this).call(this, t),
                !this.isConstantReference && !this.isListItemReference) {
                    var e = new At(this.pathIdentifiers)
                      , n = e.ResolveFromContext(this);
                    if (n) {
                        if (!n.containerForCounting)
                            throw new Error;
                        if (n.containerForCounting.visitsShouldBeCounted = !0,
                        null === this._runtimeVarRef)
                            return;
                        this._runtimeVarRef.pathForCount = n.runtimePath,
                        this._runtimeVarRef.name = null;
                        var i = _(n, Ot);
                        i && i.isFunction && (this.parent instanceof zt || this.parent instanceof It || this.parent instanceof Ot) && this.Warning("'".concat(i.identifier, "' being used as read count rather than being called as function. Perhaps you intended to write ").concat(i.identifier, "()"))
                    } else {
                        if (this.path.length > 1) {
                            var a = "Could not find target for read count: ".concat(e);
                            return this.path.length <= 2 && (a += ", or couldn't find list item with the name ".concat(this.path.join(","))),
                            void this.Error(a)
                        }
                        t.ResolveVariableWithName(this.name, this).found || this.Error("Unresolved variable: ".concat(this.name), this)
                    }
                }
            }
        }]),
        r
    }(nt)
      , Rt = function(t) {
        a(r, t);
        var e = d(r);
        function r(t, i) {
            var a;
            return n(this, r),
            (a = e.call(this))._divertTargetToCount = null,
            a._variableReferenceToCount = null,
            a.shouldPopReturnedValue = !1,
            a.GenerateIntoContainer = function(t) {
                var e = a.story.ResolveList(a.name)
                  , n = !1;
                if (a.isChoiceCount)
                    a.args.length > 0 && a.Error("The CHOICE_COUNT() function shouldn't take any arguments"),
                    t.AddContent(et.ChoiceCount());
                else if (a.isTurns)
                    a.args.length > 0 && a.Error("The TURNS() function shouldn't take any arguments"),
                    t.AddContent(et.Turns());
                else if (a.isTurnsSince || a.isReadCount) {
                    var r = _(a.args[0], Vt)
                      , i = _(a.args[0], Wt);
                    if (1 !== a.args.length || null === r && null === i)
                        return void a.Error("The ".concat(a.name, "() function should take one argument: a divert target to the target knot, stitch, gather or choice you want to check. e.g. TURNS_SINCE(-> myKnot)"));
                    r ? (a._divertTargetToCount = r,
                    a.AddContent(a._divertTargetToCount),
                    a._divertTargetToCount.GenerateIntoContainer(t)) : i && (a._variableReferenceToCount = i,
                    a.AddContent(a._variableReferenceToCount),
                    a._variableReferenceToCount.GenerateIntoContainer(t)),
                    a.isTurnsSince ? t.AddContent(et.TurnsSince()) : t.AddContent(et.ReadCount())
                } else if (a.isRandom) {
                    2 !== a.args.length && a.Error("RANDOM should take 2 parameters: a minimum and a maximum integer");
                    for (var o = 0; o < a.args.length; o += 1) {
                        var s = _(a.args[o], at);
                        if (s && !s.isInt()) {
                            var l = 0 === o ? "minimum" : "maximum";
                            a.Error("RANDOM's ".concat(l, " parameter should be an integer"))
                        }
                        a.args[o].GenerateIntoContainer(t)
                    }
                    t.AddContent(et.Random())
                } else if (a.isSeedRandom) {
                    1 !== a.args.length && a.Error("SEED_RANDOM should take 1 parameter - an integer seed");
                    var u = _(a.args[0], at);
                    u && !u.isInt() && a.Error("SEED_RANDOM's parameter should be an integer seed"),
                    a.args[0].GenerateIntoContainer(t),
                    t.AddContent(et.SeedRandom())
                } else if (a.isListRange) {
                    3 !== a.args.length && a.Error("LIST_RANGE should take 3 parameters - a list, a min and a max");
                    for (var c = 0; c < a.args.length; c += 1)
                        a.args[c].GenerateIntoContainer(t);
                    t.AddContent(et.ListRange())
                } else if (a.isListRandom)
                    1 !== a.args.length && a.Error("LIST_RANDOM should take 1 parameter - a list"),
                    a.args[0].GenerateIntoContainer(t),
                    t.AddContent(et.ListRandom());
                else if (it.CallExistsWithName(a.name)) {
                    var h = it.CallWithName(a.name);
                    if (h.numberOfParameters !== a.args.length) {
                        var f = "".concat(name, " should take ").concat(h.numberOfParameters, " parameter");
                        h.numberOfParameters > 1 && (f += "s"),
                        a.Error(f)
                    }
                    for (var d = 0; d < a.args.length; d += 1)
                        a.args[d].GenerateIntoContainer(t);
                    t.AddContent(it.CallWithName(a.name))
                } else if (null !== e)
                    if (a.args.length > 1 && a.Error("Can currently only construct a list from one integer (or an empty list from a given list definition)"),
                    1 === a.args.length)
                        t.AddContent(new $(a.name)),
                        a.args[0].GenerateIntoContainer(t),
                        t.AddContent(et.ListFromInt());
                    else {
                        var v = new M;
                        v.SetInitialOriginName(a.name),
                        t.AddContent(new Z(v))
                    }
                else
                    t.AddContent(a._proxyDivert.runtimeObject),
                    n = !0;
                n || a.content.splice(a.content.indexOf(a._proxyDivert), 1),
                a.shouldPopReturnedValue && t.AddContent(et.PopEvaluatedValue())
            }
            ,
            a.toString = function() {
                var t = a.args.join(", ");
                return "".concat(a.name, "(").concat(t, ")")
            }
            ,
            a._proxyDivert = new jt(new At(t),i),
            a._proxyDivert.isFunctionCall = !0,
            a.AddContent(a._proxyDivert),
            a
        }
        return i(r, [{
            key: "proxyDivert",
            get: function() {
                return this._proxyDivert
            }
        }, {
            key: "name",
            get: function() {
                return this._proxyDivert.target.firstComponent || ""
            }
        }, {
            key: "args",
            get: function() {
                return this._proxyDivert.args
            }
        }, {
            key: "runtimeDivert",
            get: function() {
                return this._proxyDivert.runtimeDivert
            }
        }, {
            key: "isChoiceCount",
            get: function() {
                return "CHOICE_COUNT" === this.name
            }
        }, {
            key: "isTurns",
            get: function() {
                return "TURNS" === this.name
            }
        }, {
            key: "isTurnsSince",
            get: function() {
                return "TURNS_SINCE" === this.name
            }
        }, {
            key: "isRandom",
            get: function() {
                return "RANDOM" === this.name
            }
        }, {
            key: "isSeedRandom",
            get: function() {
                return "SEED_RANDOM" === this.name
            }
        }, {
            key: "isListRange",
            get: function() {
                return "LIST_RANGE" === this.name
            }
        }, {
            key: "isListRandom",
            get: function() {
                return "LIST_RANDOM" === this.name
            }
        }, {
            key: "isReadCount",
            get: function() {
                return "READ_COUNT" === this.name
            }
        }, {
            key: "typeName",
            get: function() {
                return "FunctionCall"
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                if (p(o(r.prototype), "ResolveReferences", this).call(this, t),
                !this.content.includes(this._proxyDivert) && null !== this.args) {
                    var e, n = S(this.args);
                    try {
                        for (n.s(); !(e = n.n()).done; ) {
                            e.value.ResolveReferences(t)
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                }
                if (this._divertTargetToCount) {
                    var i = this._divertTargetToCount.divert
                      , a = null != i.runtimeDivert.variableDivertName;
                    if (a)
                        return void this.Error("When getting the TURNS_SINCE() of a variable target, remove the '->' - i.e. it should just be TURNS_SINCE(".concat(i.runtimeDivert.variableDivertName, ")"));
                    var s = i.targetContent;
                    if (null === s)
                        a || this.Error("Failed to find target for TURNS_SINCE: '".concat(i.target, "'"));
                    else {
                        if (!s.containerForCounting)
                            throw new Error;
                        s.containerForCounting.turnIndexShouldBeCounted = !0
                    }
                } else if (this._variableReferenceToCount) {
                    var l = this._variableReferenceToCount.runtimeVarRef;
                    if (!l)
                        throw new Error;
                    null !== l.pathForCount && this.Error("Should be '".concat(name, "'(-> '").concat(this._variableReferenceToCount.name, "). Usage without the '->' only makes sense for variable targets."))
                }
            }
        }]),
        r
    }(nt);
    Rt.IsBuiltIn = function(t) {
        return !!it.CallExistsWithName(t) || ("CHOICE_COUNT" === t || "TURNS_SINCE" === t || "TURNS" === t || "RANDOM" === t || "SEED_RANDOM" === t || "LIST_VALUE" === t || "LIST_RANDOM" === t || "READ_COUNT" === t)
    }
    ;
    var Dt, Lt = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i;
            return n(this, r),
            (i = e.call(this)).GenerateIntoContainer = function(t) {
                var e, n = !0, r = S(i.subExpressions);
                try {
                    for (r.s(); !(e = r.n()).done; ) {
                        e.value.GenerateIntoContainer(t),
                        n || t.AddContent(it.CallWithName("&&")),
                        n = !1
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
            }
            ,
            i.AddContent(t),
            i
        }
        return i(r, [{
            key: "subExpressions",
            get: function() {
                return this.content
            }
        }, {
            key: "typeName",
            get: function() {
                return "MultipleConditionExpression"
            }
        }]),
        r
    }(nt), Vt = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i;
            return n(this, r),
            (i = e.call(this))._runtimeDivert = null,
            i._runtimeDivertTargetValue = null,
            i.GenerateIntoContainer = function(t) {
                i.divert.GenerateRuntimeObject(),
                i._runtimeDivert = i.divert.runtimeDivert,
                i._runtimeDivertTargetValue = new X,
                t.AddContent(i.runtimeDivertTargetValue)
            }
            ,
            i.Equals = function(t) {
                var e = _(t, r);
                return !!(e && i.divert.target && e.divert.target) && i.divert.target.dotSeparatedComponents === e.divert.target.dotSeparatedComponents
            }
            ,
            i.divert = i.AddContent(t),
            i
        }
        return i(r, [{
            key: "runtimeDivert",
            get: function() {
                if (!this._runtimeDivert)
                    throw new Error;
                return this._runtimeDivert
            }
        }, {
            key: "runtimeDivertTargetValue",
            get: function() {
                if (!this._runtimeDivertTargetValue)
                    throw new Error;
                return this._runtimeDivertTargetValue
            }
        }, {
            key: "typeName",
            get: function() {
                return "DivertTarget"
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                if (p(o(r.prototype), "ResolveReferences", this).call(this, t),
                this.divert.isDone || this.divert.isEnd)
                    this.Error("Can't use -> DONE or -> END as variable divert targets", this);
                else {
                    for (var e = this; e && e instanceof nt; ) {
                        var n = !1
                          , i = !1
                          , a = e.parent;
                        if (a instanceof st) {
                            var s = a;
                            "==" !== s.opName && "!=" !== s.opName ? n = !0 : (s.leftExpression instanceof r || s.leftExpression instanceof Wt) && (s.rightExpression instanceof r || s.rightExpression instanceof Wt) || (n = !0),
                            i = !0
                        } else if (a instanceof Rt) {
                            var l = a;
                            l.isTurnsSince || l.isReadCount || (n = !0),
                            i = !0
                        } else
                            (a instanceof nt || a instanceof Lt || a instanceof mt && a.condition === e || a instanceof kt || a instanceof $t) && (n = !0,
                            i = !0);
                        if (n && this.Error("Can't use a divert target like that. Did you intend to call '".concat(this.divert.target, "' as a function: likeThis(), or check the read count: likeThis, with no arrows?"), this),
                        i)
                            break;
                        e = a
                    }
                    if (this.runtimeDivert.hasVariableTarget) {
                        if (!this.divert.target)
                            throw new Error;
                        this.Error("Since '".concat(this.divert.target.dotSeparatedComponents, "' is a variable, it shouldn't be preceded by '->' here."))
                    }
                    this.runtimeDivert.targetPath && (this.runtimeDivertTargetValue.targetPath = this.runtimeDivert.targetPath);
                    var u = this.divert.targetContent;
                    if (null !== u) {
                        var c = u.containerForCounting;
                        if (null !== c) {
                            var h = _(this.parent, Rt);
                            h && h.isTurnsSince || (c.visitsShouldBeCounted = !0),
                            c.turnIndexShouldBeCounted = !0
                        }
                        var f = _(u, Ot);
                        if (null != f && null !== f.args) {
                            var d, v = S(f.args);
                            try {
                                for (v.s(); !(d = v.n()).done; ) {
                                    var m = d.value;
                                    m.isByReference && this.Error("Can't store a divert target to a knot or function that has by-reference arguments ('".concat(f.identifier, "' has 'ref ").concat(m.identifier, "')."))
                                }
                            } catch (t) {
                                v.e(t)
                            } finally {
                                v.f()
                            }
                        }
                    }
                }
            }
        }]),
        r
    }(nt), jt = function(t) {
        a(r, t);
        var e = d(r);
        function r(t, i) {
            var a;
            return n(this, r),
            (a = e.call(this)).args = [],
            a.target = null,
            a.targetContent = null,
            a._runtimeDivert = null,
            a.isFunctionCall = !1,
            a.isEmpty = !1,
            a.isTunnel = !1,
            a.isThread = !1,
            a.GenerateRuntimeObject = function() {
                if (a.isEnd)
                    return et.End();
                if (a.isDone)
                    return et.Done();
                a.runtimeDivert = new vt,
                a.ResolveTargetContent(),
                a.CheckArgumentValidity();
                var t = null !== a.args && a.args.length > 0;
                if (t || a.isFunctionCall || a.isTunnel || a.isThread) {
                    var e = new tt;
                    if (t) {
                        a.isFunctionCall || e.AddContent(et.EvalStart());
                        var n = null;
                        a.targetContent && (n = a.targetContent.args);
                        for (var r = 0; r < a.args.length; ++r) {
                            var i = a.args[r]
                              , o = null;
                            if (n && r < n.length && (o = n[r]),
                            o && o.isByReference) {
                                var s = _(i, Wt);
                                if (!s) {
                                    a.Error("Expected variable name to pass by reference to 'ref ".concat(o.identifier, "' but saw ").concat(i));
                                    break
                                }
                                var l = new At(s.pathIdentifiers);
                                if (l.ResolveFromContext(h(a))) {
                                    a.Error("can't pass a read count by reference. '".concat(l.dotSeparatedComponents, "' is a knot/stitch/label, but '").concat(a.target.dotSeparatedComponents, "' requires the name of a VAR to be passed."));
                                    break
                                }
                                var u = new Y(s.name);
                                e.AddContent(u)
                            } else
                                i.GenerateIntoContainer(e)
                        }
                        a.isFunctionCall || e.AddContent(et.EvalEnd())
                    }
                    return a.isThread ? e.AddContent(et.StartThread()) : (a.isFunctionCall || a.isTunnel) && (a.runtimeDivert.pushesToStack = !0,
                    a.runtimeDivert.stackPushType = a.isFunctionCall ? ct.Function : ct.Tunnel),
                    e.AddContent(a.runtimeDivert),
                    e
                }
                return a.runtimeDivert
            }
            ,
            a.PathAsVariableName = function() {
                return a.target ? a.target.firstComponent : null
            }
            ,
            a.ResolveTargetContent = function() {
                if (!a.isEmpty && !a.isEnd && null === a.targetContent) {
                    var t = a.PathAsVariableName();
                    if (null !== t) {
                        var e = _(Nt(h(a)), Ot);
                        if (e) {
                            var n = e.ResolveVariableWithName(t, h(a));
                            if (n.found) {
                                if (n.isArgument && n.ownerFlow && n.ownerFlow.args) {
                                    var r = n.ownerFlow.args.find((function(e) {
                                        var n;
                                        return (null === (n = e.identifier) || void 0 === n ? void 0 : n.name) == t
                                    }
                                    ));
                                    r && !r.isDivertTarget && a.Error("Since '".concat(r.identifier, "' is used as a variable divert target (on ").concat(a.debugMetadata, "), it should be marked as: -> ").concat(r.identifier), n.ownerFlow)
                                }
                                return void (a.runtimeDivert.variableDivertName = t)
                            }
                        }
                    }
                    if (!a.target)
                        throw new Error;
                    a.targetContent = a.target.ResolveFromContext(h(a))
                }
            }
            ,
            a.CheckArgumentValidity = function() {
                if (!a.isEmpty) {
                    var t = 0;
                    if (null !== a.args && a.args.length > 0 && (t = a.args.length),
                    null !== a.targetContent) {
                        var e = _(a.targetContent, Ot);
                        if (0 !== t || null !== e && e.hasParameters)
                            if (null === e && t > 0)
                                a.Error("target needs to be a knot or stitch in order to pass arguments");
                            else if (null !== e && (null === e.args || !e.args && t > 0))
                                a.Error("target (".concat(e.name, ") doesn't take parameters"));
                            else if (a.parent instanceof Vt)
                                t > 0 && a.Error("can't store arguments in a divert target variable");
                            else {
                                var n, r = e.args.length;
                                if (r !== t)
                                    return n = 0 === t ? "but there weren't any passed to it" : t < r ? "but only got ".concat(t) : "but got ".concat(t),
                                    void a.Error("to '".concat(e.identifier, "' requires ").concat(r, " arguments, ").concat(n));
                                for (var i = 0; i < r; ++i) {
                                    var o = e.args[i]
                                      , s = a.args[i];
                                    if (o.isDivertTarget) {
                                        var l = _(s, Wt);
                                        if (s instanceof Vt || null !== l) {
                                            if (l) {
                                                var u = new At(l.pathIdentifiers);
                                                u.ResolveFromContext(l) && a.Error("Passing read count of '".concat(u.dotSeparatedComponents, "' instead of a divert target. You probably meant '").concat(u, "'"))
                                            }
                                        } else
                                            a.Error("Target '".concat(e.identifier, "' expects a divert target for the parameter named -> ").concat(o.identifier, " but saw ").concat(s), s)
                                    }
                                }
                                null !== e || a.Error("Can't call as a function or with arguments unless it's a knot or stitch")
                            }
                    }
                }
            }
            ,
            a.CheckExternalArgumentValidity = function(t) {
                var e = a.target ? a.target.firstComponent : null
                  , n = t.externals.get(e);
                if (!n)
                    throw new Error("external not found");
                var r = n.argumentNames.length
                  , i = 0;
                a.args && (i = a.args.length),
                i !== r && a.Error("incorrect number of arguments sent to external function '".concat(e, "'. Expected ").concat(r, " but got ").concat(i))
            }
            ,
            a.toString = function() {
                var t = "";
                return null === a.target ? "-> <empty divert>" : (t += a.target.toString(),
                a.isTunnel && (t += " ->"),
                a.isFunctionCall && (t += " ()"),
                t)
            }
            ,
            t && (a.target = t),
            i && (a.args = i,
            a.AddContent(i)),
            a
        }
        return i(r, [{
            key: "runtimeDivert",
            get: function() {
                if (!this._runtimeDivert)
                    throw new Error;
                return this._runtimeDivert
            },
            set: function(t) {
                this._runtimeDivert = t
            }
        }, {
            key: "isEnd",
            get: function() {
                return Boolean(this.target && "END" === this.target.dotSeparatedComponents)
            }
        }, {
            key: "isDone",
            get: function() {
                return Boolean(this.target && "DONE" === this.target.dotSeparatedComponents)
            }
        }, {
            key: "typeName",
            get: function() {
                return "Divert"
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                if (!(this.isEmpty || this.isEnd || this.isDone)) {
                    if (!this.runtimeDivert)
                        throw new Error;
                    this.targetContent && (this.runtimeDivert.targetPath = this.targetContent.runtimePath),
                    p(o(r.prototype), "ResolveReferences", this).call(this, t);
                    var e = _(this.targetContent, Ot);
                    e && (!e.isFunction && this.isFunctionCall ? p(o(r.prototype), "Error", this).call(this, "".concat(e.identifier, " hasn't been marked as a function, but it's being called as one. Do you need to delcare the knot as '== function ").concat(e.identifier, " =='?")) : !e.isFunction || this.isFunctionCall || this.parent instanceof Vt || p(o(r.prototype), "Error", this).call(this, e.identifier + " can't be diverted to. It can only be called as a function since it's been marked as such: '" + e.identifier + "(...)'"));
                    var n = null !== this.targetContent
                      , i = !1
                      , a = !1;
                    if (!this.target)
                        throw new Error;
                    if (1 === this.target.numberOfComponents) {
                        if (!this.target.firstComponent)
                            throw new Error;
                        if (i = Rt.IsBuiltIn(this.target.firstComponent),
                        a = t.IsExternal(this.target.firstComponent),
                        i || a)
                            return this.isFunctionCall || p(o(r.prototype), "Error", this).call(this, "".concat(this.target.firstComponent, " must be called as a function: ~ ").concat(this.target.firstComponent, "()")),
                            void (a && (this.runtimeDivert.isExternal = !0,
                            null !== this.args && (this.runtimeDivert.externalArgs = this.args.length),
                            this.runtimeDivert.pushesToStack = !1,
                            this.runtimeDivert.targetPath = new R(this.target.firstComponent),
                            this.CheckExternalArgumentValidity(t)))
                    }
                    null == this.runtimeDivert.variableDivertName && (n || i || a || this.Error("target not found: '".concat(this.target, "'")))
                }
            }
        }, {
            key: "Error",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                e !== this && e ? p(o(r.prototype), "Error", this).call(this, t, e) : this.isFunctionCall ? p(o(r.prototype), "Error", this).call(this, "Function call ".concat(t), e, n) : p(o(r.prototype), "Error", this).call(this, "Divert ".concat(t), e, n)
            }
        }]),
        r
    }(F), Bt = i((function t(e, r) {
        n(this, t),
        this.divert = e,
        this.targetRuntimeObj = r
    }
    )), Mt = i((function t(e, r) {
        n(this, t),
        this.divert = e,
        this.targetContent = r
    }
    ));
    !function(t) {
        t[t.Stopping = 1] = "Stopping",
        t[t.Cycle = 2] = "Cycle",
        t[t.Shuffle = 4] = "Shuffle",
        t[t.Once = 8] = "Once"
    }(Dt || (Dt = {}));
    var Gt, qt = function(t) {
        a(r, t);
        var e = d(r);
        function r(t, i) {
            var a;
            n(this, r),
            (a = e.call(this)).sequenceType = i,
            a._sequenceDivertsToResolve = [],
            a.GenerateRuntimeObject = function() {
                var t = new tt;
                t.visitsShouldBeCounted = !0,
                t.countingAtStartOnly = !0,
                a._sequenceDivertsToResolve = [],
                t.AddContent(et.EvalStart()),
                t.AddContent(et.VisitIndex());
                var e = (a.sequenceType & Dt.Once) > 0
                  , n = (a.sequenceType & Dt.Cycle) > 0
                  , r = (a.sequenceType & Dt.Stopping) > 0
                  , i = (a.sequenceType & Dt.Shuffle) > 0
                  , o = a.sequenceElements.length;
                if (e && (o += 1),
                r || e ? (t.AddContent(new J(o - 1)),
                t.AddContent(it.CallWithName("MIN"))) : n && (t.AddContent(new J(a.sequenceElements.length)),
                t.AddContent(it.CallWithName("%"))),
                i) {
                    var s = et.NoOp();
                    if (e || r) {
                        var l = r ? a.sequenceElements.length - 1 : a.sequenceElements.length;
                        t.AddContent(et.Duplicate()),
                        t.AddContent(new J(l)),
                        t.AddContent(it.CallWithName("=="));
                        var u = new vt;
                        u.isConditional = !0,
                        t.AddContent(u),
                        a.AddDivertToResolve(u, s)
                    }
                    var c = a.sequenceElements.length;
                    r && (c -= 1),
                    t.AddContent(new J(c)),
                    t.AddContent(et.SequenceShuffleIndex()),
                    (e || r) && t.AddContent(s)
                }
                t.AddContent(et.EvalEnd());
                for (var h = et.NoOp(), f = 0; f < o; f += 1) {
                    t.AddContent(et.EvalStart()),
                    t.AddContent(et.Duplicate()),
                    t.AddContent(new J(f)),
                    t.AddContent(it.CallWithName("==")),
                    t.AddContent(et.EvalEnd());
                    var d = new vt;
                    d.isConditional = !0,
                    t.AddContent(d);
                    var v = void 0;
                    if (f < a.sequenceElements.length)
                        v = a.sequenceElements[f].runtimeObject;
                    else
                        v = new tt;
                    v.name = "s".concat(f),
                    v.InsertContent(et.PopEvaluatedValue(), 0);
                    var p = new vt;
                    v.AddContent(p),
                    t.AddToNamedContentOnly(v),
                    a.AddDivertToResolve(d, v),
                    a.AddDivertToResolve(p, h)
                }
                return t.AddContent(h),
                t
            }
            ,
            a.AddDivertToResolve = function(t, e) {
                a._sequenceDivertsToResolve.push(new Mt(t,e))
            }
            ,
            a.sequenceType = i,
            a.sequenceElements = [];
            var o, s = S(t);
            try {
                for (s.s(); !(o = s.n()).done; ) {
                    var l = o.value
                      , u = l.content
                      , c = null;
                    c = null === u || 0 === u.length ? l : new zt(u),
                    a.sequenceElements.push(c),
                    a.AddContent(c)
                }
            } catch (t) {
                s.e(t)
            } finally {
                s.f()
            }
            return a
        }
        return i(r, [{
            key: "typeName",
            get: function() {
                return "Sequence"
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                p(o(r.prototype), "ResolveReferences", this).call(this, t);
                var e, n = S(this._sequenceDivertsToResolve);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var i = e.value;
                        i.divert.targetPath = i.targetContent.path
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
            }
        }]),
        r
    }(F), Ut = function(t) {
        a(r, t);
        var e = d(r);
        function r() {
            var t;
            return n(this, r),
            (t = e.apply(this, arguments))._overrideDivertTarget = null,
            t._divertAfter = null,
            t.GenerateRuntimeObject = function() {
                var e = new tt;
                if (e.AddContent(et.EvalStart()),
                t.divertAfter) {
                    var n = t.divertAfter.GenerateRuntimeObject()
                      , r = n;
                    if (r) {
                        var i = t.divertAfter.args;
                        if (null !== i && i.length > 0) {
                            for (var a = -1, o = -1, s = 0; s < r.content.length; s += 1) {
                                var l = r.content[s];
                                l && (-1 == a && l.commandType === et.CommandType.EvalStart ? a = s : l.commandType === et.CommandType.EvalEnd && (o = s))
                            }
                            for (var u = a + 1; u < o; u += 1) {
                                r.content[u].parent = null,
                                e.AddContent(r.content[u])
                            }
                        }
                    }
                    var c = _(n, vt);
                    if (null != c && c.hasVariableTarget) {
                        var h = new Ft(c.variableDivertName);
                        e.AddContent(h)
                    } else
                        t._overrideDivertTarget = new X,
                        e.AddContent(t._overrideDivertTarget)
                } else
                    e.AddContent(new rt);
                return e.AddContent(et.EvalEnd()),
                e.AddContent(et.PopTunnel()),
                e
            }
            ,
            t.toString = function() {
                return " -> ".concat(t._divertAfter)
            }
            ,
            t
        }
        return i(r, [{
            key: "divertAfter",
            get: function() {
                return this._divertAfter
            },
            set: function(t) {
                this._divertAfter = t,
                this._divertAfter && this.AddContent(this._divertAfter)
            }
        }, {
            key: "typeName",
            get: function() {
                return "TunnelOnwards"
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                p(o(r.prototype), "ResolveReferences", this).call(this, t),
                this.divertAfter && this.divertAfter.targetContent && (this._overrideDivertTarget.targetPath = this.divertAfter.targetContent.runtimePath)
            }
        }]),
        r
    }(F), Kt = function() {
        function t(e, r) {
            n(this, t),
            this._name = e || "",
            this._items = null,
            this._itemNameToValues = r || new Map
        }
        return i(t, [{
            key: "name",
            get: function() {
                return this._name
            }
        }, {
            key: "items",
            get: function() {
                if (null == this._items) {
                    this._items = new Map;
                    var t, e = S(this._itemNameToValues);
                    try {
                        for (e.s(); !(t = e.n()).done; ) {
                            var n = m(t.value, 2)
                              , r = n[0]
                              , i = n[1]
                              , a = new B(this.name,r);
                            this._items.set(a.serialized(), i)
                        }
                    } catch (t) {
                        e.e(t)
                    } finally {
                        e.f()
                    }
                }
                return this._items
            }
        }, {
            key: "ValueForItem",
            value: function(t) {
                if (!t.itemName)
                    return 0;
                var e = this._itemNameToValues.get(t.itemName);
                return void 0 !== e ? e : 0
            }
        }, {
            key: "ContainsItem",
            value: function(t) {
                return !!t.itemName && (t.originName == this.name && this._itemNameToValues.has(t.itemName))
            }
        }, {
            key: "ContainsItemWithName",
            value: function(t) {
                return this._itemNameToValues.has(t)
            }
        }, {
            key: "TryGetItemWithValue",
            value: function(t, e) {
                var n, r = S(this._itemNameToValues);
                try {
                    for (r.s(); !(n = r.n()).done; ) {
                        var i = m(n.value, 2)
                          , a = i[0];
                        if (i[1] == t)
                            return {
                                result: new B(this.name,a),
                                exists: !0
                            }
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                return {
                    result: B.Null,
                    exists: !1
                }
            }
        }, {
            key: "TryGetValueForItem",
            value: function(t, e) {
                if (!t.itemName)
                    return {
                        result: 0,
                        exists: !1
                    };
                var n = this._itemNameToValues.get(t.itemName);
                return n ? {
                    result: n,
                    exists: !0
                } : {
                    result: 0,
                    exists: !1
                }
            }
        }]),
        t
    }(), Ht = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i;
            n(this, r),
            (i = e.call(this)).itemDefinitions = t,
            i.identifier = null,
            i.variableAssignment = null,
            i._elementsByName = null,
            i.ItemNamed = function(t) {
                if (null === i._elementsByName) {
                    i._elementsByName = new Map;
                    var e, n = S(i.itemDefinitions);
                    try {
                        for (n.s(); !(e = n.n()).done; ) {
                            var r = e.value;
                            i._elementsByName.set(r.name, r)
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                }
                return i._elementsByName.get(t) || null
            }
            ,
            i.GenerateRuntimeObject = function() {
                var t, e, n, r = new M, a = S(i.itemDefinitions);
                try {
                    for (a.s(); !(n = a.n()).done; ) {
                        var o = n.value;
                        if (o.inInitialList) {
                            var s = new B((null === (t = i.identifier) || void 0 === t ? void 0 : t.name) || null,o.name || null);
                            r.Add(s, o.seriesValue)
                        }
                    }
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
                return r.SetInitialOriginName((null === (e = i.identifier) || void 0 === e ? void 0 : e.name) || ""),
                new Z(r)
            }
            ;
            var a, o = 1, s = S(i.itemDefinitions);
            try {
                for (s.s(); !(a = s.n()).done; ) {
                    var l = a.value;
                    null !== l.explicitValue && (o = l.explicitValue),
                    l.seriesValue = o,
                    o += 1
                }
            } catch (t) {
                s.e(t)
            } finally {
                s.f()
            }
            return i.AddContent(t),
            i
        }
        return i(r, [{
            key: "typeName",
            get: function() {
                return "ListDefinition"
            }
        }, {
            key: "runtimeListDefinition",
            get: function() {
                var t, e, n = new Map, r = S(this.itemDefinitions);
                try {
                    for (r.s(); !(e = r.n()).done; ) {
                        var i = e.value;
                        n.has(i.name) ? this.Error("List '".concat(this.identifier, "' contains duplicate items called '").concat(i.name, "'")) : n.set(i.name, i.seriesValue)
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                return new Kt((null === (t = this.identifier) || void 0 === t ? void 0 : t.name) || "",n)
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                p(o(r.prototype), "ResolveReferences", this).call(this, t),
                t.CheckForNamingCollisions(this, this.identifier, ft.List)
            }
        }]),
        r
    }(F), Jt = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i, a = t.assignedExpression, o = t.isGlobalDeclaration, s = t.isTemporaryNewDeclaration, l = t.listDef, u = t.variableIdentifier;
            return n(this, r),
            (i = e.call(this))._runtimeAssignment = null,
            i.expression = null,
            i.listDefinition = null,
            i.GenerateRuntimeObject = function() {
                var t = null;
                if (i.isGlobalDeclaration ? t = i.story : i.isNewTemporaryDeclaration && (t = Nt(h(i))),
                t && t.AddNewVariableDeclaration(h(i)),
                i.isGlobalDeclaration)
                    return null;
                var e = new tt;
                return i.expression ? e.AddContent(i.expression.runtimeObject) : i.listDefinition && e.AddContent(i.listDefinition.runtimeObject),
                i._runtimeAssignment = new pt(i.variableName,i.isNewTemporaryDeclaration),
                e.AddContent(i._runtimeAssignment),
                e
            }
            ,
            i.toString = function() {
                return "".concat(i.isGlobalDeclaration ? "VAR" : i.isNewTemporaryDeclaration ? "~ temp" : "", " ").concat(i.variableName)
            }
            ,
            i.variableIdentifier = u,
            i.isGlobalDeclaration = Boolean(o),
            i.isNewTemporaryDeclaration = Boolean(s),
            l instanceof Ht ? (i.listDefinition = i.AddContent(l),
            i.listDefinition.variableAssignment = h(i),
            i.isGlobalDeclaration = !0) : a && (i.expression = i.AddContent(a)),
            i
        }
        return i(r, [{
            key: "variableName",
            get: function() {
                return this.variableIdentifier.name
            }
        }, {
            key: "typeName",
            get: function() {
                return this.isNewTemporaryDeclaration ? "temp" : this.isGlobalDeclaration ? null !== this.listDefinition ? "LIST" : "VAR" : "variable assignment"
            }
        }, {
            key: "isDeclaration",
            get: function() {
                return this.isGlobalDeclaration || this.isNewTemporaryDeclaration
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                if (p(o(r.prototype), "ResolveReferences", this).call(this, t),
                this.isDeclaration && null === this.listDefinition && t.CheckForNamingCollisions(this, this.variableIdentifier, this.isGlobalDeclaration ? ft.Var : ft.Temp),
                this.isGlobalDeclaration) {
                    var e = _(this.expression, Wt);
                    !e || e.isConstantReference || e.isListItemReference || this.Error("global variable assignments cannot refer to other variables, only literal values, constants and list items")
                }
                if (!this.isNewTemporaryDeclaration) {
                    var n = t.ResolveVariableWithName(this.variableName, this);
                    n.found || (this.variableName in this.story.constants ? this.Error("Can't re-assign to a constant (do you need to use VAR when declaring '".concat(this.variableName, "'?)"), this) : this.Error("Variable could not be found to assign to: '".concat(this.variableName, "'"), this)),
                    this._runtimeAssignment && (this._runtimeAssignment.isGlobal = n.isGlobal)
                }
            }
        }]),
        r
    }(F), zt = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
            return n(this, r),
            (i = e.call(this)).previousWeavePoint = null,
            i.addContentToPreviousWeavePoint = !1,
            i.hasSeenChoiceInSection = !1,
            i.currentContainer = null,
            i._unnamedGatherCount = 0,
            i._choiceCount = 0,
            i._rootContainer = null,
            i._namedWeavePoints = new Map,
            i.looseEnds = [],
            i.gatherPointsToResolve = [],
            i.ResolveWeavePointNaming = function() {
                var t, e, n, r = [].concat(g(i.FindAll(Tt)((function(t) {
                    return !(null === t.name || void 0 === t.name)
                }
                ))), g(i.FindAll(mt)((function(t) {
                    return !(null === t.name || void 0 === t.name)
                }
                ))));
                i._namedWeavePoints = new Map;
                var a, o = S(r);
                try {
                    for (o.s(); !(a = o.n()).done; ) {
                        var s = a.value
                          , l = i.namedWeavePoints.get((null === (t = s.identifier) || void 0 === t ? void 0 : t.name) || "");
                        if (l) {
                            var u = l instanceof Tt ? "gather" : "choice"
                              , c = l;
                            i.Error("A ".concat(u, " with the same label name '").concat(s.name, "' already exists in this context on line ").concat(c.debugMetadata ? c.debugMetadata.startLineNumber : "NO DEBUG METADATA AVAILABLE"), s)
                        }
                        (null === (e = s.identifier) || void 0 === e ? void 0 : e.name) && i.namedWeavePoints.set(null === (n = s.identifier) || void 0 === n ? void 0 : n.name, s)
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
            }
            ,
            i.ConstructWeaveHierarchyFromIndentation = function() {
                for (var t = 0; t < i.content.length; ) {
                    var e = i.content[t];
                    if (e instanceof mt || e instanceof Tt) {
                        var n = e.indentationDepth - 1;
                        if (n > i.baseIndentIndex) {
                            for (var a = t; t < i.content.length; ) {
                                var o = _(i.content[t], mt) || _(i.content[t], Tt);
                                if (null !== o)
                                    if (o.indentationDepth - 1 <= i.baseIndentIndex)
                                        break;
                                t += 1
                            }
                            var s = t - a
                              , l = i.content.slice(a, a + s);
                            i.content.splice(a, s);
                            var u = new r(l,n);
                            i.InsertContent(a, u),
                            t = a
                        }
                    }
                    t += 1
                }
            }
            ,
            i.DetermineBaseIndentationFromContent = function(t) {
                var e, n = S(t);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var r = e.value;
                        if (r instanceof mt || r instanceof Tt)
                            return r.indentationDepth - 1
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                return 0
            }
            ,
            i.GenerateRuntimeObject = function() {
                i._rootContainer = new tt,
                i.currentContainer = i._rootContainer,
                i.looseEnds = [],
                i.gatherPointsToResolve = [];
                var t, e = S(i.content);
                try {
                    for (e.s(); !(t = e.n()).done; ) {
                        var n = t.value;
                        if (n instanceof mt || n instanceof Tt)
                            i.AddRuntimeForWeavePoint(n);
                        else if (n instanceof r) {
                            var a, o = n;
                            i.AddRuntimeForNestedWeave(o),
                            (a = i.gatherPointsToResolve).splice.apply(a, [0, 0].concat(g(o.gatherPointsToResolve)))
                        } else
                            i.AddGeneralRuntimeContent(n.runtimeObject)
                    }
                } catch (t) {
                    e.e(t)
                } finally {
                    e.f()
                }
                return i.PassLooseEndsToAncestors(),
                i._rootContainer
            }
            ,
            i.AddRuntimeForGather = function(t) {
                var e = !i.hasSeenChoiceInSection;
                i.hasSeenChoiceInSection = !1;
                var n = t.runtimeContainer;
                if (t.name || (n.name = "g-".concat(i._unnamedGatherCount),
                i._unnamedGatherCount += 1),
                e) {
                    if (!i.currentContainer)
                        throw new Error;
                    i.currentContainer.AddContent(n)
                } else
                    i.rootContainer.AddToNamedContentOnly(n);
                var r, a = S(i.looseEnds);
                try {
                    for (a.s(); !(r = a.n()).done; ) {
                        var o = r.value;
                        if (o instanceof Tt)
                            if (o.indentationDepth == t.indentationDepth)
                                continue;
                        var s = null;
                        if (o instanceof jt)
                            s = o.runtimeObject;
                        else {
                            s = new vt;
                            var l = o;
                            if (!l.runtimeContainer)
                                throw new Error;
                            l.runtimeContainer.AddContent(s)
                        }
                        i.gatherPointsToResolve.push(new Bt(s,n))
                    }
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
                i.looseEnds = [],
                i.currentContainer = n
            }
            ,
            i.AddRuntimeForWeavePoint = function(t) {
                if (t instanceof Tt)
                    i.AddRuntimeForGather(t);
                else if (t instanceof mt) {
                    if (!i.currentContainer)
                        throw new Error;
                    i.previousWeavePoint instanceof Tt && i.looseEnds.splice(i.looseEnds.indexOf(i.previousWeavePoint), 1);
                    var e = t;
                    if (i.currentContainer.AddContent(e.runtimeObject),
                    !e.innerContentContainer)
                        throw new Error;
                    e.innerContentContainer.name = "c-".concat(i._choiceCount),
                    i.currentContainer.AddToNamedContentOnly(e.innerContentContainer),
                    i._choiceCount += 1,
                    i.hasSeenChoiceInSection = !0
                }
                (i.addContentToPreviousWeavePoint = !1,
                i.WeavePointHasLooseEnd(t)) && (i.looseEnds.push(t),
                _(t, mt) && (i.addContentToPreviousWeavePoint = !0));
                i.previousWeavePoint = t
            }
            ,
            i.AddRuntimeForNestedWeave = function(t) {
                i.AddGeneralRuntimeContent(t.rootContainer),
                null !== i.previousWeavePoint && (i.looseEnds.splice(i.looseEnds.indexOf(i.previousWeavePoint), 1),
                i.addContentToPreviousWeavePoint = !1)
            }
            ,
            i.AddGeneralRuntimeContent = function(t) {
                if (null !== t)
                    if (i.addContentToPreviousWeavePoint) {
                        if (!i.previousWeavePoint || !i.previousWeavePoint.runtimeContainer)
                            throw new Error;
                        i.previousWeavePoint.runtimeContainer.AddContent(t)
                    } else {
                        if (!i.currentContainer)
                            throw new Error;
                        i.currentContainer.AddContent(t)
                    }
            }
            ,
            i.PassLooseEndsToAncestors = function() {
                if (0 !== i.looseEnds.length) {
                    for (var t = null, e = null, n = !1, a = i.parent; null !== a; a = a.parent) {
                        var o = _(a, r);
                        o && (n || null !== t || (t = o),
                        n && null === e && (e = o)),
                        (a instanceof qt || a instanceof kt) && (n = !0)
                    }
                    if (null !== t || null !== e)
                        for (var s = i.looseEnds.length - 1; s >= 0; s -= 1) {
                            var l = i.looseEnds[s]
                              , u = !1;
                            if (n) {
                                if (l instanceof mt && null !== t)
                                    t.ReceiveLooseEnd(l),
                                    u = !0;
                                else if (!(l instanceof mt)) {
                                    var c = t || e;
                                    null !== c && (c.ReceiveLooseEnd(l),
                                    u = !0)
                                }
                            } else
                                (null == t ? void 0 : t.hasOwnProperty("ReceiveLooseEnd")) && t.ReceiveLooseEnd(l),
                                u = !0;
                            u && i.looseEnds.splice(s, 1)
                        }
                }
            }
            ,
            i.ReceiveLooseEnd = function(t) {
                i.looseEnds.push(t)
            }
            ,
            i.WeavePointNamed = function(t) {
                if (!i.namedWeavePoints)
                    return null;
                var e = i.namedWeavePoints.get(t);
                return e || null
            }
            ,
            i.IsGlobalDeclaration = function(t) {
                var e = _(t, Jt);
                return !!(e && e.isGlobalDeclaration && e.isDeclaration) || !!_(t, _t)
            }
            ,
            i.ContentThatFollowsWeavePoint = function(t) {
                var e = []
                  , n = t;
                if (null !== n.content) {
                    var a, o = S(n.content);
                    try {
                        for (o.s(); !(a = o.n()).done; ) {
                            var s = a.value;
                            i.IsGlobalDeclaration(s) || e.push(s)
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                }
                var l = _(n.parent, r);
                if (null === l)
                    throw new Error("Expected weave point parent to be weave?");
                for (var u = l.content.indexOf(n) + 1; u < l.content.length; u += 1) {
                    var c = l.content[u];
                    if (!i.IsGlobalDeclaration(c)) {
                        if (c instanceof mt || c instanceof Tt)
                            break;
                        if (c instanceof r)
                            break;
                        e.push(c)
                    }
                }
                return e
            }
            ,
            i.ValidateTermination = function(t) {
                if (!(i.lastParsedSignificantObject instanceof W))
                    if (null !== i.looseEnds && i.looseEnds.length > 0) {
                        var e, n = S(i.looseEnds);
                        try {
                            for (n.s(); !(e = n.n()).done; ) {
                                var r = e.value
                                  , a = i.ContentThatFollowsWeavePoint(r);
                                i.ValidateFlowOfObjectsTerminates(a, r, t)
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                    } else {
                        var o, s = S(i.content);
                        try {
                            for (s.s(); !(o = s.n()).done; ) {
                                var l = o.value;
                                if (l instanceof mt || l instanceof jt)
                                    return
                            }
                        } catch (t) {
                            s.e(t)
                        } finally {
                            s.f()
                        }
                        i.ValidateFlowOfObjectsTerminates(i.content, h(i), t)
                    }
            }
            ,
            i.BadNestedTerminationHandler = function(t) {
                for (var e = null, n = t.parent; null !== n; n = n.parent)
                    if (n instanceof qt || n instanceof kt) {
                        e = _(n, kt);
                        break
                    }
                var r = "Choices nested in conditionals or sequences need to explicitly divert afterwards.";
                null !== e && (1 === e.FindAll(mt)().length && (r = "Choices with conditions should be written: '* {condition} choice'. Otherwise, ".concat(r.toLowerCase())));
                i.Error(r, t)
            }
            ,
            i.ValidateFlowOfObjectsTerminates = function(t, e, n) {
                var r, i = !1, a = e, o = S(t);
                try {
                    for (o.s(); !(r = o.n()).done; ) {
                        var s = r.value;
                        if (null !== s.Find(jt)((function(t) {
                            return !(t.isThread || t.isTunnel || t.isFunctionCall || t.parent instanceof Vt)
                        }
                        )) && (i = !0),
                        null != s.Find(Ut)()) {
                            i = !0;
                            break
                        }
                        a = s
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
                if (!i) {
                    if (a instanceof W)
                        return;
                    n(a)
                }
            }
            ,
            i.WeavePointHasLooseEnd = function(t) {
                if (null === t.content)
                    return !0;
                for (var e = t.content.length - 1; e >= 0; --e) {
                    var n = _(t.content[e], jt);
                    if (n)
                        if (!(n.isThread || n.isTunnel || n.isFunctionCall))
                            return !1
                }
                return !0
            }
            ,
            i.CheckForWeavePointNamingCollisions = function() {
                if (i.namedWeavePoints) {
                    var t, e = [], n = S(i.ancestry);
                    try {
                        for (n.s(); !(t = n.n()).done; ) {
                            var r = _(t.value, Ot);
                            if (!r)
                                break;
                            e.push(r)
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    var a, o = S(i.namedWeavePoints);
                    try {
                        for (o.s(); !(a = o.n()).done; ) {
                            var s, l = m(a.value, 2), u = l[0], c = l[1], h = S(e);
                            try {
                                for (h.s(); !(s = h.n()).done; ) {
                                    var f = s.value.ContentWithNameAtLevel(u);
                                    if (f && f !== c) {
                                        var d = "".concat(c.GetType(), " '").concat(u, "' has the same label name as a ").concat(f.GetType(), " (on ").concat(f.debugMetadata, ")");
                                        i.Error(d, c)
                                    }
                                }
                            } catch (t) {
                                h.e(t)
                            } finally {
                                h.f()
                            }
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                }
            }
            ,
            i.baseIndentIndex = -1 == a ? i.DetermineBaseIndentationFromContent(t) : a,
            i.AddContent(t),
            i.ConstructWeaveHierarchyFromIndentation(),
            i
        }
        return i(r, [{
            key: "rootContainer",
            get: function() {
                return this._rootContainer || (this._rootContainer = this.GenerateRuntimeObject()),
                this._rootContainer
            }
        }, {
            key: "namedWeavePoints",
            get: function() {
                return this._namedWeavePoints
            }
        }, {
            key: "lastParsedSignificantObject",
            get: function() {
                if (0 === this.content.length)
                    return null;
                for (var t = null, e = this.content.length - 1; e >= 0; --e) {
                    var n = _(t = this.content[e], Et);
                    if ((!n || "\n" !== n.text) && !this.IsGlobalDeclaration(t))
                        break
                }
                var i = _(t, r);
                return i && (t = i.lastParsedSignificantObject),
                t
            }
        }, {
            key: "typeName",
            get: function() {
                return "Weave"
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                if (p(o(r.prototype), "ResolveReferences", this).call(this, t),
                null !== this.looseEnds && this.looseEnds.length > 0) {
                    for (var e = !1, n = this.parent; null !== n; n = n.parent)
                        if (n instanceof qt || n instanceof kt) {
                            e = !0;
                            break
                        }
                    e && this.ValidateTermination(this.BadNestedTerminationHandler)
                }
                var i, a = S(this.gatherPointsToResolve);
                try {
                    for (a.s(); !(i = a.n()).done; ) {
                        var s = i.value;
                        s.divert.targetPath = s.targetRuntimeObj.path
                    }
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
                this.CheckForWeavePointNamingCollisions()
            }
        }]),
        r
    }(F), $t = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i;
            return n(this, r),
            (i = e.call(this))._contentContainer = null,
            i._conditionalDivert = null,
            i._ownExpression = null,
            i._innerWeave = null,
            i.isTrueBranch = !1,
            i.matchingEquality = !1,
            i.isElse = !1,
            i.isInline = !1,
            i.returnDivert = null,
            i.GenerateRuntimeObject = function() {
                if (i._innerWeave) {
                    var t, e = S(i._innerWeave.content);
                    try {
                        for (e.s(); !(t = e.n()).done; ) {
                            var n = _(t.value, Et);
                            n && n.text.startsWith("else:") && i.Warning("Saw the text 'else:' which is being treated as content. Did you mean '- else:'?", n)
                        }
                    } catch (t) {
                        e.e(t)
                    } finally {
                        e.f()
                    }
                }
                var r = new tt
                  , a = i.matchingEquality && !i.isElse;
                if (a && r.AddContent(et.Duplicate()),
                i._conditionalDivert = new vt,
                i._conditionalDivert.isConditional = !i.isElse,
                !i.isTrueBranch && !i.isElse) {
                    var o = null !== i.ownExpression;
                    o && r.AddContent(et.EvalStart()),
                    i.ownExpression && i.ownExpression.GenerateIntoContainer(r),
                    i.matchingEquality && r.AddContent(it.CallWithName("==")),
                    o && r.AddContent(et.EvalEnd())
                }
                return r.AddContent(i._conditionalDivert),
                i._contentContainer = i.GenerateRuntimeForContent(),
                i._contentContainer.name = "b",
                i.isInline || i._contentContainer.InsertContent(new $("\n"), 0),
                (a || i.isElse && i.matchingEquality) && i._contentContainer.InsertContent(et.PopEvaluatedValue(), 0),
                r.AddToNamedContentOnly(i._contentContainer),
                i.returnDivert = new vt,
                i._contentContainer.AddContent(i.returnDivert),
                r
            }
            ,
            i.GenerateRuntimeForContent = function() {
                return null === i._innerWeave ? new tt : i._innerWeave.rootContainer
            }
            ,
            t && (i._innerWeave = new zt(t),
            i.AddContent(i._innerWeave)),
            i
        }
        return i(r, [{
            key: "ownExpression",
            get: function() {
                return this._ownExpression
            },
            set: function(t) {
                this._ownExpression = t,
                this._ownExpression && this.AddContent(this._ownExpression)
            }
        }, {
            key: "typeName",
            get: function() {
                return "ConditionalSingleBranch"
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                if (!this._conditionalDivert || !this._contentContainer)
                    throw new Error;
                this._conditionalDivert.targetPath = this._contentContainer.path,
                p(o(r.prototype), "ResolveReferences", this).call(this, t)
            }
        }]),
        r
    }(F);
    !function(t) {
        t[t.ParsingString = 1] = "ParsingString",
        t[t.TagActive = 2] = "TagActive"
    }(Gt || (Gt = {}));
    var Xt, Yt = function() {
        function t() {
            n(this, t),
            this.startLineNumber = 0,
            this.endLineNumber = 0,
            this.startCharacterNumber = 0,
            this.endCharacterNumber = 0,
            this.fileName = null,
            this.sourceName = null
        }
        return i(t, [{
            key: "Merge",
            value: function(e) {
                var n = new t;
                return n.fileName = this.fileName,
                n.sourceName = this.sourceName,
                this.startLineNumber < e.startLineNumber ? (n.startLineNumber = this.startLineNumber,
                n.startCharacterNumber = this.startCharacterNumber) : this.startLineNumber > e.startLineNumber ? (n.startLineNumber = e.startLineNumber,
                n.startCharacterNumber = e.startCharacterNumber) : (n.startLineNumber = this.startLineNumber,
                n.startCharacterNumber = Math.min(this.startCharacterNumber, e.startCharacterNumber)),
                this.endLineNumber > e.endLineNumber ? (n.endLineNumber = this.endLineNumber,
                n.endCharacterNumber = this.endCharacterNumber) : this.endLineNumber < e.endLineNumber ? (n.endLineNumber = e.endLineNumber,
                n.endCharacterNumber = e.endCharacterNumber) : (n.endLineNumber = this.endLineNumber,
                n.endCharacterNumber = Math.max(this.endCharacterNumber, e.endCharacterNumber)),
                n
            }
        }, {
            key: "toString",
            value: function() {
                return null !== this.fileName ? "line ".concat(this.startLineNumber, " of ").concat(this.fileName, '"') : "line " + this.startLineNumber
            }
        }]),
        t
    }(), Zt = function(t) {
        a(r, t);
        var e = d(r);
        function r(t, i) {
            var a;
            return n(this, r),
            (a = e.call(this)).identifier = t,
            a.argumentNames = i,
            a.GenerateRuntimeObject = function() {
                return a.story.AddExternal(h(a)),
                null
            }
            ,
            a
        }
        return i(r, [{
            key: "name",
            get: function() {
                var t;
                return (null === (t = this.identifier) || void 0 === t ? void 0 : t.name) || null
            }
        }, {
            key: "typeName",
            get: function() {
                return "EXTERNAL"
            }
        }, {
            key: "toString",
            value: function() {
                var t;
                return "EXTERNAL ".concat(null === (t = this.identifier) || void 0 === t ? void 0 : t.name)
            }
        }]),
        r
    }(F), Qt = i((function t(e, r, i) {
        n(this, t),
        this.name = e,
        this.args = r,
        this.isFunction = i
    }
    )), te = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            return n(this, r),
            e.call(this, t)
        }
        return i(r, [{
            key: "typeName",
            get: function() {
                return "Glue"
            }
        }]),
        r
    }(function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i;
            return n(this, r),
            (i = e.call(this))._objToWrap = t,
            i.GenerateRuntimeObject = function() {
                return i._objToWrap
            }
            ,
            i
        }
        return i(r)
    }(F)), ee = function(t) {
        a(r, t);
        var e = d(r);
        function r() {
            return n(this, r),
            e.apply(this, arguments)
        }
        return i(r, [{
            key: "toString",
            value: function() {
                return "Glue"
            }
        }]),
        r
    }(V), ne = function(t) {
        a(r, t);
        var e = d(r);
        function r(t, i, a) {
            var o;
            return n(this, r),
            (o = e.call(this)).varIdentifier = t,
            o._runtimeAssignment = null,
            o.expression = null,
            o.GenerateIntoContainer = function(t) {
                var e, n;
                t.AddContent(new Ft((null === (e = o.varIdentifier) || void 0 === e ? void 0 : e.name) || null)),
                o.expression ? o.expression.GenerateIntoContainer(t) : t.AddContent(new J(1)),
                t.AddContent(it.CallWithName(o.isInc ? "+" : "-")),
                o._runtimeAssignment = new pt((null === (n = o.varIdentifier) || void 0 === n ? void 0 : n.name) || null,!1),
                t.AddContent(o._runtimeAssignment)
            }
            ,
            o.toString = function() {
                var t, e;
                return o.expression ? "".concat(null === (t = o.varIdentifier) || void 0 === t ? void 0 : t.name).concat(o.isInc ? " += " : " -= ").concat(o.expression) : "".concat(null === (e = o.varIdentifier) || void 0 === e ? void 0 : e.name) + (o.isInc ? "++" : "--")
            }
            ,
            i instanceof nt ? (o.expression = i,
            o.AddContent(o.expression),
            o.isInc = Boolean(a)) : o.isInc = i,
            o
        }
        return i(r, [{
            key: "typeName",
            get: function() {
                return "IncDecExpression"
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                var e;
                p(o(r.prototype), "ResolveReferences", this).call(this, t);
                var n = t.ResolveVariableWithName((null === (e = this.varIdentifier) || void 0 === e ? void 0 : e.name) || "", this);
                if (n.found || this.Error("variable for ".concat(this.incrementDecrementWord, " could not be found: '").concat(this.varIdentifier, "' after searching: {this.descriptionOfScope}")),
                !this._runtimeAssignment)
                    throw new Error;
                this._runtimeAssignment.isGlobal = n.isGlobal,
                this.parent instanceof zt || this.parent instanceof Ot || this.parent instanceof It || this.Error("Can't use ".concat(this.incrementDecrementWord, " as sub-expression"))
            }
        }, {
            key: "incrementDecrementWord",
            get: function() {
                return this.isInc ? "increment" : "decrement"
            }
        }]),
        r
    }(nt), re = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i;
            return n(this, r),
            (i = e.call(this)).includedStory = t,
            i.GenerateRuntimeObject = function() {
                return null
            }
            ,
            i
        }
        return i(r)
    }(F), ie = i((function t(e, r, i) {
        var a = this;
        n(this, t),
        this.type = e,
        this.precedence = r,
        this.requireWhitespace = i,
        this.toString = function() {
            return a.type
        }
    }
    )), ae = function(t) {
        a(r, t);
        var e = d(r);
        function r(t, i, a, o) {
            return n(this, r),
            e.call(this, t, i, a, o)
        }
        return i(r, [{
            key: "flowLevel",
            get: function() {
                return bt.Knot
            }
        }, {
            key: "typeName",
            get: function() {
                return this.isFunction ? "Function" : "Knot"
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                p(o(r.prototype), "ResolveReferences", this).call(this, t);
                var e = this.story;
                for (var n in this.subFlowsByName) {
                    var i = e.ContentWithNameAtLevel(n, bt.Knot, !1);
                    if (i) {
                        var a = this.subFlowsByName.get(n)
                          , s = "Stitch '".concat(a ? a.name : "NO STITCH FOUND", "' has the same name as a knot (on ").concat(i.debugMetadata, ")");
                        this.Error(s, a)
                    }
                }
            }
        }]),
        r
    }(Ot), oe = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i;
            return n(this, r),
            (i = e.call(this)).itemIdentifierList = t,
            i.GenerateIntoContainer = function(t) {
                var e, n, r = new M;
                if (null != i.itemIdentifierList) {
                    var a, o = S(i.itemIdentifierList);
                    try {
                        for (o.s(); !(a = o.n()).done; ) {
                            var s = a.value
                              , l = (null === (e = null == s ? void 0 : s.name) || void 0 === e ? void 0 : e.split(".")) || []
                              , u = null
                              , c = "";
                            l.length > 1 ? (u = l[0],
                            c = l[1]) : c = l[0];
                            var f = i.story.ResolveListItem(u, c, h(i));
                            if (null === f)
                                null === u ? i.Error("Could not find list definition that contains item '".concat(s, "'")) : i.Error("Could not find list item ".concat(s));
                            else {
                                if (null == f.parent)
                                    return void i.Error("Could not find list definition for item ".concat(s));
                                u || (u = (null === (n = f.parent.identifier) || void 0 === n ? void 0 : n.name) || null);
                                var d = new B(u,f.name || null);
                                r.has(d.serialized()) ? i.Warning("Duplicate of item '".concat(s, "' in list.")) : r.Add(d, f.seriesValue)
                            }
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                }
                t.AddContent(new Z(r))
            }
            ,
            i
        }
        return i(r, [{
            key: "typeName",
            get: function() {
                return "List"
            }
        }]),
        r
    }(nt), se = function(t) {
        a(r, t);
        var e = d(r);
        function r(t, i) {
            var a, s, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return n(this, r),
            (s = e.call(this)).indentifier = t,
            s.inInitialList = i,
            s.explicitValue = l,
            s.seriesValue = 0,
            s.parent = null,
            s.GenerateRuntimeObject = function() {
                throw new Error("Not implemented.")
            }
            ,
            s.toString = function() {
                return s.fullName
            }
            ,
            s.parent = p((a = h(s),
            o(r.prototype)), "parent", a),
            s
        }
        return i(r, [{
            key: "fullName",
            get: function() {
                var t, e = this.parent;
                if (null === e)
                    throw new Error("Can't get full name without a parent list.");
                return "".concat(null === (t = e.identifier) || void 0 === t ? void 0 : t.name, ".").concat(this.name)
            }
        }, {
            key: "typeName",
            get: function() {
                return "ListElement"
            }
        }, {
            key: "name",
            get: function() {
                var t;
                return (null === (t = this.indentifier) || void 0 === t ? void 0 : t.name) || null
            }
        }, {
            key: "ResolveReferences",
            value: function(t) {
                p(o(r.prototype), "ResolveReferences", this).call(this, t),
                t.CheckForNamingCollisions(this, this.indentifier, ft.ListItem)
            }
        }]),
        r
    }(F);
    !function(t) {
        t[t.InnerBlock = 0] = "InnerBlock",
        t[t.Stitch = 1] = "Stitch",
        t[t.Knot = 2] = "Knot",
        t[t.Top = 3] = "Top"
    }(Xt || (Xt = {}));
    var le = function(t) {
        a(r, t);
        var e = d(r);
        function r(t, i, a, s) {
            var l, u;
            return n(this, r),
            (u = e.call(this, t, i, a, s)).toString = function() {
                return "".concat(null !== u.parent ? u.parent + " > " : "").concat(p((l = h(u),
                o(r.prototype)), "toString", l).call(l))
            }
            ,
            u
        }
        return i(r, [{
            key: "flowLevel",
            get: function() {
                return bt.Stitch
            }
        }, {
            key: "typeName",
            get: function() {
                return "Stitch"
            }
        }]),
        r
    }(Ot)
      , ue = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i;
            return n(this, r),
            (i = e.call(this)).text = t.toString() || "",
            i
        }
        return i(r, [{
            key: "toString",
            value: function() {
                return "# " + this.text
            }
        }]),
        r
    }(V)
      , ce = function(t) {
        a(r, t);
        var e = d(r);
        function r() {
            var t;
            return n(this, r),
            (t = e.apply(this, arguments)).text = "",
            t.index = 0,
            t.threadAtGeneration = null,
            t.sourcePath = "",
            t.targetPath = null,
            t.isInvisibleDefault = !1,
            t.tags = null,
            t.originalThreadIndex = 0,
            t
        }
        return i(r, [{
            key: "pathStringOnChoice",
            get: function() {
                return null === this.targetPath ? L("Choice.targetPath") : this.targetPath.toString()
            },
            set: function(t) {
                this.targetPath = new R(t)
            }
        }]),
        r
    }(V)
      , he = function() {
        function t(e) {
            n(this, t),
            this._lists = new Map,
            this._allUnambiguousListValueCache = new Map;
            var r, i = S(e);
            try {
                for (i.s(); !(r = i.n()).done; ) {
                    var a = r.value;
                    this._lists.set(a.name, a);
                    var o, s = S(a.items);
                    try {
                        for (s.s(); !(o = s.n()).done; ) {
                            var l = m(o.value, 2)
                              , u = l[0]
                              , c = l[1]
                              , h = B.fromSerializedKey(u)
                              , f = new Z(h,c);
                            if (!h.itemName)
                                throw new Error("item.itemName is null or undefined.");
                            this._allUnambiguousListValueCache.set(h.itemName, f),
                            this._allUnambiguousListValueCache.set(h.fullName, f)
                        }
                    } catch (t) {
                        s.e(t)
                    } finally {
                        s.f()
                    }
                }
            } catch (t) {
                i.e(t)
            } finally {
                i.f()
            }
        }
        return i(t, [{
            key: "lists",
            get: function() {
                var t, e = [], n = S(this._lists);
                try {
                    for (n.s(); !(t = n.n()).done; ) {
                        var r = m(t.value, 2)[1];
                        e.push(r)
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                return e
            }
        }, {
            key: "TryListGetDefinition",
            value: function(t, e) {
                if (null === t)
                    return {
                        result: e,
                        exists: !1
                    };
                var n = this._lists.get(t);
                return n ? {
                    result: n,
                    exists: !0
                } : {
                    result: e,
                    exists: !1
                }
            }
        }, {
            key: "FindSingleItemListWithName",
            value: function(t) {
                if (null === t)
                    return L("name");
                var e = this._allUnambiguousListValueCache.get(t);
                return void 0 !== e ? e : null
            }
        }]),
        t
    }()
      , fe = function() {
        function t() {
            n(this, t)
        }
        return i(t, null, [{
            key: "JArrayToRuntimeObjList",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = t.length;
                e && n--;
                for (var r = [], i = 0; i < n; i++) {
                    var a = t[i]
                      , o = this.JTokenToRuntimeObject(a);
                    if (null === o)
                        return L("runtimeObj");
                    r.push(o)
                }
                return r
            }
        }, {
            key: "WriteDictionaryRuntimeObjs",
            value: function(t, e) {
                t.WriteObjectStart();
                var n, r = S(e);
                try {
                    for (r.s(); !(n = r.n()).done; ) {
                        var i = m(n.value, 2)
                          , a = i[0]
                          , o = i[1];
                        t.WritePropertyStart(a),
                        this.WriteRuntimeObject(t, o),
                        t.WritePropertyEnd()
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                t.WriteObjectEnd()
            }
        }, {
            key: "WriteListRuntimeObjs",
            value: function(t, e) {
                t.WriteArrayStart();
                var n, r = S(e);
                try {
                    for (r.s(); !(n = r.n()).done; ) {
                        var i = n.value;
                        this.WriteRuntimeObject(t, i)
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                t.WriteArrayEnd()
            }
        }, {
            key: "WriteIntDictionary",
            value: function(t, e) {
                t.WriteObjectStart();
                var n, r = S(e);
                try {
                    for (r.s(); !(n = r.n()).done; ) {
                        var i = m(n.value, 2)
                          , a = i[0]
                          , o = i[1];
                        t.WriteIntProperty(a, o)
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                t.WriteObjectEnd()
            }
        }, {
            key: "WriteRuntimeObject",
            value: function(e, n) {
                var r = _(n, tt);
                if (r)
                    this.WriteRuntimeContainer(e, r);
                else {
                    var i = _(n, vt);
                    if (i) {
                        var a, o = "->";
                        return i.isExternal ? o = "x()" : i.pushesToStack && (i.stackPushType == ct.Function ? o = "f()" : i.stackPushType == ct.Tunnel && (o = "->t->")),
                        a = i.hasVariableTarget ? i.variableDivertName : i.targetPathString,
                        e.WriteObjectStart(),
                        e.WriteProperty(o, a),
                        i.hasVariableTarget && e.WriteProperty("var", !0),
                        i.isConditional && e.WriteProperty("c", !0),
                        i.externalArgs > 0 && e.WriteIntProperty("exArgs", i.externalArgs),
                        void e.WriteObjectEnd()
                    }
                    var s = _(n, ht);
                    if (s)
                        return e.WriteObjectStart(),
                        e.WriteProperty("*", s.pathStringOnChoice),
                        e.WriteIntProperty("flg", s.flags),
                        void e.WriteObjectEnd();
                    var l = _(n, H);
                    if (l)
                        e.WriteBool(l.value);
                    else {
                        var u = _(n, J);
                        if (u)
                            e.WriteInt(u.value);
                        else {
                            var c = _(n, z);
                            if (c)
                                e.WriteFloat(c.value);
                            else {
                                var h = _(n, $);
                                if (h)
                                    h.isNewline ? e.Write("\n", !1) : (e.WriteStringStart(),
                                    e.WriteStringInner("^"),
                                    e.WriteStringInner(h.value),
                                    e.WriteStringEnd());
                                else {
                                    var f = _(n, Z);
                                    if (f)
                                        this.WriteInkList(e, f);
                                    else {
                                        var d = _(n, X);
                                        if (d)
                                            return e.WriteObjectStart(),
                                            null === d.value ? L("divTargetVal.value") : (e.WriteProperty("^->", d.value.componentsString),
                                            void e.WriteObjectEnd());
                                        var v = _(n, Y);
                                        if (v)
                                            return e.WriteObjectStart(),
                                            e.WriteProperty("^var", v.value),
                                            e.WriteIntProperty("ci", v.contextIndex),
                                            void e.WriteObjectEnd();
                                        if (_(n, ee))
                                            e.Write("<>");
                                        else {
                                            var p = _(n, et);
                                            if (p)
                                                e.Write(t._controlCommandNames[p.commandType]);
                                            else {
                                                var m = _(n, it);
                                                if (m) {
                                                    var g = m.name;
                                                    return "^" == g && (g = "L^"),
                                                    void e.Write(g)
                                                }
                                                var y = _(n, Ft);
                                                if (y) {
                                                    e.WriteObjectStart();
                                                    var C = y.pathStringForCount;
                                                    return null != C ? e.WriteProperty("CNT?", C) : e.WriteProperty("VAR?", y.name),
                                                    void e.WriteObjectEnd()
                                                }
                                                var S = _(n, pt);
                                                if (S) {
                                                    e.WriteObjectStart();
                                                    var b = S.isGlobal ? "VAR=" : "temp=";
                                                    return e.WriteProperty(b, S.variableName),
                                                    S.isNewDeclaration || e.WriteProperty("re", !0),
                                                    void e.WriteObjectEnd()
                                                }
                                                if (_(n, rt))
                                                    e.Write("void");
                                                else {
                                                    var w = _(n, ue);
                                                    if (w)
                                                        return e.WriteObjectStart(),
                                                        e.WriteProperty("#", w.text),
                                                        void e.WriteObjectEnd();
                                                    var k = _(n, ce);
                                                    if (!k)
                                                        throw new Error("Failed to convert runtime object to Json token: " + n);
                                                    this.WriteChoice(e, k)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, {
            key: "JObjectToDictionaryRuntimeObjs",
            value: function(t) {
                var e = new Map;
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var r = this.JTokenToRuntimeObject(t[n]);
                        if (null === r)
                            return L("inkObject");
                        e.set(n, r)
                    }
                return e
            }
        }, {
            key: "JObjectToIntDictionary",
            value: function(t) {
                var e = new Map;
                for (var n in t)
                    t.hasOwnProperty(n) && e.set(n, parseInt(t[n]));
                return e
            }
        }, {
            key: "JTokenToRuntimeObject",
            value: function(n) {
                if ("number" == typeof n && !isNaN(n) || "boolean" == typeof n)
                    return K.Create(n);
                if ("string" == typeof n) {
                    var r = n.toString()
                      , i = r[0];
                    if ("^" == i)
                        return new $(r.substring(1));
                    if ("\n" == i && 1 == r.length)
                        return new $("\n");
                    if ("<>" == r)
                        return new ee;
                    for (var a = 0; a < t._controlCommandNames.length; ++a) {
                        if (r == t._controlCommandNames[a])
                            return new et(a)
                    }
                    if ("L^" == r && (r = "^"),
                    it.CallExistsWithName(r))
                        return it.CallWithName(r);
                    if ("->->" == r)
                        return et.PopTunnel();
                    if ("~ret" == r)
                        return et.PopFunction();
                    if ("void" == r)
                        return new rt
                }
                if ("object" === e(n) && !Array.isArray(n)) {
                    var o, s = n;
                    if (s["^->"])
                        return o = s["^->"],
                        new X(new R(o.toString()));
                    if (s["^var"]) {
                        o = s["^var"];
                        var l = new Y(o.toString());
                        return "ci"in s && (o = s.ci,
                        l.contextIndex = parseInt(o)),
                        l
                    }
                    var u = !1
                      , c = !1
                      , h = ct.Function
                      , f = !1;
                    if ((o = s["->"]) ? u = !0 : (o = s["f()"]) ? (u = !0,
                    c = !0,
                    h = ct.Function) : (o = s["->t->"]) ? (u = !0,
                    c = !0,
                    h = ct.Tunnel) : (o = s["x()"]) && (u = !0,
                    f = !0,
                    c = !1,
                    h = ct.Function),
                    u) {
                        var d = new vt;
                        d.pushesToStack = c,
                        d.stackPushType = h,
                        d.isExternal = f;
                        var v = o.toString();
                        return (o = s.var) ? d.variableDivertName = v : d.targetPathString = v,
                        d.isConditional = !!s.c,
                        f && (o = s.exArgs) && (d.externalArgs = parseInt(o)),
                        d
                    }
                    if (o = s["*"]) {
                        var p = new ht;
                        return p.pathStringOnChoice = o.toString(),
                        (o = s.flg) && (p.flags = parseInt(o)),
                        p
                    }
                    if (o = s["VAR?"])
                        return new Ft(o.toString());
                    if (o = s["CNT?"]) {
                        var m = new Ft;
                        return m.pathStringForCount = o.toString(),
                        m
                    }
                    var g = !1
                      , y = !1;
                    if ((o = s["VAR="]) ? (g = !0,
                    y = !0) : (o = s["temp="]) && (g = !0,
                    y = !1),
                    g) {
                        var C = o.toString()
                          , S = !s.re
                          , b = new pt(C,S);
                        return b.isGlobal = y,
                        b
                    }
                    if (void 0 !== s["#"])
                        return o = s["#"],
                        new ue(o.toString());
                    if (o = s.list) {
                        var w = o
                          , k = new M;
                        if (o = s.origins) {
                            var E = o;
                            k.SetInitialOriginNames(E)
                        }
                        for (var _ in w)
                            if (w.hasOwnProperty(_)) {
                                var T = w[_]
                                  , A = new B(_)
                                  , P = parseInt(T);
                                k.Add(A, P)
                            }
                        return new Z(k)
                    }
                    if (null != s.originalChoicePath)
                        return this.JObjectToChoice(s)
                }
                if (Array.isArray(n))
                    return this.JArrayToContainer(n);
                if (null == n)
                    return null;
                throw new Error("Failed to convert token to runtime object: " + this.toJson(n, ["parent"]))
            }
        }, {
            key: "toJson",
            value: function(t, e, n) {
                return JSON.stringify(t, (function(t, n) {
                    return (null == e ? void 0 : e.some((function(e) {
                        return e === t
                    }
                    ))) ? void 0 : n
                }
                ), n)
            }
        }, {
            key: "WriteRuntimeContainer",
            value: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (t.WriteArrayStart(),
                null === e)
                    return L("container");
                var r, i = S(e.content);
                try {
                    for (i.s(); !(r = i.n()).done; ) {
                        var a = r.value;
                        this.WriteRuntimeObject(t, a)
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
                var o = e.namedOnlyContent
                  , s = e.countFlags
                  , l = null != e.name && !n
                  , u = null != o || s > 0 || l;
                if (u && t.WriteObjectStart(),
                null != o) {
                    var c, h = S(o);
                    try {
                        for (h.s(); !(c = h.n()).done; ) {
                            var f = m(c.value, 2)
                              , d = f[0]
                              , v = f[1]
                              , p = d
                              , g = _(v, tt);
                            t.WritePropertyStart(p),
                            this.WriteRuntimeContainer(t, g, !0),
                            t.WritePropertyEnd()
                        }
                    } catch (t) {
                        h.e(t)
                    } finally {
                        h.f()
                    }
                }
                s > 0 && t.WriteIntProperty("#f", s),
                l && t.WriteProperty("#n", e.name),
                u ? t.WriteObjectEnd() : t.WriteNull(),
                t.WriteArrayEnd()
            }
        }, {
            key: "JArrayToContainer",
            value: function(t) {
                var e = new tt;
                e.content = this.JArrayToRuntimeObjList(t, !0);
                var n = t[t.length - 1];
                if (null != n) {
                    var r = new Map;
                    for (var i in n)
                        if ("#f" == i)
                            e.countFlags = parseInt(n[i]);
                        else if ("#n" == i)
                            e.name = n[i].toString();
                        else {
                            var a = this.JTokenToRuntimeObject(n[i])
                              , o = _(a, tt);
                            o && (o.name = i),
                            r.set(i, a)
                        }
                    e.namedOnlyContent = r
                }
                return e
            }
        }, {
            key: "JObjectToChoice",
            value: function(t) {
                var e = new ce;
                return e.text = t.text.toString(),
                e.index = parseInt(t.index),
                e.sourcePath = t.originalChoicePath.toString(),
                e.originalThreadIndex = parseInt(t.originalThreadIndex),
                e.pathStringOnChoice = t.targetPath.toString(),
                e
            }
        }, {
            key: "WriteChoice",
            value: function(t, e) {
                t.WriteObjectStart(),
                t.WriteProperty("text", e.text),
                t.WriteIntProperty("index", e.index),
                t.WriteProperty("originalChoicePath", e.sourcePath),
                t.WriteIntProperty("originalThreadIndex", e.originalThreadIndex),
                t.WriteProperty("targetPath", e.pathStringOnChoice),
                t.WriteObjectEnd()
            }
        }, {
            key: "WriteInkList",
            value: function(t, e) {
                var n = e.value;
                if (null === n)
                    return L("rawList");
                t.WriteObjectStart(),
                t.WritePropertyStart("list"),
                t.WriteObjectStart();
                var r, i = S(n);
                try {
                    for (i.s(); !(r = i.n()).done; ) {
                        var a = m(r.value, 2)
                          , o = a[0]
                          , s = a[1]
                          , l = B.fromSerializedKey(o)
                          , u = s;
                        if (null === l.itemName)
                            return L("item.itemName");
                        t.WritePropertyNameStart(),
                        t.WritePropertyNameInner(l.originName ? l.originName : "?"),
                        t.WritePropertyNameInner("."),
                        t.WritePropertyNameInner(l.itemName),
                        t.WritePropertyNameEnd(),
                        t.Write(u),
                        t.WritePropertyEnd()
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
                if (t.WriteObjectEnd(),
                t.WritePropertyEnd(),
                0 == n.Count && null != n.originNames && n.originNames.length > 0) {
                    t.WritePropertyStart("origins"),
                    t.WriteArrayStart();
                    var c, h = S(n.originNames);
                    try {
                        for (h.s(); !(c = h.n()).done; ) {
                            var f = c.value;
                            t.Write(f)
                        }
                    } catch (t) {
                        h.e(t)
                    } finally {
                        h.f()
                    }
                    t.WriteArrayEnd(),
                    t.WritePropertyEnd()
                }
                t.WriteObjectEnd()
            }
        }, {
            key: "ListDefinitionsToJToken",
            value: function(t) {
                var e, n = {}, r = S(t.lists);
                try {
                    for (r.s(); !(e = r.n()).done; ) {
                        var i, a = e.value, o = {}, s = S(a.items);
                        try {
                            for (s.s(); !(i = s.n()).done; ) {
                                var l = m(i.value, 2)
                                  , u = l[0]
                                  , c = l[1]
                                  , h = B.fromSerializedKey(u);
                                if (null === h.itemName)
                                    return L("item.itemName");
                                o[h.itemName] = c
                            }
                        } catch (t) {
                            s.e(t)
                        } finally {
                            s.f()
                        }
                        n[a.name] = o
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                return n
            }
        }, {
            key: "JTokenToListDefinitions",
            value: function(t) {
                var e = t
                  , n = [];
                for (var r in e)
                    if (e.hasOwnProperty(r)) {
                        var i = r.toString()
                          , a = e[r]
                          , o = new Map;
                        for (var s in a)
                            if (e.hasOwnProperty(r)) {
                                var l = a[s];
                                o.set(s, parseInt(l))
                            }
                        var u = new Kt(i,o);
                        n.push(u)
                    }
                return new he(n)
            }
        }]),
        t
    }();
    fe._controlCommandNames = function() {
        var t = [];
        t[et.CommandType.EvalStart] = "ev",
        t[et.CommandType.EvalOutput] = "out",
        t[et.CommandType.EvalEnd] = "/ev",
        t[et.CommandType.Duplicate] = "du",
        t[et.CommandType.PopEvaluatedValue] = "pop",
        t[et.CommandType.PopFunction] = "~ret",
        t[et.CommandType.PopTunnel] = "->->",
        t[et.CommandType.BeginString] = "str",
        t[et.CommandType.EndString] = "/str",
        t[et.CommandType.NoOp] = "nop",
        t[et.CommandType.ChoiceCount] = "choiceCnt",
        t[et.CommandType.Turns] = "turn",
        t[et.CommandType.TurnsSince] = "turns",
        t[et.CommandType.ReadCount] = "readc",
        t[et.CommandType.Random] = "rnd",
        t[et.CommandType.SeedRandom] = "srnd",
        t[et.CommandType.VisitIndex] = "visit",
        t[et.CommandType.SequenceShuffleIndex] = "seq",
        t[et.CommandType.StartThread] = "thread",
        t[et.CommandType.Done] = "done",
        t[et.CommandType.End] = "end",
        t[et.CommandType.ListFromInt] = "listInt",
        t[et.CommandType.ListRange] = "range",
        t[et.CommandType.ListRandom] = "lrnd",
        t[et.CommandType.BeginTag] = "#",
        t[et.CommandType.EndTag] = "/#";
        for (var e = 0; e < et.CommandType.TOTAL_VALUES; ++e)
            if (null == t[e])
                throw new Error("Control command not accounted for in serialisation");
        return t
    }();
    var de = function() {
        function e() {
            if (n(this, e),
            this._threadCounter = 0,
            this._startOfRoot = dt.Null,
            arguments[0]instanceof t.Story) {
                var r = arguments[0];
                this._startOfRoot = dt.StartOf(r.rootContentContainer),
                this.Reset()
            } else {
                var i = arguments[0];
                this._threads = [];
                var a, o = S(i._threads);
                try {
                    for (o.s(); !(a = o.n()).done; ) {
                        var s = a.value;
                        this._threads.push(s.Copy())
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
                this._threadCounter = i._threadCounter,
                this._startOfRoot = i._startOfRoot.copy()
            }
        }
        return i(e, [{
            key: "elements",
            get: function() {
                return this.callStack
            }
        }, {
            key: "depth",
            get: function() {
                return this.elements.length
            }
        }, {
            key: "currentElement",
            get: function() {
                var t = this._threads[this._threads.length - 1].callstack;
                return t[t.length - 1]
            }
        }, {
            key: "currentElementIndex",
            get: function() {
                return this.callStack.length - 1
            }
        }, {
            key: "currentThread",
            get: function() {
                return this._threads[this._threads.length - 1]
            },
            set: function(t) {
                I.Assert(1 == this._threads.length, "Shouldn't be directly setting the current thread when we have a stack of them"),
                this._threads.length = 0,
                this._threads.push(t)
            }
        }, {
            key: "canPop",
            get: function() {
                return this.callStack.length > 1
            }
        }, {
            key: "Reset",
            value: function() {
                this._threads = [],
                this._threads.push(new e.Thread),
                this._threads[0].callstack.push(new e.Element(ct.Tunnel,this._startOfRoot))
            }
        }, {
            key: "SetJsonToken",
            value: function(t, n) {
                this._threads.length = 0;
                var r, i = S(t.threads);
                try {
                    for (i.s(); !(r = i.n()).done; ) {
                        var a = r.value
                          , o = new e.Thread(a,n);
                        this._threads.push(o)
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
                this._threadCounter = parseInt(t.threadCounter),
                this._startOfRoot = dt.StartOf(n.rootContentContainer)
            }
        }, {
            key: "WriteJson",
            value: function(t) {
                var e = this;
                t.WriteObject((function(t) {
                    t.WritePropertyStart("threads"),
                    t.WriteArrayStart();
                    var n, r = S(e._threads);
                    try {
                        for (r.s(); !(n = r.n()).done; ) {
                            n.value.WriteJson(t)
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                    t.WriteArrayEnd(),
                    t.WritePropertyEnd(),
                    t.WritePropertyStart("threadCounter"),
                    t.WriteInt(e._threadCounter),
                    t.WritePropertyEnd()
                }
                ))
            }
        }, {
            key: "PushThread",
            value: function() {
                var t = this.currentThread.Copy();
                this._threadCounter++,
                t.threadIndex = this._threadCounter,
                this._threads.push(t)
            }
        }, {
            key: "ForkThread",
            value: function() {
                var t = this.currentThread.Copy();
                return this._threadCounter++,
                t.threadIndex = this._threadCounter,
                t
            }
        }, {
            key: "PopThread",
            value: function() {
                if (!this.canPopThread)
                    throw new Error("Can't pop thread");
                this._threads.splice(this._threads.indexOf(this.currentThread), 1)
            }
        }, {
            key: "canPopThread",
            get: function() {
                return this._threads.length > 1 && !this.elementIsEvaluateFromGame
            }
        }, {
            key: "elementIsEvaluateFromGame",
            get: function() {
                return this.currentElement.type == ct.FunctionEvaluationFromGame
            }
        }, {
            key: "Push",
            value: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                  , i = new e.Element(t,this.currentElement.currentPointer,!1);
                i.evaluationStackHeightWhenPushed = n,
                i.functionStartInOutputStream = r,
                this.callStack.push(i)
            }
        }, {
            key: "CanPop",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return !!this.canPop && (null == t || this.currentElement.type == t)
            }
        }, {
            key: "Pop",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (!this.CanPop(t))
                    throw new Error("Mismatched push/pop in Callstack");
                this.callStack.pop()
            }
        }, {
            key: "GetTemporaryVariableWithName",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                -1 == e && (e = this.currentElementIndex + 1);
                var n = this.callStack[e - 1]
                  , r = q(n.temporaryVariables, t, null);
                return r.exists ? r.result : null
            }
        }, {
            key: "SetTemporaryVariable",
            value: function(t, e, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
                -1 == r && (r = this.currentElementIndex + 1);
                var i = this.callStack[r - 1];
                if (!n && !i.temporaryVariables.get(t))
                    throw new Error("Could not find temporary variable to set: " + t);
                var a = q(i.temporaryVariables, t, null);
                a.exists && Z.RetainListOriginsForAssignment(a.result, e),
                i.temporaryVariables.set(t, e)
            }
        }, {
            key: "ContextForVariableNamed",
            value: function(t) {
                return this.currentElement.temporaryVariables.get(t) ? this.currentElementIndex + 1 : 0
            }
        }, {
            key: "ThreadWithIndex",
            value: function(t) {
                var e = this._threads.filter((function(e) {
                    if (e.threadIndex == t)
                        return e
                }
                ));
                return e.length > 0 ? e[0] : null
            }
        }, {
            key: "callStack",
            get: function() {
                return this.currentThread.callstack
            }
        }, {
            key: "callStackTrace",
            get: function() {
                for (var t = new j, e = 0; e < this._threads.length; e++) {
                    var n = this._threads[e]
                      , r = e == this._threads.length - 1;
                    t.AppendFormat("=== THREAD {0}/{1} {2}===\n", e + 1, this._threads.length, r ? "(current) " : "");
                    for (var i = 0; i < n.callstack.length; i++) {
                        n.callstack[i].type == ct.Function ? t.Append("  [FUNCTION] ") : t.Append("  [TUNNEL] ");
                        var a = n.callstack[i].currentPointer;
                        if (!a.isNull) {
                            if (t.Append("<SOMEWHERE IN "),
                            null === a.container)
                                return L("pointer.container");
                            t.Append(a.container.path.toString()),
                            t.AppendLine(">")
                        }
                    }
                }
                return t.toString()
            }
        }]),
        e
    }();
    !function(t) {
        var e = function() {
            function t(e, r) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                n(this, t),
                this.evaluationStackHeightWhenPushed = 0,
                this.functionStartInOutputStream = 0,
                this.currentPointer = r.copy(),
                this.inExpressionEvaluation = i,
                this.temporaryVariables = new Map,
                this.type = e
            }
            return i(t, [{
                key: "Copy",
                value: function() {
                    var e = new t(this.type,this.currentPointer,this.inExpressionEvaluation);
                    return e.temporaryVariables = new Map(this.temporaryVariables),
                    e.evaluationStackHeightWhenPushed = this.evaluationStackHeightWhenPushed,
                    e.functionStartInOutputStream = this.functionStartInOutputStream,
                    e
                }
            }]),
            t
        }();
        t.Element = e;
        var r = function() {
            function t() {
                if (n(this, t),
                this.threadIndex = 0,
                this.previousPointer = dt.Null,
                this.callstack = [],
                arguments[0] && arguments[1]) {
                    var r = arguments[0]
                      , i = arguments[1];
                    this.threadIndex = parseInt(r.threadIndex);
                    var a, o = r.callstack, s = S(o);
                    try {
                        for (s.s(); !(a = s.n()).done; ) {
                            var l = a.value
                              , u = l
                              , c = parseInt(u.type)
                              , h = dt.Null
                              , f = void 0
                              , d = u.cPath;
                            if (void 0 !== d) {
                                f = d.toString();
                                var v = i.ContentAtPath(new R(f));
                                if (h.container = v.container,
                                h.index = parseInt(u.idx),
                                null == v.obj)
                                    throw new Error("When loading state, internal story location couldn't be found: " + f + ". Has the story changed since this save data was created?");
                                if (v.approximate) {
                                    if (null === h.container)
                                        return L("pointer.container");
                                    i.Warning("When loading state, exact internal story location couldn't be found: '" + f + "', so it was approximated to '" + h.container.path.toString() + "' to recover. Has the story changed since this save data was created?")
                                }
                            }
                            var p = !!u.exp
                              , m = new e(c,h,p)
                              , g = u.temp;
                            void 0 !== g ? m.temporaryVariables = fe.JObjectToDictionaryRuntimeObjs(g) : m.temporaryVariables.clear(),
                            this.callstack.push(m)
                        }
                    } catch (t) {
                        s.e(t)
                    } finally {
                        s.f()
                    }
                    var y = r.previousContentObject;
                    if (void 0 !== y) {
                        var C = new R(y.toString());
                        this.previousPointer = i.PointerAtPath(C)
                    }
                }
            }
            return i(t, [{
                key: "Copy",
                value: function() {
                    var e = new t;
                    e.threadIndex = this.threadIndex;
                    var n, r = S(this.callstack);
                    try {
                        for (r.s(); !(n = r.n()).done; ) {
                            var i = n.value;
                            e.callstack.push(i.Copy())
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                    return e.previousPointer = this.previousPointer.copy(),
                    e
                }
            }, {
                key: "WriteJson",
                value: function(t) {
                    t.WriteObjectStart(),
                    t.WritePropertyStart("callstack"),
                    t.WriteArrayStart();
                    var e, n = S(this.callstack);
                    try {
                        for (n.s(); !(e = n.n()).done; ) {
                            var r = e.value;
                            if (t.WriteObjectStart(),
                            !r.currentPointer.isNull) {
                                if (null === r.currentPointer.container)
                                    return L("el.currentPointer.container");
                                t.WriteProperty("cPath", r.currentPointer.container.path.componentsString),
                                t.WriteIntProperty("idx", r.currentPointer.index)
                            }
                            t.WriteProperty("exp", r.inExpressionEvaluation),
                            t.WriteIntProperty("type", r.type),
                            r.temporaryVariables.size > 0 && (t.WritePropertyStart("temp"),
                            fe.WriteDictionaryRuntimeObjs(t, r.temporaryVariables),
                            t.WritePropertyEnd()),
                            t.WriteObjectEnd()
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    if (t.WriteArrayEnd(),
                    t.WritePropertyEnd(),
                    t.WriteIntProperty("threadIndex", this.threadIndex),
                    !this.previousPointer.isNull) {
                        var i = this.previousPointer.Resolve();
                        if (null === i)
                            return L("this.previousPointer.Resolve()");
                        t.WriteProperty("previousContentObject", i.path.toString())
                    }
                    t.WriteObjectEnd()
                }
            }]),
            t
        }();
        t.Thread = r
    }(de || (de = {}));
    var ve = function(t) {
        a(r, t);
        var e = d(r);
        function r(t, i) {
            var a;
            n(this, r),
            (a = e.call(this)).variableChangedEventCallbacks = [],
            a.patch = null,
            a._batchObservingVariableChanges = !1,
            a._defaultGlobalVariables = new Map,
            a._changedVariablesForBatchObs = new Set,
            a._globalVariables = new Map,
            a._callStack = t,
            a._listDefsOrigin = i;
            try {
                return f(a, new Proxy(h(a),{
                    get: function(t, e) {
                        return e in t ? t[e] : t.$(e)
                    },
                    set: function(t, e, n) {
                        return e in t ? t[e] = n : t.$(e, n),
                        !0
                    }
                }))
            } catch (t) {}
            return a
        }
        return i(r, [{
            key: "variableChangedEvent",
            value: function(t, e) {
                var n, r = S(this.variableChangedEventCallbacks);
                try {
                    for (r.s(); !(n = r.n()).done; ) {
                        (0,
                        n.value)(t, e)
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
            }
        }, {
            key: "batchObservingVariableChanges",
            get: function() {
                return this._batchObservingVariableChanges
            },
            set: function(t) {
                if (this._batchObservingVariableChanges = t,
                t)
                    this._changedVariablesForBatchObs = new Set;
                else if (null != this._changedVariablesForBatchObs) {
                    var e, n = S(this._changedVariablesForBatchObs);
                    try {
                        for (n.s(); !(e = n.n()).done; ) {
                            var r = e.value
                              , i = this._globalVariables.get(r);
                            i ? this.variableChangedEvent(r, i) : L("currentValue")
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    this._changedVariablesForBatchObs = null
                }
            }
        }, {
            key: "callStack",
            get: function() {
                return this._callStack
            },
            set: function(t) {
                this._callStack = t
            }
        }, {
            key: "$",
            value: function(t, e) {
                if (void 0 === e) {
                    var n = null;
                    return null !== this.patch && (n = this.patch.TryGetGlobal(t, null)).exists ? n.result.valueObject : (void 0 === (n = this._globalVariables.get(t)) && (n = this._defaultGlobalVariables.get(t)),
                    void 0 !== n ? n.valueObject : null)
                }
                if (void 0 === this._defaultGlobalVariables.get(t))
                    throw new G("Cannot assign to a variable (" + t + ") that hasn't been declared in the story");
                var r = K.Create(e);
                if (null == r)
                    throw null == e ? new Error("Cannot pass null to VariableState") : new Error("Invalid value passed to VariableState: " + e.toString());
                this.SetGlobal(t, r)
            }
        }, {
            key: "ApplyPatch",
            value: function() {
                if (null === this.patch)
                    return L("this.patch");
                var t, e = S(this.patch.globals);
                try {
                    for (e.s(); !(t = e.n()).done; ) {
                        var n = m(t.value, 2)
                          , r = n[0]
                          , i = n[1];
                        this._globalVariables.set(r, i)
                    }
                } catch (t) {
                    e.e(t)
                } finally {
                    e.f()
                }
                if (null !== this._changedVariablesForBatchObs) {
                    var a, o = S(this.patch.changedVariables);
                    try {
                        for (o.s(); !(a = o.n()).done; ) {
                            var s = a.value;
                            this._changedVariablesForBatchObs.add(s)
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                }
                this.patch = null
            }
        }, {
            key: "SetJsonToken",
            value: function(t) {
                this._globalVariables.clear();
                var e, n = S(this._defaultGlobalVariables);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var r = m(e.value, 2)
                          , i = r[0]
                          , a = r[1]
                          , o = t[i];
                        if (void 0 !== o) {
                            var s = fe.JTokenToRuntimeObject(o);
                            if (null === s)
                                return L("tokenInkObject");
                            this._globalVariables.set(i, s)
                        } else
                            this._globalVariables.set(i, a)
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
            }
        }, {
            key: "WriteJson",
            value: function(t) {
                t.WriteObjectStart();
                var e, n = S(this._globalVariables);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var i = m(e.value, 2)
                          , a = i[0]
                          , o = i[1]
                          , s = a
                          , l = o;
                        if (r.dontSaveDefaultValues && this._defaultGlobalVariables.has(s)) {
                            var u = this._defaultGlobalVariables.get(s);
                            if (this.RuntimeObjectsEqual(l, u))
                                continue
                        }
                        t.WritePropertyStart(s),
                        fe.WriteRuntimeObject(t, l),
                        t.WritePropertyEnd()
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                t.WriteObjectEnd()
            }
        }, {
            key: "RuntimeObjectsEqual",
            value: function(t, e) {
                if (null === t)
                    return L("obj1");
                if (null === e)
                    return L("obj2");
                if (t.constructor !== e.constructor)
                    return !1;
                var n = _(t, H);
                if (null !== n)
                    return n.value === T(e, H).value;
                var r = _(t, J);
                if (null !== r)
                    return r.value === T(e, J).value;
                var i = _(t, z);
                if (null !== i)
                    return i.value === T(e, z).value;
                var a = _(t, K)
                  , o = _(e, K);
                if (null !== a && null !== o)
                    return N(a.valueObject) && N(o.valueObject) ? a.valueObject.Equals(o.valueObject) : a.valueObject === o.valueObject;
                throw new Error("FastRoughDefinitelyEquals: Unsupported runtime object type: " + t.constructor.name)
            }
        }, {
            key: "GetVariableWithName",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1
                  , n = this.GetRawVariableWithName(t, e)
                  , r = _(n, Y);
                return null !== r && (n = this.ValueAtVariablePointer(r)),
                n
            }
        }, {
            key: "TryGetDefaultVariableValue",
            value: function(t) {
                var e = q(this._defaultGlobalVariables, t, null);
                return e.exists ? e.result : null
            }
        }, {
            key: "GlobalVariableExistsWithName",
            value: function(t) {
                return this._globalVariables.has(t) || null !== this._defaultGlobalVariables && this._defaultGlobalVariables.has(t)
            }
        }, {
            key: "GetRawVariableWithName",
            value: function(t, e) {
                if (0 == e || -1 == e) {
                    var n = null;
                    if (null !== this.patch && (n = this.patch.TryGetGlobal(t, null)).exists)
                        return n.result;
                    if ((n = q(this._globalVariables, t, null)).exists)
                        return n.result;
                    if (null !== this._defaultGlobalVariables && (n = q(this._defaultGlobalVariables, t, null)).exists)
                        return n.result;
                    if (null === this._listDefsOrigin)
                        return L("VariablesState._listDefsOrigin");
                    var r = this._listDefsOrigin.FindSingleItemListWithName(t);
                    if (r)
                        return r
                }
                return this._callStack.GetTemporaryVariableWithName(t, e)
            }
        }, {
            key: "ValueAtVariablePointer",
            value: function(t) {
                return this.GetVariableWithName(t.variableName, t.contextIndex)
            }
        }, {
            key: "Assign",
            value: function(t, e) {
                var n = t.variableName;
                if (null === n)
                    return L("name");
                var r = -1
                  , i = !1;
                if (i = t.isNewDeclaration ? t.isGlobal : this.GlobalVariableExistsWithName(n),
                t.isNewDeclaration) {
                    var a = _(e, Y);
                    if (null !== a)
                        e = this.ResolveVariablePointer(a)
                } else {
                    var o = null;
                    do {
                        null != (o = _(this.GetRawVariableWithName(n, r), Y)) && (n = o.variableName,
                        i = 0 == (r = o.contextIndex))
                    } while (null != o)
                }
                i ? this.SetGlobal(n, e) : this._callStack.SetTemporaryVariable(n, e, t.isNewDeclaration, r)
            }
        }, {
            key: "SnapshotDefaultGlobals",
            value: function() {
                this._defaultGlobalVariables = new Map(this._globalVariables)
            }
        }, {
            key: "RetainListOriginsForAssignment",
            value: function(t, e) {
                var n = T(t, Z)
                  , r = T(e, Z);
                n.value && r.value && 0 == r.value.Count && r.value.SetInitialOriginNames(n.value.originNames)
            }
        }, {
            key: "SetGlobal",
            value: function(t, e) {
                var n = null;
                if (null === this.patch && (n = q(this._globalVariables, t, null)),
                null !== this.patch && ((n = this.patch.TryGetGlobal(t, null)).exists || (n = q(this._globalVariables, t, null))),
                Z.RetainListOriginsForAssignment(n.result, e),
                null === t)
                    return L("variableName");
                if (null !== this.patch ? this.patch.SetGlobal(t, e) : this._globalVariables.set(t, e),
                null !== this.variableChangedEvent && null !== n && e !== n.result)
                    if (this.batchObservingVariableChanges) {
                        if (null === this._changedVariablesForBatchObs)
                            return L("this._changedVariablesForBatchObs");
                        null !== this.patch ? this.patch.AddChangedVariable(t) : null !== this._changedVariablesForBatchObs && this._changedVariablesForBatchObs.add(t)
                    } else
                        this.variableChangedEvent(t, e)
            }
        }, {
            key: "ResolveVariablePointer",
            value: function(t) {
                var e = t.contextIndex;
                -1 == e && (e = this.GetContextIndexOfVariableNamed(t.variableName));
                var n = _(this.GetRawVariableWithName(t.variableName, e), Y);
                return null != n ? n : new Y(t.variableName,e)
            }
        }, {
            key: "GetContextIndexOfVariableNamed",
            value: function(t) {
                return this.GlobalVariableExistsWithName(t) ? 0 : this._callStack.currentElementIndex
            }
        }, {
            key: "ObserveVariableChange",
            value: function(t) {
                this.variableChangedEventCallbacks.push(t)
            }
        }]),
        r
    }(function() {
        return i((function t() {
            n(this, t)
        }
        ))
    }());
    ve.dontSaveDefaultValues = !0;
    var pe = function() {
        function t(e) {
            n(this, t),
            this.seed = e % 2147483647,
            this.seed <= 0 && (this.seed += 2147483646)
        }
        return i(t, [{
            key: "next",
            value: function() {
                return this.seed = 48271 * this.seed % 2147483647
            }
        }, {
            key: "nextFloat",
            value: function() {
                return (this.next() - 1) / 2147483646
            }
        }]),
        t
    }()
      , me = function() {
        function t() {
            if (n(this, t),
            this._changedVariables = new Set,
            this._visitCounts = new Map,
            this._turnIndices = new Map,
            1 === arguments.length && null !== arguments[0]) {
                var e = arguments[0];
                this._globals = new Map(e._globals),
                this._changedVariables = new Set(e._changedVariables),
                this._visitCounts = new Map(e._visitCounts),
                this._turnIndices = new Map(e._turnIndices)
            } else
                this._globals = new Map,
                this._changedVariables = new Set,
                this._visitCounts = new Map,
                this._turnIndices = new Map
        }
        return i(t, [{
            key: "globals",
            get: function() {
                return this._globals
            }
        }, {
            key: "changedVariables",
            get: function() {
                return this._changedVariables
            }
        }, {
            key: "visitCounts",
            get: function() {
                return this._visitCounts
            }
        }, {
            key: "turnIndices",
            get: function() {
                return this._turnIndices
            }
        }, {
            key: "TryGetGlobal",
            value: function(t, e) {
                return null !== t && this._globals.has(t) ? {
                    result: this._globals.get(t),
                    exists: !0
                } : {
                    result: e,
                    exists: !1
                }
            }
        }, {
            key: "SetGlobal",
            value: function(t, e) {
                this._globals.set(t, e)
            }
        }, {
            key: "AddChangedVariable",
            value: function(t) {
                return this._changedVariables.add(t)
            }
        }, {
            key: "TryGetVisitCount",
            value: function(t, e) {
                return this._visitCounts.has(t) ? {
                    result: this._visitCounts.get(t),
                    exists: !0
                } : {
                    result: e,
                    exists: !1
                }
            }
        }, {
            key: "SetVisitCount",
            value: function(t, e) {
                this._visitCounts.set(t, e)
            }
        }, {
            key: "SetTurnIndex",
            value: function(t, e) {
                this._turnIndices.set(t, e)
            }
        }, {
            key: "TryGetTurnIndex",
            value: function(t, e) {
                return this._turnIndices.has(t) ? {
                    result: this._turnIndices.get(t),
                    exists: !0
                } : {
                    result: e,
                    exists: !1
                }
            }
        }]),
        t
    }()
      , ge = function() {
        function t() {
            n(this, t)
        }
        return i(t, null, [{
            key: "TextToDictionary",
            value: function(e) {
                return new t.Reader(e).ToDictionary()
            }
        }, {
            key: "TextToArray",
            value: function(e) {
                return new t.Reader(e).ToArray()
            }
        }]),
        t
    }();
    !function(t) {
        var e = function() {
            function t(e) {
                n(this, t),
                this._rootObject = JSON.parse(e)
            }
            return i(t, [{
                key: "ToDictionary",
                value: function() {
                    return this._rootObject
                }
            }, {
                key: "ToArray",
                value: function() {
                    return this._rootObject
                }
            }]),
            t
        }();
        t.Reader = e;
        var r = function() {
            function e() {
                n(this, e),
                this._currentPropertyName = null,
                this._currentString = null,
                this._stateStack = [],
                this._collectionStack = [],
                this._propertyNameStack = [],
                this._jsonObject = null
            }
            return i(e, [{
                key: "WriteObject",
                value: function(t) {
                    this.WriteObjectStart(),
                    t(this),
                    this.WriteObjectEnd()
                }
            }, {
                key: "WriteObjectStart",
                value: function() {
                    this.StartNewObject(!0);
                    var e = {};
                    if (this.state === t.Writer.State.Property) {
                        this.Assert(null !== this.currentCollection),
                        this.Assert(null !== this.currentPropertyName);
                        var n = this._propertyNameStack.pop();
                        this.currentCollection[n] = e,
                        this._collectionStack.push(e)
                    } else
                        this.state === t.Writer.State.Array ? (this.Assert(null !== this.currentCollection),
                        this.currentCollection.push(e),
                        this._collectionStack.push(e)) : (this.Assert(this.state === t.Writer.State.None),
                        this._jsonObject = e,
                        this._collectionStack.push(e));
                    this._stateStack.push(new t.Writer.StateElement(t.Writer.State.Object))
                }
            }, {
                key: "WriteObjectEnd",
                value: function() {
                    this.Assert(this.state === t.Writer.State.Object),
                    this._collectionStack.pop(),
                    this._stateStack.pop()
                }
            }, {
                key: "WriteProperty",
                value: function(t, e) {
                    if (this.WritePropertyStart(t),
                    arguments[1]instanceof Function) {
                        var n = arguments[1];
                        n(this)
                    } else {
                        var r = arguments[1];
                        this.Write(r)
                    }
                    this.WritePropertyEnd()
                }
            }, {
                key: "WriteIntProperty",
                value: function(t, e) {
                    this.WritePropertyStart(t),
                    this.WriteInt(e),
                    this.WritePropertyEnd()
                }
            }, {
                key: "WriteFloatProperty",
                value: function(t, e) {
                    this.WritePropertyStart(t),
                    this.WriteFloat(e),
                    this.WritePropertyEnd()
                }
            }, {
                key: "WritePropertyStart",
                value: function(e) {
                    this.Assert(this.state === t.Writer.State.Object),
                    this._propertyNameStack.push(e),
                    this.IncrementChildCount(),
                    this._stateStack.push(new t.Writer.StateElement(t.Writer.State.Property))
                }
            }, {
                key: "WritePropertyEnd",
                value: function() {
                    this.Assert(this.state === t.Writer.State.Property),
                    this.Assert(1 === this.childCount),
                    this._stateStack.pop()
                }
            }, {
                key: "WritePropertyNameStart",
                value: function() {
                    this.Assert(this.state === t.Writer.State.Object),
                    this.IncrementChildCount(),
                    this._currentPropertyName = "",
                    this._stateStack.push(new t.Writer.StateElement(t.Writer.State.Property)),
                    this._stateStack.push(new t.Writer.StateElement(t.Writer.State.PropertyName))
                }
            }, {
                key: "WritePropertyNameEnd",
                value: function() {
                    this.Assert(this.state === t.Writer.State.PropertyName),
                    this.Assert(null !== this._currentPropertyName),
                    this._propertyNameStack.push(this._currentPropertyName),
                    this._currentPropertyName = null,
                    this._stateStack.pop()
                }
            }, {
                key: "WritePropertyNameInner",
                value: function(e) {
                    this.Assert(this.state === t.Writer.State.PropertyName),
                    this.Assert(null !== this._currentPropertyName),
                    this._currentPropertyName += e
                }
            }, {
                key: "WriteArrayStart",
                value: function() {
                    this.StartNewObject(!0);
                    var e = [];
                    if (this.state === t.Writer.State.Property) {
                        this.Assert(null !== this.currentCollection),
                        this.Assert(null !== this.currentPropertyName);
                        var n = this._propertyNameStack.pop();
                        this.currentCollection[n] = e,
                        this._collectionStack.push(e)
                    } else
                        this.state === t.Writer.State.Array ? (this.Assert(null !== this.currentCollection),
                        this.currentCollection.push(e),
                        this._collectionStack.push(e)) : (this.Assert(this.state === t.Writer.State.None),
                        this._jsonObject = e,
                        this._collectionStack.push(e));
                    this._stateStack.push(new t.Writer.StateElement(t.Writer.State.Array))
                }
            }, {
                key: "WriteArrayEnd",
                value: function() {
                    this.Assert(this.state === t.Writer.State.Array),
                    this._collectionStack.pop(),
                    this._stateStack.pop()
                }
            }, {
                key: "Write",
                value: function(t) {
                    null !== t ? (this.StartNewObject(!1),
                    this._addToCurrentObject(t)) : console.error("Warning: trying to write a null value")
                }
            }, {
                key: "WriteBool",
                value: function(t) {
                    null !== t && (this.StartNewObject(!1),
                    this._addToCurrentObject(t))
                }
            }, {
                key: "WriteInt",
                value: function(t) {
                    null !== t && (this.StartNewObject(!1),
                    this._addToCurrentObject(Math.floor(t)))
                }
            }, {
                key: "WriteFloat",
                value: function(t) {
                    null !== t && (this.StartNewObject(!1),
                    t == Number.POSITIVE_INFINITY ? this._addToCurrentObject(34e37) : t == Number.NEGATIVE_INFINITY ? this._addToCurrentObject(-34e37) : isNaN(t) ? this._addToCurrentObject(0) : this._addToCurrentObject(t))
                }
            }, {
                key: "WriteNull",
                value: function() {
                    this.StartNewObject(!1),
                    this._addToCurrentObject(null)
                }
            }, {
                key: "WriteStringStart",
                value: function() {
                    this.StartNewObject(!1),
                    this._currentString = "",
                    this._stateStack.push(new t.Writer.StateElement(t.Writer.State.String))
                }
            }, {
                key: "WriteStringEnd",
                value: function() {
                    this.Assert(this.state == t.Writer.State.String),
                    this._stateStack.pop(),
                    this._addToCurrentObject(this._currentString),
                    this._currentString = null
                }
            }, {
                key: "WriteStringInner",
                value: function(e) {
                    this.Assert(this.state === t.Writer.State.String),
                    null !== e ? this._currentString += e : console.error("Warning: trying to write a null string")
                }
            }, {
                key: "toString",
                value: function() {
                    return null === this._jsonObject ? "" : JSON.stringify(this._jsonObject)
                }
            }, {
                key: "StartNewObject",
                value: function(e) {
                    e ? this.Assert(this.state === t.Writer.State.None || this.state === t.Writer.State.Property || this.state === t.Writer.State.Array) : this.Assert(this.state === t.Writer.State.Property || this.state === t.Writer.State.Array),
                    this.state === t.Writer.State.Property && this.Assert(0 === this.childCount),
                    this.state !== t.Writer.State.Array && this.state !== t.Writer.State.Property || this.IncrementChildCount()
                }
            }, {
                key: "state",
                get: function() {
                    return this._stateStack.length > 0 ? this._stateStack[this._stateStack.length - 1].type : t.Writer.State.None
                }
            }, {
                key: "childCount",
                get: function() {
                    return this._stateStack.length > 0 ? this._stateStack[this._stateStack.length - 1].childCount : 0
                }
            }, {
                key: "currentCollection",
                get: function() {
                    return this._collectionStack.length > 0 ? this._collectionStack[this._collectionStack.length - 1] : null
                }
            }, {
                key: "currentPropertyName",
                get: function() {
                    return this._propertyNameStack.length > 0 ? this._propertyNameStack[this._propertyNameStack.length - 1] : null
                }
            }, {
                key: "IncrementChildCount",
                value: function() {
                    this.Assert(this._stateStack.length > 0);
                    var t = this._stateStack.pop();
                    t.childCount++,
                    this._stateStack.push(t)
                }
            }, {
                key: "Assert",
                value: function(t) {
                    if (!t)
                        throw Error("Assert failed while writing JSON")
                }
            }, {
                key: "_addToCurrentObject",
                value: function(e) {
                    this.Assert(null !== this.currentCollection),
                    this.state === t.Writer.State.Array ? (this.Assert(Array.isArray(this.currentCollection)),
                    this.currentCollection.push(e)) : this.state === t.Writer.State.Property && (this.Assert(!Array.isArray(this.currentCollection)),
                    this.Assert(null !== this.currentPropertyName),
                    this.currentCollection[this.currentPropertyName] = e,
                    this._propertyNameStack.pop())
                }
            }]),
            e
        }();
        t.Writer = r,
        function(e) {
            var r;
            (r = e.State || (e.State = {}))[r.None = 0] = "None",
            r[r.Object = 1] = "Object",
            r[r.Array = 2] = "Array",
            r[r.Property = 3] = "Property",
            r[r.PropertyName = 4] = "PropertyName",
            r[r.String = 5] = "String";
            var a = i((function e(r) {
                n(this, e),
                this.type = t.Writer.State.None,
                this.childCount = 0,
                this.type = r
            }
            ));
            e.StateElement = a
        }(r = t.Writer || (t.Writer = {}))
    }(ge || (ge = {}));
    var ye, Ce = function() {
        function t() {
            n(this, t);
            var e = arguments[0]
              , r = arguments[1];
            if (this.name = e,
            this.callStack = new de(r),
            arguments[2]) {
                var i = arguments[2];
                this.callStack.SetJsonToken(i.callstack, r),
                this.outputStream = fe.JArrayToRuntimeObjList(i.outputStream),
                this.currentChoices = fe.JArrayToRuntimeObjList(i.currentChoices);
                var a = i.choiceThreads;
                void 0 !== a && this.LoadFlowChoiceThreads(a, r)
            } else
                this.outputStream = [],
                this.currentChoices = []
        }
        return i(t, [{
            key: "WriteJson",
            value: function(t) {
                var e = this;
                t.WriteObjectStart(),
                t.WriteProperty("callstack", (function(t) {
                    return e.callStack.WriteJson(t)
                }
                )),
                t.WriteProperty("outputStream", (function(t) {
                    return fe.WriteListRuntimeObjs(t, e.outputStream)
                }
                ));
                var n, r = !1, i = S(this.currentChoices);
                try {
                    for (i.s(); !(n = i.n()).done; ) {
                        var a = n.value;
                        if (null === a.threadAtGeneration)
                            return L("c.threadAtGeneration");
                        a.originalThreadIndex = a.threadAtGeneration.threadIndex,
                        null === this.callStack.ThreadWithIndex(a.originalThreadIndex) && (r || (r = !0,
                        t.WritePropertyStart("choiceThreads"),
                        t.WriteObjectStart()),
                        t.WritePropertyStart(a.originalThreadIndex),
                        a.threadAtGeneration.WriteJson(t),
                        t.WritePropertyEnd())
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
                r && (t.WriteObjectEnd(),
                t.WritePropertyEnd()),
                t.WriteProperty("currentChoices", (function(t) {
                    t.WriteArrayStart();
                    var n, r = S(e.currentChoices);
                    try {
                        for (r.s(); !(n = r.n()).done; ) {
                            var i = n.value;
                            fe.WriteChoice(t, i)
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                    t.WriteArrayEnd()
                }
                )),
                t.WriteObjectEnd()
            }
        }, {
            key: "LoadFlowChoiceThreads",
            value: function(t, e) {
                var n, r = S(this.currentChoices);
                try {
                    for (r.s(); !(n = r.n()).done; ) {
                        var i = n.value
                          , a = this.callStack.ThreadWithIndex(i.originalThreadIndex);
                        if (null !== a)
                            i.threadAtGeneration = a.Copy();
                        else {
                            var o = t["".concat(i.originalThreadIndex)];
                            i.threadAtGeneration = new de.Thread(o,e)
                        }
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
            }
        }]),
        t
    }(), Se = function() {
        function e(t) {
            n(this, e),
            this.kInkSaveStateVersion = 10,
            this.kMinCompatibleLoadVersion = 8,
            this.onDidLoadState = null,
            this._currentErrors = null,
            this._currentWarnings = null,
            this.divertedPointer = dt.Null,
            this._currentTurnIndex = 0,
            this.storySeed = 0,
            this.previousRandom = 0,
            this.didSafeExit = !1,
            this._currentText = null,
            this._currentTags = null,
            this._outputStreamTextDirty = !0,
            this._outputStreamTagsDirty = !0,
            this._patch = null,
            this._aliveFlowNames = null,
            this._namedFlows = null,
            this.kDefaultFlowName = "DEFAULT_FLOW",
            this._aliveFlowNamesDirty = !0,
            this.story = t,
            this._currentFlow = new Ce(this.kDefaultFlowName,t),
            this.OutputStreamDirty(),
            this._aliveFlowNamesDirty = !0,
            this._evaluationStack = [],
            this._variablesState = new ve(this.callStack,t.listDefinitions),
            this._visitCounts = new Map,
            this._turnIndices = new Map,
            this.currentTurnIndex = -1;
            var r = (new Date).getTime();
            this.storySeed = new pe(r).next() % 100,
            this.previousRandom = 0,
            this.GoToStart()
        }
        return i(e, [{
            key: "ToJson",
            value: function() {
                var t = new ge.Writer;
                return this.WriteJson(t),
                t.toString()
            }
        }, {
            key: "toJson",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return this.ToJson(t)
            }
        }, {
            key: "LoadJson",
            value: function(t) {
                var e = ge.TextToDictionary(t);
                this.LoadJsonObj(e),
                null !== this.onDidLoadState && this.onDidLoadState()
            }
        }, {
            key: "VisitCountAtPathString",
            value: function(t) {
                var e;
                if (null !== this._patch) {
                    var n = this.story.ContentAtPath(new R(t)).container;
                    if (null === n)
                        throw new Error("Content at path not found: " + t);
                    if ((e = this._patch.TryGetVisitCount(n, 0)).exists)
                        return e.result
                }
                return (e = q(this._visitCounts, t, null)).exists ? e.result : 0
            }
        }, {
            key: "VisitCountForContainer",
            value: function(t) {
                if (null === t)
                    return L("container");
                if (!t.visitsShouldBeCounted)
                    return this.story.Error("Read count for target (" + t.name + " - on " + t.debugMetadata + ") unknown. The story may need to be compiled with countAllVisits flag (-c)."),
                    0;
                if (null !== this._patch) {
                    var e = this._patch.TryGetVisitCount(t, 0);
                    if (e.exists)
                        return e.result
                }
                var n = t.path.toString()
                  , r = q(this._visitCounts, n, null);
                return r.exists ? r.result : 0
            }
        }, {
            key: "IncrementVisitCountForContainer",
            value: function(t) {
                if (null !== this._patch) {
                    var e = this.VisitCountForContainer(t);
                    return e++,
                    void this._patch.SetVisitCount(t, e)
                }
                var n = t.path.toString()
                  , r = q(this._visitCounts, n, null);
                r.exists ? this._visitCounts.set(n, r.result + 1) : this._visitCounts.set(n, 1)
            }
        }, {
            key: "RecordTurnIndexVisitToContainer",
            value: function(t) {
                if (null === this._patch) {
                    var e = t.path.toString();
                    this._turnIndices.set(e, this.currentTurnIndex)
                } else
                    this._patch.SetTurnIndex(t, this.currentTurnIndex)
            }
        }, {
            key: "TurnsSinceForContainer",
            value: function(t) {
                if (t.turnIndexShouldBeCounted || this.story.Error("TURNS_SINCE() for target (" + t.name + " - on " + t.debugMetadata + ") unknown. The story may need to be compiled with countAllVisits flag (-c)."),
                null !== this._patch) {
                    var e = this._patch.TryGetTurnIndex(t, 0);
                    if (e.exists)
                        return this.currentTurnIndex - e.result
                }
                var n = t.path.toString()
                  , r = q(this._turnIndices, n, 0);
                return r.exists ? this.currentTurnIndex - r.result : -1
            }
        }, {
            key: "callstackDepth",
            get: function() {
                return this.callStack.depth
            }
        }, {
            key: "outputStream",
            get: function() {
                return this._currentFlow.outputStream
            }
        }, {
            key: "currentChoices",
            get: function() {
                return this.canContinue ? [] : this._currentFlow.currentChoices
            }
        }, {
            key: "generatedChoices",
            get: function() {
                return this._currentFlow.currentChoices
            }
        }, {
            key: "currentErrors",
            get: function() {
                return this._currentErrors
            }
        }, {
            key: "currentWarnings",
            get: function() {
                return this._currentWarnings
            }
        }, {
            key: "variablesState",
            get: function() {
                return this._variablesState
            },
            set: function(t) {
                this._variablesState = t
            }
        }, {
            key: "callStack",
            get: function() {
                return this._currentFlow.callStack
            }
        }, {
            key: "evaluationStack",
            get: function() {
                return this._evaluationStack
            }
        }, {
            key: "currentTurnIndex",
            get: function() {
                return this._currentTurnIndex
            },
            set: function(t) {
                this._currentTurnIndex = t
            }
        }, {
            key: "currentPathString",
            get: function() {
                var t = this.currentPointer;
                return t.isNull ? null : null === t.path ? L("pointer.path") : t.path.toString()
            }
        }, {
            key: "currentPointer",
            get: function() {
                return this.callStack.currentElement.currentPointer.copy()
            },
            set: function(t) {
                this.callStack.currentElement.currentPointer = t.copy()
            }
        }, {
            key: "previousPointer",
            get: function() {
                return this.callStack.currentThread.previousPointer.copy()
            },
            set: function(t) {
                this.callStack.currentThread.previousPointer = t.copy()
            }
        }, {
            key: "canContinue",
            get: function() {
                return !this.currentPointer.isNull && !this.hasError
            }
        }, {
            key: "hasError",
            get: function() {
                return null != this.currentErrors && this.currentErrors.length > 0
            }
        }, {
            key: "hasWarning",
            get: function() {
                return null != this.currentWarnings && this.currentWarnings.length > 0
            }
        }, {
            key: "currentText",
            get: function() {
                if (this._outputStreamTextDirty) {
                    var t, e = new j, n = !1, r = S(this.outputStream);
                    try {
                        for (r.s(); !(t = r.n()).done; ) {
                            var i = t.value
                              , a = _(i, $);
                            if (n || null === a) {
                                var o = _(i, et);
                                null !== o && (o.commandType == et.CommandType.BeginTag ? n = !0 : o.commandType == et.CommandType.EndTag && (n = !1))
                            } else
                                e.Append(a.value)
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                    this._currentText = this.CleanOutputWhitespace(e.toString()),
                    this._outputStreamTextDirty = !1
                }
                return this._currentText
            }
        }, {
            key: "CleanOutputWhitespace",
            value: function(t) {
                for (var e = new j, n = -1, r = 0, i = 0; i < t.length; i++) {
                    var a = t.charAt(i)
                      , o = " " == a || "\t" == a;
                    o && -1 == n && (n = i),
                    o || ("\n" != a && n > 0 && n != r && e.Append(" "),
                    n = -1),
                    "\n" == a && (r = i + 1),
                    o || e.Append(a)
                }
                return e.toString()
            }
        }, {
            key: "currentTags",
            get: function() {
                if (this._outputStreamTagsDirty) {
                    this._currentTags = [];
                    var t, e = !1, n = new j, r = S(this.outputStream);
                    try {
                        for (r.s(); !(t = r.n()).done; ) {
                            var i = t.value
                              , a = _(i, et);
                            if (null != a) {
                                if (a.commandType == et.CommandType.BeginTag) {
                                    if (e && n.Length > 0) {
                                        var o = this.CleanOutputWhitespace(n.toString());
                                        this._currentTags.push(o),
                                        n.Clear()
                                    }
                                    e = !0
                                } else if (a.commandType == et.CommandType.EndTag) {
                                    if (n.Length > 0) {
                                        var s = this.CleanOutputWhitespace(n.toString());
                                        this._currentTags.push(s),
                                        n.Clear()
                                    }
                                    e = !1
                                }
                            } else if (e) {
                                var l = _(i, $);
                                null !== l && n.Append(l.value)
                            } else {
                                var u = _(i, ue);
                                null != u && null != u.text && u.text.length > 0 && this._currentTags.push(u.text)
                            }
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                    if (n.Length > 0) {
                        var c = this.CleanOutputWhitespace(n.toString());
                        this._currentTags.push(c),
                        n.Clear()
                    }
                    this._outputStreamTagsDirty = !1
                }
                return this._currentTags
            }
        }, {
            key: "currentFlowName",
            get: function() {
                return this._currentFlow.name
            }
        }, {
            key: "currentFlowIsDefaultFlow",
            get: function() {
                return this._currentFlow.name == this.kDefaultFlowName
            }
        }, {
            key: "aliveFlowNames",
            get: function() {
                if (this._aliveFlowNamesDirty) {
                    if (this._aliveFlowNames = [],
                    null != this._namedFlows) {
                        var t, e = S(this._namedFlows.keys());
                        try {
                            for (e.s(); !(t = e.n()).done; ) {
                                var n = t.value;
                                n != this.kDefaultFlowName && this._aliveFlowNames.push(n)
                            }
                        } catch (t) {
                            e.e(t)
                        } finally {
                            e.f()
                        }
                    }
                    this._aliveFlowNamesDirty = !1
                }
                return this._aliveFlowNames
            }
        }, {
            key: "inExpressionEvaluation",
            get: function() {
                return this.callStack.currentElement.inExpressionEvaluation
            },
            set: function(t) {
                this.callStack.currentElement.inExpressionEvaluation = t
            }
        }, {
            key: "GoToStart",
            value: function() {
                this.callStack.currentElement.currentPointer = dt.StartOf(this.story.mainContentContainer)
            }
        }, {
            key: "SwitchFlow_Internal",
            value: function(t) {
                if (null === t)
                    throw new Error("Must pass a non-null string to Story.SwitchFlow");
                if (null === this._namedFlows && (this._namedFlows = new Map,
                this._namedFlows.set(this.kDefaultFlowName, this._currentFlow)),
                t !== this._currentFlow.name) {
                    var e, n = q(this._namedFlows, t, null);
                    n.exists ? e = n.result : (e = new Ce(t,this.story),
                    this._namedFlows.set(t, e),
                    this._aliveFlowNamesDirty = !0),
                    this._currentFlow = e,
                    this.variablesState.callStack = this._currentFlow.callStack,
                    this.OutputStreamDirty()
                }
            }
        }, {
            key: "SwitchToDefaultFlow_Internal",
            value: function() {
                null !== this._namedFlows && this.SwitchFlow_Internal(this.kDefaultFlowName)
            }
        }, {
            key: "RemoveFlow_Internal",
            value: function(t) {
                if (null === t)
                    throw new Error("Must pass a non-null string to Story.DestroyFlow");
                if (t === this.kDefaultFlowName)
                    throw new Error("Cannot destroy default flow");
                if (this._currentFlow.name === t && this.SwitchToDefaultFlow_Internal(),
                null === this._namedFlows)
                    return L("this._namedFlows");
                this._namedFlows.delete(t),
                this._aliveFlowNamesDirty = !0
            }
        }, {
            key: "CopyAndStartPatching",
            value: function() {
                var t, n, r, i, a, o = new e(this.story);
                if (o._patch = new me(this._patch),
                o._currentFlow.name = this._currentFlow.name,
                o._currentFlow.callStack = new de(this._currentFlow.callStack),
                (t = o._currentFlow.currentChoices).push.apply(t, g(this._currentFlow.currentChoices)),
                (n = o._currentFlow.outputStream).push.apply(n, g(this._currentFlow.outputStream)),
                o.OutputStreamDirty(),
                null !== this._namedFlows) {
                    o._namedFlows = new Map;
                    var s, l = S(this._namedFlows);
                    try {
                        for (l.s(); !(s = l.n()).done; ) {
                            var u = m(s.value, 2)
                              , c = u[0]
                              , h = u[1];
                            o._namedFlows.set(c, h),
                            o._aliveFlowNamesDirty = !0
                        }
                    } catch (t) {
                        l.e(t)
                    } finally {
                        l.f()
                    }
                    o._namedFlows.set(this._currentFlow.name, o._currentFlow)
                }
                this.hasError && (o._currentErrors = [],
                (i = o._currentErrors).push.apply(i, g(this.currentErrors || [])));
                this.hasWarning && (o._currentWarnings = [],
                (a = o._currentWarnings).push.apply(a, g(this.currentWarnings || [])));
                return o.variablesState = this.variablesState,
                o.variablesState.callStack = o.callStack,
                o.variablesState.patch = o._patch,
                (r = o.evaluationStack).push.apply(r, g(this.evaluationStack)),
                this.divertedPointer.isNull || (o.divertedPointer = this.divertedPointer.copy()),
                o.previousPointer = this.previousPointer.copy(),
                o._visitCounts = this._visitCounts,
                o._turnIndices = this._turnIndices,
                o.currentTurnIndex = this.currentTurnIndex,
                o.storySeed = this.storySeed,
                o.previousRandom = this.previousRandom,
                o.didSafeExit = this.didSafeExit,
                o
            }
        }, {
            key: "RestoreAfterPatch",
            value: function() {
                this.variablesState.callStack = this.callStack,
                this.variablesState.patch = this._patch
            }
        }, {
            key: "ApplyAnyPatch",
            value: function() {
                if (null !== this._patch) {
                    this.variablesState.ApplyPatch();
                    var t, e = S(this._patch.visitCounts);
                    try {
                        for (e.s(); !(t = e.n()).done; ) {
                            var n = m(t.value, 2)
                              , r = n[0]
                              , i = n[1];
                            this.ApplyCountChanges(r, i, !0)
                        }
                    } catch (t) {
                        e.e(t)
                    } finally {
                        e.f()
                    }
                    var a, o = S(this._patch.turnIndices);
                    try {
                        for (o.s(); !(a = o.n()).done; ) {
                            var s = m(a.value, 2)
                              , l = s[0]
                              , u = s[1];
                            this.ApplyCountChanges(l, u, !1)
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                    this._patch = null
                }
            }
        }, {
            key: "ApplyCountChanges",
            value: function(t, e, n) {
                (n ? this._visitCounts : this._turnIndices).set(t.path.toString(), e)
            }
        }, {
            key: "WriteJson",
            value: function(e) {
                var n = this;
                if (e.WriteObjectStart(),
                e.WritePropertyStart("flows"),
                e.WriteObjectStart(),
                null !== this._namedFlows) {
                    var r, i = S(this._namedFlows);
                    try {
                        var a = function() {
                            var t = m(r.value, 2)
                              , n = t[0]
                              , i = t[1];
                            e.WriteProperty(n, (function(t) {
                                return i.WriteJson(t)
                            }
                            ))
                        };
                        for (i.s(); !(r = i.n()).done; )
                            a()
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                } else
                    e.WriteProperty(this._currentFlow.name, (function(t) {
                        return n._currentFlow.WriteJson(t)
                    }
                    ));
                if (e.WriteObjectEnd(),
                e.WritePropertyEnd(),
                e.WriteProperty("currentFlowName", this._currentFlow.name),
                e.WriteProperty("variablesState", (function(t) {
                    return n.variablesState.WriteJson(t)
                }
                )),
                e.WriteProperty("evalStack", (function(t) {
                    return fe.WriteListRuntimeObjs(t, n.evaluationStack)
                }
                )),
                !this.divertedPointer.isNull) {
                    if (null === this.divertedPointer.path)
                        return L("divertedPointer");
                    e.WriteProperty("currentDivertTarget", this.divertedPointer.path.componentsString)
                }
                e.WriteProperty("visitCounts", (function(t) {
                    return fe.WriteIntDictionary(t, n._visitCounts)
                }
                )),
                e.WriteProperty("turnIndices", (function(t) {
                    return fe.WriteIntDictionary(t, n._turnIndices)
                }
                )),
                e.WriteIntProperty("turnIdx", this.currentTurnIndex),
                e.WriteIntProperty("storySeed", this.storySeed),
                e.WriteIntProperty("previousRandom", this.previousRandom),
                e.WriteIntProperty("inkSaveVersion", this.kInkSaveStateVersion),
                e.WriteIntProperty("inkFormatVersion", t.Story.inkVersionCurrent),
                e.WriteObjectEnd()
            }
        }, {
            key: "LoadJsonObj",
            value: function(t) {
                var e = t
                  , n = e.inkSaveVersion;
                if (null == n)
                    throw new Error("ink save format incorrect, can't load.");
                if (parseInt(n) < this.kMinCompatibleLoadVersion)
                    throw new Error("Ink save format isn't compatible with the current version (saw '" + n + "', but minimum is " + this.kMinCompatibleLoadVersion + "), so can't load.");
                var r = e.flows;
                if (null != r) {
                    var i = r;
                    1 === Object.keys(i).length ? this._namedFlows = null : null === this._namedFlows ? this._namedFlows = new Map : this._namedFlows.clear();
                    for (var a = 0, o = Object.entries(i); a < o.length; a++) {
                        var s = m(o[a], 2)
                          , l = s[0]
                          , u = s[1]
                          , c = new Ce(l,this.story,u);
                        if (1 === Object.keys(i).length)
                            this._currentFlow = new Ce(l,this.story,u);
                        else {
                            if (null === this._namedFlows)
                                return L("this._namedFlows");
                            this._namedFlows.set(l, c)
                        }
                    }
                    if (null != this._namedFlows && this._namedFlows.size > 1) {
                        var h = e.currentFlowName;
                        this._currentFlow = this._namedFlows.get(h)
                    }
                } else {
                    this._namedFlows = null,
                    this._currentFlow.name = this.kDefaultFlowName,
                    this._currentFlow.callStack.SetJsonToken(e.callstackThreads, this.story),
                    this._currentFlow.outputStream = fe.JArrayToRuntimeObjList(e.outputStream),
                    this._currentFlow.currentChoices = fe.JArrayToRuntimeObjList(e.currentChoices);
                    var f = e.choiceThreads;
                    this._currentFlow.LoadFlowChoiceThreads(f, this.story)
                }
                this.OutputStreamDirty(),
                this._aliveFlowNamesDirty = !0,
                this.variablesState.SetJsonToken(e.variablesState),
                this.variablesState.callStack = this._currentFlow.callStack,
                this._evaluationStack = fe.JArrayToRuntimeObjList(e.evalStack);
                var d = e.currentDivertTarget;
                if (null != d) {
                    var v = new R(d.toString());
                    this.divertedPointer = this.story.PointerAtPath(v)
                }
                this._visitCounts = fe.JObjectToIntDictionary(e.visitCounts),
                this._turnIndices = fe.JObjectToIntDictionary(e.turnIndices),
                this.currentTurnIndex = parseInt(e.turnIdx),
                this.storySeed = parseInt(e.storySeed),
                this.previousRandom = parseInt(e.previousRandom)
            }
        }, {
            key: "ResetErrors",
            value: function() {
                this._currentErrors = null,
                this._currentWarnings = null
            }
        }, {
            key: "ResetOutput",
            value: function() {
                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                this.outputStream.length = 0,
                null !== e && (t = this.outputStream).push.apply(t, g(e)),
                this.OutputStreamDirty()
            }
        }, {
            key: "PushToOutputStream",
            value: function(t) {
                var e = _(t, $);
                if (null !== e) {
                    var n = this.TrySplittingHeadTailWhitespace(e);
                    if (null !== n) {
                        var r, i = S(n);
                        try {
                            for (i.s(); !(r = i.n()).done; ) {
                                var a = r.value;
                                this.PushToOutputStreamIndividual(a)
                            }
                        } catch (t) {
                            i.e(t)
                        } finally {
                            i.f()
                        }
                        return void this.OutputStreamDirty()
                    }
                }
                this.PushToOutputStreamIndividual(t),
                this.OutputStreamDirty()
            }
        }, {
            key: "PopFromOutputStream",
            value: function(t) {
                this.outputStream.splice(this.outputStream.length - t, t),
                this.OutputStreamDirty()
            }
        }, {
            key: "TrySplittingHeadTailWhitespace",
            value: function(t) {
                var e = t.value;
                if (null === e)
                    return L("single.value");
                for (var n = -1, r = -1, i = 0; i < e.length; i++) {
                    var a = e[i];
                    if ("\n" != a) {
                        if (" " == a || "\t" == a)
                            continue;
                        break
                    }
                    -1 == n && (n = i),
                    r = i
                }
                for (var o = -1, s = -1, l = e.length - 1; l >= 0; l--) {
                    var u = e[l];
                    if ("\n" != u) {
                        if (" " == u || "\t" == u)
                            continue;
                        break
                    }
                    -1 == o && (o = l),
                    s = l
                }
                if (-1 == n && -1 == o)
                    return null;
                var c = []
                  , h = 0
                  , f = e.length;
                if (-1 != n) {
                    if (n > 0) {
                        var d = new $(e.substring(0, n));
                        c.push(d)
                    }
                    c.push(new $("\n")),
                    h = r + 1
                }
                if (-1 != o && (f = s),
                f > h) {
                    var v = e.substring(h, f - h);
                    c.push(new $(v))
                }
                if (-1 != o && s > r && (c.push(new $("\n")),
                o < e.length - 1)) {
                    var p = e.length - o - 1
                      , m = new $(e.substring(o + 1, p));
                    c.push(m)
                }
                return c
            }
        }, {
            key: "PushToOutputStreamIndividual",
            value: function(t) {
                var e = _(t, ee)
                  , n = _(t, $)
                  , r = !0;
                if (e)
                    this.TrimNewlinesFromOutputStream(),
                    r = !0;
                else if (n) {
                    var i = -1
                      , a = this.callStack.currentElement;
                    a.type == ct.Function && (i = a.functionStartInOutputStream);
                    for (var o = -1, s = this.outputStream.length - 1; s >= 0; s--) {
                        var l = this.outputStream[s]
                          , u = l instanceof et ? l : null;
                        if (null != (l instanceof ee ? l : null)) {
                            o = s;
                            break
                        }
                        if (null != u && u.commandType == et.CommandType.BeginString) {
                            s >= i && (i = -1);
                            break
                        }
                    }
                    if (-1 != (-1 != o && -1 != i ? Math.min(i, o) : -1 != o ? o : i)) {
                        if (n.isNewline)
                            r = !1;
                        else if (n.isNonWhitespace && (o > -1 && this.RemoveExistingGlue(),
                        i > -1))
                            for (var c = this.callStack.elements, h = c.length - 1; h >= 0; h--) {
                                var f = c[h];
                                if (f.type != ct.Function)
                                    break;
                                f.functionStartInOutputStream = -1
                            }
                    } else
                        n.isNewline && (!this.outputStreamEndsInNewline && this.outputStreamContainsContent || (r = !1))
                }
                if (r) {
                    if (null === t)
                        return L("obj");
                    this.outputStream.push(t),
                    this.OutputStreamDirty()
                }
            }
        }, {
            key: "TrimNewlinesFromOutputStream",
            value: function() {
                for (var t = -1, e = this.outputStream.length - 1; e >= 0; ) {
                    var n = this.outputStream[e]
                      , r = _(n, et)
                      , i = _(n, $);
                    if (null != r || null != i && i.isNonWhitespace)
                        break;
                    null != i && i.isNewline && (t = e),
                    e--
                }
                if (t >= 0)
                    for (e = t; e < this.outputStream.length; ) {
                        _(this.outputStream[e], $) ? this.outputStream.splice(e, 1) : e++
                    }
                this.OutputStreamDirty()
            }
        }, {
            key: "RemoveExistingGlue",
            value: function() {
                for (var t = this.outputStream.length - 1; t >= 0; t--) {
                    var e = this.outputStream[t];
                    if (e instanceof ee)
                        this.outputStream.splice(t, 1);
                    else if (e instanceof et)
                        break
                }
                this.OutputStreamDirty()
            }
        }, {
            key: "outputStreamEndsInNewline",
            get: function() {
                if (this.outputStream.length > 0)
                    for (var t = this.outputStream.length - 1; t >= 0; t--) {
                        if (this.outputStream[t]instanceof et)
                            break;
                        var e = this.outputStream[t];
                        if (e instanceof $) {
                            if (e.isNewline)
                                return !0;
                            if (e.isNonWhitespace)
                                break
                        }
                    }
                return !1
            }
        }, {
            key: "outputStreamContainsContent",
            get: function() {
                var t, e = S(this.outputStream);
                try {
                    for (e.s(); !(t = e.n()).done; ) {
                        if (t.value instanceof $)
                            return !0
                    }
                } catch (t) {
                    e.e(t)
                } finally {
                    e.f()
                }
                return !1
            }
        }, {
            key: "inStringEvaluation",
            get: function() {
                for (var t = this.outputStream.length - 1; t >= 0; t--) {
                    var e = _(this.outputStream[t], et);
                    if (e instanceof et && e.commandType == et.CommandType.BeginString)
                        return !0
                }
                return !1
            }
        }, {
            key: "PushEvaluationStack",
            value: function(t) {
                var e = _(t, Z);
                if (e) {
                    var n = e.value;
                    if (null === n)
                        return L("rawList");
                    if (null != n.originNames) {
                        n.origins || (n.origins = []),
                        n.origins.length = 0;
                        var r, i = S(n.originNames);
                        try {
                            for (i.s(); !(r = i.n()).done; ) {
                                var a = r.value;
                                if (null === this.story.listDefinitions)
                                    return L("StoryState.story.listDefinitions");
                                var o = this.story.listDefinitions.TryListGetDefinition(a, null);
                                if (null === o.result)
                                    return L("StoryState def.result");
                                n.origins.indexOf(o.result) < 0 && n.origins.push(o.result)
                            }
                        } catch (t) {
                            i.e(t)
                        } finally {
                            i.f()
                        }
                    }
                }
                if (null === t)
                    return L("obj");
                this.evaluationStack.push(t)
            }
        }, {
            key: "PopEvaluationStack",
            value: function(t) {
                if (void 0 === t)
                    return P(this.evaluationStack.pop());
                if (t > this.evaluationStack.length)
                    throw new Error("trying to pop too many objects");
                return P(this.evaluationStack.splice(this.evaluationStack.length - t, t))
            }
        }, {
            key: "PeekEvaluationStack",
            value: function() {
                return this.evaluationStack[this.evaluationStack.length - 1]
            }
        }, {
            key: "ForceEnd",
            value: function() {
                this.callStack.Reset(),
                this._currentFlow.currentChoices.length = 0,
                this.currentPointer = dt.Null,
                this.previousPointer = dt.Null,
                this.didSafeExit = !0
            }
        }, {
            key: "TrimWhitespaceFromFunctionEnd",
            value: function() {
                I.Assert(this.callStack.currentElement.type == ct.Function);
                var t = this.callStack.currentElement.functionStartInOutputStream;
                -1 == t && (t = 0);
                for (var e = this.outputStream.length - 1; e >= t; e--) {
                    var n = this.outputStream[e]
                      , r = _(n, $)
                      , i = _(n, et);
                    if (null != r) {
                        if (i)
                            break;
                        if (!r.isNewline && !r.isInlineWhitespace)
                            break;
                        this.outputStream.splice(e, 1),
                        this.OutputStreamDirty()
                    }
                }
            }
        }, {
            key: "PopCallStack",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                this.callStack.currentElement.type == ct.Function && this.TrimWhitespaceFromFunctionEnd(),
                this.callStack.Pop(t)
            }
        }, {
            key: "SetChosenPath",
            value: function(t, e) {
                this._currentFlow.currentChoices.length = 0;
                var n = this.story.PointerAtPath(t);
                n.isNull || -1 != n.index || (n.index = 0),
                this.currentPointer = n,
                e && this.currentTurnIndex++
            }
        }, {
            key: "StartFunctionEvaluationFromGame",
            value: function(t, e) {
                this.callStack.Push(ct.FunctionEvaluationFromGame, this.evaluationStack.length),
                this.callStack.currentElement.currentPointer = dt.StartOf(t),
                this.PassArgumentsToEvaluationStack(e)
            }
        }, {
            key: "PassArgumentsToEvaluationStack",
            value: function(t) {
                if (null !== t)
                    for (var e = 0; e < t.length; e++) {
                        if (!("number" == typeof t[e] || "string" == typeof t[e] || "boolean" == typeof t[e] || t[e]instanceof M))
                            throw new Error((P(arguments[e]),
                            "null"));
                        this.PushEvaluationStack(K.Create(t[e]))
                    }
            }
        }, {
            key: "TryExitFunctionEvaluationFromGame",
            value: function() {
                return this.callStack.currentElement.type == ct.FunctionEvaluationFromGame && (this.currentPointer = dt.Null,
                this.didSafeExit = !0,
                !0)
            }
        }, {
            key: "CompleteFunctionEvaluationFromGame",
            value: function() {
                if (this.callStack.currentElement.type != ct.FunctionEvaluationFromGame)
                    throw new Error("Expected external function evaluation to be complete. Stack trace: " + this.callStack.callStackTrace);
                for (var t = this.callStack.currentElement.evaluationStackHeightWhenPushed, e = null; this.evaluationStack.length > t; ) {
                    var n = this.PopEvaluationStack();
                    null === e && (e = n)
                }
                if (this.PopCallStack(ct.FunctionEvaluationFromGame),
                e) {
                    if (e instanceof rt)
                        return null;
                    var r = T(e, K);
                    return r.valueType == U.DivertTarget ? r.valueObject.toString() : r.valueObject
                }
                return null
            }
        }, {
            key: "AddError",
            value: function(t, e) {
                e ? (null == this._currentWarnings && (this._currentWarnings = []),
                this._currentWarnings.push(t)) : (null == this._currentErrors && (this._currentErrors = []),
                this._currentErrors.push(t))
            }
        }, {
            key: "OutputStreamDirty",
            value: function() {
                this._outputStreamTextDirty = !0,
                this._outputStreamTagsDirty = !0
            }
        }]),
        e
    }(), be = function() {
        function t() {
            n(this, t),
            this.startTime = void 0
        }
        return i(t, [{
            key: "ElapsedMilliseconds",
            get: function() {
                return void 0 === this.startTime ? 0 : (new Date).getTime() - this.startTime
            }
        }, {
            key: "Start",
            value: function() {
                this.startTime = (new Date).getTime()
            }
        }, {
            key: "Stop",
            value: function() {
                this.startTime = void 0
            }
        }]),
        t
    }();
    !function(t) {
        t[t.Author = 0] = "Author",
        t[t.Warning = 1] = "Warning",
        t[t.Error = 2] = "Error"
    }(ye || (ye = {})),
    Number.isInteger || (Number.isInteger = function(t) {
        return "number" == typeof t && isFinite(t) && t > -9007199254740992 && t < 9007199254740992 && Math.floor(t) === t
    }
    ),
    t.Story = function(t) {
        a(o, t);
        var r = d(o);
        function o() {
            var t, e;
            n(this, o),
            (t = r.call(this)).inkVersionMinimumCompatible = 18,
            t.onError = null,
            t.onDidContinue = null,
            t.onMakeChoice = null,
            t.onEvaluateFunction = null,
            t.onCompleteEvaluateFunction = null,
            t.onChoosePathString = null,
            t._prevContainers = [],
            t.allowExternalFunctionFallbacks = !1,
            t._listDefinitions = null,
            t._variableObservers = null,
            t._hasValidatedExternals = !1,
            t._temporaryEvaluationContainer = null,
            t._asyncContinueActive = !1,
            t._stateSnapshotAtLastNewline = null,
            t._sawLookaheadUnsafeFunctionAfterNewline = !1,
            t._recursiveContinueCount = 0,
            t._asyncSaving = !1,
            t._profiler = null;
            var i = null
              , a = null;
            if (arguments[0]instanceof tt)
                e = arguments[0],
                void 0 !== arguments[1] && (i = arguments[1]),
                t._mainContentContainer = e;
            else if ("string" == typeof arguments[0]) {
                var s = arguments[0];
                a = ge.TextToDictionary(s)
            } else
                a = arguments[0];
            if (null != i && (t._listDefinitions = new he(i)),
            t._externals = new Map,
            null !== a) {
                var l = a
                  , u = l.inkVersion;
                if (null == u)
                    throw new Error("ink version number not found. Are you sure it's a valid .ink.json file?");
                var c = parseInt(u);
                if (c > o.inkVersionCurrent)
                    throw new Error("Version of ink used to build story was newer than the current version of the engine");
                if (c < t.inkVersionMinimumCompatible)
                    throw new Error("Version of ink used to build story is too old to be loaded by this version of the engine");
                c != o.inkVersionCurrent && console.warn("WARNING: Version of ink used to build story doesn't match current version of engine. Non-critical, but recommend synchronising.");
                var h, f = l.root;
                if (null == f)
                    throw new Error("Root node for ink not found. Are you sure it's a valid .ink.json file?");
                (h = l.listDefs) && (t._listDefinitions = fe.JTokenToListDefinitions(h)),
                t._mainContentContainer = T(fe.JTokenToRuntimeObject(f), tt),
                t.ResetState()
            }
            return t
        }
        return i(o, [{
            key: "currentChoices",
            get: function() {
                var t = [];
                if (null === this._state)
                    return L("this._state");
                var e, n = S(this._state.currentChoices);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var r = e.value;
                        r.isInvisibleDefault || (r.index = t.length,
                        t.push(r))
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                return t
            }
        }, {
            key: "currentText",
            get: function() {
                return this.IfAsyncWeCant("call currentText since it's a work in progress"),
                this.state.currentText
            }
        }, {
            key: "currentTags",
            get: function() {
                return this.IfAsyncWeCant("call currentTags since it's a work in progress"),
                this.state.currentTags
            }
        }, {
            key: "currentErrors",
            get: function() {
                return this.state.currentErrors
            }
        }, {
            key: "currentWarnings",
            get: function() {
                return this.state.currentWarnings
            }
        }, {
            key: "currentFlowName",
            get: function() {
                return this.state.currentFlowName
            }
        }, {
            key: "currentFlowIsDefaultFlow",
            get: function() {
                return this.state.currentFlowIsDefaultFlow
            }
        }, {
            key: "aliveFlowNames",
            get: function() {
                return this.state.aliveFlowNames
            }
        }, {
            key: "hasError",
            get: function() {
                return this.state.hasError
            }
        }, {
            key: "hasWarning",
            get: function() {
                return this.state.hasWarning
            }
        }, {
            key: "variablesState",
            get: function() {
                return this.state.variablesState
            }
        }, {
            key: "listDefinitions",
            get: function() {
                return this._listDefinitions
            }
        }, {
            key: "state",
            get: function() {
                return this._state
            }
        }, {
            key: "StartProfiling",
            value: function() {}
        }, {
            key: "EndProfiling",
            value: function() {}
        }, {
            key: "ToJson",
            value: function(t) {
                var e = this
                  , n = !1;
                if (t || (n = !0,
                t = new ge.Writer),
                t.WriteObjectStart(),
                t.WriteIntProperty("inkVersion", o.inkVersionCurrent),
                t.WriteProperty("root", (function(t) {
                    return fe.WriteRuntimeContainer(t, e._mainContentContainer)
                }
                )),
                null != this._listDefinitions) {
                    t.WritePropertyStart("listDefs"),
                    t.WriteObjectStart();
                    var r, i = S(this._listDefinitions.lists);
                    try {
                        for (i.s(); !(r = i.n()).done; ) {
                            var a = r.value;
                            t.WritePropertyStart(a.name),
                            t.WriteObjectStart();
                            var s, l = S(a.items);
                            try {
                                for (l.s(); !(s = l.n()).done; ) {
                                    var u = m(s.value, 2)
                                      , c = u[0]
                                      , h = u[1]
                                      , f = B.fromSerializedKey(c)
                                      , d = h;
                                    t.WriteIntProperty(f.itemName, d)
                                }
                            } catch (t) {
                                l.e(t)
                            } finally {
                                l.f()
                            }
                            t.WriteObjectEnd(),
                            t.WritePropertyEnd()
                        }
                    } catch (t) {
                        i.e(t)
                    } finally {
                        i.f()
                    }
                    t.WriteObjectEnd(),
                    t.WritePropertyEnd()
                }
                if (t.WriteObjectEnd(),
                n)
                    return t.toString()
            }
        }, {
            key: "ResetState",
            value: function() {
                this.IfAsyncWeCant("ResetState"),
                this._state = new Se(this),
                this._state.variablesState.ObserveVariableChange(this.VariableStateDidChangeEvent.bind(this)),
                this.ResetGlobals()
            }
        }, {
            key: "ResetErrors",
            value: function() {
                if (null === this._state)
                    return L("this._state");
                this._state.ResetErrors()
            }
        }, {
            key: "ResetCallstack",
            value: function() {
                if (this.IfAsyncWeCant("ResetCallstack"),
                null === this._state)
                    return L("this._state");
                this._state.ForceEnd()
            }
        }, {
            key: "ResetGlobals",
            value: function() {
                if (this._mainContentContainer.namedContent.get("global decl")) {
                    var t = this.state.currentPointer.copy();
                    this.ChoosePath(new R("global decl"), !1),
                    this.ContinueInternal(),
                    this.state.currentPointer = t
                }
                this.state.variablesState.SnapshotDefaultGlobals()
            }
        }, {
            key: "SwitchFlow",
            value: function(t) {
                if (this.IfAsyncWeCant("switch flow"),
                this._asyncSaving)
                    throw new Error("Story is already in background saving mode, can't switch flow to " + t);
                this.state.SwitchFlow_Internal(t)
            }
        }, {
            key: "RemoveFlow",
            value: function(t) {
                this.state.RemoveFlow_Internal(t)
            }
        }, {
            key: "SwitchToDefaultFlow",
            value: function() {
                this.state.SwitchToDefaultFlow_Internal()
            }
        }, {
            key: "Continue",
            value: function() {
                return this.ContinueAsync(0),
                this.currentText
            }
        }, {
            key: "canContinue",
            get: function() {
                return this.state.canContinue
            }
        }, {
            key: "asyncContinueComplete",
            get: function() {
                return !this._asyncContinueActive
            }
        }, {
            key: "ContinueAsync",
            value: function(t) {
                this._hasValidatedExternals || this.ValidateExternalBindings(),
                this.ContinueInternal(t)
            }
        }, {
            key: "ContinueInternal",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                null != this._profiler && this._profiler.PreContinue();
                var e = t > 0;
                if (this._recursiveContinueCount++,
                !this._asyncContinueActive) {
                    if (this._asyncContinueActive = e,
                    !this.canContinue)
                        throw new Error("Can't continue - should check canContinue before calling Continue");
                    this._state.didSafeExit = !1,
                    this._state.ResetOutput(),
                    1 == this._recursiveContinueCount && (this._state.variablesState.batchObservingVariableChanges = !0)
                }
                var n = new be;
                n.Start();
                var r = !1;
                this._sawLookaheadUnsafeFunctionAfterNewline = !1;
                do {
                    try {
                        r = this.ContinueSingleStep()
                    } catch (t) {
                        if (!(t instanceof G))
                            throw t;
                        this.AddError(t.message, void 0, t.useEndLineNumber);
                        break
                    }
                    if (r)
                        break;
                    if (this._asyncContinueActive && n.ElapsedMilliseconds > t)
                        break
                } while (this.canContinue);
                if (n.Stop(),
                !r && this.canContinue || (null !== this._stateSnapshotAtLastNewline && this.RestoreStateSnapshot(),
                this.canContinue || (this.state.callStack.canPopThread && this.AddError("Thread available to pop, threads should always be flat by the end of evaluation?"),
                0 != this.state.generatedChoices.length || this.state.didSafeExit || null != this._temporaryEvaluationContainer || (this.state.callStack.CanPop(ct.Tunnel) ? this.AddError("unexpectedly reached end of content. Do you need a '->->' to return from a tunnel?") : this.state.callStack.CanPop(ct.Function) ? this.AddError("unexpectedly reached end of content. Do you need a '~ return'?") : this.state.callStack.canPop ? this.AddError("unexpectedly reached end of content for unknown reason. Please debug compiler!") : this.AddError("ran out of content. Do you need a '-> DONE' or '-> END'?"))),
                this.state.didSafeExit = !1,
                this._sawLookaheadUnsafeFunctionAfterNewline = !1,
                1 == this._recursiveContinueCount && (this._state.variablesState.batchObservingVariableChanges = !1),
                this._asyncContinueActive = !1,
                null !== this.onDidContinue && this.onDidContinue()),
                this._recursiveContinueCount--,
                null != this._profiler && this._profiler.PostContinue(),
                this.state.hasError || this.state.hasWarning) {
                    if (null === this.onError) {
                        var i = new j;
                        throw i.Append("Ink had "),
                        this.state.hasError && (i.Append("".concat(this.state.currentErrors.length)),
                        i.Append(1 == this.state.currentErrors.length ? " error" : "errors"),
                        this.state.hasWarning && i.Append(" and ")),
                        this.state.hasWarning && (i.Append("".concat(this.state.currentWarnings.length)),
                        i.Append(1 == this.state.currentWarnings.length ? " warning" : "warnings"),
                        this.state.hasWarning && i.Append(" and ")),
                        i.Append(". It is strongly suggested that you assign an error handler to story.onError. The first issue was: "),
                        i.Append(this.state.hasError ? this.state.currentErrors[0] : this.state.currentWarnings[0]),
                        new G(i.toString())
                    }
                    if (this.state.hasError) {
                        var a, o = S(this.state.currentErrors);
                        try {
                            for (o.s(); !(a = o.n()).done; ) {
                                var s = a.value;
                                this.onError(s, ye.Error)
                            }
                        } catch (s) {
                            o.e(s)
                        } finally {
                            o.f()
                        }
                    }
                    if (this.state.hasWarning) {
                        var l, u = S(this.state.currentWarnings);
                        try {
                            for (u.s(); !(l = u.n()).done; ) {
                                var c = l.value;
                                this.onError(c, ye.Warning)
                            }
                        } catch (s) {
                            u.e(s)
                        } finally {
                            u.f()
                        }
                    }
                    this.ResetErrors()
                }
            }
        }, {
            key: "ContinueSingleStep",
            value: function() {
                if (null != this._profiler && this._profiler.PreStep(),
                this.Step(),
                null != this._profiler && this._profiler.PostStep(),
                this.canContinue || this.state.callStack.elementIsEvaluateFromGame || this.TryFollowDefaultInvisibleChoice(),
                null != this._profiler && this._profiler.PreSnapshot(),
                !this.state.inStringEvaluation) {
                    if (null !== this._stateSnapshotAtLastNewline) {
                        if (null === this._stateSnapshotAtLastNewline.currentTags)
                            return L("this._stateAtLastNewline.currentTags");
                        if (null === this.state.currentTags)
                            return L("this.state.currentTags");
                        var t = this.CalculateNewlineOutputStateChange(this._stateSnapshotAtLastNewline.currentText, this.state.currentText, this._stateSnapshotAtLastNewline.currentTags.length, this.state.currentTags.length);
                        if (t == o.OutputStateChange.ExtendedBeyondNewline || this._sawLookaheadUnsafeFunctionAfterNewline)
                            return this.RestoreStateSnapshot(),
                            !0;
                        t == o.OutputStateChange.NewlineRemoved && this.DiscardSnapshot()
                    }
                    this.state.outputStreamEndsInNewline && (this.canContinue ? null == this._stateSnapshotAtLastNewline && this.StateSnapshot() : this.DiscardSnapshot())
                }
                return null != this._profiler && this._profiler.PostSnapshot(),
                !1
            }
        }, {
            key: "CalculateNewlineOutputStateChange",
            value: function(t, e, n, r) {
                if (null === t)
                    return L("prevText");
                if (null === e)
                    return L("currText");
                var i = e.length >= t.length && t.length > 0 && "\n" == e.charAt(t.length - 1);
                if (n == r && t.length == e.length && i)
                    return o.OutputStateChange.NoChange;
                if (!i)
                    return o.OutputStateChange.NewlineRemoved;
                if (r > n)
                    return o.OutputStateChange.ExtendedBeyondNewline;
                for (var a = t.length; a < e.length; a++) {
                    var s = e.charAt(a);
                    if (" " != s && "\t" != s)
                        return o.OutputStateChange.ExtendedBeyondNewline
                }
                return o.OutputStateChange.NoChange
            }
        }, {
            key: "ContinueMaximally",
            value: function() {
                this.IfAsyncWeCant("ContinueMaximally");
                for (var t = new j; this.canContinue; )
                    t.Append(this.Continue());
                return t.toString()
            }
        }, {
            key: "ContentAtPath",
            value: function(t) {
                return this.mainContentContainer.ContentAtPath(t)
            }
        }, {
            key: "KnotContainerWithName",
            value: function(t) {
                var e = this.mainContentContainer.namedContent.get(t);
                return e instanceof tt ? e : null
            }
        }, {
            key: "PointerAtPath",
            value: function(t) {
                if (0 == t.length)
                    return dt.Null;
                var e = new dt
                  , n = t.length
                  , r = null;
                return null === t.lastComponent ? L("path.lastComponent") : (t.lastComponent.isIndex ? (n = t.length - 1,
                r = this.mainContentContainer.ContentAtPath(t, void 0, n),
                e.container = r.container,
                e.index = t.lastComponent.index) : (r = this.mainContentContainer.ContentAtPath(t),
                e.container = r.container,
                e.index = -1),
                null == r.obj || r.obj == this.mainContentContainer && n > 0 ? this.Error("Failed to find content at path '" + t + "', and no approximation of it was possible.") : r.approximate && this.Warning("Failed to find content at path '" + t + "', so it was approximated to: '" + r.obj.path + "'."),
                e)
            }
        }, {
            key: "StateSnapshot",
            value: function() {
                this._stateSnapshotAtLastNewline = this._state,
                this._state = this._state.CopyAndStartPatching()
            }
        }, {
            key: "RestoreStateSnapshot",
            value: function() {
                null === this._stateSnapshotAtLastNewline && L("_stateSnapshotAtLastNewline"),
                this._stateSnapshotAtLastNewline.RestoreAfterPatch(),
                this._state = this._stateSnapshotAtLastNewline,
                this._stateSnapshotAtLastNewline = null,
                this._asyncSaving || this._state.ApplyAnyPatch()
            }
        }, {
            key: "DiscardSnapshot",
            value: function() {
                this._asyncSaving || this._state.ApplyAnyPatch(),
                this._stateSnapshotAtLastNewline = null
            }
        }, {
            key: "CopyStateForBackgroundThreadSave",
            value: function() {
                if (this.IfAsyncWeCant("start saving on a background thread"),
                this._asyncSaving)
                    throw new Error("Story is already in background saving mode, can't call CopyStateForBackgroundThreadSave again!");
                var t = this._state;
                return this._state = this._state.CopyAndStartPatching(),
                this._asyncSaving = !0,
                t
            }
        }, {
            key: "BackgroundSaveComplete",
            value: function() {
                null === this._stateSnapshotAtLastNewline && this._state.ApplyAnyPatch(),
                this._asyncSaving = !1
            }
        }, {
            key: "Step",
            value: function() {
                var t = !0
                  , e = this.state.currentPointer.copy();
                if (!e.isNull) {
                    for (var n = _(e.Resolve(), tt); n && (this.VisitContainer(n, !0),
                    0 != n.content.length); )
                        n = _((e = dt.StartOf(n)).Resolve(), tt);
                    this.state.currentPointer = e.copy(),
                    null != this._profiler && this._profiler.Step(this.state.callStack);
                    var r = e.Resolve()
                      , i = this.PerformLogicAndFlowControl(r);
                    if (!this.state.currentPointer.isNull) {
                        i && (t = !1);
                        var a = _(r, ht);
                        if (a) {
                            var o = this.ProcessChoice(a);
                            o && this.state.generatedChoices.push(o),
                            r = null,
                            t = !1
                        }
                        if (r instanceof tt && (t = !1),
                        t) {
                            var s = _(r, Y);
                            if (s && -1 == s.contextIndex) {
                                var l = this.state.callStack.ContextForVariableNamed(s.variableName);
                                r = new Y(s.variableName,l)
                            }
                            this.state.inExpressionEvaluation ? this.state.PushEvaluationStack(r) : this.state.PushToOutputStream(r)
                        }
                        this.NextContent();
                        var u = _(r, et);
                        u && u.commandType == et.CommandType.StartThread && this.state.callStack.PushThread()
                    }
                }
            }
        }, {
            key: "VisitContainer",
            value: function(t, e) {
                t.countingAtStartOnly && !e || (t.visitsShouldBeCounted && this.state.IncrementVisitCountForContainer(t),
                t.turnIndexShouldBeCounted && this.state.RecordTurnIndexVisitToContainer(t))
            }
        }, {
            key: "VisitChangedContainersDueToDivert",
            value: function() {
                var t = this.state.previousPointer.copy()
                  , e = this.state.currentPointer.copy();
                if (!e.isNull && -1 != e.index) {
                    if (this._prevContainers.length = 0,
                    !t.isNull)
                        for (var n = _(t.Resolve(), tt) || _(t.container, tt); n; )
                            this._prevContainers.push(n),
                            n = _(n.parent, tt);
                    var r = e.Resolve();
                    if (null != r)
                        for (var i = _(r.parent, tt), a = !0; i && (this._prevContainers.indexOf(i) < 0 || i.countingAtStartOnly); ) {
                            var o = i.content.length > 0 && r == i.content[0] && a;
                            o || (a = !1),
                            this.VisitContainer(i, o),
                            r = i,
                            i = _(i.parent, tt)
                        }
                }
            }
        }, {
            key: "PopChoiceStringAndTags",
            value: function(t) {
                for (var e = T(this.state.PopEvaluationStack(), $); this.state.evaluationStack.length > 0 && null != _(this.state.PeekEvaluationStack(), ue); ) {
                    var n = _(this.state.PopEvaluationStack(), ue);
                    n && t.push(n.text)
                }
                return e.value
            }
        }, {
            key: "ProcessChoice",
            value: function(t) {
                var e = !0;
                if (t.hasCondition) {
                    var n = this.state.PopEvaluationStack();
                    this.IsTruthy(n) || (e = !1)
                }
                var r = ""
                  , i = ""
                  , a = [];
                (t.hasChoiceOnlyContent && (i = this.PopChoiceStringAndTags(a) || ""),
                t.hasStartContent && (r = this.PopChoiceStringAndTags(a) || ""),
                t.onceOnly) && (this.state.VisitCountForContainer(t.choiceTarget) > 0 && (e = !1));
                if (!e)
                    return null;
                var o = new ce;
                return o.targetPath = t.pathOnChoice,
                o.sourcePath = t.path.toString(),
                o.isInvisibleDefault = t.isInvisibleDefault,
                o.threadAtGeneration = this.state.callStack.ForkThread(),
                o.tags = a.reverse(),
                o.text = (r + i).replace(/^[ \t]+|[ \t]+$/g, ""),
                o
            }
        }, {
            key: "IsTruthy",
            value: function(t) {
                if (t instanceof K) {
                    var e = t;
                    if (e instanceof X) {
                        var n = e;
                        return this.Error("Shouldn't use a divert target (to " + n.targetPath + ") as a conditional value. Did you intend a function call 'likeThis()' or a read count check 'likeThis'? (no arrows)"),
                        !1
                    }
                    return e.isTruthy
                }
                return !1
            }
        }, {
            key: "PerformLogicAndFlowControl",
            value: function(t) {
                if (null == t)
                    return !1;
                if (t instanceof vt) {
                    var e = t;
                    if (e.isConditional) {
                        var n = this.state.PopEvaluationStack();
                        if (!this.IsTruthy(n))
                            return !0
                    }
                    if (e.hasVariableTarget) {
                        var r = e.variableDivertName
                          , i = this.state.variablesState.GetVariableWithName(r);
                        if (null == i)
                            this.Error("Tried to divert using a target from a variable that could not be found (" + r + ")");
                        else if (!(i instanceof X)) {
                            var a = _(i, J)
                              , o = "Tried to divert to a target from a variable, but the variable (" + r + ") didn't contain a divert target, it ";
                            a instanceof J && 0 == a.value ? o += "was empty/null (the value 0)." : o += "contained '" + i + "'.",
                            this.Error(o)
                        }
                        var s = T(i, X);
                        this.state.divertedPointer = this.PointerAtPath(s.targetPath)
                    } else {
                        if (e.isExternal)
                            return this.CallExternalFunction(e.targetPathString, e.externalArgs),
                            !0;
                        this.state.divertedPointer = e.targetPointer.copy()
                    }
                    return e.pushesToStack && this.state.callStack.Push(e.stackPushType, void 0, this.state.outputStream.length),
                    this.state.divertedPointer.isNull && !e.isExternal && (e && e.debugMetadata && null != e.debugMetadata.sourceName ? this.Error("Divert target doesn't exist: " + e.debugMetadata.sourceName) : this.Error("Divert resolution failed: " + e)),
                    !0
                }
                if (t instanceof et) {
                    var l = t;
                    switch (l.commandType) {
                    case et.CommandType.EvalStart:
                        this.Assert(!1 === this.state.inExpressionEvaluation, "Already in expression evaluation?"),
                        this.state.inExpressionEvaluation = !0;
                        break;
                    case et.CommandType.EvalEnd:
                        this.Assert(!0 === this.state.inExpressionEvaluation, "Not in expression evaluation mode"),
                        this.state.inExpressionEvaluation = !1;
                        break;
                    case et.CommandType.EvalOutput:
                        if (this.state.evaluationStack.length > 0) {
                            var u = this.state.PopEvaluationStack();
                            if (!(u instanceof rt)) {
                                var c = new $(u.toString());
                                this.state.PushToOutputStream(c)
                            }
                        }
                        break;
                    case et.CommandType.NoOp:
                        break;
                    case et.CommandType.Duplicate:
                        this.state.PushEvaluationStack(this.state.PeekEvaluationStack());
                        break;
                    case et.CommandType.PopEvaluatedValue:
                        this.state.PopEvaluationStack();
                        break;
                    case et.CommandType.PopFunction:
                    case et.CommandType.PopTunnel:
                        var h = l.commandType == et.CommandType.PopFunction ? ct.Function : ct.Tunnel
                          , f = null;
                        if (h == ct.Tunnel) {
                            var d = this.state.PopEvaluationStack();
                            null === (f = _(d, X)) && this.Assert(d instanceof rt, "Expected void if ->-> doesn't override target")
                        }
                        if (this.state.TryExitFunctionEvaluationFromGame())
                            break;
                        if (this.state.callStack.currentElement.type == h && this.state.callStack.canPop)
                            this.state.PopCallStack(),
                            f && (this.state.divertedPointer = this.PointerAtPath(f.targetPath));
                        else {
                            var v = new Map;
                            v.set(ct.Function, "function return statement (~ return)"),
                            v.set(ct.Tunnel, "tunnel onwards statement (->->)");
                            var p = v.get(this.state.callStack.currentElement.type);
                            this.state.callStack.canPop || (p = "end of flow (-> END or choice)");
                            var m = "Found " + v.get(h) + ", when expected " + p;
                            this.Error(m)
                        }
                        break;
                    case et.CommandType.BeginString:
                        this.state.PushToOutputStream(l),
                        this.Assert(!0 === this.state.inExpressionEvaluation, "Expected to be in an expression when evaluating a string"),
                        this.state.inExpressionEvaluation = !1;
                        break;
                    case et.CommandType.BeginTag:
                        this.state.PushToOutputStream(l);
                        break;
                    case et.CommandType.EndTag:
                        if (this.state.inStringEvaluation) {
                            for (var g = [], y = 0, C = this.state.outputStream.length - 1; C >= 0; --C) {
                                var b = this.state.outputStream[C];
                                y++;
                                var w = _(b, et);
                                if (null != w) {
                                    if (w.commandType == et.CommandType.BeginTag)
                                        break;
                                    this.Error("Unexpected ControlCommand while extracting tag from choice");
                                    break
                                }
                                b instanceof $ && g.push(b)
                            }
                            this.state.PopFromOutputStream(y);
                            for (var k = new j, E = 0, A = g; E < A.length; E++) {
                                var P = A[E];
                                k.Append(P.toString())
                            }
                            var N = new ue(this.state.CleanOutputWhitespace(k.toString()));
                            this.state.PushEvaluationStack(N)
                        } else
                            this.state.PushToOutputStream(l);
                        break;
                    case et.CommandType.EndString:
                        for (var x = [], O = [], I = 0, F = this.state.outputStream.length - 1; F >= 0; --F) {
                            var W = this.state.outputStream[F];
                            I++;
                            var R = _(W, et);
                            if (R && R.commandType == et.CommandType.BeginString)
                                break;
                            W instanceof ue && O.push(W),
                            W instanceof $ && x.push(W)
                        }
                        this.state.PopFromOutputStream(I);
                        for (var D = 0, V = O; D < V.length; D++) {
                            var q = V[D];
                            this.state.PushToOutputStream(q)
                        }
                        x = x.reverse();
                        var U, H = new j, z = S(x);
                        try {
                            for (z.s(); !(U = z.n()).done; ) {
                                var Y = U.value;
                                H.Append(Y.toString())
                            }
                        } catch (t) {
                            z.e(t)
                        } finally {
                            z.f()
                        }
                        this.state.inExpressionEvaluation = !0,
                        this.state.PushEvaluationStack(new $(H.toString()));
                        break;
                    case et.CommandType.ChoiceCount:
                        var Q = this.state.generatedChoices.length;
                        this.state.PushEvaluationStack(new J(Q));
                        break;
                    case et.CommandType.Turns:
                        this.state.PushEvaluationStack(new J(this.state.currentTurnIndex + 1));
                        break;
                    case et.CommandType.TurnsSince:
                    case et.CommandType.ReadCount:
                        var nt = this.state.PopEvaluationStack();
                        if (!(nt instanceof X)) {
                            var at = "";
                            nt instanceof J && (at = ". Did you accidentally pass a read count ('knot_name') instead of a target ('-> knot_name')?"),
                            this.Error("TURNS_SINCE / READ_COUNT expected a divert target (knot, stitch, label name), but saw " + nt + at);
                            break
                        }
                        var ot, st = T(nt, X), lt = _(this.ContentAtPath(st.targetPath).correctObj, tt);
                        null != lt ? ot = l.commandType == et.CommandType.TurnsSince ? this.state.TurnsSinceForContainer(lt) : this.state.VisitCountForContainer(lt) : (ot = l.commandType == et.CommandType.TurnsSince ? -1 : 0,
                        this.Warning("Failed to find container for " + l.toString() + " lookup at " + st.targetPath.toString())),
                        this.state.PushEvaluationStack(new J(ot));
                        break;
                    case et.CommandType.Random:
                        var ut = _(this.state.PopEvaluationStack(), J)
                          , ht = _(this.state.PopEvaluationStack(), J);
                        if (null == ht || ht instanceof J == !1)
                            return this.Error("Invalid value for minimum parameter of RANDOM(min, max)");
                        if (null == ut || ht instanceof J == !1)
                            return this.Error("Invalid value for maximum parameter of RANDOM(min, max)");
                        if (null === ut.value)
                            return L("maxInt.value");
                        if (null === ht.value)
                            return L("minInt.value");
                        var ft = ut.value - ht.value + 1;
                        (!isFinite(ft) || ft > Number.MAX_SAFE_INTEGER) && (ft = Number.MAX_SAFE_INTEGER,
                        this.Error("RANDOM was called with a range that exceeds the size that ink numbers can use.")),
                        ft <= 0 && this.Error("RANDOM was called with minimum as " + ht.value + " and maximum as " + ut.value + ". The maximum must be larger");
                        var mt = this.state.storySeed + this.state.previousRandom
                          , gt = new pe(mt).next()
                          , yt = gt % ft + ht.value;
                        this.state.PushEvaluationStack(new J(yt)),
                        this.state.previousRandom = gt;
                        break;
                    case et.CommandType.SeedRandom:
                        var Ct = _(this.state.PopEvaluationStack(), J);
                        if (null == Ct || Ct instanceof J == !1)
                            return this.Error("Invalid value passed to SEED_RANDOM");
                        if (null === Ct.value)
                            return L("minInt.value");
                        this.state.storySeed = Ct.value,
                        this.state.previousRandom = 0,
                        this.state.PushEvaluationStack(new rt);
                        break;
                    case et.CommandType.VisitIndex:
                        var St = this.state.VisitCountForContainer(this.state.currentPointer.container) - 1;
                        this.state.PushEvaluationStack(new J(St));
                        break;
                    case et.CommandType.SequenceShuffleIndex:
                        var bt = this.NextSequenceShuffleIndex();
                        this.state.PushEvaluationStack(new J(bt));
                        break;
                    case et.CommandType.StartThread:
                        break;
                    case et.CommandType.Done:
                        this.state.callStack.canPopThread ? this.state.callStack.PopThread() : (this.state.didSafeExit = !0,
                        this.state.currentPointer = dt.Null);
                        break;
                    case et.CommandType.End:
                        this.state.ForceEnd();
                        break;
                    case et.CommandType.ListFromInt:
                        var wt = _(this.state.PopEvaluationStack(), J)
                          , kt = T(this.state.PopEvaluationStack(), $);
                        if (null === wt)
                            throw new G("Passed non-integer when creating a list element from a numerical value.");
                        var Et = null;
                        if (null === this.listDefinitions)
                            return L("this.listDefinitions");
                        var _t = this.listDefinitions.TryListGetDefinition(kt.value, null);
                        if (!_t.exists)
                            throw new G("Failed to find LIST called " + kt.value);
                        if (null === wt.value)
                            return L("minInt.value");
                        var Tt = _t.result.TryGetItemWithValue(wt.value, B.Null);
                        Tt.exists && (Et = new Z(Tt.result,wt.value)),
                        null == Et && (Et = new Z),
                        this.state.PushEvaluationStack(Et);
                        break;
                    case et.CommandType.ListRange:
                        var At = _(this.state.PopEvaluationStack(), K)
                          , Pt = _(this.state.PopEvaluationStack(), K)
                          , Nt = _(this.state.PopEvaluationStack(), Z);
                        if (null === Nt || null === Pt || null === At)
                            throw new G("Expected list, minimum and maximum for LIST_RANGE");
                        if (null === Nt.value)
                            return L("targetList.value");
                        var xt = Nt.value.ListWithSubRange(Pt.valueObject, At.valueObject);
                        this.state.PushEvaluationStack(new Z(xt));
                        break;
                    case et.CommandType.ListRandom:
                        var Ot = this.state.PopEvaluationStack();
                        if (null === Ot)
                            throw new G("Expected list for LIST_RANDOM");
                        var It = Ot.value
                          , Wt = null;
                        if (null === It)
                            throw L("list");
                        if (0 == It.Count)
                            Wt = new M;
                        else {
                            for (var Rt = this.state.storySeed + this.state.previousRandom, Dt = new pe(Rt).next(), Lt = Dt % It.Count, Vt = It.entries(), jt = 0; jt <= Lt - 1; jt++)
                                Vt.next();
                            var Bt = Vt.next().value
                              , Mt = {
                                Key: B.fromSerializedKey(Bt[0]),
                                Value: Bt[1]
                            };
                            if (null === Mt.Key.originName)
                                return L("randomItem.Key.originName");
                            (Wt = new M(Mt.Key.originName,this)).Add(Mt.Key, Mt.Value),
                            this.state.previousRandom = Dt
                        }
                        this.state.PushEvaluationStack(new Z(Wt));
                        break;
                    default:
                        this.Error("unhandled ControlCommand: " + l)
                    }
                    return !0
                }
                if (t instanceof pt) {
                    var Gt = t
                      , qt = this.state.PopEvaluationStack();
                    return this.state.variablesState.Assign(Gt, qt),
                    !0
                }
                if (t instanceof Ft) {
                    var Ut = t
                      , Kt = null;
                    if (null != Ut.pathForCount) {
                        var Ht = Ut.containerForCount
                          , Jt = this.state.VisitCountForContainer(Ht);
                        Kt = new J(Jt)
                    } else
                        null == (Kt = this.state.variablesState.GetVariableWithName(Ut.name)) && (this.Warning("Variable not found: '" + Ut.name + "'. Using default value of 0 (false). This can happen with temporary variables if the declaration hasn't yet been hit. Globals are always given a default value on load if a value doesn't exist in the save state."),
                        Kt = new J(0));
                    return this.state.PushEvaluationStack(Kt),
                    !0
                }
                if (t instanceof it) {
                    var zt = t
                      , $t = this.state.PopEvaluationStack(zt.numberOfParameters)
                      , Xt = zt.Call($t);
                    return this.state.PushEvaluationStack(Xt),
                    !0
                }
                return !1
            }
        }, {
            key: "ChoosePathString",
            value: function(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                if (this.IfAsyncWeCant("call ChoosePathString right now"),
                null !== this.onChoosePathString && this.onChoosePathString(t, n),
                e)
                    this.ResetCallstack();
                else if (this.state.callStack.currentElement.type == ct.Function) {
                    var r = ""
                      , i = this.state.callStack.currentElement.currentPointer.container;
                    throw null != i && (r = "(" + i.path.toString() + ") "),
                    new Error("Story was running a function " + r + "when you called ChoosePathString(" + t + ") - this is almost certainly not not what you want! Full stack trace: \n" + this.state.callStack.callStackTrace)
                }
                this.state.PassArgumentsToEvaluationStack(n),
                this.ChoosePath(new R(t))
            }
        }, {
            key: "IfAsyncWeCant",
            value: function(t) {
                if (this._asyncContinueActive)
                    throw new Error("Can't " + t + ". Story is in the middle of a ContinueAsync(). Make more ContinueAsync() calls or a single Continue() call beforehand.")
            }
        }, {
            key: "ChoosePath",
            value: function(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this.state.SetChosenPath(t, e),
                this.VisitChangedContainersDueToDivert()
            }
        }, {
            key: "ChooseChoiceIndex",
            value: function(t) {
                t = t;
                var e = this.currentChoices;
                this.Assert(t >= 0 && t < e.length, "choice out of range");
                var n = e[t];
                return null !== this.onMakeChoice && this.onMakeChoice(n),
                null === n.threadAtGeneration ? L("choiceToChoose.threadAtGeneration") : null === n.targetPath ? L("choiceToChoose.targetPath") : (this.state.callStack.currentThread = n.threadAtGeneration,
                void this.ChoosePath(n.targetPath))
            }
        }, {
            key: "HasFunction",
            value: function(t) {
                try {
                    return null != this.KnotContainerWithName(t)
                } catch (t) {
                    return !1
                }
            }
        }, {
            key: "EvaluateFunction",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                  , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (null !== this.onEvaluateFunction && this.onEvaluateFunction(t, e),
                this.IfAsyncWeCant("evaluate a function"),
                null == t)
                    throw new Error("Function is null");
                if ("" == t || "" == t.trim())
                    throw new Error("Function is empty or white space.");
                var r = this.KnotContainerWithName(t);
                if (null == r)
                    throw new Error("Function doesn't exist: '" + t + "'");
                var i = [];
                i.push.apply(i, g(this.state.outputStream)),
                this._state.ResetOutput(),
                this.state.StartFunctionEvaluationFromGame(r, e);
                for (var a = new j; this.canContinue; )
                    a.Append(this.Continue());
                var o = a.toString();
                this._state.ResetOutput(i);
                var s = this.state.CompleteFunctionEvaluationFromGame();
                return null != this.onCompleteEvaluateFunction && this.onCompleteEvaluateFunction(t, e, o, s),
                n ? {
                    returned: s,
                    output: o
                } : s
            }
        }, {
            key: "EvaluateExpression",
            value: function(t) {
                var e = this.state.callStack.elements.length;
                this.state.callStack.Push(ct.Tunnel),
                this._temporaryEvaluationContainer = t,
                this.state.GoToStart();
                var n = this.state.evaluationStack.length;
                return this.Continue(),
                this._temporaryEvaluationContainer = null,
                this.state.callStack.elements.length > e && this.state.PopCallStack(),
                this.state.evaluationStack.length > n ? this.state.PopEvaluationStack() : null
            }
        }, {
            key: "CallExternalFunction",
            value: function(t, n) {
                if (null === t)
                    return L("funcName");
                var r = this._externals.get(t)
                  , i = null
                  , a = void 0 !== r;
                if (!a || r.lookAheadSafe || null === this._stateSnapshotAtLastNewline) {
                    if (!a) {
                        if (this.allowExternalFunctionFallbacks)
                            return i = this.KnotContainerWithName(t),
                            this.Assert(null !== i, "Trying to call EXTERNAL function '" + t + "' which has not been bound, and fallback ink function could not be found."),
                            this.state.callStack.Push(ct.Function, void 0, this.state.outputStream.length),
                            void (this.state.divertedPointer = dt.StartOf(i));
                        this.Assert(!1, "Trying to call EXTERNAL function '" + t + "' which has not been bound (and ink fallbacks disabled).")
                    }
                    for (var o = [], s = 0; s < n; ++s) {
                        var l = T(this.state.PopEvaluationStack(), K).valueObject;
                        o.push(l)
                    }
                    o.reverse();
                    var u = r.function(o)
                      , c = null;
                    null != u ? (c = K.Create(u),
                    this.Assert(null !== c, "Could not create ink value from returned object of type " + e(u))) : c = new rt,
                    this.state.PushEvaluationStack(c)
                } else
                    this._sawLookaheadUnsafeFunctionAfterNewline = !0
            }
        }, {
            key: "BindExternalFunctionGeneral",
            value: function(t, e) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                this.IfAsyncWeCant("bind an external function"),
                this.Assert(!this._externals.has(t), "Function '" + t + "' has already been bound."),
                this._externals.set(t, {
                    function: e,
                    lookAheadSafe: n
                })
            }
        }, {
            key: "TryCoerce",
            value: function(t) {
                return t
            }
        }, {
            key: "BindExternalFunction",
            value: function(t, e) {
                var n = this
                  , r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this.Assert(null != e, "Can't bind a null function"),
                this.BindExternalFunctionGeneral(t, (function(t) {
                    n.Assert(t.length >= e.length, "External function expected " + e.length + " arguments");
                    for (var r = [], i = 0, a = t.length; i < a; i++)
                        r[i] = n.TryCoerce(t[i]);
                    return e.apply(null, r)
                }
                ), r)
            }
        }, {
            key: "UnbindExternalFunction",
            value: function(t) {
                this.IfAsyncWeCant("unbind an external a function"),
                this.Assert(this._externals.has(t), "Function '" + t + "' has not been bound."),
                this._externals.delete(t)
            }
        }, {
            key: "ValidateExternalBindings",
            value: function() {
                var t = null
                  , e = null
                  , n = arguments[1] || new Set;
                if (arguments[0]instanceof tt && (t = arguments[0]),
                arguments[0]instanceof V && (e = arguments[0]),
                null === t && null === e)
                    if (this.ValidateExternalBindings(this._mainContentContainer, n),
                    this._hasValidatedExternals = !0,
                    0 == n.size)
                        this._hasValidatedExternals = !0;
                    else {
                        var r = "Error: Missing function binding for external";
                        r += n.size > 1 ? "s" : "",
                        r += ": '",
                        r += Array.from(n).join("', '"),
                        r += "' ",
                        r += this.allowExternalFunctionFallbacks ? ", and no fallback ink function found." : " (ink fallbacks disabled)",
                        this.Error(r)
                    }
                else if (null != t) {
                    var i, a = S(t.content);
                    try {
                        for (a.s(); !(i = a.n()).done; ) {
                            var o = i.value
                              , s = o;
                            null != s && s.hasValidName || this.ValidateExternalBindings(o, n)
                        }
                    } catch (t) {
                        a.e(t)
                    } finally {
                        a.f()
                    }
                    var l, u = S(t.namedContent);
                    try {
                        for (u.s(); !(l = u.n()).done; ) {
                            var c = m(l.value, 2)
                              , h = c[1];
                            this.ValidateExternalBindings(_(h, V), n)
                        }
                    } catch (t) {
                        u.e(t)
                    } finally {
                        u.f()
                    }
                } else if (null != e) {
                    var f = _(e, vt);
                    if (f && f.isExternal) {
                        var d = f.targetPathString;
                        if (null === d)
                            return L("name");
                        if (!this._externals.has(d))
                            if (this.allowExternalFunctionFallbacks) {
                                var v = this.mainContentContainer.namedContent.has(d);
                                v || n.add(d)
                            } else
                                n.add(d)
                    }
                }
            }
        }, {
            key: "ObserveVariable",
            value: function(t, e) {
                if (this.IfAsyncWeCant("observe a new variable"),
                null === this._variableObservers && (this._variableObservers = new Map),
                !this.state.variablesState.GlobalVariableExistsWithName(t))
                    throw new Error("Cannot observe variable '" + t + "' because it wasn't declared in the ink story.");
                this._variableObservers.has(t) ? this._variableObservers.get(t).push(e) : this._variableObservers.set(t, [e])
            }
        }, {
            key: "ObserveVariables",
            value: function(t, e) {
                for (var n = 0, r = t.length; n < r; n++)
                    this.ObserveVariable(t[n], e[n])
            }
        }, {
            key: "RemoveVariableObserver",
            value: function(t, e) {
                if (this.IfAsyncWeCant("remove a variable observer"),
                null !== this._variableObservers)
                    if (null != e) {
                        if (this._variableObservers.has(e))
                            if (null != t) {
                                var n = this._variableObservers.get(e);
                                null != n && (n.splice(n.indexOf(t), 1),
                                0 === n.length && this._variableObservers.delete(e))
                            } else
                                this._variableObservers.delete(e)
                    } else if (null != t) {
                        var r, i = S(this._variableObservers.keys());
                        try {
                            for (i.s(); !(r = i.n()).done; ) {
                                var a = r.value
                                  , o = this._variableObservers.get(a);
                                null != o && (o.splice(o.indexOf(t), 1),
                                0 === o.length && this._variableObservers.delete(a))
                            }
                        } catch (t) {
                            i.e(t)
                        } finally {
                            i.f()
                        }
                    }
            }
        }, {
            key: "VariableStateDidChangeEvent",
            value: function(t, e) {
                if (null !== this._variableObservers) {
                    var n = this._variableObservers.get(t);
                    if (void 0 !== n) {
                        if (!(e instanceof K))
                            throw new Error("Tried to get the value of a variable that isn't a standard type");
                        var r, i = T(e, K), a = S(n);
                        try {
                            for (a.s(); !(r = a.n()).done; ) {
                                (0,
                                r.value)(t, i.valueObject)
                            }
                        } catch (t) {
                            a.e(t)
                        } finally {
                            a.f()
                        }
                    }
                }
            }
        }, {
            key: "globalTags",
            get: function() {
                return this.TagsAtStartOfFlowContainerWithPathString("")
            }
        }, {
            key: "TagsForContentAtPath",
            value: function(t) {
                return this.TagsAtStartOfFlowContainerWithPathString(t)
            }
        }, {
            key: "TagsAtStartOfFlowContainerWithPathString",
            value: function(t) {
                var e = new R(t)
                  , n = this.ContentAtPath(e).container;
                if (null === n)
                    return L("flowContainer");
                for (; ; ) {
                    var r = n.content[0];
                    if (!(r instanceof tt))
                        break;
                    n = r
                }
                var i, a = !1, o = null, s = S(n.content);
                try {
                    for (s.s(); !(i = s.n()).done; ) {
                        var l = i.value
                          , u = _(l, et);
                        if (null != u)
                            u.commandType == et.CommandType.BeginTag ? a = !0 : u.commandType == et.CommandType.EndTag && (a = !1);
                        else {
                            if (!a)
                                break;
                            var c = _(l, $);
                            null !== c ? (null === o && (o = []),
                            null !== c.value && o.push(c.value)) : this.Error("Tag contained non-text content. Only plain text is allowed when using globalTags or TagsAtContentPath. If you want to evaluate dynamic content, you need to use story.Continue().")
                        }
                    }
                } catch (t) {
                    s.e(t)
                } finally {
                    s.f()
                }
                return o
            }
        }, {
            key: "BuildStringOfHierarchy",
            value: function() {
                var t = new j;
                return this.mainContentContainer.BuildStringOfHierarchy(t, 0, this.state.currentPointer.Resolve()),
                t.toString()
            }
        }, {
            key: "BuildStringOfContainer",
            value: function(t) {
                var e = new j;
                return t.BuildStringOfHierarchy(e, 0, this.state.currentPointer.Resolve()),
                e.toString()
            }
        }, {
            key: "NextContent",
            value: function() {
                if ((this.state.previousPointer = this.state.currentPointer.copy(),
                this.state.divertedPointer.isNull || (this.state.currentPointer = this.state.divertedPointer.copy(),
                this.state.divertedPointer = dt.Null,
                this.VisitChangedContainersDueToDivert(),
                this.state.currentPointer.isNull)) && !this.IncrementContentPointer()) {
                    var t = !1;
                    this.state.callStack.CanPop(ct.Function) ? (this.state.PopCallStack(ct.Function),
                    this.state.inExpressionEvaluation && this.state.PushEvaluationStack(new rt),
                    t = !0) : this.state.callStack.canPopThread ? (this.state.callStack.PopThread(),
                    t = !0) : this.state.TryExitFunctionEvaluationFromGame(),
                    t && !this.state.currentPointer.isNull && this.NextContent()
                }
            }
        }, {
            key: "IncrementContentPointer",
            value: function() {
                var t = !0
                  , e = this.state.callStack.currentElement.currentPointer.copy();
                if (e.index++,
                null === e.container)
                    return L("pointer.container");
                for (; e.index >= e.container.content.length; ) {
                    t = !1;
                    var n = _(e.container.parent, tt);
                    if (n instanceof tt == !1)
                        break;
                    var r = n.content.indexOf(e.container);
                    if (-1 == r)
                        break;
                    if ((e = new dt(n,r)).index++,
                    t = !0,
                    null === e.container)
                        return L("pointer.container")
                }
                return t || (e = dt.Null),
                this.state.callStack.currentElement.currentPointer = e.copy(),
                t
            }
        }, {
            key: "TryFollowDefaultInvisibleChoice",
            value: function() {
                var t = this._state.currentChoices
                  , e = t.filter((function(t) {
                    return t.isInvisibleDefault
                }
                ));
                if (0 == e.length || t.length > e.length)
                    return !1;
                var n = e[0];
                return null === n.targetPath ? L("choice.targetPath") : null === n.threadAtGeneration ? L("choice.threadAtGeneration") : (this.state.callStack.currentThread = n.threadAtGeneration,
                null !== this._stateSnapshotAtLastNewline && (this.state.callStack.currentThread = this.state.callStack.ForkThread()),
                this.ChoosePath(n.targetPath, !1),
                !0)
            }
        }, {
            key: "NextSequenceShuffleIndex",
            value: function() {
                var t = _(this.state.PopEvaluationStack(), J);
                if (!(t instanceof J))
                    return this.Error("expected number of elements in sequence for shuffle index"),
                    0;
                var e = this.state.currentPointer.container;
                if (null === e)
                    return L("seqContainer");
                if (null === t.value)
                    return L("numElementsIntVal.value");
                var n = t.value
                  , r = T(this.state.PopEvaluationStack(), J).value;
                if (null === r)
                    return L("seqCount");
                for (var i = r / n, a = r % n, o = e.path.toString(), s = 0, l = 0, u = o.length; l < u; l++)
                    s += o.charCodeAt(l) || 0;
                for (var c = s + i + this.state.storySeed, h = new pe(Math.floor(c)), f = [], d = 0; d < n; ++d)
                    f.push(d);
                for (var v = 0; v <= a; ++v) {
                    var p = h.next() % f.length
                      , m = f[p];
                    if (f.splice(p, 1),
                    v == a)
                        return m
                }
                throw new Error("Should never reach here")
            }
        }, {
            key: "Error",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = new G(t);
                throw n.useEndLineNumber = e,
                n
            }
        }, {
            key: "Warning",
            value: function(t) {
                this.AddError(t, !0)
            }
        }, {
            key: "AddError",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , r = this.currentDebugMetadata
                  , i = e ? "WARNING" : "ERROR";
                if (null != r) {
                    var a = n ? r.endLineNumber : r.startLineNumber;
                    t = "RUNTIME " + i + ": '" + r.fileName + "' line " + a + ": " + t
                } else
                    t = this.state.currentPointer.isNull ? "RUNTIME " + i + ": " + t : "RUNTIME " + i + ": (" + this.state.currentPointer + "): " + t;
                this.state.AddError(t, e),
                e || this.state.ForceEnd()
            }
        }, {
            key: "Assert",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (0 == t)
                    throw null == e && (e = "Story assert"),
                    new Error(e + " " + this.currentDebugMetadata)
            }
        }, {
            key: "currentDebugMetadata",
            get: function() {
                var t, e = this.state.currentPointer;
                if (!e.isNull && null !== e.Resolve() && null !== (t = e.Resolve().debugMetadata))
                    return t;
                for (var n = this.state.callStack.elements.length - 1; n >= 0; --n)
                    if (!(e = this.state.callStack.elements[n].currentPointer).isNull && null !== e.Resolve() && null !== (t = e.Resolve().debugMetadata))
                        return t;
                for (var r = this.state.outputStream.length - 1; r >= 0; --r) {
                    if (null !== (t = this.state.outputStream[r].debugMetadata))
                        return t
                }
                return null
            }
        }, {
            key: "mainContentContainer",
            get: function() {
                return this._temporaryEvaluationContainer ? this._temporaryEvaluationContainer : this._mainContentContainer
            }
        }]),
        o
    }(V),
    t.Story.inkVersionCurrent = 21,
    function(t) {
        var e;
        (e = t.OutputStateChange || (t.OutputStateChange = {}))[e.NoChange = 0] = "NoChange",
        e[e.ExtendedBeyondNewline = 1] = "ExtendedBeyondNewline",
        e[e.NewlineRemoved = 2] = "NewlineRemoved"
    }(t.Story || (t.Story = {}));
    var we = function(e) {
        a(s, e);
        var r = d(s);
        function s(e) {
            var i, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return n(this, s),
            (i = r.call(this, null, e, null, !1, a))._errorHandler = null,
            i._hadError = !1,
            i._hadWarning = !1,
            i._dontFlattenContainers = new Set,
            i._listDefs = new Map,
            i.constants = new Map,
            i.externals = new Map,
            i.countAllVisits = !1,
            i.ExportRuntime = function() {
                var e, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                i._errorHandler = r,
                i.constants = new Map;
                var a, o = S(i.FindAll(_t)());
                try {
                    for (o.s(); !(a = o.n()).done; ) {
                        var s = a.value
                          , l = i.constants.get(s.constantName);
                        if (l && !l.Equals(s.expression)) {
                            var u = "CONST '".concat(s.constantName, "' has been redefined with a different value. Multiple definitions of the same CONST are valid so long as they contain the same value. Initial definition was on ").concat(l.debugMetadata, ".");
                            i.Error(u, s, !1)
                        }
                        i.constants.set(s.constantName, s.expression)
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
                i._listDefs = new Map;
                var c, f = S(i.FindAll(Ht)());
                try {
                    for (f.s(); !(c = f.n()).done; ) {
                        var d = c.value;
                        (null === (e = d.identifier) || void 0 === e ? void 0 : e.name) && i._listDefs.set(null === (n = d.identifier) || void 0 === n ? void 0 : n.name, d)
                    }
                } catch (t) {
                    f.e(t)
                } finally {
                    f.f()
                }
                i.externals = new Map,
                i.ResolveWeavePointNaming();
                var v = i.runtimeObject
                  , p = new tt;
                p.AddContent(et.EvalStart());
                var g, y = [], C = S(i.variableDeclarations);
                try {
                    for (C.s(); !(g = C.n()).done; ) {
                        var b = m(g.value, 2)
                          , w = b[0]
                          , k = b[1];
                        if (k.isGlobalDeclaration) {
                            if (k.listDefinition)
                                i._listDefs.set(w, k.listDefinition),
                                p.AddContent(k.listDefinition.runtimeObject),
                                y.push(k.listDefinition.runtimeListDefinition);
                            else {
                                if (!k.expression)
                                    throw new Error;
                                k.expression.GenerateIntoContainer(p)
                            }
                            var E = new pt(w,!0);
                            E.isGlobal = !0,
                            p.AddContent(E)
                        }
                    }
                } catch (t) {
                    C.e(t)
                } finally {
                    C.f()
                }
                p.AddContent(et.EvalEnd()),
                p.AddContent(et.End()),
                i.variableDeclarations.size > 0 && (p.name = "global decl",
                v.AddToNamedContentOnly(p)),
                v.AddContent(et.Done());
                var _ = new t.Story(v,y);
                return i.runtimeObject = _,
                i.hadError ? null : (i.FlattenContainersIn(v),
                i.ResolveReferences(h(i)),
                i.hadError ? null : (_.ResetState(),
                _))
            }
            ,
            i.ResolveList = function(t) {
                var e = i._listDefs.get(t);
                return e || null
            }
            ,
            i.ResolveListItem = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                  , r = null;
                if (t)
                    return (r = i._listDefs.get(t)) ? r.ItemNamed(e) : null;
                var a, o = null, s = null, l = S(i._listDefs.entries());
                try {
                    for (l.s(); !(a = l.n()).done; ) {
                        var u = m(a.value, 2)
                          , c = u[1]
                          , h = c.ItemNamed(e);
                        h && (o ? i.Error("Ambiguous item name '".concat(e, "' found in multiple sets, including ").concat(s.identifier, " and ").concat(c.identifier), n, !1) : (o = h,
                        s = c))
                    }
                } catch (t) {
                    l.e(t)
                } finally {
                    l.f()
                }
                return o
            }
            ,
            i.FlattenContainersIn = function(t) {
                var e = new Set;
                if (t.content) {
                    var n, r = S(t.content);
                    try {
                        for (r.s(); !(n = r.n()).done; ) {
                            var a = _(n.value, tt);
                            a && e.add(a)
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                }
                if (t.namedContent) {
                    var o, s = S(t.namedContent);
                    try {
                        for (s.s(); !(o = s.n()).done; ) {
                            var l = _(m(o.value, 2)[1], tt);
                            l && e.add(l)
                        }
                    } catch (t) {
                        s.e(t)
                    } finally {
                        s.f()
                    }
                }
                var u, c = S(e);
                try {
                    for (c.s(); !(u = c.n()).done; ) {
                        var h = u.value;
                        i.TryFlattenContainer(h),
                        i.FlattenContainersIn(h)
                    }
                } catch (t) {
                    c.e(t)
                } finally {
                    c.f()
                }
            }
            ,
            i.TryFlattenContainer = function(t) {
                if (!(t.namedContent && t.namedContent.size > 0 || t.hasValidName || i._dontFlattenContainers.has(t))) {
                    var e = _(t.parent, tt);
                    if (e) {
                        var n = e.content.indexOf(t);
                        e.content.splice(n, 1);
                        var r = t.ownDebugMetadata;
                        if (t.content) {
                            var a, o = S(t.content);
                            try {
                                for (o.s(); !(a = o.n()).done; ) {
                                    var s = a.value;
                                    s.parent = null,
                                    null !== r && null === s.ownDebugMetadata && (s.debugMetadata = r),
                                    e.InsertContent(s, n),
                                    n += 1
                                }
                            } catch (t) {
                                o.e(t)
                            } finally {
                                o.f()
                            }
                        }
                    }
                }
            }
            ,
            i.Error = function(t, e, n) {
                var r = n ? b.Warning : b.Error
                  , a = "";
                if (e instanceof W ? (a += "TODO: ",
                r = b.Author) : a += n ? "WARNING: " : "ERROR: ",
                e && null !== e.debugMetadata && e.debugMetadata.startLineNumber >= 1 && (null != e.debugMetadata.fileName && (a += "'".concat(e.debugMetadata.fileName, "' ")),
                a += "line ".concat(e.debugMetadata.startLineNumber, ": ")),
                t = a += t,
                null === i._errorHandler)
                    throw new Error(t);
                i._errorHandler(t, r),
                i._hadError = r === b.Error,
                i._hadWarning = r === b.Warning
            }
            ,
            i.ResetError = function() {
                i._hadError = !1,
                i._hadWarning = !1
            }
            ,
            i.IsExternal = function(t) {
                return i.externals.has(t)
            }
            ,
            i.AddExternal = function(t) {
                i.externals.has(t.name) ? i.Error("Duplicate EXTERNAL definition of '".concat(t.name, "'"), t, !1) : t.name && i.externals.set(t.name, t)
            }
            ,
            i.DontFlattenContainer = function(t) {
                i._dontFlattenContainers.add(t)
            }
            ,
            i.NameConflictError = function(t, e, n, r) {
                t.Error("".concat(r, " '").concat(e, "': name has already been used for a ").concat(n.typeName.toLowerCase(), " on ").concat(n.debugMetadata))
            }
            ,
            i.CheckForNamingCollisions = function(t, e, n) {
                var r, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "", o = a || t.typeName;
                if (s.IsReservedKeyword(null == e ? void 0 : e.name))
                    t.Error("'".concat(e, "' cannot be used for the name of a ").concat(o.toLowerCase(), " because it's a reserved keyword"));
                else if (Rt.IsBuiltIn((null == e ? void 0 : e.name) || ""))
                    t.Error("'".concat(e, "' cannot be used for the name of a ").concat(o.toLowerCase(), " because it's a built in function"));
                else {
                    var l = i.ContentWithNameAtLevel((null == e ? void 0 : e.name) || "", bt.Knot)
                      , u = _(l, Ot);
                    if (!u || u === t && n !== ft.Arg) {
                        if (!(n < ft.List)) {
                            var c, h = S(i._listDefs);
                            try {
                                for (h.s(); !(c = h.n()).done; ) {
                                    var f = m(c.value, 2)
                                      , d = f[0]
                                      , v = f[1];
                                    if ((null == e ? void 0 : e.name) === d && t !== v && v.variableAssignment !== t && i.NameConflictError(t, null == e ? void 0 : e.name, v, o),
                                    !(t instanceof se)) {
                                        var p, g = S(v.itemDefinitions);
                                        try {
                                            for (g.s(); !(p = g.n()).done; ) {
                                                var y = p.value;
                                                (null == e ? void 0 : e.name) === y.name && i.NameConflictError(t, (null == e ? void 0 : e.name) || "", y, o)
                                            }
                                        } catch (t) {
                                            g.e(t)
                                        } finally {
                                            g.f()
                                        }
                                    }
                                }
                            } catch (t) {
                                h.e(t)
                            } finally {
                                h.f()
                            }
                            if (!(n <= ft.Var)) {
                                var C = (null == e ? void 0 : e.name) && i.variableDeclarations.get(null == e ? void 0 : e.name) || null;
                                if (C && C !== t && C.isGlobalDeclaration && null == C.listDefinition && i.NameConflictError(t, (null == e ? void 0 : e.name) || "", C, o),
                                !(n < ft.SubFlowAndWeave)) {
                                    var b = new At(e)
                                      , w = b.ResolveFromContext(t);
                                    if (w && w !== t)
                                        i.NameConflictError(t, (null == e ? void 0 : e.name) || "", w, o);
                                    else if (!(n < ft.Arg) && n !== ft.Arg) {
                                        var k = _(t, Ot);
                                        if (k || (k = Nt(t)),
                                        k && k.hasParameters && k.args) {
                                            var E, T = S(k.args);
                                            try {
                                                for (T.s(); !(E = T.n()).done; ) {
                                                    var A = E.value;
                                                    if ((null === (r = A.identifier) || void 0 === r ? void 0 : r.name) === (null == e ? void 0 : e.name))
                                                        return void t.Error("".concat(o, " '").concat(e, "': name has already been used for a argument to ").concat(k.identifier, " on ").concat(k.debugMetadata))
                                                }
                                            } catch (t) {
                                                T.e(t)
                                            } finally {
                                                T.f()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else
                        i.NameConflictError(t, (null == e ? void 0 : e.name) || "", u, o)
                }
            }
            ,
            i
        }
        return i(s, [{
            key: "flowLevel",
            get: function() {
                return bt.Story
            }
        }, {
            key: "hadError",
            get: function() {
                return this._hadError
            }
        }, {
            key: "hadWarning",
            get: function() {
                return this._hadWarning
            }
        }, {
            key: "typeName",
            get: function() {
                return "Story"
            }
        }, {
            key: "PreProcessTopLevelObjects",
            value: function(t) {
                p(o(s.prototype), "PreProcessTopLevelObjects", this).call(this, t);
                var e, n = [], r = S(t);
                try {
                    for (r.s(); !(e = r.n()).done; ) {
                        var i = e.value;
                        if (i instanceof re) {
                            var a = i
                              , l = t.indexOf(i);
                            if (t.splice(l, 1),
                            a.includedStory) {
                                var u = []
                                  , c = a.includedStory;
                                if (null != c.content) {
                                    var h, f = S(c.content);
                                    try {
                                        for (f.s(); !(h = f.n()).done; ) {
                                            var d = h.value;
                                            d instanceof Ot ? n.push(d) : u.push(d)
                                        }
                                    } catch (t) {
                                        f.e(t)
                                    } finally {
                                        f.f()
                                    }
                                    u.push(new Et("\n")),
                                    t.splice.apply(t, [l, 0].concat(u))
                                }
                            }
                        } else
                            ;
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                t.splice.apply(t, [0, 0].concat(n))
            }
        }]),
        s
    }(Ot);
    we.IsReservedKeyword = function(t) {
        switch (t) {
        case "true":
        case "false":
        case "not":
        case "return":
        case "else":
        case "VAR":
        case "CONST":
        case "temp":
        case "LIST":
        case "function":
            return !0
        }
        return !1
    }
    ;
    var ke = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i;
            return n(this, r),
            (i = e.call(this)).GenerateIntoContainer = function(t) {
                t.AddContent(et.BeginString());
                var e, n = S(i.content);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var r = e.value;
                        t.AddContent(r.runtimeObject)
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                t.AddContent(et.EndString())
            }
            ,
            i.toString = function() {
                var t, e = "", n = S(i.content);
                try {
                    for (n.s(); !(t = n.n()).done; ) {
                        e += t.value
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                return e
            }
            ,
            i.AddContent(t),
            i
        }
        return i(r, [{
            key: "isSingleString",
            get: function() {
                return 1 === this.content.length && this.content[0]instanceof Et
            }
        }, {
            key: "typeName",
            get: function() {
                return "String"
            }
        }, {
            key: "Equals",
            value: function(t) {
                var e = _(t, r);
                return null !== e && (!(!this.isSingleString || !e.isSingleString) && this.toString() === e.toString())
            }
        }]),
        r
    }(nt)
      , Ee = function(t) {
        a(r, t);
        var e = d(r);
        function r(t) {
            var i, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return n(this, r),
            (i = e.call(this)).GenerateRuntimeObject = function() {
                return i.isStart ? et.BeginTag() : et.EndTag()
            }
            ,
            i.toString = function() {
                return i.isStart ? "#StartTag" : "#EndTag"
            }
            ,
            i.isStart = t,
            i.inChoice = a,
            i
        }
        return i(r, [{
            key: "typeName",
            get: function() {
                return "Tag"
            }
        }]),
        r
    }(F)
      , _e = i((function t(e) {
        n(this, t),
        this.rootPath = e,
        this.ResolveInkFilename = function() {
            throw Error("Can't resolve filename because no FileHandler was provided when instantiating the parser / compiler.")
        }
        ,
        this.LoadInkFileContents = function() {
            throw Error("Can't load ink content because no FileHandler was provided when instantiating the parser / compiler.")
        }
    }
    ))
      , Te = function(t) {
        a(o, t);
        var r = d(o);
        function o(t) {
            var i, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            if (n(this, o),
            (i = r.call(this, t)).ParseStory = function() {
                var t = i.StatementsAtLevel(Xt.Top);
                return new we(t,i._rootParser !== h(i))
            }
            ,
            i.SeparatedList = function(t, e) {
                var n = i.Parse(t);
                if (null === n)
                    return null;
                var r = [];
                for (r.push(n); ; ) {
                    var a = i.BeginRule();
                    if (null === e()) {
                        i.FailRule(a);
                        break
                    }
                    var o = i.Parse(t);
                    if (null === o) {
                        i.FailRule(a);
                        break
                    }
                    i.SucceedRule(a),
                    r.push(o)
                }
                return r
            }
            ,
            i.CreateDebugMetadata = function(t, e) {
                var n = new Yt;
                return n.startLineNumber = ((null == t ? void 0 : t.lineIndex) || 0) + 1,
                n.endLineNumber = e.lineIndex + 1,
                n.startCharacterNumber = ((null == t ? void 0 : t.characterInLineIndex) || 0) + 1,
                n.endCharacterNumber = e.characterInLineIndex + 1,
                n.fileName = i._filename,
                n
            }
            ,
            i.RuleDidSucceed = function(t, e, n) {
                var r = _(t, F);
                r && (r.debugMetadata = i.CreateDebugMetadata(e, n));
                var a = Array.isArray(t) ? t : null;
                if (null !== a) {
                    var o, s = S(a);
                    try {
                        for (s.s(); !(o = s.n()).done; ) {
                            var l = o.value;
                            _(l, F) && (l.hasOwnDebugMetadata || (l.debugMetadata = i.CreateDebugMetadata(e, n)))
                        }
                    } catch (t) {
                        s.e(t)
                    } finally {
                        s.f()
                    }
                }
                var u = _(t, xt);
                null != u && (u.debugMetadata = i.CreateDebugMetadata(e, n))
            }
            ,
            i.OnStringParserError = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                  , r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                  , a = r ? "WARNING:" : "ERROR:"
                  , o = a;
                if (null !== i._filename && (o += " '".concat(i._filename, "'")),
                o += " line ".concat(n + 1, ": ").concat(t),
                null === i._externalErrorHandler)
                    throw new Error(o);
                i._externalErrorHandler(o, r ? b.Warning : b.Error)
            }
            ,
            i.AuthorWarning = function() {
                i.Whitespace();
                var t = i.Parse(i.IdentifierWithMetadata);
                if (null === t || "TODO" !== t.name)
                    return null;
                i.Whitespace(),
                i.ParseString(":"),
                i.Whitespace();
                var e = i.ParseUntilCharactersFromString("\n\r");
                return e ? new W(e) : null
            }
            ,
            i.ExtendIdentifierCharacterRanges = function(t) {
                var e, n = S(o.ListAllCharacterRanges());
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var r = e.value;
                        t.AddCharacters(r.ToCharacterSet())
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
            }
            ,
            i._parsingChoice = !1,
            i.Choice = function() {
                var t = !0
                  , e = i.Interleave(i.OptionalExclude(i.Whitespace), i.String("*"));
                if (!e) {
                    if (null === (e = i.Interleave(i.OptionalExclude(i.Whitespace), i.String("+"))))
                        return null;
                    t = !1
                }
                var n = i.Parse(i.BracketedName);
                i.Whitespace();
                var r = i.Parse(i.ChoiceCondition);
                if (i.Whitespace(),
                i._parsingChoice)
                    throw new Error("Already parsing a choice - shouldn't have nested choices");
                i._parsingChoice = !0;
                var a = null
                  , o = i.Parse(i.MixedTextAndLogic);
                o && (a = new It(o));
                var s = null
                  , l = null
                  , u = null !== i.ParseString("[");
                if (u) {
                    i.EndTagIfNecessary(a);
                    var c = i.Parse(i.MixedTextAndLogic);
                    null !== c && (s = new It(c)),
                    i.Expect(i.String("]"), "closing ']' for weave-style option"),
                    i.EndTagIfNecessary(s);
                    var h = i.Parse(i.MixedTextAndLogic);
                    null !== h && (l = new It(h))
                }
                i.Whitespace(),
                i.EndTagIfNecessary(null != l ? l : a);
                var f = i.Parse(i.MultiDivert);
                i._parsingChoice = !1,
                i.Whitespace();
                var d = !a && !l && !s;
                if (d && null === f && i.Warning("Choice is completely empty. Interpretting as a default fallback choice. Add a divert arrow to remove this warning: * ->"),
                a || !u || s || i.Warning("Blank choice - if you intended a default fallback choice, use the `* ->` syntax"),
                l || (l = new It),
                i.EndTagIfNecessary(l),
                null !== f) {
                    var v, p = S(f);
                    try {
                        for (p.s(); !(v = p.n()).done; ) {
                            var m = v.value
                              , g = _(m, jt);
                            g && g.isEmpty || l.AddContent(m)
                        }
                    } catch (t) {
                        p.e(t)
                    } finally {
                        p.f()
                    }
                }
                l.AddContent(new Et("\n"));
                var y = new mt(a,s,l);
                return n && (y.identifier = n),
                y.indentationDepth = e.length,
                y.hasWeaveStyleInlineBrackets = u,
                y.condition = r,
                y.onceOnly = t,
                y.isInvisibleDefault = d,
                y
            }
            ,
            i.ChoiceCondition = function() {
                var t = i.Interleave(i.ChoiceSingleCondition, i.ChoiceConditionsSpace);
                return null === t ? null : 1 === t.length ? t[0] : new Lt(t)
            }
            ,
            i.ChoiceConditionsSpace = function() {
                return i.Newline(),
                i.Whitespace(),
                Ct
            }
            ,
            i.ChoiceSingleCondition = function() {
                if (null === i.ParseString("{"))
                    return null;
                var t = i.Expect(i.Expression, "choice condition inside { }");
                return i.DisallowIncrement(t),
                i.Expect(i.String("}"), "closing '}' for choice condition"),
                t
            }
            ,
            i.Gather = function() {
                var t = i.Parse(i.GatherDashes);
                if (null === t)
                    return null;
                var e = Number(t)
                  , n = i.Parse(i.BracketedName)
                  , r = new Tt(n,e);
                return i.Newline(),
                r
            }
            ,
            i.GatherDashes = function() {
                i.Whitespace();
                for (var t = 0; null !== i.ParseDashNotArrow(); )
                    t += 1,
                    i.Whitespace();
                return 0 === t ? null : t
            }
            ,
            i.ParseDashNotArrow = function() {
                var t = i.BeginRule();
                return null === i.ParseString("->") && "-" === i.ParseSingleCharacter() ? i.SucceedRule(t) : i.FailRule(t)
            }
            ,
            i.BracketedName = function() {
                if (null === i.ParseString("("))
                    return null;
                i.Whitespace();
                var t = i.Parse(i.IdentifierWithMetadata);
                return null === t ? null : (i.Whitespace(),
                i.Expect(i.String(")"), "closing ')' for bracketed name"),
                t)
            }
            ,
            i.InnerConditionalContent = function(t) {
                if (void 0 === t) {
                    var e = i.Parse(i.ConditionExpression)
                      , n = i.Parse((function() {
                        return i.InnerConditionalContent(e)
                    }
                    ));
                    return null === n ? null : n
                }
                var r, a = null !== t, o = null === i.Parse(i.Newline);
                if (o && !a)
                    return null;
                if (o)
                    r = i.InlineConditionalBranches();
                else {
                    if (null === (r = i.MultilineConditionalBranches())) {
                        if (t) {
                            var s = i.StatementsAtLevel(Xt.InnerBlock);
                            if (null !== s) {
                                r = [new $t(s)];
                                var l = i.Parse(i.SingleMultilineCondition);
                                l && (l.isElse || (i.ErrorWithParsedObject("Expected an '- else:' clause here rather than an extra condition", l),
                                l.isElse = !0),
                                r.push(l))
                            }
                        }
                        if (null === r)
                            return null
                    } else if (1 === r.length && r[0].isElse && t) {
                        var u = new $t(null);
                        u.isTrueBranch = !0,
                        r.unshift(u)
                    }
                    if (t)
                        for (var c = !1, h = 0; h < r.length; ++h) {
                            var f = r[h]
                              , d = h === r.length - 1;
                            f.ownExpression ? (f.matchingEquality = !0,
                            c = !0) : c && d ? (f.matchingEquality = !0,
                            f.isElse = !0) : !d && r.length > 2 ? i.ErrorWithParsedObject("Only final branch can be an 'else'. Did you miss a ':'?", f) : 0 === h ? f.isTrueBranch = !0 : f.isElse = !0
                        }
                    else {
                        for (var v = 0; v < r.length; ++v) {
                            var p = r[v]
                              , m = v === r.length - 1;
                            if (null === p.ownExpression)
                                if (m)
                                    p.isElse = !0;
                                else if (p.isElse) {
                                    var g = r[r.length - 1];
                                    g.isElse ? i.ErrorWithParsedObject("Multiple 'else' cases. Can have a maximum of one, at the end.", g) : i.ErrorWithParsedObject("'else' case in conditional should always be the final one", p)
                                } else
                                    i.ErrorWithParsedObject("Branch doesn't have condition. Are you missing a ':'? ", p)
                        }
                        1 === r.length && null === r[0].ownExpression && i.ErrorWithParsedObject("Condition block with no conditions", r[0])
                    }
                }
                if (null === r)
                    return null;
                var y, C = S(r);
                try {
                    for (C.s(); !(y = C.n()).done; ) {
                        y.value.isInline = o
                    }
                } catch (t) {
                    C.e(t)
                } finally {
                    C.f()
                }
                return new kt(t,r)
            }
            ,
            i.InlineConditionalBranches = function() {
                var t = i.Interleave(i.MixedTextAndLogic, i.Exclude(i.String("|")), null, !1);
                if (null === t || 0 === t.length)
                    return null;
                var e = [];
                if (t.length > 2)
                    i.Error("Expected one or two alternatives separated by '|' in inline conditional");
                else {
                    var n = new $t(t[0]);
                    if (n.isTrueBranch = !0,
                    e.push(n),
                    t.length > 1) {
                        var r = new $t(t[1]);
                        r.isElse = !0,
                        e.push(r)
                    }
                }
                return e
            }
            ,
            i.MultilineConditionalBranches = function() {
                i.MultilineWhitespace();
                var t = i.OneOrMore(i.SingleMultilineCondition);
                return null === t ? null : (i.MultilineWhitespace(),
                t)
            }
            ,
            i.SingleMultilineCondition = function() {
                if (i.Whitespace(),
                null !== i.ParseString("->") || null === i.ParseString("-"))
                    return null;
                i.Whitespace();
                var t = null
                  , e = null !== i.Parse(i.ElseExpression);
                e || (t = i.Parse(i.ConditionExpression));
                var n = i.StatementsAtLevel(Xt.InnerBlock);
                null === t && null === n && (i.Error("expected content for the conditional branch following '-'"),
                n = [new Et("")]),
                i.MultilineWhitespace();
                var r = new $t(n);
                return r.ownExpression = t,
                r.isElse = e,
                r
            }
            ,
            i.ConditionExpression = function() {
                var t = i.Parse(i.Expression);
                return null === t ? null : (i.DisallowIncrement(t),
                i.Whitespace(),
                null === i.ParseString(":") ? null : t)
            }
            ,
            i.ElseExpression = function() {
                return null === i.ParseString("else") ? null : (i.Whitespace(),
                null === i.ParseString(":") ? null : Ct)
            }
            ,
            i._nonTextPauseCharacters = null,
            i._nonTextEndCharacters = null,
            i._notTextEndCharactersChoice = null,
            i._notTextEndCharactersString = null,
            i.TrimEndWhitespace = function(t, e) {
                if (t.length > 0) {
                    var n = t.length - 1
                      , r = t[n];
                    if (r instanceof Et) {
                        var a = r;
                        a.text = a.text.replace(new RegExp(/[ \t]+$/g), ""),
                        e ? a.text += " " : 0 === a.text.length && (t.splice(n, 1),
                        i.TrimEndWhitespace(t, !1))
                    }
                }
            }
            ,
            i.LineOfMixedTextAndLogic = function() {
                i.Parse(i.Whitespace);
                var t = i.Parse(i.MixedTextAndLogic);
                if (!t || !t.length)
                    return null;
                var e = t[0];
                return e && e.text && e.text.startsWith("return") && i.Warning("Do you need a '~' before 'return'? If not, perhaps use a glue: <> (since it's lowercase) or rewrite somehow?"),
                0 === t.length ? null : (t[t.length - 1]instanceof jt || i.TrimEndWhitespace(t, !1),
                i.EndTagIfNecessary(t),
                t.length > 0 && t[0]instanceof Ee && t[0].isStart || t.push(new Et("\n")),
                i.Expect(i.EndOfLine, "end of line", i.SkipToNextLine),
                t)
            }
            ,
            i.MixedTextAndLogic = function() {
                null !== i.ParseObject(i.Spaced(i.String("~"))) && i.Error("You shouldn't use a '~' here - tildas are for logic that's on its own line. To do inline logic, use { curly braces } instead");
                var t = i.Interleave(i.Optional(i.ContentText), i.Optional(i.InlineLogicOrGlueOrStartTag));
                if (!i._parsingChoice) {
                    var e, n = i.Parse(i.MultiDivert);
                    if (null !== n)
                        null === t && (t = []),
                        i.EndTagIfNecessary(t),
                        i.TrimEndWhitespace(t, !0),
                        (e = t).push.apply(e, g(n))
                }
                return t || null
            }
            ,
            i.ContentText = function() {
                return i.ContentTextAllowingEscapeChar()
            }
            ,
            i.ContentTextAllowingEscapeChar = function() {
                for (var t = null; ; ) {
                    var e = i.Parse(i.ContentTextNoEscape)
                      , n = null !== i.ParseString("\\");
                    if (!n && null === e)
                        break;
                    null === t && (t = ""),
                    null !== e && (t += String(e)),
                    n && (t += i.ParseSingleCharacter())
                }
                return null !== t ? new Et(t) : null
            }
            ,
            i.ContentTextNoEscape = function() {
                null === i._nonTextPauseCharacters && (i._nonTextPauseCharacters = new lt("-<")),
                null === i._nonTextEndCharacters && (i._nonTextEndCharacters = new lt("{}|\n\r\\#"),
                i._notTextEndCharactersChoice = new lt(i._nonTextEndCharacters),
                i._notTextEndCharactersChoice.AddCharacters("[]"),
                i._notTextEndCharactersString = new lt(i._nonTextEndCharacters),
                i._notTextEndCharactersString.AddCharacters('"'));
                var t = null;
                t = i.parsingStringExpression ? i._notTextEndCharactersString : i._parsingChoice ? i._notTextEndCharactersChoice : i._nonTextEndCharacters;
                var e = i.ParseUntil((function() {
                    return i.OneOf([i.ParseDivertArrow, i.ParseThreadArrow, i.EndOfLine, i.Glue])
                }
                ), i._nonTextPauseCharacters, t);
                return null !== e ? e : null
            }
            ,
            i.MultiDivert = function() {
                i.Whitespace();
                var t = []
                  , e = i.Parse(i.StartThread);
                if (e)
                    return t = [e];
                var n = i.Interleave(i.ParseDivertArrowOrTunnelOnwards, i.DivertIdentifierWithArguments);
                if (!n)
                    return null;
                t = [],
                i.EndTagIfNecessary(t);
                for (var r = 0; r < n.length; ++r) {
                    if (r % 2 == 0) {
                        if ("->->" === n[r]) {
                            0 === r || r === n.length - 1 || r === n.length - 2 || i.Error("Tunnel onwards '->->' must only come at the begining or the start of a divert");
                            var a = new Ut;
                            if (r < n.length - 1) {
                                var o = _(n[r + 1], jt);
                                a.divertAfter = o
                            }
                            t.push(a);
                            break
                        }
                    } else {
                        var s = n[r];
                        r < n.length - 1 && (s.isTunnel = !0),
                        t.push(s)
                    }
                }
                if (0 === t.length && 1 === n.length) {
                    var l = new jt(null);
                    l.isEmpty = !0,
                    t.push(l),
                    i._parsingChoice || i.Error("Empty diverts (->) are only valid on choices")
                }
                return t
            }
            ,
            i.StartThread = function() {
                if (i.Whitespace(),
                null === i.ParseThreadArrow())
                    return null;
                i.Whitespace();
                var t = i.Expect(i.DivertIdentifierWithArguments, "target for new thread", (function() {
                    return new jt(null)
                }
                ));
                return t.isThread = !0,
                t
            }
            ,
            i.DivertIdentifierWithArguments = function() {
                i.Whitespace();
                var t = i.Parse(i.DotSeparatedDivertPathComponents);
                if (!t)
                    return null;
                i.Whitespace();
                var e = i.Parse(i.ExpressionFunctionCallArguments);
                i.Whitespace();
                var n = new At(t);
                return new jt(n,e)
            }
            ,
            i.SingleDivert = function() {
                var t = i.Parse(i.MultiDivert);
                if (!t)
                    return null;
                if (1 !== t.length)
                    return null;
                if (t[0]instanceof Ut)
                    return null;
                var e = t[0];
                return e.isTunnel ? null : e
            }
            ,
            i.DotSeparatedDivertPathComponents = function() {
                return i.Interleave(i.Spaced(i.IdentifierWithMetadata), i.Exclude(i.String(".")))
            }
            ,
            i.ParseDivertArrowOrTunnelOnwards = function() {
                for (var t = 0; null !== i.ParseString("->"); )
                    t += 1;
                return 0 === t ? null : 1 === t ? "->" : (2 === t || i.Error("Unexpected number of arrows in divert. Should only have '->' or '->->'"),
                "->->")
            }
            ,
            i.ParseDivertArrow = function() {
                return i.ParseString("->")
            }
            ,
            i.ParseThreadArrow = function() {
                return i.ParseString("<-")
            }
            ,
            i._binaryOperators = [],
            i._maxBinaryOpLength = 0,
            i.TempDeclarationOrAssignment = function() {
                i.Whitespace();
                var t = i.ParseTempKeyword();
                i.Whitespace();
                var e = null;
                if (null === (e = t ? i.Expect(i.IdentifierWithMetadata, "variable name") : i.Parse(i.IdentifierWithMetadata)))
                    return null;
                i.Whitespace();
                var n = null !== i.ParseString("+")
                  , r = null !== i.ParseString("-");
                if (n && r && i.Error("Unexpected sequence '+-'"),
                null === i.ParseString("="))
                    return t && i.Error("Expected '='"),
                    null;
                var a = i.Expect(i.Expression, "value expression to be assigned");
                return n || r ? new ne(e,a,n) : new Jt({
                    variableIdentifier: e,
                    assignedExpression: a,
                    isTemporaryNewDeclaration: t
                })
            }
            ,
            i.DisallowIncrement = function(t) {
                t instanceof ne && i.Error("Can't use increment/decrement here. It can only be used on a ~ line")
            }
            ,
            i.ParseTempKeyword = function() {
                var t = i.BeginRule();
                return "temp" === i.Parse(i.Identifier) ? (i.SucceedRule(t),
                !0) : (i.FailRule(t),
                !1)
            }
            ,
            i.ReturnStatement = function() {
                if (i.Whitespace(),
                "return" !== i.Parse(i.Identifier))
                    return null;
                i.Whitespace();
                var t = i.Parse(i.Expression);
                return new Pt(t)
            }
            ,
            i.Expression = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                i.Whitespace();
                var n = i.ExpressionUnary();
                if (null === n)
                    return null;
                i.Whitespace();
                for (var r = function() {
                    var e = i.BeginRule()
                      , r = i.ParseInfixOperator();
                    if (null !== r && r.precedence > t) {
                        var a = "right side of '".concat(r.type, "' expression")
                          , o = i.Expect((function() {
                            return i.ExpressionInfixRight(n, r)
                        }
                        ), a);
                        return null === o ? (i.FailRule(e),
                        {
                            v: null
                        }) : (n = i.SucceedRule(e, o),
                        "continue")
                    }
                    return i.FailRule(e),
                    "break"
                }; ; ) {
                    var a = r();
                    if ("continue" !== a) {
                        if ("break" === a)
                            break;
                        if ("object" === e(a))
                            return a.v
                    }
                }
                return i.Whitespace(),
                n
            }
            ,
            i.ExpressionUnary = function() {
                var t = i.Parse(i.ExpressionDivertTarget);
                if (null !== t)
                    return t;
                var e = i.OneOf([i.String("-"), i.String("!")]);
                null === e && (e = i.Parse(i.ExpressionNot)),
                i.Whitespace();
                var n = i.OneOf([i.ExpressionList, i.ExpressionParen, i.ExpressionFunctionCall, i.ExpressionVariableName, i.ExpressionLiteral]);
                if (null === n && null !== e && (n = i.ExpressionUnary()),
                null === n)
                    return null;
                null !== e && (n = ot.WithInner(n, e)),
                i.Whitespace();
                var r = i.OneOf([i.String("++"), i.String("--")]);
                if (null !== r) {
                    var a = "++" === r;
                    if (n instanceof Wt)
                        n = new ne(n.identifier,a);
                    else
                        i.Error("can only increment and decrement variables, but saw '".concat(n, "'."))
                }
                return n
            }
            ,
            i.ExpressionNot = function() {
                var t = i.Identifier();
                return "not" === t ? t : null
            }
            ,
            i.ExpressionLiteral = function() {
                return i.OneOf([i.ExpressionFloat, i.ExpressionInt, i.ExpressionBool, i.ExpressionString])
            }
            ,
            i.ExpressionDivertTarget = function() {
                i.Whitespace();
                var t = i.Parse(i.SingleDivert);
                return !t || t && t.isThread ? null : (i.Whitespace(),
                new Vt(t))
            }
            ,
            i.ExpressionInt = function() {
                var t = i.ParseInt();
                return null === t ? null : new at(t,"int")
            }
            ,
            i.ExpressionFloat = function() {
                var t = i.ParseFloat();
                return null === t ? null : new at(t,"float")
            }
            ,
            i.ExpressionString = function() {
                if (null === i.ParseString('"'))
                    return null;
                i.parsingStringExpression = !0;
                var t = i.Parse(i.MixedTextAndLogic);
                return i.Expect(i.String('"'), "close quote for string expression"),
                i.parsingStringExpression = !1,
                null === t ? t = [new Et("")] : t.find((function(t) {
                    return t instanceof jt
                }
                )) && i.Error("String expressions cannot contain diverts (->)"),
                new ke(t)
            }
            ,
            i.ExpressionBool = function() {
                var t = i.Parse(i.Identifier);
                return "true" === t ? new at(!0,"bool") : "false" === t ? new at(!1,"bool") : null
            }
            ,
            i.ExpressionFunctionCall = function() {
                var t = i.Parse(i.IdentifierWithMetadata);
                if (null === t)
                    return null;
                i.Whitespace();
                var e = i.Parse(i.ExpressionFunctionCallArguments);
                return null === e ? null : new Rt(t,e)
            }
            ,
            i.ExpressionFunctionCallArguments = function() {
                if (null === i.ParseString("("))
                    return null;
                var t = i.Exclude(i.String(","))
                  , e = i.Interleave(i.Expression, t);
                return null === e && (e = []),
                i.Whitespace(),
                i.Expect(i.String(")"), "closing ')' for function call"),
                e
            }
            ,
            i.ExpressionVariableName = function() {
                var t = i.Interleave(i.IdentifierWithMetadata, i.Exclude(i.Spaced(i.String("."))));
                return null === t || we.IsReservedKeyword(t[0].name) ? null : new Wt(t)
            }
            ,
            i.ExpressionParen = function() {
                if (null === i.ParseString("("))
                    return null;
                var t = i.Parse(i.Expression);
                return null === t ? null : (i.Whitespace(),
                i.Expect(i.String(")"), "closing parenthesis ')' for expression"),
                t)
            }
            ,
            i.ExpressionInfixRight = function(t, e) {
                if (!t)
                    return null;
                i.Whitespace();
                var n = i.Parse((function() {
                    return i.Expression(e.precedence)
                }
                ));
                return n ? new st(t,n,e.type) : null
            }
            ,
            i.ParseInfixOperator = function() {
                var t, e = S(i._binaryOperators);
                try {
                    for (e.s(); !(t = e.n()).done; ) {
                        var n = t.value
                          , r = i.BeginRule();
                        if (null !== i.ParseString(n.type)) {
                            if (n.requireWhitespace && null === i.Whitespace()) {
                                i.FailRule(r);
                                continue
                            }
                            return i.SucceedRule(r, n)
                        }
                        i.FailRule(r)
                    }
                } catch (t) {
                    e.e(t)
                } finally {
                    e.f()
                }
                return null
            }
            ,
            i.ExpressionList = function() {
                if (i.Whitespace(),
                null === i.ParseString("("))
                    return null;
                i.Whitespace();
                var t = i.SeparatedList(i.ListMember, i.Spaced(i.String(",")));
                return i.Whitespace(),
                null === i.ParseString(")") ? null : new oe(t)
            }
            ,
            i.ListMember = function() {
                i.Whitespace();
                var t = i.Parse(i.IdentifierWithMetadata);
                if (null === t)
                    return null;
                if (null !== i.ParseString(".")) {
                    var e = i.Expect(i.IdentifierWithMetadata, "element name within the set ".concat(t));
                    t.name += ".".concat(null == e ? void 0 : e.name)
                }
                return i.Whitespace(),
                t
            }
            ,
            i.RegisterExpressionOperators = function() {
                i.RegisterBinaryOperator("&&", 1),
                i.RegisterBinaryOperator("||", 1),
                i.RegisterBinaryOperator("and", 1, !0),
                i.RegisterBinaryOperator("or", 1, !0),
                i.RegisterBinaryOperator("==", 2),
                i.RegisterBinaryOperator(">=", 2),
                i.RegisterBinaryOperator("<=", 2),
                i.RegisterBinaryOperator("<", 2),
                i.RegisterBinaryOperator(">", 2),
                i.RegisterBinaryOperator("!=", 2),
                i.RegisterBinaryOperator("?", 3),
                i.RegisterBinaryOperator("has", 3, !0),
                i.RegisterBinaryOperator("!?", 3),
                i.RegisterBinaryOperator("hasnt", 3, !0),
                i.RegisterBinaryOperator("^", 3),
                i.RegisterBinaryOperator("+", 4),
                i.RegisterBinaryOperator("-", 5),
                i.RegisterBinaryOperator("*", 6),
                i.RegisterBinaryOperator("/", 7),
                i.RegisterBinaryOperator("%", 8),
                i.RegisterBinaryOperator("mod", 8, !0)
            }
            ,
            i.RegisterBinaryOperator = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , r = new ie(t,e,n);
                i._binaryOperators.push(r),
                i._maxBinaryOpLength = Math.max(i._maxBinaryOpLength, t.length)
            }
            ,
            i._openFilenames = [],
            i.IncludeStatement = function() {
                if (i.Whitespace(),
                null === i.ParseString("INCLUDE"))
                    return null;
                i.Whitespace();
                var t = i.Expect((function() {
                    return i.ParseUntilCharactersFromString("\n\r")
                }
                ), "filename for include statement");
                t = t.replace(new RegExp(/[ \t]+$/g), "");
                var e = i.fileHandler.ResolveInkFilename(t);
                if (i.FilenameIsAlreadyOpen(e))
                    return i.Error("Recursive INCLUDE detected: '".concat(e, "' is already open.")),
                    i.ParseUntilCharactersFromString("\r\n"),
                    new re(null);
                i.AddOpenFilename(e);
                var n = null
                  , r = "";
                try {
                    r = i._rootParser.fileHandler.LoadInkFileContents(e)
                } catch (e) {
                    i.Error("Failed to load: '".concat(t, "'.\nError:").concat(e))
                }
                r && (n = new o(r,t,i._externalErrorHandler,i._rootParser,i.fileHandler).ParseStory());
                return i.RemoveOpenFilename(e),
                new re(n)
            }
            ,
            i.FilenameIsAlreadyOpen = function(t) {
                return i._rootParser._openFilenames.includes(t)
            }
            ,
            i.AddOpenFilename = function(t) {
                i._rootParser._openFilenames.push(t)
            }
            ,
            i.RemoveOpenFilename = function(t) {
                i._rootParser._openFilenames.splice(i._rootParser._openFilenames.indexOf(t), 1)
            }
            ,
            i.KnotDefinition = function() {
                var t = i.Parse(i.KnotDeclaration);
                if (null === t)
                    return null;
                i.Expect(i.EndOfLine, "end of line after knot name definition", i.SkipToNextLine);
                var e = i.Expect((function() {
                    return i.StatementsAtLevel(Xt.Knot)
                }
                ), "at least one line within the knot", i.KnotStitchNoContentRecoveryRule);
                return new ae(t.name,e,t.args,t.isFunction)
            }
            ,
            i.KnotDeclaration = function() {
                if (i.Whitespace(),
                null === i.KnotTitleEquals())
                    return null;
                i.Whitespace();
                var t, e = i.Parse(i.IdentifierWithMetadata), n = "function" === (null == e ? void 0 : e.name);
                n ? (i.Expect(i.Whitespace, "whitespace after the 'function' keyword"),
                t = i.Parse(i.IdentifierWithMetadata)) : t = e,
                null === t && (i.Error("Expected the name of the ".concat(n ? "function" : "knot")),
                t = new xt("")),
                i.Whitespace();
                var r = i.Parse(i.BracketedKnotDeclArguments);
                return i.Whitespace(),
                i.Parse(i.KnotTitleEquals),
                new Qt(t,r,n)
            }
            ,
            i.KnotTitleEquals = function() {
                var t = i.ParseCharactersFromString("=");
                return null === t || t.length <= 1 ? null : t
            }
            ,
            i.StitchDefinition = function() {
                var t = i.Parse(i.StitchDeclaration);
                if (null === t)
                    return null;
                i.Expect(i.EndOfLine, "end of line after stitch name", i.SkipToNextLine);
                var e = i.Expect((function() {
                    return i.StatementsAtLevel(Xt.Stitch)
                }
                ), "at least one line within the stitch", i.KnotStitchNoContentRecoveryRule);
                return new le(t.name,e,t.args,t.isFunction)
            }
            ,
            i.StitchDeclaration = function() {
                if (i.Whitespace(),
                null === i.ParseString("="))
                    return null;
                if (null !== i.ParseString("="))
                    return null;
                i.Whitespace();
                var t = null !== i.ParseString("function");
                t && i.Whitespace();
                var e = i.Parse(i.IdentifierWithMetadata);
                if (null === e)
                    return null;
                i.Whitespace();
                var n = i.Parse(i.BracketedKnotDeclArguments);
                return i.Whitespace(),
                new Qt(e,n,t)
            }
            ,
            i.KnotStitchNoContentRecoveryRule = function() {
                return i.ParseUntil(i.KnotDeclaration, new lt("="), null),
                [new Et("<ERROR IN FLOW>")]
            }
            ,
            i.BracketedKnotDeclArguments = function() {
                if (null === i.ParseString("("))
                    return null;
                var t = i.Interleave(i.Spaced(i.FlowDeclArgument), i.Exclude(i.String(",")));
                return i.Expect(i.String(")"), "closing ')' for parameter list"),
                null === t && (t = []),
                t
            }
            ,
            i.FlowDeclArgument = function() {
                var t = i.Parse(i.IdentifierWithMetadata);
                i.Whitespace();
                var e = i.ParseDivertArrow();
                i.Whitespace();
                var n = i.Parse(i.IdentifierWithMetadata);
                if (null == t && null === n)
                    return null;
                var r = new E;
                return null !== e && (r.isDivertTarget = !0),
                null !== t && "ref" === t.name ? (null === n && i.Error("Expected an parameter name after 'ref'"),
                r.identifier = n,
                r.isByReference = !0) : (r.isDivertTarget ? r.identifier = n : r.identifier = t,
                null === r.identifier && i.Error("Expected an parameter name"),
                r.isByReference = !1),
                r
            }
            ,
            i.ExternalDeclaration = function() {
                i.Whitespace();
                var t = i.Parse(i.IdentifierWithMetadata);
                if (null === t || "EXTERNAL" != t.name)
                    return null;
                i.Whitespace();
                var e = i.Expect(i.IdentifierWithMetadata, "name of external function") || new xt("");
                i.Whitespace();
                var n = i.Expect(i.BracketedKnotDeclArguments, "declaration of arguments for EXTERNAL, even if empty, i.e. 'EXTERNAL ".concat(e, "()'"));
                null === n && (n = []);
                var r = n.map((function(t) {
                    var e;
                    return null === (e = t.identifier) || void 0 === e ? void 0 : e.name
                }
                )).filter(O);
                return new Zt(e,r)
            }
            ,
            i._identifierCharSet = null,
            i.LogicLine = function() {
                if (i.Whitespace(),
                null === i.ParseString("~"))
                    return null;
                i.Whitespace();
                var t = i.Expect((function() {
                    return i.OneOf([i.ReturnStatement, i.TempDeclarationOrAssignment, i.Expression])
                }
                ), "expression after '~'", i.SkipToNextLine);
                if (null === t)
                    return new It;
                t instanceof nt && !(t instanceof Rt || t instanceof ne) && i.Error("Logic following a '~' can't be that type of expression. It can only be something like:\n\t~ return\n\t~ var x = blah\n\t~ x++\n\t~ myFunction()");
                var e = _(t, Rt);
                return e && (e.shouldPopReturnedValue = !0),
                null !== t.Find(Rt)() && (t = new It(t,new Et("\n"))),
                i.Expect(i.EndOfLine, "end of line", i.SkipToNextLine),
                t
            }
            ,
            i.VariableDeclaration = function() {
                if (i.Whitespace(),
                "VAR" !== i.Parse(i.Identifier))
                    return null;
                i.Whitespace();
                var t = i.Expect(i.IdentifierWithMetadata, "variable name");
                i.Whitespace(),
                i.Expect(i.String("="), "the '=' for an assignment of a value, e.g. '= 5' (initial values are mandatory)"),
                i.Whitespace();
                var e = i.Expect(i.Expression, "initial value for ");
                if (e) {
                    if (e instanceof at || e instanceof ke || e instanceof Vt || e instanceof Wt || e instanceof oe || i.Error("initial value for a variable must be a number, constant, list or divert target"),
                    null !== i.Parse(i.ListElementDefinitionSeparator))
                        i.Error("Unexpected ','. If you're trying to declare a new list, use the LIST keyword, not VAR");
                    else if (e instanceof ke) {
                        e.isSingleString || i.Error("Constant strings cannot contain any logic.")
                    }
                    return new Jt({
                        assignedExpression: e,
                        isGlobalDeclaration: !0,
                        variableIdentifier: t
                    })
                }
                return null
            }
            ,
            i.ListDeclaration = function() {
                if (i.Whitespace(),
                "LIST" != i.Parse(i.Identifier))
                    return null;
                i.Whitespace();
                var t = i.Expect(i.IdentifierWithMetadata, "list name");
                i.Whitespace(),
                i.Expect(i.String("="), "the '=' for an assignment of the list definition"),
                i.Whitespace();
                var e = i.Expect(i.ListDefinition, "list item names");
                return e ? (e.identifier = new xt(t.name),
                new Jt({
                    variableIdentifier: t,
                    listDef: e
                })) : null
            }
            ,
            i.ListDefinition = function() {
                i.AnyWhitespace();
                var t = i.SeparatedList(i.ListElementDefinition, i.ListElementDefinitionSeparator);
                return null === t ? null : new Ht(t)
            }
            ,
            i.ListElementDefinitionSeparator = function() {
                return i.AnyWhitespace(),
                null === i.ParseString(",") ? null : (i.AnyWhitespace(),
                ",")
            }
            ,
            i.ListElementDefinition = function() {
                var t = null !== i.ParseString("(")
                  , e = t;
                i.Whitespace();
                var n = i.Parse(i.IdentifierWithMetadata);
                if (null === n)
                    return null;
                i.Whitespace(),
                t && null != i.ParseString(")") && (e = !1,
                i.Whitespace());
                var r = null;
                if (null !== i.ParseString("=")) {
                    i.Whitespace();
                    var a = i.Expect(i.ExpressionInt, "value to be assigned to list item");
                    null !== a && (r = a.value),
                    e && (i.Whitespace(),
                    null !== i.ParseString(")") && (e = !1))
                }
                return e && i.Error("Expected closing ')'"),
                new se(n,t,r)
            }
            ,
            i.ConstDeclaration = function() {
                if (i.Whitespace(),
                "CONST" !== i.Parse(i.Identifier))
                    return null;
                i.Whitespace();
                var t = i.Expect(i.IdentifierWithMetadata, "constant name");
                i.Whitespace(),
                i.Expect(i.String("="), "the '=' for an assignment of a value, e.g. '= 5' (initial values are mandatory)"),
                i.Whitespace();
                var e = i.Expect(i.Expression, "initial value for ");
                if (e instanceof at || e instanceof Vt || e instanceof ke) {
                    if (e instanceof ke) {
                        e.isSingleString || i.Error("Constant strings cannot contain any logic.")
                    }
                } else
                    i.Error("initial value for a constant must be a number or divert target");
                return new _t(t,e)
            }
            ,
            i.InlineLogicOrGlueOrStartTag = function() {
                return i.OneOf([i.InlineLogic, i.Glue, i.StartTag])
            }
            ,
            i.Glue = function() {
                return null !== i.ParseString("<>") ? new te(new ee) : null
            }
            ,
            i.InlineLogic = function() {
                if (null === i.ParseString("{"))
                    return null;
                var t = i.parsingStringExpression
                  , e = i.tagActive;
                i.Whitespace();
                var n = i.Expect(i.InnerLogic, "some kind of logic, conditional or sequence within braces: { ... }");
                if (null === n)
                    return i.parsingStringExpression = t,
                    null;
                i.DisallowIncrement(n);
                var r = _(n, It);
                return r || (r = new It(n)),
                i.Whitespace(),
                i.Expect(i.String("}"), "closing brace '}' for inline logic"),
                i.parsingStringExpression = t,
                e || i.EndTagIfNecessary(r),
                r
            }
            ,
            i.InnerLogic = function() {
                i.Whitespace();
                var t = i.ParseObject(i.SequenceTypeAnnotation);
                if (null !== t) {
                    var e = i.Expect(i.InnerSequenceObjects, "sequence elements (for cycle/stoping etc)");
                    return null === e ? null : new qt(e,t)
                }
                var n = i.Parse(i.ConditionExpression);
                if (n)
                    return i.Expect((function() {
                        return i.InnerConditionalContent(n)
                    }
                    ), "conditional content following query");
                var r = [i.InnerConditionalContent, i.InnerSequence, i.InnerExpression];
                i.tagActive;
                for (var a = 0, o = r; a < o.length; a++) {
                    var s = o[a]
                      , l = i.BeginRule()
                      , u = i.ParseObject(s);
                    if (u) {
                        if (null !== i.Peek(i.Spaced(i.String("}"))))
                            return i.SucceedRule(l, u);
                        i.FailRule(l)
                    } else
                        i.FailRule(l)
                }
                return null
            }
            ,
            i.InnerExpression = function() {
                var t = i.Parse(i.Expression);
                return t && (t.outputWhenComplete = !0),
                t
            }
            ,
            i.IdentifierWithMetadata = function() {
                var t = i.Identifier();
                return null === t ? null : new xt(t)
            }
            ,
            i.Identifier = function() {
                var t = i.ParseCharactersFromCharSet(i.identifierCharSet);
                if (null === t)
                    return null;
                var e, n = !0, r = S(t);
                try {
                    for (r.s(); !(e = r.n()).done; ) {
                        var a = e.value;
                        if (!(a >= "0" && a <= "9")) {
                            n = !1;
                            break
                        }
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                return n ? null : t
            }
            ,
            i._sequenceTypeSymbols = new lt("!&~$"),
            i.InnerSequence = function() {
                i.Whitespace();
                var t = Dt.Stopping
                  , e = i.Parse(i.SequenceTypeAnnotation);
                null !== e && (t = e);
                var n = i.Parse(i.InnerSequenceObjects);
                return null === n || n.length <= 1 ? null : new qt(n,t)
            }
            ,
            i.SequenceTypeAnnotation = function() {
                var t = i.Parse(i.SequenceTypeSymbolAnnotation);
                if (null === t && (t = i.Parse(i.SequenceTypeWordAnnotation)),
                null === t)
                    return null;
                switch (t) {
                case Dt.Once:
                case Dt.Cycle:
                case Dt.Stopping:
                case Dt.Shuffle:
                case Dt.Shuffle | Dt.Stopping:
                case Dt.Shuffle | Dt.Once:
                    break;
                default:
                    return i.Error("Sequence type combination not supported: ".concat(t)),
                    Dt.Stopping
                }
                return t
            }
            ,
            i.SequenceTypeSymbolAnnotation = function() {
                null === i._sequenceTypeSymbols && (i._sequenceTypeSymbols = new lt("!&~$ "));
                var t = 0
                  , e = i.ParseCharactersFromCharSet(i._sequenceTypeSymbols);
                if (null === e)
                    return null;
                var n, r = S(e);
                try {
                    for (r.s(); !(n = r.n()).done; ) {
                        switch (n.value) {
                        case "!":
                            t |= Dt.Once;
                            break;
                        case "&":
                            t |= Dt.Cycle;
                            break;
                        case "~":
                            t |= Dt.Shuffle;
                            break;
                        case "$":
                            t |= Dt.Stopping
                        }
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                return 0 === t ? null : t
            }
            ,
            i.SequenceTypeWordAnnotation = function() {
                var t = i.Interleave(i.SequenceTypeSingleWord, i.Exclude(i.Whitespace));
                if (null === t || 0 === t.length)
                    return null;
                if (null === i.ParseString(":"))
                    return null;
                var e, n = 0, r = S(t);
                try {
                    for (r.s(); !(e = r.n()).done; ) {
                        n |= e.value
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
                return n
            }
            ,
            i.SequenceTypeSingleWord = function() {
                var t = null
                  , e = i.Parse(i.IdentifierWithMetadata);
                if (null !== e)
                    switch (e.name) {
                    case "once":
                        t = Dt.Once;
                        break;
                    case "cycle":
                        t = Dt.Cycle;
                        break;
                    case "shuffle":
                        t = Dt.Shuffle;
                        break;
                    case "stopping":
                        t = Dt.Stopping
                    }
                return null === t ? null : t
            }
            ,
            i.InnerSequenceObjects = function() {
                return null !== i.Parse(i.Newline) ? i.Parse(i.InnerMultilineSequenceObjects) : i.Parse(i.InnerInlineSequenceObjects)
            }
            ,
            i.InnerInlineSequenceObjects = function() {
                var t = i.Interleave(i.Optional(i.MixedTextAndLogic), i.String("|"), null, !1);
                if (null === t)
                    return null;
                var e, n = [], r = !1, a = S(t);
                try {
                    for (a.s(); !(e = a.n()).done; ) {
                        var o = e.value;
                        if ("|" === o)
                            r || n.push(new It),
                            r = !1;
                        else {
                            var s = o;
                            null === s ? i.Error("Expected content, but got ".concat(o, " (this is an ink compiler bug!)")) : n.push(new It(s)),
                            r = !0
                        }
                    }
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
                return r || n.push(new It),
                n
            }
            ,
            i.InnerMultilineSequenceObjects = function() {
                i.MultilineWhitespace();
                var t = i.OneOrMore(i.SingleMultilineSequenceElement);
                return null === t ? null : t
            }
            ,
            i.SingleMultilineSequenceElement = function() {
                if (i.Whitespace(),
                null !== i.ParseString("->"))
                    return null;
                if (null === i.ParseString("-"))
                    return null;
                i.Whitespace();
                var t = i.StatementsAtLevel(Xt.InnerBlock);
                return null === t ? i.MultilineWhitespace() : t.unshift(new Et("\n")),
                new It(t)
            }
            ,
            i._statementRulesAtLevel = [],
            i._statementBreakRulesAtLevel = [],
            i.StatementsAtLevel = function(t) {
                t === Xt.InnerBlock && (null !== i.Parse(i.GatherDashes) && i.Error("You can't use a gather (the dashes) within the { curly braces } context. For multi-line sequences and conditions, you should only use one dash."));
                return i.Interleave(i.Optional(i.MultilineWhitespace), (function() {
                    return i.StatementAtLevel(t)
                }
                ), (function() {
                    return i.StatementsBreakForLevel(t)
                }
                ))
            }
            ,
            i.StatementAtLevel = function(t) {
                var e = i._statementRulesAtLevel[t]
                  , n = i.OneOf(e);
                return t === Xt.Top && n instanceof Pt && i.Error("should not have return statement outside of a knot"),
                n
            }
            ,
            i.StatementsBreakForLevel = function(t) {
                i.Whitespace();
                var e = i._statementBreakRulesAtLevel[t]
                  , n = i.OneOf(e);
                return null === n ? null : n
            }
            ,
            i.GenerateStatementLevelRules = function() {
                var t = Object.values(Xt);
                i._statementRulesAtLevel = "f".repeat(t.length).split("f").map((function() {
                    return []
                }
                )),
                i._statementBreakRulesAtLevel = "f".repeat(t.length).split("f").map((function() {
                    return []
                }
                ));
                for (var e = 0, n = t; e < n.length; e++) {
                    var r = n[e]
                      , a = []
                      , o = [];
                    a.push(i.Line(i.MultiDivert)),
                    r >= Xt.Top && a.push(i.KnotDefinition),
                    a.push(i.Line(i.Choice)),
                    a.push(i.Line(i.AuthorWarning)),
                    r > Xt.InnerBlock && a.push(i.Gather),
                    r >= Xt.Knot && a.push(i.StitchDefinition),
                    a.push(i.Line(i.ListDeclaration)),
                    a.push(i.Line(i.VariableDeclaration)),
                    a.push(i.Line(i.ConstDeclaration)),
                    a.push(i.Line(i.ExternalDeclaration)),
                    a.push(i.Line(i.IncludeStatement)),
                    a.push(i.LogicLine),
                    a.push(i.LineOfMixedTextAndLogic),
                    r <= Xt.Knot && o.push(i.KnotDeclaration),
                    r <= Xt.Stitch && o.push(i.StitchDeclaration),
                    r <= Xt.InnerBlock && (o.push(i.ParseDashNotArrow),
                    o.push(i.String("}"))),
                    i._statementRulesAtLevel[r] = a,
                    i._statementBreakRulesAtLevel[r] = o
                }
            }
            ,
            i.SkipToNextLine = function() {
                return i.ParseUntilCharactersFromString("\n\r"),
                i.ParseNewline(),
                Ct
            }
            ,
            i.Line = function(t) {
                return function() {
                    var e = i.ParseObject(t);
                    return null === e ? null : (i.Expect(i.EndOfLine, "end of line", i.SkipToNextLine),
                    e)
                }
            }
            ,
            i.StartTag = function() {
                if (i.Whitespace(),
                null === i.ParseString("#"))
                    return null;
                i.parsingStringExpression && i.Error("Tags aren't allowed inside of strings. Please use \\# if you want a hash symbol.");
                var t = null;
                if (i.tagActive) {
                    var e = new It;
                    e.AddContent(new Ee(!1)),
                    e.AddContent(new Ee(!0)),
                    t = e
                } else
                    t = new Ee(!0);
                return i.tagActive = !0,
                i.Whitespace(),
                t
            }
            ,
            i._inlineWhitespaceChars = new lt(" \t"),
            i.EndOfLine = function() {
                return i.OneOf([i.Newline, i.EndOfFile])
            }
            ,
            i.Newline = function() {
                return i.Whitespace(),
                null !== i.ParseNewline() ? Ct : null
            }
            ,
            i.EndOfFile = function() {
                return i.Whitespace(),
                i.endOfInput ? Ct : null
            }
            ,
            i.MultilineWhitespace = function() {
                var t = i.OneOrMore(i.Newline);
                return null === t ? null : t.length >= 1 ? Ct : null
            }
            ,
            i.Whitespace = function() {
                return null !== i.ParseCharactersFromCharSet(i._inlineWhitespaceChars) ? Ct : null
            }
            ,
            i.Spaced = function(t) {
                return function() {
                    i.Whitespace();
                    var e = i.ParseObject(t);
                    return null === e ? null : (i.Whitespace(),
                    e)
                }
            }
            ,
            i.AnyWhitespace = function() {
                for (var t = !1; null !== i.OneOf([i.Whitespace, i.MultilineWhitespace]); )
                    t = !0;
                return t ? Ct : null
            }
            ,
            i.MultiSpaced = function(t) {
                return function() {
                    i.AnyWhitespace();
                    var e = i.ParseObject(t);
                    return null === e ? null : (i.AnyWhitespace(),
                    e)
                }
            }
            ,
            i._filename = null,
            i._externalErrorHandler = null,
            i._fileHandler = null,
            i._filename = a,
            i.RegisterExpressionOperators(),
            i.GenerateStatementLevelRules(),
            i.errorHandler = i.OnStringParserError,
            i._externalErrorHandler = s,
            i._fileHandler = null === u ? new _e : u,
            null === l) {
                if (i._rootParser = h(i),
                i._openFilenames = [],
                null !== i._filename) {
                    var c = i.fileHandler.ResolveInkFilename(i._filename);
                    i._openFilenames.push(c)
                }
            } else
                i._rootParser = l;
            return i
        }
        return i(o, [{
            key: "fileHandler",
            get: function() {
                if (!this._fileHandler)
                    throw new Error("No FileHandler defined");
                return this._fileHandler
            },
            set: function(t) {
                this._fileHandler = t
            }
        }, {
            key: "PreProcessInputString",
            value: function(t) {
                return new wt(t).Process()
            }
        }, {
            key: "parsingStringExpression",
            get: function() {
                return this.GetFlag(Number(Gt.ParsingString))
            },
            set: function(t) {
                this.SetFlag(Number(Gt.ParsingString), t)
            }
        }, {
            key: "tagActive",
            get: function() {
                return this.GetFlag(Number(Gt.TagActive))
            },
            set: function(t) {
                this.SetFlag(Number(Gt.TagActive), t)
            }
        }, {
            key: "identifierCharSet",
            get: function() {
                return null === this._identifierCharSet && ((this._identifierCharSet = new lt).AddRange("A", "Z").AddRange("a", "z").AddRange("0", "9").Add("_"),
                this.ExtendIdentifierCharacterRanges(this._identifierCharSet)),
                this._identifierCharSet
            }
        }, {
            key: "EndTagIfNecessary",
            value: function(t) {
                this.tagActive && (null != t && (t instanceof It ? t.AddContent(new Ee(!1)) : t.push(new Ee(!1))),
                this.tagActive = !1)
            }
        }]),
        o
    }(St);
    Te.LatinBasic = ut.Define("A", "z", (new lt).AddRange("[", "`")),
    Te.LatinExtendedA = ut.Define("Ā", "ſ"),
    Te.LatinExtendedB = ut.Define("ƀ", "ɏ"),
    Te.Greek = ut.Define("Ͱ", "Ͽ", (new lt).AddRange("͸", "΅").AddCharacters("ʹ͵͸·΋΍΢")),
    Te.Cyrillic = ut.Define("Ѐ", "ӿ", (new lt).AddRange("҂", "҉")),
    Te.Armenian = ut.Define("԰", "֏", (new lt).AddCharacters("԰").AddRange("՗", "ՠ").AddRange("ֈ", "֎")),
    Te.Hebrew = ut.Define("֐", "׿", new lt),
    Te.Arabic = ut.Define("؀", "ۿ", new lt),
    Te.Korean = ut.Define("가", "힯", new lt),
    Te.ListAllCharacterRanges = function() {
        return [Te.LatinBasic, Te.LatinExtendedA, Te.LatinExtendedB, Te.Arabic, Te.Armenian, Te.Cyrillic, Te.Greek, Te.Hebrew, Te.Korean]
    }
    ;
    var Ae = i((function t(e) {
        var r = this;
        n(this, t),
        this.fileHierarchy = e,
        this.ResolveInkFilename = function(t) {
            if (Object.keys(r.fileHierarchy).includes(t))
                return t;
            throw new Error("Cannot locate ".concat(t, ". Are you trying a relative import ? This is not yet implemented."))
        }
        ,
        this.LoadInkFileContents = function(t) {
            if (Object.keys(r.fileHierarchy).includes(t))
                return r.fileHierarchy[t];
            throw new Error("Cannot open ".concat(t, "."))
        }
    }
    ))
      , Pe = function() {
        function t(e) {
            var r = this
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            n(this, t),
            this._errors = [],
            this._warnings = [],
            this._authorMessages = [],
            this._parsedStory = null,
            this._runtimeStory = null,
            this._parser = null,
            this._debugSourceRanges = [],
            this.Compile = function() {
                return r._parser = new Te(r.inputString,r.options.sourceFilename || null,r.OnError,null,r.options.fileHandler),
                r._parsedStory = r.parser.ParseStory(),
                0 === r.errors.length ? (r.parsedStory.countAllVisits = r.options.countAllVisits,
                r._runtimeStory = r.parsedStory.ExportRuntime(r.OnError)) : r._runtimeStory = null,
                r.runtimeStory
            }
            ,
            this.RetrieveDebugSourceForLatestContent = function() {
                var t, e, n = S(r.runtimeStory.state.outputStream);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var i = _(e.value, $);
                        if (null !== i) {
                            var a = new k((null === (t = i.value) || void 0 === t ? void 0 : t.length) || 0,i.debugMetadata,i.value || "unknown");
                            r.debugSourceRanges.push(a)
                        }
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
            }
            ,
            this.DebugMetadataForContentAtOffset = function(t) {
                var e, n = 0, i = null, a = S(r.debugSourceRanges);
                try {
                    for (a.s(); !(e = a.n()).done; ) {
                        var o = e.value;
                        if (null !== o.debugMetadata && (i = o.debugMetadata),
                        t >= n && t < n + o.length)
                            return i;
                        n += o.length
                    }
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
                return null
            }
            ,
            this.OnError = function(t, e) {
                switch (e) {
                case b.Author:
                    r._authorMessages.push(t);
                    break;
                case b.Warning:
                    r._warnings.push(t);
                    break;
                case b.Error:
                    r._errors.push(t)
                }
                null !== r.options.errorHandler && r.options.errorHandler(t, e)
            }
            ,
            this._inputString = e,
            this._options = i || new w
        }
        return i(t, [{
            key: "errors",
            get: function() {
                return this._errors
            }
        }, {
            key: "warnings",
            get: function() {
                return this._warnings
            }
        }, {
            key: "authorMessages",
            get: function() {
                return this._authorMessages
            }
        }, {
            key: "inputString",
            get: function() {
                return this._inputString
            }
        }, {
            key: "options",
            get: function() {
                return this._options
            }
        }, {
            key: "parsedStory",
            get: function() {
                if (!this._parsedStory)
                    throw new Error;
                return this._parsedStory
            }
        }, {
            key: "runtimeStory",
            get: function() {
                if (!this._runtimeStory)
                    throw new Error("Compilation failed.");
                return this._runtimeStory
            }
        }, {
            key: "parser",
            get: function() {
                if (!this._parser)
                    throw new Error;
                return this._parser
            }
        }, {
            key: "debugSourceRanges",
            get: function() {
                return this._debugSourceRanges
            }
        }]),
        t
    }();
    t.Compiler = Pe,
    t.CompilerOptions = w,
    t.InkList = M,
    t.JsonFileHandler = Ae,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}
));