﻿"use strict"
var a = !0,
  c = null,
  f = !1
function m() {
  return function () {}
}
function q(d) {
  return function () {
    return this[d]
  }
}
function s(d) {
  return function () {
    return d
  }
}
var aa,
  ba,
  ca,
  da,
  v,
  ea,
  fa,
  ga,
  ha,
  ja,
  ka,
  la,
  ma,
  na,
  oa,
  pa,
  qa,
  ra,
  sa,
  ta,
  va,
  wa,
  xa,
  ya,
  Ba,
  Ca,
  Da,
  Ha,
  Ia,
  Ja,
  Ka,
  La,
  Ma,
  Na,
  Oa,
  Qa,
  Ra,
  Sa,
  Ta,
  Ua,
  Va,
  Wa,
  Xa,
  Ya,
  Za,
  $a,
  ab,
  db,
  eb,
  fb,
  gb,
  hb,
  ib,
  jb,
  kb,
  lb,
  mb,
  nb,
  ob,
  pb,
  qb
"function" !== typeof Object.getPrototypeOf &&
  (Object.getPrototypeOf =
    "object" === typeof "test".__proto__
      ? function (d) {
          return d.__proto__
        }
      : function (d) {
          return d.constructor.prototype
        })
;(function () {
  function d(e, k, g, h) {
    this.set(e, k, g, h)
  }
  function n() {
    this.$a = this.Za = this.bb = this.ab = this.eb = this.cb = this.ra = this.qa = 0
  }
  function l() {
    this.Tc = {}
    this.qf = 0
    this.Kf = []
    this.ef = a
  }
  function b() {
    this.Nb = this.gh = this.y = this.Bh = 0
  }
  function y(e) {
    this.Wi = []
    this.eh(e)
  }
  ba = function (e) {
    console && console.log && console.log(e)
  }
  aa = function (e) {
    return e
  }
  ca = function (e) {
    return "undefined" === typeof e
  }
  da = function (e) {
    return "number" === typeof e
  }
  v = function (e) {
    return "string" === typeof e
  }
  ea = function (e) {
    return 0 < e && 0 === ((e - 1) & e)
  }
  fa = function (e) {
    return 0 > e ? -e : e
  }
  ga = function (e, k) {
    return e > k ? e : k
  }
  ha = function (e, k) {
    return e < k ? e : k
  }
  ja = Math.PI
  ka = function (e) {
    return e | 0
  }
  la = function (e, k, g, h, r, u, b, p) {
    if (ga(e, g) < ha(r, b) || ha(e, g) > ga(r, b) || ga(k, h) < ha(u, p) || ha(k, h) > ga(u, p)) return f
    var t = r - e + b - g,
      d = u - k + p - h
    e = g - e
    k = h - k
    r = b - r
    u = p - u
    p = fa(k * r - u * e)
    return fa(r * d - u * t) <= p && fa(e * d - k * t) <= p
  }
  d.prototype.set = function (e, k, g, h) {
    this.left = e
    this.top = k
    this.right = g
    this.bottom = h
  }
  d.prototype.width = function () {
    return this.right - this.left
  }
  d.prototype.height = function () {
    return this.bottom - this.top
  }
  d.prototype.offset = function (e, k) {
    this.left += e
    this.top += k
    this.right += e
    this.bottom += k
    return this
  }
  d.prototype.hd = function (e, k) {
    return e >= this.left && e <= this.right && k >= this.top && k <= this.bottom
  }
  ma = d
  n.prototype.hj = function (e) {
    this.qa = e.left
    this.ra = e.top
    this.cb = e.right
    this.eb = e.top
    this.ab = e.right
    this.bb = e.bottom
    this.Za = e.left
    this.$a = e.bottom
  }
  n.prototype.Bl = function (e, k) {
    if (0 === k) this.hj(e)
    else {
      var g = Math.sin(k),
        h = Math.cos(k),
        r = e.left * g,
        b = e.top * g,
        t = e.right * g,
        g = e.bottom * g,
        p = e.left * h,
        C = e.top * h,
        d = e.right * h,
        h = e.bottom * h
      this.qa = p - b
      this.ra = C + r
      this.cb = d - b
      this.eb = C + t
      this.ab = d - g
      this.bb = h + t
      this.Za = p - g
      this.$a = h + r
    }
  }
  n.prototype.offset = function (e, k) {
    this.qa += e
    this.ra += k
    this.cb += e
    this.eb += k
    this.ab += e
    this.bb += k
    this.Za += e
    this.$a += k
    return this
  }
  n.prototype.Zj = function (e) {
    e.left = ha(ha(this.qa, this.cb), ha(this.ab, this.Za))
    e.top = ha(ha(this.ra, this.eb), ha(this.bb, this.$a))
    e.right = ga(ga(this.qa, this.cb), ga(this.ab, this.Za))
    e.bottom = ga(ga(this.ra, this.eb), ga(this.bb, this.$a))
  }
  n.prototype.hd = function (e, k) {
    var g = this.cb - this.qa,
      h = this.eb - this.ra,
      r = this.ab - this.qa,
      b = this.bb - this.ra,
      t = e - this.qa,
      p = k - this.ra,
      C = g * g + h * h,
      d = g * r + h * b,
      h = g * t + h * p,
      x = r * r + b * b,
      B = r * t + b * p,
      w = 1 / (C * x - d * d),
      g = (x * h - d * B) * w,
      C = (C * B - d * h) * w
    if (0 <= g && 0 < C && 1 > g + C) return a
    g = this.Za - this.qa
    h = this.$a - this.ra
    C = g * g + h * h
    d = g * r + h * b
    h = g * t + h * p
    w = 1 / (C * x - d * d)
    g = (x * h - d * B) * w
    C = (C * B - d * h) * w
    return 0 <= g && 0 < C && 1 > g + C
  }
  n.prototype.oe = function (e, k) {
    switch (e) {
      case 0:
        return k ? this.qa : this.ra
      case 1:
        return k ? this.cb : this.eb
      case 2:
        return k ? this.ab : this.bb
      case 3:
        return k ? this.Za : this.$a
      case 4:
        return k ? this.qa : this.ra
      default:
        return k ? this.qa : this.ra
    }
  }
  na = n
  oa = function (e, k, g) {
    return Math.max(Math.min(e, 255), 0) | (Math.max(Math.min(k, 255), 0) << 8) | (Math.max(Math.min(g, 255), 0) << 16)
  }
  pa = function (e) {
    return e & 255
  }
  qa = function (e) {
    return (e & 65280) >> 8
  }
  ra = function (e) {
    return (e & 16711680) >> 16
  }
  sa = function (e, k) {
    for (var g in k) k.hasOwnProperty(g) && (e[g] = k[g])
    return e
  }
  ta = function (e, k) {
    var g, h
    k = ka(k)
    if (!(0 > k || k >= e.length))
      if (0 === k) e.shift()
      else if (k === e.length - 1) e.pop()
      else {
        g = k
        for (h = e.length - 1; g < h; g++) e[g] = e[g + 1]
        e.length = h
      }
  }
  va = function (e, k) {
    e.length = k.length
    var g, h
    g = 0
    for (h = k.length; g < h; g++) e[g] = k[g]
  }
  wa = function (e, k) {
    var g = e.indexOf(k)
    ;-1 !== g && ta(e, g)
  }
  xa = function (e, k, g) {
    return e < k ? k : e > g ? g : e
  }
  ya = function (e) {
    return e / (180 / ja)
  }
  Ba = function (e) {
    return e * (180 / ja)
  }
  Ca = function (e) {
    e %= 360
    0 > e && (e += 360)
    return e
  }
  Da = function (e) {
    e %= 2 * ja
    0 > e && (e += 2 * ja)
    return e
  }
  Ha = function (e) {
    return Ca(Ba(e))
  }
  Ia = function (e) {
    return Da(ya(e))
  }
  Ja = function (e, k, g, h) {
    return Math.atan2(h - k, g - e)
  }
  Ka = function (e, k) {
    if (e === k) return 0
    var g = Math.sin(e),
      h = Math.cos(e),
      r = Math.sin(k),
      b = Math.cos(k),
      g = g * r + h * b
    return 1 <= g ? 0 : -1 >= g ? ja : Math.acos(g)
  }
  La = function (e, k, g) {
    var h = Math.sin(e),
      r = Math.cos(e),
      b = Math.sin(k),
      t = Math.cos(k)
    return Math.acos(h * b + r * t) > g ? (0 < r * b - h * t ? Da(e + g) : Da(e - g)) : Da(k)
  }
  Ma = function (e, k) {
    var g = Math.sin(e),
      h = Math.cos(e),
      r = Math.sin(k),
      b = Math.cos(k)
    return 0 >= h * r - g * b
  }
  Na = function (e, k, g, h) {
    e = g - e
    k = h - k
    return Math.sqrt(e * e + k * k)
  }
  Oa = function (e, k) {
    return !e !== !k
  }
  Qa = function (e) {
    for (var k in e) e.hasOwnProperty(k) && delete e[k]
  }
  Ra = function () {
    if ("undefined" !== typeof window.performance) {
      var e = window.performance
      if ("undefined" !== typeof e.now) return e.now()
      if ("undefined" !== typeof e.webkitNow) return e.webkitNow()
      if ("undefined" !== typeof e.msNow) return e.msNow()
    }
    return Date.now()
  }
  l.prototype.contains = function (e) {
    return this.Tc.hasOwnProperty(e.toString())
  }
  l.prototype.add = function (e) {
    var k = e.toString()
    this.Tc.hasOwnProperty(k) || ((this.Tc[k] = e), this.qf++, (this.ef = f))
    return this
  }
  l.prototype.remove = function (e) {
    e = e.toString()
    this.Tc.hasOwnProperty(e) && (delete this.Tc[e], this.qf--, (this.ef = f))
    return this
  }
  l.prototype.clear = function () {
    Qa(this.Tc)
    this.qf = 0
    this.Kf.length = 0
    this.ef = a
    return this
  }
  l.prototype.nf = function () {
    return 0 === this.qf
  }
  l.prototype.So = function () {
    if (!this.ef) {
      this.Kf.length = this.qf
      var e,
        k = 0
      for (e in this.Tc) this.Tc.hasOwnProperty(e) && (this.Kf[k++] = this.Tc[e])
      this.ef = a
    }
  }
  l.prototype.Jf = function () {
    this.So()
    return this.Kf
  }
  Sa = l
  b.prototype.add = function (e) {
    this.y = e - this.Bh
    this.gh = this.Nb + this.y
    this.Bh = this.gh - this.Nb - this.y
    this.Nb = this.gh
  }
  b.prototype.reset = function () {
    this.Nb = this.gh = this.y = this.Bh = 0
  }
  Ta = b
  Ua = function (e) {
    return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
  }
  y.prototype.eh = function (e) {
    this.tl = e
    this.ul = e.length / 2
    this.Wi.length = e.length
    this.Ch = this.Yf = -1
    this.ak = 0
  }
  y.prototype.Wn = function () {
    return !this.tl.length
  }
  y.prototype.um = function (e, k, g) {
    if (!(this.Yf === e && this.Ch === k && this.ak === g)) {
      this.Yf = e
      this.Ch = k
      this.ak = g
      var h,
        r,
        b,
        t = 0,
        p = 1,
        C = this.tl,
        d = this.Wi
      0 !== g && ((t = Math.sin(g)), (p = Math.cos(g)))
      g = 0
      for (h = this.ul; g < h; g++) (r = C[2 * g] * e), (b = C[2 * g + 1] * k), (d[2 * g] = r * p - b * t), (d[2 * g + 1] = b * p + r * t)
    }
  }
  y.prototype.hd = function (e, k) {
    var g = this.Wi
    if (e === g[0] && k === g[1]) return a
    var h = 5 * -this.Yf - 1,
      r = 5 * -this.Ch - 1,
      b = 5 * this.Yf + 1,
      t,
      p,
      C,
      d,
      x,
      B,
      w = 0,
      l = 0
    x = 0
    for (B = this.ul; x < B; x++)
      (t = g[2 * x]),
        (p = g[2 * x + 1]),
        (C = g[2 * ((x + 1) % B)]),
        (d = g[2 * ((x + 1) % B) + 1]),
        la(h, r, e, k, t, p, C, d) && w++,
        la(b, -1, e, k, t, p, C, d) && l++
    return 1 === w % 2 || 1 === l % 2
  }
  Va = y
  var t = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ")
  Wa = function (e) {
    return 0 >= e || 11 <= e ? "source-over" : t[e - 1]
  }
  Xa = function (e, k, g) {
    if (g)
      switch (((e.Ya = g.ONE), (e.Ua = g.ONE_MINUS_SRC_ALPHA), k)) {
        case 1:
          e.Ya = g.ONE
          e.Ua = g.ONE
          break
        case 3:
          e.Ya = g.ONE
          e.Ua = g.ZERO
          break
        case 4:
          e.Ya = g.ONE_MINUS_DST_ALPHA
          e.Ua = g.ONE
          break
        case 5:
          e.Ya = g.DST_ALPHA
          e.Ua = g.ZERO
          break
        case 6:
          e.Ya = g.ZERO
          e.Ua = g.SRC_ALPHA
          break
        case 7:
          e.Ya = g.ONE_MINUS_DST_ALPHA
          e.Ua = g.ZERO
          break
        case 8:
          e.Ya = g.ZERO
          e.Ua = g.ONE_MINUS_SRC_ALPHA
          break
        case 9:
          e.Ya = g.DST_ALPHA
          e.Ua = g.ONE_MINUS_SRC_ALPHA
          break
        case 10:
          ;(e.Ya = g.ONE_MINUS_DST_ALPHA), (e.Ua = g.SRC_ALPHA)
      }
  }
  Ya = function (e) {
    return Math.round(1e6 * e) / 1e6
  }
})()
var rb = "undefined" !== typeof Float32Array ? Float32Array : Array
function sb(d) {
  var n = new rb(3)
  d && ((n[0] = d[0]), (n[1] = d[1]), (n[2] = d[2]))
  return n
}
function tb(d) {
  var n = new rb(16)
  d &&
    ((n[0] = d[0]),
    (n[1] = d[1]),
    (n[2] = d[2]),
    (n[3] = d[3]),
    (n[4] = d[4]),
    (n[5] = d[5]),
    (n[6] = d[6]),
    (n[7] = d[7]),
    (n[8] = d[8]),
    (n[9] = d[9]),
    (n[10] = d[10]),
    (n[11] = d[11]),
    (n[12] = d[12]),
    (n[13] = d[13]),
    (n[14] = d[14]),
    (n[15] = d[15]))
  return n
}
function ub(d, n) {
  n[0] = d[0]
  n[1] = d[1]
  n[2] = d[2]
  n[3] = d[3]
  n[4] = d[4]
  n[5] = d[5]
  n[6] = d[6]
  n[7] = d[7]
  n[8] = d[8]
  n[9] = d[9]
  n[10] = d[10]
  n[11] = d[11]
  n[12] = d[12]
  n[13] = d[13]
  n[14] = d[14]
  n[15] = d[15]
}
function vb(d, n) {
  var l = n[0],
    b = n[1]
  n = n[2]
  d[0] *= l
  d[1] *= l
  d[2] *= l
  d[3] *= l
  d[4] *= b
  d[5] *= b
  d[6] *= b
  d[7] *= b
  d[8] *= n
  d[9] *= n
  d[10] *= n
  d[11] *= n
}
function wb(d, n, l, b) {
  b || (b = tb())
  var y,
    t,
    e,
    k,
    g,
    h,
    r,
    u,
    z = d[0],
    p = d[1]
  d = d[2]
  t = l[0]
  e = l[1]
  y = l[2]
  l = n[1]
  h = n[2]
  z === n[0] && p === l && d === h
    ? ((d = b),
      (d[0] = 1),
      (d[1] = 0),
      (d[2] = 0),
      (d[3] = 0),
      (d[4] = 0),
      (d[5] = 1),
      (d[6] = 0),
      (d[7] = 0),
      (d[8] = 0),
      (d[9] = 0),
      (d[10] = 1),
      (d[11] = 0),
      (d[12] = 0),
      (d[13] = 0),
      (d[14] = 0),
      (d[15] = 1))
    : ((l = z - n[0]),
      (h = p - n[1]),
      (r = d - n[2]),
      (u = 1 / Math.sqrt(l * l + h * h + r * r)),
      (l *= u),
      (h *= u),
      (r *= u),
      (n = e * r - y * h),
      (y = y * l - t * r),
      (t = t * h - e * l),
      (u = Math.sqrt(n * n + y * y + t * t)) ? ((u = 1 / u), (n *= u), (y *= u), (t *= u)) : (t = y = n = 0),
      (e = h * t - r * y),
      (k = r * n - l * t),
      (g = l * y - h * n),
      (u = Math.sqrt(e * e + k * k + g * g)) ? ((u = 1 / u), (e *= u), (k *= u), (g *= u)) : (g = k = e = 0),
      (b[0] = n),
      (b[1] = e),
      (b[2] = l),
      (b[3] = 0),
      (b[4] = y),
      (b[5] = k),
      (b[6] = h),
      (b[7] = 0),
      (b[8] = t),
      (b[9] = g),
      (b[10] = r),
      (b[11] = 0),
      (b[12] = -(n * z + y * p + t * d)),
      (b[13] = -(e * z + k * p + g * d)),
      (b[14] = -(l * z + h * p + r * d)),
      (b[15] = 1))
}
;(function () {
  function d(b) {
    this.height = this.width = 0
    this.bk = sb([0, 0, 100])
    this.el = sb([0, 0, 0])
    this.Ll = sb([0, 1, 0])
    this.Fj = sb([1, 1, 1])
    this.Ci = tb()
    this.Ib = tb()
    this.Xk = tb()
    this.Mh = tb()
    this.w = b
    this.Nk()
  }
  function n(b, e, k) {
    this.w = b
    this.Ef = e
    this.name = k
    this.Hb = b.getAttribLocation(e, "aPos")
    this.od = b.getAttribLocation(e, "aTex")
    this.cl = b.getUniformLocation(e, "matP")
    this.Ee = b.getUniformLocation(e, "matMV")
    this.Fe = b.getUniformLocation(e, "opacity")
    this.dl = b.getUniformLocation(e, "samplerFront")
    this.Jg = b.getUniformLocation(e, "samplerBack")
    this.De = b.getUniformLocation(e, "destStart")
    this.Ce = b.getUniformLocation(e, "destEnd")
    this.zi = b.getUniformLocation(e, "seconds")
    this.yi = b.getUniformLocation(e, "pixelWidth")
    this.xi = b.getUniformLocation(e, "pixelHeight")
    this.wi = b.getUniformLocation(e, "layerScale")
    this.Fe && b.uniform1f(this.Fe, 1)
    this.dl && b.uniform1i(this.dl, 0)
    this.Jg && b.uniform1i(this.Jg, 1)
    this.De && b.uniform2f(this.De, 0, 0)
    this.Ce && b.uniform2f(this.Ce, 1, 1)
    this.Kd = f
  }
  function l(b, e) {
    this.type = b
    this.u = e
    this.w = e.w
    this.uc = this.Lb = this.nl = 0
    this.B = this.ce = c
    this.ij = []
  }
  function b(b) {
    --b
    for (var e = 1; 32 > e; e <<= 1) b |= b >> e
    return b + 1
  }
  d.prototype.Nk = function () {
    var b = this.w,
      e
    this.Yk = 1
    this.Rd = c
    this.jk = 1
    b.clearColor(0, 0, 0, 0)
    b.clear(b.COLOR_BUFFER_BIT)
    b.enable(b.BLEND)
    b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA)
    b.disable(b.CULL_FACE)
    b.disable(b.DEPTH_TEST)
    this.$p = b.getParameter(b.MAX_TEXTURE_SIZE)
    this.Zk = b.ONE
    this.Wk = b.ONE_MINUS_SRC_ALPHA
    this.Pi = b.createBuffer()
    b.bindBuffer(b.ARRAY_BUFFER, this.Pi)
    this.Nf = Array(4)
    this.Gf = Array(4)
    for (e = 0; 4 > e; e++)
      (this.Nf[e] = b.createBuffer()), b.bindBuffer(b.ARRAY_BUFFER, this.Nf[e]), (this.Gf[e] = b.createBuffer()), b.bindBuffer(b.ARRAY_BUFFER, this.Gf[e])
    this.Mc = 0
    this.Rn = b.createBuffer()
    b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.Rn)
    this.Dj = new Float32Array(16e3)
    this.pj = new Float32Array(16e3)
    this.qo = new Float32Array(32e3)
    for (var k = new Uint16Array(12e3), g = (e = 0); 12e3 > e; )
      (k[e++] = g), (k[e++] = g + 1), (k[e++] = g + 2), (k[e++] = g), (k[e++] = g + 2), (k[e++] = g + 3), (g += 4)
    b.bufferData(b.ELEMENT_ARRAY_BUFFER, k, b.STATIC_DRAW)
    this.Qi = this.Bc = 0
    this.Ha = []
    e = this.Hh(
      {
        src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}",
      },
      "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}",
      "<default>"
    )
    this.Ha.push(e)
    e = this.Hh(
      {
        src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}",
      },
      "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}",
      "<point>"
    )
    this.Ha.push(e)
    for (var h in xb)
      xb.hasOwnProperty(h) &&
        this.Ha.push(
          this.Hh(
            xb[h],
            "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}",
            h
          )
        )
    b.activeTexture(b.TEXTURE0)
    b.bindTexture(b.TEXTURE_2D, c)
    this.gd = []
    this.Ic = 0
    this.Fb = this.nb = f
    this.kk = this.rf = -1
    this.ff = c
    this.ln = b.createFramebuffer()
    this.vl = c
    this.wd = sb([0, 0, 0])
    b = b.getParameter(b.ALIASED_POINT_SIZE_RANGE)
    this.aq = b[0]
    this.Zp = b[1]
    this.zc(0)
  }
  d.prototype.Hh = function (b, e, k) {
    var g = this.w,
      h = g.createShader(g.FRAGMENT_SHADER)
    g.shaderSource(h, b.src)
    g.compileShader(h)
    if (!g.getShaderParameter(h, g.COMPILE_STATUS)) return g.deleteShader(h), c
    var r = g.createShader(g.VERTEX_SHADER)
    g.shaderSource(r, e)
    g.compileShader(r)
    if (!g.getShaderParameter(r, g.COMPILE_STATUS)) return g.deleteShader(h), g.deleteShader(r), c
    e = g.createProgram()
    g.attachShader(e, h)
    g.attachShader(e, r)
    g.linkProgram(e)
    if (!g.getProgramParameter(e, g.LINK_STATUS)) return g.deleteShader(h), g.deleteShader(r), g.deleteProgram(e), c
    g.useProgram(e)
    g.validateProgram(e)
    g.deleteShader(h)
    g.deleteShader(r)
    k = new n(g, e, k)
    k.Th = b.Th || 0
    k.Uh = b.Uh || 0
    k.ik = !!b.ik
    k.Xj = !!b.Xj
    k.t = b.t || []
    b = 0
    for (h = k.t.length; b < h; b++) (k.t[b][1] = g.getUniformLocation(e, k.t[b][0])), g.uniform1f(k.t[b][1], 0)
    return k
  }
  d.prototype.bi = function (b) {
    var e, k
    e = 0
    for (k = this.Ha.length; e < k; e++) if (this.Ha[e].name === b) return e
    return -1
  }
  d.prototype.sl = function (b, e, k) {
    var g = [0, 0, this.width, this.height],
      h = this.Ib,
      r = this.Ci,
      u = [0, 0, 0, 0, 0, 0, 0, 0]
    u[0] = h[0] * b + h[4] * e + h[12]
    u[1] = h[1] * b + h[5] * e + h[13]
    u[2] = h[2] * b + h[6] * e + h[14]
    u[3] = h[3] * b + h[7] * e + h[15]
    u[4] = r[0] * u[0] + r[4] * u[1] + r[8] * u[2] + r[12] * u[3]
    u[5] = r[1] * u[0] + r[5] * u[1] + r[9] * u[2] + r[13] * u[3]
    u[6] = r[2] * u[0] + r[6] * u[1] + r[10] * u[2] + r[14] * u[3]
    u[7] = -u[2]
    0 !== u[7] &&
      ((u[7] = 1 / u[7]), (u[4] *= u[7]), (u[5] *= u[7]), (u[6] *= u[7]), (k[0] = (0.5 * u[4] + 0.5) * g[2] + g[0]), (k[1] = (0.5 * u[5] + 0.5) * g[3] + g[1]))
  }
  d.prototype.gj = function (b, e, k) {
    if (!(this.width === b && this.height === e && !k)) {
      this.kd()
      this.width = b
      this.height = e
      this.w.viewport(0, 0, b, e)
      e = b / e
      var g = this.Ci,
        h
      h = 1 * Math.tan((45 * Math.PI) / 360)
      e *= h
      b = -e
      k = -h
      g || (g = tb())
      var r = e - b,
        u = h - k
      g[0] = 2 / r
      g[1] = 0
      g[2] = 0
      g[3] = 0
      g[4] = 0
      g[5] = 2 / u
      g[6] = 0
      g[7] = 0
      g[8] = (e + b) / r
      g[9] = (h + k) / u
      g[10] = -1001 / 999
      g[11] = -1
      g[12] = 0
      g[13] = 0
      g[14] = -2e3 / 999
      g[15] = 0
      wb(this.bk, this.el, this.Ll, this.Ib)
      b = [0, 0]
      e = [0, 0]
      this.sl(0, 0, b)
      this.sl(1, 1, e)
      this.Fj[0] = 1 / (e[0] - b[0])
      this.Fj[1] = -1 / (e[1] - b[1])
      b = 0
      for (e = this.Ha.length; b < e; b++) (k = this.Ha[b]), (k.Kd = f), k.cl && (this.w.useProgram(k.Ef), this.w.uniformMatrix4fv(k.cl, f, this.Ci))
      this.w.useProgram(this.Ha[this.rf].Ef)
      this.w.bindTexture(this.w.TEXTURE_2D, c)
      this.Rd = c
    }
  }
  d.prototype.yc = function () {
    wb(this.bk, this.el, this.Ll, this.Ib)
    vb(this.Ib, this.Fj)
  }
  d.prototype.translate = function (b, e) {
    if (!(0 === b && 0 === e)) {
      this.wd[0] = b
      this.wd[1] = e
      this.wd[2] = 0
      var k = this.Ib,
        g = this.wd,
        h = g[0],
        r = g[1],
        g = g[2]
      k[12] = k[0] * h + k[4] * r + k[8] * g + k[12]
      k[13] = k[1] * h + k[5] * r + k[9] * g + k[13]
      k[14] = k[2] * h + k[6] * r + k[10] * g + k[14]
      k[15] = k[3] * h + k[7] * r + k[11] * g + k[15]
    }
  }
  d.prototype.scale = function (b, e) {
    ;(1 === b && 1 === e) || ((this.wd[0] = b), (this.wd[1] = e), (this.wd[2] = 1), vb(this.Ib, this.wd))
  }
  d.prototype.cj = function (b) {
    if (0 !== b) {
      var e = this.Ib,
        k,
        g = Math.sin(b)
      b = Math.cos(b)
      var h = e[0],
        r = e[1],
        u = e[2],
        z = e[3],
        p = e[4],
        C = e[5],
        d = e[6],
        x = e[7]
      k
        ? e !== k && ((k[8] = e[8]), (k[9] = e[9]), (k[10] = e[10]), (k[11] = e[11]), (k[12] = e[12]), (k[13] = e[13]), (k[14] = e[14]), (k[15] = e[15]))
        : (k = e)
      k[0] = h * b + p * g
      k[1] = r * b + C * g
      k[2] = u * b + d * g
      k[3] = z * b + x * g
      k[4] = h * -g + p * b
      k[5] = r * -g + C * b
      k[6] = u * -g + d * b
      k[7] = z * -g + x * b
    }
  }
  d.prototype.Ac = function () {
    for (var b = f, e = 0; 16 > e; e++)
      if (this.Xk[e] !== this.Ib[e]) {
        b = a
        break
      }
    b && ((b = this.bc()), (b.type = 5), b.B ? ub(this.Ib, b.B) : (b.B = tb(this.Ib)), ub(this.Ib, this.Xk), (this.Fb = this.nb = f))
  }
  l.prototype.Jm = function () {
    this.w.bindTexture(this.w.TEXTURE_2D, this.ce)
  }
  l.prototype.Gm = function () {
    var b = this.nl,
      e = this.u
    e.jk = b
    e = e.ff
    e.Fe && this.w.uniform1f(e.Fe, b)
  }
  l.prototype.Dm = function () {
    this.w.drawElements(this.w.TRIANGLES, this.uc, this.w.UNSIGNED_SHORT, 2 * this.Lb)
  }
  l.prototype.Fm = function () {
    this.w.blendFunc(this.Lb, this.uc)
  }
  l.prototype.Km = function () {
    var b,
      e,
      k,
      g = this.u.Ha,
      h = this.u.kk
    b = 0
    for (e = g.length; b < e; b++) (k = g[b]), b === h && k.Ee ? (this.w.uniformMatrix4fv(k.Ee, f, this.B), (k.Kd = a)) : (k.Kd = f)
    ub(this.B, this.u.Mh)
  }
  l.prototype.Em = function () {
    var b = this.w,
      e = this.u
    this.ce
      ? (b.bindFramebuffer(b.FRAMEBUFFER, e.ln), b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, this.ce, 0))
      : (b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, c, 0), b.bindFramebuffer(b.FRAMEBUFFER, c))
  }
  l.prototype.Bm = function () {
    var b = this.w
    0 === this.Lb
      ? (b.clearColor(this.B[0], this.B[1], this.B[2], this.B[3]), b.clear(b.COLOR_BUFFER_BIT))
      : (b.enable(b.SCISSOR_TEST),
        b.scissor(this.B[0], this.B[1], this.B[2], this.B[3]),
        b.clearColor(0, 0, 0, 0),
        b.clear(this.w.COLOR_BUFFER_BIT),
        b.disable(b.SCISSOR_TEST))
  }
  l.prototype.Cm = function () {
    var b = this.w,
      e = this.u,
      k = e.Ha[1]
    b.useProgram(k.Ef)
    !k.Kd && k.Ee && (b.uniformMatrix4fv(k.Ee, f, e.Mh), (k.Kd = a))
    b.enableVertexAttribArray(k.Hb)
    b.bindBuffer(b.ARRAY_BUFFER, e.Pi)
    b.vertexAttribPointer(k.Hb, 4, b.FLOAT, f, 0, 0)
    b.drawArrays(b.POINTS, this.Lb / 4, this.uc)
    k = e.ff
    b.useProgram(k.Ef)
    0 <= k.Hb && (b.enableVertexAttribArray(k.Hb), b.bindBuffer(b.ARRAY_BUFFER, e.Nf[e.Mc]), b.vertexAttribPointer(k.Hb, 2, b.FLOAT, f, 0, 0))
    0 <= k.od && (b.enableVertexAttribArray(k.od), b.bindBuffer(b.ARRAY_BUFFER, e.Gf[e.Mc]), b.vertexAttribPointer(k.od, 2, b.FLOAT, f, 0, 0))
  }
  l.prototype.Hm = function () {
    var b = this.w,
      e = this.u,
      k = e.Ha[this.Lb]
    e.kk = this.Lb
    e.ff = k
    b.useProgram(k.Ef)
    !k.Kd && k.Ee && (b.uniformMatrix4fv(k.Ee, f, e.Mh), (k.Kd = a))
    k.Fe && b.uniform1f(k.Fe, e.jk)
    0 <= k.Hb && (b.enableVertexAttribArray(k.Hb), b.bindBuffer(b.ARRAY_BUFFER, e.Nf[e.Mc]), b.vertexAttribPointer(k.Hb, 2, b.FLOAT, f, 0, 0))
    0 <= k.od && (b.enableVertexAttribArray(k.od), b.bindBuffer(b.ARRAY_BUFFER, e.Gf[e.Mc]), b.vertexAttribPointer(k.od, 2, b.FLOAT, f, 0, 0))
  }
  l.prototype.Im = function () {
    var b,
      e,
      k = this.u.ff,
      g = this.w
    k.Jg && (g.activeTexture(g.TEXTURE1), g.bindTexture(g.TEXTURE_2D, this.ce), g.activeTexture(g.TEXTURE0))
    k.yi && g.uniform1f(k.yi, this.B[0])
    k.xi && g.uniform1f(k.xi, this.B[1])
    k.De && g.uniform2f(k.De, this.B[2], this.B[3])
    k.Ce && g.uniform2f(k.Ce, this.B[4], this.B[5])
    k.wi && g.uniform1f(k.wi, this.B[6])
    k.zi && g.uniform1f(k.zi, Ra() / 1e3)
    if (k.t.length) {
      b = 0
      for (e = k.t.length; b < e; b++) g.uniform1f(k.t[b][1], this.ij[b])
    }
  }
  d.prototype.bc = function () {
    this.Ic === this.gd.length && this.gd.push(new l(0, this))
    return this.gd[this.Ic++]
  }
  d.prototype.kd = function () {
    if (0 !== this.Ic && !this.w.isContextLost()) {
      var b = this.w
      0 < this.Qi &&
        (b.bindBuffer(b.ARRAY_BUFFER, this.Pi),
        b.bufferData(b.ARRAY_BUFFER, this.qo.subarray(0, this.Qi), b.STREAM_DRAW),
        e && 0 <= e.Hb && "<point>" === e.name && b.vertexAttribPointer(e.Hb, 4, b.FLOAT, f, 0, 0))
      if (0 < this.Bc) {
        var e = this.ff
        b.bindBuffer(b.ARRAY_BUFFER, this.Nf[this.Mc])
        b.bufferData(b.ARRAY_BUFFER, this.Dj.subarray(0, this.Bc), b.STREAM_DRAW)
        e && 0 <= e.Hb && "<point>" !== e.name && b.vertexAttribPointer(e.Hb, 2, b.FLOAT, f, 0, 0)
        b.bindBuffer(b.ARRAY_BUFFER, this.Gf[this.Mc])
        b.bufferData(b.ARRAY_BUFFER, this.pj.subarray(0, this.Bc), b.STREAM_DRAW)
        e && 0 <= e.od && "<point>" !== e.name && b.vertexAttribPointer(e.od, 2, b.FLOAT, f, 0, 0)
      }
      for (var k, b = 0, e = this.Ic; b < e; b++)
        switch (((k = this.gd[b]), k.type)) {
          case 1:
            k.Dm()
            break
          case 2:
            k.Jm()
            break
          case 3:
            k.Gm()
            break
          case 4:
            k.Fm()
            break
          case 5:
            k.Km()
            break
          case 6:
            k.Em()
            break
          case 7:
            k.Bm()
            break
          case 8:
            k.Cm()
            break
          case 9:
            k.Hm()
            break
          case 10:
            k.Im()
        }
      this.Qi = this.Bc = this.Ic = 0
      this.Fb = this.nb = f
      this.Mc++
      4 <= this.Mc && (this.Mc = 0)
    }
  }
  d.prototype.Zd = function (b) {
    if (b !== this.Yk) {
      var e = this.bc()
      e.type = 3
      this.Yk = e.nl = b
      this.Fb = this.nb = f
    }
  }
  d.prototype.yb = function (b) {
    if (b !== this.Rd) {
      var e = this.bc()
      e.type = 2
      this.Rd = e.ce = b
      this.Fb = this.nb = f
    }
  }
  d.prototype.rd = function (b, e) {
    if (!(b === this.Zk && e === this.Wk)) {
      var k = this.bc()
      k.type = 4
      k.Lb = b
      k.uc = e
      this.Zk = b
      this.Wk = e
      this.Fb = this.nb = f
    }
  }
  d.prototype.yl = function () {
    this.rd(this.w.ONE, this.w.ONE_MINUS_SRC_ALPHA)
  }
  d.prototype.Yg = function (b, e, k, g, h, r, u, z) {
    15992 <= this.Bc && this.kd()
    var p = this.Bc,
      C = this.Dj,
      d = this.pj
    if (this.nb) this.gd[this.Ic - 1].uc += 6
    else {
      var x = this.bc()
      x.type = 1
      x.Lb = 3 * (p / 4)
      x.uc = 6
      this.nb = a
      this.Fb = f
    }
    C[p] = b
    d[p++] = 0
    C[p] = e
    d[p++] = 0
    C[p] = k
    d[p++] = 1
    C[p] = g
    d[p++] = 0
    C[p] = h
    d[p++] = 1
    C[p] = r
    d[p++] = 1
    C[p] = u
    d[p++] = 0
    C[p] = z
    d[p++] = 1
    this.Bc = p
  }
  d.prototype.xc = function (b, e, k, g, h, r, u, z, p) {
    15992 <= this.Bc && this.kd()
    var d = this.Bc,
      l = this.Dj,
      x = this.pj
    if (this.nb) this.gd[this.Ic - 1].uc += 6
    else {
      var B = this.bc()
      B.type = 1
      B.Lb = 3 * (d / 4)
      B.uc = 6
      this.nb = a
      this.Fb = f
    }
    l[d] = b
    x[d++] = p.left
    l[d] = e
    x[d++] = p.top
    l[d] = k
    x[d++] = p.right
    l[d] = g
    x[d++] = p.top
    l[d] = h
    x[d++] = p.right
    l[d] = r
    x[d++] = p.bottom
    l[d] = u
    x[d++] = p.left
    l[d] = z
    x[d++] = p.bottom
    this.Bc = d
  }
  d.prototype.zc = function (b) {
    if (this.rf !== b) {
      if (!this.Ha[b]) {
        if (0 === this.rf) return
        b = 0
      }
      var e = this.bc()
      e.type = 9
      this.rf = e.Lb = b
      this.Fb = this.nb = f
    }
  }
  d.prototype.zf = function (b) {
    b = this.Ha[b]
    return !(!b.De && !b.Ce)
  }
  d.prototype.Ui = function (b) {
    return this.Ha[b].ik
  }
  d.prototype.vo = function (b) {
    b = this.Ha[b]
    return 0 !== b.Th || 0 !== b.Uh
  }
  d.prototype.xn = function (b) {
    return this.Ha[b].Th
  }
  d.prototype.yn = function (b) {
    return this.Ha[b].Uh
  }
  d.prototype.zn = function (b, e) {
    return this.Ha[b].t[e][2]
  }
  d.prototype.Wg = function (b) {
    return this.Ha[b].Xj
  }
  d.prototype.Qe = function (b, e, k, g, h, r, u, z, p) {
    var d = this.Ha[this.rf]
    if (d.yi || d.xi || d.zi || d.Jg || d.De || d.Ce || d.wi || p.length) {
      d = this.bc()
      d.type = 10
      d.B ? ub(this.Ib, d.B) : (d.B = tb())
      d.B[0] = e
      d.B[1] = k
      d.B[2] = g
      d.B[3] = h
      d.B[4] = r
      d.B[5] = u
      d.B[6] = z
      d.ce = b
      if (p.length) {
        d.ij.length = p.length
        b = 0
        for (e = p.length; b < e; b++) d.ij[b] = p[b]
      }
      this.Fb = this.nb = f
    }
  }
  d.prototype.clear = function (b, e, k, g) {
    var h = this.bc()
    h.type = 7
    h.Lb = 0
    h.B || (h.B = tb())
    h.B[0] = b
    h.B[1] = e
    h.B[2] = k
    h.B[3] = g
    this.Fb = this.nb = f
  }
  d.prototype.clearRect = function (b, e, k, g) {
    var h = this.bc()
    h.type = 7
    h.Lb = 1
    h.B || (h.B = tb())
    h.B[0] = b
    h.B[1] = e
    h.B[2] = k
    h.B[3] = g
    this.Fb = this.nb = f
  }
  d.prototype.uo = function () {
    this.kd()
    this.w.flush()
  }
  var y = []
  d.prototype.Hg = function (d, e, k, g) {
    this.kd()
    var h = this.w,
      r = ea(d.width) && ea(d.height),
      u = h.createTexture()
    h.bindTexture(h.TEXTURE_2D, u)
    h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a)
    var z = h.RGBA,
      p = h.RGBA,
      C = h.UNSIGNED_BYTE
    if (g)
      switch (g) {
        case 1:
          p = z = h.RGB
          break
        case 2:
          C = h.UNSIGNED_SHORT_4_4_4_4
          break
        case 3:
          C = h.UNSIGNED_SHORT_5_5_5_1
          break
        case 4:
          ;(p = z = h.RGB), (C = h.UNSIGNED_SHORT_5_6_5)
      }
    !r && e
      ? ((g = document.createElement("canvas")),
        (g.width = b(d.width)),
        (g.height = b(d.height)),
        g.getContext("2d").drawImage(d, 0, 0, d.width, d.height, 0, 0, g.width, g.height),
        h.texImage2D(h.TEXTURE_2D, 0, z, p, C, g))
      : h.texImage2D(h.TEXTURE_2D, 0, z, p, C, d)
    e
      ? (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.REPEAT), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.REPEAT))
      : (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE))
    k
      ? (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.LINEAR),
        r
          ? (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR_MIPMAP_NEAREST), h.generateMipmap(h.TEXTURE_2D))
          : h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR))
      : (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.NEAREST))
    h.bindTexture(h.TEXTURE_2D, c)
    this.Rd = c
    u.df = d.width
    u.cf = d.height
    y.push(u)
    return u
  }
  d.prototype.Lc = function (b, e, k, g) {
    this.kd()
    var h = this.w,
      r = h.createTexture()
    h.bindTexture(h.TEXTURE_2D, r)
    h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, b, e, 0, h.RGBA, g ? h.UNSIGNED_SHORT_4_4_4_4 : h.UNSIGNED_BYTE, c)
    h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE)
    h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE)
    h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, k ? h.LINEAR : h.NEAREST)
    h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, k ? h.LINEAR : h.NEAREST)
    h.bindTexture(h.TEXTURE_2D, c)
    this.Rd = c
    r.df = b
    r.cf = e
    y.push(r)
    return r
  }
  d.prototype.Vo = function (b, e, k) {
    this.kd()
    var g = this.w
    g.bindTexture(g.TEXTURE_2D, e)
    g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, g.RGBA, k ? g.UNSIGNED_SHORT_4_4_4_4 : g.UNSIGNED_BYTE, b)
    g.bindTexture(g.TEXTURE_2D, c)
    this.Rd = c
  }
  d.prototype.deleteTexture = function (b) {
    b && (this.kd(), this.w.bindTexture(this.w.TEXTURE_2D, c), (this.Rd = c), this.w.deleteTexture(b), wa(y, b))
  }
  d.prototype.Yc = function (b) {
    if (b !== this.vl) {
      var e = this.bc()
      e.type = 6
      this.vl = e.ce = b
      this.Fb = this.nb = f
    }
  }
  Za = d
})()
;(function () {
  function d(e) {
    if (e && (e.getContext || e.dc) && !e.c2runtime) {
      e.c2runtime = this
      var b = this
      this.Od = "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap)
      this.Gb = !!e.dc
      this.ve = "undefined" !== typeof window.AppMobi || this.Gb
      if ((this.Md = !!window.c2cocoonjs))
        CocoonJS.App.onSuspended.addEventListener(function () {
          b.setSuspended(a)
        }),
          CocoonJS.App.onActivated.addEventListener(function () {
            b.setSuspended(f)
          })
      this.Wa = this.Gb || this.Md
      this.hi = /android/i.test(navigator.userAgent)
      this.Wp = /msie/i.test(navigator.userAgent)
      this.Bg = /iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)
      this.Uk = /ipad/i.test(navigator.userAgent)
      this.Qd = this.Bg || this.Uk
      this.Qk = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)
      this.Un = !this.Qk && /safari/i.test(navigator.userAgent)
      this.Sk = /windows/i.test(navigator.userAgent)
      this.Rk = "undefined" !== typeof window.c2nodewebkit
      this.Sn = "undefined" !== typeof window.is_scirra_arcade
      this.devicePixelRatio = 1
      this.Nd = this.Od || this.ve || this.Md || this.hi || this.Qd
      this.Nd || (this.Nd = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet)/i.test(navigator.userAgent))
      this.canvas = e
      this.ck = document.getElementById("c2canvasdiv")
      this.T = this.u = this.w = c
      this.canvas.oncontextmenu = function (e) {
        e.preventDefault && e.preventDefault()
        return f
      }
      this.canvas.onselectstart = function (e) {
        e.preventDefault && e.preventDefault()
        return f
      }
      this.Gb && (window.c2runtime = this)
      this.width = e.width
      this.height = e.height
      this.ze = this.width
      this.ye = this.height
      this.R = a
      this.of = f
      Date.now ||
        (Date.now = function () {
          return +new Date()
        })
      this.plugins = []
      this.types = {}
      this.v = []
      this.Sa = []
      this.ti = {}
      this.Ae = []
      this.Rh = {}
      this.Fd = []
      this.bd = []
      this.lh = []
      this.yh = []
      this.mc = new Sa()
      this.ii = f
      this.Yb = 0
      this.li = f
      this.lc = []
      this.Xo = this.Gh = this.Lg = this.jd = this.Ed = 0
      this.Hf = 1
      this.Uc = new Ta()
      this.Eg = 0
      this.fl = a
      this.Qg = this.kg = this.Sh = this.ih = this.sf = this.Xh = 0
      this.qe = c
      this.mk = []
      this.Qh = []
      this.eg = -1
      this.Ai = [[]]
      this.yj = this.Kg = 0
      this.Xg(c)
      this.Ge = []
      this.Mg = -1
      this.Pg = 0
      this.si = a
      this.gf = 0
      this.Ff = []
      this.vj = this.Yi = 0
      this.pf = a
      this.Ig = 0
      this.ug = f
      this.Lo = 0
      this.qg = f
      this.Ii = new Sa()
      this.Ji = new Sa()
      this.yo = []
      this.cq = new Va([])
      this.dq = new Va([])
      this.rm = []
      this.Tj = {}
      this.Zb = this.xb = this.bl = this.Gg = this.oa = c
      this.Ve = this.ni = f
      this.Zh = [c, c]
      this.Yh = 0
      this.Vh = ""
      this.fh = this.Be = c
      this.Ko = ""
      this.load()
      this.devicePixelRatio = !this.Wa && this.oh && this.Qd ? window.devicePixelRatio || 1 : 1
      this.tb()
      var g
      "undefined" !== typeof jQuery && 0 < this.Qc && this.setSize(jQuery(window).width(), jQuery(window).height())
      try {
        if (this.Mm && !this.Wa) {
          g = { depth: f, antialias: !this.Nd }
          var h = a
          if (this.Qk && this.Sk) {
            var r = document.createElement("canvas")
            if (
              "OES_texture_float,OES_standard_derivatives,WEBKIT_WEBGL_lose_context" ===
              (r.getContext("webgl", g) || r.getContext("experimental-webgl", g)).getSupportedExtensions().toString()
            )
              h = f
          }
          h && (this.w = e.getContext("webgl", g) || e.getContext("experimental-webgl", g))
        }
      } catch (u) {}
      if (this.w) {
        this.fb = document.createElement("canvas")
        jQuery(this.fb).appendTo(this.canvas.parentNode)
        this.fb.oncontextmenu = s(f)
        this.fb.onselectstart = s(f)
        this.fb.width = e.width
        this.fb.height = e.height
        this.rl()
        this.Ni = this.fb.getContext("2d")
        this.u = new Za(this.w, this.Nd)
        this.u.gj(e.width, e.height)
        this.T = c
        this.canvas.addEventListener(
          "webglcontextlost",
          function (e) {
            console.log("WebGL context lost")
            e.preventDefault()
            b.eo()
            window.cr_setSuspended(a)
          },
          f
        )
        this.canvas.addEventListener(
          "webglcontextrestored",
          function () {
            console.log("WebGL context restored")
            b.u.Nk()
            b.u.gj(b.u.width, b.u.height, a)
            b.xb = c
            b.Zb = c
            b.Zh[0] = c
            b.Zh[1] = c
            b.fo()
            b.R = a
            window.cr_setSuspended(f)
          },
          f
        )
        var z, p, d, l, x
        e = 0
        for (g = this.v.length; e < g; e++) {
          z = this.v[e]
          h = 0
          for (r = z.U.length; h < r; h++) (d = z.U[h]), (d.Ra = this.u.bi(d.id)), (this.Ve = this.Ve || this.u.zf(d.Ra))
        }
        e = 0
        for (g = this.Ae.length; e < g; e++) {
          l = this.Ae[e]
          h = 0
          for (r = l.U.length; h < r; h++) (d = l.U[h]), (d.Ra = this.u.bi(d.id))
          h = 0
          for (r = l.Z.length; h < r; h++) {
            x = l.Z[h]
            z = 0
            for (p = x.U.length; z < p; z++) (d = x.U[z]), (d.Ra = this.u.bi(d.id)), (this.Ve = this.Ve || this.u.zf(d.Ra))
          }
        }
      } else {
        if (0 < this.Qc && this.Gb) {
          this.canvas = c
          document.oncontextmenu = s(f)
          document.onselectstart = s(f)
          this.T = AppMobi.canvas.getContext("2d")
          try {
            ;(this.T.samplingMode = this.ka ? "smooth" : "sharp"), (this.T.globalScale = 1), (this.T.HTML5CompatibilityMode = a)
          } catch (B) {}
          0 !== this.width && 0 !== this.height && ((this.T.width = this.width), (this.T.height = this.height))
        }
        this.T ||
          (this.Md ? ((g = { antialias: !!this.ka }), (this.T = e.getContext("2d", g))) : (this.T = e.getContext("2d")),
          (this.T.webkitImageSmoothingEnabled = this.ka),
          (this.T.mozImageSmoothingEnabled = this.ka),
          (this.T.msImageSmoothingEnabled = this.ka),
          (this.T.imageSmoothingEnabled = this.ka))
        this.Ni = this.fb = c
      }
      this.Fl = function () {
        b.hb()
      }
      this.go()
      this.Db = {}
    }
  }
  d.prototype.setSize = function (e, b) {
    var g = this.On && this.Bg && !navigator.standalone && !this.Wa && !this.Od,
      h = 0
    g && (this.Bg ? (h = 60) : this.hi && (h = 56), (b += h))
    var r = 0,
      u = 0,
      z = 0,
      p = 0,
      d = 0,
      d = this.Qc,
      l = document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || this.ug
    l && 0 < this.Yh && (d = this.Yh)
    3 <= d
      ? ((z = this.rb / this.qb),
        e / b > z
          ? ((z *= b),
            4 === d
              ? ((d = z / this.rb),
                1 < d ? (d = Math.floor(d)) : 1 > d && (d = 1 / Math.ceil(1 / d)),
                (z = this.rb * d),
                (p = this.qb * d),
                (r = (e - z) / 2),
                (u = (b - p) / 2),
                (e = z),
                (b = p))
              : ((r = (e - z) / 2), (e = z)))
          : ((p = e / z),
            4 === d
              ? ((d = p / this.qb),
                1 < d ? (d = Math.floor(d)) : 1 > d && (d = 1 / Math.ceil(1 / d)),
                (z = this.rb * d),
                (p = this.qb * d),
                (r = (e - z) / 2),
                (u = (b - p) / 2),
                (e = z))
              : (u = (b - p) / 2),
            (b = p)),
        l && !this.Rk && (u = r = 0),
        (r = Math.floor(r)),
        (u = Math.floor(u)),
        (e = Math.floor(e)),
        (b = Math.floor(b)))
      : this.Rk && this.ug && 0 === this.vk && ((r = Math.floor((e - this.rb) / 2)), (u = Math.floor((b - this.qb) / 2)), (e = this.rb), (b = this.qb))
    if ((l = !this.Wa && this.oh && this.Qd) && this.Uk && 1 < this.devicePixelRatio) 1024 <= e && (e = 1023), 1024 <= b && (b = 1023)
    z = this.devicePixelRatio
    this.width = e * z
    this.height = b * z
    this.R = a
    this.ck &&
      !this.Wa &&
      (jQuery(this.ck).css({ width: e + "px", height: b + "px", "margin-left": r, "margin-top": u }),
      "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({ width: e + "px", height: b + "px" }))
    this.canvas && ((this.canvas.width = e * z), (this.canvas.height = b * z), l && jQuery(this.canvas).css({ width: e + "px", height: b + "px" }))
    this.fb && ((this.fb.width = e), (this.fb.height = b))
    this.u && this.u.gj(e, b)
    this.Gb && this.T && ((this.T.width = e), (this.T.height = b))
    this.T &&
      ((this.T.webkitImageSmoothingEnabled = this.ka),
      (this.T.mozImageSmoothingEnabled = this.ka),
      (this.T.msImageSmoothingEnabled = this.ka),
      (this.T.imageSmoothingEnabled = this.ka))
    g &&
      0 < h &&
      window.setTimeout(function () {
        window.scrollTo(0, 1)
      }, 100)
  }
  d.prototype.eo = function () {
    this.ni = a
    var e, b, g
    e = 0
    for (b = this.v.length; e < b; e++) (g = this.v[e]), g.Rg && g.Rg()
  }
  d.prototype.fo = function () {
    this.ni = f
    var e, b, g
    e = 0
    for (b = this.v.length; e < b; e++) (g = this.v[e]), g.Ki && g.Ki()
  }
  d.prototype.rl = function () {
    var e =
      document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || this.ug ? jQuery(this.canvas).offset() : jQuery(this.canvas).position()
    e.position = "absolute"
    jQuery(this.fb).css(e)
  }
  var n =
    window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.msCancelAnimationFrame ||
    window.oCancelAnimationFrame
  d.prototype.setSuspended = function (e) {
    var b
    if (e && !this.of) {
      this.of = a
      0 !== this.Yi && n && n(this.Yi)
      0 !== this.vj && clearTimeout(this.vj)
      e = 0
      for (b = this.Ff.length; e < b; e++) this.Ff[e](a)
    } else if (!e && this.of) {
      this.of = f
      this.Eg = Ra()
      this.sf = Ra()
      e = this.kg = 0
      for (b = this.Ff.length; e < b; e++) this.Ff[e](f)
      this.hb()
    }
  }
  d.prototype.qm = function (e) {
    this.Ff.push(e)
  }
  d.prototype.load = function () {
    var e = yb()
    this.name = e[0]
    this.uk = e[1]
    this.Qc = e[11]
    this.vk = e[11]
    this.Wa &&
      3 <= e[11] &&
      (ba("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale'"), (this.vk = this.Qc = 2))
    this.Bj = e[17]
    this.tf = e[18]
    0 === this.tf && ((this.Be = new Image()), (this.Be.src = "logo.png"))
    this.ae = new A(this)
    var b, g, h, r, u, z, p, d, l
    b = 0
    for (g = e[2].length; b < g; b++)
      (p = e[2][b]), zb(p), (l = new p[0](this)), (l.kj = p[1]), (l.Ag = p[2]), (l.hl = p[9]), l.P && l.P(), this.plugins.push(l)
    e = yb()
    b = 0
    for (g = e[3].length; b < g; b++) {
      p = e[3][b]
      u = p[1]
      l = c
      h = 0
      for (r = this.plugins.length; h < r; h++)
        if (this.plugins[h] instanceof u) {
          l = this.plugins[h]
          break
        }
      var x = new l.sa(l)
      x.name = p[0]
      x.O = p[2]
      x.Uo = p[3]
      x.tm = p[4]
      x.on = p[5]
      x.O ? ((x.Ng = []), (x.qc = this.gf++), (x.ja = c)) : ((x.Ng = c), (x.qc = -1), (x.ja = []))
      x.gg = c
      x.se = c
      x.qk = c
      x.ob = f
      x.vb = c
      p[6] ? ((x.qj = p[6][0]), (x.rj = p[6][1]), (x.sj = p[6][2])) : ((x.qj = c), (x.rj = 0), (x.sj = 0))
      x.ta = p[7] ? p[7] : c
      x.index = b
      x.f = []
      x.bg = []
      x.ud = [new $a(x)]
      x.Nc = 0
      x.nc = c
      x.$d = a
      x.mh = Ab
      x.sn = Bb
      x.wn = Cb
      x.K = Db
      x.Af = Eb
      x.Xd = Jb
      x.wc = Kb
      x.lg = Lb
      x.$h = Mb
      x.Ak = Nb
      x.ne = Ob
      x.Db = {}
      x.toString = Pb
      x.Sa = []
      h = 0
      for (r = p[8].length; h < r; h++) {
        d = p[8][h]
        var B = d[1],
          w = c
        u = 0
        for (z = this.Sa.length; u < z; u++)
          if (this.Sa[u] instanceof B) {
            w = this.Sa[u]
            break
          }
        w || ((w = new B(this)), (w.Gi = new Sa()), w.P && w.P(), this.Sa.push(w))
        u = new w.sa(w, x)
        u.name = d[0]
        u.P()
        x.Sa.push(u)
      }
      x.global = p[9]
      x.ki = p[10]
      x.U = []
      h = 0
      for (r = p[11].length; h < r; h++) x.U.push({ id: p[11][h][0], name: p[11][h][1], Ra: -1, af: a, index: h })
      ;(!this.Bj || x.O || x.ki || !l.Ag) && x.P()
      x.name && (this.types[x.name] = x)
      this.v.push(x)
      l.kj && ((h = new l.da(x)), (h.uid = this.Pg), this.Pg++, (h.kf = 0), (h.pg = Qb), (h.toString = Rb), (h.V = p[12]), h.P(), x.f.push(h))
    }
    b = 0
    for (g = e[4].length; b < g; b++) {
      u = e[4][b]
      z = this.v[u[0]]
      h = 1
      for (r = u.length; h < r; h++) (p = this.v[u[h]]), p.ja.push(z), z.Ng.push(p)
    }
    b = 0
    for (g = e[20].length; b < g; b++) {
      u = e[20][b]
      z = []
      h = 0
      for (r = u.length; h < r; h++) z.push(this.v[u[h]])
      h = 0
      for (r = z.length; h < r; h++) (z[h].ob = a), (z[h].vb = z)
    }
    if (0 < this.gf) {
      b = 0
      for (g = this.v.length; b < g; b++)
        if (((p = this.v[b]), !p.O && p.ja.length)) {
          p.gg = Array(this.gf)
          p.se = Array(this.gf)
          p.qk = Array(this.gf)
          x = []
          h = w = B = d = 0
          for (r = p.ja.length; h < r; h++) {
            l = p.ja[h]
            p.gg[l.qc] = d
            d += l.Uo
            p.se[l.qc] = B
            B += l.tm
            p.qk[l.qc] = w
            w += l.on
            u = 0
            for (z = l.U.length; u < z; u++) x.push(sa({}, l.U[u]))
          }
          p.U = x.concat(p.U)
          h = 0
          for (r = p.U.length; h < r; h++) p.U[h].index = h
        }
    }
    b = 0
    for (g = e[5].length; b < g; b++) (p = e[5][b]), (h = new ab(this, p)), (this.ti[h.name] = h), this.Ae.push(h)
    b = 0
    for (g = e[6].length; b < g; b++) (p = e[6][b]), (h = new db(this, p)), (this.Rh[h.name] = h), this.Fd.push(h)
    b = 0
    for (g = this.Fd.length; b < g; b++) this.Fd[b].pa()
    b = 0
    for (g = this.lh.length; b < g; b++) this.lh[b].pa()
    this.lh.length = 0
    this.Vh = e[7]
    this.vc = e[8]
    this.rb = e[9]
    this.qb = e[10]
    this.Vf = 1
    this.Mm = e[12]
    this.ka = e[13]
    this.ek = e[14]
    this.iq = e[15]
    b = e[16]
    2 === b && (b = this.Bg ? 1 : 0)
    this.oh = 0 !== b
    this.On = e[19]
    this.nj = Date.now()
  }
  d.prototype.mn = function (b) {
    var k, g
    k = 0
    for (g = this.bd.length; k < g; k++) if (this.bd[k].xm === b) return this.bd[k]
    return c
  }
  d.prototype.Yj = function () {
    var b = 0,
      k = 0,
      g = a,
      h,
      r
    h = 0
    for (r = this.bd.length; h < r; h++) {
      var u = this.bd[h].gk
      if (!u || 0 >= u) u = 5e4
      b += u
      this.bd[h].complete || this.bd[h].loaded ? (k += u) : (g = f)
    }
    this.Wd = 0 == b ? 0 : k / b
    return g
  }
  d.prototype.go = function () {
    if (this.T || this.u) {
      var b = this.T || this.Ni
      this.fb && this.rl()
      this.Wd = 0
      this.$k = -1
      if (this.Yj()) this.Mn()
      else {
        var k = Date.now() - this.nj
        if (3 !== this.tf && 500 <= k && this.$k != this.Wd) {
          b.clearRect(0, 0, this.width, this.height)
          var k = this.width / 2,
            g = this.height / 2,
            h = 0 === this.tf && this.Be.complete,
            r = 40,
            u = 0,
            z = 80
          h && ((z = this.Be.width), (r = z / 2), (u = this.Be.height / 2), b.drawImage(this.Be, ka(k - r), ka(g - u)))
          1 >= this.tf
            ? ((k = ka(k - r) + 0.5),
              (g = ka(g + (u + (h ? 12 : 0))) + 0.5),
              (b.fillStyle = "DodgerBlue"),
              b.fillRect(k, g, Math.floor(z * this.Wd), 6),
              (b.strokeStyle = "black"),
              b.strokeRect(k, g, z, 6),
              (b.strokeStyle = "white"),
              b.strokeRect(k - 1, g - 1, z + 2, 8))
            : 2 === this.tf &&
              ((b.font = "12pt Arial"),
              (b.fillStyle = "#999"),
              (b.fq = "middle"),
              (h = Math.round(100 * this.Wd) + "%"),
              (r = b.measureText ? b.measureText(h) : c),
              b.fillText(h, k - (r ? r.width : 0) / 2, g))
          this.$k = this.Wd
        }
        setTimeout(
          (function (b) {
            return function () {
              b.go()
            }
          })(this),
          100
        )
      }
    }
  }
  d.prototype.Mn = function () {
    this.fb && (this.canvas.parentNode.removeChild(this.fb), (this.fb = this.Ni = c))
    this.nj = Date.now()
    this.sf = Ra()
    var b, k, g
    if (this.Bj) {
      b = 0
      for (k = this.v.length; b < k; b++) (g = this.v[b]), !g.O && !g.ki && g.na.Ag && g.P()
    } else this.pf = f
    b = 0
    for (k = this.Ae.length; b < k; b++) this.Ae[b].ym()
    2 <= this.Qc && (this.Vf = this.width / this.height > this.rb / this.qb ? this.height / this.qb : this.width / this.rb)
    this.uk ? this.ti[this.uk].mj() : this.Ae[0].mj()
    this.Bj || ((this.Ig = 1), this.trigger(A.prototype.c.Jj, c))
    this.hb()
    this.Gb && AppMobi.webview.execute("onGameReady();")
  }
  var l =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame
  d.prototype.hb = function () {
    if (this.Sn) {
      var b = jQuery(window).width(),
        k = jQuery(window).height()
      if (this.ze !== b || this.ye !== k) (this.ze = b), (this.ye = k), this.setSize(b, k)
    }
    b = Ra()
    this.pf && ((k = this.Yj()), (this.Ig = this.Wd), k && ((this.pf = f), (this.Wd = 1), this.trigger(A.prototype.c.Jj, c)))
    this.Zn()
    if ((this.R || this.Md) && !this.ni)
      (this.R = f),
        this.u ? this.Cb() : this.oc(),
        this.fh &&
          (this.canvas && this.canvas.toDataURL && ((this.Ko = this.canvas.toDataURL(this.fh[0], this.fh[1])), this.trigger(A.prototype.c.Xl, c)),
          (this.fh = c))
    this.ih++
    this.Sh++
    this.kg++
    this.Lg += Ra() - b
    this.of || (l ? (this.Yi = l(this.Fl, this.canvas)) : (this.vj = setTimeout(this.Fl, this.Nd ? 1 : 16)))
  }
  d.prototype.Zn = function () {
    var b, k, g, h, r, u, z, p, d
    b = Ra()
    1e3 <= b - this.sf && ((this.sf += 1e3), (this.Xh = this.kg), (this.kg = 0), (this.Gh = this.Lg), (this.Lg = 0))
    this.fl &&
      (0 !== this.Eg &&
        ((k = b - this.Eg),
        0 === k
          ? (this.Xo++, 10 <= this.jq && (this.fl = f), (this.jd = 1 / 60))
          : ((this.jd = k / 1e3), 0.5 < this.jd ? (this.jd = 0) : 0.1 < this.jd && (this.jd = 0.1))),
      (this.Eg = b))
    this.Ed = this.jd * this.Hf
    this.Uc.add(this.Ed)
    b = document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || this.ug
    2 <= this.Qc || (b && 0 < this.Yh)
      ? ((this.Vf = this.width / this.height > this.rb / this.qb ? this.height / this.qb : this.width / this.rb),
        this.oa && (this.oa.Fo(this.oa.scrollX), this.oa.Go(this.oa.scrollY)))
      : (this.Vf = 1)
    this.tb()
    this.Yb++
    this.ae.Ao()
    this.Yb--
    this.tb()
    this.Yb++
    b = 0
    for (k = this.v.length; b < k; b++)
      if (((z = this.v[b]), !(z.O || (!z.Sa.length && !z.ja.length)))) {
        g = 0
        for (h = z.f.length; g < h; g++) {
          p = z.f[g]
          r = 0
          for (u = p.ua.length; r < u; r++) p.ua[r].hb()
        }
      }
    b = 0
    for (k = this.v.length; b < k; b++)
      if (((z = this.v[b]), !(z.O || (!z.Sa.length && !z.ja.length)))) {
        g = 0
        for (h = z.f.length; g < h; g++) {
          p = z.f[g]
          r = 0
          for (u = p.ua.length; r < u; r++) (d = p.ua[r]), d.to && d.to()
        }
      }
    g = this.Ii.Jf()
    b = 0
    for (k = g.length; b < k; b++) g[b].hb()
    this.Yb--
    for (b = 0; this.qe && 10 > b++; ) {
      this.oa.Mo()
      g = 0
      for (h = this.v.length; g < h; g++) (z = this.v[g]), z.zj && -1 === this.qe.lf.indexOf(z) && z.zj()
      this.qe.mj()
      b = 0
      for (k = this.v.length; b < k; b++)
        if (((z = this.v[b]), z.global || z.na.kj)) {
          g = 0
          for (h = z.f.length; g < h; g++) (p = z.f[g]), p.jl && p.jl()
        }
      this.si = this.R = a
      this.tb()
    }
    b = 0
    for (k = this.Fd.length; b < k; b++) this.Fd[b].di = f
    this.oa.dg && this.oa.dg.za()
    this.yo.length = 0
    this.si = f
    this.Yb++
    b = 0
    for (k = this.v.length; b < k; b++)
      if (((z = this.v[b]), !(z.O || (!z.Sa.length && !z.ja.length)))) {
        g = 0
        for (h = z.f.length; g < h; g++) {
          p = z.f[g]
          r = 0
          for (u = p.ua.length; r < u; r++) (d = p.ua[r]), d.tj && d.tj()
        }
      }
    g = this.Ji.Jf()
    b = 0
    for (k = g.length; b < k; b++) g[b].tj()
    this.Yb--
  }
  d.prototype.uj = function (b) {
    this.Ii.add(b)
  }
  d.prototype.Oo = function (b) {
    this.Ji.add(b)
  }
  d.prototype.rn = function (b) {
    return !b || -1 === b.Og ? this.Ed : this.jd * b.Og
  }
  d.prototype.oc = function () {
    this.oa.oc(this.T)
    this.Gb && this.T.present()
  }
  d.prototype.Cb = function () {
    this.oa.Cb(this.u)
  }
  d.prototype.We = function (b) {
    var k, g
    if (!this.mc.contains(b)) {
      this.mc.add(b)
      if (b.ob) {
        k = 0
        for (g = b.siblings.length; k < g; k++) this.We(b.siblings[k])
      }
      this.ii && this.mc.Kf.push(b)
      this.Yb++
      this.trigger(Object.getPrototypeOf(b.type.na).c.Yl, b)
      this.Yb--
    }
  }
  d.prototype.tb = function () {
    var b, k, g, h, r, u, d, p, l, y
    this.ii = a
    h = 0
    for (u = this.lc.length; h < u; h++) {
      b = this.lc[h]
      k = b.type
      k.f.push(b)
      k.$d = a
      r = 0
      for (d = k.ja.length; r < d; r++) k.ja[r].f.push(b), (k.ja[r].$d = a)
    }
    this.lc.length = 0
    u = this.mc.Jf()
    for (h = 0; h < u.length; h++) {
      b = u[h]
      k = b.type
      g = k.f
      r = 0
      for (d = this.mk.length; r < d; r++) this.mk[r](b)
      wa(g, b)
      b.j && (ta(b.j.f, b.Eb()), (b.j.Dc = a))
      r = 0
      for (d = k.ja.length; r < d; r++) wa(k.ja[r].f, b), (k.ja[r].$d = a)
      if (b.ua) {
        r = 0
        for (d = b.ua.length; r < d; r++) (g = b.ua[r]), g.Ne && g.Ne(), g.Xf.Gi.remove(b)
      }
      this.Ii.remove(b)
      this.Ji.remove(b)
      r = 0
      for (d = this.ae.Cc.length; r < d; r++)
        if (((l = this.ae.Cc[r]), l.$c.hasOwnProperty(k.index) && wa(l.$c[k.index].mf, b), !k.O)) {
          g = 0
          for (p = k.ja.length; g < p; g++) (y = k.ja[g]), l.$c.hasOwnProperty(y.index) && wa(l.$c[y.index].mf, b)
        }
      b.Ne && b.Ne()
      this.Qg--
      64 > k.bg.length && k.bg.push(b)
      k.$d = a
    }
    this.mc.nf() || (this.R = a)
    this.mc.clear()
    this.ii = f
  }
  d.prototype.hk = function (b, k, g, h) {
    if (b.O) {
      var r = ka(Math.random() * b.Ng.length)
      return this.hk(b.Ng[r], k, g, h)
    }
    return !b.nc ? c : this.re(b.nc, k, f, g, h)
  }
  var b = []
  d.prototype.re = function (e, k, g, h, r, u) {
    var d, p, l, y
    if (!e) return c
    var x = this.v[e[1]],
      B = x.na.Ag
    if ((this.pf && B && !x.ki) || (B && !this.u && 11 === e[0][11])) return c
    B || (k = c)
    var w
    x.bg.length ? ((w = x.bg.pop()), (w.Kb = a), x.na.da.call(w, x)) : ((w = new x.na.da(x)), (w.Kb = f))
    w.uid = this.Pg
    this.Pg++
    w.kf = 0
    w.pg = Qb
    x.$d = a
    l = e[2]
    if (w.Kb) {
      d = 0
      for (p = l.length; d < p; d++) w.Xb[d] = l[d]
      Qa(w.Db)
    } else (w.Xb = l.slice(0)), (w.Db = {})
    if (B) {
      var t = e[0]
      w.x = ca(h) ? t[0] : h
      w.y = ca(r) ? t[1] : r
      w.Ol = t[2]
      w.width = t[3]
      w.height = t[4]
      w.depth = t[5]
      w.m = t[6]
      w.opacity = t[7]
      w.sc = t[8]
      w.tc = t[9]
      w.kc = t[10]
      d = t[11]
      !this.u && x.U.length && (w.kc = d)
      w.$f = Wa(w.kc)
      this.w && Xa(w, w.kc, this.w)
      if (w.Kb) {
        d = 0
        for (p = t[12].length; d < p; d++) {
          l = 0
          for (y = t[12][d].length; l < y; l++) w.Va[d][l] = t[12][d][l]
        }
        w.N.set(0, 0, 0, 0)
        w.Sb.hj(w.N)
        w.Wf.length = 0
      } else {
        w.Va = t[12].slice(0)
        d = 0
        for (p = w.Va.length; d < p; d++) w.Va[d] = t[12][d].slice(0)
        w.M = []
        w.me = []
        w.me.length = x.U.length
        w.N = new ma(0, 0, 0, 0)
        w.Sb = new na()
        w.Wf = []
        w.Xa = Sb
        w.Qp = Tb
        w.hd = Ub
        w.cc = Vb
        w.Eb = Wb
      }
      d = 0
      for (p = x.U.length; d < p; d++) w.me[d] = a
      w.Ue = Xb
      w.Ue()
      w.Ml = !!w.M.length
      w.Ah = a
      w.visible = a
      w.Og = -1
      w.j = k
      w.rh = k.f.length
      "undefined" === typeof w.Kc && (w.Kc = c)
      this.R = w.wm = a
    }
    w.toString = Rb
    var n
    d = b.length = 0
    for (p = x.ja.length; d < p; d++) b.push.apply(b, x.ja[d].Sa)
    b.push.apply(b, x.Sa)
    if (w.Kb) {
      d = 0
      for (p = b.length; d < p; d++) {
        var F = b[d]
        n = w.ua[d]
        n.Kb = a
        F.Xf.da.call(n, F, w)
        t = e[3][d]
        l = 0
        for (y = t.length; l < y; l++) n.V[l] = t[l]
        n.P()
        F.Xf.Gi.add(w)
      }
    } else {
      w.ua = []
      d = 0
      for (p = b.length; d < p; d++) (F = b[d]), (n = new F.Xf.da(F, w)), (n.Kb = f), (n.V = e[3][d].slice(0)), n.P(), w.ua.push(n), F.Xf.Gi.add(w)
    }
    t = e[4]
    if (w.Kb) {
      d = 0
      for (p = t.length; d < p; d++) w.V[d] = t[d]
    } else w.V = t.slice(0)
    this.lc.push(w)
    k && k.f.push(w)
    this.Qg++
    if (x.ob) {
      if (((w.ob = a), w.Kb ? (w.siblings.length = 0) : (w.siblings = []), !g && !u)) {
        d = 0
        for (p = x.vb.length; d < p; d++)
          if (x.vb[d] !== x) {
            if (!x.vb[d].nc) return c
            w.siblings.push(this.re(x.vb[d].nc, k, f, B ? w.x : h, B ? w.y : r, a))
          }
        d = 0
        for (p = w.siblings.length; d < p; d++) {
          w.siblings[d].siblings.push(w)
          for (l = 0; l < p; l++) d !== l && w.siblings[d].siblings.push(w.siblings[l])
        }
      }
    } else (w.ob = f), (w.siblings = c)
    w.P()
    d = 0
    for (p = w.ua.length; d < p; d++) w.ua[d].so && w.ua[d].so()
    return w
  }
  d.prototype.ng = function (b) {
    var d, g
    d = 0
    for (g = this.oa.Z.length; d < g; d++) {
      var h = this.oa.Z[d]
      if (h.name.toLowerCase() === b.toLowerCase()) return h
    }
    return c
  }
  d.prototype.te = function (b) {
    b = ka(b)
    0 > b && (b = 0)
    b >= this.oa.Z.length && (b = this.oa.Z.length - 1)
    return this.oa.Z[b]
  }
  d.prototype.un = function (b) {
    return da(b) ? this.te(b) : this.ng(b.toString())
  }
  d.prototype.Eh = function (b) {
    var d, g
    d = 0
    for (g = b.length; d < g; d++) b[d].K().L = a
  }
  d.prototype.Af = function (b) {
    var d, g
    d = 0
    for (g = b.length; d < g; d++) b[d].Af()
  }
  d.prototype.Xd = function (b) {
    var d, g
    d = 0
    for (g = b.length; d < g; d++) b[d].Xd()
  }
  d.prototype.wc = function (b) {
    var d, g
    d = 0
    for (g = b.length; d < g; d++) b[d].wc()
  }
  d.prototype.No = function (b, d, g) {
    var h = b.K(),
      r,
      u,
      z,
      p,
      l,
      y
    if (h.L) {
      h.L = f
      r = h.f.length = 0
      for (p = b.f.length; r < p; r++) (z = b.f[r]), z.cc(), (l = z.j.jb(d, g, a)), (y = z.j.jb(d, g, f)), z.hd(l, y) && h.f.push(z)
    } else {
      r = u = 0
      for (p = h.f.length; r < p; r++) (z = h.f[r]), z.cc(), (l = z.j.jb(d, g, a)), (y = z.j.jb(d, g, f)), z.hd(l, y) && ((h.f[u] = h.f[r]), u++)
      h.f.length = u
    }
    b.ne()
    return h.ci()
  }
  new na()
  var y = [],
    t = -1
  d.prototype.trigger = function (b, d, g) {
    if (!this.oa) return f
    var h = this.oa.dg
    if (!h) return f
    t++
    t === y.length ? y.push(new Sa()) : y[t].clear()
    b = this.Il(b, d, h, g)
    t--
    return b
  }
  d.prototype.Il = function (b, d, g, h) {
    var r = y[t]
    if (r.contains(g)) return f
    r.add(g)
    var r = g.Mk.Jf(),
      u = f,
      z,
      p,
      l
    z = 0
    for (p = r.length; z < p; z++) (l = this.Il(b, d, r[z], h)), (u = u || l)
    if (d) {
      l = this.xj(b, d, d.type.name, g, h)
      u = u || l
      z = 0
      for (p = d.type.ja.length; z < p; z++) (l = this.xj(b, d, d.type.ja[z].name, g, h)), (u = u || l)
    } else (l = this.xj(b, d, "system", g, h)), (u = u || l)
    return u
  }
  d.prototype.xj = function (b, d, g, h, r) {
    var u,
      z = f,
      p = f,
      p = "undefined" !== typeof r,
      l = (p ? h.sk : h.Jl)[g]
    if (!l) return z
    var y = c
    h = 0
    for (u = l.length; h < u; h++)
      if (l[h].method == b) {
        y = l[h].fg
        break
      }
    if (!y) return z
    b = p ? y[r] : y
    if (!b) return c
    h = 0
    for (u = b.length; h < u; h++) (r = b[h][0]), (p = b[h][1]), (p = this.kn(d, g, r, p)), (z = z || p)
    return z
  }
  d.prototype.kn = function (b, d, g, h) {
    var r,
      u,
      z = f
    this.yj++
    var p = this.Ja().Da
    p && this.Af(p.sd)
    var l = 1 < this.yj
    this.Af(g.sd)
    l && this.wo()
    var y = this.Xg(g)
    y.Da = g
    b && ((r = this.types[d].K()), (r.L = f), (r.f.length = 1), (r.f[0] = b), this.types[d].ne())
    b = a
    if (g.parent) {
      d = y.El
      for (r = g.parent; r; ) d.push(r), (r = r.parent)
      d.reverse()
      r = 0
      for (u = d.length; r < u; r++)
        if (!d[r].Co()) {
          b = f
          break
        }
    }
    b && (this.Sh++, g.ac ? g.Bo(h) : g.za(), (z = z || y.xe))
    this.Tg()
    l && this.ro()
    this.wc(g.sd)
    p && this.wc(p.sd)
    0 === this.Yb && 0 === t && !this.li && (!this.mc.nf() || this.lc.length) && this.tb()
    this.yj--
    return z
  }
  d.prototype.xk = function () {
    var b = this.Ja()
    return b.Da.ea[b.va]
  }
  d.prototype.wo = function () {
    this.Kg++
    this.Kg >= this.Ai.length && this.Ai.push([])
  }
  d.prototype.ro = function () {
    this.Kg--
  }
  d.prototype.yk = function () {
    return this.Ai[this.Kg]
  }
  d.prototype.Xg = function (b) {
    this.eg++
    this.eg >= this.Qh.length && this.Qh.push(new eb())
    var d = this.Ja()
    d.reset(b)
    return d
  }
  d.prototype.Tg = function () {
    this.eg--
  }
  d.prototype.Ja = function () {
    return this.Qh[this.eg]
  }
  d.prototype.Xi = function (b) {
    this.Mg++
    this.Mg >= this.Ge.length && this.Ge.push(aa({ name: b, index: 0, Aa: f }))
    var d = this.zk()
    d.name = b
    d.index = 0
    d.Aa = f
    return d
  }
  d.prototype.Si = function () {
    this.Mg--
  }
  d.prototype.zk = function () {
    return this.Ge[this.Mg]
  }
  d.prototype.Bk = function (b, d) {
    for (var g, h, r, u, z, p; d; ) {
      g = 0
      for (h = d.Mb.length; g < h; g++) if (((p = d.Mb[g]), p instanceof fb && b.toLowerCase() === p.name.toLowerCase())) return p
      d = d.parent
    }
    g = 0
    for (h = this.Fd.length; g < h; g++) {
      z = this.Fd[g]
      r = 0
      for (u = z.ld.length; r < u; r++) if (((p = z.ld[r]), p instanceof fb && b.toLowerCase() === p.name.toLowerCase())) return p
    }
    return c
  }
  gb = function (b) {
    return new d(document.getElementById(b))
  }
  hb = function (b, k) {
    return new d({ dc: a, width: b, height: k })
  }
  window.cr_createRuntime = gb
  window.cr_createDCRuntime = hb
  window.createCocoonJSRuntime = function () {
    window.c2cocoonjs = a
    var b = document.createElement("screencanvas")
    document.body.appendChild(b)
    b = new d(b)
    window.c2runtime = b
    window.addEventListener("orientationchange", function () {
      window.c2runtime.setSize(window.innerWidth, window.innerHeight)
    })
    return b
  }
})()
window.cr_getC2Runtime = function () {
  var d = document.getElementById("c2canvas")
  if (d) return d.c2runtime
  if (window.c2runtime) return window.c2runtime
}
window.cr_sizeCanvas = function (d, n) {
  if (!(0 === d || 0 === n)) {
    var l = window.cr_getC2Runtime()
    l && l.setSize(d, n)
  }
}
window.cr_setSuspended = function (d) {
  var n = window.cr_getC2Runtime()
  n && n.setSuspended(d)
}
;(function () {
  function d(b, d) {
    this.b = b
    this.dg = c
    this.scrollX = this.b.rb / 2
    this.scrollY = this.b.qb / 2
    this.scale = 1
    this.m = 0
    this.name = d[0]
    this.width = d[1]
    this.height = d[2]
    this.Kl = d[3]
    this.Cl = d[4]
    var l = d[5],
      e,
      k
    this.Z = []
    this.lf = []
    e = 0
    for (k = l.length; e < k; e++) {
      var g = new ib(this, l[e])
      g.il = e
      this.Z.push(g)
    }
    l = d[6]
    this.Ld = []
    e = 0
    for (k = l.length; e < k; e++) {
      var g = l[e],
        h = this.b.v[g[1]]
      h.nc || (h.nc = g)
      this.Ld.push(g)
      ;-1 === this.lf.indexOf(h) && this.lf.push(h)
    }
    this.U = []
    this.M = []
    this.Va = []
    e = 0
    for (k = d[7].length; e < k; e++) this.U.push({ id: d[7][e][0], name: d[7][e][1], Ra: -1, af: a, index: e }), this.Va.push(d[7][e][2].slice(0))
    this.Ue()
    this.pd = new ma(0, 0, 1, 1)
    this.Zi = new ma(0, 0, 1, 1)
  }
  function n(b, d) {
    this.$ = b
    this.b = b.b
    this.f = []
    this.scale = 1
    this.m = 0
    this.Dd = f
    this.ad = new ma(0, 0, 0, 0)
    this.Gl = new na()
    this.ec = this.hc = this.gc = this.fc = 0
    this.Dc = f
    this.name = d[0]
    this.index = d[1]
    this.visible = d[2]
    this.pe = d[3]
    this.If = d[4]
    this.Oe = d[5]
    this.Pe = d[6]
    this.opacity = d[7]
    this.Wh = d[8]
    this.ee = d[9]
    this.kc = d[10]
    this.Lm = d[11]
    this.$f = "source-over"
    this.Ua = this.Ya = 0
    this.qd = f
    var l = d[12],
      e,
      k
    this.ue = []
    e = 0
    for (k = l.length; e < k; e++) {
      var g = l[e],
        h = this.b.v[g[1]]
      h.nc || (h.nc = g)
      this.ue.push(g)
      ;-1 === this.$.lf.indexOf(h) && this.$.lf.push(h)
    }
    this.U = []
    this.M = []
    this.Va = []
    e = 0
    for (k = d[13].length; e < k; e++) this.U.push({ id: d[13][e][0], name: d[13][e][1], Ra: -1, af: a, index: e }), this.Va.push(d[13][e][2].slice(0))
    this.Ue()
    this.pd = new ma(0, 0, 1, 1)
    this.Zi = new ma(0, 0, 1, 1)
  }
  d.prototype.Kk = function () {
    var b = this.Z[0]
    return !b.If && 1 === b.opacity && !b.Wh && b.visible
  }
  d.prototype.Ue = function () {
    this.M.length = 0
    var b, d, l
    b = 0
    for (d = this.U.length; b < d; b++) (l = this.U[b]), l.af && this.M.push(l)
  }
  var l = []
  d.prototype.mj = function () {
    this.Cl && (this.dg = this.b.Rh[this.Cl])
    this.b.oa = this
    this.scrollX = this.b.rb / 2
    this.scrollY = this.b.qb / 2
    var b, d, t, e, k, g, h
    b = 0
    for (t = this.b.v.length; b < t; b++)
      if (((d = this.b.v[b]), !d.O)) {
        k = d.f
        d = 0
        for (e = k.length; d < e; d++)
          (g = k[d]), g.j && ((h = g.j.il), h >= this.Z.length && (h = this.Z.length - 1), (g.j = this.Z[h]), g.j.f.push(g), (g.j.Dc = a))
      }
    b = l.length = 0
    for (t = this.Z.length; b < t; b++)
      (d = this.Z[b]),
        d.zm(),
        (d.Dd = a),
        (e = d.jb(0, 0, a)),
        (g = d.jb(0, 0, f)),
        (d.Dd = f),
        this.b.vc && ((e = (e + 0.5) | 0), (g = (g + 0.5) | 0)),
        d.bj(e, g, c)
    for (b = 0; b < l.length; b++)
      if (((g = l[b]), g.type.ob)) {
        t = g.pg()
        d = 0
        for (e = g.type.vb.length; d < e; d++)
          (k = g.type.vb[d]),
            g.type !== k &&
              (k.f.length > t
                ? g.siblings.push(k.f[t])
                : k.nc && ((h = this.b.re(k.nc, g.j, a, g.x, g.y, a)), this.b.tb(), k.mh(), g.siblings.push(h), l.push(h)))
      }
    b = 0
    for (t = this.Ld.length; b < t; b++) this.b.re(this.Ld[b], c, a)
    this.b.qe = c
    this.b.tb()
    if (this.b.T && !this.b.Wa) {
      b = 0
      for (t = this.b.v.length; b < t; b++) (k = this.b.v[b]), !k.O && k.f.length && k.Ti && k.Ti(this.b.T)
    }
    b = 0
    for (t = l.length; b < t; b++) (g = l[b]), this.b.trigger(Object.getPrototypeOf(g.type.na).c.ie, g)
    l.length = 0
    this.b.trigger(A.prototype.c.je, c)
  }
  d.prototype.ym = function () {
    var b, d, l, e, k
    d = b = 0
    for (l = this.Ld.length; b < l; b++) (e = this.Ld[b]), (k = this.b.v[e[1]]), k.global ? this.b.re(e, c, a) : ((this.Ld[d] = e), d++)
    this.Ld.length = d
  }
  d.prototype.Mo = function () {
    this.b.trigger(A.prototype.c.bm, c)
    this.b.ae.Cc.length = 0
    var b, d, l, e, k, g
    b = 0
    for (d = this.Z.length; b < d; b++) {
      k = this.Z[b].f
      l = 0
      for (e = k.length; l < e; l++) (g = k[l]), g.type.global || this.b.We(g)
      this.b.tb()
      k.length = 0
      this.Z[b].Dc = a
    }
    b = 0
    for (d = this.b.v.length; b < d; b++)
      if (((k = this.b.v[b]), !k.global && !k.na.Ag && !k.na.kj && !k.O)) {
        l = 0
        for (e = k.f.length; l < e; l++) this.b.We(k.f[l])
        this.b.tb()
      }
  }
  d.prototype.oc = function (b) {
    b.globalAlpha = 1
    b.globalCompositeOperation = "source-over"
    this.b.ek && !this.Kk() && b.clearRect(0, 0, this.b.width, this.b.height)
    var d, l, e
    d = 0
    for (l = this.Z.length; d < l; d++) (e = this.Z[d]), e.visible && 0 < e.opacity && 11 !== e.kc && e.oc(b)
  }
  d.prototype.Cb = function (b) {
    var d = 0 < this.M.length || this.b.Ve
    if (d) {
      this.b.Zb || (this.b.Zb = b.Lc(this.b.width, this.b.height, this.b.ka))
      if (this.b.Zb.df !== this.b.width || this.b.Zb.cf !== this.b.height)
        b.deleteTexture(this.b.Zb), (this.b.Zb = b.Lc(this.b.width, this.b.height, this.b.ka))
      b.Yc(this.b.Zb)
    }
    this.b.ek && !this.Kk() && b.clear(0, 0, 0, 0)
    var l, e
    l = 0
    for (e = this.Z.length; l < e; l++) this.Z[l].visible && 0 < this.Z[l].opacity && this.Z[l].Cb(b)
    d &&
      (1 >= this.M.length
        ? (1 === this.M.length
            ? ((d = this.M[0].index),
              b.zc(this.M[0].Ra),
              b.Qe(c, 1 / this.b.width, 1 / this.b.height, 0, 0, 1, 1, this.scale, this.Va[d]),
              b.Wg(this.M[0].Ra) && (this.b.R = a))
            : b.zc(0),
          b.Yc(c),
          b.Zd(1),
          b.yb(this.b.Zb),
          b.yl(),
          b.yc(),
          b.Ac(),
          (d = this.b.width / 2),
          (l = this.b.height / 2),
          b.Yg(-d, l, d, l, d, -l, -d, -l),
          b.yb(c))
        : this.$i(b, c, c, c))
    b.uo()
  }
  d.prototype.hf = function () {
    return 0 < this.M.length || this.b.Ve ? this.b.Zb : c
  }
  d.prototype.Ck = function () {
    var b = this.Z[0].mb(),
      d,
      l,
      e
    d = 1
    for (l = this.Z.length; d < l; d++) (e = this.Z[d]), (0 === e.Oe && 0 === e.Pe) || (e.mb() < b && (b = e.mb()))
    return b
  }
  d.prototype.Fo = function (b) {
    if (!this.Kl) {
      var d = (this.b.width * (1 / this.Ck())) / 2
      b > this.width - d && (b = this.width - d)
      b < d && (b = d)
    }
    this.scrollX !== b && ((this.scrollX = b), (this.b.R = a))
  }
  d.prototype.Go = function (b) {
    if (!this.Kl) {
      var d = (this.b.height * (1 / this.Ck())) / 2
      b > this.height - d && (b = this.height - d)
      b < d && (b = d)
    }
    this.scrollY !== b && ((this.scrollY = b), (this.b.R = a))
  }
  d.prototype.$i = function (b, d, l, e) {
    var k = l ? l.M : d ? d.M : this.M,
      g = l ? l.j.mb() : d ? d.mb() : 1,
      h = this.b.Zh,
      r,
      u,
      z,
      p,
      C = 0,
      E = 1,
      x,
      B = this.b.width,
      w = this.b.height,
      n = B / 2,
      O = w / 2,
      F = d ? d.pd : this.pd,
      J = d ? d.Zi : this.Zi,
      K = 0,
      M = 0,
      L = 0,
      Z = 0,
      N = B,
      Q = B,
      D = w,
      V = w,
      X = (z = 0),
      P = l ? l.j.Rc() : 0
    if (l) {
      r = 0
      for (u = k.length; r < u; r++) (z += b.xn(k[r].Ra)), (X += b.yn(k[r].Ra))
      p = l.N
      K = d.Ea(p.left, p.top, a)
      L = d.Ea(p.left, p.top, f)
      N = d.Ea(p.right, p.bottom, a)
      D = d.Ea(p.right, p.bottom, f)
      0 !== P &&
        ((r = d.Ea(p.right, p.top, a)),
        (u = d.Ea(p.right, p.top, f)),
        (M = d.Ea(p.left, p.bottom, a)),
        (Z = d.Ea(p.left, p.bottom, f)),
        (p = Math.min(K, N, r, M)),
        (N = Math.max(K, N, r, M)),
        (K = p),
        (p = Math.min(L, D, u, Z)),
        (D = Math.max(L, D, u, Z)),
        (L = p))
      K -= z
      L -= X
      N += z
      D += X
      J.left = K / B
      J.top = 1 - L / w
      J.right = N / B
      J.bottom = 1 - D / w
      M = K = Math.floor(K)
      Z = L = Math.floor(L)
      Q = N = Math.ceil(N)
      V = D = Math.ceil(D)
      M -= z
      Z -= X
      Q += z
      V += X
      0 > K && (K = 0)
      0 > L && (L = 0)
      N > B && (N = B)
      D > w && (D = w)
      0 > M && (M = 0)
      0 > Z && (Z = 0)
      Q > B && (Q = B)
      V > w && (V = w)
      F.left = K / B
      F.top = 1 - L / w
      F.right = N / B
      F.bottom = 1 - D / w
    } else (F.left = J.left = 0), (F.top = J.top = 0), (F.right = J.right = 1), (F.bottom = J.bottom = 1)
    X = (l && (((l.m || P) && b.zf(k[0].Ra)) || 0 !== z || 0 !== X || 1 !== l.opacity || l.type.na.hl)) || (d && !l && 1 !== d.opacity)
    b.yl()
    if (X) {
      h[C] || (h[C] = b.Lc(B, w, this.b.ka))
      if (h[C].df !== B || h[C].cf !== w) b.deleteTexture(h[C]), (h[C] = b.Lc(B, w, this.b.ka))
      b.zc(0)
      b.Yc(h[C])
      x = V - Z
      b.clearRect(M, w - Z - x, Q - M, x)
      l ? l.Cb(b) : (b.yb(this.b.xb), b.Zd(d.opacity), b.yc(), b.translate(-n, -O), b.Ac(), b.xc(K, D, N, D, N, L, K, L, F))
      J.left = J.top = 0
      J.right = J.bottom = 1
      l && ((p = F.top), (F.top = F.bottom), (F.bottom = p))
      C = 1
      E = 0
    }
    b.Zd(1)
    z = k.length - 1
    var P = b.Ui(k[z].Ra),
      G = 0
    r = 0
    for (u = k.length; r < u; r++) {
      h[C] || (h[C] = b.Lc(B, w, this.b.ka))
      if (h[C].df !== B || h[C].cf !== w) b.deleteTexture(h[C]), (h[C] = b.Lc(B, w, this.b.ka))
      b.zc(k[r].Ra)
      G = k[r].index
      b.Wg(k[r].Ra) && (this.b.R = a)
      0 == r && !X
        ? (b.Yc(h[C]),
          (x = V - Z),
          (p = w - Z - x),
          b.clearRect(M, p, Q - M, x),
          l
            ? (b.Qe(e, 1 / l.width, 1 / l.height, J.left, J.top, J.right, J.bottom, g, l.Va[G]), l.Cb(b))
            : (b.Qe(e, 1 / B, 1 / w, 0, 0, 1, 1, g, d ? d.Va[G] : this.Va[G]),
              b.yb(d ? this.b.xb : this.b.Zb),
              b.yc(),
              b.translate(-n, -O),
              b.Ac(),
              b.xc(K, D, N, D, N, L, K, L, F)),
          (J.left = J.top = 0),
          (J.right = J.bottom = 1),
          l && !P && ((p = D), (D = L), (L = p)))
        : (b.Qe(e, 1 / B, 1 / w, J.left, J.top, J.right, J.bottom, g, l ? l.Va[G] : d ? d.Va[G] : this.Va[G]),
          r === z && !P ? (l ? b.rd(l.Ya, l.Ua) : d && b.rd(d.Ya, d.Ua), b.Yc(e)) : (b.Yc(h[C]), (x = V - Z), (p = w - Z - x), b.clearRect(M, p, Q - M, x)),
          b.yb(h[E]),
          b.yc(),
          b.translate(-n, -O),
          b.Ac(),
          b.xc(K, D, N, D, N, L, K, L, F),
          r === z && !P && b.yb(c))
      C = 0 === C ? 1 : 0
      E = 0 === C ? 1 : 0
    }
    P &&
      (b.zc(0),
      l ? b.rd(l.Ya, l.Ua) : d && b.rd(d.Ya, d.Ua),
      b.Yc(e),
      b.yb(h[E]),
      b.yc(),
      b.translate(-n, -O),
      b.Ac(),
      l && 1 === k.length && !X ? b.xc(K, L, N, L, N, D, K, D, F) : b.xc(K, D, N, D, N, L, K, L, F),
      b.yb(c))
  }
  ab = d
  n.prototype.Ue = function () {
    this.M.length = 0
    var b, d, l
    b = 0
    for (d = this.U.length; b < d; b++) (l = this.U[b]), l.af && this.M.push(l)
  }
  n.prototype.zm = function () {
    var b, d, n, e
    d = b = 0
    for (n = this.ue.length; b < n; b++) (e = this.b.re(this.ue[b], this, a)), l.push(e), e && !e.type.global && ((this.ue[d] = this.ue[b]), d++)
    this.ue.length = d
    this.b.tb()
    !this.b.u && this.U.length && (this.kc = this.Lm)
    this.$f = Wa(this.kc)
    this.b.w && Xa(this, this.kc, this.b.w)
  }
  n.prototype.Ro = function () {
    if (this.Dc) {
      var b, d
      b = 0
      for (d = this.f.length; b < d; b++) this.f[b].rh = b
      this.Dc = f
    }
  }
  n.prototype.mb = function () {
    return this.vn() * this.b.Vf
  }
  n.prototype.vn = function () {
    return (this.scale * this.$.scale - 1) * this.ee + 1
  }
  n.prototype.Rc = function () {
    return this.Dd ? 0 : Da(this.$.m + this.m)
  }
  n.prototype.oc = function (b) {
    this.qd = this.Wh || 1 !== this.opacity || 0 !== this.kc
    var d = this.b.canvas,
      l = b
    b.globalAlpha = 1
    b.globalCompositeOperation = "source-over"
    this.qd &&
      (this.b.Gg ||
        ((this.b.Gg = document.createElement("canvas")),
        (d = this.b.Gg),
        (d.width = this.b.width),
        (d.height = this.b.height),
        (this.b.bl = d.getContext("2d"))),
      (d = this.b.Gg),
      (l = this.b.bl),
      d.width !== this.b.width && (d.width = this.b.width),
      d.height !== this.b.height && (d.height = this.b.height),
      this.If && l.clearRect(0, 0, this.b.width, this.b.height))
    this.If || ((l.fillStyle = "rgb(" + this.pe[0] + "," + this.pe[1] + "," + this.pe[2] + ")"), l.fillRect(0, 0, this.b.width, this.b.height))
    l.save()
    this.Dd = a
    var e = this.jb(0, 0, a),
      k = this.jb(0, 0, f)
    this.Dd = f
    this.b.vc && ((e = (e + 0.5) | 0), (k = (k + 0.5) | 0))
    this.bj(e, k, l)
    var g = this.mb()
    l.scale(g, g)
    l.translate(-e, -k)
    for (var h, e = 0, k = this.f.length; e < k; e++)
      if (((g = this.f[e]), g.visible && !(0 === g.width || 0 === g.height)))
        g.cc(), (h = g.N), h.right < this.fc || h.bottom < this.hc || h.left > this.gc || h.top > this.ec || ((l.globalCompositeOperation = g.$f), g.oc(l))
    l.restore()
    this.qd && ((b.globalCompositeOperation = this.$f), (b.globalAlpha = this.opacity), b.drawImage(d, 0, 0))
  }
  n.prototype.bj = function (b, d, l) {
    var e = this.mb()
    this.fc = b
    this.hc = d
    this.gc = b + this.b.width * (1 / e)
    this.ec = d + this.b.height * (1 / e)
    b = this.Rc()
    0 !== b &&
      (l && (l.translate(this.b.width / 2, this.b.height / 2), l.rotate(-b), l.translate(this.b.width / -2, this.b.height / -2)),
      this.ad.set(this.fc, this.hc, this.gc, this.ec),
      this.ad.offset((this.fc + this.gc) / -2, (this.hc + this.ec) / -2),
      this.Gl.Bl(this.ad, b),
      this.Gl.Zj(this.ad),
      this.ad.offset((this.fc + this.gc) / 2, (this.hc + this.ec) / 2),
      (this.fc = this.ad.left),
      (this.hc = this.ad.top),
      (this.gc = this.ad.right),
      (this.ec = this.ad.bottom))
  }
  n.prototype.Cb = function (b) {
    var d = this.b.width,
      l = this.b.height,
      e = 0,
      k = 0
    if ((this.qd = this.Wh || 1 !== this.opacity || 0 < this.M.length || 0 !== this.kc)) {
      this.b.xb || (this.b.xb = b.Lc(this.b.width, this.b.height, this.b.ka))
      if (this.b.xb.df !== this.b.width || this.b.xb.cf !== this.b.height)
        b.deleteTexture(this.b.xb), (this.b.xb = b.Lc(this.b.width, this.b.height, this.b.ka))
      b.Yc(this.b.xb)
      this.If && b.clear(0, 0, 0, 0)
    }
    this.If || b.clear(this.pe[0] / 255, this.pe[1] / 255, this.pe[2] / 255, 1)
    this.Dd = a
    var k = this.jb(0, 0, a),
      g = this.jb(0, 0, f)
    this.Dd = f
    this.b.vc && ((k = (k + 0.5) | 0), (g = (g + 0.5) | 0))
    this.bj(k, g, c)
    g = this.mb()
    b.yc()
    b.scale(g, g)
    b.cj(-this.Rc())
    b.translate((this.fc + this.gc) / -2, (this.hc + this.ec) / -2)
    b.Ac()
    var h, r, u
    h = 0
    for (r = this.f.length; h < r; h++)
      if (((u = this.f[h]), u.visible && !(0 === u.width || 0 === u.height)))
        if ((u.cc(), (e = u.N), !(e.right < this.fc || e.bottom < this.hc || e.left > this.gc || e.top > this.ec)))
          if (u.Ml)
            if (
              ((e = u.M[0].Ra),
              (k = u.M[0].index),
              1 === u.M.length && !b.Ui(e) && !b.vo(e) && ((!u.m && !u.j.Rc()) || !b.zf(e)) && 1 === u.opacity && !u.type.na.hl)
            ) {
              b.zc(e)
              b.rd(u.Ya, u.Ua)
              b.Wg(e) && (this.b.R = a)
              var z = 0,
                p = 0,
                C = 0,
                E = 0
              b.zf(e) &&
                ((e = u.N),
                (z = this.Ea(e.left, e.top, a)),
                (p = this.Ea(e.left, e.top, f)),
                (C = this.Ea(e.right, e.bottom, a)),
                (e = this.Ea(e.right, e.bottom, f)),
                (z /= d),
                (p = 1 - p / l),
                (C /= d),
                (E = 1 - e / l))
              b.Qe(this.qd ? this.b.xb : this.$.hf(), 1 / u.width, 1 / u.height, z, p, C, E, this.mb(), u.Va[k])
              u.Cb(b)
            } else
              this.$.$i(b, this, u, this.qd ? this.b.xb : this.$.hf()),
                b.yc(),
                b.scale(g, g),
                b.cj(-this.Rc()),
                b.translate((this.fc + this.gc) / -2, (this.hc + this.ec) / -2),
                b.Ac()
          else b.zc(0), b.rd(u.Ya, u.Ua), u.Cb(b)
    this.qd &&
      ((e = this.M.length ? this.M[0].Ra : 0),
      (k = this.M.length ? this.M[0].index : 0),
      0 === this.M.length || (1 === this.M.length && !b.Ui(e) && 1 === this.opacity)
        ? (1 === this.M.length
            ? (b.zc(e), b.Qe(this.$.hf(), 1 / this.b.width, 1 / this.b.height, 0, 0, 1, 1, this.mb(), this.Va[k]), b.Wg(e) && (this.b.R = a))
            : b.zc(0),
          b.Yc(this.$.hf()),
          b.Zd(this.opacity),
          b.yb(this.b.xb),
          b.rd(this.Ya, this.Ua),
          b.yc(),
          b.Ac(),
          (d = this.b.width / 2),
          (l = this.b.height / 2),
          b.Yg(-d, l, d, l, d, -l, -d, -l),
          b.yb(c))
        : this.$.$i(b, this, c, this.$.hf()))
  }
  n.prototype.jb = function (b, d, l) {
    var e = this.b.devicePixelRatio
    !this.b.Wa && this.b.oh && this.b.Qd && 0 < this.b.Qc && ((b *= e), (d *= e))
    var e = this.b.rb / 2,
      k = this.b.qb / 2,
      e = (this.$.scrollX - e) * this.Oe + e,
      k = (this.$.scrollY - k) * this.Pe + k,
      g = 1 / this.mb(),
      e = e - (this.b.width * g) / 2,
      k = k - (this.b.height * g) / 2,
      e = e + b * g,
      k = k + d * g
    d = this.Rc()
    0 !== d &&
      ((e -= this.$.scrollX),
      (k -= this.$.scrollY),
      (b = Math.cos(d)),
      (d = Math.sin(d)),
      (g = e * b - k * d),
      (k = k * b + e * d),
      (e = g + this.$.scrollX),
      (k += this.$.scrollY))
    return l ? e : k
  }
  n.prototype.Ea = function (b, d, l) {
    var e = this.Rc()
    if (0 !== e) {
      b -= this.$.scrollX
      d -= this.$.scrollY
      var k = Math.cos(-e),
        e = Math.sin(-e),
        g = b * k - d * e
      d = d * k + b * e
      b = g + this.$.scrollX
      d += this.$.scrollY
    }
    k = this.b.rb / 2
    e = this.b.qb / 2
    k = (this.$.scrollX - k) * this.Oe + k
    e = (this.$.scrollY - e) * this.Pe + e
    g = 1 / this.mb()
    k -= (this.b.width * g) / 2
    e -= (this.b.height * g) / 2
    k = (b - k) / g
    e = (d - e) / g
    b = this.b.devicePixelRatio
    !this.b.Wa && this.b.oh && this.b.Qd && 0 < this.b.Qc && ((k /= b), (e /= b))
    return l ? k : e
  }
  ib = n
})()
;(function () {
  function d(b, d) {
    var h,
      r = b.length
    switch (r) {
      case 0:
        return a
      case 1:
        return b[0] === d[0]
      case 2:
        return b[0] === d[0] && b[1] === d[1]
      default:
        for (h = 0; h < r; h++) if (b[h] !== d[h]) return f
        return a
    }
  }
  function n(b, d) {
    return b.index - d.index
  }
  function l(b) {
    var h, r, e, g
    2 === b.length ? b[0].index > b[1].index && ((h = b[0]), (b[0] = b[1]), (b[1] = h)) : 2 < b.length && b.sort(n)
    b.length >= p.length && (p.length = b.length + 1)
    p[b.length] || (p[b.length] = [])
    g = p[b.length]
    h = 0
    for (r = g.length; h < r; h++) if (((e = g[h]), d(b, e))) return e
    g.push(b)
    return b
  }
  function b(b, d) {
    this.b = b
    this.Jl = {}
    this.sk = {}
    this.di = f
    this.Mk = new Sa()
    this.name = d[0]
    var h = d[1]
    this.ld = []
    var r, e
    r = 0
    for (e = h.length; r < e; r++) this.Ok(h[r], c, this.ld)
  }
  function y(b) {
    this.type = b
    this.f = []
    this.ia = []
    this.L = a
  }
  function t(b, d, h) {
    this.sheet = b
    this.parent = d
    this.b = b.b
    this.S = []
    this.sd = []
    this.Lk = this.jh = this.wj = this.gi = this.group = this.lj = f
    this.ea = []
    this.yd = []
    this.Mb = []
    h[1]
      ? ((this.Hk = h[1][1].toLowerCase()), (this.group = a), (this.gi = !!h[1][0]), this.b.rm.push(this), (this.b.Tj[this.Hk.toLowerCase()] = this.gi))
      : ((this.Hk = ""), (this.gi = this.group = f))
    this.ac = h[2]
    var r = h[3]
    b = 0
    for (d = r.length; b < d; b++) {
      var e = new jb(this, r[b])
      this.ea.push(e)
      this.Uj(e.type)
    }
    r = h[4]
    b = 0
    for (d = r.length; b < d; b++) (e = new kb(this, r[b])), this.yd.push(e)
    if (6 === h.length) {
      h = h[5]
      b = 0
      for (d = h.length; b < d; b++) this.sheet.Ok(h[b], this, this.Mb)
    }
    this.wg = f
    this.ea.length && (this.wg = this.ea[0].type == c && this.ea[0].xa == A.prototype.c.ca)
  }
  function e(b, d) {
    var h, r, e
    if (b && (-1 === d.indexOf(b) && d.push(b), b.ob)) {
      h = 0
      for (r = b.vb.length; h < r; h++) (e = b.vb[h]), b !== e && -1 === d.indexOf(e) && d.push(e)
    }
  }
  function k(b, d) {
    this.Ab = b
    this.sheet = b.sheet
    this.b = b.b
    this.t = []
    this.G = []
    this.Db = {}
    this.xa = d[1]
    this.trigger = 0 < d[3]
    this.rk = 2 === d[3]
    this.He = d[4]
    this.tg = d[5]
    this.Xn = d[6]
    ;-1 === d[0]
      ? ((this.type = c), (this.za = this.ej), (this.bf = c), (this.Pa = -1))
      : ((this.type = this.b.v[d[0]]),
        (this.za = this.Xn ? this.Do : this.dj),
        d[2] ? ((this.bf = this.type.lg(d[2])), (this.Pa = this.type.$h(d[2]))) : ((this.bf = c), (this.Pa = -1)),
        this.Ab.parent && this.Ab.parent.bh())
    this.rk && (this.za = this.Eo)
    if (8 === d.length) {
      var h,
        r,
        e = d[7]
      h = 0
      for (r = e.length; h < r; h++) {
        var g = new lb(this, e[h])
        this.t.push(g)
      }
      this.G.length = e.length
    }
  }
  function g(b, d) {
    this.Ab = b
    this.sheet = b.sheet
    this.b = b.b
    this.t = []
    this.G = []
    this.Db = {}
    this.xa = d[1]
    ;-1 === d[0]
      ? ((this.type = c), (this.za = this.ej), (this.bf = c), (this.Pa = -1))
      : ((this.type = this.b.v[d[0]]),
        (this.za = this.dj),
        d[2] ? ((this.bf = this.type.lg(d[2])), (this.Pa = this.type.$h(d[2]))) : ((this.bf = c), (this.Pa = -1)))
    if (4 === d.length) {
      var h,
        r,
        e = d[3]
      h = 0
      for (r = e.length; h < r; h++) {
        var g = new lb(this, e[h])
        this.t.push(g)
      }
      this.G.length = e.length
    }
  }
  function h(b, d) {
    this.A = b
    this.Ab = b.Ab
    this.sheet = b.sheet
    this.b = b.b
    this.type = d[0]
    this.pc = c
    this.fk = this.td = 0
    this.$ = c
    this.key = 0
    this.object = c
    this.index = 0
    this.ph = this.Se = this.tk = this.Gd = this.Lf = c
    var h, r, e
    switch (d[0]) {
      case 0:
      case 7:
        this.pc = new mb(this, d[1])
        this.td = 0
        this.get = this.Dn
        break
      case 1:
        this.pc = new mb(this, d[1])
        this.td = 0
        this.get = this.En
        break
      case 5:
        this.pc = new mb(this, d[1])
        this.td = 0
        this.get = this.In
        break
      case 3:
      case 8:
        this.fk = d[1]
        this.get = this.Bn
        break
      case 6:
        this.$ = this.b.ti[d[1]]
        this.get = this.Jn
        break
      case 9:
        this.key = d[1]
        this.get = this.Hn
        break
      case 4:
        this.object = this.b.v[d[1]]
        this.get = this.Kn
        this.Ab.Uj(this.object)
        this.A instanceof kb ? this.Ab.bh() : this.Ab.parent && this.Ab.parent.bh()
        break
      case 10:
        this.index = d[1]
        this.get = b.type.O ? this.Fn : this.Gn
        break
      case 11:
        this.Lf = d[1]
        this.Gd = c
        this.get = this.Cn
        break
      case 2:
      case 12:
        this.tk = d[1]
        this.get = this.An
        break
      case 13:
        this.get = this.Ln
        this.Se = []
        this.ph = []
        h = 1
        for (r = d.length; h < r; h++) (e = new lb(this.A, d[h])), this.Se.push(e), this.ph.push(0)
    }
  }
  function r(b, d, h) {
    this.sheet = b
    this.parent = d
    this.b = b.b
    this.S = []
    this.name = h[1]
    this.Mf = h[2]
    this.sg = h[3]
    this.yg = !!h[4]
    this.oi = !!h[5]
    this.data = this.sg
    this.parent ? (this.Td = this.yg || this.oi ? -1 : this.b.Lo++) : ((this.Td = -1), this.b.yh.push(this))
  }
  function u(b, d, h) {
    this.sheet = b
    this.parent = d
    this.b = b.b
    this.S = []
    this.rg = c
    this.Qn = h[1]
  }
  function z() {
    this.El = []
    this.reset(c)
  }
  var p = []
  b.prototype.toString = q("name")
  b.prototype.Ok = function (b, d, h) {
    switch (b[0]) {
      case 0:
        b = new nb(this, d, b)
        if (b.ac) {
          h.push(b)
          h = 0
          for (d = b.ea.length; h < d; h++) b.ea[h].trigger && this.Pk(b, h)
        } else b.Tk() ? this.Pk(b, 0) : h.push(b)
        break
      case 1:
        b = new fb(this, d, b)
        h.push(b)
        break
      case 2:
        ;(b = new ob(this, d, b)), h.push(b)
    }
  }
  b.prototype.pa = function () {
    var b, d
    b = 0
    for (d = this.ld.length; b < d; b++) this.ld[b].pa(b < d - 1 && this.ld[b + 1].wg)
  }
  b.prototype.za = function () {
    this.di = a
    this.b.li = a
    var b, d
    b = 0
    for (d = this.ld.length; b < d; b++) {
      var h = this.ld[b]
      h.za()
      this.b.Eh(h.S)
      ;(!this.b.mc.nf() || this.b.lc.length) && this.b.tb()
    }
    this.b.li = f
  }
  b.prototype.Pk = function (b, d) {
    b.ac || this.b.lh.push(b)
    var h,
      r,
      e = b.ea[d],
      g
    g = e.type ? e.type.name : "system"
    var p = (h = e.rk) ? this.sk : this.Jl
    p[g] || (p[g] = [])
    g = p[g]
    p = e.xa
    if (h) {
      if (e.t.length && ((e = e.t[0]), !(1 !== e.type || 2 !== e.pc.type))) {
        e = e.pc.value.toLowerCase()
        h = 0
        for (r = g.length; h < r; h++)
          if (g[h].method == p) {
            h = g[h].fg
            h[e] ? h[e].push([b, d]) : (h[e] = [[b, d]])
            return
          }
        h = {}
        h[e] = [[b, d]]
        g.push({ method: p, fg: h })
      }
    } else {
      h = 0
      for (r = g.length; h < r; h++)
        if (g[h].method == p) {
          g[h].fg.push([b, d])
          return
        }
      g.push({ method: p, fg: [[b, d]] })
    }
  }
  db = b
  y.prototype.ci = function () {
    return this.L ? this.type.f.length : this.f.length
  }
  y.prototype.Wb = function () {
    return this.L ? this.type.f : this.f
  }
  y.prototype.ol = function (b) {
    b &&
      (b.b.Ja().Da.ac
        ? (this.L && ((this.f.length = 0), va(this.ia, b.type.f), (this.L = f)),
          (b = this.ia.indexOf(b)),
          -1 !== b && (this.f.push(this.ia[b]), this.ia.splice(b, 1)))
        : ((this.L = f), (this.f.length = 1), (this.f[0] = b)))
  }
  $a = y
  t.prototype.pa = function (b) {
    var d,
      h = this.parent
    if (this.group)
      for (this.jh = a; h; ) {
        if (!h.group) {
          this.jh = f
          break
        }
        h = h.parent
      }
    this.wj = !this.Tk() && (!this.parent || (this.parent.group && this.parent.jh))
    this.Lk = !!b
    this.sd = this.S.slice(0)
    for (h = this.parent; h; ) {
      b = 0
      for (d = h.S.length; b < d; b++) this.pm(h.S[b])
      h = h.parent
    }
    this.S = l(this.S)
    this.sd = l(this.sd)
    b = 0
    for (d = this.ea.length; b < d; b++) this.ea[b].pa()
    b = 0
    for (d = this.yd.length; b < d; b++) this.yd[b].pa()
    b = 0
    for (d = this.Mb.length; b < d; b++) this.Mb[b].pa(b < d - 1 && this.Mb[b + 1].wg)
  }
  t.prototype.Uj = function (b) {
    e(b, this.S)
  }
  t.prototype.pm = function (b) {
    e(b, this.sd)
  }
  t.prototype.bh = function () {
    this.lj = a
    this.parent && this.parent.bh()
  }
  t.prototype.Tk = function () {
    return this.ea.length ? this.ea[0].trigger : f
  }
  t.prototype.za = function () {
    var b,
      d = f,
      h = this.b.Ja()
    h.Da = this
    this.wg || (h.Ph = f)
    if (this.ac) {
      0 === this.ea.length && (d = a)
      h.va = 0
      for (b = this.ea.length; h.va < b; h.va++) this.ea[h.va].trigger || (this.ea[h.va].za() && (d = a))
      ;(h.xe = d) && this.ah()
    } else {
      h.va = 0
      for (b = this.ea.length; h.va < b; h.va++)
        if (!this.ea[h.va].za()) {
          h.xe = f
          this.wj && (!this.b.mc.nf() || this.b.lc.length) && this.b.tb()
          return
        }
      h.xe = a
      this.ah()
    }
    h.xe && this.Lk && (h.Ph = a)
    this.wj && (!this.b.mc.nf() || this.b.lc.length) && this.b.tb()
  }
  t.prototype.Bo = function (b) {
    this.b.Ja().Da = this
    this.ea[b].za() && this.ah()
  }
  t.prototype.ah = function () {
    var b = this.b.Ja(),
      d
    b.Rb = 0
    for (d = this.yd.length; b.Rb < d; b.Rb++) if (this.yd[b.Rb].za()) return
    this.wl()
  }
  t.prototype.zo = function () {
    var b = this.b.Ja(),
      d
    for (d = this.yd.length; b.Rb < d; b.Rb++) if (this.yd[b.Rb].za()) return
    this.wl()
  }
  t.prototype.wl = function () {
    if (this.Mb.length) {
      var b,
        d,
        h,
        r,
        e = this.Mb.length - 1
      this.b.Xg(this)
      if (this.lj) {
        b = 0
        for (d = this.Mb.length; b < d; b++)
          (h = this.Mb[b]), (r = !this.jh || (!this.group && b < e)) && this.b.Xd(h.S), h.za(), r ? this.b.wc(h.S) : this.b.Eh(h.S)
      } else {
        b = 0
        for (d = this.Mb.length; b < d; b++) this.Mb[b].za()
      }
      this.b.Tg()
    }
  }
  t.prototype.Co = function () {
    var b = this.b.Ja()
    b.Da = this
    var d = f,
      h
    b.va = 0
    for (h = this.ea.length; b.va < h; b.va++)
      if (this.ea[b.va].za()) d = a
      else if (!this.ac) return f
    return this.ac ? d : a
  }
  t.prototype.Yd = function () {
    this.b.Sh++
    var b = this.b.Ja().va,
      d = this.b.Xg(this)
    if (!this.ac) {
      d.va = b + 1
      for (b = this.ea.length; d.va < b; d.va++)
        if (!this.ea[d.va].za()) {
          this.b.Tg()
          return
        }
    }
    this.ah()
    this.b.Tg()
  }
  nb = t
  k.prototype.pa = function () {
    var b, d
    b = 0
    for (d = this.t.length; b < d; b++) this.t[b].pa()
  }
  k.prototype.Eo = s(a)
  k.prototype.ej = function () {
    var b, d
    b = 0
    for (d = this.t.length; b < d; b++) this.G[b] = this.t[b].get()
    return Oa(this.xa.apply(this.b.ae, this.G), this.tg)
  }
  k.prototype.Do = function () {
    var b, d
    b = 0
    for (d = this.t.length; b < d; b++) this.G[b] = this.t[b].get()
    b = this.xa.apply(this.type, this.G)
    this.type.ne()
    return b
  }
  k.prototype.dj = function () {
    var b,
      d,
      h,
      r,
      e,
      g,
      p,
      u = this.type.K(),
      l = this.Ab.ac && !this.trigger,
      k = 0,
      z = this.type.ob
    if (u.L) {
      u.f.length = 0
      b = u.ia.length = 0
      for (h = this.type.f.length; b < h; b++) {
        g = this.type.f[b]
        d = 0
        for (r = this.t.length; d < r; d++) this.G[d] = this.t[d].get(b)
        ;-1 < this.Pa ? (this.type.O && (k = g.type.se[this.type.qc]), (d = this.xa.apply(g.ua[this.Pa + k], this.G))) : (d = this.xa.apply(g, this.G))
        ;(e = Oa(d, this.tg)) ? u.f.push(g) : l && u.ia.push(g)
      }
      this.type.finish && this.type.finish(a)
      u.L = f
      this.type.ne()
      return u.ci()
    }
    var C = 0,
      E = l ? u.ia : u.f
    e = f
    b = 0
    for (h = E.length; b < h; b++) {
      g = E[b]
      d = 0
      for (r = this.t.length; d < r; d++) this.G[d] = this.t[d].get(b)
      ;-1 < this.Pa ? (this.type.O && (k = g.type.se[this.type.qc]), (d = this.xa.apply(g.ua[this.Pa + k], this.G))) : (d = this.xa.apply(g, this.G))
      if (Oa(d, this.tg))
        if (((e = a), l)) {
          if ((u.f.push(g), z)) {
            d = 0
            for (r = g.siblings.length; d < r; d++) (p = g.siblings[d]), p.type.K().f.push(p)
          }
        } else {
          E[C] = g
          if (z) {
            d = 0
            for (r = g.siblings.length; d < r; d++) (p = g.siblings[d]), (p.type.K().f[C] = p)
          }
          C++
        }
      else if (l) {
        E[C] = g
        if (z) {
          d = 0
          for (r = g.siblings.length; d < r; d++) (p = g.siblings[d]), (p.type.K().ia[C] = p)
        }
        C++
      }
    }
    E.length = C
    if (z) {
      b = 0
      for (h = this.type.vb.length; b < h; b++) (g = this.type.vb[b].K()), l ? (g.ia.length = C) : (g.f.length = C)
    }
    k = e
    if (l && !e) {
      b = 0
      for (h = u.f.length; b < h; b++) {
        g = u.f[b]
        d = 0
        for (r = this.t.length; d < r; d++) this.G[d] = this.t[d].get(b)
        d = -1 < this.Pa ? this.xa.apply(g.ua[this.Pa], this.G) : this.xa.apply(g, this.G)
        if (Oa(d, this.tg)) {
          e = a
          break
        }
      }
    }
    this.type.finish && this.type.finish(k || l)
    return l ? e : u.ci()
  }
  jb = k
  g.prototype.pa = function () {
    var b, d
    b = 0
    for (d = this.t.length; b < d; b++) this.t[b].pa()
  }
  g.prototype.ej = function () {
    var b, d
    b = 0
    for (d = this.t.length; b < d; b++) this.G[b] = this.t[b].get()
    return this.xa.apply(this.b.ae, this.G)
  }
  g.prototype.dj = function () {
    var b = this.type.K().Wb(),
      d,
      h,
      r,
      e,
      g
    d = 0
    for (r = b.length; d < r; d++) {
      g = b[d]
      h = 0
      for (e = this.t.length; h < e; h++) this.G[h] = this.t[h].get(d)
      ;-1 < this.Pa ? ((h = 0), this.type.O && (h = g.type.se[this.type.qc]), this.xa.apply(g.ua[this.Pa + h], this.G)) : this.xa.apply(g, this.G)
    }
    return f
  }
  kb = g
  var C = [],
    E = -1
  h.prototype.pa = function () {
    var b, d
    if (11 === this.type) this.Gd = this.b.Bk(this.Lf, this.Ab.parent)
    else if (13 === this.type) {
      b = 0
      for (d = this.Se.length; b < d; b++) this.Se[b].pa()
    }
    this.pc && this.pc.pa()
  }
  h.prototype.Ga = function () {
    E++
    C.length === E && C.push(new pb())
    return C[E]
  }
  h.prototype.ya = function () {
    E--
  }
  h.prototype.Dn = function (b) {
    this.td = b || 0
    b = this.Ga()
    this.pc.get(b)
    this.ya()
    return b.data
  }
  h.prototype.En = function (b) {
    this.td = b || 0
    b = this.Ga()
    this.pc.get(b)
    this.ya()
    return v(b.data) ? b.data : ""
  }
  h.prototype.Kn = q("object")
  h.prototype.Bn = q("fk")
  h.prototype.In = function (b) {
    this.td = b || 0
    b = this.Ga()
    this.pc.get(b)
    this.ya()
    return b.Ka() ? this.b.te(b.data) : this.b.ng(b.data)
  }
  h.prototype.Jn = q("$")
  h.prototype.Hn = q("key")
  h.prototype.Gn = q("index")
  h.prototype.Fn = function (b) {
    var d = this.A.type,
      h = c,
      h = d.K(),
      r = h.Wb(),
      h = r.length ? r[b % r.length].type : h.ia[b % h.ia.length].type
    return this.index + h.gg[d.qc]
  }
  h.prototype.Cn = q("Gd")
  h.prototype.An = q("tk")
  h.prototype.Ln = function () {
    var b, d
    b = 0
    for (d = this.Se.length; b < d; b++) this.ph[b] = this.Se[b].get()
    return this.ph
  }
  lb = h
  r.prototype.pa = function () {
    this.S = l(this.S)
  }
  r.prototype.Zc = function (b) {
    var d = this.b.yk()
    !this.parent || this.yg || !d ? (this.data = b) : (this.Td >= d.length && (d.length = this.Td + 1), (d[this.Td] = b))
  }
  r.prototype.Jd = function () {
    var b = this.b.yk()
    return !this.parent || this.yg || !b || this.oi ? this.data : this.Td >= b.length || "undefined" === typeof b[this.Td] ? this.sg : b[this.Td]
  }
  r.prototype.za = function () {
    this.parent && !this.yg && !this.oi && this.Zc(this.sg)
  }
  fb = r
  u.prototype.pa = function () {
    this.rg = this.b.Rh[this.Qn]
    this.sheet.Mk.add(this.rg)
    this.S = l(this.S)
  }
  u.prototype.za = function () {
    this.parent && this.b.Af(this.b.v)
    this.rg.di || this.rg.za()
    this.parent && this.b.wc(this.b.v)
  }
  ob = u
  z.prototype.reset = function (b) {
    this.Da = b
    this.Rb = this.va = 0
    this.El.length = 0
    this.Ph = this.xe = f
  }
  z.prototype.ji = function () {
    return this.Da.lj ? a : this.va < this.Da.ea.length - 1 ? !!this.Da.S.length : f
  }
  eb = z
})()
;(function () {
  function d(d, b) {
    this.A = d
    this.b = d.b
    this.type = b[0]
    this.get = [
      this.Xm,
      this.Tm,
      this.en,
      this.jn,
      this.Nm,
      this.gn,
      this.an,
      this.Qm,
      this.$m,
      this.dn,
      this.Om,
      this.cn,
      this.Rm,
      this.bn,
      this.Ym,
      this.Zm,
      this.Um,
      this.Vm,
      this.Pm,
      this.hn,
      this.pk,
      this.Wm,
      this.pk,
      this.Sm,
    ][this.type]
    var n = c
    this.pb = this.t = this.G = this.xa = this.hh = this.Ma = this.first = this.value = c
    this.Pa = -1
    this.Sc = c
    this.Cj = -1
    this.Gd = this.Lf = this.sm = c
    this.Bf = f
    switch (this.type) {
      case 0:
      case 1:
      case 2:
        this.value = b[1]
        break
      case 3:
        this.first = new mb(d, b[1])
        break
      case 18:
        this.first = new mb(d, b[1])
        this.Ma = new mb(d, b[2])
        this.hh = new mb(d, b[3])
        break
      case 19:
        this.xa = b[1]
        this.G = []
        this.t = []
        3 === b.length ? ((n = b[2]), (this.G.length = n.length + 1)) : (this.G.length = 1)
        break
      case 20:
        this.pb = this.b.v[b[1]]
        this.Pa = -1
        this.xa = b[2]
        this.Bf = b[3]
        this.Sc = b[4] ? new mb(d, b[4]) : c
        this.G = []
        this.t = []
        6 === b.length ? ((n = b[5]), (this.G.length = n.length + 1)) : (this.G.length = 1)
        break
      case 21:
        this.pb = this.b.v[b[1]]
        this.Bf = b[2]
        this.Sc = b[3] ? new mb(d, b[3]) : c
        this.Cj = b[4]
        break
      case 22:
        this.pb = this.b.v[b[1]]
        this.sm = this.pb.lg(b[2])
        this.Pa = this.pb.$h(b[2])
        this.xa = b[3]
        this.Bf = b[4]
        this.Sc = b[5] ? new mb(d, b[5]) : c
        this.G = []
        this.t = []
        7 === b.length ? ((n = b[6]), (this.G.length = n.length + 1)) : (this.G.length = 1)
        break
      case 23:
        ;(this.Lf = b[1]), (this.Gd = c)
    }
    4 <= this.type && 17 >= this.type && ((this.first = new mb(d, b[1])), (this.Ma = new mb(d, b[2])))
    if (n) {
      var t, e
      t = 0
      for (e = n.length; t < e; t++) this.t.push(new mb(d, n[t]))
    }
  }
  function n(d, b) {
    this.type = d || qb.he
    this.data = b || 0
    this.Ke = c
    this.type == qb.he && (this.data = Math.floor(this.data))
  }
  d.prototype.pa = function () {
    23 === this.type && (this.Gd = this.A.b.Bk(this.Lf, this.A.Ab.parent))
    this.first && this.first.pa()
    this.Ma && this.Ma.pa()
    this.hh && this.hh.pa()
    this.Sc && this.Sc.pa()
    if (this.t) {
      var d, b
      d = 0
      for (b = this.t.length; d < b; d++) this.t[d].pa()
    }
  }
  d.prototype.hn = function (d) {
    this.G[0] = d
    d = this.A.Ga()
    var b, n
    b = 0
    for (n = this.t.length; b < n; b++) this.t[b].get(d), (this.G[b + 1] = d.data)
    this.A.ya()
    this.xa.apply(this.b.ae, this.G)
  }
  d.prototype.pk = function (d) {
    var b = this.pb.K(),
      n = b.Wb()
    if (!n.length)
      if (b.ia.length) n = b.ia
      else {
        this.Bf ? d.gb("") : d.F(0)
        return
      }
    this.G[0] = d
    d.Ke = this.pb
    d = this.A.Ga()
    var t,
      b = 0
    for (t = this.t.length; b < t; b++) this.t[b].get(d), (this.G[b + 1] = d.data)
    b = this.A.td
    this.Sc && (this.Sc.get(d), d.Ka() && ((b = d.data), (n = this.pb.f)))
    this.A.ya()
    b %= n.length
    0 > b && (b += n.length)
    n = n[b]
    ;-1 < this.Pa ? ((d = 0), this.pb.O && (d = n.type.se[this.pb.qc]), this.xa.apply(n.ua[this.Pa + d], this.G)) : this.xa.apply(n, this.G)
  }
  d.prototype.Wm = function (d) {
    var b = this.pb.K(),
      n = b.Wb()
    if (!n.length)
      if (b.ia.length) n = b.ia
      else {
        this.Bf ? d.gb("") : d.F(0)
        return
      }
    b = this.A.td
    if (this.Sc) {
      var t = this.A.Ga()
      this.Sc.get(t)
      if (t.Ka()) {
        b = t.data
        n = this.pb.f
        b %= n.length
        0 > b && (b += n.length)
        n = n[b].Xb[this.Cj]
        v(n) ? d.gb(n) : d.C(n)
        this.A.ya()
        return
      }
      this.A.ya()
    }
    b %= n.length
    0 > b && (b += n.length)
    n = n[b]
    b = 0
    this.pb.O && (b = n.type.gg[this.pb.qc])
    n = n.Xb[this.Cj + b]
    v(n) ? d.gb(n) : d.C(n)
  }
  d.prototype.Xm = function (d) {
    d.type = qb.he
    d.data = this.value
  }
  d.prototype.Tm = function (d) {
    d.type = qb.fe
    d.data = this.value
  }
  d.prototype.en = function (d) {
    d.type = qb.Sf
    d.data = this.value
  }
  d.prototype.jn = function (d) {
    this.first.get(d)
    d.Ka() && (d.data = -d.data)
  }
  d.prototype.Nm = function (d) {
    this.first.get(d)
    var b = this.A.Ga()
    this.Ma.get(b)
    d.Ka() && b.Ka() && ((d.data += b.data), b.we() && d.Ie())
    this.A.ya()
  }
  d.prototype.gn = function (d) {
    this.first.get(d)
    var b = this.A.Ga()
    this.Ma.get(b)
    d.Ka() && b.Ka() && ((d.data -= b.data), b.we() && d.Ie())
    this.A.ya()
  }
  d.prototype.an = function (d) {
    this.first.get(d)
    var b = this.A.Ga()
    this.Ma.get(b)
    d.Ka() && b.Ka() && ((d.data *= b.data), b.we() && d.Ie())
    this.A.ya()
  }
  d.prototype.Qm = function (d) {
    this.first.get(d)
    var b = this.A.Ga()
    this.Ma.get(b)
    d.Ka() && b.Ka() && ((d.data /= b.data), d.Ie())
    this.A.ya()
  }
  d.prototype.$m = function (d) {
    this.first.get(d)
    var b = this.A.Ga()
    this.Ma.get(b)
    d.Ka() && b.Ka() && ((d.data %= b.data), b.we() && d.Ie())
    this.A.ya()
  }
  d.prototype.dn = function (d) {
    this.first.get(d)
    var b = this.A.Ga()
    this.Ma.get(b)
    d.Ka() && b.Ka() && ((d.data = Math.pow(d.data, b.data)), b.we() && d.Ie())
    this.A.ya()
  }
  d.prototype.Om = function (d) {
    this.first.get(d)
    var b = this.A.Ga()
    this.Ma.get(b)
    d.Ka()
      ? b.zg()
        ? d.gb(d.data.toString() + b.data)
        : d.data && b.data
        ? d.F(1)
        : d.F(0)
      : d.zg() && (d.data = b.zg() ? d.data + b.data : d.data + (Math.round(1e10 * b.data) / 1e10).toString())
    this.A.ya()
  }
  d.prototype.cn = function (d) {
    this.first.get(d)
    var b = this.A.Ga()
    this.Ma.get(b)
    d.Ka() && b.Ka() && (d.data || b.data ? d.F(1) : d.F(0))
    this.A.ya()
  }
  d.prototype.Pm = function (d) {
    this.first.get(d)
    d.data ? this.Ma.get(d) : this.hh.get(d)
  }
  d.prototype.Rm = function (d) {
    this.first.get(d)
    var b = this.A.Ga()
    this.Ma.get(b)
    d.F(d.data === b.data ? 1 : 0)
    this.A.ya()
  }
  d.prototype.bn = function (d) {
    this.first.get(d)
    var b = this.A.Ga()
    this.Ma.get(b)
    d.F(d.data !== b.data ? 1 : 0)
    this.A.ya()
  }
  d.prototype.Ym = function (d) {
    this.first.get(d)
    var b = this.A.Ga()
    this.Ma.get(b)
    d.F(d.data < b.data ? 1 : 0)
    this.A.ya()
  }
  d.prototype.Zm = function (d) {
    this.first.get(d)
    var b = this.A.Ga()
    this.Ma.get(b)
    d.F(d.data <= b.data ? 1 : 0)
    this.A.ya()
  }
  d.prototype.Um = function (d) {
    this.first.get(d)
    var b = this.A.Ga()
    this.Ma.get(b)
    d.F(d.data > b.data ? 1 : 0)
    this.A.ya()
  }
  d.prototype.Vm = function (d) {
    this.first.get(d)
    var b = this.A.Ga()
    this.Ma.get(b)
    d.F(d.data >= b.data ? 1 : 0)
    this.A.ya()
  }
  d.prototype.Sm = function (d) {
    var b = this.Gd.Jd()
    da(b) ? d.C(b) : d.gb(b)
  }
  mb = d
  n.prototype.we = function () {
    return this.type === qb.fe
  }
  n.prototype.Ka = function () {
    return this.type === qb.he || this.type === qb.fe
  }
  n.prototype.zg = function () {
    return this.type === qb.Sf
  }
  n.prototype.Ie = function () {
    this.we() || (this.zg() && (this.data = parseFloat(this.data)), (this.type = qb.fe))
  }
  n.prototype.F = function (d) {
    this.type = qb.he
    this.data = Math.floor(d)
  }
  n.prototype.C = function (d) {
    this.type = qb.fe
    this.data = d
  }
  n.prototype.gb = function (d) {
    this.type = qb.Sf
    this.data = d
  }
  n.prototype.dh = function (d) {
    da(d) ? ((this.type = qb.fe), (this.data = d)) : v(d) ? ((this.type = qb.Sf), (this.data = d.toString())) : ((this.type = qb.he), (this.data = 0))
  }
  pb = n
  qb = { he: 0, fe: 1, Sf: 2 }
})()
function A(d) {
  this.b = d
  this.Cc = []
}
;(function () {
  function d() {}
  function n(b, d) {
    var e = b.Db.$j,
      g = d.Db.$j
    if (da(e) && da(g)) return e - g
    e = "" + e
    g = "" + g
    return e < g ? -1 : e > g ? 1 : 0
  }
  function l() {}
  function b() {}
  var y = A.prototype
  d.prototype.je = s(a)
  d.prototype.bm = s(a)
  d.prototype.Ob = function (b, d, e) {
    return Yb(b, d, e)
  }
  d.prototype.Sl = function (b, d, e) {
    return !b ? f : Yb(100 * b.opacity, d, e)
  }
  d.prototype.Oa = function (b, d, e) {
    var g = this.b.Ja(),
      p = g.Da,
      g = g.ji()
    b = this.b.Xi(b)
    if (g) for (; d <= e && !b.Aa; d++) this.b.Xd(p.S), (b.index = d), p.Yd(), this.b.wc(p.S)
    else for (; d <= e && !b.Aa; d++) (b.index = d), p.Yd()
    this.b.Si()
    return f
  }
  var t = [],
    e = -1
  d.prototype.Pb = function (b) {
    var d = b.K()
    e++
    t.length === e && t.push([])
    var g = t[e]
    va(g, d.Wb())
    var k = this.b.Ja(),
      p = k.Da,
      l = k.ji(),
      k = this.b.Xi(),
      n,
      x,
      B,
      w,
      y,
      O,
      F = b.ob
    if (l) {
      l = 0
      for (n = g.length; l < n && !k.Aa; l++) {
        this.b.Xd(p.S)
        w = g[l]
        d = b.K()
        d.L = f
        d.f.length = 1
        d.f[0] = w
        if (F) {
          x = 0
          for (B = w.siblings.length; x < B; x++) (y = w.siblings[x]), (O = y.type.K()), (O.L = f), (O.f.length = 1), (O.f[0] = y)
        }
        k.index = l
        p.Yd()
        this.b.wc(p.S)
      }
    } else {
      d.L = f
      d.f.length = 1
      l = 0
      for (n = g.length; l < n && !k.Aa; l++) {
        w = g[l]
        d.f[0] = w
        if (F) {
          x = 0
          for (B = w.siblings.length; x < B; x++) (y = w.siblings[x]), (O = y.type.K()), (O.L = f), (O.f.length = 1), (O.f[0] = y)
        }
        k.index = l
        p.Yd()
      }
    }
    this.b.Si()
    e--
    return f
  }
  d.prototype.Hj = function (b, d, g) {
    d = b.K()
    e++
    t.length === e && t.push([])
    var k = t[e]
    va(k, d.Wb())
    var p = this.b.Ja(),
      l = p.Da,
      E = this.b.xk(),
      x = p.ji(),
      p = this.b.Xi(),
      B,
      w,
      y,
      O,
      F
    B = 0
    for (w = k.length; B < w; B++) k[B].Db.$j = E.t[1].get(B)
    k.sort(n)
    1 === g && k.reverse()
    g = b.ob
    if (x) {
      B = 0
      for (w = k.length; B < w && !p.Aa; B++) {
        this.b.Xd(l.S)
        y = k[B]
        d = b.K()
        d.L = f
        d.f.length = 1
        d.f[0] = y
        if (g) {
          E = 0
          for (x = y.siblings.length; E < x; E++) (O = y.siblings[E]), (F = O.type.K()), (F.L = f), (F.f.length = 1), (F.f[0] = O)
        }
        p.index = B
        l.Yd()
        this.b.wc(l.S)
      }
    } else {
      d.L = f
      d.f.length = 1
      B = 0
      for (w = k.length; B < w && !p.Aa; B++) {
        y = k[B]
        d.f[0] = y
        if (g) {
          E = 0
          for (x = y.siblings.length; E < x; E++) (O = y.siblings[E]), (F = O.type.K()), (F.L = f), (F.f.length = 1), (F.f[0] = O)
        }
        p.index = B
        l.Yd()
      }
    }
    this.b.Si()
    e--
    return f
  }
  d.prototype.jm = function () {
    var b = this.b.xk().Db
    "undefined" === typeof b.xh && (b.xh = -1)
    var d = b.xh,
      e = this.b.ih
    b.xh = e
    return this.b.si || d !== e - 1
  }
  d.prototype.g = function (b, d, e) {
    return Yb(b.Jd(), d, e)
  }
  d.prototype.Ij = function (b) {
    return this.b.Tj[b.toLowerCase()]
  }
  d.prototype.dm = function (b) {
    if (!b || !b.f.length) return f
    b.K().L = a
    b.ne()
    return a
  }
  d.prototype.ca = function () {
    var b = this.b.Ja()
    return b.Ph ? f : !b.xe
  }
  d.prototype.Jj = s(a)
  d.prototype.Xl = s(a)
  y.c = new d()
  l.prototype.q = function (b) {
    !this.b.pf && !this.b.qe && (this.b.qe = b)
  }
  l.prototype.Y = function (b, d, e, g) {
    if (d && b && (d = this.b.hk(b, d, e, g))) {
      this.b.Yb++
      var p
      this.b.trigger(Object.getPrototypeOf(b.na).c.ie, d)
      if (d.ob) {
        e = 0
        for (g = d.siblings.length; e < g; e++) (p = d.siblings[e]), this.b.trigger(Object.getPrototypeOf(p.type.na).c.ie, p)
      }
      this.b.Yb--
      b = b.K()
      b.L = f
      b.f.length = 1
      b.f[0] = d
      if (d.ob) {
        e = 0
        for (g = d.siblings.length; e < g; e++) (p = d.siblings[e]), (b = p.type.K()), (b.L = f), (b.f.length = 1), (b.f[0] = p)
      }
    }
  }
  l.prototype.ub = function (b, d) {
    b && ((d = xa(d / 100, 0, 1)), b.opacity !== d && ((b.opacity = d), (this.b.R = a)))
  }
  l.prototype.e = function (b, d) {
    0 === b.Mf ? (da(d) ? b.Zc(d) : b.Zc(parseFloat(d))) : 1 === b.Mf && b.Zc(d.toString())
  }
  l.prototype.Na = function (b, d) {
    0 === b.Mf ? (da(d) ? b.Zc(b.Jd() + d) : b.Zc(b.Jd() + parseFloat(d))) : 1 === b.Mf && b.Zc(b.Jd() + d.toString())
  }
  l.prototype.Gc = function (b, d) {
    0 === b.Mf && (da(d) ? b.Zc(b.Jd() - d) : b.Zc(b.Jd() - parseFloat(d)))
  }
  var k = [],
    g = []
  l.prototype.h = function (b) {
    if (!(0 > b)) {
      var d,
        e,
        l,
        p = this.b.Ja(),
        n
      n = k.length ? k.pop() : { $c: {}, S: [] }
      n.lk = f
      n.time = this.b.Uc.Nb + b
      n.ok = p.Da
      n.Rb = p.Rb + 1
      b = 0
      for (d = this.b.v.length; b < d; b++)
        (l = this.b.v[b]),
          (e = l.K()),
          (e.L && -1 === p.Da.S.indexOf(l)) ||
            (n.S.push(l), (l = void 0), (l = g.length ? g.pop() : { mf: [] }), (l.xl = f), (l.xl = e.L), va(l.mf, e.f), (n.$c[b.toString()] = l))
      this.Cc.push(n)
      return a
    }
  }
  l.prototype.fm = function () {
    var b, d, e
    b = 0
    for (d = this.b.yh.length; b < d; b++) (e = this.b.yh[b]), (e.data = e.sg)
  }
  y.a = new l()
  b.prototype["int"] = function (b, d) {
    v(d) ? (b.F(parseInt(d, 10)), isNaN(b.data) && (b.data = 0)) : b.F(d)
  }
  b.prototype["float"] = function (b, d) {
    v(d) ? (b.C(parseFloat(d)), isNaN(b.data) && (b.data = 0)) : b.C(d)
  }
  b.prototype.Dl = function (b, d) {
    v(d) ? b.gb(d) : b.gb(d.toString())
  }
  b.prototype.random = function (b, d, e) {
    void 0 === e ? b.C(Math.random() * d) : b.C(Math.random() * (e - d) + d)
  }
  b.prototype.sqrt = function (b, d) {
    b.C(Math.sqrt(d))
  }
  b.prototype.round = function (b, d) {
    b.F(Math.round(d))
  }
  b.prototype.floor = function (b, d) {
    b.F(Math.floor(d))
  }
  b.prototype.ceil = function (b, d) {
    b.F(Math.ceil(d))
  }
  b.prototype.sin = function (b, d) {
    b.C(Math.sin(ya(d)))
  }
  b.prototype.cos = function (b, d) {
    b.C(Math.cos(ya(d)))
  }
  b.prototype.tan = function (b, d) {
    b.C(Math.tan(ya(d)))
  }
  b.prototype.acos = function (b, d) {
    b.C(Ba(Math.acos(d)))
  }
  b.prototype.exp = function (b, d) {
    b.C(Math.exp(d))
  }
  b.prototype.max = function (b) {
    var d = arguments[1],
      e,
      g
    e = 2
    for (g = arguments.length; e < g; e++) d < arguments[e] && (d = arguments[e])
    b.C(d)
  }
  b.prototype.min = function (b) {
    var d = arguments[1],
      e,
      g
    e = 2
    for (g = arguments.length; e < g; e++) d > arguments[e] && (d = arguments[e])
    b.C(d)
  }
  b.prototype.Ed = function (b) {
    b.C(this.b.Ed)
  }
  b.prototype.Hf = function (b) {
    b.C(this.b.Hf)
  }
  b.prototype.time = function (b) {
    b.C(this.b.Uc.Nb)
  }
  b.prototype.ih = function (b) {
    b.F(this.b.ih)
  }
  b.prototype.Qg = function (b) {
    b.F(this.b.Qg)
  }
  b.prototype.Xh = function (b) {
    b.F(this.b.Xh)
  }
  b.prototype.Qa = function (b, d) {
    var e, g, p
    if (this.b.Ge.length)
      if (d) {
        g = 0
        for (p = this.b.Ge.length; g < p; g++)
          if (((e = this.b.Ge[g]), e.name === d)) {
            b.F(e.index)
            return
          }
        b.F(0)
      } else (e = this.b.zk()), b.F(e ? e.index : -1)
    else b.F(0)
  }
  b.prototype.m = function (b, d, e, g, p) {
    b.C(Ba(Ja(d, e, g, p)))
  }
  b.prototype.md = function (b, d) {
    var e = this.b.un(d)
    e ? b.C(100 * e.opacity) : b.C(0)
  }
  b.prototype.left = function (b, d, e) {
    b.gb(v(d) ? d.substr(0, e) : "")
  }
  b.prototype.right = function (b, d, e) {
    b.gb(v(d) ? d.substr(d.length - e) : "")
  }
  b.prototype.$n = function (b, d, e, g) {
    b.gb(v(d) ? d.substr(e, g) : "")
  }
  b.prototype.Hl = function (b, d, e) {
    v(d) && d.length ? b.F(d.split(e).length) : b.F(0)
  }
  b.prototype.replace = function (b, d, e, g) {
    v(d) && v(e) && v(g) ? b.gb(d.replace(RegExp(Ua(e), "gi"), g)) : b.gb(v(d) ? d : "")
  }
  b.prototype.Cf = function (b, d, e, g) {
    b.F(oa(d, e, g))
  }
  b.prototype.Gh = function (b) {
    b.C(this.b.Gh / 1e3)
  }
  b.prototype.Ig = function (b) {
    b.C(this.b.Ig)
  }
  y.d = new b()
  y.Ao = function () {
    var b,
      d,
      e,
      l,
      p,
      n,
      E = this.b.Ja()
    b = 0
    for (e = this.Cc.length; b < e; b++)
      if (((l = this.Cc[b]), !(l.time > this.b.Uc.Nb))) {
        E.Da = l.ok
        E.Rb = l.Rb
        E.va = 0
        for (d in l.$c)
          l.$c.hasOwnProperty(d) && ((p = this.b.v[parseInt(d, 10)].K()), (n = l.$c[d]), (p.L = n.xl), va(p.f, n.mf), (p = n), (p.mf.length = 0), g.push(p))
        l.ok.zo()
        this.b.Eh(l.S)
        l.lk = a
      }
    d = b = 0
    for (e = this.Cc.length; b < e; b++) (l = this.Cc[b]), (this.Cc[d] = l), l.lk ? (Qa(l.$c), (l.S.length = 0), k.push(l)) : d++
    this.Cc.length = d
  }
})()
function zb(d) {
  var n = d[0].prototype,
    l = d[1],
    b = d[3],
    y = d[4],
    t = d[5],
    e = d[6],
    k = d[7]
  d = d[8]
  n.c || (n.c = {})
  n.a || (n.a = {})
  n.d || (n.d = {})
  var g = n.c,
    h = n.a,
    n = n.d
  b &&
    ((g.Ql = function (b, d) {
      return Yb(this.x, b, d)
    }),
    (g.hp = function (b, d) {
      return Yb(this.y, b, d)
    }),
    (g.np = function () {
      var b = this.j
      this.cc()
      var d = this.N
      return !(d.right < b.fc || d.bottom < b.hc || d.left > b.gc || d.top > b.ec)
    }),
    (g.op = function () {
      this.cc()
      var b = this.N,
        d = this.b.oa
      return 0 > b.right || 0 > b.bottom || b.left > d.width || b.top > d.height
    }),
    (g.yp = function (b, d, e) {
      var g = this.K(),
        h = g.Wb()
      if (!h.length) return f
      var k = h[0],
        l = k,
        n = Na(k.x, k.y, d, e),
        w,
        t,
        y
      w = 1
      for (t = h.length; w < t; w++) if (((k = h[w]), (y = Na(k.x, k.y, d, e)), (0 === b && y < n) || (1 === b && y > n))) (n = y), (l = k)
      g.ol(l)
      return a
    }),
    (h.hm = function (b) {
      this.x !== b && ((this.x = b), this.Xa())
    }),
    (h.Rf = function (b) {
      this.y !== b && ((this.y = b), this.Xa())
    }),
    (h.gm = function (b, d) {
      if (this.x !== b || this.y !== d) (this.x = b), (this.y = d), this.Xa()
    }),
    (h.Ip = function (b, d) {
      var e = b.wn(this)
      if (e) {
        var g
        e.ai ? ((g = e.ai(d, a)), (e = e.ai(d, f))) : ((g = e.x), (e = e.y))
        if (this.x !== g || this.y !== e) (this.x = g), (this.y = e), this.Xa()
      }
    }),
    (h.tp = function (b) {
      0 !== b && ((this.x += Math.cos(this.m) * b), (this.y += Math.sin(this.m) * b), this.Xa())
    }),
    (h.sp = function (b, d) {
      0 !== d && ((this.x += Math.cos(ya(b)) * d), (this.y += Math.sin(ya(b)) * d), this.Xa())
    }),
    (n.$e = function (b) {
      b.C(this.x)
    }),
    (n.Hc = function (b) {
      b.C(this.y)
    }),
    (n.Ed = function (b) {
      b.C(this.b.rn(this))
    }))
  y &&
    ((g.gp = function (b, d) {
      return Yb(this.width, b, d)
    }),
    (g.ep = function (b, d) {
      return Yb(this.height, b, d)
    }),
    (h.Oj = function (b) {
      this.width !== b && ((this.width = b), this.Xa())
    }),
    (h.Hp = function (b) {
      this.height !== b && ((this.height = b), this.Xa())
    }),
    (h.ga = function (b, d) {
      if (this.width !== b || this.height !== d) (this.width = b), (this.height = d), this.Xa()
    }),
    (n.J = function (b) {
      b.C(this.width)
    }),
    (n.ge = function (b) {
      b.C(this.height)
    }),
    (n.bp = function (b) {
      this.cc()
      b.C(this.N.left)
    }),
    (n.dp = function (b) {
      this.cc()
      b.C(this.N.top)
    }),
    (n.cp = function (b) {
      this.cc()
      b.C(this.N.right)
    }),
    (n.ap = function (b) {
      this.cc()
      b.C(this.N.bottom)
    }))
  t &&
    ((g.$o = function (b, d) {
      return Ka(this.m, ya(d)) <= ya(b)
    }),
    (g.lp = function (b) {
      return Ma(this.m, ya(b))
    }),
    (g.kp = function (b, d) {
      var e = Ia(b),
        g = Ia(d),
        h = Da(this.m)
      return Ma(g, e) ? Ma(h, e) && !Ma(h, g) : !(!Ma(h, e) && Ma(h, g))
    }),
    (h.Of = function (b) {
      b = ya(Ca(b))
      !isNaN(b) && this.m !== b && ((this.m = b), this.Xa())
    }),
    (h.Bp = function (b) {
      0 !== b && !isNaN(b) && ((this.m += ya(b)), (this.m = Da(this.m)), this.Xa())
    }),
    (h.Cp = function (b) {
      0 !== b && !isNaN(b) && ((this.m -= ya(b)), (this.m = Da(this.m)), this.Xa())
    }),
    (h.Dp = function (b, d) {
      var e = La(this.m, ya(d), ya(b))
      !isNaN(e) && this.m !== e && ((this.m = e), this.Xa())
    }),
    (h.Ep = function (b, d, e) {
      b = La(this.m, Math.atan2(e - this.y, d - this.x), ya(b))
      !isNaN(b) && this.m !== b && ((this.m = b), this.Xa())
    }),
    (h.Jp = function (b, d) {
      var e = Math.atan2(d - this.y, b - this.x)
      !isNaN(e) && this.m !== e && ((this.m = e), this.Xa())
    }),
    (n.Zo = function (b) {
      b.C(Ha(this.m))
    }))
  l ||
    ((g.o = function (b, d, e) {
      return Yb(this.Xb[b], d, e)
    }),
    (g.sh = function (b) {
      return this.Xb[b]
    }),
    (g.xp = function (b) {
      return this.uid === b
    }),
    (g.ie = s(a)),
    (g.Yl = s(a)),
    (h.Ba = function (b, d) {
      var e = this.Xb
      da(e[b]) ? (e[b] = da(d) ? d : parseFloat(d)) : v(e[b]) && (e[b] = v(d) ? d : d.toString())
    }),
    (h.Yo = function (b, d) {
      var e = this.Xb
      da(e[b]) ? (e[b] = da(d) ? e[b] + d : e[b] + parseFloat(d)) : v(e[b]) && (e[b] = v(d) ? e[b] + d : e[b] + d.toString())
    }),
    (h.Kp = function (b, d) {
      var e = this.Xb
      da(e[b]) && (e[b] = da(d) ? e[b] - d : e[b] - parseFloat(d))
    }),
    (h.ic = function (b, d) {
      this.Xb[b] = d ? 1 : 0
    }),
    (h.Lp = function (b) {
      this.Xb[b] = 1 - this.Xb[b]
    }),
    (h.ib = function () {
      this.b.We(this)
    }),
    (n.ip = function (b) {
      var d = b.Ke.f.length,
        e,
        g,
        h
      e = 0
      for (g = this.b.lc.length; e < g; e++) (h = this.b.lc[e]), b.Ke.O ? 0 <= h.type.ja.indexOf(b.Ke) && d++ : h.type === b.Ke && d++
      b.F(d)
    }),
    (n.Ap = function (b) {
      b.F(b.Ke.K().Wb().length)
    }),
    (n.Mp = function (b) {
      b.F(this.uid)
    }),
    (n.jp = function (b) {
      b.F(this.pg())
    }))
  e &&
    ((g.pp = q("visible")),
    (h.Nj = function (b) {
      !b !== !this.visible && ((this.visible = b), (this.b.R = a))
    }),
    (g.fp = function (b, d) {
      return Yb(Ya(100 * this.opacity), b, d)
    }),
    (h.ed = function (b) {
      b /= 100
      0 > b ? (b = 0) : 1 < b && (b = 1)
      b !== this.opacity && ((this.opacity = b), (this.b.R = a))
    }),
    (n.Opacity = function (b) {
      b.C(Ya(100 * this.opacity))
    }))
  k &&
    ((g.mp = function (b) {
      return !b ? f : this.j === b
    }),
    (g.zp = function (b) {
      var d = this.K(),
        e = d.Wb()
      if (!e.length) return f
      var g = e[0],
        h = g,
        k,
        l
      k = 1
      for (l = e.length; k < l; k++)
        if (((g = e[k]), 0 === b)) {
          if (g.j.index > h.j.index || (g.j.index === h.j.index && g.Eb() > h.Eb())) h = g
        } else if (g.j.index < h.j.index || (g.j.index === h.j.index && g.Eb() < h.Eb())) h = g
      d.ol(h)
      return a
    }),
    (h.wp = function () {
      var b = this.Eb()
      b !== this.j.f.length - 1 && (ta(this.j.f, b), this.j.f.push(this), (this.b.R = a), (this.j.Dc = a))
    }),
    (h.up = function () {
      var b = this.Eb()
      0 !== b && (ta(this.j.f, b), this.j.f.unshift(this), (this.b.R = a), (this.j.Dc = a))
    }),
    (h.vp = function (b) {
      b && b != this.j && (ta(this.j.f, this.Eb()), (this.j.Dc = a), (this.j = b), (this.rh = b.f.length), b.f.push(this), (this.b.R = a))
    }),
    (h.Op = function (b, d) {
      var e = 0 === b
      if (d) {
        var g = d.sn(this)
        if (g && g.uid !== this.uid) {
          this.j.index !== g.j.index && (ta(this.j.f, this.Eb()), (this.j.Dc = a), (this.j = g.j), (this.rh = g.j.f.length), g.j.f.push(this))
          var h = this.Eb(),
            g = g.Eb()
          ta(this.j.f, h)
          h < g && g--
          e && g++
          g === this.j.f.length ? this.j.f.push(this) : this.j.f.splice(g, 0, this)
          this.j.Dc = a
          this.b.R = a
        }
      }
    }),
    (n.rp = function (b) {
      b.F(this.j.il)
    }),
    (n.qp = function (b) {
      b.gb(this.j.name)
    }),
    (n.Np = function (b) {
      b.F(this.Eb())
    }))
  d &&
    ((h.Fp = function (b, d) {
      if (this.b.u) {
        var e = this.type.Ak(d)
        if (!(0 > e)) {
          var g = 1 === b
          this.me[e] !== g && ((this.me[e] = g), this.Ue(), (this.b.R = a))
        }
      }
    }),
    (h.Gp = function (b, d, e) {
      if (this.b.u) {
        var g = this.type.Ak(b)
        0 > g ||
          ((b = this.type.U[g]),
          (g = this.Va[g]),
          (d = Math.floor(d)),
          0 > d || d >= g.length || (1 === this.b.u.zn(b.Ra, d) && (e /= 100), g[d] !== e && ((g[d] = e), b.af && (this.b.R = a))))
      }
    }))
}
function Sb() {
  this.Ah = a
  this.b.R = a
  var d, n
  d = 0
  for (n = this.Wf.length; d < n; d++) this.Wf[d](this)
}
function Tb(d) {
  d && this.Wf.push(d)
}
function Vb() {
  if (this.Ah) {
    this.N.set(this.x, this.y, this.x + this.width, this.y + this.height)
    this.N.offset(-this.sc * this.width, -this.tc * this.height)
    this.m ? (this.N.offset(-this.x, -this.y), this.Sb.Bl(this.N, this.m), this.Sb.offset(this.x, this.y), this.Sb.Zj(this.N)) : this.Sb.hj(this.N)
    var d = 0
    this.N.left > this.N.right && ((d = this.N.left), (this.N.left = this.N.right), (this.N.right = d))
    this.N.top > this.N.bottom && ((d = this.N.top), (this.N.top = this.N.bottom), (this.N.bottom = d))
    this.Ah = f
  }
}
function Ub(d, n) {
  return !this.N.hd(d, n) || !this.Sb.hd(d, n)
    ? f
    : this.Kc && !this.Kc.Wn()
    ? (this.Kc.um(this.width, this.height, this.m), this.Kc.hd(d - this.x, n - this.y))
    : a
}
function Qb() {
  this.type.mh()
  return this.kf
}
function Wb() {
  this.j.Ro()
  return this.rh
}
function Xb() {
  this.M.length = 0
  var d, n
  d = 0
  for (n = this.me.length; d < n; d++) this.me[d] && this.M.push(this.type.U[d])
  this.Ml = !!this.M.length
}
function Rb() {
  return this.type.name + "#" + this.uid
}
function Bb(d) {
  if (d && d.ob && d.type != this) {
    var n, l, b
    n = 0
    for (l = d.siblings.length; n < l; n++) if (((b = d.siblings[n]), b.type == this)) return b
  }
  d = this.K().Wb()
  return d.length ? d[0] : c
}
function Cb(d) {
  var n = this.K().Wb()
  return n.length ? n[d.pg() % n.length] : c
}
function Ab() {
  if (this.$d && !this.O) {
    var d, n
    d = 0
    for (n = this.f.length; d < n; d++) this.f[d].kf = d
    this.$d = f
  }
}
function Db() {
  return this.ud[this.Nc]
}
function Eb() {
  this.Nc++
  this.Nc === this.ud.length ? this.ud.push(new $a(this)) : (this.ud[this.Nc].L = a)
}
function Jb() {
  this.Nc++
  this.Nc === this.ud.length && this.ud.push(new $a(this))
  var d = this.ud[this.Nc],
    n = this.ud[this.Nc - 1]
  n.L ? (d.L = a) : ((d.L = f), va(d.f, n.f))
}
function Kb() {
  this.Nc--
}
function Lb(d) {
  var n,
    l,
    b,
    y,
    t,
    e = 0
  if (!this.O) {
    n = 0
    for (l = this.ja.length; n < l; n++) {
      t = this.ja[n]
      b = 0
      for (y = t.Sa.length; b < y; b++) {
        if (d === t.Sa[b].name) return (this.Db.Vk = e), t.Sa[b]
        e++
      }
    }
  }
  n = 0
  for (l = this.Sa.length; n < l; n++) {
    if (d === this.Sa[n].name) return (this.Db.Vk = e), this.Sa[n]
    e++
  }
  return c
}
function Mb(d) {
  return this.lg(d) ? this.Db.Vk : -1
}
function Nb(d) {
  var n, l
  n = 0
  for (l = this.U.length; n < l; n++) if (this.U[n].name === d) return n
  return -1
}
function Ob() {
  if (this.ob && !this.O) {
    var d, n, l, b, y, t, e
    this.mh()
    t = this.K()
    var k = t.L,
      g = (d = this.b.Ja()) && d.Da && d.Da.ac
    d = 0
    for (n = this.vb.length; d < n; d++)
      if (((y = this.vb[d]), y !== this && (y.mh(), (e = y.K()), (e.L = k), !k))) {
        e.f.length = t.f.length
        l = 0
        for (b = t.f.length; l < b; l++) e.f[l] = y.f[t.f[l].kf]
        if (g) {
          e.ia.length = t.ia.length
          l = 0
          for (b = t.ia.length; l < b; l++) e.ia[l] = y.f[t.ia[l].kf]
        }
      }
  }
}
function Pb() {
  return this.name
}
function Yb(d, n, l) {
  if ("undefined" === typeof d || "undefined" === typeof l) return f
  switch (n) {
    case 0:
      return d === l
    case 1:
      return d !== l
    case 2:
      return d < l
    case 3:
      return d <= l
    case 4:
      return d > l
    case 5:
      return d >= l
    default:
      return f
  }
}
var xb = {}
function H(d) {
  this.b = d
}
;(function () {
  function d() {
    return k.length ? k.pop() : []
  }
  function n(b) {
    var d, e
    d = 0
    for (e = b.length; d < e; d++) Array.isArray(b[d]) && n(b[d])
    b.length = 0
    k.push(b)
  }
  function l() {}
  function b() {}
  function y() {}
  var t = H.prototype
  t.sa = function (b) {
    this.na = b
    this.b = b.b
  }
  t.sa.prototype.P = m()
  t.da = function (b) {
    this.type = b
    this.b = b.b
  }
  var e = t.da.prototype,
    k = []
  Array.isArray ||
    (Array.isArray = function (b) {
      return "[object Array]" === Object.prototype.toString.call(b)
    })
  e.P = function () {
    this.wb = this.V[0]
    this.Tb = this.V[1]
    this.Oc = this.V[2]
    this.Kb || (this.Ad = d())
    var b = this.Ad
    b.length = this.wb
    var e, k, l
    for (e = 0; e < this.wb; e++) {
      b[e] || (b[e] = d())
      b[e].length = this.Tb
      for (k = 0; k < this.Tb; k++) {
        b[e][k] || (b[e][k] = d())
        b[e][k].length = this.Oc
        for (l = 0; l < this.Oc; l++) b[e][k][l] = 0
      }
    }
    this.Hd = this.Ub = this.kb = 0
  }
  e.Ne = function () {
    var b
    for (b = 0; b < this.wb; b++) n(this.Ad[b])
    this.Ad.length = 0
  }
  e.oe = function (b, d, e) {
    b = Math.floor(b)
    d = Math.floor(d)
    e = Math.floor(e)
    return isNaN(b) || 0 > b || b > this.wb - 1 || isNaN(d) || 0 > d || d > this.Tb - 1 || isNaN(e) || 0 > e || e > this.Oc - 1 ? 0 : this.Ad[b][d][e]
  }
  e.set = function (b, d, e, k) {
    b = Math.floor(b)
    d = Math.floor(d)
    e = Math.floor(e)
    if (!isNaN(b) && !(0 > b || b > this.wb - 1))
      if (!isNaN(d) && !(0 > d || d > this.Tb - 1)) if (!isNaN(e) && !(0 > e || e > this.Oc - 1)) this.Ad[b][d][e] = k
  }
  e.Sp = function () {
    return JSON.stringify({ c2array: a, size: [this.wb, this.Tb, this.Oc], data: this.Ad })
  }
  l.prototype.Ql = function (b, d, e) {
    return Yb(this.oe(b, 0, 0), d, e)
  }
  l.prototype.p = function (b, d, e, k) {
    return Yb(this.oe(b, d, 0), e, k)
  }
  e.Oh = function (b) {
    this.b.Xd(b.S)
    b.Yd()
    this.b.wc(b.S)
  }
  l.prototype.cd = function (b) {
    var d = this.b.Ja().Da
    this.Hd = this.Ub = this.kb = 0
    switch (b) {
      case 0:
        for (this.kb = 0; this.kb < this.wb; this.kb++)
          for (this.Ub = 0; this.Ub < this.Tb; this.Ub++) for (this.Hd = 0; this.Hd < this.Oc; this.Hd++) this.Oh(d)
        break
      case 1:
        for (this.kb = 0; this.kb < this.wb; this.kb++) for (this.Ub = 0; this.Ub < this.Tb; this.Ub++) this.Oh(d)
        break
      case 2:
        for (this.kb = 0; this.kb < this.wb; this.kb++) this.Oh(d)
    }
    this.Hd = this.Ub = this.kb = 0
    return f
  }
  l.prototype.dd = function (b, d) {
    return Yb(this.oe(this.kb, this.Ub, this.Hd), b, d)
  }
  t.c = new l()
  b.prototype.ga = function (b, e, k) {
    0 > b && (b = 0)
    0 > e && (e = 0)
    0 > k && (k = 0)
    if (!(this.wb === b && this.Tb === e && this.Oc === k)) {
      this.wb = b
      this.Tb = e
      this.Oc = k
      var l,
        n,
        p = this.Ad
      p.length = b
      for (b = 0; b < this.wb; b++) {
        ca(p[b]) && (p[b] = d())
        p[b].length = e
        for (l = 0; l < this.Tb; l++) {
          ca(p[b][l]) && (p[b][l] = d())
          p[b][l].length = k
          for (n = 0; n < this.Oc; n++) ca(p[b][l][n]) && (p[b][l][n] = 0)
        }
      }
    }
  }
  b.prototype.hm = function (b, d) {
    this.set(b, 0, 0, d)
  }
  b.prototype.Ca = function (b, d, e) {
    this.set(b, d, 0, e)
  }
  t.a = new b()
  y.prototype.Ec = function (b, d, e, k) {
    b.dh(this.oe(d, e || 0, k || 0))
  }
  y.prototype.J = function (b) {
    b.F(this.wb)
  }
  y.prototype.ge = function (b) {
    b.F(this.Tb)
  }
  y.prototype.n = function (b) {
    b.F(this.kb)
  }
  y.prototype.s = function (b) {
    b.F(this.Ub)
  }
  y.prototype.Rl = function (b) {
    b.dh(this.oe(this.kb, this.Ub, this.Hd))
  }
  t.d = new y()
})()
function R(d) {
  this.b = d
}
;(function () {
  function d(b) {
    b = Math.pow(10, b / 20)
    0 > b && (b = 0)
    1 < b && (b = 1)
    return b
  }
  function n(b) {
    b = b.toLowerCase()
    return za.hasOwnProperty(b) && za[b].length ? za[b][0].Vb() : G.destination
  }
  function l() {
    return G.createGain ? G.createGain() : G.createGainNode()
  }
  function b(b) {
    return G.createDelay ? G.createDelay(b) : G.createDelayNode(b)
  }
  function y(b) {
    b.start ? b.start(0) : b.noteOn(0)
  }
  function t(b) {
    b.stop ? b.stop(0) : b.noteOff(0)
  }
  function e(b, d, e, g, h, k) {
    this.I = l()
    this.X = l()
    this.X.gain.value = k
    this.W = l()
    this.W.gain.value = 1 - k
    this.wa = G.createBiquadFilter()
    this.wa.type = "number" === typeof this.wa.type ? b : bc[b]
    this.wa.frequency.value = d
    this.wa.detune && (this.wa.detune.value = e)
    this.wa.Q.value = g
    this.wa.gain.value = h
    this.I.connect(this.wa)
    this.I.connect(this.W)
    this.wa.connect(this.X)
  }
  function k(d, e, g) {
    this.I = l()
    this.X = l()
    this.X.gain.value = g
    this.W = l()
    this.W.gain.value = 1 - g
    this.uf = l()
    this.Bb = b(d)
    this.Bb.delayTime.value = d
    this.cg = l()
    this.cg.gain.value = e
    this.I.connect(this.uf)
    this.I.connect(this.W)
    this.uf.connect(this.X)
    this.uf.connect(this.Bb)
    this.Bb.connect(this.cg)
    this.cg.connect(this.uf)
  }
  function g(b, d, e) {
    this.I = l()
    this.X = l()
    this.X.gain.value = e
    this.W = l()
    this.W.gain.value = 1 - e
    this.Bd = G.createConvolver()
    b && ((this.Bd.normalize = d), (this.Bd.buffer = b))
    this.I.connect(this.Bd)
    this.I.connect(this.W)
    this.Bd.connect(this.X)
  }
  function h(d, e, g, h, k) {
    this.I = l()
    this.W = l()
    this.W.gain.value = 1 - k / 2
    this.X = l()
    this.X.gain.value = k / 2
    this.hg = l()
    this.hg.gain.value = h
    this.Bb = b(d + e)
    this.Bb.delayTime.value = d
    this.La = G.createOscillator()
    this.La.frequency.value = g
    this.sb = l()
    this.sb.gain.value = e
    this.I.connect(this.Bb)
    this.I.connect(this.W)
    this.Bb.connect(this.X)
    this.Bb.connect(this.hg)
    this.hg.connect(this.Bb)
    this.La.connect(this.sb)
    this.sb.connect(this.Bb.delayTime)
    y(this.La)
  }
  function r(b, d, e, g, h, k) {
    this.I = l()
    this.W = l()
    this.W.gain.value = 1 - k / 2
    this.X = l()
    this.X.gain.value = k / 2
    this.wa = G.createBiquadFilter()
    this.wa.type = "number" === typeof this.wa.type ? 7 : "allpass"
    this.wa.frequency.value = b
    this.wa.detune && (this.wa.detune.value = d)
    this.wa.Q.value = e
    this.La = G.createOscillator()
    this.La.frequency.value = h
    this.sb = l()
    this.sb.gain.value = g
    this.I.connect(this.wa)
    this.I.connect(this.W)
    this.wa.connect(this.X)
    this.La.connect(this.sb)
    this.sb.connect(this.wa.frequency)
    y(this.La)
  }
  function u(b) {
    this.la = l()
    this.la.gain.value = b
  }
  function z(b, d) {
    this.la = l()
    this.la.gain.value = 1 - d / 2
    this.La = G.createOscillator()
    this.La.frequency.value = b
    this.sb = l()
    this.sb.gain.value = d / 2
    this.La.connect(this.sb)
    this.sb.connect(this.la.gain)
    y(this.La)
  }
  function p(b, d) {
    this.I = l()
    this.X = l()
    this.X.gain.value = d
    this.W = l()
    this.W.gain.value = 1 - d
    this.Df = l()
    this.Df.gain.value = 0
    this.La = G.createOscillator()
    this.La.frequency.value = b
    this.La.connect(this.Df.gain)
    y(this.La)
    this.I.connect(this.Df)
    this.I.connect(this.W)
    this.Df.connect(this.X)
  }
  function C(b, d, e, g, h) {
    this.I = l()
    this.Vg = l()
    this.Ug = l()
    this.Ho(e, Math.pow(10, g / 20))
    this.X = l()
    this.X.gain.value = h
    this.W = l()
    this.W.gain.value = 1 - h
    this.qh = G.createWaveShaper()
    this.ag = new Float32Array(65536)
    this.pn(b, d)
    this.qh.ag = this.ag
    this.I.connect(this.Vg)
    this.I.connect(this.W)
    this.Vg.connect(this.qh)
    this.qh.connect(this.Ug)
    this.Ug.connect(this.X)
  }
  function E(b, d, e, g, h) {
    this.la = G.createDynamicsCompressor()
    this.la.threshold.value = b
    this.la.knee.value = d
    this.la.ratio.value = e
    this.la.attack.value = g
    this.la.release.value = h
  }
  function x(b, d) {
    this.la = G.createAnalyser()
    this.la.fftSize = b
    this.la.smoothingTimeConstant = d
    this.nn = new Float32Array(this.la.frequencyBinCount)
  }
  function B() {
    this.ma = c
    this.vd = []
    this.Ei = this.Dg = this.Cg = 0
  }
  function w(b, d) {
    this.src = b
    this.aa = P
    this.xg = d
    this.Vj = f
    var e = this
    this.gl = this.Mi = c
    this.Sg = []
    P === D && d && !M.Qd && ((this.aa = Q), (this.Mi = l()))
    this.ha = c
    var g
    switch (this.aa) {
      case Q:
        d && M.Md && CocoonJS.App.markAsMusic(b)
        this.ha = new Audio()
        P === D &&
          this.ha.addEventListener("canplay", function () {
            e.gl = G.createMediaElementSource(e.ha)
            e.gl.connect(e.Mi)
          })
        this.ha.autoplay = f
        this.ha.bq = "auto"
        this.ha.src = b
        break
      case D:
        g = new XMLHttpRequest()
        g.open("GET", b, a)
        g.responseType = "arraybuffer"
        g.onload = function () {
          if (G.decodeAudioData)
            G.decodeAudioData(g.response, function (b) {
              e.ha = b
              var d, g, h
              if (ca(e.yf)) ca(e.Fh) || ((d = e.Fh.Bd), (d.normalize = e.ao), (d.buffer = b))
              else if (e.Sg.length) {
                d = 0
                for (g = e.Sg.length; d < g; d++)
                  (b = e.Sg[d]),
                    (h = new I(e, e.yf)),
                    h.Al(a),
                    b.ma ? (h.zl(b.ma.x, b.ma.y, Ba(b.ma.m), b.Pn, b.bo, b.co), h.fj(b.ma)) : h.zl(b.x, b.y, b.Pp, b.Pn, b.bo, b.co),
                    h.play(e.Bi, e.Ej),
                    ia.push(h)
                e.Sg.length = 0
              } else (h = new I(e, e.yf)), h.play(e.Bi, e.Ej), ia.push(h)
            })
          else if (((e.ha = G.createBuffer(g.response, f)), ca(e.yf))) {
            if (!ca(e.Fh)) {
              var b = e.Fh.Bd
              b.normalize = e.ao
              b.buffer = e.ha
            }
          } else (b = new I(e, e.yf)), b.play(e.Bi, e.Ej), ia.push(b)
        }
        g.send()
        break
      case V:
        this.ha = a
        break
      case X:
        this.ha = a
    }
  }
  function I(b, d) {
    var e = this
    this.be = d
    this.Aa = this.rc = a
    this.src = b.src
    this.buffer = b
    this.aa = P
    this.xg = b.xg
    this.playbackRate = 1
    this.Oi = a
    this.Pd = this.Wc = f
    this.Xc = 0
    this.Yp = this.Xp = this.He = f
    this.Fi = this.volume = 1
    this.startTime = M.Uc.Nb
    this.Fa = this.lb = c
    this.Ud = f
    this.l = this.Jb = c
    var g = f
    switch (this.aa) {
      case Q:
        this.xg ? ((this.l = b.ha), (g = !b.Vj), (b.Vj = a)) : ((this.l = new Audio()), (this.l.autoplay = f), (this.l.src = b.ha.src), (g = a))
        g &&
          this.l.addEventListener("ended", function () {
            Z = e.be
            e.Aa = a
            M.trigger(R.prototype.c.th, L)
          })
        break
      case D:
        this.lb = l()
        this.lb.connect(n(d))
        this.buffer.aa === D
          ? b.ha && ((this.l = G.createBufferSource()), (this.l.buffer = b.ha), this.l.connect(this.lb))
          : ((this.l = this.buffer.ha), this.buffer.Mi.connect(this.lb))
        break
      case V:
        this.l = new window.Media(N + this.src, c, c, function (b) {
          b === window.Media.MEDIA_STOPPED && ((e.Oi = a), (e.Aa = a), (Z = e.be), M.trigger(R.prototype.c.th, L))
        })
        break
      case X:
        this.l = a
    }
  }
  function O(b) {
    ua.length = 0
    if (b.length) {
      var d, e, g
      d = 0
      for (e = ia.length; d < e; d++) (g = ia[d]), b.toLowerCase() === g.be.toLowerCase() && ua.push(g)
    } else Aa && !Aa.jf() && ((ua.length = 1), (ua[0] = Aa))
  }
  function F() {}
  function J() {}
  var K = R.prototype
  K.sa = function (b) {
    this.na = b
    this.b = b.b
  }
  K.sa.prototype.P = m()
  var M = c,
    L = c,
    Z = "",
    N = "",
    Q = 0,
    D = 1,
    V = 2,
    X = 3,
    P = Q,
    G = c,
    Ea = [],
    ia = [],
    Aa = c,
    Fa = f,
    Pa = 0,
    bb = 1,
    cb = 1,
    Fb = 10,
    Gb = 1e4,
    Hb = 1,
    za = {},
    bc = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ")
  e.prototype.remove = function () {
    this.I.disconnect()
    this.wa.disconnect()
    this.X.disconnect()
    this.W.disconnect()
  }
  e.prototype.Vb = q("I")
  k.prototype.remove = function () {
    this.I.disconnect()
    this.uf.disconnect()
    this.Bb.disconnect()
    this.cg.disconnect()
    this.X.disconnect()
    this.W.disconnect()
  }
  k.prototype.Vb = q("I")
  g.prototype.remove = function () {
    this.I.disconnect()
    this.Bd.disconnect()
    this.X.disconnect()
    this.W.disconnect()
  }
  g.prototype.Vb = q("I")
  h.prototype.remove = function () {
    this.I.disconnect()
    this.Bb.disconnect()
    this.La.disconnect()
    this.sb.disconnect()
    this.W.disconnect()
    this.X.disconnect()
    this.hg.disconnect()
  }
  h.prototype.Vb = q("I")
  r.prototype.remove = function () {
    this.I.disconnect()
    this.wa.disconnect()
    this.La.disconnect()
    this.sb.disconnect()
    this.W.disconnect()
    this.X.disconnect()
  }
  r.prototype.Vb = q("I")
  u.prototype.remove = function () {
    this.la.disconnect()
  }
  u.prototype.Vb = q("la")
  z.prototype.remove = function () {
    this.La.disconnect()
    this.sb.disconnect()
    this.la.disconnect()
  }
  z.prototype.Vb = q("la")
  p.prototype.remove = function () {
    this.La.disconnect()
    this.Df.disconnect()
    this.I.disconnect()
    this.X.disconnect()
    this.W.disconnect()
  }
  p.prototype.Vb = q("I")
  C.prototype.Ho = function (b, d) {
    0.01 > b && (b = 0.01)
    this.Vg.gain.value = b
    this.Ug.gain.value = Math.pow(1 / b, 0.6) * d
  }
  C.prototype.shape = function (b, d, e) {
    var g = 1.05 * e * d - d
    e = 0 > b ? -1 : 1
    b = 0 > b ? -b : b
    d = b < d ? b : d + g * (1 - Math.exp(-(1 / g) * (b - d)))
    return d * e
  }
  C.prototype.pn = function (b, d) {
    for (var e = Math.pow(10, b / 20), g = Math.pow(10, d / 20), h = 0, k = 0; 32768 > k; ++k)
      (h = k / 32768), (h = this.shape(h, e, g)), (this.ag[32768 + k] = h), (this.ag[32768 - k - 1] = -h)
  }
  C.prototype.remove = function () {
    this.I.disconnect()
    this.Vg.disconnect()
    this.qh.disconnect()
    this.Ug.disconnect()
    this.X.disconnect()
    this.W.disconnect()
  }
  C.prototype.Vb = q("I")
  E.prototype.remove = function () {
    this.la.disconnect()
  }
  E.prototype.Vb = q("la")
  x.prototype.hb = function () {
    this.la.getFloatFrequencyData(this.nn)
  }
  x.prototype.remove = function () {
    this.la.disconnect()
  }
  x.prototype.Vb = q("la")
  B.prototype.fj = function (b) {
    if ((this.ma = b)) (this.Cg = this.ma.x), (this.Dg = this.ma.y)
    this.vd.length = 0
  }
  B.prototype.Jk = function () {
    return !!this.ma
  }
  B.prototype.hb = function (b) {
    this.ma &&
      ((this.Ei = Ja(this.Cg, this.Dg, this.ma.x, this.ma.y)),
      (b = Na(this.Cg, this.Dg, this.ma.x, this.ma.y) / b),
      4 > this.vd.length || this.vd.shift(),
      this.vd.push(b),
      (this.Cg = this.ma.x),
      (this.Dg = this.ma.y))
  }
  B.prototype.Ek = function () {
    if (!this.vd.length) return 0
    var b,
      d,
      e = 0
    b = 0
    for (d = this.vd.length; b < d; b++) e += this.vd[b]
    return e / this.vd.length
  }
  B.prototype.Fk = function () {
    return Math.cos(this.Ei) * this.Ek()
  }
  B.prototype.Gk = function () {
    return Math.sin(this.Ei) * this.Ek()
  }
  var Ib = f
  w.prototype.Tn = function () {
    switch (this.aa) {
      case Q:
        return 4 === this.ha.readyState
      case D:
        return !!this.ha
      case V:
        return a
      case X:
        return a
    }
    return f
  }
  I.prototype.jf = function () {
    switch (this.aa) {
      case Q:
        return this.l.ended
      case D:
        return this.buffer.aa === D ? ((!this.rc && !this.Aa && this.l.loop) || this.Pd ? f : M.Uc.Nb - this.startTime > this.buffer.ha.duration) : this.l.ended
      case V:
        return this.Oi
      case X:
        a
    }
    return a
  }
  I.prototype.vm = function () {
    return this.rc || this.Aa ? a : this.jf()
  }
  I.prototype.Al = function (b) {
    P === D &&
      (!this.Ud && b
        ? (this.Fa ||
            ((this.Fa = G.createPanner()),
            (this.Fa.panningModel = "number" === typeof this.Fa.panningModel ? bb : ["equalpower", "HRTF", "soundfield"][bb]),
            (this.Fa.distanceModel = "number" === typeof this.Fa.distanceModel ? cb : ["linear", "inverse", "exponential"][cb]),
            (this.Fa.refDistance = Fb),
            (this.Fa.maxDistance = Gb),
            (this.Fa.rolloffFactor = Hb)),
          this.lb.disconnect(),
          this.lb.connect(this.Fa),
          this.Fa.connect(n(this.be)),
          (this.Ud = a))
        : this.Ud && !b && (this.Fa.disconnect(), this.lb.disconnect(), this.lb.connect(n(this.be)), (this.Ud = f)))
  }
  I.prototype.zl = function (b, d, e, g, h, k) {
    this.Ud &&
      P === D &&
      (this.Fa.setPosition(b, d, 0),
      this.Fa.setOrientation(Math.cos(ya(e)), Math.sin(ya(e)), 0),
      (this.Fa.coneInnerAngle = g),
      (this.Fa.coneOuterAngle = h),
      (this.Fa.coneOuterGain = k))
  }
  I.prototype.fj = function (b) {
    this.Ud && P === D && (this.Jb || (this.Jb = new B()), this.Jb.fj(b))
  }
  I.prototype.hb = function (b) {
    if (this.Ud && !(P !== D || !this.Jb || !this.Jb.Jk() || !this.vg()))
      this.Jb.hb(b),
        this.Fa.setPosition(this.Jb.ma.x, this.Jb.ma.y, 0),
        (b = 0),
        "undefined" !== typeof this.Jb.ma.m && ((b = this.Jb.ma.m), this.Fa.setOrientation(Math.cos(b), Math.sin(b), 0)),
        this.Fa.setVelocity(this.Jb.Fk(), this.Jb.Gk(), 0)
  }
  I.prototype.play = function (b, d) {
    var e = this.l
    this.He = b
    this.volume = d
    switch (this.aa) {
      case Q:
        1 !== e.playbackRate && (e.playbackRate = 1)
        e.volume !== 1 * d && (e.volume = 1 * d)
        e.loop !== b && (e.loop = b)
        e.muted && (e.muted = f)
        if (!this.rc && this.Aa && 0 !== e.currentTime)
          try {
            e.currentTime = 0
          } catch (g) {}
        this.l.play()
        break
      case D:
        this.muted = f
        this.Fi = 1
        if (this.buffer.aa === D)
          this.rc || ((this.l = G.createBufferSource()), (this.l.buffer = this.buffer.ha), this.l.connect(this.lb)),
            (this.l.loop = b),
            (this.lb.gain.value = 1 * d),
            y(this.l)
        else {
          1 !== e.playbackRate && (e.playbackRate = 1)
          e.loop !== b && (e.loop = b)
          if (!this.rc && this.Aa && 0 !== e.currentTime)
            try {
              e.currentTime = 0
            } catch (h) {}
          this.lb.gain.value = 1 * d
          e.play()
        }
        break
      case V:
        !this.rc && this.Aa && e.seekTo(0)
        e.play()
        this.Oi = f
        break
      case X:
        M.Gb ? AppMobi.context.playSound(this.src) : AppMobi.player.playSound(this.src)
    }
    this.playbackRate = 1
    this.startTime = M.Uc.Nb
    this.Pd = this.Aa = this.rc = f
  }
  I.prototype.stop = function () {
    switch (this.aa) {
      case Q:
        this.l.paused || this.l.pause()
        break
      case D:
        this.buffer.aa === D ? t(this.l) : this.l.paused || this.l.pause()
        break
      case V:
        this.l.stop()
    }
    this.Aa = a
    this.Pd = f
  }
  I.prototype.pause = function () {
    if (!this.rc && !this.Aa && !this.jf() && !this.Pd) {
      switch (this.aa) {
        case Q:
          this.l.paused || this.l.pause()
          break
        case D:
          this.buffer.aa === D ? ((this.Xc = this.Dk()), this.He && (this.Xc %= this.mg()), t(this.l)) : this.l.paused || this.l.pause()
          break
        case V:
          this.l.pause()
      }
      this.Pd = a
    }
  }
  I.prototype.mg = function () {
    switch (this.aa) {
      case Q:
        if ("undefined" !== typeof this.l.duration) return this.l.duration
        break
      case D:
        return this.buffer.ha.duration
      case V:
        return this.l.getDuration()
    }
    return 0
  }
  I.prototype.Dk = function () {
    var b = this.mg(),
      d = 0
    switch (this.aa) {
      case Q:
        "undefined" !== typeof this.l.currentTime && (d = this.l.currentTime)
        break
      case D:
        if (this.buffer.aa === D) {
          if (this.Pd) return this.Xc
          d = M.Uc.Nb - this.startTime
        } else "undefined" !== typeof this.l.currentTime && (d = this.l.currentTime)
    }
    !this.He && d > b && (d = b)
    return d
  }
  I.prototype.vg = function () {
    return !this.Pd && !this.rc && !this.Aa && !this.jf()
  }
  I.prototype.Jo = function (b) {
    this.volume = b
    this.Qo()
  }
  I.prototype.Qo = function () {
    var b = 1 * this.volume
    switch (this.aa) {
      case Q:
        this.l.volume && this.l.volume !== b && (this.l.volume = b)
        break
      case D:
        this.lb.gain.value = b * this.Fi
    }
  }
  I.prototype.Po = function () {
    var b = this.playbackRate
    if ((1 === Pa && !this.xg) || 2 === Pa) b *= M.Hf
    switch (this.aa) {
      case Q:
        this.l.playbackRate !== b && (this.l.playbackRate = b)
        break
      case D:
        this.buffer.aa === D ? this.l.playbackRate.value !== b && (this.l.playbackRate.value = b) : this.l.playbackRate !== b && (this.l.playbackRate = b)
    }
  }
  I.prototype.Io = function (b) {
    switch (this.aa) {
      case Q:
        b ? (this.vg() ? (this.l.pause(), (this.Wc = a)) : (this.Wc = f)) : this.Wc && this.l.play()
        break
      case D:
        if (b)
          this.vg()
            ? (this.buffer.aa === D ? ((this.Xc = this.Dk()), this.He && (this.Xc %= this.mg()), t(this.l)) : this.l.pause(), (this.Wc = a))
            : (this.Wc = f)
        else if (this.Wc)
          if (this.buffer.aa === D) {
            this.l = G.createBufferSource()
            this.l.buffer = this.buffer.ha
            this.l.connect(this.lb)
            this.l.loop = this.He
            this.lb.gain.value = 1 * this.volume * this.Fi
            this.startTime = M.Uc.Nb - this.Xc
            b = this.l
            var d = this.Xc,
              e = this.mg()
            b.start ? b.start(0, d) : b.noteGrainOn(0, d, e - d)
          } else this.l.play()
        break
      case V:
        b ? (this.vg() ? (this.l.pause(), (this.Wc = a)) : (this.Wc = f)) : this.Wc && this.l.play()
    }
  }
  K.da = function (b) {
    this.type = b
    M = this.b = b.b
    L = this
    this.Sd = c
    this.vi = -600
    G = c
    "undefined" !== typeof AudioContext
      ? ((P = D), (G = new AudioContext()))
      : "undefined" !== typeof webkitAudioContext && ((P = D), (G = new webkitAudioContext()))
    this.b.Qd &&
      P === D &&
      document.addEventListener(
        "touchstart",
        function () {
          if (!Ib) {
            var b = G.createBuffer(1, 1, 22050),
              d = G.createBufferSource()
            d.buffer = b
            d.connect(G.destination)
            y(d)
            Ib = a
          }
        },
        a
      )
    P !== D && (this.b.Od ? (P = V) : this.b.ve && (P = X))
    P === V && ((N = location.href), (b = N.lastIndexOf("/")), -1 < b && (N = N.substr(0, b + 1)), (N = N.replace("file://", "")))
    if (this.b.Un && this.b.Sk && "undefined" === typeof Audio)
      alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.b.We(this)
    else {
      if (this.b.Gb) Fa = this.b.hi
      else
        try {
          Fa = !!new Audio().canPlayType('audio/ogg; codecs="vorbis"')
        } catch (d) {
          Fa = f
        }
      this.b.uj(this)
    }
  }
  var Ga = K.da.prototype
  Ga.P = function () {
    Pa = this.V[0]
    bb = this.V[1]
    cb = this.V[2]
    this.vi = -this.V[3]
    Fb = this.V[4]
    Gb = this.V[5]
    Hb = this.V[6]
    P === D &&
      ((G.listener.speedOfSound = this.V[7]),
      (G.listener.dopplerFactor = this.V[8]),
      G.listener.setPosition(this.b.width / 2, this.b.height / 2, this.vi),
      G.listener.setOrientation(0, 0, 1, 0, -1, 0),
      (this.Sd = new B()))
    this.b.qm(function (b) {
      L.po(b)
    })
  }
  Ga.po = function (b) {
    var d, e
    d = 0
    for (e = ia.length; d < e; d++) ia[d].Io(b)
  }
  Ga.hb = function () {
    var b = this.b.Ed,
      d,
      e,
      g
    d = 0
    for (e = ia.length; d < e; d++)
      (g = ia[d]), g.hb(b), g.aa !== Q && g.aa !== X && !g.rc && !g.Aa && g.jf() && ((g.Aa = a), (Z = g.be), M.trigger(R.prototype.c.th, L)), 0 !== Pa && g.Po()
    var h, k
    for (h in za)
      if (za.hasOwnProperty(h)) {
        g = za[h]
        d = 0
        for (e = g.length; d < e; d++) (k = g[d]), k.hb && k.hb()
      }
    P === D &&
      this.Sd.Jk() &&
      (this.Sd.hb(b), G.listener.setPosition(this.Sd.ma.x, this.Sd.ma.y, this.vi), G.listener.setVelocity(this.Sd.Fk(), this.Sd.Gk(), 0))
  }
  Ga.qn = function (b, d) {
    var e, g, h
    e = 0
    for (g = Ea.length; e < g; e++) if (((h = Ea[e]), h.src === b)) return h
    h = new w(b, d)
    Ea.push(h)
    return h
  }
  Ga.wk = function (b, d, e, g, h) {
    var k, p, r
    k = 0
    for (p = ia.length; k < p; k++) if (((r = ia[k]), r.src === b && (r.vm() || e))) return (r.be = d), r
    b = this.qn(b, e)
    if (!b.ha) return "<preload>" !== d && ((b.yf = d), (b.Bi = g), (b.Ej = h)), c
    r = new I(b, d)
    ia.push(r)
    return r
  }
  var ua = []
  F.prototype.th = function (b) {
    return Z.toLowerCase() === b.toLowerCase()
  }
  F.prototype.em = function () {
    var b, d
    b = 0
    for (d = Ea.length; b < d; b++) if (!Ea[b].Tn()) return f
    return a
  }
  K.c = new F()
  J.prototype.k = function (b, e, g, h, k) {
    h = d(h)
    if ((Aa = this.wk(this.b.Vh + e.toLowerCase() + (Fa ? ".ogg" : ".m4a"), k, 1 === b, 0 !== g, h))) Aa.Al(f), Aa.play(0 !== g, h)
  }
  J.prototype.Qf = function (b, e) {
    O(b)
    var g = d(e),
      h,
      k
    h = 0
    for (k = ua.length; h < k; h++) ua[h].Jo(g)
  }
  J.prototype.Ia = function (b, d) {
    var e = 1 === b,
      g = this.b.Vh + d.toLowerCase() + (Fa ? ".ogg" : ".m4a")
    P === X ? (this.b.Gb ? AppMobi.context.loadSound(g) : AppMobi.player.loadSound(g)) : P !== V && this.wk(g, "<preload>", e, f)
  }
  J.prototype.le = function (b) {
    O(b)
    var d
    b = 0
    for (d = ua.length; b < d; b++) ua[b].stop()
  }
  K.a = new J()
  K.d = new (m())()
})()
function S(d) {
  this.b = d
}
;(function () {
  function d() {
    this.name = ""
    this.$g = 0
    this.Vd = []
  }
  function n() {
    g++
    g === k.length && k.push(new d())
    return k[g]
  }
  function l() {
    return 0 > g ? c : k[g]
  }
  function b() {}
  function y() {}
  function t() {}
  var e = S.prototype
  e.sa = function (b) {
    this.na = b
    this.b = b.b
  }
  e.sa.prototype.P = m()
  e.da = function (b) {
    this.type = b
    this.b = b.b
  }
  var k = [],
    g = -1
  e.da.prototype.P = m()
  b.prototype.i = function (b) {
    var d = l()
    return !d ? f : b.toLowerCase() === d.name
  }
  b.prototype.ba = function (b, d, e) {
    var g = l()
    if (!g) return f
    b = ka(b)
    return 0 > b || b >= g.Vd.length ? f : Yb(g.Vd[b], d, e)
  }
  e.c = new b()
  y.prototype.CallFunction = function (b, d) {
    var e = n()
    e.name = b.toLowerCase()
    e.$g = 0
    va(e.Vd, d)
    this.b.trigger(S.prototype.c.i, this, e.name)
    g--
  }
  y.prototype.fd = function (b) {
    var d = l()
    d && (d.$g = b)
  }
  e.a = new y()
  t.prototype.Qb = function (b, d) {
    d = ka(d)
    var e = l()
    e ? (0 <= d && d < e.Vd.length ? b.dh(e.Vd[d]) : b.F(0)) : b.F(0)
  }
  t.prototype.Gj = function (b, d) {
    var e = n()
    e.name = d.toLowerCase()
    e.$g = 0
    e.Vd.length = 0
    var k, p
    k = 2
    for (p = arguments.length; k < p; k++) e.Vd.push(arguments[k])
    this.b.trigger(S.prototype.c.i, this, e.name)
    g--
    b.dh(e.$g)
  }
  e.d = new t()
})()
function Zb(d) {
  this.b = d
}
;(function () {
  function d() {}
  var n = Zb.prototype
  n.sa = function (b) {
    this.na = b
    this.b = b.b
  }
  n.sa.prototype.P = m()
  n.da = function (b) {
    this.type = b
    this.b = b.b
    this.pi = Array(256)
    this.nh = Array(256)
    this.Te = 0
  }
  var l = n.da.prototype
  l.P = function () {
    var b = this
    this.b.Wa ||
      (jQuery(document).keydown(function (d) {
        b.ho(d)
      }),
      jQuery(document).keyup(function (d) {
        b.io(d)
      }))
  }
  l.ho = function (b) {
    if (this.pi[b.which]) this.nh[b.which] && b.preventDefault()
    else {
      this.pi[b.which] = a
      this.Te = b.which
      this.b.trigger(Zb.prototype.c.Vl, this)
      var d = this.b.trigger(Zb.prototype.c.Zl, this),
        l = this.b.trigger(Zb.prototype.c.$l, this)
      if (d || l) (this.nh[b.which] = a), b.preventDefault()
    }
  }
  l.io = function (b) {
    this.pi[b.which] = f
    this.Te = b.which
    this.b.trigger(Zb.prototype.c.Wl, this)
    var d = this.b.trigger(Zb.prototype.c.uh, this),
      l = this.b.trigger(Zb.prototype.c.am, this)
    if (d || l || this.nh[b.which]) (this.nh[b.which] = a), b.preventDefault()
  }
  d.prototype.Zl = function (b) {
    return b === this.Te
  }
  d.prototype.Vl = s(a)
  d.prototype.Wl = s(a)
  d.prototype.uh = function (b) {
    return b === this.Te
  }
  d.prototype.$l = function (b) {
    return b === this.Te
  }
  d.prototype.am = function (b) {
    return b === this.Te
  }
  n.c = new d()
  n.a = new (m())()
  n.d = new (m())()
})()
function $b(d) {
  this.b = d
}
;(function () {
  function d() {
    g = t.services.getUserId()
    t.services.getUsername()
    e.trigger($b.prototype.c.vh, k)
  }
  function n() {
    t = window.kongregateAPI.getAPI()
    t.services.connect()
    t.services.addEventListener("login", d)
    g = t.services.getUserId()
    t.services.getUsername()
    0 < g && e.trigger($b.prototype.c.vh, k)
  }
  function l() {}
  function b() {}
  var y = $b.prototype
  y.sa = function (b) {
    this.na = b
    this.b = b.b
  }
  y.sa.prototype.P = m()
  var t = c,
    e = c,
    k = c,
    g = 0
  y.da = function (b) {
    this.type = b
    e = this.b = b.b
    k = this
    !this.b.Wa && "undefined" !== typeof window.kongregateAPI && window.kongregateAPI.loadAPI(n)
  }
  var h = y.da.prototype
  h.P = m()
  h.jl = function () {
    0 < g && e.trigger($b.prototype.c.vh, k)
  }
  l.prototype.vh = s(a)
  y.c = new l()
  b.prototype.Pj = function (b, d) {
    t && t.stats.submit(b, d)
  }
  y.a = new b()
  y.d = new (m())()
})()
function T(d) {
  this.b = d
}
;(function () {
  function d() {
    if (0 === this.Nh.length) {
      var b = document.createElement("canvas")
      b.width = this.width
      b.height = this.height
      var d = b.getContext("2d")
      this.Re
        ? d.drawImage(this.r, this.Le, this.Me, this.width, this.height, 0, 0, this.width, this.height)
        : d.drawImage(this.r, 0, 0, this.width, this.height)
      this.Nh = b.toDataURL("image/png")
    }
    return this.Nh
  }
  function n() {}
  function l() {}
  var b = T.prototype
  b.sa = function (b) {
    this.na = b
    this.b = b.b
  }
  var y = b.sa.prototype
  y.P = function () {
    if (!this.O) {
      var b, e, g, h, k, l, n, t, w
      b = 0
      for (e = this.ta.length; b < e; b++) {
        k = this.ta[b]
        n = {}
        n.name = k[0]
        n.speed = k[1]
        n.loop = k[2]
        n.aj = k[3]
        n.Zg = k[4]
        n.pl = k[5]
        n.frames = []
        g = 0
        for (h = k[6].length; g < h; g++)
          (l = k[6][g]),
            (t = {}),
            (t.qj = l[0]),
            (t.rj = l[1]),
            (t.Le = l[2]),
            (t.Me = l[3]),
            (t.width = l[4]),
            (t.height = l[5]),
            (t.duration = l[6]),
            (t.sc = l[7]),
            (t.tc = l[8]),
            (t.ei = l[9]),
            (t.Ri = l[10]),
            (t.ql = l[11]),
            (t.Re = 0 !== t.width),
            (t.Nh = ""),
            (t.Up = d),
            (w = { left: 0, top: 0, right: 1, bottom: 1 }),
            (t.jj = w),
            (t.fa = c),
            (w = this.b.mn(l[0])) ? (t.r = w) : ((t.r = new Image()), (t.r.src = l[0]), (t.r.xm = l[0]), (t.r.gk = l[1]), (t.r.Jc = c), this.b.bd.push(t.r)),
            n.frames.push(t)
        this.ta[b] = n
      }
    }
  }
  y.Rg = function () {
    if (!this.O) {
      var b, d, e, g, h, k
      b = 0
      for (d = this.ta.length; b < d; b++) {
        h = this.ta[b]
        e = 0
        for (g = h.frames.length; e < g; e++) (k = h.frames[e]), (k.r.Jc = c), (k.fa = c)
      }
    }
  }
  y.Ki = function () {
    if (!this.O && this.f.length) {
      var b, d, e, g, h, k
      b = 0
      for (d = this.ta.length; b < d; b++) {
        h = this.ta[b]
        e = 0
        for (g = h.frames.length; e < g; e++) (k = h.frames[e]), k.r.Jc || (k.r.Jc = this.b.u.Hg(k.r, f, this.b.ka, k.ql)), (k.fa = k.r.Jc)
      }
      b = 0
      for (d = this.f.length; b < d; b++) (e = this.f[b]), (e.Kh = e.Cd.fa)
    }
  }
  var t = []
  y.zj = function () {
    if (!this.O && !this.f.length) {
      var b = !!this.b.u,
        d,
        e,
        g,
        h,
        k,
        l,
        n,
        w
      d = t.length = 0
      for (e = this.ta.length; d < e; d++) {
        l = this.ta[d]
        g = 0
        for (h = l.frames.length; g < h; g++)
          if (((n = l.frames[g]), (w = b ? n.r.Jc : n.r))) (k = t.indexOf(w)), -1 === k && t.push(w), (n.r.Jc = c), (n.fa = c)
      }
      d = 0
      for (e = t.length; d < e; d++) (w = t[d]), b ? this.b.u.deleteTexture(w) : w.hintUnload && w.hintUnload()
      t.length = 0
    }
  }
  var e = []
  y.Ti = function (b) {
    var d, g, h, k, l, n
    d = e.length = 0
    for (g = this.ta.length; d < g; d++) {
      l = this.ta[d]
      h = 0
      for (k = l.frames.length; h < k; h++) (n = l.frames[h].r), -1 === e.indexOf(n) && (b.drawImage(n, 0, 0), e.push(n))
    }
  }
  b.da = function (b) {
    this.type = b
    this.b = b.b
    b = this.type.ta[0].frames[0].Ri
    this.Kb ? this.Kc.eh(b) : (this.Kc = new Va(b))
  }
  var k = b.da.prototype
  k.P = function () {
    this.visible = 0 === this.V[0]
    this.fi = this.mi = f
    this.wm = 0 !== this.V[2]
    !(1 === this.type.ta.length && 1 === this.type.ta[0].frames.length) && 0 !== this.type.ta[0].speed && (this.b.uj(this), (this.mi = a))
    this.Ta = this.type.ta[0]
    this.D = this.V[1]
    0 > this.D && (this.D = 0)
    this.D >= this.Ta.frames.length && (this.D = this.Ta.frames.length - 1)
    if (0 !== this.D) {
      var b = this.Ta.frames[this.D]
      this.Kc.eh(b.Ri)
      this.sc = b.sc
      this.tc = b.tc
    }
    this.Lh = this.type.ta[0].speed
    this.Id = this.og()
    this.Uf = a
    this.zd = 0
    this.Tf = a
    this.Zf = this.Wj = ""
    this.dk = 0
    this.Dh = -1
    var d,
      e,
      g,
      h,
      k,
      l,
      n,
      b = 0
    for (d = this.type.ta.length; b < d; b++) {
      h = this.type.ta[b]
      e = 0
      for (g = h.frames.length; e < g; e++)
        (k = h.frames[e]),
          k.r.hintLoad && k.r.hintLoad(),
          0 === k.width && ((k.width = k.r.width), (k.height = k.r.height)),
          k.Re &&
            ((n = k.r),
            (l = k.jj),
            (l.left = k.Le / n.width),
            (l.top = k.Me / n.height),
            (l.right = (k.Le + k.width) / n.width),
            (l.bottom = (k.Me + k.height) / n.height),
            0 === k.Le && 0 === k.Me && k.width === n.width && k.height === n.height && (k.Re = f)),
          this.b.u && (k.r.Jc || (k.r.Jc = this.b.u.Hg(k.r, f, this.b.ka, k.ql)), (k.fa = k.r.Jc))
    }
    this.Cd = this.Ta.frames[this.D]
    this.Kh = this.Cd.fa
  }
  k.zh = function (b) {
    this.D = b ? 0 : this.Ta.frames.length - 1
    this.Uf = f
    this.Wj = this.Ta.name
    this.fi = a
    this.b.trigger(T.prototype.c.Ul, this)
    this.b.trigger(T.prototype.c.Tl, this)
    this.fi = f
    this.zd = 0
  }
  k.og = function () {
    return (Date.now() - this.b.nj) / 1e3
  }
  k.hb = function () {
    this.Zf.length && this.nk()
    0 <= this.Dh && this.Am()
    var b = this.og(),
      d = this.Ta,
      e = d.frames[this.D],
      g = e.duration / this.Lh,
      h = this.b.Hf
    ;-1 !== this.Og && (h = this.Og)
    g /= 0 === h ? 1e-9 : h
    if (this.Uf && b >= this.Id + g) {
      this.Tf ? this.D++ : this.D--
      this.Id += g
      this.D >= d.frames.length &&
        (d.pl ? ((this.Tf = f), (this.D = d.frames.length - 2)) : d.loop ? (this.D = d.Zg) : (this.zd++, this.zd >= d.aj ? this.zh(f) : (this.D = d.Zg)))
      0 > this.D &&
        (d.pl
          ? ((this.D = 1), (this.Tf = a), d.loop || (this.zd++, this.zd >= d.aj && this.zh(a)))
          : d.loop
          ? (this.D = d.Zg)
          : (this.zd++, this.zd >= d.aj ? this.zh(a) : (this.D = d.Zg)))
      0 > this.D ? (this.D = 0) : this.D >= d.frames.length && (this.D = d.frames.length - 1)
      if (b > this.Id + d.frames[this.D].duration / this.Lh / (0 === h ? 1e-9 : h)) this.Id = b
      b = d.frames[this.D]
      this.Xe(e, b)
      this.b.R = a
    }
  }
  k.nk = function () {
    var b = this.Ta.frames[this.D],
      d,
      e,
      g,
      h = c
    d = 0
    for (e = this.type.ta.length; d < e; d++)
      if (((g = this.type.ta[d]), g.name.toLowerCase() === this.Zf.toLowerCase())) {
        h = g
        break
      }
    this.Zf = ""
    h &&
      !(h.name.toLowerCase() === this.Ta.name.toLowerCase() && this.Uf) &&
      ((this.Ta = h),
      (this.Lh = h.speed),
      0 > this.D && (this.D = 0),
      this.D >= this.Ta.frames.length && (this.D = this.Ta.frames.length - 1),
      1 === this.dk && (this.D = 0),
      (this.Uf = a),
      (this.Id = this.og()),
      (this.Tf = a),
      this.Xe(b, this.Ta.frames[this.D]),
      (this.b.R = a))
  }
  k.Am = function () {
    var b = this.Ta.frames[this.D],
      d = this.D
    this.D = ka(this.Dh)
    0 > this.D && (this.D = 0)
    this.D >= this.Ta.frames.length && (this.D = this.Ta.frames.length - 1)
    d !== this.D && (this.Xe(b, this.Ta.frames[this.D]), (this.Id = this.og()), (this.b.R = a))
    this.Dh = -1
  }
  k.Xe = function (b, d) {
    var e = b.width,
      g = b.height,
      h = d.width,
      k = d.height
    e != h && (this.width *= h / e)
    g != k && (this.height *= k / g)
    this.sc = d.sc
    this.tc = d.tc
    this.Kc.eh(d.Ri)
    this.Xa()
    this.Cd = d
    this.Kh = d.fa
    e = 0
    for (g = this.ua.length; e < g; e++) (h = this.ua[e]), h.oo && h.oo(b, d)
    this.b.trigger(T.prototype.c.Xe, this)
  }
  k.oc = function (b) {
    b.globalAlpha = this.opacity
    var d = this.Cd,
      e = d.Re,
      g = d.r,
      h = this.x,
      k = this.y,
      l = this.width,
      n = this.height
    if (0 === this.m && 0 <= l && 0 <= n)
      (h -= this.sc * l),
        (k -= this.tc * n),
        this.b.vc && ((h = (h + 0.5) | 0), (k = (k + 0.5) | 0)),
        e ? b.drawImage(g, d.Le, d.Me, d.width, d.height, h, k, l, n) : b.drawImage(g, h, k, l, n)
    else {
      this.b.vc && ((h = (h + 0.5) | 0), (k = (k + 0.5) | 0))
      b.save()
      var t = 0 < l ? 1 : -1,
        y = 0 < n ? 1 : -1
      b.translate(h, k)
      ;(1 !== t || 1 !== y) && b.scale(t, y)
      b.rotate(this.m * t * y)
      h = 0 - this.sc * fa(l)
      k = 0 - this.tc * fa(n)
      e ? b.drawImage(g, d.Le, d.Me, d.width, d.height, h, k, fa(l), fa(n)) : b.drawImage(g, h, k, fa(l), fa(n))
      b.restore()
    }
  }
  k.Cb = function (b) {
    b.yb(this.Kh)
    b.Zd(this.opacity)
    var d = this.Cd,
      e = this.Sb
    if (this.b.vc) {
      var g = ((this.x + 0.5) | 0) - this.x,
        h = ((this.y + 0.5) | 0) - this.y
      d.Re
        ? b.xc(e.qa + g, e.ra + h, e.cb + g, e.eb + h, e.ab + g, e.bb + h, e.Za + g, e.$a + h, d.jj)
        : b.Yg(e.qa + g, e.ra + h, e.cb + g, e.eb + h, e.ab + g, e.bb + h, e.Za + g, e.$a + h)
    } else d.Re ? b.xc(e.qa, e.ra, e.cb, e.eb, e.ab, e.bb, e.Za, e.$a, d.jj) : b.Yg(e.qa, e.ra, e.cb, e.eb, e.ab, e.bb, e.Za, e.$a)
  }
  k.tn = function (b) {
    var d = this.Cd,
      e,
      g
    e = 0
    for (g = d.ei.length; e < g; e++) if (b.toLowerCase() === d.ei[e][0].toLowerCase()) return e
    return -1
  }
  k.ai = function (b, d) {
    var e = this.Cd,
      g = e.ei,
      h
    h = v(b) ? this.tn(b) : b - 1
    h = ka(h)
    if (0 > h || h >= g.length) return d ? this.x : this.y
    var k = (g[h][1] - e.sc) * this.width,
      g = g[h][2],
      g = (g - e.tc) * this.height,
      e = Math.cos(this.m)
    h = Math.sin(this.m)
    var l = k * e - g * h,
      g = g * e + k * h,
      k = l + this.x,
      g = g + this.y
    return d ? k : g
  }
  var g = new Sa(),
    h = f
  y.finish = function (b) {
    if (h) {
      if (b) {
        var d = this.b.Ja().Da.ac
        b = c.K()
        var e = g.Jf(),
          k,
          l
        if (b.L) {
          b.L = f
          b.f.length = e.length
          k = 0
          for (l = e.length; k < l; k++) b.f[k] = e[k]
          if (d) {
            k = b.ia.length = 0
            for (l = c.f.length; k < l; k++) (d = c.f[k]), g.contains(d) || b.ia.push(d)
          }
        } else {
          var n = b.f.length
          b.f.length = n + e.length
          k = 0
          for (l = e.length; k < l; k++) (b.f[n + k] = e[k]), d && wa(b.ia, e[k])
        }
        c.ne()
      }
      g.clear()
      h = f
    }
  }
  n.prototype.Tl = function (b) {
    return this.Wj.toLowerCase() === b.toLowerCase()
  }
  n.prototype.Ul = s(a)
  n.prototype.Xe = s(a)
  b.c = new n()
  l.prototype.H = function (b, d) {
    this.Zf = b
    this.dk = d
    this.mi || (this.b.uj(this), (this.mi = a))
    this.fi || this.nk()
  }
  b.a = new l()
  b.d = new (m())()
})()
function U(d) {
  this.b = d
}
;(function () {
  function d() {
    return k.length ? k.pop() : {}
  }
  function n(b) {
    var d, e
    d = 0
    for (e = b.length; d < e; d++) k.push(b[d])
    b.length = 0
  }
  function l() {}
  var b = U.prototype
  b.P = function () {
    b.a.Oj = function (b) {
      this.width !== b && ((this.width = b), (this.de = a), this.Xa())
    }
  }
  b.sa = function (b) {
    this.na = b
    this.b = b.b
  }
  var y = b.sa.prototype
  y.P = m()
  y.Rg = function () {
    if (!this.O) {
      var b, d, e
      b = 0
      for (d = this.f.length; b < d; b++) (e = this.f[b]), (e.Vc = c), (e.Je = c), (e.$b = c)
    }
  }
  b.da = function (b) {
    this.type = b
    this.b = b.b
    this.Kb ? (this.nd.length = 0) : (this.nd = [])
    this.de = a
  }
  var y = b.da.prototype,
    t = {}
  y.P = function () {
    this.text = this.V[0]
    this.visible = 0 === this.V[1]
    this.font = this.V[2]
    this.color = this.V[3]
    this.Ik = this.V[4]
    this.Nl = this.V[5]
    this.Wo = 0 === this.V[7]
    this.al = this.ze = this.width
    this.ye = this.height
    this.Yn = this.V[8]
    this.jg = this.Pc = ""
    var b = this.font.split(" ")
    this.gq = this.hq = this.Vi = 0
    var d
    for (d = 0; d < b.length; d++)
      if ("pt" === b[d].substr(b[d].length - 2, 2)) {
        this.Vi = parseInt(b[d].substr(0, b[d].length - 2))
        this.xo = Math.ceil(96 * (this.Vi / 72)) + 4
        0 < d && (this.jg = b[d - 1])
        this.Pc = b[d + 1]
        for (d += 2; d < b.length; d++) this.Pc += " " + b[d]
        break
      }
    this.$b = this.Je = this.Vc = c
    this.Hi = f
    this.Kb ? this.pd.set(0, 0, 1, 1) : (this.pd = new ma(0, 0, 1, 1))
  }
  y.Ne = function () {
    this.Vc = this.Je = c
    this.b.u && this.$b && this.b.u.deleteTexture(this.$b)
    this.$b = c
  }
  y.Aj = function () {
    this.font = this.jg + " " + this.Vi.toString() + "pt " + this.Pc
    this.de = a
    this.b.R = a
  }
  y.oc = function (b, d) {
    b.font = this.font
    b.textBaseline = "top"
    b.fillStyle = this.color
    b.globalAlpha = d ? 1 : this.opacity
    var e = 1
    d && ((e = this.j.mb()), b.save(), b.scale(e, e))
    if (this.de || this.width !== this.al) this.type.na.km(this.text, this.nd, b, this.width, this.Wo), (this.de = f), (this.al = this.width)
    this.cc()
    var e = d ? 0 : this.Sb.qa,
      k = d ? 0 : this.Sb.ra
    this.b.vc && ((e = (e + 0.5) | 0), (k = (k + 0.5) | 0))
    0 !== this.m && !d && (b.save(), b.translate(e, k), b.rotate(this.m), (k = e = 0))
    var l = k + this.height,
      p = this.xo,
      p = p + this.Yn * this.b.devicePixelRatio,
      n,
      t
    1 === this.Nl ? (k += Math.max(this.height / 2 - (this.nd.length * p) / 2, 0)) : 2 === this.Nl && (k += Math.max(this.height - this.nd.length * p - 2, 0))
    for (
      t = 0;
      t < this.nd.length &&
      !((n = e),
      1 === this.Ik ? (n = e + (this.width - this.nd[t].width) / 2) : 2 === this.Ik && (n = e + (this.width - this.nd[t].width)),
      b.fillText(this.nd[t].text, n, k),
      (k += p),
      k >= l - p);
      t++
    );
    ;(0 !== this.m || d) && b.restore()
  }
  y.Cb = function (b) {
    if (!(1 > this.width || 1 > this.height)) {
      var d = this.de || this.Hi
      this.Hi = f
      var e = this.j.mb(),
        k = this.j.Rc(),
        l = this.pd,
        p = e * this.width,
        n = e * this.height,
        t = Math.ceil(p),
        x = Math.ceil(n),
        y = this.b.width / 2,
        w = this.b.height / 2
      this.Je ||
        ((this.Vc = document.createElement("canvas")),
        (this.Vc.width = t),
        (this.Vc.height = x),
        (this.ze = t),
        (this.ye = x),
        (d = a),
        (this.Je = this.Vc.getContext("2d")))
      if (t !== this.ze || x !== this.ye) (this.Vc.width = t), (this.Vc.height = x), this.$b && (b.deleteTexture(this.$b), (this.$b = c)), (d = a)
      d && (this.Je.clearRect(0, 0, t, x), this.oc(this.Je, a), this.$b || (this.$b = b.Lc(t, x, this.b.ka, this.b.Nd)), b.Vo(this.Vc, this.$b, this.b.Nd))
      this.ze = t
      this.ye = x
      b.yb(this.$b)
      b.Zd(this.opacity)
      b.yc()
      b.translate(-y, -w)
      b.Ac()
      var I = this.Sb,
        d = this.j.Ea(I.qa, I.ra, a),
        y = this.j.Ea(I.qa, I.ra, f),
        w = this.j.Ea(I.cb, I.eb, a),
        O = this.j.Ea(I.cb, I.eb, f),
        F = this.j.Ea(I.ab, I.bb, a),
        J = this.j.Ea(I.ab, I.bb, f),
        K = this.j.Ea(I.Za, I.$a, a),
        I = this.j.Ea(I.Za, I.$a, f)
      if (this.b.vc || (0 === this.m && 0 === k))
        var M = ((d + 0.5) | 0) - d,
          L = ((y + 0.5) | 0) - y,
          d = d + M,
          y = y + L,
          w = w + M,
          O = O + L,
          F = F + M,
          J = J + L,
          K = K + M,
          I = I + L
      0 === this.m && 0 === k
        ? ((w = d + t), (O = y), (F = w), (J = y + x), (K = d), (I = J), (l.right = 1), (l.bottom = 1))
        : ((l.right = p / t), (l.bottom = n / x))
      b.xc(d, y, w, O, F, J, K, I, l)
      b.yc()
      b.scale(e, e)
      b.cj(-this.j.Rc())
      b.translate((this.j.fc + this.j.gc) / -2, (this.j.hc + this.j.ec) / -2)
      b.Ac()
    }
  }
  var e = []
  b.im = function (b) {
    e.length = 0
    for (var d = "", k, l = 0; l < b.length; )
      if (((k = b.charAt(l)), "\n" === k)) d.length && (e.push(d), (d = "")), e.push("\n"), ++l
      else if (" " === k || "\t" === k || "-" === k) {
        do (d += b.charAt(l)), l++
        while (l < b.length && (" " === b.charAt(l) || "\t" === b.charAt(l)))
        e.push(d)
        d = ""
      } else l < b.length && ((d += k), l++)
    d.length && e.push(d)
  }
  var k = []
  b.km = function (b, e, k, l, t) {
    if (!b || !b.length) n(e)
    else if (2 >= l) n(e)
    else {
      if (100 >= b.length && -1 === b.indexOf("\n")) {
        var p = k.measureText(b).width
        if (p <= l) {
          n(e)
          e.push(d())
          e[0].text = b
          e[0].width = p
          return
        }
      }
      this.lm(b, e, k, l, t)
    }
  }
  b.lm = function (b, h, l, n, t) {
    t && (this.im(b), (b = e))
    var p = "",
      y,
      E,
      x,
      B = 0
    for (x = 0; x < b.length; x++)
      "\n" === b[x]
        ? (B >= h.length && h.push(d()), (E = h[B]), (E.text = p), (E.width = l.measureText(p).width), B++, (p = ""))
        : ((y = p),
          (p += b[x]),
          (E = l.measureText(p).width),
          E >= n && (B >= h.length && h.push(d()), (E = h[B]), (E.text = y), (E.width = l.measureText(y).width), B++, (p = b[x]), !t && " " === p && (p = "")))
    p.length && (B >= h.length && h.push(d()), (E = h[B]), (E.text = p), (E.width = l.measureText(p).width), B++)
    for (x = B; x < h.length; x++) k.push(h[x])
    h.length = B
  }
  b.c = new (m())()
  l.prototype.ke = function (b) {
    da(b) && 1e9 > b && (b = Math.round(1e10 * b) / 1e10)
    b = b.toString()
    this.text !== b && ((this.text = b), (this.de = a), (this.b.R = a))
  }
  l.prototype.Pf = function (b, d) {
    var e = ""
    switch (d) {
      case 1:
        e = "bold"
        break
      case 2:
        e = "italic"
        break
      case 3:
        e = "bold italic"
    }
    ;(b === this.Pc && e === this.jg) || ((this.Pc = b), (this.jg = e), this.Aj())
  }
  l.prototype.Ye = function (b) {
    b = "rgb(" + pa(b).toString() + "," + qa(b).toString() + "," + ra(b).toString() + ")"
    b !== this.color && ((this.color = b), (this.Hi = a), (this.b.R = a))
  }
  l.prototype.Ze = function (b, d) {
    if (this.b.Wa) ba("[Construct 2] Text plugin: 'Set web font' not supported on this platform - the action has been ignored")
    else {
      var e = this,
        k = function () {
          e.b.R = a
          e.de = a
        }
      if (t.hasOwnProperty(d)) {
        var l = "'" + b + "'"
        if (this.Pc !== l) {
          this.Pc = l
          this.Aj()
          for (l = 1; 10 > l; l++) setTimeout(k, 100 * l), setTimeout(k, 1e3 * l)
        }
      } else {
        l = document.createElement("link")
        l.href = d
        l.rel = "stylesheet"
        l.type = "text/css"
        l.onload = k
        document.getElementsByTagName("head")[0].appendChild(l)
        t[d] = a
        this.Pc = "'" + b + "'"
        this.Aj()
        for (l = 1; 10 > l; l++) setTimeout(k, 100 * l), setTimeout(k, 1e3 * l)
      }
    }
  }
  b.a = new l()
  b.d = new (m())()
})()
function ac(d) {
  this.b = d
}
;(function () {
  var d = ac.prototype
  d.sa = function (d) {
    this.na = d
    this.b = d.b
  }
  var n = d.sa.prototype
  n.P = function () {
    this.O || ((this.r = new Image()), (this.r.src = this.qj), (this.r.gk = this.rj), this.b.bd.push(this.r), (this.fa = this.pattern = c))
  }
  n.Rg = function () {
    this.O || (this.fa = c)
  }
  n.Ki = function () {
    if (!this.O && this.f.length) {
      this.fa || (this.fa = this.b.u.Hg(this.r, a, this.b.ka, this.sj))
      var d, b
      d = 0
      for (b = this.f.length; d < b; d++) this.f[d].fa = this.fa
    }
  }
  n.zj = function () {
    !this.O && !this.f.length && (this.b.u ? this.fa && (this.b.u.deleteTexture(this.fa), (this.fa = c)) : this.r.hintUnload && this.r.hintUnload())
  }
  n.Ti = function (d) {
    d.drawImage(this.r, 0, 0)
  }
  d.da = function (d) {
    this.type = d
    this.b = d.b
  }
  n = d.da.prototype
  n.P = function () {
    this.visible = 0 === this.V[0]
    this.pd = new ma(0, 0, 0, 0)
    this.Nn = f
    this.r = this.type.r
    this.b.u
      ? (this.type.fa || (this.type.fa = this.b.u.Hg(this.type.r, a, this.b.ka, this.type.sj)), (this.fa = this.type.fa))
      : (this.r.hintLoad && this.r.hintLoad(),
        this.type.pattern || (this.type.pattern = this.b.T.createPattern(this.type.r, "repeat")),
        (this.pattern = this.type.pattern))
  }
  n.Ne = function () {
    this.b.u && this.Nn && this.fa && (this.b.u.deleteTexture(this.fa), (this.fa = c))
  }
  n.oc = function (d) {
    d.globalAlpha = this.opacity
    d.save()
    d.fillStyle = this.pattern
    var b = this.x,
      n = this.y
    this.b.vc && ((b = (b + 0.5) | 0), (n = (n + 0.5) | 0))
    var t = -(this.sc * this.width),
      e = -(this.tc * this.height),
      k = t % this.r.width,
      g = e % this.r.height
    0 > k && (k += this.r.width)
    0 > g && (g += this.r.height)
    d.translate(b, n)
    d.rotate(this.m)
    d.translate(k, g)
    d.fillRect(t - k, e - g, this.width, this.height)
    d.restore()
  }
  n.Cb = function (d) {
    d.yb(this.fa)
    d.Zd(this.opacity)
    var b = this.pd
    b.right = this.width / this.r.width
    b.bottom = this.height / this.r.height
    var n = this.Sb
    if (this.b.vc) {
      var t = ((this.x + 0.5) | 0) - this.x,
        e = ((this.y + 0.5) | 0) - this.y
      d.xc(n.qa + t, n.ra + e, n.cb + t, n.eb + e, n.ab + t, n.bb + e, n.Za + t, n.$a + e, b)
    } else d.xc(n.qa, n.ra, n.cb, n.eb, n.ab, n.bb, n.Za, n.$a, b)
  }
  d.c = new (m())()
  d.a = new (m())()
  d.d = new (m())()
})()
function W(d) {
  this.b = d
}
;(function () {
  function d(b) {
    k = b.x
    g = b.y
    h = b.Ol
  }
  function n(b) {
    r = b.x
    u = b.y
    z = b.Ol
  }
  function l() {}
  function b() {}
  var y = W.prototype
  y.sa = function (b) {
    this.na = b
    this.b = b.b
  }
  y.sa.prototype.P = m()
  y.da = function (b) {
    this.type = b
    this.b = b.b
    this.touches = []
    this.Di = f
  }
  var t = y.da.prototype,
    e = { left: 0, top: 0 }
  t.ig = function (b) {
    var d, e
    d = 0
    for (e = this.touches.length; d < e; d++) if (this.touches[d].id === b) return d
    return -1
  }
  var k = 0,
    g = 0,
    h = 0,
    r = 0,
    u = 0,
    z = 0
  t.P = function () {
    this.Vn = !!("undefined" !== typeof window.c2isWindows8 && window.c2isWindows8)
    this.kh = this.xd = this.Jh = this.Ih = this.Sj = this.Rj = this.Qj = this.om = this.nm = this.mm = this.xf = this.wf = this.vf = 0
    this.To = 0 !== this.V[0]
    var b = 0 < this.b.Qc ? document : this.b.canvas,
      e = document
    this.b.Gb ? (e = b = window.Canvas) : this.b.Md && (e = b = window)
    var g = this
    window.navigator.msPointerEnabled
      ? (b.addEventListener(
          "MSPointerDown",
          function (b) {
            g.no(b)
          },
          f
        ),
        b.addEventListener(
          "MSPointerMove",
          function (b) {
            g.mo(b)
          },
          f
        ),
        e.addEventListener(
          "MSPointerUp",
          function (b) {
            g.kl(b)
          },
          f
        ),
        e.addEventListener(
          "MSPointerCancel",
          function (b) {
            g.kl(b)
          },
          f
        ),
        this.b.canvas &&
          (this.b.canvas.addEventListener(
            "MSGestureHold",
            function (b) {
              b.preventDefault()
            },
            f
          ),
          document.addEventListener(
            "MSGestureHold",
            function (b) {
              b.preventDefault()
            },
            f
          )))
      : (b.addEventListener(
          "touchstart",
          function (b) {
            g.ml(b)
          },
          f
        ),
        b.addEventListener(
          "touchmove",
          function (b) {
            g.ll(b)
          },
          f
        ),
        e.addEventListener(
          "touchend",
          function (b) {
            g.Li(b)
          },
          f
        ),
        e.addEventListener(
          "touchcancel",
          function (b) {
            g.Li(b)
          },
          f
        ))
    if (this.Vn) {
      var h = function (b) {
          b = b.reading
          g.Qj = b.accelerationX
          g.Rj = b.accelerationY
          g.Sj = b.accelerationZ
        },
        k = function (b) {
          b = b.reading
          g.vf = b.yawDegrees
          g.wf = b.pitchDegrees
          g.xf = b.rollDegrees
        },
        l = Windows.Devices.Sensors.Accelerometer.getDefault()
      l && ((l.reportInterval = Math.max(l.minimumReportInterval, 16)), l.addEventListener("readingchanged", h))
      var r = Windows.Devices.Sensors.Inclinometer.getDefault()
      r && ((r.reportInterval = Math.max(r.minimumReportInterval, 16)), r.addEventListener("readingchanged", k))
      document.addEventListener(
        "visibilitychange",
        function () {
          document.hidden || document.msHidden
            ? (l && l.removeEventListener("readingchanged", h), r && r.removeEventListener("readingchanged", k))
            : (l && l.addEventListener("readingchanged", h), r && r.addEventListener("readingchanged", k))
        },
        f
      )
    } else
      window.addEventListener(
        "deviceorientation",
        function (b) {
          g.vf = b.alpha || 0
          g.wf = b.beta || 0
          g.xf = b.gamma || 0
        },
        f
      ),
        window.addEventListener(
          "devicemotion",
          function (b) {
            b.accelerationIncludingGravity &&
              ((g.mm = b.accelerationIncludingGravity.x), (g.nm = b.accelerationIncludingGravity.y), (g.om = b.accelerationIncludingGravity.z))
            b.acceleration && ((g.Qj = b.acceleration.x), (g.Rj = b.acceleration.y), (g.Sj = b.acceleration.z))
          },
          f
        )
    this.To &&
      !this.b.Wa &&
      (jQuery(document).mousemove(function (b) {
        g.ko(b)
      }),
      jQuery(document).mousedown(function (b) {
        g.jo(b)
      }),
      jQuery(document).mouseup(function (b) {
        g.lo(b)
      }))
    this.b.ve && !this.b.Gb && AppMobi.accelerometer.watchAcceleration(d, { frequency: 40, adjustForRotation: a })
    this.b.Od && navigator.accelerometer.watchAcceleration(n, c, { frequency: 40 })
    this.b.Oo(this)
  }
  t.mo = function (b) {
    if (b.pointerType !== b.MSPOINTER_TYPE_MOUSE) {
      b.preventDefault && b.preventDefault()
      var d = this.ig(b.pointerId),
        g = Ra()
      if (0 <= d) {
        var h = this.b.Wa ? e : jQuery(this.b.canvas).offset(),
          d = this.touches[d]
        2 > g - d.time || ((d.Fg = d.time), (d.qi = d.x), (d.ri = d.y), (d.time = g), (d.x = b.pageX - h.left), (d.y = b.pageY - h.top))
      }
    }
  }
  t.no = function (b) {
    if (b.pointerType !== b.MSPOINTER_TYPE_MOUSE) {
      b.preventDefault && b.preventDefault()
      var d = this.b.Wa ? e : jQuery(this.b.canvas).offset(),
        g = b.pageX - d.left,
        d = b.pageY - d.top,
        h = Ra()
      this.xd = this.touches.length
      this.kh = b.pointerId
      this.touches.push({ time: h, x: g, y: d, Fg: h, qi: g, ri: d, id: b.pointerId, oj: this.xd })
      this.b.trigger(W.prototype.c.Lj, this)
      this.b.trigger(W.prototype.c.Mj, this)
      this.Ih = g
      this.Jh = d
      this.b.trigger(W.prototype.c.zb, this)
    }
  }
  t.kl = function (b) {
    b.pointerType !== b.MSPOINTER_TYPE_MOUSE &&
      (b.preventDefault && b.preventDefault(),
      (b = this.ig(b.pointerId)),
      (this.xd = 0 <= b ? this.touches[b].oj : -1),
      (this.kh = 0 <= b ? this.touches[b].id : -1),
      this.b.trigger(W.prototype.c.Kj, this),
      this.b.trigger(W.prototype.c.wh, this),
      0 <= b && this.touches.splice(b, 1))
  }
  t.ll = function (b) {
    b.preventDefault && b.preventDefault()
    var d = Ra(),
      g,
      h,
      k,
      l
    g = 0
    for (h = b.changedTouches.length; g < h; g++)
      if (((k = b.changedTouches[g]), (l = this.ig(k.identifier)), 0 <= l)) {
        var n = this.b.Wa ? e : jQuery(this.b.canvas).offset()
        l = this.touches[l]
        2 > d - l.time || ((l.Fg = l.time), (l.qi = l.x), (l.ri = l.y), (l.time = d), (l.x = k.pageX - n.left), (l.y = k.pageY - n.top))
      }
  }
  t.ml = function (b) {
    b.preventDefault && b.preventDefault()
    var d = this.b.Wa ? e : jQuery(this.b.canvas).offset(),
      g = Ra(),
      h,
      k,
      l
    h = 0
    for (k = b.changedTouches.length; h < k; h++) {
      l = b.changedTouches[h]
      var n = l.pageX - d.left,
        r = l.pageY - d.top
      this.xd = this.touches.length
      this.kh = l.identifier
      this.touches.push({ time: g, x: n, y: r, Fg: g, qi: n, ri: r, id: l.identifier, oj: this.xd })
      this.b.trigger(W.prototype.c.Lj, this)
      this.b.trigger(W.prototype.c.Mj, this)
      this.Ih = n
      this.Jh = r
      this.b.trigger(W.prototype.c.zb, this)
    }
  }
  t.Li = function (b) {
    b.preventDefault && b.preventDefault()
    var d, e, g
    d = 0
    for (e = b.changedTouches.length; d < e; d++)
      (g = b.changedTouches[d]),
        (g = this.ig(g.identifier)),
        (this.xd = 0 <= g ? this.touches[g].oj : -1),
        (this.kh = 0 <= g ? this.touches[g].id : -1),
        this.b.trigger(W.prototype.c.Kj, this),
        this.b.trigger(W.prototype.c.wh, this),
        0 <= g && this.touches.splice(g, 1)
  }
  t.Rp = function () {
    return this.b.ve && 0 === this.vf && 0 !== h ? 90 * h : this.b.Od && 0 === this.vf && 0 !== z ? 90 * z : this.vf
  }
  t.Tp = function () {
    return this.b.ve && 0 === this.wf && 0 !== g ? -90 * g : this.b.Od && 0 === this.wf && 0 !== u ? -90 * u : this.wf
  }
  t.Vp = function () {
    return this.b.ve && 0 === this.xf && 0 !== k ? 90 * k : this.b.Od && 0 === this.xf && 0 !== r ? 90 * r : this.xf
  }
  t.jo = function (b) {
    b.preventDefault && this.b.qg && b.preventDefault()
    this.ml({ changedTouches: [{ pageX: b.pageX, pageY: b.pageY, identifier: 0 }] })
    this.Di = a
  }
  t.ko = function (b) {
    b.preventDefault && this.b.qg && b.preventDefault()
    this.Di && this.ll({ changedTouches: [{ pageX: b.pageX, pageY: b.pageY, identifier: 0 }] })
  }
  t.lo = function (b) {
    b.preventDefault && this.b.qg && b.preventDefault()
    this.b.qg = a
    this.Li({ changedTouches: [{ pageX: b.pageX, pageY: b.pageY, identifier: 0 }] })
    this.Di = f
  }
  t.tj = function () {
    var b,
      d,
      e,
      g = Ra()
    b = 0
    for (d = this.touches.length; b < d; b++) (e = this.touches[b]), e.time <= g - 50 && (e.Fg = g)
  }
  l.prototype.Mj = s(a)
  l.prototype.wh = s(a)
  l.prototype.zb = function (b) {
    return !b ? f : this.b.No(b, this.Ih, this.Jh)
  }
  l.prototype.Lj = function (b) {
    b = Math.floor(b)
    return b === this.xd
  }
  l.prototype.Kj = function (b) {
    b = Math.floor(b)
    return b === this.xd
  }
  y.c = new l()
  b.prototype.$e = function (b, d) {
    if (this.touches.length) {
      var e, g, h, k, l
      ca(d)
        ? ((e = this.b.te(0)),
          (g = e.scale),
          (h = e.ee),
          (k = e.Oe),
          (l = e.m),
          (e.scale = this.b.oa.scale),
          (e.ee = 1),
          (e.Oe = 1),
          (e.m = this.b.oa.m),
          b.C(e.jb(this.touches[0].x, this.touches[0].y, a)),
          (e.scale = g),
          (e.ee = h),
          (e.Oe = k),
          (e.m = l))
        : (e = da(d) ? this.b.te(d) : this.b.ng(d))
        ? b.C(e.jb(this.touches[0].x, this.touches[0].y, a))
        : b.C(0)
    } else b.C(0)
  }
  b.prototype.Hc = function (b, d) {
    if (this.touches.length) {
      var e, g, h, k, l
      ca(d)
        ? ((e = this.b.te(0)),
          (g = e.scale),
          (h = e.ee),
          (k = e.Pe),
          (l = e.m),
          (e.scale = this.b.oa.scale),
          (e.ee = 1),
          (e.Pe = 1),
          (e.m = this.b.oa.m),
          b.C(e.jb(this.touches[0].x, this.touches[0].y, f)),
          (e.scale = g),
          (e.ee = h),
          (e.Pe = k),
          (e.m = l))
        : (e = da(d) ? this.b.te(d) : this.b.ng(d))
        ? b.C(e.jb(this.touches[0].x, this.touches[0].y, f))
        : b.C(0)
    } else b.C(0)
  }
  y.d = new b()
})()
function Y(d) {
  this.b = d
}
;(function () {
  function d() {}
  function n() {}
  function l() {}
  var b = Y.prototype
  b.sa = function (b) {
    this.na = b
    this.b = b.b
  }
  b.sa.prototype.P = m()
  b.da = function (b) {
    this.type = b
    this.b = b.b
  }
  var y = b.da.prototype,
    t = "",
    e = "undefined" !== typeof window.is_scirra_arcade
  e && (t = "arcade" + window.scirra_arcade_id)
  y.P = m()
  d.prototype.cm = s(a)
  b.c = new d()
  n.prototype.jc = function (b, d) {
    try {
      localStorage.setItem(t + b, d)
    } catch (e) {
      this.b.trigger(Y.prototype.c.cm, this)
    }
  }
  n.prototype.Pl = function () {
    e || localStorage.clear()
  }
  b.a = new n()
  l.prototype.Fc = function (b, d) {
    b.gb(localStorage.getItem(t + d) || "")
  }
  b.d = new l()
})()
function yb() {
  return [
    c,
    "Start",
    [
      [R, a, f, f, f, f, f, f, f, f],
      [H, f, f, f, f, f, f, f, f, f],
      [Zb, a, f, f, f, f, f, f, f, f],
      [S, a, f, f, f, f, f, f, f, f],
      [$b, a, f, f, f, f, f, f, f, f],
      [T, f, a, a, a, a, a, a, a, f],
      [U, f, a, a, a, a, a, a, a, f],
      [ac, f, a, a, a, a, a, a, a, a],
      [W, a, f, f, f, f, f, f, f, f],
      [Y, a, f, f, f, f, f, f, f, f],
    ],
    [
      ["t0", S, f, 0, 0, 0, c, c, [], f, f, [], []],
      ["t1", H, f, 0, 0, 0, c, c, [], a, f, []],
      [
        "t2",
        T,
        f,
        4,
        0,
        0,
        c,
        [
          ["Wall", 5, f, 1, 0, f, [["images/tile-sheet0.png", 401, 1, 1, 48, 48, 1, 0, 0, [], [], 0]]],
          ["Plain", 5, f, 1, 0, f, [["images/tile-sheet0.png", 401, 50, 1, 48, 48, 1, 0, 0, [], [0, 0, 0.0208333, 0, 0.0208333, 0.0208333, 0, 0.0208333], 0]]],
          ["Fire", 5, f, 1, 0, f, [["images/tile-sheet0.png", 401, 1, 50, 48, 48, 1, 0, 0, [], [], 0]]],
          ["PumpOn", 5, f, 1, 0, f, [["images/tile-sheet0.png", 401, 50, 50, 48, 48, 1, 0, 0, [], [], 0]]],
          ["PumpOff", 5, f, 1, 0, f, [["images/tile-sheet1.png", 470, 1, 1, 48, 48, 1, 0, 0, [], [], 0]]],
          ["Water", 5, f, 1, 0, f, [["images/tile-sheet1.png", 470, 50, 1, 48, 48, 1, 0, 0, [], [], 0]]],
          ["WaterSource", 5, f, 1, 0, f, [["images/tile-sheet1.png", 470, 1, 50, 48, 48, 1, 0, 0, [], [], 0]]],
          ["LockOn", 5, f, 1, 0, f, [["images/tile-sheet1.png", 470, 50, 50, 48, 48, 1, 0, 0, [], [], 0]]],
          ["LockOff", 5, f, 1, 0, f, [["images/tile-sheet2.png", 156, 0, 0, 48, 48, 1, 0, 0, [], [], 1]]],
        ],
        [],
        f,
        f,
        [],
      ],
      ["t3", ac, f, 0, 0, 0, ["images/tiledbackground.png", 90, 4], c, [], f, f, []],
      ["t4", ac, f, 0, 0, 0, ["images/christinabackbar.png", 90, 1], c, [], f, f, []],
      ["t5", ac, f, 0, 0, 0, ["images/lionelbackbar.png", 90, 1], c, [], f, f, []],
      ["t6", ac, f, 0, 0, 0, ["images/troybackbar.png", 90, 1], c, [], f, f, []],
      ["t7", ac, f, 0, 0, 0, ["images/stevebackbar.png", 90, 1], c, [], f, f, []],
      ["t8", ac, f, 0, 0, 0, ["images/tiledbackground6.png", 90, 1], c, [], f, f, []],
      [
        "t9",
        T,
        f,
        4,
        0,
        0,
        c,
        [
          ["Animation2", 5, f, 1, 0, f, [["images/charactertile-sheet0.png", 961, 1, 1, 48, 48, 1, 0.5, 0.5, [], [], 0]]],
          ["Christina", 5, f, 1, 0, f, [["images/charactertile-sheet0.png", 961, 50, 1, 48, 48, 1, 0, 0, [], [], 0]]],
          ["Lionel", 5, f, 1, 0, f, [["images/charactertile-sheet0.png", 961, 1, 50, 48, 48, 1, 0, 0, [], [], 0]]],
          ["Troy", 5, f, 1, 0, f, [["images/charactertile-sheet0.png", 961, 50, 50, 48, 48, 1, 0, 0, [], [], 0]]],
          ["Steve", 5, f, 1, 0, f, [["images/charactertile-sheet1.png", 360, 0, 0, 48, 48, 1, 0, 0, [], [], 0]]],
        ],
        [],
        f,
        f,
        [],
      ],
      ["t10", H, f, 0, 0, 0, c, c, [], a, f, []],
      ["t11", T, f, 2, 0, 0, c, [["Default", 5, f, 1, 0, f, [["images/arrow-sheet0.png", 153, 0, 0, 19, 19, 1, 0.526316, 0.526316, [], [], 3]]]], [], f, f, []],
      ["t12", W, f, 0, 0, 0, c, c, [], f, f, [], [1]],
      [
        "t13",
        T,
        f,
        0,
        0,
        0,
        c,
        [["Default", 5, f, 1, 0, f, [["images/interactable-sheet0.png", 101, 0, 0, 6, 14, 1, 0, 0, [], [0, 0.288462, 1, 0.288462, 1, 1, 0, 1], 1]]]],
        [],
        f,
        f,
        [],
      ],
      [
        "t14",
        T,
        f,
        0,
        0,
        0,
        c,
        [
          ["Default", 5, f, 1, 0, f, [["images/turnbutton-sheet0.png", 143, 0, 0, 32, 32, 1, 0, 0, [], [], 4]]],
          ["Selected", 5, f, 1, 0, f, [["images/turnbutton-sheet1.png", 143, 0, 0, 32, 32, 1, 4, 4, [], [], 4]]],
          ["Disabled", 5, f, 1, 0, f, [["images/turnbutton-sheet2.png", 143, 0, 0, 32, 32, 1, 4, 4, [], [], 1]]],
        ],
        [],
        f,
        f,
        [],
      ],
      ["t15", ac, f, 0, 0, 0, ["images/messageback2.png", 90, 4], c, [], f, f, []],
      ["t16", U, f, 1, 0, 0, c, c, [], f, f, []],
      ["t17", U, f, 0, 0, 0, c, c, [], f, f, []],
      ["t18", U, f, 0, 0, 0, c, c, [], f, f, []],
      [
        "t19",
        T,
        f,
        0,
        0,
        0,
        c,
        [
          ["Christina", 5, f, 1, 0, f, [["images/profilepicture-sheet0.png", 1141, 1, 1, 48, 48, 1, 0, 0, [], [], 0]]],
          ["Lionel", 5, f, 1, 0, f, [["images/profilepicture-sheet0.png", 1141, 50, 1, 48, 48, 1, 0, 0, [], [], 0]]],
          ["Troy", 5, f, 1, 0, f, [["images/profilepicture-sheet0.png", 1141, 1, 50, 48, 48, 1, 0, 0, [], [], 0]]],
          ["Steve", 5, f, 1, 0, f, [["images/profilepicture-sheet0.png", 1141, 50, 50, 48, 48, 1, 0, 0, [], [], 0]]],
          ["Visitor", 5, f, 1, 0, f, [["images/profilepicture-sheet1.png", 175, 0, 0, 48, 48, 1, 0, 0, [], [], 1]]],
        ],
        [],
        f,
        f,
        [],
      ],
      [
        "t20",
        T,
        f,
        0,
        0,
        0,
        c,
        [
          ["Default", 5, f, 1, 0, f, [["images/messageback-sheet0.png", 132, 1, 1, 1, 1, 1, 0, 0, [], [], 0]]],
          ["Christina", 5, f, 1, 0, f, [["images/messageback-sheet0.png", 132, 3, 1, 1, 1, 1, 0, 0, [], [], 0]]],
          ["Lionel", 5, f, 1, 0, f, [["images/messageback-sheet0.png", 132, 5, 1, 1, 1, 1, 0, 0, [], [], 0]]],
          ["Troy", 5, f, 1, 0, f, [["images/messageback-sheet0.png", 132, 1, 3, 1, 1, 1, 0, 0, [], [], 0]]],
          ["Steve", 5, f, 1, 0, f, [["images/messageback-sheet0.png", 132, 3, 3, 1, 1, 1, 0, 0, [], [], 0]]],
          ["Visitor", 5, f, 1, 0, f, [["images/messageback-sheet0.png", 132, 5, 3, 1, 1, 1, 0, 0, [], [], 0]]],
        ],
        [],
        f,
        f,
        [],
      ],
      [
        "t21",
        T,
        f,
        1,
        0,
        0,
        c,
        [
          ["Selected", 5, f, 1, 0, f, [["images/turnbutton2-sheet0.png", 1426, 0, 0, 640, 36, 1, 0, 0, [], [], 1]]],
          ["Default", 5, f, 1, 0, f, [["images/turnbutton2-sheet1.png", 1426, 0, 0, 640, 36, 1, 0, 0, [], [0, 0, 0.266667, 0, 0.266667, 1, 0, 1], 1]]],
          ["Disabled", 5, f, 1, 0, f, [["images/turnbutton2-sheet2.png", 117, 0, 0, 640, 36, 1, 0, 0, [], [], 1]]],
        ],
        [],
        f,
        f,
        [],
      ],
      ["t22", H, f, 0, 0, 0, c, c, [], a, f, []],
      ["t23", Zb, f, 0, 0, 0, c, c, [], f, f, [], []],
      ["t24", T, f, 0, 0, 0, c, [["Default", 5, f, 1, 0, f, [["images/tree-sheet0.png", 1141, 0, 0, 640, 480, 1, 0, 0, [], [], 0]]]], [], f, f, []],
      ["t25", ac, f, 0, 0, 0, ["images/coverup.png", 90, 1], c, [], f, f, []],
      [
        "t26",
        T,
        f,
        1,
        0,
        0,
        c,
        [
          ["A", 5, a, 1, 0, f, [["images/leaf-sheet0.png", 7164, 1, 1, 48, 48, 1, 0, 0, [], [], 0]]],
          ["A2", 5, a, 1, 0, f, [["images/leaf-sheet0.png", 7164, 50, 1, 48, 48, 1, 0, 0, [], [], 0]]],
          ["B", 5, a, 1, 0, f, [["images/leaf-sheet0.png", 7164, 99, 1, 48, 48, 1, 0, 0, [], [], 0]]],
          ["B2", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 148, 1, 48, 48, 1, 0, 0, [], [], 0]]],
          ["C", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 197, 1, 48, 48, 1, 0, 0, [], [], 0]]],
          ["C2", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 1, 50, 48, 48, 1, 0, 0, [], [], 0]]],
          ["D", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 50, 50, 48, 48, 1, 0, 0, [], [], 0]]],
          ["D2", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 99, 50, 48, 48, 1, 0, 0, [], [], 0]]],
          ["E", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 148, 50, 48, 48, 1, 0, 0, [], [], 0]]],
          ["E2", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 197, 50, 48, 48, 1, 0, 0, [], [], 0]]],
          ["F", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 1, 99, 48, 48, 1, 0, 0, [], [], 0]]],
          ["F2", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 50, 99, 48, 48, 1, 0, 0, [], [], 0]]],
          ["G", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 99, 99, 48, 48, 1, 0, 0, [], [], 0]]],
          ["G2", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 148, 99, 48, 48, 1, 0, 0, [], [], 0]]],
          ["H", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 197, 99, 48, 48, 1, 0, 0, [], [], 0]]],
          ["H2", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 1, 148, 48, 48, 1, 0, 0, [], [], 0]]],
          ["I", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 50, 148, 48, 48, 1, 0, 0, [], [], 0]]],
          ["I2", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 99, 148, 48, 48, 1, 0, 0, [], [], 0]]],
          ["J", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 148, 148, 48, 48, 1, 0, 0, [], [], 0]]],
          ["J2", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 197, 148, 48, 48, 1, 0, 0, [], [], 0]]],
          ["K", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 1, 197, 48, 48, 1, 0, 0, [], [], 0]]],
          ["K2", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 50, 197, 48, 48, 1, 0, 0, [], [], 0]]],
          ["L", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 99, 197, 48, 48, 1, 0, 0, [], [], 0]]],
          ["L2", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 148, 197, 48, 48, 1, 0, 0, [], [], 0]]],
          ["M", 5, f, 1, 0, f, [["images/leaf-sheet0.png", 7164, 197, 197, 48, 48, 1, 0, 0, [], [], 0]]],
          ["M2", 5, f, 1, 0, f, [["images/leaf-sheet1.png", 1344, 1, 1, 48, 48, 1, 0, 0, [], [], 0]]],
          ["N", 5, f, 1, 0, f, [["images/leaf-sheet1.png", 1344, 50, 1, 48, 48, 1, 0, 0, [], [], 0]]],
          ["N2", 5, f, 1, 0, f, [["images/leaf-sheet1.png", 1344, 99, 1, 48, 48, 1, 0, 0, [], [], 0]]],
          ["O", 5, f, 1, 0, f, [["images/leaf-sheet1.png", 1344, 148, 1, 48, 48, 1, 0, 0, [], [], 0]]],
          ["O2", 5, f, 1, 0, f, [["images/leaf-sheet1.png", 1344, 197, 1, 48, 48, 1, 0, 0, [], [], 0]]],
        ],
        [],
        f,
        f,
        [],
      ],
      ["t27", Y, f, 0, 0, 0, c, c, [], f, f, [], []],
      ["t28", R, f, 0, 0, 0, c, c, [], f, f, [], [0, 1, 1, 600, 600, 1e4, 1, 5e3, 1]],
      [
        "t29",
        T,
        f,
        0,
        0,
        0,
        c,
        [
          ["ChrisAlive", 5, f, 1, 0, f, [["images/characterstatus-sheet0.png", 3273, 1, 1, 160, 48, 1, 0.5, 0.5, [], [], 0]]],
          ["ChrisDead", 5, f, 1, 0, f, [["images/characterstatus-sheet0.png", 3273, 1, 50, 160, 48, 1, 0.5, 0.5, [], [], 0]]],
          ["LionelAlive", 5, f, 1, 0, f, [["images/characterstatus-sheet0.png", 3273, 1, 99, 160, 48, 1, 0.5, 0.5, [], [], 0]]],
          ["LionelDead", 5, f, 1, 0, f, [["images/characterstatus-sheet0.png", 3273, 1, 148, 160, 48, 1, 0.5, 0.5, [], [], 0]]],
          ["SteveAlive", 5, f, 1, 0, f, [["images/characterstatus-sheet0.png", 3273, 1, 197, 160, 48, 1, 0.5, 0.5, [], [], 0]]],
          ["SteveDead", 5, f, 1, 0, f, [["images/characterstatus-sheet1.png", 913, 0, 0, 160, 48, 1, 0.5, 0.5, [], [], 1]]],
        ],
        [],
        f,
        f,
        [],
      ],
      ["t30", U, f, 0, 0, 0, c, c, [], f, f, []],
      ["t31", T, f, 0, 0, 0, c, [["Default", 5, f, 1, 0, f, [["images/tutorial-sheet0.png", 19206, 0, 0, 640, 480, 1, 0, 0, [], [], 0]]]], [], f, f, []],
      [
        "t32",
        T,
        f,
        1,
        0,
        0,
        c,
        [
          ["Default", 5, f, 1, 0, f, [["images/restartbutton-sheet0.png", 135, 0, 0, 32, 32, 1, 0, 0, [], [], 4]]],
          ["Selected", 5, f, 1, 0, f, [["images/restartbutton-sheet1.png", 135, 0, 0, 32, 32, 1, 0, 0, [], [], 4]]],
        ],
        [],
        f,
        f,
        [],
      ],
      ["t33", T, f, 0, 0, 0, c, [["Default", 5, f, 1, 0, f, [["images/sprite-sheet0.png", 2982, 0, 0, 640, 480, 1, 0, 0, [], [], 0]]]], [], f, f, []],
      ["t34", H, f, 0, 0, 0, c, c, [], a, f, []],
      ["t35", T, f, 0, 0, 0, c, [["Default", 5, f, 1, 0, f, [["images/sprite2-sheet0.png", 182, 0, 0, 36, 36, 1, 0, 0, [], [], 4]]]], [], f, f, []],
      [
        "t36",
        T,
        f,
        0,
        0,
        0,
        c,
        [["Default", 5, f, 1, 0, f, [["images/sprite3-sheet0.png", 5434, 0, 0, 583, 74, 1, -0.0566038, -0.27027, [], [], 0]]]],
        [],
        f,
        f,
        [],
      ],
      ["t37", T, f, 0, 0, 0, c, [["Default", 5, f, 1, 0, f, [["images/yes-sheet0.png", 1656, 0, 0, 78, 39, 1, 0, 0, [], [], 0]]]], [], f, f, []],
      ["t38", T, f, 0, 0, 0, c, [["Default", 5, f, 1, 0, f, [["images/no-sheet0.png", 1612, 0, 0, 68, 39, 1, 0, 0, [], [], 0]]]], [], f, f, []],
      [
        "t39",
        T,
        f,
        0,
        0,
        0,
        c,
        [
          ["I", 5, f, 1, 0, f, [["images/endings-sheet0.png", 4691, 0, 0, 640, 480, 1, 0, 0, [], [], 0]]],
          ["K", 5, f, 1, 0, f, [["images/endings-sheet1.png", 3695, 0, 0, 640, 480, 1, 0, 0, [], [], 0]]],
          ["H", 5, f, 1, 0, f, [["images/endings-sheet2.png", 3874, 0, 0, 640, 480, 1, 0, 0, [], [], 0]]],
          ["J", 5, f, 1, 0, f, [["images/endings-sheet3.png", 3834, 0, 0, 640, 480, 1, 0, 0, [], [], 0]]],
          ["F", 5, f, 1, 0, f, [["images/endings-sheet4.png", 3298, 0, 0, 640, 480, 1, 0, 0, [], [], 0]]],
          ["G", 5, f, 1, 0, f, [["images/endings-sheet5.png", 3298, 0, 0, 640, 480, 1, 0, 0, [], [], 0]]],
          ["O", 5, f, 1, 0, f, [["images/endings-sheet6.png", 2187, 0, 0, 640, 480, 1, 0, 0, [], [], 0]]],
        ],
        [],
        f,
        f,
        [],
      ],
      [
        "t40",
        T,
        f,
        0,
        0,
        0,
        c,
        [
          ["Default", 5, f, 1, 0, f, [["images/extra-sheet0.png", 3127, 0, 0, 640, 480, 1, 0, 0, [], [], 0]]],
          ["Special", 5, f, 1, 0, f, [["images/extra-sheet1.png", 2108, 0, 0, 640, 480, 1, 0, 0, [], [], 0]]],
        ],
        [],
        f,
        f,
        [],
      ],
      ["t41", T, f, 0, 0, 0, c, [["Default", 5, f, 1, 0, f, [["images/skip-sheet0.png", 878, 0, 0, 150, 36, 1, 0, 0, [], [], 1]]]], [], f, f, []],
      ["t42", T, f, 0, 0, 0, c, [["Default", 5, f, 1, 0, f, [["images/sprite4-sheet0.png", 3538, 0, 0, 640, 480, 1, 0, 0, [], [], 1]]]], [], f, f, []],
      ["t43", $b, f, 0, 0, 0, c, c, [], f, f, [], []],
      ["t44", U, a, 0, 0, 0, c, c, [], f, f, []],
    ],
    [[44, 16, 18]],
    [
      [
        "Puzzle",
        640,
        480,
        f,
        "PuzzleEvents",
        [
          ["Background", 0, a, [0, 5, 34], f, 1, 1, 1, f, 1, 0, 0, [[[0, 0, 0, 640, 36, 0, 0, 1, 0, 0, 0, 0, []], 3, [], [], [0, 0]]], []],
          ["Tiles", 1, a, [255, 255, 255], a, 1, 1, 1, f, 1, 0, 0, [], []],
          [
            "Characters",
            2,
            a,
            [255, 255, 255],
            a,
            1,
            1,
            1,
            f,
            1,
            0,
            0,
            [
              [[-94, 181, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, []], 2, [1, 0, 0, 0], [], [0, 0, 1]],
              [[-33, 98, 0, 1, 1, 0, 0, 1, 0.5, 0.5, 0, 0, []], 9, [-1, 0, 0, 0], [], [0, 0, 1]],
              [[-46.7275, 187, 0, 19, 19, 0, 0, 1, 0.526316, 0.526316, 0, 0, []], 11, [0, 0], [], [0, 0, 1]],
              [[-100, 76, 0, 6, 14, 0, 0, 1, 0, 0, 0, 0, []], 13, [], [], [0, 0, 1]],
              [[2, 2, 0, 32, 32, 0, 0, 1, 0, 0, 0, 0, []], 14, [], [], [0, 0, 1]],
              [[606, 2, 0, 32, 32, 0, 0, 1, 0, 0, 0, 0, []], 32, [0], [], [0, 0, 1]],
            ],
            [],
          ],
          ["Dialogue", 3, a, [255, 255, 255], a, 1, 1, 1, f, 1, 0, 0, [], []],
          ["Tutorial", 4, a, [255, 255, 255], a, 1, 1, 0, f, 1, 0, 0, [[[0, 0, 0, 640, 480, 0, 0, 1, 0, 0, 0, 0, []], 31, [], [], [0, 0, 1]]], []],
          ["TooManyDeaths", 5, a, [255, 255, 255], a, 1, 1, 0, f, 1, 0, 0, [[[0, 0, 0, 640, 480, 0, 0, 1, 0, 0, 0, 0, []], 33, [], [], [0, 0, 1]]], []],
          ["Black", 6, a, [0, 0, 0], f, 1, 1, 0, f, 1, 0, 0, [], []],
        ],
        [
          [c, 1, [], [], [10, 1, 1]],
          [c, 10, [], [], [1, 1, 1]],
        ],
        [],
      ],
      [
        "Dialogue",
        640,
        480,
        f,
        "DialogueEvents",
        [
          [
            "Background",
            0,
            a,
            [0, 5, 34],
            f,
            1,
            1,
            1,
            f,
            1,
            0,
            0,
            [
              [[29, 10, 0, 544, 82, 0, 0, 0, 0, 0, 0, 0, []], 16, [0], [], ["a", 0, "12pt Arial", "rgb(0,0,0)", 0, 0, 0, 0, 0]],
              [[-190, 487, 0, 536, 82, 0, 0, 0, 0, 0, 0, 0, []], 18, [], [], ["", 0, "12pt Arial", "rgb(255,255,255)", 0, 0, 0, 0, 0]],
              [[-97, 116, 0, 48, 48, 0, 0, 0, 0, 0, 0, 0, []], 19, [], [], [0, 0, 1]],
              [[-94, 168, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, []], 20, [], [], [0, 0, 1]],
              [[0, 427, 0, 640, 36, 0, 0, 1, 0, 0, 0, 0, []], 21, [0], [], [0, 0, 1]],
            ],
            [],
          ],
          ["Dialogue", 1, a, [255, 255, 255], a, 1, 1, 1, f, 1, 0, 0, [], []],
          ["Skip", 2, a, [255, 255, 255], a, 1, 1, 1, f, 1, 0, 0, [[[0, 0, 0, 150, 36, 0, 0, 1, 0, 0, 0, 0, []], 41, [], [], [0, 0, 1]]], []],
          ["Black", 3, a, [0, 0, 0], f, 1, 1, 0, f, 1, 0, 0, [], []],
        ],
        [[c, 22, [], [], [0, 3, 1]]],
        [],
      ],
      [
        "Branches",
        640,
        480,
        f,
        "BranchesEvents",
        [
          ["tree", 0, a, [0, 5, 34], f, 1, 1, 1, f, 1, 0, 0, [[[0, 0, 0, 640, 480, 0, 0, 1, 0, 0, 0, 0, []], 24, [], [], [0, 0, 1]]], []],
          [
            "buttons",
            1,
            a,
            [255, 255, 255],
            a,
            1,
            1,
            1,
            f,
            1,
            0,
            0,
            [
              [[296, 72, 0, 48, 48, 0, 0, 1, 0, 0, 0, 0, []], 26, ["A"], [], [0, 0, 1]],
              [[200, 144, 0, 48, 48, 0, 0, 1, 0, 0, 0, 0, []], 26, ["B"], [], [0, 0, 1]],
              [[392, 144, 0, 48, 48, 0, 0, 1, 0, 0, 0, 0, []], 26, ["C"], [], [0, 0, 1]],
              [[440, 216, 0, 48, 48, 0, 0, 1, 0, 0, 0, 0, []], 26, ["E"], [], [0, 0, 1]],
              [[344, 216, 0, 48, 48, 0, 0, 1, 0, 0, 0, 0, []], 26, ["G"], [], [0, 0, 1]],
              [[400, 288, 0, 48, 48, 0, 0, 1, 0, 0, 0, 0, []], 26, ["J"], [], [0, 0, 1]],
              [[480, 288, 0, 48, 48, 0, 0, 1, 0, 0, 0, 0, []], 26, ["K"], [], [0, 0, 1]],
              [[248, 216, 0, 48, 48, 0, 0, 1, 0, 0, 0, 0, []], 26, ["F"], [], [0, 0, 1]],
              [[152, 216, 0, 48, 48, 0, 0, 1, 0, 0, 0, 0, []], 26, ["D"], [], [0, 0, 1]],
              [[192, 288, 0, 48, 48, 0, 0, 1, 0, 0, 0, 0, []], 26, ["I"], [], [0, 0, 1]],
              [[112, 288, 0, 48, 48, 0, 0, 1, 0, 0, 0, 0, []], 26, ["H"], [], [0, 0, 1]],
              [[560, 72, 0, 48, 48, 0, 0, 1, 0, 0, 0, 0, []], 26, ["L"], [], [0, 0, 1]],
              [[560, 144, 0, 48, 48, 0, 0, 1, 0, 0, 0, 0, []], 26, ["M"], [], [0, 0, 1]],
              [[560, 216, 0, 48, 48, 0, 0, 1, 0, 0, 0, 0, []], 26, ["N"], [], [0, 0, 1]],
              [[560, 288, 0, 48, 48, 0, 0, 1, 0, 0, 0, 0, []], 26, ["O"], [], [0, 0, 1]],
              [[537, 59, 0, 94, 300, 0, 0, 1, 0, 0, 0, 0, []], 25, [], [], [0, 0]],
              [[604, 444, 0, 36, 36, 0, 0, 1, 0, 0, 0, 0, []], 35, [], [], [0, 0, 1]],
            ],
            [],
          ],
        ],
        [],
        [],
      ],
      [
        "Start",
        640,
        480,
        f,
        "StartEvents",
        [["Layer 0", 0, a, [0, 0, 0], f, 1, 1, 1, f, 1, 0, 0, [[[0, 0, 0, 640, 480, 0, 0, 1, 0, 0, 0, 0, []], 42, [], [], [0, 0, 1]]], []]],
        [[c, 34, [], [], [1, 3, 1]]],
        [],
      ],
      [
        "DeleteFile",
        640,
        480,
        f,
        "DeleteFileEvents",
        [
          [
            "Layer 0",
            0,
            a,
            [0, 5, 34],
            f,
            1,
            1,
            1,
            f,
            1,
            0,
            0,
            [
              [[0, 69, 0, 583, 74, 0, 0, 1, -0.0566038, -0.27027, 0, 0, []], 36, [], [], [0, 0, 1]],
              [[27, 274, 0, 78, 39, 0, 0, 1, 0, 0, 0, 0, []], 37, [], [], [0, 0, 1]],
              [[530, 274, 0, 68, 39, 0, 0, 1, 0, 0, 0, 0, []], 38, [], [], [0, 0, 1]],
            ],
            [],
          ],
        ],
        [],
        [],
      ],
      [
        "Endings",
        640,
        480,
        f,
        "EndingsEvents",
        [
          [
            "Layer 0",
            0,
            a,
            [0, 0, 0],
            f,
            1,
            1,
            1,
            f,
            1,
            0,
            0,
            [
              [[0, 0, 0, 640, 480, 0, 0, 0, 0, 0, 0, 0, []], 39, [], [], [0, 0, 1]],
              [[0, 0, 0, 640, 480, 0, 0, 0, 0, 0, 0, 0, []], 40, [], [], [0, 0, 1]],
            ],
            [],
          ],
        ],
        [],
        [],
      ],
    ],
    [
      [
        "PuzzleEvents",
        [
          [2, "BranchConditions"],
          [1, "totalDeaths", 0, 0, f, f],
          [1, "fireGrowth", 0, 0, f, f],
          [1, "deathsAllowed", 0, 0, f, f],
          [1, "floorNumber", 0, 0, f, f],
          [1, "ChristinaAlive", 0, 1, f, f],
          [1, "LionelAlive", 0, 1, f, f],
          [1, "TroyAlive", 0, 1, f, f],
          [1, "SteveAlive", 0, 1, f, f],
          [1, "phase", 0, 0, f, f],
          [1, "waterOn", 0, 0, f, f],
          [1, "locksAllowed", 0, 0, f, f],
          [1, "ChristinaX", 0, 3, f, f],
          [1, "ChristinaY", 0, 2, f, f],
          [1, "LionelX", 0, 8, f, f],
          [1, "LionelY", 0, 3, f, f],
          [1, "TroyX", 0, 5, f, f],
          [1, "TroyY", 0, 1, f, f],
          [1, "SteveX", 0, 5, f, f],
          [1, "SteveY", 0, 5, f, f],
          [1, "separator", 0, 4, f, f],
          [1, "yBuffer", 0, 0, f, f],
          [1, "xBuffer", 0, 14, f, f],
          [1, "tileDimension", 0, 48, f, f],
          [1, "gridWidth", 0, 12, f, f],
          [
            1,
            "activeTiles",
            1,
            "1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 0, 1, 8, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 6, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,",
            f,
            f,
          ],
          [
            0,
            c,
            f,
            [[-1, A.prototype.c.je, c, 1, f, f, f]],
            [
              [
                -1,
                A.prototype.a.ub,
                c,
                [
                  [5, [2, "Black"]],
                  [0, [0, 0]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "phase"],
                  [7, [0, 0]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "totalDeaths"],
                  [7, [0, 0]],
                ],
              ],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "setTutorial"]], [13]]],
              [9, T.prototype.a.ib, c],
              [
                32,
                T.prototype.a.ic,
                c,
                [
                  [10, 0],
                  [3, 1],
                ],
              ],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "setRestartGraphic"]], [13]]],
              [0, S.prototype.a.CallFunction, c, [[1, [10, [2, "set"], [23, "currentBranch"]]], [13]]],
              [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
              [0, S.prototype.a.CallFunction, c, [[1, [10, [2, "setRoom"], [19, A.prototype.d.Dl, [[23, "floorNumber"]]]]], [13]]],
              [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "createArray"]],
                  [13, [7, [23, "activeTiles"]]],
                ],
              ],
              [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "createTiles"]], [13]]],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "createCharacter"]],
                  [13, [7, [0, 0]], [7, [23, "ChristinaX"]], [7, [23, "ChristinaY"]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "createCharacter"]],
                  [13, [7, [0, 1]], [7, [23, "LionelX"]], [7, [23, "LionelY"]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "createCharacter"]],
                  [13, [7, [0, 2]], [7, [23, "TroyX"]], [7, [23, "TroyY"]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "createCharacter"]],
                  [13, [7, [0, 3]], [7, [23, "SteveX"]], [7, [23, "SteveY"]], [7, [0, 1]]],
                ],
              ],
              [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "setTileGraphic"]], [13]]],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "setCharacterGraphic"]], [13]]],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "findValidSwitches"]], [13]]],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "createArrows"]], [13]]],
              [
                32,
                T.prototype.a.ic,
                c,
                [
                  [10, 0],
                  [3, 0],
                ],
              ],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "setRestartGraphic"]], [13]]],
            ],
          ],
          [
            0,
            [a, "Player Phase"],
            f,
            [[-1, A.prototype.c.Ij, c, 0, f, f, f, [[1, [2, "Player Phase"]]]]],
            [],
            [
              [
                0,
                c,
                f,
                [
                  [12, W.prototype.c.zb, c, 1, f, f, f, [[4, 14]]],
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "phase"],
                      [8, 0],
                      [7, [0, 0]],
                    ],
                  ],
                ],
                [
                  [
                    32,
                    T.prototype.a.ic,
                    c,
                    [
                      [10, 0],
                      [3, 1],
                    ],
                  ],
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "setRestartGraphic"]], [13]]],
                  [
                    14,
                    T.prototype.a.H,
                    c,
                    [
                      [1, [2, "Selected"]],
                      [3, 1],
                    ],
                  ],
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "phase"],
                      [7, [0, 1]],
                    ],
                  ],
                  [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "createArrows"]], [13]]],
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "findValidSwitches"]], [13]]],
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "firePhase"]], [13]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [12, W.prototype.c.zb, c, 1, f, f, f, [[4, 11]]],
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "phase"],
                      [8, 0],
                      [7, [0, 0]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 0],
                      [1, [2, "move"]],
                      [3, 0],
                      [0, [0, -10]],
                      [1, [2, ""]],
                    ],
                  ],
                  [
                    0,
                    S.prototype.a.CallFunction,
                    c,
                    [
                      [1, [2, "findNewPosition"]],
                      [13, [7, [21, 11, f, c, 0]], [7, [21, 11, f, c, 1]]],
                    ],
                  ],
                  [-1, A.prototype.a.h, c, [[0, [1, 0.001]]]],
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "createArrows"]], [13]]],
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "findValidSwitches"]], [13]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [12, W.prototype.c.zb, c, 1, f, f, f, [[4, 2]]],
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "phase"],
                      [8, 0],
                      [7, [0, 0]],
                    ],
                  ],
                ],
                [],
                [
                  [1, "checker", 0, 0, f, f],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        2,
                        T.prototype.c.o,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [10, 0],
                          [8, 0],
                          [7, [0, 8]],
                        ],
                      ],
                    ],
                    [],
                    [
                      [
                        0,
                        c,
                        f,
                        [[-1, A.prototype.c.Pb, c, 0, a, f, f, [[4, 9]]]],
                        [],
                        [
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                9,
                                T.prototype.c.o,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [10, 1],
                                  [8, 0],
                                  [7, [21, 2, f, c, 1]],
                                ],
                              ],
                              [
                                9,
                                T.prototype.c.o,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [10, 2],
                                  [8, 0],
                                  [7, [21, 2, f, c, 2]],
                                ],
                              ],
                            ],
                            [
                              [
                                -1,
                                A.prototype.a.e,
                                c,
                                [
                                  [11, "checker"],
                                  [7, [0, 1]],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            -1,
                            A.prototype.c.g,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [11, "locksAllowed"],
                              [8, 4],
                              [7, [0, 0]],
                            ],
                          ],
                          [
                            -1,
                            A.prototype.c.g,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [11, "checker"],
                              [8, 0],
                              [7, [0, 0]],
                            ],
                          ],
                        ],
                        [
                          [
                            28,
                            R.prototype.a.k,
                            c,
                            [
                              [3, 0],
                              [1, [2, "switch"]],
                              [3, 0],
                              [0, [0, -10]],
                              [1, [2, ""]],
                            ],
                          ],
                          [
                            -1,
                            A.prototype.a.Gc,
                            c,
                            [
                              [11, "locksAllowed"],
                              [7, [0, 1]],
                            ],
                          ],
                          [
                            1,
                            H.prototype.a.Ca,
                            c,
                            [
                              [0, [21, 2, f, c, 1]],
                              [0, [21, 2, f, c, 2]],
                              [7, [0, 7]],
                            ],
                          ],
                          [0, S.prototype.a.CallFunction, c, [[1, [2, "createTiles"]], [13]]],
                          [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
                          [0, S.prototype.a.CallFunction, c, [[1, [2, "setTileGraphic"]], [13]]],
                          [0, S.prototype.a.CallFunction, c, [[1, [2, "findValidSwitches"]], [13]]],
                          [0, S.prototype.a.CallFunction, c, [[1, [2, "createArrows"]], [13]]],
                        ],
                      ],
                    ],
                  ],
                  [
                    0,
                    c,
                    a,
                    [
                      [
                        2,
                        T.prototype.c.o,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [10, 0],
                          [8, 0],
                          [7, [0, 3]],
                        ],
                      ],
                      [
                        2,
                        T.prototype.c.o,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [10, 0],
                          [8, 0],
                          [7, [0, 4]],
                        ],
                      ],
                    ],
                    [],
                    [
                      [
                        0,
                        c,
                        f,
                        [[-1, A.prototype.c.Pb, c, 0, a, f, f, [[4, 9]]]],
                        [],
                        [
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                9,
                                T.prototype.c.o,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [10, 1],
                                  [8, 0],
                                  [7, [5, [21, 2, f, c, 1], [0, 1]]],
                                ],
                              ],
                              [
                                9,
                                T.prototype.c.o,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [10, 2],
                                  [8, 0],
                                  [7, [21, 2, f, c, 2]],
                                ],
                              ],
                            ],
                            [
                              [
                                -1,
                                A.prototype.a.e,
                                c,
                                [
                                  [11, "checker"],
                                  [7, [0, 1]],
                                ],
                              ],
                            ],
                          ],
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                9,
                                T.prototype.c.o,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [10, 1],
                                  [8, 0],
                                  [7, [4, [21, 2, f, c, 1], [0, 1]]],
                                ],
                              ],
                              [
                                9,
                                T.prototype.c.o,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [10, 2],
                                  [8, 0],
                                  [7, [21, 2, f, c, 2]],
                                ],
                              ],
                            ],
                            [
                              [
                                -1,
                                A.prototype.a.e,
                                c,
                                [
                                  [11, "checker"],
                                  [7, [0, 1]],
                                ],
                              ],
                            ],
                          ],
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                9,
                                T.prototype.c.o,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [10, 1],
                                  [8, 0],
                                  [7, [21, 2, f, c, 1]],
                                ],
                              ],
                              [
                                9,
                                T.prototype.c.o,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [10, 2],
                                  [8, 0],
                                  [7, [5, [21, 2, f, c, 2], [0, 1]]],
                                ],
                              ],
                            ],
                            [
                              [
                                -1,
                                A.prototype.a.e,
                                c,
                                [
                                  [11, "checker"],
                                  [7, [0, 1]],
                                ],
                              ],
                            ],
                          ],
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                9,
                                T.prototype.c.o,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [10, 1],
                                  [8, 0],
                                  [7, [21, 2, f, c, 1]],
                                ],
                              ],
                              [
                                9,
                                T.prototype.c.o,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [10, 2],
                                  [8, 0],
                                  [7, [4, [21, 2, f, c, 2], [0, 1]]],
                                ],
                              ],
                            ],
                            [
                              [
                                -1,
                                A.prototype.a.e,
                                c,
                                [
                                  [11, "checker"],
                                  [7, [0, 1]],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            -1,
                            A.prototype.c.g,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [11, "checker"],
                              [8, 0],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                        [],
                        [
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                -1,
                                A.prototype.c.g,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [11, "waterOn"],
                                  [8, 0],
                                  [7, [0, 0]],
                                ],
                              ],
                            ],
                            [
                              [
                                -1,
                                A.prototype.a.e,
                                c,
                                [
                                  [11, "waterOn"],
                                  [7, [0, 1]],
                                ],
                              ],
                            ],
                          ],
                          [
                            0,
                            c,
                            f,
                            [
                              [-1, A.prototype.c.ca, c, 0, f, f, f],
                              [
                                -1,
                                A.prototype.c.g,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [11, "waterOn"],
                                  [8, 0],
                                  [7, [0, 1]],
                                ],
                              ],
                            ],
                            [
                              [
                                -1,
                                A.prototype.a.e,
                                c,
                                [
                                  [11, "waterOn"],
                                  [7, [0, 0]],
                                ],
                              ],
                            ],
                          ],
                          [
                            0,
                            c,
                            f,
                            [],
                            [
                              [
                                28,
                                R.prototype.a.k,
                                c,
                                [
                                  [3, 0],
                                  [1, [2, "switch"]],
                                  [3, 0],
                                  [0, [0, -10]],
                                  [1, [2, ""]],
                                ],
                              ],
                              [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
                              [0, S.prototype.a.CallFunction, c, [[1, [2, "createTiles"]], [13]]],
                              [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
                              [0, S.prototype.a.CallFunction, c, [[1, [2, "setTileGraphic"]], [13]]],
                              [0, S.prototype.a.CallFunction, c, [[1, [2, "findValidSwitches"]], [13]]],
                              [0, S.prototype.a.CallFunction, c, [[1, [2, "createArrows"]], [13]]],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [
            0,
            [a, "Functions and Cleanup"],
            f,
            [[-1, A.prototype.c.Ij, c, 0, f, f, f, [[1, [2, "Functions and Cleanup"]]]]],
            [],
            [
              [
                0,
                c,
                f,
                [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "firePhase"]]]]],
                [
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "findValidSwitches"]], [13]]],
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "createArrows"]], [13]]],
                ],
                [
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "waterOn"],
                          [8, 0],
                          [7, [0, 1]],
                        ],
                      ],
                    ],
                    [
                      [0, S.prototype.a.CallFunction, c, [[1, [2, "growWater"]], [13]]],
                      [
                        28,
                        R.prototype.a.k,
                        c,
                        [
                          [3, 0],
                          [1, [2, "water"]],
                          [3, 0],
                          [0, [0, 0]],
                          [1, [2, ""]],
                        ],
                      ],
                      [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
                      [0, S.prototype.a.CallFunction, c, [[1, [2, "createTiles"]], [13]]],
                      [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
                      [0, S.prototype.a.CallFunction, c, [[1, [2, "setTileGraphic"]], [13]]],
                      [-1, A.prototype.a.h, c, [[0, [0, 1]]]],
                      [0, S.prototype.a.CallFunction, c, [[1, [2, "growFire"]], [13]]],
                      [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
                      [0, S.prototype.a.CallFunction, c, [[1, [2, "createTiles"]], [13]]],
                      [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
                      [0, S.prototype.a.CallFunction, c, [[1, [2, "setTileGraphic"]], [13]]],
                    ],
                    [
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            -1,
                            A.prototype.c.g,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [11, "fireGrowth"],
                              [8, 4],
                              [7, [0, 0]],
                            ],
                          ],
                        ],
                        [
                          [
                            28,
                            R.prototype.a.k,
                            c,
                            [
                              [3, 0],
                              [1, [2, "flames"]],
                              [3, 0],
                              [0, [0, 0]],
                              [1, [2, ""]],
                            ],
                          ],
                          [-1, A.prototype.a.h, c, [[0, [0, 1]]]],
                          [
                            14,
                            T.prototype.a.H,
                            c,
                            [
                              [1, [2, "default"]],
                              [3, 1],
                            ],
                          ],
                          [0, S.prototype.a.CallFunction, c, [[1, [2, "startPlayerPhase"]], [13]]],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [[-1, A.prototype.c.ca, c, 0, f, f, f]],
                        [
                          [
                            14,
                            T.prototype.a.H,
                            c,
                            [
                              [1, [2, "default"]],
                              [3, 1],
                            ],
                          ],
                          [0, S.prototype.a.CallFunction, c, [[1, [2, "startPlayerPhase"]], [13]]],
                        ],
                      ],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [[-1, A.prototype.c.ca, c, 0, f, f, f]],
                    [
                      [0, S.prototype.a.CallFunction, c, [[1, [2, "growFire"]], [13]]],
                      [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
                      [0, S.prototype.a.CallFunction, c, [[1, [2, "createTiles"]], [13]]],
                      [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
                      [0, S.prototype.a.CallFunction, c, [[1, [2, "setTileGraphic"]], [13]]],
                    ],
                    [
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            -1,
                            A.prototype.c.g,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [11, "fireGrowth"],
                              [8, 4],
                              [7, [0, 0]],
                            ],
                          ],
                        ],
                        [
                          [
                            28,
                            R.prototype.a.k,
                            c,
                            [
                              [3, 0],
                              [1, [2, "flames"]],
                              [3, 0],
                              [0, [0, 0]],
                              [1, [2, ""]],
                            ],
                          ],
                          [-1, A.prototype.a.h, c, [[0, [0, 1]]]],
                          [
                            14,
                            T.prototype.a.H,
                            c,
                            [
                              [1, [2, "default"]],
                              [3, 1],
                            ],
                          ],
                          [0, S.prototype.a.CallFunction, c, [[1, [2, "startPlayerPhase"]], [13]]],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [[-1, A.prototype.c.ca, c, 0, f, f, f]],
                        [
                          [
                            28,
                            R.prototype.a.k,
                            c,
                            [
                              [3, 0],
                              [1, [2, "win"]],
                              [3, 0],
                              [0, [0, 0]],
                              [1, [2, ""]],
                            ],
                          ],
                          [0, S.prototype.a.CallFunction, c, [[1, [10, [2, "win"], [23, "currentBranch"]]], [13]]],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "startPlayerPhase"]]]]],
                [
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "phase"],
                      [7, [0, 0]],
                    ],
                  ],
                ],
                [
                  [
                    0,
                    c,
                    f,
                    [[-1, A.prototype.c.Pb, c, 0, a, f, f, [[4, 9]]]],
                    [
                      [
                        9,
                        T.prototype.a.Ba,
                        c,
                        [
                          [10, 3],
                          [7, [0, 1]],
                        ],
                      ],
                    ],
                    [
                      [
                        0,
                        c,
                        a,
                        [
                          [
                            1,
                            H.prototype.c.p,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [0, [21, 9, f, c, 1]],
                              [0, [21, 9, f, c, 2]],
                              [8, 0],
                              [7, [0, 2]],
                            ],
                          ],
                          [
                            1,
                            H.prototype.c.p,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [0, [21, 9, f, c, 1]],
                              [0, [21, 9, f, c, 2]],
                              [8, 0],
                              [7, [0, 5]],
                            ],
                          ],
                        ],
                        [],
                        [
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                9,
                                T.prototype.c.o,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [10, 0],
                                  [8, 0],
                                  [7, [0, 0]],
                                ],
                              ],
                            ],
                            [
                              [
                                -1,
                                A.prototype.a.e,
                                c,
                                [
                                  [11, "ChristinaAlive"],
                                  [7, [0, 0]],
                                ],
                              ],
                            ],
                          ],
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                9,
                                T.prototype.c.o,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [10, 0],
                                  [8, 0],
                                  [7, [0, 1]],
                                ],
                              ],
                            ],
                            [
                              [
                                -1,
                                A.prototype.a.e,
                                c,
                                [
                                  [11, "LionelAlive"],
                                  [7, [0, 0]],
                                ],
                              ],
                            ],
                          ],
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                9,
                                T.prototype.c.o,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [10, 0],
                                  [8, 0],
                                  [7, [0, 2]],
                                ],
                              ],
                            ],
                            [
                              [
                                -1,
                                A.prototype.a.e,
                                c,
                                [
                                  [11, "TroyAlive"],
                                  [7, [0, 0]],
                                ],
                              ],
                            ],
                          ],
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                9,
                                T.prototype.c.o,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [10, 0],
                                  [8, 0],
                                  [7, [0, 3]],
                                ],
                              ],
                            ],
                            [
                              [
                                -1,
                                A.prototype.a.e,
                                c,
                                [
                                  [11, "SteveAlive"],
                                  [7, [0, 0]],
                                ],
                              ],
                            ],
                          ],
                          [
                            0,
                            c,
                            f,
                            [],
                            [
                              [9, T.prototype.a.ib, c],
                              [
                                -1,
                                A.prototype.a.Na,
                                c,
                                [
                                  [11, "totalDeaths"],
                                  [7, [0, 1]],
                                ],
                              ],
                              [
                                28,
                                R.prototype.a.k,
                                c,
                                [
                                  [3, 0],
                                  [1, [2, "die"]],
                                  [3, 0],
                                  [0, [0, 0]],
                                  [1, [2, ""]],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [[-1, A.prototype.c.ca, c, 0, f, f, f]],
                    [[-1, A.prototype.a.h, c, [[0, [0, 0]]]]],
                    [
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            -1,
                            A.prototype.c.g,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [11, "deathsAllowed"],
                              [8, 2],
                              [7, [23, "totalDeaths"]],
                            ],
                          ],
                        ],
                        [
                          [0, S.prototype.a.CallFunction, c, [[1, [2, "restart"]], [13]]],
                          [
                            -1,
                            A.prototype.a.ub,
                            c,
                            [
                              [5, [2, "TooManyDeaths"]],
                              [0, [0, 100]],
                            ],
                          ],
                          [
                            32,
                            T.prototype.a.ic,
                            c,
                            [
                              [10, 0],
                              [3, 0],
                            ],
                          ],
                          [0, S.prototype.a.CallFunction, c, [[1, [2, "setRestartGraphic"]], [13]]],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [[-1, A.prototype.c.ca, c, 0, f, f, f]],
                        [
                          [0, S.prototype.a.CallFunction, c, [[1, [2, "createTiles"]], [13]]],
                          [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
                          [0, S.prototype.a.CallFunction, c, [[1, [2, "createArrows"]], [13]]],
                          [0, S.prototype.a.CallFunction, c, [[1, [2, "findValidSwitches"]], [13]]],
                          [0, S.prototype.a.CallFunction, c, [[1, [2, "setTileGraphic"]], [13]]],
                          [
                            32,
                            T.prototype.a.ic,
                            c,
                            [
                              [10, 0],
                              [3, 0],
                            ],
                          ],
                          [0, S.prototype.a.CallFunction, c, [[1, [2, "setRestartGraphic"]], [13]]],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "createArray"]]]]],
                [],
                [
                  [1, "gridInfo", 1, "", f, f],
                  [
                    0,
                    c,
                    f,
                    [],
                    [
                      [
                        -1,
                        A.prototype.a.e,
                        c,
                        [
                          [11, "gridInfo"],
                          [7, [20, 0, S.prototype.d.Qb, f, c, [[0, 0]]]],
                        ],
                      ],
                      [
                        1,
                        H.prototype.a.ga,
                        c,
                        [
                          [0, [23, "gridWidth"]],
                          [
                            0,
                            [
                              7,
                              [
                                19,
                                A.prototype.d.Hl,
                                [
                                  [23, "gridInfo"],
                                  [2, ", "],
                                ],
                              ],
                              [23, "gridWidth"],
                            ],
                          ],
                          [0, [0, 1]],
                        ],
                      ],
                    ],
                    [
                      [1, "counter", 0, 0, f, f],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            -1,
                            A.prototype.c.Oa,
                            c,
                            0,
                            a,
                            f,
                            f,
                            [
                              [1, [2, ""]],
                              [0, [0, 0]],
                              [
                                0,
                                [
                                  7,
                                  [
                                    19,
                                    A.prototype.d.Hl,
                                    [
                                      [23, "gridInfo"],
                                      [2, ", "],
                                    ],
                                  ],
                                  [23, "gridWidth"],
                                ],
                              ],
                            ],
                          ],
                        ],
                        [],
                        [
                          [
                            0,
                            c,
                            f,
                            [[1, H.prototype.c.cd, c, 0, a, f, f, [[3, 2]]]],
                            [
                              [
                                1,
                                H.prototype.a.Ca,
                                c,
                                [
                                  [0, [20, 1, H.prototype.d.n, f, c]],
                                  [0, [19, A.prototype.d.Qa]],
                                  [
                                    7,
                                    [
                                      19,
                                      A.prototype.d["int"],
                                      [
                                        [
                                          19,
                                          A.prototype.d.$n,
                                          [
                                            [23, "gridInfo"],
                                            [6, [23, "counter"], [0, 3]],
                                            [0, 1],
                                          ],
                                        ],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                              [
                                -1,
                                A.prototype.a.Na,
                                c,
                                [
                                  [11, "counter"],
                                  [7, [0, 1]],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "createTiles"]]]]],
                [],
                [
                  [
                    0,
                    c,
                    f,
                    [[1, H.prototype.c.cd, c, 0, a, f, f, [[3, 1]]]],
                    [
                      [
                        -1,
                        A.prototype.a.Y,
                        c,
                        [
                          [4, 2],
                          [5, [2, "Tiles"]],
                          [0, [4, [23, "xBuffer"], [6, [4, [23, "tileDimension"], [23, "separator"]], [20, 1, H.prototype.d.n, f, c]]]],
                          [0, [4, [23, "yBuffer"], [6, [4, [23, "tileDimension"], [23, "separator"]], [20, 1, H.prototype.d.s, f, c]]]],
                        ],
                      ],
                      [
                        2,
                        T.prototype.a.ga,
                        c,
                        [
                          [0, [23, "tileDimension"]],
                          [0, [23, "tileDimension"]],
                        ],
                      ],
                      [
                        2,
                        T.prototype.a.Ba,
                        c,
                        [
                          [10, 0],
                          [7, [20, 1, H.prototype.d.Rl, f, c]],
                        ],
                      ],
                      [
                        2,
                        T.prototype.a.Ba,
                        c,
                        [
                          [10, 1],
                          [7, [20, 1, H.prototype.d.n, f, c]],
                        ],
                      ],
                      [
                        2,
                        T.prototype.a.Ba,
                        c,
                        [
                          [10, 2],
                          [7, [20, 1, H.prototype.d.s, f, c]],
                        ],
                      ],
                    ],
                    [
                      [
                        0,
                        c,
                        a,
                        [
                          [
                            1,
                            H.prototype.c.dd,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [8, 0],
                              [7, [0, 3]],
                            ],
                          ],
                          [
                            1,
                            H.prototype.c.dd,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [8, 0],
                              [7, [0, 4]],
                            ],
                          ],
                        ],
                        [],
                        [
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                -1,
                                A.prototype.c.g,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [11, "waterOn"],
                                  [8, 0],
                                  [7, [0, 0]],
                                ],
                              ],
                            ],
                            [
                              [
                                2,
                                T.prototype.a.Ba,
                                c,
                                [
                                  [10, 0],
                                  [7, [0, 4]],
                                ],
                              ],
                              [
                                1,
                                H.prototype.a.Ca,
                                c,
                                [
                                  [0, [20, 1, H.prototype.d.n, f, c]],
                                  [0, [20, 1, H.prototype.d.s, f, c]],
                                  [7, [0, 4]],
                                ],
                              ],
                            ],
                          ],
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                -1,
                                A.prototype.c.g,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [11, "waterOn"],
                                  [8, 0],
                                  [7, [0, 1]],
                                ],
                              ],
                            ],
                            [
                              [
                                2,
                                T.prototype.a.Ba,
                                c,
                                [
                                  [10, 0],
                                  [7, [0, 3]],
                                ],
                              ],
                              [
                                1,
                                H.prototype.a.Ca,
                                c,
                                [
                                  [0, [20, 1, H.prototype.d.n, f, c]],
                                  [0, [20, 1, H.prototype.d.s, f, c]],
                                  [7, [0, 3]],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setTileGraphic"]]]]],
                [],
                [
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.Hj,
                        c,
                        0,
                        a,
                        f,
                        f,
                        [
                          [4, 2],
                          [7, [21, 2, f, c, 1]],
                          [3, 0],
                        ],
                      ],
                    ],
                    [],
                    [
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            2,
                            T.prototype.c.o,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [10, 0],
                              [8, 0],
                              [7, [0, 0]],
                            ],
                          ],
                        ],
                        [
                          [
                            2,
                            T.prototype.a.H,
                            c,
                            [
                              [1, [2, "Plain"]],
                              [3, 1],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            2,
                            T.prototype.c.o,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [10, 0],
                              [8, 0],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                        [
                          [
                            2,
                            T.prototype.a.H,
                            c,
                            [
                              [1, [2, "Wall"]],
                              [3, 1],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            2,
                            T.prototype.c.o,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [10, 0],
                              [8, 0],
                              [7, [0, 2]],
                            ],
                          ],
                        ],
                        [
                          [
                            2,
                            T.prototype.a.H,
                            c,
                            [
                              [1, [2, "Fire"]],
                              [3, 1],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            2,
                            T.prototype.c.o,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [10, 0],
                              [8, 0],
                              [7, [0, 3]],
                            ],
                          ],
                        ],
                        [
                          [
                            2,
                            T.prototype.a.H,
                            c,
                            [
                              [1, [2, "PumpOn"]],
                              [3, 1],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            2,
                            T.prototype.c.o,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [10, 0],
                              [8, 0],
                              [7, [0, 4]],
                            ],
                          ],
                        ],
                        [
                          [
                            2,
                            T.prototype.a.H,
                            c,
                            [
                              [1, [2, "PumpOff"]],
                              [3, 1],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            2,
                            T.prototype.c.o,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [10, 0],
                              [8, 0],
                              [7, [0, 5]],
                            ],
                          ],
                        ],
                        [
                          [
                            2,
                            T.prototype.a.H,
                            c,
                            [
                              [1, [2, "Water"]],
                              [3, 1],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            2,
                            T.prototype.c.o,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [10, 0],
                              [8, 0],
                              [7, [0, 6]],
                            ],
                          ],
                        ],
                        [
                          [
                            2,
                            T.prototype.a.H,
                            c,
                            [
                              [1, [2, "WaterSource"]],
                              [3, 1],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            2,
                            T.prototype.c.o,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [10, 0],
                              [8, 0],
                              [7, [0, 7]],
                            ],
                          ],
                        ],
                        [
                          [
                            2,
                            T.prototype.a.H,
                            c,
                            [
                              [1, [2, "LockOn"]],
                              [3, 1],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            2,
                            T.prototype.c.o,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [10, 0],
                              [8, 0],
                              [7, [0, 8]],
                            ],
                          ],
                        ],
                        [
                          [
                            2,
                            T.prototype.a.H,
                            c,
                            [
                              [1, [2, "LockOff"]],
                              [3, 1],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [0, c, f, [], [[0, S.prototype.a.CallFunction, c, [[1, [2, "clearTiles"]], [13]]]]],
                ],
              ],
              [
                0,
                c,
                f,
                [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "createCharacter"]]]]],
                [],
                [
                  [
                    0,
                    c,
                    f,
                    [[-1, A.prototype.c.Pb, c, 0, a, f, f, [[4, 9]]]],
                    [],
                    [
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            9,
                            T.prototype.c.o,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [10, 0],
                              [8, 0],
                              [7, [20, 0, S.prototype.d.Qb, f, c, [[0, 0]]]],
                            ],
                          ],
                        ],
                        [[9, T.prototype.a.ib, c]],
                      ],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [],
                    [
                      [
                        -1,
                        A.prototype.a.Y,
                        c,
                        [
                          [4, 9],
                          [5, [2, "Characters"]],
                          [0, [4, [23, "xBuffer"], [6, [4, [23, "tileDimension"], [23, "separator"]], [20, 0, S.prototype.d.Qb, f, c, [[0, 1]]]]]],
                          [0, [4, [23, "yBuffer"], [6, [4, [23, "tileDimension"], [23, "separator"]], [20, 0, S.prototype.d.Qb, f, c, [[0, 2]]]]]],
                        ],
                      ],
                      [
                        9,
                        T.prototype.a.ga,
                        c,
                        [
                          [0, [23, "tileDimension"]],
                          [0, [23, "tileDimension"]],
                        ],
                      ],
                      [
                        9,
                        T.prototype.a.Ba,
                        c,
                        [
                          [10, 0],
                          [7, [20, 0, S.prototype.d.Qb, f, c, [[0, 0]]]],
                        ],
                      ],
                      [
                        9,
                        T.prototype.a.Ba,
                        c,
                        [
                          [10, 1],
                          [7, [20, 0, S.prototype.d.Qb, f, c, [[0, 1]]]],
                        ],
                      ],
                      [
                        9,
                        T.prototype.a.Ba,
                        c,
                        [
                          [10, 2],
                          [7, [20, 0, S.prototype.d.Qb, f, c, [[0, 2]]]],
                        ],
                      ],
                      [
                        9,
                        T.prototype.a.Ba,
                        c,
                        [
                          [10, 3],
                          [7, [20, 0, S.prototype.d.Qb, f, c, [[0, 3]]]],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setCharacterGraphic"]]]]],
                [],
                [
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.Hj,
                        c,
                        0,
                        a,
                        f,
                        f,
                        [
                          [4, 9],
                          [7, [21, 9, f, c, 1]],
                          [3, 0],
                        ],
                      ],
                    ],
                    [],
                    [
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            9,
                            T.prototype.c.o,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [10, 0],
                              [8, 0],
                              [7, [0, 0]],
                            ],
                          ],
                        ],
                        [],
                        [
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                -1,
                                A.prototype.c.g,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [11, "ChristinaAlive"],
                                  [8, 0],
                                  [7, [0, 1]],
                                ],
                              ],
                            ],
                            [
                              [
                                9,
                                T.prototype.a.H,
                                c,
                                [
                                  [1, [2, "Christina"]],
                                  [3, 1],
                                ],
                              ],
                            ],
                          ],
                          [0, c, f, [[-1, A.prototype.c.ca, c, 0, f, f, f]], [[9, T.prototype.a.ib, c]]],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            9,
                            T.prototype.c.o,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [10, 0],
                              [8, 0],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                        [],
                        [
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                -1,
                                A.prototype.c.g,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [11, "LionelAlive"],
                                  [8, 0],
                                  [7, [0, 1]],
                                ],
                              ],
                            ],
                            [
                              [
                                9,
                                T.prototype.a.H,
                                c,
                                [
                                  [1, [2, "Lionel"]],
                                  [3, 1],
                                ],
                              ],
                            ],
                          ],
                          [0, c, f, [[-1, A.prototype.c.ca, c, 0, f, f, f]], [[9, T.prototype.a.ib, c]]],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            9,
                            T.prototype.c.o,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [10, 0],
                              [8, 0],
                              [7, [0, 2]],
                            ],
                          ],
                        ],
                        [],
                        [
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                -1,
                                A.prototype.c.g,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [11, "TroyAlive"],
                                  [8, 0],
                                  [7, [0, 1]],
                                ],
                              ],
                            ],
                            [
                              [
                                9,
                                T.prototype.a.H,
                                c,
                                [
                                  [1, [2, "Troy"]],
                                  [3, 1],
                                ],
                              ],
                            ],
                          ],
                          [0, c, f, [[-1, A.prototype.c.ca, c, 0, f, f, f]], [[9, T.prototype.a.ib, c]]],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            9,
                            T.prototype.c.o,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [10, 0],
                              [8, 0],
                              [7, [0, 3]],
                            ],
                          ],
                        ],
                        [],
                        [
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                -1,
                                A.prototype.c.g,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [11, "SteveAlive"],
                                  [8, 0],
                                  [7, [0, 1]],
                                ],
                              ],
                            ],
                            [
                              [
                                9,
                                T.prototype.a.H,
                                c,
                                [
                                  [1, [2, "Steve"]],
                                  [3, 1],
                                ],
                              ],
                            ],
                          ],
                          [0, c, f, [[-1, A.prototype.c.ca, c, 0, f, f, f]], [[9, T.prototype.a.ib, c]]],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "growFire"]]]]],
                [
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "cloneTiles"]], [13]]],
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "fireGrowth"],
                      [7, [0, 0]],
                    ],
                  ],
                ],
                [
                  [
                    0,
                    c,
                    f,
                    [[1, H.prototype.c.cd, c, 0, a, f, f, [[3, 1]]]],
                    [],
                    [
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            1,
                            H.prototype.c.dd,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [8, 0],
                              [7, [0, 2]],
                            ],
                          ],
                        ],
                        [],
                        [
                          [
                            0,
                            c,
                            a,
                            [
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [5, [20, 1, H.prototype.d.n, f, c], [0, 1]]],
                                  [0, [20, 1, H.prototype.d.s, f, c]],
                                  [8, 0],
                                  [7, [0, 0]],
                                ],
                              ],
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [5, [20, 1, H.prototype.d.n, f, c], [0, 1]]],
                                  [0, [20, 1, H.prototype.d.s, f, c]],
                                  [8, 0],
                                  [7, [0, 8]],
                                ],
                              ],
                            ],
                            [
                              [
                                10,
                                H.prototype.a.Ca,
                                c,
                                [
                                  [0, [5, [20, 1, H.prototype.d.n, f, c], [0, 1]]],
                                  [0, [20, 1, H.prototype.d.s, f, c]],
                                  [7, [0, 2]],
                                ],
                              ],
                              [
                                -1,
                                A.prototype.a.Na,
                                c,
                                [
                                  [11, "fireGrowth"],
                                  [7, [0, 1]],
                                ],
                              ],
                            ],
                          ],
                          [
                            0,
                            c,
                            a,
                            [
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [4, [20, 1, H.prototype.d.n, f, c], [0, 1]]],
                                  [0, [20, 1, H.prototype.d.s, f, c]],
                                  [8, 0],
                                  [7, [0, 0]],
                                ],
                              ],
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [4, [20, 1, H.prototype.d.n, f, c], [0, 1]]],
                                  [0, [20, 1, H.prototype.d.s, f, c]],
                                  [8, 0],
                                  [7, [0, 8]],
                                ],
                              ],
                            ],
                            [
                              [
                                10,
                                H.prototype.a.Ca,
                                c,
                                [
                                  [0, [4, [20, 1, H.prototype.d.n, f, c], [0, 1]]],
                                  [0, [20, 1, H.prototype.d.s, f, c]],
                                  [7, [0, 2]],
                                ],
                              ],
                              [
                                -1,
                                A.prototype.a.Na,
                                c,
                                [
                                  [11, "fireGrowth"],
                                  [7, [0, 1]],
                                ],
                              ],
                            ],
                          ],
                          [
                            0,
                            c,
                            a,
                            [
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [20, 1, H.prototype.d.n, f, c]],
                                  [0, [5, [20, 1, H.prototype.d.s, f, c], [0, 1]]],
                                  [8, 0],
                                  [7, [0, 0]],
                                ],
                              ],
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [20, 1, H.prototype.d.n, f, c]],
                                  [0, [5, [20, 1, H.prototype.d.s, f, c], [0, 1]]],
                                  [8, 0],
                                  [7, [0, 8]],
                                ],
                              ],
                            ],
                            [
                              [
                                10,
                                H.prototype.a.Ca,
                                c,
                                [
                                  [0, [20, 1, H.prototype.d.n, f, c]],
                                  [0, [5, [20, 1, H.prototype.d.s, f, c], [0, 1]]],
                                  [7, [0, 2]],
                                ],
                              ],
                              [
                                -1,
                                A.prototype.a.Na,
                                c,
                                [
                                  [11, "fireGrowth"],
                                  [7, [0, 1]],
                                ],
                              ],
                            ],
                          ],
                          [
                            0,
                            c,
                            a,
                            [
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [20, 1, H.prototype.d.n, f, c]],
                                  [0, [4, [20, 1, H.prototype.d.s, f, c], [0, 1]]],
                                  [8, 0],
                                  [7, [0, 0]],
                                ],
                              ],
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [20, 1, H.prototype.d.n, f, c]],
                                  [0, [4, [20, 1, H.prototype.d.s, f, c], [0, 1]]],
                                  [8, 0],
                                  [7, [0, 8]],
                                ],
                              ],
                            ],
                            [
                              [
                                10,
                                H.prototype.a.Ca,
                                c,
                                [
                                  [0, [20, 1, H.prototype.d.n, f, c]],
                                  [0, [4, [20, 1, H.prototype.d.s, f, c], [0, 1]]],
                                  [7, [0, 2]],
                                ],
                              ],
                              [
                                -1,
                                A.prototype.a.Na,
                                c,
                                [
                                  [11, "fireGrowth"],
                                  [7, [0, 1]],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [0, c, f, [], [[0, S.prototype.a.CallFunction, c, [[1, [2, "copyChanges"]], [13]]]]],
                ],
              ],
              [
                0,
                c,
                f,
                [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "growWater"]]]]],
                [[0, S.prototype.a.CallFunction, c, [[1, [2, "cloneTiles"]], [13]]]],
                [
                  [
                    0,
                    c,
                    f,
                    [[1, H.prototype.c.cd, c, 0, a, f, f, [[3, 1]]]],
                    [],
                    [
                      [
                        0,
                        c,
                        a,
                        [
                          [
                            1,
                            H.prototype.c.dd,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [8, 0],
                              [7, [0, 6]],
                            ],
                          ],
                          [
                            1,
                            H.prototype.c.dd,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [8, 0],
                              [7, [0, 5]],
                            ],
                          ],
                        ],
                        [],
                        [
                          [
                            0,
                            c,
                            a,
                            [
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [5, [20, 1, H.prototype.d.n, f, c], [0, 1]]],
                                  [0, [20, 1, H.prototype.d.s, f, c]],
                                  [8, 0],
                                  [7, [0, 0]],
                                ],
                              ],
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [5, [20, 1, H.prototype.d.n, f, c], [0, 1]]],
                                  [0, [20, 1, H.prototype.d.s, f, c]],
                                  [8, 0],
                                  [7, [0, 8]],
                                ],
                              ],
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [5, [20, 1, H.prototype.d.n, f, c], [0, 1]]],
                                  [0, [20, 1, H.prototype.d.s, f, c]],
                                  [8, 0],
                                  [7, [0, 2]],
                                ],
                              ],
                            ],
                            [
                              [
                                10,
                                H.prototype.a.Ca,
                                c,
                                [
                                  [0, [5, [20, 1, H.prototype.d.n, f, c], [0, 1]]],
                                  [0, [20, 1, H.prototype.d.s, f, c]],
                                  [7, [0, 5]],
                                ],
                              ],
                            ],
                          ],
                          [
                            0,
                            c,
                            a,
                            [
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [4, [20, 1, H.prototype.d.n, f, c], [0, 1]]],
                                  [0, [20, 1, H.prototype.d.s, f, c]],
                                  [8, 0],
                                  [7, [0, 0]],
                                ],
                              ],
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [4, [20, 1, H.prototype.d.n, f, c], [0, 1]]],
                                  [0, [20, 1, H.prototype.d.s, f, c]],
                                  [8, 0],
                                  [7, [0, 8]],
                                ],
                              ],
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [4, [20, 1, H.prototype.d.n, f, c], [0, 1]]],
                                  [0, [20, 1, H.prototype.d.s, f, c]],
                                  [8, 0],
                                  [7, [0, 2]],
                                ],
                              ],
                            ],
                            [
                              [
                                10,
                                H.prototype.a.Ca,
                                c,
                                [
                                  [0, [4, [20, 1, H.prototype.d.n, f, c], [0, 1]]],
                                  [0, [20, 1, H.prototype.d.s, f, c]],
                                  [7, [0, 5]],
                                ],
                              ],
                            ],
                          ],
                          [
                            0,
                            c,
                            a,
                            [
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [20, 1, H.prototype.d.n, f, c]],
                                  [0, [5, [20, 1, H.prototype.d.s, f, c], [0, 1]]],
                                  [8, 0],
                                  [7, [0, 0]],
                                ],
                              ],
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [20, 1, H.prototype.d.n, f, c]],
                                  [0, [5, [20, 1, H.prototype.d.s, f, c], [0, 1]]],
                                  [8, 0],
                                  [7, [0, 8]],
                                ],
                              ],
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [20, 1, H.prototype.d.n, f, c]],
                                  [0, [5, [20, 1, H.prototype.d.s, f, c], [0, 1]]],
                                  [8, 0],
                                  [7, [0, 2]],
                                ],
                              ],
                            ],
                            [
                              [
                                10,
                                H.prototype.a.Ca,
                                c,
                                [
                                  [0, [20, 1, H.prototype.d.n, f, c]],
                                  [0, [5, [20, 1, H.prototype.d.s, f, c], [0, 1]]],
                                  [7, [0, 5]],
                                ],
                              ],
                            ],
                          ],
                          [
                            0,
                            c,
                            a,
                            [
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [20, 1, H.prototype.d.n, f, c]],
                                  [0, [4, [20, 1, H.prototype.d.s, f, c], [0, 1]]],
                                  [8, 0],
                                  [7, [0, 0]],
                                ],
                              ],
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [20, 1, H.prototype.d.n, f, c]],
                                  [0, [4, [20, 1, H.prototype.d.s, f, c], [0, 1]]],
                                  [8, 0],
                                  [7, [0, 8]],
                                ],
                              ],
                              [
                                1,
                                H.prototype.c.p,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [0, [20, 1, H.prototype.d.n, f, c]],
                                  [0, [4, [20, 1, H.prototype.d.s, f, c], [0, 1]]],
                                  [8, 0],
                                  [7, [0, 2]],
                                ],
                              ],
                            ],
                            [
                              [
                                10,
                                H.prototype.a.Ca,
                                c,
                                [
                                  [0, [20, 1, H.prototype.d.n, f, c]],
                                  [0, [4, [20, 1, H.prototype.d.s, f, c], [0, 1]]],
                                  [7, [0, 5]],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [0, c, f, [], [[0, S.prototype.a.CallFunction, c, [[1, [2, "copyChanges"]], [13]]]]],
                ],
              ],
              [
                0,
                c,
                f,
                [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "cloneTiles"]]]]],
                [
                  [
                    10,
                    H.prototype.a.ga,
                    c,
                    [
                      [0, [20, 1, H.prototype.d.J, f, c]],
                      [0, [20, 1, H.prototype.d.ge, f, c]],
                      [0, [0, 1]],
                    ],
                  ],
                ],
                [
                  [
                    0,
                    c,
                    f,
                    [[10, H.prototype.c.cd, c, 0, a, f, f, [[3, 1]]]],
                    [
                      [
                        10,
                        H.prototype.a.Ca,
                        c,
                        [
                          [0, [20, 10, H.prototype.d.n, f, c]],
                          [0, [20, 10, H.prototype.d.s, f, c]],
                          [
                            7,
                            [
                              20,
                              1,
                              H.prototype.d.Ec,
                              f,
                              c,
                              [
                                [20, 10, H.prototype.d.n, f, c],
                                [20, 10, H.prototype.d.s, f, c],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "copyChanges"]]]]],
                [],
                [
                  [
                    0,
                    c,
                    f,
                    [[10, H.prototype.c.cd, c, 0, a, f, f, [[3, 1]]]],
                    [
                      [
                        1,
                        H.prototype.a.Ca,
                        c,
                        [
                          [0, [20, 10, H.prototype.d.n, f, c]],
                          [0, [20, 10, H.prototype.d.s, f, c]],
                          [
                            7,
                            [
                              20,
                              10,
                              H.prototype.d.Ec,
                              f,
                              c,
                              [
                                [20, 10, H.prototype.d.n, f, c],
                                [20, 10, H.prototype.d.s, f, c],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "clearTiles"]]]]],
                [],
                [
                  [
                    0,
                    c,
                    f,
                    [[-1, A.prototype.c.Pb, c, 0, a, f, f, [[4, 2]]]],
                    [],
                    [
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            2,
                            T.prototype.c.o,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [10, 3],
                              [8, 0],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                        [[2, T.prototype.a.ib, c]],
                      ],
                      [
                        0,
                        c,
                        f,
                        [[-1, A.prototype.c.ca, c, 0, f, f, f]],
                        [
                          [
                            2,
                            T.prototype.a.Ba,
                            c,
                            [
                              [10, 3],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "findNewPosition"]]]]],
                [],
                [
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        0,
                        S.prototype.c.ba,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [0, [0, 0]],
                          [8, 0],
                          [7, [0, 0]],
                        ],
                      ],
                    ],
                    [],
                    [
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            0,
                            S.prototype.c.ba,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [0, [0, 1]],
                              [8, 0],
                              [7, [0, 0]],
                            ],
                          ],
                        ],
                        [
                          [
                            -1,
                            A.prototype.a.Gc,
                            c,
                            [
                              [11, "ChristinaY"],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            0,
                            S.prototype.c.ba,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [0, [0, 1]],
                              [8, 0],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                        [
                          [
                            -1,
                            A.prototype.a.Na,
                            c,
                            [
                              [11, "ChristinaX"],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            0,
                            S.prototype.c.ba,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [0, [0, 1]],
                              [8, 0],
                              [7, [0, 2]],
                            ],
                          ],
                        ],
                        [
                          [
                            -1,
                            A.prototype.a.Na,
                            c,
                            [
                              [11, "ChristinaY"],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            0,
                            S.prototype.c.ba,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [0, [0, 1]],
                              [8, 0],
                              [7, [0, 3]],
                            ],
                          ],
                        ],
                        [
                          [
                            -1,
                            A.prototype.a.Gc,
                            c,
                            [
                              [11, "ChristinaX"],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [],
                        [
                          [
                            0,
                            S.prototype.a.CallFunction,
                            c,
                            [
                              [1, [2, "createCharacter"]],
                              [13, [7, [0, 0]], [7, [23, "ChristinaX"]], [7, [23, "ChristinaY"]], [7, [0, 0]]],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        0,
                        S.prototype.c.ba,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [0, [0, 0]],
                          [8, 0],
                          [7, [0, 1]],
                        ],
                      ],
                    ],
                    [],
                    [
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            0,
                            S.prototype.c.ba,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [0, [0, 1]],
                              [8, 0],
                              [7, [0, 0]],
                            ],
                          ],
                        ],
                        [
                          [
                            -1,
                            A.prototype.a.Gc,
                            c,
                            [
                              [11, "LionelY"],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            0,
                            S.prototype.c.ba,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [0, [0, 1]],
                              [8, 0],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                        [
                          [
                            -1,
                            A.prototype.a.Na,
                            c,
                            [
                              [11, "LionelX"],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            0,
                            S.prototype.c.ba,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [0, [0, 1]],
                              [8, 0],
                              [7, [0, 2]],
                            ],
                          ],
                        ],
                        [
                          [
                            -1,
                            A.prototype.a.Na,
                            c,
                            [
                              [11, "LionelY"],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            0,
                            S.prototype.c.ba,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [0, [0, 1]],
                              [8, 0],
                              [7, [0, 3]],
                            ],
                          ],
                        ],
                        [
                          [
                            -1,
                            A.prototype.a.Gc,
                            c,
                            [
                              [11, "LionelX"],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [],
                        [
                          [
                            0,
                            S.prototype.a.CallFunction,
                            c,
                            [
                              [1, [2, "createCharacter"]],
                              [13, [7, [0, 1]], [7, [23, "LionelX"]], [7, [23, "LionelY"]]],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        0,
                        S.prototype.c.ba,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [0, [0, 0]],
                          [8, 0],
                          [7, [0, 2]],
                        ],
                      ],
                    ],
                    [],
                    [
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            0,
                            S.prototype.c.ba,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [0, [0, 1]],
                              [8, 0],
                              [7, [0, 0]],
                            ],
                          ],
                        ],
                        [
                          [
                            -1,
                            A.prototype.a.Gc,
                            c,
                            [
                              [11, "TroyY"],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            0,
                            S.prototype.c.ba,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [0, [0, 1]],
                              [8, 0],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                        [
                          [
                            -1,
                            A.prototype.a.Na,
                            c,
                            [
                              [11, "TroyX"],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            0,
                            S.prototype.c.ba,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [0, [0, 1]],
                              [8, 0],
                              [7, [0, 2]],
                            ],
                          ],
                        ],
                        [
                          [
                            -1,
                            A.prototype.a.Na,
                            c,
                            [
                              [11, "TroyY"],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            0,
                            S.prototype.c.ba,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [0, [0, 1]],
                              [8, 0],
                              [7, [0, 3]],
                            ],
                          ],
                        ],
                        [
                          [
                            -1,
                            A.prototype.a.Gc,
                            c,
                            [
                              [11, "TroyX"],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [],
                        [
                          [
                            0,
                            S.prototype.a.CallFunction,
                            c,
                            [
                              [1, [2, "createCharacter"]],
                              [13, [7, [0, 2]], [7, [23, "TroyX"]], [7, [23, "TroyY"]]],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        0,
                        S.prototype.c.ba,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [0, [0, 0]],
                          [8, 0],
                          [7, [0, 3]],
                        ],
                      ],
                    ],
                    [],
                    [
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            0,
                            S.prototype.c.ba,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [0, [0, 1]],
                              [8, 0],
                              [7, [0, 0]],
                            ],
                          ],
                        ],
                        [
                          [
                            -1,
                            A.prototype.a.Gc,
                            c,
                            [
                              [11, "SteveY"],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            0,
                            S.prototype.c.ba,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [0, [0, 1]],
                              [8, 0],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                        [
                          [
                            -1,
                            A.prototype.a.Na,
                            c,
                            [
                              [11, "SteveX"],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            0,
                            S.prototype.c.ba,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [0, [0, 1]],
                              [8, 0],
                              [7, [0, 2]],
                            ],
                          ],
                        ],
                        [
                          [
                            -1,
                            A.prototype.a.Na,
                            c,
                            [
                              [11, "SteveY"],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            0,
                            S.prototype.c.ba,
                            c,
                            0,
                            f,
                            f,
                            f,
                            [
                              [0, [0, 1]],
                              [8, 0],
                              [7, [0, 3]],
                            ],
                          ],
                        ],
                        [
                          [
                            -1,
                            A.prototype.a.Gc,
                            c,
                            [
                              [11, "SteveX"],
                              [7, [0, 1]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [],
                        [
                          [
                            0,
                            S.prototype.a.CallFunction,
                            c,
                            [
                              [1, [2, "createCharacter"]],
                              [13, [7, [0, 3]], [7, [23, "SteveX"]], [7, [23, "SteveY"]]],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [],
                    [
                      [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
                      [0, S.prototype.a.CallFunction, c, [[1, [2, "setCharacterGraphic"]], [13]]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "createArrows"]]]]],
                [],
                [
                  [0, c, f, [[-1, A.prototype.c.Pb, c, 0, a, f, f, [[4, 11]]]], [[11, T.prototype.a.ib, c]]],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "phase"],
                          [8, 0],
                          [7, [0, 0]],
                        ],
                      ],
                    ],
                    [],
                    [
                      [
                        0,
                        c,
                        f,
                        [[-1, A.prototype.c.Pb, c, 0, a, f, f, [[4, 9]]]],
                        [],
                        [
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                -1,
                                A.prototype.c.Ob,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [
                                    7,
                                    [
                                      20,
                                      0,
                                      S.prototype.d.Gj,
                                      f,
                                      c,
                                      [
                                        [2, "characterAlive?"],
                                        [21, 9, f, c, 0],
                                      ],
                                    ],
                                  ],
                                  [8, 0],
                                  [7, [0, 1]],
                                ],
                              ],
                              [
                                9,
                                T.prototype.c.o,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [10, 3],
                                  [8, 4],
                                  [7, [0, 0]],
                                ],
                              ],
                            ],
                            [],
                            [
                              [
                                0,
                                c,
                                f,
                                [
                                  [
                                    9,
                                    T.prototype.c.o,
                                    c,
                                    0,
                                    f,
                                    a,
                                    f,
                                    [
                                      [10, 2],
                                      [8, 0],
                                      [7, [0, 0]],
                                    ],
                                  ],
                                ],
                                [],
                                [
                                  [
                                    0,
                                    c,
                                    a,
                                    [
                                      [
                                        1,
                                        H.prototype.c.p,
                                        c,
                                        0,
                                        f,
                                        f,
                                        f,
                                        [
                                          [0, [21, 9, f, c, 1]],
                                          [0, [5, [21, 9, f, c, 2], [0, 1]]],
                                          [8, 0],
                                          [7, [0, 0]],
                                        ],
                                      ],
                                      [
                                        1,
                                        H.prototype.c.p,
                                        c,
                                        0,
                                        f,
                                        f,
                                        f,
                                        [
                                          [0, [21, 9, f, c, 1]],
                                          [0, [5, [21, 9, f, c, 2], [0, 1]]],
                                          [8, 0],
                                          [7, [0, 8]],
                                        ],
                                      ],
                                    ],
                                    [
                                      [
                                        -1,
                                        A.prototype.a.Y,
                                        c,
                                        [
                                          [4, 11],
                                          [5, [2, "Characters"]],
                                          [0, [4, [20, 9, T.prototype.d.$e, f, c], [7, [23, "tileDimension"], [0, 2]]]],
                                          [0, [5, [20, 9, T.prototype.d.Hc, f, c], [0, 4]]],
                                        ],
                                      ],
                                      [11, T.prototype.a.Of, c, [[0, [0, 0]]]],
                                      [
                                        11,
                                        T.prototype.a.Ba,
                                        c,
                                        [
                                          [10, 0],
                                          [7, [21, 9, f, c, 0]],
                                        ],
                                      ],
                                      [
                                        11,
                                        T.prototype.a.Ba,
                                        c,
                                        [
                                          [10, 1],
                                          [7, [0, 0]],
                                        ],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                              [
                                0,
                                c,
                                f,
                                [
                                  [
                                    9,
                                    T.prototype.c.o,
                                    c,
                                    0,
                                    f,
                                    a,
                                    f,
                                    [
                                      [10, 1],
                                      [8, 0],
                                      [7, [5, [23, "gridWidth"], [0, 1]]],
                                    ],
                                  ],
                                ],
                                [],
                                [
                                  [
                                    0,
                                    c,
                                    a,
                                    [
                                      [
                                        1,
                                        H.prototype.c.p,
                                        c,
                                        0,
                                        f,
                                        f,
                                        f,
                                        [
                                          [0, [4, [21, 9, f, c, 1], [0, 1]]],
                                          [0, [21, 9, f, c, 2]],
                                          [8, 0],
                                          [7, [0, 0]],
                                        ],
                                      ],
                                      [
                                        1,
                                        H.prototype.c.p,
                                        c,
                                        0,
                                        f,
                                        f,
                                        f,
                                        [
                                          [0, [4, [21, 9, f, c, 1], [0, 1]]],
                                          [0, [21, 9, f, c, 2]],
                                          [8, 0],
                                          [7, [0, 8]],
                                        ],
                                      ],
                                    ],
                                    [
                                      [
                                        -1,
                                        A.prototype.a.Y,
                                        c,
                                        [
                                          [4, 11],
                                          [5, [2, "Characters"]],
                                          [0, [4, [4, [20, 9, T.prototype.d.$e, f, c], [23, "tileDimension"]], [0, 4]]],
                                          [0, [4, [20, 9, T.prototype.d.Hc, f, c], [7, [23, "tileDimension"], [0, 2]]]],
                                        ],
                                      ],
                                      [11, T.prototype.a.Of, c, [[0, [0, 90]]]],
                                      [
                                        11,
                                        T.prototype.a.Ba,
                                        c,
                                        [
                                          [10, 0],
                                          [7, [21, 9, f, c, 0]],
                                        ],
                                      ],
                                      [
                                        11,
                                        T.prototype.a.Ba,
                                        c,
                                        [
                                          [10, 1],
                                          [7, [0, 1]],
                                        ],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                              [
                                0,
                                c,
                                f,
                                [
                                  [
                                    9,
                                    T.prototype.c.o,
                                    c,
                                    0,
                                    f,
                                    a,
                                    f,
                                    [
                                      [10, 2],
                                      [8, 0],
                                      [7, [5, [20, 1, H.prototype.d.ge, f, c], [0, 1]]],
                                    ],
                                  ],
                                ],
                                [],
                                [
                                  [
                                    0,
                                    c,
                                    a,
                                    [
                                      [
                                        1,
                                        H.prototype.c.p,
                                        c,
                                        0,
                                        f,
                                        f,
                                        f,
                                        [
                                          [0, [21, 9, f, c, 1]],
                                          [0, [4, [21, 9, f, c, 2], [0, 1]]],
                                          [8, 0],
                                          [7, [0, 0]],
                                        ],
                                      ],
                                      [
                                        1,
                                        H.prototype.c.p,
                                        c,
                                        0,
                                        f,
                                        f,
                                        f,
                                        [
                                          [0, [21, 9, f, c, 1]],
                                          [0, [4, [21, 9, f, c, 2], [0, 1]]],
                                          [8, 0],
                                          [7, [0, 8]],
                                        ],
                                      ],
                                    ],
                                    [
                                      [
                                        -1,
                                        A.prototype.a.Y,
                                        c,
                                        [
                                          [4, 11],
                                          [5, [2, "Characters"]],
                                          [0, [4, [20, 9, T.prototype.d.$e, f, c], [7, [23, "tileDimension"], [0, 2]]]],
                                          [0, [4, [4, [20, 9, T.prototype.d.Hc, f, c], [23, "tileDimension"]], [0, 4]]],
                                        ],
                                      ],
                                      [11, T.prototype.a.Of, c, [[0, [0, 180]]]],
                                      [
                                        11,
                                        T.prototype.a.Ba,
                                        c,
                                        [
                                          [10, 0],
                                          [7, [21, 9, f, c, 0]],
                                        ],
                                      ],
                                      [
                                        11,
                                        T.prototype.a.Ba,
                                        c,
                                        [
                                          [10, 1],
                                          [7, [0, 2]],
                                        ],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                              [
                                0,
                                c,
                                f,
                                [
                                  [
                                    9,
                                    T.prototype.c.o,
                                    c,
                                    0,
                                    f,
                                    a,
                                    f,
                                    [
                                      [10, 1],
                                      [8, 0],
                                      [7, [0, 0]],
                                    ],
                                  ],
                                ],
                                [],
                                [
                                  [
                                    0,
                                    c,
                                    a,
                                    [
                                      [
                                        1,
                                        H.prototype.c.p,
                                        c,
                                        0,
                                        f,
                                        f,
                                        f,
                                        [
                                          [0, [5, [21, 9, f, c, 1], [0, 1]]],
                                          [0, [21, 9, f, c, 2]],
                                          [8, 0],
                                          [7, [0, 0]],
                                        ],
                                      ],
                                      [
                                        1,
                                        H.prototype.c.p,
                                        c,
                                        0,
                                        f,
                                        f,
                                        f,
                                        [
                                          [0, [5, [21, 9, f, c, 1], [0, 1]]],
                                          [0, [21, 9, f, c, 2]],
                                          [8, 0],
                                          [7, [0, 8]],
                                        ],
                                      ],
                                    ],
                                    [
                                      [
                                        -1,
                                        A.prototype.a.Y,
                                        c,
                                        [
                                          [4, 11],
                                          [5, [2, "Characters"]],
                                          [0, [5, [20, 9, T.prototype.d.$e, f, c], [0, 4]]],
                                          [0, [4, [20, 9, T.prototype.d.Hc, f, c], [7, [23, "tileDimension"], [0, 2]]]],
                                        ],
                                      ],
                                      [11, T.prototype.a.Of, c, [[0, [0, 270]]]],
                                      [
                                        11,
                                        T.prototype.a.Ba,
                                        c,
                                        [
                                          [10, 0],
                                          [7, [21, 9, f, c, 0]],
                                        ],
                                      ],
                                      [
                                        11,
                                        T.prototype.a.Ba,
                                        c,
                                        [
                                          [10, 1],
                                          [7, [0, 3]],
                                        ],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "findValidSwitches"]]]]],
                [],
                [
                  [0, c, f, [[-1, A.prototype.c.Pb, c, 0, a, f, f, [[4, 13]]]], [[13, T.prototype.a.ib, c]]],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "phase"],
                          [8, 0],
                          [7, [0, 0]],
                        ],
                      ],
                    ],
                    [[-1, A.prototype.a.h, c, [[0, [1, 0.5]]]]],
                    [
                      [
                        0,
                        c,
                        f,
                        [[1, H.prototype.c.cd, c, 0, a, f, f, [[3, 1]]]],
                        [],
                        [
                          [
                            0,
                            c,
                            a,
                            [
                              [
                                1,
                                H.prototype.c.dd,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [8, 0],
                                  [7, [0, 3]],
                                ],
                              ],
                              [
                                1,
                                H.prototype.c.dd,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [8, 0],
                                  [7, [0, 4]],
                                ],
                              ],
                            ],
                            [],
                            [
                              [
                                0,
                                c,
                                f,
                                [[-1, A.prototype.c.Pb, c, 0, a, f, f, [[4, 9]]]],
                                [],
                                [
                                  [
                                    0,
                                    c,
                                    f,
                                    [
                                      [
                                        -1,
                                        A.prototype.c.Ob,
                                        c,
                                        0,
                                        f,
                                        f,
                                        f,
                                        [
                                          [
                                            7,
                                            [
                                              20,
                                              0,
                                              S.prototype.d.Gj,
                                              f,
                                              c,
                                              [
                                                [2, "characterAlive?"],
                                                [21, 9, f, c, 0],
                                              ],
                                            ],
                                          ],
                                          [8, 0],
                                          [7, [0, 1]],
                                        ],
                                      ],
                                    ],
                                    [],
                                    [
                                      [
                                        0,
                                        c,
                                        f,
                                        [
                                          [
                                            9,
                                            T.prototype.c.o,
                                            c,
                                            0,
                                            f,
                                            f,
                                            f,
                                            [
                                              [10, 1],
                                              [8, 0],
                                              [7, [5, [20, 1, H.prototype.d.n, f, c], [0, 1]]],
                                            ],
                                          ],
                                          [
                                            9,
                                            T.prototype.c.o,
                                            c,
                                            0,
                                            f,
                                            f,
                                            f,
                                            [
                                              [10, 2],
                                              [8, 0],
                                              [7, [20, 1, H.prototype.d.s, f, c]],
                                            ],
                                          ],
                                        ],
                                        [
                                          [
                                            -1,
                                            A.prototype.a.Y,
                                            c,
                                            [
                                              [4, 13],
                                              [5, [2, "Characters"]],
                                              [0, [4, [23, "xBuffer"], [6, [4, [23, "tileDimension"], [23, "separator"]], [20, 1, H.prototype.d.n, f, c]]]],
                                              [0, [4, [23, "yBuffer"], [6, [4, [23, "tileDimension"], [23, "separator"]], [20, 1, H.prototype.d.s, f, c]]]],
                                            ],
                                          ],
                                        ],
                                      ],
                                      [
                                        0,
                                        c,
                                        f,
                                        [
                                          [
                                            9,
                                            T.prototype.c.o,
                                            c,
                                            0,
                                            f,
                                            f,
                                            f,
                                            [
                                              [10, 1],
                                              [8, 0],
                                              [7, [4, [20, 1, H.prototype.d.n, f, c], [0, 1]]],
                                            ],
                                          ],
                                          [
                                            9,
                                            T.prototype.c.o,
                                            c,
                                            0,
                                            f,
                                            f,
                                            f,
                                            [
                                              [10, 2],
                                              [8, 0],
                                              [7, [20, 1, H.prototype.d.s, f, c]],
                                            ],
                                          ],
                                        ],
                                        [
                                          [
                                            -1,
                                            A.prototype.a.Y,
                                            c,
                                            [
                                              [4, 13],
                                              [5, [2, "Characters"]],
                                              [0, [4, [23, "xBuffer"], [6, [4, [23, "tileDimension"], [23, "separator"]], [20, 1, H.prototype.d.n, f, c]]]],
                                              [0, [4, [23, "yBuffer"], [6, [4, [23, "tileDimension"], [23, "separator"]], [20, 1, H.prototype.d.s, f, c]]]],
                                            ],
                                          ],
                                        ],
                                      ],
                                      [
                                        0,
                                        c,
                                        f,
                                        [
                                          [
                                            9,
                                            T.prototype.c.o,
                                            c,
                                            0,
                                            f,
                                            f,
                                            f,
                                            [
                                              [10, 1],
                                              [8, 0],
                                              [7, [20, 1, H.prototype.d.n, f, c]],
                                            ],
                                          ],
                                          [
                                            9,
                                            T.prototype.c.o,
                                            c,
                                            0,
                                            f,
                                            f,
                                            f,
                                            [
                                              [10, 2],
                                              [8, 0],
                                              [7, [5, [20, 1, H.prototype.d.s, f, c], [0, 1]]],
                                            ],
                                          ],
                                        ],
                                        [
                                          [
                                            -1,
                                            A.prototype.a.Y,
                                            c,
                                            [
                                              [4, 13],
                                              [5, [2, "Characters"]],
                                              [0, [4, [23, "xBuffer"], [6, [4, [23, "tileDimension"], [23, "separator"]], [20, 1, H.prototype.d.n, f, c]]]],
                                              [0, [4, [23, "yBuffer"], [6, [4, [23, "tileDimension"], [23, "separator"]], [20, 1, H.prototype.d.s, f, c]]]],
                                            ],
                                          ],
                                        ],
                                      ],
                                      [
                                        0,
                                        c,
                                        f,
                                        [
                                          [
                                            9,
                                            T.prototype.c.o,
                                            c,
                                            0,
                                            f,
                                            f,
                                            f,
                                            [
                                              [10, 1],
                                              [8, 0],
                                              [7, [20, 1, H.prototype.d.n, f, c]],
                                            ],
                                          ],
                                          [
                                            9,
                                            T.prototype.c.o,
                                            c,
                                            0,
                                            f,
                                            f,
                                            f,
                                            [
                                              [10, 2],
                                              [8, 0],
                                              [7, [4, [20, 1, H.prototype.d.s, f, c], [0, 1]]],
                                            ],
                                          ],
                                        ],
                                        [
                                          [
                                            -1,
                                            A.prototype.a.Y,
                                            c,
                                            [
                                              [4, 13],
                                              [5, [2, "Characters"]],
                                              [0, [4, [23, "xBuffer"], [6, [4, [23, "tileDimension"], [23, "separator"]], [20, 1, H.prototype.d.n, f, c]]]],
                                              [0, [4, [23, "yBuffer"], [6, [4, [23, "tileDimension"], [23, "separator"]], [20, 1, H.prototype.d.s, f, c]]]],
                                            ],
                                          ],
                                        ],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                            ],
                          ],
                          [1, "checker", 0, 0, f, f],
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                1,
                                H.prototype.c.dd,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [8, 0],
                                  [7, [0, 8]],
                                ],
                              ],
                            ],
                            [],
                            [
                              [
                                0,
                                c,
                                f,
                                [[-1, A.prototype.c.Pb, c, 0, a, f, f, [[4, 9]]]],
                                [],
                                [
                                  [
                                    0,
                                    c,
                                    f,
                                    [
                                      [
                                        9,
                                        T.prototype.c.o,
                                        c,
                                        0,
                                        f,
                                        f,
                                        f,
                                        [
                                          [10, 1],
                                          [8, 0],
                                          [7, [20, 1, H.prototype.d.n, f, c]],
                                        ],
                                      ],
                                      [
                                        9,
                                        T.prototype.c.o,
                                        c,
                                        0,
                                        f,
                                        f,
                                        f,
                                        [
                                          [10, 2],
                                          [8, 0],
                                          [7, [20, 1, H.prototype.d.s, f, c]],
                                        ],
                                      ],
                                    ],
                                    [
                                      [
                                        -1,
                                        A.prototype.a.e,
                                        c,
                                        [
                                          [11, "checker"],
                                          [7, [0, 1]],
                                        ],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                              [
                                0,
                                c,
                                f,
                                [
                                  [
                                    -1,
                                    A.prototype.c.g,
                                    c,
                                    0,
                                    f,
                                    f,
                                    f,
                                    [
                                      [11, "locksAllowed"],
                                      [8, 4],
                                      [7, [0, 0]],
                                    ],
                                  ],
                                  [
                                    -1,
                                    A.prototype.c.g,
                                    c,
                                    0,
                                    f,
                                    f,
                                    f,
                                    [
                                      [11, "checker"],
                                      [8, 0],
                                      [7, [0, 0]],
                                    ],
                                  ],
                                ],
                                [
                                  [
                                    -1,
                                    A.prototype.a.Y,
                                    c,
                                    [
                                      [4, 13],
                                      [5, [2, "Characters"]],
                                      [0, [4, [23, "xBuffer"], [6, [4, [23, "tileDimension"], [23, "separator"]], [20, 1, H.prototype.d.n, f, c]]]],
                                      [0, [4, [23, "yBuffer"], [6, [4, [23, "tileDimension"], [23, "separator"]], [20, 1, H.prototype.d.s, f, c]]]],
                                    ],
                                  ],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "restart"]]]]],
            [
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "totalDeaths"],
                  [7, [0, 0]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "waterOn"],
                  [7, [0, 0]],
                ],
              ],
              [0, S.prototype.a.CallFunction, c, [[1, [10, [2, "set"], [23, "currentBranch"]]], [13]]],
              [0, S.prototype.a.CallFunction, c, [[1, [10, [2, "setRoom"], [19, A.prototype.d.Dl, [[23, "floorNumber"]]]]], [13]]],
              [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "createArray"]],
                  [13, [7, [23, "activeTiles"]]],
                ],
              ],
              [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "createCharacter"]],
                  [13, [7, [0, 0]], [7, [23, "ChristinaX"]], [7, [23, "ChristinaY"]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "createCharacter"]],
                  [13, [7, [0, 1]], [7, [23, "LionelX"]], [7, [23, "LionelY"]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "createCharacter"]],
                  [13, [7, [0, 2]], [7, [23, "TroyX"]], [7, [23, "TroyY"]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "createCharacter"]],
                  [13, [7, [0, 3]], [7, [23, "SteveX"]], [7, [23, "SteveY"]], [7, [0, 1]]],
                ],
              ],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "createTiles"]], [13]]],
              [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "setTileGraphic"]], [13]]],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "setCharacterGraphic"]], [13]]],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "findValidSwitches"]], [13]]],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "createArrows"]], [13]]],
            ],
          ],
          [
            0,
            c,
            f,
            [
              [
                -1,
                A.prototype.c.Sl,
                c,
                0,
                f,
                f,
                f,
                [
                  [5, [2, "TooManyDeaths"]],
                  [8, 0],
                  [0, [0, 100]],
                ],
              ],
              [-1, A.prototype.c.jm, c, 0, f, f, f],
            ],
            [
              [-1, A.prototype.a.h, c, [[0, [0, 3]]]],
              [
                -1,
                A.prototype.a.ub,
                c,
                [
                  [5, [2, "TooManyDeaths"]],
                  [0, [0, 0]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [
              [12, W.prototype.c.zb, c, 1, f, f, f, [[4, 32]]],
              [32, T.prototype.c.sh, c, 0, f, a, f, [[10, 0]]],
            ],
            [
              [
                32,
                T.prototype.a.ic,
                c,
                [
                  [10, 0],
                  [3, 1],
                ],
              ],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "setRestartGraphic"]], [13]]],
              [-1, A.prototype.a.h, c, [[0, [1, 0.1]]]],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "restart"]], [13]]],
              [
                32,
                T.prototype.a.ic,
                c,
                [
                  [10, 0],
                  [3, 0],
                ],
              ],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "setRestartGraphic"]], [13]]],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setRestartGraphic"]]]]],
            [],
            [
              [
                0,
                c,
                f,
                [[32, T.prototype.c.sh, c, 0, f, f, f, [[10, 0]]]],
                [
                  [
                    32,
                    T.prototype.a.H,
                    c,
                    [
                      [1, [2, "Selected"]],
                      [3, 1],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [[-1, A.prototype.c.ca, c, 0, f, f, f]],
                [
                  [
                    32,
                    T.prototype.a.H,
                    c,
                    [
                      [1, [2, "default"]],
                      [3, 1],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setTutorial"]]]]],
            [],
            [
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "A"]],
                    ],
                  ],
                ],
                [],
                [
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.Oa,
                        c,
                        0,
                        a,
                        f,
                        f,
                        [
                          [1, [2, ""]],
                          [0, [0, 1]],
                          [0, [0, 100]],
                        ],
                      ],
                    ],
                    [
                      [-1, A.prototype.a.h, c, [[0, [7, [19, A.prototype.d.Qa], [0, 50]]]]],
                      [
                        -1,
                        A.prototype.a.ub,
                        c,
                        [
                          [5, [2, "Tutorial"]],
                          [0, [4, [19, A.prototype.d.md, [[2, "Tutorial"]]], [0, 1]]],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [[-1, A.prototype.c.ca, c, 0, f, f, f]],
                [
                  [
                    -1,
                    A.prototype.a.ub,
                    c,
                    [
                      [5, [2, "Tutorial"]],
                      [0, [0, 0]],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "characterAlive?"]]]]],
            [],
            [
              [
                0,
                c,
                f,
                [
                  [
                    0,
                    S.prototype.c.ba,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [0, [0, 0]],
                      [8, 0],
                      [7, [0, 0]],
                    ],
                  ],
                ],
                [],
                [
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "ChristinaAlive"],
                          [8, 0],
                          [7, [0, 1]],
                        ],
                      ],
                    ],
                    [[0, S.prototype.a.fd, c, [[7, [0, 1]]]]],
                  ],
                  [0, c, f, [[-1, A.prototype.c.ca, c, 0, f, f, f]], [[0, S.prototype.a.fd, c, [[7, [0, 0]]]]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    0,
                    S.prototype.c.ba,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [0, [0, 0]],
                      [8, 0],
                      [7, [0, 1]],
                    ],
                  ],
                ],
                [],
                [
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "LionelAlive"],
                          [8, 0],
                          [7, [0, 1]],
                        ],
                      ],
                    ],
                    [[0, S.prototype.a.fd, c, [[7, [0, 1]]]]],
                  ],
                  [0, c, f, [[-1, A.prototype.c.ca, c, 0, f, f, f]], [[0, S.prototype.a.fd, c, [[7, [0, 0]]]]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    0,
                    S.prototype.c.ba,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [0, [0, 0]],
                      [8, 0],
                      [7, [0, 2]],
                    ],
                  ],
                ],
                [],
                [
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "TroyAlive"],
                          [8, 0],
                          [7, [0, 1]],
                        ],
                      ],
                    ],
                    [[0, S.prototype.a.fd, c, [[7, [0, 1]]]]],
                  ],
                  [0, c, f, [[-1, A.prototype.c.ca, c, 0, f, f, f]], [[0, S.prototype.a.fd, c, [[7, [0, 0]]]]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    0,
                    S.prototype.c.ba,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [0, [0, 0]],
                      [8, 0],
                      [7, [0, 3]],
                    ],
                  ],
                ],
                [],
                [
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "SteveAlive"],
                          [8, 0],
                          [7, [0, 1]],
                        ],
                      ],
                    ],
                    [[0, S.prototype.a.fd, c, [[7, [0, 1]]]]],
                  ],
                  [0, c, f, [[-1, A.prototype.c.ca, c, 0, f, f, f]], [[0, S.prototype.a.fd, c, [[7, [0, 0]]]]]],
                ],
              ],
            ],
          ],
        ],
      ],
      [
        "DialogueEvents",
        [
          [2, "DialogueStore"],
          [1, "characterIndex", 0, 0, f, f],
          [1, "messageContents", 1, "", f, f],
          [1, "fixGlitch", 0, 0, f, f],
          [1, "moveTime", 0, 1e3, f, f],
          [1, "messageX", 0, 20, f, f],
          [1, "messageY", 0, 320, f, f],
          [1, "spacing", 0, 10, f, f],
          [1, "messageWidth", 0, 600, f, f],
          [1, "messageHeight", 0, 86, f, f],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "createMessage"]]]]],
            [],
            [
              [1, "character", 0, 0, f, f],
              [1, "message", 1, "", f, f],
              [
                0,
                c,
                f,
                [],
                [],
                [
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.Oa,
                        c,
                        0,
                        a,
                        f,
                        f,
                        [
                          [1, [2, ""]],
                          [0, [0, 1]],
                          [0, [4, [23, "messageHeight"], [23, "spacing"]]],
                        ],
                      ],
                    ],
                    [
                      [-1, A.prototype.a.h, c, [[0, [7, [19, A.prototype.d.Qa], [23, "moveTime"]]]]],
                      [20, T.prototype.a.Rf, c, [[0, [5, [20, 20, T.prototype.d.Hc, f, c], [0, 1]]]]],
                      [16, U.prototype.a.Rf, c, [[0, [5, [20, 16, U.prototype.d.Hc, f, c], [0, 1]]]]],
                      [18, U.prototype.a.Rf, c, [[0, [5, [20, 18, U.prototype.d.Hc, f, c], [0, 1]]]]],
                      [19, T.prototype.a.Rf, c, [[0, [5, [20, 19, T.prototype.d.Hc, f, c], [0, 1]]]]],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [],
                    [
                      [-1, A.prototype.a.h, c, [[0, [7, [4, [23, "messageHeight"], [23, "spacing"]], [23, "moveTime"]]]]],
                      [
                        -1,
                        A.prototype.a.Y,
                        c,
                        [
                          [4, 20],
                          [5, [2, "Dialogue"]],
                          [0, [23, "messageX"]],
                          [0, [23, "messageY"]],
                        ],
                      ],
                      [
                        -1,
                        A.prototype.a.Y,
                        c,
                        [
                          [4, 16],
                          [5, [2, "Dialogue"]],
                          [0, [4, [4, [23, "messageX"], [0, 8]], [23, "tileDimension"]]],
                          [0, [4, [23, "messageY"], [0, 24]]],
                        ],
                      ],
                      [
                        16,
                        U.prototype.a.Ba,
                        c,
                        [
                          [10, 0],
                          [7, [23, "characterIndex"]],
                        ],
                      ],
                      [16, U.prototype.a.ke, c, [[7, [23, "messageContents"]]]],
                      [
                        20,
                        T.prototype.a.ga,
                        c,
                        [
                          [0, [23, "messageWidth"]],
                          [0, [23, "messageHeight"]],
                        ],
                      ],
                    ],
                    [
                      [
                        0,
                        c,
                        f,
                        [],
                        [],
                        [
                          [
                            0,
                            c,
                            f,
                            [
                              [
                                -1,
                                A.prototype.c.g,
                                c,
                                0,
                                f,
                                f,
                                f,
                                [
                                  [11, "characterIndex"],
                                  [8, 0],
                                  [7, [0, 0]],
                                ],
                              ],
                            ],
                            [
                              [
                                16,
                                U.prototype.a.Pf,
                                c,
                                [
                                  [1, [2, "Noto Sans"]],
                                  [3, 1],
                                ],
                              ],
                              [
                                16,
                                U.prototype.a.gm,
                                c,
                                [
                                  [0, [4, [23, "messageX"], [0, 16]]],
                                  [0, [4, [23, "messageY"], [0, 8]]],
                                ],
                              ],
                              [16, U.prototype.a.Oj, c, [[0, [4, [20, 16, U.prototype.d.J, f, c], [0, 36]]]]],
                              [
                                28,
                                R.prototype.a.k,
                                c,
                                [
                                  [3, 0],
                                  [1, [2, "system"]],
                                  [3, 0],
                                  [0, [0, -15]],
                                  [1, [2, ""]],
                                ],
                              ],
                            ],
                          ],
                          [
                            0,
                            c,
                            f,
                            [[-1, A.prototype.c.ca, c, 0, f, f, f]],
                            [],
                            [
                              [
                                0,
                                c,
                                f,
                                [],
                                [],
                                [
                                  [
                                    0,
                                    c,
                                    f,
                                    [
                                      [
                                        -1,
                                        A.prototype.c.g,
                                        c,
                                        0,
                                        f,
                                        f,
                                        f,
                                        [
                                          [11, "characterIndex"],
                                          [8, 0],
                                          [7, [0, 1]],
                                        ],
                                      ],
                                    ],
                                    [
                                      [
                                        -1,
                                        A.prototype.a.Y,
                                        c,
                                        [
                                          [4, 19],
                                          [5, [2, "Dialogue"]],
                                          [0, [23, "messageX"]],
                                          [0, [4, [23, "messageY"], [0, 38]]],
                                        ],
                                      ],
                                      [
                                        19,
                                        T.prototype.a.H,
                                        c,
                                        [
                                          [1, [2, "Christina"]],
                                          [3, 1],
                                        ],
                                      ],
                                      [
                                        20,
                                        T.prototype.a.H,
                                        c,
                                        [
                                          [1, [2, "Christina"]],
                                          [3, 1],
                                        ],
                                      ],
                                      [
                                        -1,
                                        A.prototype.a.Y,
                                        c,
                                        [
                                          [4, 18],
                                          [5, [2, "Dialogue"]],
                                          [0, [4, [23, "messageX"], [0, 8]]],
                                          [0, [4, [23, "messageY"], [0, 4]]],
                                        ],
                                      ],
                                      [
                                        18,
                                        U.prototype.a.Ye,
                                        c,
                                        [
                                          [
                                            0,
                                            [
                                              19,
                                              A.prototype.d.Cf,
                                              [
                                                [0, 161],
                                                [0, 93],
                                                [0, 45],
                                              ],
                                            ],
                                          ],
                                        ],
                                      ],
                                      [18, U.prototype.a.ke, c, [[7, [2, "Christina says:"]]]],
                                      [
                                        28,
                                        R.prototype.a.k,
                                        c,
                                        [
                                          [3, 0],
                                          [1, [2, "Christina"]],
                                          [3, 0],
                                          [0, [0, -15]],
                                          [1, [2, ""]],
                                        ],
                                      ],
                                    ],
                                  ],
                                  [
                                    0,
                                    c,
                                    f,
                                    [
                                      [
                                        -1,
                                        A.prototype.c.g,
                                        c,
                                        0,
                                        f,
                                        f,
                                        f,
                                        [
                                          [11, "characterIndex"],
                                          [8, 0],
                                          [7, [0, 2]],
                                        ],
                                      ],
                                    ],
                                    [
                                      [
                                        -1,
                                        A.prototype.a.Y,
                                        c,
                                        [
                                          [4, 19],
                                          [5, [2, "Dialogue"]],
                                          [0, [23, "messageX"]],
                                          [0, [4, [23, "messageY"], [0, 38]]],
                                        ],
                                      ],
                                      [
                                        19,
                                        T.prototype.a.H,
                                        c,
                                        [
                                          [1, [2, "Lionel"]],
                                          [3, 1],
                                        ],
                                      ],
                                      [
                                        20,
                                        T.prototype.a.H,
                                        c,
                                        [
                                          [1, [2, "Lionel"]],
                                          [3, 1],
                                        ],
                                      ],
                                      [
                                        -1,
                                        A.prototype.a.Y,
                                        c,
                                        [
                                          [4, 18],
                                          [5, [2, "Dialogue"]],
                                          [0, [4, [23, "messageX"], [0, 8]]],
                                          [0, [4, [23, "messageY"], [0, 4]]],
                                        ],
                                      ],
                                      [
                                        18,
                                        U.prototype.a.Ye,
                                        c,
                                        [
                                          [
                                            0,
                                            [
                                              19,
                                              A.prototype.d.Cf,
                                              [
                                                [0, 83],
                                                [0, 80],
                                                [0, 104],
                                              ],
                                            ],
                                          ],
                                        ],
                                      ],
                                      [18, U.prototype.a.ke, c, [[7, [2, "Lionel says:"]]]],
                                      [
                                        28,
                                        R.prototype.a.k,
                                        c,
                                        [
                                          [3, 0],
                                          [1, [2, "Lionel"]],
                                          [3, 0],
                                          [0, [0, -15]],
                                          [1, [2, ""]],
                                        ],
                                      ],
                                    ],
                                  ],
                                  [
                                    0,
                                    c,
                                    f,
                                    [
                                      [
                                        -1,
                                        A.prototype.c.g,
                                        c,
                                        0,
                                        f,
                                        f,
                                        f,
                                        [
                                          [11, "characterIndex"],
                                          [8, 0],
                                          [7, [0, 3]],
                                        ],
                                      ],
                                    ],
                                    [
                                      [
                                        -1,
                                        A.prototype.a.Y,
                                        c,
                                        [
                                          [4, 19],
                                          [5, [2, "Dialogue"]],
                                          [0, [23, "messageX"]],
                                          [0, [4, [23, "messageY"], [0, 38]]],
                                        ],
                                      ],
                                      [
                                        19,
                                        T.prototype.a.H,
                                        c,
                                        [
                                          [1, [2, "Troy"]],
                                          [3, 1],
                                        ],
                                      ],
                                      [
                                        20,
                                        T.prototype.a.H,
                                        c,
                                        [
                                          [1, [2, "Troy"]],
                                          [3, 1],
                                        ],
                                      ],
                                      [
                                        -1,
                                        A.prototype.a.Y,
                                        c,
                                        [
                                          [4, 18],
                                          [5, [2, "Dialogue"]],
                                          [0, [4, [23, "messageX"], [0, 8]]],
                                          [0, [4, [23, "messageY"], [0, 4]]],
                                        ],
                                      ],
                                      [
                                        18,
                                        U.prototype.a.Ye,
                                        c,
                                        [
                                          [
                                            0,
                                            [
                                              19,
                                              A.prototype.d.Cf,
                                              [
                                                [0, 110],
                                                [0, 101],
                                                [0, 73],
                                              ],
                                            ],
                                          ],
                                        ],
                                      ],
                                      [18, U.prototype.a.ke, c, [[7, [2, "Troy says:"]]]],
                                      [
                                        28,
                                        R.prototype.a.k,
                                        c,
                                        [
                                          [3, 0],
                                          [1, [2, "Troy"]],
                                          [3, 0],
                                          [0, [0, -15]],
                                          [1, [2, ""]],
                                        ],
                                      ],
                                    ],
                                  ],
                                  [
                                    0,
                                    c,
                                    f,
                                    [
                                      [
                                        -1,
                                        A.prototype.c.g,
                                        c,
                                        0,
                                        f,
                                        f,
                                        f,
                                        [
                                          [11, "characterIndex"],
                                          [8, 0],
                                          [7, [0, 4]],
                                        ],
                                      ],
                                    ],
                                    [
                                      [
                                        -1,
                                        A.prototype.a.Y,
                                        c,
                                        [
                                          [4, 19],
                                          [5, [2, "Dialogue"]],
                                          [0, [23, "messageX"]],
                                          [0, [4, [23, "messageY"], [0, 38]]],
                                        ],
                                      ],
                                      [
                                        19,
                                        T.prototype.a.H,
                                        c,
                                        [
                                          [1, [2, "Steve"]],
                                          [3, 1],
                                        ],
                                      ],
                                      [
                                        20,
                                        T.prototype.a.H,
                                        c,
                                        [
                                          [1, [2, "Steve"]],
                                          [3, 1],
                                        ],
                                      ],
                                      [
                                        -1,
                                        A.prototype.a.Y,
                                        c,
                                        [
                                          [4, 18],
                                          [5, [2, "Dialogue"]],
                                          [0, [4, [23, "messageX"], [0, 8]]],
                                          [0, [4, [23, "messageY"], [0, 4]]],
                                        ],
                                      ],
                                      [
                                        18,
                                        U.prototype.a.Ye,
                                        c,
                                        [
                                          [
                                            0,
                                            [
                                              19,
                                              A.prototype.d.Cf,
                                              [
                                                [0, 64],
                                                [0, 122],
                                                [0, 86],
                                              ],
                                            ],
                                          ],
                                        ],
                                      ],
                                      [18, U.prototype.a.ke, c, [[7, [2, "Steve says:"]]]],
                                      [
                                        28,
                                        R.prototype.a.k,
                                        c,
                                        [
                                          [3, 0],
                                          [1, [2, "Steve"]],
                                          [3, 0],
                                          [0, [0, -15]],
                                          [1, [2, ""]],
                                        ],
                                      ],
                                    ],
                                  ],
                                  [
                                    0,
                                    c,
                                    f,
                                    [
                                      [
                                        -1,
                                        A.prototype.c.g,
                                        c,
                                        0,
                                        f,
                                        f,
                                        f,
                                        [
                                          [11, "characterIndex"],
                                          [8, 0],
                                          [7, [0, 5]],
                                        ],
                                      ],
                                    ],
                                    [
                                      [
                                        -1,
                                        A.prototype.a.Y,
                                        c,
                                        [
                                          [4, 19],
                                          [5, [2, "Dialogue"]],
                                          [0, [23, "messageX"]],
                                          [0, [4, [23, "messageY"], [0, 38]]],
                                        ],
                                      ],
                                      [
                                        19,
                                        T.prototype.a.H,
                                        c,
                                        [
                                          [1, [2, "Visitor"]],
                                          [3, 1],
                                        ],
                                      ],
                                      [
                                        20,
                                        T.prototype.a.H,
                                        c,
                                        [
                                          [1, [2, "Visitor"]],
                                          [3, 1],
                                        ],
                                      ],
                                      [
                                        -1,
                                        A.prototype.a.Y,
                                        c,
                                        [
                                          [4, 18],
                                          [5, [2, "Dialogue"]],
                                          [0, [4, [23, "messageX"], [0, 8]]],
                                          [0, [4, [23, "messageY"], [0, 4]]],
                                        ],
                                      ],
                                      [
                                        18,
                                        U.prototype.a.Ye,
                                        c,
                                        [
                                          [
                                            0,
                                            [
                                              19,
                                              A.prototype.d.Cf,
                                              [
                                                [0, 82],
                                                [0, 89],
                                                [0, 101],
                                              ],
                                            ],
                                          ],
                                        ],
                                      ],
                                      [18, U.prototype.a.ke, c, [[7, [2, "Visitor says:"]]]],
                                      [
                                        28,
                                        R.prototype.a.k,
                                        c,
                                        [
                                          [3, 0],
                                          [1, [2, "Visitor"]],
                                          [3, 0],
                                          [0, [0, -15]],
                                          [1, [2, ""]],
                                        ],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            -1,
                            A.prototype.c.Oa,
                            c,
                            0,
                            a,
                            f,
                            f,
                            [
                              [1, [2, ""]],
                              [0, [0, 1]],
                              [0, [0, 10]],
                            ],
                          ],
                          [-1, A.prototype.c.dm, c, 0, f, f, f, [[4, 19]]],
                        ],
                        [
                          [-1, A.prototype.a.h, c, [[0, [7, [19, A.prototype.d.Qa], [0, 100]]]]],
                          [20, T.prototype.a.ed, c, [[0, [4, [20, 20, T.prototype.d.Opacity, f, c], [0, 10]]]]],
                          [16, U.prototype.a.ed, c, [[0, [4, [20, 16, U.prototype.d.Opacity, f, c], [0, 10]]]]],
                          [18, U.prototype.a.ed, c, [[0, [4, [20, 18, U.prototype.d.Opacity, f, c], [0, 10]]]]],
                          [19, T.prototype.a.ed, c, [[0, [4, [20, 19, T.prototype.d.Opacity, f, c], [0, 10]]]]],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[-1, A.prototype.c.je, c, 1, f, f, f]],
            [
              [
                22,
                H.prototype.a.ga,
                c,
                [
                  [0, [0, 0]],
                  [0, [0, 3]],
                  [0, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.ub,
                c,
                [
                  [5, [2, "Black"]],
                  [0, [0, 0]],
                ],
              ],
              [
                21,
                T.prototype.a.ic,
                c,
                [
                  [10, 0],
                  [3, 1],
                ],
              ],
              [
                21,
                T.prototype.a.H,
                c,
                [
                  [1, [2, "Disabled"]],
                  [3, 1],
                ],
              ],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "setUpSkip"]], [13]]],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "startMusic"]], [13]]],
              [
                -1,
                A.prototype.a.Y,
                c,
                [
                  [4, 16],
                  [5, [0, 0]],
                  [0, [0, 0]],
                  [0, [0, 0]],
                ],
              ],
              [
                -1,
                A.prototype.a.Y,
                c,
                [
                  [4, 18],
                  [5, [0, 0]],
                  [0, [0, 0]],
                  [0, [0, 0]],
                ],
              ],
              [18, U.prototype.a.Nj, c, [[3, 0]]],
              [16, U.prototype.a.Nj, c, [[3, 0]]],
              [
                44,
                U.prototype.a.Ze,
                c,
                [
                  [1, [2, "Noto Sans"]],
                  [1, [2, "http://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic"]],
                ],
              ],
              [
                16,
                U.prototype.a.Ze,
                c,
                [
                  [1, [2, "Noto Sans"]],
                  [1, [2, "http://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic"]],
                ],
              ],
              [
                -1,
                A.prototype.a.Y,
                c,
                [
                  [4, 16],
                  [5, [0, 0]],
                  [0, [0, 0]],
                  [0, [0, 0]],
                ],
              ],
              [
                16,
                U.prototype.a.Ze,
                c,
                [
                  [1, [2, "Noto Sans"]],
                  [1, [2, "http://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic"]],
                ],
              ],
              [
                16,
                U.prototype.a.Pf,
                c,
                [
                  [1, [2, "Noto Sans"]],
                  [3, 2],
                ],
              ],
              [0, S.prototype.a.CallFunction, c, [[1, [10, [2, "section"], [23, "currentBranch"]]], [13]]],
              [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "reverse"]], [13]]],
              [-1, A.prototype.a.h, c, [[0, [0, 2]]]],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "doNext"]], [13]]],
            ],
          ],
          [
            0,
            c,
            f,
            [[44, U.prototype.c.ie, c, 1, f, f, f]],
            [
              [
                16,
                U.prototype.a.Ze,
                c,
                [
                  [1, [2, "Noto Sans"]],
                  [1, [2, "http://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic"]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[18, U.prototype.c.ie, c, 1, f, f, f]],
            [
              [
                16,
                U.prototype.a.Ze,
                c,
                [
                  [1, [2, "Noto Sans"]],
                  [1, [2, "http://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic"]],
                ],
              ],
              [
                18,
                U.prototype.a.Pf,
                c,
                [
                  [1, [2, "Noto Sans"]],
                  [3, 1],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[16, U.prototype.c.ie, c, 1, f, f, f]],
            [
              [
                16,
                U.prototype.a.Pf,
                c,
                [
                  [1, [2, "Noto Sans"]],
                  [3, 0],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "addOrder"]]]]],
            [
              [
                22,
                H.prototype.a.ga,
                c,
                [
                  [0, [4, [20, 22, H.prototype.d.J, f, c], [0, 1]]],
                  [0, [20, 22, H.prototype.d.ge, f, c]],
                  [0, [0, 1]],
                ],
              ],
              [
                22,
                H.prototype.a.Ca,
                c,
                [
                  [0, [5, [20, 22, H.prototype.d.J, f, c], [0, 1]]],
                  [0, [0, 0]],
                  [7, [20, 0, S.prototype.d.Qb, f, c, [[0, 0]]]],
                ],
              ],
              [
                22,
                H.prototype.a.Ca,
                c,
                [
                  [0, [5, [20, 22, H.prototype.d.J, f, c], [0, 1]]],
                  [0, [0, 1]],
                  [7, [20, 0, S.prototype.d.Qb, f, c, [[0, 1]]]],
                ],
              ],
              [
                22,
                H.prototype.a.Ca,
                c,
                [
                  [0, [5, [20, 22, H.prototype.d.J, f, c], [0, 1]]],
                  [0, [0, 2]],
                  [7, [20, 0, S.prototype.d.Qb, f, c, [[0, 2]]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "reverse"]]]]],
            [
              [
                34,
                H.prototype.a.ga,
                c,
                [
                  [0, [20, 22, H.prototype.d.J, f, c]],
                  [0, [20, 22, H.prototype.d.ge, f, c]],
                  [0, [0, 1]],
                ],
              ],
            ],
            [
              [
                0,
                c,
                f,
                [[34, H.prototype.c.cd, c, 0, a, f, f, [[3, 2]]]],
                [
                  [
                    34,
                    H.prototype.a.Ca,
                    c,
                    [
                      [0, [5, [5, [20, 34, H.prototype.d.J, f, c], [20, 34, H.prototype.d.n, f, c]], [0, 1]]],
                      [0, [0, 0]],
                      [
                        7,
                        [
                          20,
                          22,
                          H.prototype.d.Ec,
                          f,
                          c,
                          [
                            [20, 34, H.prototype.d.n, f, c],
                            [0, 0],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [
                    34,
                    H.prototype.a.Ca,
                    c,
                    [
                      [0, [5, [5, [20, 34, H.prototype.d.J, f, c], [20, 34, H.prototype.d.n, f, c]], [0, 1]]],
                      [0, [0, 1]],
                      [
                        7,
                        [
                          20,
                          22,
                          H.prototype.d.Ec,
                          f,
                          c,
                          [
                            [20, 34, H.prototype.d.n, f, c],
                            [0, 1],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [
                    34,
                    H.prototype.a.Ca,
                    c,
                    [
                      [0, [5, [5, [20, 34, H.prototype.d.J, f, c], [20, 34, H.prototype.d.n, f, c]], [0, 1]]],
                      [0, [0, 2]],
                      [
                        7,
                        [
                          20,
                          22,
                          H.prototype.d.Ec,
                          f,
                          c,
                          [
                            [20, 22, H.prototype.d.n, f, c],
                            [0, 2],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "doNext"]]]]],
            [
              [
                34,
                H.prototype.a.ga,
                c,
                [
                  [0, [5, [20, 34, H.prototype.d.J, f, c], [0, 1]]],
                  [0, [20, 34, H.prototype.d.ge, f, c]],
                  [0, [0, 1]],
                ],
              ],
            ],
            [
              [
                0,
                c,
                f,
                [
                  [
                    34,
                    H.prototype.c.p,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [0, [5, [20, 34, H.prototype.d.J, f, c], [0, 1]]],
                      [0, [0, 0]],
                      [8, 2],
                      [7, [0, 6]],
                    ],
                  ],
                ],
                [
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "characterIndex"],
                      [
                        7,
                        [
                          20,
                          34,
                          H.prototype.d.Ec,
                          f,
                          c,
                          [
                            [5, [20, 34, H.prototype.d.J, f, c], [0, 1]],
                            [0, 0],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "messageContents"],
                      [
                        7,
                        [
                          20,
                          34,
                          H.prototype.d.Ec,
                          f,
                          c,
                          [
                            [5, [20, 34, H.prototype.d.J, f, c], [0, 1]],
                            [0, 1],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "createMessage"]], [13]]],
                  [-1, A.prototype.a.h, c, [[0, [1, 0.17]]]],
                  [
                    21,
                    T.prototype.a.H,
                    c,
                    [
                      [1, [2, "Selected"]],
                      [3, 1],
                    ],
                  ],
                  [
                    21,
                    T.prototype.a.ic,
                    c,
                    [
                      [10, 0],
                      [3, 0],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    34,
                    H.prototype.c.p,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [0, [5, [20, 34, H.prototype.d.J, f, c], [0, 1]]],
                      [0, [0, 0]],
                      [8, 0],
                      [7, [0, 6]],
                    ],
                  ],
                ],
                [],
                [
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        34,
                        H.prototype.c.p,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [0, [5, [20, 34, H.prototype.d.J, f, c], [0, 1]]],
                          [0, [0, 1]],
                          [8, 0],
                          [7, [0, 0]],
                        ],
                      ],
                    ],
                    [
                      [
                        28,
                        R.prototype.a.k,
                        c,
                        [
                          [3, 1],
                          [1, [2, "Mystery"]],
                          [3, 1],
                          [0, [0, -10]],
                          [1, [2, "music"]],
                        ],
                      ],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        34,
                        H.prototype.c.p,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [0, [5, [20, 34, H.prototype.d.J, f, c], [0, 1]]],
                          [0, [0, 1]],
                          [8, 0],
                          [7, [0, 1]],
                        ],
                      ],
                    ],
                    [
                      [
                        28,
                        R.prototype.a.k,
                        c,
                        [
                          [3, 1],
                          [1, [2, "Bizarre"]],
                          [3, 1],
                          [0, [0, -10]],
                          [1, [2, "music"]],
                        ],
                      ],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        34,
                        H.prototype.c.p,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [0, [5, [20, 34, H.prototype.d.J, f, c], [0, 1]]],
                          [0, [0, 1]],
                          [8, 0],
                          [7, [0, 2]],
                        ],
                      ],
                    ],
                    [
                      [
                        28,
                        R.prototype.a.k,
                        c,
                        [
                          [3, 1],
                          [1, [2, "Fire"]],
                          [3, 1],
                          [0, [0, -10]],
                          [1, [2, "music"]],
                        ],
                      ],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        34,
                        H.prototype.c.p,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [0, [5, [20, 34, H.prototype.d.J, f, c], [0, 1]]],
                          [0, [0, 1]],
                          [8, 0],
                          [7, [0, 3]],
                        ],
                      ],
                    ],
                    [
                      [
                        28,
                        R.prototype.a.k,
                        c,
                        [
                          [3, 1],
                          [1, [2, "Tragedy"]],
                          [3, 1],
                          [0, [0, -10]],
                          [1, [2, "music"]],
                        ],
                      ],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        34,
                        H.prototype.c.p,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [0, [5, [20, 34, H.prototype.d.J, f, c], [0, 1]]],
                          [0, [0, 1]],
                          [8, 0],
                          [7, [0, 4]],
                        ],
                      ],
                    ],
                    [
                      [
                        28,
                        R.prototype.a.k,
                        c,
                        [
                          [3, 1],
                          [1, [2, "Light"]],
                          [3, 1],
                          [0, [0, -10]],
                          [1, [2, "music"]],
                        ],
                      ],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        34,
                        H.prototype.c.p,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [0, [5, [20, 34, H.prototype.d.J, f, c], [0, 1]]],
                          [0, [0, 1]],
                          [8, 0],
                          [7, [0, 5]],
                        ],
                      ],
                    ],
                    [
                      [
                        28,
                        R.prototype.a.k,
                        c,
                        [
                          [3, 1],
                          [1, [2, "Regretful"]],
                          [3, 1],
                          [0, [0, -10]],
                          [1, [2, "music"]],
                        ],
                      ],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [],
                    [
                      [
                        -1,
                        A.prototype.a.h,
                        c,
                        [
                          [
                            0,
                            [
                              5,
                              [0, 1],
                              [
                                20,
                                34,
                                H.prototype.d.Ec,
                                f,
                                c,
                                [
                                  [5, [20, 34, H.prototype.d.J, f, c], [0, 1]],
                                  [0, 2],
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                      [0, S.prototype.a.CallFunction, c, [[1, [2, "doNext"]], [13]]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    34,
                    H.prototype.c.p,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [0, [5, [20, 34, H.prototype.d.J, f, c], [0, 1]]],
                      [0, [0, 0]],
                      [8, 0],
                      [7, [0, 7]],
                    ],
                  ],
                ],
                [
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "fadeOutBGM"]], [13]]],
                  [
                    -1,
                    A.prototype.a.h,
                    c,
                    [
                      [
                        0,
                        [
                          5,
                          [1, 1.2],
                          [
                            20,
                            34,
                            H.prototype.d.Ec,
                            f,
                            c,
                            [
                              [5, [20, 34, H.prototype.d.J, f, c], [0, 1]],
                              [0, 1],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "doNext"]], [13]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    34,
                    H.prototype.c.p,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [0, [5, [20, 34, H.prototype.d.J, f, c], [0, 1]]],
                      [0, [0, 0]],
                      [8, 0],
                      [7, [0, 8]],
                    ],
                  ],
                ],
                [],
                [
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "currentBranch"],
                          [8, 0],
                          [7, [2, "A"]],
                        ],
                      ],
                    ],
                    [
                      [
                        28,
                        R.prototype.a.k,
                        c,
                        [
                          [3, 0],
                          [1, [2, "transition"]],
                          [3, 0],
                          [0, [0, 0]],
                          [1, [2, ""]],
                        ],
                      ],
                      [
                        27,
                        Y.prototype.a.jc,
                        c,
                        [
                          [1, [10, [2, "Unlocked"], [23, "currentBranch"]]],
                          [7, [2, "1"]],
                        ],
                      ],
                      [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "currentBranch"],
                          [8, 0],
                          [7, [2, "B"]],
                        ],
                      ],
                    ],
                    [
                      [
                        28,
                        R.prototype.a.k,
                        c,
                        [
                          [3, 0],
                          [1, [2, "transition"]],
                          [3, 0],
                          [0, [0, 0]],
                          [1, [2, ""]],
                        ],
                      ],
                      [
                        27,
                        Y.prototype.a.jc,
                        c,
                        [
                          [1, [10, [2, "Unlocked"], [23, "currentBranch"]]],
                          [7, [2, "1"]],
                        ],
                      ],
                      [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "currentBranch"],
                          [8, 0],
                          [7, [2, "C"]],
                        ],
                      ],
                    ],
                    [
                      [
                        28,
                        R.prototype.a.k,
                        c,
                        [
                          [3, 0],
                          [1, [2, "transition"]],
                          [3, 0],
                          [0, [0, 0]],
                          [1, [2, ""]],
                        ],
                      ],
                      [
                        27,
                        Y.prototype.a.jc,
                        c,
                        [
                          [1, [10, [2, "Unlocked"], [23, "currentBranch"]]],
                          [7, [2, "1"]],
                        ],
                      ],
                      [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "currentBranch"],
                          [8, 0],
                          [7, [2, "D"]],
                        ],
                      ],
                    ],
                    [
                      [
                        28,
                        R.prototype.a.k,
                        c,
                        [
                          [3, 0],
                          [1, [2, "transition"]],
                          [3, 0],
                          [0, [0, 0]],
                          [1, [2, ""]],
                        ],
                      ],
                      [
                        27,
                        Y.prototype.a.jc,
                        c,
                        [
                          [1, [10, [2, "Unlocked"], [23, "currentBranch"]]],
                          [7, [2, "1"]],
                        ],
                      ],
                      [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "currentBranch"],
                          [8, 0],
                          [7, [2, "E"]],
                        ],
                      ],
                    ],
                    [
                      [
                        28,
                        R.prototype.a.k,
                        c,
                        [
                          [3, 0],
                          [1, [2, "transition"]],
                          [3, 0],
                          [0, [0, 0]],
                          [1, [2, ""]],
                        ],
                      ],
                      [
                        27,
                        Y.prototype.a.jc,
                        c,
                        [
                          [1, [10, [2, "Unlocked"], [23, "currentBranch"]]],
                          [7, [2, "1"]],
                        ],
                      ],
                      [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "currentBranch"],
                          [8, 0],
                          [7, [2, "F"]],
                        ],
                      ],
                    ],
                    [
                      [
                        28,
                        R.prototype.a.k,
                        c,
                        [
                          [3, 0],
                          [1, [2, "transition"]],
                          [3, 0],
                          [0, [0, 0]],
                          [1, [2, ""]],
                        ],
                      ],
                      [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "currentBranch"],
                          [8, 0],
                          [7, [2, "G"]],
                        ],
                      ],
                    ],
                    [
                      [
                        28,
                        R.prototype.a.k,
                        c,
                        [
                          [3, 0],
                          [1, [2, "transition"]],
                          [3, 0],
                          [0, [0, 0]],
                          [1, [2, ""]],
                        ],
                      ],
                      [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "currentBranch"],
                          [8, 0],
                          [7, [2, "H"]],
                        ],
                      ],
                    ],
                    [],
                    [
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            -1,
                            A.prototype.c.Oa,
                            c,
                            0,
                            a,
                            f,
                            f,
                            [
                              [1, [2, ""]],
                              [0, [0, 1]],
                              [0, [0, 1e3]],
                            ],
                          ],
                        ],
                        [
                          [-1, A.prototype.a.h, c, [[0, [7, [0, 2], [19, A.prototype.d.Qa]]]]],
                          [
                            -1,
                            A.prototype.a.ub,
                            c,
                            [
                              [5, [2, "Black"]],
                              [0, [4, [19, A.prototype.d.md, [[2, "Black"]]], [1, 0.1]]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [],
                        [
                          [-1, A.prototype.a.h, c, [[0, [0, 2]]]],
                          [-1, A.prototype.a.q, c, [[6, "Endings"]]],
                        ],
                      ],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "currentBranch"],
                          [8, 0],
                          [7, [2, "I"]],
                        ],
                      ],
                    ],
                    [],
                    [
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            -1,
                            A.prototype.c.Oa,
                            c,
                            0,
                            a,
                            f,
                            f,
                            [
                              [1, [2, ""]],
                              [0, [0, 1]],
                              [0, [0, 1e3]],
                            ],
                          ],
                        ],
                        [
                          [-1, A.prototype.a.h, c, [[0, [7, [0, 2], [19, A.prototype.d.Qa]]]]],
                          [
                            -1,
                            A.prototype.a.ub,
                            c,
                            [
                              [5, [2, "Black"]],
                              [0, [4, [19, A.prototype.d.md, [[2, "Black"]]], [1, 0.1]]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [],
                        [
                          [-1, A.prototype.a.h, c, [[0, [0, 2]]]],
                          [-1, A.prototype.a.q, c, [[6, "Endings"]]],
                        ],
                      ],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "currentBranch"],
                          [8, 0],
                          [7, [2, "J"]],
                        ],
                      ],
                    ],
                    [],
                    [
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            -1,
                            A.prototype.c.Oa,
                            c,
                            0,
                            a,
                            f,
                            f,
                            [
                              [1, [2, ""]],
                              [0, [0, 1]],
                              [0, [0, 1e3]],
                            ],
                          ],
                        ],
                        [
                          [-1, A.prototype.a.h, c, [[0, [7, [0, 2], [19, A.prototype.d.Qa]]]]],
                          [
                            -1,
                            A.prototype.a.ub,
                            c,
                            [
                              [5, [2, "Black"]],
                              [0, [4, [19, A.prototype.d.md, [[2, "Black"]]], [1, 0.1]]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [],
                        [
                          [-1, A.prototype.a.h, c, [[0, [0, 2]]]],
                          [-1, A.prototype.a.q, c, [[6, "Endings"]]],
                        ],
                      ],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "currentBranch"],
                          [8, 0],
                          [7, [2, "K"]],
                        ],
                      ],
                    ],
                    [],
                    [
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            -1,
                            A.prototype.c.Oa,
                            c,
                            0,
                            a,
                            f,
                            f,
                            [
                              [1, [2, ""]],
                              [0, [0, 1]],
                              [0, [0, 1e3]],
                            ],
                          ],
                        ],
                        [
                          [-1, A.prototype.a.h, c, [[0, [7, [0, 2], [19, A.prototype.d.Qa]]]]],
                          [
                            -1,
                            A.prototype.a.ub,
                            c,
                            [
                              [5, [2, "Black"]],
                              [0, [4, [19, A.prototype.d.md, [[2, "Black"]]], [1, 0.1]]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [],
                        [
                          [-1, A.prototype.a.h, c, [[0, [0, 2]]]],
                          [-1, A.prototype.a.q, c, [[6, "Endings"]]],
                        ],
                      ],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "currentBranch"],
                          [8, 0],
                          [7, [2, "L"]],
                        ],
                      ],
                    ],
                    [
                      [
                        28,
                        R.prototype.a.k,
                        c,
                        [
                          [3, 0],
                          [1, [2, "transition"]],
                          [3, 0],
                          [0, [0, 0]],
                          [1, [2, ""]],
                        ],
                      ],
                      [
                        27,
                        Y.prototype.a.jc,
                        c,
                        [
                          [1, [10, [2, "Unlocked"], [23, "currentBranch"]]],
                          [7, [2, "1"]],
                        ],
                      ],
                      [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "currentBranch"],
                          [8, 0],
                          [7, [2, "M"]],
                        ],
                      ],
                    ],
                    [
                      [
                        28,
                        R.prototype.a.k,
                        c,
                        [
                          [3, 0],
                          [1, [2, "transition"]],
                          [3, 0],
                          [0, [0, 0]],
                          [1, [2, ""]],
                        ],
                      ],
                      [
                        27,
                        Y.prototype.a.jc,
                        c,
                        [
                          [1, [10, [2, "Unlocked"], [23, "currentBranch"]]],
                          [7, [2, "1"]],
                        ],
                      ],
                      [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "currentBranch"],
                          [8, 0],
                          [7, [2, "N"]],
                        ],
                      ],
                    ],
                    [
                      [
                        28,
                        R.prototype.a.k,
                        c,
                        [
                          [3, 0],
                          [1, [2, "transition"]],
                          [3, 0],
                          [0, [0, 0]],
                          [1, [2, ""]],
                        ],
                      ],
                      [
                        27,
                        Y.prototype.a.jc,
                        c,
                        [
                          [1, [10, [2, "Unlocked"], [23, "currentBranch"]]],
                          [7, [2, "1"]],
                        ],
                      ],
                      [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                    ],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.g,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [11, "currentBranch"],
                          [8, 0],
                          [7, [2, "O"]],
                        ],
                      ],
                    ],
                    [],
                    [
                      [
                        0,
                        c,
                        f,
                        [
                          [
                            -1,
                            A.prototype.c.Oa,
                            c,
                            0,
                            a,
                            f,
                            f,
                            [
                              [1, [2, ""]],
                              [0, [0, 1]],
                              [0, [0, 1e3]],
                            ],
                          ],
                        ],
                        [
                          [-1, A.prototype.a.h, c, [[0, [7, [0, 2], [19, A.prototype.d.Qa]]]]],
                          [
                            -1,
                            A.prototype.a.ub,
                            c,
                            [
                              [5, [2, "Black"]],
                              [0, [4, [19, A.prototype.d.md, [[2, "Black"]]], [1, 0.1]]],
                            ],
                          ],
                        ],
                      ],
                      [
                        0,
                        c,
                        f,
                        [],
                        [
                          [-1, A.prototype.a.h, c, [[0, [0, 2]]]],
                          [-1, A.prototype.a.q, c, [[6, "Endings"]]],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [
              [
                34,
                H.prototype.c.p,
                c,
                0,
                f,
                f,
                f,
                [
                  [0, [5, [20, 34, H.prototype.d.J, f, c], [0, 1]]],
                  [0, [0, 0]],
                  [8, 0],
                  [7, [0, 10]],
                ],
              ],
            ],
            [],
            [
              [
                0,
                c,
                f,
                [
                  [
                    34,
                    H.prototype.c.p,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [0, [5, [20, 34, H.prototype.d.J, f, c], [0, 1]]],
                      [0, [0, 1]],
                      [8, 0],
                      [7, [0, 0]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Mystery"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    34,
                    H.prototype.c.p,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [0, [5, [20, 34, H.prototype.d.J, f, c], [0, 1]]],
                      [0, [0, 1]],
                      [8, 0],
                      [7, [0, 1]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Bizarre"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    34,
                    H.prototype.c.p,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [0, [5, [20, 34, H.prototype.d.J, f, c], [0, 1]]],
                      [0, [0, 1]],
                      [8, 0],
                      [7, [0, 2]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Fire"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    34,
                    H.prototype.c.p,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [0, [5, [20, 34, H.prototype.d.J, f, c], [0, 1]]],
                      [0, [0, 1]],
                      [8, 0],
                      [7, [0, 3]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Tragedy"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    34,
                    H.prototype.c.p,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [0, [5, [20, 34, H.prototype.d.J, f, c], [0, 1]]],
                      [0, [0, 1]],
                      [8, 0],
                      [7, [0, 4]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Light"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    34,
                    H.prototype.c.p,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [0, [5, [20, 34, H.prototype.d.J, f, c], [0, 1]]],
                      [0, [0, 1]],
                      [8, 0],
                      [7, [0, 5]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Regretful"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                ],
              ],
              [0, c, f, [], [[0, S.prototype.a.CallFunction, c, [[1, [2, "doNext"]], [13]]]]],
            ],
          ],
          [
            0,
            c,
            a,
            [
              [12, W.prototype.c.zb, c, 1, f, f, f, [[4, 21]]],
              [23, Zb.prototype.c.uh, c, 1, f, f, f, [[9, 13]]],
              [23, Zb.prototype.c.uh, c, 1, f, f, f, [[9, 32]]],
            ],
            [],
            [
              [
                0,
                c,
                f,
                [[21, T.prototype.c.sh, c, 0, f, a, f, [[10, 0]]]],
                [
                  [
                    21,
                    T.prototype.a.ic,
                    c,
                    [
                      [10, 0],
                      [3, 1],
                    ],
                  ],
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "doNext"]], [13]]],
                  [
                    21,
                    T.prototype.a.H,
                    c,
                    [
                      [1, [2, "Default"]],
                      [3, 1],
                    ],
                  ],
                  [-1, A.prototype.a.h, c, [[0, [1, 0.015]]]],
                  [
                    21,
                    T.prototype.a.H,
                    c,
                    [
                      [1, [2, "Disabled"]],
                      [3, 1],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "fadeOutBGM"]]]]],
            [[-1, A.prototype.a.h, c, [[0, [0, 0]]]]],
            [
              [1, "fadeCounter", 0, 0, f, f],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.Oa,
                    c,
                    0,
                    a,
                    f,
                    f,
                    [
                      [1, [2, ""]],
                      [0, [0, 0]],
                      [0, [0, 100]],
                    ],
                  ],
                ],
                [
                  [-1, A.prototype.a.h, c, [[0, [7, [19, A.prototype.d.Qa], [0, 100]]]]],
                  [
                    -1,
                    A.prototype.a.Na,
                    c,
                    [
                      [11, "fadeCounter"],
                      [7, [0, 1]],
                    ],
                  ],
                  [
                    28,
                    R.prototype.a.Qf,
                    c,
                    [
                      [1, [2, "music"]],
                      [0, [5, [0, -10], [7, [23, "fadeCounter"], [0, 2]]]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [],
                [
                  [-1, A.prototype.a.h, c, [[0, [1, 1.1]]]],
                  [28, R.prototype.a.le, c, [[1, [2, "music"]]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "startMusic"]]]]],
            [],
            [
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "A"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Fire"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "B"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Mystery"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "C"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Bizarre"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "D"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Mystery"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "E"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Bizarre"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "F"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Bizarre"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "G"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Mystery"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "H"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Tragedy"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "I"]],
                    ],
                  ],
                ],
                [],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "J"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Bizarre"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "K"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Mystery"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "L"]],
                    ],
                  ],
                ],
                [],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "M"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Light"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "N"]],
                    ],
                  ],
                ],
                [],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "O"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Mystery"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setUpSkip"]]]]],
            [],
            [
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.Ob,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [7, [19, A.prototype.d["int"], [[20, 27, Y.prototype.d.Fc, a, c, [[10, [2, "Unlocked"], [23, "currentBranch"]]]]]]],
                      [8, 0],
                      [7, [0, 0]],
                    ],
                  ],
                ],
                [[41, T.prototype.a.ib, c]],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[12, W.prototype.c.zb, c, 1, f, f, f, [[4, 41]]]],
            [
              [28, R.prototype.a.le, c, [[1, [2, "music"]]]],
              [
                22,
                H.prototype.a.ga,
                c,
                [
                  [0, [0, 0]],
                  [0, [0, 3]],
                  [0, [0, 1]],
                ],
              ],
            ],
            [
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "A"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Fire"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                  [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "B"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Fire"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                  [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "C"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Fire"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                  [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "D"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Tragedy"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                  [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "E"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Fire"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                  [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "F"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Bizarre"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                  [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "G"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Tragedy"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                  [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "H"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Bizarre"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                  [-1, A.prototype.a.q, c, [[6, "Endings"]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "I"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Bizarre"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                  [-1, A.prototype.a.q, c, [[6, "Endings"]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "J"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Bizarre"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                  [-1, A.prototype.a.q, c, [[6, "Endings"]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "K"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Bizarre"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                  [-1, A.prototype.a.q, c, [[6, "Endings"]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "L"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Light"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                  [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "M"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Light"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                  [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "N"]],
                    ],
                  ],
                ],
                [
                  [
                    28,
                    R.prototype.a.k,
                    c,
                    [
                      [3, 1],
                      [1, [2, "Light"]],
                      [3, 1],
                      [0, [0, -10]],
                      [1, [2, "music"]],
                    ],
                  ],
                  [-1, A.prototype.a.q, c, [[6, "Puzzle"]]],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "O"]],
                    ],
                  ],
                ],
                [[-1, A.prototype.a.q, c, [[6, "Endings"]]]],
              ],
            ],
          ],
        ],
      ],
      [
        "DialogueStore",
        [
          [1, "returningVariable", 0, 0, f, f],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "sectionA"]]]]],
            [
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 9]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "URGENT: The Fenix Corporation Headquarters security has been compromised. All personnel evacuate immediately."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "TEMPEST engaged. Security room locked. Emergency services contacted. ETA: 3 hours, 17 minutes."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Visitor has logged on to the Fenix Corporation communications network."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Hello? Is anyone there? "]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What the hell is going on here!?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Christina has logged on to the Fenix Corporation communications network."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "There\u2019s a fire! Everybody evacuate the building!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Steve has logged on to the Fenix Corporation communications network."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Oh, it\u2019s you Chris. This is pretty bad. I can smell the smoke from here."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Steve? Why are you still here? I thought you\u2019d gone home."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "I was working back late. Why do you care?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Troy has logged on to the Fenix Corporation communications network."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Lionel has logged on to the Fenix Corporation communications network."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [
                      7,
                      [
                        2,
                        "This is the CEO of Fenix Corporation telling everybody in the facility to evacuate the building. Security staff, report in immediately.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 5]],
                    [
                      7,
                      [
                        2,
                        "The security staff are dead! I found them lying dead in the control room. Then I saw a warning on this screen about a fire, so I logged in.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "What happened to them!?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I killed them. And I lit the fire."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Who the hell are you? Is this a joke!?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [
                      7,
                      [
                        2,
                        "There\u2019s no time for this now. Visitor, if you\u2019re in the control room then you\u2019ll have to co-ordinate us in escaping. You\u2019ll need one of the security codes.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Security codes?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "The code is RFTS."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "What!? Is this some kind of game to you?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Security code confirmed. Security system online. Beginning scan, floor B3."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "It worked!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Now, you may have a very difficult choice coming up, I\u2019m afraid..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Calculations complete. "]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Fire on floor B3. One casualty unavoidable. "]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Candidates: Troy, Steve."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "What does that mean?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 3]],
                    [
                      7,
                      [2, "Our \u201cvisitor\u201d is going to have to choose between keeping me or Steve alive. I trust this won\u2019t be a hard decision."],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Kill that asshole! I\u2019m not dying for him."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "My job here is done. I\u2019m ready to die."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "The fire is growing. Visitor, you will be led through how the system works."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Hurry up!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 0]],
                    [7, [2, "URGENT. Please enter your security system orders immediately. The chat system has been locked until your decision is made."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 8]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "sectionB"]]]]],
            [
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 9]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "The fire has been contained. Casualties: Troy."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Phew, that was tense for a bit. Glad that\u2019s over."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "How can you talk like that when someone just died!?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "He had this coming. He tried to kill us!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Really? I\u2019m pretty sure he just saved you. Not his best decision."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Oh haha."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "So you two know each other?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Yup. Me and Steve have had the misfortune of working together for the last few years. "]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Tell me about it, Chris. Don\u2019t you wish you\u2019d gotten to work in Troy\u2019s department instead?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Shouldn\u2019t you two be looking for a way out?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "We\u2019re not all old like you. We can walk and type, thank you very much."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "The main hallway\u2019s completely destroyed by fire. I can\u2019t get through."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "I'm having the same problem. I\u2019ve found a staircase up to the next floor, though."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Oh, same here."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "There\u2019s one here, too. Shall we head up?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Sure, why not?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Okay, I\u2019m heading up now."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Beginning scan, floor B2."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Our visitor\u2019s being very quiet. What\u2019s your story?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Me? I don\u2019t work here. I was just making a delivery."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "A delivery? Let me guess. Tires? Pop-up books?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "No, stationery. Those were some strange guesses, though. What exactly do you do here?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "You know, that\u2019s a great question. What DO we do here, Lionel?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "...I know you got that message Lionel."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 4]],
                    [7, [2, "Forget it, I wasn\u2019t expecting an answer anyway. To be honest, no-one really knows what Fenix Corporation actually DOES."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 1]],
                    [
                      7,
                      [
                        2,
                        "The company buys random items \u2013 toilet seats, guitars, you name it - in bulk, and then sells it all off for next to no profit. We\u2019re all almost certain it\u2019s a front.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 4]],
                    [7, [2, "But it pays well, so we stay here. Well, Christina works here because nowhere else wants her, but that\u2019s different."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "How about you shut up while I ask Lionel a serious question? I want to know about the cockatiels."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "...cockatiels?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 4]],
                    [
                      7,
                      [
                        2,
                        "Oh, the cockatiel story! For nearly a year, we\u2019d be constantly getting in shipments of live cockatiels, by the thousands. God knows how many birds they bought.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 1]],
                    [7, [2, "But the cockatiels were never seen again. No-one knows what was done with them. It\u2019s an animal rights issue."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Woah, that IS weird. What was going on Lionel?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "We were buying cockatiels looking for a phoenix."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "I don\u2019t get it."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "You don\u2019t have to get it."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "That didn't even answer the question."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Has anyone found anything interesting on the second floor?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Nope."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Nothing much here. Most of this building is reserved for storage."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Shouldn\u2019t you guys all know your way around this building?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Our access to the rooms here is very limited. That would be on your request, wouldn\u2019t it Lionel?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [7, [2, "Truth be told, I rarely visit myself. I know what facilities this building contains, but I know very little about its layout."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 4]],
                    [7, [2, "That\u2019s right. It\u2019s been in the notices for weeks that you were coming today. Was today something special?"]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "I was just dealing with some financial business. Nothing that could have encouraged arson..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Calculations complete."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 2]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Fire on floor B2. One casualty unavoidable."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Candidates: Lionel, Steve."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Goddamnit! Not again!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Either Lionel or Steve is going to die..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "As the CEO of this corporation, I must request that you save me."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Don\u2019t you dare! Please, save Steve."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "I don\u2019t know why this fire was started, but you can be sure Lionel\u2019s responsible in some way."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "But Steve\u2019s done nothing wrong!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 4]],
                    [
                      7,
                      [
                        2,
                        "It\u2019s great to hear you sticking up for me for once, Chris, but our visitor\u2019s already saved me once. It\u2019s their choice what they do this time around.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Visitor, my life in your hands. Make the right decision. Save me. You will be well compensated."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "This isn\u2019t about money you asshole!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Shut up, both of you. It\u2019s getting hot in here. This is up to our visitor."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 0]],
                    [7, [2, "URGENT. Please enter your security system orders immediately. The chat system has been locked until your decision is made."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 8]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "sectionC"]]]]],
            [
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 9]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "The fire has been contained. Casualties: Steve."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "Why? Why save me?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "My thoughts exactly! Why did you leave Steve to die!?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 5]],
                    [
                      7,
                      [
                        2,
                        "I could only save one of them... and Troy knew the security code. He\u2019s the reason I could save anyone. We need to know what else he knows.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Ah, now we\u2019re thinking!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I\u2019m not going to do anything to save anyone from here on in."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Tell me, now. How did you know the security code?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "Visitor, check the bodies of those two security guards."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "This better not be a trick..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "Just do it."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Fine."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Well that explains that."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "What did you find?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "One of the guards was holding a blue file with the security code Troy told us before written in it."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "They were!?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "A blue file? Those contain the security codes! Each one allows you to lock another fire door."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 3]],
                    [
                      7,
                      [2, "I found the code when I killed them. I thought I\u2019d give you a fighting chance, so I told you the code. You\u2019re welcome."],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Why did you do this?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "Instead of asking all these questions, why don\u2019t you look for a way out?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "The main room\u2019s completely blocked by rubble is why."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "There should be a staircase in a room near both of you."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Hmm, you\u2019re right. I\u2019m heading up now."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Fine. Me too."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "So, while we\u2019re here, Lionel, could you tell me what the hell it is that this company is set up to do?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "Don\u2019t waste your breath. He\u2019s not going to tell you anything."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Well, maybe you\u2019d like to explain, then."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "There's nothing to explain."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "That\u2019s a lie and you know it!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "You both work here! Shouldn\u2019t you know what the company does?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 1]],
                    [
                      7,
                      [2, "You\u2019d think. The company mostly buys and sells things in bulk. But there\u2019s something dark going on underneath all that."],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Like what?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Beginning scan, floor B2."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "\u201cCandidates: Christina, Troy\u201d."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Huh?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "Don\u2019t worry just yet."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Then why would you say anything?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "Christina... That\u2019s a nice name. It\u2019s your mother\u2019s, correct?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "What!? How could you know that?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Answer me! Tell me right now!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Goddamnit!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Calculations complete."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Fire on floor B2. One casualty unavoidable."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Candidates: Christina, Troy."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 2]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "How could you know that? How could you know the code? How could you know one of us is going to die?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I told you. I lit the fire. I\u2019m behind all of this. I know everything."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "No! That answer\u2019s not good enough!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Could we do this later?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "There is no later! Tell me now!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I\u2019m not telling anyone anything. Just let me die."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 0]],
                    [7, [2, "URGENT. Please enter your security system orders immediately. The chat system has been locked until your decision is made."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 8]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "sectionD"]]]]],
            [
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 9]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "The fire has been contained. Casualties: Lionel."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Good."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Now who\u2019s being insensitive? That was the head of our company, Chris!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "And you chose me over him, visitor?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Don\u2019t ask me to explain my choices. It makes me sick, thinking about what I just had to do."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "How do you think I feel? I didn\u2019t get a choice. What if I wanted to die, to save Lionel?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "As if you would ever sacrifice yourself for ANYONE."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "And you would?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "No. But at least I\u2019m up-front about it."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Oh, I\u2019ve found a set of stairs. I\u2019m going to head on up."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "I\u2019m already on the next floor, I just didn\u2019t bother saying anything about it."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "That\u2019s a great story."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Beginning scan, floor B1."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Do you think we get paid over time for this crap?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "I dunno. Barely matters though. Time-and-a-half of what we make is still next to nothing."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Maybe Troy set the fire because he was angry about all the wage cuts recently."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "God, do you have any clue? Wait until we get out of here before you start making jokes about the deceased."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Hey! I could be right for all you know. The guy was whack, it wouldn\u2019t take much to set him off."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "No, just stop. I mean it."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 5]],
                    [
                      7,
                      [
                        2,
                        "You know, speaking of the deceased... I\u2019ve been so wrapped up in working with you guys, I almost forgot I\u2019m in a room with two dead bodies.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Woah, I\u2019d forgotten too."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "That\u2019s awful..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "What can you find out about them?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "I guess I should probably search them, huh? I really don\u2019t want to though..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Ugh. Good luck. You must have a stronger stomach than me."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Okay, I\u2019ll go look now."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Back. I found a blue file in the hand of one of them."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Really? What does it say?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "It\u2019s the security code! The one that Troy gave us!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Wait, really!?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Why are you surprised, Chris? It would explain how Troy could tell us the code."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Why would he give us the code, anyway? What does he get out of it?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 1]],
                    [
                      7,
                      [2, "I don\u2019t get it either. Why shoot two people, set a building on fire and THEN try to play the hero? It makes no sense to me."],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Why don\u2019t we ask him? Oh, whoops!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "No. It\u2019s not funny."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Hey, simple mistake!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Chris?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Chriiiiis."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "You sure manage to get yourself ignored a lot."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Eh, I wasn\u2019t that fussed on talking to her anyway."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "You two..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Calculations complete."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Fire on floor B1. One casualty unavoidable."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "No..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Candidates: Christina, Steve."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "No. No!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Chris..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "I thought I was going to make it. There\u2019s only one more floor to ground level!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "You\u2019re getting out of here, Chris. There\u2019s no way I\u2019m letting you die."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Don\u2019t you dare. Don\u2019t you even think about it. You\u2019re not sacrificing yourself for me."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Chris. You know I don\u2019t mean any of the shit I say, right?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Of course I do! I\u2019m not an idiot! You don\u2019t need to die to prove that!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Good. Then I\u2019m ready."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 3]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Steve! No! You don\u2019t deserve to die."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "NO-ONE deserves to die, Chris. Especially not you."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "...you\u2019re not going to ignore me NOW, are you?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "I just don\u2019t know what to say."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "How about goodbye? Whatever happens, this is the last time we\u2019ll ever talk to each other."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "This isn\u2019t how I wanted things to go!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Do you think I WANT to die?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "You don\u2019t understand!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "I\u2019m sorry, you two... if I don\u2019t do something now, you\u2019ll both die."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "It\u2019s alright. I\u2019m ready now. It\u2019ll be like a barbeque."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Shut up! You\u2019re not going to die. Is he, visitor?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Our visitor knows what they\u2019re doing. They\u2019ll save you."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Visitor! Promise me you\u2019ll save him."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Promise me!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 0]],
                    [7, [2, "URGENT. Please enter your security system orders immediately. The chat system has been locked until your decision is made."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 8]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "sectionE"]]]]],
            [
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 9]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "The fire has been contained. Casualties: Christina."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "Not again..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "You don\u2019t sound too happy for someone who\u2019s lucky to be alive."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "Visitor, tell me. What would it take to get you to kill me?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "You can\u2019t ask someone something like that!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "You\u2019re mad!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I\u2019ve killed all these people. Of course I\u2019m goddamn mad!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Beginning scan, floor B1."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "You\u2019re going to have to choose between saving me or Lionel soon. Promise me you\u2019ll save Lionel."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "But how do you know that?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "It doesn\u2019t matter! All that matters is I\u2019m a monster and I don\u2019t deserve to live!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "It does matter! Of course it matters!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "I want to know too! Tell me why you did this!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "There\u2019s not enough time!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "Besides, you won\u2019t believe me! You never believe me until it\u2019s too late."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What the hell is that supposed to mean?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Calculations complete."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 2]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Fire on floor B1. One casualty unavoidable."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Candidates: Lionel, Troy."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "It doesn\u2019t matter! Just save Lionel!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "I must concur. Please, spare me!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Shut up! I want to know what\u2019s going on!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "If I give you answers will you let me die?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "If you save me I\u2019ll tell you things Troy doesn\u2019t know! I\u2019ll tell you what we really do here!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Troy, tell me. Then you can die."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "Okay. But I\u2019ll have to be quick. The truth is, I\u2019ve been here before."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What is that supposed to mean?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 0]],
                    [7, [2, "URGENT. Please enter your security system orders immediately. The chat system has been locked until your decision is made."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 8]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "sectionF"]]]]],
            [
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 9]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "The fire has been contained. Casualties: Steve."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "You\u2019ve made the right decision. I\u2019ll make sure you won\u2019t regret it."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "I\u2019m sorry Christina. I could only save one of them..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Christina?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Okay, that\u2019s alright. I don\u2019t expect you to talk to me after what I\u2019ve done."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "How are we going to get out of here with one of us not playing along?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "I\u2019m sure she\u2019s still trying to get out of here. She just has a lot to deal with at the moment."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Well, either way, I\u2019ve found the stairs."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Beginning scan, floor B1."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Christina, just so you know, I understand this must be awful for you. I really am sorry."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Don\u2019t beat yourself up about it. You did the right thing."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Calculations complete."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Fire on floor B1. Two casualties unavoidable."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Candidates: Christina, Lionel."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "TWO casualties unavoidable?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "No... That means we\u2019re both going to die."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "It\u2019s over. We\u2019ve reached our ends."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "No! You can\u2019t both die!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "There\u2019s no other option. I\u2019m afraid this is it."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Good. I\u2019d rather die than live in a world with people like you two."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Christina... Lionel... I\u2019m sorry, I let you guys down."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "It\u2019s alright. There\u2019s nothing you could\u2019ve done."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "He could have saved Steve instead of you!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Now\u2019s not the time to squabble. Goodbye, both of you."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Just because you\u2019re about to die doesn\u2019t mean you\u2019re a saint! I hope you both burn in hell."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Christina, don\u2019t do this. Don\u2019t waste your final moments like this."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Give me one reason why I shouldn\u2019t!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 0]],
                    [7, [2, "URGENT. Please enter your security system orders immediately. The chat system has been locked until your decision is made."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 8]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "sectionG"]]]]],
            [
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 9]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "The fire has been contained. Casualties: Troy."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Well, I guess he finally got what he wanted."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Good! The man was a maniac. He\u2019s cost my company millions already!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "And he killed 4 people."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "It\u2019ll be 6 if you don\u2019t get out of here soon."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Alright, alright. I\u2019ve found the stairs."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Me too."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Beginning scan, floor B1."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "I didn\u2019t mean to be so callous before. It\u2019s just, this will severely impact our operations."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Don\u2019t you think that might have been the point?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "What do you mean by that?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Troy probably wanted to stop Fenix from doing whatever messed up things you do here."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "I suppose that makes sense."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "No. Impossible. Our business here is strictly confidential."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Does that sound like a slip of the tongue to you, visitor?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Calculations complete."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Fire on floor B1. Two casualties unavoidable."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Candidates: Christina, Lionel."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "...two casualties unavoidable."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "No..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 3]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "So, neither of us is going to live?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "I\u2019m afraid not."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "I guess that\u2019s fairest, isn\u2019t it?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "What?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Well, why would we deserve to live when Steve and Troy had to die?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Because Troy was a murderer!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "And what about Steve?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Well, either way, goodbye."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Goodbye."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "...goodbye."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 0]],
                    [7, [2, "URGENT. Please enter your security system orders immediately. The chat system has been locked until your decision is made."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 8]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "sectionH"]]]]],
            [
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 9]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "The fire has been contained. Casualties: Christina."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "I\u2019m so sorry."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "I don\u2019t want to hear it. If you were sorry, you would\u2019ve listened to me!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "I had to make a decision. I don\u2019t expect you to be happy with what I\u2019ve done."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Just shut up!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "This is all a trick. This is a nightmare."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "You\u2019re still there, aren\u2019t you, Chris? If you\u2019re there, send me a message."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "You\u2019re just ignoring me again, right?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Steve. I understand this must be impossible for you right now. But, you need to keep moving."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "And what the hell is the point of that?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Christina just died for you. If you don\u2019t get out of here she\u2019ll have died for nothing."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 4]],
                    [
                      7,
                      [
                        2,
                        "Sure. I\u2019m gonna get out of here, and it\u2019s gonna turn out this has all been some sick joke and Chris will be waiting for me outside, alive.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "I mean, how do I even know it was Chris who was writing those messages, right?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Okay. I\u2019m ready. I\u2019m heading up to ground level now. I can\u2019t wait to see her again."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Beginning scan, ground floor."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Alright. Just a little further."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 4]],
                    [7, [2, "Oh, there\u2019s a desk here with one of those blue files you were talking about on top of it. It\u2019s another security code."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Another one? But what for?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, " I guess with this, you can control more fire doors at a time? Not a lot of use now..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Steve, are you still there?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Steve?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "I KNEW IT! I told you!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Told me what?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "She\u2019s alive! Chris is alive!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What? What\u2019s going on?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "No fire detected."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 4]],
                    [
                      7,
                      [
                        2,
                        "So, there was a file next to the one with the security code. When I saw it, I knew I had to read it. It was titled the \u201cPhoenix Experiment\u201d.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "The one with the cockatiels!?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Just let me explain. So, I didn\u2019t get a lot of it, but here\u2019s what I understood:"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 4]],
                    [7, [2, "So, Fenix corp. had an experiment planned where they were going to buy lots of cockatiels and teach them to say a phrase."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 4]],
                    [7, [2, "But every time they had enough birds for the experiment, they would just randomly decide to increase their sample size."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 4]],
                    [7, [2, "All in all, they bought around 6 million cockatiels.  They stopped buying them the day something weird happened."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "One of the cockatiels they bought already knew the phrase they were going to teach it!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Weird. Maybe whoever sold it to them knew what was going on and tried to mess with the experiment?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Let me finish!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 4]],
                    [7, [2, "So, they tagged this special cockatiel that already knew the phrase, and it taught the phrase to all the other cockatiels."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 4]],
                    [7, [2, "But, the experiment didn\u2019t end there. They ran each and every one of the cockatiels through some kind of machine."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 4]],
                    [
                      7,
                      [
                        2,
                        "It was worse than Chris had thought. They all died! All of them, except one. The bird that they\u2019d marked, the one that already knew the phrase, was fine!",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What!? What sort of machine works like that?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 4]],
                    [7, [2, "I have no idea! The paper talks very little about the machine itself and what it does say I don\u2019t understand."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Bizarre. But..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "How does this tell you Christina is alive?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "I\u2019m sorry! I\u2019m all over the place right now. So, here\u2019s the thing."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "The phrase that the birds were taught?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "It was \u201cChristina lives\u201d."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Steve... Are you sure you\u2019re feeling alright?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "I mean it! That\u2019s what it says! You can see for yourself when I show Chris!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "But... even if it\u2019s true, we still have no idea what that phrase means."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "What do you mean? \u201cChristina lives\u201d! It means she's alive!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "But, we don\u2019t understand anything about the experiment. It could mean anything."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Steve?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Come on, you need to keep in contact."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Sorry, no time to type. I\u2019ve got to find the way out so I can find Chris. Cya soon!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "No! Keep talking!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Steve! Come on!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Steve has disconnected. Reason: signal lost."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Steve!? What the hell have you done!?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "I\u2019m coming to find you!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Visitor has disconnected."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 8]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "sectionI"]]]]],
            [
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 9]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "The fire has been contained. Casualties: Steve."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "No."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "I\u2019m so sorry..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "No! It\u2019s not fair! Why would you save ME?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "I had to listen to one of you..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "You don\u2019t understand! He never hurt anyone."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Neither did you!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Yes I did."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Troy, and Lionel, and Steve... They all died because of me."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "The security guards, too."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Visitor, this is all my fault."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "I lit the fire."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "No you didn\u2019t! Troy did!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "No he didn\u2019t. I don\u2019t know what his deal is."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Was..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 1]],
                    [7, [2, "I set the fire. Then I killed the guards before they could do anything about it. From the start, it was all me."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Christina... You know it wasn\u2019t really you. It was Troy."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "If it was Troy, why was he trying to save us all?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "I don\u2019t know. No-one does!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 1]],
                    [7, [2, "This isn\u2019t how it was meant to go. Steve wasn\u2019t meant to be here. The building was meant to be nearly empty."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Let\u2019s say you did it. What was your motive?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 1]],
                    [
                      7,
                      [
                        2,
                        "I wanted to stop whatever what was going on in this building forever. And I wanted to kill Lionel before he ruined anyone else\u2019s life, too.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What did Lionel do?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Him and his company. They killed my mother."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What!?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "My mother used to work at this company. She had the same name as me."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "She never told me much about what they did here. She always just said \u201cexperiments\u201d."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Well, one day, she went to work and never came back. We ordered a search, but no-one could find her."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "It was a week before we got a call from the Fenix Corporation."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 3]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "They told us that they were so sorry, and that mum had died in an experiment."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Sorry my ass. They still wouldn\u2019t tell us what happened, and then, when they sent back her body..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "They sent back her body with her brain cut out."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "They cut out her brain so they could experiment on it."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "They killed my mother so they could look at her brain."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Christina... I\u2019m so sorry..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "I couldn\u2019t let them get away with doing anything like that ever again."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "So, I started working here at the company. They knew who I was, but I think they gave me a job to shut me up."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 1]],
                    [7, [2, "Since then, I\u2019ve spent god knows how long trying to find out what they did to my mother, but I haven't gotten anywhere."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "When I read in the notices that Lionel was going to be visiting today, I knew I had to do something."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "But, I thought I had worked out the timing perfectly! Steve wasn\u2019t meant to be working overtime!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "And now, he\u2019s dead. I killed him. I killed all of them."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "I don\u2019t know what to say..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 1]],
                    [
                      7,
                      [
                        2,
                        "Don\u2019t say anything. Nothing\u2019s going to help. I\u2019ll just keep moving through this building, and when I get out I'll be arrested and I\u2019ll finally get what I deserve.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "...okay."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Alright, I\u2019m on the ground floor now."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Beginning scan, ground floor."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 1]],
                    [
                      7,
                      [
                        2,
                        "To be honest, I still have no idea where I am. Most of the building is off-limits normally. We take elevators down to our workspaces on floor B3 and we never see the rest of the building.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What a weird way to do things."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "It makes sense when you remember they\u2019re trying to hide the skeletons in their closet."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Oh, there\u2019s a blue file on a desk in here. It looks like the one you found on the security guard."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Another one? What\u2019s the point of that?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "It has a different code on it. Maybe this would let you lock more fire doors at a time?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "But if I\u2019d had that earlier..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "I don\u2019t even want to think about this. I\u2019m going to keep moving."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "No fire detected."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Hold on a sec, there\u2019s a big metal door I need to open."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Alright."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Okay, I\u2019m through now."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "There\u2019s a sign here. It says \u201cTEMPEST entrance\u201d."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What\u2019s that?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "No clue. There\u2019s a door here though. It looks kind of strange. I\u2019m going to go through."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Sure, just tell me what you find."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Christina has disconnected. Reason: signal lost."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What!?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "No! We were so close! Why would it drop out now?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Christina!?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Christina, I\u2019m coming to find you!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Visitor has disconnected."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 8]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "sectionJ"]]]]],
            [
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 9]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "The fire has been contained. Casualties: Lionel."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "So this is how it goes, is it? I don\u2019t know how much longer I can do this."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What are you talking about? What were you saying before the chat cut out?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "And while we\u2019re at it, how do you know everything? And why did you light the fire?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "There\u2019s nothing I can do now... I may as well tell you what I know."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Beginning scan, ground floor."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "First thing\u2019s first. The reason I lit the fire..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I didn\u2019t."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What? That makes no sense."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 3]],
                    [
                      7,
                      [
                        2,
                        "I don\u2019t know who really did it, though. I don\u2019t know who killed the security guards, either. While we\u2019re at it, I have no idea what they do here at this company.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "You\u2019re full of crap. How did you know all that stuff then? How did you know the security code?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "No fire detected."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "You\u2019re probably not going to believe this... No, I KNOW you\u2019re not going to believe this."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I knew the security code because I heard you read it out."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "You know that makes no sense! You told me it before I ever read it!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "This time I did..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "This time? What the hell do you mean \u201cthis time\u201d?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I\u2019ve been here before. I\u2019ve been here five times before."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 3]],
                    [
                      7,
                      [
                        2,
                        "The first time, I was in my office doing my work when suddenly the fire alarms went off. I went on the chat to find out what was happening, and Lionel explained you would need a security code to save anyone.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 3]],
                    [7, [2, "We all scrambled around looking for a blue file before you finally found one. That\u2019s when I found out the code."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "Then, you had to make decisions. Steve died, Christina died, Lionel died... I was the only one left."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I had to keep going. I found a room, called the \u201cTEMPEST entrance\u201d."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I went inside, and there was a bright light, and suddenly... Well, you won\u2019t believe this bit."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "Suddenly, I was back before the fire, sitting in my office."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I don\u2019t know how, but I travelled through time."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 3]],
                    [7, [2, "I was so glad to hear you all alive, but none of you remembered what had happened. You all thought I was insane."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 3]],
                    [
                      7,
                      [
                        2,
                        "But, just like this time, because I knew the code, you thought I could save everyone. So once again, Steve died, then Christina, then Lionel...",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I got to the end, back to the TEMPEST entrance, and it happened again."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "And again."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "And again."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "Five times, it\u2019s happened."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "That\u2019s a lot to take in. I\u2019m not sure I believe you..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "If that\u2019s true, why did you say you were the arsonist?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "Because I just want to die."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 3]],
                    [7, [2, "Five times now, I\u2019ve watched them all die just so I can live. And for what? So I can go back and watch them die again."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I wanted you to think I was evil. Who would save a murderer over an innocent life?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Me, apparently..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 3]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "None of my plans to save the others have worked. Not one. I\u2019m just tired."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "So, now what?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I\u2019ve checked everywhere. All the doors are locked, just like last time."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I have no choice. I have to go back to the start."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 5]],
                    [7, [2, "Wait! You don\u2019t have to. The fire\u2019s contained now. If you just wait there, someone will come and find you."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "No. I can\u2019t let the loop end."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I can\u2019t let the loop end until someone else survives."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 3]],
                    [7, [2, "I\u2019ve been through too much. I\u2019m ready to die. Whoever makes it out of this building should WANT to live."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "But, if you go back, what happens to me? What happens to this world once you go?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I have no idea."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 5]],
                    [
                      7,
                      [
                        2,
                        "Does that mean there are now 5 \u201cworlds\u201d out there \u2013 in space or time or wherever - where you\u2019ve just disappeared and everyone else is dead?",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "When you put it like that... I guess you\u2019re right."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "But how is that possible!?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "My guess is as good as yours."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I\u2019m outside the TEMPEST entrance now. This is it."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "I guess so..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I\u2019ll see you again soon. Just... you won\u2019t see me."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "I still can\u2019t wrap my head around this at all..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "Goodbye."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Goodbye."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Troy has disconnected. Reason: signal lost."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Visitor has disconnected."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 8]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "sectionK"]]]]],
            [
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 9]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "The fire has been contained. Casualties: Troy."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Ah, excellent. You have made the right decision."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "I\u2019m not so sure there was a right decision. Now, you made a promise."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Very well. A deal\u2019s a deal. What do you want to know?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Beginning scan, ground floor."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "I want to know what Christina was talking about. What\u2019s going on in this company?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Christina herself has no idea what we do here."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [
                      7,
                      [
                        2,
                        "She was right about one thing, though. Here at Fenix Corporation, we buy and sell large stocks of cheap products just to keep the books looking busy. It\u2019s a front.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Our true interest here is time travel."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "...time travel."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "That is indeed what I said."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "And you expect me to believe that?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "I don\u2019t care what you believe. You asked for the truth, and here it is."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Now, if you\u2019ll let me continue. We in fact have a fully-functional time machine in this facility."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "But the time machine we have constructed doesn\u2019t quite work like the ones you might see in the movies."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "As in, it does nothing because time travel isn\u2019t real?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [
                      7,
                      [
                        2,
                        "If you\u2019re not going to listen, I don\u2019t see why you bothered saving me. No, our time travel doesn\u2019t affect physical objects.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Well that doesn\u2019t sound very useful. What CAN it do?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "No fire detected."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "It can carry a person\u2019s consciousness through time."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Consciousness?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [
                      7,
                      [
                        2,
                        "Their thoughts, their personality, their likes and dislikes, their experiences and their memories. Our machine can carry those things through time.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "You know, I don\u2019t believe a word of this."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "It\u2019s your own loss."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "So if I was to hop in this machine and go an hour into the future, what would actually happen?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Your consciousness would leave your body, and effectively you would die."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Die!?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [
                      7,
                      [
                        2,
                        "At first. Then, after an hour, your consciousness would re-enter your body, and you would come back to life, not even realising an hour had passed.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "That\u2019s impossible!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "We\u2019ve done it successfully. People, birds, dogs \u2013 anything with a brain can travel in our machine."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 5]],
                    [7, [2, "But, what use is that sort of time travel? Your body would start to decompose if you went forward more than a few hours!"]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [
                      7,
                      [
                        2,
                        "That is true. We\u2019re still experimenting with methods of preserving the body that would allow the consciousness to later re-enter it. Currently freezing seems promising.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [
                      7,
                      [
                        2,
                        "But, this is not where our true interest lies. If a person travels forward through time, they can visit distant eras and the like, but they can still only live for the 80 years their body dictates.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "But what if one was to travel backwards?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "You mean back to when they were younger?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [
                      7,
                      [
                        2,
                        "Exactly. They would retain their memories and experiences gained over time, but they would have a younger body. Unless they were in an accident and died instantly, they could live forever.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Woah. Woah!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Yes! With our machine, no-one has to die."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "That would be huge! But, does it work?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "We believe so."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What\u2019s that supposed to mean?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Our tests travelling forward have gone exactly to plan."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "However, in our tests things didn\u2019t work quite so well going backwards..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What happened?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Our human test subject entered the machine, we activated it, her consciousness left her body and..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "And unfortunately, it never came back. She died."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "That\u2019s terrible..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What went wrong?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "We have dedicated every resource we have available to discovering the cause of this problem."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "And you haven\u2019t worked it out?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "We think the machine may have worked."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What!? How can you say that when someone died?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "It is an incredibly complicated concept... But I will explain it to you."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "First, though, you have to do something for me."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [7, [2, "I have entered the code to unlock access to the rooms on the ground floor. I\u2019m in the TEMPEST room. Come meet me here."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "But why? Why can\u2019t you tell me now?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Lionel has disconnected. Reason: signal lost."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Lionel!? Where\u2019d you go?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "I guess I have no choice now. I have to go find you."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Visitor has disconnected."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 8]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "sectionL"]]]]],
            [
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 9]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "URGENT: The Fenix Corporation Headquarters security has been compromised. All personnel evacuate immediately."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "TEMPEST engaged. Security room locked. Emergency services contacted. ETA: 3 hours, 17 minutes."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Visitor has logged on to the Fenix Corporation communications network."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Lionel? What the hell is going on here?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "I went into the TEMPEST room like you told me to, and now I\u2019m back here, in the control room!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Wait..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Christina has logged on to the Fenix Corporation communications network."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "What!? How did I end up here?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Steve has logged on to the Fenix Corporation communications network."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Chris! You\u2019re alive! I knew you were alive!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Steve! I thought you were dead!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Me!?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Troy has logged on to the Fenix Corporation communications network."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "You guys! You remember! You finally remember!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Troy! This all just part of some trick of yours, isn\u2019t it!?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "No! I have no idea what\u2019s going on."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "You think I\u2019m going to believe that after you lit this fire?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I didn\u2019t light the fire!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "You don\u2019t just get to change your story now!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Steve, he\u2019s telling the truth."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "What do you mean?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Lionel has logged on to the Fenix Corporation communications network."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Amazing! I knew this would happen sometime, somewhere, but I never thought I\u2019d be the one to witness it."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "You know what\u2019s going on here?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Yes. But for now, there are more pressing matters. Does anyone here have one of the security codes?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I already told you mine last time. RFTS."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "But, did anyone find any new ones?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Oh! I found a blue file which said IRHH in it."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "I found one which said SOEE."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [7, [2, "Perfect! Visitor, I confess that just before I cut out last time we spoke I found a file containing the code EMAS."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Now, quickly! Enter all the codes!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Alright, alright."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Security code confirmed. Security system online. Beginning scan, floor B3."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Four codes received. Full access granted."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Full access?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "You can now lock 4 fire doors at a time instead of just 1!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Lionel! Tell us what the hell is going on here already! Why is everyone alive again?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "There\u2019s no way I would have enough time for that now."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Calculations complete."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 4]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Fire on floor B3. No casualties expected."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "\u201cNo casualties expected\u201d?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "No-one has to die!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Yes. Now we have the security codes, we\u2019re all safe."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Let\u2019s get out of here then!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 0]],
                    [7, [2, "URGENT. Please enter your security system orders immediately. The chat system has been locked until your decision is made."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 8]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "sectionM"]]]]],
            [
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 9]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "The fire has been contained."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Fantastic! We\u2019re all still alive!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Great! But you still owe us all an explanation."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 4]],
                    [
                      7,
                      [
                        2,
                        "How is everybody alive again? How did I end up back where I was when the fire started? Why aren\u2019t these rooms fire-damaged anymore?",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Beginning scan, floor B2."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Visitor, do you remember what I told you before?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Yeah, you invented a time machine."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Impossible!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 5]],
                    [
                      7,
                      [2, "Well, it was a bit different to a time machine, I guess. It carries your thoughts and memories through time instead of your body."],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Correct so far."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "It works going forward, but going backwards..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Calculations complete."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Going backwards, you killed someone. They never returned to their body."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Fire on floor B2. No casualties expected."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "That is the story as I told it."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "That person you murdered was my mother, asshole!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "What!? Your mother died of a brain tumour. You told me so!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "That was a lie."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Lionel killed my mother to test some impossible time travel bullshit!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "So I lit the fire. I lit it to kill Lionel, and wreck his corporation before they ruined any more lives."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Chris... I don\u2019t believe it."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "I had suspected as much. Christina, your mother is not dead."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "What do you mean by that? I\u2019ve seen her body. You took her brain!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 0]],
                    [7, [2, "URGENT. Please enter your security system orders immediately. The chat system has been locked until your decision is made."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 8]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "sectionN"]]]]],
            [
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 9]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "The fire has been contained."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Lionel. Answers."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Your mother is not dead. This is going to be hard to explain."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "When we sent your mother back in time, she never returned to her body."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "However, there was not a single fault in our logic. The machine was designed perfectly."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "The machine is what\u2019s in the TEMPEST room, right?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Correct. Anyway, we conducted many experiments, and eventually came to one fascinating conclusion."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [
                      7,
                      [
                        2,
                        "When our subject had travelled forward through time, the future was not set, and so time would bend to accommodate our time traveller.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "That is, the consciousness travelling through time would remain in its own timeline."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "But, when travelling backwards, things were not so simple."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Beginning scan, floor B1."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "The consciousness would become \u201clost\u201d in the mess that is time-space."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [7, [2, "It would find a host, one which owned the consciousness, and one which existed at the time it had been sent back to."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "But it would not always find its host in its own universe."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "You\u2019ve lost me."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [
                      7,
                      [
                        2,
                        "Our research would suggest that there are a nearly infinite amount of universes, each nearly identical, with only minute differences between them.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [
                      7,
                      [
                        2,
                        "So, when Christina\u2019s mother travelled backwards through time, she was not alone. Trillions of her, maybe even more, travelled too.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [
                      7,
                      [
                        2,
                        "They would land randomly into different timelines. Some would land in the same timeline and one consciousness would \u201cover-ride\u201d the other.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [
                      7,
                      [
                        2,
                        "In some timelines no-one would ever know that Christina\u2019s mother had even left, or that the conciousness that returned to her body wasn\u2019t from their universe.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "A rare few consciousnesses would land back where they began, in their own universe."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [
                      7,
                      [
                        2,
                        "But many timelines were left like here, in this universe, where Christina's mother's consciousness left this world, but no other consciousness returned to fill her body.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Because of this, the body remained empty, and Christina\u2019s mother was effectively dead."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "But her consciousness lives on in another time, another universe."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "I\u2019m not buying a word of this!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Calculations complete."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Fire on floor B1. No casualties expected."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 3]],
                    [7, [2, "But, it explains everything! This is why everything kept happening over and over again! This is why we\u2019re all here!"]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Yes. It took me a while to figure out, but we have all been brought here by the TEMPEST machine."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Visitor, you remember a time in which you let everyone die apart from myself, correct?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Yeah, then you gave me access to the TEMPEST room!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Well, each of these people remembers a different reality, one where they were the only survivor of the fire."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "That\u2019s right."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "I had to wait and do nothing while Chris died!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "I had to wait and do nothing as ALL OF YOU died, time and time again."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [
                      7,
                      [
                        2,
                        "At the end of each of these realities, the survivor entered the TEMPEST machine, which had had its clock set to the beginning of this disaster as a security measure.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "When each of us entered the machine, we were randomly shot into another universe."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [7, [2, "Some of us would have ended up back where we started, and no-one else would remember what had just taken place."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [7, [2, "But there would be a few universes like this, where by chance all of us came from 5 different universes into one."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "And that is how we are all here together now, with memories of different futures."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Woah..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "But, the chances of that happening would be practically zero!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 2]],
                    [
                      7,
                      [
                        2,
                        "Actually, with as many universes as there are, it was incredibly likely. There are probably hundreds of universes in which the same thing has happened as is happening here.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Nothing about this seems \u201cincredibly likely\u201d."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "But it is the truth."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 0]],
                    [7, [2, "URGENT. Please enter your security system orders immediately. The chat system has been locked until your decision is made."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 4]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 8]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "sectionO"]]]]],
            [
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 9]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "The fire has been contained."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Hey, guys, all of your paths meet up here, right?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "They do?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "I suppose they must."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Beginning scan, ground floor."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "Soon, we\u2019ll all be able to talk in-person!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "No fire detected."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "I can\u2019t wait to see you again Chris! I\u2019m so glad you\u2019re safe."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "I can't either, Steve. I can't believe you're alive!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "You're both alive..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 2]], [7, [2, "Well hurry up then! I\u2019m already there."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 4]], [7, [2, "Okay, coming through now. I can see you!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "I\u2019m in!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 3]], [7, [2, "Me too!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Hey, has anyone unlocked the door for me so I can come down too?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Hello? Anyone?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Guys! Stop talking in person for second and look at your messages damnit!"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Typical... now what do I do?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Visitor?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Christina! Can you ask Lionel to open the door for me?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "No, sorry, I don\u2019t think I\u2019ll have the chance to."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Is something wrong? Where are you?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "I stepped out for a moment. I\u2019m at the TEMPEST entrance."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "I haven\u2019t been entirely up-front with all of you."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What do you mean?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 1]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "I\u2019ve been here before."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Weren\u2019t you listening to Lionel? We\u2019ve all been here before."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "No, I\u2019ve been HERE before. To a timeline just like this one, where we all managed to survive."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Except, things went a little differently that time."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 1]],
                    [
                      7,
                      [
                        2,
                        "For instance, I asked Lionel where the controls for the TEMPEST machine were, and he told me they were on floor B2, in my section of the building.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 1]],
                    [
                      7,
                      [
                        2,
                        "Later he explained that the machine can\u2019t send consciousnesses back before the first time it was turned on, which was when my mother was sent back through time.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "So, I thought I\u2019d give things another try, and I hopped back in the TEMPEST machine."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Don\u2019t tell me..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 1]],
                    [7, [2, "This time, while we were on floor B2, I set the time machine back as far is it could go, to the moment I lost my mother."]],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "I\u2019m going back. I\u2019m going back 3 years to find my mother."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "This is crazy! What if you just end up in another universe where she disappeared?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Then I\u2019ll break into here, I\u2019ll travel again."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "What about the people who care about you in this universe!? What about Steve?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [
                    13,
                    [7, [0, 1]],
                    [
                      7,
                      [
                        2,
                        "You should know better than anyone what this feels like. You\u2019ve had to choose one person\u2019s happiness over another\u2019s time and time again.",
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 10]], [7, [0, 3]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "In the timeline you came from, you even chose to kill me."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "I wish I could have Steve and my mother both at once. But I don\u2019t have that choice."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "I\u2019ve spent too long wishing she was with me to turn back now."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Besides, in this world I\u2019m a murderer, an arsonist. There\u2019s no place for me here."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Christina..."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "You\u2019re not going to stop me, are you?"]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "...no, no I\u2019m not."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Tell Steve I\u2019m sorry, and that I love him. Tell him that I hope we meet again somewhere, sometime."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "But for now, goodbye."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 5]], [7, [2, "Goodbye. And, good luck."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 1]], [7, [2, "Thanks. I think I\u2019ll need it."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 7]], [7, [0, 0]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Christina has disconnected. Reason: signal lost."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 0]], [7, [2, "Visitor has disconnected."]]],
                ],
              ],
              [
                0,
                S.prototype.a.CallFunction,
                c,
                [
                  [1, [2, "addOrder"]],
                  [13, [7, [0, 8]]],
                ],
              ],
            ],
          ],
        ],
      ],
      [
        "BranchesEvents",
        [
          [1, "currentBranch", 1, "E", f, f],
          [
            0,
            c,
            f,
            [[12, W.prototype.c.zb, c, 1, f, f, f, [[4, 26]]]],
            [
              [
                26,
                T.prototype.a.H,
                c,
                [
                  [1, [10, [21, 26, a, c, 0], [2, "2"]]],
                  [3, 1],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "currentBranch"],
                  [7, [21, 26, a, c, 0]],
                ],
              ],
              [-1, A.prototype.a.h, c, [[0, [0, 0]]]],
              [
                28,
                R.prototype.a.k,
                c,
                [
                  [3, 0],
                  [1, [2, "click"]],
                  [3, 0],
                  [0, [0, 0]],
                  [1, [2, ""]],
                ],
              ],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "fadeOut"]], [13]]],
              [-1, A.prototype.a.h, c, [[0, [1, 1.1]]]],
              [-1, A.prototype.a.q, c, [[6, "Dialogue"]]],
            ],
          ],
          [
            0,
            c,
            f,
            [[-1, A.prototype.c.je, c, 1, f, f, f]],
            [],
            [
              [
                0,
                c,
                f,
                [[-1, A.prototype.c.Pb, c, 0, a, f, f, [[4, 26]]]],
                [],
                [
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.Ob,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [7, [19, A.prototype.d["int"], [[20, 27, Y.prototype.d.Fc, a, c, [[10, [2, "Unlocked"], [21, 26, a, c, 0]]]]]]],
                          [8, 0],
                          [7, [0, 0]],
                        ],
                      ],
                      [
                        26,
                        T.prototype.c.o,
                        c,
                        0,
                        f,
                        a,
                        f,
                        [
                          [10, 0],
                          [8, 0],
                          [7, [2, "A"]],
                        ],
                      ],
                      [
                        26,
                        T.prototype.c.o,
                        c,
                        0,
                        f,
                        a,
                        f,
                        [
                          [10, 0],
                          [8, 0],
                          [7, [2, "L"]],
                        ],
                      ],
                    ],
                    [[26, T.prototype.a.ib, c]],
                  ],
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        26,
                        T.prototype.c.o,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [10, 0],
                          [8, 0],
                          [7, [2, "L"]],
                        ],
                      ],
                      [
                        -1,
                        A.prototype.c.Ob,
                        c,
                        0,
                        f,
                        f,
                        f,
                        [
                          [7, [19, A.prototype.d["int"], [[20, 27, Y.prototype.d.Fc, a, c, [[2, "UnlockedEnding"]]]]]],
                          [8, 0],
                          [7, [0, 0]],
                        ],
                      ],
                    ],
                    [[26, T.prototype.a.ib, c]],
                  ],
                  [
                    0,
                    c,
                    f,
                    [],
                    [
                      [
                        26,
                        T.prototype.a.H,
                        c,
                        [
                          [1, [21, 26, a, c, 0]],
                          [3, 1],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.Ob,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [7, [19, A.prototype.d["int"], [[20, 27, Y.prototype.d.Fc, a, c, [[2, "UnlockedEnding"]]]]]],
                      [8, 0],
                      [7, [0, 1]],
                    ],
                  ],
                ],
                [[25, ac.prototype.a.ib, c]],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "fadeOut"]]]]],
            [[-1, A.prototype.a.h, c, [[0, [0, 0]]]]],
            [
              [1, "fadeCounter", 0, 0, f, f],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.Oa,
                    c,
                    0,
                    a,
                    f,
                    f,
                    [
                      [1, [2, ""]],
                      [0, [0, 0]],
                      [0, [0, 100]],
                    ],
                  ],
                ],
                [
                  [-1, A.prototype.a.h, c, [[0, [7, [19, A.prototype.d.Qa], [0, 100]]]]],
                  [
                    -1,
                    A.prototype.a.Na,
                    c,
                    [
                      [11, "fadeCounter"],
                      [7, [0, 1]],
                    ],
                  ],
                  [
                    28,
                    R.prototype.a.Qf,
                    c,
                    [
                      [1, [2, "music"]],
                      [0, [5, [0, -10], [23, "fadeCounter"]]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [],
                [
                  [-1, A.prototype.a.h, c, [[0, [0, 1]]]],
                  [28, R.prototype.a.le, c, [[1, [2, "music"]]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[12, W.prototype.c.zb, c, 1, f, f, f, [[4, 35]]]],
            [
              [
                28,
                R.prototype.a.k,
                c,
                [
                  [3, 0],
                  [1, [2, "click"]],
                  [3, 0],
                  [0, [0, 0]],
                  [1, [2, ""]],
                ],
              ],
              [-1, A.prototype.a.q, c, [[6, "DeleteFile"]]],
            ],
          ],
        ],
      ],
      [
        "StartEvents",
        [
          [
            0,
            c,
            f,
            [[-1, A.prototype.c.je, c, 1, f, f, f]],
            [
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 1],
                  [1, [2, "Tragedy"]],
                ],
              ],
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 1],
                  [1, [2, "Bizarre"]],
                ],
              ],
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 1],
                  [1, [2, "Mystery"]],
                ],
              ],
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 1],
                  [1, [2, "Fire"]],
                ],
              ],
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 1],
                  [1, [2, "Light"]],
                ],
              ],
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 0],
                  [1, [2, "Christina"]],
                ],
              ],
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 0],
                  [1, [2, "click"]],
                ],
              ],
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 0],
                  [1, [2, "die"]],
                ],
              ],
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 0],
                  [1, [2, "flames"]],
                ],
              ],
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 0],
                  [1, [2, "Lionel"]],
                ],
              ],
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 0],
                  [1, [2, "move"]],
                ],
              ],
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 0],
                  [1, [2, "Steve"]],
                ],
              ],
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 0],
                  [1, [2, "switch"]],
                ],
              ],
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 0],
                  [1, [2, "system"]],
                ],
              ],
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 0],
                  [1, [2, "transition"]],
                ],
              ],
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 0],
                  [1, [2, "Troy"]],
                ],
              ],
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 0],
                  [1, [2, "Visitor"]],
                ],
              ],
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 0],
                  [1, [2, "water"]],
                ],
              ],
              [
                28,
                R.prototype.a.Ia,
                c,
                [
                  [3, 0],
                  [1, [2, "win"]],
                ],
              ],
            ],
            [
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.Ob,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [7, [19, A.prototype.d["int"], [[20, 27, Y.prototype.d.Fc, a, c, [[2, "UnlockedO"]]]]]],
                      [8, 0],
                      [7, [0, 1]],
                    ],
                  ],
                ],
                [
                  [
                    43,
                    $b.prototype.a.Pj,
                    c,
                    [
                      [1, [2, "end"]],
                      [0, [0, 1]],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[28, R.prototype.c.em, c, 0, f, f, f]],
            [
              [
                28,
                R.prototype.a.k,
                c,
                [
                  [3, 1],
                  [1, [2, "Bizarre"]],
                  [3, 1],
                  [0, [0, -10]],
                  [1, [2, "music"]],
                ],
              ],
              [-1, A.prototype.a.h, c, [[0, [0, 1]]]],
              [-1, A.prototype.a.q, c, [[6, "Branches"]]],
            ],
          ],
        ],
      ],
      [
        "BranchConditions",
        [
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setA"]]]]],
            [
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "ChristinaAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "LionelAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "TroyAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "SteveAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "floorNumber"],
                  [7, [0, 0]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "locksAllowed"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "deathsAllowed"],
                  [7, [0, 1]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setB"]]]]],
            [
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "ChristinaAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "LionelAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "TroyAlive"],
                  [7, [0, 0]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "SteveAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "floorNumber"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "locksAllowed"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "deathsAllowed"],
                  [7, [0, 1]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setC"]]]]],
            [
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "ChristinaAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "LionelAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "TroyAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "SteveAlive"],
                  [7, [0, 0]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "floorNumber"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "locksAllowed"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "deathsAllowed"],
                  [7, [0, 1]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setD"]]]]],
            [
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "ChristinaAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "LionelAlive"],
                  [7, [0, 0]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "TroyAlive"],
                  [7, [0, 0]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "SteveAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "floorNumber"],
                  [7, [0, 2]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "locksAllowed"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "deathsAllowed"],
                  [7, [0, 1]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setE"]]]]],
            [
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "ChristinaAlive"],
                  [7, [0, 0]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "LionelAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "TroyAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "SteveAlive"],
                  [7, [0, 0]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "floorNumber"],
                  [7, [0, 2]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "locksAllowed"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "deathsAllowed"],
                  [7, [0, 1]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setF"]]]]],
            [
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "ChristinaAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "LionelAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "TroyAlive"],
                  [7, [0, 0]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "SteveAlive"],
                  [7, [0, 0]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "floorNumber"],
                  [7, [0, 2]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "locksAllowed"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "deathsAllowed"],
                  [7, [0, 2]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setG"]]]]],
            [
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "ChristinaAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "LionelAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "TroyAlive"],
                  [7, [0, 0]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "SteveAlive"],
                  [7, [0, 0]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "floorNumber"],
                  [7, [0, 2]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "locksAllowed"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "deathsAllowed"],
                  [7, [0, 2]],
                ],
              ],
            ],
          ],
          [0, c, f, [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setH"]]]]], []],
          [0, c, f, [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setI"]]]]], []],
          [0, c, f, [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setJ"]]]]], []],
          [0, c, f, [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setK"]]]]], []],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setL"]]]]],
            [
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "ChristinaAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "LionelAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "TroyAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "SteveAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "floorNumber"],
                  [7, [0, 0]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "locksAllowed"],
                  [7, [0, 4]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "deathsAllowed"],
                  [7, [0, 0]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setM"]]]]],
            [
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "ChristinaAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "LionelAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "TroyAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "SteveAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "floorNumber"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "locksAllowed"],
                  [7, [0, 4]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "deathsAllowed"],
                  [7, [0, 0]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setN"]]]]],
            [
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "ChristinaAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "LionelAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "TroyAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "SteveAlive"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "floorNumber"],
                  [7, [0, 2]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "locksAllowed"],
                  [7, [0, 4]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "deathsAllowed"],
                  [7, [0, 0]],
                ],
              ],
            ],
          ],
          [0, c, f, [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setO"]]]]], []],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setRoom0"]]]]],
            [
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "activeTiles"],
                  [
                    7,
                    [
                      2,
                      "1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 0, 1, 8, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 6, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,",
                    ],
                  ],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "ChristinaX"],
                  [7, [0, 3]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "ChristinaY"],
                  [7, [0, 2]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "LionelX"],
                  [7, [0, 8]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "LionelY"],
                  [7, [0, 3]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "TroyX"],
                  [7, [0, 5]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "TroyY"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "SteveX"],
                  [7, [0, 5]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "SteveY"],
                  [7, [0, 5]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setRoom1"]]]]],
            [
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "activeTiles"],
                  [
                    7,
                    [
                      2,
                      "1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 4, 1, 1, 1, 1, 1, 1, 1, 6, 0, 8, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 8, 1, 1, 1, 1, 1, 1, 6, 0, 0, 8, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1",
                    ],
                  ],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "ChristinaX"],
                  [7, [0, 7]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "ChristinaY"],
                  [7, [0, 6]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "LionelX"],
                  [7, [0, 5]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "LionelY"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "TroyX"],
                  [7, [0, 7]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "TroyY"],
                  [7, [0, 2]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "SteveX"],
                  [7, [0, 5]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "SteveY"],
                  [7, [0, 7]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "setRoom2"]]]]],
            [
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "activeTiles"],
                  [
                    7,
                    [
                      2,
                      "1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 6, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 8, 2, 8, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 4, 0, 1, 8, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 6, 1, 1, 1, 1, 1, 1, 2, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1",
                    ],
                  ],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "ChristinaX"],
                  [7, [0, 4]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "ChristinaY"],
                  [7, [0, 1]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "LionelX"],
                  [7, [0, 7]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "LionelY"],
                  [7, [0, 6]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "TroyX"],
                  [7, [0, 7]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "TroyY"],
                  [7, [0, 2]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "SteveX"],
                  [7, [0, 4]],
                ],
              ],
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "SteveY"],
                  [7, [0, 8]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "winA"]]]]],
            [],
            [
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "SteveAlive"],
                      [8, 0],
                      [7, [0, 1]],
                    ],
                  ],
                ],
                [
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "currentBranch"],
                      [7, [2, "B"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [[-1, A.prototype.c.ca, c, 0, f, f, f]],
                [
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "currentBranch"],
                      [7, [2, "C"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [],
                [
                  [
                    22,
                    H.prototype.a.ga,
                    c,
                    [
                      [0, [0, 0]],
                      [0, [0, 3]],
                      [0, [0, 1]],
                    ],
                  ],
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "fadeOutBGM"]], [13]]],
                  [-1, A.prototype.a.h, c, [[0, [0, 2]]]],
                  [-1, A.prototype.a.q, c, [[6, "Dialogue"]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "winB"]]]]],
            [],
            [
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "SteveAlive"],
                      [8, 0],
                      [7, [0, 1]],
                    ],
                  ],
                ],
                [
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "currentBranch"],
                      [7, [2, "D"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [[-1, A.prototype.c.ca, c, 0, f, f, f]],
                [
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "currentBranch"],
                      [7, [2, "F"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [],
                [
                  [
                    22,
                    H.prototype.a.ga,
                    c,
                    [
                      [0, [0, 0]],
                      [0, [0, 3]],
                      [0, [0, 1]],
                    ],
                  ],
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "fadeOutBGM"]], [13]]],
                  [-1, A.prototype.a.h, c, [[0, [0, 2]]]],
                  [-1, A.prototype.a.q, c, [[6, "Dialogue"]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "winC"]]]]],
            [],
            [
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "TroyAlive"],
                      [8, 0],
                      [7, [0, 1]],
                    ],
                  ],
                ],
                [
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "currentBranch"],
                      [7, [2, "E"]],
                    ],
                  ],
                  [
                    22,
                    H.prototype.a.ga,
                    c,
                    [
                      [0, [0, 0]],
                      [0, [0, 3]],
                      [0, [0, 1]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [[-1, A.prototype.c.ca, c, 0, f, f, f]],
                [
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "currentBranch"],
                      [7, [2, "G"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [],
                [
                  [
                    22,
                    H.prototype.a.ga,
                    c,
                    [
                      [0, [0, 0]],
                      [0, [0, 3]],
                      [0, [0, 1]],
                    ],
                  ],
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "fadeOutBGM"]], [13]]],
                  [-1, A.prototype.a.h, c, [[0, [0, 2]]]],
                  [-1, A.prototype.a.q, c, [[6, "Dialogue"]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "winD"]]]]],
            [],
            [
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "SteveAlive"],
                      [8, 0],
                      [7, [0, 1]],
                    ],
                  ],
                ],
                [
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "currentBranch"],
                      [7, [2, "H"]],
                    ],
                  ],
                  [
                    22,
                    H.prototype.a.ga,
                    c,
                    [
                      [0, [0, 0]],
                      [0, [0, 3]],
                      [0, [0, 1]],
                    ],
                  ],
                  [-1, A.prototype.a.h, c, [[0, [0, 1]]]],
                  [-1, A.prototype.a.q, c, [[6, "Dialogue"]]],
                ],
              ],
              [
                0,
                c,
                f,
                [[-1, A.prototype.c.ca, c, 0, f, f, f]],
                [
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "currentBranch"],
                      [7, [2, "I"]],
                    ],
                  ],
                  [
                    22,
                    H.prototype.a.ga,
                    c,
                    [
                      [0, [0, 0]],
                      [0, [0, 3]],
                      [0, [0, 1]],
                    ],
                  ],
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "fadeOutBGM"]], [13]]],
                  [-1, A.prototype.a.h, c, [[0, [0, 2]]]],
                  [28, R.prototype.a.le, c, [[1, [2, "music"]]]],
                  [-1, A.prototype.a.q, c, [[6, "Dialogue"]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "winE"]]]]],
            [],
            [
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "TroyAlive"],
                      [8, 0],
                      [7, [0, 1]],
                    ],
                  ],
                ],
                [
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "currentBranch"],
                      [7, [2, "J"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [[-1, A.prototype.c.ca, c, 0, f, f, f]],
                [
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "currentBranch"],
                      [7, [2, "K"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [],
                [
                  [
                    22,
                    H.prototype.a.ga,
                    c,
                    [
                      [0, [0, 0]],
                      [0, [0, 3]],
                      [0, [0, 1]],
                    ],
                  ],
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "fadeOutBGM"]], [13]]],
                  [-1, A.prototype.a.h, c, [[0, [0, 2]]]],
                  [-1, A.prototype.a.q, c, [[6, "Dialogue"]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "winF"]]]]],
            [
              [0, S.prototype.a.CallFunction, c, [[1, [2, "fadeOutBGM"]], [13]]],
              [
                22,
                H.prototype.a.ga,
                c,
                [
                  [0, [0, 0]],
                  [0, [0, 3]],
                  [0, [0, 1]],
                ],
              ],
            ],
            [
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.Oa,
                    c,
                    0,
                    a,
                    f,
                    f,
                    [
                      [1, [2, ""]],
                      [0, [0, 1]],
                      [0, [0, 1e3]],
                    ],
                  ],
                ],
                [
                  [-1, A.prototype.a.h, c, [[0, [7, [0, 2], [19, A.prototype.d.Qa]]]]],
                  [
                    -1,
                    A.prototype.a.ub,
                    c,
                    [
                      [5, [2, "Black"]],
                      [0, [4, [19, A.prototype.d.md, [[2, "Black"]]], [1, 0.1]]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [],
                [
                  [-1, A.prototype.a.h, c, [[0, [0, 2]]]],
                  [-1, A.prototype.a.q, c, [[6, "Endings"]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "winG"]]]]],
            [
              [0, S.prototype.a.CallFunction, c, [[1, [2, "fadeOutBGM"]], [13]]],
              [
                22,
                H.prototype.a.ga,
                c,
                [
                  [0, [0, 0]],
                  [0, [0, 3]],
                  [0, [0, 1]],
                ],
              ],
            ],
            [
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.Oa,
                    c,
                    0,
                    a,
                    f,
                    f,
                    [
                      [1, [2, ""]],
                      [0, [0, 1]],
                      [0, [0, 1e3]],
                    ],
                  ],
                ],
                [
                  [-1, A.prototype.a.h, c, [[0, [7, [0, 2], [19, A.prototype.d.Qa]]]]],
                  [
                    -1,
                    A.prototype.a.ub,
                    c,
                    [
                      [5, [2, "Black"]],
                      [0, [4, [19, A.prototype.d.md, [[2, "Black"]]], [1, 0.1]]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [],
                [
                  [-1, A.prototype.a.h, c, [[0, [0, 2]]]],
                  [-1, A.prototype.a.q, c, [[6, "Endings"]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "winL"]]]]],
            [],
            [
              [
                0,
                c,
                f,
                [],
                [
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "currentBranch"],
                      [7, [2, "M"]],
                    ],
                  ],
                  [
                    22,
                    H.prototype.a.ga,
                    c,
                    [
                      [0, [0, 0]],
                      [0, [0, 3]],
                      [0, [0, 1]],
                    ],
                  ],
                  [-1, A.prototype.a.h, c, [[0, [0, 1]]]],
                  [-1, A.prototype.a.q, c, [[6, "Dialogue"]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "winM"]]]]],
            [],
            [
              [
                0,
                c,
                f,
                [],
                [
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "currentBranch"],
                      [7, [2, "N"]],
                    ],
                  ],
                  [
                    22,
                    H.prototype.a.ga,
                    c,
                    [
                      [0, [0, 0]],
                      [0, [0, 3]],
                      [0, [0, 1]],
                    ],
                  ],
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "fadeOutBGM"]], [13]]],
                  [-1, A.prototype.a.h, c, [[0, [0, 2]]]],
                  [-1, A.prototype.a.q, c, [[6, "Dialogue"]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "winN"]]]]],
            [],
            [
              [
                0,
                c,
                f,
                [],
                [
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "currentBranch"],
                      [7, [2, "O"]],
                    ],
                  ],
                  [
                    22,
                    H.prototype.a.ga,
                    c,
                    [
                      [0, [0, 0]],
                      [0, [0, 3]],
                      [0, [0, 1]],
                    ],
                  ],
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "fadeOutBGM"]], [13]]],
                  [-1, A.prototype.a.h, c, [[0, [0, 2]]]],
                  [-1, A.prototype.a.q, c, [[6, "Dialogue"]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "fadeOutBGM"]]]]],
            [[-1, A.prototype.a.h, c, [[0, [0, 0]]]]],
            [
              [1, "fadeCounter", 0, 0, f, f],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.Oa,
                    c,
                    0,
                    a,
                    f,
                    f,
                    [
                      [1, [2, ""]],
                      [0, [0, 0]],
                      [0, [0, 100]],
                    ],
                  ],
                ],
                [
                  [-1, A.prototype.a.h, c, [[0, [7, [19, A.prototype.d.Qa], [0, 50]]]]],
                  [
                    -1,
                    A.prototype.a.Na,
                    c,
                    [
                      [11, "fadeCounter"],
                      [7, [0, 1]],
                    ],
                  ],
                  [
                    28,
                    R.prototype.a.Qf,
                    c,
                    [
                      [1, [2, "music"]],
                      [0, [5, [0, -10], [23, "fadeCounter"]]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [],
                [
                  [-1, A.prototype.a.h, c, [[0, [1, 1.9]]]],
                  [28, R.prototype.a.le, c, [[1, [2, "music"]]]],
                ],
              ],
            ],
          ],
        ],
      ],
      [
        "DeleteFileEvents",
        [
          [
            0,
            c,
            f,
            [[12, W.prototype.c.zb, c, 1, f, f, f, [[4, 37]]]],
            [
              [
                28,
                R.prototype.a.k,
                c,
                [
                  [3, 0],
                  [1, [2, "click"]],
                  [3, 0],
                  [0, [0, 0]],
                  [1, [2, ""]],
                ],
              ],
              [27, Y.prototype.a.Pl, c],
              [-1, A.prototype.a.fm, c],
              [-1, A.prototype.a.q, c, [[6, "Branches"]]],
            ],
          ],
          [
            0,
            c,
            f,
            [[12, W.prototype.c.zb, c, 1, f, f, f, [[4, 38]]]],
            [
              [
                28,
                R.prototype.a.k,
                c,
                [
                  [3, 0],
                  [1, [2, "click"]],
                  [3, 0],
                  [0, [0, 0]],
                  [1, [2, ""]],
                ],
              ],
              [-1, A.prototype.a.q, c, [[6, "Branches"]]],
            ],
          ],
        ],
      ],
      [
        "EndingsEvents",
        [
          [1, "waitForTouch", 0, 0, f, f],
          [
            0,
            c,
            f,
            [[-1, A.prototype.c.je, c, 1, f, f, f]],
            [
              [
                39,
                T.prototype.a.H,
                c,
                [
                  [1, [23, "currentBranch"]],
                  [3, 1],
                ],
              ],
              [
                27,
                Y.prototype.a.jc,
                c,
                [
                  [1, [10, [2, "Unlocked"], [23, "currentBranch"]]],
                  [7, [2, "1"]],
                ],
              ],
            ],
            [
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.Ob,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [7, [19, A.prototype.d["int"], [[20, 27, Y.prototype.d.Fc, a, c, [[2, "UnlockedH"]]]]]],
                      [8, 0],
                      [7, [0, 1]],
                    ],
                  ],
                  [
                    -1,
                    A.prototype.c.Ob,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [7, [19, A.prototype.d["int"], [[20, 27, Y.prototype.d.Fc, a, c, [[2, "UnlockedI"]]]]]],
                      [8, 0],
                      [7, [0, 1]],
                    ],
                  ],
                  [
                    -1,
                    A.prototype.c.Ob,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [7, [19, A.prototype.d["int"], [[20, 27, Y.prototype.d.Fc, a, c, [[2, "UnlockedJ"]]]]]],
                      [8, 0],
                      [7, [0, 1]],
                    ],
                  ],
                  [
                    -1,
                    A.prototype.c.Ob,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [7, [19, A.prototype.d["int"], [[20, 27, Y.prototype.d.Fc, a, c, [[2, "UnlockedK"]]]]]],
                      [8, 0],
                      [7, [0, 1]],
                    ],
                  ],
                ],
                [
                  [
                    40,
                    T.prototype.a.H,
                    c,
                    [
                      [1, [2, "Special"]],
                      [3, 1],
                    ],
                  ],
                  [
                    27,
                    Y.prototype.a.jc,
                    c,
                    [
                      [1, [2, "UnlockedEnding"]],
                      [7, [2, "1"]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 0],
                      [7, [2, "O"]],
                    ],
                  ],
                ],
                [
                  [
                    43,
                    $b.prototype.a.Pj,
                    c,
                    [
                      [1, [2, "end"]],
                      [0, [0, 1]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [],
                [
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "fadeInEnding"]], [13]]],
                  [-1, A.prototype.a.h, c, [[0, [1, 3]]]],
                  [0, S.prototype.a.CallFunction, c, [[1, [2, "fadeInExtra"]], [13]]],
                  [-1, A.prototype.a.h, c, [[0, [1, 3]]]],
                  [
                    -1,
                    A.prototype.a.e,
                    c,
                    [
                      [11, "waitForTouch"],
                      [7, [0, 1]],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [
              [12, W.prototype.c.wh, c, 1, f, f, f],
              [
                -1,
                A.prototype.c.g,
                c,
                0,
                f,
                f,
                f,
                [
                  [11, "waitForTouch"],
                  [8, 0],
                  [7, [0, 1]],
                ],
              ],
            ],
            [
              [
                -1,
                A.prototype.a.e,
                c,
                [
                  [11, "waitForTouch"],
                  [7, [0, 0]],
                ],
              ],
              [0, S.prototype.a.CallFunction, c, [[1, [2, "fadeOut"]], [13]]],
              [-1, A.prototype.a.h, c, [[0, [1, 3]]]],
              [
                28,
                R.prototype.a.k,
                c,
                [
                  [3, 1],
                  [1, [2, "Bizarre"]],
                  [3, 1],
                  [0, [0, -10]],
                  [1, [2, "music"]],
                ],
              ],
              [-1, A.prototype.a.q, c, [[6, "Branches"]]],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "fadeInEnding"]]]]],
            [],
            [
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.Oa,
                    c,
                    0,
                    a,
                    f,
                    f,
                    [
                      [1, [2, ""]],
                      [0, [0, 1]],
                      [0, [0, 100]],
                    ],
                  ],
                ],
                [
                  [-1, A.prototype.a.h, c, [[0, [7, [19, A.prototype.d.Qa], [0, 45]]]]],
                  [39, T.prototype.a.ed, c, [[0, [4, [20, 39, T.prototype.d.Opacity, f, c], [0, 1]]]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "fadeInExtra"]]]]],
            [],
            [
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.g,
                    c,
                    0,
                    f,
                    f,
                    f,
                    [
                      [11, "currentBranch"],
                      [8, 1],
                      [7, [2, "O"]],
                    ],
                  ],
                ],
                [],
                [
                  [
                    0,
                    c,
                    f,
                    [
                      [
                        -1,
                        A.prototype.c.Oa,
                        c,
                        0,
                        a,
                        f,
                        f,
                        [
                          [1, [2, ""]],
                          [0, [0, 1]],
                          [0, [0, 100]],
                        ],
                      ],
                    ],
                    [
                      [-1, A.prototype.a.h, c, [[0, [7, [19, A.prototype.d.Qa], [0, 45]]]]],
                      [40, T.prototype.a.ed, c, [[0, [4, [20, 40, T.prototype.d.Opacity, f, c], [0, 1]]]]],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "fadeOut"]]]]],
            [],
            [
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.Oa,
                    c,
                    0,
                    a,
                    f,
                    f,
                    [
                      [1, [2, ""]],
                      [0, [0, 1]],
                      [0, [0, 100]],
                    ],
                  ],
                ],
                [
                  [-1, A.prototype.a.h, c, [[0, [7, [19, A.prototype.d.Qa], [0, 45]]]]],
                  [39, T.prototype.a.ed, c, [[0, [5, [20, 39, T.prototype.d.Opacity, f, c], [0, 1]]]]],
                  [40, T.prototype.a.ed, c, [[0, [5, [20, 40, T.prototype.d.Opacity, f, c], [0, 1]]]]],
                ],
              ],
            ],
          ],
          [
            0,
            c,
            f,
            [[0, S.prototype.c.i, c, 2, f, f, f, [[1, [2, "fadeOutBGM"]]]]],
            [[-1, A.prototype.a.h, c, [[0, [0, 0]]]]],
            [
              [1, "fadeCounter", 0, 0, f, f],
              [
                0,
                c,
                f,
                [
                  [
                    -1,
                    A.prototype.c.Oa,
                    c,
                    0,
                    a,
                    f,
                    f,
                    [
                      [1, [2, ""]],
                      [0, [0, 0]],
                      [0, [0, 100]],
                    ],
                  ],
                ],
                [
                  [-1, A.prototype.a.h, c, [[0, [7, [19, A.prototype.d.Qa], [0, 150]]]]],
                  [
                    -1,
                    A.prototype.a.Na,
                    c,
                    [
                      [11, "fadeCounter"],
                      [7, [0, 1]],
                    ],
                  ],
                  [
                    28,
                    R.prototype.a.Qf,
                    c,
                    [
                      [1, [2, "music"]],
                      [0, [5, [0, -10], [7, [23, "fadeCounter"], [0, 2]]]],
                    ],
                  ],
                ],
              ],
              [
                0,
                c,
                f,
                [],
                [
                  [-1, A.prototype.a.h, c, [[0, [1, 0.7]]]],
                  [28, R.prototype.a.le, c, [[1, [2, "music"]]]],
                ],
              ],
            ],
          ],
        ],
      ],
    ],
    "media/",
    a,
    640,
    480,
    0,
    a,
    f,
    a,
    "1.0",
    2,
    f,
    0,
    f,
    [],
  ]
}
