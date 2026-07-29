function nS(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Lr = { exports: {} }, ml = {};
var ry;
function iS() {
  if (ry) return ml;
  ry = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.fragment");
  function u(o, c, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      d = {};
      for (var y in c)
        y !== "key" && (d[y] = c[y]);
    } else d = c;
    return c = d.ref, {
      $$typeof: i,
      type: o,
      key: h,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return ml.Fragment = l, ml.jsx = u, ml.jsxs = u, ml;
}
var cy;
function aS() {
  return cy || (cy = 1, Lr.exports = iS()), Lr.exports;
}
var At = aS(), wr = { exports: {} }, ut = {};
var fy;
function lS() {
  if (fy) return ut;
  fy = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), y = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), m = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), S = /* @__PURE__ */ Symbol.for("react.activity"), A = Symbol.iterator;
  function _(b) {
    return b === null || typeof b != "object" ? null : (b = A && b[A] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var z = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, j = Object.assign, w = {};
  function L(b, B, Q) {
    this.props = b, this.context = B, this.refs = w, this.updater = Q || z;
  }
  L.prototype.isReactComponent = {}, L.prototype.setState = function(b, B) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, b, B, "setState");
  }, L.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function Y() {
  }
  Y.prototype = L.prototype;
  function H(b, B, Q) {
    this.props = b, this.context = B, this.refs = w, this.updater = Q || z;
  }
  var G = H.prototype = new Y();
  G.constructor = H, j(G, L.prototype), G.isPureReactComponent = !0;
  var $ = Array.isArray;
  function at() {
  }
  var Z = { H: null, A: null, T: null, S: null }, F = Object.prototype.hasOwnProperty;
  function nt(b, B, Q) {
    var K = Q.ref;
    return {
      $$typeof: i,
      type: b,
      key: B,
      ref: K !== void 0 ? K : null,
      props: Q
    };
  }
  function P(b, B) {
    return nt(b.type, B, b.props);
  }
  function ot(b) {
    return typeof b == "object" && b !== null && b.$$typeof === i;
  }
  function vt(b) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(Q) {
      return B[Q];
    });
  }
  var Yt = /\/+/g;
  function Ut(b, B) {
    return typeof b == "object" && b !== null && b.key != null ? vt("" + b.key) : B.toString(36);
  }
  function Bt(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (typeof b.status == "string" ? b.then(at, at) : (b.status = "pending", b.then(
          function(B) {
            b.status === "pending" && (b.status = "fulfilled", b.value = B);
          },
          function(B) {
            b.status === "pending" && (b.status = "rejected", b.reason = B);
          }
        )), b.status) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
    }
    throw b;
  }
  function R(b, B, Q, K, it) {
    var st = typeof b;
    (st === "undefined" || st === "boolean") && (b = null);
    var pt = !1;
    if (b === null) pt = !0;
    else
      switch (st) {
        case "bigint":
        case "string":
        case "number":
          pt = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case i:
            case l:
              pt = !0;
              break;
            case v:
              return pt = b._init, R(
                pt(b._payload),
                B,
                Q,
                K,
                it
              );
          }
      }
    if (pt)
      return it = it(b), pt = K === "" ? "." + Ut(b, 0) : K, $(it) ? (Q = "", pt != null && (Q = pt.replace(Yt, "$&/") + "/"), R(it, B, Q, "", function(An) {
        return An;
      })) : it != null && (ot(it) && (it = P(
        it,
        Q + (it.key == null || b && b.key === it.key ? "" : ("" + it.key).replace(
          Yt,
          "$&/"
        ) + "/") + pt
      )), B.push(it)), 1;
    pt = 0;
    var qt = K === "" ? "." : K + ":";
    if ($(b))
      for (var Nt = 0; Nt < b.length; Nt++)
        K = b[Nt], st = qt + Ut(K, Nt), pt += R(
          K,
          B,
          Q,
          st,
          it
        );
    else if (Nt = _(b), typeof Nt == "function")
      for (b = Nt.call(b), Nt = 0; !(K = b.next()).done; )
        K = K.value, st = qt + Ut(K, Nt++), pt += R(
          K,
          B,
          Q,
          st,
          it
        );
    else if (st === "object") {
      if (typeof b.then == "function")
        return R(
          Bt(b),
          B,
          Q,
          K,
          it
        );
      throw B = String(b), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return pt;
  }
  function q(b, B, Q) {
    if (b == null) return b;
    var K = [], it = 0;
    return R(b, K, "", "", function(st) {
      return B.call(Q, st, it++);
    }), K;
  }
  function X(b) {
    if (b._status === -1) {
      var B = b._result;
      B = B(), B.then(
        function(Q) {
          (b._status === 0 || b._status === -1) && (b._status = 1, b._result = Q);
        },
        function(Q) {
          (b._status === 0 || b._status === -1) && (b._status = 2, b._result = Q);
        }
      ), b._status === -1 && (b._status = 0, b._result = B);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var lt = typeof reportError == "function" ? reportError : function(b) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
        error: b
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", b);
      return;
    }
    console.error(b);
  }, ft = {
    map: q,
    forEach: function(b, B, Q) {
      q(
        b,
        function() {
          B.apply(this, arguments);
        },
        Q
      );
    },
    count: function(b) {
      var B = 0;
      return q(b, function() {
        B++;
      }), B;
    },
    toArray: function(b) {
      return q(b, function(B) {
        return B;
      }) || [];
    },
    only: function(b) {
      if (!ot(b))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return b;
    }
  };
  return ut.Activity = S, ut.Children = ft, ut.Component = L, ut.Fragment = u, ut.Profiler = c, ut.PureComponent = H, ut.StrictMode = o, ut.Suspense = g, ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z, ut.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(b) {
      return Z.H.useMemoCache(b);
    }
  }, ut.cache = function(b) {
    return function() {
      return b.apply(null, arguments);
    };
  }, ut.cacheSignal = function() {
    return null;
  }, ut.cloneElement = function(b, B, Q) {
    if (b == null)
      throw Error(
        "The argument must be a React element, but you passed " + b + "."
      );
    var K = j({}, b.props), it = b.key;
    if (B != null)
      for (st in B.key !== void 0 && (it = "" + B.key), B)
        !F.call(B, st) || st === "key" || st === "__self" || st === "__source" || st === "ref" && B.ref === void 0 || (K[st] = B[st]);
    var st = arguments.length - 2;
    if (st === 1) K.children = Q;
    else if (1 < st) {
      for (var pt = Array(st), qt = 0; qt < st; qt++)
        pt[qt] = arguments[qt + 2];
      K.children = pt;
    }
    return nt(b.type, it, K);
  }, ut.createContext = function(b) {
    return b = {
      $$typeof: h,
      _currentValue: b,
      _currentValue2: b,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, b.Provider = b, b.Consumer = {
      $$typeof: d,
      _context: b
    }, b;
  }, ut.createElement = function(b, B, Q) {
    var K, it = {}, st = null;
    if (B != null)
      for (K in B.key !== void 0 && (st = "" + B.key), B)
        F.call(B, K) && K !== "key" && K !== "__self" && K !== "__source" && (it[K] = B[K]);
    var pt = arguments.length - 2;
    if (pt === 1) it.children = Q;
    else if (1 < pt) {
      for (var qt = Array(pt), Nt = 0; Nt < pt; Nt++)
        qt[Nt] = arguments[Nt + 2];
      it.children = qt;
    }
    if (b && b.defaultProps)
      for (K in pt = b.defaultProps, pt)
        it[K] === void 0 && (it[K] = pt[K]);
    return nt(b, st, it);
  }, ut.createRef = function() {
    return { current: null };
  }, ut.forwardRef = function(b) {
    return { $$typeof: y, render: b };
  }, ut.isValidElement = ot, ut.lazy = function(b) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: b },
      _init: X
    };
  }, ut.memo = function(b, B) {
    return {
      $$typeof: m,
      type: b,
      compare: B === void 0 ? null : B
    };
  }, ut.startTransition = function(b) {
    var B = Z.T, Q = {};
    Z.T = Q;
    try {
      var K = b(), it = Z.S;
      it !== null && it(Q, K), typeof K == "object" && K !== null && typeof K.then == "function" && K.then(at, lt);
    } catch (st) {
      lt(st);
    } finally {
      B !== null && Q.types !== null && (B.types = Q.types), Z.T = B;
    }
  }, ut.unstable_useCacheRefresh = function() {
    return Z.H.useCacheRefresh();
  }, ut.use = function(b) {
    return Z.H.use(b);
  }, ut.useActionState = function(b, B, Q) {
    return Z.H.useActionState(b, B, Q);
  }, ut.useCallback = function(b, B) {
    return Z.H.useCallback(b, B);
  }, ut.useContext = function(b) {
    return Z.H.useContext(b);
  }, ut.useDebugValue = function() {
  }, ut.useDeferredValue = function(b, B) {
    return Z.H.useDeferredValue(b, B);
  }, ut.useEffect = function(b, B) {
    return Z.H.useEffect(b, B);
  }, ut.useEffectEvent = function(b) {
    return Z.H.useEffectEvent(b);
  }, ut.useId = function() {
    return Z.H.useId();
  }, ut.useImperativeHandle = function(b, B, Q) {
    return Z.H.useImperativeHandle(b, B, Q);
  }, ut.useInsertionEffect = function(b, B) {
    return Z.H.useInsertionEffect(b, B);
  }, ut.useLayoutEffect = function(b, B) {
    return Z.H.useLayoutEffect(b, B);
  }, ut.useMemo = function(b, B) {
    return Z.H.useMemo(b, B);
  }, ut.useOptimistic = function(b, B) {
    return Z.H.useOptimistic(b, B);
  }, ut.useReducer = function(b, B, Q) {
    return Z.H.useReducer(b, B, Q);
  }, ut.useRef = function(b) {
    return Z.H.useRef(b);
  }, ut.useState = function(b) {
    return Z.H.useState(b);
  }, ut.useSyncExternalStore = function(b, B, Q) {
    return Z.H.useSyncExternalStore(
      b,
      B,
      Q
    );
  }, ut.useTransition = function() {
    return Z.H.useTransition();
  }, ut.version = "19.2.8", ut;
}
var hy;
function Oc() {
  return hy || (hy = 1, wr.exports = lS()), wr.exports;
}
var et = Oc();
const dy = /* @__PURE__ */ nS(et);
var Hr = { exports: {} }, yl = {}, Yr = { exports: {} }, qr = {};
var my;
function sS() {
  return my || (my = 1, (function(i) {
    function l(R, q) {
      var X = R.length;
      R.push(q);
      t: for (; 0 < X; ) {
        var lt = X - 1 >>> 1, ft = R[lt];
        if (0 < c(ft, q))
          R[lt] = q, R[X] = ft, X = lt;
        else break t;
      }
    }
    function u(R) {
      return R.length === 0 ? null : R[0];
    }
    function o(R) {
      if (R.length === 0) return null;
      var q = R[0], X = R.pop();
      if (X !== q) {
        R[0] = X;
        t: for (var lt = 0, ft = R.length, b = ft >>> 1; lt < b; ) {
          var B = 2 * (lt + 1) - 1, Q = R[B], K = B + 1, it = R[K];
          if (0 > c(Q, X))
            K < ft && 0 > c(it, Q) ? (R[lt] = it, R[K] = X, lt = K) : (R[lt] = Q, R[B] = X, lt = B);
          else if (K < ft && 0 > c(it, X))
            R[lt] = it, R[K] = X, lt = K;
          else break t;
        }
      }
      return q;
    }
    function c(R, q) {
      var X = R.sortIndex - q.sortIndex;
      return X !== 0 ? X : R.id - q.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      i.unstable_now = function() {
        return d.now();
      };
    } else {
      var h = Date, y = h.now();
      i.unstable_now = function() {
        return h.now() - y;
      };
    }
    var g = [], m = [], v = 1, S = null, A = 3, _ = !1, z = !1, j = !1, w = !1, L = typeof setTimeout == "function" ? setTimeout : null, Y = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    function G(R) {
      for (var q = u(m); q !== null; ) {
        if (q.callback === null) o(m);
        else if (q.startTime <= R)
          o(m), q.sortIndex = q.expirationTime, l(g, q);
        else break;
        q = u(m);
      }
    }
    function $(R) {
      if (j = !1, G(R), !z)
        if (u(g) !== null)
          z = !0, at || (at = !0, vt());
        else {
          var q = u(m);
          q !== null && Bt($, q.startTime - R);
        }
    }
    var at = !1, Z = -1, F = 5, nt = -1;
    function P() {
      return w ? !0 : !(i.unstable_now() - nt < F);
    }
    function ot() {
      if (w = !1, at) {
        var R = i.unstable_now();
        nt = R;
        var q = !0;
        try {
          t: {
            z = !1, j && (j = !1, Y(Z), Z = -1), _ = !0;
            var X = A;
            try {
              e: {
                for (G(R), S = u(g); S !== null && !(S.expirationTime > R && P()); ) {
                  var lt = S.callback;
                  if (typeof lt == "function") {
                    S.callback = null, A = S.priorityLevel;
                    var ft = lt(
                      S.expirationTime <= R
                    );
                    if (R = i.unstable_now(), typeof ft == "function") {
                      S.callback = ft, G(R), q = !0;
                      break e;
                    }
                    S === u(g) && o(g), G(R);
                  } else o(g);
                  S = u(g);
                }
                if (S !== null) q = !0;
                else {
                  var b = u(m);
                  b !== null && Bt(
                    $,
                    b.startTime - R
                  ), q = !1;
                }
              }
              break t;
            } finally {
              S = null, A = X, _ = !1;
            }
            q = void 0;
          }
        } finally {
          q ? vt() : at = !1;
        }
      }
    }
    var vt;
    if (typeof H == "function")
      vt = function() {
        H(ot);
      };
    else if (typeof MessageChannel < "u") {
      var Yt = new MessageChannel(), Ut = Yt.port2;
      Yt.port1.onmessage = ot, vt = function() {
        Ut.postMessage(null);
      };
    } else
      vt = function() {
        L(ot, 0);
      };
    function Bt(R, q) {
      Z = L(function() {
        R(i.unstable_now());
      }, q);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, i.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : F = 0 < R ? Math.floor(1e3 / R) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, i.unstable_next = function(R) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = A;
      }
      var X = A;
      A = q;
      try {
        return R();
      } finally {
        A = X;
      }
    }, i.unstable_requestPaint = function() {
      w = !0;
    }, i.unstable_runWithPriority = function(R, q) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var X = A;
      A = R;
      try {
        return q();
      } finally {
        A = X;
      }
    }, i.unstable_scheduleCallback = function(R, q, X) {
      var lt = i.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? lt + X : lt) : X = lt, R) {
        case 1:
          var ft = -1;
          break;
        case 2:
          ft = 250;
          break;
        case 5:
          ft = 1073741823;
          break;
        case 4:
          ft = 1e4;
          break;
        default:
          ft = 5e3;
      }
      return ft = X + ft, R = {
        id: v++,
        callback: q,
        priorityLevel: R,
        startTime: X,
        expirationTime: ft,
        sortIndex: -1
      }, X > lt ? (R.sortIndex = X, l(m, R), u(g) === null && R === u(m) && (j ? (Y(Z), Z = -1) : j = !0, Bt($, X - lt))) : (R.sortIndex = ft, l(g, R), z || _ || (z = !0, at || (at = !0, vt()))), R;
    }, i.unstable_shouldYield = P, i.unstable_wrapCallback = function(R) {
      var q = A;
      return function() {
        var X = A;
        A = q;
        try {
          return R.apply(this, arguments);
        } finally {
          A = X;
        }
      };
    };
  })(qr)), qr;
}
var yy;
function uS() {
  return yy || (yy = 1, Yr.exports = sS()), Yr.exports;
}
var Gr = { exports: {} }, se = {};
var py;
function oS() {
  if (py) return se;
  py = 1;
  var i = Oc();
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
  function y(g, m) {
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
      var v = m.as, S = y(v, m.crossOrigin), A = typeof m.integrity == "string" ? m.integrity : void 0, _ = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      v === "style" ? o.d.S(
        g,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: S,
          integrity: A,
          fetchPriority: _
        }
      ) : v === "script" && o.d.X(g, {
        crossOrigin: S,
        integrity: A,
        fetchPriority: _,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, se.preinitModule = function(g, m) {
    if (typeof g == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var v = y(
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
      var v = m.as, S = y(v, m.crossOrigin);
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
        var v = y(m.as, m.crossOrigin);
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
var gy;
function rS() {
  if (gy) return Gr.exports;
  gy = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), Gr.exports = oS(), Gr.exports;
}
var vy;
function cS() {
  if (vy) return yl;
  vy = 1;
  var i = uS(), l = Oc(), u = rS();
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
  function y(t) {
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
        for (var f = !1, p = s.child; p; ) {
          if (p === n) {
            f = !0, n = s, a = r;
            break;
          }
          if (p === a) {
            f = !0, a = s, n = r;
            break;
          }
          p = p.sibling;
        }
        if (!f) {
          for (p = r.child; p; ) {
            if (p === n) {
              f = !0, n = r, a = s;
              break;
            }
            if (p === a) {
              f = !0, a = r, n = s;
              break;
            }
            p = p.sibling;
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
  var S = Object.assign, A = /* @__PURE__ */ Symbol.for("react.element"), _ = /* @__PURE__ */ Symbol.for("react.transitional.element"), z = /* @__PURE__ */ Symbol.for("react.portal"), j = /* @__PURE__ */ Symbol.for("react.fragment"), w = /* @__PURE__ */ Symbol.for("react.strict_mode"), L = /* @__PURE__ */ Symbol.for("react.profiler"), Y = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), $ = /* @__PURE__ */ Symbol.for("react.suspense"), at = /* @__PURE__ */ Symbol.for("react.suspense_list"), Z = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), nt = /* @__PURE__ */ Symbol.for("react.activity"), P = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ot = Symbol.iterator;
  function vt(t) {
    return t === null || typeof t != "object" ? null : (t = ot && t[ot] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Yt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ut(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Yt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case j:
        return "Fragment";
      case L:
        return "Profiler";
      case w:
        return "StrictMode";
      case $:
        return "Suspense";
      case at:
        return "SuspenseList";
      case nt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case z:
          return "Portal";
        case H:
          return t.displayName || "Context";
        case Y:
          return (t._context.displayName || "Context") + ".Consumer";
        case G:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case Z:
          return e = t.displayName || null, e !== null ? e : Ut(t.type) || "Memo";
        case F:
          e = t._payload, t = t._init;
          try {
            return Ut(t(e));
          } catch {
          }
      }
    return null;
  }
  var Bt = Array.isArray, R = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, lt = [], ft = -1;
  function b(t) {
    return { current: t };
  }
  function B(t) {
    0 > ft || (t.current = lt[ft], lt[ft] = null, ft--);
  }
  function Q(t, e) {
    ft++, lt[ft] = t.current, t.current = e;
  }
  var K = b(null), it = b(null), st = b(null), pt = b(null);
  function qt(t, e) {
    switch (Q(st, e), Q(it, t), Q(K, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? _m(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = _m(e), t = Um(e, t);
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
    B(K), Q(K, t);
  }
  function Nt() {
    B(K), B(it), B(st);
  }
  function An(t) {
    t.memoizedState !== null && Q(pt, t);
    var e = K.current, n = Um(e, t.type);
    e !== n && (Q(it, t), Q(K, n));
  }
  function In(t) {
    it.current === t && (B(K), B(it)), pt.current === t && (B(pt), cl._currentValue = X);
  }
  var ze, Ta;
  function Je(t) {
    if (ze === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ze = e && e[1] || "", Ta = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ze + t + Ta;
  }
  var ba = !1;
  function Di(t, e) {
    if (!t || ba) return "";
    ba = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var N = function() {
                throw Error();
              };
              if (Object.defineProperty(N.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(N, []);
                } catch (O) {
                  var C = O;
                }
                Reflect.construct(t, [], N);
              } else {
                try {
                  N.call();
                } catch (O) {
                  C = O;
                }
                t.call(N.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                C = O;
              }
              (N = t()) && typeof N.catch == "function" && N.catch(function() {
              });
            }
          } catch (O) {
            if (O && C && typeof O.stack == "string")
              return [O.stack, C.stack];
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
      var r = a.DetermineComponentFrameRoot(), f = r[0], p = r[1];
      if (f && p) {
        var T = f.split(`
`), x = p.split(`
`);
        for (s = a = 0; a < T.length && !T[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; s < x.length && !x[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (a === T.length || s === x.length)
          for (a = T.length - 1, s = x.length - 1; 1 <= a && 0 <= s && T[a] !== x[s]; )
            s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (T[a] !== x[s]) {
            if (a !== 1 || s !== 1)
              do
                if (a--, s--, 0 > s || T[a] !== x[s]) {
                  var V = `
` + T[a].replace(" at new ", " at ");
                  return t.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", t.displayName)), V;
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      ba = !1, Error.prepareStackTrace = n;
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
  function rf(t) {
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
  var bu = Object.prototype.hasOwnProperty, Au = i.unstable_scheduleCallback, Eu = i.unstable_cancelCallback, B0 = i.unstable_shouldYield, N0 = i.unstable_requestPaint, ve = i.unstable_now, j0 = i.unstable_getCurrentPriorityLevel, cf = i.unstable_ImmediatePriority, ff = i.unstable_UserBlockingPriority, Vl = i.unstable_NormalPriority, L0 = i.unstable_LowPriority, hf = i.unstable_IdlePriority, w0 = i.log, H0 = i.unstable_setDisableYieldValue, Aa = null, Se = null;
  function En(t) {
    if (typeof w0 == "function" && H0(t), Se && typeof Se.setStrictMode == "function")
      try {
        Se.setStrictMode(Aa, t);
      } catch {
      }
  }
  var Te = Math.clz32 ? Math.clz32 : G0, Y0 = Math.log, q0 = Math.LN2;
  function G0(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Y0(t) / q0 | 0) | 0;
  }
  var _l = 256, Ul = 262144, Bl = 4194304;
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
  function Nl(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var s = 0, r = t.suspendedLanes, f = t.pingedLanes;
    t = t.warmLanes;
    var p = a & 134217727;
    return p !== 0 ? (a = p & ~r, a !== 0 ? s = ei(a) : (f &= p, f !== 0 ? s = ei(f) : n || (n = p & ~t, n !== 0 && (s = ei(n))))) : (p = a & ~r, p !== 0 ? s = ei(p) : f !== 0 ? s = ei(f) : n || (n = a & ~t, n !== 0 && (s = ei(n)))), s === 0 ? 0 : e !== 0 && e !== s && (e & r) === 0 && (r = s & -s, n = e & -e, r >= n || r === 32 && (n & 4194048) !== 0) ? e : s;
  }
  function Ea(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function X0(t, e) {
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
  function df() {
    var t = Bl;
    return Bl <<= 1, (Bl & 62914560) === 0 && (Bl = 4194304), t;
  }
  function Mu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Ma(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Q0(t, e, n, a, s, r) {
    var f = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var p = t.entanglements, T = t.expirationTimes, x = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var V = 31 - Te(n), N = 1 << V;
      p[V] = 0, T[V] = -1;
      var C = x[V];
      if (C !== null)
        for (x[V] = null, V = 0; V < C.length; V++) {
          var O = C[V];
          O !== null && (O.lane &= -536870913);
        }
      n &= ~N;
    }
    a !== 0 && mf(t, a, 0), r !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(f & ~e));
  }
  function mf(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - Te(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
  }
  function yf(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - Te(n), s = 1 << a;
      s & e | t[a] & e && (t[a] |= e), n &= ~s;
    }
  }
  function pf(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : Du(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function Du(t) {
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
  function xu(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function gf() {
    var t = q.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : ny(t.type));
  }
  function vf(t, e) {
    var n = q.p;
    try {
      return q.p = t, e();
    } finally {
      q.p = n;
    }
  }
  var Mn = Math.random().toString(36).slice(2), te = "__reactFiber$" + Mn, ce = "__reactProps$" + Mn, xi = "__reactContainer$" + Mn, Cu = "__reactEvents$" + Mn, Z0 = "__reactListeners$" + Mn, K0 = "__reactHandles$" + Mn, Sf = "__reactResources$" + Mn, Da = "__reactMarker$" + Mn;
  function zu(t) {
    delete t[te], delete t[ce], delete t[Cu], delete t[Z0], delete t[K0];
  }
  function Ci(t) {
    var e = t[te];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[xi] || n[te]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = Ym(t); t !== null; ) {
            if (n = t[te]) return n;
            t = Ym(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function zi(t) {
    if (t = t[te] || t[xi]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function xa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Oi(t) {
    var e = t[Sf];
    return e || (e = t[Sf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function $t(t) {
    t[Da] = !0;
  }
  var Tf = /* @__PURE__ */ new Set(), bf = {};
  function ni(t, e) {
    Ri(t, e), Ri(t + "Capture", e);
  }
  function Ri(t, e) {
    for (bf[t] = e, t = 0; t < e.length; t++)
      Tf.add(e[t]);
  }
  var J0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Af = {}, Ef = {};
  function k0(t) {
    return bu.call(Ef, t) ? !0 : bu.call(Af, t) ? !1 : J0.test(t) ? Ef[t] = !0 : (Af[t] = !0, !1);
  }
  function jl(t, e, n) {
    if (k0(e))
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
  function Ll(t, e, n) {
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
  function Oe(t) {
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
  function Mf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function F0(t, e, n) {
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
  function Ou(t) {
    if (!t._valueTracker) {
      var e = Mf(t) ? "checked" : "value";
      t._valueTracker = F0(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Df(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), a = "";
    return t && (a = Mf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1;
  }
  function wl(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var W0 = /[\n"\\]/g;
  function Re(t) {
    return t.replace(
      W0,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ru(t, e, n, a, s, r, f, p) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Oe(e)) : t.value !== "" + Oe(e) && (t.value = "" + Oe(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? Vu(t, f, Oe(e)) : n != null ? Vu(t, f, Oe(n)) : a != null && t.removeAttribute("value"), s == null && r != null && (t.defaultChecked = !!r), s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? t.name = "" + Oe(p) : t.removeAttribute("name");
  }
  function xf(t, e, n, a, s, r, f, p) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.type = r), e != null || n != null) {
      if (!(r !== "submit" && r !== "reset" || e != null)) {
        Ou(t);
        return;
      }
      n = n != null ? "" + Oe(n) : "", e = e != null ? "" + Oe(e) : n, p || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? s, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = p ? t.checked : !!a, t.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), Ou(t);
  }
  function Vu(t, e, n) {
    e === "number" && wl(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
  }
  function Vi(t, e, n, a) {
    if (t = t.options, e) {
      e = {};
      for (var s = 0; s < n.length; s++)
        e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        s = e.hasOwnProperty("$" + t[n].value), t[n].selected !== s && (t[n].selected = s), s && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Oe(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          t[s].selected = !0, a && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Cf(t, e, n) {
    if (e != null && (e = "" + Oe(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Oe(n) : "";
  }
  function zf(t, e, n, a) {
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
    n = Oe(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), Ou(t);
  }
  function _i(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var P0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Of(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || P0.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function Rf(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(o(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var s in e)
        a = e[s], e.hasOwnProperty(s) && n[s] !== a && Of(t, s, a);
    } else
      for (var r in e)
        e.hasOwnProperty(r) && Of(t, r, e[r]);
  }
  function _u(t) {
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
  var $0 = /* @__PURE__ */ new Map([
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
  ]), I0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hl(t) {
    return I0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function an() {
  }
  var Uu = null;
  function Bu(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Ui = null, Bi = null;
  function Vf(t) {
    var e = zi(t);
    if (e && (t = e.stateNode)) {
      var n = t[ce] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Ru(
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
              'input[name="' + Re(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var s = a[ce] || null;
                if (!s) throw Error(o(90));
                Ru(
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
              a = n[e], a.form === t.form && Df(a);
          }
          break t;
        case "textarea":
          Cf(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Vi(t, !!n.multiple, e, !1);
      }
    }
  }
  var Nu = !1;
  function _f(t, e, n) {
    if (Nu) return t(e, n);
    Nu = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Nu = !1, (Ui !== null || Bi !== null) && (xs(), Ui && (e = Ui, t = Bi, Bi = Ui = null, Vf(e), t)))
        for (e = 0; e < t.length; e++) Vf(t[e]);
    }
  }
  function Ca(t, e) {
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
  var ln = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ju = !1;
  if (ln)
    try {
      var za = {};
      Object.defineProperty(za, "passive", {
        get: function() {
          ju = !0;
        }
      }), window.addEventListener("test", za, za), window.removeEventListener("test", za, za);
    } catch {
      ju = !1;
    }
  var Dn = null, Lu = null, Yl = null;
  function Uf() {
    if (Yl) return Yl;
    var t, e = Lu, n = e.length, a, s = "value" in Dn ? Dn.value : Dn.textContent, r = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++) ;
    var f = n - t;
    for (a = 1; a <= f && e[n - a] === s[r - a]; a++) ;
    return Yl = s.slice(t, 1 < a ? 1 - a : void 0);
  }
  function ql(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Gl() {
    return !0;
  }
  function Bf() {
    return !1;
  }
  function fe(t) {
    function e(n, a, s, r, f) {
      this._reactName = n, this._targetInst = s, this.type = a, this.nativeEvent = r, this.target = f, this.currentTarget = null;
      for (var p in t)
        t.hasOwnProperty(p) && (n = t[p], this[p] = n ? n(r) : r[p]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Gl : Bf, this.isPropagationStopped = Bf, this;
    }
    return S(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Gl);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Gl);
      },
      persist: function() {
      },
      isPersistent: Gl
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
  }, Xl = fe(ii), Oa = S({}, ii, { view: 0, detail: 0 }), tv = fe(Oa), wu, Hu, Ra, Ql = S({}, Oa, {
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
    getModifierState: qu,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ra && (Ra && t.type === "mousemove" ? (wu = t.screenX - Ra.screenX, Hu = t.screenY - Ra.screenY) : Hu = wu = 0, Ra = t), wu);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Hu;
    }
  }), Nf = fe(Ql), ev = S({}, Ql, { dataTransfer: 0 }), nv = fe(ev), iv = S({}, Oa, { relatedTarget: 0 }), Yu = fe(iv), av = S({}, ii, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), lv = fe(av), sv = S({}, ii, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), uv = fe(sv), ov = S({}, ii, { data: 0 }), jf = fe(ov), rv = {
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
  }, cv = {
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
  }, fv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function hv(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = fv[t]) ? !!e[t] : !1;
  }
  function qu() {
    return hv;
  }
  var dv = S({}, Oa, {
    key: function(t) {
      if (t.key) {
        var e = rv[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = ql(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? cv[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: qu,
    charCode: function(t) {
      return t.type === "keypress" ? ql(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? ql(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), mv = fe(dv), yv = S({}, Ql, {
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
  }), Lf = fe(yv), pv = S({}, Oa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: qu
  }), gv = fe(pv), vv = S({}, ii, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Sv = fe(vv), Tv = S({}, Ql, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), bv = fe(Tv), Av = S({}, ii, {
    newState: 0,
    oldState: 0
  }), Ev = fe(Av), Mv = [9, 13, 27, 32], Gu = ln && "CompositionEvent" in window, Va = null;
  ln && "documentMode" in document && (Va = document.documentMode);
  var Dv = ln && "TextEvent" in window && !Va, wf = ln && (!Gu || Va && 8 < Va && 11 >= Va), Hf = " ", Yf = !1;
  function qf(t, e) {
    switch (t) {
      case "keyup":
        return Mv.indexOf(e.keyCode) !== -1;
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
  function Gf(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ni = !1;
  function xv(t, e) {
    switch (t) {
      case "compositionend":
        return Gf(e);
      case "keypress":
        return e.which !== 32 ? null : (Yf = !0, Hf);
      case "textInput":
        return t = e.data, t === Hf && Yf ? null : t;
      default:
        return null;
    }
  }
  function Cv(t, e) {
    if (Ni)
      return t === "compositionend" || !Gu && qf(t, e) ? (t = Uf(), Yl = Lu = Dn = null, Ni = !1, t) : null;
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
        return wf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var zv = {
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
  function Xf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!zv[t.type] : e === "textarea";
  }
  function Qf(t, e, n, a) {
    Ui ? Bi ? Bi.push(a) : Bi = [a] : Ui = a, e = Us(e, "onChange"), 0 < e.length && (n = new Xl(
      "onChange",
      "change",
      null,
      n,
      a
    ), t.push({ event: n, listeners: e }));
  }
  var _a = null, Ua = null;
  function Ov(t) {
    xm(t, 0);
  }
  function Zl(t) {
    var e = xa(t);
    if (Df(e)) return t;
  }
  function Zf(t, e) {
    if (t === "change") return e;
  }
  var Kf = !1;
  if (ln) {
    var Xu;
    if (ln) {
      var Qu = "oninput" in document;
      if (!Qu) {
        var Jf = document.createElement("div");
        Jf.setAttribute("oninput", "return;"), Qu = typeof Jf.oninput == "function";
      }
      Xu = Qu;
    } else Xu = !1;
    Kf = Xu && (!document.documentMode || 9 < document.documentMode);
  }
  function kf() {
    _a && (_a.detachEvent("onpropertychange", Ff), Ua = _a = null);
  }
  function Ff(t) {
    if (t.propertyName === "value" && Zl(Ua)) {
      var e = [];
      Qf(
        e,
        Ua,
        t,
        Bu(t)
      ), _f(Ov, e);
    }
  }
  function Rv(t, e, n) {
    t === "focusin" ? (kf(), _a = e, Ua = n, _a.attachEvent("onpropertychange", Ff)) : t === "focusout" && kf();
  }
  function Vv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Zl(Ua);
  }
  function _v(t, e) {
    if (t === "click") return Zl(e);
  }
  function Uv(t, e) {
    if (t === "input" || t === "change")
      return Zl(e);
  }
  function Bv(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var be = typeof Object.is == "function" ? Object.is : Bv;
  function Ba(t, e) {
    if (be(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var s = n[a];
      if (!bu.call(e, s) || !be(t[s], e[s]))
        return !1;
    }
    return !0;
  }
  function Wf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Pf(t, e) {
    var n = Wf(t);
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
      n = Wf(n);
    }
  }
  function $f(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? $f(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function If(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = wl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = wl(t.document);
    }
    return e;
  }
  function Zu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Nv = ln && "documentMode" in document && 11 >= document.documentMode, ji = null, Ku = null, Na = null, Ju = !1;
  function th(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ju || ji == null || ji !== wl(a) || (a = ji, "selectionStart" in a && Zu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Na && Ba(Na, a) || (Na = a, a = Us(Ku, "onSelect"), 0 < a.length && (e = new Xl(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: a }), e.target = ji)));
  }
  function ai(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var Li = {
    animationend: ai("Animation", "AnimationEnd"),
    animationiteration: ai("Animation", "AnimationIteration"),
    animationstart: ai("Animation", "AnimationStart"),
    transitionrun: ai("Transition", "TransitionRun"),
    transitionstart: ai("Transition", "TransitionStart"),
    transitioncancel: ai("Transition", "TransitionCancel"),
    transitionend: ai("Transition", "TransitionEnd")
  }, ku = {}, eh = {};
  ln && (eh = document.createElement("div").style, "AnimationEvent" in window || (delete Li.animationend.animation, delete Li.animationiteration.animation, delete Li.animationstart.animation), "TransitionEvent" in window || delete Li.transitionend.transition);
  function li(t) {
    if (ku[t]) return ku[t];
    if (!Li[t]) return t;
    var e = Li[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in eh)
        return ku[t] = e[n];
    return t;
  }
  var nh = li("animationend"), ih = li("animationiteration"), ah = li("animationstart"), jv = li("transitionrun"), Lv = li("transitionstart"), wv = li("transitioncancel"), lh = li("transitionend"), sh = /* @__PURE__ */ new Map(), Fu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Fu.push("scrollEnd");
  function qe(t, e) {
    sh.set(t, e), ni(e, [t]);
  }
  var Kl = typeof reportError == "function" ? reportError : function(t) {
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
  }, Ve = [], wi = 0, Wu = 0;
  function Jl() {
    for (var t = wi, e = Wu = wi = 0; e < t; ) {
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
      r !== 0 && uh(n, s, r);
    }
  }
  function kl(t, e, n, a) {
    Ve[wi++] = t, Ve[wi++] = e, Ve[wi++] = n, Ve[wi++] = a, Wu |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Pu(t, e, n, a) {
    return kl(t, e, n, a), Fl(t);
  }
  function si(t, e) {
    return kl(t, null, null, e), Fl(t);
  }
  function uh(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var s = !1, r = t.return; r !== null; )
      r.childLanes |= n, a = r.alternate, a !== null && (a.childLanes |= n), r.tag === 22 && (t = r.stateNode, t === null || t._visibility & 1 || (s = !0)), t = r, r = r.return;
    return t.tag === 3 ? (r = t.stateNode, s && e !== null && (s = 31 - Te(n), t = r.hiddenUpdates, a = t[s], a === null ? t[s] = [e] : a.push(e), e.lane = n | 536870912), r) : null;
  }
  function Fl(t) {
    if (50 < il)
      throw il = 0, ur = null, Error(o(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Hi = {};
  function Hv(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ae(t, e, n, a) {
    return new Hv(t, e, n, a);
  }
  function $u(t) {
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
  function oh(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Wl(t, e, n, a, s, r) {
    var f = 0;
    if (a = t, typeof t == "function") $u(t) && (f = 1);
    else if (typeof t == "string")
      f = Q1(
        t,
        n,
        K.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case nt:
          return t = Ae(31, n, e, s), t.elementType = nt, t.lanes = r, t;
        case j:
          return ui(n.children, s, r, e);
        case w:
          f = 8, s |= 24;
          break;
        case L:
          return t = Ae(12, n, e, s | 2), t.elementType = L, t.lanes = r, t;
        case $:
          return t = Ae(13, n, e, s), t.elementType = $, t.lanes = r, t;
        case at:
          return t = Ae(19, n, e, s), t.elementType = at, t.lanes = r, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case H:
                f = 10;
                break t;
              case Y:
                f = 9;
                break t;
              case G:
                f = 11;
                break t;
              case Z:
                f = 14;
                break t;
              case F:
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
  function Iu(t, e, n) {
    return t = Ae(6, t, null, e), t.lanes = n, t;
  }
  function rh(t) {
    var e = Ae(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function to(t, e, n) {
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
  var ch = /* @__PURE__ */ new WeakMap();
  function _e(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = ch.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: rf(e)
      }, ch.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: rf(e)
    };
  }
  var Yi = [], qi = 0, Pl = null, ja = 0, Ue = [], Be = 0, xn = null, ke = 1, Fe = "";
  function un(t, e) {
    Yi[qi++] = ja, Yi[qi++] = Pl, Pl = t, ja = e;
  }
  function fh(t, e, n) {
    Ue[Be++] = ke, Ue[Be++] = Fe, Ue[Be++] = xn, xn = t;
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
  function eo(t) {
    t.return !== null && (un(t, 1), fh(t, 1, 0));
  }
  function no(t) {
    for (; t === Pl; )
      Pl = Yi[--qi], Yi[qi] = null, ja = Yi[--qi], Yi[qi] = null;
    for (; t === xn; )
      xn = Ue[--Be], Ue[Be] = null, Fe = Ue[--Be], Ue[Be] = null, ke = Ue[--Be], Ue[Be] = null;
  }
  function hh(t, e) {
    Ue[Be++] = ke, Ue[Be++] = Fe, Ue[Be++] = xn, ke = e.id, Fe = e.overflow, xn = t;
  }
  var ee = null, Vt = null, gt = !1, Cn = null, Ne = !1, io = Error(o(519));
  function zn(t) {
    var e = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw La(_e(e, t)), io;
  }
  function dh(t) {
    var e = t.stateNode, n = t.type, a = t.memoizedProps;
    switch (e[te] = t, e[ce] = a, n) {
      case "dialog":
        dt("cancel", e), dt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        dt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ll.length; n++)
          dt(ll[n], e);
        break;
      case "source":
        dt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        dt("error", e), dt("load", e);
        break;
      case "details":
        dt("toggle", e);
        break;
      case "input":
        dt("invalid", e), xf(
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
        dt("invalid", e);
        break;
      case "textarea":
        dt("invalid", e), zf(e, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || Rm(e.textContent, n) ? (a.popover != null && (dt("beforetoggle", e), dt("toggle", e)), a.onScroll != null && dt("scroll", e), a.onScrollEnd != null && dt("scrollend", e), a.onClick != null && (e.onclick = an), e = !0) : e = !1, e || zn(t, !0);
  }
  function mh(t) {
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
  function Gi(t) {
    if (t !== ee) return !1;
    if (!gt) return mh(t), gt = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Ar(t.type, t.memoizedProps)), n = !n), n && Vt && zn(t), mh(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Vt = Hm(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Vt = Hm(t);
    } else
      e === 27 ? (e = Vt, Gn(t.type) ? (t = Cr, Cr = null, Vt = t) : Vt = e) : Vt = ee ? Le(t.stateNode.nextSibling) : null;
    return !0;
  }
  function oi() {
    Vt = ee = null, gt = !1;
  }
  function ao() {
    var t = Cn;
    return t !== null && (ye === null ? ye = t : ye.push.apply(
      ye,
      t
    ), Cn = null), t;
  }
  function La(t) {
    Cn === null ? Cn = [t] : Cn.push(t);
  }
  var lo = b(null), ri = null, on = null;
  function On(t, e, n) {
    Q(lo, e._currentValue), e._currentValue = n;
  }
  function rn(t) {
    t._currentValue = lo.current, B(lo);
  }
  function so(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function uo(t, e, n, a) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var f = s.child;
        r = r.firstContext;
        t: for (; r !== null; ) {
          var p = r;
          r = s;
          for (var T = 0; T < e.length; T++)
            if (p.context === e[T]) {
              r.lanes |= n, p = r.alternate, p !== null && (p.lanes |= n), so(
                r.return,
                n,
                t
              ), a || (f = null);
              break t;
            }
          r = p.next;
        }
      } else if (s.tag === 18) {
        if (f = s.return, f === null) throw Error(o(341));
        f.lanes |= n, r = f.alternate, r !== null && (r.lanes |= n), so(f, n, t), f = null;
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
  function Xi(t, e, n, a) {
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
          var p = s.type;
          be(s.pendingProps.value, f.value) || (t !== null ? t.push(p) : t = [p]);
        }
      } else if (s === pt.current) {
        if (f = s.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(cl) : t = [cl]);
      }
      s = s.return;
    }
    t !== null && uo(
      e,
      t,
      n,
      a
    ), e.flags |= 262144;
  }
  function $l(t) {
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
    return yh(ri, t);
  }
  function Il(t, e) {
    return ri === null && ci(t), yh(t, e);
  }
  function yh(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, on === null) {
      if (t === null) throw Error(o(308));
      on = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else on = on.next = e;
    return n;
  }
  var Yv = typeof AbortController < "u" ? AbortController : function() {
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
  }, qv = i.unstable_scheduleCallback, Gv = i.unstable_NormalPriority, Qt = {
    $$typeof: H,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function oo() {
    return {
      controller: new Yv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function wa(t) {
    t.refCount--, t.refCount === 0 && qv(Gv, function() {
      t.controller.abort();
    });
  }
  var Ha = null, ro = 0, Qi = 0, Zi = null;
  function Xv(t, e) {
    if (Ha === null) {
      var n = Ha = [];
      ro = 0, Qi = dr(), Zi = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return ro++, e.then(ph, ph), e;
  }
  function ph() {
    if (--ro === 0 && Ha !== null) {
      Zi !== null && (Zi.status = "fulfilled");
      var t = Ha;
      Ha = null, Qi = 0, Zi = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Qv(t, e) {
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
  var gh = R.S;
  R.S = function(t, e) {
    tm = ve(), typeof e == "object" && e !== null && typeof e.then == "function" && Xv(t, e), gh !== null && gh(t, e);
  };
  var fi = b(null);
  function co() {
    var t = fi.current;
    return t !== null ? t : Ot.pooledCache;
  }
  function ts(t, e) {
    e === null ? Q(fi, fi.current) : Q(fi, e.pool);
  }
  function vh() {
    var t = co();
    return t === null ? null : { parent: Qt._currentValue, pool: t };
  }
  var Ki = Error(o(460)), fo = Error(o(474)), es = Error(o(542)), ns = { then: function() {
  } };
  function Sh(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Th(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(an, an), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Ah(t), t;
      default:
        if (typeof e.status == "string") e.then(an, an);
        else {
          if (t = Ot, t !== null && 100 < t.shellSuspendCounter)
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
            throw t = e.reason, Ah(t), t;
        }
        throw di = e, Ki;
    }
  }
  function hi(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (di = n, Ki) : n;
    }
  }
  var di = null;
  function bh() {
    if (di === null) throw Error(o(459));
    var t = di;
    return di = null, t;
  }
  function Ah(t) {
    if (t === Ki || t === es)
      throw Error(o(483));
  }
  var Ji = null, Ya = 0;
  function is(t) {
    var e = Ya;
    return Ya += 1, Ji === null && (Ji = []), Th(Ji, t, e);
  }
  function qa(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function as(t, e) {
    throw e.$$typeof === A ? Error(o(525)) : (t = Object.prototype.toString.call(e), Error(
      o(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Eh(t) {
    function e(M, E) {
      if (t) {
        var D = M.deletions;
        D === null ? (M.deletions = [E], M.flags |= 16) : D.push(E);
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
    function r(M, E, D) {
      return M.index = D, t ? (D = M.alternate, D !== null ? (D = D.index, D < E ? (M.flags |= 67108866, E) : D) : (M.flags |= 67108866, E)) : (M.flags |= 1048576, E);
    }
    function f(M) {
      return t && M.alternate === null && (M.flags |= 67108866), M;
    }
    function p(M, E, D, U) {
      return E === null || E.tag !== 6 ? (E = Iu(D, M.mode, U), E.return = M, E) : (E = s(E, D), E.return = M, E);
    }
    function T(M, E, D, U) {
      var I = D.type;
      return I === j ? V(
        M,
        E,
        D.props.children,
        U,
        D.key
      ) : E !== null && (E.elementType === I || typeof I == "object" && I !== null && I.$$typeof === F && hi(I) === E.type) ? (E = s(E, D.props), qa(E, D), E.return = M, E) : (E = Wl(
        D.type,
        D.key,
        D.props,
        null,
        M.mode,
        U
      ), qa(E, D), E.return = M, E);
    }
    function x(M, E, D, U) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== D.containerInfo || E.stateNode.implementation !== D.implementation ? (E = to(D, M.mode, U), E.return = M, E) : (E = s(E, D.children || []), E.return = M, E);
    }
    function V(M, E, D, U, I) {
      return E === null || E.tag !== 7 ? (E = ui(
        D,
        M.mode,
        U,
        I
      ), E.return = M, E) : (E = s(E, D), E.return = M, E);
    }
    function N(M, E, D) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = Iu(
          "" + E,
          M.mode,
          D
        ), E.return = M, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case _:
            return D = Wl(
              E.type,
              E.key,
              E.props,
              null,
              M.mode,
              D
            ), qa(D, E), D.return = M, D;
          case z:
            return E = to(
              E,
              M.mode,
              D
            ), E.return = M, E;
          case F:
            return E = hi(E), N(M, E, D);
        }
        if (Bt(E) || vt(E))
          return E = ui(
            E,
            M.mode,
            D,
            null
          ), E.return = M, E;
        if (typeof E.then == "function")
          return N(M, is(E), D);
        if (E.$$typeof === H)
          return N(
            M,
            Il(M, E),
            D
          );
        as(M, E);
      }
      return null;
    }
    function C(M, E, D, U) {
      var I = E !== null ? E.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return I !== null ? null : p(M, E, "" + D, U);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case _:
            return D.key === I ? T(M, E, D, U) : null;
          case z:
            return D.key === I ? x(M, E, D, U) : null;
          case F:
            return D = hi(D), C(M, E, D, U);
        }
        if (Bt(D) || vt(D))
          return I !== null ? null : V(M, E, D, U, null);
        if (typeof D.then == "function")
          return C(
            M,
            E,
            is(D),
            U
          );
        if (D.$$typeof === H)
          return C(
            M,
            E,
            Il(M, D),
            U
          );
        as(M, D);
      }
      return null;
    }
    function O(M, E, D, U, I) {
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return M = M.get(D) || null, p(E, M, "" + U, I);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case _:
            return M = M.get(
              U.key === null ? D : U.key
            ) || null, T(E, M, U, I);
          case z:
            return M = M.get(
              U.key === null ? D : U.key
            ) || null, x(E, M, U, I);
          case F:
            return U = hi(U), O(
              M,
              E,
              D,
              U,
              I
            );
        }
        if (Bt(U) || vt(U))
          return M = M.get(D) || null, V(E, M, U, I, null);
        if (typeof U.then == "function")
          return O(
            M,
            E,
            D,
            is(U),
            I
          );
        if (U.$$typeof === H)
          return O(
            M,
            E,
            D,
            Il(E, U),
            I
          );
        as(E, U);
      }
      return null;
    }
    function J(M, E, D, U) {
      for (var I = null, St = null, W = E, ct = E = 0, yt = null; W !== null && ct < D.length; ct++) {
        W.index > ct ? (yt = W, W = null) : yt = W.sibling;
        var Tt = C(
          M,
          W,
          D[ct],
          U
        );
        if (Tt === null) {
          W === null && (W = yt);
          break;
        }
        t && W && Tt.alternate === null && e(M, W), E = r(Tt, E, ct), St === null ? I = Tt : St.sibling = Tt, St = Tt, W = yt;
      }
      if (ct === D.length)
        return n(M, W), gt && un(M, ct), I;
      if (W === null) {
        for (; ct < D.length; ct++)
          W = N(M, D[ct], U), W !== null && (E = r(
            W,
            E,
            ct
          ), St === null ? I = W : St.sibling = W, St = W);
        return gt && un(M, ct), I;
      }
      for (W = a(W); ct < D.length; ct++)
        yt = O(
          W,
          M,
          ct,
          D[ct],
          U
        ), yt !== null && (t && yt.alternate !== null && W.delete(
          yt.key === null ? ct : yt.key
        ), E = r(
          yt,
          E,
          ct
        ), St === null ? I = yt : St.sibling = yt, St = yt);
      return t && W.forEach(function(Jn) {
        return e(M, Jn);
      }), gt && un(M, ct), I;
    }
    function tt(M, E, D, U) {
      if (D == null) throw Error(o(151));
      for (var I = null, St = null, W = E, ct = E = 0, yt = null, Tt = D.next(); W !== null && !Tt.done; ct++, Tt = D.next()) {
        W.index > ct ? (yt = W, W = null) : yt = W.sibling;
        var Jn = C(M, W, Tt.value, U);
        if (Jn === null) {
          W === null && (W = yt);
          break;
        }
        t && W && Jn.alternate === null && e(M, W), E = r(Jn, E, ct), St === null ? I = Jn : St.sibling = Jn, St = Jn, W = yt;
      }
      if (Tt.done)
        return n(M, W), gt && un(M, ct), I;
      if (W === null) {
        for (; !Tt.done; ct++, Tt = D.next())
          Tt = N(M, Tt.value, U), Tt !== null && (E = r(Tt, E, ct), St === null ? I = Tt : St.sibling = Tt, St = Tt);
        return gt && un(M, ct), I;
      }
      for (W = a(W); !Tt.done; ct++, Tt = D.next())
        Tt = O(W, M, ct, Tt.value, U), Tt !== null && (t && Tt.alternate !== null && W.delete(Tt.key === null ? ct : Tt.key), E = r(Tt, E, ct), St === null ? I = Tt : St.sibling = Tt, St = Tt);
      return t && W.forEach(function(eS) {
        return e(M, eS);
      }), gt && un(M, ct), I;
    }
    function Ct(M, E, D, U) {
      if (typeof D == "object" && D !== null && D.type === j && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case _:
            t: {
              for (var I = D.key; E !== null; ) {
                if (E.key === I) {
                  if (I = D.type, I === j) {
                    if (E.tag === 7) {
                      n(
                        M,
                        E.sibling
                      ), U = s(
                        E,
                        D.props.children
                      ), U.return = M, M = U;
                      break t;
                    }
                  } else if (E.elementType === I || typeof I == "object" && I !== null && I.$$typeof === F && hi(I) === E.type) {
                    n(
                      M,
                      E.sibling
                    ), U = s(E, D.props), qa(U, D), U.return = M, M = U;
                    break t;
                  }
                  n(M, E);
                  break;
                } else e(M, E);
                E = E.sibling;
              }
              D.type === j ? (U = ui(
                D.props.children,
                M.mode,
                U,
                D.key
              ), U.return = M, M = U) : (U = Wl(
                D.type,
                D.key,
                D.props,
                null,
                M.mode,
                U
              ), qa(U, D), U.return = M, M = U);
            }
            return f(M);
          case z:
            t: {
              for (I = D.key; E !== null; ) {
                if (E.key === I)
                  if (E.tag === 4 && E.stateNode.containerInfo === D.containerInfo && E.stateNode.implementation === D.implementation) {
                    n(
                      M,
                      E.sibling
                    ), U = s(E, D.children || []), U.return = M, M = U;
                    break t;
                  } else {
                    n(M, E);
                    break;
                  }
                else e(M, E);
                E = E.sibling;
              }
              U = to(D, M.mode, U), U.return = M, M = U;
            }
            return f(M);
          case F:
            return D = hi(D), Ct(
              M,
              E,
              D,
              U
            );
        }
        if (Bt(D))
          return J(
            M,
            E,
            D,
            U
          );
        if (vt(D)) {
          if (I = vt(D), typeof I != "function") throw Error(o(150));
          return D = I.call(D), tt(
            M,
            E,
            D,
            U
          );
        }
        if (typeof D.then == "function")
          return Ct(
            M,
            E,
            is(D),
            U
          );
        if (D.$$typeof === H)
          return Ct(
            M,
            E,
            Il(M, D),
            U
          );
        as(M, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D, E !== null && E.tag === 6 ? (n(M, E.sibling), U = s(E, D), U.return = M, M = U) : (n(M, E), U = Iu(D, M.mode, U), U.return = M, M = U), f(M)) : n(M, E);
    }
    return function(M, E, D, U) {
      try {
        Ya = 0;
        var I = Ct(
          M,
          E,
          D,
          U
        );
        return Ji = null, I;
      } catch (W) {
        if (W === Ki || W === es) throw W;
        var St = Ae(29, W, null, M.mode);
        return St.lanes = U, St.return = M, St;
      }
    };
  }
  var mi = Eh(!0), Mh = Eh(!1), Rn = !1;
  function ho(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function mo(t, e) {
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
    if (a = a.shared, (bt & 2) !== 0) {
      var s = a.pending;
      return s === null ? e.next = e : (e.next = s.next, s.next = e), a.pending = e, e = Fl(t), uh(t, null, n), e;
    }
    return kl(t, a, e, n), Fl(t);
  }
  function Ga(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, yf(t, n);
    }
  }
  function yo(t, e) {
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
  var po = !1;
  function Xa() {
    if (po) {
      var t = Zi;
      if (t !== null) throw t;
    }
  }
  function Qa(t, e, n, a) {
    po = !1;
    var s = t.updateQueue;
    Rn = !1;
    var r = s.firstBaseUpdate, f = s.lastBaseUpdate, p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var T = p, x = T.next;
      T.next = null, f === null ? r = x : f.next = x, f = T;
      var V = t.alternate;
      V !== null && (V = V.updateQueue, p = V.lastBaseUpdate, p !== f && (p === null ? V.firstBaseUpdate = x : p.next = x, V.lastBaseUpdate = T));
    }
    if (r !== null) {
      var N = s.baseState;
      f = 0, V = x = T = null, p = r;
      do {
        var C = p.lane & -536870913, O = C !== p.lane;
        if (O ? (mt & C) === C : (a & C) === C) {
          C !== 0 && C === Qi && (po = !0), V !== null && (V = V.next = {
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: null,
            next: null
          });
          t: {
            var J = t, tt = p;
            C = e;
            var Ct = n;
            switch (tt.tag) {
              case 1:
                if (J = tt.payload, typeof J == "function") {
                  N = J.call(Ct, N, C);
                  break t;
                }
                N = J;
                break t;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = tt.payload, C = typeof J == "function" ? J.call(Ct, N, C) : J, C == null) break t;
                N = S({}, N, C);
                break t;
              case 2:
                Rn = !0;
            }
          }
          C = p.callback, C !== null && (t.flags |= 64, O && (t.flags |= 8192), O = s.callbacks, O === null ? s.callbacks = [C] : O.push(C));
        } else
          O = {
            lane: C,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          }, V === null ? (x = V = O, T = N) : V = V.next = O, f |= C;
        if (p = p.next, p === null) {
          if (p = s.shared.pending, p === null)
            break;
          O = p, p = O.next, O.next = null, s.lastBaseUpdate = O, s.shared.pending = null;
        }
      } while (!0);
      V === null && (T = N), s.baseState = T, s.firstBaseUpdate = x, s.lastBaseUpdate = V, r === null && (s.shared.lanes = 0), Ln |= f, t.lanes = f, t.memoizedState = N;
    }
  }
  function Dh(t, e) {
    if (typeof t != "function")
      throw Error(o(191, t));
    t.call(e);
  }
  function xh(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        Dh(n[t], e);
  }
  var ki = b(null), ls = b(0);
  function Ch(t, e) {
    t = vn, Q(ls, t), Q(ki, e), vn = t | e.baseLanes;
  }
  function go() {
    Q(ls, vn), Q(ki, ki.current);
  }
  function vo() {
    vn = ls.current, B(ki), B(ls);
  }
  var Ee = b(null), je = null;
  function Un(t) {
    var e = t.alternate;
    Q(Gt, Gt.current & 1), Q(Ee, t), je === null && (e === null || ki.current !== null || e.memoizedState !== null) && (je = t);
  }
  function So(t) {
    Q(Gt, Gt.current), Q(Ee, t), je === null && (je = t);
  }
  function zh(t) {
    t.tag === 22 ? (Q(Gt, Gt.current), Q(Ee, t), je === null && (je = t)) : Bn();
  }
  function Bn() {
    Q(Gt, Gt.current), Q(Ee, Ee.current);
  }
  function Me(t) {
    B(Ee), je === t && (je = null), B(Gt);
  }
  var Gt = b(0);
  function ss(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Dr(n) || xr(n)))
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
  var cn = 0, rt = null, Dt = null, Zt = null, us = !1, Fi = !1, yi = !1, os = 0, Za = 0, Wi = null, Zv = 0;
  function Lt() {
    throw Error(o(321));
  }
  function To(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!be(t[n], e[n])) return !1;
    return !0;
  }
  function bo(t, e, n, a, s, r) {
    return cn = r, rt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, R.H = t === null || t.memoizedState === null ? fd : jo, yi = !1, r = n(a, s), yi = !1, Fi && (r = Rh(
      e,
      n,
      a,
      s
    )), Oh(t), r;
  }
  function Oh(t) {
    R.H = ka;
    var e = Dt !== null && Dt.next !== null;
    if (cn = 0, Zt = Dt = rt = null, us = !1, Za = 0, Wi = null, e) throw Error(o(300));
    t === null || Kt || (t = t.dependencies, t !== null && $l(t) && (Kt = !0));
  }
  function Rh(t, e, n, a) {
    rt = t;
    var s = 0;
    do {
      if (Fi && (Wi = null), Za = 0, Fi = !1, 25 <= s) throw Error(o(301));
      if (s += 1, Zt = Dt = null, t.updateQueue != null) {
        var r = t.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      R.H = hd, r = e(n, a);
    } while (Fi);
    return r;
  }
  function Kv() {
    var t = R.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Ka(e) : e, t = t.useState()[0], (Dt !== null ? Dt.memoizedState : null) !== t && (rt.flags |= 1024), e;
  }
  function Ao() {
    var t = os !== 0;
    return os = 0, t;
  }
  function Eo(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function Mo(t) {
    if (us) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      us = !1;
    }
    cn = 0, Zt = Dt = rt = null, Fi = !1, Za = os = 0, Wi = null;
  }
  function ue() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Zt === null ? rt.memoizedState = Zt = t : Zt = Zt.next = t, Zt;
  }
  function Xt() {
    if (Dt === null) {
      var t = rt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Dt.next;
    var e = Zt === null ? rt.memoizedState : Zt.next;
    if (e !== null)
      Zt = e, Dt = t;
    else {
      if (t === null)
        throw rt.alternate === null ? Error(o(467)) : Error(o(310));
      Dt = t, t = {
        memoizedState: Dt.memoizedState,
        baseState: Dt.baseState,
        baseQueue: Dt.baseQueue,
        queue: Dt.queue,
        next: null
      }, Zt === null ? rt.memoizedState = Zt = t : Zt = Zt.next = t;
    }
    return Zt;
  }
  function rs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ka(t) {
    var e = Za;
    return Za += 1, Wi === null && (Wi = []), t = Th(Wi, t, e), e = rt, (Zt === null ? e.memoizedState : Zt.next) === null && (e = e.alternate, R.H = e === null || e.memoizedState === null ? fd : jo), t;
  }
  function cs(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ka(t);
      if (t.$$typeof === H) return ne(t);
    }
    throw Error(o(438, String(t)));
  }
  function Do(t) {
    var e = null, n = rt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var a = rt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = rs(), rt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++)
        n[a] = P;
    return e.index++, n;
  }
  function fn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function fs(t) {
    var e = Xt();
    return xo(e, Dt, t);
  }
  function xo(t, e, n) {
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
      var p = f = null, T = null, x = e, V = !1;
      do {
        var N = x.lane & -536870913;
        if (N !== x.lane ? (mt & N) === N : (cn & N) === N) {
          var C = x.revertLane;
          if (C === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }), N === Qi && (V = !0);
          else if ((cn & C) === C) {
            x = x.next, C === Qi && (V = !0);
            continue;
          } else
            N = {
              lane: 0,
              revertLane: x.revertLane,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }, T === null ? (p = T = N, f = r) : T = T.next = N, rt.lanes |= C, Ln |= C;
          N = x.action, yi && n(r, N), r = x.hasEagerState ? x.eagerState : n(r, N);
        } else
          C = {
            lane: N,
            revertLane: x.revertLane,
            gesture: x.gesture,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          }, T === null ? (p = T = C, f = r) : T = T.next = C, rt.lanes |= N, Ln |= N;
        x = x.next;
      } while (x !== null && x !== e);
      if (T === null ? f = r : T.next = p, !be(r, t.memoizedState) && (Kt = !0, V && (n = Zi, n !== null)))
        throw n;
      t.memoizedState = r, t.baseState = f, t.baseQueue = T, a.lastRenderedState = r;
    }
    return s === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Co(t) {
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
      be(r, e.memoizedState) || (Kt = !0), e.memoizedState = r, e.baseQueue === null && (e.baseState = r), n.lastRenderedState = r;
    }
    return [r, a];
  }
  function Vh(t, e, n) {
    var a = rt, s = Xt(), r = gt;
    if (r) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var f = !be(
      (Dt || s).memoizedState,
      n
    );
    if (f && (s.memoizedState = n, Kt = !0), s = s.queue, Ro(Bh.bind(null, a, s, t), [
      t
    ]), s.getSnapshot !== e || f || Zt !== null && Zt.memoizedState.tag & 1) {
      if (a.flags |= 2048, Pi(
        9,
        { destroy: void 0 },
        Uh.bind(
          null,
          a,
          s,
          n,
          e
        ),
        null
      ), Ot === null) throw Error(o(349));
      r || (cn & 127) !== 0 || _h(a, e, n);
    }
    return n;
  }
  function _h(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = rt.updateQueue, e === null ? (e = rs(), rt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function Uh(t, e, n, a) {
    e.value = n, e.getSnapshot = a, Nh(e) && jh(t);
  }
  function Bh(t, e, n) {
    return n(function() {
      Nh(e) && jh(t);
    });
  }
  function Nh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !be(t, n);
    } catch {
      return !0;
    }
  }
  function jh(t) {
    var e = si(t, 2);
    e !== null && pe(e, t, 2);
  }
  function zo(t) {
    var e = ue();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), yi) {
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
  function Lh(t, e, n, a) {
    return t.baseState = n, xo(
      t,
      Dt,
      typeof a == "function" ? a : fn
    );
  }
  function Jv(t, e, n, a, s) {
    if (ms(t)) throw Error(o(485));
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
      R.T !== null ? n(!0) : r.isTransition = !1, a(r), n = e.pending, n === null ? (r.next = e.pending = r, wh(e, r)) : (r.next = n.next, e.pending = n.next = r);
    }
  }
  function wh(t, e) {
    var n = e.action, a = e.payload, s = t.state;
    if (e.isTransition) {
      var r = R.T, f = {};
      R.T = f;
      try {
        var p = n(s, a), T = R.S;
        T !== null && T(f, p), Hh(t, e, p);
      } catch (x) {
        Oo(t, e, x);
      } finally {
        r !== null && f.types !== null && (r.types = f.types), R.T = r;
      }
    } else
      try {
        r = n(s, a), Hh(t, e, r);
      } catch (x) {
        Oo(t, e, x);
      }
  }
  function Hh(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Yh(t, e, a);
      },
      function(a) {
        return Oo(t, e, a);
      }
    ) : Yh(t, e, n);
  }
  function Yh(t, e, n) {
    e.status = "fulfilled", e.value = n, qh(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, wh(t, n)));
  }
  function Oo(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, qh(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function qh(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Gh(t, e) {
    return e;
  }
  function Xh(t, e) {
    if (gt) {
      var n = Ot.formState;
      if (n !== null) {
        t: {
          var a = rt;
          if (gt) {
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
            zn(a);
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
      lastRenderedReducer: Gh,
      lastRenderedState: e
    }, n.queue = a, n = od.bind(
      null,
      rt,
      a
    ), a.dispatch = n, a = zo(!1), r = No.bind(
      null,
      rt,
      !1,
      a.queue
    ), a = ue(), s = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = s, n = Jv.bind(
      null,
      rt,
      s,
      r,
      n
    ), s.dispatch = n, a.memoizedState = t, [e, n, !1];
  }
  function Qh(t) {
    var e = Xt();
    return Zh(e, Dt, t);
  }
  function Zh(t, e, n) {
    if (e = xo(
      t,
      e,
      Gh
    )[0], t = fs(fn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = Ka(e);
      } catch (f) {
        throw f === Ki ? es : f;
      }
    else a = e;
    e = Xt();
    var s = e.queue, r = s.dispatch;
    return n !== e.memoizedState && (rt.flags |= 2048, Pi(
      9,
      { destroy: void 0 },
      kv.bind(null, s, n),
      null
    )), [a, r, t];
  }
  function kv(t, e) {
    t.action = e;
  }
  function Kh(t) {
    var e = Xt(), n = Dt;
    if (n !== null)
      return Zh(e, n, t);
    Xt(), e = e.memoizedState, n = Xt();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1];
  }
  function Pi(t, e, n, a) {
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = rt.updateQueue, e === null && (e = rs(), rt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Jh() {
    return Xt().memoizedState;
  }
  function hs(t, e, n, a) {
    var s = ue();
    rt.flags |= t, s.memoizedState = Pi(
      1 | e,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function ds(t, e, n, a) {
    var s = Xt();
    a = a === void 0 ? null : a;
    var r = s.memoizedState.inst;
    Dt !== null && a !== null && To(a, Dt.memoizedState.deps) ? s.memoizedState = Pi(e, r, n, a) : (rt.flags |= t, s.memoizedState = Pi(
      1 | e,
      r,
      n,
      a
    ));
  }
  function kh(t, e) {
    hs(8390656, 8, t, e);
  }
  function Ro(t, e) {
    ds(2048, 8, t, e);
  }
  function Fv(t) {
    rt.flags |= 4;
    var e = rt.updateQueue;
    if (e === null)
      e = rs(), rt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function Fh(t) {
    var e = Xt().memoizedState;
    return Fv({ ref: e, nextImpl: t }), function() {
      if ((bt & 2) !== 0) throw Error(o(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Wh(t, e) {
    return ds(4, 2, t, e);
  }
  function Ph(t, e) {
    return ds(4, 4, t, e);
  }
  function $h(t, e) {
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
  function Ih(t, e, n) {
    n = n != null ? n.concat([t]) : null, ds(4, 4, $h.bind(null, e, t), n);
  }
  function Vo() {
  }
  function td(t, e) {
    var n = Xt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && To(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function ed(t, e) {
    var n = Xt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && To(e, a[1]))
      return a[0];
    if (a = t(), yi) {
      En(!0);
      try {
        t();
      } finally {
        En(!1);
      }
    }
    return n.memoizedState = [a, e], a;
  }
  function _o(t, e, n) {
    return n === void 0 || (cn & 1073741824) !== 0 && (mt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = nm(), rt.lanes |= t, Ln |= t, n);
  }
  function nd(t, e, n, a) {
    return be(n, e) ? n : ki.current !== null ? (t = _o(t, n, a), be(t, e) || (Kt = !0), t) : (cn & 42) === 0 || (cn & 1073741824) !== 0 && (mt & 261930) === 0 ? (Kt = !0, t.memoizedState = n) : (t = nm(), rt.lanes |= t, Ln |= t, e);
  }
  function id(t, e, n, a, s) {
    var r = q.p;
    q.p = r !== 0 && 8 > r ? r : 8;
    var f = R.T, p = {};
    R.T = p, No(t, !1, e, n);
    try {
      var T = s(), x = R.S;
      if (x !== null && x(p, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var V = Qv(
          T,
          a
        );
        Ja(
          t,
          e,
          V,
          Ce(t)
        );
      } else
        Ja(
          t,
          e,
          a,
          Ce(t)
        );
    } catch (N) {
      Ja(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: N },
        Ce()
      );
    } finally {
      q.p = r, f !== null && p.types !== null && (f.types = p.types), R.T = f;
    }
  }
  function Wv() {
  }
  function Uo(t, e, n, a) {
    if (t.tag !== 5) throw Error(o(476));
    var s = ad(t).queue;
    id(
      t,
      s,
      e,
      X,
      n === null ? Wv : function() {
        return ld(t), n(a);
      }
    );
  }
  function ad(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: X
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
  function ld(t) {
    var e = ad(t);
    e.next === null && (e = t.alternate.memoizedState), Ja(
      t,
      e.next.queue,
      {},
      Ce()
    );
  }
  function Bo() {
    return ne(cl);
  }
  function sd() {
    return Xt().memoizedState;
  }
  function ud() {
    return Xt().memoizedState;
  }
  function Pv(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Ce();
          t = Vn(n);
          var a = _n(e, t, n);
          a !== null && (pe(a, e, n), Ga(a, e, n)), e = { cache: oo() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function $v(t, e, n) {
    var a = Ce();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ms(t) ? rd(e, n) : (n = Pu(t, e, n, a), n !== null && (pe(n, t, a), cd(n, e, a)));
  }
  function od(t, e, n) {
    var a = Ce();
    Ja(t, e, n, a);
  }
  function Ja(t, e, n, a) {
    var s = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ms(t)) rd(e, s);
    else {
      var r = t.alternate;
      if (t.lanes === 0 && (r === null || r.lanes === 0) && (r = e.lastRenderedReducer, r !== null))
        try {
          var f = e.lastRenderedState, p = r(f, n);
          if (s.hasEagerState = !0, s.eagerState = p, be(p, f))
            return kl(t, e, s, 0), Ot === null && Jl(), !1;
        } catch {
        }
      if (n = Pu(t, e, s, a), n !== null)
        return pe(n, t, a), cd(n, e, a), !0;
    }
    return !1;
  }
  function No(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: dr(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ms(t)) {
      if (e) throw Error(o(479));
    } else
      e = Pu(
        t,
        n,
        a,
        2
      ), e !== null && pe(e, t, 2);
  }
  function ms(t) {
    var e = t.alternate;
    return t === rt || e !== null && e === rt;
  }
  function rd(t, e) {
    Fi = us = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function cd(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, yf(t, n);
    }
  }
  var ka = {
    readContext: ne,
    use: cs,
    useCallback: Lt,
    useContext: Lt,
    useEffect: Lt,
    useImperativeHandle: Lt,
    useLayoutEffect: Lt,
    useInsertionEffect: Lt,
    useMemo: Lt,
    useReducer: Lt,
    useRef: Lt,
    useState: Lt,
    useDebugValue: Lt,
    useDeferredValue: Lt,
    useTransition: Lt,
    useSyncExternalStore: Lt,
    useId: Lt,
    useHostTransitionStatus: Lt,
    useFormState: Lt,
    useActionState: Lt,
    useOptimistic: Lt,
    useMemoCache: Lt,
    useCacheRefresh: Lt
  };
  ka.useEffectEvent = Lt;
  var fd = {
    readContext: ne,
    use: cs,
    useCallback: function(t, e) {
      return ue().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: ne,
    useEffect: kh,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, hs(
        4194308,
        4,
        $h.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return hs(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      hs(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = ue();
      e = e === void 0 ? null : e;
      var a = t();
      if (yi) {
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
        if (yi) {
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
      }, a.queue = t, t = t.dispatch = $v.bind(
        null,
        rt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = ue();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = zo(t);
      var e = t.queue, n = od.bind(null, rt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Vo,
    useDeferredValue: function(t, e) {
      var n = ue();
      return _o(n, t, e);
    },
    useTransition: function() {
      var t = zo(!1);
      return t = id.bind(
        null,
        rt,
        t.queue,
        !0,
        !1
      ), ue().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var a = rt, s = ue();
      if (gt) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = e(), Ot === null)
          throw Error(o(349));
        (mt & 127) !== 0 || _h(a, e, n);
      }
      s.memoizedState = n;
      var r = { value: n, getSnapshot: e };
      return s.queue = r, kh(Bh.bind(null, a, r, t), [
        t
      ]), a.flags |= 2048, Pi(
        9,
        { destroy: void 0 },
        Uh.bind(
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
      var t = ue(), e = Ot.identifierPrefix;
      if (gt) {
        var n = Fe, a = ke;
        n = (a & ~(1 << 32 - Te(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = os++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = Zv++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Bo,
    useFormState: Xh,
    useActionState: Xh,
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
      return e.queue = n, e = No.bind(
        null,
        rt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: Do,
    useCacheRefresh: function() {
      return ue().memoizedState = Pv.bind(
        null,
        rt
      );
    },
    useEffectEvent: function(t) {
      var e = ue(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((bt & 2) !== 0)
          throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, jo = {
    readContext: ne,
    use: cs,
    useCallback: td,
    useContext: ne,
    useEffect: Ro,
    useImperativeHandle: Ih,
    useInsertionEffect: Wh,
    useLayoutEffect: Ph,
    useMemo: ed,
    useReducer: fs,
    useRef: Jh,
    useState: function() {
      return fs(fn);
    },
    useDebugValue: Vo,
    useDeferredValue: function(t, e) {
      var n = Xt();
      return nd(
        n,
        Dt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = fs(fn)[0], e = Xt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ka(t),
        e
      ];
    },
    useSyncExternalStore: Vh,
    useId: sd,
    useHostTransitionStatus: Bo,
    useFormState: Qh,
    useActionState: Qh,
    useOptimistic: function(t, e) {
      var n = Xt();
      return Lh(n, Dt, t, e);
    },
    useMemoCache: Do,
    useCacheRefresh: ud
  };
  jo.useEffectEvent = Fh;
  var hd = {
    readContext: ne,
    use: cs,
    useCallback: td,
    useContext: ne,
    useEffect: Ro,
    useImperativeHandle: Ih,
    useInsertionEffect: Wh,
    useLayoutEffect: Ph,
    useMemo: ed,
    useReducer: Co,
    useRef: Jh,
    useState: function() {
      return Co(fn);
    },
    useDebugValue: Vo,
    useDeferredValue: function(t, e) {
      var n = Xt();
      return Dt === null ? _o(n, t, e) : nd(
        n,
        Dt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Co(fn)[0], e = Xt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ka(t),
        e
      ];
    },
    useSyncExternalStore: Vh,
    useId: sd,
    useHostTransitionStatus: Bo,
    useFormState: Kh,
    useActionState: Kh,
    useOptimistic: function(t, e) {
      var n = Xt();
      return Dt !== null ? Lh(n, Dt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: Do,
    useCacheRefresh: ud
  };
  hd.useEffectEvent = Fh;
  function Lo(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : S({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var wo = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = Ce(), s = Vn(a);
      s.payload = e, n != null && (s.callback = n), e = _n(t, s, a), e !== null && (pe(e, t, a), Ga(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = Ce(), s = Vn(a);
      s.tag = 1, s.payload = e, n != null && (s.callback = n), e = _n(t, s, a), e !== null && (pe(e, t, a), Ga(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Ce(), a = Vn(n);
      a.tag = 2, e != null && (a.callback = e), e = _n(t, a, n), e !== null && (pe(e, t, n), Ga(e, t, n));
    }
  };
  function dd(t, e, n, a, s, r, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, r, f) : e.prototype && e.prototype.isPureReactComponent ? !Ba(n, a) || !Ba(s, r) : !0;
  }
  function md(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && wo.enqueueReplaceState(e, e.state, null);
  }
  function pi(t, e) {
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
  function yd(t) {
    Kl(t);
  }
  function pd(t) {
    console.error(t);
  }
  function gd(t) {
    Kl(t);
  }
  function ys(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function vd(t, e, n) {
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
  function Ho(t, e, n) {
    return n = Vn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      ys(t, e);
    }, n;
  }
  function Sd(t) {
    return t = Vn(t), t.tag = 3, t;
  }
  function Td(t, e, n, a) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = a.value;
      t.payload = function() {
        return s(r);
      }, t.callback = function() {
        vd(e, n, a);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      vd(e, n, a), typeof s != "function" && (wn === null ? wn = /* @__PURE__ */ new Set([this]) : wn.add(this));
      var p = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: p !== null ? p : ""
      });
    });
  }
  function Iv(t, e, n, a, s) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = n.alternate, e !== null && Xi(
        e,
        n,
        s,
        !0
      ), n = Ee.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return je === null ? Cs() : n.alternate === null && wt === 0 && (wt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, a === ns ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), cr(t, a, s)), !1;
          case 22:
            return n.flags |= 65536, a === ns ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), cr(t, a, s)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return cr(t, a, s), Cs(), !1;
    }
    if (gt)
      return e = Ee.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = s, a !== io && (t = Error(o(422), { cause: a }), La(_e(t, n)))) : (a !== io && (e = Error(o(423), {
        cause: a
      }), La(
        _e(e, n)
      )), t = t.current.alternate, t.flags |= 65536, s &= -s, t.lanes |= s, a = _e(a, n), s = Ho(
        t.stateNode,
        a,
        s
      ), yo(t, s), wt !== 4 && (wt = 2)), !1;
    var r = Error(o(520), { cause: a });
    if (r = _e(r, n), nl === null ? nl = [r] : nl.push(r), wt !== 4 && (wt = 2), e === null) return !0;
    a = _e(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = s & -s, n.lanes |= t, t = Ho(n.stateNode, a, t), yo(n, t), !1;
        case 1:
          if (e = n.type, r = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (wn === null || !wn.has(r))))
            return n.flags |= 65536, s &= -s, n.lanes |= s, s = Sd(s), Td(
              s,
              t,
              n,
              a
            ), yo(n, s), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Yo = Error(o(461)), Kt = !1;
  function ie(t, e, n, a) {
    e.child = t === null ? Mh(e, null, n, a) : mi(
      e,
      t.child,
      n,
      a
    );
  }
  function bd(t, e, n, a, s) {
    n = n.render;
    var r = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var p in a)
        p !== "ref" && (f[p] = a[p]);
    } else f = a;
    return ci(e), a = bo(
      t,
      e,
      n,
      f,
      r,
      s
    ), p = Ao(), t !== null && !Kt ? (Eo(t, e, s), hn(t, e, s)) : (gt && p && eo(e), e.flags |= 1, ie(t, e, a, s), e.child);
  }
  function Ad(t, e, n, a, s) {
    if (t === null) {
      var r = n.type;
      return typeof r == "function" && !$u(r) && r.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = r, Ed(
        t,
        e,
        r,
        a,
        s
      )) : (t = Wl(
        n.type,
        null,
        a,
        e,
        e.mode,
        s
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (r = t.child, !ko(t, s)) {
      var f = r.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ba, n(f, a) && t.ref === e.ref)
        return hn(t, e, s);
    }
    return e.flags |= 1, t = sn(r, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Ed(t, e, n, a, s) {
    if (t !== null) {
      var r = t.memoizedProps;
      if (Ba(r, a) && t.ref === e.ref)
        if (Kt = !1, e.pendingProps = a = r, ko(t, s))
          (t.flags & 131072) !== 0 && (Kt = !0);
        else
          return e.lanes = t.lanes, hn(t, e, s);
    }
    return qo(
      t,
      e,
      n,
      a,
      s
    );
  }
  function Md(t, e, n, a) {
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
        return Dd(
          t,
          e,
          r,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && ts(
          e,
          r !== null ? r.cachePool : null
        ), r !== null ? Ch(e, r) : go(), zh(e);
      else
        return a = e.lanes = 536870912, Dd(
          t,
          e,
          r !== null ? r.baseLanes | n : n,
          n,
          a
        );
    } else
      r !== null ? (ts(e, r.cachePool), Ch(e, r), Bn(), e.memoizedState = null) : (t !== null && ts(e, null), go(), Bn());
    return ie(t, e, s, n), e.child;
  }
  function Fa(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Dd(t, e, n, a, s) {
    var r = co();
    return r = r === null ? null : { parent: Qt._currentValue, pool: r }, e.memoizedState = {
      baseLanes: n,
      cachePool: r
    }, t !== null && ts(e, null), go(), zh(e), t !== null && Xi(t, e, a, !0), e.childLanes = s, null;
  }
  function ps(t, e) {
    return e = vs(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function xd(t, e, n) {
    return mi(e, t.child, null, n), t = ps(e, e.pendingProps), t.flags |= 2, Me(e), e.memoizedState = null, t;
  }
  function t1(t, e, n) {
    var a = e.pendingProps, s = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (gt) {
        if (a.mode === "hidden")
          return t = ps(e, a), e.lanes = 536870912, Fa(null, t);
        if (So(e), (t = Vt) ? (t = wm(
          t,
          Ne
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: xn !== null ? { id: ke, overflow: Fe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = rh(t), n.return = e, e.child = n, ee = e, Vt = null)) : t = null, t === null) throw zn(e);
        return e.lanes = 536870912, null;
      }
      return ps(e, a);
    }
    var r = t.memoizedState;
    if (r !== null) {
      var f = r.dehydrated;
      if (So(e), s)
        if (e.flags & 256)
          e.flags &= -257, e = xd(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(o(558));
      else if (Kt || Xi(t, e, n, !1), s = (n & t.childLanes) !== 0, Kt || s) {
        if (a = Ot, a !== null && (f = pf(a, n), f !== 0 && f !== r.retryLane))
          throw r.retryLane = f, si(t, f), pe(a, t, f), Yo;
        Cs(), e = xd(
          t,
          e,
          n
        );
      } else
        t = r.treeContext, Vt = Le(f.nextSibling), ee = e, gt = !0, Cn = null, Ne = !1, t !== null && hh(e, t), e = ps(e, a), e.flags |= 4096;
      return e;
    }
    return t = sn(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function gs(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(o(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function qo(t, e, n, a, s) {
    return ci(e), n = bo(
      t,
      e,
      n,
      a,
      void 0,
      s
    ), a = Ao(), t !== null && !Kt ? (Eo(t, e, s), hn(t, e, s)) : (gt && a && eo(e), e.flags |= 1, ie(t, e, n, s), e.child);
  }
  function Cd(t, e, n, a, s, r) {
    return ci(e), e.updateQueue = null, n = Rh(
      e,
      a,
      n,
      s
    ), Oh(t), a = Ao(), t !== null && !Kt ? (Eo(t, e, r), hn(t, e, r)) : (gt && a && eo(e), e.flags |= 1, ie(t, e, n, r), e.child);
  }
  function zd(t, e, n, a, s) {
    if (ci(e), e.stateNode === null) {
      var r = Hi, f = n.contextType;
      typeof f == "object" && f !== null && (r = ne(f)), r = new n(a, r), e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = wo, e.stateNode = r, r._reactInternals = e, r = e.stateNode, r.props = a, r.state = e.memoizedState, r.refs = {}, ho(e), f = n.contextType, r.context = typeof f == "object" && f !== null ? ne(f) : Hi, r.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (Lo(
        e,
        n,
        f,
        a
      ), r.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (f = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), f !== r.state && wo.enqueueReplaceState(r, r.state, null), Qa(e, a, r, s), Xa(), r.state = e.memoizedState), typeof r.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      r = e.stateNode;
      var p = e.memoizedProps, T = pi(n, p);
      r.props = T;
      var x = r.context, V = n.contextType;
      f = Hi, typeof V == "object" && V !== null && (f = ne(V));
      var N = n.getDerivedStateFromProps;
      V = typeof N == "function" || typeof r.getSnapshotBeforeUpdate == "function", p = e.pendingProps !== p, V || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (p || x !== f) && md(
        e,
        r,
        a,
        f
      ), Rn = !1;
      var C = e.memoizedState;
      r.state = C, Qa(e, a, r, s), Xa(), x = e.memoizedState, p || C !== x || Rn ? (typeof N == "function" && (Lo(
        e,
        n,
        N,
        a
      ), x = e.memoizedState), (T = Rn || dd(
        e,
        n,
        T,
        a,
        C,
        x,
        f
      )) ? (V || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = x), r.props = a, r.state = x, r.context = f, a = T) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      r = e.stateNode, mo(t, e), f = e.memoizedProps, V = pi(n, f), r.props = V, N = e.pendingProps, C = r.context, x = n.contextType, T = Hi, typeof x == "object" && x !== null && (T = ne(x)), p = n.getDerivedStateFromProps, (x = typeof p == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (f !== N || C !== T) && md(
        e,
        r,
        a,
        T
      ), Rn = !1, C = e.memoizedState, r.state = C, Qa(e, a, r, s), Xa();
      var O = e.memoizedState;
      f !== N || C !== O || Rn || t !== null && t.dependencies !== null && $l(t.dependencies) ? (typeof p == "function" && (Lo(
        e,
        n,
        p,
        a
      ), O = e.memoizedState), (V = Rn || dd(
        e,
        n,
        V,
        a,
        C,
        O,
        T
      ) || t !== null && t.dependencies !== null && $l(t.dependencies)) ? (x || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(a, O, T), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        a,
        O,
        T
      )), typeof r.componentDidUpdate == "function" && (e.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || f === t.memoizedProps && C === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && C === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = O), r.props = a, r.state = O, r.context = T, a = V) : (typeof r.componentDidUpdate != "function" || f === t.memoizedProps && C === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && C === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return r = a, gs(t, e), a = (e.flags & 128) !== 0, r || a ? (r = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : r.render(), e.flags |= 1, t !== null && a ? (e.child = mi(
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
  function Od(t, e, n, a) {
    return oi(), e.flags |= 256, ie(t, e, n, a), e.child;
  }
  var Go = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Xo(t) {
    return { baseLanes: t, cachePool: vh() };
  }
  function Qo(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= xe), t;
  }
  function Rd(t, e, n) {
    var a = e.pendingProps, s = !1, r = (e.flags & 128) !== 0, f;
    if ((f = r) || (f = t !== null && t.memoizedState === null ? !1 : (Gt.current & 2) !== 0), f && (s = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (gt) {
        if (s ? Un(e) : Bn(), (t = Vt) ? (t = wm(
          t,
          Ne
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: xn !== null ? { id: ke, overflow: Fe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = rh(t), n.return = e, e.child = n, ee = e, Vt = null)) : t = null, t === null) throw zn(e);
        return xr(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var p = a.children;
      return a = a.fallback, s ? (Bn(), s = e.mode, p = vs(
        { mode: "hidden", children: p },
        s
      ), a = ui(
        a,
        s,
        n,
        null
      ), p.return = e, a.return = e, p.sibling = a, e.child = p, a = e.child, a.memoizedState = Xo(n), a.childLanes = Qo(
        t,
        f,
        n
      ), e.memoizedState = Go, Fa(null, a)) : (Un(e), Zo(e, p));
    }
    var T = t.memoizedState;
    if (T !== null && (p = T.dehydrated, p !== null)) {
      if (r)
        e.flags & 256 ? (Un(e), e.flags &= -257, e = Ko(
          t,
          e,
          n
        )) : e.memoizedState !== null ? (Bn(), e.child = t.child, e.flags |= 128, e = null) : (Bn(), p = a.fallback, s = e.mode, a = vs(
          { mode: "visible", children: a.children },
          s
        ), p = ui(
          p,
          s,
          n,
          null
        ), p.flags |= 2, a.return = e, p.return = e, a.sibling = p, e.child = a, mi(
          e,
          t.child,
          null,
          n
        ), a = e.child, a.memoizedState = Xo(n), a.childLanes = Qo(
          t,
          f,
          n
        ), e.memoizedState = Go, e = Fa(null, a));
      else if (Un(e), xr(p)) {
        if (f = p.nextSibling && p.nextSibling.dataset, f) var x = f.dgst;
        f = x, a = Error(o(419)), a.stack = "", a.digest = f, La({ value: a, source: null, stack: null }), e = Ko(
          t,
          e,
          n
        );
      } else if (Kt || Xi(t, e, n, !1), f = (n & t.childLanes) !== 0, Kt || f) {
        if (f = Ot, f !== null && (a = pf(f, n), a !== 0 && a !== T.retryLane))
          throw T.retryLane = a, si(t, a), pe(f, t, a), Yo;
        Dr(p) || Cs(), e = Ko(
          t,
          e,
          n
        );
      } else
        Dr(p) ? (e.flags |= 192, e.child = t.child, e = null) : (t = T.treeContext, Vt = Le(
          p.nextSibling
        ), ee = e, gt = !0, Cn = null, Ne = !1, t !== null && hh(e, t), e = Zo(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return s ? (Bn(), p = a.fallback, s = e.mode, T = t.child, x = T.sibling, a = sn(T, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = T.subtreeFlags & 65011712, x !== null ? p = sn(
      x,
      p
    ) : (p = ui(
      p,
      s,
      n,
      null
    ), p.flags |= 2), p.return = e, a.return = e, a.sibling = p, e.child = a, Fa(null, a), a = e.child, p = t.child.memoizedState, p === null ? p = Xo(n) : (s = p.cachePool, s !== null ? (T = Qt._currentValue, s = s.parent !== T ? { parent: T, pool: T } : s) : s = vh(), p = {
      baseLanes: p.baseLanes | n,
      cachePool: s
    }), a.memoizedState = p, a.childLanes = Qo(
      t,
      f,
      n
    ), e.memoizedState = Go, Fa(t.child, a)) : (Un(e), n = t.child, t = n.sibling, n = sn(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Zo(t, e) {
    return e = vs(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function vs(t, e) {
    return t = Ae(22, t, null, e), t.lanes = 0, t;
  }
  function Ko(t, e, n) {
    return mi(e, t.child, null, n), t = Zo(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Vd(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), so(t.return, e, n);
  }
  function Jo(t, e, n, a, s, r) {
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
  function _d(t, e, n) {
    var a = e.pendingProps, s = a.revealOrder, r = a.tail;
    a = a.children;
    var f = Gt.current, p = (f & 2) !== 0;
    if (p ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, Q(Gt, f), ie(t, e, a, n), a = gt ? ja : 0, !p && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Vd(t, n, e);
        else if (t.tag === 19)
          Vd(t, n, e);
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
          t = n.alternate, t !== null && ss(t) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null), Jo(
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
          if (t = s.alternate, t !== null && ss(t) === null) {
            e.child = s;
            break;
          }
          t = s.sibling, s.sibling = n, n = s, s = t;
        }
        Jo(
          e,
          !0,
          n,
          null,
          r,
          a
        );
        break;
      case "together":
        Jo(
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
        if (Xi(
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
  function ko(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && $l(t)));
  }
  function e1(t, e, n) {
    switch (e.tag) {
      case 3:
        qt(e, e.stateNode.containerInfo), On(e, Qt, t.memoizedState.cache), oi();
        break;
      case 27:
      case 5:
        An(e);
        break;
      case 4:
        qt(e, e.stateNode.containerInfo);
        break;
      case 10:
        On(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, So(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Un(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? Rd(t, e, n) : (Un(e), t = hn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        Un(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (a = (n & e.childLanes) !== 0, a || (Xi(
          t,
          e,
          n,
          !1
        ), a = (n & e.childLanes) !== 0), s) {
          if (a)
            return _d(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (s = e.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Q(Gt, Gt.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, Md(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        On(e, Qt, t.memoizedState.cache);
    }
    return hn(t, e, n);
  }
  function Ud(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Kt = !0;
      else {
        if (!ko(t, n) && (e.flags & 128) === 0)
          return Kt = !1, e1(
            t,
            e,
            n
          );
        Kt = (t.flags & 131072) !== 0;
      }
    else
      Kt = !1, gt && (e.flags & 1048576) !== 0 && fh(e, ja, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = hi(e.elementType), e.type = t, typeof t == "function")
            $u(t) ? (a = pi(t, a), e.tag = 1, e = zd(
              null,
              e,
              t,
              a,
              n
            )) : (e.tag = 0, e = qo(
              null,
              e,
              t,
              a,
              n
            ));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === G) {
                e.tag = 11, e = bd(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (s === Z) {
                e.tag = 14, e = Ad(
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
        return qo(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return a = e.type, s = pi(
          a,
          e.pendingProps
        ), zd(
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
          s = r.element, mo(t, e), Qa(e, a, null, n);
          var f = e.memoizedState;
          if (a = f.cache, On(e, Qt, a), a !== r.cache && uo(
            e,
            [Qt],
            n,
            !0
          ), Xa(), a = f.element, r.isDehydrated)
            if (r = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, e.updateQueue.baseState = r, e.memoizedState = r, e.flags & 256) {
              e = Od(
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
              ), La(s), e = Od(
                t,
                e,
                a,
                n
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Vt = Le(t.firstChild), ee = e, gt = !0, Cn = null, Ne = !0, n = Mh(
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
        return gs(t, e), t === null ? (n = Qm(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : gt || (n = e.type, t = e.pendingProps, a = Bs(
          st.current
        ).createElement(n), a[te] = e, a[ce] = t, ae(a, n, t), $t(a), e.stateNode = a) : e.memoizedState = Qm(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return An(e), t === null && gt && (a = e.stateNode = qm(
          e.type,
          e.pendingProps,
          st.current
        ), ee = e, Ne = !0, s = Vt, Gn(e.type) ? (Cr = s, Vt = Le(a.firstChild)) : Vt = s), ie(
          t,
          e,
          e.pendingProps.children,
          n
        ), gs(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && gt && ((s = a = Vt) && (a = V1(
          a,
          e.type,
          e.pendingProps,
          Ne
        ), a !== null ? (e.stateNode = a, ee = e, Vt = Le(a.firstChild), Ne = !1, s = !0) : s = !1), s || zn(e)), An(e), s = e.type, r = e.pendingProps, f = t !== null ? t.memoizedProps : null, a = r.children, Ar(s, r) ? a = null : f !== null && Ar(s, f) && (e.flags |= 32), e.memoizedState !== null && (s = bo(
          t,
          e,
          Kv,
          null,
          null,
          n
        ), cl._currentValue = s), gs(t, e), ie(t, e, a, n), e.child;
      case 6:
        return t === null && gt && ((t = n = Vt) && (n = _1(
          n,
          e.pendingProps,
          Ne
        ), n !== null ? (e.stateNode = n, ee = e, Vt = null, t = !0) : t = !1), t || zn(e)), null;
      case 13:
        return Rd(t, e, n);
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
        return bd(
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
        return a = e.pendingProps, On(e, e.type, a.value), ie(t, e, a.children, n), e.child;
      case 9:
        return s = e.type._context, a = e.pendingProps.children, ci(e), s = ne(s), a = a(s), e.flags |= 1, ie(t, e, a, n), e.child;
      case 14:
        return Ad(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return Ed(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return _d(t, e, n);
      case 31:
        return t1(t, e, n);
      case 22:
        return Md(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return ci(e), a = ne(Qt), t === null ? (s = co(), s === null && (s = Ot, r = oo(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= n), s = r), e.memoizedState = { parent: a, cache: s }, ho(e), On(e, Qt, s)) : ((t.lanes & n) !== 0 && (mo(t, e), Qa(e, null, null, n), Xa()), s = t.memoizedState, r = e.memoizedState, s.parent !== a ? (s = { parent: a, cache: a }, e.memoizedState = s, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s), On(e, Qt, a)) : (a = r.cache, On(e, Qt, a), a !== s.cache && uo(
          e,
          [Qt],
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
  function Fo(t, e, n, a, s) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (s & 335544128) === s)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (sm()) t.flags |= 8192;
        else
          throw di = ns, fo;
    } else t.flags &= -16777217;
  }
  function Bd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Fm(e))
      if (sm()) t.flags |= 8192;
      else
        throw di = ns, fo;
  }
  function Ss(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? df() : 536870912, t.lanes |= e, ea |= e);
  }
  function Wa(t, e) {
    if (!gt)
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
  function n1(t, e, n) {
    var a = e.pendingProps;
    switch (no(e), e.tag) {
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
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), rn(Qt), Nt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Gi(e) ? dn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, ao())), _t(e), null;
      case 26:
        var s = e.type, r = e.memoizedState;
        return t === null ? (dn(e), r !== null ? (_t(e), Bd(e, r)) : (_t(e), Fo(
          e,
          s,
          null,
          a,
          n
        ))) : r ? r !== t.memoizedState ? (dn(e), _t(e), Bd(e, r)) : (_t(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && dn(e), _t(e), Fo(
          e,
          s,
          t,
          a,
          n
        )), null;
      case 27:
        if (In(e), n = st.current, s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && dn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(o(166));
            return _t(e), null;
          }
          t = K.current, Gi(e) ? dh(e) : (t = qm(s, a, n), e.stateNode = t, dn(e));
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
          if (r = K.current, Gi(e))
            dh(e);
          else {
            var f = Bs(
              st.current
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
        return _t(e), Fo(
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
          if (t = st.current, Gi(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, s = ee, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  a = s.memoizedProps;
              }
            t[te] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Rm(t.nodeValue, n)), t || zn(e, !0);
          } else
            t = Bs(t).createTextNode(
              a
            ), t[te] = e, e.stateNode = t;
        }
        return _t(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Gi(e), n !== null) {
            if (t === null) {
              if (!a) throw Error(o(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557));
              t[te] = e;
            } else
              oi(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            _t(e), t = !1;
          } else
            n = ao(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (Me(e), e) : (Me(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(o(558));
        }
        return _t(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (s = Gi(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!s) throw Error(o(318));
              if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(o(317));
              s[te] = e;
            } else
              oi(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            _t(e), s = !1;
          } else
            s = ao(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return e.flags & 256 ? (Me(e), e) : (Me(e), null);
        }
        return Me(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, s = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (s = a.alternate.memoizedState.cachePool.pool), r = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (r = a.memoizedState.cachePool.pool), r !== s && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), Ss(e, e.updateQueue), _t(e), null);
      case 4:
        return Nt(), t === null && gr(e.stateNode.containerInfo), _t(e), null;
      case 10:
        return rn(e.type), _t(e), null;
      case 19:
        if (B(Gt), a = e.memoizedState, a === null) return _t(e), null;
        if (s = (e.flags & 128) !== 0, r = a.rendering, r === null)
          if (s) Wa(a, !1);
          else {
            if (wt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (r = ss(t), r !== null) {
                  for (e.flags |= 128, Wa(a, !1), t = r.updateQueue, e.updateQueue = t, Ss(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    oh(n, t), n = n.sibling;
                  return Q(
                    Gt,
                    Gt.current & 1 | 2
                  ), gt && un(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && ve() > Ms && (e.flags |= 128, s = !0, Wa(a, !1), e.lanes = 4194304);
          }
        else {
          if (!s)
            if (t = ss(r), t !== null) {
              if (e.flags |= 128, s = !0, t = t.updateQueue, e.updateQueue = t, Ss(e, t), Wa(a, !0), a.tail === null && a.tailMode === "hidden" && !r.alternate && !gt)
                return _t(e), null;
            } else
              2 * ve() - a.renderingStartTime > Ms && n !== 536870912 && (e.flags |= 128, s = !0, Wa(a, !1), e.lanes = 4194304);
          a.isBackwards ? (r.sibling = e.child, e.child = r) : (t = a.last, t !== null ? t.sibling = r : e.child = r, a.last = r);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ve(), t.sibling = null, n = Gt.current, Q(
          Gt,
          s ? n & 1 | 2 : n & 1
        ), gt && un(e, a.treeForkCount), t) : (_t(e), null);
      case 22:
      case 23:
        return Me(e), vo(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (_t(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : _t(e), n = e.updateQueue, n !== null && Ss(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && B(fi), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), rn(Qt), _t(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function i1(t, e) {
    switch (no(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return rn(Qt), Nt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
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
        return B(Gt), null;
      case 4:
        return Nt(), null;
      case 10:
        return rn(e.type), null;
      case 22:
      case 23:
        return Me(e), vo(), t !== null && B(fi), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return rn(Qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Nd(t, e) {
    switch (no(e), e.tag) {
      case 3:
        rn(Qt), Nt();
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
        B(Gt);
        break;
      case 10:
        rn(e.type);
        break;
      case 22:
      case 23:
        Me(e), vo(), t !== null && B(fi);
        break;
      case 24:
        rn(Qt);
    }
  }
  function Pa(t, e) {
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
    } catch (p) {
      Mt(e, e.return, p);
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
            var f = a.inst, p = f.destroy;
            if (p !== void 0) {
              f.destroy = void 0, s = e;
              var T = n, x = p;
              try {
                x();
              } catch (V) {
                Mt(
                  s,
                  T,
                  V
                );
              }
            }
          }
          a = a.next;
        } while (a !== r);
      }
    } catch (V) {
      Mt(e, e.return, V);
    }
  }
  function jd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        xh(e, n);
      } catch (a) {
        Mt(t, t.return, a);
      }
    }
  }
  function Ld(t, e, n) {
    n.props = pi(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Mt(t, e, a);
    }
  }
  function $a(t, e) {
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
  function wd(t) {
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
  function Wo(t, e, n) {
    try {
      var a = t.stateNode;
      D1(a, t.type, n, e), a[ce] = e;
    } catch (s) {
      Mt(t, t.return, s);
    }
  }
  function Hd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Gn(t.type) || t.tag === 4;
  }
  function Po(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Hd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Gn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function $o(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = an));
    else if (a !== 4 && (a === 27 && Gn(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
      for ($o(t, e, n), t = t.sibling; t !== null; )
        $o(t, e, n), t = t.sibling;
  }
  function Ts(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (a !== 4 && (a === 27 && Gn(t.type) && (n = t.stateNode), t = t.child, t !== null))
      for (Ts(t, e, n), t = t.sibling; t !== null; )
        Ts(t, e, n), t = t.sibling;
  }
  function Yd(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var a = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      ae(e, a, n), e[te] = t, e[ce] = n;
    } catch (r) {
      Mt(t, t.return, r);
    }
  }
  var mn = !1, Jt = !1, Io = !1, qd = typeof WeakSet == "function" ? WeakSet : Set, It = null;
  function a1(t, e) {
    if (t = t.containerInfo, Tr = qs, t = If(t), Zu(t)) {
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
            var f = 0, p = -1, T = -1, x = 0, V = 0, N = t, C = null;
            e: for (; ; ) {
              for (var O; N !== n || s !== 0 && N.nodeType !== 3 || (p = f + s), N !== r || a !== 0 && N.nodeType !== 3 || (T = f + a), N.nodeType === 3 && (f += N.nodeValue.length), (O = N.firstChild) !== null; )
                C = N, N = O;
              for (; ; ) {
                if (N === t) break e;
                if (C === n && ++x === s && (p = f), C === r && ++V === a && (T = f), (O = N.nextSibling) !== null) break;
                N = C, C = N.parentNode;
              }
              N = O;
            }
            n = p === -1 || T === -1 ? null : { start: p, end: T };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (br = { focusedElem: t, selectionRange: n }, qs = !1, It = e; It !== null; )
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
                  var J = pi(
                    n.type,
                    s
                  );
                  t = a.getSnapshotBeforeUpdate(
                    J,
                    r
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (tt) {
                  Mt(
                    n,
                    n.return,
                    tt
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9)
                  Mr(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Mr(t);
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
  function Gd(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        pn(t, n), a & 4 && Pa(5, n);
        break;
      case 1:
        if (pn(t, n), a & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (f) {
              Mt(n, n.return, f);
            }
          else {
            var s = pi(
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
        a & 64 && jd(n), a & 512 && $a(n, n.return);
        break;
      case 3:
        if (pn(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
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
            xh(t, e);
          } catch (f) {
            Mt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Yd(n);
      case 26:
      case 5:
        pn(t, n), e === null && a & 4 && wd(n), a & 512 && $a(n, n.return);
        break;
      case 12:
        pn(t, n);
        break;
      case 31:
        pn(t, n), a & 4 && Zd(t, n);
        break;
      case 13:
        pn(t, n), a & 4 && Kd(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = d1.bind(
          null,
          n
        ), U1(t, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || mn, !a) {
          e = e !== null && e.memoizedState !== null || Jt, s = mn;
          var r = Jt;
          mn = a, (Jt = e) && !r ? gn(
            t,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : pn(t, n), mn = s, Jt = r;
        }
        break;
      case 30:
        break;
      default:
        pn(t, n);
    }
  }
  function Xd(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Xd(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && zu(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var jt = null, he = !1;
  function yn(t, e, n) {
    for (n = n.child; n !== null; )
      Qd(t, e, n), n = n.sibling;
  }
  function Qd(t, e, n) {
    if (Se && typeof Se.onCommitFiberUnmount == "function")
      try {
        Se.onCommitFiberUnmount(Aa, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Jt || We(n, e), yn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Jt || We(n, e);
        var a = jt, s = he;
        Gn(n.type) && (jt = n.stateNode, he = !1), yn(
          t,
          e,
          n
        ), ul(n.stateNode), jt = a, he = s;
        break;
      case 5:
        Jt || We(n, e);
      case 6:
        if (a = jt, s = he, jt = null, yn(
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
        jt !== null && (he ? (t = jt, jm(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), ra(t)) : jm(jt, n.stateNode));
        break;
      case 4:
        a = jt, s = he, jt = n.stateNode.containerInfo, he = !0, yn(
          t,
          e,
          n
        ), jt = a, he = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Nn(2, n, e), Jt || Nn(4, n, e), yn(
          t,
          e,
          n
        );
        break;
      case 1:
        Jt || (We(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && Ld(
          n,
          e,
          a
        )), yn(
          t,
          e,
          n
        );
        break;
      case 21:
        yn(
          t,
          e,
          n
        );
        break;
      case 22:
        Jt = (a = Jt) || n.memoizedState !== null, yn(
          t,
          e,
          n
        ), Jt = a;
        break;
      default:
        yn(
          t,
          e,
          n
        );
    }
  }
  function Zd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        ra(t);
      } catch (n) {
        Mt(e, e.return, n);
      }
    }
  }
  function Kd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        ra(t);
      } catch (n) {
        Mt(e, e.return, n);
      }
  }
  function l1(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new qd()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new qd()), e;
      default:
        throw Error(o(435, t.tag));
    }
  }
  function bs(t, e) {
    var n = l1(t);
    e.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var s = m1.bind(null, t, a);
        a.then(s, s);
      }
    });
  }
  function de(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a], r = t, f = e, p = f;
        t: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
              if (Gn(p.type)) {
                jt = p.stateNode, he = !1;
                break t;
              }
              break;
            case 5:
              jt = p.stateNode, he = !1;
              break t;
            case 3:
            case 4:
              jt = p.stateNode.containerInfo, he = !0;
              break t;
          }
          p = p.return;
        }
        if (jt === null) throw Error(o(160));
        Qd(r, f, s), jt = null, he = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Jd(e, t), e = e.sibling;
  }
  var Ge = null;
  function Jd(t, e) {
    var n = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        de(e, t), me(t), a & 4 && (Nn(3, t, t.return), Pa(3, t), Nn(5, t, t.return));
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
                      r = s.getElementsByTagName("title")[0], (!r || r[Da] || r[te] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(a), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), ae(r, a, n), r[te] = t, $t(r), a = r;
                      break t;
                    case "link":
                      var f = Jm(
                        "link",
                        "href",
                        s
                      ).get(a + (n.href || ""));
                      if (f) {
                        for (var p = 0; p < f.length; p++)
                          if (r = f[p], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            f.splice(p, 1);
                            break e;
                          }
                      }
                      r = s.createElement(a), ae(r, a, n), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (f = Jm(
                        "meta",
                        "content",
                        s
                      ).get(a + (n.content || ""))) {
                        for (p = 0; p < f.length; p++)
                          if (r = f[p], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            f.splice(p, 1);
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
                km(
                  s,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Km(
                s,
                a,
                t.memoizedProps
              );
          else
            r !== a ? (r === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : r.count--, a === null ? km(
              s,
              t.type,
              t.stateNode
            ) : Km(
              s,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Wo(
              t,
              t.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        de(e, t), me(t), a & 512 && (Jt || n === null || We(n, n.return)), n !== null && a & 4 && Wo(
          t,
          t.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (de(e, t), me(t), a & 512 && (Jt || n === null || We(n, n.return)), t.flags & 32) {
          s = t.stateNode;
          try {
            _i(s, "");
          } catch (J) {
            Mt(t, t.return, J);
          }
        }
        a & 4 && t.stateNode != null && (s = t.memoizedProps, Wo(
          t,
          s,
          n !== null ? n.memoizedProps : s
        )), a & 1024 && (Io = !0);
        break;
      case 6:
        if (de(e, t), me(t), a & 4) {
          if (t.stateNode === null)
            throw Error(o(162));
          a = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = a;
          } catch (J) {
            Mt(t, t.return, J);
          }
        }
        break;
      case 3:
        if (Ls = null, s = Ge, Ge = Ns(e.containerInfo), de(e, t), Ge = s, me(t), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            ra(e.containerInfo);
          } catch (J) {
            Mt(t, t.return, J);
          }
        Io && (Io = !1, kd(t));
        break;
      case 4:
        a = Ge, Ge = Ns(
          t.stateNode.containerInfo
        ), de(e, t), me(t), Ge = a;
        break;
      case 12:
        de(e, t), me(t);
        break;
      case 31:
        de(e, t), me(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, bs(t, a)));
        break;
      case 13:
        de(e, t), me(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Es = ve()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, bs(t, a)));
        break;
      case 22:
        s = t.memoizedState !== null;
        var T = n !== null && n.memoizedState !== null, x = mn, V = Jt;
        if (mn = x || s, Jt = V || T, de(e, t), Jt = V, mn = x, me(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = s ? e._visibility & -2 : e._visibility | 1, s && (n === null || T || mn || Jt || gi(t)), n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                T = n = e;
                try {
                  if (r = T.stateNode, s)
                    f = r.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    p = T.stateNode;
                    var N = T.memoizedProps.style, C = N != null && N.hasOwnProperty("display") ? N.display : null;
                    p.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (J) {
                  Mt(T, T.return, J);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                T = e;
                try {
                  T.stateNode.nodeValue = s ? "" : T.memoizedProps;
                } catch (J) {
                  Mt(T, T.return, J);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                T = e;
                try {
                  var O = T.stateNode;
                  s ? Lm(O, !0) : Lm(T.stateNode, !1);
                } catch (J) {
                  Mt(T, T.return, J);
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
        a & 4 && (a = t.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, bs(t, n))));
        break;
      case 19:
        de(e, t), me(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, bs(t, a)));
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
          if (Hd(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode, r = Po(t);
            Ts(t, r, s);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (_i(f, ""), n.flags &= -33);
            var p = Po(t);
            Ts(t, p, f);
            break;
          case 3:
          case 4:
            var T = n.stateNode.containerInfo, x = Po(t);
            $o(
              t,
              x,
              T
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (V) {
        Mt(t, t.return, V);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function kd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        kd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function pn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Gd(t, e.alternate, e), e = e.sibling;
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
          typeof n.componentWillUnmount == "function" && Ld(
            e,
            e.return,
            n
          ), gi(e);
          break;
        case 27:
          ul(e.stateNode);
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
          ), Pa(4, r);
          break;
        case 1:
          if (gn(
            s,
            r,
            n
          ), a = r, s = a.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (x) {
              Mt(a, a.return, x);
            }
          if (a = r, s = a.updateQueue, s !== null) {
            var p = a.stateNode;
            try {
              var T = s.shared.hiddenCallbacks;
              if (T !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++)
                  Dh(T[s], p);
            } catch (x) {
              Mt(a, a.return, x);
            }
          }
          n && f & 64 && jd(r), $a(r, r.return);
          break;
        case 27:
          Yd(r);
        case 26:
        case 5:
          gn(
            s,
            r,
            n
          ), n && a === null && f & 4 && wd(r), $a(r, r.return);
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
          ), n && f & 4 && Zd(s, r);
          break;
        case 13:
          gn(
            s,
            r,
            n
          ), n && f & 4 && Kd(s, r);
          break;
        case 22:
          r.memoizedState === null && gn(
            s,
            r,
            n
          ), $a(r, r.return);
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
  function tr(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && wa(n));
  }
  function er(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && wa(t));
  }
  function Xe(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Fd(
          t,
          e,
          n,
          a
        ), e = e.sibling;
  }
  function Fd(t, e, n, a) {
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
        ), s & 2048 && Pa(9, e);
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
        ), s & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && wa(t)));
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
            var r = e.memoizedProps, f = r.id, p = r.onPostCommit;
            typeof p == "function" && p(
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
        ) : Ia(t, e) : r._visibility & 2 ? Xe(
          t,
          e,
          n,
          a
        ) : (r._visibility |= 2, $i(
          t,
          e,
          n,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && tr(f, e);
        break;
      case 24:
        Xe(
          t,
          e,
          n,
          a
        ), s & 2048 && er(e.alternate, e);
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
  function $i(t, e, n, a, s) {
    for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var r = t, f = e, p = n, T = a, x = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          $i(
            r,
            f,
            p,
            T,
            s
          ), Pa(8, f);
          break;
        case 23:
          break;
        case 22:
          var V = f.stateNode;
          f.memoizedState !== null ? V._visibility & 2 ? $i(
            r,
            f,
            p,
            T,
            s
          ) : Ia(
            r,
            f
          ) : (V._visibility |= 2, $i(
            r,
            f,
            p,
            T,
            s
          )), s && x & 2048 && tr(
            f.alternate,
            f
          );
          break;
        case 24:
          $i(
            r,
            f,
            p,
            T,
            s
          ), s && x & 2048 && er(f.alternate, f);
          break;
        default:
          $i(
            r,
            f,
            p,
            T,
            s
          );
      }
      e = e.sibling;
    }
  }
  function Ia(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, a = e, s = a.flags;
        switch (a.tag) {
          case 22:
            Ia(n, a), s & 2048 && tr(
              a.alternate,
              a
            );
            break;
          case 24:
            Ia(n, a), s & 2048 && er(a.alternate, a);
            break;
          default:
            Ia(n, a);
        }
        e = e.sibling;
      }
  }
  var tl = 8192;
  function Ii(t, e, n) {
    if (t.subtreeFlags & tl)
      for (t = t.child; t !== null; )
        Wd(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function Wd(t, e, n) {
    switch (t.tag) {
      case 26:
        Ii(
          t,
          e,
          n
        ), t.flags & tl && t.memoizedState !== null && Z1(
          n,
          Ge,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Ii(
          t,
          e,
          n
        );
        break;
      case 3:
      case 4:
        var a = Ge;
        Ge = Ns(t.stateNode.containerInfo), Ii(
          t,
          e,
          n
        ), Ge = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = tl, tl = 16777216, Ii(
          t,
          e,
          n
        ), tl = a) : Ii(
          t,
          e,
          n
        ));
        break;
      default:
        Ii(
          t,
          e,
          n
        );
    }
  }
  function Pd(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function el(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          It = a, Id(
            a,
            t
          );
        }
      Pd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        $d(t), t = t.sibling;
  }
  function $d(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        el(t), t.flags & 2048 && Nn(9, t, t.return);
        break;
      case 3:
        el(t);
        break;
      case 12:
        el(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, As(t)) : el(t);
        break;
      default:
        el(t);
    }
  }
  function As(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          It = a, Id(
            a,
            t
          );
        }
      Pd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Nn(8, e, e.return), As(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, As(e));
          break;
        default:
          As(e);
      }
      t = t.sibling;
    }
  }
  function Id(t, e) {
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
          wa(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, It = a;
      else
        t: for (n = t; It !== null; ) {
          a = It;
          var s = a.sibling, r = a.return;
          if (Xd(a), a === n) {
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
  var s1 = {
    getCacheForType: function(t) {
      var e = ne(Qt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return ne(Qt).controller.signal;
    }
  }, u1 = typeof WeakMap == "function" ? WeakMap : Map, bt = 0, Ot = null, ht = null, mt = 0, Et = 0, De = null, jn = !1, ta = !1, nr = !1, vn = 0, wt = 0, Ln = 0, vi = 0, ir = 0, xe = 0, ea = 0, nl = null, ye = null, ar = !1, Es = 0, tm = 0, Ms = 1 / 0, Ds = null, wn = null, Wt = 0, Hn = null, na = null, Sn = 0, lr = 0, sr = null, em = null, il = 0, ur = null;
  function Ce() {
    return (bt & 2) !== 0 && mt !== 0 ? mt & -mt : R.T !== null ? dr() : gf();
  }
  function nm() {
    if (xe === 0)
      if ((mt & 536870912) === 0 || gt) {
        var t = Ul;
        Ul <<= 1, (Ul & 3932160) === 0 && (Ul = 262144), xe = t;
      } else xe = 536870912;
    return t = Ee.current, t !== null && (t.flags |= 32), xe;
  }
  function pe(t, e, n) {
    (t === Ot && (Et === 2 || Et === 9) || t.cancelPendingCommit !== null) && (ia(t, 0), Yn(
      t,
      mt,
      xe,
      !1
    )), Ma(t, n), ((bt & 2) === 0 || t !== Ot) && (t === Ot && ((bt & 2) === 0 && (vi |= n), wt === 4 && Yn(
      t,
      mt,
      xe,
      !1
    )), Pe(t));
  }
  function im(t, e, n) {
    if ((bt & 6) !== 0) throw Error(o(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ea(t, e), s = a ? c1(t, e) : rr(t, e, !0), r = a;
    do {
      if (s === 0) {
        ta && !a && Yn(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, r && !o1(n)) {
          s = rr(t, e, !1), r = !1;
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
              var p = t;
              s = nl;
              var T = p.current.memoizedState.isDehydrated;
              if (T && (ia(p, f).flags |= 256), f = rr(
                p,
                f,
                !1
              ), f !== 2) {
                if (nr && !T) {
                  p.errorRecoveryDisabledLanes |= r, vi |= r, s = 4;
                  break t;
                }
                r = ye, ye = s, r !== null && (ye === null ? ye = r : ye.push.apply(
                  ye,
                  r
                ));
              }
              s = f;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          ia(t, 0), Yn(t, e, 0, !0);
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
                xe,
                !jn
              );
              break t;
            case 2:
              ye = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && (s = Es + 300 - ve(), 10 < s)) {
            if (Yn(
              a,
              e,
              xe,
              !jn
            ), Nl(a, 0, !0) !== 0) break t;
            Sn = e, a.timeoutHandle = Bm(
              am.bind(
                null,
                a,
                n,
                ye,
                Ds,
                ar,
                e,
                xe,
                vi,
                ea,
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
          am(
            a,
            n,
            ye,
            Ds,
            ar,
            e,
            xe,
            vi,
            ea,
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
  function am(t, e, n, a, s, r, f, p, T, x, V, N, C, O) {
    if (t.timeoutHandle = -1, N = e.subtreeFlags, N & 8192 || (N & 16785408) === 16785408) {
      N = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: an
      }, Wd(
        e,
        r,
        N
      );
      var J = (r & 62914560) === r ? Es - ve() : (r & 4194048) === r ? tm - ve() : 0;
      if (J = K1(
        N,
        J
      ), J !== null) {
        Sn = r, t.cancelPendingCommit = J(
          hm.bind(
            null,
            t,
            e,
            r,
            n,
            a,
            s,
            f,
            p,
            T,
            V,
            N,
            null,
            C,
            O
          )
        ), Yn(t, r, f, !x);
        return;
      }
    }
    hm(
      t,
      e,
      r,
      n,
      a,
      s,
      f,
      p,
      T
    );
  }
  function o1(t) {
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
    e &= ~ir, e &= ~vi, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var s = e; 0 < s; ) {
      var r = 31 - Te(s), f = 1 << r;
      a[r] = -1, s &= ~f;
    }
    n !== 0 && mf(t, n, e);
  }
  function xs() {
    return (bt & 6) === 0 ? (al(0), !1) : !0;
  }
  function or() {
    if (ht !== null) {
      if (Et === 0)
        var t = ht.return;
      else
        t = ht, on = ri = null, Mo(t), Ji = null, Ya = 0, t = ht;
      for (; t !== null; )
        Nd(t.alternate, t), t = t.return;
      ht = null;
    }
  }
  function ia(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, z1(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Sn = 0, or(), Ot = t, ht = n = sn(t.current, null), mt = e, Et = 0, De = null, jn = !1, ta = Ea(t, e), nr = !1, ea = xe = ir = vi = Ln = wt = 0, ye = nl = null, ar = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var s = 31 - Te(a), r = 1 << s;
        e |= t[s], a &= ~r;
      }
    return vn = e, Jl(), n;
  }
  function lm(t, e) {
    rt = null, R.H = ka, e === Ki || e === es ? (e = bh(), Et = 3) : e === fo ? (e = bh(), Et = 4) : Et = e === Yo ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, De = e, ht === null && (wt = 1, ys(
      t,
      _e(e, t.current)
    ));
  }
  function sm() {
    var t = Ee.current;
    return t === null ? !0 : (mt & 4194048) === mt ? je === null : (mt & 62914560) === mt || (mt & 536870912) !== 0 ? t === je : !1;
  }
  function um() {
    var t = R.H;
    return R.H = ka, t === null ? ka : t;
  }
  function om() {
    var t = R.A;
    return R.A = s1, t;
  }
  function Cs() {
    wt = 4, jn || (mt & 4194048) !== mt && Ee.current !== null || (ta = !0), (Ln & 134217727) === 0 && (vi & 134217727) === 0 || Ot === null || Yn(
      Ot,
      mt,
      xe,
      !1
    );
  }
  function rr(t, e, n) {
    var a = bt;
    bt |= 2;
    var s = um(), r = om();
    (Ot !== t || mt !== e) && (Ds = null, ia(t, e)), e = !1;
    var f = wt;
    t: do
      try {
        if (Et !== 0 && ht !== null) {
          var p = ht, T = De;
          switch (Et) {
            case 8:
              or(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ee.current === null && (e = !0);
              var x = Et;
              if (Et = 0, De = null, aa(t, p, T, x), n && ta) {
                f = 0;
                break t;
              }
              break;
            default:
              x = Et, Et = 0, De = null, aa(t, p, T, x);
          }
        }
        r1(), f = wt;
        break;
      } catch (V) {
        lm(t, V);
      }
    while (!0);
    return e && t.shellSuspendCounter++, on = ri = null, bt = a, R.H = s, R.A = r, ht === null && (Ot = null, mt = 0, Jl()), f;
  }
  function r1() {
    for (; ht !== null; ) rm(ht);
  }
  function c1(t, e) {
    var n = bt;
    bt |= 2;
    var a = um(), s = om();
    Ot !== t || mt !== e ? (Ds = null, Ms = ve() + 500, ia(t, e)) : ta = Ea(
      t,
      e
    );
    t: do
      try {
        if (Et !== 0 && ht !== null) {
          e = ht;
          var r = De;
          e: switch (Et) {
            case 1:
              Et = 0, De = null, aa(t, e, r, 1);
              break;
            case 2:
            case 9:
              if (Sh(r)) {
                Et = 0, De = null, cm(e);
                break;
              }
              e = function() {
                Et !== 2 && Et !== 9 || Ot !== t || (Et = 7), Pe(t);
              }, r.then(e, e);
              break t;
            case 3:
              Et = 7;
              break t;
            case 4:
              Et = 5;
              break t;
            case 7:
              Sh(r) ? (Et = 0, De = null, cm(e)) : (Et = 0, De = null, aa(t, e, r, 7));
              break;
            case 5:
              var f = null;
              switch (ht.tag) {
                case 26:
                  f = ht.memoizedState;
                case 5:
                case 27:
                  var p = ht;
                  if (f ? Fm(f) : p.stateNode.complete) {
                    Et = 0, De = null;
                    var T = p.sibling;
                    if (T !== null) ht = T;
                    else {
                      var x = p.return;
                      x !== null ? (ht = x, zs(x)) : ht = null;
                    }
                    break e;
                  }
              }
              Et = 0, De = null, aa(t, e, r, 5);
              break;
            case 6:
              Et = 0, De = null, aa(t, e, r, 6);
              break;
            case 8:
              or(), wt = 6;
              break t;
            default:
              throw Error(o(462));
          }
        }
        f1();
        break;
      } catch (V) {
        lm(t, V);
      }
    while (!0);
    return on = ri = null, R.H = a, R.A = s, bt = n, ht !== null ? 0 : (Ot = null, mt = 0, Jl(), wt);
  }
  function f1() {
    for (; ht !== null && !B0(); )
      rm(ht);
  }
  function rm(t) {
    var e = Ud(t.alternate, t, vn);
    t.memoizedProps = t.pendingProps, e === null ? zs(t) : ht = e;
  }
  function cm(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Cd(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          mt
        );
        break;
      case 11:
        e = Cd(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          mt
        );
        break;
      case 5:
        Mo(e);
      default:
        Nd(n, e), e = ht = oh(e, vn), e = Ud(n, e, vn);
    }
    t.memoizedProps = t.pendingProps, e === null ? zs(t) : ht = e;
  }
  function aa(t, e, n, a) {
    on = ri = null, Mo(e), Ji = null, Ya = 0;
    var s = e.return;
    try {
      if (Iv(
        t,
        s,
        e,
        n,
        mt
      )) {
        wt = 1, ys(
          t,
          _e(n, t.current)
        ), ht = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw ht = s, r;
      wt = 1, ys(
        t,
        _e(n, t.current)
      ), ht = null;
      return;
    }
    e.flags & 32768 ? (gt || a === 1 ? t = !0 : ta || (mt & 536870912) !== 0 ? t = !1 : (jn = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ee.current, a !== null && a.tag === 13 && (a.flags |= 16384))), fm(e, t)) : zs(e);
  }
  function zs(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        fm(
          e,
          jn
        );
        return;
      }
      t = e.return;
      var n = n1(
        e.alternate,
        e,
        vn
      );
      if (n !== null) {
        ht = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        ht = e;
        return;
      }
      ht = e = t;
    } while (e !== null);
    wt === 0 && (wt = 5);
  }
  function fm(t, e) {
    do {
      var n = i1(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, ht = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        ht = t;
        return;
      }
      ht = t = n;
    } while (t !== null);
    wt = 6, ht = null;
  }
  function hm(t, e, n, a, s, r, f, p, T) {
    t.cancelPendingCommit = null;
    do
      Os();
    while (Wt !== 0);
    if ((bt & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (r = e.lanes | e.childLanes, r |= Wu, Q0(
        t,
        n,
        r,
        f,
        p,
        T
      ), t === Ot && (ht = Ot = null, mt = 0), na = e, Hn = t, Sn = n, lr = r, sr = s, em = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, y1(Vl, function() {
        return gm(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = R.T, R.T = null, s = q.p, q.p = 2, f = bt, bt |= 4;
        try {
          a1(t, e, n);
        } finally {
          bt = f, q.p = s, R.T = a;
        }
      }
      Wt = 1, dm(), mm(), ym();
    }
  }
  function dm() {
    if (Wt === 1) {
      Wt = 0;
      var t = Hn, e = na, n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        n = R.T, R.T = null;
        var a = q.p;
        q.p = 2;
        var s = bt;
        bt |= 4;
        try {
          Jd(e, t);
          var r = br, f = If(t.containerInfo), p = r.focusedElem, T = r.selectionRange;
          if (f !== p && p && p.ownerDocument && $f(
            p.ownerDocument.documentElement,
            p
          )) {
            if (T !== null && Zu(p)) {
              var x = T.start, V = T.end;
              if (V === void 0 && (V = x), "selectionStart" in p)
                p.selectionStart = x, p.selectionEnd = Math.min(
                  V,
                  p.value.length
                );
              else {
                var N = p.ownerDocument || document, C = N && N.defaultView || window;
                if (C.getSelection) {
                  var O = C.getSelection(), J = p.textContent.length, tt = Math.min(T.start, J), Ct = T.end === void 0 ? tt : Math.min(T.end, J);
                  !O.extend && tt > Ct && (f = Ct, Ct = tt, tt = f);
                  var M = Pf(
                    p,
                    tt
                  ), E = Pf(
                    p,
                    Ct
                  );
                  if (M && E && (O.rangeCount !== 1 || O.anchorNode !== M.node || O.anchorOffset !== M.offset || O.focusNode !== E.node || O.focusOffset !== E.offset)) {
                    var D = N.createRange();
                    D.setStart(M.node, M.offset), O.removeAllRanges(), tt > Ct ? (O.addRange(D), O.extend(E.node, E.offset)) : (D.setEnd(E.node, E.offset), O.addRange(D));
                  }
                }
              }
            }
            for (N = [], O = p; O = O.parentNode; )
              O.nodeType === 1 && N.push({
                element: O,
                left: O.scrollLeft,
                top: O.scrollTop
              });
            for (typeof p.focus == "function" && p.focus(), p = 0; p < N.length; p++) {
              var U = N[p];
              U.element.scrollLeft = U.left, U.element.scrollTop = U.top;
            }
          }
          qs = !!Tr, br = Tr = null;
        } finally {
          bt = s, q.p = a, R.T = n;
        }
      }
      t.current = e, Wt = 2;
    }
  }
  function mm() {
    if (Wt === 2) {
      Wt = 0;
      var t = Hn, e = na, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = R.T, R.T = null;
        var a = q.p;
        q.p = 2;
        var s = bt;
        bt |= 4;
        try {
          Gd(t, e.alternate, e);
        } finally {
          bt = s, q.p = a, R.T = n;
        }
      }
      Wt = 3;
    }
  }
  function ym() {
    if (Wt === 4 || Wt === 3) {
      Wt = 0, N0();
      var t = Hn, e = na, n = Sn, a = em;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Wt = 5 : (Wt = 0, na = Hn = null, pm(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (s === 0 && (wn = null), xu(n), e = e.stateNode, Se && typeof Se.onCommitFiberRoot == "function")
        try {
          Se.onCommitFiberRoot(
            Aa,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = R.T, s = q.p, q.p = 2, R.T = null;
        try {
          for (var r = t.onRecoverableError, f = 0; f < a.length; f++) {
            var p = a[f];
            r(p.value, {
              componentStack: p.stack
            });
          }
        } finally {
          R.T = e, q.p = s;
        }
      }
      (Sn & 3) !== 0 && Os(), Pe(t), s = t.pendingLanes, (n & 261930) !== 0 && (s & 42) !== 0 ? t === ur ? il++ : (il = 0, ur = t) : il = 0, al(0);
    }
  }
  function pm(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, wa(e)));
  }
  function Os() {
    return dm(), mm(), ym(), gm();
  }
  function gm() {
    if (Wt !== 5) return !1;
    var t = Hn, e = lr;
    lr = 0;
    var n = xu(Sn), a = R.T, s = q.p;
    try {
      q.p = 32 > n ? 32 : n, R.T = null, n = sr, sr = null;
      var r = Hn, f = Sn;
      if (Wt = 0, na = Hn = null, Sn = 0, (bt & 6) !== 0) throw Error(o(331));
      var p = bt;
      if (bt |= 4, $d(r.current), Fd(
        r,
        r.current,
        f,
        n
      ), bt = p, al(0, !1), Se && typeof Se.onPostCommitFiberRoot == "function")
        try {
          Se.onPostCommitFiberRoot(Aa, r);
        } catch {
        }
      return !0;
    } finally {
      q.p = s, R.T = a, pm(t, e);
    }
  }
  function vm(t, e, n) {
    e = _e(n, e), e = Ho(t.stateNode, e, 2), t = _n(t, e, 2), t !== null && (Ma(t, 2), Pe(t));
  }
  function Mt(t, e, n) {
    if (t.tag === 3)
      vm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          vm(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (wn === null || !wn.has(a))) {
            t = _e(n, t), n = Sd(2), a = _n(e, n, 2), a !== null && (Td(
              n,
              a,
              e,
              t
            ), Ma(a, 2), Pe(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function cr(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new u1();
      var s = /* @__PURE__ */ new Set();
      a.set(e, s);
    } else
      s = a.get(e), s === void 0 && (s = /* @__PURE__ */ new Set(), a.set(e, s));
    s.has(n) || (nr = !0, s.add(n), t = h1.bind(null, t, e, n), e.then(t, t));
  }
  function h1(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Ot === t && (mt & n) === n && (wt === 4 || wt === 3 && (mt & 62914560) === mt && 300 > ve() - Es ? (bt & 2) === 0 && ia(t, 0) : ir |= n, ea === mt && (ea = 0)), Pe(t);
  }
  function Sm(t, e) {
    e === 0 && (e = df()), t = si(t, e), t !== null && (Ma(t, e), Pe(t));
  }
  function d1(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), Sm(t, n);
  }
  function m1(t, e) {
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
    a !== null && a.delete(e), Sm(t, n);
  }
  function y1(t, e) {
    return Au(t, e);
  }
  var Rs = null, la = null, fr = !1, Vs = !1, hr = !1, qn = 0;
  function Pe(t) {
    t !== la && t.next === null && (la === null ? Rs = la = t : la = la.next = t), Vs = !0, fr || (fr = !0, g1());
  }
  function al(t, e) {
    if (!hr && Vs) {
      hr = !0;
      do
        for (var n = !1, a = Rs; a !== null; ) {
          if (t !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var f = a.suspendedLanes, p = a.pingedLanes;
              r = (1 << 31 - Te(42 | t) + 1) - 1, r &= s & ~(f & ~p), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (n = !0, Em(a, r));
          } else
            r = mt, r = Nl(
              a,
              a === Ot ? r : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (r & 3) === 0 || Ea(a, r) || (n = !0, Em(a, r));
          a = a.next;
        }
      while (n);
      hr = !1;
    }
  }
  function p1() {
    Tm();
  }
  function Tm() {
    Vs = fr = !1;
    var t = 0;
    qn !== 0 && C1() && (t = qn);
    for (var e = ve(), n = null, a = Rs; a !== null; ) {
      var s = a.next, r = bm(a, e);
      r === 0 ? (a.next = null, n === null ? Rs = s : n.next = s, s === null && (la = n)) : (n = a, (t !== 0 || (r & 3) !== 0) && (Vs = !0)), a = s;
    }
    Wt !== 0 && Wt !== 5 || al(t), qn !== 0 && (qn = 0);
  }
  function bm(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, s = t.expirationTimes, r = t.pendingLanes & -62914561; 0 < r; ) {
      var f = 31 - Te(r), p = 1 << f, T = s[f];
      T === -1 ? ((p & n) === 0 || (p & a) !== 0) && (s[f] = X0(p, e)) : T <= e && (t.expiredLanes |= p), r &= ~p;
    }
    if (e = Ot, n = mt, n = Nl(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, n === 0 || t === e && (Et === 2 || Et === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Eu(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || Ea(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && Eu(a), xu(n)) {
        case 2:
        case 8:
          n = ff;
          break;
        case 32:
          n = Vl;
          break;
        case 268435456:
          n = hf;
          break;
        default:
          n = Vl;
      }
      return a = Am.bind(null, t), n = Au(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && Eu(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Am(t, e) {
    if (Wt !== 0 && Wt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (Os() && t.callbackNode !== n)
      return null;
    var a = mt;
    return a = Nl(
      t,
      t === Ot ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (im(t, a, e), bm(t, ve()), t.callbackNode != null && t.callbackNode === n ? Am.bind(null, t) : null);
  }
  function Em(t, e) {
    if (Os()) return null;
    im(t, e, !0);
  }
  function g1() {
    O1(function() {
      (bt & 6) !== 0 ? Au(
        cf,
        p1
      ) : Tm();
    });
  }
  function dr() {
    if (qn === 0) {
      var t = Qi;
      t === 0 && (t = _l, _l <<= 1, (_l & 261888) === 0 && (_l = 256)), qn = t;
    }
    return qn;
  }
  function Mm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Hl("" + t);
  }
  function Dm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
  }
  function v1(t, e, n, a, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var r = Mm(
        (s[ce] || null).action
      ), f = a.submitter;
      f && (e = (e = f[ce] || null) ? Mm(e.formAction) : f.getAttribute("formAction"), e !== null && (r = e, f = null));
      var p = new Xl(
        "action",
        "action",
        null,
        a,
        s
      );
      t.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (qn !== 0) {
                  var T = f ? Dm(s, f) : new FormData(s);
                  Uo(
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
                typeof r == "function" && (p.preventDefault(), T = f ? Dm(s, f) : new FormData(s), Uo(
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
  for (var mr = 0; mr < Fu.length; mr++) {
    var yr = Fu[mr], S1 = yr.toLowerCase(), T1 = yr[0].toUpperCase() + yr.slice(1);
    qe(
      S1,
      "on" + T1
    );
  }
  qe(nh, "onAnimationEnd"), qe(ih, "onAnimationIteration"), qe(ah, "onAnimationStart"), qe("dblclick", "onDoubleClick"), qe("focusin", "onFocus"), qe("focusout", "onBlur"), qe(jv, "onTransitionRun"), qe(Lv, "onTransitionStart"), qe(wv, "onTransitionCancel"), qe(lh, "onTransitionEnd"), Ri("onMouseEnter", ["mouseout", "mouseover"]), Ri("onMouseLeave", ["mouseout", "mouseover"]), Ri("onPointerEnter", ["pointerout", "pointerover"]), Ri("onPointerLeave", ["pointerout", "pointerover"]), ni(
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
  var ll = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), b1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ll)
  );
  function xm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], s = a.event;
      a = a.listeners;
      t: {
        var r = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var p = a[f], T = p.instance, x = p.currentTarget;
            if (p = p.listener, T !== r && s.isPropagationStopped())
              break t;
            r = p, s.currentTarget = x;
            try {
              r(s);
            } catch (V) {
              Kl(V);
            }
            s.currentTarget = null, r = T;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (p = a[f], T = p.instance, x = p.currentTarget, p = p.listener, T !== r && s.isPropagationStopped())
              break t;
            r = p, s.currentTarget = x;
            try {
              r(s);
            } catch (V) {
              Kl(V);
            }
            s.currentTarget = null, r = T;
          }
      }
    }
  }
  function dt(t, e) {
    var n = e[Cu];
    n === void 0 && (n = e[Cu] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (Cm(e, t, 2, !1), n.add(a));
  }
  function pr(t, e, n) {
    var a = 0;
    e && (a |= 4), Cm(
      n,
      t,
      a,
      e
    );
  }
  var _s = "_reactListening" + Math.random().toString(36).slice(2);
  function gr(t) {
    if (!t[_s]) {
      t[_s] = !0, Tf.forEach(function(n) {
        n !== "selectionchange" && (b1.has(n) || pr(n, !1, t), pr(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[_s] || (e[_s] = !0, pr("selectionchange", !1, e));
    }
  }
  function Cm(t, e, n, a) {
    switch (ny(e)) {
      case 2:
        var s = F1;
        break;
      case 8:
        s = W1;
        break;
      default:
        s = _r;
    }
    n = s.bind(
      null,
      e,
      n,
      t
    ), s = void 0, !ju || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0), a ? s !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: s
    }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
      passive: s
    }) : t.addEventListener(e, n, !1);
  }
  function vr(t, e, n, a, s) {
    var r = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var p = a.stateNode.containerInfo;
          if (p === s) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var T = f.tag;
              if ((T === 3 || T === 4) && f.stateNode.containerInfo === s)
                return;
              f = f.return;
            }
          for (; p !== null; ) {
            if (f = Ci(p), f === null) return;
            if (T = f.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              a = r = f;
              continue t;
            }
            p = p.parentNode;
          }
        }
        a = a.return;
      }
    _f(function() {
      var x = r, V = Bu(n), N = [];
      t: {
        var C = sh.get(t);
        if (C !== void 0) {
          var O = Xl, J = t;
          switch (t) {
            case "keypress":
              if (ql(n) === 0) break t;
            case "keydown":
            case "keyup":
              O = mv;
              break;
            case "focusin":
              J = "focus", O = Yu;
              break;
            case "focusout":
              J = "blur", O = Yu;
              break;
            case "beforeblur":
            case "afterblur":
              O = Yu;
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
              O = Nf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = nv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = gv;
              break;
            case nh:
            case ih:
            case ah:
              O = lv;
              break;
            case lh:
              O = Sv;
              break;
            case "scroll":
            case "scrollend":
              O = tv;
              break;
            case "wheel":
              O = bv;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = uv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = Lf;
              break;
            case "toggle":
            case "beforetoggle":
              O = Ev;
          }
          var tt = (e & 4) !== 0, Ct = !tt && (t === "scroll" || t === "scrollend"), M = tt ? C !== null ? C + "Capture" : null : C;
          tt = [];
          for (var E = x, D; E !== null; ) {
            var U = E;
            if (D = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || D === null || M === null || (U = Ca(E, M), U != null && tt.push(
              sl(E, U, D)
            )), Ct) break;
            E = E.return;
          }
          0 < tt.length && (C = new O(
            C,
            J,
            null,
            n,
            V
          ), N.push({ event: C, listeners: tt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (C = t === "mouseover" || t === "pointerover", O = t === "mouseout" || t === "pointerout", C && n !== Uu && (J = n.relatedTarget || n.fromElement) && (Ci(J) || J[xi]))
            break t;
          if ((O || C) && (C = V.window === V ? V : (C = V.ownerDocument) ? C.defaultView || C.parentWindow : window, O ? (J = n.relatedTarget || n.toElement, O = x, J = J ? Ci(J) : null, J !== null && (Ct = d(J), tt = J.tag, J !== Ct || tt !== 5 && tt !== 27 && tt !== 6) && (J = null)) : (O = null, J = x), O !== J)) {
            if (tt = Nf, U = "onMouseLeave", M = "onMouseEnter", E = "mouse", (t === "pointerout" || t === "pointerover") && (tt = Lf, U = "onPointerLeave", M = "onPointerEnter", E = "pointer"), Ct = O == null ? C : xa(O), D = J == null ? C : xa(J), C = new tt(
              U,
              E + "leave",
              O,
              n,
              V
            ), C.target = Ct, C.relatedTarget = D, U = null, Ci(V) === x && (tt = new tt(
              M,
              E + "enter",
              J,
              n,
              V
            ), tt.target = D, tt.relatedTarget = Ct, U = tt), Ct = U, O && J)
              e: {
                for (tt = A1, M = O, E = J, D = 0, U = M; U; U = tt(U))
                  D++;
                U = 0;
                for (var I = E; I; I = tt(I))
                  U++;
                for (; 0 < D - U; )
                  M = tt(M), D--;
                for (; 0 < U - D; )
                  E = tt(E), U--;
                for (; D--; ) {
                  if (M === E || E !== null && M === E.alternate) {
                    tt = M;
                    break e;
                  }
                  M = tt(M), E = tt(E);
                }
                tt = null;
              }
            else tt = null;
            O !== null && zm(
              N,
              C,
              O,
              tt,
              !1
            ), J !== null && Ct !== null && zm(
              N,
              Ct,
              J,
              tt,
              !0
            );
          }
        }
        t: {
          if (C = x ? xa(x) : window, O = C.nodeName && C.nodeName.toLowerCase(), O === "select" || O === "input" && C.type === "file")
            var St = Zf;
          else if (Xf(C))
            if (Kf)
              St = Uv;
            else {
              St = Vv;
              var W = Rv;
            }
          else
            O = C.nodeName, !O || O.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? x && _u(x.elementType) && (St = Zf) : St = _v;
          if (St && (St = St(t, x))) {
            Qf(
              N,
              St,
              n,
              V
            );
            break t;
          }
          W && W(t, C, x), t === "focusout" && x && C.type === "number" && x.memoizedProps.value != null && Vu(C, "number", C.value);
        }
        switch (W = x ? xa(x) : window, t) {
          case "focusin":
            (Xf(W) || W.contentEditable === "true") && (ji = W, Ku = x, Na = null);
            break;
          case "focusout":
            Na = Ku = ji = null;
            break;
          case "mousedown":
            Ju = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ju = !1, th(N, n, V);
            break;
          case "selectionchange":
            if (Nv) break;
          case "keydown":
          case "keyup":
            th(N, n, V);
        }
        var ct;
        if (Gu)
          t: {
            switch (t) {
              case "compositionstart":
                var yt = "onCompositionStart";
                break t;
              case "compositionend":
                yt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                yt = "onCompositionUpdate";
                break t;
            }
            yt = void 0;
          }
        else
          Ni ? qf(t, n) && (yt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (yt = "onCompositionStart");
        yt && (wf && n.locale !== "ko" && (Ni || yt !== "onCompositionStart" ? yt === "onCompositionEnd" && Ni && (ct = Uf()) : (Dn = V, Lu = "value" in Dn ? Dn.value : Dn.textContent, Ni = !0)), W = Us(x, yt), 0 < W.length && (yt = new jf(
          yt,
          t,
          null,
          n,
          V
        ), N.push({ event: yt, listeners: W }), ct ? yt.data = ct : (ct = Gf(n), ct !== null && (yt.data = ct)))), (ct = Dv ? xv(t, n) : Cv(t, n)) && (yt = Us(x, "onBeforeInput"), 0 < yt.length && (W = new jf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          V
        ), N.push({
          event: W,
          listeners: yt
        }), W.data = ct)), v1(
          N,
          t,
          x,
          n,
          V
        );
      }
      xm(N, e);
    });
  }
  function sl(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function Us(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var s = t, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Ca(t, n), s != null && a.unshift(
        sl(t, s, r)
      ), s = Ca(t, e), s != null && a.push(
        sl(t, s, r)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function A1(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function zm(t, e, n, a, s) {
    for (var r = e._reactName, f = []; n !== null && n !== a; ) {
      var p = n, T = p.alternate, x = p.stateNode;
      if (p = p.tag, T !== null && T === a) break;
      p !== 5 && p !== 26 && p !== 27 || x === null || (T = x, s ? (x = Ca(n, r), x != null && f.unshift(
        sl(n, x, T)
      )) : s || (x = Ca(n, r), x != null && f.push(
        sl(n, x, T)
      ))), n = n.return;
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var E1 = /\r\n?/g, M1 = /\u0000|\uFFFD/g;
  function Om(t) {
    return (typeof t == "string" ? t : "" + t).replace(E1, `
`).replace(M1, "");
  }
  function Rm(t, e) {
    return e = Om(e), Om(t) === e;
  }
  function xt(t, e, n, a, s, r) {
    switch (n) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || _i(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && _i(t, "" + a);
        break;
      case "className":
        Ll(t, "class", a);
        break;
      case "tabIndex":
        Ll(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ll(t, n, a);
        break;
      case "style":
        Rf(t, a, r);
        break;
      case "data":
        if (e !== "object") {
          Ll(t, "data", a);
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
        a = Hl("" + a), t.setAttribute(n, a);
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
          typeof r == "function" && (n === "formAction" ? (e !== "input" && xt(t, e, "name", s.name, s, null), xt(
            t,
            e,
            "formEncType",
            s.formEncType,
            s,
            null
          ), xt(
            t,
            e,
            "formMethod",
            s.formMethod,
            s,
            null
          ), xt(
            t,
            e,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (xt(t, e, "encType", s.encType, s, null), xt(t, e, "method", s.method, s, null), xt(t, e, "target", s.target, s, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = Hl("" + a), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = an);
        break;
      case "onScroll":
        a != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && dt("scrollend", t);
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
        n = Hl("" + a), t.setAttributeNS(
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
        dt("beforetoggle", t), dt("toggle", t), jl(t, "popover", a);
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
        jl(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = $0.get(n) || n, jl(t, n, a));
    }
  }
  function Sr(t, e, n, a, s, r) {
    switch (n) {
      case "style":
        Rf(t, a, r);
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
        typeof a == "string" ? _i(t, a) : (typeof a == "number" || typeof a == "bigint") && _i(t, "" + a);
        break;
      case "onScroll":
        a != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && dt("scrollend", t);
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
        if (!bf.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), e = n.slice(2, s ? n.length - 7 : void 0), r = t[ce] || null, r = r != null ? r[n] : null, typeof r == "function" && t.removeEventListener(e, r, s), typeof a == "function")) {
              typeof r != "function" && r !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, a, s);
              break t;
            }
            n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : jl(t, n, a);
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
        dt("error", t), dt("load", t);
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
                  xt(t, e, r, f, n, null);
              }
          }
        s && xt(t, e, "srcSet", n.srcSet, n, null), a && xt(t, e, "src", n.src, n, null);
        return;
      case "input":
        dt("invalid", t);
        var p = r = f = s = null, T = null, x = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var V = n[a];
            if (V != null)
              switch (a) {
                case "name":
                  s = V;
                  break;
                case "type":
                  f = V;
                  break;
                case "checked":
                  T = V;
                  break;
                case "defaultChecked":
                  x = V;
                  break;
                case "value":
                  r = V;
                  break;
                case "defaultValue":
                  p = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(o(137, e));
                  break;
                default:
                  xt(t, e, a, V, n, null);
              }
          }
        xf(
          t,
          r,
          p,
          T,
          x,
          f,
          s,
          !1
        );
        return;
      case "select":
        dt("invalid", t), a = f = r = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (p = n[s], p != null))
            switch (s) {
              case "value":
                r = p;
                break;
              case "defaultValue":
                f = p;
                break;
              case "multiple":
                a = p;
              default:
                xt(t, e, s, p, n, null);
            }
        e = r, n = f, t.multiple = !!a, e != null ? Vi(t, !!a, e, !1) : n != null && Vi(t, !!a, n, !0);
        return;
      case "textarea":
        dt("invalid", t), r = s = a = null;
        for (f in n)
          if (n.hasOwnProperty(f) && (p = n[f], p != null))
            switch (f) {
              case "value":
                a = p;
                break;
              case "defaultValue":
                s = p;
                break;
              case "children":
                r = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(o(91));
                break;
              default:
                xt(t, e, f, p, n, null);
            }
        zf(t, a, s, r);
        return;
      case "option":
        for (T in n)
          n.hasOwnProperty(T) && (a = n[T], a != null) && (T === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : xt(t, e, T, a, n, null));
        return;
      case "dialog":
        dt("beforetoggle", t), dt("toggle", t), dt("cancel", t), dt("close", t);
        break;
      case "iframe":
      case "object":
        dt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ll.length; a++)
          dt(ll[a], t);
        break;
      case "image":
        dt("error", t), dt("load", t);
        break;
      case "details":
        dt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        dt("error", t), dt("load", t);
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
        for (x in n)
          if (n.hasOwnProperty(x) && (a = n[x], a != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                xt(t, e, x, a, n, null);
            }
        return;
      default:
        if (_u(e)) {
          for (V in n)
            n.hasOwnProperty(V) && (a = n[V], a !== void 0 && Sr(
              t,
              e,
              V,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (p in n)
      n.hasOwnProperty(p) && (a = n[p], a != null && xt(t, e, p, a, n, null));
  }
  function D1(t, e, n, a) {
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
        var s = null, r = null, f = null, p = null, T = null, x = null, V = null;
        for (O in n) {
          var N = n[O];
          if (n.hasOwnProperty(O) && N != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = N;
              default:
                a.hasOwnProperty(O) || xt(t, e, O, null, a, N);
            }
        }
        for (var C in a) {
          var O = a[C];
          if (N = n[C], a.hasOwnProperty(C) && (O != null || N != null))
            switch (C) {
              case "type":
                r = O;
                break;
              case "name":
                s = O;
                break;
              case "checked":
                x = O;
                break;
              case "defaultChecked":
                V = O;
                break;
              case "value":
                f = O;
                break;
              case "defaultValue":
                p = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(o(137, e));
                break;
              default:
                O !== N && xt(
                  t,
                  e,
                  C,
                  O,
                  a,
                  N
                );
            }
        }
        Ru(
          t,
          f,
          p,
          T,
          x,
          V,
          r,
          s
        );
        return;
      case "select":
        O = f = p = C = null;
        for (r in n)
          if (T = n[r], n.hasOwnProperty(r) && T != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                O = T;
              default:
                a.hasOwnProperty(r) || xt(
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
                C = r;
                break;
              case "defaultValue":
                p = r;
                break;
              case "multiple":
                f = r;
              default:
                r !== T && xt(
                  t,
                  e,
                  s,
                  r,
                  a,
                  T
                );
            }
        e = p, n = f, a = O, C != null ? Vi(t, !!n, C, !1) : !!a != !!n && (e != null ? Vi(t, !!n, e, !0) : Vi(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        O = C = null;
        for (p in n)
          if (s = n[p], n.hasOwnProperty(p) && s != null && !a.hasOwnProperty(p))
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                xt(t, e, p, null, a, s);
            }
        for (f in a)
          if (s = a[f], r = n[f], a.hasOwnProperty(f) && (s != null || r != null))
            switch (f) {
              case "value":
                C = s;
                break;
              case "defaultValue":
                O = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(o(91));
                break;
              default:
                s !== r && xt(t, e, f, s, a, r);
            }
        Cf(t, C, O);
        return;
      case "option":
        for (var J in n)
          C = n[J], n.hasOwnProperty(J) && C != null && !a.hasOwnProperty(J) && (J === "selected" ? t.selected = !1 : xt(
            t,
            e,
            J,
            null,
            a,
            C
          ));
        for (T in a)
          C = a[T], O = n[T], a.hasOwnProperty(T) && C !== O && (C != null || O != null) && (T === "selected" ? t.selected = C && typeof C != "function" && typeof C != "symbol" : xt(
            t,
            e,
            T,
            C,
            a,
            O
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
        for (var tt in n)
          C = n[tt], n.hasOwnProperty(tt) && C != null && !a.hasOwnProperty(tt) && xt(t, e, tt, null, a, C);
        for (x in a)
          if (C = a[x], O = n[x], a.hasOwnProperty(x) && C !== O && (C != null || O != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(o(137, e));
                break;
              default:
                xt(
                  t,
                  e,
                  x,
                  C,
                  a,
                  O
                );
            }
        return;
      default:
        if (_u(e)) {
          for (var Ct in n)
            C = n[Ct], n.hasOwnProperty(Ct) && C !== void 0 && !a.hasOwnProperty(Ct) && Sr(
              t,
              e,
              Ct,
              void 0,
              a,
              C
            );
          for (V in a)
            C = a[V], O = n[V], !a.hasOwnProperty(V) || C === O || C === void 0 && O === void 0 || Sr(
              t,
              e,
              V,
              C,
              a,
              O
            );
          return;
        }
    }
    for (var M in n)
      C = n[M], n.hasOwnProperty(M) && C != null && !a.hasOwnProperty(M) && xt(t, e, M, null, a, C);
    for (N in a)
      C = a[N], O = n[N], !a.hasOwnProperty(N) || C === O || C == null && O == null || xt(t, e, N, C, a, O);
  }
  function Vm(t) {
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
  function x1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var s = n[a], r = s.transferSize, f = s.initiatorType, p = s.duration;
        if (r && p && Vm(f)) {
          for (f = 0, p = s.responseEnd, a += 1; a < n.length; a++) {
            var T = n[a], x = T.startTime;
            if (x > p) break;
            var V = T.transferSize, N = T.initiatorType;
            V && Vm(N) && (T = T.responseEnd, f += V * (T < p ? 1 : (p - x) / (T - x)));
          }
          if (--a, e += 8 * (r + f) / (s.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Tr = null, br = null;
  function Bs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function _m(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Um(t, e) {
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
  function Ar(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Er = null;
  function C1() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Er ? !1 : (Er = t, !0) : (Er = null, !1);
  }
  var Bm = typeof setTimeout == "function" ? setTimeout : void 0, z1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Nm = typeof Promise == "function" ? Promise : void 0, O1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nm < "u" ? function(t) {
    return Nm.resolve(null).then(t).catch(R1);
  } : Bm;
  function R1(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Gn(t) {
    return t === "head";
  }
  function jm(t, e) {
    var n = e, a = 0;
    do {
      var s = n.nextSibling;
      if (t.removeChild(n), s && s.nodeType === 8)
        if (n = s.data, n === "/$" || n === "/&") {
          if (a === 0) {
            t.removeChild(s), ra(e);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          ul(t.ownerDocument.documentElement);
        else if (n === "head") {
          n = t.ownerDocument.head, ul(n);
          for (var r = n.firstChild; r; ) {
            var f = r.nextSibling, p = r.nodeName;
            r[Da] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && r.rel.toLowerCase() === "stylesheet" || n.removeChild(r), r = f;
          }
        } else
          n === "body" && ul(t.ownerDocument.body);
      n = s;
    } while (n);
    ra(e);
  }
  function Lm(t, e) {
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
  function Mr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Mr(n), zu(n);
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
  function V1(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Da])
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
  function _1(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Le(t.nextSibling), t === null)) return null;
    return t;
  }
  function wm(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Le(t.nextSibling), t === null)) return null;
    return t;
  }
  function Dr(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function xr(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function U1(t, e) {
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
  var Cr = null;
  function Hm(t) {
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
  function Ym(t) {
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
  function qm(t, e, n) {
    switch (e = Bs(n), t) {
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
  function ul(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    zu(t);
  }
  var we = /* @__PURE__ */ new Map(), Gm = /* @__PURE__ */ new Set();
  function Ns(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Tn = q.d;
  q.d = {
    f: B1,
    r: N1,
    D: j1,
    C: L1,
    L: w1,
    m: H1,
    X: q1,
    S: Y1,
    M: G1
  };
  function B1() {
    var t = Tn.f(), e = xs();
    return t || e;
  }
  function N1(t) {
    var e = zi(t);
    e !== null && e.tag === 5 && e.type === "form" ? ld(e) : Tn.r(t);
  }
  var sa = typeof document > "u" ? null : document;
  function Xm(t, e, n) {
    var a = sa;
    if (a && typeof e == "string" && e) {
      var s = Re(e);
      s = 'link[rel="' + t + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), Gm.has(s) || (Gm.add(s), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(s) === null && (e = a.createElement("link"), ae(e, "link", t), $t(e), a.head.appendChild(e)));
    }
  }
  function j1(t) {
    Tn.D(t), Xm("dns-prefetch", t, null);
  }
  function L1(t, e) {
    Tn.C(t, e), Xm("preconnect", t, e);
  }
  function w1(t, e, n) {
    Tn.L(t, e, n);
    var a = sa;
    if (a && t && e) {
      var s = 'link[rel="preload"][as="' + Re(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + Re(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + Re(
        n.imageSizes
      ) + '"]')) : s += '[href="' + Re(t) + '"]';
      var r = s;
      switch (e) {
        case "style":
          r = ua(t);
          break;
        case "script":
          r = oa(t);
      }
      we.has(r) || (t = S(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), we.set(r, t), a.querySelector(s) !== null || e === "style" && a.querySelector(ol(r)) || e === "script" && a.querySelector(rl(r)) || (e = a.createElement("link"), ae(e, "link", t), $t(e), a.head.appendChild(e)));
    }
  }
  function H1(t, e) {
    Tn.m(t, e);
    var n = sa;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", s = 'link[rel="modulepreload"][as="' + Re(a) + '"][href="' + Re(t) + '"]', r = s;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = oa(t);
      }
      if (!we.has(r) && (t = S({ rel: "modulepreload", href: t }, e), we.set(r, t), n.querySelector(s) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(rl(r)))
              return;
        }
        a = n.createElement("link"), ae(a, "link", t), $t(a), n.head.appendChild(a);
      }
    }
  }
  function Y1(t, e, n) {
    Tn.S(t, e, n);
    var a = sa;
    if (a && t) {
      var s = Oi(a).hoistableStyles, r = ua(t);
      e = e || "default";
      var f = s.get(r);
      if (!f) {
        var p = { loading: 0, preload: null };
        if (f = a.querySelector(
          ol(r)
        ))
          p.loading = 5;
        else {
          t = S(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = we.get(r)) && zr(t, n);
          var T = f = a.createElement("link");
          $t(T), ae(T, "link", t), T._p = new Promise(function(x, V) {
            T.onload = x, T.onerror = V;
          }), T.addEventListener("load", function() {
            p.loading |= 1;
          }), T.addEventListener("error", function() {
            p.loading |= 2;
          }), p.loading |= 4, js(f, e, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: p
        }, s.set(r, f);
      }
    }
  }
  function q1(t, e) {
    Tn.X(t, e);
    var n = sa;
    if (n && t) {
      var a = Oi(n).hoistableScripts, s = oa(t), r = a.get(s);
      r || (r = n.querySelector(rl(s)), r || (t = S({ src: t, async: !0 }, e), (e = we.get(s)) && Or(t, e), r = n.createElement("script"), $t(r), ae(r, "link", t), n.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, a.set(s, r));
    }
  }
  function G1(t, e) {
    Tn.M(t, e);
    var n = sa;
    if (n && t) {
      var a = Oi(n).hoistableScripts, s = oa(t), r = a.get(s);
      r || (r = n.querySelector(rl(s)), r || (t = S({ src: t, async: !0, type: "module" }, e), (e = we.get(s)) && Or(t, e), r = n.createElement("script"), $t(r), ae(r, "link", t), n.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, a.set(s, r));
    }
  }
  function Qm(t, e, n, a) {
    var s = (s = st.current) ? Ns(s) : null;
    if (!s) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = ua(n.href), n = Oi(
          s
        ).hoistableStyles, a = n.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = ua(n.href);
          var r = Oi(
            s
          ).hoistableStyles, f = r.get(t);
          if (f || (s = s.ownerDocument || s, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(t, f), (r = s.querySelector(
            ol(t)
          )) && !r._p && (f.instance = r, f.state.loading = 5), we.has(t) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, we.set(t, n), r || X1(
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
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = oa(n), n = Oi(
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
  function ua(t) {
    return 'href="' + Re(t) + '"';
  }
  function ol(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Zm(t) {
    return S({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function X1(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), ae(e, "link", n), $t(e), t.head.appendChild(e));
  }
  function oa(t) {
    return '[src="' + Re(t) + '"]';
  }
  function rl(t) {
    return "script[async]" + t;
  }
  function Km(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Re(n.href) + '"]'
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
          ), $t(a), ae(a, "style", s), js(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          s = ua(n.href);
          var r = t.querySelector(
            ol(s)
          );
          if (r)
            return e.state.loading |= 4, e.instance = r, $t(r), r;
          a = Zm(n), (s = we.get(s)) && zr(a, s), r = (t.ownerDocument || t).createElement("link"), $t(r);
          var f = r;
          return f._p = new Promise(function(p, T) {
            f.onload = p, f.onerror = T;
          }), ae(r, "link", a), e.state.loading |= 4, js(r, n.precedence, t), e.instance = r;
        case "script":
          return r = oa(n.src), (s = t.querySelector(
            rl(r)
          )) ? (e.instance = s, $t(s), s) : (a = n, (s = we.get(r)) && (a = S({}, n), Or(a, s)), t = t.ownerDocument || t, s = t.createElement("script"), $t(s), ae(s, "link", a), t.head.appendChild(s), e.instance = s);
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, js(a, n.precedence, t));
    return e.instance;
  }
  function js(t, e, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = a.length ? a[a.length - 1] : null, r = s, f = 0; f < a.length; f++) {
      var p = a[f];
      if (p.dataset.precedence === e) r = p;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(t, r.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function zr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Or(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Ls = null;
  function Jm(t, e, n) {
    if (Ls === null) {
      var a = /* @__PURE__ */ new Map(), s = Ls = /* @__PURE__ */ new Map();
      s.set(n, a);
    } else
      s = Ls, a = s.get(n), a || (a = /* @__PURE__ */ new Map(), s.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), s = 0; s < n.length; s++) {
      var r = n[s];
      if (!(r[Da] || r[te] || t === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = r.getAttribute(e) || "";
        f = t + f;
        var p = a.get(f);
        p ? p.push(r) : a.set(f, [r]);
      }
    }
    return a;
  }
  function km(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Q1(t, e, n) {
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
  function Fm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Z1(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = ua(a.href), r = e.querySelector(
          ol(s)
        );
        if (r) {
          e = r._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = ws.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = r, $t(r);
          return;
        }
        r = e.ownerDocument || e, a = Zm(a), (s = we.get(s)) && zr(a, s), r = r.createElement("link"), $t(r);
        var f = r;
        f._p = new Promise(function(p, T) {
          f.onload = p, f.onerror = T;
        }), ae(r, "link", a), n.instance = r;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = ws.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Rr = 0;
  function K1(t, e) {
    return t.stylesheets && t.count === 0 && Ys(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (t.stylesheets && Ys(t, t.stylesheets), t.unsuspend) {
          var r = t.unsuspend;
          t.unsuspend = null, r();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Rr === 0 && (Rr = 62500 * x1());
      var s = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Ys(t, t.stylesheets), t.unsuspend)) {
            var r = t.unsuspend;
            t.unsuspend = null, r();
          }
        },
        (t.imgBytes > Rr ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(s);
      };
    } : null;
  }
  function ws() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ys(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Hs = null;
  function Ys(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Hs = /* @__PURE__ */ new Map(), e.forEach(J1, t), Hs = null, ws.call(t));
  }
  function J1(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Hs.get(t);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Hs.set(t, n);
        for (var s = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var f = s[r];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), a = f);
        }
        a && n.set(null, a);
      }
      s = e.instance, f = s.getAttribute("data-precedence"), r = n.get(f) || a, r === a && n.set(null, s), n.set(f, s), this.count++, a = ws.bind(this), s.addEventListener("load", a), s.addEventListener("error", a), r ? r.parentNode.insertBefore(s, r.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(s, t.firstChild)), e.state.loading |= 4;
    }
  }
  var cl = {
    $$typeof: H,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0
  };
  function k1(t, e, n, a, s, r, f, p, T) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Mu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Mu(0), this.hiddenUpdates = Mu(null), this.identifierPrefix = a, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Wm(t, e, n, a, s, r, f, p, T, x, V, N) {
    return t = new k1(
      t,
      e,
      n,
      f,
      T,
      x,
      V,
      N,
      p
    ), e = 1, r === !0 && (e |= 24), r = Ae(3, null, null, e), t.current = r, r.stateNode = t, e = oo(), e.refCount++, t.pooledCache = e, e.refCount++, r.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, ho(r), t;
  }
  function Pm(t) {
    return t ? (t = Hi, t) : Hi;
  }
  function $m(t, e, n, a, s, r) {
    s = Pm(s), a.context === null ? a.context = s : a.pendingContext = s, a = Vn(e), a.payload = { element: n }, r = r === void 0 ? null : r, r !== null && (a.callback = r), n = _n(t, a, e), n !== null && (pe(n, t, e), Ga(n, t, e));
  }
  function Im(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Vr(t, e) {
    Im(t, e), (t = t.alternate) && Im(t, e);
  }
  function ty(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = si(t, 67108864);
      e !== null && pe(e, t, 67108864), Vr(t, 67108864);
    }
  }
  function ey(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ce();
      e = Du(e);
      var n = si(t, e);
      n !== null && pe(n, t, e), Vr(t, e);
    }
  }
  var qs = !0;
  function F1(t, e, n, a) {
    var s = R.T;
    R.T = null;
    var r = q.p;
    try {
      q.p = 2, _r(t, e, n, a);
    } finally {
      q.p = r, R.T = s;
    }
  }
  function W1(t, e, n, a) {
    var s = R.T;
    R.T = null;
    var r = q.p;
    try {
      q.p = 8, _r(t, e, n, a);
    } finally {
      q.p = r, R.T = s;
    }
  }
  function _r(t, e, n, a) {
    if (qs) {
      var s = Ur(a);
      if (s === null)
        vr(
          t,
          e,
          a,
          Gs,
          n
        ), iy(t, a);
      else if ($1(
        s,
        t,
        e,
        n,
        a
      ))
        a.stopPropagation();
      else if (iy(t, a), e & 4 && -1 < P1.indexOf(t)) {
        for (; s !== null; ) {
          var r = zi(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var f = ei(r.pendingLanes);
                  if (f !== 0) {
                    var p = r;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; f; ) {
                      var T = 1 << 31 - Te(f);
                      p.entanglements[1] |= T, f &= ~T;
                    }
                    Pe(r), (bt & 6) === 0 && (Ms = ve() + 500, al(0));
                  }
                }
                break;
              case 31:
              case 13:
                p = si(r, 2), p !== null && pe(p, r, 2), xs(), Vr(r, 2);
            }
          if (r = Ur(a), r === null && vr(
            t,
            e,
            a,
            Gs,
            n
          ), r === s) break;
          s = r;
        }
        s !== null && a.stopPropagation();
      } else
        vr(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function Ur(t) {
    return t = Bu(t), Br(t);
  }
  var Gs = null;
  function Br(t) {
    if (Gs = null, t = Ci(t), t !== null) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = h(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = y(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Gs = t, null;
  }
  function ny(t) {
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
        switch (j0()) {
          case cf:
            return 2;
          case ff:
            return 8;
          case Vl:
          case L0:
            return 32;
          case hf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Nr = !1, Xn = null, Qn = null, Zn = null, fl = /* @__PURE__ */ new Map(), hl = /* @__PURE__ */ new Map(), Kn = [], P1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function iy(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Xn = null;
        break;
      case "dragenter":
      case "dragleave":
        Qn = null;
        break;
      case "mouseover":
      case "mouseout":
        Zn = null;
        break;
      case "pointerover":
      case "pointerout":
        fl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        hl.delete(e.pointerId);
    }
  }
  function dl(t, e, n, a, s, r) {
    return t === null || t.nativeEvent !== r ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: r,
      targetContainers: [s]
    }, e !== null && (e = zi(e), e !== null && ty(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, s !== null && e.indexOf(s) === -1 && e.push(s), t);
  }
  function $1(t, e, n, a, s) {
    switch (e) {
      case "focusin":
        return Xn = dl(
          Xn,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "dragenter":
        return Qn = dl(
          Qn,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "mouseover":
        return Zn = dl(
          Zn,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return fl.set(
          r,
          dl(
            fl.get(r) || null,
            t,
            e,
            n,
            a,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, hl.set(
          r,
          dl(
            hl.get(r) || null,
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
  function ay(t) {
    var e = Ci(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = h(n), e !== null) {
            t.blockedOn = e, vf(t.priority, function() {
              ey(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = y(n), e !== null) {
            t.blockedOn = e, vf(t.priority, function() {
              ey(n);
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
  function Xs(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Ur(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Uu = a, n.target.dispatchEvent(a), Uu = null;
      } else
        return e = zi(n), e !== null && ty(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function ly(t, e, n) {
    Xs(t) && n.delete(e);
  }
  function I1() {
    Nr = !1, Xn !== null && Xs(Xn) && (Xn = null), Qn !== null && Xs(Qn) && (Qn = null), Zn !== null && Xs(Zn) && (Zn = null), fl.forEach(ly), hl.forEach(ly);
  }
  function Qs(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Nr || (Nr = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      I1
    )));
  }
  var Zs = null;
  function sy(t) {
    Zs !== t && (Zs = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Zs === t && (Zs = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], s = t[e + 2];
          if (typeof a != "function") {
            if (Br(a || n) === null)
              continue;
            break;
          }
          var r = zi(n);
          r !== null && (t.splice(e, 3), e -= 3, Uo(
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
  function ra(t) {
    function e(T) {
      return Qs(T, t);
    }
    Xn !== null && Qs(Xn, t), Qn !== null && Qs(Qn, t), Zn !== null && Qs(Zn, t), fl.forEach(e), hl.forEach(e);
    for (var n = 0; n < Kn.length; n++) {
      var a = Kn[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Kn.length && (n = Kn[0], n.blockedOn === null); )
      ay(n), n.blockedOn === null && Kn.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var s = n[a], r = n[a + 1], f = s[ce] || null;
        if (typeof r == "function")
          f || sy(n);
        else if (f) {
          var p = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, f = r[ce] || null)
              p = f.formAction;
            else if (Br(s) !== null) continue;
          } else p = f.action;
          typeof p == "function" ? n[a + 1] = p : (n.splice(a, 3), a -= 3), sy(n);
        }
      }
  }
  function uy() {
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
  function jr(t) {
    this._internalRoot = t;
  }
  Ks.prototype.render = jr.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(o(409));
    var n = e.current, a = Ce();
    $m(n, a, t, e, null, null);
  }, Ks.prototype.unmount = jr.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      $m(t.current, 2, null, t, null, null), xs(), e[xi] = null;
    }
  };
  function Ks(t) {
    this._internalRoot = t;
  }
  Ks.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = gf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Kn.length && e !== 0 && e < Kn[n].priority; n++) ;
      Kn.splice(n, 0, t), n === 0 && ay(t);
    }
  };
  var oy = l.version;
  if (oy !== "19.2.8")
    throw Error(
      o(
        527,
        oy,
        "19.2.8"
      )
    );
  q.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
    return t = m(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var tS = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Js = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Js.isDisabled && Js.supportsFiber)
      try {
        Aa = Js.inject(
          tS
        ), Se = Js;
      } catch {
      }
  }
  return yl.createRoot = function(t, e) {
    if (!c(t)) throw Error(o(299));
    var n = !1, a = "", s = yd, r = pd, f = gd;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (s = e.onUncaughtError), e.onCaughtError !== void 0 && (r = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = Wm(
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
      uy
    ), t[xi] = e.current, gr(t), new jr(e);
  }, yl.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(o(299));
    var a = !1, s = "", r = yd, f = pd, p = gd, T = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (p = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), e = Wm(
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
      p,
      uy
    ), e.context = Pm(null), n = e.current, a = Ce(), a = Du(a), s = Vn(a), s.callback = null, _n(n, s, a), n = a, e.current.lanes = n, Ma(e, n), Pe(e), t[xi] = e.current, gr(t), new Ks(e);
  }, yl.version = "19.2.8", yl;
}
var Sy;
function fS() {
  if (Sy) return Hr.exports;
  Sy = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), Hr.exports = cS(), Hr.exports;
}
var hS = fS();
const qp = et.createContext({});
function Gp(i) {
  const l = et.useRef(null);
  return l.current === null && (l.current = i()), l.current;
}
const dS = typeof window < "u", mS = dS ? et.useLayoutEffect : et.useEffect, Rc = /* @__PURE__ */ et.createContext(null);
function Vc(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function ma(i, l) {
  const u = i.indexOf(l);
  u > -1 && i.splice(u, 1);
}
const en = (i, l, u) => u > l ? l : u < i ? i : u;
let yu = () => {
};
const Fn = {}, Xp = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i), Qp = (i) => typeof i == "object" && i !== null, Zp = (i) => /^0[^.\s]+$/u.test(i);
// @__NO_SIDE_EFFECTS__
function Kp(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const Ye = /* @__NO_SIDE_EFFECTS__ */ (i) => i, Cl = (...i) => i.reduce((l, u) => (o) => u(l(o))), ya = /* @__NO_SIDE_EFFECTS__ */ (i, l, u) => {
  const o = l - i;
  return o ? (u - i) / o : 1;
};
class _c {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return Vc(this.subscriptions, l), () => ma(this.subscriptions, l);
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
const ge = /* @__NO_SIDE_EFFECTS__ */ (i) => i * 1e3, He = /* @__NO_SIDE_EFFECTS__ */ (i) => i / 1e3, Jp = /* @__NO_SIDE_EFFECTS__ */ (i, l) => l ? i * (1e3 / l) : 0, yS = (i, l, u) => {
  const o = l - i;
  return ((u - i) % o + o) % o + i;
}, kp = (i, l, u) => (((1 - 3 * u + 3 * l) * i + (3 * u - 6 * l)) * i + 3 * l) * i, pS = 1e-7, gS = 12;
function vS(i, l, u, o, c) {
  let d, h, y = 0;
  do
    h = l + (u - l) / 2, d = kp(h, o, c) - i, d > 0 ? u = h : l = h;
  while (Math.abs(d) > pS && ++y < gS);
  return h;
}
// @__NO_SIDE_EFFECTS__
function zl(i, l, u, o) {
  if (i === l && u === o)
    return Ye;
  const c = (d) => vS(d, 0, 1, i, u);
  return (d) => d === 0 || d === 1 ? d : kp(c(d), l, o);
}
const Fp = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2, Uc = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => 1 - i(1 - l), Wp = /* @__PURE__ */ zl(0.33, 1.53, 0.69, 0.99), Bc = /* @__PURE__ */ Uc(Wp), Pp = /* @__PURE__ */ Fp(Bc), $p = (i) => i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * Bc(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))), Nc = (i) => 1 - Math.sin(Math.acos(i)), Ip = /* @__PURE__ */ Uc(Nc), tg = /* @__PURE__ */ Fp(Nc), SS = /* @__PURE__ */ zl(0.42, 0, 1, 1), TS = /* @__PURE__ */ zl(0, 0, 0.58, 1), eg = /* @__PURE__ */ zl(0.42, 0, 0.58, 1), ng = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] != "number";
// @__NO_SIDE_EFFECTS__
function ig(i, l) {
  return /* @__PURE__ */ ng(i) ? i[yS(0, i.length, l)] : i;
}
const ag = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] == "number", bS = {
  linear: Ye,
  easeIn: SS,
  easeInOut: eg,
  easeOut: TS,
  circIn: Nc,
  circInOut: tg,
  circOut: Ip,
  backIn: Bc,
  backInOut: Pp,
  backOut: Wp,
  anticipate: $p
}, AS = (i) => typeof i == "string", Ty = (i) => {
  if (/* @__PURE__ */ ag(i)) {
    yu(i.length === 4);
    const [l, u, o, c] = i;
    return /* @__PURE__ */ zl(l, u, o, c);
  } else if (AS(i))
    return bS[i];
  return i;
}, ks = [
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
function ES(i) {
  let l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), o = !1, c = !1;
  const d = /* @__PURE__ */ new WeakSet();
  let h = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function y(m) {
    d.has(m) && (g.schedule(m), i()), m(h);
  }
  const g = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (m, v = !1, S = !1) => {
      const _ = S && o ? l : u;
      return v && d.add(m), _.add(m), m;
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
      l = u, u = v, l.forEach(y), l.clear(), o = !1, c && (c = !1, g.process(m));
    }
  };
  return g;
}
const MS = 40;
function lg(i, l) {
  let u = !1, o = !0;
  const c = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, d = () => u = !0, h = ks.reduce((H, G) => (H[G] = ES(d), H), {}), { setup: y, read: g, resolveKeyframes: m, preUpdate: v, update: S, preRender: A, render: _, postRender: z } = h, j = () => {
    const H = Fn.useManualTiming, G = H ? c.timestamp : performance.now();
    u = !1, H || (c.delta = o ? 1e3 / 60 : Math.max(Math.min(G - c.timestamp, MS), 1)), c.timestamp = G, c.isProcessing = !0, y.process(c), g.process(c), m.process(c), v.process(c), S.process(c), A.process(c), _.process(c), z.process(c), c.isProcessing = !1, u && l && (o = !1, i(j));
  }, w = () => {
    u = !0, o = !0, c.isProcessing || i(j);
  };
  return { schedule: ks.reduce((H, G) => {
    const $ = h[G];
    return H[G] = (at, Z = !1, F = !1) => (u || w(), $.schedule(at, Z, F)), H;
  }, {}), cancel: (H) => {
    for (let G = 0; G < ks.length; G++)
      h[ks[G]].cancel(H);
  }, state: c, steps: h };
}
const { schedule: Rt, cancel: Wn, state: le, steps: Xr } = /* @__PURE__ */ lg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ye, !0);
let $s;
function DS() {
  $s = void 0;
}
const oe = {
  now: () => ($s === void 0 && oe.set(le.isProcessing || Fn.useManualTiming ? le.timestamp : performance.now()), $s),
  set: (i) => {
    $s = i, queueMicrotask(DS);
  }
}, sg = (i) => (l) => typeof l == "string" && l.startsWith(i), ug = /* @__PURE__ */ sg("--"), xS = /* @__PURE__ */ sg("var(--"), jc = (i) => xS(i) ? CS.test(i.split("/*")[0].trim()) : !1, CS = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function by(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const ga = {
  test: (i) => typeof i == "number",
  parse: parseFloat,
  transform: (i) => i
}, Al = {
  ...ga,
  transform: (i) => en(0, 1, i)
}, Fs = {
  ...ga,
  default: 1
}, vl = (i) => Math.round(i * 1e5) / 1e5, Lc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function zS(i) {
  return i == null;
}
const OS = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, wc = (i, l) => (u) => !!(typeof u == "string" && OS.test(u) && u.startsWith(i) || l && !zS(u) && Object.prototype.hasOwnProperty.call(u, l)), og = (i, l, u) => (o) => {
  if (typeof o != "string")
    return o;
  const [c, d, h, y] = o.match(Lc);
  return {
    [i]: parseFloat(c),
    [l]: parseFloat(d),
    [u]: parseFloat(h),
    alpha: y !== void 0 ? parseFloat(y) : 1
  };
}, RS = (i) => en(0, 255, i), Qr = {
  ...ga,
  transform: (i) => Math.round(RS(i))
}, bi = {
  test: /* @__PURE__ */ wc("rgb", "red"),
  parse: /* @__PURE__ */ og("red", "green", "blue"),
  transform: ({ red: i, green: l, blue: u, alpha: o = 1 }) => "rgba(" + Qr.transform(i) + ", " + Qr.transform(l) + ", " + Qr.transform(u) + ", " + vl(Al.transform(o)) + ")"
};
function VS(i) {
  let l = "", u = "", o = "", c = "";
  return i.length > 5 ? (l = i.substring(1, 3), u = i.substring(3, 5), o = i.substring(5, 7), c = i.substring(7, 9)) : (l = i.substring(1, 2), u = i.substring(2, 3), o = i.substring(3, 4), c = i.substring(4, 5), l += l, u += u, o += o, c += c), {
    red: parseInt(l, 16),
    green: parseInt(u, 16),
    blue: parseInt(o, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const lc = {
  test: /* @__PURE__ */ wc("#"),
  parse: VS,
  transform: bi.transform
}, Ol = /* @__NO_SIDE_EFFECTS__ */ (i) => ({
  test: (l) => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${i}`
}), bn = /* @__PURE__ */ Ol("deg"), tn = /* @__PURE__ */ Ol("%"), k = /* @__PURE__ */ Ol("px"), _S = /* @__PURE__ */ Ol("vh"), US = /* @__PURE__ */ Ol("vw"), Ay = {
  ...tn,
  parse: (i) => tn.parse(i) / 100,
  transform: (i) => tn.transform(i * 100)
}, fa = {
  test: /* @__PURE__ */ wc("hsl", "hue"),
  parse: /* @__PURE__ */ og("hue", "saturation", "lightness"),
  transform: ({ hue: i, saturation: l, lightness: u, alpha: o = 1 }) => "hsla(" + Math.round(i) + ", " + tn.transform(vl(l)) + ", " + tn.transform(vl(u)) + ", " + vl(Al.transform(o)) + ")"
}, Ft = {
  test: (i) => bi.test(i) || lc.test(i) || fa.test(i),
  parse: (i) => bi.test(i) ? bi.parse(i) : fa.test(i) ? fa.parse(i) : lc.parse(i),
  transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? bi.transform(i) : fa.transform(i),
  getAnimatableNone: (i) => {
    const l = Ft.parse(i);
    return l.alpha = 0, Ft.transform(l);
  }
}, BS = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function NS(i) {
  return isNaN(i) && typeof i == "string" && (i.match(Lc)?.length || 0) + (i.match(BS)?.length || 0) > 0;
}
const rg = "number", cg = "color", jS = "var", LS = "var(", Ey = "${}", wS = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function pa(i) {
  const l = i.toString(), u = [], o = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let d = 0;
  const y = l.replace(wS, (g) => (Ft.test(g) ? (o.color.push(d), c.push(cg), u.push(Ft.parse(g))) : g.startsWith(LS) ? (o.var.push(d), c.push(jS), u.push(g)) : (o.number.push(d), c.push(rg), u.push(parseFloat(g))), ++d, Ey)).split(Ey);
  return { values: u, split: y, indexes: o, types: c };
}
function HS(i) {
  return pa(i).values;
}
function fg({ split: i, types: l }) {
  const u = i.length;
  return (o) => {
    let c = "";
    for (let d = 0; d < u; d++)
      if (c += i[d], o[d] !== void 0) {
        const h = l[d];
        h === rg ? c += vl(o[d]) : h === cg ? c += Ft.transform(o[d]) : c += o[d];
      }
    return c;
  };
}
function YS(i) {
  return fg(pa(i));
}
const qS = (i) => typeof i == "number" ? 0 : Ft.test(i) ? Ft.getAnimatableNone(i) : i, GS = (i, l) => typeof i == "number" ? l?.trim().endsWith("/") ? i : 0 : qS(i);
function XS(i) {
  const l = pa(i);
  return fg(l)(l.values.map((o, c) => GS(o, l.split[c])));
}
const Ke = {
  test: NS,
  parse: HS,
  createTransformer: YS,
  getAnimatableNone: XS
};
function Zr(i, l, u) {
  return u < 0 && (u += 1), u > 1 && (u -= 1), u < 1 / 6 ? i + (l - i) * 6 * u : u < 1 / 2 ? l : u < 2 / 3 ? i + (l - i) * (2 / 3 - u) * 6 : i;
}
function QS({ hue: i, saturation: l, lightness: u, alpha: o }) {
  i /= 360, l /= 100, u /= 100;
  let c = 0, d = 0, h = 0;
  if (!l)
    c = d = h = u;
  else {
    const y = u < 0.5 ? u * (1 + l) : u + l - u * l, g = 2 * u - y;
    c = Zr(g, y, i + 1 / 3), d = Zr(g, y, i), h = Zr(g, y, i - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(h * 255),
    alpha: o
  };
}
function su(i, l) {
  return (u) => u > 0 ? l : i;
}
const zt = (i, l, u) => i + (l - i) * u, Kr = (i, l, u) => {
  const o = i * i, c = u * (l * l - o) + o;
  return c < 0 ? 0 : Math.sqrt(c);
}, ZS = [lc, bi, fa], KS = (i) => ZS.find((l) => l.test(i));
function My(i) {
  const l = KS(i);
  if (!l)
    return !1;
  let u = l.parse(i);
  return l === fa && (u = QS(u)), u;
}
const Dy = (i, l) => {
  const u = My(i), o = My(l);
  if (!u || !o)
    return su(i, l);
  const c = { ...u };
  return (d) => (c.red = Kr(u.red, o.red, d), c.green = Kr(u.green, o.green, d), c.blue = Kr(u.blue, o.blue, d), c.alpha = zt(u.alpha, o.alpha, d), bi.transform(c));
}, sc = /* @__PURE__ */ new Set(["none", "hidden"]);
function JS(i, l) {
  return sc.has(i) ? (u) => u <= 0 ? i : l : (u) => u >= 1 ? l : i;
}
function kS(i, l) {
  return (u) => zt(i, l, u);
}
function Hc(i) {
  return typeof i == "number" ? kS : typeof i == "string" ? jc(i) ? su : Ft.test(i) ? Dy : PS : Array.isArray(i) ? hg : typeof i == "object" ? Ft.test(i) ? Dy : FS : su;
}
function hg(i, l) {
  const u = [...i], o = u.length, c = i.map((d, h) => Hc(d)(d, l[h]));
  return (d) => {
    for (let h = 0; h < o; h++)
      u[h] = c[h](d);
    return u;
  };
}
function FS(i, l) {
  const u = { ...i, ...l }, o = {};
  for (const c in u)
    i[c] !== void 0 && l[c] !== void 0 && (o[c] = Hc(i[c])(i[c], l[c]));
  return (c) => {
    for (const d in o)
      u[d] = o[d](c);
    return u;
  };
}
function WS(i, l) {
  const u = [], o = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const d = l.types[c], h = i.indexes[d][o[d]], y = i.values[h] ?? 0;
    u[c] = y, o[d]++;
  }
  return u;
}
const PS = (i, l) => {
  const u = Ke.createTransformer(l), o = pa(i), c = pa(l);
  return o.indexes.var.length === c.indexes.var.length && o.indexes.color.length === c.indexes.color.length && o.indexes.number.length >= c.indexes.number.length ? sc.has(i) && !c.values.length || sc.has(l) && !o.values.length ? JS(i, l) : Cl(hg(WS(o, c), c.values), u) : su(i, l);
};
function dg(i, l, u) {
  return typeof i == "number" && typeof l == "number" && typeof u == "number" ? zt(i, l, u) : Hc(i)(i, l);
}
const $S = (i) => {
  const l = ({ timestamp: u }) => i(u);
  return {
    start: (u = !0) => Rt.update(l, u),
    stop: () => Wn(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => le.isProcessing ? le.timestamp : oe.now()
  };
}, mg = (i, l, u = 10) => {
  let o = "";
  const c = Math.max(Math.round(l / u), 2);
  for (let d = 0; d < c; d++)
    o += Math.round(i(d / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${o.substring(0, o.length - 2)})`;
}, uu = 2e4;
function Yc(i) {
  let l = 0;
  const u = 50;
  let o = i.next(l);
  for (; !o.done && l < uu; )
    l += u, o = i.next(l);
  return l >= uu ? 1 / 0 : l;
}
function yg(i, l = 100, u) {
  const o = u({ ...i, keyframes: [0, l] }), c = Math.min(Yc(o), uu);
  return {
    type: "keyframes",
    ease: (d) => o.next(c * d).value / l,
    duration: /* @__PURE__ */ He(c)
  };
}
const Ht = {
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
function uc(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const IS = 12;
function tT(i, l, u) {
  let o = u;
  for (let c = 1; c < IS; c++)
    o = o - i(o) / l(o);
  return o;
}
const Jr = 1e-3;
function eT({ duration: i = Ht.duration, bounce: l = Ht.bounce, velocity: u = Ht.velocity, mass: o = Ht.mass }) {
  let c, d, h = 1 - l;
  h = en(Ht.minDamping, Ht.maxDamping, h), i = en(Ht.minDuration, Ht.maxDuration, /* @__PURE__ */ He(i)), h < 1 ? (c = (m) => {
    const v = m * h, S = v * i, A = v - u, _ = uc(m, h), z = Math.exp(-S);
    return Jr - A / _ * z;
  }, d = (m) => {
    const S = m * h * i, A = S * u + u, _ = Math.pow(h, 2) * Math.pow(m, 2) * i, z = Math.exp(-S), j = uc(Math.pow(m, 2), h);
    return (-c(m) + Jr > 0 ? -1 : 1) * ((A - _) * z) / j;
  }) : (c = (m) => {
    const v = Math.exp(-m * i), S = (m - u) * i + 1;
    return -Jr + v * S;
  }, d = (m) => {
    const v = Math.exp(-m * i), S = (u - m) * (i * i);
    return v * S;
  });
  const y = 5 / i, g = tT(c, d, y);
  if (i = /* @__PURE__ */ ge(i), isNaN(g))
    return {
      stiffness: Ht.stiffness,
      damping: Ht.damping,
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
const nT = ["duration", "bounce"], iT = ["stiffness", "damping", "mass"];
function xy(i, l) {
  return l.some((u) => i[u] !== void 0);
}
function aT(i) {
  let l = {
    velocity: Ht.velocity,
    stiffness: Ht.stiffness,
    damping: Ht.damping,
    mass: Ht.mass,
    isResolvedFromDuration: !1,
    ...i
  };
  if (!xy(i, iT) && xy(i, nT))
    if (l.velocity = 0, i.visualDuration) {
      const u = i.visualDuration, o = 2 * Math.PI / (u * 1.2), c = o * o, d = 2 * en(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
      l = {
        ...l,
        mass: Ht.mass,
        stiffness: c,
        damping: d
      };
    } else {
      const u = eT({ ...i, velocity: 0 });
      l = {
        ...l,
        ...u,
        mass: Ht.mass
      }, l.isResolvedFromDuration = !0;
    }
  return l;
}
function El(i = Ht.visualDuration, l = Ht.bounce) {
  const u = typeof i != "object" ? {
    visualDuration: i,
    keyframes: [0, 1],
    bounce: l
  } : i;
  let { restSpeed: o, restDelta: c } = u;
  const d = u.keyframes[0], h = u.keyframes[u.keyframes.length - 1], y = { done: !1, value: d }, { stiffness: g, damping: m, mass: v, duration: S, velocity: A, isResolvedFromDuration: _ } = aT({
    ...u,
    velocity: -/* @__PURE__ */ He(u.velocity || 0)
  }), z = A || 0, j = m / (2 * Math.sqrt(g * v)), w = h - d, L = /* @__PURE__ */ He(Math.sqrt(g / v)), Y = Math.abs(w) < 5;
  o || (o = Y ? Ht.restSpeed.granular : Ht.restSpeed.default), c || (c = Y ? Ht.restDelta.granular : Ht.restDelta.default);
  let H, G, $, at, Z, F;
  if (j < 1)
    $ = uc(L, j), at = (z + j * L * w) / $, H = (P) => {
      const ot = Math.exp(-j * L * P);
      return h - ot * (at * Math.sin($ * P) + w * Math.cos($ * P));
    }, Z = j * L * at + w * $, F = j * L * w - at * $, G = (P) => Math.exp(-j * L * P) * (Z * Math.sin($ * P) + F * Math.cos($ * P));
  else if (j === 1) {
    H = (ot) => h - Math.exp(-L * ot) * (w + (z + L * w) * ot);
    const P = z + L * w;
    G = (ot) => Math.exp(-L * ot) * (L * P * ot - z);
  } else {
    const P = L * Math.sqrt(j * j - 1);
    H = (Ut) => {
      const Bt = Math.exp(-j * L * Ut), R = Math.min(P * Ut, 300);
      return h - Bt * ((z + j * L * w) * Math.sinh(R) + P * w * Math.cosh(R)) / P;
    };
    const ot = (z + j * L * w) / P, vt = j * L * ot - w * P, Yt = j * L * w - ot * P;
    G = (Ut) => {
      const Bt = Math.exp(-j * L * Ut), R = Math.min(P * Ut, 300);
      return Bt * (vt * Math.sinh(R) + Yt * Math.cosh(R));
    };
  }
  const nt = {
    calculatedDuration: _ && S || null,
    velocity: (P) => /* @__PURE__ */ ge(G(P)),
    next: (P) => {
      if (!_ && j < 1) {
        const vt = Math.exp(-j * L * P), Yt = Math.sin($ * P), Ut = Math.cos($ * P), Bt = h - vt * (at * Yt + w * Ut), R = /* @__PURE__ */ ge(vt * (Z * Yt + F * Ut));
        return y.done = Math.abs(R) <= o && Math.abs(h - Bt) <= c, y.value = y.done ? h : Bt, y;
      }
      const ot = H(P);
      if (_)
        y.done = P >= S;
      else {
        const vt = /* @__PURE__ */ ge(G(P));
        y.done = Math.abs(vt) <= o && Math.abs(h - ot) <= c;
      }
      return y.value = y.done ? h : ot, y;
    },
    toString: () => {
      const P = Math.min(Yc(nt), uu), ot = mg((vt) => nt.next(P * vt).value, P, 30);
      return P + "ms " + ot;
    },
    toTransition: () => {
    }
  };
  return nt;
}
El.applyToOptions = (i) => {
  const l = yg(i, 100, El);
  return i.ease = l.ease, i.duration = /* @__PURE__ */ ge(l.duration), i.type = "keyframes", i;
};
const lT = 5;
function pg(i, l, u) {
  const o = Math.max(l - lT, 0);
  return /* @__PURE__ */ Jp(u - i(o), l - o);
}
function oc({ keyframes: i, velocity: l = 0, power: u = 0.8, timeConstant: o = 325, bounceDamping: c = 10, bounceStiffness: d = 500, modifyTarget: h, min: y, max: g, restDelta: m = 0.5, restSpeed: v }) {
  const S = i[0], A = {
    done: !1,
    value: S
  }, _ = (F) => y !== void 0 && F < y || g !== void 0 && F > g, z = (F) => y === void 0 ? g : g === void 0 || Math.abs(y - F) < Math.abs(g - F) ? y : g;
  let j = u * l;
  const w = S + j, L = h === void 0 ? w : h(w);
  L !== w && (j = L - S);
  const Y = (F) => -j * Math.exp(-F / o), H = (F) => L + Y(F), G = (F) => {
    const nt = Y(F), P = H(F);
    A.done = Math.abs(nt) <= m, A.value = A.done ? L : P;
  };
  let $, at;
  const Z = (F) => {
    _(A.value) && ($ = F, at = El({
      keyframes: [A.value, z(A.value)],
      velocity: pg(H, F, A.value),
      // TODO: This should be passing * 1000
      damping: c,
      stiffness: d,
      restDelta: m,
      restSpeed: v
    }));
  };
  return Z(0), {
    calculatedDuration: null,
    next: (F) => {
      let nt = !1;
      return !at && $ === void 0 && (nt = !0, G(F), Z(F)), $ !== void 0 && F >= $ ? at.next(F - $) : (!nt && G(F), A);
    }
  };
}
function sT(i, l, u) {
  const o = [], c = u || Fn.mix || dg, d = i.length - 1;
  for (let h = 0; h < d; h++) {
    let y = c(i[h], i[h + 1]);
    if (l) {
      const g = Array.isArray(l) ? l[h] || Ye : l;
      y = Cl(g, y);
    }
    o.push(y);
  }
  return o;
}
function uT(i, l, { clamp: u = !0, ease: o, mixer: c } = {}) {
  const d = i.length;
  if (yu(d === l.length), d === 1)
    return () => l[0];
  if (d === 2 && l[0] === l[1])
    return () => l[1];
  const h = i[0] === i[1];
  i[0] > i[d - 1] && (i = [...i].reverse(), l = [...l].reverse());
  const y = sT(l, o, c), g = y.length, m = (v) => {
    if (h && v < i[0])
      return l[0];
    let S = 0;
    if (g > 1)
      for (; S < i.length - 2 && !(v < i[S + 1]); S++)
        ;
    const A = /* @__PURE__ */ ya(i[S], i[S + 1], v);
    return y[S](A);
  };
  return u ? (v) => m(en(i[0], i[d - 1], v)) : m;
}
function gg(i, l) {
  const u = i[i.length - 1];
  for (let o = 1; o <= l; o++) {
    const c = /* @__PURE__ */ ya(0, l, o);
    i.push(zt(u, 1, c));
  }
}
function vg(i) {
  const l = [0];
  return gg(l, i.length - 1), l;
}
function oT(i, l) {
  return i.map((u) => u * l);
}
function rT(i, l) {
  return i.map(() => l || eg).splice(0, i.length - 1);
}
function Sl({ duration: i = 300, keyframes: l, times: u, ease: o = "easeInOut" }) {
  const c = /* @__PURE__ */ ng(o) ? o.map(Ty) : Ty(o), d = {
    done: !1,
    value: l[0]
  }, h = oT(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    u && u.length === l.length ? u : vg(l),
    i
  ), y = uT(h, l, {
    ease: Array.isArray(c) ? c : rT(l, c)
  });
  return {
    calculatedDuration: i,
    next: (g) => (d.value = y(g), d.done = g >= i, d)
  };
}
const cT = (i) => i !== null;
function pu(i, { repeat: l, repeatType: u = "loop" }, o, c = 1) {
  const d = i.filter(cT), y = c < 0 || l && u !== "loop" && l % 2 === 1 ? 0 : d.length - 1;
  return !y || o === void 0 ? d[y] : o;
}
const fT = {
  decay: oc,
  inertia: oc,
  tween: Sl,
  keyframes: Sl,
  spring: El
};
function Sg(i) {
  typeof i.type == "string" && (i.type = fT[i.type]);
}
class qc {
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
const hT = (i) => i / 100;
class ou extends qc {
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
    Sg(l);
    const { type: u = Sl, repeat: o = 0, repeatDelay: c = 0, repeatType: d, velocity: h = 0 } = l;
    let { keyframes: y } = l;
    const g = u || Sl;
    g !== Sl && typeof y[0] != "number" && (this.mixKeyframes = Cl(hT, dg(y[0], y[1])), y = [0, 100]);
    const m = g({ ...l, keyframes: y });
    d === "mirror" && (this.mirroredGenerator = g({
      ...l,
      keyframes: [...y].reverse(),
      velocity: -h
    })), m.calculatedDuration === null && (m.calculatedDuration = Yc(m));
    const { calculatedDuration: v } = m;
    this.calculatedDuration = v, this.resolvedDuration = v + c, this.totalDuration = this.resolvedDuration * (o + 1) - c, this.generator = m;
  }
  updateTime(l) {
    const u = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = u;
  }
  tick(l, u = !1) {
    const { generator: o, totalDuration: c, mixKeyframes: d, mirroredGenerator: h, resolvedDuration: y, calculatedDuration: g } = this;
    if (this.startTime === null)
      return o.next(0);
    const { delay: m = 0, keyframes: v, repeat: S, repeatType: A, repeatDelay: _, type: z, onUpdate: j, finalKeyframe: w } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), u ? this.currentTime = l : this.updateTime(l);
    const L = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1), Y = this.playbackSpeed >= 0 ? L < 0 : L > c;
    this.currentTime = Math.max(L, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let H = this.currentTime, G = o;
    if (S) {
      const F = Math.min(this.currentTime, c) / y;
      let nt = Math.floor(F), P = F % 1;
      !P && F >= 1 && (P = 1), P === 1 && nt--, nt = Math.min(nt, S + 1), nt % 2 && (A === "reverse" ? (P = 1 - P, _ && (P -= _ / y)) : A === "mirror" && (G = h)), H = en(0, 1, P) * y;
    }
    let $;
    Y ? (this.delayState.value = v[0], $ = this.delayState) : $ = G.next(H), d && !Y && ($.value = d($.value));
    let { done: at } = $;
    !Y && g !== null && (at = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const Z = this.holdTime === null && (this.state === "finished" || this.state === "running" && at);
    return Z && z !== oc && ($.value = pu(v, this.options, w, this.speed)), j && j($.value), Z && this.finish(), $;
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
    return pg((o) => this.generator.next(o).value, l, u);
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
    const { driver: l = $S, startTime: u } = this.options;
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
function dT(i) {
  for (let l = 1; l < i.length; l++)
    i[l] ?? (i[l] = i[l - 1]);
}
const Ai = (i) => i * 180 / Math.PI, rc = (i) => {
  const l = Ai(Math.atan2(i[1], i[0]));
  return cc(l);
}, mT = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
  rotate: rc,
  rotateZ: rc,
  skewX: (i) => Ai(Math.atan(i[1])),
  skewY: (i) => Ai(Math.atan(i[2])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}, cc = (i) => (i = i % 360, i < 0 && (i += 360), i), Cy = rc, zy = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]), Oy = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]), yT = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: zy,
  scaleY: Oy,
  scale: (i) => (zy(i) + Oy(i)) / 2,
  rotateX: (i) => cc(Ai(Math.atan2(i[6], i[5]))),
  rotateY: (i) => cc(Ai(Math.atan2(-i[2], i[0]))),
  rotateZ: Cy,
  rotate: Cy,
  skewX: (i) => Ai(Math.atan(i[4])),
  skewY: (i) => Ai(Math.atan(i[1])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function fc(i) {
  return i.includes("scale") ? 1 : 0;
}
function hc(i, l) {
  if (!i || i === "none")
    return fc(l);
  const u = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, c;
  if (u)
    o = yT, c = u;
  else {
    const y = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    o = mT, c = y;
  }
  if (!c)
    return fc(l);
  const d = o[l], h = c[1].split(",").map(gT);
  return typeof d == "function" ? d(h) : h[d];
}
const pT = (i, l) => {
  const { transform: u = "none" } = getComputedStyle(i);
  return hc(u, l);
};
function gT(i) {
  return parseFloat(i.trim());
}
const va = [
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
], Sa = /* @__PURE__ */ new Set([...va, "pathRotation"]), Ry = (i) => i === ga || i === k, vT = /* @__PURE__ */ new Set(["x", "y", "z"]), ST = va.filter((i) => !vT.has(i));
function TT(i) {
  const l = [];
  return ST.forEach((u) => {
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
  x: (i, { transform: l }) => hc(l, "x"),
  y: (i, { transform: l }) => hc(l, "y")
};
kn.translateX = kn.x;
kn.translateY = kn.y;
const Ei = /* @__PURE__ */ new Set();
let dc = !1, mc = !1, yc = !1;
function Tg() {
  if (mc) {
    const i = Array.from(Ei).filter((o) => o.needsMeasurement), l = new Set(i.map((o) => o.element)), u = /* @__PURE__ */ new Map();
    l.forEach((o) => {
      const c = TT(o);
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
  mc = !1, dc = !1, Ei.forEach((i) => i.complete(yc)), Ei.clear();
}
function bg() {
  Ei.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (mc = !0);
  });
}
function bT() {
  yc = !0, bg(), Tg(), yc = !1;
}
class Gc {
  constructor(l, u, o, c, d, h = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = u, this.name = o, this.motionValue = c, this.element = d, this.isAsync = h;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Ei.add(this), dc || (dc = !0, Rt.read(bg), Rt.resolveKeyframes(Tg))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: u, element: o, motionValue: c } = this;
    if (l[0] === null) {
      const d = c?.get(), h = l[l.length - 1];
      if (d !== void 0)
        l[0] = d;
      else if (o && u) {
        const y = o.readValue(u, h);
        y != null && (l[0] = y);
      }
      l[0] === void 0 && (l[0] = h), c && d === void 0 && c.set(l[0]);
    }
    dT(l);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), Ei.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Ei.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const AT = (i) => i.startsWith("--");
function Ag(i, l, u) {
  AT(l) ? i.style.setProperty(l, u) : i.style[l] = u;
}
const ET = {};
function Eg(i, l) {
  const u = /* @__PURE__ */ Kp(i);
  return () => ET[l] ?? u();
}
const MT = /* @__PURE__ */ Eg(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Mg = /* @__PURE__ */ Eg(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), gl = ([i, l, u, o]) => `cubic-bezier(${i}, ${l}, ${u}, ${o})`, Vy = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ gl([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ gl([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ gl([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ gl([0.33, 1.53, 0.69, 0.99])
};
function Dg(i, l) {
  if (i)
    return typeof i == "function" ? Mg() ? mg(i, l) : "ease-out" : /* @__PURE__ */ ag(i) ? gl(i) : Array.isArray(i) ? i.map((u) => Dg(u, l) || Vy.easeOut) : Vy[i];
}
function DT(i, l, u, { delay: o = 0, duration: c = 300, repeat: d = 0, repeatType: h = "loop", ease: y = "easeOut", times: g } = {}, m = void 0) {
  const v = {
    [l]: u
  };
  g && (v.offset = g);
  const S = Dg(y, c);
  Array.isArray(S) && (v.easing = S);
  const A = {
    delay: o,
    duration: c,
    easing: Array.isArray(S) ? "linear" : S,
    fill: "both",
    iterations: d + 1,
    direction: h === "reverse" ? "alternate" : "normal"
  };
  return m && (A.pseudoElement = m), i.animate(v, A);
}
function Xc(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function xT({ type: i, ...l }) {
  return Xc(i) && Mg() ? i.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class xg extends qc {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: u, name: o, keyframes: c, pseudoElement: d, allowFlatten: h = !1, finalKeyframe: y, onComplete: g } = l;
    this.isPseudoElement = !!d, this.allowFlatten = h, this.options = l, yu(typeof l.type != "string");
    const m = xT(l);
    this.animation = DT(u, o, c, m, d), m.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !d) {
        const v = pu(c, this.options, y, this.speed);
        this.updateMotionValue && this.updateMotionValue(v), Ag(u, o, v), this.animation.cancel();
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
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, l && MT() ? (this.animation.timeline = l, u && (this.animation.rangeStart = u), o && (this.animation.rangeEnd = o), Ye) : c(this);
  }
}
const Cg = {
  anticipate: $p,
  backInOut: Pp,
  circInOut: tg
};
function CT(i) {
  return i in Cg;
}
function zT(i) {
  typeof i.ease == "string" && CT(i.ease) && (i.ease = Cg[i.ease]);
}
const kr = 10;
class OT extends xg {
  constructor(l) {
    zT(l), Sg(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
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
    const y = new ou({
      ...h,
      autoplay: !1
    }), g = Math.max(kr, oe.now() - this.startTime), m = en(0, kr, g - kr), v = y.sample(g).value, { name: S } = this.options;
    d && S && Ag(d, S, v), u.setWithVelocity(y.sample(Math.max(0, g - m)).value, v, m), y.stop();
  }
}
const _y = (i, l) => l === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && // It's animatable if we have a string
(Ke.test(i) || i === "0") && // And it contains numbers and/or colors
!i.startsWith("url("));
function RT(i) {
  const l = i[0];
  if (i.length === 1)
    return !0;
  for (let u = 0; u < i.length; u++)
    if (i[u] !== l)
      return !0;
}
function VT(i, l, u, o) {
  const c = i[0];
  if (c === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const d = i[i.length - 1], h = _y(c, l), y = _y(d, l);
  return !h || !y ? !1 : RT(i) || (u === "spring" || Xc(u)) && o;
}
function pc(i) {
  i.duration = 0, i.type = "keyframes";
}
const zg = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), _T = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function UT(i) {
  for (let l = 0; l < i.length; l++)
    if (typeof i[l] == "string" && _T.test(i[l]))
      return !0;
  return !1;
}
const BT = /* @__PURE__ */ new Set([
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
]), NT = /* @__PURE__ */ Kp(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function jT(i) {
  const { motionValue: l, name: u, repeatDelay: o, repeatType: c, damping: d, type: h, keyframes: y } = i, g = l?.owner?.current;
  if (!(g instanceof HTMLElement) && !(g instanceof SVGElement))
    return !1;
  const { onUpdate: m, transformTemplate: v } = l.owner.getProps();
  return NT() && u && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (zg.has(u) || BT.has(u) && UT(y)) && (u !== "transform" || !v) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !m && !o && c !== "mirror" && d !== 0 && h !== "inertia";
}
const LT = 40;
class wT extends qc {
  constructor({ autoplay: l = !0, delay: u = 0, type: o = "keyframes", repeat: c = 0, repeatDelay: d = 0, repeatType: h = "loop", keyframes: y, name: g, motionValue: m, element: v, ...S }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = oe.now();
    const A = {
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
    }, _ = v?.KeyframeResolver || Gc;
    this.keyframeResolver = new _(y, (z, j, w) => this.onKeyframesResolved(z, j, A, !w), g, m, v), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, u, o, c) {
    this.keyframeResolver = void 0;
    const { name: d, type: h, velocity: y, delay: g, isHandoff: m, onUpdate: v } = o;
    this.resolvedAt = oe.now();
    let S = !0;
    VT(l, d, h, y) || (S = !1, (Fn.instantAnimations || !g) && v?.(pu(l, o, u)), l[0] = l[l.length - 1], pc(o), o.repeat = 0);
    const _ = {
      startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > LT ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: u,
      ...o,
      keyframes: l
    }, z = S && !m && jT(_), j = _.motionValue?.owner?.current;
    let w;
    if (z)
      try {
        w = new OT({
          ..._,
          element: j
        });
      } catch {
        w = new ou(_);
      }
    else
      w = new ou(_);
    w.finished.then(() => {
      this.notifyFinished();
    }).catch(Ye), this.pendingTimeline && (this.stopTimeline = w.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = w;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, u) {
    return this.finished.finally(l).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), bT()), this._animation;
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
class HT {
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
    return Uy(this.animations, "duration");
  }
  get iterationDuration() {
    return Uy(this.animations, "iterationDuration");
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
function Uy(i, l) {
  let u = 0;
  for (let o = 0; o < i.length; o++) {
    const c = i[o][l];
    c !== null && c > u && (u = c);
  }
  return u;
}
class YT extends HT {
  then(l, u) {
    return this.finished.finally(l).then(() => {
    });
  }
}
function Og(i, l, u, o = 0, c = 1) {
  const d = Array.from(i).sort((m, v) => m.sortNodePosition(v)).indexOf(l), h = i.size, y = (h - 1) * o;
  return typeof u == "function" ? u(d, h) : c === 1 ? d * o : y - d * o;
}
const By = 30, qT = (i) => !isNaN(parseFloat(i));
class GT {
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
    this.current = l, this.updatedAt = oe.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = qT(this.current));
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
    this.events[l] || (this.events[l] = new _c());
    const o = this.events[l].add(u);
    return l === "change" ? () => {
      o(), Rt.read(() => {
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > By)
      return 0;
    const u = Math.min(this.updatedAt - this.prevUpdatedAt, By);
    return /* @__PURE__ */ Jp(parseFloat(this.current) - parseFloat(this.prevFrameValue), u);
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
  return new GT(i, l);
}
function Rg(i, l) {
  if (i?.inherit && l) {
    const { inherit: u, ...o } = i;
    return { ...l, ...o };
  }
  return i;
}
function Qc(i, l) {
  const u = i?.[l] ?? i?.default ?? i;
  return u !== i ? Rg(u, i) : u;
}
const XT = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, QT = (i) => ({
  type: "spring",
  stiffness: 550,
  damping: i === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), ZT = {
  type: "keyframes",
  duration: 0.8
}, KT = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, JT = (i, { keyframes: l }) => l.length > 2 ? ZT : Sa.has(i) ? i.startsWith("scale") ? QT(l[1]) : XT : KT, kT = /* @__PURE__ */ new Set([
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
function FT(i) {
  for (const l in i)
    if (!kT.has(l))
      return !0;
  return !1;
}
const Zc = (i, l, u, o = {}, c, d) => (h) => {
  const y = Qc(o, i) || {}, g = y.delay || o.delay || 0;
  let { elapsed: m = 0 } = o;
  m = m - /* @__PURE__ */ ge(g);
  const v = {
    keyframes: Array.isArray(u) ? u : [null, u],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...y,
    delay: -m,
    onUpdate: (A) => {
      l.set(A), y.onUpdate && y.onUpdate(A);
    },
    onComplete: () => {
      h(), y.onComplete && y.onComplete();
    },
    name: i,
    motionValue: l,
    element: d ? void 0 : c
  };
  FT(y) || Object.assign(v, JT(i, v)), v.duration && (v.duration = /* @__PURE__ */ ge(v.duration)), v.repeatDelay && (v.repeatDelay = /* @__PURE__ */ ge(v.repeatDelay)), v.from !== void 0 && (v.keyframes[0] = v.from);
  let S = !1;
  if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (pc(v), v.delay === 0 && (S = !0)), (Fn.instantAnimations || Fn.skipAnimations || c?.shouldSkipAnimations || y.skipAnimations) && (S = !0, pc(v), v.delay = 0), v.allowFlatten = !y.type && !y.ease, S && !d && l.get() !== void 0) {
    const A = pu(v.keyframes, y);
    if (A !== void 0) {
      Rt.update(() => {
        v.onUpdate(A), v.onComplete();
      });
      return;
    }
  }
  return y.isSync ? new ou(v) : new wT(v);
}, WT = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function PT(i) {
  const l = WT.exec(i);
  if (!l)
    return [,];
  const [, u, o, c] = l;
  return [`--${u ?? o}`, c];
}
function Vg(i, l, u = 1) {
  const [o, c] = PT(i);
  if (!o)
    return;
  const d = window.getComputedStyle(l).getPropertyValue(o);
  if (d) {
    const h = d.trim();
    return Xp(h) ? parseFloat(h) : h;
  }
  return jc(c) ? Vg(c, l, u + 1) : c;
}
function Ny(i) {
  const l = [{}, {}];
  return i?.values.forEach((u, o) => {
    l[0][o] = u.get(), l[1][o] = u.getVelocity();
  }), l;
}
function Kc(i, l, u, o) {
  if (typeof l == "function") {
    const [c, d] = Ny(o);
    l = l(u !== void 0 ? u : i.custom, c, d);
  }
  if (typeof l == "string" && (l = i.variants && i.variants[l]), typeof l == "function") {
    const [c, d] = Ny(o);
    l = l(u !== void 0 ? u : i.custom, c, d);
  }
  return l;
}
function Mi(i, l, u) {
  const o = i.getProps();
  return Kc(o, l, u !== void 0 ? u : o.custom, i);
}
const _g = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...va
]), gc = (i) => Array.isArray(i);
function $T(i, l, u) {
  i.hasValue(l) ? i.getValue(l).set(u) : i.addValue(l, Pn(u));
}
function IT(i) {
  return gc(i) ? i[i.length - 1] || 0 : i;
}
function tb(i, l) {
  const u = Mi(i, l);
  let { transitionEnd: o = {}, transition: c = {}, ...d } = u || {};
  d = { ...d, ...o };
  for (const h in d) {
    const y = IT(d[h]);
    $T(i, h, y);
  }
}
const Pt = (i) => !!(i && i.getVelocity);
function eb(i) {
  return !!(Pt(i) && i.add);
}
function vc(i, l) {
  const u = i.getValue("willChange");
  if (eb(u))
    return u.add(l);
  if (!u && Fn.WillChange) {
    const o = new Fn.WillChange("auto");
    i.addValue("willChange", o), o.add(l);
  }
}
function Jc(i) {
  return i.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const nb = "framerAppearId", Ug = "data-" + Jc(nb);
function Bg(i) {
  return i.props[Ug];
}
function ib({ protectedKeys: i, needsAnimating: l }, u) {
  const o = i.hasOwnProperty(u) && l[u] !== !0;
  return l[u] = !1, o;
}
function kc(i, l, { delay: u = 0, transitionOverride: o, type: c } = {}) {
  let { transition: d, transitionEnd: h, ...y } = l;
  const g = i.getDefaultTransition();
  d = d ? Rg(d, g) : g;
  const m = d?.reduceMotion, v = d?.skipAnimations;
  o && (d = o);
  const S = [], A = c && i.animationState && i.animationState.getState()[c], _ = d?.path;
  _ && _.animateVisualElement(i, y, d, u, S);
  for (const z in y) {
    const j = i.getValue(z, i.latestValues[z] ?? null), w = y[z];
    if (w === void 0 || A && ib(A, z))
      continue;
    const L = {
      delay: u,
      ...Qc(d || {}, z)
    };
    v && (L.skipAnimations = !0);
    const Y = j.get();
    if (Y !== void 0 && !j.isAnimating() && !Array.isArray(w) && w === Y && !L.velocity) {
      Rt.update(() => j.set(w));
      continue;
    }
    let H = !1;
    if (window.MotionHandoffAnimation) {
      const at = Bg(i);
      if (at) {
        const Z = window.MotionHandoffAnimation(at, z, Rt);
        Z !== null && (L.startTime = Z, H = !0);
      }
    }
    vc(i, z);
    const G = m ?? i.shouldReduceMotion;
    j.start(Zc(z, j, w, G && _g.has(z) ? { type: !1 } : L, i, H));
    const $ = j.animation;
    $ && S.push($);
  }
  if (h) {
    const z = () => Rt.update(() => {
      h && tb(i, h);
    });
    S.length ? Promise.all(S).then(z) : z();
  }
  return S;
}
function Sc(i, l, u = {}) {
  const o = Mi(i, l, u.type === "exit" ? i.presenceContext?.custom : void 0);
  let { transition: c = i.getDefaultTransition() || {} } = o || {};
  u.transitionOverride && (c = u.transitionOverride);
  const d = o ? () => Promise.all(kc(i, o, u)) : () => Promise.resolve(), h = i.variantChildren && i.variantChildren.size ? (g = 0) => {
    const { delayChildren: m = 0, staggerChildren: v, staggerDirection: S } = c;
    return ab(i, l, g, m, v, S, u);
  } : () => Promise.resolve(), { when: y } = c;
  if (y) {
    const [g, m] = y === "beforeChildren" ? [d, h] : [h, d];
    return g().then(() => m());
  } else
    return Promise.all([d(), h(u.delay)]);
}
function ab(i, l, u = 0, o = 0, c = 0, d = 1, h) {
  const y = [];
  for (const g of i.variantChildren)
    g.notify("AnimationStart", l), y.push(Sc(g, l, {
      ...h,
      delay: u + (typeof o == "function" ? 0 : o) + Og(i.variantChildren, g, o, c, d)
    }).then(() => g.notify("AnimationComplete", l)));
  return Promise.all(y);
}
function lb(i, l, u = {}) {
  i.notify("AnimationStart", l);
  let o;
  if (Array.isArray(l)) {
    const c = l.map((d) => Sc(i, d, u));
    o = Promise.all(c);
  } else if (typeof l == "string")
    o = Sc(i, l, u);
  else {
    const c = typeof l == "function" ? Mi(i, l, u.custom) : l;
    o = Promise.all(kc(i, c, u));
  }
  return o.then(() => {
    i.notify("AnimationComplete", l);
  });
}
const sb = {
  test: (i) => i === "auto",
  parse: (i) => i
}, Ng = (i) => (l) => l.test(i), jg = [ga, k, tn, bn, US, _S, sb], jy = (i) => jg.find(Ng(i));
function ub(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || Zp(i) : !0;
}
const ob = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function rb(i) {
  const [l, u] = i.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return i;
  const [o] = u.match(Lc) || [];
  if (!o)
    return i;
  const c = u.replace(o, "");
  let d = ob.has(l) ? 1 : 0;
  return o !== u && (d *= 100), l + "(" + d + c + ")";
}
const cb = /\b([a-z-]*)\(.*?\)/gu, Tc = {
  ...Ke,
  getAnimatableNone: (i) => {
    const l = i.match(cb);
    return l ? l.map(rb).join(" ") : i;
  }
}, bc = {
  ...Ke,
  getAnimatableNone: (i) => {
    const l = Ke.parse(i);
    return Ke.createTransformer(i)(l.map((o) => typeof o == "number" ? 0 : typeof o == "object" ? { ...o, alpha: 1 } : o));
  }
}, Ly = {
  ...ga,
  transform: Math.round
}, fb = {
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
  scale: Fs,
  scaleX: Fs,
  scaleY: Fs,
  scaleZ: Fs,
  skew: bn,
  skewX: bn,
  skewY: bn,
  distance: k,
  translateX: k,
  translateY: k,
  translateZ: k,
  x: k,
  y: k,
  z: k,
  perspective: k,
  transformPerspective: k,
  opacity: Al,
  originX: Ay,
  originY: Ay,
  originZ: k
}, ru = {
  // Border props
  borderWidth: k,
  borderTopWidth: k,
  borderRightWidth: k,
  borderBottomWidth: k,
  borderLeftWidth: k,
  borderRadius: k,
  borderTopLeftRadius: k,
  borderTopRightRadius: k,
  borderBottomRightRadius: k,
  borderBottomLeftRadius: k,
  // Positioning props
  width: k,
  maxWidth: k,
  height: k,
  maxHeight: k,
  top: k,
  right: k,
  bottom: k,
  left: k,
  inset: k,
  insetBlock: k,
  insetBlockStart: k,
  insetBlockEnd: k,
  insetInline: k,
  insetInlineStart: k,
  insetInlineEnd: k,
  // Spacing props
  padding: k,
  paddingTop: k,
  paddingRight: k,
  paddingBottom: k,
  paddingLeft: k,
  paddingBlock: k,
  paddingBlockStart: k,
  paddingBlockEnd: k,
  paddingInline: k,
  paddingInlineStart: k,
  paddingInlineEnd: k,
  margin: k,
  marginTop: k,
  marginRight: k,
  marginBottom: k,
  marginLeft: k,
  marginBlock: k,
  marginBlockStart: k,
  marginBlockEnd: k,
  marginInline: k,
  marginInlineStart: k,
  marginInlineEnd: k,
  // Typography
  fontSize: k,
  // Misc
  backgroundPositionX: k,
  backgroundPositionY: k,
  ...fb,
  zIndex: Ly,
  // SVG
  fillOpacity: Al,
  strokeOpacity: Al,
  numOctaves: Ly
}, hb = {
  ...ru,
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
  filter: Tc,
  WebkitFilter: Tc,
  mask: bc,
  WebkitMask: bc
}, Lg = (i) => hb[i], db = /* @__PURE__ */ new Set([Tc, bc]);
function wg(i, l) {
  let u = Lg(i);
  return db.has(u) || (u = Ke), u.getAnimatableNone ? u.getAnimatableNone(l) : void 0;
}
const mb = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function yb(i, l, u) {
  let o = 0, c;
  for (; o < i.length && !c; ) {
    const d = i[o];
    typeof d == "string" && !mb.has(d) && pa(d).values.length && (c = i[o]), o++;
  }
  if (c && u)
    for (const d of l)
      i[d] = wg(u, c);
}
class pb extends Gc {
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
      if (typeof S == "string" && (S = S.trim(), jc(S))) {
        const A = Vg(S, u.current);
        A !== void 0 && (l[v] = A), v === l.length - 1 && (this.finalKeyframe = S);
      }
    }
    if (this.resolveNoneKeyframes(), !_g.has(o) || l.length !== 2)
      return;
    const [c, d] = l, h = jy(c), y = jy(d), g = by(c), m = by(d);
    if (g !== m && kn[o]) {
      this.needsMeasurement = !0;
      return;
    }
    if (h !== y)
      if (Ry(h) && Ry(y))
        for (let v = 0; v < l.length; v++) {
          const S = l[v];
          typeof S == "string" && (l[v] = parseFloat(S));
        }
      else kn[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: u } = this, o = [];
    for (let c = 0; c < l.length; c++)
      (l[c] === null || ub(l[c])) && o.push(c);
    o.length && yb(l, o, u);
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
    o[d] = kn[u](l.measureViewportBox(), window.getComputedStyle(l.current)), h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h), this.removedTransforms?.length && this.removedTransforms.forEach(([y, g]) => {
      l.getValue(y).set(g);
    }), this.resolveNoneKeyframes();
  }
}
const Fc = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function Wc(i, l, u) {
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
const Ac = (i, l) => l && typeof i == "number" ? l.transform(i) : i;
function gb(i) {
  return Qp(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
const { schedule: Pc } = /* @__PURE__ */ lg(queueMicrotask, !1), Ze = {
  x: !1,
  y: !1
};
function Hg() {
  return Ze.x || Ze.y;
}
function vb(i) {
  return i === "x" || i === "y" ? Ze[i] ? null : (Ze[i] = !0, () => {
    Ze[i] = !1;
  }) : Ze.x || Ze.y ? null : (Ze.x = Ze.y = !0, () => {
    Ze.x = Ze.y = !1;
  });
}
function Yg(i, l) {
  const u = Wc(i), o = new AbortController(), c = {
    passive: !0,
    ...l,
    signal: o.signal
  };
  return [u, c, () => o.abort()];
}
function Sb(i) {
  return !(i.pointerType === "touch" || Hg());
}
function Tb(i, l, u = {}) {
  const [o, c, d] = Yg(i, u);
  return o.forEach((h) => {
    let y = !1, g = !1, m;
    const v = () => {
      h.removeEventListener("pointerleave", z);
    }, S = (w) => {
      m && (m(w), m = void 0), v();
    }, A = (w) => {
      y = !1, window.removeEventListener("pointerup", A), window.removeEventListener("pointercancel", A), g && (g = !1, S(w));
    }, _ = () => {
      y = !0, window.addEventListener("pointerup", A, c), window.addEventListener("pointercancel", A, c);
    }, z = (w) => {
      if (w.pointerType !== "touch") {
        if (y) {
          g = !0;
          return;
        }
        S(w);
      }
    }, j = (w) => {
      if (!Sb(w))
        return;
      g = !1;
      const L = l(h, w);
      typeof L == "function" && (m = L, h.addEventListener("pointerleave", z, c));
    };
    h.addEventListener("pointerenter", j, c), h.addEventListener("pointerdown", _, c);
  }), d;
}
const qg = (i, l) => l ? i === l ? !0 : qg(i, l.parentElement) : !1, $c = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1, bb = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Ab(i) {
  return bb.has(i.tagName) || i.isContentEditable === !0;
}
const Eb = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function Mb(i) {
  return Eb.has(i.tagName) || i.isContentEditable === !0;
}
const Is = /* @__PURE__ */ new WeakSet();
function wy(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function Fr(i, l) {
  i.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const Db = (i, l) => {
  const u = i.currentTarget;
  if (!u)
    return;
  const o = wy(() => {
    if (Is.has(u))
      return;
    Fr(u, "down");
    const c = wy(() => {
      Fr(u, "up");
    }), d = () => Fr(u, "cancel");
    u.addEventListener("keyup", c, l), u.addEventListener("blur", d, l);
  });
  u.addEventListener("keydown", o, l), u.addEventListener("blur", () => u.removeEventListener("keydown", o), l);
};
function Hy(i) {
  return $c(i) && !Hg();
}
const Yy = /* @__PURE__ */ new WeakSet();
function xb(i, l, u = {}) {
  const [o, c, d] = Yg(i, u), h = (y) => {
    const g = y.currentTarget;
    if (!Hy(y) || Yy.has(y))
      return;
    Is.add(g), u.stopPropagation && Yy.add(y);
    const m = l(g, y), v = { ...c, capture: !0 }, S = (z, j) => {
      window.removeEventListener("pointerup", A, v), window.removeEventListener("pointercancel", _, v), Is.has(g) && Is.delete(g), Hy(z) && typeof m == "function" && m(z, { success: j });
    }, A = (z) => {
      S(z, g === window || g === document || u.useGlobalTarget || qg(g, z.target));
    }, _ = (z) => {
      S(z, !1);
    };
    window.addEventListener("pointerup", A, v), window.addEventListener("pointercancel", _, v);
  };
  return o.forEach((y) => {
    (u.useGlobalTarget ? window : y).addEventListener("pointerdown", h, c), gb(y) && (y.addEventListener("focus", (m) => Db(m, c)), !Ab(y) && !y.hasAttribute("tabindex") && (y.tabIndex = 0));
  }), d;
}
function gu(i) {
  return Qp(i) && "ownerSVGElement" in i;
}
const tu = /* @__PURE__ */ new WeakMap();
let eu;
const Gg = (i, l, u) => (o, c) => c && c[0] ? c[0][i + "Size"] : gu(o) && "getBBox" in o ? o.getBBox()[l] : o[u], Cb = /* @__PURE__ */ Gg("inline", "width", "offsetWidth"), zb = /* @__PURE__ */ Gg("block", "height", "offsetHeight");
function Ob({ target: i, borderBoxSize: l }) {
  tu.get(i)?.forEach((u) => {
    u(i, {
      get width() {
        return Cb(i, l);
      },
      get height() {
        return zb(i, l);
      }
    });
  });
}
function Rb(i) {
  i.forEach(Ob);
}
function Vb() {
  typeof ResizeObserver > "u" || (eu = new ResizeObserver(Rb));
}
function _b(i, l) {
  eu || Vb();
  const u = Wc(i);
  return u.forEach((o) => {
    let c = tu.get(o);
    c || (c = /* @__PURE__ */ new Set(), tu.set(o, c)), c.add(l), eu?.observe(o);
  }), () => {
    u.forEach((o) => {
      const c = tu.get(o);
      c?.delete(l), c?.size || eu?.unobserve(o);
    });
  };
}
const nu = /* @__PURE__ */ new Set();
let ha;
function Ub() {
  ha = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    nu.forEach((l) => l(i));
  }, window.addEventListener("resize", ha);
}
function Bb(i) {
  return nu.add(i), ha || Ub(), () => {
    nu.delete(i), !nu.size && typeof ha == "function" && (window.removeEventListener("resize", ha), ha = void 0);
  };
}
function qy(i, l) {
  return typeof i == "function" ? Bb(i) : _b(i, l);
}
function Xg(i) {
  return gu(i) && i.tagName === "svg";
}
const Nb = [...jg, Ft, Ke], jb = (i) => Nb.find(Ng(i)), Gy = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), da = () => ({
  x: Gy(),
  y: Gy()
}), Xy = () => ({ min: 0, max: 0 }), kt = () => ({
  x: Xy(),
  y: Xy()
}), Ml = /* @__PURE__ */ new WeakMap();
function vu(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function Dl(i) {
  return typeof i == "string" || Array.isArray(i);
}
const Ic = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], tf = ["initial", ...Ic];
function Su(i) {
  return vu(i.animate) || tf.some((l) => Dl(i[l]));
}
function Qg(i) {
  return !!(Su(i) || i.variants);
}
function Lb(i, l, u) {
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
const cu = { current: null }, ef = { current: !1 }, wb = typeof window < "u";
function Zg() {
  if (ef.current = !0, !!wb)
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"), l = () => cu.current = i.matches;
      i.addEventListener("change", l), l();
    } else
      cu.current = !1;
}
const Qy = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let fu = {};
function Kg(i) {
  fu = i;
}
function Hb() {
  return fu;
}
class Jg {
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
  constructor({ parent: l, props: u, presenceContext: o, reducedMotionConfig: c, skipAnimations: d, blockInitialAnimation: h, visualState: y }, g = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Gc, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const _ = oe.now();
      this.renderScheduledAt < _ && (this.renderScheduledAt = _, Rt.render(this.render, !1, !0));
    };
    const { latestValues: m, renderState: v } = y;
    this.latestValues = m, this.baseTarget = { ...m }, this.initialValues = u.initial ? { ...m } : {}, this.renderState = v, this.parent = l, this.props = u, this.presenceContext = o, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = d, this.options = g, this.blockInitialAnimation = !!h, this.isControllingVariants = Su(u), this.isVariantNode = Qg(u), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: S, ...A } = this.scrapeMotionValuesFromProps(u, {}, this);
    for (const _ in A) {
      const z = A[_];
      m[_] !== void 0 && Pt(z) && z.set(m[_]);
    }
  }
  mount(l) {
    if (this.hasBeenMounted)
      for (const u in this.initialValues)
        this.values.get(u)?.jump(this.initialValues[u]), this.latestValues[u] = this.initialValues[u];
    this.current = l, Ml.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((u, o) => this.bindToMotionValue(o, u)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (ef.current || Zg(), this.shouldReduceMotion = cu.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
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
    if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), u.accelerate && zg.has(l) && this.current instanceof HTMLElement) {
      const { factory: h, keyframes: y, times: g, ease: m, duration: v } = u.accelerate, S = new xg({
        element: this.current,
        name: l,
        keyframes: y,
        times: g,
        ease: m,
        duration: /* @__PURE__ */ ge(v)
      }), A = h(S);
      this.valueSubscriptions.set(l, () => {
        A(), S.cancel();
      });
      return;
    }
    const o = Sa.has(l);
    o && this.onBindTransform && this.onBindTransform();
    const c = u.on("change", (h) => {
      this.latestValues[l] = h, this.props.onUpdate && Rt.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
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
    for (l in fu) {
      const u = fu[l];
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
    for (let o = 0; o < Qy.length; o++) {
      const c = Qy[o];
      this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const d = "on" + c, h = l[d];
      h && (this.propEventSubscriptions[c] = this.on(c, h));
    }
    this.prevMotionValues = Lb(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return o != null && (typeof o == "string" && (Xp(o) || Zp(o)) ? o = parseFloat(o) : !jb(o) && Ke.test(u) && (o = wg(l, u)), this.setBaseTarget(l, Pt(o) ? o.get() : o)), Pt(o) ? o.get() : o;
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
      const d = Kc(this.props, u, this.presenceContext?.custom);
      d && (o = d[l]);
    }
    if (u && o !== void 0)
      return o;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !Pt(c) ? c : this.initialValues[l] !== void 0 && o === void 0 ? void 0 : this.baseTarget[l];
  }
  on(l, u) {
    return this.events[l] || (this.events[l] = new _c()), this.events[l].add(u);
  }
  notify(l, ...u) {
    this.events[l] && this.events[l].notify(...u);
  }
  scheduleRenderMicrotask() {
    Pc.render(this.render);
  }
}
class kg extends Jg {
  constructor() {
    super(...arguments), this.KeyframeResolver = pb;
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
function Fg({ top: i, left: l, right: u, bottom: o }) {
  return {
    x: { min: l, max: u },
    y: { min: i, max: o }
  };
}
function Yb({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function qb(i, l) {
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
function Wr(i) {
  return i === void 0 || i === 1;
}
function Ec({ scale: i, scaleX: l, scaleY: u }) {
  return !Wr(i) || !Wr(l) || !Wr(u);
}
function Ti(i) {
  return Ec(i) || Wg(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function Wg(i) {
  return Zy(i.x) || Zy(i.y);
}
function Zy(i) {
  return i && i !== "0%";
}
function hu(i, l, u) {
  const o = i - u, c = l * o;
  return u + c;
}
function Ky(i, l, u, o, c) {
  return c !== void 0 && (i = hu(i, c, o)), hu(i, u, o) + l;
}
function Mc(i, l = 0, u = 1, o, c) {
  i.min = Ky(i.min, l, u, o, c), i.max = Ky(i.max, l, u, o, c);
}
function Pg(i, { x: l, y: u }) {
  Mc(i.x, l.translate, l.scale, l.originPoint), Mc(i.y, u.translate, u.scale, u.originPoint);
}
const Jy = 0.999999999999, ky = 1.0000000000001;
function Gb(i, l, u, o = !1) {
  const c = u.length;
  if (!c)
    return;
  l.x = l.y = 1;
  let d, h;
  for (let y = 0; y < c; y++) {
    d = u[y], h = d.projectionDelta;
    const { visualElement: g } = d.options;
    g && g.props.style && g.props.style.display === "contents" || (o && d.options.layoutScroll && d.scroll && d !== d.root && (Ie(i.x, -d.scroll.offset.x), Ie(i.y, -d.scroll.offset.y)), h && (l.x *= h.x.scale, l.y *= h.y.scale, Pg(i, h)), o && Ti(d.latestValues) && iu(i, d.latestValues, d.layout?.layoutBox));
  }
  l.x < ky && l.x > Jy && (l.x = 1), l.y < ky && l.y > Jy && (l.y = 1);
}
function Ie(i, l) {
  i.min += l, i.max += l;
}
function Fy(i, l, u, o, c = 0.5) {
  const d = zt(i.min, i.max, c);
  Mc(i, l, u, d, o);
}
function Wy(i, l) {
  return typeof i == "string" ? parseFloat(i) / 100 * (l.max - l.min) : i;
}
function iu(i, l, u) {
  const o = u ?? i;
  Fy(i.x, Wy(l.x, o.x), l.scaleX, l.scale, l.originX), Fy(i.y, Wy(l.y, o.y), l.scaleY, l.scale, l.originY);
}
function $g(i, l) {
  return Fg(qb(i.getBoundingClientRect(), l));
}
function Xb(i, l, u) {
  const o = $g(i, u), { scroll: c } = l;
  return c && (Ie(o.x, c.offset.x), Ie(o.y, c.offset.y)), o;
}
const Qb = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Zb = va.length;
function Kb(i, l, u) {
  let o = "", c = !0;
  for (let h = 0; h < Zb; h++) {
    const y = va[h], g = i[y];
    if (g === void 0)
      continue;
    let m = !0;
    if (typeof g == "number")
      m = g === (y.startsWith("scale") ? 1 : 0);
    else {
      const v = parseFloat(g);
      m = y.startsWith("scale") ? v === 1 : v === 0;
    }
    if (!m || u) {
      const v = Ac(g, ru[y]);
      if (!m) {
        c = !1;
        const S = Qb[y] || y;
        o += `${S}(${v}) `;
      }
      u && (l[y] = v);
    }
  }
  const d = i.pathRotation;
  return d && (c = !1, o += `rotate(${Ac(d, ru.pathRotation)}) `), o = o.trim(), u ? o = u(l, c ? "" : o) : c && (o = "none"), o;
}
function nf(i, l, u) {
  const { style: o, vars: c, transformOrigin: d } = i;
  let h = !1, y = !1;
  for (const g in l) {
    const m = l[g];
    if (Sa.has(g)) {
      h = !0;
      continue;
    } else if (ug(g)) {
      c[g] = m;
      continue;
    } else {
      const v = Ac(m, ru[g]);
      g.startsWith("origin") ? (y = !0, d[g] = v) : o[g] = v;
    }
  }
  if (l.transform || (h || u ? o.transform = Kb(l, i.transform, u) : o.transform && (o.transform = "none")), y) {
    const { originX: g = "50%", originY: m = "50%", originZ: v = 0 } = d;
    o.transformOrigin = `${g} ${m} ${v}`;
  }
}
function Ig(i, { style: l, vars: u }, o, c) {
  const d = i.style;
  let h;
  for (h in l)
    d[h] = l[h];
  c?.applyProjectionStyles(d, o);
  for (h in u)
    d.setProperty(h, u[h]);
}
function Py(i, l) {
  return l.max === l.min ? 0 : i / (l.max - l.min) * 100;
}
const pl = {
  correct: (i, l) => {
    if (!l.target)
      return i;
    if (typeof i == "string")
      if (k.test(i))
        i = parseFloat(i);
      else
        return i;
    const u = Py(i, l.target.x), o = Py(i, l.target.y);
    return `${u}% ${o}%`;
  }
}, Jb = {
  correct: (i, { treeScale: l, projectionDelta: u }) => {
    const o = i, c = Ke.parse(i);
    if (c.length > 5)
      return o;
    const d = Ke.createTransformer(i), h = typeof c[0] != "number" ? 1 : 0, y = u.x.scale * l.x, g = u.y.scale * l.y;
    c[0 + h] /= y, c[1 + h] /= g;
    const m = zt(y, g, 0.5);
    return typeof c[2 + h] == "number" && (c[2 + h] /= m), typeof c[3 + h] == "number" && (c[3 + h] /= m), d(c);
  }
}, Dc = {
  borderRadius: {
    ...pl,
    applyTo: [...Fc]
  },
  borderTopLeftRadius: pl,
  borderTopRightRadius: pl,
  borderBottomLeftRadius: pl,
  borderBottomRightRadius: pl,
  boxShadow: Jb
};
function t0(i, { layout: l, layoutId: u }) {
  return Sa.has(i) || i.startsWith("origin") || (l || u !== void 0) && (!!Dc[i] || i === "opacity");
}
function af(i, l, u) {
  const o = i.style, c = l?.style, d = {};
  if (!o)
    return d;
  for (const h in o)
    (Pt(o[h]) || c && Pt(c[h]) || t0(h, i) || u?.getValue(h)?.liveStyle !== void 0) && (d[h] = o[h]);
  return d;
}
function kb(i) {
  return window.getComputedStyle(i);
}
class e0 extends kg {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Ig;
  }
  mount(l) {
    yu(!!l.style), super.mount(l);
  }
  readValueFromInstance(l, u) {
    if (Sa.has(u))
      return this.projection?.isProjecting ? fc(u) : pT(l, u);
    {
      const o = kb(l), c = (ug(u) ? o.getPropertyValue(u) : o[u]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: u }) {
    return $g(l, u);
  }
  build(l, u, o) {
    nf(l, u, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, u, o) {
    return af(l, u, o);
  }
}
function Fb(i, l) {
  return i in l;
}
class Wb extends Jg {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(l, u) {
    if (Fb(u, l)) {
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
const Pb = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, $b = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Ib(i, l, u = 1, o = 0, c = !0) {
  i.pathLength = 1;
  const d = c ? Pb : $b;
  i[d.offset] = `${-o}`, i[d.array] = `${l} ${u}`;
}
const tA = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function n0(i, {
  attrX: l,
  attrY: u,
  attrScale: o,
  pathLength: c,
  pathSpacing: d = 1,
  pathOffset: h = 0,
  // This is object creation, which we try to avoid per-frame.
  ...y
}, g, m, v) {
  if (nf(i, y, m), g) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  i.attrs = i.style, i.style = {};
  const { attrs: S, style: A } = i;
  S.transform && (A.transform = S.transform, delete S.transform), (A.transform || S.transformOrigin) && (A.transformOrigin = S.transformOrigin ?? "50% 50%", delete S.transformOrigin), A.transform && (A.transformBox = v?.transformBox ?? "fill-box", delete S.transformBox);
  for (const _ of tA)
    S[_] !== void 0 && (A[_] = S[_], delete S[_]);
  l !== void 0 && (S.x = l), u !== void 0 && (S.y = u), o !== void 0 && (S.scale = o), c !== void 0 && Ib(S, c, d, h, !1);
}
const i0 = /* @__PURE__ */ new Set([
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
]), a0 = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function eA(i, l, u, o) {
  Ig(i, l, void 0, o);
  for (const c in l.attrs)
    i.setAttribute(i0.has(c) ? c : Jc(c), l.attrs[c]);
}
function l0(i, l, u) {
  const o = af(i, l, u);
  for (const c in i)
    if (Pt(i[c]) || Pt(l[c])) {
      const d = va.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      o[d] = i[c];
    }
  return o;
}
class s0 extends kg {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = kt;
  }
  getBaseTargetFromProps(l, u) {
    return l[u];
  }
  readValueFromInstance(l, u) {
    if (Sa.has(u)) {
      const o = Lg(u);
      return o && o.default || 0;
    }
    return u = i0.has(u) ? u : Jc(u), l.getAttribute(u);
  }
  scrapeMotionValuesFromProps(l, u, o) {
    return l0(l, u, o);
  }
  build(l, u, o) {
    n0(l, u, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(l, u, o, c) {
    eA(l, u, o, c);
  }
  mount(l) {
    this.isSVGTag = a0(l.tagName), super.mount(l);
  }
}
const nA = tf.length;
function u0(i) {
  if (!i)
    return;
  if (!i.isControllingVariants) {
    const u = i.parent ? u0(i.parent) || {} : {};
    return i.props.initial !== void 0 && (u.initial = i.props.initial), u;
  }
  const l = {};
  for (let u = 0; u < nA; u++) {
    const o = tf[u], c = i.props[o];
    (Dl(c) || c === !1) && (l[o] = c);
  }
  return l;
}
function o0(i, l) {
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
const iA = [...Ic].reverse(), aA = Ic.length;
function lA(i) {
  return (l) => Promise.all(l.map(({ animation: u, options: o }) => lb(i, u, o)));
}
function sA(i) {
  let l = lA(i), u = $y(), o = !0, c = !1;
  const d = (m) => (v, S) => {
    const A = Mi(i, S, m === "exit" ? i.presenceContext?.custom : void 0);
    if (A) {
      const { transition: _, transitionEnd: z, ...j } = A;
      v = { ...v, ...j, ...z };
    }
    return v;
  };
  function h(m) {
    l = m(i);
  }
  function y(m) {
    const { props: v } = i, S = u0(i.parent) || {}, A = [], _ = /* @__PURE__ */ new Set();
    let z = {}, j = 1 / 0;
    for (let L = 0; L < aA; L++) {
      const Y = iA[L], H = u[Y], G = v[Y] !== void 0 ? v[Y] : S[Y], $ = Dl(G), at = Y === m ? H.isActive : null;
      at === !1 && (j = L);
      let Z = G === S[Y] && G !== v[Y] && $;
      if (Z && (o || c) && i.manuallyAnimateOnMount && (Z = !1), H.protectedKeys = { ...z }, // If it isn't active and hasn't *just* been set as inactive
      !H.isActive && at === null || // If we didn't and don't have any defined prop for this animation type
      !G && !H.prevProp || // Or if the prop doesn't define an animation
      vu(G) || typeof G == "boolean")
        continue;
      if (Y === "exit" && H.isActive && at !== !0) {
        H.prevResolvedValues && (z = {
          ...z,
          ...H.prevResolvedValues
        });
        continue;
      }
      const F = uA(H.prevProp, G);
      let nt = F || // If we're making this variant active, we want to always make it active
      Y === m && H.isActive && !Z && $ || // If we removed a higher-priority variant (i is in reverse order)
      L > j && $, P = !1;
      const ot = Array.isArray(G) ? G : [G];
      let vt = ot.reduce(d(Y), {});
      at === !1 && (vt = {});
      const { prevResolvedValues: Yt = {} } = H, Ut = {
        ...Yt,
        ...vt
      }, Bt = (X) => {
        nt = !0, _.has(X) && (P = !0, _.delete(X)), H.needsAnimating[X] = !0;
        const lt = i.getValue(X);
        lt && (lt.liveStyle = !1);
      };
      for (const X in Ut) {
        const lt = vt[X], ft = Yt[X];
        if (z.hasOwnProperty(X))
          continue;
        let b = !1;
        gc(lt) && gc(ft) ? b = !o0(lt, ft) || F : b = lt !== ft, b ? lt != null ? Bt(X) : _.add(X) : lt !== void 0 && _.has(X) ? Bt(X) : H.protectedKeys[X] = !0;
      }
      H.prevProp = G, H.prevResolvedValues = vt, H.isActive && (z = { ...z, ...vt }), (o || c) && i.blockInitialAnimation && (nt = !1);
      const R = Z && F;
      nt && (!R || P) && A.push(...ot.map((X) => {
        const lt = { type: Y };
        if (typeof X == "string" && (o || c) && !R && i.manuallyAnimateOnMount && i.parent) {
          const { parent: ft } = i, b = Mi(ft, X);
          if (ft.enteringChildren && b) {
            const { delayChildren: B } = b.transition || {};
            lt.delay = Og(ft.enteringChildren, i, B);
          }
        }
        return {
          animation: X,
          options: lt
        };
      }));
    }
    if (_.size) {
      const L = {};
      if (typeof v.initial != "boolean") {
        const Y = Mi(i, Array.isArray(v.initial) ? v.initial[0] : v.initial);
        Y && Y.transition && (L.transition = Y.transition);
      }
      _.forEach((Y) => {
        const H = i.getBaseTarget(Y), G = i.getValue(Y);
        G && (G.liveStyle = !0), L[Y] = H ?? null;
      }), A.push({ animation: L });
    }
    let w = !!A.length;
    return o && (v.initial === !1 || v.initial === v.animate) && !i.manuallyAnimateOnMount && (w = !1), o = !1, c = !1, w ? l(A) : Promise.resolve();
  }
  function g(m, v) {
    if (u[m].isActive === v)
      return Promise.resolve();
    i.variantChildren?.forEach((A) => A.animationState?.setActive(m, v)), u[m].isActive = v;
    const S = y(m);
    for (const A in u)
      u[A].protectedKeys = {};
    return S;
  }
  return {
    animateChanges: y,
    setActive: g,
    setAnimateFunction: h,
    getState: () => u,
    reset: () => {
      u = $y(), c = !0;
    }
  };
}
function uA(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !o0(l, i) : !1;
}
function Si(i = !1) {
  return {
    isActive: i,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function $y() {
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
function xc(i, l) {
  i.min = l.min, i.max = l.max;
}
function Qe(i, l) {
  xc(i.x, l.x), xc(i.y, l.y);
}
function Iy(i, l) {
  i.translate = l.translate, i.scale = l.scale, i.originPoint = l.originPoint, i.origin = l.origin;
}
const r0 = 1e-4, oA = 1 - r0, rA = 1 + r0, c0 = 0.01, cA = 0 - c0, fA = 0 + c0;
function re(i) {
  return i.max - i.min;
}
function hA(i, l, u) {
  return Math.abs(i - l) <= u;
}
function tp(i, l, u, o = 0.5) {
  i.origin = o, i.originPoint = zt(l.min, l.max, i.origin), i.scale = re(u) / re(l), i.translate = zt(u.min, u.max, i.origin) - i.originPoint, (i.scale >= oA && i.scale <= rA || isNaN(i.scale)) && (i.scale = 1), (i.translate >= cA && i.translate <= fA || isNaN(i.translate)) && (i.translate = 0);
}
function Tl(i, l, u, o) {
  tp(i.x, l.x, u.x, o ? o.originX : void 0), tp(i.y, l.y, u.y, o ? o.originY : void 0);
}
function ep(i, l, u, o = 0) {
  const c = o ? zt(u.min, u.max, o) : u.min;
  i.min = c + l.min, i.max = i.min + re(l);
}
function dA(i, l, u, o) {
  ep(i.x, l.x, u.x, o?.x), ep(i.y, l.y, u.y, o?.y);
}
function np(i, l, u, o = 0) {
  const c = o ? zt(u.min, u.max, o) : u.min;
  i.min = l.min - c, i.max = i.min + re(l);
}
function du(i, l, u, o) {
  np(i.x, l.x, u.x, o?.x), np(i.y, l.y, u.y, o?.y);
}
function ip(i, l, u, o, c) {
  return i -= l, i = hu(i, 1 / u, o), c !== void 0 && (i = hu(i, 1 / c, o)), i;
}
function mA(i, l = 0, u = 1, o = 0.5, c, d = i, h = i) {
  if (tn.test(l) && (l = parseFloat(l), l = zt(h.min, h.max, l / 100) - h.min), typeof l != "number")
    return;
  let y = zt(d.min, d.max, o);
  i === d && (y -= l), i.min = ip(i.min, l, u, y, c), i.max = ip(i.max, l, u, y, c);
}
function ap(i, l, [u, o, c], d, h) {
  mA(i, l[u], l[o], l[c], l.scale, d, h);
}
const yA = ["x", "scaleX", "originX"], pA = ["y", "scaleY", "originY"];
function lp(i, l, u, o) {
  ap(i.x, l, yA, u ? u.x : void 0, o ? o.x : void 0), ap(i.y, l, pA, u ? u.y : void 0, o ? o.y : void 0);
}
function sp(i) {
  return i.translate === 0 && i.scale === 1;
}
function f0(i) {
  return sp(i.x) && sp(i.y);
}
function up(i, l) {
  return i.min === l.min && i.max === l.max;
}
function gA(i, l) {
  return up(i.x, l.x) && up(i.y, l.y);
}
function op(i, l) {
  return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max);
}
function h0(i, l) {
  return op(i.x, l.x) && op(i.y, l.y);
}
function rp(i) {
  return re(i.x) / re(i.y);
}
function cp(i, l) {
  return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint;
}
function $e(i) {
  return [i("x"), i("y")];
}
function vA(i, l, u) {
  let o = "";
  const c = i.x.translate / l.x, d = i.y.translate / l.y, h = u?.z || 0;
  if ((c || d || h) && (o = `translate3d(${c}px, ${d}px, ${h}px) `), (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `), u) {
    const { transformPerspective: m, rotate: v, pathRotation: S, rotateX: A, rotateY: _, skewX: z, skewY: j } = u;
    m && (o = `perspective(${m}px) ${o}`), v && (o += `rotate(${v}deg) `), S && (o += `rotate(${S}deg) `), A && (o += `rotateX(${A}deg) `), _ && (o += `rotateY(${_}deg) `), z && (o += `skewX(${z}deg) `), j && (o += `skewY(${j}deg) `);
  }
  const y = i.x.scale * l.x, g = i.y.scale * l.y;
  return (y !== 1 || g !== 1) && (o += `scale(${y}, ${g})`), o || "none";
}
const SA = Fc.length, fp = (i) => typeof i == "string" ? parseFloat(i) : i, hp = (i) => typeof i == "number" || k.test(i);
function TA(i, l, u, o, c, d) {
  c ? (i.opacity = zt(0, u.opacity ?? 1, bA(o)), i.opacityExit = zt(l.opacity ?? 1, 0, AA(o))) : d && (i.opacity = zt(l.opacity ?? 1, u.opacity ?? 1, o));
  for (let h = 0; h < SA; h++) {
    const y = Fc[h];
    let g = dp(l, y), m = dp(u, y);
    if (g === void 0 && m === void 0)
      continue;
    g || (g = 0), m || (m = 0), g === 0 || m === 0 || hp(g) === hp(m) ? (i[y] = Math.max(zt(fp(g), fp(m), o), 0), (tn.test(m) || tn.test(g)) && (i[y] += "%")) : i[y] = m;
  }
  (l.rotate || u.rotate) && (i.rotate = zt(l.rotate || 0, u.rotate || 0, o));
}
function dp(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const bA = /* @__PURE__ */ d0(0, 0.5, Ip), AA = /* @__PURE__ */ d0(0.5, 0.95, Ye);
function d0(i, l, u) {
  return (o) => o < i ? 0 : o > l ? 1 : u(/* @__PURE__ */ ya(i, l, o));
}
function m0(i, l, u) {
  const o = Pt(i) ? i : Pn(i);
  return o.start(Zc("", o, l, u)), o.animation;
}
function xl(i, l, u, o = { passive: !0 }) {
  return i.addEventListener(l, u, o), () => i.removeEventListener(l, u, o);
}
const EA = (i, l) => i.depth - l.depth;
class MA {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    Vc(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    ma(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(EA), this.isDirty = !1, this.children.forEach(l);
  }
}
function DA(i, l) {
  const u = oe.now(), o = ({ timestamp: c }) => {
    const d = c - u;
    d >= l && (Wn(o), i(d - l));
  };
  return Rt.setup(o, !0), () => Wn(o);
}
function au(i) {
  return Pt(i) ? i.get() : i;
}
class xA {
  constructor() {
    this.members = [];
  }
  add(l) {
    Vc(this.members, l);
    for (let u = this.members.length - 1; u >= 0; u--) {
      const o = this.members[u];
      if (o === l || o === this.lead || o === this.prevLead)
        continue;
      const c = o.instance;
      (!c || c.isConnected === !1) && !o.snapshot && (ma(this.members, o), o.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (ma(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
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
const lu = {
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
}, Pr = ["", "X", "Y", "Z"], CA = 1e3;
let zA = 0;
function $r(i, l, u, o) {
  const { latestValues: c } = l;
  c[i] && (u[i] = c[i], l.setStaticValue(i, 0), o && (o[i] = 0));
}
function y0(i) {
  if (i.hasCheckedOptimisedAppear = !0, i.root === i)
    return;
  const { visualElement: l } = i.options;
  if (!l)
    return;
  const u = Bg(l);
  if (window.MotionHasOptimisedAnimation(u, "transform")) {
    const { layout: c, layoutId: d } = i.options;
    window.MotionCancelOptimisedAnimation(u, "transform", Rt, !(c || d));
  }
  const { parent: o } = i;
  o && !o.hasCheckedOptimisedAppear && y0(o);
}
function p0({ attachResizeListener: i, defaultParent: l, measureScroll: u, checkIsScrollRoot: o, resetTransform: c }) {
  return class {
    constructor(h = {}, y = l?.()) {
      this.id = zA++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(VA), this.nodes.forEach(LA), this.nodes.forEach(wA), this.nodes.forEach(_A);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = h, this.root = y ? y.root || y : this, this.path = y ? [...y.path, y] : [], this.parent = y, this.depth = y ? y.depth + 1 : 0;
      for (let g = 0; g < this.path.length; g++)
        this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new MA());
    }
    addEventListener(h, y) {
      return this.eventHandlers.has(h) || this.eventHandlers.set(h, new _c()), this.eventHandlers.get(h).add(y);
    }
    notifyListeners(h, ...y) {
      const g = this.eventHandlers.get(h);
      g && g.notify(...y);
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
      this.isSVG = gu(h) && !Xg(h), this.instance = h;
      const { layoutId: y, layout: g, visualElement: m } = this.options;
      if (m && !m.current && m.mount(h), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (g || y) && (this.isLayoutDirty = !0), i) {
        let v, S = 0;
        const A = () => this.root.updateBlockedByResize = !1;
        Rt.read(() => {
          S = window.innerWidth;
        }), i(h, () => {
          const _ = window.innerWidth;
          _ !== S && (S = _, this.root.updateBlockedByResize = !0, v && v(), v = DA(A, 250), lu.hasAnimatedSinceResize && (lu.hasAnimatedSinceResize = !1, this.nodes.forEach(pp)));
        });
      }
      y && this.root.registerSharedNode(y, this), this.options.animate !== !1 && m && (y || g) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: S, hasRelativeLayoutChanged: A, layout: _ }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const z = this.options.transition || m.getDefaultTransition() || XA, { onLayoutAnimationStart: j, onLayoutAnimationComplete: w } = m.getProps(), L = !this.targetLayout || !h0(this.targetLayout, _), Y = !S && A;
        if (this.options.layoutRoot || this.resumeFrom || Y || S && (L || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const H = {
            ...Qc(z, "layout"),
            onPlay: j,
            onComplete: w
          };
          (m.shouldReduceMotion || this.options.layoutRoot) && (H.delay = 0, H.type = !1), this.startAnimation(H), this.setAnimationOrigin(v, Y, H.path);
        } else
          S || pp(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = _;
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(HA), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && y0(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const S = this.path[v];
        S.shouldResetTransform = !0, (typeof S.latestValues.x == "string" || typeof S.latestValues.y == "string") && (S.isLayoutDirty = !0), S.updateScroll("snapshot"), S.options.layoutRoot && S.willUpdate(!1);
      }
      const { layoutId: y, layout: g } = this.options;
      if (y === void 0 && !g)
        return;
      const m = this.getTransformTemplate();
      this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0, this.updateSnapshot(), h && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const g = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), g && this.nodes.forEach(BA), this.nodes.forEach(mp);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(yp);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(NA), this.nodes.forEach(jA), this.nodes.forEach(OA), this.nodes.forEach(RA)) : this.nodes.forEach(yp), this.clearAllSnapshots();
      const y = oe.now();
      le.delta = en(0, 1e3 / 60, y - le.timestamp), le.timestamp = y, le.isProcessing = !0, Xr.update.process(le), Xr.preRender.process(le), Xr.render.process(le), le.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Pc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(UA), this.sharedNodes.forEach(YA);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Rt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Rt.postRender(() => {
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
      const { visualElement: y } = this.options;
      y && y.notify("LayoutMeasure", this.layout.layoutBox, h ? h.layoutBox : void 0);
    }
    updateScroll(h = "measure") {
      let y = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === h && (y = !1), y && this.instance) {
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
      const h = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, y = this.projectionDelta && !f0(this.projectionDelta), g = this.getTransformTemplate(), m = g ? g(this.latestValues, "") : void 0, v = m !== this.prevTransformTemplateValue;
      h && this.instance && (y || Ti(this.latestValues) || v) && (c(this.instance, m), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(h = !0) {
      const y = this.measurePageBox();
      let g = this.removeElementScroll(y);
      return h && (g = this.removeTransform(g)), QA(g), {
        animationId: this.root.animationId,
        measuredBox: y,
        layoutBox: g,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: h } = this.options;
      if (!h)
        return kt();
      const y = h.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(ZA))) {
        const { scroll: m } = this.root;
        m && (Ie(y.x, m.offset.x), Ie(y.y, m.offset.y));
      }
      return y;
    }
    removeElementScroll(h) {
      const y = kt();
      if (Qe(y, h), this.scroll?.wasRoot)
        return y;
      for (let g = 0; g < this.path.length; g++) {
        const m = this.path[g], { scroll: v, options: S } = m;
        m !== this.root && v && S.layoutScroll && (v.wasRoot && Qe(y, h), Ie(y.x, v.offset.x), Ie(y.y, v.offset.y));
      }
      return y;
    }
    applyTransform(h, y = !1, g) {
      const m = g || kt();
      Qe(m, h);
      for (let v = 0; v < this.path.length; v++) {
        const S = this.path[v];
        !y && S.options.layoutScroll && S.scroll && S !== S.root && (Ie(m.x, -S.scroll.offset.x), Ie(m.y, -S.scroll.offset.y)), Ti(S.latestValues) && iu(m, S.latestValues, S.layout?.layoutBox);
      }
      return Ti(this.latestValues) && iu(m, this.latestValues, this.layout?.layoutBox), m;
    }
    removeTransform(h) {
      const y = kt();
      Qe(y, h);
      for (let g = 0; g < this.path.length; g++) {
        const m = this.path[g];
        if (!Ti(m.latestValues))
          continue;
        let v;
        m.instance && (Ec(m.latestValues) && m.updateSnapshot(), v = kt(), Qe(v, m.measurePageBox())), lp(y, m.latestValues, m.snapshot?.layoutBox, v);
      }
      return Ti(this.latestValues) && lp(y, this.latestValues), y;
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
      const y = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = y.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = y.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = y.isSharedProjectionDirty);
      const g = !!this.resumingFrom || this !== y;
      if (!(h || g && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: v, layoutId: S } = this.options;
      if (!this.layout || !(v || S))
        return;
      this.resolvedRelativeTargetAt = le.timestamp;
      const A = this.getClosestProjectingParent();
      A && this.linkedParentVersion !== A.layoutVersion && !A.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && A && A.layout ? this.createRelativeTarget(A, this.layout.layoutBox, A.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = kt(), this.targetWithTransforms = kt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), dA(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Qe(this.target, this.layout.layoutBox), Pg(this.target, this.targetDelta)) : Qe(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && A && !!A.resumingFrom == !!this.resumingFrom && !A.options.layoutScroll && A.target && this.animationProgress !== 1 ? this.createRelativeTarget(A, this.target, A.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ec(this.parent.latestValues) || Wg(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(h, y, g) {
      this.relativeParent = h, this.linkedParentVersion = h.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = kt(), this.relativeTargetOrigin = kt(), du(this.relativeTargetOrigin, y, g, this.options.layoutAnchor || void 0), Qe(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const h = this.getLead(), y = !!this.resumingFrom || this !== h;
      let g = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (g = !1), y && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1), this.resolvedRelativeTargetAt === le.timestamp && (g = !1), g)
        return;
      const { layout: m, layoutId: v } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(m || v))
        return;
      Qe(this.layoutCorrected, this.layout.layoutBox);
      const S = this.treeScale.x, A = this.treeScale.y;
      Gb(this.layoutCorrected, this.treeScale, this.path, y), h.layout && !h.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (h.target = h.layout.layoutBox, h.targetWithTransforms = kt());
      const { target: _ } = h;
      if (!_) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Iy(this.prevProjectionDelta.x, this.projectionDelta.x), Iy(this.prevProjectionDelta.y, this.projectionDelta.y)), Tl(this.projectionDelta, this.layoutCorrected, _, this.latestValues), (this.treeScale.x !== S || this.treeScale.y !== A || !cp(this.projectionDelta.x, this.prevProjectionDelta.x) || !cp(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", _));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(h = !0) {
      if (this.options.visualElement?.scheduleRender(), h) {
        const y = this.getStack();
        y && y.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = da(), this.projectionDelta = da(), this.projectionDeltaWithTransform = da();
    }
    setAnimationOrigin(h, y = !1, g) {
      const m = this.snapshot, v = m ? m.latestValues : {}, S = { ...this.latestValues }, A = da();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !y;
      const _ = kt(), z = m ? m.source : void 0, j = this.layout ? this.layout.source : void 0, w = z !== j, L = this.getStack(), Y = !L || L.members.length <= 1, H = !!(w && !Y && this.options.crossfade === !0 && !this.path.some(GA));
      this.animationProgress = 0;
      let G;
      const $ = g?.interpolateProjection(h);
      this.mixTargetDelta = (at) => {
        const Z = at / 1e3, F = $?.(Z);
        F ? (A.x.translate = F.x, A.x.scale = zt(h.x.scale, 1, Z), A.x.origin = h.x.origin, A.x.originPoint = h.x.originPoint, A.y.translate = F.y, A.y.scale = zt(h.y.scale, 1, Z), A.y.origin = h.y.origin, A.y.originPoint = h.y.originPoint) : (gp(A.x, h.x, Z), gp(A.y, h.y, Z)), this.setTargetDelta(A), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (du(_, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), qA(this.relativeTarget, this.relativeTargetOrigin, _, Z), G && gA(this.relativeTarget, G) && (this.isProjectionDirty = !1), G || (G = kt()), Qe(G, this.relativeTarget)), w && (this.animationValues = S, TA(S, v, this.latestValues, Z, H, Y)), F && F.rotate !== void 0 && (this.animationValues || (this.animationValues = S), this.animationValues.pathRotation = F.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = Z;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(h) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Wn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Rt.update(() => {
        lu.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Pn(0)), this.motionValue.jump(0, !1), this.currentAnimation = m0(this.motionValue, [0, 1e3], {
          ...h,
          velocity: 0,
          isSync: !0,
          onUpdate: (y) => {
            this.mixTargetDelta(y), h.onUpdate && h.onUpdate(y);
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(CA), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const h = this.getLead();
      let { targetWithTransforms: y, target: g, layout: m, latestValues: v } = h;
      if (!(!y || !g || !m)) {
        if (this !== h && this.layout && m && g0(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
          g = this.target || kt();
          const S = re(this.layout.layoutBox.x);
          g.x.min = h.target.x.min, g.x.max = g.x.min + S;
          const A = re(this.layout.layoutBox.y);
          g.y.min = h.target.y.min, g.y.max = g.y.min + A;
        }
        Qe(y, g), iu(y, v), Tl(this.projectionDeltaWithTransform, this.layoutCorrected, y, v);
      }
    }
    registerSharedNode(h, y) {
      this.sharedNodes.has(h) || this.sharedNodes.set(h, new xA()), this.sharedNodes.get(h).add(y);
      const m = y.options.initialPromotionConfig;
      y.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(y) : void 0
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
    promote({ needsReset: h, transition: y, preserveFollowOpacity: g } = {}) {
      const m = this.getStack();
      m && m.promote(this, g), h && (this.projectionDelta = void 0, this.needsReset = !0), y && this.setOptions({ transition: y });
    }
    relegate() {
      const h = this.getStack();
      return h ? h.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: h } = this.options;
      if (!h)
        return;
      let y = !1;
      const { latestValues: g } = h;
      if ((g.z || g.rotate || g.rotateX || g.rotateY || g.rotateZ || g.skewX || g.skewY) && (y = !0), !y)
        return;
      const m = {};
      g.z && $r("z", h, m, this.animationValues);
      for (let v = 0; v < Pr.length; v++)
        $r(`rotate${Pr[v]}`, h, m, this.animationValues), $r(`skew${Pr[v]}`, h, m, this.animationValues);
      h.render();
      for (const v in m)
        h.setStaticValue(v, m[v]), this.animationValues && (this.animationValues[v] = m[v]);
      h.scheduleRender();
    }
    applyProjectionStyles(h, y) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        h.visibility = "hidden";
        return;
      }
      const g = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, h.visibility = "", h.opacity = "", h.pointerEvents = au(y?.pointerEvents) || "", h.transform = g ? g(this.latestValues, "") : "none";
        return;
      }
      const m = this.getLead();
      if (!this.projectionDelta || !this.layout || !m.target) {
        this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, h.pointerEvents = au(y?.pointerEvents) || ""), this.hasProjected && !Ti(this.latestValues) && (h.transform = g ? g({}, "") : "none", this.hasProjected = !1);
        return;
      }
      h.visibility = "";
      const v = m.animationValues || m.latestValues;
      this.applyTransformsToTarget();
      let S = vA(this.projectionDeltaWithTransform, this.treeScale, v);
      g && (S = g(v, S)), h.transform = S;
      const { x: A, y: _ } = this.projectionDelta;
      h.transformOrigin = `${A.origin * 100}% ${_.origin * 100}% 0`, m.animationValues ? h.opacity = m === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : h.opacity = m === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
      for (const z in Dc) {
        if (v[z] === void 0)
          continue;
        const { correct: j, applyTo: w, isCSSVariable: L } = Dc[z], Y = S === "none" ? v[z] : j(v[z], m);
        if (w) {
          const H = w.length;
          for (let G = 0; G < H; G++)
            h[w[G]] = Y;
        } else
          L ? this.options.visualElement.renderState.vars[z] = Y : h[z] = Y;
      }
      this.options.layoutId && (h.pointerEvents = m === this ? au(y?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((h) => h.currentAnimation?.stop()), this.root.nodes.forEach(mp), this.root.sharedNodes.clear();
    }
  };
}
function OA(i) {
  i.updateLayout();
}
function RA(i) {
  const l = i.resumeFrom?.snapshot || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: u, measuredBox: o } = i.layout, { animationType: c } = i.options, d = l.source !== i.layout.source;
    if (c === "size")
      $e((v) => {
        const S = d ? l.measuredBox[v] : l.layoutBox[v], A = re(S);
        S.min = u[v].min, S.max = S.min + A;
      });
    else if (c === "x" || c === "y") {
      const v = c === "x" ? "y" : "x";
      xc(d ? l.measuredBox[v] : l.layoutBox[v], u[v]);
    } else g0(c, l.layoutBox, u) && $e((v) => {
      const S = d ? l.measuredBox[v] : l.layoutBox[v], A = re(u[v]);
      S.max = S.min + A, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[v].max = i.relativeTarget[v].min + A);
    });
    const h = da();
    Tl(h, u, l.layoutBox);
    const y = da();
    d ? Tl(y, i.applyTransform(o, !0), l.measuredBox) : Tl(y, u, l.layoutBox);
    const g = !f0(h);
    let m = !1;
    if (!i.resumeFrom) {
      const v = i.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: S, layout: A } = v;
        if (S && A) {
          const _ = i.options.layoutAnchor || void 0, z = kt();
          du(z, l.layoutBox, S.layoutBox, _);
          const j = kt();
          du(j, u, A.layoutBox, _), h0(z, j) || (m = !0), v.options.layoutRoot && (i.relativeTarget = j, i.relativeTargetOrigin = z, i.relativeParent = v);
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: u,
      snapshot: l,
      delta: y,
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
function VA(i) {
  i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function _A(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function UA(i) {
  i.clearSnapshot();
}
function mp(i) {
  i.clearMeasurements();
}
function BA(i) {
  i.isLayoutDirty = !0, i.updateLayout();
}
function yp(i) {
  i.isLayoutDirty = !1;
}
function NA(i) {
  i.isAnimationBlocked && i.layout && !i.isLayoutDirty && (i.snapshot = i.layout, i.isLayoutDirty = !0);
}
function jA(i) {
  const { visualElement: l } = i.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function pp(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0;
}
function LA(i) {
  i.resolveTargetDelta();
}
function wA(i) {
  i.calcProjection();
}
function HA(i) {
  i.resetSkewAndRotation();
}
function YA(i) {
  i.removeLeadSnapshot();
}
function gp(i, l, u) {
  i.translate = zt(l.translate, 0, u), i.scale = zt(l.scale, 1, u), i.origin = l.origin, i.originPoint = l.originPoint;
}
function vp(i, l, u, o) {
  i.min = zt(l.min, u.min, o), i.max = zt(l.max, u.max, o);
}
function qA(i, l, u, o) {
  vp(i.x, l.x, u.x, o), vp(i.y, l.y, u.y, o);
}
function GA(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const XA = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Sp = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), Tp = Sp("applewebkit/") && !Sp("chrome/") ? Math.round : Ye;
function bp(i) {
  i.min = Tp(i.min), i.max = Tp(i.max);
}
function QA(i) {
  bp(i.x), bp(i.y);
}
function g0(i, l, u) {
  return i === "position" || i === "preserve-aspect" && !hA(rp(l), rp(u), 0.2);
}
function ZA(i) {
  return i !== i.root && i.scroll?.wasRoot;
}
const KA = p0({
  attachResizeListener: (i, l) => xl(i, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), Ir = {
  current: void 0
}, v0 = p0({
  measureScroll: (i) => ({
    x: i.scrollLeft,
    y: i.scrollTop
  }),
  defaultParent: () => {
    if (!Ir.current) {
      const i = new KA({});
      i.mount(window), i.setOptions({ layoutScroll: !0 }), Ir.current = i;
    }
    return Ir.current;
  },
  resetTransform: (i, l) => {
    i.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed"
}), lf = et.createContext({
  transformPagePoint: (i) => i,
  isStatic: !1,
  reducedMotion: "never"
});
function JA(i = !0) {
  const l = et.useContext(Rc);
  if (l === null)
    return [!0, null];
  const { isPresent: u, onExitComplete: o, register: c } = l, d = et.useId();
  et.useEffect(() => {
    if (i)
      return c(d);
  }, [i]);
  const h = et.useCallback(() => i && o && o(d), [d, o, i]);
  return !u && o ? [!1, h] : [!0];
}
const S0 = et.createContext({ strict: !1 }), Ap = {
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
let Ep = !1;
function kA() {
  if (Ep)
    return;
  const i = {};
  for (const l in Ap)
    i[l] = {
      isEnabled: (u) => Ap[l].some((o) => !!u[o])
    };
  Kg(i), Ep = !0;
}
function T0() {
  return kA(), Hb();
}
function FA(i) {
  const l = T0();
  for (const u in i)
    l[u] = {
      ...l[u],
      ...i[u]
    };
  Kg(l);
}
const WA = /* @__PURE__ */ new Set([
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
function mu(i) {
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || WA.has(i);
}
let b0 = (i) => !mu(i);
function PA(i) {
  typeof i == "function" && (b0 = (l) => l.startsWith("on") ? !mu(l) : i(l));
}
try {
  PA(require("@emotion/is-prop-valid").default);
} catch {
}
function $A(i, l, u) {
  const o = {};
  for (const c in i)
    c === "values" && typeof i.values == "object" || Pt(i[c]) || (b0(c) || u === !0 && mu(c) || !l && !mu(c) || // If trying to use native HTML drag events, forward drag listeners
    i.draggable && c.startsWith("onDrag")) && (o[c] = i[c]);
  return o;
}
const Tu = /* @__PURE__ */ et.createContext({});
function IA(i, l) {
  if (Su(i)) {
    const { initial: u, animate: o } = i;
    return {
      initial: u === !1 || Dl(u) ? u : void 0,
      animate: Dl(o) ? o : void 0
    };
  }
  return i.inherit !== !1 ? l : {};
}
function tE(i) {
  const { initial: l, animate: u } = IA(i, et.useContext(Tu));
  return et.useMemo(() => ({ initial: l, animate: u }), [Mp(l), Mp(u)]);
}
function Mp(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const sf = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function A0(i, l, u) {
  for (const o in l)
    !Pt(l[o]) && !t0(o, u) && (i[o] = l[o]);
}
function eE({ transformTemplate: i }, l) {
  return et.useMemo(() => {
    const u = sf();
    return nf(u, l, i), Object.assign({}, u.vars, u.style);
  }, [l]);
}
function nE(i, l) {
  const u = i.style || {}, o = {};
  return A0(o, u, i), Object.assign(o, eE(i, l)), o;
}
function iE(i, l) {
  const u = {}, o = nE(i, l);
  return i.drag && i.dragListener !== !1 && (u.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (u.tabIndex = 0), u.style = o, u;
}
const E0 = () => ({
  ...sf(),
  attrs: {}
});
function aE(i, l, u, o) {
  const c = et.useMemo(() => {
    const d = E0();
    return n0(d, l, a0(o), i.transformTemplate, i.style), {
      ...d.attrs,
      style: { ...d.style }
    };
  }, [l]);
  if (i.style) {
    const d = {};
    A0(d, i.style, i), c.style = { ...d, ...c.style };
  }
  return c;
}
const lE = [
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
function uf(i) {
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
      !!(lE.indexOf(i) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(i))
    )
  );
}
function sE(i, l, u, { latestValues: o }, c, d = !1, h) {
  const g = (h ?? uf(i) ? aE : iE)(l, o, c, i), m = $A(l, typeof i == "string", d), v = i !== et.Fragment ? { ...m, ...g, ref: u } : {}, { children: S } = l, A = et.useMemo(() => Pt(S) ? S.get() : S, [S]);
  return et.createElement(i, {
    ...v,
    children: A
  });
}
function uE({ scrapeMotionValuesFromProps: i, createRenderState: l }, u, o, c) {
  return {
    latestValues: oE(u, o, c, i),
    renderState: l()
  };
}
function oE(i, l, u, o) {
  const c = {}, d = o(i, {});
  for (const A in d)
    c[A] = au(d[A]);
  let { initial: h, animate: y } = i;
  const g = Su(i), m = Qg(i);
  l && m && !g && i.inherit !== !1 && (h === void 0 && (h = l.initial), y === void 0 && (y = l.animate));
  let v = u ? u.initial === !1 : !1;
  v = v || h === !1;
  const S = v ? y : h;
  if (S && typeof S != "boolean" && !vu(S)) {
    const A = Array.isArray(S) ? S : [S];
    for (let _ = 0; _ < A.length; _++) {
      const z = Kc(i, A[_]);
      if (z) {
        const { transitionEnd: j, transition: w, ...L } = z;
        for (const Y in L) {
          let H = L[Y];
          if (Array.isArray(H)) {
            const G = v ? H.length - 1 : 0;
            H = H[G];
          }
          H !== null && (c[Y] = H);
        }
        for (const Y in j)
          c[Y] = j[Y];
      }
    }
  }
  return c;
}
const M0 = (i) => (l, u) => {
  const o = et.useContext(Tu), c = et.useContext(Rc), d = () => uE(i, l, o, c);
  return u ? d() : Gp(d);
}, rE = /* @__PURE__ */ M0({
  scrapeMotionValuesFromProps: af,
  createRenderState: sf
}), cE = /* @__PURE__ */ M0({
  scrapeMotionValuesFromProps: l0,
  createRenderState: E0
}), fE = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function hE(i, l, u) {
  const o = et.useRef(u);
  et.useInsertionEffect(() => {
    o.current = u;
  });
  const c = et.useRef(null);
  return et.useCallback((d) => {
    d && i.onMount?.(d), l && (d ? l.mount(d) : l.unmount());
    const h = o.current;
    if (typeof h == "function")
      if (d) {
        const y = h(d);
        typeof y == "function" && (c.current = y);
      } else c.current ? (c.current(), c.current = null) : h(d);
    else h && (h.current = d);
  }, [l]);
}
const D0 = et.createContext({});
function ca(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function dE(i, l, u, o, c, d) {
  const { visualElement: h } = et.useContext(Tu), y = et.useContext(S0), g = et.useContext(Rc), m = et.useContext(lf), v = m.reducedMotion, S = m.skipAnimations, A = et.useRef(null), _ = et.useRef(!1);
  o = o || y.renderer, !A.current && o && (A.current = o(i, {
    visualState: l,
    parent: h,
    props: u,
    presenceContext: g,
    blockInitialAnimation: g ? g.initial === !1 : !1,
    reducedMotionConfig: v,
    skipAnimations: S,
    isSVG: d
  }), _.current && A.current && (A.current.manuallyAnimateOnMount = !0));
  const z = A.current, j = et.useContext(D0);
  z && !z.projection && c && (z.type === "html" || z.type === "svg") && mE(A.current, u, c, j);
  const w = et.useRef(!1);
  et.useInsertionEffect(() => {
    z && w.current && z.update(u, g);
  });
  const L = u[Ug], Y = et.useRef(!!L && typeof window < "u" && !window.MotionHandoffIsComplete?.(L) && window.MotionHasOptimisedAnimation?.(L));
  return mS(() => {
    _.current = !0, z && (w.current = !0, window.MotionIsMounted = !0, z.updateFeatures(), z.scheduleRenderMicrotask(), Y.current && z.animationState && z.animationState.animateChanges());
  }), et.useEffect(() => {
    z && (!Y.current && z.animationState && z.animationState.animateChanges(), Y.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(L);
    }), Y.current = !1), z.enteringChildren = void 0);
  }), z;
}
function mE(i, l, u, o) {
  const { layoutId: c, layout: d, drag: h, dragConstraints: y, layoutScroll: g, layoutRoot: m, layoutAnchor: v, layoutCrossfade: S } = l;
  i.projection = new u(i.latestValues, l["data-framer-portal-id"] ? void 0 : x0(i.parent)), i.projection.setOptions({
    layoutId: c,
    layout: d,
    alwaysMeasureLayout: !!h || y && ca(y),
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
function x0(i) {
  if (i)
    return i.options.allowProjection !== !1 ? i.projection : x0(i.parent);
}
function tc(i, { forwardMotionProps: l = !1, type: u } = {}, o, c) {
  o && FA(o);
  const d = u ? u === "svg" : uf(i), h = d ? cE : rE;
  function y(m, v) {
    let S;
    const A = {
      ...et.useContext(lf),
      ...m,
      layoutId: yE(m)
    }, { isStatic: _ } = A, z = tE(m), j = h(m, _);
    if (!_ && typeof window < "u") {
      pE();
      const w = gE(A);
      S = w.MeasureLayout, z.visualElement = dE(i, j, A, c, w.ProjectionNode, d);
    }
    return At.jsxs(Tu.Provider, { value: z, children: [S && z.visualElement ? At.jsx(S, { visualElement: z.visualElement, ...A }) : null, sE(i, m, hE(j, z.visualElement, v), j, _, l, d)] });
  }
  y.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const g = et.forwardRef(y);
  return g[fE] = i, g;
}
function yE({ layoutId: i }) {
  const l = et.useContext(qp).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function pE(i, l) {
  et.useContext(S0).strict;
}
function gE(i) {
  const l = T0(), { drag: u, layout: o } = l;
  if (!u && !o)
    return {};
  const c = { ...u, ...o };
  return {
    MeasureLayout: u?.isEnabled(i) || o?.isEnabled(i) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function vE(i, l) {
  if (typeof Proxy > "u")
    return tc;
  const u = /* @__PURE__ */ new Map(), o = (d, h) => tc(d, h, i, l), c = (d, h) => o(d, h);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (d, h) => h === "create" ? o : (u.has(h) || u.set(h, tc(h, void 0, i, l)), u.get(h))
  });
}
const SE = (i, l) => l.isSVG ?? uf(i) ? new s0(l) : new e0(l, {
  allowProjection: i !== et.Fragment
});
class TE extends $n {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = sA(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    vu(l) && (this.unmountControls = l.subscribe(this.node));
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
let bE = 0;
class AE extends $n {
  constructor() {
    super(...arguments), this.id = bE++, this.isExitComplete = !1;
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
          const y = Mi(this.node, d, h);
          if (y) {
            const { transition: g, transitionEnd: m, ...v } = y;
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
const EE = {
  animation: {
    Feature: TE
  },
  exit: {
    Feature: AE
  }
};
function Rl(i) {
  return {
    point: {
      x: i.pageX,
      y: i.pageY
    }
  };
}
const ME = (i) => (l) => $c(l) && i(l, Rl(l));
function bl(i, l, u, o) {
  return xl(i, l, ME(u), o);
}
const C0 = ({ current: i }) => i ? i.ownerDocument.defaultView : null, Dp = (i, l) => Math.abs(i - l);
function DE(i, l) {
  const u = Dp(i.x, l.x), o = Dp(i.y, l.y);
  return Math.sqrt(u ** 2 + o ** 2);
}
const xp = /* @__PURE__ */ new Set(["auto", "scroll"]);
class z0 {
  constructor(l, u, { transformPagePoint: o, contextWindow: c = window, dragSnapToOrigin: d = !1, distanceThreshold: h = 3, element: y } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (z) => {
      this.handleScroll(z.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Ws(this.lastRawMoveEventInfo, this.transformPagePoint));
      const z = ec(this.lastMoveEventInfo, this.history), j = this.startEvent !== null, w = DE(z.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!j && !w)
        return;
      const { point: L } = z, { timestamp: Y } = le;
      this.history.push({ ...L, timestamp: Y });
      const { onStart: H, onMove: G } = this.handlers;
      j || (H && H(this.lastMoveEvent, z), this.startEvent = this.lastMoveEvent), G && G(this.lastMoveEvent, z);
    }, this.handlePointerMove = (z, j) => {
      this.lastMoveEvent = z, this.lastRawMoveEventInfo = j, this.lastMoveEventInfo = Ws(j, this.transformPagePoint), Rt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (z, j) => {
      this.end();
      const { onEnd: w, onSessionEnd: L, resumeAnimation: Y } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && Y && Y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const H = ec(z.type === "pointercancel" ? this.lastMoveEventInfo : Ws(j, this.transformPagePoint), this.history);
      this.startEvent && w && w(z, H), L && L(z, H);
    }, !$c(l))
      return;
    this.dragSnapToOrigin = d, this.handlers = u, this.transformPagePoint = o, this.distanceThreshold = h, this.contextWindow = c || window;
    const g = Rl(l), m = Ws(g, this.transformPagePoint), { point: v } = m, { timestamp: S } = le;
    this.history = [{ ...v, timestamp: S }];
    const { onSessionStart: A } = u;
    A && A(l, ec(m, this.history));
    const _ = { passive: !0, capture: !0 };
    this.removeListeners = Cl(bl(this.contextWindow, "pointermove", this.handlePointerMove, _), bl(this.contextWindow, "pointerup", this.handlePointerUp, _), bl(this.contextWindow, "pointercancel", this.handlePointerUp, _)), y && this.startScrollTracking(y);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let u = l.parentElement;
    for (; u; ) {
      const o = getComputedStyle(u);
      (xp.has(o.overflowX) || xp.has(o.overflowY)) && this.scrollPositions.set(u, {
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
    d.x === 0 && d.y === 0 || (o ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += d.x, this.lastMoveEventInfo.point.y += d.y) : this.history.length > 0 && (this.history[0].x -= d.x, this.history[0].y -= d.y), this.scrollPositions.set(l, c), Rt.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Wn(this.updatePoint);
  }
}
function Ws(i, l) {
  return l ? { point: l(i.point) } : i;
}
function Cp(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function ec({ point: i }, l) {
  return {
    point: i,
    delta: Cp(i, O0(l)),
    offset: Cp(i, xE(l)),
    velocity: CE(l, 0.1)
  };
}
function xE(i) {
  return i[0];
}
function O0(i) {
  return i[i.length - 1];
}
function CE(i, l) {
  if (i.length < 2)
    return { x: 0, y: 0 };
  let u = i.length - 1, o = null;
  const c = O0(i);
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
function zE(i, { min: l, max: u }, o) {
  return l !== void 0 && i < l ? i = o ? zt(l, i, o.min) : Math.max(i, l) : u !== void 0 && i > u && (i = o ? zt(u, i, o.max) : Math.min(i, u)), i;
}
function zp(i, l, u) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: u !== void 0 ? i.max + u - (i.max - i.min) : void 0
  };
}
function OE(i, { top: l, left: u, bottom: o, right: c }) {
  return {
    x: zp(i.x, u, c),
    y: zp(i.y, l, o)
  };
}
function Op(i, l) {
  let u = l.min - i.min, o = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([u, o] = [o, u]), { min: u, max: o };
}
function RE(i, l) {
  return {
    x: Op(i.x, l.x),
    y: Op(i.y, l.y)
  };
}
function VE(i, l) {
  let u = 0.5;
  const o = re(i), c = re(l);
  return c > o ? u = /* @__PURE__ */ ya(l.min, l.max - o, i.min) : o > c && (u = /* @__PURE__ */ ya(i.min, i.max - c, l.min)), en(0, 1, u);
}
function _E(i, l) {
  const u = {};
  return l.min !== void 0 && (u.min = l.min - i.min), l.max !== void 0 && (u.max = l.max - i.min), u;
}
const Cc = 0.35;
function UE(i = Cc) {
  return i === !1 ? i = 0 : i === !0 && (i = Cc), {
    x: Rp(i, "left", "right"),
    y: Rp(i, "top", "bottom")
  };
}
function Rp(i, l, u) {
  return {
    min: Vp(i, l),
    max: Vp(i, u)
  };
}
function Vp(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
const BE = /* @__PURE__ */ new WeakMap();
class NE {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = kt(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l;
  }
  start(l, { snapToCursor: u = !1, distanceThreshold: o } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1)
      return;
    const d = (S) => {
      u && this.snapToCursor(Rl(S).point), this.stopAnimation();
    }, h = (S, A) => {
      const { drag: _, dragPropagation: z, onDragStart: j } = this.getProps();
      if (_ && !z && (this.openDragLock && this.openDragLock(), this.openDragLock = vb(_), !this.openDragLock))
        return;
      this.latestPointerEvent = S, this.latestPanInfo = A, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $e((L) => {
        let Y = this.getAxisMotionValue(L).get() || 0;
        if (tn.test(Y)) {
          const { projection: H } = this.visualElement;
          if (H && H.layout) {
            const G = H.layout.layoutBox[L];
            G && (Y = re(G) * (parseFloat(Y) / 100));
          }
        }
        this.originPoint[L] = Y;
      }), j && Rt.update(() => j(S, A), !1, !0), vc(this.visualElement, "transform");
      const { animationState: w } = this.visualElement;
      w && w.setActive("whileDrag", !0);
    }, y = (S, A) => {
      this.latestPointerEvent = S, this.latestPanInfo = A;
      const { dragPropagation: _, dragDirectionLock: z, onDirectionLock: j, onDrag: w } = this.getProps();
      if (!_ && !this.openDragLock)
        return;
      const { offset: L } = A;
      if (z && this.currentDirection === null) {
        this.currentDirection = LE(L), this.currentDirection !== null && j && j(this.currentDirection);
        return;
      }
      this.updateAxis("x", A.point, L), this.updateAxis("y", A.point, L), this.visualElement.render(), w && Rt.update(() => w(S, A), !1, !0);
    }, g = (S, A) => {
      this.latestPointerEvent = S, this.latestPanInfo = A, this.stop(S, A), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, m = () => {
      const { dragSnapToOrigin: S } = this.getProps();
      (S || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new z0(l, {
      onSessionStart: d,
      onStart: h,
      onMove: y,
      onSessionEnd: g,
      resumeAnimation: m
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: v,
      distanceThreshold: o,
      contextWindow: C0(this.visualElement),
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
    const { onDragEnd: y } = this.getProps();
    y && Rt.postRender(() => y(o, c));
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
    if (!o || !Ps(l, c, this.currentDirection))
      return;
    const d = this.getAxisMotionValue(l);
    let h = this.originPoint[l] + o[l];
    this.constraints && this.constraints[l] && (h = zE(h, this.constraints[l], this.elastic[l])), d.set(h);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: u } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, c = this.constraints;
    l && ca(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && o ? this.constraints = OE(o.layoutBox, l) : this.constraints = !1, this.elastic = UE(u), c !== this.constraints && !ca(l) && o && this.constraints && !this.hasMutatedConstraints && $e((d) => {
      this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = _E(o.layoutBox[d], this.constraints[d]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: u } = this.getProps();
    if (!l || !ca(l))
      return !1;
    const o = l.current, { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    c.root && (c.root.scroll = void 0, c.root.updateScroll());
    const d = Xb(o, c.root, this.visualElement.getTransformPagePoint());
    let h = RE(c.layout.layoutBox, d);
    if (u) {
      const y = u(Yb(h));
      this.hasMutatedConstraints = !!y, y && (h = Fg(y));
    }
    return h;
  }
  startAnimation(l) {
    const { drag: u, dragMomentum: o, dragElastic: c, dragTransition: d, dragSnapToOrigin: h, onDragTransitionEnd: y } = this.getProps(), g = this.constraints || {}, m = $e((v) => {
      if (!Ps(v, u, this.currentDirection))
        return;
      let S = g && g[v] || {};
      (h === !0 || h === v) && (S = { min: 0, max: 0 });
      const A = c ? 200 : 1e6, _ = c ? 40 : 1e7, z = {
        type: "inertia",
        velocity: o ? l[v] : 0,
        bounceStiffness: A,
        bounceDamping: _,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...d,
        ...S
      };
      return this.startAxisValueAnimation(v, z);
    });
    return Promise.all(m).then(y);
  }
  startAxisValueAnimation(l, u) {
    const o = this.getAxisMotionValue(l);
    return vc(this.visualElement, l), o.start(Zc(l, o, 0, u, this.visualElement, !1));
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
      if (!Ps(u, o, this.currentDirection))
        return;
      const { projection: c } = this.visualElement, d = this.getAxisMotionValue(u);
      if (c && c.layout) {
        const { min: h, max: y } = c.layout.layoutBox[u], g = d.get() || 0;
        d.set(l[u] - zt(h, y, 0.5) + g);
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
    if (!ca(u) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    $e((h) => {
      const y = this.getAxisMotionValue(h);
      if (y && this.constraints !== !1) {
        const g = y.get();
        c[h] = VE({ min: g, max: g }, this.constraints[h]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    this.visualElement.current.style.transform = d ? d({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.constraints = !1, this.resolveConstraints(), $e((h) => {
      if (!Ps(h, l, null))
        return;
      const y = this.getAxisMotionValue(h), { min: g, max: m } = this.constraints[h];
      y.set(zt(g, m, c[h]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    BE.set(this.visualElement, this);
    const l = this.visualElement.current, u = bl(l, "pointerdown", (m) => {
      const { drag: v, dragListener: S = !0 } = this.getProps(), A = m.target, _ = A !== l && Mb(A);
      v && S && !_ && this.start(m);
    });
    let o;
    const c = () => {
      const { dragConstraints: m } = this.getProps();
      ca(m) && m.current && (this.constraints = this.resolveRefConstraints(), o || (o = jE(l, m.current, () => this.scalePositionWithinConstraints())));
    }, { projection: d } = this.visualElement, h = d.addEventListener("measure", c);
    d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()), Rt.read(c);
    const y = xl(window, "resize", () => this.scalePositionWithinConstraints()), g = d.addEventListener("didUpdate", (({ delta: m, hasLayoutChanged: v }) => {
      this.isDragging && v && ($e((S) => {
        const A = this.getAxisMotionValue(S);
        A && (this.originPoint[S] += m[S].translate, A.set(A.get() + m[S].translate));
      }), this.visualElement.render());
    }));
    return () => {
      y(), u(), h(), g && g(), o && o();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: u = !1, dragDirectionLock: o = !1, dragPropagation: c = !1, dragConstraints: d = !1, dragElastic: h = Cc, dragMomentum: y = !0 } = l;
    return {
      ...l,
      drag: u,
      dragDirectionLock: o,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: h,
      dragMomentum: y
    };
  }
}
function _p(i) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    i();
  };
}
function jE(i, l, u) {
  const o = qy(i, _p(u)), c = qy(l, _p(u));
  return () => {
    o(), c();
  };
}
function Ps(i, l, u) {
  return (l === !0 || l === i) && (u === null || u === i);
}
function LE(i, l = 10) {
  let u = null;
  return Math.abs(i.y) > l ? u = "y" : Math.abs(i.x) > l && (u = "x"), u;
}
class wE extends $n {
  constructor(l) {
    super(l), this.removeGroupControls = Ye, this.removeListeners = Ye, this.controls = new NE(l);
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
const nc = (i) => (l, u) => {
  i && Rt.update(() => i(l, u), !1, !0);
};
class HE extends $n {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ye;
  }
  onPointerDown(l) {
    this.session = new z0(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: C0(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: u, onPan: o, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: nc(l),
      onStart: nc(u),
      onMove: nc(o),
      onEnd: (d, h) => {
        delete this.session, c && Rt.postRender(() => c(d, h));
      }
    };
  }
  mount() {
    this.removePointerDownListener = bl(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let ic = !1;
class YE extends et.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: u, switchLayoutGroup: o, layoutId: c } = this.props, { projection: d } = l;
    d && (u.group && u.group.add(d), o && o.register && c && o.register(d), ic && d.root.didUpdate(), d.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), d.setOptions({
      ...d.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), lu.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: u, visualElement: o, drag: c, isPresent: d } = this.props, { projection: h } = o;
    return h && (h.isPresent = d, l.layoutDependency !== u && h.setOptions({
      ...h.options,
      layoutDependency: u
    }), ic = !0, c || l.layoutDependency !== u || u === void 0 || l.isPresent !== d ? h.willUpdate() : this.safeToRemove(), l.isPresent !== d && (d ? h.promote() : h.relegate() || Rt.postRender(() => {
      const y = h.getStack();
      (!y || !y.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: u } = this.props, { projection: o } = l;
    o && (o.options.layoutAnchor = u, o.root.didUpdate(), Pc.postRender(() => {
      !o.currentAnimation && o.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: u, switchLayoutGroup: o } = this.props, { projection: c } = l;
    ic = !0, c && (c.scheduleCheckAfterUnmount(), u && u.group && u.group.remove(c), o && o.deregister && o.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function R0(i) {
  const [l, u] = JA(), o = et.useContext(qp);
  return At.jsx(YE, { ...i, layoutGroup: o, switchLayoutGroup: et.useContext(D0), isPresent: l, safeToRemove: u });
}
const qE = {
  pan: {
    Feature: HE
  },
  drag: {
    Feature: wE,
    ProjectionNode: v0,
    MeasureLayout: R0
  }
};
function Up(i, l, u) {
  const { props: o } = i;
  i.animationState && o.whileHover && i.animationState.setActive("whileHover", u === "Start");
  const c = "onHover" + u, d = o[c];
  d && Rt.postRender(() => d(l, Rl(l)));
}
class GE extends $n {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = Tb(l, (u, o) => (Up(this.node, o, "Start"), (c) => Up(this.node, c, "End"))));
  }
  unmount() {
  }
}
class XE extends $n {
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
    this.unmount = Cl(xl(this.node.current, "focus", () => this.onFocus()), xl(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Bp(i, l, u) {
  const { props: o } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled)
    return;
  i.animationState && o.whileTap && i.animationState.setActive("whileTap", u === "Start");
  const c = "onTap" + (u === "End" ? "" : u), d = o[c];
  d && Rt.postRender(() => d(l, Rl(l)));
}
class QE extends $n {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: u, propagate: o } = this.node.props;
    this.unmount = xb(l, (c, d) => (Bp(this.node, d, "Start"), (h, { success: y }) => Bp(this.node, h, y ? "End" : "Cancel")), {
      useGlobalTarget: u,
      stopPropagation: o?.tap === !1
    });
  }
  unmount() {
  }
}
const zc = /* @__PURE__ */ new WeakMap(), ac = /* @__PURE__ */ new WeakMap(), ZE = (i) => {
  const l = zc.get(i.target);
  l && l(i);
}, KE = (i) => {
  i.forEach(ZE);
};
function JE({ root: i, ...l }) {
  const u = i || document;
  ac.has(u) || ac.set(u, {});
  const o = ac.get(u), c = JSON.stringify(l);
  return o[c] || (o[c] = new IntersectionObserver(KE, { root: i, ...l })), o[c];
}
function kE(i, l, u) {
  const o = JE(l);
  return zc.set(i, u), o.observe(i), () => {
    zc.delete(i), o.unobserve(i);
  };
}
const FE = {
  some: 0,
  all: 1
};
class WE extends $n {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: l = {} } = this.node.getProps(), { root: u, margin: o, amount: c = "some", once: d } = l, h = {
      root: u ? u.current : void 0,
      rootMargin: o,
      threshold: typeof c == "number" ? c : FE[c]
    }, y = (g) => {
      const { isIntersecting: m } = g;
      if (this.isInView === m || (this.isInView = m, d && !m && this.hasEnteredView))
        return;
      m && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", m);
      const { onViewportEnter: v, onViewportLeave: S } = this.node.getProps(), A = m ? v : S;
      A && A(g);
    };
    this.stopObserver = kE(this.node.current, h, y);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: u } = this.node;
    ["amount", "margin", "root"].some(PE(l, u)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function PE({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (u) => i[u] !== l[u];
}
const $E = {
  inView: {
    Feature: WE
  },
  tap: {
    Feature: QE
  },
  focus: {
    Feature: XE
  },
  hover: {
    Feature: GE
  }
}, IE = {
  layout: {
    ProjectionNode: v0,
    MeasureLayout: R0
  }
}, t2 = {
  ...EE,
  ...$E,
  ...qE,
  ...IE
}, e2 = /* @__PURE__ */ vE(t2, SE);
function n2(i, l, u) {
  et.useInsertionEffect(() => i.on(l, u), [i, l, u]);
}
function i2(i) {
  const l = Gp(() => Pn(i)), { isStatic: u } = et.useContext(lf);
  if (u) {
    const [, o] = et.useState(i);
    et.useEffect(() => l.on("change", o), []);
  }
  return l;
}
function V0() {
  !ef.current && Zg();
  const [i] = et.useState(cu.current);
  return i;
}
function of(i) {
  return typeof i == "object" && !Array.isArray(i);
}
function _0(i, l, u, o) {
  return i == null ? [] : typeof i == "string" && of(l) ? Wc(i, u, o) : i instanceof NodeList ? Array.from(i) : Array.isArray(i) ? i.filter((c) => c != null) : [i];
}
function a2(i, l, u) {
  return i * (l + 1) + u * l;
}
function Np(i, l, u, o) {
  return typeof l == "number" ? l : l.startsWith("-") || l.startsWith("+") ? Math.max(0, i + parseFloat(l)) : l === "<" ? u : l.startsWith("<") ? Math.max(0, u + parseFloat(l.slice(1))) : o.get(l) ?? i;
}
function l2(i, l, u) {
  for (let o = 0; o < i.length; o++) {
    const c = i[o];
    c.at > l && c.at < u && (ma(i, c), o--);
  }
}
function s2(i, l, u, o, c, d) {
  l2(i, c, d);
  for (let h = 0; h < l.length; h++)
    i.push({
      value: l[h],
      at: zt(c, d, o[h]),
      easing: /* @__PURE__ */ ig(u, h)
    });
}
function u2(i, l, u = 0) {
  const o = l + 1 + l * u;
  for (let c = 0; c < i.length; c++)
    i[c] = i[c] / o;
}
function o2(i, l) {
  return i.at === l.at ? i.value === null ? 1 : l.value === null ? -1 : 0 : i.at - l.at;
}
const r2 = "easeInOut", c2 = 20;
function f2(i, { defaultTransition: l = {}, ...u } = {}, o, c) {
  const d = l.duration || 0.3, h = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), g = {}, m = /* @__PURE__ */ new Map();
  let v = 0, S = 0, A = 0;
  for (let _ = 0; _ < i.length; _++) {
    const z = i[_];
    if (typeof z == "string") {
      m.set(z, S);
      continue;
    } else if (!Array.isArray(z)) {
      m.set(z.name, Np(S, z.at, v, m));
      continue;
    }
    let [j, w, L = {}] = z;
    L.at !== void 0 && (S = Np(S, L.at, v, m));
    let Y = 0;
    const H = (G, $, at, Z = 0, F = 0) => {
      const nt = h2(G), { delay: P = 0, times: ot = vg(nt), type: vt = l.type || "keyframes", repeat: Yt, repeatType: Ut, repeatDelay: Bt = 0, ...R } = $;
      let { ease: q = l.ease || "easeOut", duration: X } = $;
      const lt = typeof P == "function" ? P(Z, F) : P, ft = nt.length, b = Xc(vt) ? vt : c?.[vt || "keyframes"];
      if (ft <= 2 && b) {
        let it = 100;
        if (ft === 2 && y2(nt)) {
          const qt = nt[1] - nt[0];
          it = Math.abs(qt);
        }
        const st = {
          ...l,
          ...R
        };
        X !== void 0 && (st.duration = /* @__PURE__ */ ge(X));
        const pt = yg(st, it, b);
        q = pt.ease, X = pt.duration;
      }
      X ?? (X = d);
      const B = S + lt;
      ot.length === 1 && ot[0] === 0 && (ot[1] = 1);
      const Q = ot.length - nt.length;
      if (Q > 0 && gg(ot, Q), nt.length === 1 && nt.unshift(null), Yt && Yt < c2) {
        const it = X > 0 ? Bt / X : 0;
        X = a2(X, Yt, Bt);
        const st = [...nt], pt = [...ot];
        q = Array.isArray(q) ? [...q] : [q];
        const qt = [...q], Nt = Ut === "reverse" || Ut === "mirror";
        let An = st, In = qt;
        Nt && (An = [...st].reverse(), Ut === "reverse" && (In = [...qt].reverse().map((ze) => typeof ze == "function" ? /* @__PURE__ */ Uc(ze) : ze)));
        for (let ze = 0; ze < Yt; ze++) {
          const Ta = Nt && ze % 2 === 0, Je = Ta ? An : st, ba = Ta ? In : qt, Di = (ze + 1) * (1 + it);
          it > 0 && (nt.push(nt[nt.length - 1]), ot.push(Di), q.push("linear")), nt.push(...Je);
          for (let ti = 0; ti < Je.length; ti++)
            ot.push(pt[ti] + Di), q.push(ti === 0 ? "linear" : /* @__PURE__ */ ig(ba, ti - 1));
        }
        u2(ot, Yt, it);
      }
      const K = B + X;
      s2(at, nt, q, ot, B, K), Y = Math.max(lt + X, Y), A = Math.max(K, A);
    };
    if (Pt(j)) {
      const G = jp(j, y);
      H(w, L, Lp("default", G));
    } else {
      const G = _0(j, w, o, g), $ = G.length;
      for (let at = 0; at < $; at++) {
        w = w, L = L;
        const Z = G[at], F = jp(Z, y);
        for (const nt in w)
          H(w[nt], d2(L, nt), Lp(nt, F), at, $);
      }
    }
    v = S, S += Y;
  }
  return y.forEach((_, z) => {
    for (const j in _) {
      const w = _[j];
      w.sort(o2);
      const L = [], Y = [], H = [];
      for (let Z = 0; Z < w.length; Z++) {
        const { at: F, value: nt, easing: P } = w[Z];
        L.push(nt), Y.push(/* @__PURE__ */ ya(0, A, F)), H.push(P || "easeOut");
      }
      Y[0] !== 0 && (Y.unshift(0), L.unshift(L[0]), H.unshift(r2)), Y[Y.length - 1] !== 1 && (Y.push(1), L.push(null)), h.has(z) || h.set(z, {
        keyframes: {},
        transition: {}
      });
      const G = h.get(z);
      G.keyframes[j] = L;
      const { type: $, ...at } = l;
      G.transition[j] = {
        ...at,
        duration: A,
        ease: H,
        times: Y,
        ...u
      };
    }
  }), h;
}
function jp(i, l) {
  return !l.has(i) && l.set(i, {}), l.get(i);
}
function Lp(i, l) {
  return l[i] || (l[i] = []), l[i];
}
function h2(i) {
  return Array.isArray(i) ? i : [i];
}
function d2(i, l) {
  return i && i[l] ? {
    ...i,
    ...i[l]
  } : { ...i };
}
const m2 = (i) => typeof i == "number", y2 = (i) => i.every(m2);
function p2(i) {
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
  }, u = gu(i) && !Xg(i) ? new s0(l) : new e0(l);
  u.mount(i), Ml.set(i, u);
}
function g2(i) {
  const l = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, u = new Wb(l);
  u.mount(i), Ml.set(i, u);
}
function v2(i, l) {
  return Pt(i) || typeof i == "number" || typeof i == "string" && !of(l);
}
function U0(i, l, u, o) {
  const c = [];
  if (v2(i, l))
    c.push(m0(i, of(l) && l.default || l, u && (u.default || u)));
  else {
    if (i == null)
      return c;
    const d = _0(i, l, o), h = d.length;
    for (let y = 0; y < h; y++) {
      const g = d[y], m = g instanceof Element ? p2 : g2;
      Ml.has(g) || m(g);
      const v = Ml.get(g), S = { ...u };
      "delay" in S && typeof S.delay == "function" && (S.delay = S.delay(y, h)), c.push(...kc(v, { ...l, transition: S }, {}));
    }
  }
  return c;
}
function S2(i, l, u) {
  const o = [], c = i.map((h) => {
    if (Array.isArray(h) && typeof h[0] == "function") {
      const y = h[0], g = Pn(0);
      return g.on("change", y), h.length === 1 ? [g, [0, 1]] : h.length === 2 ? [g, [0, 1], h[1]] : [g, h[1], h[2]];
    }
    return h;
  });
  return f2(c, l, u, { spring: El }).forEach(({ keyframes: h, transition: y }, g) => {
    o.push(...U0(g, h, y));
  }), o;
}
function T2(i) {
  return Array.isArray(i) && i.some(Array.isArray);
}
function b2(i = {}) {
  const { scope: l, reduceMotion: u, skipAnimations: o } = i;
  function c(d, h, y) {
    let g = [], m;
    const v = {};
    if (u !== void 0 && (v.reduceMotion = u), o !== void 0 && (v.skipAnimations = o), T2(d)) {
      const { onComplete: A, ..._ } = h || {};
      typeof A == "function" && (m = A), g = S2(d, { ...v, ..._ }, l);
    } else {
      const { onComplete: A, ..._ } = y || {};
      typeof A == "function" && (m = A), g = U0(d, h, { ...v, ..._ }, l);
    }
    const S = new YT(g);
    return m && S.finished.then(m), l && (l.animations.push(S), S.finished.then(() => {
      ma(l.animations, S);
    })), S;
  }
  return c;
}
const A2 = b2(), wp = e2;
function Hp({ value: i, digits: l = 0, suffix: u = "" }) {
  const o = V0(), c = i2(o ? i : 0), [d, h] = dy.useState(o ? i : 0);
  return n2(c, "change", h), dy.useEffect(() => {
    if (o) {
      c.set(i);
      return;
    }
    const y = A2(c, i, { duration: 0.8, ease: "easeOut" });
    return () => y.stop();
  }, [c, o, i]), /* @__PURE__ */ At.jsxs(At.Fragment, { children: [
    d.toFixed(l),
    u
  ] });
}
function E2({ data: i }) {
  const l = V0(), u = l ? {} : { opacity: 0, y: 10 }, o = (d) => ({ duration: 0.4, delay: l ? 0 : d * 0.06 }), c = i.reliability >= 80 ? "Defensible" : i.reliability >= 60 ? "Review" : "Compromised";
  return /* @__PURE__ */ At.jsxs("section", { className: "ll-shell", "aria-label": "Animated audit summary", children: [
    /* @__PURE__ */ At.jsxs("div", { className: "ll-verdict", children: [
      /* @__PURE__ */ At.jsxs("div", { children: [
        /* @__PURE__ */ At.jsx("span", { className: "ll-kicker", children: "Evaluation integrity" }),
        /* @__PURE__ */ At.jsx("h2", { children: c }),
        /* @__PURE__ */ At.jsxs("p", { children: [
          i.findingCount,
          " forensic finding",
          i.findingCount === 1 ? "" : "s",
          " changed how the headline score should be read."
        ] })
      ] }),
      /* @__PURE__ */ At.jsx("div", { className: "ll-score", "aria-label": `Reliability ${i.reliability} out of 100`, children: /* @__PURE__ */ At.jsx(Hp, { value: i.reliability, suffix: "/100" }) })
    ] }),
    /* @__PURE__ */ At.jsx("div", { className: "ll-metrics", children: [
      ["Naive ROC-AUC", i.naiveAuc, "The tempting headline"],
      ["Trusted ROC-AUC", i.trustedAuc, "After defensible controls"],
      ["Exposed inflation", i.inflation, "Performance that did not survive"]
    ].map(([d, h, y], g) => /* @__PURE__ */ At.jsxs(wp.article, { className: "ll-card", initial: u, animate: { opacity: 1, y: 0 }, transition: o(g), children: [
      /* @__PURE__ */ At.jsx("span", { children: String(d) }),
      /* @__PURE__ */ At.jsx("strong", { children: /* @__PURE__ */ At.jsx(Hp, { value: Number(h), digits: 3 }) }),
      /* @__PURE__ */ At.jsx("small", { children: String(y) })
    ] }, String(d))) }),
    /* @__PURE__ */ At.jsxs("div", { className: "ll-journey", children: [
      /* @__PURE__ */ At.jsxs("div", { className: "ll-journey-head", children: [
        /* @__PURE__ */ At.jsx("span", { children: "Score survival path" }),
        /* @__PURE__ */ At.jsx("small", { children: "ROC-AUC by evaluation stage" })
      ] }),
      i.stages.map((d, h) => /* @__PURE__ */ At.jsxs("div", { className: "ll-stage", children: [
        /* @__PURE__ */ At.jsxs("div", { children: [
          /* @__PURE__ */ At.jsx("span", { children: d.label }),
          /* @__PURE__ */ At.jsx("b", { children: d.value.toFixed(3) })
        ] }),
        /* @__PURE__ */ At.jsx("div", { className: "ll-track", children: /* @__PURE__ */ At.jsx(wp.div, { initial: { width: l ? `${d.value * 100}%` : 0 }, animate: { width: `${d.value * 100}%` }, transition: { duration: 0.7, delay: l ? 0 : 0.15 + h * 0.09, ease: "easeOut" } }) })
      ] }, `${d.label}-${h}`))
    ] })
  ] });
}
const Yp = /* @__PURE__ */ new WeakMap(), D2 = ({ data: i, parentElement: l }) => {
  let u = Yp.get(l);
  if (!u) {
    const o = document.createElement("div");
    o.className = "ll-root", l.appendChild(o), u = { container: o, root: hS.createRoot(o) }, Yp.set(l, u);
  }
  u.root.render(/* @__PURE__ */ At.jsx(E2, { data: i }));
};
export {
  D2 as default
};
