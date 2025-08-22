function _regeneratorRuntime() { "use strict"; _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.symbol.async-iterator.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.symbol.to-string-tag.js";
import "core-js/modules/es.error.cause.js";
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.fill.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.array.from.js";
import "core-js/modules/es.array.includes.js";
import "core-js/modules/es.array.index-of.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.push.js";
import "core-js/modules/es.array.reduce.js";
import "core-js/modules/es.array.reverse.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.array.sort.js";
import "core-js/modules/es.array.splice.js";
import "core-js/modules/es.array.to-reversed.js";
import "core-js/modules/es.array.to-sorted.js";
import "core-js/modules/es.array.to-spliced.js";
import "core-js/modules/es.array.unshift.js";
import "core-js/modules/es.array-buffer.constructor.js";
import "core-js/modules/es.array-buffer.slice.js";
import "core-js/modules/es.array-buffer.detached.js";
import "core-js/modules/es.array-buffer.transfer.js";
import "core-js/modules/es.array-buffer.transfer-to-fixed-length.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.global-this.js";
import "core-js/modules/es.json.stringify.js";
import "core-js/modules/es.json.to-string-tag.js";
import "core-js/modules/es.map.js";
import "core-js/modules/es.math.to-string-tag.js";
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.object.assign.js";
import "core-js/modules/es.object.entries.js";
import "core-js/modules/es.object.freeze.js";
import "core-js/modules/es.object.get-own-property-descriptor.js";
import "core-js/modules/es.object.get-own-property-descriptors.js";
import "core-js/modules/es.object.get-own-property-names.js";
import "core-js/modules/es.object.get-prototype-of.js";
import "core-js/modules/es.object.is-extensible.js";
import "core-js/modules/es.object.keys.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";
import "core-js/modules/es.promise.finally.js";
import "core-js/modules/es.reflect.construct.js";
import "core-js/modules/es.reflect.delete-property.js";
import "core-js/modules/es.reflect.get.js";
import "core-js/modules/es.reflect.get-prototype-of.js";
import "core-js/modules/es.reflect.has.js";
import "core-js/modules/es.reflect.own-keys.js";
import "core-js/modules/es.reflect.set.js";
import "core-js/modules/es.regexp.constructor.js";
import "core-js/modules/es.regexp.dot-all.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.regexp.flags.js";
import "core-js/modules/es.regexp.sticky.js";
import "core-js/modules/es.regexp.test.js";
import "core-js/modules/es.regexp.to-string.js";
import "core-js/modules/es.set.js";
import "core-js/modules/es.set.difference.v2.js";
import "core-js/modules/es.set.intersection.v2.js";
import "core-js/modules/es.set.is-disjoint-from.v2.js";
import "core-js/modules/es.set.is-subset-of.v2.js";
import "core-js/modules/es.set.is-superset-of.v2.js";
import "core-js/modules/es.set.symmetric-difference.v2.js";
import "core-js/modules/es.set.union.v2.js";
import "core-js/modules/es.string.ends-with.js";
import "core-js/modules/es.string.includes.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/es.string.match.js";
import "core-js/modules/es.string.replace.js";
import "core-js/modules/es.string.starts-with.js";
import "core-js/modules/es.typed-array.uint8-array.js";
import "core-js/modules/es.typed-array.at.js";
import "core-js/modules/es.typed-array.copy-within.js";
import "core-js/modules/es.typed-array.every.js";
import "core-js/modules/es.typed-array.fill.js";
import "core-js/modules/es.typed-array.filter.js";
import "core-js/modules/es.typed-array.find.js";
import "core-js/modules/es.typed-array.find-index.js";
import "core-js/modules/es.typed-array.find-last.js";
import "core-js/modules/es.typed-array.find-last-index.js";
import "core-js/modules/es.typed-array.for-each.js";
import "core-js/modules/es.typed-array.includes.js";
import "core-js/modules/es.typed-array.index-of.js";
import "core-js/modules/es.typed-array.iterator.js";
import "core-js/modules/es.typed-array.join.js";
import "core-js/modules/es.typed-array.last-index-of.js";
import "core-js/modules/es.typed-array.map.js";
import "core-js/modules/es.typed-array.reduce.js";
import "core-js/modules/es.typed-array.reduce-right.js";
import "core-js/modules/es.typed-array.reverse.js";
import "core-js/modules/es.typed-array.set.js";
import "core-js/modules/es.typed-array.slice.js";
import "core-js/modules/es.typed-array.some.js";
import "core-js/modules/es.typed-array.sort.js";
import "core-js/modules/es.typed-array.to-locale-string.js";
import "core-js/modules/es.typed-array.to-reversed.js";
import "core-js/modules/es.typed-array.to-sorted.js";
import "core-js/modules/es.typed-array.to-string.js";
import "core-js/modules/es.typed-array.with.js";
import "core-js/modules/es.weak-map.js";
import "core-js/modules/es.weak-set.js";
import "core-js/modules/esnext.iterator.constructor.js";
import "core-js/modules/esnext.iterator.filter.js";
import "core-js/modules/esnext.iterator.for-each.js";
import "core-js/modules/esnext.iterator.map.js";
import "core-js/modules/esnext.iterator.reduce.js";
import "core-js/modules/esnext.iterator.some.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/web.dom-exception.constructor.js";
import "core-js/modules/web.dom-exception.stack.js";
import "core-js/modules/web.dom-exception.to-string-tag.js";
import "core-js/modules/web.self.js";
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n5 = 0, F = function F() {}; return { s: F, n: function n() { return _n5 >= r.length ? { done: !0 } : { done: !1, value: r[_n5++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var Cr = function Cr(e, n) {
  return function () {
    return n || e((n = {
      exports: {}
    }).exports, n), n.exports;
  };
};
var Vu = Cr(function (D, F) {
  var _da;
  (function () {
    var n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    var _iterator = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var s = _step.value;
        o(s);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    new MutationObserver(function (s) {
      var _iterator2 = _createForOfIteratorHelper(s),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var u = _step2.value;
          if (u.type === "childList") {
            var _iterator3 = _createForOfIteratorHelper(u.addedNodes),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var f = _step3.value;
                f.tagName === "LINK" && f.rel === "modulepreload" && o(f);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }).observe(document, {
      childList: !0,
      subtree: !0
    });
    function t(s) {
      var u = {};
      return s.integrity && (u.integrity = s.integrity), s.referrerPolicy && (u.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? u.credentials = "include" : s.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin", u;
    }
    function o(s) {
      if (s.ep) return;
      s.ep = !0;
      var u = t(s);
      fetch(s.href, u);
    }
  })();
  var Rr = function (_Phaser$Loader$FileTy) {
    function Rr(n, t, o) {
      var _this;
      _classCallCheck(this, Rr);
      var s = {
        type: "base64Image",
        key: t,
        url: o
      };
      _this = _callSuper(this, Rr, [n, _objectSpread(_objectSpread({}, s), {}, {
        xhrSettings: void 0
      })]), _this.base64DataUrl = o, _this.state = Phaser.Loader.FILE_PENDING;
      return _this;
    }
    _inherits(Rr, _Phaser$Loader$FileTy);
    return _createClass(Rr, [{
      key: "load",
      value: function load() {
        if (this.state === Phaser.Loader.FILE_POPULATED) {
          this.loader.nextFile(this, !0);
          return;
        }
        this.state = Phaser.Loader.FILE_LOADED, this.loader.nextFile(this, !0);
      }
    }, {
      key: "onProcess",
      value: function onProcess() {
        var _this2 = this;
        this.state = Phaser.Loader.FILE_PROCESSING;
        var n = new Image();
        this.data = n, this.data.onload = function () {
          _this2.onProcessComplete();
        }, this.data.onerror = function () {
          _this2.onProcessError();
        }, n.src = this.base64DataUrl;
      }
    }]);
  }(Phaser.Loader.FileTypes.ImageFile);
  var Lr = function (_Phaser$Loader$FileTy2) {
    function Lr(n, t, o) {
      var _this3;
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
      _classCallCheck(this, Lr);
      var u = {
        type: "base64Video",
        key: t,
        url: o,
        noAudio: s
      };
      _this3 = _callSuper(this, Lr, [n, t, _objectSpread(_objectSpread({}, u), {}, {
        xhrSettings: void 0
      })]), _this3.base64DataUrl = o, _this3.state = Phaser.Loader.FILE_PENDING;
      return _this3;
    }
    _inherits(Lr, _Phaser$Loader$FileTy2);
    return _createClass(Lr, [{
      key: "load",
      value: function load() {
        if (this.state === Phaser.Loader.FILE_POPULATED) {
          this.loader.nextFile(this, !0);
          return;
        }
        this.state = Phaser.Loader.FILE_LOADED, this.loader.nextFile(this, !0);
      }
    }, {
      key: "onProcess",
      value: function onProcess() {
        var _this4 = this;
        this.state = Phaser.Loader.FILE_PROCESSING;
        var n = document.createElement("video");
        n.controls = !1, n.crossOrigin = this.crossOrigin || "anonymous", n.playsInline = !0, n.preload = "auto", this.config.noAudio && (n.muted = !0, n.defaultMuted = !0), this.data = n, n.onloadeddata = function () {
          _this4.onProcessComplete();
        }, n.onerror = function () {
          _this4.onProcessError();
        }, n.src = this.base64DataUrl, n.load();
      }
    }]);
  }(Phaser.Loader.FileTypes.VideoFile);
  function Sn(e) {
    return _typeof(e) == "object" && "valueOf" in e && "__is_auto_assets_key__" in e && e.__is_auto_assets_key__;
  }
  function On(e) {
    return _typeof(e) == "object" && "valueOf" in e && "__is_auto_assets_url__" in e && e.__is_auto_assets_url__;
  }
  function Je(e, n) {
    var t = Object.freeze(new Map(Object.entries(n).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          u = _ref2[0],
          f = _ref2[1];
        return [u, f];
      }))),
      _o2 = function o(u) {
        var f = e + "/" + u;
        return Object.assign(f, {
          __is_auto_assets_key__: !0,
          __get_auto_assets_url__: function __get_auto_assets_url__() {
            return _o2.getUrl(u);
          }
        });
      };
    _o2.names = Object.freeze(Array.from(t.keys())), _o2.getUrl = function (u) {
      return Object.assign(t.get(u), {
        __is_auto_assets_url__: !0,
        __get_auto_assets_key__: function __get_auto_assets_key__() {
          return _o2(u);
        }
      });
    };
    var s = function s(u, f, l) {
      var d = e + "/" + f;
      f.startsWith("audio/") && u.load.audio(d, l), f.startsWith("images/") && (l.startsWith("data:") ? u.load.addFile(new Rr(u.load, d, l)) : u.load.image(d, l)), f.startsWith("videos/") && (l.startsWith("data:") ? u.load.addFile(new Lr(u.load, d, l)) : u.load.video(d, l));
    };
    return _o2.loadAll = function (u) {
      var _iterator4 = _createForOfIteratorHelper(t.entries()),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _step4$value = _slicedToArray(_step4.value, 2),
            f = _step4$value[0],
            l = _step4$value[1];
          s(u, f, l);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }, _o2.loadPrefix = function (u, f) {
      var _iterator5 = _createForOfIteratorHelper(t.entries()),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _step5$value = _slicedToArray(_step5.value, 2),
            l = _step5$value[0],
            d = _step5$value[1];
          l.startsWith(f) && s(u, l, d);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }, _o2;
  }
  var Mr = "assets/mp3/c2df71b7.g03oh8l1162p.mp3",
    Nr = "assets/png/39698006.dlhiwafx3gu1.png",
    ot = Je("/src/questions/rec--r0-z02--fruit-to-be-paired/assets", {
      "audio/bgm.mp3": Mr,
      "images/背景.png": Nr
    }),
    Dr = "assets/mp3/9dc1ddc9.kt6srjzo1e0m.mp3",
    Fr = "assets/png/e9299ea7.ksskccu45wsk.png",
    $r = "assets/png/a746d4df.mp51ky7tcacw.png",
    jr = "assets/png/ddd2569a.kzmxrol103kb.png",
    Br = "assets/png/078b7c24.eoh7rgzaw6y3.png",
    Hr = "assets/png/369cd561.gmsul68mwazr.png",
    kr = "assets/png/e1e15e8c.lnavfn56d07r.png",
    Gr = "assets/png/401fbfa8.lgo5l5z7ymbi.png",
    Xr = "assets/png/0ff2a2c0.m9ddmtaab7sc.png",
    Ae = Je("/src/questions/rec--r0-z02--fruit-to-be-paired/components/fruit/assets", {
      "audio/翻1张牌.mp3": Dr,
      "images/正面/梨.png": Fr,
      "images/正面/橙子.png": $r,
      "images/正面/苹果.png": jr,
      "images/正面/葡萄.png": Br,
      "images/正面/西瓜.png": Hr,
      "images/正面/香蕉.png": kr,
      "images/背面-悬浮.png": Gr,
      "images/背面.png": Xr
    });
  var Pn = (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global && global.Object === Object && global,
    qr = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self,
    ve = Pn || qr || Function("return this")(),
    me = ve.Symbol,
    xn = Object.prototype,
    Ur = xn.hasOwnProperty,
    Wr = xn.toString,
    Ee = me ? me.toStringTag : void 0;
  function Vr(e) {
    var n = Ur.call(e, Ee),
      t = e[Ee];
    try {
      e[Ee] = void 0;
      var o = !0;
    } catch (_unused) {}
    var s = Wr.call(e);
    return o && (n ? e[Ee] = t : delete e[Ee]), s;
  }
  var Qr = Object.prototype,
    Yr = Qr.toString;
  function Kr(e) {
    return Yr.call(e);
  }
  var zr = "[object Null]",
    Jr = "[object Undefined]",
    Qt = me ? me.toStringTag : void 0;
  function Fe(e) {
    return e == null ? e === void 0 ? Jr : zr : Qt && Qt in Object(e) ? Vr(e) : Kr(e);
  }
  function ye(e) {
    return e != null && _typeof(e) == "object";
  }
  var Zr = "[object Symbol]";
  function Ze(e) {
    return _typeof(e) == "symbol" || ye(e) && Fe(e) == Zr;
  }
  function eo(e, n) {
    for (var t = -1, o = e == null ? 0 : e.length, s = Array(o); ++t < o;) s[t] = n(e[t], t, e);
    return s;
  }
  var ge = Array.isArray,
    to = 1 / 0,
    Yt = me ? me.prototype : void 0,
    Kt = Yt ? Yt.toString : void 0;
  function In(e) {
    if (typeof e == "string") return e;
    if (ge(e)) return eo(e, In) + "";
    if (Ze(e)) return Kt ? Kt.call(e) : "";
    var n = e + "";
    return n == "0" && 1 / e == -to ? "-0" : n;
  }
  var no = /\s/;
  function ro(e) {
    for (var n = e.length; n-- && no.test(e.charAt(n)););
    return n;
  }
  var oo = /^\s+/;
  function io(e) {
    return e && e.slice(0, ro(e) + 1).replace(oo, "");
  }
  function K(e) {
    var n = _typeof(e);
    return e != null && (n == "object" || n == "function");
  }
  var zt = NaN,
    so = /^[-+]0x[0-9a-f]+$/i,
    ao = /^0b[01]+$/i,
    uo = /^0o[0-7]+$/i,
    fo = parseInt;
  function co(e) {
    if (typeof e == "number") return e;
    if (Ze(e)) return zt;
    if (K(e)) {
      var n = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = K(n) ? n + "" : n;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = io(e);
    var t = ao.test(e);
    return t || uo.test(e) ? fo(e.slice(2), t ? 2 : 8) : so.test(e) ? zt : +e;
  }
  var Jt = 1 / 0,
    lo = 17976931348623157e292;
  function _o(e) {
    if (!e) return e === 0 ? e : 0;
    if (e = co(e), e === Jt || e === -Jt) {
      var n = e < 0 ? -1 : 1;
      return n * lo;
    }
    return e === e ? e : 0;
  }
  function po(e) {
    var n = _o(e),
      t = n % 1;
    return n === n ? t ? n - t : n : 0;
  }
  function Cn(e) {
    return e;
  }
  var ho = "[object AsyncFunction]",
    mo = "[object Function]",
    go = "[object GeneratorFunction]",
    vo = "[object Proxy]";
  function Ot(e) {
    if (!K(e)) return !1;
    var n = Fe(e);
    return n == mo || n == go || n == ho || n == vo;
  }
  var it = ve["__core-js_shared__"],
    Zt = function () {
      var e = /[^.]+$/.exec(it && it.keys && it.keys.IE_PROTO || "");
      return e ? "Symbol(src)_1." + e : "";
    }();
  function yo(e) {
    return !!Zt && Zt in e;
  }
  var wo = Function.prototype,
    bo = wo.toString;
  function To(e) {
    if (e != null) {
      try {
        return bo.call(e);
      } catch (_unused2) {}
      try {
        return e + "";
      } catch (_unused3) {}
    }
    return "";
  }
  var Ao = /[\\^$.*+?()[\]{}|]/g,
    Eo = /^\[object .+?Constructor\]$/,
    So = Function.prototype,
    Oo = Object.prototype,
    Po = So.toString,
    xo = Oo.hasOwnProperty,
    Io = RegExp("^" + Po.call(xo).replace(Ao, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function Co(e) {
    if (!K(e) || yo(e)) return !1;
    var n = Ot(e) ? Io : Eo;
    return n.test(To(e));
  }
  function Ro(e, n) {
    return e == null ? void 0 : e[n];
  }
  function Pt(e, n) {
    var t = Ro(e, n);
    return Co(t) ? t : void 0;
  }
  var en = Object.create,
    Lo = function () {
      function e() {}
      return function (n) {
        if (!K(n)) return {};
        if (en) return en(n);
        e.prototype = n;
        var t = new e();
        return e.prototype = void 0, t;
      };
    }();
  function Mo(e, n, t) {
    switch (t.length) {
      case 0:
        return e.call(n);
      case 1:
        return e.call(n, t[0]);
      case 2:
        return e.call(n, t[0], t[1]);
      case 3:
        return e.call(n, t[0], t[1], t[2]);
    }
    return e.apply(n, t);
  }
  function j() {}
  function No(e, n) {
    var t = -1,
      o = e.length;
    for (n || (n = Array(o)); ++t < o;) n[t] = e[t];
    return n;
  }
  var Do = 800,
    Fo = 16,
    $o = Date.now;
  function jo(e) {
    var n = 0,
      t = 0;
    return function () {
      var o = $o(),
        s = Fo - (o - t);
      if (t = o, s > 0) {
        if (++n >= Do) return arguments[0];
      } else n = 0;
      return e.apply(void 0, arguments);
    };
  }
  function Bo(e) {
    return function () {
      return e;
    };
  }
  var We = function () {
      try {
        var e = Pt(Object, "defineProperty");
        return e({}, "", {}), e;
      } catch (_unused4) {}
    }(),
    Ho = We ? function (e, n) {
      return We(e, "toString", {
        configurable: !0,
        enumerable: !1,
        value: Bo(n),
        writable: !0
      });
    } : Cn,
    ko = jo(Ho),
    Go = 9007199254740991,
    Xo = /^(?:0|[1-9]\d*)$/;
  function Rn(e, n) {
    var _n2;
    var t = _typeof(e);
    return n = (_n2 = n) !== null && _n2 !== void 0 ? _n2 : Go, !!n && (t == "number" || t != "symbol" && Xo.test(e)) && e > -1 && e % 1 == 0 && e < n;
  }
  function xt(e, n, t) {
    n == "__proto__" && We ? We(e, n, {
      configurable: !0,
      enumerable: !0,
      value: t,
      writable: !0
    }) : e[n] = t;
  }
  function et(e, n) {
    return e === n || e !== e && n !== n;
  }
  var qo = Object.prototype,
    Uo = qo.hasOwnProperty;
  function Wo(e, n, t) {
    var o = e[n];
    (!(Uo.call(e, n) && et(o, t)) || t === void 0 && !(n in e)) && xt(e, n, t);
  }
  function Vo(e, n, t, o) {
    var s = !t;
    t || (t = {});
    for (var u = -1, f = n.length; ++u < f;) {
      var l = n[u],
        d = void 0;
      d === void 0 && (d = e[l]), s ? xt(t, l, d) : Wo(t, l, d);
    }
    return t;
  }
  var tn = Math.max;
  function Qo(e, n, t) {
    return n = tn(n === void 0 ? e.length - 1 : n, 0), function () {
      for (var o = arguments, s = -1, u = tn(o.length - n, 0), f = Array(u); ++s < u;) f[s] = o[n + s];
      s = -1;
      for (var l = Array(n + 1); ++s < n;) l[s] = o[s];
      return l[n] = t(f), Mo(e, this, l);
    };
  }
  function Yo(e, n) {
    return ko(Qo(e, n, Cn), e + "");
  }
  var Ko = 9007199254740991;
  function Ln(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ko;
  }
  function It(e) {
    return e != null && Ln(e.length) && !Ot(e);
  }
  function zo(e, n, t) {
    if (!K(t)) return !1;
    var o = _typeof(n);
    return (o == "number" ? It(t) && Rn(n, t.length) : o == "string" && n in t) ? et(t[n], e) : !1;
  }
  function Jo(e) {
    return Yo(function (n, t) {
      var o = -1,
        s = t.length,
        u = s > 1 ? t[s - 1] : void 0,
        f = s > 2 ? t[2] : void 0;
      for (u = e.length > 3 && typeof u == "function" ? (s--, u) : void 0, f && zo(t[0], t[1], f) && (u = s < 3 ? void 0 : u, s = 1), n = Object(n); ++o < s;) {
        var l = t[o];
        l && e(n, l, o, u);
      }
      return n;
    });
  }
  var Zo = Object.prototype;
  function Mn(e) {
    var n = e && e.constructor,
      t = typeof n == "function" && n.prototype || Zo;
    return e === t;
  }
  function ei(e, n) {
    for (var t = -1, o = Array(e); ++t < e;) o[t] = n(t);
    return o;
  }
  var ti = "[object Arguments]";
  function nn(e) {
    return ye(e) && Fe(e) == ti;
  }
  var Nn = Object.prototype,
    ni = Nn.hasOwnProperty,
    ri = Nn.propertyIsEnumerable,
    _t = nn(function () {
      return arguments;
    }()) ? nn : function (e) {
      return ye(e) && ni.call(e, "callee") && !ri.call(e, "callee");
    };
  function oi() {
    return !1;
  }
  var Dn = _typeof(D) == "object" && D && !D.nodeType && D,
    rn = Dn && _typeof(F) == "object" && F && !F.nodeType && F,
    ii = rn && rn.exports === Dn,
    on = ii ? ve.Buffer : void 0,
    si = on ? on.isBuffer : void 0,
    Fn = si || oi,
    ai = "[object Arguments]",
    ui = "[object Array]",
    fi = "[object Boolean]",
    ci = "[object Date]",
    li = "[object Error]",
    di = "[object Function]",
    _i = "[object Map]",
    pi = "[object Number]",
    hi = "[object Object]",
    mi = "[object RegExp]",
    gi = "[object Set]",
    vi = "[object String]",
    yi = "[object WeakMap]",
    wi = "[object ArrayBuffer]",
    bi = "[object DataView]",
    Ti = "[object Float32Array]",
    Ai = "[object Float64Array]",
    Ei = "[object Int8Array]",
    Si = "[object Int16Array]",
    Oi = "[object Int32Array]",
    Pi = "[object Uint8Array]",
    xi = "[object Uint8ClampedArray]",
    Ii = "[object Uint16Array]",
    Ci = "[object Uint32Array]",
    O = {};
  O[Ti] = O[Ai] = O[Ei] = O[Si] = O[Oi] = O[Pi] = O[xi] = O[Ii] = O[Ci] = !0;
  O[ai] = O[ui] = O[wi] = O[fi] = O[bi] = O[ci] = O[li] = O[di] = O[_i] = O[pi] = O[hi] = O[mi] = O[gi] = O[vi] = O[yi] = !1;
  function Ri(e) {
    return ye(e) && Ln(e.length) && !!O[Fe(e)];
  }
  function Li(e) {
    return function (n) {
      return e(n);
    };
  }
  var $n = _typeof(D) == "object" && D && !D.nodeType && D,
    xe = $n && _typeof(F) == "object" && F && !F.nodeType && F,
    Mi = xe && xe.exports === $n,
    st = Mi && Pn.process,
    sn = function () {
      try {
        var e = xe && xe.require && xe.require("util").types;
        return e || st && st.binding && st.binding("util");
      } catch (_unused5) {}
    }(),
    an = sn && sn.isTypedArray,
    jn = an ? Li(an) : Ri;
  function Ni(e, n) {
    var t = ge(e),
      o = !t && _t(e),
      s = !t && !o && Fn(e),
      u = !t && !o && !s && jn(e),
      f = t || o || s || u,
      l = f ? ei(e.length, String) : [],
      d = l.length;
    for (var p in e) f && (p == "length" || s && (p == "offset" || p == "parent") || u && (p == "buffer" || p == "byteLength" || p == "byteOffset") || Rn(p, d)) || l.push(p);
    return l;
  }
  function Di(e, n) {
    return function (t) {
      return e(n(t));
    };
  }
  function Fi(e) {
    var n = [];
    if (e != null) for (var t in Object(e)) n.push(t);
    return n;
  }
  var $i = Object.prototype,
    ji = $i.hasOwnProperty;
  function Bi(e) {
    if (!K(e)) return Fi(e);
    var n = Mn(e),
      t = [];
    for (var o in e) o == "constructor" && (n || !ji.call(e, o)) || t.push(o);
    return t;
  }
  function Bn(e) {
    return It(e) ? Ni(e) : Bi(e);
  }
  var Hi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    ki = /^\w*$/;
  function Gi(e, n) {
    if (ge(e)) return !1;
    var t = _typeof(e);
    return t == "number" || t == "symbol" || t == "boolean" || e == null || Ze(e) ? !0 : ki.test(e) || !Hi.test(e) || n != null && e in Object(n);
  }
  var Le = Pt(Object, "create");
  function Xi() {
    this.__data__ = Le ? Le(null) : {}, this.size = 0;
  }
  function qi(e) {
    var n = this.has(e) && delete this.__data__[e];
    return this.size -= n ? 1 : 0, n;
  }
  var Ui = "__lodash_hash_undefined__",
    Wi = Object.prototype,
    Vi = Wi.hasOwnProperty;
  function Qi(e) {
    var n = this.__data__;
    if (Le) {
      var t = n[e];
      return t === Ui ? void 0 : t;
    }
    return Vi.call(n, e) ? n[e] : void 0;
  }
  var Yi = Object.prototype,
    Ki = Yi.hasOwnProperty;
  function zi(e) {
    var n = this.__data__;
    return Le ? n[e] !== void 0 : Ki.call(n, e);
  }
  var Ji = "__lodash_hash_undefined__";
  function Zi(e, n) {
    var t = this.__data__;
    return this.size += this.has(e) ? 0 : 1, t[e] = Le && n === void 0 ? Ji : n, this;
  }
  function ue(e) {
    var n = -1,
      t = e == null ? 0 : e.length;
    for (this.clear(); ++n < t;) {
      var o = e[n];
      this.set(o[0], o[1]);
    }
  }
  ue.prototype.clear = Xi;
  ue.prototype.delete = qi;
  ue.prototype.get = Qi;
  ue.prototype.has = zi;
  ue.prototype.set = Zi;
  function es() {
    this.__data__ = [], this.size = 0;
  }
  function tt(e, n) {
    for (var t = e.length; t--;) if (et(e[t][0], n)) return t;
    return -1;
  }
  var ts = Array.prototype,
    ns = ts.splice;
  function rs(e) {
    var n = this.__data__,
      t = tt(n, e);
    if (t < 0) return !1;
    var o = n.length - 1;
    return t == o ? n.pop() : ns.call(n, t, 1), --this.size, !0;
  }
  function os(e) {
    var n = this.__data__,
      t = tt(n, e);
    return t < 0 ? void 0 : n[t][1];
  }
  function is(e) {
    return tt(this.__data__, e) > -1;
  }
  function ss(e, n) {
    var t = this.__data__,
      o = tt(t, e);
    return o < 0 ? (++this.size, t.push([e, n])) : t[o][1] = n, this;
  }
  function z(e) {
    var n = -1,
      t = e == null ? 0 : e.length;
    for (this.clear(); ++n < t;) {
      var o = e[n];
      this.set(o[0], o[1]);
    }
  }
  z.prototype.clear = es;
  z.prototype.delete = rs;
  z.prototype.get = os;
  z.prototype.has = is;
  z.prototype.set = ss;
  var Hn = Pt(ve, "Map");
  function as() {
    this.size = 0, this.__data__ = {
      hash: new ue(),
      map: new (Hn || z)(),
      string: new ue()
    };
  }
  function us(e) {
    var n = _typeof(e);
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
  }
  function nt(e, n) {
    var t = e.__data__;
    return us(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
  }
  function fs(e) {
    var n = nt(this, e).delete(e);
    return this.size -= n ? 1 : 0, n;
  }
  function cs(e) {
    return nt(this, e).get(e);
  }
  function ls(e) {
    return nt(this, e).has(e);
  }
  function ds(e, n) {
    var t = nt(this, e),
      o = t.size;
    return t.set(e, n), this.size += t.size == o ? 0 : 1, this;
  }
  function re(e) {
    var n = -1,
      t = e == null ? 0 : e.length;
    for (this.clear(); ++n < t;) {
      var o = e[n];
      this.set(o[0], o[1]);
    }
  }
  re.prototype.clear = as;
  re.prototype.delete = fs;
  re.prototype.get = cs;
  re.prototype.has = ls;
  re.prototype.set = ds;
  var _s = "Expected a function";
  function Ct(e, n) {
    if (typeof e != "function" || n != null && typeof n != "function") throw new TypeError(_s);
    var _t2 = function t() {
      var o = arguments,
        s = n ? n.apply(this, o) : o[0],
        u = _t2.cache;
      if (u.has(s)) return u.get(s);
      var f = e.apply(this, o);
      return _t2.cache = u.set(s, f) || u, f;
    };
    return _t2.cache = new (Ct.Cache || re)(), _t2;
  }
  Ct.Cache = re;
  var ps = 500;
  function hs(e) {
    var n = Ct(e, function (o) {
        return t.size === ps && t.clear(), o;
      }),
      t = n.cache;
    return n;
  }
  var ms = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    gs = /\\(\\)?/g,
    vs = hs(function (e) {
      var n = [];
      return e.charCodeAt(0) === 46 && n.push(""), e.replace(ms, function (t, o, s, u) {
        n.push(s ? u.replace(gs, "$1") : o || t);
      }), n;
    });
  function ys(e) {
    return e == null ? "" : In(e);
  }
  function ws(e, n) {
    return ge(e) ? e : Gi(e, n) ? [e] : vs(ys(e));
  }
  var bs = 1 / 0;
  function Ts(e) {
    if (typeof e == "string" || Ze(e)) return e;
    var n = e + "";
    return n == "0" && 1 / e == -bs ? "-0" : n;
  }
  function As(e, n) {
    n = ws(n, e);
    for (var t = 0, o = n.length; e != null && t < o;) e = e[Ts(n[t++])];
    return t && t == o ? e : void 0;
  }
  function P(e, n, t) {
    var o = e == null ? void 0 : As(e, n);
    return o === void 0 ? t : o;
  }
  var kn = Di(Object.getPrototypeOf, Object),
    Es = "[object Object]",
    Ss = Function.prototype,
    Os = Object.prototype,
    Gn = Ss.toString,
    Ps = Os.hasOwnProperty,
    xs = Gn.call(Object);
  function Is(e) {
    if (!ye(e) || Fe(e) != Es) return !1;
    var n = kn(e);
    if (n === null) return !0;
    var t = Ps.call(n, "constructor") && n.constructor;
    return typeof t == "function" && t instanceof t && Gn.call(t) == xs;
  }
  var Cs = "Expected a function";
  function Rs(e, n) {
    var t;
    if (typeof n != "function") throw new TypeError(Cs);
    return e = po(e), function () {
      return --e > 0 && (t = n.apply(this, arguments)), e <= 1 && (n = void 0), t;
    };
  }
  function Ls() {
    this.__data__ = new z(), this.size = 0;
  }
  function Ms(e) {
    var n = this.__data__,
      t = n.delete(e);
    return this.size = n.size, t;
  }
  function Ns(e) {
    return this.__data__.get(e);
  }
  function Ds(e) {
    return this.__data__.has(e);
  }
  var Fs = 200;
  function $s(e, n) {
    var t = this.__data__;
    if (t instanceof z) {
      var o = t.__data__;
      if (!Hn || o.length < Fs - 1) return o.push([e, n]), this.size = ++t.size, this;
      t = this.__data__ = new re(o);
    }
    return t.set(e, n), this.size = t.size, this;
  }
  function we(e) {
    var n = this.__data__ = new z(e);
    this.size = n.size;
  }
  we.prototype.clear = Ls;
  we.prototype.delete = Ms;
  we.prototype.get = Ns;
  we.prototype.has = Ds;
  we.prototype.set = $s;
  var Xn = _typeof(D) == "object" && D && !D.nodeType && D,
    un = Xn && _typeof(F) == "object" && F && !F.nodeType && F,
    js = un && un.exports === Xn,
    fn = js ? ve.Buffer : void 0;
  fn && fn.allocUnsafe;
  function Bs(e, n) {
    return e.slice();
  }
  var cn = ve.Uint8Array;
  function Hs(e) {
    var n = new e.constructor(e.byteLength);
    return new cn(n).set(new cn(e)), n;
  }
  function ks(e, n) {
    var t = Hs(e.buffer);
    return new e.constructor(t, e.byteOffset, e.length);
  }
  function Gs(e) {
    return typeof e.constructor == "function" && !Mn(e) ? Lo(kn(e)) : {};
  }
  function Xs(e) {
    return function (n, t, o) {
      for (var s = -1, u = Object(n), f = o(n), l = f.length; l--;) {
        var d = f[++s];
        if (t(u[d], d, u) === !1) break;
      }
      return n;
    };
  }
  var qs = Xs();
  function pt(e, n, t) {
    (t !== void 0 && !et(e[n], t) || t === void 0 && !(n in e)) && xt(e, n, t);
  }
  function Us(e) {
    return ye(e) && It(e);
  }
  function ht(e, n) {
    if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__") return e[n];
  }
  function Ws(e) {
    return Vo(e, Bn(e));
  }
  function Vs(e, n, t, o, s, u, f) {
    var l = ht(e, t),
      d = ht(n, t),
      p = f.get(d);
    if (p) {
      pt(e, t, p);
      return;
    }
    var g = u ? u(l, d, t + "", e, n, f) : void 0,
      r = g === void 0;
    if (r) {
      var i = ge(d),
        a = !i && Fn(d),
        c = !i && !a && jn(d);
      g = d, i || a || c ? ge(l) ? g = l : Us(l) ? g = No(l) : a ? (r = !1, g = Bs(d)) : c ? (r = !1, g = ks(d)) : g = [] : Is(d) || _t(d) ? (g = l, _t(l) ? g = Ws(l) : (!K(l) || Ot(l)) && (g = Gs(d))) : r = !1;
    }
    r && (f.set(d, g), s(g, d, o, u, f), f.delete(d)), pt(e, t, g);
  }
  function qn(e, n, t, o, s) {
    e !== n && qs(n, function (u, f) {
      if (s || (s = new we()), K(u)) Vs(e, n, f, t, qn, o, s);else {
        var l = o ? o(ht(e, f), u, f + "", e, n, s) : void 0;
        l === void 0 && (l = u), pt(e, f, l);
      }
    }, Bn);
  }
  function T(e) {
    return e == null;
  }
  var Un = Jo(function (e, n, t) {
    qn(e, n, t);
  });
  function Wn(e) {
    return Rs(2, e);
  }
  function Qs(e, n) {
    var t;
    var o = function o(s, u, f, l) {
      n({
        pointer: s,
        localX: u,
        localY: f,
        event: l
      }, t);
    };
    return t = function t() {
      e.off(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, o);
    }, e.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, o), {
      off: t
    };
  }
  function Ys(e, n) {
    var t;
    var o = function o(s, u, f, l) {
      n({
        pointer: s,
        localX: u,
        localY: f,
        event: l
      }, t);
    };
    return t = function t() {
      e.off(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, o);
    }, e.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, o), {
      off: t
    };
  }
  function Ks(e, n) {
    var t;
    var o = function o(s, u) {
      n({
        pointer: s,
        event: u
      }, t);
    };
    return t = function t() {
      e.off(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, o);
    }, e.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, o), {
      off: t
    };
  }
  function zs(e, n) {
    var t;
    var o = function o(s, u, f, l) {
      n({
        pointer: s,
        localX: u,
        localY: f,
        event: l
      }, t);
    };
    return t = function t() {
      e.off(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, o);
    }, e.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, o), {
      off: t
    };
  } /**
    * @vue/shared v3.5.13
    * (c) 2018-present Yuxi (Evan) You and Vue contributors
    * @license MIT
    **/
  function Js(e) {
    var n = Object.create(null);
    var _iterator6 = _createForOfIteratorHelper(e.split(",")),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var t = _step6.value;
        n[t] = 1;
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return function (t) {
      return t in n;
    };
  }
  var Rt = {},
    qe = function qe() {},
    Vn = Object.assign,
    Zs = function Zs(e, n) {
      var t = e.indexOf(n);
      t > -1 && e.splice(t, 1);
    },
    ea = Object.prototype.hasOwnProperty,
    mt = function mt(e, n) {
      return ea.call(e, n);
    },
    G = Array.isArray,
    Ie = function Ie(e) {
      return rt(e) === "[object Map]";
    },
    ta = function ta(e) {
      return rt(e) === "[object Set]";
    },
    Y = function Y(e) {
      return typeof e == "function";
    },
    na = function na(e) {
      return typeof e == "string";
    },
    $e = function $e(e) {
      return _typeof(e) == "symbol";
    },
    be = function be(e) {
      return e !== null && _typeof(e) == "object";
    },
    ra = function ra(e) {
      return (be(e) || Y(e)) && Y(e.then) && Y(e.catch);
    },
    oa = Object.prototype.toString,
    rt = function rt(e) {
      return oa.call(e);
    },
    ia = function ia(e) {
      return rt(e).slice(8, -1);
    },
    sa = function sa(e) {
      return rt(e) === "[object Object]";
    },
    Lt = function Lt(e) {
      return na(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
    },
    ne = function ne(e, n) {
      return !Object.is(e, n);
    };
  var ln;
  var Mt = function Mt() {
    return ln || (ln = (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" ? globalThis : (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? self : (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" ? window : (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" ? global : {});
  }; /**
     * @vue/reactivity v3.5.13
     * (c) 2018-present Yuxi (Evan) You and Vue contributors
     * @license MIT
     **/
  var R;
  var aa = function () {
    function aa() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      _classCallCheck(this, aa);
      this.detached = n, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = R, !n && R && (this.index = (R.scopes || (R.scopes = [])).push(this) - 1);
    }
    return _createClass(aa, [{
      key: "active",
      get: function get() {
        return this._active;
      }
    }, {
      key: "pause",
      value: function pause() {
        if (this._active) {
          this._isPaused = !0;
          var n, t;
          if (this.scopes) for (n = 0, t = this.scopes.length; n < t; n++) this.scopes[n].pause();
          for (n = 0, t = this.effects.length; n < t; n++) this.effects[n].pause();
        }
      }
    }, {
      key: "resume",
      value: function resume() {
        if (this._active && this._isPaused) {
          this._isPaused = !1;
          var n, t;
          if (this.scopes) for (n = 0, t = this.scopes.length; n < t; n++) this.scopes[n].resume();
          for (n = 0, t = this.effects.length; n < t; n++) this.effects[n].resume();
        }
      }
    }, {
      key: "run",
      value: function run(n) {
        if (this._active) {
          var t = R;
          try {
            return R = this, n();
          } finally {
            R = t;
          }
        }
      }
    }, {
      key: "on",
      value: function on() {
        R = this;
      }
    }, {
      key: "off",
      value: function off() {
        R = this.parent;
      }
    }, {
      key: "stop",
      value: function stop(n) {
        if (this._active) {
          this._active = !1;
          var t, o;
          for (t = 0, o = this.effects.length; t < o; t++) this.effects[t].stop();
          for (this.effects.length = 0, t = 0, o = this.cleanups.length; t < o; t++) this.cleanups[t]();
          if (this.cleanups.length = 0, this.scopes) {
            for (t = 0, o = this.scopes.length; t < o; t++) this.scopes[t].stop(!0);
            this.scopes.length = 0;
          }
          if (!this.detached && this.parent && !n) {
            var s = this.parent.scopes.pop();
            s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
          }
          this.parent = void 0;
        }
      }
    }]);
  }();
  function Qn(e) {
    return new aa(e);
  }
  function Yn() {
    return R;
  }
  function ua(e) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    R && R.cleanups.push(e);
  }
  var S;
  var at = new WeakSet();
  var fa = function () {
    function fa(n) {
      _classCallCheck(this, fa);
      this.fn = n, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, R && R.active && R.effects.push(this);
    }
    return _createClass(fa, [{
      key: "pause",
      value: function pause() {
        this.flags |= 64;
      }
    }, {
      key: "resume",
      value: function resume() {
        this.flags & 64 && (this.flags &= -65, at.has(this) && (at.delete(this), this.trigger()));
      }
    }, {
      key: "notify",
      value: function notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || zn(this);
      }
    }, {
      key: "run",
      value: function run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2, dn(this), Jn(this);
        var n = S,
          t = X;
        S = this, X = !0;
        try {
          return this.fn();
        } finally {
          Zn(this), S = n, X = t, this.flags &= -3;
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.flags & 1) {
          for (var n = this.deps; n; n = n.nextDep) Ft(n);
          this.deps = this.depsTail = void 0, dn(this), this.onStop && this.onStop(), this.flags &= -2;
        }
      }
    }, {
      key: "trigger",
      value: function trigger() {
        this.flags & 64 ? at.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
      }
    }, {
      key: "runIfDirty",
      value: function runIfDirty() {
        gt(this) && this.run();
      }
    }, {
      key: "dirty",
      get: function get() {
        return gt(this);
      }
    }]);
  }();
  var Kn = 0,
    Ce,
    Re;
  function zn(e) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    if (e.flags |= 8, n) {
      e.next = Re, Re = e;
      return;
    }
    e.next = Ce, Ce = e;
  }
  function Nt() {
    Kn++;
  }
  function Dt() {
    if (--Kn > 0) return;
    if (Re) {
      var n = Re;
      for (Re = void 0; n;) {
        var t = n.next;
        n.next = void 0, n.flags &= -9, n = t;
      }
    }
    var e;
    for (; Ce;) {
      var _n3 = Ce;
      for (Ce = void 0; _n3;) {
        var _t3 = _n3.next;
        if (_n3.next = void 0, _n3.flags &= -9, _n3.flags & 1) try {
          _n3.trigger();
        } catch (o) {
          e || (e = o);
        }
        _n3 = _t3;
      }
    }
    if (e) throw e;
  }
  function Jn(e) {
    for (var n = e.deps; n; n = n.nextDep) n.version = -1, n.prevActiveLink = n.dep.activeLink, n.dep.activeLink = n;
  }
  function Zn(e) {
    var n,
      t = e.depsTail,
      o = t;
    for (; o;) {
      var s = o.prevDep;
      o.version === -1 ? (o === t && (t = s), Ft(o), ca(o)) : n = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
    }
    e.deps = n, e.depsTail = t;
  }
  function gt(e) {
    for (var n = e.deps; n; n = n.nextDep) if (n.dep.version !== n.version || n.dep.computed && (er(n.dep.computed) || n.dep.version !== n.version)) return !0;
    return !!e._dirty;
  }
  function er(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Me)) return;
    e.globalVersion = Me;
    var n = e.dep;
    if (e.flags |= 2, n.version > 0 && !e.isSSR && e.deps && !gt(e)) {
      e.flags &= -3;
      return;
    }
    var t = S,
      o = X;
    S = e, X = !0;
    try {
      Jn(e);
      var s = e.fn(e._value);
      (n.version === 0 || ne(s, e._value)) && (e._value = s, n.version++);
    } catch (s) {
      throw n.version++, s;
    } finally {
      S = t, X = o, Zn(e), e.flags &= -3;
    }
  }
  function Ft(e) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var t = e.dep,
      o = e.prevSub,
      s = e.nextSub;
    if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), t.subs === e && (t.subs = o, !o && t.computed)) {
      t.computed.flags &= -5;
      for (var u = t.computed.deps; u; u = u.nextDep) Ft(u, !0);
    }
    !n && ! --t.sc && t.map && t.map.delete(t.key);
  }
  function ca(e) {
    var n = e.prevDep,
      t = e.nextDep;
    n && (n.nextDep = t, e.prevDep = void 0), t && (t.prevDep = n, e.nextDep = void 0);
  }
  var X = !0;
  var tr = [];
  function $t() {
    tr.push(X), X = !1;
  }
  function jt() {
    var e = tr.pop();
    X = e === void 0 ? !0 : e;
  }
  function dn(e) {
    var n = e.cleanup;
    if (e.cleanup = void 0, n) {
      var t = S;
      S = void 0;
      try {
        n();
      } finally {
        S = t;
      }
    }
  }
  var Me = 0;
  var la = _createClass(function la(n, t) {
    _classCallCheck(this, la);
    this.sub = n, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  });
  var Bt = function () {
    function Bt(n) {
      _classCallCheck(this, Bt);
      this.computed = n, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
    }
    return _createClass(Bt, [{
      key: "track",
      value: function track(n) {
        if (!S || !X || S === this.computed) return;
        var t = this.activeLink;
        if (t === void 0 || t.sub !== S) t = this.activeLink = new la(S, this), S.deps ? (t.prevDep = S.depsTail, S.depsTail.nextDep = t, S.depsTail = t) : S.deps = S.depsTail = t, nr(t);else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
          var o = t.nextDep;
          o.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = o), t.prevDep = S.depsTail, t.nextDep = void 0, S.depsTail.nextDep = t, S.depsTail = t, S.deps === t && (S.deps = o);
        }
        return t;
      }
    }, {
      key: "trigger",
      value: function trigger(n) {
        this.version++, Me++, this.notify(n);
      }
    }, {
      key: "notify",
      value: function notify(n) {
        Nt();
        try {
          for (var t = this.subs; t; t = t.prevSub) t.sub.notify() && t.sub.dep.notify();
        } finally {
          Dt();
        }
      }
    }]);
  }();
  function nr(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      var n = e.dep.computed;
      if (n && !e.dep.subs) {
        n.flags |= 20;
        for (var o = n.deps; o; o = o.nextDep) nr(o);
      }
      var t = e.dep.subs;
      t !== e && (e.prevSub = t, t && (t.nextSub = e)), e.dep.subs = e;
    }
  }
  var vt = new WeakMap(),
    ae = Symbol(""),
    yt = Symbol(""),
    Ne = Symbol("");
  function N(e, n, t) {
    if (X && S) {
      var o = vt.get(e);
      o || vt.set(e, o = new Map());
      var s = o.get(t);
      s || (o.set(t, s = new Bt()), s.map = o, s.key = t), s.track();
    }
  }
  function ee(e, n, t, o, s, u) {
    var f = vt.get(e);
    if (!f) {
      Me++;
      return;
    }
    var l = function l(d) {
      d && d.trigger();
    };
    if (Nt(), n === "clear") f.forEach(l);else {
      var d = G(e),
        p = d && Lt(t);
      if (d && t === "length") {
        var g = Number(o);
        f.forEach(function (r, i) {
          (i === "length" || i === Ne || !$e(i) && i >= g) && l(r);
        });
      } else switch ((t !== void 0 || f.has(void 0)) && l(f.get(t)), p && l(f.get(Ne)), n) {
        case "add":
          d ? p && l(f.get("length")) : (l(f.get(ae)), Ie(e) && l(f.get(yt)));
          break;
        case "delete":
          d || (l(f.get(ae)), Ie(e) && l(f.get(yt)));
          break;
        case "set":
          Ie(e) && l(f.get(ae));
          break;
      }
    }
    Dt();
  }
  function ce(e) {
    var n = E(e);
    return n === e ? n : (N(n, "iterate", Ne), q(e) ? n : n.map(L));
  }
  function Ht(e) {
    return N(e = E(e), "iterate", Ne), e;
  }
  var da = (_da = {
    __proto__: null
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_da, Symbol.iterator, function () {
    return ut(this, Symbol.iterator, L);
  }), "concat", function concat() {
    var _ce;
    for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
      e[_key] = arguments[_key];
    }
    return (_ce = ce(this)).concat.apply(_ce, _toConsumableArray(e.map(function (n) {
      return G(n) ? ce(n) : n;
    })));
  }), "entries", function entries() {
    return ut(this, "entries", function (e) {
      return e[1] = L(e[1]), e;
    });
  }), "every", function every(e, n) {
    return V(this, "every", e, n, void 0, arguments);
  }), "filter", function filter(e, n) {
    return V(this, "filter", e, n, function (t) {
      return t.map(L);
    }, arguments);
  }), "find", function find(e, n) {
    return V(this, "find", e, n, L, arguments);
  }), "findIndex", function findIndex(e, n) {
    return V(this, "findIndex", e, n, void 0, arguments);
  }), "findLast", function findLast(e, n) {
    return V(this, "findLast", e, n, L, arguments);
  }), "findLastIndex", function findLastIndex(e, n) {
    return V(this, "findLastIndex", e, n, void 0, arguments);
  }), "forEach", function forEach(e, n) {
    return V(this, "forEach", e, n, void 0, arguments);
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_da, "includes", function includes() {
    for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      e[_key2] = arguments[_key2];
    }
    return ft(this, "includes", e);
  }), "indexOf", function indexOf() {
    for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      e[_key3] = arguments[_key3];
    }
    return ft(this, "indexOf", e);
  }), "join", function join(e) {
    return ce(this).join(e);
  }), "lastIndexOf", function lastIndexOf() {
    for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      e[_key4] = arguments[_key4];
    }
    return ft(this, "lastIndexOf", e);
  }), "map", function map(e, n) {
    return V(this, "map", e, n, void 0, arguments);
  }), "pop", function pop() {
    return Se(this, "pop");
  }), "push", function push() {
    for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      e[_key5] = arguments[_key5];
    }
    return Se(this, "push", e);
  }), "reduce", function reduce(e) {
    for (var _len6 = arguments.length, n = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
      n[_key6 - 1] = arguments[_key6];
    }
    return _n(this, "reduce", e, n);
  }), "reduceRight", function reduceRight(e) {
    for (var _len7 = arguments.length, n = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
      n[_key7 - 1] = arguments[_key7];
    }
    return _n(this, "reduceRight", e, n);
  }), "shift", function shift() {
    return Se(this, "shift");
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_da, "some", function some(e, n) {
    return V(this, "some", e, n, void 0, arguments);
  }), "splice", function splice() {
    for (var _len8 = arguments.length, e = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      e[_key8] = arguments[_key8];
    }
    return Se(this, "splice", e);
  }), "toReversed", function toReversed() {
    return ce(this).toReversed();
  }), "toSorted", function toSorted(e) {
    return ce(this).toSorted(e);
  }), "toSpliced", function toSpliced() {
    var _ce2;
    return (_ce2 = ce(this)).toSpliced.apply(_ce2, arguments);
  }), "unshift", function unshift() {
    for (var _len9 = arguments.length, e = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      e[_key9] = arguments[_key9];
    }
    return Se(this, "unshift", e);
  }), "values", function values() {
    return ut(this, "values", L);
  }));
  function ut(e, n, t) {
    var o = Ht(e),
      s = o[n]();
    return o !== e && !q(e) && (s._next = s.next, s.next = function () {
      var u = s._next();
      return u.value && (u.value = t(u.value)), u;
    }), s;
  }
  var _a = Array.prototype;
  function V(e, n, t, o, s, u) {
    var f = Ht(e),
      l = f !== e && !q(e),
      d = f[n];
    if (d !== _a[n]) {
      var r = d.apply(e, u);
      return l ? L(r) : r;
    }
    var p = t;
    f !== e && (l ? p = function p(r, i) {
      return t.call(this, L(r), i, e);
    } : t.length > 2 && (p = function p(r, i) {
      return t.call(this, r, i, e);
    }));
    var g = d.call(f, p, o);
    return l && s ? s(g) : g;
  }
  function _n(e, n, t, o) {
    var s = Ht(e);
    var u = t;
    return s !== e && (q(e) ? t.length > 3 && (u = function u(f, l, d) {
      return t.call(this, f, l, d, e);
    }) : u = function u(f, l, d) {
      return t.call(this, f, L(l), d, e);
    }), s[n].apply(s, [u].concat(_toConsumableArray(o)));
  }
  function ft(e, n, t) {
    var o = E(e);
    N(o, "iterate", Ne);
    var s = o[n].apply(o, _toConsumableArray(t));
    return (s === -1 || s === !1) && xa(t[0]) ? (t[0] = E(t[0]), o[n].apply(o, _toConsumableArray(t))) : s;
  }
  function Se(e, n) {
    var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    $t(), Nt();
    var o = E(e)[n].apply(e, t);
    return Dt(), jt(), o;
  }
  var pa = Js("__proto__,__v_isRef,__isVue"),
    rr = new Set(Object.getOwnPropertyNames(Symbol).filter(function (e) {
      return e !== "arguments" && e !== "caller";
    }).map(function (e) {
      return Symbol[e];
    }).filter($e));
  function ha(e) {
    $e(e) || (e = String(e));
    var n = E(this);
    return N(n, "has", e), n.hasOwnProperty(e);
  }
  var or = function () {
    function or() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      _classCallCheck(this, or);
      this._isReadonly = n, this._isShallow = t;
    }
    return _createClass(or, [{
      key: "get",
      value: function get(n, t, o) {
        if (t === "__v_skip") return n.__v_skip;
        var s = this._isReadonly,
          u = this._isShallow;
        if (t === "__v_isReactive") return !s;
        if (t === "__v_isReadonly") return s;
        if (t === "__v_isShallow") return u;
        if (t === "__v_raw") return o === (s ? u ? ur : ar : u ? Sa : sr).get(n) || Object.getPrototypeOf(n) === Object.getPrototypeOf(o) ? n : void 0;
        var f = G(n);
        if (!s) {
          var d;
          if (f && (d = da[t])) return d;
          if (t === "hasOwnProperty") return ha;
        }
        var l = Reflect.get(n, t, U(n) ? n : o);
        return ($e(t) ? rr.has(t) : pa(t)) || (s || N(n, "get", t), u) ? l : U(l) ? f && Lt(t) ? l : l.value : be(l) ? s ? de(l) : fr(l) : l;
      }
    }]);
  }();
  var ma = function (_or) {
    function ma() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      _classCallCheck(this, ma);
      return _callSuper(this, ma, [!1, n]);
    }
    _inherits(ma, _or);
    return _createClass(ma, [{
      key: "set",
      value: function set(n, t, o, s) {
        var u = n[t];
        if (!this._isShallow) {
          var d = fe(u);
          if (!q(o) && !fe(o) && (u = E(u), o = E(o)), !G(n) && U(u) && !U(o)) return d ? !1 : (u.value = o, !0);
        }
        var f = G(n) && Lt(t) ? Number(t) < n.length : mt(n, t),
          l = Reflect.set(n, t, o, U(n) ? n : s);
        return n === E(s) && (f ? ne(o, u) && ee(n, "set", t, o) : ee(n, "add", t, o)), l;
      }
    }, {
      key: "deleteProperty",
      value: function deleteProperty(n, t) {
        var o = mt(n, t);
        n[t];
        var s = Reflect.deleteProperty(n, t);
        return s && o && ee(n, "delete", t, void 0), s;
      }
    }, {
      key: "has",
      value: function has(n, t) {
        var o = Reflect.has(n, t);
        return (!$e(t) || !rr.has(t)) && N(n, "has", t), o;
      }
    }, {
      key: "ownKeys",
      value: function ownKeys(n) {
        return N(n, "iterate", G(n) ? "length" : ae), Reflect.ownKeys(n);
      }
    }]);
  }(or);
  var ir = function (_or2) {
    function ir() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
      _classCallCheck(this, ir);
      return _callSuper(this, ir, [!0, n]);
    }
    _inherits(ir, _or2);
    return _createClass(ir, [{
      key: "set",
      value: function set(n, t) {
        return !0;
      }
    }, {
      key: "deleteProperty",
      value: function deleteProperty(n, t) {
        return !0;
      }
    }]);
  }(or);
  var ga = new ma(),
    va = new ir(),
    ya = new ir(!0),
    wt = function wt(e) {
      return e;
    },
    ke = function ke(e) {
      return Reflect.getPrototypeOf(e);
    };
  function wa(e, n, t) {
    return function () {
      var s = this.__v_raw,
        u = E(s),
        f = Ie(u),
        l = e === "entries" || e === Symbol.iterator && f,
        d = e === "keys" && f,
        p = s[e].apply(s, arguments),
        g = t ? wt : n ? bt : L;
      return !n && N(u, "iterate", d ? yt : ae), _defineProperty({
        next: function next() {
          var _p$next = p.next(),
            r = _p$next.value,
            i = _p$next.done;
          return i ? {
            value: r,
            done: i
          } : {
            value: l ? [g(r[0]), g(r[1])] : g(r),
            done: i
          };
        }
      }, Symbol.iterator, function () {
        return this;
      });
    };
  }
  function Ge(e) {
    return function () {
      return e === "delete" ? !1 : e === "clear" ? void 0 : this;
    };
  }
  function ba(e, n) {
    var t = {
      get: function get(s) {
        var u = this.__v_raw,
          f = E(u),
          l = E(s);
        e || (ne(s, l) && N(f, "get", s), N(f, "get", l));
        var _ke = ke(f),
          d = _ke.has,
          p = n ? wt : e ? bt : L;
        if (d.call(f, s)) return p(u.get(s));
        if (d.call(f, l)) return p(u.get(l));
        u !== f && u.get(s);
      },
      get size() {
        var s = this.__v_raw;
        return !e && N(E(s), "iterate", ae), Reflect.get(s, "size", s);
      },
      has: function has(s) {
        var u = this.__v_raw,
          f = E(u),
          l = E(s);
        return e || (ne(s, l) && N(f, "has", s), N(f, "has", l)), s === l ? u.has(s) : u.has(s) || u.has(l);
      },
      forEach: function forEach(s, u) {
        var f = this,
          l = f.__v_raw,
          d = E(l),
          p = n ? wt : e ? bt : L;
        return !e && N(d, "iterate", ae), l.forEach(function (g, r) {
          return s.call(u, p(g), p(r), f);
        });
      }
    };
    return Vn(t, e ? {
      add: Ge("add"),
      set: Ge("set"),
      delete: Ge("delete"),
      clear: Ge("clear")
    } : {
      add: function add(s) {
        !n && !q(s) && !fe(s) && (s = E(s));
        var u = E(this);
        return ke(u).has.call(u, s) || (u.add(s), ee(u, "add", s, s)), this;
      },
      set: function set(s, u) {
        !n && !q(u) && !fe(u) && (u = E(u));
        var f = E(this),
          _ke2 = ke(f),
          l = _ke2.has,
          d = _ke2.get;
        var p = l.call(f, s);
        p || (s = E(s), p = l.call(f, s));
        var g = d.call(f, s);
        return f.set(s, u), p ? ne(u, g) && ee(f, "set", s, u) : ee(f, "add", s, u), this;
      },
      delete: function _delete(s) {
        var u = E(this),
          _ke3 = ke(u),
          f = _ke3.has,
          l = _ke3.get;
        var d = f.call(u, s);
        d || (s = E(s), d = f.call(u, s)), l && l.call(u, s);
        var p = u.delete(s);
        return d && ee(u, "delete", s, void 0), p;
      },
      clear: function clear() {
        var s = E(this),
          u = s.size !== 0,
          f = s.clear();
        return u && ee(s, "clear", void 0, void 0), f;
      }
    }), ["keys", "values", "entries", Symbol.iterator].forEach(function (s) {
      t[s] = wa(s, e, n);
    }), t;
  }
  function kt(e, n) {
    var t = ba(e, n);
    return function (o, s, u) {
      return s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(mt(t, s) && s in o ? t : o, s, u);
    };
  }
  var Ta = {
      get: kt(!1, !1)
    },
    Aa = {
      get: kt(!0, !1)
    },
    Ea = {
      get: kt(!0, !0)
    },
    sr = new WeakMap(),
    Sa = new WeakMap(),
    ar = new WeakMap(),
    ur = new WeakMap();
  function Oa(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function Pa(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Oa(ia(e));
  }
  function fr(e) {
    return fe(e) ? e : Gt(e, !1, ga, Ta, sr);
  }
  function de(e) {
    return Gt(e, !0, va, Aa, ar);
  }
  function _e(e) {
    return Gt(e, !0, ya, Ea, ur);
  }
  function Gt(e, n, t, o, s) {
    if (!be(e) || e.__v_raw && !(n && e.__v_isReactive)) return e;
    var u = s.get(e);
    if (u) return u;
    var f = Pa(e);
    if (f === 0) return e;
    var l = new Proxy(e, f === 2 ? o : t);
    return s.set(e, l), l;
  }
  function Ue(e) {
    return fe(e) ? Ue(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function fe(e) {
    return !!(e && e.__v_isReadonly);
  }
  function q(e) {
    return !!(e && e.__v_isShallow);
  }
  function xa(e) {
    return e ? !!e.__v_raw : !1;
  }
  function E(e) {
    var n = e && e.__v_raw;
    return n ? E(n) : e;
  }
  var L = function L(e) {
      return be(e) ? fr(e) : e;
    },
    bt = function bt(e) {
      return be(e) ? de(e) : e;
    };
  function U(e) {
    return e ? e.__v_isRef === !0 : !1;
  }
  function k(e) {
    return cr(e, !1);
  }
  function Ve(e) {
    return cr(e, !0);
  }
  function cr(e, n) {
    return U(e) ? e : new Ia(e, n);
  }
  var Ia = function () {
    function Ia(n, t) {
      _classCallCheck(this, Ia);
      this.dep = new Bt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? n : E(n), this._value = t ? n : L(n), this.__v_isShallow = t;
    }
    return _createClass(Ia, [{
      key: "value",
      get: function get() {
        return this.dep.track(), this._value;
      },
      set: function set(n) {
        var t = this._rawValue,
          o = this.__v_isShallow || q(n) || fe(n);
        n = o ? n : E(n), ne(n, t) && (this._rawValue = n, this._value = o ? n : L(n), this.dep.trigger());
      }
    }]);
  }();
  function lr(e) {
    return U(e) ? e.value : e;
  }
  function M(e) {
    return Y(e) ? e() : lr(e);
  }
  var Ca = function () {
    function Ca(n, t, o) {
      _classCallCheck(this, Ca);
      this.fn = n, this.setter = t, this._value = void 0, this.dep = new Bt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Me - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = o;
    }
    return _createClass(Ca, [{
      key: "notify",
      value: function notify() {
        if (this.flags |= 16, !(this.flags & 8) && S !== this) return zn(this, !0), !0;
      }
    }, {
      key: "value",
      get: function get() {
        var n = this.dep.track();
        return er(this), n && (n.version = this.dep.version), this._value;
      },
      set: function set(n) {
        this.setter && this.setter(n);
      }
    }]);
  }();
  function Ra(e, n) {
    var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    var o, s;
    return Y(e) ? o = e : (o = e.get, s = e.set), new Ca(o, s, t);
  }
  var Xe = {},
    Qe = new WeakMap();
  var se;
  function La(e) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : se;
    if (t) {
      var o = Qe.get(t);
      o || Qe.set(t, o = []), o.push(e);
    }
  }
  function Ma(e, n) {
    var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Rt;
    var o = t.immediate,
      s = t.deep,
      u = t.once,
      f = t.scheduler,
      l = t.augmentJob,
      d = t.call,
      p = function p(y) {
        return s ? y : q(y) || s === !1 || s === 0 ? te(y, 1) : te(y);
      };
    var g,
      r,
      i,
      a,
      c = !1,
      _ = !1;
    if (U(e) ? (r = function r() {
      return e.value;
    }, c = q(e)) : Ue(e) ? (r = function r() {
      return p(e);
    }, c = !0) : G(e) ? (_ = !0, c = e.some(function (y) {
      return Ue(y) || q(y);
    }), r = function r() {
      return e.map(function (y) {
        if (U(y)) return y.value;
        if (Ue(y)) return p(y);
        if (Y(y)) return d ? d(y, 2) : y();
      });
    }) : Y(e) ? n ? r = d ? function () {
      return d(e, 2);
    } : e : r = function r() {
      if (i) {
        $t();
        try {
          i();
        } finally {
          jt();
        }
      }
      var y = se;
      se = g;
      try {
        return d ? d(e, 3, [a]) : e(a);
      } finally {
        se = y;
      }
    } : r = qe, n && s) {
      var y = r,
        A = s === !0 ? 1 / 0 : s;
      r = function r() {
        return te(y(), A);
      };
    }
    var m = Yn(),
      h = function h() {
        g.stop(), m && m.active && Zs(m.effects, g);
      };
    if (u && n) {
      var _y = n;
      n = function n() {
        _y.apply(void 0, arguments), h();
      };
    }
    var v = _ ? new Array(e.length).fill(Xe) : Xe;
    var w = function w(y) {
      if (!(!(g.flags & 1) || !g.dirty && !y)) if (n) {
        var _A = g.run();
        if (s || c || (_ ? _A.some(function (C, W) {
          return ne(C, v[W]);
        }) : ne(_A, v))) {
          i && i();
          var C = se;
          se = g;
          try {
            var W = [_A, v === Xe ? void 0 : _ && v[0] === Xe ? [] : v, a];
            d ? d(n, 3, W) : n.apply(void 0, W), v = _A;
          } finally {
            se = C;
          }
        }
      } else g.run();
    };
    return l && l(w), g = new fa(r), g.scheduler = f ? function () {
      return f(w, !1);
    } : w, a = function a(y) {
      return La(y, !1, g);
    }, i = g.onStop = function () {
      var y = Qe.get(g);
      if (y) {
        if (d) d(y, 4);else {
          var _iterator7 = _createForOfIteratorHelper(y),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _A2 = _step7.value;
              _A2();
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
        Qe.delete(g);
      }
    }, n ? o ? w(!0) : v = g.run() : f ? f(w.bind(null, !0), !0) : g.run(), h.pause = g.pause.bind(g), h.resume = g.resume.bind(g), h.stop = h, h;
  }
  function te(e) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1 / 0;
    var t = arguments.length > 2 ? arguments[2] : undefined;
    if (n <= 0 || !be(e) || e.__v_skip || (t = t || new Set(), t.has(e))) return e;
    if (t.add(e), n--, U(e)) te(e.value, n, t);else if (G(e)) for (var o = 0; o < e.length; o++) te(e[o], n, t);else if (ta(e) || Ie(e)) e.forEach(function (o) {
      te(o, n, t);
    });else if (sa(e)) {
      for (var _o3 in e) te(e[_o3], n, t);
      var _iterator8 = _createForOfIteratorHelper(Object.getOwnPropertySymbols(e)),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _o4 = _step8.value;
          Object.prototype.propertyIsEnumerable.call(e, _o4) && te(e[_o4], n, t);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
    return e;
  } /**
    * @vue/runtime-core v3.5.13
    * (c) 2018-present Yuxi (Evan) You and Vue contributors
    * @license MIT
    **/
  function Xt(e, n, t, o) {
    try {
      return o ? e.apply(void 0, _toConsumableArray(o)) : e();
    } catch (s) {
      _r(s, n, t);
    }
  }
  function dr(e, n, t, o) {
    if (Y(e)) {
      var s = Xt(e, n, t, o);
      return s && ra(s) && s.catch(function (u) {
        _r(u, n, t);
      }), s;
    }
    if (G(e)) {
      var _s2 = [];
      for (var u = 0; u < e.length; u++) _s2.push(dr(e[u], n, t, o));
      return _s2;
    }
  }
  function _r(e, n, t) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    var s = n ? n.vnode : null,
      _ref4 = n && n.appContext.config || Rt,
      u = _ref4.errorHandler,
      f = _ref4.throwUnhandledErrorInProduction;
    if (n) {
      var l = n.parent;
      var d = n.proxy,
        p = "https://vuejs.org/error-reference/#runtime-".concat(t);
      for (; l;) {
        var g = l.ec;
        if (g) {
          for (var r = 0; r < g.length; r++) if (g[r](e, d, p) === !1) return;
        }
        l = l.parent;
      }
      if (u) {
        $t(), Xt(u, null, 10, [e, d, p]), jt();
        return;
      }
    }
    Na(e, t, s, o, f);
  }
  function Na(e, n, t) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
    if (s) throw e;
    console.error(e);
  }
  var H = [];
  var Q = -1;
  var pe = [];
  var Z = null,
    le = 0;
  var pr = Promise.resolve();
  var Ye = null;
  function pn(e) {
    var n = Ye || pr;
    return e ? n.then(this ? e.bind(this) : e) : n;
  }
  function Da(e) {
    var n = Q + 1,
      t = H.length;
    for (; n < t;) {
      var o = n + t >>> 1,
        s = H[o],
        u = De(s);
      u < e || u === e && s.flags & 2 ? n = o + 1 : t = o;
    }
    return n;
  }
  function Fa(e) {
    if (!(e.flags & 1)) {
      var n = De(e),
        t = H[H.length - 1];
      !t || !(e.flags & 2) && n >= De(t) ? H.push(e) : H.splice(Da(n), 0, e), e.flags |= 1, hr();
    }
  }
  function hr() {
    Ye || (Ye = pr.then(mr));
  }
  function $a(e) {
    G(e) ? pe.push.apply(pe, _toConsumableArray(e)) : Z && e.id === -1 ? Z.splice(le + 1, 0, e) : e.flags & 1 || (pe.push(e), e.flags |= 1), hr();
  }
  function ja(e) {
    if (pe.length) {
      var n = _toConsumableArray(new Set(pe)).sort(function (t, o) {
        return De(t) - De(o);
      });
      if (pe.length = 0, Z) {
        var _Z;
        (_Z = Z).push.apply(_Z, _toConsumableArray(n));
        return;
      }
      for (Z = n, le = 0; le < Z.length; le++) {
        var t = Z[le];
        t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2;
      }
      Z = null, le = 0;
    }
  }
  var De = function De(e) {
    return e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  };
  function mr(e) {
    try {
      for (Q = 0; Q < H.length; Q++) {
        var n = H[Q];
        n && !(n.flags & 8) && (n.flags & 4 && (n.flags &= -2), Xt(n, n.i, n.i ? 15 : 14), n.flags & 4 || (n.flags &= -2));
      }
    } finally {
      for (; Q < H.length; Q++) {
        var _n4 = H[Q];
        _n4 && (_n4.flags &= -2);
      }
      Q = -1, H.length = 0, ja(), Ye = null, (H.length || pe.length) && mr();
    }
  }
  var Ba = null;
  Mt().requestIdleCallback;
  Mt().cancelIdleCallback;
  var Ha = null;
  function ka(e, n) {
    var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    var o = qt || Ba;
    if (o || Ha) {
      var s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
      if (s && e in s) return s[e];
      if (arguments.length > 1) return t && Y(n) ? n.call(o && o.proxy) : n;
    }
  }
  var Ga = Wa,
    Xa = Symbol.for("v-scx"),
    qa = function qa() {
      return ka(Xa);
    };
  function I(e, n, t) {
    return Ua(e, n, t);
  }
  function Ua(e, n) {
    var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Rt;
    var o = t.immediate,
      s = t.deep,
      u = t.flush,
      f = t.once,
      l = Vn({}, t),
      d = n && o || !n && u !== "post";
    var p;
    if (Ke) {
      if (u === "sync") {
        var a = qa();
        p = a.__watcherHandles || (a.__watcherHandles = []);
      } else if (!d) {
        var _a2 = function _a2() {};
        return _a2.stop = qe, _a2.resume = qe, _a2.pause = qe, _a2;
      }
    }
    var g = qt;
    l.call = function (a, c, _) {
      return dr(a, g, c, _);
    };
    var r = !1;
    u === "post" ? l.scheduler = function (a) {
      Ga(a, g && g.suspense);
    } : u !== "sync" && (r = !0, l.scheduler = function (a, c) {
      c ? a() : Fa(a);
    }), l.augmentJob = function (a) {
      n && (a.flags |= 4), r && (a.flags |= 2, g && (a.id = g.uid, a.i = g));
    };
    var i = Ma(e, n, l);
    return Ke && (p ? p.push(i) : d && i()), i;
  }
  function Wa(e, n) {
    var _n$effects;
    n && n.pendingBranch ? G(e) ? (_n$effects = n.effects).push.apply(_n$effects, _toConsumableArray(e)) : n.effects.push(e) : $a(e);
  }
  var qt = null;
  {
    var e = Mt(),
      n = function n(t, o) {
        var s;
        return (s = e[t]) || (s = e[t] = []), s.push(o), function (u) {
          s.length > 1 ? s.forEach(function (f) {
            return f(u);
          }) : s[0](u);
        };
      };
    n("__VUE_INSTANCE_SETTERS__", function (t) {
      return qt = t;
    }), n("__VUE_SSR_SETTERS__", function (t) {
      return Ke = t;
    });
  }
  var Ke = !1;
  var B = function B(e, n) {
    return Ra(e, n, Ke);
  };
  function Va(e) {
    return Yn() ? (ua(e), !0) : !1;
  }
  function Tt() {
    var e = new Set(),
      n = function n(s) {
        e.delete(s);
      };
    return {
      on: function on(s) {
        e.add(s);
        var u = function u() {
          return n(s);
        };
        return Va(u), {
          off: u
        };
      },
      off: n,
      trigger: function trigger() {
        for (var _len10 = arguments.length, s = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
          s[_key10] = arguments[_key10];
        }
        return Promise.all(Array.from(e).map(function (u) {
          return u.apply(void 0, s);
        }));
      }
    };
  }
  function Oe(e) {
    return typeof e == "function" ? e() : lr(e);
  }
  (typeof WorkerGlobalScope === "undefined" ? "undefined" : _typeof(WorkerGlobalScope)) < "u" && globalThis instanceof WorkerGlobalScope;
  function hn(e) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Timeout";
    return new Promise(function (o, s) {
      setTimeout(n ? function () {
        return s(t);
      } : o, e);
    });
  }
  function At(e) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    function t(r) {
      var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref5$flush = _ref5.flush,
        i = _ref5$flush === void 0 ? "sync" : _ref5$flush,
        _ref5$deep = _ref5.deep,
        a = _ref5$deep === void 0 ? !1 : _ref5$deep,
        c = _ref5.timeout,
        _ = _ref5.throwOnTimeout;
      var m = null;
      var v = [new Promise(function (w) {
        m = I(e, function (y) {
          r(y) !== n && (m ? m() : pn(function () {
            return m == null ? void 0 : m();
          }), w(y));
        }, {
          flush: i,
          deep: a,
          immediate: !0
        });
      })];
      return c != null && v.push(hn(c, _).then(function () {
        return Oe(e);
      }).finally(function () {
        return m == null ? void 0 : m();
      })), Promise.race(v);
    }
    function o(r, i) {
      if (!U(r)) return t(function (y) {
        return y === r;
      }, i);
      var _ref6 = i !== null && i !== void 0 ? i : {},
        _ref6$flush = _ref6.flush,
        a = _ref6$flush === void 0 ? "sync" : _ref6$flush,
        _ref6$deep = _ref6.deep,
        c = _ref6$deep === void 0 ? !1 : _ref6$deep,
        _ = _ref6.timeout,
        m = _ref6.throwOnTimeout;
      var h = null;
      var w = [new Promise(function (y) {
        h = I([e, r], function (_ref7) {
          var _ref8 = _slicedToArray(_ref7, 2),
            A = _ref8[0],
            C = _ref8[1];
          n !== (A === C) && (h ? h() : pn(function () {
            return h == null ? void 0 : h();
          }), y(A));
        }, {
          flush: a,
          deep: c,
          immediate: !0
        });
      })];
      return _ != null && w.push(hn(_, m).then(function () {
        return Oe(e);
      }).finally(function () {
        return h == null || h(), Oe(e);
      })), Promise.race(w);
    }
    function s(r) {
      return t(function (i) {
        return !!i;
      }, r);
    }
    function u(r) {
      return o(null, r);
    }
    function f(r) {
      return o(void 0, r);
    }
    function l(r) {
      return t(Number.isNaN, r);
    }
    function d(r, i) {
      return t(function (a) {
        var c = Array.from(a);
        return c.includes(r) || c.includes(Oe(r));
      }, i);
    }
    function p(r) {
      return g(1, r);
    }
    function g() {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var i = arguments.length > 1 ? arguments[1] : undefined;
      var a = -1;
      return t(function () {
        return a += 1, a >= r;
      }, i);
    }
    return Array.isArray(Oe(e)) ? {
      toMatch: t,
      toContains: d,
      changed: p,
      changedTimes: g,
      get not() {
        return At(e, !n);
      }
    } : {
      toMatch: t,
      toBe: o,
      toBeTruthy: s,
      toBeNull: u,
      toBeNaN: l,
      toBeUndefined: f,
      changed: p,
      changedTimes: g,
      get not() {
        return At(e, !n);
      }
    };
  }
  function mn(e) {
    return At(e);
  }
  function je(e) {
    var _e$components;
    var n = e.create,
      t = e.preload;
    function o(s, u) {
      var _Tt = Tt(),
        f = _Tt.on,
        l = _Tt.trigger,
        d = {
          onBeforeDestroy: f
        },
        p = Qn(),
        g = p.run(function () {
          return n(s, u, d);
        }),
        r = function () {
          var _ref9 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return l();
                case 2:
                  p.stop();
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function r() {
            return _ref9.apply(this, arguments);
          };
        }();
      return s.onBeforeRestart(r), Un(g, {
        destroy: r
      });
    }
    return o.preload = function (s) {
      t == null || t(s);
    }, o.components = Object.freeze((_e$components = e.components) !== null && _e$components !== void 0 ? _e$components : []), Object.freeze(o);
  }
  function Qa(e, n) {
    return Array.isArray(e) ? I(n, function (t) {
      var _iterator9 = _createForOfIteratorHelper(e),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var o = _step9.value;
          o.setTexture(t);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }, {
      immediate: !0
    }) : I(n, function (t) {
      e.setTexture(t);
    }, {
      immediate: !0
    });
  }
  function Ya(e, n) {
    return Array.isArray(e) ? I(n, function (t) {
      var _iterator10 = _createForOfIteratorHelper(e),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var o = _step10.value;
          o.setPosition(t.x, t.y);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    }, {
      immediate: !0,
      deep: !0
    }) : I(n, function (t) {
      e.setPosition(t.x, t.y);
    }, {
      immediate: !0,
      deep: !0
    });
  }
  var Et = je({
    create: function create(e, n, t) {
      var o = B(function () {
          return M(n.container);
        }),
        s = B(function () {
          return M(n.textureKey);
        }),
        u = B(function () {
          var _n$textureKeyHover;
          return M((_n$textureKeyHover = n.textureKeyHover) !== null && _n$textureKeyHover !== void 0 ? _n$textureKeyHover : s.value);
        }),
        f = B(function () {
          var _n$textureKeyActive;
          return M((_n$textureKeyActive = n.textureKeyActive) !== null && _n$textureKeyActive !== void 0 ? _n$textureKeyActive : s.value);
        }),
        l = B(function () {
          var _n$textureKeyDisabled;
          return M((_n$textureKeyDisabled = n.textureKeyDisabled) !== null && _n$textureKeyDisabled !== void 0 ? _n$textureKeyDisabled : s.value);
        }),
        d = B(function () {
          var _n$disabled;
          return M((_n$disabled = n.disabled) !== null && _n$disabled !== void 0 ? _n$disabled : !1);
        }),
        p = B(function () {
          var _M;
          return (_M = M(n.pixelPerfect)) !== null && _M !== void 0 ? _M : !0;
        }),
        g = B(function () {
          return {
            x: M(n.x),
            y: M(n.y)
          };
        }),
        r = k(!1),
        i = k(!1),
        a = B(function () {
          return d.value ? M(l) : i.value ? M(f) : r.value ? M(u) : M(s);
        }),
        c = function c() {
          var m;
          (m = n.onClick) == null || m.call(n);
        },
        _ = new Phaser.GameObjects.Sprite(e.scene, g.value.x, g.value.y, a.value);
      return e.scene.add.existing(_), I(o, function (m, h, v) {
        T(m) || (m.add(_), v(function () {
          return m.remove(_);
        }));
      }, {
        immediate: !0
      }), Ya(_, g), I([d, p], function (_ref10) {
        var _ref11 = _slicedToArray(_ref10, 2),
          m = _ref11[0],
          h = _ref11[1];
        _.removeInteractive();
        var _e$onUpdate = e.onUpdate(function () {
            _.setInteractive({
              cursor: m ? "not-allowed" : "pointer",
              pixelPerfect: h
            }), v();
          }),
          v = _e$onUpdate.off;
      }, {
        immediate: !0
      }), Qa(_, a), Qs(_, function () {
        d.value || (i.value = !0);
      }), zs(_, function () {
        if (!d.value) try {
          i.value && c();
        } finally {
          i.value = !1, r.value = !1;
        }
      }), Ys(_, function () {
        d.value || (r.value = !0);
      }), Ks(_, function () {
        d.value || (r.value = !1, i.value = !1);
      }), t.onBeforeDestroy(function () {
        _.destroy();
      }), {
        sprite: _,
        currentTextureKey: de(a),
        isDisabled: de(d),
        isActive: de(i),
        isHover: de(r)
      };
    }
  });
  function ct(_x) {
    return _ct.apply(this, arguments);
  }
  function _ct() {
    _ct = _asyncToGenerator(_regeneratorRuntime().mark(function _callee22(e) {
      return _regeneratorRuntime().wrap(function _callee22$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            return _context22.abrupt("return", new Promise(function (n) {
              var _t4, _o5;
              _t4 = function t() {
                e.off(Phaser.Tweens.Events.TWEEN_COMPLETE, _t4), e.off(Phaser.Tweens.Events.TWEEN_STOP, _o5), n("complete");
              }, _o5 = function o() {
                e.off(Phaser.Tweens.Events.TWEEN_COMPLETE, _t4), e.off(Phaser.Tweens.Events.TWEEN_STOP, _o5), n("stop");
              }, e.on(Phaser.Tweens.Events.TWEEN_COMPLETE, _t4), e.on(Phaser.Tweens.Events.TWEEN_STOP, _o5);
            }));
          case 1:
          case "end":
            return _context22.stop();
        }
      }, _callee22);
    }));
    return _ct.apply(this, arguments);
  }
  var Ka = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
    za = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
    Ja = /^([/\\]\s*){2,}[^/\\]/,
    Za = /^\.?\//;
  function eu(e) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return typeof n == "boolean" && (n = {
      acceptRelative: n
    }), n.strict ? Ka.test(e) : za.test(e) || (n.acceptRelative ? Ja.test(e) : !1);
  }
  function tu() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var n = arguments.length > 1 ? arguments[1] : undefined;
    return e.endsWith("/") ? e : e + "/";
  }
  function nu(e) {
    return e && e !== "/";
  }
  function ru(e) {
    var t = e || "";
    for (var _len11 = arguments.length, n = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
      n[_key11 - 1] = arguments[_key11];
    }
    var _iterator11 = _createForOfIteratorHelper(n.filter(function (s) {
        return nu(s);
      })),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var o = _step11.value;
        if (t) {
          var s = o.replace(Za, "");
          t = tu(t) + s;
        } else t = o;
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    return t;
  }
  function gr() {
    return !T(P(window, "::::LIVE_CONTEXT::::"));
  }
  function vr() {
    return !T(P(window, "::::REC_CONTEXT::::"));
  }
  function yr() {
    return !T(P(window, "::::STAGE_CONTEXT::::")) && P(window, ["::::STAGE_CONTEXT::::", "width"]) === 650;
  }
  function wr() {
    return !T(P(window, "::::STAGE_CONTEXT::::")) && P(window, ["::::STAGE_CONTEXT::::", "width"]) === 1500;
  }
  var Pe = (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" ? globalThis : (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" ? window : (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" ? global : (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? self : {},
    lt = {};
  var gn;
  function ou() {
    return gn || (gn = 1, function (e) {
      (function () {
        var n = function n() {
          this.init();
        };
        n.prototype = {
          init: function init() {
            var r = this || t;
            return r._counter = 1e3, r._html5AudioPool = [], r.html5PoolSize = 10, r._codecs = {}, r._howls = [], r._muted = !1, r._volume = 1, r._canPlayEvent = "canplaythrough", r._navigator = (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window.navigator ? window.navigator : null, r.masterGain = null, r.noAudio = !1, r.usingWebAudio = !0, r.autoSuspend = !0, r.ctx = null, r.autoUnlock = !0, r._setup(), r;
          },
          volume: function volume(r) {
            var i = this || t;
            if (r = parseFloat(r), i.ctx || g(), _typeof(r) < "u" && r >= 0 && r <= 1) {
              if (i._volume = r, i._muted) return i;
              i.usingWebAudio && i.masterGain.gain.setValueAtTime(r, t.ctx.currentTime);
              for (var a = 0; a < i._howls.length; a++) if (!i._howls[a]._webAudio) for (var c = i._howls[a]._getSoundIds(), _ = 0; _ < c.length; _++) {
                var m = i._howls[a]._soundById(c[_]);
                m && m._node && (m._node.volume = m._volume * r);
              }
              return i;
            }
            return i._volume;
          },
          mute: function mute(r) {
            var i = this || t;
            i.ctx || g(), i._muted = r, i.usingWebAudio && i.masterGain.gain.setValueAtTime(r ? 0 : i._volume, t.ctx.currentTime);
            for (var a = 0; a < i._howls.length; a++) if (!i._howls[a]._webAudio) for (var c = i._howls[a]._getSoundIds(), _ = 0; _ < c.length; _++) {
              var m = i._howls[a]._soundById(c[_]);
              m && m._node && (m._node.muted = r ? !0 : m._muted);
            }
            return i;
          },
          stop: function stop() {
            for (var r = this || t, i = 0; i < r._howls.length; i++) r._howls[i].stop();
            return r;
          },
          unload: function unload() {
            for (var r = this || t, i = r._howls.length - 1; i >= 0; i--) r._howls[i].unload();
            return r.usingWebAudio && r.ctx && _typeof(r.ctx.close) < "u" && (r.ctx.close(), r.ctx = null, g()), r;
          },
          codecs: function codecs(r) {
            return (this || t)._codecs[r.replace(/^x-/, "")];
          },
          _setup: function _setup() {
            var r = this || t;
            if (r.state = r.ctx && r.ctx.state || "suspended", r._autoSuspend(), !r.usingWebAudio) if ((typeof Audio === "undefined" ? "undefined" : _typeof(Audio)) < "u") try {
              var i = new Audio();
              _typeof(i.oncanplaythrough) > "u" && (r._canPlayEvent = "canplay");
            } catch (_unused6) {
              r.noAudio = !0;
            } else r.noAudio = !0;
            try {
              var i = new Audio();
              i.muted && (r.noAudio = !0);
            } catch (_unused7) {}
            return r.noAudio || r._setupCodecs(), r;
          },
          _setupCodecs: function _setupCodecs() {
            var r = this || t,
              i = null;
            try {
              i = (typeof Audio === "undefined" ? "undefined" : _typeof(Audio)) < "u" ? new Audio() : null;
            } catch (_unused8) {
              return r;
            }
            if (!i || typeof i.canPlayType != "function") return r;
            var a = i.canPlayType("audio/mpeg;").replace(/^no$/, ""),
              c = r._navigator ? r._navigator.userAgent : "",
              _ = c.match(/OPR\/(\d+)/g),
              m = _ && parseInt(_[0].split("/")[1], 10) < 33,
              h = c.indexOf("Safari") !== -1 && c.indexOf("Chrome") === -1,
              v = c.match(/Version\/(.*?) /),
              w = h && v && parseInt(v[1], 10) < 15;
            return r._codecs = {
              mp3: !!(!m && (a || i.canPlayType("audio/mp3;").replace(/^no$/, ""))),
              mpeg: !!a,
              opus: !!i.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
              ogg: !!i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
              oga: !!i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
              wav: !!(i.canPlayType('audio/wav; codecs="1"') || i.canPlayType("audio/wav")).replace(/^no$/, ""),
              aac: !!i.canPlayType("audio/aac;").replace(/^no$/, ""),
              caf: !!i.canPlayType("audio/x-caf;").replace(/^no$/, ""),
              m4a: !!(i.canPlayType("audio/x-m4a;") || i.canPlayType("audio/m4a;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""),
              m4b: !!(i.canPlayType("audio/x-m4b;") || i.canPlayType("audio/m4b;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""),
              mp4: !!(i.canPlayType("audio/x-mp4;") || i.canPlayType("audio/mp4;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""),
              weba: !!(!w && i.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
              webm: !!(!w && i.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
              dolby: !!i.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
              flac: !!(i.canPlayType("audio/x-flac;") || i.canPlayType("audio/flac;")).replace(/^no$/, "")
            }, r;
          },
          _unlockAudio: function _unlockAudio() {
            var r = this || t;
            if (!(r._audioUnlocked || !r.ctx)) {
              r._audioUnlocked = !1, r.autoUnlock = !1, !r._mobileUnloaded && r.ctx.sampleRate !== 44100 && (r._mobileUnloaded = !0, r.unload()), r._scratchBuffer = r.ctx.createBuffer(1, 1, 22050);
              var _i2 = function i(a) {
                for (; r._html5AudioPool.length < r.html5PoolSize;) try {
                  var c = new Audio();
                  c._unlocked = !0, r._releaseHtml5Audio(c);
                } catch (_unused9) {
                  r.noAudio = !0;
                  break;
                }
                for (var _ = 0; _ < r._howls.length; _++) if (!r._howls[_]._webAudio) for (var m = r._howls[_]._getSoundIds(), h = 0; h < m.length; h++) {
                  var v = r._howls[_]._soundById(m[h]);
                  v && v._node && !v._node._unlocked && (v._node._unlocked = !0, v._node.load());
                }
                r._autoResume();
                var w = r.ctx.createBufferSource();
                w.buffer = r._scratchBuffer, w.connect(r.ctx.destination), _typeof(w.start) > "u" ? w.noteOn(0) : w.start(0), typeof r.ctx.resume == "function" && r.ctx.resume(), w.onended = function () {
                  w.disconnect(0), r._audioUnlocked = !0, document.removeEventListener("touchstart", _i2, !0), document.removeEventListener("touchend", _i2, !0), document.removeEventListener("click", _i2, !0), document.removeEventListener("keydown", _i2, !0);
                  for (var y = 0; y < r._howls.length; y++) r._howls[y]._emit("unlock");
                };
              };
              return document.addEventListener("touchstart", _i2, !0), document.addEventListener("touchend", _i2, !0), document.addEventListener("click", _i2, !0), document.addEventListener("keydown", _i2, !0), r;
            }
          },
          _obtainHtml5Audio: function _obtainHtml5Audio() {
            var r = this || t;
            if (r._html5AudioPool.length) return r._html5AudioPool.pop();
            var i = new Audio().play();
            return i && (typeof Promise === "undefined" ? "undefined" : _typeof(Promise)) < "u" && (i instanceof Promise || typeof i.then == "function") && i.catch(function () {
              console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
            }), new Audio();
          },
          _releaseHtml5Audio: function _releaseHtml5Audio(r) {
            var i = this || t;
            return r._unlocked && i._html5AudioPool.push(r), i;
          },
          _autoSuspend: function _autoSuspend() {
            var r = this;
            if (!(!r.autoSuspend || !r.ctx || _typeof(r.ctx.suspend) > "u" || !t.usingWebAudio)) {
              for (var i = 0; i < r._howls.length; i++) if (r._howls[i]._webAudio) {
                for (var a = 0; a < r._howls[i]._sounds.length; a++) if (!r._howls[i]._sounds[a]._paused) return r;
              }
              return r._suspendTimer && clearTimeout(r._suspendTimer), r._suspendTimer = setTimeout(function () {
                if (r.autoSuspend) {
                  r._suspendTimer = null, r.state = "suspending";
                  var c = function c() {
                    r.state = "suspended", r._resumeAfterSuspend && (delete r._resumeAfterSuspend, r._autoResume());
                  };
                  r.ctx.suspend().then(c, c);
                }
              }, 3e4), r;
            }
          },
          _autoResume: function _autoResume() {
            var r = this;
            if (!(!r.ctx || _typeof(r.ctx.resume) > "u" || !t.usingWebAudio)) return r.state === "running" && r.ctx.state !== "interrupted" && r._suspendTimer ? (clearTimeout(r._suspendTimer), r._suspendTimer = null) : r.state === "suspended" || r.state === "running" && r.ctx.state === "interrupted" ? (r.ctx.resume().then(function () {
              r.state = "running";
              for (var i = 0; i < r._howls.length; i++) r._howls[i]._emit("resume");
            }), r._suspendTimer && (clearTimeout(r._suspendTimer), r._suspendTimer = null)) : r.state === "suspending" && (r._resumeAfterSuspend = !0), r;
          }
        };
        var t = new n(),
          o = function o(r) {
            var i = this;
            if (!r.src || r.src.length === 0) {
              console.error("An array of source files must be passed with any new Howl.");
              return;
            }
            i.init(r);
          };
        o.prototype = {
          init: function init(r) {
            var i = this;
            return t.ctx || g(), i._autoplay = r.autoplay || !1, i._format = typeof r.format != "string" ? r.format : [r.format], i._html5 = r.html5 || !1, i._muted = r.mute || !1, i._loop = r.loop || !1, i._pool = r.pool || 5, i._preload = typeof r.preload == "boolean" || r.preload === "metadata" ? r.preload : !0, i._rate = r.rate || 1, i._sprite = r.sprite || {}, i._src = typeof r.src != "string" ? r.src : [r.src], i._volume = r.volume !== void 0 ? r.volume : 1, i._xhr = {
              method: r.xhr && r.xhr.method ? r.xhr.method : "GET",
              headers: r.xhr && r.xhr.headers ? r.xhr.headers : null,
              withCredentials: r.xhr && r.xhr.withCredentials ? r.xhr.withCredentials : !1
            }, i._duration = 0, i._state = "unloaded", i._sounds = [], i._endTimers = {}, i._queue = [], i._playLock = !1, i._onend = r.onend ? [{
              fn: r.onend
            }] : [], i._onfade = r.onfade ? [{
              fn: r.onfade
            }] : [], i._onload = r.onload ? [{
              fn: r.onload
            }] : [], i._onloaderror = r.onloaderror ? [{
              fn: r.onloaderror
            }] : [], i._onplayerror = r.onplayerror ? [{
              fn: r.onplayerror
            }] : [], i._onpause = r.onpause ? [{
              fn: r.onpause
            }] : [], i._onplay = r.onplay ? [{
              fn: r.onplay
            }] : [], i._onstop = r.onstop ? [{
              fn: r.onstop
            }] : [], i._onmute = r.onmute ? [{
              fn: r.onmute
            }] : [], i._onvolume = r.onvolume ? [{
              fn: r.onvolume
            }] : [], i._onrate = r.onrate ? [{
              fn: r.onrate
            }] : [], i._onseek = r.onseek ? [{
              fn: r.onseek
            }] : [], i._onunlock = r.onunlock ? [{
              fn: r.onunlock
            }] : [], i._onresume = [], i._webAudio = t.usingWebAudio && !i._html5, _typeof(t.ctx) < "u" && t.ctx && t.autoUnlock && t._unlockAudio(), t._howls.push(i), i._autoplay && i._queue.push({
              event: "play",
              action: function action() {
                i.play();
              }
            }), i._preload && i._preload !== "none" && i.load(), i;
          },
          load: function load() {
            var r = this,
              i = null;
            if (t.noAudio) {
              r._emit("loaderror", null, "No audio support.");
              return;
            }
            typeof r._src == "string" && (r._src = [r._src]);
            for (var a = 0; a < r._src.length; a++) {
              var c, _;
              if (r._format && r._format[a]) c = r._format[a];else {
                if (_ = r._src[a], typeof _ != "string") {
                  r._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue;
                }
                c = /^data:audio\/([^;,]+);/i.exec(_), c || (c = /\.([^.]+)$/.exec(_.split("?", 1)[0])), c && (c = c[1].toLowerCase());
              }
              if (c || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), c && t.codecs(c)) {
                i = r._src[a];
                break;
              }
            }
            if (!i) {
              r._emit("loaderror", null, "No codec support for selected audio sources.");
              return;
            }
            return r._src = i, r._state = "loading", window.location.protocol === "https:" && i.slice(0, 5) === "http:" && (r._html5 = !0, r._webAudio = !1), new s(r), r._webAudio && f(r), r;
          },
          play: function play(r, i) {
            var a = this,
              c = null;
            if (typeof r == "number") c = r, r = null;else {
              if (typeof r == "string" && a._state === "loaded" && !a._sprite[r]) return null;
              if (_typeof(r) > "u" && (r = "__default", !a._playLock)) {
                for (var _ = 0, m = 0; m < a._sounds.length; m++) a._sounds[m]._paused && !a._sounds[m]._ended && (_++, c = a._sounds[m]._id);
                _ === 1 ? r = null : c = null;
              }
            }
            var h = c ? a._soundById(c) : a._inactiveSound();
            if (!h) return null;
            if (c && !r && (r = h._sprite || "__default"), a._state !== "loaded") {
              h._sprite = r, h._ended = !1;
              var v = h._id;
              return a._queue.push({
                event: "play",
                action: function action() {
                  a.play(v);
                }
              }), v;
            }
            if (c && !h._paused) return i || a._loadQueue("play"), h._id;
            a._webAudio && t._autoResume();
            var w = Math.max(0, h._seek > 0 ? h._seek : a._sprite[r][0] / 1e3),
              y = Math.max(0, (a._sprite[r][0] + a._sprite[r][1]) / 1e3 - w),
              A = y * 1e3 / Math.abs(h._rate),
              C = a._sprite[r][0] / 1e3,
              W = (a._sprite[r][0] + a._sprite[r][1]) / 1e3;
            h._sprite = r, h._ended = !1;
            var Te = function Te() {
              h._paused = !1, h._seek = w, h._start = C, h._stop = W, h._loop = !!(h._loop || a._sprite[r][2]);
            };
            if (w >= W) {
              a._ended(h);
              return;
            }
            var b = h._node;
            if (a._webAudio) {
              var $ = function $() {
                a._playLock = !1, Te(), a._refreshBuffer(h);
                var J = h._muted || a._muted ? 0 : h._volume;
                b.gain.setValueAtTime(J, t.ctx.currentTime), h._playStart = t.ctx.currentTime, _typeof(b.bufferSource.start) > "u" ? h._loop ? b.bufferSource.noteGrainOn(0, w, 86400) : b.bufferSource.noteGrainOn(0, w, y) : h._loop ? b.bufferSource.start(0, w, 86400) : b.bufferSource.start(0, w, y), A !== 1 / 0 && (a._endTimers[h._id] = setTimeout(a._ended.bind(a, h), A)), i || setTimeout(function () {
                  a._emit("play", h._id), a._loadQueue();
                }, 0);
              };
              t.state === "running" && t.ctx.state !== "interrupted" ? $() : (a._playLock = !0, a.once("resume", $), a._clearTimer(h._id));
            } else {
              var oe = function oe() {
                b.currentTime = w, b.muted = h._muted || a._muted || t._muted || b.muted, b.volume = h._volume * t.volume(), b.playbackRate = h._rate;
                try {
                  var J = b.play();
                  if (J && (typeof Promise === "undefined" ? "undefined" : _typeof(Promise)) < "u" && (J instanceof Promise || typeof J.then == "function") ? (a._playLock = !0, Te(), J.then(function () {
                    a._playLock = !1, b._unlocked = !0, i ? a._loadQueue() : a._emit("play", h._id);
                  }).catch(function () {
                    a._playLock = !1, a._emit("playerror", h._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), h._ended = !0, h._paused = !0;
                  })) : i || (a._playLock = !1, Te(), a._emit("play", h._id)), b.playbackRate = h._rate, b.paused) {
                    a._emit("playerror", h._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                    return;
                  }
                  r !== "__default" || h._loop ? a._endTimers[h._id] = setTimeout(a._ended.bind(a, h), A) : (a._endTimers[h._id] = function () {
                    a._ended(h), b.removeEventListener("ended", a._endTimers[h._id], !1);
                  }, b.addEventListener("ended", a._endTimers[h._id], !1));
                } catch (Ir) {
                  a._emit("playerror", h._id, Ir);
                }
              };
              b.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (b.src = a._src, b.load());
              var Be = window && window.ejecta || !b.readyState && t._navigator.isCocoonJS;
              if (b.readyState >= 3 || Be) oe();else {
                a._playLock = !0, a._state = "loading";
                var _He = function He() {
                  a._state = "loaded", oe(), b.removeEventListener(t._canPlayEvent, _He, !1);
                };
                b.addEventListener(t._canPlayEvent, _He, !1), a._clearTimer(h._id);
              }
            }
            return h._id;
          },
          pause: function pause(r) {
            var i = this;
            if (i._state !== "loaded" || i._playLock) return i._queue.push({
              event: "pause",
              action: function action() {
                i.pause(r);
              }
            }), i;
            for (var a = i._getSoundIds(r), c = 0; c < a.length; c++) {
              i._clearTimer(a[c]);
              var _ = i._soundById(a[c]);
              if (_ && !_._paused && (_._seek = i.seek(a[c]), _._rateSeek = 0, _._paused = !0, i._stopFade(a[c]), _._node)) if (i._webAudio) {
                if (!_._node.bufferSource) continue;
                _typeof(_._node.bufferSource.stop) > "u" ? _._node.bufferSource.noteOff(0) : _._node.bufferSource.stop(0), i._cleanBuffer(_._node);
              } else (!isNaN(_._node.duration) || _._node.duration === 1 / 0) && _._node.pause();
              arguments[1] || i._emit("pause", _ ? _._id : null);
            }
            return i;
          },
          stop: function stop(r, i) {
            var a = this;
            if (a._state !== "loaded" || a._playLock) return a._queue.push({
              event: "stop",
              action: function action() {
                a.stop(r);
              }
            }), a;
            for (var c = a._getSoundIds(r), _ = 0; _ < c.length; _++) {
              a._clearTimer(c[_]);
              var m = a._soundById(c[_]);
              m && (m._seek = m._start || 0, m._rateSeek = 0, m._paused = !0, m._ended = !0, a._stopFade(c[_]), m._node && (a._webAudio ? m._node.bufferSource && (_typeof(m._node.bufferSource.stop) > "u" ? m._node.bufferSource.noteOff(0) : m._node.bufferSource.stop(0), a._cleanBuffer(m._node)) : (!isNaN(m._node.duration) || m._node.duration === 1 / 0) && (m._node.currentTime = m._start || 0, m._node.pause(), m._node.duration === 1 / 0 && a._clearSound(m._node))), i || a._emit("stop", m._id));
            }
            return a;
          },
          mute: function mute(r, i) {
            var a = this;
            if (a._state !== "loaded" || a._playLock) return a._queue.push({
              event: "mute",
              action: function action() {
                a.mute(r, i);
              }
            }), a;
            if (_typeof(i) > "u") if (typeof r == "boolean") a._muted = r;else return a._muted;
            for (var c = a._getSoundIds(i), _ = 0; _ < c.length; _++) {
              var m = a._soundById(c[_]);
              m && (m._muted = r, m._interval && a._stopFade(m._id), a._webAudio && m._node ? m._node.gain.setValueAtTime(r ? 0 : m._volume, t.ctx.currentTime) : m._node && (m._node.muted = t._muted ? !0 : r), a._emit("mute", m._id));
            }
            return a;
          },
          volume: function volume() {
            var r = this,
              i = arguments,
              a,
              c;
            if (i.length === 0) return r._volume;
            if (i.length === 1 || i.length === 2 && _typeof(i[1]) > "u") {
              var _ = r._getSoundIds(),
                m = _.indexOf(i[0]);
              m >= 0 ? c = parseInt(i[0], 10) : a = parseFloat(i[0]);
            } else i.length >= 2 && (a = parseFloat(i[0]), c = parseInt(i[1], 10));
            var h;
            if (_typeof(a) < "u" && a >= 0 && a <= 1) {
              if (r._state !== "loaded" || r._playLock) return r._queue.push({
                event: "volume",
                action: function action() {
                  r.volume.apply(r, i);
                }
              }), r;
              _typeof(c) > "u" && (r._volume = a), c = r._getSoundIds(c);
              for (var v = 0; v < c.length; v++) h = r._soundById(c[v]), h && (h._volume = a, i[2] || r._stopFade(c[v]), r._webAudio && h._node && !h._muted ? h._node.gain.setValueAtTime(a, t.ctx.currentTime) : h._node && !h._muted && (h._node.volume = a * t.volume()), r._emit("volume", h._id));
            } else return h = c ? r._soundById(c) : r._sounds[0], h ? h._volume : 0;
            return r;
          },
          fade: function fade(r, i, a, c) {
            var _ = this;
            if (_._state !== "loaded" || _._playLock) return _._queue.push({
              event: "fade",
              action: function action() {
                _.fade(r, i, a, c);
              }
            }), _;
            r = Math.min(Math.max(0, parseFloat(r)), 1), i = Math.min(Math.max(0, parseFloat(i)), 1), a = parseFloat(a), _.volume(r, c);
            for (var m = _._getSoundIds(c), h = 0; h < m.length; h++) {
              var v = _._soundById(m[h]);
              if (v) {
                if (c || _._stopFade(m[h]), _._webAudio && !v._muted) {
                  var w = t.ctx.currentTime,
                    y = w + a / 1e3;
                  v._volume = r, v._node.gain.setValueAtTime(r, w), v._node.gain.linearRampToValueAtTime(i, y);
                }
                _._startFadeInterval(v, r, i, a, m[h], _typeof(c) > "u");
              }
            }
            return _;
          },
          _startFadeInterval: function _startFadeInterval(r, i, a, c, _, m) {
            var h = this,
              v = i,
              w = a - i,
              y = Math.abs(w / .01),
              A = Math.max(4, y > 0 ? c / y : c),
              C = Date.now();
            r._fadeTo = a, r._interval = setInterval(function () {
              var W = (Date.now() - C) / c;
              C = Date.now(), v += w * W, v = Math.round(v * 100) / 100, w < 0 ? v = Math.max(a, v) : v = Math.min(a, v), h._webAudio ? r._volume = v : h.volume(v, r._id, !0), m && (h._volume = v), (a < i && v <= a || a > i && v >= a) && (clearInterval(r._interval), r._interval = null, r._fadeTo = null, h.volume(a, r._id), h._emit("fade", r._id));
            }, A);
          },
          _stopFade: function _stopFade(r) {
            var i = this,
              a = i._soundById(r);
            return a && a._interval && (i._webAudio && a._node.gain.cancelScheduledValues(t.ctx.currentTime), clearInterval(a._interval), a._interval = null, i.volume(a._fadeTo, r), a._fadeTo = null, i._emit("fade", r)), i;
          },
          loop: function loop() {
            var r = this,
              i = arguments,
              a,
              c,
              _;
            if (i.length === 0) return r._loop;
            if (i.length === 1) {
              if (typeof i[0] == "boolean") a = i[0], r._loop = a;else return _ = r._soundById(parseInt(i[0], 10)), _ ? _._loop : !1;
            } else i.length === 2 && (a = i[0], c = parseInt(i[1], 10));
            for (var m = r._getSoundIds(c), h = 0; h < m.length; h++) _ = r._soundById(m[h]), _ && (_._loop = a, r._webAudio && _._node && _._node.bufferSource && (_._node.bufferSource.loop = a, a && (_._node.bufferSource.loopStart = _._start || 0, _._node.bufferSource.loopEnd = _._stop, r.playing(m[h]) && (r.pause(m[h], !0), r.play(m[h], !0)))));
            return r;
          },
          rate: function rate() {
            var r = this,
              i = arguments,
              a,
              c;
            if (i.length === 0) c = r._sounds[0]._id;else if (i.length === 1) {
              var _ = r._getSoundIds(),
                m = _.indexOf(i[0]);
              m >= 0 ? c = parseInt(i[0], 10) : a = parseFloat(i[0]);
            } else i.length === 2 && (a = parseFloat(i[0]), c = parseInt(i[1], 10));
            var h;
            if (typeof a == "number") {
              if (r._state !== "loaded" || r._playLock) return r._queue.push({
                event: "rate",
                action: function action() {
                  r.rate.apply(r, i);
                }
              }), r;
              _typeof(c) > "u" && (r._rate = a), c = r._getSoundIds(c);
              for (var v = 0; v < c.length; v++) if (h = r._soundById(c[v]), h) {
                r.playing(c[v]) && (h._rateSeek = r.seek(c[v]), h._playStart = r._webAudio ? t.ctx.currentTime : h._playStart), h._rate = a, r._webAudio && h._node && h._node.bufferSource ? h._node.bufferSource.playbackRate.setValueAtTime(a, t.ctx.currentTime) : h._node && (h._node.playbackRate = a);
                var w = r.seek(c[v]),
                  y = (r._sprite[h._sprite][0] + r._sprite[h._sprite][1]) / 1e3 - w,
                  A = y * 1e3 / Math.abs(h._rate);
                (r._endTimers[c[v]] || !h._paused) && (r._clearTimer(c[v]), r._endTimers[c[v]] = setTimeout(r._ended.bind(r, h), A)), r._emit("rate", h._id);
              }
            } else return h = r._soundById(c), h ? h._rate : r._rate;
            return r;
          },
          seek: function seek() {
            var r = this,
              i = arguments,
              a,
              c;
            if (i.length === 0) r._sounds.length && (c = r._sounds[0]._id);else if (i.length === 1) {
              var _ = r._getSoundIds(),
                m = _.indexOf(i[0]);
              m >= 0 ? c = parseInt(i[0], 10) : r._sounds.length && (c = r._sounds[0]._id, a = parseFloat(i[0]));
            } else i.length === 2 && (a = parseFloat(i[0]), c = parseInt(i[1], 10));
            if (_typeof(c) > "u") return 0;
            if (typeof a == "number" && (r._state !== "loaded" || r._playLock)) return r._queue.push({
              event: "seek",
              action: function action() {
                r.seek.apply(r, i);
              }
            }), r;
            var h = r._soundById(c);
            if (h) if (typeof a == "number" && a >= 0) {
              var v = r.playing(c);
              v && r.pause(c, !0), h._seek = a, h._ended = !1, r._clearTimer(c), !r._webAudio && h._node && !isNaN(h._node.duration) && (h._node.currentTime = a);
              var w = function w() {
                v && r.play(c, !0), r._emit("seek", c);
              };
              if (v && !r._webAudio) {
                var _y2 = function y() {
                  r._playLock ? setTimeout(_y2, 0) : w();
                };
                setTimeout(_y2, 0);
              } else w();
            } else if (r._webAudio) {
              var A = r.playing(c) ? t.ctx.currentTime - h._playStart : 0,
                C = h._rateSeek ? h._rateSeek - h._seek : 0;
              return h._seek + (C + A * Math.abs(h._rate));
            } else return h._node.currentTime;
            return r;
          },
          playing: function playing(r) {
            var i = this;
            if (typeof r == "number") {
              var a = i._soundById(r);
              return a ? !a._paused : !1;
            }
            for (var c = 0; c < i._sounds.length; c++) if (!i._sounds[c]._paused) return !0;
            return !1;
          },
          duration: function duration(r) {
            var i = this,
              a = i._duration,
              c = i._soundById(r);
            return c && (a = i._sprite[c._sprite][1] / 1e3), a;
          },
          state: function state() {
            return this._state;
          },
          unload: function unload() {
            for (var r = this, i = r._sounds, a = 0; a < i.length; a++) i[a]._paused || r.stop(i[a]._id), r._webAudio || (r._clearSound(i[a]._node), i[a]._node.removeEventListener("error", i[a]._errorFn, !1), i[a]._node.removeEventListener(t._canPlayEvent, i[a]._loadFn, !1), i[a]._node.removeEventListener("ended", i[a]._endFn, !1), t._releaseHtml5Audio(i[a]._node)), delete i[a]._node, r._clearTimer(i[a]._id);
            var c = t._howls.indexOf(r);
            c >= 0 && t._howls.splice(c, 1);
            var _ = !0;
            for (a = 0; a < t._howls.length; a++) if (t._howls[a]._src === r._src || r._src.indexOf(t._howls[a]._src) >= 0) {
              _ = !1;
              break;
            }
            return u && _ && delete u[r._src], t.noAudio = !1, r._state = "unloaded", r._sounds = [], r = null, null;
          },
          on: function on(r, i, a, c) {
            var _ = this,
              m = _["_on" + r];
            return typeof i == "function" && m.push(c ? {
              id: a,
              fn: i,
              once: c
            } : {
              id: a,
              fn: i
            }), _;
          },
          off: function off(r, i, a) {
            var c = this,
              _ = c["_on" + r],
              m = 0;
            if (typeof i == "number" && (a = i, i = null), i || a) for (m = 0; m < _.length; m++) {
              var h = a === _[m].id;
              if (i === _[m].fn && h || !i && h) {
                _.splice(m, 1);
                break;
              }
            } else if (r) c["_on" + r] = [];else {
              var v = Object.keys(c);
              for (m = 0; m < v.length; m++) v[m].indexOf("_on") === 0 && Array.isArray(c[v[m]]) && (c[v[m]] = []);
            }
            return c;
          },
          once: function once(r, i, a) {
            var c = this;
            return c.on(r, i, a, 1), c;
          },
          _emit: function _emit(r, i, a) {
            for (var c = this, _ = c["_on" + r], m = _.length - 1; m >= 0; m--) (!_[m].id || _[m].id === i || r === "load") && (setTimeout(function (h) {
              h.call(this, i, a);
            }.bind(c, _[m].fn), 0), _[m].once && c.off(r, _[m].fn, _[m].id));
            return c._loadQueue(r), c;
          },
          _loadQueue: function _loadQueue(r) {
            var i = this;
            if (i._queue.length > 0) {
              var a = i._queue[0];
              a.event === r && (i._queue.shift(), i._loadQueue()), r || a.action();
            }
            return i;
          },
          _ended: function _ended(r) {
            var i = this,
              a = r._sprite;
            if (!i._webAudio && r._node && !r._node.paused && !r._node.ended && r._node.currentTime < r._stop) return setTimeout(i._ended.bind(i, r), 100), i;
            var c = !!(r._loop || i._sprite[a][2]);
            if (i._emit("end", r._id), !i._webAudio && c && i.stop(r._id, !0).play(r._id), i._webAudio && c) {
              i._emit("play", r._id), r._seek = r._start || 0, r._rateSeek = 0, r._playStart = t.ctx.currentTime;
              var _ = (r._stop - r._start) * 1e3 / Math.abs(r._rate);
              i._endTimers[r._id] = setTimeout(i._ended.bind(i, r), _);
            }
            return i._webAudio && !c && (r._paused = !0, r._ended = !0, r._seek = r._start || 0, r._rateSeek = 0, i._clearTimer(r._id), i._cleanBuffer(r._node), t._autoSuspend()), !i._webAudio && !c && i.stop(r._id, !0), i;
          },
          _clearTimer: function _clearTimer(r) {
            var i = this;
            if (i._endTimers[r]) {
              if (typeof i._endTimers[r] != "function") clearTimeout(i._endTimers[r]);else {
                var a = i._soundById(r);
                a && a._node && a._node.removeEventListener("ended", i._endTimers[r], !1);
              }
              delete i._endTimers[r];
            }
            return i;
          },
          _soundById: function _soundById(r) {
            for (var i = this, a = 0; a < i._sounds.length; a++) if (r === i._sounds[a]._id) return i._sounds[a];
            return null;
          },
          _inactiveSound: function _inactiveSound() {
            var r = this;
            r._drain();
            for (var i = 0; i < r._sounds.length; i++) if (r._sounds[i]._ended) return r._sounds[i].reset();
            return new s(r);
          },
          _drain: function _drain() {
            var r = this,
              i = r._pool,
              a = 0,
              c = 0;
            if (!(r._sounds.length < i)) {
              for (c = 0; c < r._sounds.length; c++) r._sounds[c]._ended && a++;
              for (c = r._sounds.length - 1; c >= 0; c--) {
                if (a <= i) return;
                r._sounds[c]._ended && (r._webAudio && r._sounds[c]._node && r._sounds[c]._node.disconnect(0), r._sounds.splice(c, 1), a--);
              }
            }
          },
          _getSoundIds: function _getSoundIds(r) {
            var i = this;
            if (_typeof(r) > "u") {
              for (var a = [], c = 0; c < i._sounds.length; c++) a.push(i._sounds[c]._id);
              return a;
            } else return [r];
          },
          _refreshBuffer: function _refreshBuffer(r) {
            var i = this;
            return r._node.bufferSource = t.ctx.createBufferSource(), r._node.bufferSource.buffer = u[i._src], r._panner ? r._node.bufferSource.connect(r._panner) : r._node.bufferSource.connect(r._node), r._node.bufferSource.loop = r._loop, r._loop && (r._node.bufferSource.loopStart = r._start || 0, r._node.bufferSource.loopEnd = r._stop || 0), r._node.bufferSource.playbackRate.setValueAtTime(r._rate, t.ctx.currentTime), i;
          },
          _cleanBuffer: function _cleanBuffer(r) {
            var i = this,
              a = t._navigator && t._navigator.vendor.indexOf("Apple") >= 0;
            if (!r.bufferSource) return i;
            if (t._scratchBuffer && r.bufferSource && (r.bufferSource.onended = null, r.bufferSource.disconnect(0), a)) try {
              r.bufferSource.buffer = t._scratchBuffer;
            } catch (_unused10) {}
            return r.bufferSource = null, i;
          },
          _clearSound: function _clearSound(r) {
            var i = /MSIE |Trident\//.test(t._navigator && t._navigator.userAgent);
            i || (r.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
          }
        };
        var s = function s(r) {
          this._parent = r, this.init();
        };
        s.prototype = {
          init: function init() {
            var r = this,
              i = r._parent;
            return r._muted = i._muted, r._loop = i._loop, r._volume = i._volume, r._rate = i._rate, r._seek = 0, r._paused = !0, r._ended = !0, r._sprite = "__default", r._id = ++t._counter, i._sounds.push(r), r.create(), r;
          },
          create: function create() {
            var r = this,
              i = r._parent,
              a = t._muted || r._muted || r._parent._muted ? 0 : r._volume;
            return i._webAudio ? (r._node = _typeof(t.ctx.createGain) > "u" ? t.ctx.createGainNode() : t.ctx.createGain(), r._node.gain.setValueAtTime(a, t.ctx.currentTime), r._node.paused = !0, r._node.connect(t.masterGain)) : t.noAudio || (r._node = t._obtainHtml5Audio(), r._errorFn = r._errorListener.bind(r), r._node.addEventListener("error", r._errorFn, !1), r._loadFn = r._loadListener.bind(r), r._node.addEventListener(t._canPlayEvent, r._loadFn, !1), r._endFn = r._endListener.bind(r), r._node.addEventListener("ended", r._endFn, !1), r._node.src = i._src, r._node.preload = i._preload === !0 ? "auto" : i._preload, r._node.volume = a * t.volume(), r._node.load()), r;
          },
          reset: function reset() {
            var r = this,
              i = r._parent;
            return r._muted = i._muted, r._loop = i._loop, r._volume = i._volume, r._rate = i._rate, r._seek = 0, r._rateSeek = 0, r._paused = !0, r._ended = !0, r._sprite = "__default", r._id = ++t._counter, r;
          },
          _errorListener: function _errorListener() {
            var r = this;
            r._parent._emit("loaderror", r._id, r._node.error ? r._node.error.code : 0), r._node.removeEventListener("error", r._errorFn, !1);
          },
          _loadListener: function _loadListener() {
            var r = this,
              i = r._parent;
            i._duration = Math.ceil(r._node.duration * 10) / 10, Object.keys(i._sprite).length === 0 && (i._sprite = {
              __default: [0, i._duration * 1e3]
            }), i._state !== "loaded" && (i._state = "loaded", i._emit("load"), i._loadQueue()), r._node.removeEventListener(t._canPlayEvent, r._loadFn, !1);
          },
          _endListener: function _endListener() {
            var r = this,
              i = r._parent;
            i._duration === 1 / 0 && (i._duration = Math.ceil(r._node.duration * 10) / 10, i._sprite.__default[1] === 1 / 0 && (i._sprite.__default[1] = i._duration * 1e3), i._ended(r)), r._node.removeEventListener("ended", r._endFn, !1);
          }
        };
        var u = {},
          f = function f(r) {
            var i = r._src;
            if (u[i]) {
              r._duration = u[i].duration, p(r);
              return;
            }
            if (/^data:[^;]+;base64,/.test(i)) {
              for (var a = atob(i.split(",")[1]), c = new Uint8Array(a.length), _ = 0; _ < a.length; ++_) c[_] = a.charCodeAt(_);
              d(c.buffer, r);
            } else {
              var m = new XMLHttpRequest();
              m.open(r._xhr.method, i, !0), m.withCredentials = r._xhr.withCredentials, m.responseType = "arraybuffer", r._xhr.headers && Object.keys(r._xhr.headers).forEach(function (h) {
                m.setRequestHeader(h, r._xhr.headers[h]);
              }), m.onload = function () {
                var h = (m.status + "")[0];
                if (h !== "0" && h !== "2" && h !== "3") {
                  r._emit("loaderror", null, "Failed loading audio file with status: " + m.status + ".");
                  return;
                }
                d(m.response, r);
              }, m.onerror = function () {
                r._webAudio && (r._html5 = !0, r._webAudio = !1, r._sounds = [], delete u[i], r.load());
              }, l(m);
            }
          },
          l = function l(r) {
            try {
              r.send();
            } catch (_unused11) {
              r.onerror();
            }
          },
          d = function d(r, i) {
            var a = function a() {
                i._emit("loaderror", null, "Decoding audio data failed.");
              },
              c = function c(_) {
                _ && i._sounds.length > 0 ? (u[i._src] = _, p(i, _)) : a();
              };
            (typeof Promise === "undefined" ? "undefined" : _typeof(Promise)) < "u" && t.ctx.decodeAudioData.length === 1 ? t.ctx.decodeAudioData(r).then(c).catch(a) : t.ctx.decodeAudioData(r, c, a);
          },
          p = function p(r, i) {
            i && !r._duration && (r._duration = i.duration), Object.keys(r._sprite).length === 0 && (r._sprite = {
              __default: [0, r._duration * 1e3]
            }), r._state !== "loaded" && (r._state = "loaded", r._emit("load"), r._loadQueue());
          },
          g = function g() {
            if (t.usingWebAudio) {
              try {
                (typeof AudioContext === "undefined" ? "undefined" : _typeof(AudioContext)) < "u" ? t.ctx = new AudioContext() : (typeof webkitAudioContext === "undefined" ? "undefined" : _typeof(webkitAudioContext)) < "u" ? t.ctx = new webkitAudioContext() : t.usingWebAudio = !1;
              } catch (_unused12) {
                t.usingWebAudio = !1;
              }
              t.ctx || (t.usingWebAudio = !1);
              var r = /iP(hone|od|ad)/.test(t._navigator && t._navigator.platform),
                i = t._navigator && t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                a = i ? parseInt(i[1], 10) : null;
              if (r && a && a < 9) {
                var c = /safari/.test(t._navigator && t._navigator.userAgent.toLowerCase());
                t._navigator && !c && (t.usingWebAudio = !1);
              }
              t.usingWebAudio && (t.masterGain = _typeof(t.ctx.createGain) > "u" ? t.ctx.createGainNode() : t.ctx.createGain(), t.masterGain.gain.setValueAtTime(t._muted ? 0 : t._volume, t.ctx.currentTime), t.masterGain.connect(t.ctx.destination)), t._setup();
            }
          };
        e.Howler = t, e.Howl = o, _typeof(Pe) < "u" ? (Pe.HowlerGlobal = n, Pe.Howler = t, Pe.Howl = o, Pe.Sound = s) : (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && (window.HowlerGlobal = n, window.Howler = t, window.Howl = o, window.Sound = s);
      })();
      (function () {
        HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function (t) {
          var o = this;
          if (!o.ctx || !o.ctx.listener) return o;
          for (var s = o._howls.length - 1; s >= 0; s--) o._howls[s].stereo(t);
          return o;
        }, HowlerGlobal.prototype.pos = function (t, o, s) {
          var u = this;
          if (!u.ctx || !u.ctx.listener) return u;
          if (o = typeof o != "number" ? u._pos[1] : o, s = typeof s != "number" ? u._pos[2] : s, typeof t == "number") u._pos = [t, o, s], _typeof(u.ctx.listener.positionX) < "u" ? (u.ctx.listener.positionX.setTargetAtTime(u._pos[0], Howler.ctx.currentTime, .1), u.ctx.listener.positionY.setTargetAtTime(u._pos[1], Howler.ctx.currentTime, .1), u.ctx.listener.positionZ.setTargetAtTime(u._pos[2], Howler.ctx.currentTime, .1)) : u.ctx.listener.setPosition(u._pos[0], u._pos[1], u._pos[2]);else return u._pos;
          return u;
        }, HowlerGlobal.prototype.orientation = function (t, o, s, u, f, l) {
          var d = this;
          if (!d.ctx || !d.ctx.listener) return d;
          var p = d._orientation;
          if (o = typeof o != "number" ? p[1] : o, s = typeof s != "number" ? p[2] : s, u = typeof u != "number" ? p[3] : u, f = typeof f != "number" ? p[4] : f, l = typeof l != "number" ? p[5] : l, typeof t == "number") d._orientation = [t, o, s, u, f, l], _typeof(d.ctx.listener.forwardX) < "u" ? (d.ctx.listener.forwardX.setTargetAtTime(t, Howler.ctx.currentTime, .1), d.ctx.listener.forwardY.setTargetAtTime(o, Howler.ctx.currentTime, .1), d.ctx.listener.forwardZ.setTargetAtTime(s, Howler.ctx.currentTime, .1), d.ctx.listener.upX.setTargetAtTime(u, Howler.ctx.currentTime, .1), d.ctx.listener.upY.setTargetAtTime(f, Howler.ctx.currentTime, .1), d.ctx.listener.upZ.setTargetAtTime(l, Howler.ctx.currentTime, .1)) : d.ctx.listener.setOrientation(t, o, s, u, f, l);else return p;
          return d;
        }, Howl.prototype.init = function (t) {
          return function (o) {
            var s = this;
            return s._orientation = o.orientation || [1, 0, 0], s._stereo = o.stereo || null, s._pos = o.pos || null, s._pannerAttr = {
              coneInnerAngle: _typeof(o.coneInnerAngle) < "u" ? o.coneInnerAngle : 360,
              coneOuterAngle: _typeof(o.coneOuterAngle) < "u" ? o.coneOuterAngle : 360,
              coneOuterGain: _typeof(o.coneOuterGain) < "u" ? o.coneOuterGain : 0,
              distanceModel: _typeof(o.distanceModel) < "u" ? o.distanceModel : "inverse",
              maxDistance: _typeof(o.maxDistance) < "u" ? o.maxDistance : 1e4,
              panningModel: _typeof(o.panningModel) < "u" ? o.panningModel : "HRTF",
              refDistance: _typeof(o.refDistance) < "u" ? o.refDistance : 1,
              rolloffFactor: _typeof(o.rolloffFactor) < "u" ? o.rolloffFactor : 1
            }, s._onstereo = o.onstereo ? [{
              fn: o.onstereo
            }] : [], s._onpos = o.onpos ? [{
              fn: o.onpos
            }] : [], s._onorientation = o.onorientation ? [{
              fn: o.onorientation
            }] : [], t.call(this, o);
          };
        }(Howl.prototype.init), Howl.prototype.stereo = function (t, o) {
          var s = this;
          if (!s._webAudio) return s;
          if (s._state !== "loaded") return s._queue.push({
            event: "stereo",
            action: function action() {
              s.stereo(t, o);
            }
          }), s;
          var u = _typeof(Howler.ctx.createStereoPanner) > "u" ? "spatial" : "stereo";
          if (_typeof(o) > "u") if (typeof t == "number") s._stereo = t, s._pos = [t, 0, 0];else return s._stereo;
          for (var f = s._getSoundIds(o), l = 0; l < f.length; l++) {
            var d = s._soundById(f[l]);
            if (d) if (typeof t == "number") d._stereo = t, d._pos = [t, 0, 0], d._node && (d._pannerAttr.panningModel = "equalpower", (!d._panner || !d._panner.pan) && n(d, u), u === "spatial" ? _typeof(d._panner.positionX) < "u" ? (d._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime), d._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), d._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : d._panner.setPosition(t, 0, 0) : d._panner.pan.setValueAtTime(t, Howler.ctx.currentTime)), s._emit("stereo", d._id);else return d._stereo;
          }
          return s;
        }, Howl.prototype.pos = function (t, o, s, u) {
          var f = this;
          if (!f._webAudio) return f;
          if (f._state !== "loaded") return f._queue.push({
            event: "pos",
            action: function action() {
              f.pos(t, o, s, u);
            }
          }), f;
          if (o = typeof o != "number" ? 0 : o, s = typeof s != "number" ? -.5 : s, _typeof(u) > "u") if (typeof t == "number") f._pos = [t, o, s];else return f._pos;
          for (var l = f._getSoundIds(u), d = 0; d < l.length; d++) {
            var p = f._soundById(l[d]);
            if (p) if (typeof t == "number") p._pos = [t, o, s], p._node && ((!p._panner || p._panner.pan) && n(p, "spatial"), _typeof(p._panner.positionX) < "u" ? (p._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime), p._panner.positionY.setValueAtTime(o, Howler.ctx.currentTime), p._panner.positionZ.setValueAtTime(s, Howler.ctx.currentTime)) : p._panner.setPosition(t, o, s)), f._emit("pos", p._id);else return p._pos;
          }
          return f;
        }, Howl.prototype.orientation = function (t, o, s, u) {
          var f = this;
          if (!f._webAudio) return f;
          if (f._state !== "loaded") return f._queue.push({
            event: "orientation",
            action: function action() {
              f.orientation(t, o, s, u);
            }
          }), f;
          if (o = typeof o != "number" ? f._orientation[1] : o, s = typeof s != "number" ? f._orientation[2] : s, _typeof(u) > "u") if (typeof t == "number") f._orientation = [t, o, s];else return f._orientation;
          for (var l = f._getSoundIds(u), d = 0; d < l.length; d++) {
            var p = f._soundById(l[d]);
            if (p) if (typeof t == "number") p._orientation = [t, o, s], p._node && (p._panner || (p._pos || (p._pos = f._pos || [0, 0, -.5]), n(p, "spatial")), _typeof(p._panner.orientationX) < "u" ? (p._panner.orientationX.setValueAtTime(t, Howler.ctx.currentTime), p._panner.orientationY.setValueAtTime(o, Howler.ctx.currentTime), p._panner.orientationZ.setValueAtTime(s, Howler.ctx.currentTime)) : p._panner.setOrientation(t, o, s)), f._emit("orientation", p._id);else return p._orientation;
          }
          return f;
        }, Howl.prototype.pannerAttr = function () {
          var t = this,
            o = arguments,
            s,
            u,
            f;
          if (!t._webAudio) return t;
          if (o.length === 0) return t._pannerAttr;
          if (o.length === 1) {
            if (_typeof(o[0]) == "object") s = o[0], _typeof(u) > "u" && (s.pannerAttr || (s.pannerAttr = {
              coneInnerAngle: s.coneInnerAngle,
              coneOuterAngle: s.coneOuterAngle,
              coneOuterGain: s.coneOuterGain,
              distanceModel: s.distanceModel,
              maxDistance: s.maxDistance,
              refDistance: s.refDistance,
              rolloffFactor: s.rolloffFactor,
              panningModel: s.panningModel
            }), t._pannerAttr = {
              coneInnerAngle: _typeof(s.pannerAttr.coneInnerAngle) < "u" ? s.pannerAttr.coneInnerAngle : t._coneInnerAngle,
              coneOuterAngle: _typeof(s.pannerAttr.coneOuterAngle) < "u" ? s.pannerAttr.coneOuterAngle : t._coneOuterAngle,
              coneOuterGain: _typeof(s.pannerAttr.coneOuterGain) < "u" ? s.pannerAttr.coneOuterGain : t._coneOuterGain,
              distanceModel: _typeof(s.pannerAttr.distanceModel) < "u" ? s.pannerAttr.distanceModel : t._distanceModel,
              maxDistance: _typeof(s.pannerAttr.maxDistance) < "u" ? s.pannerAttr.maxDistance : t._maxDistance,
              refDistance: _typeof(s.pannerAttr.refDistance) < "u" ? s.pannerAttr.refDistance : t._refDistance,
              rolloffFactor: _typeof(s.pannerAttr.rolloffFactor) < "u" ? s.pannerAttr.rolloffFactor : t._rolloffFactor,
              panningModel: _typeof(s.pannerAttr.panningModel) < "u" ? s.pannerAttr.panningModel : t._panningModel
            });else return f = t._soundById(parseInt(o[0], 10)), f ? f._pannerAttr : t._pannerAttr;
          } else o.length === 2 && (s = o[0], u = parseInt(o[1], 10));
          for (var l = t._getSoundIds(u), d = 0; d < l.length; d++) if (f = t._soundById(l[d]), f) {
            var p = f._pannerAttr;
            p = {
              coneInnerAngle: _typeof(s.coneInnerAngle) < "u" ? s.coneInnerAngle : p.coneInnerAngle,
              coneOuterAngle: _typeof(s.coneOuterAngle) < "u" ? s.coneOuterAngle : p.coneOuterAngle,
              coneOuterGain: _typeof(s.coneOuterGain) < "u" ? s.coneOuterGain : p.coneOuterGain,
              distanceModel: _typeof(s.distanceModel) < "u" ? s.distanceModel : p.distanceModel,
              maxDistance: _typeof(s.maxDistance) < "u" ? s.maxDistance : p.maxDistance,
              refDistance: _typeof(s.refDistance) < "u" ? s.refDistance : p.refDistance,
              rolloffFactor: _typeof(s.rolloffFactor) < "u" ? s.rolloffFactor : p.rolloffFactor,
              panningModel: _typeof(s.panningModel) < "u" ? s.panningModel : p.panningModel
            };
            var g = f._panner;
            g || (f._pos || (f._pos = t._pos || [0, 0, -.5]), n(f, "spatial"), g = f._panner), g.coneInnerAngle = p.coneInnerAngle, g.coneOuterAngle = p.coneOuterAngle, g.coneOuterGain = p.coneOuterGain, g.distanceModel = p.distanceModel, g.maxDistance = p.maxDistance, g.refDistance = p.refDistance, g.rolloffFactor = p.rolloffFactor, g.panningModel = p.panningModel;
          }
          return t;
        }, Sound.prototype.init = function (t) {
          return function () {
            var o = this,
              s = o._parent;
            o._orientation = s._orientation, o._stereo = s._stereo, o._pos = s._pos, o._pannerAttr = s._pannerAttr, t.call(this), o._stereo ? s.stereo(o._stereo) : o._pos && s.pos(o._pos[0], o._pos[1], o._pos[2], o._id);
          };
        }(Sound.prototype.init), Sound.prototype.reset = function (t) {
          return function () {
            var o = this,
              s = o._parent;
            return o._orientation = s._orientation, o._stereo = s._stereo, o._pos = s._pos, o._pannerAttr = s._pannerAttr, o._stereo ? s.stereo(o._stereo) : o._pos ? s.pos(o._pos[0], o._pos[1], o._pos[2], o._id) : o._panner && (o._panner.disconnect(0), o._panner = void 0, s._refreshBuffer(o)), t.call(this);
          };
        }(Sound.prototype.reset);
        var n = function n(t, o) {
          o = o || "spatial", o === "spatial" ? (t._panner = Howler.ctx.createPanner(), t._panner.coneInnerAngle = t._pannerAttr.coneInnerAngle, t._panner.coneOuterAngle = t._pannerAttr.coneOuterAngle, t._panner.coneOuterGain = t._pannerAttr.coneOuterGain, t._panner.distanceModel = t._pannerAttr.distanceModel, t._panner.maxDistance = t._pannerAttr.maxDistance, t._panner.refDistance = t._pannerAttr.refDistance, t._panner.rolloffFactor = t._pannerAttr.rolloffFactor, t._panner.panningModel = t._pannerAttr.panningModel, _typeof(t._panner.positionX) < "u" ? (t._panner.positionX.setValueAtTime(t._pos[0], Howler.ctx.currentTime), t._panner.positionY.setValueAtTime(t._pos[1], Howler.ctx.currentTime), t._panner.positionZ.setValueAtTime(t._pos[2], Howler.ctx.currentTime)) : t._panner.setPosition(t._pos[0], t._pos[1], t._pos[2]), _typeof(t._panner.orientationX) < "u" ? (t._panner.orientationX.setValueAtTime(t._orientation[0], Howler.ctx.currentTime), t._panner.orientationY.setValueAtTime(t._orientation[1], Howler.ctx.currentTime), t._panner.orientationZ.setValueAtTime(t._orientation[2], Howler.ctx.currentTime)) : t._panner.setOrientation(t._orientation[0], t._orientation[1], t._orientation[2])) : (t._panner = Howler.ctx.createStereoPanner(), t._panner.pan.setValueAtTime(t._stereo, Howler.ctx.currentTime)), t._panner.connect(t._node), t._paused || t._parent.pause(t._id, !0).play(t._id, !0);
        };
      })();
    }(lt)), lt;
  }
  var iu = ou();
  var su = 1e3,
    au = 1 / 1e3,
    ze = function () {
      function ze() {
        _classCallCheck(this, ze);
        this.src = "", this.emitter = new Phaser.Events.EventEmitter();
      }
      return _createClass(ze, [{
        key: "setSrc",
        value: function setSrc(n) {
          return this.src = n, this.howl && (this.destroy(), this.load()), Promise.resolve();
        }
      }, {
        key: "getSrc",
        value: function getSrc() {
          return Promise.resolve(this.src);
        }
      }, {
        key: "setLoop",
        value: function setLoop(n) {
          return this.howl && this.howl.loop(n), Promise.resolve();
        }
      }, {
        key: "getLoop",
        value: function getLoop() {
          return this.howl ? Promise.resolve(this.howl.loop()) : Promise.resolve(!1);
        }
      }, {
        key: "isPaused",
        value: function isPaused() {
          return this.howl ? Promise.resolve(!this.howl.playing()) : Promise.resolve(!1);
        }
      }, {
        key: "getDuration",
        value: function getDuration() {
          return this.howl ? Promise.resolve(this.howl.duration()) : Promise.resolve(0);
        }
      }, {
        key: "isLoaded",
        value: function isLoaded() {
          return this.howl ? Promise.resolve(this.howl.state() === "loaded") : Promise.resolve(!1);
        }
      }, {
        key: "load",
        value: function load() {
          var _this5 = this;
          return this.src && (this.howl = new iu.Howl({
            src: [this.src],
            onload: function onload() {
              return _this5.emit("load", _this5.src);
            },
            onloaderror: function onloaderror(n, t) {
              return _this5.emit("load-error", _this5.src, t);
            },
            onplay: function onplay() {
              return _this5.emit("playing", _this5.src);
            },
            onplayerror: function onplayerror(n, t) {
              return _this5.emit("play-error", _this5.src, t);
            },
            onpause: function onpause() {
              return _this5.emit("pause", _this5.src);
            },
            onend: function onend() {
              return _this5.emit("end", _this5.src);
            },
            onseek: function onseek() {
              return _this5.emit("seek", _this5.src);
            },
            onvolume: function onvolume() {
              var _ref12;
              var n;
              return _this5.emit("volume-change", _this5.src, (_ref12 = (n = _this5.howl) == null ? void 0 : n.volume()) !== null && _ref12 !== void 0 ? _ref12 : 1);
            }
          })), Promise.resolve();
        }
      }, {
        key: "unload",
        value: function unload() {
          var n;
          return (n = this.howl) == null || n.unload(), this.emit("unload", this.src), Promise.resolve();
        }
      }, {
        key: "play",
        value: function play() {
          var n;
          return (n = this.howl) == null || n.play(), Promise.resolve();
        }
      }, {
        key: "replay",
        value: function replay() {
          return this.howl && (this.howl.seek(0), this.howl.play()), Promise.resolve();
        }
      }, {
        key: "pause",
        value: function pause() {
          var n;
          return (n = this.howl) == null || n.pause(), Promise.resolve();
        }
      }, {
        key: "unpause",
        value: function unpause() {
          var n;
          return (n = this.howl) == null || n.play(), Promise.resolve();
        }
      }, {
        key: "stop",
        value: function stop() {
          var n;
          return (n = this.howl) == null || n.stop(), Promise.resolve();
        }
      }, {
        key: "setCurrentTime",
        value: function setCurrentTime(n) {
          var t;
          return (t = this.howl) == null || t.seek(n * au), Promise.resolve();
        }
      }, {
        key: "getCurrentTime",
        value: function getCurrentTime() {
          var n = this.howl ? this.howl.seek() : 0;
          return Promise.resolve(n * su);
        }
      }, {
        key: "setVolume",
        value: function setVolume(n) {
          var t;
          return (t = this.howl) == null || t.volume(n), Promise.resolve();
        }
      }, {
        key: "getVolume",
        value: function getVolume() {
          var _ref13;
          var n;
          return Promise.resolve((_ref13 = (n = this.howl) == null ? void 0 : n.volume()) !== null && _ref13 !== void 0 ? _ref13 : 1);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var n;
          return (n = this.howl) == null || n.unload(), this.emitter.destroy(), Promise.resolve();
        }
      }, {
        key: "emit",
        value: function emit(n) {
          var _this$emitter;
          for (var _len12 = arguments.length, t = new Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
            t[_key12 - 1] = arguments[_key12];
          }
          (_this$emitter = this.emitter).emit.apply(_this$emitter, [n].concat(t));
        }
      }, {
        key: "on",
        value: function on(n, t) {
          this.emitter.on(n, t);
        }
      }, {
        key: "once",
        value: function once(n, t) {
          this.emitter.once(n, t);
        }
      }, {
        key: "off",
        value: function off(n, t) {
          this.emitter.off(n, t);
        }
      }]);
    }();
  ze.createPlayer = function () {
    var _ref14 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee2(n, t) {
      var o;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            o = new ze();
            _context2.next = 3;
            return o.setSrc(n);
          case 3:
            _context2.next = 5;
            return o.load();
          case 5:
            _context2.next = 7;
            return o.setLoop(t);
          case 7:
            return _context2.abrupt("return", o);
          case 8:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2, _x3) {
      return _ref14.apply(this, arguments);
    };
  }();
  var vn = ze,
    St;
  var uu = ["questionStart", "question-start", "interactionStart", "interaction-start"],
    fu = ["questionEnd", "question-end", "interactionEnd", "interaction-end"],
    cu = ["questionPause", "question-pause", "interactionPause", "interaction-pause"],
    lu = ["questionResume", "question-resume", "interactionResume", "interaction-resume"];
  function du(e) {
    St = e;
  }
  function _u() {
    if (!St) throw new Error("Emitter not set");
    return St;
  }
  function pu() {
    return P(window, ["::::LIVE_CONTEXT::::", "isQuestionStarted"], !1) || P(window, ["::::REC_CONTEXT::::", "isQuestionStarted"], !1) || P(window, ["::::STAGE_CONTEXT::::", "isQuestionStarted"], !1);
  }
  function br(e, n, t, o) {
    var s = _u(),
      u = function u() {
        var _iterator12 = _createForOfIteratorHelper(e),
          _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var f = _step12.value;
            s.off(f, t);
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      };
    if (o == null || o(u), n) {
      var _iterator13 = _createForOfIteratorHelper(e),
        _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var f = _step13.value;
          s.once(f, t);
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
    } else {
      var _iterator14 = _createForOfIteratorHelper(e),
        _step14;
      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var _f = _step14.value;
          s.on(_f, t);
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    }
    return {
      off: u
    };
  }
  function Ut(e, n) {
    return function (t, o) {
      return br(e, n, t, o);
    };
  }
  function yn(e, n) {
    return pu() ? (e(), {
      off: function off() {}
    }) : br(uu, !0, e, n);
  }
  var hu = Ut(fu, !0),
    Wt = Ut(cu, !1),
    Vt = Ut(lu, !1);
  function Tr(e) {
    var n = P(window, ["::::STAGE_CONTEXT::::", "game", "ybcEvents"], null);
    function t() {
      return P(window, ["::::STAGE_CONTEXT::::", "isObjectiveCompleted"], null);
    }
    return n ? {
      ybcEvents: n,
      on: function on(o, s) {
        var u = function u() {
          return n.off(o, s);
        };
        return n.on(o, s), e == null || e(u), {
          off: u
        };
      },
      once: function once(o, s) {
        var u = function u() {
          return n.off(o, s);
        };
        return n.once(o, s), e == null || e(u), {
          off: u
        };
      },
      off: function off(o, s) {
        return n.off(o, s);
      },
      emit: function emit(o) {
        for (var _len13 = arguments.length, s = new Array(_len13 > 1 ? _len13 - 1 : 0), _key13 = 1; _key13 < _len13; _key13++) {
          s[_key13 - 1] = arguments[_key13];
        }
        return n.emit.apply(n, [o].concat(s));
      },
      onMethodCall: function onMethodCall(o, s) {
        var u = function () {
            var _ref15 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee3() {
              var d,
                _args3 = arguments;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.t0 = Un;
                    _context3.t1 = {
                      isFailure: !1,
                      message: void 0
                    };
                    _context3.next = 4;
                    return s.apply(void 0, _args3);
                  case 4:
                    _context3.t2 = _context3.sent;
                    d = (0, _context3.t0)(_context3.t1, _context3.t2);
                    n.emit("".concat(o, "-complete"), {
                      shouldStop: d.isFailure,
                      errorMessage: d.message,
                      value: P(d, "value", null)
                    });
                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function u() {
              return _ref15.apply(this, arguments);
            };
          }(),
          f = function f() {
            return n.off(o, u);
          };
        return n.on(o, u), e == null || e(f), {
          off: f
        };
      },
      markObjectiveAchieved: function markObjectiveAchieved() {
        var o = t();
        o && (o.value = !0);
      },
      markObjectiveFailed: function markObjectiveFailed() {
        var o = t();
        o && (o.value = !1);
      },
      resetObjective: function resetObjective() {
        var o = t();
        o && (o.value = null);
      },
      resetObjectiveIfAchieved: function resetObjectiveIfAchieved() {
        var o = t();
        o && o.value && (o.value = null);
      },
      resetObjectiveIfFailed: function resetObjectiveIfFailed() {
        var o = t();
        o && !o.value && (o.value = null);
      },
      markObjectiveAchievedIfNotSet: function markObjectiveAchievedIfNotSet() {
        var o = t();
        o && o.value === null && (o.value = !0);
      },
      markObjectiveFailedIfNotSet: function markObjectiveFailedIfNotSet() {
        var o = t();
        o && o.value === null && (o.value = !1);
      }
    } : {
      ybcEvents: new Phaser.Events.EventEmitter(),
      on: j,
      once: j,
      off: j,
      emit: j,
      onMethodCall: j,
      markObjectiveAchieved: j,
      markObjectiveFailed: j,
      resetObjective: j,
      resetObjectiveIfAchieved: j,
      resetObjectiveIfFailed: j,
      markObjectiveAchievedIfNotSet: j,
      markObjectiveFailedIfNotSet: j
    };
  }
  function mu() {
    var e = P(window, ["::::STAGE_CONTEXT::::", "game", "AudioPlayer"], null);
    if (!e) throw new Error("AudioPlayer not found in window[__STAGE_CONTEXT_KEY__].game");
    return e;
  }
  function Ar(_x4) {
    return _Ar.apply(this, arguments);
  }
  function _Ar() {
    _Ar = _asyncToGenerator(_regeneratorRuntime().mark(function _callee23(e) {
      var n,
        _args23 = arguments;
      return _regeneratorRuntime().wrap(function _callee23$(_context23) {
        while (1) switch (_context23.prev = _context23.next) {
          case 0:
            n = _args23.length > 1 && _args23[1] !== undefined ? _args23[1] : !1;
            _context23.next = 3;
            return mu().createPlayer(e, n);
          case 3:
            return _context23.abrupt("return", _context23.sent);
          case 4:
          case "end":
            return _context23.stop();
        }
      }, _callee23);
    }));
    return _Ar.apply(this, arguments);
  }
  var gu = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  var Er = function Er() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 21;
    var n = "",
      t = crypto.getRandomValues(new Uint8Array(e));
    for (; e--;) n += gu[t[e] & 63];
    return n;
  };
  function he(e, n) {
    var t,
      o = n.valueOf();
    if (Sn(n) && (t = n.valueOf(), o = n.__get_auto_assets_url__().valueOf()), On(n) && (t = n.__get_auto_assets_key__().valueOf(), o = n.valueOf()), yr() || wr()) {
      var s = e.scene;
      o = Pr(o, s.load.baseURL);
      var u = Ve(null);
      Ar(o, !1).then(function (g) {
        return u.value = g;
      });
      var f = [],
        l = k(!0);
      I(u, function (g, r) {
        if (!T(g) && T(r)) {
          var _Or = Or(e, g),
            i = _Or.off;
          f.push(i), g.on("end", function () {
            return l.value = !1;
          });
        }
      }, {
        immediate: !0
      }), I([u, l], function (_ref16, _ref17) {
        var _ref18 = _slicedToArray(_ref16, 2),
          g = _ref18[0],
          r = _ref18[1];
        var _ref19 = _slicedToArray(_ref17, 2),
          i = _ref19[0],
          a = _ref19[1];
        var c;
        T(g) || (r === !0 && (a === !1 || T(i)) && g.play(), r === !1 && (a === !0 || T(i)) && ((c = g == null ? void 0 : g.stop) == null || c.call(g)));
      }, {
        immediate: !0
      });
      var d = function () {
          var _ref20 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  l.value = !1;
                case 1:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          return function d() {
            return _ref20.apply(this, arguments);
          };
        }(),
        p = mn(l).toBe(!1).then(function () {
          var g, r;
          return (r = (g = u.value) == null ? void 0 : g.destroy) == null ? void 0 : r.call(g);
        }).then(function () {
          f.forEach(function (g) {
            return g();
          });
        }).catch();
      return Object.assign(p, {
        audioPlayer: _e(u),
        isAudioPlaying: _e(l),
        stop: d,
        promise: p
      });
    }
    if (gr() || vr()) {
      var _s3 = e.scene,
        _u2 = !T(t) && t.length > 0 && _s3.cache.audio.exists(t),
        _f2 = _u2 ? t : Er(),
        _l = Ve(null);
      _u2 ? _l.value = _s3.sound.add(_f2) : new Promise(function (i) {
        var _a3 = function a(c) {
          c === _f2 && (_s3.load.off(Phaser.Loader.Events.FILE_COMPLETE, _a3), i());
        };
        _s3.load.on(Phaser.Loader.Events.FILE_COMPLETE, _a3), _s3.load.audio(_f2, o), _s3.load.start();
      }).then(function () {
        _l.value = _s3.sound.add(_f2);
      });
      var _d = [],
        _p = k(!0);
      I(_l, function (i, a) {
        if (!T(i) && T(a)) {
          var _Sr = Sr(e, i),
            c = _Sr.off;
          _d.push(c), i.once(Phaser.Sound.Events.COMPLETE, function () {
            return _p.value = !1;
          });
        }
      }, {
        immediate: !0
      }), I([_l, _p], function (_ref21, _ref22) {
        var _ref23 = _slicedToArray(_ref21, 2),
          i = _ref23[0],
          a = _ref23[1];
        var _ref24 = _slicedToArray(_ref22, 2),
          c = _ref24[0],
          _ = _ref24[1];
        T(i) || (a === !0 && (_ === !1 || T(c)) && i.play(), a === !1 && (_ === !0 || T(c)) && (xr(i) || i.destroy()));
      }, {
        immediate: !0
      });
      var g = function () {
          var _ref25 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee5() {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _p.value = !1;
                case 1:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          }));
          return function g() {
            return _ref25.apply(this, arguments);
          };
        }(),
        r = mn(_p).toBe(!1).then(function () {
          _d.forEach(function (i) {
            return i();
          }), _u2 || (_s3.sound.removeByKey(_f2), _s3.cache.audio.remove(_f2));
        }).catch();
      return Object.assign(r, {
        audioInstance: _e(_l),
        isAudioPlaying: _e(_p),
        stop: g,
        promise: r
      });
    }
    throw new Error("unreachable code in playAudioOnce");
  }
  function vu(e, n) {
    var t,
      o = n.valueOf();
    if (Sn(n) && (t = n.valueOf(), o = n.__get_auto_assets_url__().valueOf()), On(n) && (t = n.__get_auto_assets_key__().valueOf(), o = n.valueOf()), yr() || wr()) {
      var s = e.scene;
      o = Pr(o, s.load.baseURL);
      var u = Ve(null);
      Ar(o, !0).then(function (l) {
        return u.value = l;
      });
      var f = k(!1);
      return I(u, function (l, d) {
        !T(l) && T(d) && Or(e, l);
      }, {
        immediate: !0
      }), I([u, f], function (_ref26, _ref27) {
        var _ref28 = _slicedToArray(_ref26, 2),
          l = _ref28[0],
          d = _ref28[1];
        var _ref29 = _slicedToArray(_ref27, 2),
          p = _ref29[0],
          g = _ref29[1];
        T(l) || (d === !0 && (g === !1 || T(p)) && l.play(), d === !1 && (g === !0 || T(p)) && l.stop());
      }, {
        immediate: !0
      }), {
        bgmPlayer: _e(u),
        isBgmPlaying: f
      };
    }
    if (gr() || vr()) {
      var _s4 = e.scene,
        _u3 = !T(t) && t.length > 0 && _s4.cache.audio.exists(t),
        _f3 = _u3 ? t : Er(),
        l = Ve(null);
      _u3 ? l.value = _s4.sound.add(_f3, {
        loop: !0
      }) : new Promise(function (p) {
        var _g = function g(r) {
          r === _f3 && (_s4.load.off(Phaser.Loader.Events.FILE_COMPLETE, _g), p());
        };
        _s4.load.on(Phaser.Loader.Events.FILE_COMPLETE, _g), _s4.load.audio(_f3, o), _s4.load.start();
      }).then(function () {
        l.value = _s4.sound.add(_f3, {
          loop: !0
        });
      });
      var d = k(!1);
      return I(l, function (p, g) {
        !T(p) && T(g) && Sr(e, p);
      }, {
        immediate: !0
      }), I([l, d], function (_ref30, _ref31) {
        var _ref32 = _slicedToArray(_ref30, 2),
          p = _ref32[0],
          g = _ref32[1];
        var _ref33 = _slicedToArray(_ref31, 2),
          r = _ref33[0],
          i = _ref33[1];
        T(p) || (g === !0 && (i === !1 || T(r)) && p.play(), g === !1 && (i === !0 || T(r)) && p.stop());
      }, {
        immediate: !0
      }), {
        bgmInstance: _e(l),
        isBgmPlaying: d
      };
    }
    throw new Error("unreachable code in createLoopBgm");
  }
  function Sr(e, n) {
    var t = e.game,
      o = e.scene,
      s = e.onBeforeRestart,
      u = [];
    var f = !1;
    var _Wt = Wt(_asyncToGenerator(_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              !f && !n.isPaused && n.isPlaying && (f = !0, n.pause());
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))),
      l = _Wt.off;
    u.push(l);
    var _Vt = Vt(_asyncToGenerator(_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              f && (f = !1, n.play());
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))),
      d = _Vt.off;
    u.push(d);
    var p = function p(_, m) {
      return t.events.on(_, m), function () {
        t.events.off(_, m);
      };
    };
    var g = !1;
    var r = p(Phaser.Core.Events.PAUSE, _asyncToGenerator(_regeneratorRuntime().mark(function _callee8() {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            !g && !n.isPaused && n.isPlaying && (g = !0, n.pause());
          case 1:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    })));
    u.push(r);
    var i = p(Phaser.Core.Events.RESUME, _asyncToGenerator(_regeneratorRuntime().mark(function _callee9() {
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            g && (g = !1, n.play());
          case 1:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    })));
    u.push(i);
    var a = function a() {
        u.forEach(function (_) {
          return _();
        });
      },
      c = Wn(function () {
        a(), xr(n) || n.destroy();
      });
    return s(c), o.events.once(Phaser.Scenes.Events.DESTROY, c), t.events.once(Phaser.Core.Events.DESTROY, c), {
      off: a
    };
  }
  function Or(e, n) {
    var t = e.game,
      o = e.scene,
      s = e.onBeforeRestart,
      u = [];
    var f = !1;
    var _Wt2 = Wt(_asyncToGenerator(_regeneratorRuntime().mark(function _callee10() {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.t0 = !f;
              if (!_context10.t0) {
                _context10.next = 5;
                break;
              }
              _context10.next = 4;
              return n.isPaused();
            case 4:
              _context10.t0 = !_context10.sent;
            case 5:
              _context10.t1 = _context10.t0;
              if (!_context10.t1) {
                _context10.next = 10;
                break;
              }
              f = !0;
              _context10.next = 10;
              return n.pause();
            case 10:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }))),
      l = _Wt2.off;
    u.push(l);
    var _Vt2 = Vt(_asyncToGenerator(_regeneratorRuntime().mark(function _callee11() {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.t0 = f;
              if (!_context11.t0) {
                _context11.next = 5;
                break;
              }
              f = !1;
              _context11.next = 5;
              return n.play();
            case 5:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }))),
      d = _Vt2.off;
    u.push(d);
    var p = !1;
    var g = function g(m, h) {
        return t.events.on(m, h), function () {
          t.events.off(m, h);
        };
      },
      r = g(Phaser.Core.Events.PAUSE, _asyncToGenerator(_regeneratorRuntime().mark(function _callee12() {
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.t0 = !p;
              if (!_context12.t0) {
                _context12.next = 5;
                break;
              }
              _context12.next = 4;
              return n.isPaused();
            case 4:
              _context12.t0 = !_context12.sent;
            case 5:
              _context12.t1 = _context12.t0;
              if (!_context12.t1) {
                _context12.next = 10;
                break;
              }
              p = !0;
              _context12.next = 10;
              return n.pause();
            case 10:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      })));
    u.push(r);
    var i = g(Phaser.Core.Events.RESUME, _asyncToGenerator(_regeneratorRuntime().mark(function _callee13() {
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.t0 = p;
            if (!_context13.t0) {
              _context13.next = 5;
              break;
            }
            p = !1;
            _context13.next = 5;
            return n.play();
          case 5:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    })));
    u.push(i);
    var a = function a() {
        u.forEach(function (m) {
          return m();
        });
      },
      c = Wn(_asyncToGenerator(_regeneratorRuntime().mark(function _callee14() {
        var m;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              a();
              _context14.next = 3;
              return (m = n == null ? void 0 : n.destroy) == null ? void 0 : m.call(n);
            case 3:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      })));
    return s(c), o.events.once(Phaser.Scenes.Events.DESTROY, c), t.events.once(Phaser.Core.Events.DESTROY, c), Tr(s).on("code-stop", function (_ref43) {
      var m = _ref43.exitCode;
      m !== 0 && c().then();
    }), {
      off: a
    };
  }
  function Pr(e, n) {
    return eu(e, {
      strict: !0
    }) ? e : ru(n, e);
  }
  function xr(e) {
    var n = P(e, "manager", null);
    return T(n);
  }
  var ie = 323,
    wn = je({
      preload: function preload(e) {
        Ae.loadAll(e.scene);
      },
      create: function create(e, n, t) {
        var o = e.scene,
          s = n.fruit,
          u = n.pos,
          f = n.isDisabled,
          l = o.add.image(u.x, u.y, Ae("images/\u6B63\u9762/".concat(s, ".png")));
        l.setScale(ie / l.height);
        var d = k(!1),
          p = Et(e, {
            x: u.x,
            y: u.y,
            textureKey: Ae("images/背面.png"),
            textureKeyHover: Ae("images/背面-悬浮.png"),
            disabled: B(function () {
              return f.value || d.value;
            }),
            onClick: i
          }),
          g = p.sprite;
        g.setScale(ie / p.sprite.height), l.setVisible(!1), g.setVisible(!0);
        var r = k(!0);
        function i() {
          return _i3.apply(this, arguments);
        }
        function _i3() {
          _i3 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee16() {
            return _regeneratorRuntime().wrap(function _callee16$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
                case 0:
                  d.value = !0;
                  r.value ? r.value = !1 : he(e, Ae("audio/翻1张牌.mp3"));
                  _context16.next = 4;
                  return new Promise(function (c) {
                    o.tweens.add({
                      targets: g,
                      scaleX: {
                        from: ie / g.height,
                        to: 0
                      },
                      duration: 250,
                      ease: Phaser.Math.Easing.Back.In,
                      onComplete: c
                    });
                  });
                case 4:
                  l.setVisible(!0);
                  g.setVisible(!1);
                  _context16.next = 8;
                  return new Promise(function (c) {
                    o.tweens.add({
                      targets: l,
                      scaleX: {
                        from: 0,
                        to: ie / l.height
                      },
                      duration: 250,
                      ease: Phaser.Math.Easing.Back.Out,
                      onComplete: c
                    });
                  });
                case 8:
                case "end":
                  return _context16.stop();
              }
            }, _callee16);
          }));
          return _i3.apply(this, arguments);
        }
        function a() {
          return _a4.apply(this, arguments);
        }
        function _a4() {
          _a4 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee17() {
            return _regeneratorRuntime().wrap(function _callee17$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
                case 0:
                  _context17.next = 2;
                  return ct(o.tweens.add({
                    targets: l,
                    scaleX: {
                      from: ie / l.height,
                      to: 0
                    },
                    duration: 250,
                    ease: Phaser.Math.Easing.Back.In
                  }));
                case 2:
                  l.setVisible(!1);
                  g.setVisible(!0);
                  _context17.next = 6;
                  return ct(o.tweens.add({
                    targets: g,
                    scaleX: {
                      from: 0,
                      to: ie / g.height
                    },
                    duration: 250,
                    ease: Phaser.Math.Easing.Back.Out
                  }));
                case 6:
                  d.value = !1;
                case 7:
                case "end":
                  return _context17.stop();
              }
            }, _callee17);
          }));
          return _a4.apply(this, arguments);
        }
        return t.onBeforeDestroy(_asyncToGenerator(_regeneratorRuntime().mark(function _callee15() {
          return _regeneratorRuntime().wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return ct(o.tweens.add({
                  targets: l,
                  scale: {
                    from: ie / l.height,
                    to: 0
                  },
                  duration: 125,
                  ease: Phaser.Math.Easing.Back.In
                }));
              case 2:
                l.destroy();
                g.destroy();
              case 4:
              case "end":
                return _context15.stop();
            }
          }, _callee15);
        }))), {
          name: s,
          isOpen: B(function () {
            return d.value;
          }),
          open: i,
          close: a
        };
      }
    }),
    bn = ["苹果", "橙子", "香蕉", "葡萄", "西瓜", "梨"],
    yu = "assets/mp3/02de4e5a.nlj5lstpsl2o.mp3",
    wu = "assets/mp3/29cab13a.few0kj3z7qr6.mp3",
    bu = "assets/mp3/0aa4e7a5.hg01ee619dee.mp3",
    dt = Je("/src/questions/rec--r0-z02--fruit-to-be-paired/components/fruitList/assets", {
      "audio/翻12张牌.mp3": yu,
      "audio/配对失败.mp3": wu,
      "audio/配对成功.mp3": bu
    }),
    Tn = je({
      components: [wn],
      create: function create(e, n) {
        var t = [].concat(bn, bn),
          o = k([]),
          s = B(function () {
            return o.value.filter(function (l) {
              return l.isOpen;
            }).length >= 2;
          });
        for (var l = 0; l < 12; l++) {
          var d = Math.floor(Math.random() * (t.length - l)) + l,
            p = t[d];
          t[d] = t[l];
          var g = wn(e, {
            fruit: p,
            pos: {
              x: 414 + l % 4 * 363,
              y: 220 + Math.floor(l / 4) * 336
            },
            isDisabled: s
          });
          o.value.push(g);
        }
        o.value.forEach(function (l) {
          l.open();
        }), he(e, dt("audio/翻12张牌.mp3"));
        var u = k(!0),
          f = k(Math.floor(Date.now() / 1e3));
        I(s, function (l) {
          if (l) {
            var _d2 = o.value.filter(function (p) {
              return p.isOpen;
            });
            if (_d2.length === 0) return;
            if (_d2.length === 2 && _d2[0].name === _d2[1].name) {
              e.sleep(1e3).then(_asyncToGenerator(_regeneratorRuntime().mark(function _callee18() {
                return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                  while (1) switch (_context18.prev = _context18.next) {
                    case 0:
                      he(e, dt("audio/配对成功.mp3"));
                      _context18.next = 3;
                      return Promise.all([_d2[0].destroy(), _d2[1].destroy()]);
                    case 3:
                      o.value = o.value.filter(function (p) {
                        return p.name !== _d2[0].name;
                      });
                      o.value.length === 0 && e.sleep(300).then(function () {
                        n.onSuccess(Math.floor(Date.now() / 1e3) - f.value);
                      });
                    case 5:
                    case "end":
                      return _context18.stop();
                  }
                }, _callee18);
              })));
              return;
            }
            e.sleep(1e3 + (u.value ? 1500 : 0)).then(function () {
              u.value ? (f.value = Math.floor(Date.now() / 1e3), u.value = !1) : he(e, dt("audio/配对失败.mp3")), o.value.forEach(function (p) {
                p.isOpen && p.close();
              });
            });
          }
        }, {
          immediate: !0
        });
      }
    }),
    Tu = "assets/mp3/06fdb819.khqxjssindg9.mp3",
    Au = "assets/png/9ee5528c.c5nggvmt8ymu.png",
    Eu = "assets/png/8d84f8fe.mp8zexf6uf98.png",
    Su = "assets/png/0564d4ec.bk4cqhs30ivk.png",
    Ou = "assets/png/4a47a0db.jswjpkbhrtvk.png",
    Pu = "assets/png/fb5c81ed.jw7qdmq2sjt7.png",
    xu = "assets/png/10fb15c7.pbrh0bjb1ufr.png",
    Iu = "assets/png/09dd8c26.h80thvw1rytf.png",
    Cu = "assets/png/8266e4bf.gh6umqt0y47f.png",
    Ru = "assets/png/f19c9085.lhd48xf6eeyx.png",
    Lu = "assets/png/9eb9cd58.keppwbrw9ebw.png",
    Mu = "assets/png/602e8f04.oun7oms4y155.png",
    Nu = "assets/png/7afbb160.mha9h9mg60f8.png",
    Du = "assets/png/ce11bb12.e9sacinhrtc5.png",
    Fu = "assets/png/09a16581.hk3rqblnsh6b.png",
    $u = "assets/png/94504a1f.kt1rh8u0ibgi.png",
    ju = "assets/png/4fd82f24.dgs78cvrxnzf.png",
    x = Je("/src/questions/rec--r0-z02--fruit-to-be-paired/components/gameResult/assets", {
      "audio/点击.mp3": Tu,
      "images/关闭-按下.png": Au,
      "images/关闭-正常.png": Eu,
      "images/数字/0.png": Su,
      "images/数字/1.png": Ou,
      "images/数字/2.png": Pu,
      "images/数字/3.png": xu,
      "images/数字/4.png": Iu,
      "images/数字/5.png": Cu,
      "images/数字/6.png": Ru,
      "images/数字/7.png": Lu,
      "images/数字/8.png": Mu,
      "images/数字/9.png": Nu,
      "images/结算-背景.png": Du,
      "images/结算-蒙版.png": Fu,
      "images/重新开始-按下.png": $u,
      "images/重新开始-正常.png": ju
    }),
    Bu = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    Hu = je({
      create: function create(e, n) {
        var t = e.scene,
          o = n.numberTextures,
          s = n.showNumber,
          u = n.numberCapacity,
          f = n.pos,
          l = t.add.container(f.x, f.y),
          d = [],
          p = t.add.image(0, 0, o[0]).setOrigin(.5);
        d.push(p), l.add(p);
        var g = function g() {
          var i = -d.reduce(function (a, c) {
            return a + c.width;
          }, 0) / 2;
          d.forEach(function (a, c) {
            var _ = d.slice(0, c).reduce(function (m, h) {
              return m + h.width;
            }, 0);
            a.setPosition(i + _ + a.width / 2, 0);
          });
        };
        return I(function () {
          return M(s);
        }, function (r) {
          var i = r;
          var a = [];
          if (i === 0) a.push(0);else for (; i > 0;) a.unshift(Bu[i % 10]), i = Math.floor(i / 10);
          var c = a.length - d.length;
          if (c > 0) {
            for (var _ = 0; _ < d.length; _++) d[_].setTexture(o[a[_]]);
            for (var _2 = d.length; _2 < a.length; _2++) {
              var m = t.add.image(0, 0, o[a[_2]]);
              d.push(m), l.add(m);
            }
          } else {
            for (var _3 = 0; _3 < a.length; _3++) d[_3].setTexture(o[a[_3]]);
            for (var _4 = 0; _4 < Math.abs(c); _4++) {
              var _m = d.pop();
              _m && (l.remove(_m), _m.destroy());
            }
          }
          g(), d.length > u ? l.setScale(u / a.length) : l.setScale(1);
        }, {
          immediate: !0,
          deep: !0
        }), {
          container: l
        };
      }
    }),
    An = je({
      preload: function preload(e) {
        x.loadAll(e.scene);
      },
      create: function create(e, n) {
        var t = e.scene,
          o = e.center,
          s = e.log,
          u = t.add.container(0, 0).setDepth(1e3),
          f = t.add.image(0, 0, x("images/结算-蒙版.png")).setOrigin(0);
        u.add(f);
        var l = t.add.image(o.x, o.y, x("images/结算-背景.png"));
        u.add(l), Et(e, {
          container: u,
          x: o.x + 200,
          y: o.y + 150,
          textureKey: x("images/关闭-正常.png"),
          textureKeyActive: x("images/关闭-按下.png"),
          onClick: function onClick() {
            he(e, x("audio/点击.mp3")), e.sleep(300).then(function () {
              s("【rec--r0-z02--fruit-to-be-paired】close page call before"), window.parent.postMessage({
                type: "close"
              }, "*"), s("【rec--r0-z02--fruit-to-be-paired】close page call after");
            });
          }
        }), Et(e, {
          container: u,
          x: o.x - 200,
          y: o.y + 150,
          textureKey: x("images/重新开始-正常.png"),
          textureKeyActive: x("images/重新开始-按下.png"),
          onClick: function onClick() {
            he(e, x("audio/点击.mp3")), e.sleep(300).then(function () {
              e.restart();
            });
          }
        });
        var d = Hu(e, {
          pos: {
            x: o.x + 45,
            y: o.y - 35
          },
          numberTextures: {
            0: x("images/数字/0.png"),
            1: x("images/数字/1.png"),
            2: x("images/数字/2.png"),
            3: x("images/数字/3.png"),
            4: x("images/数字/4.png"),
            5: x("images/数字/5.png"),
            6: x("images/数字/6.png"),
            7: x("images/数字/7.png"),
            8: x("images/数字/8.png"),
            9: x("images/数字/9.png")
          },
          showNumber: n.score,
          numberCapacity: 3
        });
        return u.add(d.container), t.tweens.add({
          targets: [f, l],
          alpha: {
            from: 0,
            to: 1
          },
          duration: 300,
          ease: Phaser.Math.Easing.Linear
        }), {
          container: u
        };
      }
    }),
    En = "__PHASER_GAME_REGISTRY_KEY_RESTART_TIMES__";
  function ku(e, n) {
    return function (t, o, _ref46) {
      var s = _ref46.logger;
      du(t.events);
      var _Xu = Xu(),
        u = _Xu.width,
        f = _Xu.height,
        l = _Xu.center,
        d = qu(),
        p = function p(a) {
          a.startsWith("[") || (a = " ".concat(a)), s == null || s("\uD83E\uDD37[case-info][".concat(d, "]").concat(a));
        };
      p("[framework] version: 2025-06-23"), yn(function () {
        p("[framework][events] 接收到题目开始事件");
      });
      var g = Gu(t),
        r = k("init");
      var i = function (_Phaser$Scene) {
        function i() {
          _classCallCheck(this, i);
          return _callSuper(this, i, arguments);
        }
        _inherits(i, _Phaser$Scene);
        return _createClass(i, [{
          key: "init",
          value: function init() {
            var _;
            var c = Object.freeze({
              questionName: d,
              game: this.game,
              scene: this,
              log: p,
              restartTimes: g.value,
              width: u,
              height: f,
              center: l
            });
            this.sound.pauseOnBlur = !1, p("[main-scene][init] 开始"), (_ = e.init) == null || _.call(e, c), p("[main-scene][init] 结束");
          }
        }, {
          key: "preload",
          value: function preload() {
            var h, v;
            var c = Object.freeze({
              questionName: d,
              game: this.game,
              scene: this,
              log: p,
              restartTimes: g.value,
              width: u,
              height: f,
              center: l
            });
            this.load.setBaseURL(o), r.value = "preload", p("[main-scene][preload] 开始"), Uu(c, r);
            var _ = new Set(),
              _m2 = function m(w) {
                var y;
                _.add(w), (y = w.components) == null || y.filter(function (A) {
                  return !_.has(A);
                }).forEach(_m2);
              };
            (h = e.components) == null || h.forEach(_m2), _.forEach(function (w) {
              return w.preload(c);
            }), (v = e.preload) == null || v.call(e, c), p("[main-scene][preload] 结束");
          }
        }, {
          key: "create",
          value: function create() {
            var _this6 = this;
            var c = this,
              _ = c.game,
              m = Qn(!0),
              h = function h($) {
                return new Promise(function (oe) {
                  _this6.time.delayedCall($, oe);
                });
              },
              _Tt2 = Tt(),
              v = _Tt2.on,
              w = _Tt2.trigger,
              _Tt3 = Tt(),
              y = _Tt3.on,
              A = _Tt3.trigger,
              C = function () {
                var _ref47 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee19() {
                  return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                    while (1) switch (_context19.prev = _context19.next) {
                      case 0:
                        _context19.next = 2;
                        return A();
                      case 2:
                        m.stop();
                        g.value += 1;
                        c.scene.restart();
                      case 5:
                      case "end":
                        return _context19.stop();
                    }
                  }, _callee19);
                }));
                return function C() {
                  return _ref47.apply(this, arguments);
                };
              }(),
              Te = Object.freeze({
                questionName: d,
                game: _,
                scene: c,
                log: p,
                sleep: h,
                width: u,
                height: f,
                center: l,
                onBeforeInitComplete: v,
                onUpdate: function onUpdate($) {
                  var oe = function oe(He, J) {
                    $({
                      time: He,
                      delta: J
                    });
                  };
                  c.events.on(Phaser.Scenes.Events.UPDATE, oe);
                  var Be = function Be() {
                    c.events.off(Phaser.Scenes.Events.UPDATE, oe);
                  };
                  return y(Be), {
                    off: Be
                  };
                },
                onBeforeRestart: y,
                restart: C,
                restartTimes: g.value
              });
            r.value = "create", p("[main-scene][create] 开始"), m.run(function () {
              var $;
              ($ = e.create) == null || $.call(e, Te);
            });
            var b = Tr(y);
            b.on("code-run", _asyncToGenerator(_regeneratorRuntime().mark(function _callee20() {
              return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                while (1) switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return C();
                  case 2:
                  case "end":
                    return _context20.stop();
                }
              }, _callee20);
            }))), b.on("code-stop", function () {
              var _ref50 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee21(_ref49) {
                var $;
                return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                  while (1) switch (_context21.prev = _context21.next) {
                    case 0:
                      $ = _ref49.exitCode;
                      ($ === 1 || $ === 130) && (c.scene.pause(), c.sound.pauseAll());
                    case 2:
                    case "end":
                      return _context21.stop();
                  }
                }, _callee21);
              }));
              return function (_x5) {
                return _ref50.apply(this, arguments);
              };
            }()), w().then(function () {
              b.emit("init-complete"), _.events.emit("caseInitComplete"), p("[framework][events] 发送初始化完成事件");
            }), p("[main-scene][create] 结束");
          }
        }, {
          key: "update",
          value: function update(c, _) {
            var m;
            (m = e.update) == null || m.call(e, Object.freeze({
              questionName: d,
              game: this.game,
              scene: this,
              log: p,
              time: c,
              delta: _,
              restartTimes: g.value,
              width: u,
              height: f,
              center: l
            }));
          }
        }]);
      }(Phaser.Scene);
      yn(function () {
        t.input.enabled = !0;
      }), hu(function () {
        t.input.enabled = !1;
      }), Wt(function () {
        p("[framework][events] 接收到题目暂停事件"), t.input.enabled = !1, t.scene.getScenes(!1).forEach(function (a) {
          a.scene.pause(), a.sound.pauseAll();
        });
      }), Vt(function () {
        p("[framework][events] 接收到题目恢复事件"), t.input.enabled = !0, t.scene.getScenes(!1).forEach(function (a) {
          a.scene.resume(), a.sound.resumeAll();
        });
      }), t.input.enabled = !1, t.scene.add("main", i, !0), p("[framework][events] 已注册 main 场景");
    };
  }
  function Gu(e) {
    return new Proxy({
      value: 0
    }, {
      get: function get(n, t) {
        if (t === "value") try {
          var o = e.registry.get(En);
          return typeof o == "number" && !Number.isNaN(o) ? o : 0;
        } catch (_unused13) {
          return 0;
        }
      },
      set: function set(n, t, o) {
        return t !== "value" ? !1 : (e.registry.set(En, o), !0);
      }
    });
  }
  function Xu() {
    var _ref51, _ref52, _P, _ref53, _ref54, _P2;
    var e = (_ref51 = (_ref52 = (_P = P(window, ["::::LIVE_CONTEXT::::", "width"])) !== null && _P !== void 0 ? _P : P(window, ["::::REC_CONTEXT::::", "width"])) !== null && _ref52 !== void 0 ? _ref52 : P(window, ["::::STAGE_CONTEXT::::", "width"])) !== null && _ref51 !== void 0 ? _ref51 : 0,
      n = (_ref53 = (_ref54 = (_P2 = P(window, ["::::LIVE_CONTEXT::::", "height"])) !== null && _P2 !== void 0 ? _P2 : P(window, ["::::REC_CONTEXT::::", "height"])) !== null && _ref54 !== void 0 ? _ref54 : P(window, ["::::STAGE_CONTEXT::::", "height"])) !== null && _ref53 !== void 0 ? _ref53 : 0,
      t = {
        x: e / 2,
        y: n / 2
      };
    return {
      width: e,
      height: n,
      center: t
    };
  }
  function qu() {
    var _ref55, _ref56, _P3;
    return (_ref55 = (_ref56 = (_P3 = P(window, ["::::LIVE_CONTEXT::::", "questionName"])) !== null && _P3 !== void 0 ? _P3 : P(window, ["::::REC_CONTEXT::::", "questionName"])) !== null && _ref56 !== void 0 ? _ref56 : P(window, ["::::STAGE_CONTEXT::::", "questionName"])) !== null && _ref55 !== void 0 ? _ref55 : "";
  }
  function Uu(e, n) {
    var t = e.scene,
      o = e.log,
      s = t.load;
    s.on(Phaser.Loader.Events.COMPLETE, function (u, f, l) {
      o("[main-scene][".concat(n.value, "] \u6240\u6709\u8D44\u6E90\u52A0\u8F7D\u5B8C\u6210\uFF0C\u603B\u5171\u52A0\u8F7D ").concat(u.totalToLoad, " \u4E2A\u8D44\u6E90\uFF0C\u6210\u529F ").concat(f, " \u4E2A\uFF0C\u5931\u8D25 ").concat(l, " \u4E2A"));
    }), s.on(Phaser.Loader.Events.FILE_LOAD_ERROR, function (u) {
      var l, d, p, g, r, i, a;
      var f = {
        key: "".concat(u.key),
        src: "".concat(u.src),
        url: "".concat(u.url),
        "config.loadEvent": "".concat((l = u.config) == null ? void 0 : l.loadEvent),
        "config.asBlob": "".concat((d = u.config) == null ? void 0 : d.asBlob),
        "config.noAudio": "".concat((p = u.config) == null ? void 0 : p.noAudio),
        type: "".concat(u.type),
        state: "".concat(u.state),
        "xhrLoader.responseType": "".concat((g = u.xhrLoader) == null ? void 0 : g.responseType),
        "xhrLoader.responseURL": "".concat((r = u.xhrLoader) == null ? void 0 : r.responseURL),
        "xhrLoader.status": "".concat((i = u.xhrLoader) == null ? void 0 : i.status),
        "xhrLoader.statusText": "".concat((a = u.xhrLoader) == null ? void 0 : a.statusText)
      };
      o("[main-scene][".concat(n.value, "] \u8D44\u6E90\u52A0\u8F7D\u5931\u8D25 [").concat(u.type, " | ").concat(u.key, "]\uFF0C\u9519\u8BEF\u4FE1\u606F\uFF1A").concat(JSON.stringify(f)));
    });
  }
  var Wu = ku({
    components: [Tn, An],
    preload: function preload(e) {
      ot.loadAll(e.scene);
    },
    create: function create(e) {
      var n = e.scene,
        t = e.center;
      n.add.image(t.x, t.y, ot("images/背景.png"));
      var o = vu(e, ot("audio/bgm.mp3"));
      o.isBgmPlaying.value = !0, Tn(e, {
        onSuccess: function onSuccess(s) {
          o.isBgmPlaying.value = !1, An(e, {
            score: s
          });
        }
      });
    }
  });
  window.addScene = function (e, n, t, o) {
    window["::::REC_CONTEXT::::"].game = e, window["::::REC_CONTEXT::::"].questionName = "rec--r0-z02--fruit-to-be-paired", window["::::REC_CONTEXT::::"].width = 1920, window["::::REC_CONTEXT::::"].height = 1080, window["::::REC_CONTEXT::::"].isQuestionStarted = !1, window["::::REC_CONTEXT::::"].getRequest = t, window["::::REC_CONTEXT::::"].postRequest = o;
    var s = console.log;
    window.$minilog && window.$minilog.info && (s = window.$minilog.info), e.events.once("questionStart", function () {
      window["::::REC_CONTEXT::::"].isQuestionStarted = !0;
    }), e.events.once("question-start", function () {
      window["::::REC_CONTEXT::::"].isQuestionStarted = !0;
    }), Wu(e, n, {
      logger: s
    }), e.events.once("questionStart", function () {
      e.scale.setZoom(1);
    }), e.events.once("questionComplete", function () {
      var u;
      (u = window == null ? void 0 : window.videoPlay) == null || u.call(window);
    });
  };
});
export default Vu();