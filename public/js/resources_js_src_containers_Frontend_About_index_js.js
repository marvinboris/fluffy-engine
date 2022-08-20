(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_containers_Frontend_About_index_js"],{

/***/ "./resources/js/src/assets/js/tagcanvas.min.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/js/tagcanvas.min.js ***!
  \*****************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Copyright (C) 2010-2021 Graham Breach
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * TagCanvas 2.11
 * For more information, please contact <graham@goat1000.com>
 */
(function () {
  "use strict";

  var r,
      C,
      p = Math.abs,
      o = Math.sin,
      l = Math.cos,
      g = Math.max,
      h = Math.min,
      af = Math.ceil,
      E = Math.sqrt,
      w = Math.pow,
      I = {},
      D = {},
      R = {
    0: "0,",
    1: "17,",
    2: "34,",
    3: "51,",
    4: "68,",
    5: "85,",
    6: "102,",
    7: "119,",
    8: "136,",
    9: "153,",
    a: "170,",
    A: "170,",
    b: "187,",
    B: "187,",
    c: "204,",
    C: "204,",
    d: "221,",
    D: "221,",
    e: "238,",
    E: "238,",
    f: "255,",
    F: "255,"
  },
      f,
      d,
      b,
      T,
      z,
      F,
      M,
      c = document,
      v,
      e,
      _P,
      j = {};

  for (r = 0; r < 256; ++r) {
    C = r.toString(16), r < 16 && (C = '0' + C), D[C] = D[C.toUpperCase()] = r.toString() + ',';
  }

  function n(a) {
    return typeof a != 'undefined';
  }

  function B(a) {
    return _typeof(a) == 'object' && a != null;
  }

  function G(a, c, b) {
    return isNaN(a) ? b : h(b, g(c, a));
  }

  function x() {
    return !1;
  }

  function q() {
    return new Date().valueOf();
  }

  function ak(c, d) {
    var b = [],
        e = c.length,
        a;

    for (a = 0; a < e; ++a) {
      b.push(c[a]);
    }

    return b.sort(d), b;
  }

  function ai(a) {
    for (var b = a.length - 1, d, c; b;) {
      c = ~~(Math.random() * b), d = a[b], a[b] = a[c], a[c] = d, --b;
    }
  }

  function ag() {
    var a = window.AudioContext || window.webkitAudioContext;

    if (e = new a(), !e) {
      e = 'off';
      return;
    }

    return e;
  }

  function $(u, a, t, s, r, q, p) {
    var j = s,
        h = r,
        i = t * .01,
        n = 80 * i,
        m = 100 * i,
        o = 40 * i,
        l = 30 * i,
        c = l / 2,
        b = j + n,
        f = b - o,
        k = h + m,
        d = k - l,
        g = h + l,
        e = h + m / 2;

    if (a.setTransform(1, 0, 0, 1, 0, 0), a.setLineDash([]), a.globalAlpha = 1, a.strokeStyle = p, a.lineWidth = q, a.lineJoin = 'round', a.beginPath(), a.moveTo(f, g), a.lineTo(f, d), a.moveTo(b, k), a.lineTo(f, d), a.lineTo(j, d), a.lineTo(j, g), a.lineTo(f, g), a.lineTo(b, h), u) {
      a.lineTo(b, g), a.moveTo(b, d), a.lineTo(b, k), a.moveTo(b - c, e - c), a.lineTo(b + c, e + c), a.moveTo(b + c, e - c), a.lineTo(b - c, e + c), a.stroke();
      return;
    }

    a.closePath(), a.stroke();
  }

  function s(a, b, c) {
    this.x = a, this.y = b, this.z = c;
  }

  z = s.prototype, z.length = function () {
    return E(this.x * this.x + this.y * this.y + this.z * this.z);
  }, z.dot = function (a) {
    return this.x * a.x + this.y * a.y + this.z * a.z;
  }, z.cross = function (a) {
    var b = this.y * a.z - this.z * a.y,
        c = this.z * a.x - this.x * a.z,
        d = this.x * a.y - this.y * a.x;
    return new s(b, c, d);
  }, z.angle = function (b) {
    var c = this.dot(b),
        a;
    return c == 0 ? Math.PI / 2 : (a = c / (this.length() * b.length()), a >= 1) ? 0 : a <= -1 ? Math.PI : Math.acos(a);
  }, z.unit = function () {
    var a = this.length();
    return new s(this.x / a, this.y / a, this.z / a);
  };

  function ay(b, a) {
    a = a * Math.PI / 180, b = b * Math.PI / 180;
    var c = o(b) * l(a),
        d = -o(a),
        e = -l(b) * l(a);
    return new s(c, d, e);
  }

  function m(a) {
    this[1] = {
      1: a[0],
      2: a[1],
      3: a[2]
    }, this[2] = {
      1: a[3],
      2: a[4],
      3: a[5]
    }, this[3] = {
      1: a[6],
      2: a[7],
      3: a[8]
    };
  }

  T = m.prototype, m.Identity = function () {
    return new m([1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }, m.Rotation = function (e, a) {
    var c = o(e),
        d = l(e),
        b = 1 - d;
    return new m([d + w(a.x, 2) * b, a.x * a.y * b - a.z * c, a.x * a.z * b + a.y * c, a.y * a.x * b + a.z * c, d + w(a.y, 2) * b, a.y * a.z * b - a.x * c, a.z * a.x * b - a.y * c, a.z * a.y * b + a.x * c, d + w(a.z, 2) * b]);
  }, T.mul = function (c) {
    var d = [],
        a,
        b,
        e = c.xform ? 1 : 0;

    for (a = 1; a <= 3; ++a) {
      for (b = 1; b <= 3; ++b) {
        e ? d.push(this[a][1] * c[1][b] + this[a][2] * c[2][b] + this[a][3] * c[3][b]) : d.push(this[a][b] * c);
      }
    }

    return new m(d);
  }, T.xform = function (b) {
    var a = {},
        c = b.x,
        d = b.y,
        e = b.z;
    return a.x = c * this[1][1] + d * this[2][1] + e * this[3][1], a.y = c * this[1][2] + d * this[2][2] + e * this[3][2], a.z = c * this[1][3] + d * this[2][3] + e * this[3][3], a;
  };

  function aB(g, j, k, m, f) {
    var a,
        b,
        c,
        d,
        e = [],
        h = 2 / g,
        i;
    i = Math.PI * (3 - E(5) + (parseFloat(f) ? parseFloat(f) : 0));

    for (a = 0; a < g; ++a) {
      b = a * h - 1 + h / 2, c = E(1 - b * b), d = a * i, e.push([l(d) * c * j, b * k, o(d) * c * m]);
    }

    return e;
  }

  function U(n, p, m, k, h, g) {
    var b,
        f = [],
        i = 2 / n,
        j,
        a,
        d,
        c,
        e;
    j = Math.PI * (3 - E(5) + (parseFloat(g) ? parseFloat(g) : 0));

    for (a = 0; a < n; ++a) {
      d = a * i - 1 + i / 2, b = a * j, c = l(b), e = o(b), f.push(p ? [d * m, c * k, e * h] : [c * m, d * k, e * h]);
    }

    return f;
  }

  function aa(k, e, f, h, i, j) {
    var b,
        g = [],
        m = Math.PI * 2 / e,
        a,
        c,
        d;

    for (a = 0; a < e; ++a) {
      b = a * m, c = l(b), d = o(b), g.push(k ? [j * f, c * h, d * i] : [c * f, j * h, d * i]);
    }

    return g;
  }

  function ax(a, b, c, d, e) {
    return U(a, 0, b, c, d, e);
  }

  function aH(a, b, c, d, e) {
    return U(a, 1, b, c, d, e);
  }

  function aG(b, c, d, e, a) {
    return a = isNaN(a) ? 0 : a * 1, aa(0, b, c, d, e, a);
  }

  function aF(b, c, d, e, a) {
    return a = isNaN(a) ? 0 : a * 1, aa(1, b, c, d, e, a);
  }

  function av(b) {
    var a = new Image();
    a.onload = function () {
      var c = a.width / 2,
          d = a.height / 2;

      b.centreFunc = function (b, g, h, e, f) {
        b.setTransform(1, 0, 0, 1, 0, 0), b.globalAlpha = 1, b.drawImage(a, e - c, f - d);
      };
    }, a.src = b.centreImage;
  }

  function aE(a, c) {
    var b = a,
        d,
        e,
        f = (c * 1).toPrecision(3) + ')';
    return a[0] === '#' ? (I[a] || (a.length === 4 ? I[a] = 'rgba(' + R[a[1]] + R[a[2]] + R[a[3]] : I[a] = 'rgba(' + D[a.substr(1, 2)] + D[a.substr(3, 2)] + D[a.substr(5, 2)]), b = I[a] + f) : a.substr(0, 4) === 'rgb(' || a.substr(0, 4) === 'hsl(' ? b = a.replace('(', 'a(').replace(')', ',' + f) : (a.substr(0, 5) === 'rgba(' || a.substr(0, 5) === 'hsla(') && (d = a.lastIndexOf(',') + 1, e = a.indexOf(')'), c *= parseFloat(a.substring(d, e)), b = a.substr(0, d) + c.toPrecision(3) + ')'), b;
  }

  function k(b, d) {
    if (window.G_vmlCanvasManager) return null;
    var a = c.createElement('canvas');
    return a.width = b, a.height = d, a;
  }

  function aD() {
    var b = k(3, 3),
        a,
        c;
    return !!b && (a = b.getContext('2d'), a.strokeStyle = '#000', a.shadowColor = '#fff', a.shadowBlur = 3, a.globalAlpha = 0, a.strokeRect(2, 2, 2, 2), a.globalAlpha = 1, c = a.getImageData(2, 2, 1, 1), b = null, c.data[0] > 0);
  }

  function aC(a, c, f, d) {
    var e = a.createLinearGradient(0, 0, c, 0),
        b;

    for (b in d) {
      e.addColorStop(1 - b, d[b]);
    }

    a.fillStyle = e, a.fillRect(0, f, c, 1);
  }

  function L(a, m, j) {
    var l = 1024,
        d = 1,
        e = a.weightGradient,
        i,
        f,
        b,
        c;
    if (a.gCanvas) f = a.gCanvas.getContext('2d'), d = a.gCanvas.height;else {
      if (B(e[0]) ? d = e.length : e = [e], a.gCanvas = i = k(l, d), !i) return null;
      f = i.getContext('2d');

      for (b = 0; b < d; ++b) {
        aC(f, l, b, e[b]);
      }
    }
    return j = g(h(j || 0, d - 1), 0), c = f.getImageData(~~((l - 1) * m), j, 1, 1).data, 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + c[3] / 255 + ')';
  }

  function Y(b, i, q, k, o, n, h, d, a, g, f, l) {
    var m = o + (d || 0) + (a.length && a[0] < 0 ? p(a[0]) : 0),
        j = n + (d || 0) + (a.length && a[1] < 0 ? p(a[1]) : 0),
        c,
        e;
    b.font = i, b.textBaseline = 'top', b.fillStyle = q, h && (b.shadowColor = h), d && (b.shadowBlur = d), a.length && (b.shadowOffsetX = a[0], b.shadowOffsetY = a[1]);

    for (c = 0; c < k.length; ++c) {
      e = 0, f && ('right' == l ? e = g - f[c] : 'centre' == l && (e = (g - f[c]) / 2)), b.fillText(k[c], m + e, j), j += parseInt(i);
    }
  }

  function y(d, a, b, f, e, c, g) {
    c ? (d.beginPath(), d.moveTo(a, b + e - c), d.arcTo(a, b, a + c, b, c), d.arcTo(a + f, b, a + f, b + c, c), d.arcTo(a + f, b + e, a + f - c, b + e, c), d.arcTo(a, b + e, a, b + e - c, c), d.closePath(), d[g ? 'stroke' : 'fill']()) : d[g ? 'strokeRect' : 'fillRect'](a, b, f, e);
  }

  function O(a, b, c, d, e, f, g, h, i) {
    this.strings = a, this.font = b, this.width = c, this.height = d, this.maxWidth = e, this.stringWidths = f, this.align = g, this.valign = h, this.scale = i;
  }

  M = O.prototype, M.SetImage = function (a, b, c, d, e, f, g, h) {
    this.image = a, this.iwidth = b * this.scale, this.iheight = c * this.scale, this.ipos = d, this.ipad = e * this.scale, this.iscale = h, this.ialign = f, this.ivalign = g;
  }, M.Align = function (c, d, a) {
    var b = 0;
    return a == 'right' || a == 'bottom' ? b = d - c : a != 'left' && a != 'top' && (b = (d - c) / 2), b;
  }, M.Create = function (G, D, F, b, A, m, q, j, E) {
    var o,
        e,
        f,
        a,
        l,
        s,
        i,
        u,
        v,
        r,
        w,
        n,
        c,
        d,
        x,
        B = p(q[0]),
        C = p(q[1]),
        t,
        z;
    return j = g(j, B + m, C + m), l = 2 * (j + b), i = 2 * (j + b), e = this.width + l, f = this.height + i, v = r = j + b, this.image && (w = n = j + b, c = this.iwidth, d = this.iheight, this.ipos == 'top' || this.ipos == 'bottom' ? (c < this.width ? w += this.Align(c, this.width, this.ialign) : v += this.Align(this.width, c, this.align), this.ipos == 'top' ? r += d + this.ipad : n += this.height + this.ipad, e = g(e, c + l), f += d + this.ipad) : (d < this.height ? n += this.Align(d, this.height, this.ivalign) : r += this.Align(this.height, d, this.valign), this.ipos == 'right' ? w += this.width + this.ipad : v += c + this.ipad, e += c + this.ipad, f = g(f, d + i))), o = k(e, f), !o ? null : (l = i = b / 2, s = e - b, u = f - b, x = h(E, s / 2, u / 2), a = o.getContext('2d'), D && (a.fillStyle = D, y(a, l, i, s, u, x)), b && (a.strokeStyle = F, a.lineWidth = b, y(a, l, i, s, u, x, !0)), (m || B || C) && (t = k(e, f), t && (z = a, a = t.getContext('2d'))), Y(a, this.font, G, this.strings, v, r, 0, 0, [], this.maxWidth, this.stringWidths, this.align), this.image && a.drawImage(this.image, w, n, c, d), z && (a = z, A && (a.shadowColor = A), m && (a.shadowBlur = m), a.shadowOffsetX = q[0], a.shadowOffsetY = q[1], a.drawImage(t, 0, 0)), o);
  };

  function H(a, c, d) {
    var b = k(c, d),
        e;
    return b ? (e = b.getContext('2d'), e.drawImage(a, (c - a.width) / 2, (d - a.height) / 2), b) : null;
  }

  function S(e, b, c) {
    var a = k(b, c),
        d;
    return a ? (d = a.getContext('2d'), d.drawImage(e, 0, 0, b, c), a) : null;
  }

  function W(n, u, t, e, s, c, v, d, r, w) {
    var g = u + (2 * d + c) * e,
        f = t + (2 * d + c) * e,
        l = k(g, f),
        b,
        i,
        q,
        m,
        j,
        o,
        a,
        p;
    return l ? (c *= e, r *= e, i = q = c / 2, m = g - c, j = f - c, d = d * e + i, b = l.getContext('2d'), p = h(r, m / 2, j / 2), s && (b.fillStyle = s, y(b, i, q, m, j, p)), c && (b.strokeStyle = v, b.lineWidth = c, y(b, i, q, m, j, p, !0)), w ? (o = k(g, f), a = o.getContext('2d'), a.drawImage(n, d, d, u, t), a.globalCompositeOperation = 'source-in', a.fillStyle = v, a.fillRect(0, 0, g, f), a.globalCompositeOperation = 'destination-over', a.drawImage(l, 0, 0), a.globalCompositeOperation = 'source-over', b.drawImage(o, 0, 0)) : b.drawImage(n, d, d, n.width, n.height), {
      image: l,
      width: g / e,
      height: f / e
    }) : null;
  }

  function at(l, f, c, d, j) {
    var e,
        a,
        b = parseFloat(f),
        i = g(c, d);
    return e = k(c, d), !e ? null : (f.indexOf('%') > 0 ? b = i * b / 100 : b = b * j, a = e.getContext('2d'), a.globalCompositeOperation = 'source-over', a.fillStyle = '#fff', b >= i / 2 ? (b = h(c, d) / 2, a.beginPath(), a.moveTo(c / 2, d / 2), a.arc(c / 2, d / 2, b, 0, 2 * Math.PI, !1), a.fill(), a.closePath()) : (b = h(c / 2, d / 2, b), y(a, 0, 0, c, d, b, !0), a.fill()), a.globalCompositeOperation = 'source-in', a.drawImage(l, 0, 0, c, d), e);
  }

  function ao(q, m, i, b, h, a, c) {
    var g = p(c[0]),
        f = p(c[1]),
        j = m + (g > a ? g + a : a * 2) * b,
        l = i + (f > a ? f + a : a * 2) * b,
        n = b * ((a || 0) + (c[0] < 0 ? g : 0)),
        o = b * ((a || 0) + (c[1] < 0 ? f : 0)),
        e,
        d;
    return e = k(j, l), !e ? null : (d = e.getContext('2d'), h && (d.shadowColor = h), a && (d.shadowBlur = a * b), c && (d.shadowOffsetX = c[0] * b, d.shadowOffsetY = c[1] * b), d.drawImage(q, n, o, m, i), {
      image: e,
      width: j / b,
      height: l / b
    });
  }

  function ae(m, o, l) {
    var c = parseInt(m.toString().length * l),
        h = parseInt(l * 2 * m.length),
        j = k(c, h),
        g,
        i,
        e,
        f,
        b,
        d,
        n,
        a;
    if (!j) return null;
    g = j.getContext('2d'), g.fillStyle = '#000', g.fillRect(0, 0, c, h), Y(g, l + 'px ' + o, '#fff', m, 0, 0, 0, 0, [], 'centre'), i = g.getImageData(0, 0, c, h), e = i.width, f = i.height, a = {
      min: {
        x: e,
        y: f
      },
      max: {
        x: -1,
        y: -1
      }
    };

    for (d = 0; d < f; ++d) {
      for (b = 0; b < e; ++b) {
        n = (d * e + b) * 4, i.data[n + 1] > 0 && (b < a.min.x && (a.min.x = b), b > a.max.x && (a.max.x = b), d < a.min.y && (a.min.y = d), d > a.max.y && (a.max.y = d));
      }
    }

    return e != c && (a.min.x *= c / e, a.max.x *= c / e), f != h && (a.min.y *= c / f, a.max.y *= c / f), j = null, a;
  }

  function Q(a) {
    return "'" + a.replace(/(\'|\")/g, '').replace(/\s*,\s*/g, "', '") + "'";
  }

  function t(b, d, a) {
    a = a || c, a.addEventListener ? a.addEventListener(b, d, !1) : a.attachEvent('on' + b, d);
  }

  function am(b, d, a) {
    a = a || c, a.removeEventListener ? a.removeEventListener(b, d) : a.detachEvent('on' + b, d);
  }

  function A(g, e, j, a, b) {
    var l = b.imageScale,
        h,
        c,
        k,
        m,
        f,
        d;
    if (!e.complete) return t('load', function () {
      A(g, e, j, a, b);
    }, e);
    if (!g.complete) return t('load', function () {
      A(g, e, j, a, b);
    }, g);
    if (j && !j.complete) return t('load', function () {
      A(g, e, j, a, b);
    }, j);
    e.width = e.width, e.height = e.height, l && (g.width = e.width * l, g.height = e.height * l), a.iw = g.width, a.ih = g.height, b.txtOpt && (c = g, h = b.zoomMax * b.txtScale, f = a.iw * h, d = a.ih * h, f < e.naturalWidth || d < e.naturalHeight ? (c = S(g, f, d), c && (a.fimage = c)) : (f = a.iw, d = a.ih, h = 1), parseFloat(b.imageRadius) && (a.image = a.fimage = g = at(a.image, b.imageRadius, f, d, h)), a.HasText() || (b.shadow && (c = ao(a.image, f, d, h, b.shadow, b.shadowBlur, b.shadowOffset), c && (a.fimage = c.image, a.w = c.width, a.h = c.height)), (b.bgColour || b.bgOutlineThickness) && (k = b.bgColour == 'tag' ? i(a.a, 'background-color') : b.bgColour, m = b.bgOutline == 'tag' ? i(a.a, 'color') : b.bgOutline || b.textColour, f = a.fimage.width, d = a.fimage.height, b.outlineMethod == 'colour' && (c = W(a.fimage, f, d, h, k, b.bgOutlineThickness, a.outline.colour, b.padding, b.bgRadius, 1), c && (a.oimage = c.image)), c = W(a.fimage, f, d, h, k, b.bgOutlineThickness, m, b.padding, b.bgRadius), c && (a.fimage = c.image, a.w = c.width, a.h = c.height)), b.outlineMethod == 'size' && (b.outlineIncrease > 0 ? (a.iw += 2 * b.outlineIncrease, a.ih += 2 * b.outlineIncrease, f = h * a.iw, d = h * a.ih, c = S(a.fimage, f, d), a.oimage = c, a.fimage = H(a.fimage, a.oimage.width, a.oimage.height)) : (f = h * (a.iw + 2 * b.outlineIncrease), d = h * (a.ih + 2 * b.outlineIncrease), c = S(a.fimage, f, d), a.oimage = H(c, a.fimage.width, a.fimage.height))))), a.alt = j, a.Init();
  }

  function i(a, d) {
    var b = c.defaultView,
        e = d.replace(/\-([a-z])/g, function (a) {
      return a.charAt(1).toUpperCase();
    });
    return b && b.getComputedStyle && b.getComputedStyle(a, null).getPropertyValue(d) || a.currentStyle && a.currentStyle[e];
  }

  function aj(c, d, e) {
    var b = 1,
        a;
    return d ? b = 1 * (c.getAttribute(d) || e) : (a = i(c, 'font-size')) && (b = a.indexOf('px') > -1 && a.replace('px', '') * 1 || a.indexOf('pt') > -1 && a.replace('pt', '') * 1.25 || a * 3.3), b;
  }

  function u(a) {
    return a.target && n(a.target.id) ? a.target.id : a.srcElement.parentNode.id;
  }

  function K(a, c) {
    var b,
        d,
        e = parseInt(i(c, 'width')) / c.width,
        f = parseInt(i(c, 'height')) / c.height;
    return n(a.offsetX) ? b = {
      x: a.offsetX,
      y: a.offsetY
    } : (d = X(c.id), n(a.changedTouches) && (a = a.changedTouches[0]), a.pageX && (b = {
      x: a.pageX - d.x,
      y: a.pageY - d.y
    })), b && e && f && (b.x /= e, b.y /= f), b;
  }

  function an(c) {
    var d = c.target || c.fromElement.parentNode,
        b = a.tc[d.id];
    b && (b.mx = b.my = -1, b.UnFreeze(), b.EndDrag());
  }

  function ad(e) {
    var g,
        c = a,
        b,
        d,
        f = u(e);

    for (g in c.tc) {
      b = c.tc[g], b.tttimer && (clearTimeout(b.tttimer), b.tttimer = null);
    }

    f && c.tc[f] && (b = c.tc[f], (d = K(e, b.canvas)) && (b.mx = d.x, b.my = d.y, b.Drag(e, d)), b.drawn = 0);
  }

  function ap(b) {
    var e = a,
        f = c.addEventListener ? 0 : 1,
        d = u(b);
    d && b.button == f && e.tc[d] && e.tc[d].BeginDrag(b);
  }

  function aq(b) {
    var f = a,
        g = c.addEventListener ? 0 : 1,
        e = u(b),
        d;
    e && b.button == g && f.tc[e] && (d = f.tc[e], ad(b), !d.EndDrag() && !d.touchState && d.Clicked(b));
  }

  function ar(c) {
    var e = u(c),
        b = e && a.tc[e],
        d;
    b && c.changedTouches && (c.touches.length == 1 && b.touchState == 0 ? (b.touchState = 1, b.BeginDrag(c), (d = K(c, b.canvas)) && (b.mx = d.x, b.my = d.y, b.drawn = 0)) : c.targetTouches.length == 2 && b.pinchZoom ? (b.touchState = 3, b.EndDrag(), b.BeginPinch(c)) : (b.EndDrag(), b.EndPinch(), b.touchState = 0));
  }

  function ac(c) {
    var d = u(c),
        b = d && a.tc[d];

    if (b && c.changedTouches) {
      switch (b.touchState) {
        case 1:
          b.Draw(), b.Clicked();
          break;
          break;

        case 2:
          b.EndDrag();
          break;

        case 3:
          b.EndPinch();
      }

      b.touchState = 0;
    }
  }

  function au(c) {
    var f,
        e = a,
        b,
        d,
        g = u(c);

    for (f in e.tc) {
      b = e.tc[f], b.tttimer && (clearTimeout(b.tttimer), b.tttimer = null);
    }

    if (b = g && e.tc[g], b && c.changedTouches && b.touchState) {
      switch (b.touchState) {
        case 1:
        case 2:
          (d = K(c, b.canvas)) && (b.mx = d.x, b.my = d.y, b.Drag(c, d) && (b.touchState = 2));
          break;

        case 3:
          b.Pinch(c);
      }

      b.drawn = 0;
    }
  }

  function ab(b) {
    var d = a,
        c = u(b);
    c && d.tc[c] && (b.cancelBubble = !0, b.returnValue = !1, b.preventDefault && b.preventDefault(), d.tc[c].Wheel((b.wheelDelta || b.detail) > 0));
  }

  function aw(d) {
    var c,
        b = a;
    clearTimeout(b.scrollTimer);

    for (c in b.tc) {
      b.tc[c].Pause();
    }

    b.scrollTimer = setTimeout(function () {
      var b,
          c = a;

      for (b in c.tc) {
        c.tc[b].Resume();
      }
    }, b.scrollPause);
  }

  function al() {
    Z(q());
  }

  function Z(b) {
    var c = a.tc,
        d;
    a.NextFrame(a.interval), b = b || q();

    for (d in c) {
      c[d].Draw(b);
    }
  }

  function az() {
    requestAnimationFrame(Z);
  }

  function aA(a) {
    setTimeout(al, a);
  }

  function X(f) {
    var g = c.getElementById(f),
        b = g.getBoundingClientRect(),
        a = c.documentElement,
        d = c.body,
        e = window,
        h = e.pageXOffset || a.scrollLeft,
        i = e.pageYOffset || a.scrollTop,
        j = a.clientLeft || d.clientLeft,
        k = a.clientTop || d.clientTop;
    return {
      x: b.left + h - j,
      y: b.top + i - k
    };
  }

  function aI(a, b, d, e) {
    var c = a.radius * a.z1 / (a.z1 + a.z2 + b.z);
    return {
      x: b.x * c * d,
      y: b.y * c * e,
      z: b.z,
      w: (a.z1 - b.z) / a.z2
    };
  }

  function V(a) {
    this.e = a, this.br = 0, this.line = [], this.text = [], this.original = a.innerText || a.textContent;
  }

  F = V.prototype, F.Empty = function () {
    for (var a = 0; a < this.text.length; ++a) {
      if (this.text[a].length) return !1;
    }

    return !0;
  }, F.Lines = function (c) {
    var e = c ? 1 : 0,
        b,
        d,
        a;
    c = c || this.e, b = c.childNodes, d = b.length;

    for (a = 0; a < d; ++a) {
      b[a].nodeName == 'BR' ? (this.text.push(this.line.join(' ')), this.br = 1) : b[a].nodeType == 3 ? this.br ? (this.line = [b[a].nodeValue], this.br = 0) : this.line.push(b[a].nodeValue) : this.Lines(b[a]);
    }

    return e || this.br || this.text.push(this.line.join(' ')), this.text;
  }, F.SplitWidth = function (h, e, f, g) {
    var c,
        b,
        a,
        d = [];
    e.font = g + 'px ' + f;

    for (c = 0; c < this.text.length; ++c) {
      a = this.text[c].split(/\s+/), this.line = [a[0]];

      for (b = 1; b < a.length; ++b) {
        e.measureText(this.line.join(' ') + ' ' + a[b]).width > h ? (d.push(this.line.join(' ')), this.line = [a[b]]) : this.line.push(a[b]);
      }

      d.push(this.line.join(' '));
    }

    return this.text = d;
  };

  function _(a, b) {
    this.ts = null, this.tc = a, this.tag = b, this.x = this.y = this.w = this.h = this.sc = 1, this.z = 0, this.pulse = 1, this.pulsate = a.pulsateTo < 1, this.colour = a.outlineColour, this.adash = ~~a.outlineDash, this.agap = ~~a.outlineDashSpace || this.adash, this.aspeed = a.outlineDashSpeed * 1, this.colour == 'tag' ? this.colour = i(b.a, 'color') : this.colour == 'tagbg' && (this.colour = i(b.a, 'background-color')), this.Draw = this.pulsate ? this.DrawPulsate : this.DrawSimple, this.radius = a.outlineRadius | 0, this.SetMethod(a.outlineMethod, a.altImage);
  }

  f = _.prototype, f.SetMethod = function (a, d) {
    var b = {
      block: ['PreDraw', 'DrawBlock'],
      colour: ['PreDraw', 'DrawColour'],
      outline: ['PostDraw', 'DrawOutline'],
      classic: ['LastDraw', 'DrawOutline'],
      size: ['PreDraw', 'DrawSize'],
      none: ['LastDraw']
    },
        c = b[a] || b.outline;
    a == 'none' ? this.Draw = function () {
      return 1;
    } : this.drawFunc = this[c[1]], this[c[0]] = this.Draw, d && (this.RealPreDraw = this.PreDraw, this.PreDraw = this.DrawAlt);
  }, f.Update = function (d, e, i, j, a, f, g, h) {
    var b = this.tc.outlineOffset,
        c = 2 * b;
    this.x = a * d + g - b, this.y = a * e + h - b, this.w = a * i + c, this.h = a * j + c, this.sc = a, this.z = f;
  }, f.Ants = function (k) {
    if (!this.adash) return;
    var b = this.adash,
        c = this.agap,
        a = this.aspeed,
        j = b + c,
        h = 0,
        g = b,
        f = c,
        i = 0,
        d = 0,
        e;
    a && (d = p(a) * (q() - this.ts) / 50, a < 0 && (d = 864e4 - d), a = ~~d % j), a ? (b >= a ? (h = b - a, g = a) : (f = j - a, i = c - f), e = [h, f, g, i]) : e = [b, c], k.setLineDash(e);
  }, f.DrawOutline = function (a, d, e, b, c, f) {
    var g = h(this.radius, c / 2, b / 2);
    a.strokeStyle = f, this.Ants(a), y(a, d, e, b, c, g, !0);
  }, f.DrawSize = function (i, n, m, l, k, j, a, h, g) {
    var f = a.w,
        e = a.h,
        c,
        b,
        d;
    return this.pulsate ? (a.image ? d = (a.image.height + this.tc.outlineIncrease) / a.image.height : d = a.oscale, b = a.fimage || a.image, c = 1 + (d - 1) * (1 - this.pulse), a.h *= c, a.w *= c) : b = a.oimage, a.alpha = 1, a.Draw(i, h, g, b), a.h = e, a.w = f, 1;
  }, f.DrawColour = function (d, h, i, e, f, g, a, b, c) {
    return a.oimage ? (this.pulse < 1 ? (a.alpha = 1 - w(this.pulse, 2), a.Draw(d, b, c, a.fimage), a.alpha = this.pulse) : a.alpha = 1, a.Draw(d, b, c, a.oimage), 1) : this[a.image ? 'DrawColourImage' : 'DrawColourText'](d, h, i, e, f, g, a, b, c);
  }, f.DrawColourText = function (f, h, i, j, g, e, a, b, c) {
    var d = a.colour;
    return a.colour = e, a.alpha = 1, a.Draw(f, b, c), a.colour = d, 1;
  }, f.DrawColourImage = function (a, q, p, o, n, m, i, r, l) {
    var f = a.canvas,
        e = ~~g(q, 0),
        d = ~~g(p, 0),
        c = h(f.width - e, o) + .5 | 0,
        b = h(f.height - d, n) + .5 | 0,
        j;
    return v ? (v.width = c, v.height = b) : v = k(c, b), !v ? this.SetMethod('outline') : (j = v.getContext('2d'), j.drawImage(f, e, d, c, b, 0, 0, c, b), a.clearRect(e, d, c, b), this.pulsate ? i.alpha = 1 - w(this.pulse, 2) : i.alpha = 1, i.Draw(a, r, l), a.setTransform(1, 0, 0, 1, 0, 0), a.save(), a.beginPath(), a.rect(e, d, c, b), a.clip(), a.globalCompositeOperation = 'source-in', a.fillStyle = m, a.fillRect(e, d, c, b), a.restore(), a.globalAlpha = 1, a.globalCompositeOperation = 'destination-over', a.drawImage(v, 0, 0, c, b, e, d, c, b), a.globalCompositeOperation = 'source-over', 1);
  }, f.DrawAlt = function (b, a, c, d, f, g) {
    var e = this.RealPreDraw(b, a, c, d, f, g);
    return a.alt && (a.DrawImage(b, c, d, a.alt), e = 1), e;
  }, f.DrawBlock = function (a, d, e, b, c, f) {
    var g = h(this.radius, c / 2, b / 2);
    a.fillStyle = f, y(a, d, e, b, c, g);
  }, f.DrawSimple = function (a, b, c, d, e, f) {
    var g = this.tc;
    return a.setTransform(1, 0, 0, 1, 0, 0), a.strokeStyle = this.colour, a.lineWidth = g.outlineThickness, a.shadowBlur = a.shadowOffsetX = a.shadowOffsetY = 0, a.globalAlpha = f ? e : 1, this.drawFunc(a, this.x, this.y, this.w, this.h, this.colour, b, c, d);
  }, f.DrawPulsate = function (h, d, e, f) {
    var g = q() - this.ts,
        c = this.tc,
        b = c.pulsateTo + (1 - c.pulsateTo) * (.5 + l(2 * Math.PI * g / (1e3 * c.pulsateTime)) / 2);
    return this.pulse = b = a.Smooth(1, b), this.DrawSimple(h, d, e, f, b, 1);
  }, f.Active = function (d, a, b) {
    var c = a >= this.x && b >= this.y && a <= this.x + this.w && b <= this.y + this.h;
    return c ? this.ts = this.ts || q() : this.ts = null, c;
  }, f.PreDraw = f.PostDraw = f.LastDraw = x;

  function J(a, h, c, b, e, f, g, d, i, j, k, l, m, n) {
    this.tc = a, this.image = null, this.text = h, this.text_original = n, this.line_widths = [], this.title = c.title || null, this.a = c, this.position = new s(b[0], b[1], b[2]), this.x = this.y = this.z = 0, this.w = e, this.h = f, this.colour = g || a.textColour, this.bgColour = d || a.bgColour, this.bgRadius = i | 0, this.bgOutline = j || this.colour, this.bgOutlineThickness = k | 0, this.textFont = l || a.textFont, this.padding = m | 0, this.sc = this.alpha = 1, this.weighted = !a.weight, this.outline = new _(a, this), this.audio = null;
  }

  d = J.prototype, d.Init = function (b) {
    var a = this.tc;
    this.textHeight = a.textHeight, this.HasText() ? this.Measure(a.ctxt, a) : (this.w = this.iw, this.h = this.ih), this.SetShadowColour = a.shadowAlpha ? this.SetShadowColourAlpha : this.SetShadowColourFixed, this.SetDraw(a);
  }, d.Draw = x, d.HasText = function () {
    return this.text && this.text[0].length > 0;
  }, d.EqualTo = function (a) {
    var b = a.getElementsByTagName('img');
    return this.a.href != a.href ? 0 : b.length ? this.image.src == b[0].src : (a.innerText || a.textContent) == this.text_original;
  }, d.SetImage = function (a) {
    this.image = this.fimage = a;
  }, d.SetAudio = function (a) {
    this.audio = a, this.audio.load();
  }, d.SetDraw = function (a) {
    this.Draw = this.fimage ? a.ie > 7 ? this.DrawImageIE : this.DrawImage : this.DrawText, a.noSelect && (this.CheckActive = x);
  }, d.MeasureText = function (d) {
    var a,
        e = this.text.length,
        b = 0,
        c;

    for (a = 0; a < e; ++a) {
      this.line_widths[a] = c = d.measureText(this.text[a]).width, b = g(b, c);
    }

    return b;
  }, d.Measure = function (e, a) {
    var f = ae(this.text, this.textFont, this.textHeight),
        b,
        k,
        h,
        i,
        g,
        l,
        j,
        c,
        d;
    j = f ? f.max.y + f.min.y : this.textHeight, e.font = this.font = this.textHeight + 'px ' + this.textFont, l = this.MeasureText(e), a.txtOpt && (b = a.txtScale, k = b * this.textHeight, h = k + 'px ' + this.textFont, i = [b * a.shadowOffset[0], b * a.shadowOffset[1]], e.font = h, g = this.MeasureText(e), d = new O(this.text, h, g + b, b * j + b, g, this.line_widths, a.textAlign, a.textVAlign, b), this.image && d.SetImage(this.image, this.iw, this.ih, a.imagePosition, a.imagePadding, a.imageAlign, a.imageVAlign, a.imageScale), c = d.Create(this.colour, this.bgColour, this.bgOutline, b * this.bgOutlineThickness, a.shadow, b * a.shadowBlur, i, b * this.padding, b * this.bgRadius), a.outlineMethod == 'colour' ? this.oimage = d.Create(this.outline.colour, this.bgColour, this.outline.colour, b * this.bgOutlineThickness, a.shadow, b * a.shadowBlur, i, b * this.padding, b * this.bgRadius) : a.outlineMethod == 'size' && (f = ae(this.text, this.textFont, this.textHeight + a.outlineIncrease), k = f.max.y + f.min.y, h = b * (this.textHeight + a.outlineIncrease) + 'px ' + this.textFont, e.font = h, g = this.MeasureText(e), d = new O(this.text, h, g + b, b * k + b, g, this.line_widths, a.textAlign, a.textVAlign, b), this.image && d.SetImage(this.image, this.iw + a.outlineIncrease, this.ih + a.outlineIncrease, a.imagePosition, a.imagePadding, a.imageAlign, a.imageVAlign, a.imageScale), this.oimage = d.Create(this.colour, this.bgColour, this.bgOutline, b * this.bgOutlineThickness, a.shadow, b * a.shadowBlur, i, b * this.padding, b * this.bgRadius), this.oscale = this.oimage.width / c.width, a.outlineIncrease > 0 ? c = H(c, this.oimage.width, this.oimage.height) : this.oimage = H(this.oimage, c.width, c.height)), c && (this.fimage = c, l = this.fimage.width / b, j = this.fimage.height / b), this.SetDraw(a), a.txtOpt = !!this.fimage), this.h = j, this.w = l;
  }, d.SetFont = function (a, b, c, d) {
    this.textFont = a, this.colour = b, this.bgColour = c, this.bgOutline = d, this.Measure(this.tc.ctxt, this.tc);
  }, d.SetWeight = function (c) {
    var b = this.tc,
        e = b.weightMode.split(/[, ]/),
        d,
        a,
        f = c.length;
    if (!this.HasText()) return;
    this.weighted = !0;

    for (a = 0; a < f; ++a) {
      d = e[a] || 'size', 'both' == d ? (this.Weight(c[a], b.ctxt, b, 'size', b.min_weight[a], b.max_weight[a], a), this.Weight(c[a], b.ctxt, b, 'colour', b.min_weight[a], b.max_weight[a], a)) : this.Weight(c[a], b.ctxt, b, d, b.min_weight[a], b.max_weight[a], a);
    }

    this.Measure(b.ctxt, b);
  }, d.Weight = function (b, i, a, d, f, h, e) {
    b = isNaN(b) ? 1 : b;
    var c = (b - f) / (h - f);
    'colour' == d ? this.colour = L(a, c, e) : 'bgcolour' == d ? this.bgColour = L(a, c, e) : 'bgoutline' == d ? this.bgOutline = L(a, c, e) : 'outline' == d ? this.outline.colour = L(a, c, e) : 'size' == d && (a.weightSizeMin > 0 && a.weightSizeMax > a.weightSizeMin ? this.textHeight = a.weightSize * (a.weightSizeMin + (a.weightSizeMax - a.weightSizeMin) * c) : this.textHeight = g(1, b * a.weightSize));
  }, d.SetShadowColourFixed = function (a, b, c) {
    a.shadowColor = b;
  }, d.SetShadowColourAlpha = function (a, b, c) {
    a.shadowColor = aE(b, c);
  }, d.DrawText = function (a, h, i) {
    var e = this.tc,
        g = this.x,
        f = this.y,
        c = this.sc,
        b,
        d;
    a.globalAlpha = this.alpha, a.fillStyle = this.colour, e.shadow && this.SetShadowColour(a, e.shadow, this.alpha), a.font = this.font, g += h / c, f += i / c - this.h / 2;

    for (b = 0; b < this.text.length; ++b) {
      d = g, 'right' == e.textAlign ? d += this.w / 2 - this.line_widths[b] : 'centre' == e.textAlign ? d -= this.line_widths[b] / 2 : d -= this.w / 2, a.setTransform(c, 0, 0, c, c * d, c * f), a.fillText(this.text[b], 0, 0), f += this.textHeight;
    }
  }, d.DrawImage = function (b, i, k, l) {
    var e = this.x,
        f = this.y,
        a = this.sc,
        j = l || this.fimage,
        c = this.w,
        d = this.h,
        g = this.alpha,
        h = this.shadow;
    b.globalAlpha = g, h && this.SetShadowColour(b, h, g), e += i / a - c / 2, f += k / a - d / 2, b.setTransform(a, 0, 0, a, a * e, a * f), b.drawImage(j, 0, 0, c, d);
  }, d.DrawImageIE = function (b, d, e) {
    var c = this.fimage,
        a = this.sc,
        f = c.width = this.w * a,
        g = c.height = this.h * a,
        h = this.x * a + d - f / 2,
        i = this.y * a + e - g / 2;
    b.setTransform(1, 0, 0, 1, 0, 0), b.globalAlpha = this.alpha, b.drawImage(c, h, i);
  }, d.Calc = function (g, e) {
    var a,
        b = this.tc,
        d = b.minBrightness,
        f = b.maxBrightness,
        c = b.max_radius;
    return a = g.xform(this.position), this.xformed = a, a = aI(b, a, b.stretchX, b.stretchY), this.x = a.x, this.y = a.y, this.z = a.z, this.sc = a.w, this.alpha = e * G(d + (f - d) * (c - this.z) / (2 * c), 0, 1), this.xformed;
  }, d.UpdateActive = function (h, e, f) {
    var a = this.outline,
        b = this.w,
        c = this.h,
        d = this.x - b / 2,
        g = this.y - c / 2;
    return a.Update(d, g, b, c, this.sc, this.z, e, f), a;
  }, d.CheckActive = function (a, d, e) {
    var b = this.tc,
        c = this.UpdateActive(a, d, e);
    return c.Active(a, b.mx, b.my) ? c : null;
  }, d.Clicked = function (f) {
    var b = this.a,
        a = b.target,
        d = b.href,
        e;

    if (a != '' && a != '_self') {
      if (self.frames[a]) self.frames[a].document.location = d;else {
        try {
          if (top.frames[a]) {
            top.frames[a].document.location = d;
            return;
          }
        } catch (a) {}

        window.open(d, a);
      }
      return;
    }

    if (c.createEvent) {
      if (e = c.createEvent('MouseEvents'), e.initMouseEvent('click', 1, 1, window, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null), !b.dispatchEvent(e)) return;
    } else if (b.fireEvent) if (!b.fireEvent('onclick')) return;

    c.location = d;
  }, d.StopAudio = function () {
    this.audio && this.playing && this.audio.pause(), this.stopped = 1, this.playing = 0;
  }, d.PlayAudio = function () {
    var _this = this;

    if (e === 'off' || this.tc.audioOff) return;
    if (!e && !ag()) return;
    var a = this.tc.audio,
        c = this.tc.gain,
        d = 'suspended',
        b;
    if (this.audio) if (this.track || (this.track = e.createMediaElementSource(this.audio), this.gain = e.createGain(), this.track.connect(this.gain), this.gain.connect(e.destination)), a = this.audio, c = this.gain, !a.paused) return 1;

    if (a) {
      if (e.state == d && e.resume(), e.state == d) return;
      return c.gain.value = h(2, g(0, this.tc.audioVolume * 1)), a.currentTime = 0, this.stopped = 0, b = a.play(), b !== void 0 && b.then(function (a) {
        _this.stopped ? _this.audio.pause() : _this.playing = 1;
      }), 1;
    }
  };

  function a(f, o, k) {
    var d,
        i,
        b = c.getElementById(f),
        l = ['id', 'class', 'innerHTML'];
    if (!b) throw 0;

    if (n(window.G_vmlCanvasManager) && (b = window.G_vmlCanvasManager.initElement(b), this.ie = parseFloat(navigator.appVersion.split('MSIE')[1])), b && (!b.getContext || !b.getContext('2d').fillText)) {
      i = c.createElement('DIV');

      for (d = 0; d < l.length; ++d) {
        i[l[d]] = b[l[d]];
      }

      throw b.parentNode.insertBefore(i, b), b.parentNode.removeChild(b), 0;
    }

    for (d in a.options) {
      this[d] = k && n(k[d]) ? k[d] : n(a[d]) ? a[d] : a.options[d];
    }

    if (this.canvas = b, this.ctxt = b.getContext('2d'), this.z1 = 250 / g(this.depth, .001), this.z2 = this.z1 / this.zoom, this.radius = h(b.height, b.width) * .0075, this.max_radius = 100, this.max_weight = [], this.min_weight = [], this.textFont = this.textFont && Q(this.textFont), this.textHeight *= 1, this.imageRadius = this.imageRadius.toString(), this.pulsateTo = G(this.pulsateTo, 0, 1), this.minBrightness = G(this.minBrightness, 0, 1), this.maxBrightness = G(this.maxBrightness, this.minBrightness, 1), this.ctxt.textBaseline = 'top', this.lx = (this.lock + '').indexOf('x') + 1, this.ly = (this.lock + '').indexOf('y') + 1, this.frozen = this.dx = this.dy = this.fixedAnim = this.touchState = 0, this.fixedAlpha = 1, this.source = o || f, this.repeatTags = h(64, ~~this.repeatTags), this.minTags = h(200, ~~this.minTags), ~~this.scrollPause > 0 ? a.scrollPause = ~~this.scrollPause : this.scrollPause = 0, this.minTags > 0 && this.repeatTags < 1 && (d = this.GetTags().length) && (this.repeatTags = af(this.minTags / d) - 1), this.transform = m.Identity(), this.startTime = this.time = q(), this.mx = this.my = -1, this.centreImage && av(this), this.Animate = this.dragControl ? this.AnimateDrag : this.AnimatePosition, this.animTiming = typeof a[this.animTiming] == 'function' ? a[this.animTiming] : a.Smooth, this.shadowBlur || this.shadowOffset[0] || this.shadowOffset[1] ? (this.ctxt.shadowColor = this.shadow, this.shadow = this.ctxt.shadowColor, this.shadowAlpha = aD()) : delete this.shadow, this.activeAudio === !1 ? e = 'off' : this.activeAudio && this.LoadAudio(), this.Load(), o && this.hideTags && function (b) {
      a.loaded ? b.HideTags() : t('load', function () {
        b.HideTags();
      }, window);
    }(this), this.yaw = this.initial ? this.initial[0] * this.maxSpeed : 0, this.pitch = this.initial ? this.initial[1] * this.maxSpeed : 0, this.tooltip ? (this.ctitle = b.title, b.title = '', this.tooltip == 'native' ? this.Tooltip = this.TooltipNative : (this.Tooltip = this.TooltipDiv, this.ttdiv || (this.ttdiv = c.createElement('div'), this.ttdiv.className = this.tooltipClass, this.ttdiv.style.position = 'absolute', this.ttdiv.style.zIndex = b.style.zIndex + 1, t('mouseover', function (a) {
      a.target.style.display = 'none';
    }, this.ttdiv), c.body.appendChild(this.ttdiv)))) : this.Tooltip = this.TooltipNone, !this.noMouse && !j[f]) {
      j[f] = [['mousemove', ad], ['mouseout', an], ['mouseup', aq], ['touchstart', ar], ['touchend', ac], ['touchcancel', ac], ['touchmove', au]], this.dragControl && (j[f].push(['mousedown', ap]), j[f].push(['selectstart', x])), this.wheelZoom && (j[f].push(['mousewheel', ab]), j[f].push(['DOMMouseScroll', ab])), this.scrollPause && j[f].push(['scroll', aw, window]);

      for (d = 0; d < j[f].length; ++d) {
        i = j[f][d], t(i[0], i[1], i[2] ? i[2] : b);
      }
    }

    a.started || (a.NextFrame = window.requestAnimationFrame ? az : aA, a.interval = this.interval, a.NextFrame(this.interval), a.started = 1);
  }

  b = a.prototype, b.SourceElements = function () {
    return c.querySelectorAll ? c.querySelectorAll('#' + this.source) : [c.getElementById(this.source)];
  }, b.HideTags = function () {
    var b = this.SourceElements(),
        a;

    for (a = 0; a < b.length; ++a) {
      b[a].style.display = 'none';
    }
  }, b.GetTags = function () {
    var e = this.SourceElements(),
        c,
        f = [],
        a,
        b,
        d;

    for (d = 0; d <= this.repeatTags; ++d) {
      for (a = 0; a < e.length; ++a) {
        c = e[a].getElementsByTagName('a');

        for (b = 0; b < c.length; ++b) {
          f.push(c[b]);
        }
      }
    }

    return f;
  }, b.Message = function (j) {
    var g = [],
        a,
        f,
        b = j.split(''),
        d,
        e,
        h,
        i;

    for (a = 0; a < b.length; ++a) {
      b[a] != ' ' && (f = a - b.length / 2, d = c.createElement('A'), d.href = '#', d.innerText = b[a], h = 100 * o(f / 9), i = -100 * l(f / 9), e = new J(this, b[a], d, [h, 0, i], 2, 18, '#000', '#fff', 0, 0, 0, 'monospace', 2, b[a]), e.Init(), g.push(e));
    }

    return g;
  }, b.AddAudio = function (b, c) {
    if (e === 'off') return;
    var a = b.getElementsByTagName('audio');
    a.length && (c.SetAudio(a[0]), this.hasAudio = 1);
  }, b.CreateTag = function (b) {
    var e,
        c,
        a,
        f,
        d,
        g,
        h,
        j,
        k = [0, 0, 0],
        l;
    if ('text' != this.imageMode) if (e = b.getElementsByTagName('img'), e.length) if (c = new Image(), c.src = e[0].src, !this.imageMode) return a = new J(this, "", b, k, 0, 0), a.SetImage(c), A(c, e[0], e[1], a, this), this.AddAudio(b, a), a;
    if ('image' != this.imageMode && (d = new V(b), f = d.Lines(), d.Empty() ? d = null : (g = this.textFont || Q(i(b, 'font-family')), this.splitWidth && (f = d.SplitWidth(this.splitWidth, this.ctxt, g, this.textHeight)), h = this.bgColour == 'tag' ? i(b, 'background-color') : this.bgColour, j = this.bgOutline == 'tag' ? i(b, 'color') : this.bgOutline)), d || c) return a = new J(this, f, b, k, 2, this.textHeight + 2, this.textColour || i(b, 'color'), h, this.bgRadius, j, this.bgOutlineThickness, g, this.padding, d && d.original), c ? (a.SetImage(c), A(c, e[0], e[1], a, this)) : a.Init(), this.AddAudio(b, a), a;
  }, b.UpdateTag = function (a, b) {
    var c = this.textColour || i(b, 'color'),
        d = this.textFont || Q(i(b, 'font-family')),
        e = this.bgColour == 'tag' ? i(b, 'background-color') : this.bgColour,
        f = this.bgOutline == 'tag' ? i(b, 'color') : this.bgOutline;
    a.a = b, a.title = b.title, (a.colour != c || a.textFont != d || a.bgColour != e || a.bgOutline != f) && a.SetFont(d, c, e, f);
  }, b.Weight = function (d) {
    var f = d.length,
        c,
        b,
        a,
        e = [],
        g,
        h = this.weightFrom ? this.weightFrom.split(/[, ]/) : [null],
        i = h.length;

    for (b = 0; b < f; ++b) {
      e[b] = [];

      for (a = 0; a < i; ++a) {
        c = aj(d[b].a, h[a], this.textHeight), (!this.max_weight[a] || c > this.max_weight[a]) && (this.max_weight[a] = c), (!this.min_weight[a] || c < this.min_weight[a]) && (this.min_weight[a] = c), e[b][a] = c;
      }
    }

    for (a = 0; a < i; ++a) {
      this.max_weight[a] > this.min_weight[a] && (g = 1);
    }

    if (g) for (b = 0; b < f; ++b) {
      d[b].SetWeight(e[b]);
    }
  }, b.Load = function () {
    var c = this.GetTags(),
        b = [],
        d,
        k,
        l,
        h,
        i,
        j,
        f,
        a,
        e = [],
        m = {
      sphere: aB,
      vcylinder: ax,
      hcylinder: aH,
      vring: aG,
      hring: aF
    };

    if (c.length) {
      e.length = c.length;

      for (a = 0; a < c.length; ++a) {
        e[a] = a;
      }

      this.shuffleTags && ai(e), h = 100 * this.radiusX, i = 100 * this.radiusY, j = 100 * this.radiusZ, this.max_radius = g(h, g(i, j));

      for (a = 0; a < c.length; ++a) {
        k = this.CreateTag(c[e[a]]), k && b.push(k);
      }

      this.weight && this.Weight(b, !0), this.shapeArgs ? this.shapeArgs[0] = b.length : (l = this.shape.toString().split(/[(),]/), d = l.shift(), typeof window[d] == 'function' ? this.shape = window[d] : this.shape = m[d] || m.sphere, this.shapeArgs = [b.length, h, i, j].concat(l)), f = this.shape.apply(this, this.shapeArgs), this.listLength = b.length;

      for (a = 0; a < b.length; ++a) {
        b[a].position = new s(f[a][0], f[a][1], f[a][2]);
      }
    }

    this.noTagsMessage && !b.length && (a = this.imageMode && this.imageMode != 'both' ? this.imageMode + ' ' : '', b = this.Message('No ' + a + 'tags')), this.taglist = b;
  }, b.Update = function () {
    var e = this.GetTags(),
        d = [],
        j = this.taglist,
        k,
        f = [],
        c = [],
        h,
        i,
        g,
        a,
        b;
    if (!this.shapeArgs) return this.Load();

    if (e.length) {
      g = this.listLength = e.length, i = j.length;

      for (a = 0; a < i; ++a) {
        d.push(j[a]), c.push(a);
      }

      for (a = 0; a < g; ++a) {
        for (b = 0, k = 0; b < i; ++b) {
          j[b].EqualTo(e[a]) && (this.UpdateTag(d[b], e[a]), k = c[b] = -1);
        }

        k || f.push(a);
      }

      for (a = 0, b = 0; a < i; ++a) {
        c[b] == -1 ? c.splice(b, 1) : ++b;
      }

      if (c.length) {
        for (ai(c); c.length && f.length;) {
          a = c.shift(), b = f.shift(), d[a] = this.CreateTag(e[b]);
        }

        for (c.sort(function (a, b) {
          return a - b;
        }); c.length;) {
          d.splice(c.pop(), 1);
        }
      }

      for (b = d.length / (f.length + 1), a = 0; f.length;) {
        d.splice(af(++a * b), 0, this.CreateTag(e[f.shift()]));
      }

      this.shapeArgs[0] = g = d.length, h = this.shape.apply(this, this.shapeArgs);

      for (a = 0; a < g; ++a) {
        d[a].position = new s(h[a][0], h[a][1], h[a][2]);
      }

      this.weight && this.Weight(d);
    }

    this.taglist = d;
  }, b.SetShadow = function (a) {
    a.shadowBlur = this.shadowBlur, a.shadowOffsetX = this.shadowOffset[0], a.shadowOffsetY = this.shadowOffset[1];
  }, b.LoadAudio = function () {
    if (!e && !ag()) return;
    this.audio = c.createElement('audio'), this.audio.src = this.activeAudio, this.track = e.createMediaElementSource(this.audio), this.gain = e.createGain(), this.track.connect(this.gain), this.gain.connect(e.destination), this.hasAudio = 1, _P = function P(a) {
      e.resume(), c.removeEventListener('click', _P);
    }, c.addEventListener('click', _P);
  }, b.ShowAudioIcon = function () {
    var a = this.audioIconSize,
        c = this.canvas,
        d = this.ctxt,
        k = c.width - a - 3,
        f = c.height - a - 3,
        g = this.audioIconThickness,
        h = '#000',
        i = '#fff',
        j = this.audioIconDark,
        b = this.audioOff,
        l = 'suspended';
    if (!e) return;
    b || (b = e.state === l), this.audioIcon && this.hasAudio && ($(b, d, a, k, f, g + 1, j ? i : h), $(b, d, a, k, f, g, j ? h : i));
  }, b.CheckAudioIcon = function () {
    var a = this.audioIconSize,
        b = this.canvas,
        c = this.audioIconThickness / 2,
        d = b.width - a - 3 - c,
        e = b.height - a - 3 - c;
    if (this.audioIcon && this.mx >= d && this.my >= e) return !0;
  }, b.ToggleAudio = function () {
    var a = this.audioOff || e && e.state === 'suspended';
    a || this.currentAudio && this.currentAudio.StopAudio(), this.audioOff = !a;
  }, b.Draw = function (s) {
    if (this.paused) return;
    var l = this.canvas,
        i = l.width,
        j = l.height,
        q = 0,
        p = (s - this.time) * a.interval / 1e3,
        h = i / 2 + this.offsetX,
        g = j / 2 + this.offsetY,
        d = this.ctxt,
        b,
        f,
        c,
        o = -1,
        e = this.taglist,
        k = e.length,
        t = this.active && this.active.tag,
        m = '',
        u = this.frontSelect,
        r = this.centreFunc == x,
        n;
    if (this.time = s, this.frozen && this.drawn) return this.Animate(i, j, p);
    n = this.AnimateFixed(), d.setTransform(1, 0, 0, 1, 0, 0);

    for (c = 0; c < k; ++c) {
      e[c].Calc(this.transform, this.fixedAlpha);
    }

    if (e = ak(e, function (a, b) {
      return b.z - a.z;
    }), n && this.fixedAnim.active) b = this.fixedAnim.tag.UpdateActive(d, h, g);else if (this.active = null, this.CheckAudioIcon()) m = 'pointer';else {
      for (c = 0; c < k; ++c) {
        f = this.mx >= 0 && this.my >= 0 && this.taglist[c].CheckActive(d, h, g), f && f.sc > q && (!u || f.z <= 0) && (b = f, o = c, b.tag = this.taglist[c], q = f.sc);
      }

      this.active = b;
    }
    this.txtOpt || this.shadow && this.SetShadow(d), d.clearRect(0, 0, i, j);

    for (c = 0; c < k; ++c) {
      if (!r && e[c].z <= 0) {
        try {
          this.centreFunc(d, i, j, h, g);
        } catch (a) {
          alert(a), this.centreFunc = x;
        }

        r = !0;
      }

      b && b.tag == e[c] && b.PreDraw(d, e[c], h, g) || e[c].Draw(d, h, g), b && b.tag == e[c] && b.PostDraw(d);
    }

    this.freezeActive && b ? this.Freeze() : (this.UnFreeze(), this.drawn = k == this.listLength), this.fixedCallback && (this.fixedCallback(this, this.fixedCallbackTag), this.fixedCallback = null), n || this.Animate(i, j, p), b && (b.LastDraw(d), b.tag != t && (this.currentAudio && this.currentAudio != b.tag && this.currentAudio.StopAudio(), b.tag.PlayAudio() && (this.currentAudio = b.tag)), m = this.activeCursor), l.style.cursor = m, this.Tooltip(b, this.taglist[o]), this.audioIcon && this.ShowAudioIcon();
  }, b.TooltipNone = function () {}, b.TooltipNative = function (b, a) {
    b ? this.canvas.title = a && a.title ? a.title : '' : this.canvas.title = this.ctitle;
  }, b.SetTTDiv = function (c, d) {
    var a = this,
        b = a.ttdiv.style;
    c != a.ttdiv.innerHTML && (b.display = 'none'), a.ttdiv.innerHTML = c, d && (d.title = a.ttdiv.innerHTML), b.display == 'none' && !a.tttimer && (a.tttimer = setTimeout(function () {
      var c = X(a.canvas.id);
      b.display = 'block', b.left = c.x + a.mx + 'px', b.top = c.y + a.my + 24 + 'px', a.tttimer = null;
    }, a.tooltipDelay));
  }, b.TooltipDiv = function (b, a) {
    b && a && a.title ? this.SetTTDiv(a.title, a) : !b && this.mx != -1 && this.my != -1 && this.ctitle.length ? this.SetTTDiv(this.ctitle) : this.ttdiv.style.display = 'none';
  }, b.Transform = function (c, a, b) {
    if (a || b) {
      var d = o(a),
          e = l(a),
          f = o(b),
          g = l(b),
          h = new m([g, 0, f, 0, 1, 0, -f, 0, g]),
          i = new m([1, 0, 0, 0, e, -d, 0, d, e]);
      c.transform = c.transform.mul(h.mul(i));
    }
  }, b.AnimateFixed = function () {
    var a, b, c, d, e;
    return !!(this.fadeIn && (b = q() - this.startTime, b >= this.fadeIn ? (this.fadeIn = 0, this.fixedAlpha = 1) : this.fixedAlpha = b / this.fadeIn), this.fixedAnim) && (this.fixedAnim.transform || (this.fixedAnim.transform = this.transform), a = this.fixedAnim, b = q() - a.t0, c = a.angle, d, e = this.animTiming(a.t, b), this.transform = a.transform, b >= a.t ? (this.fixedCallbackTag = a.tag, this.fixedCallback = a.cb, this.fixedAnim = this.yaw = this.pitch = 0) : c *= e, d = m.Rotation(c, a.axis), this.transform = this.transform.mul(d), this.fixedAnim != 0);
  }, b.AnimatePosition = function (g, h, f) {
    var a = this,
        d = a.mx,
        e = a.my,
        b,
        c;
    !a.frozen && d >= 0 && e >= 0 && d < g && e < h ? (b = a.maxSpeed, c = a.reverse ? -1 : 1, a.lx || (a.yaw = (d * 2 * b / g - b) * c * f), a.ly || (a.pitch = (e * 2 * b / h - b) * -c * f), a.initial = null) : a.initial || (a.frozen && !a.freezeDecel ? a.yaw = a.pitch = 0 : a.Decel(a)), this.Transform(a, a.pitch, a.yaw);
  }, b.AnimateDrag = function (d, e, c) {
    var a = this,
        b = 100 * c * a.maxSpeed / a.max_radius / a.zoom;
    a.dx || a.dy ? (a.lx || (a.yaw = a.dx * b / a.stretchX), a.ly || (a.pitch = a.dy * -b / a.stretchY), a.dx = a.dy = 0, a.initial = null) : a.initial || a.Decel(a), this.Transform(a, a.pitch, a.yaw);
  }, b.Freeze = function () {
    this.frozen || (this.preFreeze = [this.yaw, this.pitch], this.frozen = 1, this.drawn = 0);
  }, b.UnFreeze = function () {
    this.frozen && (this.yaw = this.preFreeze[0], this.pitch = this.preFreeze[1], this.frozen = 0);
  }, b.Decel = function (a) {
    var b = a.minSpeed,
        c = p(a.yaw),
        d = p(a.pitch);
    !a.lx && c > b && (a.yaw = c > a.z0 ? a.yaw * a.decel : 0), !a.ly && d > b && (a.pitch = d > a.z0 ? a.pitch * a.decel : 0);
  }, b.Zoom = function (a) {
    this.z2 = this.z1 * (1 / a), this.drawn = 0;
  }, b.Clicked = function (b) {
    if (this.CheckAudioIcon()) {
      this.ToggleAudio();
      return;
    }

    var a = this.active;

    try {
      a && a.tag && (this.clickToFront === !1 || this.clickToFront === null ? a.tag.Clicked(b) : this.TagToFront(a.tag, this.clickToFront, function () {
        a.tag.Clicked(b);
      }, !0));
    } catch (a) {}
  }, b.Wheel = function (a) {
    var b = this.zoom + this.zoomStep * (a ? 1 : -1);
    this.zoom = h(this.zoomMax, g(this.zoomMin, b)), this.Zoom(this.zoom);
  }, b.BeginDrag = function (a) {
    this.down = K(a, this.canvas), a.cancelBubble = !0, a.returnValue = !1, a.preventDefault && a.preventDefault();
  }, b.Drag = function (e, a) {
    if (this.dragControl && this.down) {
      var d = this.dragThreshold * this.dragThreshold,
          b = a.x - this.down.x,
          c = a.y - this.down.y;
      (this.dragging || b * b + c * c > d) && (this.dx = b, this.dy = c, this.dragging = 1, this.down = a);
    }

    return this.dragging;
  }, b.EndDrag = function () {
    var a = this.dragging;
    return this.dragging = this.down = null, a;
  };

  function ah(a) {
    var b = a.targetTouches[0],
        c = a.targetTouches[1];
    return E(w(c.pageX - b.pageX, 2) + w(c.pageY - b.pageY, 2));
  }

  b.BeginPinch = function (a) {
    this.pinched = [ah(a), this.zoom], a.preventDefault && a.preventDefault();
  }, b.Pinch = function (d) {
    var b,
        c,
        a = this.pinched;
    if (!a) return;
    c = ah(d), b = a[1] * c / a[0], this.zoom = h(this.zoomMax, g(this.zoomMin, b)), this.Zoom(this.zoom);
  }, b.EndPinch = function (a) {
    this.pinched = null;
  }, b.Pause = function () {
    this.paused = !0;
  }, b.Resume = function () {
    this.paused = !1;
  }, b.SetSpeed = function (a) {
    this.initial = a, this.yaw = a[0] * this.maxSpeed, this.pitch = a[1] * this.maxSpeed;
  }, b.FindTag = function (a) {
    if (!n(a)) return null;
    if (n(a.index) && (a = a.index), !B(a)) return this.taglist[a];
    var c, d, b;
    n(a.id) ? (c = 'id', d = a.id) : n(a.text) && (c = 'innerText', d = a.text);

    for (b = 0; b < this.taglist.length; ++b) {
      if (this.taglist[b].a[c] == d) return this.taglist[b];
    }
  }, b.RotateTag = function (a, h, i, j, f, g) {
    var b = a.Calc(this.transform, 1),
        c = new s(b.x, b.y, b.z),
        d = ay(i, h),
        e = c.angle(d),
        k = c.cross(d).unit();
    e == 0 ? (this.fixedCallbackTag = a, this.fixedCallback = f) : this.fixedAnim = {
      angle: -e,
      axis: k,
      t: j,
      t0: q(),
      cb: f,
      tag: a,
      active: g
    };
  }, b.TagToFront = function (a, b, c, d) {
    this.RotateTag(a, 0, 0, b, c, d);
  }, b.Volume = function (a) {
    this.audioVolume = a * 1;
  }, a.Start = function (b, c, d) {
    a.Delete(b), a.tc[b] = new a(b, c, d);
  };

  function N(c, b) {
    a.tc[b] && a.tc[b][c]();
  }

  a.Linear = function (a, b) {
    return b / a;
  }, a.Smooth = function (a, b) {
    return .5 - l(b * Math.PI / a) / 2;
  }, a.Pause = function (a) {
    N('Pause', a);
  }, a.Resume = function (a) {
    N('Resume', a);
  }, a.Reload = function (a) {
    N('Load', a);
  }, a.Update = function (a) {
    N('Update', a);
  }, a.SetSpeed = function (c, b) {
    return !!(B(b) && a.tc[c] && !isNaN(b[0]) && !isNaN(b[1])) && (a.tc[c].SetSpeed(b), !0);
  }, a.TagToFront = function (c, b) {
    return !!B(b) && (b.lat = b.lng = 0, a.RotateTag(c, b));
  }, a.RotateTag = function (c, b) {
    if (B(b) && a.tc[c]) {
      isNaN(b.time) && (b.time = 500);
      var d = a.tc[c].FindTag(b);
      if (d) return a.tc[c].RotateTag(d, b.lat, b.lng, b.time, b.callback, b.active), !0;
    }

    return !1;
  }, a.Delete = function (b) {
    var d, e;
    if (j[b]) if (e = c.getElementById(b), e) for (d = 0; d < j[b].length; ++d) {
      am(j[b][d][0], j[b][d][1], e);
    }
    delete j[b], delete a.tc[b];
  }, a.tc = {}, a.options = {
    z1: 2e4,
    z2: 2e4,
    z0: 2e-4,
    freezeActive: !1,
    freezeDecel: !1,
    activeCursor: 'pointer',
    pulsateTo: 1,
    pulsateTime: 3,
    reverse: !1,
    depth: .5,
    maxSpeed: .05,
    minSpeed: 0,
    decel: .95,
    interval: 20,
    minBrightness: .1,
    maxBrightness: 1,
    outlineColour: '#ffff99',
    outlineThickness: 2,
    outlineOffset: 5,
    outlineMethod: 'outline',
    outlineRadius: 0,
    textColour: '#ff99ff',
    textHeight: 15,
    textFont: 'Helvetica, Arial, sans-serif',
    shadow: '#000',
    shadowBlur: 0,
    shadowOffset: [0, 0],
    initial: null,
    hideTags: !0,
    zoom: 1,
    weight: !1,
    weightMode: 'size',
    weightFrom: null,
    weightSize: 1,
    weightSizeMin: null,
    weightSizeMax: null,
    weightGradient: {
      0: '#f00',
      0.33: '#ff0',
      0.66: '#0f0',
      1: '#00f'
    },
    txtOpt: !0,
    txtScale: 2,
    frontSelect: !1,
    wheelZoom: !0,
    zoomMin: .3,
    zoomMax: 3,
    zoomStep: .05,
    shape: 'sphere',
    lock: null,
    tooltip: null,
    tooltipDelay: 300,
    tooltipClass: 'tctooltip',
    radiusX: 1,
    radiusY: 1,
    radiusZ: 1,
    stretchX: 1,
    stretchY: 1,
    offsetX: 0,
    offsetY: 0,
    shuffleTags: !1,
    noSelect: !1,
    noMouse: !1,
    imageScale: 1,
    paused: !1,
    dragControl: !1,
    dragThreshold: 4,
    centreFunc: x,
    splitWidth: 0,
    animTiming: 'Smooth',
    clickToFront: !1,
    fadeIn: 0,
    padding: 0,
    bgColour: null,
    bgRadius: 0,
    bgOutline: null,
    bgOutlineThickness: 0,
    outlineIncrease: 4,
    textAlign: 'centre',
    textVAlign: 'middle',
    imageMode: null,
    imagePosition: null,
    imagePadding: 2,
    imageAlign: 'centre',
    imageVAlign: 'middle',
    noTagsMessage: !0,
    centreImage: null,
    pinchZoom: !1,
    repeatTags: 0,
    minTags: 0,
    imageRadius: 0,
    scrollPause: !1,
    outlineDash: 0,
    outlineDashSpace: 0,
    outlineDashSpeed: 1,
    activeAudio: '',
    audioVolume: 1,
    audioIcon: 1,
    audioIconSize: 20,
    audioIconThickness: 2,
    audioIconDark: 0,
    altImage: 0
  };

  for (r in a.options) {
    a[r] = a.options[r];
  }

  window.TagCanvas = a, t('load', function () {
    a.loaded = 1;
  }, window);
})();

/***/ }),

/***/ "./resources/js/src/components/Frontend/UI/Animation/TagCanvas/index.js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/components/Frontend/UI/Animation/TagCanvas/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReactTagCanvas)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_js_tagcanvas_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../assets/js/tagcanvas.min */ "./resources/js/src/assets/js/tagcanvas.min.js");
/* harmony import */ var _assets_js_tagcanvas_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_tagcanvas_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TagCanvas_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TagCanvas.scss */ "./resources/js/src/components/Frontend/UI/Animation/TagCanvas/TagCanvas.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var ReactTagCanvas = /*#__PURE__*/function (_Component) {
  _inherits(ReactTagCanvas, _Component);

  var _super = _createSuper(ReactTagCanvas);

  function ReactTagCanvas() {
    _classCallCheck(this, ReactTagCanvas);

    return _super.apply(this, arguments);
  }

  _createClass(ReactTagCanvas, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = {
        wheelZoom: false,
        initial: [0.3, 0.3],
        textColour: '#DBAB0F',
        outlineColour: 'transparent'
      };
      var canvasId = 'myCanvas';
      TagCanvas.Start(canvasId, '', options);
    }
  }, {
    key: "render",
    value: function render() {
      var listItemsContent = this.props.listItems.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
            href: "#",
            children: item
          })
        }, 'item-' + item);
      });
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "TagCanvas",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          id: "myCanvasContainer",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("canvas", {
            width: "500",
            height: "500",
            id: "myCanvas",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              children: "Anything in here will be replaced on browsers that support the canvas element"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
              className: "text-gs",
              children: listItemsContent
            })]
          })
        })
      });
    }
  }]);

  return ReactTagCanvas;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./resources/js/src/components/Frontend/UI/Title/SectionTitle/index.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/components/Frontend/UI/Title/SectionTitle/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _SectionTitle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionTitle.scss */ "./resources/js/src/components/Frontend/UI/Title/SectionTitle/SectionTitle.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var SectionTitle = function SectionTitle(_ref) {
  var head = _ref.head,
      title = _ref.title,
      subtitle = _ref.subtitle,
      centered = _ref.centered;
  var i = 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "SectionTitle".concat(centered ? " centered" : ""),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "text",
      children: [head && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "super",
        children: head
      }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "title",
        children: title.split(" ").map(function (word) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "word",
            children: word.split("").map(function (letter) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                style: {
                  "--section-title-title-letter-i": ++i
                },
                children: letter
              }, "SectionTitle-word-".concat(word, "-letter-").concat(i));
            })
          }, "SectionTitle-word-".concat(word));
        })
      }), subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "subtitle",
        children: subtitle
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);

/***/ }),

/***/ "./resources/js/src/containers/Frontend/About/index.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/About/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_UI_Preloaders_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/UI/Preloaders/Loading */ "./resources/js/src/components/UI/Preloaders/Loading/index.js");
/* harmony import */ var _components_Frontend_UI_Animation_TagCanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Frontend/UI/Animation/TagCanvas */ "./resources/js/src/components/Frontend/UI/Animation/TagCanvas/index.js");
/* harmony import */ var _components_Frontend_UI_Title_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Frontend/UI/Title/SectionTitle */ "./resources/js/src/components/Frontend/UI/Title/SectionTitle/index.js");
/* harmony import */ var _store_actions_frontend_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/actions/frontend/about */ "./resources/js/src/store/actions/frontend/about.js");
/* harmony import */ var _About_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./About.scss */ "./resources/js/src/containers/Frontend/About/About.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var About = /*#__PURE__*/function (_Component) {
  _inherits(About, _Component);

  var _super = _createSuper(About);

  function About() {
    var _this;

    _classCallCheck(this, About);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isMounted: false
    });

    return _this;
  }

  _createClass(About, [{
    key: "componentDidMount",
    value: // Lifecycle methods
    function componentDidMount() {
      this.props.get();
      this.setState({
        isMounted: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.reset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$content = _this$props.content,
          cms = _this$props$content.cms.pages.frontend.pages.about,
          all_technologies = _this$props$content.all_technologies,
          loading = _this$props.frontend.about.loading;
      var isMounted = this.state.isMounted;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_UI_Preloaders_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
        loading: isMounted && loading,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "About",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("section", {
            className: "about",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "container",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "col-lg-6 text",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Frontend_UI_Title_SectionTitle__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({}, cms)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: cms.description
                    }
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "col-lg-6 canvas",
                  children: all_technologies.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Frontend_UI_Animation_TagCanvas__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    listItems: all_technologies
                  })
                })]
              })
            })
          })
        })
      });
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    get: function get() {
      return dispatch((0,_store_actions_frontend_about__WEBPACK_IMPORTED_MODULE_5__.getAbout)());
    },
    reset: function reset() {
      return dispatch((0,_store_actions_frontend_about__WEBPACK_IMPORTED_MODULE_5__.resetAbout)());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(About)));

/***/ }),

/***/ "./resources/js/src/store/actions/frontend/about.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/store/actions/frontend/about.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAbout": () => (/* binding */ getAbout),
/* harmony export */   "resetAbout": () => (/* binding */ resetAbout)
/* harmony export */ });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./resources/js/src/store/actions/actionTypes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var prefix = '/api/';
var resetAbout = function resetAbout() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.ABOUT_RESET
  };
};

var aboutStart = function aboutStart() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.ABOUT_START
  };
};

var aboutSuccess = function aboutSuccess(data) {
  return _objectSpread({
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.ABOUT_SUCCESS
  }, data);
};

var aboutFail = function aboutFail(error) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__.ABOUT_FAIL,
    error: error
  };
};

var getAbout = function getAbout() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {
      var res, resData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(aboutStart());
              _context.prev = 1;
              _context.next = 4;
              return fetch("".concat(prefix, "about"));

            case 4:
              res = _context.sent;
              _context.next = 7;
              return res.json();

            case 7:
              resData = _context.sent;
              dispatch(aboutSuccess(resData));
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              dispatch(aboutFail(_context.t0));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/components/Frontend/UI/Animation/TagCanvas/TagCanvas.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/components/Frontend/UI/Animation/TagCanvas/TagCanvas.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".TagCanvas #myCanvas {\n  margin: auto;\n  width: 100%;\n}\n.TagCanvas li a {\n  color: var(--yellow);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/components/Frontend/UI/Title/SectionTitle/SectionTitle.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/components/Frontend/UI/Title/SectionTitle/SectionTitle.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".SectionTitle {\n  margin-bottom: 15px;\n}\n.SectionTitle .text .title {\n  color: var(--blue);\n  letter-spacing: -0.03em;\n  font-size: var(--section-font-size-sm);\n}\n.SectionTitle .text .title span {\n  position: relative;\n  display: inline-block;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  transform: translateY(0);\n  transition: var(--transition-fast);\n  -webkit-animation-name: section-title-title;\n          animation-name: section-title-title;\n  -webkit-animation-delay: calc(0.1s * var(--section-title-title-letter-i));\n          animation-delay: calc(0.1s * var(--section-title-title-letter-i));\n}\n@-webkit-keyframes section-title-title {\n  0%, 40%, 100% {\n    transform: translateY(0);\n  }\n  20% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes section-title-title {\n  0%, 40%, 100% {\n    transform: translateY(0);\n  }\n  20% {\n    transform: translateY(-10px);\n  }\n}\n.SectionTitle .text .title span:hover {\n  transform: translateY(-10px);\n}\n.SectionTitle .text .title .word {\n  display: inline-block;\n}\n.SectionTitle .text .title .word:not(:last-child) {\n  margin-right: 10px;\n}\n.SectionTitle .text .subtitle {\n  margin-top: 23.4px;\n  text-align: justify;\n}\n.SectionTitle.centered .text {\n  display: flex;\n  text-align: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n@media (min-width: 800px) {\n  .SectionTitle {\n    margin-bottom: 20px;\n  }\n  .SectionTitle .text .title {\n    margin-bottom: 3px;\n    font-size: var(--section-font-size-md);\n  }\n}\n@media (min-width: 1280px) {\n  .SectionTitle {\n    margin-bottom: 25px;\n  }\n  .SectionTitle .text .title {\n    margin-bottom: 7px;\n    font-size: var(--section-font-size);\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/containers/Frontend/About/About.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/containers/Frontend/About/About.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.Frontend .About section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: calc(100vh - var(--toolbar-bottom-height));\n}\n.Frontend .About section.about .row {\n  align-items: center;\n}\n.Frontend .About section.about .row .text p {\n  margin-bottom: 20px;\n}\n.Frontend .About section.about .row .text p a {\n  text-decoration: none;\n}\n.Frontend .About section.about .row .text ul {\n  list-style-type: none;\n}\n.Frontend .About section.about .row .text ul li {\n  width: 50%;\n  display: inline-block;\n}\n.Frontend .About section.about .row .text ul li::before {\n  content: \"▹\";\n  margin-right: 5px;\n  color: var(--app-secondary-color);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/components/Frontend/UI/Animation/TagCanvas/TagCanvas.scss":
/*!************************************************************************************!*\
  !*** ./resources/js/src/components/Frontend/UI/Animation/TagCanvas/TagCanvas.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_TagCanvas_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./TagCanvas.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/components/Frontend/UI/Animation/TagCanvas/TagCanvas.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_TagCanvas_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_TagCanvas_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/components/Frontend/UI/Title/SectionTitle/SectionTitle.scss":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/components/Frontend/UI/Title/SectionTitle/SectionTitle.scss ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_SectionTitle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./SectionTitle.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/components/Frontend/UI/Title/SectionTitle/SectionTitle.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_SectionTitle_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_SectionTitle_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/containers/Frontend/About/About.scss":
/*!***************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/About/About.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_About_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./About.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./resources/js/src/containers/Frontend/About/About.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_About_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_About_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);