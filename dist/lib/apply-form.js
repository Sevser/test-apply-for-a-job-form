function Ka(e, t) {
  const n = /* @__PURE__ */ Object.create(null), a = e.split(",");
  for (let r = 0; r < a.length; r++)
    n[a[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function An(e) {
  if (Ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], r = ct(a) ? O_(a) : An(a);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else {
    if (ct(e))
      return e;
    if (tt(e))
      return e;
  }
}
const S_ = /;(?![^(]*\))/g, k_ = /:([^]+)/, x_ = /\/\*.*?\*\//gs;
function O_(e) {
  const t = {};
  return e.replace(x_, "").split(S_).forEach((n) => {
    if (n) {
      const a = n.split(k_);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function et(e) {
  let t = "";
  if (ct(e))
    t = e;
  else if (Ne(e))
    for (let n = 0; n < e.length; n++) {
      const a = et(e[n]);
      a && (t += a + " ");
    }
  else if (tt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Kt(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !ct(t) && (e.class = et(t)), n && (e.style = An(n)), e;
}
const C_ = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", E_ = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", $_ = /* @__PURE__ */ Ka(C_), P_ = /* @__PURE__ */ Ka(E_), T_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", N_ = /* @__PURE__ */ Ka(T_);
function Xy(e) {
  return !!e || e === "";
}
const Dt = (e) => ct(e) ? e : e == null ? "" : Ne(e) || tt(e) && (e.toString === ep || !Le(e.toString)) ? JSON.stringify(e, Qy, 2) : String(e), Qy = (e, t) => t && t.__v_isRef ? Qy(e, t.value) : wr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [a, r]) => (n[`${a} =>`] = r, n), {})
} : Jy(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : tt(t) && !Ne(t) && !tp(t) ? String(t) : t, it = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, ro = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Yt = () => {
}, Zy = () => !1, D_ = /^on[^a-z]/, kl = (e) => D_.test(e), Ki = (e) => e.startsWith("onUpdate:"), bt = Object.assign, _d = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, V_ = Object.prototype.hasOwnProperty, ze = (e, t) => V_.call(e, t), Ne = Array.isArray, wr = (e) => tu(e) === "[object Map]", Jy = (e) => tu(e) === "[object Set]", Le = (e) => typeof e == "function", ct = (e) => typeof e == "string", wd = (e) => typeof e == "symbol", tt = (e) => e !== null && typeof e == "object", Sd = (e) => tt(e) && Le(e.then) && Le(e.catch), ep = Object.prototype.toString, tu = (e) => ep.call(e), kd = (e) => tu(e).slice(8, -1), tp = (e) => tu(e) === "[object Object]", xd = (e) => ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Zl = /* @__PURE__ */ Ka(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), I_ = /* @__PURE__ */ Ka("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), nu = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, A_ = /-(\w)/g, Bn = nu((e) => e.replace(A_, (t, n) => n ? n.toUpperCase() : "")), M_ = /\B([A-Z])/g, Sa = nu((e) => e.replace(M_, "-$1").toLowerCase()), Fn = nu((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ra = nu((e) => e ? `on${Fn(e)}` : ""), ol = (e, t) => !Object.is(e, t), Qr = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Xi = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, vc = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, R_ = (e) => {
  const t = ct(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Mv;
const np = () => Mv || (Mv = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Qi(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Sn;
class ap {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Sn, !t && Sn && (this.index = (Sn.scopes || (Sn.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Sn;
      try {
        return Sn = this, t();
      } finally {
        Sn = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Qi("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Sn = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Sn = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, a;
      for (n = 0, a = this.effects.length; n < a; n++)
        this.effects[n].stop();
      for (n = 0, a = this.cleanups.length; n < a; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, a = this.scopes.length; n < a; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function xl(e) {
  return new ap(e);
}
function B_(e, t = Sn) {
  t && t.active && t.effects.push(e);
}
function Od() {
  return Sn;
}
function fn(e) {
  Sn ? Sn.cleanups.push(e) : process.env.NODE_ENV !== "production" && Qi("onScopeDispose() is called when there is no active effect scope to be associated with.");
}
const ll = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, rp = (e) => (e.w & Wa) > 0, op = (e) => (e.n & Wa) > 0, F_ = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Wa;
}, L_ = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let a = 0; a < t.length; a++) {
      const r = t[a];
      rp(r) && !op(r) ? r.delete(e) : t[n++] = r, r.w &= ~Wa, r.n &= ~Wa;
    }
    t.length = n;
  }
}, Zi = /* @__PURE__ */ new WeakMap();
let Uo = 0, Wa = 1;
const mc = 30;
let sn;
const Sr = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), hc = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Cd {
  constructor(t, n = null, a) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, B_(this, a);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = sn, n = ja;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = sn, sn = this, ja = !0, Wa = 1 << ++Uo, Uo <= mc ? F_(this) : Rv(this), this.fn();
    } finally {
      Uo <= mc && L_(this), Wa = 1 << --Uo, sn = this.parent, ja = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    sn === this ? this.deferStop = !0 : this.active && (Rv(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Rv(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let ja = !0;
const lp = [];
function Vr() {
  lp.push(ja), ja = !1;
}
function Ir() {
  const e = lp.pop();
  ja = e === void 0 ? !0 : e;
}
function dn(e, t, n) {
  if (ja && sn) {
    let a = Zi.get(e);
    a || Zi.set(e, a = /* @__PURE__ */ new Map());
    let r = a.get(n);
    r || a.set(n, r = ll());
    const o = process.env.NODE_ENV !== "production" ? { effect: sn, target: e, type: t, key: n } : void 0;
    yc(r, o);
  }
}
function yc(e, t) {
  let n = !1;
  Uo <= mc ? op(e) || (e.n |= Wa, n = !rp(e)) : n = !e.has(sn), n && (e.add(sn), sn.deps.push(e), process.env.NODE_ENV !== "production" && sn.onTrack && sn.onTrack(Object.assign({ effect: sn }, t)));
}
function ka(e, t, n, a, r, o) {
  const l = Zi.get(e);
  if (!l)
    return;
  let i = [];
  if (t === "clear")
    i = [...l.values()];
  else if (n === "length" && Ne(e)) {
    const u = Number(a);
    l.forEach((d, c) => {
      (c === "length" || c >= u) && i.push(d);
    });
  } else
    switch (n !== void 0 && i.push(l.get(n)), t) {
      case "add":
        Ne(e) ? xd(n) && i.push(l.get("length")) : (i.push(l.get(Sr)), wr(e) && i.push(l.get(hc)));
        break;
      case "delete":
        Ne(e) || (i.push(l.get(Sr)), wr(e) && i.push(l.get(hc)));
        break;
      case "set":
        wr(e) && i.push(l.get(Sr));
        break;
    }
  const s = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: a, oldValue: r, oldTarget: o } : void 0;
  if (i.length === 1)
    i[0] && (process.env.NODE_ENV !== "production" ? eo(i[0], s) : eo(i[0]));
  else {
    const u = [];
    for (const d of i)
      d && u.push(...d);
    process.env.NODE_ENV !== "production" ? eo(ll(u), s) : eo(ll(u));
  }
}
function eo(e, t) {
  const n = Ne(e) ? e : [...e];
  for (const a of n)
    a.computed && Bv(a, t);
  for (const a of n)
    a.computed || Bv(a, t);
}
function Bv(e, t) {
  (e !== sn || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(bt({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
function j_(e, t) {
  var n;
  return (n = Zi.get(e)) === null || n === void 0 ? void 0 : n.get(t);
}
const H_ = /* @__PURE__ */ Ka("__proto__,__v_isRef,__isVue"), ip = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(wd)
), U_ = /* @__PURE__ */ au(), Y_ = /* @__PURE__ */ au(!1, !0), W_ = /* @__PURE__ */ au(!0), z_ = /* @__PURE__ */ au(!0, !0), Fv = /* @__PURE__ */ q_();
function q_() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const a = Te(this);
      for (let o = 0, l = this.length; o < l; o++)
        dn(a, "get", o + "");
      const r = a[t](...n);
      return r === -1 || r === !1 ? a[t](...n.map(Te)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Vr();
      const a = Te(this)[t].apply(this, n);
      return Ir(), a;
    };
  }), e;
}
function G_(e) {
  const t = Te(this);
  return dn(t, "has", e), t.hasOwnProperty(e);
}
function au(e = !1, t = !1) {
  return function(a, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && o === (e ? t ? hp : mp : t ? vp : dp).get(a))
      return a;
    const l = Ne(a);
    if (!e) {
      if (l && ze(Fv, r))
        return Reflect.get(Fv, r, o);
      if (r === "hasOwnProperty")
        return G_;
    }
    const i = Reflect.get(a, r, o);
    return (wd(r) ? ip.has(r) : H_(r)) || (e || dn(a, "get", r), t) ? i : Ye(i) ? l && xd(r) ? i : i.value : tt(i) ? e ? Ol(i) : Ct(i) : i;
  };
}
const K_ = /* @__PURE__ */ sp(), X_ = /* @__PURE__ */ sp(!0);
function sp(e = !1) {
  return function(n, a, r, o) {
    let l = n[a];
    if (za(l) && Ye(l) && !Ye(r))
      return !1;
    if (!e && (!Ji(r) && !za(r) && (l = Te(l), r = Te(r)), !Ne(n) && Ye(l) && !Ye(r)))
      return l.value = r, !0;
    const i = Ne(n) && xd(a) ? Number(a) < n.length : ze(n, a), s = Reflect.set(n, a, r, o);
    return n === Te(o) && (i ? ol(r, l) && ka(n, "set", a, r, l) : ka(n, "add", a, r)), s;
  };
}
function Q_(e, t) {
  const n = ze(e, t), a = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && ka(e, "delete", t, void 0, a), r;
}
function Z_(e, t) {
  const n = Reflect.has(e, t);
  return (!wd(t) || !ip.has(t)) && dn(e, "has", t), n;
}
function J_(e) {
  return dn(e, "iterate", Ne(e) ? "length" : Sr), Reflect.ownKeys(e);
}
const up = {
  get: U_,
  set: K_,
  deleteProperty: Q_,
  has: Z_,
  ownKeys: J_
}, cp = {
  get: W_,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Qi(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Qi(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, ew = /* @__PURE__ */ bt({}, up, {
  get: Y_,
  set: X_
}), tw = /* @__PURE__ */ bt({}, cp, {
  get: z_
}), Ed = (e) => e, ru = (e) => Reflect.getPrototypeOf(e);
function Rl(e, t, n = !1, a = !1) {
  e = e.__v_raw;
  const r = Te(e), o = Te(t);
  n || (t !== o && dn(r, "get", t), dn(r, "get", o));
  const { has: l } = ru(r), i = a ? Ed : n ? $d : il;
  if (l.call(r, t))
    return i(e.get(t));
  if (l.call(r, o))
    return i(e.get(o));
  e !== r && e.get(t);
}
function Bl(e, t = !1) {
  const n = this.__v_raw, a = Te(n), r = Te(e);
  return t || (e !== r && dn(a, "has", e), dn(a, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Fl(e, t = !1) {
  return e = e.__v_raw, !t && dn(Te(e), "iterate", Sr), Reflect.get(e, "size", e);
}
function Lv(e) {
  e = Te(e);
  const t = Te(this);
  return ru(t).has.call(t, e) || (t.add(e), ka(t, "add", e, e)), this;
}
function jv(e, t) {
  t = Te(t);
  const n = Te(this), { has: a, get: r } = ru(n);
  let o = a.call(n, e);
  o ? process.env.NODE_ENV !== "production" && fp(n, a, e) : (e = Te(e), o = a.call(n, e));
  const l = r.call(n, e);
  return n.set(e, t), o ? ol(t, l) && ka(n, "set", e, t, l) : ka(n, "add", e, t), this;
}
function Hv(e) {
  const t = Te(this), { has: n, get: a } = ru(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && fp(t, n, e) : (e = Te(e), r = n.call(t, e));
  const o = a ? a.call(t, e) : void 0, l = t.delete(e);
  return r && ka(t, "delete", e, void 0, o), l;
}
function Uv() {
  const e = Te(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? wr(e) ? new Map(e) : new Set(e) : void 0, a = e.clear();
  return t && ka(e, "clear", void 0, void 0, n), a;
}
function Ll(e, t) {
  return function(a, r) {
    const o = this, l = o.__v_raw, i = Te(l), s = t ? Ed : e ? $d : il;
    return !e && dn(i, "iterate", Sr), l.forEach((u, d) => a.call(r, s(u), s(d), o));
  };
}
function jl(e, t, n) {
  return function(...a) {
    const r = this.__v_raw, o = Te(r), l = wr(o), i = e === "entries" || e === Symbol.iterator && l, s = e === "keys" && l, u = r[e](...a), d = n ? Ed : t ? $d : il;
    return !t && dn(o, "iterate", s ? hc : Sr), {
      // iterator protocol
      next() {
        const { value: c, done: f } = u.next();
        return f ? { value: c, done: f } : {
          value: i ? [d(c[0]), d(c[1])] : d(c),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Va(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${Fn(e)} operation ${n}failed: target is readonly.`, Te(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function nw() {
  const e = {
    get(o) {
      return Rl(this, o);
    },
    get size() {
      return Fl(this);
    },
    has: Bl,
    add: Lv,
    set: jv,
    delete: Hv,
    clear: Uv,
    forEach: Ll(!1, !1)
  }, t = {
    get(o) {
      return Rl(this, o, !1, !0);
    },
    get size() {
      return Fl(this);
    },
    has: Bl,
    add: Lv,
    set: jv,
    delete: Hv,
    clear: Uv,
    forEach: Ll(!1, !0)
  }, n = {
    get(o) {
      return Rl(this, o, !0);
    },
    get size() {
      return Fl(this, !0);
    },
    has(o) {
      return Bl.call(this, o, !0);
    },
    add: Va(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Va(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Va(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Va(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Ll(!0, !1)
  }, a = {
    get(o) {
      return Rl(this, o, !0, !0);
    },
    get size() {
      return Fl(this, !0);
    },
    has(o) {
      return Bl.call(this, o, !0);
    },
    add: Va(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Va(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Va(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Va(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Ll(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = jl(o, !1, !1), n[o] = jl(o, !0, !1), t[o] = jl(o, !1, !0), a[o] = jl(o, !0, !0);
  }), [
    e,
    n,
    t,
    a
  ];
}
const [aw, rw, ow, lw] = /* @__PURE__ */ nw();
function ou(e, t) {
  const n = t ? e ? lw : ow : e ? rw : aw;
  return (a, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? a : Reflect.get(ze(n, r) && r in a ? n : a, r, o);
}
const iw = {
  get: /* @__PURE__ */ ou(!1, !1)
}, sw = {
  get: /* @__PURE__ */ ou(!1, !0)
}, uw = {
  get: /* @__PURE__ */ ou(!0, !1)
}, cw = {
  get: /* @__PURE__ */ ou(!0, !0)
};
function fp(e, t, n) {
  const a = Te(n);
  if (a !== n && t.call(e, a)) {
    const r = kd(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const dp = /* @__PURE__ */ new WeakMap(), vp = /* @__PURE__ */ new WeakMap(), mp = /* @__PURE__ */ new WeakMap(), hp = /* @__PURE__ */ new WeakMap();
function fw(e) {
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
function dw(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : fw(kd(e));
}
function Ct(e) {
  return za(e) ? e : lu(e, !1, up, iw, dp);
}
function vw(e) {
  return lu(e, !1, ew, sw, vp);
}
function Ol(e) {
  return lu(e, !0, cp, uw, mp);
}
function to(e) {
  return lu(e, !0, tw, cw, hp);
}
function lu(e, t, n, a, r) {
  if (!tt(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const l = dw(e);
  if (l === 0)
    return e;
  const i = new Proxy(e, l === 2 ? a : n);
  return r.set(e, i), i;
}
function ia(e) {
  return za(e) ? ia(e.__v_raw) : !!(e && e.__v_isReactive);
}
function za(e) {
  return !!(e && e.__v_isReadonly);
}
function Ji(e) {
  return !!(e && e.__v_isShallow);
}
function es(e) {
  return ia(e) || za(e);
}
function Te(e) {
  const t = e && e.__v_raw;
  return t ? Te(t) : e;
}
function Yn(e) {
  return Xi(e, "__v_skip", !0), e;
}
const il = (e) => tt(e) ? Ct(e) : e, $d = (e) => tt(e) ? Ol(e) : e;
function yp(e) {
  ja && sn && (e = Te(e), process.env.NODE_ENV !== "production" ? yc(e.dep || (e.dep = ll()), {
    target: e,
    type: "get",
    key: "value"
  }) : yc(e.dep || (e.dep = ll())));
}
function pp(e, t) {
  e = Te(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? eo(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : eo(n));
}
function Ye(e) {
  return !!(e && e.__v_isRef === !0);
}
function R(e) {
  return bp(e, !1);
}
function gp(e) {
  return bp(e, !0);
}
function bp(e, t) {
  return Ye(e) ? e : new mw(e, t);
}
class mw {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Te(t), this._value = n ? t : il(t);
  }
  get value() {
    return yp(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ji(t) || za(t);
    t = n ? t : Te(t), ol(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : il(t), pp(this, t));
  }
}
function M(e) {
  return Ye(e) ? e.value : e;
}
const hw = {
  get: (e, t, n) => M(Reflect.get(e, t, n)),
  set: (e, t, n, a) => {
    const r = e[t];
    return Ye(r) && !Ye(n) ? (r.value = n, !0) : Reflect.set(e, t, n, a);
  }
};
function _p(e) {
  return ia(e) ? e : new Proxy(e, hw);
}
function sl(e) {
  process.env.NODE_ENV !== "production" && !es(e) && console.warn("toRefs() expects a reactive object but received a plain one.");
  const t = Ne(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = ne(e, n);
  return t;
}
class yw {
  constructor(t, n, a) {
    this._object = t, this._key = n, this._defaultValue = a, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return j_(Te(this._object), this._key);
  }
}
function ne(e, t, n) {
  const a = e[t];
  return Ye(a) ? a : new yw(e, t, n);
}
var wp;
class pw {
  constructor(t, n, a, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[wp] = !1, this._dirty = !0, this.effect = new Cd(t, () => {
      this._dirty || (this._dirty = !0, pp(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = a;
  }
  get value() {
    const t = Te(this);
    return yp(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
wp = "__v_isReadonly";
function gw(e, t, n = !1) {
  let a, r;
  const o = Le(e);
  o ? (a = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Yt) : (a = e.get, r = e.set);
  const l = new pw(a, r, o || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (l.effect.onTrack = t.onTrack, l.effect.onTrigger = t.onTrigger), l;
}
const kr = [];
function Jl(e) {
  kr.push(e);
}
function ei() {
  kr.pop();
}
function ie(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  Vr();
  const n = kr.length ? kr[kr.length - 1].component : null, a = n && n.appContext.config.warnHandler, r = bw();
  if (a)
    _a(a, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: o }) => `at <${mu(n, o.type)}>`).join(`
`),
      r
    ]);
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ..._w(r)), console.warn(...o);
  }
  Ir();
}
function bw() {
  let e = kr[kr.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const a = e.component && e.component.parent;
    e = a && a.vnode;
  }
  return t;
}
function _w(e) {
  const t = [];
  return e.forEach((n, a) => {
    t.push(...a === 0 ? [] : [`
`], ...ww(n));
  }), t;
}
function ww({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", a = e.component ? e.component.parent == null : !1, r = ` at <${mu(e.component, e.type, a)}`, o = ">" + n;
  return e.props ? [r, ...Sw(e.props), o] : [r + o];
}
function Sw(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((a) => {
    t.push(...Sp(a, e[a]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Sp(e, t, n) {
  return ct(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ye(t) ? (t = Sp(e, Te(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Le(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Te(t), n ? t : [`${e}=`, t]);
}
function kw(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? ie(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && ie(`${t} is NaN - the duration expression might be incorrect.`));
}
const Pd = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [
    0
    /* ErrorCodes.SETUP_FUNCTION */
  ]: "setup function",
  [
    1
    /* ErrorCodes.RENDER_FUNCTION */
  ]: "render function",
  [
    2
    /* ErrorCodes.WATCH_GETTER */
  ]: "watcher getter",
  [
    3
    /* ErrorCodes.WATCH_CALLBACK */
  ]: "watcher callback",
  [
    4
    /* ErrorCodes.WATCH_CLEANUP */
  ]: "watcher cleanup function",
  [
    5
    /* ErrorCodes.NATIVE_EVENT_HANDLER */
  ]: "native event handler",
  [
    6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
  ]: "component event handler",
  [
    7
    /* ErrorCodes.VNODE_HOOK */
  ]: "vnode hook",
  [
    8
    /* ErrorCodes.DIRECTIVE_HOOK */
  ]: "directive hook",
  [
    9
    /* ErrorCodes.TRANSITION_HOOK */
  ]: "transition hook",
  [
    10
    /* ErrorCodes.APP_ERROR_HANDLER */
  ]: "app errorHandler",
  [
    11
    /* ErrorCodes.APP_WARN_HANDLER */
  ]: "app warnHandler",
  [
    12
    /* ErrorCodes.FUNCTION_REF */
  ]: "ref function",
  [
    13
    /* ErrorCodes.ASYNC_COMPONENT_LOADER */
  ]: "async component loader",
  [
    14
    /* ErrorCodes.SCHEDULER */
  ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function _a(e, t, n, a) {
  let r;
  try {
    r = a ? e(...a) : e();
  } catch (o) {
    iu(o, t, n);
  }
  return r;
}
function Mn(e, t, n, a) {
  if (Le(e)) {
    const o = _a(e, t, n, a);
    return o && Sd(o) && o.catch((l) => {
      iu(l, t, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(Mn(e[o], t, n, a));
  return r;
}
function iu(e, t, n, a = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const l = t.proxy, i = process.env.NODE_ENV !== "production" ? Pd[n] : n;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, l, i) === !1)
            return;
      }
      o = o.parent;
    }
    const s = t.appContext.config.errorHandler;
    if (s) {
      _a(s, null, 10, [e, l, i]);
      return;
    }
  }
  xw(e, n, r, a);
}
function xw(e, t, n, a = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = Pd[t];
    if (n && Jl(n), ie(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && ei(), a)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let ul = !1, pc = !1;
const Qt = [];
let ea = 0;
const oo = [];
let Jn = null, Ba = 0;
const kp = /* @__PURE__ */ Promise.resolve();
let Td = null;
const Ow = 100;
function Je(e) {
  const t = Td || kp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Cw(e) {
  let t = ea + 1, n = Qt.length;
  for (; t < n; ) {
    const a = t + n >>> 1;
    cl(Qt[a]) < e ? t = a + 1 : n = a;
  }
  return t;
}
function su(e) {
  (!Qt.length || !Qt.includes(e, ul && e.allowRecurse ? ea + 1 : ea)) && (e.id == null ? Qt.push(e) : Qt.splice(Cw(e.id), 0, e), xp());
}
function xp() {
  !ul && !pc && (pc = !0, Td = kp.then(Ep));
}
function Ew(e) {
  const t = Qt.indexOf(e);
  t > ea && Qt.splice(t, 1);
}
function Op(e) {
  Ne(e) ? oo.push(...e) : (!Jn || !Jn.includes(e, e.allowRecurse ? Ba + 1 : Ba)) && oo.push(e), xp();
}
function Yv(e, t = ul ? ea + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < Qt.length; t++) {
    const n = Qt[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && Nd(e, n))
        continue;
      Qt.splice(t, 1), t--, n();
    }
  }
}
function Cp(e) {
  if (oo.length) {
    const t = [...new Set(oo)];
    if (oo.length = 0, Jn) {
      Jn.push(...t);
      return;
    }
    for (Jn = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Jn.sort((n, a) => cl(n) - cl(a)), Ba = 0; Ba < Jn.length; Ba++)
      process.env.NODE_ENV !== "production" && Nd(e, Jn[Ba]) || Jn[Ba]();
    Jn = null, Ba = 0;
  }
}
const cl = (e) => e.id == null ? 1 / 0 : e.id, $w = (e, t) => {
  const n = cl(e) - cl(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Ep(e) {
  pc = !1, ul = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Qt.sort($w);
  const t = process.env.NODE_ENV !== "production" ? (n) => Nd(e, n) : Yt;
  try {
    for (ea = 0; ea < Qt.length; ea++) {
      const n = Qt[ea];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        _a(
          n,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    ea = 0, Qt.length = 0, Cp(e), ul = !1, Td = null, (Qt.length || oo.length) && Ep(e);
  }
}
function Nd(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Ow) {
      const a = t.ownerInstance, r = a && Hd(a.type);
      return ie(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let Ha = !1;
const Zr = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (np().__VUE_HMR_RUNTIME__ = {
  createRecord: Mu($p),
  rerender: Mu(Nw),
  reload: Mu(Dw)
});
const $r = /* @__PURE__ */ new Map();
function Pw(e) {
  const t = e.type.__hmrId;
  let n = $r.get(t);
  n || ($p(t, e.type), n = $r.get(t)), n.instances.add(e);
}
function Tw(e) {
  $r.get(e.type.__hmrId).instances.delete(e);
}
function $p(e, t) {
  return $r.has(e) ? !1 : ($r.set(e, {
    initialDef: qo(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function qo(e) {
  return cg(e) ? e.__vccOpts : e;
}
function Nw(e, t) {
  const n = $r.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((a) => {
    t && (a.render = t, qo(a.type).render = t), a.renderCache = [], Ha = !0, a.update(), Ha = !1;
  }));
}
function Dw(e, t) {
  const n = $r.get(e);
  if (!n)
    return;
  t = qo(t), Wv(n.initialDef, t);
  const a = [...n.instances];
  for (const r of a) {
    const o = qo(r.type);
    Zr.has(o) || (o !== n.initialDef && Wv(o, t), Zr.add(o)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (Zr.add(o), r.ceReload(t.styles), Zr.delete(o)) : r.parent ? su(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Op(() => {
    for (const r of a)
      Zr.delete(qo(r.type));
  });
}
function Wv(e, t) {
  bt(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Mu(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (a) {
      console.error(a), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let ta, Yo = [], gc = !1;
function Cl(e, ...t) {
  ta ? ta.emit(e, ...t) : gc || Yo.push({ event: e, args: t });
}
function Pp(e, t) {
  var n, a;
  ta = e, ta ? (ta.enabled = !0, Yo.forEach(({ event: r, args: o }) => ta.emit(r, ...o)), Yo = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((a = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || a === void 0) && a.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    Pp(o, t);
  }), setTimeout(() => {
    ta || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, gc = !0, Yo = []);
  }, 3e3)) : (gc = !0, Yo = []);
}
function Vw(e, t) {
  Cl("app:init", e, t, {
    Fragment: ye,
    Text: ho,
    Comment: jt,
    Static: ti
  });
}
function Iw(e) {
  Cl("app:unmount", e);
}
const Aw = /* @__PURE__ */ Dd(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), Tp = /* @__PURE__ */ Dd(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), Mw = /* @__PURE__ */ Dd(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), Rw = (e) => {
  ta && typeof ta.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ta.cleanupBuffer(e) && Mw(e);
};
function Dd(e) {
  return (t) => {
    Cl(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Bw = /* @__PURE__ */ Np(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), Fw = /* @__PURE__ */ Np(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function Np(e) {
  return (t, n, a) => {
    Cl(e, t.appContext.app, t.uid, t, n, a);
  };
}
function Lw(e, t, n) {
  Cl("component:emit", e.appContext.app, e, t, n);
}
function jw(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const a = e.vnode.props || it;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: d, propsOptions: [c] } = e;
    if (d)
      if (!(t in d))
        (!c || !(Ra(t) in c)) && ie(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ra(t)}" prop.`);
      else {
        const f = d[t];
        Le(f) && (f(...n) || ie(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const o = t.startsWith("update:"), l = o && t.slice(7);
  if (l && l in a) {
    const d = `${l === "modelValue" ? "model" : l}Modifiers`, { number: c, trim: f } = a[d] || it;
    f && (r = n.map((v) => ct(v) ? v.trim() : v)), c && (r = n.map(vc));
  }
  if (process.env.NODE_ENV !== "production" && Lw(e, t, r), process.env.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && a[Ra(d)] && ie(`Event "${d}" is emitted in component ${mu(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Sa(t)}" instead of "${t}".`);
  }
  let i, s = a[i = Ra(t)] || // also try camelCase event handler (#2249)
  a[i = Ra(Bn(t))];
  !s && o && (s = a[i = Ra(Sa(t))]), s && Mn(s, e, 6, r);
  const u = a[i + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, Mn(u, e, 6, r);
  }
}
function Dp(e, t, n = !1) {
  const a = t.emitsCache, r = a.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let l = {}, i = !1;
  if (!Le(e)) {
    const s = (u) => {
      const d = Dp(u, t, !0);
      d && (i = !0, bt(l, d));
    };
    !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !o && !i ? (tt(e) && a.set(e, null), null) : (Ne(o) ? o.forEach((s) => l[s] = null) : bt(l, o), tt(e) && a.set(e, l), l);
}
function uu(e, t) {
  return !e || !kl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ze(e, t[0].toLowerCase() + t.slice(1)) || ze(e, Sa(t)) || ze(e, t));
}
let Rt = null, Vp = null;
function ts(e) {
  const t = Rt;
  return Rt = e, Vp = e && e.type.__scopeId || null, t;
}
function he(e, t = Rt, n) {
  if (!t || e._n)
    return e;
  const a = (...r) => {
    a._d && rm(-1);
    const o = ts(t);
    let l;
    try {
      l = e(...r);
    } finally {
      ts(o), a._d && rm(1);
    }
    return process.env.NODE_ENV !== "production" && Tp(t), l;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
let bc = !1;
function ns() {
  bc = !0;
}
function Ru(e) {
  const { type: t, vnode: n, proxy: a, withProxy: r, props: o, propsOptions: [l], slots: i, attrs: s, emit: u, render: d, renderCache: c, data: f, setupState: v, ctx: y, inheritAttrs: p } = e;
  let x, O;
  const E = ts(e);
  process.env.NODE_ENV !== "production" && (bc = !1);
  try {
    if (n.shapeFlag & 4) {
      const V = r || a;
      x = Wn(d.call(V, V, c, o, v, f, y)), O = s;
    } else {
      const V = t;
      process.env.NODE_ENV !== "production" && s === o && ns(), x = Wn(V.length > 1 ? V(o, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return ns(), s;
        },
        slots: i,
        emit: u
      } : { attrs: s, slots: i, emit: u }) : V(
        o,
        null
        /* we know it doesn't need it */
      )), O = t.props ? s : Uw(s);
    }
  } catch (V) {
    Xo.length = 0, iu(
      V,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), x = m(jt);
  }
  let S = x, N;
  if (process.env.NODE_ENV !== "production" && x.patchFlag > 0 && x.patchFlag & 2048 && ([S, N] = Hw(x)), O && p !== !1) {
    const V = Object.keys(O), { shapeFlag: $ } = S;
    if (V.length) {
      if ($ & 7)
        l && V.some(Ki) && (O = Yw(O, l)), S = qn(S, O);
      else if (process.env.NODE_ENV !== "production" && !bc && S.type !== jt) {
        const k = Object.keys(s), g = [], b = [];
        for (let w = 0, C = k.length; w < C; w++) {
          const T = k[w];
          kl(T) ? Ki(T) || g.push(T[2].toLowerCase() + T.slice(3)) : b.push(T);
        }
        b.length && ie(`Extraneous non-props attributes (${b.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), g.length && ie(`Extraneous non-emits event listeners (${g.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !zv(S) && ie("Runtime directive used on component with non-element root node. The directives will not function as intended."), S = qn(S), S.dirs = S.dirs ? S.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !zv(S) && ie("Component inside <Transition> renders non-element root node that cannot be animated."), S.transition = n.transition), process.env.NODE_ENV !== "production" && N ? N(S) : x = S, ts(E), x;
}
const Hw = (e) => {
  const t = e.children, n = e.dynamicChildren, a = Ip(t);
  if (!a)
    return [e, void 0];
  const r = t.indexOf(a), o = n ? n.indexOf(a) : -1, l = (i) => {
    t[r] = i, n && (o > -1 ? n[o] = i : i.patchFlag > 0 && (e.dynamicChildren = [...n, i]));
  };
  return [Wn(a), l];
};
function Ip(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    if (uo(a)) {
      if (a.type !== jt || a.children === "v-if") {
        if (t)
          return;
        t = a;
      }
    } else
      return;
  }
  return t;
}
const Uw = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || kl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Yw = (e, t) => {
  const n = {};
  for (const a in e)
    (!Ki(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
}, zv = (e) => e.shapeFlag & 7 || e.type === jt;
function Ww(e, t, n) {
  const { props: a, children: r, component: o } = e, { props: l, children: i, patchFlag: s } = t, u = o.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || i) && Ha || t.dirs || t.transition)
    return !0;
  if (n && s >= 0) {
    if (s & 1024)
      return !0;
    if (s & 16)
      return a ? qv(a, l, u) : !!l;
    if (s & 8) {
      const d = t.dynamicProps;
      for (let c = 0; c < d.length; c++) {
        const f = d[c];
        if (l[f] !== a[f] && !uu(u, f))
          return !0;
      }
    }
  } else
    return (r || i) && (!i || !i.$stable) ? !0 : a === l ? !1 : a ? l ? qv(a, l, u) : !0 : !!l;
  return !1;
}
function qv(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < a.length; r++) {
    const o = a[r];
    if (t[o] !== e[o] && !uu(n, o))
      return !0;
  }
  return !1;
}
function zw({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const qw = (e) => e.__isSuspense;
function Gw(e, t) {
  t && t.pendingBranch ? Ne(e) ? t.effects.push(...e) : t.effects.push(e) : Op(e);
}
function Bt(e, t) {
  if (!_t)
    process.env.NODE_ENV !== "production" && ie("provide() can only be used inside setup().");
  else {
    let n = _t.provides;
    const a = _t.parent && _t.parent.provides;
    a === n && (n = _t.provides = Object.create(a)), n[e] = t;
  }
}
function nt(e, t, n = !1) {
  const a = _t || Rt;
  if (a) {
    const r = a.parent == null ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && Le(t) ? t.call(a.proxy) : t;
    process.env.NODE_ENV !== "production" && ie(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && ie("inject() can only be used inside setup() or functional components.");
}
function ca(e, t) {
  return Vd(e, null, t);
}
const Hl = {};
function pe(e, t, n) {
  return process.env.NODE_ENV !== "production" && !Le(t) && ie("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Vd(e, t, n);
}
function Vd(e, t, { immediate: n, deep: a, flush: r, onTrack: o, onTrigger: l } = it) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && ie('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), a !== void 0 && ie('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const i = (N) => {
    ie("Invalid watch source: ", N, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, s = Od() === (_t == null ? void 0 : _t.scope) ? _t : null;
  let u, d = !1, c = !1;
  if (Ye(e) ? (u = () => e.value, d = Ji(e)) : ia(e) ? (u = () => e, a = !0) : Ne(e) ? (c = !0, d = e.some((N) => ia(N) || Ji(N)), u = () => e.map((N) => {
    if (Ye(N))
      return N.value;
    if (ia(N))
      return mr(N);
    if (Le(N))
      return _a(
        N,
        s,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    process.env.NODE_ENV !== "production" && i(N);
  })) : Le(e) ? t ? u = () => _a(
    e,
    s,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : u = () => {
    if (!(s && s.isUnmounted))
      return f && f(), Mn(e, s, 3, [v]);
  } : (u = Yt, process.env.NODE_ENV !== "production" && i(e)), t && a) {
    const N = u;
    u = () => mr(N());
  }
  let f, v = (N) => {
    f = E.onStop = () => {
      _a(
        N,
        s,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, y;
  if (ml)
    if (v = Yt, t ? n && Mn(t, s, 3, [
      u(),
      c ? [] : void 0,
      v
    ]) : u(), r === "sync") {
      const N = W1();
      y = N.__watcherHandles || (N.__watcherHandles = []);
    } else
      return Yt;
  let p = c ? new Array(e.length).fill(Hl) : Hl;
  const x = () => {
    if (E.active)
      if (t) {
        const N = E.run();
        (a || d || (c ? N.some((V, $) => ol(V, p[$])) : ol(N, p))) && (f && f(), Mn(t, s, 3, [
          N,
          // pass undefined as the old value when it's changed for the first time
          p === Hl ? void 0 : c && p[0] === Hl ? [] : p,
          v
        ]), p = N);
      } else
        E.run();
  };
  x.allowRecurse = !!t;
  let O;
  r === "sync" ? O = x : r === "post" ? O = () => hn(x, s && s.suspense) : (x.pre = !0, s && (x.id = s.uid), O = () => su(x));
  const E = new Cd(u, O);
  process.env.NODE_ENV !== "production" && (E.onTrack = o, E.onTrigger = l), t ? n ? x() : p = E.run() : r === "post" ? hn(E.run.bind(E), s && s.suspense) : E.run();
  const S = () => {
    E.stop(), s && s.scope && _d(s.scope.effects, E);
  };
  return y && y.push(S), S;
}
function Kw(e, t, n) {
  const a = this.proxy, r = ct(e) ? e.includes(".") ? Ap(a, e) : () => a[e] : e.bind(a, a);
  let o;
  Le(t) ? o = t : (o = t.handler, n = t);
  const l = _t;
  co(this);
  const i = Vd(r, o.bind(a), n);
  return l ? co(l) : Or(), i;
}
function Ap(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let r = 0; r < n.length && a; r++)
      a = a[n[r]];
    return a;
  };
}
function mr(e, t) {
  if (!tt(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Ye(e))
    mr(e.value, t);
  else if (Ne(e))
    for (let n = 0; n < e.length; n++)
      mr(e[n], t);
  else if (Jy(e) || wr(e))
    e.forEach((n) => {
      mr(n, t);
    });
  else if (tp(e))
    for (const n in e)
      mr(e[n], t);
  return e;
}
function Mp() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ft(() => {
    e.isMounted = !0;
  }), _n(() => {
    e.isUnmounting = !0;
  }), e;
}
const Nn = [Function, Array], Xw = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: Nn,
    onEnter: Nn,
    onAfterEnter: Nn,
    onEnterCancelled: Nn,
    // leave
    onBeforeLeave: Nn,
    onLeave: Nn,
    onAfterLeave: Nn,
    onLeaveCancelled: Nn,
    // appear
    onBeforeAppear: Nn,
    onAppear: Nn,
    onAfterAppear: Nn,
    onAppearCancelled: Nn
  },
  setup(e, { slots: t }) {
    const n = yo(), a = Mp();
    let r;
    return () => {
      const o = t.default && Id(t.default(), !0);
      if (!o || !o.length)
        return;
      let l = o[0];
      if (o.length > 1) {
        let p = !1;
        for (const x of o)
          if (x.type !== jt) {
            if (process.env.NODE_ENV !== "production" && p) {
              ie("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (l = x, p = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const i = Te(e), { mode: s } = i;
      if (process.env.NODE_ENV !== "production" && s && s !== "in-out" && s !== "out-in" && s !== "default" && ie(`invalid <transition> mode: ${s}`), a.isLeaving)
        return Bu(l);
      const u = Gv(l);
      if (!u)
        return Bu(l);
      const d = fl(u, i, a, n);
      dl(u, d);
      const c = n.subTree, f = c && Gv(c);
      let v = !1;
      const { getTransitionKey: y } = u.type;
      if (y) {
        const p = y();
        r === void 0 ? r = p : p !== r && (r = p, v = !0);
      }
      if (f && f.type !== jt && (!fr(u, f) || v)) {
        const p = fl(f, i, a, n);
        if (dl(f, p), s === "out-in")
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, n.update.active !== !1 && n.update();
          }, Bu(l);
        s === "in-out" && u.type !== jt && (p.delayLeave = (x, O, E) => {
          const S = Bp(a, f);
          S[String(f.key)] = f, x._leaveCb = () => {
            O(), x._leaveCb = void 0, delete d.delayedLeave;
          }, d.delayedLeave = E;
        });
      }
      return l;
    };
  }
}, Rp = Xw;
function Bp(e, t) {
  const { leavingVNodes: n } = e;
  let a = n.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), n.set(t.type, a)), a;
}
function fl(e, t, n, a) {
  const { appear: r, mode: o, persisted: l = !1, onBeforeEnter: i, onEnter: s, onAfterEnter: u, onEnterCancelled: d, onBeforeLeave: c, onLeave: f, onAfterLeave: v, onLeaveCancelled: y, onBeforeAppear: p, onAppear: x, onAfterAppear: O, onAppearCancelled: E } = t, S = String(e.key), N = Bp(n, e), V = (g, b) => {
    g && Mn(g, a, 9, b);
  }, $ = (g, b) => {
    const w = b[1];
    V(g, b), Ne(g) ? g.every((C) => C.length <= 1) && w() : g.length <= 1 && w();
  }, k = {
    mode: o,
    persisted: l,
    beforeEnter(g) {
      let b = i;
      if (!n.isMounted)
        if (r)
          b = p || i;
        else
          return;
      g._leaveCb && g._leaveCb(
        !0
        /* cancelled */
      );
      const w = N[S];
      w && fr(e, w) && w.el._leaveCb && w.el._leaveCb(), V(b, [g]);
    },
    enter(g) {
      let b = s, w = u, C = d;
      if (!n.isMounted)
        if (r)
          b = x || s, w = O || u, C = E || d;
        else
          return;
      let T = !1;
      const A = g._enterCb = (z) => {
        T || (T = !0, z ? V(C, [g]) : V(w, [g]), k.delayedLeave && k.delayedLeave(), g._enterCb = void 0);
      };
      b ? $(b, [g, A]) : A();
    },
    leave(g, b) {
      const w = String(e.key);
      if (g._enterCb && g._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return b();
      V(c, [g]);
      let C = !1;
      const T = g._leaveCb = (A) => {
        C || (C = !0, b(), A ? V(y, [g]) : V(v, [g]), g._leaveCb = void 0, N[w] === e && delete N[w]);
      };
      N[w] = e, f ? $(f, [g, T]) : T();
    },
    clone(g) {
      return fl(g, t, n, a);
    }
  };
  return k;
}
function Bu(e) {
  if (El(e))
    return e = qn(e), e.children = null, e;
}
function Gv(e) {
  return El(e) ? e.children ? e.children[0] : void 0 : e;
}
function dl(e, t) {
  e.shapeFlag & 6 && e.component ? dl(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Id(e, t = !1, n) {
  let a = [], r = 0;
  for (let o = 0; o < e.length; o++) {
    let l = e[o];
    const i = n == null ? l.key : String(n) + String(l.key != null ? l.key : o);
    l.type === ye ? (l.patchFlag & 128 && r++, a = a.concat(Id(l.children, t, i))) : (t || l.type !== jt) && a.push(i != null ? qn(l, { key: i }) : l);
  }
  if (r > 1)
    for (let o = 0; o < a.length; o++)
      a[o].patchFlag = -2;
  return a;
}
function Wt(e) {
  return Le(e) ? { setup: e, name: e.name } : e;
}
const Go = (e) => !!e.type.__asyncLoader, El = (e) => e.type.__isKeepAlive;
function Fp(e, t) {
  jp(e, "a", t);
}
function Lp(e, t) {
  jp(e, "da", t);
}
function jp(e, t, n = _t) {
  const a = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (cu(t, a, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      El(r.parent.vnode) && Qw(a, t, n, r), r = r.parent;
  }
}
function Qw(e, t, n, a) {
  const r = cu(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  $l(() => {
    _d(a[t], r);
  }, n);
}
function cu(e, t, n = _t, a = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...l) => {
      if (n.isUnmounted)
        return;
      Vr(), co(n);
      const i = Mn(t, n, e, l);
      return Or(), Ir(), i;
    });
    return a ? r.unshift(o) : r.push(o), o;
  } else if (process.env.NODE_ENV !== "production") {
    const r = Ra(Pd[e].replace(/ hook$/, ""));
    ie(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Ca = (e) => (t, n = _t) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!ml || e === "sp") && cu(e, (...a) => t(...a), n)
), fu = Ca(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), ft = Ca(
  "m"
  /* LifecycleHooks.MOUNTED */
), Ad = Ca(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Hp = Ca(
  "u"
  /* LifecycleHooks.UPDATED */
), _n = Ca(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), $l = Ca(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), Zw = Ca(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), Jw = Ca(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), e1 = Ca(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function t1(e, t = _t) {
  cu("ec", e, t);
}
function Up(e) {
  I_(e) && ie("Do not use built-in directive ids as custom directive id: " + e);
}
function st(e, t) {
  const n = Rt;
  if (n === null)
    return process.env.NODE_ENV !== "production" && ie("withDirectives can only be used inside render functions."), e;
  const a = vu(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [l, i, s, u = it] = t[o];
    l && (Le(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && mr(i), r.push({
      dir: l,
      instance: a,
      value: i,
      oldValue: void 0,
      arg: s,
      modifiers: u
    }));
  }
  return e;
}
function nr(e, t, n, a) {
  const r = e.dirs, o = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const i = r[l];
    o && (i.oldValue = o[l].value);
    let s = i.dir[a];
    s && (Vr(), Mn(s, n, 8, [
      e.el,
      i,
      e,
      t
    ]), Ir());
  }
}
const as = "components", n1 = "directives";
function Qe(e, t) {
  return Rd(as, e, !0, t) || e;
}
const Yp = Symbol();
function Md(e) {
  return ct(e) ? Rd(as, e, !1) || e : e || Yp;
}
function bn(e) {
  return Rd(n1, e);
}
function Rd(e, t, n = !0, a = !1) {
  const r = Rt || _t;
  if (r) {
    const o = r.type;
    if (e === as) {
      const i = Hd(
        o,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (i && (i === t || i === Bn(t) || i === Fn(Bn(t))))
        return o;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      Kv(r[e] || o[e], t) || // global registration
      Kv(r.appContext[e], t)
    );
    if (!l && a)
      return o;
    if (process.env.NODE_ENV !== "production" && n && !l) {
      const i = e === as ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      ie(`Failed to resolve ${e.slice(0, -1)}: ${t}${i}`);
    }
    return l;
  } else
    process.env.NODE_ENV !== "production" && ie(`resolve${Fn(e.slice(0, -1))} can only be used in render() or setup().`);
}
function Kv(e, t) {
  return e && (e[t] || e[Bn(t)] || e[Fn(Bn(t))]);
}
function Ot(e, t, n, a) {
  let r;
  const o = n && n[a];
  if (Ne(e) || ct(e)) {
    r = new Array(e.length);
    for (let l = 0, i = e.length; l < i; l++)
      r[l] = t(e[l], l, void 0, o && o[l]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && ie(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, o && o[l]);
  } else if (tt(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (l, i) => t(l, i, void 0, o && o[i]));
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let i = 0, s = l.length; i < s; i++) {
        const u = l[i];
        r[i] = t(e[u], u, i, o && o[i]);
      }
    }
  else
    r = [];
  return n && (n[a] = r), r;
}
function yn(e, t) {
  for (let n = 0; n < t.length; n++) {
    const a = t[n];
    if (Ne(a))
      for (let r = 0; r < a.length; r++)
        e[a[r].name] = a[r].fn;
    else
      a && (e[a.name] = a.key ? (...r) => {
        const o = a.fn(...r);
        return o && (o.key = a.key), o;
      } : a.fn);
  }
  return e;
}
function xe(e, t, n = {}, a, r) {
  if (Rt.isCE || Rt.parent && Go(Rt.parent) && Rt.parent.isCE)
    return t !== "default" && (n.name = t), m("slot", n, a && a());
  let o = e[t];
  process.env.NODE_ENV !== "production" && o && o.length > 1 && (ie("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), o = () => []), o && o._c && (o._d = !1), Z();
  const l = o && Wp(o(n)), i = qe(
    ye,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      l && l.key || `_${t}`
    },
    l || (a ? a() : []),
    l && e._ === 1 ? 64 : -2
    /* PatchFlags.BAIL */
  );
  return !r && i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]), o && o._c && (o._d = !0), i;
}
function Wp(e) {
  return e.some((t) => uo(t) ? !(t.type === jt || t.type === ye && !Wp(t.children)) : !0) ? e : null;
}
function Fu(e, t) {
  const n = {};
  if (process.env.NODE_ENV !== "production" && !tt(e))
    return ie("v-on with no argument expects an object value."), n;
  for (const a in e)
    n[t && /[A-Z]/.test(a) ? `on:${a}` : Ra(a)] = e[a];
  return n;
}
const _c = (e) => e ? ig(e) ? vu(e) || e.proxy : _c(e.parent) : null, xr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ bt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? to(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? to(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? to(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? to(e.refs) : e.refs,
    $parent: (e) => _c(e.parent),
    $root: (e) => _c(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Fd(e),
    $forceUpdate: (e) => e.f || (e.f = () => su(e.update)),
    $nextTick: (e) => e.n || (e.n = Je.bind(e.proxy)),
    $watch: (e) => Kw.bind(e)
  })
), Bd = (e) => e === "_" || e === "$", Lu = (e, t) => e !== it && !e.__isScriptSetup && ze(e, t), zp = {
  get({ _: e }, t) {
    const { ctx: n, setupState: a, data: r, props: o, accessCache: l, type: i, appContext: s } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const v = l[t];
      if (v !== void 0)
        switch (v) {
          case 1:
            return a[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Lu(a, t))
          return l[t] = 1, a[t];
        if (r !== it && ze(r, t))
          return l[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && ze(u, t)
        )
          return l[t] = 3, o[t];
        if (n !== it && ze(n, t))
          return l[t] = 4, n[t];
        wc && (l[t] = 0);
      }
    }
    const d = xr[t];
    let c, f;
    if (d)
      return t === "$attrs" && (dn(e, "get", t), process.env.NODE_ENV !== "production" && ns()), d(e);
    if (
      // css module (injected by vue-loader)
      (c = i.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== it && ze(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      f = s.config.globalProperties, ze(f, t)
    )
      return f[t];
    process.env.NODE_ENV !== "production" && Rt && (!ct(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== it && Bd(t[0]) && ze(r, t) ? ie(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === Rt && ie(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: a, setupState: r, ctx: o } = e;
    return Lu(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && ze(r, t) ? (ie(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : a !== it && ze(a, t) ? (a[t] = n, !0) : ze(e.props, t) ? (process.env.NODE_ENV !== "production" && ie(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && ie(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: a, appContext: r, propsOptions: o } }, l) {
    let i;
    return !!n[l] || e !== it && ze(e, l) || Lu(t, l) || (i = o[0]) && ze(i, l) || ze(a, l) || ze(xr, l) || ze(r.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ze(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (zp.ownKeys = (e) => (ie("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function a1(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(xr).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => xr[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Yt
    });
  }), t;
}
function r1(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((a) => {
    Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[a],
      set: Yt
    });
  });
}
function o1(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(Te(n)).forEach((a) => {
    if (!n.__isScriptSetup) {
      if (Bd(a[0])) {
        ie(`setup() return property ${JSON.stringify(a)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, a, {
        enumerable: !0,
        configurable: !0,
        get: () => n[a],
        set: Yt
      });
    }
  });
}
function l1() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? ie(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let wc = !0;
function i1(e) {
  const t = Fd(e), n = e.proxy, a = e.ctx;
  wc = !1, t.beforeCreate && Xv(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: r,
    computed: o,
    methods: l,
    watch: i,
    provide: s,
    inject: u,
    // lifecycle
    created: d,
    beforeMount: c,
    mounted: f,
    beforeUpdate: v,
    updated: y,
    activated: p,
    deactivated: x,
    beforeDestroy: O,
    beforeUnmount: E,
    destroyed: S,
    unmounted: N,
    render: V,
    renderTracked: $,
    renderTriggered: k,
    errorCaptured: g,
    serverPrefetch: b,
    // public API
    expose: w,
    inheritAttrs: C,
    // assets
    components: T,
    directives: A,
    filters: z
  } = t, U = process.env.NODE_ENV !== "production" ? l1() : null;
  if (process.env.NODE_ENV !== "production") {
    const [h] = e.propsOptions;
    if (h)
      for (const P in h)
        U("Props", P);
  }
  if (u && s1(u, a, U, e.appContext.config.unwrapInjectedRef), l)
    for (const h in l) {
      const P = l[h];
      Le(P) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(a, h, {
        value: P.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : a[h] = P.bind(n), process.env.NODE_ENV !== "production" && U("Methods", h)) : process.env.NODE_ENV !== "production" && ie(`Method "${h}" has type "${typeof P}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !Le(r) && ie("The data option must be a function. Plain object usage is no longer supported.");
    const h = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && Sd(h) && ie("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !tt(h))
      process.env.NODE_ENV !== "production" && ie("data() should return an object.");
    else if (e.data = Ct(h), process.env.NODE_ENV !== "production")
      for (const P in h)
        U("Data", P), Bd(P[0]) || Object.defineProperty(a, P, {
          configurable: !0,
          enumerable: !0,
          get: () => h[P],
          set: Yt
        });
  }
  if (wc = !0, o)
    for (const h in o) {
      const P = o[h], W = Le(P) ? P.bind(n, n) : Le(P.get) ? P.get.bind(n, n) : Yt;
      process.env.NODE_ENV !== "production" && W === Yt && ie(`Computed property "${h}" has no getter.`);
      const H = !Le(P) && Le(P.set) ? P.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        ie(`Write operation failed: computed property "${h}" is readonly.`);
      } : Yt, j = _({
        get: W,
        set: H
      });
      Object.defineProperty(a, h, {
        enumerable: !0,
        configurable: !0,
        get: () => j.value,
        set: (X) => j.value = X
      }), process.env.NODE_ENV !== "production" && U("Computed", h);
    }
  if (i)
    for (const h in i)
      qp(i[h], a, n, h);
  if (s) {
    const h = Le(s) ? s.call(n) : s;
    Reflect.ownKeys(h).forEach((P) => {
      Bt(P, h[P]);
    });
  }
  d && Xv(
    d,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function B(h, P) {
    Ne(P) ? P.forEach((W) => h(W.bind(n))) : P && h(P.bind(n));
  }
  if (B(fu, c), B(ft, f), B(Ad, v), B(Hp, y), B(Fp, p), B(Lp, x), B(t1, g), B(e1, $), B(Jw, k), B(_n, E), B($l, N), B(Zw, b), Ne(w))
    if (w.length) {
      const h = e.exposed || (e.exposed = {});
      w.forEach((P) => {
        Object.defineProperty(h, P, {
          get: () => n[P],
          set: (W) => n[P] = W
        });
      });
    } else
      e.exposed || (e.exposed = {});
  V && e.render === Yt && (e.render = V), C != null && (e.inheritAttrs = C), T && (e.components = T), A && (e.directives = A);
}
function s1(e, t, n = Yt, a = !1) {
  Ne(e) && (e = Sc(e));
  for (const r in e) {
    const o = e[r];
    let l;
    tt(o) ? "default" in o ? l = nt(
      o.from || r,
      o.default,
      !0
      /* treat default function as factory */
    ) : l = nt(o.from || r) : l = nt(o), Ye(l) ? a ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (i) => l.value = i
    }) : (process.env.NODE_ENV !== "production" && ie(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = l) : t[r] = l, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Xv(e, t, n) {
  Mn(Ne(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function qp(e, t, n, a) {
  const r = a.includes(".") ? Ap(n, a) : () => n[a];
  if (ct(e)) {
    const o = t[e];
    Le(o) ? pe(r, o) : process.env.NODE_ENV !== "production" && ie(`Invalid watch handler specified by key "${e}"`, o);
  } else if (Le(e))
    pe(r, e.bind(n));
  else if (tt(e))
    if (Ne(e))
      e.forEach((o) => qp(o, t, n, a));
    else {
      const o = Le(e.handler) ? e.handler.bind(n) : t[e.handler];
      Le(o) ? pe(r, o, e) : process.env.NODE_ENV !== "production" && ie(`Invalid watch handler specified by key "${e.handler}"`, o);
    }
  else
    process.env.NODE_ENV !== "production" && ie(`Invalid watch option: "${a}"`, e);
}
function Fd(e) {
  const t = e.type, { mixins: n, extends: a } = t, { mixins: r, optionsCache: o, config: { optionMergeStrategies: l } } = e.appContext, i = o.get(t);
  let s;
  return i ? s = i : !r.length && !n && !a ? s = t : (s = {}, r.length && r.forEach((u) => rs(s, u, l, !0)), rs(s, t, l)), tt(t) && o.set(t, s), s;
}
function rs(e, t, n, a = !1) {
  const { mixins: r, extends: o } = t;
  o && rs(e, o, n, !0), r && r.forEach((l) => rs(e, l, n, !0));
  for (const l in t)
    if (a && l === "expose")
      process.env.NODE_ENV !== "production" && ie('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const i = u1[l] || n && n[l];
      e[l] = i ? i(e[l], t[l]) : t[l];
    }
  return e;
}
const u1 = {
  data: Qv,
  props: sr,
  emits: sr,
  // objects
  methods: sr,
  computed: sr,
  // lifecycle
  beforeCreate: ln,
  created: ln,
  beforeMount: ln,
  mounted: ln,
  beforeUpdate: ln,
  updated: ln,
  beforeDestroy: ln,
  beforeUnmount: ln,
  destroyed: ln,
  unmounted: ln,
  activated: ln,
  deactivated: ln,
  errorCaptured: ln,
  serverPrefetch: ln,
  // assets
  components: sr,
  directives: sr,
  // watch
  watch: f1,
  // provide / inject
  provide: Qv,
  inject: c1
};
function Qv(e, t) {
  return t ? e ? function() {
    return bt(Le(e) ? e.call(this, this) : e, Le(t) ? t.call(this, this) : t);
  } : t : e;
}
function c1(e, t) {
  return sr(Sc(e), Sc(t));
}
function Sc(e) {
  if (Ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ln(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function sr(e, t) {
  return e ? bt(bt(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function f1(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = bt(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    n[a] = ln(e[a], t[a]);
  return n;
}
function d1(e, t, n, a = !1) {
  const r = {}, o = {};
  Xi(o, du, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Gp(e, t, r, o);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  process.env.NODE_ENV !== "production" && Xp(t || {}, r, e), n ? e.props = a ? r : vw(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function v1(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function m1(e, t, n, a) {
  const { props: r, attrs: o, vnode: { patchFlag: l } } = e, i = Te(r), [s] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && v1(e)) && (a || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const d = e.vnode.dynamicProps;
      for (let c = 0; c < d.length; c++) {
        let f = d[c];
        if (uu(e.emitsOptions, f))
          continue;
        const v = t[f];
        if (s)
          if (ze(o, f))
            v !== o[f] && (o[f] = v, u = !0);
          else {
            const y = Bn(f);
            r[y] = kc(
              s,
              i,
              y,
              v,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          v !== o[f] && (o[f] = v, u = !0);
      }
    }
  } else {
    Gp(e, t, r, o) && (u = !0);
    let d;
    for (const c in i)
      (!t || // for camelCase
      !ze(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Sa(c)) === c || !ze(t, d))) && (s ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[d] !== void 0) && (r[c] = kc(
        s,
        i,
        c,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete r[c]);
    if (o !== i)
      for (const c in o)
        (!t || !ze(t, c)) && (delete o[c], u = !0);
  }
  u && ka(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && Xp(t || {}, r, e);
}
function Gp(e, t, n, a) {
  const [r, o] = e.propsOptions;
  let l = !1, i;
  if (t)
    for (let s in t) {
      if (Zl(s))
        continue;
      const u = t[s];
      let d;
      r && ze(r, d = Bn(s)) ? !o || !o.includes(d) ? n[d] = u : (i || (i = {}))[d] = u : uu(e.emitsOptions, s) || (!(s in a) || u !== a[s]) && (a[s] = u, l = !0);
    }
  if (o) {
    const s = Te(n), u = i || it;
    for (let d = 0; d < o.length; d++) {
      const c = o[d];
      n[c] = kc(r, s, c, u[c], e, !ze(u, c));
    }
  }
  return l;
}
function kc(e, t, n, a, r, o) {
  const l = e[n];
  if (l != null) {
    const i = ze(l, "default");
    if (i && a === void 0) {
      const s = l.default;
      if (l.type !== Function && Le(s)) {
        const { propsDefaults: u } = r;
        n in u ? a = u[n] : (co(r), a = u[n] = s.call(null, t), Or());
      } else
        a = s;
    }
    l[
      0
      /* BooleanFlags.shouldCast */
    ] && (o && !i ? a = !1 : l[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (a === "" || a === Sa(n)) && (a = !0));
  }
  return a;
}
function Kp(e, t, n = !1) {
  const a = t.propsCache, r = a.get(e);
  if (r)
    return r;
  const o = e.props, l = {}, i = [];
  let s = !1;
  if (!Le(e)) {
    const d = (c) => {
      s = !0;
      const [f, v] = Kp(c, t, !0);
      bt(l, f), v && i.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !s)
    return tt(e) && a.set(e, ro), ro;
  if (Ne(o))
    for (let d = 0; d < o.length; d++) {
      process.env.NODE_ENV !== "production" && !ct(o[d]) && ie("props must be strings when using array syntax.", o[d]);
      const c = Bn(o[d]);
      Zv(c) && (l[c] = it);
    }
  else if (o) {
    process.env.NODE_ENV !== "production" && !tt(o) && ie("invalid props options", o);
    for (const d in o) {
      const c = Bn(d);
      if (Zv(c)) {
        const f = o[d], v = l[c] = Ne(f) || Le(f) ? { type: f } : Object.assign({}, f);
        if (v) {
          const y = em(Boolean, v.type), p = em(String, v.type);
          v[
            0
            /* BooleanFlags.shouldCast */
          ] = y > -1, v[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = p < 0 || y < p, (y > -1 || ze(v, "default")) && i.push(c);
        }
      }
    }
  }
  const u = [l, i];
  return tt(e) && a.set(e, u), u;
}
function Zv(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && ie(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function xc(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Jv(e, t) {
  return xc(e) === xc(t);
}
function em(e, t) {
  return Ne(t) ? t.findIndex((n) => Jv(n, e)) : Le(t) && Jv(t, e) ? 0 : -1;
}
function Xp(e, t, n) {
  const a = Te(t), r = n.propsOptions[0];
  for (const o in r) {
    let l = r[o];
    l != null && h1(o, a[o], l, !ze(e, o) && !ze(e, Sa(o)));
  }
}
function h1(e, t, n, a) {
  const { type: r, required: o, validator: l } = n;
  if (o && a) {
    ie('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let i = !1;
      const s = Ne(r) ? r : [r], u = [];
      for (let d = 0; d < s.length && !i; d++) {
        const { valid: c, expectedType: f } = p1(t, s[d]);
        u.push(f || ""), i = c;
      }
      if (!i) {
        ie(g1(e, t, u));
        return;
      }
    }
    l && !l(t) && ie('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const y1 = /* @__PURE__ */ Ka("String,Number,Boolean,Function,Symbol,BigInt");
function p1(e, t) {
  let n;
  const a = xc(t);
  if (y1(a)) {
    const r = typeof e;
    n = r === a.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    a === "Object" ? n = tt(e) : a === "Array" ? n = Ne(e) : a === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: a
  };
}
function g1(e, t, n) {
  let a = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Fn).join(" | ")}`;
  const r = n[0], o = kd(t), l = tm(t, r), i = tm(t, o);
  return n.length === 1 && nm(r) && !b1(r, o) && (a += ` with value ${l}`), a += `, got ${o} `, nm(o) && (a += `with value ${i}.`), a;
}
function tm(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function nm(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function b1(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Qp = (e) => e[0] === "_" || e === "$stable", Ld = (e) => Ne(e) ? e.map(Wn) : [Wn(e)], _1 = (e, t, n) => {
  if (t._n)
    return t;
  const a = he((...r) => (process.env.NODE_ENV !== "production" && _t && ie(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Ld(t(...r))), n);
  return a._c = !1, a;
}, Zp = (e, t, n) => {
  const a = e._ctx;
  for (const r in e) {
    if (Qp(r))
      continue;
    const o = e[r];
    if (Le(o))
      t[r] = _1(r, o, a);
    else if (o != null) {
      process.env.NODE_ENV !== "production" && ie(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const l = Ld(o);
      t[r] = () => l;
    }
  }
}, Jp = (e, t) => {
  process.env.NODE_ENV !== "production" && !El(e.vnode) && ie("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = Ld(t);
  e.slots.default = () => n;
}, w1 = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = Te(t), Xi(t, "_", n)) : Zp(t, e.slots = {});
  } else
    e.slots = {}, t && Jp(e, t);
  Xi(e.slots, du, 1);
}, S1 = (e, t, n) => {
  const { vnode: a, slots: r } = e;
  let o = !0, l = it;
  if (a.shapeFlag & 32) {
    const i = t._;
    i ? process.env.NODE_ENV !== "production" && Ha ? bt(r, t) : n && i === 1 ? o = !1 : (bt(r, t), !n && i === 1 && delete r._) : (o = !t.$stable, Zp(t, r)), l = t;
  } else
    t && (Jp(e, t), l = { default: 1 });
  if (o)
    for (const i in r)
      !Qp(i) && !(i in l) && delete r[i];
};
function eg() {
  return {
    app: null,
    config: {
      isNativeTag: Zy,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let k1 = 0;
function x1(e, t) {
  return function(a, r = null) {
    Le(a) || (a = Object.assign({}, a)), r != null && !tt(r) && (process.env.NODE_ENV !== "production" && ie("root props passed to app.mount() must be an object."), r = null);
    const o = eg(), l = /* @__PURE__ */ new Set();
    let i = !1;
    const s = o.app = {
      _uid: k1++,
      _component: a,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: im,
      get config() {
        return o.config;
      },
      set config(u) {
        process.env.NODE_ENV !== "production" && ie("app.config cannot be replaced. Modify individual options instead.");
      },
      use(u, ...d) {
        return l.has(u) ? process.env.NODE_ENV !== "production" && ie("Plugin has already been applied to target app.") : u && Le(u.install) ? (l.add(u), u.install(s, ...d)) : Le(u) ? (l.add(u), u(s, ...d)) : process.env.NODE_ENV !== "production" && ie('A plugin must either be a function or an object with an "install" function.'), s;
      },
      mixin(u) {
        return o.mixins.includes(u) ? process.env.NODE_ENV !== "production" && ie("Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")) : o.mixins.push(u), s;
      },
      component(u, d) {
        return process.env.NODE_ENV !== "production" && Ec(u, o.config), d ? (process.env.NODE_ENV !== "production" && o.components[u] && ie(`Component "${u}" has already been registered in target app.`), o.components[u] = d, s) : o.components[u];
      },
      directive(u, d) {
        return process.env.NODE_ENV !== "production" && Up(u), d ? (process.env.NODE_ENV !== "production" && o.directives[u] && ie(`Directive "${u}" has already been registered in target app.`), o.directives[u] = d, s) : o.directives[u];
      },
      mount(u, d, c) {
        if (i)
          process.env.NODE_ENV !== "production" && ie("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && u.__vue_app__ && ie("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const f = m(a, r);
          return f.appContext = o, process.env.NODE_ENV !== "production" && (o.reload = () => {
            e(qn(f), u, c);
          }), d && t ? t(f, u) : e(f, u, c), i = !0, s._container = u, u.__vue_app__ = s, process.env.NODE_ENV !== "production" && (s._instance = f.component, Vw(s, im)), vu(f.component) || f.component.proxy;
        }
      },
      unmount() {
        i ? (e(null, s._container), process.env.NODE_ENV !== "production" && (s._instance = null, Iw(s)), delete s._container.__vue_app__) : process.env.NODE_ENV !== "production" && ie("Cannot unmount an app that is not mounted.");
      },
      provide(u, d) {
        return process.env.NODE_ENV !== "production" && u in o.provides && ie(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`), o.provides[u] = d, s;
      }
    };
    return s;
  };
}
function Oc(e, t, n, a, r = !1) {
  if (Ne(e)) {
    e.forEach((f, v) => Oc(f, t && (Ne(t) ? t[v] : t), n, a, r));
    return;
  }
  if (Go(a) && !r)
    return;
  const o = a.shapeFlag & 4 ? vu(a.component) || a.component.proxy : a.el, l = r ? null : o, { i, r: s } = e;
  if (process.env.NODE_ENV !== "production" && !i) {
    ie("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const u = t && t.r, d = i.refs === it ? i.refs = {} : i.refs, c = i.setupState;
  if (u != null && u !== s && (ct(u) ? (d[u] = null, ze(c, u) && (c[u] = null)) : Ye(u) && (u.value = null)), Le(s))
    _a(s, i, 12, [l, d]);
  else {
    const f = ct(s), v = Ye(s);
    if (f || v) {
      const y = () => {
        if (e.f) {
          const p = f ? ze(c, s) ? c[s] : d[s] : s.value;
          r ? Ne(p) && _d(p, o) : Ne(p) ? p.includes(o) || p.push(o) : f ? (d[s] = [o], ze(c, s) && (c[s] = d[s])) : (s.value = [o], e.k && (d[e.k] = s.value));
        } else
          f ? (d[s] = l, ze(c, s) && (c[s] = l)) : v ? (s.value = l, e.k && (d[e.k] = l)) : process.env.NODE_ENV !== "production" && ie("Invalid template ref type:", s, `(${typeof s})`);
      };
      l ? (y.id = -1, hn(y, n)) : y();
    } else
      process.env.NODE_ENV !== "production" && ie("Invalid template ref type:", s, `(${typeof s})`);
  }
}
let Vo, La;
function ma(e, t) {
  e.appContext.config.performance && os() && La.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Bw(e, t, os() ? La.now() : Date.now());
}
function ha(e, t) {
  if (e.appContext.config.performance && os()) {
    const n = `vue-${t}-${e.uid}`, a = n + ":end";
    La.mark(a), La.measure(`<${mu(e, e.type)}> ${t}`, n, a), La.clearMarks(n), La.clearMarks(a);
  }
  process.env.NODE_ENV !== "production" && Fw(e, t, os() ? La.now() : Date.now());
}
function os() {
  return Vo !== void 0 || (typeof window < "u" && window.performance ? (Vo = !0, La = window.performance) : Vo = !1), Vo;
}
function O1() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const hn = Gw;
function C1(e) {
  return E1(e);
}
function E1(e, t) {
  O1();
  const n = np();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Pp(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: a, remove: r, patchProp: o, createElement: l, createText: i, createComment: s, setText: u, setElementText: d, parentNode: c, nextSibling: f, setScopeId: v = Yt, insertStaticContent: y } = e, p = (D, F, K, ae = null, G = null, te = null, re = !1, ue = null, de = process.env.NODE_ENV !== "production" && Ha ? !1 : !!F.dynamicChildren) => {
    if (D === F)
      return;
    D && !fr(D, F) && (ae = be(D), Q(D, G, te, !0), D = null), F.patchFlag === -2 && (de = !1, F.dynamicChildren = null);
    const { type: le, ref: Se, shapeFlag: _e } = F;
    switch (le) {
      case ho:
        x(D, F, K, ae);
        break;
      case jt:
        O(D, F, K, ae);
        break;
      case ti:
        D == null ? E(F, K, ae, re) : process.env.NODE_ENV !== "production" && S(D, F, K, re);
        break;
      case ye:
        A(D, F, K, ae, G, te, re, ue, de);
        break;
      default:
        _e & 1 ? $(D, F, K, ae, G, te, re, ue, de) : _e & 6 ? z(D, F, K, ae, G, te, re, ue, de) : _e & 64 || _e & 128 ? le.process(D, F, K, ae, G, te, re, ue, de, We) : process.env.NODE_ENV !== "production" && ie("Invalid VNode type:", le, `(${typeof le})`);
    }
    Se != null && G && Oc(Se, D && D.ref, te, F || D, !F);
  }, x = (D, F, K, ae) => {
    if (D == null)
      a(F.el = i(F.children), K, ae);
    else {
      const G = F.el = D.el;
      F.children !== D.children && u(G, F.children);
    }
  }, O = (D, F, K, ae) => {
    D == null ? a(F.el = s(F.children || ""), K, ae) : F.el = D.el;
  }, E = (D, F, K, ae) => {
    [D.el, D.anchor] = y(D.children, F, K, ae, D.el, D.anchor);
  }, S = (D, F, K, ae) => {
    if (F.children !== D.children) {
      const G = f(D.anchor);
      V(D), [F.el, F.anchor] = y(F.children, K, G, ae);
    } else
      F.el = D.el, F.anchor = D.anchor;
  }, N = ({ el: D, anchor: F }, K, ae) => {
    let G;
    for (; D && D !== F; )
      G = f(D), a(D, K, ae), D = G;
    a(F, K, ae);
  }, V = ({ el: D, anchor: F }) => {
    let K;
    for (; D && D !== F; )
      K = f(D), r(D), D = K;
    r(F);
  }, $ = (D, F, K, ae, G, te, re, ue, de) => {
    re = re || F.type === "svg", D == null ? k(F, K, ae, G, te, re, ue, de) : w(D, F, G, te, re, ue, de);
  }, k = (D, F, K, ae, G, te, re, ue) => {
    let de, le;
    const { type: Se, props: _e, shapeFlag: Ee, transition: Be, dirs: Ue } = D;
    if (de = D.el = l(D.type, te, _e && _e.is, _e), Ee & 8 ? d(de, D.children) : Ee & 16 && b(D.children, de, null, ae, G, te && Se !== "foreignObject", re, ue), Ue && nr(D, null, ae, "created"), g(de, D, D.scopeId, re, ae), _e) {
      for (const L in _e)
        L !== "value" && !Zl(L) && o(de, L, null, _e[L], te, D.children, ae, G, we);
      "value" in _e && o(de, "value", null, _e.value), (le = _e.onVnodeBeforeMount) && Zn(le, ae, D);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(de, "__vnode", {
      value: D,
      enumerable: !1
    }), Object.defineProperty(de, "__vueParentComponent", {
      value: ae,
      enumerable: !1
    })), Ue && nr(D, null, ae, "beforeMount");
    const Ze = (!G || G && !G.pendingBranch) && Be && !Be.persisted;
    Ze && Be.beforeEnter(de), a(de, F, K), ((le = _e && _e.onVnodeMounted) || Ze || Ue) && hn(() => {
      le && Zn(le, ae, D), Ze && Be.enter(de), Ue && nr(D, null, ae, "mounted");
    }, G);
  }, g = (D, F, K, ae, G) => {
    if (K && v(D, K), ae)
      for (let te = 0; te < ae.length; te++)
        v(D, ae[te]);
    if (G) {
      let te = G.subTree;
      if (process.env.NODE_ENV !== "production" && te.patchFlag > 0 && te.patchFlag & 2048 && (te = Ip(te.children) || te), F === te) {
        const re = G.vnode;
        g(D, re, re.scopeId, re.slotScopeIds, G.parent);
      }
    }
  }, b = (D, F, K, ae, G, te, re, ue, de = 0) => {
    for (let le = de; le < D.length; le++) {
      const Se = D[le] = ue ? Fa(D[le]) : Wn(D[le]);
      p(null, Se, F, K, ae, G, te, re, ue);
    }
  }, w = (D, F, K, ae, G, te, re) => {
    const ue = F.el = D.el;
    let { patchFlag: de, dynamicChildren: le, dirs: Se } = F;
    de |= D.patchFlag & 16;
    const _e = D.props || it, Ee = F.props || it;
    let Be;
    K && ar(K, !1), (Be = Ee.onVnodeBeforeUpdate) && Zn(Be, K, F, D), Se && nr(F, D, K, "beforeUpdate"), K && ar(K, !0), process.env.NODE_ENV !== "production" && Ha && (de = 0, re = !1, le = null);
    const Ue = G && F.type !== "foreignObject";
    if (le ? (C(D.dynamicChildren, le, ue, K, ae, Ue, te), process.env.NODE_ENV !== "production" && K && K.type.__hmrId && Ko(D, F)) : re || W(D, F, ue, null, K, ae, Ue, te, !1), de > 0) {
      if (de & 16)
        T(ue, F, _e, Ee, K, ae, G);
      else if (de & 2 && _e.class !== Ee.class && o(ue, "class", null, Ee.class, G), de & 4 && o(ue, "style", _e.style, Ee.style, G), de & 8) {
        const Ze = F.dynamicProps;
        for (let L = 0; L < Ze.length; L++) {
          const J = Ze[L], ke = _e[J], Pe = Ee[J];
          (Pe !== ke || J === "value") && o(ue, J, ke, Pe, G, D.children, K, ae, we);
        }
      }
      de & 1 && D.children !== F.children && d(ue, F.children);
    } else
      !re && le == null && T(ue, F, _e, Ee, K, ae, G);
    ((Be = Ee.onVnodeUpdated) || Se) && hn(() => {
      Be && Zn(Be, K, F, D), Se && nr(F, D, K, "updated");
    }, ae);
  }, C = (D, F, K, ae, G, te, re) => {
    for (let ue = 0; ue < F.length; ue++) {
      const de = D[ue], le = F[ue], Se = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        de.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (de.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !fr(de, le) || // - In the case of a component, it could contain anything.
        de.shapeFlag & 70) ? c(de.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          K
        )
      );
      p(de, le, Se, null, ae, G, te, re, !0);
    }
  }, T = (D, F, K, ae, G, te, re) => {
    if (K !== ae) {
      if (K !== it)
        for (const ue in K)
          !Zl(ue) && !(ue in ae) && o(D, ue, K[ue], null, re, F.children, G, te, we);
      for (const ue in ae) {
        if (Zl(ue))
          continue;
        const de = ae[ue], le = K[ue];
        de !== le && ue !== "value" && o(D, ue, le, de, re, F.children, G, te, we);
      }
      "value" in ae && o(D, "value", K.value, ae.value);
    }
  }, A = (D, F, K, ae, G, te, re, ue, de) => {
    const le = F.el = D ? D.el : i(""), Se = F.anchor = D ? D.anchor : i("");
    let { patchFlag: _e, dynamicChildren: Ee, slotScopeIds: Be } = F;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ha || _e & 2048) && (_e = 0, de = !1, Ee = null), Be && (ue = ue ? ue.concat(Be) : Be), D == null ? (a(le, K, ae), a(Se, K, ae), b(F.children, K, Se, G, te, re, ue, de)) : _e > 0 && _e & 64 && Ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    D.dynamicChildren ? (C(D.dynamicChildren, Ee, K, G, te, re, ue), process.env.NODE_ENV !== "production" && G && G.type.__hmrId ? Ko(D, F) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (F.key != null || G && F === G.subTree) && Ko(
        D,
        F,
        !0
        /* shallow */
      )
    )) : W(D, F, K, Se, G, te, re, ue, de);
  }, z = (D, F, K, ae, G, te, re, ue, de) => {
    F.slotScopeIds = ue, D == null ? F.shapeFlag & 512 ? G.ctx.activate(F, K, ae, re, de) : U(F, K, ae, G, te, re, de) : B(D, F, de);
  }, U = (D, F, K, ae, G, te, re) => {
    const ue = D.component = M1(D, ae, G);
    if (process.env.NODE_ENV !== "production" && ue.type.__hmrId && Pw(ue), process.env.NODE_ENV !== "production" && (Jl(D), ma(ue, "mount")), El(D) && (ue.ctx.renderer = We), process.env.NODE_ENV !== "production" && ma(ue, "init"), B1(ue), process.env.NODE_ENV !== "production" && ha(ue, "init"), ue.asyncDep) {
      if (G && G.registerDep(ue, h), !D.el) {
        const de = ue.subTree = m(jt);
        O(null, de, F, K);
      }
      return;
    }
    h(ue, D, F, K, G, te, re), process.env.NODE_ENV !== "production" && (ei(), ha(ue, "mount"));
  }, B = (D, F, K) => {
    const ae = F.component = D.component;
    if (Ww(D, F, K))
      if (ae.asyncDep && !ae.asyncResolved) {
        process.env.NODE_ENV !== "production" && Jl(F), P(ae, F, K), process.env.NODE_ENV !== "production" && ei();
        return;
      } else
        ae.next = F, Ew(ae.update), ae.update();
    else
      F.el = D.el, ae.vnode = F;
  }, h = (D, F, K, ae, G, te, re) => {
    const ue = () => {
      if (D.isMounted) {
        let { next: Se, bu: _e, u: Ee, parent: Be, vnode: Ue } = D, Ze = Se, L;
        process.env.NODE_ENV !== "production" && Jl(Se || D.vnode), ar(D, !1), Se ? (Se.el = Ue.el, P(D, Se, re)) : Se = Ue, _e && Qr(_e), (L = Se.props && Se.props.onVnodeBeforeUpdate) && Zn(L, Be, Se, Ue), ar(D, !0), process.env.NODE_ENV !== "production" && ma(D, "render");
        const J = Ru(D);
        process.env.NODE_ENV !== "production" && ha(D, "render");
        const ke = D.subTree;
        D.subTree = J, process.env.NODE_ENV !== "production" && ma(D, "patch"), p(
          ke,
          J,
          // parent may have changed if it's in a teleport
          c(ke.el),
          // anchor may have changed if it's in a fragment
          be(ke),
          D,
          G,
          te
        ), process.env.NODE_ENV !== "production" && ha(D, "patch"), Se.el = J.el, Ze === null && zw(D, J.el), Ee && hn(Ee, G), (L = Se.props && Se.props.onVnodeUpdated) && hn(() => Zn(L, Be, Se, Ue), G), process.env.NODE_ENV !== "production" && Tp(D), process.env.NODE_ENV !== "production" && ei();
      } else {
        let Se;
        const { el: _e, props: Ee } = F, { bm: Be, m: Ue, parent: Ze } = D, L = Go(F);
        if (ar(D, !1), Be && Qr(Be), !L && (Se = Ee && Ee.onVnodeBeforeMount) && Zn(Se, Ze, F), ar(D, !0), _e && De) {
          const J = () => {
            process.env.NODE_ENV !== "production" && ma(D, "render"), D.subTree = Ru(D), process.env.NODE_ENV !== "production" && ha(D, "render"), process.env.NODE_ENV !== "production" && ma(D, "hydrate"), De(_e, D.subTree, D, G, null), process.env.NODE_ENV !== "production" && ha(D, "hydrate");
          };
          L ? F.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !D.isUnmounted && J()
          ) : J();
        } else {
          process.env.NODE_ENV !== "production" && ma(D, "render");
          const J = D.subTree = Ru(D);
          process.env.NODE_ENV !== "production" && ha(D, "render"), process.env.NODE_ENV !== "production" && ma(D, "patch"), p(null, J, K, ae, D, G, te), process.env.NODE_ENV !== "production" && ha(D, "patch"), F.el = J.el;
        }
        if (Ue && hn(Ue, G), !L && (Se = Ee && Ee.onVnodeMounted)) {
          const J = F;
          hn(() => Zn(Se, Ze, J), G);
        }
        (F.shapeFlag & 256 || Ze && Go(Ze.vnode) && Ze.vnode.shapeFlag & 256) && D.a && hn(D.a, G), D.isMounted = !0, process.env.NODE_ENV !== "production" && Aw(D), F = K = ae = null;
      }
    }, de = D.effect = new Cd(
      ue,
      () => su(le),
      D.scope
      // track it in component's effect scope
    ), le = D.update = () => de.run();
    le.id = D.uid, ar(D, !0), process.env.NODE_ENV !== "production" && (de.onTrack = D.rtc ? (Se) => Qr(D.rtc, Se) : void 0, de.onTrigger = D.rtg ? (Se) => Qr(D.rtg, Se) : void 0, le.ownerInstance = D), le();
  }, P = (D, F, K) => {
    F.component = D;
    const ae = D.vnode.props;
    D.vnode = F, D.next = null, m1(D, F.props, ae, K), S1(D, F.children, K), Vr(), Yv(), Ir();
  }, W = (D, F, K, ae, G, te, re, ue, de = !1) => {
    const le = D && D.children, Se = D ? D.shapeFlag : 0, _e = F.children, { patchFlag: Ee, shapeFlag: Be } = F;
    if (Ee > 0) {
      if (Ee & 128) {
        j(le, _e, K, ae, G, te, re, ue, de);
        return;
      } else if (Ee & 256) {
        H(le, _e, K, ae, G, te, re, ue, de);
        return;
      }
    }
    Be & 8 ? (Se & 16 && we(le, G, te), _e !== le && d(K, _e)) : Se & 16 ? Be & 16 ? j(le, _e, K, ae, G, te, re, ue, de) : we(le, G, te, !0) : (Se & 8 && d(K, ""), Be & 16 && b(_e, K, ae, G, te, re, ue, de));
  }, H = (D, F, K, ae, G, te, re, ue, de) => {
    D = D || ro, F = F || ro;
    const le = D.length, Se = F.length, _e = Math.min(le, Se);
    let Ee;
    for (Ee = 0; Ee < _e; Ee++) {
      const Be = F[Ee] = de ? Fa(F[Ee]) : Wn(F[Ee]);
      p(D[Ee], Be, K, null, G, te, re, ue, de);
    }
    le > Se ? we(D, G, te, !0, !1, _e) : b(F, K, ae, G, te, re, ue, de, _e);
  }, j = (D, F, K, ae, G, te, re, ue, de) => {
    let le = 0;
    const Se = F.length;
    let _e = D.length - 1, Ee = Se - 1;
    for (; le <= _e && le <= Ee; ) {
      const Be = D[le], Ue = F[le] = de ? Fa(F[le]) : Wn(F[le]);
      if (fr(Be, Ue))
        p(Be, Ue, K, null, G, te, re, ue, de);
      else
        break;
      le++;
    }
    for (; le <= _e && le <= Ee; ) {
      const Be = D[_e], Ue = F[Ee] = de ? Fa(F[Ee]) : Wn(F[Ee]);
      if (fr(Be, Ue))
        p(Be, Ue, K, null, G, te, re, ue, de);
      else
        break;
      _e--, Ee--;
    }
    if (le > _e) {
      if (le <= Ee) {
        const Be = Ee + 1, Ue = Be < Se ? F[Be].el : ae;
        for (; le <= Ee; )
          p(null, F[le] = de ? Fa(F[le]) : Wn(F[le]), K, Ue, G, te, re, ue, de), le++;
      }
    } else if (le > Ee)
      for (; le <= _e; )
        Q(D[le], G, te, !0), le++;
    else {
      const Be = le, Ue = le, Ze = /* @__PURE__ */ new Map();
      for (le = Ue; le <= Ee; le++) {
        const xt = F[le] = de ? Fa(F[le]) : Wn(F[le]);
        xt.key != null && (process.env.NODE_ENV !== "production" && Ze.has(xt.key) && ie("Duplicate keys found during update:", JSON.stringify(xt.key), "Make sure keys are unique."), Ze.set(xt.key, le));
      }
      let L, J = 0;
      const ke = Ee - Ue + 1;
      let Pe = !1, ut = 0;
      const At = new Array(ke);
      for (le = 0; le < ke; le++)
        At[le] = 0;
      for (le = Be; le <= _e; le++) {
        const xt = D[le];
        if (J >= ke) {
          Q(xt, G, te, !0);
          continue;
        }
        let ee;
        if (xt.key != null)
          ee = Ze.get(xt.key);
        else
          for (L = Ue; L <= Ee; L++)
            if (At[L - Ue] === 0 && fr(xt, F[L])) {
              ee = L;
              break;
            }
        ee === void 0 ? Q(xt, G, te, !0) : (At[ee - Ue] = le + 1, ee >= ut ? ut = ee : Pe = !0, p(xt, F[ee], K, null, G, te, re, ue, de), J++);
      }
      const Tn = Pe ? $1(At) : ro;
      for (L = Tn.length - 1, le = ke - 1; le >= 0; le--) {
        const xt = Ue + le, ee = F[xt], Ce = xt + 1 < Se ? F[xt + 1].el : ae;
        At[le] === 0 ? p(null, ee, K, Ce, G, te, re, ue, de) : Pe && (L < 0 || le !== Tn[L] ? X(
          ee,
          K,
          Ce,
          2
          /* MoveType.REORDER */
        ) : L--);
      }
    }
  }, X = (D, F, K, ae, G = null) => {
    const { el: te, type: re, transition: ue, children: de, shapeFlag: le } = D;
    if (le & 6) {
      X(D.component.subTree, F, K, ae);
      return;
    }
    if (le & 128) {
      D.suspense.move(F, K, ae);
      return;
    }
    if (le & 64) {
      re.move(D, F, K, We);
      return;
    }
    if (re === ye) {
      a(te, F, K);
      for (let _e = 0; _e < de.length; _e++)
        X(de[_e], F, K, ae);
      a(D.anchor, F, K);
      return;
    }
    if (re === ti) {
      N(D, F, K);
      return;
    }
    if (ae !== 2 && le & 1 && ue)
      if (ae === 0)
        ue.beforeEnter(te), a(te, F, K), hn(() => ue.enter(te), G);
      else {
        const { leave: _e, delayLeave: Ee, afterLeave: Be } = ue, Ue = () => a(te, F, K), Ze = () => {
          _e(te, () => {
            Ue(), Be && Be();
          });
        };
        Ee ? Ee(te, Ue, Ze) : Ze();
      }
    else
      a(te, F, K);
  }, Q = (D, F, K, ae = !1, G = !1) => {
    const { type: te, props: re, ref: ue, children: de, dynamicChildren: le, shapeFlag: Se, patchFlag: _e, dirs: Ee } = D;
    if (ue != null && Oc(ue, null, K, D, !0), Se & 256) {
      F.ctx.deactivate(D);
      return;
    }
    const Be = Se & 1 && Ee, Ue = !Go(D);
    let Ze;
    if (Ue && (Ze = re && re.onVnodeBeforeUnmount) && Zn(Ze, F, D), Se & 6)
      q(D.component, K, ae);
    else {
      if (Se & 128) {
        D.suspense.unmount(K, ae);
        return;
      }
      Be && nr(D, null, F, "beforeUnmount"), Se & 64 ? D.type.remove(D, F, K, G, We, ae) : le && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (te !== ye || _e > 0 && _e & 64) ? we(le, F, K, !1, !0) : (te === ye && _e & 384 || !G && Se & 16) && we(de, F, K), ae && Y(D);
    }
    (Ue && (Ze = re && re.onVnodeUnmounted) || Be) && hn(() => {
      Ze && Zn(Ze, F, D), Be && nr(D, null, F, "unmounted");
    }, K);
  }, Y = (D) => {
    const { type: F, el: K, anchor: ae, transition: G } = D;
    if (F === ye) {
      process.env.NODE_ENV !== "production" && D.patchFlag > 0 && D.patchFlag & 2048 && G && !G.persisted ? D.children.forEach((re) => {
        re.type === jt ? r(re.el) : Y(re);
      }) : I(K, ae);
      return;
    }
    if (F === ti) {
      V(D);
      return;
    }
    const te = () => {
      r(K), G && !G.persisted && G.afterLeave && G.afterLeave();
    };
    if (D.shapeFlag & 1 && G && !G.persisted) {
      const { leave: re, delayLeave: ue } = G, de = () => re(K, te);
      ue ? ue(D.el, te, de) : de();
    } else
      te();
  }, I = (D, F) => {
    let K;
    for (; D !== F; )
      K = f(D), r(D), D = K;
    r(F);
  }, q = (D, F, K) => {
    process.env.NODE_ENV !== "production" && D.type.__hmrId && Tw(D);
    const { bum: ae, scope: G, update: te, subTree: re, um: ue } = D;
    ae && Qr(ae), G.stop(), te && (te.active = !1, Q(re, D, F, K)), ue && hn(ue, F), hn(() => {
      D.isUnmounted = !0;
    }, F), F && F.pendingBranch && !F.isUnmounted && D.asyncDep && !D.asyncResolved && D.suspenseId === F.pendingId && (F.deps--, F.deps === 0 && F.resolve()), process.env.NODE_ENV !== "production" && Rw(D);
  }, we = (D, F, K, ae = !1, G = !1, te = 0) => {
    for (let re = te; re < D.length; re++)
      Q(D[re], F, K, ae, G);
  }, be = (D) => D.shapeFlag & 6 ? be(D.component.subTree) : D.shapeFlag & 128 ? D.suspense.next() : f(D.anchor || D.el), Oe = (D, F, K) => {
    D == null ? F._vnode && Q(F._vnode, null, null, !0) : p(F._vnode || null, D, F, null, null, null, K), Yv(), Cp(), F._vnode = D;
  }, We = {
    p,
    um: Q,
    m: X,
    r: Y,
    mt: U,
    mc: b,
    pc: W,
    pbc: C,
    n: be,
    o: e
  };
  let yt, De;
  return t && ([yt, De] = t(We)), {
    render: Oe,
    hydrate: yt,
    createApp: x1(Oe, yt)
  };
}
function ar({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Ko(e, t, n = !1) {
  const a = e.children, r = t.children;
  if (Ne(a) && Ne(r))
    for (let o = 0; o < a.length; o++) {
      const l = a[o];
      let i = r[o];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[o] = Fa(r[o]), i.el = l.el), n || Ko(l, i)), i.type === ho && (i.el = l.el), process.env.NODE_ENV !== "production" && i.type === jt && !i.el && (i.el = l.el);
    }
}
function $1(e) {
  const t = e.slice(), n = [0];
  let a, r, o, l, i;
  const s = e.length;
  for (a = 0; a < s; a++) {
    const u = e[a];
    if (u !== 0) {
      if (r = n[n.length - 1], e[r] < u) {
        t[a] = r, n.push(a);
        continue;
      }
      for (o = 0, l = n.length - 1; o < l; )
        i = o + l >> 1, e[n[i]] < u ? o = i + 1 : l = i;
      u < e[n[o]] && (o > 0 && (t[a] = n[o - 1]), n[o] = a);
    }
  }
  for (o = n.length, l = n[o - 1]; o-- > 0; )
    n[o] = l, l = t[l];
  return n;
}
const P1 = (e) => e.__isTeleport, lo = (e) => e && (e.disabled || e.disabled === ""), am = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Cc = (e, t) => {
  const n = e && e.to;
  if (ct(n))
    if (t) {
      const a = t(n);
      return a || process.env.NODE_ENV !== "production" && ie(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`), a;
    } else
      return process.env.NODE_ENV !== "production" && ie("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"), null;
  else
    return process.env.NODE_ENV !== "production" && !n && !lo(e) && ie(`Invalid Teleport target: ${n}`), n;
}, T1 = {
  __isTeleport: !0,
  process(e, t, n, a, r, o, l, i, s, u) {
    const { mc: d, pc: c, pbc: f, o: { insert: v, querySelector: y, createText: p, createComment: x } } = u, O = lo(t.props);
    let { shapeFlag: E, children: S, dynamicChildren: N } = t;
    if (process.env.NODE_ENV !== "production" && Ha && (s = !1, N = null), e == null) {
      const V = t.el = process.env.NODE_ENV !== "production" ? x("teleport start") : p(""), $ = t.anchor = process.env.NODE_ENV !== "production" ? x("teleport end") : p("");
      v(V, n, a), v($, n, a);
      const k = t.target = Cc(t.props, y), g = t.targetAnchor = p("");
      k ? (v(g, k), l = l || am(k)) : process.env.NODE_ENV !== "production" && !O && ie("Invalid Teleport target on mount:", k, `(${typeof k})`);
      const b = (w, C) => {
        E & 16 && d(S, w, C, r, o, l, i, s);
      };
      O ? b(n, $) : k && b(k, g);
    } else {
      t.el = e.el;
      const V = t.anchor = e.anchor, $ = t.target = e.target, k = t.targetAnchor = e.targetAnchor, g = lo(e.props), b = g ? n : $, w = g ? V : k;
      if (l = l || am($), N ? (f(e.dynamicChildren, N, b, r, o, l, i), Ko(e, t, !0)) : s || c(e, t, b, w, r, o, l, i, !1), O)
        g || Ul(
          t,
          n,
          V,
          u,
          1
          /* TeleportMoveTypes.TOGGLE */
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const C = t.target = Cc(t.props, y);
        C ? Ul(
          t,
          C,
          null,
          u,
          0
          /* TeleportMoveTypes.TARGET_CHANGE */
        ) : process.env.NODE_ENV !== "production" && ie("Invalid Teleport target on update:", $, `(${typeof $})`);
      } else
        g && Ul(
          t,
          $,
          k,
          u,
          1
          /* TeleportMoveTypes.TOGGLE */
        );
    }
    ng(t);
  },
  remove(e, t, n, a, { um: r, o: { remove: o } }, l) {
    const { shapeFlag: i, children: s, anchor: u, targetAnchor: d, target: c, props: f } = e;
    if (c && o(d), (l || !lo(f)) && (o(u), i & 16))
      for (let v = 0; v < s.length; v++) {
        const y = s[v];
        r(y, t, n, !0, !!y.dynamicChildren);
      }
  },
  move: Ul,
  hydrate: N1
};
function Ul(e, t, n, { o: { insert: a }, m: r }, o = 2) {
  o === 0 && a(e.targetAnchor, t, n);
  const { el: l, anchor: i, shapeFlag: s, children: u, props: d } = e, c = o === 2;
  if (c && a(l, t, n), (!c || lo(d)) && s & 16)
    for (let f = 0; f < u.length; f++)
      r(
        u[f],
        t,
        n,
        2
        /* MoveType.REORDER */
      );
  c && a(i, t, n);
}
function N1(e, t, n, a, r, o, { o: { nextSibling: l, parentNode: i, querySelector: s } }, u) {
  const d = t.target = Cc(t.props, s);
  if (d) {
    const c = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (lo(t.props))
        t.anchor = u(l(e), t, i(e), n, a, r, o), t.targetAnchor = c;
      else {
        t.anchor = l(e);
        let f = c;
        for (; f; )
          if (f = l(f), f && f.nodeType === 8 && f.data === "teleport anchor") {
            t.targetAnchor = f, d._lpa = t.targetAnchor && l(t.targetAnchor);
            break;
          }
        u(c, t, d, n, a, r, o);
      }
    ng(t);
  }
  return t.anchor && l(t.anchor);
}
const tg = T1;
function ng(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const ye = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), ho = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), jt = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), ti = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Xo = [];
let zn = null;
function Z(e = !1) {
  Xo.push(zn = e ? null : []);
}
function D1() {
  Xo.pop(), zn = Xo[Xo.length - 1] || null;
}
let vl = 1;
function rm(e) {
  vl += e;
}
function ag(e) {
  return e.dynamicChildren = vl > 0 ? zn || ro : null, D1(), vl > 0 && zn && zn.push(e), e;
}
function me(e, t, n, a, r, o) {
  return ag(Ie(
    e,
    t,
    n,
    a,
    r,
    o,
    !0
    /* isBlock */
  ));
}
function qe(e, t, n, a, r) {
  return ag(m(
    e,
    t,
    n,
    a,
    r,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function uo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function fr(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && Zr.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const V1 = (...e) => og(...e), du = "__vInternal", rg = ({ key: e }) => e ?? null, ni = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ct(e) || Ye(e) || Le(e) ? { i: Rt, r: e, k: t, f: !!n } : e : null;
function Ie(e, t = null, n = null, a = 0, r = null, o = e === ye ? 0 : 1, l = !1, i = !1) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && rg(t),
    ref: t && ni(t),
    scopeId: Vp,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: a,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Rt
  };
  return i ? (jd(s, n), o & 128 && e.normalize(s)) : n && (s.shapeFlag |= ct(n) ? 8 : 16), process.env.NODE_ENV !== "production" && s.key !== s.key && ie("VNode created with invalid key (NaN). VNode type:", s.type), vl > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  zn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (s.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  s.patchFlag !== 32 && zn.push(s), s;
}
const m = process.env.NODE_ENV !== "production" ? V1 : og;
function og(e, t = null, n = null, a = 0, r = null, o = !1) {
  if ((!e || e === Yp) && (process.env.NODE_ENV !== "production" && !e && ie(`Invalid vnode type when creating vnode: ${e}.`), e = jt), uo(e)) {
    const i = qn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && jd(i, n), vl > 0 && !o && zn && (i.shapeFlag & 6 ? zn[zn.indexOf(e)] = i : zn.push(i)), i.patchFlag |= -2, i;
  }
  if (cg(e) && (e = e.__vccOpts), t) {
    t = In(t);
    let { class: i, style: s } = t;
    i && !ct(i) && (t.class = et(i)), tt(s) && (es(s) && !Ne(s) && (s = bt({}, s)), t.style = An(s));
  }
  const l = ct(e) ? 1 : qw(e) ? 128 : P1(e) ? 64 : tt(e) ? 4 : Le(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && l & 4 && es(e) && (e = Te(e), ie("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), Ie(e, t, n, a, r, l, o, !0);
}
function In(e) {
  return e ? es(e) || du in e ? bt({}, e) : e : null;
}
function qn(e, t, n = !1) {
  const { props: a, ref: r, patchFlag: o, children: l } = e, i = t ? ve(a || {}, t) : a;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: i,
    key: i && rg(i),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Ne(r) ? r.concat(ni(t)) : [r, ni(t)] : ni(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && o === -1 && Ne(l) ? l.map(lg) : l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ye ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && qn(e.ssContent),
    ssFallback: e.ssFallback && qn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function lg(e) {
  const t = qn(e);
  return Ne(e.children) && (t.children = e.children.map(lg)), t;
}
function wt(e = " ", t = 0) {
  return m(ho, null, e, t);
}
function ce(e = "", t = !1) {
  return t ? (Z(), qe(jt, null, e)) : m(jt, null, e);
}
function Wn(e) {
  return e == null || typeof e == "boolean" ? m(jt) : Ne(e) ? m(
    ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Fa(e) : m(ho, null, String(e));
}
function Fa(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qn(e);
}
function jd(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null)
    t = null;
  else if (Ne(t))
    n = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), jd(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(du in t) ? t._ctx = Rt : r === 3 && Rt && (Rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    Le(t) ? (t = { default: t, _ctx: Rt }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [wt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ve(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const r in a)
      if (r === "class")
        t.class !== a.class && (t.class = et([t.class, a.class]));
      else if (r === "style")
        t.style = An([t.style, a.style]);
      else if (kl(r)) {
        const o = t[r], l = a[r];
        l && o !== l && !(Ne(o) && o.includes(l)) && (t[r] = o ? [].concat(o, l) : l);
      } else
        r !== "" && (t[r] = a[r]);
  }
  return t;
}
function Zn(e, t, n, a = null) {
  Mn(e, t, 7, [
    n,
    a
  ]);
}
const I1 = eg();
let A1 = 0;
function M1(e, t, n) {
  const a = e.type, r = (t ? t.appContext : e.appContext) || I1, o = {
    uid: A1++,
    vnode: e,
    type: a,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new ap(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Kp(a, r),
    emitsOptions: Dp(a, r),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: it,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: it,
    data: it,
    props: it,
    attrs: it,
    slots: it,
    refs: it,
    setupState: it,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? o.ctx = a1(o) : o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = jw.bind(null, o), e.ce && e.ce(o), o;
}
let _t = null;
const yo = () => _t || Rt, co = (e) => {
  _t = e, e.scope.on();
}, Or = () => {
  _t && _t.scope.off(), _t = null;
}, R1 = /* @__PURE__ */ Ka("slot,component");
function Ec(e, t) {
  const n = t.isNativeTag || Zy;
  (R1(e) || n(e)) && ie("Do not use built-in or reserved HTML elements as component id: " + e);
}
function ig(e) {
  return e.vnode.shapeFlag & 4;
}
let ml = !1;
function B1(e, t = !1) {
  ml = t;
  const { props: n, children: a } = e.vnode, r = ig(e);
  d1(e, n, r, t), w1(e, a);
  const o = r ? F1(e, t) : void 0;
  return ml = !1, o;
}
function F1(e, t) {
  var n;
  const a = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (a.name && Ec(a.name, e.appContext.config), a.components) {
      const o = Object.keys(a.components);
      for (let l = 0; l < o.length; l++)
        Ec(o[l], e.appContext.config);
    }
    if (a.directives) {
      const o = Object.keys(a.directives);
      for (let l = 0; l < o.length; l++)
        Up(o[l]);
    }
    a.compilerOptions && L1() && ie('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Yn(new Proxy(e.ctx, zp)), process.env.NODE_ENV !== "production" && r1(e);
  const { setup: r } = a;
  if (r) {
    const o = e.setupContext = r.length > 1 ? ug(e) : null;
    co(e), Vr();
    const l = _a(r, e, 0, [process.env.NODE_ENV !== "production" ? to(e.props) : e.props, o]);
    if (Ir(), Or(), Sd(l)) {
      if (l.then(Or, Or), t)
        return l.then((i) => {
          om(e, i, t);
        }).catch((i) => {
          iu(
            i,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      if (e.asyncDep = l, process.env.NODE_ENV !== "production" && !e.suspense) {
        const i = (n = a.name) !== null && n !== void 0 ? n : "Anonymous";
        ie(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      om(e, l, t);
  } else
    sg(e, t);
}
function om(e, t, n) {
  Le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : tt(t) ? (process.env.NODE_ENV !== "production" && uo(t) && ie("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = _p(t), process.env.NODE_ENV !== "production" && o1(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && ie(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), sg(e, n);
}
let $c;
const L1 = () => !$c;
function sg(e, t, n) {
  const a = e.type;
  if (!e.render) {
    if (!t && $c && !a.render) {
      const r = a.template || Fd(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && ma(e, "compile");
        const { isCustomElement: o, compilerOptions: l } = e.appContext.config, { delimiters: i, compilerOptions: s } = a, u = bt(bt({
          isCustomElement: o,
          delimiters: i
        }, l), s);
        a.render = $c(r, u), process.env.NODE_ENV !== "production" && ha(e, "compile");
      }
    }
    e.render = a.render || Yt;
  }
  co(e), Vr(), i1(e), Ir(), Or(), process.env.NODE_ENV !== "production" && !a.render && e.render === Yt && !t && (a.template ? ie(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : ie("Component is missing template or render function."));
}
function lm(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return ns(), dn(e, "get", "$attrs"), t[n];
    },
    set() {
      return ie("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return ie("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return dn(e, "get", "$attrs"), t[n];
    }
  });
}
function ug(e) {
  const t = (a) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && ie("expose() should be called only once per setup()."), a != null)) {
      let r = typeof a;
      r === "object" && (Ne(a) ? r = "array" : Ye(a) && (r = "ref")), r !== "object" && ie(`expose() should be passed a plain object, received ${r}.`);
    }
    e.exposed = a || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = lm(e));
    },
    get slots() {
      return to(e.slots);
    },
    get emit() {
      return (a, ...r) => e.emit(a, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = lm(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function vu(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(_p(Yn(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in xr)
          return xr[n](e);
      },
      has(t, n) {
        return n in t || n in xr;
      }
    }));
}
const j1 = /(?:^|[-_])(\w)/g, H1 = (e) => e.replace(j1, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Hd(e, t = !0) {
  return Le(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function mu(e, t, n = !1) {
  let a = Hd(t);
  if (!a && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (a = r[1]);
  }
  if (!a && e && e.parent) {
    const r = (o) => {
      for (const l in o)
        if (o[l] === t)
          return l;
    };
    a = r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return a ? H1(a) : n ? "App" : "Anonymous";
}
function cg(e) {
  return Le(e) && "__vccOpts" in e;
}
const _ = (e, t) => gw(e, t, ml);
function Ud() {
  return U1().slots;
}
function U1() {
  const e = yo();
  return process.env.NODE_ENV !== "production" && !e && ie("useContext() called without active instance."), e.setupContext || (e.setupContext = ug(e));
}
function Xa(e, t, n) {
  const a = arguments.length;
  return a === 2 ? tt(t) && !Ne(t) ? uo(t) ? m(e, null, [t]) : m(e, t) : m(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && uo(n) && (n = [n]), m(e, t, n));
}
const Y1 = Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : ""), W1 = () => {
  {
    const e = nt(Y1);
    return e || process.env.NODE_ENV !== "production" && ie("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function ju(e) {
  return !!(e && e.__v_isShallow);
}
function z1() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, a = { style: "color:#9d288c" }, r = {
    header(c) {
      return tt(c) ? c.__isVue ? ["div", e, "VueInstance"] : Ye(c) ? [
        "div",
        {},
        ["span", e, d(c)],
        "<",
        i(c.value),
        ">"
      ] : ia(c) ? [
        "div",
        {},
        ["span", e, ju(c) ? "ShallowReactive" : "Reactive"],
        "<",
        i(c),
        `>${za(c) ? " (readonly)" : ""}`
      ] : za(c) ? [
        "div",
        {},
        ["span", e, ju(c) ? "ShallowReadonly" : "Readonly"],
        "<",
        i(c),
        ">"
      ] : null : null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...o(c.$)
        ];
    }
  };
  function o(c) {
    const f = [];
    c.type.props && c.props && f.push(l("props", Te(c.props))), c.setupState !== it && f.push(l("setup", c.setupState)), c.data !== it && f.push(l("data", Te(c.data)));
    const v = s(c, "computed");
    v && f.push(l("computed", v));
    const y = s(c, "inject");
    return y && f.push(l("injected", y)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: a.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), f;
  }
  function l(c, f) {
    return f = bt({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((v) => [
          "div",
          {},
          ["span", a, v + ": "],
          i(f[v], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function i(c, f = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", a, c] : tt(c) ? ["object", { object: f ? Te(c) : c }] : ["span", n, String(c)];
  }
  function s(c, f) {
    const v = c.type;
    if (Le(v))
      return;
    const y = {};
    for (const p in c.ctx)
      u(v, p, f) && (y[p] = c.ctx[p]);
    return y;
  }
  function u(c, f, v) {
    const y = c[v];
    if (Ne(y) && y.includes(f) || tt(y) && f in y || c.extends && u(c.extends, f, v) || c.mixins && c.mixins.some((p) => u(p, f, v)))
      return !0;
  }
  function d(c) {
    return ju(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const im = "3.2.47", q1 = "http://www.w3.org/2000/svg", dr = typeof document < "u" ? document : null, sm = dr && /* @__PURE__ */ dr.createElement("template"), G1 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, a) => {
    const r = t ? dr.createElementNS(q1, e) : dr.createElement(e, n ? { is: n } : void 0);
    return e === "select" && a && a.multiple != null && r.setAttribute("multiple", a.multiple), r;
  },
  createText: (e) => dr.createTextNode(e),
  createComment: (e) => dr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => dr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, a, r, o) {
    const l = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      sm.innerHTML = a ? `<svg>${e}</svg>` : e;
      const i = sm.content;
      if (a) {
        const s = i.firstChild;
        for (; s.firstChild; )
          i.appendChild(s.firstChild);
        i.removeChild(s);
      }
      t.insertBefore(i, n);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function K1(e, t, n) {
  const a = e._vtc;
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function X1(e, t, n) {
  const a = e.style, r = ct(n);
  if (n && !r) {
    if (t && !ct(t))
      for (const o in t)
        n[o] == null && Pc(a, o, "");
    for (const o in n)
      Pc(a, o, n[o]);
  } else {
    const o = a.display;
    r ? t !== n && (a.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (a.display = o);
  }
}
const Q1 = /[^\\];\s*$/, um = /\s*!important$/;
function Pc(e, t, n) {
  if (Ne(n))
    n.forEach((a) => Pc(e, t, a));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Q1.test(n) && ie(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const a = Z1(e, t);
    um.test(n) ? e.setProperty(Sa(a), n.replace(um, ""), "important") : e[a] = n;
  }
}
const cm = ["Webkit", "Moz", "ms"], Hu = {};
function Z1(e, t) {
  const n = Hu[t];
  if (n)
    return n;
  let a = Bn(t);
  if (a !== "filter" && a in e)
    return Hu[t] = a;
  a = Fn(a);
  for (let r = 0; r < cm.length; r++) {
    const o = cm[r] + a;
    if (o in e)
      return Hu[t] = o;
  }
  return t;
}
const fm = "http://www.w3.org/1999/xlink";
function J1(e, t, n, a, r) {
  if (a && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(fm, t.slice(6, t.length)) : e.setAttributeNS(fm, t, n);
  else {
    const o = N_(t);
    n == null || o && !Xy(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function eS(e, t, n, a, r, o, l) {
  if (t === "innerHTML" || t === "textContent") {
    a && l(a, r, o), e[t] = n ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = n;
    const s = n ?? "";
    (e.value !== s || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = s), n == null && e.removeAttribute(t);
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const s = typeof e[t];
    s === "boolean" ? n = Xy(n) : n == null && s === "string" ? (n = "", i = !0) : s === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (s) {
    process.env.NODE_ENV !== "production" && !i && ie(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, s);
  }
  i && e.removeAttribute(t);
}
function Jr(e, t, n, a) {
  e.addEventListener(t, n, a);
}
function tS(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
function nS(e, t, n, a, r = null) {
  const o = e._vei || (e._vei = {}), l = o[t];
  if (a && l)
    l.value = a;
  else {
    const [i, s] = aS(t);
    if (a) {
      const u = o[t] = lS(a, r);
      Jr(e, i, u, s);
    } else
      l && (tS(e, i, l, s), o[t] = void 0);
  }
}
const dm = /(?:Once|Passive|Capture)$/;
function aS(e) {
  let t;
  if (dm.test(e)) {
    t = {};
    let a;
    for (; a = e.match(dm); )
      e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Sa(e.slice(2)), t];
}
let Uu = 0;
const rS = /* @__PURE__ */ Promise.resolve(), oS = () => Uu || (rS.then(() => Uu = 0), Uu = Date.now());
function lS(e, t) {
  const n = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= n.attached)
      return;
    Mn(iS(a, n.value), t, 5, [a]);
  };
  return n.value = e, n.attached = oS(), n;
}
function iS(e, t) {
  if (Ne(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((a) => (r) => !r._stopped && a && a(r));
  } else
    return t;
}
const vm = /^on[a-z]/, sS = (e, t, n, a, r = !1, o, l, i, s) => {
  t === "class" ? K1(e, a, r) : t === "style" ? X1(e, n, a) : kl(t) ? Ki(t) || nS(e, t, n, a, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : uS(e, t, a, r)) ? eS(e, t, a, o, l, i, s) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), J1(e, t, a, r));
};
function uS(e, t, n, a) {
  return a ? !!(t === "innerHTML" || t === "textContent" || t in e && vm.test(t) && Le(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || vm.test(t) && ct(n) ? !1 : t in e;
}
const Ia = "transition", Io = "animation", Jt = (e, { slots: t }) => Xa(Rp, dg(e), t);
Jt.displayName = "Transition";
const fg = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, cS = Jt.props = /* @__PURE__ */ bt({}, Rp.props, fg), rr = (e, t = []) => {
  Ne(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, mm = (e) => e ? Ne(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function dg(e) {
  const t = {};
  for (const T in e)
    T in fg || (t[T] = e[T]);
  if (e.css === !1)
    return t;
  const { name: n = "v", type: a, duration: r, enterFromClass: o = `${n}-enter-from`, enterActiveClass: l = `${n}-enter-active`, enterToClass: i = `${n}-enter-to`, appearFromClass: s = o, appearActiveClass: u = l, appearToClass: d = i, leaveFromClass: c = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: v = `${n}-leave-to` } = e, y = fS(r), p = y && y[0], x = y && y[1], { onBeforeEnter: O, onEnter: E, onEnterCancelled: S, onLeave: N, onLeaveCancelled: V, onBeforeAppear: $ = O, onAppear: k = E, onAppearCancelled: g = S } = t, b = (T, A, z) => {
    Ma(T, A ? d : i), Ma(T, A ? u : l), z && z();
  }, w = (T, A) => {
    T._isLeaving = !1, Ma(T, c), Ma(T, v), Ma(T, f), A && A();
  }, C = (T) => (A, z) => {
    const U = T ? k : E, B = () => b(A, T, z);
    rr(U, [A, B]), hm(() => {
      Ma(A, T ? s : o), ya(A, T ? d : i), mm(U) || ym(A, a, p, B);
    });
  };
  return bt(t, {
    onBeforeEnter(T) {
      rr(O, [T]), ya(T, o), ya(T, l);
    },
    onBeforeAppear(T) {
      rr($, [T]), ya(T, s), ya(T, u);
    },
    onEnter: C(!1),
    onAppear: C(!0),
    onLeave(T, A) {
      T._isLeaving = !0;
      const z = () => w(T, A);
      ya(T, c), mg(), ya(T, f), hm(() => {
        T._isLeaving && (Ma(T, c), ya(T, v), mm(N) || ym(T, a, x, z));
      }), rr(N, [T, z]);
    },
    onEnterCancelled(T) {
      b(T, !1), rr(S, [T]);
    },
    onAppearCancelled(T) {
      b(T, !0), rr(g, [T]);
    },
    onLeaveCancelled(T) {
      w(T), rr(V, [T]);
    }
  });
}
function fS(e) {
  if (e == null)
    return null;
  if (tt(e))
    return [Yu(e.enter), Yu(e.leave)];
  {
    const t = Yu(e);
    return [t, t];
  }
}
function Yu(e) {
  const t = R_(e);
  return process.env.NODE_ENV !== "production" && kw(t, "<transition> explicit duration"), t;
}
function ya(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = /* @__PURE__ */ new Set())).add(t);
}
function Ma(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function hm(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let dS = 0;
function ym(e, t, n, a) {
  const r = e._endId = ++dS, o = () => {
    r === e._endId && a();
  };
  if (n)
    return setTimeout(o, n);
  const { type: l, timeout: i, propCount: s } = vg(e, t);
  if (!l)
    return a();
  const u = l + "end";
  let d = 0;
  const c = () => {
    e.removeEventListener(u, f), o();
  }, f = (v) => {
    v.target === e && ++d >= s && c();
  };
  setTimeout(() => {
    d < s && c();
  }, i + 1), e.addEventListener(u, f);
}
function vg(e, t) {
  const n = window.getComputedStyle(e), a = (y) => (n[y] || "").split(", "), r = a(`${Ia}Delay`), o = a(`${Ia}Duration`), l = pm(r, o), i = a(`${Io}Delay`), s = a(`${Io}Duration`), u = pm(i, s);
  let d = null, c = 0, f = 0;
  t === Ia ? l > 0 && (d = Ia, c = l, f = o.length) : t === Io ? u > 0 && (d = Io, c = u, f = s.length) : (c = Math.max(l, u), d = c > 0 ? l > u ? Ia : Io : null, f = d ? d === Ia ? o.length : s.length : 0);
  const v = d === Ia && /\b(transform|all)(,|$)/.test(a(`${Ia}Property`).toString());
  return {
    type: d,
    timeout: c,
    propCount: f,
    hasTransform: v
  };
}
function pm(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, a) => gm(n) + gm(e[a])));
}
function gm(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function mg() {
  return document.body.offsetHeight;
}
const hg = /* @__PURE__ */ new WeakMap(), yg = /* @__PURE__ */ new WeakMap(), pg = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ bt({}, cS, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = yo(), a = Mp();
    let r, o;
    return Hp(() => {
      if (!r.length)
        return;
      const l = e.moveClass || `${e.name || "v"}-move`;
      if (!gS(r[0].el, n.vnode.el, l))
        return;
      r.forEach(hS), r.forEach(yS);
      const i = r.filter(pS);
      mg(), i.forEach((s) => {
        const u = s.el, d = u.style;
        ya(u, l), d.transform = d.webkitTransform = d.transitionDuration = "";
        const c = u._moveCb = (f) => {
          f && f.target !== u || (!f || /transform$/.test(f.propertyName)) && (u.removeEventListener("transitionend", c), u._moveCb = null, Ma(u, l));
        };
        u.addEventListener("transitionend", c);
      });
    }), () => {
      const l = Te(e), i = dg(l);
      let s = l.tag || ye;
      r = o, o = t.default ? Id(t.default()) : [];
      for (let u = 0; u < o.length; u++) {
        const d = o[u];
        d.key != null ? dl(d, fl(d, i, a, n)) : process.env.NODE_ENV !== "production" && ie("<TransitionGroup> children must be keyed.");
      }
      if (r)
        for (let u = 0; u < r.length; u++) {
          const d = r[u];
          dl(d, fl(d, i, a, n)), hg.set(d, d.el.getBoundingClientRect());
        }
      return m(s, null, o);
    };
  }
}, vS = (e) => delete e.mode;
pg.props;
const mS = pg;
function hS(e) {
  const t = e.el;
  t._moveCb && t._moveCb(), t._enterCb && t._enterCb();
}
function yS(e) {
  yg.set(e, e.el.getBoundingClientRect());
}
function pS(e) {
  const t = hg.get(e), n = yg.get(e), a = t.left - n.left, r = t.top - n.top;
  if (a || r) {
    const o = e.el.style;
    return o.transform = o.webkitTransform = `translate(${a}px,${r}px)`, o.transitionDuration = "0s", e;
  }
}
function gS(e, t, n) {
  const a = e.cloneNode();
  e._vtc && e._vtc.forEach((l) => {
    l.split(/\s+/).forEach((i) => i && a.classList.remove(i));
  }), n.split(/\s+/).forEach((l) => l && a.classList.add(l)), a.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(a);
  const { hasTransform: o } = vg(a);
  return r.removeChild(a), o;
}
const bm = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ne(t) ? (n) => Qr(t, n) : t;
};
function bS(e) {
  e.target.composing = !0;
}
function _m(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const _S = {
  created(e, { modifiers: { lazy: t, trim: n, number: a } }, r) {
    e._assign = bm(r);
    const o = a || r.props && r.props.type === "number";
    Jr(e, t ? "change" : "input", (l) => {
      if (l.target.composing)
        return;
      let i = e.value;
      n && (i = i.trim()), o && (i = vc(i)), e._assign(i);
    }), n && Jr(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Jr(e, "compositionstart", bS), Jr(e, "compositionend", _m), Jr(e, "change", _m));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: a, number: r } }, o) {
    if (e._assign = bm(o), e.composing || document.activeElement === e && e.type !== "range" && (n || a && e.value.trim() === t || (r || e.type === "number") && vc(e.value) === t))
      return;
    const l = t ?? "";
    e.value !== l && (e.value = l);
  }
}, wS = ["ctrl", "shift", "alt", "meta"], SS = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => wS.some((n) => e[`${n}Key`] && !t.includes(n))
}, ba = (e, t) => (n, ...a) => {
  for (let r = 0; r < t.length; r++) {
    const o = SS[t[r]];
    if (o && o(n, t))
      return;
  }
  return e(n, ...a);
}, kS = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Xe = (e, t) => (n) => {
  if (!("key" in n))
    return;
  const a = Sa(n.key);
  if (t.some((r) => r === a || kS[r] === a))
    return e(n);
}, gn = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ao(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: a }) {
    !t != !n && (a ? t ? (a.beforeEnter(e), Ao(e, !0), a.enter(e)) : a.leave(e, () => {
      Ao(e, !1);
    }) : Ao(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ao(e, t);
  }
};
function Ao(e, t) {
  e.style.display = t ? e._vod : "none";
}
const xS = /* @__PURE__ */ bt({ patchProp: sS }, G1);
let wm;
function OS() {
  return wm || (wm = C1(xS));
}
const CS = (...e) => {
  const t = OS().createApp(...e);
  process.env.NODE_ENV !== "production" && (ES(t), $S(t));
  const { mount: n } = t;
  return t.mount = (a) => {
    const r = PS(a);
    if (!r)
      return;
    const o = t._component;
    !Le(o) && !o.render && !o.template && (o.template = r.innerHTML), r.innerHTML = "";
    const l = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
};
function ES(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => $_(t) || P_(t),
    writable: !1
  });
}
function $S(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        ie("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, a = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return ie(a), n;
      },
      set() {
        ie(a);
      }
    });
  }
}
function PS(e) {
  if (ct(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && ie(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && ie('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function TS() {
  z1();
}
process.env.NODE_ENV !== "production" && TS();
const Sm = (e) => ["label", "value", "placeholder", "name", "type", "visible", "required", "disabled"].every((t) => t in e);
let Yl;
const NS = new Uint8Array(16);
function DS() {
  if (!Yl && (Yl = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Yl))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Yl(NS);
}
const Ut = [];
for (let e = 0; e < 256; ++e)
  Ut.push((e + 256).toString(16).slice(1));
function VS(e, t = 0) {
  return (Ut[e[t + 0]] + Ut[e[t + 1]] + Ut[e[t + 2]] + Ut[e[t + 3]] + "-" + Ut[e[t + 4]] + Ut[e[t + 5]] + "-" + Ut[e[t + 6]] + Ut[e[t + 7]] + "-" + Ut[e[t + 8]] + Ut[e[t + 9]] + "-" + Ut[e[t + 10]] + Ut[e[t + 11]] + Ut[e[t + 12]] + Ut[e[t + 13]] + Ut[e[t + 14]] + Ut[e[t + 15]]).toLowerCase();
}
const IS = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), km = {
  randomUUID: IS
};
function AS(e, t, n) {
  if (km.randomUUID && !t && !e)
    return km.randomUUID();
  e = e || {};
  const a = e.random || (e.rng || DS)();
  if (a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, t) {
    n = n || 0;
    for (let r = 0; r < 16; ++r)
      t[n + r] = a[r];
    return t;
  }
  return VS(a);
}
class On {
  constructor() {
    this.uuid = AS(), this.rules = [];
  }
  get valid() {
    return this.rules.every((t) => t(this));
  }
}
class po extends On {
  constructor(t) {
    super(), this.label = (t == null ? void 0 : t.label) || "", this.type = "string", this.name = (t == null ? void 0 : t.name) || "", this.placeholder = (t == null ? void 0 : t.placeholder) || "", this.value = (t == null ? void 0 : t.value) || "", this.visible = (t == null ? void 0 : t.visible) || !1, this.required = (t == null ? void 0 : t.required) || !1, this.disabled = (t == null ? void 0 : t.disabled) || !1, this.rules = (t == null ? void 0 : t.rules) || [];
  }
}
const MS = (e) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e) || "Email not valid", en = (e) => !!e || "Field required", RS = () => new po({
  label: "Applied position",
  placeholder: "Enter your applied position",
  name: "appliedPosition",
  visible: !0,
  required: !0,
  rules: [
    en
  ]
});
class gg extends On {
  constructor(t) {
    super(), this.label = (t == null ? void 0 : t.label) || "", this.type = "textarea", this.name = (t == null ? void 0 : t.name) || "", this.placeholder = (t == null ? void 0 : t.placeholder) || "", this.value = (t == null ? void 0 : t.value) || "", this.visible = (t == null ? void 0 : t.visible) || !1, this.required = (t == null ? void 0 : t.required) || !1, this.disabled = (t == null ? void 0 : t.disabled) || !1, this.rules = (t == null ? void 0 : t.rules) || [];
  }
}
const BS = () => new gg({
  label: "Cover letter",
  placeholder: "Enter your cover letter",
  name: "coverLetter",
  visible: !0,
  required: !0,
  rules: [
    en
  ]
});
class FS extends On {
  constructor(t) {
    super(), this.label = (t == null ? void 0 : t.label) || "", this.type = "file", this.name = (t == null ? void 0 : t.name) || "", this.placeholder = (t == null ? void 0 : t.placeholder) || "", this.value = (t == null ? void 0 : t.value) || "", this.visible = (t == null ? void 0 : t.visible) || !1, this.required = (t == null ? void 0 : t.required) || !1, this.disabled = (t == null ? void 0 : t.disabled) || !1, this.rules = (t == null ? void 0 : t.rules) || [];
  }
}
const LS = () => new FS({
  label: "CV",
  placeholder: "Attach your CV",
  name: "CV",
  visible: !0,
  required: !0,
  rules: [
    (e) => !!(e != null && e.length) || "Field required"
  ]
});
class go extends On {
  constructor(t) {
    super(), this.label = (t == null ? void 0 : t.label) || "", this.type = "date", this.name = (t == null ? void 0 : t.name) || "", this.placeholder = (t == null ? void 0 : t.placeholder) || "", this.value = (t == null ? void 0 : t.value) || "", this.visible = (t == null ? void 0 : t.visible) || !1, this.required = (t == null ? void 0 : t.required) || !1, this.disabled = (t == null ? void 0 : t.disabled) || !1, this.rules = (t == null ? void 0 : t.rules) || [];
  }
}
const jS = () => new go({
  label: "Early possible start date",
  placeholder: "Enter your early possible start date",
  name: "earlyDate",
  visible: !0,
  required: !0,
  rules: [
    en
  ]
});
class HS extends On {
  constructor(t) {
    super(), this.label = (t == null ? void 0 : t.label) || "", this.type = "email", this.name = (t == null ? void 0 : t.name) || "", this.placeholder = (t == null ? void 0 : t.placeholder) || "", this.value = (t == null ? void 0 : t.value) || "", this.visible = (t == null ? void 0 : t.visible) || !1, this.required = (t == null ? void 0 : t.required) || !1, this.disabled = (t == null ? void 0 : t.disabled) || !1, this.rules = (t == null ? void 0 : t.rules) || [];
  }
}
const US = () => new HS({
  label: "Email",
  placeholder: "Enter your email",
  name: "email",
  visible: !0,
  required: !0,
  rules: [
    en,
    MS
  ]
}), YS = () => new po({
  label: "Last name",
  placeholder: "Enter your last name",
  name: "lastName",
  visible: !0,
  required: !0,
  rules: [
    en
  ]
}), WS = () => new po({
  label: "Name",
  placeholder: "Enter your name",
  name: "name",
  visible: !0,
  required: !0,
  rules: [
    en
  ]
});
class zS extends On {
  constructor(t) {
    super(), this.label = (t == null ? void 0 : t.label) || "", this.type = "phone", this.name = (t == null ? void 0 : t.name) || "", this.placeholder = (t == null ? void 0 : t.placeholder) || "", this.value = (t == null ? void 0 : t.value) || "", this.visible = (t == null ? void 0 : t.visible) || !1, this.required = (t == null ? void 0 : t.required) || !1, this.disabled = (t == null ? void 0 : t.disabled) || !1, this.rules = (t == null ? void 0 : t.rules) || [];
  }
}
const qS = () => new zS({
  label: "Phone",
  placeholder: "Enter your phone",
  name: "phone",
  visible: !0,
  required: !0,
  rules: [
    en
  ]
}), GS = () => new go({
  label: "Preferred interview date",
  placeholder: "Enter your preferred interveiw date",
  name: "preferredInterviewDate",
  visible: !0,
  required: !0,
  rules: [
    en
  ]
});
class Tc extends On {
  constructor() {
    super(), this.label = "General info", this.name = WS(), this.lastName = YS(), this.email = US(), this.phone = qS(), this.appliedPosition = RS(), this.earlyPossibleDate = jS(), this.preferredInterViewDate = GS(), this.coverLetter = BS(), this.cv = LS(), this.rules = [], this.fields = [
      this.name,
      this.lastName,
      this.email,
      this.phone,
      this.appliedPosition,
      this.earlyPossibleDate,
      this.preferredInterViewDate,
      this.coverLetter,
      this.cv
    ];
  }
  get valid() {
    return this.rules.every((t) => t(this)) && this.fields.every((t) => t.valid);
  }
}
class bg extends On {
  constructor(t) {
    super(), this.label = (t == null ? void 0 : t.label) || "", this.type = "date", this.name = (t == null ? void 0 : t.name) || "", this.placeholder = (t == null ? void 0 : t.placeholder) || "", this.value = (t == null ? void 0 : t.value) || "", this.visible = (t == null ? void 0 : t.visible) || !1, this.required = (t == null ? void 0 : t.required) || !1, this.disabled = (t == null ? void 0 : t.disabled) || !1, this.rules = (t == null ? void 0 : t.rules) || [];
  }
}
const KS = () => new bg({
  label: "Has no education",
  placeholder: "",
  name: "hasNoEducation",
  visible: !0,
  required: !0,
  rules: []
});
class Nc extends On {
  constructor() {
    super(), this.educations = [], this.label = "Education info", this.hasNoEducation = KS(), this.rules = [
      (t) => t.hasNoEducation.value === !0 ? !0 : t.educations.length !== 0 || "You have to fill education info"
    ];
  }
  get fields() {
    return [
      this.hasNoEducation,
      ...this.educations
    ];
  }
  get valid() {
    return this.rules.every((t) => t(this)) && this.fields.every((t) => t.valid);
  }
}
const XS = () => new bg({
  label: "Has no work experience",
  placeholder: "",
  name: "hasNoWorkExperience",
  visible: !0,
  required: !0,
  rules: []
});
class Dc extends On {
  constructor() {
    super(), this.workExperiences = [], this.label = "Work experience info", this.hasNoWorkExperience = XS(), this.rules = [
      (t) => t.hasNoWorkExperience.value === !0 ? !0 : t.workExperiences.length !== 0 || "You have to fill work experience info"
    ];
  }
  get fields() {
    return [
      this.hasNoWorkExperience,
      ...this.workExperiences
    ];
  }
  get valid() {
    return this.rules.every((t) => t(this)) && this.fields.every((t) => t.valid);
  }
}
class QS extends On {
  constructor() {
    super(), this.label = "Apply form", this.generalInfo = new Tc(), this.educationInfo = new Nc(), this.workExperience = new Dc(), this.rules = [];
  }
  get fields() {
    return [
      this.generalInfo,
      this.educationInfo,
      this.workExperience
    ];
  }
  get valid() {
    return this.rules.every((t) => t(this)) && this.fields.every((t) => t.valid);
  }
}
const ZS = () => new po({
  label: "Degree",
  placeholder: "Enter your degree",
  name: "degree",
  visible: !0,
  required: !0,
  rules: [
    en
  ]
}), JS = () => new go({
  label: "End Date",
  placeholder: "Enter your end education date",
  name: "enddate",
  visible: !0,
  required: !0,
  rules: [
    en
  ]
}), ek = () => new po({
  label: "Name",
  placeholder: "Enter your name",
  name: "name",
  visible: !0,
  required: !0,
  rules: [
    en
  ]
}), tk = () => new go({
  label: "Start Date",
  placeholder: "Enter your start education date",
  name: "startdate",
  visible: !0,
  required: !0,
  rules: [
    en
  ]
});
class nk extends On {
  constructor() {
    super(), this.label = "Education", this.name = ek(), this.startDate = tk(), this.endDate = JS(), this.degree = ZS(), this.rules = [], this.fields = [
      this.name,
      this.startDate,
      this.endDate,
      this.degree
    ];
  }
  get valid() {
    return this.rules.every((t) => t(this)) && this.fields.every((t) => t.valid);
  }
}
const ak = () => new go({
  label: "End Date",
  placeholder: "Enter your end education date",
  name: "endDate",
  visible: !0,
  required: !0,
  rules: [
    en
  ]
}), rk = () => new po({
  label: "Name",
  placeholder: "Enter your name",
  name: "name",
  visible: !0,
  required: !0,
  rules: [
    en
  ]
}), ok = () => new gg({
  label: "Responsibilities",
  placeholder: "Enter your cover letter",
  name: "responsibilities",
  visible: !0,
  required: !0,
  rules: [
    en
  ]
}), lk = () => new go({
  label: "Start Date",
  placeholder: "Enter your start education date",
  name: "startDate",
  visible: !0,
  required: !0,
  rules: [
    en
  ]
});
class ik extends On {
  constructor() {
    super(), this.label = "Work experience", this.name = rk(), this.startDate = lk(), this.endDate = ak(), this.responsibilities = ok(), this.rules = [], this.fields = [
      this.name,
      this.startDate,
      this.endDate,
      this.responsibilities
    ];
  }
  get valid() {
    return this.rules.every((t) => t(this)) && this.fields.every((t) => t.valid);
  }
}
var _g = !1;
function Wl(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Wu(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function sk() {
  return wg().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function wg() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const uk = typeof Proxy == "function", ck = "devtools-plugin:setup", fk = "plugin:settings:set";
let Yr, Vc;
function dk() {
  var e;
  return Yr !== void 0 || (typeof window < "u" && window.performance ? (Yr = !0, Vc = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Yr = !0, Vc = global.perf_hooks.performance) : Yr = !1), Yr;
}
function vk() {
  return dk() ? Vc.now() : Date.now();
}
class mk {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const a = {};
    if (t.settings)
      for (const l in t.settings) {
        const i = t.settings[l];
        a[l] = i.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let o = Object.assign({}, a);
    try {
      const l = localStorage.getItem(r), i = JSON.parse(l);
      Object.assign(o, i);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return o;
      },
      setSettings(l) {
        try {
          localStorage.setItem(r, JSON.stringify(l));
        } catch {
        }
        o = l;
      },
      now() {
        return vk();
      }
    }, n && n.on(fk, (l, i) => {
      l === this.plugin.id && this.fallbacks.setSettings(i);
    }), this.proxiedOn = new Proxy({}, {
      get: (l, i) => this.target ? this.target.on[i] : (...s) => {
        this.onQueue.push({
          method: i,
          args: s
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (l, i) => this.target ? this.target[i] : i === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(i) ? (...s) => (this.targetQueue.push({
        method: i,
        args: s,
        resolve: () => {
        }
      }), this.fallbacks[i](...s)) : (...s) => new Promise((u) => {
        this.targetQueue.push({
          method: i,
          args: s,
          resolve: u
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Sg(e, t) {
  const n = e, a = wg(), r = sk(), o = uk && n.enableEarlyProxy;
  if (r && (a.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    r.emit(ck, e, t);
  else {
    const l = o ? new mk(n, r) : null;
    (a.__VUE_DEVTOOLS_PLUGINS__ = a.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: l
    }), l && t(l.proxiedTarget);
  }
}
/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let Wo;
const hl = (e) => Wo = e, kg = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Pr(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var sa;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(sa || (sa = {}));
const hu = typeof window < "u", Qo = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && hu, xm = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function hk(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
}
function Yd(e, t, n) {
  const a = new XMLHttpRequest();
  a.open("GET", e), a.responseType = "blob", a.onload = function() {
    Cg(a.response, t, n);
  }, a.onerror = function() {
    console.error("could not download file");
  }, a.send();
}
function xg(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function ai(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const ri = typeof navigator == "object" ? navigator : { userAgent: "" }, Og = /* @__PURE__ */ (() => /Macintosh/.test(ri.userAgent) && /AppleWebKit/.test(ri.userAgent) && !/Safari/.test(ri.userAgent))(), Cg = hu ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Og ? yk : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in ri ? pk : (
      // Fallback to using FileReader and a popup
      gk
    )
  )
) : () => {
};
function yk(e, t = "download", n) {
  const a = document.createElement("a");
  a.download = t, a.rel = "noopener", typeof e == "string" ? (a.href = e, a.origin !== location.origin ? xg(a.href) ? Yd(e, t, n) : (a.target = "_blank", ai(a)) : ai(a)) : (a.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(a.href);
  }, 4e4), setTimeout(function() {
    ai(a);
  }, 0));
}
function pk(e, t = "download", n) {
  if (typeof e == "string")
    if (xg(e))
      Yd(e, t, n);
    else {
      const a = document.createElement("a");
      a.href = e, a.target = "_blank", setTimeout(function() {
        ai(a);
      });
    }
  else
    navigator.msSaveOrOpenBlob(hk(e, n), t);
}
function gk(e, t, n, a) {
  if (a = a || open("", "_blank"), a && (a.document.title = a.document.body.innerText = "downloading..."), typeof e == "string")
    return Yd(e, t, n);
  const r = e.type === "application/octet-stream", o = /constructor/i.test(String(xm.HTMLElement)) || "safari" in xm, l = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((l || r && o || Og) && typeof FileReader < "u") {
    const i = new FileReader();
    i.onloadend = function() {
      let s = i.result;
      if (typeof s != "string")
        throw a = null, new Error("Wrong reader.result type");
      s = l ? s : s.replace(/^data:[^;]*;/, "data:attachment/file;"), a ? a.location.href = s : location.assign(s), a = null;
    }, i.readAsDataURL(e);
  } else {
    const i = URL.createObjectURL(e);
    a ? a.location.assign(i) : location.href = i, a = null, setTimeout(function() {
      URL.revokeObjectURL(i);
    }, 4e4);
  }
}
function Lt(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function Wd(e) {
  return "_a" in e && "install" in e;
}
function Eg() {
  if (!("clipboard" in navigator))
    return Lt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function $g(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (Lt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function bk(e) {
  if (!Eg())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), Lt("Global state copied to clipboard.");
    } catch (t) {
      if ($g(t))
        return;
      Lt("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function _k(e) {
  if (!Eg())
    try {
      e.state.value = JSON.parse(await navigator.clipboard.readText()), Lt("Global state pasted from clipboard.");
    } catch (t) {
      if ($g(t))
        return;
      Lt("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function wk(e) {
  try {
    Cg(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    Lt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let va;
function Sk() {
  va || (va = document.createElement("input"), va.type = "file", va.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      va.onchange = async () => {
        const a = va.files;
        if (!a)
          return t(null);
        const r = a.item(0);
        return t(r ? { text: await r.text(), file: r } : null);
      }, va.oncancel = () => t(null), va.onerror = n, va.click();
    });
  }
  return e;
}
async function kk(e) {
  try {
    const n = await (await Sk())();
    if (!n)
      return;
    const { text: a, file: r } = n;
    e.state.value = JSON.parse(a), Lt(`Global state imported from "${r.name}".`);
  } catch (t) {
    Lt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function Un(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const Pg = "🍍 Pinia (root)", Ic = "_root";
function xk(e) {
  return Wd(e) ? {
    id: Ic,
    label: Pg
  } : {
    id: e.$id,
    label: e.$id
  };
}
function Ok(e) {
  if (Wd(e)) {
    const n = Array.from(e._s.keys()), a = e._s;
    return {
      state: n.map((o) => ({
        editable: !0,
        key: o,
        value: e.state.value[o]
      })),
      getters: n.filter((o) => a.get(o)._getters).map((o) => {
        const l = a.get(o);
        return {
          editable: !1,
          key: o,
          value: l._getters.reduce((i, s) => (i[s] = l[s], i), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((n) => ({
      editable: !0,
      key: n,
      value: e.$state[n]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((n) => ({
    editable: !1,
    key: n,
    value: e[n]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: e[n]
  }))), t;
}
function Ck(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: Un(e.type),
    key: Un(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function Ek(e) {
  switch (e) {
    case sa.direct:
      return "mutation";
    case sa.patchFunction:
      return "$patch";
    case sa.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let no = !0;
const oi = [], ur = "pinia:mutations", Gt = "pinia", { assign: $k } = Object, ls = (e) => "🍍 " + e;
function Pk(e, t) {
  Sg({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: oi,
    app: e
  }, (n) => {
    typeof n.now != "function" && Lt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: ur,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: Gt,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            bk(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await _k(t), n.sendInspectorTree(Gt), n.sendInspectorState(Gt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            wk(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await kk(t), n.sendInspectorTree(Gt), n.sendInspectorState(Gt);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: "Reset the state (option store only)",
          action: (a) => {
            const r = t._s.get(a);
            r ? r._isOptionsAPI ? (r.$reset(), Lt(`Store "${a}" reset.`)) : Lt(`Cannot reset "${a}" store because it's a setup store.`, "warn") : Lt(`Cannot reset "${a}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((a, r) => {
      const o = a.componentInstance && a.componentInstance.proxy;
      if (o && o._pStores) {
        const l = a.componentInstance.proxy._pStores;
        Object.values(l).forEach((i) => {
          a.instanceData.state.push({
            type: ls(i.$id),
            key: "state",
            editable: !0,
            value: i._isOptionsAPI ? {
              _custom: {
                value: Te(i.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => i.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(i.$state).reduce((s, u) => (s[u] = i.$state[u], s), {})
            )
          }), i._getters && i._getters.length && a.instanceData.state.push({
            type: ls(i.$id),
            key: "getters",
            editable: !1,
            value: i._getters.reduce((s, u) => {
              try {
                s[u] = i[u];
              } catch (d) {
                s[u] = d;
              }
              return s;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((a) => {
      if (a.app === e && a.inspectorId === Gt) {
        let r = [t];
        r = r.concat(Array.from(t._s.values())), a.rootNodes = (a.filter ? r.filter((o) => "$id" in o ? o.$id.toLowerCase().includes(a.filter.toLowerCase()) : Pg.toLowerCase().includes(a.filter.toLowerCase())) : r).map(xk);
      }
    }), n.on.getInspectorState((a) => {
      if (a.app === e && a.inspectorId === Gt) {
        const r = a.nodeId === Ic ? t : t._s.get(a.nodeId);
        if (!r)
          return;
        r && (a.state = Ok(r));
      }
    }), n.on.editInspectorState((a, r) => {
      if (a.app === e && a.inspectorId === Gt) {
        const o = a.nodeId === Ic ? t : t._s.get(a.nodeId);
        if (!o)
          return Lt(`store "${a.nodeId}" not found`, "error");
        const { path: l } = a;
        Wd(o) ? l.unshift("state") : (l.length !== 1 || !o._customProperties.has(l[0]) || l[0] in o.$state) && l.unshift("$state"), no = !1, a.set(o, l, a.state.value), no = !0;
      }
    }), n.on.editComponentState((a) => {
      if (a.type.startsWith("🍍")) {
        const r = a.type.replace(/^🍍\s*/, ""), o = t._s.get(r);
        if (!o)
          return Lt(`store "${r}" not found`, "error");
        const { path: l } = a;
        if (l[0] !== "state")
          return Lt(`Invalid path for store "${r}":
${l}
Only state can be modified.`);
        l[0] = "$state", no = !1, a.set(o, l, a.state.value), no = !0;
      }
    });
  });
}
function Tk(e, t) {
  oi.includes(ls(t.$id)) || oi.push(ls(t.$id)), Sg({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: oi,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (n) => {
    const a = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    t.$onAction(({ after: l, onError: i, name: s, args: u }) => {
      const d = Tg++;
      n.addTimelineEvent({
        layerId: ur,
        event: {
          time: a(),
          title: "🛫 " + s,
          subtitle: "start",
          data: {
            store: Un(t.$id),
            action: Un(s),
            args: u
          },
          groupId: d
        }
      }), l((c) => {
        vr = void 0, n.addTimelineEvent({
          layerId: ur,
          event: {
            time: a(),
            title: "🛬 " + s,
            subtitle: "end",
            data: {
              store: Un(t.$id),
              action: Un(s),
              args: u,
              result: c
            },
            groupId: d
          }
        });
      }), i((c) => {
        vr = void 0, n.addTimelineEvent({
          layerId: ur,
          event: {
            time: a(),
            logType: "error",
            title: "💥 " + s,
            subtitle: "end",
            data: {
              store: Un(t.$id),
              action: Un(s),
              args: u,
              error: c
            },
            groupId: d
          }
        });
      });
    }, !0), t._customProperties.forEach((l) => {
      pe(() => M(t[l]), (i, s) => {
        n.notifyComponentUpdate(), n.sendInspectorState(Gt), no && n.addTimelineEvent({
          layerId: ur,
          event: {
            time: a(),
            title: "Change",
            subtitle: l,
            data: {
              newValue: i,
              oldValue: s
            },
            groupId: vr
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: l, type: i }, s) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(Gt), !no)
        return;
      const u = {
        time: a(),
        title: Ek(i),
        data: $k({ store: Un(t.$id) }, Ck(l)),
        groupId: vr
      };
      vr = void 0, i === sa.patchFunction ? u.subtitle = "⤵️" : i === sa.patchObject ? u.subtitle = "🧩" : l && !Array.isArray(l) && (u.subtitle = l.type), l && (u.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: l
        }
      }), n.addTimelineEvent({
        layerId: ur,
        event: u
      });
    }, { detached: !0, flush: "sync" });
    const r = t._hotUpdate;
    t._hotUpdate = Yn((l) => {
      r(l), n.addTimelineEvent({
        layerId: ur,
        event: {
          time: a(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: Un(t.$id),
            info: Un("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(Gt), n.sendInspectorState(Gt);
    });
    const { $dispose: o } = t;
    t.$dispose = () => {
      o(), n.notifyComponentUpdate(), n.sendInspectorTree(Gt), n.sendInspectorState(Gt), n.getSettings().logStoreChanges && Lt(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(Gt), n.sendInspectorState(Gt), n.getSettings().logStoreChanges && Lt(`"${t.$id}" store installed 🆕`);
  });
}
let Tg = 0, vr;
function Om(e, t) {
  const n = t.reduce((a, r) => (a[r] = Te(e)[r], a), {});
  for (const a in n)
    e[a] = function() {
      const r = Tg, o = new Proxy(e, {
        get(...l) {
          return vr = r, Reflect.get(...l);
        },
        set(...l) {
          return vr = r, Reflect.set(...l);
        }
      });
      return n[a].apply(o, arguments);
    };
}
function Nk({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (n.state && (t._isOptionsAPI = !0), typeof n.state == "function") {
      Om(
        // @ts-expect-error: can cast the store...
        t,
        Object.keys(n.actions)
      );
      const a = t._hotUpdate;
      Te(t)._hotUpdate = function(r) {
        a.apply(this, arguments), Om(t, Object.keys(r._hmrPayload.actions));
      };
    }
    Tk(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function Dk() {
  const e = xl(!0), t = e.run(() => R({}));
  let n = [], a = [];
  const r = Yn({
    install(o) {
      hl(r), r._a = o, o.provide(kg, r), o.config.globalProperties.$pinia = r, Qo && Pk(o, r), a.forEach((l) => n.push(l)), a = [];
    },
    use(o) {
      return !this._a && !_g ? a.push(o) : n.push(o), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return Qo && typeof Proxy < "u" && r.use(Nk), r;
}
function Ng(e, t) {
  for (const n in t) {
    const a = t[n];
    if (!(n in e))
      continue;
    const r = e[n];
    Pr(r) && Pr(a) && !Ye(a) && !ia(a) ? e[n] = Ng(r, a) : e[n] = a;
  }
  return e;
}
const Dg = () => {
};
function Cm(e, t, n, a = Dg) {
  e.push(t);
  const r = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), a());
  };
  return !n && Od() && fn(r), r;
}
function Wr(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
function Ac(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, a) => e.set(a, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const a = t[n], r = e[n];
    Pr(r) && Pr(a) && e.hasOwnProperty(n) && !Ye(a) && !ia(a) ? e[n] = Ac(r, a) : e[n] = a;
  }
  return e;
}
const Vk = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function Ik(e) {
  return !Pr(e) || !e.hasOwnProperty(Vk);
}
const { assign: Dn } = Object;
function Em(e) {
  return !!(Ye(e) && e.effect);
}
function $m(e, t, n, a) {
  const { state: r, actions: o, getters: l } = t, i = n.state.value[e];
  let s;
  function u() {
    !i && (process.env.NODE_ENV === "production" || !a) && (n.state.value[e] = r ? r() : {});
    const d = process.env.NODE_ENV !== "production" && a ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      sl(R(r ? r() : {}).value)
    ) : sl(n.state.value[e]);
    return Dn(d, o, Object.keys(l || {}).reduce((c, f) => (process.env.NODE_ENV !== "production" && f in d && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${f}" in store "${e}".`), c[f] = Yn(_(() => {
      hl(n);
      const v = n._s.get(e);
      return l[f].call(v, v);
    })), c), {}));
  }
  return s = Mc(e, u, t, n, a, !0), s;
}
function Mc(e, t, n = {}, a, r, o) {
  let l;
  const i = Dn({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !a._e.active)
    throw new Error("Pinia destroyed");
  const s = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !_g && (s.onTrigger = (b) => {
    u ? v = b : u == !1 && !k._hotUpdating && (Array.isArray(v) ? v.push(b) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let u, d, c = Yn([]), f = Yn([]), v;
  const y = a.state.value[e];
  !o && !y && (process.env.NODE_ENV === "production" || !r) && (a.state.value[e] = {});
  const p = R({});
  let x;
  function O(b) {
    let w;
    u = d = !1, process.env.NODE_ENV !== "production" && (v = []), typeof b == "function" ? (b(a.state.value[e]), w = {
      type: sa.patchFunction,
      storeId: e,
      events: v
    }) : (Ac(a.state.value[e], b), w = {
      type: sa.patchObject,
      payload: b,
      storeId: e,
      events: v
    });
    const C = x = Symbol();
    Je().then(() => {
      x === C && (u = !0);
    }), d = !0, Wr(c, w, a.state.value[e]);
  }
  const E = o ? function() {
    const { state: w } = n, C = w ? w() : {};
    this.$patch((T) => {
      Dn(T, C);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : Dg
  );
  function S() {
    l.stop(), c = [], f = [], a._s.delete(e);
  }
  function N(b, w) {
    return function() {
      hl(a);
      const C = Array.from(arguments), T = [], A = [];
      function z(h) {
        T.push(h);
      }
      function U(h) {
        A.push(h);
      }
      Wr(f, {
        args: C,
        name: b,
        store: k,
        after: z,
        onError: U
      });
      let B;
      try {
        B = w.apply(this && this.$id === e ? this : k, C);
      } catch (h) {
        throw Wr(A, h), h;
      }
      return B instanceof Promise ? B.then((h) => (Wr(T, h), h)).catch((h) => (Wr(A, h), Promise.reject(h))) : (Wr(T, B), B);
    };
  }
  const V = /* @__PURE__ */ Yn({
    actions: {},
    getters: {},
    state: [],
    hotState: p
  }), $ = {
    _p: a,
    // _s: scope,
    $id: e,
    $onAction: Cm.bind(null, f),
    $patch: O,
    $reset: E,
    $subscribe(b, w = {}) {
      const C = Cm(c, b, w.detached, () => T()), T = l.run(() => pe(() => a.state.value[e], (A) => {
        (w.flush === "sync" ? d : u) && b({
          storeId: e,
          type: sa.direct,
          events: v
        }, A);
      }, Dn({}, s, w)));
      return C;
    },
    $dispose: S
  }, k = Ct(process.env.NODE_ENV !== "production" || Qo ? Dn(
    {
      _hmrPayload: V,
      _customProperties: Yn(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    $
    // must be added later
    // setupStore
  ) : $);
  a._s.set(e, k);
  const g = a._e.run(() => (l = xl(), l.run(() => t())));
  for (const b in g) {
    const w = g[b];
    if (Ye(w) && !Em(w) || ia(w))
      process.env.NODE_ENV !== "production" && r ? Wl(p.value, b, ne(g, b)) : o || (y && Ik(w) && (Ye(w) ? w.value = y[b] : Ac(w, y[b])), a.state.value[e][b] = w), process.env.NODE_ENV !== "production" && V.state.push(b);
    else if (typeof w == "function") {
      const C = process.env.NODE_ENV !== "production" && r ? w : N(b, w);
      g[b] = C, process.env.NODE_ENV !== "production" && (V.actions[b] = w), i.actions[b] = w;
    } else
      process.env.NODE_ENV !== "production" && Em(w) && (V.getters[b] = o ? (
        // @ts-expect-error
        n.getters[b]
      ) : w, hu && (g._getters || // @ts-expect-error: same
      (g._getters = Yn([]))).push(b));
  }
  if (Dn(k, g), Dn(Te(k), g), Object.defineProperty(k, "$state", {
    get: () => process.env.NODE_ENV !== "production" && r ? p.value : a.state.value[e],
    set: (b) => {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      O((w) => {
        Dn(w, b);
      });
    }
  }), process.env.NODE_ENV !== "production" && (k._hotUpdate = Yn((b) => {
    k._hotUpdating = !0, b._hmrPayload.state.forEach((w) => {
      if (w in k.$state) {
        const C = b.$state[w], T = k.$state[w];
        typeof C == "object" && Pr(C) && Pr(T) ? Ng(C, T) : b.$state[w] = T;
      }
      Wl(k, w, ne(b.$state, w));
    }), Object.keys(k.$state).forEach((w) => {
      w in b.$state || Wu(k, w);
    }), u = !1, d = !1, a.state.value[e] = ne(b._hmrPayload, "hotState"), d = !0, Je().then(() => {
      u = !0;
    });
    for (const w in b._hmrPayload.actions) {
      const C = b[w];
      Wl(k, w, N(w, C));
    }
    for (const w in b._hmrPayload.getters) {
      const C = b._hmrPayload.getters[w], T = o ? (
        // special handling of options api
        _(() => (hl(a), C.call(k, k)))
      ) : C;
      Wl(k, w, T);
    }
    Object.keys(k._hmrPayload.getters).forEach((w) => {
      w in b._hmrPayload.getters || Wu(k, w);
    }), Object.keys(k._hmrPayload.actions).forEach((w) => {
      w in b._hmrPayload.actions || Wu(k, w);
    }), k._hmrPayload = b._hmrPayload, k._getters = b._getters, k._hotUpdating = !1;
  })), Qo) {
    const b = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((w) => {
      Object.defineProperty(k, w, Dn({ value: k[w] }, b));
    });
  }
  return a._p.forEach((b) => {
    if (Qo) {
      const w = l.run(() => b({
        store: k,
        app: a._a,
        pinia: a,
        options: i
      }));
      Object.keys(w || {}).forEach((C) => k._customProperties.add(C)), Dn(k, w);
    } else
      Dn(k, l.run(() => b({
        store: k,
        app: a._a,
        pinia: a,
        options: i
      })));
  }), process.env.NODE_ENV !== "production" && k.$state && typeof k.$state == "object" && typeof k.$state.constructor == "function" && !k.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${k.$id}".`), y && o && n.hydrate && n.hydrate(k.$state, y), u = !0, d = !0, k;
}
function Ak(e, t, n) {
  let a, r;
  const o = typeof t == "function";
  typeof e == "string" ? (a = e, r = o ? n : t) : (r = e, a = e.id);
  function l(i, s) {
    const u = yo();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && Wo && Wo._testing ? null : i) || u && nt(kg, null), i && hl(i), process.env.NODE_ENV !== "production" && !Wo)
      throw new Error(`[🍍]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    i = Wo, i._s.has(a) || (o ? Mc(a, t, r, i) : $m(a, r, i), process.env.NODE_ENV !== "production" && (l._pinia = i));
    const d = i._s.get(a);
    if (process.env.NODE_ENV !== "production" && s) {
      const c = "__hot:" + a, f = o ? Mc(c, t, r, i, !0) : $m(c, Dn({}, r), i, !0);
      s._hotUpdate(f), delete i.state.value[c], i._s.delete(c);
    }
    if (process.env.NODE_ENV !== "production" && hu && u && u.proxy && // avoid adding stores that are just built for hot module replacement
    !s) {
      const c = u.proxy, f = "_pStores" in c ? c._pStores : c._pStores = {};
      f[a] = d;
    }
    return d;
  }
  return l.$id = a, l;
}
const yu = Ak("applyForm", {
  state: () => ({
    applyForm: new QS()
  }),
  getters: {},
  actions: {
    clearApplyForm() {
      this.applyForm.educationInfo.educations = [], this.applyForm.educationInfo.hasNoEducation.value = null, this.applyForm.workExperience.workExperiences = [], this.applyForm.workExperience.hasNoWorkExperience.value = null, this.applyForm.generalInfo.fields.forEach((e) => {
        e.value = "";
      });
    },
    addNewEducation() {
      this.applyForm.educationInfo.educations.push(new nk());
    },
    addNewWorkExperience() {
      this.applyForm.workExperience.workExperiences.push(new ik());
    },
    removeEducation(e) {
      this.applyForm.educationInfo.educations = this.applyForm.educationInfo.educations.filter(({ uuid: t }) => t !== e);
    },
    removeWorkExperience(e) {
      this.applyForm.workExperience.workExperiences = this.applyForm.workExperience.workExperiences.filter(({ uuid: t }) => t !== e);
    },
    setHasNoEducation(e) {
      this.applyForm.educationInfo.hasNoEducation.value = e, e && (this.applyForm.educationInfo.educations = []);
    },
    setHasNoWorkExperience(e) {
      this.applyForm.workExperience.hasNoWorkExperience.value = e, e && (this.applyForm.workExperience.workExperiences = []);
    },
    updateGeneralInfoField(e, t) {
      const n = this.applyForm.generalInfo.fields.find((a) => a.uuid === e);
      n.value = t;
    },
    updateEdiucationInfoField(e, t, n) {
      const r = this.applyForm.educationInfo.educations.find((o) => o.uuid === e).fields.find((o) => o.uuid === t);
      Sm(r) && (r.value = n);
    },
    updateWorkExperienceInfoField(e, t, n) {
      const r = this.applyForm.workExperience.workExperiences.find((o) => o.uuid === e).fields.find((o) => o.uuid === t);
      Sm(r) && (r.value = n);
    }
  }
});
function Pm(e, t, n) {
  Mk(e, t), t.set(e, n);
}
function Mk(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Rk(e, t, n) {
  var a = Vg(e, t, "set");
  return Bk(e, a, n), n;
}
function Bk(e, t, n) {
  if (t.set)
    t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function or(e, t) {
  var n = Vg(e, t, "get");
  return Fk(e, n);
}
function Vg(e, t, n) {
  if (!t.has(e))
    throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function Fk(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Ig(e, t, n) {
  const a = t.length - 1;
  if (a < 0)
    return e === void 0 ? n : e;
  for (let r = 0; r < a; r++) {
    if (e == null)
      return n;
    e = e[t[r]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function bo(e, t) {
  if (e === t)
    return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length !== Object.keys(t).length ? !1 : n.every((a) => bo(e[a], t[a]));
}
function Rc(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Ig(e, t.split("."), n));
}
function na(e, t, n) {
  if (t == null)
    return e === void 0 ? n : e;
  if (e !== Object(e)) {
    if (typeof t != "function")
      return n;
    const r = t(e, n);
    return typeof r > "u" ? n : r;
  }
  if (typeof t == "string")
    return Rc(e, t, n);
  if (Array.isArray(t))
    return Ig(e, t, n);
  if (typeof t != "function")
    return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function hr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (n, a) => t + a);
}
function ge(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function Bc(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Lk(e) {
  return e == null ? void 0 : e.$el;
}
const Tm = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
}), Fc = Object.freeze({
  enter: "Enter",
  tab: "Tab",
  delete: "Delete",
  esc: "Escape",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
  end: "End",
  home: "Home",
  del: "Delete",
  backspace: "Backspace",
  insert: "Insert",
  pageup: "PageUp",
  pagedown: "PageDown",
  shift: "Shift"
});
function Ag(e) {
  return Object.keys(e);
}
function wn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  for (const r in e)
    t.some((o) => o instanceof RegExp ? o.test(r) : o === r) ? n[r] = e[r] : a[r] = e[r];
  return [n, a];
}
function Ar(e, t) {
  const n = {
    ...e
  };
  return t.forEach((a) => delete n[a]), n;
}
function Mr(e) {
  return wn(e, ["class", "style", "id", /^data-/]);
}
function Rn(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function xn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function Nm(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function jk(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; )
    n.push(e.substr(a, t)), a += t;
  return n;
}
function Dm(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (e < t)
    return `${e} B`;
  const n = t === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let a = -1;
  for (; Math.abs(e) >= t && a < n.length - 1; )
    e /= t, ++a;
  return `${e.toFixed(1)} ${n[a]}B`;
}
function xa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const r in e)
    a[r] = e[r];
  for (const r in t) {
    const o = e[r], l = t[r];
    if (Bc(o) && Bc(l)) {
      a[r] = xa(o, l, n);
      continue;
    }
    if (Array.isArray(o) && Array.isArray(l) && n) {
      a[r] = n(o, l);
      continue;
    }
    a[r] = l;
  }
  return a;
}
function Ua() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Ua.cache.has(e))
    return Ua.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Ua.cache.set(e, t), t;
}
Ua.cache = /* @__PURE__ */ new Map();
function Zo(e, t) {
  if (!t || typeof t != "object")
    return [];
  if (Array.isArray(t))
    return t.map((n) => Zo(e, n)).flat(1);
  if (Array.isArray(t.children))
    return t.children.map((n) => Zo(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return Zo(e, t.component.subTree).flat(1);
  }
  return [];
}
var zl = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap();
class Hk {
  constructor(t) {
    Pm(this, zl, {
      writable: !0,
      value: []
    }), Pm(this, zr, {
      writable: !0,
      value: 0
    }), this.size = t;
  }
  push(t) {
    or(this, zl)[or(this, zr)] = t, Rk(this, zr, (or(this, zr) + 1) % this.size);
  }
  values() {
    return or(this, zl).slice(or(this, zr)).concat(or(this, zl).slice(0, or(this, zr)));
  }
}
function Uk(e) {
  return "touches" in e ? {
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY
  } : {
    clientX: e.clientX,
    clientY: e.clientY
  };
}
function zd(e) {
  const t = Ct({}), n = _(e);
  return ca(() => {
    for (const a in n.value)
      t[a] = n.value[a];
  }, {
    flush: "sync"
  }), sl(t);
}
function is(e, t) {
  return e.includes(t);
}
const Yk = /^on[^a-z]/, Mg = (e) => Yk.test(e), wa = [Function, Array];
function Vm(e, t) {
  return t = "on" + Fn(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function ss(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const r of e)
      r(...n);
  else
    typeof e == "function" && e(...n);
}
const Rg = ["top", "bottom"], Wk = ["start", "end", "left", "right"];
function Lc(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = is(Rg, n) ? "start" : is(Wk, n) ? "top" : "center"), {
    side: jc(n, t),
    align: jc(a, t)
  };
}
function jc(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function zu(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function qu(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function Im(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function Am(e) {
  return is(Rg, e.side) ? "y" : "x";
}
class io {
  constructor(t) {
    let {
      x: n,
      y: a,
      width: r,
      height: o
    } = t;
    this.x = n, this.y = a, this.width = r, this.height = o;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function Mm(e, t) {
  return {
    x: {
      before: Math.max(0, t.left - e.left),
      after: Math.max(0, e.right - t.right)
    },
    y: {
      before: Math.max(0, t.top - e.top),
      after: Math.max(0, e.bottom - t.bottom)
    }
  };
}
function qd(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), a = n.transform;
  if (a) {
    let r, o, l, i, s;
    if (a.startsWith("matrix3d("))
      r = a.slice(9, -1).split(/, /), o = +r[0], l = +r[5], i = +r[12], s = +r[13];
    else if (a.startsWith("matrix("))
      r = a.slice(7, -1).split(/, /), o = +r[0], l = +r[3], i = +r[4], s = +r[5];
    else
      return new io(t);
    const u = n.transformOrigin, d = t.x - i - (1 - o) * parseFloat(u), c = t.y - s - (1 - l) * parseFloat(u.slice(u.indexOf(" ") + 1)), f = o ? t.width / o : e.offsetWidth + 1, v = l ? t.height / l : e.offsetHeight + 1;
    return new io({
      x: d,
      y: c,
      width: f,
      height: v
    });
  } else
    return new io(t);
}
function yr(e, t, n) {
  if (typeof e.animate > "u")
    return {
      finished: Promise.resolve()
    };
  const a = e.animate(t, n);
  return typeof a.finished > "u" && (a.finished = new Promise((r) => {
    a.onfinish = () => {
      r(a);
    };
  })), a;
}
function Bg(e, t, n) {
  if (n && (t = {
    __isVue: !0,
    $parent: n,
    $options: t
  }), t) {
    if (t.$_alreadyWarned = t.$_alreadyWarned || [], t.$_alreadyWarned.includes(e))
      return;
    t.$_alreadyWarned.push(e);
  }
  return `[Vuetify] ${e}` + (t ? Gk(t) : "");
}
function Cr(e, t, n) {
  const a = Bg(e, t, n);
  a != null && console.warn(a);
}
function Hc(e, t, n) {
  const a = Bg(e, t, n);
  a != null && console.error(a);
}
const zk = /(?:^|[-_])(\w)/g, qk = (e) => e.replace(zk, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Gu(e, t) {
  if (e.$root === e)
    return "<Root>";
  const n = typeof e == "function" && e.cid != null ? e.options : e.__isVue ? e.$options || e.constructor.options : e || {};
  let a = n.name || n._componentTag;
  const r = n.__file;
  if (!a && r) {
    const o = r.match(/([^/\\]+)\.vue$/);
    a = o == null ? void 0 : o[1];
  }
  return (a ? `<${qk(a)}>` : "<Anonymous>") + (r && t !== !1 ? ` at ${r}` : "");
}
function Gk(e) {
  if (e.__isVue && e.$parent) {
    const t = [];
    let n = 0;
    for (; e; ) {
      if (t.length > 0) {
        const a = t[t.length - 1];
        if (a.constructor === e.constructor) {
          n++, e = e.$parent;
          continue;
        } else
          n > 0 && (t[t.length - 1] = [a, n], n = 0);
      }
      t.push(e), e = e.$parent;
    }
    return `

found in

` + t.map((a, r) => `${r === 0 ? "---> " : " ".repeat(5 + r * 2)}${Array.isArray(a) ? `${Gu(a[0])}... (${a[1]} recursive calls)` : Gu(a)}`).join(`
`);
  } else
    return `

(found in ${Gu(e)})`;
}
const Kk = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], Xk = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, Qk = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Zk = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Fg(e) {
  const t = Array(3), n = Xk, a = Kk;
  for (let r = 0; r < 3; ++r)
    t[r] = Math.round(xn(n(a[r][0] * e[0] + a[r][1] * e[1] + a[r][2] * e[2])) * 255);
  return {
    r: t[0],
    g: t[1],
    b: t[2]
  };
}
function Gd(e) {
  let {
    r: t,
    g: n,
    b: a
  } = e;
  const r = [0, 0, 0], o = Zk, l = Qk;
  t = o(t / 255), n = o(n / 255), a = o(a / 255);
  for (let i = 0; i < 3; ++i)
    r[i] = l[i][0] * t + l[i][1] * n + l[i][2] * a;
  return r;
}
const us = 0.20689655172413793, Jk = (e) => e > us ** 3 ? Math.cbrt(e) : e / (3 * us ** 2) + 4 / 29, ex = (e) => e > us ? e ** 3 : 3 * us ** 2 * (e - 4 / 29);
function Lg(e) {
  const t = Jk, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function jg(e) {
  const t = ex, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
function Rm(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function pr(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Cr(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((a) => a + a).join("") : [6, 8].includes(t.length) || Cr(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && Cr(`'${e}' is not a valid hex(a) color`), zg(t);
  } else
    throw new TypeError(`Colors can only be numbers or strings, recieved ${e == null ? e : e.constructor.name} instead`);
}
function pu(e) {
  const {
    h: t,
    s: n,
    v: a,
    a: r
  } = e, o = (i) => {
    const s = (i + t / 60) % 6;
    return a - a * n * Math.max(Math.min(s, 4 - s, 1), 0);
  }, l = [o(5), o(3), o(1)].map((i) => Math.round(i * 255));
  return {
    r: l[0],
    g: l[1],
    b: l[2],
    a: r
  };
}
function Kd(e) {
  if (!e)
    return {
      h: 0,
      s: 1,
      v: 1,
      a: 1
    };
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, r = Math.max(t, n, a), o = Math.min(t, n, a);
  let l = 0;
  r !== o && (r === t ? l = 60 * (0 + (n - a) / (r - o)) : r === n ? l = 60 * (2 + (a - t) / (r - o)) : r === a && (l = 60 * (4 + (t - n) / (r - o)))), l < 0 && (l = l + 360);
  const i = r === 0 ? 0 : (r - o) / r, s = [l, i, r];
  return {
    h: s[0],
    s: s[1],
    v: s[2],
    a: e.a
  };
}
function Hg(e) {
  const {
    h: t,
    s: n,
    v: a,
    a: r
  } = e, o = a - a * n / 2, l = o === 1 || o === 0 ? 0 : (a - o) / Math.min(o, 1 - o);
  return {
    h: t,
    s: l,
    l: o,
    a: r
  };
}
function Ug(e) {
  const {
    h: t,
    s: n,
    l: a,
    a: r
  } = e, o = a + n * Math.min(a, 1 - a), l = o === 0 ? 0 : 2 - 2 * a / o;
  return {
    h: t,
    s: l,
    v: o,
    a: r
  };
}
function tx(e) {
  let {
    r: t,
    g: n,
    b: a,
    a: r
  } = e;
  return r === void 0 ? `rgb(${t}, ${n}, ${a})` : `rgba(${t}, ${n}, ${a}, ${r})`;
}
function Yg(e) {
  return tx(pu(e));
}
function ql(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function Wg(e) {
  let {
    r: t,
    g: n,
    b: a,
    a: r
  } = e;
  return `#${[ql(t), ql(n), ql(a), r !== void 0 ? ql(Math.round(r * 255)) : ""].join("")}`;
}
function zg(e) {
  e = Kg(e);
  let [t, n, a, r] = jk(e, 2).map((o) => parseInt(o, 16));
  return r = r === void 0 ? r : r / 255, {
    r: t,
    g: n,
    b: a,
    a: r
  };
}
function qg(e) {
  const t = zg(e);
  return Kd(t);
}
function Gg(e) {
  return Wg(pu(e));
}
function Kg(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = Nm(Nm(e, 6), 8, "F")), e;
}
function nx(e, t) {
  const n = Lg(Gd(e));
  return n[0] = n[0] + t * 10, Fg(jg(n));
}
function ax(e, t) {
  const n = Lg(Gd(e));
  return n[0] = n[0] - t * 10, Fg(jg(n));
}
function Uc(e) {
  const t = pr(e);
  return Gd(t)[1];
}
function rx(e, t) {
  const n = Uc(e), a = Uc(t), r = Math.max(n, a), o = Math.min(n, a);
  return (r + 0.05) / (o + 0.05);
}
function tn(e, t) {
  const n = yo();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return n;
}
function Ea() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = tn(e).type;
  return Ua((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
let Xg = 0, li = /* @__PURE__ */ new WeakMap();
function nn() {
  const e = tn("getUid");
  if (li.has(e))
    return li.get(e);
  {
    const t = Xg++;
    return li.set(e, t), t;
  }
}
nn.reset = () => {
  Xg = 0, li = /* @__PURE__ */ new WeakMap();
};
function ox(e) {
  const {
    provides: t
  } = tn("injectSelf");
  if (t && e in t)
    return t[e];
}
function Fe(e, t) {
  return (n) => Object.keys(e).reduce((a, r) => {
    const l = typeof e[r] == "object" && e[r] != null && !Array.isArray(e[r]) ? e[r] : {
      type: e[r]
    };
    return n && r in n ? a[r] = {
      ...l,
      default: n[r]
    } : a[r] = l, t && !a[r].source && (a[r].source = t), a;
  }, {});
}
function Tr(e, t) {
  let n;
  function a() {
    n = xl(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), a();
    }) : t());
  }
  pe(e, (r) => {
    r && !n ? a() : r || (n == null || n.stop(), n = void 0);
  }, {
    immediate: !0
  }), fn(() => {
    n == null || n.stop();
  });
}
function lx(e, t) {
  var n, a;
  return typeof ((n = e.props) == null ? void 0 : n[t]) < "u" || typeof ((a = e.props) == null ? void 0 : a[Ua(t)]) < "u";
}
const Cn = function(t) {
  return t._setup = t._setup ?? t.setup, t.name ? (t._setup && (t.props = t.props ?? {}, t.props = Fe(t.props, Ua(t.name))(), t.props._as = String, t.setup = function(a, r) {
    const o = Jg();
    if (!o.value)
      return t._setup(a, r);
    const l = yo(), i = _(() => o.value[a._as ?? t.name]), s = new Proxy(a, {
      get(c, f) {
        var y, p;
        const v = Reflect.get(c, f);
        return typeof f == "string" && !lx(l.vnode, f) ? ((y = i.value) == null ? void 0 : y[f]) ?? ((p = o.value.global) == null ? void 0 : p[f]) ?? v : v;
      }
    }), u = gp();
    ca(() => {
      if (i.value) {
        const c = Object.entries(i.value).filter((f) => {
          let [v] = f;
          return v.startsWith(v[0].toUpperCase());
        });
        c.length && (u.value = Object.fromEntries(c));
      }
    });
    const d = t._setup(s, r);
    return Tr(u, () => {
      var c;
      Vt(xa(((c = ox(pl)) == null ? void 0 : c.value) ?? {}, u.value));
    }), d;
  }), t) : (Cr("The component is missing an explicit name, unable to generate default prop value"), t);
};
function oe() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? Cn : Wt)(t);
}
function Gn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return oe()({
    name: n ?? Fn(Bn(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: t
      }
    },
    setup(a, r) {
      let {
        slots: o
      } = r;
      return () => {
        var l;
        return Xa(a.tag, {
          class: e
        }, (l = o.default) == null ? void 0 : l.call(o));
      };
    }
  });
}
function Qg(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
const yl = "cubic-bezier(0.4, 0, 0.2, 1)", ix = "cubic-bezier(0.0, 0, 0.2, 1)", sx = "cubic-bezier(0.4, 0, 1, 1)";
function Zg(e) {
  for (; e; ) {
    if (Xd(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function cs(e, t) {
  const n = [];
  if (t && e && !t.contains(e))
    return n;
  for (; e && (Xd(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function Xd(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
const Tt = typeof window < "u", Qd = Tt && "IntersectionObserver" in window, ux = Tt && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), Yc = Tt && typeof CSS < "u" && CSS.supports("selector(:focus-visible)");
function cx(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function fe(e) {
  const t = tn("useRender");
  t.render = e;
}
const pl = Symbol.for("vuetify:defaults");
function fx(e) {
  return R(e);
}
function Jg() {
  const e = nt(pl);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Vt(e, t) {
  const n = Jg(), a = R(e), r = _(() => {
    if (M(t == null ? void 0 : t.disabled))
      return n.value;
    const l = M(t == null ? void 0 : t.scoped), i = M(t == null ? void 0 : t.reset), s = M(t == null ? void 0 : t.root);
    let u = xa(a.value, {
      prev: n.value
    });
    if (l)
      return u;
    if (i || s) {
      const d = Number(i || 1 / 0);
      for (let c = 0; c <= d && !(!u || !("prev" in u)); c++)
        u = u.prev;
      return u;
    }
    return xa(u.prev, u);
  });
  return Bt(pl, r), r;
}
const Wc = Symbol.for("vuetify:display"), Bm = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
}, dx = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Bm;
  return xa(Bm, e);
};
function Fm(e) {
  return Tt && !e ? window.innerWidth : 0;
}
function Lm(e) {
  return Tt && !e ? window.innerHeight : 0;
}
function jm(e) {
  const t = Tt && !e ? window.navigator.userAgent : "ssr";
  function n(y) {
    return Boolean(t.match(y));
  }
  const a = n(/android/i), r = n(/iphone|ipad|ipod/i), o = n(/cordova/i), l = n(/electron/i), i = n(/chrome/i), s = n(/edge/i), u = n(/firefox/i), d = n(/opera/i), c = n(/win/i), f = n(/mac/i), v = n(/linux/i);
  return {
    android: a,
    ios: r,
    cordova: o,
    electron: l,
    chrome: i,
    edge: s,
    firefox: u,
    opera: d,
    win: c,
    mac: f,
    linux: v,
    touch: ux,
    ssr: t === "ssr"
  };
}
function vx(e, t) {
  const {
    thresholds: n,
    mobileBreakpoint: a
  } = dx(e), r = R(Lm(t)), o = gp(jm(t)), l = Ct({}), i = R(Fm(t));
  function s() {
    r.value = Lm(), i.value = Fm();
  }
  function u() {
    s(), o.value = jm();
  }
  return ca(() => {
    const d = i.value < n.sm, c = i.value < n.md && !d, f = i.value < n.lg && !(c || d), v = i.value < n.xl && !(f || c || d), y = i.value < n.xxl && !(v || f || c || d), p = i.value >= n.xxl, x = d ? "xs" : c ? "sm" : f ? "md" : v ? "lg" : y ? "xl" : "xxl", O = typeof a == "number" ? a : n[a], E = i.value < O;
    l.xs = d, l.sm = c, l.md = f, l.lg = v, l.xl = y, l.xxl = p, l.smAndUp = !d, l.mdAndUp = !(d || c), l.lgAndUp = !(d || c || f), l.xlAndUp = !(d || c || f || v), l.smAndDown = !(f || v || y || p), l.mdAndDown = !(v || y || p), l.lgAndDown = !(y || p), l.xlAndDown = !p, l.name = x, l.height = r.value, l.width = i.value, l.mobile = E, l.mobileBreakpoint = a, l.platform = o.value, l.thresholds = n;
  }), Tt && window.addEventListener("resize", s, {
    passive: !0
  }), {
    ...sl(l),
    update: u,
    ssr: !!t
  };
}
function $a() {
  const e = nt(Wc);
  if (!e)
    throw new Error("Could not find Vuetify display injection");
  return e;
}
const mx = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus"
}, hx = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => Xa(Zd, {
    ...e,
    class: "mdi"
  })
}, Me = [String, Function, Object], zc = Symbol.for("vuetify:icons"), gu = Fe({
  icon: {
    type: Me
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), qc = oe()({
  name: "VComponentIcon",
  props: gu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => m(e.tag, null, {
      default: () => {
        var a;
        return [e.icon ? m(e.icon, null, null) : (a = n.default) == null ? void 0 : a.call(n)];
      }
    });
  }
}), eb = Cn({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: gu(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => m(e.tag, ve(n, {
      style: null
    }), {
      default: () => [m("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [m("path", {
        d: e.icon
      }, null)])]
    });
  }
}), yx = Cn({
  name: "VLigatureIcon",
  props: gu(),
  setup(e) {
    return () => m(e.tag, null, {
      default: () => [e.icon]
    });
  }
}), Zd = Cn({
  name: "VClassIcon",
  props: gu(),
  setup(e) {
    return () => m(e.tag, {
      class: e.icon
    }, null);
  }
}), px = {
  svg: {
    component: eb
  },
  class: {
    component: Zd
  }
};
function gx(e) {
  return xa({
    defaultSet: "mdi",
    sets: {
      ...px,
      mdi: hx
    },
    aliases: mx
  }, e);
}
const bx = (e) => {
  const t = nt(zc);
  if (!t)
    throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: _(() => {
      var s;
      const a = Ye(e) ? e.value : e.icon;
      if (!a)
        return {
          component: qc
        };
      let r = a;
      if (typeof r == "string" && (r = r.trim(), r.startsWith("$") && (r = (s = t.aliases) == null ? void 0 : s[r.slice(1)])), !r)
        throw new Error(`Could not find aliased icon "${a}"`);
      if (typeof r != "string")
        return {
          component: qc,
          icon: r
        };
      const o = Object.keys(t.sets).find((u) => typeof r == "string" && r.startsWith(`${u}:`)), l = o ? r.slice(o.length + 1) : r;
      return {
        component: t.sets[o ?? t.defaultSet].component,
        icon: l
      };
    })
  };
};
function He(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (c) => c, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (c) => c;
  const o = tn("useProxiedModel"), l = R(e[t] !== void 0 ? e[t] : n), i = Ua(t), u = _(i !== t ? () => {
    var c, f, v, y;
    return e[t], !!(((c = o.vnode.props) != null && c.hasOwnProperty(t) || (f = o.vnode.props) != null && f.hasOwnProperty(i)) && ((v = o.vnode.props) != null && v.hasOwnProperty(`onUpdate:${t}`) || (y = o.vnode.props) != null && y.hasOwnProperty(`onUpdate:${i}`)));
  } : () => {
    var c, f;
    return e[t], !!((c = o.vnode.props) != null && c.hasOwnProperty(t) && ((f = o.vnode.props) != null && f.hasOwnProperty(`onUpdate:${t}`)));
  });
  Tr(() => !u.value, () => {
    pe(() => e[t], (c) => {
      l.value = c;
    });
  });
  const d = _({
    get() {
      return a(u.value ? e[t] : l.value);
    },
    set(c) {
      const f = r(c), v = Te(u.value ? e[t] : l.value);
      v === f || a(v) === c || (l.value = f, o == null || o.emit(`update:${t}`, f));
    }
  });
  return Object.defineProperty(d, "externalValue", {
    get: () => u.value ? e[t] : l.value
  }), d;
}
const _x = {
  badge: "Badge",
  close: "Close",
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    nextMonthAriaLabel: "Next month",
    nextYearAriaLabel: "Next year",
    prevMonthAriaLabel: "Previous month",
    prevYearAriaLabel: "Previous year"
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  timePicker: {
    am: "AM",
    pm: "PM"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  }
}, Hm = "$vuetify.", Um = (e, t) => e.replace(/\{(\d+)\}/g, (n, a) => String(t[+a])), tb = (e, t, n) => function(a) {
  for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
    o[l - 1] = arguments[l];
  if (!a.startsWith(Hm))
    return Um(a, o);
  const i = a.replace(Hm, ""), s = e.value && n.value[e.value], u = t.value && n.value[t.value];
  let d = Rc(s, i, null);
  return d || (Cr(`Translation key "${a}" not found in "${e.value}", trying fallback locale`), d = Rc(u, i, null)), d || (Hc(`Translation key "${a}" not found in fallback`), d = a), typeof d != "string" && (Hc(`Translation key "${a}" has a non-string value`), d = a), Um(d, o);
};
function nb(e, t) {
  return (n, a) => new Intl.NumberFormat([e.value, t.value], a).format(n);
}
function Ku(e, t, n) {
  const a = He(e, t, e[t] ?? n.value);
  return a.value = e[t] ?? n.value, pe(n, (r) => {
    e[t] == null && (a.value = n.value);
  }), a;
}
function ab(e) {
  return (t) => {
    const n = Ku(t, "locale", e.current), a = Ku(t, "fallback", e.fallback), r = Ku(t, "messages", e.messages);
    return {
      name: "vuetify",
      current: n,
      fallback: a,
      messages: r,
      t: tb(n, a, r),
      n: nb(n, a),
      provide: ab({
        current: n,
        fallback: a,
        messages: r
      })
    };
  };
}
function wx(e) {
  const t = R((e == null ? void 0 : e.locale) ?? "en"), n = R((e == null ? void 0 : e.fallback) ?? "en"), a = R({
    en: _x,
    ...e == null ? void 0 : e.messages
  });
  return {
    name: "vuetify",
    current: t,
    fallback: n,
    messages: a,
    t: tb(t, n, a),
    n: nb(t, n),
    provide: ab({
      current: t,
      fallback: n,
      messages: a
    })
  };
}
const Sx = {
  af: !1,
  ar: !0,
  bg: !1,
  ca: !1,
  ckb: !1,
  cs: !1,
  de: !1,
  el: !1,
  en: !1,
  es: !1,
  et: !1,
  fa: !0,
  fi: !1,
  fr: !1,
  hr: !1,
  hu: !1,
  he: !0,
  id: !1,
  it: !1,
  ja: !1,
  ko: !1,
  lv: !1,
  lt: !1,
  nl: !1,
  no: !1,
  pl: !1,
  pt: !1,
  ro: !1,
  ru: !1,
  sk: !1,
  sl: !1,
  srCyrl: !1,
  srLatn: !1,
  sv: !1,
  th: !1,
  tr: !1,
  az: !1,
  uk: !1,
  vi: !1,
  zhHans: !1,
  zhHant: !1
}, fo = Symbol.for("vuetify:locale");
function kx(e) {
  return e.name != null;
}
function xx(e) {
  const t = e != null && e.adapter && kx(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : wx(e), n = Cx(t, e);
  return {
    ...t,
    ...n
  };
}
function Ln() {
  const e = nt(fo);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Ox(e) {
  const t = nt(fo);
  if (!t)
    throw new Error("[Vuetify] Could not find injected locale instance");
  const n = t.provide(e), a = Ex(n, t.rtl, e), r = {
    ...n,
    ...a
  };
  return Bt(fo, r), r;
}
function Cx(e, t) {
  const n = R((t == null ? void 0 : t.rtl) ?? Sx), a = _(() => n.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: n,
    rtlClasses: _(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function Ex(e, t, n) {
  const a = _(() => n.rtl ?? t.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: t,
    rtlClasses: _(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function Pa() {
  const e = nt(fo);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const qr = 2.4, Ym = 0.2126729, Wm = 0.7151522, zm = 0.072175, $x = 0.55, Px = 0.58, Tx = 0.57, Nx = 0.62, Gl = 0.03, qm = 1.45, Dx = 5e-4, Vx = 1.25, Ix = 1.25, Gm = 0.078, Km = 12.82051282051282, Kl = 0.06, Xm = 1e-3;
function Qm(e, t) {
  const n = (e.r / 255) ** qr, a = (e.g / 255) ** qr, r = (e.b / 255) ** qr, o = (t.r / 255) ** qr, l = (t.g / 255) ** qr, i = (t.b / 255) ** qr;
  let s = n * Ym + a * Wm + r * zm, u = o * Ym + l * Wm + i * zm;
  if (s <= Gl && (s += (Gl - s) ** qm), u <= Gl && (u += (Gl - u) ** qm), Math.abs(u - s) < Dx)
    return 0;
  let d;
  if (u > s) {
    const c = (u ** $x - s ** Px) * Vx;
    d = c < Xm ? 0 : c < Gm ? c - c * Km * Kl : c - Kl;
  } else {
    const c = (u ** Nx - s ** Tx) * Ix;
    d = c > -Xm ? 0 : c > -Gm ? c - c * Km * Kl : c + Kl;
  }
  return d * 100;
}
const gl = Symbol.for("vuetify:theme"), Ge = Fe({
  theme: String
}, "theme"), Mo = {
  defaultTheme: "light",
  variations: {
    colors: [],
    lighten: 0,
    darken: 0
  },
  themes: {
    light: {
      dark: !1,
      colors: {
        background: "#FFFFFF",
        surface: "#FFFFFF",
        "surface-variant": "#424242",
        "on-surface-variant": "#EEEEEE",
        primary: "#6200EE",
        "primary-darken-1": "#3700B3",
        secondary: "#03DAC6",
        "secondary-darken-1": "#018786",
        error: "#B00020",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00"
      },
      variables: {
        "border-color": "#000000",
        "border-opacity": 0.12,
        "high-emphasis-opacity": 0.87,
        "medium-emphasis-opacity": 0.6,
        "disabled-opacity": 0.38,
        "idle-opacity": 0.04,
        "hover-opacity": 0.04,
        "focus-opacity": 0.12,
        "selected-opacity": 0.08,
        "activated-opacity": 0.12,
        "pressed-opacity": 0.12,
        "dragged-opacity": 0.08,
        "theme-kbd": "#212529",
        "theme-on-kbd": "#FFFFFF",
        "theme-code": "#F5F5F5",
        "theme-on-code": "#000000"
      }
    },
    dark: {
      dark: !0,
      colors: {
        background: "#121212",
        surface: "#212121",
        "surface-variant": "#BDBDBD",
        "on-surface-variant": "#424242",
        primary: "#BB86FC",
        "primary-darken-1": "#3700B3",
        secondary: "#03DAC5",
        "secondary-darken-1": "#03DAC5",
        error: "#CF6679",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00"
      },
      variables: {
        "border-color": "#FFFFFF",
        "border-opacity": 0.12,
        "high-emphasis-opacity": 0.87,
        "medium-emphasis-opacity": 0.6,
        "disabled-opacity": 0.38,
        "idle-opacity": 0.1,
        "hover-opacity": 0.04,
        "focus-opacity": 0.12,
        "selected-opacity": 0.08,
        "activated-opacity": 0.12,
        "pressed-opacity": 0.16,
        "dragged-opacity": 0.08,
        "theme-kbd": "#212529",
        "theme-on-kbd": "#FFFFFF",
        "theme-code": "#343434",
        "theme-on-code": "#CCCCCC"
      }
    }
  }
};
function Ax() {
  var n, a;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Mo;
  if (!e)
    return {
      ...Mo,
      isDisabled: !0
    };
  const t = {};
  for (const [r, o] of Object.entries(e.themes ?? {})) {
    const l = o.dark || r === "dark" ? (n = Mo.themes) == null ? void 0 : n.dark : (a = Mo.themes) == null ? void 0 : a.light;
    t[r] = xa(l, o);
  }
  return xa(Mo, {
    ...e,
    themes: t
  });
}
function Mx(e) {
  const t = Ct(Ax(e)), n = R(t.defaultTheme), a = R(t.themes), r = _(() => {
    const d = {};
    for (const [c, f] of Object.entries(a.value)) {
      const v = d[c] = {
        ...f,
        colors: {
          ...f.colors
        }
      };
      if (t.variations)
        for (const y of t.variations.colors) {
          const p = v.colors[y];
          if (p)
            for (const x of ["lighten", "darken"]) {
              const O = x === "lighten" ? nx : ax;
              for (const E of hr(t.variations[x], 1))
                v.colors[`${y}-${x}-${E}`] = Wg(O(pr(p), E));
            }
        }
      for (const y of Object.keys(v.colors)) {
        if (/^on-[a-z]/.test(y) || v.colors[`on-${y}`])
          continue;
        const p = `on-${y}`, x = pr(v.colors[y]), O = Math.abs(Qm(pr(0), x)), E = Math.abs(Qm(pr(16777215), x));
        v.colors[p] = E > Math.min(O, 50) ? "#fff" : "#000";
      }
    }
    return d;
  }), o = _(() => r.value[n.value]), l = _(() => {
    const d = [];
    o.value.dark && lr(d, ":root", ["color-scheme: dark"]), lr(d, ":root", Zm(o.value));
    for (const [y, p] of Object.entries(r.value))
      lr(d, `.v-theme--${y}`, [`color-scheme: ${p.dark ? "dark" : "normal"}`, ...Zm(p)]);
    const c = [], f = [], v = new Set(Object.values(r.value).flatMap((y) => Object.keys(y.colors)));
    for (const y of v)
      /^on-[a-z]/.test(y) ? lr(f, `.${y}`, [`color: rgb(var(--v-theme-${y})) !important`]) : (lr(c, `.bg-${y}`, [`--v-theme-overlay-multiplier: var(--v-theme-${y}-overlay-multiplier)`, `background: rgb(var(--v-theme-${y})) !important`, `color: rgb(var(--v-theme-on-${y})) !important`]), lr(f, `.text-${y}`, [`color: rgb(var(--v-theme-${y})) !important`]), lr(f, `.border-${y}`, [`--v-border-color: var(--v-theme-${y})`]));
    return d.push(...c, ...f), d.map((y, p) => p === 0 ? y : `    ${y}`).join("");
  });
  function i() {
    return {
      style: [{
        children: l.value,
        id: "vuetify-theme-stylesheet",
        nonce: t.cspNonce || !1
      }]
    };
  }
  function s(d) {
    const c = d._context.provides.usehead;
    if (c)
      if (c.push) {
        const f = c.push(i);
        pe(l, () => {
          f.patch(i);
        });
      } else
        Tt ? (c.addHeadObjs(_(i)), ca(() => c.updateDOM())) : c.addHeadObjs(i());
    else {
      let v = function() {
        if (!t.isDisabled) {
          if (typeof document < "u" && !f) {
            const y = document.createElement("style");
            y.type = "text/css", y.id = "vuetify-theme-stylesheet", t.cspNonce && y.setAttribute("nonce", t.cspNonce), f = y, document.head.appendChild(f);
          }
          f && (f.innerHTML = l.value);
        }
      }, f = Tt ? document.getElementById("vuetify-theme-stylesheet") : null;
      pe(l, v, {
        immediate: !0
      });
    }
  }
  const u = _(() => t.isDisabled ? void 0 : `v-theme--${n.value}`);
  return {
    install: s,
    isDisabled: t.isDisabled,
    name: n,
    themes: a,
    current: o,
    computedThemes: r,
    themeClasses: u,
    styles: l,
    global: {
      name: n,
      current: o
    }
  };
}
function at(e) {
  tn("provideTheme");
  const t = nt(gl, null);
  if (!t)
    throw new Error("Could not find Vuetify theme injection");
  const n = _(() => e.theme ?? (t == null ? void 0 : t.name.value)), a = _(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), r = {
    ...t,
    name: n,
    themeClasses: a
  };
  return Bt(gl, r), r;
}
function rb() {
  tn("useTheme");
  const e = nt(gl, null);
  if (!e)
    throw new Error("Could not find Vuetify theme injection");
  return e;
}
function lr(e, t, n) {
  e.push(`${t} {
`, ...n.map((a) => `  ${a};
`), `}
`);
}
function Zm(e) {
  const t = e.dark ? 2 : 1, n = e.dark ? 1 : 2, a = [];
  for (const [r, o] of Object.entries(e.colors)) {
    const l = pr(o);
    a.push(`--v-theme-${r}: ${l.r},${l.g},${l.b}`), r.startsWith("on-") || a.push(`--v-theme-${r}-overlay-multiplier: ${Uc(o) > 0.18 ? t : n}`);
  }
  for (const [r, o] of Object.entries(e.variables)) {
    const l = typeof o == "string" && o.startsWith("#") ? pr(o) : void 0, i = l ? `${l.r}, ${l.g}, ${l.b}` : void 0;
    a.push(`--v-${r}: ${i ?? o}`);
  }
  return a;
}
function qa(e) {
  const t = R(), n = R();
  if (Tt) {
    const a = new ResizeObserver((r) => {
      e == null || e(r, a), r.length && (n.value = r[0].contentRect);
    });
    _n(() => {
      a.disconnect();
    }), pe(t, (r, o) => {
      o && (a.unobserve(o), n.value = void 0), r && a.observe(r);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: t,
    contentRect: Ol(n)
  };
}
const fs = Symbol.for("vuetify:layout"), ob = Symbol.for("vuetify:layout-item"), Jm = 1e3, lb = Fe({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout"), _o = Fe({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function Rx() {
  const e = nt(fs);
  if (!e)
    throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles
  };
}
function wo(e) {
  const t = nt(fs);
  if (!t)
    throw new Error("[Vuetify] Could not find injected layout");
  const n = e.id ?? `layout-item-${nn()}`, a = tn("useLayoutItem");
  Bt(ob, {
    id: n
  });
  const r = R(!1);
  Lp(() => r.value = !0), Fp(() => r.value = !1);
  const {
    layoutItemStyles: o,
    layoutItemScrimStyles: l
  } = t.register(a, {
    ...e,
    active: _(() => r.value ? !1 : e.active.value),
    id: n
  });
  return _n(() => t.unregister(n)), {
    layoutItemStyles: o,
    layoutRect: t.layoutRect,
    layoutItemScrimStyles: l
  };
}
const Bx = (e, t, n, a) => {
  let r = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const o = [{
    id: "",
    layer: {
      ...r
    }
  }];
  for (const l of e) {
    const i = t.get(l), s = n.get(l), u = a.get(l);
    if (!i || !s || !u)
      continue;
    const d = {
      ...r,
      [i.value]: parseInt(r[i.value], 10) + (u.value ? parseInt(s.value, 10) : 0)
    };
    o.push({
      id: l,
      layer: d
    }), r = d;
  }
  return o;
};
function ib(e) {
  const t = nt(fs, null), n = _(() => t ? t.rootZIndex.value - 100 : Jm), a = R([]), r = Ct(/* @__PURE__ */ new Map()), o = Ct(/* @__PURE__ */ new Map()), l = Ct(/* @__PURE__ */ new Map()), i = Ct(/* @__PURE__ */ new Map()), s = Ct(/* @__PURE__ */ new Map()), {
    resizeRef: u,
    contentRect: d
  } = qa(), c = _(() => {
    const $ = /* @__PURE__ */ new Map(), k = e.overlaps ?? [];
    for (const g of k.filter((b) => b.includes(":"))) {
      const [b, w] = g.split(":");
      if (!a.value.includes(b) || !a.value.includes(w))
        continue;
      const C = r.get(b), T = r.get(w), A = o.get(b), z = o.get(w);
      !C || !T || !A || !z || ($.set(w, {
        position: C.value,
        amount: parseInt(A.value, 10)
      }), $.set(b, {
        position: T.value,
        amount: -parseInt(z.value, 10)
      }));
    }
    return $;
  }), f = _(() => {
    const $ = [...new Set([...l.values()].map((g) => g.value))].sort((g, b) => g - b), k = [];
    for (const g of $) {
      const b = a.value.filter((w) => {
        var C;
        return ((C = l.get(w)) == null ? void 0 : C.value) === g;
      });
      k.push(...b);
    }
    return Bx(k, r, o, i);
  }), v = _(() => !Array.from(s.values()).some(($) => $.value)), y = _(() => f.value[f.value.length - 1].layer), p = _(() => ({
    "--v-layout-left": ge(y.value.left),
    "--v-layout-right": ge(y.value.right),
    "--v-layout-top": ge(y.value.top),
    "--v-layout-bottom": ge(y.value.bottom),
    ...v.value ? void 0 : {
      transition: "none"
    }
  })), x = _(() => f.value.slice(1).map(($, k) => {
    let {
      id: g
    } = $;
    const {
      layer: b
    } = f.value[k], w = o.get(g), C = r.get(g);
    return {
      id: g,
      ...b,
      size: Number(w.value),
      position: C.value
    };
  })), O = ($) => x.value.find((k) => k.id === $), E = tn("createLayout"), S = R(!1);
  ft(() => {
    S.value = !0;
  }), Bt(fs, {
    register: ($, k) => {
      let {
        id: g,
        order: b,
        position: w,
        layoutSize: C,
        elementSize: T,
        active: A,
        disableTransitions: z,
        absolute: U
      } = k;
      l.set(g, b), r.set(g, w), o.set(g, C), i.set(g, A), z && s.set(g, z);
      const h = Zo(ob, E == null ? void 0 : E.vnode).indexOf($);
      h > -1 ? a.value.splice(h, 0, g) : a.value.push(g);
      const P = _(() => x.value.findIndex((X) => X.id === g)), W = _(() => n.value + f.value.length * 2 - P.value * 2), H = _(() => {
        const X = w.value === "left" || w.value === "right", Q = w.value === "right", Y = w.value === "bottom", I = {
          [w.value]: 0,
          zIndex: W.value,
          transform: `translate${X ? "X" : "Y"}(${(A.value ? 0 : -110) * (Q || Y ? -1 : 1)}%)`,
          position: U.value || n.value !== Jm ? "absolute" : "fixed",
          ...v.value ? void 0 : {
            transition: "none"
          }
        };
        if (!S.value)
          return I;
        const q = x.value[P.value];
        if (!q)
          throw new Error(`[Vuetify] Could not find layout item "${g}"`);
        const we = c.value.get(g);
        return we && (q[we.position] += we.amount), {
          ...I,
          height: X ? `calc(100% - ${q.top}px - ${q.bottom}px)` : T.value ? `${T.value}px` : void 0,
          left: Q ? void 0 : `${q.left}px`,
          right: Q ? `${q.right}px` : void 0,
          top: w.value !== "bottom" ? `${q.top}px` : void 0,
          bottom: w.value !== "top" ? `${q.bottom}px` : void 0,
          width: X ? T.value ? `${T.value}px` : void 0 : `calc(100% - ${q.left}px - ${q.right}px)`
        };
      }), j = _(() => ({
        zIndex: W.value - 1
      }));
      return {
        layoutItemStyles: H,
        layoutItemScrimStyles: j,
        zIndex: W
      };
    },
    unregister: ($) => {
      l.delete($), r.delete($), o.delete($), i.delete($), s.delete($), a.value = a.value.filter((k) => k !== $);
    },
    mainRect: y,
    mainStyles: p,
    getLayoutItem: O,
    items: x,
    layoutRect: d,
    rootZIndex: n
  });
  const N = _(() => ["v-layout", {
    "v-layout--full-height": e.fullHeight
  }]), V = _(() => ({
    zIndex: n.value,
    position: t ? "relative" : void 0,
    overflow: t ? "hidden" : void 0
  }));
  return {
    layoutClasses: N,
    layoutStyles: V,
    getLayoutItem: O,
    items: x,
    layoutRect: d,
    layoutRef: u
  };
}
function sb() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint: t,
    ...n
  } = e, a = xa(t, n), {
    aliases: r = {},
    components: o = {},
    directives: l = {}
  } = a, i = fx(a.defaults), s = vx(a.display, a.ssr), u = Mx(a.theme), d = gx(a.icons), c = xx(a.locale);
  return {
    install: (v) => {
      for (const y in l)
        v.directive(y, l[y]);
      for (const y in o)
        v.component(y, o[y]);
      for (const y in r)
        v.component(y, Cn({
          ...r[y],
          name: y,
          aliasName: r[y].name
        }));
      if (u.install(v), v.provide(pl, i), v.provide(Wc, s), v.provide(gl, u), v.provide(zc, d), v.provide(fo, c), Tt && a.ssr)
        if (v.$nuxt)
          v.$nuxt.hook("app:suspense:resolve", () => {
            s.update();
          });
        else {
          const {
            mount: y
          } = v;
          v.mount = function() {
            const p = y(...arguments);
            return Je(() => s.update()), v.mount = y, p;
          };
        }
      nn.reset(), v.mixin({
        computed: {
          $vuetify() {
            return Ct({
              defaults: Ro.call(this, pl),
              display: Ro.call(this, Wc),
              theme: Ro.call(this, gl),
              icons: Ro.call(this, zc),
              locale: Ro.call(this, fo)
            });
          }
        }
      });
    },
    defaults: i,
    display: s,
    theme: u,
    icons: d,
    locale: c
  };
}
const Fx = "3.1.10";
sb.version = Fx;
function Ro(e) {
  var a, r;
  const t = this.$, n = ((a = t.parent) == null ? void 0 : a.provides) ?? ((r = t.vnode.appContext) == null ? void 0 : r.provides);
  if (n && e in n)
    return n[e];
}
const Lx = { class: "d-flex flex-column mt-2 mb-2" }, jx = { class: "text-h5 mb-3" }, Hx = { class: "d-flex flex-column w-100" }, Ux = /* @__PURE__ */ Wt({
  __name: "EducationForm",
  props: {
    educationInfo: {
      type: Nc,
      required: !0,
      default: () => new Nc()
    }
  },
  setup(e) {
    const t = yu(), n = $a(), a = _(() => n.xs ? 12 : n.sm || n.md ? 6 : n.xl || n.xxl ? 3 : 4);
    return (r, o) => {
      const l = Qe("v-checkbox"), i = Qe("v-text-field"), s = Qe("v-col"), u = Qe("DatepickerField"), d = Qe("v-input"), c = Qe("v-row"), f = Qe("v-btn"), v = Qe("v-card");
      return Z(), me("div", Lx, [
        Ie("div", jx, Dt(e.educationInfo.label), 1),
        m(d, {
          "model-value": e.educationInfo,
          rules: e.educationInfo.rules,
          name: e.educationInfo.uuid,
          class: "w-100"
        }, {
          default: he(() => [
            Ie("div", Hx, [
              m(l, {
                label: e.educationInfo.hasNoEducation.label,
                "model-value": e.educationInfo.hasNoEducation.value,
                "onUpdate:modelValue": M(t).setHasNoEducation
              }, null, 8, ["label", "model-value", "onUpdate:modelValue"]),
              e.educationInfo.hasNoEducation.value ? ce("", !0) : (Z(), me(ye, { key: 0 }, [
                (Z(!0), me(ye, null, Ot(e.educationInfo.educations, (y, p) => (Z(), qe(v, {
                  key: p,
                  class: "mb-2",
                  style: { overflow: "unset", "z-index": "unset" }
                }, {
                  text: he(() => [
                    m(c, { class: "flex-shrink-0" }, {
                      default: he(() => [
                        m(s, { cols: M(a) }, {
                          default: he(() => [
                            m(i, {
                              label: y.name.label,
                              placeholder: y.name.placeholder,
                              name: y.name.name + y.uuid,
                              "onUpdate:modelValue": (x) => M(t).updateEdiucationInfoField(y.uuid, y.name.uuid, x),
                              "model-value": y.name.value,
                              type: y.name.type,
                              rules: y.name.rules
                            }, null, 8, ["label", "placeholder", "name", "onUpdate:modelValue", "model-value", "type", "rules"])
                          ]),
                          _: 2
                        }, 1032, ["cols"]),
                        m(s, { cols: M(a) }, {
                          default: he(() => [
                            m(i, {
                              label: y.degree.label,
                              placeholder: y.degree.placeholder,
                              name: y.degree.name + y.uuid,
                              "onUpdate:modelValue": (x) => M(t).updateEdiucationInfoField(y.uuid, y.degree.uuid, x),
                              "model-value": y.degree.value,
                              type: y.degree.type,
                              rules: y.degree.rules
                            }, null, 8, ["label", "placeholder", "name", "onUpdate:modelValue", "model-value", "type", "rules"])
                          ]),
                          _: 2
                        }, 1032, ["cols"]),
                        m(s, { cols: M(a) }, {
                          default: he(() => [
                            m(d, {
                              "model-value": y.startDate.value,
                              rules: y.startDate.rules,
                              name: y.startDate.name + y.uuid
                            }, {
                              default: he(() => [
                                m(u, {
                                  label: y.startDate.label,
                                  rules: y.startDate.rules,
                                  name: y.startDate.name + y.uuid,
                                  "month-picker": "",
                                  "onUpdate:modelValue": (x) => M(t).updateEdiucationInfoField(y.uuid, y.startDate.uuid, x),
                                  "model-value": y.startDate.value,
                                  placeholder: y.startDate.placeholder
                                }, null, 8, ["label", "rules", "name", "onUpdate:modelValue", "model-value", "placeholder"])
                              ]),
                              _: 2
                            }, 1032, ["model-value", "rules", "name"])
                          ]),
                          _: 2
                        }, 1032, ["cols"]),
                        m(s, { cols: M(a) }, {
                          default: he(() => [
                            m(d, {
                              "model-value": y.endDate.value,
                              rules: y.endDate.rules,
                              name: y.endDate.name + y.uuid
                            }, {
                              default: he(() => [
                                m(u, {
                                  label: y.endDate.label,
                                  rules: y.endDate.rules,
                                  name: y.endDate.name + y.uuid,
                                  "month-picker": "",
                                  "onUpdate:modelValue": (x) => M(t).updateEdiucationInfoField(y.uuid, y.endDate.uuid, x),
                                  "model-value": y.endDate.value,
                                  placeholder: y.endDate.placeholder
                                }, null, 8, ["label", "rules", "name", "onUpdate:modelValue", "model-value", "placeholder"])
                              ]),
                              _: 2
                            }, 1032, ["model-value", "rules", "name"])
                          ]),
                          _: 2
                        }, 1032, ["cols"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  actions: he(() => [
                    m(f, {
                      color: "error",
                      variant: "flat",
                      onClick: (x) => M(t).removeEducation(y.uuid)
                    }, {
                      default: he(() => [
                        wt(" remove education ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                m(f, {
                  onClick: M(t).addNewEducation
                }, {
                  default: he(() => [
                    wt(" Add new education ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ], 64))
            ])
          ]),
          _: 1
        }, 8, ["model-value", "rules", "name"])
      ]);
    };
  }
}), Yx = { class: "text-h5 mb-3" }, Wx = /* @__PURE__ */ Wt({
  __name: "GeneralInfo",
  props: {
    generalInfo: {
      type: Tc,
      required: !0,
      default: () => new Tc()
    }
  },
  setup(e) {
    const t = yu(), n = $a(), a = _(() => n.xs ? 12 : n.sm || n.md ? 6 : n.xl || n.xxl ? 3 : 4);
    return (r, o) => {
      const l = Qe("v-text-field"), i = Qe("v-col"), s = Qe("DatepickerField"), u = Qe("v-input"), d = Qe("v-textarea"), c = Qe("v-file-input"), f = Qe("v-row");
      return Z(), qe(f, { class: "flex-shrink-0 mt-2 mb-2" }, {
        default: he(() => [
          Ie("div", Yx, Dt(e.generalInfo.label), 1),
          m(i, { cols: M(a) }, {
            default: he(() => [
              m(l, {
                label: e.generalInfo.name.label,
                placeholder: e.generalInfo.name.placeholder,
                "onUpdate:modelValue": o[0] || (o[0] = (v) => M(t).updateGeneralInfoField(e.generalInfo.name.uuid, v)),
                "model-value": e.generalInfo.name.value,
                name: e.generalInfo.name.name,
                type: e.generalInfo.name.type,
                rules: e.generalInfo.name.rules
              }, null, 8, ["label", "placeholder", "model-value", "name", "type", "rules"])
            ]),
            _: 1
          }, 8, ["cols"]),
          m(i, { cols: M(a) }, {
            default: he(() => [
              m(l, {
                label: e.generalInfo.lastName.label,
                placeholder: e.generalInfo.lastName.placeholder,
                "onUpdate:modelValue": o[1] || (o[1] = (v) => M(t).updateGeneralInfoField(e.generalInfo.lastName.uuid, v)),
                "model-value": e.generalInfo.lastName.value,
                name: e.generalInfo.lastName.name,
                type: e.generalInfo.lastName.type,
                rules: e.generalInfo.lastName.rules
              }, null, 8, ["label", "placeholder", "model-value", "name", "type", "rules"])
            ]),
            _: 1
          }, 8, ["cols"]),
          m(i, { cols: M(a) }, {
            default: he(() => [
              m(l, {
                label: e.generalInfo.email.label,
                placeholder: e.generalInfo.email.placeholder,
                "onUpdate:modelValue": o[2] || (o[2] = (v) => M(t).updateGeneralInfoField(e.generalInfo.email.uuid, v)),
                "model-value": e.generalInfo.email.value,
                name: e.generalInfo.email.name,
                type: e.generalInfo.email.type,
                rules: e.generalInfo.email.rules
              }, null, 8, ["label", "placeholder", "model-value", "name", "type", "rules"])
            ]),
            _: 1
          }, 8, ["cols"]),
          m(i, { cols: M(a) }, {
            default: he(() => [
              m(l, {
                label: e.generalInfo.phone.label,
                placeholder: e.generalInfo.phone.placeholder,
                "onUpdate:modelValue": o[3] || (o[3] = (v) => M(t).updateGeneralInfoField(e.generalInfo.phone.uuid, v)),
                "model-value": e.generalInfo.phone.value,
                name: e.generalInfo.phone.name,
                type: e.generalInfo.phone.type,
                rules: e.generalInfo.phone.rules
              }, null, 8, ["label", "placeholder", "model-value", "name", "type", "rules"])
            ]),
            _: 1
          }, 8, ["cols"]),
          m(i, { cols: M(a) }, {
            default: he(() => [
              m(l, {
                label: e.generalInfo.appliedPosition.label,
                placeholder: e.generalInfo.appliedPosition.placeholder,
                "onUpdate:modelValue": o[4] || (o[4] = (v) => M(t).updateGeneralInfoField(e.generalInfo.appliedPosition.uuid, v)),
                "model-value": e.generalInfo.appliedPosition.value,
                name: e.generalInfo.appliedPosition.name,
                rules: e.generalInfo.appliedPosition.rules
              }, null, 8, ["label", "placeholder", "model-value", "name", "rules"])
            ]),
            _: 1
          }, 8, ["cols"]),
          m(i, { cols: M(a) }, {
            default: he(() => [
              m(u, {
                "model-value": e.generalInfo.earlyPossibleDate.value,
                rules: e.generalInfo.earlyPossibleDate.rules,
                name: e.generalInfo.earlyPossibleDate.name
              }, {
                default: he(() => [
                  m(s, {
                    label: e.generalInfo.earlyPossibleDate.label,
                    name: e.generalInfo.earlyPossibleDate.name,
                    "onUpdate:modelValue": o[5] || (o[5] = (v) => M(t).updateGeneralInfoField(e.generalInfo.earlyPossibleDate.uuid, v)),
                    "model-value": e.generalInfo.earlyPossibleDate.value,
                    placeholder: e.generalInfo.earlyPossibleDate.placeholder
                  }, null, 8, ["label", "name", "model-value", "placeholder"])
                ]),
                _: 1
              }, 8, ["model-value", "rules", "name"])
            ]),
            _: 1
          }, 8, ["cols"]),
          m(i, { cols: M(a) }, {
            default: he(() => [
              m(u, {
                "model-value": e.generalInfo.preferredInterViewDate.value,
                rules: e.generalInfo.preferredInterViewDate.rules,
                name: e.generalInfo.preferredInterViewDate.name
              }, {
                default: he(() => [
                  m(s, {
                    label: e.generalInfo.preferredInterViewDate.label,
                    "onUpdate:modelValue": o[6] || (o[6] = (v) => M(t).updateGeneralInfoField(e.generalInfo.preferredInterViewDate.uuid, v)),
                    "model-value": e.generalInfo.preferredInterViewDate.value,
                    rules: e.generalInfo.preferredInterViewDate.rules,
                    name: e.generalInfo.preferredInterViewDate.name,
                    placeholder: e.generalInfo.preferredInterViewDate.placeholder
                  }, null, 8, ["label", "model-value", "rules", "name", "placeholder"])
                ]),
                _: 1
              }, 8, ["model-value", "rules", "name"])
            ]),
            _: 1
          }, 8, ["cols"]),
          m(i, { cols: M(a) }, {
            default: he(() => [
              m(d, {
                label: e.generalInfo.coverLetter.label,
                placeholder: e.generalInfo.coverLetter.placeholder,
                "onUpdate:modelValue": o[7] || (o[7] = (v) => M(t).updateGeneralInfoField(e.generalInfo.coverLetter.uuid, v)),
                "model-value": e.generalInfo.coverLetter.value,
                name: e.generalInfo.coverLetter.name,
                rules: e.generalInfo.coverLetter.rules
              }, null, 8, ["label", "placeholder", "model-value", "name", "rules"])
            ]),
            _: 1
          }, 8, ["cols"]),
          m(i, { cols: M(a) }, {
            default: he(() => [
              m(c, {
                label: e.generalInfo.cv.label,
                placeholder: e.generalInfo.cv.placeholder,
                name: e.generalInfo.cv.name,
                "onUpdate:modelValue": o[8] || (o[8] = (v) => M(t).updateGeneralInfoField(e.generalInfo.cv.uuid, v)),
                "model-value": e.generalInfo.cv.value,
                variant: "solo",
                rules: e.generalInfo.cv.rules
              }, null, 8, ["label", "placeholder", "name", "model-value", "rules"])
            ]),
            _: 1
          }, 8, ["cols"])
        ]),
        _: 1
      });
    };
  }
}), zx = { class: "d-flex flex-column mt-2 mb-2" }, qx = { class: "text-h5 mb-3" }, Gx = { class: "d-flex flex-column w-100" }, Kx = /* @__PURE__ */ Wt({
  __name: "WorkExperience",
  props: {
    workExperience: {
      type: Dc,
      required: !0,
      default: () => new Dc()
    }
  },
  setup(e) {
    const t = yu(), n = $a(), a = _(() => n.xs ? 12 : n.sm || n.md ? 6 : n.xl || n.xxl ? 3 : 4);
    return (r, o) => {
      const l = Qe("v-checkbox"), i = Qe("v-text-field"), s = Qe("v-col"), u = Qe("v-textarea"), d = Qe("DatepickerField"), c = Qe("v-input"), f = Qe("v-row"), v = Qe("v-btn"), y = Qe("v-card");
      return Z(), me("div", zx, [
        Ie("div", qx, Dt(e.workExperience.label), 1),
        m(c, {
          "model-value": e.workExperience,
          rules: e.workExperience.rules,
          name: e.workExperience.uuid,
          class: "w-100"
        }, {
          default: he(() => [
            Ie("div", Gx, [
              m(l, {
                label: e.workExperience.hasNoWorkExperience.label,
                "onUpdate:modelValue": M(t).setHasNoWorkExperience,
                "model-value": e.workExperience.hasNoWorkExperience.value
              }, null, 8, ["label", "onUpdate:modelValue", "model-value"]),
              e.workExperience.hasNoWorkExperience.value ? ce("", !0) : (Z(), me(ye, { key: 0 }, [
                (Z(!0), me(ye, null, Ot(e.workExperience.workExperiences, (p, x) => (Z(), qe(y, {
                  key: x,
                  class: "mb-2",
                  style: { overflow: "unset", "z-index": "unset" }
                }, {
                  text: he(() => [
                    m(f, { class: "flex-shrink-0" }, {
                      default: he(() => [
                        m(s, { cols: M(a) }, {
                          default: he(() => [
                            m(i, {
                              label: p.name.label,
                              placeholder: p.name.placeholder,
                              name: p.name.name + p.uuid,
                              "onUpdate:modelValue": (O) => M(t).updateWorkExperienceInfoField(p.uuid, p.name.uuid, O),
                              "model-value": p.name.value,
                              type: p.name.type,
                              rules: p.name.rules
                            }, null, 8, ["label", "placeholder", "name", "onUpdate:modelValue", "model-value", "type", "rules"])
                          ]),
                          _: 2
                        }, 1032, ["cols"]),
                        m(s, { cols: M(a) }, {
                          default: he(() => [
                            m(u, {
                              label: p.responsibilities.label,
                              placeholder: p.responsibilities.placeholder,
                              "onUpdate:modelValue": (O) => M(t).updateWorkExperienceInfoField(p.uuid, p.responsibilities.uuid, O),
                              "model-value": p.responsibilities.value,
                              name: p.responsibilities.name + p.uuid,
                              type: p.responsibilities.type,
                              rules: p.responsibilities.rules
                            }, null, 8, ["label", "placeholder", "onUpdate:modelValue", "model-value", "name", "type", "rules"])
                          ]),
                          _: 2
                        }, 1032, ["cols"]),
                        m(s, { cols: M(a) }, {
                          default: he(() => [
                            m(c, {
                              "model-value": p.startDate.value,
                              rules: p.startDate.rules,
                              name: p.startDate.name + p.uuid
                            }, {
                              default: he(() => [
                                m(d, {
                                  label: p.startDate.label,
                                  rules: p.startDate.rules,
                                  name: p.startDate.name + p.uuid,
                                  "month-picker": "",
                                  "onUpdate:modelValue": (O) => M(t).updateWorkExperienceInfoField(p.uuid, p.startDate.uuid, O),
                                  "model-value": p.startDate.value,
                                  placeholder: p.startDate.placeholder
                                }, null, 8, ["label", "rules", "name", "onUpdate:modelValue", "model-value", "placeholder"])
                              ]),
                              _: 2
                            }, 1032, ["model-value", "rules", "name"])
                          ]),
                          _: 2
                        }, 1032, ["cols"]),
                        m(s, { cols: M(a) }, {
                          default: he(() => [
                            m(c, {
                              "model-value": p.endDate.value,
                              rules: p.endDate.rules,
                              name: p.endDate.name + p.uuid
                            }, {
                              default: he(() => [
                                m(d, {
                                  label: p.endDate.label,
                                  rules: p.endDate.rules,
                                  name: p.endDate.name + p.uuid,
                                  "month-picker": "",
                                  "onUpdate:modelValue": (O) => M(t).updateWorkExperienceInfoField(p.uuid, p.endDate.uuid, O),
                                  "model-value": p.endDate.value,
                                  placeholder: p.endDate.placeholder
                                }, null, 8, ["label", "rules", "name", "onUpdate:modelValue", "model-value", "placeholder"])
                              ]),
                              _: 2
                            }, 1032, ["model-value", "rules", "name"])
                          ]),
                          _: 2
                        }, 1032, ["cols"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  actions: he(() => [
                    m(v, {
                      color: "error",
                      variant: "flat",
                      onClick: (O) => M(t).removeWorkExperience(p.uuid)
                    }, {
                      default: he(() => [
                        wt(" remove education ")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                m(v, {
                  onClick: M(t).addNewWorkExperience
                }, {
                  default: he(() => [
                    wt(" Add new work experience ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ], 64))
            ])
          ]),
          _: 1
        }, 8, ["model-value", "rules", "name"])
      ]);
    };
  }
}), Xx = /* @__PURE__ */ Wt({
  __name: "ApplyForm",
  setup(e) {
    const t = R(null), n = yu(), a = async () => {
      if (t.value === null)
        return;
      const r = t == null ? void 0 : t.value;
      console.log(await r.validate()), console.log(n.applyForm);
    };
    return ft(() => {
      console.log(t);
    }), (r, o) => {
      const l = Qe("v-divider"), i = Qe("v-btn"), s = Qe("v-row"), u = Qe("v-form");
      return Z(), qe(u, {
        ref_key: "form",
        ref: t
      }, {
        default: he(() => [
          m(Wx, {
            "general-info": M(n).applyForm.generalInfo
          }, null, 8, ["general-info"]),
          m(l),
          m(Ux, {
            "education-info": M(n).applyForm.educationInfo
          }, null, 8, ["education-info"]),
          m(l),
          m(Kx, {
            "work-experience": M(n).applyForm.workExperience
          }, null, 8, ["work-experience"]),
          m(s, { class: "justify-end mt-4" }, {
            default: he(() => [
              m(i, {
                onClick: a,
                color: "primary",
                class: "mr-2"
              }, {
                default: he(() => [
                  wt(" apply ")
                ]),
                _: 1
              }),
              m(i, {
                onClick: M(n).clearApplyForm
              }, {
                default: he(() => [
                  wt(" reset ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512);
    };
  }
}), Qx = /* @__PURE__ */ Wt({
  __name: "App",
  setup(e) {
    return (t, n) => {
      const a = Qe("v-app-bar-title"), r = Qe("v-spacer"), o = Qe("v-app-bar"), l = Qe("v-container"), i = Qe("v-app");
      return Z(), qe(i, { "full-height": "" }, {
        default: he(() => [
          m(o, null, {
            default: he(() => [
              m(a, null, {
                default: he(() => [
                  wt(" Apply for a Job form ")
                ]),
                _: 1
              }),
              m(r)
            ]),
            _: 1
          }),
          m(l, { class: "overflow-y-auto app-container" }, {
            default: he(() => [
              m(Xx)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const Zx = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
}, Jx = /* @__PURE__ */ Zx(Qx, [["__scopeId", "data-v-b3054de4"]]);
async function eO() {
  (await import(
    /* webpackChunkName: "webfontloader" */
    "./webfontloader-9975f654.js"
  ).then((t) => t.w)).load({
    google: {
      families: ["Roboto:100,300,400,500,700,900&display=swap"]
    }
  });
}
const tO = sb({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6"
        }
      }
    }
  }
});
function Ae(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function $e(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function ii(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ii = function(n) {
    return typeof n;
  } : ii = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ii(e);
}
function Re(e) {
  $e(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || ii(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Ya(e, t) {
  $e(2, arguments);
  var n = Re(e), a = Ae(t);
  return isNaN(a) ? new Date(NaN) : (a && n.setDate(n.getDate() + a), n);
}
function oa(e, t) {
  $e(2, arguments);
  var n = Re(e), a = Ae(t);
  if (isNaN(a))
    return new Date(NaN);
  if (!a)
    return n;
  var r = n.getDate(), o = new Date(n.getTime());
  o.setMonth(n.getMonth() + a + 1, 0);
  var l = o.getDate();
  return r >= l ? o : (n.setFullYear(o.getFullYear(), o.getMonth(), r), n);
}
function si(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? si = function(n) {
    return typeof n;
  } : si = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, si(e);
}
function ub(e, t) {
  if ($e(2, arguments), !t || si(t) !== "object")
    return new Date(NaN);
  var n = t.years ? Ae(t.years) : 0, a = t.months ? Ae(t.months) : 0, r = t.weeks ? Ae(t.weeks) : 0, o = t.days ? Ae(t.days) : 0, l = t.hours ? Ae(t.hours) : 0, i = t.minutes ? Ae(t.minutes) : 0, s = t.seconds ? Ae(t.seconds) : 0, u = Re(e), d = a || n ? oa(u, a + n * 12) : u, c = o || r ? Ya(d, o + r * 7) : d, f = i + l * 60, v = s + f * 60, y = v * 1e3, p = new Date(c.getTime() + y);
  return p;
}
function nO(e, t) {
  $e(2, arguments);
  var n = Re(e).getTime(), a = Ae(t);
  return new Date(n + a);
}
var aO = {};
function fa() {
  return aO;
}
function Nr(e, t) {
  var n, a, r, o, l, i, s, u;
  $e(1, arguments);
  var d = fa(), c = Ae((n = (a = (r = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (i = l.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && r !== void 0 ? r : d.weekStartsOn) !== null && a !== void 0 ? a : (s = d.locale) === null || s === void 0 || (u = s.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = Re(e), v = f.getDay(), y = (v < c ? 7 : 0) + v - c;
  return f.setDate(f.getDate() - y), f.setHours(0, 0, 0, 0), f;
}
function ds(e) {
  return $e(1, arguments), Nr(e, {
    weekStartsOn: 1
  });
}
function rO(e) {
  $e(1, arguments);
  var t = Re(e), n = t.getFullYear(), a = new Date(0);
  a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0);
  var r = ds(a), o = new Date(0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  var l = ds(o);
  return t.getTime() >= r.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1;
}
function oO(e) {
  $e(1, arguments);
  var t = rO(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var a = ds(n);
  return a;
}
function vs(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function eh(e) {
  $e(1, arguments);
  var t = Re(e);
  return t.setHours(0, 0, 0, 0), t;
}
var lO = 864e5;
function iO(e, t) {
  $e(2, arguments);
  var n = eh(e), a = eh(t), r = n.getTime() - vs(n), o = a.getTime() - vs(a);
  return Math.round((r - o) / lO);
}
function cb(e, t) {
  $e(2, arguments);
  var n = Ae(t);
  return oa(e, n * 12);
}
var Jd = 6e4, ev = 36e5, sO = 1e3;
function ui(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ui = function(n) {
    return typeof n;
  } : ui = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ui(e);
}
function fb(e) {
  return $e(1, arguments), e instanceof Date || ui(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Jo(e) {
  if ($e(1, arguments), !fb(e) && typeof e != "number")
    return !1;
  var t = Re(e);
  return !isNaN(Number(t));
}
function th(e, t) {
  var n;
  $e(1, arguments);
  var a = e || {}, r = Re(a.start), o = Re(a.end), l = o.getTime();
  if (!(r.getTime() <= l))
    throw new RangeError("Invalid interval");
  var i = [], s = r;
  s.setHours(0, 0, 0, 0);
  var u = Number((n = t == null ? void 0 : t.step) !== null && n !== void 0 ? n : 1);
  if (u < 1 || isNaN(u))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; s.getTime() <= l; )
    i.push(Re(s)), s.setDate(s.getDate() + u), s.setHours(0, 0, 0, 0);
  return i;
}
function uO(e, t) {
  var n, a, r, o, l, i, s, u;
  $e(1, arguments);
  var d = fa(), c = Ae((n = (a = (r = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (i = l.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && r !== void 0 ? r : d.weekStartsOn) !== null && a !== void 0 ? a : (s = d.locale) === null || s === void 0 || (u = s.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = Re(e), v = f.getDay(), y = (v < c ? -7 : 0) + 6 - (v - c);
  return f.setDate(f.getDate() + y), f.setHours(23, 59, 59, 999), f;
}
function db(e, t) {
  $e(2, arguments);
  var n = Ae(t);
  return nO(e, -n);
}
var cO = 864e5;
function fO(e) {
  $e(1, arguments);
  var t = Re(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var a = t.getTime(), r = n - a;
  return Math.floor(r / cO) + 1;
}
function vo(e) {
  $e(1, arguments);
  var t = 1, n = Re(e), a = n.getUTCDay(), r = (a < t ? 7 : 0) + a - t;
  return n.setUTCDate(n.getUTCDate() - r), n.setUTCHours(0, 0, 0, 0), n;
}
function vb(e) {
  $e(1, arguments);
  var t = Re(e), n = t.getUTCFullYear(), a = new Date(0);
  a.setUTCFullYear(n + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var r = vo(a), o = new Date(0);
  o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var l = vo(o);
  return t.getTime() >= r.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1;
}
function dO(e) {
  $e(1, arguments);
  var t = vb(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var a = vo(n);
  return a;
}
var vO = 6048e5;
function mb(e) {
  $e(1, arguments);
  var t = Re(e), n = vo(t).getTime() - dO(t).getTime();
  return Math.round(n / vO) + 1;
}
function Dr(e, t) {
  var n, a, r, o, l, i, s, u;
  $e(1, arguments);
  var d = fa(), c = Ae((n = (a = (r = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (i = l.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && r !== void 0 ? r : d.weekStartsOn) !== null && a !== void 0 ? a : (s = d.locale) === null || s === void 0 || (u = s.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = Re(e), v = f.getUTCDay(), y = (v < c ? 7 : 0) + v - c;
  return f.setUTCDate(f.getUTCDate() - y), f.setUTCHours(0, 0, 0, 0), f;
}
function tv(e, t) {
  var n, a, r, o, l, i, s, u;
  $e(1, arguments);
  var d = Re(e), c = d.getUTCFullYear(), f = fa(), v = Ae((n = (a = (r = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (i = l.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && r !== void 0 ? r : f.firstWeekContainsDate) !== null && a !== void 0 ? a : (s = f.locale) === null || s === void 0 || (u = s.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(v >= 1 && v <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var y = new Date(0);
  y.setUTCFullYear(c + 1, 0, v), y.setUTCHours(0, 0, 0, 0);
  var p = Dr(y, t), x = new Date(0);
  x.setUTCFullYear(c, 0, v), x.setUTCHours(0, 0, 0, 0);
  var O = Dr(x, t);
  return d.getTime() >= p.getTime() ? c + 1 : d.getTime() >= O.getTime() ? c : c - 1;
}
function mO(e, t) {
  var n, a, r, o, l, i, s, u;
  $e(1, arguments);
  var d = fa(), c = Ae((n = (a = (r = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (i = l.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && r !== void 0 ? r : d.firstWeekContainsDate) !== null && a !== void 0 ? a : (s = d.locale) === null || s === void 0 || (u = s.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = tv(e, t), v = new Date(0);
  v.setUTCFullYear(f, 0, c), v.setUTCHours(0, 0, 0, 0);
  var y = Dr(v, t);
  return y;
}
var hO = 6048e5;
function hb(e, t) {
  $e(1, arguments);
  var n = Re(e), a = Dr(n, t).getTime() - mO(n, t).getTime();
  return Math.round(a / hO) + 1;
}
function ot(e, t) {
  for (var n = e < 0 ? "-" : "", a = Math.abs(e).toString(); a.length < t; )
    a = "0" + a;
  return n + a;
}
var yO = {
  // Year
  y: function(t, n) {
    var a = t.getUTCFullYear(), r = a > 0 ? a : 1 - a;
    return ot(n === "yy" ? r % 100 : r, n.length);
  },
  // Month
  M: function(t, n) {
    var a = t.getUTCMonth();
    return n === "M" ? String(a + 1) : ot(a + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return ot(t.getUTCDate(), n.length);
  },
  // AM or PM
  a: function(t, n) {
    var a = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return a.toUpperCase();
      case "aaa":
        return a;
      case "aaaaa":
        return a[0];
      case "aaaa":
      default:
        return a === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(t, n) {
    return ot(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return ot(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return ot(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return ot(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var a = n.length, r = t.getUTCMilliseconds(), o = Math.floor(r * Math.pow(10, a - 3));
    return ot(o, n.length);
  }
};
const Aa = yO;
var Gr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, pO = {
  // Era
  G: function(t, n, a) {
    var r = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return a.era(r, {
          width: "abbreviated"
        });
      case "GGGGG":
        return a.era(r, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return a.era(r, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, n, a) {
    if (n === "yo") {
      var r = t.getUTCFullYear(), o = r > 0 ? r : 1 - r;
      return a.ordinalNumber(o, {
        unit: "year"
      });
    }
    return Aa.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, a, r) {
    var o = tv(t, r), l = o > 0 ? o : 1 - o;
    if (n === "YY") {
      var i = l % 100;
      return ot(i, 2);
    }
    return n === "Yo" ? a.ordinalNumber(l, {
      unit: "year"
    }) : ot(l, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var a = vb(t);
    return ot(a, n.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, n) {
    var a = t.getUTCFullYear();
    return ot(a, n.length);
  },
  // Quarter
  Q: function(t, n, a) {
    var r = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(r);
      case "QQ":
        return ot(r, 2);
      case "Qo":
        return a.ordinalNumber(r, {
          unit: "quarter"
        });
      case "QQQ":
        return a.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return a.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return a.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, n, a) {
    var r = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(r);
      case "qq":
        return ot(r, 2);
      case "qo":
        return a.ordinalNumber(r, {
          unit: "quarter"
        });
      case "qqq":
        return a.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return a.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return a.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, n, a) {
    var r = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return Aa.M(t, n);
      case "Mo":
        return a.ordinalNumber(r + 1, {
          unit: "month"
        });
      case "MMM":
        return a.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return a.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return a.month(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, n, a) {
    var r = t.getUTCMonth();
    switch (n) {
      case "L":
        return String(r + 1);
      case "LL":
        return ot(r + 1, 2);
      case "Lo":
        return a.ordinalNumber(r + 1, {
          unit: "month"
        });
      case "LLL":
        return a.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return a.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return a.month(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, n, a, r) {
    var o = hb(t, r);
    return n === "wo" ? a.ordinalNumber(o, {
      unit: "week"
    }) : ot(o, n.length);
  },
  // ISO week of year
  I: function(t, n, a) {
    var r = mb(t);
    return n === "Io" ? a.ordinalNumber(r, {
      unit: "week"
    }) : ot(r, n.length);
  },
  // Day of the month
  d: function(t, n, a) {
    return n === "do" ? a.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Aa.d(t, n);
  },
  // Day of year
  D: function(t, n, a) {
    var r = fO(t);
    return n === "Do" ? a.ordinalNumber(r, {
      unit: "dayOfYear"
    }) : ot(r, n.length);
  },
  // Day of week
  E: function(t, n, a) {
    var r = t.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return a.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return a.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return a.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return a.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, n, a, r) {
    var o = t.getUTCDay(), l = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(l);
      case "ee":
        return ot(l, 2);
      case "eo":
        return a.ordinalNumber(l, {
          unit: "day"
        });
      case "eee":
        return a.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return a.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return a.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return a.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, n, a, r) {
    var o = t.getUTCDay(), l = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(l);
      case "cc":
        return ot(l, n.length);
      case "co":
        return a.ordinalNumber(l, {
          unit: "day"
        });
      case "ccc":
        return a.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return a.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return a.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return a.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, n, a) {
    var r = t.getUTCDay(), o = r === 0 ? 7 : r;
    switch (n) {
      case "i":
        return String(o);
      case "ii":
        return ot(o, n.length);
      case "io":
        return a.ordinalNumber(o, {
          unit: "day"
        });
      case "iii":
        return a.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return a.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return a.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return a.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, n, a) {
    var r = t.getUTCHours(), o = r / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return a.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return a.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return a.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, n, a) {
    var r = t.getUTCHours(), o;
    switch (r === 12 ? o = Gr.noon : r === 0 ? o = Gr.midnight : o = r / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return a.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return a.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return a.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, n, a) {
    var r = t.getUTCHours(), o;
    switch (r >= 17 ? o = Gr.evening : r >= 12 ? o = Gr.afternoon : r >= 4 ? o = Gr.morning : o = Gr.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, n, a) {
    if (n === "ho") {
      var r = t.getUTCHours() % 12;
      return r === 0 && (r = 12), a.ordinalNumber(r, {
        unit: "hour"
      });
    }
    return Aa.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, a) {
    return n === "Ho" ? a.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Aa.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, a) {
    var r = t.getUTCHours() % 12;
    return n === "Ko" ? a.ordinalNumber(r, {
      unit: "hour"
    }) : ot(r, n.length);
  },
  // Hour [1-24]
  k: function(t, n, a) {
    var r = t.getUTCHours();
    return r === 0 && (r = 24), n === "ko" ? a.ordinalNumber(r, {
      unit: "hour"
    }) : ot(r, n.length);
  },
  // Minute
  m: function(t, n, a) {
    return n === "mo" ? a.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Aa.m(t, n);
  },
  // Second
  s: function(t, n, a) {
    return n === "so" ? a.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Aa.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return Aa.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, a, r) {
    var o = r._originalDate || t, l = o.getTimezoneOffset();
    if (l === 0)
      return "Z";
    switch (n) {
      case "X":
        return ah(l);
      case "XXXX":
      case "XX":
        return cr(l);
      case "XXXXX":
      case "XXX":
      default:
        return cr(l, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, a, r) {
    var o = r._originalDate || t, l = o.getTimezoneOffset();
    switch (n) {
      case "x":
        return ah(l);
      case "xxxx":
      case "xx":
        return cr(l);
      case "xxxxx":
      case "xxx":
      default:
        return cr(l, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, a, r) {
    var o = r._originalDate || t, l = o.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + nh(l, ":");
      case "OOOO":
      default:
        return "GMT" + cr(l, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, a, r) {
    var o = r._originalDate || t, l = o.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + nh(l, ":");
      case "zzzz":
      default:
        return "GMT" + cr(l, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, a, r) {
    var o = r._originalDate || t, l = Math.floor(o.getTime() / 1e3);
    return ot(l, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, a, r) {
    var o = r._originalDate || t, l = o.getTime();
    return ot(l, n.length);
  }
};
function nh(e, t) {
  var n = e > 0 ? "-" : "+", a = Math.abs(e), r = Math.floor(a / 60), o = a % 60;
  if (o === 0)
    return n + String(r);
  var l = t || "";
  return n + String(r) + l + ot(o, 2);
}
function ah(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + ot(Math.abs(e) / 60, 2);
  }
  return cr(e, t);
}
function cr(e, t) {
  var n = t || "", a = e > 0 ? "-" : "+", r = Math.abs(e), o = ot(Math.floor(r / 60), 2), l = ot(r % 60, 2);
  return a + o + n + l;
}
const gO = pO;
var rh = function(t, n) {
  switch (t) {
    case "P":
      return n.date({
        width: "short"
      });
    case "PP":
      return n.date({
        width: "medium"
      });
    case "PPP":
      return n.date({
        width: "long"
      });
    case "PPPP":
    default:
      return n.date({
        width: "full"
      });
  }
}, yb = function(t, n) {
  switch (t) {
    case "p":
      return n.time({
        width: "short"
      });
    case "pp":
      return n.time({
        width: "medium"
      });
    case "ppp":
      return n.time({
        width: "long"
      });
    case "pppp":
    default:
      return n.time({
        width: "full"
      });
  }
}, bO = function(t, n) {
  var a = t.match(/(P+)(p+)?/) || [], r = a[1], o = a[2];
  if (!o)
    return rh(t, n);
  var l;
  switch (r) {
    case "P":
      l = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      l = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      l = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      l = n.dateTime({
        width: "full"
      });
      break;
  }
  return l.replace("{{date}}", rh(r, n)).replace("{{time}}", yb(o, n));
}, _O = {
  p: yb,
  P: bO
};
const Gc = _O;
var wO = ["D", "DD"], SO = ["YY", "YYYY"];
function pb(e) {
  return wO.indexOf(e) !== -1;
}
function gb(e) {
  return SO.indexOf(e) !== -1;
}
function ms(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var kO = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, xO = function(t, n, a) {
  var r, o = kO[t];
  return typeof o == "string" ? r = o : n === 1 ? r = o.one : r = o.other.replace("{{count}}", n.toString()), a != null && a.addSuffix ? a.comparison && a.comparison > 0 ? "in " + r : r + " ago" : r;
};
const OO = xO;
function Xu(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, a = e.formats[n] || e.formats[e.defaultWidth];
    return a;
  };
}
var CO = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, EO = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, $O = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, PO = {
  date: Xu({
    formats: CO,
    defaultWidth: "full"
  }),
  time: Xu({
    formats: EO,
    defaultWidth: "full"
  }),
  dateTime: Xu({
    formats: $O,
    defaultWidth: "full"
  })
};
const TO = PO;
var NO = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, DO = function(t, n, a, r) {
  return NO[t];
};
const VO = DO;
function Bo(e) {
  return function(t, n) {
    var a = n != null && n.context ? String(n.context) : "standalone", r;
    if (a === "formatting" && e.formattingValues) {
      var o = e.defaultFormattingWidth || e.defaultWidth, l = n != null && n.width ? String(n.width) : o;
      r = e.formattingValues[l] || e.formattingValues[o];
    } else {
      var i = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      r = e.values[s] || e.values[i];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return r[u];
  };
}
var IO = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, AO = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, MO = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, RO = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, BO = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, FO = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, LO = function(t, n) {
  var a = Number(t), r = a % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return a + "st";
      case 2:
        return a + "nd";
      case 3:
        return a + "rd";
    }
  return a + "th";
}, jO = {
  ordinalNumber: LO,
  era: Bo({
    values: IO,
    defaultWidth: "wide"
  }),
  quarter: Bo({
    values: AO,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Bo({
    values: MO,
    defaultWidth: "wide"
  }),
  day: Bo({
    values: RO,
    defaultWidth: "wide"
  }),
  dayPeriod: Bo({
    values: BO,
    defaultWidth: "wide",
    formattingValues: FO,
    defaultFormattingWidth: "wide"
  })
};
const HO = jO;
function Fo(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.width, r = a && e.matchPatterns[a] || e.matchPatterns[e.defaultMatchWidth], o = t.match(r);
    if (!o)
      return null;
    var l = o[0], i = a && e.parsePatterns[a] || e.parsePatterns[e.defaultParseWidth], s = Array.isArray(i) ? YO(i, function(c) {
      return c.test(l);
    }) : UO(i, function(c) {
      return c.test(l);
    }), u;
    u = e.valueCallback ? e.valueCallback(s) : s, u = n.valueCallback ? n.valueCallback(u) : u;
    var d = t.slice(l.length);
    return {
      value: u,
      rest: d
    };
  };
}
function UO(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function YO(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function WO(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.match(e.matchPattern);
    if (!a)
      return null;
    var r = a[0], o = t.match(e.parsePattern);
    if (!o)
      return null;
    var l = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    l = n.valueCallback ? n.valueCallback(l) : l;
    var i = t.slice(r.length);
    return {
      value: l,
      rest: i
    };
  };
}
var zO = /^(\d+)(th|st|nd|rd)?/i, qO = /\d+/i, GO = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, KO = {
  any: [/^b/i, /^(a|c)/i]
}, XO = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, QO = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ZO = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, JO = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, eC = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, tC = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, nC = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, aC = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, rC = {
  ordinalNumber: WO({
    matchPattern: zO,
    parsePattern: qO,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Fo({
    matchPatterns: GO,
    defaultMatchWidth: "wide",
    parsePatterns: KO,
    defaultParseWidth: "any"
  }),
  quarter: Fo({
    matchPatterns: XO,
    defaultMatchWidth: "wide",
    parsePatterns: QO,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Fo({
    matchPatterns: ZO,
    defaultMatchWidth: "wide",
    parsePatterns: JO,
    defaultParseWidth: "any"
  }),
  day: Fo({
    matchPatterns: eC,
    defaultMatchWidth: "wide",
    parsePatterns: tC,
    defaultParseWidth: "any"
  }),
  dayPeriod: Fo({
    matchPatterns: nC,
    defaultMatchWidth: "any",
    parsePatterns: aC,
    defaultParseWidth: "any"
  })
};
const oC = rC;
var lC = {
  code: "en-US",
  formatDistance: OO,
  formatLong: TO,
  formatRelative: VO,
  localize: HO,
  match: oC,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const bb = lC;
var iC = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, sC = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, uC = /^'([^]*?)'?$/, cC = /''/g, fC = /[a-zA-Z]/;
function el(e, t, n) {
  var a, r, o, l, i, s, u, d, c, f, v, y, p, x, O, E, S, N;
  $e(2, arguments);
  var V = String(t), $ = fa(), k = (a = (r = n == null ? void 0 : n.locale) !== null && r !== void 0 ? r : $.locale) !== null && a !== void 0 ? a : bb, g = Ae((o = (l = (i = (s = n == null ? void 0 : n.firstWeekContainsDate) !== null && s !== void 0 ? s : n == null || (u = n.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && i !== void 0 ? i : $.firstWeekContainsDate) !== null && l !== void 0 ? l : (c = $.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(g >= 1 && g <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var b = Ae((v = (y = (p = (x = n == null ? void 0 : n.weekStartsOn) !== null && x !== void 0 ? x : n == null || (O = n.locale) === null || O === void 0 || (E = O.options) === null || E === void 0 ? void 0 : E.weekStartsOn) !== null && p !== void 0 ? p : $.weekStartsOn) !== null && y !== void 0 ? y : (S = $.locale) === null || S === void 0 || (N = S.options) === null || N === void 0 ? void 0 : N.weekStartsOn) !== null && v !== void 0 ? v : 0);
  if (!(b >= 0 && b <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!k.localize)
    throw new RangeError("locale must contain localize property");
  if (!k.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var w = Re(e);
  if (!Jo(w))
    throw new RangeError("Invalid time value");
  var C = vs(w), T = db(w, C), A = {
    firstWeekContainsDate: g,
    weekStartsOn: b,
    locale: k,
    _originalDate: w
  }, z = V.match(sC).map(function(U) {
    var B = U[0];
    if (B === "p" || B === "P") {
      var h = Gc[B];
      return h(U, k.formatLong);
    }
    return U;
  }).join("").match(iC).map(function(U) {
    if (U === "''")
      return "'";
    var B = U[0];
    if (B === "'")
      return dC(U);
    var h = gO[B];
    if (h)
      return !(n != null && n.useAdditionalWeekYearTokens) && gb(U) && ms(U, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && pb(U) && ms(U, t, String(e)), h(T, U, k.localize, A);
    if (B.match(fC))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + B + "`");
    return U;
  }).join("");
  return z;
}
function dC(e) {
  var t = e.match(uC);
  return t ? t[1].replace(cC, "'") : e;
}
function vC(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function mC(e) {
  $e(1, arguments);
  var t = Re(e), n = t.getDay();
  return n;
}
function hC(e) {
  $e(1, arguments);
  var t = Re(e), n = t.getFullYear(), a = t.getMonth(), r = new Date(0);
  return r.setFullYear(n, a + 1, 0), r.setHours(0, 0, 0, 0), r.getDate();
}
function pa(e) {
  $e(1, arguments);
  var t = Re(e), n = t.getHours();
  return n;
}
var yC = 6048e5;
function pC(e) {
  $e(1, arguments);
  var t = Re(e), n = ds(t).getTime() - oO(t).getTime();
  return Math.round(n / yC) + 1;
}
function ga(e) {
  $e(1, arguments);
  var t = Re(e), n = t.getMinutes();
  return n;
}
function vt(e) {
  $e(1, arguments);
  var t = Re(e), n = t.getMonth();
  return n;
}
function mo(e) {
  $e(1, arguments);
  var t = Re(e), n = t.getSeconds();
  return n;
}
function gC(e, t) {
  var n, a, r, o, l, i, s, u;
  $e(1, arguments);
  var d = Re(e), c = d.getFullYear(), f = fa(), v = Ae((n = (a = (r = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (i = l.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && r !== void 0 ? r : f.firstWeekContainsDate) !== null && a !== void 0 ? a : (s = f.locale) === null || s === void 0 || (u = s.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(v >= 1 && v <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var y = new Date(0);
  y.setFullYear(c + 1, 0, v), y.setHours(0, 0, 0, 0);
  var p = Nr(y, t), x = new Date(0);
  x.setFullYear(c, 0, v), x.setHours(0, 0, 0, 0);
  var O = Nr(x, t);
  return d.getTime() >= p.getTime() ? c + 1 : d.getTime() >= O.getTime() ? c : c - 1;
}
function bC(e, t) {
  var n, a, r, o, l, i, s, u;
  $e(1, arguments);
  var d = fa(), c = Ae((n = (a = (r = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (l = t.locale) === null || l === void 0 || (i = l.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && r !== void 0 ? r : d.firstWeekContainsDate) !== null && a !== void 0 ? a : (s = d.locale) === null || s === void 0 || (u = s.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = gC(e, t), v = new Date(0);
  v.setFullYear(f, 0, c), v.setHours(0, 0, 0, 0);
  var y = Nr(v, t);
  return y;
}
var _C = 6048e5;
function wC(e, t) {
  $e(1, arguments);
  var n = Re(e), a = Nr(n, t).getTime() - bC(n, t).getTime();
  return Math.round(a / _C) + 1;
}
function mt(e) {
  return $e(1, arguments), Re(e).getFullYear();
}
function nv(e, t) {
  $e(2, arguments);
  var n = Re(e), a = Re(t);
  return n.getTime() > a.getTime();
}
function av(e, t) {
  $e(2, arguments);
  var n = Re(e), a = Re(t);
  return n.getTime() < a.getTime();
}
function _b(e, t) {
  $e(2, arguments);
  var n = Re(e), a = Re(t);
  return n.getTime() === a.getTime();
}
function ci(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ci = function(n) {
    return typeof n;
  } : ci = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ci(e);
}
function wb(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Kc(e, t);
}
function Kc(e, t) {
  return Kc = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Kc(e, t);
}
function Sb(e) {
  var t = kC();
  return function() {
    var a = hs(e), r;
    if (t) {
      var o = hs(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return SC(this, r);
  };
}
function SC(e, t) {
  return t && (ci(t) === "object" || typeof t == "function") ? t : Xc(e);
}
function Xc(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kC() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function hs(e) {
  return hs = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, hs(e);
}
function rv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function ov(e, t, n) {
  return t && oh(e.prototype, t), n && oh(e, n), e;
}
function Qc(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var xC = 10, kb = /* @__PURE__ */ function() {
  function e() {
    rv(this, e), Qc(this, "subPriority", 0);
  }
  return ov(e, [{
    key: "validate",
    value: function(n, a) {
      return !0;
    }
  }]), e;
}(), OC = /* @__PURE__ */ function(e) {
  wb(n, e);
  var t = Sb(n);
  function n(a, r, o, l, i) {
    var s;
    return rv(this, n), s = t.call(this), s.value = a, s.validateValue = r, s.setValue = o, s.priority = l, i && (s.subPriority = i), s;
  }
  return ov(n, [{
    key: "validate",
    value: function(r, o) {
      return this.validateValue(r, this.value, o);
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return this.setValue(r, o, this.value, l);
    }
  }]), n;
}(kb), CC = /* @__PURE__ */ function(e) {
  wb(n, e);
  var t = Sb(n);
  function n() {
    var a;
    rv(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), Qc(Xc(a), "priority", xC), Qc(Xc(a), "subPriority", -1), a;
  }
  return ov(n, [{
    key: "set",
    value: function(r, o) {
      if (o.timestampIsSet)
        return r;
      var l = new Date(0);
      return l.setFullYear(r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()), l.setHours(r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.getUTCMilliseconds()), l;
    }
  }]), n;
}(kb);
function EC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function $C(e, t, n) {
  return t && lh(e.prototype, t), n && lh(e, n), e;
}
var rt = /* @__PURE__ */ function() {
  function e() {
    EC(this, e);
  }
  return $C(e, [{
    key: "run",
    value: function(n, a, r, o) {
      var l = this.parse(n, a, r, o);
      return l ? {
        setter: new OC(l.value, this.validate, this.set, this.priority, this.subPriority),
        rest: l.rest
      } : null;
    }
  }, {
    key: "validate",
    value: function(n, a, r) {
      return !0;
    }
  }]), e;
}();
function fi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fi = function(n) {
    return typeof n;
  } : fi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, fi(e);
}
function PC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ih(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function TC(e, t, n) {
  return t && ih(e.prototype, t), n && ih(e, n), e;
}
function NC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Zc(e, t);
}
function Zc(e, t) {
  return Zc = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Zc(e, t);
}
function DC(e) {
  var t = IC();
  return function() {
    var a = ys(e), r;
    if (t) {
      var o = ys(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return VC(this, r);
  };
}
function VC(e, t) {
  return t && (fi(t) === "object" || typeof t == "function") ? t : Jc(e);
}
function Jc(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function IC() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ys(e) {
  return ys = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ys(e);
}
function sh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var AC = /* @__PURE__ */ function(e) {
  NC(n, e);
  var t = DC(n);
  function n() {
    var a;
    PC(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), sh(Jc(a), "priority", 140), sh(Jc(a), "incompatibleTokens", ["R", "u", "t", "T"]), a;
  }
  return TC(n, [{
    key: "parse",
    value: function(r, o, l) {
      switch (o) {
        case "G":
        case "GG":
        case "GGG":
          return l.era(r, {
            width: "abbreviated"
          }) || l.era(r, {
            width: "narrow"
          });
        case "GGGGG":
          return l.era(r, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return l.era(r, {
            width: "wide"
          }) || l.era(r, {
            width: "abbreviated"
          }) || l.era(r, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return o.era = l, r.setUTCFullYear(l, 0, 1), r.setUTCHours(0, 0, 0, 0), r;
    }
  }]), n;
}(rt), Et = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, aa = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function $t(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function gt(e, t) {
  var n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function ra(e, t) {
  var n = t.match(e);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  var a = n[1] === "+" ? 1 : -1, r = n[2] ? parseInt(n[2], 10) : 0, o = n[3] ? parseInt(n[3], 10) : 0, l = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: a * (r * ev + o * Jd + l * sO),
    rest: t.slice(n[0].length)
  };
}
function xb(e) {
  return gt(Et.anyDigitsSigned, e);
}
function St(e, t) {
  switch (e) {
    case 1:
      return gt(Et.singleDigit, t);
    case 2:
      return gt(Et.twoDigits, t);
    case 3:
      return gt(Et.threeDigits, t);
    case 4:
      return gt(Et.fourDigits, t);
    default:
      return gt(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function ps(e, t) {
  switch (e) {
    case 1:
      return gt(Et.singleDigitSigned, t);
    case 2:
      return gt(Et.twoDigitsSigned, t);
    case 3:
      return gt(Et.threeDigitsSigned, t);
    case 4:
      return gt(Et.fourDigitsSigned, t);
    default:
      return gt(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function lv(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Ob(e, t) {
  var n = t > 0, a = n ? t : 1 - t, r;
  if (a <= 50)
    r = e || 100;
  else {
    var o = a + 50, l = Math.floor(o / 100) * 100, i = e >= o % 100;
    r = e + l - (i ? 100 : 0);
  }
  return n ? r : 1 - r;
}
function Cb(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function di(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? di = function(n) {
    return typeof n;
  } : di = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, di(e);
}
function MC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function uh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function RC(e, t, n) {
  return t && uh(e.prototype, t), n && uh(e, n), e;
}
function BC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ef(e, t);
}
function ef(e, t) {
  return ef = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, ef(e, t);
}
function FC(e) {
  var t = jC();
  return function() {
    var a = gs(e), r;
    if (t) {
      var o = gs(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return LC(this, r);
  };
}
function LC(e, t) {
  return t && (di(t) === "object" || typeof t == "function") ? t : tf(e);
}
function tf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jC() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function gs(e) {
  return gs = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, gs(e);
}
function ch(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var HC = /* @__PURE__ */ function(e) {
  BC(n, e);
  var t = FC(n);
  function n() {
    var a;
    MC(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), ch(tf(a), "priority", 130), ch(tf(a), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), a;
  }
  return RC(n, [{
    key: "parse",
    value: function(r, o, l) {
      var i = function(u) {
        return {
          year: u,
          isTwoDigitYear: o === "yy"
        };
      };
      switch (o) {
        case "y":
          return $t(St(4, r), i);
        case "yo":
          return $t(l.ordinalNumber(r, {
            unit: "year"
          }), i);
        default:
          return $t(St(o.length, r), i);
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      return o.isTwoDigitYear || o.year > 0;
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      var i = r.getUTCFullYear();
      if (l.isTwoDigitYear) {
        var s = Ob(l.year, i);
        return r.setUTCFullYear(s, 0, 1), r.setUTCHours(0, 0, 0, 0), r;
      }
      var u = !("era" in o) || o.era === 1 ? l.year : 1 - l.year;
      return r.setUTCFullYear(u, 0, 1), r.setUTCHours(0, 0, 0, 0), r;
    }
  }]), n;
}(rt);
function vi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? vi = function(n) {
    return typeof n;
  } : vi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, vi(e);
}
function UC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function YC(e, t, n) {
  return t && fh(e.prototype, t), n && fh(e, n), e;
}
function WC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && nf(e, t);
}
function nf(e, t) {
  return nf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, nf(e, t);
}
function zC(e) {
  var t = GC();
  return function() {
    var a = bs(e), r;
    if (t) {
      var o = bs(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return qC(this, r);
  };
}
function qC(e, t) {
  return t && (vi(t) === "object" || typeof t == "function") ? t : af(e);
}
function af(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function GC() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function bs(e) {
  return bs = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, bs(e);
}
function dh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var KC = /* @__PURE__ */ function(e) {
  WC(n, e);
  var t = zC(n);
  function n() {
    var a;
    UC(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), dh(af(a), "priority", 130), dh(af(a), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), a;
  }
  return YC(n, [{
    key: "parse",
    value: function(r, o, l) {
      var i = function(u) {
        return {
          year: u,
          isTwoDigitYear: o === "YY"
        };
      };
      switch (o) {
        case "Y":
          return $t(St(4, r), i);
        case "Yo":
          return $t(l.ordinalNumber(r, {
            unit: "year"
          }), i);
        default:
          return $t(St(o.length, r), i);
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      return o.isTwoDigitYear || o.year > 0;
    }
  }, {
    key: "set",
    value: function(r, o, l, i) {
      var s = tv(r, i);
      if (l.isTwoDigitYear) {
        var u = Ob(l.year, s);
        return r.setUTCFullYear(u, 0, i.firstWeekContainsDate), r.setUTCHours(0, 0, 0, 0), Dr(r, i);
      }
      var d = !("era" in o) || o.era === 1 ? l.year : 1 - l.year;
      return r.setUTCFullYear(d, 0, i.firstWeekContainsDate), r.setUTCHours(0, 0, 0, 0), Dr(r, i);
    }
  }]), n;
}(rt);
function mi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? mi = function(n) {
    return typeof n;
  } : mi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, mi(e);
}
function XC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function QC(e, t, n) {
  return t && vh(e.prototype, t), n && vh(e, n), e;
}
function ZC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && rf(e, t);
}
function rf(e, t) {
  return rf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, rf(e, t);
}
function JC(e) {
  var t = tE();
  return function() {
    var a = _s(e), r;
    if (t) {
      var o = _s(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return eE(this, r);
  };
}
function eE(e, t) {
  return t && (mi(t) === "object" || typeof t == "function") ? t : of(e);
}
function of(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tE() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function _s(e) {
  return _s = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, _s(e);
}
function mh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var nE = /* @__PURE__ */ function(e) {
  ZC(n, e);
  var t = JC(n);
  function n() {
    var a;
    XC(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), mh(of(a), "priority", 130), mh(of(a), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), a;
  }
  return QC(n, [{
    key: "parse",
    value: function(r, o) {
      return ps(o === "R" ? 4 : o.length, r);
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      var i = new Date(0);
      return i.setUTCFullYear(l, 0, 4), i.setUTCHours(0, 0, 0, 0), vo(i);
    }
  }]), n;
}(rt);
function hi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? hi = function(n) {
    return typeof n;
  } : hi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, hi(e);
}
function aE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function rE(e, t, n) {
  return t && hh(e.prototype, t), n && hh(e, n), e;
}
function oE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && lf(e, t);
}
function lf(e, t) {
  return lf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, lf(e, t);
}
function lE(e) {
  var t = sE();
  return function() {
    var a = ws(e), r;
    if (t) {
      var o = ws(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return iE(this, r);
  };
}
function iE(e, t) {
  return t && (hi(t) === "object" || typeof t == "function") ? t : sf(e);
}
function sf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sE() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ws(e) {
  return ws = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ws(e);
}
function yh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var uE = /* @__PURE__ */ function(e) {
  oE(n, e);
  var t = lE(n);
  function n() {
    var a;
    aE(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), yh(sf(a), "priority", 130), yh(sf(a), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), a;
  }
  return rE(n, [{
    key: "parse",
    value: function(r, o) {
      return ps(o === "u" ? 4 : o.length, r);
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return r.setUTCFullYear(l, 0, 1), r.setUTCHours(0, 0, 0, 0), r;
    }
  }]), n;
}(rt);
function yi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? yi = function(n) {
    return typeof n;
  } : yi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, yi(e);
}
function cE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ph(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function fE(e, t, n) {
  return t && ph(e.prototype, t), n && ph(e, n), e;
}
function dE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && uf(e, t);
}
function uf(e, t) {
  return uf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, uf(e, t);
}
function vE(e) {
  var t = hE();
  return function() {
    var a = Ss(e), r;
    if (t) {
      var o = Ss(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return mE(this, r);
  };
}
function mE(e, t) {
  return t && (yi(t) === "object" || typeof t == "function") ? t : cf(e);
}
function cf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hE() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ss(e) {
  return Ss = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ss(e);
}
function gh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var yE = /* @__PURE__ */ function(e) {
  dE(n, e);
  var t = vE(n);
  function n() {
    var a;
    cE(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), gh(cf(a), "priority", 120), gh(cf(a), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), a;
  }
  return fE(n, [{
    key: "parse",
    value: function(r, o, l) {
      switch (o) {
        case "Q":
        case "QQ":
          return St(o.length, r);
        case "Qo":
          return l.ordinalNumber(r, {
            unit: "quarter"
          });
        case "QQQ":
          return l.quarter(r, {
            width: "abbreviated",
            context: "formatting"
          }) || l.quarter(r, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return l.quarter(r, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return l.quarter(r, {
            width: "wide",
            context: "formatting"
          }) || l.quarter(r, {
            width: "abbreviated",
            context: "formatting"
          }) || l.quarter(r, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      return o >= 1 && o <= 4;
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return r.setUTCMonth((l - 1) * 3, 1), r.setUTCHours(0, 0, 0, 0), r;
    }
  }]), n;
}(rt);
function pi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? pi = function(n) {
    return typeof n;
  } : pi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, pi(e);
}
function pE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function gE(e, t, n) {
  return t && bh(e.prototype, t), n && bh(e, n), e;
}
function bE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ff(e, t);
}
function ff(e, t) {
  return ff = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, ff(e, t);
}
function _E(e) {
  var t = SE();
  return function() {
    var a = ks(e), r;
    if (t) {
      var o = ks(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return wE(this, r);
  };
}
function wE(e, t) {
  return t && (pi(t) === "object" || typeof t == "function") ? t : df(e);
}
function df(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function SE() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ks(e) {
  return ks = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ks(e);
}
function _h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var kE = /* @__PURE__ */ function(e) {
  bE(n, e);
  var t = _E(n);
  function n() {
    var a;
    pE(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), _h(df(a), "priority", 120), _h(df(a), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), a;
  }
  return gE(n, [{
    key: "parse",
    value: function(r, o, l) {
      switch (o) {
        case "q":
        case "qq":
          return St(o.length, r);
        case "qo":
          return l.ordinalNumber(r, {
            unit: "quarter"
          });
        case "qqq":
          return l.quarter(r, {
            width: "abbreviated",
            context: "standalone"
          }) || l.quarter(r, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return l.quarter(r, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return l.quarter(r, {
            width: "wide",
            context: "standalone"
          }) || l.quarter(r, {
            width: "abbreviated",
            context: "standalone"
          }) || l.quarter(r, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      return o >= 1 && o <= 4;
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return r.setUTCMonth((l - 1) * 3, 1), r.setUTCHours(0, 0, 0, 0), r;
    }
  }]), n;
}(rt);
function gi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? gi = function(n) {
    return typeof n;
  } : gi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, gi(e);
}
function xE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function OE(e, t, n) {
  return t && wh(e.prototype, t), n && wh(e, n), e;
}
function CE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && vf(e, t);
}
function vf(e, t) {
  return vf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, vf(e, t);
}
function EE(e) {
  var t = PE();
  return function() {
    var a = xs(e), r;
    if (t) {
      var o = xs(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return $E(this, r);
  };
}
function $E(e, t) {
  return t && (gi(t) === "object" || typeof t == "function") ? t : mf(e);
}
function mf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function PE() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function xs(e) {
  return xs = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, xs(e);
}
function Sh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var TE = /* @__PURE__ */ function(e) {
  CE(n, e);
  var t = EE(n);
  function n() {
    var a;
    xE(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), Sh(mf(a), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), Sh(mf(a), "priority", 110), a;
  }
  return OE(n, [{
    key: "parse",
    value: function(r, o, l) {
      var i = function(u) {
        return u - 1;
      };
      switch (o) {
        case "M":
          return $t(gt(Et.month, r), i);
        case "MM":
          return $t(St(2, r), i);
        case "Mo":
          return $t(l.ordinalNumber(r, {
            unit: "month"
          }), i);
        case "MMM":
          return l.month(r, {
            width: "abbreviated",
            context: "formatting"
          }) || l.month(r, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return l.month(r, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return l.month(r, {
            width: "wide",
            context: "formatting"
          }) || l.month(r, {
            width: "abbreviated",
            context: "formatting"
          }) || l.month(r, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      return o >= 0 && o <= 11;
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return r.setUTCMonth(l, 1), r.setUTCHours(0, 0, 0, 0), r;
    }
  }]), n;
}(rt);
function bi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? bi = function(n) {
    return typeof n;
  } : bi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, bi(e);
}
function NE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function kh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function DE(e, t, n) {
  return t && kh(e.prototype, t), n && kh(e, n), e;
}
function VE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && hf(e, t);
}
function hf(e, t) {
  return hf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, hf(e, t);
}
function IE(e) {
  var t = ME();
  return function() {
    var a = Os(e), r;
    if (t) {
      var o = Os(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return AE(this, r);
  };
}
function AE(e, t) {
  return t && (bi(t) === "object" || typeof t == "function") ? t : yf(e);
}
function yf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ME() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Os(e) {
  return Os = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Os(e);
}
function xh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var RE = /* @__PURE__ */ function(e) {
  VE(n, e);
  var t = IE(n);
  function n() {
    var a;
    NE(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), xh(yf(a), "priority", 110), xh(yf(a), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), a;
  }
  return DE(n, [{
    key: "parse",
    value: function(r, o, l) {
      var i = function(u) {
        return u - 1;
      };
      switch (o) {
        case "L":
          return $t(gt(Et.month, r), i);
        case "LL":
          return $t(St(2, r), i);
        case "Lo":
          return $t(l.ordinalNumber(r, {
            unit: "month"
          }), i);
        case "LLL":
          return l.month(r, {
            width: "abbreviated",
            context: "standalone"
          }) || l.month(r, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return l.month(r, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return l.month(r, {
            width: "wide",
            context: "standalone"
          }) || l.month(r, {
            width: "abbreviated",
            context: "standalone"
          }) || l.month(r, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      return o >= 0 && o <= 11;
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return r.setUTCMonth(l, 1), r.setUTCHours(0, 0, 0, 0), r;
    }
  }]), n;
}(rt);
function BE(e, t, n) {
  $e(2, arguments);
  var a = Re(e), r = Ae(t), o = hb(a, n) - r;
  return a.setUTCDate(a.getUTCDate() - o * 7), a;
}
function _i(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _i = function(n) {
    return typeof n;
  } : _i = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, _i(e);
}
function FE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Oh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function LE(e, t, n) {
  return t && Oh(e.prototype, t), n && Oh(e, n), e;
}
function jE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && pf(e, t);
}
function pf(e, t) {
  return pf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, pf(e, t);
}
function HE(e) {
  var t = YE();
  return function() {
    var a = Cs(e), r;
    if (t) {
      var o = Cs(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return UE(this, r);
  };
}
function UE(e, t) {
  return t && (_i(t) === "object" || typeof t == "function") ? t : gf(e);
}
function gf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function YE() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Cs(e) {
  return Cs = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Cs(e);
}
function Ch(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var WE = /* @__PURE__ */ function(e) {
  jE(n, e);
  var t = HE(n);
  function n() {
    var a;
    FE(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), Ch(gf(a), "priority", 100), Ch(gf(a), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), a;
  }
  return LE(n, [{
    key: "parse",
    value: function(r, o, l) {
      switch (o) {
        case "w":
          return gt(Et.week, r);
        case "wo":
          return l.ordinalNumber(r, {
            unit: "week"
          });
        default:
          return St(o.length, r);
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      return o >= 1 && o <= 53;
    }
  }, {
    key: "set",
    value: function(r, o, l, i) {
      return Dr(BE(r, l, i), i);
    }
  }]), n;
}(rt);
function zE(e, t) {
  $e(2, arguments);
  var n = Re(e), a = Ae(t), r = mb(n) - a;
  return n.setUTCDate(n.getUTCDate() - r * 7), n;
}
function wi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? wi = function(n) {
    return typeof n;
  } : wi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, wi(e);
}
function qE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Eh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function GE(e, t, n) {
  return t && Eh(e.prototype, t), n && Eh(e, n), e;
}
function KE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && bf(e, t);
}
function bf(e, t) {
  return bf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, bf(e, t);
}
function XE(e) {
  var t = ZE();
  return function() {
    var a = Es(e), r;
    if (t) {
      var o = Es(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return QE(this, r);
  };
}
function QE(e, t) {
  return t && (wi(t) === "object" || typeof t == "function") ? t : _f(e);
}
function _f(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ZE() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Es(e) {
  return Es = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Es(e);
}
function $h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var JE = /* @__PURE__ */ function(e) {
  KE(n, e);
  var t = XE(n);
  function n() {
    var a;
    qE(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), $h(_f(a), "priority", 100), $h(_f(a), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), a;
  }
  return GE(n, [{
    key: "parse",
    value: function(r, o, l) {
      switch (o) {
        case "I":
          return gt(Et.week, r);
        case "Io":
          return l.ordinalNumber(r, {
            unit: "week"
          });
        default:
          return St(o.length, r);
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      return o >= 1 && o <= 53;
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return vo(zE(r, l));
    }
  }]), n;
}(rt);
function Si(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Si = function(n) {
    return typeof n;
  } : Si = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Si(e);
}
function e$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ph(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function t$(e, t, n) {
  return t && Ph(e.prototype, t), n && Ph(e, n), e;
}
function n$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && wf(e, t);
}
function wf(e, t) {
  return wf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, wf(e, t);
}
function a$(e) {
  var t = o$();
  return function() {
    var a = $s(e), r;
    if (t) {
      var o = $s(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return r$(this, r);
  };
}
function r$(e, t) {
  return t && (Si(t) === "object" || typeof t == "function") ? t : ki(e);
}
function ki(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function o$() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function $s(e) {
  return $s = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, $s(e);
}
function Qu(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var l$ = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], i$ = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], s$ = /* @__PURE__ */ function(e) {
  n$(n, e);
  var t = a$(n);
  function n() {
    var a;
    e$(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), Qu(ki(a), "priority", 90), Qu(ki(a), "subPriority", 1), Qu(ki(a), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), a;
  }
  return t$(n, [{
    key: "parse",
    value: function(r, o, l) {
      switch (o) {
        case "d":
          return gt(Et.date, r);
        case "do":
          return l.ordinalNumber(r, {
            unit: "date"
          });
        default:
          return St(o.length, r);
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      var l = r.getUTCFullYear(), i = Cb(l), s = r.getUTCMonth();
      return i ? o >= 1 && o <= i$[s] : o >= 1 && o <= l$[s];
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return r.setUTCDate(l), r.setUTCHours(0, 0, 0, 0), r;
    }
  }]), n;
}(rt);
function xi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xi = function(n) {
    return typeof n;
  } : xi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, xi(e);
}
function u$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Th(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function c$(e, t, n) {
  return t && Th(e.prototype, t), n && Th(e, n), e;
}
function f$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Sf(e, t);
}
function Sf(e, t) {
  return Sf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Sf(e, t);
}
function d$(e) {
  var t = m$();
  return function() {
    var a = Ps(e), r;
    if (t) {
      var o = Ps(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return v$(this, r);
  };
}
function v$(e, t) {
  return t && (xi(t) === "object" || typeof t == "function") ? t : Oi(e);
}
function Oi(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function m$() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ps(e) {
  return Ps = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ps(e);
}
function Zu(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var h$ = /* @__PURE__ */ function(e) {
  f$(n, e);
  var t = d$(n);
  function n() {
    var a;
    u$(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), Zu(Oi(a), "priority", 90), Zu(Oi(a), "subpriority", 1), Zu(Oi(a), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), a;
  }
  return c$(n, [{
    key: "parse",
    value: function(r, o, l) {
      switch (o) {
        case "D":
        case "DD":
          return gt(Et.dayOfYear, r);
        case "Do":
          return l.ordinalNumber(r, {
            unit: "date"
          });
        default:
          return St(o.length, r);
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      var l = r.getUTCFullYear(), i = Cb(l);
      return i ? o >= 1 && o <= 366 : o >= 1 && o <= 365;
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return r.setUTCMonth(0, l), r.setUTCHours(0, 0, 0, 0), r;
    }
  }]), n;
}(rt);
function iv(e, t, n) {
  var a, r, o, l, i, s, u, d;
  $e(2, arguments);
  var c = fa(), f = Ae((a = (r = (o = (l = n == null ? void 0 : n.weekStartsOn) !== null && l !== void 0 ? l : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : c.weekStartsOn) !== null && r !== void 0 ? r : (u = c.locale) === null || u === void 0 || (d = u.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && a !== void 0 ? a : 0);
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = Re(e), y = Ae(t), p = v.getUTCDay(), x = y % 7, O = (x + 7) % 7, E = (O < f ? 7 : 0) + y - p;
  return v.setUTCDate(v.getUTCDate() + E), v;
}
function Ci(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ci = function(n) {
    return typeof n;
  } : Ci = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ci(e);
}
function y$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Nh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function p$(e, t, n) {
  return t && Nh(e.prototype, t), n && Nh(e, n), e;
}
function g$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && kf(e, t);
}
function kf(e, t) {
  return kf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, kf(e, t);
}
function b$(e) {
  var t = w$();
  return function() {
    var a = Ts(e), r;
    if (t) {
      var o = Ts(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return _$(this, r);
  };
}
function _$(e, t) {
  return t && (Ci(t) === "object" || typeof t == "function") ? t : xf(e);
}
function xf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function w$() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ts(e) {
  return Ts = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ts(e);
}
function Dh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var S$ = /* @__PURE__ */ function(e) {
  g$(n, e);
  var t = b$(n);
  function n() {
    var a;
    y$(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), Dh(xf(a), "priority", 90), Dh(xf(a), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), a;
  }
  return p$(n, [{
    key: "parse",
    value: function(r, o, l) {
      switch (o) {
        case "E":
        case "EE":
        case "EEE":
          return l.day(r, {
            width: "abbreviated",
            context: "formatting"
          }) || l.day(r, {
            width: "short",
            context: "formatting"
          }) || l.day(r, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return l.day(r, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return l.day(r, {
            width: "short",
            context: "formatting"
          }) || l.day(r, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return l.day(r, {
            width: "wide",
            context: "formatting"
          }) || l.day(r, {
            width: "abbreviated",
            context: "formatting"
          }) || l.day(r, {
            width: "short",
            context: "formatting"
          }) || l.day(r, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      return o >= 0 && o <= 6;
    }
  }, {
    key: "set",
    value: function(r, o, l, i) {
      return r = iv(r, l, i), r.setUTCHours(0, 0, 0, 0), r;
    }
  }]), n;
}(rt);
function Ei(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ei = function(n) {
    return typeof n;
  } : Ei = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ei(e);
}
function k$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function x$(e, t, n) {
  return t && Vh(e.prototype, t), n && Vh(e, n), e;
}
function O$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Of(e, t);
}
function Of(e, t) {
  return Of = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Of(e, t);
}
function C$(e) {
  var t = $$();
  return function() {
    var a = Ns(e), r;
    if (t) {
      var o = Ns(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return E$(this, r);
  };
}
function E$(e, t) {
  return t && (Ei(t) === "object" || typeof t == "function") ? t : Cf(e);
}
function Cf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $$() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ns(e) {
  return Ns = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ns(e);
}
function Ih(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var P$ = /* @__PURE__ */ function(e) {
  O$(n, e);
  var t = C$(n);
  function n() {
    var a;
    k$(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), Ih(Cf(a), "priority", 90), Ih(Cf(a), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), a;
  }
  return x$(n, [{
    key: "parse",
    value: function(r, o, l, i) {
      var s = function(d) {
        var c = Math.floor((d - 1) / 7) * 7;
        return (d + i.weekStartsOn + 6) % 7 + c;
      };
      switch (o) {
        case "e":
        case "ee":
          return $t(St(o.length, r), s);
        case "eo":
          return $t(l.ordinalNumber(r, {
            unit: "day"
          }), s);
        case "eee":
          return l.day(r, {
            width: "abbreviated",
            context: "formatting"
          }) || l.day(r, {
            width: "short",
            context: "formatting"
          }) || l.day(r, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return l.day(r, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return l.day(r, {
            width: "short",
            context: "formatting"
          }) || l.day(r, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return l.day(r, {
            width: "wide",
            context: "formatting"
          }) || l.day(r, {
            width: "abbreviated",
            context: "formatting"
          }) || l.day(r, {
            width: "short",
            context: "formatting"
          }) || l.day(r, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      return o >= 0 && o <= 6;
    }
  }, {
    key: "set",
    value: function(r, o, l, i) {
      return r = iv(r, l, i), r.setUTCHours(0, 0, 0, 0), r;
    }
  }]), n;
}(rt);
function $i(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $i = function(n) {
    return typeof n;
  } : $i = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, $i(e);
}
function T$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ah(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function N$(e, t, n) {
  return t && Ah(e.prototype, t), n && Ah(e, n), e;
}
function D$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ef(e, t);
}
function Ef(e, t) {
  return Ef = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Ef(e, t);
}
function V$(e) {
  var t = A$();
  return function() {
    var a = Ds(e), r;
    if (t) {
      var o = Ds(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return I$(this, r);
  };
}
function I$(e, t) {
  return t && ($i(t) === "object" || typeof t == "function") ? t : $f(e);
}
function $f(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function A$() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ds(e) {
  return Ds = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ds(e);
}
function Mh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var M$ = /* @__PURE__ */ function(e) {
  D$(n, e);
  var t = V$(n);
  function n() {
    var a;
    T$(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), Mh($f(a), "priority", 90), Mh($f(a), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), a;
  }
  return N$(n, [{
    key: "parse",
    value: function(r, o, l, i) {
      var s = function(d) {
        var c = Math.floor((d - 1) / 7) * 7;
        return (d + i.weekStartsOn + 6) % 7 + c;
      };
      switch (o) {
        case "c":
        case "cc":
          return $t(St(o.length, r), s);
        case "co":
          return $t(l.ordinalNumber(r, {
            unit: "day"
          }), s);
        case "ccc":
          return l.day(r, {
            width: "abbreviated",
            context: "standalone"
          }) || l.day(r, {
            width: "short",
            context: "standalone"
          }) || l.day(r, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return l.day(r, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return l.day(r, {
            width: "short",
            context: "standalone"
          }) || l.day(r, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return l.day(r, {
            width: "wide",
            context: "standalone"
          }) || l.day(r, {
            width: "abbreviated",
            context: "standalone"
          }) || l.day(r, {
            width: "short",
            context: "standalone"
          }) || l.day(r, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      return o >= 0 && o <= 6;
    }
  }, {
    key: "set",
    value: function(r, o, l, i) {
      return r = iv(r, l, i), r.setUTCHours(0, 0, 0, 0), r;
    }
  }]), n;
}(rt);
function R$(e, t) {
  $e(2, arguments);
  var n = Ae(t);
  n % 7 === 0 && (n = n - 7);
  var a = 1, r = Re(e), o = r.getUTCDay(), l = n % 7, i = (l + 7) % 7, s = (i < a ? 7 : 0) + n - o;
  return r.setUTCDate(r.getUTCDate() + s), r;
}
function Pi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pi = function(n) {
    return typeof n;
  } : Pi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Pi(e);
}
function B$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Rh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function F$(e, t, n) {
  return t && Rh(e.prototype, t), n && Rh(e, n), e;
}
function L$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Pf(e, t);
}
function Pf(e, t) {
  return Pf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Pf(e, t);
}
function j$(e) {
  var t = U$();
  return function() {
    var a = Vs(e), r;
    if (t) {
      var o = Vs(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return H$(this, r);
  };
}
function H$(e, t) {
  return t && (Pi(t) === "object" || typeof t == "function") ? t : Tf(e);
}
function Tf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function U$() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Vs(e) {
  return Vs = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Vs(e);
}
function Bh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Y$ = /* @__PURE__ */ function(e) {
  L$(n, e);
  var t = j$(n);
  function n() {
    var a;
    B$(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), Bh(Tf(a), "priority", 90), Bh(Tf(a), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), a;
  }
  return F$(n, [{
    key: "parse",
    value: function(r, o, l) {
      var i = function(u) {
        return u === 0 ? 7 : u;
      };
      switch (o) {
        case "i":
        case "ii":
          return St(o.length, r);
        case "io":
          return l.ordinalNumber(r, {
            unit: "day"
          });
        case "iii":
          return $t(l.day(r, {
            width: "abbreviated",
            context: "formatting"
          }) || l.day(r, {
            width: "short",
            context: "formatting"
          }) || l.day(r, {
            width: "narrow",
            context: "formatting"
          }), i);
        case "iiiii":
          return $t(l.day(r, {
            width: "narrow",
            context: "formatting"
          }), i);
        case "iiiiii":
          return $t(l.day(r, {
            width: "short",
            context: "formatting"
          }) || l.day(r, {
            width: "narrow",
            context: "formatting"
          }), i);
        case "iiii":
        default:
          return $t(l.day(r, {
            width: "wide",
            context: "formatting"
          }) || l.day(r, {
            width: "abbreviated",
            context: "formatting"
          }) || l.day(r, {
            width: "short",
            context: "formatting"
          }) || l.day(r, {
            width: "narrow",
            context: "formatting"
          }), i);
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      return o >= 1 && o <= 7;
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return r = R$(r, l), r.setUTCHours(0, 0, 0, 0), r;
    }
  }]), n;
}(rt);
function Ti(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ti = function(n) {
    return typeof n;
  } : Ti = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ti(e);
}
function W$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function z$(e, t, n) {
  return t && Fh(e.prototype, t), n && Fh(e, n), e;
}
function q$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Nf(e, t);
}
function Nf(e, t) {
  return Nf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Nf(e, t);
}
function G$(e) {
  var t = X$();
  return function() {
    var a = Is(e), r;
    if (t) {
      var o = Is(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return K$(this, r);
  };
}
function K$(e, t) {
  return t && (Ti(t) === "object" || typeof t == "function") ? t : Df(e);
}
function Df(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function X$() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Is(e) {
  return Is = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Is(e);
}
function Lh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Q$ = /* @__PURE__ */ function(e) {
  q$(n, e);
  var t = G$(n);
  function n() {
    var a;
    W$(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), Lh(Df(a), "priority", 80), Lh(Df(a), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), a;
  }
  return z$(n, [{
    key: "parse",
    value: function(r, o, l) {
      switch (o) {
        case "a":
        case "aa":
        case "aaa":
          return l.dayPeriod(r, {
            width: "abbreviated",
            context: "formatting"
          }) || l.dayPeriod(r, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return l.dayPeriod(r, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return l.dayPeriod(r, {
            width: "wide",
            context: "formatting"
          }) || l.dayPeriod(r, {
            width: "abbreviated",
            context: "formatting"
          }) || l.dayPeriod(r, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return r.setUTCHours(lv(l), 0, 0, 0), r;
    }
  }]), n;
}(rt);
function Ni(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ni = function(n) {
    return typeof n;
  } : Ni = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ni(e);
}
function Z$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function J$(e, t, n) {
  return t && jh(e.prototype, t), n && jh(e, n), e;
}
function eP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Vf(e, t);
}
function Vf(e, t) {
  return Vf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Vf(e, t);
}
function tP(e) {
  var t = aP();
  return function() {
    var a = As(e), r;
    if (t) {
      var o = As(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return nP(this, r);
  };
}
function nP(e, t) {
  return t && (Ni(t) === "object" || typeof t == "function") ? t : If(e);
}
function If(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function aP() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function As(e) {
  return As = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, As(e);
}
function Hh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var rP = /* @__PURE__ */ function(e) {
  eP(n, e);
  var t = tP(n);
  function n() {
    var a;
    Z$(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), Hh(If(a), "priority", 80), Hh(If(a), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), a;
  }
  return J$(n, [{
    key: "parse",
    value: function(r, o, l) {
      switch (o) {
        case "b":
        case "bb":
        case "bbb":
          return l.dayPeriod(r, {
            width: "abbreviated",
            context: "formatting"
          }) || l.dayPeriod(r, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return l.dayPeriod(r, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return l.dayPeriod(r, {
            width: "wide",
            context: "formatting"
          }) || l.dayPeriod(r, {
            width: "abbreviated",
            context: "formatting"
          }) || l.dayPeriod(r, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return r.setUTCHours(lv(l), 0, 0, 0), r;
    }
  }]), n;
}(rt);
function Di(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Di = function(n) {
    return typeof n;
  } : Di = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Di(e);
}
function oP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Uh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function lP(e, t, n) {
  return t && Uh(e.prototype, t), n && Uh(e, n), e;
}
function iP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Af(e, t);
}
function Af(e, t) {
  return Af = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Af(e, t);
}
function sP(e) {
  var t = cP();
  return function() {
    var a = Ms(e), r;
    if (t) {
      var o = Ms(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return uP(this, r);
  };
}
function uP(e, t) {
  return t && (Di(t) === "object" || typeof t == "function") ? t : Mf(e);
}
function Mf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cP() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ms(e) {
  return Ms = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ms(e);
}
function Yh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var fP = /* @__PURE__ */ function(e) {
  iP(n, e);
  var t = sP(n);
  function n() {
    var a;
    oP(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), Yh(Mf(a), "priority", 80), Yh(Mf(a), "incompatibleTokens", ["a", "b", "t", "T"]), a;
  }
  return lP(n, [{
    key: "parse",
    value: function(r, o, l) {
      switch (o) {
        case "B":
        case "BB":
        case "BBB":
          return l.dayPeriod(r, {
            width: "abbreviated",
            context: "formatting"
          }) || l.dayPeriod(r, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return l.dayPeriod(r, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return l.dayPeriod(r, {
            width: "wide",
            context: "formatting"
          }) || l.dayPeriod(r, {
            width: "abbreviated",
            context: "formatting"
          }) || l.dayPeriod(r, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return r.setUTCHours(lv(l), 0, 0, 0), r;
    }
  }]), n;
}(rt);
function Vi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Vi = function(n) {
    return typeof n;
  } : Vi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Vi(e);
}
function dP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function vP(e, t, n) {
  return t && Wh(e.prototype, t), n && Wh(e, n), e;
}
function mP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Rf(e, t);
}
function Rf(e, t) {
  return Rf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Rf(e, t);
}
function hP(e) {
  var t = pP();
  return function() {
    var a = Rs(e), r;
    if (t) {
      var o = Rs(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return yP(this, r);
  };
}
function yP(e, t) {
  return t && (Vi(t) === "object" || typeof t == "function") ? t : Bf(e);
}
function Bf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pP() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Rs(e) {
  return Rs = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Rs(e);
}
function zh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var gP = /* @__PURE__ */ function(e) {
  mP(n, e);
  var t = hP(n);
  function n() {
    var a;
    dP(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), zh(Bf(a), "priority", 70), zh(Bf(a), "incompatibleTokens", ["H", "K", "k", "t", "T"]), a;
  }
  return vP(n, [{
    key: "parse",
    value: function(r, o, l) {
      switch (o) {
        case "h":
          return gt(Et.hour12h, r);
        case "ho":
          return l.ordinalNumber(r, {
            unit: "hour"
          });
        default:
          return St(o.length, r);
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      return o >= 1 && o <= 12;
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      var i = r.getUTCHours() >= 12;
      return i && l < 12 ? r.setUTCHours(l + 12, 0, 0, 0) : !i && l === 12 ? r.setUTCHours(0, 0, 0, 0) : r.setUTCHours(l, 0, 0, 0), r;
    }
  }]), n;
}(rt);
function Ii(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ii = function(n) {
    return typeof n;
  } : Ii = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ii(e);
}
function bP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function _P(e, t, n) {
  return t && qh(e.prototype, t), n && qh(e, n), e;
}
function wP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ff(e, t);
}
function Ff(e, t) {
  return Ff = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Ff(e, t);
}
function SP(e) {
  var t = xP();
  return function() {
    var a = Bs(e), r;
    if (t) {
      var o = Bs(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return kP(this, r);
  };
}
function kP(e, t) {
  return t && (Ii(t) === "object" || typeof t == "function") ? t : Lf(e);
}
function Lf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xP() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Bs(e) {
  return Bs = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Bs(e);
}
function Gh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var OP = /* @__PURE__ */ function(e) {
  wP(n, e);
  var t = SP(n);
  function n() {
    var a;
    bP(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), Gh(Lf(a), "priority", 70), Gh(Lf(a), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), a;
  }
  return _P(n, [{
    key: "parse",
    value: function(r, o, l) {
      switch (o) {
        case "H":
          return gt(Et.hour23h, r);
        case "Ho":
          return l.ordinalNumber(r, {
            unit: "hour"
          });
        default:
          return St(o.length, r);
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      return o >= 0 && o <= 23;
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return r.setUTCHours(l, 0, 0, 0), r;
    }
  }]), n;
}(rt);
function Ai(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ai = function(n) {
    return typeof n;
  } : Ai = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ai(e);
}
function CP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function EP(e, t, n) {
  return t && Kh(e.prototype, t), n && Kh(e, n), e;
}
function $P(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && jf(e, t);
}
function jf(e, t) {
  return jf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, jf(e, t);
}
function PP(e) {
  var t = NP();
  return function() {
    var a = Fs(e), r;
    if (t) {
      var o = Fs(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return TP(this, r);
  };
}
function TP(e, t) {
  return t && (Ai(t) === "object" || typeof t == "function") ? t : Hf(e);
}
function Hf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function NP() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Fs(e) {
  return Fs = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Fs(e);
}
function Xh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var DP = /* @__PURE__ */ function(e) {
  $P(n, e);
  var t = PP(n);
  function n() {
    var a;
    CP(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), Xh(Hf(a), "priority", 70), Xh(Hf(a), "incompatibleTokens", ["h", "H", "k", "t", "T"]), a;
  }
  return EP(n, [{
    key: "parse",
    value: function(r, o, l) {
      switch (o) {
        case "K":
          return gt(Et.hour11h, r);
        case "Ko":
          return l.ordinalNumber(r, {
            unit: "hour"
          });
        default:
          return St(o.length, r);
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      return o >= 0 && o <= 11;
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      var i = r.getUTCHours() >= 12;
      return i && l < 12 ? r.setUTCHours(l + 12, 0, 0, 0) : r.setUTCHours(l, 0, 0, 0), r;
    }
  }]), n;
}(rt);
function Mi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Mi = function(n) {
    return typeof n;
  } : Mi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Mi(e);
}
function VP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function IP(e, t, n) {
  return t && Qh(e.prototype, t), n && Qh(e, n), e;
}
function AP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Uf(e, t);
}
function Uf(e, t) {
  return Uf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Uf(e, t);
}
function MP(e) {
  var t = BP();
  return function() {
    var a = Ls(e), r;
    if (t) {
      var o = Ls(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return RP(this, r);
  };
}
function RP(e, t) {
  return t && (Mi(t) === "object" || typeof t == "function") ? t : Yf(e);
}
function Yf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function BP() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ls(e) {
  return Ls = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ls(e);
}
function Zh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var FP = /* @__PURE__ */ function(e) {
  AP(n, e);
  var t = MP(n);
  function n() {
    var a;
    VP(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), Zh(Yf(a), "priority", 70), Zh(Yf(a), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), a;
  }
  return IP(n, [{
    key: "parse",
    value: function(r, o, l) {
      switch (o) {
        case "k":
          return gt(Et.hour24h, r);
        case "ko":
          return l.ordinalNumber(r, {
            unit: "hour"
          });
        default:
          return St(o.length, r);
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      return o >= 1 && o <= 24;
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      var i = l <= 24 ? l % 24 : l;
      return r.setUTCHours(i, 0, 0, 0), r;
    }
  }]), n;
}(rt);
function Ri(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ri = function(n) {
    return typeof n;
  } : Ri = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ri(e);
}
function LP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Jh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function jP(e, t, n) {
  return t && Jh(e.prototype, t), n && Jh(e, n), e;
}
function HP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Wf(e, t);
}
function Wf(e, t) {
  return Wf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Wf(e, t);
}
function UP(e) {
  var t = WP();
  return function() {
    var a = js(e), r;
    if (t) {
      var o = js(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return YP(this, r);
  };
}
function YP(e, t) {
  return t && (Ri(t) === "object" || typeof t == "function") ? t : zf(e);
}
function zf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function WP() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function js(e) {
  return js = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, js(e);
}
function ey(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var zP = /* @__PURE__ */ function(e) {
  HP(n, e);
  var t = UP(n);
  function n() {
    var a;
    LP(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), ey(zf(a), "priority", 60), ey(zf(a), "incompatibleTokens", ["t", "T"]), a;
  }
  return jP(n, [{
    key: "parse",
    value: function(r, o, l) {
      switch (o) {
        case "m":
          return gt(Et.minute, r);
        case "mo":
          return l.ordinalNumber(r, {
            unit: "minute"
          });
        default:
          return St(o.length, r);
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      return o >= 0 && o <= 59;
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return r.setUTCMinutes(l, 0, 0), r;
    }
  }]), n;
}(rt);
function Bi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Bi = function(n) {
    return typeof n;
  } : Bi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Bi(e);
}
function qP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ty(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function GP(e, t, n) {
  return t && ty(e.prototype, t), n && ty(e, n), e;
}
function KP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && qf(e, t);
}
function qf(e, t) {
  return qf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, qf(e, t);
}
function XP(e) {
  var t = ZP();
  return function() {
    var a = Hs(e), r;
    if (t) {
      var o = Hs(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return QP(this, r);
  };
}
function QP(e, t) {
  return t && (Bi(t) === "object" || typeof t == "function") ? t : Gf(e);
}
function Gf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ZP() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Hs(e) {
  return Hs = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Hs(e);
}
function ny(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var JP = /* @__PURE__ */ function(e) {
  KP(n, e);
  var t = XP(n);
  function n() {
    var a;
    qP(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), ny(Gf(a), "priority", 50), ny(Gf(a), "incompatibleTokens", ["t", "T"]), a;
  }
  return GP(n, [{
    key: "parse",
    value: function(r, o, l) {
      switch (o) {
        case "s":
          return gt(Et.second, r);
        case "so":
          return l.ordinalNumber(r, {
            unit: "second"
          });
        default:
          return St(o.length, r);
      }
    }
  }, {
    key: "validate",
    value: function(r, o) {
      return o >= 0 && o <= 59;
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return r.setUTCSeconds(l, 0), r;
    }
  }]), n;
}(rt);
function Fi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Fi = function(n) {
    return typeof n;
  } : Fi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Fi(e);
}
function eT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ay(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function tT(e, t, n) {
  return t && ay(e.prototype, t), n && ay(e, n), e;
}
function nT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Kf(e, t);
}
function Kf(e, t) {
  return Kf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Kf(e, t);
}
function aT(e) {
  var t = oT();
  return function() {
    var a = Us(e), r;
    if (t) {
      var o = Us(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return rT(this, r);
  };
}
function rT(e, t) {
  return t && (Fi(t) === "object" || typeof t == "function") ? t : Xf(e);
}
function Xf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function oT() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Us(e) {
  return Us = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Us(e);
}
function ry(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var lT = /* @__PURE__ */ function(e) {
  nT(n, e);
  var t = aT(n);
  function n() {
    var a;
    eT(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), ry(Xf(a), "priority", 30), ry(Xf(a), "incompatibleTokens", ["t", "T"]), a;
  }
  return tT(n, [{
    key: "parse",
    value: function(r, o) {
      var l = function(s) {
        return Math.floor(s * Math.pow(10, -o.length + 3));
      };
      return $t(St(o.length, r), l);
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return r.setUTCMilliseconds(l), r;
    }
  }]), n;
}(rt);
function Li(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Li = function(n) {
    return typeof n;
  } : Li = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Li(e);
}
function iT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function sT(e, t, n) {
  return t && oy(e.prototype, t), n && oy(e, n), e;
}
function uT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Qf(e, t);
}
function Qf(e, t) {
  return Qf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Qf(e, t);
}
function cT(e) {
  var t = dT();
  return function() {
    var a = Ys(e), r;
    if (t) {
      var o = Ys(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return fT(this, r);
  };
}
function fT(e, t) {
  return t && (Li(t) === "object" || typeof t == "function") ? t : Zf(e);
}
function Zf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function dT() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ys(e) {
  return Ys = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ys(e);
}
function ly(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var vT = /* @__PURE__ */ function(e) {
  uT(n, e);
  var t = cT(n);
  function n() {
    var a;
    iT(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), ly(Zf(a), "priority", 10), ly(Zf(a), "incompatibleTokens", ["t", "T", "x"]), a;
  }
  return sT(n, [{
    key: "parse",
    value: function(r, o) {
      switch (o) {
        case "X":
          return ra(aa.basicOptionalMinutes, r);
        case "XX":
          return ra(aa.basic, r);
        case "XXXX":
          return ra(aa.basicOptionalSeconds, r);
        case "XXXXX":
          return ra(aa.extendedOptionalSeconds, r);
        case "XXX":
        default:
          return ra(aa.extended, r);
      }
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return o.timestampIsSet ? r : new Date(r.getTime() - l);
    }
  }]), n;
}(rt);
function ji(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ji = function(n) {
    return typeof n;
  } : ji = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ji(e);
}
function mT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function iy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function hT(e, t, n) {
  return t && iy(e.prototype, t), n && iy(e, n), e;
}
function yT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Jf(e, t);
}
function Jf(e, t) {
  return Jf = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, Jf(e, t);
}
function pT(e) {
  var t = bT();
  return function() {
    var a = Ws(e), r;
    if (t) {
      var o = Ws(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return gT(this, r);
  };
}
function gT(e, t) {
  return t && (ji(t) === "object" || typeof t == "function") ? t : ed(e);
}
function ed(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bT() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ws(e) {
  return Ws = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ws(e);
}
function sy(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var _T = /* @__PURE__ */ function(e) {
  yT(n, e);
  var t = pT(n);
  function n() {
    var a;
    mT(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), sy(ed(a), "priority", 10), sy(ed(a), "incompatibleTokens", ["t", "T", "X"]), a;
  }
  return hT(n, [{
    key: "parse",
    value: function(r, o) {
      switch (o) {
        case "x":
          return ra(aa.basicOptionalMinutes, r);
        case "xx":
          return ra(aa.basic, r);
        case "xxxx":
          return ra(aa.basicOptionalSeconds, r);
        case "xxxxx":
          return ra(aa.extendedOptionalSeconds, r);
        case "xxx":
        default:
          return ra(aa.extended, r);
      }
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return o.timestampIsSet ? r : new Date(r.getTime() - l);
    }
  }]), n;
}(rt);
function Hi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Hi = function(n) {
    return typeof n;
  } : Hi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Hi(e);
}
function wT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function uy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function ST(e, t, n) {
  return t && uy(e.prototype, t), n && uy(e, n), e;
}
function kT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && td(e, t);
}
function td(e, t) {
  return td = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, td(e, t);
}
function xT(e) {
  var t = CT();
  return function() {
    var a = zs(e), r;
    if (t) {
      var o = zs(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return OT(this, r);
  };
}
function OT(e, t) {
  return t && (Hi(t) === "object" || typeof t == "function") ? t : nd(e);
}
function nd(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function CT() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function zs(e) {
  return zs = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, zs(e);
}
function cy(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ET = /* @__PURE__ */ function(e) {
  kT(n, e);
  var t = xT(n);
  function n() {
    var a;
    wT(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), cy(nd(a), "priority", 40), cy(nd(a), "incompatibleTokens", "*"), a;
  }
  return ST(n, [{
    key: "parse",
    value: function(r) {
      return xb(r);
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return [new Date(l * 1e3), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(rt);
function Ui(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ui = function(n) {
    return typeof n;
  } : Ui = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ui(e);
}
function $T(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function PT(e, t, n) {
  return t && fy(e.prototype, t), n && fy(e, n), e;
}
function TT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ad(e, t);
}
function ad(e, t) {
  return ad = Object.setPrototypeOf || function(a, r) {
    return a.__proto__ = r, a;
  }, ad(e, t);
}
function NT(e) {
  var t = VT();
  return function() {
    var a = qs(e), r;
    if (t) {
      var o = qs(this).constructor;
      r = Reflect.construct(a, arguments, o);
    } else
      r = a.apply(this, arguments);
    return DT(this, r);
  };
}
function DT(e, t) {
  return t && (Ui(t) === "object" || typeof t == "function") ? t : rd(e);
}
function rd(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function VT() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function qs(e) {
  return qs = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, qs(e);
}
function dy(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var IT = /* @__PURE__ */ function(e) {
  TT(n, e);
  var t = NT(n);
  function n() {
    var a;
    $T(this, n);
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return a = t.call.apply(t, [this].concat(o)), dy(rd(a), "priority", 20), dy(rd(a), "incompatibleTokens", "*"), a;
  }
  return PT(n, [{
    key: "parse",
    value: function(r) {
      return xb(r);
    }
  }, {
    key: "set",
    value: function(r, o, l) {
      return [new Date(l), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(rt), AT = {
  G: new AC(),
  y: new HC(),
  Y: new KC(),
  R: new nE(),
  u: new uE(),
  Q: new yE(),
  q: new kE(),
  M: new TE(),
  L: new RE(),
  w: new WE(),
  I: new JE(),
  d: new s$(),
  D: new h$(),
  E: new S$(),
  e: new P$(),
  c: new M$(),
  i: new Y$(),
  a: new Q$(),
  b: new rP(),
  B: new fP(),
  h: new gP(),
  H: new OP(),
  K: new DP(),
  k: new FP(),
  m: new zP(),
  s: new JP(),
  S: new lT(),
  X: new vT(),
  x: new _T(),
  t: new ET(),
  T: new IT()
};
function Yi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yi = function(n) {
    return typeof n;
  } : Yi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Yi(e);
}
function vy(e, t) {
  var n;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = MT(e)) || t && e && typeof e.length == "number") {
      n && (e = n);
      var a = 0, r = function() {
      };
      return { s: r, n: function() {
        return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
      }, e: function(u) {
        throw u;
      }, f: r };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, l = !1, i;
  return { s: function() {
    n = e[Symbol.iterator]();
  }, n: function() {
    var u = n.next();
    return o = u.done, u;
  }, e: function(u) {
    l = !0, i = u;
  }, f: function() {
    try {
      !o && n.return != null && n.return();
    } finally {
      if (l)
        throw i;
    }
  } };
}
function MT(e, t) {
  if (e) {
    if (typeof e == "string")
      return my(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return my(e, t);
  }
}
function my(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
var RT = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, BT = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, FT = /^'([^]*?)'?$/, LT = /''/g, jT = /\S/, HT = /[a-zA-Z]/;
function od(e, t, n, a) {
  var r, o, l, i, s, u, d, c, f, v, y, p, x, O, E, S, N, V;
  $e(3, arguments);
  var $ = String(e), k = String(t), g = fa(), b = (r = (o = a == null ? void 0 : a.locale) !== null && o !== void 0 ? o : g.locale) !== null && r !== void 0 ? r : bb;
  if (!b.match)
    throw new RangeError("locale must contain match property");
  var w = Ae((l = (i = (s = (u = a == null ? void 0 : a.firstWeekContainsDate) !== null && u !== void 0 ? u : a == null || (d = a.locale) === null || d === void 0 || (c = d.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && s !== void 0 ? s : g.firstWeekContainsDate) !== null && i !== void 0 ? i : (f = g.locale) === null || f === void 0 || (v = f.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && l !== void 0 ? l : 1);
  if (!(w >= 1 && w <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var C = Ae((y = (p = (x = (O = a == null ? void 0 : a.weekStartsOn) !== null && O !== void 0 ? O : a == null || (E = a.locale) === null || E === void 0 || (S = E.options) === null || S === void 0 ? void 0 : S.weekStartsOn) !== null && x !== void 0 ? x : g.weekStartsOn) !== null && p !== void 0 ? p : (N = g.locale) === null || N === void 0 || (V = N.options) === null || V === void 0 ? void 0 : V.weekStartsOn) !== null && y !== void 0 ? y : 0);
  if (!(C >= 0 && C <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (k === "")
    return $ === "" ? Re(n) : new Date(NaN);
  var T = {
    firstWeekContainsDate: w,
    weekStartsOn: C,
    locale: b
  }, A = [new CC()], z = k.match(BT).map(function(be) {
    var Oe = be[0];
    if (Oe in Gc) {
      var We = Gc[Oe];
      return We(be, b.formatLong);
    }
    return be;
  }).join("").match(RT), U = [], B = vy(z), h;
  try {
    var P = function() {
      var Oe = h.value;
      !(a != null && a.useAdditionalWeekYearTokens) && gb(Oe) && ms(Oe, k, e), !(a != null && a.useAdditionalDayOfYearTokens) && pb(Oe) && ms(Oe, k, e);
      var We = Oe[0], yt = AT[We];
      if (yt) {
        var De = yt.incompatibleTokens;
        if (Array.isArray(De)) {
          var D = U.find(function(K) {
            return De.includes(K.token) || K.token === We;
          });
          if (D)
            throw new RangeError("The format string mustn't contain `".concat(D.fullToken, "` and `").concat(Oe, "` at the same time"));
        } else if (yt.incompatibleTokens === "*" && U.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(Oe, "` and any other token at the same time"));
        U.push({
          token: We,
          fullToken: Oe
        });
        var F = yt.run($, Oe, b.match, T);
        if (!F)
          return {
            v: new Date(NaN)
          };
        A.push(F.setter), $ = F.rest;
      } else {
        if (We.match(HT))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + We + "`");
        if (Oe === "''" ? Oe = "'" : We === "'" && (Oe = UT(Oe)), $.indexOf(Oe) === 0)
          $ = $.slice(Oe.length);
        else
          return {
            v: new Date(NaN)
          };
      }
    };
    for (B.s(); !(h = B.n()).done; ) {
      var W = P();
      if (Yi(W) === "object")
        return W.v;
    }
  } catch (be) {
    B.e(be);
  } finally {
    B.f();
  }
  if ($.length > 0 && jT.test($))
    return new Date(NaN);
  var H = A.map(function(be) {
    return be.priority;
  }).sort(function(be, Oe) {
    return Oe - be;
  }).filter(function(be, Oe, We) {
    return We.indexOf(be) === Oe;
  }).map(function(be) {
    return A.filter(function(Oe) {
      return Oe.priority === be;
    }).sort(function(Oe, We) {
      return We.subPriority - Oe.subPriority;
    });
  }).map(function(be) {
    return be[0];
  }), j = Re(n);
  if (isNaN(j.getTime()))
    return new Date(NaN);
  var X = db(j, vs(j)), Q = {}, Y = vy(H), I;
  try {
    for (Y.s(); !(I = Y.n()).done; ) {
      var q = I.value;
      if (!q.validate(X, T))
        return new Date(NaN);
      var we = q.set(X, Q, T);
      Array.isArray(we) ? (X = we[0], vC(Q, we[1])) : X = we;
    }
  } catch (be) {
    Y.e(be);
  } finally {
    Y.f();
  }
  return X;
}
function UT(e) {
  return e.match(FT)[1].replace(LT, "'");
}
function YT(e, t) {
  $e(2, arguments);
  var n = Ae(t);
  return Ya(e, -n);
}
function WT(e, t) {
  var n;
  $e(1, arguments);
  var a = Ae((n = t == null ? void 0 : t.additionalDigits) !== null && n !== void 0 ? n : 2);
  if (a !== 2 && a !== 1 && a !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return new Date(NaN);
  var r = KT(e), o;
  if (r.date) {
    var l = XT(r.date, a);
    o = QT(l.restDateString, l.year);
  }
  if (!o || isNaN(o.getTime()))
    return new Date(NaN);
  var i = o.getTime(), s = 0, u;
  if (r.time && (s = ZT(r.time), isNaN(s)))
    return new Date(NaN);
  if (r.timezone) {
    if (u = JT(r.timezone), isNaN(u))
      return new Date(NaN);
  } else {
    var d = new Date(i + s), c = new Date(0);
    return c.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()), c.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()), c;
  }
  return new Date(i + s + u);
}
var Xl = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, zT = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, qT = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, GT = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function KT(e) {
  var t = {}, n = e.split(Xl.dateTimeDelimiter), a;
  if (n.length > 2)
    return t;
  if (/:/.test(n[0]) ? a = n[0] : (t.date = n[0], a = n[1], Xl.timeZoneDelimiter.test(t.date) && (t.date = e.split(Xl.timeZoneDelimiter)[0], a = e.substr(t.date.length, e.length))), a) {
    var r = Xl.timezone.exec(a);
    r ? (t.time = a.replace(r[1], ""), t.timezone = r[1]) : t.time = a;
  }
  return t;
}
function XT(e, t) {
  var n = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"), a = e.match(n);
  if (!a)
    return {
      year: NaN,
      restDateString: ""
    };
  var r = a[1] ? parseInt(a[1]) : null, o = a[2] ? parseInt(a[2]) : null;
  return {
    year: o === null ? r : o * 100,
    restDateString: e.slice((a[1] || a[2]).length)
  };
}
function QT(e, t) {
  if (t === null)
    return new Date(NaN);
  var n = e.match(zT);
  if (!n)
    return new Date(NaN);
  var a = !!n[4], r = Lo(n[1]), o = Lo(n[2]) - 1, l = Lo(n[3]), i = Lo(n[4]), s = Lo(n[5]) - 1;
  if (a)
    return rN(t, i, s) ? eN(t, i, s) : new Date(NaN);
  var u = new Date(0);
  return !nN(t, o, l) || !aN(t, r) ? new Date(NaN) : (u.setUTCFullYear(t, o, Math.max(r, l)), u);
}
function Lo(e) {
  return e ? parseInt(e) : 1;
}
function ZT(e) {
  var t = e.match(qT);
  if (!t)
    return NaN;
  var n = Ju(t[1]), a = Ju(t[2]), r = Ju(t[3]);
  return oN(n, a, r) ? n * ev + a * Jd + r * 1e3 : NaN;
}
function Ju(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function JT(e) {
  if (e === "Z")
    return 0;
  var t = e.match(GT);
  if (!t)
    return 0;
  var n = t[1] === "+" ? -1 : 1, a = parseInt(t[2]), r = t[3] && parseInt(t[3]) || 0;
  return lN(a, r) ? n * (a * ev + r * Jd) : NaN;
}
function eN(e, t, n) {
  var a = new Date(0);
  a.setUTCFullYear(e, 0, 4);
  var r = a.getUTCDay() || 7, o = (t - 1) * 7 + n + 1 - r;
  return a.setUTCDate(a.getUTCDate() + o), a;
}
var tN = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Eb(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function nN(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (tN[t] || (Eb(e) ? 29 : 28));
}
function aN(e, t) {
  return t >= 1 && t <= (Eb(e) ? 366 : 365);
}
function rN(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function oN(e, t, n) {
  return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function lN(e, t) {
  return t >= 0 && t <= 59;
}
function tl(e, t) {
  $e(2, arguments);
  var n = Re(e), a = Ae(t), r = n.getFullYear(), o = n.getDate(), l = new Date(0);
  l.setFullYear(r, a, 15), l.setHours(0, 0, 0, 0);
  var i = hC(l);
  return n.setMonth(a, Math.min(o, i)), n;
}
function Wi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wi = function(n) {
    return typeof n;
  } : Wi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Wi(e);
}
function Xt(e, t) {
  if ($e(2, arguments), Wi(t) !== "object" || t === null)
    throw new RangeError("values parameter must be an object");
  var n = Re(e);
  return isNaN(n.getTime()) ? new Date(NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = tl(n, t.month)), t.date != null && n.setDate(Ae(t.date)), t.hours != null && n.setHours(Ae(t.hours)), t.minutes != null && n.setMinutes(Ae(t.minutes)), t.seconds != null && n.setSeconds(Ae(t.seconds)), t.milliseconds != null && n.setMilliseconds(Ae(t.milliseconds)), n);
}
function $b(e, t) {
  $e(2, arguments);
  var n = Re(e), a = Ae(t);
  return n.setHours(a), n;
}
function sv(e, t) {
  $e(2, arguments);
  var n = Re(e), a = Ae(t);
  return n.setMilliseconds(a), n;
}
function Pb(e, t) {
  $e(2, arguments);
  var n = Re(e), a = Ae(t);
  return n.setMinutes(a), n;
}
function Tb(e, t) {
  $e(2, arguments);
  var n = Re(e), a = Ae(t);
  return n.setSeconds(a), n;
}
function Er(e, t) {
  $e(2, arguments);
  var n = Re(e), a = Ae(t);
  return isNaN(n.getTime()) ? new Date(NaN) : (n.setFullYear(a), n);
}
function so(e, t) {
  $e(2, arguments);
  var n = Ae(t);
  return oa(e, -n);
}
function zi(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zi = function(n) {
    return typeof n;
  } : zi = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, zi(e);
}
function iN(e, t) {
  if ($e(2, arguments), !t || zi(t) !== "object")
    return new Date(NaN);
  var n = t.years ? Ae(t.years) : 0, a = t.months ? Ae(t.months) : 0, r = t.weeks ? Ae(t.weeks) : 0, o = t.days ? Ae(t.days) : 0, l = t.hours ? Ae(t.hours) : 0, i = t.minutes ? Ae(t.minutes) : 0, s = t.seconds ? Ae(t.seconds) : 0, u = so(e, a + n * 12), d = YT(u, o + r * 7), c = i + l * 60, f = s + c * 60, v = f * 1e3, y = new Date(d.getTime() - v);
  return y;
}
function sN(e, t) {
  $e(2, arguments);
  var n = Ae(t);
  return cb(e, -n);
}
function bu() {
  return Z(), me(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Ie("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      Ie("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Ie("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Ie("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
function uN() {
  return Z(), me(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Ie("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      Ie("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
function hy() {
  return Z(), me(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Ie("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function yy() {
  return Z(), me(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Ie("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
function Nb() {
  return Z(), me(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Ie("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      Ie("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
function Db() {
  return Z(), me(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Ie("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function Vb() {
  return Z(), me(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Ie("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
const py = (e, t, n) => {
  const a = od(e, t.slice(0, e.length), new Date());
  return Jo(a) && fb(a) ? Xt(a, {
    hours: +n.hours,
    minutes: +(n == null ? void 0 : n.minutes),
    seconds: +(n == null ? void 0 : n.seconds),
    milliseconds: 0
  }) : null;
}, cN = (e, t, n) => {
  const a = Array.isArray(n) ? n[0] : n;
  if (typeof t == "string")
    return py(e, t, a);
  if (Array.isArray(t)) {
    let r = null;
    for (const o of t)
      if (r = py(e, o, a), r)
        break;
    return r;
  }
  return typeof t == "function" ? t(e) : null;
}, se = (e) => e ? new Date(e) : new Date(), fN = (e, t) => {
  if (t) {
    const a = (e.getMonth() + 1).toString().padStart(2, "0"), r = e.getDate().toString().padStart(2, "0"), o = e.getHours().toString().padStart(2, "0"), l = e.getMinutes().toString().padStart(2, "0");
    return `${e.getFullYear()}-${a}-${r}T${o}:${l}:00.000Z`;
  }
  const n = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(n).toISOString();
}, ua = (e) => {
  let t = se(JSON.parse(JSON.stringify(e)));
  return t = $b(t, 0), t = Pb(t, 0), t = Tb(t, 0), t = sv(t, 0), t;
}, Vn = (e, t, n, a) => {
  let r = e ? se(e) : se();
  return (t || t === 0) && (r = $b(r, +t)), (n || n === 0) && (r = Pb(r, +n)), (a || a === 0) && (r = Tb(r, +a)), sv(r, 0);
}, Zt = (e, t) => !e || !t ? !1 : av(ua(e), ua(t)), pt = (e, t) => !e || !t ? !1 : _b(ua(e), ua(t)), cn = (e, t) => !e || !t ? !1 : nv(ua(e), ua(t)), Ib = (e, t, n) => e && e[0] && e[1] ? cn(n, e[0]) && Zt(n, e[1]) : e && e[0] && t ? cn(n, e[0]) && Zt(n, t) || Zt(n, e[0]) && cn(n, t) : !1, jo = Ct({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Ab = () => {
  const e = (n) => {
    jo.menuFocused = n;
  }, t = (n) => {
    jo.shiftKeyInMenu !== n && (jo.shiftKeyInMenu = n);
  };
  return {
    control: _(() => ({ shiftKeyInMenu: jo.shiftKeyInMenu, menuFocused: jo.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
};
function uv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gs = {}, dN = {
  get exports() {
    return Gs;
  },
  set exports(e) {
    Gs = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(a) {
    if (a === null || a === !0 || a === !1)
      return NaN;
    var r = Number(a);
    return isNaN(r) ? r : r < 0 ? Math.ceil(r) : Math.floor(r);
  }
  e.exports = t.default;
})(dN, Gs);
const vN = /* @__PURE__ */ uv(Gs);
var Ks = {}, mN = {
  get exports() {
    return Ks;
  },
  set exports(e) {
    Ks = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(a) {
    var r = new Date(Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()));
    return r.setUTCFullYear(a.getFullYear()), a.getTime() - r.getTime();
  }
  e.exports = t.default;
})(mN, Ks);
const gy = /* @__PURE__ */ uv(Ks);
function hN(e, t) {
  var n = bN(t);
  return n.formatToParts ? pN(n, e) : gN(n, e);
}
var yN = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function pN(e, t) {
  try {
    for (var n = e.formatToParts(t), a = [], r = 0; r < n.length; r++) {
      var o = yN[n[r].type];
      o >= 0 && (a[o] = parseInt(n[r].value, 10));
    }
    return a;
  } catch (l) {
    if (l instanceof RangeError)
      return [NaN];
    throw l;
  }
}
function gN(e, t) {
  var n = e.format(t).replace(/\u200E/g, ""), a = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
  return [a[3], a[1], a[2], a[4], a[5], a[6]];
}
var ec = {};
function bN(e) {
  if (!ec[e]) {
    var t = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date("2014-06-25T04:00:00.123Z")), n = t === "06/25/2014, 00:00:00" || t === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    ec[e] = n ? new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return ec[e];
}
function cv(e, t, n, a, r, o, l) {
  var i = new Date(0);
  return i.setUTCFullYear(e, t, n), i.setUTCHours(a, r, o, l), i;
}
var by = 36e5, _N = 6e4, tc = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function fv(e, t, n) {
  var a, r;
  if (!e || (a = tc.timezoneZ.exec(e), a))
    return 0;
  var o;
  if (a = tc.timezoneHH.exec(e), a)
    return o = parseInt(a[1], 10), _y(o) ? -(o * by) : NaN;
  if (a = tc.timezoneHHMM.exec(e), a) {
    o = parseInt(a[1], 10);
    var l = parseInt(a[2], 10);
    return _y(o, l) ? (r = Math.abs(o) * by + l * _N, o > 0 ? -r : r) : NaN;
  }
  if (kN(e)) {
    t = new Date(t || Date.now());
    var i = n ? t : wN(t), s = ld(i, e), u = n ? s : SN(t, s, e);
    return -u;
  }
  return NaN;
}
function wN(e) {
  return cv(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function ld(e, t) {
  var n = hN(e, t), a = cv(
    n[0],
    n[1] - 1,
    n[2],
    n[3] % 24,
    n[4],
    n[5],
    0
  ).getTime(), r = e.getTime(), o = r % 1e3;
  return r -= o >= 0 ? o : 1e3 + o, a - r;
}
function SN(e, t, n) {
  var a = e.getTime(), r = a - t, o = ld(new Date(r), n);
  if (t === o)
    return t;
  r -= o - t;
  var l = ld(new Date(r), n);
  return o === l ? o : Math.max(o, l);
}
function _y(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
var wy = {};
function kN(e) {
  if (wy[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), wy[e] = !0, !0;
  } catch {
    return !1;
  }
}
var xN = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const Mb = xN;
var nc = 36e5, Sy = 6e4, ON = 2, un = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: Mb
};
function id(e, t) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return new Date(NaN);
  var n = t || {}, a = n.additionalDigits == null ? ON : vN(n.additionalDigits);
  if (a !== 2 && a !== 1 && a !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return new Date(NaN);
  var r = CN(e), o = EN(r.date, a), l = o.year, i = o.restDateString, s = $N(i, l);
  if (isNaN(s))
    return new Date(NaN);
  if (s) {
    var u = s.getTime(), d = 0, c;
    if (r.time && (d = PN(r.time), isNaN(d)))
      return new Date(NaN);
    if (r.timeZone || n.timeZone) {
      if (c = fv(r.timeZone || n.timeZone, new Date(u + d)), isNaN(c))
        return new Date(NaN);
    } else
      c = gy(new Date(u + d)), c = gy(new Date(u + d + c));
    return new Date(u + d + c);
  } else
    return new Date(NaN);
}
function CN(e) {
  var t = {}, n = un.dateTimePattern.exec(e), a;
  if (n ? (t.date = n[1], a = n[3]) : (n = un.datePattern.exec(e), n ? (t.date = n[1], a = n[2]) : (t.date = null, a = e)), a) {
    var r = un.timeZone.exec(a);
    r ? (t.time = a.replace(r[1], ""), t.timeZone = r[1].trim()) : t.time = a;
  }
  return t;
}
function EN(e, t) {
  var n = un.YYY[t], a = un.YYYYY[t], r;
  if (r = un.YYYY.exec(e) || a.exec(e), r) {
    var o = r[1];
    return {
      year: parseInt(o, 10),
      restDateString: e.slice(o.length)
    };
  }
  if (r = un.YY.exec(e) || n.exec(e), r) {
    var l = r[1];
    return {
      year: parseInt(l, 10) * 100,
      restDateString: e.slice(l.length)
    };
  }
  return {
    year: null
  };
}
function $N(e, t) {
  if (t === null)
    return null;
  var n, a, r, o;
  if (e.length === 0)
    return a = new Date(0), a.setUTCFullYear(t), a;
  if (n = un.MM.exec(e), n)
    return a = new Date(0), r = parseInt(n[1], 10) - 1, xy(t, r) ? (a.setUTCFullYear(t, r), a) : new Date(NaN);
  if (n = un.DDD.exec(e), n) {
    a = new Date(0);
    var l = parseInt(n[1], 10);
    return DN(t, l) ? (a.setUTCFullYear(t, 0, l), a) : new Date(NaN);
  }
  if (n = un.MMDD.exec(e), n) {
    a = new Date(0), r = parseInt(n[1], 10) - 1;
    var i = parseInt(n[2], 10);
    return xy(t, r, i) ? (a.setUTCFullYear(t, r, i), a) : new Date(NaN);
  }
  if (n = un.Www.exec(e), n)
    return o = parseInt(n[1], 10) - 1, Oy(t, o) ? ky(t, o) : new Date(NaN);
  if (n = un.WwwD.exec(e), n) {
    o = parseInt(n[1], 10) - 1;
    var s = parseInt(n[2], 10) - 1;
    return Oy(t, o, s) ? ky(t, o, s) : new Date(NaN);
  }
  return null;
}
function PN(e) {
  var t, n, a;
  if (t = un.HH.exec(e), t)
    return n = parseFloat(t[1].replace(",", ".")), ac(n) ? n % 24 * nc : NaN;
  if (t = un.HHMM.exec(e), t)
    return n = parseInt(t[1], 10), a = parseFloat(t[2].replace(",", ".")), ac(n, a) ? n % 24 * nc + a * Sy : NaN;
  if (t = un.HHMMSS.exec(e), t) {
    n = parseInt(t[1], 10), a = parseInt(t[2], 10);
    var r = parseFloat(t[3].replace(",", "."));
    return ac(n, a, r) ? n % 24 * nc + a * Sy + r * 1e3 : NaN;
  }
  return null;
}
function ky(e, t, n) {
  t = t || 0, n = n || 0;
  var a = new Date(0);
  a.setUTCFullYear(e, 0, 4);
  var r = a.getUTCDay() || 7, o = t * 7 + n + 1 - r;
  return a.setUTCDate(a.getUTCDate() + o), a;
}
var TN = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], NN = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Rb(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function xy(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    var a = Rb(e);
    if (a && n > NN[t] || !a && n > TN[t])
      return !1;
  }
  return !0;
}
function DN(e, t) {
  if (t < 1)
    return !1;
  var n = Rb(e);
  return !(n && t > 366 || !n && t > 365);
}
function Oy(e, t, n) {
  return !(t < 0 || t > 52 || n != null && (n < 0 || n > 6));
}
function ac(e, t, n) {
  return !(e != null && (e < 0 || e >= 25) || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
var Xs = {}, VN = {
  get exports() {
    return Xs;
  },
  set exports(e) {
    Xs = e;
  }
}, Qs = {}, IN = {
  get exports() {
    return Qs;
  },
  set exports(e) {
    Qs = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(a, r) {
    if (a == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var o in r)
      Object.prototype.hasOwnProperty.call(r, o) && (a[o] = r[o]);
    return a;
  }
  e.exports = t.default;
})(IN, Qs);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  var n = a(Qs);
  function a(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function r(o) {
    return (0, n.default)({}, o);
  }
  e.exports = t.default;
})(VN, Xs);
const AN = /* @__PURE__ */ uv(Xs);
function MN(e, t, n) {
  var a = id(e, n), r = fv(t, a, !0), o = new Date(a.getTime() - r), l = new Date(0);
  return l.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), l.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), l;
}
function RN(e, t, n) {
  if (typeof e == "string" && !e.match(Mb)) {
    var a = AN(n);
    return a.timeZone = t, id(e, a);
  }
  var r = id(e, n), o = cv(
    r.getFullYear(),
    r.getMonth(),
    r.getDate(),
    r.getHours(),
    r.getMinutes(),
    r.getSeconds(),
    r.getMilliseconds()
  ).getTime(), l = fv(t, new Date(o));
  return new Date(o + l);
}
const BN = (e, t = 3) => {
  const n = [];
  for (let a = 0; a < e.length; a += t)
    n.push([e[a], e[a + 1], e[a + 2]]);
  return n;
}, FN = (e, t) => {
  const n = [1, 2, 3, 4, 5, 6, 7].map((o) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(new Date(`2017-01-0${o}T00:00:00+00:00`)).slice(0, 2)), a = n.slice(0, t), r = n.slice(t + 1, n.length);
  return [n[t]].concat(...r).concat(...a);
}, LN = (e) => {
  const t = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    t.push({ value: +n, text: `${n}` });
  return t;
}, jN = (e, t) => {
  const n = new Intl.DateTimeFormat(e, { month: t, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((a) => {
    const r = a < 10 ? `0${a}` : a;
    return new Date(`2017-${r}-01T00:00:00+00:00`);
  }).map((a, r) => ({
    text: n.format(a),
    value: r
  }));
}, HN = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Mt = (e) => {
  const t = M(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, UN = (e) => Object.assign({ type: "dot" }, e), Bb = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Zs = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, qt = (e) => e, Cy = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Ey = (e) => Object.assign(
  {
    menuAppear: "dp-menu-appear",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down"
  },
  e
), YN = (e) => Object.assign(
  {
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (t) => `Increment ${t}`,
    decrementValue: (t) => `Decrement ${t}`,
    openTpOverlay: (t) => `Open ${t} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    day: () => ""
  },
  e
), WN = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, zN = (e, t, n) => e || (typeof n == "string" ? n : t), qN = (e) => typeof e == "boolean" ? e ? Ey({}) : !1 : Ey(e), GN = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), KN = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), En = (e) => {
  const t = () => {
    if (e.partialRange)
      return null;
    throw new Error(Zs.prop("partial-range"));
  }, n = _(() => ({
    ariaLabels: YN(e.ariaLabels),
    textInputOptions: Object.assign(GN(), e.textInputOptions),
    multiCalendars: WN(e.multiCalendars),
    previewFormat: zN(e.previewFormat, e.format, o()),
    filters: KN(e.filters),
    transitions: qN(e.transitions),
    startTime: f()
  })), a = (h) => {
    if (e.range)
      return h();
    throw new Error(Zs.prop("range"));
  }, r = () => {
    const h = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${h}` : `hh:mm${h} aa`;
  }, o = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? r() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${r()}` : "MM/dd/yyyy", l = (h, P) => {
    if (typeof e.format == "function")
      return e.format(h);
    const W = P || o(), H = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(h) ? `${el(h[0], W, H)} ${e.modelAuto && !h[1] ? "" : n.value.textInputOptions.rangeSeparator || "-"} ${h[1] ? el(h[1], W, H) : ""}` : el(h, W, H);
  }, i = (h) => e.timezone ? MN(h, e.timezone) : h, s = (h) => e.timezone ? RN(h, e.timezone) : h, u = _(() => (h) => {
    var P;
    return (P = e.hideNavigation) == null ? void 0 : P.includes(h);
  }), d = (h) => {
    const P = e.maxDate ? cn(i(h), i(se(e.maxDate))) : !1, W = e.minDate ? Zt(i(h), i(se(e.minDate))) : !1, H = O(h, e.disabledDates), j = n.value.filters.months.map((q) => +q).includes(vt(h)), X = e.disabledWeekDays.length ? e.disabledWeekDays.some((q) => +q === mC(h)) : !1, Q = e.allowedDates.length ? !e.allowedDates.some((q) => pt(i(se(q)), i(h))) : !1, Y = mt(h), I = Y < +e.yearRange[0] || Y > +e.yearRange[1];
    return !(P || W || H || j || I || X || Q);
  }, c = (h) => {
    const P = {
      hours: pa(se()),
      minutes: ga(se()),
      seconds: e.enableSeconds ? mo(se()) : 0
    };
    return Object.assign(P, h);
  }, f = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [c(e.startTime[0]), c(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? c(e.startTime) : null, v = (h) => !d(h), y = (h) => Array.isArray(h) ? Jo(h[0]) && (h[1] ? Jo(h[1]) : !0) : h ? Jo(h) : !1, p = (h) => h instanceof Date ? h : WT(h), x = (h) => {
    const P = Nr(i(h), { weekStartsOn: +e.weekStart }), W = uO(i(h), { weekStartsOn: +e.weekStart });
    return [P, W];
  }, O = (h, P) => Array.isArray(P) ? P.some((W) => pt(i(se(W)), i(h))) : P(h), E = (h, P, W) => {
    let H = h ? se(h) : se();
    return (P || P === 0) && (H = tl(H, P)), W && (H = Er(H, W)), H;
  }, S = (h) => Xt(se(), { hours: pa(h), minutes: ga(h), seconds: mo(h) }), N = (h) => Xt(se(), {
    hours: +h.hours || 0,
    minutes: +h.minutes || 0,
    seconds: +h.seconds || 0
  }), V = (h, P, W, H) => {
    if (!h)
      return !0;
    if (H) {
      const j = W === "max" ? av(h, P) : nv(h, P), X = { seconds: 0, milliseconds: 0 };
      return j || _b(Xt(h, X), Xt(P, X));
    }
    return W === "max" ? h.getTime() <= P.getTime() : h.getTime() >= P.getTime();
  }, $ = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, k = (h) => Array.isArray(h) ? [h[0] ? S(h[0]) : null, h[1] ? S(h[1]) : null] : S(h), g = (h) => {
    const P = e.maxTime ? N(e.maxTime) : se(e.maxDate);
    return Array.isArray(h) ? V(h[0], P, "max", !!e.maxDate) && V(h[1], P, "max", !!e.maxDate) : V(h, P, "max", !!e.maxDate);
  }, b = (h, P) => {
    const W = e.minTime ? N(e.minTime) : se(e.minDate);
    return Array.isArray(h) ? V(h[0], W, "min", !!e.minDate) && V(h[1], W, "min", !!e.minDate) && P : V(h, W, "min", !!e.minDate) && P;
  }, w = (h) => {
    let P = !0;
    if (!h || $())
      return !0;
    const W = !e.minDate && !e.maxDate ? k(h) : h;
    return (e.maxTime || e.maxDate) && (P = g(qt(W))), (e.minTime || e.minDate) && (P = b(qt(W), P)), P;
  }, C = (h, P) => {
    const W = se(JSON.parse(JSON.stringify(h))), H = [];
    for (let j = 0; j < 7; j++) {
      const X = Ya(W, j), Q = vt(X) !== P;
      H.push({
        text: e.hideOffsetDates && Q ? "" : X.getDate(),
        value: X,
        current: !Q,
        classData: {}
      });
    }
    return H;
  }, T = (h, P) => {
    const W = [], H = se(i(new Date(P, h))), j = se(i(new Date(P, h + 1, 0))), X = Nr(H, { weekStartsOn: e.weekStart }), Q = (Y) => {
      const I = C(Y, h);
      if (W.push({ days: I }), !W[W.length - 1].days.some(
        (q) => pt(ua(q.value), ua(j))
      )) {
        const q = Ya(Y, 7);
        Q(q);
      }
    };
    if (Q(X), e.sixWeeks && W.length < 6) {
      const Y = 6 - W.length;
      for (let I = 1; I <= Y; I++) {
        const q = W[W.length - 1], we = q.days[q.days.length - 1], be = C(Ya(we.value, 1), vt(H));
        W.push({ days: be });
      }
    }
    return W;
  }, A = (h, P, W) => [Xt(se(h), { date: 1 }), Xt(se(), { month: P, year: W, date: 1 })], z = (h, P) => Zt(...A(e.minDate, h, P)) || pt(...A(e.minDate, h, P)), U = (h, P) => cn(...A(e.maxDate, h, P)) || pt(...A(e.maxDate, h, P)), B = (h, P, W) => {
    let H = !1;
    return e.maxDate && W && U(h, P) && (H = !0), e.minDate && !W && z(h, P) && (H = !0), H;
  };
  return {
    checkPartialRangeValue: t,
    checkRangeEnabled: a,
    getZonedDate: i,
    getZonedToUtc: s,
    formatDate: l,
    getDefaultPattern: o,
    validateDate: d,
    getDefaultStartTime: f,
    isDisabled: v,
    isValidDate: y,
    sanitizeDate: p,
    getWeekFromDate: x,
    matchDate: O,
    setDateMonthOrYear: E,
    isValidTime: w,
    getCalendarDays: T,
    validateMonthYearInRange: (h, P, W, H) => {
      let j = !1;
      return H ? e.minDate && e.maxDate ? j = B(h, P, W) : (e.minDate && z(h, P) || e.maxDate && U(h, P)) && (j = !0) : j = !0, j;
    },
    validateMaxDate: U,
    validateMinDate: z,
    assignDefaultTime: c,
    defaults: n,
    hideNavigationButtons: u
  };
}, dt = Ct({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), rc = R(null), Ql = R(!1), oc = R(!1), lc = R(!1), ic = R(!1), on = R(0), Ht = R(0), Qa = () => {
  const e = _(() => Ql.value ? [...dt.selectionGrid, dt.actionRow].filter((c) => c.length) : oc.value ? [
    ...dt.timePicker[0],
    ...dt.timePicker[1],
    ic.value ? [] : [rc.value],
    dt.actionRow
  ].filter((c) => c.length) : lc.value ? [...dt.monthPicker, dt.actionRow] : [dt.monthYear, ...dt.calendar, dt.time, dt.actionRow].filter((c) => c.length)), t = (c) => {
    on.value = c ? on.value + 1 : on.value - 1;
    let f = null;
    e.value[Ht.value] && (f = e.value[Ht.value][on.value]), f || (on.value = c ? on.value - 1 : on.value + 1);
  }, n = (c) => {
    Ht.value === 0 && !c || Ht.value === e.value.length && c || (Ht.value = c ? Ht.value + 1 : Ht.value - 1, e.value[Ht.value] ? e.value[Ht.value] && !e.value[Ht.value][on.value] && on.value !== 0 && (on.value = e.value[Ht.value].length - 1) : Ht.value = c ? Ht.value - 1 : Ht.value + 1);
  }, a = (c) => {
    let f = null;
    e.value[Ht.value] && (f = e.value[Ht.value][on.value]), f ? f.focus({ preventScroll: !Ql.value }) : on.value = c ? on.value - 1 : on.value + 1;
  }, r = () => {
    t(!0), a(!0);
  }, o = () => {
    t(!1), a(!1);
  }, l = () => {
    n(!1), a(!0);
  }, i = () => {
    n(!0), a(!0);
  }, s = (c, f) => {
    dt[f] = c;
  }, u = (c, f) => {
    dt[f] = c;
  }, d = () => {
    on.value = 0, Ht.value = 0;
  };
  return {
    buildMatrix: s,
    buildMultiLevelMatrix: u,
    setTimePickerBackRef: (c) => {
      rc.value = c;
    },
    setSelectionGrid: (c) => {
      Ql.value = c, d(), c || (dt.selectionGrid = []);
    },
    setTimePicker: (c, f = !1) => {
      oc.value = c, ic.value = f, d(), c || (dt.timePicker[0] = [], dt.timePicker[1] = []);
    },
    setTimePickerElements: (c, f = 0) => {
      dt.timePicker[f] = c;
    },
    arrowRight: r,
    arrowLeft: o,
    arrowUp: l,
    arrowDown: i,
    clearArrowNav: () => {
      dt.monthYear = [], dt.calendar = [], dt.time = [], dt.actionRow = [], dt.selectionGrid = [], dt.timePicker[0] = [], dt.timePicker[1] = [], Ql.value = !1, oc.value = !1, ic.value = !1, lc.value = !1, d(), rc.value = null;
    },
    setMonthPicker: (c) => {
      lc.value = c, d();
    },
    refSets: dt
    // exposed for testing
  };
}, $y = (e) => Array.isArray(e), ir = (e) => Array.isArray(e), Py = (e) => Array.isArray(e) && e.length === 2, XN = (e, t, n, a, r) => {
  const {
    getDefaultStartTime: o,
    isDisabled: l,
    sanitizeDate: i,
    getWeekFromDate: s,
    setDateMonthOrYear: u,
    validateMonthYearInRange: d,
    defaults: c
  } = En(e), f = _({
    get: () => e.internalModelValue,
    set: (L) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", L);
    }
  }), v = R([]);
  pe(f, () => {
    V();
  });
  const y = R([{ month: vt(se()), year: mt(se()) }]), p = Ct({
    hours: e.range ? [pa(se()), pa(se())] : pa(se()),
    minutes: e.range ? [ga(se()), ga(se())] : ga(se()),
    seconds: e.range ? [0, 0] : 0
  }), x = _(
    () => (L) => y.value[L] ? y.value[L].month : 0
  ), O = _(
    () => (L) => y.value[L] ? y.value[L].year : 0
  ), E = _(() => e.flow && e.flow.length && !e.partialFlow ? r.value === e.flow.length : !0), S = (L, J, ke) => {
    var Pe, ut;
    y.value[L] || (y.value[L] = { month: 0, year: 0 }), y.value[L].month = J === null ? (Pe = y.value[L]) == null ? void 0 : Pe.month : J, y.value[L].year = ke === null ? (ut = y.value[L]) == null ? void 0 : ut.year : ke;
  }, N = (L, J) => {
    p[L] = J;
  };
  ft(() => {
    f.value || (e.startDate && (S(0, vt(se(e.startDate)), mt(se(e.startDate))), c.value.multiCalendars && te(0)), c.value.startTime && U()), V(!0);
  });
  const V = (L = !1) => {
    if (f.value)
      return Array.isArray(f.value) ? (v.value = f.value, w(L)) : k(f.value);
    if (e.timePicker)
      return C();
    if (e.monthPicker && !e.range)
      return T();
    if (e.yearPicker && !e.range)
      return A();
    if (c.value.multiCalendars && L && !e.startDate)
      return $(se(), L);
  }, $ = (L, J = !1) => {
    if ((!c.value.multiCalendars || !e.multiStatic || J) && S(0, vt(L), mt(L)), c.value.multiCalendars)
      for (let ke = 1; ke < c.value.multiCalendars; ke++) {
        const Pe = Xt(se(), { month: x.value(ke - 1), year: O.value(ke - 1) }), ut = ub(Pe, { months: 1 });
        y.value[ke] = { month: vt(ut), year: mt(ut) };
      }
  }, k = (L) => {
    $(L), N("hours", pa(L)), N("minutes", ga(L)), N("seconds", mo(L));
  }, g = (L, J) => {
    $(L[0], J);
    const ke = (Pe, ut) => [
      Pe(L[0]),
      L[1] ? Pe(L[1]) : p[ut][1]
    ];
    N("hours", ke(pa, "hours")), N("minutes", ke(ga, "minutes")), N("seconds", ke(mo, "seconds"));
  }, b = (L, J) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return g(L, J);
    if (e.multiDates) {
      const ke = L[L.length - 1];
      return k(ke);
    }
  }, w = (L) => {
    const J = f.value;
    b(J, L), c.value.multiCalendars && e.multiCalendarsSolo && h();
  }, C = () => {
    if (U(), !e.range)
      f.value = Vn(se(), p.hours, p.minutes, z());
    else {
      const L = p.hours, J = p.minutes;
      f.value = [
        Vn(se(), L[0], J[0], z()),
        Vn(se(), L[1], J[1], z(!1))
      ];
    }
  }, T = () => {
    f.value = u(se(), x.value(0), O.value(0));
  }, A = () => {
    f.value = se();
  }, z = (L = !0) => e.enableSeconds ? Array.isArray(p.seconds) ? L ? p.seconds[0] : p.seconds[1] : p.seconds : 0, U = () => {
    const L = o();
    if (L) {
      const J = Array.isArray(L), ke = J ? [+L[0].hours, +L[1].hours] : +L.hours, Pe = J ? [+L[0].minutes, +L[1].minutes] : +L.minutes, ut = J ? [+L[0].seconds, +L[1].seconds] : +L.seconds;
      N("hours", ke), N("minutes", Pe), e.enableSeconds && N("seconds", ut);
    }
  }, B = () => Array.isArray(f.value) && f.value.length ? f.value[f.value.length - 1] : null, h = () => {
    if (Array.isArray(f.value) && f.value.length === 2) {
      const L = se(
        se(f.value[1] ? f.value[1] : oa(f.value[0], 1))
      ), [J, ke] = [vt(f.value[0]), mt(f.value[0])], [Pe, ut] = [vt(f.value[1]), mt(f.value[1])];
      (J !== Pe || J === Pe && ke !== ut) && e.multiCalendarsSolo && S(1, vt(L), mt(L));
    }
  }, P = (L) => {
    const J = oa(L, 1);
    return { month: vt(J), year: mt(J) };
  }, W = (L) => {
    const J = vt(se(L)), ke = mt(se(L));
    if (S(0, J, ke), c.value.multiCalendars > 0)
      for (let Pe = 1; Pe < c.value.multiCalendars; Pe++) {
        const ut = P(
          Xt(se(L), { year: x.value(Pe - 1), month: O.value(Pe - 1) })
        );
        S(Pe, ut.month, ut.year);
      }
  }, H = (L) => {
    if (f.value && Array.isArray(f.value))
      if (f.value.some((J) => pt(L, J))) {
        const J = f.value.filter((ke) => !pt(ke, L));
        f.value = J.length ? J : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > f.value.length || !e.multiDatesLimit) && f.value.push(L);
    else
      f.value = [L];
  }, j = (L, J) => {
    const ke = cn(L, J) ? J : L, Pe = cn(J, L) ? J : L;
    return th({ start: ke, end: Pe });
  }, X = (L, J = 0) => {
    if (Array.isArray(f.value) && f.value[J]) {
      const ke = iO(L, f.value[J]), Pe = j(f.value[J], L), ut = Pe.length === 1 ? 0 : Pe.filter((Tn) => l(Tn)).length, At = Math.abs(ke) - ut;
      if (e.minRange && e.maxRange)
        return At >= +e.minRange && At <= +e.maxRange;
      if (e.minRange)
        return At >= +e.minRange;
      if (e.maxRange)
        return At <= +e.maxRange;
    }
    return !0;
  }, Q = (L) => Array.isArray(f.value) && f.value.length === 2 ? e.fixedStart && (cn(L, f.value[0]) || pt(L, f.value[0])) ? [f.value[0], L] : e.fixedEnd && (Zt(L, f.value[1]) || pt(L, f.value[1])) ? [L, f.value[1]] : (t("invalid-fixed-range", L), f.value) : [], Y = () => {
    e.autoApply && E.value && t("auto-apply", e.partialFlow);
  }, I = () => {
    e.autoApply && t("select-date");
  }, q = (L) => !th({ start: L[0], end: L[1] }).some((J) => l(J)), we = (L) => (f.value = s(se(L.value)), Y()), be = (L) => {
    const J = Vn(se(L.value), p.hours, p.minutes, z());
    e.multiDates ? H(J) : f.value = J, n(), Y();
  }, Oe = () => {
    v.value = f.value ? f.value.slice() : [], v.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (v.value = []);
  }, We = (L, J) => {
    const ke = [se(L.value), Ya(se(L.value), +e.autoRange)];
    q(ke) && (J && W(L.value), v.value = ke);
  }, yt = (L) => {
    De(L.value) || !X(L.value, e.fixedStart ? 0 : 1) || (v.value = Q(se(L.value)));
  }, De = (L) => e.noDisabledRange ? j(v.value[0], L).some((J) => l(J)) : !1, D = (L, J) => {
    if (Oe(), e.autoRange)
      return We(L, J);
    if (e.fixedStart || e.fixedEnd)
      return yt(L);
    v.value[0] ? X(se(L.value)) && !De(L.value) && (Zt(se(L.value), se(v.value[0])) ? v.value.unshift(se(L.value)) : v.value[1] = se(L.value)) : v.value[0] = se(L.value);
  }, F = (L) => {
    v.value[L] = Vn(
      v.value[L],
      p.hours[L],
      p.minutes[L],
      z(L !== 1)
    );
  }, K = () => {
    v.value.length && (v.value[0] && !v.value[1] ? F(0) : (F(0), F(1), n()), f.value = v.value.slice(), v.value[0] && v.value[1] && e.autoApply && t("auto-apply"), v.value[0] && !v.value[1] && e.modelAuto && e.autoApply && t("auto-apply"));
  }, ae = (L, J = !1) => {
    if (!(l(L.value) || !L.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return we(L);
      if (!e.range)
        return be(L);
      ir(p.hours) && ir(p.minutes) && !e.multiDates && (D(L, J), K());
    }
  }, G = (L) => {
    const J = L[0];
    return e.weekNumbers === "local" ? wC(J.value, { weekStartsOn: +e.weekStart }) : e.weekNumbers === "iso" ? pC(J.value) : typeof e.weekNumbers == "function" ? e.weekNumbers(J.value) : "";
  }, te = (L) => {
    for (let J = L - 1; J >= 0; J--) {
      const ke = so(Xt(se(), { month: x.value(J + 1), year: O.value(J + 1) }), 1);
      S(J, vt(ke), mt(ke));
    }
    for (let J = L + 1; J <= c.value.multiCalendars - 1; J++) {
      const ke = oa(Xt(se(), { month: x.value(J - 1), year: O.value(J - 1) }), 1);
      S(J, vt(ke), mt(ke));
    }
  }, re = (L) => u(se(), x.value(L), O.value(L)), ue = (L) => Vn(L, p.hours, p.minutes, z()), de = (L, J) => {
    const ke = e.monthPicker ? x.value(L) !== J.month || !J.fromNav : O.value(L) !== J.year;
    if (S(L, J.month, J.year), c.value.multiCalendars && !e.multiCalendarsSolo && te(L), e.monthPicker || e.yearPicker)
      if (e.range) {
        if (ke) {
          let Pe = f.value ? f.value.slice() : [];
          Pe.length === 2 && Pe[1] !== null && (Pe = []), Pe.length ? Zt(re(L), Pe[0]) ? Pe.unshift(re(L)) : Pe[1] = re(L) : Pe = [re(L)], f.value = Pe;
        }
      } else
        f.value = re(L);
    t("update-month-year", { instance: L, month: J.month, year: J.year }), a(e.multiCalendarsSolo ? L : void 0);
  }, le = async (L = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await Je();
      const J = e.monthPicker ? L : !1;
      e.range ? t("auto-apply", J || !f.value || f.value.length === 1) : t("auto-apply", J);
    }
    n();
  }, Se = (L, J) => {
    const ke = Xt(se(), { month: x.value(J), year: O.value(J) }), Pe = L < 0 ? oa(ke, 1) : so(ke, 1);
    d(vt(Pe), mt(Pe), L < 0, e.preventMinMaxNavigation) && (S(J, vt(Pe), mt(Pe)), c.value.multiCalendars && !e.multiCalendarsSolo && te(J), t("update-month-year", { instance: J, month: vt(Pe), year: mt(Pe) }), a());
  }, _e = (L) => {
    $y(L) && $y(f.value) && ir(p.hours) && ir(p.minutes) ? (L[0] && f.value[0] && (f.value[0] = Vn(L[0], p.hours[0], p.minutes[0], z())), L[1] && f.value[1] && (f.value[1] = Vn(L[1], p.hours[1], p.minutes[1], z(!1)))) : e.multiDates && Array.isArray(f.value) ? f.value[f.value.length - 1] = ue(L) : !e.range && !Py(L) && (f.value = ue(L)), t("time-update");
  }, Ee = (L, J = !0, ke = !1) => {
    const Pe = J ? L : p.hours, ut = !J && !ke ? L : p.minutes, At = ke ? L : p.seconds;
    if (e.range && Py(f.value) && ir(Pe) && ir(ut) && ir(At) && !e.disableTimeRangeValidation) {
      const Tn = (ee) => Vn(f.value[ee], Pe[ee], ut[ee], At[ee]), xt = (ee) => sv(f.value[ee], 0);
      if (pt(f.value[0], f.value[1]) && (nv(Tn(0), xt(1)) || av(Tn(1), xt(0))))
        return;
    }
    if (N("hours", Pe), N("minutes", ut), N("seconds", At), f.value)
      if (e.multiDates) {
        const Tn = B();
        Tn && _e(Tn);
      } else
        _e(f.value);
    else
      e.timePicker && _e(e.range ? [se(), se()] : se());
    n();
  }, Be = (L, J) => {
    e.monthChangeOnScroll && Se(e.monthChangeOnScroll !== "inverse" ? -L.deltaY : L.deltaY, J);
  }, Ue = (L, J, ke = !1) => {
    e.monthChangeOnArrows && e.vertical === ke && Ze(L, J);
  }, Ze = (L, J) => {
    Se(L === "right" ? -1 : 1, J);
  };
  return {
    time: p,
    month: x,
    year: O,
    modelValue: f,
    calendars: y,
    monthYearSelect: le,
    isDisabled: l,
    updateTime: Ee,
    getWeekNum: G,
    selectDate: ae,
    updateMonthYear: de,
    handleScroll: Be,
    getMarker: (L) => e.markers.find((J) => pt(i(L.value), i(J.date))),
    handleArrow: Ue,
    handleSwipe: Ze,
    selectCurrentDate: () => {
      e.range ? f.value && Array.isArray(f.value) && f.value[0] ? f.value = Zt(se(), f.value[0]) ? [se(), f.value[0]] : [f.value[0], se()] : f.value = [se()] : f.value = se(), I();
    },
    presetDateRange: (L, J) => {
      J || L.length && L.length <= 2 && e.range && (f.value = L.map((ke) => se(ke)), I(), e.multiCalendars && Je().then(() => V(!0)));
    }
  };
}, QN = (e, t, n) => {
  const a = R(), {
    getZonedToUtc: r,
    getZonedDate: o,
    formatDate: l,
    getDefaultPattern: i,
    checkRangeEnabled: s,
    checkPartialRangeValue: u,
    isValidDate: d,
    setDateMonthOrYear: c,
    defaults: f
  } = En(t), v = R(""), y = ne(t, "format");
  pe(a, () => {
    e("internal-model-change", a.value);
  }), pe(y, () => {
    P();
  });
  const p = (Y) => {
    const I = Y || se();
    return t.modelType ? H(I) : {
      hours: pa(I),
      minutes: ga(I),
      seconds: t.enableSeconds ? mo(I) : 0
    };
  }, x = (Y) => t.modelType ? H(Y) : { month: vt(Y), year: mt(Y) }, O = (Y) => Array.isArray(Y) ? s(() => [
    Er(se(), Y[0]),
    Y[1] ? Er(se(), Y[1]) : u()
  ]) : Er(se(), +Y), E = (Y, I) => (typeof Y == "string" || typeof Y == "number") && t.modelType ? W(Y) : I, S = (Y) => Array.isArray(Y) ? [
    E(
      Y[0],
      Vn(null, +Y[0].hours, +Y[0].minutes, Y[0].seconds)
    ),
    E(
      Y[1],
      Vn(null, +Y[1].hours, +Y[1].minutes, Y[1].seconds)
    )
  ] : E(Y, Vn(null, Y.hours, Y.minutes, Y.seconds)), N = (Y) => Array.isArray(Y) ? s(() => [
    E(Y[0], c(null, +Y[0].month, +Y[0].year)),
    E(
      Y[1],
      Y[1] ? c(null, +Y[1].month, +Y[1].year) : u()
    )
  ]) : E(Y, c(null, +Y.month, +Y.year)), V = (Y) => {
    if (Array.isArray(Y))
      return Y.map((I) => W(I));
    throw new Error(Zs.dateArr("multi-dates"));
  }, $ = (Y) => {
    if (Array.isArray(Y))
      return [se(Y[0]), se(Y[1])];
    throw new Error(Zs.dateArr("week-picker"));
  }, k = (Y) => t.modelAuto ? Array.isArray(Y) ? [W(Y[0]), W(Y[1])] : t.autoApply ? [W(Y)] : [W(Y), null] : Array.isArray(Y) ? s(() => [
    W(Y[0]),
    Y[1] ? W(Y[1]) : u()
  ]) : W(Y), g = () => {
    Array.isArray(a.value) && t.range && a.value.length === 1 && a.value.push(u());
  }, b = () => {
    const Y = a.value;
    return [
      H(Y[0]),
      Y[1] ? H(Y[1]) : u()
    ];
  }, w = () => a.value[1] ? b() : H(qt(a.value[0])), C = () => (a.value || []).map((Y) => H(Y)), T = () => (g(), t.modelAuto ? w() : t.multiDates ? C() : Array.isArray(a.value) ? s(() => b()) : H(qt(a.value))), A = (Y) => Y ? t.timePicker ? S(qt(Y)) : t.monthPicker ? N(qt(Y)) : t.yearPicker ? O(qt(Y)) : t.multiDates ? V(qt(Y)) : t.weekPicker ? $(qt(Y)) : k(qt(Y)) : null, z = (Y) => {
    const I = A(Y);
    d(qt(I)) ? (a.value = qt(I), P()) : (a.value = null, v.value = "");
  }, U = () => {
    var Y;
    const I = (q) => {
      var we;
      return el(q, (we = f.value.textInputOptions) == null ? void 0 : we.format);
    };
    return `${I(a.value[0])} ${(Y = f.value.textInputOptions) == null ? void 0 : Y.rangeSeparator} ${a.value[1] ? I(a.value[1]) : ""}`;
  }, B = () => {
    var Y;
    return n.value && a.value ? Array.isArray(a.value) ? U() : el(a.value, (Y = f.value.textInputOptions) == null ? void 0 : Y.format) : l(a.value);
  }, h = () => {
    var Y;
    return a.value ? t.multiDates ? a.value.map((I) => l(I)).join("; ") : t.textInput && typeof ((Y = f.value.textInputOptions) == null ? void 0 : Y.format) == "string" ? B() : l(a.value) : "";
  }, P = () => {
    !t.format || typeof t.format == "string" ? v.value = h() : v.value = t.format(a.value);
  }, W = (Y) => {
    if (t.utc) {
      const I = new Date(Y);
      return t.utc === "preserve" ? new Date(I.getTime() + I.getTimezoneOffset() * 6e4) : I;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? o(new Date(Y)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? od(Y, i(), new Date()) : o(od(Y, t.modelType, new Date())) : o(new Date(Y));
  }, H = (Y) => Y ? t.utc ? fN(Y, t.utc === "preserve") : t.modelType ? t.modelType === "timestamp" ? +r(Y) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? l(r(Y)) : l(r(Y), t.modelType) : r(Y) : "", j = (Y) => {
    e("update:model-value", Y);
  }, X = (Y) => Array.isArray(a.value) ? [
    Y(a.value[0]),
    a.value[1] ? Y(a.value[1]) : u()
  ] : Y(qt(a.value)), Q = (Y) => j(qt(X(Y)));
  return {
    inputValue: v,
    internalModelValue: a,
    checkBeforeEmit: () => a.value ? t.range ? t.partialRange ? a.value.length >= 1 : a.value.length === 2 : !!a.value : !1,
    parseExternalModelValue: z,
    formatInputValue: P,
    emitModelValue: () => (P(), t.monthPicker ? Q(x) : t.timePicker ? Q(p) : t.yearPicker ? Q(mt) : t.weekPicker ? j(a.value) : j(T()))
  };
}, ZN = (e, t) => {
  const { validateMonthYearInRange: n, validateMaxDate: a, validateMinDate: r, defaults: o } = En(e), l = (c, f) => {
    let v = c;
    return o.value.filters.months.includes(vt(v)) ? (v = f ? oa(c, 1) : so(c, 1), l(v, f)) : v;
  }, i = (c, f) => {
    let v = c;
    return o.value.filters.years.includes(mt(v)) ? (v = f ? cb(c, 1) : sN(c, 1), i(v, f)) : v;
  }, s = (c) => {
    const f = Xt(new Date(), { month: e.month, year: e.year });
    let v = c ? oa(f, 1) : so(f, 1), y = vt(v), p = mt(v);
    o.value.filters.months.includes(y) && (v = l(v, c), y = vt(v), p = mt(v)), o.value.filters.years.includes(p) && (v = i(v, c), p = mt(v)), n(y, p, c, e.preventMinMaxNavigation) && u(y, p);
  }, u = (c, f) => {
    t("update-month-year", { month: c, year: f });
  }, d = _(() => (c) => {
    if (!e.preventMinMaxNavigation || c && !e.maxDate || !c && !e.minDate)
      return !1;
    const f = Xt(new Date(), { month: e.month, year: e.year }), v = c ? oa(f, 1) : so(f, 1), y = [vt(v), mt(v)];
    return c ? !a(...y) : !r(...y);
  });
  return { handleMonthYearChange: s, isDisabled: d, updateMonthYear: u };
};
var qi = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(qi || {});
const JN = (e, t, n, a) => {
  const r = R({
    top: "0",
    left: "0",
    transform: "none"
  }), o = R(!1), l = ne(a, "teleportCenter");
  pe(l, () => {
    p();
  });
  const i = (g) => {
    if (a.teleport) {
      const b = g.getBoundingClientRect();
      return {
        left: b.left + window.scrollX,
        top: b.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, s = (g, b) => {
    r.value.left = `${g + b}px`, r.value.transform = "translateX(-100%)";
  }, u = (g) => {
    r.value.left = `${g}px`, r.value.transform = "translateX(0)";
  }, d = (g, b, w = !1) => {
    a.position === qi.left && u(g), a.position === qi.right && s(g, b), a.position === qi.center && (r.value.left = `${g + b / 2}px`, r.value.transform = w ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, c = (g) => {
    const { width: b, height: w } = g.getBoundingClientRect(), { top: C, left: T } = a.altPosition ? a.altPosition(g) : i(g);
    return { top: +C, left: +T, width: b, height: w };
  }, f = () => {
    const g = Mt(t);
    if (g) {
      const { top: b, left: w, width: C, height: T } = c(g);
      r.value.top = `${b + T / 2}px`, r.value.transform = "translateY(-50%)", d(w, C, !0);
    }
  }, v = () => {
    r.value.left = "50%", r.value.top = "50%", r.value.transform = "translate(-50%, -50%)", r.value.position = "fixed";
  }, y = () => {
    const g = Mt(t), { top: b, left: w, transform: C } = a.altPosition(g);
    r.value = { top: `${b}px`, left: `${w}px`, transform: C || "" };
  }, p = (g = !0) => {
    if (!a.inline)
      return l.value ? v() : a.altPosition !== null ? y() : (g && n("recalculate-position"), V());
  }, x = ({
    inputEl: g,
    menuEl: b,
    left: w,
    width: C
  }) => {
    window.screen.width > 768 && d(w, C), S(g, b);
  }, O = (g, b) => {
    const { top: w, left: C, height: T, width: A } = c(g);
    r.value.top = `${T + w + +a.offset}px`, x({ inputEl: g, menuEl: b, left: C, width: A }), o.value = !1;
  }, E = (g, b) => {
    const { top: w, left: C, width: T } = c(g), { height: A } = b.getBoundingClientRect();
    r.value.top = `${w - A - +a.offset}px`, x({ inputEl: g, menuEl: b, left: C, width: T }), o.value = !0;
  }, S = (g, b) => {
    if (a.autoPosition) {
      const { left: w, width: C } = c(g), { left: T, right: A } = b.getBoundingClientRect();
      return T <= 0 || T <= w ? u(w) : A >= document.documentElement.clientWidth ? s(w, C) : d(w, C);
    }
  }, N = (g, b) => {
    const { height: w } = b.getBoundingClientRect(), { top: C, height: T } = g.getBoundingClientRect(), A = window.innerHeight - C - T, z = C;
    return w <= A ? O(g, b) : w > A && w <= z ? E(g, b) : A >= z ? O(g, b) : E(g, b);
  }, V = () => {
    const g = Mt(t), b = Mt(e);
    if (g && b)
      return a.autoPosition ? N(g, b) : O(g, b);
  }, $ = function(g) {
    if (g) {
      const b = g.scrollHeight > g.clientHeight, w = window.getComputedStyle(g).overflowY.indexOf("hidden") !== -1;
      return b && !w;
    }
    return !0;
  }, k = function(g) {
    return !g || g === document.body ? window : $(g) ? g : k(g.parentNode);
  };
  return { openOnTop: o, menuPosition: r, setMenuPosition: p, setInitialPosition: f, getScrollableParent: k };
}, Kr = [
  { name: "clock-icon", use: ["time", "calendar"] },
  { name: "arrow-left", use: ["month-year", "calendar"] },
  { name: "arrow-right", use: ["month-year", "calendar"] },
  { name: "arrow-up", use: ["time", "calendar"] },
  { name: "arrow-down", use: ["time", "calendar"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar"] },
  { name: "day", use: ["calendar"] },
  { name: "month-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay", use: ["month-year"] },
  { name: "month-overlay", use: ["month-year"] },
  { name: "month-overlay-header", use: ["month-year"] },
  { name: "year-overlay-header", use: ["month-year"] },
  { name: "hours-overlay-value", use: ["calendar", "time"] },
  { name: "minutes-overlay-value", use: ["calendar", "time"] },
  { name: "seconds-overlay-value", use: ["calendar", "time"] },
  { name: "hours", use: ["calendar", "time"] },
  { name: "minutes", use: ["calendar", "time"] },
  { name: "month", use: ["calendar", "month-year"] },
  { name: "year", use: ["calendar", "month-year"] },
  { name: "action-select", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar"] },
  { name: "marker-tooltip", use: ["calendar"] },
  { name: "now-button", use: [] },
  { name: "time-picker-overlay", use: ["calendar", "time"] },
  { name: "am-pm-button", use: ["calendar", "time"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year"] },
  { name: "time-picker", use: ["menu"] },
  { name: "action-row", use: ["action"] }
], eD = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], tD = {
  all: () => Kr,
  monthYear: () => Kr.filter((e) => e.use.includes("month-year")),
  input: () => eD,
  timePicker: () => Kr.filter((e) => e.use.includes("time")),
  action: () => Kr.filter((e) => e.use.includes("action")),
  calendar: () => Kr.filter((e) => e.use.includes("calendar")),
  menu: () => Kr.filter((e) => e.use.includes("menu"))
}, gr = (e, t, n) => {
  const a = [];
  return tD[t]().forEach((r) => {
    e[r.name] && a.push(r.name);
  }), n && n.length && n.forEach((r) => {
    r.slot && a.push(r.slot);
  }), a;
}, _u = (e) => ({ transitionName: _(() => (t) => e && typeof e != "boolean" ? t ? e.open : e.close : ""), showTransition: !!e }), Za = {
  multiCalendars: { type: [Boolean, Number, String], default: null },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  closeOnScroll: { type: Boolean, default: !1 },
  autoPosition: { type: Boolean, default: !0 },
  closeOnAutoApply: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  multiCalendarsSolo: { type: Boolean, default: !1 },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: () => [] },
  showNowButton: { type: Boolean, default: !1 },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  modeHeight: { type: [Number, String], default: 255 },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetRanges: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  keepActionRow: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  multiStatic: { type: Boolean, default: !0 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Array, Function],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: !1 },
  teleport: { type: [String, Boolean], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function],
    default: null
  },
  calendarClassName: { type: String, default: null },
  noSwipe: { type: Boolean, default: !1 },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  inlineWithInput: { type: Boolean, default: !1 },
  textInputOptions: { type: Object, default: () => null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: Boolean, default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: Boolean, default: !1 },
  textInput: { type: Boolean, default: !1 },
  onClickOutside: { type: Function, default: null },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: Boolean, default: !1 }
}, nD = ["aria-label", "aria-disabled", "aria-readonly"], aD = {
  key: 1,
  class: "dp__input_wrap"
}, rD = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], oD = {
  key: 2,
  class: "dp__input_icon"
}, lD = {
  key: 4,
  class: "dp__clear_icon"
}, iD = /* @__PURE__ */ Wt({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...Za
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur"
  ],
  setup(e, { expose: t, emit: n }) {
    const a = e, { getDefaultPattern: r, isValidDate: o, defaults: l, getDefaultStartTime: i, assignDefaultTime: s } = En(a), u = R(), d = R(null), c = R(!1), f = _(
      () => ({
        dp__pointer: !a.disabled && !a.readonly && !a.textInput,
        dp__disabled: a.disabled,
        dp__input_readonly: !a.textInput,
        dp__input: !0,
        dp__input_icon_pad: !a.hideInputIcon,
        dp__input_valid: a.state,
        dp__input_invalid: a.state === !1,
        dp__input_focus: c.value || a.isMenuOpen,
        dp__input_reg: !a.textInput,
        [a.inputClassName]: !!a.inputClassName
      })
    ), v = () => {
      n("set-input-date", null), a.autoApply && (n("set-empty-date"), u.value = null);
    }, y = (b) => {
      var w;
      const C = i();
      return cN(
        b,
        ((w = l.value.textInputOptions) == null ? void 0 : w.format) || r(),
        C || s({})
      );
    }, p = (b) => {
      const { rangeSeparator: w } = l.value.textInputOptions, [C, T] = b.split(`${w}`);
      if (C) {
        const A = y(C.trim()), z = T ? y(T.trim()) : null, U = A && z ? [A, z] : [A];
        u.value = A ? U : null;
      }
    }, x = (b) => {
      if (a.range)
        p(b);
      else if (a.multiDates) {
        const w = b.split(";");
        u.value = w.map((C) => y(C.trim())).filter((C) => C);
      } else
        u.value = y(b);
    }, O = (b) => {
      var w;
      const { value: C } = b.target;
      C !== "" ? ((w = l.value.textInputOptions) != null && w.openMenu && !a.isMenuOpen && n("open"), x(C), n("set-input-date", u.value)) : v(), n("update:input-value", C);
    }, E = () => {
      var b, w;
      (b = l.value.textInputOptions) != null && b.enterSubmit && o(u.value) && a.inputValue !== "" ? (n("set-input-date", u.value, !0), u.value = null) : (w = l.value.textInputOptions) != null && w.enterSubmit && a.inputValue === "" && (u.value = null, n("clear"));
    }, S = () => {
      var b, w;
      (b = l.value.textInputOptions) != null && b.tabSubmit && o(u.value) && a.inputValue !== "" ? (n("set-input-date", u.value, !0), u.value = null) : (w = l.value.textInputOptions) != null && w.tabSubmit && a.inputValue === "" && (u.value = null, n("clear"));
    }, N = () => {
      c.value = !0, n("focus");
    }, V = (b) => {
      var w;
      b.preventDefault(), b.stopImmediatePropagation(), b.stopPropagation(), a.textInput && (w = l.value.textInputOptions) != null && w.openMenu && !a.inlineWithInput ? a.isMenuOpen ? l.value.textInputOptions.enterSubmit && n("select-date") : n("open") : a.textInput || n("toggle");
    }, $ = () => {
      c.value = !1, a.isMenuOpen || n("blur"), a.autoApply && a.textInput && u.value && (n("set-input-date", u.value), n("select-date"), u.value = null);
    }, k = () => {
      n("clear");
    }, g = (b) => {
      a.textInput || b.preventDefault();
    };
    return t({
      focusInput: () => {
        d.value && d.value.focus({ preventScroll: !0 });
      },
      setParsedDate: (b) => {
        u.value = b;
      }
    }), (b, w) => {
      var C;
      return Z(), me("div", {
        onClick: V,
        "aria-label": (C = M(l).ariaLabels) == null ? void 0 : C.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": b.disabled,
        "aria-readonly": b.readonly
      }, [
        b.$slots.trigger && !b.$slots["dp-input"] && !b.inline ? xe(b.$slots, "trigger", { key: 0 }) : ce("", !0),
        !b.$slots.trigger && (!b.inline || b.inlineWithInput) ? (Z(), me("div", aD, [
          b.$slots["dp-input"] && !b.$slots.trigger && !b.inline ? xe(b.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: O,
            onEnter: E,
            onTab: S,
            onClear: k
          }) : ce("", !0),
          b.$slots["dp-input"] ? ce("", !0) : (Z(), me("input", {
            key: 1,
            ref_key: "inputRef",
            ref: d,
            id: b.uid ? `dp-input-${b.uid}` : void 0,
            name: b.name,
            class: et(M(f)),
            inputmode: b.textInput ? "text" : "none",
            placeholder: b.placeholder,
            disabled: b.disabled,
            readonly: b.readonly,
            required: b.required,
            value: e.inputValue,
            autocomplete: b.autocomplete,
            onInput: O,
            onKeydown: [
              Xe(V, ["enter"]),
              Xe(S, ["tab"]),
              g
            ],
            onBlur: $,
            onFocus: N,
            onKeypress: g
          }, null, 42, rD)),
          b.$slots["input-icon"] && !b.hideInputIcon ? (Z(), me("span", oD, [
            xe(b.$slots, "input-icon")
          ])) : ce("", !0),
          !b.$slots["input-icon"] && !b.hideInputIcon && !b.$slots["dp-input"] ? (Z(), qe(M(bu), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : ce("", !0),
          b.$slots["clear-icon"] && e.inputValue && b.clearable && !b.disabled && !b.readonly ? (Z(), me("span", lD, [
            xe(b.$slots, "clear-icon", { clear: k })
          ])) : ce("", !0),
          b.clearable && !b.$slots["clear-icon"] && e.inputValue && !b.disabled && !b.readonly ? (Z(), qe(M(uN), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: ba(k, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : ce("", !0)
        ])) : ce("", !0)
      ], 8, nD);
    };
  }
}), sD = { class: "dp__selection_preview" }, uD = { class: "dp__action_buttons" }, cD = ["onKeydown"], fD = /* @__PURE__ */ Wt({
  __name: "ActionRow",
  props: {
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Za
  },
  emits: ["close-picker", "select-date", "invalid-select"],
  setup(e, { emit: t }) {
    const n = e, { formatDate: a, isValidTime: r, defaults: o } = En(n), { buildMatrix: l } = Qa(), i = R(null), s = R(null);
    ft(() => {
      n.arrowNavigation && l([Mt(i), Mt(s)], "actionRow");
    });
    const u = _(() => n.range && !n.partialRange && n.internalModelValue ? n.internalModelValue.length === 2 : !0), d = _(() => !f.value || !v.value || !u.value), c = _(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: d.value
    })), f = _(() => !n.enableTimePicker || n.ignoreTimeValidation ? !0 : r(n.internalModelValue)), v = _(() => n.monthPicker ? O(n.internalModelValue) : !0), y = () => {
      const S = o.value.previewFormat;
      return n.timePicker || n.monthPicker, S(qt(n.internalModelValue));
    }, p = () => {
      const S = n.internalModelValue;
      return o.value.multiCalendars > 0 ? `${a(S[0])} - ${a(S[1])}` : [a(S[0]), a(S[1])];
    }, x = _(() => !n.internalModelValue || !n.menuMount ? "" : typeof o.value.previewFormat == "string" ? Array.isArray(n.internalModelValue) ? n.internalModelValue.length === 2 && n.internalModelValue[1] ? p() : n.multiDates ? n.internalModelValue.map((S) => `${a(S)}`) : n.modelAuto ? `${a(n.internalModelValue[0])}` : `${a(n.internalModelValue[0])} -` : a(n.internalModelValue) : y()), O = (S) => {
      if (!n.monthPicker)
        return !0;
      let N = !0;
      return n.minDate && n.maxDate ? cn(se(S), se(n.minDate)) && Zt(se(S), se(n.maxDate)) : (n.minDate && (N = cn(se(S), se(n.minDate))), n.maxDate && (N = Zt(se(S), se(n.maxDate))), N);
    }, E = () => {
      f.value && v.value && u.value ? t("select-date") : t("invalid-select");
    };
    return (S, N) => (Z(), me("div", {
      class: "dp__action_row",
      style: An(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      S.$slots["action-row"] ? xe(S.$slots, "action-row", Kt(ve({ key: 0 }, {
        internalModelValue: e.internalModelValue,
        disabled: M(d),
        selectDate: () => S.$emit("select-date"),
        closePicker: () => S.$emit("close-picker")
      }))) : (Z(), me(ye, { key: 1 }, [
        Ie("div", sD, [
          S.$slots["action-preview"] ? xe(S.$slots, "action-preview", {
            key: 0,
            value: e.internalModelValue
          }) : ce("", !0),
          S.$slots["action-preview"] ? ce("", !0) : (Z(), me(ye, { key: 1 }, [
            Array.isArray(M(x)) ? ce("", !0) : (Z(), me(ye, { key: 0 }, [
              wt(Dt(M(x)), 1)
            ], 64)),
            Array.isArray(M(x)) ? (Z(!0), me(ye, { key: 1 }, Ot(M(x), (V, $) => (Z(), me("div", { key: $ }, Dt(V), 1))), 128)) : ce("", !0)
          ], 64))
        ]),
        Ie("div", uD, [
          S.$slots["action-select"] ? xe(S.$slots, "action-select", {
            key: 0,
            value: e.internalModelValue
          }) : ce("", !0),
          S.$slots["action-select"] ? ce("", !0) : (Z(), me(ye, { key: 1 }, [
            S.inline ? ce("", !0) : (Z(), me("span", {
              key: 0,
              class: "dp__action dp__cancel",
              ref_key: "cancelButtonRef",
              ref: i,
              tabindex: "0",
              onClick: N[0] || (N[0] = (V) => S.$emit("close-picker")),
              onKeydown: [
                N[1] || (N[1] = Xe((V) => S.$emit("close-picker"), ["enter"])),
                N[2] || (N[2] = Xe((V) => S.$emit("close-picker"), ["space"]))
              ]
            }, Dt(S.cancelText), 545)),
            Ie("span", {
              class: et(M(c)),
              tabindex: "0",
              onKeydown: [
                Xe(E, ["enter"]),
                Xe(E, ["space"])
              ],
              onClick: E,
              "data-test": "select-button",
              ref_key: "selectButtonRef",
              ref: s
            }, Dt(S.selectText), 43, cD)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
}), dD = ["aria-label"], vD = {
  class: "dp__calendar_header",
  role: "row"
}, mD = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, hD = /* @__PURE__ */ Ie("div", { class: "dp__calendar_header_separator" }, null, -1), yD = ["aria-label"], pD = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, gD = { class: "dp__cell_inner" }, bD = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], _D = /* @__PURE__ */ Wt({
  __name: "Calendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    getWeekNum: {
      type: Function,
      default: () => ""
    },
    specificMode: { type: Boolean, default: !1 },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...Za
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: n }) {
    const a = e, { buildMultiLevelMatrix: r } = Qa(), { setDateMonthOrYear: o, defaults: l } = En(a), i = R(null), s = R({
      bottom: "",
      left: "",
      transform: ""
    }), u = R([]), d = R(null), c = R(!0), f = R(""), v = R({ startX: 0, endX: 0, startY: 0, endY: 0 }), y = R([]), p = R({ left: "50%" }), x = _(() => a.dayNames ? Array.isArray(a.dayNames) ? a.dayNames : a.dayNames(a.locale, +a.weekStart) : FN(a.locale, +a.weekStart));
    ft(() => {
      n("mount", { cmp: "calendar", refs: u }), a.noSwipe || d.value && (d.value.addEventListener("touchstart", C, { passive: !1 }), d.value.addEventListener("touchend", T, { passive: !1 }), d.value.addEventListener("touchmove", A, { passive: !1 })), a.monthChangeOnScroll && d.value && d.value.addEventListener("wheel", B, { passive: !1 });
    });
    const O = (h) => h ? a.vertical ? "vNext" : "next" : a.vertical ? "vPrevious" : "previous", E = (h, P) => {
      if (a.transitions) {
        const W = ua(o(se(), a.month, a.year));
        f.value = cn(ua(o(se(), h, P)), W) ? l.value.transitions[O(!0)] : l.value.transitions[O(!1)], c.value = !1, Je(() => {
          c.value = !0;
        });
      }
    }, S = _(
      () => ({
        dp__calendar_wrap: !0,
        [a.calendarClassName]: !!a.calendarClassName
      })
    ), N = _(() => (h) => {
      const P = UN(h);
      return {
        dp__marker_dot: P.type === "dot",
        dp__marker_line: P.type === "line"
      };
    }), V = _(() => (h) => pt(h, i.value)), $ = _(() => ({
      dp__calendar: !0,
      dp__calendar_next: l.value.multiCalendars > 0 && a.instance !== 0
    })), k = _(() => (h) => a.hideOffsetDates ? h.current : !0), g = _(() => a.specificMode ? { height: `${a.modeHeight}px` } : void 0), b = async (h, P, W) => {
      var H, j;
      if (n("set-hover-date", h), (j = (H = h.marker) == null ? void 0 : H.tooltip) != null && j.length) {
        const X = Mt(u.value[P][W]);
        if (X) {
          const { width: Q, height: Y } = X.getBoundingClientRect();
          i.value = h.value;
          let I = { left: `${Q / 2}px` }, q = -50;
          if (await Je(), y.value[0]) {
            const { left: we, width: be } = y.value[0].getBoundingClientRect();
            we < 0 && (I = { left: "0" }, q = 0, p.value.left = `${Q / 2}px`), window.innerWidth < we + be && (I = { right: "0" }, q = 0, p.value.left = `${be - Q / 2}px`);
          }
          s.value = {
            bottom: `${Y}px`,
            ...I,
            transform: `translateX(${q}%)`
          }, n("tooltip-open", h.marker);
        }
      }
    }, w = (h) => {
      i.value && (i.value = null, s.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), n("tooltip-close", h.marker));
    }, C = (h) => {
      v.value.startX = h.changedTouches[0].screenX, v.value.startY = h.changedTouches[0].screenY;
    }, T = (h) => {
      v.value.endX = h.changedTouches[0].screenX, v.value.endY = h.changedTouches[0].screenY, z();
    }, A = (h) => {
      a.vertical && !a.inline && h.preventDefault();
    }, z = () => {
      const h = a.vertical ? "Y" : "X";
      Math.abs(v.value[`start${h}`] - v.value[`end${h}`]) > 10 && n("handle-swipe", v.value[`start${h}`] > v.value[`end${h}`] ? "right" : "left");
    }, U = (h, P, W) => {
      h && (Array.isArray(u.value[P]) ? u.value[P][W] = h : u.value[P] = [h]), a.arrowNavigation && r(u.value, "calendar");
    }, B = (h) => {
      a.monthChangeOnScroll && (h.preventDefault(), n("handle-scroll", h));
    };
    return t({ triggerTransition: E }), (h, P) => {
      var W;
      return Z(), me("div", {
        class: et(M($))
      }, [
        Ie("div", {
          style: An(M(g))
        }, [
          e.specificMode ? ce("", !0) : (Z(), me("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: d,
            class: et(M(S)),
            role: "grid",
            "aria-label": (W = M(l).ariaLabels) == null ? void 0 : W.calendarWrap
          }, [
            Ie("div", vD, [
              h.weekNumbers ? (Z(), me("div", mD, Dt(h.weekNumName), 1)) : ce("", !0),
              (Z(!0), me(ye, null, Ot(M(x), (H, j) => (Z(), me("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: j,
                "data-test": "calendar-header"
              }, [
                h.$slots["calendar-header"] ? xe(h.$slots, "calendar-header", {
                  key: 0,
                  day: H,
                  index: j
                }) : ce("", !0),
                h.$slots["calendar-header"] ? ce("", !0) : (Z(), me(ye, { key: 1 }, [
                  wt(Dt(H), 1)
                ], 64))
              ]))), 128))
            ]),
            hD,
            m(Jt, {
              name: f.value,
              css: !!h.transitions
            }, {
              default: he(() => {
                var H;
                return [
                  c.value ? (Z(), me("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (H = M(l).ariaLabels) == null ? void 0 : H.calendarDays
                  }, [
                    (Z(!0), me(ye, null, Ot(e.mappedDates, (j, X) => (Z(), me("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: X
                    }, [
                      h.weekNumbers ? (Z(), me("div", pD, [
                        Ie("div", gD, Dt(e.getWeekNum(j.days)), 1)
                      ])) : ce("", !0),
                      (Z(!0), me(ye, null, Ot(j.days, (Q, Y) => {
                        var I, q, we;
                        return Z(), me("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (be) => U(be, X, Y),
                          key: Y + X,
                          "aria-selected": Q.classData.dp__active_date || Q.classData.dp__range_start || Q.classData.dp__range_start,
                          "aria-disabled": Q.classData.dp__cell_disabled,
                          "aria-label": (q = (I = M(l).ariaLabels) == null ? void 0 : I.day) == null ? void 0 : q.call(I, Q),
                          tabindex: "0",
                          "data-test": Q.value,
                          onClick: ba((be) => h.$emit("select-date", Q), ["stop", "prevent"]),
                          onKeydown: [
                            Xe((be) => h.$emit("select-date", Q), ["enter"]),
                            Xe((be) => h.$emit("handle-space", Q), ["space"])
                          ],
                          onMouseenter: (be) => b(Q, X, Y),
                          onMouseleave: (be) => w(Q)
                        }, [
                          Ie("div", {
                            class: et(["dp__cell_inner", Q.classData])
                          }, [
                            h.$slots.day && M(k)(Q) ? xe(h.$slots, "day", {
                              key: 0,
                              day: +Q.text,
                              date: Q.value
                            }) : ce("", !0),
                            h.$slots.day ? ce("", !0) : (Z(), me(ye, { key: 1 }, [
                              wt(Dt(Q.text), 1)
                            ], 64)),
                            Q.marker && M(k)(Q) ? (Z(), me("div", {
                              key: 2,
                              class: et(M(N)(Q.marker)),
                              style: An(Q.marker.color ? { backgroundColor: Q.marker.color } : {})
                            }, null, 6)) : ce("", !0),
                            M(V)(Q.value) ? (Z(), me("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: !0,
                              ref_key: "activeTooltip",
                              ref: y,
                              style: An(s.value)
                            }, [
                              (we = Q.marker) != null && we.tooltip ? (Z(), me("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: P[0] || (P[0] = ba(() => {
                                }, ["stop"]))
                              }, [
                                (Z(!0), me(ye, null, Ot(Q.marker.tooltip, (be, Oe) => (Z(), me("div", {
                                  key: Oe,
                                  class: "dp__tooltip_text"
                                }, [
                                  h.$slots["marker-tooltip"] ? xe(h.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: be,
                                    day: Q.value
                                  }) : ce("", !0),
                                  h.$slots["marker-tooltip"] ? ce("", !0) : (Z(), me(ye, { key: 1 }, [
                                    Ie("div", {
                                      class: "dp__tooltip_mark",
                                      style: An(be.color ? { backgroundColor: be.color } : {})
                                    }, null, 4),
                                    Ie("div", null, Dt(be.text), 1)
                                  ], 64))
                                ]))), 128)),
                                Ie("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: An(p.value)
                                }, null, 4)
                              ])) : ce("", !0)
                            ], 4)) : ce("", !0)
                          ], 2)
                        ], 40, bD);
                      }), 128))
                    ]))), 128))
                  ], 8, yD)) : ce("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 10, dD))
        ], 4)
      ], 2);
    };
  }
}), wD = ["aria-label", "aria-disabled"], sc = /* @__PURE__ */ Wt({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const n = R(null);
    return ft(() => t("set-ref", n)), (a, r) => (Z(), me("div", {
      class: "dp__month_year_col_nav",
      onClick: r[0] || (r[0] = (o) => a.$emit("activate")),
      onKeydown: [
        r[1] || (r[1] = Xe((o) => a.$emit("activate"), ["enter"])),
        r[2] || (r[2] = Xe((o) => a.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      role: "button",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: n
    }, [
      Ie("div", {
        class: et(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        xe(a.$slots, "default")
      ], 2)
    ], 40, wD));
  }
}), SD = ["onKeydown"], kD = { class: "dp__selection_grid_header" }, xD = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], OD = ["aria-label", "onKeydown"], nl = /* @__PURE__ */ Wt({
  __name: "SelectionGrid",
  props: {
    items: { type: Array, default: () => [] },
    modelValue: { type: [String, Number], default: null },
    multiModelValue: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: [Number, String], default: null },
    maxValue: { type: [Number, String], default: null },
    year: { type: Number, default: 0 },
    skipActive: { type: Boolean, default: !1 },
    headerRefs: { type: Array, default: () => [] },
    skipButtonRef: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "selected", "toggle", "reset-flow"],
  setup(e, { expose: t, emit: n }) {
    const a = e, { setSelectionGrid: r, buildMultiLevelMatrix: o, setMonthPicker: l } = Qa(), { hideNavigationButtons: i } = En(a), s = R(!1), u = R(null), d = R(null), c = R([]), f = R(), v = R(null), y = R(0), p = R(null);
    Ad(() => {
      u.value = null;
    }), ft(() => {
      Je().then(() => b()), O(), x(!0);
    }), $l(() => x(!1));
    const x = (B) => {
      var h;
      a.arrowNavigation && ((h = a.headerRefs) != null && h.length ? l(B) : r(B));
    }, O = () => {
      const B = Mt(d);
      B && (a.textInput || B.focus({ preventScroll: !0 }), s.value = B.clientHeight < B.scrollHeight);
    }, E = _(
      () => ({
        dp__overlay: !0
      })
    ), S = _(() => ({
      dp__overlay_col: !0
    })), N = (B) => a.skipActive ? !1 : B.value === a.modelValue, V = _(() => a.items.map((B) => B.filter((h) => h).map((h) => {
      var P, W, H;
      const j = a.disabledValues.some((Q) => Q === h.value) || g(h.value), X = (P = a.multiModelValue) != null && P.length ? (W = a.multiModelValue) == null ? void 0 : W.some(
        (Q) => pt(
          Q,
          Er(
            a.monthPicker ? tl(new Date(), h.value) : new Date(),
            a.monthPicker ? a.year : h.value
          )
        )
      ) : N(h);
      return {
        ...h,
        className: {
          dp__overlay_cell_active: X,
          dp__overlay_cell: !X,
          dp__overlay_cell_disabled: j,
          dp__overlay_cell_active_disabled: j && X,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (H = a.multiModelValue) != null && H.length ? C(h.value) : !1
        }
      };
    }))), $ = _(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: s.value,
        dp__button_bottom: a.autoApply
      })
    ), k = _(() => {
      var B, h;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((B = a.items) == null ? void 0 : B.length) <= 6,
        dp__container_block: ((h = a.items) == null ? void 0 : h.length) > 6
      };
    }), g = (B) => {
      const h = a.maxValue || a.maxValue === 0, P = a.minValue || a.minValue === 0;
      return !h && !P ? !1 : h && P ? +B > +a.maxValue || +B < +a.minValue : h ? +B > +a.maxValue : P ? +B < +a.minValue : !1;
    }, b = () => {
      const B = Mt(u), h = Mt(d), P = Mt(v), W = Mt(p), H = P ? P.getBoundingClientRect().height : 0;
      h && (y.value = h.getBoundingClientRect().height - H), B && W && (W.scrollTop = B.offsetTop - W.offsetTop - (y.value / 2 - B.getBoundingClientRect().height) - H);
    }, w = (B) => {
      !a.disabledValues.some((h) => h === B) && !g(B) && (n("update:model-value", B), n("selected"));
    }, C = (B) => {
      const h = a.monthPicker ? a.year : B;
      return Ib(
        a.multiModelValue,
        Er(
          a.monthPicker ? tl(new Date(), f.value || 0) : new Date(),
          a.monthPicker ? h : f.value || h
        ),
        Er(a.monthPicker ? tl(new Date(), B) : new Date(), h)
      );
    }, T = () => {
      n("toggle"), n("reset-flow");
    }, A = () => {
      a.escClose && T();
    }, z = (B, h, P, W) => {
      B && (h.value === +a.modelValue && !a.disabledValues.includes(h.value) && (u.value = B), a.arrowNavigation && (Array.isArray(c.value[P]) ? c.value[P][W] = B : c.value[P] = [B], U()));
    }, U = () => {
      var B, h;
      const P = (B = a.headerRefs) != null && B.length ? [a.headerRefs].concat(c.value) : c.value.concat([a.skipButtonRef ? [] : [v.value]]);
      o(qt(P), (h = a.headerRefs) != null && h.length ? "monthPicker" : "selectionGrid");
    };
    return t({ focusGrid: O }), (B, h) => {
      var P;
      return Z(), me("div", {
        ref_key: "gridWrapRef",
        ref: d,
        class: et(M(E)),
        role: "dialog",
        tabindex: "0",
        onKeydown: Xe(A, ["esc"])
      }, [
        Ie("div", {
          class: et(M(k)),
          ref_key: "containerRef",
          ref: p,
          role: "grid",
          style: An({ height: `${y.value}px` })
        }, [
          Ie("div", kD, [
            xe(B.$slots, "header")
          ]),
          B.$slots.overlay ? xe(B.$slots, "overlay", { key: 0 }) : (Z(!0), me(ye, { key: 1 }, Ot(M(V), (W, H) => (Z(), me("div", {
            class: "dp__overlay_row",
            key: H,
            role: "row"
          }, [
            (Z(!0), me(ye, null, Ot(W, (j, X) => (Z(), me("div", {
              role: "gridcell",
              class: et(M(S)),
              key: j.value,
              "aria-selected": j.value === e.modelValue && !e.disabledValues.includes(j.value),
              "aria-disabled": j.className.dp__overlay_cell_disabled,
              ref_for: !0,
              ref: (Q) => z(Q, j, H, X),
              tabindex: "0",
              "data-test": j.text,
              onClick: (Q) => w(j.value),
              onKeydown: [
                Xe((Q) => w(j.value), ["enter"]),
                Xe((Q) => w(j.value), ["space"])
              ],
              onMouseover: (Q) => f.value = j.value
            }, [
              Ie("div", {
                class: et(j.className)
              }, [
                B.$slots.item ? xe(B.$slots, "item", {
                  key: 0,
                  item: j
                }) : ce("", !0),
                B.$slots.item ? ce("", !0) : (Z(), me(ye, { key: 1 }, [
                  wt(Dt(j.text), 1)
                ], 64))
              ], 2)
            ], 42, xD))), 128))
          ]))), 128))
        ], 6),
        B.$slots["button-icon"] ? st((Z(), me("div", {
          key: 0,
          role: "button",
          "aria-label": (P = e.ariaLabels) == null ? void 0 : P.toggleOverlay,
          class: et(M($)),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: v,
          onClick: T,
          onKeydown: Xe(T, ["enter"])
        }, [
          xe(B.$slots, "button-icon")
        ], 42, OD)), [
          [gn, !M(i)(e.type)]
        ]) : ce("", !0)
      ], 42, SD);
    };
  }
}), CD = ["aria-label"], Ty = /* @__PURE__ */ Wt({
  __name: "RegularPicker",
  props: {
    ariaLabel: { type: String, default: "" },
    showSelectionGrid: { type: Boolean, default: !1 },
    modelValue: { type: Number, default: null },
    items: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: Number, default: null },
    maxValue: { type: Number, default: null },
    slotName: { type: String, default: "" },
    overlaySlot: { type: String, default: "" },
    headerRefs: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    transitions: { type: [Object, Boolean], default: !1 },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "toggle", "set-ref"],
  setup(e, { emit: t }) {
    const n = e, { transitionName: a, showTransition: r } = _u(n.transitions), o = R(null);
    return ft(() => t("set-ref", o)), (l, i) => (Z(), me(ye, null, [
      Ie("div", {
        class: "dp__month_year_select",
        onClick: i[0] || (i[0] = (s) => l.$emit("toggle")),
        onKeydown: [
          i[1] || (i[1] = Xe((s) => l.$emit("toggle"), ["enter"])),
          i[2] || (i[2] = Xe((s) => l.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: o
      }, [
        xe(l.$slots, "default")
      ], 40, CD),
      m(Jt, {
        name: M(a)(e.showSelectionGrid),
        css: M(r)
      }, {
        default: he(() => [
          e.showSelectionGrid ? (Z(), qe(nl, ve({ key: 0 }, {
            modelValue: e.modelValue,
            items: e.items,
            disabledValues: e.disabledValues,
            minValue: e.minValue,
            maxValue: e.maxValue,
            escClose: e.escClose,
            type: e.type,
            arrowNavigation: e.arrowNavigation,
            textInput: e.textInput,
            autoApply: e.autoApply,
            ariaLabels: e.ariaLabels,
            hideNavigation: e.hideNavigation
          }, {
            "header-refs": [],
            "onUpdate:modelValue": i[3] || (i[3] = (s) => l.$emit("update:model-value", s)),
            onToggle: i[4] || (i[4] = (s) => l.$emit("toggle"))
          }), yn({
            "button-icon": he(() => [
              l.$slots["calendar-icon"] ? xe(l.$slots, "calendar-icon", { key: 0 }) : ce("", !0),
              l.$slots["calendar-icon"] ? ce("", !0) : (Z(), qe(M(bu), { key: 1 }))
            ]),
            _: 2
          }, [
            l.$slots[e.slotName] ? {
              name: "item",
              fn: he(({ item: s }) => [
                xe(l.$slots, e.slotName, { item: s })
              ]),
              key: "0"
            } : void 0,
            l.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: he(() => [
                xe(l.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            l.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: he(() => [
                xe(l.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : ce("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), ED = { class: "dp__month_year_row" }, $D = { class: "dp__month_year_wrap" }, PD = { class: "dp__month_picker_header" }, TD = ["aria-label"], ND = ["aria-label"], DD = ["aria-label"], VD = /* @__PURE__ */ Wt({
  __name: "MonthYearPicker",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    internalModelValue: { type: [Date, Array], default: null },
    ...Za
  },
  emits: ["update-month-year", "month-year-select", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: t, emit: n }) {
    const a = e, { defaults: r } = En(a), { transitionName: o, showTransition: l } = _u(r.value.transitions), { buildMatrix: i } = Qa(), { handleMonthYearChange: s, isDisabled: u, updateMonthYear: d } = ZN(a, n), c = R(!1), f = R(!1), v = R([null, null, null, null]), y = R(null), p = R(null), x = R(null);
    ft(() => {
      n("mount");
    });
    const O = (I) => ({
      get: () => a[I],
      set: (q) => {
        const we = I === "month" ? "year" : "month";
        n("update-month-year", { [I]: q, [we]: a[we] }), n("month-year-select", I === "year"), I === "month" ? H(!0) : j(!0);
      }
    }), E = _(O("month")), S = _(O("year")), N = (I) => {
      const q = mt(se(I));
      return a.year === q;
    }, V = _(() => a.monthPicker ? Array.isArray(a.disabledDates) ? a.disabledDates.map((I) => se(I)).filter((I) => N(I)).map((I) => vt(I)) : [] : []), $ = _(() => (I) => {
      const q = I === "month";
      return {
        showSelectionGrid: (q ? c : f).value,
        items: (q ? B : h).value,
        disabledValues: r.value.filters[q ? "months" : "years"].concat(V.value),
        minValue: (q ? w : g).value,
        maxValue: (q ? C : b).value,
        headerRefs: q && a.monthPicker ? [y.value, p.value, x.value] : [],
        escClose: a.escClose,
        transitions: r.value.transitions,
        ariaLabels: r.value.ariaLabels,
        textInput: a.textInput,
        autoApply: a.autoApply,
        arrowNavigation: a.arrowNavigation,
        hideNavigation: a.hideNavigation
      };
    }), k = _(() => (I) => ({
      month: a.month,
      year: a.year,
      items: I === "month" ? a.months : a.years,
      instance: a.instance,
      updateMonthYear: d,
      toggle: I === "month" ? H : j
    })), g = _(() => a.minDate ? mt(se(a.minDate)) : null), b = _(() => a.maxDate ? mt(se(a.maxDate)) : null), w = _(() => {
      if (a.minDate && g.value) {
        if (g.value > a.year)
          return 12;
        if (g.value === a.year)
          return vt(se(a.minDate));
      }
      return null;
    }), C = _(() => a.maxDate && b.value ? b.value < a.year ? -1 : b.value === a.year ? vt(se(a.maxDate)) : null : null), T = _(() => a.range && a.internalModelValue && (a.monthPicker || a.yearPicker) ? a.internalModelValue : []), A = (I) => I.reverse(), z = (I, q = !1) => {
      const we = [], be = (Oe) => q ? A(Oe) : Oe;
      for (let Oe = 0; Oe < I.length; Oe += 3) {
        const We = [I[Oe], I[Oe + 1], I[Oe + 2]];
        we.push(be(We));
      }
      return q ? we.reverse() : we;
    }, U = _(() => a.months.find((q) => q.value === a.month) || { text: "", value: 0 }), B = _(() => z(a.months)), h = _(() => z(a.years, a.reverseYears)), P = _(() => r.value.multiCalendars ? a.multiCalendarsSolo ? !0 : a.instance === 0 : !0), W = _(() => r.value.multiCalendars ? a.multiCalendarsSolo ? !0 : a.instance === r.value.multiCalendars - 1 : !0), H = (I = !1) => {
      X(I), c.value = !c.value, c.value || n("overlay-closed");
    }, j = (I = !1) => {
      X(I), f.value = !f.value, f.value || n("overlay-closed");
    }, X = (I) => {
      I || n("reset-flow");
    }, Q = (I = !1) => {
      u.value(I) || n("update-month-year", {
        year: I ? a.year + 1 : a.year - 1,
        month: a.month,
        fromNav: !0
      });
    }, Y = (I, q) => {
      a.arrowNavigation && (v.value[q] = Mt(I), i(v.value, "monthYear"));
    };
    return t({
      toggleMonthPicker: H,
      toggleYearPicker: j,
      handleMonthYearChange: s
    }), (I, q) => {
      var we, be, Oe, We, yt;
      return Z(), me("div", ED, [
        I.$slots["month-year"] ? xe(I.$slots, "month-year", Kt(ve({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: M(d), handleMonthYearChange: M(s), instance: e.instance }))) : (Z(), me(ye, { key: 1 }, [
          !I.monthPicker && !I.yearPicker ? (Z(), me(ye, { key: 0 }, [
            M(P) && !I.vertical ? (Z(), qe(sc, {
              key: 0,
              "aria-label": (we = M(r).ariaLabels) == null ? void 0 : we.prevMonth,
              disabled: M(u)(!1),
              onActivate: q[0] || (q[0] = (De) => M(s)(!1)),
              onSetRef: q[1] || (q[1] = (De) => Y(De, 0))
            }, {
              default: he(() => [
                I.$slots["arrow-left"] ? xe(I.$slots, "arrow-left", { key: 0 }) : ce("", !0),
                I.$slots["arrow-left"] ? ce("", !0) : (Z(), qe(M(hy), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : ce("", !0),
            Ie("div", $D, [
              m(Ty, ve({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (be = M(r).ariaLabels) == null ? void 0 : be.openMonthsOverlay,
                modelValue: M(E),
                "onUpdate:modelValue": q[2] || (q[2] = (De) => Ye(E) ? E.value = De : null)
              }, M($)("month"), {
                onToggle: H,
                onSetRef: q[3] || (q[3] = (De) => Y(De, 1))
              }), yn({
                default: he(() => [
                  I.$slots.month ? xe(I.$slots, "month", Kt(ve({ key: 0 }, M(U)))) : ce("", !0),
                  I.$slots.month ? ce("", !0) : (Z(), me(ye, { key: 1 }, [
                    wt(Dt(M(U).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                I.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: he(() => [
                    xe(I.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                I.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: he(({ item: De }) => [
                    xe(I.$slots, "month-overlay-value", {
                      text: De.text,
                      value: De.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                I.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: he(() => [
                    xe(I.$slots, "month-overlay", Kt(In(M(k)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                I.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: he(() => [
                    xe(I.$slots, "month-overlay-header", { toggle: H })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              m(Ty, ve({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (Oe = M(r).ariaLabels) == null ? void 0 : Oe.openYearsOverlay,
                modelValue: M(S),
                "onUpdate:modelValue": q[4] || (q[4] = (De) => Ye(S) ? S.value = De : null)
              }, M($)("year"), {
                onToggle: j,
                onSetRef: q[5] || (q[5] = (De) => Y(De, 2))
              }), yn({
                default: he(() => [
                  I.$slots.year ? xe(I.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : ce("", !0),
                  I.$slots.year ? ce("", !0) : (Z(), me(ye, { key: 1 }, [
                    wt(Dt(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                I.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: he(() => [
                    xe(I.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                I.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: he(({ item: De }) => [
                    xe(I.$slots, "year-overlay-value", {
                      text: De.text,
                      value: De.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                I.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: he(() => [
                    xe(I.$slots, "year-overlay", Kt(In(M(k)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                I.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: he(() => [
                    xe(I.$slots, "year-overlay-header", { toggle: j })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            M(P) && I.vertical ? (Z(), qe(sc, {
              key: 1,
              "aria-label": (We = M(r).ariaLabels) == null ? void 0 : We.prevMonth,
              disabled: M(u)(!1),
              onActivate: q[6] || (q[6] = (De) => M(s)(!1))
            }, {
              default: he(() => [
                I.$slots["arrow-up"] ? xe(I.$slots, "arrow-up", { key: 0 }) : ce("", !0),
                I.$slots["arrow-up"] ? ce("", !0) : (Z(), qe(M(Db), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : ce("", !0),
            M(W) ? (Z(), qe(sc, {
              key: 2,
              ref: "rightIcon",
              disabled: M(u)(!0),
              "aria-label": (yt = M(r).ariaLabels) == null ? void 0 : yt.nextMonth,
              onActivate: q[7] || (q[7] = (De) => M(s)(!0)),
              onSetRef: q[8] || (q[8] = (De) => Y(De, 3))
            }, {
              default: he(() => [
                I.$slots[I.vertical ? "arrow-down" : "arrow-right"] ? xe(I.$slots, I.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : ce("", !0),
                I.$slots[I.vertical ? "arrow-down" : "arrow-right"] ? ce("", !0) : (Z(), qe(Md(I.vertical ? M(Vb) : M(yy)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : ce("", !0)
          ], 64)) : ce("", !0),
          I.monthPicker ? (Z(), qe(nl, ve({ key: 1 }, M($)("month"), {
            "skip-active": I.range,
            year: e.year,
            "multi-model-value": M(T),
            "month-picker": "",
            modelValue: M(E),
            "onUpdate:modelValue": q[17] || (q[17] = (De) => Ye(E) ? E.value = De : null),
            onToggle: H,
            onSelected: q[18] || (q[18] = (De) => I.$emit("overlay-closed"))
          }), yn({
            header: he(() => {
              var De, D, F;
              return [
                Ie("div", PD, [
                  Ie("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: y,
                    onClick: q[9] || (q[9] = (K) => Q(!1)),
                    onKeydown: q[10] || (q[10] = Xe((K) => Q(!1), ["enter"]))
                  }, [
                    Ie("div", {
                      class: et(["dp__inner_nav", { dp__inner_nav_disabled: M(u)(!1) }]),
                      role: "button",
                      "aria-label": (De = M(r).ariaLabels) == null ? void 0 : De.prevMonth
                    }, [
                      I.$slots["arrow-left"] ? xe(I.$slots, "arrow-left", { key: 0 }) : ce("", !0),
                      I.$slots["arrow-left"] ? ce("", !0) : (Z(), qe(M(hy), { key: 1 }))
                    ], 10, TD)
                  ], 544),
                  Ie("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: p,
                    "aria-label": (D = M(r).ariaLabels) == null ? void 0 : D.openYearsOverlay,
                    tabindex: "0",
                    onClick: q[11] || (q[11] = () => j(!1)),
                    onKeydown: q[12] || (q[12] = Xe(() => j(!1), ["enter"]))
                  }, [
                    I.$slots.year ? xe(I.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : ce("", !0),
                    I.$slots.year ? ce("", !0) : (Z(), me(ye, { key: 1 }, [
                      wt(Dt(e.year), 1)
                    ], 64))
                  ], 40, ND),
                  Ie("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: x,
                    onClick: q[13] || (q[13] = (K) => Q(!0)),
                    onKeydown: q[14] || (q[14] = Xe((K) => Q(!0), ["enter"]))
                  }, [
                    Ie("div", {
                      class: et(["dp__inner_nav", { dp__inner_nav_disabled: M(u)(!0) }]),
                      role: "button",
                      "aria-label": (F = M(r).ariaLabels) == null ? void 0 : F.nextMonth
                    }, [
                      I.$slots["arrow-right"] ? xe(I.$slots, "arrow-right", { key: 0 }) : ce("", !0),
                      I.$slots["arrow-right"] ? ce("", !0) : (Z(), qe(M(yy), { key: 1 }))
                    ], 10, DD)
                  ], 544)
                ]),
                m(Jt, {
                  name: M(o)(f.value),
                  css: M(l)
                }, {
                  default: he(() => [
                    f.value ? (Z(), qe(nl, ve({ key: 0 }, M($)("year"), {
                      modelValue: M(S),
                      "onUpdate:modelValue": q[15] || (q[15] = (K) => Ye(S) ? S.value = K : null),
                      onToggle: j,
                      onSelected: q[16] || (q[16] = (K) => I.$emit("overlay-closed"))
                    }), yn({
                      "button-icon": he(() => [
                        I.$slots["calendar-icon"] ? xe(I.$slots, "calendar-icon", { key: 0 }) : ce("", !0),
                        I.$slots["calendar-icon"] ? ce("", !0) : (Z(), qe(M(bu), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      I.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: he(({ item: K }) => [
                          xe(I.$slots, "year-overlay-value", {
                            text: K.text,
                            value: K.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : ce("", !0)
                  ]),
                  _: 3
                }, 8, ["name", "css"])
              ];
            }),
            _: 2
          }, [
            I.$slots["month-overlay-value"] ? {
              name: "item",
              fn: he(({ item: De }) => [
                xe(I.$slots, "month-overlay-value", {
                  text: De.text,
                  value: De.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : ce("", !0),
          I.yearPicker ? (Z(), qe(nl, ve({ key: 2 }, M($)("year"), {
            modelValue: M(S),
            "onUpdate:modelValue": q[19] || (q[19] = (De) => Ye(S) ? S.value = De : null),
            "multi-model-value": M(T),
            "skip-active": I.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: j,
            onSelected: q[20] || (q[20] = (De) => I.$emit("overlay-closed"))
          }), yn({ _: 2 }, [
            I.$slots["year-overlay-value"] ? {
              name: "item",
              fn: he(({ item: De }) => [
                xe(I.$slots, "year-overlay-value", {
                  text: De.text,
                  value: De.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : ce("", !0)
        ], 64))
      ]);
    };
  }
}), ID = {
  key: 0,
  class: "dp__time_input"
}, AD = ["aria-label", "onKeydown", "onClick"], MD = ["aria-label", "data-test", "onKeydown", "onClick"], RD = ["aria-label", "onKeydown", "onClick"], BD = { key: 0 }, FD = ["aria-label", "onKeydown"], LD = /* @__PURE__ */ Wt({
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    ...Za
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed"
  ],
  setup(e, { expose: t, emit: n }) {
    const a = e, { setTimePickerElements: r, setTimePickerBackRef: o } = Qa(), { defaults: l } = En(a), { transitionName: i, showTransition: s } = _u(l.value.transitions), u = Ct({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), d = R("AM"), c = R(null), f = R([]);
    ft(() => {
      n("mounted");
    });
    const v = _(() => (h) => !!(a.maxTime && a.maxTime[h] && a.maxTime[h] < a[h] + +a[`${h}Increment`])), y = _(() => (h) => !!(a.minTime && a.minTime[h] && a.minTime[h] > a[h] - +a[`${h}Increment`])), p = (h, P) => ub(Xt(se(), h), P), x = (h, P) => iN(Xt(se(), h), P), O = _(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !a.enableSeconds && a.is24,
        dp__time_col_reg_with_button: !a.enableSeconds && !a.is24,
        dp__time_col_sec: a.enableSeconds && a.is24,
        dp__time_col_sec_with_button: a.enableSeconds && !a.is24
      })
    ), E = _(() => {
      const h = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return a.enableSeconds ? h.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : h;
    }), S = _(() => E.value.filter((h) => !h.separator)), N = _(() => (h) => {
      if (h === "hours") {
        const P = T(a.hours);
        return { text: P < 10 ? `0${P}` : `${P}`, value: P };
      }
      return { text: a[h] < 10 ? `0${a[h]}` : `${a[h]}`, value: a[h] };
    }), V = (h) => {
      const P = a.is24 ? 24 : 12, W = h === "hours" ? P : 60, H = +a[`${h}GridIncrement`], j = h === "hours" && !a.is24 ? H : 0, X = [];
      for (let Q = j; Q < W; Q += H)
        X.push({ value: Q, text: Q < 10 ? `0${Q}` : `${Q}` });
      return h === "hours" && !a.is24 && X.push({ value: 0, text: "12" }), BN(X);
    }, $ = (h, P) => {
      const W = a.minTime && a.minTime[P], H = a.maxTime && a.maxTime[P];
      return W && H ? h < W || h > H : W ? h < W : H ? h > H : !1;
    }, k = _(() => (h) => V(h).flat().filter((P) => P).map((P) => P.value).filter((P) => $(P, h))), g = (h) => a[`no${h[0].toUpperCase() + h.slice(1)}Overlay`], b = (h) => {
      g(h) || (u[h] = !u[h], u[h] || n("overlay-closed"));
    }, w = (h) => h === "hours" ? pa : h === "minutes" ? ga : mo, C = (h, P = !0) => {
      const W = P ? p : x;
      (P ? v.value(h) : y.value(h)) || n(
        `update:${h}`,
        w(h)(W({ [h]: +a[h] }, { [h]: +a[`${h}Increment`] }))
      );
    }, T = (h) => a.is24 ? h : (h >= 12 ? d.value = "PM" : d.value = "AM", HN(h)), A = () => {
      d.value === "PM" ? (d.value = "AM", n("update:hours", a.hours - 12)) : (d.value = "PM", n("update:hours", a.hours + 12));
    }, z = (h) => {
      u[h] = !0;
    }, U = (h, P, W) => {
      if (h && a.arrowNavigation) {
        Array.isArray(f.value[P]) ? f.value[P][W] = h : f.value[P] = [h];
        const H = f.value.reduce(
          (j, X) => X.map((Q, Y) => [...j[Y] || [], X[Y]]),
          []
        );
        o(a.closeTimePickerBtn), c.value && (H[1] = H[1].concat(c.value)), r(H, a.order);
      }
    }, B = (h, P) => h === "hours" && !a.is24 ? n(`update:${h}`, d.value === "PM" ? P + 12 : P) : n(`update:${h}`, P);
    return t({ openChildCmp: z }), (h, P) => {
      var W;
      return h.disabled ? ce("", !0) : (Z(), me("div", ID, [
        (Z(!0), me(ye, null, Ot(M(E), (H, j) => {
          var X, Q, Y;
          return Z(), me("div", {
            key: j,
            class: et(M(O))
          }, [
            H.separator ? (Z(), me(ye, { key: 0 }, [
              wt(" : ")
            ], 64)) : (Z(), me(ye, { key: 1 }, [
              Ie("div", {
                class: et({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: M(v)(H.type)
                }),
                role: "button",
                "data-test": "time-inc-btn",
                "aria-label": (X = M(l).ariaLabels) == null ? void 0 : X.incrementValue(H.type),
                tabindex: "0",
                onKeydown: [
                  Xe((I) => C(H.type), ["enter"]),
                  Xe((I) => C(H.type), ["space"])
                ],
                onClick: (I) => C(H.type),
                ref_for: !0,
                ref: (I) => U(I, j, 0)
              }, [
                h.$slots["arrow-up"] ? xe(h.$slots, "arrow-up", { key: 0 }) : ce("", !0),
                h.$slots["arrow-up"] ? ce("", !0) : (Z(), qe(M(Db), { key: 1 }))
              ], 42, AD),
              Ie("div", {
                role: "button",
                "aria-label": (Q = M(l).ariaLabels) == null ? void 0 : Q.openTpOverlay(H.type),
                class: et(g(H.type) ? "" : "dp__time_display"),
                tabindex: "0",
                "data-test": `${H.type}-toggle-overlay-btn`,
                onKeydown: [
                  Xe((I) => b(H.type), ["enter"]),
                  Xe((I) => b(H.type), ["space"])
                ],
                onClick: (I) => b(H.type),
                ref_for: !0,
                ref: (I) => U(I, j, 1)
              }, [
                h.$slots[H.type] ? xe(h.$slots, H.type, {
                  key: 0,
                  text: M(N)(H.type).text,
                  value: M(N)(H.type).value
                }) : ce("", !0),
                h.$slots[H.type] ? ce("", !0) : (Z(), me(ye, { key: 1 }, [
                  wt(Dt(M(N)(H.type).text), 1)
                ], 64))
              ], 42, MD),
              Ie("div", {
                class: et({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: M(y)(H.type)
                }),
                role: "button",
                "data-test": "time-dec-btn",
                "aria-label": (Y = M(l).ariaLabels) == null ? void 0 : Y.decrementValue(H.type),
                tabindex: "0",
                onKeydown: [
                  Xe((I) => C(H.type, !1), ["enter"]),
                  Xe((I) => C(H.type, !1), ["space"])
                ],
                onClick: (I) => C(H.type, !1),
                ref_for: !0,
                ref: (I) => U(I, j, 2)
              }, [
                h.$slots["arrow-down"] ? xe(h.$slots, "arrow-down", { key: 0 }) : ce("", !0),
                h.$slots["arrow-down"] ? ce("", !0) : (Z(), qe(M(Vb), { key: 1 }))
              ], 42, RD)
            ], 64))
          ], 2);
        }), 128)),
        h.is24 ? ce("", !0) : (Z(), me("div", BD, [
          h.$slots["am-pm-button"] ? xe(h.$slots, "am-pm-button", {
            key: 0,
            toggle: A,
            value: d.value
          }) : ce("", !0),
          h.$slots["am-pm-button"] ? ce("", !0) : (Z(), me("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: c,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (W = M(l).ariaLabels) == null ? void 0 : W.amPmButton,
            tabindex: "0",
            onClick: A,
            onKeydown: [
              Xe(ba(A, ["prevent"]), ["enter"]),
              Xe(ba(A, ["prevent"]), ["space"])
            ]
          }, Dt(d.value), 41, FD))
        ])),
        (Z(!0), me(ye, null, Ot(M(S), (H, j) => (Z(), qe(Jt, {
          key: j,
          name: M(i)(u[H.type]),
          css: M(s)
        }, {
          default: he(() => [
            u[H.type] ? (Z(), qe(nl, {
              key: 0,
              items: V(H.type),
              "disabled-values": M(l).filters.times[H.type].concat(M(k)(H.type)),
              "esc-close": h.escClose,
              "aria-labels": M(l).ariaLabels,
              "hide-navigation": h.hideNavigation,
              "onUpdate:modelValue": (X) => B(H.type, X),
              onSelected: (X) => b(H.type),
              onToggle: (X) => b(H.type),
              onResetFlow: P[0] || (P[0] = (X) => h.$emit("reset-flow")),
              type: H.type
            }, yn({
              "button-icon": he(() => [
                h.$slots["clock-icon"] ? xe(h.$slots, "clock-icon", { key: 0 }) : ce("", !0),
                h.$slots["clock-icon"] ? ce("", !0) : (Z(), qe(M(Nb), { key: 1 }))
              ]),
              _: 2
            }, [
              h.$slots[`${H.type}-overlay-value`] ? {
                name: "item",
                fn: he(({ item: X }) => [
                  xe(h.$slots, `${H.type}-overlay-value`, {
                    text: X.text,
                    value: X.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : ce("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), jD = ["aria-label"], HD = { class: "dp__overlay_container dp__container_flex dp__time_picker_overlay_container" }, UD = {
  key: 1,
  class: "dp__overlay_row"
}, YD = ["aria-label"], WD = /* @__PURE__ */ Wt({
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Za
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed"
  ],
  setup(e, { expose: t, emit: n }) {
    const a = e, { buildMatrix: r, setTimePicker: o } = Qa(), l = Ud(), { hideNavigationButtons: i, defaults: s } = En(a), { transitionName: u, showTransition: d } = _u(s.value.transitions), c = R(null), f = R(null), v = R([]), y = R(null);
    ft(() => {
      n("mount"), !a.timePicker && a.arrowNavigation ? r([Mt(c.value)], "time") : o(!0, a.timePicker);
    });
    const p = _(() => a.range && a.modelAuto ? Bb(a.internalModelValue) : !0), x = R(!1), O = (C) => ({
      hours: Array.isArray(a.hours) ? a.hours[C] : a.hours,
      minutes: Array.isArray(a.minutes) ? a.minutes[C] : a.minutes,
      seconds: Array.isArray(a.seconds) ? a.seconds[C] : a.seconds
    }), E = _(() => {
      const C = [];
      if (a.range)
        for (let T = 0; T < 2; T++)
          C.push(O(T));
      else
        C.push(O(0));
      return C;
    }), S = (C, T = !1, A = "") => {
      T || n("reset-flow"), x.value = C, C && n("overlay-opened"), a.arrowNavigation && (o(C), C || n("overlay-closed")), Je(() => {
        A !== "" && v.value[0] && v.value[0].openChildCmp(A);
      });
    }, N = _(() => ({
      dp__button: !0,
      dp__button_bottom: a.autoApply
    })), V = gr(l, "timePicker"), $ = (C, T, A) => a.range ? T === 0 ? [C, E.value[1][A]] : [E.value[0][A], C] : C, k = (C) => {
      n("update:hours", C);
    }, g = (C) => {
      n("update:minutes", C);
    }, b = (C) => {
      n("update:seconds", C);
    }, w = () => {
      y.value && a.arrowNavigation && y.value.focus({ preventScroll: !0 });
    };
    return t({ toggleTimePicker: S }), (C, T) => {
      var A;
      return Z(), me("div", null, [
        C.timePicker ? ce("", !0) : st((Z(), me("div", {
          key: 0,
          class: et(M(N)),
          role: "button",
          "aria-label": (A = M(s).ariaLabels) == null ? void 0 : A.openTimePicker,
          tabindex: "0",
          "data-test": "open-time-picker-btn",
          ref_key: "openTimePickerBtn",
          ref: c,
          onKeydown: [
            T[0] || (T[0] = Xe((z) => S(!0), ["enter"])),
            T[1] || (T[1] = Xe((z) => S(!0), ["space"]))
          ],
          onClick: T[2] || (T[2] = (z) => S(!0))
        }, [
          C.$slots["clock-icon"] ? xe(C.$slots, "clock-icon", { key: 0 }) : ce("", !0),
          C.$slots["clock-icon"] ? ce("", !0) : (Z(), qe(M(Nb), { key: 1 }))
        ], 42, jD)), [
          [gn, !M(i)("time")]
        ]),
        m(Jt, {
          name: M(u)(x.value),
          css: M(d)
        }, {
          default: he(() => {
            var z;
            return [
              x.value || C.timePicker ? (Z(), me("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: y,
                tabindex: "0"
              }, [
                Ie("div", HD, [
                  C.$slots["time-picker-overlay"] ? xe(C.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: k,
                    setMinutes: g,
                    setSeconds: b
                  }) : ce("", !0),
                  C.$slots["time-picker-overlay"] ? ce("", !0) : (Z(), me("div", UD, [
                    (Z(!0), me(ye, null, Ot(M(E), (U, B) => st((Z(), qe(LD, ve({ key: B }, {
                      ...C.$props,
                      order: B,
                      hours: U.hours,
                      minutes: U.minutes,
                      seconds: U.seconds,
                      closeTimePickerBtn: f.value,
                      disabled: B === 0 ? C.fixedStart : C.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: v,
                      "onUpdate:hours": (h) => k($(h, B, "hours")),
                      "onUpdate:minutes": (h) => g($(h, B, "minutes")),
                      "onUpdate:seconds": (h) => b($(h, B, "seconds")),
                      onMounted: w,
                      onOverlayClosed: w
                    }), yn({ _: 2 }, [
                      Ot(M(V), (h, P) => ({
                        name: h,
                        fn: he((W) => [
                          xe(C.$slots, h, Kt(In(W)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [gn, B === 0 ? !0 : M(p)]
                    ])), 128))
                  ])),
                  C.timePicker ? ce("", !0) : st((Z(), me("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: f,
                    class: et(M(N)),
                    role: "button",
                    "aria-label": (z = M(s).ariaLabels) == null ? void 0 : z.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      T[3] || (T[3] = Xe((U) => S(!1), ["enter"])),
                      T[4] || (T[4] = Xe((U) => S(!1), ["space"]))
                    ],
                    onClick: T[5] || (T[5] = (U) => S(!1))
                  }, [
                    C.$slots["calendar-icon"] ? xe(C.$slots, "calendar-icon", { key: 0 }) : ce("", !0),
                    C.$slots["calendar-icon"] ? ce("", !0) : (Z(), qe(M(bu), { key: 1 }))
                  ], 42, YD)), [
                    [gn, !M(i)("time")]
                  ])
                ])
              ], 512)) : ce("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), zD = (e, t) => {
  const { isDisabled: n, matchDate: a, getWeekFromDate: r } = En(t), o = R(null), l = R(se()), i = (h) => {
    !h.current && t.hideOffsetDates || (o.value = h.value);
  }, s = () => {
    o.value = null;
  }, u = (h) => Array.isArray(e.value) && t.range && e.value[0] && o.value ? h ? cn(o.value, e.value[0]) : Zt(o.value, e.value[0]) : !0, d = (h, P) => {
    const W = () => e.value ? P ? e.value[0] || null : e.value[1] : null, H = e.value && Array.isArray(e.value) ? W() : null;
    return pt(se(h.value), H);
  }, c = (h) => {
    const P = Array.isArray(e.value) ? e.value[0] : null;
    return h ? !Zt(o.value || null, P) : !0;
  }, f = (h, P = !0) => (t.range || t.weekPicker) && Array.isArray(e.value) ? t.hideOffsetDates && !h.current ? !1 : pt(se(h.value), e.value[P ? 0 : 1]) : t.range ? d(h, P) && c(P) || pt(h.value, Array.isArray(e.value) ? e.value[0] : null) && u(P) : !1, v = (h, P, W) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? h ? !1 : W ? cn(e.value[0], P.value) : Zt(e.value[0], P.value) : !1, y = (h) => !e.value || t.hideOffsetDates && !h.current ? !1 : t.range ? t.modelAuto && Array.isArray(e.value) ? pt(h.value, e.value[0] ? e.value[0] : l.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((P) => pt(P, h.value)) : pt(h.value, e.value ? e.value : l.value), p = (h) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !h.current)
          return !1;
        const P = Ya(o.value, +t.autoRange), W = r(se(o.value));
        return t.weekPicker ? pt(W[1], se(h.value)) : pt(P, se(h.value));
      }
      return !1;
    }
    return !1;
  }, x = (h) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        const P = Ya(o.value, +t.autoRange);
        if (t.hideOffsetDates && !h.current)
          return !1;
        const W = r(se(o.value));
        return t.weekPicker ? cn(h.value, W[0]) && Zt(h.value, W[1]) : cn(h.value, o.value) && Zt(h.value, P);
      }
      return !1;
    }
    return !1;
  }, O = (h) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !h.current)
          return !1;
        const P = r(se(o.value));
        return t.weekPicker ? pt(P[0], h.value) : pt(o.value, h.value);
      }
      return !1;
    }
    return !1;
  }, E = (h) => Ib(e.value, o.value, h.value), S = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, N = () => t.modelAuto ? Bb(t.internalModelValue) : !0, V = (h) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const P = t.range ? !f(h) && !f(h, !1) : !0;
    return !n(h.value) && !y(h) && !(!h.current && t.hideOffsetDates) && P;
  }, $ = (h) => t.range ? t.modelAuto ? S() && y(h) : !1 : y(h), k = (h) => t.highlight ? a(h.value, t.highlight) : !1, g = (h) => n(h.value) && t.highlightDisabledDays === !1, b = (h) => t.highlightWeekDays && t.highlightWeekDays.includes(h.value.getDay()), w = (h) => (t.range || t.weekPicker) && (!(t.multiCalendars > 0) || h.current) && N() && !(!h.current && t.hideOffsetDates) && !y(h) ? E(h) : !1, C = (h) => ({
    dp__cell_offset: !h.current,
    dp__pointer: !t.disabled && !(!h.current && t.hideOffsetDates) && !n(h.value),
    dp__cell_disabled: n(h.value),
    dp__cell_highlight: !g(h) && (k(h) || b(h)) && !$(h),
    dp__cell_highlight_active: !g(h) && (k(h) || b(h)) && $(h),
    dp__today: !t.noToday && pt(h.value, l.value) && h.current
  }), T = (h) => ({
    dp__active_date: $(h),
    dp__date_hover: V(h)
  }), A = (h) => ({
    ...z(h),
    ...U(h),
    dp__range_between_week: w(h) && t.weekPicker
  }), z = (h) => ({
    dp__range_start: t.multiCalendars > 0 ? h.current && f(h) && N() : f(h) && N(),
    dp__range_end: t.multiCalendars > 0 ? h.current && f(h, !1) && N() : f(h, !1) && N(),
    dp__range_between: w(h) && !t.weekPicker,
    dp__date_hover_start: v(V(h), h, !0),
    dp__date_hover_end: v(V(h), h, !1)
  }), U = (h) => ({
    ...z(h),
    dp__cell_auto_range: x(h),
    dp__cell_auto_range_start: O(h),
    dp__cell_auto_range_end: p(h)
  }), B = (h) => t.range ? t.autoRange ? U(h) : t.modelAuto ? { ...T(h), ...z(h) } : z(h) : t.weekPicker ? A(h) : T(h);
  return {
    setHoverDate: i,
    clearHoverDate: s,
    getDayClassData: (h) => ({
      ...C(h),
      ...B(h),
      [t.dayClass ? t.dayClass(h.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    })
  };
}, qD = ["id", "onKeydown"], GD = {
  key: 0,
  class: "dp__sidebar_left"
}, KD = {
  key: 1,
  class: "dp__preset_ranges"
}, XD = ["onClick"], QD = {
  key: 2,
  class: "dp__sidebar_right"
}, ZD = {
  key: 3,
  class: "dp__now_wrap"
}, JD = /* @__PURE__ */ Wt({
  __name: "DatepickerMenu",
  props: {
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Za
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open"
  ],
  setup(e, { expose: t, emit: n }) {
    const a = e, { setMenuFocused: r, setShiftKey: o, control: l } = Ab(), { getCalendarDays: i, defaults: s } = En(a), u = Ud(), d = R(null), c = Ct({
      timePicker: !!(!a.enableTimePicker || a.timePicker || a.monthPicker),
      monthYearInput: !!a.timePicker,
      calendar: !1
    }), f = R([]), v = R([]), y = R(null), p = R(null), x = R(0), O = R(!1), E = R(0);
    ft(() => {
      var ee;
      O.value = !0, !((ee = a.presetRanges) != null && ee.length) && !u["left-sidebar"] && !u["right-sidebar"] && G();
      const Ce = Mt(p);
      if (Ce && !a.textInput && !a.inline && (r(!0), g()), Ce) {
        const rn = (mn) => {
          Object.keys(u).length || mn.preventDefault(), mn.stopImmediatePropagation(), mn.stopPropagation();
        };
        Ce.addEventListener("pointerdown", rn), Ce.addEventListener("mousedown", rn);
      }
      window.addEventListener("resize", G);
    }), $l(() => {
      window.removeEventListener("resize", G);
    });
    const { arrowRight: S, arrowLeft: N, arrowDown: V, arrowUp: $ } = Qa(), k = (ee) => {
      ee || ee === 0 ? v.value[ee].triggerTransition(
        A.value(ee),
        z.value(ee)
      ) : v.value.forEach(
        (Ce, rn) => Ce.triggerTransition(A.value(rn), z.value(rn))
      );
    }, g = () => {
      const ee = Mt(p);
      ee && ee.focus({ preventScroll: !0 });
    }, b = () => {
      var ee;
      (ee = a.flow) != null && ee.length && E.value !== -1 && (E.value += 1, n("flow-step", E.value), ut());
    }, w = () => {
      E.value = -1;
    }, {
      calendars: C,
      modelValue: T,
      month: A,
      year: z,
      time: U,
      updateTime: B,
      updateMonthYear: h,
      selectDate: P,
      getWeekNum: W,
      monthYearSelect: H,
      handleScroll: j,
      handleArrow: X,
      handleSwipe: Q,
      getMarker: Y,
      selectCurrentDate: I,
      presetDateRange: q
    } = XN(a, n, b, k, E), { setHoverDate: we, clearHoverDate: be, getDayClassData: Oe } = zD(T, a);
    pe(
      C,
      () => {
        a.openOnTop && setTimeout(() => {
          n("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const We = gr(u, "calendar"), yt = gr(u, "action"), De = gr(u, "timePicker"), D = gr(u, "monthYear"), F = _(() => a.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), K = _(() => LN(a.yearRange)), ae = _(() => jN(a.locale, a.monthNameFormat)), G = () => {
      const ee = Mt(d);
      ee && (x.value = ee.getBoundingClientRect().width);
    }, te = _(() => (ee) => i(A.value(ee), z.value(ee))), re = _(
      () => s.value.multiCalendars > 0 && a.range ? [...Array(s.value.multiCalendars).keys()] : [0]
    ), ue = _(
      () => (ee) => ee === 1
    ), de = _(() => a.monthPicker || a.timePicker || a.yearPicker), le = _(
      () => ({
        dp__flex_display: s.value.multiCalendars > 0
      })
    ), Se = _(() => ({
      dp__instance_calendar: s.value.multiCalendars > 0
    })), _e = _(() => ({
      dp__menu_disabled: a.disabled,
      dp__menu_readonly: a.readonly
    })), Ee = _(
      () => (ee) => Ue(te, ee)
    ), Be = _(
      () => ({
        dp__menu: !0,
        dp__menu_index: !a.inline,
        dp__relative: a.inline,
        [a.menuClassName]: !!a.menuClassName
      })
    ), Ue = (ee, Ce) => ee.value(Ce).map((rn) => ({
      ...rn,
      days: rn.days.map((mn) => (mn.marker = Y(mn), mn.classData = Oe(mn), mn))
    })), Ze = (ee) => {
      ee.stopPropagation(), ee.stopImmediatePropagation();
    }, L = () => {
      a.escClose && n("close-picker");
    }, J = (ee, Ce = !1) => {
      P(ee, Ce), a.spaceConfirm && n("select-date");
    }, ke = (ee) => {
      var Ce;
      (Ce = a.flow) != null && Ce.length && (c[ee] = !0, Object.keys(c).filter((rn) => !c[rn]).length || ut());
    }, Pe = (ee, Ce, rn, mn, ...Ml) => {
      if (a.flow[E.value] === ee) {
        const Ve = mn ? Ce.value[0] : Ce.value;
        Ve && Ve[rn](...Ml);
      }
    }, ut = () => {
      Pe("month", f, "toggleMonthPicker", !0, !0), Pe("year", f, "toggleYearPicker", !0, !0), Pe("calendar", y, "toggleTimePicker", !1, !1, !0), Pe("time", y, "toggleTimePicker", !1, !0, !0);
      const ee = a.flow[E.value];
      (ee === "hours" || ee === "minutes" || ee === "seconds") && Pe(ee, y, "toggleTimePicker", !1, !0, !0, ee);
    }, At = (ee) => {
      if (a.arrowNavigation) {
        if (ee === "up")
          return $();
        if (ee === "down")
          return V();
        if (ee === "left")
          return N();
        if (ee === "right")
          return S();
      } else
        ee === "left" || ee === "up" ? X("left", 0, ee === "up") : X("right", 0, ee === "down");
    }, Tn = (ee) => {
      o(ee.shiftKey), !a.disableMonthYearSelect && ee.code === "Tab" && ee.target.classList.contains("dp__menu") && l.value.shiftKeyInMenu && (ee.preventDefault(), ee.stopImmediatePropagation(), n("close-picker"));
    }, xt = (ee) => {
      f.value[0] && f.value[0].handleMonthYearChange(ee);
    };
    return t({
      updateMonthYear: h
    }), (ee, Ce) => {
      var rn;
      return Z(), qe(Jt, {
        appear: "",
        name: (rn = M(s).transitions) == null ? void 0 : rn.menuAppear,
        mode: "out-in",
        css: !!ee.transitions
      }, {
        default: he(() => {
          var mn, Ml;
          return [
            Ie("div", {
              id: ee.uid ? `dp-menu-${ee.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: p,
              role: "dialog",
              class: et(M(Be)),
              onMouseleave: Ce[15] || (Ce[15] = //@ts-ignore
              (...Ve) => M(be) && M(be)(...Ve)),
              onClick: Ze,
              onKeydown: [
                Xe(L, ["esc"]),
                Ce[16] || (Ce[16] = Xe(ba((Ve) => At("left"), ["prevent"]), ["left"])),
                Ce[17] || (Ce[17] = Xe(ba((Ve) => At("up"), ["prevent"]), ["up"])),
                Ce[18] || (Ce[18] = Xe(ba((Ve) => At("down"), ["prevent"]), ["down"])),
                Ce[19] || (Ce[19] = Xe(ba((Ve) => At("right"), ["prevent"]), ["right"])),
                Tn
              ]
            }, [
              (ee.disabled || ee.readonly) && ee.inline ? (Z(), me("div", {
                key: 0,
                class: et(M(_e))
              }, null, 2)) : ce("", !0),
              !ee.inline && !ee.teleportCenter ? (Z(), me("div", {
                key: 1,
                class: et(M(F))
              }, null, 2)) : ce("", !0),
              Ie("div", {
                class: et({
                  dp__menu_content_wrapper: ((mn = ee.presetRanges) == null ? void 0 : mn.length) || !!ee.$slots["left-sidebar"] || !!ee.$slots["right-sidebar"]
                })
              }, [
                ee.$slots["left-sidebar"] ? (Z(), me("div", GD, [
                  xe(ee.$slots, "left-sidebar", Kt(In({ handleMonthYearChange: xt })))
                ])) : ce("", !0),
                (Ml = ee.presetRanges) != null && Ml.length ? (Z(), me("div", KD, [
                  (Z(!0), me(ye, null, Ot(ee.presetRanges, (Ve, Ur) => (Z(), me("div", {
                    key: Ur,
                    style: An(Ve.style || {}),
                    class: "dp__preset_range",
                    onClick: (Ke) => M(q)(Ve.range, !!Ve.slot)
                  }, [
                    Ve.slot ? xe(ee.$slots, Ve.slot, {
                      key: 0,
                      presetDateRange: M(q),
                      label: Ve.label,
                      range: Ve.range
                    }) : (Z(), me(ye, { key: 1 }, [
                      wt(Dt(Ve.label), 1)
                    ], 64))
                  ], 12, XD))), 128))
                ])) : ce("", !0),
                Ie("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: d,
                  role: "document"
                }, [
                  Ie("div", {
                    class: et(M(le))
                  }, [
                    (Z(!0), me(ye, null, Ot(M(re), (Ve, Ur) => (Z(), me("div", {
                      key: Ve,
                      class: et(M(Se))
                    }, [
                      !ee.disableMonthYearSelect && !ee.timePicker ? (Z(), qe(VD, ve({
                        key: 0,
                        ref_for: !0,
                        ref: (Ke) => {
                          Ke && (f.value[Ur] = Ke);
                        },
                        months: M(ae),
                        years: M(K),
                        month: M(A)(Ve),
                        year: M(z)(Ve),
                        instance: Ve,
                        "internal-model-value": e.internalModelValue
                      }, ee.$props, {
                        onMount: Ce[0] || (Ce[0] = (Ke) => ke("monthYearInput")),
                        onResetFlow: w,
                        onUpdateMonthYear: (Ke) => M(h)(Ve, Ke),
                        onMonthYearSelect: M(H),
                        onOverlayClosed: g
                      }), yn({ _: 2 }, [
                        Ot(M(D), (Ke, w_) => ({
                          name: Ke,
                          fn: he((Au) => [
                            xe(ee.$slots, Ke, Kt(In(Au)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : ce("", !0),
                      m(_D, ve({
                        ref_for: !0,
                        ref: (Ke) => {
                          Ke && (v.value[Ur] = Ke);
                        },
                        "specific-mode": M(de),
                        "get-week-num": M(W),
                        instance: Ve,
                        "mapped-dates": M(Ee)(Ve),
                        month: M(A)(Ve),
                        year: M(z)(Ve)
                      }, ee.$props, {
                        "flow-step": E.value,
                        "onUpdate:flowStep": Ce[1] || (Ce[1] = (Ke) => E.value = Ke),
                        onSelectDate: (Ke) => M(P)(Ke, !M(ue)(Ve)),
                        onHandleSpace: (Ke) => J(Ke, !M(ue)(Ve)),
                        onSetHoverDate: Ce[2] || (Ce[2] = (Ke) => M(we)(Ke)),
                        onHandleScroll: (Ke) => M(j)(Ke, Ve),
                        onHandleSwipe: (Ke) => M(Q)(Ke, Ve),
                        onMount: Ce[3] || (Ce[3] = (Ke) => ke("calendar")),
                        onResetFlow: w,
                        onTooltipOpen: Ce[4] || (Ce[4] = (Ke) => ee.$emit("tooltip-open", Ke)),
                        onTooltipClose: Ce[5] || (Ce[5] = (Ke) => ee.$emit("tooltip-close", Ke))
                      }), yn({ _: 2 }, [
                        Ot(M(We), (Ke, w_) => ({
                          name: Ke,
                          fn: he((Au) => [
                            xe(ee.$slots, Ke, Kt(In({ ...Au })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  Ie("div", null, [
                    ee.$slots["time-picker"] ? xe(ee.$slots, "time-picker", Kt(ve({ key: 0 }, { time: M(U), updateTime: M(B) }))) : (Z(), me(ye, { key: 1 }, [
                      ee.enableTimePicker && !ee.monthPicker && !ee.weekPicker ? (Z(), qe(WD, ve({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: y,
                        hours: M(U).hours,
                        minutes: M(U).minutes,
                        seconds: M(U).seconds,
                        "internal-model-value": e.internalModelValue
                      }, ee.$props, {
                        onMount: Ce[6] || (Ce[6] = (Ve) => ke("timePicker")),
                        "onUpdate:hours": Ce[7] || (Ce[7] = (Ve) => M(B)(Ve)),
                        "onUpdate:minutes": Ce[8] || (Ce[8] = (Ve) => M(B)(Ve, !1)),
                        "onUpdate:seconds": Ce[9] || (Ce[9] = (Ve) => M(B)(Ve, !1, !0)),
                        onResetFlow: w,
                        onOverlayClosed: g,
                        onOverlayOpened: Ce[10] || (Ce[10] = (Ve) => ee.$emit("time-picker-open", Ve))
                      }), yn({ _: 2 }, [
                        Ot(M(De), (Ve, Ur) => ({
                          name: Ve,
                          fn: he((Ke) => [
                            xe(ee.$slots, Ve, Kt(In(Ke)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : ce("", !0)
                    ], 64))
                  ])
                ], 512),
                ee.$slots["right-sidebar"] ? (Z(), me("div", QD, [
                  xe(ee.$slots, "right-sidebar", Kt(In({ handleMonthYearChange: xt })))
                ])) : ce("", !0),
                ee.showNowButton ? (Z(), me("div", ZD, [
                  ee.$slots["now-button"] ? xe(ee.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: M(I)
                  }) : ce("", !0),
                  ee.$slots["now-button"] ? ce("", !0) : (Z(), me("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: Ce[11] || (Ce[11] = //@ts-ignore
                    (...Ve) => M(I) && M(I)(...Ve))
                  }, Dt(ee.nowButtonLabel), 1))
                ])) : ce("", !0)
              ], 2),
              !ee.autoApply || ee.keepActionRow ? (Z(), qe(fD, ve({
                key: 2,
                "menu-mount": O.value,
                "calendar-width": x.value,
                "internal-model-value": e.internalModelValue
              }, ee.$props, {
                onClosePicker: Ce[12] || (Ce[12] = (Ve) => ee.$emit("close-picker")),
                onSelectDate: Ce[13] || (Ce[13] = (Ve) => ee.$emit("select-date")),
                onInvalidSelect: Ce[14] || (Ce[14] = (Ve) => ee.$emit("invalid-select"))
              }), yn({ _: 2 }, [
                Ot(M(yt), (Ve, Ur) => ({
                  name: Ve,
                  fn: he((Ke) => [
                    xe(ee.$slots, Ve, Kt(In({ ...Ke })))
                  ])
                }))
              ]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : ce("", !0)
            ], 42, qD)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), eV = typeof window < "u" ? window : void 0, uc = () => {
}, tV = (e) => Od() ? (fn(e), !0) : !1, nV = (e, t, n, a) => {
  if (!e)
    return uc;
  let r = uc;
  const o = pe(
    () => M(e),
    (i) => {
      r(), i && (i.addEventListener(t, n, a), r = () => {
        i.removeEventListener(t, n, a), r = uc;
      });
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    o(), r();
  };
  return tV(l), l;
}, aV = (e, t, n, a = {}) => {
  const { window: r = eV, event: o = "pointerdown" } = a;
  return r ? nV(r, o, (l) => {
    const i = Mt(e), s = Mt(t);
    !i || !s || i === l.target || l.composedPath().includes(i) || l.composedPath().includes(s) || n(l);
  }, { passive: !0 }) : void 0;
}, rV = /* @__PURE__ */ Wt({
  __name: "VueDatePicker",
  props: {
    ...Za
  },
  emits: [
    "update:model-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open"
  ],
  setup(e, { expose: t, emit: n }) {
    const a = e, r = Ud(), o = R(!1), l = ne(a, "modelValue"), i = ne(a, "timezone"), s = R(null), u = R(null), d = R(!1), c = R(null), { setMenuFocused: f, setShiftKey: v } = Ab(), { clearArrowNav: y } = Qa(), { validateDate: p, isValidTime: x, defaults: O } = En(a);
    ft(() => {
      C(a.modelValue), a.inline || (g(c.value).addEventListener("scroll", P), window.addEventListener("resize", W)), a.inline && (o.value = !0);
    }), $l(() => {
      if (!a.inline) {
        const G = g(c.value);
        G && G.removeEventListener("scroll", P), window.removeEventListener("resize", W);
      }
    });
    const E = gr(r, "all", a.presetRanges), S = gr(r, "input");
    pe(
      [l, i],
      () => {
        C(l.value);
      },
      { deep: !0 }
    );
    const { openOnTop: N, menuPosition: V, setMenuPosition: $, setInitialPosition: k, getScrollableParent: g } = JN(
      s,
      u,
      n,
      a
    ), {
      inputValue: b,
      internalModelValue: w,
      parseExternalModelValue: C,
      emitModelValue: T,
      formatInputValue: A,
      checkBeforeEmit: z
    } = QN(n, a, d), U = _(
      () => ({
        dp__main: !0,
        dp__theme_dark: a.dark,
        dp__theme_light: !a.dark,
        dp__flex_display: a.inline,
        dp__flex_display_with_input: a.inlineWithInput
      })
    ), B = _(() => a.dark ? "dp__theme_dark" : "dp__theme_light"), h = _(() => a.teleport ? {
      to: typeof a.teleport == "boolean" ? "body" : a.teleport,
      disabled: a.inline
    } : { class: "dp__outer_menu_wrap" }), P = () => {
      o.value && (a.closeOnScroll ? be() : $());
    }, W = () => {
      o.value && $();
    }, H = () => {
      !a.disabled && !a.readonly && (k(), o.value = !0, Je().then(() => {
        $(), o.value && n("open");
      }), o.value || we(), C(a.modelValue));
    }, j = () => {
      b.value = "", we(), n("update:model-value", null), n("cleared"), be();
    }, X = () => {
      const G = w.value;
      return !G || !Array.isArray(G) && p(G) ? !0 : Array.isArray(G) ? G.length === 2 && p(G[0]) && p(G[1]) ? !0 : p(G[0]) : !1;
    }, Q = () => {
      z() && X() ? (T(), be()) : n("invalid-select", w.value);
    }, Y = (G) => {
      I(), T(), a.closeOnAutoApply && !G && be();
    }, I = () => {
      u.value && a.textInput && u.value.setParsedDate(w.value);
    }, q = (G = !1) => {
      a.autoApply && x(w.value) && X() && (a.range && Array.isArray(w.value) ? (a.partialRange || w.value.length === 2) && Y(G) : Y(G));
    }, we = () => {
      a.textInput || (w.value = null);
    }, be = () => {
      a.inline || (o.value && (o.value = !1, f(!1), v(!1), y(), n("closed"), k(), b.value && C(l.value)), we(), u.value && u.value.focusInput());
    }, Oe = (G, te) => {
      if (!G) {
        w.value = null;
        return;
      }
      w.value = G, te && (Q(), n("text-submit"));
    }, We = () => {
      a.autoApply && x(w.value) && T(), I();
    }, yt = () => o.value ? be() : H(), De = (G) => {
      w.value = G;
    }, D = _(() => a.textInput && O.value.textInputOptions.format), F = () => {
      D.value && (d.value = !0, A()), n("focus");
    }, K = () => {
      D.value && (d.value = !1, A()), n("blur");
    }, ae = (G) => {
      s.value && s.value.updateMonthYear(0, {
        month: Cy(G.month),
        year: Cy(G.year)
      });
    };
    return aV(
      s,
      u,
      a.onClickOutside ? () => a.onClickOutside(X) : be
    ), t({
      closeMenu: be,
      selectDate: Q,
      clearValue: j,
      openMenu: H,
      onScroll: P,
      formatInputValue: A,
      // exposed for testing purposes
      updateInternalModelValue: De,
      // modify internal modelValue
      setMonthYear: ae
    }), (G, te) => (Z(), me("div", {
      class: et(M(U)),
      ref_key: "pickerWrapperRef",
      ref: c
    }, [
      m(iD, ve({
        ref_key: "inputRef",
        ref: u,
        "is-menu-open": o.value,
        "input-value": M(b),
        "onUpdate:inputValue": te[0] || (te[0] = (re) => Ye(b) ? b.value = re : null)
      }, G.$props, {
        onClear: j,
        onOpen: H,
        onSetInputDate: Oe,
        onSetEmptyDate: M(T),
        onSelectDate: Q,
        onToggle: yt,
        onClose: be,
        onFocus: F,
        onBlur: K
      }), yn({ _: 2 }, [
        Ot(M(S), (re, ue) => ({
          name: re,
          fn: he((de) => [
            xe(G.$slots, re, Kt(In(de)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      o.value ? (Z(), qe(Md(G.teleport ? tg : "div"), Kt(ve({ key: 0 }, M(h))), {
        default: he(() => [
          o.value ? (Z(), qe(JD, ve({
            key: 0,
            ref_key: "dpMenuRef",
            ref: s,
            class: M(B),
            style: M(V),
            "open-on-top": M(N)
          }, G.$props, {
            "internal-model-value": M(w),
            "onUpdate:internalModelValue": te[1] || (te[1] = (re) => Ye(w) ? w.value = re : null),
            onClosePicker: be,
            onSelectDate: Q,
            onAutoApply: q,
            onTimeUpdate: We,
            onFlowStep: te[2] || (te[2] = (re) => G.$emit("flow-step", re)),
            onUpdateMonthYear: te[3] || (te[3] = (re) => G.$emit("update-month-year", re)),
            onInvalidSelect: te[4] || (te[4] = (re) => G.$emit("invalid-select", M(w))),
            onInvalidFixedRange: te[5] || (te[5] = (re) => G.$emit("invalid-fixed-range", re)),
            onRecalculatePosition: M($),
            onTooltipOpen: te[6] || (te[6] = (re) => G.$emit("tooltip-open", re)),
            onTooltipClose: te[7] || (te[7] = (re) => G.$emit("tooltip-close", re)),
            onTimePickerOpen: te[8] || (te[8] = (re) => G.$emit("time-picker-open", re))
          }), yn({ _: 2 }, [
            Ot(M(E), (re, ue) => ({
              name: re,
              fn: he((de) => [
                xe(G.$slots, re, Kt(In({ ...de })))
              ])
            }))
          ]), 1040, ["class", "style", "open-on-top", "internal-model-value", "onRecalculatePosition"])) : ce("", !0)
        ]),
        _: 3
      }, 16)) : ce("", !0)
    ], 2));
  }
}), dv = /* @__PURE__ */ (() => {
  const e = rV;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), oV = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dv
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(oV).forEach(([e, t]) => {
  e !== "default" && (dv[e] = t);
});
const lV = oe()({
  name: "VApp",
  props: {
    ...lb({
      fullHeight: !0
    }),
    ...Ge()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = at(e), {
      layoutClasses: r,
      layoutStyles: o,
      getLayoutItem: l,
      items: i,
      layoutRef: s
    } = ib(e), {
      rtlClasses: u
    } = Pa();
    return fe(() => {
      var d;
      return m("div", {
        ref: s,
        class: ["v-application", a.themeClasses.value, r.value, u.value],
        style: o.value
      }, [m("div", {
        class: "v-application__wrap"
      }, [(d = n.default) == null ? void 0 : d.call(n)])]);
    }), {
      getLayoutItem: l,
      items: i,
      theme: a
    };
  }
});
const lt = oe(!1)({
  name: "VDefaultsProvider",
  props: {
    defaults: Object,
    disabled: Boolean,
    reset: [Number, String],
    root: Boolean,
    scoped: Boolean
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: a,
      disabled: r,
      reset: o,
      root: l,
      scoped: i
    } = sl(e);
    return Vt(a, {
      reset: o,
      root: l,
      scoped: i,
      disabled: r
    }), () => {
      var s;
      return (s = n.default) == null ? void 0 : s.call(n);
    };
  }
});
function $n(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "center center", n = arguments.length > 2 ? arguments[2] : void 0;
  return oe()({
    name: e,
    props: {
      group: Boolean,
      hideOnLeave: Boolean,
      leaveAbsolute: Boolean,
      mode: {
        type: String,
        default: n
      },
      origin: {
        type: String,
        default: t
      }
    },
    setup(a, r) {
      let {
        slots: o
      } = r;
      return () => {
        const l = a.group ? mS : Jt;
        return Xa(l, {
          name: e,
          mode: a.mode,
          onBeforeEnter(i) {
            i.style.transformOrigin = a.origin;
          },
          onLeave(i) {
            if (a.leaveAbsolute) {
              const {
                offsetTop: s,
                offsetLeft: u,
                offsetWidth: d,
                offsetHeight: c
              } = i;
              i._transitionInitialStyles = {
                position: i.style.position,
                top: i.style.top,
                left: i.style.left,
                width: i.style.width,
                height: i.style.height
              }, i.style.position = "absolute", i.style.top = `${s}px`, i.style.left = `${u}px`, i.style.width = `${d}px`, i.style.height = `${c}px`;
            }
            a.hideOnLeave && i.style.setProperty("display", "none", "important");
          },
          onAfterLeave(i) {
            if (a.leaveAbsolute && (i != null && i._transitionInitialStyles)) {
              const {
                position: s,
                top: u,
                left: d,
                width: c,
                height: f
              } = i._transitionInitialStyles;
              delete i._transitionInitialStyles, i.style.position = s || "", i.style.top = u || "", i.style.left = d || "", i.style.width = c || "", i.style.height = f || "";
            }
          }
        }, o.default);
      };
    }
  });
}
function Fb(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return oe()({
    name: e,
    props: {
      mode: {
        type: String,
        default: n
      }
    },
    setup(a, r) {
      let {
        slots: o
      } = r;
      return () => Xa(Jt, {
        name: e,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...t
      }, o.default);
    }
  });
}
function Lb() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = Bn(`offset-${n}`);
  return {
    onBeforeEnter(l) {
      l._parent = l.parentNode, l._initialStyle = {
        transition: l.style.transition,
        overflow: l.style.overflow,
        [n]: l.style[n]
      };
    },
    onEnter(l) {
      const i = l._initialStyle;
      l.style.setProperty("transition", "none", "important"), l.style.overflow = "hidden";
      const s = `${l[a]}px`;
      l.style[n] = "0", l.offsetHeight, l.style.transition = i.transition, e && l._parent && l._parent.classList.add(e), requestAnimationFrame(() => {
        l.style[n] = s;
      });
    },
    onAfterEnter: o,
    onEnterCancelled: o,
    onLeave(l) {
      l._initialStyle = {
        transition: "",
        overflow: l.style.overflow,
        [n]: l.style[n]
      }, l.style.overflow = "hidden", l.style[n] = `${l[a]}px`, l.offsetHeight, requestAnimationFrame(() => l.style[n] = "0");
    },
    onAfterLeave: r,
    onLeaveCancelled: r
  };
  function r(l) {
    e && l._parent && l._parent.classList.remove(e), o(l);
  }
  function o(l) {
    const i = l._initialStyle[n];
    l.style.overflow = l._initialStyle.overflow, i != null && (l.style[n] = i), delete l._initialStyle;
  }
}
const wu = oe()({
  name: "VDialogTransition",
  props: {
    target: Object
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = {
      onBeforeEnter(r) {
        r.style.pointerEvents = "none", r.style.visibility = "hidden";
      },
      async onEnter(r, o) {
        var f;
        await new Promise((v) => requestAnimationFrame(v)), await new Promise((v) => requestAnimationFrame(v)), r.style.visibility = "";
        const {
          x: l,
          y: i,
          sx: s,
          sy: u,
          speed: d
        } = Dy(e.target, r), c = yr(r, [{
          transform: `translate(${l}px, ${i}px) scale(${s}, ${u})`,
          opacity: 0
        }, {}], {
          duration: 225 * d,
          easing: ix
        });
        (f = Ny(r)) == null || f.forEach((v) => {
          yr(v, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * d,
            easing: yl
          });
        }), c.finished.then(() => o());
      },
      onAfterEnter(r) {
        r.style.removeProperty("pointer-events");
      },
      onBeforeLeave(r) {
        r.style.pointerEvents = "none";
      },
      async onLeave(r, o) {
        var f;
        await new Promise((v) => requestAnimationFrame(v));
        const {
          x: l,
          y: i,
          sx: s,
          sy: u,
          speed: d
        } = Dy(e.target, r);
        yr(r, [{}, {
          transform: `translate(${l}px, ${i}px) scale(${s}, ${u})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: sx
        }).finished.then(() => o()), (f = Ny(r)) == null || f.forEach((v) => {
          yr(v, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * d,
            easing: yl
          });
        });
      },
      onAfterLeave(r) {
        r.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? m(Jt, ve({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), n) : m(Jt, {
      name: "dialog-transition"
    }, n);
  }
});
function Ny(e) {
  var n;
  const t = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return t && [...t];
}
function Dy(e, t) {
  const n = e.getBoundingClientRect(), a = qd(t), [r, o] = getComputedStyle(t).transformOrigin.split(" ").map((O) => parseFloat(O)), [l, i] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  l === "left" || i === "left" ? s -= n.width / 2 : (l === "right" || i === "right") && (s += n.width / 2);
  let u = n.top + n.height / 2;
  l === "top" || i === "top" ? u -= n.height / 2 : (l === "bottom" || i === "bottom") && (u += n.height / 2);
  const d = n.width / a.width, c = n.height / a.height, f = Math.max(1, d, c), v = d / f || 0, y = c / f || 0, p = a.width * a.height / (window.innerWidth * window.innerHeight), x = p > 0.12 ? Math.min(1.5, (p - 0.12) * 10 + 1) : 1;
  return {
    x: s - (r + a.left),
    y: u - (o + a.top),
    sx: v,
    sy: y,
    speed: x
  };
}
const iV = $n("fab-transition", "center center", "out-in"), sV = $n("dialog-bottom-transition"), uV = $n("dialog-top-transition"), sd = $n("fade-transition"), jb = $n("scale-transition"), cV = $n("scroll-x-transition"), fV = $n("scroll-x-reverse-transition"), dV = $n("scroll-y-transition"), vV = $n("scroll-y-reverse-transition"), mV = $n("slide-x-transition"), hV = $n("slide-x-reverse-transition"), vv = $n("slide-y-transition"), yV = $n("slide-y-reverse-transition"), Su = Fb("expand-transition", Lb()), mv = Fb("expand-x-transition", Lb("", !0));
const Kn = Fe({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function Xn(e) {
  return {
    dimensionStyles: _(() => ({
      height: ge(e.height),
      maxHeight: ge(e.maxHeight),
      maxWidth: ge(e.maxWidth),
      minHeight: ge(e.minHeight),
      minWidth: ge(e.minWidth),
      width: ge(e.width)
    }))
  };
}
function pV(e) {
  return {
    aspectStyles: _(() => {
      const t = Number(e.aspectRatio);
      return t ? {
        paddingBottom: String(1 / t * 100) + "%"
      } : void 0;
    })
  };
}
const Hb = oe()({
  name: "VResponsive",
  props: {
    aspectRatio: [String, Number],
    contentClass: String,
    ...Kn()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      aspectStyles: a
    } = pV(e), {
      dimensionStyles: r
    } = Xn(e);
    return fe(() => {
      var o;
      return m("div", {
        class: "v-responsive",
        style: r.value
      }, [m("div", {
        class: "v-responsive__sizer",
        style: a.value
      }, null), (o = n.additional) == null ? void 0 : o.call(n), n.default && m("div", {
        class: ["v-responsive__content", e.contentClass]
      }, [n.default()])]);
    }), {};
  }
});
function gV(e, t) {
  if (!Qd)
    return;
  const n = t.modifiers || {}, a = t.value, {
    handler: r,
    options: o
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, l = new IntersectionObserver(function() {
    var c;
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const u = (c = e._observe) == null ? void 0 : c[t.instance.$.uid];
    if (!u)
      return;
    const d = i.some((f) => f.isIntersecting);
    r && (!n.quiet || u.init) && (!n.once || d || u.init) && r(d, i, s), d && n.once ? Ub(e, t) : u.init = !0;
  }, o);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: l
  }, l.observe(e);
}
function Ub(e, t) {
  var a;
  const n = (a = e._observe) == null ? void 0 : a[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const bV = {
  mounted: gV,
  unmounted: Ub
}, ku = bV, Ta = Fe({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), la = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: a,
    ...r
  } = e, {
    component: o = Jt,
    ...l
  } = typeof a == "object" ? a : {};
  return Xa(o, ve(typeof a == "string" ? {
    name: a
  } : l, r), n);
}, So = oe()({
  name: "VImg",
  directives: {
    intersect: ku
  },
  props: {
    aspectRatio: [String, Number],
    alt: String,
    cover: Boolean,
    eager: Boolean,
    gradient: String,
    lazySrc: String,
    options: {
      type: Object,
      // For more information on types, navigate to:
      // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      default: () => ({
        root: void 0,
        rootMargin: void 0,
        threshold: void 0
      })
    },
    sizes: String,
    src: {
      type: [String, Object],
      default: ""
    },
    srcset: String,
    width: [String, Number],
    ...Ta()
  },
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const r = R(""), o = R(), l = R(e.eager ? "loading" : "idle"), i = R(), s = R(), u = _(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), d = _(() => u.value.aspect || i.value / s.value || 0);
    pe(() => e.src, () => {
      c(l.value !== "idle");
    }), pe(d, (g, b) => {
      !g && b && o.value && x(o.value);
    }), fu(() => c());
    function c(g) {
      if (!(e.eager && g) && !(Qd && !g && !e.eager)) {
        if (l.value = "loading", u.value.lazySrc) {
          const b = new Image();
          b.src = u.value.lazySrc, x(b, null);
        }
        u.value.src && Je(() => {
          var b, w;
          if (n("loadstart", ((b = o.value) == null ? void 0 : b.currentSrc) || u.value.src), (w = o.value) != null && w.complete) {
            if (o.value.naturalWidth || v(), l.value === "error")
              return;
            d.value || x(o.value, null), f();
          } else
            d.value || x(o.value), y();
        });
      }
    }
    function f() {
      var g;
      y(), l.value = "loaded", n("load", ((g = o.value) == null ? void 0 : g.currentSrc) || u.value.src);
    }
    function v() {
      var g;
      l.value = "error", n("error", ((g = o.value) == null ? void 0 : g.currentSrc) || u.value.src);
    }
    function y() {
      const g = o.value;
      g && (r.value = g.currentSrc || g.src);
    }
    let p = -1;
    function x(g) {
      let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const w = () => {
        clearTimeout(p);
        const {
          naturalHeight: C,
          naturalWidth: T
        } = g;
        C || T ? (i.value = T, s.value = C) : !g.complete && l.value === "loading" && b != null ? p = window.setTimeout(w, b) : (g.currentSrc.endsWith(".svg") || g.currentSrc.startsWith("data:image/svg+xml")) && (i.value = 1, s.value = 1);
      };
      w();
    }
    const O = _(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), E = () => {
      var w;
      if (!u.value.src || l.value === "idle")
        return null;
      const g = m("img", {
        class: ["v-img__img", O.value],
        src: u.value.src,
        srcset: u.value.srcset,
        alt: e.alt,
        sizes: e.sizes,
        ref: o,
        onLoad: f,
        onError: v
      }, null), b = (w = a.sources) == null ? void 0 : w.call(a);
      return m(la, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [st(b ? m("picture", {
          class: "v-img__picture"
        }, [b, g]) : g, [[gn, l.value === "loaded"]])]
      });
    }, S = () => m(la, {
      transition: e.transition
    }, {
      default: () => [u.value.lazySrc && l.value !== "loaded" && m("img", {
        class: ["v-img__img", "v-img__img--preload", O.value],
        src: u.value.lazySrc,
        alt: e.alt
      }, null)]
    }), N = () => a.placeholder ? m(la, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(l.value === "loading" || l.value === "error" && !a.error) && m("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, V = () => a.error ? m(la, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [l.value === "error" && m("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, $ = () => e.gradient ? m("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, k = R(!1);
    {
      const g = pe(d, (b) => {
        b && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            k.value = !0;
          });
        }), g());
      });
    }
    return fe(() => st(m(Hb, {
      class: ["v-img", {
        "v-img--booting": !k.value
      }],
      style: {
        width: ge(e.width === "auto" ? i.value : e.width)
      },
      aspectRatio: d.value,
      "aria-label": e.alt,
      role: e.alt ? "img" : void 0
    }, {
      additional: () => m(ye, null, [m(E, null, null), m(S, null, null), m($, null, null), m(N, null, null), m(V, null, null)]),
      default: a.default
    }), [[bn("intersect"), {
      handler: c,
      options: e.options
    }, null, {
      once: !0
    }]])), {
      currentSrc: r,
      image: o,
      state: l,
      naturalWidth: i,
      naturalHeight: s
    };
  }
}), je = Fe({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), Yb = Fe({
  text: String,
  ...je()
}, "v-toolbar-title"), hv = oe()({
  name: "VToolbarTitle",
  props: Yb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return fe(() => {
      const a = !!(n.default || n.text || e.text);
      return m(e.tag, {
        class: "v-toolbar-title"
      }, {
        default: () => {
          var r;
          return [a && m("div", {
            class: "v-toolbar-title__placeholder"
          }, [n.text ? n.text() : e.text, (r = n.default) == null ? void 0 : r.call(n)])];
        }
      });
    }), {};
  }
}), Pn = Fe({
  border: [Boolean, Number, String]
}, "border");
function jn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ea();
  return {
    borderClasses: _(() => {
      const a = Ye(e) ? e.value : e.border, r = [];
      if (a === !0 || a === "")
        r.push(`${t}--border`);
      else if (typeof a == "string" || a === 0)
        for (const o of String(a).split(" "))
          r.push(`border-${o}`);
      return r;
    })
  };
}
const It = Fe({
  elevation: {
    type: [Number, String],
    validator(e) {
      const t = parseInt(e);
      return !isNaN(t) && t >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      t <= 24;
    }
  }
}, "elevation");
function zt(e) {
  return {
    elevationClasses: _(() => {
      const n = Ye(e) ? e.value : e.elevation, a = [];
      return n == null || a.push(`elevation-${n}`), a;
    })
  };
}
const ht = Fe({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  }
}, "rounded");
function kt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ea();
  return {
    roundedClasses: _(() => {
      const a = Ye(e) ? e.value : e.rounded, r = [];
      if (a === !0 || a === "")
        r.push(`${t}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const o of String(a).split(" "))
          r.push(`rounded-${o}`);
      return r;
    })
  };
}
function yv(e) {
  return zd(() => {
    const t = [], n = {};
    return e.value.background && (Rm(e.value.background) ? n.backgroundColor = e.value.background : t.push(`bg-${e.value.background}`)), e.value.text && (Rm(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function vn(e, t) {
  const n = _(() => ({
    text: Ye(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: a,
    colorStyles: r
  } = yv(n);
  return {
    textColorClasses: a,
    textColorStyles: r
  };
}
function Nt(e, t) {
  const n = _(() => ({
    background: Ye(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: a,
    colorStyles: r
  } = yv(n);
  return {
    backgroundColorClasses: a,
    backgroundColorStyles: r
  };
}
const _V = [null, "prominent", "default", "comfortable", "compact"], Wb = Fe({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => _V.includes(e)
  },
  extended: Boolean,
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...Pn(),
  ...It(),
  ...ht(),
  ...je({
    tag: "header"
  }),
  ...Ge()
}, "v-toolbar"), al = oe()({
  name: "VToolbar",
  props: Wb(),
  setup(e, t) {
    var f;
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: r
    } = Nt(ne(e, "color")), {
      borderClasses: o
    } = jn(e), {
      elevationClasses: l
    } = zt(e), {
      roundedClasses: i
    } = kt(e), {
      themeClasses: s
    } = at(e), u = R(!!(e.extended || (f = n.extension) != null && f.call(n))), d = _(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), c = _(() => u.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return Vt({
      VBtn: {
        variant: "text"
      }
    }), fe(() => {
      var x;
      const v = !!(e.title || n.title), y = !!(n.image || e.image), p = (x = n.extension) == null ? void 0 : x.call(n);
      return u.value = !!(e.extended || p), m(e.tag, {
        class: ["v-toolbar", {
          "v-toolbar--absolute": e.absolute,
          "v-toolbar--collapse": e.collapse,
          "v-toolbar--flat": e.flat,
          "v-toolbar--floating": e.floating,
          [`v-toolbar--density-${e.density}`]: !0
        }, a.value, o.value, l.value, i.value, s.value],
        style: [r.value]
      }, {
        default: () => [y && m("div", {
          key: "image",
          class: "v-toolbar__image"
        }, [n.image ? m(lt, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, n.image) : m(So, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), m(lt, {
          defaults: {
            VTabs: {
              height: ge(d.value)
            }
          }
        }, {
          default: () => {
            var O, E, S;
            return [m("div", {
              class: "v-toolbar__content",
              style: {
                height: ge(d.value)
              }
            }, [n.prepend && m("div", {
              class: "v-toolbar__prepend"
            }, [(O = n.prepend) == null ? void 0 : O.call(n)]), v && m(hv, {
              key: "title",
              text: e.title
            }, {
              text: n.title
            }), (E = n.default) == null ? void 0 : E.call(n), n.append && m("div", {
              class: "v-toolbar__append"
            }, [(S = n.append) == null ? void 0 : S.call(n)])])];
          }
        }), m(lt, {
          defaults: {
            VTabs: {
              height: ge(c.value)
            }
          }
        }, {
          default: () => [m(Su, null, {
            default: () => [u.value && m("div", {
              class: "v-toolbar__extension",
              style: {
                height: ge(c.value)
              }
            }, [p])]
          })]
        })]
      });
    }), {
      contentHeight: d,
      extensionHeight: c
    };
  }
});
function wV(e) {
  return wn(e, Object.keys((al == null ? void 0 : al.props) ?? {}));
}
function ko() {
  const e = R(!1);
  return ft(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: _(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: Ol(e)
  };
}
const SV = oe()({
  name: "VAppBar",
  props: {
    // TODO: Implement scrolling techniques
    // hideOnScroll: Boolean
    // invertedScroll: Boolean
    // collapseOnScroll: Boolean
    // elevateOnScroll: Boolean
    // shrinkOnScroll: Boolean
    // fadeImageOnScroll: Boolean
    modelValue: {
      type: Boolean,
      default: !0
    },
    location: {
      type: String,
      default: "top",
      validator: (e) => ["top", "bottom"].includes(e)
    },
    ...Wb(),
    ..._o(),
    height: {
      type: [Number, String],
      default: 64
    }
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = R(), r = He(e, "modelValue"), o = _(() => {
      var d, c;
      const s = ((d = a.value) == null ? void 0 : d.contentHeight) ?? 0, u = ((c = a.value) == null ? void 0 : c.extensionHeight) ?? 0;
      return s + u;
    }), {
      ssrBootStyles: l
    } = ko(), {
      layoutItemStyles: i
    } = wo({
      id: e.name,
      order: _(() => parseInt(e.order, 10)),
      position: ne(e, "location"),
      layoutSize: o,
      elementSize: o,
      active: r,
      absolute: ne(e, "absolute")
    });
    return fe(() => {
      const [s] = wV(e);
      return m(al, ve({
        ref: a,
        class: ["v-app-bar", {
          "v-app-bar--bottom": e.location === "bottom"
        }],
        style: {
          ...i.value,
          height: void 0,
          ...l.value
        }
      }, s), n);
    }), {};
  }
});
const kV = [null, "default", "comfortable", "compact"], Ft = Fe({
  density: {
    type: String,
    default: "default",
    validator: (e) => kV.includes(e)
  }
}, "density");
function an(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ea();
  return {
    densityClasses: _(() => `${t}--density-${e.density}`)
  };
}
const xV = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Rr(e, t) {
  return m(ye, null, [e && m("span", {
    key: "overlay",
    class: `${t}__overlay`
  }, null), m("span", {
    key: "underlay",
    class: `${t}__underlay`
  }, null)]);
}
const Hn = Fe({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => xV.includes(e)
  }
}, "variant");
function Br(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ea();
  const n = _(() => {
    const {
      variant: o
    } = M(e);
    return `${t}--variant-${o}`;
  }), {
    colorClasses: a,
    colorStyles: r
  } = yv(_(() => {
    const {
      variant: o,
      color: l
    } = M(e);
    return {
      [["elevated", "flat"].includes(o) ? "background" : "text"]: l
    };
  }));
  return {
    colorClasses: a,
    colorStyles: r,
    variantClasses: n
  };
}
const zb = Fe({
  divided: Boolean,
  ...Pn(),
  ...Ft(),
  ...It(),
  ...ht(),
  ...je(),
  ...Ge(),
  ...Hn()
}, "v-btn-group"), pv = oe()({
  name: "VBtnGroup",
  props: zb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = at(e), {
      densityClasses: r
    } = an(e), {
      borderClasses: o
    } = jn(e), {
      elevationClasses: l
    } = zt(e), {
      roundedClasses: i
    } = kt(e);
    Vt({
      VBtn: {
        height: "auto",
        color: ne(e, "color"),
        density: ne(e, "density"),
        flat: !0,
        variant: ne(e, "variant")
      }
    }), fe(() => m(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, a.value, o.value, r.value, l.value, i.value]
    }, n));
  }
});
function OV(e) {
  return wn(e, Object.keys(pv.props));
}
const xo = Fe({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), Fr = Fe({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function Oo(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = tn("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const r = nn();
  Bt(Symbol.for(`${t.description}:id`), r);
  const o = nt(t, null);
  if (!o) {
    if (!n)
      return o;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const l = ne(e, "value"), i = _(() => o.disabled.value || e.disabled);
  o.register({
    id: r,
    value: l,
    disabled: i
  }, a), _n(() => {
    o.unregister(r);
  });
  const s = _(() => o.isSelected(r)), u = _(() => s.value && [o.selectedClass.value, e.selectedClass]);
  return pe(s, (d) => {
    a.emit("group:selected", {
      value: d
    });
  }), {
    id: r,
    isSelected: s,
    toggle: () => o.select(r, !s.value),
    select: (d) => o.select(r, d),
    selectedClass: u,
    value: l,
    disabled: i,
    group: o
  };
}
function Lr(e, t) {
  let n = !1;
  const a = Ct([]), r = He(e, "modelValue", [], (f) => f == null ? [] : qb(a, Rn(f)), (f) => {
    const v = EV(a, f);
    return e.multiple ? v : v[0];
  }), o = tn("useGroup");
  function l(f, v) {
    const y = f, p = Symbol.for(`${t.description}:id`), O = Zo(p, o == null ? void 0 : o.vnode).indexOf(v);
    O > -1 ? a.splice(O, 0, y) : a.push(y);
  }
  function i(f) {
    if (n)
      return;
    s();
    const v = a.findIndex((y) => y.id === f);
    a.splice(v, 1);
  }
  function s() {
    const f = a.find((v) => !v.disabled);
    f && e.mandatory === "force" && !r.value.length && (r.value = [f.id]);
  }
  ft(() => {
    s();
  }), _n(() => {
    n = !0;
  });
  function u(f, v) {
    const y = a.find((p) => p.id === f);
    if (!(v && (y != null && y.disabled)))
      if (e.multiple) {
        const p = r.value.slice(), x = p.findIndex((E) => E === f), O = ~x;
        if (v = v ?? !O, O && e.mandatory && p.length <= 1 || !O && e.max != null && p.length + 1 > e.max)
          return;
        x < 0 && v ? p.push(f) : x >= 0 && !v && p.splice(x, 1), r.value = p;
      } else {
        const p = r.value.includes(f);
        if (e.mandatory && p)
          return;
        r.value = v ?? !p ? [f] : [];
      }
  }
  function d(f) {
    if (e.multiple && Cr('This method is not supported when using "multiple" prop'), r.value.length) {
      const v = r.value[0], y = a.findIndex((O) => O.id === v);
      let p = (y + f) % a.length, x = a[p];
      for (; x.disabled && p !== y; )
        p = (p + f) % a.length, x = a[p];
      if (x.disabled)
        return;
      r.value = [a[p].id];
    } else {
      const v = a.find((y) => !y.disabled);
      v && (r.value = [v.id]);
    }
  }
  const c = {
    register: l,
    unregister: i,
    selected: r,
    select: u,
    disabled: ne(e, "disabled"),
    prev: () => d(a.length - 1),
    next: () => d(1),
    isSelected: (f) => r.value.includes(f),
    selectedClass: _(() => e.selectedClass),
    items: _(() => a),
    getItemIndex: (f) => CV(a, f)
  };
  return Bt(t, c), c;
}
function CV(e, t) {
  const n = qb(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function qb(e, t) {
  const n = [];
  for (let a = 0; a < e.length; a++) {
    const r = e[a];
    r.value != null ? t.find((o) => bo(o, r.value)) != null && n.push(r.id) : t.includes(a) && n.push(r.id);
  }
  return n;
}
function EV(e, t) {
  const n = [];
  for (let a = 0; a < e.length; a++) {
    const r = e[a];
    t.includes(r.id) && n.push(r.value != null ? r.value : a);
  }
  return n;
}
const gv = Symbol.for("vuetify:v-btn-toggle"), $V = oe()({
  name: "VBtnToggle",
  props: {
    ...zb(),
    ...xo()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isSelected: a,
      next: r,
      prev: o,
      select: l,
      selected: i
    } = Lr(e, gv);
    return fe(() => {
      const [s] = OV(e);
      return m(pv, ve({
        class: "v-btn-toggle"
      }, s), {
        default: () => {
          var u;
          return [(u = n.default) == null ? void 0 : u.call(n, {
            isSelected: a,
            next: r,
            prev: o,
            select: l,
            selected: i
          })];
        }
      });
    }), {
      next: r,
      prev: o,
      select: l
    };
  }
});
const PV = ["x-small", "small", "default", "large", "x-large"], Na = Fe({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Co(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ea();
  return zd(() => {
    let n, a;
    return is(PV, e.size) ? n = `${t}--size-${e.size}` : e.size && (a = {
      width: ge(e.size),
      height: ge(e.size)
    }), {
      sizeClasses: n,
      sizeStyles: a
    };
  });
}
const TV = Fe({
  color: String,
  start: Boolean,
  end: Boolean,
  icon: Me,
  ...Na(),
  ...je({
    tag: "i"
  }),
  ...Ge()
}, "v-icon"), Pt = oe()({
  name: "VIcon",
  props: TV(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t, r;
    a.default && (r = _(() => {
      var c, f;
      const d = (c = a.default) == null ? void 0 : c.call(a);
      if (d)
        return (f = d.filter((v) => v.type === ho && v.children && typeof v.children == "string")[0]) == null ? void 0 : f.children;
    }));
    const {
      themeClasses: o
    } = at(e), {
      iconData: l
    } = bx(r || e), {
      sizeClasses: i
    } = Co(e), {
      textColorClasses: s,
      textColorStyles: u
    } = vn(ne(e, "color"));
    return fe(() => m(l.value.component, {
      tag: e.tag,
      icon: l.value.icon,
      class: ["v-icon", "notranslate", o.value, i.value, s.value, {
        "v-icon--clickable": !!n.onClick,
        "v-icon--start": e.start,
        "v-icon--end": e.end
      }],
      style: [i.value ? void 0 : {
        fontSize: ge(e.size),
        height: ge(e.size),
        width: ge(e.size)
      }, u.value],
      role: n.onClick ? "button" : void 0,
      "aria-hidden": !n.onClick
    }, {
      default: () => {
        var d;
        return [(d = a.default) == null ? void 0 : d.call(a)];
      }
    })), {};
  }
});
function bv(e) {
  const t = R(), n = R(!1);
  if (Qd) {
    const a = new IntersectionObserver((r) => {
      e == null || e(r, a), n.value = !!r.find((o) => o.isIntersecting);
    });
    _n(() => {
      a.disconnect();
    }), pe(t, (r, o) => {
      o && (a.unobserve(o), n.value = !1), r && a.observe(r);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: t,
    isIntersecting: n
  };
}
const _v = oe()({
  name: "VProgressCircular",
  props: {
    bgColor: String,
    color: String,
    indeterminate: [Boolean, String],
    modelValue: {
      type: [Number, String],
      default: 0
    },
    rotate: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 4
    },
    ...Na(),
    ...je({
      tag: "div"
    }),
    ...Ge()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = 20, r = 2 * Math.PI * a, o = R(), {
      themeClasses: l
    } = at(e), {
      sizeClasses: i,
      sizeStyles: s
    } = Co(e), {
      textColorClasses: u,
      textColorStyles: d
    } = vn(ne(e, "color")), {
      textColorClasses: c,
      textColorStyles: f
    } = vn(ne(e, "bgColor")), {
      intersectionRef: v,
      isIntersecting: y
    } = bv(), {
      resizeRef: p,
      contentRect: x
    } = qa(), O = _(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), E = _(() => Number(e.width)), S = _(() => s.value ? Number(e.size) : x.value ? x.value.width : Math.max(E.value, 32)), N = _(() => a / (1 - E.value / S.value) * 2), V = _(() => E.value / S.value * N.value), $ = _(() => ge((100 - O.value) / 100 * r));
    return ca(() => {
      v.value = o.value, p.value = o.value;
    }), fe(() => m(e.tag, {
      ref: o,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": y.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, l.value, i.value, u.value],
      style: [s.value, d.value],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : O.value
    }, {
      default: () => [m("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${N.value} ${N.value}`
      }, [m("circle", {
        class: ["v-progress-circular__underlay", c.value],
        style: f.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": V.value,
        "stroke-dasharray": r,
        "stroke-dashoffset": 0
      }, null), m("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": V.value,
        "stroke-dasharray": r,
        "stroke-dashoffset": $.value
      }, null)]), n.default && m("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: O.value
      })])]
    })), {};
  }
});
const ud = Symbol("rippleStop"), NV = 80;
function Vy(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function cd(e) {
  return e.constructor.name === "TouchEvent";
}
function Gb(e) {
  return e.constructor.name === "KeyboardEvent";
}
const DV = function(e, t) {
  var c;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, r = 0;
  if (!Gb(e)) {
    const f = t.getBoundingClientRect(), v = cd(e) ? e.touches[e.touches.length - 1] : e;
    a = v.clientX - f.left, r = v.clientY - f.top;
  }
  let o = 0, l = 0.3;
  (c = t._ripple) != null && c.circle ? (l = 0.15, o = t.clientWidth / 2, o = n.center ? o : o + Math.sqrt((a - o) ** 2 + (r - o) ** 2) / 4) : o = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const i = `${(t.clientWidth - o * 2) / 2}px`, s = `${(t.clientHeight - o * 2) / 2}px`, u = n.center ? i : `${a - o}px`, d = n.center ? s : `${r - o}px`;
  return {
    radius: o,
    scale: l,
    x: u,
    y: d,
    centerX: i,
    centerY: s
  };
}, Js = {
  /* eslint-disable max-statements */
  show(e, t) {
    var v;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((v = t == null ? void 0 : t._ripple) != null && v.enabled))
      return;
    const a = document.createElement("span"), r = document.createElement("span");
    a.appendChild(r), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
    const {
      radius: o,
      scale: l,
      x: i,
      y: s,
      centerX: u,
      centerY: d
    } = DV(e, t, n), c = `${o * 2}px`;
    r.className = "v-ripple__animation", r.style.width = c, r.style.height = c, t.appendChild(a);
    const f = window.getComputedStyle(t);
    f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), r.classList.add("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--visible"), Vy(r, `translate(${i}, ${s}) scale3d(${l},${l},${l})`), r.dataset.activated = String(performance.now()), setTimeout(() => {
      r.classList.remove("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--in"), Vy(r, `translate(${u}, ${d}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(e) {
    var o;
    if (!((o = e == null ? void 0 : e._ripple) != null && o.enabled))
      return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0)
      return;
    const n = t[t.length - 1];
    if (n.dataset.isHiding)
      return;
    n.dataset.isHiding = "true";
    const a = performance.now() - Number(n.dataset.activated), r = Math.max(250 - a, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var i;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((i = n.parentNode) == null ? void 0 : i.parentNode) === e && e.removeChild(n.parentNode);
      }, 300);
    }, r);
  }
};
function Kb(e) {
  return typeof e > "u" || !!e;
}
function bl(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[ud])) {
    if (e[ud] = !0, cd(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch)
      return;
    if (t.center = n._ripple.centered || Gb(e), n._ripple.class && (t.class = n._ripple.class), cd(e)) {
      if (n._ripple.showTimerCommit)
        return;
      n._ripple.showTimerCommit = () => {
        Js.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var a;
        (a = n == null ? void 0 : n._ripple) != null && a.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, NV);
    } else
      Js.show(e, n, t);
  }
}
function Iy(e) {
  e[ud] = !0;
}
function kn(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        kn(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), Js.hide(t);
  }
}
function Xb(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let _l = !1;
function Qb(e) {
  !_l && (e.keyCode === Tm.enter || e.keyCode === Tm.space) && (_l = !0, bl(e));
}
function Zb(e) {
  _l = !1, kn(e);
}
function Jb(e) {
  _l && (_l = !1, kn(e));
}
function e0(e, t, n) {
  const {
    value: a,
    modifiers: r
  } = t, o = Kb(a);
  if (o || Js.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = o, e._ripple.centered = r.center, e._ripple.circle = r.circle, Bc(a) && a.class && (e._ripple.class = a.class), o && !n) {
    if (r.stop) {
      e.addEventListener("touchstart", Iy, {
        passive: !0
      }), e.addEventListener("mousedown", Iy);
      return;
    }
    e.addEventListener("touchstart", bl, {
      passive: !0
    }), e.addEventListener("touchend", kn, {
      passive: !0
    }), e.addEventListener("touchmove", Xb, {
      passive: !0
    }), e.addEventListener("touchcancel", kn), e.addEventListener("mousedown", bl), e.addEventListener("mouseup", kn), e.addEventListener("mouseleave", kn), e.addEventListener("keydown", Qb), e.addEventListener("keyup", Zb), e.addEventListener("blur", Jb), e.addEventListener("dragstart", kn, {
      passive: !0
    });
  } else
    !o && n && t0(e);
}
function t0(e) {
  e.removeEventListener("mousedown", bl), e.removeEventListener("touchstart", bl), e.removeEventListener("touchend", kn), e.removeEventListener("touchmove", Xb), e.removeEventListener("touchcancel", kn), e.removeEventListener("mouseup", kn), e.removeEventListener("mouseleave", kn), e.removeEventListener("keydown", Qb), e.removeEventListener("keyup", Zb), e.removeEventListener("dragstart", kn), e.removeEventListener("blur", Jb);
}
function VV(e, t) {
  e0(e, t, !1);
}
function IV(e) {
  delete e._ripple, t0(e);
}
function AV(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = Kb(t.oldValue);
  e0(e, t, n);
}
const jr = {
  mounted: VV,
  unmounted: IV,
  updated: AV
};
const Ay = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Ja = Fe({
  location: String
}, "location");
function er(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = Pa();
  return {
    locationStyles: _(() => {
      if (!e.location)
        return {};
      const {
        side: o,
        align: l
      } = Lc(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function i(u) {
        return n ? n(u) : 0;
      }
      const s = {};
      return o !== "center" && (t ? s[Ay[o]] = `calc(100% - ${i(o)}px)` : s[o] = 0), l !== "center" ? t ? s[Ay[l]] = `calc(100% - ${i(l)}px)` : s[l] = 0 : (o === "center" ? s.top = s.left = "50%" : s[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[o]] = "50%", s.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[o]), s;
    })
  };
}
const wv = oe()({
  name: "VProgressLinear",
  props: {
    absolute: Boolean,
    active: {
      type: Boolean,
      default: !0
    },
    bgColor: String,
    bgOpacity: [Number, String],
    bufferValue: {
      type: [Number, String],
      default: 0
    },
    clickable: Boolean,
    color: String,
    height: {
      type: [Number, String],
      default: 4
    },
    indeterminate: Boolean,
    max: {
      type: [Number, String],
      default: 100
    },
    modelValue: {
      type: [Number, String],
      default: 0
    },
    reverse: Boolean,
    stream: Boolean,
    striped: Boolean,
    roundedBar: Boolean,
    ...Ja({
      location: "top"
    }),
    ...ht(),
    ...je(),
    ...Ge()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = He(e, "modelValue"), {
      isRtl: r
    } = Pa(), {
      themeClasses: o
    } = at(e), {
      locationStyles: l
    } = er(e), {
      textColorClasses: i,
      textColorStyles: s
    } = vn(e, "color"), {
      backgroundColorClasses: u,
      backgroundColorStyles: d
    } = Nt(_(() => e.bgColor || e.color)), {
      backgroundColorClasses: c,
      backgroundColorStyles: f
    } = Nt(e, "color"), {
      roundedClasses: v
    } = kt(e), {
      intersectionRef: y,
      isIntersecting: p
    } = bv(), x = _(() => parseInt(e.max, 10)), O = _(() => parseInt(e.height, 10)), E = _(() => parseFloat(e.bufferValue) / x.value * 100), S = _(() => parseFloat(a.value) / x.value * 100), N = _(() => r.value !== e.reverse), V = _(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), $ = _(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
    function k(g) {
      if (!y.value)
        return;
      const {
        left: b,
        right: w,
        width: C
      } = y.value.getBoundingClientRect(), T = N.value ? C - g.clientX + (w - C) : g.clientX - b;
      a.value = Math.round(T / C * x.value);
    }
    return fe(() => m(e.tag, {
      ref: y,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && p.value,
        "v-progress-linear--reverse": N.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, v.value, o.value],
      style: {
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? ge(O.value) : 0,
        "--v-progress-linear-height": ge(O.value),
        ...l.value
      },
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : S.value,
      onClick: e.clickable && k
    }, {
      default: () => [e.stream && m("div", {
        key: "stream",
        class: ["v-progress-linear__stream", i.value],
        style: {
          ...s.value,
          [N.value ? "left" : "right"]: ge(-O.value),
          borderTop: `${ge(O.value / 2)} dotted`,
          opacity: $.value,
          top: `calc(50% - ${ge(O.value / 4)})`,
          width: ge(100 - E.value, "%"),
          "--v-progress-linear-stream-to": ge(O.value * (N.value ? 1 : -1))
        }
      }, null), m("div", {
        class: ["v-progress-linear__background", u.value],
        style: [d.value, {
          opacity: $.value,
          width: ge(e.stream ? E.value : 100, "%")
        }]
      }, null), m(Jt, {
        name: V.value
      }, {
        default: () => [e.indeterminate ? m("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((g) => m("div", {
          key: g,
          class: ["v-progress-linear__indeterminate", g, c.value],
          style: f.value
        }, null))]) : m("div", {
          class: ["v-progress-linear__determinate", c.value],
          style: [f.value, {
            width: ge(S.value, "%")
          }]
        }, null)]
      }), n.default && m("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: S.value,
        buffer: E.value
      })])]
    })), {};
  }
}), Sv = Fe({
  loading: [Boolean, String]
}, "loader");
function xu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ea();
  return {
    loaderClasses: _(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function kv(e, t) {
  var a;
  let {
    slots: n
  } = t;
  return m("div", {
    class: `${e.name}__loader`
  }, [((a = n.default) == null ? void 0 : a.call(n, {
    color: e.color,
    isActive: e.active
  })) || m(wv, {
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const MV = ["static", "relative", "fixed", "absolute", "sticky"], Eo = Fe({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => MV.includes(e)
    )
  }
}, "position");
function $o(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ea();
  return {
    positionClasses: _(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function n0() {
  var e, t;
  return (t = (e = tn("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : t.$router;
}
function Pl(e, t) {
  const n = Md("RouterLink"), a = _(() => !!(e.href || e.to)), r = _(() => (a == null ? void 0 : a.value) || Vm(t, "click") || Vm(e, "click"));
  if (typeof n == "string")
    return {
      isLink: a,
      isClickable: r,
      href: ne(e, "href")
    };
  const o = e.to ? n.useLink(e) : void 0;
  return {
    isLink: a,
    isClickable: r,
    route: o == null ? void 0 : o.route,
    navigate: o == null ? void 0 : o.navigate,
    isActive: o && _(() => {
      var l, i;
      return e.exact ? (l = o.isExactActive) == null ? void 0 : l.value : (i = o.isActive) == null ? void 0 : i.value;
    }),
    href: _(() => e.to ? o == null ? void 0 : o.route.value.href : e.href)
  };
}
const Po = Fe({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let cc = !1;
function RV(e, t) {
  let n = !1, a, r;
  Tt && (Je(() => {
    window.addEventListener("popstate", o), a = e == null ? void 0 : e.beforeEach((l, i, s) => {
      cc ? n ? t(s) : s() : setTimeout(() => n ? t(s) : s()), cc = !0;
    }), r = e == null ? void 0 : e.afterEach(() => {
      cc = !1;
    });
  }), fn(() => {
    window.removeEventListener("popstate", o), a == null || a(), r == null || r();
  }));
  function o(l) {
    var i;
    (i = l.state) != null && i.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
function BV(e, t) {
  pe(() => {
    var n;
    return (n = e.isActive) == null ? void 0 : n.value;
  }, (n) => {
    e.isLink.value && n && t && Je(() => {
      t(!0);
    });
  }, {
    immediate: !0
  });
}
const pn = oe()({
  name: "VBtn",
  directives: {
    Ripple: jr
  },
  props: {
    active: {
      type: Boolean,
      default: void 0
    },
    symbol: {
      type: null,
      default: gv
    },
    flat: Boolean,
    icon: [Boolean, String, Function, Object],
    prependIcon: Me,
    appendIcon: Me,
    block: Boolean,
    stacked: Boolean,
    ripple: {
      type: Boolean,
      default: !0
    },
    ...Pn(),
    ...ht(),
    ...Ft(),
    ...Kn(),
    ...It(),
    ...Fr(),
    ...Sv(),
    ...Ja(),
    ...Eo(),
    ...Po(),
    ...Na(),
    ...je({
      tag: "button"
    }),
    ...Ge(),
    ...Hn({
      variant: "elevated"
    })
  },
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: r
    } = at(e), {
      borderClasses: o
    } = jn(e), {
      colorClasses: l,
      colorStyles: i,
      variantClasses: s
    } = Br(e), {
      densityClasses: u
    } = an(e), {
      dimensionStyles: d
    } = Xn(e), {
      elevationClasses: c
    } = zt(e), {
      loaderClasses: f
    } = xu(e), {
      locationStyles: v
    } = er(e), {
      positionClasses: y
    } = $o(e), {
      roundedClasses: p
    } = kt(e), {
      sizeClasses: x,
      sizeStyles: O
    } = Co(e), E = Oo(e, e.symbol, !1), S = Pl(e, n), N = _(() => {
      var g;
      return e.active !== void 0 ? e.active : S.isLink.value ? (g = S.isActive) == null ? void 0 : g.value : E == null ? void 0 : E.isSelected.value;
    }), V = _(() => (E == null ? void 0 : E.disabled.value) || e.disabled), $ = _(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), k = _(() => {
      if (e.value !== void 0)
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    return BV(S, E == null ? void 0 : E.select), fe(() => {
      var A, z;
      const g = S.isLink.value ? "a" : e.tag, b = !!(e.prependIcon || a.prepend), w = !!(e.appendIcon || a.append), C = !!(e.icon && e.icon !== !0), T = (E == null ? void 0 : E.isSelected.value) && (!S.isLink.value || ((A = S.isActive) == null ? void 0 : A.value)) || !E || ((z = S.isActive) == null ? void 0 : z.value);
      return st(m(g, {
        type: g === "a" ? void 0 : "button",
        class: ["v-btn", E == null ? void 0 : E.selectedClass.value, {
          "v-btn--active": N.value,
          "v-btn--block": e.block,
          "v-btn--disabled": V.value,
          "v-btn--elevated": $.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--stacked": e.stacked
        }, r.value, o.value, T ? l.value : void 0, u.value, c.value, f.value, y.value, p.value, x.value, s.value],
        style: [T ? i.value : void 0, d.value, v.value, O.value],
        disabled: V.value || void 0,
        href: S.href.value,
        onClick: (U) => {
          var B;
          V.value || ((B = S.navigate) == null || B.call(S, U), E == null || E.toggle());
        },
        value: k.value
      }, {
        default: () => {
          var U;
          return [Rr(!0, "v-btn"), !e.icon && b && m("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [a.prepend ? m(lt, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, a.prepend) : m(Pt, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), m("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!a.default && C ? m(Pt, {
            key: "content-icon",
            icon: e.icon
          }, null) : m(lt, {
            key: "content-defaults",
            disabled: !C,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, a.default)]), !e.icon && w && m("span", {
            key: "append",
            class: "v-btn__append"
          }, [a.append ? m(lt, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, a.append) : m(Pt, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && m("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((U = a.loader) == null ? void 0 : U.call(a)) ?? m(_v, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            size: "23",
            width: "2"
          }, null)])];
        }
      }), [[bn("ripple"), !V.value && e.ripple, null]]);
    }), {};
  }
}), FV = oe()({
  name: "VAppBarNavIcon",
  props: {
    icon: {
      type: Me,
      default: "$menu"
    }
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return fe(() => m(pn, {
      class: "v-app-bar-nav-icon",
      icon: e.icon
    }, n)), {};
  }
}), LV = oe()({
  name: "VToolbarItems",
  props: Hn({
    variant: "text"
  }),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Vt({
      VBtn: {
        color: ne(e, "color"),
        height: "inherit",
        variant: ne(e, "variant")
      }
    }), fe(() => {
      var a;
      return m("div", {
        class: "v-toolbar-items"
      }, [(a = n.default) == null ? void 0 : a.call(n)]);
    }), {};
  }
}), jV = oe()({
  name: "VAppBarTitle",
  props: Yb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return fe(() => m(hv, ve(e, {
      class: "v-app-bar-title"
    }), n)), {};
  }
});
const a0 = Gn("v-alert-title"), HV = ["success", "info", "warning", "error"], UV = oe()({
  name: "VAlert",
  props: {
    border: {
      type: [Boolean, String],
      validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e)
    },
    borderColor: String,
    closable: Boolean,
    closeIcon: {
      type: Me,
      default: "$close"
    },
    closeLabel: {
      type: String,
      default: "$vuetify.close"
    },
    icon: {
      type: [Boolean, String, Function, Object],
      default: null
    },
    modelValue: {
      type: Boolean,
      default: !0
    },
    prominent: Boolean,
    title: String,
    text: String,
    type: {
      type: String,
      validator: (e) => HV.includes(e)
    },
    ...Ft(),
    ...Kn(),
    ...It(),
    ...Ja(),
    ...Eo(),
    ...ht(),
    ...je(),
    ...Ge(),
    ...Hn({
      variant: "flat"
    })
  },
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const r = He(e, "modelValue"), o = _(() => {
      if (e.icon !== !1)
        return e.type ? e.icon ?? `$${e.type}` : e.icon;
    }), l = _(() => ({
      color: e.color ?? e.type,
      variant: e.variant
    })), {
      themeClasses: i
    } = at(e), {
      colorClasses: s,
      colorStyles: u,
      variantClasses: d
    } = Br(l), {
      densityClasses: c
    } = an(e), {
      dimensionStyles: f
    } = Xn(e), {
      elevationClasses: v
    } = zt(e), {
      locationStyles: y
    } = er(e), {
      positionClasses: p
    } = $o(e), {
      roundedClasses: x
    } = kt(e), {
      textColorClasses: O,
      textColorStyles: E
    } = vn(ne(e, "borderColor")), {
      t: S
    } = Ln(), N = _(() => ({
      "aria-label": S(e.closeLabel),
      onClick(V) {
        r.value = !1, n("click:close", V);
      }
    }));
    return () => {
      const V = !!(a.prepend || o.value), $ = !!(a.title || e.title), k = !!(e.text || a.text), g = !!(a.close || e.closable);
      return r.value && m(e.tag, {
        class: ["v-alert", e.border && {
          "v-alert--border": !!e.border,
          [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
        }, {
          "v-alert--prominent": e.prominent
        }, i.value, s.value, c.value, v.value, p.value, x.value, d.value],
        style: [u.value, f.value, y.value],
        role: "alert"
      }, {
        default: () => {
          var b, w;
          return [Rr(!1, "v-alert"), e.border && m("div", {
            key: "border",
            class: ["v-alert__border", O.value],
            style: E.value
          }, null), V && m("div", {
            key: "prepend",
            class: "v-alert__prepend"
          }, [a.prepend ? m(lt, {
            key: "prepend-defaults",
            disabled: !o.value,
            defaults: {
              VIcon: {
                density: e.density,
                icon: o.value,
                size: e.prominent ? 44 : 28
              }
            }
          }, a.prepend) : m(Pt, {
            key: "prepend-icon",
            density: e.density,
            icon: o.value,
            size: e.prominent ? 44 : 28
          }, null)]), m("div", {
            class: "v-alert__content"
          }, [$ && m(a0, {
            key: "title"
          }, {
            default: () => {
              var C;
              return [((C = a.title) == null ? void 0 : C.call(a)) ?? e.title];
            }
          }), k && (((b = a.text) == null ? void 0 : b.call(a)) ?? e.text), (w = a.default) == null ? void 0 : w.call(a)]), a.append && m("div", {
            key: "append",
            class: "v-alert__append"
          }, [a.append()]), g && m("div", {
            key: "close",
            class: "v-alert__close"
          }, [a.close ? m(lt, {
            key: "close-defaults",
            defaults: {
              VBtn: {
                icon: e.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var C;
              return [(C = a.close) == null ? void 0 : C.call(a, {
                props: N.value
              })];
            }
          }) : m(pn, ve({
            key: "close-btn",
            icon: e.closeIcon,
            size: "x-small",
            variant: "text"
          }, N.value), null)])];
        }
      });
    };
  }
});
function r0(e) {
  const {
    t
  } = Ln();
  function n(a) {
    let {
      name: r
    } = a;
    const o = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[r], l = e[`onClick:${r}`], i = l && o ? t(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return m(Pt, {
      icon: e[`${r}Icon`],
      "aria-label": i,
      onClick: l
    }, null);
  }
  return {
    InputIcon: n
  };
}
const To = oe()({
  name: "VLabel",
  props: {
    text: String,
    clickable: Boolean,
    ...Ge()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return fe(() => {
      var a;
      return m("label", {
        class: ["v-label", {
          "v-label--clickable": e.clickable
        }]
      }, [e.text, (a = n.default) == null ? void 0 : a.call(n)]);
    }), {};
  }
}), zo = oe()({
  name: "VFieldLabel",
  props: {
    floating: Boolean
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return fe(() => m(To, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }],
      "aria-hidden": e.floating || void 0
    }, n)), {};
  }
}), Ou = Fe({
  focused: Boolean
}, "focus");
function Hr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ea();
  const n = He(e, "focused"), a = _(() => ({
    [`${t}--focused`]: n.value
  }));
  function r() {
    n.value = !0;
  }
  function o() {
    n.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: n,
    focus: r,
    blur: o
  };
}
const YV = ["underlined", "outlined", "filled", "solo", "plain"], Cu = Fe({
  appendInnerIcon: Me,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: Me,
    default: "$clear"
  },
  active: Boolean,
  color: String,
  dirty: Boolean,
  disabled: Boolean,
  error: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: Me,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => YV.includes(e)
  },
  "onClick:clear": wa,
  "onClick:appendInner": wa,
  "onClick:prependInner": wa,
  ...Ge(),
  ...Sv()
}, "v-field"), Tl = oe()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...Ou(),
    ...Cu()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: r
    } = t;
    const {
      themeClasses: o
    } = at(e), {
      loaderClasses: l
    } = xu(e), {
      focusClasses: i,
      isFocused: s,
      focus: u,
      blur: d
    } = Hr(e), {
      InputIcon: c
    } = r0(e), f = _(() => e.dirty || e.active), v = _(() => !e.singleLine && !!(e.label || r.label)), y = nn(), p = _(() => e.id || `input-${y}`), x = _(() => `${p.value}-messages`), O = R(), E = R(), S = R(), {
      backgroundColorClasses: N,
      backgroundColorStyles: V
    } = Nt(ne(e, "bgColor")), {
      textColorClasses: $,
      textColorStyles: k
    } = vn(_(() => f.value && s.value && !e.error && !e.disabled ? e.color : void 0));
    pe(f, (w) => {
      if (v.value) {
        const C = O.value.$el, T = E.value.$el;
        requestAnimationFrame(() => {
          const A = qd(C), z = T.getBoundingClientRect(), U = z.x - A.x, B = z.y - A.y - (A.height / 2 - z.height / 2), h = z.width / 0.75, P = Math.abs(h - A.width) > 1 ? {
            maxWidth: ge(h)
          } : void 0, W = getComputedStyle(C), H = getComputedStyle(T), j = parseFloat(W.transitionDuration) * 1e3 || 150, X = parseFloat(H.getPropertyValue("--v-field-label-scale")), Q = H.getPropertyValue("color");
          C.style.visibility = "visible", T.style.visibility = "hidden", yr(C, {
            transform: `translate(${U}px, ${B}px) scale(${X})`,
            color: Q,
            ...P
          }, {
            duration: j,
            easing: yl,
            direction: w ? "normal" : "reverse"
          }).finished.then(() => {
            C.style.removeProperty("visibility"), T.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const g = _(() => ({
      isActive: f,
      isFocused: s,
      controlRef: S,
      blur: d,
      focus: u
    }));
    function b(w) {
      w.target !== document.activeElement && w.preventDefault();
    }
    return fe(() => {
      var U, B, h;
      const w = e.variant === "outlined", C = r["prepend-inner"] || e.prependInnerIcon, T = !!(e.clearable || r.clear), A = !!(r["append-inner"] || e.appendInnerIcon || T), z = r.label ? r.label({
        label: e.label,
        props: {
          for: p.value
        }
      }) : e.label;
      return m("div", ve({
        class: ["v-field", {
          "v-field--active": f.value,
          "v-field--appended": A,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": C,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !z,
          [`v-field--variant-${e.variant}`]: !0
        }, o.value, N.value, i.value, l.value],
        style: [V.value, k.value],
        onClick: b
      }, n), [m("div", {
        class: "v-field__overlay"
      }, null), m(kv, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : e.color
      }, {
        default: r.loader
      }), C && m("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && m(c, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (U = r["prepend-inner"]) == null ? void 0 : U.call(r, g.value)]), m("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["solo", "filled"].includes(e.variant) && v.value && m(zo, {
        key: "floating-label",
        ref: E,
        class: [$.value],
        floating: !0,
        for: p.value
      }, {
        default: () => [z]
      }), m(zo, {
        ref: O,
        for: p.value
      }, {
        default: () => [z]
      }), (B = r.default) == null ? void 0 : B.call(r, {
        ...g.value,
        props: {
          id: p.value,
          class: "v-field__input",
          "aria-describedby": x.value
        },
        focus: u,
        blur: d
      })]), T && m(mv, {
        key: "clear"
      }, {
        default: () => [st(m("div", {
          class: "v-field__clearable"
        }, [r.clear ? r.clear() : m(c, {
          name: "clear"
        }, null)]), [[gn, e.dirty]])]
      }), A && m("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(h = r["append-inner"]) == null ? void 0 : h.call(r, g.value), e.appendInnerIcon && m(c, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), m("div", {
        class: ["v-field__outline", $.value]
      }, [w && m(ye, null, [m("div", {
        class: "v-field__outline__start"
      }, null), v.value && m("div", {
        class: "v-field__outline__notch"
      }, [m(zo, {
        ref: E,
        floating: !0,
        for: p.value
      }, {
        default: () => [z]
      })]), m("div", {
        class: "v-field__outline__end"
      }, null)]), ["plain", "underlined"].includes(e.variant) && v.value && m(zo, {
        ref: E,
        floating: !0,
        for: p.value
      }, {
        default: () => [z]
      })])]);
    }), {
      controlRef: S
    };
  }
});
function xv(e) {
  const t = Object.keys(Tl.props).filter((n) => !Mg(n));
  return wn(e, t);
}
const o0 = oe()({
  name: "VMessages",
  props: {
    active: Boolean,
    color: String,
    messages: {
      type: [Array, String],
      default: () => []
    },
    ...Ta({
      transition: {
        component: vv,
        leaveAbsolute: !0,
        group: !0
      }
    })
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = _(() => Rn(e.messages)), {
      textColorClasses: r,
      textColorStyles: o
    } = vn(_(() => e.color));
    return fe(() => m(la, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", r.value],
      style: o.value,
      role: "alert",
      "aria-live": "polite"
    }, {
      default: () => [e.active && a.value.map((l, i) => m("div", {
        class: "v-messages__message",
        key: `${i}-${a.value}`
      }, [n.message ? n.message({
        message: l
      }) : l]))]
    })), {};
  }
}), l0 = Symbol.for("vuetify:form"), WV = Fe({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function zV(e) {
  const t = He(e, "modelValue"), n = _(() => e.disabled), a = _(() => e.readonly), r = R(!1), o = R([]), l = R([]);
  async function i() {
    const d = [];
    let c = !0;
    l.value = [], r.value = !0;
    for (const f of o.value) {
      const v = await f.validate();
      if (v.length > 0 && (c = !1, d.push({
        id: f.id,
        errorMessages: v
      })), !c && e.fastFail)
        break;
    }
    return l.value = d, r.value = !1, {
      valid: c,
      errors: l.value
    };
  }
  function s() {
    o.value.forEach((d) => d.reset()), t.value = null;
  }
  function u() {
    o.value.forEach((d) => d.resetValidation()), l.value = [], t.value = null;
  }
  return pe(o, () => {
    let d = 0, c = 0;
    const f = [];
    for (const v of o.value)
      v.isValid === !1 ? (c++, f.push({
        id: v.id,
        errorMessages: v.errorMessages
      })) : v.isValid === !0 && d++;
    l.value = f, t.value = c > 0 ? !1 : d === o.value.length ? !0 : null;
  }, {
    deep: !0
  }), Bt(l0, {
    register: (d) => {
      let {
        id: c,
        validate: f,
        reset: v,
        resetValidation: y
      } = d;
      o.value.some((p) => p.id === c) && Cr(`Duplicate input name "${c}"`), o.value.push({
        id: c,
        validate: f,
        reset: v,
        resetValidation: y,
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (d) => {
      o.value = o.value.filter((c) => c.id !== d);
    },
    update: (d, c, f) => {
      const v = o.value.find((y) => y.id === d);
      v && (v.isValid = c, v.errorMessages = f);
    },
    isDisabled: n,
    isReadonly: a,
    isValidating: r,
    items: o,
    validateOn: ne(e, "validateOn")
  }), {
    errors: l,
    isDisabled: n,
    isReadonly: a,
    isValidating: r,
    items: o,
    validate: i,
    reset: s,
    resetValidation: u
  };
}
function Eu() {
  return nt(l0, null);
}
const i0 = Fe({
  disabled: Boolean,
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: Boolean,
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...Ou()
}, "validation");
function s0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ea(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : nn();
  const a = He(e, "modelValue"), r = _(() => e.validationValue === void 0 ? a.value : e.validationValue), o = Eu(), l = R([]), i = R(!0), s = _(() => !!(Rn(a.value === "" ? null : a.value).length || Rn(r.value === "" ? null : r.value).length)), u = _(() => !!(e.disabled || o != null && o.isDisabled.value)), d = _(() => !!(e.readonly || o != null && o.isReadonly.value)), c = _(() => e.errorMessages.length ? Rn(e.errorMessages).slice(0, Math.max(0, +e.maxErrors)) : l.value), f = _(() => e.error || c.value.length ? !1 : e.rules.length && i.value ? null : !0), v = R(!1), y = _(() => ({
    [`${t}--error`]: f.value === !1,
    [`${t}--dirty`]: s.value,
    [`${t}--disabled`]: u.value,
    [`${t}--readonly`]: d.value
  })), p = _(() => e.name ?? M(n));
  fu(() => {
    o == null || o.register({
      id: p.value,
      validate: S,
      reset: O,
      resetValidation: E
    });
  }), _n(() => {
    o == null || o.unregister(p.value);
  });
  const x = _(() => e.validateOn || (o == null ? void 0 : o.validateOn.value) || "input");
  ft(() => o == null ? void 0 : o.update(p.value, f.value, c.value)), Tr(() => x.value === "input", () => {
    pe(r, () => {
      if (r.value != null)
        S();
      else if (e.focused) {
        const N = pe(() => e.focused, (V) => {
          V || S(), N();
        });
      }
    });
  }), Tr(() => x.value === "blur", () => {
    pe(() => e.focused, (N) => {
      N || S();
    });
  }), pe(f, () => {
    o == null || o.update(p.value, f.value, c.value);
  });
  function O() {
    E(), a.value = null;
  }
  function E() {
    i.value = !0, l.value = [];
  }
  async function S() {
    const N = [];
    v.value = !0;
    for (const V of e.rules) {
      if (N.length >= (e.maxErrors ?? 1))
        break;
      const k = await (typeof V == "function" ? V : () => V)(r.value);
      if (k !== !0) {
        if (typeof k != "string") {
          console.warn(`${k} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        N.push(k);
      }
    }
    return l.value = N, v.value = !1, i.value = !1, l.value;
  }
  return {
    errorMessages: c,
    isDirty: s,
    isDisabled: u,
    isReadonly: d,
    isPristine: i,
    isValid: f,
    isValidating: v,
    reset: O,
    resetValidation: E,
    validate: S,
    validationClasses: y
  };
}
const Da = Fe({
  id: String,
  appendIcon: Me,
  prependIcon: Me,
  hideDetails: [Boolean, String],
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["horizontal", "vertical"].includes(e)
  },
  "onClick:prepend": wa,
  "onClick:append": wa,
  ...Ft(),
  ...i0()
}, "v-input"), da = oe()({
  name: "VInput",
  props: {
    ...Da()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: r
    } = t;
    const {
      densityClasses: o
    } = an(e), {
      InputIcon: l
    } = r0(e), i = nn(), s = _(() => e.id || `input-${i}`), u = _(() => `${s.value}-messages`), {
      errorMessages: d,
      isDirty: c,
      isDisabled: f,
      isReadonly: v,
      isPristine: y,
      isValid: p,
      isValidating: x,
      reset: O,
      resetValidation: E,
      validate: S,
      validationClasses: N
    } = s0(e, "v-input", s), V = _(() => ({
      id: s,
      messagesId: u,
      isDirty: c,
      isDisabled: f,
      isReadonly: v,
      isPristine: y,
      isValid: p,
      isValidating: x,
      reset: O,
      resetValidation: E,
      validate: S
    }));
    return fe(() => {
      var w, C, T, A, z;
      const $ = !!(a.prepend || e.prependIcon), k = !!(a.append || e.appendIcon), g = !!((w = e.messages) != null && w.length || d.value.length), b = !e.hideDetails || e.hideDetails === "auto" && (g || !!a.details);
      return m("div", {
        class: ["v-input", `v-input--${e.direction}`, o.value, N.value]
      }, [$ && m("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(C = a.prepend) == null ? void 0 : C.call(a, V.value), e.prependIcon && m(l, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), a.default && m("div", {
        class: "v-input__control"
      }, [(T = a.default) == null ? void 0 : T.call(a, V.value)]), k && m("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && m(l, {
        key: "append-icon",
        name: "append"
      }, null), (A = a.append) == null ? void 0 : A.call(a, V.value)]), b && m("div", {
        class: "v-input__details"
      }, [m(o0, {
        id: u.value,
        active: g,
        messages: d.value.length > 0 ? d.value : e.messages
      }, {
        message: a.message
      }), (z = a.details) == null ? void 0 : z.call(a, V.value)])]);
    }), {
      reset: O,
      resetValidation: E,
      validate: S
    };
  }
});
function tr(e) {
  const t = Object.keys(da.props).filter((n) => !Mg(n));
  return wn(e, t);
}
const $u = oe()({
  name: "VCounter",
  functional: !0,
  props: {
    active: Boolean,
    max: [Number, String],
    value: {
      type: [Number, String],
      default: 0
    },
    ...Ta({
      transition: {
        component: vv
      }
    })
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = _(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return fe(() => m(la, {
      transition: e.transition
    }, {
      default: () => [st(m("div", {
        class: "v-counter"
      }, [n.default ? n.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[gn, e.active]])]
    })), {};
  }
}), fc = Symbol("Forwarded refs");
function Qn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return e[fc] = n, new Proxy(e, {
    get(r, o) {
      if (Reflect.has(r, o))
        return Reflect.get(r, o);
      for (const l of n)
        if (l.value && Reflect.has(l.value, o)) {
          const i = Reflect.get(l.value, o);
          return typeof i == "function" ? i.bind(l.value) : i;
        }
    },
    getOwnPropertyDescriptor(r, o) {
      const l = Reflect.getOwnPropertyDescriptor(r, o);
      if (l)
        return l;
      if (!(typeof o == "symbol" || o.startsWith("__"))) {
        for (const i of n) {
          if (!i.value)
            continue;
          const s = Reflect.getOwnPropertyDescriptor(i.value, o);
          if (s)
            return s;
          if ("_" in i.value && "setupState" in i.value._) {
            const u = Reflect.getOwnPropertyDescriptor(i.value._.setupState, o);
            if (u)
              return u;
          }
        }
        for (const i of n) {
          let s = i.value && Object.getPrototypeOf(i.value);
          for (; s; ) {
            const u = Reflect.getOwnPropertyDescriptor(s, o);
            if (u)
              return u;
            s = Object.getPrototypeOf(s);
          }
        }
        for (const i of n) {
          const s = i.value && i.value[fc];
          if (!s)
            continue;
          const u = s.slice();
          for (; u.length; ) {
            const d = u.shift(), c = Reflect.getOwnPropertyDescriptor(d.value, o);
            if (c)
              return c;
            const f = d.value && d.value[fc];
            f && u.push(...f);
          }
        }
      }
    }
  });
}
const qV = ["color", "file", "time", "date", "datetime-local", "week", "month"], Pu = Fe({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  hint: String,
  persistentHint: Boolean,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  type: {
    type: String,
    default: "text"
  },
  ...Da(),
  ...Cu()
}, "v-text-field"), Nl = oe()({
  name: "VTextField",
  directives: {
    Intersect: ku
  },
  inheritAttrs: !1,
  props: Pu(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: r
    } = t;
    const o = He(e, "modelValue"), {
      isFocused: l,
      focus: i,
      blur: s
    } = Hr(e), u = _(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : (o.value ?? "").toString().length), d = _(() => {
      if (n.maxlength)
        return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    });
    function c($, k) {
      var g, b;
      !e.autofocus || !$ || (b = (g = k[0].target) == null ? void 0 : g.focus) == null || b.call(g);
    }
    const f = R(), v = R(), y = R(), p = _(() => qV.includes(e.type) || e.persistentPlaceholder || l.value), x = _(() => e.messages.length ? e.messages : l.value || e.persistentHint ? e.hint : "");
    function O() {
      var $;
      y.value !== document.activeElement && (($ = y.value) == null || $.focus()), l.value || i();
    }
    function E($) {
      a("mousedown:control", $), $.target !== y.value && (O(), $.preventDefault());
    }
    function S($) {
      O(), a("click:control", $);
    }
    function N($) {
      $.stopPropagation(), O(), Je(() => {
        o.value = null, ss(e["onClick:clear"], $);
      });
    }
    function V($) {
      o.value = $.target.value;
    }
    return fe(() => {
      const $ = !!(r.counter || e.counter || e.counterValue), k = !!($ || r.details), [g, b] = Mr(n), [{
        modelValue: w,
        ...C
      }] = tr(e), [T] = xv(e);
      return m(da, ve({
        ref: f,
        modelValue: o.value,
        "onUpdate:modelValue": (A) => o.value = A,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-text-field--flush-details": ["plain", "underlined"].includes(e.variant)
        }],
        "onClick:prepend": e["onClick:prepend"],
        "onClick:append": e["onClick:append"]
      }, g, C, {
        focused: l.value,
        messages: x.value
      }), {
        ...r,
        default: (A) => {
          let {
            id: z,
            isDisabled: U,
            isDirty: B,
            isReadonly: h,
            isValid: P
          } = A;
          return m(Tl, ve({
            ref: v,
            onMousedown: E,
            onClick: S,
            "onClick:clear": N,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: "textbox"
          }, T, {
            id: z.value,
            active: p.value || B.value,
            dirty: B.value || e.dirty,
            disabled: U.value,
            focused: l.value,
            error: P.value === !1
          }), {
            ...r,
            default: (W) => {
              let {
                props: {
                  class: H,
                  ...j
                }
              } = W;
              const X = st(m("input", ve({
                ref: y,
                value: o.value,
                onInput: V,
                autofocus: e.autofocus,
                readonly: h.value,
                disabled: U.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: O,
                onBlur: s
              }, j, b), null), [[bn("intersect"), {
                handler: c
              }, null, {
                once: !0
              }]]);
              return m(ye, null, [e.prefix && m("span", {
                class: "v-text-field__prefix"
              }, [e.prefix]), r.default ? m("div", {
                class: H,
                "data-no-activator": ""
              }, [r.default(), X]) : qn(X, {
                class: H
              }), e.suffix && m("span", {
                class: "v-text-field__suffix"
              }, [e.suffix])]);
            }
          });
        },
        details: k ? (A) => {
          var z;
          return m(ye, null, [(z = r.details) == null ? void 0 : z.call(r, A), $ && m(ye, null, [m("span", null, null), m($u, {
            active: e.persistentCounter || l.value,
            value: u.value,
            max: d.value
          }, r.counter)])]);
        } : void 0
      });
    }), Qn({}, f, v, y);
  }
});
function Ov(e) {
  return wn(e, Object.keys(Nl.props));
}
const u0 = Symbol.for("vuetify:selection-control-group"), Cv = Fe({
  color: String,
  disabled: Boolean,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: Me,
  trueIcon: Me,
  ripple: {
    type: Boolean,
    default: !0
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: Boolean,
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: bo
  },
  ...Ge(),
  ...Ft()
}, "v-selection-control-group"), c0 = oe()({
  name: "VSelectionControlGroup",
  props: {
    defaultsTarget: {
      type: String,
      default: "VSelectionControl"
    },
    ...Cv()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = He(e, "modelValue"), r = nn(), o = _(() => e.id || `v-selection-control-group-${r}`), l = _(() => e.name || o.value), i = /* @__PURE__ */ new Set();
    return Bt(u0, {
      modelValue: a,
      forceUpdate: () => {
        i.forEach((s) => s());
      },
      onForceUpdate: (s) => {
        i.add(s), fn(() => {
          i.delete(s);
        });
      }
    }), Vt({
      [e.defaultsTarget]: {
        color: ne(e, "color"),
        disabled: ne(e, "disabled"),
        density: ne(e, "density"),
        error: ne(e, "error"),
        inline: ne(e, "inline"),
        modelValue: a,
        multiple: _(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: l,
        falseIcon: ne(e, "falseIcon"),
        trueIcon: ne(e, "trueIcon"),
        readonly: ne(e, "readonly"),
        ripple: ne(e, "ripple"),
        type: ne(e, "type"),
        valueComparator: ne(e, "valueComparator")
      }
    }), fe(() => {
      var s;
      return m("div", {
        class: ["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }],
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(s = n.default) == null ? void 0 : s.call(n)]);
    }), {};
  }
}), Tu = Fe({
  label: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...Cv()
}, "v-selection-control");
function GV(e) {
  const t = nt(u0, void 0), {
    densityClasses: n
  } = an(e), a = He(e, "modelValue"), r = _(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), o = _(() => e.falseValue !== void 0 ? e.falseValue : !1), l = _(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), i = _({
    get() {
      const c = t ? t.modelValue.value : a.value;
      return l.value ? c.some((f) => e.valueComparator(f, r.value)) : e.valueComparator(c, r.value);
    },
    set(c) {
      if (e.readonly)
        return;
      const f = c ? r.value : o.value;
      let v = f;
      l.value && (v = c ? [...Rn(a.value), f] : Rn(a.value).filter((y) => !e.valueComparator(y, r.value))), t ? t.modelValue.value = v : a.value = v;
    }
  }), {
    textColorClasses: s,
    textColorStyles: u
  } = vn(_(() => i.value && !e.error && !e.disabled ? e.color : void 0)), d = _(() => i.value ? e.trueIcon : e.falseIcon);
  return {
    group: t,
    densityClasses: n,
    trueValue: r,
    falseValue: o,
    model: i,
    textColorClasses: s,
    textColorStyles: u,
    icon: d
  };
}
const Dl = oe()({
  name: "VSelectionControl",
  directives: {
    Ripple: jr
  },
  inheritAttrs: !1,
  props: Tu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      group: r,
      densityClasses: o,
      icon: l,
      model: i,
      textColorClasses: s,
      textColorStyles: u,
      trueValue: d
    } = GV(e), c = nn(), f = _(() => e.id || `input-${c}`), v = R(!1), y = R(!1), p = R();
    r == null || r.onForceUpdate(() => {
      p.value && (p.value.checked = i.value);
    });
    function x(S) {
      v.value = !0, (!Yc || Yc && S.target.matches(":focus-visible")) && (y.value = !0);
    }
    function O() {
      v.value = !1, y.value = !1;
    }
    function E(S) {
      e.readonly && r && Je(() => r.forceUpdate()), i.value = S.target.checked;
    }
    return fe(() => {
      var $, k;
      const S = a.label ? a.label({
        label: e.label,
        props: {
          for: f.value
        }
      }) : e.label, [N, V] = Mr(n);
      return m("div", ve({
        class: ["v-selection-control", {
          "v-selection-control--dirty": i.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": v.value,
          "v-selection-control--focus-visible": y.value,
          "v-selection-control--inline": e.inline
        }, o.value]
      }, N), [m("div", {
        class: ["v-selection-control__wrapper", s.value],
        style: u.value
      }, [($ = a.default) == null ? void 0 : $.call(a), st(m("div", {
        class: ["v-selection-control__input"]
      }, [l.value && m(Pt, {
        key: "icon",
        icon: l.value
      }, null), m("input", ve({
        ref: p,
        checked: i.value,
        disabled: e.disabled,
        id: f.value,
        onBlur: O,
        onFocus: x,
        onInput: E,
        "aria-disabled": e.readonly,
        type: e.type,
        value: d.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? i.value : void 0
      }, V), null), (k = a.input) == null ? void 0 : k.call(a, {
        model: i,
        textColorClasses: s,
        textColorStyles: u,
        props: {
          onFocus: x,
          onBlur: O,
          id: f.value
        }
      })]), [[bn("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), S && m(To, {
        for: f.value,
        clickable: !0
      }, {
        default: () => [S]
      })]);
    }), {
      isFocused: v,
      input: p
    };
  }
});
function f0(e) {
  return wn(e, Object.keys(Dl.props));
}
const d0 = Fe({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: Me,
    default: "$checkboxIndeterminate"
  },
  ...Tu({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "v-checkbox-btn"), No = oe()({
  name: "VCheckboxBtn",
  props: d0(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = He(e, "indeterminate"), r = He(e, "modelValue");
    function o(s) {
      a.value && (a.value = !1);
    }
    const l = _(() => e.indeterminate ? e.indeterminateIcon : e.falseIcon), i = _(() => e.indeterminate ? e.indeterminateIcon : e.trueIcon);
    return fe(() => m(Dl, ve(e, {
      modelValue: r.value,
      "onUpdate:modelValue": [(s) => r.value = s, o],
      class: "v-checkbox-btn",
      type: "checkbox",
      inline: !0,
      falseIcon: l.value,
      trueIcon: i.value,
      "aria-checked": e.indeterminate ? "mixed" : void 0
    }), n)), {};
  }
});
function KV(e) {
  return wn(e, Object.keys(No.props));
}
const XV = oe()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: {
    ...Da(),
    ...d0()
  },
  emits: {
    "update:focused": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      isFocused: r,
      focus: o,
      blur: l
    } = Hr(e), i = nn(), s = _(() => e.id || `checkbox-${i}`);
    return fe(() => {
      const [u, d] = Mr(n), [c, f] = tr(e), [v, y] = KV(e);
      return m(da, ve({
        class: "v-checkbox"
      }, u, c, {
        id: s.value,
        focused: r.value
      }), {
        ...a,
        default: (p) => {
          let {
            id: x,
            messagesId: O,
            isDisabled: E,
            isReadonly: S
          } = p;
          return m(No, ve(v, {
            id: x.value,
            "aria-describedby": O.value,
            disabled: E.value,
            readonly: S.value
          }, d, {
            onFocus: o,
            onBlur: l
          }), a);
        }
      });
    }), {};
  }
});
const QV = Fe({
  start: Boolean,
  end: Boolean,
  icon: Me,
  image: String,
  ...Ft(),
  ...ht(),
  ...Na(),
  ...je(),
  ...Ge(),
  ...Hn({
    variant: "flat"
  })
}, "v-avatar"), Ga = oe()({
  name: "VAvatar",
  props: QV(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = at(e), {
      colorClasses: r,
      colorStyles: o,
      variantClasses: l
    } = Br(e), {
      densityClasses: i
    } = an(e), {
      roundedClasses: s
    } = kt(e), {
      sizeClasses: u,
      sizeStyles: d
    } = Co(e);
    return fe(() => m(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, r.value, i.value, s.value, u.value, l.value],
      style: [o.value, d.value]
    }, {
      default: () => {
        var c;
        return [e.image ? m(So, {
          key: "image",
          src: e.image,
          alt: "",
          cover: !0
        }, null) : e.icon ? m(Pt, {
          key: "icon",
          icon: e.icon
        }, null) : (c = n.default) == null ? void 0 : c.call(n), Rr(!1, "v-avatar")];
      }
    })), {};
  }
});
const v0 = Symbol.for("vuetify:v-chip-group"), ZV = oe()({
  name: "VChipGroup",
  props: {
    column: Boolean,
    filter: Boolean,
    valueComparator: {
      type: Function,
      default: bo
    },
    ...xo({
      selectedClass: "v-chip--selected"
    }),
    ...je(),
    ...Ge(),
    ...Hn({
      variant: "tonal"
    })
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = at(e), {
      isSelected: r,
      select: o,
      next: l,
      prev: i,
      selected: s
    } = Lr(e, v0);
    return Vt({
      VChip: {
        color: ne(e, "color"),
        disabled: ne(e, "disabled"),
        filter: ne(e, "filter"),
        variant: ne(e, "variant")
      }
    }), fe(() => m(e.tag, {
      class: ["v-chip-group", {
        "v-chip-group--column": e.column
      }, a.value]
    }, {
      default: () => {
        var u;
        return [(u = n.default) == null ? void 0 : u.call(n, {
          isSelected: r,
          select: o,
          next: l,
          prev: i,
          selected: s.value
        })];
      }
    })), {};
  }
}), Vl = oe()({
  name: "VChip",
  directives: {
    Ripple: jr
  },
  props: {
    activeClass: String,
    appendAvatar: String,
    appendIcon: Me,
    closable: Boolean,
    closeIcon: {
      type: Me,
      default: "$delete"
    },
    closeLabel: {
      type: String,
      default: "$vuetify.close"
    },
    draggable: Boolean,
    filter: Boolean,
    filterIcon: {
      type: String,
      default: "$complete"
    },
    label: Boolean,
    link: {
      type: Boolean,
      default: void 0
    },
    pill: Boolean,
    prependAvatar: String,
    prependIcon: Me,
    ripple: {
      type: Boolean,
      default: !0
    },
    text: String,
    modelValue: {
      type: Boolean,
      default: !0
    },
    onClick: wa,
    onClickOnce: wa,
    ...Pn(),
    ...Ft(),
    ...It(),
    ...Fr(),
    ...ht(),
    ...Po(),
    ...Na(),
    ...je({
      tag: "span"
    }),
    ...Ge(),
    ...Hn({
      variant: "tonal"
    })
  },
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: r
    } = t;
    const {
      t: o
    } = Ln(), {
      borderClasses: l
    } = jn(e), {
      colorClasses: i,
      colorStyles: s,
      variantClasses: u
    } = Br(e), {
      densityClasses: d
    } = an(e), {
      elevationClasses: c
    } = zt(e), {
      roundedClasses: f
    } = kt(e), {
      sizeClasses: v
    } = Co(e), {
      themeClasses: y
    } = at(e), p = He(e, "modelValue"), x = Oo(e, v0, !1), O = Pl(e, n), E = _(() => e.link !== !1 && O.isLink.value), S = _(() => !e.disabled && e.link !== !1 && (!!x || e.link || O.isClickable.value)), N = _(() => ({
      "aria-label": o(e.closeLabel),
      onClick(k) {
        p.value = !1, a("click:close", k);
      }
    }));
    function V(k) {
      var g;
      a("click", k), S.value && ((g = O.navigate) == null || g.call(O, k), x == null || x.toggle());
    }
    function $(k) {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), V(k));
    }
    return () => {
      const k = O.isLink.value ? "a" : e.tag, g = !!(e.appendIcon || e.appendAvatar), b = !!(g || r.append), w = !!(r.close || e.closable), C = !!(r.filter || e.filter) && x, T = !!(e.prependIcon || e.prependAvatar), A = !!(T || r.prepend), z = !x || x.isSelected.value;
      return p.value && st(m(k, {
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": S.value,
          "v-chip--filter": C,
          "v-chip--pill": e.pill
        }, y.value, l.value, z ? i.value : void 0, d.value, c.value, f.value, v.value, u.value, x == null ? void 0 : x.selectedClass.value],
        style: [z ? s.value : void 0],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        href: O.href.value,
        tabindex: S.value ? 0 : void 0,
        onClick: V,
        onKeydown: S.value && !E.value && $
      }, {
        default: () => {
          var U;
          return [Rr(S.value, "v-chip"), C && m(mv, {
            key: "filter"
          }, {
            default: () => [st(m("div", {
              class: "v-chip__filter"
            }, [r.filter ? st(m(lt, {
              key: "filter-defaults",
              disabled: !e.filterIcon,
              defaults: {
                VIcon: {
                  icon: e.filterIcon
                }
              }
            }, null), [[bn("slot"), r.filter, "default"]]) : m(Pt, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[gn, x.isSelected.value]])]
          }), A && m("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [r.prepend ? m(lt, {
            key: "prepend-defaults",
            disabled: !T,
            defaults: {
              VAvatar: {
                image: e.prependAvatar,
                start: !0
              },
              VIcon: {
                icon: e.prependIcon,
                start: !0
              }
            }
          }, r.prepend) : m(ye, null, [e.prependIcon && m(Pt, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && m(Ga, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), ((U = r.default) == null ? void 0 : U.call(r, {
            isSelected: x == null ? void 0 : x.isSelected.value,
            selectedClass: x == null ? void 0 : x.selectedClass.value,
            select: x == null ? void 0 : x.select,
            toggle: x == null ? void 0 : x.toggle,
            value: x == null ? void 0 : x.value.value,
            disabled: e.disabled
          })) ?? e.text, b && m("div", {
            key: "append",
            class: "v-chip__append"
          }, [r.append ? m(lt, {
            key: "append-defaults",
            disabled: !g,
            defaults: {
              VAvatar: {
                end: !0,
                image: e.appendAvatar
              },
              VIcon: {
                end: !0,
                icon: e.appendIcon
              }
            }
          }, r.append) : m(ye, null, [e.appendIcon && m(Pt, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && m(Ga, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), w && m("div", ve({
            key: "close",
            class: "v-chip__close"
          }, N.value), [r.close ? m(lt, {
            key: "close-defaults",
            defaults: {
              VIcon: {
                icon: e.closeIcon,
                size: "x-small"
              }
            }
          }, r.close) : m(Pt, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[bn("ripple"), S.value && e.ripple, null]]);
    };
  }
});
const m0 = oe()({
  name: "VDivider",
  props: {
    color: String,
    inset: Boolean,
    length: [Number, String],
    thickness: [Number, String],
    vertical: Boolean,
    ...Ge()
  },
  setup(e, t) {
    let {
      attrs: n
    } = t;
    const {
      themeClasses: a
    } = at(e), {
      textColorClasses: r,
      textColorStyles: o
    } = vn(ne(e, "color")), l = _(() => {
      const i = {};
      return e.length && (i[e.vertical ? "maxHeight" : "maxWidth"] = ge(e.length)), e.thickness && (i[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ge(e.thickness)), i;
    });
    return fe(() => m("hr", {
      class: [{
        "v-divider": !0,
        "v-divider--inset": e.inset,
        "v-divider--vertical": e.vertical
      }, a.value, r.value],
      style: [l.value, o.value],
      "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
      role: `${n.role || "separator"}`
    }, null)), {};
  }
}), fd = Symbol.for("vuetify:list");
function h0() {
  const e = nt(fd, {
    hasPrepend: R(!1),
    updateHasPrepend: () => null
  }), t = {
    hasPrepend: R(!1),
    updateHasPrepend: (n) => {
      n && (t.hasPrepend.value = n);
    }
  };
  return Bt(fd, t), e;
}
function y0() {
  return nt(fd, null);
}
const JV = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: r
    } = e;
    if (n) {
      const o = /* @__PURE__ */ new Set();
      o.add(t);
      let l = r.get(t);
      for (; l != null; )
        o.add(l), l = r.get(l);
      return o;
    } else
      return a.delete(t), a;
  },
  select: () => null
}, p0 = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: r
    } = e;
    if (n) {
      let o = r.get(t);
      for (a.add(t); o != null && o !== t; )
        a.add(o), o = r.get(o);
      return a;
    } else
      a.delete(t);
    return a;
  },
  select: () => null
}, eI = {
  open: p0.open,
  select: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: r
    } = e;
    if (!n)
      return a;
    const o = [];
    let l = r.get(t);
    for (; l != null; )
      o.push(l), l = r.get(l);
    return new Set(o);
  }
}, Ev = (e) => {
  const t = {
    select: (n) => {
      let {
        id: a,
        value: r,
        selected: o
      } = n;
      if (a = Te(a), e && !r) {
        const l = Array.from(o.entries()).reduce((i, s) => {
          let [u, d] = s;
          return d === "on" ? [...i, u] : i;
        }, []);
        if (l.length === 1 && l[0] === a)
          return o;
      }
      return o.set(a, r ? "on" : "off"), o;
    },
    in: (n, a, r) => {
      let o = /* @__PURE__ */ new Map();
      for (const l of n || [])
        o = t.select({
          id: l,
          value: !0,
          selected: new Map(o),
          children: a,
          parents: r
        });
      return o;
    },
    out: (n) => {
      const a = [];
      for (const [r, o] of n.entries())
        o === "on" && a.push(r);
      return a;
    }
  };
  return t;
}, g0 = (e) => {
  const t = Ev(e);
  return {
    select: (a) => {
      let {
        selected: r,
        id: o,
        ...l
      } = a;
      o = Te(o);
      const i = r.has(o) ? /* @__PURE__ */ new Map([[o, r.get(o)]]) : /* @__PURE__ */ new Map();
      return t.select({
        ...l,
        id: o,
        selected: i
      });
    },
    in: (a, r, o) => {
      let l = /* @__PURE__ */ new Map();
      return a != null && a.length && (l = t.in(a.slice(0, 1), r, o)), l;
    },
    out: (a, r, o) => t.out(a, r, o)
  };
}, tI = (e) => {
  const t = Ev(e);
  return {
    select: (a) => {
      let {
        id: r,
        selected: o,
        children: l,
        ...i
      } = a;
      return r = Te(r), l.has(r) ? o : t.select({
        id: r,
        selected: o,
        children: l,
        ...i
      });
    },
    in: t.in,
    out: t.out
  };
}, nI = (e) => {
  const t = g0(e);
  return {
    select: (a) => {
      let {
        id: r,
        selected: o,
        children: l,
        ...i
      } = a;
      return r = Te(r), l.has(r) ? o : t.select({
        id: r,
        selected: o,
        children: l,
        ...i
      });
    },
    in: t.in,
    out: t.out
  };
}, aI = (e) => {
  const t = {
    select: (n) => {
      let {
        id: a,
        value: r,
        selected: o,
        children: l,
        parents: i
      } = n;
      a = Te(a);
      const s = new Map(o), u = [a];
      for (; u.length; ) {
        const c = u.shift();
        o.set(c, r ? "on" : "off"), l.has(c) && u.push(...l.get(c));
      }
      let d = i.get(a);
      for (; d; ) {
        const c = l.get(d), f = c.every((y) => o.get(y) === "on"), v = c.every((y) => !o.has(y) || o.get(y) === "off");
        o.set(d, f ? "on" : v ? "off" : "indeterminate"), d = i.get(d);
      }
      return e && !r && Array.from(o.entries()).reduce((f, v) => {
        let [y, p] = v;
        return p === "on" ? [...f, y] : f;
      }, []).length === 0 ? s : o;
    },
    in: (n, a, r) => {
      let o = /* @__PURE__ */ new Map();
      for (const l of n || [])
        o = t.select({
          id: l,
          value: !0,
          selected: new Map(o),
          children: a,
          parents: r
        });
      return o;
    },
    out: (n, a) => {
      const r = [];
      for (const [o, l] of n.entries())
        l === "on" && !a.has(o) && r.push(o);
      return r;
    }
  };
  return t;
}, wl = Symbol.for("vuetify:nested"), b0 = {
  id: R(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: R(/* @__PURE__ */ new Map()),
    children: R(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    select: () => null,
    opened: R(/* @__PURE__ */ new Set()),
    selected: R(/* @__PURE__ */ new Map()),
    selectedValues: R([])
  }
}, rI = Fe({
  selectStrategy: [String, Function],
  openStrategy: [String, Object],
  opened: Array,
  selected: Array,
  mandatory: Boolean
}, "nested"), oI = (e) => {
  let t = !1;
  const n = R(/* @__PURE__ */ new Map()), a = R(/* @__PURE__ */ new Map()), r = He(e, "opened", e.opened, (c) => new Set(c), (c) => [...c.values()]), o = _(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return nI(e.mandatory);
      case "leaf":
        return tI(e.mandatory);
      case "independent":
        return Ev(e.mandatory);
      case "single-independent":
        return g0(e.mandatory);
      case "classic":
      default:
        return aI(e.mandatory);
    }
  }), l = _(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return eI;
      case "single":
        return JV;
      case "multiple":
      default:
        return p0;
    }
  }), i = He(e, "selected", e.selected, (c) => o.value.in(c, n.value, a.value), (c) => o.value.out(c, n.value, a.value));
  _n(() => {
    t = !0;
  });
  function s(c) {
    const f = [];
    let v = c;
    for (; v != null; )
      f.unshift(v), v = a.value.get(v);
    return f;
  }
  const u = tn("nested"), d = {
    id: R(),
    root: {
      opened: r,
      selected: i,
      selectedValues: _(() => {
        const c = [];
        for (const [f, v] of i.value.entries())
          v === "on" && c.push(f);
        return c;
      }),
      register: (c, f, v) => {
        f && c !== f && a.value.set(c, f), v && n.value.set(c, []), f != null && n.value.set(f, [...n.value.get(f) || [], c]);
      },
      unregister: (c) => {
        if (t)
          return;
        n.value.delete(c);
        const f = a.value.get(c);
        if (f) {
          const v = n.value.get(f) ?? [];
          n.value.set(f, v.filter((y) => y !== c));
        }
        a.value.delete(c), r.value.delete(c);
      },
      open: (c, f, v) => {
        u.emit("click:open", {
          id: c,
          value: f,
          path: s(c),
          event: v
        });
        const y = l.value.open({
          id: c,
          value: f,
          opened: new Set(r.value),
          children: n.value,
          parents: a.value,
          event: v
        });
        y && (r.value = y);
      },
      openOnSelect: (c, f, v) => {
        const y = l.value.select({
          id: c,
          value: f,
          selected: new Map(i.value),
          opened: new Set(r.value),
          children: n.value,
          parents: a.value,
          event: v
        });
        y && (r.value = y);
      },
      select: (c, f, v) => {
        u.emit("click:select", {
          id: c,
          value: f,
          path: s(c),
          event: v
        });
        const y = o.value.select({
          id: c,
          value: f,
          selected: new Map(i.value),
          children: n.value,
          parents: a.value,
          event: v
        });
        y && (i.value = y), d.root.openOnSelect(c, f, v);
      },
      children: n,
      parents: a
    }
  };
  return Bt(wl, d), d.root;
}, _0 = (e, t) => {
  const n = nt(wl, b0), a = Symbol(nn()), r = _(() => e.value ?? a), o = {
    ...n,
    id: r,
    open: (l, i) => n.root.open(r.value, l, i),
    openOnSelect: (l, i) => n.root.openOnSelect(r.value, l, i),
    isOpen: _(() => n.root.opened.value.has(r.value)),
    parent: _(() => n.root.parents.value.get(r.value)),
    select: (l, i) => n.root.select(r.value, l, i),
    isSelected: _(() => n.root.selected.value.get(Te(r.value)) === "on"),
    isIndeterminate: _(() => n.root.selected.value.get(r.value) === "indeterminate"),
    isLeaf: _(() => !n.root.children.value.get(r.value)),
    isGroupActivator: n.isGroupActivator
  };
  return !n.isGroupActivator && n.root.register(r.value, n.id.value, t), _n(() => {
    !n.isGroupActivator && n.root.unregister(r.value);
  }), t && Bt(wl, o), o;
}, lI = () => {
  const e = nt(wl, b0);
  Bt(wl, {
    ...e,
    isGroupActivator: !0
  });
}, iI = Cn({
  name: "VListGroupActivator",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return lI(), () => {
      var a;
      return (a = n.default) == null ? void 0 : a.call(n);
    };
  }
}), sI = Fe({
  activeColor: String,
  color: String,
  collapseIcon: {
    type: Me,
    default: "$collapse"
  },
  expandIcon: {
    type: Me,
    default: "$expand"
  },
  prependIcon: Me,
  appendIcon: Me,
  fluid: Boolean,
  subgroup: Boolean,
  value: null,
  ...je()
}, "v-list-group"), $v = oe()({
  name: "VListGroup",
  props: {
    title: String,
    ...sI()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isOpen: a,
      open: r,
      id: o
    } = _0(ne(e, "value"), !0), l = _(() => `v-list-group--id-${String(o.value)}`), i = y0();
    function s(c) {
      r(!a.value, c);
    }
    const u = _(() => ({
      onClick: s,
      class: "v-list-group__header",
      id: l.value
    })), d = _(() => a.value ? e.collapseIcon : e.expandIcon);
    return fe(() => m(e.tag, {
      class: ["v-list-group", {
        "v-list-group--prepend": i == null ? void 0 : i.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": a.value
      }]
    }, {
      default: () => [n.activator && m(lt, {
        defaults: {
          VListItem: {
            active: a.value,
            activeColor: e.activeColor,
            color: e.color,
            prependIcon: e.prependIcon || e.subgroup && d.value,
            appendIcon: e.appendIcon || !e.subgroup && d.value,
            title: e.title,
            value: e.value
          }
        }
      }, {
        default: () => [m(iI, null, {
          default: () => [n.activator({
            props: u.value,
            isOpen: a.value
          })]
        })]
      }), m(Su, null, {
        default: () => {
          var c;
          return [st(m("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": l.value
          }, [(c = n.default) == null ? void 0 : c.call(n)]), [[gn, a.value]])];
        }
      })]
    })), {};
  }
});
function uI(e) {
  return wn(e, Object.keys($v.props));
}
const w0 = Gn("v-list-item-subtitle"), S0 = Gn("v-list-item-title"), Oa = oe()({
  name: "VListItem",
  directives: {
    Ripple: jr
  },
  props: {
    active: {
      type: Boolean,
      default: void 0
    },
    activeClass: String,
    activeColor: String,
    appendAvatar: String,
    appendIcon: Me,
    disabled: Boolean,
    lines: String,
    link: {
      type: Boolean,
      default: void 0
    },
    nav: Boolean,
    prependAvatar: String,
    prependIcon: Me,
    ripple: {
      type: Boolean,
      default: !0
    },
    subtitle: [String, Number, Boolean],
    title: [String, Number, Boolean],
    value: null,
    onClick: wa,
    onClickOnce: wa,
    ...Pn(),
    ...Ft(),
    ...Kn(),
    ...It(),
    ...ht(),
    ...Po(),
    ...je(),
    ...Ge(),
    ...Hn({
      variant: "text"
    })
  },
  emits: {
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: r
    } = t;
    const o = Pl(e, n), l = _(() => e.value ?? o.href.value), {
      select: i,
      isSelected: s,
      isIndeterminate: u,
      isGroupActivator: d,
      root: c,
      parent: f,
      openOnSelect: v
    } = _0(l, !1), y = y0(), p = _(() => {
      var h;
      return e.active !== !1 && (e.active || ((h = o.isActive) == null ? void 0 : h.value) || s.value);
    }), x = _(() => e.link !== !1 && o.isLink.value), O = _(() => !e.disabled && e.link !== !1 && (e.link || o.isClickable.value || e.value != null && !!y)), E = _(() => e.rounded || e.nav), S = _(() => ({
      color: p.value ? e.activeColor ?? e.color : e.color,
      variant: e.variant
    }));
    pe(() => {
      var h;
      return (h = o.isActive) == null ? void 0 : h.value;
    }, (h) => {
      h && f.value != null && c.open(f.value, !0), h && v(h);
    }, {
      immediate: !0
    });
    const {
      themeClasses: N
    } = at(e), {
      borderClasses: V
    } = jn(e), {
      colorClasses: $,
      colorStyles: k,
      variantClasses: g
    } = Br(S), {
      densityClasses: b
    } = an(e), {
      dimensionStyles: w
    } = Xn(e), {
      elevationClasses: C
    } = zt(e), {
      roundedClasses: T
    } = kt(E), A = _(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), z = _(() => ({
      isActive: p.value,
      select: i,
      isSelected: s.value,
      isIndeterminate: u.value
    }));
    function U(h) {
      var P;
      r("click", h), !(d || !O.value) && ((P = o.navigate) == null || P.call(o, h), e.value != null && i(!s.value, h));
    }
    function B(h) {
      (h.key === "Enter" || h.key === " ") && (h.preventDefault(), U(h));
    }
    return fe(() => {
      const h = x.value ? "a" : e.tag, P = !y || s.value || p.value, W = a.title || e.title, H = a.subtitle || e.subtitle, j = !!(e.appendAvatar || e.appendIcon), X = !!(j || a.append), Q = !!(e.prependAvatar || e.prependIcon), Y = !!(Q || a.prepend);
      return y == null || y.updateHasPrepend(Y), st(m(h, {
        class: ["v-list-item", {
          "v-list-item--active": p.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": O.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !Y && (y == null ? void 0 : y.hasPrepend.value),
          [`${e.activeClass}`]: e.activeClass && p.value
        }, N.value, V.value, P ? $.value : void 0, b.value, C.value, A.value, T.value, g.value],
        style: [P ? k.value : void 0, w.value],
        href: o.href.value,
        tabindex: O.value ? 0 : void 0,
        onClick: U,
        onKeydown: O.value && !x.value && B
      }, {
        default: () => {
          var I;
          return [Rr(O.value || p.value, "v-list-item"), Y && m("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [a.prepend ? m(lt, {
            key: "prepend-defaults",
            disabled: !Q,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.prependAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.prependIcon
              },
              VListItemAction: {
                start: !0
              }
            }
          }, {
            default: () => {
              var q;
              return [(q = a.prepend) == null ? void 0 : q.call(a, z.value)];
            }
          }) : m(ye, null, [e.prependAvatar && m(Ga, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && m(Pt, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)])]), m("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [W && m(S0, {
            key: "title"
          }, {
            default: () => {
              var q;
              return [((q = a.title) == null ? void 0 : q.call(a, {
                title: e.title
              })) ?? e.title];
            }
          }), H && m(w0, {
            key: "subtitle"
          }, {
            default: () => {
              var q;
              return [((q = a.subtitle) == null ? void 0 : q.call(a, {
                subtitle: e.subtitle
              })) ?? e.subtitle];
            }
          }), (I = a.default) == null ? void 0 : I.call(a, z.value)]), X && m("div", {
            key: "append",
            class: "v-list-item__append"
          }, [a.append ? m(lt, {
            key: "append-defaults",
            disabled: !j,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.appendAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.appendIcon
              },
              VListItemAction: {
                end: !0
              }
            }
          }, {
            default: () => {
              var q;
              return [(q = a.append) == null ? void 0 : q.call(a, z.value)];
            }
          }) : m(ye, null, [e.appendIcon && m(Pt, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && m(Ga, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)])])];
        }
      }), [[bn("ripple"), O.value && e.ripple]]);
    }), {};
  }
}), k0 = oe()({
  name: "VListSubheader",
  props: {
    color: String,
    inset: Boolean,
    sticky: Boolean,
    title: String,
    ...je()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      textColorClasses: a,
      textColorStyles: r
    } = vn(ne(e, "color"));
    return fe(() => {
      const o = !!(n.default || e.title);
      return m(e.tag, {
        class: ["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, a.value],
        style: {
          textColorStyles: r
        }
      }, {
        default: () => {
          var l;
          return [o && m("div", {
            class: "v-list-subheader__text"
          }, [((l = n.default) == null ? void 0 : l.call(n)) ?? e.title])];
        }
      });
    }), {};
  }
}), x0 = oe()({
  name: "VListChildren",
  props: {
    items: Array
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return h0(), () => {
      var a, r;
      return ((a = n.default) == null ? void 0 : a.call(n)) ?? ((r = e.items) == null ? void 0 : r.map((o) => {
        var v, y;
        let {
          children: l,
          props: i,
          type: s,
          raw: u
        } = o;
        if (s === "divider")
          return ((v = n.divider) == null ? void 0 : v.call(n, {
            props: i
          })) ?? m(m0, i, null);
        if (s === "subheader")
          return ((y = n.subheader) == null ? void 0 : y.call(n, {
            props: i
          })) ?? m(k0, i, {
            default: n.subheader
          });
        const d = {
          subtitle: n.subtitle ? (p) => {
            var x;
            return (x = n.subtitle) == null ? void 0 : x.call(n, {
              ...p,
              item: u
            });
          } : void 0,
          prepend: n.prepend ? (p) => {
            var x;
            return (x = n.prepend) == null ? void 0 : x.call(n, {
              ...p,
              item: u
            });
          } : void 0,
          append: n.append ? (p) => {
            var x;
            return (x = n.append) == null ? void 0 : x.call(n, {
              ...p,
              item: u
            });
          } : void 0,
          default: n.default ? (p) => {
            var x;
            return (x = n.default) == null ? void 0 : x.call(n, {
              ...p,
              item: u
            });
          } : void 0,
          title: n.title ? (p) => {
            var x;
            return (x = n.title) == null ? void 0 : x.call(n, {
              ...p,
              item: u
            });
          } : void 0
        }, [c, f] = uI(i);
        return l ? m($v, ve({
          value: i == null ? void 0 : i.value
        }, c), {
          activator: (p) => {
            let {
              props: x
            } = p;
            return n.header ? n.header({
              props: {
                ...i,
                ...x
              }
            }) : m(Oa, ve(i, x), d);
          },
          default: () => m(x0, {
            items: l
          }, n)
        }) : n.item ? n.item(i) : m(Oa, i, d);
      }));
    };
  }
}), O0 = Fe({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  returnObject: Boolean
}, "item");
function ao(e, t) {
  const n = na(t, e.itemTitle, t), a = e.returnObject ? t : na(t, e.itemValue, n), r = na(t, e.itemChildren), o = e.itemProps === !0 ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? wn(t, ["children"])[1] : t : void 0 : na(t, e.itemProps), l = {
    title: n,
    value: a,
    ...o
  };
  return {
    title: String(l.title ?? ""),
    value: l.value,
    props: l,
    children: Array.isArray(r) ? C0(e, r) : void 0,
    raw: t
  };
}
function C0(e, t) {
  const n = [];
  for (const a of t)
    n.push(ao(e, a));
  return n;
}
function Pv(e) {
  const t = _(() => C0(e, e.items));
  function n(r) {
    return r.map((o) => ao(e, o));
  }
  function a(r) {
    return r.map((o) => {
      let {
        props: l
      } = o;
      return l.value;
    });
  }
  return {
    items: t,
    transformIn: n,
    transformOut: a
  };
}
function cI(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function fI(e, t) {
  const n = na(t, e.itemType, "item"), a = cI(t) ? t : na(t, e.itemTitle), r = na(t, e.itemValue, void 0), o = na(t, e.itemChildren), l = e.itemProps === !0 ? wn(t, ["children"])[1] : na(t, e.itemProps), i = {
    title: a,
    value: r,
    ...l
  };
  return {
    type: n,
    title: i.title,
    value: i.value,
    props: i,
    children: n === "item" && o ? E0(e, o) : void 0,
    raw: t
  };
}
function E0(e, t) {
  const n = [];
  for (const a of t)
    n.push(fI(e, a));
  return n;
}
function dI(e) {
  return {
    items: _(() => E0(e, e.items))
  };
}
const Nu = oe()({
  name: "VList",
  props: {
    activeColor: String,
    activeClass: String,
    bgColor: String,
    disabled: Boolean,
    lines: {
      type: [Boolean, String],
      default: "one"
    },
    nav: Boolean,
    ...rI({
      selectStrategy: "single-leaf",
      openStrategy: "list"
    }),
    ...Pn(),
    ...Ft(),
    ...Kn(),
    ...It(),
    itemType: {
      type: String,
      default: "type"
    },
    ...O0(),
    ...ht(),
    ...je(),
    ...Ge(),
    ...Hn({
      variant: "text"
    })
  },
  emits: {
    "update:selected": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      items: a
    } = dI(e), {
      themeClasses: r
    } = at(e), {
      backgroundColorClasses: o,
      backgroundColorStyles: l
    } = Nt(ne(e, "bgColor")), {
      borderClasses: i
    } = jn(e), {
      densityClasses: s
    } = an(e), {
      dimensionStyles: u
    } = Xn(e), {
      elevationClasses: d
    } = zt(e), {
      roundedClasses: c
    } = kt(e), {
      open: f,
      select: v
    } = oI(e), y = _(() => e.lines ? `v-list--${e.lines}-line` : void 0), p = ne(e, "activeColor"), x = ne(e, "color");
    h0(), Vt({
      VListGroup: {
        activeColor: p,
        color: x
      },
      VListItem: {
        activeClass: ne(e, "activeClass"),
        activeColor: p,
        color: x,
        density: ne(e, "density"),
        disabled: ne(e, "disabled"),
        lines: ne(e, "lines"),
        nav: ne(e, "nav"),
        variant: ne(e, "variant")
      }
    });
    const O = R(!1), E = R();
    function S(g) {
      O.value = !0;
    }
    function N(g) {
      O.value = !1;
    }
    function V(g) {
      var b;
      !O.value && !(g.relatedTarget && ((b = E.value) != null && b.contains(g.relatedTarget))) && k();
    }
    function $(g) {
      if (E.value) {
        if (g.key === "ArrowDown")
          k("next");
        else if (g.key === "ArrowUp")
          k("prev");
        else if (g.key === "Home")
          k("first");
        else if (g.key === "End")
          k("last");
        else
          return;
        g.preventDefault();
      }
    }
    function k(g) {
      var C, T, A;
      if (!E.value)
        return;
      const b = [...E.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter((z) => !z.hasAttribute("disabled")), w = b.indexOf(document.activeElement);
      if (!g)
        E.value.contains(document.activeElement) || (C = b[0]) == null || C.focus();
      else if (g === "first")
        (T = b[0]) == null || T.focus();
      else if (g === "last")
        (A = b.at(-1)) == null || A.focus();
      else {
        let z, U = w;
        const B = g === "next" ? 1 : -1;
        do
          U += B, z = b[U];
        while ((!z || z.offsetParent == null) && U < b.length && U >= 0);
        z ? z.focus() : k(g === "next" ? "first" : "last");
      }
    }
    return fe(() => m(e.tag, {
      ref: E,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav
      }, r.value, o.value, i.value, s.value, d.value, y.value, c.value],
      style: [l.value, u.value],
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: S,
      onFocusout: N,
      onFocus: V,
      onKeydown: $
    }, {
      default: () => [m(x0, {
        items: a.value
      }, n)]
    })), {
      open: f,
      select: v,
      focus: k
    };
  }
}), vI = Gn("v-list-img"), mI = oe()({
  name: "VListItemAction",
  props: {
    start: Boolean,
    end: Boolean,
    ...je()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return fe(() => m(e.tag, {
      class: ["v-list-item-action", {
        "v-list-item-action--start": e.start,
        "v-list-item-action--end": e.end
      }]
    }, n)), {};
  }
}), hI = oe()({
  name: "VListItemMedia",
  props: {
    start: Boolean,
    end: Boolean,
    ...je()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return fe(() => m(e.tag, {
      class: ["v-list-item-media", {
        "v-list-item-media--start": e.start,
        "v-list-item-media--end": e.end
      }]
    }, n)), {};
  }
});
const $0 = Fe({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function P0(e, t) {
  const n = {}, a = (r) => () => {
    if (!Tt)
      return Promise.resolve(!0);
    const o = r === "openDelay";
    return n.closeDelay && window.clearTimeout(n.closeDelay), delete n.closeDelay, n.openDelay && window.clearTimeout(n.openDelay), delete n.openDelay, new Promise((l) => {
      const i = parseInt(e[r] ?? 0, 10);
      n[r] = window.setTimeout(() => {
        t == null || t(o), l(o);
      }, i);
    });
  };
  return {
    runCloseDelay: a("closeDelay"),
    runOpenDelay: a("openDelay")
  };
}
const dd = Symbol.for("vuetify:v-menu"), yI = Fe({
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...$0()
}, "v-overlay-activator");
function pI(e, t) {
  let {
    isActive: n,
    isTop: a
  } = t;
  const r = R();
  let o = !1, l = !1, i = !0;
  const s = _(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), u = _(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !s.value), {
    runOpenDelay: d,
    runCloseDelay: c
  } = P0(e, (S) => {
    S === (e.openOnHover && o || s.value && l) && !(e.openOnHover && n.value && !a.value) && (n.value !== S && (i = !0), n.value = S);
  }), f = {
    click: (S) => {
      S.stopPropagation(), r.value = S.currentTarget || S.target, n.value = !n.value;
    },
    mouseenter: (S) => {
      o = !0, r.value = S.currentTarget || S.target, d();
    },
    mouseleave: (S) => {
      o = !1, c();
    },
    focus: (S) => {
      Yc && !S.target.matches(":focus-visible") || (l = !0, S.stopPropagation(), r.value = S.currentTarget || S.target, d());
    },
    blur: (S) => {
      l = !1, S.stopPropagation(), c();
    }
  }, v = _(() => {
    const S = {};
    return u.value && (S.click = f.click), e.openOnHover && (S.mouseenter = f.mouseenter, S.mouseleave = f.mouseleave), s.value && (S.focus = f.focus, S.blur = f.blur), S;
  }), y = _(() => {
    const S = {};
    if (e.openOnHover && (S.mouseenter = () => {
      o = !0, d();
    }, S.mouseleave = () => {
      o = !1, c();
    }), e.closeOnContentClick) {
      const N = nt(dd, null);
      S.click = () => {
        n.value = !1, N == null || N.closeParents();
      };
    }
    return S;
  }), p = _(() => {
    const S = {};
    return e.openOnHover && (S.mouseenter = () => {
      i && (o = !0, i = !1, d());
    }, S.mouseleave = () => {
      o = !1, c();
    }), S;
  });
  pe(a, (S) => {
    S && (e.openOnHover && !o && (!s.value || !l) || s.value && !l && (!e.openOnHover || !o)) && (n.value = !1);
  });
  const x = R();
  ca(() => {
    x.value && Je(() => {
      const S = x.value;
      r.value = Lk(S) ? S.$el : S;
    });
  });
  const O = tn("useActivator");
  let E;
  return pe(() => !!e.activator, (S) => {
    S && Tt ? (E = xl(), E.run(() => {
      gI(e, O, {
        activatorEl: r,
        activatorEvents: v
      });
    })) : E && E.stop();
  }, {
    flush: "post",
    immediate: !0
  }), fn(() => {
    E == null || E.stop();
  }), {
    activatorEl: r,
    activatorRef: x,
    activatorEvents: v,
    contentEvents: y,
    scrimEvents: p
  };
}
function gI(e, t, n) {
  let {
    activatorEl: a,
    activatorEvents: r
  } = n;
  pe(() => e.activator, (s, u) => {
    if (u && s !== u) {
      const d = i(u);
      d && l(d);
    }
    s && Je(() => o());
  }, {
    immediate: !0
  }), pe(() => e.activatorProps, () => {
    o();
  }), fn(() => {
    l();
  });
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : i(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && (Object.entries(r.value).forEach((d) => {
      let [c, f] = d;
      s.addEventListener(c, f);
    }), Object.keys(u).forEach((d) => {
      u[d] == null ? s.removeAttribute(d) : s.setAttribute(d, u[d]);
    }));
  }
  function l() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : i(), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && (Object.entries(r.value).forEach((d) => {
      let [c, f] = d;
      s.removeEventListener(c, f);
    }), Object.keys(u).forEach((d) => {
      s.removeAttribute(d);
    }));
  }
  function i() {
    var d, c;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator, u;
    if (s)
      if (s === "parent") {
        let f = (c = (d = t == null ? void 0 : t.proxy) == null ? void 0 : d.$el) == null ? void 0 : c.parentNode;
        for (; f.hasAttribute("data-no-activator"); )
          f = f.parentNode;
        u = f;
      } else
        typeof s == "string" ? u = document.querySelector(s) : "$el" in s ? u = s.$el : u = s;
    return a.value = (u == null ? void 0 : u.nodeType) === Node.ELEMENT_NODE ? u : null, a.value;
  }
}
const Du = Fe({
  eager: Boolean
}, "lazy");
function Tv(e, t) {
  const n = R(!1), a = _(() => n.value || e.eager || t.value);
  pe(t, () => n.value = !0);
  function r() {
    e.eager || (n.value = !1);
  }
  return {
    isBooted: n,
    hasContent: a,
    onAfterLeave: r
  };
}
function dc(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function bI(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function My(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: n,
      align: a
    } = e, r = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, o = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return dc({
      x: r,
      y: o
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: n,
      align: a
    } = e, r = n === "left" ? 0 : n === "right" ? t.width : n, o = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return dc({
      x: r,
      y: o
    }, t);
  }
  return dc({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
const T0 = {
  static: SI,
  // specific viewport position, usually centered
  connected: xI
  // connected to a certain element
}, _I = Fe({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in T0
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "v-overlay-location-strategies");
function wI(e, t) {
  const n = R({}), a = R();
  Tt && (Tr(() => !!(t.isActive.value && e.locationStrategy), (o) => {
    var l, i;
    pe(() => e.locationStrategy, o), fn(() => {
      a.value = void 0;
    }), typeof e.locationStrategy == "function" ? a.value = (l = e.locationStrategy(t, e, n)) == null ? void 0 : l.updateLocation : a.value = (i = T0[e.locationStrategy](t, e, n)) == null ? void 0 : i.updateLocation;
  }), window.addEventListener("resize", r, {
    passive: !0
  }), fn(() => {
    window.removeEventListener("resize", r), a.value = void 0;
  }));
  function r(o) {
    var l;
    (l = a.value) == null || l.call(a, o);
  }
  return {
    contentStyles: n,
    updateLocation: a
  };
}
function SI() {
}
function kI(e) {
  const t = qd(e);
  return t.x -= parseFloat(e.style.left || 0), t.y -= parseFloat(e.style.top || 0), t;
}
function xI(e, t, n) {
  cx(e.activatorEl.value) && Object.assign(n.value, {
    position: "fixed"
  });
  const {
    preferredAnchor: r,
    preferredOrigin: o
  } = zd(() => {
    const y = Lc(t.location, e.isRtl.value), p = t.origin === "overlap" ? y : t.origin === "auto" ? zu(y) : Lc(t.origin, e.isRtl.value);
    return y.side === p.side && y.align === qu(p).align ? {
      preferredAnchor: Im(y),
      preferredOrigin: Im(p)
    } : {
      preferredAnchor: y,
      preferredOrigin: p
    };
  }), [l, i, s, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((y) => _(() => {
    const p = parseFloat(t[y]);
    return isNaN(p) ? 1 / 0 : p;
  })), d = _(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const y = t.offset.split(" ").map(parseFloat);
      return y.length < 2 && y.push(0), y;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let c = !1;
  const f = new ResizeObserver(() => {
    c && v();
  });
  pe([e.activatorEl, e.contentEl], (y, p) => {
    let [x, O] = y, [E, S] = p;
    E && f.unobserve(E), x && f.observe(x), S && f.unobserve(S), O && f.observe(O);
  }, {
    immediate: !0
  }), fn(() => {
    f.disconnect();
  });
  function v() {
    if (c = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => c = !0);
    }), !e.activatorEl.value || !e.contentEl.value)
      return;
    const y = e.activatorEl.value.getBoundingClientRect(), p = kI(e.contentEl.value), x = cs(e.contentEl.value), O = 12;
    x.length || (x.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (p.x += parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), p.y += parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const E = x.reduce((C, T) => {
      const A = T.getBoundingClientRect(), z = new io({
        x: T === document.documentElement ? 0 : A.x,
        y: T === document.documentElement ? 0 : A.y,
        width: T.clientWidth,
        height: T.clientHeight
      });
      return C ? new io({
        x: Math.max(C.left, z.left),
        y: Math.max(C.top, z.top),
        width: Math.min(C.right, z.right) - Math.max(C.left, z.left),
        height: Math.min(C.bottom, z.bottom) - Math.max(C.top, z.top)
      }) : z;
    }, void 0);
    E.x += O, E.y += O, E.width -= O * 2, E.height -= O * 2;
    let S = {
      anchor: r.value,
      origin: o.value
    };
    function N(C) {
      const T = new io(p), A = My(C.anchor, y), z = My(C.origin, T);
      let {
        x: U,
        y: B
      } = bI(A, z);
      switch (C.anchor.side) {
        case "top":
          B -= d.value[0];
          break;
        case "bottom":
          B += d.value[0];
          break;
        case "left":
          U -= d.value[0];
          break;
        case "right":
          U += d.value[0];
          break;
      }
      switch (C.anchor.align) {
        case "top":
          B -= d.value[1];
          break;
        case "bottom":
          B += d.value[1];
          break;
        case "left":
          U -= d.value[1];
          break;
        case "right":
          U += d.value[1];
          break;
      }
      return T.x += U, T.y += B, T.width = Math.min(T.width, s.value), T.height = Math.min(T.height, u.value), {
        overflows: Mm(T, E),
        x: U,
        y: B
      };
    }
    let V = 0, $ = 0;
    const k = {
      x: 0,
      y: 0
    }, g = {
      x: !1,
      y: !1
    };
    let b = -1;
    for (; ; ) {
      if (b++ > 10) {
        Hc("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: C,
        y: T,
        overflows: A
      } = N(S);
      V += C, $ += T, p.x += C, p.y += T;
      {
        const z = Am(S.anchor), U = A.x.before || A.x.after, B = A.y.before || A.y.after;
        let h = !1;
        if (["x", "y"].forEach((P) => {
          if (P === "x" && U && !g.x || P === "y" && B && !g.y) {
            const W = {
              anchor: {
                ...S.anchor
              },
              origin: {
                ...S.origin
              }
            }, H = P === "x" ? z === "y" ? qu : zu : z === "y" ? zu : qu;
            W.anchor = H(W.anchor), W.origin = H(W.origin);
            const {
              overflows: j
            } = N(W);
            (j[P].before <= A[P].before && j[P].after <= A[P].after || j[P].before + j[P].after < (A[P].before + A[P].after) / 2) && (S = W, h = g[P] = !0);
          }
        }), h)
          continue;
      }
      A.x.before && (V += A.x.before, p.x += A.x.before), A.x.after && (V -= A.x.after, p.x -= A.x.after), A.y.before && ($ += A.y.before, p.y += A.y.before), A.y.after && ($ -= A.y.after, p.y -= A.y.after);
      {
        const z = Mm(p, E);
        k.x = E.width - z.x.before - z.x.after, k.y = E.height - z.y.before - z.y.after, V += z.x.before, p.x += z.x.before, $ += z.y.before, p.y += z.y.before;
      }
      break;
    }
    const w = Am(S.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${S.anchor.side} ${S.anchor.align}`,
      transformOrigin: `${S.origin.side} ${S.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: ge(Ry($)),
      left: ge(Ry(V)),
      minWidth: ge(w === "y" ? Math.min(l.value, y.width) : l.value),
      maxWidth: ge(By(xn(k.x, l.value === 1 / 0 ? 0 : l.value, s.value))),
      maxHeight: ge(By(xn(k.y, i.value === 1 / 0 ? 0 : i.value, u.value)))
    }), {
      available: k,
      contentBox: p
    };
  }
  return pe(() => [r.value, o.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => v()), Je(() => {
    const y = v();
    if (!y)
      return;
    const {
      available: p,
      contentBox: x
    } = y;
    x.height > p.y && requestAnimationFrame(() => {
      v(), requestAnimationFrame(() => {
        v();
      });
    });
  }), {
    updateLocation: v
  };
}
function Ry(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function By(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let vd = !0;
const eu = [];
function OI(e) {
  !vd || eu.length ? (eu.push(e), md()) : (vd = !1, e(), md());
}
let Fy = -1;
function md() {
  cancelAnimationFrame(Fy), Fy = requestAnimationFrame(() => {
    const e = eu.shift();
    e && e(), eu.length ? md() : vd = !0;
  });
}
const Gi = {
  none: null,
  close: $I,
  block: PI,
  reposition: TI
}, CI = Fe({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Gi
  }
}, "v-overlay-scroll-strategies");
function EI(e, t) {
  if (!Tt)
    return;
  let n;
  ca(async () => {
    n == null || n.stop(), t.isActive.value && e.scrollStrategy && (n = xl(), await Je(), n.active && n.run(() => {
      var a;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (a = Gi[e.scrollStrategy]) == null || a.call(Gi, t, e, n);
    }));
  }), fn(() => {
    n == null || n.stop();
  });
}
function $I(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  N0(e.activatorEl.value ?? e.contentEl.value, t);
}
function PI(e, t) {
  var l;
  const n = (l = e.root.value) == null ? void 0 : l.offsetParent, a = [.../* @__PURE__ */ new Set([...cs(e.activatorEl.value, t.contained ? n : void 0), ...cs(e.contentEl.value, t.contained ? n : void 0)])].filter((i) => !i.classList.contains("v-overlay-scroll-blocked")), r = window.innerWidth - document.documentElement.offsetWidth, o = ((i) => Xd(i) && i)(n || document.documentElement);
  o && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((i, s) => {
    i.style.setProperty("--v-body-scroll-x", ge(-i.scrollLeft)), i.style.setProperty("--v-body-scroll-y", ge(-i.scrollTop)), i.style.setProperty("--v-scrollbar-offset", ge(r)), i.classList.add("v-overlay-scroll-blocked");
  }), fn(() => {
    a.forEach((i, s) => {
      const u = parseFloat(i.style.getPropertyValue("--v-body-scroll-x")), d = parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));
      i.style.removeProperty("--v-body-scroll-x"), i.style.removeProperty("--v-body-scroll-y"), i.style.removeProperty("--v-scrollbar-offset"), i.classList.remove("v-overlay-scroll-blocked"), i.scrollLeft = -u, i.scrollTop = -d;
    }), o && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function TI(e, t, n) {
  let a = !1, r = -1, o = -1;
  function l(i) {
    OI(() => {
      var d, c;
      const s = performance.now();
      (c = (d = e.updateLocation).value) == null || c.call(d, i), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  o = (typeof requestIdleCallback > "u" ? (i) => i() : requestIdleCallback)(() => {
    n.run(() => {
      N0(e.activatorEl.value ?? e.contentEl.value, (i) => {
        a ? (cancelAnimationFrame(r), r = requestAnimationFrame(() => {
          r = requestAnimationFrame(() => {
            l(i);
          });
        })) : l(i);
      });
    });
  }), fn(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(o), cancelAnimationFrame(r);
  });
}
function N0(e, t) {
  const n = [document, ...cs(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, {
      passive: !0
    });
  }), fn(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
function D0() {
  if (!Tt)
    return R(!1);
  const {
    ssr: e
  } = $a();
  if (e) {
    const t = R(!1);
    return ft(() => {
      t.value = !0;
    }), t;
  } else
    return R(!0);
}
function Il() {
  const t = tn("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const Ly = Symbol.for("vuetify:stack"), Ho = Ct([]);
function NI(e, t, n) {
  const a = tn("useStack"), r = !n, o = nt(Ly, void 0), l = Ct({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Bt(Ly, l);
  const i = R(+t.value);
  Tr(e, () => {
    var c;
    const d = (c = Ho.at(-1)) == null ? void 0 : c[1];
    i.value = d ? d + 10 : +t.value, r && Ho.push([a.uid, i.value]), o == null || o.activeChildren.add(a.uid), fn(() => {
      if (r) {
        const f = Te(Ho).findIndex((v) => v[0] === a.uid);
        Ho.splice(f, 1);
      }
      o == null || o.activeChildren.delete(a.uid);
    });
  });
  const s = R(!0);
  r && ca(() => {
    var c;
    const d = ((c = Ho.at(-1)) == null ? void 0 : c[0]) === a.uid;
    setTimeout(() => s.value = d);
  });
  const u = _(() => !l.activeChildren.size);
  return {
    globalTop: Ol(s),
    localTop: u,
    stackStyles: _(() => ({
      zIndex: i.value
    }))
  };
}
function DI(e) {
  return {
    teleportTarget: _(() => {
      const n = e.value;
      if (n === !0 || !Tt)
        return;
      const a = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (a == null) {
        ie(`Unable to locate target ${n}`);
        return;
      }
      let r = a.querySelector(":scope > .v-overlay-container");
      return r || (r = document.createElement("div"), r.className = "v-overlay-container", a.appendChild(r)), r;
    })
  };
}
function VI() {
  return !0;
}
function V0(e, t, n) {
  if (!e || I0(e, n) === !1)
    return !1;
  const a = Qg(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target)
    return !1;
  const r = (typeof n.value == "object" && n.value.include || (() => []))();
  return r.push(t), !r.some((o) => o == null ? void 0 : o.contains(e.target));
}
function I0(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || VI)(e);
}
function II(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  t._clickOutside.lastMousedownWasOutside && V0(e, t, n) && setTimeout(() => {
    I0(e, n) && a && a(e);
  }, 0);
}
function jy(e, t) {
  const n = Qg(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const AI = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const n = (r) => II(r, e, t), a = (r) => {
      e._clickOutside.lastMousedownWasOutside = V0(r, e, t);
    };
    jy(e, (r) => {
      r.addEventListener("click", n, !0), r.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !0
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: n,
      onMousedown: a
    };
  },
  unmounted(e, t) {
    e._clickOutside && (jy(e, (n) => {
      var o;
      if (!n || !((o = e._clickOutside) != null && o[t.instance.$.uid]))
        return;
      const {
        onClick: a,
        onMousedown: r
      } = e._clickOutside[t.instance.$.uid];
      n.removeEventListener("click", a, !0), n.removeEventListener("mousedown", r, !0);
    }), delete e._clickOutside[t.instance.$.uid]);
  }
};
function MI(e) {
  const {
    modelValue: t,
    color: n,
    ...a
  } = e;
  return m(Jt, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && m("div", ve({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const Al = Fe({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [String, Boolean],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...yI(),
  ...Kn(),
  ...Du(),
  ..._I(),
  ...CI(),
  ...Ge(),
  ...Ta()
}, "v-overlay"), Do = oe()({
  name: "VOverlay",
  directives: {
    ClickOutside: AI
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...Al()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a,
      emit: r
    } = t;
    const o = He(e, "modelValue"), l = _({
      get: () => o.value,
      set: (W) => {
        W && e.disabled || (o.value = W);
      }
    }), {
      teleportTarget: i
    } = DI(_(() => e.attach || e.contained)), {
      themeClasses: s
    } = at(e), {
      rtlClasses: u,
      isRtl: d
    } = Pa(), {
      hasContent: c,
      onAfterLeave: f
    } = Tv(e, l), v = Nt(_(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: y,
      localTop: p,
      stackStyles: x
    } = NI(l, ne(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: O,
      activatorRef: E,
      activatorEvents: S,
      contentEvents: N,
      scrimEvents: V
    } = pI(e, {
      isActive: l,
      isTop: p
    }), {
      dimensionStyles: $
    } = Xn(e), k = D0(), {
      scopeId: g
    } = Il();
    pe(() => e.disabled, (W) => {
      W && (l.value = !1);
    });
    const b = R(), w = R(), {
      contentStyles: C,
      updateLocation: T
    } = wI(e, {
      isRtl: d,
      contentEl: w,
      activatorEl: O,
      isActive: l
    });
    EI(e, {
      root: b,
      contentEl: w,
      activatorEl: O,
      isActive: l,
      updateLocation: T
    });
    function A(W) {
      r("click:outside", W), e.persistent ? P() : l.value = !1;
    }
    function z() {
      return l.value && y.value;
    }
    Tt && pe(l, (W) => {
      W ? window.addEventListener("keydown", U) : window.removeEventListener("keydown", U);
    }, {
      immediate: !0
    });
    function U(W) {
      W.key === "Escape" && y.value && (e.persistent ? P() : l.value = !1);
    }
    const B = n0();
    Tr(() => e.closeOnBack, () => {
      RV(B, (W) => {
        y.value && l.value ? (W(!1), e.persistent ? P() : l.value = !1) : W();
      });
    });
    const h = R();
    pe(() => l.value && (e.absolute || e.contained) && i.value == null, (W) => {
      if (W) {
        const H = Zg(b.value);
        H && H !== document.scrollingElement && (h.value = H.scrollTop);
      }
    });
    function P() {
      e.noClickAnimation || w.value && yr(w.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: yl
      });
    }
    return fe(() => {
      var W;
      return m(ye, null, [(W = n.activator) == null ? void 0 : W.call(n, {
        isActive: l.value,
        props: ve({
          ref: E
        }, Fu(S.value), e.activatorProps)
      }), k.value && m(tg, {
        disabled: !i.value,
        to: i.value
      }, {
        default: () => [c.value && m("div", ve({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": l.value,
            "v-overlay--contained": e.contained
          }, s.value, u.value],
          style: [x.value, {
            top: ge(h.value)
          }],
          ref: b
        }, g, a), [m(MI, ve({
          color: v,
          modelValue: l.value && !!e.scrim
        }, Fu(V.value)), null), m(la, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: O.value,
          onAfterLeave: () => {
            f(), r("afterLeave");
          }
        }, {
          default: () => {
            var H;
            return [st(m("div", ve({
              ref: w,
              class: ["v-overlay__content", e.contentClass],
              style: [$.value, C.value]
            }, Fu(N.value), e.contentProps), [(H = n.default) == null ? void 0 : H.call(n, {
              isActive: l
            })]), [[gn, l.value], [bn("click-outside"), {
              handler: A,
              closeConditional: z,
              include: () => [O.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: O,
      animateClick: P,
      contentEl: w,
      globalTop: y,
      localTop: p,
      updateLocation: T
    };
  }
});
function Vu(e) {
  return wn(e, Object.keys(Do.props));
}
const Iu = oe()({
  name: "VMenu",
  props: {
    // TODO
    // disableKeys: Boolean,
    id: String,
    ...Ar(Al({
      closeDelay: 250,
      closeOnContentClick: !0,
      locationStrategy: "connected",
      openDelay: 300,
      scrim: !1,
      scrollStrategy: "reposition",
      transition: {
        component: wu
      }
    }), ["absolute"])
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = He(e, "modelValue"), {
      scopeId: r
    } = Il(), o = nn(), l = _(() => e.id || `v-menu-${o}`), i = R(), s = nt(dd, null), u = R(0);
    Bt(dd, {
      register() {
        ++u.value;
      },
      unregister() {
        --u.value;
      },
      closeParents() {
        setTimeout(() => {
          u.value || (a.value = !1, s == null || s.closeParents());
        }, 40);
      }
    }), pe(a, (f) => {
      f ? s == null || s.register() : s == null || s.unregister();
    });
    function d() {
      s == null || s.closeParents();
    }
    const c = _(() => ve({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-owns": l.value
    }, e.activatorProps));
    return fe(() => {
      const [f] = Vu(e);
      return m(Do, ve({
        ref: i,
        class: ["v-menu"]
      }, f, {
        modelValue: a.value,
        "onUpdate:modelValue": (v) => a.value = v,
        absolute: !0,
        activatorProps: c.value,
        "onClick:outside": d
      }, r), {
        activator: n.activator,
        default: function() {
          for (var v = arguments.length, y = new Array(v), p = 0; p < v; p++)
            y[p] = arguments[p];
          return m(lt, {
            root: !0
          }, {
            default: () => {
              var x;
              return [(x = n.default) == null ? void 0 : x.call(n, ...y)];
            }
          });
        }
      });
    }), Qn({
      id: l,
      ΨopenChildren: u
    }, i);
  }
}), Nv = Fe({
  chips: Boolean,
  closableChips: Boolean,
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  menu: Boolean,
  menuIcon: {
    type: Me,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  valueComparator: {
    type: Function,
    default: bo
  },
  ...O0({
    itemChildren: !1
  })
}, "v-select"), RI = oe()({
  name: "VSelect",
  props: {
    ...Nv(),
    ...Ar(Pu({
      modelValue: null
    }), ["validationValue", "dirty", "appendInnerIcon"]),
    ...Ta({
      transition: {
        component: wu
      }
    })
  },
  emits: {
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = Ln(), r = R(), o = R(), l = He(e, "menu"), i = _({
      get: () => l.value,
      set: (k) => {
        var g;
        l.value && !k && ((g = o.value) != null && g.ΨopenChildren) || (l.value = k);
      }
    }), {
      items: s,
      transformIn: u,
      transformOut: d
    } = Pv(e), c = He(e, "modelValue", [], (k) => u(Rn(k)), (k) => {
      const g = d(k);
      return e.multiple ? g : g[0] ?? null;
    }), f = Eu(), v = _(() => c.value.map((k) => s.value.find((g) => e.valueComparator(g.value, k.value)) || k)), y = _(() => v.value.map((k) => k.props.value)), p = _(() => e.hideSelected ? s.value.filter((k) => !v.value.some((g) => g === k)) : s.value), x = R();
    function O(k) {
      e.openOnClear && (i.value = !0);
    }
    function E() {
      e.hideNoData && !s.value.length || e.readonly || f != null && f.isReadonly.value || (i.value = !i.value);
    }
    function S(k) {
      var g, b, w, C;
      e.readonly || f != null && f.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(k.key) && k.preventDefault(), ["Enter", "ArrowDown", " "].includes(k.key) && (i.value = !0), ["Escape", "Tab"].includes(k.key) && (i.value = !1), k.key === "ArrowDown" ? (g = x.value) == null || g.focus("next") : k.key === "ArrowUp" ? (b = x.value) == null || b.focus("prev") : k.key === "Home" ? (w = x.value) == null || w.focus("first") : k.key === "End" && ((C = x.value) == null || C.focus("last")));
    }
    function N(k) {
      if (e.multiple) {
        const g = y.value.findIndex((b) => e.valueComparator(b, k.value));
        if (g === -1)
          c.value = [...c.value, k];
        else {
          const b = [...c.value];
          b.splice(g, 1), c.value = b;
        }
      } else
        c.value = [k], i.value = !1;
    }
    function V(k) {
      var g;
      (g = x.value) != null && g.$el.contains(k.relatedTarget) || (i.value = !1);
    }
    function $(k) {
      var g;
      k.relatedTarget == null && ((g = r.value) == null || g.focus());
    }
    return fe(() => {
      const k = !!(e.chips || n.chip), g = !!(!e.hideNoData || p.value.length || n.prepend || n.append || n["no-data"]), [b] = Ov(e);
      return m(Nl, ve({
        ref: r
      }, b, {
        modelValue: c.value.map((w) => w.props.value).join(", "),
        "onUpdate:modelValue": (w) => {
          w == null && (c.value = []);
        },
        validationValue: c.externalValue,
        dirty: c.value.length > 0,
        class: ["v-select", {
          "v-select--active-menu": i.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": c.value.length
        }],
        appendInnerIcon: e.menuIcon,
        readonly: !0,
        "onClick:clear": O,
        "onMousedown:control": E,
        onBlur: V,
        onKeydown: S
      }), {
        ...n,
        default: () => m(ye, null, [m(Iu, ve({
          ref: o,
          modelValue: i.value,
          "onUpdate:modelValue": (w) => i.value = w,
          activator: "parent",
          contentClass: "v-select__content",
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition
        }, e.menuProps), {
          default: () => [g && m(Nu, {
            ref: x,
            selected: y.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (w) => w.preventDefault(),
            onFocusout: $
          }, {
            default: () => {
              var w, C, T;
              return [!p.value.length && !e.hideNoData && (((w = n["no-data"]) == null ? void 0 : w.call(n)) ?? m(Oa, {
                title: a(e.noDataText)
              }, null)), (C = n["prepend-item"]) == null ? void 0 : C.call(n), p.value.map((A, z) => {
                var U;
                return n.item ? (U = n.item) == null ? void 0 : U.call(n, {
                  item: A,
                  index: z,
                  props: ve(A.props, {
                    onClick: () => N(A)
                  })
                }) : m(Oa, ve({
                  key: z
                }, A.props, {
                  onClick: () => N(A)
                }), {
                  prepend: (B) => {
                    let {
                      isSelected: h
                    } = B;
                    return e.multiple && !e.hideSelected ? m(No, {
                      modelValue: h,
                      ripple: !1
                    }, null) : void 0;
                  }
                });
              }), (T = n["append-item"]) == null ? void 0 : T.call(n)];
            }
          })]
        }), v.value.map((w, C) => {
          var z;
          function T(U) {
            U.stopPropagation(), U.preventDefault(), N(w);
          }
          const A = {
            "onClick:close": T,
            modelValue: !0,
            "onUpdate:modelValue": void 0
          };
          return m("div", {
            key: w.value,
            class: "v-select__selection"
          }, [k ? n.chip ? m(lt, {
            key: "chip-defaults",
            defaults: {
              VChip: {
                closable: e.closableChips,
                size: "small",
                text: w.title
              }
            }
          }, {
            default: () => {
              var U;
              return [(U = n.chip) == null ? void 0 : U.call(n, {
                item: w,
                index: C,
                props: A
              })];
            }
          }) : m(Vl, ve({
            key: "chip",
            closable: e.closableChips,
            size: "small",
            text: w.title
          }, A), null) : ((z = n.selection) == null ? void 0 : z.call(n, {
            item: w,
            index: C
          })) ?? m("span", {
            class: "v-select__selection-text"
          }, [w.title, e.multiple && C < v.value.length - 1 && m("span", {
            class: "v-select__selection-comma"
          }, [wt(",")])])]);
        })])
      });
    }), Qn({
      menu: i,
      select: N
    }, r);
  }
}), BI = (e, t, n) => e == null || t == null ? -1 : e.toString().toLocaleLowerCase().indexOf(t.toString().toLocaleLowerCase()), A0 = Fe({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function FI(e, t, n) {
  var i;
  const a = [], r = (n == null ? void 0 : n.default) ?? BI, o = n != null && n.filterKeys ? Rn(n.filterKeys) : !1, l = Object.keys((n == null ? void 0 : n.customKeyFilter) ?? {}).length;
  if (!(e != null && e.length))
    return a;
  e:
    for (let s = 0; s < e.length; s++) {
      const u = e[s], d = {}, c = {};
      let f = -1;
      if (t && !(n != null && n.noFilter)) {
        if (typeof u == "object") {
          const p = o || Object.keys(u);
          for (const x of p) {
            const O = na(u, x, u), E = (i = n == null ? void 0 : n.customKeyFilter) == null ? void 0 : i[x];
            if (f = E ? E(O, t, u) : r(O, t, u), f !== -1 && f !== !1)
              E ? d[x] = f : c[x] = f;
            else if ((n == null ? void 0 : n.filterMode) === "every")
              continue e;
          }
        } else
          f = r(u, t, u), f !== -1 && f !== !1 && (c.title = f);
        const v = Object.keys(c).length, y = Object.keys(d).length;
        if (!v && !y || (n == null ? void 0 : n.filterMode) === "union" && y !== l && !v || (n == null ? void 0 : n.filterMode) === "intersection" && (y !== l || !v))
          continue;
      }
      a.push({
        index: s,
        matches: {
          ...c,
          ...d
        }
      });
    }
  return a;
}
function M0(e, t, n, a) {
  const r = _(() => typeof (n == null ? void 0 : n.value) != "string" && typeof (n == null ? void 0 : n.value) != "number" ? "" : String(n.value)), o = R([]), l = R(/* @__PURE__ */ new Map());
  ca(() => {
    o.value = [], l.value = /* @__PURE__ */ new Map();
    const s = M(t);
    FI(s, r.value, {
      customKeyFilter: e.customKeyFilter,
      default: e.customFilter,
      filterKeys: M(a == null ? void 0 : a.filterKeys) ?? e.filterKeys,
      filterMode: e.filterMode,
      noFilter: e.noFilter
    }).forEach((d) => {
      let {
        index: c,
        matches: f
      } = d;
      const v = s[c];
      o.value.push(v), l.value.set(v.value, f);
    });
  });
  function i(s) {
    return l.value.get(s.value);
  }
  return {
    filteredItems: o,
    filteredMatches: l,
    getMatches: i
  };
}
function LI(e, t, n) {
  if (t == null)
    return e;
  if (Array.isArray(t))
    throw new Error("Multiple matches is not implemented");
  return typeof t == "number" && ~t ? m(ye, null, [m("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(0, t)]), m("span", {
    class: "v-autocomplete__mask"
  }, [e.substr(t, n)]), m("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(t + n)])]) : e;
}
const jI = oe()({
  name: "VAutocomplete",
  props: {
    // TODO: implement post keyboard support
    // autoSelectFirst: Boolean,
    search: String,
    ...A0({
      filterKeys: ["title"]
    }),
    ...Nv(),
    ...Ar(Pu({
      modelValue: null
    }), ["validationValue", "dirty", "appendInnerIcon"]),
    ...Ta({
      transition: !1
    })
  },
  emits: {
    "update:search": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = Ln(), r = R(), o = R(!1), l = R(!0), i = R(), s = He(e, "menu"), u = _({
      get: () => s.value,
      set: (U) => {
        var B;
        s.value && !U && ((B = i.value) != null && B.ΨopenChildren) || (s.value = U);
      }
    }), {
      items: d,
      transformIn: c,
      transformOut: f
    } = Pv(e), v = He(e, "search", ""), y = He(e, "modelValue", [], (U) => c(Rn(U)), (U) => {
      const B = f(U);
      return e.multiple ? B : B[0] ?? null;
    }), p = Eu(), {
      filteredItems: x,
      getMatches: O
    } = M0(e, d, _(() => l.value ? void 0 : v.value)), E = _(() => y.value.map((U) => d.value.find((B) => e.valueComparator(B.value, U.value)) || U)), S = _(() => e.hideSelected ? x.value.filter((U) => !E.value.some((B) => B.value === U.value)) : x.value), N = _(() => E.value.map((U) => U.props.value)), V = R();
    function $(U) {
      e.openOnClear && (u.value = !0), v.value = "";
    }
    function k() {
      e.hideNoData && !d.value.length || e.readonly || p != null && p.isReadonly.value || (u.value = !0);
    }
    function g(U) {
      var B, h;
      e.readonly || p != null && p.isReadonly.value || (["Enter", "ArrowDown", "ArrowUp"].includes(U.key) && U.preventDefault(), ["Enter", "ArrowDown"].includes(U.key) && (u.value = !0), ["Escape"].includes(U.key) && (u.value = !1), ["Enter", "Escape", "Tab"].includes(U.key) && (l.value = !0), U.key === "ArrowDown" ? (B = V.value) == null || B.focus("next") : U.key === "ArrowUp" && ((h = V.value) == null || h.focus("prev")));
    }
    function b(U) {
      v.value = U.target.value;
    }
    function w() {
      o.value && (l.value = !0);
    }
    function C(U) {
      o.value = !0;
    }
    function T(U) {
      var B;
      U.relatedTarget == null && ((B = r.value) == null || B.focus());
    }
    const A = R(!1);
    function z(U) {
      if (e.multiple) {
        const B = N.value.findIndex((h) => e.valueComparator(h, U.value));
        if (B === -1)
          y.value = [...y.value, U], v.value = "";
        else {
          const h = [...y.value];
          h.splice(B, 1), y.value = h;
        }
      } else
        y.value = [U], A.value = !0, n.selection || (v.value = U.title), u.value = !1, l.value = !0, Je(() => A.value = !1);
    }
    return pe(o, (U) => {
      var B;
      U ? (A.value = !0, v.value = e.multiple || n.selection ? "" : String(((B = E.value.at(-1)) == null ? void 0 : B.props.title) ?? ""), l.value = !0, Je(() => A.value = !1)) : (u.value = !1, v.value = "");
    }), pe(v, (U) => {
      !o.value || A.value || (U && (u.value = !0), l.value = !U);
    }), fe(() => {
      const U = !!(e.chips || n.chip), B = !!(!e.hideNoData || S.value.length || n.prepend || n.append || n["no-data"]), [h] = Ov(e);
      return m(Nl, ve({
        ref: r
      }, h, {
        modelValue: v.value,
        "onUpdate:modelValue": (P) => {
          P == null && (y.value = []);
        },
        validationValue: y.externalValue,
        dirty: y.value.length > 0,
        onInput: b,
        class: ["v-autocomplete", {
          "v-autocomplete--active-menu": u.value,
          "v-autocomplete--chips": !!e.chips,
          [`v-autocomplete--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-autocomplete--selection-slot": !!n.selection
        }],
        appendInnerIcon: e.menuIcon,
        readonly: e.readonly,
        "onClick:clear": $,
        "onMousedown:control": k,
        onFocus: () => o.value = !0,
        onBlur: () => o.value = !1,
        onKeydown: g
      }), {
        ...n,
        default: () => m(ye, null, [m(Iu, ve({
          ref: i,
          modelValue: u.value,
          "onUpdate:modelValue": (P) => u.value = P,
          activator: "parent",
          contentClass: "v-autocomplete__content",
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterLeave: w
        }, e.menuProps), {
          default: () => [B && m(Nu, {
            ref: V,
            selected: N.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (P) => P.preventDefault(),
            onFocusin: C,
            onFocusout: T
          }, {
            default: () => {
              var P, W, H;
              return [!S.value.length && !e.hideNoData && (((P = n["no-data"]) == null ? void 0 : P.call(n)) ?? m(Oa, {
                title: a(e.noDataText)
              }, null)), (W = n["prepend-item"]) == null ? void 0 : W.call(n), S.value.map((j, X) => {
                var Q;
                return ((Q = n.item) == null ? void 0 : Q.call(n, {
                  item: j,
                  index: X,
                  props: ve(j.props, {
                    onClick: () => z(j)
                  })
                })) ?? m(Oa, ve({
                  key: X
                }, j.props, {
                  onClick: () => z(j)
                }), {
                  prepend: (Y) => {
                    let {
                      isSelected: I
                    } = Y;
                    return e.multiple && !e.hideSelected ? m(No, {
                      modelValue: I,
                      ripple: !1
                    }, null) : void 0;
                  },
                  title: () => {
                    var Y, I;
                    return l.value ? j.title : LI(j.title, (Y = O(j)) == null ? void 0 : Y.title, ((I = v.value) == null ? void 0 : I.length) ?? 0);
                  }
                });
              }), (H = n["append-item"]) == null ? void 0 : H.call(n)];
            }
          })]
        }), E.value.map((P, W) => {
          var X;
          function H(Q) {
            Q.stopPropagation(), Q.preventDefault(), z(P);
          }
          const j = {
            "onClick:close": H,
            modelValue: !0,
            "onUpdate:modelValue": void 0
          };
          return m("div", {
            key: P.value,
            class: "v-autocomplete__selection"
          }, [U ? n.chip ? m(lt, {
            key: "chip-defaults",
            defaults: {
              VChip: {
                closable: e.closableChips,
                size: "small",
                text: P.title
              }
            }
          }, {
            default: () => {
              var Q;
              return [(Q = n.chip) == null ? void 0 : Q.call(n, {
                item: P,
                index: W,
                props: j
              })];
            }
          }) : m(Vl, ve({
            key: "chip",
            closable: e.closableChips,
            size: "small",
            text: P.title
          }, j), null) : ((X = n.selection) == null ? void 0 : X.call(n, {
            item: P,
            index: W
          })) ?? m("span", {
            class: "v-autocomplete__selection-text"
          }, [P.title, e.multiple && W < E.value.length - 1 && m("span", {
            class: "v-autocomplete__selection-comma"
          }, [wt(",")])])]);
        })])
      });
    }), Qn({
      isFocused: o,
      isPristine: l,
      menu: u,
      search: v,
      filteredItems: x,
      select: z
    }, r);
  }
});
const HI = oe()({
  name: "VBadge",
  inheritAttrs: !1,
  props: {
    bordered: Boolean,
    color: String,
    content: [Number, String],
    dot: Boolean,
    floating: Boolean,
    icon: Me,
    inline: Boolean,
    label: {
      type: String,
      default: "$vuetify.badge"
    },
    max: [Number, String],
    modelValue: {
      type: Boolean,
      default: !0
    },
    offsetX: [Number, String],
    offsetY: [Number, String],
    textColor: String,
    ...Ja({
      location: "top end"
    }),
    ...ht(),
    ...je(),
    ...Ge(),
    ...Ta({
      transition: "scale-rotate-transition"
    })
  },
  setup(e, t) {
    const {
      backgroundColorClasses: n,
      backgroundColorStyles: a
    } = Nt(ne(e, "color")), {
      roundedClasses: r
    } = kt(e), {
      t: o
    } = Ln(), {
      textColorClasses: l,
      textColorStyles: i
    } = vn(ne(e, "textColor")), {
      themeClasses: s
    } = rb(), {
      locationStyles: u
    } = er(e, !0, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? +(e.offsetY ?? 0) : ["left", "right"].includes(d) ? +(e.offsetX ?? 0) : 0));
    return fe(() => {
      const d = Number(e.content), c = !e.max || isNaN(d) ? e.content : d <= e.max ? d : `${e.max}+`, [f, v] = wn(t.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return m(e.tag, ve({
        class: ["v-badge", {
          "v-badge--bordered": e.bordered,
          "v-badge--dot": e.dot,
          "v-badge--floating": e.floating,
          "v-badge--inline": e.inline
        }]
      }, v), {
        default: () => {
          var y, p;
          return [m("div", {
            class: "v-badge__wrapper"
          }, [(p = (y = t.slots).default) == null ? void 0 : p.call(y), m(la, {
            transition: e.transition
          }, {
            default: () => {
              var x, O;
              return [st(m("span", ve({
                class: ["v-badge__badge", s.value, n.value, r.value, l.value],
                style: [a.value, i.value, e.inline ? {} : u.value],
                "aria-atomic": "true",
                "aria-label": o(e.label, d),
                "aria-live": "polite",
                role: "status"
              }, f), [e.dot ? void 0 : t.slots.badge ? (O = (x = t.slots).badge) == null ? void 0 : O.call(x) : e.icon ? m(Pt, {
                icon: e.icon
              }, null) : c]), [[gn, e.modelValue]])];
            }
          })])];
        }
      });
    }), {};
  }
});
const R0 = oe()({
  name: "VBannerActions",
  props: {
    color: String,
    density: String
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Vt({
      VBtn: {
        color: e.color,
        density: e.density,
        variant: "text"
      }
    }), fe(() => {
      var a;
      return m("div", {
        class: "v-banner-actions"
      }, [(a = n.default) == null ? void 0 : a.call(n)]);
    }), {};
  }
}), B0 = Gn("v-banner-text"), UI = oe()({
  name: "VBanner",
  props: {
    avatar: String,
    color: String,
    icon: Me,
    lines: String,
    stacked: Boolean,
    sticky: Boolean,
    text: String,
    ...Pn(),
    ...Ft(),
    ...Kn(),
    ...It(),
    ...Ja(),
    ...Eo(),
    ...ht(),
    ...je(),
    ...Ge()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      borderClasses: a
    } = jn(e), {
      densityClasses: r
    } = an(e), {
      mobile: o
    } = $a(), {
      dimensionStyles: l
    } = Xn(e), {
      elevationClasses: i
    } = zt(e), {
      locationStyles: s
    } = er(e), {
      positionClasses: u
    } = $o(e), {
      roundedClasses: d
    } = kt(e), {
      themeClasses: c
    } = at(e), f = ne(e, "color"), v = ne(e, "density");
    Vt({
      VBannerActions: {
        color: f,
        density: v
      }
    }), fe(() => {
      const y = !!(e.text || n.text), p = !!(e.avatar || e.icon), x = !!(p || n.prepend);
      return m(e.tag, {
        class: ["v-banner", {
          "v-banner--stacked": e.stacked || o.value,
          "v-banner--sticky": e.sticky,
          [`v-banner--${e.lines}-line`]: !!e.lines
        }, a.value, r.value, i.value, u.value, d.value, c.value],
        style: [l.value, s.value],
        role: "banner"
      }, {
        default: () => {
          var O;
          return [x && m("div", {
            key: "prepend",
            class: "v-banner__prepend"
          }, [n.prepend ? m(lt, {
            key: "prepend-defaults",
            disabled: !p,
            defaults: {
              VAvatar: {
                color: f.value,
                density: v.value,
                icon: e.icon,
                image: e.avatar
              }
            }
          }, n.prepend) : m(Ga, {
            key: "prepend-avatar",
            color: f.value,
            density: v.value,
            icon: e.icon,
            image: e.avatar
          }, null)]), m("div", {
            class: "v-banner__content"
          }, [y && m(B0, {
            key: "text"
          }, {
            default: () => {
              var E;
              return [((E = n.text) == null ? void 0 : E.call(n)) ?? e.text];
            }
          }), (O = n.default) == null ? void 0 : O.call(n)]), n.actions && m(R0, {
            key: "actions"
          }, n.actions)];
        }
      });
    });
  }
});
const YI = oe()({
  name: "VBottomNavigation",
  props: {
    bgColor: String,
    color: String,
    grow: Boolean,
    mode: {
      type: String,
      validator: (e) => !e || ["horizontal", "shift"].includes(e)
    },
    height: {
      type: [Number, String],
      default: 56
    },
    active: {
      type: Boolean,
      default: !0
    },
    ...Pn(),
    ...Ft(),
    ...It(),
    ...ht(),
    ..._o({
      name: "bottom-navigation"
    }),
    ...je({
      tag: "header"
    }),
    ...xo({
      modelValue: !0,
      selectedClass: "v-btn--selected"
    }),
    ...Ge()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = rb(), {
      borderClasses: r
    } = jn(e), {
      backgroundColorClasses: o,
      backgroundColorStyles: l
    } = Nt(ne(e, "bgColor")), {
      densityClasses: i
    } = an(e), {
      elevationClasses: s
    } = zt(e), {
      roundedClasses: u
    } = kt(e), {
      ssrBootStyles: d
    } = ko(), c = _(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), f = ne(e, "active"), {
      layoutItemStyles: v
    } = wo({
      id: e.name,
      order: _(() => parseInt(e.order, 10)),
      position: _(() => "bottom"),
      layoutSize: _(() => f.value ? c.value : 0),
      elementSize: c,
      active: f,
      absolute: ne(e, "absolute")
    });
    return Lr(e, gv), Vt({
      VBtn: {
        color: ne(e, "color"),
        density: ne(e, "density"),
        stacked: _(() => e.mode !== "horizontal"),
        variant: "text"
      }
    }, {
      scoped: !0
    }), fe(() => m(e.tag, {
      class: ["v-bottom-navigation", {
        "v-bottom-navigation--active": f.value,
        "v-bottom-navigation--grow": e.grow,
        "v-bottom-navigation--shift": e.mode === "shift"
      }, a.value, o.value, r.value, i.value, s.value, u.value],
      style: [l.value, v.value, {
        height: ge(c.value),
        transform: `translateY(${ge(f.value ? 0 : 100, "%")})`
      }, d.value]
    }, {
      default: () => [n.default && m("div", {
        class: "v-bottom-navigation__content"
      }, [n.default()])]
    })), {};
  }
});
const F0 = oe()({
  name: "VBreadcrumbsDivider",
  props: {
    divider: [Number, String]
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return fe(() => {
      var a;
      return m("li", {
        class: "v-breadcrumbs-divider"
      }, [((a = n == null ? void 0 : n.default) == null ? void 0 : a.call(n)) ?? e.divider]);
    }), {};
  }
}), L0 = oe()({
  name: "VBreadcrumbsItem",
  props: {
    active: Boolean,
    activeClass: String,
    activeColor: String,
    color: String,
    disabled: Boolean,
    title: String,
    ...Po(),
    ...je({
      tag: "li"
    })
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    const r = Pl(e, a), o = _(() => {
      var u;
      return e.active || ((u = r.isActive) == null ? void 0 : u.value);
    }), l = _(() => o.value ? e.activeColor : e.color), {
      textColorClasses: i,
      textColorStyles: s
    } = vn(l);
    return fe(() => {
      const u = r.isLink.value ? "a" : e.tag;
      return m(u, {
        class: ["v-breadcrumbs-item", {
          "v-breadcrumbs-item--active": o.value,
          "v-breadcrumbs-item--disabled": e.disabled,
          "v-breadcrumbs-item--link": r.isLink.value,
          [`${e.activeClass}`]: o.value && e.activeClass
        }, i.value],
        style: [s.value],
        href: r.href.value,
        "aria-current": o.value ? "page" : void 0,
        onClick: r.navigate
      }, {
        default: () => {
          var d;
          return [((d = n.default) == null ? void 0 : d.call(n)) ?? e.title];
        }
      });
    }), {};
  }
}), WI = oe()({
  name: "VBreadcrumbs",
  props: {
    activeClass: String,
    activeColor: String,
    bgColor: String,
    color: String,
    disabled: Boolean,
    divider: {
      type: String,
      default: "/"
    },
    icon: Me,
    items: {
      type: Array,
      default: () => []
    },
    ...Ft(),
    ...ht(),
    ...je({
      tag: "ul"
    })
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: r
    } = Nt(ne(e, "bgColor")), {
      densityClasses: o
    } = an(e), {
      roundedClasses: l
    } = kt(e);
    return Vt({
      VBreadcrumbsDivider: {
        divider: ne(e, "divider")
      },
      VBreadcrumbsItem: {
        activeClass: ne(e, "activeClass"),
        activeColor: ne(e, "activeColor"),
        color: ne(e, "color"),
        disabled: ne(e, "disabled")
      }
    }), fe(() => {
      const i = !!(n.prepend || e.icon);
      return m(e.tag, {
        class: ["v-breadcrumbs", a.value, o.value, l.value],
        style: r.value
      }, {
        default: () => {
          var s;
          return [i && m("div", {
            key: "prepend",
            class: "v-breadcrumbs__prepend"
          }, [n.prepend ? m(lt, {
            key: "prepend-defaults",
            disabled: !e.icon,
            defaults: {
              VIcon: {
                icon: e.icon,
                start: !0
              }
            }
          }, n.prepend) : m(Pt, {
            key: "prepend-icon",
            start: !0,
            icon: e.icon
          }, null)]), e.items.map((u, d, c) => m(ye, null, [m(L0, ve({
            key: d,
            disabled: d >= c.length - 1
          }, typeof u == "string" ? {
            title: u
          } : u), {
            default: n.title ? () => {
              var f;
              return (f = n.title) == null ? void 0 : f.call(n, {
                item: u,
                index: d
              });
            } : void 0
          }), d < c.length - 1 && m(F0, null, {
            default: n.divider ? () => {
              var f;
              return (f = n.divider) == null ? void 0 : f.call(n, {
                item: u,
                index: d
              });
            } : void 0
          })])), (s = n.default) == null ? void 0 : s.call(n)];
        }
      });
    }), {};
  }
});
const j0 = Cn({
  name: "VCardActions",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Vt({
      VBtn: {
        variant: "text"
      }
    }), fe(() => {
      var a;
      return m("div", {
        class: "v-card-actions"
      }, [(a = n.default) == null ? void 0 : a.call(n)]);
    }), {};
  }
}), H0 = Gn("v-card-subtitle"), U0 = Gn("v-card-title"), Y0 = oe()({
  name: "VCardItem",
  props: {
    appendAvatar: String,
    appendIcon: Me,
    prependAvatar: String,
    prependIcon: Me,
    subtitle: String,
    title: String,
    ...Ft()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return fe(() => {
      var u;
      const a = !!(e.prependAvatar || e.prependIcon), r = !!(a || n.prepend), o = !!(e.appendAvatar || e.appendIcon), l = !!(o || n.append), i = !!(e.title || n.title), s = !!(e.subtitle || n.subtitle);
      return m("div", {
        class: "v-card-item"
      }, [r && m("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [n.prepend ? m(lt, {
        key: "prepend-defaults",
        disabled: !a,
        defaults: {
          VAvatar: {
            density: e.density,
            icon: e.prependIcon,
            image: e.prependAvatar
          }
        }
      }, n.prepend) : a && m(Ga, {
        key: "prepend-avatar",
        density: e.density,
        icon: e.prependIcon,
        image: e.prependAvatar
      }, null)]), m("div", {
        class: "v-card-item__content"
      }, [i && m(U0, {
        key: "title"
      }, {
        default: () => {
          var d;
          return [((d = n.title) == null ? void 0 : d.call(n)) ?? e.title];
        }
      }), s && m(H0, {
        key: "subtitle"
      }, {
        default: () => {
          var d;
          return [((d = n.subtitle) == null ? void 0 : d.call(n)) ?? e.subtitle];
        }
      }), (u = n.default) == null ? void 0 : u.call(n)]), l && m("div", {
        key: "append",
        class: "v-card-item__append"
      }, [n.append ? m(lt, {
        key: "append-defaults",
        disabled: !o,
        defaults: {
          VAvatar: {
            density: e.density,
            icon: e.appendIcon,
            image: e.appendAvatar
          }
        }
      }, n.append) : o && m(Ga, {
        key: "append-avatar",
        density: e.density,
        icon: e.appendIcon,
        image: e.appendAvatar
      }, null)])]);
    }), {};
  }
}), W0 = Gn("v-card-text"), zI = oe()({
  name: "VCard",
  directives: {
    Ripple: jr
  },
  props: {
    appendAvatar: String,
    appendIcon: Me,
    disabled: Boolean,
    flat: Boolean,
    hover: Boolean,
    image: String,
    link: {
      type: Boolean,
      default: void 0
    },
    prependAvatar: String,
    prependIcon: Me,
    ripple: {
      type: Boolean,
      default: !0
    },
    subtitle: String,
    text: String,
    title: String,
    ...Ge(),
    ...Pn(),
    ...Ft(),
    ...Kn(),
    ...It(),
    ...Sv(),
    ...Ja(),
    ...Eo(),
    ...ht(),
    ...Po(),
    ...je(),
    ...Hn({
      variant: "elevated"
    })
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: r
    } = at(e), {
      borderClasses: o
    } = jn(e), {
      colorClasses: l,
      colorStyles: i,
      variantClasses: s
    } = Br(e), {
      densityClasses: u
    } = an(e), {
      dimensionStyles: d
    } = Xn(e), {
      elevationClasses: c
    } = zt(e), {
      loaderClasses: f
    } = xu(e), {
      locationStyles: v
    } = er(e), {
      positionClasses: y
    } = $o(e), {
      roundedClasses: p
    } = kt(e), x = Pl(e, n), O = _(() => e.link !== !1 && x.isLink.value), E = _(() => !e.disabled && e.link !== !1 && (e.link || x.isClickable.value));
    return fe(() => {
      const S = O.value ? "a" : e.tag, N = !!(a.title || e.title), V = !!(a.subtitle || e.subtitle), $ = N || V, k = !!(a.append || e.appendAvatar || e.appendIcon), g = !!(a.prepend || e.prependAvatar || e.prependIcon), b = !!(a.image || e.image), w = $ || g || k, C = !!(a.text || e.text);
      return st(m(S, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": E.value
        }, r.value, o.value, l.value, u.value, c.value, f.value, y.value, p.value, s.value],
        style: [i.value, d.value, v.value],
        href: x.href.value,
        onClick: E.value && x.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, {
        default: () => {
          var T;
          return [b && m("div", {
            key: "image",
            class: "v-card__image"
          }, [a.image ? m(lt, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, a.image) : m(So, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), m(kv, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: a.loader
          }), w && m(Y0, {
            key: "item",
            prependAvatar: e.prependAvatar,
            prependIcon: e.prependIcon,
            title: e.title,
            subtitle: e.subtitle,
            appendAvatar: e.appendAvatar,
            appendIcon: e.appendIcon
          }, {
            default: a.item,
            prepend: a.prepend,
            title: a.title,
            subtitle: a.subtitle,
            append: a.append
          }), C && m(W0, {
            key: "text"
          }, {
            default: () => {
              var A;
              return [((A = a.text) == null ? void 0 : A.call(a)) ?? e.text];
            }
          }), (T = a.default) == null ? void 0 : T.call(a), a.actions && m(j0, null, {
            default: a.actions
          }), Rr(E.value, "v-card")];
        }
      }), [[bn("ripple"), E.value && e.ripple]]);
    }), {};
  }
});
const qI = (e) => {
  const {
    touchstartX: t,
    touchendX: n,
    touchstartY: a,
    touchendY: r
  } = e, o = 0.5, l = 16;
  e.offsetX = n - t, e.offsetY = r - a, Math.abs(e.offsetY) < o * Math.abs(e.offsetX) && (e.left && n < t - l && e.left(e), e.right && n > t + l && e.right(e)), Math.abs(e.offsetX) < o * Math.abs(e.offsetY) && (e.up && r < a - l && e.up(e), e.down && r > a + l && e.down(e));
};
function GI(e, t) {
  var a;
  const n = e.changedTouches[0];
  t.touchstartX = n.clientX, t.touchstartY = n.clientY, (a = t.start) == null || a.call(t, {
    originalEvent: e,
    ...t
  });
}
function KI(e, t) {
  var a;
  const n = e.changedTouches[0];
  t.touchendX = n.clientX, t.touchendY = n.clientY, (a = t.end) == null || a.call(t, {
    originalEvent: e,
    ...t
  }), qI(t);
}
function XI(e, t) {
  var a;
  const n = e.changedTouches[0];
  t.touchmoveX = n.clientX, t.touchmoveY = n.clientY, (a = t.move) == null || a.call(t, {
    originalEvent: e,
    ...t
  });
}
function QI() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end
  };
  return {
    touchstart: (n) => GI(n, t),
    touchend: (n) => KI(n, t),
    touchmove: (n) => XI(n, t)
  };
}
function ZI(e, t) {
  var i;
  const n = t.value, a = n != null && n.parent ? e.parentElement : e, r = (n == null ? void 0 : n.options) ?? {
    passive: !0
  }, o = (i = t.instance) == null ? void 0 : i.$.uid;
  if (!a || !o)
    return;
  const l = QI(t.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[o] = l, Ag(l).forEach((s) => {
    a.addEventListener(s, l[s], r);
  });
}
function JI(e, t) {
  var o, l;
  const n = (o = t.value) != null && o.parent ? e.parentElement : e, a = (l = t.instance) == null ? void 0 : l.$.uid;
  if (!(n != null && n._touchHandlers) || !a)
    return;
  const r = n._touchHandlers[a];
  Ag(r).forEach((i) => {
    n.removeEventListener(i, r[i]);
  }), delete n._touchHandlers[a];
}
const z0 = {
  mounted: ZI,
  unmounted: JI
}, eA = z0, q0 = Symbol.for("vuetify:v-window"), G0 = Symbol.for("vuetify:v-window-group"), K0 = oe()({
  name: "VWindow",
  directives: {
    Touch: z0
  },
  props: {
    continuous: Boolean,
    nextIcon: {
      type: [Boolean, String, Function, Object],
      default: "$next"
    },
    prevIcon: {
      type: [Boolean, String, Function, Object],
      default: "$prev"
    },
    reverse: Boolean,
    showArrows: {
      type: [Boolean, String],
      validator: (e) => typeof e == "boolean" || e === "hover"
    },
    touch: {
      type: [Object, Boolean],
      default: void 0
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    modelValue: null,
    disabled: Boolean,
    selectedClass: {
      type: String,
      default: "v-window-item--active"
    },
    // TODO: mandatory should probably not be exposed but do this for now
    mandatory: {
      default: "force"
    },
    ...je(),
    ...Ge()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = at(e), {
      isRtl: r
    } = Pa(), {
      t: o
    } = Ln(), l = Lr(e, G0), i = R(), s = _(() => r.value ? !e.reverse : e.reverse), u = R(!1), d = _(() => {
      const N = e.direction === "vertical" ? "y" : "x", $ = (s.value ? !u.value : u.value) ? "-reverse" : "";
      return `v-window-${N}${$}-transition`;
    }), c = R(0), f = R(void 0), v = _(() => l.items.value.findIndex((N) => l.selected.value.includes(N.id)));
    pe(v, (N, V) => {
      const $ = l.items.value.length, k = $ - 1;
      $ <= 2 ? u.value = N < V : N === k && V === 0 ? u.value = !0 : N === 0 && V === k ? u.value = !1 : u.value = N < V;
    }), Bt(q0, {
      transition: d,
      isReversed: u,
      transitionCount: c,
      transitionHeight: f,
      rootRef: i
    });
    const y = _(() => e.continuous || v.value !== 0), p = _(() => e.continuous || v.value !== l.items.value.length - 1);
    function x() {
      y.value && l.prev();
    }
    function O() {
      p.value && l.next();
    }
    const E = _(() => {
      const N = [], V = {
        icon: r.value ? e.nextIcon : e.prevIcon,
        class: `v-window__${s.value ? "right" : "left"}`,
        onClick: l.prev,
        ariaLabel: o("$vuetify.carousel.prev")
      };
      N.push(y.value ? n.prev ? n.prev({
        props: V
      }) : m(pn, V, null) : m("div", null, null));
      const $ = {
        icon: r.value ? e.prevIcon : e.nextIcon,
        class: `v-window__${s.value ? "left" : "right"}`,
        onClick: l.next,
        ariaLabel: o("$vuetify.carousel.next")
      };
      return N.push(p.value ? n.next ? n.next({
        props: $
      }) : m(pn, $, null) : m("div", null, null)), N;
    }), S = _(() => e.touch === !1 ? e.touch : {
      ...{
        left: () => {
          s.value ? x() : O();
        },
        right: () => {
          s.value ? O() : x();
        },
        start: (V) => {
          let {
            originalEvent: $
          } = V;
          $.stopPropagation();
        }
      },
      ...e.touch === !0 ? {} : e.touch
    });
    return fe(() => st(m(e.tag, {
      ref: i,
      class: ["v-window", {
        "v-window--show-arrows-on-hover": e.showArrows === "hover"
      }, a.value]
    }, {
      default: () => {
        var N, V;
        return [m("div", {
          class: "v-window__container",
          style: {
            height: f.value
          }
        }, [(N = n.default) == null ? void 0 : N.call(n, {
          group: l
        }), e.showArrows !== !1 && m("div", {
          class: "v-window__controls"
        }, [E.value])]), (V = n.additional) == null ? void 0 : V.call(n, {
          group: l
        })];
      }
    }), [[bn("touch"), S.value]])), {
      group: l
    };
  }
}), X0 = oe()({
  name: "VWindowItem",
  directives: {
    Touch: eA
  },
  props: {
    reverseTransition: {
      type: [Boolean, String],
      default: void 0
    },
    transition: {
      type: [Boolean, String],
      default: void 0
    },
    ...Fr(),
    ...Du()
  },
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = nt(q0), r = Oo(e, G0), {
      isBooted: o
    } = ko();
    if (!a || !r)
      throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const l = R(!1), i = _(() => a.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1);
    function s() {
      !l.value || !a || (l.value = !1, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
    }
    function u() {
      var y;
      l.value || !a || (l.value = !0, a.transitionCount.value === 0 && (a.transitionHeight.value = ge((y = a.rootRef.value) == null ? void 0 : y.clientHeight)), a.transitionCount.value += 1);
    }
    function d() {
      s();
    }
    function c(y) {
      l.value && Je(() => {
        !i.value || !l.value || !a || (a.transitionHeight.value = ge(y.clientHeight));
      });
    }
    const f = _(() => {
      const y = a.isReversed.value ? e.reverseTransition : e.transition;
      return i.value ? {
        name: typeof y != "string" ? a.transition.value : y,
        onBeforeEnter: u,
        onAfterEnter: s,
        onEnterCancelled: d,
        onBeforeLeave: u,
        onAfterLeave: s,
        onLeaveCancelled: d,
        onEnter: c
      } : !1;
    }), {
      hasContent: v
    } = Tv(e, r.isSelected);
    return fe(() => m(la, {
      transition: o.value && f.value
    }, {
      default: () => {
        var y;
        return [st(m("div", {
          class: ["v-window-item", r.selectedClass.value]
        }, [v.value && ((y = n.default) == null ? void 0 : y.call(n))]), [[gn, r.isSelected.value]])];
      }
    })), {};
  }
}), tA = oe()({
  name: "VCarousel",
  props: {
    color: String,
    cycle: Boolean,
    delimiterIcon: {
      type: Me,
      default: "$delimiter"
    },
    height: {
      type: [Number, String],
      default: 500
    },
    hideDelimiters: Boolean,
    hideDelimiterBackground: Boolean,
    interval: {
      type: [Number, String],
      default: 6e3,
      validator: (e) => e > 0
    },
    modelValue: null,
    progress: [Boolean, String],
    showArrows: {
      type: [Boolean, String],
      default: !0,
      validator: (e) => typeof e == "boolean" || e === "hover"
    },
    verticalDelimiters: [Boolean, String]
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = He(e, "modelValue"), {
      t: r
    } = Ln(), o = R();
    let l = -1;
    pe(a, s), pe(() => e.interval, s), pe(() => e.cycle, (u) => {
      u ? s() : window.clearTimeout(l);
    }), ft(i);
    function i() {
      !e.cycle || !o.value || (l = window.setTimeout(o.value.group.next, +e.interval > 0 ? +e.interval : 6e3));
    }
    function s() {
      window.clearTimeout(l), window.requestAnimationFrame(i);
    }
    return fe(() => m(K0, {
      ref: o,
      modelValue: a.value,
      "onUpdate:modelValue": (u) => a.value = u,
      class: ["v-carousel", {
        "v-carousel--hide-delimiter-background": e.hideDelimiterBackground,
        "v-carousel--vertical-delimiters": e.verticalDelimiters
      }],
      style: {
        height: ge(e.height)
      },
      continuous: !0,
      mandatory: "force",
      showArrows: e.showArrows
    }, {
      default: n.default,
      additional: (u) => {
        let {
          group: d
        } = u;
        return m(ye, null, [!e.hideDelimiters && m("div", {
          class: "v-carousel__controls",
          style: {
            left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto",
            right: e.verticalDelimiters === "right" ? 0 : "auto"
          }
        }, [d.items.value.length > 0 && m(lt, {
          defaults: {
            VBtn: {
              color: e.color,
              icon: e.delimiterIcon,
              size: "x-small",
              variant: "text"
            }
          },
          scoped: !0
        }, {
          default: () => [d.items.value.map((c, f) => {
            const v = {
              "aria-label": r("$vuetify.carousel.ariaLabel.delimiter", f + 1, d.items.value.length),
              class: [d.isSelected(c.id) && "v-btn--active"],
              onClick: () => d.select(c.id, !0)
            };
            return n.item ? n.item({
              props: v,
              item: c
            }) : m(pn, ve(c, v), null);
          })]
        })]), e.progress && m(wv, {
          class: "v-carousel__progress",
          color: typeof e.progress == "string" ? e.progress : void 0,
          modelValue: (d.getItemIndex(a.value) + 1) / d.items.value.length * 100
        }, null)]);
      },
      prev: n.prev,
      next: n.next
    })), {};
  }
}), nA = oe()({
  name: "VCarouselItem",
  inheritAttrs: !1,
  props: {
    value: null
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    fe(() => m(X0, {
      class: "v-carousel-item",
      value: e.value
    }, {
      default: () => [m(So, a, n)]
    }));
  }
});
const aA = Gn("v-code");
const rA = Cn({
  name: "VColorPickerCanvas",
  props: {
    color: {
      type: Object
    },
    disabled: Boolean,
    dotSize: {
      type: [Number, String],
      default: 10
    },
    height: {
      type: [Number, String],
      default: 150
    },
    width: {
      type: [Number, String],
      default: 300
    }
  },
  emits: {
    "update:color": (e) => !0,
    "update:position": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = R(!1), r = R(!1), o = R({
      x: 0,
      y: 0
    }), l = _(() => {
      const {
        x: O,
        y: E
      } = o.value, S = parseInt(e.dotSize, 10) / 2;
      return {
        width: ge(e.dotSize),
        height: ge(e.dotSize),
        transform: `translate(${ge(O - S)}, ${ge(E - S)})`
      };
    }), i = R(), s = R(parseFloat(e.width)), u = R(parseFloat(e.height)), {
      resizeRef: d
    } = qa((O) => {
      var N;
      if (!((N = d.value) != null && N.offsetParent))
        return;
      const {
        width: E,
        height: S
      } = O[0].contentRect;
      s.value = E, u.value = S;
    });
    function c(O, E, S) {
      const {
        left: N,
        top: V,
        width: $,
        height: k
      } = S;
      o.value = {
        x: xn(O - N, 0, $),
        y: xn(E - V, 0, k)
      };
    }
    function f(O) {
      e.disabled || !i.value || c(O.clientX, O.clientY, i.value.getBoundingClientRect());
    }
    function v(O) {
      O.preventDefault(), !e.disabled && (a.value = !0, window.addEventListener("mousemove", y), window.addEventListener("mouseup", p), window.addEventListener("touchmove", y), window.addEventListener("touchend", p));
    }
    function y(O) {
      if (e.disabled || !i.value)
        return;
      a.value = !0;
      const E = Uk(O);
      c(E.clientX, E.clientY, i.value.getBoundingClientRect());
    }
    function p() {
      window.removeEventListener("mousemove", y), window.removeEventListener("mouseup", p), window.removeEventListener("touchmove", y), window.removeEventListener("touchend", p);
    }
    pe(o, () => {
      var S, N;
      if (r.value) {
        r.value = !1;
        return;
      }
      if (!i.value)
        return;
      const {
        x: O,
        y: E
      } = o.value;
      n("update:color", {
        h: ((S = e.color) == null ? void 0 : S.h) ?? 0,
        s: xn(O, 0, s.value) / s.value,
        v: 1 - xn(E, 0, u.value) / u.value,
        a: ((N = e.color) == null ? void 0 : N.a) ?? 1
      });
    });
    function x() {
      var V;
      if (!i.value)
        return;
      const O = i.value, E = O.getContext("2d");
      if (!E)
        return;
      const S = E.createLinearGradient(0, 0, O.width, 0);
      S.addColorStop(0, "hsla(0, 0%, 100%, 1)"), S.addColorStop(1, `hsla(${((V = e.color) == null ? void 0 : V.h) ?? 0}, 100%, 50%, 1)`), E.fillStyle = S, E.fillRect(0, 0, O.width, O.height);
      const N = E.createLinearGradient(0, 0, 0, O.height);
      N.addColorStop(0, "hsla(0, 0%, 100%, 0)"), N.addColorStop(1, "hsla(0, 0%, 0%, 1)"), E.fillStyle = N, E.fillRect(0, 0, O.width, O.height);
    }
    return pe(() => {
      var O;
      return (O = e.color) == null ? void 0 : O.h;
    }, x, {
      immediate: !0
    }), pe(() => [s.value, u.value], (O, E) => {
      x(), o.value = {
        x: o.value.x * O[0] / E[0],
        y: o.value.y * O[1] / E[1]
      };
    }, {
      flush: "post"
    }), pe(() => e.color, () => {
      if (a.value) {
        a.value = !1;
        return;
      }
      r.value = !0, o.value = e.color ? {
        x: e.color.s * s.value,
        y: (1 - e.color.v) * u.value
      } : {
        x: 0,
        y: 0
      };
    }, {
      deep: !0,
      immediate: !0
    }), ft(() => x()), fe(() => m("div", {
      ref: d,
      class: "v-color-picker-canvas",
      onClick: f,
      onMousedown: v,
      onTouchstart: v
    }, [m("canvas", {
      ref: i,
      width: s.value,
      height: u.value
    }, null), e.color && m("div", {
      class: ["v-color-picker-canvas__dot", {
        "v-color-picker-canvas__dot--disabled": e.disabled
      }],
      style: l.value
    }, null)])), {};
  }
});
function br(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function Q0(e) {
  if (!e)
    return null;
  let t = null;
  if (typeof e == "string") {
    const n = Kg(e);
    t = qg(n);
  }
  return typeof e == "object" && (br(e, ["r", "g", "b"]) ? t = Kd(e) : br(e, ["h", "s", "l"]) ? t = Ug(e) : br(e, ["h", "s", "v"]) && (t = e)), t;
}
function oA(e, t) {
  if (t) {
    const {
      a: n,
      ...a
    } = e;
    return a;
  }
  return e;
}
function lA(e, t) {
  if (t == null || typeof t == "string") {
    const n = Gg(e);
    return e.a === 1 ? n.slice(0, 7) : n;
  }
  if (typeof t == "object") {
    let n;
    return br(t, ["r", "g", "b"]) ? n = pu(e) : br(t, ["h", "s", "l"]) ? n = Hg(e) : br(t, ["h", "s", "v"]) && (n = e), oA(n, !br(t, ["a"]) && e.a === 1);
  }
  return e;
}
const rl = {
  h: 0,
  s: 0,
  v: 1,
  a: 1
}, hd = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "R",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.r),
    getColor: (e, t) => ({
      ...e,
      r: Number(t)
    })
  }, {
    label: "G",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.g),
    getColor: (e, t) => ({
      ...e,
      g: Number(t)
    })
  }, {
    label: "B",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.b),
    getColor: (e, t) => ({
      ...e,
      b: Number(t)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: t
      } = e;
      return t ? Math.round(t * 100) / 100 : 1;
    },
    getColor: (e, t) => ({
      ...e,
      a: Number(t)
    })
  }],
  to: pu,
  from: Kd
};
var Ky;
const iA = {
  ...hd,
  inputs: (Ky = hd.inputs) == null ? void 0 : Ky.slice(0, 3)
}, yd = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "H",
    max: 360,
    step: 1,
    getValue: (e) => Math.round(e.h),
    getColor: (e, t) => ({
      ...e,
      h: Number(t)
    })
  }, {
    label: "S",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.s * 100) / 100,
    getColor: (e, t) => ({
      ...e,
      s: Number(t)
    })
  }, {
    label: "L",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.l * 100) / 100,
    getColor: (e, t) => ({
      ...e,
      l: Number(t)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: t
      } = e;
      return t ? Math.round(t * 100) / 100 : 1;
    },
    getColor: (e, t) => ({
      ...e,
      a: Number(t)
    })
  }],
  to: Hg,
  from: Ug
}, sA = {
  ...yd,
  inputs: yd.inputs.slice(0, 3)
}, Z0 = {
  inputProps: {
    type: "text"
  },
  inputs: [{
    label: "HEXA",
    getValue: (e) => e,
    getColor: (e, t) => t
  }],
  to: Gg,
  from: qg
}, uA = {
  ...Z0,
  inputs: [{
    label: "HEX",
    getValue: (e) => e.slice(0, 7),
    getColor: (e, t) => t
  }]
}, _r = {
  rgb: iA,
  rgba: hd,
  hsl: sA,
  hsla: yd,
  hex: uA,
  hexa: Z0
}, cA = (e) => {
  let {
    label: t,
    ...n
  } = e;
  return m("div", {
    class: "v-color-picker-edit__input"
  }, [m("input", n, null), m("span", null, [t])]);
}, fA = Cn({
  name: "VColorPickerEdit",
  props: {
    color: Object,
    disabled: Boolean,
    mode: {
      type: String,
      default: "rgba",
      validator: (e) => Object.keys(_r).includes(e)
    },
    modes: {
      type: Array,
      default: () => Object.keys(_r),
      validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(_r).includes(t))
    }
  },
  emits: {
    "update:color": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = _(() => e.modes.map((o) => ({
      ..._r[o],
      name: o
    }))), r = _(() => {
      var i;
      const o = a.value.find((s) => s.name === e.mode);
      if (!o)
        return [];
      const l = e.color ? o.to(e.color) : null;
      return (i = o.inputs) == null ? void 0 : i.map((s) => {
        let {
          getValue: u,
          getColor: d,
          ...c
        } = s;
        return {
          ...o.inputProps,
          ...c,
          disabled: e.disabled,
          value: l && u(l),
          onChange: (f) => {
            const v = f.target;
            v && n("update:color", o.from(d(l ?? rl, v.value)));
          }
        };
      });
    });
    return fe(() => {
      var o;
      return m("div", {
        class: "v-color-picker-edit"
      }, [(o = r.value) == null ? void 0 : o.map((l) => m(cA, l, null)), a.value.length > 1 && m(pn, {
        icon: "$unfold",
        size: "x-small",
        variant: "plain",
        onClick: () => {
          const l = a.value.findIndex((i) => i.name === e.mode);
          n("update:mode", a.value[(l + 1) % a.value.length].name);
        }
      }, null)]);
    }), {};
  }
});
const Dv = Symbol.for("vuetify:v-slider");
function pd(e, t, n) {
  const a = n === "vertical", r = t.getBoundingClientRect(), o = "touches" in e ? e.touches[0] : e;
  return a ? o.clientY - (r.top + r.height / 2) : o.clientX - (r.left + r.width / 2);
}
function dA(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const J0 = Fe({
  disabled: Boolean,
  error: Boolean,
  readonly: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  min: {
    type: [Number, String],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 0
  },
  thumbColor: String,
  thumbLabel: {
    type: [Boolean, String],
    default: void 0,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  thumbSize: {
    type: [Number, String],
    default: 20
  },
  showTicks: {
    type: [Boolean, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  ticks: {
    type: [Array, Object]
  },
  tickSize: {
    type: [Number, String],
    default: 2
  },
  color: String,
  trackColor: String,
  trackFillColor: String,
  trackSize: {
    type: [Number, String],
    default: 4
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  reverse: Boolean,
  ...ht(),
  ...It({
    elevation: 2
  })
}, "slider"), e_ = (e) => {
  let {
    props: t,
    handleSliderMouseUp: n,
    handleMouseMove: a,
    getActiveThumb: r
  } = e;
  const {
    isRtl: o
  } = Pa(), l = ne(t, "reverse"), i = _(() => {
    let I = o.value ? "rtl" : "ltr";
    return t.reverse && (I = I === "rtl" ? "ltr" : "rtl"), I;
  }), s = _(() => parseFloat(t.min)), u = _(() => parseFloat(t.max)), d = _(() => t.step > 0 ? parseFloat(t.step) : 0), c = _(() => {
    const I = d.value.toString().trim();
    return I.includes(".") ? I.length - I.indexOf(".") - 1 : 0;
  }), f = _(() => parseInt(t.thumbSize, 10)), v = _(() => parseInt(t.tickSize, 10)), y = _(() => parseInt(t.trackSize, 10)), p = _(() => (u.value - s.value) / d.value), x = ne(t, "disabled"), O = _(() => t.direction === "vertical"), E = _(() => t.error || t.disabled ? void 0 : t.thumbColor ?? t.color), S = _(() => t.error || t.disabled ? void 0 : t.trackColor ?? t.color), N = _(() => t.error || t.disabled ? void 0 : t.trackFillColor ?? t.color), V = R(!1), $ = R(0), k = R(), g = R();
  function b(I) {
    if (d.value <= 0)
      return I;
    const q = xn(I, s.value, u.value), we = s.value % d.value, be = Math.round((q - we) / d.value) * d.value + we;
    return parseFloat(Math.min(be, u.value).toFixed(c.value));
  }
  function w(I) {
    var F;
    const q = t.direction === "vertical", we = q ? "top" : "left", be = q ? "height" : "width", Oe = q ? "clientY" : "clientX", {
      [we]: We,
      [be]: yt
    } = (F = k.value) == null ? void 0 : F.$el.getBoundingClientRect(), De = dA(I, Oe);
    let D = Math.min(Math.max((De - We - $.value) / yt, 0), 1) || 0;
    return (q || i.value === "rtl") && (D = 1 - D), b(s.value + D * (u.value - s.value));
  }
  let C = !1;
  const T = (I) => {
    C || ($.value = 0, n(w(I))), V.value = !1, C = !1, $.value = 0;
  }, A = (I) => {
    g.value = r(I), g.value && (g.value.focus(), V.value = !0, g.value.contains(I.target) ? (C = !0, $.value = pd(I, g.value, t.direction)) : ($.value = 0, a(w(I))));
  }, z = {
    passive: !0,
    capture: !0
  };
  function U(I) {
    C = !0, a(w(I));
  }
  function B(I) {
    I.stopPropagation(), I.preventDefault(), T(I), window.removeEventListener("mousemove", U, z), window.removeEventListener("mouseup", B);
  }
  function h(I) {
    var q;
    T(I), window.removeEventListener("touchmove", U, z), (q = I.target) == null || q.removeEventListener("touchend", h);
  }
  function P(I) {
    var q;
    A(I), window.addEventListener("touchmove", U, z), (q = I.target) == null || q.addEventListener("touchend", h, {
      passive: !1
    });
  }
  function W(I) {
    I.preventDefault(), A(I), window.addEventListener("mousemove", U, z), window.addEventListener("mouseup", B, {
      passive: !1
    });
  }
  const H = (I) => {
    const q = (I - s.value) / (u.value - s.value) * 100;
    return xn(isNaN(q) ? 0 : q, 0, 100);
  }, j = ne(t, "showTicks"), X = _(() => j.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((I) => ({
    value: I,
    position: H(I),
    label: I.toString()
  })) : Object.keys(t.ticks).map((I) => ({
    value: parseFloat(I),
    position: H(parseFloat(I)),
    label: t.ticks[I]
  })) : p.value !== 1 / 0 ? hr(p.value + 1).map((I) => {
    const q = s.value + I * d.value;
    return {
      value: q,
      position: H(q)
    };
  }) : [] : []), Q = _(() => X.value.some((I) => {
    let {
      label: q
    } = I;
    return !!q;
  })), Y = {
    activeThumbRef: g,
    color: ne(t, "color"),
    decimals: c,
    disabled: x,
    direction: ne(t, "direction"),
    elevation: ne(t, "elevation"),
    hasLabels: Q,
    horizontalDirection: i,
    isReversed: l,
    min: s,
    max: u,
    mousePressed: V,
    numTicks: p,
    onSliderMousedown: W,
    onSliderTouchstart: P,
    parsedTicks: X,
    parseMouseMove: w,
    position: H,
    readonly: ne(t, "readonly"),
    rounded: ne(t, "rounded"),
    roundValue: b,
    showTicks: j,
    startOffset: $,
    step: d,
    thumbSize: f,
    thumbColor: E,
    thumbLabel: ne(t, "thumbLabel"),
    ticks: ne(t, "ticks"),
    tickSize: v,
    trackColor: S,
    trackContainerRef: k,
    trackFillColor: N,
    trackSize: y,
    vertical: O
  };
  return Bt(Dv, Y), Y;
}, gd = oe()({
  name: "VSliderThumb",
  directives: {
    Ripple: jr
  },
  props: {
    focused: Boolean,
    max: {
      type: Number,
      required: !0
    },
    min: {
      type: Number,
      required: !0
    },
    modelValue: {
      type: Number,
      required: !0
    },
    position: {
      type: Number,
      required: !0
    },
    ripple: {
      type: Boolean,
      default: !0
    }
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const r = nt(Dv);
    if (!r)
      throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
    const {
      thumbColor: o,
      step: l,
      vertical: i,
      disabled: s,
      thumbSize: u,
      thumbLabel: d,
      direction: c,
      readonly: f,
      elevation: v,
      isReversed: y,
      horizontalDirection: p,
      mousePressed: x,
      decimals: O
    } = r, {
      textColorClasses: E,
      textColorStyles: S
    } = vn(o), {
      pageup: N,
      pagedown: V,
      end: $,
      home: k,
      left: g,
      right: b,
      down: w,
      up: C
    } = Fc, T = [N, V, $, k, g, b, w, C], A = _(() => l.value ? [1, 2, 3] : [1, 5, 10]);
    function z(B, h) {
      if (!T.includes(B.key))
        return;
      B.preventDefault();
      const P = l.value || 0.1, W = (e.max - e.min) / P;
      if ([g, b, w, C].includes(B.key)) {
        const j = (p.value === "rtl" ? [g, C] : [b, C]).includes(B.key) ? 1 : -1, X = B.shiftKey ? 2 : B.ctrlKey ? 1 : 0;
        h = h + j * P * A.value[X];
      } else if (B.key === k)
        h = e.min;
      else if (B.key === $)
        h = e.max;
      else {
        const H = B.key === V ? 1 : -1;
        h = h - H * P * (W > 100 ? W / 10 : 10);
      }
      return Math.max(e.min, Math.min(e.max, h));
    }
    function U(B) {
      const h = z(B, e.modelValue);
      h != null && a("update:modelValue", h);
    }
    return fe(() => {
      const B = ge(i.value || y.value ? 100 - e.position : e.position, "%"), {
        elevationClasses: h
      } = zt(_(() => s.value ? void 0 : v.value));
      return m("div", {
        class: ["v-slider-thumb", {
          "v-slider-thumb--focused": e.focused,
          "v-slider-thumb--pressed": e.focused && x.value
        }],
        style: {
          "--v-slider-thumb-position": B,
          "--v-slider-thumb-size": ge(u.value)
        },
        role: "slider",
        tabindex: s.value ? -1 : 0,
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": e.modelValue,
        "aria-readonly": f.value,
        "aria-orientation": c.value,
        onKeydown: f.value ? void 0 : U
      }, [m("div", {
        class: ["v-slider-thumb__surface", E.value, h.value],
        style: {
          ...S.value
        }
      }, null), st(m("div", {
        class: ["v-slider-thumb__ripple", E.value],
        style: S.value
      }, null), [[bn("ripple"), e.ripple, null, {
        circle: !0,
        center: !0
      }]]), m(jb, {
        origin: "bottom center"
      }, {
        default: () => {
          var P;
          return [st(m("div", {
            class: "v-slider-thumb__label-container"
          }, [m("div", {
            class: ["v-slider-thumb__label"]
          }, [m("div", null, [((P = n["thumb-label"]) == null ? void 0 : P.call(n, {
            modelValue: e.modelValue
          })) ?? e.modelValue.toFixed(l.value ? O.value : 1)])])]), [[gn, d.value && e.focused || d.value === "always"]])];
        }
      })]);
    }), {};
  }
});
const t_ = oe()({
  name: "VSliderTrack",
  props: {
    start: {
      type: Number,
      required: !0
    },
    stop: {
      type: Number,
      required: !0
    }
  },
  emits: {},
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = nt(Dv);
    if (!a)
      throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
    const {
      color: r,
      horizontalDirection: o,
      parsedTicks: l,
      rounded: i,
      showTicks: s,
      tickSize: u,
      trackColor: d,
      trackFillColor: c,
      trackSize: f,
      vertical: v,
      min: y,
      max: p
    } = a, {
      roundedClasses: x
    } = kt(i), {
      backgroundColorClasses: O,
      backgroundColorStyles: E
    } = Nt(c), {
      backgroundColorClasses: S,
      backgroundColorStyles: N
    } = Nt(d), V = _(() => `inset-${v.value ? "block-end" : "inline-start"}`), $ = _(() => v.value ? "height" : "width"), k = _(() => ({
      [V.value]: "0%",
      [$.value]: "100%"
    })), g = _(() => e.stop - e.start), b = _(() => ({
      [V.value]: ge(e.start, "%"),
      [$.value]: ge(g.value, "%")
    })), w = _(() => s.value ? (v.value ? l.value.slice().reverse() : l.value).map((T, A) => {
      var B;
      const z = v.value ? "bottom" : "margin-inline-start", U = T.value !== y.value && T.value !== p.value ? ge(T.position, "%") : void 0;
      return m("div", {
        key: T.value,
        class: ["v-slider-track__tick", {
          "v-slider-track__tick--filled": T.position >= e.start && T.position <= e.stop,
          "v-slider-track__tick--first": T.value === y.value,
          "v-slider-track__tick--last": T.value === p.value
        }],
        style: {
          [z]: U
        }
      }, [(T.label || n["tick-label"]) && m("div", {
        class: "v-slider-track__tick-label"
      }, [((B = n["tick-label"]) == null ? void 0 : B.call(n, {
        tick: T,
        index: A
      })) ?? T.label])]);
    }) : []);
    return fe(() => m("div", {
      class: ["v-slider-track", x.value],
      style: {
        "--v-slider-track-size": ge(f.value),
        "--v-slider-tick-size": ge(u.value),
        direction: v.value ? void 0 : o.value
      }
    }, [m("div", {
      class: ["v-slider-track__background", S.value, {
        "v-slider-track__background--opacity": !!r.value || !c.value
      }],
      style: {
        ...k.value,
        ...N.value
      }
    }, null), m("div", {
      class: ["v-slider-track__fill", O.value],
      style: {
        ...b.value,
        ...E.value
      }
    }, null), s.value && m("div", {
      class: ["v-slider-track__ticks", {
        "v-slider-track__ticks--always-show": s.value === "always"
      }]
    }, [w.value])])), {};
  }
}), bd = oe()({
  name: "VSlider",
  props: {
    ...Ou(),
    ...J0(),
    ...Da(),
    modelValue: {
      type: [Number, String],
      default: 0
    }
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = R(), {
      min: r,
      max: o,
      mousePressed: l,
      roundValue: i,
      onSliderMousedown: s,
      onSliderTouchstart: u,
      trackContainerRef: d,
      position: c,
      hasLabels: f,
      readonly: v
    } = e_({
      props: e,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      handleSliderMouseUp: (S) => y.value = i(S),
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      handleMouseMove: (S) => y.value = i(S),
      getActiveThumb: () => {
        var S;
        return (S = a.value) == null ? void 0 : S.$el;
      }
    }), y = He(e, "modelValue", void 0, (S) => {
      const N = typeof S == "string" ? parseFloat(S) : S ?? r.value;
      return i(N);
    }), {
      isFocused: p,
      focus: x,
      blur: O
    } = Hr(e), E = _(() => c(y.value));
    return fe(() => {
      const [S, N] = tr(e), V = !!(e.label || n.label || n.prepend);
      return m(da, ve({
        class: ["v-slider", {
          "v-slider--has-labels": !!n["tick-label"] || f.value,
          "v-slider--focused": p.value,
          "v-slider--pressed": l.value,
          "v-slider--disabled": e.disabled
        }]
      }, S, {
        focused: p.value
      }), {
        ...n,
        prepend: V ? ($) => {
          var k, g;
          return m(ye, null, [((k = n.label) == null ? void 0 : k.call(n, $)) ?? e.label ? m(To, {
            id: $.id,
            class: "v-slider__label",
            text: e.label
          }, null) : void 0, (g = n.prepend) == null ? void 0 : g.call(n, $)]);
        } : void 0,
        default: ($) => {
          let {
            id: k,
            messagesId: g
          } = $;
          return m("div", {
            class: "v-slider__container",
            onMousedown: v.value ? void 0 : s,
            onTouchstartPassive: v.value ? void 0 : u
          }, [m("input", {
            id: k.value,
            name: e.name || k.value,
            disabled: e.disabled,
            readonly: e.readonly,
            tabindex: "-1",
            value: y.value
          }, null), m(t_, {
            ref: d,
            start: 0,
            stop: E.value
          }, {
            "tick-label": n["tick-label"]
          }), m(gd, {
            ref: a,
            "aria-describedby": g.value,
            focused: p.value,
            min: r.value,
            max: o.value,
            modelValue: y.value,
            "onUpdate:modelValue": (b) => y.value = b,
            position: E.value,
            elevation: e.elevation,
            onFocus: x,
            onBlur: O
          }, {
            "thumb-label": n["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), vA = Cn({
  name: "VColorPickerPreview",
  props: {
    color: {
      type: Object
    },
    disabled: Boolean,
    hideAlpha: Boolean
  },
  emits: {
    "update:color": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    return fe(() => {
      var a, r;
      return m("div", {
        class: ["v-color-picker-preview", {
          "v-color-picker-preview--hide-alpha": e.hideAlpha
        }]
      }, [m("div", {
        class: "v-color-picker-preview__dot"
      }, [m("div", {
        style: {
          background: Yg(e.color ?? rl)
        }
      }, null)]), m("div", {
        class: "v-color-picker-preview__sliders"
      }, [m(bd, {
        class: "v-color-picker-preview__track v-color-picker-preview__hue",
        modelValue: (a = e.color) == null ? void 0 : a.h,
        "onUpdate:modelValue": (o) => n("update:color", {
          ...e.color ?? rl,
          h: o
        }),
        step: 0,
        min: 0,
        max: 360,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null), !e.hideAlpha && m(bd, {
        class: "v-color-picker-preview__track v-color-picker-preview__alpha",
        modelValue: ((r = e.color) == null ? void 0 : r.a) ?? 1,
        "onUpdate:modelValue": (o) => n("update:color", {
          ...e.color ?? rl,
          a: o
        }),
        step: 1 / 256,
        min: 0,
        max: 1,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null)])]);
    }), {};
  }
});
const mA = Object.freeze({
  base: "#f44336",
  lighten5: "#ffebee",
  lighten4: "#ffcdd2",
  lighten3: "#ef9a9a",
  lighten2: "#e57373",
  lighten1: "#ef5350",
  darken1: "#e53935",
  darken2: "#d32f2f",
  darken3: "#c62828",
  darken4: "#b71c1c",
  accent1: "#ff8a80",
  accent2: "#ff5252",
  accent3: "#ff1744",
  accent4: "#d50000"
}), hA = Object.freeze({
  base: "#e91e63",
  lighten5: "#fce4ec",
  lighten4: "#f8bbd0",
  lighten3: "#f48fb1",
  lighten2: "#f06292",
  lighten1: "#ec407a",
  darken1: "#d81b60",
  darken2: "#c2185b",
  darken3: "#ad1457",
  darken4: "#880e4f",
  accent1: "#ff80ab",
  accent2: "#ff4081",
  accent3: "#f50057",
  accent4: "#c51162"
}), yA = Object.freeze({
  base: "#9c27b0",
  lighten5: "#f3e5f5",
  lighten4: "#e1bee7",
  lighten3: "#ce93d8",
  lighten2: "#ba68c8",
  lighten1: "#ab47bc",
  darken1: "#8e24aa",
  darken2: "#7b1fa2",
  darken3: "#6a1b9a",
  darken4: "#4a148c",
  accent1: "#ea80fc",
  accent2: "#e040fb",
  accent3: "#d500f9",
  accent4: "#aa00ff"
}), pA = Object.freeze({
  base: "#673ab7",
  lighten5: "#ede7f6",
  lighten4: "#d1c4e9",
  lighten3: "#b39ddb",
  lighten2: "#9575cd",
  lighten1: "#7e57c2",
  darken1: "#5e35b1",
  darken2: "#512da8",
  darken3: "#4527a0",
  darken4: "#311b92",
  accent1: "#b388ff",
  accent2: "#7c4dff",
  accent3: "#651fff",
  accent4: "#6200ea"
}), gA = Object.freeze({
  base: "#3f51b5",
  lighten5: "#e8eaf6",
  lighten4: "#c5cae9",
  lighten3: "#9fa8da",
  lighten2: "#7986cb",
  lighten1: "#5c6bc0",
  darken1: "#3949ab",
  darken2: "#303f9f",
  darken3: "#283593",
  darken4: "#1a237e",
  accent1: "#8c9eff",
  accent2: "#536dfe",
  accent3: "#3d5afe",
  accent4: "#304ffe"
}), bA = Object.freeze({
  base: "#2196f3",
  lighten5: "#e3f2fd",
  lighten4: "#bbdefb",
  lighten3: "#90caf9",
  lighten2: "#64b5f6",
  lighten1: "#42a5f5",
  darken1: "#1e88e5",
  darken2: "#1976d2",
  darken3: "#1565c0",
  darken4: "#0d47a1",
  accent1: "#82b1ff",
  accent2: "#448aff",
  accent3: "#2979ff",
  accent4: "#2962ff"
}), _A = Object.freeze({
  base: "#03a9f4",
  lighten5: "#e1f5fe",
  lighten4: "#b3e5fc",
  lighten3: "#81d4fa",
  lighten2: "#4fc3f7",
  lighten1: "#29b6f6",
  darken1: "#039be5",
  darken2: "#0288d1",
  darken3: "#0277bd",
  darken4: "#01579b",
  accent1: "#80d8ff",
  accent2: "#40c4ff",
  accent3: "#00b0ff",
  accent4: "#0091ea"
}), wA = Object.freeze({
  base: "#00bcd4",
  lighten5: "#e0f7fa",
  lighten4: "#b2ebf2",
  lighten3: "#80deea",
  lighten2: "#4dd0e1",
  lighten1: "#26c6da",
  darken1: "#00acc1",
  darken2: "#0097a7",
  darken3: "#00838f",
  darken4: "#006064",
  accent1: "#84ffff",
  accent2: "#18ffff",
  accent3: "#00e5ff",
  accent4: "#00b8d4"
}), SA = Object.freeze({
  base: "#009688",
  lighten5: "#e0f2f1",
  lighten4: "#b2dfdb",
  lighten3: "#80cbc4",
  lighten2: "#4db6ac",
  lighten1: "#26a69a",
  darken1: "#00897b",
  darken2: "#00796b",
  darken3: "#00695c",
  darken4: "#004d40",
  accent1: "#a7ffeb",
  accent2: "#64ffda",
  accent3: "#1de9b6",
  accent4: "#00bfa5"
}), kA = Object.freeze({
  base: "#4caf50",
  lighten5: "#e8f5e9",
  lighten4: "#c8e6c9",
  lighten3: "#a5d6a7",
  lighten2: "#81c784",
  lighten1: "#66bb6a",
  darken1: "#43a047",
  darken2: "#388e3c",
  darken3: "#2e7d32",
  darken4: "#1b5e20",
  accent1: "#b9f6ca",
  accent2: "#69f0ae",
  accent3: "#00e676",
  accent4: "#00c853"
}), xA = Object.freeze({
  base: "#8bc34a",
  lighten5: "#f1f8e9",
  lighten4: "#dcedc8",
  lighten3: "#c5e1a5",
  lighten2: "#aed581",
  lighten1: "#9ccc65",
  darken1: "#7cb342",
  darken2: "#689f38",
  darken3: "#558b2f",
  darken4: "#33691e",
  accent1: "#ccff90",
  accent2: "#b2ff59",
  accent3: "#76ff03",
  accent4: "#64dd17"
}), OA = Object.freeze({
  base: "#cddc39",
  lighten5: "#f9fbe7",
  lighten4: "#f0f4c3",
  lighten3: "#e6ee9c",
  lighten2: "#dce775",
  lighten1: "#d4e157",
  darken1: "#c0ca33",
  darken2: "#afb42b",
  darken3: "#9e9d24",
  darken4: "#827717",
  accent1: "#f4ff81",
  accent2: "#eeff41",
  accent3: "#c6ff00",
  accent4: "#aeea00"
}), CA = Object.freeze({
  base: "#ffeb3b",
  lighten5: "#fffde7",
  lighten4: "#fff9c4",
  lighten3: "#fff59d",
  lighten2: "#fff176",
  lighten1: "#ffee58",
  darken1: "#fdd835",
  darken2: "#fbc02d",
  darken3: "#f9a825",
  darken4: "#f57f17",
  accent1: "#ffff8d",
  accent2: "#ffff00",
  accent3: "#ffea00",
  accent4: "#ffd600"
}), EA = Object.freeze({
  base: "#ffc107",
  lighten5: "#fff8e1",
  lighten4: "#ffecb3",
  lighten3: "#ffe082",
  lighten2: "#ffd54f",
  lighten1: "#ffca28",
  darken1: "#ffb300",
  darken2: "#ffa000",
  darken3: "#ff8f00",
  darken4: "#ff6f00",
  accent1: "#ffe57f",
  accent2: "#ffd740",
  accent3: "#ffc400",
  accent4: "#ffab00"
}), $A = Object.freeze({
  base: "#ff9800",
  lighten5: "#fff3e0",
  lighten4: "#ffe0b2",
  lighten3: "#ffcc80",
  lighten2: "#ffb74d",
  lighten1: "#ffa726",
  darken1: "#fb8c00",
  darken2: "#f57c00",
  darken3: "#ef6c00",
  darken4: "#e65100",
  accent1: "#ffd180",
  accent2: "#ffab40",
  accent3: "#ff9100",
  accent4: "#ff6d00"
}), PA = Object.freeze({
  base: "#ff5722",
  lighten5: "#fbe9e7",
  lighten4: "#ffccbc",
  lighten3: "#ffab91",
  lighten2: "#ff8a65",
  lighten1: "#ff7043",
  darken1: "#f4511e",
  darken2: "#e64a19",
  darken3: "#d84315",
  darken4: "#bf360c",
  accent1: "#ff9e80",
  accent2: "#ff6e40",
  accent3: "#ff3d00",
  accent4: "#dd2c00"
}), TA = Object.freeze({
  base: "#795548",
  lighten5: "#efebe9",
  lighten4: "#d7ccc8",
  lighten3: "#bcaaa4",
  lighten2: "#a1887f",
  lighten1: "#8d6e63",
  darken1: "#6d4c41",
  darken2: "#5d4037",
  darken3: "#4e342e",
  darken4: "#3e2723"
}), NA = Object.freeze({
  base: "#607d8b",
  lighten5: "#eceff1",
  lighten4: "#cfd8dc",
  lighten3: "#b0bec5",
  lighten2: "#90a4ae",
  lighten1: "#78909c",
  darken1: "#546e7a",
  darken2: "#455a64",
  darken3: "#37474f",
  darken4: "#263238"
}), DA = Object.freeze({
  base: "#9e9e9e",
  lighten5: "#fafafa",
  lighten4: "#f5f5f5",
  lighten3: "#eeeeee",
  lighten2: "#e0e0e0",
  lighten1: "#bdbdbd",
  darken1: "#757575",
  darken2: "#616161",
  darken3: "#424242",
  darken4: "#212121"
}), VA = Object.freeze({
  black: "#000000",
  white: "#ffffff",
  transparent: "#ffffff00"
}), IA = Object.freeze({
  red: mA,
  pink: hA,
  purple: yA,
  deepPurple: pA,
  indigo: gA,
  blue: bA,
  lightBlue: _A,
  cyan: wA,
  teal: SA,
  green: kA,
  lightGreen: xA,
  lime: OA,
  yellow: CA,
  amber: EA,
  orange: $A,
  deepOrange: PA,
  brown: TA,
  blueGrey: NA,
  grey: DA,
  shades: VA
});
function AA(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const MA = Cn({
  name: "VColorPickerSwatches",
  props: {
    swatches: {
      type: Array,
      default: () => AA(IA)
    },
    disabled: Boolean,
    color: Object,
    maxHeight: [Number, String]
  },
  emits: {
    "update:color": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    return fe(() => m("div", {
      class: "v-color-picker-swatches",
      style: {
        maxHeight: ge(e.maxHeight)
      }
    }, [m("div", null, [e.swatches.map((a) => m("div", {
      class: "v-color-picker-swatches__swatch"
    }, [a.map((r) => {
      const o = Q0(r);
      return m("div", {
        class: "v-color-picker-swatches__color",
        onClick: () => o && n("update:color", o)
      }, [m("div", {
        style: {
          background: r
        }
      }, [e.color && bo(e.color, o) ? m(Pt, {
        size: "x-small",
        icon: "$success",
        color: rx(r, "#FFFFFF") > 2 ? "white" : "black"
      }, null) : void 0])]);
    })]))])])), {};
  }
});
const RA = Fe({
  color: String,
  ...Pn(),
  ...Kn(),
  ...It(),
  ...Ja(),
  ...Eo(),
  ...ht(),
  ...je(),
  ...Ge()
}, "v-sheet"), n_ = oe()({
  name: "VSheet",
  props: {
    ...RA()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = at(e), {
      backgroundColorClasses: r,
      backgroundColorStyles: o
    } = Nt(ne(e, "color")), {
      borderClasses: l
    } = jn(e), {
      dimensionStyles: i
    } = Xn(e), {
      elevationClasses: s
    } = zt(e), {
      locationStyles: u
    } = er(e), {
      positionClasses: d
    } = $o(e), {
      roundedClasses: c
    } = kt(e);
    return fe(() => m(e.tag, {
      class: ["v-sheet", a.value, r.value, l.value, s.value, d.value, c.value],
      style: [o.value, i.value, u.value]
    }, n)), {};
  }
}), BA = Cn({
  name: "VColorPicker",
  props: {
    canvasHeight: {
      type: [String, Number],
      default: 150
    },
    disabled: Boolean,
    dotSize: {
      type: [Number, String],
      default: 10
    },
    hideCanvas: Boolean,
    hideSliders: Boolean,
    hideInputs: Boolean,
    mode: {
      type: String,
      default: "rgba",
      validator: (e) => Object.keys(_r).includes(e)
    },
    modes: {
      type: Array,
      default: () => Object.keys(_r),
      validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(_r).includes(t))
    },
    showSwatches: Boolean,
    swatches: Array,
    swatchesMaxHeight: {
      type: [Number, String],
      default: 150
    },
    modelValue: {
      type: [Object, String]
    },
    width: {
      type: [Number, String],
      default: 300
    },
    ...It(),
    ...ht(),
    ...Ge()
  },
  emits: {
    "update:modelValue": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e) {
    const t = He(e, "mode"), n = R(null), a = He(e, "modelValue", void 0, (o) => {
      let l = Q0(o);
      return l ? (n.value && (l = {
        ...l,
        h: n.value.h
      }, n.value = null), l) : null;
    }, (o) => o ? lA(o, e.modelValue) : null), r = (o) => {
      a.value = o, n.value = o;
    };
    return ft(() => {
      e.modes.includes(t.value) || (t.value = e.modes[0]);
    }), Vt({
      VSlider: {
        color: void 0,
        trackColor: void 0,
        trackFillColor: void 0
      }
    }), fe(() => m(n_, {
      rounded: e.rounded,
      elevation: e.elevation,
      theme: e.theme,
      class: ["v-color-picker"],
      style: {
        "--v-color-picker-color-hsv": Yg({
          ...a.value ?? rl,
          a: 1
        })
      },
      maxWidth: e.width
    }, {
      default: () => [!e.hideCanvas && m(rA, {
        key: "canvas",
        color: a.value,
        "onUpdate:color": r,
        disabled: e.disabled,
        dotSize: e.dotSize,
        width: e.width,
        height: e.canvasHeight
      }, null), (!e.hideSliders || !e.hideInputs) && m("div", {
        key: "controls",
        class: "v-color-picker__controls"
      }, [!e.hideSliders && m(vA, {
        key: "preview",
        color: a.value,
        "onUpdate:color": r,
        hideAlpha: !t.value.endsWith("a"),
        disabled: e.disabled
      }, null), !e.hideInputs && m(fA, {
        key: "edit",
        modes: e.modes,
        mode: t.value,
        "onUpdate:mode": (o) => t.value = o,
        color: a.value,
        "onUpdate:color": r,
        disabled: e.disabled
      }, null)]), e.showSwatches && m(MA, {
        key: "swatches",
        color: a.value,
        "onUpdate:color": r,
        maxHeight: e.swatchesMaxHeight,
        swatches: e.swatches,
        disabled: e.disabled
      }, null)]
    })), {};
  }
});
function FA(e, t, n) {
  if (t == null)
    return e;
  if (Array.isArray(t))
    throw new Error("Multiple matches is not implemented");
  return typeof t == "number" && ~t ? m(ye, null, [m("span", {
    class: "v-combobox__unmask"
  }, [e.substr(0, t)]), m("span", {
    class: "v-combobox__mask"
  }, [e.substr(t, n)]), m("span", {
    class: "v-combobox__unmask"
  }, [e.substr(t + n)])]) : e;
}
const LA = oe()({
  name: "VCombobox",
  props: {
    // TODO: implement post keyboard support
    // autoSelectFirst: Boolean,
    delimiters: Array,
    ...A0({
      filterKeys: ["title"]
    }),
    ...Nv({
      hideNoData: !0,
      returnObject: !0
    }),
    ...Ar(Pu({
      modelValue: null
    }), ["validationValue", "dirty", "appendInnerIcon"]),
    ...Ta({
      transition: !1
    })
  },
  emits: {
    "update:modelValue": (e) => !0,
    "update:search": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, t) {
    var H;
    let {
      emit: n,
      slots: a
    } = t;
    const {
      t: r
    } = Ln(), o = R(), l = R(!1), i = R(!0), s = R(), u = He(e, "menu"), d = _({
      get: () => u.value,
      set: (j) => {
        var X;
        u.value && !j && ((X = s.value) != null && X.ΨopenChildren) || (u.value = j);
      }
    }), c = R(-1), f = _(() => {
      var j;
      return (j = o.value) == null ? void 0 : j.color;
    }), {
      items: v,
      transformIn: y,
      transformOut: p
    } = Pv(e), {
      textColorClasses: x,
      textColorStyles: O
    } = vn(f), E = He(e, "modelValue", [], (j) => y(Rn(j || [])), (j) => {
      const X = p(j);
      return e.multiple ? X : X[0] ?? null;
    }), S = Eu(), N = R(e.multiple ? "" : ((H = E.value[0]) == null ? void 0 : H.title) ?? ""), V = _({
      get: () => N.value,
      set: (j) => {
        var X;
        if (N.value = j, e.multiple || (E.value = [ao(e, j)]), j && e.multiple && ((X = e.delimiters) != null && X.length)) {
          const Q = j.split(new RegExp(`(?:${e.delimiters.join("|")})+`));
          Q.length > 1 && (Q.forEach((Y) => {
            Y = Y.trim(), Y && h(ao(e, Y));
          }), N.value = "");
        }
        j || (c.value = -1), l.value && (d.value = !0), i.value = !j;
      }
    });
    pe(N, (j) => {
      n("update:search", j);
    }), pe(E, (j) => {
      var X;
      e.multiple || (N.value = ((X = j[0]) == null ? void 0 : X.title) ?? "");
    });
    const {
      filteredItems: $,
      getMatches: k
    } = M0(e, v, _(() => i.value ? void 0 : V.value)), g = _(() => E.value.map((j) => v.value.find((X) => e.valueComparator(X.value, j.value)) || j)), b = _(() => e.hideSelected ? $.value.filter((j) => !g.value.some((X) => X.value === j.value)) : $.value), w = _(() => g.value.map((j) => j.props.value)), C = _(() => g.value[c.value]), T = R();
    function A(j) {
      e.openOnClear && (d.value = !0);
    }
    function z() {
      e.hideNoData && !v.value.length || e.readonly || S != null && S.isReadonly.value || (d.value = !0);
    }
    function U(j) {
      var Y, I;
      if (e.readonly || S != null && S.isReadonly.value)
        return;
      const X = o.value.selectionStart, Q = w.value.length;
      if ((c.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(j.key)) && j.preventDefault(), ["Enter", "ArrowDown"].includes(j.key) && (d.value = !0), ["Escape"].includes(j.key) && (d.value = !1), ["Enter", "Escape", "Tab"].includes(j.key) && (i.value = !0), j.key === "ArrowDown" ? (Y = T.value) == null || Y.focus("next") : j.key === "ArrowUp" && ((I = T.value) == null || I.focus("prev")), !!e.multiple) {
        if (["Backspace", "Delete"].includes(j.key)) {
          if (c.value < 0) {
            j.key === "Backspace" && !V.value && (c.value = Q - 1);
            return;
          }
          h(C.value), Je(() => !C.value && (c.value = Q - 2));
        }
        if (j.key === "ArrowLeft") {
          if (c.value < 0 && X > 0)
            return;
          const q = c.value > -1 ? c.value - 1 : Q - 1;
          g.value[q] ? c.value = q : (c.value = -1, o.value.setSelectionRange(V.value.length, V.value.length));
        }
        if (j.key === "ArrowRight") {
          if (c.value < 0)
            return;
          const q = c.value + 1;
          g.value[q] ? c.value = q : (c.value = -1, o.value.setSelectionRange(0, 0));
        }
        j.key === "Enter" && V.value && (h(ao(e, V.value)), V.value = "");
      }
    }
    function B() {
      l.value && (i.value = !0);
    }
    function h(j) {
      if (e.multiple) {
        const X = w.value.findIndex((Q) => e.valueComparator(Q, j.value));
        if (X === -1)
          E.value = [...E.value, j];
        else {
          const Q = [...E.value];
          Q.splice(X, 1), E.value = Q;
        }
        V.value = "";
      } else
        E.value = [j], N.value = j.title, Je(() => {
          d.value = !1, i.value = !0;
        });
    }
    function P(j) {
      l.value = !0;
    }
    function W(j) {
      var X;
      j.relatedTarget == null && ((X = o.value) == null || X.focus());
    }
    return pe($, (j) => {
      !j.length && e.hideNoData && (d.value = !1);
    }), pe(l, (j) => {
      if (j)
        c.value = -1;
      else {
        if (d.value = !1, !e.multiple || !V.value)
          return;
        E.value = [...E.value, ao(e, V.value)], V.value = "";
      }
    }), fe(() => {
      const j = !!(e.chips || a.chip), X = !!(!e.hideNoData || b.value.length || a.prepend || a.append || a["no-data"]), [Q] = Ov(e);
      return m(Nl, ve({
        ref: o
      }, Q, {
        modelValue: V.value,
        "onUpdate:modelValue": [(Y) => V.value = Y, (Y) => {
          Y == null && (E.value = []);
        }],
        validationValue: E.externalValue,
        dirty: E.value.length > 0,
        class: ["v-combobox", {
          "v-combobox--active-menu": d.value,
          "v-combobox--chips": !!e.chips,
          "v-combobox--selecting-index": c.value > -1,
          [`v-combobox--${e.multiple ? "multiple" : "single"}`]: !0
        }],
        appendInnerIcon: e.items.length ? e.menuIcon : void 0,
        readonly: e.readonly,
        "onClick:clear": A,
        "onMousedown:control": z,
        onFocus: () => l.value = !0,
        onBlur: () => l.value = !1,
        onKeydown: U
      }), {
        ...a,
        default: () => m(ye, null, [m(Iu, ve({
          ref: s,
          modelValue: d.value,
          "onUpdate:modelValue": (Y) => d.value = Y,
          activator: "parent",
          contentClass: "v-combobox__content",
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterLeave: B
        }, e.menuProps), {
          default: () => [X && m(Nu, {
            ref: T,
            selected: w.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (Y) => Y.preventDefault(),
            onFocusin: P,
            onFocusout: W
          }, {
            default: () => {
              var Y, I, q;
              return [!b.value.length && !e.hideNoData && (((Y = a["no-data"]) == null ? void 0 : Y.call(a)) ?? m(Oa, {
                title: r(e.noDataText)
              }, null)), (I = a["prepend-item"]) == null ? void 0 : I.call(a), b.value.map((we, be) => {
                var Oe;
                return ((Oe = a.item) == null ? void 0 : Oe.call(a, {
                  item: we,
                  index: be,
                  props: ve(we.props, {
                    onClick: () => h(we)
                  })
                })) ?? m(Oa, ve({
                  key: be
                }, we.props, {
                  onClick: () => h(we)
                }), {
                  prepend: (We) => {
                    let {
                      isSelected: yt
                    } = We;
                    return e.multiple && !e.hideSelected ? m(No, {
                      modelValue: yt,
                      ripple: !1
                    }, null) : void 0;
                  },
                  title: () => {
                    var We, yt;
                    return i.value ? we.title : FA(we.title, (We = k(we)) == null ? void 0 : We.title, ((yt = V.value) == null ? void 0 : yt.length) ?? 0);
                  }
                });
              }), (q = a["append-item"]) == null ? void 0 : q.call(a)];
            }
          })]
        }), g.value.map((Y, I) => {
          var be;
          function q(Oe) {
            Oe.stopPropagation(), Oe.preventDefault(), h(Y);
          }
          const we = {
            "onClick:close": q,
            modelValue: !0,
            "onUpdate:modelValue": void 0
          };
          return m("div", {
            key: Y.value,
            class: ["v-combobox__selection", I === c.value && ["v-combobox__selection--selected", x.value]],
            style: I === c.value ? O.value : {}
          }, [j ? a.chip ? m(lt, {
            key: "chip-defaults",
            defaults: {
              VChip: {
                closable: e.closableChips,
                size: "small",
                text: Y.title
              }
            }
          }, {
            default: () => {
              var Oe;
              return [(Oe = a.chip) == null ? void 0 : Oe.call(a, {
                item: Y,
                index: I,
                props: we
              })];
            }
          }) : m(Vl, ve({
            key: "chip",
            closable: e.closableChips,
            size: "small",
            text: Y.title
          }, we), null) : ((be = a.selection) == null ? void 0 : be.call(a, {
            item: Y,
            index: I
          })) ?? m("span", {
            class: "v-combobox__selection-text"
          }, [Y.title, e.multiple && I < g.value.length - 1 && m("span", {
            class: "v-combobox__selection-comma"
          }, [wt(",")])])]);
        })])
      });
    }), Qn({
      isFocused: l,
      isPristine: i,
      menu: d,
      search: V,
      selectionIndex: c,
      filteredItems: $,
      select: h
    }, o);
  }
});
const jA = oe()({
  name: "VDialog",
  props: {
    fullscreen: Boolean,
    retainFocus: {
      type: Boolean,
      default: !0
    },
    scrollable: Boolean,
    ...Al({
      origin: "center center",
      scrollStrategy: "block",
      transition: {
        component: wu
      },
      zIndex: 2400
    })
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = He(e, "modelValue"), {
      scopeId: r
    } = Il(), o = R();
    function l(s) {
      var c, f;
      const u = s.relatedTarget, d = s.target;
      if (u !== d && ((c = o.value) != null && c.contentEl) && // We're the topmost dialog
      ((f = o.value) != null && f.globalTop) && // It isn't the document or the dialog body
      ![document, o.value.contentEl].includes(d) && // It isn't inside the dialog body
      !o.value.contentEl.contains(d)) {
        const v = [...o.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter((x) => !x.hasAttribute("disabled") && !x.matches('[tabindex="-1"]'));
        if (!v.length)
          return;
        const y = v[0], p = v[v.length - 1];
        u === y ? p.focus() : y.focus();
      }
    }
    Tt && pe(() => a.value && e.retainFocus, (s) => {
      s ? document.addEventListener("focusin", l) : document.removeEventListener("focusin", l);
    }, {
      immediate: !0
    }), pe(a, async (s) => {
      var u, d;
      await Je(), s ? (u = o.value.contentEl) == null || u.focus({
        preventScroll: !0
      }) : (d = o.value.activatorEl) == null || d.focus({
        preventScroll: !0
      });
    });
    const i = _(() => ve({
      "aria-haspopup": "dialog",
      "aria-expanded": String(a.value)
    }, e.activatorProps));
    return fe(() => {
      const [s] = Vu(e);
      return m(Do, ve({
        ref: o,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }]
      }, s, {
        modelValue: a.value,
        "onUpdate:modelValue": (u) => a.value = u,
        "aria-role": "dialog",
        "aria-modal": "true",
        activatorProps: i.value
      }, r), {
        activator: n.activator,
        default: function() {
          for (var u = arguments.length, d = new Array(u), c = 0; c < u; c++)
            d[c] = arguments[c];
          return m(lt, {
            root: !0
          }, {
            default: () => {
              var f;
              return [(f = n.default) == null ? void 0 : f.call(n, ...d)];
            }
          });
        }
      });
    }), Qn({}, o);
  }
});
const Sl = Symbol.for("vuetify:v-expansion-panel"), HA = ["default", "accordion", "inset", "popout"], UA = oe()({
  name: "VExpansionPanels",
  props: {
    color: String,
    variant: {
      type: String,
      default: "default",
      validator: (e) => HA.includes(e)
    },
    readonly: Boolean,
    ...xo(),
    ...je(),
    ...Ge()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    Lr(e, Sl);
    const {
      themeClasses: a
    } = at(e), r = _(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
    return Vt({
      VExpansionPanel: {
        color: ne(e, "color")
      },
      VExpansionPanelTitle: {
        readonly: ne(e, "readonly")
      }
    }), fe(() => m(e.tag, {
      class: ["v-expansion-panels", a.value, r.value]
    }, n)), {};
  }
}), a_ = Fe({
  color: String,
  expandIcon: {
    type: Me,
    default: "$expand"
  },
  collapseIcon: {
    type: Me,
    default: "$collapse"
  },
  hideActions: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !1
  },
  readonly: Boolean
}, "v-expansion-panel-title"), r_ = oe()({
  name: "VExpansionPanelTitle",
  directives: {
    Ripple: jr
  },
  props: {
    ...a_()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = nt(Sl);
    if (!a)
      throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses: r,
      backgroundColorStyles: o
    } = Nt(e, "color"), l = _(() => ({
      collapseIcon: e.collapseIcon,
      disabled: a.disabled.value,
      expanded: a.isSelected.value,
      expandIcon: e.expandIcon,
      readonly: e.readonly
    }));
    return fe(() => {
      var i;
      return st(m("button", {
        class: ["v-expansion-panel-title", {
          "v-expansion-panel-title--active": a.isSelected.value
        }, r.value],
        style: o.value,
        type: "button",
        tabindex: a.disabled.value ? -1 : void 0,
        disabled: a.disabled.value,
        "aria-expanded": a.isSelected.value,
        onClick: e.readonly ? void 0 : a.toggle
      }, [m("span", {
        class: "v-expansion-panel-title__overlay"
      }, null), (i = n.default) == null ? void 0 : i.call(n, l.value), !e.hideActions && m("span", {
        class: "v-expansion-panel-title__icon"
      }, [n.actions ? n.actions(l.value) : m(Pt, {
        icon: a.isSelected.value ? e.collapseIcon : e.expandIcon
      }, null)])]), [[bn("ripple"), e.ripple]]);
    }), {};
  }
}), o_ = oe()({
  name: "VExpansionPanelText",
  props: {
    ...Du()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = nt(Sl);
    if (!a)
      throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent: r,
      onAfterLeave: o
    } = Tv(e, a.isSelected);
    return fe(() => m(Su, {
      onAfterLeave: o
    }, {
      default: () => {
        var l;
        return [st(m("div", {
          class: "v-expansion-panel-text"
        }, [n.default && r.value && m("div", {
          class: "v-expansion-panel-text__wrapper"
        }, [(l = n.default) == null ? void 0 : l.call(n)])]), [[gn, a.isSelected.value]])];
      }
    })), {};
  }
}), YA = oe()({
  name: "VExpansionPanel",
  props: {
    title: String,
    text: String,
    bgColor: String,
    ...It(),
    ...Fr(),
    ...Du(),
    ...ht(),
    ...je(),
    ...a_()
  },
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Oo(e, Sl), {
      backgroundColorClasses: r,
      backgroundColorStyles: o
    } = Nt(e, "bgColor"), {
      elevationClasses: l
    } = zt(e), {
      roundedClasses: i
    } = kt(e), s = _(() => (a == null ? void 0 : a.disabled.value) || e.disabled), u = _(() => a.group.items.value.reduce((f, v, y) => (a.group.selected.value.includes(v.id) && f.push(y), f), [])), d = _(() => {
      const f = a.group.items.value.findIndex((v) => v.id === a.id);
      return !a.isSelected.value && u.value.some((v) => v - f === 1);
    }), c = _(() => {
      const f = a.group.items.value.findIndex((v) => v.id === a.id);
      return !a.isSelected.value && u.value.some((v) => v - f === -1);
    });
    return Bt(Sl, a), fe(() => {
      const f = !!(n.text || e.text), v = !!(n.title || e.title);
      return m(e.tag, {
        class: ["v-expansion-panel", {
          "v-expansion-panel--active": a.isSelected.value,
          "v-expansion-panel--before-active": d.value,
          "v-expansion-panel--after-active": c.value,
          "v-expansion-panel--disabled": s.value
        }, i.value, r.value],
        style: o.value,
        "aria-expanded": a.isSelected.value
      }, {
        default: () => {
          var y;
          return [m("div", {
            class: ["v-expansion-panel__shadow", ...l.value]
          }, null), v && m(r_, {
            key: "title",
            collapseIcon: e.collapseIcon,
            color: e.color,
            expandIcon: e.expandIcon,
            hideActions: e.hideActions,
            ripple: e.ripple
          }, {
            default: () => [n.title ? n.title() : e.title]
          }), f && m(o_, {
            key: "text",
            eager: e.eager
          }, {
            default: () => [n.text ? n.text() : e.text]
          }), (y = n.default) == null ? void 0 : y.call(n)];
        }
      });
    }), {};
  }
});
const WA = oe()({
  name: "VFileInput",
  inheritAttrs: !1,
  props: {
    chips: Boolean,
    counter: Boolean,
    counterSizeString: {
      type: String,
      default: "$vuetify.fileInput.counterSize"
    },
    counterString: {
      type: String,
      default: "$vuetify.fileInput.counter"
    },
    multiple: Boolean,
    hint: String,
    persistentHint: Boolean,
    placeholder: String,
    showSize: {
      type: [Boolean, Number],
      default: !1,
      validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(e)
    },
    ...Da({
      prependIcon: "$file"
    }),
    modelValue: {
      type: Array,
      default: () => [],
      validator: (e) => Rn(e).every((t) => t != null && typeof t == "object")
    },
    ...Cu({
      clearable: !0
    })
  },
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: r
    } = t;
    const {
      t: o
    } = Ln(), l = He(e, "modelValue"), i = _(() => typeof e.showSize != "boolean" ? e.showSize : void 0), s = _(() => (l.value ?? []).reduce(($, k) => {
      let {
        size: g = 0
      } = k;
      return $ + g;
    }, 0)), u = _(() => Dm(s.value, i.value)), d = _(() => (l.value ?? []).map(($) => {
      const {
        name: k = "",
        size: g = 0
      } = $;
      return e.showSize ? `${k} (${Dm(g, i.value)})` : k;
    })), c = _(() => {
      var k;
      const $ = ((k = l.value) == null ? void 0 : k.length) ?? 0;
      return e.showSize ? o(e.counterSizeString, $, u.value) : o(e.counterString, $);
    }), f = R(), v = R(), y = R(!1), p = R(), x = _(() => e.messages.length ? e.messages : e.persistentHint ? e.hint : "");
    function O() {
      var $;
      p.value !== document.activeElement && (($ = p.value) == null || $.focus()), y.value || (y.value = !0);
    }
    function E($) {
      ss(e["onClick:prepend"], $), N($);
    }
    function S($) {
      a("mousedown:control", $);
    }
    function N($) {
      var k;
      (k = p.value) == null || k.click(), a("click:control", $);
    }
    function V($) {
      $.stopPropagation(), O(), Je(() => {
        l.value = [], ss(e["onClick:clear"], $);
      });
    }
    return pe(l, ($) => {
      (!Array.isArray($) || !$.length) && p.value && (p.value.value = "");
    }), fe(() => {
      const $ = !!(r.counter || e.counter), k = !!($ || r.details), [g, b] = Mr(n), [{
        modelValue: w,
        ...C
      }] = tr(e), [T] = xv(e);
      return m(da, ve({
        ref: f,
        modelValue: l.value,
        "onUpdate:modelValue": (A) => l.value = A,
        class: "v-file-input",
        "onClick:prepend": E,
        "onClick:append": e["onClick:append"]
      }, g, C, {
        focused: y.value,
        messages: x.value
      }), {
        ...r,
        default: (A) => {
          let {
            id: z,
            isDisabled: U,
            isDirty: B,
            isReadonly: h,
            isValid: P
          } = A;
          return m(Tl, ve({
            ref: v,
            "prepend-icon": e.prependIcon,
            onMousedown: S,
            onClick: N,
            "onClick:clear": V,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, T, {
            id: z.value,
            active: B.value || y.value,
            dirty: B.value,
            disabled: U.value,
            focused: y.value,
            error: P.value === !1
          }), {
            ...r,
            default: (W) => {
              var X;
              let {
                props: {
                  class: H,
                  ...j
                }
              } = W;
              return m(ye, null, [m("input", ve({
                ref: p,
                type: "file",
                readonly: h.value,
                disabled: U.value,
                multiple: e.multiple,
                name: e.name,
                onClick: (Q) => {
                  Q.stopPropagation(), O();
                },
                onChange: (Q) => {
                  if (!Q.target)
                    return;
                  const Y = Q.target;
                  l.value = [...Y.files ?? []];
                },
                onFocus: O,
                onBlur: () => y.value = !1
              }, j, b), null), m("div", {
                class: H
              }, [!!((X = l.value) != null && X.length) && (r.selection ? r.selection({
                fileNames: d.value,
                totalBytes: s.value,
                totalBytesReadable: u.value
              }) : e.chips ? d.value.map((Q) => m(Vl, {
                key: Q,
                size: "small",
                color: e.color
              }, {
                default: () => [Q]
              })) : d.value.join(", "))])]);
            }
          });
        },
        details: k ? (A) => {
          var z, U;
          return m(ye, null, [(z = r.details) == null ? void 0 : z.call(r, A), $ && m(ye, null, [m("span", null, null), m($u, {
            active: !!((U = l.value) != null && U.length),
            value: c.value
          }, r.counter)])]);
        } : void 0
      });
    }), Qn({}, f, v, p);
  }
});
const zA = oe()({
  name: "VFooter",
  props: {
    app: Boolean,
    color: String,
    height: {
      type: [Number, String],
      default: "auto"
    },
    ...Pn(),
    ...It(),
    ..._o(),
    ...ht(),
    ...je({
      tag: "footer"
    }),
    ...Ge()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = at(e), {
      backgroundColorClasses: r,
      backgroundColorStyles: o
    } = Nt(ne(e, "color")), {
      borderClasses: l
    } = jn(e), {
      elevationClasses: i
    } = zt(e), {
      roundedClasses: s
    } = kt(e), u = R(32), {
      resizeRef: d
    } = qa((v) => {
      v.length && (u.value = v[0].target.clientHeight);
    }), c = _(() => e.height === "auto" ? u.value : parseInt(e.height, 10)), {
      layoutItemStyles: f
    } = wo({
      id: e.name,
      order: _(() => parseInt(e.order, 10)),
      position: _(() => "bottom"),
      layoutSize: c,
      elementSize: _(() => e.height === "auto" ? void 0 : c.value),
      active: _(() => e.app),
      absolute: ne(e, "absolute")
    });
    return fe(() => m(e.tag, {
      ref: d,
      class: ["v-footer", a.value, r.value, l.value, i.value, s.value],
      style: [o.value, e.app ? f.value : void 0]
    }, n)), {};
  }
}), qA = oe()({
  name: "VForm",
  props: {
    ...WV()
  },
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const r = zV(e), o = R();
    function l(s) {
      s.preventDefault(), r.reset();
    }
    function i(s) {
      const u = s, d = r.validate();
      u.then = d.then.bind(d), u.catch = d.catch.bind(d), u.finally = d.finally.bind(d), a("submit", u), u.defaultPrevented || d.then((c) => {
        var v;
        let {
          valid: f
        } = c;
        f && ((v = o.value) == null || v.submit());
      }), u.preventDefault();
    }
    return fe(() => {
      var s;
      return m("form", {
        ref: o,
        class: "v-form",
        novalidate: !0,
        onReset: l,
        onSubmit: i
      }, [(s = n.default) == null ? void 0 : s.call(n, r)]);
    }), Qn(r, o);
  }
});
const GA = oe()({
  name: "VContainer",
  props: {
    fluid: {
      type: Boolean,
      default: !1
    },
    ...je()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return fe(() => m(e.tag, {
      class: ["v-container", {
        "v-container--fluid": e.fluid
      }]
    }, n)), {};
  }
}), Vv = ["sm", "md", "lg", "xl", "xxl"], l_ = (() => Vv.reduce((e, t) => (e[t] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}))(), i_ = (() => Vv.reduce((e, t) => (e["offset" + Fn(t)] = {
  type: [String, Number],
  default: null
}, e), {}))(), s_ = (() => Vv.reduce((e, t) => (e["order" + Fn(t)] = {
  type: [String, Number],
  default: null
}, e), {}))(), Hy = {
  col: Object.keys(l_),
  offset: Object.keys(i_),
  order: Object.keys(s_)
};
function KA(e, t, n) {
  let a = e;
  if (!(n == null || n === !1)) {
    if (t) {
      const r = t.replace(e, "");
      a += `-${r}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === !0) || (a += `-${n}`), a.toLowerCase();
  }
}
const XA = ["auto", "start", "end", "center", "baseline", "stretch"], QA = oe()({
  name: "VCol",
  props: {
    cols: {
      type: [Boolean, String, Number],
      default: !1
    },
    ...l_,
    offset: {
      type: [String, Number],
      default: null
    },
    ...i_,
    order: {
      type: [String, Number],
      default: null
    },
    ...s_,
    alignSelf: {
      type: String,
      default: null,
      validator: (e) => XA.includes(e)
    },
    ...je()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = _(() => {
      const r = [];
      let o;
      for (o in Hy)
        Hy[o].forEach((i) => {
          const s = e[i], u = KA(o, i, s);
          u && r.push(u);
        });
      const l = r.some((i) => i.startsWith("v-col-"));
      return r.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !l || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), r;
    });
    return () => {
      var r;
      return Xa(e.tag, {
        class: a.value
      }, (r = n.default) == null ? void 0 : r.call(n));
    };
  }
}), ZA = ["sm", "md", "lg", "xl", "xxl"], Iv = ["start", "end", "center"], u_ = ["space-between", "space-around", "space-evenly"];
function Av(e, t) {
  return ZA.reduce((n, a) => (n[e + Fn(a)] = t(), n), {});
}
const JA = [...Iv, "baseline", "stretch"], c_ = (e) => JA.includes(e), f_ = Av("align", () => ({
  type: String,
  default: null,
  validator: c_
})), eM = [...Iv, ...u_], d_ = (e) => eM.includes(e), v_ = Av("justify", () => ({
  type: String,
  default: null,
  validator: d_
})), tM = [...Iv, ...u_, "stretch"], m_ = (e) => tM.includes(e), h_ = Av("alignContent", () => ({
  type: String,
  default: null,
  validator: m_
})), Uy = {
  align: Object.keys(f_),
  justify: Object.keys(v_),
  alignContent: Object.keys(h_)
}, nM = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function aM(e, t, n) {
  let a = nM[e];
  if (n != null) {
    if (t) {
      const r = t.replace(e, "");
      a += `-${r}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const rM = oe()({
  name: "VRow",
  props: {
    dense: Boolean,
    noGutters: Boolean,
    align: {
      type: String,
      default: null,
      validator: c_
    },
    ...f_,
    justify: {
      type: String,
      default: null,
      validator: d_
    },
    ...v_,
    alignContent: {
      type: String,
      default: null,
      validator: m_
    },
    ...h_,
    ...je()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = _(() => {
      const r = [];
      let o;
      for (o in Uy)
        Uy[o].forEach((l) => {
          const i = e[l], s = aM(o, l, i);
          s && r.push(s);
        });
      return r.push({
        "v-row--no-gutters": e.noGutters,
        "v-row--dense": e.dense,
        [`align-${e.align}`]: e.align,
        [`justify-${e.justify}`]: e.justify,
        [`align-content-${e.alignContent}`]: e.alignContent
      }), r;
    });
    return () => {
      var r;
      return Xa(e.tag, {
        class: ["v-row", a.value]
      }, (r = n.default) == null ? void 0 : r.call(n));
    };
  }
}), oM = Gn("flex-grow-1", "div", "VSpacer"), lM = oe()({
  name: "VHover",
  props: {
    disabled: Boolean,
    modelValue: {
      type: Boolean,
      default: void 0
    },
    ...$0()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = He(e, "modelValue"), {
      runOpenDelay: r,
      runCloseDelay: o
    } = P0(e, (l) => !e.disabled && (a.value = l));
    return () => {
      var l;
      return (l = n.default) == null ? void 0 : l.call(n, {
        isHovering: a.value,
        props: {
          onMouseenter: r,
          onMouseleave: o
        }
      });
    };
  }
});
const y_ = Symbol.for("vuetify:v-item-group"), iM = oe()({
  name: "VItemGroup",
  props: {
    ...xo({
      selectedClass: "v-item--selected"
    }),
    ...je(),
    ...Ge()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = at(e), {
      isSelected: r,
      select: o,
      next: l,
      prev: i,
      selected: s
    } = Lr(e, y_);
    return () => m(e.tag, {
      class: ["v-item-group", a.value]
    }, {
      default: () => {
        var u;
        return [(u = n.default) == null ? void 0 : u.call(n, {
          isSelected: r,
          select: o,
          next: l,
          prev: i,
          selected: s.value
        })];
      }
    });
  }
}), sM = oe()({
  name: "VItem",
  props: Fr(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isSelected: a,
      select: r,
      toggle: o,
      selectedClass: l,
      value: i,
      disabled: s
    } = Oo(e, y_);
    return () => {
      var u;
      return (u = n.default) == null ? void 0 : u.call(n, {
        isSelected: a.value,
        selectedClass: l.value,
        select: r,
        toggle: o,
        value: i.value,
        disabled: s.value
      });
    };
  }
});
const uM = Gn("v-kbd");
const cM = oe()({
  name: "VLayout",
  props: lb(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      layoutClasses: a,
      layoutStyles: r,
      getLayoutItem: o,
      items: l,
      layoutRef: i
    } = ib(e);
    return fe(() => {
      var s;
      return m("div", {
        ref: i,
        class: a.value,
        style: r.value
      }, [(s = n.default) == null ? void 0 : s.call(n)]);
    }), {
      getLayoutItem: o,
      items: l
    };
  }
});
const fM = oe()({
  name: "VLayoutItem",
  props: {
    position: {
      type: String,
      required: !0
    },
    size: {
      type: [Number, String],
      default: 300
    },
    modelValue: Boolean,
    ..._o()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      layoutItemStyles: a
    } = wo({
      id: e.name,
      order: _(() => parseInt(e.order, 10)),
      position: ne(e, "position"),
      elementSize: ne(e, "size"),
      layoutSize: ne(e, "size"),
      active: ne(e, "modelValue"),
      absolute: ne(e, "absolute")
    });
    return () => {
      var r;
      return m("div", {
        class: ["v-layout-item"],
        style: a.value
      }, [(r = n.default) == null ? void 0 : r.call(n)]);
    };
  }
}), dM = oe()({
  name: "VLazy",
  directives: {
    intersect: ku
  },
  props: {
    modelValue: Boolean,
    options: {
      type: Object,
      // For more information on types, navigate to:
      // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      default: () => ({
        root: void 0,
        rootMargin: void 0,
        threshold: void 0
      })
    },
    ...Kn(),
    ...je(),
    ...Ta({
      transition: "fade-transition"
    })
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      dimensionStyles: a
    } = Xn(e), r = He(e, "modelValue");
    function o(l) {
      r.value || (r.value = l);
    }
    return fe(() => st(m(e.tag, {
      class: "v-lazy",
      style: a.value
    }, {
      default: () => [r.value && m(la, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => {
          var l;
          return [(l = n.default) == null ? void 0 : l.call(n)];
        }
      })]
    }), [[bn("intersect"), o, e.options]])), {};
  }
});
const vM = oe()({
  name: "VLocaleProvider",
  props: {
    locale: String,
    fallbackLocale: String,
    messages: Object,
    rtl: {
      type: Boolean,
      default: void 0
    }
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      rtlClasses: a
    } = Ox(e);
    return fe(() => {
      var r;
      return m("div", {
        class: ["v-locale-provider", a.value]
      }, [(r = n.default) == null ? void 0 : r.call(n)]);
    }), {};
  }
});
const mM = oe()({
  name: "VMain",
  props: {
    scrollable: Boolean,
    ...je({
      tag: "main"
    })
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      mainStyles: a
    } = Rx(), {
      ssrBootStyles: r
    } = ko();
    return fe(() => m(e.tag, {
      class: ["v-main", {
        "v-main--scrollable": e.scrollable
      }],
      style: [a.value, r.value]
    }, {
      default: () => {
        var o, l;
        return [e.scrollable ? m("div", {
          class: "v-main__scroller"
        }, [(o = n.default) == null ? void 0 : o.call(n)]) : (l = n.default) == null ? void 0 : l.call(n)];
      }
    })), {};
  }
});
function hM(e) {
  let {
    rootEl: t,
    isSticky: n,
    layoutItemStyles: a
  } = e;
  const r = R(!1), o = R(0), l = _(() => {
    const u = typeof r.value == "boolean" ? "top" : r.value;
    return [n.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, r.value ? {
      [u]: ge(o.value)
    } : {
      top: a.value.top
    }];
  });
  ft(() => {
    pe(n, (u) => {
      u ? window.addEventListener("scroll", s, {
        passive: !0
      }) : window.removeEventListener("scroll", s);
    }, {
      immediate: !0
    });
  }), _n(() => {
    document.removeEventListener("scroll", s);
  });
  let i = 0;
  function s() {
    const u = i > window.scrollY ? "up" : "down", d = t.value.getBoundingClientRect(), c = parseFloat(a.value.top ?? 0), f = window.scrollY - Math.max(0, o.value - c), v = d.height + Math.max(o.value, c) - window.scrollY - window.innerHeight;
    d.height < window.innerHeight - c ? (r.value = "top", o.value = c) : u === "up" && r.value === "bottom" || u === "down" && r.value === "top" ? (o.value = window.scrollY + d.top, r.value = !0) : u === "down" && v <= 0 ? (o.value = 0, r.value = "bottom") : u === "up" && f <= 0 && (o.value = d.top + f, r.value = "top"), i = window.scrollY;
  }
  return {
    isStuck: r,
    stickyStyles: l
  };
}
const yM = 100, pM = 20;
function Yy(e) {
  const t = 1.41421356237;
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * t;
}
function Wy(e) {
  if (e.length < 2)
    return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let t = 0;
  for (let n = e.length - 1; n > 0; n--) {
    if (e[n].t === e[n - 1].t)
      continue;
    const a = Yy(t), r = (e[n].d - e[n - 1].d) / (e[n].t - e[n - 1].t);
    t += (r - a) * Math.abs(r), n === e.length - 1 && (t *= 0.5);
  }
  return Yy(t) * 1e3;
}
function gM() {
  const e = {};
  function t(r) {
    Array.from(r.changedTouches).forEach((o) => {
      (e[o.identifier] ?? (e[o.identifier] = new Hk(pM))).push([r.timeStamp, o]);
    });
  }
  function n(r) {
    Array.from(r.changedTouches).forEach((o) => {
      delete e[o.identifier];
    });
  }
  function a(r) {
    var u;
    const o = (u = e[r]) == null ? void 0 : u.values().reverse();
    if (!o)
      throw new Error(`No samples for touch id ${r}`);
    const l = o[0], i = [], s = [];
    for (const d of o) {
      if (l[0] - d[0] > yM)
        break;
      i.push({
        t: d[0],
        d: d[1].clientX
      }), s.push({
        t: d[0],
        d: d[1].clientY
      });
    }
    return {
      x: Wy(i),
      y: Wy(s),
      get direction() {
        const {
          x: d,
          y: c
        } = this, [f, v] = [Math.abs(d), Math.abs(c)];
        return f > v && d >= 0 ? "right" : f > v && d <= 0 ? "left" : v > f && c >= 0 ? "down" : v > f && c <= 0 ? "up" : bM();
      }
    };
  }
  return {
    addMovement: t,
    endTouch: n,
    getVelocity: a
  };
}
function bM() {
  throw new Error();
}
function _M(e) {
  let {
    isActive: t,
    isTemporary: n,
    width: a,
    touchless: r,
    position: o
  } = e;
  ft(() => {
    window.addEventListener("touchstart", O, {
      passive: !0
    }), window.addEventListener("touchmove", E, {
      passive: !1
    }), window.addEventListener("touchend", S, {
      passive: !0
    });
  }), _n(() => {
    window.removeEventListener("touchstart", O), window.removeEventListener("touchmove", E), window.removeEventListener("touchend", S);
  });
  const l = _(() => ["left", "right"].includes(o.value)), {
    addMovement: i,
    endTouch: s,
    getVelocity: u
  } = gM();
  let d = !1;
  const c = R(!1), f = R(0), v = R(0);
  let y;
  function p(V, $) {
    return (o.value === "left" ? V : o.value === "right" ? document.documentElement.clientWidth - V : o.value === "top" ? V : o.value === "bottom" ? document.documentElement.clientHeight - V : Xr()) - ($ ? a.value : 0);
  }
  function x(V) {
    let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const k = o.value === "left" ? (V - v.value) / a.value : o.value === "right" ? (document.documentElement.clientWidth - V - v.value) / a.value : o.value === "top" ? (V - v.value) / a.value : o.value === "bottom" ? (document.documentElement.clientHeight - V - v.value) / a.value : Xr();
    return $ ? Math.max(0, Math.min(1, k)) : k;
  }
  function O(V) {
    if (r.value)
      return;
    const $ = V.changedTouches[0].clientX, k = V.changedTouches[0].clientY, g = 25, b = o.value === "left" ? $ < g : o.value === "right" ? $ > document.documentElement.clientWidth - g : o.value === "top" ? k < g : o.value === "bottom" ? k > document.documentElement.clientHeight - g : Xr(), w = t.value && (o.value === "left" ? $ < a.value : o.value === "right" ? $ > document.documentElement.clientWidth - a.value : o.value === "top" ? k < a.value : o.value === "bottom" ? k > document.documentElement.clientHeight - a.value : Xr());
    (b || w || t.value && n.value) && (d = !0, y = [$, k], v.value = p(l.value ? $ : k, t.value), f.value = x(l.value ? $ : k), s(V), i(V));
  }
  function E(V) {
    const $ = V.changedTouches[0].clientX, k = V.changedTouches[0].clientY;
    if (d) {
      if (!V.cancelable) {
        d = !1;
        return;
      }
      const b = Math.abs($ - y[0]), w = Math.abs(k - y[1]);
      (l.value ? b > w && b > 3 : w > b && w > 3) ? (c.value = !0, d = !1) : (l.value ? w : b) > 3 && (d = !1);
    }
    if (!c.value)
      return;
    V.preventDefault(), i(V);
    const g = x(l.value ? $ : k, !1);
    f.value = Math.max(0, Math.min(1, g)), g > 1 ? v.value = p(l.value ? $ : k, !0) : g < 0 && (v.value = p(l.value ? $ : k, !1));
  }
  function S(V) {
    if (d = !1, !c.value)
      return;
    i(V), c.value = !1;
    const $ = u(V.changedTouches[0].identifier), k = Math.abs($.x), g = Math.abs($.y);
    (l.value ? k > g && k > 400 : g > k && g > 3) ? t.value = $.direction === ({
      left: "right",
      right: "left",
      top: "down",
      bottom: "up"
    }[o.value] || Xr()) : t.value = f.value > 0.5;
  }
  const N = _(() => c.value ? {
    transform: o.value === "left" ? `translateX(calc(-100% + ${f.value * a.value}px))` : o.value === "right" ? `translateX(calc(100% - ${f.value * a.value}px))` : o.value === "top" ? `translateY(calc(-100% + ${f.value * a.value}px))` : o.value === "bottom" ? `translateY(calc(100% - ${f.value * a.value}px))` : Xr(),
    transition: "none"
  } : void 0);
  return {
    isDragging: c,
    dragProgress: f,
    dragStyles: N
  };
}
function Xr() {
  throw new Error();
}
const wM = ["start", "end", "left", "right", "top", "bottom"], SM = oe()({
  name: "VNavigationDrawer",
  props: {
    color: String,
    disableResizeWatcher: Boolean,
    disableRouteWatcher: Boolean,
    expandOnHover: Boolean,
    floating: Boolean,
    modelValue: {
      type: Boolean,
      default: null
    },
    permanent: Boolean,
    rail: {
      type: Boolean,
      default: null
    },
    railWidth: {
      type: [Number, String],
      default: 56
    },
    scrim: {
      type: [String, Boolean],
      default: !0
    },
    image: String,
    temporary: Boolean,
    touchless: Boolean,
    width: {
      type: [Number, String],
      default: 256
    },
    location: {
      type: String,
      default: "start",
      validator: (e) => wM.includes(e)
    },
    sticky: Boolean,
    ...Pn(),
    ...It(),
    ..._o(),
    ...ht(),
    ...je({
      tag: "nav"
    }),
    ...Ge()
  },
  emits: {
    "update:modelValue": (e) => !0,
    "update:rail": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: r
    } = t;
    const {
      isRtl: o
    } = Pa(), {
      themeClasses: l
    } = at(e), {
      borderClasses: i
    } = jn(e), {
      backgroundColorClasses: s,
      backgroundColorStyles: u
    } = Nt(ne(e, "color")), {
      elevationClasses: d
    } = zt(e), {
      mobile: c
    } = $a(), {
      roundedClasses: f
    } = kt(e), v = n0(), y = He(e, "modelValue", null, (h) => !!h), {
      ssrBootStyles: p
    } = ko(), x = R(), O = R(!1), E = _(() => e.rail && e.expandOnHover && O.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), S = _(() => jc(e.location, o.value)), N = _(() => !e.permanent && (c.value || e.temporary)), V = _(() => e.sticky && !N.value && S.value !== "bottom");
    e.expandOnHover && e.rail != null && pe(O, (h) => a("update:rail", !h)), e.disableResizeWatcher || pe(N, (h) => !e.permanent && Je(() => y.value = !h)), !e.disableRouteWatcher && v && pe(v.currentRoute, () => N.value && (y.value = !1)), pe(() => e.permanent, (h) => {
      h && (y.value = !0);
    }), fu(() => {
      e.modelValue != null || N.value || (y.value = e.permanent || !c.value);
    });
    const {
      isDragging: $,
      dragProgress: k,
      dragStyles: g
    } = _M({
      isActive: y,
      isTemporary: N,
      width: E,
      touchless: ne(e, "touchless"),
      position: S
    }), b = _(() => {
      const h = N.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : E.value;
      return $.value ? h * k.value : h;
    }), {
      layoutItemStyles: w,
      layoutRect: C,
      layoutItemScrimStyles: T
    } = wo({
      id: e.name,
      order: _(() => parseInt(e.order, 10)),
      position: S,
      layoutSize: b,
      elementSize: E,
      active: _(() => y.value || $.value),
      disableTransitions: _(() => $.value),
      absolute: _(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        e.absolute || V.value && typeof A.value != "string"
      ))
    }), {
      isStuck: A,
      stickyStyles: z
    } = hM({
      rootEl: x,
      isSticky: V,
      layoutItemStyles: w
    }), U = Nt(_(() => typeof e.scrim == "string" ? e.scrim : null)), B = _(() => ({
      ...$.value ? {
        opacity: k.value * 0.2,
        transition: "none"
      } : void 0,
      ...C.value ? {
        left: ge(C.value.left),
        right: ge(C.value.right),
        top: ge(C.value.top),
        bottom: ge(C.value.bottom)
      } : void 0,
      ...T.value
    }));
    return Vt({
      VList: {
        bgColor: "transparent"
      }
    }), fe(() => {
      const h = r.image || e.image;
      return m(ye, null, [m(e.tag, ve({
        ref: x,
        onMouseenter: () => O.value = !0,
        onMouseleave: () => O.value = !1,
        class: ["v-navigation-drawer", `v-navigation-drawer--${S.value}`, {
          "v-navigation-drawer--expand-on-hover": e.expandOnHover,
          "v-navigation-drawer--floating": e.floating,
          "v-navigation-drawer--is-hovering": O.value,
          "v-navigation-drawer--rail": e.rail,
          "v-navigation-drawer--temporary": N.value,
          "v-navigation-drawer--active": y.value,
          "v-navigation-drawer--sticky": V.value
        }, l.value, s.value, i.value, d.value, f.value],
        style: [u.value, w.value, g.value, p.value, z.value]
      }, n), {
        default: () => {
          var P, W, H, j;
          return [h && m("div", {
            key: "image",
            class: "v-navigation-drawer__img"
          }, [r.image ? (P = r.image) == null ? void 0 : P.call(r, {
            image: e.image
          }) : m("img", {
            src: e.image,
            alt: ""
          }, null)]), r.prepend && m("div", {
            class: "v-navigation-drawer__prepend"
          }, [(W = r.prepend) == null ? void 0 : W.call(r)]), m("div", {
            class: "v-navigation-drawer__content"
          }, [(H = r.default) == null ? void 0 : H.call(r)]), r.append && m("div", {
            class: "v-navigation-drawer__append"
          }, [(j = r.append) == null ? void 0 : j.call(r)])];
        }
      }), m(Jt, {
        name: "fade-transition"
      }, {
        default: () => [N.value && ($.value || y.value) && !!e.scrim && m("div", {
          class: ["v-navigation-drawer__scrim", U.backgroundColorClasses.value],
          style: [B.value, U.backgroundColorStyles.value],
          onClick: () => y.value = !1
        }, null)]
      })]);
    }), {
      isStuck: A
    };
  }
}), kM = Cn({
  name: "VNoSsr",
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = D0();
    return () => {
      var r;
      return a.value && ((r = n.default) == null ? void 0 : r.call(n));
    };
  }
});
function xM() {
  const e = R([]);
  Ad(() => e.value = []);
  function t(n, a) {
    e.value[a] = n;
  }
  return {
    refs: e,
    updateRef: t
  };
}
const OM = oe()({
  name: "VPagination",
  props: {
    activeColor: String,
    start: {
      type: [Number, String],
      default: 1
    },
    modelValue: {
      type: Number,
      default: (e) => e.start
    },
    disabled: Boolean,
    length: {
      type: [Number, String],
      default: 1,
      validator: (e) => e % 1 === 0
    },
    totalVisible: [Number, String],
    firstIcon: {
      type: Me,
      default: "$first"
    },
    prevIcon: {
      type: Me,
      default: "$prev"
    },
    nextIcon: {
      type: Me,
      default: "$next"
    },
    lastIcon: {
      type: Me,
      default: "$last"
    },
    ariaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.root"
    },
    pageAriaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.page"
    },
    currentPageAriaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.currentPage"
    },
    firstAriaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.first"
    },
    previousAriaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.previous"
    },
    nextAriaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.next"
    },
    lastAriaLabel: {
      type: String,
      default: "$vuetify.pagination.ariaLabel.last"
    },
    ellipsis: {
      type: String,
      default: "..."
    },
    showFirstLastPage: Boolean,
    ...Pn(),
    ...Ft(),
    ...It(),
    ...ht(),
    ...Na(),
    ...je({
      tag: "nav"
    }),
    ...Ge(),
    ...Hn({
      variant: "text"
    })
  },
  emits: {
    "update:modelValue": (e) => !0,
    first: (e) => !0,
    prev: (e) => !0,
    next: (e) => !0,
    last: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const r = He(e, "modelValue"), {
      t: o,
      n: l
    } = Ln(), {
      isRtl: i
    } = Pa(), {
      themeClasses: s
    } = at(e), {
      width: u
    } = $a(), d = R(-1);
    Vt(void 0, {
      scoped: !0
    });
    const {
      resizeRef: c
    } = qa((g) => {
      if (!g.length)
        return;
      const {
        target: b,
        contentRect: w
      } = g[0], C = b.querySelector(".v-pagination__list > *");
      if (!C)
        return;
      const T = w.width, A = C.offsetWidth + parseFloat(getComputedStyle(C).marginRight) * 2;
      d.value = p(T, A);
    }), f = _(() => parseInt(e.length, 10)), v = _(() => parseInt(e.start, 10)), y = _(() => e.totalVisible ? parseInt(e.totalVisible, 10) : d.value >= 0 ? d.value : p(u.value, 58));
    function p(g, b) {
      const w = e.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
        // Round to two decimal places to avoid floating point errors
        +((g - b * w) / b).toFixed(2)
      ));
    }
    const x = _(() => {
      if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER)
        return [];
      if (y.value <= 1)
        return [r.value];
      if (f.value <= y.value)
        return hr(f.value, v.value);
      const g = y.value % 2 === 0, b = g ? y.value / 2 : Math.floor(y.value / 2), w = g ? b : b + 1, C = f.value - b;
      if (w - r.value >= 0)
        return [...hr(Math.max(1, y.value - 1), v.value), e.ellipsis, f.value];
      if (r.value - C >= (g ? 1 : 0)) {
        const T = y.value - 1, A = f.value - T + v.value;
        return [v.value, e.ellipsis, ...hr(T, A)];
      } else {
        const T = Math.max(1, y.value - 3), A = T === 1 ? r.value : r.value - Math.ceil(T / 2) + v.value;
        return [v.value, e.ellipsis, ...hr(T, A), e.ellipsis, f.value];
      }
    });
    function O(g, b, w) {
      g.preventDefault(), r.value = b, w && a(w, b);
    }
    const {
      refs: E,
      updateRef: S
    } = xM();
    Vt({
      VPaginationBtn: {
        color: ne(e, "color"),
        border: ne(e, "border"),
        density: ne(e, "density"),
        size: ne(e, "size"),
        variant: ne(e, "variant"),
        rounded: ne(e, "rounded"),
        elevation: ne(e, "elevation")
      }
    });
    const N = _(() => x.value.map((g, b) => {
      const w = (C) => S(C, b);
      if (typeof g == "string")
        return {
          isActive: !1,
          key: `ellipsis-${b}`,
          page: g,
          props: {
            ref: w,
            ellipsis: !0,
            icon: !0,
            disabled: !0
          }
        };
      {
        const C = g === r.value;
        return {
          isActive: C,
          key: g,
          page: l(g),
          props: {
            ref: w,
            ellipsis: !1,
            icon: !0,
            disabled: !!e.disabled || e.length < 2,
            color: C ? e.activeColor : e.color,
            ariaCurrent: C,
            ariaLabel: o(C ? e.currentPageAriaLabel : e.pageAriaLabel, g),
            onClick: (T) => O(T, g)
          }
        };
      }
    })), V = _(() => {
      const g = !!e.disabled || r.value <= v.value, b = !!e.disabled || r.value >= v.value + f.value - 1;
      return {
        first: e.showFirstLastPage ? {
          icon: i.value ? e.lastIcon : e.firstIcon,
          onClick: (w) => O(w, v.value, "first"),
          disabled: g,
          ariaLabel: o(e.firstAriaLabel),
          ariaDisabled: g
        } : void 0,
        prev: {
          icon: i.value ? e.nextIcon : e.prevIcon,
          onClick: (w) => O(w, r.value - 1, "prev"),
          disabled: g,
          ariaLabel: o(e.previousAriaLabel),
          ariaDisabled: g
        },
        next: {
          icon: i.value ? e.prevIcon : e.nextIcon,
          onClick: (w) => O(w, r.value + 1, "next"),
          disabled: b,
          ariaLabel: o(e.nextAriaLabel),
          ariaDisabled: b
        },
        last: e.showFirstLastPage ? {
          icon: i.value ? e.firstIcon : e.lastIcon,
          onClick: (w) => O(w, v.value + f.value - 1, "last"),
          disabled: b,
          ariaLabel: o(e.lastAriaLabel),
          ariaDisabled: b
        } : void 0
      };
    });
    function $() {
      var b;
      const g = r.value - v.value;
      (b = E.value[g]) == null || b.$el.focus();
    }
    function k(g) {
      g.key === Fc.left && !e.disabled && r.value > e.start ? (r.value = r.value - 1, Je($)) : g.key === Fc.right && !e.disabled && r.value < v.value + f.value - 1 && (r.value = r.value + 1, Je($));
    }
    return fe(() => m(e.tag, {
      ref: c,
      class: ["v-pagination", s.value],
      role: "navigation",
      "aria-label": o(e.ariaLabel),
      onKeydown: k,
      "data-test": "v-pagination-root"
    }, {
      default: () => [m("ul", {
        class: "v-pagination__list"
      }, [e.showFirstLastPage && m("li", {
        key: "first",
        class: "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [n.first ? n.first(V.value.first) : m(pn, ve({
        _as: "VPaginationBtn"
      }, V.value.first), null)]), m("li", {
        key: "prev",
        class: "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [n.prev ? n.prev(V.value.prev) : m(pn, ve({
        _as: "VPaginationBtn"
      }, V.value.prev), null)]), N.value.map((g, b) => m("li", {
        key: g.key,
        class: ["v-pagination__item", {
          "v-pagination__item--is-active": g.isActive
        }],
        "data-test": "v-pagination-item"
      }, [n.item ? n.item(g) : m(pn, ve({
        _as: "VPaginationBtn"
      }, g.props), {
        default: () => [g.page]
      })])), m("li", {
        key: "next",
        class: "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [n.next ? n.next(V.value.next) : m(pn, ve({
        _as: "VPaginationBtn"
      }, V.value.next), null)]), e.showFirstLastPage && m("li", {
        key: "last",
        class: "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [n.last ? n.last(V.value.last) : m(pn, ve({
        _as: "VPaginationBtn"
      }, V.value.last), null)])])]
    })), {};
  }
});
function CM(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const EM = oe()({
  name: "VParallax",
  props: {
    scale: {
      type: [Number, String],
      default: 0.5
    }
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      intersectionRef: a,
      isIntersecting: r
    } = bv(), {
      resizeRef: o,
      contentRect: l
    } = qa(), {
      height: i
    } = $a(), s = R();
    ca(() => {
      var v;
      a.value = o.value = (v = s.value) == null ? void 0 : v.$el;
    });
    let u;
    pe(r, (v) => {
      v ? (u = Zg(a.value), u = u === document.scrollingElement ? document : u, u.addEventListener("scroll", f, {
        passive: !0
      }), f()) : u.removeEventListener("scroll", f);
    }), _n(() => {
      u == null || u.removeEventListener("scroll", f);
    }), pe(i, f), pe(() => {
      var v;
      return (v = l.value) == null ? void 0 : v.height;
    }, f);
    const d = _(() => 1 - xn(+e.scale));
    let c = -1;
    function f() {
      r.value && (cancelAnimationFrame(c), c = requestAnimationFrame(() => {
        var V;
        const v = ((V = s.value) == null ? void 0 : V.$el).querySelector(".v-img__img");
        if (!v)
          return;
        const y = u.clientHeight ?? document.documentElement.clientHeight, p = u.scrollTop ?? window.scrollY, x = a.value.offsetTop, O = l.value.height, E = x + (O - y) / 2, S = CM((p - E) * d.value), N = Math.max(1, (d.value * (y - O) + O) / O);
        v.style.setProperty("transform", `translateY(${S}px) scale(${N})`);
      }));
    }
    return fe(() => m(So, {
      class: ["v-parallax", {
        "v-parallax--active": r.value
      }],
      ref: s,
      cover: !0,
      onLoadstart: f,
      onLoad: f
    }, n)), {};
  }
}), $M = oe()({
  name: "VRadio",
  props: {
    ...Tu({
      falseIcon: "$radioOff",
      trueIcon: "$radioOn"
    })
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return fe(() => m(Dl, ve(e, {
      class: "v-radio",
      type: "radio"
    }), n)), {};
  }
});
const PM = oe()({
  name: "VRadioGroup",
  inheritAttrs: !1,
  props: {
    height: {
      type: [Number, String],
      default: "auto"
    },
    ...Da(),
    ...Ar(Cv(), ["multiple"]),
    trueIcon: {
      type: Me,
      default: "$radioOn"
    },
    falseIcon: {
      type: Me,
      default: "$radioOff"
    },
    type: {
      type: String,
      default: "radio"
    }
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const r = nn(), o = _(() => e.id || `radio-group-${r}`), l = He(e, "modelValue");
    return fe(() => {
      const [i, s] = Mr(n), [u, d] = tr(e), [c, f] = f0({
        ...e,
        multiple: !1
      }), v = a.label ? a.label({
        label: e.label,
        props: {
          for: o.value
        }
      }) : e.label;
      return m(da, ve({
        class: "v-radio-group"
      }, i, u, {
        modelValue: l.value,
        "onUpdate:modelValue": (y) => l.value = y,
        id: o.value
      }), {
        ...a,
        default: (y) => {
          let {
            id: p,
            messagesId: x,
            isDisabled: O,
            isReadonly: E
          } = y;
          return m(ye, null, [v && m(To, {
            id: p.value
          }, {
            default: () => [v]
          }), m(c0, ve(c, {
            id: p.value,
            "aria-describedby": x.value,
            defaultsTarget: "VRadio",
            trueIcon: e.trueIcon,
            falseIcon: e.falseIcon,
            type: e.type,
            disabled: O.value,
            readonly: E.value,
            "aria-labelledby": v ? p.value : void 0
          }, s, {
            modelValue: l.value,
            "onUpdate:modelValue": (S) => l.value = S
          }), a)]);
        }
      });
    }), {};
  }
}), TM = oe()({
  name: "VRangeSlider",
  props: {
    ...Ou(),
    ...Da(),
    ...J0(),
    strict: Boolean,
    modelValue: {
      type: Array,
      default: () => [0, 0]
    }
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = R(), r = R(), o = R();
    function l(k) {
      if (!a.value || !r.value)
        return;
      const g = pd(k, a.value.$el, e.direction), b = pd(k, r.value.$el, e.direction), w = Math.abs(g), C = Math.abs(b);
      return w < C || w === C && g < 0 ? a.value.$el : r.value.$el;
    }
    const {
      activeThumbRef: i,
      hasLabels: s,
      max: u,
      min: d,
      mousePressed: c,
      onSliderMousedown: f,
      onSliderTouchstart: v,
      position: y,
      roundValue: p,
      trackContainerRef: x
    } = e_({
      /* eslint-disable @typescript-eslint/no-use-before-define */
      props: e,
      handleSliderMouseUp: (k) => {
        var g;
        O.value = i.value === ((g = a.value) == null ? void 0 : g.$el) ? [k, O.value[1]] : [O.value[0], k];
      },
      handleMouseMove: (k) => {
        var w, C, T, A;
        const [g, b] = O.value;
        !e.strict && g === b && g !== d.value && (i.value = k > g ? (w = r.value) == null ? void 0 : w.$el : (C = a.value) == null ? void 0 : C.$el, (T = i.value) == null || T.focus()), i.value === ((A = a.value) == null ? void 0 : A.$el) ? O.value = [Math.min(k, b), b] : O.value = [g, Math.max(g, k)];
      },
      getActiveThumb: l
      /* eslint-enable @typescript-eslint/no-use-before-define */
    }), O = He(e, "modelValue", void 0, (k) => !k || !k.length ? [0, 0] : k.map((g) => p(g))), {
      isFocused: E,
      focus: S,
      blur: N
    } = Hr(e), V = _(() => y(O.value[0])), $ = _(() => y(O.value[1]));
    return fe(() => {
      const [k, g] = tr(e), b = !!(e.label || n.label || n.prepend);
      return m(da, ve({
        class: ["v-slider", "v-range-slider", {
          "v-slider--has-labels": !!n["tick-label"] || s.value,
          "v-slider--focused": E.value,
          "v-slider--pressed": c.value,
          "v-slider--disabled": e.disabled
        }],
        ref: o
      }, k, {
        focused: E.value
      }), {
        ...n,
        prepend: b ? (w) => {
          var C, T;
          return m(ye, null, [((C = n.label) == null ? void 0 : C.call(n, w)) ?? e.label ? m(To, {
            class: "v-slider__label",
            text: e.label
          }, null) : void 0, (T = n.prepend) == null ? void 0 : T.call(n, w)]);
        } : void 0,
        default: (w) => {
          var A, z;
          let {
            id: C,
            messagesId: T
          } = w;
          return m("div", {
            class: "v-slider__container",
            onMousedown: f,
            onTouchstartPassive: v
          }, [m("input", {
            id: `${C.value}_start`,
            name: e.name || C.value,
            disabled: e.disabled,
            readonly: e.readonly,
            tabindex: "-1",
            value: O.value[0]
          }, null), m("input", {
            id: `${C.value}_stop`,
            name: e.name || C.value,
            disabled: e.disabled,
            readonly: e.readonly,
            tabindex: "-1",
            value: O.value[1]
          }, null), m(t_, {
            ref: x,
            start: V.value,
            stop: $.value
          }, {
            "tick-label": n["tick-label"]
          }), m(gd, {
            ref: a,
            "aria-describedby": T.value,
            focused: E && i.value === ((A = a.value) == null ? void 0 : A.$el),
            modelValue: O.value[0],
            "onUpdate:modelValue": (U) => O.value = [U, O.value[1]],
            onFocus: (U) => {
              var B, h, P, W;
              S(), i.value = (B = a.value) == null ? void 0 : B.$el, O.value[0] === O.value[1] && O.value[1] === d.value && U.relatedTarget !== ((h = r.value) == null ? void 0 : h.$el) && ((P = a.value) == null || P.$el.blur(), (W = r.value) == null || W.$el.focus());
            },
            onBlur: () => {
              N(), i.value = void 0;
            },
            min: d.value,
            max: O.value[1],
            position: V.value
          }, {
            "thumb-label": n["thumb-label"]
          }), m(gd, {
            ref: r,
            "aria-describedby": T.value,
            focused: E && i.value === ((z = r.value) == null ? void 0 : z.$el),
            modelValue: O.value[1],
            "onUpdate:modelValue": (U) => O.value = [O.value[0], U],
            onFocus: (U) => {
              var B, h, P, W;
              S(), i.value = (B = r.value) == null ? void 0 : B.$el, O.value[0] === O.value[1] && O.value[0] === u.value && U.relatedTarget !== ((h = a.value) == null ? void 0 : h.$el) && ((P = r.value) == null || P.$el.blur(), (W = a.value) == null || W.$el.focus());
            },
            onBlur: () => {
              N(), i.value = void 0;
            },
            min: O.value[0],
            max: u.value,
            position: $.value
          }, {
            "thumb-label": n["thumb-label"]
          })]);
        }
      });
    }), {};
  }
});
const NM = oe()({
  name: "VRating",
  props: {
    name: String,
    itemAriaLabel: {
      type: String,
      default: "$vuetify.rating.ariaLabel.item"
    },
    activeColor: String,
    color: String,
    clearable: Boolean,
    disabled: Boolean,
    emptyIcon: {
      type: Me,
      default: "$ratingEmpty"
    },
    fullIcon: {
      type: Me,
      default: "$ratingFull"
    },
    halfIncrements: Boolean,
    hover: Boolean,
    length: {
      type: [Number, String],
      default: 5
    },
    readonly: Boolean,
    modelValue: {
      type: [Number, String],
      default: 0
    },
    itemLabels: Array,
    itemLabelPosition: {
      type: String,
      default: "top",
      validator: (e) => ["top", "bottom"].includes(e)
    },
    ripple: Boolean,
    ...Ft(),
    ...Na(),
    ...je(),
    ...Ge()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = Ln(), {
      themeClasses: r
    } = at(e), o = He(e, "modelValue"), l = _(() => xn(parseFloat(o.value), 0, +e.length)), i = _(() => hr(Number(e.length), 1)), s = _(() => i.value.flatMap((N) => e.halfIncrements ? [N - 0.5, N] : [N])), u = R(-1), d = R(-1), c = R();
    let f = !1;
    const v = _(() => s.value.map((N) => {
      const V = e.hover && u.value > -1, $ = l.value >= N, k = u.value >= N, b = (V ? k : $) ? e.fullIcon : e.emptyIcon, w = e.activeColor ?? e.color, C = $ || k ? w : e.color;
      return {
        isFilled: $,
        isHovered: k,
        icon: b,
        color: C
      };
    })), y = _(() => [0, ...s.value].map((N) => {
      function V() {
        u.value = N;
      }
      function $() {
        u.value = -1;
      }
      function k() {
        var w;
        N === 0 && l.value === 0 ? (w = c.value) == null || w.focus() : d.value = N;
      }
      function g() {
        f || (d.value = -1);
      }
      function b() {
        e.disabled || e.readonly || (o.value = l.value === N && e.clearable ? 0 : N);
      }
      return {
        onMouseenter: e.hover ? V : void 0,
        onMouseleave: e.hover ? $ : void 0,
        onFocus: k,
        onBlur: g,
        onClick: b
      };
    }));
    function p() {
      f = !0;
    }
    function x() {
      f = !1;
    }
    const O = _(() => e.name ?? `v-rating-${nn()}`);
    function E(N) {
      var U, B;
      let {
        value: V,
        index: $,
        showStar: k = !0
      } = N;
      const {
        onMouseenter: g,
        onMouseleave: b,
        onFocus: w,
        onBlur: C,
        onClick: T
      } = y.value[$ + 1], A = `${O.value}-${String(V).replace(".", "-")}`, z = {
        color: (U = v.value[$]) == null ? void 0 : U.color,
        density: e.density,
        disabled: e.disabled,
        icon: (B = v.value[$]) == null ? void 0 : B.icon,
        ripple: e.ripple,
        size: e.size,
        tag: "span",
        variant: "plain"
      };
      return m(ye, null, [m("label", {
        for: A,
        class: {
          "v-rating__item--half": e.halfIncrements && V % 1 > 0,
          "v-rating__item--full": e.halfIncrements && V % 1 === 0
        },
        onMousedown: p,
        onMouseup: x,
        onMouseenter: g,
        onMouseleave: b
      }, [m("span", {
        class: "v-rating__hidden"
      }, [a(e.itemAriaLabel, V, e.length)]), k ? n.item ? n.item({
        ...v.value[$],
        props: z,
        value: V,
        index: $
      }) : m(pn, z, null) : void 0]), m("input", {
        class: "v-rating__hidden",
        name: O.value,
        id: A,
        type: "radio",
        value: V,
        checked: l.value === V,
        onClick: T,
        onFocus: w,
        onBlur: C,
        ref: $ === 0 ? c : void 0,
        readonly: e.readonly,
        disabled: e.disabled
      }, null)]);
    }
    function S(N) {
      return n["item-label"] ? n["item-label"](N) : N.label ? m("span", null, [N.label]) : m("span", null, [wt(" ")]);
    }
    return fe(() => {
      var V;
      const N = !!((V = e.itemLabels) != null && V.length) || n["item-label"];
      return m(e.tag, {
        class: ["v-rating", {
          "v-rating--hover": e.hover,
          "v-rating--readonly": e.readonly
        }, r.value]
      }, {
        default: () => [m(E, {
          value: 0,
          index: -1,
          showStar: !1
        }, null), i.value.map(($, k) => {
          var g, b;
          return m("div", {
            class: "v-rating__wrapper"
          }, [N && e.itemLabelPosition === "top" ? S({
            value: $,
            index: k,
            label: (g = e.itemLabels) == null ? void 0 : g[k]
          }) : void 0, m("div", {
            class: ["v-rating__item", {
              "v-rating__item--focused": Math.ceil(d.value) === $
            }]
          }, [e.halfIncrements ? m(ye, null, [m(E, {
            value: $ - 0.5,
            index: k * 2
          }, null), m(E, {
            value: $,
            index: k * 2 + 1
          }, null)]) : m(E, {
            value: $,
            index: k
          }, null)]), N && e.itemLabelPosition === "bottom" ? S({
            value: $,
            index: k,
            label: (b = e.itemLabels) == null ? void 0 : b[k]
          }) : void 0]);
        })]
      });
    }), {};
  }
});
function zy(e) {
  const n = Math.abs(e);
  return Math.sign(e) * (n / ((1 / 0.501 - 2) * (1 - n) + 1));
}
function qy(e) {
  let {
    selectedElement: t,
    containerSize: n,
    contentSize: a,
    isRtl: r,
    currentScrollOffset: o,
    isHorizontal: l
  } = e;
  const i = l ? t.clientWidth : t.clientHeight, s = l ? t.offsetLeft : t.offsetTop, u = r && l ? a - s - i : s, d = n + o, c = i + u, f = i * 0.4;
  return u <= o ? o = Math.max(u - f, 0) : d <= c && (o = Math.min(o - (d - c - f), a - n)), o;
}
function DM(e) {
  let {
    selectedElement: t,
    containerSize: n,
    contentSize: a,
    isRtl: r,
    isHorizontal: o
  } = e;
  const l = o ? t.clientWidth : t.clientHeight, i = o ? t.offsetLeft : t.offsetTop, s = r && o ? a - i - l / 2 - n / 2 : i + l / 2 - n / 2;
  return Math.min(a - n, Math.max(0, s));
}
const p_ = Symbol.for("vuetify:v-slide-group"), g_ = oe()({
  name: "VSlideGroup",
  props: {
    centerActive: Boolean,
    direction: {
      type: String,
      default: "horizontal"
    },
    symbol: {
      type: null,
      default: p_
    },
    nextIcon: {
      type: Me,
      default: "$next"
    },
    prevIcon: {
      type: Me,
      default: "$prev"
    },
    showArrows: {
      type: [Boolean, String],
      validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e)
    },
    ...je(),
    ...xo({
      selectedClass: "v-slide-group-item--active"
    })
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isRtl: a
    } = Pa(), {
      mobile: r
    } = $a(), o = Lr(e, e.symbol), l = R(!1), i = R(0), s = R(0), u = R(0), d = _(() => e.direction === "horizontal"), {
      resizeRef: c,
      contentRect: f
    } = qa(), {
      resizeRef: v,
      contentRect: y
    } = qa(), p = _(() => o.selected.value.length ? o.items.value.findIndex((H) => H.id === o.selected.value[0]) : -1), x = _(() => o.selected.value.length ? o.items.value.findIndex((H) => H.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (Tt) {
      let H = -1;
      pe(() => [o.selected.value, f.value, y.value, d.value], () => {
        cancelAnimationFrame(H), H = requestAnimationFrame(() => {
          if (f.value && y.value) {
            const j = d.value ? "width" : "height";
            s.value = f.value[j], u.value = y.value[j], l.value = s.value + 1 < u.value;
          }
          if (p.value >= 0 && v.value) {
            const j = v.value.children[x.value];
            p.value === 0 || !l.value ? i.value = 0 : e.centerActive ? i.value = DM({
              selectedElement: j,
              containerSize: s.value,
              contentSize: u.value,
              isRtl: a.value,
              isHorizontal: d.value
            }) : l.value && (i.value = qy({
              selectedElement: j,
              containerSize: s.value,
              contentSize: u.value,
              isRtl: a.value,
              currentScrollOffset: i.value,
              isHorizontal: d.value
            }));
          }
        });
      });
    }
    const O = R(!1);
    let E = 0, S = 0;
    function N(H) {
      const j = d.value ? "clientX" : "clientY";
      S = (a.value && d.value ? -1 : 1) * i.value, E = H.touches[0][j], O.value = !0;
    }
    function V(H) {
      if (!l.value)
        return;
      const j = d.value ? "clientX" : "clientY", X = a.value && d.value ? -1 : 1;
      i.value = X * (S + E - H.touches[0][j]);
    }
    function $(H) {
      const j = u.value - s.value;
      i.value < 0 || !l.value ? i.value = 0 : i.value >= j && (i.value = j), O.value = !1;
    }
    function k() {
      c.value && (c.value[d.value ? "scrollLeft" : "scrollTop"] = 0);
    }
    const g = R(!1);
    function b(H) {
      if (g.value = !0, !(!l.value || !v.value)) {
        for (const j of H.composedPath())
          for (const X of v.value.children)
            if (X === j) {
              i.value = qy({
                selectedElement: X,
                containerSize: s.value,
                contentSize: u.value,
                isRtl: a.value,
                currentScrollOffset: i.value,
                isHorizontal: d.value
              });
              return;
            }
      }
    }
    function w(H) {
      g.value = !1;
    }
    function C(H) {
      var j;
      !g.value && !(H.relatedTarget && ((j = v.value) != null && j.contains(H.relatedTarget))) && A();
    }
    function T(H) {
      v.value && (d.value ? H.key === "ArrowRight" ? A(a.value ? "prev" : "next") : H.key === "ArrowLeft" && A(a.value ? "next" : "prev") : H.key === "ArrowDown" ? A("next") : H.key === "ArrowUp" && A("prev"), H.key === "Home" ? A("first") : H.key === "End" && A("last"));
    }
    function A(H) {
      var j, X, Q, Y, I;
      if (v.value)
        if (!H)
          (j = [...v.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter((we) => !we.hasAttribute("disabled"))[0]) == null || j.focus();
        else if (H === "next") {
          const q = (X = v.value.querySelector(":focus")) == null ? void 0 : X.nextElementSibling;
          q ? q.focus() : A("first");
        } else if (H === "prev") {
          const q = (Q = v.value.querySelector(":focus")) == null ? void 0 : Q.previousElementSibling;
          q ? q.focus() : A("last");
        } else
          H === "first" ? (Y = v.value.firstElementChild) == null || Y.focus() : H === "last" && ((I = v.value.lastElementChild) == null || I.focus());
    }
    function z(H) {
      const j = i.value + (H === "prev" ? -1 : 1) * s.value;
      i.value = xn(j, 0, u.value - s.value);
    }
    const U = _(() => {
      let H = i.value > u.value - s.value ? -(u.value - s.value) + zy(u.value - s.value - i.value) : -i.value;
      i.value <= 0 && (H = zy(-i.value));
      const j = a.value && d.value ? -1 : 1;
      return {
        transform: `translate${d.value ? "X" : "Y"}(${j * H}px)`,
        transition: O.value ? "none" : "",
        willChange: O.value ? "transform" : ""
      };
    }), B = _(() => ({
      next: o.next,
      prev: o.prev,
      select: o.select,
      isSelected: o.isSelected
    })), h = _(() => {
      switch (e.showArrows) {
        case "always":
          return !0;
        case "desktop":
          return !r.value;
        case !0:
          return l.value || Math.abs(i.value) > 0;
        case "mobile":
          return r.value || l.value || Math.abs(i.value) > 0;
        default:
          return !r.value && (l.value || Math.abs(i.value) > 0);
      }
    }), P = _(() => Math.abs(i.value) > 0), W = _(() => u.value > Math.abs(i.value) + s.value);
    return fe(() => m(e.tag, {
      class: ["v-slide-group", {
        "v-slide-group--vertical": !d.value,
        "v-slide-group--has-affixes": h.value,
        "v-slide-group--is-overflowing": l.value
      }],
      tabindex: g.value || o.selected.value.length ? -1 : 0,
      onFocus: C
    }, {
      default: () => {
        var H, j, X;
        return [h.value && m("div", {
          key: "prev",
          class: ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !P.value
          }],
          onClick: () => z("prev")
        }, [((H = n.prev) == null ? void 0 : H.call(n, B.value)) ?? m(sd, null, {
          default: () => [m(Pt, {
            icon: a.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), m("div", {
          key: "container",
          ref: c,
          class: "v-slide-group__container",
          onScroll: k
        }, [m("div", {
          ref: v,
          class: "v-slide-group__content",
          style: U.value,
          onTouchstartPassive: N,
          onTouchmovePassive: V,
          onTouchendPassive: $,
          onFocusin: b,
          onFocusout: w,
          onKeydown: T
        }, [(j = n.default) == null ? void 0 : j.call(n, B.value)])]), h.value && m("div", {
          key: "next",
          class: ["v-slide-group__next", {
            "v-slide-group__next--disabled": !W.value
          }],
          onClick: () => z("next")
        }, [((X = n.next) == null ? void 0 : X.call(n, B.value)) ?? m(sd, null, {
          default: () => [m(Pt, {
            icon: a.value ? e.prevIcon : e.nextIcon
          }, null)]
        })])];
      }
    })), {
      selected: o.selected,
      scrollTo: z,
      scrollOffset: i,
      focus: A
    };
  }
}), VM = oe()({
  name: "VSlideGroupItem",
  props: {
    ...Fr()
  },
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Oo(e, p_);
    return () => {
      var r;
      return (r = n.default) == null ? void 0 : r.call(n, {
        isSelected: a.isSelected.value,
        select: a.select,
        toggle: a.toggle,
        selectedClass: a.selectedClass.value
      });
    };
  }
});
const IM = oe()({
  name: "VSnackbar",
  props: {
    multiLine: Boolean,
    timeout: {
      type: [Number, String],
      default: 5e3
    },
    vertical: Boolean,
    ...Ja({
      location: "bottom"
    }),
    ...Eo(),
    ...ht(),
    ...Hn(),
    ...Ge(),
    ...Ar(Al({
      transition: "v-snackbar-transition"
    }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"])
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = He(e, "modelValue"), {
      locationStyles: r
    } = er(e), {
      positionClasses: o
    } = $o(e), {
      scopeId: l
    } = Il(), {
      themeClasses: i
    } = at(e), {
      colorClasses: s,
      colorStyles: u,
      variantClasses: d
    } = Br(e), {
      roundedClasses: c
    } = kt(e), f = R();
    pe(a, y), pe(() => e.timeout, y), ft(() => {
      a.value && y();
    });
    let v = -1;
    function y() {
      window.clearTimeout(v);
      const x = Number(e.timeout);
      !a.value || x === -1 || (v = window.setTimeout(() => {
        a.value = !1;
      }, x));
    }
    function p() {
      window.clearTimeout(v);
    }
    return fe(() => {
      const [x] = Vu(e);
      return m(Do, ve({
        ref: f,
        class: ["v-snackbar", {
          "v-snackbar--active": a.value,
          "v-snackbar--multi-line": e.multiLine && !e.vertical,
          "v-snackbar--vertical": e.vertical
        }, o.value]
      }, x, {
        modelValue: a.value,
        "onUpdate:modelValue": (O) => a.value = O,
        contentProps: ve({
          class: ["v-snackbar__wrapper", i.value, s.value, c.value, d.value],
          style: [r.value, u.value],
          onPointerenter: p,
          onPointerleave: y
        }, x.contentProps),
        persistent: !0,
        noClickAnimation: !0,
        scrim: !1,
        scrollStrategy: "none",
        _disableGlobalStack: !0
      }, l), {
        default: () => [Rr(!1, "v-snackbar"), n.default && m("div", {
          class: "v-snackbar__content",
          role: "status",
          "aria-live": "polite"
        }, [n.default()]), n.actions && m(lt, {
          defaults: {
            VBtn: {
              variant: "text",
              ripple: !1
            }
          }
        }, {
          default: () => [m("div", {
            class: "v-snackbar__actions"
          }, [n.actions()])]
        })],
        activator: n.activator
      });
    }), Qn({}, f);
  }
});
const AM = oe()({
  name: "VSwitch",
  inheritAttrs: !1,
  props: {
    indeterminate: Boolean,
    inset: Boolean,
    flat: Boolean,
    loading: {
      type: [Boolean, String],
      default: !1
    },
    ...Da(),
    ...Tu()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": () => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const r = He(e, "indeterminate"), o = He(e, "modelValue"), {
      loaderClasses: l
    } = xu(e), {
      isFocused: i,
      focus: s,
      blur: u
    } = Hr(e), d = _(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), c = nn(), f = _(() => e.id || `switch-${c}`);
    function v() {
      r.value && (r.value = !1);
    }
    return fe(() => {
      const [y, p] = Mr(n), [x, O] = tr(e), [E, S] = f0(e), N = R();
      function V() {
        var $, k;
        (k = ($ = N.value) == null ? void 0 : $.input) == null || k.click();
      }
      return m(da, ve({
        class: ["v-switch", {
          "v-switch--inset": e.inset
        }, {
          "v-switch--indeterminate": r.value
        }, l.value]
      }, y, x, {
        id: f.value,
        focused: i.value
      }), {
        ...a,
        default: ($) => {
          let {
            id: k,
            messagesId: g,
            isDisabled: b,
            isReadonly: w,
            isValid: C
          } = $;
          return m(Dl, ve({
            ref: N
          }, E, {
            modelValue: o.value,
            "onUpdate:modelValue": [(T) => o.value = T, v],
            id: k.value,
            "aria-describedby": g.value,
            type: "checkbox",
            "aria-checked": r.value ? "mixed" : void 0,
            disabled: b.value,
            readonly: w.value,
            onFocus: s,
            onBlur: u
          }, p), {
            ...a,
            default: () => m("div", {
              class: "v-switch__track",
              onClick: V
            }, null),
            input: (T) => {
              let {
                textColorClasses: A,
                textColorStyles: z
              } = T;
              return m("div", {
                class: ["v-switch__thumb", A.value],
                style: z.value
              }, [e.loading && m(kv, {
                name: "v-switch",
                active: !0,
                color: C.value === !1 ? void 0 : d.value
              }, {
                default: (U) => a.loader ? a.loader(U) : m(_v, {
                  active: U.isActive,
                  color: U.color,
                  indeterminate: !0,
                  size: "16",
                  width: "2"
                }, null)
              })]);
            }
          });
        }
      });
    }), {};
  }
});
const MM = oe()({
  name: "VSystemBar",
  props: {
    color: String,
    height: [Number, String],
    window: Boolean,
    ...It(),
    ..._o(),
    ...ht(),
    ...je(),
    ...Ge()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = at(e), {
      backgroundColorClasses: r,
      backgroundColorStyles: o
    } = Nt(ne(e, "color")), {
      elevationClasses: l
    } = zt(e), {
      roundedClasses: i
    } = kt(e), {
      ssrBootStyles: s
    } = ko(), u = _(() => e.height ?? (e.window ? 32 : 24)), {
      layoutItemStyles: d
    } = wo({
      id: e.name,
      order: _(() => parseInt(e.order, 10)),
      position: R("top"),
      layoutSize: u,
      elementSize: u,
      active: _(() => !0),
      absolute: ne(e, "absolute")
    });
    return fe(() => m(e.tag, {
      class: ["v-system-bar", {
        "v-system-bar--window": e.window
      }, a.value, r.value, l.value, i.value],
      style: [o.value, d.value, s.value]
    }, n)), {};
  }
});
const b_ = Symbol.for("vuetify:v-tabs"), __ = oe()({
  name: "VTab",
  props: {
    fixed: Boolean,
    icon: [Boolean, String, Function, Object],
    prependIcon: Me,
    appendIcon: Me,
    stacked: Boolean,
    title: String,
    ripple: {
      type: Boolean,
      default: !0
    },
    color: String,
    sliderColor: String,
    hideSlider: Boolean,
    direction: {
      type: String,
      default: "horizontal"
    },
    ...je(),
    ...Po(),
    ...Fr({
      selectedClass: "v-tab--selected"
    }),
    ...Ge()
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a
    } = t;
    const {
      textColorClasses: r,
      textColorStyles: o
    } = vn(e, "sliderColor"), l = _(() => e.direction === "horizontal"), i = R(!1), s = R(), u = R();
    function d(c) {
      var v, y;
      let {
        value: f
      } = c;
      if (i.value = f, f) {
        const p = (y = (v = s.value) == null ? void 0 : v.$el.parentElement) == null ? void 0 : y.querySelector(".v-tab--selected .v-tab__slider"), x = u.value;
        if (!p || !x)
          return;
        const O = getComputedStyle(p).color, E = p.getBoundingClientRect(), S = x.getBoundingClientRect(), N = l.value ? "x" : "y", V = l.value ? "X" : "Y", $ = l.value ? "right" : "bottom", k = l.value ? "width" : "height", g = E[N], b = S[N], w = g > b ? E[$] - S[$] : E[N] - S[N], C = Math.sign(w) > 0 ? l.value ? "right" : "bottom" : Math.sign(w) < 0 ? l.value ? "left" : "top" : "center", A = (Math.abs(w) + (Math.sign(w) < 0 ? E[k] : S[k])) / Math.max(E[k], S[k]), z = E[k] / S[k], U = 1.5;
        yr(x, {
          backgroundColor: [O, ""],
          transform: [`translate${V}(${w}px) scale${V}(${z})`, `translate${V}(${w / U}px) scale${V}(${(A - 1) / U + 1})`, ""],
          transformOrigin: Array(3).fill(C)
        }, {
          duration: 225,
          easing: yl
        });
      }
    }
    return fe(() => {
      const [c] = wn(e, ["href", "to", "replace", "icon", "stacked", "prependIcon", "appendIcon", "ripple", "theme", "disabled", "selectedClass", "value", "color"]);
      return m(pn, ve({
        _as: "VTab",
        symbol: b_,
        ref: s,
        class: ["v-tab"],
        tabindex: i.value ? 0 : -1,
        role: "tab",
        "aria-selected": String(i.value),
        active: !1,
        block: e.fixed,
        maxWidth: e.fixed ? 300 : void 0,
        variant: "text",
        rounded: 0
      }, c, a, {
        "onGroup:selected": d
      }), {
        default: () => [n.default ? n.default() : e.title, !e.hideSlider && m("div", {
          ref: u,
          class: ["v-tab__slider", r.value],
          style: o.value
        }, null)]
      });
    }), {};
  }
});
function RM(e) {
  return e ? e.map((t) => typeof t == "string" ? {
    title: t,
    value: t
  } : t) : [];
}
const BM = oe()({
  name: "VTabs",
  props: {
    alignTabs: {
      type: String,
      default: "start"
    },
    color: String,
    direction: {
      type: String,
      default: "horizontal"
    },
    fixedTabs: Boolean,
    items: {
      type: Array,
      default: () => []
    },
    stacked: Boolean,
    bgColor: String,
    grow: Boolean,
    height: {
      type: [Number, String],
      default: void 0
    },
    hideSlider: Boolean,
    sliderColor: String,
    modelValue: null,
    mandatory: {
      type: [Boolean, String],
      default: "force"
    },
    ...Ft(),
    ...je()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = He(e, "modelValue"), r = _(() => RM(e.items)), {
      densityClasses: o
    } = an(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Nt(ne(e, "bgColor"));
    return Vt({
      VTab: {
        color: ne(e, "color"),
        direction: ne(e, "direction"),
        stacked: ne(e, "stacked"),
        fixed: ne(e, "fixedTabs"),
        sliderColor: ne(e, "sliderColor"),
        hideSlider: ne(e, "hideSlider")
      }
    }), fe(() => m(g_, {
      modelValue: a.value,
      "onUpdate:modelValue": (s) => a.value = s,
      class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, {
        "v-tabs--fixed-tabs": e.fixedTabs,
        "v-tabs--grow": e.grow,
        "v-tabs--stacked": e.stacked
      }, o.value, l.value],
      style: [{
        "--v-tabs-height": ge(e.height)
      }, i.value],
      role: "tablist",
      symbol: b_,
      mandatory: e.mandatory,
      direction: e.direction
    }, {
      default: () => [n.default ? n.default() : r.value.map((s) => m(__, ve(s, {
        key: s.title
      }), null))]
    })), {};
  }
});
const FM = oe()({
  name: "VTable",
  props: {
    fixedHeader: Boolean,
    fixedFooter: Boolean,
    height: [Number, String],
    hover: Boolean,
    ...Ft(),
    ...je(),
    ...Ge()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = at(e), {
      densityClasses: r
    } = an(e);
    return fe(() => m(e.tag, {
      class: ["v-table", {
        "v-table--fixed-height": !!e.height,
        "v-table--fixed-header": e.fixedHeader,
        "v-table--fixed-footer": e.fixedFooter,
        "v-table--has-top": !!n.top,
        "v-table--has-bottom": !!n.bottom,
        "v-table--hover": e.hover
      }, a.value, r.value]
    }, {
      default: () => {
        var o, l, i;
        return [(o = n.top) == null ? void 0 : o.call(n), n.default ? m("div", {
          class: "v-table__wrapper",
          style: {
            height: ge(e.height)
          }
        }, [m("table", null, [n.default()])]) : (l = n.wrapper) == null ? void 0 : l.call(n), (i = n.bottom) == null ? void 0 : i.call(n)];
      }
    })), {};
  }
});
const LM = oe()({
  name: "VTextarea",
  directives: {
    Intersect: ku
  },
  inheritAttrs: !1,
  props: {
    autoGrow: Boolean,
    autofocus: Boolean,
    counter: [Boolean, Number, String],
    counterValue: Function,
    hint: String,
    persistentHint: Boolean,
    prefix: String,
    placeholder: String,
    persistentPlaceholder: Boolean,
    persistentCounter: Boolean,
    noResize: Boolean,
    rows: {
      type: [Number, String],
      default: 5,
      validator: (e) => !isNaN(parseFloat(e))
    },
    maxRows: {
      type: [Number, String],
      validator: (e) => !isNaN(parseFloat(e))
    },
    suffix: String,
    ...Da(),
    ...Cu()
  },
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: r
    } = t;
    const o = He(e, "modelValue"), {
      isFocused: l,
      focus: i,
      blur: s
    } = Hr(e), u = _(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : (o.value || "").toString().length), d = _(() => {
      if (n.maxlength)
        return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    });
    function c(w, C) {
      var T, A;
      !e.autofocus || !w || (A = (T = C[0].target) == null ? void 0 : T.focus) == null || A.call(T);
    }
    const f = R(), v = R(), y = R(""), p = R(), x = _(() => l.value || e.persistentPlaceholder), O = _(() => e.messages.length ? e.messages : x.value || e.persistentHint ? e.hint : "");
    function E() {
      var w;
      p.value !== document.activeElement && ((w = p.value) == null || w.focus()), l.value || i();
    }
    function S(w) {
      E(), a("click:control", w);
    }
    function N(w) {
      a("mousedown:control", w);
    }
    function V(w) {
      w.stopPropagation(), E(), Je(() => {
        o.value = "", ss(e["onClick:clear"], w);
      });
    }
    function $(w) {
      o.value = w.target.value;
    }
    const k = R();
    function g() {
      e.autoGrow && Je(() => {
        if (!k.value || !v.value)
          return;
        const w = getComputedStyle(k.value), C = getComputedStyle(v.value.$el), T = parseFloat(w.getPropertyValue("--v-field-padding-top")) + parseFloat(w.getPropertyValue("--v-input-padding-top")) + parseFloat(w.getPropertyValue("--v-field-padding-bottom")), A = k.value.scrollHeight, z = parseFloat(w.lineHeight), U = Math.max(parseFloat(e.rows) * z + T, parseFloat(C.getPropertyValue("--v-input-control-height"))), B = parseFloat(e.maxRows) * z + T || 1 / 0;
        y.value = ge(xn(A ?? 0, U, B));
      });
    }
    ft(g), pe(o, g), pe(() => e.rows, g), pe(() => e.maxRows, g), pe(() => e.density, g);
    let b;
    return pe(k, (w) => {
      w ? (b = new ResizeObserver(g), b.observe(k.value)) : b == null || b.disconnect();
    }), _n(() => {
      b == null || b.disconnect();
    }), fe(() => {
      const w = !!(r.counter || e.counter || e.counterValue), C = !!(w || r.details), [T, A] = Mr(n), [{
        modelValue: z,
        ...U
      }] = tr(e), [B] = xv(e);
      return m(da, ve({
        ref: f,
        modelValue: o.value,
        "onUpdate:modelValue": (h) => o.value = h,
        class: ["v-textarea v-text-field", {
          "v-textarea--prefixed": e.prefix,
          "v-textarea--suffixed": e.suffix,
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-textarea--auto-grow": e.autoGrow,
          "v-textarea--no-resize": e.noResize || e.autoGrow,
          "v-text-field--flush-details": ["plain", "underlined"].includes(e.variant)
        }],
        "onClick:prepend": e["onClick:prepend"],
        "onClick:append": e["onClick:append"]
      }, T, U, {
        focused: l.value,
        messages: O.value
      }), {
        ...r,
        default: (h) => {
          let {
            isDisabled: P,
            isDirty: W,
            isReadonly: H,
            isValid: j
          } = h;
          return m(Tl, ve({
            ref: v,
            style: {
              "--v-textarea-control-height": y.value
            },
            onClick: S,
            onMousedown: N,
            "onClick:clear": V,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: "textbox"
          }, B, {
            active: x.value || W.value,
            dirty: W.value || e.dirty,
            disabled: P.value,
            focused: l.value,
            error: j.value === !1
          }), {
            ...r,
            default: (X) => {
              let {
                props: {
                  class: Q,
                  ...Y
                }
              } = X;
              return m(ye, null, [e.prefix && m("span", {
                class: "v-text-field__prefix"
              }, [e.prefix]), st(m("textarea", ve({
                ref: p,
                class: Q,
                value: o.value,
                onInput: $,
                autofocus: e.autofocus,
                readonly: H.value,
                disabled: P.value,
                placeholder: e.placeholder,
                rows: e.rows,
                name: e.name,
                onFocus: E,
                onBlur: s
              }, Y, A), null), [[bn("intersect"), {
                handler: c
              }, null, {
                once: !0
              }]]), e.autoGrow && st(m("textarea", {
                class: [Q, "v-textarea__sizer"],
                "onUpdate:modelValue": (I) => o.value = I,
                ref: k,
                readonly: !0,
                "aria-hidden": "true"
              }, null), [[_S, o.value]]), e.suffix && m("span", {
                class: "v-text-field__suffix"
              }, [e.suffix])]);
            }
          });
        },
        details: C ? (h) => {
          var P;
          return m(ye, null, [(P = r.details) == null ? void 0 : P.call(r, h), w && m(ye, null, [m("span", null, null), m($u, {
            active: e.persistentCounter || l.value,
            value: u.value,
            max: d.value
          }, r.counter)])]);
        } : void 0
      });
    }), Qn({}, f, v, p);
  }
});
const jM = oe()({
  name: "VThemeProvider",
  props: {
    withBackground: Boolean,
    ...Ge(),
    ...je()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = at(e);
    return () => {
      var r;
      return e.withBackground ? m(e.tag, {
        class: ["v-theme-provider", a.value]
      }, {
        default: () => {
          var o;
          return [(o = n.default) == null ? void 0 : o.call(n)];
        }
      }) : (r = n.default) == null ? void 0 : r.call(n);
    };
  }
});
const HM = oe()({
  name: "VTimeline",
  props: {
    align: {
      type: String,
      default: "center",
      validator: (e) => ["center", "start"].includes(e)
    },
    direction: {
      type: String,
      default: "vertical",
      validator: (e) => ["vertical", "horizontal"].includes(e)
    },
    justify: {
      type: String,
      default: "auto",
      validator: (e) => ["auto", "center"].includes(e)
    },
    side: {
      type: String,
      validator: (e) => e == null || ["start", "end"].includes(e)
    },
    lineInset: {
      type: [String, Number],
      default: 0
    },
    lineThickness: {
      type: [String, Number],
      default: 2
    },
    lineColor: String,
    truncateLine: {
      type: String,
      validator: (e) => ["start", "end", "both"].includes(e)
    },
    ...Ft(),
    ...je(),
    ...Ge()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = at(e), {
      densityClasses: r
    } = an(e);
    Vt({
      VTimelineDivider: {
        lineColor: ne(e, "lineColor")
      },
      VTimelineItem: {
        density: ne(e, "density"),
        lineInset: ne(e, "lineInset")
      }
    });
    const o = _(() => {
      const i = e.side ? e.side : e.density !== "default" ? "end" : null;
      return i && `v-timeline--side-${i}`;
    }), l = _(() => {
      const i = ["v-timeline--truncate-line-start", "v-timeline--truncate-line-end"];
      switch (e.truncateLine) {
        case "both":
          return i;
        case "start":
          return i[0];
        case "end":
          return i[1];
        default:
          return null;
      }
    });
    return fe(() => m(e.tag, {
      class: ["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, l.value, {
        "v-timeline--inset-line": !!e.lineInset
      }, a.value, r.value, o.value],
      style: {
        "--v-timeline-line-thickness": ge(e.lineThickness)
      }
    }, n)), {};
  }
}), UM = oe()({
  name: "VTimelineDivider",
  props: {
    dotColor: String,
    fillDot: Boolean,
    hideDot: Boolean,
    icon: Me,
    iconColor: String,
    lineColor: String,
    ...ht(),
    ...Na(),
    ...It()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      sizeClasses: a,
      sizeStyles: r
    } = Co(e, "v-timeline-divider__dot"), {
      backgroundColorStyles: o,
      backgroundColorClasses: l
    } = Nt(ne(e, "dotColor")), {
      roundedClasses: i
    } = kt(e, "v-timeline-divider__dot"), {
      elevationClasses: s
    } = zt(e), {
      backgroundColorClasses: u,
      backgroundColorStyles: d
    } = Nt(ne(e, "lineColor"));
    return fe(() => m("div", {
      class: ["v-timeline-divider", {
        "v-timeline-divider--fill-dot": e.fillDot
      }]
    }, [m("div", {
      class: ["v-timeline-divider__before", u.value],
      style: d.value
    }, null), !e.hideDot && m("div", {
      key: "dot",
      class: ["v-timeline-divider__dot", s.value, i.value, a.value],
      style: r.value
    }, [m("div", {
      class: ["v-timeline-divider__inner-dot", l.value, i.value],
      style: o.value
    }, [n.default ? m(lt, {
      key: "icon-defaults",
      disabled: !e.icon,
      defaults: {
        VIcon: {
          color: e.iconColor,
          icon: e.icon,
          size: e.size
        }
      }
    }, n.default) : m(Pt, {
      key: "icon",
      color: e.iconColor,
      icon: e.icon,
      size: e.size
    }, null)])]), m("div", {
      class: ["v-timeline-divider__after", u.value],
      style: d.value
    }, null)])), {};
  }
}), YM = oe()({
  name: "VTimelineItem",
  props: {
    density: String,
    dotColor: String,
    fillDot: Boolean,
    hideDot: Boolean,
    hideOpposite: {
      type: Boolean,
      default: void 0
    },
    icon: Me,
    iconColor: String,
    lineInset: [Number, String],
    ...ht(),
    ...It(),
    ...Na(),
    ...je(),
    ...Kn()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      dimensionStyles: a
    } = Xn(e), r = R(0), o = R();
    return pe(o, (l) => {
      var i;
      l && (r.value = ((i = l.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : i.getBoundingClientRect().width) ?? 0);
    }, {
      flush: "post"
    }), fe(() => {
      var l, i;
      return m("div", {
        class: ["v-timeline-item", {
          "v-timeline-item--fill-dot": e.fillDot
        }],
        style: {
          "--v-timeline-dot-size": ge(r.value),
          "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${ge(e.lineInset)})` : ge(0)
        }
      }, [m("div", {
        class: "v-timeline-item__body",
        style: a.value
      }, [(l = n.default) == null ? void 0 : l.call(n)]), m(UM, {
        ref: o,
        hideDot: e.hideDot,
        icon: e.icon,
        iconColor: e.iconColor,
        size: e.size,
        elevation: e.elevation,
        dotColor: e.dotColor,
        fillDot: e.fillDot,
        rounded: e.rounded
      }, {
        default: n.icon
      }), e.density !== "compact" && m("div", {
        class: "v-timeline-item__opposite"
      }, [!e.hideOpposite && ((i = n.opposite) == null ? void 0 : i.call(n))])]);
    }), {};
  }
});
const WM = oe()({
  name: "VTooltip",
  props: {
    id: String,
    text: String,
    ...Ar(Al({
      closeOnBack: !1,
      location: "end",
      locationStrategy: "connected",
      minWidth: 0,
      offset: 10,
      openOnClick: !1,
      openOnHover: !0,
      origin: "auto",
      scrim: !1,
      scrollStrategy: "reposition",
      transition: !1
    }), ["absolute", "persistent", "eager"])
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = He(e, "modelValue"), {
      scopeId: r
    } = Il(), o = nn(), l = _(() => e.id || `v-tooltip-${o}`), i = R(), s = _(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), u = _(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), d = _(() => e.transition ? e.transition : a.value ? "scale-transition" : "fade-transition"), c = _(() => ve({
      "aria-describedby": l.value
    }, e.activatorProps));
    return fe(() => {
      const [f] = Vu(e);
      return m(Do, ve({
        ref: i,
        class: ["v-tooltip"],
        id: l.value
      }, f, {
        modelValue: a.value,
        "onUpdate:modelValue": (v) => a.value = v,
        transition: d.value,
        absolute: !0,
        location: s.value,
        origin: u.value,
        persistent: !0,
        role: "tooltip",
        eager: !0,
        activatorProps: c.value,
        _disableGlobalStack: !0
      }, r), {
        activator: n.activator,
        default: function() {
          var x;
          for (var v = arguments.length, y = new Array(v), p = 0; p < v; p++)
            y[p] = arguments[p];
          return ((x = n.default) == null ? void 0 : x.call(n, ...y)) ?? e.text;
        }
      });
    }), Qn({}, i);
  }
}), zM = oe()({
  name: "VValidation",
  props: {
    ...i0()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = s0(e, "validation");
    return () => {
      var r;
      return (r = n.default) == null ? void 0 : r.call(n, a);
    };
  }
}), Gy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VAlert: UV,
  VAlertTitle: a0,
  VApp: lV,
  VAppBar: SV,
  VAppBarNavIcon: FV,
  VAppBarTitle: jV,
  VAutocomplete: jI,
  VAvatar: Ga,
  VBadge: HI,
  VBanner: UI,
  VBannerActions: R0,
  VBannerText: B0,
  VBottomNavigation: YI,
  VBreadcrumbs: WI,
  VBreadcrumbsDivider: F0,
  VBreadcrumbsItem: L0,
  VBtn: pn,
  VBtnGroup: pv,
  VBtnToggle: $V,
  VCard: zI,
  VCardActions: j0,
  VCardItem: Y0,
  VCardSubtitle: H0,
  VCardText: W0,
  VCardTitle: U0,
  VCarousel: tA,
  VCarouselItem: nA,
  VCheckbox: XV,
  VCheckboxBtn: No,
  VChip: Vl,
  VChipGroup: ZV,
  VClassIcon: Zd,
  VCode: aA,
  VCol: QA,
  VColorPicker: BA,
  VCombobox: LA,
  VComponentIcon: qc,
  VContainer: GA,
  VCounter: $u,
  VDefaultsProvider: lt,
  VDialog: jA,
  VDialogBottomTransition: sV,
  VDialogTopTransition: uV,
  VDialogTransition: wu,
  VDivider: m0,
  VExpandTransition: Su,
  VExpandXTransition: mv,
  VExpansionPanel: YA,
  VExpansionPanelText: o_,
  VExpansionPanelTitle: r_,
  VExpansionPanels: UA,
  VFabTransition: iV,
  VFadeTransition: sd,
  VField: Tl,
  VFieldLabel: zo,
  VFileInput: WA,
  VFooter: zA,
  VForm: qA,
  VHover: lM,
  VIcon: Pt,
  VImg: So,
  VInput: da,
  VItem: sM,
  VItemGroup: iM,
  VKbd: uM,
  VLabel: To,
  VLayout: cM,
  VLayoutItem: fM,
  VLazy: dM,
  VLigatureIcon: yx,
  VList: Nu,
  VListGroup: $v,
  VListImg: vI,
  VListItem: Oa,
  VListItemAction: mI,
  VListItemMedia: hI,
  VListItemSubtitle: w0,
  VListItemTitle: S0,
  VListSubheader: k0,
  VLocaleProvider: vM,
  VMain: mM,
  VMenu: Iu,
  VMessages: o0,
  VNavigationDrawer: SM,
  VNoSsr: kM,
  VOverlay: Do,
  VPagination: OM,
  VParallax: EM,
  VProgressCircular: _v,
  VProgressLinear: wv,
  VRadio: $M,
  VRadioGroup: PM,
  VRangeSlider: TM,
  VRating: NM,
  VResponsive: Hb,
  VRow: rM,
  VScaleTransition: jb,
  VScrollXReverseTransition: fV,
  VScrollXTransition: cV,
  VScrollYReverseTransition: vV,
  VScrollYTransition: dV,
  VSelect: RI,
  VSelectionControl: Dl,
  VSelectionControlGroup: c0,
  VSheet: n_,
  VSlideGroup: g_,
  VSlideGroupItem: VM,
  VSlideXReverseTransition: hV,
  VSlideXTransition: mV,
  VSlideYReverseTransition: yV,
  VSlideYTransition: vv,
  VSlider: bd,
  VSnackbar: IM,
  VSpacer: oM,
  VSvgIcon: eb,
  VSwitch: AM,
  VSystemBar: MM,
  VTab: __,
  VTable: FM,
  VTabs: BM,
  VTextField: Nl,
  VTextarea: LM,
  VThemeProvider: jM,
  VTimeline: HM,
  VTimelineItem: YM,
  VToolbar: al,
  VToolbarItems: LV,
  VToolbarTitle: hv,
  VTooltip: WM,
  VValidation: zM,
  VWindow: K0,
  VWindowItem: X0
}, Symbol.toStringTag, { value: "Module" }));
function qM(e) {
  eO(), e.use(Dk()), e.use(tO), e.component("DatepickerField", dv), Reflect.ownKeys(Gy).forEach((t) => {
    e.component(t, Gy[t]);
  });
}
const GM = (e) => {
  const t = CS(Jx);
  return qM(t), t.mount(e.selector), t;
};
export {
  GM as default
};
