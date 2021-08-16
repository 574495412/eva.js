function t(t) {
  return Object.prototype.toString.call(t);
}
const s = {
  copyJSON: function (t) {
    return JSON.parse(JSON.stringify(t));
  },
  isArray: (function () {
    let s = t([]);
    return function (e) {
      return t(e) === s;
    };
  })(),
  isString: (function () {
    let s = t('s');
    return function (e) {
      return t(e) === s;
    };
  })(),
  isNumber: (function () {
    let s = t(1);
    return function (e) {
      return t(e) === s;
    };
  })(),
  isFunction: (function () {
    let s = t(function () {});
    return function (e) {
      return t(e) === s;
    };
  })(),
  isUndefined: function (t) {
    return void 0 === t;
  },
  isBoolean: (function () {
    let s = t(!0);
    return function (e) {
      return t(e) === s;
    };
  })(),
  isObject: (function () {
    let s = t({});
    return function (e) {
      return t(e) === s;
    };
  })(),
  random: function (t, s) {
    return this.isArray(t)
      ? t[~~(Math.random() * t.length)]
      : (this.isNumber(s) || ((s = t || 1), (t = 0)), t + Math.random() * (s - t));
  },
  euclideanModulo: function (t, s) {
    return ((t % s) + s) % s;
  },
  codomainBounce: function (t, s, e) {
    return t < s ? 2 * s - t : t > e ? 2 * e - t : t;
  },
  clamp: function (t, s, e) {
    return t < s ? s : t > e ? e : t;
  },
  inRange: (t, s, e) => t >= s && t <= e,
  getAssets(t, s) {
    for (let e = 0; e < s.length; e++) if (t === s[e].id) return s[e];
    return console.error('have not assets name as', t), {};
  },
  rgb2hex: t => (t[0] << 16) + (t[1] << 8) + (0 | t[2]),
};
class e {
  constructor() {
    (this.listeners = {}), (this.addEventListener = this.on), (this.removeEventListener = this.off);
  }
  on(t, e) {
    return s.isFunction(e)
      ? (s.isUndefined(this.listeners[t]) && (this.listeners[t] = []), this.listeners[t].push(e), this)
      : this;
  }
  off(t, e) {
    if (s.isUndefined(this.listeners[t])) return this;
    const i = this.listeners[t];
    let h = i.length;
    if (h > 0)
      if (e) for (; h--; ) i[h] === e && i.splice(h, 1);
      else i.length = 0;
    return this;
  }
  once(t, e) {
    if (!s.isFunction(e)) return this;
    const i = s => {
      e(s), this.off(t, i);
    };
    return this.on(t, i), this;
  }
  emit(t, ...e) {
    if (s.isUndefined(this.listeners[t])) return this;
    const i = (this.listeners[t] || []).slice(0);
    for (let t = 0; t < i.length; t++) i[t].apply(this, e);
    return this;
  }
}
const i = {},
  h = { Ajax: 'Ajax', Texture: 'Texture' };
var r = {
  Type: h,
  registerLoaderByType: function (t, s) {
    i[t] = s;
  },
};
function a(t, s, e) {
  let i,
    h,
    r,
    p,
    c,
    d,
    u = t.length;
  for (h = 0; h < u; h += 1)
    if (((i = t[h]), 'ks' in i && !i.completed)) {
      if (((i.completed = !0), i.tt && (t[h - 1].td = i.tt), i.hasMask)) {
        let t = i.masksProperties;
        for (p = t.length, r = 0; r < p; r += 1)
          if (t[r].pt.k.i) l(t[r].pt.k);
          else
            for (d = t[r].pt.k.length, c = 0; c < d; c += 1)
              t[r].pt.k[c].s && l(t[r].pt.k[c].s[0]), t[r].pt.k[c].e && l(t[r].pt.k[c].e[0]);
      }
      0 === i.ty ? ((i.layers = n(i.refId, s)), a(i.layers, s)) : 4 === i.ty ? o(i.shapes) : 5 == i.ty && m(i);
    }
}
function n(t, s) {
  let e = 0,
    i = s.length;
  for (; e < i; ) {
    if (s[e].id === t)
      return s[e].layers.__used ? JSON.parse(JSON.stringify(s[e].layers)) : ((s[e].layers.__used = !0), s[e].layers);
    e += 1;
  }
}
function o(t) {
  let s, e, i;
  for (s = t.length - 1; s >= 0; s -= 1)
    if ('sh' == t[s].ty)
      if (t[s].ks.k.i) l(t[s].ks.k);
      else
        for (i = t[s].ks.k.length, e = 0; e < i; e += 1)
          t[s].ks.k[e].s && l(t[s].ks.k[e].s[0]), t[s].ks.k[e].e && l(t[s].ks.k[e].e[0]);
    else 'gr' == t[s].ty && o(t[s].it);
}
function l(t) {
  let s,
    e = t.i.length;
  for (s = 0; s < e; s += 1)
    (t.i[s][0] += t.v[s][0]), (t.i[s][1] += t.v[s][1]), (t.o[s][0] += t.v[s][0]), (t.o[s][1] += t.v[s][1]);
}
function p(t, s) {
  let e = s ? s.split('.') : [100, 100, 100];
  return (
    t[0] > e[0] || (!(e[0] > t[0]) && (t[1] > e[1] || (!(e[1] > t[1]) && (t[2] > e[2] || (!(e[2] > t[2]) && void 0)))))
  );
}
let c = (function () {
    let t = [4, 4, 14];
    function s(t) {
      let s = t.t.d;
      t.t.d = { k: [{ s: s, t: 0 }] };
    }
    function e(t) {
      let e,
        i = t.length;
      for (e = 0; e < i; e += 1) 5 === t[e].ty && s(t[e]);
    }
    return function (s) {
      if (p(t, s.v) && (e(s.layers), s.assets)) {
        let t,
          i = s.assets.length;
        for (t = 0; t < i; t += 1) s.assets[t].layers && e(s.assets[t].layers);
      }
    };
  })(),
  d = (function () {
    let t = [4, 7, 99];
    return function (s) {
      if (s.chars && !p(t, s.v)) {
        let t,
          e,
          i,
          h,
          r,
          a = s.chars.length;
        for (t = 0; t < a; t += 1)
          if (s.chars[t].data && s.chars[t].data.shapes)
            for (r = s.chars[t].data.shapes[0].it, i = r.length, e = 0; e < i; e += 1)
              (h = r[e].ks.k), h.__converted || (l(r[e].ks.k), (h.__converted = !0));
      }
    };
  })(),
  u = (function () {
    let t = [4, 1, 9];
    function s(t) {
      let e,
        i,
        h,
        r = t.length;
      for (e = 0; e < r; e += 1)
        if ('gr' === t[e].ty) s(t[e].it);
        else if ('fl' === t[e].ty || 'st' === t[e].ty)
          if (t[e].c.k && t[e].c.k[0].i)
            for (h = t[e].c.k.length, i = 0; i < h; i += 1)
              t[e].c.k[i].s &&
                ((t[e].c.k[i].s[0] /= 255),
                (t[e].c.k[i].s[1] /= 255),
                (t[e].c.k[i].s[2] /= 255),
                (t[e].c.k[i].s[3] /= 255)),
                t[e].c.k[i].e &&
                  ((t[e].c.k[i].e[0] /= 255),
                  (t[e].c.k[i].e[1] /= 255),
                  (t[e].c.k[i].e[2] /= 255),
                  (t[e].c.k[i].e[3] /= 255));
          else (t[e].c.k[0] /= 255), (t[e].c.k[1] /= 255), (t[e].c.k[2] /= 255), (t[e].c.k[3] /= 255);
    }
    function e(t) {
      let e,
        i = t.length;
      for (e = 0; e < i; e += 1) 4 === t[e].ty && s(t[e].shapes);
    }
    return function (s) {
      if (p(t, s.v) && (e(s.layers), s.assets)) {
        let t,
          i = s.assets.length;
        for (t = 0; t < i; t += 1) s.assets[t].layers && e(s.assets[t].layers);
      }
    };
  })(),
  f = (function () {
    let t = [4, 4, 18];
    function s(t) {
      let e, i, h;
      for (e = t.length - 1; e >= 0; e -= 1)
        if ('sh' == t[e].ty)
          if (t[e].ks.k.i) t[e].ks.k.c = t[e].closed;
          else
            for (h = t[e].ks.k.length, i = 0; i < h; i += 1)
              t[e].ks.k[i].s && (t[e].ks.k[i].s[0].c = t[e].closed),
                t[e].ks.k[i].e && (t[e].ks.k[i].e[0].c = t[e].closed);
        else 'gr' == t[e].ty && s(t[e].it);
    }
    function e(t) {
      let e,
        i,
        h,
        r,
        a,
        n,
        o = t.length;
      for (i = 0; i < o; i += 1) {
        if (((e = t[i]), e.hasMask)) {
          let t = e.masksProperties;
          for (r = t.length, h = 0; h < r; h += 1)
            if (t[h].pt.k.i) t[h].pt.k.c = t[h].cl;
            else
              for (n = t[h].pt.k.length, a = 0; a < n; a += 1)
                t[h].pt.k[a].s && (t[h].pt.k[a].s[0].c = t[h].cl), t[h].pt.k[a].e && (t[h].pt.k[a].e[0].c = t[h].cl);
        }
        4 === e.ty && s(e.shapes);
      }
    }
    return function (s) {
      if (p(t, s.v) && (e(s.layers), s.assets)) {
        let t,
          i = s.assets.length;
        for (t = 0; t < i; t += 1) s.assets[t].layers && e(s.assets[t].layers);
      }
    };
  })();
function m(t, s) {
  0 !== t.t.a.length || 'm' in t.t.p || (t.singleShape = !0);
}
var g = {
  completeData: function (t, s) {
    t.__complete || (u(t), c(t), d(t), f(t), a(t.layers, t.assets), (t.__complete = !0));
  },
  checkColors: u,
  checkChars: d,
  checkShapes: f,
  completeLayers: a,
};
let y = 'function' == typeof Float32Array;
function v(t, s) {
  return 1 - 3 * s + 3 * t;
}
function _(t, s) {
  return 3 * s - 6 * t;
}
function k(t) {
  return 3 * t;
}
function S(t, s, e) {
  return ((v(s, e) * t + _(s, e)) * t + k(s)) * t;
}
function x(t, s, e) {
  return 3 * v(s, e) * t * t + 2 * _(s, e) * t + k(s);
}
function M(t, s, e, i) {
  if (!(0 <= t && t <= 1 && 0 <= e && e <= 1)) throw new Error('bezier x values must be in [0, 1] range');
  (this.mX1 = t),
    (this.mY1 = s),
    (this.mX2 = e),
    (this.mY2 = i),
    (this.sampleValues = y ? new Float32Array(11) : new Array(11)),
    this._preCompute(),
    (this.get = this.get.bind(this));
}
(M.prototype._preCompute = function () {
  if (this.mX1 !== this.mY1 || this.mX2 !== this.mY2)
    for (let t = 0; t < 11; ++t) this.sampleValues[t] = S(0.1 * t, this.mX1, this.mX2);
}),
  (M.prototype._getTForX = function (t) {
    let s = 0,
      e = 1;
    for (; 10 !== e && this.sampleValues[e] <= t; ++e) s += 0.1;
    --e;
    let i = s + ((t - this.sampleValues[e]) / (this.sampleValues[e + 1] - this.sampleValues[e])) * 0.1,
      h = x(i, this.mX1, this.mX2);
    return h >= 0.001
      ? (function (t, s, e, i) {
          for (let h = 0; h < 4; ++h) {
            let h = x(s, e, i);
            if (0 === h) return s;
            s -= (S(s, e, i) - t) / h;
          }
          return s;
        })(t, i, this.mX1, this.mX2)
      : 0 === h
      ? i
      : (function (t, s, e, i, h) {
          let r,
            a,
            n = 0;
          do {
            (a = s + (e - s) / 2), (r = S(a, i, h) - t), r > 0 ? (e = a) : (s = a);
          } while (Math.abs(r) > 1e-7 && ++n < 10);
          return a;
        })(t, s, s + 0.1, this.mX1, this.mX2);
  }),
  (M.prototype.get = function (t) {
    return this.mX1 === this.mY1 && this.mX2 === this.mY2
      ? t
      : 0 === t
      ? 0
      : 1 === t
      ? 1
      : S(this._getTForX(t), this.mY1, this.mY2);
  });
const P = {};
var T = {
  getBezierEasing: function (t, s, e, i, h) {
    const r = h || ('bez_' + t + '_' + s + '_' + e + '_' + i).replace(/\./g, 'p');
    if (P[r]) return P[r];
    const a = new M(t, s, e, i);
    return (P[r] = a), a;
  },
};
let w;
function D(t) {
  return new Array(t);
}
w =
  'function' == typeof Uint8ClampedArray && 'function' == typeof Float32Array
    ? function (t, s) {
        return 'float32' === t
          ? new Float32Array(s)
          : 'int16' === t
          ? new Int16Array(s)
          : 'uint8c' === t
          ? new Uint8ClampedArray(s)
          : void 0;
      }
    : function (t, s) {
        let e = 0;
        const i = [];
        let h;
        switch (t) {
          case 'int16':
          case 'uint8c':
            h = 1;
            break;
          default:
            h = 1.1;
        }
        for (e = 0; e < s; e += 1) i.push(h);
        return i;
      };
var L = {
  double: function (t) {
    return t.concat(D(t.length));
  },
};
const F = function (t, s, e) {
  let i = 0,
    h = t,
    r = D(h);
  return {
    newElement: function () {
      let t;
      return i ? ((i -= 1), (t = r[i])) : (t = s()), t;
    },
    release: function (t) {
      i === h && ((r = L.double(r)), (h *= 2)), e && e(t), (r[i] = t), (i += 1);
    },
  };
};
const A = F(8, function () {
  return w('float32', 2);
});
class C {
  constructor() {
    (this.c = !1),
      (this._length = 0),
      (this._maxLength = 8),
      (this.v = D(this._maxLength)),
      (this.o = D(this._maxLength)),
      (this.i = D(this._maxLength));
  }
  setPathData(t, s) {
    (this.c = t), this.setLength(s);
    let e = 0;
    for (; e < s; ) (this.v[e] = A.newElement()), (this.o[e] = A.newElement()), (this.i[e] = A.newElement()), (e += 1);
  }
  setLength(t) {
    for (; this._maxLength < t; ) this.doubleArrayLength();
    this._length = t;
  }
  doubleArrayLength() {
    (this.v = this.v.concat(D(this._maxLength))),
      (this.i = this.i.concat(D(this._maxLength))),
      (this.o = this.o.concat(D(this._maxLength))),
      (this._maxLength *= 2);
  }
  setXYAt(t, s, e, i, h) {
    let r;
    switch (
      ((this._length = Math.max(this._length, i + 1)), this._length >= this._maxLength && this.doubleArrayLength(), e)
    ) {
      case 'v':
        r = this.v;
        break;
      case 'i':
        r = this.i;
        break;
      case 'o':
        r = this.o;
    }
    (!r[i] || (r[i] && !h)) && (r[i] = A.newElement()), (r[i][0] = t), (r[i][1] = s);
  }
  setTripleAt(t, s, e, i, h, r, a, n) {
    this.setXYAt(t, s, 'v', a, n), this.setXYAt(e, i, 'o', a, n), this.setXYAt(h, r, 'i', a, n);
  }
  reverse() {
    const t = new C();
    t.setPathData(this.c, this._length);
    const s = this.v,
      e = this.o,
      i = this.i;
    let h = 0;
    this.c && (t.setTripleAt(s[0][0], s[0][1], i[0][0], i[0][1], e[0][0], e[0][1], 0, !1), (h = 1));
    let r = this._length - 1;
    const a = this._length;
    for (let n = h; n < a; n += 1) t.setTripleAt(s[r][0], s[r][1], i[r][0], i[r][1], e[r][0], e[r][1], n, !1), (r -= 1);
    return t;
  }
}
const b = F(
  4,
  function () {
    return new C();
  },
  function (t) {
    const s = t._length;
    for (let e = 0; e < s; e += 1)
      A.release(t.v[e]), A.release(t.i[e]), A.release(t.o[e]), (t.v[e] = null), (t.i[e] = null), (t.o[e] = null);
    (t._length = 0), (t.c = !1);
  },
);
b.clone = function (t) {
  const s = b.newElement(),
    e = void 0 === t._length ? t.v.length : t._length;
  s.setLength(e), (s.c = t.c);
  for (let i = 0; i < e; i += 1) s.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], i);
  return s;
};
class I {
  constructor() {
    (this._length = 0), (this._maxLength = 4), (this.shapes = D(this._maxLength));
  }
  addShape(t) {
    this._length === this._maxLength &&
      ((this.shapes = this.shapes.concat(D(this._maxLength))), (this._maxLength *= 2)),
      (this.shapes[this._length] = t),
      (this._length += 1);
  }
  releaseShapes() {
    for (let t = 0; t < this._length; t += 1) b.release(this.shapes[t]);
    this._length = 0;
  }
}
let E = 0,
  V = 4,
  N = D(V);
var q = {
  newShapeCollection: function () {
    let t;
    return E ? ((E -= 1), (t = N[E])) : (t = new I()), t;
  },
  release: function (t) {
    const s = t._length;
    for (let e = 0; e < s; e += 1) b.release(t.shapes[e]);
    (t._length = 0), E === V && ((N = L.double(N)), (V *= 2)), (N[E] = t), (E += 1);
  },
};
class O {
  outTypeExpressionMode() {
    (this._hasOutTypeExpression = !0), this.container && this.container.outTypeExpressionMode();
  }
  addDynamicProperty(t) {
    -1 === this.dynamicProperties.indexOf(t) &&
      (this.dynamicProperties.push(t),
      this.container.addDynamicProperty(this),
      (this._isAnimated = !0),
      t._hasOutTypeExpression && this.outTypeExpressionMode());
  }
  iterateDynamicProperties(t) {
    this._mdf = !1;
    const s = this.dynamicProperties.length;
    for (let e = 0; e < s; e += 1)
      this.dynamicProperties[e].getValue(t), this.dynamicProperties[e]._mdf && (this._mdf = !0);
  }
  initDynamicPropertyContainer(t) {
    (this.container = t),
      (this.dynamicProperties = []),
      (this._mdf = !1),
      (this._isAnimated = !1),
      (this._hasOutTypeExpression = !1);
  }
}
const X = F(8, function () {
  return { addedLength: 0, percents: w('float32', 200), lengths: w('float32', 200) };
});
const Y = F(
  8,
  function () {
    return { lengths: [], totalLength: 0 };
  },
  function (t) {
    const s = t.lengths.length;
    for (let e = 0; e < s; e += 1) X.release(t.lengths[e]);
    t.lengths.length = 0;
  },
);
function j(t, s, e, i, h, r) {
  const a = t * i + s * h + e * r - h * i - r * t - e * s;
  return a > -0.001 && a < 0.001;
}
function z(t, s, e, i) {
  let h,
    r = 0;
  const a = [],
    n = [],
    o = X.newElement(),
    l = e.length;
  for (let p = 0; p < 200; p += 1) {
    const c = p / 199;
    h = 0;
    for (let r = 0; r < l; r += 1) {
      const o =
        Math.pow(1 - c, 3) * t[r] +
        3 * Math.pow(1 - c, 2) * c * e[r] +
        3 * (1 - c) * Math.pow(c, 2) * i[r] +
        Math.pow(c, 3) * s[r];
      (a[r] = o), null !== n[r] && (h += Math.pow(a[r] - n[r], 2)), (n[r] = a[r]);
    }
    h && ((h = Math.sqrt(h)), (r += h)), (o.percents[p] = c), (o.lengths[p] = r);
  }
  return (o.addedLength = r), o;
}
function B(t) {
  (this.segmentLength = 0), (this.points = new Array(t));
}
function R(t, s) {
  (this.partialLength = t), (this.point = s);
}
const K = {};
function G(t, s) {
  const e = s.percents,
    i = s.lengths,
    h = e.length;
  let r = Math.floor((h - 1) * t);
  const a = t * s.addedLength;
  let n = 0;
  if (r === h - 1 || 0 === r || a === i[r]) return e[r];
  {
    const t = i[r] > a ? -1 : 1;
    let s = !0;
    for (; s; )
      if (
        (i[r] <= a && i[r + 1] > a ? ((n = (a - i[r]) / (i[r + 1] - i[r])), (s = !1)) : (r += t), r < 0 || r >= h - 1)
      ) {
        if (r === h - 1) return e[r];
        s = !1;
      }
    return e[r] + (e[r + 1] - e[r]) * n;
  }
}
const J = w('float32', 8);
var H = {
  getSegmentsLength: function (t) {
    const s = Y.newElement(),
      e = t.c,
      i = t.v,
      h = t.o,
      r = t.i,
      a = t._length,
      n = s.lengths;
    let o = 0,
      l = 0;
    for (; l < a - 1; l += 1) (n[l] = z(i[l], i[l + 1], h[l], r[l + 1])), (o += n[l].addedLength);
    return e && a && ((n[l] = z(i[l], i[0], h[l], r[0])), (o += n[l].addedLength)), (s.totalLength = o), s;
  },
  getNewSegment: function (t, s, e, i, h, r, a) {
    const n = G((h = h < 0 ? 0 : h > 1 ? 1 : h), a),
      o = G((r = r > 1 ? 1 : r), a),
      l = t.length,
      p = 1 - n,
      c = 1 - o,
      d = p * p * p,
      u = n * p * p * 3,
      f = n * n * p * 3,
      m = n * n * n,
      g = p * p * c,
      y = n * p * c + p * n * c + p * p * o,
      v = n * n * c + p * n * o + n * p * o,
      _ = n * n * o,
      k = p * c * c,
      S = n * c * c + p * o * c + p * c * o,
      x = n * o * c + p * o * o + n * c * o,
      M = n * o * o,
      P = c * c * c,
      T = o * c * c + c * o * c + c * c * o,
      w = o * o * c + c * o * o + o * c * o,
      D = o * o * o;
    for (let h = 0; h < l; h += 1)
      (J[4 * h] = Math.round(1e3 * (d * t[h] + u * e[h] + f * i[h] + m * s[h])) / 1e3),
        (J[4 * h + 1] = Math.round(1e3 * (g * t[h] + y * e[h] + v * i[h] + _ * s[h])) / 1e3),
        (J[4 * h + 2] = Math.round(1e3 * (k * t[h] + S * e[h] + x * i[h] + M * s[h])) / 1e3),
        (J[4 * h + 3] = Math.round(1e3 * (P * t[h] + T * e[h] + w * i[h] + D * s[h])) / 1e3);
    return J;
  },
  getPointInSegment: function (t, s, e, i, h, r) {
    const a = G(h, r),
      n = 1 - a;
    return [
      Math.round(
        1e3 *
          (n * n * n * t[0] +
            (a * n * n + n * a * n + n * n * a) * e[0] +
            (a * a * n + n * a * a + a * n * a) * i[0] +
            a * a * a * s[0]),
      ) / 1e3,
      Math.round(
        1e3 *
          (n * n * n * t[1] +
            (a * n * n + n * a * n + n * n * a) * e[1] +
            (a * a * n + n * a * a + a * n * a) * i[1] +
            a * a * a * s[1]),
      ) / 1e3,
    ];
  },
  buildBezierData: function (t, s, e, i) {
    const h = (t[0] + '_' + t[1] + '_' + s[0] + '_' + s[1] + '_' + e[0] + '_' + e[1] + '_' + i[0] + '_' + i[1]).replace(
      /\./g,
      'p',
    );
    if (!K[h]) {
      let r,
        a,
        n = 200,
        o = 0,
        l = null;
      2 === t.length &&
        (t[0] != s[0] || t[1] != s[1]) &&
        j(t[0], t[1], s[0], s[1], t[0] + e[0], t[1] + e[1]) &&
        j(t[0], t[1], s[0], s[1], s[0] + i[0], s[1] + i[1]) &&
        (n = 2);
      const p = new B(n),
        c = e.length;
      for (let h = 0; h < n; h += 1) {
        a = D(c);
        const d = h / (n - 1);
        r = 0;
        for (let h = 0; h < c; h += 1) {
          const n =
            Math.pow(1 - d, 3) * t[h] +
            3 * Math.pow(1 - d, 2) * d * (t[h] + e[h]) +
            3 * (1 - d) * Math.pow(d, 2) * (s[h] + i[h]) +
            Math.pow(d, 3) * s[h];
          (a[h] = n), null !== l && (r += Math.pow(a[h] - l[h], 2));
        }
        (r = Math.sqrt(r)), (o += r), (p.points[h] = new R(r, a)), (l = a);
      }
      (p.segmentLength = o), (K[h] = p);
    }
    return K[h];
  },
  pointOnLine2D: j,
  pointOnLine3D: function (t, s, e, i, h, r, a, n, o) {
    if (0 === e && 0 === r && 0 === o) return j(t, s, i, h, a, n);
    const l = Math.sqrt(Math.pow(i - t, 2) + Math.pow(h - s, 2) + Math.pow(r - e, 2)),
      p = Math.sqrt(Math.pow(a - t, 2) + Math.pow(n - s, 2) + Math.pow(o - e, 2)),
      c = Math.sqrt(Math.pow(a - i, 2) + Math.pow(n - h, 2) + Math.pow(o - r, 2));
    let d;
    return (d = l > p ? (l > c ? l - p - c : c - p - l) : c > p ? c - p - l : p - l - c), d > -1e-4 && d < 1e-4;
  },
};
const U = Math.PI / 180,
  Z = [0, 0],
  Q = /(loopIn|loopOut)\(([^)]+)/,
  W = /["']\w+["']/;
class $ {
  constructor(t, s, e) {
    (this.begin = s), (this.end = e), (this.total = this.end - this.begin), (this.type = t);
  }
  update(t) {
    return 'in' === this.type
      ? t >= this.begin
        ? t
        : this.end - s.euclideanModulo(this.begin - t, this.total)
      : 'out' === this.type
      ? t <= this.end
        ? t
        : this.begin + s.euclideanModulo(t - this.end, this.total)
      : void 0;
  }
}
class tt {
  constructor(t, s, e) {
    (this.begin = s), (this.end = e), (this.total = this.end - this.begin), (this.type = t);
  }
  update(t) {
    if (('in' === this.type && t < this.begin) || ('out' === this.type && t > this.end)) {
      const s = t - this.end;
      return this.pingpong(s);
    }
    return t;
  }
  pingpong(t) {
    return Math.floor(t / this.total) % 2
      ? this.begin + s.euclideanModulo(t, this.total)
      : this.end - s.euclideanModulo(t, this.total);
  }
}
const st = {
  loopIn(t, s, e) {
    const i = t[0].t,
      h = t.length - 1,
      r = t[Math.min(h, e)].t;
    switch (s) {
      case 'cycle':
        return new $('in', i, r);
      case 'pingpong':
        return new tt('in', i, r);
    }
    return null;
  },
  loopOut(t, s, e) {
    const i = t.length - 1,
      h = t[Math.max(0, i - e)].t,
      r = t[i].t;
    switch (s) {
      case 'cycle':
        return new $('out', h, r);
      case 'pingpong':
        return new tt('out', h, r);
    }
    return null;
  },
};
function et(t) {
  const s = t.match(Q),
    e = s[2].split(/\s*,\s*/).map(t => (W.test(t) ? t.replace(/"|'/g, '') : parseInt(t)));
  return { name: s[1], mode: e[0], offset: e[1] };
}
var it = {
  hasSupportExpression: function (t) {
    return t.x && Q.test(t.x);
  },
  getExpression: function (t) {
    const { name: s, mode: e, offset: i = 0 } = et(t.x),
      h = 0 === i ? t.k.length - 1 : i;
    return st[s] && st[s](t.k, e, h);
  },
};
function ht(t) {
  const s = t[0] * U,
    e = t[1] * U,
    i = t[2] * U,
    h = Math.cos(s / 2),
    r = Math.cos(e / 2),
    a = Math.cos(i / 2),
    n = Math.sin(s / 2),
    o = Math.sin(e / 2),
    l = Math.sin(i / 2);
  return [n * o * a + h * r * l, n * r * a + h * o * l, h * o * a - n * r * l, h * r * a - n * o * l];
}
class rt {
  interpolateValue(t, s) {
    let e;
    'multidimensional' === this.propType && (e = w('float32', this.pv.length));
    let i,
      h,
      r,
      a,
      n,
      o,
      l,
      p,
      c = s.lastIndex,
      d = c,
      u = this.keyframes.length - 1,
      f = !0;
    for (; f; ) {
      if (((i = this.keyframes[d]), (h = this.keyframes[d + 1]), d === u - 1 && t >= h.t)) {
        i.h && (i = h), (c = 0);
        break;
      }
      if (h.t > t) {
        c = d;
        break;
      }
      d < u - 1 ? (d += 1) : ((c = 0), (f = !1));
    }
    let m,
      g = h.t,
      y = i.t;
    if (i.to) {
      i.bezierData || (i.bezierData = H.buildBezierData(i.s, h.s || i.e, i.to, i.ti));
      let c = i.bezierData;
      if (t >= g || t < y) {
        let s = t >= g ? c.points.length - 1 : 0;
        for (a = c.points[s].point.length, r = 0; r < a; r += 1) e[r] = c.points[s].point[r];
      } else {
        i.__fnct ? (p = i.__fnct) : ((p = T.getBezierEasing(i.o.x, i.o.y, i.i.x, i.i.y, i.n).get), (i.__fnct = p)),
          (n = p((t - y) / (g - y)));
        let h,
          u = c.segmentLength * n,
          m = s.lastFrame < t && s._lastKeyframeIndex === d ? s._lastAddedLength : 0;
        for (l = s.lastFrame < t && s._lastKeyframeIndex === d ? s._lastPoint : 0, f = !0, o = c.points.length; f; ) {
          if (((m += c.points[l].partialLength), 0 === u || 0 === n || l === c.points.length - 1)) {
            for (a = c.points[l].point.length, r = 0; r < a; r += 1) e[r] = c.points[l].point[r];
            break;
          }
          if (u >= m && u < m + c.points[l + 1].partialLength) {
            for (h = (u - m) / c.points[l + 1].partialLength, a = c.points[l].point.length, r = 0; r < a; r += 1)
              e[r] = c.points[l].point[r] + (c.points[l + 1].point[r] - c.points[l].point[r]) * h;
            break;
          }
          l < o - 1 ? (l += 1) : (f = !1);
        }
        (s._lastPoint = l), (s._lastAddedLength = m - c.points[l].partialLength), (s._lastKeyframeIndex = d);
      }
    } else {
      let s, r, a, o, l;
      if (((u = i.s.length), (m = h.s || i.e), this.sh && 1 !== i.h))
        if (t >= g) (e[0] = m[0]), (e[1] = m[1]), (e[2] = m[2]);
        else if (t <= y) (e[0] = i.s[0]), (e[1] = i.s[1]), (e[2] = i.s[2]);
        else {
          !(function (t, s) {
            const e = s[0],
              i = s[1],
              h = s[2],
              r = s[3],
              a = Math.atan2(2 * i * r - 2 * e * h, 1 - 2 * i * i - 2 * h * h),
              n = Math.asin(2 * e * i + 2 * h * r),
              o = Math.atan2(2 * e * r - 2 * i * h, 1 - 2 * e * e - 2 * h * h);
            (t[0] = a / U), (t[1] = n / U), (t[2] = o / U);
          })(
            e,
            (function (t, s, e) {
              const i = [],
                h = t[0],
                r = t[1],
                a = t[2],
                n = t[3];
              let o,
                l,
                p,
                c,
                d,
                u = s[0],
                f = s[1],
                m = s[2],
                g = s[3];
              return (
                (l = h * u + r * f + a * m + n * g),
                l < 0 && ((l = -l), (u = -u), (f = -f), (m = -m), (g = -g)),
                1 - l > 1e-6
                  ? ((o = Math.acos(l)), (p = Math.sin(o)), (c = Math.sin((1 - e) * o) / p), (d = Math.sin(e * o) / p))
                  : ((c = 1 - e), (d = e)),
                (i[0] = c * h + d * u),
                (i[1] = c * r + d * f),
                (i[2] = c * a + d * m),
                (i[3] = c * n + d * g),
                i
              );
            })(ht(i.s), ht(m), (t - y) / (g - y)),
          );
        }
      else
        for (d = 0; d < u; d += 1)
          1 !== i.h &&
            (t >= g
              ? (n = 1)
              : t < y
              ? (n = 0)
              : (i.o.x.constructor === Array
                  ? (i.__fnct || (i.__fnct = []),
                    i.__fnct[d]
                      ? (p = i.__fnct[d])
                      : ((s = void 0 === i.o.x[d] ? i.o.x[0] : i.o.x[d]),
                        (r = void 0 === i.o.y[d] ? i.o.y[0] : i.o.y[d]),
                        (a = void 0 === i.i.x[d] ? i.i.x[0] : i.i.x[d]),
                        (o = void 0 === i.i.y[d] ? i.i.y[0] : i.i.y[d]),
                        (p = T.getBezierEasing(s, r, a, o).get),
                        (i.__fnct[d] = p)))
                  : i.__fnct
                  ? (p = i.__fnct)
                  : ((s = i.o.x),
                    (r = i.o.y),
                    (a = i.i.x),
                    (o = i.i.y),
                    (p = T.getBezierEasing(s, r, a, o).get),
                    (i.__fnct = p)),
                (n = p((t - y) / (g - y))))),
            (m = h.s || i.e),
            (l = 1 === i.h ? i.s[d] : i.s[d] + (m[d] - i.s[d]) * n),
            'multidimensional' === this.propType ? (e[d] = l) : (e = l);
    }
    return (s.lastIndex = c), e;
  }
  getValueAtCurrentTime(t) {
    let s = this.keyframes[0].t,
      e = this.keyframes[this.keyframes.length - 1].t;
    if (
      !(
        t === this._caching.lastFrame ||
        (-999999 !== this._caching.lastFrame &&
          ((this._caching.lastFrame >= e && t >= e) || (this._caching.lastFrame < s && t < s)))
      )
    ) {
      this._caching.lastFrame >= t && ((this._caching._lastKeyframeIndex = -1), (this._caching.lastIndex = 0));
      let s = this.interpolateValue(t, this._caching);
      this.pv = s;
    }
    return (this._caching.lastFrame = t), this.pv;
  }
  setVValue(t) {
    let s;
    if ('unidimensional' === this.propType)
      (s = t * this.mult), Math.abs(this.v - s) > 1e-5 && ((this.v = s), (this._mdf = !0));
    else {
      let e = 0;
      const i = this.v.length;
      for (; e < i; )
        (s = t[e] * this.mult), Math.abs(this.v[e] - s) > 1e-5 && ((this.v[e] = s), (this._mdf = !0)), (e += 1);
    }
  }
  processEffectsSequence(t) {
    if ((this.expression && (t = this.expression.update(t)), t === this.frameId || !this.effectsSequence.length))
      return;
    if (this.lock) return void this.setVValue(this.pv);
    let s;
    (this.lock = !0), (this._mdf = this._isFirstFrame);
    let e = this.effectsSequence.length,
      i = this.kf ? this.pv : this.data.k;
    for (s = 0; s < e; s += 1) i = this.effectsSequence[s](t);
    this.setVValue(i), (this._isFirstFrame = !1), (this.lock = !1), (this.frameId = t);
  }
  addEffect(t) {
    this.effectsSequence.push(t), this.container.addDynamicProperty(this);
  }
}
class at extends rt {
  constructor(t, s, e, i) {
    super(),
      (this.propType = 'unidimensional'),
      (this.mult = e || 1),
      (this.data = s),
      (this.v = e ? s.k * e : s.k),
      (this.pv = s.k),
      (this._mdf = !1),
      (this.elem = t),
      (this.container = i),
      (this.k = !1),
      (this.kf = !1),
      (this.vel = 0),
      (this.effectsSequence = []),
      (this._isFirstFrame = !0),
      (this.getValue = this.processEffectsSequence);
  }
}
class nt extends rt {
  constructor(t, s, e, i) {
    super(),
      (this.propType = 'multidimensional'),
      (this.mult = e || 1),
      (this.data = s),
      (this._mdf = !1),
      (this.elem = t),
      (this.container = i),
      (this.comp = t.comp),
      (this.k = !1),
      (this.kf = !1),
      (this.frameId = -1);
    const h = s.k.length;
    (this.v = w('float32', h)), (this.pv = w('float32', h)), (this.vel = w('float32', h));
    for (let t = 0; t < h; t += 1) (this.v[t] = s.k[t] * this.mult), (this.pv[t] = s.k[t]);
    (this._isFirstFrame = !0), (this.effectsSequence = []), (this.getValue = this.processEffectsSequence);
  }
}
class ot extends rt {
  constructor(t, s, e, i) {
    super(),
      (this.propType = 'unidimensional'),
      (this.keyframes = s.k),
      (this.frameId = -1),
      (this._caching = { lastFrame: -999999, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }),
      (this.k = !0),
      (this.kf = !0),
      (this.data = s),
      (this.mult = e || 1),
      (this.elem = t),
      (this.container = i),
      (this.comp = t.comp),
      (this.v = -999999),
      (this.pv = -999999),
      (this._isFirstFrame = !0),
      (this.getValue = this.processEffectsSequence),
      (this.effectsSequence = [this.getValueAtCurrentTime.bind(this)]),
      (this._hasOutTypeExpression = !1),
      it.hasSupportExpression(s) &&
        ((this.expression = it.getExpression(s)), (this._hasOutTypeExpression = 'out' === this.expression.type));
  }
}
class lt extends rt {
  constructor(t, s, e, i) {
    let h;
    super(), (this.propType = 'multidimensional');
    let r,
      a,
      n,
      o,
      l = s.k.length;
    for (h = 0; h < l - 1; h += 1)
      s.k[h].to &&
        s.k[h].s &&
        s.k[h + 1] &&
        s.k[h + 1].s &&
        ((r = s.k[h].s),
        (a = s.k[h + 1].s),
        (n = s.k[h].to),
        (o = s.k[h].ti),
        ((2 === r.length &&
          (r[0] !== a[0] || r[1] !== a[1]) &&
          H.pointOnLine2D(r[0], r[1], a[0], a[1], r[0] + n[0], r[1] + n[1]) &&
          H.pointOnLine2D(r[0], r[1], a[0], a[1], a[0] + o[0], a[1] + o[1])) ||
          (3 === r.length &&
            (r[0] !== a[0] || r[1] !== a[1] || r[2] !== a[2]) &&
            H.pointOnLine3D(r[0], r[1], r[2], a[0], a[1], a[2], r[0] + n[0], r[1] + n[1], r[2] + n[2]) &&
            H.pointOnLine3D(r[0], r[1], r[2], a[0], a[1], a[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]))) &&
          ((s.k[h].to = null), (s.k[h].ti = null)),
        r[0] === a[0] &&
          r[1] === a[1] &&
          0 === n[0] &&
          0 === n[1] &&
          0 === o[0] &&
          0 === o[1] &&
          (2 === r.length || (r[2] === a[2] && 0 === n[2] && 0 === o[2])) &&
          ((s.k[h].to = null), (s.k[h].ti = null)));
    (this.effectsSequence = [this.getValueAtCurrentTime.bind(this)]),
      (this.keyframes = s.k),
      (this.k = !0),
      (this.kf = !0),
      (this._isFirstFrame = !0),
      (this.mult = e || 1),
      (this.elem = t),
      (this.container = i),
      (this.comp = t.comp),
      (this.getValue = this.processEffectsSequence),
      (this.frameId = -1);
    let p = s.k[0].s.length;
    for (this.v = w('float32', p), this.pv = w('float32', p), h = 0; h < p; h += 1)
      (this.v[h] = -999999), (this.pv[h] = -999999);
    (this._caching = { lastFrame: -999999, lastIndex: 0, value: w('float32', p) }),
      (this._hasOutTypeExpression = !1),
      it.hasSupportExpression(s) &&
        ((this.expression = it.getExpression(s)), (this._hasOutTypeExpression = 'out' === this.expression.type));
  }
}
var pt = {
  getProp: function (t, s, e, i, h) {
    let r;
    if (s.k.length)
      if ('number' == typeof s.k[0]) r = new nt(t, s, i, h);
      else
        switch (e) {
          case 0:
            r = new ot(t, s, i, h);
            break;
          case 1:
            r = new lt(t, s, i, h);
        }
    else r = new at(t, s, i, h);
    return r.effectsSequence.length && h.addDynamicProperty(r), r;
  },
};
class ct {
  interpolateShape(t, s, e) {
    let i,
      h,
      r,
      a,
      n,
      o,
      l,
      p,
      c,
      d = e.lastIndex,
      u = this.keyframes;
    if (t < u[0].t) (i = u[0].s[0]), (r = !0), (d = 0);
    else if (t >= u[u.length - 1].t) (i = u[u.length - 1].s ? u[u.length - 1].s[0] : u[u.length - 2].e[0]), (r = !0);
    else {
      let s,
        e,
        a = d,
        n = u.length - 1,
        o = !0;
      for (; o && ((s = u[a]), (e = u[a + 1]), !(e.t > t)); ) a < n - 1 ? (a += 1) : (o = !1);
      if (((r = 1 === s.h), (d = a), !r)) {
        if (t >= e.t) p = 1;
        else if (t < s.t) p = 0;
        else {
          let i;
          s.__fnct ? (i = s.__fnct) : ((i = T.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y).get), (s.__fnct = i)),
            (p = i((t - s.t) / (e.t - s.t)));
        }
        h = e.s ? e.s[0] : s.e[0];
      }
      i = s.s[0];
    }
    for (o = s._length, l = i.i[0].length, e.lastIndex = d, a = 0; a < o; a += 1)
      for (n = 0; n < l; n += 1)
        (c = r ? i.i[a][n] : i.i[a][n] + (h.i[a][n] - i.i[a][n]) * p),
          (s.i[a][n] = c),
          (c = r ? i.o[a][n] : i.o[a][n] + (h.o[a][n] - i.o[a][n]) * p),
          (s.o[a][n] = c),
          (c = r ? i.v[a][n] : i.v[a][n] + (h.v[a][n] - i.v[a][n]) * p),
          (s.v[a][n] = c);
  }
  interpolateShapeCurrentTime(t) {
    let s = this.keyframes[0].t,
      e = this.keyframes[this.keyframes.length - 1].t,
      i = this._caching.lastFrame;
    return (
      (-999999 !== i && ((i < s && t < s) || (i > e && t > e))) ||
        ((this._caching.lastIndex = i < t ? this._caching.lastIndex : 0),
        this.interpolateShape(t, this.pv, this._caching)),
      (this._caching.lastFrame = t),
      this.pv
    );
  }
  resetShape() {
    this.paths = this.localShapeCollection;
  }
  shapesEqual(t, s) {
    if (t._length !== s._length || t.c !== s.c) return !1;
    let e,
      i = t._length;
    for (e = 0; e < i; e += 1)
      if (
        t.v[e][0] !== s.v[e][0] ||
        t.v[e][1] !== s.v[e][1] ||
        t.o[e][0] !== s.o[e][0] ||
        t.o[e][1] !== s.o[e][1] ||
        t.i[e][0] !== s.i[e][0] ||
        t.i[e][1] !== s.i[e][1]
      )
        return !1;
    return !0;
  }
  setVValue(t) {
    this.shapesEqual(this.v, t) ||
      ((this.v = b.clone(t)),
      this.localShapeCollection.releaseShapes(),
      this.localShapeCollection.addShape(this.v),
      (this._mdf = !0),
      (this.paths = this.localShapeCollection));
  }
  processEffectsSequence(t) {
    if (t === this.frameId) return;
    if (!this.effectsSequence.length) return void (this._mdf = !1);
    if (this.lock) return void this.setVValue(this.pv);
    (this.lock = !0), (this._mdf = !1);
    let s,
      e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,
      i = this.effectsSequence.length;
    for (s = 0; s < i; s += 1) e = this.effectsSequence[s](t);
    this.setVValue(e), (this.lock = !1), (this.frameId = t);
  }
  addEffect(t) {
    this.effectsSequence.push(t), this.container.addDynamicProperty(this);
  }
}
class dt extends ct {
  constructor(t, s, e) {
    super(),
      (this.propType = 'shape'),
      (this.comp = t.comp),
      (this.container = t),
      (this.elem = t),
      (this.data = s),
      (this.k = !1),
      (this.kf = !1),
      (this._mdf = !1);
    let i = 3 === e ? s.pt.k : s.ks.k;
    (this.v = b.clone(i)),
      (this.pv = b.clone(this.v)),
      (this.localShapeCollection = q.newShapeCollection()),
      (this.paths = this.localShapeCollection),
      this.paths.addShape(this.v),
      (this.reset = this.resetShape),
      (this.effectsSequence = []),
      (this.getValue = this.processEffectsSequence);
  }
}
class ut extends ct {
  constructor(t, s, e) {
    super(),
      (this.propType = 'shape'),
      (this.comp = t.comp),
      (this.elem = t),
      (this.container = t),
      (this.keyframes = 3 === e ? s.pt.k : s.ks.k),
      (this.k = !0),
      (this.kf = !0);
    let i = this.keyframes[0].s[0].i.length;
    (this.v = b.newElement()),
      this.v.setPathData(this.keyframes[0].s[0].c, i),
      (this.pv = b.clone(this.v)),
      (this.localShapeCollection = q.newShapeCollection()),
      (this.paths = this.localShapeCollection),
      this.paths.addShape(this.v),
      (this.lastFrame = -999999),
      (this.reset = this.resetShape),
      (this._caching = { lastFrame: -999999, lastIndex: 0 }),
      (this.effectsSequence = [this.interpolateShapeCurrentTime.bind(this)]),
      (this.getValue = this.processEffectsSequence),
      (this._hasOutTypeExpression = !1),
      it.hasSupportExpression(s) &&
        ((this.expression = it.getExpression(s)), (this._hasOutTypeExpression = 'out' === this.expression.type));
  }
}
class ft extends O {
  constructor(t, s) {
    super(),
      (this.v = b.newElement()),
      this.v.setPathData(!0, 4),
      (this.localShapeCollection = q.newShapeCollection()),
      (this.paths = this.localShapeCollection),
      this.localShapeCollection.addShape(this.v),
      (this.d = s.d),
      (this.elem = t),
      (this.comp = t.comp),
      (this.frameId = -1),
      this.initDynamicPropertyContainer(t),
      (this.p = pt.getProp(t, s.p, 1, 0, this)),
      (this.s = pt.getProp(t, s.s, 1, 0, this)),
      this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertEllToPath());
  }
  reset() {
    this.paths = this.localShapeCollection;
  }
  getValue(t) {
    t !== this.frameId && (this.iterateDynamicProperties(t), (this.frameId = t), this._mdf && this.convertEllToPath());
  }
  convertEllToPath() {
    const t = this.p.v[0],
      s = this.p.v[1],
      e = this.s.v[0] / 2,
      i = this.s.v[1] / 2,
      h = 3 !== this.d,
      r = this.v;
    (r.v[0][0] = t),
      (r.v[0][1] = s - i),
      (r.v[1][0] = h ? t + e : t - e),
      (r.v[1][1] = s),
      (r.v[2][0] = t),
      (r.v[2][1] = s + i),
      (r.v[3][0] = h ? t - e : t + e),
      (r.v[3][1] = s),
      (r.i[0][0] = h ? t - e * gt : t + e * gt),
      (r.i[0][1] = s - i),
      (r.i[1][0] = h ? t + e : t - e),
      (r.i[1][1] = s - i * gt),
      (r.i[2][0] = h ? t + e * gt : t - e * gt),
      (r.i[2][1] = s + i),
      (r.i[3][0] = h ? t - e : t + e),
      (r.i[3][1] = s + i * gt),
      (r.o[0][0] = h ? t + e * gt : t - e * gt),
      (r.o[0][1] = s - i),
      (r.o[1][0] = h ? t + e : t - e),
      (r.o[1][1] = s + i * gt),
      (r.o[2][0] = h ? t - e * gt : t + e * gt),
      (r.o[2][1] = s + i),
      (r.o[3][0] = h ? t - e : t + e),
      (r.o[3][1] = s - i * gt);
  }
}
class mt extends O {
  constructor(t, s) {
    super(),
      (this.v = b.newElement()),
      this.v.setPathData(!0, 0),
      (this.elem = t),
      (this.comp = t.comp),
      (this.data = s),
      (this.frameId = -1),
      (this.d = s.d),
      this.initDynamicPropertyContainer(t),
      1 === s.sy
        ? ((this.ir = pt.getProp(t, s.ir, 0, 0, this)),
          (this.is = pt.getProp(t, s.is, 0, 0.01, this)),
          (this.convertToPath = this.convertStarToPath))
        : (this.convertToPath = this.convertPolygonToPath),
      (this.pt = pt.getProp(t, s.pt, 0, 0, this)),
      (this.p = pt.getProp(t, s.p, 1, 0, this)),
      (this.r = pt.getProp(t, s.r, 0, U, this)),
      (this.or = pt.getProp(t, s.or, 0, 0, this)),
      (this.os = pt.getProp(t, s.os, 0, 0.01, this)),
      (this.localShapeCollection = q.newShapeCollection()),
      this.localShapeCollection.addShape(this.v),
      (this.paths = this.localShapeCollection),
      this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertToPath());
  }
  reset() {
    this.paths = this.localShapeCollection;
  }
  getValue(t) {
    t !== this.frameId && ((this.frameId = t), this.iterateDynamicProperties(t), this._mdf && this.convertToPath());
  }
  convertStarToPath() {
    let t,
      s,
      e,
      i,
      h = 2 * Math.floor(this.pt.v),
      r = (2 * Math.PI) / h,
      a = !0,
      n = this.or.v,
      o = this.ir.v,
      l = this.os.v,
      p = this.is.v,
      c = (2 * Math.PI * n) / (2 * h),
      d = (2 * Math.PI * o) / (2 * h),
      u = -Math.PI / 2;
    u += this.r.v;
    let f = 3 === this.data.d ? -1 : 1;
    for (this.v._length = 0, t = 0; t < h; t += 1) {
      (s = a ? n : o), (e = a ? l : p), (i = a ? c : d);
      let h = s * Math.cos(u),
        m = s * Math.sin(u),
        g = 0 === h && 0 === m ? 0 : m / Math.sqrt(h * h + m * m),
        y = 0 === h && 0 === m ? 0 : -h / Math.sqrt(h * h + m * m);
      (h += +this.p.v[0]),
        (m += +this.p.v[1]),
        this.v.setTripleAt(h, m, h - g * i * e * f, m - y * i * e * f, h + g * i * e * f, m + y * i * e * f, t, !0),
        (a = !a),
        (u += r * f);
    }
  }
  convertPolygonToPath() {
    let t,
      s = Math.floor(this.pt.v),
      e = (2 * Math.PI) / s,
      i = this.or.v,
      h = this.os.v,
      r = (2 * Math.PI * i) / (4 * s),
      a = -Math.PI / 2,
      n = 3 === this.data.d ? -1 : 1;
    for (a += this.r.v, this.v._length = 0, t = 0; t < s; t += 1) {
      let s = i * Math.cos(a),
        o = i * Math.sin(a),
        l = 0 === s && 0 === o ? 0 : o / Math.sqrt(s * s + o * o),
        p = 0 === s && 0 === o ? 0 : -s / Math.sqrt(s * s + o * o);
      (s += +this.p.v[0]),
        (o += +this.p.v[1]),
        this.v.setTripleAt(s, o, s - l * r * h * n, o - p * r * h * n, s + l * r * h * n, o + p * r * h * n, t, !0),
        (a += e * n);
    }
    (this.paths.length = 0), (this.paths[0] = this.v);
  }
}
const gt = 0.5519;
class yt extends O {
  constructor(t, s) {
    super(),
      (this.v = b.newElement()),
      (this.v.c = !0),
      (this.localShapeCollection = q.newShapeCollection()),
      this.localShapeCollection.addShape(this.v),
      (this.paths = this.localShapeCollection),
      (this.elem = t),
      (this.comp = t.comp),
      (this.frameId = -1),
      (this.d = s.d),
      this.initDynamicPropertyContainer(t),
      (this.p = pt.getProp(t, s.p, 1, 0, this)),
      (this.s = pt.getProp(t, s.s, 1, 0, this)),
      (this.r = pt.getProp(t, s.r, 0, 0, this)),
      this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertRectToPath());
  }
  reset() {
    this.paths = this.localShapeCollection;
  }
  getValue(t) {
    t !== this.frameId && ((this.frameId = t), this.iterateDynamicProperties(t), this._mdf && this.convertRectToPath());
  }
  convertRectToPath() {
    let t = this.p.v[0],
      s = this.p.v[1],
      e = this.s.v[0] / 2,
      i = this.s.v[1] / 2,
      h = Math.min(e, i, this.r.v),
      r = h * (1 - 0.5519);
    (this.v._length = 0),
      2 === this.d || 1 === this.d
        ? (this.v.setTripleAt(t + e, s - i + h, t + e, s - i + h, t + e, s - i + r, 0, !0),
          this.v.setTripleAt(t + e, s + i - h, t + e, s + i - r, t + e, s + i - h, 1, !0),
          0 !== h
            ? (this.v.setTripleAt(t + e - h, s + i, t + e - h, s + i, t + e - r, s + i, 2, !0),
              this.v.setTripleAt(t - e + h, s + i, t - e + r, s + i, t - e + h, s + i, 3, !0),
              this.v.setTripleAt(t - e, s + i - h, t - e, s + i - h, t - e, s + i - r, 4, !0),
              this.v.setTripleAt(t - e, s - i + h, t - e, s - i + r, t - e, s - i + h, 5, !0),
              this.v.setTripleAt(t - e + h, s - i, t - e + h, s - i, t - e + r, s - i, 6, !0),
              this.v.setTripleAt(t + e - h, s - i, t + e - r, s - i, t + e - h, s - i, 7, !0))
            : (this.v.setTripleAt(t - e, s + i, t - e + r, s + i, t - e, s + i, 2),
              this.v.setTripleAt(t - e, s - i, t - e, s - i + r, t - e, s - i, 3)))
        : (this.v.setTripleAt(t + e, s - i + h, t + e, s - i + r, t + e, s - i + h, 0, !0),
          0 !== h
            ? (this.v.setTripleAt(t + e - h, s - i, t + e - h, s - i, t + e - r, s - i, 1, !0),
              this.v.setTripleAt(t - e + h, s - i, t - e + r, s - i, t - e + h, s - i, 2, !0),
              this.v.setTripleAt(t - e, s - i + h, t - e, s - i + h, t - e, s - i + r, 3, !0),
              this.v.setTripleAt(t - e, s + i - h, t - e, s + i - r, t - e, s + i - h, 4, !0),
              this.v.setTripleAt(t - e + h, s + i, t - e + h, s + i, t - e + r, s + i, 5, !0),
              this.v.setTripleAt(t + e - h, s + i, t + e - r, s + i, t + e - h, s + i, 6, !0),
              this.v.setTripleAt(t + e, s + i - h, t + e, s + i - h, t + e, s + i - r, 7, !0))
            : (this.v.setTripleAt(t - e, s - i, t - e + r, s - i, t - e, s - i, 1, !0),
              this.v.setTripleAt(t - e, s + i, t - e, s + i - r, t - e, s + i, 2, !0),
              this.v.setTripleAt(t + e, s + i, t + e - r, s + i, t + e, s + i, 3, !0)));
  }
}
var vt = {
  getShapeProp: function (t, s, e) {
    let i;
    if (3 === e || 4 === e) {
      i = (3 === e ? s.pt : s.ks).k.length ? new ut(t, s, e) : new dt(t, s, e);
    } else 5 === e ? (i = new yt(t, s)) : 6 === e ? (i = new ft(t, s)) : 7 === e && (i = new mt(t, s));
    return i.k && t.addDynamicProperty(i), i;
  },
  getConstructorFunction: function () {
    return dt;
  },
  getKeyframedConstructorFunction: function () {
    return ut;
  },
};
class _t extends O {
  constructor(t, s, e) {
    super(),
      (this.frameId = -1),
      (this.elem = t),
      (this.session = e),
      (this.masksProperties = s || []),
      this.initDynamicPropertyContainer(t),
      (this.viewData = D(this.masksProperties.length));
    const i = this.masksProperties.length;
    let h = !1;
    for (let t = 0; t < i; t++)
      'n' !== this.masksProperties[t].mode && (h = !0),
        (this.viewData[t] = vt.getShapeProp(this, this.masksProperties[t], 3)),
        (this.viewData[t].inv = this.masksProperties[t].inv);
    this.hasMasks = h;
  }
  getValue(t) {
    t !== this.frameId && (this.iterateDynamicProperties(t), (this.frameId = t));
  }
}
/*!
   Transformation Matrix v2.0
   (c) Epistemex 2014-2015
   www.epistemex.com
   By Ken Fyrstenberg
   Contributions by leeoniya.
   License: MIT, header required.
   */ var kt = (function () {
  var t = Math.cos,
    s = Math.sin,
    e = Math.tan,
    i = Math.round;
  function h() {
    return (
      (this.props[0] = 1),
      (this.props[1] = 0),
      (this.props[2] = 0),
      (this.props[3] = 0),
      (this.props[4] = 0),
      (this.props[5] = 1),
      (this.props[6] = 0),
      (this.props[7] = 0),
      (this.props[8] = 0),
      (this.props[9] = 0),
      (this.props[10] = 1),
      (this.props[11] = 0),
      (this.props[12] = 0),
      (this.props[13] = 0),
      (this.props[14] = 0),
      (this.props[15] = 1),
      this
    );
  }
  function r(e) {
    if (0 === e) return this;
    var i = t(e),
      h = s(e);
    return this._t(i, -h, 0, 0, h, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  function a(e) {
    if (0 === e) return this;
    var i = t(e),
      h = s(e);
    return this._t(1, 0, 0, 0, 0, i, -h, 0, 0, h, i, 0, 0, 0, 0, 1);
  }
  function n(e) {
    if (0 === e) return this;
    var i = t(e),
      h = s(e);
    return this._t(i, 0, h, 0, 0, 1, 0, 0, -h, 0, i, 0, 0, 0, 0, 1);
  }
  function o(e) {
    if (0 === e) return this;
    var i = t(e),
      h = s(e);
    return this._t(i, -h, 0, 0, h, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  function l(t, s) {
    return this._t(1, s, t, 1, 0, 0);
  }
  function p(t, s) {
    return this.shear(e(t), e(s));
  }
  function c(i, h) {
    var r = t(h),
      a = s(h);
    return this._t(r, a, 0, 0, -a, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      ._t(1, 0, 0, 0, e(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      ._t(r, -a, 0, 0, a, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  function d(t, s, e) {
    return (
      e || 0 === e || (e = 1),
      1 === t && 1 === s && 1 === e ? this : this._t(t, 0, 0, 0, 0, s, 0, 0, 0, 0, e, 0, 0, 0, 0, 1)
    );
  }
  function u(t, s, e, i, h, r, a, n, o, l, p, c, d, u, f, m) {
    return (
      (this.props[0] = t),
      (this.props[1] = s),
      (this.props[2] = e),
      (this.props[3] = i),
      (this.props[4] = h),
      (this.props[5] = r),
      (this.props[6] = a),
      (this.props[7] = n),
      (this.props[8] = o),
      (this.props[9] = l),
      (this.props[10] = p),
      (this.props[11] = c),
      (this.props[12] = d),
      (this.props[13] = u),
      (this.props[14] = f),
      (this.props[15] = m),
      this
    );
  }
  function f(t, s, e) {
    return (e = e || 0), 0 !== t || 0 !== s || 0 !== e ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, s, e, 1) : this;
  }
  function m(t, s, e, i, h, r, a, n, o, l, p, c, d, u, f, m) {
    var g = this.props;
    if (
      1 === t &&
      0 === s &&
      0 === e &&
      0 === i &&
      0 === h &&
      1 === r &&
      0 === a &&
      0 === n &&
      0 === o &&
      0 === l &&
      1 === p &&
      0 === c
    )
      return (
        (g[12] = g[12] * t + g[15] * d),
        (g[13] = g[13] * r + g[15] * u),
        (g[14] = g[14] * p + g[15] * f),
        (g[15] = g[15] * m),
        (this._identityCalculated = !1),
        this
      );
    var y = g[0],
      v = g[1],
      _ = g[2],
      k = g[3],
      S = g[4],
      x = g[5],
      M = g[6],
      P = g[7],
      T = g[8],
      w = g[9],
      D = g[10],
      L = g[11],
      F = g[12],
      A = g[13],
      C = g[14],
      b = g[15];
    return (
      (g[0] = y * t + v * h + _ * o + k * d),
      (g[1] = y * s + v * r + _ * l + k * u),
      (g[2] = y * e + v * a + _ * p + k * f),
      (g[3] = y * i + v * n + _ * c + k * m),
      (g[4] = S * t + x * h + M * o + P * d),
      (g[5] = S * s + x * r + M * l + P * u),
      (g[6] = S * e + x * a + M * p + P * f),
      (g[7] = S * i + x * n + M * c + P * m),
      (g[8] = T * t + w * h + D * o + L * d),
      (g[9] = T * s + w * r + D * l + L * u),
      (g[10] = T * e + w * a + D * p + L * f),
      (g[11] = T * i + w * n + D * c + L * m),
      (g[12] = F * t + A * h + C * o + b * d),
      (g[13] = F * s + A * r + C * l + b * u),
      (g[14] = F * e + A * a + C * p + b * f),
      (g[15] = F * i + A * n + C * c + b * m),
      (this._identityCalculated = !1),
      this
    );
  }
  function g() {
    return (
      this._identityCalculated ||
        ((this._identity = !(
          1 !== this.props[0] ||
          0 !== this.props[1] ||
          0 !== this.props[2] ||
          0 !== this.props[3] ||
          0 !== this.props[4] ||
          1 !== this.props[5] ||
          0 !== this.props[6] ||
          0 !== this.props[7] ||
          0 !== this.props[8] ||
          0 !== this.props[9] ||
          1 !== this.props[10] ||
          0 !== this.props[11] ||
          0 !== this.props[12] ||
          0 !== this.props[13] ||
          0 !== this.props[14] ||
          1 !== this.props[15]
        )),
        (this._identityCalculated = !0)),
      this._identity
    );
  }
  function y(t) {
    for (var s = 0; s < 16; ) {
      if (t.props[s] !== this.props[s]) return !1;
      s += 1;
    }
    return !0;
  }
  function v(t) {
    var s;
    for (s = 0; s < 16; s += 1) t.props[s] = this.props[s];
  }
  function _(t) {
    var s;
    for (s = 0; s < 16; s += 1) this.props[s] = t[s];
  }
  function k(t, s, e) {
    return {
      x: t * this.props[0] + s * this.props[4] + e * this.props[8] + this.props[12],
      y: t * this.props[1] + s * this.props[5] + e * this.props[9] + this.props[13],
      z: t * this.props[2] + s * this.props[6] + e * this.props[10] + this.props[14],
    };
  }
  function S(t, s, e) {
    return t * this.props[0] + s * this.props[4] + e * this.props[8] + this.props[12];
  }
  function x(t, s, e) {
    return t * this.props[1] + s * this.props[5] + e * this.props[9] + this.props[13];
  }
  function M(t, s, e) {
    return t * this.props[2] + s * this.props[6] + e * this.props[10] + this.props[14];
  }
  function P(t) {
    var s = this.props[0] * this.props[5] - this.props[1] * this.props[4],
      e = this.props[5] / s,
      i = -this.props[1] / s,
      h = -this.props[4] / s,
      r = this.props[0] / s,
      a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / s,
      n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / s;
    return [t[0] * e + t[1] * h + a, t[0] * i + t[1] * r + n, 0];
  }
  function T(t) {
    var s,
      e = t.length,
      i = [];
    for (s = 0; s < e; s += 1) i[s] = P(t[s]);
    return i;
  }
  function D(t, s, e) {
    var i = w('float32', 6);
    if (this.isIdentity()) (i[0] = t[0]), (i[1] = t[1]), (i[2] = s[0]), (i[3] = s[1]), (i[4] = e[0]), (i[5] = e[1]);
    else {
      var h = this.props[0],
        r = this.props[1],
        a = this.props[4],
        n = this.props[5],
        o = this.props[12],
        l = this.props[13];
      (i[0] = t[0] * h + t[1] * a + o),
        (i[1] = t[0] * r + t[1] * n + l),
        (i[2] = s[0] * h + s[1] * a + o),
        (i[3] = s[0] * r + s[1] * n + l),
        (i[4] = e[0] * h + e[1] * a + o),
        (i[5] = e[0] * r + e[1] * n + l);
    }
    return i;
  }
  function L(t, s, e) {
    return this.isIdentity()
      ? [t, s, e]
      : [
          t * this.props[0] + s * this.props[4] + e * this.props[8] + this.props[12],
          t * this.props[1] + s * this.props[5] + e * this.props[9] + this.props[13],
          t * this.props[2] + s * this.props[6] + e * this.props[10] + this.props[14],
        ];
  }
  function F(t, s) {
    if (this.isIdentity()) return t + ',' + s;
    var e = this.props;
    return (
      Math.round(100 * (t * e[0] + s * e[4] + e[12])) / 100 +
      ',' +
      Math.round(100 * (t * e[1] + s * e[5] + e[13])) / 100
    );
  }
  function A() {
    for (var t = 0, s = this.props, e = 'matrix3d('; t < 16; )
      (e += i(1e4 * s[t]) / 1e4), (e += 15 === t ? ')' : ','), (t += 1);
    return e;
  }
  function C(t) {
    return (t < 1e-6 && t > 0) || (t > -1e-6 && t < 0) ? i(1e4 * t) / 1e4 : t;
  }
  function b() {
    var t = this.props;
    return 'matrix(' + C(t[0]) + ',' + C(t[1]) + ',' + C(t[4]) + ',' + C(t[5]) + ',' + C(t[12]) + ',' + C(t[13]) + ')';
  }
  return function () {
    (this.reset = h),
      (this.rotate = r),
      (this.rotateX = a),
      (this.rotateY = n),
      (this.rotateZ = o),
      (this.skew = p),
      (this.skewFromAxis = c),
      (this.shear = l),
      (this.scale = d),
      (this.setTransform = u),
      (this.translate = f),
      (this.transform = m),
      (this.applyToPoint = k),
      (this.applyToX = S),
      (this.applyToY = x),
      (this.applyToZ = M),
      (this.applyToPointArray = L),
      (this.applyToTriplePoints = D),
      (this.applyToPointStringified = F),
      (this.toCSS = A),
      (this.to2dCSS = b),
      (this.clone = v),
      (this.cloneFromProps = _),
      (this.equals = y),
      (this.inversePoints = T),
      (this.inversePoint = P),
      (this._t = this.transform),
      (this.isIdentity = g),
      (this._identity = !0),
      (this._identityCalculated = !1),
      (this.props = w('float32', 16)),
      this.reset();
  };
})();
class St {
  constructor() {
    (this.sequences = {}), (this.sequenceList = []), (this.transform_key_count = 0);
  }
  addTransformSequence(t) {
    const s = t.length;
    let e = '_';
    for (let i = 0; i < s; i += 1) e += t[i].transform.key + '_';
    let i = this.sequences[e];
    return (
      i ||
        ((i = { transforms: [].concat(t), finalTransform: new kt(), _mdf: !1 }),
        (this.sequences[e] = i),
        this.sequenceList.push(i)),
      i
    );
  }
  processSequence(t, s) {
    let e = 0,
      i = s;
    const h = t.transforms.length;
    for (; e < h && !s; ) {
      if (t.transforms[e].transform.mProps._mdf) {
        i = !0;
        break;
      }
      e += 1;
    }
    if (i) {
      let s;
      for (t.finalTransform.reset(), e = h - 1; e >= 0; e -= 1)
        (s = t.transforms[e].transform.mProps.v.props),
          t.finalTransform.transform(
            s[0],
            s[1],
            s[2],
            s[3],
            s[4],
            s[5],
            s[6],
            s[7],
            s[8],
            s[9],
            s[10],
            s[11],
            s[12],
            s[13],
            s[14],
            s[15],
          );
    }
    t._mdf = i;
  }
  processSequences(t) {
    const s = this.sequenceList.length;
    for (let e = 0; e < s; e += 1) this.processSequence(this.sequenceList[e], t);
  }
  getNewKey() {
    return '_' + this.transform_key_count++;
  }
}
class xt {
  constructor(t, s) {
    (this.elem = t), (this.pos = s);
  }
}
class Mt {
  constructor(t, s, e, i) {
    (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
    let h = 4;
    'rc' == s.ty ? (h = 5) : 'el' == s.ty ? (h = 6) : 'sr' == s.ty && (h = 7), (this.sh = vt.getShapeProp(t, s, h));
    const r = e.length;
    for (let t = 0; t < r; t += 1)
      if (!e[t].closed) {
        const s = { transforms: i.addTransformSequence(e[t].transforms), trNodes: [] };
        this.styledShapes.push(s), e[t].elements.push(s);
      }
  }
  setAsAnimated() {
    this._isAnimated = !0;
  }
}
const Pt = {};
function Tt(t) {
  return Pt[t];
}
var wt = {
  Type: {
    Null: 'Null',
    Path: 'Path',
    Shape: 'Shape',
    Solid: 'Solid',
    Sprite: 'Sprite',
    Component: 'Component',
    Container: 'Container',
  },
  registerDisplayByType: function (t, s) {
    Pt[t] = s;
  },
};
class Dt {
  constructor(t, s, e) {
    (this.elem = t),
      (this.data = s),
      (this.type = s.ty),
      (this.preTransforms = e),
      (this.transforms = []),
      (this.elements = []),
      (this.closed = !0 === s.hd),
      (this.displayType = wt.Type.Path);
    const i = Tt(this.displayType);
    (this.display = new i(this, s)),
      this.elem.innerDisplay ? this.elem.innerDisplay.addChild(this.display) : this.elem.display.addChild(this.display);
  }
  updateGrahpics() {
    this.display.updateLottieGrahpics(this);
  }
}
class Lt extends O {
  constructor(t, s, e) {
    if (
      (super(),
      (this.elem = t),
      (this.frameId = -1),
      (this.propType = 'transform'),
      (this.data = s),
      (this.v = new kt()),
      (this.pre = new kt()),
      (this.appliedTransformations = 0),
      this.initDynamicPropertyContainer(e || t),
      s.p && s.p.s
        ? ((this.px = pt.getProp(t, s.p.x, 0, 0, this)),
          (this.py = pt.getProp(t, s.p.y, 0, 0, this)),
          s.p.z && (this.pz = pt.getProp(t, s.p.z, 0, 0, this)))
        : (this.p = pt.getProp(t, s.p || { k: [0, 0, 0] }, 1, 0, this)),
      s.rx)
    ) {
      if (
        ((this.rx = pt.getProp(t, s.rx, 0, U, this)),
        (this.ry = pt.getProp(t, s.ry, 0, U, this)),
        (this.rz = pt.getProp(t, s.rz, 0, U, this)),
        s.or.k[0].ti)
      ) {
        let t,
          e = s.or.k.length;
        for (t = 0; t < e; t += 1) s.or.k[t].to = s.or.k[t].ti = null;
      }
      (this.or = pt.getProp(t, s.or, 1, U, this)), (this.or.sh = !0);
    } else this.r = pt.getProp(t, s.r || { k: 0 }, 0, U, this);
    s.sk && ((this.sk = pt.getProp(t, s.sk, 0, U, this)), (this.sa = pt.getProp(t, s.sa, 0, U, this))),
      (this.a = pt.getProp(t, s.a || { k: [0, 0, 0] }, 1, 0, this)),
      (this.s = pt.getProp(t, s.s || { k: [100, 100, 100] }, 1, 0.01, this)),
      s.o ? (this.o = pt.getProp(t, s.o, 0, 0.01, t)) : (this.o = { _mdf: !1, v: 1 }),
      (this._isDirty = !0),
      this.dynamicProperties.length || this.getValue(-999999, !0);
  }
  getValue(t, s) {
    if (t !== this.frameId) {
      if (
        (this._isDirty && (this.precalculateMatrix(), (this._isDirty = !1)),
        this.iterateDynamicProperties(),
        this._mdf || s)
      ) {
        if (
          (this.v.cloneFromProps(this.pre.props),
          this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
          this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
          this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v),
          this.r && this.appliedTransformations < 4
            ? this.v.rotate(-this.r.v)
            : !this.r &&
              this.appliedTransformations < 4 &&
              this.v
                .rotateZ(-this.rz.v)
                .rotateY(this.ry.v)
                .rotateX(this.rx.v)
                .rotateZ(-this.or.v[2])
                .rotateY(this.or.v[1])
                .rotateX(this.or.v[0]),
          this.autoOriented)
        ) {
          let t, s;
          const e = this.elem.globalData.frameRate;
          if (this.p && this.p.keyframes && this.p.getValueAtTime)
            this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t
              ? ((t = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / e, 0)),
                (s = this.p.getValueAtTime(this.p.keyframes[0].t / e, 0)))
              : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t
              ? ((t = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / e, 0)),
                (s = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / e, 0)))
              : ((t = this.p.pv),
                (s = this.p.getValueAtTime(
                  (this.p._caching.lastFrame + this.p.offsetTime - 0.01) / e,
                  this.p.offsetTime,
                )));
          else if (
            this.px &&
            this.px.keyframes &&
            this.py.keyframes &&
            this.px.getValueAtTime &&
            this.py.getValueAtTime
          ) {
            (t = []), (s = []);
            let i = this.px,
              h = this.py;
            i._caching.lastFrame + i.offsetTime <= i.keyframes[0].t
              ? ((t[0] = i.getValueAtTime((i.keyframes[0].t + 0.01) / e, 0)),
                (t[1] = h.getValueAtTime((h.keyframes[0].t + 0.01) / e, 0)),
                (s[0] = i.getValueAtTime(i.keyframes[0].t / e, 0)),
                (s[1] = h.getValueAtTime(h.keyframes[0].t / e, 0)))
              : i._caching.lastFrame + i.offsetTime >= i.keyframes[i.keyframes.length - 1].t
              ? ((t[0] = i.getValueAtTime(i.keyframes[i.keyframes.length - 1].t / e, 0)),
                (t[1] = h.getValueAtTime(h.keyframes[h.keyframes.length - 1].t / e, 0)),
                (s[0] = i.getValueAtTime((i.keyframes[i.keyframes.length - 1].t - 0.01) / e, 0)),
                (s[1] = h.getValueAtTime((h.keyframes[h.keyframes.length - 1].t - 0.01) / e, 0)))
              : ((t = [i.pv, h.pv]),
                (s[0] = i.getValueAtTime((i._caching.lastFrame + i.offsetTime - 0.01) / e, i.offsetTime)),
                (s[1] = h.getValueAtTime((h._caching.lastFrame + h.offsetTime - 0.01) / e, h.offsetTime)));
          } else t = s = Z;
          this.v.rotate(-Math.atan2(t[1] - s[1], t[0] - s[0]));
        }
        this.data.p && this.data.p.s
          ? this.data.p.z
            ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
            : this.v.translate(this.px.v, this.py.v, 0)
          : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }
      this.frameId = t;
    }
  }
  precalculateMatrix() {
    if (
      !this.a.k &&
      (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
      (this.appliedTransformations = 1),
      !this.s.effectsSequence.length)
    ) {
      if ((this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), (this.appliedTransformations = 2), this.sk)) {
        if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
        this.pre.skewFromAxis(-this.sk.v, this.sa.v), (this.appliedTransformations = 3);
      }
      if (this.r) {
        if (this.r.effectsSequence.length) return;
        this.pre.rotate(-this.r.v), (this.appliedTransformations = 4);
      } else
        this.rz.effectsSequence.length ||
          this.ry.effectsSequence.length ||
          this.rx.effectsSequence.length ||
          this.or.effectsSequence.length ||
          (this.pre
            .rotateZ(-this.rz.v)
            .rotateY(this.ry.v)
            .rotateX(this.rx.v)
            .rotateZ(-this.or.v[2])
            .rotateY(this.or.v[1])
            .rotateX(this.or.v[0]),
          (this.appliedTransformations = 4));
    }
  }
  applyToMatrix(t) {
    let s = this._mdf;
    this.iterateDynamicProperties(),
      (this._mdf = this._mdf || s),
      this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
      this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
      this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
      this.r
        ? t.rotate(-this.r.v)
        : t
            .rotateZ(-this.rz.v)
            .rotateY(this.ry.v)
            .rotateX(this.rx.v)
            .rotateZ(-this.or.v[2])
            .rotateY(this.or.v[1])
            .rotateX(this.or.v[0]),
      this.data.p.s
        ? this.data.p.z
          ? t.translate(this.px.v, this.py.v, -this.pz.v)
          : t.translate(this.px.v, this.py.v, 0)
        : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
  }
}
function Ft(t, s, e) {
  return new Lt(t, s, e);
}
class At extends O {
  initModifierProperties() {}
  addShapeToModifier() {}
  addShape(t) {
    if (!this.closed) {
      t.sh.container.addDynamicProperty(t.sh);
      const s = { shape: t.sh, data: t, localShapeCollection: q.newShapeCollection() };
      this.shapes.push(s), this.addShapeToModifier(s), this._isAnimated && t.setAsAnimated();
    }
  }
  init(t, s) {
    (this.shapes = []),
      (this.elem = t),
      this.initDynamicPropertyContainer(t),
      this.initModifierProperties(t, s),
      (this.frameId = -999999),
      (this.closed = !1),
      (this.k = !1),
      this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
  }
  processKeys(t) {
    t !== this.frameId && ((this.frameId = t), this.iterateDynamicProperties(t));
  }
}
const Ct = {};
function bt(t, s) {
  Ct[t] || (Ct[t] = s);
}
bt(
  'tm',
  class extends At {
    initModifierProperties(t, s) {
      (this.s = pt.getProp(t, s.s, 0, 0.01, this)),
        (this.e = pt.getProp(t, s.e, 0, 0.01, this)),
        (this.o = pt.getProp(t, s.o, 0, 0, this)),
        (this.sValue = 0),
        (this.eValue = 0),
        (this.getValue = this.processKeys),
        (this.m = s.m),
        (this._isAnimated =
          !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length);
    }
    addShapeToModifier(t) {
      t.pathsData = [];
    }
    calculateShapeEdges(t, s, e, i, h) {
      let r = [];
      s <= 1
        ? r.push({ s: t, e: s })
        : t >= 1
        ? r.push({ s: t - 1, e: s - 1 })
        : (r.push({ s: t, e: 1 }), r.push({ s: 0, e: s - 1 }));
      let a,
        n,
        o = [],
        l = r.length;
      for (a = 0; a < l; a += 1)
        if (((n = r[a]), n.e * h < i || n.s * h > i + e));
        else {
          let t, s;
          (t = n.s * h <= i ? 0 : (n.s * h - i) / e), (s = n.e * h >= i + e ? 1 : (n.e * h - i) / e), o.push([t, s]);
        }
      return o.length || o.push([0, 0]), o;
    }
    releasePathsData(t) {
      const s = t.length;
      for (let e = 0; e < s; e += 1) Y.release(t[e]);
      return (t.length = 0), t;
    }
    processShapes(t) {
      let s, e, i, h;
      if (this._mdf || t) {
        let t = (this.o.v % 360) / 360;
        if (
          (t < 0 && (t += 1),
          (s = (this.s.v > 1 ? 1 : this.s.v < 0 ? 0 : this.s.v) + t),
          (e = (this.e.v > 1 ? 1 : this.e.v < 0 ? 0 : this.e.v) + t),
          s > e)
        ) {
          let t = s;
          (s = e), (e = t);
        }
        (s = 1e-4 * Math.round(1e4 * s)), (e = 1e-4 * Math.round(1e4 * e)), (this.sValue = s), (this.eValue = e);
      } else (s = this.sValue), (e = this.eValue);
      let r,
        a,
        n,
        o,
        l,
        p = this.shapes.length,
        c = 0;
      if (e === s)
        for (h = 0; h < p; h += 1)
          this.shapes[h].localShapeCollection.releaseShapes(),
            (this.shapes[h].shape._mdf = !0),
            (this.shapes[h].shape.paths = this.shapes[h].localShapeCollection),
            this._mdf && (this.shapes[h].pathsData.length = 0);
      else if ((1 === e && 0 === s) || (0 === e && 1 === s)) {
        if (this._mdf)
          for (h = 0; h < p; h += 1) (this.shapes[h].pathsData.length = 0), (this.shapes[h].shape._mdf = !0);
      } else {
        let d,
          u,
          f = [];
        for (h = 0; h < p; h += 1)
          if (((d = this.shapes[h]), d.shape._mdf || this._mdf || t || 2 === this.m)) {
            if (((i = d.shape.paths), (a = i._length), (l = 0), !d.shape._mdf && d.pathsData.length))
              l = d.totalShapeLength;
            else {
              for (n = this.releasePathsData(d.pathsData), r = 0; r < a; r += 1)
                (o = H.getSegmentsLength(i.shapes[r])), n.push(o), (l += o.totalLength);
              (d.totalShapeLength = l), (d.pathsData = n);
            }
            (c += l), (d.shape._mdf = !0);
          } else d.shape.paths = d.localShapeCollection;
        let m,
          g = s,
          y = e,
          v = 0;
        for (h = p - 1; h >= 0; h -= 1)
          if (((d = this.shapes[h]), d.shape._mdf)) {
            for (
              u = d.localShapeCollection,
                u.releaseShapes(),
                2 === this.m && p > 1
                  ? ((m = this.calculateShapeEdges(s, e, d.totalShapeLength, v, c)), (v += d.totalShapeLength))
                  : (m = [[g, y]]),
                a = m.length,
                r = 0;
              r < a;
              r += 1
            ) {
              (g = m[r][0]),
                (y = m[r][1]),
                (f.length = 0),
                y <= 1
                  ? f.push({ s: d.totalShapeLength * g, e: d.totalShapeLength * y })
                  : g >= 1
                  ? f.push({ s: d.totalShapeLength * (g - 1), e: d.totalShapeLength * (y - 1) })
                  : (f.push({ s: d.totalShapeLength * g, e: d.totalShapeLength }),
                    f.push({ s: 0, e: d.totalShapeLength * (y - 1) }));
              let t = this.addShapes(d, f[0]);
              if (f[0].s !== f[0].e) {
                if (f.length > 1) {
                  if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                    let s = t.pop();
                    this.addPaths(t, u), (t = this.addShapes(d, f[1], s));
                  } else this.addPaths(t, u), (t = this.addShapes(d, f[1]));
                }
                this.addPaths(t, u);
              }
            }
            d.shape.paths = u;
          }
      }
    }
    addPaths(t, s) {
      const e = t.length;
      for (let i = 0; i < e; i += 1) s.addShape(t[i]);
    }
    addSegment(t, s, e, i, h, r, a) {
      h.setXYAt(s[0], s[1], 'o', r),
        h.setXYAt(e[0], e[1], 'i', r + 1),
        a && h.setXYAt(t[0], t[1], 'v', r),
        h.setXYAt(i[0], i[1], 'v', r + 1);
    }
    addSegmentFromArray(t, s, e, i) {
      s.setXYAt(t[1], t[5], 'o', e),
        s.setXYAt(t[2], t[6], 'i', e + 1),
        i && s.setXYAt(t[0], t[4], 'v', e),
        s.setXYAt(t[3], t[7], 'v', e + 1);
    }
    addShapes(t, s, e) {
      let i,
        h,
        r,
        a,
        n,
        o,
        l,
        p,
        c = t.pathsData,
        d = t.shape.paths.shapes,
        u = t.shape.paths._length,
        f = 0,
        m = [],
        g = !0;
      for (
        e ? ((n = e._length), (p = e._length)) : ((e = b.newElement()), (n = 0), (p = 0)), m.push(e), i = 0;
        i < u;
        i += 1
      ) {
        for (o = c[i].lengths, e.c = d[i].c, r = d[i].c ? o.length : o.length + 1, h = 1; h < r; h += 1)
          if (((a = o[h - 1]), f + a.addedLength < s.s)) (f += a.addedLength), (e.c = !1);
          else {
            if (f > s.e) {
              e.c = !1;
              break;
            }
            s.s <= f && s.e >= f + a.addedLength
              ? (this.addSegment(d[i].v[h - 1], d[i].o[h - 1], d[i].i[h], d[i].v[h], e, n, g), (g = !1))
              : ((l = H.getNewSegment(
                  d[i].v[h - 1],
                  d[i].v[h],
                  d[i].o[h - 1],
                  d[i].i[h],
                  (s.s - f) / a.addedLength,
                  (s.e - f) / a.addedLength,
                  o[h - 1],
                )),
                this.addSegmentFromArray(l, e, n, g),
                (g = !1),
                (e.c = !1)),
              (f += a.addedLength),
              (n += 1);
          }
        if (d[i].c && o.length) {
          if (((a = o[h - 1]), f <= s.e)) {
            let t = o[h - 1].addedLength;
            s.s <= f && s.e >= f + t
              ? (this.addSegment(d[i].v[h - 1], d[i].o[h - 1], d[i].i[0], d[i].v[0], e, n, g), (g = !1))
              : ((l = H.getNewSegment(
                  d[i].v[h - 1],
                  d[i].v[0],
                  d[i].o[h - 1],
                  d[i].i[0],
                  (s.s - f) / t,
                  (s.e - f) / t,
                  o[h - 1],
                )),
                this.addSegmentFromArray(l, e, n, g),
                (g = !1),
                (e.c = !1));
          } else e.c = !1;
          (f += a.addedLength), (n += 1);
        }
        if (
          (e._length &&
            (e.setXYAt(e.v[p][0], e.v[p][1], 'i', p),
            e.setXYAt(e.v[e._length - 1][0], e.v[e._length - 1][1], 'o', e._length - 1)),
          f > s.e)
        )
          break;
        i < u - 1 && ((e = b.newElement()), (g = !0), m.push(e), (n = 0));
      }
      return m;
    }
  },
),
  bt(
    'rd',
    class extends At {
      initModifierProperties(t, s) {
        (this.getValue = this.processKeys),
          (this.rd = pt.getProp(t, s.r, 0, null, this)),
          (this._isAnimated = !!this.rd.effectsSequence.length);
      }
      processPath(t, s) {
        const e = b.newElement();
        let i;
        e.c = t.c;
        let h,
          r,
          a,
          n,
          o,
          l,
          p,
          c,
          d,
          u,
          f,
          m,
          g = t._length,
          y = 0;
        for (i = 0; i < g; i += 1)
          (h = t.v[i]),
            (a = t.o[i]),
            (r = t.i[i]),
            h[0] === a[0] && h[1] === a[1] && h[0] === r[0] && h[1] === r[1]
              ? (0 !== i && i !== g - 1) || t.c
                ? ((n = 0 === i ? t.v[g - 1] : t.v[i - 1]),
                  (o = Math.sqrt(Math.pow(h[0] - n[0], 2) + Math.pow(h[1] - n[1], 2))),
                  (l = o ? Math.min(o / 2, s) / o : 0),
                  (p = f = h[0] + (n[0] - h[0]) * l),
                  (c = m = h[1] - (h[1] - n[1]) * l),
                  (d = p - 0.5519 * (p - h[0])),
                  (u = c - 0.5519 * (c - h[1])),
                  e.setTripleAt(p, c, d, u, f, m, y),
                  (y += 1),
                  (n = i === g - 1 ? t.v[0] : t.v[i + 1]),
                  (o = Math.sqrt(Math.pow(h[0] - n[0], 2) + Math.pow(h[1] - n[1], 2))),
                  (l = o ? Math.min(o / 2, s) / o : 0),
                  (p = d = h[0] + (n[0] - h[0]) * l),
                  (c = u = h[1] + (n[1] - h[1]) * l),
                  (f = p - 0.5519 * (p - h[0])),
                  (m = c - 0.5519 * (c - h[1])),
                  e.setTripleAt(p, c, d, u, f, m, y),
                  (y += 1))
                : (e.setTripleAt(h[0], h[1], a[0], a[1], r[0], r[1], y), (y += 1))
              : (e.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], y), (y += 1));
        return e;
      }
      processShapes(t) {
        let s,
          e,
          i,
          h,
          r = this.shapes.length,
          a = this.rd.v;
        if (0 !== a) {
          let n, o;
          for (e = 0; e < r; e += 1) {
            if (((n = this.shapes[e]), (o = n.localShapeCollection), n.shape._mdf || this._mdf || t))
              for (
                o.releaseShapes(), n.shape._mdf = !0, s = n.shape.paths.shapes, h = n.shape.paths._length, i = 0;
                i < h;
                i += 1
              )
                o.addShape(this.processPath(s[i], a));
            n.shape.paths = n.localShapeCollection;
          }
        }
        this.dynamicProperties.length || (this._mdf = !1);
      }
    },
  ),
  bt(
    'rp',
    class extends At {
      initModifierProperties(t, s) {
        (this.getValue = this.processKeys),
          (this.c = pt.getProp(t, s.c, 0, null, this)),
          (this.o = pt.getProp(t, s.o, 0, null, this)),
          (this.tr = Ft(t, s.tr, this)),
          (this.so = pt.getProp(t, s.tr.so, 0, 0.01, this)),
          (this.eo = pt.getProp(t, s.tr.eo, 0, 0.01, this)),
          (this.data = s),
          this.dynamicProperties.length || this.getValue(!0),
          (this._isAnimated = !!this.dynamicProperties.length),
          (this.pMatrix = new kt()),
          (this.rMatrix = new kt()),
          (this.sMatrix = new kt()),
          (this.tMatrix = new kt()),
          (this.matrix = new kt());
      }
      applyTransforms(t, s, e, i, h, r) {
        let a = r ? -1 : 1,
          n = i.s.v[0] + (1 - i.s.v[0]) * (1 - h),
          o = i.s.v[1] + (1 - i.s.v[1]) * (1 - h);
        t.translate(i.p.v[0] * a * h, i.p.v[1] * a * h, i.p.v[2]),
          s.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
          s.rotate(-i.r.v * a * h),
          s.translate(i.a.v[0], i.a.v[1], i.a.v[2]),
          e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
          e.scale(r ? 1 / n : n, r ? 1 / o : o),
          e.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
      }
      init(t, s, e, i) {
        for (
          this.elem = t,
            this.arr = s,
            this.pos = e,
            this.elemsData = i,
            this._currentCopies = 0,
            this._elements = [],
            this._groups = [],
            this.frameId = -1,
            this.initDynamicPropertyContainer(t),
            this.initModifierProperties(t, s[e]);
          e > 0;

        )
          (e -= 1), this._elements.unshift(s[e]);
        this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
      }
      resetElements(t) {
        const s = t.length;
        for (let e = 0; e < s; e += 1) (t[e]._processed = !1), 'gr' === t[e].ty && this.resetElements(t[e].it);
      }
      cloneElements(t) {
        let s = JSON.parse(JSON.stringify(t));
        return this.resetElements(s), s;
      }
      changeGroupRender(t, s) {
        const e = t.length;
        for (let i = 0; i < e; i += 1) (t[i]._render = s), 'gr' === t[i].ty && this.changeGroupRender(t[i].it, s);
      }
      processShapes(t) {
        if (this._mdf || t) {
          let t = Math.ceil(this.c.v);
          if (this._groups.length < t) {
            for (; this._groups.length < t; ) {
              let t = { it: this.cloneElements(this._elements), ty: 'gr' };
              t.it.push({
                a: { a: 0, ix: 1, k: [0, 0] },
                nm: 'Transform',
                o: { a: 0, ix: 7, k: 100 },
                p: { a: 0, ix: 2, k: [0, 0] },
                r: {
                  a: 1,
                  ix: 6,
                  k: [
                    { s: 0, e: 0, t: 0 },
                    { s: 0, e: 0, t: 1 },
                  ],
                },
                s: { a: 0, ix: 3, k: [100, 100] },
                sa: { a: 0, ix: 5, k: 0 },
                sk: { a: 0, ix: 4, k: 0 },
                ty: 'tr',
              }),
                this.arr.splice(0, 0, t),
                this._groups.splice(0, 0, t),
                (this._currentCopies += 1);
            }
            this.elem.reloadShapes();
          }
          let s,
            e,
            i = 0;
          for (s = 0; s <= this._groups.length - 1; s += 1)
            (e = i < t), (this._groups[s]._render = e), this.changeGroupRender(this._groups[s].it, e), (i += 1);
          this._currentCopies = t;
          let h = this.o.v,
            r = h % 1,
            a = h > 0 ? Math.floor(h) : Math.ceil(h),
            n = this.pMatrix.props,
            o = this.rMatrix.props,
            l = this.sMatrix.props;
          this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
          let p = 0;
          if (h > 0) {
            for (; p < a; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), (p += 1);
            r && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, r, !1), (p += r));
          } else if (h < 0) {
            for (; p > a; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), (p -= 1);
            r && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -r, !0), (p -= r));
          }
          s = 1 === this.data.m ? 0 : this._currentCopies - 1;
          const c = 1 === this.data.m ? 1 : -1;
          for (i = this._currentCopies; i; ) {
            const t = this.elemsData[s].it,
              e = t[t.length - 1].transform.mProps.v.props,
              h = e.length;
            if (
              ((t[t.length - 1].transform.mProps._mdf = !0),
              (t[t.length - 1].transform.op._mdf = !0),
              (t[t.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1))),
              0 !== p)
            ) {
              ((0 !== s && 1 === c) || (s !== this._currentCopies - 1 && -1 === c)) &&
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                this.matrix.transform(
                  o[0],
                  o[1],
                  o[2],
                  o[3],
                  o[4],
                  o[5],
                  o[6],
                  o[7],
                  o[8],
                  o[9],
                  o[10],
                  o[11],
                  o[12],
                  o[13],
                  o[14],
                  o[15],
                ),
                this.matrix.transform(
                  l[0],
                  l[1],
                  l[2],
                  l[3],
                  l[4],
                  l[5],
                  l[6],
                  l[7],
                  l[8],
                  l[9],
                  l[10],
                  l[11],
                  l[12],
                  l[13],
                  l[14],
                  l[15],
                ),
                this.matrix.transform(
                  n[0],
                  n[1],
                  n[2],
                  n[3],
                  n[4],
                  n[5],
                  n[6],
                  n[7],
                  n[8],
                  n[9],
                  n[10],
                  n[11],
                  n[12],
                  n[13],
                  n[14],
                  n[15],
                );
              for (let t = 0; t < h; t += 1) e[t] = this.matrix.props[t];
              this.matrix.reset();
            } else {
              this.matrix.reset();
              for (let t = 0; t < h; t += 1) e[t] = this.matrix.props[t];
            }
            (p += 1), (i -= 1), (s += c);
          }
        } else {
          let t = this._currentCopies,
            s = 0;
          const e = 1;
          for (; t; ) {
            const i = this.elemsData[s].it;
            (i[i.length - 1].transform.mProps._mdf = !1), (i[i.length - 1].transform.op._mdf = !1), (t -= 1), (s += e);
          }
        }
      }
      addShape() {}
    },
  ),
  bt(
    'ms',
    class extends At {
      initModifierProperties(t, s) {
        (this.getValue = this.processKeys), (this.data = s), (this.positions = []);
      }
      processKeys(t, s) {
        (t !== this.frameId || s) && (this._mdf = !0);
      }
      addShapeToModifier() {
        this.positions.push([]);
      }
      processPath(t, s, e) {
        let i,
          h,
          r,
          a,
          n = t.v.length,
          o = [],
          l = [],
          p = [];
        for (i = 0; i < n; i += 1) {
          e.v[i] ||
            ((e.v[i] = [t.v[i][0], t.v[i][1]]),
            (e.o[i] = [t.o[i][0], t.o[i][1]]),
            (e.i[i] = [t.i[i][0], t.i[i][1]]),
            (e.distV[i] = 0),
            (e.distO[i] = 0),
            (e.distI[i] = 0)),
            (h = Math.atan2(t.v[i][1] - s[1], t.v[i][0] - s[0])),
            (r = s[0] - e.v[i][0]),
            (a = s[1] - e.v[i][1]);
          let n = Math.sqrt(r * r + a * a);
          (e.distV[i] += (n - e.distV[i]) * this.data.dc),
            (e.v[i][0] = (Math.cos(h) * Math.max(0, this.data.maxDist - e.distV[i])) / 2 + t.v[i][0]),
            (e.v[i][1] = (Math.sin(h) * Math.max(0, this.data.maxDist - e.distV[i])) / 2 + t.v[i][1]),
            (h = Math.atan2(t.o[i][1] - s[1], t.o[i][0] - s[0])),
            (r = s[0] - e.o[i][0]),
            (a = s[1] - e.o[i][1]),
            (n = Math.sqrt(r * r + a * a)),
            (e.distO[i] += (n - e.distO[i]) * this.data.dc),
            (e.o[i][0] = (Math.cos(h) * Math.max(0, this.data.maxDist - e.distO[i])) / 2 + t.o[i][0]),
            (e.o[i][1] = (Math.sin(h) * Math.max(0, this.data.maxDist - e.distO[i])) / 2 + t.o[i][1]),
            (h = Math.atan2(t.i[i][1] - s[1], t.i[i][0] - s[0])),
            (r = s[0] - e.i[i][0]),
            (a = s[1] - e.i[i][1]),
            (n = Math.sqrt(r * r + a * a)),
            (e.distI[i] += (n - e.distI[i]) * this.data.dc),
            (e.i[i][0] = (Math.cos(h) * Math.max(0, this.data.maxDist - e.distI[i])) / 2 + t.i[i][0]),
            (e.i[i][1] = (Math.sin(h) * Math.max(0, this.data.maxDist - e.distI[i])) / 2 + t.i[i][1]),
            o.push(e.v[i]),
            l.push(e.o[i]),
            p.push(e.i[i]);
        }
        return { v: o, o: l, i: p, c: t.c };
      }
      processShapes() {
        let t,
          s,
          e,
          i,
          h = this.elem.globalData.mouseX,
          r = this.elem.globalData.mouseY,
          a = this.shapes.length;
        if (h) {
          let n,
            o = this.elem.globalToLocal([h, r, 0]),
            l = [];
          for (s = 0; s < a; s += 1)
            if (((n = this.shapes[s]), n.shape._mdf || this._mdf)) {
              for (n.shape._mdf = !0, t = n.shape.paths, i = t.length, e = 0; e < i; e += 1)
                this.positions[s][e] ||
                  (this.positions[s][e] = { v: [], o: [], i: [], distV: [], distO: [], distI: [] }),
                  l.push(this.processPath(t[e], o, this.positions[s][e]));
              (n.shape.paths = l), (n.last = l);
            } else n.shape.paths = n.last;
        }
      }
    },
  );
var It = {
  getModifier: function (t, s, e) {
    return new Ct[t](s, e);
  },
};
class Et extends O {
  constructor(t, s, e) {
    let i;
    super(),
      (this.elem = t),
      (this.frameId = -1),
      (this.dataProps = D(s.length)),
      (this.k = !1),
      (this.dashArray = w('float32', s.length ? s.length - 1 : 0)),
      (this.dashoffset = w('float32', 1)),
      this.initDynamicPropertyContainer(e);
    let h,
      r = s.length || 0;
    for (i = 0; i < r; i += 1)
      (h = pt.getProp(t, s[i].v, 0, 0, this)), (this.k = h.k || this.k), (this.dataProps[i] = { n: s[i].n, p: h });
    this.k || this.getValue(!0), (this._isAnimated = this.k);
  }
  getValue(t, s) {
    if (
      (t !== this.frameId || s) &&
      ((this.frameId = t), this.iterateDynamicProperties(), (this._mdf = this._mdf || s), this._mdf)
    ) {
      let t = 0,
        s = this.dataProps.length;
      for (t = 0; t < s; t += 1)
        'o' != this.dataProps[t].n
          ? (this.dashArray[t] = this.dataProps[t].p.v)
          : (this.dashoffset[0] = this.dataProps[t].p.v);
    }
  }
}
class Vt extends O {
  constructor(t, s, e) {
    super(), (this.data = s), (this.c = w('uint8c', 4 * s.p));
    let i = s.k.k[0].s ? s.k.k[0].s.length - 4 * s.p : s.k.k.length - 4 * s.p;
    (this.o = w('float32', i)),
      (this._cmdf = !1),
      (this._omdf = !1),
      (this._collapsable = this.checkCollapsable()),
      (this._hasOpacity = i),
      this.initDynamicPropertyContainer(e),
      (this.prop = pt.getProp(t, s.k, 1, null, this)),
      (this.k = this.prop.k),
      this.getValue(!0);
  }
  comparePoints(t, s) {
    let e,
      i = 0,
      h = this.o.length / 2;
    for (; i < h; ) {
      if (((e = Math.abs(t[4 * i] - t[4 * s + 2 * i])), e > 0.01)) return !1;
      i += 1;
    }
    return !0;
  }
  checkCollapsable() {
    if (this.o.length / 2 != this.c.length / 4) return !1;
    if (this.data.k.k[0].s) {
      let t = 0,
        s = this.data.k.k.length;
      for (; t < s; ) {
        if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
        t += 1;
      }
    } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
    return !0;
  }
  getValue(t) {
    if ((this.prop.getValue(), (this._mdf = !1), (this._cmdf = !1), (this._omdf = !1), this.prop._mdf || t)) {
      let s,
        e,
        i,
        h = 4 * this.data.p;
      for (s = 0; s < h; s += 1)
        (e = s % 4 == 0 ? 100 : 255),
          (i = Math.round(this.prop.v[s] * e)),
          this.c[s] !== i && ((this.c[s] = i), (this._cmdf = !t));
      if (this.o.length)
        for (h = this.prop.v.length, s = 4 * this.data.p; s < h; s += 1)
          (e = s % 2 == 0 ? 100 : 1),
            (i = s % 2 == 0 ? Math.round(100 * this.prop.v[s]) : this.prop.v[s]),
            this.o[s - 4 * this.data.p] !== i && ((this.o[s - 4 * this.data.p] = i), (this._omdf = !t));
      this._mdf = !t;
    }
  }
}
class Nt extends O {
  constructor(t, s, e) {
    super(),
      (this.frameId = -1),
      (this.keyframesManager = t),
      (this.elem = t.elem),
      (this.session = e),
      (this.shapes = []),
      (this.shapesData = s),
      (this.stylesList = []),
      (this.itemsData = []),
      (this.prevViewData = []),
      (this.shapeModifiers = []),
      (this.processedElements = []),
      (this.transformsManager = new St()),
      this.initDynamicPropertyContainer(t),
      (this.lcEnum = { 1: 'butt', 2: 'round', 3: 'square' }),
      (this.ljEnum = { 1: 'miter', 2: 'round', 3: 'bevel' }),
      (this._isFirstFrame = !0),
      (this.transformHelper = { opacity: 1, _opMdf: !1 }),
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []),
      this._isAnimated ||
        ((this.transformHelper.opacity = 1),
        (this.transformHelper._opMdf = !1),
        this.updateModifiers(this.frameId),
        this.transformsManager.processSequences(this._isFirstFrame),
        this.updateShape(this.transformHelper, this.shapesData, this.itemsData),
        this.updateGrahpics());
  }
  createStyleElement(t, s) {
    const e = new Dt(this.elem, t, this.transformsManager.addTransformSequence(s)),
      i = {};
    if (
      ('fl' == t.ty || 'st' == t.ty
        ? ((i.c = pt.getProp(this, t.c, 1, 255, this)), i.c.k || (e.co = i.c.v))
        : ('gf' !== t.ty && 'gs' !== t.ty) ||
          ((i.s = pt.getProp(this, t.s, 1, null, this)),
          (i.e = pt.getProp(this, t.e, 1, null, this)),
          (i.h = pt.getProp(this, t.h || { k: 0 }, 0, 0.01, this)),
          (i.a = pt.getProp(this, t.a || { k: 0 }, 0, U, this)),
          (i.g = new Vt(this, t.g, this))),
      (i.o = pt.getProp(this, t.o, 0, 0.01, this)),
      'st' == t.ty || 'gs' == t.ty)
    ) {
      if (
        ((e.lc = this.lcEnum[t.lc] || 'round'),
        (e.lj = this.ljEnum[t.lj] || 'round'),
        1 == t.lj && (e.ml = t.ml),
        (i.w = pt.getProp(this, t.w, 0, null, this)),
        i.w.k || (e.wi = i.w.v),
        t.d)
      ) {
        let s = new Et(this, t.d, 'canvas', this);
        (i.d = s), i.d.k || ((e.da = i.d.dashArray), (e.do = i.d.dashoffset[0]));
      }
    } else e.r = 2 === t.r ? 'evenodd' : 'nonzero';
    return this.stylesList.push(e), (i.style = e), i;
  }
  addShapeToModifiers(t) {
    let s,
      e = this.shapeModifiers.length;
    for (s = 0; s < e; s += 1) this.shapeModifiers[s].addShape(t);
  }
  isShapeInAnimatedModifiers(t) {
    let s = this.shapeModifiers.length;
    for (; 0 < s; ) if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
    return !1;
  }
  updateModifiers(t) {
    if (!this.shapeModifiers.length) return;
    let s,
      e = this.shapes.length;
    for (s = 0; s < e; s += 1) this.shapes[s].sh.reset();
    for (e = this.shapeModifiers.length, s = e - 1; s >= 0; s -= 1)
      this.shapeModifiers[s].processShapes(t, this._isFirstFrame);
  }
  searchProcessedElement(t) {
    let s = this.processedElements,
      e = 0,
      i = s.length;
    for (; e < i; ) {
      if (s[e].elem === t) return s[e].pos;
      e += 1;
    }
    return 0;
  }
  addProcessedElement(t, s) {
    let e = this.processedElements,
      i = e.length;
    for (; i; ) if (((i -= 1), e[i].elem === t)) return void (e[i].pos = s);
    e.push(new xt(t, s));
  }
  createGroupElement() {
    return { it: [], prevViewData: [] };
  }
  createTransformElement(t) {
    return {
      transform: {
        opacity: 1,
        _opMdf: !1,
        key: this.transformsManager.getNewKey(),
        op: pt.getProp(this, t.o, 0, 0.01, this),
        mProps: Ft(this, t, this),
      },
    };
  }
  createShapeElement(t) {
    const s = new Mt(this, t, this.stylesList, this.transformsManager);
    return this.shapes.push(s), this.addShapeToModifiers(s), s;
  }
  reloadShapes() {
    let t;
    this._isFirstFrame = !0;
    let s = this.itemsData.length;
    for (t = 0; t < s; t += 1) this.prevViewData[t] = this.itemsData[t];
    for (
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []),
        s = this.dynamicProperties.length,
        t = 0;
      t < s;
      t += 1
    )
      this.dynamicProperties[t].getValue();
    this.updateModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
  }
  addTransformToStyleList(t) {
    const s = this.stylesList.length;
    for (let e = 0; e < s; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
  }
  removeTransformFromStyleList() {
    const t = this.stylesList.length;
    for (let s = 0; s < t; s += 1) this.stylesList[s].closed || this.stylesList[s].transforms.pop();
  }
  closeStyles(t) {
    const s = t.length;
    for (let e = 0; e < s; e += 1) t[e].closed = !0;
  }
  searchShapes(t, s, e, i, h) {
    let r,
      a,
      n,
      o,
      l,
      p,
      c = t.length - 1,
      d = [],
      u = [],
      f = [].concat(h);
    for (r = c; r >= 0; r -= 1) {
      if (
        ((o = this.searchProcessedElement(t[r])),
        o ? (s[r] = e[o - 1]) : (t[r]._shouldRender = i),
        'fl' == t[r].ty || 'st' == t[r].ty || 'gf' == t[r].ty || 'gs' == t[r].ty)
      )
        o ? (s[r].style.closed = !1) : (s[r] = this.createStyleElement(t[r], f)), d.push(s[r].style);
      else if ('gr' == t[r].ty) {
        if (o) for (n = s[r].it.length, a = 0; a < n; a += 1) s[r].prevViewData[a] = s[r].it[a];
        else s[r] = this.createGroupElement(t[r]);
        this.searchShapes(t[r].it, s[r].it, s[r].prevViewData, i, f);
      } else
        'tr' == t[r].ty
          ? (o || ((p = this.createTransformElement(t[r])), (s[r] = p)),
            f.push(s[r]),
            this.addTransformToStyleList(s[r]))
          : 'sh' == t[r].ty || 'rc' == t[r].ty || 'el' == t[r].ty || 'sr' == t[r].ty
          ? o || (s[r] = this.createShapeElement(t[r]))
          : 'tm' == t[r].ty || 'rd' == t[r].ty
          ? (o
              ? ((l = s[r]), (l.closed = !1))
              : ((l = It.getModifier(t[r].ty)), l.init(this, t[r]), (s[r] = l), this.shapeModifiers.push(l)),
            u.push(l))
          : 'rp' == t[r].ty &&
            (o
              ? ((l = s[r]), (l.closed = !0))
              : ((l = It.getModifier(t[r].ty)),
                (s[r] = l),
                l.init(this, t, r, s),
                this.shapeModifiers.push(l),
                (i = !1)),
            u.push(l));
      this.addProcessedElement(t[r], r + 1);
    }
    for (this.removeTransformFromStyleList(), this.closeStyles(d), c = u.length, r = 0; r < c; r += 1) u[r].closed = !0;
  }
  updateShapeTransform(t, s) {
    (t._opMdf || s.op._mdf || this._isFirstFrame) && ((s.opacity = t.opacity), (s.opacity *= s.op.v), (s._opMdf = !0));
  }
  updateStyledShape(t, s) {
    if (this._isFirstFrame || s._mdf || t.transforms._mdf) {
      let e,
        i,
        h,
        r = t.trNodes,
        a = s.paths,
        n = a._length;
      r.length = 0;
      let o = t.transforms.finalTransform;
      for (h = 0; h < n; h += 1) {
        let t = a.shapes[h];
        if (t && t.v) {
          for (i = t._length, e = 1; e < i; e += 1)
            1 === e && r.push({ t: 'm', p: o.applyToPointArray(t.v[0][0], t.v[0][1], 0) }),
              r.push({ t: 'c', pts: o.applyToTriplePoints(t.o[e - 1], t.i[e], t.v[e]) });
          1 === i && r.push({ t: 'm', p: o.applyToPointArray(t.v[0][0], t.v[0][1], 0) }),
            t.c &&
              i &&
              (r.push({ t: 'c', pts: o.applyToTriplePoints(t.o[e - 1], t.i[0], t.v[0]) }), r.push({ t: 'z' }));
        }
      }
      t.trNodes = r;
    }
  }
  updatePath(t, s) {
    if (!0 !== t.hd && t._shouldRender) {
      let t,
        e = s.styledShapes.length;
      for (t = 0; t < e; t += 1) this.updateStyledShape(s.styledShapes[t], s.sh);
    }
  }
  updateFill(t, s, e) {
    const i = s.style;
    (s.c._mdf || this._isFirstFrame) && (i.co = s.c.v),
      (s.o._mdf || e._opMdf || this._isFirstFrame) && (i.coOp = s.o.v * e.opacity);
  }
  updateStroke(t, s, e) {
    let i = s.style,
      h = s.d;
    h && (h._mdf || this._isFirstFrame) && ((i.da = h.dashArray), (i.do = h.dashoffset[0])),
      (s.c._mdf || this._isFirstFrame) && (i.co = s.c.v),
      (s.o._mdf || e._opMdf || this._isFirstFrame) && (i.coOp = s.o.v * e.opacity),
      (s.w._mdf || this._isFirstFrame) && (i.wi = s.w.v);
  }
  updateGradientFill(t, s, e) {
    let i = s.style;
    (i.grd = s.g.c), (i.coOp = s.o.v * e.opacity);
  }
  updateShape(t, s, e) {
    let i = t;
    for (let h = s.length - 1; h >= 0; h -= 1)
      'tr' == s[h].ty
        ? ((i = e[h].transform), this.updateShapeTransform(t, i))
        : 'sh' == s[h].ty || 'el' == s[h].ty || 'rc' == s[h].ty || 'sr' == s[h].ty
        ? this.updatePath(s[h], e[h])
        : 'fl' == s[h].ty
        ? this.updateFill(s[h], e[h], i)
        : 'st' == s[h].ty
        ? this.updateStroke(s[h], e[h], i)
        : 'gf' == s[h].ty || 'gs' == s[h].ty
        ? this.updateGradientFill(s[h], e[h], i)
        : 'gr' == s[h].ty && this.updateShape(i, s[h].it, e[h].it);
  }
  updateGrahpics() {
    const t = this.stylesList.length;
    for (let s = 0; s < t; s += 1) {
      this.stylesList[s].updateGrahpics();
    }
  }
  getValue(t) {
    t !== this.frameId &&
      (this.iterateDynamicProperties(t),
      (this.transformHelper.opacity = 1),
      (this.transformHelper._opMdf = !1),
      this.updateModifiers(t),
      this.transformsManager.processSequences(this._isFirstFrame),
      this.updateShape(this.transformHelper, this.shapesData, this.itemsData),
      this.updateGrahpics(),
      (this.frameId = t));
  }
}
class qt extends Lt {
  constructor(t, s, e) {
    super(t, s), (this.frameId = -1), (this.hs = s), (this.session = e);
  }
  getValue(t) {
    t !== this.frameId && (this.iterateDynamicProperties(t), (this.frameId = t));
  }
  get x() {
    return this.p ? this.p.v[0] : this.px.v;
  }
  get y() {
    return this.p ? this.p.v[1] : this.py.v;
  }
  get anchorX() {
    return this.a.v[0];
  }
  get anchorY() {
    return this.a.v[1];
  }
  get scaleX() {
    return this.s.v[0];
  }
  get scaleY() {
    return this.s.v[1];
  }
  get rotation() {
    return (this.r && this.r.v) || 0;
  }
  get alpha() {
    return this.o.v;
  }
}
class Ot {
  constructor(t) {
    (this.elem = t),
      (this._isFirstFrame = !1),
      (this.dynamicProperties = []),
      (this._mdf = !1),
      (this.transform = null),
      (this.masks = null),
      (this.shapes = null),
      (this._hasOutTypeExpression = !1),
      (this.needUpdateOverlap = !1),
      (this.isOverlapMode = !1),
      (this.visible = !0),
      (this._isFirstFrame = !0);
  }
  initFrame(t, s) {
    this.layer = t;
    const { local: e, global: i } = s;
    (this.session = s),
      (this.isOverlapLayer = this.layer.op >= e.op - e.st),
      (this.isOverlapMode = i.overlapMode),
      this.parseLayer(t, s);
  }
  outTypeExpressionMode() {
    (this._hasOutTypeExpression = !0), this.isOverlapLayer && (this.needUpdateOverlap = !0);
  }
  prepareProperties(t, s) {
    let e,
      i = this.dynamicProperties.length;
    for (e = 0; e < i; e += 1)
      (s || this.needUpdateOverlap || (this.elem._isParent && 'transform' === this.dynamicProperties[e].propType)) &&
        (this.dynamicProperties[e].getValue(t), this.dynamicProperties[e]._mdf && (this._mdf = !0));
  }
  addDynamicProperty(t) {
    -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t);
  }
  parseLayer({ ks: t, hasMask: s, masksProperties: e, shapes: i, tm: h }, r) {
    if (
      (t && (this.transform = new qt(this, t, r)),
      s && (this.masks = new _t(this, e, r)),
      i && (this.shapes = new Nt(this, i, r)),
      h)
    ) {
      const { frameRate: t } = r.global;
      this.tm = pt.getProp(this, h, 0, t, this);
    }
  }
  updateFrame(t) {
    this._mdf = !1;
    const e = s.inRange(t, this.layer.ip, this.layer.op);
    this.isOverlapMode && this.isOverlapLayer ? (this.visible = t >= this.layer.ip) : (this.visible = e),
      this.prepareProperties(t, e);
  }
  updateDisplay() {
    const t = this.elem.display;
    this.elem._isRoot ||
      (this.visible ? t.show() : t.hide(),
      (this._mdf || this.transform._mdf || this._isFirstFrame) && t.updateLottieTransform(this.transform),
      this.masks && (this.masks._mdf || this._isFirstFrame) && t.updateLottieMasks(this.masks)),
      (this._isFirstFrame = !1);
  }
}
class Xt {
  constructor(t) {
    (this.data = t),
      void 0 === this.data.sr && (this.data.sr = 1),
      (this.offsetTime = t.st || 0),
      (this.fullname = t.nm || ''),
      (this.idname = t.ln || ''),
      (this.classnames = t.cl ? t.cl.split(' ') : []),
      (this.bodymovin = new Ot(this)),
      (this.displayType = ''),
      (this.display = null),
      (this.hierarchy = null),
      (this.lottieTreeParent = null);
  }
  initBodymovin(t, s) {
    this.bodymovin.initFrame(t, s), this.display && this.display.onSetupLottie && this.display.onSetupLottie();
  }
  hasValidMasks() {
    return !(!this.bodymovin.masks || !this.bodymovin.masks.hasMasks);
  }
  setHierarchy(t) {
    (this.hierarchy = t), this.display.setHierarchy(t.display);
  }
  initDisplayInstance(t, s) {
    return new (Tt(t))(this, s);
  }
  updateFrame(t) {
    this.bodymovin.updateFrame(t), this.bodymovin.updateDisplay();
  }
}
class Yt extends Xt {
  constructor(t, s) {
    super(t);
    const { global: e } = s;
    this.session = s;
    const i = { layer: t, session: s };
    if (e.maskComp) {
      i.maskComp = e.maskComp;
      const { w: s, h: h } = t;
      i.viewport = { w: s, h: h };
    }
    (this.config = i),
      (this.childNodes = []),
      (this.displayType = wt.Type.Component),
      (this.innerDisplay = null),
      (this.display = this.initDisplayInstance(this.displayType, i)),
      this.initBodymovin(t, s);
  }
  updateFrame(t) {
    if ((this.bodymovin.updateFrame(t), this.bodymovin.updateDisplay(), (t -= this.offsetTime), this.bodymovin.tm)) {
      let s = this.bodymovin.tm.v;
      s === this.data.op && (s = this.data.op - 1), (t = s);
    } else t /= this.data.sr;
    for (let s = 0; s < this.childNodes.length; s++) this.childNodes[s].updateFrame(t);
  }
  addChild(t) {
    (t.lottieTreeParent = this),
      this.childNodes.push(t),
      this.innerDisplay ? this.innerDisplay.addChild(t.display) : this.display.addChild(t.display);
  }
}
class jt extends Xt {
  constructor(t, s) {
    super(t);
    const e = { layer: t, session: s, rect: { x: 0, y: 0, width: t.sw, height: t.sh }, color: t.sc };
    (this.config = e),
      (this.session = s),
      (this.displayType = wt.Type.Solid),
      (this.display = this.initDisplayInstance(this.displayType, e)),
      this.initBodymovin(t, s);
  }
}
class zt extends Xt {
  constructor(t, e) {
    super(t);
    const {
        global: { textureLoader: i, assets: h },
      } = e,
      r = s.getAssets(t.refId, h),
      a = { layer: t, session: e, texture: i.getTextureById(r.id), asset: r };
    (this.config = a),
      (this.session = e),
      (this.displayType = wt.Type.Sprite),
      (this.display = this.initDisplayInstance(this.displayType, a)),
      this.initBodymovin(t, e);
  }
}
class Bt extends Xt {
  constructor(t, s) {
    super(t);
    const e = { layer: t, session: s };
    (this.config = e),
      (this.session = s),
      (this.displayType = wt.Type.Shape),
      (this.display = this.initDisplayInstance(this.displayType, e)),
      this.initBodymovin(t, s);
  }
}
class Rt extends Xt {
  constructor(t, s) {
    super(t);
    const e = { layer: t, session: s };
    (this.config = e),
      (this.session = s),
      (this.displayType = wt.Type.Null),
      (this.display = this.initDisplayInstance(this.displayType, e)),
      this.initBodymovin(t, s);
  }
}
class Kt extends e {
  constructor(t) {
    super(),
      (this.living = !0),
      (this.infinite = t.infinite || !1),
      (this.repeats = t.repeats || 0),
      (this.alternate = t.alternate || !1),
      (this.wait = t.wait || 0),
      (this.delay = t.delay || 0),
      (this.overlapMode = t.overlapMode || !1),
      (this.timeScale = s.isNumber(t.timeScale) ? t.timeScale : 1),
      (this.frameNum = 0),
      (this.isPaused = !0),
      (this.direction = 1),
      (this._lastFrame = -1 / 0),
      (this._repeatsCut = this.repeats),
      (this._delayCut = this.delay),
      (this._waitCut = this.wait),
      (this.segments = t.segments || {}),
      (this._segmentName = t.initSegment || ''),
      (this._prefix = t.prefix || ''),
      (this._autoLoad = !s.isBoolean(t.autoLoad) || t.autoLoad),
      (this._autoStart = !s.isBoolean(t.autoStart) || t.autoStart),
      (this._justDisplayOnImagesLoaded = !s.isBoolean(t.justDisplayOnImagesLoaded) || t.justDisplayOnImagesLoaded),
      (this._maskComp = t.maskComp || !1),
      (this.textureLoader = null),
      (this.jsonLoader = null),
      (this.root = null),
      (this.parent = null);
    const e = Tt(wt.Type.Container);
    if (
      ((this.group = new e()),
      (this.display = null),
      (this.isDisplayLoaded = !1),
      (this.isImagesLoaded = !1),
      (this._copyJSON = t.copyJSON || !1),
      t.keyframes)
    )
      !this._prefix && t.keyframes.prefix && (this._prefix = t.keyframes.prefix), this._setupDate(t.keyframes);
    else if (t.path) {
      let s = '';
      (s =
        -1 !== t.path.lastIndexOf('\\')
          ? t.path.substr(0, t.path.lastIndexOf('\\') + 1)
          : t.path.substr(0, t.path.lastIndexOf('/') + 1)),
        !this._prefix && s && (this._prefix = s),
        (this.jsonLoader = (function (t) {
          const s = i[h.Ajax];
          return s || console.warn('must register an ajax loader, before you parse an animation from path'), s(t);
        })(t.path)),
        this.jsonLoader.once('success', t => {
          this._setupDate(t);
        }),
        this.jsonLoader.once('error', t => {
          this.emit('error', t);
        });
    }
  }
  _setupDate(t) {
    (this._sourceData = t), this._copyJSON && (t = s.copyJSON(t)), g.completeData(t), (this.keyframes = t);
    const { w: e, h: r, st: a = 0, fr: n, ip: o, op: l, assets: p } = t;
    (this.frameRate = n), (this.frameMult = n / 1e3), (this._defaultSegment = [o, l]);
    const c = (this._segmentName && this.segments[this._segmentName]) || this._defaultSegment;
    (this.beginFrame = c[0]),
      (this.endFrame = c[1]),
      (this._timePerFrame = 1e3 / n),
      (this.duration = Math.floor(this.endFrame - this.beginFrame));
    let d = null;
    const u = p.filter(t => t.u || t.p);
    u.length > 0
      ? ((this.textureLoader = d =
          (function (t, s) {
            const e = i[h.Texture];
            return (
              e || console.warn('must register an image loader, before you parse an animation some has image assets'),
              e(t, s)
            );
          })(u, { prefix: this._prefix, autoLoad: this._autoLoad })),
        d.loaded
          ? ((this.isImagesLoaded = !0), (this.isPaused = !this._autoStart), this.emit('ImageReady'))
          : (d.once('complete', () => {
              (this.isImagesLoaded = !0), this.emit('ImageReady');
            }),
            null !== this._pausedNeedSet &&
              ((this._pausedNeedSet = !0),
              d.once('complete', () => {
                this._pausedNeedSet && ((this._pausedNeedSet = !1), (this.isPaused = !this._autoStart));
              }))))
      : ((this.isImagesLoaded = !0), (this.isPaused = !this._autoStart));
    const f = {
      global: { assets: p, textureLoader: d, frameRate: n, maskComp: this._maskComp, overlapMode: this.overlapMode },
      local: { w: e, h: r, ip: o, op: l, st: a },
    };
    this._buildElements(f),
      null !== this.textureLoader &&
        this._justDisplayOnImagesLoaded &&
        !this.textureLoader.loaded &&
        null !== this._justDisplayNeedSet &&
        ((this.group.visible = !1),
        (this._justDisplayNeedSet = !0),
        this.textureLoader.once('complete', () => {
          this._justDisplayNeedSet && ((this._justDisplayNeedSet = !1), (this.group.visible = !0));
        })),
      (this.isDisplayLoaded = !0),
      this.update(0, !0);
  }
  _buildElements(t) {
    (this.root = this._extraCompositions(this.keyframes, t, !0)),
      (this.display = this.root.display),
      this.group.addChild(this.display),
      this.emit('DOMLoaded').emit('DisplayReady'),
      null === this.textureLoader
        ? this.emit('success')
        : this.textureLoader.loaded
        ? this.emit('success')
        : this.textureLoader.once('complete', () => this.emit('success'));
  }
  _extraCompositions(t, { global: e, local: i }, h = !1) {
    const { w: r, h: a, ip: n, op: o, st: l = 0 } = t,
      p = new Yt(t, { global: e, local: i });
    p._isRoot = h;
    const c = t.layers || s.getAssets(t.refId, e.assets).layers,
      d = { global: e, local: { w: r, h: a, ip: n, op: o, st: l } },
      u = this._createElements(c, d);
    for (let t = c.length - 1; t >= 0; t--) {
      const e = c[t],
        i = u[e.ind];
      if (i) {
        if (!s.isUndefined(e.parent)) {
          const t = u[e.parent];
          (t._isParent = !0), i.setHierarchy(t);
        }
        p.addChild(i);
      }
    }
    return p;
  }
  _createElements(t, s) {
    const e = {};
    for (let i = t.length - 1; i >= 0; i--) {
      const h = t[i];
      let r = null;
      if (void 0 === h.td) {
        switch (h.ty) {
          case 0:
            r = this._extraCompositions(h, s);
            break;
          case 1:
            r = new jt(h, s);
            break;
          case 2:
            r = new zt(h, s);
            break;
          case 3:
            r = new Rt(h, s);
            break;
          case 4:
            r = new Bt(h, s);
            break;
          default:
            continue;
        }
        r && (void 0 === h.ind && (h.ind = i), (e[h.ind] = r), (r.name = h.nm || null));
      }
    }
    return e;
  }
  getDisplayByQuerySelector(t) {
    const s = this.querySelector(t);
    return s && s.display ? s.display : (console.warn('can not find display which query with ', t), null);
  }
  _queryMatch(t, s, e) {
    const i = t.substr(0, 1),
      h = t.substr(1, t.length);
    let r = !1;
    return (
      (r = '#' === i ? s.idname === h : '.' === i ? -1 !== s.classnames.indexOf(h) : s.fullname === t),
      r && e.push(s),
      r
    );
  }
  _searchNodes(t, s, e, i = !1) {
    if (s.childNodes && s.childNodes.length > 0) {
      const h = [];
      for (let r = 0; r < s.childNodes.length; r++) {
        const a = s.childNodes[r];
        if (this._queryMatch(t, a, e) && i) return !0;
        a.childNodes && a.childNodes.length > 0 && h.push(a);
      }
      for (let s = 0; s < h.length; s++) if (this._searchNodes(t, h[s], e, i)) return !0;
    }
    return !1;
  }
  querySelector(t) {
    const s = [];
    return this._queryMatch(t, this.root, s) ? s[0] : (this._searchNodes(t, this.root, s, !0), s[0] || null);
  }
  querySelectorAll(t) {
    const s = [],
      e = '#' === t.substr(0, 1);
    return this._queryMatch(t, this.root, s) && e ? s : (this._searchNodes(t, this.root, s, e), s);
  }
  bindSlot(t, s) {
    return this.getDisplayByQuerySelector(t).addChild(s), this;
  }
  unbindSlot(t, s) {
    return this.getDisplayByQuerySelector(t).removeChild(s), this;
  }
  _emitFrame(t) {
    this.emit(`@${t}`);
  }
  update(t, s = !1) {
    if (!this.living || !this.isDisplayLoaded || (this.isPaused && !s)) return;
    const e = this._updateTime(t),
      i = this.beginFrame + this.frameNum;
    this.root.updateFrame(i);
    const h = i >> 0;
    this._lastFrame !== h && (this._emitFrame(this.direction > 0 ? h : this._lastFrame), (this._lastFrame = h)),
      !1 === e
        ? (this.emit('enterFrame', i), this.emit('update', this.frameNum / this.duration))
        : this.hadEnded !== e && !0 === e && this.emit('complete'),
      (this.hadEnded = e);
  }
  _updateTime(t) {
    const e = this.direction * this.timeScale * t;
    if (this._waitCut > 0) return (this._waitCut -= Math.abs(e)), null;
    if (this.isPaused || this._delayCut > 0) return this._delayCut > 0 && (this._delayCut -= Math.abs(e)), null;
    this.frameNum += e / this._timePerFrame;
    let i = !1;
    return (
      this._spill() &&
        (this._repeatsCut > 0 || this.infinite
          ? (this._repeatsCut > 0 && --this._repeatsCut,
            (this._delayCut = this.delay),
            this.alternate
              ? ((this.direction *= -1), (this.frameNum = s.codomainBounce(this.frameNum, 0, this.duration)))
              : ((this.direction = 1), (this.frameNum = s.euclideanModulo(this.frameNum, this.duration))),
            this.emit('loopComplete'))
          : (this.overlapMode || ((this.frameNum = s.clamp(this.frameNum, 0, this.duration)), (this.living = !1)),
            (i = !0))),
      i
    );
  }
  _spill() {
    const t = this.frameNum <= 0 && -1 === this.direction,
      s = this.frameNum >= this.duration && 1 === this.direction;
    return t || s;
  }
  frameToTime(t) {
    return t * this._timePerFrame;
  }
  setSpeed(t) {
    this.timeScale = t;
  }
  playSegment(t, e = {}) {
    if (!t) return;
    let i = null;
    s.isArray(t) ? (i = t) : s.isString(t) && ((i = this.segments[t]), s.isArray(i) && (this._segmentName = t)),
      s.isArray(i) &&
        ((this.beginFrame = s.isNumber(i[0]) ? i[0] : this._defaultSegment[0]),
        (this.endFrame = s.isNumber(i[1]) ? i[1] : this._defaultSegment[1]),
        s.isNumber(e.repeats) && (this.repeats = e.repeats),
        s.isBoolean(e.infinite) && (this.infinite = e.infinite),
        s.isBoolean(e.alternate) && (this.alternate = e.alternate),
        s.isNumber(e.wait) && (this.wait = e.wait),
        s.isNumber(e.delay) && (this.delay = e.delay),
        this.replay());
  }
  goToAndStop(t, s = !1) {
    (this.frameNum = s ? t : t * this.frameMult), this.update(0, !0), this.pause();
  }
  goToAndPlay(t, s = !1) {
    (this.frameNum = s ? t : t * this.frameMult), this.update(0, !0), this.resume();
  }
  getDuration(t) {
    const s = this.endFrame - this.beginFrame;
    return t ? s : s / this.frameRate;
  }
  setDirection(t) {
    return (this.direction = t < 0 ? -1 : 1), this;
  }
  pause() {
    return this._pausedNeedSet ? (this._pausedNeedSet = !1) : (this._pausedNeedSet = null), (this.isPaused = !0), this;
  }
  resume() {
    return this._pausedNeedSet ? (this._pausedNeedSet = !1) : (this._pausedNeedSet = null), (this.isPaused = !1), this;
  }
  play() {
    return this.resume();
  }
  replay() {
    return (
      this._pausedNeedSet ? (this._pausedNeedSet = !1) : (this._pausedNeedSet = null),
      (this.isPaused = !1),
      (this._repeatsCut = this.repeats),
      (this._delayCut = this.delay),
      (this.living = !0),
      (this.frameNum = 0),
      (this.duration = Math.floor(this.endFrame - this.beginFrame)),
      (this.direction = 1),
      this
    );
  }
  show() {
    this._justDisplayNeedSet ? (this._justDisplayNeedSet = !1) : (this._justDisplayNeedSet = null),
      (this.group.visible = !0);
  }
  hide() {
    this._justDisplayNeedSet ? (this._justDisplayNeedSet = !1) : (this._justDisplayNeedSet = null),
      (this.group.visible = !1);
  }
  destroy() {
    this.parent && this.parent.remove(this),
      this.group.parent && this.group.parent.removeChild(this.group),
      this.pause(),
      (this.root = null),
      (this.group = null),
      (this.display = null),
      this.textureLoader && (this.textureLoader.off('complete'), (this.textureLoader = null)),
      this.jsonLoader && (this.jsonLoader.off('success'), (this.jsonLoader = null)),
      (this.keyframes = null),
      (this.living = !1);
  }
}
class Gt extends e {
  constructor(t) {
    super(),
      (this._lastTime = 0),
      (this._snippet = 0),
      (this.timeScale = 1),
      (this.isPaused = !1),
      (this.ticker = t.ticker ? t.ticker : t),
      (this.groups = []),
      (this.update = this.update.bind(this)),
      this.ticker && this.start();
  }
  add(t) {
    const s = arguments.length;
    if (s > 1) for (let t = 0; t < s; t++) this.add(arguments[t]);
    else null !== t.parent && t.parent.remove(t), (t.parent = this), this.groups.push(t);
    return t;
  }
  remove(t) {
    if (arguments.length > 1) for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
    const s = this.groups.indexOf(t);
    -1 !== s && ((t.parent = null), this.groups.splice(s, 1));
  }
  parseAnimation(t) {
    const s = new Kt(t);
    return this.add(s);
  }
  setSpeed(t) {
    this.timeScale = t;
  }
  start() {
    return (this._lastTime = Date.now()), this.ticker.add(this.update), this;
  }
  stop() {
    return this.ticker.remove(this.update), this;
  }
  pause() {
    return (this.isPaused = !0), this;
  }
  resume() {
    return (this.isPaused = !1), this;
  }
  update() {
    if ((this.timeline(), this.isPaused)) return;
    const t = this.timeScale * this._snippet,
      s = this.groups.length;
    for (let e = 0; e < s; e++) {
      this.groups[e].update(t);
    }
    this.emit('update', this._snippet);
  }
  timeline() {
    let t = Date.now() - this._lastTime;
    (!this._lastTime || t > 200) && ((this._lastTime = Date.now()), (t = Date.now() - this._lastTime)),
      (this._lastTime += t),
      (this._snippet = t);
  }
  destroy() {
    for (let t = this.groups.length - 1; t >= 0; t--) this.groups[t].destroy();
  }
}
export {
  Kt as AnimationGroup,
  Gt as AnimationManager,
  M as BezierEasing,
  wt as DisplayRegister,
  e as Eventer,
  r as LoaderRegister,
  pt as PropertyFactory,
  s as Tools,
  qt as TransformFrames,
  Lt as TransformProperty,
};
