import {
  require_react
} from "./chunk-6P5PNMGD.js";
import {
  __commonJS
} from "./chunk-WXXH56N5.js";

// node_modules/react-confetti/dist/react-confetti.min.js
var require_react_confetti_min = __commonJS({
  "node_modules/react-confetti/dist/react-confetti.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e(require_react()) : "function" == typeof define && define.amd ? define(["react"], e) : "object" == typeof exports ? exports.ReactConfetti = e(require_react()) : t.ReactConfetti = e(t.React);
    }("undefined" != typeof self ? self : exports, function(t) {
      return function(t2) {
        var e = {};
        function n(r) {
          if (e[r])
            return e[r].exports;
          var i = e[r] = { i: r, l: false, exports: {} };
          return t2[r].call(i.exports, i, i.exports, n), i.l = true, i.exports;
        }
        return n.m = t2, n.c = e, n.d = function(t3, e2, r) {
          n.o(t3, e2) || Object.defineProperty(t3, e2, { enumerable: true, get: r });
        }, n.r = function(t3) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
        }, n.t = function(t3, e2) {
          if (1 & e2 && (t3 = n(t3)), 8 & e2)
            return t3;
          if (4 & e2 && "object" == typeof t3 && t3 && t3.__esModule)
            return t3;
          var r = /* @__PURE__ */ Object.create(null);
          if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: t3 }), 2 & e2 && "string" != typeof t3)
            for (var i in t3)
              n.d(r, i, (function(e3) {
                return t3[e3];
              }).bind(null, i));
          return r;
        }, n.n = function(t3) {
          var e2 = t3 && t3.__esModule ? function() {
            return t3.default;
          } : function() {
            return t3;
          };
          return n.d(e2, "a", e2), e2;
        }, n.o = function(t3, e2) {
          return Object.prototype.hasOwnProperty.call(t3, e2);
        }, n.p = "", n(n.s = 2);
      }([function(e, n) {
        e.exports = t;
      }, function(t2, e, n) {
        "use strict";
        var r = { linear: function(t3, e2, n2, r2) {
          return (n2 - e2) * t3 / r2 + e2;
        }, easeInQuad: function(t3, e2, n2, r2) {
          return (n2 - e2) * (t3 /= r2) * t3 + e2;
        }, easeOutQuad: function(t3, e2, n2, r2) {
          return -(n2 - e2) * (t3 /= r2) * (t3 - 2) + e2;
        }, easeInOutQuad: function(t3, e2, n2, r2) {
          var i = n2 - e2;
          return (t3 /= r2 / 2) < 1 ? i / 2 * t3 * t3 + e2 : -i / 2 * (--t3 * (t3 - 2) - 1) + e2;
        }, easeInCubic: function(t3, e2, n2, r2) {
          return (n2 - e2) * (t3 /= r2) * t3 * t3 + e2;
        }, easeOutCubic: function(t3, e2, n2, r2) {
          return (n2 - e2) * ((t3 = t3 / r2 - 1) * t3 * t3 + 1) + e2;
        }, easeInOutCubic: function(t3, e2, n2, r2) {
          var i = n2 - e2;
          return (t3 /= r2 / 2) < 1 ? i / 2 * t3 * t3 * t3 + e2 : i / 2 * ((t3 -= 2) * t3 * t3 + 2) + e2;
        }, easeInQuart: function(t3, e2, n2, r2) {
          return (n2 - e2) * (t3 /= r2) * t3 * t3 * t3 + e2;
        }, easeOutQuart: function(t3, e2, n2, r2) {
          return -(n2 - e2) * ((t3 = t3 / r2 - 1) * t3 * t3 * t3 - 1) + e2;
        }, easeInOutQuart: function(t3, e2, n2, r2) {
          var i = n2 - e2;
          return (t3 /= r2 / 2) < 1 ? i / 2 * t3 * t3 * t3 * t3 + e2 : -i / 2 * ((t3 -= 2) * t3 * t3 * t3 - 2) + e2;
        }, easeInQuint: function(t3, e2, n2, r2) {
          return (n2 - e2) * (t3 /= r2) * t3 * t3 * t3 * t3 + e2;
        }, easeOutQuint: function(t3, e2, n2, r2) {
          return (n2 - e2) * ((t3 = t3 / r2 - 1) * t3 * t3 * t3 * t3 + 1) + e2;
        }, easeInOutQuint: function(t3, e2, n2, r2) {
          var i = n2 - e2;
          return (t3 /= r2 / 2) < 1 ? i / 2 * t3 * t3 * t3 * t3 * t3 + e2 : i / 2 * ((t3 -= 2) * t3 * t3 * t3 * t3 + 2) + e2;
        }, easeInSine: function(t3, e2, n2, r2) {
          var i = n2 - e2;
          return -i * Math.cos(t3 / r2 * (Math.PI / 2)) + i + e2;
        }, easeOutSine: function(t3, e2, n2, r2) {
          return (n2 - e2) * Math.sin(t3 / r2 * (Math.PI / 2)) + e2;
        }, easeInOutSine: function(t3, e2, n2, r2) {
          return -(n2 - e2) / 2 * (Math.cos(Math.PI * t3 / r2) - 1) + e2;
        }, easeInExpo: function(t3, e2, n2, r2) {
          return 0 == t3 ? e2 : (n2 - e2) * Math.pow(2, 10 * (t3 / r2 - 1)) + e2;
        }, easeOutExpo: function(t3, e2, n2, r2) {
          var i = n2 - e2;
          return t3 == r2 ? e2 + i : i * (1 - Math.pow(2, -10 * t3 / r2)) + e2;
        }, easeInOutExpo: function(t3, e2, n2, r2) {
          var i = n2 - e2;
          return 0 === t3 ? e2 : t3 === r2 ? e2 + i : (t3 /= r2 / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t3 - 1)) + e2 : i / 2 * (2 - Math.pow(2, -10 * --t3)) + e2;
        }, easeInCirc: function(t3, e2, n2, r2) {
          return -(n2 - e2) * (Math.sqrt(1 - (t3 /= r2) * t3) - 1) + e2;
        }, easeOutCirc: function(t3, e2, n2, r2) {
          return (n2 - e2) * Math.sqrt(1 - (t3 = t3 / r2 - 1) * t3) + e2;
        }, easeInOutCirc: function(t3, e2, n2, r2) {
          var i = n2 - e2;
          return (t3 /= r2 / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t3 * t3) - 1) + e2 : i / 2 * (Math.sqrt(1 - (t3 -= 2) * t3) + 1) + e2;
        }, easeInElastic: function(t3, e2, n2, r2) {
          var i, o, a, c = n2 - e2;
          return a = 1.70158, 0 === t3 ? e2 : 1 == (t3 /= r2) ? e2 + c : ((o = 0) || (o = 0.3 * r2), (i = c) < Math.abs(c) ? (i = c, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(c / i), -i * Math.pow(2, 10 * (t3 -= 1)) * Math.sin((t3 * r2 - a) * (2 * Math.PI) / o) + e2);
        }, easeOutElastic: function(t3, e2, n2, r2) {
          var i, o, a, c = n2 - e2;
          return a = 1.70158, 0 === t3 ? e2 : 1 == (t3 /= r2) ? e2 + c : ((o = 0) || (o = 0.3 * r2), (i = c) < Math.abs(c) ? (i = c, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(c / i), i * Math.pow(2, -10 * t3) * Math.sin((t3 * r2 - a) * (2 * Math.PI) / o) + c + e2);
        }, easeInOutElastic: function(t3, e2, n2, r2) {
          var i, o, a, c = n2 - e2;
          return a = 1.70158, 0 === t3 ? e2 : 2 == (t3 /= r2 / 2) ? e2 + c : ((o = 0) || (o = r2 * (0.3 * 1.5)), (i = c) < Math.abs(c) ? (i = c, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(c / i), t3 < 1 ? i * Math.pow(2, 10 * (t3 -= 1)) * Math.sin((t3 * r2 - a) * (2 * Math.PI) / o) * -0.5 + e2 : i * Math.pow(2, -10 * (t3 -= 1)) * Math.sin((t3 * r2 - a) * (2 * Math.PI) / o) * 0.5 + c + e2);
        }, easeInBack: function(t3, e2, n2, r2, i) {
          return void 0 === i && (i = 1.70158), (n2 - e2) * (t3 /= r2) * t3 * ((i + 1) * t3 - i) + e2;
        }, easeOutBack: function(t3, e2, n2, r2, i) {
          return void 0 === i && (i = 1.70158), (n2 - e2) * ((t3 = t3 / r2 - 1) * t3 * ((i + 1) * t3 + i) + 1) + e2;
        }, easeInOutBack: function(t3, e2, n2, r2, i) {
          var o = n2 - e2;
          return void 0 === i && (i = 1.70158), (t3 /= r2 / 2) < 1 ? o / 2 * (t3 * t3 * ((1 + (i *= 1.525)) * t3 - i)) + e2 : o / 2 * ((t3 -= 2) * t3 * ((1 + (i *= 1.525)) * t3 + i) + 2) + e2;
        }, easeInBounce: function(t3, e2, n2, i) {
          var o = n2 - e2;
          return o - r.easeOutBounce(i - t3, 0, o, i) + e2;
        }, easeOutBounce: function(t3, e2, n2, r2) {
          var i = n2 - e2;
          return (t3 /= r2) < 1 / 2.75 ? i * (7.5625 * t3 * t3) + e2 : t3 < 2 / 2.75 ? i * (7.5625 * (t3 -= 1.5 / 2.75) * t3 + 0.75) + e2 : t3 < 2.5 / 2.75 ? i * (7.5625 * (t3 -= 2.25 / 2.75) * t3 + 0.9375) + e2 : i * (7.5625 * (t3 -= 2.625 / 2.75) * t3 + 0.984375) + e2;
        }, easeInOutBounce: function(t3, e2, n2, i) {
          var o = n2 - e2;
          return t3 < i / 2 ? 0.5 * r.easeInBounce(2 * t3, 0, o, i) + e2 : 0.5 * r.easeOutBounce(2 * t3 - i, 0, o, i) + 0.5 * o + e2;
        } };
        t2.exports = r;
      }, function(t2, e, n) {
        t2.exports = n(3);
      }, function(t2, e, n) {
        "use strict";
        n.r(e), n.d(e, "ReactConfetti", function() {
          return Q;
        });
        var r, i, o = n(0), a = n.n(o), c = n(1), s = n.n(c);
        function u(t3, e2) {
          return t3 + Math.random() * (e2 - t3);
        }
        function f(t3, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
          }
        }
        function h(t3, e2, n2) {
          return e2 in t3 ? Object.defineProperty(t3, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t3[e2] = n2, t3;
        }
        !function(t3) {
          t3[t3.Circle = 0] = "Circle", t3[t3.Square = 1] = "Square", t3[t3.Strip = 2] = "Strip";
        }(r || (r = {})), function(t3) {
          t3[t3.Positive = 1] = "Positive", t3[t3.Negative = -1] = "Negative";
        }(i || (i = {}));
        var l = function() {
          function t3(e3, n3, r2, o3) {
            !function(t4, e4) {
              if (!(t4 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t3), h(this, "context", void 0), h(this, "radius", void 0), h(this, "x", void 0), h(this, "y", void 0), h(this, "w", void 0), h(this, "h", void 0), h(this, "vx", void 0), h(this, "vy", void 0), h(this, "shape", void 0), h(this, "angle", void 0), h(this, "angularSpin", void 0), h(this, "color", void 0), h(this, "rotateY", void 0), h(this, "rotationDirection", void 0), h(this, "getOptions", void 0), this.getOptions = n3;
            var a2, c2, s2 = this.getOptions(), f2 = s2.colors, l2 = s2.initialVelocityX, p2 = s2.initialVelocityY;
            this.context = e3, this.x = r2, this.y = o3, this.w = u(5, 20), this.h = u(5, 20), this.radius = u(5, 10), this.vx = "number" == typeof l2 ? u(-l2, l2) : u(l2.min, l2.max), this.vy = "number" == typeof p2 ? u(-p2, 0) : u(p2.min, p2.max), this.shape = (a2 = 0, c2 = 2, Math.floor(a2 + Math.random() * (c2 - a2 + 1))), this.angle = u(0, 360) * Math.PI / 180, this.angularSpin = u(-0.2, 0.2), this.color = f2[Math.floor(Math.random() * f2.length)], this.rotateY = u(0, 1), this.rotationDirection = u(0, 1) ? i.Positive : i.Negative;
          }
          var e2, n2, o2;
          return e2 = t3, (n2 = [{ key: "update", value: function() {
            var t4 = this.getOptions(), e3 = t4.gravity, n3 = t4.wind, o3 = t4.friction, a2 = t4.opacity, c2 = t4.drawShape;
            this.x += this.vx, this.y += this.vy, this.vy += e3, this.vx += n3, this.vx *= o3, this.vy *= o3, this.rotateY >= 1 && this.rotationDirection === i.Positive ? this.rotationDirection = i.Negative : this.rotateY <= -1 && this.rotationDirection === i.Negative && (this.rotationDirection = i.Positive);
            var s2 = 0.1 * this.rotationDirection;
            if (this.rotateY += s2, this.angle += this.angularSpin, this.context.save(), this.context.translate(this.x, this.y), this.context.rotate(this.angle), this.context.scale(1, this.rotateY), this.context.rotate(this.angle), this.context.beginPath(), this.context.fillStyle = this.color, this.context.strokeStyle = this.color, this.context.globalAlpha = a2, this.context.lineCap = "round", this.context.lineWidth = 2, c2 && "function" == typeof c2)
              c2.call(this, this.context);
            else
              switch (this.shape) {
                case r.Circle:
                  this.context.beginPath(), this.context.arc(0, 0, this.radius, 0, 2 * Math.PI), this.context.fill();
                  break;
                case r.Square:
                  this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
                  break;
                case r.Strip:
                  this.context.fillRect(-this.w / 6, -this.h / 2, this.w / 3, this.h);
              }
            this.context.closePath(), this.context.restore();
          } }]) && f(e2.prototype, n2), o2 && f(e2, o2), t3;
        }();
        function p(t3, e2, n2) {
          return e2 in t3 ? Object.defineProperty(t3, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t3[e2] = n2, t3;
        }
        var v = function t3(e2, n2) {
          var r2 = this;
          !function(t4, e3) {
            if (!(t4 instanceof e3))
              throw new TypeError("Cannot call a class as a function");
          }(this, t3), p(this, "canvas", void 0), p(this, "context", void 0), p(this, "getOptions", void 0), p(this, "x", 0), p(this, "y", 0), p(this, "w", 0), p(this, "h", 0), p(this, "lastNumberOfPieces", 0), p(this, "tweenInitTime", Date.now()), p(this, "particles", []), p(this, "particlesGenerated", 0), p(this, "removeParticleAt", function(t4) {
            r2.particles.splice(t4, 1);
          }), p(this, "getParticle", function() {
            var t4 = u(r2.x, r2.w + r2.x), e3 = u(r2.y, r2.h + r2.y);
            return new l(r2.context, r2.getOptions, t4, e3);
          }), p(this, "animate", function() {
            var t4 = r2.canvas, e3 = r2.context, n3 = r2.particlesGenerated, i3 = r2.lastNumberOfPieces, o2 = r2.getOptions(), a2 = o2.run, c2 = o2.recycle, s2 = o2.numberOfPieces, u2 = o2.debug, f2 = o2.tweenFunction, h2 = o2.tweenDuration;
            if (!a2)
              return false;
            var l2 = r2.particles.length, p2 = c2 ? l2 : n3, v2 = Date.now();
            if (p2 < s2) {
              i3 !== s2 && (r2.tweenInitTime = v2, r2.lastNumberOfPieces = s2);
              for (var y2 = r2.tweenInitTime, d2 = f2(v2 - y2 > h2 ? h2 : Math.max(0, v2 - y2), p2, s2, h2), b2 = Math.round(d2 - p2), g2 = 0; g2 < b2; g2++)
                r2.particles.push(r2.getParticle());
              r2.particlesGenerated += b2;
            }
            return u2 && (e3.font = "12px sans-serif", e3.fillStyle = "#333", e3.textAlign = "right", e3.fillText("Particles: ".concat(l2), t4.width - 10, t4.height - 20)), r2.particles.forEach(function(e4, n4) {
              e4.update(), (e4.y > t4.height || e4.y < -100 || e4.x > t4.width + 100 || e4.x < -100) && (c2 && p2 <= s2 ? r2.particles[n4] = r2.getParticle() : r2.removeParticleAt(n4));
            }), l2 > 0 || p2 < s2;
          }), this.canvas = e2;
          var i2 = this.canvas.getContext("2d");
          if (!i2)
            throw new Error("Could not get canvas context");
          this.context = i2, this.getOptions = n2;
        };
        function y(t3, e2) {
          var n2 = Object.keys(t3);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(t3);
            e2 && (r2 = r2.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t3, e3).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function d(t3) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var n2 = null != arguments[e2] ? arguments[e2] : {};
            e2 % 2 ? y(Object(n2), true).forEach(function(e3) {
              g(t3, e3, n2[e3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(n2)) : y(Object(n2)).forEach(function(e3) {
              Object.defineProperty(t3, e3, Object.getOwnPropertyDescriptor(n2, e3));
            });
          }
          return t3;
        }
        function b(t3, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
          }
        }
        function g(t3, e2, n2) {
          return e2 in t3 ? Object.defineProperty(t3, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t3[e2] = n2, t3;
        }
        var O = { width: "undefined" != typeof window ? window.innerWidth : 300, height: "undefined" != typeof window ? window.innerHeight : 200, numberOfPieces: 200, friction: 0.99, wind: 0, gravity: 0.1, initialVelocityX: 4, initialVelocityY: 10, colors: ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548"], opacity: 1, debug: false, tweenFunction: s.a.easeInOutQuad, tweenDuration: 5e3, recycle: true, run: true }, w = function() {
          function t3(e3, n3) {
            var r3 = this;
            !function(t4, e4) {
              if (!(t4 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t3), g(this, "canvas", void 0), g(this, "context", void 0), g(this, "_options", void 0), g(this, "generator", void 0), g(this, "rafId", void 0), g(this, "setOptionsWithDefaults", function(t4) {
              var e4 = { confettiSource: { x: 0, y: 0, w: r3.canvas.width, h: 0 } };
              r3._options = d(d(d({}, e4), O), t4), Object.assign(r3, t4.confettiSource);
            }), g(this, "update", function() {
              var t4 = r3.options, e4 = t4.run, n4 = t4.onConfettiComplete, i3 = r3.canvas, o2 = r3.context;
              e4 && (o2.fillStyle = "white", o2.clearRect(0, 0, i3.width, i3.height)), r3.generator.animate() ? r3.rafId = requestAnimationFrame(r3.update) : (n4 && "function" == typeof n4 && r3.generator.particlesGenerated > 0 && n4.call(r3, r3), r3._options.run = false);
            }), g(this, "reset", function() {
              r3.generator && r3.generator.particlesGenerated > 0 && (r3.generator.particlesGenerated = 0, r3.generator.particles = [], r3.generator.lastNumberOfPieces = 0);
            }), g(this, "stop", function() {
              r3.options = { run: false }, r3.rafId && (cancelAnimationFrame(r3.rafId), r3.rafId = void 0);
            }), this.canvas = e3;
            var i2 = this.canvas.getContext("2d");
            if (!i2)
              throw new Error("Could not get canvas context");
            this.context = i2, this.generator = new v(this.canvas, function() {
              return r3.options;
            }), this.options = n3, this.update();
          }
          var e2, n2, r2;
          return e2 = t3, (n2 = [{ key: "options", get: function() {
            return this._options;
          }, set: function(t4) {
            var e3 = this._options && this._options.run, n3 = this._options && this._options.recycle;
            this.setOptionsWithDefaults(t4), this.generator && (Object.assign(this.generator, this.options.confettiSource), "boolean" == typeof t4.recycle && t4.recycle && false === n3 && (this.generator.lastNumberOfPieces = this.generator.particles.length)), "boolean" == typeof t4.run && t4.run && false === e3 && this.update();
          } }]) && b(e2.prototype, n2), r2 && b(e2, r2), t3;
        }();
        function m(t3) {
          return function(t4) {
            if (Array.isArray(t4))
              return C(t4);
          }(t3) || function(t4) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t4))
              return Array.from(t4);
          }(t3) || S(t3) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function x(t3) {
          return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          })(t3);
        }
        function P() {
          return (P = Object.assign || function(t3) {
            for (var e2 = 1; e2 < arguments.length; e2++) {
              var n2 = arguments[e2];
              for (var r2 in n2)
                Object.prototype.hasOwnProperty.call(n2, r2) && (t3[r2] = n2[r2]);
            }
            return t3;
          }).apply(this, arguments);
        }
        function j(t3, e2) {
          var n2 = Object.keys(t3);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(t3);
            e2 && (r2 = r2.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t3, e3).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function M(t3) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var n2 = null != arguments[e2] ? arguments[e2] : {};
            e2 % 2 ? j(Object(n2), true).forEach(function(e3) {
              T(t3, e3, n2[e3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(n2)) : j(Object(n2)).forEach(function(e3) {
              Object.defineProperty(t3, e3, Object.getOwnPropertyDescriptor(n2, e3));
            });
          }
          return t3;
        }
        function I(t3, e2) {
          return function(t4) {
            if (Array.isArray(t4))
              return t4;
          }(t3) || function(t4, e3) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t4)))
              return;
            var n2 = [], r2 = true, i2 = false, o2 = void 0;
            try {
              for (var a2, c2 = t4[Symbol.iterator](); !(r2 = (a2 = c2.next()).done) && (n2.push(a2.value), !e3 || n2.length !== e3); r2 = true)
                ;
            } catch (t5) {
              i2 = true, o2 = t5;
            } finally {
              try {
                r2 || null == c2.return || c2.return();
              } finally {
                if (i2)
                  throw o2;
              }
            }
            return n2;
          }(t3, e2) || S(t3, e2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function S(t3, e2) {
          if (t3) {
            if ("string" == typeof t3)
              return C(t3, e2);
            var n2 = Object.prototype.toString.call(t3).slice(8, -1);
            return "Object" === n2 && t3.constructor && (n2 = t3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(t3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? C(t3, e2) : void 0;
          }
        }
        function C(t3, e2) {
          (null == e2 || e2 > t3.length) && (e2 = t3.length);
          for (var n2 = 0, r2 = new Array(e2); n2 < e2; n2++)
            r2[n2] = t3[n2];
          return r2;
        }
        function D(t3, e2) {
          if (!(t3 instanceof e2))
            throw new TypeError("Cannot call a class as a function");
        }
        function E(t3, e2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
          }
        }
        function _(t3, e2) {
          return (_ = Object.setPrototypeOf || function(t4, e3) {
            return t4.__proto__ = e3, t4;
          })(t3, e2);
        }
        function R(t3) {
          var e2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }();
          return function() {
            var n2, r2 = F(t3);
            if (e2) {
              var i2 = F(this).constructor;
              n2 = Reflect.construct(r2, arguments, i2);
            } else
              n2 = r2.apply(this, arguments);
            return k(this, n2);
          };
        }
        function k(t3, e2) {
          return !e2 || "object" !== x(e2) && "function" != typeof e2 ? A(t3) : e2;
        }
        function A(t3) {
          if (void 0 === t3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t3;
        }
        function F(t3) {
          return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          })(t3);
        }
        function T(t3, e2, n2) {
          return e2 in t3 ? Object.defineProperty(t3, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t3[e2] = n2, t3;
        }
        var B = a.a.createRef(), N = function(t3) {
          !function(t4, e3) {
            if ("function" != typeof e3 && null !== e3)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e3 && _(t4, e3);
          }(o2, t3);
          var e2, n2, r2, i2 = R(o2);
          function o2(t4) {
            var e3;
            D(this, o2);
            for (var n3 = arguments.length, r3 = new Array(n3 > 1 ? n3 - 1 : 0), c2 = 1; c2 < n3; c2++)
              r3[c2 - 1] = arguments[c2];
            return T(A(e3 = i2.call.apply(i2, [this, t4].concat(r3))), "canvas", a.a.createRef()), T(A(e3), "confetti", void 0), e3.canvas = t4.canvasRef || B, e3;
          }
          return e2 = o2, (n2 = [{ key: "componentDidMount", value: function() {
            if (this.canvas.current) {
              var t4 = q(this.props)[0];
              this.confetti = new w(this.canvas.current, t4);
            }
          } }, { key: "componentDidUpdate", value: function() {
            var t4 = q(this.props)[0];
            this.confetti && (this.confetti.options = t4);
          } }, { key: "componentWillUnmount", value: function() {
            this.confetti && this.confetti.stop(), this.confetti = void 0;
          } }, { key: "render", value: function() {
            var t4 = I(q(this.props), 2), e3 = t4[0], n3 = t4[1], r3 = M({ zIndex: 2, position: "absolute", pointerEvents: "none", top: 0, left: 0, bottom: 0, right: 0 }, n3.style);
            return a.a.createElement("canvas", P({ width: e3.width, height: e3.height, ref: this.canvas }, n3, { style: r3 }));
          } }]) && E(e2.prototype, n2), r2 && E(e2, r2), o2;
        }(o.Component);
        function q(t3) {
          var e2 = {}, n2 = {}, r2 = [].concat(m(Object.keys(O)), ["confettiSource", "drawShape", "onConfettiComplete"]), i2 = ["canvasRef"];
          for (var o2 in t3) {
            var a2 = t3[o2];
            r2.includes(o2) ? e2[o2] = a2 : i2.includes(o2) ? i2[o2] = a2 : n2[o2] = a2;
          }
          return [e2, n2, {}];
        }
        T(N, "defaultProps", M({}, O)), T(N, "displayName", "ReactConfetti");
        var Q = a.a.forwardRef(function(t3, e2) {
          return a.a.createElement(N, P({ canvasRef: e2 }, t3));
        });
        e.default = Q;
      }]).default;
    });
  }
});
export default require_react_confetti_min();
//# sourceMappingURL=react-confetti.js.map
