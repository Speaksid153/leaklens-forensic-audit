function cS(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Kr = { exports: {} }, yl = {};
var Sp;
function fS() {
  if (Sp) return yl;
  Sp = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.fragment");
  function u(o, c, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      d = {};
      for (var p in c)
        p !== "key" && (d[p] = c[p]);
    } else d = c;
    return c = d.ref, {
      $$typeof: i,
      type: o,
      key: h,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return yl.Fragment = l, yl.jsx = u, yl.jsxs = u, yl;
}
var Tp;
function hS() {
  return Tp || (Tp = 1, Kr.exports = fS()), Kr.exports;
}
var nt = hS(), Qr = { exports: {} }, rt = {};
var bp;
function dS() {
  if (bp) return rt;
  bp = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), m = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), S = /* @__PURE__ */ Symbol.for("react.activity"), b = Symbol.iterator;
  function V(A) {
    return A === null || typeof A != "object" ? null : (A = b && A[b] || A["@@iterator"], typeof A == "function" ? A : null);
  }
  var C = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, U = Object.assign, j = {};
  function w(A, N, Q) {
    this.props = A, this.context = N, this.refs = j, this.updater = Q || C;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(A, N) {
    if (typeof A != "object" && typeof A != "function" && A != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, A, N, "setState");
  }, w.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function q() {
  }
  q.prototype = w.prototype;
  function H(A, N, Q) {
    this.props = A, this.context = N, this.refs = j, this.updater = Q || C;
  }
  var Y = H.prototype = new q();
  Y.constructor = H, U(Y, w.prototype), Y.isPureReactComponent = !0;
  var tt = Array.isArray;
  function et() {
  }
  var X = { H: null, A: null, T: null, S: null }, J = Object.prototype.hasOwnProperty;
  function k(A, N, Q) {
    var F = Q.ref;
    return {
      $$typeof: i,
      type: A,
      key: N,
      ref: F !== void 0 ? F : null,
      props: Q
    };
  }
  function $(A, N) {
    return k(A.type, N, A.props);
  }
  function st(A) {
    return typeof A == "object" && A !== null && A.$$typeof === i;
  }
  function pt(A) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + A.replace(/[=:]/g, function(Q) {
      return N[Q];
    });
  }
  var Lt = /\/+/g;
  function Ut(A, N) {
    return typeof A == "object" && A !== null && A.key != null ? pt("" + A.key) : N.toString(36);
  }
  function Bt(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (typeof A.status == "string" ? A.then(et, et) : (A.status = "pending", A.then(
          function(N) {
            A.status === "pending" && (A.status = "fulfilled", A.value = N);
          },
          function(N) {
            A.status === "pending" && (A.status = "rejected", A.reason = N);
          }
        )), A.status) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function O(A, N, Q, F, lt) {
    var ot = typeof A;
    (ot === "undefined" || ot === "boolean") && (A = null);
    var vt = !1;
    if (A === null) vt = !0;
    else
      switch (ot) {
        case "bigint":
        case "string":
        case "number":
          vt = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case i:
            case l:
              vt = !0;
              break;
            case v:
              return vt = A._init, O(
                vt(A._payload),
                N,
                Q,
                F,
                lt
              );
          }
      }
    if (vt)
      return lt = lt(A), vt = F === "" ? "." + Ut(A, 0) : F, tt(lt) ? (Q = "", vt != null && (Q = vt.replace(Lt, "$&/") + "/"), O(lt, N, Q, "", function(An) {
        return An;
      })) : lt != null && (st(lt) && (lt = $(
        lt,
        Q + (lt.key == null || A && A.key === lt.key ? "" : ("" + lt.key).replace(
          Lt,
          "$&/"
        ) + "/") + vt
      )), N.push(lt)), 1;
    vt = 0;
    var qt = F === "" ? "." : F + ":";
    if (tt(A))
      for (var Nt = 0; Nt < A.length; Nt++)
        F = A[Nt], ot = qt + Ut(F, Nt), vt += O(
          F,
          N,
          Q,
          ot,
          lt
        );
    else if (Nt = V(A), typeof Nt == "function")
      for (A = Nt.call(A), Nt = 0; !(F = A.next()).done; )
        F = F.value, ot = qt + Ut(F, Nt++), vt += O(
          F,
          N,
          Q,
          ot,
          lt
        );
    else if (ot === "object") {
      if (typeof A.then == "function")
        return O(
          Bt(A),
          N,
          Q,
          F,
          lt
        );
      throw N = String(A), Error(
        "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return vt;
  }
  function G(A, N, Q) {
    if (A == null) return A;
    var F = [], lt = 0;
    return O(A, F, "", "", function(ot) {
      return N.call(Q, ot, lt++);
    }), F;
  }
  function K(A) {
    if (A._status === -1) {
      var N = A._result;
      N = N(), N.then(
        function(Q) {
          (A._status === 0 || A._status === -1) && (A._status = 1, A._result = Q);
        },
        function(Q) {
          (A._status === 0 || A._status === -1) && (A._status = 2, A._result = Q);
        }
      ), A._status === -1 && (A._status = 0, A._result = N);
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var ut = typeof reportError == "function" ? reportError : function(A) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var N = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
        error: A
      });
      if (!window.dispatchEvent(N)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", A);
      return;
    }
    console.error(A);
  }, ht = {
    map: G,
    forEach: function(A, N, Q) {
      G(
        A,
        function() {
          N.apply(this, arguments);
        },
        Q
      );
    },
    count: function(A) {
      var N = 0;
      return G(A, function() {
        N++;
      }), N;
    },
    toArray: function(A) {
      return G(A, function(N) {
        return N;
      }) || [];
    },
    only: function(A) {
      if (!st(A))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return A;
    }
  };
  return rt.Activity = S, rt.Children = ht, rt.Component = w, rt.Fragment = u, rt.Profiler = c, rt.PureComponent = H, rt.StrictMode = o, rt.Suspense = g, rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X, rt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(A) {
      return X.H.useMemoCache(A);
    }
  }, rt.cache = function(A) {
    return function() {
      return A.apply(null, arguments);
    };
  }, rt.cacheSignal = function() {
    return null;
  }, rt.cloneElement = function(A, N, Q) {
    if (A == null)
      throw Error(
        "The argument must be a React element, but you passed " + A + "."
      );
    var F = U({}, A.props), lt = A.key;
    if (N != null)
      for (ot in N.key !== void 0 && (lt = "" + N.key), N)
        !J.call(N, ot) || ot === "key" || ot === "__self" || ot === "__source" || ot === "ref" && N.ref === void 0 || (F[ot] = N[ot]);
    var ot = arguments.length - 2;
    if (ot === 1) F.children = Q;
    else if (1 < ot) {
      for (var vt = Array(ot), qt = 0; qt < ot; qt++)
        vt[qt] = arguments[qt + 2];
      F.children = vt;
    }
    return k(A.type, lt, F);
  }, rt.createContext = function(A) {
    return A = {
      $$typeof: h,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, A.Provider = A, A.Consumer = {
      $$typeof: d,
      _context: A
    }, A;
  }, rt.createElement = function(A, N, Q) {
    var F, lt = {}, ot = null;
    if (N != null)
      for (F in N.key !== void 0 && (ot = "" + N.key), N)
        J.call(N, F) && F !== "key" && F !== "__self" && F !== "__source" && (lt[F] = N[F]);
    var vt = arguments.length - 2;
    if (vt === 1) lt.children = Q;
    else if (1 < vt) {
      for (var qt = Array(vt), Nt = 0; Nt < vt; Nt++)
        qt[Nt] = arguments[Nt + 2];
      lt.children = qt;
    }
    if (A && A.defaultProps)
      for (F in vt = A.defaultProps, vt)
        lt[F] === void 0 && (lt[F] = vt[F]);
    return k(A, ot, lt);
  }, rt.createRef = function() {
    return { current: null };
  }, rt.forwardRef = function(A) {
    return { $$typeof: p, render: A };
  }, rt.isValidElement = st, rt.lazy = function(A) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: A },
      _init: K
    };
  }, rt.memo = function(A, N) {
    return {
      $$typeof: m,
      type: A,
      compare: N === void 0 ? null : N
    };
  }, rt.startTransition = function(A) {
    var N = X.T, Q = {};
    X.T = Q;
    try {
      var F = A(), lt = X.S;
      lt !== null && lt(Q, F), typeof F == "object" && F !== null && typeof F.then == "function" && F.then(et, ut);
    } catch (ot) {
      ut(ot);
    } finally {
      N !== null && Q.types !== null && (N.types = Q.types), X.T = N;
    }
  }, rt.unstable_useCacheRefresh = function() {
    return X.H.useCacheRefresh();
  }, rt.use = function(A) {
    return X.H.use(A);
  }, rt.useActionState = function(A, N, Q) {
    return X.H.useActionState(A, N, Q);
  }, rt.useCallback = function(A, N) {
    return X.H.useCallback(A, N);
  }, rt.useContext = function(A) {
    return X.H.useContext(A);
  }, rt.useDebugValue = function() {
  }, rt.useDeferredValue = function(A, N) {
    return X.H.useDeferredValue(A, N);
  }, rt.useEffect = function(A, N) {
    return X.H.useEffect(A, N);
  }, rt.useEffectEvent = function(A) {
    return X.H.useEffectEvent(A);
  }, rt.useId = function() {
    return X.H.useId();
  }, rt.useImperativeHandle = function(A, N, Q) {
    return X.H.useImperativeHandle(A, N, Q);
  }, rt.useInsertionEffect = function(A, N) {
    return X.H.useInsertionEffect(A, N);
  }, rt.useLayoutEffect = function(A, N) {
    return X.H.useLayoutEffect(A, N);
  }, rt.useMemo = function(A, N) {
    return X.H.useMemo(A, N);
  }, rt.useOptimistic = function(A, N) {
    return X.H.useOptimistic(A, N);
  }, rt.useReducer = function(A, N, Q) {
    return X.H.useReducer(A, N, Q);
  }, rt.useRef = function(A) {
    return X.H.useRef(A);
  }, rt.useState = function(A) {
    return X.H.useState(A);
  }, rt.useSyncExternalStore = function(A, N, Q) {
    return X.H.useSyncExternalStore(
      A,
      N,
      Q
    );
  }, rt.useTransition = function() {
    return X.H.useTransition();
  }, rt.version = "19.2.8", rt;
}
var Ap;
function Lc() {
  return Ap || (Ap = 1, Qr.exports = dS()), Qr.exports;
}
var Z = Lc();
const Ep = /* @__PURE__ */ cS(Z);
var Zr = { exports: {} }, gl = {}, Jr = { exports: {} }, kr = {};
var Mp;
function mS() {
  return Mp || (Mp = 1, (function(i) {
    function l(O, G) {
      var K = O.length;
      O.push(G);
      t: for (; 0 < K; ) {
        var ut = K - 1 >>> 1, ht = O[ut];
        if (0 < c(ht, G))
          O[ut] = G, O[K] = ht, K = ut;
        else break t;
      }
    }
    function u(O) {
      return O.length === 0 ? null : O[0];
    }
    function o(O) {
      if (O.length === 0) return null;
      var G = O[0], K = O.pop();
      if (K !== G) {
        O[0] = K;
        t: for (var ut = 0, ht = O.length, A = ht >>> 1; ut < A; ) {
          var N = 2 * (ut + 1) - 1, Q = O[N], F = N + 1, lt = O[F];
          if (0 > c(Q, K))
            F < ht && 0 > c(lt, Q) ? (O[ut] = lt, O[F] = K, ut = F) : (O[ut] = Q, O[N] = K, ut = N);
          else if (F < ht && 0 > c(lt, K))
            O[ut] = lt, O[F] = K, ut = F;
          else break t;
        }
      }
      return G;
    }
    function c(O, G) {
      var K = O.sortIndex - G.sortIndex;
      return K !== 0 ? K : O.id - G.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      i.unstable_now = function() {
        return d.now();
      };
    } else {
      var h = Date, p = h.now();
      i.unstable_now = function() {
        return h.now() - p;
      };
    }
    var g = [], m = [], v = 1, S = null, b = 3, V = !1, C = !1, U = !1, j = !1, w = typeof setTimeout == "function" ? setTimeout : null, q = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    function Y(O) {
      for (var G = u(m); G !== null; ) {
        if (G.callback === null) o(m);
        else if (G.startTime <= O)
          o(m), G.sortIndex = G.expirationTime, l(g, G);
        else break;
        G = u(m);
      }
    }
    function tt(O) {
      if (U = !1, Y(O), !C)
        if (u(g) !== null)
          C = !0, et || (et = !0, pt());
        else {
          var G = u(m);
          G !== null && Bt(tt, G.startTime - O);
        }
    }
    var et = !1, X = -1, J = 5, k = -1;
    function $() {
      return j ? !0 : !(i.unstable_now() - k < J);
    }
    function st() {
      if (j = !1, et) {
        var O = i.unstable_now();
        k = O;
        var G = !0;
        try {
          t: {
            C = !1, U && (U = !1, q(X), X = -1), V = !0;
            var K = b;
            try {
              e: {
                for (Y(O), S = u(g); S !== null && !(S.expirationTime > O && $()); ) {
                  var ut = S.callback;
                  if (typeof ut == "function") {
                    S.callback = null, b = S.priorityLevel;
                    var ht = ut(
                      S.expirationTime <= O
                    );
                    if (O = i.unstable_now(), typeof ht == "function") {
                      S.callback = ht, Y(O), G = !0;
                      break e;
                    }
                    S === u(g) && o(g), Y(O);
                  } else o(g);
                  S = u(g);
                }
                if (S !== null) G = !0;
                else {
                  var A = u(m);
                  A !== null && Bt(
                    tt,
                    A.startTime - O
                  ), G = !1;
                }
              }
              break t;
            } finally {
              S = null, b = K, V = !1;
            }
            G = void 0;
          }
        } finally {
          G ? pt() : et = !1;
        }
      }
    }
    var pt;
    if (typeof H == "function")
      pt = function() {
        H(st);
      };
    else if (typeof MessageChannel < "u") {
      var Lt = new MessageChannel(), Ut = Lt.port2;
      Lt.port1.onmessage = st, pt = function() {
        Ut.postMessage(null);
      };
    } else
      pt = function() {
        w(st, 0);
      };
    function Bt(O, G) {
      X = w(function() {
        O(i.unstable_now());
      }, G);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, i.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : J = 0 < O ? Math.floor(1e3 / O) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, i.unstable_next = function(O) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = b;
      }
      var K = b;
      b = G;
      try {
        return O();
      } finally {
        b = K;
      }
    }, i.unstable_requestPaint = function() {
      j = !0;
    }, i.unstable_runWithPriority = function(O, G) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var K = b;
      b = O;
      try {
        return G();
      } finally {
        b = K;
      }
    }, i.unstable_scheduleCallback = function(O, G, K) {
      var ut = i.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? ut + K : ut) : K = ut, O) {
        case 1:
          var ht = -1;
          break;
        case 2:
          ht = 250;
          break;
        case 5:
          ht = 1073741823;
          break;
        case 4:
          ht = 1e4;
          break;
        default:
          ht = 5e3;
      }
      return ht = K + ht, O = {
        id: v++,
        callback: G,
        priorityLevel: O,
        startTime: K,
        expirationTime: ht,
        sortIndex: -1
      }, K > ut ? (O.sortIndex = K, l(m, O), u(g) === null && O === u(m) && (U ? (q(X), X = -1) : U = !0, Bt(tt, K - ut))) : (O.sortIndex = ht, l(g, O), C || V || (C = !0, et || (et = !0, pt()))), O;
    }, i.unstable_shouldYield = $, i.unstable_wrapCallback = function(O) {
      var G = b;
      return function() {
        var K = b;
        b = G;
        try {
          return O.apply(this, arguments);
        } finally {
          b = K;
        }
      };
    };
  })(kr)), kr;
}
var xp;
function pS() {
  return xp || (xp = 1, Jr.exports = mS()), Jr.exports;
}
var Fr = { exports: {} }, se = {};
var Dp;
function yS() {
  if (Dp) return se;
  Dp = 1;
  var i = Lc();
  function l(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        m += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + g + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u() {
  }
  var o = {
    d: {
      f: u,
      r: function() {
        throw Error(l(522));
      },
      D: u,
      C: u,
      L: u,
      m: u,
      X: u,
      S: u,
      M: u
    },
    p: 0,
    findDOMNode: null
  }, c = /* @__PURE__ */ Symbol.for("react.portal");
  function d(g, m, v) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: S == null ? null : "" + S,
      children: g,
      containerInfo: m,
      implementation: v
    };
  }
  var h = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(g, m) {
    if (g === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, se.createPortal = function(g, m) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(l(299));
    return d(g, m, null, v);
  }, se.flushSync = function(g) {
    var m = h.T, v = o.p;
    try {
      if (h.T = null, o.p = 2, g) return g();
    } finally {
      h.T = m, o.p = v, o.d.f();
    }
  }, se.preconnect = function(g, m) {
    typeof g == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, o.d.C(g, m));
  }, se.prefetchDNS = function(g) {
    typeof g == "string" && o.d.D(g);
  }, se.preinit = function(g, m) {
    if (typeof g == "string" && m && typeof m.as == "string") {
      var v = m.as, S = p(v, m.crossOrigin), b = typeof m.integrity == "string" ? m.integrity : void 0, V = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      v === "style" ? o.d.S(
        g,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: S,
          integrity: b,
          fetchPriority: V
        }
      ) : v === "script" && o.d.X(g, {
        crossOrigin: S,
        integrity: b,
        fetchPriority: V,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, se.preinitModule = function(g, m) {
    if (typeof g == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var v = p(
            m.as,
            m.crossOrigin
          );
          o.d.M(g, {
            crossOrigin: v,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          });
        }
      } else m == null && o.d.M(g);
  }, se.preload = function(g, m) {
    if (typeof g == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var v = m.as, S = p(v, m.crossOrigin);
      o.d.L(g, v, {
        crossOrigin: S,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      });
    }
  }, se.preloadModule = function(g, m) {
    if (typeof g == "string")
      if (m) {
        var v = p(m.as, m.crossOrigin);
        o.d.m(g, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: v,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else o.d.m(g);
  }, se.requestFormReset = function(g) {
    o.d.r(g);
  }, se.unstable_batchedUpdates = function(g, m) {
    return g(m);
  }, se.useFormState = function(g, m, v) {
    return h.H.useFormState(g, m, v);
  }, se.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, se.version = "19.2.8", se;
}
var Cp;
function gS() {
  if (Cp) return Fr.exports;
  Cp = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), Fr.exports = yS(), Fr.exports;
}
var Rp;
function vS() {
  if (Rp) return gl;
  Rp = 1;
  var i = pS(), l = Lc(), u = gS();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function d(t) {
    var e = t, n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (d(t) !== t)
      throw Error(o(188));
  }
  function m(t) {
    var e = t.alternate;
    if (!e) {
      if (e = d(t), e === null) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (a = s.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === n) return g(s), t;
          if (r === a) return g(s), e;
          r = r.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== a.return) n = s, a = r;
      else {
        for (var f = !1, y = s.child; y; ) {
          if (y === n) {
            f = !0, n = s, a = r;
            break;
          }
          if (y === a) {
            f = !0, a = s, n = r;
            break;
          }
          y = y.sibling;
        }
        if (!f) {
          for (y = r.child; y; ) {
            if (y === n) {
              f = !0, n = r, a = s;
              break;
            }
            if (y === a) {
              f = !0, a = r, n = s;
              break;
            }
            y = y.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (n.alternate !== a) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = v(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var S = Object.assign, b = /* @__PURE__ */ Symbol.for("react.element"), V = /* @__PURE__ */ Symbol.for("react.transitional.element"), C = /* @__PURE__ */ Symbol.for("react.portal"), U = /* @__PURE__ */ Symbol.for("react.fragment"), j = /* @__PURE__ */ Symbol.for("react.strict_mode"), w = /* @__PURE__ */ Symbol.for("react.profiler"), q = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), tt = /* @__PURE__ */ Symbol.for("react.suspense"), et = /* @__PURE__ */ Symbol.for("react.suspense_list"), X = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), k = /* @__PURE__ */ Symbol.for("react.activity"), $ = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), st = Symbol.iterator;
  function pt(t) {
    return t === null || typeof t != "object" ? null : (t = st && t[st] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Lt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ut(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Lt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case U:
        return "Fragment";
      case w:
        return "Profiler";
      case j:
        return "StrictMode";
      case tt:
        return "Suspense";
      case et:
        return "SuspenseList";
      case k:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case C:
          return "Portal";
        case H:
          return t.displayName || "Context";
        case q:
          return (t._context.displayName || "Context") + ".Consumer";
        case Y:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case X:
          return e = t.displayName || null, e !== null ? e : Ut(t.type) || "Memo";
        case J:
          e = t._payload, t = t._init;
          try {
            return Ut(t(e));
          } catch {
          }
      }
    return null;
  }
  var Bt = Array.isArray, O = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ut = [], ht = -1;
  function A(t) {
    return { current: t };
  }
  function N(t) {
    0 > ht || (t.current = ut[ht], ut[ht] = null, ht--);
  }
  function Q(t, e) {
    ht++, ut[ht] = t.current, t.current = e;
  }
  var F = A(null), lt = A(null), ot = A(null), vt = A(null);
  function qt(t, e) {
    switch (Q(ot, e), Q(lt, t), Q(F, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Gm(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Gm(e), t = Xm(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    N(F), Q(F, t);
  }
  function Nt() {
    N(F), N(lt), N(ot);
  }
  function An(t) {
    t.memoizedState !== null && Q(vt, t);
    var e = F.current, n = Xm(e, t.type);
    e !== n && (Q(lt, t), Q(F, n));
  }
  function In(t) {
    lt.current === t && (N(F), N(lt)), vt.current === t && (N(vt), hl._currentValue = K);
  }
  var Re, Aa;
  function Je(t) {
    if (Re === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Re = e && e[1] || "", Aa = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Re + t + Aa;
  }
  var Ea = !1;
  function Di(t, e) {
    if (!t || Ea) return "";
    Ea = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var L = function() {
                throw Error();
              };
              if (Object.defineProperty(L.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(L, []);
                } catch (z) {
                  var R = z;
                }
                Reflect.construct(t, [], L);
              } else {
                try {
                  L.call();
                } catch (z) {
                  R = z;
                }
                t.call(L.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                R = z;
              }
              (L = t()) && typeof L.catch == "function" && L.catch(function() {
              });
            }
          } catch (z) {
            if (z && R && typeof z.stack == "string")
              return [z.stack, R.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = a.DetermineComponentFrameRoot(), f = r[0], y = r[1];
      if (f && y) {
        var T = f.split(`
`), D = y.split(`
`);
        for (s = a = 0; a < T.length && !T[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; s < D.length && !D[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (a === T.length || s === D.length)
          for (a = T.length - 1, s = D.length - 1; 1 <= a && 0 <= s && T[a] !== D[s]; )
            s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (T[a] !== D[s]) {
            if (a !== 1 || s !== 1)
              do
                if (a--, s--, 0 > s || T[a] !== D[s]) {
                  var _ = `
` + T[a].replace(" at new ", " at ");
                  return t.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", t.displayName)), _;
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      Ea = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? Je(n) : "";
  }
  function ti(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Je(t.type);
      case 16:
        return Je("Lazy");
      case 13:
        return t.child !== e && e !== null ? Je("Suspense Fallback") : Je("Suspense");
      case 19:
        return Je("SuspenseList");
      case 0:
      case 15:
        return Di(t.type, !1);
      case 11:
        return Di(t.type.render, !1);
      case 1:
        return Di(t.type, !0);
      case 31:
        return Je("Activity");
      default:
        return "";
    }
  }
  function Sf(t) {
    try {
      var e = "", n = null;
      do
        e += ti(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Ru = Object.prototype.hasOwnProperty, zu = i.unstable_scheduleCallback, Ou = i.unstable_cancelCallback, G0 = i.unstable_shouldYield, X0 = i.unstable_requestPaint, ve = i.unstable_now, K0 = i.unstable_getCurrentPriorityLevel, Tf = i.unstable_ImmediatePriority, bf = i.unstable_UserBlockingPriority, Bl = i.unstable_NormalPriority, Q0 = i.unstable_LowPriority, Af = i.unstable_IdlePriority, Z0 = i.log, J0 = i.unstable_setDisableYieldValue, Ma = null, Se = null;
  function En(t) {
    if (typeof Z0 == "function" && J0(t), Se && typeof Se.setStrictMode == "function")
      try {
        Se.setStrictMode(Ma, t);
      } catch {
      }
  }
  var Te = Math.clz32 ? Math.clz32 : W0, k0 = Math.log, F0 = Math.LN2;
  function W0(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (k0(t) / F0 | 0) | 0;
  }
  var Nl = 256, jl = 262144, Ll = 4194304;
  function ei(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function wl(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var s = 0, r = t.suspendedLanes, f = t.pingedLanes;
    t = t.warmLanes;
    var y = a & 134217727;
    return y !== 0 ? (a = y & ~r, a !== 0 ? s = ei(a) : (f &= y, f !== 0 ? s = ei(f) : n || (n = y & ~t, n !== 0 && (s = ei(n))))) : (y = a & ~r, y !== 0 ? s = ei(y) : f !== 0 ? s = ei(f) : n || (n = a & ~t, n !== 0 && (s = ei(n)))), s === 0 ? 0 : e !== 0 && e !== s && (e & r) === 0 && (r = s & -s, n = e & -e, r >= n || r === 32 && (n & 4194048) !== 0) ? e : s;
  }
  function xa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function P0(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ef() {
    var t = Ll;
    return Ll <<= 1, (Ll & 62914560) === 0 && (Ll = 4194304), t;
  }
  function Vu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Da(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function $0(t, e, n, a, s, r) {
    var f = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var y = t.entanglements, T = t.expirationTimes, D = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var _ = 31 - Te(n), L = 1 << _;
      y[_] = 0, T[_] = -1;
      var R = D[_];
      if (R !== null)
        for (D[_] = null, _ = 0; _ < R.length; _++) {
          var z = R[_];
          z !== null && (z.lane &= -536870913);
        }
      n &= ~L;
    }
    a !== 0 && Mf(t, a, 0), r !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(f & ~e));
  }
  function Mf(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - Te(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
  }
  function xf(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - Te(n), s = 1 << a;
      s & e | t[a] & e && (t[a] |= e), n &= ~s;
    }
  }
  function Df(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : _u(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function _u(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Uu(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Cf() {
    var t = G.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : hp(t.type));
  }
  function Rf(t, e) {
    var n = G.p;
    try {
      return G.p = t, e();
    } finally {
      G.p = n;
    }
  }
  var Mn = Math.random().toString(36).slice(2), te = "__reactFiber$" + Mn, ce = "__reactProps$" + Mn, Ci = "__reactContainer$" + Mn, Bu = "__reactEvents$" + Mn, I0 = "__reactListeners$" + Mn, tv = "__reactHandles$" + Mn, zf = "__reactResources$" + Mn, Ca = "__reactMarker$" + Mn;
  function Nu(t) {
    delete t[te], delete t[ce], delete t[Bu], delete t[I0], delete t[tv];
  }
  function Ri(t) {
    var e = t[te];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[Ci] || n[te]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = Wm(t); t !== null; ) {
            if (n = t[te]) return n;
            t = Wm(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function zi(t) {
    if (t = t[te] || t[Ci]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ra(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Oi(t) {
    var e = t[zf];
    return e || (e = t[zf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function $t(t) {
    t[Ca] = !0;
  }
  var Of = /* @__PURE__ */ new Set(), Vf = {};
  function ni(t, e) {
    Vi(t, e), Vi(t + "Capture", e);
  }
  function Vi(t, e) {
    for (Vf[t] = e, t = 0; t < e.length; t++)
      Of.add(e[t]);
  }
  var ev = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), _f = {}, Uf = {};
  function nv(t) {
    return Ru.call(Uf, t) ? !0 : Ru.call(_f, t) ? !1 : ev.test(t) ? Uf[t] = !0 : (_f[t] = !0, !1);
  }
  function Hl(t, e, n) {
    if (nv(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Yl(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function nn(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
    }
  }
  function ze(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Bf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function iv(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var s = a.get, r = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(f) {
          n = "" + f, r.call(this, f);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(f) {
          n = "" + f;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function ju(t) {
    if (!t._valueTracker) {
      var e = Bf(t) ? "checked" : "value";
      t._valueTracker = iv(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Nf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), a = "";
    return t && (a = Bf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1;
  }
  function ql(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var av = /[\n"\\]/g;
  function Oe(t) {
    return t.replace(
      av,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Lu(t, e, n, a, s, r, f, y) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ze(e)) : t.value !== "" + ze(e) && (t.value = "" + ze(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? wu(t, f, ze(e)) : n != null ? wu(t, f, ze(n)) : a != null && t.removeAttribute("value"), s == null && r != null && (t.defaultChecked = !!r), s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.name = "" + ze(y) : t.removeAttribute("name");
  }
  function jf(t, e, n, a, s, r, f, y) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.type = r), e != null || n != null) {
      if (!(r !== "submit" && r !== "reset" || e != null)) {
        ju(t);
        return;
      }
      n = n != null ? "" + ze(n) : "", e = e != null ? "" + ze(e) : n, y || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? s, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = y ? t.checked : !!a, t.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), ju(t);
  }
  function wu(t, e, n) {
    e === "number" && ql(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function _i(t, e, n, a) {
    if (t = t.options, e) {
      e = {};
      for (var s = 0; s < n.length; s++)
        e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        s = e.hasOwnProperty("$" + t[n].value), t[n].selected !== s && (t[n].selected = s), s && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + ze(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          t[s].selected = !0, a && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Lf(t, e, n) {
    if (e != null && (e = "" + ze(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + ze(n) : "";
  }
  function wf(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(o(92));
        if (Bt(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), e = n;
    }
    n = ze(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), ju(t);
  }
  function Ui(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var lv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Hf(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || lv.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function Yf(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(o(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var s in e)
        a = e[s], e.hasOwnProperty(s) && n[s] !== a && Hf(t, s, a);
    } else
      for (var r in e)
        e.hasOwnProperty(r) && Hf(t, r, e[r]);
  }
  function Hu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var sv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), uv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Gl(t) {
    return uv.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function an() {
  }
  var Yu = null;
  function qu(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Bi = null, Ni = null;
  function qf(t) {
    var e = zi(t);
    if (e && (t = e.stateNode)) {
      var n = t[ce] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Lu(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + Oe(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var s = a[ce] || null;
                if (!s) throw Error(o(90));
                Lu(
                  a,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              a = n[e], a.form === t.form && Nf(a);
          }
          break t;
        case "textarea":
          Lf(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && _i(t, !!n.multiple, e, !1);
      }
    }
  }
  var Gu = !1;
  function Gf(t, e, n) {
    if (Gu) return t(e, n);
    Gu = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Gu = !1, (Bi !== null || Ni !== null) && (zs(), Bi && (e = Bi, t = Ni, Ni = Bi = null, qf(e), t)))
        for (e = 0; e < t.length; e++) qf(t[e]);
    }
  }
  function za(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[ce] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        o(231, e, typeof n)
      );
    return n;
  }
  var ln = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xu = !1;
  if (ln)
    try {
      var Oa = {};
      Object.defineProperty(Oa, "passive", {
        get: function() {
          Xu = !0;
        }
      }), window.addEventListener("test", Oa, Oa), window.removeEventListener("test", Oa, Oa);
    } catch {
      Xu = !1;
    }
  var xn = null, Ku = null, Xl = null;
  function Xf() {
    if (Xl) return Xl;
    var t, e = Ku, n = e.length, a, s = "value" in xn ? xn.value : xn.textContent, r = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++) ;
    var f = n - t;
    for (a = 1; a <= f && e[n - a] === s[r - a]; a++) ;
    return Xl = s.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Kl(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Ql() {
    return !0;
  }
  function Kf() {
    return !1;
  }
  function fe(t) {
    function e(n, a, s, r, f) {
      this._reactName = n, this._targetInst = s, this.type = a, this.nativeEvent = r, this.target = f, this.currentTarget = null;
      for (var y in t)
        t.hasOwnProperty(y) && (n = t[y], this[y] = n ? n(r) : r[y]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Ql : Kf, this.isPropagationStopped = Kf, this;
    }
    return S(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ql);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ql);
      },
      persist: function() {
      },
      isPersistent: Ql
    }), e;
  }
  var ii = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Zl = fe(ii), Va = S({}, ii, { view: 0, detail: 0 }), ov = fe(Va), Qu, Zu, _a, Jl = S({}, Va, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ku,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== _a && (_a && t.type === "mousemove" ? (Qu = t.screenX - _a.screenX, Zu = t.screenY - _a.screenY) : Zu = Qu = 0, _a = t), Qu);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Zu;
    }
  }), Qf = fe(Jl), rv = S({}, Jl, { dataTransfer: 0 }), cv = fe(rv), fv = S({}, Va, { relatedTarget: 0 }), Ju = fe(fv), hv = S({}, ii, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), dv = fe(hv), mv = S({}, ii, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), pv = fe(mv), yv = S({}, ii, { data: 0 }), Zf = fe(yv), gv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, vv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Sv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Tv(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Sv[t]) ? !!e[t] : !1;
  }
  function ku() {
    return Tv;
  }
  var bv = S({}, Va, {
    key: function(t) {
      if (t.key) {
        var e = gv[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Kl(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? vv[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ku,
    charCode: function(t) {
      return t.type === "keypress" ? Kl(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Kl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Av = fe(bv), Ev = S({}, Jl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Jf = fe(Ev), Mv = S({}, Va, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ku
  }), xv = fe(Mv), Dv = S({}, ii, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Cv = fe(Dv), Rv = S({}, Jl, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), zv = fe(Rv), Ov = S({}, ii, {
    newState: 0,
    oldState: 0
  }), Vv = fe(Ov), _v = [9, 13, 27, 32], Fu = ln && "CompositionEvent" in window, Ua = null;
  ln && "documentMode" in document && (Ua = document.documentMode);
  var Uv = ln && "TextEvent" in window && !Ua, kf = ln && (!Fu || Ua && 8 < Ua && 11 >= Ua), Ff = " ", Wf = !1;
  function Pf(t, e) {
    switch (t) {
      case "keyup":
        return _v.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function $f(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ji = !1;
  function Bv(t, e) {
    switch (t) {
      case "compositionend":
        return $f(e);
      case "keypress":
        return e.which !== 32 ? null : (Wf = !0, Ff);
      case "textInput":
        return t = e.data, t === Ff && Wf ? null : t;
      default:
        return null;
    }
  }
  function Nv(t, e) {
    if (ji)
      return t === "compositionend" || !Fu && Pf(t, e) ? (t = Xf(), Xl = Ku = xn = null, ji = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return kf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var jv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function If(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!jv[t.type] : e === "textarea";
  }
  function th(t, e, n, a) {
    Bi ? Ni ? Ni.push(a) : Ni = [a] : Bi = a, e = js(e, "onChange"), 0 < e.length && (n = new Zl(
      "onChange",
      "change",
      null,
      n,
      a
    ), t.push({ event: n, listeners: e }));
  }
  var Ba = null, Na = null;
  function Lv(t) {
    jm(t, 0);
  }
  function kl(t) {
    var e = Ra(t);
    if (Nf(e)) return t;
  }
  function eh(t, e) {
    if (t === "change") return e;
  }
  var nh = !1;
  if (ln) {
    var Wu;
    if (ln) {
      var Pu = "oninput" in document;
      if (!Pu) {
        var ih = document.createElement("div");
        ih.setAttribute("oninput", "return;"), Pu = typeof ih.oninput == "function";
      }
      Wu = Pu;
    } else Wu = !1;
    nh = Wu && (!document.documentMode || 9 < document.documentMode);
  }
  function ah() {
    Ba && (Ba.detachEvent("onpropertychange", lh), Na = Ba = null);
  }
  function lh(t) {
    if (t.propertyName === "value" && kl(Na)) {
      var e = [];
      th(
        e,
        Na,
        t,
        qu(t)
      ), Gf(Lv, e);
    }
  }
  function wv(t, e, n) {
    t === "focusin" ? (ah(), Ba = e, Na = n, Ba.attachEvent("onpropertychange", lh)) : t === "focusout" && ah();
  }
  function Hv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return kl(Na);
  }
  function Yv(t, e) {
    if (t === "click") return kl(e);
  }
  function qv(t, e) {
    if (t === "input" || t === "change")
      return kl(e);
  }
  function Gv(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var be = typeof Object.is == "function" ? Object.is : Gv;
  function ja(t, e) {
    if (be(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var s = n[a];
      if (!Ru.call(e, s) || !be(t[s], e[s]))
        return !1;
    }
    return !0;
  }
  function sh(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function uh(t, e) {
    var n = sh(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = t + n.textContent.length, t <= e && a >= e)
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = sh(n);
    }
  }
  function oh(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? oh(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function rh(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = ql(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = ql(t.document);
    }
    return e;
  }
  function $u(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Xv = ln && "documentMode" in document && 11 >= document.documentMode, Li = null, Iu = null, La = null, to = !1;
  function ch(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    to || Li == null || Li !== ql(a) || (a = Li, "selectionStart" in a && $u(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), La && ja(La, a) || (La = a, a = js(Iu, "onSelect"), 0 < a.length && (e = new Zl(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: a }), e.target = Li)));
  }
  function ai(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var wi = {
    animationend: ai("Animation", "AnimationEnd"),
    animationiteration: ai("Animation", "AnimationIteration"),
    animationstart: ai("Animation", "AnimationStart"),
    transitionrun: ai("Transition", "TransitionRun"),
    transitionstart: ai("Transition", "TransitionStart"),
    transitioncancel: ai("Transition", "TransitionCancel"),
    transitionend: ai("Transition", "TransitionEnd")
  }, eo = {}, fh = {};
  ln && (fh = document.createElement("div").style, "AnimationEvent" in window || (delete wi.animationend.animation, delete wi.animationiteration.animation, delete wi.animationstart.animation), "TransitionEvent" in window || delete wi.transitionend.transition);
  function li(t) {
    if (eo[t]) return eo[t];
    if (!wi[t]) return t;
    var e = wi[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in fh)
        return eo[t] = e[n];
    return t;
  }
  var hh = li("animationend"), dh = li("animationiteration"), mh = li("animationstart"), Kv = li("transitionrun"), Qv = li("transitionstart"), Zv = li("transitioncancel"), ph = li("transitionend"), yh = /* @__PURE__ */ new Map(), no = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  no.push("scrollEnd");
  function qe(t, e) {
    yh.set(t, e), ni(e, [t]);
  }
  var Fl = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Ve = [], Hi = 0, io = 0;
  function Wl() {
    for (var t = Hi, e = io = Hi = 0; e < t; ) {
      var n = Ve[e];
      Ve[e++] = null;
      var a = Ve[e];
      Ve[e++] = null;
      var s = Ve[e];
      Ve[e++] = null;
      var r = Ve[e];
      if (Ve[e++] = null, a !== null && s !== null) {
        var f = a.pending;
        f === null ? s.next = s : (s.next = f.next, f.next = s), a.pending = s;
      }
      r !== 0 && gh(n, s, r);
    }
  }
  function Pl(t, e, n, a) {
    Ve[Hi++] = t, Ve[Hi++] = e, Ve[Hi++] = n, Ve[Hi++] = a, io |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function ao(t, e, n, a) {
    return Pl(t, e, n, a), $l(t);
  }
  function si(t, e) {
    return Pl(t, null, null, e), $l(t);
  }
  function gh(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var s = !1, r = t.return; r !== null; )
      r.childLanes |= n, a = r.alternate, a !== null && (a.childLanes |= n), r.tag === 22 && (t = r.stateNode, t === null || t._visibility & 1 || (s = !0)), t = r, r = r.return;
    return t.tag === 3 ? (r = t.stateNode, s && e !== null && (s = 31 - Te(n), t = r.hiddenUpdates, a = t[s], a === null ? t[s] = [e] : a.push(e), e.lane = n | 536870912), r) : null;
  }
  function $l(t) {
    if (50 < ll)
      throw ll = 0, mr = null, Error(o(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Yi = {};
  function Jv(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ae(t, e, n, a) {
    return new Jv(t, e, n, a);
  }
  function lo(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function sn(t, e) {
    var n = t.alternate;
    return n === null ? (n = Ae(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function vh(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Il(t, e, n, a, s, r) {
    var f = 0;
    if (a = t, typeof t == "function") lo(t) && (f = 1);
    else if (typeof t == "string")
      f = $1(
        t,
        n,
        F.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case k:
          return t = Ae(31, n, e, s), t.elementType = k, t.lanes = r, t;
        case U:
          return ui(n.children, s, r, e);
        case j:
          f = 8, s |= 24;
          break;
        case w:
          return t = Ae(12, n, e, s | 2), t.elementType = w, t.lanes = r, t;
        case tt:
          return t = Ae(13, n, e, s), t.elementType = tt, t.lanes = r, t;
        case et:
          return t = Ae(19, n, e, s), t.elementType = et, t.lanes = r, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case H:
                f = 10;
                break t;
              case q:
                f = 9;
                break t;
              case Y:
                f = 11;
                break t;
              case X:
                f = 14;
                break t;
              case J:
                f = 16, a = null;
                break t;
            }
          f = 29, n = Error(
            o(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = Ae(f, n, e, s), e.elementType = t, e.type = a, e.lanes = r, e;
  }
  function ui(t, e, n, a) {
    return t = Ae(7, t, a, e), t.lanes = n, t;
  }
  function so(t, e, n) {
    return t = Ae(6, t, null, e), t.lanes = n, t;
  }
  function Sh(t) {
    var e = Ae(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function uo(t, e, n) {
    return e = Ae(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Th = /* @__PURE__ */ new WeakMap();
  function _e(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Th.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Sf(e)
      }, Th.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Sf(e)
    };
  }
  var qi = [], Gi = 0, ts = null, wa = 0, Ue = [], Be = 0, Dn = null, ke = 1, Fe = "";
  function un(t, e) {
    qi[Gi++] = wa, qi[Gi++] = ts, ts = t, wa = e;
  }
  function bh(t, e, n) {
    Ue[Be++] = ke, Ue[Be++] = Fe, Ue[Be++] = Dn, Dn = t;
    var a = ke;
    t = Fe;
    var s = 32 - Te(a) - 1;
    a &= ~(1 << s), n += 1;
    var r = 32 - Te(e) + s;
    if (30 < r) {
      var f = s - s % 5;
      r = (a & (1 << f) - 1).toString(32), a >>= f, s -= f, ke = 1 << 32 - Te(e) + s | n << s | a, Fe = r + t;
    } else
      ke = 1 << r | n << s | a, Fe = t;
  }
  function oo(t) {
    t.return !== null && (un(t, 1), bh(t, 1, 0));
  }
  function ro(t) {
    for (; t === ts; )
      ts = qi[--Gi], qi[Gi] = null, wa = qi[--Gi], qi[Gi] = null;
    for (; t === Dn; )
      Dn = Ue[--Be], Ue[Be] = null, Fe = Ue[--Be], Ue[Be] = null, ke = Ue[--Be], Ue[Be] = null;
  }
  function Ah(t, e) {
    Ue[Be++] = ke, Ue[Be++] = Fe, Ue[Be++] = Dn, ke = e.id, Fe = e.overflow, Dn = t;
  }
  var ee = null, Vt = null, St = !1, Cn = null, Ne = !1, co = Error(o(519));
  function Rn(t) {
    var e = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ha(_e(e, t)), co;
  }
  function Eh(t) {
    var e = t.stateNode, n = t.type, a = t.memoizedProps;
    switch (e[te] = t, e[ce] = a, n) {
      case "dialog":
        mt("cancel", e), mt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        mt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ul.length; n++)
          mt(ul[n], e);
        break;
      case "source":
        mt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        mt("error", e), mt("load", e);
        break;
      case "details":
        mt("toggle", e);
        break;
      case "input":
        mt("invalid", e), jf(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        mt("invalid", e);
        break;
      case "textarea":
        mt("invalid", e), wf(e, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || Ym(e.textContent, n) ? (a.popover != null && (mt("beforetoggle", e), mt("toggle", e)), a.onScroll != null && mt("scroll", e), a.onScrollEnd != null && mt("scrollend", e), a.onClick != null && (e.onclick = an), e = !0) : e = !1, e || Rn(t, !0);
  }
  function Mh(t) {
    for (ee = t.return; ee; )
      switch (ee.tag) {
        case 5:
        case 31:
        case 13:
          Ne = !1;
          return;
        case 27:
        case 3:
          Ne = !0;
          return;
        default:
          ee = ee.return;
      }
  }
  function Xi(t) {
    if (t !== ee) return !1;
    if (!St) return Mh(t), St = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || zr(t.type, t.memoizedProps)), n = !n), n && Vt && Rn(t), Mh(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Vt = Fm(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Vt = Fm(t);
    } else
      e === 27 ? (e = Vt, Gn(t.type) ? (t = Br, Br = null, Vt = t) : Vt = e) : Vt = ee ? Le(t.stateNode.nextSibling) : null;
    return !0;
  }
  function oi() {
    Vt = ee = null, St = !1;
  }
  function fo() {
    var t = Cn;
    return t !== null && (pe === null ? pe = t : pe.push.apply(
      pe,
      t
    ), Cn = null), t;
  }
  function Ha(t) {
    Cn === null ? Cn = [t] : Cn.push(t);
  }
  var ho = A(null), ri = null, on = null;
  function zn(t, e, n) {
    Q(ho, e._currentValue), e._currentValue = n;
  }
  function rn(t) {
    t._currentValue = ho.current, N(ho);
  }
  function mo(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function po(t, e, n, a) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var f = s.child;
        r = r.firstContext;
        t: for (; r !== null; ) {
          var y = r;
          r = s;
          for (var T = 0; T < e.length; T++)
            if (y.context === e[T]) {
              r.lanes |= n, y = r.alternate, y !== null && (y.lanes |= n), mo(
                r.return,
                n,
                t
              ), a || (f = null);
              break t;
            }
          r = y.next;
        }
      } else if (s.tag === 18) {
        if (f = s.return, f === null) throw Error(o(341));
        f.lanes |= n, r = f.alternate, r !== null && (r.lanes |= n), mo(f, n, t), f = null;
      } else f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (s = f.sibling, s !== null) {
            s.return = f.return, f = s;
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function Ki(t, e, n, a) {
    t = null;
    for (var s = e, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(o(387));
        if (f = f.memoizedProps, f !== null) {
          var y = s.type;
          be(s.pendingProps.value, f.value) || (t !== null ? t.push(y) : t = [y]);
        }
      } else if (s === vt.current) {
        if (f = s.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(hl) : t = [hl]);
      }
      s = s.return;
    }
    t !== null && po(
      e,
      t,
      n,
      a
    ), e.flags |= 262144;
  }
  function es(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!be(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function ci(t) {
    ri = t, on = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function ne(t) {
    return xh(ri, t);
  }
  function ns(t, e) {
    return ri === null && ci(t), xh(t, e);
  }
  function xh(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, on === null) {
      if (t === null) throw Error(o(308));
      on = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else on = on.next = e;
    return n;
  }
  var kv = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, Fv = i.unstable_scheduleCallback, Wv = i.unstable_NormalPriority, Kt = {
    $$typeof: H,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function yo() {
    return {
      controller: new kv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ya(t) {
    t.refCount--, t.refCount === 0 && Fv(Wv, function() {
      t.controller.abort();
    });
  }
  var qa = null, go = 0, Qi = 0, Zi = null;
  function Pv(t, e) {
    if (qa === null) {
      var n = qa = [];
      go = 0, Qi = Tr(), Zi = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return go++, e.then(Dh, Dh), e;
  }
  function Dh() {
    if (--go === 0 && qa !== null) {
      Zi !== null && (Zi.status = "fulfilled");
      var t = qa;
      qa = null, Qi = 0, Zi = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function $v(t, e) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        n.push(s);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var s = 0; s < n.length; s++) (0, n[s])(e);
      },
      function(s) {
        for (a.status = "rejected", a.reason = s, s = 0; s < n.length; s++)
          (0, n[s])(void 0);
      }
    ), a;
  }
  var Ch = O.S;
  O.S = function(t, e) {
    cm = ve(), typeof e == "object" && e !== null && typeof e.then == "function" && Pv(t, e), Ch !== null && Ch(t, e);
  };
  var fi = A(null);
  function vo() {
    var t = fi.current;
    return t !== null ? t : zt.pooledCache;
  }
  function is(t, e) {
    e === null ? Q(fi, fi.current) : Q(fi, e.pool);
  }
  function Rh() {
    var t = vo();
    return t === null ? null : { parent: Kt._currentValue, pool: t };
  }
  var Ji = Error(o(460)), So = Error(o(474)), as = Error(o(542)), ls = { then: function() {
  } };
  function zh(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Oh(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(an, an), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, _h(t), t;
      default:
        if (typeof e.status == "string") e.then(an, an);
        else {
          if (t = zt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(o(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var s = e;
                s.status = "fulfilled", s.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var s = e;
                s.status = "rejected", s.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, _h(t), t;
        }
        throw di = e, Ji;
    }
  }
  function hi(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (di = n, Ji) : n;
    }
  }
  var di = null;
  function Vh() {
    if (di === null) throw Error(o(459));
    var t = di;
    return di = null, t;
  }
  function _h(t) {
    if (t === Ji || t === as)
      throw Error(o(483));
  }
  var ki = null, Ga = 0;
  function ss(t) {
    var e = Ga;
    return Ga += 1, ki === null && (ki = []), Oh(ki, t, e);
  }
  function Xa(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function us(t, e) {
    throw e.$$typeof === b ? Error(o(525)) : (t = Object.prototype.toString.call(e), Error(
      o(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Uh(t) {
    function e(M, E) {
      if (t) {
        var x = M.deletions;
        x === null ? (M.deletions = [E], M.flags |= 16) : x.push(E);
      }
    }
    function n(M, E) {
      if (!t) return null;
      for (; E !== null; )
        e(M, E), E = E.sibling;
      return null;
    }
    function a(M) {
      for (var E = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? E.set(M.key, M) : E.set(M.index, M), M = M.sibling;
      return E;
    }
    function s(M, E) {
      return M = sn(M, E), M.index = 0, M.sibling = null, M;
    }
    function r(M, E, x) {
      return M.index = x, t ? (x = M.alternate, x !== null ? (x = x.index, x < E ? (M.flags |= 67108866, E) : x) : (M.flags |= 67108866, E)) : (M.flags |= 1048576, E);
    }
    function f(M) {
      return t && M.alternate === null && (M.flags |= 67108866), M;
    }
    function y(M, E, x, B) {
      return E === null || E.tag !== 6 ? (E = so(x, M.mode, B), E.return = M, E) : (E = s(E, x), E.return = M, E);
    }
    function T(M, E, x, B) {
      var it = x.type;
      return it === U ? _(
        M,
        E,
        x.props.children,
        B,
        x.key
      ) : E !== null && (E.elementType === it || typeof it == "object" && it !== null && it.$$typeof === J && hi(it) === E.type) ? (E = s(E, x.props), Xa(E, x), E.return = M, E) : (E = Il(
        x.type,
        x.key,
        x.props,
        null,
        M.mode,
        B
      ), Xa(E, x), E.return = M, E);
    }
    function D(M, E, x, B) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== x.containerInfo || E.stateNode.implementation !== x.implementation ? (E = uo(x, M.mode, B), E.return = M, E) : (E = s(E, x.children || []), E.return = M, E);
    }
    function _(M, E, x, B, it) {
      return E === null || E.tag !== 7 ? (E = ui(
        x,
        M.mode,
        B,
        it
      ), E.return = M, E) : (E = s(E, x), E.return = M, E);
    }
    function L(M, E, x) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = so(
          "" + E,
          M.mode,
          x
        ), E.return = M, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case V:
            return x = Il(
              E.type,
              E.key,
              E.props,
              null,
              M.mode,
              x
            ), Xa(x, E), x.return = M, x;
          case C:
            return E = uo(
              E,
              M.mode,
              x
            ), E.return = M, E;
          case J:
            return E = hi(E), L(M, E, x);
        }
        if (Bt(E) || pt(E))
          return E = ui(
            E,
            M.mode,
            x,
            null
          ), E.return = M, E;
        if (typeof E.then == "function")
          return L(M, ss(E), x);
        if (E.$$typeof === H)
          return L(
            M,
            ns(M, E),
            x
          );
        us(M, E);
      }
      return null;
    }
    function R(M, E, x, B) {
      var it = E !== null ? E.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return it !== null ? null : y(M, E, "" + x, B);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case V:
            return x.key === it ? T(M, E, x, B) : null;
          case C:
            return x.key === it ? D(M, E, x, B) : null;
          case J:
            return x = hi(x), R(M, E, x, B);
        }
        if (Bt(x) || pt(x))
          return it !== null ? null : _(M, E, x, B, null);
        if (typeof x.then == "function")
          return R(
            M,
            E,
            ss(x),
            B
          );
        if (x.$$typeof === H)
          return R(
            M,
            E,
            ns(M, x),
            B
          );
        us(M, x);
      }
      return null;
    }
    function z(M, E, x, B, it) {
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return M = M.get(x) || null, y(E, M, "" + B, it);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case V:
            return M = M.get(
              B.key === null ? x : B.key
            ) || null, T(E, M, B, it);
          case C:
            return M = M.get(
              B.key === null ? x : B.key
            ) || null, D(E, M, B, it);
          case J:
            return B = hi(B), z(
              M,
              E,
              x,
              B,
              it
            );
        }
        if (Bt(B) || pt(B))
          return M = M.get(x) || null, _(E, M, B, it, null);
        if (typeof B.then == "function")
          return z(
            M,
            E,
            x,
            ss(B),
            it
          );
        if (B.$$typeof === H)
          return z(
            M,
            E,
            x,
            ns(E, B),
            it
          );
        us(E, B);
      }
      return null;
    }
    function W(M, E, x, B) {
      for (var it = null, Tt = null, I = E, ft = E = 0, gt = null; I !== null && ft < x.length; ft++) {
        I.index > ft ? (gt = I, I = null) : gt = I.sibling;
        var bt = R(
          M,
          I,
          x[ft],
          B
        );
        if (bt === null) {
          I === null && (I = gt);
          break;
        }
        t && I && bt.alternate === null && e(M, I), E = r(bt, E, ft), Tt === null ? it = bt : Tt.sibling = bt, Tt = bt, I = gt;
      }
      if (ft === x.length)
        return n(M, I), St && un(M, ft), it;
      if (I === null) {
        for (; ft < x.length; ft++)
          I = L(M, x[ft], B), I !== null && (E = r(
            I,
            E,
            ft
          ), Tt === null ? it = I : Tt.sibling = I, Tt = I);
        return St && un(M, ft), it;
      }
      for (I = a(I); ft < x.length; ft++)
        gt = z(
          I,
          M,
          ft,
          x[ft],
          B
        ), gt !== null && (t && gt.alternate !== null && I.delete(
          gt.key === null ? ft : gt.key
        ), E = r(
          gt,
          E,
          ft
        ), Tt === null ? it = gt : Tt.sibling = gt, Tt = gt);
      return t && I.forEach(function(Jn) {
        return e(M, Jn);
      }), St && un(M, ft), it;
    }
    function at(M, E, x, B) {
      if (x == null) throw Error(o(151));
      for (var it = null, Tt = null, I = E, ft = E = 0, gt = null, bt = x.next(); I !== null && !bt.done; ft++, bt = x.next()) {
        I.index > ft ? (gt = I, I = null) : gt = I.sibling;
        var Jn = R(M, I, bt.value, B);
        if (Jn === null) {
          I === null && (I = gt);
          break;
        }
        t && I && Jn.alternate === null && e(M, I), E = r(Jn, E, ft), Tt === null ? it = Jn : Tt.sibling = Jn, Tt = Jn, I = gt;
      }
      if (bt.done)
        return n(M, I), St && un(M, ft), it;
      if (I === null) {
        for (; !bt.done; ft++, bt = x.next())
          bt = L(M, bt.value, B), bt !== null && (E = r(bt, E, ft), Tt === null ? it = bt : Tt.sibling = bt, Tt = bt);
        return St && un(M, ft), it;
      }
      for (I = a(I); !bt.done; ft++, bt = x.next())
        bt = z(I, M, ft, bt.value, B), bt !== null && (t && bt.alternate !== null && I.delete(bt.key === null ? ft : bt.key), E = r(bt, E, ft), Tt === null ? it = bt : Tt.sibling = bt, Tt = bt);
      return t && I.forEach(function(rS) {
        return e(M, rS);
      }), St && un(M, ft), it;
    }
    function Ct(M, E, x, B) {
      if (typeof x == "object" && x !== null && x.type === U && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case V:
            t: {
              for (var it = x.key; E !== null; ) {
                if (E.key === it) {
                  if (it = x.type, it === U) {
                    if (E.tag === 7) {
                      n(
                        M,
                        E.sibling
                      ), B = s(
                        E,
                        x.props.children
                      ), B.return = M, M = B;
                      break t;
                    }
                  } else if (E.elementType === it || typeof it == "object" && it !== null && it.$$typeof === J && hi(it) === E.type) {
                    n(
                      M,
                      E.sibling
                    ), B = s(E, x.props), Xa(B, x), B.return = M, M = B;
                    break t;
                  }
                  n(M, E);
                  break;
                } else e(M, E);
                E = E.sibling;
              }
              x.type === U ? (B = ui(
                x.props.children,
                M.mode,
                B,
                x.key
              ), B.return = M, M = B) : (B = Il(
                x.type,
                x.key,
                x.props,
                null,
                M.mode,
                B
              ), Xa(B, x), B.return = M, M = B);
            }
            return f(M);
          case C:
            t: {
              for (it = x.key; E !== null; ) {
                if (E.key === it)
                  if (E.tag === 4 && E.stateNode.containerInfo === x.containerInfo && E.stateNode.implementation === x.implementation) {
                    n(
                      M,
                      E.sibling
                    ), B = s(E, x.children || []), B.return = M, M = B;
                    break t;
                  } else {
                    n(M, E);
                    break;
                  }
                else e(M, E);
                E = E.sibling;
              }
              B = uo(x, M.mode, B), B.return = M, M = B;
            }
            return f(M);
          case J:
            return x = hi(x), Ct(
              M,
              E,
              x,
              B
            );
        }
        if (Bt(x))
          return W(
            M,
            E,
            x,
            B
          );
        if (pt(x)) {
          if (it = pt(x), typeof it != "function") throw Error(o(150));
          return x = it.call(x), at(
            M,
            E,
            x,
            B
          );
        }
        if (typeof x.then == "function")
          return Ct(
            M,
            E,
            ss(x),
            B
          );
        if (x.$$typeof === H)
          return Ct(
            M,
            E,
            ns(M, x),
            B
          );
        us(M, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, E !== null && E.tag === 6 ? (n(M, E.sibling), B = s(E, x), B.return = M, M = B) : (n(M, E), B = so(x, M.mode, B), B.return = M, M = B), f(M)) : n(M, E);
    }
    return function(M, E, x, B) {
      try {
        Ga = 0;
        var it = Ct(
          M,
          E,
          x,
          B
        );
        return ki = null, it;
      } catch (I) {
        if (I === Ji || I === as) throw I;
        var Tt = Ae(29, I, null, M.mode);
        return Tt.lanes = B, Tt.return = M, Tt;
      }
    };
  }
  var mi = Uh(!0), Bh = Uh(!1), On = !1;
  function To(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function bo(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Vn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function _n(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (At & 2) !== 0) {
      var s = a.pending;
      return s === null ? e.next = e : (e.next = s.next, s.next = e), a.pending = e, e = $l(t), gh(t, null, n), e;
    }
    return Pl(t, a, e, n), $l(t);
  }
  function Ka(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, xf(t, n);
    }
  }
  function Ao(t, e) {
    var n = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var s = null, r = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = f : r = r.next = f, n = n.next;
        } while (n !== null);
        r === null ? s = r = e : r = r.next = e;
      } else s = r = e;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var Eo = !1;
  function Qa() {
    if (Eo) {
      var t = Zi;
      if (t !== null) throw t;
    }
  }
  function Za(t, e, n, a) {
    Eo = !1;
    var s = t.updateQueue;
    On = !1;
    var r = s.firstBaseUpdate, f = s.lastBaseUpdate, y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var T = y, D = T.next;
      T.next = null, f === null ? r = D : f.next = D, f = T;
      var _ = t.alternate;
      _ !== null && (_ = _.updateQueue, y = _.lastBaseUpdate, y !== f && (y === null ? _.firstBaseUpdate = D : y.next = D, _.lastBaseUpdate = T));
    }
    if (r !== null) {
      var L = s.baseState;
      f = 0, _ = D = T = null, y = r;
      do {
        var R = y.lane & -536870913, z = R !== y.lane;
        if (z ? (yt & R) === R : (a & R) === R) {
          R !== 0 && R === Qi && (Eo = !0), _ !== null && (_ = _.next = {
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: null,
            next: null
          });
          t: {
            var W = t, at = y;
            R = e;
            var Ct = n;
            switch (at.tag) {
              case 1:
                if (W = at.payload, typeof W == "function") {
                  L = W.call(Ct, L, R);
                  break t;
                }
                L = W;
                break t;
              case 3:
                W.flags = W.flags & -65537 | 128;
              case 0:
                if (W = at.payload, R = typeof W == "function" ? W.call(Ct, L, R) : W, R == null) break t;
                L = S({}, L, R);
                break t;
              case 2:
                On = !0;
            }
          }
          R = y.callback, R !== null && (t.flags |= 64, z && (t.flags |= 8192), z = s.callbacks, z === null ? s.callbacks = [R] : z.push(R));
        } else
          z = {
            lane: R,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          }, _ === null ? (D = _ = z, T = L) : _ = _.next = z, f |= R;
        if (y = y.next, y === null) {
          if (y = s.shared.pending, y === null)
            break;
          z = y, y = z.next, z.next = null, s.lastBaseUpdate = z, s.shared.pending = null;
        }
      } while (!0);
      _ === null && (T = L), s.baseState = T, s.firstBaseUpdate = D, s.lastBaseUpdate = _, r === null && (s.shared.lanes = 0), Ln |= f, t.lanes = f, t.memoizedState = L;
    }
  }
  function Nh(t, e) {
    if (typeof t != "function")
      throw Error(o(191, t));
    t.call(e);
  }
  function jh(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        Nh(n[t], e);
  }
  var Fi = A(null), os = A(0);
  function Lh(t, e) {
    t = vn, Q(os, t), Q(Fi, e), vn = t | e.baseLanes;
  }
  function Mo() {
    Q(os, vn), Q(Fi, Fi.current);
  }
  function xo() {
    vn = os.current, N(Fi), N(os);
  }
  var Ee = A(null), je = null;
  function Un(t) {
    var e = t.alternate;
    Q(Gt, Gt.current & 1), Q(Ee, t), je === null && (e === null || Fi.current !== null || e.memoizedState !== null) && (je = t);
  }
  function Do(t) {
    Q(Gt, Gt.current), Q(Ee, t), je === null && (je = t);
  }
  function wh(t) {
    t.tag === 22 ? (Q(Gt, Gt.current), Q(Ee, t), je === null && (je = t)) : Bn();
  }
  function Bn() {
    Q(Gt, Gt.current), Q(Ee, Ee.current);
  }
  function Me(t) {
    N(Ee), je === t && (je = null), N(Gt);
  }
  var Gt = A(0);
  function rs(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || _r(n) || Ur(n)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var cn = 0, ct = null, xt = null, Qt = null, cs = !1, Wi = !1, pi = !1, fs = 0, Ja = 0, Pi = null, Iv = 0;
  function wt() {
    throw Error(o(321));
  }
  function Co(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!be(t[n], e[n])) return !1;
    return !0;
  }
  function Ro(t, e, n, a, s, r) {
    return cn = r, ct = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, O.H = t === null || t.memoizedState === null ? bd : Xo, pi = !1, r = n(a, s), pi = !1, Wi && (r = Yh(
      e,
      n,
      a,
      s
    )), Hh(t), r;
  }
  function Hh(t) {
    O.H = Wa;
    var e = xt !== null && xt.next !== null;
    if (cn = 0, Qt = xt = ct = null, cs = !1, Ja = 0, Pi = null, e) throw Error(o(300));
    t === null || Zt || (t = t.dependencies, t !== null && es(t) && (Zt = !0));
  }
  function Yh(t, e, n, a) {
    ct = t;
    var s = 0;
    do {
      if (Wi && (Pi = null), Ja = 0, Wi = !1, 25 <= s) throw Error(o(301));
      if (s += 1, Qt = xt = null, t.updateQueue != null) {
        var r = t.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      O.H = Ad, r = e(n, a);
    } while (Wi);
    return r;
  }
  function t1() {
    var t = O.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? ka(e) : e, t = t.useState()[0], (xt !== null ? xt.memoizedState : null) !== t && (ct.flags |= 1024), e;
  }
  function zo() {
    var t = fs !== 0;
    return fs = 0, t;
  }
  function Oo(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function Vo(t) {
    if (cs) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      cs = !1;
    }
    cn = 0, Qt = xt = ct = null, Wi = !1, Ja = fs = 0, Pi = null;
  }
  function ue() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Qt === null ? ct.memoizedState = Qt = t : Qt = Qt.next = t, Qt;
  }
  function Xt() {
    if (xt === null) {
      var t = ct.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = xt.next;
    var e = Qt === null ? ct.memoizedState : Qt.next;
    if (e !== null)
      Qt = e, xt = t;
    else {
      if (t === null)
        throw ct.alternate === null ? Error(o(467)) : Error(o(310));
      xt = t, t = {
        memoizedState: xt.memoizedState,
        baseState: xt.baseState,
        baseQueue: xt.baseQueue,
        queue: xt.queue,
        next: null
      }, Qt === null ? ct.memoizedState = Qt = t : Qt = Qt.next = t;
    }
    return Qt;
  }
  function hs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ka(t) {
    var e = Ja;
    return Ja += 1, Pi === null && (Pi = []), t = Oh(Pi, t, e), e = ct, (Qt === null ? e.memoizedState : Qt.next) === null && (e = e.alternate, O.H = e === null || e.memoizedState === null ? bd : Xo), t;
  }
  function ds(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ka(t);
      if (t.$$typeof === H) return ne(t);
    }
    throw Error(o(438, String(t)));
  }
  function _o(t) {
    var e = null, n = ct.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var a = ct.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = hs(), ct.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++)
        n[a] = $;
    return e.index++, n;
  }
  function fn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ms(t) {
    var e = Xt();
    return Uo(e, xt, t);
  }
  function Uo(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = n;
    var s = t.baseQueue, r = a.pending;
    if (r !== null) {
      if (s !== null) {
        var f = s.next;
        s.next = r.next, r.next = f;
      }
      e.baseQueue = s = r, a.pending = null;
    }
    if (r = t.baseState, s === null) t.memoizedState = r;
    else {
      e = s.next;
      var y = f = null, T = null, D = e, _ = !1;
      do {
        var L = D.lane & -536870913;
        if (L !== D.lane ? (yt & L) === L : (cn & L) === L) {
          var R = D.revertLane;
          if (R === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }), L === Qi && (_ = !0);
          else if ((cn & R) === R) {
            D = D.next, R === Qi && (_ = !0);
            continue;
          } else
            L = {
              lane: 0,
              revertLane: D.revertLane,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }, T === null ? (y = T = L, f = r) : T = T.next = L, ct.lanes |= R, Ln |= R;
          L = D.action, pi && n(r, L), r = D.hasEagerState ? D.eagerState : n(r, L);
        } else
          R = {
            lane: L,
            revertLane: D.revertLane,
            gesture: D.gesture,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          }, T === null ? (y = T = R, f = r) : T = T.next = R, ct.lanes |= L, Ln |= L;
        D = D.next;
      } while (D !== null && D !== e);
      if (T === null ? f = r : T.next = y, !be(r, t.memoizedState) && (Zt = !0, _ && (n = Zi, n !== null)))
        throw n;
      t.memoizedState = r, t.baseState = f, t.baseQueue = T, a.lastRenderedState = r;
    }
    return s === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Bo(t) {
    var e = Xt(), n = e.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch, s = n.pending, r = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = s = s.next;
      do
        r = t(r, f.action), f = f.next;
      while (f !== s);
      be(r, e.memoizedState) || (Zt = !0), e.memoizedState = r, e.baseQueue === null && (e.baseState = r), n.lastRenderedState = r;
    }
    return [r, a];
  }
  function qh(t, e, n) {
    var a = ct, s = Xt(), r = St;
    if (r) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var f = !be(
      (xt || s).memoizedState,
      n
    );
    if (f && (s.memoizedState = n, Zt = !0), s = s.queue, Lo(Kh.bind(null, a, s, t), [
      t
    ]), s.getSnapshot !== e || f || Qt !== null && Qt.memoizedState.tag & 1) {
      if (a.flags |= 2048, $i(
        9,
        { destroy: void 0 },
        Xh.bind(
          null,
          a,
          s,
          n,
          e
        ),
        null
      ), zt === null) throw Error(o(349));
      r || (cn & 127) !== 0 || Gh(a, e, n);
    }
    return n;
  }
  function Gh(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = ct.updateQueue, e === null ? (e = hs(), ct.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function Xh(t, e, n, a) {
    e.value = n, e.getSnapshot = a, Qh(e) && Zh(t);
  }
  function Kh(t, e, n) {
    return n(function() {
      Qh(e) && Zh(t);
    });
  }
  function Qh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !be(t, n);
    } catch {
      return !0;
    }
  }
  function Zh(t) {
    var e = si(t, 2);
    e !== null && ye(e, t, 2);
  }
  function No(t) {
    var e = ue();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), pi) {
        En(!0);
        try {
          n();
        } finally {
          En(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fn,
      lastRenderedState: t
    }, e;
  }
  function Jh(t, e, n, a) {
    return t.baseState = n, Uo(
      t,
      xt,
      typeof a == "function" ? a : fn
    );
  }
  function e1(t, e, n, a, s) {
    if (gs(t)) throw Error(o(485));
    if (t = e.action, t !== null) {
      var r = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          r.listeners.push(f);
        }
      };
      O.T !== null ? n(!0) : r.isTransition = !1, a(r), n = e.pending, n === null ? (r.next = e.pending = r, kh(e, r)) : (r.next = n.next, e.pending = n.next = r);
    }
  }
  function kh(t, e) {
    var n = e.action, a = e.payload, s = t.state;
    if (e.isTransition) {
      var r = O.T, f = {};
      O.T = f;
      try {
        var y = n(s, a), T = O.S;
        T !== null && T(f, y), Fh(t, e, y);
      } catch (D) {
        jo(t, e, D);
      } finally {
        r !== null && f.types !== null && (r.types = f.types), O.T = r;
      }
    } else
      try {
        r = n(s, a), Fh(t, e, r);
      } catch (D) {
        jo(t, e, D);
      }
  }
  function Fh(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Wh(t, e, a);
      },
      function(a) {
        return jo(t, e, a);
      }
    ) : Wh(t, e, n);
  }
  function Wh(t, e, n) {
    e.status = "fulfilled", e.value = n, Ph(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, kh(t, n)));
  }
  function jo(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, Ph(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function Ph(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function $h(t, e) {
    return e;
  }
  function Ih(t, e) {
    if (St) {
      var n = zt.formState;
      if (n !== null) {
        t: {
          var a = ct;
          if (St) {
            if (Vt) {
              e: {
                for (var s = Vt, r = Ne; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break e;
                  }
                  if (s = Le(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break e;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                Vt = Le(
                  s.nextSibling
                ), a = s.data === "F!";
                break t;
              }
            }
            Rn(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return n = ue(), n.memoizedState = n.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $h,
      lastRenderedState: e
    }, n.queue = a, n = vd.bind(
      null,
      ct,
      a
    ), a.dispatch = n, a = No(!1), r = Go.bind(
      null,
      ct,
      !1,
      a.queue
    ), a = ue(), s = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = s, n = e1.bind(
      null,
      ct,
      s,
      r,
      n
    ), s.dispatch = n, a.memoizedState = t, [e, n, !1];
  }
  function td(t) {
    var e = Xt();
    return ed(e, xt, t);
  }
  function ed(t, e, n) {
    if (e = Uo(
      t,
      e,
      $h
    )[0], t = ms(fn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = ka(e);
      } catch (f) {
        throw f === Ji ? as : f;
      }
    else a = e;
    e = Xt();
    var s = e.queue, r = s.dispatch;
    return n !== e.memoizedState && (ct.flags |= 2048, $i(
      9,
      { destroy: void 0 },
      n1.bind(null, s, n),
      null
    )), [a, r, t];
  }
  function n1(t, e) {
    t.action = e;
  }
  function nd(t) {
    var e = Xt(), n = xt;
    if (n !== null)
      return ed(e, n, t);
    Xt(), e = e.memoizedState, n = Xt();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1];
  }
  function $i(t, e, n, a) {
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = ct.updateQueue, e === null && (e = hs(), ct.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function id() {
    return Xt().memoizedState;
  }
  function ps(t, e, n, a) {
    var s = ue();
    ct.flags |= t, s.memoizedState = $i(
      1 | e,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function ys(t, e, n, a) {
    var s = Xt();
    a = a === void 0 ? null : a;
    var r = s.memoizedState.inst;
    xt !== null && a !== null && Co(a, xt.memoizedState.deps) ? s.memoizedState = $i(e, r, n, a) : (ct.flags |= t, s.memoizedState = $i(
      1 | e,
      r,
      n,
      a
    ));
  }
  function ad(t, e) {
    ps(8390656, 8, t, e);
  }
  function Lo(t, e) {
    ys(2048, 8, t, e);
  }
  function i1(t) {
    ct.flags |= 4;
    var e = ct.updateQueue;
    if (e === null)
      e = hs(), ct.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function ld(t) {
    var e = Xt().memoizedState;
    return i1({ ref: e, nextImpl: t }), function() {
      if ((At & 2) !== 0) throw Error(o(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function sd(t, e) {
    return ys(4, 2, t, e);
  }
  function ud(t, e) {
    return ys(4, 4, t, e);
  }
  function od(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function rd(t, e, n) {
    n = n != null ? n.concat([t]) : null, ys(4, 4, od.bind(null, e, t), n);
  }
  function wo() {
  }
  function cd(t, e) {
    var n = Xt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && Co(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function fd(t, e) {
    var n = Xt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && Co(e, a[1]))
      return a[0];
    if (a = t(), pi) {
      En(!0);
      try {
        t();
      } finally {
        En(!1);
      }
    }
    return n.memoizedState = [a, e], a;
  }
  function Ho(t, e, n) {
    return n === void 0 || (cn & 1073741824) !== 0 && (yt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = hm(), ct.lanes |= t, Ln |= t, n);
  }
  function hd(t, e, n, a) {
    return be(n, e) ? n : Fi.current !== null ? (t = Ho(t, n, a), be(t, e) || (Zt = !0), t) : (cn & 42) === 0 || (cn & 1073741824) !== 0 && (yt & 261930) === 0 ? (Zt = !0, t.memoizedState = n) : (t = hm(), ct.lanes |= t, Ln |= t, e);
  }
  function dd(t, e, n, a, s) {
    var r = G.p;
    G.p = r !== 0 && 8 > r ? r : 8;
    var f = O.T, y = {};
    O.T = y, Go(t, !1, e, n);
    try {
      var T = s(), D = O.S;
      if (D !== null && D(y, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var _ = $v(
          T,
          a
        );
        Fa(
          t,
          e,
          _,
          Ce(t)
        );
      } else
        Fa(
          t,
          e,
          a,
          Ce(t)
        );
    } catch (L) {
      Fa(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: L },
        Ce()
      );
    } finally {
      G.p = r, f !== null && y.types !== null && (f.types = y.types), O.T = f;
    }
  }
  function a1() {
  }
  function Yo(t, e, n, a) {
    if (t.tag !== 5) throw Error(o(476));
    var s = md(t).queue;
    dd(
      t,
      s,
      e,
      K,
      n === null ? a1 : function() {
        return pd(t), n(a);
      }
    );
  }
  function md(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: K
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function pd(t) {
    var e = md(t);
    e.next === null && (e = t.alternate.memoizedState), Fa(
      t,
      e.next.queue,
      {},
      Ce()
    );
  }
  function qo() {
    return ne(hl);
  }
  function yd() {
    return Xt().memoizedState;
  }
  function gd() {
    return Xt().memoizedState;
  }
  function l1(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Ce();
          t = Vn(n);
          var a = _n(e, t, n);
          a !== null && (ye(a, e, n), Ka(a, e, n)), e = { cache: yo() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function s1(t, e, n) {
    var a = Ce();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, gs(t) ? Sd(e, n) : (n = ao(t, e, n, a), n !== null && (ye(n, t, a), Td(n, e, a)));
  }
  function vd(t, e, n) {
    var a = Ce();
    Fa(t, e, n, a);
  }
  function Fa(t, e, n, a) {
    var s = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (gs(t)) Sd(e, s);
    else {
      var r = t.alternate;
      if (t.lanes === 0 && (r === null || r.lanes === 0) && (r = e.lastRenderedReducer, r !== null))
        try {
          var f = e.lastRenderedState, y = r(f, n);
          if (s.hasEagerState = !0, s.eagerState = y, be(y, f))
            return Pl(t, e, s, 0), zt === null && Wl(), !1;
        } catch {
        }
      if (n = ao(t, e, s, a), n !== null)
        return ye(n, t, a), Td(n, e, a), !0;
    }
    return !1;
  }
  function Go(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: Tr(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, gs(t)) {
      if (e) throw Error(o(479));
    } else
      e = ao(
        t,
        n,
        a,
        2
      ), e !== null && ye(e, t, 2);
  }
  function gs(t) {
    var e = t.alternate;
    return t === ct || e !== null && e === ct;
  }
  function Sd(t, e) {
    Wi = cs = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function Td(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, xf(t, n);
    }
  }
  var Wa = {
    readContext: ne,
    use: ds,
    useCallback: wt,
    useContext: wt,
    useEffect: wt,
    useImperativeHandle: wt,
    useLayoutEffect: wt,
    useInsertionEffect: wt,
    useMemo: wt,
    useReducer: wt,
    useRef: wt,
    useState: wt,
    useDebugValue: wt,
    useDeferredValue: wt,
    useTransition: wt,
    useSyncExternalStore: wt,
    useId: wt,
    useHostTransitionStatus: wt,
    useFormState: wt,
    useActionState: wt,
    useOptimistic: wt,
    useMemoCache: wt,
    useCacheRefresh: wt
  };
  Wa.useEffectEvent = wt;
  var bd = {
    readContext: ne,
    use: ds,
    useCallback: function(t, e) {
      return ue().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: ne,
    useEffect: ad,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, ps(
        4194308,
        4,
        od.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return ps(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      ps(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = ue();
      e = e === void 0 ? null : e;
      var a = t();
      if (pi) {
        En(!0);
        try {
          t();
        } finally {
          En(!1);
        }
      }
      return n.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, n) {
      var a = ue();
      if (n !== void 0) {
        var s = n(e);
        if (pi) {
          En(!0);
          try {
            n(e);
          } finally {
            En(!1);
          }
        }
      } else s = e;
      return a.memoizedState = a.baseState = s, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: s
      }, a.queue = t, t = t.dispatch = s1.bind(
        null,
        ct,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = ue();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = No(t);
      var e = t.queue, n = vd.bind(null, ct, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: wo,
    useDeferredValue: function(t, e) {
      var n = ue();
      return Ho(n, t, e);
    },
    useTransition: function() {
      var t = No(!1);
      return t = dd.bind(
        null,
        ct,
        t.queue,
        !0,
        !1
      ), ue().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var a = ct, s = ue();
      if (St) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = e(), zt === null)
          throw Error(o(349));
        (yt & 127) !== 0 || Gh(a, e, n);
      }
      s.memoizedState = n;
      var r = { value: n, getSnapshot: e };
      return s.queue = r, ad(Kh.bind(null, a, r, t), [
        t
      ]), a.flags |= 2048, $i(
        9,
        { destroy: void 0 },
        Xh.bind(
          null,
          a,
          r,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = ue(), e = zt.identifierPrefix;
      if (St) {
        var n = Fe, a = ke;
        n = (a & ~(1 << 32 - Te(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = fs++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = Iv++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: qo,
    useFormState: Ih,
    useActionState: Ih,
    useOptimistic: function(t) {
      var e = ue();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = Go.bind(
        null,
        ct,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: _o,
    useCacheRefresh: function() {
      return ue().memoizedState = l1.bind(
        null,
        ct
      );
    },
    useEffectEvent: function(t) {
      var e = ue(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((At & 2) !== 0)
          throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Xo = {
    readContext: ne,
    use: ds,
    useCallback: cd,
    useContext: ne,
    useEffect: Lo,
    useImperativeHandle: rd,
    useInsertionEffect: sd,
    useLayoutEffect: ud,
    useMemo: fd,
    useReducer: ms,
    useRef: id,
    useState: function() {
      return ms(fn);
    },
    useDebugValue: wo,
    useDeferredValue: function(t, e) {
      var n = Xt();
      return hd(
        n,
        xt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ms(fn)[0], e = Xt().memoizedState;
      return [
        typeof t == "boolean" ? t : ka(t),
        e
      ];
    },
    useSyncExternalStore: qh,
    useId: yd,
    useHostTransitionStatus: qo,
    useFormState: td,
    useActionState: td,
    useOptimistic: function(t, e) {
      var n = Xt();
      return Jh(n, xt, t, e);
    },
    useMemoCache: _o,
    useCacheRefresh: gd
  };
  Xo.useEffectEvent = ld;
  var Ad = {
    readContext: ne,
    use: ds,
    useCallback: cd,
    useContext: ne,
    useEffect: Lo,
    useImperativeHandle: rd,
    useInsertionEffect: sd,
    useLayoutEffect: ud,
    useMemo: fd,
    useReducer: Bo,
    useRef: id,
    useState: function() {
      return Bo(fn);
    },
    useDebugValue: wo,
    useDeferredValue: function(t, e) {
      var n = Xt();
      return xt === null ? Ho(n, t, e) : hd(
        n,
        xt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Bo(fn)[0], e = Xt().memoizedState;
      return [
        typeof t == "boolean" ? t : ka(t),
        e
      ];
    },
    useSyncExternalStore: qh,
    useId: yd,
    useHostTransitionStatus: qo,
    useFormState: nd,
    useActionState: nd,
    useOptimistic: function(t, e) {
      var n = Xt();
      return xt !== null ? Jh(n, xt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: _o,
    useCacheRefresh: gd
  };
  Ad.useEffectEvent = ld;
  function Ko(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : S({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Qo = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = Ce(), s = Vn(a);
      s.payload = e, n != null && (s.callback = n), e = _n(t, s, a), e !== null && (ye(e, t, a), Ka(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = Ce(), s = Vn(a);
      s.tag = 1, s.payload = e, n != null && (s.callback = n), e = _n(t, s, a), e !== null && (ye(e, t, a), Ka(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Ce(), a = Vn(n);
      a.tag = 2, e != null && (a.callback = e), e = _n(t, a, n), e !== null && (ye(e, t, n), Ka(e, t, n));
    }
  };
  function Ed(t, e, n, a, s, r, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, r, f) : e.prototype && e.prototype.isPureReactComponent ? !ja(n, a) || !ja(s, r) : !0;
  }
  function Md(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && Qo.enqueueReplaceState(e, e.state, null);
  }
  function yi(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e)
        a !== "ref" && (n[a] = e[a]);
    }
    if (t = t.defaultProps) {
      n === e && (n = S({}, n));
      for (var s in t)
        n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function xd(t) {
    Fl(t);
  }
  function Dd(t) {
    console.error(t);
  }
  function Cd(t) {
    Fl(t);
  }
  function vs(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Rd(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Zo(t, e, n) {
    return n = Vn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      vs(t, e);
    }, n;
  }
  function zd(t) {
    return t = Vn(t), t.tag = 3, t;
  }
  function Od(t, e, n, a) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = a.value;
      t.payload = function() {
        return s(r);
      }, t.callback = function() {
        Rd(e, n, a);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      Rd(e, n, a), typeof s != "function" && (wn === null ? wn = /* @__PURE__ */ new Set([this]) : wn.add(this));
      var y = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: y !== null ? y : ""
      });
    });
  }
  function u1(t, e, n, a, s) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = n.alternate, e !== null && Ki(
        e,
        n,
        s,
        !0
      ), n = Ee.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return je === null ? Os() : n.alternate === null && Ht === 0 && (Ht = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, a === ls ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), gr(t, a, s)), !1;
          case 22:
            return n.flags |= 65536, a === ls ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), gr(t, a, s)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return gr(t, a, s), Os(), !1;
    }
    if (St)
      return e = Ee.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = s, a !== co && (t = Error(o(422), { cause: a }), Ha(_e(t, n)))) : (a !== co && (e = Error(o(423), {
        cause: a
      }), Ha(
        _e(e, n)
      )), t = t.current.alternate, t.flags |= 65536, s &= -s, t.lanes |= s, a = _e(a, n), s = Zo(
        t.stateNode,
        a,
        s
      ), Ao(t, s), Ht !== 4 && (Ht = 2)), !1;
    var r = Error(o(520), { cause: a });
    if (r = _e(r, n), al === null ? al = [r] : al.push(r), Ht !== 4 && (Ht = 2), e === null) return !0;
    a = _e(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = s & -s, n.lanes |= t, t = Zo(n.stateNode, a, t), Ao(n, t), !1;
        case 1:
          if (e = n.type, r = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (wn === null || !wn.has(r))))
            return n.flags |= 65536, s &= -s, n.lanes |= s, s = zd(s), Od(
              s,
              t,
              n,
              a
            ), Ao(n, s), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Jo = Error(o(461)), Zt = !1;
  function ie(t, e, n, a) {
    e.child = t === null ? Bh(e, null, n, a) : mi(
      e,
      t.child,
      n,
      a
    );
  }
  function Vd(t, e, n, a, s) {
    n = n.render;
    var r = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var y in a)
        y !== "ref" && (f[y] = a[y]);
    } else f = a;
    return ci(e), a = Ro(
      t,
      e,
      n,
      f,
      r,
      s
    ), y = zo(), t !== null && !Zt ? (Oo(t, e, s), hn(t, e, s)) : (St && y && oo(e), e.flags |= 1, ie(t, e, a, s), e.child);
  }
  function _d(t, e, n, a, s) {
    if (t === null) {
      var r = n.type;
      return typeof r == "function" && !lo(r) && r.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = r, Ud(
        t,
        e,
        r,
        a,
        s
      )) : (t = Il(
        n.type,
        null,
        a,
        e,
        e.mode,
        s
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (r = t.child, !er(t, s)) {
      var f = r.memoizedProps;
      if (n = n.compare, n = n !== null ? n : ja, n(f, a) && t.ref === e.ref)
        return hn(t, e, s);
    }
    return e.flags |= 1, t = sn(r, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Ud(t, e, n, a, s) {
    if (t !== null) {
      var r = t.memoizedProps;
      if (ja(r, a) && t.ref === e.ref)
        if (Zt = !1, e.pendingProps = a = r, er(t, s))
          (t.flags & 131072) !== 0 && (Zt = !0);
        else
          return e.lanes = t.lanes, hn(t, e, s);
    }
    return ko(
      t,
      e,
      n,
      a,
      s
    );
  }
  function Bd(t, e, n, a) {
    var s = a.children, r = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | n : n, t !== null) {
          for (a = e.child = t.child, s = 0; a !== null; )
            s = s | a.lanes | a.childLanes, a = a.sibling;
          a = s & ~r;
        } else a = 0, e.child = null;
        return Nd(
          t,
          e,
          r,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && is(
          e,
          r !== null ? r.cachePool : null
        ), r !== null ? Lh(e, r) : Mo(), wh(e);
      else
        return a = e.lanes = 536870912, Nd(
          t,
          e,
          r !== null ? r.baseLanes | n : n,
          n,
          a
        );
    } else
      r !== null ? (is(e, r.cachePool), Lh(e, r), Bn(), e.memoizedState = null) : (t !== null && is(e, null), Mo(), Bn());
    return ie(t, e, s, n), e.child;
  }
  function Pa(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Nd(t, e, n, a, s) {
    var r = vo();
    return r = r === null ? null : { parent: Kt._currentValue, pool: r }, e.memoizedState = {
      baseLanes: n,
      cachePool: r
    }, t !== null && is(e, null), Mo(), wh(e), t !== null && Ki(t, e, a, !0), e.childLanes = s, null;
  }
  function Ss(t, e) {
    return e = bs(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function jd(t, e, n) {
    return mi(e, t.child, null, n), t = Ss(e, e.pendingProps), t.flags |= 2, Me(e), e.memoizedState = null, t;
  }
  function o1(t, e, n) {
    var a = e.pendingProps, s = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (St) {
        if (a.mode === "hidden")
          return t = Ss(e, a), e.lanes = 536870912, Pa(null, t);
        if (Do(e), (t = Vt) ? (t = km(
          t,
          Ne
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Dn !== null ? { id: ke, overflow: Fe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Sh(t), n.return = e, e.child = n, ee = e, Vt = null)) : t = null, t === null) throw Rn(e);
        return e.lanes = 536870912, null;
      }
      return Ss(e, a);
    }
    var r = t.memoizedState;
    if (r !== null) {
      var f = r.dehydrated;
      if (Do(e), s)
        if (e.flags & 256)
          e.flags &= -257, e = jd(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(o(558));
      else if (Zt || Ki(t, e, n, !1), s = (n & t.childLanes) !== 0, Zt || s) {
        if (a = zt, a !== null && (f = Df(a, n), f !== 0 && f !== r.retryLane))
          throw r.retryLane = f, si(t, f), ye(a, t, f), Jo;
        Os(), e = jd(
          t,
          e,
          n
        );
      } else
        t = r.treeContext, Vt = Le(f.nextSibling), ee = e, St = !0, Cn = null, Ne = !1, t !== null && Ah(e, t), e = Ss(e, a), e.flags |= 4096;
      return e;
    }
    return t = sn(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ts(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(o(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function ko(t, e, n, a, s) {
    return ci(e), n = Ro(
      t,
      e,
      n,
      a,
      void 0,
      s
    ), a = zo(), t !== null && !Zt ? (Oo(t, e, s), hn(t, e, s)) : (St && a && oo(e), e.flags |= 1, ie(t, e, n, s), e.child);
  }
  function Ld(t, e, n, a, s, r) {
    return ci(e), e.updateQueue = null, n = Yh(
      e,
      a,
      n,
      s
    ), Hh(t), a = zo(), t !== null && !Zt ? (Oo(t, e, r), hn(t, e, r)) : (St && a && oo(e), e.flags |= 1, ie(t, e, n, r), e.child);
  }
  function wd(t, e, n, a, s) {
    if (ci(e), e.stateNode === null) {
      var r = Yi, f = n.contextType;
      typeof f == "object" && f !== null && (r = ne(f)), r = new n(a, r), e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Qo, e.stateNode = r, r._reactInternals = e, r = e.stateNode, r.props = a, r.state = e.memoizedState, r.refs = {}, To(e), f = n.contextType, r.context = typeof f == "object" && f !== null ? ne(f) : Yi, r.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (Ko(
        e,
        n,
        f,
        a
      ), r.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (f = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), f !== r.state && Qo.enqueueReplaceState(r, r.state, null), Za(e, a, r, s), Qa(), r.state = e.memoizedState), typeof r.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      r = e.stateNode;
      var y = e.memoizedProps, T = yi(n, y);
      r.props = T;
      var D = r.context, _ = n.contextType;
      f = Yi, typeof _ == "object" && _ !== null && (f = ne(_));
      var L = n.getDerivedStateFromProps;
      _ = typeof L == "function" || typeof r.getSnapshotBeforeUpdate == "function", y = e.pendingProps !== y, _ || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (y || D !== f) && Md(
        e,
        r,
        a,
        f
      ), On = !1;
      var R = e.memoizedState;
      r.state = R, Za(e, a, r, s), Qa(), D = e.memoizedState, y || R !== D || On ? (typeof L == "function" && (Ko(
        e,
        n,
        L,
        a
      ), D = e.memoizedState), (T = On || Ed(
        e,
        n,
        T,
        a,
        R,
        D,
        f
      )) ? (_ || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = D), r.props = a, r.state = D, r.context = f, a = T) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      r = e.stateNode, bo(t, e), f = e.memoizedProps, _ = yi(n, f), r.props = _, L = e.pendingProps, R = r.context, D = n.contextType, T = Yi, typeof D == "object" && D !== null && (T = ne(D)), y = n.getDerivedStateFromProps, (D = typeof y == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (f !== L || R !== T) && Md(
        e,
        r,
        a,
        T
      ), On = !1, R = e.memoizedState, r.state = R, Za(e, a, r, s), Qa();
      var z = e.memoizedState;
      f !== L || R !== z || On || t !== null && t.dependencies !== null && es(t.dependencies) ? (typeof y == "function" && (Ko(
        e,
        n,
        y,
        a
      ), z = e.memoizedState), (_ = On || Ed(
        e,
        n,
        _,
        a,
        R,
        z,
        T
      ) || t !== null && t.dependencies !== null && es(t.dependencies)) ? (D || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(a, z, T), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        a,
        z,
        T
      )), typeof r.componentDidUpdate == "function" && (e.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || f === t.memoizedProps && R === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && R === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = z), r.props = a, r.state = z, r.context = T, a = _) : (typeof r.componentDidUpdate != "function" || f === t.memoizedProps && R === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && R === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return r = a, Ts(t, e), a = (e.flags & 128) !== 0, r || a ? (r = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : r.render(), e.flags |= 1, t !== null && a ? (e.child = mi(
      e,
      t.child,
      null,
      s
    ), e.child = mi(
      e,
      null,
      n,
      s
    )) : ie(t, e, n, s), e.memoizedState = r.state, t = e.child) : t = hn(
      t,
      e,
      s
    ), t;
  }
  function Hd(t, e, n, a) {
    return oi(), e.flags |= 256, ie(t, e, n, a), e.child;
  }
  var Fo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Wo(t) {
    return { baseLanes: t, cachePool: Rh() };
  }
  function Po(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= De), t;
  }
  function Yd(t, e, n) {
    var a = e.pendingProps, s = !1, r = (e.flags & 128) !== 0, f;
    if ((f = r) || (f = t !== null && t.memoizedState === null ? !1 : (Gt.current & 2) !== 0), f && (s = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (St) {
        if (s ? Un(e) : Bn(), (t = Vt) ? (t = km(
          t,
          Ne
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Dn !== null ? { id: ke, overflow: Fe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Sh(t), n.return = e, e.child = n, ee = e, Vt = null)) : t = null, t === null) throw Rn(e);
        return Ur(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var y = a.children;
      return a = a.fallback, s ? (Bn(), s = e.mode, y = bs(
        { mode: "hidden", children: y },
        s
      ), a = ui(
        a,
        s,
        n,
        null
      ), y.return = e, a.return = e, y.sibling = a, e.child = y, a = e.child, a.memoizedState = Wo(n), a.childLanes = Po(
        t,
        f,
        n
      ), e.memoizedState = Fo, Pa(null, a)) : (Un(e), $o(e, y));
    }
    var T = t.memoizedState;
    if (T !== null && (y = T.dehydrated, y !== null)) {
      if (r)
        e.flags & 256 ? (Un(e), e.flags &= -257, e = Io(
          t,
          e,
          n
        )) : e.memoizedState !== null ? (Bn(), e.child = t.child, e.flags |= 128, e = null) : (Bn(), y = a.fallback, s = e.mode, a = bs(
          { mode: "visible", children: a.children },
          s
        ), y = ui(
          y,
          s,
          n,
          null
        ), y.flags |= 2, a.return = e, y.return = e, a.sibling = y, e.child = a, mi(
          e,
          t.child,
          null,
          n
        ), a = e.child, a.memoizedState = Wo(n), a.childLanes = Po(
          t,
          f,
          n
        ), e.memoizedState = Fo, e = Pa(null, a));
      else if (Un(e), Ur(y)) {
        if (f = y.nextSibling && y.nextSibling.dataset, f) var D = f.dgst;
        f = D, a = Error(o(419)), a.stack = "", a.digest = f, Ha({ value: a, source: null, stack: null }), e = Io(
          t,
          e,
          n
        );
      } else if (Zt || Ki(t, e, n, !1), f = (n & t.childLanes) !== 0, Zt || f) {
        if (f = zt, f !== null && (a = Df(f, n), a !== 0 && a !== T.retryLane))
          throw T.retryLane = a, si(t, a), ye(f, t, a), Jo;
        _r(y) || Os(), e = Io(
          t,
          e,
          n
        );
      } else
        _r(y) ? (e.flags |= 192, e.child = t.child, e = null) : (t = T.treeContext, Vt = Le(
          y.nextSibling
        ), ee = e, St = !0, Cn = null, Ne = !1, t !== null && Ah(e, t), e = $o(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return s ? (Bn(), y = a.fallback, s = e.mode, T = t.child, D = T.sibling, a = sn(T, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = T.subtreeFlags & 65011712, D !== null ? y = sn(
      D,
      y
    ) : (y = ui(
      y,
      s,
      n,
      null
    ), y.flags |= 2), y.return = e, a.return = e, a.sibling = y, e.child = a, Pa(null, a), a = e.child, y = t.child.memoizedState, y === null ? y = Wo(n) : (s = y.cachePool, s !== null ? (T = Kt._currentValue, s = s.parent !== T ? { parent: T, pool: T } : s) : s = Rh(), y = {
      baseLanes: y.baseLanes | n,
      cachePool: s
    }), a.memoizedState = y, a.childLanes = Po(
      t,
      f,
      n
    ), e.memoizedState = Fo, Pa(t.child, a)) : (Un(e), n = t.child, t = n.sibling, n = sn(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function $o(t, e) {
    return e = bs(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function bs(t, e) {
    return t = Ae(22, t, null, e), t.lanes = 0, t;
  }
  function Io(t, e, n) {
    return mi(e, t.child, null, n), t = $o(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function qd(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), mo(t.return, e, n);
  }
  function tr(t, e, n, a, s, r) {
    var f = t.memoizedState;
    f === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: s,
      treeForkCount: r
    } : (f.isBackwards = e, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = n, f.tailMode = s, f.treeForkCount = r);
  }
  function Gd(t, e, n) {
    var a = e.pendingProps, s = a.revealOrder, r = a.tail;
    a = a.children;
    var f = Gt.current, y = (f & 2) !== 0;
    if (y ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, Q(Gt, f), ie(t, e, a, n), a = St ? wa : 0, !y && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && qd(t, n, e);
        else if (t.tag === 19)
          qd(t, n, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (s) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          t = n.alternate, t !== null && rs(t) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null), tr(
          e,
          !1,
          s,
          n,
          r,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (t = s.alternate, t !== null && rs(t) === null) {
            e.child = s;
            break;
          }
          t = s.sibling, s.sibling = n, n = s, s = t;
        }
        tr(
          e,
          !0,
          n,
          null,
          r,
          a
        );
        break;
      case "together":
        tr(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function hn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Ln |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (Ki(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(o(153));
    if (e.child !== null) {
      for (t = e.child, n = sn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = sn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function er(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && es(t)));
  }
  function r1(t, e, n) {
    switch (e.tag) {
      case 3:
        qt(e, e.stateNode.containerInfo), zn(e, Kt, t.memoizedState.cache), oi();
        break;
      case 27:
      case 5:
        An(e);
        break;
      case 4:
        qt(e, e.stateNode.containerInfo);
        break;
      case 10:
        zn(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Do(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Un(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? Yd(t, e, n) : (Un(e), t = hn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        Un(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (a = (n & e.childLanes) !== 0, a || (Ki(
          t,
          e,
          n,
          !1
        ), a = (n & e.childLanes) !== 0), s) {
          if (a)
            return Gd(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (s = e.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Q(Gt, Gt.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, Bd(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        zn(e, Kt, t.memoizedState.cache);
    }
    return hn(t, e, n);
  }
  function Xd(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Zt = !0;
      else {
        if (!er(t, n) && (e.flags & 128) === 0)
          return Zt = !1, r1(
            t,
            e,
            n
          );
        Zt = (t.flags & 131072) !== 0;
      }
    else
      Zt = !1, St && (e.flags & 1048576) !== 0 && bh(e, wa, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = hi(e.elementType), e.type = t, typeof t == "function")
            lo(t) ? (a = yi(t, a), e.tag = 1, e = wd(
              null,
              e,
              t,
              a,
              n
            )) : (e.tag = 0, e = ko(
              null,
              e,
              t,
              a,
              n
            ));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === Y) {
                e.tag = 11, e = Vd(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (s === X) {
                e.tag = 14, e = _d(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              }
            }
            throw e = Ut(t) || t, Error(o(306, e, ""));
          }
        }
        return e;
      case 0:
        return ko(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return a = e.type, s = yi(
          a,
          e.pendingProps
        ), wd(
          t,
          e,
          a,
          s,
          n
        );
      case 3:
        t: {
          if (qt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(o(387));
          a = e.pendingProps;
          var r = e.memoizedState;
          s = r.element, bo(t, e), Za(e, a, null, n);
          var f = e.memoizedState;
          if (a = f.cache, zn(e, Kt, a), a !== r.cache && po(
            e,
            [Kt],
            n,
            !0
          ), Qa(), a = f.element, r.isDehydrated)
            if (r = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, e.updateQueue.baseState = r, e.memoizedState = r, e.flags & 256) {
              e = Hd(
                t,
                e,
                a,
                n
              );
              break t;
            } else if (a !== s) {
              s = _e(
                Error(o(424)),
                e
              ), Ha(s), e = Hd(
                t,
                e,
                a,
                n
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Vt = Le(t.firstChild), ee = e, St = !0, Cn = null, Ne = !0, n = Bh(
                e,
                null,
                a,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (oi(), a === s) {
              e = hn(
                t,
                e,
                n
              );
              break t;
            }
            ie(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Ts(t, e), t === null ? (n = tp(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : St || (n = e.type, t = e.pendingProps, a = Ls(
          ot.current
        ).createElement(n), a[te] = e, a[ce] = t, ae(a, n, t), $t(a), e.stateNode = a) : e.memoizedState = tp(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return An(e), t === null && St && (a = e.stateNode = Pm(
          e.type,
          e.pendingProps,
          ot.current
        ), ee = e, Ne = !0, s = Vt, Gn(e.type) ? (Br = s, Vt = Le(a.firstChild)) : Vt = s), ie(
          t,
          e,
          e.pendingProps.children,
          n
        ), Ts(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && St && ((s = a = Vt) && (a = H1(
          a,
          e.type,
          e.pendingProps,
          Ne
        ), a !== null ? (e.stateNode = a, ee = e, Vt = Le(a.firstChild), Ne = !1, s = !0) : s = !1), s || Rn(e)), An(e), s = e.type, r = e.pendingProps, f = t !== null ? t.memoizedProps : null, a = r.children, zr(s, r) ? a = null : f !== null && zr(s, f) && (e.flags |= 32), e.memoizedState !== null && (s = Ro(
          t,
          e,
          t1,
          null,
          null,
          n
        ), hl._currentValue = s), Ts(t, e), ie(t, e, a, n), e.child;
      case 6:
        return t === null && St && ((t = n = Vt) && (n = Y1(
          n,
          e.pendingProps,
          Ne
        ), n !== null ? (e.stateNode = n, ee = e, Vt = null, t = !0) : t = !1), t || Rn(e)), null;
      case 13:
        return Yd(t, e, n);
      case 4:
        return qt(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = mi(
          e,
          null,
          a,
          n
        ) : ie(t, e, a, n), e.child;
      case 11:
        return Vd(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return ie(
          t,
          e,
          e.pendingProps,
          n
        ), e.child;
      case 8:
        return ie(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return ie(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return a = e.pendingProps, zn(e, e.type, a.value), ie(t, e, a.children, n), e.child;
      case 9:
        return s = e.type._context, a = e.pendingProps.children, ci(e), s = ne(s), a = a(s), e.flags |= 1, ie(t, e, a, n), e.child;
      case 14:
        return _d(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return Ud(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return Gd(t, e, n);
      case 31:
        return o1(t, e, n);
      case 22:
        return Bd(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return ci(e), a = ne(Kt), t === null ? (s = vo(), s === null && (s = zt, r = yo(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= n), s = r), e.memoizedState = { parent: a, cache: s }, To(e), zn(e, Kt, s)) : ((t.lanes & n) !== 0 && (bo(t, e), Za(e, null, null, n), Qa()), s = t.memoizedState, r = e.memoizedState, s.parent !== a ? (s = { parent: a, cache: a }, e.memoizedState = s, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s), zn(e, Kt, a)) : (a = r.cache, zn(e, Kt, a), a !== s.cache && po(
          e,
          [Kt],
          n,
          !0
        ))), ie(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function dn(t) {
    t.flags |= 4;
  }
  function nr(t, e, n, a, s) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (s & 335544128) === s)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (ym()) t.flags |= 8192;
        else
          throw di = ls, So;
    } else t.flags &= -16777217;
  }
  function Kd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !lp(e))
      if (ym()) t.flags |= 8192;
      else
        throw di = ls, So;
  }
  function As(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Ef() : 536870912, t.lanes |= e, na |= e);
  }
  function $a(t, e) {
    if (!St)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = t.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function _t(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, a = 0;
    if (e)
      for (var s = t.child; s !== null; )
        n |= s.lanes | s.childLanes, a |= s.subtreeFlags & 65011712, a |= s.flags & 65011712, s.return = t, s = s.sibling;
    else
      for (s = t.child; s !== null; )
        n |= s.lanes | s.childLanes, a |= s.subtreeFlags, a |= s.flags, s.return = t, s = s.sibling;
    return t.subtreeFlags |= a, t.childLanes = n, e;
  }
  function c1(t, e, n) {
    var a = e.pendingProps;
    switch (ro(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _t(e), null;
      case 1:
        return _t(e), null;
      case 3:
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), rn(Kt), Nt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Xi(e) ? dn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, fo())), _t(e), null;
      case 26:
        var s = e.type, r = e.memoizedState;
        return t === null ? (dn(e), r !== null ? (_t(e), Kd(e, r)) : (_t(e), nr(
          e,
          s,
          null,
          a,
          n
        ))) : r ? r !== t.memoizedState ? (dn(e), _t(e), Kd(e, r)) : (_t(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && dn(e), _t(e), nr(
          e,
          s,
          t,
          a,
          n
        )), null;
      case 27:
        if (In(e), n = ot.current, s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && dn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(o(166));
            return _t(e), null;
          }
          t = F.current, Xi(e) ? Eh(e) : (t = Pm(s, a, n), e.stateNode = t, dn(e));
        }
        return _t(e), null;
      case 5:
        if (In(e), s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && dn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(o(166));
            return _t(e), null;
          }
          if (r = F.current, Xi(e))
            Eh(e);
          else {
            var f = Ls(
              ot.current
            );
            switch (r) {
              case 1:
                r = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                r = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    r = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    r = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    r = f.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? r.multiple = !0 : a.size && (r.size = a.size);
                    break;
                  default:
                    r = typeof a.is == "string" ? f.createElement(s, { is: a.is }) : f.createElement(s);
                }
            }
            r[te] = e, r[ce] = a;
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                r.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e)
                  break t;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            e.stateNode = r;
            t: switch (ae(r, s, a), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && dn(e);
          }
        }
        return _t(e), nr(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && dn(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(o(166));
          if (t = ot.current, Xi(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, s = ee, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  a = s.memoizedProps;
              }
            t[te] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Ym(t.nodeValue, n)), t || Rn(e, !0);
          } else
            t = Ls(t).createTextNode(
              a
            ), t[te] = e, e.stateNode = t;
        }
        return _t(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Xi(e), n !== null) {
            if (t === null) {
              if (!a) throw Error(o(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557));
              t[te] = e;
            } else
              oi(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            _t(e), t = !1;
          } else
            n = fo(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (Me(e), e) : (Me(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(o(558));
        }
        return _t(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (s = Xi(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!s) throw Error(o(318));
              if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(o(317));
              s[te] = e;
            } else
              oi(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            _t(e), s = !1;
          } else
            s = fo(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return e.flags & 256 ? (Me(e), e) : (Me(e), null);
        }
        return Me(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, s = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (s = a.alternate.memoizedState.cachePool.pool), r = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (r = a.memoizedState.cachePool.pool), r !== s && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), As(e, e.updateQueue), _t(e), null);
      case 4:
        return Nt(), t === null && Mr(e.stateNode.containerInfo), _t(e), null;
      case 10:
        return rn(e.type), _t(e), null;
      case 19:
        if (N(Gt), a = e.memoizedState, a === null) return _t(e), null;
        if (s = (e.flags & 128) !== 0, r = a.rendering, r === null)
          if (s) $a(a, !1);
          else {
            if (Ht !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (r = rs(t), r !== null) {
                  for (e.flags |= 128, $a(a, !1), t = r.updateQueue, e.updateQueue = t, As(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    vh(n, t), n = n.sibling;
                  return Q(
                    Gt,
                    Gt.current & 1 | 2
                  ), St && un(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && ve() > Cs && (e.flags |= 128, s = !0, $a(a, !1), e.lanes = 4194304);
          }
        else {
          if (!s)
            if (t = rs(r), t !== null) {
              if (e.flags |= 128, s = !0, t = t.updateQueue, e.updateQueue = t, As(e, t), $a(a, !0), a.tail === null && a.tailMode === "hidden" && !r.alternate && !St)
                return _t(e), null;
            } else
              2 * ve() - a.renderingStartTime > Cs && n !== 536870912 && (e.flags |= 128, s = !0, $a(a, !1), e.lanes = 4194304);
          a.isBackwards ? (r.sibling = e.child, e.child = r) : (t = a.last, t !== null ? t.sibling = r : e.child = r, a.last = r);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ve(), t.sibling = null, n = Gt.current, Q(
          Gt,
          s ? n & 1 | 2 : n & 1
        ), St && un(e, a.treeForkCount), t) : (_t(e), null);
      case 22:
      case 23:
        return Me(e), xo(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (_t(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : _t(e), n = e.updateQueue, n !== null && As(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && N(fi), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), rn(Kt), _t(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function f1(t, e) {
    switch (ro(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return rn(Kt), Nt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return In(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Me(e), e.alternate === null)
            throw Error(o(340));
          oi();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Me(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(o(340));
          oi();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return N(Gt), null;
      case 4:
        return Nt(), null;
      case 10:
        return rn(e.type), null;
      case 22:
      case 23:
        return Me(e), xo(), t !== null && N(fi), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return rn(Kt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Qd(t, e) {
    switch (ro(e), e.tag) {
      case 3:
        rn(Kt), Nt();
        break;
      case 26:
      case 27:
      case 5:
        In(e);
        break;
      case 4:
        Nt();
        break;
      case 31:
        e.memoizedState !== null && Me(e);
        break;
      case 13:
        Me(e);
        break;
      case 19:
        N(Gt);
        break;
      case 10:
        rn(e.type);
        break;
      case 22:
      case 23:
        Me(e), xo(), t !== null && N(fi);
        break;
      case 24:
        rn(Kt);
    }
  }
  function Ia(t, e) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var s = a.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var r = n.create, f = n.inst;
            a = r(), f.destroy = a;
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (y) {
      Mt(e, e.return, y);
    }
  }
  function Nn(t, e, n) {
    try {
      var a = e.updateQueue, s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        a = r;
        do {
          if ((a.tag & t) === t) {
            var f = a.inst, y = f.destroy;
            if (y !== void 0) {
              f.destroy = void 0, s = e;
              var T = n, D = y;
              try {
                D();
              } catch (_) {
                Mt(
                  s,
                  T,
                  _
                );
              }
            }
          }
          a = a.next;
        } while (a !== r);
      }
    } catch (_) {
      Mt(e, e.return, _);
    }
  }
  function Zd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        jh(e, n);
      } catch (a) {
        Mt(t, t.return, a);
      }
    }
  }
  function Jd(t, e, n) {
    n.props = yi(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Mt(t, e, a);
    }
  }
  function tl(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(a) : n.current = a;
      }
    } catch (s) {
      Mt(t, e, s);
    }
  }
  function We(t, e) {
    var n = t.ref, a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (s) {
          Mt(t, e, s);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Mt(t, e, s);
        }
      else n.current = null;
  }
  function kd(t) {
    var e = t.type, n = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (s) {
      Mt(t, t.return, s);
    }
  }
  function ir(t, e, n) {
    try {
      var a = t.stateNode;
      U1(a, t.type, n, e), a[ce] = e;
    } catch (s) {
      Mt(t, t.return, s);
    }
  }
  function Fd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Gn(t.type) || t.tag === 4;
  }
  function ar(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Fd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Gn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function lr(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = an));
    else if (a !== 4 && (a === 27 && Gn(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
      for (lr(t, e, n), t = t.sibling; t !== null; )
        lr(t, e, n), t = t.sibling;
  }
  function Es(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (a !== 4 && (a === 27 && Gn(t.type) && (n = t.stateNode), t = t.child, t !== null))
      for (Es(t, e, n), t = t.sibling; t !== null; )
        Es(t, e, n), t = t.sibling;
  }
  function Wd(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var a = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      ae(e, a, n), e[te] = t, e[ce] = n;
    } catch (r) {
      Mt(t, t.return, r);
    }
  }
  var mn = !1, Jt = !1, sr = !1, Pd = typeof WeakSet == "function" ? WeakSet : Set, It = null;
  function h1(t, e) {
    if (t = t.containerInfo, Cr = Ks, t = rh(t), $u(t)) {
      if ("selectionStart" in t)
        var n = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          n = (n = t.ownerDocument) && n.defaultView || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var s = a.anchorOffset, r = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, r.nodeType;
            } catch {
              n = null;
              break t;
            }
            var f = 0, y = -1, T = -1, D = 0, _ = 0, L = t, R = null;
            e: for (; ; ) {
              for (var z; L !== n || s !== 0 && L.nodeType !== 3 || (y = f + s), L !== r || a !== 0 && L.nodeType !== 3 || (T = f + a), L.nodeType === 3 && (f += L.nodeValue.length), (z = L.firstChild) !== null; )
                R = L, L = z;
              for (; ; ) {
                if (L === t) break e;
                if (R === n && ++D === s && (y = f), R === r && ++_ === a && (T = f), (z = L.nextSibling) !== null) break;
                L = R, R = L.parentNode;
              }
              L = z;
            }
            n = y === -1 || T === -1 ? null : { start: y, end: T };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Rr = { focusedElem: t, selectionRange: n }, Ks = !1, It = e; It !== null; )
      if (e = It, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, It = t;
      else
        for (; It !== null; ) {
          switch (e = It, r = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (n = 0; n < t.length; n++)
                  s = t[n], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && r !== null) {
                t = void 0, n = e, s = r.memoizedProps, r = r.memoizedState, a = n.stateNode;
                try {
                  var W = yi(
                    n.type,
                    s
                  );
                  t = a.getSnapshotBeforeUpdate(
                    W,
                    r
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (at) {
                  Mt(
                    n,
                    n.return,
                    at
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9)
                  Vr(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Vr(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, It = t;
            break;
          }
          It = e.return;
        }
  }
  function $d(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        yn(t, n), a & 4 && Ia(5, n);
        break;
      case 1:
        if (yn(t, n), a & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (f) {
              Mt(n, n.return, f);
            }
          else {
            var s = yi(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                s,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              Mt(
                n,
                n.return,
                f
              );
            }
          }
        a & 64 && Zd(n), a & 512 && tl(n, n.return);
        break;
      case 3:
        if (yn(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            jh(t, e);
          } catch (f) {
            Mt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Wd(n);
      case 26:
      case 5:
        yn(t, n), e === null && a & 4 && kd(n), a & 512 && tl(n, n.return);
        break;
      case 12:
        yn(t, n);
        break;
      case 31:
        yn(t, n), a & 4 && em(t, n);
        break;
      case 13:
        yn(t, n), a & 4 && nm(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = b1.bind(
          null,
          n
        ), q1(t, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || mn, !a) {
          e = e !== null && e.memoizedState !== null || Jt, s = mn;
          var r = Jt;
          mn = a, (Jt = e) && !r ? gn(
            t,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : yn(t, n), mn = s, Jt = r;
        }
        break;
      case 30:
        break;
      default:
        yn(t, n);
    }
  }
  function Id(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Id(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Nu(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var jt = null, he = !1;
  function pn(t, e, n) {
    for (n = n.child; n !== null; )
      tm(t, e, n), n = n.sibling;
  }
  function tm(t, e, n) {
    if (Se && typeof Se.onCommitFiberUnmount == "function")
      try {
        Se.onCommitFiberUnmount(Ma, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Jt || We(n, e), pn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Jt || We(n, e);
        var a = jt, s = he;
        Gn(n.type) && (jt = n.stateNode, he = !1), pn(
          t,
          e,
          n
        ), rl(n.stateNode), jt = a, he = s;
        break;
      case 5:
        Jt || We(n, e);
      case 6:
        if (a = jt, s = he, jt = null, pn(
          t,
          e,
          n
        ), jt = a, he = s, jt !== null)
          if (he)
            try {
              (jt.nodeType === 9 ? jt.body : jt.nodeName === "HTML" ? jt.ownerDocument.body : jt).removeChild(n.stateNode);
            } catch (r) {
              Mt(
                n,
                e,
                r
              );
            }
          else
            try {
              jt.removeChild(n.stateNode);
            } catch (r) {
              Mt(
                n,
                e,
                r
              );
            }
        break;
      case 18:
        jt !== null && (he ? (t = jt, Zm(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), ca(t)) : Zm(jt, n.stateNode));
        break;
      case 4:
        a = jt, s = he, jt = n.stateNode.containerInfo, he = !0, pn(
          t,
          e,
          n
        ), jt = a, he = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Nn(2, n, e), Jt || Nn(4, n, e), pn(
          t,
          e,
          n
        );
        break;
      case 1:
        Jt || (We(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && Jd(
          n,
          e,
          a
        )), pn(
          t,
          e,
          n
        );
        break;
      case 21:
        pn(
          t,
          e,
          n
        );
        break;
      case 22:
        Jt = (a = Jt) || n.memoizedState !== null, pn(
          t,
          e,
          n
        ), Jt = a;
        break;
      default:
        pn(
          t,
          e,
          n
        );
    }
  }
  function em(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        ca(t);
      } catch (n) {
        Mt(e, e.return, n);
      }
    }
  }
  function nm(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        ca(t);
      } catch (n) {
        Mt(e, e.return, n);
      }
  }
  function d1(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Pd()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Pd()), e;
      default:
        throw Error(o(435, t.tag));
    }
  }
  function Ms(t, e) {
    var n = d1(t);
    e.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var s = A1.bind(null, t, a);
        a.then(s, s);
      }
    });
  }
  function de(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a], r = t, f = e, y = f;
        t: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Gn(y.type)) {
                jt = y.stateNode, he = !1;
                break t;
              }
              break;
            case 5:
              jt = y.stateNode, he = !1;
              break t;
            case 3:
            case 4:
              jt = y.stateNode.containerInfo, he = !0;
              break t;
          }
          y = y.return;
        }
        if (jt === null) throw Error(o(160));
        tm(r, f, s), jt = null, he = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        im(e, t), e = e.sibling;
  }
  var Ge = null;
  function im(t, e) {
    var n = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        de(e, t), me(t), a & 4 && (Nn(3, t, t.return), Ia(3, t), Nn(5, t, t.return));
        break;
      case 1:
        de(e, t), me(t), a & 512 && (Jt || n === null || We(n, n.return)), a & 64 && mn && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var s = Ge;
        if (de(e, t), me(t), a & 512 && (Jt || n === null || We(n, n.return)), a & 4) {
          var r = n !== null ? n.memoizedState : null;
          if (a = t.memoizedState, n === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, n = t.memoizedProps, s = s.ownerDocument || s;
                  e: switch (a) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[Ca] || r[te] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(a), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), ae(r, a, n), r[te] = t, $t(r), a = r;
                      break t;
                    case "link":
                      var f = ip(
                        "link",
                        "href",
                        s
                      ).get(a + (n.href || ""));
                      if (f) {
                        for (var y = 0; y < f.length; y++)
                          if (r = f[y], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            f.splice(y, 1);
                            break e;
                          }
                      }
                      r = s.createElement(a), ae(r, a, n), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (f = ip(
                        "meta",
                        "content",
                        s
                      ).get(a + (n.content || ""))) {
                        for (y = 0; y < f.length; y++)
                          if (r = f[y], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            f.splice(y, 1);
                            break e;
                          }
                      }
                      r = s.createElement(a), ae(r, a, n), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  r[te] = t, $t(r), a = r;
                }
                t.stateNode = a;
              } else
                ap(
                  s,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = np(
                s,
                a,
                t.memoizedProps
              );
          else
            r !== a ? (r === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : r.count--, a === null ? ap(
              s,
              t.type,
              t.stateNode
            ) : np(
              s,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && ir(
              t,
              t.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        de(e, t), me(t), a & 512 && (Jt || n === null || We(n, n.return)), n !== null && a & 4 && ir(
          t,
          t.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (de(e, t), me(t), a & 512 && (Jt || n === null || We(n, n.return)), t.flags & 32) {
          s = t.stateNode;
          try {
            Ui(s, "");
          } catch (W) {
            Mt(t, t.return, W);
          }
        }
        a & 4 && t.stateNode != null && (s = t.memoizedProps, ir(
          t,
          s,
          n !== null ? n.memoizedProps : s
        )), a & 1024 && (sr = !0);
        break;
      case 6:
        if (de(e, t), me(t), a & 4) {
          if (t.stateNode === null)
            throw Error(o(162));
          a = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = a;
          } catch (W) {
            Mt(t, t.return, W);
          }
        }
        break;
      case 3:
        if (Ys = null, s = Ge, Ge = ws(e.containerInfo), de(e, t), Ge = s, me(t), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            ca(e.containerInfo);
          } catch (W) {
            Mt(t, t.return, W);
          }
        sr && (sr = !1, am(t));
        break;
      case 4:
        a = Ge, Ge = ws(
          t.stateNode.containerInfo
        ), de(e, t), me(t), Ge = a;
        break;
      case 12:
        de(e, t), me(t);
        break;
      case 31:
        de(e, t), me(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Ms(t, a)));
        break;
      case 13:
        de(e, t), me(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Ds = ve()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Ms(t, a)));
        break;
      case 22:
        s = t.memoizedState !== null;
        var T = n !== null && n.memoizedState !== null, D = mn, _ = Jt;
        if (mn = D || s, Jt = _ || T, de(e, t), Jt = _, mn = D, me(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = s ? e._visibility & -2 : e._visibility | 1, s && (n === null || T || mn || Jt || gi(t)), n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                T = n = e;
                try {
                  if (r = T.stateNode, s)
                    f = r.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    y = T.stateNode;
                    var L = T.memoizedProps.style, R = L != null && L.hasOwnProperty("display") ? L.display : null;
                    y.style.display = R == null || typeof R == "boolean" ? "" : ("" + R).trim();
                  }
                } catch (W) {
                  Mt(T, T.return, W);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                T = e;
                try {
                  T.stateNode.nodeValue = s ? "" : T.memoizedProps;
                } catch (W) {
                  Mt(T, T.return, W);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                T = e;
                try {
                  var z = T.stateNode;
                  s ? Jm(z, !0) : Jm(T.stateNode, !1);
                } catch (W) {
                  Mt(T, T.return, W);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), e = e.return;
            }
            n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, Ms(t, n))));
        break;
      case 19:
        de(e, t), me(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Ms(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        de(e, t), me(t);
    }
  }
  function me(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (Fd(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode, r = ar(t);
            Es(t, r, s);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (Ui(f, ""), n.flags &= -33);
            var y = ar(t);
            Es(t, y, f);
            break;
          case 3:
          case 4:
            var T = n.stateNode.containerInfo, D = ar(t);
            lr(
              t,
              D,
              T
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (_) {
        Mt(t, t.return, _);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function am(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        am(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function yn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        $d(t, e.alternate, e), e = e.sibling;
  }
  function gi(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Nn(4, e, e.return), gi(e);
          break;
        case 1:
          We(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && Jd(
            e,
            e.return,
            n
          ), gi(e);
          break;
        case 27:
          rl(e.stateNode);
        case 26:
        case 5:
          We(e, e.return), gi(e);
          break;
        case 22:
          e.memoizedState === null && gi(e);
          break;
        case 30:
          gi(e);
          break;
        default:
          gi(e);
      }
      t = t.sibling;
    }
  }
  function gn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, s = t, r = e, f = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          gn(
            s,
            r,
            n
          ), Ia(4, r);
          break;
        case 1:
          if (gn(
            s,
            r,
            n
          ), a = r, s = a.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (D) {
              Mt(a, a.return, D);
            }
          if (a = r, s = a.updateQueue, s !== null) {
            var y = a.stateNode;
            try {
              var T = s.shared.hiddenCallbacks;
              if (T !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++)
                  Nh(T[s], y);
            } catch (D) {
              Mt(a, a.return, D);
            }
          }
          n && f & 64 && Zd(r), tl(r, r.return);
          break;
        case 27:
          Wd(r);
        case 26:
        case 5:
          gn(
            s,
            r,
            n
          ), n && a === null && f & 4 && kd(r), tl(r, r.return);
          break;
        case 12:
          gn(
            s,
            r,
            n
          );
          break;
        case 31:
          gn(
            s,
            r,
            n
          ), n && f & 4 && em(s, r);
          break;
        case 13:
          gn(
            s,
            r,
            n
          ), n && f & 4 && nm(s, r);
          break;
        case 22:
          r.memoizedState === null && gn(
            s,
            r,
            n
          ), tl(r, r.return);
          break;
        case 30:
          break;
        default:
          gn(
            s,
            r,
            n
          );
      }
      e = e.sibling;
    }
  }
  function ur(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Ya(n));
  }
  function or(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ya(t));
  }
  function Xe(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        lm(
          t,
          e,
          n,
          a
        ), e = e.sibling;
  }
  function lm(t, e, n, a) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Xe(
          t,
          e,
          n,
          a
        ), s & 2048 && Ia(9, e);
        break;
      case 1:
        Xe(
          t,
          e,
          n,
          a
        );
        break;
      case 3:
        Xe(
          t,
          e,
          n,
          a
        ), s & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ya(t)));
        break;
      case 12:
        if (s & 2048) {
          Xe(
            t,
            e,
            n,
            a
          ), t = e.stateNode;
          try {
            var r = e.memoizedProps, f = r.id, y = r.onPostCommit;
            typeof y == "function" && y(
              f,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (T) {
            Mt(e, e.return, T);
          }
        } else
          Xe(
            t,
            e,
            n,
            a
          );
        break;
      case 31:
        Xe(
          t,
          e,
          n,
          a
        );
        break;
      case 13:
        Xe(
          t,
          e,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        r = e.stateNode, f = e.alternate, e.memoizedState !== null ? r._visibility & 2 ? Xe(
          t,
          e,
          n,
          a
        ) : el(t, e) : r._visibility & 2 ? Xe(
          t,
          e,
          n,
          a
        ) : (r._visibility |= 2, Ii(
          t,
          e,
          n,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && ur(f, e);
        break;
      case 24:
        Xe(
          t,
          e,
          n,
          a
        ), s & 2048 && or(e.alternate, e);
        break;
      default:
        Xe(
          t,
          e,
          n,
          a
        );
    }
  }
  function Ii(t, e, n, a, s) {
    for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var r = t, f = e, y = n, T = a, D = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ii(
            r,
            f,
            y,
            T,
            s
          ), Ia(8, f);
          break;
        case 23:
          break;
        case 22:
          var _ = f.stateNode;
          f.memoizedState !== null ? _._visibility & 2 ? Ii(
            r,
            f,
            y,
            T,
            s
          ) : el(
            r,
            f
          ) : (_._visibility |= 2, Ii(
            r,
            f,
            y,
            T,
            s
          )), s && D & 2048 && ur(
            f.alternate,
            f
          );
          break;
        case 24:
          Ii(
            r,
            f,
            y,
            T,
            s
          ), s && D & 2048 && or(f.alternate, f);
          break;
        default:
          Ii(
            r,
            f,
            y,
            T,
            s
          );
      }
      e = e.sibling;
    }
  }
  function el(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, a = e, s = a.flags;
        switch (a.tag) {
          case 22:
            el(n, a), s & 2048 && ur(
              a.alternate,
              a
            );
            break;
          case 24:
            el(n, a), s & 2048 && or(a.alternate, a);
            break;
          default:
            el(n, a);
        }
        e = e.sibling;
      }
  }
  var nl = 8192;
  function ta(t, e, n) {
    if (t.subtreeFlags & nl)
      for (t = t.child; t !== null; )
        sm(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function sm(t, e, n) {
    switch (t.tag) {
      case 26:
        ta(
          t,
          e,
          n
        ), t.flags & nl && t.memoizedState !== null && I1(
          n,
          Ge,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        ta(
          t,
          e,
          n
        );
        break;
      case 3:
      case 4:
        var a = Ge;
        Ge = ws(t.stateNode.containerInfo), ta(
          t,
          e,
          n
        ), Ge = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = nl, nl = 16777216, ta(
          t,
          e,
          n
        ), nl = a) : ta(
          t,
          e,
          n
        ));
        break;
      default:
        ta(
          t,
          e,
          n
        );
    }
  }
  function um(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function il(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          It = a, rm(
            a,
            t
          );
        }
      um(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        om(t), t = t.sibling;
  }
  function om(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        il(t), t.flags & 2048 && Nn(9, t, t.return);
        break;
      case 3:
        il(t);
        break;
      case 12:
        il(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, xs(t)) : il(t);
        break;
      default:
        il(t);
    }
  }
  function xs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          It = a, rm(
            a,
            t
          );
        }
      um(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Nn(8, e, e.return), xs(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, xs(e));
          break;
        default:
          xs(e);
      }
      t = t.sibling;
    }
  }
  function rm(t, e) {
    for (; It !== null; ) {
      var n = It;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Nn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ya(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, It = a;
      else
        t: for (n = t; It !== null; ) {
          a = It;
          var s = a.sibling, r = a.return;
          if (Id(a), a === n) {
            It = null;
            break t;
          }
          if (s !== null) {
            s.return = r, It = s;
            break t;
          }
          It = r;
        }
    }
  }
  var m1 = {
    getCacheForType: function(t) {
      var e = ne(Kt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return ne(Kt).controller.signal;
    }
  }, p1 = typeof WeakMap == "function" ? WeakMap : Map, At = 0, zt = null, dt = null, yt = 0, Et = 0, xe = null, jn = !1, ea = !1, rr = !1, vn = 0, Ht = 0, Ln = 0, vi = 0, cr = 0, De = 0, na = 0, al = null, pe = null, fr = !1, Ds = 0, cm = 0, Cs = 1 / 0, Rs = null, wn = null, Wt = 0, Hn = null, ia = null, Sn = 0, hr = 0, dr = null, fm = null, ll = 0, mr = null;
  function Ce() {
    return (At & 2) !== 0 && yt !== 0 ? yt & -yt : O.T !== null ? Tr() : Cf();
  }
  function hm() {
    if (De === 0)
      if ((yt & 536870912) === 0 || St) {
        var t = jl;
        jl <<= 1, (jl & 3932160) === 0 && (jl = 262144), De = t;
      } else De = 536870912;
    return t = Ee.current, t !== null && (t.flags |= 32), De;
  }
  function ye(t, e, n) {
    (t === zt && (Et === 2 || Et === 9) || t.cancelPendingCommit !== null) && (aa(t, 0), Yn(
      t,
      yt,
      De,
      !1
    )), Da(t, n), ((At & 2) === 0 || t !== zt) && (t === zt && ((At & 2) === 0 && (vi |= n), Ht === 4 && Yn(
      t,
      yt,
      De,
      !1
    )), Pe(t));
  }
  function dm(t, e, n) {
    if ((At & 6) !== 0) throw Error(o(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || xa(t, e), s = a ? v1(t, e) : yr(t, e, !0), r = a;
    do {
      if (s === 0) {
        ea && !a && Yn(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, r && !y1(n)) {
          s = yr(t, e, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = e, t.errorRecoveryDisabledLanes & r)
            var f = 0;
          else
            f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            e = f;
            t: {
              var y = t;
              s = al;
              var T = y.current.memoizedState.isDehydrated;
              if (T && (aa(y, f).flags |= 256), f = yr(
                y,
                f,
                !1
              ), f !== 2) {
                if (rr && !T) {
                  y.errorRecoveryDisabledLanes |= r, vi |= r, s = 4;
                  break t;
                }
                r = pe, pe = s, r !== null && (pe === null ? pe = r : pe.push.apply(
                  pe,
                  r
                ));
              }
              s = f;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          aa(t, 0), Yn(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, r = s, r) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Yn(
                a,
                e,
                De,
                !jn
              );
              break t;
            case 2:
              pe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && (s = Ds + 300 - ve(), 10 < s)) {
            if (Yn(
              a,
              e,
              De,
              !jn
            ), wl(a, 0, !0) !== 0) break t;
            Sn = e, a.timeoutHandle = Km(
              mm.bind(
                null,
                a,
                n,
                pe,
                Rs,
                fr,
                e,
                De,
                vi,
                na,
                jn,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break t;
          }
          mm(
            a,
            n,
            pe,
            Rs,
            fr,
            e,
            De,
            vi,
            na,
            jn,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Pe(t);
  }
  function mm(t, e, n, a, s, r, f, y, T, D, _, L, R, z) {
    if (t.timeoutHandle = -1, L = e.subtreeFlags, L & 8192 || (L & 16785408) === 16785408) {
      L = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: an
      }, sm(
        e,
        r,
        L
      );
      var W = (r & 62914560) === r ? Ds - ve() : (r & 4194048) === r ? cm - ve() : 0;
      if (W = tS(
        L,
        W
      ), W !== null) {
        Sn = r, t.cancelPendingCommit = W(
          Am.bind(
            null,
            t,
            e,
            r,
            n,
            a,
            s,
            f,
            y,
            T,
            _,
            L,
            null,
            R,
            z
          )
        ), Yn(t, r, f, !D);
        return;
      }
    }
    Am(
      t,
      e,
      r,
      n,
      a,
      s,
      f,
      y,
      T
    );
  }
  function y1(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var s = n[a], r = s.getSnapshot;
          s = s.value;
          try {
            if (!be(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Yn(t, e, n, a) {
    e &= ~cr, e &= ~vi, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var s = e; 0 < s; ) {
      var r = 31 - Te(s), f = 1 << r;
      a[r] = -1, s &= ~f;
    }
    n !== 0 && Mf(t, n, e);
  }
  function zs() {
    return (At & 6) === 0 ? (sl(0), !1) : !0;
  }
  function pr() {
    if (dt !== null) {
      if (Et === 0)
        var t = dt.return;
      else
        t = dt, on = ri = null, Vo(t), ki = null, Ga = 0, t = dt;
      for (; t !== null; )
        Qd(t.alternate, t), t = t.return;
      dt = null;
    }
  }
  function aa(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, j1(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Sn = 0, pr(), zt = t, dt = n = sn(t.current, null), yt = e, Et = 0, xe = null, jn = !1, ea = xa(t, e), rr = !1, na = De = cr = vi = Ln = Ht = 0, pe = al = null, fr = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var s = 31 - Te(a), r = 1 << s;
        e |= t[s], a &= ~r;
      }
    return vn = e, Wl(), n;
  }
  function pm(t, e) {
    ct = null, O.H = Wa, e === Ji || e === as ? (e = Vh(), Et = 3) : e === So ? (e = Vh(), Et = 4) : Et = e === Jo ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, xe = e, dt === null && (Ht = 1, vs(
      t,
      _e(e, t.current)
    ));
  }
  function ym() {
    var t = Ee.current;
    return t === null ? !0 : (yt & 4194048) === yt ? je === null : (yt & 62914560) === yt || (yt & 536870912) !== 0 ? t === je : !1;
  }
  function gm() {
    var t = O.H;
    return O.H = Wa, t === null ? Wa : t;
  }
  function vm() {
    var t = O.A;
    return O.A = m1, t;
  }
  function Os() {
    Ht = 4, jn || (yt & 4194048) !== yt && Ee.current !== null || (ea = !0), (Ln & 134217727) === 0 && (vi & 134217727) === 0 || zt === null || Yn(
      zt,
      yt,
      De,
      !1
    );
  }
  function yr(t, e, n) {
    var a = At;
    At |= 2;
    var s = gm(), r = vm();
    (zt !== t || yt !== e) && (Rs = null, aa(t, e)), e = !1;
    var f = Ht;
    t: do
      try {
        if (Et !== 0 && dt !== null) {
          var y = dt, T = xe;
          switch (Et) {
            case 8:
              pr(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ee.current === null && (e = !0);
              var D = Et;
              if (Et = 0, xe = null, la(t, y, T, D), n && ea) {
                f = 0;
                break t;
              }
              break;
            default:
              D = Et, Et = 0, xe = null, la(t, y, T, D);
          }
        }
        g1(), f = Ht;
        break;
      } catch (_) {
        pm(t, _);
      }
    while (!0);
    return e && t.shellSuspendCounter++, on = ri = null, At = a, O.H = s, O.A = r, dt === null && (zt = null, yt = 0, Wl()), f;
  }
  function g1() {
    for (; dt !== null; ) Sm(dt);
  }
  function v1(t, e) {
    var n = At;
    At |= 2;
    var a = gm(), s = vm();
    zt !== t || yt !== e ? (Rs = null, Cs = ve() + 500, aa(t, e)) : ea = xa(
      t,
      e
    );
    t: do
      try {
        if (Et !== 0 && dt !== null) {
          e = dt;
          var r = xe;
          e: switch (Et) {
            case 1:
              Et = 0, xe = null, la(t, e, r, 1);
              break;
            case 2:
            case 9:
              if (zh(r)) {
                Et = 0, xe = null, Tm(e);
                break;
              }
              e = function() {
                Et !== 2 && Et !== 9 || zt !== t || (Et = 7), Pe(t);
              }, r.then(e, e);
              break t;
            case 3:
              Et = 7;
              break t;
            case 4:
              Et = 5;
              break t;
            case 7:
              zh(r) ? (Et = 0, xe = null, Tm(e)) : (Et = 0, xe = null, la(t, e, r, 7));
              break;
            case 5:
              var f = null;
              switch (dt.tag) {
                case 26:
                  f = dt.memoizedState;
                case 5:
                case 27:
                  var y = dt;
                  if (f ? lp(f) : y.stateNode.complete) {
                    Et = 0, xe = null;
                    var T = y.sibling;
                    if (T !== null) dt = T;
                    else {
                      var D = y.return;
                      D !== null ? (dt = D, Vs(D)) : dt = null;
                    }
                    break e;
                  }
              }
              Et = 0, xe = null, la(t, e, r, 5);
              break;
            case 6:
              Et = 0, xe = null, la(t, e, r, 6);
              break;
            case 8:
              pr(), Ht = 6;
              break t;
            default:
              throw Error(o(462));
          }
        }
        S1();
        break;
      } catch (_) {
        pm(t, _);
      }
    while (!0);
    return on = ri = null, O.H = a, O.A = s, At = n, dt !== null ? 0 : (zt = null, yt = 0, Wl(), Ht);
  }
  function S1() {
    for (; dt !== null && !G0(); )
      Sm(dt);
  }
  function Sm(t) {
    var e = Xd(t.alternate, t, vn);
    t.memoizedProps = t.pendingProps, e === null ? Vs(t) : dt = e;
  }
  function Tm(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Ld(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          yt
        );
        break;
      case 11:
        e = Ld(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          yt
        );
        break;
      case 5:
        Vo(e);
      default:
        Qd(n, e), e = dt = vh(e, vn), e = Xd(n, e, vn);
    }
    t.memoizedProps = t.pendingProps, e === null ? Vs(t) : dt = e;
  }
  function la(t, e, n, a) {
    on = ri = null, Vo(e), ki = null, Ga = 0;
    var s = e.return;
    try {
      if (u1(
        t,
        s,
        e,
        n,
        yt
      )) {
        Ht = 1, vs(
          t,
          _e(n, t.current)
        ), dt = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw dt = s, r;
      Ht = 1, vs(
        t,
        _e(n, t.current)
      ), dt = null;
      return;
    }
    e.flags & 32768 ? (St || a === 1 ? t = !0 : ea || (yt & 536870912) !== 0 ? t = !1 : (jn = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ee.current, a !== null && a.tag === 13 && (a.flags |= 16384))), bm(e, t)) : Vs(e);
  }
  function Vs(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        bm(
          e,
          jn
        );
        return;
      }
      t = e.return;
      var n = c1(
        e.alternate,
        e,
        vn
      );
      if (n !== null) {
        dt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        dt = e;
        return;
      }
      dt = e = t;
    } while (e !== null);
    Ht === 0 && (Ht = 5);
  }
  function bm(t, e) {
    do {
      var n = f1(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, dt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        dt = t;
        return;
      }
      dt = t = n;
    } while (t !== null);
    Ht = 6, dt = null;
  }
  function Am(t, e, n, a, s, r, f, y, T) {
    t.cancelPendingCommit = null;
    do
      _s();
    while (Wt !== 0);
    if ((At & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (r = e.lanes | e.childLanes, r |= io, $0(
        t,
        n,
        r,
        f,
        y,
        T
      ), t === zt && (dt = zt = null, yt = 0), ia = e, Hn = t, Sn = n, hr = r, dr = s, fm = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, E1(Bl, function() {
        return Cm(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = O.T, O.T = null, s = G.p, G.p = 2, f = At, At |= 4;
        try {
          h1(t, e, n);
        } finally {
          At = f, G.p = s, O.T = a;
        }
      }
      Wt = 1, Em(), Mm(), xm();
    }
  }
  function Em() {
    if (Wt === 1) {
      Wt = 0;
      var t = Hn, e = ia, n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        n = O.T, O.T = null;
        var a = G.p;
        G.p = 2;
        var s = At;
        At |= 4;
        try {
          im(e, t);
          var r = Rr, f = rh(t.containerInfo), y = r.focusedElem, T = r.selectionRange;
          if (f !== y && y && y.ownerDocument && oh(
            y.ownerDocument.documentElement,
            y
          )) {
            if (T !== null && $u(y)) {
              var D = T.start, _ = T.end;
              if (_ === void 0 && (_ = D), "selectionStart" in y)
                y.selectionStart = D, y.selectionEnd = Math.min(
                  _,
                  y.value.length
                );
              else {
                var L = y.ownerDocument || document, R = L && L.defaultView || window;
                if (R.getSelection) {
                  var z = R.getSelection(), W = y.textContent.length, at = Math.min(T.start, W), Ct = T.end === void 0 ? at : Math.min(T.end, W);
                  !z.extend && at > Ct && (f = Ct, Ct = at, at = f);
                  var M = uh(
                    y,
                    at
                  ), E = uh(
                    y,
                    Ct
                  );
                  if (M && E && (z.rangeCount !== 1 || z.anchorNode !== M.node || z.anchorOffset !== M.offset || z.focusNode !== E.node || z.focusOffset !== E.offset)) {
                    var x = L.createRange();
                    x.setStart(M.node, M.offset), z.removeAllRanges(), at > Ct ? (z.addRange(x), z.extend(E.node, E.offset)) : (x.setEnd(E.node, E.offset), z.addRange(x));
                  }
                }
              }
            }
            for (L = [], z = y; z = z.parentNode; )
              z.nodeType === 1 && L.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
            for (typeof y.focus == "function" && y.focus(), y = 0; y < L.length; y++) {
              var B = L[y];
              B.element.scrollLeft = B.left, B.element.scrollTop = B.top;
            }
          }
          Ks = !!Cr, Rr = Cr = null;
        } finally {
          At = s, G.p = a, O.T = n;
        }
      }
      t.current = e, Wt = 2;
    }
  }
  function Mm() {
    if (Wt === 2) {
      Wt = 0;
      var t = Hn, e = ia, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = O.T, O.T = null;
        var a = G.p;
        G.p = 2;
        var s = At;
        At |= 4;
        try {
          $d(t, e.alternate, e);
        } finally {
          At = s, G.p = a, O.T = n;
        }
      }
      Wt = 3;
    }
  }
  function xm() {
    if (Wt === 4 || Wt === 3) {
      Wt = 0, X0();
      var t = Hn, e = ia, n = Sn, a = fm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Wt = 5 : (Wt = 0, ia = Hn = null, Dm(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (s === 0 && (wn = null), Uu(n), e = e.stateNode, Se && typeof Se.onCommitFiberRoot == "function")
        try {
          Se.onCommitFiberRoot(
            Ma,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = O.T, s = G.p, G.p = 2, O.T = null;
        try {
          for (var r = t.onRecoverableError, f = 0; f < a.length; f++) {
            var y = a[f];
            r(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          O.T = e, G.p = s;
        }
      }
      (Sn & 3) !== 0 && _s(), Pe(t), s = t.pendingLanes, (n & 261930) !== 0 && (s & 42) !== 0 ? t === mr ? ll++ : (ll = 0, mr = t) : ll = 0, sl(0);
    }
  }
  function Dm(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Ya(e)));
  }
  function _s() {
    return Em(), Mm(), xm(), Cm();
  }
  function Cm() {
    if (Wt !== 5) return !1;
    var t = Hn, e = hr;
    hr = 0;
    var n = Uu(Sn), a = O.T, s = G.p;
    try {
      G.p = 32 > n ? 32 : n, O.T = null, n = dr, dr = null;
      var r = Hn, f = Sn;
      if (Wt = 0, ia = Hn = null, Sn = 0, (At & 6) !== 0) throw Error(o(331));
      var y = At;
      if (At |= 4, om(r.current), lm(
        r,
        r.current,
        f,
        n
      ), At = y, sl(0, !1), Se && typeof Se.onPostCommitFiberRoot == "function")
        try {
          Se.onPostCommitFiberRoot(Ma, r);
        } catch {
        }
      return !0;
    } finally {
      G.p = s, O.T = a, Dm(t, e);
    }
  }
  function Rm(t, e, n) {
    e = _e(n, e), e = Zo(t.stateNode, e, 2), t = _n(t, e, 2), t !== null && (Da(t, 2), Pe(t));
  }
  function Mt(t, e, n) {
    if (t.tag === 3)
      Rm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Rm(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (wn === null || !wn.has(a))) {
            t = _e(n, t), n = zd(2), a = _n(e, n, 2), a !== null && (Od(
              n,
              a,
              e,
              t
            ), Da(a, 2), Pe(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function gr(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new p1();
      var s = /* @__PURE__ */ new Set();
      a.set(e, s);
    } else
      s = a.get(e), s === void 0 && (s = /* @__PURE__ */ new Set(), a.set(e, s));
    s.has(n) || (rr = !0, s.add(n), t = T1.bind(null, t, e, n), e.then(t, t));
  }
  function T1(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, zt === t && (yt & n) === n && (Ht === 4 || Ht === 3 && (yt & 62914560) === yt && 300 > ve() - Ds ? (At & 2) === 0 && aa(t, 0) : cr |= n, na === yt && (na = 0)), Pe(t);
  }
  function zm(t, e) {
    e === 0 && (e = Ef()), t = si(t, e), t !== null && (Da(t, e), Pe(t));
  }
  function b1(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), zm(t, n);
  }
  function A1(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(e), zm(t, n);
  }
  function E1(t, e) {
    return zu(t, e);
  }
  var Us = null, sa = null, vr = !1, Bs = !1, Sr = !1, qn = 0;
  function Pe(t) {
    t !== sa && t.next === null && (sa === null ? Us = sa = t : sa = sa.next = t), Bs = !0, vr || (vr = !0, x1());
  }
  function sl(t, e) {
    if (!Sr && Bs) {
      Sr = !0;
      do
        for (var n = !1, a = Us; a !== null; ) {
          if (t !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var f = a.suspendedLanes, y = a.pingedLanes;
              r = (1 << 31 - Te(42 | t) + 1) - 1, r &= s & ~(f & ~y), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (n = !0, Um(a, r));
          } else
            r = yt, r = wl(
              a,
              a === zt ? r : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (r & 3) === 0 || xa(a, r) || (n = !0, Um(a, r));
          a = a.next;
        }
      while (n);
      Sr = !1;
    }
  }
  function M1() {
    Om();
  }
  function Om() {
    Bs = vr = !1;
    var t = 0;
    qn !== 0 && N1() && (t = qn);
    for (var e = ve(), n = null, a = Us; a !== null; ) {
      var s = a.next, r = Vm(a, e);
      r === 0 ? (a.next = null, n === null ? Us = s : n.next = s, s === null && (sa = n)) : (n = a, (t !== 0 || (r & 3) !== 0) && (Bs = !0)), a = s;
    }
    Wt !== 0 && Wt !== 5 || sl(t), qn !== 0 && (qn = 0);
  }
  function Vm(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, s = t.expirationTimes, r = t.pendingLanes & -62914561; 0 < r; ) {
      var f = 31 - Te(r), y = 1 << f, T = s[f];
      T === -1 ? ((y & n) === 0 || (y & a) !== 0) && (s[f] = P0(y, e)) : T <= e && (t.expiredLanes |= y), r &= ~y;
    }
    if (e = zt, n = yt, n = wl(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, n === 0 || t === e && (Et === 2 || Et === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Ou(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || xa(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && Ou(a), Uu(n)) {
        case 2:
        case 8:
          n = bf;
          break;
        case 32:
          n = Bl;
          break;
        case 268435456:
          n = Af;
          break;
        default:
          n = Bl;
      }
      return a = _m.bind(null, t), n = zu(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && Ou(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function _m(t, e) {
    if (Wt !== 0 && Wt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (_s() && t.callbackNode !== n)
      return null;
    var a = yt;
    return a = wl(
      t,
      t === zt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (dm(t, a, e), Vm(t, ve()), t.callbackNode != null && t.callbackNode === n ? _m.bind(null, t) : null);
  }
  function Um(t, e) {
    if (_s()) return null;
    dm(t, e, !0);
  }
  function x1() {
    L1(function() {
      (At & 6) !== 0 ? zu(
        Tf,
        M1
      ) : Om();
    });
  }
  function Tr() {
    if (qn === 0) {
      var t = Qi;
      t === 0 && (t = Nl, Nl <<= 1, (Nl & 261888) === 0 && (Nl = 256)), qn = t;
    }
    return qn;
  }
  function Bm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Gl("" + t);
  }
  function Nm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function D1(t, e, n, a, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var r = Bm(
        (s[ce] || null).action
      ), f = a.submitter;
      f && (e = (e = f[ce] || null) ? Bm(e.formAction) : f.getAttribute("formAction"), e !== null && (r = e, f = null));
      var y = new Zl(
        "action",
        "action",
        null,
        a,
        s
      );
      t.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (qn !== 0) {
                  var T = f ? Nm(s, f) : new FormData(s);
                  Yo(
                    n,
                    {
                      pending: !0,
                      data: T,
                      method: s.method,
                      action: r
                    },
                    null,
                    T
                  );
                }
              } else
                typeof r == "function" && (y.preventDefault(), T = f ? Nm(s, f) : new FormData(s), Yo(
                  n,
                  {
                    pending: !0,
                    data: T,
                    method: s.method,
                    action: r
                  },
                  r,
                  T
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var br = 0; br < no.length; br++) {
    var Ar = no[br], C1 = Ar.toLowerCase(), R1 = Ar[0].toUpperCase() + Ar.slice(1);
    qe(
      C1,
      "on" + R1
    );
  }
  qe(hh, "onAnimationEnd"), qe(dh, "onAnimationIteration"), qe(mh, "onAnimationStart"), qe("dblclick", "onDoubleClick"), qe("focusin", "onFocus"), qe("focusout", "onBlur"), qe(Kv, "onTransitionRun"), qe(Qv, "onTransitionStart"), qe(Zv, "onTransitionCancel"), qe(ph, "onTransitionEnd"), Vi("onMouseEnter", ["mouseout", "mouseover"]), Vi("onMouseLeave", ["mouseout", "mouseover"]), Vi("onPointerEnter", ["pointerout", "pointerover"]), Vi("onPointerLeave", ["pointerout", "pointerover"]), ni(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ni(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ni("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ni(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ni(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ni(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ul = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), z1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul)
  );
  function jm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], s = a.event;
      a = a.listeners;
      t: {
        var r = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var y = a[f], T = y.instance, D = y.currentTarget;
            if (y = y.listener, T !== r && s.isPropagationStopped())
              break t;
            r = y, s.currentTarget = D;
            try {
              r(s);
            } catch (_) {
              Fl(_);
            }
            s.currentTarget = null, r = T;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (y = a[f], T = y.instance, D = y.currentTarget, y = y.listener, T !== r && s.isPropagationStopped())
              break t;
            r = y, s.currentTarget = D;
            try {
              r(s);
            } catch (_) {
              Fl(_);
            }
            s.currentTarget = null, r = T;
          }
      }
    }
  }
  function mt(t, e) {
    var n = e[Bu];
    n === void 0 && (n = e[Bu] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (Lm(e, t, 2, !1), n.add(a));
  }
  function Er(t, e, n) {
    var a = 0;
    e && (a |= 4), Lm(
      n,
      t,
      a,
      e
    );
  }
  var Ns = "_reactListening" + Math.random().toString(36).slice(2);
  function Mr(t) {
    if (!t[Ns]) {
      t[Ns] = !0, Of.forEach(function(n) {
        n !== "selectionchange" && (z1.has(n) || Er(n, !1, t), Er(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ns] || (e[Ns] = !0, Er("selectionchange", !1, e));
    }
  }
  function Lm(t, e, n, a) {
    switch (hp(e)) {
      case 2:
        var s = iS;
        break;
      case 8:
        s = aS;
        break;
      default:
        s = Hr;
    }
    n = s.bind(
      null,
      e,
      n,
      t
    ), s = void 0, !Xu || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0), a ? s !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: s
    }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
      passive: s
    }) : t.addEventListener(e, n, !1);
  }
  function xr(t, e, n, a, s) {
    var r = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var y = a.stateNode.containerInfo;
          if (y === s) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var T = f.tag;
              if ((T === 3 || T === 4) && f.stateNode.containerInfo === s)
                return;
              f = f.return;
            }
          for (; y !== null; ) {
            if (f = Ri(y), f === null) return;
            if (T = f.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              a = r = f;
              continue t;
            }
            y = y.parentNode;
          }
        }
        a = a.return;
      }
    Gf(function() {
      var D = r, _ = qu(n), L = [];
      t: {
        var R = yh.get(t);
        if (R !== void 0) {
          var z = Zl, W = t;
          switch (t) {
            case "keypress":
              if (Kl(n) === 0) break t;
            case "keydown":
            case "keyup":
              z = Av;
              break;
            case "focusin":
              W = "focus", z = Ju;
              break;
            case "focusout":
              W = "blur", z = Ju;
              break;
            case "beforeblur":
            case "afterblur":
              z = Ju;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = Qf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = cv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = xv;
              break;
            case hh:
            case dh:
            case mh:
              z = dv;
              break;
            case ph:
              z = Cv;
              break;
            case "scroll":
            case "scrollend":
              z = ov;
              break;
            case "wheel":
              z = zv;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = pv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = Jf;
              break;
            case "toggle":
            case "beforetoggle":
              z = Vv;
          }
          var at = (e & 4) !== 0, Ct = !at && (t === "scroll" || t === "scrollend"), M = at ? R !== null ? R + "Capture" : null : R;
          at = [];
          for (var E = D, x; E !== null; ) {
            var B = E;
            if (x = B.stateNode, B = B.tag, B !== 5 && B !== 26 && B !== 27 || x === null || M === null || (B = za(E, M), B != null && at.push(
              ol(E, B, x)
            )), Ct) break;
            E = E.return;
          }
          0 < at.length && (R = new z(
            R,
            W,
            null,
            n,
            _
          ), L.push({ event: R, listeners: at }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (R = t === "mouseover" || t === "pointerover", z = t === "mouseout" || t === "pointerout", R && n !== Yu && (W = n.relatedTarget || n.fromElement) && (Ri(W) || W[Ci]))
            break t;
          if ((z || R) && (R = _.window === _ ? _ : (R = _.ownerDocument) ? R.defaultView || R.parentWindow : window, z ? (W = n.relatedTarget || n.toElement, z = D, W = W ? Ri(W) : null, W !== null && (Ct = d(W), at = W.tag, W !== Ct || at !== 5 && at !== 27 && at !== 6) && (W = null)) : (z = null, W = D), z !== W)) {
            if (at = Qf, B = "onMouseLeave", M = "onMouseEnter", E = "mouse", (t === "pointerout" || t === "pointerover") && (at = Jf, B = "onPointerLeave", M = "onPointerEnter", E = "pointer"), Ct = z == null ? R : Ra(z), x = W == null ? R : Ra(W), R = new at(
              B,
              E + "leave",
              z,
              n,
              _
            ), R.target = Ct, R.relatedTarget = x, B = null, Ri(_) === D && (at = new at(
              M,
              E + "enter",
              W,
              n,
              _
            ), at.target = x, at.relatedTarget = Ct, B = at), Ct = B, z && W)
              e: {
                for (at = O1, M = z, E = W, x = 0, B = M; B; B = at(B))
                  x++;
                B = 0;
                for (var it = E; it; it = at(it))
                  B++;
                for (; 0 < x - B; )
                  M = at(M), x--;
                for (; 0 < B - x; )
                  E = at(E), B--;
                for (; x--; ) {
                  if (M === E || E !== null && M === E.alternate) {
                    at = M;
                    break e;
                  }
                  M = at(M), E = at(E);
                }
                at = null;
              }
            else at = null;
            z !== null && wm(
              L,
              R,
              z,
              at,
              !1
            ), W !== null && Ct !== null && wm(
              L,
              Ct,
              W,
              at,
              !0
            );
          }
        }
        t: {
          if (R = D ? Ra(D) : window, z = R.nodeName && R.nodeName.toLowerCase(), z === "select" || z === "input" && R.type === "file")
            var Tt = eh;
          else if (If(R))
            if (nh)
              Tt = qv;
            else {
              Tt = Hv;
              var I = wv;
            }
          else
            z = R.nodeName, !z || z.toLowerCase() !== "input" || R.type !== "checkbox" && R.type !== "radio" ? D && Hu(D.elementType) && (Tt = eh) : Tt = Yv;
          if (Tt && (Tt = Tt(t, D))) {
            th(
              L,
              Tt,
              n,
              _
            );
            break t;
          }
          I && I(t, R, D), t === "focusout" && D && R.type === "number" && D.memoizedProps.value != null && wu(R, "number", R.value);
        }
        switch (I = D ? Ra(D) : window, t) {
          case "focusin":
            (If(I) || I.contentEditable === "true") && (Li = I, Iu = D, La = null);
            break;
          case "focusout":
            La = Iu = Li = null;
            break;
          case "mousedown":
            to = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            to = !1, ch(L, n, _);
            break;
          case "selectionchange":
            if (Xv) break;
          case "keydown":
          case "keyup":
            ch(L, n, _);
        }
        var ft;
        if (Fu)
          t: {
            switch (t) {
              case "compositionstart":
                var gt = "onCompositionStart";
                break t;
              case "compositionend":
                gt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                gt = "onCompositionUpdate";
                break t;
            }
            gt = void 0;
          }
        else
          ji ? Pf(t, n) && (gt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (gt = "onCompositionStart");
        gt && (kf && n.locale !== "ko" && (ji || gt !== "onCompositionStart" ? gt === "onCompositionEnd" && ji && (ft = Xf()) : (xn = _, Ku = "value" in xn ? xn.value : xn.textContent, ji = !0)), I = js(D, gt), 0 < I.length && (gt = new Zf(
          gt,
          t,
          null,
          n,
          _
        ), L.push({ event: gt, listeners: I }), ft ? gt.data = ft : (ft = $f(n), ft !== null && (gt.data = ft)))), (ft = Uv ? Bv(t, n) : Nv(t, n)) && (gt = js(D, "onBeforeInput"), 0 < gt.length && (I = new Zf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          _
        ), L.push({
          event: I,
          listeners: gt
        }), I.data = ft)), D1(
          L,
          t,
          D,
          n,
          _
        );
      }
      jm(L, e);
    });
  }
  function ol(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function js(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var s = t, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = za(t, n), s != null && a.unshift(
        ol(t, s, r)
      ), s = za(t, e), s != null && a.push(
        ol(t, s, r)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function O1(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function wm(t, e, n, a, s) {
    for (var r = e._reactName, f = []; n !== null && n !== a; ) {
      var y = n, T = y.alternate, D = y.stateNode;
      if (y = y.tag, T !== null && T === a) break;
      y !== 5 && y !== 26 && y !== 27 || D === null || (T = D, s ? (D = za(n, r), D != null && f.unshift(
        ol(n, D, T)
      )) : s || (D = za(n, r), D != null && f.push(
        ol(n, D, T)
      ))), n = n.return;
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var V1 = /\r\n?/g, _1 = /\u0000|\uFFFD/g;
  function Hm(t) {
    return (typeof t == "string" ? t : "" + t).replace(V1, `
`).replace(_1, "");
  }
  function Ym(t, e) {
    return e = Hm(e), Hm(t) === e;
  }
  function Dt(t, e, n, a, s, r) {
    switch (n) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || Ui(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Ui(t, "" + a);
        break;
      case "className":
        Yl(t, "class", a);
        break;
      case "tabIndex":
        Yl(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Yl(t, n, a);
        break;
      case "style":
        Yf(t, a, r);
        break;
      case "data":
        if (e !== "object") {
          Yl(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = Gl("" + a), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (n === "formAction" ? (e !== "input" && Dt(t, e, "name", s.name, s, null), Dt(
            t,
            e,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Dt(
            t,
            e,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Dt(
            t,
            e,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Dt(t, e, "encType", s.encType, s, null), Dt(t, e, "method", s.method, s, null), Dt(t, e, "target", s.target, s, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = Gl("" + a), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = an);
        break;
      case "onScroll":
        a != null && mt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && mt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (n = a.__html, n != null) {
            if (s.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = Gl("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "" + a) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
        break;
      case "popover":
        mt("beforetoggle", t), mt("toggle", t), Hl(t, "popover", a);
        break;
      case "xlinkActuate":
        nn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        nn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        nn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        nn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        nn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        nn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        nn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        nn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        nn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Hl(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = sv.get(n) || n, Hl(t, n, a));
    }
  }
  function Dr(t, e, n, a, s, r) {
    switch (n) {
      case "style":
        Yf(t, a, r);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (n = a.__html, n != null) {
            if (s.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Ui(t, a) : (typeof a == "number" || typeof a == "bigint") && Ui(t, "" + a);
        break;
      case "onScroll":
        a != null && mt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && mt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = an);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Vf.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), e = n.slice(2, s ? n.length - 7 : void 0), r = t[ce] || null, r = r != null ? r[n] : null, typeof r == "function" && t.removeEventListener(e, r, s), typeof a == "function")) {
              typeof r != "function" && r !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, a, s);
              break t;
            }
            n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : Hl(t, n, a);
          }
    }
  }
  function ae(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        mt("error", t), mt("load", t);
        var a = !1, s = !1, r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var f = n[r];
            if (f != null)
              switch (r) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  Dt(t, e, r, f, n, null);
              }
          }
        s && Dt(t, e, "srcSet", n.srcSet, n, null), a && Dt(t, e, "src", n.src, n, null);
        return;
      case "input":
        mt("invalid", t);
        var y = r = f = s = null, T = null, D = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var _ = n[a];
            if (_ != null)
              switch (a) {
                case "name":
                  s = _;
                  break;
                case "type":
                  f = _;
                  break;
                case "checked":
                  T = _;
                  break;
                case "defaultChecked":
                  D = _;
                  break;
                case "value":
                  r = _;
                  break;
                case "defaultValue":
                  y = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null)
                    throw Error(o(137, e));
                  break;
                default:
                  Dt(t, e, a, _, n, null);
              }
          }
        jf(
          t,
          r,
          y,
          T,
          D,
          f,
          s,
          !1
        );
        return;
      case "select":
        mt("invalid", t), a = f = r = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (y = n[s], y != null))
            switch (s) {
              case "value":
                r = y;
                break;
              case "defaultValue":
                f = y;
                break;
              case "multiple":
                a = y;
              default:
                Dt(t, e, s, y, n, null);
            }
        e = r, n = f, t.multiple = !!a, e != null ? _i(t, !!a, e, !1) : n != null && _i(t, !!a, n, !0);
        return;
      case "textarea":
        mt("invalid", t), r = s = a = null;
        for (f in n)
          if (n.hasOwnProperty(f) && (y = n[f], y != null))
            switch (f) {
              case "value":
                a = y;
                break;
              case "defaultValue":
                s = y;
                break;
              case "children":
                r = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(o(91));
                break;
              default:
                Dt(t, e, f, y, n, null);
            }
        wf(t, a, s, r);
        return;
      case "option":
        for (T in n)
          n.hasOwnProperty(T) && (a = n[T], a != null) && (T === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Dt(t, e, T, a, n, null));
        return;
      case "dialog":
        mt("beforetoggle", t), mt("toggle", t), mt("cancel", t), mt("close", t);
        break;
      case "iframe":
      case "object":
        mt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ul.length; a++)
          mt(ul[a], t);
        break;
      case "image":
        mt("error", t), mt("load", t);
        break;
      case "details":
        mt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        mt("error", t), mt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (D in n)
          if (n.hasOwnProperty(D) && (a = n[D], a != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                Dt(t, e, D, a, n, null);
            }
        return;
      default:
        if (Hu(e)) {
          for (_ in n)
            n.hasOwnProperty(_) && (a = n[_], a !== void 0 && Dr(
              t,
              e,
              _,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (y in n)
      n.hasOwnProperty(y) && (a = n[y], a != null && Dt(t, e, y, a, n, null));
  }
  function U1(t, e, n, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, f = null, y = null, T = null, D = null, _ = null;
        for (z in n) {
          var L = n[z];
          if (n.hasOwnProperty(z) && L != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = L;
              default:
                a.hasOwnProperty(z) || Dt(t, e, z, null, a, L);
            }
        }
        for (var R in a) {
          var z = a[R];
          if (L = n[R], a.hasOwnProperty(R) && (z != null || L != null))
            switch (R) {
              case "type":
                r = z;
                break;
              case "name":
                s = z;
                break;
              case "checked":
                D = z;
                break;
              case "defaultChecked":
                _ = z;
                break;
              case "value":
                f = z;
                break;
              case "defaultValue":
                y = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(o(137, e));
                break;
              default:
                z !== L && Dt(
                  t,
                  e,
                  R,
                  z,
                  a,
                  L
                );
            }
        }
        Lu(
          t,
          f,
          y,
          T,
          D,
          _,
          r,
          s
        );
        return;
      case "select":
        z = f = y = R = null;
        for (r in n)
          if (T = n[r], n.hasOwnProperty(r) && T != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                z = T;
              default:
                a.hasOwnProperty(r) || Dt(
                  t,
                  e,
                  r,
                  null,
                  a,
                  T
                );
            }
        for (s in a)
          if (r = a[s], T = n[s], a.hasOwnProperty(s) && (r != null || T != null))
            switch (s) {
              case "value":
                R = r;
                break;
              case "defaultValue":
                y = r;
                break;
              case "multiple":
                f = r;
              default:
                r !== T && Dt(
                  t,
                  e,
                  s,
                  r,
                  a,
                  T
                );
            }
        e = y, n = f, a = z, R != null ? _i(t, !!n, R, !1) : !!a != !!n && (e != null ? _i(t, !!n, e, !0) : _i(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        z = R = null;
        for (y in n)
          if (s = n[y], n.hasOwnProperty(y) && s != null && !a.hasOwnProperty(y))
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Dt(t, e, y, null, a, s);
            }
        for (f in a)
          if (s = a[f], r = n[f], a.hasOwnProperty(f) && (s != null || r != null))
            switch (f) {
              case "value":
                R = s;
                break;
              case "defaultValue":
                z = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(o(91));
                break;
              default:
                s !== r && Dt(t, e, f, s, a, r);
            }
        Lf(t, R, z);
        return;
      case "option":
        for (var W in n)
          R = n[W], n.hasOwnProperty(W) && R != null && !a.hasOwnProperty(W) && (W === "selected" ? t.selected = !1 : Dt(
            t,
            e,
            W,
            null,
            a,
            R
          ));
        for (T in a)
          R = a[T], z = n[T], a.hasOwnProperty(T) && R !== z && (R != null || z != null) && (T === "selected" ? t.selected = R && typeof R != "function" && typeof R != "symbol" : Dt(
            t,
            e,
            T,
            R,
            a,
            z
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var at in n)
          R = n[at], n.hasOwnProperty(at) && R != null && !a.hasOwnProperty(at) && Dt(t, e, at, null, a, R);
        for (D in a)
          if (R = a[D], z = n[D], a.hasOwnProperty(D) && R !== z && (R != null || z != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null)
                  throw Error(o(137, e));
                break;
              default:
                Dt(
                  t,
                  e,
                  D,
                  R,
                  a,
                  z
                );
            }
        return;
      default:
        if (Hu(e)) {
          for (var Ct in n)
            R = n[Ct], n.hasOwnProperty(Ct) && R !== void 0 && !a.hasOwnProperty(Ct) && Dr(
              t,
              e,
              Ct,
              void 0,
              a,
              R
            );
          for (_ in a)
            R = a[_], z = n[_], !a.hasOwnProperty(_) || R === z || R === void 0 && z === void 0 || Dr(
              t,
              e,
              _,
              R,
              a,
              z
            );
          return;
        }
    }
    for (var M in n)
      R = n[M], n.hasOwnProperty(M) && R != null && !a.hasOwnProperty(M) && Dt(t, e, M, null, a, R);
    for (L in a)
      R = a[L], z = n[L], !a.hasOwnProperty(L) || R === z || R == null && z == null || Dt(t, e, L, R, a, z);
  }
  function qm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function B1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var s = n[a], r = s.transferSize, f = s.initiatorType, y = s.duration;
        if (r && y && qm(f)) {
          for (f = 0, y = s.responseEnd, a += 1; a < n.length; a++) {
            var T = n[a], D = T.startTime;
            if (D > y) break;
            var _ = T.transferSize, L = T.initiatorType;
            _ && qm(L) && (T = T.responseEnd, f += _ * (T < y ? 1 : (y - D) / (T - D)));
          }
          if (--a, e += 8 * (r + f) / (s.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Cr = null, Rr = null;
  function Ls(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Gm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Xm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function zr(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Or = null;
  function N1() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Or ? !1 : (Or = t, !0) : (Or = null, !1);
  }
  var Km = typeof setTimeout == "function" ? setTimeout : void 0, j1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Qm = typeof Promise == "function" ? Promise : void 0, L1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qm < "u" ? function(t) {
    return Qm.resolve(null).then(t).catch(w1);
  } : Km;
  function w1(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Gn(t) {
    return t === "head";
  }
  function Zm(t, e) {
    var n = e, a = 0;
    do {
      var s = n.nextSibling;
      if (t.removeChild(n), s && s.nodeType === 8)
        if (n = s.data, n === "/$" || n === "/&") {
          if (a === 0) {
            t.removeChild(s), ca(e);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          rl(t.ownerDocument.documentElement);
        else if (n === "head") {
          n = t.ownerDocument.head, rl(n);
          for (var r = n.firstChild; r; ) {
            var f = r.nextSibling, y = r.nodeName;
            r[Ca] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && r.rel.toLowerCase() === "stylesheet" || n.removeChild(r), r = f;
          }
        } else
          n === "body" && rl(t.ownerDocument.body);
      n = s;
    } while (n);
    ca(e);
  }
  function Jm(t, e) {
    var n = t;
    t = 0;
    do {
      var a = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8)
        if (n = a.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = a;
    } while (n);
  }
  function Vr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Vr(n), Nu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function H1(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Ca])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (r = t.getAttribute("rel"), r === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (r = t.getAttribute("src"), (r !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === r)
          return t;
      } else return t;
      if (t = Le(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Y1(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Le(t.nextSibling), t === null)) return null;
    return t;
  }
  function km(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Le(t.nextSibling), t === null)) return null;
    return t;
  }
  function _r(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Ur(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function q1(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Le(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Br = null;
  function Fm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return Le(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Wm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else n !== "/$" && n !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Pm(t, e, n) {
    switch (e = Ls(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(o(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(o(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function rl(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Nu(t);
  }
  var we = /* @__PURE__ */ new Map(), $m = /* @__PURE__ */ new Set();
  function ws(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Tn = G.d;
  G.d = {
    f: G1,
    r: X1,
    D: K1,
    C: Q1,
    L: Z1,
    m: J1,
    X: F1,
    S: k1,
    M: W1
  };
  function G1() {
    var t = Tn.f(), e = zs();
    return t || e;
  }
  function X1(t) {
    var e = zi(t);
    e !== null && e.tag === 5 && e.type === "form" ? pd(e) : Tn.r(t);
  }
  var ua = typeof document > "u" ? null : document;
  function Im(t, e, n) {
    var a = ua;
    if (a && typeof e == "string" && e) {
      var s = Oe(e);
      s = 'link[rel="' + t + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), $m.has(s) || ($m.add(s), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(s) === null && (e = a.createElement("link"), ae(e, "link", t), $t(e), a.head.appendChild(e)));
    }
  }
  function K1(t) {
    Tn.D(t), Im("dns-prefetch", t, null);
  }
  function Q1(t, e) {
    Tn.C(t, e), Im("preconnect", t, e);
  }
  function Z1(t, e, n) {
    Tn.L(t, e, n);
    var a = ua;
    if (a && t && e) {
      var s = 'link[rel="preload"][as="' + Oe(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + Oe(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + Oe(
        n.imageSizes
      ) + '"]')) : s += '[href="' + Oe(t) + '"]';
      var r = s;
      switch (e) {
        case "style":
          r = oa(t);
          break;
        case "script":
          r = ra(t);
      }
      we.has(r) || (t = S(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), we.set(r, t), a.querySelector(s) !== null || e === "style" && a.querySelector(cl(r)) || e === "script" && a.querySelector(fl(r)) || (e = a.createElement("link"), ae(e, "link", t), $t(e), a.head.appendChild(e)));
    }
  }
  function J1(t, e) {
    Tn.m(t, e);
    var n = ua;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", s = 'link[rel="modulepreload"][as="' + Oe(a) + '"][href="' + Oe(t) + '"]', r = s;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = ra(t);
      }
      if (!we.has(r) && (t = S({ rel: "modulepreload", href: t }, e), we.set(r, t), n.querySelector(s) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(fl(r)))
              return;
        }
        a = n.createElement("link"), ae(a, "link", t), $t(a), n.head.appendChild(a);
      }
    }
  }
  function k1(t, e, n) {
    Tn.S(t, e, n);
    var a = ua;
    if (a && t) {
      var s = Oi(a).hoistableStyles, r = oa(t);
      e = e || "default";
      var f = s.get(r);
      if (!f) {
        var y = { loading: 0, preload: null };
        if (f = a.querySelector(
          cl(r)
        ))
          y.loading = 5;
        else {
          t = S(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = we.get(r)) && Nr(t, n);
          var T = f = a.createElement("link");
          $t(T), ae(T, "link", t), T._p = new Promise(function(D, _) {
            T.onload = D, T.onerror = _;
          }), T.addEventListener("load", function() {
            y.loading |= 1;
          }), T.addEventListener("error", function() {
            y.loading |= 2;
          }), y.loading |= 4, Hs(f, e, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: y
        }, s.set(r, f);
      }
    }
  }
  function F1(t, e) {
    Tn.X(t, e);
    var n = ua;
    if (n && t) {
      var a = Oi(n).hoistableScripts, s = ra(t), r = a.get(s);
      r || (r = n.querySelector(fl(s)), r || (t = S({ src: t, async: !0 }, e), (e = we.get(s)) && jr(t, e), r = n.createElement("script"), $t(r), ae(r, "link", t), n.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, a.set(s, r));
    }
  }
  function W1(t, e) {
    Tn.M(t, e);
    var n = ua;
    if (n && t) {
      var a = Oi(n).hoistableScripts, s = ra(t), r = a.get(s);
      r || (r = n.querySelector(fl(s)), r || (t = S({ src: t, async: !0, type: "module" }, e), (e = we.get(s)) && jr(t, e), r = n.createElement("script"), $t(r), ae(r, "link", t), n.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, a.set(s, r));
    }
  }
  function tp(t, e, n, a) {
    var s = (s = ot.current) ? ws(s) : null;
    if (!s) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = oa(n.href), n = Oi(
          s
        ).hoistableStyles, a = n.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = oa(n.href);
          var r = Oi(
            s
          ).hoistableStyles, f = r.get(t);
          if (f || (s = s.ownerDocument || s, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(t, f), (r = s.querySelector(
            cl(t)
          )) && !r._p && (f.instance = r, f.state.loading = 5), we.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, we.set(t, n), r || P1(
            s,
            t,
            n,
            f.state
          ))), e && a === null)
            throw Error(o(528, ""));
          return f;
        }
        if (e && a !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ra(n), n = Oi(
          s
        ).hoistableScripts, a = n.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, t));
    }
  }
  function oa(t) {
    return 'href="' + Oe(t) + '"';
  }
  function cl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function ep(t) {
    return S({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function P1(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), ae(e, "link", n), $t(e), t.head.appendChild(e));
  }
  function ra(t) {
    return '[src="' + Oe(t) + '"]';
  }
  function fl(t) {
    return "script[async]" + t;
  }
  function np(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Oe(n.href) + '"]'
          );
          if (a)
            return e.instance = a, $t(a), a;
          var s = S({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), $t(a), ae(a, "style", s), Hs(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          s = oa(n.href);
          var r = t.querySelector(
            cl(s)
          );
          if (r)
            return e.state.loading |= 4, e.instance = r, $t(r), r;
          a = ep(n), (s = we.get(s)) && Nr(a, s), r = (t.ownerDocument || t).createElement("link"), $t(r);
          var f = r;
          return f._p = new Promise(function(y, T) {
            f.onload = y, f.onerror = T;
          }), ae(r, "link", a), e.state.loading |= 4, Hs(r, n.precedence, t), e.instance = r;
        case "script":
          return r = ra(n.src), (s = t.querySelector(
            fl(r)
          )) ? (e.instance = s, $t(s), s) : (a = n, (s = we.get(r)) && (a = S({}, n), jr(a, s)), t = t.ownerDocument || t, s = t.createElement("script"), $t(s), ae(s, "link", a), t.head.appendChild(s), e.instance = s);
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Hs(a, n.precedence, t));
    return e.instance;
  }
  function Hs(t, e, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = a.length ? a[a.length - 1] : null, r = s, f = 0; f < a.length; f++) {
      var y = a[f];
      if (y.dataset.precedence === e) r = y;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(t, r.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function Nr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function jr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Ys = null;
  function ip(t, e, n) {
    if (Ys === null) {
      var a = /* @__PURE__ */ new Map(), s = Ys = /* @__PURE__ */ new Map();
      s.set(n, a);
    } else
      s = Ys, a = s.get(n), a || (a = /* @__PURE__ */ new Map(), s.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), s = 0; s < n.length; s++) {
      var r = n[s];
      if (!(r[Ca] || r[te] || t === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = r.getAttribute(e) || "";
        f = t + f;
        var y = a.get(f);
        y ? y.push(r) : a.set(f, [r]);
      }
    }
    return a;
  }
  function ap(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function $1(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function lp(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function I1(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = oa(a.href), r = e.querySelector(
          cl(s)
        );
        if (r) {
          e = r._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = qs.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = r, $t(r);
          return;
        }
        r = e.ownerDocument || e, a = ep(a), (s = we.get(s)) && Nr(a, s), r = r.createElement("link"), $t(r);
        var f = r;
        f._p = new Promise(function(y, T) {
          f.onload = y, f.onerror = T;
        }), ae(r, "link", a), n.instance = r;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = qs.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Lr = 0;
  function tS(t, e) {
    return t.stylesheets && t.count === 0 && Xs(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (t.stylesheets && Xs(t, t.stylesheets), t.unsuspend) {
          var r = t.unsuspend;
          t.unsuspend = null, r();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Lr === 0 && (Lr = 62500 * B1());
      var s = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Xs(t, t.stylesheets), t.unsuspend)) {
            var r = t.unsuspend;
            t.unsuspend = null, r();
          }
        },
        (t.imgBytes > Lr ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(s);
      };
    } : null;
  }
  function qs() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Xs(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Gs = null;
  function Xs(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Gs = /* @__PURE__ */ new Map(), e.forEach(eS, t), Gs = null, qs.call(t));
  }
  function eS(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Gs.get(t);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Gs.set(t, n);
        for (var s = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var f = s[r];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), a = f);
        }
        a && n.set(null, a);
      }
      s = e.instance, f = s.getAttribute("data-precedence"), r = n.get(f) || a, r === a && n.set(null, s), n.set(f, s), this.count++, a = qs.bind(this), s.addEventListener("load", a), s.addEventListener("error", a), r ? r.parentNode.insertBefore(s, r.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(s, t.firstChild)), e.state.loading |= 4;
    }
  }
  var hl = {
    $$typeof: H,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  };
  function nS(t, e, n, a, s, r, f, y, T) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Vu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vu(0), this.hiddenUpdates = Vu(null), this.identifierPrefix = a, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function sp(t, e, n, a, s, r, f, y, T, D, _, L) {
    return t = new nS(
      t,
      e,
      n,
      f,
      T,
      D,
      _,
      L,
      y
    ), e = 1, r === !0 && (e |= 24), r = Ae(3, null, null, e), t.current = r, r.stateNode = t, e = yo(), e.refCount++, t.pooledCache = e, e.refCount++, r.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, To(r), t;
  }
  function up(t) {
    return t ? (t = Yi, t) : Yi;
  }
  function op(t, e, n, a, s, r) {
    s = up(s), a.context === null ? a.context = s : a.pendingContext = s, a = Vn(e), a.payload = { element: n }, r = r === void 0 ? null : r, r !== null && (a.callback = r), n = _n(t, a, e), n !== null && (ye(n, t, e), Ka(n, t, e));
  }
  function rp(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function wr(t, e) {
    rp(t, e), (t = t.alternate) && rp(t, e);
  }
  function cp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = si(t, 67108864);
      e !== null && ye(e, t, 67108864), wr(t, 67108864);
    }
  }
  function fp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ce();
      e = _u(e);
      var n = si(t, e);
      n !== null && ye(n, t, e), wr(t, e);
    }
  }
  var Ks = !0;
  function iS(t, e, n, a) {
    var s = O.T;
    O.T = null;
    var r = G.p;
    try {
      G.p = 2, Hr(t, e, n, a);
    } finally {
      G.p = r, O.T = s;
    }
  }
  function aS(t, e, n, a) {
    var s = O.T;
    O.T = null;
    var r = G.p;
    try {
      G.p = 8, Hr(t, e, n, a);
    } finally {
      G.p = r, O.T = s;
    }
  }
  function Hr(t, e, n, a) {
    if (Ks) {
      var s = Yr(a);
      if (s === null)
        xr(
          t,
          e,
          a,
          Qs,
          n
        ), dp(t, a);
      else if (sS(
        s,
        t,
        e,
        n,
        a
      ))
        a.stopPropagation();
      else if (dp(t, a), e & 4 && -1 < lS.indexOf(t)) {
        for (; s !== null; ) {
          var r = zi(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var f = ei(r.pendingLanes);
                  if (f !== 0) {
                    var y = r;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; f; ) {
                      var T = 1 << 31 - Te(f);
                      y.entanglements[1] |= T, f &= ~T;
                    }
                    Pe(r), (At & 6) === 0 && (Cs = ve() + 500, sl(0));
                  }
                }
                break;
              case 31:
              case 13:
                y = si(r, 2), y !== null && ye(y, r, 2), zs(), wr(r, 2);
            }
          if (r = Yr(a), r === null && xr(
            t,
            e,
            a,
            Qs,
            n
          ), r === s) break;
          s = r;
        }
        s !== null && a.stopPropagation();
      } else
        xr(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function Yr(t) {
    return t = qu(t), qr(t);
  }
  var Qs = null;
  function qr(t) {
    if (Qs = null, t = Ri(t), t !== null) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = h(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = p(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Qs = t, null;
  }
  function hp(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (K0()) {
          case Tf:
            return 2;
          case bf:
            return 8;
          case Bl:
          case Q0:
            return 32;
          case Af:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Gr = !1, Xn = null, Kn = null, Qn = null, dl = /* @__PURE__ */ new Map(), ml = /* @__PURE__ */ new Map(), Zn = [], lS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function dp(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Xn = null;
        break;
      case "dragenter":
      case "dragleave":
        Kn = null;
        break;
      case "mouseover":
      case "mouseout":
        Qn = null;
        break;
      case "pointerover":
      case "pointerout":
        dl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ml.delete(e.pointerId);
    }
  }
  function pl(t, e, n, a, s, r) {
    return t === null || t.nativeEvent !== r ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: r,
      targetContainers: [s]
    }, e !== null && (e = zi(e), e !== null && cp(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, s !== null && e.indexOf(s) === -1 && e.push(s), t);
  }
  function sS(t, e, n, a, s) {
    switch (e) {
      case "focusin":
        return Xn = pl(
          Xn,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "dragenter":
        return Kn = pl(
          Kn,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "mouseover":
        return Qn = pl(
          Qn,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return dl.set(
          r,
          pl(
            dl.get(r) || null,
            t,
            e,
            n,
            a,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, ml.set(
          r,
          pl(
            ml.get(r) || null,
            t,
            e,
            n,
            a,
            s
          )
        ), !0;
    }
    return !1;
  }
  function mp(t) {
    var e = Ri(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = h(n), e !== null) {
            t.blockedOn = e, Rf(t.priority, function() {
              fp(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = p(n), e !== null) {
            t.blockedOn = e, Rf(t.priority, function() {
              fp(n);
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Zs(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Yr(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Yu = a, n.target.dispatchEvent(a), Yu = null;
      } else
        return e = zi(n), e !== null && cp(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function pp(t, e, n) {
    Zs(t) && n.delete(e);
  }
  function uS() {
    Gr = !1, Xn !== null && Zs(Xn) && (Xn = null), Kn !== null && Zs(Kn) && (Kn = null), Qn !== null && Zs(Qn) && (Qn = null), dl.forEach(pp), ml.forEach(pp);
  }
  function Js(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Gr || (Gr = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      uS
    )));
  }
  var ks = null;
  function yp(t) {
    ks !== t && (ks = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        ks === t && (ks = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], s = t[e + 2];
          if (typeof a != "function") {
            if (qr(a || n) === null)
              continue;
            break;
          }
          var r = zi(n);
          r !== null && (t.splice(e, 3), e -= 3, Yo(
            r,
            {
              pending: !0,
              data: s,
              method: n.method,
              action: a
            },
            a,
            s
          ));
        }
      }
    ));
  }
  function ca(t) {
    function e(T) {
      return Js(T, t);
    }
    Xn !== null && Js(Xn, t), Kn !== null && Js(Kn, t), Qn !== null && Js(Qn, t), dl.forEach(e), ml.forEach(e);
    for (var n = 0; n < Zn.length; n++) {
      var a = Zn[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Zn.length && (n = Zn[0], n.blockedOn === null); )
      mp(n), n.blockedOn === null && Zn.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var s = n[a], r = n[a + 1], f = s[ce] || null;
        if (typeof r == "function")
          f || yp(n);
        else if (f) {
          var y = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, f = r[ce] || null)
              y = f.formAction;
            else if (qr(s) !== null) continue;
          } else y = f.action;
          typeof y == "function" ? n[a + 1] = y : (n.splice(a, 3), a -= 3), yp(n);
        }
      }
  }
  function gp() {
    function t(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(f) {
            return s = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      s !== null && (s(), s = null), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, s = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), s !== null && (s(), s = null);
      };
    }
  }
  function Xr(t) {
    this._internalRoot = t;
  }
  Fs.prototype.render = Xr.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(o(409));
    var n = e.current, a = Ce();
    op(n, a, t, e, null, null);
  }, Fs.prototype.unmount = Xr.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      op(t.current, 2, null, t, null, null), zs(), e[Ci] = null;
    }
  };
  function Fs(t) {
    this._internalRoot = t;
  }
  Fs.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Cf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Zn.length && e !== 0 && e < Zn[n].priority; n++) ;
      Zn.splice(n, 0, t), n === 0 && mp(t);
    }
  };
  var vp = l.version;
  if (vp !== "19.2.8")
    throw Error(
      o(
        527,
        vp,
        "19.2.8"
      )
    );
  G.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
    return t = m(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var oS = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ws = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ws.isDisabled && Ws.supportsFiber)
      try {
        Ma = Ws.inject(
          oS
        ), Se = Ws;
      } catch {
      }
  }
  return gl.createRoot = function(t, e) {
    if (!c(t)) throw Error(o(299));
    var n = !1, a = "", s = xd, r = Dd, f = Cd;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (s = e.onUncaughtError), e.onCaughtError !== void 0 && (r = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = sp(
      t,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      s,
      r,
      f,
      gp
    ), t[Ci] = e.current, Mr(t), new Xr(e);
  }, gl.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(o(299));
    var a = !1, s = "", r = xd, f = Dd, y = Cd, T = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), e = sp(
      t,
      1,
      !0,
      e,
      n ?? null,
      a,
      s,
      T,
      r,
      f,
      y,
      gp
    ), e.context = up(null), n = e.current, a = Ce(), a = _u(a), s = Vn(a), s.callback = null, _n(n, s, a), n = a, e.current.lanes = n, Da(e, n), Pe(e), t[Ci] = e.current, Mr(t), new Fs(e);
  }, gl.version = "19.2.8", gl;
}
var zp;
function SS() {
  if (zp) return Zr.exports;
  zp = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), Zr.exports = vS(), Zr.exports;
}
var TS = SS();
const wc = Z.createContext({});
function zl(i) {
  const l = Z.useRef(null);
  return l.current === null && (l.current = i()), l.current;
}
const bS = typeof window < "u", Hc = bS ? Z.useLayoutEffect : Z.useEffect, bu = /* @__PURE__ */ Z.createContext(null);
function Yc(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function pa(i, l) {
  const u = i.indexOf(l);
  u > -1 && i.splice(u, 1);
}
const en = (i, l, u) => u > l ? l : u < i ? i : u;
let Au = () => {
};
const Fn = {}, Wy = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i), Py = (i) => typeof i == "object" && i !== null, $y = (i) => /^0[^.\s]+$/u.test(i);
// @__NO_SIDE_EFFECTS__
function Iy(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const Ye = /* @__NO_SIDE_EFFECTS__ */ (i) => i, Ol = (...i) => i.reduce((l, u) => (o) => u(l(o))), ya = /* @__NO_SIDE_EFFECTS__ */ (i, l, u) => {
  const o = l - i;
  return o ? (u - i) / o : 1;
};
class qc {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return Yc(this.subscriptions, l), () => pa(this.subscriptions, l);
  }
  notify(l, u, o) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1)
        this.subscriptions[0](l, u, o);
      else
        for (let d = 0; d < c; d++) {
          const h = this.subscriptions[d];
          h && h(l, u, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ge = /* @__NO_SIDE_EFFECTS__ */ (i) => i * 1e3, He = /* @__NO_SIDE_EFFECTS__ */ (i) => i / 1e3, tg = /* @__NO_SIDE_EFFECTS__ */ (i, l) => l ? i * (1e3 / l) : 0, AS = (i, l, u) => {
  const o = l - i;
  return ((u - i) % o + o) % o + i;
}, eg = (i, l, u) => (((1 - 3 * u + 3 * l) * i + (3 * u - 6 * l)) * i + 3 * l) * i, ES = 1e-7, MS = 12;
function xS(i, l, u, o, c) {
  let d, h, p = 0;
  do
    h = l + (u - l) / 2, d = eg(h, o, c) - i, d > 0 ? u = h : l = h;
  while (Math.abs(d) > ES && ++p < MS);
  return h;
}
// @__NO_SIDE_EFFECTS__
function Vl(i, l, u, o) {
  if (i === l && u === o)
    return Ye;
  const c = (d) => xS(d, 0, 1, i, u);
  return (d) => d === 0 || d === 1 ? d : eg(c(d), l, o);
}
const ng = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2, Gc = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => 1 - i(1 - l), ig = /* @__PURE__ */ Vl(0.33, 1.53, 0.69, 0.99), Xc = /* @__PURE__ */ Gc(ig), ag = /* @__PURE__ */ ng(Xc), lg = (i) => i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * Xc(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))), Kc = (i) => 1 - Math.sin(Math.acos(i)), sg = /* @__PURE__ */ Gc(Kc), ug = /* @__PURE__ */ ng(Kc), DS = /* @__PURE__ */ Vl(0.42, 0, 1, 1), CS = /* @__PURE__ */ Vl(0, 0, 0.58, 1), og = /* @__PURE__ */ Vl(0.42, 0, 0.58, 1), rg = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] != "number";
// @__NO_SIDE_EFFECTS__
function cg(i, l) {
  return /* @__PURE__ */ rg(i) ? i[AS(0, i.length, l)] : i;
}
const fg = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] == "number", RS = {
  linear: Ye,
  easeIn: DS,
  easeInOut: og,
  easeOut: CS,
  circIn: Kc,
  circInOut: ug,
  circOut: sg,
  backIn: Xc,
  backInOut: ag,
  backOut: ig,
  anticipate: lg
}, zS = (i) => typeof i == "string", hc = (i) => {
  if (/* @__PURE__ */ fg(i)) {
    Au(i.length === 4);
    const [l, u, o, c] = i;
    return /* @__PURE__ */ Vl(l, u, o, c);
  } else if (zS(i))
    return RS[i];
  return i;
}, Ps = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function OS(i) {
  let l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), o = !1, c = !1;
  const d = /* @__PURE__ */ new WeakSet();
  let h = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function p(m) {
    d.has(m) && (g.schedule(m), i()), m(h);
  }
  const g = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (m, v = !1, S = !1) => {
      const V = S && o ? l : u;
      return v && d.add(m), V.add(m), m;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (m) => {
      u.delete(m), d.delete(m);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (m) => {
      if (h = m, o) {
        c = !0;
        return;
      }
      o = !0;
      const v = l;
      l = u, u = v, l.forEach(p), l.clear(), o = !1, c && (c = !1, g.process(m));
    }
  };
  return g;
}
const VS = 40;
function hg(i, l) {
  let u = !1, o = !0;
  const c = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, d = () => u = !0, h = Ps.reduce((H, Y) => (H[Y] = OS(d), H), {}), { setup: p, read: g, resolveKeyframes: m, preUpdate: v, update: S, preRender: b, render: V, postRender: C } = h, U = () => {
    const H = Fn.useManualTiming, Y = H ? c.timestamp : performance.now();
    u = !1, H || (c.delta = o ? 1e3 / 60 : Math.max(Math.min(Y - c.timestamp, VS), 1)), c.timestamp = Y, c.isProcessing = !0, p.process(c), g.process(c), m.process(c), v.process(c), S.process(c), b.process(c), V.process(c), C.process(c), c.isProcessing = !1, u && l && (o = !1, i(U));
  }, j = () => {
    u = !0, o = !0, c.isProcessing || i(U);
  };
  return { schedule: Ps.reduce((H, Y) => {
    const tt = h[Y];
    return H[Y] = (et, X = !1, J = !1) => (u || j(), tt.schedule(et, X, J)), H;
  }, {}), cancel: (H) => {
    for (let Y = 0; Y < Ps.length; Y++)
      h[Ps[Y]].cancel(H);
  }, state: c, steps: h };
}
const { schedule: Ot, cancel: Wn, state: le, steps: Wr } = /* @__PURE__ */ hg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ye, !0);
let iu;
function _S() {
  iu = void 0;
}
const oe = {
  now: () => (iu === void 0 && oe.set(le.isProcessing || Fn.useManualTiming ? le.timestamp : performance.now()), iu),
  set: (i) => {
    iu = i, queueMicrotask(_S);
  }
}, dg = (i) => (l) => typeof l == "string" && l.startsWith(i), mg = /* @__PURE__ */ dg("--"), US = /* @__PURE__ */ dg("var(--"), Qc = (i) => US(i) ? BS.test(i.split("/*")[0].trim()) : !1, BS = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Op(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const Sa = {
  test: (i) => typeof i == "number",
  parse: parseFloat,
  transform: (i) => i
}, Ml = {
  ...Sa,
  transform: (i) => en(0, 1, i)
}, $s = {
  ...Sa,
  default: 1
}, Tl = (i) => Math.round(i * 1e5) / 1e5, Zc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function NS(i) {
  return i == null;
}
const jS = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Jc = (i, l) => (u) => !!(typeof u == "string" && jS.test(u) && u.startsWith(i) || l && !NS(u) && Object.prototype.hasOwnProperty.call(u, l)), pg = (i, l, u) => (o) => {
  if (typeof o != "string")
    return o;
  const [c, d, h, p] = o.match(Zc);
  return {
    [i]: parseFloat(c),
    [l]: parseFloat(d),
    [u]: parseFloat(h),
    alpha: p !== void 0 ? parseFloat(p) : 1
  };
}, LS = (i) => en(0, 255, i), Pr = {
  ...Sa,
  transform: (i) => Math.round(LS(i))
}, Ai = {
  test: /* @__PURE__ */ Jc("rgb", "red"),
  parse: /* @__PURE__ */ pg("red", "green", "blue"),
  transform: ({ red: i, green: l, blue: u, alpha: o = 1 }) => "rgba(" + Pr.transform(i) + ", " + Pr.transform(l) + ", " + Pr.transform(u) + ", " + Tl(Ml.transform(o)) + ")"
};
function wS(i) {
  let l = "", u = "", o = "", c = "";
  return i.length > 5 ? (l = i.substring(1, 3), u = i.substring(3, 5), o = i.substring(5, 7), c = i.substring(7, 9)) : (l = i.substring(1, 2), u = i.substring(2, 3), o = i.substring(3, 4), c = i.substring(4, 5), l += l, u += u, o += o, c += c), {
    red: parseInt(l, 16),
    green: parseInt(u, 16),
    blue: parseInt(o, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const dc = {
  test: /* @__PURE__ */ Jc("#"),
  parse: wS,
  transform: Ai.transform
}, _l = /* @__NO_SIDE_EFFECTS__ */ (i) => ({
  test: (l) => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${i}`
}), bn = /* @__PURE__ */ _l("deg"), tn = /* @__PURE__ */ _l("%"), P = /* @__PURE__ */ _l("px"), HS = /* @__PURE__ */ _l("vh"), YS = /* @__PURE__ */ _l("vw"), Vp = {
  ...tn,
  parse: (i) => tn.parse(i) / 100,
  transform: (i) => tn.transform(i * 100)
}, ha = {
  test: /* @__PURE__ */ Jc("hsl", "hue"),
  parse: /* @__PURE__ */ pg("hue", "saturation", "lightness"),
  transform: ({ hue: i, saturation: l, lightness: u, alpha: o = 1 }) => "hsla(" + Math.round(i) + ", " + tn.transform(Tl(l)) + ", " + tn.transform(Tl(u)) + ", " + Tl(Ml.transform(o)) + ")"
}, Ft = {
  test: (i) => Ai.test(i) || dc.test(i) || ha.test(i),
  parse: (i) => Ai.test(i) ? Ai.parse(i) : ha.test(i) ? ha.parse(i) : dc.parse(i),
  transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? Ai.transform(i) : ha.transform(i),
  getAnimatableNone: (i) => {
    const l = Ft.parse(i);
    return l.alpha = 0, Ft.transform(l);
  }
}, qS = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function GS(i) {
  return isNaN(i) && typeof i == "string" && (i.match(Zc)?.length || 0) + (i.match(qS)?.length || 0) > 0;
}
const yg = "number", gg = "color", XS = "var", KS = "var(", _p = "${}", QS = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ga(i) {
  const l = i.toString(), u = [], o = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let d = 0;
  const p = l.replace(QS, (g) => (Ft.test(g) ? (o.color.push(d), c.push(gg), u.push(Ft.parse(g))) : g.startsWith(KS) ? (o.var.push(d), c.push(XS), u.push(g)) : (o.number.push(d), c.push(yg), u.push(parseFloat(g))), ++d, _p)).split(_p);
  return { values: u, split: p, indexes: o, types: c };
}
function ZS(i) {
  return ga(i).values;
}
function vg({ split: i, types: l }) {
  const u = i.length;
  return (o) => {
    let c = "";
    for (let d = 0; d < u; d++)
      if (c += i[d], o[d] !== void 0) {
        const h = l[d];
        h === yg ? c += Tl(o[d]) : h === gg ? c += Ft.transform(o[d]) : c += o[d];
      }
    return c;
  };
}
function JS(i) {
  return vg(ga(i));
}
const kS = (i) => typeof i == "number" ? 0 : Ft.test(i) ? Ft.getAnimatableNone(i) : i, FS = (i, l) => typeof i == "number" ? l?.trim().endsWith("/") ? i : 0 : kS(i);
function WS(i) {
  const l = ga(i);
  return vg(l)(l.values.map((o, c) => FS(o, l.split[c])));
}
const Ze = {
  test: GS,
  parse: ZS,
  createTransformer: JS,
  getAnimatableNone: WS
};
function $r(i, l, u) {
  return u < 0 && (u += 1), u > 1 && (u -= 1), u < 1 / 6 ? i + (l - i) * 6 * u : u < 1 / 2 ? l : u < 2 / 3 ? i + (l - i) * (2 / 3 - u) * 6 : i;
}
function PS({ hue: i, saturation: l, lightness: u, alpha: o }) {
  i /= 360, l /= 100, u /= 100;
  let c = 0, d = 0, h = 0;
  if (!l)
    c = d = h = u;
  else {
    const p = u < 0.5 ? u * (1 + l) : u + l - u * l, g = 2 * u - p;
    c = $r(g, p, i + 1 / 3), d = $r(g, p, i), h = $r(g, p, i - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(h * 255),
    alpha: o
  };
}
function hu(i, l) {
  return (u) => u > 0 ? l : i;
}
const Rt = (i, l, u) => i + (l - i) * u, Ir = (i, l, u) => {
  const o = i * i, c = u * (l * l - o) + o;
  return c < 0 ? 0 : Math.sqrt(c);
}, $S = [dc, Ai, ha], IS = (i) => $S.find((l) => l.test(i));
function Up(i) {
  const l = IS(i);
  if (!l)
    return !1;
  let u = l.parse(i);
  return l === ha && (u = PS(u)), u;
}
const Bp = (i, l) => {
  const u = Up(i), o = Up(l);
  if (!u || !o)
    return hu(i, l);
  const c = { ...u };
  return (d) => (c.red = Ir(u.red, o.red, d), c.green = Ir(u.green, o.green, d), c.blue = Ir(u.blue, o.blue, d), c.alpha = Rt(u.alpha, o.alpha, d), Ai.transform(c));
}, mc = /* @__PURE__ */ new Set(["none", "hidden"]);
function tT(i, l) {
  return mc.has(i) ? (u) => u <= 0 ? i : l : (u) => u >= 1 ? l : i;
}
function eT(i, l) {
  return (u) => Rt(i, l, u);
}
function kc(i) {
  return typeof i == "number" ? eT : typeof i == "string" ? Qc(i) ? hu : Ft.test(i) ? Bp : aT : Array.isArray(i) ? Sg : typeof i == "object" ? Ft.test(i) ? Bp : nT : hu;
}
function Sg(i, l) {
  const u = [...i], o = u.length, c = i.map((d, h) => kc(d)(d, l[h]));
  return (d) => {
    for (let h = 0; h < o; h++)
      u[h] = c[h](d);
    return u;
  };
}
function nT(i, l) {
  const u = { ...i, ...l }, o = {};
  for (const c in u)
    i[c] !== void 0 && l[c] !== void 0 && (o[c] = kc(i[c])(i[c], l[c]));
  return (c) => {
    for (const d in o)
      u[d] = o[d](c);
    return u;
  };
}
function iT(i, l) {
  const u = [], o = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const d = l.types[c], h = i.indexes[d][o[d]], p = i.values[h] ?? 0;
    u[c] = p, o[d]++;
  }
  return u;
}
const aT = (i, l) => {
  const u = Ze.createTransformer(l), o = ga(i), c = ga(l);
  return o.indexes.var.length === c.indexes.var.length && o.indexes.color.length === c.indexes.color.length && o.indexes.number.length >= c.indexes.number.length ? mc.has(i) && !c.values.length || mc.has(l) && !o.values.length ? tT(i, l) : Ol(Sg(iT(o, c), c.values), u) : hu(i, l);
};
function Tg(i, l, u) {
  return typeof i == "number" && typeof l == "number" && typeof u == "number" ? Rt(i, l, u) : kc(i)(i, l);
}
const lT = (i) => {
  const l = ({ timestamp: u }) => i(u);
  return {
    start: (u = !0) => Ot.update(l, u),
    stop: () => Wn(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => le.isProcessing ? le.timestamp : oe.now()
  };
}, bg = (i, l, u = 10) => {
  let o = "";
  const c = Math.max(Math.round(l / u), 2);
  for (let d = 0; d < c; d++)
    o += Math.round(i(d / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${o.substring(0, o.length - 2)})`;
}, du = 2e4;
function Fc(i) {
  let l = 0;
  const u = 50;
  let o = i.next(l);
  for (; !o.done && l < du; )
    l += u, o = i.next(l);
  return l >= du ? 1 / 0 : l;
}
function Ag(i, l = 100, u) {
  const o = u({ ...i, keyframes: [0, l] }), c = Math.min(Fc(o), du);
  return {
    type: "keyframes",
    ease: (d) => o.next(c * d).value / l,
    duration: /* @__PURE__ */ He(c)
  };
}
const Yt = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
};
function pc(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const sT = 12;
function uT(i, l, u) {
  let o = u;
  for (let c = 1; c < sT; c++)
    o = o - i(o) / l(o);
  return o;
}
const tc = 1e-3;
function oT({ duration: i = Yt.duration, bounce: l = Yt.bounce, velocity: u = Yt.velocity, mass: o = Yt.mass }) {
  let c, d, h = 1 - l;
  h = en(Yt.minDamping, Yt.maxDamping, h), i = en(Yt.minDuration, Yt.maxDuration, /* @__PURE__ */ He(i)), h < 1 ? (c = (m) => {
    const v = m * h, S = v * i, b = v - u, V = pc(m, h), C = Math.exp(-S);
    return tc - b / V * C;
  }, d = (m) => {
    const S = m * h * i, b = S * u + u, V = Math.pow(h, 2) * Math.pow(m, 2) * i, C = Math.exp(-S), U = pc(Math.pow(m, 2), h);
    return (-c(m) + tc > 0 ? -1 : 1) * ((b - V) * C) / U;
  }) : (c = (m) => {
    const v = Math.exp(-m * i), S = (m - u) * i + 1;
    return -tc + v * S;
  }, d = (m) => {
    const v = Math.exp(-m * i), S = (u - m) * (i * i);
    return v * S;
  });
  const p = 5 / i, g = uT(c, d, p);
  if (i = /* @__PURE__ */ ge(i), isNaN(g))
    return {
      stiffness: Yt.stiffness,
      damping: Yt.damping,
      duration: i
    };
  {
    const m = Math.pow(g, 2) * o;
    return {
      stiffness: m,
      damping: h * 2 * Math.sqrt(o * m),
      duration: i
    };
  }
}
const rT = ["duration", "bounce"], cT = ["stiffness", "damping", "mass"];
function Np(i, l) {
  return l.some((u) => i[u] !== void 0);
}
function fT(i) {
  let l = {
    velocity: Yt.velocity,
    stiffness: Yt.stiffness,
    damping: Yt.damping,
    mass: Yt.mass,
    isResolvedFromDuration: !1,
    ...i
  };
  if (!Np(i, cT) && Np(i, rT))
    if (l.velocity = 0, i.visualDuration) {
      const u = i.visualDuration, o = 2 * Math.PI / (u * 1.2), c = o * o, d = 2 * en(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
      l = {
        ...l,
        mass: Yt.mass,
        stiffness: c,
        damping: d
      };
    } else {
      const u = oT({ ...i, velocity: 0 });
      l = {
        ...l,
        ...u,
        mass: Yt.mass
      }, l.isResolvedFromDuration = !0;
    }
  return l;
}
function xl(i = Yt.visualDuration, l = Yt.bounce) {
  const u = typeof i != "object" ? {
    visualDuration: i,
    keyframes: [0, 1],
    bounce: l
  } : i;
  let { restSpeed: o, restDelta: c } = u;
  const d = u.keyframes[0], h = u.keyframes[u.keyframes.length - 1], p = { done: !1, value: d }, { stiffness: g, damping: m, mass: v, duration: S, velocity: b, isResolvedFromDuration: V } = fT({
    ...u,
    velocity: -/* @__PURE__ */ He(u.velocity || 0)
  }), C = b || 0, U = m / (2 * Math.sqrt(g * v)), j = h - d, w = /* @__PURE__ */ He(Math.sqrt(g / v)), q = Math.abs(j) < 5;
  o || (o = q ? Yt.restSpeed.granular : Yt.restSpeed.default), c || (c = q ? Yt.restDelta.granular : Yt.restDelta.default);
  let H, Y, tt, et, X, J;
  if (U < 1)
    tt = pc(w, U), et = (C + U * w * j) / tt, H = ($) => {
      const st = Math.exp(-U * w * $);
      return h - st * (et * Math.sin(tt * $) + j * Math.cos(tt * $));
    }, X = U * w * et + j * tt, J = U * w * j - et * tt, Y = ($) => Math.exp(-U * w * $) * (X * Math.sin(tt * $) + J * Math.cos(tt * $));
  else if (U === 1) {
    H = (st) => h - Math.exp(-w * st) * (j + (C + w * j) * st);
    const $ = C + w * j;
    Y = (st) => Math.exp(-w * st) * (w * $ * st - C);
  } else {
    const $ = w * Math.sqrt(U * U - 1);
    H = (Ut) => {
      const Bt = Math.exp(-U * w * Ut), O = Math.min($ * Ut, 300);
      return h - Bt * ((C + U * w * j) * Math.sinh(O) + $ * j * Math.cosh(O)) / $;
    };
    const st = (C + U * w * j) / $, pt = U * w * st - j * $, Lt = U * w * j - st * $;
    Y = (Ut) => {
      const Bt = Math.exp(-U * w * Ut), O = Math.min($ * Ut, 300);
      return Bt * (pt * Math.sinh(O) + Lt * Math.cosh(O));
    };
  }
  const k = {
    calculatedDuration: V && S || null,
    velocity: ($) => /* @__PURE__ */ ge(Y($)),
    next: ($) => {
      if (!V && U < 1) {
        const pt = Math.exp(-U * w * $), Lt = Math.sin(tt * $), Ut = Math.cos(tt * $), Bt = h - pt * (et * Lt + j * Ut), O = /* @__PURE__ */ ge(pt * (X * Lt + J * Ut));
        return p.done = Math.abs(O) <= o && Math.abs(h - Bt) <= c, p.value = p.done ? h : Bt, p;
      }
      const st = H($);
      if (V)
        p.done = $ >= S;
      else {
        const pt = /* @__PURE__ */ ge(Y($));
        p.done = Math.abs(pt) <= o && Math.abs(h - st) <= c;
      }
      return p.value = p.done ? h : st, p;
    },
    toString: () => {
      const $ = Math.min(Fc(k), du), st = bg((pt) => k.next($ * pt).value, $, 30);
      return $ + "ms " + st;
    },
    toTransition: () => {
    }
  };
  return k;
}
xl.applyToOptions = (i) => {
  const l = Ag(i, 100, xl);
  return i.ease = l.ease, i.duration = /* @__PURE__ */ ge(l.duration), i.type = "keyframes", i;
};
const hT = 5;
function Eg(i, l, u) {
  const o = Math.max(l - hT, 0);
  return /* @__PURE__ */ tg(u - i(o), l - o);
}
function yc({ keyframes: i, velocity: l = 0, power: u = 0.8, timeConstant: o = 325, bounceDamping: c = 10, bounceStiffness: d = 500, modifyTarget: h, min: p, max: g, restDelta: m = 0.5, restSpeed: v }) {
  const S = i[0], b = {
    done: !1,
    value: S
  }, V = (J) => p !== void 0 && J < p || g !== void 0 && J > g, C = (J) => p === void 0 ? g : g === void 0 || Math.abs(p - J) < Math.abs(g - J) ? p : g;
  let U = u * l;
  const j = S + U, w = h === void 0 ? j : h(j);
  w !== j && (U = w - S);
  const q = (J) => -U * Math.exp(-J / o), H = (J) => w + q(J), Y = (J) => {
    const k = q(J), $ = H(J);
    b.done = Math.abs(k) <= m, b.value = b.done ? w : $;
  };
  let tt, et;
  const X = (J) => {
    V(b.value) && (tt = J, et = xl({
      keyframes: [b.value, C(b.value)],
      velocity: Eg(H, J, b.value),
      // TODO: This should be passing * 1000
      damping: c,
      stiffness: d,
      restDelta: m,
      restSpeed: v
    }));
  };
  return X(0), {
    calculatedDuration: null,
    next: (J) => {
      let k = !1;
      return !et && tt === void 0 && (k = !0, Y(J), X(J)), tt !== void 0 && J >= tt ? et.next(J - tt) : (!k && Y(J), b);
    }
  };
}
function dT(i, l, u) {
  const o = [], c = u || Fn.mix || Tg, d = i.length - 1;
  for (let h = 0; h < d; h++) {
    let p = c(i[h], i[h + 1]);
    if (l) {
      const g = Array.isArray(l) ? l[h] || Ye : l;
      p = Ol(g, p);
    }
    o.push(p);
  }
  return o;
}
function mT(i, l, { clamp: u = !0, ease: o, mixer: c } = {}) {
  const d = i.length;
  if (Au(d === l.length), d === 1)
    return () => l[0];
  if (d === 2 && l[0] === l[1])
    return () => l[1];
  const h = i[0] === i[1];
  i[0] > i[d - 1] && (i = [...i].reverse(), l = [...l].reverse());
  const p = dT(l, o, c), g = p.length, m = (v) => {
    if (h && v < i[0])
      return l[0];
    let S = 0;
    if (g > 1)
      for (; S < i.length - 2 && !(v < i[S + 1]); S++)
        ;
    const b = /* @__PURE__ */ ya(i[S], i[S + 1], v);
    return p[S](b);
  };
  return u ? (v) => m(en(i[0], i[d - 1], v)) : m;
}
function Mg(i, l) {
  const u = i[i.length - 1];
  for (let o = 1; o <= l; o++) {
    const c = /* @__PURE__ */ ya(0, l, o);
    i.push(Rt(u, 1, c));
  }
}
function xg(i) {
  const l = [0];
  return Mg(l, i.length - 1), l;
}
function pT(i, l) {
  return i.map((u) => u * l);
}
function yT(i, l) {
  return i.map(() => l || og).splice(0, i.length - 1);
}
function bl({ duration: i = 300, keyframes: l, times: u, ease: o = "easeInOut" }) {
  const c = /* @__PURE__ */ rg(o) ? o.map(hc) : hc(o), d = {
    done: !1,
    value: l[0]
  }, h = pT(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    u && u.length === l.length ? u : xg(l),
    i
  ), p = mT(h, l, {
    ease: Array.isArray(c) ? c : yT(l, c)
  });
  return {
    calculatedDuration: i,
    next: (g) => (d.value = p(g), d.done = g >= i, d)
  };
}
const gT = (i) => i !== null;
function Eu(i, { repeat: l, repeatType: u = "loop" }, o, c = 1) {
  const d = i.filter(gT), p = c < 0 || l && u !== "loop" && l % 2 === 1 ? 0 : d.length - 1;
  return !p || o === void 0 ? d[p] : o;
}
const vT = {
  decay: yc,
  inertia: yc,
  tween: bl,
  keyframes: bl,
  spring: xl
};
function Dg(i) {
  typeof i.type == "string" && (i.type = vT[i.type]);
}
class Wc {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(l, u) {
    return this.finished.then(l, u);
  }
}
const ST = (i) => i / 100;
class mu extends Wc {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: u } = this.options;
      u && u.updatedAt !== oe.now() && this.tick(oe.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: l } = this;
    Dg(l);
    const { type: u = bl, repeat: o = 0, repeatDelay: c = 0, repeatType: d, velocity: h = 0 } = l;
    let { keyframes: p } = l;
    const g = u || bl;
    g !== bl && typeof p[0] != "number" && (this.mixKeyframes = Ol(ST, Tg(p[0], p[1])), p = [0, 100]);
    const m = g({ ...l, keyframes: p });
    d === "mirror" && (this.mirroredGenerator = g({
      ...l,
      keyframes: [...p].reverse(),
      velocity: -h
    })), m.calculatedDuration === null && (m.calculatedDuration = Fc(m));
    const { calculatedDuration: v } = m;
    this.calculatedDuration = v, this.resolvedDuration = v + c, this.totalDuration = this.resolvedDuration * (o + 1) - c, this.generator = m;
  }
  updateTime(l) {
    const u = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = u;
  }
  tick(l, u = !1) {
    const { generator: o, totalDuration: c, mixKeyframes: d, mirroredGenerator: h, resolvedDuration: p, calculatedDuration: g } = this;
    if (this.startTime === null)
      return o.next(0);
    const { delay: m = 0, keyframes: v, repeat: S, repeatType: b, repeatDelay: V, type: C, onUpdate: U, finalKeyframe: j } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), u ? this.currentTime = l : this.updateTime(l);
    const w = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1), q = this.playbackSpeed >= 0 ? w < 0 : w > c;
    this.currentTime = Math.max(w, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let H = this.currentTime, Y = o;
    if (S) {
      const J = Math.min(this.currentTime, c) / p;
      let k = Math.floor(J), $ = J % 1;
      !$ && J >= 1 && ($ = 1), $ === 1 && k--, k = Math.min(k, S + 1), k % 2 && (b === "reverse" ? ($ = 1 - $, V && ($ -= V / p)) : b === "mirror" && (Y = h)), H = en(0, 1, $) * p;
    }
    let tt;
    q ? (this.delayState.value = v[0], tt = this.delayState) : tt = Y.next(H), d && !q && (tt.value = d(tt.value));
    let { done: et } = tt;
    !q && g !== null && (et = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const X = this.holdTime === null && (this.state === "finished" || this.state === "running" && et);
    return X && C !== yc && (tt.value = Eu(v, this.options, j, this.speed)), U && U(tt.value), X && this.finish(), tt;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(l, u) {
    return this.finished.then(l, u);
  }
  get duration() {
    return /* @__PURE__ */ He(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ He(l);
  }
  get time() {
    return /* @__PURE__ */ He(this.currentTime);
  }
  set time(l) {
    l = /* @__PURE__ */ ge(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = l, this.tick(l));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const l = this.currentTime;
    if (l <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(l);
    const u = this.generator.next(l).value;
    return Eg((o) => this.generator.next(o).value, l, u);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const u = this.playbackSpeed !== l;
    u && this.driver && this.updateTime(oe.now()), this.playbackSpeed = l, u && this.driver && (this.time = /* @__PURE__ */ He(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: l = lT, startTime: u } = this.options;
    this.driver || (this.driver = l((c) => this.tick(c))), this.options.onPlay?.();
    const o = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = u ?? o), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(oe.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(l) {
    return this.startTime = 0, this.tick(l, !0);
  }
  attachTimeline(l) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), l.observe(this);
  }
}
function TT(i) {
  for (let l = 1; l < i.length; l++)
    i[l] ?? (i[l] = i[l - 1]);
}
const Ei = (i) => i * 180 / Math.PI, gc = (i) => {
  const l = Ei(Math.atan2(i[1], i[0]));
  return vc(l);
}, bT = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
  rotate: gc,
  rotateZ: gc,
  skewX: (i) => Ei(Math.atan(i[1])),
  skewY: (i) => Ei(Math.atan(i[2])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}, vc = (i) => (i = i % 360, i < 0 && (i += 360), i), jp = gc, Lp = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]), wp = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]), AT = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Lp,
  scaleY: wp,
  scale: (i) => (Lp(i) + wp(i)) / 2,
  rotateX: (i) => vc(Ei(Math.atan2(i[6], i[5]))),
  rotateY: (i) => vc(Ei(Math.atan2(-i[2], i[0]))),
  rotateZ: jp,
  rotate: jp,
  skewX: (i) => Ei(Math.atan(i[4])),
  skewY: (i) => Ei(Math.atan(i[1])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function Sc(i) {
  return i.includes("scale") ? 1 : 0;
}
function Tc(i, l) {
  if (!i || i === "none")
    return Sc(l);
  const u = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, c;
  if (u)
    o = AT, c = u;
  else {
    const p = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    o = bT, c = p;
  }
  if (!c)
    return Sc(l);
  const d = o[l], h = c[1].split(",").map(MT);
  return typeof d == "function" ? d(h) : h[d];
}
const ET = (i, l) => {
  const { transform: u = "none" } = getComputedStyle(i);
  return Tc(u, l);
};
function MT(i) {
  return parseFloat(i.trim());
}
const Ta = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], ba = /* @__PURE__ */ new Set([...Ta, "pathRotation"]), Hp = (i) => i === Sa || i === P, xT = /* @__PURE__ */ new Set(["x", "y", "z"]), DT = Ta.filter((i) => !xT.has(i));
function CT(i) {
  const l = [];
  return DT.forEach((u) => {
    const o = i.getValue(u);
    o !== void 0 && (l.push([u, o.get()]), o.set(u.startsWith("scale") ? 1 : 0));
  }), l;
}
const kn = {
  // Dimensions
  width: ({ x: i }, { paddingLeft: l = "0", paddingRight: u = "0", boxSizing: o }) => {
    const c = i.max - i.min;
    return o === "border-box" ? c : c - parseFloat(l) - parseFloat(u);
  },
  height: ({ y: i }, { paddingTop: l = "0", paddingBottom: u = "0", boxSizing: o }) => {
    const c = i.max - i.min;
    return o === "border-box" ? c : c - parseFloat(l) - parseFloat(u);
  },
  top: (i, { top: l }) => parseFloat(l),
  left: (i, { left: l }) => parseFloat(l),
  bottom: ({ y: i }, { top: l }) => parseFloat(l) + (i.max - i.min),
  right: ({ x: i }, { left: l }) => parseFloat(l) + (i.max - i.min),
  // Transform
  x: (i, { transform: l }) => Tc(l, "x"),
  y: (i, { transform: l }) => Tc(l, "y")
};
kn.translateX = kn.x;
kn.translateY = kn.y;
const Mi = /* @__PURE__ */ new Set();
let bc = !1, Ac = !1, Ec = !1;
function Cg() {
  if (Ac) {
    const i = Array.from(Mi).filter((o) => o.needsMeasurement), l = new Set(i.map((o) => o.element)), u = /* @__PURE__ */ new Map();
    l.forEach((o) => {
      const c = CT(o);
      c.length && (u.set(o, c), o.render());
    }), i.forEach((o) => o.measureInitialState()), l.forEach((o) => {
      o.render();
      const c = u.get(o);
      c && c.forEach(([d, h]) => {
        o.getValue(d)?.set(h);
      });
    }), i.forEach((o) => o.measureEndState()), i.forEach((o) => {
      o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
    });
  }
  Ac = !1, bc = !1, Mi.forEach((i) => i.complete(Ec)), Mi.clear();
}
function Rg() {
  Mi.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (Ac = !0);
  });
}
function RT() {
  Ec = !0, Rg(), Cg(), Ec = !1;
}
class Pc {
  constructor(l, u, o, c, d, h = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = u, this.name = o, this.motionValue = c, this.element = d, this.isAsync = h;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Mi.add(this), bc || (bc = !0, Ot.read(Rg), Ot.resolveKeyframes(Cg))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: u, element: o, motionValue: c } = this;
    if (l[0] === null) {
      const d = c?.get(), h = l[l.length - 1];
      if (d !== void 0)
        l[0] = d;
      else if (o && u) {
        const p = o.readValue(u, h);
        p != null && (l[0] = p);
      }
      l[0] === void 0 && (l[0] = h), c && d === void 0 && c.set(l[0]);
    }
    TT(l);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(l = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), Mi.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Mi.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const zT = (i) => i.startsWith("--");
function zg(i, l, u) {
  zT(l) ? i.style.setProperty(l, u) : i.style[l] = u;
}
const OT = {};
function Og(i, l) {
  const u = /* @__PURE__ */ Iy(i);
  return () => OT[l] ?? u();
}
const VT = /* @__PURE__ */ Og(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Vg = /* @__PURE__ */ Og(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Sl = ([i, l, u, o]) => `cubic-bezier(${i}, ${l}, ${u}, ${o})`, Yp = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Sl([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Sl([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Sl([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Sl([0.33, 1.53, 0.69, 0.99])
};
function _g(i, l) {
  if (i)
    return typeof i == "function" ? Vg() ? bg(i, l) : "ease-out" : /* @__PURE__ */ fg(i) ? Sl(i) : Array.isArray(i) ? i.map((u) => _g(u, l) || Yp.easeOut) : Yp[i];
}
function _T(i, l, u, { delay: o = 0, duration: c = 300, repeat: d = 0, repeatType: h = "loop", ease: p = "easeOut", times: g } = {}, m = void 0) {
  const v = {
    [l]: u
  };
  g && (v.offset = g);
  const S = _g(p, c);
  Array.isArray(S) && (v.easing = S);
  const b = {
    delay: o,
    duration: c,
    easing: Array.isArray(S) ? "linear" : S,
    fill: "both",
    iterations: d + 1,
    direction: h === "reverse" ? "alternate" : "normal"
  };
  return m && (b.pseudoElement = m), i.animate(v, b);
}
function $c(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function UT({ type: i, ...l }) {
  return $c(i) && Vg() ? i.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class Ug extends Wc {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: u, name: o, keyframes: c, pseudoElement: d, allowFlatten: h = !1, finalKeyframe: p, onComplete: g } = l;
    this.isPseudoElement = !!d, this.allowFlatten = h, this.options = l, Au(typeof l.type != "string");
    const m = UT(l);
    this.animation = _T(u, o, c, m, d), m.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !d) {
        const v = Eu(c, this.options, p, this.speed);
        this.updateMotionValue && this.updateMotionValue(v), zg(u, o, v), this.animation.cancel();
      }
      g?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    const l = this.options?.element;
    !this.isPseudoElement && l?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const l = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ He(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ He(l);
  }
  get time() {
    return /* @__PURE__ */ He(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const u = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ ge(l), u && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), this.animation.playbackRate = l;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: l, rangeStart: u, rangeEnd: o, observe: c }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, l && VT() ? (this.animation.timeline = l, u && (this.animation.rangeStart = u), o && (this.animation.rangeEnd = o), Ye) : c(this);
  }
}
const Bg = {
  anticipate: lg,
  backInOut: ag,
  circInOut: ug
};
function BT(i) {
  return i in Bg;
}
function NT(i) {
  typeof i.ease == "string" && BT(i.ease) && (i.ease = Bg[i.ease]);
}
const ec = 10;
class jT extends Ug {
  constructor(l) {
    NT(l), Dg(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(l) {
    const { motionValue: u, onUpdate: o, onComplete: c, element: d, ...h } = this.options;
    if (!u)
      return;
    if (l !== void 0) {
      u.set(l);
      return;
    }
    const p = new mu({
      ...h,
      autoplay: !1
    }), g = Math.max(ec, oe.now() - this.startTime), m = en(0, ec, g - ec), v = p.sample(g).value, { name: S } = this.options;
    d && S && zg(d, S, v), u.setWithVelocity(p.sample(Math.max(0, g - m)).value, v, m), p.stop();
  }
}
const qp = (i, l) => l === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && // It's animatable if we have a string
(Ze.test(i) || i === "0") && // And it contains numbers and/or colors
!i.startsWith("url("));
function LT(i) {
  const l = i[0];
  if (i.length === 1)
    return !0;
  for (let u = 0; u < i.length; u++)
    if (i[u] !== l)
      return !0;
}
function wT(i, l, u, o) {
  const c = i[0];
  if (c === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const d = i[i.length - 1], h = qp(c, l), p = qp(d, l);
  return !h || !p ? !1 : LT(i) || (u === "spring" || $c(u)) && o;
}
function Mc(i) {
  i.duration = 0, i.type = "keyframes";
}
const Ng = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), HT = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function YT(i) {
  for (let l = 0; l < i.length; l++)
    if (typeof i[l] == "string" && HT.test(i[l]))
      return !0;
  return !1;
}
const qT = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]), GT = /* @__PURE__ */ Iy(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function XT(i) {
  const { motionValue: l, name: u, repeatDelay: o, repeatType: c, damping: d, type: h, keyframes: p } = i, g = l?.owner?.current;
  if (!(g instanceof HTMLElement) && !(g instanceof SVGElement))
    return !1;
  const { onUpdate: m, transformTemplate: v } = l.owner.getProps();
  return GT() && u && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Ng.has(u) || qT.has(u) && YT(p)) && (u !== "transform" || !v) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !m && !o && c !== "mirror" && d !== 0 && h !== "inertia";
}
const KT = 40;
class QT extends Wc {
  constructor({ autoplay: l = !0, delay: u = 0, type: o = "keyframes", repeat: c = 0, repeatDelay: d = 0, repeatType: h = "loop", keyframes: p, name: g, motionValue: m, element: v, ...S }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = oe.now();
    const b = {
      autoplay: l,
      delay: u,
      type: o,
      repeat: c,
      repeatDelay: d,
      repeatType: h,
      name: g,
      motionValue: m,
      element: v,
      ...S
    }, V = v?.KeyframeResolver || Pc;
    this.keyframeResolver = new V(p, (C, U, j) => this.onKeyframesResolved(C, U, b, !j), g, m, v), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, u, o, c) {
    this.keyframeResolver = void 0;
    const { name: d, type: h, velocity: p, delay: g, isHandoff: m, onUpdate: v } = o;
    this.resolvedAt = oe.now();
    let S = !0;
    wT(l, d, h, p) || (S = !1, (Fn.instantAnimations || !g) && v?.(Eu(l, o, u)), l[0] = l[l.length - 1], Mc(o), o.repeat = 0);
    const V = {
      startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > KT ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: u,
      ...o,
      keyframes: l
    }, C = S && !m && XT(V), U = V.motionValue?.owner?.current;
    let j;
    if (C)
      try {
        j = new jT({
          ...V,
          element: U
        });
      } catch {
        j = new mu(V);
      }
    else
      j = new mu(V);
    j.finished.then(() => {
      this.notifyFinished();
    }).catch(Ye), this.pendingTimeline && (this.stopTimeline = j.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = j;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, u) {
    return this.finished.finally(l).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), RT()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
class ZT {
  constructor(l) {
    this.stop = () => this.runAll("stop"), this.animations = l.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((l) => l.finished));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(l) {
    return this.animations[0][l];
  }
  setAll(l, u) {
    for (let o = 0; o < this.animations.length; o++)
      this.animations[o][l] = u;
  }
  attachTimeline(l) {
    const u = this.animations.map((o) => o.attachTimeline(l));
    return () => {
      u.forEach((o, c) => {
        o && o(), this.animations[c].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(l) {
    this.setAll("time", l);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(l) {
    this.setAll("speed", l);
  }
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    return Gp(this.animations, "duration");
  }
  get iterationDuration() {
    return Gp(this.animations, "iterationDuration");
  }
  runAll(l) {
    this.animations.forEach((u) => u[l]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function Gp(i, l) {
  let u = 0;
  for (let o = 0; o < i.length; o++) {
    const c = i[o][l];
    c !== null && c > u && (u = c);
  }
  return u;
}
class JT extends ZT {
  then(l, u) {
    return this.finished.finally(l).then(() => {
    });
  }
}
function jg(i, l, u, o = 0, c = 1) {
  const d = Array.from(i).sort((m, v) => m.sortNodePosition(v)).indexOf(l), h = i.size, p = (h - 1) * o;
  return typeof u == "function" ? u(d, h) : c === 1 ? d * o : p - d * o;
}
const Xp = 30, kT = (i) => !isNaN(parseFloat(i));
class FT {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(l, u = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (o) => {
      const c = oe.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const d of this.dependents)
          d.dirty();
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = u.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = oe.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = kT(this.current));
  }
  setPrevFrameValue(l = this.current) {
    this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(l) {
    return this.on("change", l);
  }
  on(l, u) {
    this.events[l] || (this.events[l] = new qc());
    const o = this.events[l].add(u);
    return l === "change" ? () => {
      o(), Ot.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : o;
  }
  clearListeners() {
    for (const l in this.events)
      this.events[l].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(l, u) {
    this.passiveEffect = l, this.stopPassiveEffect = u;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(l) {
    this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l);
  }
  setWithVelocity(l, u, o) {
    this.set(u), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - o;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(l, u = !0) {
    this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, u && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(l) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(l);
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const l = oe.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Xp)
      return 0;
    const u = Math.min(this.updatedAt - this.prevUpdatedAt, Xp);
    return /* @__PURE__ */ tg(parseFloat(this.current) - parseFloat(this.prevFrameValue), u);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(l) {
    return this.stop(), new Promise((u) => {
      this.hasAnimated = !0, this.animation = l(u), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Pn(i, l) {
  return new FT(i, l);
}
function Ic(i, l) {
  if (i?.inherit && l) {
    const { inherit: u, ...o } = i;
    return { ...l, ...o };
  }
  return i;
}
function tf(i, l) {
  const u = i?.[l] ?? i?.default ?? i;
  return u !== i ? Ic(u, i) : u;
}
const WT = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, PT = (i) => ({
  type: "spring",
  stiffness: 550,
  damping: i === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), $T = {
  type: "keyframes",
  duration: 0.8
}, IT = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, tb = (i, { keyframes: l }) => l.length > 2 ? $T : ba.has(i) ? i.startsWith("scale") ? PT(l[1]) : WT : IT, eb = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed"
]);
function nb(i) {
  for (const l in i)
    if (!eb.has(l))
      return !0;
  return !1;
}
const ef = (i, l, u, o = {}, c, d) => (h) => {
  const p = tf(o, i) || {}, g = p.delay || o.delay || 0;
  let { elapsed: m = 0 } = o;
  m = m - /* @__PURE__ */ ge(g);
  const v = {
    keyframes: Array.isArray(u) ? u : [null, u],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...p,
    delay: -m,
    onUpdate: (b) => {
      l.set(b), p.onUpdate && p.onUpdate(b);
    },
    onComplete: () => {
      h(), p.onComplete && p.onComplete();
    },
    name: i,
    motionValue: l,
    element: d ? void 0 : c
  };
  nb(p) || Object.assign(v, tb(i, v)), v.duration && (v.duration = /* @__PURE__ */ ge(v.duration)), v.repeatDelay && (v.repeatDelay = /* @__PURE__ */ ge(v.repeatDelay)), v.from !== void 0 && (v.keyframes[0] = v.from);
  let S = !1;
  if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (Mc(v), v.delay === 0 && (S = !0)), (Fn.instantAnimations || Fn.skipAnimations || c?.shouldSkipAnimations || p.skipAnimations) && (S = !0, Mc(v), v.delay = 0), v.allowFlatten = !p.type && !p.ease, S && !d && l.get() !== void 0) {
    const b = Eu(v.keyframes, p);
    if (b !== void 0) {
      Ot.update(() => {
        v.onUpdate(b), v.onComplete();
      });
      return;
    }
  }
  return p.isSync ? new mu(v) : new QT(v);
}, ib = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function ab(i) {
  const l = ib.exec(i);
  if (!l)
    return [,];
  const [, u, o, c] = l;
  return [`--${u ?? o}`, c];
}
function Lg(i, l, u = 1) {
  const [o, c] = ab(i);
  if (!o)
    return;
  const d = window.getComputedStyle(l).getPropertyValue(o);
  if (d) {
    const h = d.trim();
    return Wy(h) ? parseFloat(h) : h;
  }
  return Qc(c) ? Lg(c, l, u + 1) : c;
}
function Kp(i) {
  const l = [{}, {}];
  return i?.values.forEach((u, o) => {
    l[0][o] = u.get(), l[1][o] = u.getVelocity();
  }), l;
}
function nf(i, l, u, o) {
  if (typeof l == "function") {
    const [c, d] = Kp(o);
    l = l(u !== void 0 ? u : i.custom, c, d);
  }
  if (typeof l == "string" && (l = i.variants && i.variants[l]), typeof l == "function") {
    const [c, d] = Kp(o);
    l = l(u !== void 0 ? u : i.custom, c, d);
  }
  return l;
}
function xi(i, l, u) {
  const o = i.getProps();
  return nf(o, l, u !== void 0 ? u : o.custom, i);
}
const wg = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Ta
]), xc = (i) => Array.isArray(i);
function lb(i, l, u) {
  i.hasValue(l) ? i.getValue(l).set(u) : i.addValue(l, Pn(u));
}
function sb(i) {
  return xc(i) ? i[i.length - 1] || 0 : i;
}
function ub(i, l) {
  const u = xi(i, l);
  let { transitionEnd: o = {}, transition: c = {}, ...d } = u || {};
  d = { ...d, ...o };
  for (const h in d) {
    const p = sb(d[h]);
    lb(i, h, p);
  }
}
const Pt = (i) => !!(i && i.getVelocity);
function ob(i) {
  return !!(Pt(i) && i.add);
}
function Dc(i, l) {
  const u = i.getValue("willChange");
  if (ob(u))
    return u.add(l);
  if (!u && Fn.WillChange) {
    const o = new Fn.WillChange("auto");
    i.addValue("willChange", o), o.add(l);
  }
}
function af(i) {
  return i.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const rb = "framerAppearId", Hg = "data-" + af(rb);
function Yg(i) {
  return i.props[Hg];
}
function cb({ protectedKeys: i, needsAnimating: l }, u) {
  const o = i.hasOwnProperty(u) && l[u] !== !0;
  return l[u] = !1, o;
}
function lf(i, l, { delay: u = 0, transitionOverride: o, type: c } = {}) {
  let { transition: d, transitionEnd: h, ...p } = l;
  const g = i.getDefaultTransition();
  d = d ? Ic(d, g) : g;
  const m = d?.reduceMotion, v = d?.skipAnimations;
  o && (d = o);
  const S = [], b = c && i.animationState && i.animationState.getState()[c], V = d?.path;
  V && V.animateVisualElement(i, p, d, u, S);
  for (const C in p) {
    const U = i.getValue(C, i.latestValues[C] ?? null), j = p[C];
    if (j === void 0 || b && cb(b, C))
      continue;
    const w = {
      delay: u,
      ...tf(d || {}, C)
    };
    v && (w.skipAnimations = !0);
    const q = U.get();
    if (q !== void 0 && !U.isAnimating() && !Array.isArray(j) && j === q && !w.velocity) {
      Ot.update(() => U.set(j));
      continue;
    }
    let H = !1;
    if (window.MotionHandoffAnimation) {
      const et = Yg(i);
      if (et) {
        const X = window.MotionHandoffAnimation(et, C, Ot);
        X !== null && (w.startTime = X, H = !0);
      }
    }
    Dc(i, C);
    const Y = m ?? i.shouldReduceMotion;
    U.start(ef(C, U, j, Y && wg.has(C) ? { type: !1 } : w, i, H));
    const tt = U.animation;
    tt && S.push(tt);
  }
  if (h) {
    const C = () => Ot.update(() => {
      h && ub(i, h);
    });
    S.length ? Promise.all(S).then(C) : C();
  }
  return S;
}
function Cc(i, l, u = {}) {
  const o = xi(i, l, u.type === "exit" ? i.presenceContext?.custom : void 0);
  let { transition: c = i.getDefaultTransition() || {} } = o || {};
  u.transitionOverride && (c = u.transitionOverride);
  const d = o ? () => Promise.all(lf(i, o, u)) : () => Promise.resolve(), h = i.variantChildren && i.variantChildren.size ? (g = 0) => {
    const { delayChildren: m = 0, staggerChildren: v, staggerDirection: S } = c;
    return fb(i, l, g, m, v, S, u);
  } : () => Promise.resolve(), { when: p } = c;
  if (p) {
    const [g, m] = p === "beforeChildren" ? [d, h] : [h, d];
    return g().then(() => m());
  } else
    return Promise.all([d(), h(u.delay)]);
}
function fb(i, l, u = 0, o = 0, c = 0, d = 1, h) {
  const p = [];
  for (const g of i.variantChildren)
    g.notify("AnimationStart", l), p.push(Cc(g, l, {
      ...h,
      delay: u + (typeof o == "function" ? 0 : o) + jg(i.variantChildren, g, o, c, d)
    }).then(() => g.notify("AnimationComplete", l)));
  return Promise.all(p);
}
function hb(i, l, u = {}) {
  i.notify("AnimationStart", l);
  let o;
  if (Array.isArray(l)) {
    const c = l.map((d) => Cc(i, d, u));
    o = Promise.all(c);
  } else if (typeof l == "string")
    o = Cc(i, l, u);
  else {
    const c = typeof l == "function" ? xi(i, l, u.custom) : l;
    o = Promise.all(lf(i, c, u));
  }
  return o.then(() => {
    i.notify("AnimationComplete", l);
  });
}
const db = {
  test: (i) => i === "auto",
  parse: (i) => i
}, qg = (i) => (l) => l.test(i), Gg = [Sa, P, tn, bn, YS, HS, db], Qp = (i) => Gg.find(qg(i));
function mb(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || $y(i) : !0;
}
const pb = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function yb(i) {
  const [l, u] = i.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return i;
  const [o] = u.match(Zc) || [];
  if (!o)
    return i;
  const c = u.replace(o, "");
  let d = pb.has(l) ? 1 : 0;
  return o !== u && (d *= 100), l + "(" + d + c + ")";
}
const gb = /\b([a-z-]*)\(.*?\)/gu, Rc = {
  ...Ze,
  getAnimatableNone: (i) => {
    const l = i.match(gb);
    return l ? l.map(yb).join(" ") : i;
  }
}, zc = {
  ...Ze,
  getAnimatableNone: (i) => {
    const l = Ze.parse(i);
    return Ze.createTransformer(i)(l.map((o) => typeof o == "number" ? 0 : typeof o == "object" ? { ...o, alpha: 1 } : o));
  }
}, Zp = {
  ...Sa,
  transform: Math.round
}, vb = {
  rotate: bn,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: bn,
  rotateX: bn,
  rotateY: bn,
  rotateZ: bn,
  scale: $s,
  scaleX: $s,
  scaleY: $s,
  scaleZ: $s,
  skew: bn,
  skewX: bn,
  skewY: bn,
  distance: P,
  translateX: P,
  translateY: P,
  translateZ: P,
  x: P,
  y: P,
  z: P,
  perspective: P,
  transformPerspective: P,
  opacity: Ml,
  originX: Vp,
  originY: Vp,
  originZ: P
}, pu = {
  // Border props
  borderWidth: P,
  borderTopWidth: P,
  borderRightWidth: P,
  borderBottomWidth: P,
  borderLeftWidth: P,
  borderRadius: P,
  borderTopLeftRadius: P,
  borderTopRightRadius: P,
  borderBottomRightRadius: P,
  borderBottomLeftRadius: P,
  // Positioning props
  width: P,
  maxWidth: P,
  height: P,
  maxHeight: P,
  top: P,
  right: P,
  bottom: P,
  left: P,
  inset: P,
  insetBlock: P,
  insetBlockStart: P,
  insetBlockEnd: P,
  insetInline: P,
  insetInlineStart: P,
  insetInlineEnd: P,
  // Spacing props
  padding: P,
  paddingTop: P,
  paddingRight: P,
  paddingBottom: P,
  paddingLeft: P,
  paddingBlock: P,
  paddingBlockStart: P,
  paddingBlockEnd: P,
  paddingInline: P,
  paddingInlineStart: P,
  paddingInlineEnd: P,
  margin: P,
  marginTop: P,
  marginRight: P,
  marginBottom: P,
  marginLeft: P,
  marginBlock: P,
  marginBlockStart: P,
  marginBlockEnd: P,
  marginInline: P,
  marginInlineStart: P,
  marginInlineEnd: P,
  // Typography
  fontSize: P,
  // Misc
  backgroundPositionX: P,
  backgroundPositionY: P,
  ...vb,
  zIndex: Zp,
  // SVG
  fillOpacity: Ml,
  strokeOpacity: Ml,
  numOctaves: Zp
}, Sb = {
  ...pu,
  // Color props
  color: Ft,
  backgroundColor: Ft,
  outlineColor: Ft,
  fill: Ft,
  stroke: Ft,
  // Border props
  borderColor: Ft,
  borderTopColor: Ft,
  borderRightColor: Ft,
  borderBottomColor: Ft,
  borderLeftColor: Ft,
  filter: Rc,
  WebkitFilter: Rc,
  mask: zc,
  WebkitMask: zc
}, Xg = (i) => Sb[i], Tb = /* @__PURE__ */ new Set([Rc, zc]);
function Kg(i, l) {
  let u = Xg(i);
  return Tb.has(u) || (u = Ze), u.getAnimatableNone ? u.getAnimatableNone(l) : void 0;
}
const bb = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Ab(i, l, u) {
  let o = 0, c;
  for (; o < i.length && !c; ) {
    const d = i[o];
    typeof d == "string" && !bb.has(d) && ga(d).values.length && (c = i[o]), o++;
  }
  if (c && u)
    for (const d of l)
      i[d] = Kg(u, c);
}
class Eb extends Pc {
  constructor(l, u, o, c, d) {
    super(l, u, o, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: u, name: o } = this;
    if (!u || !u.current)
      return;
    super.readKeyframes();
    for (let v = 0; v < l.length; v++) {
      let S = l[v];
      if (typeof S == "string" && (S = S.trim(), Qc(S))) {
        const b = Lg(S, u.current);
        b !== void 0 && (l[v] = b), v === l.length - 1 && (this.finalKeyframe = S);
      }
    }
    if (this.resolveNoneKeyframes(), !wg.has(o) || l.length !== 2)
      return;
    const [c, d] = l, h = Qp(c), p = Qp(d), g = Op(c), m = Op(d);
    if (g !== m && kn[o]) {
      this.needsMeasurement = !0;
      return;
    }
    if (h !== p)
      if (Hp(h) && Hp(p))
        for (let v = 0; v < l.length; v++) {
          const S = l[v];
          typeof S == "string" && (l[v] = parseFloat(S));
        }
      else kn[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: u } = this, o = [];
    for (let c = 0; c < l.length; c++)
      (l[c] === null || mb(l[c])) && o.push(c);
    o.length && Ab(l, o, u);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: u, name: o } = this;
    if (!l || !l.current)
      return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = kn[o](l.measureViewportBox(), window.getComputedStyle(l.current)), u[0] = this.measuredOrigin;
    const c = u[u.length - 1];
    c !== void 0 && l.getValue(o, c).jump(c, !1);
  }
  measureEndState() {
    const { element: l, name: u, unresolvedKeyframes: o } = this;
    if (!l || !l.current)
      return;
    const c = l.getValue(u);
    c && c.jump(this.measuredOrigin, !1);
    const d = o.length - 1, h = o[d];
    o[d] = kn[u](l.measureViewportBox(), window.getComputedStyle(l.current)), h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h), this.removedTransforms?.length && this.removedTransforms.forEach(([p, g]) => {
      l.getValue(p).set(g);
    }), this.resolveNoneKeyframes();
  }
}
const sf = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function uf(i, l, u) {
  if (i == null)
    return [];
  if (i instanceof EventTarget)
    return [i];
  if (typeof i == "string") {
    let o = document;
    l && (o = l.current);
    const c = u?.[i] ?? o.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i).filter((o) => o != null);
}
const Oc = (i, l) => l && typeof i == "number" ? l.transform(i) : i;
function au(i) {
  return Py(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
const { schedule: of } = /* @__PURE__ */ hg(queueMicrotask, !1), Qe = {
  x: !1,
  y: !1
};
function Qg() {
  return Qe.x || Qe.y;
}
function Mb(i) {
  return i === "x" || i === "y" ? Qe[i] ? null : (Qe[i] = !0, () => {
    Qe[i] = !1;
  }) : Qe.x || Qe.y ? null : (Qe.x = Qe.y = !0, () => {
    Qe.x = Qe.y = !1;
  });
}
function Zg(i, l) {
  const u = uf(i), o = new AbortController(), c = {
    passive: !0,
    ...l,
    signal: o.signal
  };
  return [u, c, () => o.abort()];
}
function xb(i) {
  return !(i.pointerType === "touch" || Qg());
}
function Db(i, l, u = {}) {
  const [o, c, d] = Zg(i, u);
  return o.forEach((h) => {
    let p = !1, g = !1, m;
    const v = () => {
      h.removeEventListener("pointerleave", C);
    }, S = (j) => {
      m && (m(j), m = void 0), v();
    }, b = (j) => {
      p = !1, window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b), g && (g = !1, S(j));
    }, V = () => {
      p = !0, window.addEventListener("pointerup", b, c), window.addEventListener("pointercancel", b, c);
    }, C = (j) => {
      if (j.pointerType !== "touch") {
        if (p) {
          g = !0;
          return;
        }
        S(j);
      }
    }, U = (j) => {
      if (!xb(j))
        return;
      g = !1;
      const w = l(h, j);
      typeof w == "function" && (m = w, h.addEventListener("pointerleave", C, c));
    };
    h.addEventListener("pointerenter", U, c), h.addEventListener("pointerdown", V, c);
  }), d;
}
const Jg = (i, l) => l ? i === l ? !0 : Jg(i, l.parentElement) : !1, rf = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1, Cb = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Rb(i) {
  return Cb.has(i.tagName) || i.isContentEditable === !0;
}
const zb = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function Ob(i) {
  return zb.has(i.tagName) || i.isContentEditable === !0;
}
const lu = /* @__PURE__ */ new WeakSet();
function Jp(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function nc(i, l) {
  i.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const Vb = (i, l) => {
  const u = i.currentTarget;
  if (!u)
    return;
  const o = Jp(() => {
    if (lu.has(u))
      return;
    nc(u, "down");
    const c = Jp(() => {
      nc(u, "up");
    }), d = () => nc(u, "cancel");
    u.addEventListener("keyup", c, l), u.addEventListener("blur", d, l);
  });
  u.addEventListener("keydown", o, l), u.addEventListener("blur", () => u.removeEventListener("keydown", o), l);
};
function kp(i) {
  return rf(i) && !Qg();
}
const Fp = /* @__PURE__ */ new WeakSet();
function _b(i, l, u = {}) {
  const [o, c, d] = Zg(i, u), h = (p) => {
    const g = p.currentTarget;
    if (!kp(p) || Fp.has(p))
      return;
    lu.add(g), u.stopPropagation && Fp.add(p);
    const m = l(g, p), v = { ...c, capture: !0 }, S = (C, U) => {
      window.removeEventListener("pointerup", b, v), window.removeEventListener("pointercancel", V, v), lu.has(g) && lu.delete(g), kp(C) && typeof m == "function" && m(C, { success: U });
    }, b = (C) => {
      S(C, g === window || g === document || u.useGlobalTarget || Jg(g, C.target));
    }, V = (C) => {
      S(C, !1);
    };
    window.addEventListener("pointerup", b, v), window.addEventListener("pointercancel", V, v);
  };
  return o.forEach((p) => {
    (u.useGlobalTarget ? window : p).addEventListener("pointerdown", h, c), au(p) && (p.addEventListener("focus", (m) => Vb(m, c)), !Rb(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0));
  }), d;
}
function Mu(i) {
  return Py(i) && "ownerSVGElement" in i;
}
const su = /* @__PURE__ */ new WeakMap();
let uu;
const kg = (i, l, u) => (o, c) => c && c[0] ? c[0][i + "Size"] : Mu(o) && "getBBox" in o ? o.getBBox()[l] : o[u], Ub = /* @__PURE__ */ kg("inline", "width", "offsetWidth"), Bb = /* @__PURE__ */ kg("block", "height", "offsetHeight");
function Nb({ target: i, borderBoxSize: l }) {
  su.get(i)?.forEach((u) => {
    u(i, {
      get width() {
        return Ub(i, l);
      },
      get height() {
        return Bb(i, l);
      }
    });
  });
}
function jb(i) {
  i.forEach(Nb);
}
function Lb() {
  typeof ResizeObserver > "u" || (uu = new ResizeObserver(jb));
}
function wb(i, l) {
  uu || Lb();
  const u = uf(i);
  return u.forEach((o) => {
    let c = su.get(o);
    c || (c = /* @__PURE__ */ new Set(), su.set(o, c)), c.add(l), uu?.observe(o);
  }), () => {
    u.forEach((o) => {
      const c = su.get(o);
      c?.delete(l), c?.size || uu?.unobserve(o);
    });
  };
}
const ou = /* @__PURE__ */ new Set();
let da;
function Hb() {
  da = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    ou.forEach((l) => l(i));
  }, window.addEventListener("resize", da);
}
function Yb(i) {
  return ou.add(i), da || Hb(), () => {
    ou.delete(i), !ou.size && typeof da == "function" && (window.removeEventListener("resize", da), da = void 0);
  };
}
function Wp(i, l) {
  return typeof i == "function" ? Yb(i) : wb(i, l);
}
function Fg(i) {
  return Mu(i) && i.tagName === "svg";
}
function qb(i, l) {
  if (i === "first")
    return 0;
  {
    const u = l - 1;
    return i === "last" ? u : u / 2;
  }
}
function Gb(i = 0.1, { startDelay: l = 0, from: u = 0, ease: o } = {}) {
  return (c, d) => {
    const h = typeof u == "number" ? u : qb(u, d), p = Math.abs(h - c);
    let g = i * p;
    if (o) {
      const m = d * i;
      g = hc(o)(g / m) * m;
    }
    return l + g;
  };
}
const Xb = [...Gg, Ft, Ze], Kb = (i) => Xb.find(qg(i)), Pp = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ma = () => ({
  x: Pp(),
  y: Pp()
}), $p = () => ({ min: 0, max: 0 }), kt = () => ({
  x: $p(),
  y: $p()
}), Dl = /* @__PURE__ */ new WeakMap();
function xu(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function Cl(i) {
  return typeof i == "string" || Array.isArray(i);
}
const cf = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], ff = ["initial", ...cf];
function Du(i) {
  return xu(i.animate) || ff.some((l) => Cl(i[l]));
}
function Wg(i) {
  return !!(Du(i) || i.variants);
}
function Qb(i, l, u) {
  for (const o in l) {
    const c = l[o], d = u[o];
    if (Pt(c))
      i.addValue(o, c);
    else if (Pt(d))
      i.addValue(o, Pn(c, { owner: i }));
    else if (d !== c)
      if (i.hasValue(o)) {
        const h = i.getValue(o);
        h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c);
      } else {
        const h = i.getStaticValue(o);
        i.addValue(o, Pn(h !== void 0 ? h : c, { owner: i }));
      }
  }
  for (const o in u)
    l[o] === void 0 && i.removeValue(o);
  return l;
}
const yu = { current: null }, hf = { current: !1 }, Zb = typeof window < "u";
function Pg() {
  if (hf.current = !0, !!Zb)
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"), l = () => yu.current = i.matches;
      i.addEventListener("change", l), l();
    } else
      yu.current = !1;
}
const Ip = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let gu = {};
function $g(i) {
  gu = i;
}
function Jb() {
  return gu;
}
class Ig {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(l, u, o) {
    return {};
  }
  constructor({ parent: l, props: u, presenceContext: o, reducedMotionConfig: c, skipAnimations: d, blockInitialAnimation: h, visualState: p }, g = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Pc, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const V = oe.now();
      this.renderScheduledAt < V && (this.renderScheduledAt = V, Ot.render(this.render, !1, !0));
    };
    const { latestValues: m, renderState: v } = p;
    this.latestValues = m, this.baseTarget = { ...m }, this.initialValues = u.initial ? { ...m } : {}, this.renderState = v, this.parent = l, this.props = u, this.presenceContext = o, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = d, this.options = g, this.blockInitialAnimation = !!h, this.isControllingVariants = Du(u), this.isVariantNode = Wg(u), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: S, ...b } = this.scrapeMotionValuesFromProps(u, {}, this);
    for (const V in b) {
      const C = b[V];
      m[V] !== void 0 && Pt(C) && C.set(m[V]);
    }
  }
  mount(l) {
    if (this.hasBeenMounted)
      for (const u in this.initialValues)
        this.values.get(u)?.jump(this.initialValues[u]), this.latestValues[u] = this.initialValues[u];
    this.current = l, Dl.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((u, o) => this.bindToMotionValue(o, u)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (hf.current || Pg(), this.shouldReduceMotion = yu.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), Wn(this.notifyUpdate), Wn(this.render), this.valueSubscriptions.forEach((l) => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const l in this.events)
      this.events[l].clear();
    for (const l in this.features) {
      const u = this.features[l];
      u && (u.unmount(), u.isMounted = !1);
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(l);
  }
  removeChild(l) {
    this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l);
  }
  bindToMotionValue(l, u) {
    if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), u.accelerate && Ng.has(l) && this.current instanceof HTMLElement) {
      const { factory: h, keyframes: p, times: g, ease: m, duration: v } = u.accelerate, S = new Ug({
        element: this.current,
        name: l,
        keyframes: p,
        times: g,
        ease: m,
        duration: /* @__PURE__ */ ge(v)
      }), b = h(S);
      this.valueSubscriptions.set(l, () => {
        b(), S.cancel();
      });
      return;
    }
    const o = ba.has(l);
    o && this.onBindTransform && this.onBindTransform();
    const c = u.on("change", (h) => {
      this.latestValues[l] = h, this.props.onUpdate && Ot.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let d;
    typeof window < "u" && window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, l, u)), this.valueSubscriptions.set(l, () => {
      c(), d && d();
    });
  }
  sortNodePosition(l) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in gu) {
      const u = gu[l];
      if (!u)
        continue;
      const { isEnabled: o, Feature: c } = u;
      if (!this.features[l] && c && o(this.props) && (this.features[l] = new c(this)), this.features[l]) {
        const d = this.features[l];
        d.isMounted ? d.update() : (d.mount(), d.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : kt();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, u) {
    this.latestValues[l] = u;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(l, u) {
    (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = u;
    for (let o = 0; o < Ip.length; o++) {
      const c = Ip[o];
      this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const d = "on" + c, h = l[d];
      h && (this.propEventSubscriptions[c] = this.on(c, h));
    }
    this.prevMotionValues = Qb(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(l) {
    const u = this.getClosestVariantNode();
    if (u)
      return u.variantChildren && u.variantChildren.add(l), () => u.variantChildren.delete(l);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(l, u) {
    const o = this.values.get(l);
    u !== o && (o && this.removeValue(l), this.bindToMotionValue(l, u), this.values.set(l, u), this.latestValues[l] = u.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(l) {
    this.values.delete(l);
    const u = this.valueSubscriptions.get(l);
    u && (u(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, u) {
    if (this.props.values && this.props.values[l])
      return this.props.values[l];
    let o = this.values.get(l);
    return o === void 0 && u !== void 0 && (o = Pn(u === null ? void 0 : u, { owner: this }), this.addValue(l, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(l, u) {
    let o = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
    return o != null && (typeof o == "string" && (Wy(o) || $y(o)) ? o = parseFloat(o) : !Kb(o) && Ze.test(u) && (o = Kg(l, u)), this.setBaseTarget(l, Pt(o) ? o.get() : o)), Pt(o) ? o.get() : o;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(l, u) {
    this.baseTarget[l] = u;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(l) {
    const { initial: u } = this.props;
    let o;
    if (typeof u == "string" || typeof u == "object") {
      const d = nf(this.props, u, this.presenceContext?.custom);
      d && (o = d[l]);
    }
    if (u && o !== void 0)
      return o;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !Pt(c) ? c : this.initialValues[l] !== void 0 && o === void 0 ? void 0 : this.baseTarget[l];
  }
  on(l, u) {
    return this.events[l] || (this.events[l] = new qc()), this.events[l].add(u);
  }
  notify(l, ...u) {
    this.events[l] && this.events[l].notify(...u);
  }
  scheduleRenderMicrotask() {
    of.render(this.render);
  }
}
class t0 extends Ig {
  constructor() {
    super(...arguments), this.KeyframeResolver = Eb;
  }
  sortInstanceNodePosition(l, u) {
    return l.compareDocumentPosition(u) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, u) {
    const o = l.style;
    return o ? o[u] : void 0;
  }
  removeValueFromRenderState(l, { vars: u, style: o }) {
    delete u[l], delete o[l];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    Pt(l) && (this.childSubscription = l.on("change", (u) => {
      this.current && (this.current.textContent = `${u}`);
    }));
  }
}
class $n {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
function e0({ top: i, left: l, right: u, bottom: o }) {
  return {
    x: { min: l, max: u },
    y: { min: i, max: o }
  };
}
function kb({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function Fb(i, l) {
  if (!l)
    return i;
  const u = l({ x: i.left, y: i.top }), o = l({ x: i.right, y: i.bottom });
  return {
    top: u.y,
    left: u.x,
    bottom: o.y,
    right: o.x
  };
}
function ic(i) {
  return i === void 0 || i === 1;
}
function Vc({ scale: i, scaleX: l, scaleY: u }) {
  return !ic(i) || !ic(l) || !ic(u);
}
function Ti(i) {
  return Vc(i) || n0(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function n0(i) {
  return ty(i.x) || ty(i.y);
}
function ty(i) {
  return i && i !== "0%";
}
function vu(i, l, u) {
  const o = i - u, c = l * o;
  return u + c;
}
function ey(i, l, u, o, c) {
  return c !== void 0 && (i = vu(i, c, o)), vu(i, u, o) + l;
}
function _c(i, l = 0, u = 1, o, c) {
  i.min = ey(i.min, l, u, o, c), i.max = ey(i.max, l, u, o, c);
}
function i0(i, { x: l, y: u }) {
  _c(i.x, l.translate, l.scale, l.originPoint), _c(i.y, u.translate, u.scale, u.originPoint);
}
const ny = 0.999999999999, iy = 1.0000000000001;
function Wb(i, l, u, o = !1) {
  const c = u.length;
  if (!c)
    return;
  l.x = l.y = 1;
  let d, h;
  for (let p = 0; p < c; p++) {
    d = u[p], h = d.projectionDelta;
    const { visualElement: g } = d.options;
    g && g.props.style && g.props.style.display === "contents" || (o && d.options.layoutScroll && d.scroll && d !== d.root && (Ie(i.x, -d.scroll.offset.x), Ie(i.y, -d.scroll.offset.y)), h && (l.x *= h.x.scale, l.y *= h.y.scale, i0(i, h)), o && Ti(d.latestValues) && ru(i, d.latestValues, d.layout?.layoutBox));
  }
  l.x < iy && l.x > ny && (l.x = 1), l.y < iy && l.y > ny && (l.y = 1);
}
function Ie(i, l) {
  i.min += l, i.max += l;
}
function ay(i, l, u, o, c = 0.5) {
  const d = Rt(i.min, i.max, c);
  _c(i, l, u, d, o);
}
function ly(i, l) {
  return typeof i == "string" ? parseFloat(i) / 100 * (l.max - l.min) : i;
}
function ru(i, l, u) {
  const o = u ?? i;
  ay(i.x, ly(l.x, o.x), l.scaleX, l.scale, l.originX), ay(i.y, ly(l.y, o.y), l.scaleY, l.scale, l.originY);
}
function a0(i, l) {
  return e0(Fb(i.getBoundingClientRect(), l));
}
function Pb(i, l, u) {
  const o = a0(i, u), { scroll: c } = l;
  return c && (Ie(o.x, c.offset.x), Ie(o.y, c.offset.y)), o;
}
const $b = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Ib = Ta.length;
function tA(i, l, u) {
  let o = "", c = !0;
  for (let h = 0; h < Ib; h++) {
    const p = Ta[h], g = i[p];
    if (g === void 0)
      continue;
    let m = !0;
    if (typeof g == "number")
      m = g === (p.startsWith("scale") ? 1 : 0);
    else {
      const v = parseFloat(g);
      m = p.startsWith("scale") ? v === 1 : v === 0;
    }
    if (!m || u) {
      const v = Oc(g, pu[p]);
      if (!m) {
        c = !1;
        const S = $b[p] || p;
        o += `${S}(${v}) `;
      }
      u && (l[p] = v);
    }
  }
  const d = i.pathRotation;
  return d && (c = !1, o += `rotate(${Oc(d, pu.pathRotation)}) `), o = o.trim(), u ? o = u(l, c ? "" : o) : c && (o = "none"), o;
}
function df(i, l, u) {
  const { style: o, vars: c, transformOrigin: d } = i;
  let h = !1, p = !1;
  for (const g in l) {
    const m = l[g];
    if (ba.has(g)) {
      h = !0;
      continue;
    } else if (mg(g)) {
      c[g] = m;
      continue;
    } else {
      const v = Oc(m, pu[g]);
      g.startsWith("origin") ? (p = !0, d[g] = v) : o[g] = v;
    }
  }
  if (l.transform || (h || u ? o.transform = tA(l, i.transform, u) : o.transform && (o.transform = "none")), p) {
    const { originX: g = "50%", originY: m = "50%", originZ: v = 0 } = d;
    o.transformOrigin = `${g} ${m} ${v}`;
  }
}
function l0(i, { style: l, vars: u }, o, c) {
  const d = i.style;
  let h;
  for (h in l)
    d[h] = l[h];
  c?.applyProjectionStyles(d, o);
  for (h in u)
    d.setProperty(h, u[h]);
}
function sy(i, l) {
  return l.max === l.min ? 0 : i / (l.max - l.min) * 100;
}
const vl = {
  correct: (i, l) => {
    if (!l.target)
      return i;
    if (typeof i == "string")
      if (P.test(i))
        i = parseFloat(i);
      else
        return i;
    const u = sy(i, l.target.x), o = sy(i, l.target.y);
    return `${u}% ${o}%`;
  }
}, eA = {
  correct: (i, { treeScale: l, projectionDelta: u }) => {
    const o = i, c = Ze.parse(i);
    if (c.length > 5)
      return o;
    const d = Ze.createTransformer(i), h = typeof c[0] != "number" ? 1 : 0, p = u.x.scale * l.x, g = u.y.scale * l.y;
    c[0 + h] /= p, c[1 + h] /= g;
    const m = Rt(p, g, 0.5);
    return typeof c[2 + h] == "number" && (c[2 + h] /= m), typeof c[3 + h] == "number" && (c[3 + h] /= m), d(c);
  }
}, Uc = {
  borderRadius: {
    ...vl,
    applyTo: [...sf]
  },
  borderTopLeftRadius: vl,
  borderTopRightRadius: vl,
  borderBottomLeftRadius: vl,
  borderBottomRightRadius: vl,
  boxShadow: eA
};
function s0(i, { layout: l, layoutId: u }) {
  return ba.has(i) || i.startsWith("origin") || (l || u !== void 0) && (!!Uc[i] || i === "opacity");
}
function mf(i, l, u) {
  const o = i.style, c = l?.style, d = {};
  if (!o)
    return d;
  for (const h in o)
    (Pt(o[h]) || c && Pt(c[h]) || s0(h, i) || u?.getValue(h)?.liveStyle !== void 0) && (d[h] = o[h]);
  return d;
}
function nA(i) {
  return window.getComputedStyle(i);
}
class u0 extends t0 {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = l0;
  }
  mount(l) {
    Au(!!l.style), super.mount(l);
  }
  readValueFromInstance(l, u) {
    if (ba.has(u))
      return this.projection?.isProjecting ? Sc(u) : ET(l, u);
    {
      const o = nA(l), c = (mg(u) ? o.getPropertyValue(u) : o[u]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: u }) {
    return a0(l, u);
  }
  build(l, u, o) {
    df(l, u, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, u, o) {
    return mf(l, u, o);
  }
}
function iA(i, l) {
  return i in l;
}
class aA extends Ig {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(l, u) {
    if (iA(u, l)) {
      const o = l[u];
      if (typeof o == "string" || typeof o == "number")
        return o;
    }
  }
  getBaseTargetFromProps() {
  }
  removeValueFromRenderState(l, u) {
    delete u.output[l];
  }
  measureInstanceViewportBox() {
    return kt();
  }
  build(l, u) {
    Object.assign(l.output, u);
  }
  renderInstance(l, { output: u }) {
    Object.assign(l, u);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
const lA = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, sA = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function uA(i, l, u = 1, o = 0, c = !0) {
  i.pathLength = 1;
  const d = c ? lA : sA;
  i[d.offset] = `${-o}`, i[d.array] = `${l} ${u}`;
}
const oA = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function o0(i, {
  attrX: l,
  attrY: u,
  attrScale: o,
  pathLength: c,
  pathSpacing: d = 1,
  pathOffset: h = 0,
  // This is object creation, which we try to avoid per-frame.
  ...p
}, g, m, v) {
  if (df(i, p, m), g) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  i.attrs = i.style, i.style = {};
  const { attrs: S, style: b } = i;
  S.transform && (b.transform = S.transform, delete S.transform), (b.transform || S.transformOrigin) && (b.transformOrigin = S.transformOrigin ?? "50% 50%", delete S.transformOrigin), b.transform && (b.transformBox = v?.transformBox ?? "fill-box", delete S.transformBox);
  for (const V of oA)
    S[V] !== void 0 && (b[V] = S[V], delete S[V]);
  l !== void 0 && (S.x = l), u !== void 0 && (S.y = u), o !== void 0 && (S.scale = o), c !== void 0 && uA(S, c, d, h, !1);
}
const r0 = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), c0 = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function rA(i, l, u, o) {
  l0(i, l, void 0, o);
  for (const c in l.attrs)
    i.setAttribute(r0.has(c) ? c : af(c), l.attrs[c]);
}
function f0(i, l, u) {
  const o = mf(i, l, u);
  for (const c in i)
    if (Pt(i[c]) || Pt(l[c])) {
      const d = Ta.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      o[d] = i[c];
    }
  return o;
}
class h0 extends t0 {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = kt;
  }
  getBaseTargetFromProps(l, u) {
    return l[u];
  }
  readValueFromInstance(l, u) {
    if (ba.has(u)) {
      const o = Xg(u);
      return o && o.default || 0;
    }
    return u = r0.has(u) ? u : af(u), l.getAttribute(u);
  }
  scrapeMotionValuesFromProps(l, u, o) {
    return f0(l, u, o);
  }
  build(l, u, o) {
    o0(l, u, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(l, u, o, c) {
    rA(l, u, o, c);
  }
  mount(l) {
    this.isSVGTag = c0(l.tagName), super.mount(l);
  }
}
const cA = ff.length;
function d0(i) {
  if (!i)
    return;
  if (!i.isControllingVariants) {
    const u = i.parent ? d0(i.parent) || {} : {};
    return i.props.initial !== void 0 && (u.initial = i.props.initial), u;
  }
  const l = {};
  for (let u = 0; u < cA; u++) {
    const o = ff[u], c = i.props[o];
    (Cl(c) || c === !1) && (l[o] = c);
  }
  return l;
}
function m0(i, l) {
  if (!Array.isArray(l))
    return !1;
  const u = l.length;
  if (u !== i.length)
    return !1;
  for (let o = 0; o < u; o++)
    if (l[o] !== i[o])
      return !1;
  return !0;
}
const fA = [...cf].reverse(), hA = cf.length;
function dA(i) {
  return (l) => Promise.all(l.map(({ animation: u, options: o }) => hb(i, u, o)));
}
function mA(i) {
  let l = dA(i), u = uy(), o = !0, c = !1;
  const d = (m) => (v, S) => {
    const b = xi(i, S, m === "exit" ? i.presenceContext?.custom : void 0);
    if (b) {
      const { transition: V, transitionEnd: C, ...U } = b;
      v = { ...v, ...U, ...C };
    }
    return v;
  };
  function h(m) {
    l = m(i);
  }
  function p(m) {
    const { props: v } = i, S = d0(i.parent) || {}, b = [], V = /* @__PURE__ */ new Set();
    let C = {}, U = 1 / 0;
    for (let w = 0; w < hA; w++) {
      const q = fA[w], H = u[q], Y = v[q] !== void 0 ? v[q] : S[q], tt = Cl(Y), et = q === m ? H.isActive : null;
      et === !1 && (U = w);
      let X = Y === S[q] && Y !== v[q] && tt;
      if (X && (o || c) && i.manuallyAnimateOnMount && (X = !1), H.protectedKeys = { ...C }, // If it isn't active and hasn't *just* been set as inactive
      !H.isActive && et === null || // If we didn't and don't have any defined prop for this animation type
      !Y && !H.prevProp || // Or if the prop doesn't define an animation
      xu(Y) || typeof Y == "boolean")
        continue;
      if (q === "exit" && H.isActive && et !== !0) {
        H.prevResolvedValues && (C = {
          ...C,
          ...H.prevResolvedValues
        });
        continue;
      }
      const J = pA(H.prevProp, Y);
      let k = J || // If we're making this variant active, we want to always make it active
      q === m && H.isActive && !X && tt || // If we removed a higher-priority variant (i is in reverse order)
      w > U && tt, $ = !1;
      const st = Array.isArray(Y) ? Y : [Y];
      let pt = st.reduce(d(q), {});
      et === !1 && (pt = {});
      const { prevResolvedValues: Lt = {} } = H, Ut = {
        ...Lt,
        ...pt
      }, Bt = (K) => {
        k = !0, V.has(K) && ($ = !0, V.delete(K)), H.needsAnimating[K] = !0;
        const ut = i.getValue(K);
        ut && (ut.liveStyle = !1);
      };
      for (const K in Ut) {
        const ut = pt[K], ht = Lt[K];
        if (C.hasOwnProperty(K))
          continue;
        let A = !1;
        xc(ut) && xc(ht) ? A = !m0(ut, ht) || J : A = ut !== ht, A ? ut != null ? Bt(K) : V.add(K) : ut !== void 0 && V.has(K) ? Bt(K) : H.protectedKeys[K] = !0;
      }
      H.prevProp = Y, H.prevResolvedValues = pt, H.isActive && (C = { ...C, ...pt }), (o || c) && i.blockInitialAnimation && (k = !1);
      const O = X && J;
      k && (!O || $) && b.push(...st.map((K) => {
        const ut = { type: q };
        if (typeof K == "string" && (o || c) && !O && i.manuallyAnimateOnMount && i.parent) {
          const { parent: ht } = i, A = xi(ht, K);
          if (ht.enteringChildren && A) {
            const { delayChildren: N } = A.transition || {};
            ut.delay = jg(ht.enteringChildren, i, N);
          }
        }
        return {
          animation: K,
          options: ut
        };
      }));
    }
    if (V.size) {
      const w = {};
      if (typeof v.initial != "boolean") {
        const q = xi(i, Array.isArray(v.initial) ? v.initial[0] : v.initial);
        q && q.transition && (w.transition = q.transition);
      }
      V.forEach((q) => {
        const H = i.getBaseTarget(q), Y = i.getValue(q);
        Y && (Y.liveStyle = !0), w[q] = H ?? null;
      }), b.push({ animation: w });
    }
    let j = !!b.length;
    return o && (v.initial === !1 || v.initial === v.animate) && !i.manuallyAnimateOnMount && (j = !1), o = !1, c = !1, j ? l(b) : Promise.resolve();
  }
  function g(m, v) {
    if (u[m].isActive === v)
      return Promise.resolve();
    i.variantChildren?.forEach((b) => b.animationState?.setActive(m, v)), u[m].isActive = v;
    const S = p(m);
    for (const b in u)
      u[b].protectedKeys = {};
    return S;
  }
  return {
    animateChanges: p,
    setActive: g,
    setAnimateFunction: h,
    getState: () => u,
    reset: () => {
      u = uy(), c = !0;
    }
  };
}
function pA(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !m0(l, i) : !1;
}
function Si(i = !1) {
  return {
    isActive: i,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function uy() {
  return {
    animate: Si(!0),
    whileInView: Si(),
    whileHover: Si(),
    whileTap: Si(),
    whileDrag: Si(),
    whileFocus: Si(),
    exit: Si()
  };
}
function Bc(i, l) {
  i.min = l.min, i.max = l.max;
}
function Ke(i, l) {
  Bc(i.x, l.x), Bc(i.y, l.y);
}
function oy(i, l) {
  i.translate = l.translate, i.scale = l.scale, i.originPoint = l.originPoint, i.origin = l.origin;
}
const p0 = 1e-4, yA = 1 - p0, gA = 1 + p0, y0 = 0.01, vA = 0 - y0, SA = 0 + y0;
function re(i) {
  return i.max - i.min;
}
function TA(i, l, u) {
  return Math.abs(i - l) <= u;
}
function ry(i, l, u, o = 0.5) {
  i.origin = o, i.originPoint = Rt(l.min, l.max, i.origin), i.scale = re(u) / re(l), i.translate = Rt(u.min, u.max, i.origin) - i.originPoint, (i.scale >= yA && i.scale <= gA || isNaN(i.scale)) && (i.scale = 1), (i.translate >= vA && i.translate <= SA || isNaN(i.translate)) && (i.translate = 0);
}
function Al(i, l, u, o) {
  ry(i.x, l.x, u.x, o ? o.originX : void 0), ry(i.y, l.y, u.y, o ? o.originY : void 0);
}
function cy(i, l, u, o = 0) {
  const c = o ? Rt(u.min, u.max, o) : u.min;
  i.min = c + l.min, i.max = i.min + re(l);
}
function bA(i, l, u, o) {
  cy(i.x, l.x, u.x, o?.x), cy(i.y, l.y, u.y, o?.y);
}
function fy(i, l, u, o = 0) {
  const c = o ? Rt(u.min, u.max, o) : u.min;
  i.min = l.min - c, i.max = i.min + re(l);
}
function Su(i, l, u, o) {
  fy(i.x, l.x, u.x, o?.x), fy(i.y, l.y, u.y, o?.y);
}
function hy(i, l, u, o, c) {
  return i -= l, i = vu(i, 1 / u, o), c !== void 0 && (i = vu(i, 1 / c, o)), i;
}
function AA(i, l = 0, u = 1, o = 0.5, c, d = i, h = i) {
  if (tn.test(l) && (l = parseFloat(l), l = Rt(h.min, h.max, l / 100) - h.min), typeof l != "number")
    return;
  let p = Rt(d.min, d.max, o);
  i === d && (p -= l), i.min = hy(i.min, l, u, p, c), i.max = hy(i.max, l, u, p, c);
}
function dy(i, l, [u, o, c], d, h) {
  AA(i, l[u], l[o], l[c], l.scale, d, h);
}
const EA = ["x", "scaleX", "originX"], MA = ["y", "scaleY", "originY"];
function my(i, l, u, o) {
  dy(i.x, l, EA, u ? u.x : void 0, o ? o.x : void 0), dy(i.y, l, MA, u ? u.y : void 0, o ? o.y : void 0);
}
function py(i) {
  return i.translate === 0 && i.scale === 1;
}
function g0(i) {
  return py(i.x) && py(i.y);
}
function yy(i, l) {
  return i.min === l.min && i.max === l.max;
}
function xA(i, l) {
  return yy(i.x, l.x) && yy(i.y, l.y);
}
function gy(i, l) {
  return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max);
}
function v0(i, l) {
  return gy(i.x, l.x) && gy(i.y, l.y);
}
function vy(i) {
  return re(i.x) / re(i.y);
}
function Sy(i, l) {
  return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint;
}
function $e(i) {
  return [i("x"), i("y")];
}
function DA(i, l, u) {
  let o = "";
  const c = i.x.translate / l.x, d = i.y.translate / l.y, h = u?.z || 0;
  if ((c || d || h) && (o = `translate3d(${c}px, ${d}px, ${h}px) `), (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `), u) {
    const { transformPerspective: m, rotate: v, pathRotation: S, rotateX: b, rotateY: V, skewX: C, skewY: U } = u;
    m && (o = `perspective(${m}px) ${o}`), v && (o += `rotate(${v}deg) `), S && (o += `rotate(${S}deg) `), b && (o += `rotateX(${b}deg) `), V && (o += `rotateY(${V}deg) `), C && (o += `skewX(${C}deg) `), U && (o += `skewY(${U}deg) `);
  }
  const p = i.x.scale * l.x, g = i.y.scale * l.y;
  return (p !== 1 || g !== 1) && (o += `scale(${p}, ${g})`), o || "none";
}
const CA = sf.length, Ty = (i) => typeof i == "string" ? parseFloat(i) : i, by = (i) => typeof i == "number" || P.test(i);
function RA(i, l, u, o, c, d) {
  c ? (i.opacity = Rt(0, u.opacity ?? 1, zA(o)), i.opacityExit = Rt(l.opacity ?? 1, 0, OA(o))) : d && (i.opacity = Rt(l.opacity ?? 1, u.opacity ?? 1, o));
  for (let h = 0; h < CA; h++) {
    const p = sf[h];
    let g = Ay(l, p), m = Ay(u, p);
    if (g === void 0 && m === void 0)
      continue;
    g || (g = 0), m || (m = 0), g === 0 || m === 0 || by(g) === by(m) ? (i[p] = Math.max(Rt(Ty(g), Ty(m), o), 0), (tn.test(m) || tn.test(g)) && (i[p] += "%")) : i[p] = m;
  }
  (l.rotate || u.rotate) && (i.rotate = Rt(l.rotate || 0, u.rotate || 0, o));
}
function Ay(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const zA = /* @__PURE__ */ S0(0, 0.5, sg), OA = /* @__PURE__ */ S0(0.5, 0.95, Ye);
function S0(i, l, u) {
  return (o) => o < i ? 0 : o > l ? 1 : u(/* @__PURE__ */ ya(i, l, o));
}
function T0(i, l, u) {
  const o = Pt(i) ? i : Pn(i);
  return o.start(ef("", o, l, u)), o.animation;
}
function Rl(i, l, u, o = { passive: !0 }) {
  return i.addEventListener(l, u, o), () => i.removeEventListener(l, u, o);
}
const VA = (i, l) => i.depth - l.depth;
class _A {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    Yc(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    pa(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(VA), this.isDirty = !1, this.children.forEach(l);
  }
}
function UA(i, l) {
  const u = oe.now(), o = ({ timestamp: c }) => {
    const d = c - u;
    d >= l && (Wn(o), i(d - l));
  };
  return Ot.setup(o, !0), () => Wn(o);
}
function cu(i) {
  return Pt(i) ? i.get() : i;
}
class BA {
  constructor() {
    this.members = [];
  }
  add(l) {
    Yc(this.members, l);
    for (let u = this.members.length - 1; u >= 0; u--) {
      const o = this.members[u];
      if (o === l || o === this.lead || o === this.prevLead)
        continue;
      const c = o.instance;
      (!c || c.isConnected === !1) && !o.snapshot && (pa(this.members, o), o.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (pa(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
      const u = this.members[this.members.length - 1];
      u && this.promote(u);
    }
  }
  relegate(l) {
    for (let u = this.members.indexOf(l) - 1; u >= 0; u--) {
      const o = this.members[u];
      if (o.isPresent !== !1 && o.instance?.isConnected !== !1)
        return this.promote(o), !0;
    }
    return !1;
  }
  promote(l, u) {
    const o = this.lead;
    if (l !== o && (this.prevLead = o, this.lead = l, l.show(), o)) {
      o.updateSnapshot(), l.scheduleRender();
      const { layoutDependency: c } = o.options, { layoutDependency: d } = l.options;
      (c === void 0 || c !== d) && (l.resumeFrom = o, u && (o.preserveOpacity = !0), o.snapshot && (l.snapshot = o.snapshot, l.snapshot.latestValues = o.animationValues || o.latestValues), l.root?.isUpdating && (l.isLayoutDirty = !0)), l.options.crossfade === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      l.options.onExitComplete?.(), l.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const fu = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
}, ac = ["", "X", "Y", "Z"], NA = 1e3;
let jA = 0;
function lc(i, l, u, o) {
  const { latestValues: c } = l;
  c[i] && (u[i] = c[i], l.setStaticValue(i, 0), o && (o[i] = 0));
}
function b0(i) {
  if (i.hasCheckedOptimisedAppear = !0, i.root === i)
    return;
  const { visualElement: l } = i.options;
  if (!l)
    return;
  const u = Yg(l);
  if (window.MotionHasOptimisedAnimation(u, "transform")) {
    const { layout: c, layoutId: d } = i.options;
    window.MotionCancelOptimisedAnimation(u, "transform", Ot, !(c || d));
  }
  const { parent: o } = i;
  o && !o.hasCheckedOptimisedAppear && b0(o);
}
function A0({ attachResizeListener: i, defaultParent: l, measureScroll: u, checkIsScrollRoot: o, resetTransform: c }) {
  return class {
    constructor(h = {}, p = l?.()) {
      this.id = jA++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(HA), this.nodes.forEach(QA), this.nodes.forEach(ZA), this.nodes.forEach(YA);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = h, this.root = p ? p.root || p : this, this.path = p ? [...p.path, p] : [], this.parent = p, this.depth = p ? p.depth + 1 : 0;
      for (let g = 0; g < this.path.length; g++)
        this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new _A());
    }
    addEventListener(h, p) {
      return this.eventHandlers.has(h) || this.eventHandlers.set(h, new qc()), this.eventHandlers.get(h).add(p);
    }
    notifyListeners(h, ...p) {
      const g = this.eventHandlers.get(h);
      g && g.notify(...p);
    }
    hasListeners(h) {
      return this.eventHandlers.has(h);
    }
    /**
     * Lifecycles
     */
    mount(h) {
      if (this.instance)
        return;
      this.isSVG = Mu(h) && !Fg(h), this.instance = h;
      const { layoutId: p, layout: g, visualElement: m } = this.options;
      if (m && !m.current && m.mount(h), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (g || p) && (this.isLayoutDirty = !0), i) {
        let v, S = 0;
        const b = () => this.root.updateBlockedByResize = !1;
        Ot.read(() => {
          S = window.innerWidth;
        }), i(h, () => {
          const V = window.innerWidth;
          V !== S && (S = V, this.root.updateBlockedByResize = !0, v && v(), v = UA(b, 250), fu.hasAnimatedSinceResize && (fu.hasAnimatedSinceResize = !1, this.nodes.forEach(xy)));
        });
      }
      p && this.root.registerSharedNode(p, this), this.options.animate !== !1 && m && (p || g) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: S, hasRelativeLayoutChanged: b, layout: V }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const C = this.options.transition || m.getDefaultTransition() || PA, { onLayoutAnimationStart: U, onLayoutAnimationComplete: j } = m.getProps(), w = !this.targetLayout || !v0(this.targetLayout, V), q = !S && b;
        if (this.options.layoutRoot || this.resumeFrom || q || S && (w || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const H = {
            ...tf(C, "layout"),
            onPlay: U,
            onComplete: j
          };
          (m.shouldReduceMotion || this.options.layoutRoot) && (H.delay = 0, H.type = !1), this.startAnimation(H), this.setAnimationOrigin(v, q, H.path);
        } else
          S || xy(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = V;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const h = this.getStack();
      h && h.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Wn(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(JA), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: h } = this.options;
      return h && h.getProps().transformTemplate;
    }
    willUpdate(h = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && b0(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const S = this.path[v];
        S.shouldResetTransform = !0, (typeof S.latestValues.x == "string" || typeof S.latestValues.y == "string") && (S.isLayoutDirty = !0), S.updateScroll("snapshot"), S.options.layoutRoot && S.willUpdate(!1);
      }
      const { layoutId: p, layout: g } = this.options;
      if (p === void 0 && !g)
        return;
      const m = this.getTransformTemplate();
      this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0, this.updateSnapshot(), h && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const g = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), g && this.nodes.forEach(GA), this.nodes.forEach(Ey);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(My);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(XA), this.nodes.forEach(KA), this.nodes.forEach(LA), this.nodes.forEach(wA)) : this.nodes.forEach(My), this.clearAllSnapshots();
      const p = oe.now();
      le.delta = en(0, 1e3 / 60, p - le.timestamp), le.timestamp = p, le.isProcessing = !0, Wr.update.process(le), Wr.preRender.process(le), Wr.render.process(le), le.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, of.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(qA), this.sharedNodes.forEach(kA);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ot.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ot.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !re(this.snapshot.measuredBox.x) && !re(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let g = 0; g < this.path.length; g++)
          this.path[g].updateScroll();
      const h = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = kt()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: p } = this.options;
      p && p.notify("LayoutMeasure", this.layout.layoutBox, h ? h.layoutBox : void 0);
    }
    updateScroll(h = "measure") {
      let p = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === h && (p = !1), p && this.instance) {
        const g = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: h,
          isRoot: g,
          offset: u(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : g
        };
      }
    }
    resetTransform() {
      if (!c)
        return;
      const h = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, p = this.projectionDelta && !g0(this.projectionDelta), g = this.getTransformTemplate(), m = g ? g(this.latestValues, "") : void 0, v = m !== this.prevTransformTemplateValue;
      h && this.instance && (p || Ti(this.latestValues) || v) && (c(this.instance, m), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(h = !0) {
      const p = this.measurePageBox();
      let g = this.removeElementScroll(p);
      return h && (g = this.removeTransform(g)), $A(g), {
        animationId: this.root.animationId,
        measuredBox: p,
        layoutBox: g,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: h } = this.options;
      if (!h)
        return kt();
      const p = h.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(IA))) {
        const { scroll: m } = this.root;
        m && (Ie(p.x, m.offset.x), Ie(p.y, m.offset.y));
      }
      return p;
    }
    removeElementScroll(h) {
      const p = kt();
      if (Ke(p, h), this.scroll?.wasRoot)
        return p;
      for (let g = 0; g < this.path.length; g++) {
        const m = this.path[g], { scroll: v, options: S } = m;
        m !== this.root && v && S.layoutScroll && (v.wasRoot && Ke(p, h), Ie(p.x, v.offset.x), Ie(p.y, v.offset.y));
      }
      return p;
    }
    applyTransform(h, p = !1, g) {
      const m = g || kt();
      Ke(m, h);
      for (let v = 0; v < this.path.length; v++) {
        const S = this.path[v];
        !p && S.options.layoutScroll && S.scroll && S !== S.root && (Ie(m.x, -S.scroll.offset.x), Ie(m.y, -S.scroll.offset.y)), Ti(S.latestValues) && ru(m, S.latestValues, S.layout?.layoutBox);
      }
      return Ti(this.latestValues) && ru(m, this.latestValues, this.layout?.layoutBox), m;
    }
    removeTransform(h) {
      const p = kt();
      Ke(p, h);
      for (let g = 0; g < this.path.length; g++) {
        const m = this.path[g];
        if (!Ti(m.latestValues))
          continue;
        let v;
        m.instance && (Vc(m.latestValues) && m.updateSnapshot(), v = kt(), Ke(v, m.measurePageBox())), my(p, m.latestValues, m.snapshot?.layoutBox, v);
      }
      return Ti(this.latestValues) && my(p, this.latestValues), p;
    }
    setTargetDelta(h) {
      this.targetDelta = h, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(h) {
      this.options = {
        ...this.options,
        ...h,
        crossfade: h.crossfade !== void 0 ? h.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== le.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(h = !1) {
      const p = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
      const g = !!this.resumingFrom || this !== p;
      if (!(h || g && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: v, layoutId: S } = this.options;
      if (!this.layout || !(v || S))
        return;
      this.resolvedRelativeTargetAt = le.timestamp;
      const b = this.getClosestProjectingParent();
      b && this.linkedParentVersion !== b.layoutVersion && !b.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && b && b.layout ? this.createRelativeTarget(b, this.layout.layoutBox, b.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = kt(), this.targetWithTransforms = kt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), bA(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Ke(this.target, this.layout.layoutBox), i0(this.target, this.targetDelta)) : Ke(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && b && !!b.resumingFrom == !!this.resumingFrom && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? this.createRelativeTarget(b, this.target, b.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Vc(this.parent.latestValues) || n0(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(h, p, g) {
      this.relativeParent = h, this.linkedParentVersion = h.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = kt(), this.relativeTargetOrigin = kt(), Su(this.relativeTargetOrigin, p, g, this.options.layoutAnchor || void 0), Ke(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const h = this.getLead(), p = !!this.resumingFrom || this !== h;
      let g = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (g = !1), p && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1), this.resolvedRelativeTargetAt === le.timestamp && (g = !1), g)
        return;
      const { layout: m, layoutId: v } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(m || v))
        return;
      Ke(this.layoutCorrected, this.layout.layoutBox);
      const S = this.treeScale.x, b = this.treeScale.y;
      Wb(this.layoutCorrected, this.treeScale, this.path, p), h.layout && !h.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (h.target = h.layout.layoutBox, h.targetWithTransforms = kt());
      const { target: V } = h;
      if (!V) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (oy(this.prevProjectionDelta.x, this.projectionDelta.x), oy(this.prevProjectionDelta.y, this.projectionDelta.y)), Al(this.projectionDelta, this.layoutCorrected, V, this.latestValues), (this.treeScale.x !== S || this.treeScale.y !== b || !Sy(this.projectionDelta.x, this.prevProjectionDelta.x) || !Sy(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", V));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(h = !0) {
      if (this.options.visualElement?.scheduleRender(), h) {
        const p = this.getStack();
        p && p.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = ma(), this.projectionDelta = ma(), this.projectionDeltaWithTransform = ma();
    }
    setAnimationOrigin(h, p = !1, g) {
      const m = this.snapshot, v = m ? m.latestValues : {}, S = { ...this.latestValues }, b = ma();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !p;
      const V = kt(), C = m ? m.source : void 0, U = this.layout ? this.layout.source : void 0, j = C !== U, w = this.getStack(), q = !w || w.members.length <= 1, H = !!(j && !q && this.options.crossfade === !0 && !this.path.some(WA));
      this.animationProgress = 0;
      let Y;
      const tt = g?.interpolateProjection(h);
      this.mixTargetDelta = (et) => {
        const X = et / 1e3, J = tt?.(X);
        J ? (b.x.translate = J.x, b.x.scale = Rt(h.x.scale, 1, X), b.x.origin = h.x.origin, b.x.originPoint = h.x.originPoint, b.y.translate = J.y, b.y.scale = Rt(h.y.scale, 1, X), b.y.origin = h.y.origin, b.y.originPoint = h.y.originPoint) : (Dy(b.x, h.x, X), Dy(b.y, h.y, X)), this.setTargetDelta(b), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Su(V, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), FA(this.relativeTarget, this.relativeTargetOrigin, V, X), Y && xA(this.relativeTarget, Y) && (this.isProjectionDirty = !1), Y || (Y = kt()), Ke(Y, this.relativeTarget)), j && (this.animationValues = S, RA(S, v, this.latestValues, X, H, q)), J && J.rotate !== void 0 && (this.animationValues || (this.animationValues = S), this.animationValues.pathRotation = J.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = X;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(h) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Wn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ot.update(() => {
        fu.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Pn(0)), this.motionValue.jump(0, !1), this.currentAnimation = T0(this.motionValue, [0, 1e3], {
          ...h,
          velocity: 0,
          isSync: !0,
          onUpdate: (p) => {
            this.mixTargetDelta(p), h.onUpdate && h.onUpdate(p);
          },
          onComplete: () => {
            h.onComplete && h.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const h = this.getStack();
      h && h.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(NA), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const h = this.getLead();
      let { targetWithTransforms: p, target: g, layout: m, latestValues: v } = h;
      if (!(!p || !g || !m)) {
        if (this !== h && this.layout && m && E0(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
          g = this.target || kt();
          const S = re(this.layout.layoutBox.x);
          g.x.min = h.target.x.min, g.x.max = g.x.min + S;
          const b = re(this.layout.layoutBox.y);
          g.y.min = h.target.y.min, g.y.max = g.y.min + b;
        }
        Ke(p, g), ru(p, v), Al(this.projectionDeltaWithTransform, this.layoutCorrected, p, v);
      }
    }
    registerSharedNode(h, p) {
      this.sharedNodes.has(h) || this.sharedNodes.set(h, new BA()), this.sharedNodes.get(h).add(p);
      const m = p.options.initialPromotionConfig;
      p.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(p) : void 0
      });
    }
    isLead() {
      const h = this.getStack();
      return h ? h.lead === this : !0;
    }
    getLead() {
      const { layoutId: h } = this.options;
      return h ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: h } = this.options;
      return h ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: h } = this.options;
      if (h)
        return this.root.sharedNodes.get(h);
    }
    promote({ needsReset: h, transition: p, preserveFollowOpacity: g } = {}) {
      const m = this.getStack();
      m && m.promote(this, g), h && (this.projectionDelta = void 0, this.needsReset = !0), p && this.setOptions({ transition: p });
    }
    relegate() {
      const h = this.getStack();
      return h ? h.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: h } = this.options;
      if (!h)
        return;
      let p = !1;
      const { latestValues: g } = h;
      if ((g.z || g.rotate || g.rotateX || g.rotateY || g.rotateZ || g.skewX || g.skewY) && (p = !0), !p)
        return;
      const m = {};
      g.z && lc("z", h, m, this.animationValues);
      for (let v = 0; v < ac.length; v++)
        lc(`rotate${ac[v]}`, h, m, this.animationValues), lc(`skew${ac[v]}`, h, m, this.animationValues);
      h.render();
      for (const v in m)
        h.setStaticValue(v, m[v]), this.animationValues && (this.animationValues[v] = m[v]);
      h.scheduleRender();
    }
    applyProjectionStyles(h, p) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        h.visibility = "hidden";
        return;
      }
      const g = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, h.visibility = "", h.opacity = "", h.pointerEvents = cu(p?.pointerEvents) || "", h.transform = g ? g(this.latestValues, "") : "none";
        return;
      }
      const m = this.getLead();
      if (!this.projectionDelta || !this.layout || !m.target) {
        this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, h.pointerEvents = cu(p?.pointerEvents) || ""), this.hasProjected && !Ti(this.latestValues) && (h.transform = g ? g({}, "") : "none", this.hasProjected = !1);
        return;
      }
      h.visibility = "";
      const v = m.animationValues || m.latestValues;
      this.applyTransformsToTarget();
      let S = DA(this.projectionDeltaWithTransform, this.treeScale, v);
      g && (S = g(v, S)), h.transform = S;
      const { x: b, y: V } = this.projectionDelta;
      h.transformOrigin = `${b.origin * 100}% ${V.origin * 100}% 0`, m.animationValues ? h.opacity = m === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : h.opacity = m === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
      for (const C in Uc) {
        if (v[C] === void 0)
          continue;
        const { correct: U, applyTo: j, isCSSVariable: w } = Uc[C], q = S === "none" ? v[C] : U(v[C], m);
        if (j) {
          const H = j.length;
          for (let Y = 0; Y < H; Y++)
            h[j[Y]] = q;
        } else
          w ? this.options.visualElement.renderState.vars[C] = q : h[C] = q;
      }
      this.options.layoutId && (h.pointerEvents = m === this ? cu(p?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((h) => h.currentAnimation?.stop()), this.root.nodes.forEach(Ey), this.root.sharedNodes.clear();
    }
  };
}
function LA(i) {
  i.updateLayout();
}
function wA(i) {
  const l = i.resumeFrom?.snapshot || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: u, measuredBox: o } = i.layout, { animationType: c } = i.options, d = l.source !== i.layout.source;
    if (c === "size")
      $e((v) => {
        const S = d ? l.measuredBox[v] : l.layoutBox[v], b = re(S);
        S.min = u[v].min, S.max = S.min + b;
      });
    else if (c === "x" || c === "y") {
      const v = c === "x" ? "y" : "x";
      Bc(d ? l.measuredBox[v] : l.layoutBox[v], u[v]);
    } else E0(c, l.layoutBox, u) && $e((v) => {
      const S = d ? l.measuredBox[v] : l.layoutBox[v], b = re(u[v]);
      S.max = S.min + b, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[v].max = i.relativeTarget[v].min + b);
    });
    const h = ma();
    Al(h, u, l.layoutBox);
    const p = ma();
    d ? Al(p, i.applyTransform(o, !0), l.measuredBox) : Al(p, u, l.layoutBox);
    const g = !g0(h);
    let m = !1;
    if (!i.resumeFrom) {
      const v = i.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: S, layout: b } = v;
        if (S && b) {
          const V = i.options.layoutAnchor || void 0, C = kt();
          Su(C, l.layoutBox, S.layoutBox, V);
          const U = kt();
          Su(U, u, b.layoutBox, V), v0(C, U) || (m = !0), v.options.layoutRoot && (i.relativeTarget = U, i.relativeTargetOrigin = C, i.relativeParent = v);
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: u,
      snapshot: l,
      delta: p,
      layoutDelta: h,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: m
    });
  } else if (i.isLead()) {
    const { onExitComplete: u } = i.options;
    u && u();
  }
  i.options.transition = void 0;
}
function HA(i) {
  i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function YA(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function qA(i) {
  i.clearSnapshot();
}
function Ey(i) {
  i.clearMeasurements();
}
function GA(i) {
  i.isLayoutDirty = !0, i.updateLayout();
}
function My(i) {
  i.isLayoutDirty = !1;
}
function XA(i) {
  i.isAnimationBlocked && i.layout && !i.isLayoutDirty && (i.snapshot = i.layout, i.isLayoutDirty = !0);
}
function KA(i) {
  const { visualElement: l } = i.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function xy(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0;
}
function QA(i) {
  i.resolveTargetDelta();
}
function ZA(i) {
  i.calcProjection();
}
function JA(i) {
  i.resetSkewAndRotation();
}
function kA(i) {
  i.removeLeadSnapshot();
}
function Dy(i, l, u) {
  i.translate = Rt(l.translate, 0, u), i.scale = Rt(l.scale, 1, u), i.origin = l.origin, i.originPoint = l.originPoint;
}
function Cy(i, l, u, o) {
  i.min = Rt(l.min, u.min, o), i.max = Rt(l.max, u.max, o);
}
function FA(i, l, u, o) {
  Cy(i.x, l.x, u.x, o), Cy(i.y, l.y, u.y, o);
}
function WA(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const PA = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Ry = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), zy = Ry("applewebkit/") && !Ry("chrome/") ? Math.round : Ye;
function Oy(i) {
  i.min = zy(i.min), i.max = zy(i.max);
}
function $A(i) {
  Oy(i.x), Oy(i.y);
}
function E0(i, l, u) {
  return i === "position" || i === "preserve-aspect" && !TA(vy(l), vy(u), 0.2);
}
function IA(i) {
  return i !== i.root && i.scroll?.wasRoot;
}
const tE = A0({
  attachResizeListener: (i, l) => Rl(i, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), sc = {
  current: void 0
}, M0 = A0({
  measureScroll: (i) => ({
    x: i.scrollLeft,
    y: i.scrollTop
  }),
  defaultParent: () => {
    if (!sc.current) {
      const i = new tE({});
      i.mount(window), i.setOptions({ layoutScroll: !0 }), sc.current = i;
    }
    return sc.current;
  },
  resetTransform: (i, l) => {
    i.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed"
}), va = Z.createContext({
  transformPagePoint: (i) => i,
  isStatic: !1,
  reducedMotion: "never"
});
function Vy(i, l) {
  if (typeof i == "function")
    return i(l);
  i != null && (i.current = l);
}
function eE(...i) {
  return (l) => {
    let u = !1;
    const o = i.map((c) => {
      const d = Vy(c, l);
      return !u && typeof d == "function" && (u = !0), d;
    });
    if (u)
      return () => {
        for (let c = 0; c < o.length; c++) {
          const d = o[c];
          typeof d == "function" ? d() : Vy(i[c], null);
        }
      };
  };
}
function nE(...i) {
  return Z.useCallback(eE(...i), i);
}
class iE extends Z.Component {
  getSnapshotBeforeUpdate(l) {
    const u = this.props.childRef.current;
    if (au(u) && l.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const o = u.offsetParent, c = au(o) && o.offsetWidth || 0, d = au(o) && o.offsetHeight || 0, h = getComputedStyle(u), p = this.props.sizeRef.current;
      p.height = parseFloat(h.height), p.width = parseFloat(h.width), p.top = u.offsetTop, p.left = u.offsetLeft, p.right = c - p.width - p.left, p.bottom = d - p.height - p.top, p.direction = h.direction;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function aE({ children: i, isPresent: l, anchorX: u, anchorY: o, root: c, pop: d }) {
  const h = Z.useId(), p = Z.useRef(null), g = Z.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: m } = Z.useContext(va), v = d !== !1 ? i.props?.ref ?? i?.ref : void 0, S = nE(p, v);
  return Z.useInsertionEffect(() => {
    const { width: b, height: V, top: C, left: U, right: j, bottom: w, direction: q } = g.current;
    if (l || d === !1 || !p.current || !b || !V)
      return;
    const H = q === "rtl", Y = u === "left" ? H ? `right: ${j}` : `left: ${U}` : H ? `left: ${U}` : `right: ${j}`, tt = o === "bottom" ? `bottom: ${w}` : `top: ${C}`;
    p.current.dataset.motionPopId = h;
    const et = document.createElement("style");
    m && (et.nonce = m);
    const X = c ?? document.head;
    return X.appendChild(et), et.sheet && et.sheet.insertRule(`
          [data-motion-pop-id="${h}"] {
            position: absolute !important;
            width: ${b}px !important;
            height: ${V}px !important;
            ${Y}px !important;
            ${tt}px !important;
          }
        `), () => {
      p.current?.removeAttribute("data-motion-pop-id"), X.contains(et) && X.removeChild(et);
    };
  }, [l]), nt.jsx(iE, { isPresent: l, childRef: p, sizeRef: g, pop: d, children: d === !1 ? i : Z.cloneElement(i, { ref: S }) });
}
const lE = ({ children: i, initial: l, isPresent: u, onExitComplete: o, custom: c, presenceAffectsLayout: d, mode: h, anchorX: p, anchorY: g, root: m }) => {
  const v = zl(sE), S = Z.useId(), b = Z.useRef(u), V = Z.useRef(o);
  Hc(() => {
    b.current = u, V.current = o;
  });
  let C = !0, U = Z.useMemo(() => (C = !1, {
    id: S,
    initial: l,
    isPresent: u,
    custom: c,
    onExitComplete: (j) => {
      v.set(j, !0);
      for (const w of v.values())
        if (!w)
          return;
      o && o();
    },
    register: (j) => (v.set(j, !1), () => {
      v.delete(j), !b.current && !v.size && V.current?.();
    })
  }), [u, v, o]);
  return d && C && (U = { ...U }), Z.useMemo(() => {
    v.forEach((j, w) => v.set(w, !1));
  }, [u]), Z.useEffect(() => {
    !u && !v.size && o && o();
  }, [u]), i = nt.jsx(aE, { pop: h === "popLayout", isPresent: u, anchorX: p, anchorY: g, root: m, children: i }), nt.jsx(bu.Provider, { value: U, children: i });
};
function sE() {
  return /* @__PURE__ */ new Map();
}
function x0(i = !0) {
  const l = Z.useContext(bu);
  if (l === null)
    return [!0, null];
  const { isPresent: u, onExitComplete: o, register: c } = l, d = Z.useId();
  Z.useEffect(() => {
    if (i)
      return c(d);
  }, [i]);
  const h = Z.useCallback(() => i && o && o(d), [d, o, i]);
  return !u && o ? [!1, h] : [!0];
}
const Is = (i) => i.key || "";
function _y(i) {
  const l = [];
  return Z.Children.forEach(i, (u) => {
    Z.isValidElement(u) && l.push(u);
  }), l;
}
const uE = ({ children: i, custom: l, initial: u = !0, onExitComplete: o, presenceAffectsLayout: c = !0, mode: d = "sync", propagate: h = !1, anchorX: p = "left", anchorY: g = "top", root: m }) => {
  const [v, S] = x0(h), b = Z.useMemo(() => _y(i), [i]), V = h && !v ? [] : b.map(Is), C = Z.useRef(!0), U = Z.useRef(b), j = zl(() => /* @__PURE__ */ new Map()), w = Z.useRef(/* @__PURE__ */ new Set()), [q, H] = Z.useState(b), [Y, tt] = Z.useState(b);
  Hc(() => {
    C.current = !1, U.current = b;
    for (let J = 0; J < Y.length; J++) {
      const k = Is(Y[J]);
      V.includes(k) ? (j.delete(k), w.current.delete(k)) : j.get(k) !== !0 && j.set(k, !1);
    }
  }, [Y, V.length, V.join("-")]);
  const et = [];
  if (b !== q) {
    let J = [...b];
    for (let k = 0; k < Y.length; k++) {
      const $ = Y[k], st = Is($);
      V.includes(st) || (J.splice(k, 0, $), et.push($));
    }
    return d === "wait" && et.length && (J = et), tt(_y(J)), H(b), null;
  }
  const { forceRender: X } = Z.useContext(wc);
  return nt.jsx(nt.Fragment, { children: Y.map((J) => {
    const k = Is(J), $ = h && !v ? !1 : b === Y || V.includes(k), st = () => {
      if (w.current.has(k))
        return;
      if (j.has(k))
        w.current.add(k), j.set(k, !0);
      else
        return;
      let pt = !0;
      j.forEach((Lt) => {
        Lt || (pt = !1);
      }), pt && (X?.(), tt(U.current), h && S?.(), o && o());
    };
    return nt.jsx(lE, { isPresent: $, initial: !C.current || u ? void 0 : !1, custom: l, presenceAffectsLayout: c, mode: d, root: m, onExitComplete: $ ? void 0 : st, anchorX: p, anchorY: g, children: J }, k);
  }) });
}, D0 = Z.createContext({ strict: !1 }), Uy = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let By = !1;
function oE() {
  if (By)
    return;
  const i = {};
  for (const l in Uy)
    i[l] = {
      isEnabled: (u) => Uy[l].some((o) => !!u[o])
    };
  $g(i), By = !0;
}
function C0() {
  return oE(), Jb();
}
function rE(i) {
  const l = C0();
  for (const u in i)
    l[u] = {
      ...l[u],
      ...i[u]
    };
  $g(l);
}
const cE = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function Tu(i) {
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || cE.has(i);
}
let R0 = (i) => !Tu(i);
function z0(i) {
  typeof i == "function" && (R0 = (l) => l.startsWith("on") ? !Tu(l) : i(l));
}
try {
  z0(require("@emotion/is-prop-valid").default);
} catch {
}
function fE(i, l, u) {
  const o = {};
  for (const c in i)
    c === "values" && typeof i.values == "object" || Pt(i[c]) || (R0(c) || u === !0 && Tu(c) || !l && !Tu(c) || // If trying to use native HTML drag events, forward drag listeners
    i.draggable && c.startsWith("onDrag")) && (o[c] = i[c]);
  return o;
}
function hE({ children: i, isValidProp: l, ...u }) {
  l && z0(l);
  const o = Z.useContext(va);
  u = { ...o, ...u }, u.transition = Ic(u.transition, o.transition), u.isStatic = zl(() => u.isStatic);
  const c = Z.useMemo(() => u, [
    JSON.stringify(u.transition),
    u.transformPagePoint,
    u.reducedMotion,
    u.skipAnimations
  ]);
  return nt.jsx(va.Provider, { value: c, children: i });
}
const Cu = /* @__PURE__ */ Z.createContext({});
function dE(i, l) {
  if (Du(i)) {
    const { initial: u, animate: o } = i;
    return {
      initial: u === !1 || Cl(u) ? u : void 0,
      animate: Cl(o) ? o : void 0
    };
  }
  return i.inherit !== !1 ? l : {};
}
function mE(i) {
  const { initial: l, animate: u } = dE(i, Z.useContext(Cu));
  return Z.useMemo(() => ({ initial: l, animate: u }), [Ny(l), Ny(u)]);
}
function Ny(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const pf = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function O0(i, l, u) {
  for (const o in l)
    !Pt(l[o]) && !s0(o, u) && (i[o] = l[o]);
}
function pE({ transformTemplate: i }, l) {
  return Z.useMemo(() => {
    const u = pf();
    return df(u, l, i), Object.assign({}, u.vars, u.style);
  }, [l]);
}
function yE(i, l) {
  const u = i.style || {}, o = {};
  return O0(o, u, i), Object.assign(o, pE(i, l)), o;
}
function gE(i, l) {
  const u = {}, o = yE(i, l);
  return i.drag && i.dragListener !== !1 && (u.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (u.tabIndex = 0), u.style = o, u;
}
const V0 = () => ({
  ...pf(),
  attrs: {}
});
function vE(i, l, u, o) {
  const c = Z.useMemo(() => {
    const d = V0();
    return o0(d, l, c0(o), i.transformTemplate, i.style), {
      ...d.attrs,
      style: { ...d.style }
    };
  }, [l]);
  if (i.style) {
    const d = {};
    O0(d, i.style, i), c.style = { ...d, ...c.style };
  }
  return c;
}
const SE = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function yf(i) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof i != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    i.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(SE.indexOf(i) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(i))
    )
  );
}
function TE(i, l, u, { latestValues: o }, c, d = !1, h) {
  const g = (h ?? yf(i) ? vE : gE)(l, o, c, i), m = fE(l, typeof i == "string", d), v = i !== Z.Fragment ? { ...m, ...g, ref: u } : {}, { children: S } = l, b = Z.useMemo(() => Pt(S) ? S.get() : S, [S]);
  return Z.createElement(i, {
    ...v,
    children: b
  });
}
function bE({ scrapeMotionValuesFromProps: i, createRenderState: l }, u, o, c) {
  return {
    latestValues: AE(u, o, c, i),
    renderState: l()
  };
}
function AE(i, l, u, o) {
  const c = {}, d = o(i, {});
  for (const b in d)
    c[b] = cu(d[b]);
  let { initial: h, animate: p } = i;
  const g = Du(i), m = Wg(i);
  l && m && !g && i.inherit !== !1 && (h === void 0 && (h = l.initial), p === void 0 && (p = l.animate));
  let v = u ? u.initial === !1 : !1;
  v = v || h === !1;
  const S = v ? p : h;
  if (S && typeof S != "boolean" && !xu(S)) {
    const b = Array.isArray(S) ? S : [S];
    for (let V = 0; V < b.length; V++) {
      const C = nf(i, b[V]);
      if (C) {
        const { transitionEnd: U, transition: j, ...w } = C;
        for (const q in w) {
          let H = w[q];
          if (Array.isArray(H)) {
            const Y = v ? H.length - 1 : 0;
            H = H[Y];
          }
          H !== null && (c[q] = H);
        }
        for (const q in U)
          c[q] = U[q];
      }
    }
  }
  return c;
}
const _0 = (i) => (l, u) => {
  const o = Z.useContext(Cu), c = Z.useContext(bu), d = () => bE(i, l, o, c);
  return u ? d() : zl(d);
}, EE = /* @__PURE__ */ _0({
  scrapeMotionValuesFromProps: mf,
  createRenderState: pf
}), ME = /* @__PURE__ */ _0({
  scrapeMotionValuesFromProps: f0,
  createRenderState: V0
}), xE = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function DE(i, l, u) {
  const o = Z.useRef(u);
  Z.useInsertionEffect(() => {
    o.current = u;
  });
  const c = Z.useRef(null);
  return Z.useCallback((d) => {
    d && i.onMount?.(d), l && (d ? l.mount(d) : l.unmount());
    const h = o.current;
    if (typeof h == "function")
      if (d) {
        const p = h(d);
        typeof p == "function" && (c.current = p);
      } else c.current ? (c.current(), c.current = null) : h(d);
    else h && (h.current = d);
  }, [l]);
}
const U0 = Z.createContext({});
function fa(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function CE(i, l, u, o, c, d) {
  const { visualElement: h } = Z.useContext(Cu), p = Z.useContext(D0), g = Z.useContext(bu), m = Z.useContext(va), v = m.reducedMotion, S = m.skipAnimations, b = Z.useRef(null), V = Z.useRef(!1);
  o = o || p.renderer, !b.current && o && (b.current = o(i, {
    visualState: l,
    parent: h,
    props: u,
    presenceContext: g,
    blockInitialAnimation: g ? g.initial === !1 : !1,
    reducedMotionConfig: v,
    skipAnimations: S,
    isSVG: d
  }), V.current && b.current && (b.current.manuallyAnimateOnMount = !0));
  const C = b.current, U = Z.useContext(U0);
  C && !C.projection && c && (C.type === "html" || C.type === "svg") && RE(b.current, u, c, U);
  const j = Z.useRef(!1);
  Z.useInsertionEffect(() => {
    C && j.current && C.update(u, g);
  });
  const w = u[Hg], q = Z.useRef(!!w && typeof window < "u" && !window.MotionHandoffIsComplete?.(w) && window.MotionHasOptimisedAnimation?.(w));
  return Hc(() => {
    V.current = !0, C && (j.current = !0, window.MotionIsMounted = !0, C.updateFeatures(), C.scheduleRenderMicrotask(), q.current && C.animationState && C.animationState.animateChanges());
  }), Z.useEffect(() => {
    C && (!q.current && C.animationState && C.animationState.animateChanges(), q.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(w);
    }), q.current = !1), C.enteringChildren = void 0);
  }), C;
}
function RE(i, l, u, o) {
  const { layoutId: c, layout: d, drag: h, dragConstraints: p, layoutScroll: g, layoutRoot: m, layoutAnchor: v, layoutCrossfade: S } = l;
  i.projection = new u(i.latestValues, l["data-framer-portal-id"] ? void 0 : B0(i.parent)), i.projection.setOptions({
    layoutId: c,
    layout: d,
    alwaysMeasureLayout: !!h || p && fa(p),
    visualElement: i,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof d == "string" ? d : "both",
    initialPromotionConfig: o,
    crossfade: S,
    layoutScroll: g,
    layoutRoot: m,
    layoutAnchor: v
  });
}
function B0(i) {
  if (i)
    return i.options.allowProjection !== !1 ? i.projection : B0(i.parent);
}
function uc(i, { forwardMotionProps: l = !1, type: u } = {}, o, c) {
  o && rE(o);
  const d = u ? u === "svg" : yf(i), h = d ? ME : EE;
  function p(m, v) {
    let S;
    const b = {
      ...Z.useContext(va),
      ...m,
      layoutId: zE(m)
    }, { isStatic: V } = b, C = mE(m), U = h(m, V);
    if (!V && typeof window < "u") {
      OE();
      const j = VE(b);
      S = j.MeasureLayout, C.visualElement = CE(i, U, b, c, j.ProjectionNode, d);
    }
    return nt.jsxs(Cu.Provider, { value: C, children: [S && C.visualElement ? nt.jsx(S, { visualElement: C.visualElement, ...b }) : null, TE(i, m, DE(U, C.visualElement, v), U, V, l, d)] });
  }
  p.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const g = Z.forwardRef(p);
  return g[xE] = i, g;
}
function zE({ layoutId: i }) {
  const l = Z.useContext(wc).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function OE(i, l) {
  Z.useContext(D0).strict;
}
function VE(i) {
  const l = C0(), { drag: u, layout: o } = l;
  if (!u && !o)
    return {};
  const c = { ...u, ...o };
  return {
    MeasureLayout: u?.isEnabled(i) || o?.isEnabled(i) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function _E(i, l) {
  if (typeof Proxy > "u")
    return uc;
  const u = /* @__PURE__ */ new Map(), o = (d, h) => uc(d, h, i, l), c = (d, h) => o(d, h);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (d, h) => h === "create" ? o : (u.has(h) || u.set(h, uc(h, void 0, i, l)), u.get(h))
  });
}
const UE = (i, l) => l.isSVG ?? yf(i) ? new h0(l) : new u0(l, {
  allowProjection: i !== Z.Fragment
});
class BE extends $n {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = mA(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    xu(l) && (this.unmountControls = l.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(), { animate: u } = this.node.prevProps || {};
    l !== u && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let NE = 0;
class jE extends $n {
  constructor() {
    super(...arguments), this.id = NE++, this.isExitComplete = !1;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: l, onExitComplete: u } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === o)
      return;
    if (l && o === !1) {
      if (this.isExitComplete) {
        const { initial: d, custom: h } = this.node.getProps();
        if (typeof d == "string" || typeof d == "object" && d !== null && !Array.isArray(d)) {
          const p = xi(this.node, d, h);
          if (p) {
            const { transition: g, transitionEnd: m, ...v } = p;
            for (const S in v)
              this.node.getValue(S)?.jump(v[S]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !l);
    u && !l && c.then(() => {
      this.isExitComplete = !0, u(this.id);
    });
  }
  mount() {
    const { register: l, onExitComplete: u } = this.node.presenceContext || {};
    u && u(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {
  }
}
const LE = {
  animation: {
    Feature: BE
  },
  exit: {
    Feature: jE
  }
};
function Ul(i) {
  return {
    point: {
      x: i.pageX,
      y: i.pageY
    }
  };
}
const wE = (i) => (l) => rf(l) && i(l, Ul(l));
function El(i, l, u, o) {
  return Rl(i, l, wE(u), o);
}
const N0 = ({ current: i }) => i ? i.ownerDocument.defaultView : null, jy = (i, l) => Math.abs(i - l);
function HE(i, l) {
  const u = jy(i.x, l.x), o = jy(i.y, l.y);
  return Math.sqrt(u ** 2 + o ** 2);
}
const Ly = /* @__PURE__ */ new Set(["auto", "scroll"]);
class j0 {
  constructor(l, u, { transformPagePoint: o, contextWindow: c = window, dragSnapToOrigin: d = !1, distanceThreshold: h = 3, element: p } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (C) => {
      this.handleScroll(C.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = tu(this.lastRawMoveEventInfo, this.transformPagePoint));
      const C = oc(this.lastMoveEventInfo, this.history), U = this.startEvent !== null, j = HE(C.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!U && !j)
        return;
      const { point: w } = C, { timestamp: q } = le;
      this.history.push({ ...w, timestamp: q });
      const { onStart: H, onMove: Y } = this.handlers;
      U || (H && H(this.lastMoveEvent, C), this.startEvent = this.lastMoveEvent), Y && Y(this.lastMoveEvent, C);
    }, this.handlePointerMove = (C, U) => {
      this.lastMoveEvent = C, this.lastRawMoveEventInfo = U, this.lastMoveEventInfo = tu(U, this.transformPagePoint), Ot.update(this.updatePoint, !0);
    }, this.handlePointerUp = (C, U) => {
      this.end();
      const { onEnd: j, onSessionEnd: w, resumeAnimation: q } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && q && q(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const H = oc(C.type === "pointercancel" ? this.lastMoveEventInfo : tu(U, this.transformPagePoint), this.history);
      this.startEvent && j && j(C, H), w && w(C, H);
    }, !rf(l))
      return;
    this.dragSnapToOrigin = d, this.handlers = u, this.transformPagePoint = o, this.distanceThreshold = h, this.contextWindow = c || window;
    const g = Ul(l), m = tu(g, this.transformPagePoint), { point: v } = m, { timestamp: S } = le;
    this.history = [{ ...v, timestamp: S }];
    const { onSessionStart: b } = u;
    b && b(l, oc(m, this.history));
    const V = { passive: !0, capture: !0 };
    this.removeListeners = Ol(El(this.contextWindow, "pointermove", this.handlePointerMove, V), El(this.contextWindow, "pointerup", this.handlePointerUp, V), El(this.contextWindow, "pointercancel", this.handlePointerUp, V)), p && this.startScrollTracking(p);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let u = l.parentElement;
    for (; u; ) {
      const o = getComputedStyle(u);
      (Ly.has(o.overflowX) || Ly.has(o.overflowY)) && this.scrollPositions.set(u, {
        x: u.scrollLeft,
        y: u.scrollTop
      }), u = u.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: !0
    }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: !0
      }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(l) {
    const u = this.scrollPositions.get(l);
    if (!u)
      return;
    const o = l === window, c = o ? { x: window.scrollX, y: window.scrollY } : {
      x: l.scrollLeft,
      y: l.scrollTop
    }, d = { x: c.x - u.x, y: c.y - u.y };
    d.x === 0 && d.y === 0 || (o ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += d.x, this.lastMoveEventInfo.point.y += d.y) : this.history.length > 0 && (this.history[0].x -= d.x, this.history[0].y -= d.y), this.scrollPositions.set(l, c), Ot.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Wn(this.updatePoint);
  }
}
function tu(i, l) {
  return l ? { point: l(i.point) } : i;
}
function wy(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function oc({ point: i }, l) {
  return {
    point: i,
    delta: wy(i, L0(l)),
    offset: wy(i, YE(l)),
    velocity: qE(l, 0.1)
  };
}
function YE(i) {
  return i[0];
}
function L0(i) {
  return i[i.length - 1];
}
function qE(i, l) {
  if (i.length < 2)
    return { x: 0, y: 0 };
  let u = i.length - 1, o = null;
  const c = L0(i);
  for (; u >= 0 && (o = i[u], !(c.timestamp - o.timestamp > /* @__PURE__ */ ge(l))); )
    u--;
  if (!o)
    return { x: 0, y: 0 };
  o === i[0] && i.length > 2 && c.timestamp - o.timestamp > /* @__PURE__ */ ge(l) * 2 && (o = i[1]);
  const d = /* @__PURE__ */ He(c.timestamp - o.timestamp);
  if (d === 0)
    return { x: 0, y: 0 };
  const h = {
    x: (c.x - o.x) / d,
    y: (c.y - o.y) / d
  };
  return h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h;
}
function GE(i, { min: l, max: u }, o) {
  return l !== void 0 && i < l ? i = o ? Rt(l, i, o.min) : Math.max(i, l) : u !== void 0 && i > u && (i = o ? Rt(u, i, o.max) : Math.min(i, u)), i;
}
function Hy(i, l, u) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: u !== void 0 ? i.max + u - (i.max - i.min) : void 0
  };
}
function XE(i, { top: l, left: u, bottom: o, right: c }) {
  return {
    x: Hy(i.x, u, c),
    y: Hy(i.y, l, o)
  };
}
function Yy(i, l) {
  let u = l.min - i.min, o = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([u, o] = [o, u]), { min: u, max: o };
}
function KE(i, l) {
  return {
    x: Yy(i.x, l.x),
    y: Yy(i.y, l.y)
  };
}
function QE(i, l) {
  let u = 0.5;
  const o = re(i), c = re(l);
  return c > o ? u = /* @__PURE__ */ ya(l.min, l.max - o, i.min) : o > c && (u = /* @__PURE__ */ ya(i.min, i.max - c, l.min)), en(0, 1, u);
}
function ZE(i, l) {
  const u = {};
  return l.min !== void 0 && (u.min = l.min - i.min), l.max !== void 0 && (u.max = l.max - i.min), u;
}
const Nc = 0.35;
function JE(i = Nc) {
  return i === !1 ? i = 0 : i === !0 && (i = Nc), {
    x: qy(i, "left", "right"),
    y: qy(i, "top", "bottom")
  };
}
function qy(i, l, u) {
  return {
    min: Gy(i, l),
    max: Gy(i, u)
  };
}
function Gy(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
const kE = /* @__PURE__ */ new WeakMap();
class FE {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = kt(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l;
  }
  start(l, { snapToCursor: u = !1, distanceThreshold: o } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1)
      return;
    const d = (S) => {
      u && this.snapToCursor(Ul(S).point), this.stopAnimation();
    }, h = (S, b) => {
      const { drag: V, dragPropagation: C, onDragStart: U } = this.getProps();
      if (V && !C && (this.openDragLock && this.openDragLock(), this.openDragLock = Mb(V), !this.openDragLock))
        return;
      this.latestPointerEvent = S, this.latestPanInfo = b, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $e((w) => {
        let q = this.getAxisMotionValue(w).get() || 0;
        if (tn.test(q)) {
          const { projection: H } = this.visualElement;
          if (H && H.layout) {
            const Y = H.layout.layoutBox[w];
            Y && (q = re(Y) * (parseFloat(q) / 100));
          }
        }
        this.originPoint[w] = q;
      }), U && Ot.update(() => U(S, b), !1, !0), Dc(this.visualElement, "transform");
      const { animationState: j } = this.visualElement;
      j && j.setActive("whileDrag", !0);
    }, p = (S, b) => {
      this.latestPointerEvent = S, this.latestPanInfo = b;
      const { dragPropagation: V, dragDirectionLock: C, onDirectionLock: U, onDrag: j } = this.getProps();
      if (!V && !this.openDragLock)
        return;
      const { offset: w } = b;
      if (C && this.currentDirection === null) {
        this.currentDirection = PE(w), this.currentDirection !== null && U && U(this.currentDirection);
        return;
      }
      this.updateAxis("x", b.point, w), this.updateAxis("y", b.point, w), this.visualElement.render(), j && Ot.update(() => j(S, b), !1, !0);
    }, g = (S, b) => {
      this.latestPointerEvent = S, this.latestPanInfo = b, this.stop(S, b), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, m = () => {
      const { dragSnapToOrigin: S } = this.getProps();
      (S || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new j0(l, {
      onSessionStart: d,
      onStart: h,
      onMove: p,
      onSessionEnd: g,
      resumeAnimation: m
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: v,
      distanceThreshold: o,
      contextWindow: N0(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(l, u) {
    const o = l || this.latestPointerEvent, c = u || this.latestPanInfo, d = this.isDragging;
    if (this.cancel(), !d || !c || !o)
      return;
    const { velocity: h } = c;
    this.startAnimation(h);
    const { onDragEnd: p } = this.getProps();
    p && Ot.postRender(() => p(o, c));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: u } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: o } = this.getProps();
    !o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), u && u.setActive("whileDrag", !1);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(l, u, o) {
    const { drag: c } = this.getProps();
    if (!o || !eu(l, c, this.currentDirection))
      return;
    const d = this.getAxisMotionValue(l);
    let h = this.originPoint[l] + o[l];
    this.constraints && this.constraints[l] && (h = GE(h, this.constraints[l], this.elastic[l])), d.set(h);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: u } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, c = this.constraints;
    l && fa(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && o ? this.constraints = XE(o.layoutBox, l) : this.constraints = !1, this.elastic = JE(u), c !== this.constraints && !fa(l) && o && this.constraints && !this.hasMutatedConstraints && $e((d) => {
      this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = ZE(o.layoutBox[d], this.constraints[d]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: u } = this.getProps();
    if (!l || !fa(l))
      return !1;
    const o = l.current, { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    c.root && (c.root.scroll = void 0, c.root.updateScroll());
    const d = Pb(o, c.root, this.visualElement.getTransformPagePoint());
    let h = KE(c.layout.layoutBox, d);
    if (u) {
      const p = u(kb(h));
      this.hasMutatedConstraints = !!p, p && (h = e0(p));
    }
    return h;
  }
  startAnimation(l) {
    const { drag: u, dragMomentum: o, dragElastic: c, dragTransition: d, dragSnapToOrigin: h, onDragTransitionEnd: p } = this.getProps(), g = this.constraints || {}, m = $e((v) => {
      if (!eu(v, u, this.currentDirection))
        return;
      let S = g && g[v] || {};
      (h === !0 || h === v) && (S = { min: 0, max: 0 });
      const b = c ? 200 : 1e6, V = c ? 40 : 1e7, C = {
        type: "inertia",
        velocity: o ? l[v] : 0,
        bounceStiffness: b,
        bounceDamping: V,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...d,
        ...S
      };
      return this.startAxisValueAnimation(v, C);
    });
    return Promise.all(m).then(p);
  }
  startAxisValueAnimation(l, u) {
    const o = this.getAxisMotionValue(l);
    return Dc(this.visualElement, l), o.start(ef(l, o, 0, u, this.visualElement, !1));
  }
  stopAnimation() {
    $e((l) => this.getAxisMotionValue(l).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(l) {
    const u = `_drag${l.toUpperCase()}`, c = this.visualElement.getProps()[u];
    return c || this.visualElement.getValue(l, this.visualElement.latestValues[l] ?? 0);
  }
  snapToCursor(l) {
    $e((u) => {
      const { drag: o } = this.getProps();
      if (!eu(u, o, this.currentDirection))
        return;
      const { projection: c } = this.visualElement, d = this.getAxisMotionValue(u);
      if (c && c.layout) {
        const { min: h, max: p } = c.layout.layoutBox[u], g = d.get() || 0;
        d.set(l[u] - Rt(h, p, 0.5) + g);
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: l, dragConstraints: u } = this.getProps(), { projection: o } = this.visualElement;
    if (!fa(u) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    $e((h) => {
      const p = this.getAxisMotionValue(h);
      if (p && this.constraints !== !1) {
        const g = p.get();
        c[h] = QE({ min: g, max: g }, this.constraints[h]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    this.visualElement.current.style.transform = d ? d({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.constraints = !1, this.resolveConstraints(), $e((h) => {
      if (!eu(h, l, null))
        return;
      const p = this.getAxisMotionValue(h), { min: g, max: m } = this.constraints[h];
      p.set(Rt(g, m, c[h]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    kE.set(this.visualElement, this);
    const l = this.visualElement.current, u = El(l, "pointerdown", (m) => {
      const { drag: v, dragListener: S = !0 } = this.getProps(), b = m.target, V = b !== l && Ob(b);
      v && S && !V && this.start(m);
    });
    let o;
    const c = () => {
      const { dragConstraints: m } = this.getProps();
      fa(m) && m.current && (this.constraints = this.resolveRefConstraints(), o || (o = WE(l, m.current, () => this.scalePositionWithinConstraints())));
    }, { projection: d } = this.visualElement, h = d.addEventListener("measure", c);
    d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()), Ot.read(c);
    const p = Rl(window, "resize", () => this.scalePositionWithinConstraints()), g = d.addEventListener("didUpdate", (({ delta: m, hasLayoutChanged: v }) => {
      this.isDragging && v && ($e((S) => {
        const b = this.getAxisMotionValue(S);
        b && (this.originPoint[S] += m[S].translate, b.set(b.get() + m[S].translate));
      }), this.visualElement.render());
    }));
    return () => {
      p(), u(), h(), g && g(), o && o();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: u = !1, dragDirectionLock: o = !1, dragPropagation: c = !1, dragConstraints: d = !1, dragElastic: h = Nc, dragMomentum: p = !0 } = l;
    return {
      ...l,
      drag: u,
      dragDirectionLock: o,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: h,
      dragMomentum: p
    };
  }
}
function Xy(i) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    i();
  };
}
function WE(i, l, u) {
  const o = Wp(i, Xy(u)), c = Wp(l, Xy(u));
  return () => {
    o(), c();
  };
}
function eu(i, l, u) {
  return (l === !0 || l === i) && (u === null || u === i);
}
function PE(i, l = 10) {
  let u = null;
  return Math.abs(i.y) > l ? u = "y" : Math.abs(i.x) > l && (u = "x"), u;
}
class $E extends $n {
  constructor(l) {
    super(l), this.removeGroupControls = Ye, this.removeListeners = Ye, this.controls = new FE(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ye;
  }
  update() {
    const { dragControls: l } = this.node.getProps(), { dragControls: u } = this.node.prevProps || {};
    l !== u && (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const rc = (i) => (l, u) => {
  i && Ot.update(() => i(l, u), !1, !0);
};
class IE extends $n {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ye;
  }
  onPointerDown(l) {
    this.session = new j0(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: N0(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: u, onPan: o, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: rc(l),
      onStart: rc(u),
      onMove: rc(o),
      onEnd: (d, h) => {
        delete this.session, c && Ot.postRender(() => c(d, h));
      }
    };
  }
  mount() {
    this.removePointerDownListener = El(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let cc = !1;
class t2 extends Z.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: u, switchLayoutGroup: o, layoutId: c } = this.props, { projection: d } = l;
    d && (u.group && u.group.add(d), o && o.register && c && o.register(d), cc && d.root.didUpdate(), d.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), d.setOptions({
      ...d.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), fu.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: u, visualElement: o, drag: c, isPresent: d } = this.props, { projection: h } = o;
    return h && (h.isPresent = d, l.layoutDependency !== u && h.setOptions({
      ...h.options,
      layoutDependency: u
    }), cc = !0, c || l.layoutDependency !== u || u === void 0 || l.isPresent !== d ? h.willUpdate() : this.safeToRemove(), l.isPresent !== d && (d ? h.promote() : h.relegate() || Ot.postRender(() => {
      const p = h.getStack();
      (!p || !p.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: u } = this.props, { projection: o } = l;
    o && (o.options.layoutAnchor = u, o.root.didUpdate(), of.postRender(() => {
      !o.currentAnimation && o.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: u, switchLayoutGroup: o } = this.props, { projection: c } = l;
    cc = !0, c && (c.scheduleCheckAfterUnmount(), u && u.group && u.group.remove(c), o && o.deregister && o.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function w0(i) {
  const [l, u] = x0(), o = Z.useContext(wc);
  return nt.jsx(t2, { ...i, layoutGroup: o, switchLayoutGroup: Z.useContext(U0), isPresent: l, safeToRemove: u });
}
const e2 = {
  pan: {
    Feature: IE
  },
  drag: {
    Feature: $E,
    ProjectionNode: M0,
    MeasureLayout: w0
  }
};
function Ky(i, l, u) {
  const { props: o } = i;
  i.animationState && o.whileHover && i.animationState.setActive("whileHover", u === "Start");
  const c = "onHover" + u, d = o[c];
  d && Ot.postRender(() => d(l, Ul(l)));
}
class n2 extends $n {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = Db(l, (u, o) => (Ky(this.node, o, "Start"), (c) => Ky(this.node, c, "End"))));
  }
  unmount() {
  }
}
class i2 extends $n {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Ol(Rl(this.node.current, "focus", () => this.onFocus()), Rl(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Qy(i, l, u) {
  const { props: o } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled)
    return;
  i.animationState && o.whileTap && i.animationState.setActive("whileTap", u === "Start");
  const c = "onTap" + (u === "End" ? "" : u), d = o[c];
  d && Ot.postRender(() => d(l, Ul(l)));
}
class a2 extends $n {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: u, propagate: o } = this.node.props;
    this.unmount = _b(l, (c, d) => (Qy(this.node, d, "Start"), (h, { success: p }) => Qy(this.node, h, p ? "End" : "Cancel")), {
      useGlobalTarget: u,
      stopPropagation: o?.tap === !1
    });
  }
  unmount() {
  }
}
const jc = /* @__PURE__ */ new WeakMap(), fc = /* @__PURE__ */ new WeakMap(), l2 = (i) => {
  const l = jc.get(i.target);
  l && l(i);
}, s2 = (i) => {
  i.forEach(l2);
};
function u2({ root: i, ...l }) {
  const u = i || document;
  fc.has(u) || fc.set(u, {});
  const o = fc.get(u), c = JSON.stringify(l);
  return o[c] || (o[c] = new IntersectionObserver(s2, { root: i, ...l })), o[c];
}
function o2(i, l, u) {
  const o = u2(l);
  return jc.set(i, u), o.observe(i), () => {
    jc.delete(i), o.unobserve(i);
  };
}
const r2 = {
  some: 0,
  all: 1
};
class c2 extends $n {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: l = {} } = this.node.getProps(), { root: u, margin: o, amount: c = "some", once: d } = l, h = {
      root: u ? u.current : void 0,
      rootMargin: o,
      threshold: typeof c == "number" ? c : r2[c]
    }, p = (g) => {
      const { isIntersecting: m } = g;
      if (this.isInView === m || (this.isInView = m, d && !m && this.hasEnteredView))
        return;
      m && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", m);
      const { onViewportEnter: v, onViewportLeave: S } = this.node.getProps(), b = m ? v : S;
      b && b(g);
    };
    this.stopObserver = o2(this.node.current, h, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: u } = this.node;
    ["amount", "margin", "root"].some(f2(l, u)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function f2({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (u) => i[u] !== l[u];
}
const h2 = {
  inView: {
    Feature: c2
  },
  tap: {
    Feature: a2
  },
  focus: {
    Feature: i2
  },
  hover: {
    Feature: n2
  }
}, d2 = {
  layout: {
    ProjectionNode: M0,
    MeasureLayout: w0
  }
}, m2 = {
  ...LE,
  ...h2,
  ...e2,
  ...d2
}, p2 = /* @__PURE__ */ _E(m2, UE);
function y2(i, l, u) {
  Z.useInsertionEffect(() => i.on(l, u), [i, l, u]);
}
function g2(i) {
  const l = zl(() => Pn(i)), { isStatic: u } = Z.useContext(va);
  if (u) {
    const [, o] = Z.useState(i);
    Z.useEffect(() => l.on("change", o), []);
  }
  return l;
}
function gf() {
  !hf.current && Pg();
  const [i] = Z.useState(yu.current);
  return i;
}
function vf(i) {
  return typeof i == "object" && !Array.isArray(i);
}
function H0(i, l, u, o) {
  return i == null ? [] : typeof i == "string" && vf(l) ? uf(i, u, o) : i instanceof NodeList ? Array.from(i) : Array.isArray(i) ? i.filter((c) => c != null) : [i];
}
function v2(i, l, u) {
  return i * (l + 1) + u * l;
}
function Zy(i, l, u, o) {
  return typeof l == "number" ? l : l.startsWith("-") || l.startsWith("+") ? Math.max(0, i + parseFloat(l)) : l === "<" ? u : l.startsWith("<") ? Math.max(0, u + parseFloat(l.slice(1))) : o.get(l) ?? i;
}
function S2(i, l, u) {
  for (let o = 0; o < i.length; o++) {
    const c = i[o];
    c.at > l && c.at < u && (pa(i, c), o--);
  }
}
function T2(i, l, u, o, c, d) {
  S2(i, c, d);
  for (let h = 0; h < l.length; h++)
    i.push({
      value: l[h],
      at: Rt(c, d, o[h]),
      easing: /* @__PURE__ */ cg(u, h)
    });
}
function b2(i, l, u = 0) {
  const o = l + 1 + l * u;
  for (let c = 0; c < i.length; c++)
    i[c] = i[c] / o;
}
function A2(i, l) {
  return i.at === l.at ? i.value === null ? 1 : l.value === null ? -1 : 0 : i.at - l.at;
}
const E2 = "easeInOut", M2 = 20;
function x2(i, { defaultTransition: l = {}, ...u } = {}, o, c) {
  const d = l.duration || 0.3, h = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), g = {}, m = /* @__PURE__ */ new Map();
  let v = 0, S = 0, b = 0;
  for (let V = 0; V < i.length; V++) {
    const C = i[V];
    if (typeof C == "string") {
      m.set(C, S);
      continue;
    } else if (!Array.isArray(C)) {
      m.set(C.name, Zy(S, C.at, v, m));
      continue;
    }
    let [U, j, w = {}] = C;
    w.at !== void 0 && (S = Zy(S, w.at, v, m));
    let q = 0;
    const H = (Y, tt, et, X = 0, J = 0) => {
      const k = D2(Y), { delay: $ = 0, times: st = xg(k), type: pt = l.type || "keyframes", repeat: Lt, repeatType: Ut, repeatDelay: Bt = 0, ...O } = tt;
      let { ease: G = l.ease || "easeOut", duration: K } = tt;
      const ut = typeof $ == "function" ? $(X, J) : $, ht = k.length, A = $c(pt) ? pt : c?.[pt || "keyframes"];
      if (ht <= 2 && A) {
        let lt = 100;
        if (ht === 2 && z2(k)) {
          const qt = k[1] - k[0];
          lt = Math.abs(qt);
        }
        const ot = {
          ...l,
          ...O
        };
        K !== void 0 && (ot.duration = /* @__PURE__ */ ge(K));
        const vt = Ag(ot, lt, A);
        G = vt.ease, K = vt.duration;
      }
      K ?? (K = d);
      const N = S + ut;
      st.length === 1 && st[0] === 0 && (st[1] = 1);
      const Q = st.length - k.length;
      if (Q > 0 && Mg(st, Q), k.length === 1 && k.unshift(null), Lt && Lt < M2) {
        const lt = K > 0 ? Bt / K : 0;
        K = v2(K, Lt, Bt);
        const ot = [...k], vt = [...st];
        G = Array.isArray(G) ? [...G] : [G];
        const qt = [...G], Nt = Ut === "reverse" || Ut === "mirror";
        let An = ot, In = qt;
        Nt && (An = [...ot].reverse(), Ut === "reverse" && (In = [...qt].reverse().map((Re) => typeof Re == "function" ? /* @__PURE__ */ Gc(Re) : Re)));
        for (let Re = 0; Re < Lt; Re++) {
          const Aa = Nt && Re % 2 === 0, Je = Aa ? An : ot, Ea = Aa ? In : qt, Di = (Re + 1) * (1 + lt);
          lt > 0 && (k.push(k[k.length - 1]), st.push(Di), G.push("linear")), k.push(...Je);
          for (let ti = 0; ti < Je.length; ti++)
            st.push(vt[ti] + Di), G.push(ti === 0 ? "linear" : /* @__PURE__ */ cg(Ea, ti - 1));
        }
        b2(st, Lt, lt);
      }
      const F = N + K;
      T2(et, k, G, st, N, F), q = Math.max(ut + K, q), b = Math.max(F, b);
    };
    if (Pt(U)) {
      const Y = Jy(U, p);
      H(j, w, ky("default", Y));
    } else {
      const Y = H0(U, j, o, g), tt = Y.length;
      for (let et = 0; et < tt; et++) {
        j = j, w = w;
        const X = Y[et], J = Jy(X, p);
        for (const k in j)
          H(j[k], C2(w, k), ky(k, J), et, tt);
      }
    }
    v = S, S += q;
  }
  return p.forEach((V, C) => {
    for (const U in V) {
      const j = V[U];
      j.sort(A2);
      const w = [], q = [], H = [];
      for (let X = 0; X < j.length; X++) {
        const { at: J, value: k, easing: $ } = j[X];
        w.push(k), q.push(/* @__PURE__ */ ya(0, b, J)), H.push($ || "easeOut");
      }
      q[0] !== 0 && (q.unshift(0), w.unshift(w[0]), H.unshift(E2)), q[q.length - 1] !== 1 && (q.push(1), w.push(null)), h.has(C) || h.set(C, {
        keyframes: {},
        transition: {}
      });
      const Y = h.get(C);
      Y.keyframes[U] = w;
      const { type: tt, ...et } = l;
      Y.transition[U] = {
        ...et,
        duration: b,
        ease: H,
        times: q,
        ...u
      };
    }
  }), h;
}
function Jy(i, l) {
  return !l.has(i) && l.set(i, {}), l.get(i);
}
function ky(i, l) {
  return l[i] || (l[i] = []), l[i];
}
function D2(i) {
  return Array.isArray(i) ? i : [i];
}
function C2(i, l) {
  return i && i[l] ? {
    ...i,
    ...i[l]
  } : { ...i };
}
const R2 = (i) => typeof i == "number", z2 = (i) => i.every(R2);
function O2(i) {
  const l = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        transform: {},
        transformOrigin: {},
        style: {},
        vars: {},
        attrs: {}
      },
      latestValues: {}
    }
  }, u = Mu(i) && !Fg(i) ? new h0(l) : new u0(l);
  u.mount(i), Dl.set(i, u);
}
function V2(i) {
  const l = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, u = new aA(l);
  u.mount(i), Dl.set(i, u);
}
function _2(i, l) {
  return Pt(i) || typeof i == "number" || typeof i == "string" && !vf(l);
}
function Y0(i, l, u, o) {
  const c = [];
  if (_2(i, l))
    c.push(T0(i, vf(l) && l.default || l, u && (u.default || u)));
  else {
    if (i == null)
      return c;
    const d = H0(i, l, o), h = d.length;
    for (let p = 0; p < h; p++) {
      const g = d[p], m = g instanceof Element ? O2 : V2;
      Dl.has(g) || m(g);
      const v = Dl.get(g), S = { ...u };
      "delay" in S && typeof S.delay == "function" && (S.delay = S.delay(p, h)), c.push(...lf(v, { ...l, transition: S }, {}));
    }
  }
  return c;
}
function U2(i, l, u) {
  const o = [], c = i.map((h) => {
    if (Array.isArray(h) && typeof h[0] == "function") {
      const p = h[0], g = Pn(0);
      return g.on("change", p), h.length === 1 ? [g, [0, 1]] : h.length === 2 ? [g, [0, 1], h[1]] : [g, h[1], h[2]];
    }
    return h;
  });
  return x2(c, l, u, { spring: xl }).forEach(({ keyframes: h, transition: p }, g) => {
    o.push(...Y0(g, h, p));
  }), o;
}
function B2(i) {
  return Array.isArray(i) && i.some(Array.isArray);
}
function N2(i = {}) {
  const { scope: l, reduceMotion: u, skipAnimations: o } = i;
  function c(d, h, p) {
    let g = [], m;
    const v = {};
    if (u !== void 0 && (v.reduceMotion = u), o !== void 0 && (v.skipAnimations = o), B2(d)) {
      const { onComplete: b, ...V } = h || {};
      typeof b == "function" && (m = b), g = U2(d, { ...v, ...V }, l);
    } else {
      const { onComplete: b, ...V } = p || {};
      typeof b == "function" && (m = b), g = Y0(d, h, { ...v, ...V }, l);
    }
    const S = new JT(g);
    return m && S.finished.then(m), l && (l.animations.push(S), S.finished.then(() => {
      pa(l.animations, S);
    })), S;
  }
  return c;
}
const j2 = N2(), bi = p2;
function q0({
  value: i,
  digits: l = 0,
  suffix: u = ""
}) {
  const o = gf(), c = g2(o ? i : 0), [d, h] = Ep.useState(o ? i : 0);
  return y2(c, "change", h), Ep.useEffect(() => {
    if (o) {
      c.jump(i), h(i);
      return;
    }
    const p = j2(c, i, {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1]
    });
    return () => p.stop();
  }, [c, o, i]), /* @__PURE__ */ nt.jsxs(nt.Fragment, { children: [
    /* @__PURE__ */ nt.jsxs("span", { "aria-hidden": "true", children: [
      d.toFixed(l),
      u
    ] }),
    /* @__PURE__ */ nt.jsxs("span", { className: "ll-sr-only", children: [
      i.toFixed(l),
      u
    ] })
  ] });
}
function L2({
  value: i,
  tone: l
}) {
  const u = gf(), o = Math.max(0, Math.min(i / 100, 1));
  return /* @__PURE__ */ nt.jsxs(
    "div",
    {
      className: `ll-ring ll-ring--${l}`,
      role: "progressbar",
      "aria-label": "Evaluation reliability",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": i,
      children: [
        /* @__PURE__ */ nt.jsxs("svg", { viewBox: "0 0 220 220", "aria-hidden": "true", children: [
          /* @__PURE__ */ nt.jsx("circle", { className: "ll-ring-track", cx: "110", cy: "110", r: "88" }),
          /* @__PURE__ */ nt.jsx(
            bi.circle,
            {
              className: "ll-ring-value",
              cx: "110",
              cy: "110",
              r: "88",
              pathLength: 1,
              initial: { pathLength: u ? o : 0 },
              animate: { pathLength: o },
              transition: { duration: u ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }
            }
          )
        ] }),
        /* @__PURE__ */ nt.jsxs("div", { className: "ll-ring-copy", children: [
          /* @__PURE__ */ nt.jsx("strong", { children: /* @__PURE__ */ nt.jsx(q0, { value: i }) }),
          /* @__PURE__ */ nt.jsx("span", { children: "/ 100" })
        ] })
      ]
    }
  );
}
function nu({
  label: i,
  value: l,
  note: u,
  digits: o = 3,
  suffix: c = "",
  tone: d
}) {
  return /* @__PURE__ */ nt.jsxs(
    bi.article,
    {
      className: `ll-card${d ? ` ll-card--${d}` : ""}`,
      variants: {
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0 }
      },
      layout: "position",
      children: [
        /* @__PURE__ */ nt.jsx("span", { className: "ll-card-label", children: i }),
        /* @__PURE__ */ nt.jsx("strong", { children: /* @__PURE__ */ nt.jsx(q0, { value: l, digits: o, suffix: c }) }),
        /* @__PURE__ */ nt.jsx("small", { children: u })
      ]
    }
  );
}
function w2({ data: i }) {
  const l = gf(), u = i.fallback ? "Split infeasible" : i.reliability >= 80 ? "Defensible" : i.reliability >= 60 ? "Review required" : "Compromised", o = i.fallback ? "review" : i.reliability >= 80 ? "safe" : i.reliability >= 60 ? "review" : "critical", c = i.fallback ? "Conservative baseline" : "Trusted ROC-AUC", d = i.fallback ? "Duplicate-safe holdout unavailable" : "After defensible controls", h = i.fallback ? "Naive-to-baseline gap" : "Exposed AUC gap", p = i.fallback ? "Not a trustworthy inflation estimate" : "Performance that did not survive", g = [
    i.reliability,
    i.naiveAuc,
    i.comparisonAuc,
    i.findingCount,
    Number(i.fallback)
  ].join("-"), m = {
    hidden: {},
    show: {
      transition: {
        delayChildren: l ? 0 : Gb(0.055, { startDelay: 0.06 })
      }
    }
  };
  return /* @__PURE__ */ nt.jsx(
    hE,
    {
      reducedMotion: "user",
      transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
      children: /* @__PURE__ */ nt.jsx(uE, { mode: "wait", children: /* @__PURE__ */ nt.jsxs(
        bi.section,
        {
          className: "ll-shell",
          "aria-label": "Audit result summary",
          initial: { opacity: 0, y: l ? 0 : 8 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: l ? 0 : -4 },
          children: [
            /* @__PURE__ */ nt.jsxs("div", { className: "ll-summary-grid", children: [
              /* @__PURE__ */ nt.jsxs(
                bi.article,
                {
                  className: `ll-score-card ll-score-card--${o}`,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  children: [
                    /* @__PURE__ */ nt.jsxs("div", { className: "ll-score-head", children: [
                      /* @__PURE__ */ nt.jsx("span", { children: "Reliability score" }),
                      /* @__PURE__ */ nt.jsx("span", { className: `ll-status ll-status--${o}`, children: u })
                    ] }),
                    /* @__PURE__ */ nt.jsx(L2, { value: i.reliability, tone: o }),
                    /* @__PURE__ */ nt.jsx("p", { children: i.fallback ? "No duplicate-safe model holdout can be formed. Treat the comparison as a conservative reference." : i.reliability >= 80 ? "The configured evaluation survived LeakLens's integrity checks." : "The headline score did not survive the configured integrity controls." })
                  ]
                }
              ),
              /* @__PURE__ */ nt.jsxs(
                bi.div,
                {
                  className: "ll-metrics",
                  variants: m,
                  initial: "hidden",
                  animate: "show",
                  children: [
                    /* @__PURE__ */ nt.jsx(
                      nu,
                      {
                        label: "Naive ROC-AUC",
                        value: i.naiveAuc,
                        note: "Unfiltered evaluation metric"
                      }
                    ),
                    /* @__PURE__ */ nt.jsx(
                      nu,
                      {
                        label: c,
                        value: i.comparisonAuc,
                        note: d,
                        tone: o === "critical" ? "critical" : void 0
                      }
                    ),
                    /* @__PURE__ */ nt.jsx(
                      nu,
                      {
                        label: h,
                        value: i.comparisonGap,
                        note: p,
                        tone: i.comparisonGap > 0.1 ? "critical" : void 0
                      }
                    ),
                    /* @__PURE__ */ nt.jsx(
                      nu,
                      {
                        label: "Findings",
                        value: i.findingCount,
                        digits: 0,
                        note: `${i.findingCount} detector${i.findingCount === 1 ? "" : "s"} triggered`,
                        tone: i.findingCount > 0 ? o : "safe"
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ nt.jsxs(
              bi.section,
              {
                className: "ll-journey",
                initial: { opacity: 0, y: l ? 0 : 8 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: l ? 0 : 0.18 },
                children: [
                  /* @__PURE__ */ nt.jsxs("div", { className: "ll-journey-head", children: [
                    /* @__PURE__ */ nt.jsxs("div", { children: [
                      /* @__PURE__ */ nt.jsx("span", { children: "Evaluation score survival" }),
                      /* @__PURE__ */ nt.jsx("small", { children: "ROC-AUC after each forensic control" })
                    ] }),
                    /* @__PURE__ */ nt.jsx("span", { className: `ll-status ll-status--${o}`, children: u })
                  ] }),
                  /* @__PURE__ */ nt.jsx("div", { className: "ll-stage-list", children: i.stages.map((v, S) => /* @__PURE__ */ nt.jsxs("div", { className: "ll-stage", children: [
                    /* @__PURE__ */ nt.jsxs("div", { className: "ll-stage-meta", children: [
                      /* @__PURE__ */ nt.jsx("span", { children: v.label }),
                      /* @__PURE__ */ nt.jsx("b", { children: v.value.toFixed(3) })
                    ] }),
                    /* @__PURE__ */ nt.jsx(
                      "div",
                      {
                        className: "ll-track",
                        role: "progressbar",
                        "aria-label": `${v.label} ROC-AUC`,
                        "aria-valuemin": 0,
                        "aria-valuemax": 1,
                        "aria-valuenow": v.value,
                        children: /* @__PURE__ */ nt.jsx(
                          bi.div,
                          {
                            initial: { scaleX: l ? v.value : 0 },
                            animate: { scaleX: v.value },
                            transition: {
                              duration: l ? 0 : 0.65,
                              delay: l ? 0 : 0.22 + S * 0.08,
                              ease: [0.22, 1, 0.36, 1]
                            }
                          }
                        )
                      }
                    )
                  ] }, `${v.label}-${S}`)) })
                ]
              }
            )
          ]
        },
        g
      ) })
    }
  );
}
const Fy = /* @__PURE__ */ new WeakMap(), Y2 = ({
  data: i,
  parentElement: l
}) => {
  let u = Fy.get(l);
  if (!u) {
    const o = document.createElement("div");
    o.className = "ll-root", l.appendChild(o), u = { container: o, root: TS.createRoot(o) }, Fy.set(l, u);
  }
  u.root.render(/* @__PURE__ */ nt.jsx(w2, { data: i }));
};
export {
  Y2 as default
};
