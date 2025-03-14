import {
  require_react
} from "./chunk-6P5PNMGD.js";
import {
  __toESM
} from "./chunk-WXXH56N5.js";

// node_modules/@lottiefiles/react-lottie-player/dist/lottie-react.esm.js
var React = __toESM(require_react());
var import_react = __toESM(require_react());
var extendStatics = function(t, e) {
  return (extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t2, e2) {
    t2.__proto__ = e2;
  } || function(t2, e2) {
    for (var r in e2)
      Object.prototype.hasOwnProperty.call(e2, r) && (t2[r] = e2[r]);
  })(t, e);
};
function __extends(t, e) {
  if ("function" != typeof e && null !== e)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  function r() {
    this.constructor = t;
  }
  extendStatics(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var __assign = function() {
  return (__assign = Object.assign || function(t) {
    for (var e, r = 1, i = arguments.length; r < i; r++)
      for (var a in e = arguments[r])
        Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    return t;
  }).apply(this, arguments);
};
function __rest(t, e) {
  var r = {};
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
  if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
    var a = 0;
    for (i = Object.getOwnPropertySymbols(t); a < i.length; a++)
      e.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[a]) && (r[i[a]] = t[i[a]]);
  }
  return r;
}
function __decorate(t, e, r, i) {
  var a, s = arguments.length, n = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
    n = Reflect.decorate(t, e, r, i);
  else
    for (var o = t.length - 1; o >= 0; o--)
      (a = t[o]) && (n = (s < 3 ? a(n) : s > 3 ? a(e, r, n) : a(e, r)) || n);
  return s > 3 && n && Object.defineProperty(e, r, n), n;
}
function __param(t, e) {
  return function(r, i) {
    e(r, i, t);
  };
}
function __metadata(t, e) {
  if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
    return Reflect.metadata(t, e);
}
function __awaiter(t, e, r, i) {
  return new (r || (r = Promise))(function(a, s) {
    function n(t2) {
      try {
        h(i.next(t2));
      } catch (t3) {
        s(t3);
      }
    }
    function o(t2) {
      try {
        h(i.throw(t2));
      } catch (t3) {
        s(t3);
      }
    }
    function h(t2) {
      var e2;
      t2.done ? a(t2.value) : (e2 = t2.value, e2 instanceof r ? e2 : new r(function(t3) {
        t3(e2);
      })).then(n, o);
    }
    h((i = i.apply(t, e || [])).next());
  });
}
function __generator(t, e) {
  var r, i, a, s, n = { label: 0, sent: function() {
    if (1 & a[0])
      throw a[1];
    return a[1];
  }, trys: [], ops: [] };
  return s = { next: o(0), throw: o(1), return: o(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(s2) {
    return function(o2) {
      return function(s3) {
        if (r)
          throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (r = 1, i && (a = 2 & s3[0] ? i.return : s3[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s3[1])).done)
              return a;
            switch (i = 0, a && (s3 = [2 & s3[0], a.value]), s3[0]) {
              case 0:
              case 1:
                a = s3;
                break;
              case 4:
                return n.label++, { value: s3[1], done: false };
              case 5:
                n.label++, i = s3[1], s3 = [0];
                continue;
              case 7:
                s3 = n.ops.pop(), n.trys.pop();
                continue;
              default:
                if (!(a = n.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== s3[0] && 2 !== s3[0])) {
                  n = 0;
                  continue;
                }
                if (3 === s3[0] && (!a || s3[1] > a[0] && s3[1] < a[3])) {
                  n.label = s3[1];
                  break;
                }
                if (6 === s3[0] && n.label < a[1]) {
                  n.label = a[1], a = s3;
                  break;
                }
                if (a && n.label < a[2]) {
                  n.label = a[2], n.ops.push(s3);
                  break;
                }
                a[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            s3 = e.call(t, n);
          } catch (t2) {
            s3 = [6, t2], i = 0;
          } finally {
            r = a = 0;
          }
        if (5 & s3[0])
          throw s3[1];
        return { value: s3[0] ? s3[1] : void 0, done: true };
      }([s2, o2]);
    };
  }
}
var __createBinding = Object.create ? function(t, e, r, i) {
  void 0 === i && (i = r), Object.defineProperty(t, i, { enumerable: true, get: function() {
    return e[r];
  } });
} : function(t, e, r, i) {
  void 0 === i && (i = r), t[i] = e[r];
};
function __exportStar(t, e) {
  for (var r in t)
    "default" === r || Object.prototype.hasOwnProperty.call(e, r) || __createBinding(e, t, r);
}
function __values(t) {
  var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], i = 0;
  if (r)
    return r.call(t);
  if (t && "number" == typeof t.length)
    return { next: function() {
      return t && i >= t.length && (t = void 0), { value: t && t[i++], done: !t };
    } };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(t, e) {
  var r = "function" == typeof Symbol && t[Symbol.iterator];
  if (!r)
    return t;
  var i, a, s = r.call(t), n = [];
  try {
    for (; (void 0 === e || e-- > 0) && !(i = s.next()).done; )
      n.push(i.value);
  } catch (t2) {
    a = { error: t2 };
  } finally {
    try {
      i && !i.done && (r = s.return) && r.call(s);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return n;
}
function __spread() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(__read(arguments[e]));
  return t;
}
function __spreadArrays() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  var i = Array(t), a = 0;
  for (e = 0; e < r; e++)
    for (var s = arguments[e], n = 0, o = s.length; n < o; n++, a++)
      i[a] = s[n];
  return i;
}
function __spreadArray(t, e, r) {
  if (r || 2 === arguments.length)
    for (var i, a = 0, s = e.length; a < s; a++)
      !i && a in e || (i || (i = Array.prototype.slice.call(e, 0, a)), i[a] = e[a]);
  return t.concat(i || Array.prototype.slice.call(e));
}
function __await(t) {
  return this instanceof __await ? (this.v = t, this) : new __await(t);
}
function __asyncGenerator(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i, a = r.apply(t, e || []), s = [];
  return i = {}, n("next"), n("throw"), n("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function n(t2) {
    a[t2] && (i[t2] = function(e2) {
      return new Promise(function(r2, i2) {
        s.push([t2, e2, r2, i2]) > 1 || o(t2, e2);
      });
    });
  }
  function o(t2, e2) {
    try {
      (r2 = a[t2](e2)).value instanceof __await ? Promise.resolve(r2.value.v).then(h, l) : p(s[0][2], r2);
    } catch (t3) {
      p(s[0][3], t3);
    }
    var r2;
  }
  function h(t2) {
    o("next", t2);
  }
  function l(t2) {
    o("throw", t2);
  }
  function p(t2, e2) {
    t2(e2), s.shift(), s.length && o(s[0][0], s[0][1]);
  }
}
function __asyncDelegator(t) {
  var e, r;
  return e = {}, i("next"), i("throw", function(t2) {
    throw t2;
  }), i("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function i(i2, a) {
    e[i2] = t[i2] ? function(e2) {
      return (r = !r) ? { value: __await(t[i2](e2)), done: "return" === i2 } : a ? a(e2) : e2;
    } : a;
  }
}
function __asyncValues(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e, r = t[Symbol.asyncIterator];
  return r ? r.call(t) : (t = "function" == typeof __values ? __values(t) : t[Symbol.iterator](), e = {}, i("next"), i("throw"), i("return"), e[Symbol.asyncIterator] = function() {
    return this;
  }, e);
  function i(r2) {
    e[r2] = t[r2] && function(e2) {
      return new Promise(function(i2, a) {
        (function(t2, e3, r3, i3) {
          Promise.resolve(i3).then(function(e4) {
            t2({ value: e4, done: r3 });
          }, e3);
        })(i2, a, (e2 = t[r2](e2)).done, e2.value);
      });
    };
  }
}
function __makeTemplateObject(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
var __setModuleDefault = Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: true, value: e });
} : function(t, e) {
  t.default = e;
};
function __importStar(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (null != t)
    for (var r in t)
      "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && __createBinding(e, t, r);
  return __setModuleDefault(e, t), e;
}
function __importDefault(t) {
  return t && t.__esModule ? t : { default: t };
}
function __classPrivateFieldGet(t, e, r, i) {
  if ("a" === r && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if ("function" == typeof e ? t !== e || !i : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return "m" === r ? i : "a" === r ? i.call(t) : i ? i.value : e.get(t);
}
function __classPrivateFieldSet(t, e, r, i, a) {
  if ("m" === i)
    throw new TypeError("Private method is not writable");
  if ("a" === i && !a)
    throw new TypeError("Private accessor was defined without a setter");
  if ("function" == typeof e ? t !== e || !a : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return "a" === i ? a.call(t, r) : a ? a.value = r : e.set(t, r), r;
}
var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function unwrapExports(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function createCommonjsModule(t, e) {
  return t(e = { exports: {} }, e.exports), e.exports;
}
function getCjsExportFromNamespace(t) {
  return t && t.default || t;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var lottie2 = createCommonjsModule(function(module, exports) {
  "undefined" != typeof navigator && function(t, e) {
    module.exports = e();
  }(0, function() {
    var svgNS = "http://www.w3.org/2000/svg", locationHref = "", _useWebWorker = false, initialDefaultFrame = -999999, setWebWorker = function(t) {
      _useWebWorker = !!t;
    }, getWebWorker = function() {
      return _useWebWorker;
    }, setLocationHref = function(t) {
      locationHref = t;
    }, getLocationHref = function() {
      return locationHref;
    };
    function createTag(t) {
      return document.createElement(t);
    }
    function extendPrototype(t, e) {
      var r, i, a = t.length;
      for (r = 0; r < a; r += 1)
        for (var s in i = t[r].prototype)
          Object.prototype.hasOwnProperty.call(i, s) && (e.prototype[s] = i[s]);
    }
    function getDescriptor(t, e) {
      return Object.getOwnPropertyDescriptor(t, e);
    }
    function createProxyFunction(t) {
      function e() {
      }
      return e.prototype = t, e;
    }
    var audioControllerFactory = function() {
      function t(t2) {
        this.audios = [], this.audioFactory = t2, this._volume = 1, this._isMuted = false;
      }
      return t.prototype = { addAudio: function(t2) {
        this.audios.push(t2);
      }, pause: function() {
        var t2, e = this.audios.length;
        for (t2 = 0; t2 < e; t2 += 1)
          this.audios[t2].pause();
      }, resume: function() {
        var t2, e = this.audios.length;
        for (t2 = 0; t2 < e; t2 += 1)
          this.audios[t2].resume();
      }, setRate: function(t2) {
        var e, r = this.audios.length;
        for (e = 0; e < r; e += 1)
          this.audios[e].setRate(t2);
      }, createAudio: function(t2) {
        return this.audioFactory ? this.audioFactory(t2) : window.Howl ? new window.Howl({ src: [t2] }) : { isPlaying: false, play: function() {
          this.isPlaying = true;
        }, seek: function() {
          this.isPlaying = false;
        }, playing: function() {
        }, rate: function() {
        }, setVolume: function() {
        } };
      }, setAudioFactory: function(t2) {
        this.audioFactory = t2;
      }, setVolume: function(t2) {
        this._volume = t2, this._updateVolume();
      }, mute: function() {
        this._isMuted = true, this._updateVolume();
      }, unmute: function() {
        this._isMuted = false, this._updateVolume();
      }, getVolume: function() {
        return this._volume;
      }, _updateVolume: function() {
        var t2, e = this.audios.length;
        for (t2 = 0; t2 < e; t2 += 1)
          this.audios[t2].volume(this._volume * (this._isMuted ? 0 : 1));
      } }, function() {
        return new t();
      };
    }(), createTypedArray = /* @__PURE__ */ function() {
      function t(t2, e) {
        var r, i = 0, a = [];
        switch (t2) {
          case "int16":
          case "uint8c":
            r = 1;
            break;
          default:
            r = 1.1;
        }
        for (i = 0; i < e; i += 1)
          a.push(r);
        return a;
      }
      return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, r) {
        return "float32" === e ? new Float32Array(r) : "int16" === e ? new Int16Array(r) : "uint8c" === e ? new Uint8ClampedArray(r) : t(e, r);
      } : t;
    }();
    function createSizedArray(t) {
      return Array.apply(null, { length: t });
    }
    function _typeof$6(t) {
      return (_typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
        return typeof t2;
      } : function(t2) {
        return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
      })(t);
    }
    var subframeEnabled = true, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "", isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), _shouldRoundValues = false, bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
    function ProjectInterface$1() {
      return {};
    }
    !function() {
      var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], r = e.length;
      for (t = 0; t < r; t += 1)
        BMMath[e[t]] = Math[e[t]];
    }(), BMMath.random = Math.random, BMMath.abs = function(t) {
      if ("object" === _typeof$6(t) && t.length) {
        var e, r = createSizedArray(t.length), i = t.length;
        for (e = 0; e < i; e += 1)
          r[e] = Math.abs(t[e]);
        return r;
      }
      return Math.abs(t);
    };
    var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = 0.5519;
    function roundValues(t) {
      _shouldRoundValues = !!t;
    }
    function bmRnd(t) {
      return _shouldRoundValues ? Math.round(t) : t;
    }
    function styleDiv(t) {
      t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d";
    }
    function BMEnterFrameEvent(t, e, r, i) {
      this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1;
    }
    function BMCompleteEvent(t, e) {
      this.type = t, this.direction = e < 0 ? -1 : 1;
    }
    function BMCompleteLoopEvent(t, e, r, i) {
      this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1;
    }
    function BMSegmentStartEvent(t, e, r) {
      this.type = t, this.firstFrame = e, this.totalFrames = r;
    }
    function BMDestroyEvent(t, e) {
      this.type = t, this.target = e;
    }
    function BMRenderFrameErrorEvent(t, e) {
      this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
    }
    function BMConfigErrorEvent(t) {
      this.type = "configError", this.nativeError = t;
    }
    function BMAnimationConfigErrorEvent(t, e) {
      this.type = t, this.nativeError = e;
    }
    var createElementID = (_count = 0, function() {
      return idPrefix$1 + "__lottie_element_" + (_count += 1);
    }), _count;
    function HSVtoRGB(t, e, r) {
      var i, a, s, n, o, h, l, p;
      switch (h = r * (1 - e), l = r * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = r * (1 - (1 - o) * e), n % 6) {
        case 0:
          i = r, a = p, s = h;
          break;
        case 1:
          i = l, a = r, s = h;
          break;
        case 2:
          i = h, a = r, s = p;
          break;
        case 3:
          i = h, a = l, s = r;
          break;
        case 4:
          i = p, a = h, s = r;
          break;
        case 5:
          i = r, a = h, s = l;
      }
      return [i, a, s];
    }
    function RGBtoHSV(t, e, r) {
      var i, a = Math.max(t, e, r), s = Math.min(t, e, r), n = a - s, o = 0 === a ? 0 : n / a, h = a / 255;
      switch (a) {
        case s:
          i = 0;
          break;
        case t:
          i = e - r + n * (e < r ? 6 : 0), i /= 6 * n;
          break;
        case e:
          i = r - t + 2 * n, i /= 6 * n;
          break;
        case r:
          i = t - e + 4 * n, i /= 6 * n;
      }
      return [i, o, h];
    }
    function addSaturationToRGB(t, e) {
      var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
      return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2]);
    }
    function addBrightnessToRGB(t, e) {
      var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
      return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2]);
    }
    function addHueToRGB(t, e) {
      var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
      return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2]);
    }
    var rgbToHex = function() {
      var t, e, r = [];
      for (t = 0; t < 256; t += 1)
        e = t.toString(16), r[t] = 1 === e.length ? "0" + e : e;
      return function(t2, e2, i) {
        return t2 < 0 && (t2 = 0), e2 < 0 && (e2 = 0), i < 0 && (i = 0), "#" + r[t2] + r[e2] + r[i];
      };
    }(), setSubframeEnabled = function(t) {
      subframeEnabled = !!t;
    }, getSubframeEnabled = function() {
      return subframeEnabled;
    }, setExpressionsPlugin = function(t) {
      expressionsPlugin = t;
    }, getExpressionsPlugin = function() {
      return expressionsPlugin;
    }, setExpressionInterfaces = function(t) {
      expressionsInterfaces = t;
    }, getExpressionInterfaces = function() {
      return expressionsInterfaces;
    }, setDefaultCurveSegments = function(t) {
      defaultCurveSegments = t;
    }, getDefaultCurveSegments = function() {
      return defaultCurveSegments;
    }, setIdPrefix = function(t) {
      idPrefix$1 = t;
    }, getIdPrefix = function() {
      return idPrefix$1;
    };
    function createNS(t) {
      return document.createElementNS(svgNS, t);
    }
    function _typeof$5(t) {
      return (_typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
        return typeof t2;
      } : function(t2) {
        return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
      })(t);
    }
    var dataManager = /* @__PURE__ */ function() {
      var t, e, r = 1, i = [], a = { onmessage: function() {
      }, postMessage: function(e2) {
        t({ data: e2 });
      } }, s = { postMessage: function(t2) {
        a.onmessage({ data: t2 });
      } };
      function n() {
        e || ((e = function(e2) {
          if (window.Worker && window.Blob && getWebWorker()) {
            var r2 = new Blob(["var _workerSelf = self; self.onmessage = ", e2.toString()], { type: "text/javascript" }), i2 = URL.createObjectURL(r2);
            return new Worker(i2);
          }
          return t = e2, a;
        }(function(t2) {
          if (s.dataManager || (s.dataManager = function() {
            function t3(a3, s3) {
              var n3, o3, h2, l2, p2, c2, m = a3.length;
              for (o3 = 0; o3 < m; o3 += 1)
                if ("ks" in (n3 = a3[o3]) && !n3.completed) {
                  if (n3.completed = true, n3.hasMask) {
                    var d = n3.masksProperties;
                    for (l2 = d.length, h2 = 0; h2 < l2; h2 += 1)
                      if (d[h2].pt.k.i)
                        i2(d[h2].pt.k);
                      else
                        for (c2 = d[h2].pt.k.length, p2 = 0; p2 < c2; p2 += 1)
                          d[h2].pt.k[p2].s && i2(d[h2].pt.k[p2].s[0]), d[h2].pt.k[p2].e && i2(d[h2].pt.k[p2].e[0]);
                  }
                  0 === n3.ty ? (n3.layers = e3(n3.refId, s3), t3(n3.layers, s3)) : 4 === n3.ty ? r2(n3.shapes) : 5 === n3.ty && f(n3);
                }
            }
            function e3(t4, e4) {
              var r3 = function(t5, e5) {
                for (var r4 = 0, i3 = e5.length; r4 < i3; ) {
                  if (e5[r4].id === t5)
                    return e5[r4];
                  r4 += 1;
                }
                return null;
              }(t4, e4);
              return r3 ? r3.layers.__used ? JSON.parse(JSON.stringify(r3.layers)) : (r3.layers.__used = true, r3.layers) : null;
            }
            function r2(t4) {
              var e4, a3, s3;
              for (e4 = t4.length - 1; e4 >= 0; e4 -= 1)
                if ("sh" === t4[e4].ty)
                  if (t4[e4].ks.k.i)
                    i2(t4[e4].ks.k);
                  else
                    for (s3 = t4[e4].ks.k.length, a3 = 0; a3 < s3; a3 += 1)
                      t4[e4].ks.k[a3].s && i2(t4[e4].ks.k[a3].s[0]), t4[e4].ks.k[a3].e && i2(t4[e4].ks.k[a3].e[0]);
                else
                  "gr" === t4[e4].ty && r2(t4[e4].it);
            }
            function i2(t4) {
              var e4, r3 = t4.i.length;
              for (e4 = 0; e4 < r3; e4 += 1)
                t4.i[e4][0] += t4.v[e4][0], t4.i[e4][1] += t4.v[e4][1], t4.o[e4][0] += t4.v[e4][0], t4.o[e4][1] += t4.v[e4][1];
            }
            function a2(t4, e4) {
              var r3 = e4 ? e4.split(".") : [100, 100, 100];
              return t4[0] > r3[0] || !(r3[0] > t4[0]) && (t4[1] > r3[1] || !(r3[1] > t4[1]) && (t4[2] > r3[2] || !(r3[2] > t4[2]) && null));
            }
            var s2, n2 = /* @__PURE__ */ function() {
              var t4 = [4, 4, 14];
              function e4(t5) {
                var e5, r3, i3, a3 = t5.length;
                for (e5 = 0; e5 < a3; e5 += 1)
                  5 === t5[e5].ty && (r3 = t5[e5], i3 = void 0, i3 = r3.t.d, r3.t.d = { k: [{ s: i3, t: 0 }] });
              }
              return function(r3) {
                if (a2(t4, r3.v) && (e4(r3.layers), r3.assets)) {
                  var i3, s3 = r3.assets.length;
                  for (i3 = 0; i3 < s3; i3 += 1)
                    r3.assets[i3].layers && e4(r3.assets[i3].layers);
                }
              };
            }(), o2 = (s2 = [4, 7, 99], function(t4) {
              if (t4.chars && !a2(s2, t4.v)) {
                var e4, i3 = t4.chars.length;
                for (e4 = 0; e4 < i3; e4 += 1) {
                  var n3 = t4.chars[e4];
                  n3.data && n3.data.shapes && (r2(n3.data.shapes), n3.data.ip = 0, n3.data.op = 99999, n3.data.st = 0, n3.data.sr = 1, n3.data.ks = { p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 } }, t4.chars[e4].t || (n3.data.shapes.push({ ty: "no" }), n3.data.shapes[0].it.push({ p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 }, sk: { k: 0, a: 0 }, sa: { k: 0, a: 0 }, ty: "tr" })));
                }
              }
            }), h = /* @__PURE__ */ function() {
              var t4 = [5, 7, 15];
              function e4(t5) {
                var e5, r3, i3, a3 = t5.length;
                for (e5 = 0; e5 < a3; e5 += 1)
                  5 === t5[e5].ty && (r3 = t5[e5], i3 = void 0, "number" == typeof (i3 = r3.t.p).a && (i3.a = { a: 0, k: i3.a }), "number" == typeof i3.p && (i3.p = { a: 0, k: i3.p }), "number" == typeof i3.r && (i3.r = { a: 0, k: i3.r }));
              }
              return function(r3) {
                if (a2(t4, r3.v) && (e4(r3.layers), r3.assets)) {
                  var i3, s3 = r3.assets.length;
                  for (i3 = 0; i3 < s3; i3 += 1)
                    r3.assets[i3].layers && e4(r3.assets[i3].layers);
                }
              };
            }(), l = /* @__PURE__ */ function() {
              var t4 = [4, 1, 9];
              function e4(t5) {
                var r4, i3, a3, s3 = t5.length;
                for (r4 = 0; r4 < s3; r4 += 1)
                  if ("gr" === t5[r4].ty)
                    e4(t5[r4].it);
                  else if ("fl" === t5[r4].ty || "st" === t5[r4].ty)
                    if (t5[r4].c.k && t5[r4].c.k[0].i)
                      for (a3 = t5[r4].c.k.length, i3 = 0; i3 < a3; i3 += 1)
                        t5[r4].c.k[i3].s && (t5[r4].c.k[i3].s[0] /= 255, t5[r4].c.k[i3].s[1] /= 255, t5[r4].c.k[i3].s[2] /= 255, t5[r4].c.k[i3].s[3] /= 255), t5[r4].c.k[i3].e && (t5[r4].c.k[i3].e[0] /= 255, t5[r4].c.k[i3].e[1] /= 255, t5[r4].c.k[i3].e[2] /= 255, t5[r4].c.k[i3].e[3] /= 255);
                    else
                      t5[r4].c.k[0] /= 255, t5[r4].c.k[1] /= 255, t5[r4].c.k[2] /= 255, t5[r4].c.k[3] /= 255;
              }
              function r3(t5) {
                var r4, i3 = t5.length;
                for (r4 = 0; r4 < i3; r4 += 1)
                  4 === t5[r4].ty && e4(t5[r4].shapes);
              }
              return function(e5) {
                if (a2(t4, e5.v) && (r3(e5.layers), e5.assets)) {
                  var i3, s3 = e5.assets.length;
                  for (i3 = 0; i3 < s3; i3 += 1)
                    e5.assets[i3].layers && r3(e5.assets[i3].layers);
                }
              };
            }(), p = /* @__PURE__ */ function() {
              var t4 = [4, 4, 18];
              function e4(t5) {
                var r4, i3, a3;
                for (r4 = t5.length - 1; r4 >= 0; r4 -= 1)
                  if ("sh" === t5[r4].ty)
                    if (t5[r4].ks.k.i)
                      t5[r4].ks.k.c = t5[r4].closed;
                    else
                      for (a3 = t5[r4].ks.k.length, i3 = 0; i3 < a3; i3 += 1)
                        t5[r4].ks.k[i3].s && (t5[r4].ks.k[i3].s[0].c = t5[r4].closed), t5[r4].ks.k[i3].e && (t5[r4].ks.k[i3].e[0].c = t5[r4].closed);
                  else
                    "gr" === t5[r4].ty && e4(t5[r4].it);
              }
              function r3(t5) {
                var r4, i3, a3, s3, n3, o3, h2 = t5.length;
                for (i3 = 0; i3 < h2; i3 += 1) {
                  if ((r4 = t5[i3]).hasMask) {
                    var l2 = r4.masksProperties;
                    for (s3 = l2.length, a3 = 0; a3 < s3; a3 += 1)
                      if (l2[a3].pt.k.i)
                        l2[a3].pt.k.c = l2[a3].cl;
                      else
                        for (o3 = l2[a3].pt.k.length, n3 = 0; n3 < o3; n3 += 1)
                          l2[a3].pt.k[n3].s && (l2[a3].pt.k[n3].s[0].c = l2[a3].cl), l2[a3].pt.k[n3].e && (l2[a3].pt.k[n3].e[0].c = l2[a3].cl);
                  }
                  4 === r4.ty && e4(r4.shapes);
                }
              }
              return function(e5) {
                if (a2(t4, e5.v) && (r3(e5.layers), e5.assets)) {
                  var i3, s3 = e5.assets.length;
                  for (i3 = 0; i3 < s3; i3 += 1)
                    e5.assets[i3].layers && r3(e5.assets[i3].layers);
                }
              };
            }();
            function f(t4) {
              0 === t4.t.a.length && t4.t.p;
            }
            var c = { completeData: function(r3) {
              r3.__complete || (l(r3), n2(r3), o2(r3), h(r3), p(r3), t3(r3.layers, r3.assets), function(r4, i3) {
                if (r4) {
                  var a3 = 0, s3 = r4.length;
                  for (a3 = 0; a3 < s3; a3 += 1)
                    1 === r4[a3].t && (r4[a3].data.layers = e3(r4[a3].data.refId, i3), t3(r4[a3].data.layers, i3));
                }
              }(r3.chars, r3.assets), r3.__complete = true);
            } };
            return c.checkColors = l, c.checkChars = o2, c.checkPathProperties = h, c.checkShapes = p, c.completeLayers = t3, c;
          }()), s.assetLoader || (s.assetLoader = /* @__PURE__ */ function() {
            function t3(t4) {
              var e3 = t4.getResponseHeader("content-type");
              return e3 && "json" === t4.responseType && -1 !== e3.indexOf("json") || t4.response && "object" === _typeof$5(t4.response) ? t4.response : t4.response && "string" == typeof t4.response ? JSON.parse(t4.response) : t4.responseText ? JSON.parse(t4.responseText) : null;
            }
            return { load: function(e3, r2, i2, a2) {
              var s2, n2 = new XMLHttpRequest();
              try {
                n2.responseType = "json";
              } catch (t4) {
              }
              n2.onreadystatechange = function() {
                if (4 === n2.readyState)
                  if (200 === n2.status)
                    s2 = t3(n2), i2(s2);
                  else
                    try {
                      s2 = t3(n2), i2(s2);
                    } catch (t4) {
                      a2 && a2(t4);
                    }
              };
              try {
                n2.open(["G", "E", "T"].join(""), e3, true);
              } catch (t4) {
                n2.open(["G", "E", "T"].join(""), r2 + "/" + e3, true);
              }
              n2.send();
            } };
          }()), "loadAnimation" === t2.data.type)
            s.assetLoader.load(t2.data.path, t2.data.fullPath, function(e3) {
              s.dataManager.completeData(e3), s.postMessage({ id: t2.data.id, payload: e3, status: "success" });
            }, function() {
              s.postMessage({ id: t2.data.id, status: "error" });
            });
          else if ("complete" === t2.data.type) {
            var e2 = t2.data.animation;
            s.dataManager.completeData(e2), s.postMessage({ id: t2.data.id, payload: e2, status: "success" });
          } else
            "loadData" === t2.data.type && s.assetLoader.load(t2.data.path, t2.data.fullPath, function(e3) {
              s.postMessage({ id: t2.data.id, payload: e3, status: "success" });
            }, function() {
              s.postMessage({ id: t2.data.id, status: "error" });
            });
        })).onmessage = function(t2) {
          var e2 = t2.data, r2 = e2.id, a2 = i[r2];
          i[r2] = null, "success" === e2.status ? a2.onComplete(e2.payload) : a2.onError && a2.onError();
        });
      }
      function o(t2, e2) {
        var a2 = "processId_" + (r += 1);
        return i[a2] = { onComplete: t2, onError: e2 }, a2;
      }
      return { loadAnimation: function(t2, r2, i2) {
        n();
        var a2 = o(r2, i2);
        e.postMessage({ type: "loadAnimation", path: t2, fullPath: window.location.origin + window.location.pathname, id: a2 });
      }, loadData: function(t2, r2, i2) {
        n();
        var a2 = o(r2, i2);
        e.postMessage({ type: "loadData", path: t2, fullPath: window.location.origin + window.location.pathname, id: a2 });
      }, completeAnimation: function(t2, r2, i2) {
        n();
        var a2 = o(r2, i2);
        e.postMessage({ type: "complete", animation: t2, id: a2 });
      } };
    }(), ImagePreloader = function() {
      var t = function() {
        var t2 = createTag("canvas");
        t2.width = 1, t2.height = 1;
        var e2 = t2.getContext("2d");
        return e2.fillStyle = "rgba(0,0,0,0)", e2.fillRect(0, 0, 1, 1), t2;
      }();
      function e() {
        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function r() {
        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function i(t2, e2, r2) {
        var i2 = "";
        if (t2.e)
          i2 = t2.p;
        else if (e2) {
          var a2 = t2.p;
          -1 !== a2.indexOf("images/") && (a2 = a2.split("/")[1]), i2 = e2 + a2;
        } else
          i2 = r2, i2 += t2.u ? t2.u : "", i2 += t2.p;
        return i2;
      }
      function a(t2) {
        var e2 = 0, r2 = setInterval((function() {
          (t2.getBBox().width || e2 > 500) && (this._imageLoaded(), clearInterval(r2)), e2 += 1;
        }).bind(this), 50);
      }
      function s(t2) {
        var e2 = { assetData: t2 }, r2 = i(t2, this.assetsPath, this.path);
        return dataManager.loadData(r2, (function(t3) {
          e2.img = t3, this._footageLoaded();
        }).bind(this), (function() {
          e2.img = {}, this._footageLoaded();
        }).bind(this)), e2;
      }
      function n() {
        this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = a.bind(this), this.createFootageData = s.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
      }
      return n.prototype = { loadAssets: function(t2, e2) {
        var r2;
        this.imagesLoadedCb = e2;
        var i2 = t2.length;
        for (r2 = 0; r2 < i2; r2 += 1)
          t2[r2].layers || (t2[r2].t && "seq" !== t2[r2].t ? 3 === t2[r2].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t2[r2]))) : (this.totalImages += 1, this.images.push(this._createImageData(t2[r2]))));
      }, setAssetsPath: function(t2) {
        this.assetsPath = t2 || "";
      }, setPath: function(t2) {
        this.path = t2 || "";
      }, loadedImages: function() {
        return this.totalImages === this.loadedAssets;
      }, loadedFootages: function() {
        return this.totalFootages === this.loadedFootagesCount;
      }, destroy: function() {
        this.imagesLoadedCb = null, this.images.length = 0;
      }, getAsset: function(t2) {
        for (var e2 = 0, r2 = this.images.length; e2 < r2; ) {
          if (this.images[e2].assetData === t2)
            return this.images[e2].img;
          e2 += 1;
        }
        return null;
      }, createImgData: function(e2) {
        var r2 = i(e2, this.assetsPath, this.path), a2 = createTag("img");
        a2.crossOrigin = "anonymous", a2.addEventListener("load", this._imageLoaded, false), a2.addEventListener("error", (function() {
          s2.img = t, this._imageLoaded();
        }).bind(this), false), a2.src = r2;
        var s2 = { img: a2, assetData: e2 };
        return s2;
      }, createImageData: function(e2) {
        var r2 = i(e2, this.assetsPath, this.path), a2 = createNS("image");
        isSafari ? this.testImageLoaded(a2) : a2.addEventListener("load", this._imageLoaded, false), a2.addEventListener("error", (function() {
          s2.img = t, this._imageLoaded();
        }).bind(this), false), a2.setAttributeNS("http://www.w3.org/1999/xlink", "href", r2), this._elementHelper.append ? this._elementHelper.append(a2) : this._elementHelper.appendChild(a2);
        var s2 = { img: a2, assetData: e2 };
        return s2;
      }, imageLoaded: e, footageLoaded: r, setCacheType: function(t2, e2) {
        "svg" === t2 ? (this._elementHelper = e2, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
      } }, n;
    }();
    function BaseEvent() {
    }
    BaseEvent.prototype = { triggerEvent: function(t, e) {
      if (this._cbs[t])
        for (var r = this._cbs[t], i = 0; i < r.length; i += 1)
          r[i](e);
    }, addEventListener: function(t, e) {
      return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), (function() {
        this.removeEventListener(t, e);
      }).bind(this);
    }, removeEventListener: function(t, e) {
      if (e) {
        if (this._cbs[t]) {
          for (var r = 0, i = this._cbs[t].length; r < i; )
            this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, i -= 1), r += 1;
          this._cbs[t].length || (this._cbs[t] = null);
        }
      } else
        this._cbs[t] = null;
    } };
    var markerParser = /* @__PURE__ */ function() {
      function t(t2) {
        for (var e, r = t2.split("\r\n"), i = {}, a = 0, s = 0; s < r.length; s += 1)
          2 === (e = r[s].split(":")).length && (i[e[0]] = e[1].trim(), a += 1);
        if (0 === a)
          throw new Error();
        return i;
      }
      return function(e) {
        for (var r = [], i = 0; i < e.length; i += 1) {
          var a = e[i], s = { time: a.tm, duration: a.dr };
          try {
            s.payload = JSON.parse(e[i].cm);
          } catch (r2) {
            try {
              s.payload = t(e[i].cm);
            } catch (t2) {
              s.payload = { name: e[i].cm };
            }
          }
          r.push(s);
        }
        return r;
      };
    }(), ProjectInterface = /* @__PURE__ */ function() {
      function t(t2) {
        this.compositions.push(t2);
      }
      return function() {
        function e(t2) {
          for (var e2 = 0, r = this.compositions.length; e2 < r; ) {
            if (this.compositions[e2].data && this.compositions[e2].data.nm === t2)
              return this.compositions[e2].prepareFrame && this.compositions[e2].data.xt && this.compositions[e2].prepareFrame(this.currentFrame), this.compositions[e2].compInterface;
            e2 += 1;
          }
          return null;
        }
        return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
      };
    }(), renderers = {}, registerRenderer = function(t, e) {
      renderers[t] = e;
    };
    function getRenderer(t) {
      return renderers[t];
    }
    function getRegisteredRenderer() {
      if (renderers.canvas)
        return "canvas";
      for (var t in renderers)
        if (renderers[t])
          return t;
      return "";
    }
    function _typeof$4(t) {
      return (_typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
        return typeof t2;
      } : function(t2) {
        return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
      })(t);
    }
    var AnimationItem = function() {
      this._cbs = [], this.name = "", this.path = "", this.isLoaded = false, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = true, this.autoplay = false, this.loop = true, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = true, this._completedLoop = false, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader(), this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin();
    };
    extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
      (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
      var e = "svg";
      t.animType ? e = t.animType : t.renderer && (e = t.renderer);
      var r = getRenderer(e);
      this.renderer = new r(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || true === t.loop ? this.loop = true : false === t.loop ? this.loop = false : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError));
    }, AnimationItem.prototype.onSetupError = function() {
      this.trigger("data_failed");
    }, AnimationItem.prototype.setupAnimation = function(t) {
      dataManager.completeAnimation(t, this.configAnimation);
    }, AnimationItem.prototype.setData = function(t, e) {
      e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
      var r = { wrapper: t, animationData: e }, i = t.attributes;
      r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
      var a = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
      "false" === a ? r.loop = false : "true" === a ? r.loop = true : "" !== a && (r.loop = parseInt(a, 10));
      var s = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
      r.autoplay = "false" !== s, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = false), r.path ? this.setParams(r) : this.trigger("destroy");
    }, AnimationItem.prototype.includeLayers = function(t) {
      t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
      var e, r, i = this.animationData.layers, a = i.length, s = t.layers, n = s.length;
      for (r = 0; r < n; r += 1)
        for (e = 0; e < a; ) {
          if (i[e].id === s[r].id) {
            i[e] = s[r];
            break;
          }
          e += 1;
        }
      if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
        for (a = t.assets.length, e = 0; e < a; e += 1)
          this.animationData.assets.push(t.assets[e]);
      this.animationData.__complete = false, dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
    }, AnimationItem.prototype.onSegmentComplete = function(t) {
      this.animationData = t;
      var e = getExpressionsPlugin();
      e && e.initExpressions(this), this.loadNextSegment();
    }, AnimationItem.prototype.loadNextSegment = function() {
      var t = this.animationData.segments;
      if (!t || 0 === t.length || !this.autoloadSegments)
        return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
      var e = t.shift();
      this.timeCompleted = e.time * this.frameRate;
      var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), (function() {
        this.trigger("data_failed");
      }).bind(this));
    }, AnimationItem.prototype.loadSegments = function() {
      this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
    }, AnimationItem.prototype.imagesLoaded = function() {
      this.trigger("loaded_images"), this.checkLoaded();
    }, AnimationItem.prototype.preloadImages = function() {
      this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
    }, AnimationItem.prototype.configAnimation = function(t) {
      if (this.renderer)
        try {
          this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
        } catch (t2) {
          this.triggerConfigError(t2);
        }
    }, AnimationItem.prototype.waitForFontsLoaded = function() {
      this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
    }, AnimationItem.prototype.checkLoaded = function() {
      if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
        this.isLoaded = true;
        var t = getExpressionsPlugin();
        t && t.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
          this.trigger("DOMLoaded");
        }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
      }
    }, AnimationItem.prototype.resize = function(t, e) {
      var r = "number" == typeof t ? t : void 0, i = "number" == typeof e ? e : void 0;
      this.renderer.updateContainerSize(r, i);
    }, AnimationItem.prototype.setSubframe = function(t) {
      this.isSubframeEnabled = !!t;
    }, AnimationItem.prototype.gotoFrame = function() {
      this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
    }, AnimationItem.prototype.renderFrame = function() {
      if (false !== this.isLoaded && this.renderer)
        try {
          this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
        } catch (t) {
          this.triggerRenderFrameError(t);
        }
    }, AnimationItem.prototype.play = function(t) {
      t && this.name !== t || true === this.isPaused && (this.isPaused = false, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = false, this.trigger("_active")));
    }, AnimationItem.prototype.pause = function(t) {
      t && this.name !== t || false === this.isPaused && (this.isPaused = true, this.trigger("_pause"), this._idle = true, this.trigger("_idle"), this.audioController.pause());
    }, AnimationItem.prototype.togglePause = function(t) {
      t && this.name !== t || (true === this.isPaused ? this.play() : this.pause());
    }, AnimationItem.prototype.stop = function(t) {
      t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = false, this.setCurrentRawFrameValue(0));
    }, AnimationItem.prototype.getMarkerData = function(t) {
      for (var e, r = 0; r < this.markers.length; r += 1)
        if ((e = this.markers[r]).payload && e.payload.name === t)
          return e;
      return null;
    }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
      if (!r || this.name === r) {
        var i = Number(t);
        if (isNaN(i)) {
          var a = this.getMarkerData(t);
          a && this.goToAndStop(a.time, true);
        } else
          e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
        this.pause();
      }
    }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
      if (!r || this.name === r) {
        var i = Number(t);
        if (isNaN(i)) {
          var a = this.getMarkerData(t);
          a && (a.duration ? this.playSegments([a.time, a.time + a.duration], true) : this.goToAndStop(a.time, true));
        } else
          this.goToAndStop(i, e, r);
        this.play();
      }
    }, AnimationItem.prototype.advanceTime = function(t) {
      if (true !== this.isPaused && false !== this.isLoaded) {
        var e = this.currentRawFrame + t * this.frameModifier, r = false;
        e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = true, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = true, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && true !== this.loop ? (r = true, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = true)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
      }
    }, AnimationItem.prototype.adjustSegment = function(t, e) {
      this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(1e-3 + e)), this.trigger("segmentStart");
    }, AnimationItem.prototype.setSegment = function(t, e) {
      var r = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, true);
    }, AnimationItem.prototype.playSegments = function(t, e) {
      if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
        var r, i = t.length;
        for (r = 0; r < i; r += 1)
          this.segments.push(t[r]);
      } else
        this.segments.push(t);
      this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
    }, AnimationItem.prototype.resetSegments = function(t) {
      this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
    }, AnimationItem.prototype.checkSegments = function(t) {
      return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), true);
    }, AnimationItem.prototype.destroy = function(t) {
      t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
    }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
      this.currentRawFrame = t, this.gotoFrame();
    }, AnimationItem.prototype.setSpeed = function(t) {
      this.playSpeed = t, this.updaFrameModifier();
    }, AnimationItem.prototype.setDirection = function(t) {
      this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
    }, AnimationItem.prototype.setLoop = function(t) {
      this.loop = t;
    }, AnimationItem.prototype.setVolume = function(t, e) {
      e && this.name !== e || this.audioController.setVolume(t);
    }, AnimationItem.prototype.getVolume = function() {
      return this.audioController.getVolume();
    }, AnimationItem.prototype.mute = function(t) {
      t && this.name !== t || this.audioController.mute();
    }, AnimationItem.prototype.unmute = function(t) {
      t && this.name !== t || this.audioController.unmute();
    }, AnimationItem.prototype.updaFrameModifier = function() {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
    }, AnimationItem.prototype.getPath = function() {
      return this.path;
    }, AnimationItem.prototype.getAssetsPath = function(t) {
      var e = "";
      if (t.e)
        e = t.p;
      else if (this.assetsPath) {
        var r = t.p;
        -1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r;
      } else
        e = this.path, e += t.u ? t.u : "", e += t.p;
      return e;
    }, AnimationItem.prototype.getAssetData = function(t) {
      for (var e = 0, r = this.assets.length; e < r; ) {
        if (t === this.assets[e].id)
          return this.assets[e];
        e += 1;
      }
      return null;
    }, AnimationItem.prototype.hide = function() {
      this.renderer.hide();
    }, AnimationItem.prototype.show = function() {
      this.renderer.show();
    }, AnimationItem.prototype.getDuration = function(t) {
      return t ? this.totalFrames : this.totalFrames / this.frameRate;
    }, AnimationItem.prototype.updateDocumentData = function(t, e, r) {
      try {
        this.renderer.getElementByPath(t).updateDocumentData(e, r);
      } catch (t2) {
      }
    }, AnimationItem.prototype.trigger = function(t) {
      if (this._cbs && this._cbs[t])
        switch (t) {
          case "enterFrame":
            this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
            break;
          case "drawnFrame":
            this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
            break;
          case "loopComplete":
            this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
            break;
          case "complete":
            this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
            break;
          case "segmentStart":
            this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
            break;
          case "destroy":
            this.triggerEvent(t, new BMDestroyEvent(t, this));
            break;
          default:
            this.triggerEvent(t);
        }
      "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
    }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
      var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    }, AnimationItem.prototype.triggerConfigError = function(t) {
      var e = new BMConfigErrorEvent(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    };
    var animationManager = function() {
      var t = {}, e = [], r = 0, i = 0, a = 0, s = true, n = false;
      function o(t2) {
        for (var r2 = 0, a2 = t2.target; r2 < i; )
          e[r2].animation === a2 && (e.splice(r2, 1), r2 -= 1, i -= 1, a2.isPaused || p()), r2 += 1;
      }
      function h(t2, r2) {
        if (!t2)
          return null;
        for (var a2 = 0; a2 < i; ) {
          if (e[a2].elem === t2 && null !== e[a2].elem)
            return e[a2].animation;
          a2 += 1;
        }
        var s2 = new AnimationItem();
        return f(s2, t2), s2.setData(t2, r2), s2;
      }
      function l() {
        a += 1, d();
      }
      function p() {
        a -= 1;
      }
      function f(t2, r2) {
        t2.addEventListener("destroy", o), t2.addEventListener("_active", l), t2.addEventListener("_idle", p), e.push({ elem: r2, animation: t2 }), i += 1;
      }
      function c(t2) {
        var o2, h2 = t2 - r;
        for (o2 = 0; o2 < i; o2 += 1)
          e[o2].animation.advanceTime(h2);
        r = t2, a && !n ? window.requestAnimationFrame(c) : s = true;
      }
      function m(t2) {
        r = t2, window.requestAnimationFrame(c);
      }
      function d() {
        !n && a && s && (window.requestAnimationFrame(m), s = false);
      }
      return t.registerAnimation = h, t.loadAnimation = function(t2) {
        var e2 = new AnimationItem();
        return f(e2, null), e2.setParams(t2), e2;
      }, t.setSpeed = function(t2, r2) {
        var a2;
        for (a2 = 0; a2 < i; a2 += 1)
          e[a2].animation.setSpeed(t2, r2);
      }, t.setDirection = function(t2, r2) {
        var a2;
        for (a2 = 0; a2 < i; a2 += 1)
          e[a2].animation.setDirection(t2, r2);
      }, t.play = function(t2) {
        var r2;
        for (r2 = 0; r2 < i; r2 += 1)
          e[r2].animation.play(t2);
      }, t.pause = function(t2) {
        var r2;
        for (r2 = 0; r2 < i; r2 += 1)
          e[r2].animation.pause(t2);
      }, t.stop = function(t2) {
        var r2;
        for (r2 = 0; r2 < i; r2 += 1)
          e[r2].animation.stop(t2);
      }, t.togglePause = function(t2) {
        var r2;
        for (r2 = 0; r2 < i; r2 += 1)
          e[r2].animation.togglePause(t2);
      }, t.searchAnimations = function(t2, e2, r2) {
        var i2, a2 = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), s2 = a2.length;
        for (i2 = 0; i2 < s2; i2 += 1)
          r2 && a2[i2].setAttribute("data-bm-type", r2), h(a2[i2], t2);
        if (e2 && 0 === s2) {
          r2 || (r2 = "svg");
          var n2 = document.getElementsByTagName("body")[0];
          n2.innerText = "";
          var o2 = createTag("div");
          o2.style.width = "100%", o2.style.height = "100%", o2.setAttribute("data-bm-type", r2), n2.appendChild(o2), h(o2, t2);
        }
      }, t.resize = function() {
        var t2;
        for (t2 = 0; t2 < i; t2 += 1)
          e[t2].animation.resize();
      }, t.goToAndStop = function(t2, r2, a2) {
        var s2;
        for (s2 = 0; s2 < i; s2 += 1)
          e[s2].animation.goToAndStop(t2, r2, a2);
      }, t.destroy = function(t2) {
        var r2;
        for (r2 = i - 1; r2 >= 0; r2 -= 1)
          e[r2].animation.destroy(t2);
      }, t.freeze = function() {
        n = true;
      }, t.unfreeze = function() {
        n = false, d();
      }, t.setVolume = function(t2, r2) {
        var a2;
        for (a2 = 0; a2 < i; a2 += 1)
          e[a2].animation.setVolume(t2, r2);
      }, t.mute = function(t2) {
        var r2;
        for (r2 = 0; r2 < i; r2 += 1)
          e[r2].animation.mute(t2);
      }, t.unmute = function(t2) {
        var r2;
        for (r2 = 0; r2 < i; r2 += 1)
          e[r2].animation.unmute(t2);
      }, t.getRegisteredAnimations = function() {
        var t2, r2 = e.length, i2 = [];
        for (t2 = 0; t2 < r2; t2 += 1)
          i2.push(e[t2].animation);
        return i2;
      }, t;
    }(), BezierFactory = function() {
      var t = { getBezierEasing: function(t2, r2, i2, a2, s2) {
        var n2 = s2 || ("bez_" + t2 + "_" + r2 + "_" + i2 + "_" + a2).replace(/\./g, "p");
        if (e[n2])
          return e[n2];
        var o2 = new h([t2, r2, i2, a2]);
        return e[n2] = o2, o2;
      } }, e = {};
      var r = "function" == typeof Float32Array;
      function i(t2, e2) {
        return 1 - 3 * e2 + 3 * t2;
      }
      function a(t2, e2) {
        return 3 * e2 - 6 * t2;
      }
      function s(t2) {
        return 3 * t2;
      }
      function n(t2, e2, r2) {
        return ((i(e2, r2) * t2 + a(e2, r2)) * t2 + s(e2)) * t2;
      }
      function o(t2, e2, r2) {
        return 3 * i(e2, r2) * t2 * t2 + 2 * a(e2, r2) * t2 + s(e2);
      }
      function h(t2) {
        this._p = t2, this._mSampleValues = r ? new Float32Array(11) : new Array(11), this._precomputed = false, this.get = this.get.bind(this);
      }
      return h.prototype = { get: function(t2) {
        var e2 = this._p[0], r2 = this._p[1], i2 = this._p[2], a2 = this._p[3];
        return this._precomputed || this._precompute(), e2 === r2 && i2 === a2 ? t2 : 0 === t2 ? 0 : 1 === t2 ? 1 : n(this._getTForX(t2), r2, a2);
      }, _precompute: function() {
        var t2 = this._p[0], e2 = this._p[1], r2 = this._p[2], i2 = this._p[3];
        this._precomputed = true, t2 === e2 && r2 === i2 || this._calcSampleValues();
      }, _calcSampleValues: function() {
        for (var t2 = this._p[0], e2 = this._p[2], r2 = 0; r2 < 11; ++r2)
          this._mSampleValues[r2] = n(0.1 * r2, t2, e2);
      }, _getTForX: function(t2) {
        for (var e2 = this._p[0], r2 = this._p[2], i2 = this._mSampleValues, a2 = 0, s2 = 1; 10 !== s2 && i2[s2] <= t2; ++s2)
          a2 += 0.1;
        var h2 = a2 + 0.1 * ((t2 - i2[--s2]) / (i2[s2 + 1] - i2[s2])), l = o(h2, e2, r2);
        return l >= 1e-3 ? function(t3, e3, r3, i3) {
          for (var a3 = 0; a3 < 4; ++a3) {
            var s3 = o(e3, r3, i3);
            if (0 === s3)
              return e3;
            e3 -= (n(e3, r3, i3) - t3) / s3;
          }
          return e3;
        }(t2, h2, e2, r2) : 0 === l ? h2 : function(t3, e3, r3, i3, a3) {
          var s3, o2, h3 = 0;
          do {
            (s3 = n(o2 = e3 + (r3 - e3) / 2, i3, a3) - t3) > 0 ? r3 = o2 : e3 = o2;
          } while (Math.abs(s3) > 1e-7 && ++h3 < 10);
          return o2;
        }(t2, a2, a2 + 0.1, e2, r2);
      } }, t;
    }(), pooling = { double: function(t) {
      return t.concat(createSizedArray(t.length));
    } }, poolFactory = function(t, e, r) {
      var i = 0, a = t, s = createSizedArray(a);
      return { newElement: function() {
        return i ? s[i -= 1] : e();
      }, release: function(t2) {
        i === a && (s = pooling.double(s), a *= 2), r && r(t2), s[i] = t2, i += 1;
      } };
    }, bezierLengthPool = poolFactory(8, function() {
      return { addedLength: 0, percents: createTypedArray("float32", getDefaultCurveSegments()), lengths: createTypedArray("float32", getDefaultCurveSegments()) };
    }), segmentsLengthPool = poolFactory(8, function() {
      return { lengths: [], totalLength: 0 };
    }, function(t) {
      var e, r = t.lengths.length;
      for (e = 0; e < r; e += 1)
        bezierLengthPool.release(t.lengths[e]);
      t.lengths.length = 0;
    });
    function bezFunction() {
      var t = Math;
      function e(t2, e2, r2, i2, a2, s2) {
        var n2 = t2 * i2 + e2 * a2 + r2 * s2 - a2 * i2 - s2 * t2 - r2 * e2;
        return n2 > -1e-3 && n2 < 1e-3;
      }
      var r = function(t2, e2, r2, i2) {
        var a2, s2, n2, o2, h2, l, p = getDefaultCurveSegments(), f = 0, c = [], m = [], d = bezierLengthPool.newElement();
        for (n2 = r2.length, a2 = 0; a2 < p; a2 += 1) {
          for (h2 = a2 / (p - 1), l = 0, s2 = 0; s2 < n2; s2 += 1)
            o2 = bmPow(1 - h2, 3) * t2[s2] + 3 * bmPow(1 - h2, 2) * h2 * r2[s2] + 3 * (1 - h2) * bmPow(h2, 2) * i2[s2] + bmPow(h2, 3) * e2[s2], c[s2] = o2, null !== m[s2] && (l += bmPow(c[s2] - m[s2], 2)), m[s2] = c[s2];
          l && (f += l = bmSqrt(l)), d.percents[a2] = h2, d.lengths[a2] = f;
        }
        return d.addedLength = f, d;
      };
      function i(t2) {
        this.segmentLength = 0, this.points = new Array(t2);
      }
      function a(t2, e2) {
        this.partialLength = t2, this.point = e2;
      }
      var s, n = (s = {}, function(t2, r2, n2, o2) {
        var h2 = (t2[0] + "_" + t2[1] + "_" + r2[0] + "_" + r2[1] + "_" + n2[0] + "_" + n2[1] + "_" + o2[0] + "_" + o2[1]).replace(/\./g, "p");
        if (!s[h2]) {
          var l, p, f, c, m, d, u, y = getDefaultCurveSegments(), g = 0, v = null;
          2 === t2.length && (t2[0] !== r2[0] || t2[1] !== r2[1]) && e(t2[0], t2[1], r2[0], r2[1], t2[0] + n2[0], t2[1] + n2[1]) && e(t2[0], t2[1], r2[0], r2[1], r2[0] + o2[0], r2[1] + o2[1]) && (y = 2);
          var b = new i(y);
          for (f = n2.length, l = 0; l < y; l += 1) {
            for (u = createSizedArray(f), m = l / (y - 1), d = 0, p = 0; p < f; p += 1)
              c = bmPow(1 - m, 3) * t2[p] + 3 * bmPow(1 - m, 2) * m * (t2[p] + n2[p]) + 3 * (1 - m) * bmPow(m, 2) * (r2[p] + o2[p]) + bmPow(m, 3) * r2[p], u[p] = c, null !== v && (d += bmPow(u[p] - v[p], 2));
            g += d = bmSqrt(d), b.points[l] = new a(d, u), v = u;
          }
          b.segmentLength = g, s[h2] = b;
        }
        return s[h2];
      });
      function o(t2, e2) {
        var r2 = e2.percents, i2 = e2.lengths, a2 = r2.length, s2 = bmFloor((a2 - 1) * t2), n2 = t2 * e2.addedLength, o2 = 0;
        if (s2 === a2 - 1 || 0 === s2 || n2 === i2[s2])
          return r2[s2];
        for (var h2 = i2[s2] > n2 ? -1 : 1, l = true; l; )
          if (i2[s2] <= n2 && i2[s2 + 1] > n2 ? (o2 = (n2 - i2[s2]) / (i2[s2 + 1] - i2[s2]), l = false) : s2 += h2, s2 < 0 || s2 >= a2 - 1) {
            if (s2 === a2 - 1)
              return r2[s2];
            l = false;
          }
        return r2[s2] + (r2[s2 + 1] - r2[s2]) * o2;
      }
      var h = createTypedArray("float32", 8);
      return { getSegmentsLength: function(t2) {
        var e2, i2 = segmentsLengthPool.newElement(), a2 = t2.c, s2 = t2.v, n2 = t2.o, o2 = t2.i, h2 = t2._length, l = i2.lengths, p = 0;
        for (e2 = 0; e2 < h2 - 1; e2 += 1)
          l[e2] = r(s2[e2], s2[e2 + 1], n2[e2], o2[e2 + 1]), p += l[e2].addedLength;
        return a2 && h2 && (l[e2] = r(s2[e2], s2[0], n2[e2], o2[0]), p += l[e2].addedLength), i2.totalLength = p, i2;
      }, getNewSegment: function(e2, r2, i2, a2, s2, n2, l) {
        s2 < 0 ? s2 = 0 : s2 > 1 && (s2 = 1);
        var p, f = o(s2, l), c = o(n2 = n2 > 1 ? 1 : n2, l), m = e2.length, d = 1 - f, u = 1 - c, y = d * d * d, g = f * d * d * 3, v = f * f * d * 3, b = f * f * f, x = d * d * u, E = f * d * u + d * f * u + d * d * c, S = f * f * u + d * f * c + f * d * c, P = f * f * c, C = d * u * u, _ = f * u * u + d * c * u + d * u * c, k = f * c * u + d * c * c + f * u * c, A = f * c * c, T = u * u * u, M = c * u * u + u * c * u + u * u * c, w = c * c * u + u * c * c + c * u * c, D = c * c * c;
        for (p = 0; p < m; p += 1)
          h[4 * p] = t.round(1e3 * (y * e2[p] + g * i2[p] + v * a2[p] + b * r2[p])) / 1e3, h[4 * p + 1] = t.round(1e3 * (x * e2[p] + E * i2[p] + S * a2[p] + P * r2[p])) / 1e3, h[4 * p + 2] = t.round(1e3 * (C * e2[p] + _ * i2[p] + k * a2[p] + A * r2[p])) / 1e3, h[4 * p + 3] = t.round(1e3 * (T * e2[p] + M * i2[p] + w * a2[p] + D * r2[p])) / 1e3;
        return h;
      }, getPointInSegment: function(e2, r2, i2, a2, s2, n2) {
        var h2 = o(s2, n2), l = 1 - h2;
        return [t.round(1e3 * (l * l * l * e2[0] + (h2 * l * l + l * h2 * l + l * l * h2) * i2[0] + (h2 * h2 * l + l * h2 * h2 + h2 * l * h2) * a2[0] + h2 * h2 * h2 * r2[0])) / 1e3, t.round(1e3 * (l * l * l * e2[1] + (h2 * l * l + l * h2 * l + l * l * h2) * i2[1] + (h2 * h2 * l + l * h2 * h2 + h2 * l * h2) * a2[1] + h2 * h2 * h2 * r2[1])) / 1e3];
      }, buildBezierData: n, pointOnLine2D: e, pointOnLine3D: function(r2, i2, a2, s2, n2, o2, h2, l, p) {
        if (0 === a2 && 0 === o2 && 0 === p)
          return e(r2, i2, s2, n2, h2, l);
        var f, c = t.sqrt(t.pow(s2 - r2, 2) + t.pow(n2 - i2, 2) + t.pow(o2 - a2, 2)), m = t.sqrt(t.pow(h2 - r2, 2) + t.pow(l - i2, 2) + t.pow(p - a2, 2)), d = t.sqrt(t.pow(h2 - s2, 2) + t.pow(l - n2, 2) + t.pow(p - o2, 2));
        return (f = c > m ? c > d ? c - m - d : d - m - c : d > m ? d - m - c : m - c - d) > -1e-4 && f < 1e-4;
      } };
    }
    var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
    function interpolateValue(t, e) {
      var r, i = this.offsetTime;
      "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
      for (var a, s, n, o, h, l, p, f, c, m = e.lastIndex, d = m, u = this.keyframes.length - 1, y = true; y; ) {
        if (a = this.keyframes[d], s = this.keyframes[d + 1], d === u - 1 && t >= s.t - i) {
          a.h && (a = s), m = 0;
          break;
        }
        if (s.t - i > t) {
          m = d;
          break;
        }
        d < u - 1 ? d += 1 : (m = 0, y = false);
      }
      n = this.keyframesMetadata[d] || {};
      var g, v = s.t - i, b = a.t - i;
      if (a.to) {
        n.bezierData || (n.bezierData = bez.buildBezierData(a.s, s.s || a.e, a.to, a.ti));
        var x = n.bezierData;
        if (t >= v || t < b) {
          var E = t >= v ? x.points.length - 1 : 0;
          for (h = x.points[E].point.length, o = 0; o < h; o += 1)
            r[o] = x.points[E].point[o];
        } else {
          n.__fnct ? c = n.__fnct : (c = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, n.__fnct = c), l = c((t - b) / (v - b));
          var S, P = x.segmentLength * l, C = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
          for (f = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0, y = true, p = x.points.length; y; ) {
            if (C += x.points[f].partialLength, 0 === P || 0 === l || f === x.points.length - 1) {
              for (h = x.points[f].point.length, o = 0; o < h; o += 1)
                r[o] = x.points[f].point[o];
              break;
            }
            if (P >= C && P < C + x.points[f + 1].partialLength) {
              for (S = (P - C) / x.points[f + 1].partialLength, h = x.points[f].point.length, o = 0; o < h; o += 1)
                r[o] = x.points[f].point[o] + (x.points[f + 1].point[o] - x.points[f].point[o]) * S;
              break;
            }
            f < p - 1 ? f += 1 : y = false;
          }
          e._lastPoint = f, e._lastAddedLength = C - x.points[f].partialLength, e._lastKeyframeIndex = d;
        }
      } else {
        var _, k, A, T, M;
        if (u = a.s.length, g = s.s || a.e, this.sh && 1 !== a.h)
          if (t >= v)
            r[0] = g[0], r[1] = g[1], r[2] = g[2];
          else if (t <= b)
            r[0] = a.s[0], r[1] = a.s[1], r[2] = a.s[2];
          else {
            quaternionToEuler(r, slerp(createQuaternion(a.s), createQuaternion(g), (t - b) / (v - b)));
          }
        else
          for (d = 0; d < u; d += 1)
            1 !== a.h && (t >= v ? l = 1 : t < b ? l = 0 : (a.o.x.constructor === Array ? (n.__fnct || (n.__fnct = []), n.__fnct[d] ? c = n.__fnct[d] : (_ = void 0 === a.o.x[d] ? a.o.x[0] : a.o.x[d], k = void 0 === a.o.y[d] ? a.o.y[0] : a.o.y[d], A = void 0 === a.i.x[d] ? a.i.x[0] : a.i.x[d], T = void 0 === a.i.y[d] ? a.i.y[0] : a.i.y[d], c = BezierFactory.getBezierEasing(_, k, A, T).get, n.__fnct[d] = c)) : n.__fnct ? c = n.__fnct : (_ = a.o.x, k = a.o.y, A = a.i.x, T = a.i.y, c = BezierFactory.getBezierEasing(_, k, A, T).get, a.keyframeMetadata = c), l = c((t - b) / (v - b)))), g = s.s || a.e, M = 1 === a.h ? a.s[d] : a.s[d] + (g[d] - a.s[d]) * l, "multidimensional" === this.propType ? r[d] = M : r = M;
      }
      return e.lastIndex = m, r;
    }
    function slerp(t, e, r) {
      var i, a, s, n, o, h = [], l = t[0], p = t[1], f = t[2], c = t[3], m = e[0], d = e[1], u = e[2], y = e[3];
      return (a = l * m + p * d + f * u + c * y) < 0 && (a = -a, m = -m, d = -d, u = -u, y = -y), 1 - a > 1e-6 ? (i = Math.acos(a), s = Math.sin(i), n = Math.sin((1 - r) * i) / s, o = Math.sin(r * i) / s) : (n = 1 - r, o = r), h[0] = n * l + o * m, h[1] = n * p + o * d, h[2] = n * f + o * u, h[3] = n * c + o * y, h;
    }
    function quaternionToEuler(t, e) {
      var r = e[0], i = e[1], a = e[2], s = e[3], n = Math.atan2(2 * i * s - 2 * r * a, 1 - 2 * i * i - 2 * a * a), o = Math.asin(2 * r * i + 2 * a * s), h = Math.atan2(2 * r * s - 2 * i * a, 1 - 2 * r * r - 2 * a * a);
      t[0] = n / degToRads, t[1] = o / degToRads, t[2] = h / degToRads;
    }
    function createQuaternion(t) {
      var e = t[0] * degToRads, r = t[1] * degToRads, i = t[2] * degToRads, a = Math.cos(e / 2), s = Math.cos(r / 2), n = Math.cos(i / 2), o = Math.sin(e / 2), h = Math.sin(r / 2), l = Math.sin(i / 2);
      return [o * h * n + a * s * l, o * s * n + a * h * l, a * h * n - o * s * l, a * s * n - o * h * l];
    }
    function getValueAtCurrentTime() {
      var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
      if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && t >= r || this._caching.lastFrame < e && t < e))) {
        this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
        var i = this.interpolateValue(t, this._caching);
        this.pv = i;
      }
      return this._caching.lastFrame = t, this.pv;
    }
    function setVValue(t) {
      var e;
      if ("unidimensional" === this.propType)
        e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = true);
      else
        for (var r = 0, i = this.v.length; r < i; )
          e = t[r] * this.mult, mathAbs(this.v[r] - e) > 1e-5 && (this.v[r] = e, this._mdf = true), r += 1;
    }
    function processEffectsSequence() {
      if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
        if (this.lock)
          this.setVValue(this.pv);
        else {
          var t;
          this.lock = true, this._mdf = this._isFirstFrame;
          var e = this.effectsSequence.length, r = this.kf ? this.pv : this.data.k;
          for (t = 0; t < e; t += 1)
            r = this.effectsSequence[t](r);
          this.setVValue(r), this._isFirstFrame = false, this.lock = false, this.frameId = this.elem.globalData.frameId;
        }
    }
    function addEffect(t) {
      this.effectsSequence.push(t), this.container.addDynamicProperty(this);
    }
    function ValueProperty(t, e, r, i) {
      this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = false, this.elem = t, this.container = i, this.comp = t.comp, this.k = false, this.kf = false, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = true, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
    }
    function MultiDimensionalProperty(t, e, r, i) {
      var a;
      this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = false, this.elem = t, this.container = i, this.comp = t.comp, this.k = false, this.kf = false, this.frameId = -1;
      var s = e.k.length;
      for (this.v = createTypedArray("float32", s), this.pv = createTypedArray("float32", s), this.vel = createTypedArray("float32", s), a = 0; a < s; a += 1)
        this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
      this._isFirstFrame = true, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
    }
    function KeyframedValueProperty(t, e, r, i) {
      this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = { lastFrame: initFrame, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }, this.k = true, this.kf = true, this.data = e, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = true, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect;
    }
    function KeyframedMultidimensionalProperty(t, e, r, i) {
      var a;
      this.propType = "multidimensional";
      var s, n, o, h, l = e.k.length;
      for (a = 0; a < l - 1; a += 1)
        e.k[a].to && e.k[a].s && e.k[a + 1] && e.k[a + 1].s && (s = e.k[a].s, n = e.k[a + 1].s, o = e.k[a].to, h = e.k[a].ti, (2 === s.length && (s[0] !== n[0] || s[1] !== n[1]) && bez.pointOnLine2D(s[0], s[1], n[0], n[1], s[0] + o[0], s[1] + o[1]) && bez.pointOnLine2D(s[0], s[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || 3 === s.length && (s[0] !== n[0] || s[1] !== n[1] || s[2] !== n[2]) && bez.pointOnLine3D(s[0], s[1], s[2], n[0], n[1], n[2], s[0] + o[0], s[1] + o[1], s[2] + o[2]) && bez.pointOnLine3D(s[0], s[1], s[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) && (e.k[a].to = null, e.k[a].ti = null), s[0] === n[0] && s[1] === n[1] && 0 === o[0] && 0 === o[1] && 0 === h[0] && 0 === h[1] && (2 === s.length || s[2] === n[2] && 0 === o[2] && 0 === h[2]) && (e.k[a].to = null, e.k[a].ti = null));
      this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = true, this.kf = true, this._isFirstFrame = true, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
      var p = e.k[0].s.length;
      for (this.v = createTypedArray("float32", p), this.pv = createTypedArray("float32", p), a = 0; a < p; a += 1)
        this.v[a] = initFrame, this.pv[a] = initFrame;
      this._caching = { lastFrame: initFrame, lastIndex: 0, value: createTypedArray("float32", p) }, this.addEffect = addEffect;
    }
    var PropertyFactory = { getProp: function(t, e, r, i, a) {
      var s;
      if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
        if ("number" == typeof e.k[0])
          s = new MultiDimensionalProperty(t, e, i, a);
        else
          switch (r) {
            case 0:
              s = new KeyframedValueProperty(t, e, i, a);
              break;
            case 1:
              s = new KeyframedMultidimensionalProperty(t, e, i, a);
          }
      else
        s = new ValueProperty(t, e, i, a);
      return s.effectsSequence.length && a.addDynamicProperty(s), s;
    } };
    function DynamicPropertyContainer() {
    }
    DynamicPropertyContainer.prototype = { addDynamicProperty: function(t) {
      -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = true);
    }, iterateDynamicProperties: function() {
      var t;
      this._mdf = false;
      var e = this.dynamicProperties.length;
      for (t = 0; t < e; t += 1)
        this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = true);
    }, initDynamicPropertyContainer: function(t) {
      this.container = t, this.dynamicProperties = [], this._mdf = false, this._isAnimated = false;
    } };
    var pointPool = poolFactory(8, function() {
      return createTypedArray("float32", 2);
    });
    function ShapePath() {
      this.c = false, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
    }
    ShapePath.prototype.setPathData = function(t, e) {
      this.c = t, this.setLength(e);
      for (var r = 0; r < e; )
        this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1;
    }, ShapePath.prototype.setLength = function(t) {
      for (; this._maxLength < t; )
        this.doubleArrayLength();
      this._length = t;
    }, ShapePath.prototype.doubleArrayLength = function() {
      this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
    }, ShapePath.prototype.setXYAt = function(t, e, r, i, a) {
      var s;
      switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
        case "v":
          s = this.v;
          break;
        case "i":
          s = this.i;
          break;
        case "o":
          s = this.o;
          break;
        default:
          s = [];
      }
      (!s[i] || s[i] && !a) && (s[i] = pointPool.newElement()), s[i][0] = t, s[i][1] = e;
    }, ShapePath.prototype.setTripleAt = function(t, e, r, i, a, s, n, o) {
      this.setXYAt(t, e, "v", n, o), this.setXYAt(r, i, "o", n, o), this.setXYAt(a, s, "i", n, o);
    }, ShapePath.prototype.reverse = function() {
      var t = new ShapePath();
      t.setPathData(this.c, this._length);
      var e = this.v, r = this.o, i = this.i, a = 0;
      this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, false), a = 1);
      var s, n = this._length - 1, o = this._length;
      for (s = a; s < o; s += 1)
        t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], r[n][0], r[n][1], s, false), n -= 1;
      return t;
    }, ShapePath.prototype.length = function() {
      return this._length;
    };
    var shapePool = (factory = poolFactory(4, function() {
      return new ShapePath();
    }, function(t) {
      var e, r = t._length;
      for (e = 0; e < r; e += 1)
        pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
      t._length = 0, t.c = false;
    }), factory.clone = function(t) {
      var e, r = factory.newElement(), i = void 0 === t._length ? t.v.length : t._length;
      for (r.setLength(i), r.c = t.c, e = 0; e < i; e += 1)
        r.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
      return r;
    }, factory), factory;
    function ShapeCollection() {
      this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
    }
    ShapeCollection.prototype.addShape = function(t) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
    }, ShapeCollection.prototype.releaseShapes = function() {
      var t;
      for (t = 0; t < this._length; t += 1)
        shapePool.release(this.shapes[t]);
      this._length = 0;
    };
    var shapeCollectionPool = (ob = { newShapeCollection: function() {
      return _length ? pool[_length -= 1] : new ShapeCollection();
    }, release: function(t) {
      var e, r = t._length;
      for (e = 0; e < r; e += 1)
        shapePool.release(t.shapes[e]);
      t._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = t, _length += 1;
    } }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob), ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
      function t(t2, e2, r2) {
        var i2, a2, s2, n2, o2, h2, l2, p2, f2, c = r2.lastIndex, m = this.keyframes;
        if (t2 < m[0].t - this.offsetTime)
          i2 = m[0].s[0], s2 = true, c = 0;
        else if (t2 >= m[m.length - 1].t - this.offsetTime)
          i2 = m[m.length - 1].s ? m[m.length - 1].s[0] : m[m.length - 2].e[0], s2 = true;
        else {
          for (var d, u, y, g = c, v = m.length - 1, b = true; b && (d = m[g], !((u = m[g + 1]).t - this.offsetTime > t2)); )
            g < v - 1 ? g += 1 : b = false;
          if (y = this.keyframesMetadata[g] || {}, c = g, !(s2 = 1 === d.h)) {
            if (t2 >= u.t - this.offsetTime)
              p2 = 1;
            else if (t2 < d.t - this.offsetTime)
              p2 = 0;
            else {
              var x;
              y.__fnct ? x = y.__fnct : (x = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, y.__fnct = x), p2 = x((t2 - (d.t - this.offsetTime)) / (u.t - this.offsetTime - (d.t - this.offsetTime)));
            }
            a2 = u.s ? u.s[0] : d.e[0];
          }
          i2 = d.s[0];
        }
        for (h2 = e2._length, l2 = i2.i[0].length, r2.lastIndex = c, n2 = 0; n2 < h2; n2 += 1)
          for (o2 = 0; o2 < l2; o2 += 1)
            f2 = s2 ? i2.i[n2][o2] : i2.i[n2][o2] + (a2.i[n2][o2] - i2.i[n2][o2]) * p2, e2.i[n2][o2] = f2, f2 = s2 ? i2.o[n2][o2] : i2.o[n2][o2] + (a2.o[n2][o2] - i2.o[n2][o2]) * p2, e2.o[n2][o2] = f2, f2 = s2 ? i2.v[n2][o2] : i2.v[n2][o2] + (a2.v[n2][o2] - i2.v[n2][o2]) * p2, e2.v[n2][o2] = f2;
      }
      function e() {
        var t2 = this.comp.renderedFrame - this.offsetTime, e2 = this.keyframes[0].t - this.offsetTime, r2 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, i2 = this._caching.lastFrame;
        return -999999 !== i2 && (i2 < e2 && t2 < e2 || i2 > r2 && t2 > r2) || (this._caching.lastIndex = i2 < t2 ? this._caching.lastIndex : 0, this.interpolateShape(t2, this.pv, this._caching)), this._caching.lastFrame = t2, this.pv;
      }
      function r() {
        this.paths = this.localShapeCollection;
      }
      function i(t2) {
        (function(t3, e2) {
          if (t3._length !== e2._length || t3.c !== e2.c)
            return false;
          var r2, i2 = t3._length;
          for (r2 = 0; r2 < i2; r2 += 1)
            if (t3.v[r2][0] !== e2.v[r2][0] || t3.v[r2][1] !== e2.v[r2][1] || t3.o[r2][0] !== e2.o[r2][0] || t3.o[r2][1] !== e2.o[r2][1] || t3.i[r2][0] !== e2.i[r2][0] || t3.i[r2][1] !== e2.i[r2][1])
              return false;
          return true;
        })(this.v, t2) || (this.v = shapePool.clone(t2), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = true, this.paths = this.localShapeCollection);
      }
      function a() {
        if (this.elem.globalData.frameId !== this.frameId)
          if (this.effectsSequence.length)
            if (this.lock)
              this.setVValue(this.pv);
            else {
              var t2, e2;
              this.lock = true, this._mdf = false, t2 = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
              var r2 = this.effectsSequence.length;
              for (e2 = 0; e2 < r2; e2 += 1)
                t2 = this.effectsSequence[e2](t2);
              this.setVValue(t2), this.lock = false, this.frameId = this.elem.globalData.frameId;
            }
          else
            this._mdf = false;
      }
      function s(t2, e2, i2) {
        this.propType = "shape", this.comp = t2.comp, this.container = t2, this.elem = t2, this.data = e2, this.k = false, this.kf = false, this._mdf = false;
        var a2 = 3 === i2 ? e2.pt.k : e2.ks.k;
        this.v = shapePool.clone(a2), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = [];
      }
      function n(t2) {
        this.effectsSequence.push(t2), this.container.addDynamicProperty(this);
      }
      function o(t2, i2, a2) {
        this.propType = "shape", this.comp = t2.comp, this.elem = t2, this.container = t2, this.offsetTime = t2.data.st, this.keyframes = 3 === a2 ? i2.pt.k : i2.ks.k, this.keyframesMetadata = [], this.k = true, this.kf = true;
        var s2 = this.keyframes[0].s[0].i.length;
        this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s2), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = r, this._caching = { lastFrame: -999999, lastIndex: 0 }, this.effectsSequence = [e.bind(this)];
      }
      s.prototype.interpolateShape = t, s.prototype.getValue = a, s.prototype.setVValue = i, s.prototype.addEffect = n, o.prototype.getValue = a, o.prototype.interpolateShape = t, o.prototype.setVValue = i, o.prototype.addEffect = n;
      var h = function() {
        var t2 = roundCorner;
        function e2(t3, e3) {
          this.v = shapePool.newElement(), this.v.setPathData(true, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e3.d, this.elem = t3, this.comp = t3.comp, this.frameId = -1, this.initDynamicPropertyContainer(t3), this.p = PropertyFactory.getProp(t3, e3.p, 1, 0, this), this.s = PropertyFactory.getProp(t3, e3.s, 1, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertEllToPath());
        }
        return e2.prototype = { reset: r, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
        }, convertEllToPath: function() {
          var e3 = this.p.v[0], r2 = this.p.v[1], i2 = this.s.v[0] / 2, a2 = this.s.v[1] / 2, s2 = 3 !== this.d, n2 = this.v;
          n2.v[0][0] = e3, n2.v[0][1] = r2 - a2, n2.v[1][0] = s2 ? e3 + i2 : e3 - i2, n2.v[1][1] = r2, n2.v[2][0] = e3, n2.v[2][1] = r2 + a2, n2.v[3][0] = s2 ? e3 - i2 : e3 + i2, n2.v[3][1] = r2, n2.i[0][0] = s2 ? e3 - i2 * t2 : e3 + i2 * t2, n2.i[0][1] = r2 - a2, n2.i[1][0] = s2 ? e3 + i2 : e3 - i2, n2.i[1][1] = r2 - a2 * t2, n2.i[2][0] = s2 ? e3 + i2 * t2 : e3 - i2 * t2, n2.i[2][1] = r2 + a2, n2.i[3][0] = s2 ? e3 - i2 : e3 + i2, n2.i[3][1] = r2 + a2 * t2, n2.o[0][0] = s2 ? e3 + i2 * t2 : e3 - i2 * t2, n2.o[0][1] = r2 - a2, n2.o[1][0] = s2 ? e3 + i2 : e3 - i2, n2.o[1][1] = r2 + a2 * t2, n2.o[2][0] = s2 ? e3 - i2 * t2 : e3 + i2 * t2, n2.o[2][1] = r2 + a2, n2.o[3][0] = s2 ? e3 - i2 : e3 + i2, n2.o[3][1] = r2 - a2 * t2;
        } }, extendPrototype([DynamicPropertyContainer], e2), e2;
      }(), l = function() {
        function t2(t3, e2) {
          this.v = shapePool.newElement(), this.v.setPathData(true, 0), this.elem = t3, this.comp = t3.comp, this.data = e2, this.frameId = -1, this.d = e2.d, this.initDynamicPropertyContainer(t3), 1 === e2.sy ? (this.ir = PropertyFactory.getProp(t3, e2.ir, 0, 0, this), this.is = PropertyFactory.getProp(t3, e2.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t3, e2.pt, 0, 0, this), this.p = PropertyFactory.getProp(t3, e2.p, 1, 0, this), this.r = PropertyFactory.getProp(t3, e2.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t3, e2.or, 0, 0, this), this.os = PropertyFactory.getProp(t3, e2.os, 0, 0.01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertToPath());
        }
        return t2.prototype = { reset: r, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
        }, convertStarToPath: function() {
          var t3, e2, r2, i2, a2 = 2 * Math.floor(this.pt.v), s2 = 2 * Math.PI / a2, n2 = true, o2 = this.or.v, h2 = this.ir.v, l2 = this.os.v, p2 = this.is.v, f2 = 2 * Math.PI * o2 / (2 * a2), c = 2 * Math.PI * h2 / (2 * a2), m = -Math.PI / 2;
          m += this.r.v;
          var d = 3 === this.data.d ? -1 : 1;
          for (this.v._length = 0, t3 = 0; t3 < a2; t3 += 1) {
            r2 = n2 ? l2 : p2, i2 = n2 ? f2 : c;
            var u = (e2 = n2 ? o2 : h2) * Math.cos(m), y = e2 * Math.sin(m), g = 0 === u && 0 === y ? 0 : y / Math.sqrt(u * u + y * y), v = 0 === u && 0 === y ? 0 : -u / Math.sqrt(u * u + y * y);
            u += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(u, y, u - g * i2 * r2 * d, y - v * i2 * r2 * d, u + g * i2 * r2 * d, y + v * i2 * r2 * d, t3, true), n2 = !n2, m += s2 * d;
          }
        }, convertPolygonToPath: function() {
          var t3, e2 = Math.floor(this.pt.v), r2 = 2 * Math.PI / e2, i2 = this.or.v, a2 = this.os.v, s2 = 2 * Math.PI * i2 / (4 * e2), n2 = 0.5 * -Math.PI, o2 = 3 === this.data.d ? -1 : 1;
          for (n2 += this.r.v, this.v._length = 0, t3 = 0; t3 < e2; t3 += 1) {
            var h2 = i2 * Math.cos(n2), l2 = i2 * Math.sin(n2), p2 = 0 === h2 && 0 === l2 ? 0 : l2 / Math.sqrt(h2 * h2 + l2 * l2), f2 = 0 === h2 && 0 === l2 ? 0 : -h2 / Math.sqrt(h2 * h2 + l2 * l2);
            h2 += +this.p.v[0], l2 += +this.p.v[1], this.v.setTripleAt(h2, l2, h2 - p2 * s2 * a2 * o2, l2 - f2 * s2 * a2 * o2, h2 + p2 * s2 * a2 * o2, l2 + f2 * s2 * a2 * o2, t3, true), n2 += r2 * o2;
          }
          this.paths.length = 0, this.paths[0] = this.v;
        } }, extendPrototype([DynamicPropertyContainer], t2), t2;
      }(), p = function() {
        function t2(t3, e2) {
          this.v = shapePool.newElement(), this.v.c = true, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t3, this.comp = t3.comp, this.frameId = -1, this.d = e2.d, this.initDynamicPropertyContainer(t3), this.p = PropertyFactory.getProp(t3, e2.p, 1, 0, this), this.s = PropertyFactory.getProp(t3, e2.s, 1, 0, this), this.r = PropertyFactory.getProp(t3, e2.r, 0, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertRectToPath());
        }
        return t2.prototype = { convertRectToPath: function() {
          var t3 = this.p.v[0], e2 = this.p.v[1], r2 = this.s.v[0] / 2, i2 = this.s.v[1] / 2, a2 = bmMin(r2, i2, this.r.v), s2 = a2 * (1 - roundCorner);
          this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t3 + r2, e2 - i2 + a2, t3 + r2, e2 - i2 + a2, t3 + r2, e2 - i2 + s2, 0, true), this.v.setTripleAt(t3 + r2, e2 + i2 - a2, t3 + r2, e2 + i2 - s2, t3 + r2, e2 + i2 - a2, 1, true), 0 !== a2 ? (this.v.setTripleAt(t3 + r2 - a2, e2 + i2, t3 + r2 - a2, e2 + i2, t3 + r2 - s2, e2 + i2, 2, true), this.v.setTripleAt(t3 - r2 + a2, e2 + i2, t3 - r2 + s2, e2 + i2, t3 - r2 + a2, e2 + i2, 3, true), this.v.setTripleAt(t3 - r2, e2 + i2 - a2, t3 - r2, e2 + i2 - a2, t3 - r2, e2 + i2 - s2, 4, true), this.v.setTripleAt(t3 - r2, e2 - i2 + a2, t3 - r2, e2 - i2 + s2, t3 - r2, e2 - i2 + a2, 5, true), this.v.setTripleAt(t3 - r2 + a2, e2 - i2, t3 - r2 + a2, e2 - i2, t3 - r2 + s2, e2 - i2, 6, true), this.v.setTripleAt(t3 + r2 - a2, e2 - i2, t3 + r2 - s2, e2 - i2, t3 + r2 - a2, e2 - i2, 7, true)) : (this.v.setTripleAt(t3 - r2, e2 + i2, t3 - r2 + s2, e2 + i2, t3 - r2, e2 + i2, 2), this.v.setTripleAt(t3 - r2, e2 - i2, t3 - r2, e2 - i2 + s2, t3 - r2, e2 - i2, 3))) : (this.v.setTripleAt(t3 + r2, e2 - i2 + a2, t3 + r2, e2 - i2 + s2, t3 + r2, e2 - i2 + a2, 0, true), 0 !== a2 ? (this.v.setTripleAt(t3 + r2 - a2, e2 - i2, t3 + r2 - a2, e2 - i2, t3 + r2 - s2, e2 - i2, 1, true), this.v.setTripleAt(t3 - r2 + a2, e2 - i2, t3 - r2 + s2, e2 - i2, t3 - r2 + a2, e2 - i2, 2, true), this.v.setTripleAt(t3 - r2, e2 - i2 + a2, t3 - r2, e2 - i2 + a2, t3 - r2, e2 - i2 + s2, 3, true), this.v.setTripleAt(t3 - r2, e2 + i2 - a2, t3 - r2, e2 + i2 - s2, t3 - r2, e2 + i2 - a2, 4, true), this.v.setTripleAt(t3 - r2 + a2, e2 + i2, t3 - r2 + a2, e2 + i2, t3 - r2 + s2, e2 + i2, 5, true), this.v.setTripleAt(t3 + r2 - a2, e2 + i2, t3 + r2 - s2, e2 + i2, t3 + r2 - a2, e2 + i2, 6, true), this.v.setTripleAt(t3 + r2, e2 + i2 - a2, t3 + r2, e2 + i2 - a2, t3 + r2, e2 + i2 - s2, 7, true)) : (this.v.setTripleAt(t3 - r2, e2 - i2, t3 - r2 + s2, e2 - i2, t3 - r2, e2 - i2, 1, true), this.v.setTripleAt(t3 - r2, e2 + i2, t3 - r2, e2 + i2 - s2, t3 - r2, e2 + i2, 2, true), this.v.setTripleAt(t3 + r2, e2 + i2, t3 + r2 - s2, e2 + i2, t3 + r2, e2 + i2, 3, true)));
        }, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
        }, reset: r }, extendPrototype([DynamicPropertyContainer], t2), t2;
      }();
      var f = { getShapeProp: function(t2, e2, r2) {
        var i2;
        return 3 === r2 || 4 === r2 ? i2 = (3 === r2 ? e2.pt : e2.ks).k.length ? new o(t2, e2, r2) : new s(t2, e2, r2) : 5 === r2 ? i2 = new p(t2, e2) : 6 === r2 ? i2 = new h(t2, e2) : 7 === r2 && (i2 = new l(t2, e2)), i2.k && t2.addDynamicProperty(i2), i2;
      }, getConstructorFunction: function() {
        return s;
      }, getKeyframedConstructorFunction: function() {
        return o;
      } };
      return f;
    }(), Matrix = /* @__PURE__ */ function() {
      var t = Math.cos, e = Math.sin, r = Math.tan, i = Math.round;
      function a() {
        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
      }
      function s(r2) {
        if (0 === r2)
          return this;
        var i2 = t(r2), a2 = e(r2);
        return this._t(i2, -a2, 0, 0, a2, i2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function n(r2) {
        if (0 === r2)
          return this;
        var i2 = t(r2), a2 = e(r2);
        return this._t(1, 0, 0, 0, 0, i2, -a2, 0, 0, a2, i2, 0, 0, 0, 0, 1);
      }
      function o(r2) {
        if (0 === r2)
          return this;
        var i2 = t(r2), a2 = e(r2);
        return this._t(i2, 0, a2, 0, 0, 1, 0, 0, -a2, 0, i2, 0, 0, 0, 0, 1);
      }
      function h(r2) {
        if (0 === r2)
          return this;
        var i2 = t(r2), a2 = e(r2);
        return this._t(i2, -a2, 0, 0, a2, i2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function l(t2, e2) {
        return this._t(1, e2, t2, 1, 0, 0);
      }
      function p(t2, e2) {
        return this.shear(r(t2), r(e2));
      }
      function f(i2, a2) {
        var s2 = t(a2), n2 = e(a2);
        return this._t(s2, n2, 0, 0, -n2, s2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(i2), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s2, -n2, 0, 0, n2, s2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function c(t2, e2, r2) {
        return r2 || 0 === r2 || (r2 = 1), 1 === t2 && 1 === e2 && 1 === r2 ? this : this._t(t2, 0, 0, 0, 0, e2, 0, 0, 0, 0, r2, 0, 0, 0, 0, 1);
      }
      function m(t2, e2, r2, i2, a2, s2, n2, o2, h2, l2, p2, f2, c2, m2, d2, u2) {
        return this.props[0] = t2, this.props[1] = e2, this.props[2] = r2, this.props[3] = i2, this.props[4] = a2, this.props[5] = s2, this.props[6] = n2, this.props[7] = o2, this.props[8] = h2, this.props[9] = l2, this.props[10] = p2, this.props[11] = f2, this.props[12] = c2, this.props[13] = m2, this.props[14] = d2, this.props[15] = u2, this;
      }
      function d(t2, e2, r2) {
        return r2 = r2 || 0, 0 !== t2 || 0 !== e2 || 0 !== r2 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t2, e2, r2, 1) : this;
      }
      function u(t2, e2, r2, i2, a2, s2, n2, o2, h2, l2, p2, f2, c2, m2, d2, u2) {
        var y2 = this.props;
        if (1 === t2 && 0 === e2 && 0 === r2 && 0 === i2 && 0 === a2 && 1 === s2 && 0 === n2 && 0 === o2 && 0 === h2 && 0 === l2 && 1 === p2 && 0 === f2)
          return y2[12] = y2[12] * t2 + y2[15] * c2, y2[13] = y2[13] * s2 + y2[15] * m2, y2[14] = y2[14] * p2 + y2[15] * d2, y2[15] *= u2, this._identityCalculated = false, this;
        var g2 = y2[0], v2 = y2[1], b2 = y2[2], x2 = y2[3], E2 = y2[4], S2 = y2[5], P2 = y2[6], C2 = y2[7], _2 = y2[8], k2 = y2[9], A2 = y2[10], T2 = y2[11], M2 = y2[12], w2 = y2[13], D2 = y2[14], F2 = y2[15];
        return y2[0] = g2 * t2 + v2 * a2 + b2 * h2 + x2 * c2, y2[1] = g2 * e2 + v2 * s2 + b2 * l2 + x2 * m2, y2[2] = g2 * r2 + v2 * n2 + b2 * p2 + x2 * d2, y2[3] = g2 * i2 + v2 * o2 + b2 * f2 + x2 * u2, y2[4] = E2 * t2 + S2 * a2 + P2 * h2 + C2 * c2, y2[5] = E2 * e2 + S2 * s2 + P2 * l2 + C2 * m2, y2[6] = E2 * r2 + S2 * n2 + P2 * p2 + C2 * d2, y2[7] = E2 * i2 + S2 * o2 + P2 * f2 + C2 * u2, y2[8] = _2 * t2 + k2 * a2 + A2 * h2 + T2 * c2, y2[9] = _2 * e2 + k2 * s2 + A2 * l2 + T2 * m2, y2[10] = _2 * r2 + k2 * n2 + A2 * p2 + T2 * d2, y2[11] = _2 * i2 + k2 * o2 + A2 * f2 + T2 * u2, y2[12] = M2 * t2 + w2 * a2 + D2 * h2 + F2 * c2, y2[13] = M2 * e2 + w2 * s2 + D2 * l2 + F2 * m2, y2[14] = M2 * r2 + w2 * n2 + D2 * p2 + F2 * d2, y2[15] = M2 * i2 + w2 * o2 + D2 * f2 + F2 * u2, this._identityCalculated = false, this;
      }
      function y(t2) {
        var e2 = t2.props;
        return this.transform(e2[0], e2[1], e2[2], e2[3], e2[4], e2[5], e2[6], e2[7], e2[8], e2[9], e2[10], e2[11], e2[12], e2[13], e2[14], e2[15]);
      }
      function g() {
        return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = true), this._identity;
      }
      function v(t2) {
        for (var e2 = 0; e2 < 16; ) {
          if (t2.props[e2] !== this.props[e2])
            return false;
          e2 += 1;
        }
        return true;
      }
      function b(t2) {
        var e2;
        for (e2 = 0; e2 < 16; e2 += 1)
          t2.props[e2] = this.props[e2];
        return t2;
      }
      function x(t2) {
        var e2;
        for (e2 = 0; e2 < 16; e2 += 1)
          this.props[e2] = t2[e2];
      }
      function E(t2, e2, r2) {
        return { x: t2 * this.props[0] + e2 * this.props[4] + r2 * this.props[8] + this.props[12], y: t2 * this.props[1] + e2 * this.props[5] + r2 * this.props[9] + this.props[13], z: t2 * this.props[2] + e2 * this.props[6] + r2 * this.props[10] + this.props[14] };
      }
      function S(t2, e2, r2) {
        return t2 * this.props[0] + e2 * this.props[4] + r2 * this.props[8] + this.props[12];
      }
      function P(t2, e2, r2) {
        return t2 * this.props[1] + e2 * this.props[5] + r2 * this.props[9] + this.props[13];
      }
      function C(t2, e2, r2) {
        return t2 * this.props[2] + e2 * this.props[6] + r2 * this.props[10] + this.props[14];
      }
      function _() {
        var t2 = this.props[0] * this.props[5] - this.props[1] * this.props[4], e2 = this.props[5] / t2, r2 = -this.props[1] / t2, i2 = -this.props[4] / t2, a2 = this.props[0] / t2, s2 = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t2, n2 = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t2, o2 = new Matrix();
        return o2.props[0] = e2, o2.props[1] = r2, o2.props[4] = i2, o2.props[5] = a2, o2.props[12] = s2, o2.props[13] = n2, o2;
      }
      function k(t2) {
        return this.getInverseMatrix().applyToPointArray(t2[0], t2[1], t2[2] || 0);
      }
      function A(t2) {
        var e2, r2 = t2.length, i2 = [];
        for (e2 = 0; e2 < r2; e2 += 1)
          i2[e2] = k(t2[e2]);
        return i2;
      }
      function T(t2, e2, r2) {
        var i2 = createTypedArray("float32", 6);
        if (this.isIdentity())
          i2[0] = t2[0], i2[1] = t2[1], i2[2] = e2[0], i2[3] = e2[1], i2[4] = r2[0], i2[5] = r2[1];
        else {
          var a2 = this.props[0], s2 = this.props[1], n2 = this.props[4], o2 = this.props[5], h2 = this.props[12], l2 = this.props[13];
          i2[0] = t2[0] * a2 + t2[1] * n2 + h2, i2[1] = t2[0] * s2 + t2[1] * o2 + l2, i2[2] = e2[0] * a2 + e2[1] * n2 + h2, i2[3] = e2[0] * s2 + e2[1] * o2 + l2, i2[4] = r2[0] * a2 + r2[1] * n2 + h2, i2[5] = r2[0] * s2 + r2[1] * o2 + l2;
        }
        return i2;
      }
      function M(t2, e2, r2) {
        return this.isIdentity() ? [t2, e2, r2] : [t2 * this.props[0] + e2 * this.props[4] + r2 * this.props[8] + this.props[12], t2 * this.props[1] + e2 * this.props[5] + r2 * this.props[9] + this.props[13], t2 * this.props[2] + e2 * this.props[6] + r2 * this.props[10] + this.props[14]];
      }
      function w(t2, e2) {
        if (this.isIdentity())
          return t2 + "," + e2;
        var r2 = this.props;
        return Math.round(100 * (t2 * r2[0] + e2 * r2[4] + r2[12])) / 100 + "," + Math.round(100 * (t2 * r2[1] + e2 * r2[5] + r2[13])) / 100;
      }
      function D() {
        for (var t2 = 0, e2 = this.props, r2 = "matrix3d("; t2 < 16; )
          r2 += i(1e4 * e2[t2]) / 1e4, r2 += 15 === t2 ? ")" : ",", t2 += 1;
        return r2;
      }
      function F(t2) {
        return t2 < 1e-6 && t2 > 0 || t2 > -1e-6 && t2 < 0 ? i(1e4 * t2) / 1e4 : t2;
      }
      function I() {
        var t2 = this.props;
        return "matrix(" + F(t2[0]) + "," + F(t2[1]) + "," + F(t2[4]) + "," + F(t2[5]) + "," + F(t2[12]) + "," + F(t2[13]) + ")";
      }
      return function() {
        this.reset = a, this.rotate = s, this.rotateX = n, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = f, this.shear = l, this.scale = c, this.setTransform = m, this.translate = d, this.transform = u, this.multiply = y, this.applyToPoint = E, this.applyToX = S, this.applyToY = P, this.applyToZ = C, this.applyToPointArray = M, this.applyToTriplePoints = T, this.applyToPointStringified = w, this.toCSS = D, this.to2dCSS = I, this.clone = b, this.cloneFromProps = x, this.equals = v, this.inversePoints = A, this.inversePoint = k, this.getInverseMatrix = _, this._t = this.transform, this.isIdentity = g, this._identity = true, this._identityCalculated = false, this.props = createTypedArray("float32", 16), this.reset();
      };
    }();
    function _typeof$3(t) {
      return (_typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
        return typeof t2;
      } : function(t2) {
        return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
      })(t);
    }
    var lottie = {}, standalone = "__[STANDALONE]__", animationData = "__[ANIMATIONDATA]__", renderer = "";
    function setLocation(t) {
      setLocationHref(t);
    }
    function searchAnimations() {
      true === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations();
    }
    function setSubframeRendering(t) {
      setSubframeEnabled(t);
    }
    function setPrefix(t) {
      setIdPrefix(t);
    }
    function loadAnimation(t) {
      return true === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t);
    }
    function setQuality(t) {
      if ("string" == typeof t)
        switch (t) {
          case "high":
            setDefaultCurveSegments(200);
            break;
          default:
          case "medium":
            setDefaultCurveSegments(50);
            break;
          case "low":
            setDefaultCurveSegments(10);
        }
      else
        !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
      getDefaultCurveSegments() >= 50 ? roundValues(false) : roundValues(true);
    }
    function inBrowser() {
      return "undefined" != typeof navigator;
    }
    function installPlugin(t, e) {
      "expressions" === t && setExpressionsPlugin(e);
    }
    function getFactory(t) {
      switch (t) {
        case "propertyFactory":
          return PropertyFactory;
        case "shapePropertyFactory":
          return ShapePropertyFactory;
        case "matrix":
          return Matrix;
        default:
          return null;
      }
    }
    function checkReady() {
      "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations());
    }
    function getQueryVariable(t) {
      for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
        var i = e[r].split("=");
        if (decodeURIComponent(i[0]) == t)
          return decodeURIComponent(i[1]);
      }
      return null;
    }
    lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
    var queryString = "";
    if (standalone) {
      var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || { src: "" };
      queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer");
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    try {
      "object" !== _typeof$3(exports) && (window.bodymovin = lottie);
    } catch (t) {
    }
    var ShapeModifiers = function() {
      var t = {}, e = {};
      return t.registerModifier = function(t2, r) {
        e[t2] || (e[t2] = r);
      }, t.getModifier = function(t2, r, i) {
        return new e[t2](r, i);
      }, t;
    }();
    function ShapeModifier() {
    }
    function TrimModifier() {
    }
    function PuckerAndBloatModifier() {
    }
    ShapeModifier.prototype.initModifierProperties = function() {
    }, ShapeModifier.prototype.addShapeToModifier = function() {
    }, ShapeModifier.prototype.addShape = function(t) {
      if (!this.closed) {
        t.sh.container.addDynamicProperty(t.sh);
        var e = { shape: t.sh, data: t, localShapeCollection: shapeCollectionPool.newShapeCollection() };
        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
      }
    }, ShapeModifier.prototype.init = function(t, e) {
      this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = false, this.k = false, this.dynamicProperties.length ? this.k = true : this.getValue(true);
    }, ShapeModifier.prototype.processKeys = function() {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
    }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
      this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this), this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
    }, TrimModifier.prototype.addShapeToModifier = function(t) {
      t.pathsData = [];
    }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, a) {
      var s = [];
      e <= 1 ? s.push({ s: t, e }) : t >= 1 ? s.push({ s: t - 1, e: e - 1 }) : (s.push({ s: t, e: 1 }), s.push({ s: 0, e: e - 1 }));
      var n, o, h = [], l = s.length;
      for (n = 0; n < l; n += 1) {
        var p, f;
        if (!((o = s[n]).e * a < i || o.s * a > i + r))
          p = o.s * a <= i ? 0 : (o.s * a - i) / r, f = o.e * a >= i + r ? 1 : (o.e * a - i) / r, h.push([p, f]);
      }
      return h.length || h.push([0, 0]), h;
    }, TrimModifier.prototype.releasePathsData = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1)
        segmentsLengthPool.release(t[e]);
      return t.length = 0, t;
    }, TrimModifier.prototype.processShapes = function(t) {
      var e, r, i, a;
      if (this._mdf || t) {
        var s = this.o.v % 360 / 360;
        if (s < 0 && (s += 1), (e = this.s.v > 1 ? 1 + s : this.s.v < 0 ? 0 + s : this.s.v + s) > (r = this.e.v > 1 ? 1 + s : this.e.v < 0 ? 0 + s : this.e.v + s)) {
          var n = e;
          e = r, r = n;
        }
        e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r;
      } else
        e = this.sValue, r = this.eValue;
      var o, h, l, p, f, c = this.shapes.length, m = 0;
      if (r === e)
        for (a = 0; a < c; a += 1)
          this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = true, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
      else if (1 === r && 0 === e || 0 === r && 1 === e) {
        if (this._mdf)
          for (a = 0; a < c; a += 1)
            this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = true;
      } else {
        var d, u, y = [];
        for (a = 0; a < c; a += 1)
          if ((d = this.shapes[a]).shape._mdf || this._mdf || t || 2 === this.m) {
            if (h = (i = d.shape.paths)._length, f = 0, !d.shape._mdf && d.pathsData.length)
              f = d.totalShapeLength;
            else {
              for (l = this.releasePathsData(d.pathsData), o = 0; o < h; o += 1)
                p = bez.getSegmentsLength(i.shapes[o]), l.push(p), f += p.totalLength;
              d.totalShapeLength = f, d.pathsData = l;
            }
            m += f, d.shape._mdf = true;
          } else
            d.shape.paths = d.localShapeCollection;
        var g, v = e, b = r, x = 0;
        for (a = c - 1; a >= 0; a -= 1)
          if ((d = this.shapes[a]).shape._mdf) {
            for ((u = d.localShapeCollection).releaseShapes(), 2 === this.m && c > 1 ? (g = this.calculateShapeEdges(e, r, d.totalShapeLength, x, m), x += d.totalShapeLength) : g = [[v, b]], h = g.length, o = 0; o < h; o += 1) {
              v = g[o][0], b = g[o][1], y.length = 0, b <= 1 ? y.push({ s: d.totalShapeLength * v, e: d.totalShapeLength * b }) : v >= 1 ? y.push({ s: d.totalShapeLength * (v - 1), e: d.totalShapeLength * (b - 1) }) : (y.push({ s: d.totalShapeLength * v, e: d.totalShapeLength }), y.push({ s: 0, e: d.totalShapeLength * (b - 1) }));
              var E = this.addShapes(d, y[0]);
              if (y[0].s !== y[0].e) {
                if (y.length > 1)
                  if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                    var S = E.pop();
                    this.addPaths(E, u), E = this.addShapes(d, y[1], S);
                  } else
                    this.addPaths(E, u), E = this.addShapes(d, y[1]);
                this.addPaths(E, u);
              }
            }
            d.shape.paths = u;
          }
      }
    }, TrimModifier.prototype.addPaths = function(t, e) {
      var r, i = t.length;
      for (r = 0; r < i; r += 1)
        e.addShape(t[r]);
    }, TrimModifier.prototype.addSegment = function(t, e, r, i, a, s, n) {
      a.setXYAt(e[0], e[1], "o", s), a.setXYAt(r[0], r[1], "i", s + 1), n && a.setXYAt(t[0], t[1], "v", s), a.setXYAt(i[0], i[1], "v", s + 1);
    }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
      e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1);
    }, TrimModifier.prototype.addShapes = function(t, e, r) {
      var i, a, s, n, o, h, l, p, f = t.pathsData, c = t.shape.paths.shapes, m = t.shape.paths._length, d = 0, u = [], y = true;
      for (r ? (o = r._length, p = r._length) : (r = shapePool.newElement(), o = 0, p = 0), u.push(r), i = 0; i < m; i += 1) {
        for (h = f[i].lengths, r.c = c[i].c, s = c[i].c ? h.length : h.length + 1, a = 1; a < s; a += 1)
          if (d + (n = h[a - 1]).addedLength < e.s)
            d += n.addedLength, r.c = false;
          else {
            if (d > e.e) {
              r.c = false;
              break;
            }
            e.s <= d && e.e >= d + n.addedLength ? (this.addSegment(c[i].v[a - 1], c[i].o[a - 1], c[i].i[a], c[i].v[a], r, o, y), y = false) : (l = bez.getNewSegment(c[i].v[a - 1], c[i].v[a], c[i].o[a - 1], c[i].i[a], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, h[a - 1]), this.addSegmentFromArray(l, r, o, y), y = false, r.c = false), d += n.addedLength, o += 1;
          }
        if (c[i].c && h.length) {
          if (n = h[a - 1], d <= e.e) {
            var g = h[a - 1].addedLength;
            e.s <= d && e.e >= d + g ? (this.addSegment(c[i].v[a - 1], c[i].o[a - 1], c[i].i[0], c[i].v[0], r, o, y), y = false) : (l = bez.getNewSegment(c[i].v[a - 1], c[i].v[0], c[i].o[a - 1], c[i].i[0], (e.s - d) / g, (e.e - d) / g, h[a - 1]), this.addSegmentFromArray(l, r, o, y), y = false, r.c = false);
          } else
            r.c = false;
          d += n.addedLength, o += 1;
        }
        if (r._length && (r.setXYAt(r.v[p][0], r.v[p][1], "i", p), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > e.e)
          break;
        i < m - 1 && (r = shapePool.newElement(), y = true, u.push(r), o = 0);
      }
      return u;
    }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
    }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
      var r = e / 100, i = [0, 0], a = t._length, s = 0;
      for (s = 0; s < a; s += 1)
        i[0] += t.v[s][0], i[1] += t.v[s][1];
      i[0] /= a, i[1] /= a;
      var n, o, h, l, p, f, c = shapePool.newElement();
      for (c.c = t.c, s = 0; s < a; s += 1)
        n = t.v[s][0] + (i[0] - t.v[s][0]) * r, o = t.v[s][1] + (i[1] - t.v[s][1]) * r, h = t.o[s][0] + (i[0] - t.o[s][0]) * -r, l = t.o[s][1] + (i[1] - t.o[s][1]) * -r, p = t.i[s][0] + (i[0] - t.i[s][0]) * -r, f = t.i[s][1] + (i[1] - t.i[s][1]) * -r, c.setTripleAt(n, o, h, l, p, f, s);
      return c;
    }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
      var e, r, i, a, s, n, o = this.shapes.length, h = this.amount.v;
      if (0 !== h)
        for (r = 0; r < o; r += 1) {
          if (n = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
            for (n.releaseShapes(), s.shape._mdf = true, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1)
              n.addShape(this.processPath(e[i], h));
          s.shape.paths = s.localShapeCollection;
        }
      this.dynamicProperties.length || (this._mdf = false);
    };
    var TransformPropertyFactory = function() {
      var t = [0, 0];
      function e(t2, e2, r) {
        if (this.elem = t2, this.frameId = -1, this.propType = "transform", this.data = e2, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t2), e2.p && e2.p.s ? (this.px = PropertyFactory.getProp(t2, e2.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t2, e2.p.y, 0, 0, this), e2.p.z && (this.pz = PropertyFactory.getProp(t2, e2.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t2, e2.p || { k: [0, 0, 0] }, 1, 0, this), e2.rx) {
          if (this.rx = PropertyFactory.getProp(t2, e2.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t2, e2.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t2, e2.rz, 0, degToRads, this), e2.or.k[0].ti) {
            var i, a = e2.or.k.length;
            for (i = 0; i < a; i += 1)
              e2.or.k[i].to = null, e2.or.k[i].ti = null;
          }
          this.or = PropertyFactory.getProp(t2, e2.or, 1, degToRads, this), this.or.sh = true;
        } else
          this.r = PropertyFactory.getProp(t2, e2.r || { k: 0 }, 0, degToRads, this);
        e2.sk && (this.sk = PropertyFactory.getProp(t2, e2.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t2, e2.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t2, e2.a || { k: [0, 0, 0] }, 1, 0, this), this.s = PropertyFactory.getProp(t2, e2.s || { k: [100, 100, 100] }, 1, 0.01, this), e2.o ? this.o = PropertyFactory.getProp(t2, e2.o, 0, 0.01, t2) : this.o = { _mdf: false, v: 1 }, this._isDirty = true, this.dynamicProperties.length || this.getValue(true);
      }
      return e.prototype = { applyToMatrix: function(t2) {
        var e2 = this._mdf;
        this.iterateDynamicProperties(), this._mdf = this._mdf || e2, this.a && t2.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t2.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t2.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t2.rotate(-this.r.v) : t2.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t2.translate(this.px.v, this.py.v, -this.pz.v) : t2.translate(this.px.v, this.py.v, 0) : t2.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }, getValue: function(e2) {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (this._isDirty && (this.precalculateMatrix(), this._isDirty = false), this.iterateDynamicProperties(), this._mdf || e2) {
            var r;
            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
              var i, a;
              if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime)
                this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / r, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / r, 0)) : (i = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / r, this.p.offsetTime));
              else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                i = [], a = [];
                var s = this.px, n = this.py;
                s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (i[0] = s.getValueAtTime((s.keyframes[0].t + 0.01) / r, 0), i[1] = n.getValueAtTime((n.keyframes[0].t + 0.01) / r, 0), a[0] = s.getValueAtTime(s.keyframes[0].t / r, 0), a[1] = n.getValueAtTime(n.keyframes[0].t / r, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (i[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / r, 0), i[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / r, 0), a[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - 0.01) / r, 0), a[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - 0.01) / r, 0)) : (i = [s.pv, n.pv], a[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - 0.01) / r, s.offsetTime), a[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - 0.01) / r, n.offsetTime));
              } else
                i = a = t;
              this.v.rotate(-Math.atan2(i[1] - a[1], i[0] - a[0]));
            }
            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }
          this.frameId = this.elem.globalData.frameId;
        }
      }, precalculateMatrix: function() {
        if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
          if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
            if (this.sk.effectsSequence.length || this.sa.effectsSequence.length)
              return;
            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
          }
          this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
        }
      }, autoOrient: function() {
      } }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t2) {
        this._addDynamicProperty(t2), this.elem.addDynamicProperty(t2), this._isDirty = true;
      }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, { getTransformProperty: function(t2, r, i) {
        return new e(t2, r, i);
      } };
    }();
    function RepeaterModifier() {
    }
    function RoundCornersModifier() {
    }
    function floatEqual(t, e) {
      return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e));
    }
    function floatZero(t) {
      return Math.abs(t) <= 1e-5;
    }
    function lerp(t, e, r) {
      return t * (1 - r) + e * r;
    }
    function lerpPoint(t, e, r) {
      return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)];
    }
    function quadRoots(t, e, r) {
      if (0 === t)
        return [];
      var i = e * e - 4 * t * r;
      if (i < 0)
        return [];
      var a = -e / (2 * t);
      if (0 === i)
        return [a];
      var s = Math.sqrt(i) / (2 * t);
      return [a - s, a + s];
    }
    function polynomialCoefficients(t, e, r, i) {
      return [3 * e - t - 3 * r + i, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t];
    }
    function singlePoint(t) {
      return new PolynomialBezier(t, t, t, t, false);
    }
    function PolynomialBezier(t, e, r, i, a) {
      a && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)), a && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
      var s = polynomialCoefficients(t[0], e[0], r[0], i[0]), n = polynomialCoefficients(t[1], e[1], r[1], i[1]);
      this.a = [s[0], n[0]], this.b = [s[1], n[1]], this.c = [s[2], n[2]], this.d = [s[3], n[3]], this.points = [t, e, r, i];
    }
    function extrema(t, e) {
      var r = t.points[0][e], i = t.points[t.points.length - 1][e];
      if (r > i) {
        var a = i;
        i = r, r = a;
      }
      for (var s = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < s.length; n += 1)
        if (s[n] > 0 && s[n] < 1) {
          var o = t.point(s[n])[e];
          o < r ? r = o : o > i && (i = o);
        }
      return { min: r, max: i };
    }
    function intersectData(t, e, r) {
      var i = t.boundingBox();
      return { cx: i.cx, cy: i.cy, width: i.width, height: i.height, bez: t, t: (e + r) / 2, t1: e, t2: r };
    }
    function splitData(t) {
      var e = t.bez.split(0.5);
      return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)];
    }
    function boxIntersect(t, e) {
      return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height;
    }
    function intersectsImpl(t, e, r, i, a, s) {
      if (boxIntersect(t, e))
        if (r >= s || t.width <= i && t.height <= i && e.width <= i && e.height <= i)
          a.push([t.t, e.t]);
        else {
          var n = splitData(t), o = splitData(e);
          intersectsImpl(n[0], o[0], r + 1, i, a, s), intersectsImpl(n[0], o[1], r + 1, i, a, s), intersectsImpl(n[1], o[0], r + 1, i, a, s), intersectsImpl(n[1], o[1], r + 1, i, a, s);
        }
    }
    function crossProduct(t, e) {
      return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
    }
    function lineIntersection(t, e, r, i) {
      var a = [t[0], t[1], 1], s = [e[0], e[1], 1], n = [r[0], r[1], 1], o = [i[0], i[1], 1], h = crossProduct(crossProduct(a, s), crossProduct(n, o));
      return floatZero(h[2]) ? null : [h[0] / h[2], h[1] / h[2]];
    }
    function polarOffset(t, e, r) {
      return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r];
    }
    function pointDistance(t, e) {
      return Math.hypot(t[0] - e[0], t[1] - e[1]);
    }
    function pointEqual(t, e) {
      return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1]);
    }
    function ZigZagModifier() {
    }
    function setPoint(t, e, r, i, a, s, n) {
      var o = r - Math.PI / 2, h = r + Math.PI / 2, l = e[0] + Math.cos(r) * i * a, p = e[1] - Math.sin(r) * i * a;
      t.setTripleAt(l, p, l + Math.cos(o) * s, p - Math.sin(o) * s, l + Math.cos(h) * n, p - Math.sin(h) * n, t.length());
    }
    function getPerpendicularVector(t, e) {
      var r = [e[0] - t[0], e[1] - t[1]], i = 0.5 * -Math.PI;
      return [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]];
    }
    function getProjectingAngle(t, e) {
      var r = 0 === e ? t.length() - 1 : e - 1, i = (e + 1) % t.length(), a = getPerpendicularVector(t.v[r], t.v[i]);
      return Math.atan2(0, 1) - Math.atan2(a[1], a[0]);
    }
    function zigZagCorner(t, e, r, i, a, s, n) {
      var o = getProjectingAngle(e, r), h = e.v[r % e._length], l = e.v[0 === r ? e._length - 1 : r - 1], p = e.v[(r + 1) % e._length], f = 2 === s ? Math.sqrt(Math.pow(h[0] - l[0], 2) + Math.pow(h[1] - l[1], 2)) : 0, c = 2 === s ? Math.sqrt(Math.pow(h[0] - p[0], 2) + Math.pow(h[1] - p[1], 2)) : 0;
      setPoint(t, e.v[r % e._length], o, n, i, c / (2 * (a + 1)), f / (2 * (a + 1)), s);
    }
    function zigZagSegment(t, e, r, i, a, s) {
      for (var n = 0; n < i; n += 1) {
        var o = (n + 1) / (i + 1), h = 2 === a ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, l = e.normalAngle(o);
        setPoint(t, e.point(o), l, s, r, h / (2 * (i + 1)), h / (2 * (i + 1)), a), s = -s;
      }
      return s;
    }
    function linearOffset(t, e, r) {
      var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
      return [polarOffset(t, i, r), polarOffset(e, i, r)];
    }
    function offsetSegment(t, e) {
      var r, i, a, s, n, o, h;
      r = (h = linearOffset(t.points[0], t.points[1], e))[0], i = h[1], a = (h = linearOffset(t.points[1], t.points[2], e))[0], s = h[1], n = (h = linearOffset(t.points[2], t.points[3], e))[0], o = h[1];
      var l = lineIntersection(r, i, a, s);
      null === l && (l = i);
      var p = lineIntersection(n, o, a, s);
      return null === p && (p = n), new PolynomialBezier(r, l, p, o);
    }
    function joinLines(t, e, r, i, a) {
      var s = e.points[3], n = r.points[0];
      if (3 === i)
        return s;
      if (pointEqual(s, n))
        return s;
      if (2 === i) {
        var o = -e.tangentAngle(1), h = -r.tangentAngle(0) + Math.PI, l = lineIntersection(s, polarOffset(s, o + Math.PI / 2, 100), n, polarOffset(n, o + Math.PI / 2, 100)), p = l ? pointDistance(l, s) : pointDistance(s, n) / 2, f = polarOffset(s, o, 2 * p * roundCorner);
        return t.setXYAt(f[0], f[1], "o", t.length() - 1), f = polarOffset(n, h, 2 * p * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], f[0], f[1], t.length()), n;
      }
      var c = lineIntersection(pointEqual(s, e.points[2]) ? e.points[0] : e.points[2], s, n, pointEqual(n, r.points[1]) ? r.points[3] : r.points[1]);
      return c && pointDistance(c, s) < a ? (t.setTripleAt(c[0], c[1], c[0], c[1], c[0], c[1], t.length()), c) : s;
    }
    function getIntersection(t, e) {
      var r = t.intersections(e);
      return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null;
    }
    function pruneSegmentIntersection(t, e) {
      var r = t.slice(), i = e.slice(), a = getIntersection(t[t.length - 1], e[0]);
      return a && (r[t.length - 1] = t[t.length - 1].split(a[0])[0], i[0] = e[0].split(a[1])[1]), t.length > 1 && e.length > 1 && (a = getIntersection(t[0], e[e.length - 1])) ? [[t[0].split(a[0])[0]], [e[e.length - 1].split(a[1])[1]]] : [r, i];
    }
    function pruneIntersections(t) {
      for (var e, r = 1; r < t.length; r += 1)
        e = pruneSegmentIntersection(t[r - 1], t[r]), t[r - 1] = e[0], t[r] = e[1];
      return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
    }
    function offsetSegmentSplit(t, e) {
      var r, i, a, s, n = t.inflectionPoints();
      if (0 === n.length)
        return [offsetSegment(t, e)];
      if (1 === n.length || floatEqual(n[1], 1))
        return r = (a = t.split(n[0]))[0], i = a[1], [offsetSegment(r, e), offsetSegment(i, e)];
      r = (a = t.split(n[0]))[0];
      var o = (n[1] - n[0]) / (1 - n[0]);
      return s = (a = a[1].split(o))[0], i = a[1], [offsetSegment(r, e), offsetSegment(s, e), offsetSegment(i, e)];
    }
    function OffsetPathModifier() {
    }
    function getFontProperties(t) {
      for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", a = e.length, s = 0; s < a; s += 1)
        switch (e[s].toLowerCase()) {
          case "italic":
            i = "italic";
            break;
          case "bold":
            r = "700";
            break;
          case "black":
            r = "900";
            break;
          case "medium":
            r = "500";
            break;
          case "regular":
          case "normal":
            r = "400";
            break;
          case "light":
          case "thin":
            r = "200";
        }
      return { style: i, weight: t.fWeight || r };
    }
    extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(true), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();
    }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, a, s) {
      var n = s ? -1 : 1, o = i.s.v[0] + (1 - i.s.v[0]) * (1 - a), h = i.s.v[1] + (1 - i.s.v[1]) * (1 - a);
      t.translate(i.p.v[0] * n * a, i.p.v[1] * n * a, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * a), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(s ? 1 / o : o, s ? 1 / h : h), r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
    }, RepeaterModifier.prototype.init = function(t, e, r, i) {
      for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0; )
        r -= 1, this._elements.unshift(e[r]);
      this.dynamicProperties.length ? this.k = true : this.getValue(true);
    }, RepeaterModifier.prototype.resetElements = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1)
        t[e]._processed = false, "gr" === t[e].ty && this.resetElements(t[e].it);
    }, RepeaterModifier.prototype.cloneElements = function(t) {
      var e = JSON.parse(JSON.stringify(t));
      return this.resetElements(e), e;
    }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
      var r, i = t.length;
      for (r = 0; r < i; r += 1)
        t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e);
    }, RepeaterModifier.prototype.processShapes = function(t) {
      var e, r, i, a, s, n = false;
      if (this._mdf || t) {
        var o, h = Math.ceil(this.c.v);
        if (this._groups.length < h) {
          for (; this._groups.length < h; ) {
            var l = { it: this.cloneElements(this._elements), ty: "gr" };
            l.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1;
          }
          this.elem.reloadShapes(), n = true;
        }
        for (s = 0, i = 0; i <= this._groups.length - 1; i += 1) {
          if (o = s < h, this._groups[i]._render = o, this.changeGroupRender(this._groups[i].it, o), !o) {
            var p = this.elemsData[i].it, f = p[p.length - 1];
            0 !== f.transform.op.v ? (f.transform.op._mdf = true, f.transform.op.v = 0) : f.transform.op._mdf = false;
          }
          s += 1;
        }
        this._currentCopies = h;
        var c = this.o.v, m = c % 1, d = c > 0 ? Math.floor(c) : Math.ceil(c), u = this.pMatrix.props, y = this.rMatrix.props, g = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var v, b, x = 0;
        if (c > 0) {
          for (; x < d; )
            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), x += 1;
          m && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, m, false), x += m);
        } else if (c < 0) {
          for (; x > d; )
            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true), x -= 1;
          m && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -m, true), x -= m);
        }
        for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, a = 1 === this.data.m ? 1 : -1, s = this._currentCopies; s; ) {
          if (b = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = true, e[e.length - 1].transform.op._mdf = true, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== x) {
            for ((0 !== i && 1 === a || i !== this._currentCopies - 1 && -1 === a) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), v = 0; v < b; v += 1)
              r[v] = this.matrix.props[v];
            this.matrix.reset();
          } else
            for (this.matrix.reset(), v = 0; v < b; v += 1)
              r[v] = this.matrix.props[v];
          x += 1, s -= 1, i += a;
        }
      } else
        for (s = this._currentCopies, i = 0, a = 1; s; )
          r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = false, e[e.length - 1].transform.op._mdf = false, s -= 1, i += a;
      return n;
    }, RepeaterModifier.prototype.addShape = function() {
    }, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
    }, RoundCornersModifier.prototype.processPath = function(t, e) {
      var r, i = shapePool.newElement();
      i.c = t.c;
      var a, s, n, o, h, l, p, f, c, m, d, u, y = t._length, g = 0;
      for (r = 0; r < y; r += 1)
        a = t.v[r], n = t.o[r], s = t.i[r], a[0] === n[0] && a[1] === n[1] && a[0] === s[0] && a[1] === s[1] ? 0 !== r && r !== y - 1 || t.c ? (o = 0 === r ? t.v[y - 1] : t.v[r - 1], l = (h = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = d = a[0] + (o[0] - a[0]) * l, f = u = a[1] - (a[1] - o[1]) * l, c = p - (p - a[0]) * roundCorner, m = f - (f - a[1]) * roundCorner, i.setTripleAt(p, f, c, m, d, u, g), g += 1, o = r === y - 1 ? t.v[0] : t.v[r + 1], l = (h = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = c = a[0] + (o[0] - a[0]) * l, f = m = a[1] + (o[1] - a[1]) * l, d = p - (p - a[0]) * roundCorner, u = f - (f - a[1]) * roundCorner, i.setTripleAt(p, f, c, m, d, u, g), g += 1) : (i.setTripleAt(a[0], a[1], n[0], n[1], s[0], s[1], g), g += 1) : (i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], g), g += 1);
      return i;
    }, RoundCornersModifier.prototype.processShapes = function(t) {
      var e, r, i, a, s, n, o = this.shapes.length, h = this.rd.v;
      if (0 !== h)
        for (r = 0; r < o; r += 1) {
          if (n = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
            for (n.releaseShapes(), s.shape._mdf = true, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1)
              n.addShape(this.processPath(e[i], h));
          s.shape.paths = s.localShapeCollection;
        }
      this.dynamicProperties.length || (this._mdf = false);
    }, PolynomialBezier.prototype.point = function(t) {
      return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]];
    }, PolynomialBezier.prototype.derivative = function(t) {
      return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]];
    }, PolynomialBezier.prototype.tangentAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[1], e[0]);
    }, PolynomialBezier.prototype.normalAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[0], e[1]);
    }, PolynomialBezier.prototype.inflectionPoints = function() {
      var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
      if (floatZero(t))
        return [];
      var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
      if (r < 0)
        return [];
      var i = Math.sqrt(r);
      return floatZero(i) ? i > 0 && i < 1 ? [e] : [] : [e - i, e + i].filter(function(t2) {
        return t2 > 0 && t2 < 1;
      });
    }, PolynomialBezier.prototype.split = function(t) {
      if (t <= 0)
        return [singlePoint(this.points[0]), this];
      if (t >= 1)
        return [this, singlePoint(this.points[this.points.length - 1])];
      var e = lerpPoint(this.points[0], this.points[1], t), r = lerpPoint(this.points[1], this.points[2], t), i = lerpPoint(this.points[2], this.points[3], t), a = lerpPoint(e, r, t), s = lerpPoint(r, i, t), n = lerpPoint(a, s, t);
      return [new PolynomialBezier(this.points[0], e, a, n, true), new PolynomialBezier(n, s, i, this.points[3], true)];
    }, PolynomialBezier.prototype.bounds = function() {
      return { x: extrema(this, 0), y: extrema(this, 1) };
    }, PolynomialBezier.prototype.boundingBox = function() {
      var t = this.bounds();
      return { left: t.x.min, right: t.x.max, top: t.y.min, bottom: t.y.max, width: t.x.max - t.x.min, height: t.y.max - t.y.min, cx: (t.x.max + t.x.min) / 2, cy: (t.y.max + t.y.min) / 2 };
    }, PolynomialBezier.prototype.intersections = function(t, e, r) {
      void 0 === e && (e = 2), void 0 === r && (r = 7);
      var i = [];
      return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, i, r), i;
    }, PolynomialBezier.shapeSegment = function(t, e) {
      var r = (e + 1) % t.length();
      return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], true);
    }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
      var r = (e + 1) % t.length();
      return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], true);
    }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length;
    }, ZigZagModifier.prototype.processPath = function(t, e, r, i) {
      var a = t._length, s = shapePool.newElement();
      if (s.c = t.c, t.c || (a -= 1), 0 === a)
        return s;
      var n = -1, o = PolynomialBezier.shapeSegment(t, 0);
      zigZagCorner(s, t, 0, e, r, i, n);
      for (var h = 0; h < a; h += 1)
        n = zigZagSegment(s, o, e, r, i, -n), o = h !== a - 1 || t.c ? PolynomialBezier.shapeSegment(t, (h + 1) % a) : null, zigZagCorner(s, t, h + 1, e, r, i, n);
      return s;
    }, ZigZagModifier.prototype.processShapes = function(t) {
      var e, r, i, a, s, n, o = this.shapes.length, h = this.amplitude.v, l = Math.max(0, Math.round(this.frequency.v)), p = this.pointsType.v;
      if (0 !== h)
        for (r = 0; r < o; r += 1) {
          if (n = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
            for (n.releaseShapes(), s.shape._mdf = true, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1)
              n.addShape(this.processPath(e[i], h, l, p));
          s.shape.paths = s.localShapeCollection;
        }
      this.dynamicProperties.length || (this._mdf = false);
    }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length;
    }, OffsetPathModifier.prototype.processPath = function(t, e, r, i) {
      var a = shapePool.newElement();
      a.c = t.c;
      var s, n, o, h = t.length();
      t.c || (h -= 1);
      var l = [];
      for (s = 0; s < h; s += 1)
        o = PolynomialBezier.shapeSegment(t, s), l.push(offsetSegmentSplit(o, e));
      if (!t.c)
        for (s = h - 1; s >= 0; s -= 1)
          o = PolynomialBezier.shapeSegmentInverted(t, s), l.push(offsetSegmentSplit(o, e));
      l = pruneIntersections(l);
      var p = null, f = null;
      for (s = 0; s < l.length; s += 1) {
        var c = l[s];
        for (f && (p = joinLines(a, f, c[0], r, i)), f = c[c.length - 1], n = 0; n < c.length; n += 1)
          o = c[n], p && pointEqual(o.points[0], p) ? a.setXYAt(o.points[1][0], o.points[1][1], "o", a.length() - 1) : a.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], a.length()), a.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], a.length()), p = o.points[3];
      }
      return l.length && joinLines(a, f, l[0][0], r, i), a;
    }, OffsetPathModifier.prototype.processShapes = function(t) {
      var e, r, i, a, s, n, o = this.shapes.length, h = this.amount.v, l = this.miterLimit.v, p = this.lineJoin;
      if (0 !== h)
        for (r = 0; r < o; r += 1) {
          if (n = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
            for (n.releaseShapes(), s.shape._mdf = true, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1)
              n.addShape(this.processPath(e[i], h, p, l));
          s.shape.paths = s.localShapeCollection;
        }
      this.dynamicProperties.length || (this._mdf = false);
    };
    var FontManager = function() {
      var t = { w: 0, size: 0, shapes: [], data: { shapes: [] } }, e = [];
      e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
      var r = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
      function i(t2, e2) {
        var r2 = createTag("span");
        r2.setAttribute("aria-hidden", true), r2.style.fontFamily = e2;
        var i2 = createTag("span");
        i2.innerText = "giItT1WQy@!-/#", r2.style.position = "absolute", r2.style.left = "-10000px", r2.style.top = "-10000px", r2.style.fontSize = "300px", r2.style.fontVariant = "normal", r2.style.fontStyle = "normal", r2.style.fontWeight = "normal", r2.style.letterSpacing = "0", r2.appendChild(i2), document.body.appendChild(r2);
        var a2 = i2.offsetWidth;
        return i2.style.fontFamily = function(t3) {
          var e3, r3 = t3.split(","), i3 = r3.length, a3 = [];
          for (e3 = 0; e3 < i3; e3 += 1)
            "sans-serif" !== r3[e3] && "monospace" !== r3[e3] && a3.push(r3[e3]);
          return a3.join(",");
        }(t2) + ", " + e2, { node: i2, w: a2, parent: r2 };
      }
      function a(t2, e2) {
        var r2, i2 = document.body && e2 ? "svg" : "canvas", a2 = getFontProperties(t2);
        if ("svg" === i2) {
          var s2 = createNS("text");
          s2.style.fontSize = "100px", s2.setAttribute("font-family", t2.fFamily), s2.setAttribute("font-style", a2.style), s2.setAttribute("font-weight", a2.weight), s2.textContent = "1", t2.fClass ? (s2.style.fontFamily = "inherit", s2.setAttribute("class", t2.fClass)) : s2.style.fontFamily = t2.fFamily, e2.appendChild(s2), r2 = s2;
        } else {
          var n2 = new OffscreenCanvas(500, 500).getContext("2d");
          n2.font = a2.style + " " + a2.weight + " 100px " + t2.fFamily, r2 = n2;
        }
        return { measureText: function(t3) {
          return "svg" === i2 ? (r2.textContent = t3, r2.getComputedTextLength()) : r2.measureText(t3).width;
        } };
      }
      function s(t2) {
        var e2 = 0, r2 = t2.charCodeAt(0);
        if (r2 >= 55296 && r2 <= 56319) {
          var i2 = t2.charCodeAt(1);
          i2 >= 56320 && i2 <= 57343 && (e2 = 1024 * (r2 - 55296) + i2 - 56320 + 65536);
        }
        return e2;
      }
      function n(t2) {
        var e2 = s(t2);
        return e2 >= 127462 && e2 <= 127487;
      }
      var o = function() {
        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = false, this._warned = false, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
      };
      return o.isModifier = function(t2, e2) {
        var i2 = t2.toString(16) + e2.toString(16);
        return -1 !== r.indexOf(i2);
      }, o.isZeroWidthJoiner = function(t2) {
        return 8205 === t2;
      }, o.isFlagEmoji = function(t2) {
        return n(t2.substr(0, 2)) && n(t2.substr(2, 2));
      }, o.isRegionalCode = n, o.isCombinedCharacter = function(t2) {
        return -1 !== e.indexOf(t2);
      }, o.isRegionalFlag = function(t2, e2) {
        var r2 = s(t2.substr(e2, 2));
        if (127988 !== r2)
          return false;
        var i2 = 0;
        for (e2 += 2; i2 < 5; ) {
          if ((r2 = s(t2.substr(e2, 2))) < 917601 || r2 > 917626)
            return false;
          i2 += 1, e2 += 2;
        }
        return 917631 === s(t2.substr(e2, 2));
      }, o.isVariationSelector = function(t2) {
        return 65039 === t2;
      }, o.BLACK_FLAG_CODE_POINT = 127988, o.prototype = { addChars: function(t2) {
        if (t2) {
          var e2;
          this.chars || (this.chars = []);
          var r2, i2, a2 = t2.length, s2 = this.chars.length;
          for (e2 = 0; e2 < a2; e2 += 1) {
            for (r2 = 0, i2 = false; r2 < s2; )
              this.chars[r2].style === t2[e2].style && this.chars[r2].fFamily === t2[e2].fFamily && this.chars[r2].ch === t2[e2].ch && (i2 = true), r2 += 1;
            i2 || (this.chars.push(t2[e2]), s2 += 1);
          }
        }
      }, addFonts: function(t2, e2) {
        if (t2) {
          if (this.chars)
            return this.isLoaded = true, void (this.fonts = t2.list);
          if (!document.body)
            return this.isLoaded = true, t2.list.forEach(function(t3) {
              t3.helper = a(t3), t3.cache = {};
            }), void (this.fonts = t2.list);
          var r2, s2 = t2.list, n2 = s2.length, o2 = n2;
          for (r2 = 0; r2 < n2; r2 += 1) {
            var h, l, p = true;
            if (s2[r2].loaded = false, s2[r2].monoCase = i(s2[r2].fFamily, "monospace"), s2[r2].sansCase = i(s2[r2].fFamily, "sans-serif"), s2[r2].fPath) {
              if ("p" === s2[r2].fOrigin || 3 === s2[r2].origin) {
                if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + s2[r2].fFamily + '"], style[f-origin="3"][f-family="' + s2[r2].fFamily + '"]')).length > 0 && (p = false), p) {
                  var f = createTag("style");
                  f.setAttribute("f-forigin", s2[r2].fOrigin), f.setAttribute("f-origin", s2[r2].origin), f.setAttribute("f-family", s2[r2].fFamily), f.type = "text/css", f.innerText = "@font-face {font-family: " + s2[r2].fFamily + "; font-style: normal; src: url('" + s2[r2].fPath + "');}", e2.appendChild(f);
                }
              } else if ("g" === s2[r2].fOrigin || 1 === s2[r2].origin) {
                for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1)
                  -1 !== h[l].href.indexOf(s2[r2].fPath) && (p = false);
                if (p) {
                  var c = createTag("link");
                  c.setAttribute("f-forigin", s2[r2].fOrigin), c.setAttribute("f-origin", s2[r2].origin), c.type = "text/css", c.rel = "stylesheet", c.href = s2[r2].fPath, document.body.appendChild(c);
                }
              } else if ("t" === s2[r2].fOrigin || 2 === s2[r2].origin) {
                for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1)
                  s2[r2].fPath === h[l].src && (p = false);
                if (p) {
                  var m = createTag("link");
                  m.setAttribute("f-forigin", s2[r2].fOrigin), m.setAttribute("f-origin", s2[r2].origin), m.setAttribute("rel", "stylesheet"), m.setAttribute("href", s2[r2].fPath), e2.appendChild(m);
                }
              }
            } else
              s2[r2].loaded = true, o2 -= 1;
            s2[r2].helper = a(s2[r2], e2), s2[r2].cache = {}, this.fonts.push(s2[r2]);
          }
          0 === o2 ? this.isLoaded = true : setTimeout(this.checkLoadedFonts.bind(this), 100);
        } else
          this.isLoaded = true;
      }, getCharData: function(e2, r2, i2) {
        for (var a2 = 0, s2 = this.chars.length; a2 < s2; ) {
          if (this.chars[a2].ch === e2 && this.chars[a2].style === r2 && this.chars[a2].fFamily === i2)
            return this.chars[a2];
          a2 += 1;
        }
        return ("string" == typeof e2 && 13 !== e2.charCodeAt(0) || !e2) && console && console.warn && !this._warned && (this._warned = true), t;
      }, getFontByName: function(t2) {
        for (var e2 = 0, r2 = this.fonts.length; e2 < r2; ) {
          if (this.fonts[e2].fName === t2)
            return this.fonts[e2];
          e2 += 1;
        }
        return this.fonts[0];
      }, measureText: function(t2, e2, r2) {
        var i2 = this.getFontByName(e2), a2 = t2;
        if (!i2.cache[a2]) {
          var s2 = i2.helper;
          if (" " === t2) {
            var n2 = s2.measureText("|" + t2 + "|"), o2 = s2.measureText("||");
            i2.cache[a2] = (n2 - o2) / 100;
          } else
            i2.cache[a2] = s2.measureText(t2) / 100;
        }
        return i2.cache[a2] * r2;
      }, checkLoadedFonts: function() {
        var t2, e2, r2, i2 = this.fonts.length, a2 = i2;
        for (t2 = 0; t2 < i2; t2 += 1)
          this.fonts[t2].loaded ? a2 -= 1 : "n" === this.fonts[t2].fOrigin || 0 === this.fonts[t2].origin ? this.fonts[t2].loaded = true : (e2 = this.fonts[t2].monoCase.node, r2 = this.fonts[t2].monoCase.w, e2.offsetWidth !== r2 ? (a2 -= 1, this.fonts[t2].loaded = true) : (e2 = this.fonts[t2].sansCase.node, r2 = this.fonts[t2].sansCase.w, e2.offsetWidth !== r2 && (a2 -= 1, this.fonts[t2].loaded = true)), this.fonts[t2].loaded && (this.fonts[t2].sansCase.parent.parentNode.removeChild(this.fonts[t2].sansCase.parent), this.fonts[t2].monoCase.parent.parentNode.removeChild(this.fonts[t2].monoCase.parent)));
        0 !== a2 && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
      }, setIsLoaded: function() {
        this.isLoaded = true;
      } }, o;
    }();
    function SlotManager(t) {
      this.animationData = t;
    }
    function slotFactory(t) {
      return new SlotManager(t);
    }
    function RenderableElement() {
    }
    SlotManager.prototype.getProp = function(t) {
      return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t;
    }, RenderableElement.prototype = { initRenderable: function() {
      this.isInRange = false, this.hidden = false, this.isTransparent = false, this.renderableComponents = [];
    }, addRenderableComponent: function(t) {
      -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t);
    }, removeRenderableComponent: function(t) {
      -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
    }, prepareRenderableFrame: function(t) {
      this.checkLayerLimits(t);
    }, checkTransparency: function() {
      this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = true, this.hide()) : this.isTransparent && (this.isTransparent = false, this.show());
    }, checkLayerLimits: function(t) {
      this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? true !== this.isInRange && (this.globalData._mdf = true, this._mdf = true, this.isInRange = true, this.show()) : false !== this.isInRange && (this.globalData._mdf = true, this.isInRange = false, this.hide());
    }, renderRenderable: function() {
      var t, e = this.renderableComponents.length;
      for (t = 0; t < e; t += 1)
        this.renderableComponents[t].renderFrame(this._isFirstFrame);
    }, sourceRectAtTime: function() {
      return { top: 0, left: 0, width: 100, height: 100 };
    }, getLayerSize: function() {
      return 5 === this.data.ty ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height };
    } };
    var getBlendMode = (blendModeEnums = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" }, function(t) {
      return blendModeEnums[t] || "";
    }), blendModeEnums;
    function SliderEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function AngleEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function ColorEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
    }
    function PointEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
    }
    function LayerIndexEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function MaskIndexEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function CheckboxEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function NoValueEffect() {
      this.p = {};
    }
    function EffectsManager(t, e) {
      var r, i = t.ef || [];
      this.effectElements = [];
      var a, s = i.length;
      for (r = 0; r < s; r += 1)
        a = new GroupEffect(i[r], e), this.effectElements.push(a);
    }
    function GroupEffect(t, e) {
      this.init(t, e);
    }
    function BaseElement() {
    }
    function FrameElement() {
    }
    function FootageElement(t, e, r) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r);
    }
    function AudioElement(t, e, r) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = false, this._canPlay = false;
      var i = this.globalData.getAssetsPath(this.assetData);
      this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : { k: [100] }, 1, 0.01, this);
    }
    function BaseRenderer() {
    }
    extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
      var r;
      this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
      var i, a = this.data.ef.length, s = this.data.ef;
      for (r = 0; r < a; r += 1) {
        switch (i = null, s[r].ty) {
          case 0:
            i = new SliderEffect(s[r], e, this);
            break;
          case 1:
            i = new AngleEffect(s[r], e, this);
            break;
          case 2:
            i = new ColorEffect(s[r], e, this);
            break;
          case 3:
            i = new PointEffect(s[r], e, this);
            break;
          case 4:
          case 7:
            i = new CheckboxEffect(s[r], e, this);
            break;
          case 10:
            i = new LayerIndexEffect(s[r], e, this);
            break;
          case 11:
            i = new MaskIndexEffect(s[r], e, this);
            break;
          case 5:
            i = new EffectsManager(s[r], e, this);
            break;
          default:
            i = new NoValueEffect(s[r], e, this);
        }
        i && this.effectElements.push(i);
      }
    }, BaseElement.prototype = { checkMasks: function() {
      if (!this.data.hasMask)
        return false;
      for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
        if ("n" !== this.data.masksProperties[t].mode && false !== this.data.masksProperties[t].cl)
          return true;
        t += 1;
      }
      return false;
    }, initExpressions: function() {
      var t = getExpressionInterfaces();
      if (t) {
        var e = t("layer"), r = t("effects"), i = t("shape"), a = t("text"), s = t("comp");
        this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
        var n = r.createEffectsInterface(this, this.layerInterface);
        this.layerInterface.registerEffectsInterface(n), 0 === this.data.ty || this.data.xt ? this.compInterface = s(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = i(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = a(this), this.layerInterface.text = this.layerInterface.textInterface);
      }
    }, setBlendMode: function() {
      var t = getBlendMode(this.data.bm);
      (this.baseElement || this.layerElement).style["mix-blend-mode"] = t;
    }, initBaseData: function(t, e, r) {
      this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
    }, getType: function() {
      return this.type;
    }, sourceRectAtTime: function() {
    } }, FrameElement.prototype = { initFrame: function() {
      this._isFirstFrame = false, this.dynamicProperties = [], this._mdf = false;
    }, prepareProperties: function(t, e) {
      var r, i = this.dynamicProperties.length;
      for (r = 0; r < i; r += 1)
        (e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = true, this._mdf = true));
    }, addDynamicProperty: function(t) {
      -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t);
    } }, FootageElement.prototype.prepareFrame = function() {
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
      return null;
    }, FootageElement.prototype.renderFrame = function() {
    }, FootageElement.prototype.destroy = function() {
    }, FootageElement.prototype.initExpressions = function() {
      var t = getExpressionInterfaces();
      if (t) {
        var e = t("footage");
        this.layerInterface = e(this);
      }
    }, FootageElement.prototype.getFootageData = function() {
      return this.footageData;
    }, AudioElement.prototype.prepareFrame = function(t) {
      if (this.prepareRenderableFrame(t, true), this.prepareProperties(t, true), this.tm._placeholder)
        this._currentTime = t / this.data.sr;
      else {
        var e = this.tm.v;
        this._currentTime = e;
      }
      this._volume = this.lv.v[0];
      var r = this._volume * this._volumeMultiplier;
      this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r));
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
      this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = true));
    }, AudioElement.prototype.show = function() {
    }, AudioElement.prototype.hide = function() {
      this.audio.pause(), this._isPlaying = false;
    }, AudioElement.prototype.pause = function() {
      this.audio.pause(), this._isPlaying = false, this._canPlay = false;
    }, AudioElement.prototype.resume = function() {
      this._canPlay = true;
    }, AudioElement.prototype.setRate = function(t) {
      this.audio.rate(t);
    }, AudioElement.prototype.volume = function(t) {
      this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume);
    }, AudioElement.prototype.getBaseElement = function() {
      return null;
    }, AudioElement.prototype.destroy = function() {
    }, AudioElement.prototype.sourceRectAtTime = function() {
    }, AudioElement.prototype.initExpressions = function() {
    }, BaseRenderer.prototype.checkLayers = function(t) {
      var e, r, i = this.layers.length;
      for (this.completeLayers = true, e = i - 1; e >= 0; e -= 1)
        this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
      this.checkPendingElements();
    }, BaseRenderer.prototype.createItem = function(t) {
      switch (t.ty) {
        case 2:
          return this.createImage(t);
        case 0:
          return this.createComp(t);
        case 1:
          return this.createSolid(t);
        case 3:
          return this.createNull(t);
        case 4:
          return this.createShape(t);
        case 5:
          return this.createText(t);
        case 6:
          return this.createAudio(t);
        case 13:
          return this.createCamera(t);
        case 15:
          return this.createFootage(t);
        default:
          return this.createNull(t);
      }
    }, BaseRenderer.prototype.createCamera = function() {
      throw new Error("You're using a 3d camera. Try the html renderer.");
    }, BaseRenderer.prototype.createAudio = function(t) {
      return new AudioElement(t, this.globalData, this);
    }, BaseRenderer.prototype.createFootage = function(t) {
      return new FootageElement(t, this.globalData, this);
    }, BaseRenderer.prototype.buildAllItems = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1)
        this.buildItem(t);
      this.checkPendingElements();
    }, BaseRenderer.prototype.includeLayers = function(t) {
      var e;
      this.completeLayers = false;
      var r, i = t.length, a = this.layers.length;
      for (e = 0; e < i; e += 1)
        for (r = 0; r < a; ) {
          if (this.layers[r].id === t[e].id) {
            this.layers[r] = t[e];
            break;
          }
          r += 1;
        }
    }, BaseRenderer.prototype.setProjectInterface = function(t) {
      this.globalData.projectInterface = t;
    }, BaseRenderer.prototype.initItems = function() {
      this.globalData.progressiveLoad || this.buildAllItems();
    }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
      for (var i = this.elements, a = this.layers, s = 0, n = a.length; s < n; )
        a[s].ind == e && (i[s] && true !== i[s] ? (r.push(i[s]), i[s].setAsParent(), void 0 !== a[s].parent ? this.buildElementParenting(t, a[s].parent, r) : t.setHierarchy(r)) : (this.buildItem(s), this.addPendingElement(t))), s += 1;
    }, BaseRenderer.prototype.addPendingElement = function(t) {
      this.pendingElements.push(t);
    }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1)
        if (t[e].xt) {
          var i = this.createComp(t[e]);
          i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
        }
    }, BaseRenderer.prototype.getElementById = function(t) {
      var e, r = this.elements.length;
      for (e = 0; e < r; e += 1)
        if (this.elements[e].data.ind === t)
          return this.elements[e];
      return null;
    }, BaseRenderer.prototype.getElementByPath = function(t) {
      var e, r = t.shift();
      if ("number" == typeof r)
        e = this.elements[r];
      else {
        var i, a = this.elements.length;
        for (i = 0; i < a; i += 1)
          if (this.elements[i].data.nm === r) {
            e = this.elements[i];
            break;
          }
      }
      return 0 === t.length ? e : e.getElementByPath(t);
    }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
      this.globalData.fontManager = new FontManager(), this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = { w: t.w, h: t.h };
    };
    var effectTypes = { TRANSFORM_EFFECT: "transformEFfect" };
    function TransformElement() {
    }
    function MaskElement(t, e, r) {
      this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var i, a, s = this.globalData.defs, n = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = createSizedArray(n), this.solidPath = "";
      var o, h, l, p, f, c, m = this.masksProperties, d = 0, u = [], y = createElementID(), g = "clipPath", v = "clip-path";
      for (i = 0; i < n; i += 1)
        if (("a" !== m[i].mode && "n" !== m[i].mode || m[i].inv || 100 !== m[i].o.k || m[i].o.x) && (g = "mask", v = "mask"), "s" !== m[i].mode && "i" !== m[i].mode || 0 !== d ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), u.push(l)), a = createNS("path"), "n" === m[i].mode)
          this.viewData[i] = { op: PropertyFactory.getProp(this.element, m[i].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, m[i], 3), elem: a, lastPath: "" }, s.appendChild(a);
        else {
          var b;
          if (d += 1, a.setAttribute("fill", "s" === m[i].mode ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero"), 0 !== m[i].x.k ? (g = "mask", v = "mask", c = PropertyFactory.getProp(this.element, m[i].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (f = createNS("feMorphology")).setAttribute("operator", "erode"), f.setAttribute("in", "SourceGraphic"), f.setAttribute("radius", "0"), p.appendChild(f), s.appendChild(p), a.setAttribute("stroke", "s" === m[i].mode ? "#000000" : "#ffffff")) : (f = null, c = null), this.storedData[i] = { elem: a, x: c, expan: f, lastPath: "", lastOperator: "", filterId: b, lastRadius: 0 }, "i" === m[i].mode) {
            h = u.length;
            var x = createNS("g");
            for (o = 0; o < h; o += 1)
              x.appendChild(u[o]);
            var E = createNS("mask");
            E.setAttribute("mask-type", "alpha"), E.setAttribute("id", y + "_" + d), E.appendChild(a), s.appendChild(E), x.setAttribute("mask", "url(" + getLocationHref() + "#" + y + "_" + d + ")"), u.length = 0, u.push(x);
          } else
            u.push(a);
          m[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = { elem: a, lastPath: "", op: PropertyFactory.getProp(this.element, m[i].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, m[i], 3), invRect: l }, this.viewData[i].prop.k || this.drawPath(m[i], this.viewData[i].prop.v, this.viewData[i]);
        }
      for (this.maskElement = createNS(g), n = u.length, i = 0; i < n; i += 1)
        this.maskElement.appendChild(u[i]);
      d > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + getLocationHref() + "#" + y + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
    }
    TransformElement.prototype = { initTransform: function() {
      var t = new Matrix();
      this.finalTransform = { mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: false, _localMatMdf: false, _opMdf: false, mat: t, localMat: t, localOpacity: 1 }, this.data.ao && (this.finalTransform.mProp.autoOriented = true), this.data.ty;
    }, renderTransform: function() {
      if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
        var t, e = this.finalTransform.mat, r = 0, i = this.hierarchy.length;
        if (!this.finalTransform._matMdf)
          for (; r < i; ) {
            if (this.hierarchy[r].finalTransform.mProp._mdf) {
              this.finalTransform._matMdf = true;
              break;
            }
            r += 1;
          }
        if (this.finalTransform._matMdf)
          for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < i; r += 1)
            e.multiply(this.hierarchy[r].finalTransform.mProp.v);
      }
      this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
    }, renderLocalTransform: function() {
      if (this.localTransforms) {
        var t = 0, e = this.localTransforms.length;
        if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
          for (; t < e; )
            this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = true), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = true), t += 1;
        if (this.finalTransform._localMatMdf) {
          var r = this.finalTransform.localMat;
          for (this.localTransforms[0].matrix.clone(r), t = 1; t < e; t += 1) {
            var i = this.localTransforms[t].matrix;
            r.multiply(i);
          }
          r.multiply(this.finalTransform.mat);
        }
        if (this.finalTransform._opMdf) {
          var a = this.finalTransform.localOpacity;
          for (t = 0; t < e; t += 1)
            a *= 0.01 * this.localTransforms[t].opacity;
          this.finalTransform.localOpacity = a;
        }
      }
    }, searchEffectTransforms: function() {
      if (this.renderableEffectsManager) {
        var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
        if (t.length) {
          this.localTransforms = [], this.finalTransform.localMat = new Matrix();
          var e = 0, r = t.length;
          for (e = 0; e < r; e += 1)
            this.localTransforms.push(t[e]);
        }
      }
    }, globalToLocal: function(t) {
      var e = [];
      e.push(this.finalTransform);
      for (var r, i = true, a = this.comp; i; )
        a.finalTransform ? (a.data.hasMask && e.splice(0, 0, a.finalTransform), a = a.comp) : i = false;
      var s, n = e.length;
      for (r = 0; r < n; r += 1)
        s = e[r].mat.applyToPointArray(0, 0, 0), t = [t[0] - s[0], t[1] - s[1], 0];
      return t;
    }, mHelper: new Matrix() }, MaskElement.prototype.getMaskProperty = function(t) {
      return this.viewData[t].prop;
    }, MaskElement.prototype.renderFrame = function(t) {
      var e, r = this.element.finalTransform.mat, i = this.masksProperties.length;
      for (e = 0; e < i; e += 1)
        if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
          var a = this.storedData[e].expan;
          this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), a.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v));
        }
    }, MaskElement.prototype.getMaskelement = function() {
      return this.maskElement;
    }, MaskElement.prototype.createLayerSolidPath = function() {
      var t = "M0,0 ";
      return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ";
    }, MaskElement.prototype.drawPath = function(t, e, r) {
      var i, a, s = " M" + e.v[0][0] + "," + e.v[0][1];
      for (a = e._length, i = 1; i < a; i += 1)
        s += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
      if (e.c && a > 1 && (s += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== s) {
        var n = "";
        r.elem && (e.c && (n = t.inv ? this.solidPath + s : s), r.elem.setAttribute("d", n)), r.lastPath = s;
      }
    }, MaskElement.prototype.destroy = function() {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
    };
    var filtersFactory = function() {
      var t = {};
      return t.createFilter = function(t2, e) {
        var r = createNS("filter");
        r.setAttribute("id", t2), true !== e && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%"));
        return r;
      }, t.createAlphaToLuminanceFilter = function() {
        var t2 = createNS("feColorMatrix");
        return t2.setAttribute("type", "matrix"), t2.setAttribute("color-interpolation-filters", "sRGB"), t2.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t2;
      }, t;
    }(), featureSupport = function() {
      var t = { maskType: true, svgLumaHidden: true, offscreenCanvas: "undefined" != typeof OffscreenCanvas };
      return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = false), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = false), t;
    }(), registeredEffects$1 = {}, idPrefix = "filter_result_";
    function SVGEffects(t) {
      var e, r, i = "SourceGraphic", a = t.data.ef ? t.data.ef.length : 0, s = createElementID(), n = filtersFactory.createFilter(s, true), o = 0;
      for (this.filters = [], e = 0; e < a; e += 1) {
        r = null;
        var h = t.data.ef[e].ty;
        if (registeredEffects$1[h])
          r = new (0, registeredEffects$1[h].effect)(n, t.effectsManager.effectElements[e], t, idPrefix + o, i), i = idPrefix + o, registeredEffects$1[h].countsAsEffect && (o += 1);
        r && this.filters.push(r);
      }
      o && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this);
    }
    function registerEffect$1(t, e, r) {
      registeredEffects$1[t] = { effect: e, countsAsEffect: r };
    }
    function SVGBaseElement() {
    }
    function HierarchyElement() {
    }
    function RenderableDOMElement() {
    }
    function IImageElement(t, e, r) {
      this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, r), this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h };
    }
    function ProcessedElement(t, e) {
      this.elem = t, this.pos = e;
    }
    function IShapeElement() {
    }
    SVGEffects.prototype.renderFrame = function(t) {
      var e, r = this.filters.length;
      for (e = 0; e < r; e += 1)
        this.filters[e].renderFrame(t);
    }, SVGEffects.prototype.getEffects = function(t) {
      var e, r = this.filters.length, i = [];
      for (e = 0; e < r; e += 1)
        this.filters[e].type === t && i.push(this.filters[e]);
      return i;
    }, SVGBaseElement.prototype = { initRendererElement: function() {
      this.layerElement = createNS("g");
    }, createContainerElements: function() {
      this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = false;
      var t = null;
      if (this.data.td) {
        this.matteMasks = {};
        var e = createNS("g");
        e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e);
      } else
        this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
      if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
        var r = createNS("clipPath"), i = createNS("path");
        i.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
        var a = createElementID();
        if (r.setAttribute("id", a), r.appendChild(i), this.globalData.defs.appendChild(r), this.checkMasks()) {
          var s = createNS("g");
          s.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), s.appendChild(this.layerElement), this.transformedElement = s, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
        } else
          this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")");
      }
      0 !== this.data.bm && this.setBlendMode();
    }, renderElement: function() {
      this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
    }, destroyBaseElement: function() {
      this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
    }, getBaseElement: function() {
      return this.data.hd ? null : this.baseElement;
    }, createRenderableComponents: function() {
      this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms();
    }, getMatte: function(t) {
      if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
        var e, r, i, a, s = this.layerId + "_" + t;
        if (1 === t || 3 === t) {
          var n = createNS("mask");
          n.setAttribute("id", s), n.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n.appendChild(i), this.globalData.defs.appendChild(n), featureSupport.maskType || 1 !== t || (n.setAttribute("mask-type", "luminance"), e = createElementID(), r = filtersFactory.createFilter(e), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (a = createNS("g")).appendChild(i), n.appendChild(a), a.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"));
        } else if (2 === t) {
          var o = createNS("mask");
          o.setAttribute("id", s), o.setAttribute("mask-type", "alpha");
          var h = createNS("g");
          o.appendChild(h), e = createElementID(), r = filtersFactory.createFilter(e);
          var l = createNS("feComponentTransfer");
          l.setAttribute("in", "SourceGraphic"), r.appendChild(l);
          var p = createNS("feFuncA");
          p.setAttribute("type", "table"), p.setAttribute("tableValues", "1.0 0.0"), l.appendChild(p), this.globalData.defs.appendChild(r);
          var f = createNS("rect");
          f.setAttribute("width", this.comp.data.w), f.setAttribute("height", this.comp.data.h), f.setAttribute("x", "0"), f.setAttribute("y", "0"), f.setAttribute("fill", "#ffffff"), f.setAttribute("opacity", "0"), h.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"), h.appendChild(f), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(i), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), h.appendChild(f), a.appendChild(this.layerElement), h.appendChild(a)), this.globalData.defs.appendChild(o);
        }
        this.matteMasks[t] = s;
      }
      return this.matteMasks[t];
    }, setMatte: function(t) {
      this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")");
    } }, HierarchyElement.prototype = { initHierarchy: function() {
      this.hierarchy = [], this._isParent = false, this.checkParenting();
    }, setHierarchy: function(t) {
      this.hierarchy = t;
    }, setAsParent: function() {
      this._isParent = true;
    }, checkParenting: function() {
      void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []);
    } }, extendPrototype([RenderableElement, createProxyFunction({ initElement: function(t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
    }, hide: function() {
      this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = true);
    }, show: function() {
      this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = false, this._isFirstFrame = true);
    }, renderFrame: function() {
      this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = false));
    }, renderInnerContent: function() {
    }, prepareFrame: function(t) {
      this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency();
    }, destroy: function() {
      this.innerElem = null, this.destroyBaseElement();
    } })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
    }, IImageElement.prototype.sourceRectAtTime = function() {
      return this.sourceRect;
    }, IShapeElement.prototype = { addShapeToModifiers: function(t) {
      var e, r = this.shapeModifiers.length;
      for (e = 0; e < r; e += 1)
        this.shapeModifiers[e].addShape(t);
    }, isShapeInAnimatedModifiers: function(t) {
      for (var e = this.shapeModifiers.length; 0 < e; )
        if (this.shapeModifiers[0].isAnimatedWithShape(t))
          return true;
      return false;
    }, renderModifiers: function() {
      if (this.shapeModifiers.length) {
        var t, e = this.shapes.length;
        for (t = 0; t < e; t += 1)
          this.shapes[t].sh.reset();
        for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1)
          ;
      }
    }, searchProcessedElement: function(t) {
      for (var e = this.processedElements, r = 0, i = e.length; r < i; ) {
        if (e[r].elem === t)
          return e[r].pos;
        r += 1;
      }
      return 0;
    }, addProcessedElement: function(t, e) {
      for (var r = this.processedElements, i = r.length; i; )
        if (r[i -= 1].elem === t)
          return void (r[i].pos = e);
      r.push(new ProcessedElement(t, e));
    }, prepareFrame: function(t) {
      this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
    } };
    var lineCapEnum = { 1: "butt", 2: "round", 3: "square" }, lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" };
    function SVGShapeData(t, e, r) {
      this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
      for (var i = 0, a = t.length; i < a; ) {
        if (t[i].mProps.dynamicProperties.length) {
          this._isAnimated = true;
          break;
        }
        i += 1;
      }
    }
    function SVGStyleData(t, e) {
      this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = false, this.closed = true === t.hd, this.pElem = createNS("path"), this.msElem = null;
    }
    function DashProperty(t, e, r, i) {
      var a;
      this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = false, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
      var s, n = e.length || 0;
      for (a = 0; a < n; a += 1)
        s = PropertyFactory.getProp(t, e[a].v, 0, 0, this), this.k = s.k || this.k, this.dataProps[a] = { n: e[a].n, p: s };
      this.k || this.getValue(true), this._isAnimated = this.k;
    }
    function SVGStrokeStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated;
    }
    function SVGFillStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r;
    }
    function SVGNoStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = r;
    }
    function GradientProperty(t, e, r) {
      this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
      var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
      this.o = createTypedArray("float32", i), this._cmdf = false, this._omdf = false, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(true);
    }
    function SVGGradientFillStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r);
    }
    function SVGGradientStrokeStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated;
    }
    function ShapeGroupData() {
      this.it = [], this.prevViewData = [], this.gr = createNS("g");
    }
    function SVGTransformData(t, e, r) {
      this.transform = { mProps: t, op: e, container: r }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
    }
    SVGShapeData.prototype.setAsAnimated = function() {
      this._isAnimated = true;
    }, SVGStyleData.prototype.reset = function() {
      this.d = "", this._mdf = false;
    }, DashProperty.prototype.getValue = function(t) {
      if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
        var e = 0, r = this.dataProps.length;
        for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1)
          "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
      }
    }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(t, e) {
      for (var r = 0, i = this.o.length / 2; r < i; ) {
        if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > 0.01)
          return false;
        r += 1;
      }
      return true;
    }, GradientProperty.prototype.checkCollapsable = function() {
      if (this.o.length / 2 != this.c.length / 4)
        return false;
      if (this.data.k.k[0].s)
        for (var t = 0, e = this.data.k.k.length; t < e; ) {
          if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
            return false;
          t += 1;
        }
      else if (!this.comparePoints(this.data.k.k, this.data.p))
        return false;
      return true;
    }, GradientProperty.prototype.getValue = function(t) {
      if (this.prop.getValue(), this._mdf = false, this._cmdf = false, this._omdf = false, this.prop._mdf || t) {
        var e, r, i, a = 4 * this.data.p;
        for (e = 0; e < a; e += 1)
          r = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * r), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
        if (this.o.length)
          for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1)
            r = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
        this._mdf = !t;
      }
    }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
      this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || { k: 0 }, 0, 0.01, this), this.a = PropertyFactory.getProp(t, e.a || { k: 0 }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated;
    }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
      var r = createElementID(), i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
      i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
      var a, s, n, o = [];
      for (n = 4 * e.g.p, s = 0; s < n; s += 4)
        a = createNS("stop"), i.appendChild(a), o.push(a);
      t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = o;
    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var r, i, a, s = createNS("mask"), n = createNS("path");
        s.appendChild(n);
        var o = createElementID(), h = createElementID();
        s.setAttribute("id", h);
        var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
        l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
        var p = this.stops;
        for (i = 4 * t.g.p; i < a; i += 2)
          (r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(r), p.push(r);
        n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === t.ty && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = s, this.ost = p, this.maskId = h, e.msElem = n;
      }
    }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
    var buildShapeString = function(t, e, r, i) {
      if (0 === e)
        return "";
      var a, s = t.o, n = t.i, o = t.v, h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
      for (a = 1; a < e; a += 1)
        h += " C" + i.applyToPointStringified(s[a - 1][0], s[a - 1][1]) + " " + i.applyToPointStringified(n[a][0], n[a][1]) + " " + i.applyToPointStringified(o[a][0], o[a][1]);
      return r && e && (h += " C" + i.applyToPointStringified(s[a - 1][0], s[a - 1][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h;
    }, SVGElementsRenderer = function() {
      var t = new Matrix(), e = new Matrix();
      function r(t2, e2, r2) {
        (r2 || e2.transform.op._mdf) && e2.transform.container.setAttribute("opacity", e2.transform.op.v), (r2 || e2.transform.mProps._mdf) && e2.transform.container.setAttribute("transform", e2.transform.mProps.v.to2dCSS());
      }
      function i() {
      }
      function a(r2, i2, a2) {
        var s2, n2, o2, h2, l, p, f, c, m, d, u = i2.styles.length, y = i2.lvl;
        for (p = 0; p < u; p += 1) {
          if (h2 = i2.sh._mdf || a2, i2.styles[p].lvl < y) {
            for (c = e.reset(), m = y - i2.styles[p].lvl, d = i2.transformers.length - 1; !h2 && m > 0; )
              h2 = i2.transformers[d].mProps._mdf || h2, m -= 1, d -= 1;
            if (h2)
              for (m = y - i2.styles[p].lvl, d = i2.transformers.length - 1; m > 0; )
                c.multiply(i2.transformers[d].mProps.v), m -= 1, d -= 1;
          } else
            c = t;
          if (n2 = (f = i2.sh.paths)._length, h2) {
            for (o2 = "", s2 = 0; s2 < n2; s2 += 1)
              (l = f.shapes[s2]) && l._length && (o2 += buildShapeString(l, l._length, l.c, c));
            i2.caches[p] = o2;
          } else
            o2 = i2.caches[p];
          i2.styles[p].d += true === r2.hd ? "" : o2, i2.styles[p]._mdf = h2 || i2.styles[p]._mdf;
        }
      }
      function s(t2, e2, r2) {
        var i2 = e2.style;
        (e2.c._mdf || r2) && i2.pElem.setAttribute("fill", "rgb(" + bmFloor(e2.c.v[0]) + "," + bmFloor(e2.c.v[1]) + "," + bmFloor(e2.c.v[2]) + ")"), (e2.o._mdf || r2) && i2.pElem.setAttribute("fill-opacity", e2.o.v);
      }
      function n(t2, e2, r2) {
        o(t2, e2, r2), h(t2, e2, r2);
      }
      function o(t2, e2, r2) {
        var i2, a2, s2, n2, o2, h2 = e2.gf, l = e2.g._hasOpacity, p = e2.s.v, f = e2.e.v;
        if (e2.o._mdf || r2) {
          var c = "gf" === t2.ty ? "fill-opacity" : "stroke-opacity";
          e2.style.pElem.setAttribute(c, e2.o.v);
        }
        if (e2.s._mdf || r2) {
          var m = 1 === t2.t ? "x1" : "cx", d = "x1" === m ? "y1" : "cy";
          h2.setAttribute(m, p[0]), h2.setAttribute(d, p[1]), l && !e2.g._collapsable && (e2.of.setAttribute(m, p[0]), e2.of.setAttribute(d, p[1]));
        }
        if (e2.g._cmdf || r2) {
          i2 = e2.cst;
          var u = e2.g.c;
          for (s2 = i2.length, a2 = 0; a2 < s2; a2 += 1)
            (n2 = i2[a2]).setAttribute("offset", u[4 * a2] + "%"), n2.setAttribute("stop-color", "rgb(" + u[4 * a2 + 1] + "," + u[4 * a2 + 2] + "," + u[4 * a2 + 3] + ")");
        }
        if (l && (e2.g._omdf || r2)) {
          var y = e2.g.o;
          for (s2 = (i2 = e2.g._collapsable ? e2.cst : e2.ost).length, a2 = 0; a2 < s2; a2 += 1)
            n2 = i2[a2], e2.g._collapsable || n2.setAttribute("offset", y[2 * a2] + "%"), n2.setAttribute("stop-opacity", y[2 * a2 + 1]);
        }
        if (1 === t2.t)
          (e2.e._mdf || r2) && (h2.setAttribute("x2", f[0]), h2.setAttribute("y2", f[1]), l && !e2.g._collapsable && (e2.of.setAttribute("x2", f[0]), e2.of.setAttribute("y2", f[1])));
        else if ((e2.s._mdf || e2.e._mdf || r2) && (o2 = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)), h2.setAttribute("r", o2), l && !e2.g._collapsable && e2.of.setAttribute("r", o2)), e2.e._mdf || e2.h._mdf || e2.a._mdf || r2) {
          o2 || (o2 = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)));
          var g = Math.atan2(f[1] - p[1], f[0] - p[0]), v = e2.h.v;
          v >= 1 ? v = 0.99 : v <= -1 && (v = -0.99);
          var b = o2 * v, x = Math.cos(g + e2.a.v) * b + p[0], E = Math.sin(g + e2.a.v) * b + p[1];
          h2.setAttribute("fx", x), h2.setAttribute("fy", E), l && !e2.g._collapsable && (e2.of.setAttribute("fx", x), e2.of.setAttribute("fy", E));
        }
      }
      function h(t2, e2, r2) {
        var i2 = e2.style, a2 = e2.d;
        a2 && (a2._mdf || r2) && a2.dashStr && (i2.pElem.setAttribute("stroke-dasharray", a2.dashStr), i2.pElem.setAttribute("stroke-dashoffset", a2.dashoffset[0])), e2.c && (e2.c._mdf || r2) && i2.pElem.setAttribute("stroke", "rgb(" + bmFloor(e2.c.v[0]) + "," + bmFloor(e2.c.v[1]) + "," + bmFloor(e2.c.v[2]) + ")"), (e2.o._mdf || r2) && i2.pElem.setAttribute("stroke-opacity", e2.o.v), (e2.w._mdf || r2) && (i2.pElem.setAttribute("stroke-width", e2.w.v), i2.msElem && i2.msElem.setAttribute("stroke-width", e2.w.v));
      }
      return { createRenderFunction: function(t2) {
        switch (t2.ty) {
          case "fl":
            return s;
          case "gf":
            return o;
          case "gs":
            return n;
          case "st":
            return h;
          case "sh":
          case "el":
          case "rc":
          case "sr":
            return a;
          case "tr":
            return r;
          case "no":
            return i;
          default:
            return null;
        }
      } };
    }();
    function SVGShapeElement(t, e, r) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = [];
    }
    function LetterProps(t, e, r, i, a, s) {
      this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = a, this.p = s, this._mdf = { o: true, sw: !!e, sc: !!r, fc: !!i, m: true, p: true };
    }
    function TextProperty(t, e) {
      this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = false, this._isFirstFrame = true, this._mdf = false, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = false, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: false, strokeColorAnim: false, strokeWidthAnim: false, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: false }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {
    }, SVGShapeElement.prototype.identityMatrix = new Matrix(), SVGShapeElement.prototype.buildExpressionInterface = function() {
    }, SVGShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes();
    }, SVGShapeElement.prototype.filterUniqueShapes = function() {
      var t, e, r, i, a = this.shapes.length, s = this.stylesList.length, n = [], o = false;
      for (r = 0; r < s; r += 1) {
        for (i = this.stylesList[r], o = false, n.length = 0, t = 0; t < a; t += 1)
          -1 !== (e = this.shapes[t]).styles.indexOf(i) && (n.push(e), o = e._isAnimated || o);
        n.length > 1 && o && this.setShapesAsAnimated(n);
      }
    }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1)
        t[e].setAsAnimated();
    }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
      var r, i = new SVGStyleData(t, e), a = i.pElem;
      if ("st" === t.ty)
        r = new SVGStrokeStyleData(this, t, i);
      else if ("fl" === t.ty)
        r = new SVGFillStyleData(this, t, i);
      else if ("gf" === t.ty || "gs" === t.ty) {
        r = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), a.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"));
      } else
        "no" === t.ty && (r = new SVGNoStyleData(this, t, i));
      return "st" !== t.ty && "gs" !== t.ty || (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), a.setAttribute("fill-opacity", "0"), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r;
    }, SVGShapeElement.prototype.createGroupElement = function(t) {
      var e = new ShapeGroupData();
      return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
    }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
      var r = TransformPropertyFactory.getTransformProperty(this, t, this), i = new SVGTransformData(r, r.o, e);
      return this.addToAnimatedContents(t, i), i;
    }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
      var i = 4;
      "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
      var a = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, i, this));
      return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a;
    }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
      for (var r = 0, i = this.animatedContents.length; r < i; ) {
        if (this.animatedContents[r].element === e)
          return;
        r += 1;
      }
      this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(t), element: e, data: t });
    }, SVGShapeElement.prototype.setElementStyles = function(t) {
      var e, r = t.styles, i = this.stylesList.length;
      for (e = 0; e < i; e += 1)
        this.stylesList[e].closed || r.push(this.stylesList[e]);
    }, SVGShapeElement.prototype.reloadShapes = function() {
      var t;
      this._isFirstFrame = true;
      var e = this.itemsData.length;
      for (t = 0; t < e; t += 1)
        this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)
        this.dynamicProperties[t].getValue();
      this.renderModifiers();
    }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, a, s, n) {
      var o, h, l, p, f, c, m = [].concat(s), d = t.length - 1, u = [], y = [];
      for (o = d; o >= 0; o -= 1) {
        if ((c = this.searchProcessedElement(t[o])) ? e[o] = r[c - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty)
          c ? e[o].style.closed = false : e[o] = this.createStyleElement(t[o], a), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), u.push(e[o].style);
        else if ("gr" === t[o].ty) {
          if (c)
            for (l = e[o].it.length, h = 0; h < l; h += 1)
              e[o].prevViewData[h] = e[o].it[h];
          else
            e[o] = this.createGroupElement(t[o]);
          this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, a + 1, m, n), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr);
        } else
          "tr" === t[o].ty ? (c || (e[o] = this.createTransformElement(t[o], i)), p = e[o].transform, m.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (c || (e[o] = this.createShapeElement(t[o], m, a)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (c ? (f = e[o]).closed = false : ((f = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = f, this.shapeModifiers.push(f)), y.push(f)) : "rp" === t[o].ty && (c ? (f = e[o]).closed = true : (f = ShapeModifiers.getModifier(t[o].ty), e[o] = f, f.init(this, t, o, e), this.shapeModifiers.push(f), n = false), y.push(f));
        this.addProcessedElement(t[o], o + 1);
      }
      for (d = u.length, o = 0; o < d; o += 1)
        u[o].closed = true;
      for (d = y.length, o = 0; o < d; o += 1)
        y[o].closed = true;
    }, SVGShapeElement.prototype.renderInnerContent = function() {
      var t;
      this.renderModifiers();
      var e = this.stylesList.length;
      for (t = 0; t < e; t += 1)
        this.stylesList[t].reset();
      for (this.renderShape(), t = 0; t < e; t += 1)
        (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
    }, SVGShapeElement.prototype.renderShape = function() {
      var t, e, r = this.animatedContents.length;
      for (t = 0; t < r; t += 1)
        e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && true !== e.data && e.fn(e.data, e.element, this._isFirstFrame);
    }, SVGShapeElement.prototype.destroy = function() {
      this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
    }, LetterProps.prototype.update = function(t, e, r, i, a, s) {
      this._mdf.o = false, this._mdf.sw = false, this._mdf.sc = false, this._mdf.fc = false, this._mdf.m = false, this._mdf.p = false;
      var n = false;
      return this.o !== t && (this.o = t, this._mdf.o = true, n = true), this.sw !== e && (this.sw = e, this._mdf.sw = true, n = true), this.sc !== r && (this.sc = r, this._mdf.sc = true, n = true), this.fc !== i && (this.fc = i, this._mdf.fc = true, n = true), this.m !== a && (this.m = a, this._mdf.m = true, n = true), !s.length || this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13] || (this.p = s, this._mdf.p = true, n = true), n;
    }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      return t;
    }, TextProperty.prototype.setCurrentData = function(t) {
      t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = true;
    }, TextProperty.prototype.searchProperty = function() {
      return this.searchKeyframes();
    }, TextProperty.prototype.searchKeyframes = function() {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
    }, TextProperty.prototype.addEffect = function(t) {
      this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.getValue = function(t) {
      if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var e = this.currentData, r = this.keysIndex;
        if (this.lock)
          this.setCurrentData(this.currentData);
        else {
          var i;
          this.lock = true, this._mdf = false;
          var a = this.effectsSequence.length, s = t || this.data.d.k[this.keysIndex].s;
          for (i = 0; i < a; i += 1)
            s = r !== this.keysIndex ? this.effectsSequence[i](s, s.t) : this.effectsSequence[i](this.currentData, s.t);
          e !== s && this.setCurrentData(s), this.v = this.currentData, this.pv = this.v, this.lock = false, this.frameId = this.elem.globalData.frameId;
        }
      }
    }, TextProperty.prototype.getKeyframeValue = function() {
      for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e); )
        r += 1;
      return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s;
    }, TextProperty.prototype.buildFinalText = function(t) {
      for (var e, r, i = [], a = 0, s = t.length, n = false, o = false, h = ""; a < s; )
        n = o, o = false, e = t.charCodeAt(a), h = t.charAt(a), FontManager.isCombinedCharacter(e) ? n = true : e >= 55296 && e <= 56319 ? FontManager.isRegionalFlag(t, a) ? h = t.substr(a, 14) : (r = t.charCodeAt(a + 1)) >= 56320 && r <= 57343 && (FontManager.isModifier(e, r) ? (h = t.substr(a, 2), n = true) : h = FontManager.isFlagEmoji(t.substr(a, 4)) ? t.substr(a, 4) : t.substr(a, 2)) : e > 56319 ? (r = t.charCodeAt(a + 1), FontManager.isVariationSelector(e) && (n = true)) : FontManager.isZeroWidthJoiner(e) && (n = true, o = true), n ? (i[i.length - 1] += h, n = false) : i.push(h), a += h.length;
      return i;
    }, TextProperty.prototype.completeTextData = function(t) {
      t.__complete = true;
      var e, r, i, a, s, n, o, h = this.elem.globalData.fontManager, l = this.data, p = [], f = 0, c = l.m.g, m = 0, d = 0, u = 0, y = [], g = 0, v = 0, b = h.getFontByName(t.f), x = 0, E = getFontProperties(b);
      t.fWeight = E.weight, t.fStyle = E.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
      var S, P = t.tr / 1e3 * t.finalSize;
      if (t.sz)
        for (var C, _, k = true, A = t.sz[0], T = t.sz[1]; k; ) {
          C = 0, g = 0, r = (_ = this.buildFinalText(t.t)).length, P = t.tr / 1e3 * t.finalSize;
          var M = -1;
          for (e = 0; e < r; e += 1)
            S = _[e].charCodeAt(0), i = false, " " === _[e] ? M = e : 13 !== S && 3 !== S || (g = 0, i = true, C += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(_[e], b.fStyle, b.fFamily), x = i ? 0 : o.w * t.finalSize / 100) : x = h.measureText(_[e], t.f, t.finalSize), g + x > A && " " !== _[e] ? (-1 === M ? r += 1 : e = M, C += t.finalLineHeight || 1.2 * t.finalSize, _.splice(e, M === e ? 1 : 0, "\r"), M = -1, g = 0) : (g += x, g += P);
          C += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && T < C ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = _, r = t.finalText.length, k = false);
        }
      g = -P, x = 0;
      var w, D = 0;
      for (e = 0; e < r; e += 1)
        if (i = false, 13 === (S = (w = t.finalText[e]).charCodeAt(0)) || 3 === S ? (D = 0, y.push(g), v = g > v ? g : v, g = -2 * P, a = "", i = true, u += 1) : a = w, h.chars ? (o = h.getCharData(w, b.fStyle, h.getFontByName(t.f).fFamily), x = i ? 0 : o.w * t.finalSize / 100) : x = h.measureText(a, t.f, t.finalSize), " " === w ? D += x + P : (g += x + P + D, D = 0), p.push({ l: x, an: x, add: m, n: i, anIndexes: [], val: a, line: u, animatorJustifyOffset: 0 }), 2 == c) {
          if (m += x, "" === a || " " === a || e === r - 1) {
            for ("" !== a && " " !== a || (m -= x); d <= e; )
              p[d].an = m, p[d].ind = f, p[d].extra = x, d += 1;
            f += 1, m = 0;
          }
        } else if (3 == c) {
          if (m += x, "" === a || e === r - 1) {
            for ("" === a && (m -= x); d <= e; )
              p[d].an = m, p[d].ind = f, p[d].extra = x, d += 1;
            m = 0, f += 1;
          }
        } else
          p[f].ind = f, p[f].extra = 0, f += 1;
      if (t.l = p, v = g > v ? g : v, y.push(g), t.sz)
        t.boxWidth = t.sz[0], t.justifyOffset = 0;
      else
        switch (t.boxWidth = v, t.j) {
          case 1:
            t.justifyOffset = -t.boxWidth;
            break;
          case 2:
            t.justifyOffset = -t.boxWidth / 2;
            break;
          default:
            t.justifyOffset = 0;
        }
      t.lineWidths = y;
      var F, I, R, V, B = l.a;
      n = B.length;
      var L = [];
      for (s = 0; s < n; s += 1) {
        for ((F = B[s]).a.sc && (t.strokeColorAnim = true), F.a.sw && (t.strokeWidthAnim = true), (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = true), V = 0, R = F.s.b, e = 0; e < r; e += 1)
          (I = p[e]).anIndexes[s] = V, (1 == R && "" !== I.val || 2 == R && "" !== I.val && " " !== I.val || 3 == R && (I.n || " " == I.val || e == r - 1) || 4 == R && (I.n || e == r - 1)) && (1 === F.s.rn && L.push(V), V += 1);
        l.a[s].s.totalChars = V;
        var z, G = -1;
        if (1 === F.s.rn)
          for (e = 0; e < r; e += 1)
            G != (I = p[e]).anIndexes[s] && (G = I.anIndexes[s], z = L.splice(Math.floor(Math.random() * L.length), 1)[0]), I.anIndexes[s] = z;
      }
      t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100;
    }, TextProperty.prototype.updateDocumentData = function(t, e) {
      e = void 0 === e ? this.keysIndex : e;
      var r = this.copyData({}, this.data.d.k[e].s);
      r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.setCurrentData(r), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.recalculate = function(t) {
      var e = this.data.d.k[t].s;
      e.__complete = false, this.keysIndex = 0, this._isFirstFrame = true, this.getValue(e);
    }, TextProperty.prototype.canResizeFont = function(t) {
      this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.setMinimumFontSize = function(t) {
      this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    };
    var TextSelectorProp = function() {
      var t = Math.max, e = Math.min, r = Math.floor;
      function i(t2, e2) {
        this._currentTextLength = -1, this.k = false, this.data = e2, this.elem = t2, this.comp = t2.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t2), this.s = PropertyFactory.getProp(t2, e2.s || { k: 0 }, 0, 0, this), this.e = "e" in e2 ? PropertyFactory.getProp(t2, e2.e, 0, 0, this) : { v: 100 }, this.o = PropertyFactory.getProp(t2, e2.o || { k: 0 }, 0, 0, this), this.xe = PropertyFactory.getProp(t2, e2.xe || { k: 0 }, 0, 0, this), this.ne = PropertyFactory.getProp(t2, e2.ne || { k: 0 }, 0, 0, this), this.sm = PropertyFactory.getProp(t2, e2.sm || { k: 100 }, 0, 0, this), this.a = PropertyFactory.getProp(t2, e2.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
      }
      return i.prototype = { getMult: function(i2) {
        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
        var a = 0, s = 0, n = 1, o = 1;
        this.ne.v > 0 ? a = this.ne.v / 100 : s = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
        var h = BezierFactory.getBezierEasing(a, s, n, o).get, l = 0, p = this.finalS, f = this.finalE, c = this.data.sh;
        if (2 === c)
          l = h(l = f === p ? i2 >= f ? 1 : 0 : t(0, e(0.5 / (f - p) + (i2 - p) / (f - p), 1)));
        else if (3 === c)
          l = h(l = f === p ? i2 >= f ? 0 : 1 : 1 - t(0, e(0.5 / (f - p) + (i2 - p) / (f - p), 1)));
        else if (4 === c)
          f === p ? l = 0 : (l = t(0, e(0.5 / (f - p) + (i2 - p) / (f - p), 1))) < 0.5 ? l *= 2 : l = 1 - 2 * (l - 0.5), l = h(l);
        else if (5 === c) {
          if (f === p)
            l = 0;
          else {
            var m = f - p, d = -m / 2 + (i2 = e(t(0, i2 + 0.5 - p), f - p)), u = m / 2;
            l = Math.sqrt(1 - d * d / (u * u));
          }
          l = h(l);
        } else
          6 === c ? (f === p ? l = 0 : (i2 = e(t(0, i2 + 0.5 - p), f - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * i2 / (f - p))) / 2), l = h(l)) : (i2 >= r(p) && (l = t(0, e(i2 - p < 0 ? e(f, 1) - (p - i2) : f - i2, 1))), l = h(l));
        if (100 !== this.sm.v) {
          var y = 0.01 * this.sm.v;
          0 === y && (y = 1e-8);
          var g = 0.5 - 0.5 * y;
          l < g ? l = 0 : (l = (l - g) / y) > 1 && (l = 1);
        }
        return l * this.a.v;
      }, getValue: function(t2) {
        this.iterateDynamicProperties(), this._mdf = t2 || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t2 && 2 === this.data.r && (this.e.v = this._currentTextLength);
        var e2 = 2 === this.data.r ? 1 : 100 / this.data.totalChars, r2 = this.o.v / e2, i2 = this.s.v / e2 + r2, a = this.e.v / e2 + r2;
        if (i2 > a) {
          var s = i2;
          i2 = a, a = s;
        }
        this.finalS = i2, this.finalE = a;
      } }, extendPrototype([DynamicPropertyContainer], i), { getTextSelectorProp: function(t2, e2, r2) {
        return new i(t2, e2, r2);
      } };
    }();
    function TextAnimatorDataProperty(t, e, r) {
      var i = { propType: false }, a = PropertyFactory.getProp, s = e.a;
      this.a = { r: s.r ? a(t, s.r, 0, degToRads, r) : i, rx: s.rx ? a(t, s.rx, 0, degToRads, r) : i, ry: s.ry ? a(t, s.ry, 0, degToRads, r) : i, sk: s.sk ? a(t, s.sk, 0, degToRads, r) : i, sa: s.sa ? a(t, s.sa, 0, degToRads, r) : i, s: s.s ? a(t, s.s, 1, 0.01, r) : i, a: s.a ? a(t, s.a, 1, 0, r) : i, o: s.o ? a(t, s.o, 0, 0.01, r) : i, p: s.p ? a(t, s.p, 1, 0, r) : i, sw: s.sw ? a(t, s.sw, 0, 0, r) : i, sc: s.sc ? a(t, s.sc, 1, 0, r) : i, fc: s.fc ? a(t, s.fc, 1, 0, r) : i, fh: s.fh ? a(t, s.fh, 0, 0, r) : i, fs: s.fs ? a(t, s.fs, 0, 0.01, r) : i, fb: s.fb ? a(t, s.fb, 0, 0.01, r) : i, t: s.t ? a(t, s.t, 0, 0, r) : i }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t;
    }
    function TextAnimatorProperty(t, e, r) {
      this._isFirstFrame = true, this._hasMaskedPath = false, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = false, this.initDynamicPropertyContainer(r);
    }
    function ITextElement() {
    }
    TextAnimatorProperty.prototype.searchProperties = function() {
      var t, e, r = this._textData.a.length, i = PropertyFactory.getProp;
      for (t = 0; t < r; t += 1)
        e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = { a: i(this._elem, this._textData.p.a, 0, 0, this), f: i(this._elem, this._textData.p.f, 0, 0, this), l: i(this._elem, this._textData.p.l, 0, 0, this), r: i(this._elem, this._textData.p.r, 0, 0, this), p: i(this._elem, this._textData.p.p, 0, 0, this), m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = true) : this._hasMaskedPath = false, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this);
    }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
      if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
        this._isFirstFrame = false;
        var r, i, a, s, n, o, h, l, p, f, c, m, d, u, y, g, v, b, x, E = this._moreOptions.alignment.v, S = this._animatorsData, P = this._textData, C = this.mHelper, _ = this._renderType, k = this.renderedLetters.length, A = t.l;
        if (this._hasMaskedPath) {
          if (x = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var T, M = x.v;
            for (this._pathData.r.v && (M = M.reverse()), n = { tLength: 0, segments: [] }, s = M._length - 1, g = 0, a = 0; a < s; a += 1)
              T = bez.buildBezierData(M.v[a], M.v[a + 1], [M.o[a][0] - M.v[a][0], M.o[a][1] - M.v[a][1]], [M.i[a + 1][0] - M.v[a + 1][0], M.i[a + 1][1] - M.v[a + 1][1]]), n.tLength += T.segmentLength, n.segments.push(T), g += T.segmentLength;
            a = s, x.v.c && (T = bez.buildBezierData(M.v[a], M.v[0], [M.o[a][0] - M.v[a][0], M.o[a][1] - M.v[a][1]], [M.i[0][0] - M.v[0][0], M.i[0][1] - M.v[0][1]]), n.tLength += T.segmentLength, n.segments.push(T), g += T.segmentLength), this._pathData.pi = n;
          }
          if (n = this._pathData.pi, o = this._pathData.f.v, c = 0, f = 1, l = 0, p = true, u = n.segments, o < 0 && x.v.c)
            for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), f = (d = u[c = u.length - 1].points).length - 1; o < 0; )
              o += d[f].partialLength, (f -= 1) < 0 && (f = (d = u[c -= 1].points).length - 1);
          m = (d = u[c].points)[f - 1], y = (h = d[f]).partialLength;
        }
        s = A.length, r = 0, i = 0;
        var w, D, F, I, R, V = 1.2 * t.finalSize * 0.714, B = true;
        F = S.length;
        var L, z, G, O, N, H, j, q, W, $, Y, J, X = -1, Z = o, K = c, U = f, Q = -1, tt = "", et = this.defaultPropsArray;
        if (2 === t.j || 1 === t.j) {
          var rt = 0, it = 0, at = 2 === t.j ? -0.5 : -1, st = 0, nt = true;
          for (a = 0; a < s; a += 1)
            if (A[a].n) {
              for (rt && (rt += it); st < a; )
                A[st].animatorJustifyOffset = rt, st += 1;
              rt = 0, nt = true;
            } else {
              for (D = 0; D < F; D += 1)
                (w = S[D].a).t.propType && (nt && 2 === t.j && (it += w.t.v * at), (R = S[D].s.getMult(A[a].anIndexes[D], P.a[D].s.totalChars)).length ? rt += w.t.v * R[0] * at : rt += w.t.v * R * at);
              nt = false;
            }
          for (rt && (rt += it); st < a; )
            A[st].animatorJustifyOffset = rt, st += 1;
        }
        for (a = 0; a < s; a += 1) {
          if (C.reset(), O = 1, A[a].n)
            r = 0, i += t.yOffset, i += B ? 1 : 0, o = Z, B = false, this._hasMaskedPath && (f = U, m = (d = u[c = K].points)[f - 1], y = (h = d[f]).partialLength, l = 0), tt = "", Y = "", W = "", J = "", et = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (Q !== A[a].line) {
                switch (t.j) {
                  case 1:
                    o += g - t.lineWidths[A[a].line];
                    break;
                  case 2:
                    o += (g - t.lineWidths[A[a].line]) / 2;
                }
                Q = A[a].line;
              }
              X !== A[a].ind && (A[X] && (o += A[X].extra), o += A[a].an / 2, X = A[a].ind), o += E[0] * A[a].an * 5e-3;
              var ot = 0;
              for (D = 0; D < F; D += 1)
                (w = S[D].a).p.propType && ((R = S[D].s.getMult(A[a].anIndexes[D], P.a[D].s.totalChars)).length ? ot += w.p.v[0] * R[0] : ot += w.p.v[0] * R), w.a.propType && ((R = S[D].s.getMult(A[a].anIndexes[D], P.a[D].s.totalChars)).length ? ot += w.a.v[0] * R[0] : ot += w.a.v[0] * R);
              for (p = true, this._pathData.a.v && (o = 0.5 * A[0].an + (g - this._pathData.f.v - 0.5 * A[0].an - 0.5 * A[A.length - 1].an) * X / (s - 1), o += this._pathData.f.v); p; )
                l + y >= o + ot || !d ? (v = (o + ot - l) / h.partialLength, z = m.point[0] + (h.point[0] - m.point[0]) * v, G = m.point[1] + (h.point[1] - m.point[1]) * v, C.translate(-E[0] * A[a].an * 5e-3, -E[1] * V * 0.01), p = false) : d && (l += h.partialLength, (f += 1) >= d.length && (f = 0, u[c += 1] ? d = u[c].points : x.v.c ? (f = 0, d = u[c = 0].points) : (l -= h.partialLength, d = null)), d && (m = h, y = (h = d[f]).partialLength));
              L = A[a].an / 2 - A[a].add, C.translate(-L, 0, 0);
            } else
              L = A[a].an / 2 - A[a].add, C.translate(-L, 0, 0), C.translate(-E[0] * A[a].an * 5e-3, -E[1] * V * 0.01, 0);
            for (D = 0; D < F; D += 1)
              (w = S[D].a).t.propType && (R = S[D].s.getMult(A[a].anIndexes[D], P.a[D].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? R.length ? o += w.t.v * R[0] : o += w.t.v * R : R.length ? r += w.t.v * R[0] : r += w.t.v * R));
            for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (N = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (j = [t.fc[0], t.fc[1], t.fc[2]]), D = 0; D < F; D += 1)
              (w = S[D].a).a.propType && ((R = S[D].s.getMult(A[a].anIndexes[D], P.a[D].s.totalChars)).length ? C.translate(-w.a.v[0] * R[0], -w.a.v[1] * R[1], w.a.v[2] * R[2]) : C.translate(-w.a.v[0] * R, -w.a.v[1] * R, w.a.v[2] * R));
            for (D = 0; D < F; D += 1)
              (w = S[D].a).s.propType && ((R = S[D].s.getMult(A[a].anIndexes[D], P.a[D].s.totalChars)).length ? C.scale(1 + (w.s.v[0] - 1) * R[0], 1 + (w.s.v[1] - 1) * R[1], 1) : C.scale(1 + (w.s.v[0] - 1) * R, 1 + (w.s.v[1] - 1) * R, 1));
            for (D = 0; D < F; D += 1) {
              if (w = S[D].a, R = S[D].s.getMult(A[a].anIndexes[D], P.a[D].s.totalChars), w.sk.propType && (R.length ? C.skewFromAxis(-w.sk.v * R[0], w.sa.v * R[1]) : C.skewFromAxis(-w.sk.v * R, w.sa.v * R)), w.r.propType && (R.length ? C.rotateZ(-w.r.v * R[2]) : C.rotateZ(-w.r.v * R)), w.ry.propType && (R.length ? C.rotateY(w.ry.v * R[1]) : C.rotateY(w.ry.v * R)), w.rx.propType && (R.length ? C.rotateX(w.rx.v * R[0]) : C.rotateX(w.rx.v * R)), w.o.propType && (R.length ? O += (w.o.v * R[0] - O) * R[0] : O += (w.o.v * R - O) * R), t.strokeWidthAnim && w.sw.propType && (R.length ? H += w.sw.v * R[0] : H += w.sw.v * R), t.strokeColorAnim && w.sc.propType)
                for (q = 0; q < 3; q += 1)
                  R.length ? N[q] += (w.sc.v[q] - N[q]) * R[0] : N[q] += (w.sc.v[q] - N[q]) * R;
              if (t.fillColorAnim && t.fc) {
                if (w.fc.propType)
                  for (q = 0; q < 3; q += 1)
                    R.length ? j[q] += (w.fc.v[q] - j[q]) * R[0] : j[q] += (w.fc.v[q] - j[q]) * R;
                w.fh.propType && (j = R.length ? addHueToRGB(j, w.fh.v * R[0]) : addHueToRGB(j, w.fh.v * R)), w.fs.propType && (j = R.length ? addSaturationToRGB(j, w.fs.v * R[0]) : addSaturationToRGB(j, w.fs.v * R)), w.fb.propType && (j = R.length ? addBrightnessToRGB(j, w.fb.v * R[0]) : addBrightnessToRGB(j, w.fb.v * R));
              }
            }
            for (D = 0; D < F; D += 1)
              (w = S[D].a).p.propType && (R = S[D].s.getMult(A[a].anIndexes[D], P.a[D].s.totalChars), this._hasMaskedPath ? R.length ? C.translate(0, w.p.v[1] * R[0], -w.p.v[2] * R[1]) : C.translate(0, w.p.v[1] * R, -w.p.v[2] * R) : R.length ? C.translate(w.p.v[0] * R[0], w.p.v[1] * R[1], -w.p.v[2] * R[2]) : C.translate(w.p.v[0] * R, w.p.v[1] * R, -w.p.v[2] * R));
            if (t.strokeWidthAnim && (W = H < 0 ? 0 : H), t.strokeColorAnim && ($ = "rgb(" + Math.round(255 * N[0]) + "," + Math.round(255 * N[1]) + "," + Math.round(255 * N[2]) + ")"), t.fillColorAnim && t.fc && (Y = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), this._hasMaskedPath) {
              if (C.translate(0, -t.ls), C.translate(0, E[1] * V * 0.01 + i, 0), this._pathData.p.v) {
                b = (h.point[1] - m.point[1]) / (h.point[0] - m.point[0]);
                var ht = 180 * Math.atan(b) / Math.PI;
                h.point[0] < m.point[0] && (ht += 180), C.rotate(-ht * Math.PI / 180);
              }
              C.translate(z, G, 0), o -= E[0] * A[a].an * 5e-3, A[a + 1] && X !== A[a + 1].ind && (o += A[a].an / 2, o += 1e-3 * t.tr * t.finalSize);
            } else {
              switch (C.translate(r, i, 0), t.ps && C.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                case 1:
                  C.translate(A[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[A[a].line]), 0, 0);
                  break;
                case 2:
                  C.translate(A[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[A[a].line]) / 2, 0, 0);
              }
              C.translate(0, -t.ls), C.translate(L, 0, 0), C.translate(E[0] * A[a].an * 5e-3, E[1] * V * 0.01, 0), r += A[a].l + 1e-3 * t.tr * t.finalSize;
            }
            "html" === _ ? tt = C.toCSS() : "svg" === _ ? tt = C.to2dCSS() : et = [C.props[0], C.props[1], C.props[2], C.props[3], C.props[4], C.props[5], C.props[6], C.props[7], C.props[8], C.props[9], C.props[10], C.props[11], C.props[12], C.props[13], C.props[14], C.props[15]], J = O;
          }
          k <= a ? (I = new LetterProps(J, W, $, Y, tt, et), this.renderedLetters.push(I), k += 1, this.lettersChangedFlag = true) : (I = this.renderedLetters[a], this.lettersChangedFlag = I.update(J, W, $, Y, tt, et) || this.lettersChangedFlag);
        }
      }
    }, TextAnimatorProperty.prototype.getValue = function() {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
    }, TextAnimatorProperty.prototype.mHelper = new Matrix(), TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, r) {
      this.lettersChangedFlag = true, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
    }, ITextElement.prototype.prepareFrame = function(t) {
      this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
    }, ITextElement.prototype.createPathShape = function(t, e) {
      var r, i, a = e.length, s = "";
      for (r = 0; r < a; r += 1)
        "sh" === e[r].ty && (i = e[r].ks.k, s += buildShapeString(i, i.i.length, true, t));
      return s;
    }, ITextElement.prototype.updateDocumentData = function(t, e) {
      this.textProperty.updateDocumentData(t, e);
    }, ITextElement.prototype.canResizeFont = function(t) {
      this.textProperty.canResizeFont(t);
    }, ITextElement.prototype.setMinimumFontSize = function(t) {
      this.textProperty.setMinimumFontSize(t);
    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, a) {
      switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
        case 1:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
          break;
        case 2:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0);
      }
      e.translate(i, a, 0);
    }, ITextElement.prototype.buildColor = function(t) {
      return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")";
    }, ITextElement.prototype.emptyProp = new LetterProps(), ITextElement.prototype.destroy = function() {
    }, ITextElement.prototype.validateText = function() {
      (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = false, this.textProperty._mdf = false);
    };
    var emptyShapeData = { shapes: [] };
    function SVGTextLottieElement(t, e, r) {
      this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r);
    }
    function ISolidElement(t, e, r) {
      this.initElement(t, e, r);
    }
    function NullElement(t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy();
    }
    function SVGRendererBase() {
    }
    function ICompElement() {
    }
    function SVGCompElement(t, e, r) {
      this.layers = t.layers, this.supports3d = true, this.completeLayers = false, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
    }
    function SVGRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
      var r = "";
      if (e && e.title) {
        var i = createNS("title"), a = createElementID();
        i.setAttribute("id", a), i.textContent = e.title, this.svgElement.appendChild(i), r += a;
      }
      if (e && e.description) {
        var s = createNS("desc"), n = createElementID();
        s.setAttribute("id", n), s.textContent = e.description, this.svgElement.appendChild(s), r += " " + n;
      }
      r && this.svgElement.setAttribute("aria-labelledby", r);
      var o = createNS("defs");
      this.svgElement.appendChild(o);
      var h = createNS("g");
      this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = { preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: e && e.contentVisibility || "visible", progressiveLoad: e && e.progressiveLoad || false, hideOnTransparent: !(e && false === e.hideOnTransparent), viewBoxOnly: e && e.viewBoxOnly || false, viewBoxSize: e && e.viewBoxSize || false, className: e && e.className || "", id: e && e.id || "", focusable: e && e.focusable, filterSize: { width: e && e.filterSize && e.filterSize.width || "100%", height: e && e.filterSize && e.filterSize.height || "100%", x: e && e.filterSize && e.filterSize.x || "0%", y: e && e.filterSize && e.filterSize.y || "0%" }, width: e && e.width, height: e && e.height, runExpressions: !e || void 0 === e.runExpressions || e.runExpressions }, this.globalData = { _mdf: false, frameNum: -1, defs: o, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = false, this.rendererType = "svg";
    }
    function ShapeTransformManager() {
      this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
    }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
      for (var e = 0, r = t.length, i = [], a = ""; e < r; )
        t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(a), a = "") : a += t[e], e += 1;
      return i.push(a), i;
    }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
      if (t.shapes && t.shapes.length) {
        var r = t.shapes[0];
        if (r.it) {
          var i = r.it[r.it.length - 1];
          i.s && (i.s.k[0] = e, i.s.k[1] = e);
        }
      }
      return t;
    }, SVGTextLottieElement.prototype.buildNewText = function() {
      var t, e;
      this.addDynamicProperty(this);
      var r = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
      var i = this.globalData.fontManager.getFontByName(r.f);
      if (i.fClass)
        this.layerElement.setAttribute("class", i.fClass);
      else {
        this.layerElement.setAttribute("font-family", i.fFamily);
        var a = r.fWeight, s = r.fStyle;
        this.layerElement.setAttribute("font-style", s), this.layerElement.setAttribute("font-weight", a);
      }
      this.layerElement.setAttribute("aria-label", r.t);
      var n, o = r.l || [], h = !!this.globalData.fontManager.chars;
      e = o.length;
      var l = this.mHelper, p = this.data.singleShape, f = 0, c = 0, m = true, d = 1e-3 * r.tr * r.finalSize;
      if (!p || h || r.sz) {
        var u, y = this.textSpans.length;
        for (t = 0; t < e; t += 1) {
          if (this.textSpans[t] || (this.textSpans[t] = { span: null, childSpan: null, glyph: null }), !h || !p || 0 === t) {
            if (n = y > t ? this.textSpans[t].span : createNS(h ? "g" : "text"), y <= t) {
              if (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = n, h) {
                var g = createNS("g");
                n.appendChild(g), this.textSpans[t].childSpan = g;
              }
              this.textSpans[t].span = n, this.layerElement.appendChild(n);
            }
            n.style.display = "inherit";
          }
          if (l.reset(), p && (o[t].n && (f = -d, c += r.yOffset, c += m ? 1 : 0, m = false), this.applyTextPropertiesToMatrix(r, l, o[t].line, f, c), f += o[t].l || 0, f += d), h) {
            var v;
            if (1 === (u = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t)
              v = new SVGCompElement(u.data, this.globalData, this);
            else {
              var b = emptyShapeData;
              u.data && u.data.shapes && (b = this.buildShapeData(u.data, r.finalSize)), v = new SVGShapeElement(b, this.globalData, this);
            }
            if (this.textSpans[t].glyph) {
              var x = this.textSpans[t].glyph;
              this.textSpans[t].childSpan.removeChild(x.layerElement), x.destroy();
            }
            this.textSpans[t].glyph = v, v._debug = true, v.prepareFrame(0), v.renderFrame(), this.textSpans[t].childSpan.appendChild(v.layerElement), 1 === u.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")");
          } else
            p && n.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        }
        p && n && n.setAttribute("d", "");
      } else {
        var E = this.textContainer, S = "start";
        switch (r.j) {
          case 1:
            S = "end";
            break;
          case 2:
            S = "middle";
            break;
          default:
            S = "start";
        }
        E.setAttribute("text-anchor", S), E.setAttribute("letter-spacing", d);
        var P = this.buildTextContents(r.finalText);
        for (e = P.length, c = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)
          (n = this.textSpans[t].span || createNS("tspan")).textContent = P[t], n.setAttribute("x", 0), n.setAttribute("y", c), n.style.display = "inherit", E.appendChild(n), this.textSpans[t] || (this.textSpans[t] = { span: null, glyph: null }), this.textSpans[t].span = n, c += r.finalLineHeight;
        this.layerElement.appendChild(E);
      }
      for (; t < this.textSpans.length; )
        this.textSpans[t].span.style.display = "none", t += 1;
      this._sizeChanged = true;
    }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = false;
        var t = this.layerElement.getBBox();
        this.bbox = { top: t.y, left: t.x, width: t.width, height: t.height };
      }
      return this.bbox;
    }, SVGTextLottieElement.prototype.getValue = function() {
      var t, e, r = this.textSpans.length;
      for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < r; t += 1)
        (e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = true));
    }, SVGTextLottieElement.prototype.renderInnerContent = function() {
      if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        var t, e;
        this._sizeChanged = true;
        var r, i, a, s = this.textAnimator.renderedLetters, n = this.textProperty.currentData.l;
        for (e = n.length, t = 0; t < e; t += 1)
          n[t].n || (r = s[t], i = this.textSpans[t].span, (a = this.textSpans[t].glyph) && a.renderFrame(), r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc));
      }
    }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
      var t = createNS("rect");
      t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
    }, NullElement.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, true);
    }, NullElement.prototype.renderFrame = function() {
    }, NullElement.prototype.getBaseElement = function() {
      return null;
    }, NullElement.prototype.destroy = function() {
    }, NullElement.prototype.sourceRectAtTime = function() {
    }, NullElement.prototype.hide = function() {
    }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
      return new NullElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createShape = function(t) {
      return new SVGShapeElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createText = function(t) {
      return new SVGTextLottieElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createImage = function(t) {
      return new IImageElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createSolid = function(t) {
      return new ISolidElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.configAnimation = function(t) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var e = this.globalData.defs;
      this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
      var r = createNS("clipPath"), i = createNS("rect");
      i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
      var a = createElementID();
      r.setAttribute("id", a), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length);
    }, SVGRendererBase.prototype.destroy = function() {
      var t;
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
      var e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1)
        this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = true, this.animationItem = null;
    }, SVGRendererBase.prototype.updateContainerSize = function() {
    }, SVGRendererBase.prototype.findIndexByInd = function(t) {
      var e = 0, r = this.layers.length;
      for (e = 0; e < r; e += 1)
        if (this.layers[e].ind === t)
          return e;
      return -1;
    }, SVGRendererBase.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!e[t] && 99 !== this.layers[t].ty) {
        e[t] = true;
        var r = this.createItem(this.layers[t]);
        if (e[t] = r, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt) {
          var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
          if (-1 === i)
            return;
          if (this.elements[i] && true !== this.elements[i]) {
            var a = e[i].getMatte(this.layers[t].tt);
            r.setMatte(a);
          } else
            this.buildItem(i), this.addPendingElement(r);
        }
      }
    }, SVGRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        if (t.checkParenting(), t.data.tt)
          for (var e = 0, r = this.elements.length; e < r; ) {
            if (this.elements[e] === t) {
              var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, a = this.elements[i].getMatte(this.layers[e].tt);
              t.setMatte(a);
              break;
            }
            e += 1;
          }
      }
    }, SVGRendererBase.prototype.renderFrame = function(t) {
      if (this.renderedFrame !== t && !this.destroyed) {
        var e;
        null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = false;
        var r = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1)
          (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
        if (this.globalData._mdf)
          for (e = 0; e < r; e += 1)
            (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
      }
    }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
      var r = t.getBaseElement();
      if (r) {
        for (var i, a = 0; a < e; )
          this.elements[a] && true !== this.elements[a] && this.elements[a].getBaseElement() && (i = this.elements[a].getBaseElement()), a += 1;
        i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r);
      }
    }, SVGRendererBase.prototype.hide = function() {
      this.layerElement.style.display = "none";
    }, SVGRendererBase.prototype.show = function() {
      this.layerElement.style.display = "block";
    }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide();
    }, ICompElement.prototype.prepareFrame = function(t) {
      if (this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
        if (this.tm._placeholder)
          this.renderedFrame = t / this.data.sr;
        else {
          var e = this.tm.v;
          e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
        }
        var r, i = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)
          (this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = true));
      }
    }, ICompElement.prototype.renderInnerContent = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1)
        (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
    }, ICompElement.prototype.setElements = function(t) {
      this.elements = t;
    }, ICompElement.prototype.getElements = function() {
      return this.elements;
    }, ICompElement.prototype.destroyElements = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1)
        this.elements[t] && this.elements[t].destroy();
    }, ICompElement.prototype.destroy = function() {
      this.destroyElements(), this.destroyBaseElement();
    }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
      return new SVGCompElement(t, this.globalData, this);
    }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
      return new SVGCompElement(t, this.globalData, this);
    }, ShapeTransformManager.prototype = { addTransformSequence: function(t) {
      var e, r = t.length, i = "_";
      for (e = 0; e < r; e += 1)
        i += t[e].transform.key + "_";
      var a = this.sequences[i];
      return a || (a = { transforms: [].concat(t), finalTransform: new Matrix(), _mdf: false }, this.sequences[i] = a, this.sequenceList.push(a)), a;
    }, processSequence: function(t, e) {
      for (var r = 0, i = t.transforms.length, a = e; r < i && !e; ) {
        if (t.transforms[r].transform.mProps._mdf) {
          a = true;
          break;
        }
        r += 1;
      }
      if (a)
        for (t.finalTransform.reset(), r = i - 1; r >= 0; r -= 1)
          t.finalTransform.multiply(t.transforms[r].transform.mProps.v);
      t._mdf = a;
    }, processSequences: function(t) {
      var e, r = this.sequenceList.length;
      for (e = 0; e < r; e += 1)
        this.processSequence(this.sequenceList[e], t);
    }, getNewKey: function() {
      return this.transform_key_count += 1, "_" + this.transform_key_count;
    } };
    var lumaLoader = function() {
      var t = "__lottie_element_luma_buffer", e = null, r = null, i = null;
      function a() {
        var a2, s, n;
        e || (a2 = createNS("svg"), s = createNS("filter"), n = createNS("feColorMatrix"), s.setAttribute("id", t), n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), s.appendChild(n), a2.appendChild(s), a2.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (a2.style.display = "none"), i = a2, document.body.appendChild(i), e = createTag("canvas"), (r = e.getContext("2d")).filter = "url(#" + t + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1));
      }
      return { load: a, get: function(i2) {
        return e || a(), e.width = i2.width, e.height = i2.height, r.filter = "url(#" + t + ")", e;
      } };
    };
    function createCanvas(t, e) {
      if (featureSupport.offscreenCanvas)
        return new OffscreenCanvas(t, e);
      var r = createTag("canvas");
      return r.width = t, r.height = e, r;
    }
    var assetLoader = { loadLumaCanvas: lumaLoader.load, getLumaCanvas: lumaLoader.get, createCanvas }, registeredEffects = {};
    function CVEffects(t) {
      var e, r, i = t.data.ef ? t.data.ef.length : 0;
      for (this.filters = [], e = 0; e < i; e += 1) {
        r = null;
        var a = t.data.ef[e].ty;
        if (registeredEffects[a])
          r = new (0, registeredEffects[a].effect)(t.effectsManager.effectElements[e], t);
        r && this.filters.push(r);
      }
      this.filters.length && t.addRenderableComponent(this);
    }
    function registerEffect(t, e) {
      registeredEffects[t] = { effect: e };
    }
    function CVMaskElement(t, e) {
      var r;
      this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
      var i = this.masksProperties.length, a = false;
      for (r = 0; r < i; r += 1)
        "n" !== this.masksProperties[r].mode && (a = true), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
      this.hasMasks = a, a && this.element.addRenderableComponent(this);
    }
    function CVBaseElement() {
    }
    CVEffects.prototype.renderFrame = function(t) {
      var e, r = this.filters.length;
      for (e = 0; e < r; e += 1)
        this.filters[e].renderFrame(t);
    }, CVEffects.prototype.getEffects = function(t) {
      var e, r = this.filters.length, i = [];
      for (e = 0; e < r; e += 1)
        this.filters[e].type === t && i.push(this.filters[e]);
      return i;
    }, CVMaskElement.prototype.renderFrame = function() {
      if (this.hasMasks) {
        var t, e, r, i, a = this.element.finalTransform.mat, s = this.element.canvasContext, n = this.masksProperties.length;
        for (s.beginPath(), t = 0; t < n; t += 1)
          if ("n" !== this.masksProperties[t].mode) {
            var o;
            this.masksProperties[t].inv && (s.moveTo(0, 0), s.lineTo(this.element.globalData.compSize.w, 0), s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), s.lineTo(0, this.element.globalData.compSize.h), s.lineTo(0, 0)), i = this.viewData[t].v, e = a.applyToPointArray(i.v[0][0], i.v[0][1], 0), s.moveTo(e[0], e[1]);
            var h = i._length;
            for (o = 1; o < h; o += 1)
              r = a.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), s.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
            r = a.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), s.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
          }
        this.element.globalData.renderer.save(true), s.clip();
      }
    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
      this.element = null;
    };
    var operationsMap = { 1: "source-in", 2: "source-out", 3: "source-in", 4: "source-out" };
    function CVShapeData(t, e, r, i) {
      this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
      var a, s = 4;
      "rc" === e.ty ? s = 5 : "el" === e.ty ? s = 6 : "sr" === e.ty && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
      var n, o = r.length;
      for (a = 0; a < o; a += 1)
        r[a].closed || (n = { transforms: i.addTransformSequence(r[a].transforms), trNodes: [] }, this.styledShapes.push(n), r[a].elements.push(n));
    }
    function CVShapeElement(t, e, r) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager(), this.initElement(t, e, r);
    }
    function CVTextElement(t, e, r) {
      this.textSpans = [], this.yOffset = 0, this.fillColorAnim = false, this.strokeColorAnim = false, this.strokeWidthAnim = false, this.stroke = false, this.fill = false, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }, this.initElement(t, e, r);
    }
    function CVImageElement(t, e, r) {
      this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r);
    }
    function CVSolidElement(t, e, r) {
      this.initElement(t, e, r);
    }
    function CanvasRendererBase() {
    }
    function CanvasContext() {
      this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random();
    }
    function CVContextData() {
      var t;
      this.stack = [], this.cArrPos = 0, this.cTr = new Matrix();
      for (t = 0; t < 15; t += 1) {
        var e = new CanvasContext();
        this.stack[t] = e;
      }
      this._length = 15, this.nativeContext = null, this.transformMat = new Matrix(), this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = "";
    }
    function CVCompElement(t, e, r) {
      this.completeLayers = false, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
    }
    function CanvasRenderer(t, e) {
      this.animationItem = t, this.renderConfig = { clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas, context: e && e.context || null, progressiveLoad: e && e.progressiveLoad || false, preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: e && e.contentVisibility || "visible", className: e && e.className || "", id: e && e.id || "", runExpressions: !e || void 0 === e.runExpressions || e.runExpressions }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = { frameNum: -1, _mdf: false, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = false, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData));
    }
    function HBaseElement() {
    }
    function HSolidElement(t, e, r) {
      this.initElement(t, e, r);
    }
    function HShapeElement(t, e, r) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 };
    }
    function HTextElement(t, e, r) {
      this.textSpans = [], this.textPaths = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }, this.renderType = "svg", this.isMasked = false, this.initElement(t, e, r);
    }
    function HCameraElement(t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
      var i = PropertyFactory.getProp;
      if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
        var a, s = t.ks.or.k.length;
        for (a = 0; a < s; a += 1)
          t.ks.or.k[a].to = null, t.ks.or.k[a].ti = null;
      }
      this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = true, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix(), this._prevMat = new Matrix(), this._isFirstFrame = true, this.finalTransform = { mProp: this };
    }
    function HImageElement(t, e, r) {
      this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r);
    }
    function HybridRendererBase(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: e && e.className || "", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(e && false === e.hideOnTransparent), filterSize: { width: e && e.filterSize && e.filterSize.width || "400%", height: e && e.filterSize && e.filterSize.height || "400%", x: e && e.filterSize && e.filterSize.x || "-100%", y: e && e.filterSize && e.filterSize.y || "-100%" } }, this.globalData = { _mdf: false, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = false, this.camera = null, this.supports3d = true, this.rendererType = "html";
    }
    function HCompElement(t, e, r) {
      this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = false, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
    }
    function HybridRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: e && e.className || "", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(e && false === e.hideOnTransparent), filterSize: { width: e && e.filterSize && e.filterSize.width || "400%", height: e && e.filterSize && e.filterSize.height || "400%", x: e && e.filterSize && e.filterSize.x || "-100%", y: e && e.filterSize && e.filterSize.y || "-100%" }, runExpressions: !e || void 0 === e.runExpressions || e.runExpressions }, this.globalData = { _mdf: false, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = false, this.camera = null, this.supports3d = true, this.rendererType = "html";
    }
    CVBaseElement.prototype = { createElements: function() {
    }, initRendererElement: function() {
    }, createContainerElements: function() {
      if (this.data.tt >= 1) {
        this.buffers = [];
        var t = this.globalData.canvasContext, e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
        this.buffers.push(e);
        var r = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
        this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas();
      }
      this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms();
    }, createContent: function() {
    }, setBlendMode: function() {
      var t = this.globalData;
      if (t.blendMode !== this.data.bm) {
        t.blendMode = this.data.bm;
        var e = getBlendMode(this.data.bm);
        t.canvasContext.globalCompositeOperation = e;
      }
    }, createRenderableComponents: function() {
      this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
    }, hideElement: function() {
      this.hidden || this.isInRange && !this.isTransparent || (this.hidden = true);
    }, showElement: function() {
      this.isInRange && !this.isTransparent && (this.hidden = false, this._isFirstFrame = true, this.maskManager._isFirstFrame = true);
    }, clearCanvas: function(t) {
      t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
    }, prepareLayer: function() {
      if (this.data.tt >= 1) {
        var t = this.buffers[0].getContext("2d");
        this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
      }
    }, exitLayer: function() {
      if (this.data.tt >= 1) {
        var t = this.buffers[1], e = t.getContext("2d");
        if (this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(true), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
          var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
          r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0);
        }
        this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over";
      }
    }, renderFrame: function(t) {
      if (!this.hidden && !this.data.hd && (1 !== this.data.td || t)) {
        this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
        var e = 0 === this.data.ty;
        this.prepareLayer(), this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(e), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(true), this._isFirstFrame && (this._isFirstFrame = false);
      }
    }, destroy: function() {
      this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
    }, mHelper: new Matrix() }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: false }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
    }, CVShapeElement.prototype.createStyleElement = function(t, e) {
      var r = { data: t, type: t.ty, preTransforms: this.transformsManager.addTransformSequence(e), transforms: [], elements: [], closed: true === t.hd }, i = {};
      if ("fl" === t.ty || "st" === t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || { k: 0 }, 0, 0.01, this), i.a = PropertyFactory.getProp(this, t.a || { k: 0 }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this), "st" === t.ty || "gs" === t.ty) {
        if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
          var a = new DashProperty(this, t.d, "canvas", this);
          i.d = a, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0]);
        }
      } else
        r.r = 2 === t.r ? "evenodd" : "nonzero";
      return this.stylesList.push(r), i.style = r, i;
    }, CVShapeElement.prototype.createGroupElement = function() {
      return { it: [], prevViewData: [] };
    }, CVShapeElement.prototype.createTransformElement = function(t) {
      return { transform: { opacity: 1, _opMdf: false, key: this.transformsManager.getNewKey(), op: PropertyFactory.getProp(this, t.o, 0, 0.01, this), mProps: TransformPropertyFactory.getTransformProperty(this, t, this) } };
    }, CVShapeElement.prototype.createShapeElement = function(t) {
      var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
      return this.shapes.push(e), this.addShapeToModifiers(e), e;
    }, CVShapeElement.prototype.reloadShapes = function() {
      var t;
      this._isFirstFrame = true;
      var e = this.itemsData.length;
      for (t = 0; t < e; t += 1)
        this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1)
        this.dynamicProperties[t].getValue();
      this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
    }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
      var e, r = this.stylesList.length;
      for (e = 0; e < r; e += 1)
        this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
    }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
      var t, e = this.stylesList.length;
      for (t = 0; t < e; t += 1)
        this.stylesList[t].closed || this.stylesList[t].transforms.pop();
    }, CVShapeElement.prototype.closeStyles = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1)
        t[e].closed = true;
    }, CVShapeElement.prototype.searchShapes = function(t, e, r, i, a) {
      var s, n, o, h, l, p, f = t.length - 1, c = [], m = [], d = [].concat(a);
      for (s = f; s >= 0; s -= 1) {
        if ((h = this.searchProcessedElement(t[s])) ? e[s] = r[h - 1] : t[s]._shouldRender = i, "fl" === t[s].ty || "st" === t[s].ty || "gf" === t[s].ty || "gs" === t[s].ty)
          h ? e[s].style.closed = false : e[s] = this.createStyleElement(t[s], d), c.push(e[s].style);
        else if ("gr" === t[s].ty) {
          if (h)
            for (o = e[s].it.length, n = 0; n < o; n += 1)
              e[s].prevViewData[n] = e[s].it[n];
          else
            e[s] = this.createGroupElement(t[s]);
          this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, i, d);
        } else
          "tr" === t[s].ty ? (h || (p = this.createTransformElement(t[s]), e[s] = p), d.push(e[s]), this.addTransformToStyleList(e[s])) : "sh" === t[s].ty || "rc" === t[s].ty || "el" === t[s].ty || "sr" === t[s].ty ? h || (e[s] = this.createShapeElement(t[s])) : "tm" === t[s].ty || "rd" === t[s].ty || "pb" === t[s].ty || "zz" === t[s].ty || "op" === t[s].ty ? (h ? (l = e[s]).closed = false : ((l = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = l, this.shapeModifiers.push(l)), m.push(l)) : "rp" === t[s].ty && (h ? (l = e[s]).closed = true : (l = ShapeModifiers.getModifier(t[s].ty), e[s] = l, l.init(this, t, s, e), this.shapeModifiers.push(l), i = false), m.push(l));
        this.addProcessedElement(t[s], s + 1);
      }
      for (this.removeTransformFromStyleList(), this.closeStyles(c), f = m.length, s = 0; s < f; s += 1)
        m[s].closed = true;
    }, CVShapeElement.prototype.renderInnerContent = function() {
      this.transformHelper.opacity = 1, this.transformHelper._opMdf = false, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, true);
    }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
      (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = true);
    }, CVShapeElement.prototype.drawLayer = function() {
      var t, e, r, i, a, s, n, o, h, l = this.stylesList.length, p = this.globalData.renderer, f = this.globalData.canvasContext;
      for (t = 0; t < l; t += 1)
        if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
          for (p.save(), s = h.elements, "st" === o || "gs" === o ? (p.ctxStrokeStyle("st" === o ? h.co : h.grd), p.ctxLineWidth(h.wi), p.ctxLineCap(h.lc), p.ctxLineJoin(h.lj), p.ctxMiterLimit(h.ml || 0)) : p.ctxFillStyle("fl" === o ? h.co : h.grd), p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && f.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), r = s.length, e = 0; e < r; e += 1) {
            for ("st" !== o && "gs" !== o || (f.beginPath(), h.da && (f.setLineDash(h.da), f.lineDashOffset = h.do)), a = (n = s[e].trNodes).length, i = 0; i < a; i += 1)
              "m" === n[i].t ? f.moveTo(n[i].p[0], n[i].p[1]) : "c" === n[i].t ? f.bezierCurveTo(n[i].pts[0], n[i].pts[1], n[i].pts[2], n[i].pts[3], n[i].pts[4], n[i].pts[5]) : f.closePath();
            "st" !== o && "gs" !== o || (p.ctxStroke(), h.da && f.setLineDash(this.dashResetter));
          }
          "st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(h.r), p.restore();
        }
    }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
      var a, s;
      for (s = t, a = e.length - 1; a >= 0; a -= 1)
        "tr" === e[a].ty ? (s = r[a].transform, this.renderShapeTransform(t, s)) : "sh" === e[a].ty || "el" === e[a].ty || "rc" === e[a].ty || "sr" === e[a].ty ? this.renderPath(e[a], r[a]) : "fl" === e[a].ty ? this.renderFill(e[a], r[a], s) : "st" === e[a].ty ? this.renderStroke(e[a], r[a], s) : "gf" === e[a].ty || "gs" === e[a].ty ? this.renderGradientFill(e[a], r[a], s) : "gr" === e[a].ty ? this.renderShape(s, e[a].it, r[a].it) : e[a].ty;
      i && this.drawLayer();
    }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
      if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
        var r, i, a, s = t.trNodes, n = e.paths, o = n._length;
        s.length = 0;
        var h = t.transforms.finalTransform;
        for (a = 0; a < o; a += 1) {
          var l = n.shapes[a];
          if (l && l.v) {
            for (i = l._length, r = 1; r < i; r += 1)
              1 === r && s.push({ t: "m", p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0) }), s.push({ t: "c", pts: h.applyToTriplePoints(l.o[r - 1], l.i[r], l.v[r]) });
            1 === i && s.push({ t: "m", p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0) }), l.c && i && (s.push({ t: "c", pts: h.applyToTriplePoints(l.o[r - 1], l.i[0], l.v[0]) }), s.push({ t: "z" }));
          }
        }
        t.trNodes = s;
      }
    }, CVShapeElement.prototype.renderPath = function(t, e) {
      if (true !== t.hd && t._shouldRender) {
        var r, i = e.styledShapes.length;
        for (r = 0; r < i; r += 1)
          this.renderStyledShape(e.styledShapes[r], e.sh);
      }
    }, CVShapeElement.prototype.renderFill = function(t, e, r) {
      var i = e.style;
      (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity);
    }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
      var i, a = e.style;
      if (!a.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
        var s, n = this.globalData.canvasContext, o = e.s.v, h = e.e.v;
        if (1 === t.t)
          i = n.createLinearGradient(o[0], o[1], h[0], h[1]);
        else {
          var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)), p = Math.atan2(h[1] - o[1], h[0] - o[0]), f = e.h.v;
          f >= 1 ? f = 0.99 : f <= -1 && (f = -0.99);
          var c = l * f, m = Math.cos(p + e.a.v) * c + o[0], d = Math.sin(p + e.a.v) * c + o[1];
          i = n.createRadialGradient(m, d, 0, o[0], o[1], l);
        }
        var u = t.g.p, y = e.g.c, g = 1;
        for (s = 0; s < u; s += 1)
          e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * s + 1]), i.addColorStop(y[4 * s] / 100, "rgba(" + y[4 * s + 1] + "," + y[4 * s + 2] + "," + y[4 * s + 3] + "," + g + ")");
        a.grd = i;
      }
      a.coOp = e.o.v * r.opacity;
    }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
      var i = e.style, a = e.d;
      a && (a._mdf || this._isFirstFrame) && (i.da = a.dashArray, i.do = a.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v);
    }, CVShapeElement.prototype.destroy = function() {
      this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
      var t = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
      var e = false;
      t.fc ? (e = true, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
      var r = false;
      t.sc && (r = true, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
      var i, a, s, n, o, h, l, p, f, c, m, d, u = this.globalData.fontManager.getFontByName(t.f), y = t.l, g = this.mHelper;
      this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, a = t.finalText.length;
      var v = this.data.singleShape, b = 1e-3 * t.tr * t.finalSize, x = 0, E = 0, S = true, P = 0;
      for (i = 0; i < a; i += 1) {
        n = (s = this.globalData.fontManager.getCharData(t.finalText[i], u.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && s.data || {}, g.reset(), v && y[i].n && (x = -b, E += t.yOffset, E += S ? 1 : 0, S = false), f = (l = n.shapes ? n.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, g, y[i].line, x, E), m = createSizedArray(f - 1);
        var C = 0;
        for (p = 0; p < f; p += 1)
          if ("sh" === l[p].ty) {
            for (h = l[p].ks.k.i.length, c = l[p].ks.k, d = [], o = 1; o < h; o += 1)
              1 === o && d.push(g.applyToX(c.v[0][0], c.v[0][1], 0), g.applyToY(c.v[0][0], c.v[0][1], 0)), d.push(g.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToX(c.i[o][0], c.i[o][1], 0), g.applyToY(c.i[o][0], c.i[o][1], 0), g.applyToX(c.v[o][0], c.v[o][1], 0), g.applyToY(c.v[o][0], c.v[o][1], 0));
            d.push(g.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToX(c.i[0][0], c.i[0][1], 0), g.applyToY(c.i[0][0], c.i[0][1], 0), g.applyToX(c.v[0][0], c.v[0][1], 0), g.applyToY(c.v[0][0], c.v[0][1], 0)), m[C] = d, C += 1;
          }
        v && (x += y[i].l, x += b), this.textSpans[P] ? this.textSpans[P].elem = m : this.textSpans[P] = { elem: m }, P += 1;
      }
    }, CVTextElement.prototype.renderInnerContent = function() {
      var t, e, r, i, a, s;
      this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
      var n, o = this.textAnimator.renderedLetters, h = this.textProperty.currentData.l;
      e = h.length;
      var l, p, f = null, c = null, m = null, d = this.globalData.renderer;
      for (t = 0; t < e; t += 1)
        if (!h[t].n) {
          if ((n = o[t]) && (d.save(), d.ctxTransform(n.p), d.ctxOpacity(n.o)), this.fill) {
            for (n && n.fc ? f !== n.fc && (d.ctxFillStyle(n.fc), f = n.fc) : f !== this.values.fill && (f = this.values.fill, d.ctxFillStyle(this.values.fill)), i = (l = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
              for (s = (p = l[r]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), a = 2; a < s; a += 6)
                this.globalData.canvasContext.bezierCurveTo(p[a], p[a + 1], p[a + 2], p[a + 3], p[a + 4], p[a + 5]);
            this.globalData.canvasContext.closePath(), d.ctxFill();
          }
          if (this.stroke) {
            for (n && n.sw ? m !== n.sw && (m = n.sw, d.ctxLineWidth(n.sw)) : m !== this.values.sWidth && (m = this.values.sWidth, d.ctxLineWidth(this.values.sWidth)), n && n.sc ? c !== n.sc && (c = n.sc, d.ctxStrokeStyle(n.sc)) : c !== this.values.stroke && (c = this.values.stroke, d.ctxStrokeStyle(this.values.stroke)), i = (l = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
              for (s = (p = l[r]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), a = 2; a < s; a += 6)
                this.globalData.canvasContext.bezierCurveTo(p[a], p[a + 1], p[a + 2], p[a + 3], p[a + 4], p[a + 5]);
            this.globalData.canvasContext.closePath(), d.ctxStroke();
          }
          n && this.globalData.renderer.restore();
        }
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
      if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
        var t = createTag("canvas");
        t.width = this.assetData.w, t.height = this.assetData.h;
        var e, r, i = t.getContext("2d"), a = this.img.width, s = this.img.height, n = a / s, o = this.assetData.w / this.assetData.h, h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
        n > o && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (r = s) * o : r = (e = a) / o, i.drawImage(this.img, (a - e) / 2, (s - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t;
      }
    }, CVImageElement.prototype.renderInnerContent = function() {
      this.canvasContext.drawImage(this.img, 0, 0);
    }, CVImageElement.prototype.destroy = function() {
      this.img = null;
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
      this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
    }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
      return new CVShapeElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createText = function(t) {
      return new CVTextElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createImage = function(t) {
      return new CVImageElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createSolid = function(t) {
      return new CVSolidElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
      1 === t[0] && 0 === t[1] && 0 === t[4] && 1 === t[5] && 0 === t[12] && 0 === t[13] || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
    }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
      this.canvasContext.globalAlpha *= t < 0 ? 0 : t;
    }, CanvasRendererBase.prototype.ctxFillStyle = function(t) {
      this.canvasContext.fillStyle = t;
    }, CanvasRendererBase.prototype.ctxStrokeStyle = function(t) {
      this.canvasContext.strokeStyle = t;
    }, CanvasRendererBase.prototype.ctxLineWidth = function(t) {
      this.canvasContext.lineWidth = t;
    }, CanvasRendererBase.prototype.ctxLineCap = function(t) {
      this.canvasContext.lineCap = t;
    }, CanvasRendererBase.prototype.ctxLineJoin = function(t) {
      this.canvasContext.lineJoin = t;
    }, CanvasRendererBase.prototype.ctxMiterLimit = function(t) {
      this.canvasContext.miterLimit = t;
    }, CanvasRendererBase.prototype.ctxFill = function(t) {
      this.canvasContext.fill(t);
    }, CanvasRendererBase.prototype.ctxFillRect = function(t, e, r, i) {
      this.canvasContext.fillRect(t, e, r, i);
    }, CanvasRendererBase.prototype.ctxStroke = function() {
      this.canvasContext.stroke();
    }, CanvasRendererBase.prototype.reset = function() {
      this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
    }, CanvasRendererBase.prototype.save = function() {
      this.canvasContext.save();
    }, CanvasRendererBase.prototype.restore = function(t) {
      this.renderConfig.clearCanvas ? (t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t)) : this.canvasContext.restore();
    }, CanvasRendererBase.prototype.configAnimation = function(t) {
      if (this.animationItem.wrapper) {
        this.animationItem.container = createTag("canvas");
        var e = this.animationItem.container.style;
        e.width = "100%", e.height = "100%";
        var r = "0px 0px 0px";
        e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
      } else
        this.canvasContext = this.renderConfig.context;
      this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = { w: t.w, h: t.h, sx: 0, sy: 0, tx: 0, ty: 0 }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = false, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize();
    }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
      var r, i, a, s;
      if (this.reset(), t ? (r = t, i = e, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
        var n = this.renderConfig.preserveAspectRatio.split(" "), o = n[1] || "meet", h = n[0] || "xMidYMid", l = h.substr(0, 4), p = h.substr(4);
        a = r / i, (s = this.transformCanvas.w / this.transformCanvas.h) > a && "meet" === o || s < a && "slice" === o ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === l && (s < a && "meet" === o || s > a && "slice" === o) ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === l && (s < a && "meet" === o || s > a && "slice" === o) ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === p && (s > a && "meet" === o || s < a && "slice" === o) ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === p && (s > a && "meet" === o || s < a && "slice" === o) ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0;
      } else
        "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
      this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, true);
    }, CanvasRendererBase.prototype.destroy = function() {
      var t;
      for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1)
        this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = true;
    }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
      if ((this.renderedFrame !== t || true !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
        var r;
        this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
        var i = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), r = i - 1; r >= 0; r -= 1)
          (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
        if (this.globalData._mdf) {
          for (true === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)
            (this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
          true !== this.renderConfig.clearCanvas && this.restore();
        }
      }
    }, CanvasRendererBase.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!e[t] && 99 !== this.layers[t].ty) {
        var r = this.createItem(this.layers[t], this, this.globalData);
        e[t] = r, r.initExpressions();
      }
    }, CanvasRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        this.pendingElements.pop().checkParenting();
      }
    }, CanvasRendererBase.prototype.hide = function() {
      this.animationItem.container.style.display = "none";
    }, CanvasRendererBase.prototype.show = function() {
      this.animationItem.container.style.display = "block";
    }, CVContextData.prototype.duplicate = function() {
      var t = 2 * this._length, e = 0;
      for (e = this._length; e < t; e += 1)
        this.stack[e] = new CanvasContext();
      this._length = t;
    }, CVContextData.prototype.reset = function() {
      this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1;
    }, CVContextData.prototype.restore = function(t) {
      this.cArrPos -= 1;
      var e, r = this.stack[this.cArrPos], i = r.transform, a = this.cTr.props;
      for (e = 0; e < 16; e += 1)
        a[e] = i[e];
      if (t) {
        this.nativeContext.restore();
        var s = this.stack[this.cArrPos + 1];
        this.appliedFillStyle = s.fillStyle, this.appliedStrokeStyle = s.strokeStyle, this.appliedLineWidth = s.lineWidth, this.appliedLineCap = s.lineCap, this.appliedLineJoin = s.lineJoin, this.appliedMiterLimit = s.miterLimit;
      }
      this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), (t || -1 !== r.opacity && this.currentOpacity !== r.opacity) && (this.nativeContext.globalAlpha = r.opacity, this.currentOpacity = r.opacity), this.currentFillStyle = r.fillStyle, this.currentStrokeStyle = r.strokeStyle, this.currentLineWidth = r.lineWidth, this.currentLineCap = r.lineCap, this.currentLineJoin = r.lineJoin, this.currentMiterLimit = r.miterLimit;
    }, CVContextData.prototype.save = function(t) {
      t && this.nativeContext.save();
      var e = this.cTr.props;
      this._length <= this.cArrPos && this.duplicate();
      var r, i = this.stack[this.cArrPos];
      for (r = 0; r < 16; r += 1)
        i.transform[r] = e[r];
      this.cArrPos += 1;
      var a = this.stack[this.cArrPos];
      a.opacity = i.opacity, a.fillStyle = i.fillStyle, a.strokeStyle = i.strokeStyle, a.lineWidth = i.lineWidth, a.lineCap = i.lineCap, a.lineJoin = i.lineJoin, a.miterLimit = i.miterLimit;
    }, CVContextData.prototype.setOpacity = function(t) {
      this.stack[this.cArrPos].opacity = t;
    }, CVContextData.prototype.setContext = function(t) {
      this.nativeContext = t;
    }, CVContextData.prototype.fillStyle = function(t) {
      this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t);
    }, CVContextData.prototype.strokeStyle = function(t) {
      this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t);
    }, CVContextData.prototype.lineWidth = function(t) {
      this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t);
    }, CVContextData.prototype.lineCap = function(t) {
      this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t);
    }, CVContextData.prototype.lineJoin = function(t) {
      this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t);
    }, CVContextData.prototype.miterLimit = function(t) {
      this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t);
    }, CVContextData.prototype.transform = function(t) {
      this.transformMat.cloneFromProps(t);
      var e = this.cTr;
      this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
      var r = e.props;
      this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]);
    }, CVContextData.prototype.opacity = function(t) {
      var e = this.stack[this.cArrPos].opacity;
      e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e);
    }, CVContextData.prototype.fill = function(t) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t);
    }, CVContextData.prototype.fillRect = function(t, e, r, i) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, r, i);
    }, CVContextData.prototype.stroke = function() {
      this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke();
    }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
      var t, e = this.canvasContext;
      for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)
        (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
    }, CVCompElement.prototype.destroy = function() {
      var t;
      for (t = this.layers.length - 1; t >= 0; t -= 1)
        this.elements[t] && this.elements[t].destroy();
      this.layers = null, this.elements = null;
    }, CVCompElement.prototype.createComp = function(t) {
      return new CVCompElement(t, this.globalData, this);
    }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
      return new CVCompElement(t, this.globalData, this);
    }, HBaseElement.prototype = { checkBlendMode: function() {
    }, initRendererElement: function() {
      this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
    }, createContainerElements: function() {
      this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode();
    }, renderElement: function() {
      var t = this.transformedElement ? this.transformedElement.style : {};
      if (this.finalTransform._matMdf) {
        var e = this.finalTransform.mat.toCSS();
        t.transform = e, t.webkitTransform = e;
      }
      this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v);
    }, renderFrame: function() {
      this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = false));
    }, destroy: function() {
      this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
    }, createRenderableComponents: function() {
      this.maskManager = new MaskElement(this.data, this, this.globalData);
    }, addEffects: function() {
    }, setMatte: function() {
    } }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
      var t;
      this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t);
    }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
      var t;
      if (this.baseElement.style.fontSize = 0, this.data.hasMask)
        this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
      else {
        t = createNS("svg");
        var e = this.comp.data ? this.comp.data : this.globalData.compSize;
        t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t);
      }
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], true), this.filterUniqueShapes(), this.shapeCont = t;
    }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
      var r, i = t.length;
      for (r = 0; r < i; r += 1)
        e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
      return e;
    }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
      var r, i, a, s, n, o = t.sh.v, h = t.transformers, l = o._length;
      if (!(l <= 1)) {
        for (r = 0; r < l - 1; r += 1)
          i = this.getTransformedPoint(h, o.v[r]), a = this.getTransformedPoint(h, o.o[r]), s = this.getTransformedPoint(h, o.i[r + 1]), n = this.getTransformedPoint(h, o.v[r + 1]), this.checkBounds(i, a, s, n, e);
        o.c && (i = this.getTransformedPoint(h, o.v[r]), a = this.getTransformedPoint(h, o.o[r]), s = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(i, a, s, n, e));
      }
    }, HShapeElement.prototype.checkBounds = function(t, e, r, i, a) {
      this.getBoundsOfCurve(t, e, r, i);
      var s = this.shapeBoundingBox;
      a.x = bmMin(s.left, a.x), a.xMax = bmMax(s.right, a.xMax), a.y = bmMin(s.top, a.y), a.yMax = bmMax(s.bottom, a.yMax);
    }, HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }, HShapeElement.prototype.tempBoundingBox = { x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0 }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
      for (var a, s, n, o, h, l, p, f = [[t[0], i[0]], [t[1], i[1]]], c = 0; c < 2; ++c)
        s = 6 * t[c] - 12 * e[c] + 6 * r[c], a = -3 * t[c] + 9 * e[c] - 9 * r[c] + 3 * i[c], n = 3 * e[c] - 3 * t[c], s |= 0, n |= 0, 0 === (a |= 0) && 0 === s || (0 === a ? (o = -n / s) > 0 && o < 1 && f[c].push(this.calculateF(o, t, e, r, i, c)) : (h = s * s - 4 * n * a) >= 0 && ((l = (-s + bmSqrt(h)) / (2 * a)) > 0 && l < 1 && f[c].push(this.calculateF(l, t, e, r, i, c)), (p = (-s - bmSqrt(h)) / (2 * a)) > 0 && p < 1 && f[c].push(this.calculateF(p, t, e, r, i, c))));
      this.shapeBoundingBox.left = bmMin.apply(null, f[0]), this.shapeBoundingBox.top = bmMin.apply(null, f[1]), this.shapeBoundingBox.right = bmMax.apply(null, f[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, f[1]);
    }, HShapeElement.prototype.calculateF = function(t, e, r, i, a, s) {
      return bmPow(1 - t, 3) * e[s] + 3 * bmPow(1 - t, 2) * t * r[s] + 3 * (1 - t) * bmPow(t, 2) * i[s] + bmPow(t, 3) * a[s];
    }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
      var r, i = t.length;
      for (r = 0; r < i; r += 1)
        t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it ? this.calculateBoundingBox(t[r].it, e) : t[r] && t[r].style && t[r].w && this.expandStrokeBoundingBox(t[r].w, e);
    }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
      var r = 0;
      if (t.keyframes) {
        for (var i = 0; i < t.keyframes.length; i += 1) {
          var a = t.keyframes[i].s;
          a > r && (r = a);
        }
        r *= t.mult;
      } else
        r = t.v * t.mult;
      e.x -= r, e.xMax += r, e.y -= r, e.yMax += r;
    }, HShapeElement.prototype.currentBoxContains = function(t) {
      return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height;
    }, HShapeElement.prototype.renderInnerContent = function() {
      if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
        var t = this.tempBoundingBox, e = 999999;
        if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t))
          return;
        var r = false;
        if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = true), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = true), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
          this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
          var i = this.shapeCont.style, a = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
          i.transform = a, i.webkitTransform = a;
        }
      }
    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
      if (this.isMasked = this.checkMasks(), this.isMasked) {
        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
        var t = createNS("g");
        this.maskedElement.appendChild(t), this.innerElem = t;
      } else
        this.renderType = "html", this.innerElem = this.layerElement;
      this.checkParenting();
    }, HTextElement.prototype.buildNewText = function() {
      var t = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
      var e = this.innerElem.style, r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
      e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
      var i, a, s = this.globalData.fontManager.getFontByName(t.f);
      if (!this.globalData.fontManager.chars)
        if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass)
          this.innerElem.className = s.fClass;
        else {
          e.fontFamily = s.fFamily;
          var n = t.fWeight, o = t.fStyle;
          e.fontStyle = o, e.fontWeight = n;
        }
      var h, l, p, f = t.l;
      a = f.length;
      var c, m = this.mHelper, d = "", u = 0;
      for (i = 0; i < a; i += 1) {
        if (this.globalData.fontManager.chars ? (this.textPaths[u] ? h = this.textPaths[u] : ((h = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), h.setAttribute("stroke-linejoin", lineJoinEnum[2]), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[u] ? p = (l = this.textSpans[u]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[u] ? this.textPaths[u] : createNS("text") : this.textSpans[u] ? (l = this.textSpans[u], h = this.textPaths[u]) : (styleDiv(l = createTag("span")), styleDiv(h = createTag("span")), l.appendChild(h)), this.globalData.fontManager.chars) {
          var y, g = this.globalData.fontManager.getCharData(t.finalText[i], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
          if (y = g ? g.data : null, m.reset(), y && y.shapes && y.shapes.length && (c = y.shapes[0].it, m.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(m, c), h.setAttribute("d", d)), this.isMasked)
            this.innerElem.appendChild(h);
          else {
            if (this.innerElem.appendChild(l), y && y.shapes) {
              document.body.appendChild(p);
              var v = p.getBBox();
              p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
              var b = p.style, x = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
              b.transform = x, b.webkitTransform = x, f[i].yOffset = v.y - 1;
            } else
              p.setAttribute("width", 1), p.setAttribute("height", 1);
            l.appendChild(p);
          }
        } else if (h.textContent = f[i].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked)
          this.innerElem.appendChild(h);
        else {
          this.innerElem.appendChild(l);
          var E = h.style, S = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
          E.transform = S, E.webkitTransform = S;
        }
        this.isMasked ? this.textSpans[u] = h : this.textSpans[u] = l, this.textSpans[u].style.display = "block", this.textPaths[u] = h, u += 1;
      }
      for (; u < this.textSpans.length; )
        this.textSpans[u].style.display = "none", u += 1;
    }, HTextElement.prototype.renderInnerContent = function() {
      var t;
      if (this.validateText(), this.data.singleShape) {
        if (!this._isFirstFrame && !this.lettersChangedFlag)
          return;
        if (this.isMasked && this.finalTransform._matMdf) {
          this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
          var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
          t.transform = e, t.webkitTransform = e;
        }
      }
      if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
        var r, i, a, s, n, o = 0, h = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l;
        for (i = l.length, r = 0; r < i; r += 1)
          l[r].n ? o += 1 : (s = this.textSpans[r], n = this.textPaths[r], a = h[o], o += 1, a._mdf.m && (this.isMasked ? s.setAttribute("transform", a.m) : (s.style.webkitTransform = a.m, s.style.transform = a.m)), s.style.opacity = a.o, a.sw && a._mdf.sw && n.setAttribute("stroke-width", a.sw), a.sc && a._mdf.sc && n.setAttribute("stroke", a.sc), a.fc && a._mdf.fc && (n.setAttribute("fill", a.fc), n.style.color = a.fc));
        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
          var p = this.innerElem.getBBox();
          this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height));
          if (this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
            this.currentBBox.w = p.width + 2, this.currentBBox.h = p.height + 2, this.currentBBox.x = p.x - 1, this.currentBBox.y = p.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
            var f = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            t.transform = f, t.webkitTransform = f;
          }
        }
      }
    }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
      var t, e, r, i, a = this.comp.threeDElements.length;
      for (t = 0; t < a; t += 1)
        if ("3d" === (e = this.comp.threeDElements[t]).type) {
          r = e.perspectiveElem.style, i = e.container.style;
          var s = this.pe.v + "px", n = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
          r.perspective = s, r.webkitPerspective = s, i.transformOrigin = "0px 0px 0px", i.mozTransformOrigin = "0px 0px 0px", i.webkitTransformOrigin = "0px 0px 0px", r.transform = n, r.webkitTransform = n;
        }
    }, HCameraElement.prototype.createElements = function() {
    }, HCameraElement.prototype.hide = function() {
    }, HCameraElement.prototype.renderFrame = function() {
      var t, e, r = this._isFirstFrame;
      if (this.hierarchy)
        for (e = this.hierarchy.length, t = 0; t < e; t += 1)
          r = this.hierarchy[t].finalTransform.mProp._mdf || r;
      if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
        if (this.mat.reset(), this.hierarchy)
          for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
            var i = this.hierarchy[t].finalTransform.mProp;
            this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
          }
        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
          var a;
          a = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
          var s = Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2)), n = [a[0] / s, a[1] / s, a[2] / s], o = Math.sqrt(n[2] * n[2] + n[0] * n[0]), h = Math.atan2(n[1], o), l = Math.atan2(n[0], -n[2]);
          this.mat.rotateY(l).rotateX(-h);
        }
        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
        var p = !this._prevMat.equals(this.mat);
        if ((p || this.pe._mdf) && this.comp.threeDElements) {
          var f, c, m;
          for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
            if ("3d" === (f = this.comp.threeDElements[t]).type) {
              if (p) {
                var d = this.mat.toCSS();
                (m = f.container.style).transform = d, m.webkitTransform = d;
              }
              this.pe._mdf && ((c = f.perspectiveElem.style).perspective = this.pe.v + "px", c.webkitPerspective = this.pe.v + "px");
            }
          this.mat.clone(this._prevMat);
        }
      }
      this._isFirstFrame = false;
    }, HCameraElement.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, true);
    }, HCameraElement.prototype.destroy = function() {
    }, HCameraElement.prototype.getBaseElement = function() {
      return null;
    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData), e = new Image();
      this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
    }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        this.pendingElements.pop().checkParenting();
      }
    }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
      var r = t.getBaseElement();
      if (r) {
        var i = this.layers[e];
        if (i.ddd && this.supports3d)
          this.addTo3dContainer(r, e);
        else if (this.threeDElements)
          this.addTo3dContainer(r, e);
        else {
          for (var a, s, n = 0; n < e; )
            this.elements[n] && true !== this.elements[n] && this.elements[n].getBaseElement && (s = this.elements[n], a = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : s.getBaseElement()) || a), n += 1;
          a ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, a) : i.ddd && this.supports3d || this.layerElement.appendChild(r);
        }
      }
    }, HybridRendererBase.prototype.createShape = function(t) {
      return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createText = function(t) {
      return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createCamera = function(t) {
      return this.camera = new HCameraElement(t, this.globalData, this), this.camera;
    }, HybridRendererBase.prototype.createImage = function(t) {
      return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createSolid = function(t) {
      return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
      for (var e = 0, r = this.threeDElements.length; e < r; ) {
        if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t)
          return this.threeDElements[e].perspectiveElem;
        e += 1;
      }
      return null;
    }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
      var r, i, a = createTag("div");
      styleDiv(a);
      var s = createTag("div");
      if (styleDiv(s), "3d" === e) {
        (r = a.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
        r.webkitTransformOrigin = "50% 50%", r.mozTransformOrigin = "50% 50%", r.transformOrigin = "50% 50%";
        var n = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        (i = s.style).transform = n, i.webkitTransform = n;
      }
      a.appendChild(s);
      var o = { container: s, perspectiveElem: a, startPos: t, endPos: t, type: e };
      return this.threeDElements.push(o), o;
    }, HybridRendererBase.prototype.build3dContainers = function() {
      var t, e, r = this.layers.length, i = "";
      for (t = 0; t < r; t += 1)
        this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
      for (t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1)
        this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem);
    }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
      for (var r = 0, i = this.threeDElements.length; r < i; ) {
        if (e <= this.threeDElements[r].endPos) {
          for (var a, s = this.threeDElements[r].startPos; s < e; )
            this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s].getBaseElement()), s += 1;
          a ? this.threeDElements[r].container.insertBefore(t, a) : this.threeDElements[r].container.appendChild(t);
          break;
        }
        r += 1;
      }
    }, HybridRendererBase.prototype.configAnimation = function(t) {
      var e = createTag("div"), r = this.animationItem.wrapper, i = e.style;
      i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), i.overflow = "hidden";
      var a = createNS("svg");
      a.setAttribute("width", "1"), a.setAttribute("height", "1"), styleDiv(a), this.resizerElem.appendChild(a);
      var s = createNS("defs");
      a.appendChild(s), this.data = t, this.setupGlobalData(t, a), this.globalData.defs = s, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
    }, HybridRendererBase.prototype.destroy = function() {
      var t;
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
      var e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1)
        this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = true, this.animationItem = null;
    }, HybridRendererBase.prototype.updateContainerSize = function() {
      var t, e, r, i, a = this.animationItem.wrapper.offsetWidth, s = this.animationItem.wrapper.offsetHeight, n = a / s;
      this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = a / this.globalData.compSize.w, e = a / this.globalData.compSize.w, r = 0, i = (s - this.globalData.compSize.h * (a / this.globalData.compSize.w)) / 2) : (t = s / this.globalData.compSize.h, e = s / this.globalData.compSize.h, r = (a - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2, i = 0);
      var o = this.resizerElem.style;
      o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + i + ",0,1)", o.transform = o.webkitTransform;
    }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
      this.resizerElem.style.display = "none";
    }, HybridRendererBase.prototype.show = function() {
      this.resizerElem.style.display = "block";
    }, HybridRendererBase.prototype.initItems = function() {
      if (this.buildAllItems(), this.camera)
        this.camera.setup();
      else {
        var t, e = this.globalData.compSize.w, r = this.globalData.compSize.h, i = this.threeDElements.length;
        for (t = 0; t < i; t += 1) {
          var a = this.threeDElements[t].perspectiveElem.style;
          a.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px", a.perspective = a.webkitPerspective;
        }
      }
    }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
      var e, r = t.length, i = createTag("div");
      for (e = 0; e < r; e += 1)
        if (t[e].xt) {
          var a = this.createComp(t[e], i, this.globalData.comp, null);
          a.initExpressions(), this.globalData.projectInterface.registerComposition(a);
        }
    }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
      this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
    }, HCompElement.prototype.addTo3dContainer = function(t, e) {
      for (var r, i = 0; i < e; )
        this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
      r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t);
    }, HCompElement.prototype.createComp = function(t) {
      return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
    }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
      return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
    };
    var CompExpressionInterface = function(t) {
      function e(e2) {
        for (var r = 0, i = t.layers.length; r < i; ) {
          if (t.layers[r].nm === e2 || t.layers[r].ind === e2)
            return t.elements[r].layerInterface;
          r += 1;
        }
        return null;
      }
      return Object.defineProperty(e, "_name", { value: t.data.nm }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e;
    };
    function _typeof$2(t) {
      return (_typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
        return typeof t2;
      } : function(t2) {
        return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
      })(t);
    }
    function seedRandom(t, e) {
      var r = this, i = e.pow(256, 6), a = e.pow(2, 52), s = 2 * a;
      function n(t2) {
        var e2, r2 = t2.length, i2 = this, a2 = 0, s2 = i2.i = i2.j = 0, n2 = i2.S = [];
        for (r2 || (t2 = [r2++]); a2 < 256; )
          n2[a2] = a2++;
        for (a2 = 0; a2 < 256; a2++)
          n2[a2] = n2[s2 = 255 & s2 + t2[a2 % r2] + (e2 = n2[a2])], n2[s2] = e2;
        i2.g = function(t3) {
          for (var e3, r3 = 0, a3 = i2.i, s3 = i2.j, n3 = i2.S; t3--; )
            e3 = n3[a3 = 255 & a3 + 1], r3 = 256 * r3 + n3[255 & (n3[a3] = n3[s3 = 255 & s3 + e3]) + (n3[s3] = e3)];
          return i2.i = a3, i2.j = s3, r3;
        };
      }
      function o(t2, e2) {
        return e2.i = t2.i, e2.j = t2.j, e2.S = t2.S.slice(), e2;
      }
      function h(t2, e2) {
        for (var r2, i2 = t2 + "", a2 = 0; a2 < i2.length; )
          e2[255 & a2] = 255 & (r2 ^= 19 * e2[255 & a2]) + i2.charCodeAt(a2++);
        return l(e2);
      }
      function l(t2) {
        return String.fromCharCode.apply(0, t2);
      }
      e.seedrandom = function(p, f, c) {
        var m = [], d = h(function t2(e2, r2) {
          var i2, a2 = [], s2 = _typeof$2(e2);
          if (r2 && "object" == s2)
            for (i2 in e2)
              try {
                a2.push(t2(e2[i2], r2 - 1));
              } catch (t3) {
              }
          return a2.length ? a2 : "string" == s2 ? e2 : e2 + "\0";
        }((f = true === f ? { entropy: true } : f || {}).entropy ? [p, l(t)] : null === p ? function() {
          try {
            var e2 = new Uint8Array(256);
            return (r.crypto || r.msCrypto).getRandomValues(e2), l(e2);
          } catch (e3) {
            var i2 = r.navigator, a2 = i2 && i2.plugins;
            return [+/* @__PURE__ */ new Date(), r, a2, r.screen, l(t)];
          }
        }() : p, 3), m), u = new n(m), y = function() {
          for (var t2 = u.g(6), e2 = i, r2 = 0; t2 < a; )
            t2 = 256 * (t2 + r2), e2 *= 256, r2 = u.g(1);
          for (; t2 >= s; )
            t2 /= 2, e2 /= 2, r2 >>>= 1;
          return (t2 + r2) / e2;
        };
        return y.int32 = function() {
          return 0 | u.g(4);
        }, y.quick = function() {
          return u.g(4) / 4294967296;
        }, y.double = y, h(l(u.S), t), (f.pass || c || function(t2, r2, i2, a2) {
          return a2 && (a2.S && o(a2, u), t2.state = function() {
            return o(u, {});
          }), i2 ? (e.random = t2, r2) : t2;
        })(y, d, "global" in f ? f.global : this == e, f.state);
      }, h(e.random(), t);
    }
    function initialize$2(t) {
      seedRandom([], t);
    }
    var propTypes = { SHAPE: "shape" };
    function _typeof$1(t) {
      return (_typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
        return typeof t2;
      } : function(t2) {
        return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
      })(t);
    }
    var ExpressionManager = function() {
      var ob = {}, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null, frames = null, _lottieGlobal = {};
      function resetFrame() {
        _lottieGlobal = {};
      }
      function $bm_isInstanceOfArray(t) {
        return t.constructor === Array || t.constructor === Float32Array;
      }
      function isNumerable(t, e) {
        return "number" === t || e instanceof Number || "boolean" === t || "string" === t;
      }
      function $bm_neg(t) {
        var e = _typeof$1(t);
        if ("number" === e || t instanceof Number || "boolean" === e)
          return -t;
        if ($bm_isInstanceOfArray(t)) {
          var r, i = t.length, a = [];
          for (r = 0; r < i; r += 1)
            a[r] = -t[r];
          return a;
        }
        return t.propType ? t.v : -t;
      }
      initialize$2(BMMath);
      var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
      function sum(t, e) {
        var r = _typeof$1(t), i = _typeof$1(e);
        if (isNumerable(r, t) && isNumerable(i, e) || "string" === r || "string" === i)
          return t + e;
        if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
          return (t = t.slice(0))[0] += e, t;
        if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
          return (e = e.slice(0))[0] = t + e[0], e;
        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
          for (var a = 0, s = t.length, n = e.length, o = []; a < s || a < n; )
            ("number" == typeof t[a] || t[a] instanceof Number) && ("number" == typeof e[a] || e[a] instanceof Number) ? o[a] = t[a] + e[a] : o[a] = void 0 === e[a] ? t[a] : t[a] || e[a], a += 1;
          return o;
        }
        return 0;
      }
      var add = sum;
      function sub(t, e) {
        var r = _typeof$1(t), i = _typeof$1(e);
        if (isNumerable(r, t) && isNumerable(i, e))
          return "string" === r && (t = parseInt(t, 10)), "string" === i && (e = parseInt(e, 10)), t - e;
        if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
          return (t = t.slice(0))[0] -= e, t;
        if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
          return (e = e.slice(0))[0] = t - e[0], e;
        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
          for (var a = 0, s = t.length, n = e.length, o = []; a < s || a < n; )
            ("number" == typeof t[a] || t[a] instanceof Number) && ("number" == typeof e[a] || e[a] instanceof Number) ? o[a] = t[a] - e[a] : o[a] = void 0 === e[a] ? t[a] : t[a] || e[a], a += 1;
          return o;
        }
        return 0;
      }
      function mul(t, e) {
        var r, i, a, s = _typeof$1(t), n = _typeof$1(e);
        if (isNumerable(s, t) && isNumerable(n, e))
          return t * e;
        if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
          for (a = t.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1)
            r[i] = t[i] * e;
          return r;
        }
        if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
          for (a = e.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1)
            r[i] = t * e[i];
          return r;
        }
        return 0;
      }
      function div(t, e) {
        var r, i, a, s = _typeof$1(t), n = _typeof$1(e);
        if (isNumerable(s, t) && isNumerable(n, e))
          return t / e;
        if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
          for (a = t.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1)
            r[i] = t[i] / e;
          return r;
        }
        if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
          for (a = e.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1)
            r[i] = t / e[i];
          return r;
        }
        return 0;
      }
      function mod(t, e) {
        return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e;
      }
      var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
      function clamp(t, e, r) {
        if (e > r) {
          var i = r;
          r = e, e = i;
        }
        return Math.min(Math.max(t, e), r);
      }
      function radiansToDegrees(t) {
        return t / degToRads;
      }
      var radians_to_degrees = radiansToDegrees;
      function degreesToRadians(t) {
        return t * degToRads;
      }
      var degrees_to_radians = radiansToDegrees, helperLengthArray = [0, 0, 0, 0, 0, 0];
      function length(t, e) {
        if ("number" == typeof t || t instanceof Number)
          return e = e || 0, Math.abs(t - e);
        var r;
        e || (e = helperLengthArray);
        var i = Math.min(t.length, e.length), a = 0;
        for (r = 0; r < i; r += 1)
          a += Math.pow(e[r] - t[r], 2);
        return Math.sqrt(a);
      }
      function normalize(t) {
        return div(t, length(t));
      }
      function rgbToHsl(t) {
        var e, r, i = t[0], a = t[1], s = t[2], n = Math.max(i, a, s), o = Math.min(i, a, s), h = (n + o) / 2;
        if (n === o)
          e = 0, r = 0;
        else {
          var l = n - o;
          switch (r = h > 0.5 ? l / (2 - n - o) : l / (n + o), n) {
            case i:
              e = (a - s) / l + (a < s ? 6 : 0);
              break;
            case a:
              e = (s - i) / l + 2;
              break;
            case s:
              e = (i - a) / l + 4;
          }
          e /= 6;
        }
        return [e, r, h, t[3]];
      }
      function hue2rgb(t, e, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < 0.5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
      }
      function hslToRgb(t) {
        var e, r, i, a = t[0], s = t[1], n = t[2];
        if (0 === s)
          e = n, i = n, r = n;
        else {
          var o = n < 0.5 ? n * (1 + s) : n + s - n * s, h = 2 * n - o;
          e = hue2rgb(h, o, a + 1 / 3), r = hue2rgb(h, o, a), i = hue2rgb(h, o, a - 1 / 3);
        }
        return [e, r, i, t[3]];
      }
      function linear(t, e, r, i, a) {
        if (void 0 !== i && void 0 !== a || (i = e, a = r, e = 0, r = 1), r < e) {
          var s = r;
          r = e, e = s;
        }
        if (t <= e)
          return i;
        if (t >= r)
          return a;
        var n, o = r === e ? 0 : (t - e) / (r - e);
        if (!i.length)
          return i + (a - i) * o;
        var h = i.length, l = createTypedArray("float32", h);
        for (n = 0; n < h; n += 1)
          l[n] = i[n] + (a[n] - i[n]) * o;
        return l;
      }
      function random(t, e) {
        if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
          var r, i = e.length;
          t || (t = createTypedArray("float32", i));
          var a = createTypedArray("float32", i), s = BMMath.random();
          for (r = 0; r < i; r += 1)
            a[r] = t[r] + s * (e[r] - t[r]);
          return a;
        }
        return void 0 === t && (t = 0), t + BMMath.random() * (e - t);
      }
      function createPath(t, e, r, i) {
        var a, s = t.length, n = shapePool.newElement();
        n.setPathData(!!i, s);
        var o, h, l = [0, 0];
        for (a = 0; a < s; a += 1)
          o = e && e[a] ? e[a] : l, h = r && r[a] ? r[a] : l, n.setTripleAt(t[a][0], t[a][1], h[0] + t[a][0], h[1] + t[a][1], o[0] + t[a][0], o[1] + t[a][1], a, true);
        return n;
      }
      function initiateExpression(elem, data, property) {
        function noOp(t) {
          return t;
        }
        if (!elem.globalData.renderConfig.runExpressions)
          return noOp;
        var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
        thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", { get: function() {
          return thisProperty.v;
        } }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
        var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || true !== this.data.hd, wiggle = (function(t, e) {
          var r, i, a = this.pv.length ? this.pv.length : 1, s = createTypedArray("float32", a);
          var n = Math.floor(5 * time);
          for (r = 0, i = 0; r < n; ) {
            for (i = 0; i < a; i += 1)
              s[i] += -e + 2 * e * BMMath.random();
            r += 1;
          }
          var o = 5 * time, h = o - Math.floor(o), l = createTypedArray("float32", a);
          if (a > 1) {
            for (i = 0; i < a; i += 1)
              l[i] = this.pv[i] + s[i] + (-e + 2 * e * BMMath.random()) * h;
            return l;
          }
          return this.pv + s[0] + (-e + 2 * e * BMMath.random()) * h;
        }).bind(this);
        function loopInDuration(t, e) {
          return loopIn(t, e, true);
        }
        function loopOutDuration(t, e) {
          return loopOut(t, e, true);
        }
        thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface), time, velocity, value, text, textIndex, textTotal, selectorValue;
        function lookAt(t, e) {
          var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]], i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
          return [-Math.atan2(r[1], r[2]) / degToRads, i, 0];
        }
        function easeOut(t, e, r, i, a) {
          return applyEase(easeOutBez, t, e, r, i, a);
        }
        function easeIn(t, e, r, i, a) {
          return applyEase(easeInBez, t, e, r, i, a);
        }
        function ease(t, e, r, i, a) {
          return applyEase(easeInOutBez, t, e, r, i, a);
        }
        function applyEase(t, e, r, i, a, s) {
          void 0 === a ? (a = r, s = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
          var n = t(e);
          if ($bm_isInstanceOfArray(a)) {
            var o, h = a.length, l = createTypedArray("float32", h);
            for (o = 0; o < h; o += 1)
              l[o] = (s[o] - a[o]) * n + a[o];
            return l;
          }
          return (s - a) * n + a;
        }
        function nearestKey(t) {
          var e, r, i, a = data.k.length;
          if (data.k.length && "number" != typeof data.k[0])
            if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t)
              r = 1, i = data.k[0].t;
            else {
              for (e = 0; e < a - 1; e += 1) {
                if (t === data.k[e].t) {
                  r = e + 1, i = data.k[e].t;
                  break;
                }
                if (t > data.k[e].t && t < data.k[e + 1].t) {
                  t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, i = data.k[e + 1].t) : (r = e + 1, i = data.k[e].t);
                  break;
                }
              }
              -1 === r && (r = e + 1, i = data.k[e].t);
            }
          else
            r = 0, i = 0;
          var s = {};
          return s.index = r, s.time = i / elem.comp.globalData.frameRate, s;
        }
        function key(t) {
          var e, r, i;
          if (!data.k.length || "number" == typeof data.k[0])
            throw new Error("The property has no keyframe at index " + t);
          t -= 1, e = { time: data.k[t].t / elem.comp.globalData.frameRate, value: [] };
          var a = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
          for (i = a.length, r = 0; r < i; r += 1)
            e[r] = a[r], e.value[r] = a[r];
          return e;
        }
        function framesToTime(t, e) {
          return e || (e = elem.comp.globalData.frameRate), t / e;
        }
        function timeToFrames(t, e) {
          return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e;
        }
        function seedRandom(t) {
          BMMath.seedrandom(randSeed + t);
        }
        function sourceRectAtTime() {
          return elem.sourceRectAtTime();
        }
        function substring(t, e) {
          return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : "";
        }
        function substr(t, e) {
          return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : "";
        }
        function posterizeTime(t) {
          time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time);
        }
        var index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length), parent, randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;
        function executeExpression(t) {
          return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt);
        }
        return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression;
      }
      return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob;
    }(), Expressions = function() {
      var t = {};
      return t.initExpressions = function(t2) {
        var e = 0, r = [];
        t2.renderer.compInterface = CompExpressionInterface(t2.renderer), t2.renderer.globalData.projectInterface.registerComposition(t2.renderer), t2.renderer.globalData.pushExpression = function() {
          e += 1;
        }, t2.renderer.globalData.popExpression = function() {
          0 === (e -= 1) && function() {
            var t3, e2 = r.length;
            for (t3 = 0; t3 < e2; t3 += 1)
              r[t3].release();
            r.length = 0;
          }();
        }, t2.renderer.globalData.registerExpressionProperty = function(t3) {
          -1 === r.indexOf(t3) && r.push(t3);
        };
      }, t.resetFrame = ExpressionManager.resetFrame, t;
    }(), MaskManagerInterface = function() {
      function t(t2, e) {
        this._mask = t2, this._data = e;
      }
      Object.defineProperty(t.prototype, "maskPath", { get: function() {
        return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
      } }), Object.defineProperty(t.prototype, "maskOpacity", { get: function() {
        return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
      } });
      return function(e) {
        var r, i = createSizedArray(e.viewData.length), a = e.viewData.length;
        for (r = 0; r < a; r += 1)
          i[r] = new t(e.viewData[r], e.masksProperties[r]);
        return function(t2) {
          for (r = 0; r < a; ) {
            if (e.masksProperties[r].nm === t2)
              return i[r];
            r += 1;
          }
          return null;
        };
      };
    }(), ExpressionPropertyInterface = /* @__PURE__ */ function() {
      var t = { pv: 0, v: 0, mult: 1 }, e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
      function r(t2, e2, r2) {
        Object.defineProperty(t2, "velocity", { get: function() {
          return e2.getVelocityAtTime(e2.comp.currentFrame);
        } }), t2.numKeys = e2.keyframes ? e2.keyframes.length : 0, t2.key = function(i2) {
          if (!t2.numKeys)
            return 0;
          var a = "";
          a = "s" in e2.keyframes[i2 - 1] ? e2.keyframes[i2 - 1].s : "e" in e2.keyframes[i2 - 2] ? e2.keyframes[i2 - 2].e : e2.keyframes[i2 - 2].s;
          var s = "unidimensional" === r2 ? new Number(a) : Object.assign({}, a);
          return s.time = e2.keyframes[i2 - 1].t / e2.elem.comp.globalData.frameRate, s.value = "unidimensional" === r2 ? a[0] : a, s;
        }, t2.valueAtTime = e2.getValueAtTime, t2.speedAtTime = e2.getSpeedAtTime, t2.velocityAtTime = e2.getVelocityAtTime, t2.propertyGroup = e2.propertyGroup;
      }
      function i() {
        return t;
      }
      return function(a) {
        return a ? "unidimensional" === a.propType ? function(e2) {
          e2 && "pv" in e2 || (e2 = t);
          var i2 = 1 / e2.mult, a2 = e2.pv * i2, s = new Number(a2);
          return s.value = a2, r(s, e2, "unidimensional"), function() {
            return e2.k && e2.getValue(), a2 = e2.v * i2, s.value !== a2 && ((s = new Number(a2)).value = a2, r(s, e2, "unidimensional")), s;
          };
        }(a) : function(t2) {
          t2 && "pv" in t2 || (t2 = e);
          var i2 = 1 / t2.mult, a2 = t2.data && t2.data.l || t2.pv.length, s = createTypedArray("float32", a2), n = createTypedArray("float32", a2);
          return s.value = n, r(s, t2, "multidimensional"), function() {
            t2.k && t2.getValue();
            for (var e2 = 0; e2 < a2; e2 += 1)
              n[e2] = t2.v[e2] * i2, s[e2] = n[e2];
            return s;
          };
        }(a) : i;
      };
    }(), TransformExpressionInterface = function(t) {
      function e(t2) {
        switch (t2) {
          case "scale":
          case "Scale":
          case "ADBE Scale":
          case 6:
            return e.scale;
          case "rotation":
          case "Rotation":
          case "ADBE Rotation":
          case "ADBE Rotate Z":
          case 10:
            return e.rotation;
          case "ADBE Rotate X":
            return e.xRotation;
          case "ADBE Rotate Y":
            return e.yRotation;
          case "position":
          case "Position":
          case "ADBE Position":
          case 2:
            return e.position;
          case "ADBE Position_0":
            return e.xPosition;
          case "ADBE Position_1":
            return e.yPosition;
          case "ADBE Position_2":
            return e.zPosition;
          case "anchorPoint":
          case "AnchorPoint":
          case "Anchor Point":
          case "ADBE AnchorPoint":
          case 1:
            return e.anchorPoint;
          case "opacity":
          case "Opacity":
          case 11:
            return e.opacity;
          default:
            return null;
        }
      }
      var r, i, a, s;
      return Object.defineProperty(e, "rotation", { get: ExpressionPropertyInterface(t.r || t.rz) }), Object.defineProperty(e, "zRotation", { get: ExpressionPropertyInterface(t.rz || t.r) }), Object.defineProperty(e, "xRotation", { get: ExpressionPropertyInterface(t.rx) }), Object.defineProperty(e, "yRotation", { get: ExpressionPropertyInterface(t.ry) }), Object.defineProperty(e, "scale", { get: ExpressionPropertyInterface(t.s) }), t.p ? s = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (a = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", { get: function() {
        return t.p ? s() : [r(), i(), a ? a() : 0];
      } }), Object.defineProperty(e, "xPosition", { get: ExpressionPropertyInterface(t.px) }), Object.defineProperty(e, "yPosition", { get: ExpressionPropertyInterface(t.py) }), Object.defineProperty(e, "zPosition", { get: ExpressionPropertyInterface(t.pz) }), Object.defineProperty(e, "anchorPoint", { get: ExpressionPropertyInterface(t.a) }), Object.defineProperty(e, "opacity", { get: ExpressionPropertyInterface(t.o) }), Object.defineProperty(e, "skew", { get: ExpressionPropertyInterface(t.sk) }), Object.defineProperty(e, "skewAxis", { get: ExpressionPropertyInterface(t.sa) }), Object.defineProperty(e, "orientation", { get: ExpressionPropertyInterface(t.or) }), e;
    }, LayerExpressionInterface = /* @__PURE__ */ function() {
      function t(t2) {
        var e2 = new Matrix();
        void 0 !== t2 ? this._elem.finalTransform.mProp.getValueAtTime(t2).clone(e2) : this._elem.finalTransform.mProp.applyToMatrix(e2);
        return e2;
      }
      function e(t2, e2) {
        var r2 = this.getMatrix(e2);
        return r2.props[12] = 0, r2.props[13] = 0, r2.props[14] = 0, this.applyPoint(r2, t2);
      }
      function r(t2, e2) {
        var r2 = this.getMatrix(e2);
        return this.applyPoint(r2, t2);
      }
      function i(t2, e2) {
        var r2 = this.getMatrix(e2);
        return r2.props[12] = 0, r2.props[13] = 0, r2.props[14] = 0, this.invertPoint(r2, t2);
      }
      function a(t2, e2) {
        var r2 = this.getMatrix(e2);
        return this.invertPoint(r2, t2);
      }
      function s(t2, e2) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var r2, i2 = this._elem.hierarchy.length;
          for (r2 = 0; r2 < i2; r2 += 1)
            this._elem.hierarchy[r2].finalTransform.mProp.applyToMatrix(t2);
        }
        return t2.applyToPointArray(e2[0], e2[1], e2[2] || 0);
      }
      function n(t2, e2) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var r2, i2 = this._elem.hierarchy.length;
          for (r2 = 0; r2 < i2; r2 += 1)
            this._elem.hierarchy[r2].finalTransform.mProp.applyToMatrix(t2);
        }
        return t2.inversePoint(e2);
      }
      function o(t2) {
        var e2 = new Matrix();
        if (e2.reset(), this._elem.finalTransform.mProp.applyToMatrix(e2), this._elem.hierarchy && this._elem.hierarchy.length) {
          var r2, i2 = this._elem.hierarchy.length;
          for (r2 = 0; r2 < i2; r2 += 1)
            this._elem.hierarchy[r2].finalTransform.mProp.applyToMatrix(e2);
          return e2.inversePoint(t2);
        }
        return e2.inversePoint(t2);
      }
      function h() {
        return [1, 1, 1, 1];
      }
      return function(l) {
        var p;
        function f(t2) {
          switch (t2) {
            case "ADBE Root Vectors Group":
            case "Contents":
            case 2:
              return f.shapeInterface;
            case 1:
            case 6:
            case "Transform":
            case "transform":
            case "ADBE Transform Group":
              return p;
            case 4:
            case "ADBE Effect Parade":
            case "effects":
            case "Effects":
              return f.effect;
            case "ADBE Text Properties":
              return f.textInterface;
            default:
              return null;
          }
        }
        f.getMatrix = t, f.invertPoint = n, f.applyPoint = s, f.toWorld = r, f.toWorldVec = e, f.fromWorld = a, f.fromWorldVec = i, f.toComp = r, f.fromComp = o, f.sampleImage = h, f.sourceRectAtTime = l.sourceRectAtTime.bind(l), f._elem = l;
        var c = getDescriptor(p = TransformExpressionInterface(l.finalTransform.mProp), "anchorPoint");
        return Object.defineProperties(f, { hasParent: { get: function() {
          return l.hierarchy.length;
        } }, parent: { get: function() {
          return l.hierarchy[0].layerInterface;
        } }, rotation: getDescriptor(p, "rotation"), scale: getDescriptor(p, "scale"), position: getDescriptor(p, "position"), opacity: getDescriptor(p, "opacity"), anchorPoint: c, anchor_point: c, transform: { get: function() {
          return p;
        } }, active: { get: function() {
          return l.isInRange;
        } } }), f.startTime = l.data.st, f.index = l.data.ind, f.source = l.data.refId, f.height = 0 === l.data.ty ? l.data.h : 100, f.width = 0 === l.data.ty ? l.data.w : 100, f.inPoint = l.data.ip / l.comp.globalData.frameRate, f.outPoint = l.data.op / l.comp.globalData.frameRate, f._name = l.data.nm, f.registerMaskInterface = function(t2) {
          f.mask = new MaskManagerInterface(t2, l);
        }, f.registerEffectsInterface = function(t2) {
          f.effect = t2;
        }, f;
      };
    }(), propertyGroupFactory = function(t, e) {
      return function(r) {
        return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1);
      };
    }, PropertyInterface = function(t, e) {
      var r = { _name: t };
      return function(t2) {
        return (t2 = void 0 === t2 ? 1 : t2) <= 0 ? r : e(t2 - 1);
      };
    }, EffectsExpressionInterface = /* @__PURE__ */ function() {
      function t(r, i, a, s) {
        function n(t2) {
          for (var e2 = r.ef, i2 = 0, a2 = e2.length; i2 < a2; ) {
            if (t2 === e2[i2].nm || t2 === e2[i2].mn || t2 === e2[i2].ix)
              return 5 === e2[i2].ty ? l[i2] : l[i2]();
            i2 += 1;
          }
          throw new Error();
        }
        var o, h = propertyGroupFactory(n, a), l = [], p = r.ef.length;
        for (o = 0; o < p; o += 1)
          5 === r.ef[o].ty ? l.push(t(r.ef[o], i.effectElements[o], i.effectElements[o].propertyGroup, s)) : l.push(e(i.effectElements[o], r.ef[o].ty, s, h));
        return "ADBE Color Control" === r.mn && Object.defineProperty(n, "color", { get: function() {
          return l[0]();
        } }), Object.defineProperties(n, { numProperties: { get: function() {
          return r.np;
        } }, _name: { value: r.nm }, propertyGroup: { value: h } }), n.enabled = 0 !== r.en, n.active = n.enabled, n;
      }
      function e(t2, e2, r, i) {
        var a = ExpressionPropertyInterface(t2.p);
        return t2.p.setGroupProperty && t2.p.setGroupProperty(PropertyInterface("", i)), function() {
          return 10 === e2 ? r.comp.compInterface(t2.p.v) : a();
        };
      }
      return { createEffectsInterface: function(e2, r) {
        if (e2.effectsManager) {
          var i, a = [], s = e2.data.ef, n = e2.effectsManager.effectElements.length;
          for (i = 0; i < n; i += 1)
            a.push(t(s[i], e2.effectsManager.effectElements[i], r, e2));
          var o = e2.data.ef || [], h = function(t2) {
            for (i = 0, n = o.length; i < n; ) {
              if (t2 === o[i].nm || t2 === o[i].mn || t2 === o[i].ix)
                return a[i];
              i += 1;
            }
            return null;
          };
          return Object.defineProperty(h, "numProperties", { get: function() {
            return o.length;
          } }), h;
        }
        return null;
      } };
    }(), ShapePathInterface = function(t, e, r) {
      var i = e.sh;
      function a(t2) {
        return "Shape" === t2 || "shape" === t2 || "Path" === t2 || "path" === t2 || "ADBE Vector Shape" === t2 || 2 === t2 ? a.path : null;
      }
      var s = propertyGroupFactory(a, r);
      return i.setGroupProperty(PropertyInterface("Path", s)), Object.defineProperties(a, { path: { get: function() {
        return i.k && i.getValue(), i;
      } }, shape: { get: function() {
        return i.k && i.getValue(), i;
      } }, _name: { value: t.nm }, ix: { value: t.ix }, propertyIndex: { value: t.ix }, mn: { value: t.mn }, propertyGroup: { value: r } }), a;
    }, ShapeExpressionInterface = /* @__PURE__ */ function() {
      function t(t2, o2, m) {
        var d, u = [], y = t2 ? t2.length : 0;
        for (d = 0; d < y; d += 1)
          "gr" === t2[d].ty ? u.push(e(t2[d], o2[d], m)) : "fl" === t2[d].ty ? u.push(r(t2[d], o2[d], m)) : "st" === t2[d].ty ? u.push(s(t2[d], o2[d], m)) : "tm" === t2[d].ty ? u.push(n(t2[d], o2[d], m)) : "tr" === t2[d].ty || ("el" === t2[d].ty ? u.push(h(t2[d], o2[d], m)) : "sr" === t2[d].ty ? u.push(l(t2[d], o2[d], m)) : "sh" === t2[d].ty ? u.push(ShapePathInterface(t2[d], o2[d], m)) : "rc" === t2[d].ty ? u.push(p(t2[d], o2[d], m)) : "rd" === t2[d].ty ? u.push(f(t2[d], o2[d], m)) : "rp" === t2[d].ty ? u.push(c(t2[d], o2[d], m)) : "gf" === t2[d].ty ? u.push(i(t2[d], o2[d], m)) : u.push(a(t2[d], o2[d])));
        return u;
      }
      function e(e2, r2, i2) {
        var a2 = function(t2) {
          switch (t2) {
            case "ADBE Vectors Group":
            case "Contents":
            case 2:
              return a2.content;
            default:
              return a2.transform;
          }
        };
        a2.propertyGroup = propertyGroupFactory(a2, i2);
        var s2 = function(e3, r3, i3) {
          var a3, s3 = function(t2) {
            for (var e4 = 0, r4 = a3.length; e4 < r4; ) {
              if (a3[e4]._name === t2 || a3[e4].mn === t2 || a3[e4].propertyIndex === t2 || a3[e4].ix === t2 || a3[e4].ind === t2)
                return a3[e4];
              e4 += 1;
            }
            return "number" == typeof t2 ? a3[t2 - 1] : null;
          };
          s3.propertyGroup = propertyGroupFactory(s3, i3), a3 = t(e3.it, r3.it, s3.propertyGroup), s3.numProperties = a3.length;
          var n3 = o(e3.it[e3.it.length - 1], r3.it[r3.it.length - 1], s3.propertyGroup);
          return s3.transform = n3, s3.propertyIndex = e3.cix, s3._name = e3.nm, s3;
        }(e2, r2, a2.propertyGroup), n2 = o(e2.it[e2.it.length - 1], r2.it[r2.it.length - 1], a2.propertyGroup);
        return a2.content = s2, a2.transform = n2, Object.defineProperty(a2, "_name", { get: function() {
          return e2.nm;
        } }), a2.numProperties = e2.np, a2.propertyIndex = e2.ix, a2.nm = e2.nm, a2.mn = e2.mn, a2;
      }
      function r(t2, e2, r2) {
        function i2(t3) {
          return "Color" === t3 || "color" === t3 ? i2.color : "Opacity" === t3 || "opacity" === t3 ? i2.opacity : null;
        }
        return Object.defineProperties(i2, { color: { get: ExpressionPropertyInterface(e2.c) }, opacity: { get: ExpressionPropertyInterface(e2.o) }, _name: { value: t2.nm }, mn: { value: t2.mn } }), e2.c.setGroupProperty(PropertyInterface("Color", r2)), e2.o.setGroupProperty(PropertyInterface("Opacity", r2)), i2;
      }
      function i(t2, e2, r2) {
        function i2(t3) {
          return "Start Point" === t3 || "start point" === t3 ? i2.startPoint : "End Point" === t3 || "end point" === t3 ? i2.endPoint : "Opacity" === t3 || "opacity" === t3 ? i2.opacity : null;
        }
        return Object.defineProperties(i2, { startPoint: { get: ExpressionPropertyInterface(e2.s) }, endPoint: { get: ExpressionPropertyInterface(e2.e) }, opacity: { get: ExpressionPropertyInterface(e2.o) }, type: { get: function() {
          return "a";
        } }, _name: { value: t2.nm }, mn: { value: t2.mn } }), e2.s.setGroupProperty(PropertyInterface("Start Point", r2)), e2.e.setGroupProperty(PropertyInterface("End Point", r2)), e2.o.setGroupProperty(PropertyInterface("Opacity", r2)), i2;
      }
      function a() {
        return function() {
          return null;
        };
      }
      function s(t2, e2, r2) {
        var i2, a2 = propertyGroupFactory(l2, r2), s2 = propertyGroupFactory(h2, a2);
        function n2(r3) {
          Object.defineProperty(h2, t2.d[r3].nm, { get: ExpressionPropertyInterface(e2.d.dataProps[r3].p) });
        }
        var o2 = t2.d ? t2.d.length : 0, h2 = {};
        for (i2 = 0; i2 < o2; i2 += 1)
          n2(i2), e2.d.dataProps[i2].p.setGroupProperty(s2);
        function l2(t3) {
          return "Color" === t3 || "color" === t3 ? l2.color : "Opacity" === t3 || "opacity" === t3 ? l2.opacity : "Stroke Width" === t3 || "stroke width" === t3 ? l2.strokeWidth : null;
        }
        return Object.defineProperties(l2, { color: { get: ExpressionPropertyInterface(e2.c) }, opacity: { get: ExpressionPropertyInterface(e2.o) }, strokeWidth: { get: ExpressionPropertyInterface(e2.w) }, dash: { get: function() {
          return h2;
        } }, _name: { value: t2.nm }, mn: { value: t2.mn } }), e2.c.setGroupProperty(PropertyInterface("Color", a2)), e2.o.setGroupProperty(PropertyInterface("Opacity", a2)), e2.w.setGroupProperty(PropertyInterface("Stroke Width", a2)), l2;
      }
      function n(t2, e2, r2) {
        function i2(e3) {
          return e3 === t2.e.ix || "End" === e3 || "end" === e3 ? i2.end : e3 === t2.s.ix ? i2.start : e3 === t2.o.ix ? i2.offset : null;
        }
        var a2 = propertyGroupFactory(i2, r2);
        return i2.propertyIndex = t2.ix, e2.s.setGroupProperty(PropertyInterface("Start", a2)), e2.e.setGroupProperty(PropertyInterface("End", a2)), e2.o.setGroupProperty(PropertyInterface("Offset", a2)), i2.propertyIndex = t2.ix, i2.propertyGroup = r2, Object.defineProperties(i2, { start: { get: ExpressionPropertyInterface(e2.s) }, end: { get: ExpressionPropertyInterface(e2.e) }, offset: { get: ExpressionPropertyInterface(e2.o) }, _name: { value: t2.nm } }), i2.mn = t2.mn, i2;
      }
      function o(t2, e2, r2) {
        function i2(e3) {
          return t2.a.ix === e3 || "Anchor Point" === e3 ? i2.anchorPoint : t2.o.ix === e3 || "Opacity" === e3 ? i2.opacity : t2.p.ix === e3 || "Position" === e3 ? i2.position : t2.r.ix === e3 || "Rotation" === e3 || "ADBE Vector Rotation" === e3 ? i2.rotation : t2.s.ix === e3 || "Scale" === e3 ? i2.scale : t2.sk && t2.sk.ix === e3 || "Skew" === e3 ? i2.skew : t2.sa && t2.sa.ix === e3 || "Skew Axis" === e3 ? i2.skewAxis : null;
        }
        var a2 = propertyGroupFactory(i2, r2);
        return e2.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", a2)), e2.transform.mProps.p.setGroupProperty(PropertyInterface("Position", a2)), e2.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", a2)), e2.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", a2)), e2.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", a2)), e2.transform.mProps.sk && (e2.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", a2)), e2.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", a2))), e2.transform.op.setGroupProperty(PropertyInterface("Opacity", a2)), Object.defineProperties(i2, { opacity: { get: ExpressionPropertyInterface(e2.transform.mProps.o) }, position: { get: ExpressionPropertyInterface(e2.transform.mProps.p) }, anchorPoint: { get: ExpressionPropertyInterface(e2.transform.mProps.a) }, scale: { get: ExpressionPropertyInterface(e2.transform.mProps.s) }, rotation: { get: ExpressionPropertyInterface(e2.transform.mProps.r) }, skew: { get: ExpressionPropertyInterface(e2.transform.mProps.sk) }, skewAxis: { get: ExpressionPropertyInterface(e2.transform.mProps.sa) }, _name: { value: t2.nm } }), i2.ty = "tr", i2.mn = t2.mn, i2.propertyGroup = r2, i2;
      }
      function h(t2, e2, r2) {
        function i2(e3) {
          return t2.p.ix === e3 ? i2.position : t2.s.ix === e3 ? i2.size : null;
        }
        var a2 = propertyGroupFactory(i2, r2);
        i2.propertyIndex = t2.ix;
        var s2 = "tm" === e2.sh.ty ? e2.sh.prop : e2.sh;
        return s2.s.setGroupProperty(PropertyInterface("Size", a2)), s2.p.setGroupProperty(PropertyInterface("Position", a2)), Object.defineProperties(i2, { size: { get: ExpressionPropertyInterface(s2.s) }, position: { get: ExpressionPropertyInterface(s2.p) }, _name: { value: t2.nm } }), i2.mn = t2.mn, i2;
      }
      function l(t2, e2, r2) {
        function i2(e3) {
          return t2.p.ix === e3 ? i2.position : t2.r.ix === e3 ? i2.rotation : t2.pt.ix === e3 ? i2.points : t2.or.ix === e3 || "ADBE Vector Star Outer Radius" === e3 ? i2.outerRadius : t2.os.ix === e3 ? i2.outerRoundness : !t2.ir || t2.ir.ix !== e3 && "ADBE Vector Star Inner Radius" !== e3 ? t2.is && t2.is.ix === e3 ? i2.innerRoundness : null : i2.innerRadius;
        }
        var a2 = propertyGroupFactory(i2, r2), s2 = "tm" === e2.sh.ty ? e2.sh.prop : e2.sh;
        return i2.propertyIndex = t2.ix, s2.or.setGroupProperty(PropertyInterface("Outer Radius", a2)), s2.os.setGroupProperty(PropertyInterface("Outer Roundness", a2)), s2.pt.setGroupProperty(PropertyInterface("Points", a2)), s2.p.setGroupProperty(PropertyInterface("Position", a2)), s2.r.setGroupProperty(PropertyInterface("Rotation", a2)), t2.ir && (s2.ir.setGroupProperty(PropertyInterface("Inner Radius", a2)), s2.is.setGroupProperty(PropertyInterface("Inner Roundness", a2))), Object.defineProperties(i2, { position: { get: ExpressionPropertyInterface(s2.p) }, rotation: { get: ExpressionPropertyInterface(s2.r) }, points: { get: ExpressionPropertyInterface(s2.pt) }, outerRadius: { get: ExpressionPropertyInterface(s2.or) }, outerRoundness: { get: ExpressionPropertyInterface(s2.os) }, innerRadius: { get: ExpressionPropertyInterface(s2.ir) }, innerRoundness: { get: ExpressionPropertyInterface(s2.is) }, _name: { value: t2.nm } }), i2.mn = t2.mn, i2;
      }
      function p(t2, e2, r2) {
        function i2(e3) {
          return t2.p.ix === e3 ? i2.position : t2.r.ix === e3 ? i2.roundness : t2.s.ix === e3 || "Size" === e3 || "ADBE Vector Rect Size" === e3 ? i2.size : null;
        }
        var a2 = propertyGroupFactory(i2, r2), s2 = "tm" === e2.sh.ty ? e2.sh.prop : e2.sh;
        return i2.propertyIndex = t2.ix, s2.p.setGroupProperty(PropertyInterface("Position", a2)), s2.s.setGroupProperty(PropertyInterface("Size", a2)), s2.r.setGroupProperty(PropertyInterface("Rotation", a2)), Object.defineProperties(i2, { position: { get: ExpressionPropertyInterface(s2.p) }, roundness: { get: ExpressionPropertyInterface(s2.r) }, size: { get: ExpressionPropertyInterface(s2.s) }, _name: { value: t2.nm } }), i2.mn = t2.mn, i2;
      }
      function f(t2, e2, r2) {
        function i2(e3) {
          return t2.r.ix === e3 || "Round Corners 1" === e3 ? i2.radius : null;
        }
        var a2 = propertyGroupFactory(i2, r2), s2 = e2;
        return i2.propertyIndex = t2.ix, s2.rd.setGroupProperty(PropertyInterface("Radius", a2)), Object.defineProperties(i2, { radius: { get: ExpressionPropertyInterface(s2.rd) }, _name: { value: t2.nm } }), i2.mn = t2.mn, i2;
      }
      function c(t2, e2, r2) {
        function i2(e3) {
          return t2.c.ix === e3 || "Copies" === e3 ? i2.copies : t2.o.ix === e3 || "Offset" === e3 ? i2.offset : null;
        }
        var a2 = propertyGroupFactory(i2, r2), s2 = e2;
        return i2.propertyIndex = t2.ix, s2.c.setGroupProperty(PropertyInterface("Copies", a2)), s2.o.setGroupProperty(PropertyInterface("Offset", a2)), Object.defineProperties(i2, { copies: { get: ExpressionPropertyInterface(s2.c) }, offset: { get: ExpressionPropertyInterface(s2.o) }, _name: { value: t2.nm } }), i2.mn = t2.mn, i2;
      }
      return function(e2, r2, i2) {
        var a2;
        function s2(t2) {
          if ("number" == typeof t2)
            return 0 === (t2 = void 0 === t2 ? 1 : t2) ? i2 : a2[t2 - 1];
          for (var e3 = 0, r3 = a2.length; e3 < r3; ) {
            if (a2[e3]._name === t2)
              return a2[e3];
            e3 += 1;
          }
          return null;
        }
        return s2.propertyGroup = propertyGroupFactory(s2, function() {
          return i2;
        }), a2 = t(e2, r2, s2.propertyGroup), s2.numProperties = a2.length, s2._name = "Contents", s2;
      };
    }(), TextExpressionInterface = function(t) {
      var e;
      function r(t2) {
        switch (t2) {
          case "ADBE Text Document":
            return r.sourceText;
          default:
            return null;
        }
      }
      return Object.defineProperty(r, "sourceText", { get: function() {
        t.textProperty.getValue();
        var r2 = t.textProperty.currentData.t;
        return e && r2 === e.value || ((e = new String(r2)).value = r2 || new String(r2), Object.defineProperty(e, "style", { get: function() {
          return { fillColor: t.textProperty.currentData.fc };
        } })), e;
      } }), r;
    };
    function _typeof(t) {
      return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
        return typeof t2;
      } : function(t2) {
        return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
      })(t);
    }
    var FootageInterface = (dataInterfaceFactory = function(t) {
      function e(t2) {
        return "Outline" === t2 ? e.outlineInterface() : null;
      }
      return e._name = "Outline", e.outlineInterface = function(t2) {
        var e2 = "", r = t2.getFootageData();
        function i(t3) {
          if (r[t3])
            return e2 = t3, "object" === _typeof(r = r[t3]) ? i : r;
          var a = t3.indexOf(e2);
          if (-1 !== a) {
            var s = parseInt(t3.substr(a + e2.length), 10);
            return "object" === _typeof(r = r[s]) ? i : r;
          }
          return "";
        }
        return function() {
          return e2 = "", r = t2.getFootageData(), i;
        };
      }(t), e;
    }, function(t) {
      function e(t2) {
        return "Data" === t2 ? e.dataInterface : null;
      }
      return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e;
    }), dataInterfaceFactory, interfaces = { layer: LayerExpressionInterface, effects: EffectsExpressionInterface, comp: CompExpressionInterface, shape: ShapeExpressionInterface, text: TextExpressionInterface, footage: FootageInterface };
    function getInterface(t) {
      return interfaces[t] || null;
    }
    var expressionHelpers = { searchExpressions: function(t, e, r) {
      e.x && (r.k = true, r.x = true, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)));
    }, getSpeedAtTime: function(t) {
      var e = this.getValueAtTime(t), r = this.getValueAtTime(t + -0.01), i = 0;
      if (e.length) {
        var a;
        for (a = 0; a < e.length; a += 1)
          i += Math.pow(r[a] - e[a], 2);
        i = 100 * Math.sqrt(i);
      } else
        i = 0;
      return i;
    }, getVelocityAtTime: function(t) {
      if (void 0 !== this.vel)
        return this.vel;
      var e, r, i = this.getValueAtTime(t), a = this.getValueAtTime(t + -1e-3);
      if (i.length)
        for (e = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1)
          e[r] = (a[r] - i[r]) / -1e-3;
      else
        e = (a - i) / -1e-3;
      return e;
    }, getValueAtTime: function(t) {
      return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value;
    }, getStaticValueAtTime: function() {
      return this.pv;
    }, setGroupProperty: function(t) {
      this.propertyGroup = t;
    } };
    function addPropertyDecorator() {
      function t(t2, e2, r2) {
        if (!this.k || !this.keyframes)
          return this.pv;
        t2 = t2 ? t2.toLowerCase() : "";
        var i2, a2, s2, n2, o2, h2 = this.comp.renderedFrame, l2 = this.keyframes, p2 = l2[l2.length - 1].t;
        if (h2 <= p2)
          return this.pv;
        if (r2 ? a2 = p2 - (i2 = e2 ? Math.abs(p2 - this.elem.comp.globalData.frameRate * e2) : Math.max(0, p2 - this.elem.data.ip)) : ((!e2 || e2 > l2.length - 1) && (e2 = l2.length - 1), i2 = p2 - (a2 = l2[l2.length - 1 - e2].t)), "pingpong" === t2) {
          if (Math.floor((h2 - a2) / i2) % 2 != 0)
            return this.getValueAtTime((i2 - (h2 - a2) % i2 + a2) / this.comp.globalData.frameRate, 0);
        } else {
          if ("offset" === t2) {
            var f = this.getValueAtTime(a2 / this.comp.globalData.frameRate, 0), c = this.getValueAtTime(p2 / this.comp.globalData.frameRate, 0), m = this.getValueAtTime(((h2 - a2) % i2 + a2) / this.comp.globalData.frameRate, 0), d = Math.floor((h2 - a2) / i2);
            if (this.pv.length) {
              for (n2 = (o2 = new Array(f.length)).length, s2 = 0; s2 < n2; s2 += 1)
                o2[s2] = (c[s2] - f[s2]) * d + m[s2];
              return o2;
            }
            return (c - f) * d + m;
          }
          if ("continue" === t2) {
            var u = this.getValueAtTime(p2 / this.comp.globalData.frameRate, 0), y = this.getValueAtTime((p2 - 1e-3) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              for (n2 = (o2 = new Array(u.length)).length, s2 = 0; s2 < n2; s2 += 1)
                o2[s2] = u[s2] + (u[s2] - y[s2]) * ((h2 - p2) / this.comp.globalData.frameRate) / 5e-4;
              return o2;
            }
            return u + (h2 - p2) / 1e-3 * (u - y);
          }
        }
        return this.getValueAtTime(((h2 - a2) % i2 + a2) / this.comp.globalData.frameRate, 0);
      }
      function e(t2, e2, r2) {
        if (!this.k)
          return this.pv;
        t2 = t2 ? t2.toLowerCase() : "";
        var i2, a2, s2, n2, o2, h2 = this.comp.renderedFrame, l2 = this.keyframes, p2 = l2[0].t;
        if (h2 >= p2)
          return this.pv;
        if (r2 ? a2 = p2 + (i2 = e2 ? Math.abs(this.elem.comp.globalData.frameRate * e2) : Math.max(0, this.elem.data.op - p2)) : ((!e2 || e2 > l2.length - 1) && (e2 = l2.length - 1), i2 = (a2 = l2[e2].t) - p2), "pingpong" === t2) {
          if (Math.floor((p2 - h2) / i2) % 2 == 0)
            return this.getValueAtTime(((p2 - h2) % i2 + p2) / this.comp.globalData.frameRate, 0);
        } else {
          if ("offset" === t2) {
            var f = this.getValueAtTime(p2 / this.comp.globalData.frameRate, 0), c = this.getValueAtTime(a2 / this.comp.globalData.frameRate, 0), m = this.getValueAtTime((i2 - (p2 - h2) % i2 + p2) / this.comp.globalData.frameRate, 0), d = Math.floor((p2 - h2) / i2) + 1;
            if (this.pv.length) {
              for (n2 = (o2 = new Array(f.length)).length, s2 = 0; s2 < n2; s2 += 1)
                o2[s2] = m[s2] - (c[s2] - f[s2]) * d;
              return o2;
            }
            return m - (c - f) * d;
          }
          if ("continue" === t2) {
            var u = this.getValueAtTime(p2 / this.comp.globalData.frameRate, 0), y = this.getValueAtTime((p2 + 1e-3) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              for (n2 = (o2 = new Array(u.length)).length, s2 = 0; s2 < n2; s2 += 1)
                o2[s2] = u[s2] + (u[s2] - y[s2]) * (p2 - h2) / 1e-3;
              return o2;
            }
            return u + (u - y) * (p2 - h2) / 1e-3;
          }
        }
        return this.getValueAtTime((i2 - ((p2 - h2) % i2 + p2)) / this.comp.globalData.frameRate, 0);
      }
      function r(t2, e2) {
        if (!this.k)
          return this.pv;
        if (t2 = 0.5 * (t2 || 0.4), (e2 = Math.floor(e2 || 5)) <= 1)
          return this.pv;
        var r2, i2, a2 = this.comp.renderedFrame / this.comp.globalData.frameRate, s2 = a2 - t2, n2 = e2 > 1 ? (a2 + t2 - s2) / (e2 - 1) : 1, o2 = 0, h2 = 0;
        for (r2 = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o2 < e2; ) {
          if (i2 = this.getValueAtTime(s2 + o2 * n2), this.pv.length)
            for (h2 = 0; h2 < this.pv.length; h2 += 1)
              r2[h2] += i2[h2];
          else
            r2 += i2;
          o2 += 1;
        }
        if (this.pv.length)
          for (h2 = 0; h2 < this.pv.length; h2 += 1)
            r2[h2] /= e2;
        else
          r2 /= e2;
        return r2;
      }
      function i(t2) {
        this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix() });
        var e2 = this._transformCachingAtTime.v;
        if (e2.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
          var r2 = this.a.getValueAtTime(t2);
          e2.translate(-r2[0] * this.a.mult, -r2[1] * this.a.mult, r2[2] * this.a.mult);
        }
        if (this.appliedTransformations < 2) {
          var i2 = this.s.getValueAtTime(t2);
          e2.scale(i2[0] * this.s.mult, i2[1] * this.s.mult, i2[2] * this.s.mult);
        }
        if (this.sk && this.appliedTransformations < 3) {
          var a2 = this.sk.getValueAtTime(t2), s2 = this.sa.getValueAtTime(t2);
          e2.skewFromAxis(-a2 * this.sk.mult, s2 * this.sa.mult);
        }
        if (this.r && this.appliedTransformations < 4) {
          var n2 = this.r.getValueAtTime(t2);
          e2.rotate(-n2 * this.r.mult);
        } else if (!this.r && this.appliedTransformations < 4) {
          var o2 = this.rz.getValueAtTime(t2), h2 = this.ry.getValueAtTime(t2), l2 = this.rx.getValueAtTime(t2), p2 = this.or.getValueAtTime(t2);
          e2.rotateZ(-o2 * this.rz.mult).rotateY(h2 * this.ry.mult).rotateX(l2 * this.rx.mult).rotateZ(-p2[2] * this.or.mult).rotateY(p2[1] * this.or.mult).rotateX(p2[0] * this.or.mult);
        }
        if (this.data.p && this.data.p.s) {
          var f = this.px.getValueAtTime(t2), c = this.py.getValueAtTime(t2);
          if (this.data.p.z) {
            var m = this.pz.getValueAtTime(t2);
            e2.translate(f * this.px.mult, c * this.py.mult, -m * this.pz.mult);
          } else
            e2.translate(f * this.px.mult, c * this.py.mult, 0);
        } else {
          var d = this.p.getValueAtTime(t2);
          e2.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult);
        }
        return e2;
      }
      function a() {
        return this.v.clone(new Matrix());
      }
      var s = TransformPropertyFactory.getTransformProperty;
      TransformPropertyFactory.getTransformProperty = function(t2, e2, r2) {
        var n2 = s(t2, e2, r2);
        return n2.dynamicProperties.length ? n2.getValueAtTime = i.bind(n2) : n2.getValueAtTime = a.bind(n2), n2.setGroupProperty = expressionHelpers.setGroupProperty, n2;
      };
      var n = PropertyFactory.getProp;
      PropertyFactory.getProp = function(i2, a2, s2, o2, h2) {
        var l2 = n(i2, a2, s2, o2, h2);
        l2.kf ? l2.getValueAtTime = expressionHelpers.getValueAtTime.bind(l2) : l2.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l2), l2.setGroupProperty = expressionHelpers.setGroupProperty, l2.loopOut = t, l2.loopIn = e, l2.smooth = r, l2.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l2), l2.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l2), l2.numKeys = 1 === a2.a ? a2.k.length : 0, l2.propertyIndex = a2.ix;
        var p2 = 0;
        return 0 !== s2 && (p2 = createTypedArray("float32", 1 === a2.a ? a2.k[0].s.length : a2.k.length)), l2._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: p2 }, expressionHelpers.searchExpressions(i2, a2, l2), l2.k && h2.addDynamicProperty(l2), l2;
      };
      var o = ShapePropertyFactory.getConstructorFunction(), h = ShapePropertyFactory.getKeyframedConstructorFunction();
      function l() {
      }
      l.prototype = { vertices: function(t2, e2) {
        this.k && this.getValue();
        var r2, i2 = this.v;
        void 0 !== e2 && (i2 = this.getValueAtTime(e2, 0));
        var a2 = i2._length, s2 = i2[t2], n2 = i2.v, o2 = createSizedArray(a2);
        for (r2 = 0; r2 < a2; r2 += 1)
          o2[r2] = "i" === t2 || "o" === t2 ? [s2[r2][0] - n2[r2][0], s2[r2][1] - n2[r2][1]] : [s2[r2][0], s2[r2][1]];
        return o2;
      }, points: function(t2) {
        return this.vertices("v", t2);
      }, inTangents: function(t2) {
        return this.vertices("i", t2);
      }, outTangents: function(t2) {
        return this.vertices("o", t2);
      }, isClosed: function() {
        return this.v.c;
      }, pointOnPath: function(t2, e2) {
        var r2 = this.v;
        void 0 !== e2 && (r2 = this.getValueAtTime(e2, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r2));
        for (var i2, a2 = this._segmentsLength, s2 = a2.lengths, n2 = a2.totalLength * t2, o2 = 0, h2 = s2.length, l2 = 0; o2 < h2; ) {
          if (l2 + s2[o2].addedLength > n2) {
            var p2 = o2, f = r2.c && o2 === h2 - 1 ? 0 : o2 + 1, c = (n2 - l2) / s2[o2].addedLength;
            i2 = bez.getPointInSegment(r2.v[p2], r2.v[f], r2.o[p2], r2.i[f], c, s2[o2]);
            break;
          }
          l2 += s2[o2].addedLength, o2 += 1;
        }
        return i2 || (i2 = r2.c ? [r2.v[0][0], r2.v[0][1]] : [r2.v[r2._length - 1][0], r2.v[r2._length - 1][1]]), i2;
      }, vectorOnPath: function(t2, e2, r2) {
        1 == t2 ? t2 = this.v.c : 0 == t2 && (t2 = 0.999);
        var i2 = this.pointOnPath(t2, e2), a2 = this.pointOnPath(t2 + 1e-3, e2), s2 = a2[0] - i2[0], n2 = a2[1] - i2[1], o2 = Math.sqrt(Math.pow(s2, 2) + Math.pow(n2, 2));
        return 0 === o2 ? [0, 0] : "tangent" === r2 ? [s2 / o2, n2 / o2] : [-n2 / o2, s2 / o2];
      }, tangentOnPath: function(t2, e2) {
        return this.vectorOnPath(t2, e2, "tangent");
      }, normalOnPath: function(t2, e2) {
        return this.vectorOnPath(t2, e2, "normal");
      }, setGroupProperty: expressionHelpers.setGroupProperty, getValueAtTime: expressionHelpers.getStaticValueAtTime }, extendPrototype([l], o), extendPrototype([l], h), h.prototype.getValueAtTime = function(t2) {
        return this._cachingAtTime || (this._cachingAtTime = { shapeValue: shapePool.clone(this.pv), lastIndex: 0, lastTime: initialDefaultFrame }), t2 *= this.elem.globalData.frameRate, (t2 -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t2 ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t2, this.interpolateShape(t2, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
      }, h.prototype.initiateExpression = ExpressionManager.initiateExpression;
      var p = ShapePropertyFactory.getShapeProp;
      ShapePropertyFactory.getShapeProp = function(t2, e2, r2, i2, a2) {
        var s2 = p(t2, e2, r2, i2, a2);
        return s2.propertyIndex = e2.ix, s2.lock = false, 3 === r2 ? expressionHelpers.searchExpressions(t2, e2.pt, s2) : 4 === r2 && expressionHelpers.searchExpressions(t2, e2.ks, s2), s2.k && t2.addDynamicProperty(s2), s2;
      };
    }
    function initialize$1() {
      addPropertyDecorator();
    }
    function addDecorator() {
      TextProperty.prototype.getExpressionValue = function(t, e) {
        var r = this.calculateExpression(e);
        if (t.t !== r) {
          var i = {};
          return this.copyData(i, t), i.t = r.toString(), i.__complete = false, i;
        }
        return t;
      }, TextProperty.prototype.searchProperty = function() {
        var t = this.searchKeyframes(), e = this.searchExpressions();
        return this.kf = t || e, this.kf;
      }, TextProperty.prototype.searchExpressions = function() {
        return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), true) : null;
      };
    }
    function initialize() {
      addDecorator();
    }
    function SVGComposableEffect() {
    }
    SVGComposableEffect.prototype = { createMergeNode: function(t, e) {
      var r, i, a = createNS("feMerge");
      for (a.setAttribute("result", t), i = 0; i < e.length; i += 1)
        (r = createNS("feMergeNode")).setAttribute("in", e[i]), a.appendChild(r), a.appendChild(r);
      return a;
    } };
    var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
    function SVGTintFilter(t, e, r, i, a) {
      this.filterManager = e;
      var s = createNS("feColorMatrix");
      s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = s, s.setAttribute("result", i + "_tint_1"), t.appendChild(s), (s = createNS("feColorMatrix")).setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", i + "_tint_2"), t.appendChild(s), this.matrixFilter = s;
      var n = this.createMergeNode(i, [a, i + "_tint_1", i + "_tint_2"]);
      t.appendChild(n);
    }
    function SVGFillFilter(t, e, r, i) {
      this.filterManager = e;
      var a = createNS("feColorMatrix");
      a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i), t.appendChild(a), this.matrixFilter = a;
    }
    function SVGStrokeEffect(t, e, r) {
      this.initialized = false, this.filterManager = e, this.elem = r, this.paths = [];
    }
    function SVGTritoneFilter(t, e, r, i) {
      this.filterManager = e;
      var a = createNS("feColorMatrix");
      a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(a);
      var s = createNS("feComponentTransfer");
      s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("result", i), this.matrixFilter = s;
      var n = createNS("feFuncR");
      n.setAttribute("type", "table"), s.appendChild(n), this.feFuncR = n;
      var o = createNS("feFuncG");
      o.setAttribute("type", "table"), s.appendChild(o), this.feFuncG = o;
      var h = createNS("feFuncB");
      h.setAttribute("type", "table"), s.appendChild(h), this.feFuncB = h, t.appendChild(s);
    }
    function SVGProLevelsFilter(t, e, r, i) {
      this.filterManager = e;
      var a = this.filterManager.effectElements, s = createNS("feComponentTransfer");
      (a[10].p.k || 0 !== a[10].p.v || a[11].p.k || 1 !== a[11].p.v || a[12].p.k || 1 !== a[12].p.v || a[13].p.k || 0 !== a[13].p.v || a[14].p.k || 1 !== a[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", s)), (a[17].p.k || 0 !== a[17].p.v || a[18].p.k || 1 !== a[18].p.v || a[19].p.k || 1 !== a[19].p.v || a[20].p.k || 0 !== a[20].p.v || a[21].p.k || 1 !== a[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", s)), (a[24].p.k || 0 !== a[24].p.v || a[25].p.k || 1 !== a[25].p.v || a[26].p.k || 1 !== a[26].p.v || a[27].p.k || 0 !== a[27].p.v || a[28].p.k || 1 !== a[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", s)), (a[31].p.k || 0 !== a[31].p.v || a[32].p.k || 1 !== a[32].p.v || a[33].p.k || 1 !== a[33].p.v || a[34].p.k || 0 !== a[34].p.v || a[35].p.k || 1 !== a[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", s)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (s.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(s)), (a[3].p.k || 0 !== a[3].p.v || a[4].p.k || 1 !== a[4].p.v || a[5].p.k || 1 !== a[5].p.v || a[6].p.k || 0 !== a[6].p.v || a[7].p.k || 1 !== a[7].p.v) && ((s = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("result", i), t.appendChild(s), this.feFuncRComposed = this.createFeFunc("feFuncR", s), this.feFuncGComposed = this.createFeFunc("feFuncG", s), this.feFuncBComposed = this.createFeFunc("feFuncB", s));
    }
    function SVGDropShadowEffect(t, e, r, i, a) {
      var s = e.container.globalData.renderConfig.filterSize, n = e.data.fs || s;
      t.setAttribute("x", n.x || s.x), t.setAttribute("y", n.y || s.y), t.setAttribute("width", n.width || s.width), t.setAttribute("height", n.height || s.height), this.filterManager = e;
      var o = createNS("feGaussianBlur");
      o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", i + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, t.appendChild(o);
      var h = createNS("feOffset");
      h.setAttribute("dx", "25"), h.setAttribute("dy", "0"), h.setAttribute("in", i + "_drop_shadow_1"), h.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = h, t.appendChild(h);
      var l = createNS("feFlood");
      l.setAttribute("flood-color", "#00ff00"), l.setAttribute("flood-opacity", "1"), l.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = l, t.appendChild(l);
      var p = createNS("feComposite");
      p.setAttribute("in", i + "_drop_shadow_3"), p.setAttribute("in2", i + "_drop_shadow_2"), p.setAttribute("operator", "in"), p.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(p);
      var f = this.createMergeNode(i, [i + "_drop_shadow_4", a]);
      t.appendChild(f);
    }
    extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v / 100;
        this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0");
      }
    }, SVGFillFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[2].p.v, r = this.filterManager.effectElements[6].p.v;
        this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0");
      }
    }, SVGStrokeEffect.prototype.initialize = function() {
      var t, e, r, i, a = this.elem.layerElement.children || this.elem.layerElement.childNodes;
      for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = (r = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < i; r += 1)
        t = createNS("path"), e.appendChild(t), this.paths.push({ p: t, m: r });
      if (3 === this.filterManager.effectElements[10].p.v) {
        var s = createNS("mask"), n = createElementID();
        s.setAttribute("id", n), s.setAttribute("mask-type", "alpha"), s.appendChild(e), this.elem.globalData.defs.appendChild(s);
        var o = createNS("g");
        for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); a[0]; )
          o.appendChild(a[0]);
        this.elem.layerElement.appendChild(o), this.masker = s, e.setAttribute("stroke", "#fff");
      } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
        if (2 === this.filterManager.effectElements[10].p.v)
          for (a = this.elem.layerElement.children || this.elem.layerElement.childNodes; a.length; )
            this.elem.layerElement.removeChild(a[0]);
        this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff");
      }
      this.initialized = true, this.pathMasker = e;
    }, SVGStrokeEffect.prototype.renderFrame = function(t) {
      var e;
      this.initialized || this.initialize();
      var r, i, a = this.paths.length;
      for (e = 0; e < a; e += 1)
        if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
          var s;
          if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
            var n = 0.01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), o = 0.01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), h = i.getTotalLength();
            s = "0 0 0 " + h * n + " ";
            var l, p = h * (o - n), f = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01, c = Math.floor(p / f);
            for (l = 0; l < c; l += 1)
              s += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01 + " ";
            s += "0 " + 10 * h + " 0 0";
          } else
            s = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01;
          i.setAttribute("stroke-dasharray", s);
        }
      if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
        var m = this.filterManager.effectElements[3].p.v;
        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * m[0]) + "," + bmFloor(255 * m[1]) + "," + bmFloor(255 * m[2]) + ")");
      }
    }, SVGTritoneFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v, a = i[0] + " " + r[0] + " " + e[0], s = i[1] + " " + r[1] + " " + e[1], n = i[2] + " " + r[2] + " " + e[2];
        this.feFuncR.setAttribute("tableValues", a), this.feFuncG.setAttribute("tableValues", s), this.feFuncB.setAttribute("tableValues", n);
      }
    }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
      var r = createNS(t);
      return r.setAttribute("type", "table"), e.appendChild(r), r;
    }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, a) {
      for (var s, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, { length: 256 }), f = 0, c = a - i, m = e - t; o <= 256; )
        n = (s = o / 256) <= h ? m < 0 ? a : i : s >= l ? m < 0 ? i : a : i + c * Math.pow((s - t) / m, 1 / r), p[f] = n, f += 1, o += 256 / 255;
      return p.join(" ");
    }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e, r = this.filterManager.effectElements;
        this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e));
      }
    }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
          var e = this.filterManager.effectElements[0].p.v;
          this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])));
        }
        if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
          var r = this.filterManager.effectElements[3].p.v, i = (this.filterManager.effectElements[2].p.v - 90) * degToRads, a = r * Math.cos(i), s = r * Math.sin(i);
          this.feOffset.setAttribute("dx", a), this.feOffset.setAttribute("dy", s);
        }
      }
    };
    var _svgMatteSymbols = [];
    function SVGMatte3Effect(t, e, r) {
      this.initialized = false, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement;
    }
    function SVGGaussianBlurEffect(t, e, r, i) {
      t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
      var a = createNS("feGaussianBlur");
      a.setAttribute("result", i), t.appendChild(a), this.feGaussianBlur = a;
    }
    function TransformEffect() {
    }
    function SVGTransformEffect(t, e) {
      this.init(e);
    }
    function CVTransformEffect(t) {
      this.init(t);
    }
    return SVGMatte3Effect.prototype.findSymbol = function(t) {
      for (var e = 0, r = _svgMatteSymbols.length; e < r; ) {
        if (_svgMatteSymbols[e] === t)
          return _svgMatteSymbols[e];
        e += 1;
      }
      return null;
    }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
      var r = t.layerElement.parentNode;
      if (r) {
        for (var i, a = r.children, s = 0, n = a.length; s < n && a[s] !== t.layerElement; )
          s += 1;
        s <= n - 2 && (i = a[s + 1]);
        var o = createNS("use");
        o.setAttribute("href", "#" + e), i ? r.insertBefore(o, i) : r.appendChild(o);
      }
    }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
      if (!this.findSymbol(e)) {
        var r = createElementID(), i = createNS("mask");
        i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
        var a = t.globalData.defs;
        a.appendChild(i);
        var s = createNS("symbol");
        s.setAttribute("id", r), this.replaceInParent(e, r), s.appendChild(e.layerElement), a.appendChild(s);
        var n = createNS("use");
        n.setAttribute("href", "#" + r), i.appendChild(n), e.data.hd = false, e.show();
      }
      t.setMatte(e.layerId);
    }, SVGMatte3Effect.prototype.initialize = function() {
      for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i; )
        e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
      this.initialized = true;
    }, SVGMatte3Effect.prototype.renderFrame = function() {
      this.initialized || this.initialize();
    }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = 0.3 * this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = 3 == r ? 0 : e, a = 2 == r ? 0 : e;
        this.feGaussianBlur.setAttribute("stdDeviation", i + " " + a);
        var s = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
        this.feGaussianBlur.setAttribute("edgeMode", s);
      }
    }, TransformEffect.prototype.init = function(t) {
      this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix(), this.opacity = -1, this._mdf = false, this._opMdf = false;
    }, TransformEffect.prototype.renderFrame = function(t) {
      if (this._opMdf = false, this._mdf = false, t || this.effectsManager._mdf) {
        var e = this.effectsManager.effectElements, r = e[0].p.v, i = e[1].p.v, a = 1 === e[2].p.v, s = e[3].p.v, n = a ? s : e[4].p.v, o = e[5].p.v, h = e[6].p.v, l = e[7].p.v;
        this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(0.01 * n, 0.01 * s, 1), this.matrix.rotate(-l * degToRads), this.matrix.skewFromAxis(-o * degToRads, (h + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = true, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = true);
      }
    }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, true), registerEffect$1(21, SVGFillFilter, true), registerEffect$1(22, SVGStrokeEffect, false), registerEffect$1(23, SVGTritoneFilter, true), registerEffect$1(24, SVGProLevelsFilter, true), registerEffect$1(25, SVGDropShadowEffect, true), registerEffect$1(28, SVGMatte3Effect, false), registerEffect$1(29, SVGGaussianBlurEffect, true), registerEffect$1(35, SVGTransformEffect, false), registerEffect(35, CVTransformEffect), lottie;
  });
});
var REACT_LOTTIE_PLAYER_VERSION = "3.5.4";
var LOTTIE_WEB_VERSION = "^5.12.2";
var PlayerState;
var PlayerEvent;
function parseSrc(t) {
  if ("object" == typeof t)
    return t;
  try {
    return JSON.parse(t);
  } catch (t2) {
  }
  try {
    return new URL(t).toString();
  } catch (t2) {
  }
  return t;
}
!function(t) {
  t.Loading = "loading", t.Playing = "playing", t.Paused = "paused", t.Stopped = "stopped", t.Frozen = "frozen", t.Error = "error";
}(PlayerState || (PlayerState = {})), function(t) {
  t.Load = "load", t.InstanceSaved = "instanceSaved", t.Error = "error", t.Ready = "ready", t.Play = "play", t.Pause = "pause", t.Stop = "stop", t.Freeze = "freeze", t.Loop = "loop", t.Complete = "complete", t.Frame = "frame";
}(PlayerEvent || (PlayerEvent = {}));
var defaultOptions = { clearCanvas: false, hideOnTransparent: true, progressiveLoad: true };
var Player = function(t) {
  function e(e2) {
    var r = t.call(this, e2) || this;
    return r.container = null, r.unmounted = false, r.handleBgChange = function(t2) {
      r.setState({ background: t2 });
    }, r.triggerDownload = function(t2, e3) {
      var r2 = document.createElement("a");
      r2.href = t2, r2.download = e3, document.body.appendChild(r2), r2.click(), document.body.removeChild(r2);
    }, r.snapshot = function(t2) {
      var e3;
      void 0 === t2 && (t2 = true);
      var i = r.props.id ? r.props.id : "lottie", a = document.getElementById(i);
      if ("svg" === r.props.renderer) {
        if (a) {
          var s = a.querySelector("svg");
          if (s) {
            var n = new XMLSerializer().serializeToString(s);
            e3 = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(n);
          }
        }
        t2 && r.triggerDownload(e3, "snapshot.svg");
      } else if ("canvas" === r.props.renderer) {
        if (a) {
          var o = a.querySelector("canvas");
          o && (e3 = o.toDataURL("image/png"));
        }
        t2 && r.triggerDownload(e3, "snapshot.png");
      }
      return e3;
    }, "undefined" != typeof window && (window.lottie = lottie2), r.state = { animationData: null, background: "transparent", containerRef: React.createRef(), debug: true, instance: null, playerState: PlayerState.Loading, seeker: 0 }, r;
  }
  return __extends(e, t), e.getDerivedStateFromProps = function(t2, e2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(r) {
        return t2.background !== e2.background ? [2, { background: t2.background }] : [2, null];
      });
    });
  }, e.prototype.getVersions = function() {
    return { lottieWebVersion: LOTTIE_WEB_VERSION, lottiePlayerVersion: REACT_LOTTIE_PLAYER_VERSION };
  }, e.prototype.componentDidMount = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(t2) {
        switch (t2.label) {
          case 0:
            return this.unmounted ? [3, 2] : [4, this.createLottie()];
          case 1:
            t2.sent(), t2.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, e.prototype.componentWillUnmount = function() {
    this.unmounted = true, this.state.instance && this.state.instance.destroy();
  }, e.prototype.componentDidUpdate = function(t2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(e2) {
        switch (e2.label) {
          case 0:
            return this.props.src === t2.src ? [3, 2] : (this.state.instance && this.state.instance.destroy(), [4, this.createLottie()]);
          case 1:
            e2.sent(), e2.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, e.prototype.render = function() {
    var t2 = this, e2 = this.props, r = e2.children, i = e2.loop, a = e2.style, s = e2.onBackgroundChange, n = e2.className, o = this.state, h = o.animationData, l = o.instance, p = o.playerState, f = o.seeker, c = o.debug, m = o.background;
    return React.createElement("div", { className: "lf-player-container" }, this.state.playerState === PlayerState.Error ? React.createElement("div", { className: "lf-error" }, React.createElement("span", { "aria-label": "error-symbol", role: "img" }, "⚠️")) : React.createElement("div", { id: this.props.id ? this.props.id : "lottie", ref: function(e3) {
      return t2.container = e3;
    }, style: __assign({ background: m, margin: "0 auto", outline: "none", overflow: "hidden" }, a), className: n }), React.Children.map(r, function(e3) {
      return React.isValidElement(e3) ? React.cloneElement(e3, { animationData: h, background: m, debug: c, instance: l, loop: i, pause: function() {
        return t2.pause();
      }, play: function() {
        return t2.play();
      }, playerState: p, seeker: f, setBackground: function(e4) {
        t2.setState({ background: e4 }), "function" == typeof s && s(e4);
      }, setSeeker: function(e4, r2) {
        return t2.setSeeker(e4, r2);
      }, stop: function() {
        return t2.stop();
      }, toggleDebug: function() {
        return t2.toggleDebug();
      }, setLoop: function(e4) {
        return t2.setLoop(e4);
      }, colorChangedEvent: function(e4) {
        t2.handleBgChange(e4);
      }, snapshot: function() {
        t2.snapshot();
      } }) : null;
    }));
  }, e.prototype.toggleDebug = function() {
    this.setState({ debug: !this.state.debug });
  }, e.prototype.createLottie = function() {
    return __awaiter(this, void 0, void 0, function() {
      var t2, e2, r, i, a, s, n, o, h, l, p, f, c, m, d = this;
      return __generator(this, function(u) {
        switch (u.label) {
          case 0:
            if (t2 = this.props, e2 = t2.autoplay, r = t2.direction, i = t2.loop, a = t2.lottieRef, s = t2.renderer, n = t2.speed, o = t2.src, h = t2.background, l = t2.rendererSettings, p = t2.hover, f = this.state.instance, !o || !this.container)
              return [2];
            u.label = 1;
          case 1:
            return u.trys.push([1, 5, , 6]), "string" != typeof (c = parseSrc(o)) ? [3, 4] : [4, fetch(c).catch(function() {
              throw d.setState({ playerState: PlayerState.Error }), d.triggerEvent(PlayerEvent.Error), new Error("@LottieFiles/lottie-react: Animation data could not be fetched.");
            })];
          case 2:
            return [4, u.sent().json().catch(function() {
              throw d.setState({ playerState: PlayerState.Error }), d.triggerEvent(PlayerEvent.Error), new Error("@LottieFiles/lottie-react: Animation data could not be fetched.");
            })];
          case 3:
            c = u.sent(), u.label = 4;
          case 4:
            return f && f.destroy(), m = lottie2.loadAnimation({ rendererSettings: l || defaultOptions, animationData: c, autoplay: e2 || false, container: this.container, loop: i || false, renderer: s }), n && m.setSpeed(n), this.setState({ animationData: c }), this.setState({ instance: m }, function() {
              d.triggerEvent(PlayerEvent.InstanceSaved), "function" == typeof a && a(m), e2 && d.play();
            }), m.addEventListener("enterFrame", function() {
              d.triggerEvent(PlayerEvent.Frame), d.setState({ seeker: Math.floor(m.currentFrame) });
            }), m.addEventListener("DOMLoaded", function() {
              d.triggerEvent(PlayerEvent.Load);
            }), m.addEventListener("data_ready", function() {
              d.triggerEvent(PlayerEvent.Ready);
            }), m.addEventListener("data_failed", function() {
              d.setState({ playerState: PlayerState.Error }), d.triggerEvent(PlayerEvent.Error);
            }), m.addEventListener("loopComplete", function() {
              d.triggerEvent(PlayerEvent.Loop);
            }), m.addEventListener("complete", function() {
              d.triggerEvent(PlayerEvent.Complete), d.setState({ playerState: PlayerState.Paused }), d.props.keepLastFrame && !d.props.loop || d.setSeeker(0);
            }), this.container && (this.container.addEventListener("mouseenter", function() {
              p && d.state.playerState !== PlayerState.Playing && (d.props.keepLastFrame && d.stop(), d.play());
            }), this.container.addEventListener("mouseleave", function() {
              p && d.state.playerState === PlayerState.Playing && d.stop();
            })), n && this.setPlayerSpeed(n), r && this.setPlayerDirection(r), h && this.setState({ background: h }), [3, 6];
          case 5:
            return u.sent(), this.setState({ playerState: PlayerState.Error }), this.triggerEvent(PlayerEvent.Error), [3, 6];
          case 6:
            return [2];
        }
      });
    });
  }, e.prototype.play = function() {
    var t2 = this.state.instance;
    t2 && (this.triggerEvent(PlayerEvent.Play), t2.play(), this.setState({ playerState: PlayerState.Playing }));
  }, e.prototype.pause = function() {
    var t2 = this.state.instance;
    t2 && (this.triggerEvent(PlayerEvent.Pause), t2.pause(), this.setState({ playerState: PlayerState.Paused }));
  }, e.prototype.stop = function() {
    var t2 = this.state.instance;
    t2 && (this.triggerEvent(PlayerEvent.Stop), t2.stop(), this.setState({ playerState: PlayerState.Stopped }));
  }, e.prototype.setPlayerSpeed = function(t2) {
    var e2 = this.state.instance;
    e2 && e2.setSpeed(t2);
  }, e.prototype.setPlayerDirection = function(t2) {
    var e2 = this.state.instance;
    e2 && e2.setDirection(t2);
  }, e.prototype.setSeeker = function(t2, e2) {
    void 0 === e2 && (e2 = false);
    var r = this.state, i = r.instance, a = r.playerState;
    i && (e2 && a === PlayerState.Playing ? i.goToAndPlay(t2, true) : (i.goToAndStop(t2, true), this.triggerEvent(PlayerEvent.Pause), this.setState({ playerState: PlayerState.Paused })));
  }, e.prototype.setLoop = function(t2) {
    var e2 = this.state.instance;
    e2 && (e2.loop = t2, this.setState({ instance: e2 }));
  }, e.prototype.triggerEvent = function(t2) {
    var e2 = this.props.onEvent;
    e2 && e2(t2);
  }, e.defaultProps = { loop: false }, e;
}(React.Component);
function styleInject(t, e) {
  void 0 === e && (e = {});
  var r = e.insertAt;
  if (t && "undefined" != typeof document) {
    var i = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", "top" === r && i.firstChild ? i.insertBefore(a, i.firstChild) : i.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t));
  }
}
var css_248z = ".lf-progress {\n  -webkit-appearance: none;\n  -moz-apperance: none;\n  width: 100%;\n  /* margin: 0 10px; */\n  height: 4px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.lf-progress:focus {\n  outline: none;\n  border: none;\n}\n.lf-progress::-moz-range-track {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n}\n.lf-progress::-webkit-slider-thumb {\n  -webkit-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-moz-range-thumb {\n  -moz-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-ms-track {\n  width: 100%;\n  height: 3px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n.lf-progress::-ms-fill-lower {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-fill-upper {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-thumb {\n  border: 0;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress:focus::-ms-fill-lower {\n  background: #ccc;\n}\n.lf-progress:focus::-ms-fill-upper {\n  background: #ccc;\n}\n.lf-player-container :focus {\n  outline: 0;\n}\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-player-btn-container {\n  display: flex;\n  align-items: center;\n}\n.lf-player-btn {\n  cursor: pointer;\n  fill: #999;\n  width: 14px;\n}\n\n.lf-player-btn.active {\n  fill: #555;\n}\n\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  background-color: #ffffff;\n  opacity: 1;\n\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n  padding: 10px;\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-arrow {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  bottom: -9px;\n  border-style: solid;\n  border-width: 10px 10px 0px 10px;\n}\n\n.lf-left-align,\n.lf-left-align .lfarrow {\n  left: 0;\n  right: unset;\n}\n\n.lf-right-align,\n.lf-right-align .lf-arrow {\n  right: 0;\n  left: unset;\n}\n\n.lf-text-input {\n  border: 1px #ccc solid;\n  border-radius: 5px;\n  padding: 3px;\n  width: 60px;\n  margin: 0;\n}\n\n.lf-color-picker {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 90px;\n}\n\n.lf-color-selectors {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.lf-color-component {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n}\n\n.lf-color-component strong {\n  width: 40px;\n}\n\n.lf-color-component input[type='range'] {\n  margin: 0 0 0 10px;\n}\n\n.lf-color-component input[type='number'] {\n  width: 50px;\n  margin: 0 0 0 10px;\n}\n\n.lf-color-preview {\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 5px;\n}\n\n.lf-preview {\n  height: 60px;\n  width: 60px;\n}\n\n.lf-popover-snapshot {\n  width: 150px;\n}\n.lf-popover-snapshot h5 {\n  margin: 5px 0 10px 0;\n  font-size: 0.75rem;\n}\n.lf-popover-snapshot a {\n  display: block;\n  text-decoration: none;\n}\n.lf-popover-snapshot a:before {\n  content: '⥼';\n  margin-right: 5px;\n}\n.lf-popover-snapshot .lf-note {\n  display: block;\n  margin-top: 10px;\n  color: #999;\n}\n.lf-player-controls > div {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.lf-player-controls > div:first-child {\n  margin-left: 0px;\n}\n.lf-player-controls > div:last-child {\n  margin-right: 0px;\n}\n";
var stylesheet = ".lf-progress {\n  -webkit-appearance: none;\n  -moz-apperance: none;\n  width: 100%;\n  /* margin: 0 10px; */\n  height: 4px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.lf-progress:focus {\n  outline: none;\n  border: none;\n}\n.lf-progress::-moz-range-track {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n}\n.lf-progress::-webkit-slider-thumb {\n  -webkit-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-moz-range-thumb {\n  -moz-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-ms-track {\n  width: 100%;\n  height: 3px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n.lf-progress::-ms-fill-lower {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-fill-upper {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-thumb {\n  border: 0;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress:focus::-ms-fill-lower {\n  background: #ccc;\n}\n.lf-progress:focus::-ms-fill-upper {\n  background: #ccc;\n}\n.lf-player-container :focus {\n  outline: 0;\n}\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-player-btn-container {\n  display: flex;\n  align-items: center;\n}\n.lf-player-btn {\n  cursor: pointer;\n  fill: #999;\n  width: 14px;\n}\n\n.lf-player-btn.active {\n  fill: #555;\n}\n\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  background-color: #ffffff;\n  opacity: 1;\n\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n  padding: 10px;\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-arrow {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  bottom: -9px;\n  border-style: solid;\n  border-width: 10px 10px 0px 10px;\n}\n\n.lf-left-align,\n.lf-left-align .lfarrow {\n  left: 0;\n  right: unset;\n}\n\n.lf-right-align,\n.lf-right-align .lf-arrow {\n  right: 0;\n  left: unset;\n}\n\n.lf-text-input {\n  border: 1px #ccc solid;\n  border-radius: 5px;\n  padding: 3px;\n  width: 60px;\n  margin: 0;\n}\n\n.lf-color-picker {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 90px;\n}\n\n.lf-color-selectors {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.lf-color-component {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n}\n\n.lf-color-component strong {\n  width: 40px;\n}\n\n.lf-color-component input[type='range'] {\n  margin: 0 0 0 10px;\n}\n\n.lf-color-component input[type='number'] {\n  width: 50px;\n  margin: 0 0 0 10px;\n}\n\n.lf-color-preview {\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 5px;\n}\n\n.lf-preview {\n  height: 60px;\n  width: 60px;\n}\n\n.lf-popover-snapshot {\n  width: 150px;\n}\n.lf-popover-snapshot h5 {\n  margin: 5px 0 10px 0;\n  font-size: 0.75rem;\n}\n.lf-popover-snapshot a {\n  display: block;\n  text-decoration: none;\n}\n.lf-popover-snapshot a:before {\n  content: '⥼';\n  margin-right: 5px;\n}\n.lf-popover-snapshot .lf-note {\n  display: block;\n  margin-top: 10px;\n  color: #999;\n}\n.lf-player-controls > div {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.lf-player-controls > div:first-child {\n  margin-left: 0px;\n}\n.lf-player-controls > div:last-child {\n  margin-right: 0px;\n}\n";
styleInject(css_248z);
var ColorPicker = function(t) {
  function e() {
    var e2 = null !== t && t.apply(this, arguments) || this;
    return e2.state = { red: 0, green: 0, blue: 0, rgba: null, hex: "#000000", colorComponents: [] }, e2.handleChange = function(t2, r) {
      if ("r" === t2) {
        var i = "#" + (256 | r).toString(16).slice(1) + (256 | e2.state.green).toString(16).slice(1) + (256 | e2.state.blue).toString(16).slice(1);
        e2.setState({ hex: i });
      } else if ("g" === t2) {
        i = "#" + (256 | e2.state.red).toString(16).slice(1) + (256 | r).toString(16).slice(1) + (256 | e2.state.blue).toString(16).slice(1);
        e2.setState({ hex: i });
      } else if ("b" === t2) {
        i = "#" + (256 | e2.state.red).toString(16).slice(1) + (256 | e2.state.green).toString(16).slice(1) + (256 | r).toString(16).slice(1);
        e2.setState({ hex: i });
      }
    }, e2.parseColor = function(t2) {
      var r;
      if ("string" == typeof t2) {
        if ("#" === t2[0]) {
          var i = 4 === t2.length ? [t2.slice(1, 2), t2.slice(2, 3), t2.slice(3, 4)].map(function(t3) {
            return parseInt("" + t3 + t3, 16);
          }) : [t2.slice(1, 3), t2.slice(3, 5), t2.slice(5, 7)].map(function(t3) {
            return parseInt(t3, 16);
          });
          e2.setState({ colorComponents: i });
        } else if (t2.startsWith("rgb")) {
          void 0 !== (i = null === (r = t2.match(/\d+/g)) || void 0 === r ? void 0 : r.map(function(t3) {
            return parseInt(t3);
          })) && e2.setState({ colorComponents: i });
        }
        e2.state.colorComponents.length && (e2.setState({ red: e2.state.colorComponents[0] }), e2.setState({ green: e2.state.colorComponents[1] }), e2.setState({ blue: e2.state.colorComponents[2] }));
      }
    }, e2;
  }
  return __extends(e, t), e.prototype.componentDidUpdate = function(t2, e2) {
    return this.props.colorChangedEvent && this.state.hex !== e2.hex && this.props.colorChangedEvent(this.state.hex), true;
  }, e.prototype.render = function() {
    var t2 = this;
    return React.createElement("div", { className: "lf-color-picker" }, React.createElement("div", { className: "lf-color-selectors" }, React.createElement("div", { className: "lf-color-component" }, React.createElement("strong", null, "Red"), React.createElement("input", { type: "range", min: "0", max: "255", value: this.state.red, onChange: function(e2) {
      t2.setState({ red: e2.target.value }), t2.handleChange("r", e2.target.value);
    } }), React.createElement("input", { className: "lf-text-input", type: "number", min: "0", max: "255", value: this.state.red, onChange: function(e2) {
      t2.setState({ red: e2.target.value }), t2.handleChange("r", e2.target.value);
    } })), React.createElement("div", { className: "lf-color-component" }, React.createElement("strong", null, "Green"), React.createElement("input", { type: "range", min: "0", max: "255", value: this.state.green, onChange: function(e2) {
      t2.setState({ green: e2.target.value }), t2.handleChange("g", e2.target.value);
    } }), React.createElement("input", { className: "lf-text-input", type: "number", min: "0", max: "255", value: this.state.green, onChange: function(e2) {
      t2.setState({ green: e2.target.value }), t2.handleChange("g", e2.target.value);
    } })), React.createElement("div", { className: "lf-color-component" }, React.createElement("strong", null, "Blue"), React.createElement("input", { type: "range", min: "0", max: "255", value: this.state.blue, onChange: function(e2) {
      t2.setState({ blue: e2.target.value }), t2.handleChange("b", e2.target.value);
    } }), React.createElement("input", { className: "lf-text-input", type: "number", min: "0", max: "255", value: this.state.blue, onChange: function(e2) {
      t2.setState({ blue: e2.target.value }), t2.handleChange("b", e2.target.value);
    } }))), React.createElement("div", { className: "lf-color-preview" }, React.createElement("div", { className: "lf-preview", style: { background: "rgb(" + this.state.red + ", " + this.state.green + ", " + this.state.blue + ")" } }), React.createElement("div", null, React.createElement("input", { className: "lf-text-input", type: "text", value: this.state.hex, onChange: function(e2) {
      t2.setState({ hex: e2.target.value }), t2.parseColor(e2.target.value);
    } }))));
  }, e;
}(React.Component);
var Popover = function(t) {
  var e = t.children, r = t.icon, i = (0, import_react.useState)(null), a = i[0], s = i[1], n = (0, import_react.useState)(null), o = n[0], h = n[1], l = (0, import_react.useState)(null), p = l[0], f = l[1], c = (0, import_react.useState)(false), m = c[0], d = c[1];
  (0, import_react.useEffect)(function() {
    if (a && o) {
      var t2 = a.getBoundingClientRect(), e2 = o.getBoundingClientRect(), r2 = t2.left + e2.width > window.innerWidth ? -1 : 0;
      f(r2);
    }
  }, [p, o, a]);
  return React.createElement("div", { className: "lf-popover", onMouseOver: function() {
    d(true);
  }, onMouseLeave: function() {
    d(false);
  }, ref: function(t2) {
    s(t2);
  } }, React.createElement("div", { className: " lf-player-btn" }, r), React.createElement("div", { className: "lf-popover-content", ref: function(t2) {
    h(t2);
  }, style: { bottom: "22px", right: "0px", zIndex: 2, visibility: m ? "visible" : "hidden" } }, e));
};
var Seeker = function(t) {
  function e(e2) {
    var r = t.call(this, e2) || this;
    return r.inputRef = React.createRef(), r.handleChange = function() {
      return function(t2) {
        var e3 = t2.target.value, i = Math.floor(e3 / 100 * r.props.max);
        r.props.onChange(i);
      };
    }, r.state = { value: 0 }, r;
  }
  return __extends(e, t), e.prototype.render = function() {
    var t2 = this.props.value / this.props.max * 100, e2 = { backgroundImage: "-webkit-gradient(linear, left top, right top, color-stop(" + t2 + "%, rgba(15, 204, 206, 0.4)), color-stop(" + t2 + "%, #DAE1E7))" }, r = { position: "absolute", left: 0, marginTop: "8px", width: "20px", display: "block", border: "0px", backgroundColor: this.props.darkTheme ? "#505050" : "rgb(218, 225, 231)", color: this.props.darkTheme ? "#B9B9B9" : "#555", padding: "2px", textAlign: "center", borderRadius: "3px", fontSize: "8px", fontWeight: "bold" }, i = { position: "absolute", right: 0, marginTop: "8px", width: "20px", display: "block", border: "0px", backgroundColor: this.props.darkTheme ? "#505050" : "rgb(218, 225, 231)", color: this.props.darkTheme ? "#B9B9B9" : "#555", padding: "2px", textAlign: "center", borderRadius: "3px", fontSize: "8px", fontWeight: "bold" };
    return React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", width: "100%", marginRight: "5px", marginLeft: "5px", position: "relative" } }, React.createElement("input", { ref: this.inputRef, id: "track", className: "lf-progress", name: "progress", "aria-label": "progress", type: "range", min: "0", max: "100", step: "0.1", value: t2, onInput: this.handleChange(), onChange: this.handleChange(), style: e2 }), this.props.showLabels && React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } }, React.createElement("div", { style: r }, this.props.min), React.createElement("div", { style: i }, this.props.max)));
  }, e;
}(React.Component);
var ControlButtonStyle = { display: "inline-flex", cursor: "pointer" };
var Controls = function(t) {
  function e(e2) {
    var r = t.call(this, e2) || this;
    return r.state = { activeFrame: 0, mouseDown: false }, r;
  }
  return __extends(e, t), e.prototype.render = function() {
    var t2 = this, e2 = this.props, r = e2.instance, i = e2.playerState, a = e2.seeker, s = e2.setLoop, n = e2.setSeeker, o = e2.play, h = e2.pause, l = e2.stop, p = e2.visible, f = e2.buttons;
    if (!r)
      return null;
    if (!p)
      return null;
    var c = !f || f.includes("play"), m = !f || f.includes("stop"), d = !f || f.includes("repeat"), u = !f || f.includes("frame"), y = !f || f.includes("background"), g = !f || f.includes("snapshot"), v = { width: 14, height: 14, viewBox: "0 0 24 24" }, b = Math.round(r.currentFrame);
    return React.createElement("div", { className: "lf-player-controls", style: { display: "flex", justifyContent: "space-between", height: "60px", alignItems: "center", backgroundColor: this.props.transparentTheme ? "transparent" : this.props.darkTheme ? "#3C3C3C" : "#ffffff", paddingLeft: "10px", paddingRight: "10px" } }, c && React.createElement("div", { role: "button", "aria-label": i === PlayerState.Playing ? PlayerEvent.Pause : PlayerEvent.Play, tabIndex: 0, onClick: function() {
      i === PlayerState.Playing ? "function" == typeof h && h() : "function" == typeof o && o();
    }, onKeyDown: function() {
      i === PlayerState.Playing ? "function" == typeof h && h() : "function" == typeof o && o();
    }, className: "lf-player-btn", style: ControlButtonStyle }, i === PlayerState.Playing ? React.createElement("svg", __assign({}, v), React.createElement("rect", { height: "22.9", rx: "1.9", width: "7.6", x: "14", y: ".5" }), React.createElement("rect", { height: "22.9", rx: "1.9", width: "7.6", x: "2", y: ".5" })) : React.createElement("svg", __assign({}, v), React.createElement("path", { d: "M2 3.4C2 1.9 3.5 1 4.8 1.8l16.5 9.6c1.2.7 1.2 2.5 0 3.2L4.8 24.2C3.5 25 2 24.1 2 22.6V3.4z" }))), m && React.createElement("div", { tabIndex: 0, role: "button", "aria-label": PlayerEvent.Stop, onClick: function() {
      return l && l();
    }, onKeyDown: function() {
      return l && l();
    }, className: i === PlayerState.Stopped ? "lf-player-btn active" : "lf-player-btn", style: ControlButtonStyle }, React.createElement("svg", __assign({}, v), React.createElement("path", { d: "M2 3.667A1.67 1.67 0 0 1 3.667 2h16.666A1.67 1.67 0 0 1 22 3.667v16.666A1.67 1.67 0 0 1 20.333\n            22H3.667A1.67 1.67 0 0 1 2 20.333z" }))), React.createElement(Seeker, { min: 0, step: 1, max: r ? r.totalFrames : 1, value: a || 0, onChange: function(e3) {
      n && t2.setState({ activeFrame: e3 }, function() {
        n(e3, false);
      });
    }, onChangeEnd: function(e3) {
      n && t2.setState({ activeFrame: e3 }, function() {
        n(e3, false);
      });
    }, showLabels: this.props.showLabels, darkTheme: this.props.darkTheme }), u && React.createElement("div", { role: "button", className: "lf-player-btn-container" }, React.createElement("input", { style: { outline: "none", border: this.props.darkTheme ? "1px #505050 solid" : "1px #ccc solid", borderRadius: "3px", width: "40px", textAlign: "center", backgroundColor: this.props.darkTheme ? "#505050" : "#ffffff", color: this.props.darkTheme ? "#B9B9B9" : "#999", fontSize: "0.7rem", padding: "0", fontFamily: "inherit" }, type: "text", value: b, readOnly: true })), d && React.createElement("div", { role: "button", "aria-label": PlayerEvent.Loop, tabIndex: 0, onClick: function() {
      r && s && s(!r.loop);
    }, onKeyDown: function() {
      r && s && s(!r.loop);
    }, className: r.loop ? "lf-player-btn active" : "lf-player-btn", style: ControlButtonStyle }, React.createElement("svg", __assign({}, v), React.createElement("path", { d: "M12.5 16.8137h-.13v1.8939h4.9696c3.6455 0 6.6113-2.9658 6.6113-6.6116\n            0-3.64549-2.9658-6.61131-6.6113-6.61131-.5231 0-.947.42391-.947.94696 0 .52304.4239.94696.947.94696 2.6011 0\n            4.7174 2.11634 4.7174 4.71739 0 2.6014-2.1166 4.7177-4.7174 4.7177H12.5zM13.6025\n            5.61469v-.13H7.48137C3.83582 5.48469.87 8.45051.87 12.096c0 3.6509 3.17269 6.6117 6.81304 6.6117.52304 0\n            .94696-.424.94696-.947 0-.5231-.42392-.947-.94696-.947-2.60804 0-4.91907-2.1231-4.91907-4.7176 0-2.60115\n            2.11634-4.71744 4.7174-4.71744h6.12113V5.61469z", stroke: "#8795A1", strokeWidth: ".26" }), React.createElement("path", { d: "M11.1482\n            2.20355h0l-.001-.00116c-.3412-.40061-.9405-.44558-1.33668-.0996h-.00001c-.39526.34519-.43936.94795-.09898\n            1.34767l2.51487 3.03683-2.51894 3.06468c-.33872.40088-.29282 1.00363.10347\n            1.34723l.08517-.0982-.08517.0982c.17853.1549.39807.2308.61647.2308.2671 0 .5328-.114.72-.3347h0l.0011-.0014\n            3.0435-3.68655.0006-.00068c.3035-.35872.3025-.88754-.0019-1.24526l-3.0425-3.65786zM13.9453\n            21.7965h0l.001.0011c.3413.4006.9407.4456 1.337.0996h0c.3953-.3452.4395-.9479.099-1.3477l-2.5154-3.0368\n            2.5195-3.0647c.3388-.4008.2929-1.0036-.1035-1.3472l-.0852.0982.0852-.0982c-.1786-.1549-.3981-.2308-.6166-.2308-.2671\n            0-.5329.114-.7202.3347h0l-.0011.0014-3.0442\n            3.6865c-.0001.0003-.0003.0005-.0005.0007-.3036.3587-.3027.8876.0019 1.2453l3.0431 3.6579z", fill: "#8795A1", stroke: "#8795A1", strokeWidth: ".26" }))), y && React.createElement(Popover, { icon: React.createElement("svg", __assign({}, v), React.createElement("path", { d: "M12 3.1L6.1 8.6a7.6 7.6 0 00-2.2 4 7.2 7.2 0 00.4 4.4 7.9 7.9 0 003 3.5 8.7 8.7 0 004.7 1.3c1.6 0\n            3.2-.5 4.6-1.3s2.4-2 3-3.5a7.2 7.2 0 00.5-4.5 7.6 7.6 0 00-2.2-4L12 3.2zM12 0l7.5 7a9.8 9.8 0 013 5.1\n            9.3 9.3 0 01-.6 5.8c-.9 1.8-2.2 3.3-4 4.4A11.2 11.2 0 0112 24a11.2 11.2 0\n            01-6-1.7c-1.7-1-3-2.6-3.9-4.4a9.3 9.3 0 01-.6-5.8c.4-2 1.5-3.7 3-5L12 0zM6 14h12c0 1.5-.7 3-1.8 4s-2.6\n            1.6-4.2 1.6S9 19 7.8 18s-1.7-2.5-1.7-4z" })) }, React.createElement("div", { slot: "content", className: "lf-popover popover-background" }, React.createElement(ColorPicker, { colorChangedEvent: this.props.colorChangedEvent }))), g && React.createElement(Popover, { icon: React.createElement("svg", __assign({}, v), React.createElement("path", { clipRule: "evenodd", d: "M0 3.01A2.983 2.983 0 012.983.027H16.99a2.983 2.983 0 012.983 2.983v14.008a2.982 2.982 0 01-2.983\n              2.983H2.983A2.983 2.983 0 010 17.018zm2.983-.941a.941.941 0 00-.942.94v14.01c0\n              .52.422.94.942.94H16.99a.94.94 0 00.941-.94V3.008a.941.941 0 00-.94-.94H2.981z", fillRule: "evenodd" }), React.createElement("path", { d: "M12.229 7.945l-2.07 4.598-2.586-2.605-2.414 2.758v2.146h9.656V11.93z" }), React.createElement("circle", { cx: "7.444", cy: "6.513", r: "2.032" }), React.createElement("path", { d: "M9.561 23.916h11.25a2.929 2.929 0 002.926-2.927V9.954a1.06 1.06 0 10-2.122 0v11.035a.805.805 0\n              01-.803.804H9.562a1.061 1.061 0 100 2.123z", stroke: "#8795a1", strokeWidth: ".215" })) }, React.createElement("div", { slot: "content", className: "lf-popover lf-popover-snapshot", onWheel: function(t3) {
      n && n(b + (t3.deltaY > 0 ? -1 : 1), false);
    } }, React.createElement("h5", null, "Frame ", b), React.createElement("div", { style: { cursor: "pointer", color: "#0FCCCE" }, onClick: this.props.snapshot }, "Download SVG"), React.createElement("div", { style: { cursor: "pointer", color: "#0FCCCE" }, onClick: this.props.snapshot }, "Download PNG"), React.createElement("i", { className: "lf-note" }, "Scroll with mousewheel to find exact frame"))));
  }, e;
}(React.Component);
export {
  Controls,
  Player,
  PlayerEvent,
  PlayerState,
  Seeker,
  parseSrc
};
/*! Bundled license information:

@lottiefiles/react-lottie-player/dist/lottie-react.esm.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=@lottiefiles_react-lottie-player.js.map
