function k(){}const M=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function P(){return Object.create(null)}function E(t){t.forEach(j)}function S(t){return typeof t=="function"}function U(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let l;function A(t,n){return t===n?!0:(l||(l=document.createElement("a")),l.href=n,t===l.href)}function B(t){return Object.keys(t).length===0}function q(t,...n){if(t==null){for(const r of n)r(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function C(t,n,e){t.$$.on_destroy.push(q(n,e))}function D(t,n,e,r){if(t){const o=y(t,n,e,r);return t[0](o)}}function y(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function G(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const a=[],_=Math.max(n.dirty.length,o.length);for(let u=0;u<_;u+=1)a[u]=n.dirty[u]|o[u];return a}return n.dirty|o}return n.dirty}function H(t,n,e,r,o,a){if(o){const _=y(n,e,r,a);t.p(_,o)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function J(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let f;function d(t){f=t}function m(){if(!f)throw new Error("Function called outside component initialization");return f}function K(t){m().$$.on_mount.push(t)}function L(t){m().$$.after_update.push(t)}const i=[],g=[];let s=[];const b=[],x=Promise.resolve();let p=!1;function O(){p||(p=!0,x.then(z))}function N(){return O(),x}function v(t){s.push(t)}const h=new Set;let c=0;function z(){if(c!==0)return;const t=f;do{try{for(;c<i.length;){const n=i[c];c++,d(n),F(n.$$)}}catch(n){throw i.length=0,c=0,n}for(d(null),i.length=0,c=0;g.length;)g.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];h.has(e)||(h.add(e),e())}s.length=0}while(i.length);for(;b.length;)b.pop()();p=!1,h.clear(),d(t)}function F(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}function Q(t){const n=[],e=[];s.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),s=n}export{G as a,C as b,D as c,A as d,L as e,g as f,I as g,J as h,v as i,S as j,M as k,P as l,z as m,k as n,K as o,B as p,Q as q,E as r,U as s,N as t,H as u,f as v,d as w,j as x,i as y,O as z};
