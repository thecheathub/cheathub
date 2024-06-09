let device = true
(function (t, n) {
  if (typeof exports == "object" && typeof module == "object") {
    module.exports = n();
  } else if (typeof define == "function" && define.amd) {
    define([], n);
  } else if (typeof exports == "object") {
    exports.devtoolsDetector = n();
  } else {
    t.devtoolsDetector = n();
  }
})(typeof self != "undefined" ? self : this, function () {
  return function (t) {
    var n = {};
    function e(r) {
      if (n[r]) {
        return n[r].exports;
      }
      var i = n[r] = {
        i: r,
        l: false,
        exports: {}
      };
      t[r].call(i.exports, i, i.exports, e);
      i.l = true;
      return i.exports;
    }
    e.m = t;
    e.c = n;
    e.d = function (t, n, r) {
      if (!e.o(t, n)) {
        Object.defineProperty(t, n, {
          configurable: false,
          enumerable: true,
          get: r
        });
      }
    };
    e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      e.d(n, "a", n);
      return n;
    };
    e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    };
    e.p = "";
    return e(e.s = 4);
  }([function (t, n, e) {
    "use strict";

    (function (t) {
      n.c = function () {
        if (typeof performance != "undefined") {
          return performance.now();
        } else {
          return Date.now();
        }
      };
      n.b = function (t = {}) {
        var n = t.includes;
        var e = n === undefined ? [] : n;
        var r = t.excludes;
        var i = r === undefined ? [] : r;
        var o = false;
        var u = false;
        for (var c = 0, a = e; c < a.length; c++) {
          if (a[c] === true) {
            o = true;
            break;
          }
        }
        for (var f = 0, s = i; f < s.length; f++) {
          if (s[f] === true) {
            u = true;
            break;
          }
        }
        return o && !u;
      };
      n.d = function (t, n, e) {
        var o = i.a[t];
        return o !== undefined && Object(r.compare)(o, n, e);
      };
      n.a = function () {
        if (typeof self != "undefined") {
          return self;
        } else if (typeof window != "undefined") {
          return window;
        } else if (t !== undefined) {
          return t;
        } else {
          return this;
        }
      };
      var r = e(11);
      e.n(r);
      var i = e(5);
    }).call(n, e(10));
  }, function (t, n, e) {
    "use strict";

    e.d(n, "c", function () {
      return f;
    });
    e.d(n, "d", function () {
      return s;
    });
    e.d(n, "b", function () {
      return l;
    });
    e.d(n, "g", function () {
      return d;
    });
    e.d(n, "e", function () {
      return h;
    });
    e.d(n, "a", function () {
      return p;
    });
    e.d(n, "f", function () {
      return b;
    });
    var u = e(3);
    var c = e(0);
    var a = Object(c.a)();
    var f = "InstallTrigger" in ((a == null ? undefined : a.window) || {}) || /firefox/i.test(u.b);
    var s = /trident/i.test(u.b) || /msie/i.test(u.b);
    var l = /edge/i.test(u.b);
    var d = /webkit/i.test(u.b) && !l;
    var h = /IqiyiApp/.test(u.b);
    var p = (a == null ? undefined : a.window)?.chrome !== undefined || /chrome/i.test(u.b) || /CriOS/i.test(u.b);
    var b = ((a == null ? undefined : a.window)?.safari?.pushNotification || false).toString() === "[object SafariRemoteNotification]" || /safari/i.test(u.b) && !p;
  }, function (t, n, e) {
    "use strict";

    e.d(n, "b", function () {
      return o;
    });
    e.d(n, "c", function () {
      return u;
    });
    e.d(n, "a", function () {
      return c;
    });
    var r = e(1);
    function i(t) {
      if (console) {
        if (!r.d && !r.b) {
          return console[t];
        }
        if (t === "log" || t === "clear") {
          return function () {
            var n = [];
            for (var e = 0; e < arguments.length; e++) {
              n[e] = arguments[e];
            }
            console[t].apply(console, n);
          };
        }
      }
      return function () {
        var t = [];
        for (var n = 0; n < arguments.length; n++) {
          t[n] = arguments[n];
        }
      };
    }
    var o = i("log");
    var u = i("table");
    var c = i("clear");
  }, function (t, n, e) {
    "use strict";

    n.a = function () {
      var t;
      var n = [];
      for (var e = 0; e < arguments.length; e++) {
        n[e] = arguments[e];
      }
      if (o == null ? undefined : o.document) {
        return (t = o.document).createElement.apply(t, n);
      } else {
        return {};
      }
    };
    e.d(n, "b", function () {
      return u;
    });
    var i = e(0);
    var o = Object(i.a)();
    var u = (o == null ? undefined : o.navigator)?.userAgent || "xxxxx";
  }, function (t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    n.addListener = function (t) {
      l.addListener(t);
    };
    n.removeListener = function (t) {
      l.removeListener(t);
    };
    n.isLaunch = function () {
      return l.isLaunch();
    };
    n.launch = function () {
      l.launch();
    };
    n.stop = function () {
      l.stop();
    };
    n.setDetectDelay = function (t) {
      l.setDetectDelay(t);
    };
    var r = e(7);
    var i = e(8);
    e.d(n, "DevtoolsDetector", function () {
      return r.a;
    });
    e.d(n, "checkers", function () {
      return i;
    });
    var o = e(0);
    e.d(n, "match", function () {
      return o.b;
    });
    e.d(n, "specificVersionMatch", function () {
      return o.d;
    });
    var u = e(1);
    e.d(n, "isFirefox", function () {
      return u.c;
    });
    e.d(n, "isIE", function () {
      return u.d;
    });
    e.d(n, "isEdge", function () {
      return u.b;
    });
    e.d(n, "isWebkit", function () {
      return u.g;
    });
    e.d(n, "isIqiyiApp", function () {
      return u.e;
    });
    e.d(n, "isChrome", function () {
      return u.a;
    });
    e.d(n, "isSafari", function () {
      return u.f;
    });
    var c = e(2);
    e.d(n, "log", function () {
      return c.b;
    });
    e.d(n, "table", function () {
      return c.c;
    });
    e.d(n, "clear", function () {
      return c.a;
    });
    var a = e(19);
    e.d(n, "isMobile", function () {
      return a.a;
    });
    var f = e(5);
    e.d(n, "versionMap", function () {
      return f.a;
    });
    var s = e(6);
    e.d(n, "isMac", function () {
      return s.d;
    });
    e.d(n, "isIpad", function () {
      return s.b;
    });
    e.d(n, "isIphone", function () {
      return s.c;
    });
    e.d(n, "isAndroid", function () {
      return s.a;
    });
    e.d(n, "isWindows", function () {
      return s.e;
    });
    var l = new r.a({
      checkers: [i.erudaChecker, i.elementIdChecker, i.regToStringChecker, i.functionToStringChecker, i.depRegToStringChecker, i.dateToStringChecker, i.performanceChecker, i.debuggerChecker]
    });
    n.default = l;
  }, function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return r;
    });
    var r = {};
    for (var i = 0, o = (e(3).b || "").match(/\w+\/(\d|\.)+(\s|$)/gi) || []; i < o.length; i++) {
      var u = o[i].split("/");
      var c = u[0];
      var a = u[1];
      r[c] = a;
    }
  }, function (t, n, e) {
    "use strict";

    e.d(n, "d", function () {
      return i;
    });
    e.d(n, "b", function () {
      return o;
    });
    e.d(n, "c", function () {
      return u;
    });
    e.d(n, "a", function () {
      return c;
    });
    e.d(n, "e", function () {
      return a;
    });
    var r = e(3);
    var i = /macintosh/i.test(r.b);
    var o = /ipad/i.test(r.b) || i && navigator.maxTouchPoints > 1;
    var u = /iphone/i.test(r.b);
    var c = /android/i.test(r.b);
    var a = /windows/i.test(r.b);
  }, function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return o;
    });
    var r = this && this.__awaiter || function (t, n, e, r) {
      return new (e ||= Promise)(function (i, o) {
        function u(t) {
          try {
            a(r.next(t));
          } catch (t) {
            o(t);
          }
        }
        function c(t) {
          try {
            a(r.throw(t));
          } catch (t) {
            o(t);
          }
        }
        function a(t) {
          if (t.done) {
            i(t.value);
          } else {
            (function (t) {
              if (t instanceof e) {
                return t;
              } else {
                return new e(function (n) {
                  n(t);
                });
              }
            })(t.value).then(u, c);
          }
        }
        a((r = r.apply(t, n || [])).next());
      });
    };
    var i = this && this.__generator || function (t, n) {
      var e;
      var r;
      var i;
      var o;
      var u = {
        label: 0,
        sent: function () {
          if (i[0] & 1) {
            throw i[1];
          }
          return i[1];
        },
        trys: [],
        ops: []
      };
      o = {
        next: c(0),
        throw: c(1),
        return: c(2)
      };
      if (typeof Symbol == "function") {
        o[Symbol.iterator] = function () {
          return this;
        };
      }
      return o;
      function c(o) {
        return function (c) {
          return function (o) {
            if (e) {
              throw new TypeError("Generator is already executing.");
            }
            while (u) {
              try {
                e = 1;
                if (r && (i = o[0] & 2 ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
                  return i;
                }
                r = 0;
                if (i) {
                  o = [o[0] & 2, i.value];
                }
                switch (o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    u.label++;
                    return {
                      value: o[1],
                      done: false
                    };
                  case 5:
                    u.label++;
                    r = o[1];
                    o = [0];
                    continue;
                  case 7:
                    o = u.ops.pop();
                    u.trys.pop();
                    continue;
                  default:
                    if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                      u = 0;
                      continue;
                    }
                    if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                      u.label = o[1];
                      break;
                    }
                    if (o[0] === 6 && u.label < i[1]) {
                      u.label = i[1];
                      i = o;
                      break;
                    }
                    if (i && u.label < i[2]) {
                      u.label = i[2];
                      u.ops.push(o);
                      break;
                    }
                    if (i[2]) {
                      u.ops.pop();
                    }
                    u.trys.pop();
                    continue;
                }
                o = n.call(t, u);
              } catch (t) {
                o = [6, t];
                r = 0;
              } finally {
                e = i = 0;
              }
            }
            if (o[0] & 5) {
              throw o[1];
            }
            return {
              value: o[0] ? o[1] : undefined,
              done: true
            };
          }([o, c]);
        };
      }
    };
    var o = function () {
      function t(t) {
        var n = t.checkers;
        this._listeners = [];
        this._isOpen = false;
        this._detectLoopStopped = true;
        this._detectLoopDelay = 500;
        this._checkers = n.slice();
      }
      t.prototype.launch = function () {
        if (this._detectLoopDelay <= 0) {
          this.setDetectDelay(500);
        }
        if (this._detectLoopStopped) {
          this._detectLoopStopped = false;
          this._detectLoop();
        }
      };
      t.prototype.stop = function () {
        if (!this._detectLoopStopped) {
          this._detectLoopStopped = true;
          clearTimeout(this._timer);
        }
      };
      t.prototype.isLaunch = function () {
        return !this._detectLoopStopped;
      };
      t.prototype.setDetectDelay = function (t) {
        this._detectLoopDelay = t;
      };
      t.prototype.addListener = function (t) {
        this._listeners.push(t);
      };
      t.prototype.removeListener = function (t) {
        this._listeners = this._listeners.filter(function (n) {
          return n !== t;
        });
      };
      t.prototype._broadcast = function (t) {
        for (var n = 0, e = this._listeners; n < e.length; n++) {
          var r = e[n];
          try {
            r(t.isOpen, t);
          } catch (t) {}
        }
      };
      t.prototype._detectLoop = function () {
        return r(this, undefined, undefined, function () {
          var t;
          var n;
          var e;
          var r;
          var o;
          var u = this;
          return i(this, function (i) {
            switch (i.label) {
              case 0:
                t = false;
                n = "";
                e = 0;
                r = this._checkers;
                i.label = 1;
              case 1:
                if (e < r.length) {
                  return [4, (o = r[e]).isEnable()];
                } else {
                  return [3, 6];
                }
              case 2:
                if (i.sent()) {
                  n = o.name;
                  return [4, o.isOpen()];
                } else {
                  return [3, 4];
                }
              case 3:
                t = i.sent();
                i.label = 4;
              case 4:
                if (t) {
                  return [3, 6];
                }
                i.label = 5;
              case 5:
                e++;
                return [3, 1];
              case 6:
                if (t != this._isOpen) {
                  this._isOpen = t;
                  this._broadcast({
                    isOpen: t,
                    checkerName: n
                  });
                }
                if (this._detectLoopDelay > 0) {
                  this._timer = setTimeout(function () {
                    return u._detectLoop();
                  }, this._detectLoopDelay);
                } else {
                  this.stop();
                }
                return [2];
            }
          });
        });
      };
      return t;
    }();
  }, function (t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: true
    });
    var r = e(9);
    e.d(n, "depRegToStringChecker", function () {
      return r.a;
    });
    var i = e(12);
    e.d(n, "elementIdChecker", function () {
      return i.a;
    });
    var o = e(13);
    e.d(n, "functionToStringChecker", function () {
      return o.a;
    });
    var u = e(14);
    e.d(n, "regToStringChecker", function () {
      return u.a;
    });
    var c = e(15);
    e.d(n, "debuggerChecker", function () {
      return c.a;
    });
    var a = e(16);
    e.d(n, "dateToStringChecker", function () {
      return a.a;
    });
    var f = e(17);
    e.d(n, "performanceChecker", function () {
      return f.a;
    });
    var s = e(18);
    e.d(n, "erudaChecker", function () {
      return s.a;
    });
  }, function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return s;
    });
    var r = e(1);
    var i = e(2);
    var o = e(0);
    var u = this && this.__awaiter || function (t, n, e, r) {
      return new (e ||= Promise)(function (i, o) {
        function u(t) {
          try {
            a(r.next(t));
          } catch (t) {
            o(t);
          }
        }
        function c(t) {
          try {
            a(r.throw(t));
          } catch (t) {
            o(t);
          }
        }
        function a(t) {
          if (t.done) {
            i(t.value);
          } else {
            (function (t) {
              if (t instanceof e) {
                return t;
              } else {
                return new e(function (n) {
                  n(t);
                });
              }
            })(t.value).then(u, c);
          }
        }
        a((r = r.apply(t, n || [])).next());
      });
    };
    var c = this && this.__generator || function (t, n) {
      var e;
      var r;
      var i;
      var o;
      var u = {
        label: 0,
        sent: function () {
          if (i[0] & 1) {
            throw i[1];
          }
          return i[1];
        },
        trys: [],
        ops: []
      };
      o = {
        next: c(0),
        throw: c(1),
        return: c(2)
      };
      if (typeof Symbol == "function") {
        o[Symbol.iterator] = function () {
          return this;
        };
      }
      return o;
      function c(o) {
        return function (c) {
          return function (o) {
            if (e) {
              throw new TypeError("Generator is already executing.");
            }
            while (u) {
              try {
                e = 1;
                if (r && (i = o[0] & 2 ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
                  return i;
                }
                r = 0;
                if (i) {
                  o = [o[0] & 2, i.value];
                }
                switch (o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    u.label++;
                    return {
                      value: o[1],
                      done: false
                    };
                  case 5:
                    u.label++;
                    r = o[1];
                    o = [0];
                    continue;
                  case 7:
                    o = u.ops.pop();
                    u.trys.pop();
                    continue;
                  default:
                    if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                      u = 0;
                      continue;
                    }
                    if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                      u.label = o[1];
                      break;
                    }
                    if (o[0] === 6 && u.label < i[1]) {
                      u.label = i[1];
                      i = o;
                      break;
                    }
                    if (i && u.label < i[2]) {
                      u.label = i[2];
                      u.ops.push(o);
                      break;
                    }
                    if (i[2]) {
                      u.ops.pop();
                    }
                    u.trys.pop();
                    continue;
                }
                o = n.call(t, u);
              } catch (t) {
                o = [6, t];
                r = 0;
              } finally {
                e = i = 0;
              }
            }
            if (o[0] & 5) {
              throw o[1];
            }
            return {
              value: o[0] ? o[1] : undefined,
              done: true
            };
          }([o, c]);
        };
      }
    };
    var a = / /;
    var f = false;
    a.toString = function () {
      f = true;
      return s.name;
    };
    var s = {
      name: "dep-reg-to-string",
      isOpen: function () {
        return u(this, undefined, undefined, function () {
          return c(this, function (t) {
            f = false;
            Object(i.c)({
              dep: a
            });
            Object(i.a)();
            return [2, f];
          });
        });
      },
      isEnable: function () {
        return u(this, undefined, undefined, function () {
          return c(this, function (t) {
            return [2, Object(o.b)({
              includes: [true],
              excludes: [r.c, r.d]
            })];
          });
        });
      }
    };
  }, function (t, n) {
    var e;
    e = function () {
      return this;
    }();
    try {
      e = e || Function("return this")() || (0, eval)("this");
    } catch (t) {
      if (typeof window == "object") {
        e = window;
      }
    }
    t.exports = e;
  }, function (t, n, e) {
    var r;
    var i;
    var o;
    i = [];
    if ((o = typeof (r = function () {
      var t = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
      function n(t) {
        var n = t.replace(/^v/, "").replace(/\+.*$/, "");
        var e = function (t, n) {
          if (t.indexOf(n) === -1) {
            return t.length;
          } else {
            return t.indexOf(n);
          }
        }(n, "-");
        var r = n.substring(0, e).split(".");
        r.push(n.substring(e + 1));
        return r;
      }
      function e(t) {
        if (isNaN(Number(t))) {
          return t;
        } else {
          return Number(t);
        }
      }
      function r(n) {
        if (typeof n != "string") {
          throw new TypeError("Invalid argument expected string");
        }
        if (!t.test(n)) {
          throw new Error("Invalid argument not valid semver ('" + n + "' received)");
        }
      }
      function i(t, i) {
        [t, i].forEach(r);
        for (var o = n(t), u = n(i), c = 0; c < Math.max(o.length - 1, u.length - 1); c++) {
          var a = parseInt(o[c] || 0, 10);
          var f = parseInt(u[c] || 0, 10);
          if (a > f) {
            return 1;
          }
          if (f > a) {
            return -1;
          }
        }
        var s = o[o.length - 1];
        var l = u[u.length - 1];
        if (s && l) {
          var d = s.split(".").map(e);
          var h = l.split(".").map(e);
          for (c = 0; c < Math.max(d.length, h.length); c++) {
            if (d[c] === undefined || typeof h[c] == "string" && typeof d[c] == "number") {
              return -1;
            }
            if (h[c] === undefined || typeof d[c] == "string" && typeof h[c] == "number") {
              return 1;
            }
            if (d[c] > h[c]) {
              return 1;
            }
            if (h[c] > d[c]) {
              return -1;
            }
          }
        } else if (s || l) {
          if (s) {
            return -1;
          } else {
            return 1;
          }
        }
        return 0;
      }
      var o = [">", ">=", "=", "<", "<="];
      var u = {
        ">": [1],
        ">=": [0, 1],
        "=": [0],
        "<=": [-1, 0],
        "<": [-1]
      };
      i.validate = function (n) {
        return typeof n == "string" && t.test(n);
      };
      i.compare = function (t, n, e) {
        (function (t) {
          if (typeof t != "string") {
            throw new TypeError("Invalid operator type, expected string but got " + typeof t);
          }
          if (o.indexOf(t) === -1) {
            throw new TypeError("Invalid operator, expected one of " + o.join("|"));
          }
        })(e);
        var r = i(t, n);
        return u[e].indexOf(r) > -1;
      };
      return i;
    }) == "function" ? r.apply(n, i) : r) !== undefined) {
      t.exports = o;
    }
  }, function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return l;
    });
    var r = e(1);
    var i = e(2);
    var o = e(0);
    var u = e(3);
    var c = this && this.__awaiter || function (t, n, e, r) {
      return new (e ||= Promise)(function (i, o) {
        function u(t) {
          try {
            a(r.next(t));
          } catch (t) {
            o(t);
          }
        }
        function c(t) {
          try {
            a(r.throw(t));
          } catch (t) {
            o(t);
          }
        }
        function a(t) {
          if (t.done) {
            i(t.value);
          } else {
            (function (t) {
              if (t instanceof e) {
                return t;
              } else {
                return new e(function (n) {
                  n(t);
                });
              }
            })(t.value).then(u, c);
          }
        }
        a((r = r.apply(t, n || [])).next());
      });
    };
    var a = this && this.__generator || function (t, n) {
      var e;
      var r;
      var i;
      var o;
      var u = {
        label: 0,
        sent: function () {
          if (i[0] & 1) {
            throw i[1];
          }
          return i[1];
        },
        trys: [],
        ops: []
      };
      o = {
        next: c(0),
        throw: c(1),
        return: c(2)
      };
      if (typeof Symbol == "function") {
        o[Symbol.iterator] = function () {
          return this;
        };
      }
      return o;
      function c(o) {
        return function (c) {
          return function (o) {
            if (e) {
              throw new TypeError("Generator is already executing.");
            }
            while (u) {
              try {
                e = 1;
                if (r && (i = o[0] & 2 ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
                  return i;
                }
                r = 0;
                if (i) {
                  o = [o[0] & 2, i.value];
                }
                switch (o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    u.label++;
                    return {
                      value: o[1],
                      done: false
                    };
                  case 5:
                    u.label++;
                    r = o[1];
                    o = [0];
                    continue;
                  case 7:
                    o = u.ops.pop();
                    u.trys.pop();
                    continue;
                  default:
                    if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                      u = 0;
                      continue;
                    }
                    if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                      u.label = o[1];
                      break;
                    }
                    if (o[0] === 6 && u.label < i[1]) {
                      u.label = i[1];
                      i = o;
                      break;
                    }
                    if (i && u.label < i[2]) {
                      u.label = i[2];
                      u.ops.push(o);
                      break;
                    }
                    if (i[2]) {
                      u.ops.pop();
                    }
                    u.trys.pop();
                    continue;
                }
                o = n.call(t, u);
              } catch (t) {
                o = [6, t];
                r = 0;
              } finally {
                e = i = 0;
              }
            }
            if (o[0] & 5) {
              throw o[1];
            }
            return {
              value: o[0] ? o[1] : undefined,
              done: true
            };
          }([o, c]);
        };
      }
    };
    var f = Object(u.a)("div");
    var s = false;
    Object.defineProperty(f, "id", {
      get: function () {
        s = true;
        return l.name;
      },
      configurable: true
    });
    var l = {
      name: "element-id",
      isOpen: function () {
        return c(this, undefined, undefined, function () {
          return a(this, function (t) {
            s = false;
            Object(i.b)(f);
            Object(i.a)();
            return [2, s];
          });
        });
      },
      isEnable: function () {
        return c(this, undefined, undefined, function () {
          return a(this, function (t) {
            return [2, Object(o.b)({
              includes: [true],
              excludes: [r.d, r.b, r.c]
            })];
          });
        });
      }
    };
  }, function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return l;
    });
    var r = e(1);
    var i = e(2);
    var o = e(6);
    var u = e(0);
    var c = this && this.__awaiter || function (t, n, e, r) {
      return new (e ||= Promise)(function (i, o) {
        function u(t) {
          try {
            a(r.next(t));
          } catch (t) {
            o(t);
          }
        }
        function c(t) {
          try {
            a(r.throw(t));
          } catch (t) {
            o(t);
          }
        }
        function a(t) {
          if (t.done) {
            i(t.value);
          } else {
            (function (t) {
              if (t instanceof e) {
                return t;
              } else {
                return new e(function (n) {
                  n(t);
                });
              }
            })(t.value).then(u, c);
          }
        }
        a((r = r.apply(t, n || [])).next());
      });
    };
    var a = this && this.__generator || function (t, n) {
      var e;
      var r;
      var i;
      var o;
      var u = {
        label: 0,
        sent: function () {
          if (i[0] & 1) {
            throw i[1];
          }
          return i[1];
        },
        trys: [],
        ops: []
      };
      o = {
        next: c(0),
        throw: c(1),
        return: c(2)
      };
      if (typeof Symbol == "function") {
        o[Symbol.iterator] = function () {
          return this;
        };
      }
      return o;
      function c(o) {
        return function (c) {
          return function (o) {
            if (e) {
              throw new TypeError("Generator is already executing.");
            }
            while (u) {
              try {
                e = 1;
                if (r && (i = o[0] & 2 ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
                  return i;
                }
                r = 0;
                if (i) {
                  o = [o[0] & 2, i.value];
                }
                switch (o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    u.label++;
                    return {
                      value: o[1],
                      done: false
                    };
                  case 5:
                    u.label++;
                    r = o[1];
                    o = [0];
                    continue;
                  case 7:
                    o = u.ops.pop();
                    u.trys.pop();
                    continue;
                  default:
                    if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                      u = 0;
                      continue;
                    }
                    if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                      u.label = o[1];
                      break;
                    }
                    if (o[0] === 6 && u.label < i[1]) {
                      u.label = i[1];
                      i = o;
                      break;
                    }
                    if (i && u.label < i[2]) {
                      u.label = i[2];
                      u.ops.push(o);
                      break;
                    }
                    if (i[2]) {
                      u.ops.pop();
                    }
                    u.trys.pop();
                    continue;
                }
                o = n.call(t, u);
              } catch (t) {
                o = [6, t];
                r = 0;
              } finally {
                e = i = 0;
              }
            }
            if (o[0] & 5) {
              throw o[1];
            }
            return {
              value: o[0] ? o[1] : undefined,
              done: true
            };
          }([o, c]);
        };
      }
    };
    function f() {}
    var s = 0;
    f.toString = function () {
      s++;
      return "";
    };
    var l = {
      name: "function-to-string",
      isOpen: function () {
        return c(this, undefined, undefined, function () {
          return a(this, function (t) {
            s = 0;
            Object(i.b)(f);
            Object(i.a)();
            return [2, s === 2];
          });
        });
      },
      isEnable: function () {
        return c(this, undefined, undefined, function () {
          return a(this, function (t) {
            return [2, Object(u.b)({
              includes: [true],
              excludes: [r.e, r.c, (o.b || o.c) && r.a]
            })];
          });
        });
      }
    };
  }, function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return s;
    });
    var r = e(2);
    var i = e(1);
    var o = e(0);
    var u = this && this.__awaiter || function (t, n, e, r) {
      return new (e ||= Promise)(function (i, o) {
        function u(t) {
          try {
            a(r.next(t));
          } catch (t) {
            o(t);
          }
        }
        function c(t) {
          try {
            a(r.throw(t));
          } catch (t) {
            o(t);
          }
        }
        function a(t) {
          if (t.done) {
            i(t.value);
          } else {
            (function (t) {
              if (t instanceof e) {
                return t;
              } else {
                return new e(function (n) {
                  n(t);
                });
              }
            })(t.value).then(u, c);
          }
        }
        a((r = r.apply(t, n || [])).next());
      });
    };
    var c = this && this.__generator || function (t, n) {
      var e;
      var r;
      var i;
      var o;
      var u = {
        label: 0,
        sent: function () {
          if (i[0] & 1) {
            throw i[1];
          }
          return i[1];
        },
        trys: [],
        ops: []
      };
      o = {
        next: c(0),
        throw: c(1),
        return: c(2)
      };
      if (typeof Symbol == "function") {
        o[Symbol.iterator] = function () {
          return this;
        };
      }
      return o;
      function c(o) {
        return function (c) {
          return function (o) {
            if (e) {
              throw new TypeError("Generator is already executing.");
            }
            while (u) {
              try {
                e = 1;
                if (r && (i = o[0] & 2 ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
                  return i;
                }
                r = 0;
                if (i) {
                  o = [o[0] & 2, i.value];
                }
                switch (o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    u.label++;
                    return {
                      value: o[1],
                      done: false
                    };
                  case 5:
                    u.label++;
                    r = o[1];
                    o = [0];
                    continue;
                  case 7:
                    o = u.ops.pop();
                    u.trys.pop();
                    continue;
                  default:
                    if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                      u = 0;
                      continue;
                    }
                    if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                      u.label = o[1];
                      break;
                    }
                    if (o[0] === 6 && u.label < i[1]) {
                      u.label = i[1];
                      i = o;
                      break;
                    }
                    if (i && u.label < i[2]) {
                      u.label = i[2];
                      u.ops.push(o);
                      break;
                    }
                    if (i[2]) {
                      u.ops.pop();
                    }
                    u.trys.pop();
                    continue;
                }
                o = n.call(t, u);
              } catch (t) {
                o = [6, t];
                r = 0;
              } finally {
                e = i = 0;
              }
            }
            if (o[0] & 5) {
              throw o[1];
            }
            return {
              value: o[0] ? o[1] : undefined,
              done: true
            };
          }([o, c]);
        };
      }
    };
    var a = / /;
    var f = false;
    a.toString = function () {
      f = true;
      return s.name;
    };
    var s = {
      name: "reg-to-string",
      isOpen: function () {
        return u(this, undefined, undefined, function () {
          return c(this, function (t) {
            f = false;
            Object(r.b)(a);
            Object(r.a)();
            return [2, f];
          });
        });
      },
      isEnable: function () {
        return u(this, undefined, undefined, function () {
          return c(this, function (t) {
            return [2, Object(o.b)({
              includes: [true],
              excludes: [i.g]
            })];
          });
        });
      }
    };
  }, function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return u;
    });
    var r = e(0);
    var i = this && this.__awaiter || function (t, n, e, r) {
      return new (e ||= Promise)(function (i, o) {
        function u(t) {
          try {
            a(r.next(t));
          } catch (t) {
            o(t);
          }
        }
        function c(t) {
          try {
            a(r.throw(t));
          } catch (t) {
            o(t);
          }
        }
        function a(t) {
          if (t.done) {
            i(t.value);
          } else {
            (function (t) {
              if (t instanceof e) {
                return t;
              } else {
                return new e(function (n) {
                  n(t);
                });
              }
            })(t.value).then(u, c);
          }
        }
        a((r = r.apply(t, n || [])).next());
      });
    };
    var o = this && this.__generator || function (t, n) {
      var e;
      var r;
      var i;
      var o;
      var u = {
        label: 0,
        sent: function () {
          if (i[0] & 1) {
            throw i[1];
          }
          return i[1];
        },
        trys: [],
        ops: []
      };
      o = {
        next: c(0),
        throw: c(1),
        return: c(2)
      };
      if (typeof Symbol == "function") {
        o[Symbol.iterator] = function () {
          return this;
        };
      }
      return o;
      function c(o) {
        return function (c) {
          return function (o) {
            if (e) {
              throw new TypeError("Generator is already executing.");
            }
            while (u) {
              try {
                e = 1;
                if (r && (i = o[0] & 2 ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
                  return i;
                }
                r = 0;
                if (i) {
                  o = [o[0] & 2, i.value];
                }
                switch (o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    u.label++;
                    return {
                      value: o[1],
                      done: false
                    };
                  case 5:
                    u.label++;
                    r = o[1];
                    o = [0];
                    continue;
                  case 7:
                    o = u.ops.pop();
                    u.trys.pop();
                    continue;
                  default:
                    if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                      u = 0;
                      continue;
                    }
                    if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                      u.label = o[1];
                      break;
                    }
                    if (o[0] === 6 && u.label < i[1]) {
                      u.label = i[1];
                      i = o;
                      break;
                    }
                    if (i && u.label < i[2]) {
                      u.label = i[2];
                      u.ops.push(o);
                      break;
                    }
                    if (i[2]) {
                      u.ops.pop();
                    }
                    u.trys.pop();
                    continue;
                }
                o = n.call(t, u);
              } catch (t) {
                o = [6, t];
                r = 0;
              } finally {
                e = i = 0;
              }
            }
            if (o[0] & 5) {
              throw o[1];
            }
            return {
              value: o[0] ? o[1] : undefined,
              done: true
            };
          }([o, c]);
        };
      }
    };
    var u = {
      name: "debugger-checker",
      isOpen: function () {
        return i(this, undefined, undefined, function () {
          var t;
          return o(this, function (n) {
            t = Object(r.c)();
            (function () {}).constructor("debugger")();
            return [2, Object(r.c)() - t > 100];
          });
        });
      },
      isEnable: function () {
        return i(this, undefined, undefined, function () {
          return o(this, function (t) {
            return [2, true];
          });
        });
      }
    };
  }, function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return l;
    });
    var r = e(1);
    var i = e(2);
    var o = e(0);
    var u = e(4);
    var c = this && this.__awaiter || function (t, n, e, r) {
      return new (e ||= Promise)(function (i, o) {
        function u(t) {
          try {
            a(r.next(t));
          } catch (t) {
            o(t);
          }
        }
        function c(t) {
          try {
            a(r.throw(t));
          } catch (t) {
            o(t);
          }
        }
        function a(t) {
          if (t.done) {
            i(t.value);
          } else {
            (function (t) {
              if (t instanceof e) {
                return t;
              } else {
                return new e(function (n) {
                  n(t);
                });
              }
            })(t.value).then(u, c);
          }
        }
        a((r = r.apply(t, n || [])).next());
      });
    };
    var a = this && this.__generator || function (t, n) {
      var e;
      var r;
      var i;
      var o;
      var u = {
        label: 0,
        sent: function () {
          if (i[0] & 1) {
            throw i[1];
          }
          return i[1];
        },
        trys: [],
        ops: []
      };
      o = {
        next: c(0),
        throw: c(1),
        return: c(2)
      };
      if (typeof Symbol == "function") {
        o[Symbol.iterator] = function () {
          return this;
        };
      }
      return o;
      function c(o) {
        return function (c) {
          return function (o) {
            if (e) {
              throw new TypeError("Generator is already executing.");
            }
            while (u) {
              try {
                e = 1;
                if (r && (i = o[0] & 2 ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
                  return i;
                }
                r = 0;
                if (i) {
                  o = [o[0] & 2, i.value];
                }
                switch (o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    u.label++;
                    return {
                      value: o[1],
                      done: false
                    };
                  case 5:
                    u.label++;
                    r = o[1];
                    o = [0];
                    continue;
                  case 7:
                    o = u.ops.pop();
                    u.trys.pop();
                    continue;
                  default:
                    if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                      u = 0;
                      continue;
                    }
                    if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                      u.label = o[1];
                      break;
                    }
                    if (o[0] === 6 && u.label < i[1]) {
                      u.label = i[1];
                      i = o;
                      break;
                    }
                    if (i && u.label < i[2]) {
                      u.label = i[2];
                      u.ops.push(o);
                      break;
                    }
                    if (i[2]) {
                      u.ops.pop();
                    }
                    u.trys.pop();
                    continue;
                }
                o = n.call(t, u);
              } catch (t) {
                o = [6, t];
                r = 0;
              } finally {
                e = i = 0;
              }
            }
            if (o[0] & 5) {
              throw o[1];
            }
            return {
              value: o[0] ? o[1] : undefined,
              done: true
            };
          }([o, c]);
        };
      }
    };
    var f = new Date();
    var s = 0;
    f.toString = function () {
      s++;
      return "";
    };
    var l = {
      name: "date-to-string",
      isOpen: function () {
        return c(this, undefined, undefined, function () {
          return a(this, function (t) {
            s = 0;
            Object(i.b)(f);
            Object(i.a)();
            return [2, s === 2];
          });
        });
      },
      isEnable: function () {
        return c(this, undefined, undefined, function () {
          return a(this, function (t) {
            return [2, Object(o.b)({
              includes: [r.a],
              excludes: [(u.isIpad || u.isIphone) && r.a]
            })];
          });
        });
      }
    };
  }, function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return s;
    });
    var r = e(1);
    var i = e(2);
    var o = e(0);
    var u = this && this.__awaiter || function (t, n, e, r) {
      return new (e ||= Promise)(function (i, o) {
        function u(t) {
          try {
            a(r.next(t));
          } catch (t) {
            o(t);
          }
        }
        function c(t) {
          try {
            a(r.throw(t));
          } catch (t) {
            o(t);
          }
        }
        function a(t) {
          if (t.done) {
            i(t.value);
          } else {
            (function (t) {
              if (t instanceof e) {
                return t;
              } else {
                return new e(function (n) {
                  n(t);
                });
              }
            })(t.value).then(u, c);
          }
        }
        a((r = r.apply(t, n || [])).next());
      });
    };
    var c = this && this.__generator || function (t, n) {
      var e;
      var r;
      var i;
      var o;
      var u = {
        label: 0,
        sent: function () {
          if (i[0] & 1) {
            throw i[1];
          }
          return i[1];
        },
        trys: [],
        ops: []
      };
      o = {
        next: c(0),
        throw: c(1),
        return: c(2)
      };
      if (typeof Symbol == "function") {
        o[Symbol.iterator] = function () {
          return this;
        };
      }
      return o;
      function c(o) {
        return function (c) {
          return function (o) {
            if (e) {
              throw new TypeError("Generator is already executing.");
            }
            while (u) {
              try {
                e = 1;
                if (r && (i = o[0] & 2 ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
                  return i;
                }
                r = 0;
                if (i) {
                  o = [o[0] & 2, i.value];
                }
                switch (o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    u.label++;
                    return {
                      value: o[1],
                      done: false
                    };
                  case 5:
                    u.label++;
                    r = o[1];
                    o = [0];
                    continue;
                  case 7:
                    o = u.ops.pop();
                    u.trys.pop();
                    continue;
                  default:
                    if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                      u = 0;
                      continue;
                    }
                    if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                      u.label = o[1];
                      break;
                    }
                    if (o[0] === 6 && u.label < i[1]) {
                      u.label = i[1];
                      i = o;
                      break;
                    }
                    if (i && u.label < i[2]) {
                      u.label = i[2];
                      u.ops.push(o);
                      break;
                    }
                    if (i[2]) {
                      u.ops.pop();
                    }
                    u.trys.pop();
                    continue;
                }
                o = n.call(t, u);
              } catch (t) {
                o = [6, t];
                r = 0;
              } finally {
                e = i = 0;
              }
            }
            if (o[0] & 5) {
              throw o[1];
            }
            return {
              value: o[0] ? o[1] : undefined,
              done: true
            };
          }([o, c]);
        };
      }
    };
    var a = null;
    var f = 0;
    var s = {
      name: "performance",
      isOpen: function () {
        return u(this, undefined, undefined, function () {
          var t;
          var n;
          return c(this, function (e) {
            if (a === null) {
              a = function () {
                var t = function () {
                  var t = {};
                  for (var n = 0; n < 500; n++) {
                    t[`${n}`] = `${n}`;
                  }
                  return t;
                }();
                var n = [];
                for (var e = 0; e < 50; e++) {
                  n.push(t);
                }
                return n;
              }();
            }
            t = function () {
              var t = Object(o.c)();
              Object(i.c)(a);
              return Object(o.c)() - t;
            }();
            n = function () {
              var t = Object(o.c)();
              Object(i.b)(a);
              return Object(o.c)() - t;
            }();
            f = Math.max(f, n);
            Object(i.a)();
            if (t === 0 || f === 0) {
              return [2, false];
            } else {
              return [2, t > f * 10];
            }
          });
        });
      },
      isEnable: function () {
        return u(this, undefined, undefined, function () {
          return c(this, function (t) {
            return [2, Object(o.b)({
              includes: [r.a],
              excludes: []
            })];
          });
        });
      }
    };
  }, function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return o;
    });
    var r = this && this.__awaiter || function (t, n, e, r) {
      return new (e ||= Promise)(function (i, o) {
        function u(t) {
          try {
            a(r.next(t));
          } catch (t) {
            o(t);
          }
        }
        function c(t) {
          try {
            a(r.throw(t));
          } catch (t) {
            o(t);
          }
        }
        function a(t) {
          if (t.done) {
            i(t.value);
          } else {
            (function (t) {
              if (t instanceof e) {
                return t;
              } else {
                return new e(function (n) {
                  n(t);
                });
              }
            })(t.value).then(u, c);
          }
        }
        a((r = r.apply(t, n || [])).next());
      });
    };
    var i = this && this.__generator || function (t, n) {
      var e;
      var r;
      var i;
      var o;
      var u = {
        label: 0,
        sent: function () {
          if (i[0] & 1) {
            throw i[1];
          }
          return i[1];
        },
        trys: [],
        ops: []
      };
      o = {
        next: c(0),
        throw: c(1),
        return: c(2)
      };
      if (typeof Symbol == "function") {
        o[Symbol.iterator] = function () {
          return this;
        };
      }
      return o;
      function c(o) {
        return function (c) {
          return function (o) {
            if (e) {
              throw new TypeError("Generator is already executing.");
            }
            while (u) {
              try {
                e = 1;
                if (r && (i = o[0] & 2 ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
                  return i;
                }
                r = 0;
                if (i) {
                  o = [o[0] & 2, i.value];
                }
                switch (o[0]) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    u.label++;
                    return {
                      value: o[1],
                      done: false
                    };
                  case 5:
                    u.label++;
                    r = o[1];
                    o = [0];
                    continue;
                  case 7:
                    o = u.ops.pop();
                    u.trys.pop();
                    continue;
                  default:
                    if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                      u = 0;
                      continue;
                    }
                    if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                      u.label = o[1];
                      break;
                    }
                    if (o[0] === 6 && u.label < i[1]) {
                      u.label = i[1];
                      i = o;
                      break;
                    }
                    if (i && u.label < i[2]) {
                      u.label = i[2];
                      u.ops.push(o);
                      break;
                    }
                    if (i[2]) {
                      u.ops.pop();
                    }
                    u.trys.pop();
                    continue;
                }
                o = n.call(t, u);
              } catch (t) {
                o = [6, t];
                r = 0;
              } finally {
                e = i = 0;
              }
            }
            if (o[0] & 5) {
              throw o[1];
            }
            return {
              value: o[0] ? o[1] : undefined,
              done: true
            };
          }([o, c]);
        };
      }
    };
    var o = {
      name: "eruda",
      isOpen: function () {
        return r(this, undefined, undefined, function () {
          return i(this, function (n) {
            if (typeof eruda != "undefined") {
              return [2, eruda?._devTools?._isShow === true];
            } else {
              return [2, false];
            }
          });
        });
      },
      isEnable: function () {
        return r(this, undefined, undefined, function () {
          return i(this, function (t) {
            return [2, true];
          });
        });
      }
    };
  }, function (t, n, e) {
    "use strict";

    e.d(n, "a", function () {
      return i;
    });
    var r = e(3);
    var i = /mobile/i.test(r.b);
  }]);
});
