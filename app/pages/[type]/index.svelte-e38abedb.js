import{S as s,i as e,s as t,e as r,j as n,k as o,c as a,a as i,m as l,d as f,n as c,b as m,f as p,F as $,o as u,v as d,r as h,w as g,l as v,u as j,Q as w,B as k,t as b,g as y,h as x}from"../../chunks/vendor-60623916.js";import{T as E}from"../../chunks/Title-989d96c5.js";import{H as D}from"../../chunks/Head-f78c8e4f.js";import{P as I}from"../../chunks/Profiles-7201810a.js";import"../../chunks/utils-b0a22032.js";import"../../chunks/EzeMedia-249266b8.js";import"../../chunks/_stores-88dd5ace.js";function O(s,e,t){const r=s.slice();return r[3]=e[t][0],r[0]=e[t][1],r[5]=t,r}function P(s){let e,t=s[3]+"";return{c(){e=b(t)},l(s){e=y(s,t)},m(s,t){p(s,e,t)},p(s,r){2&r&&t!==(t=s[3]+"")&&x(e,t)},d(s){s&&f(e)}}}function V(s){let e,t,v,j,w,k,b,y;return v=new E({props:{$$slots:{default:[P]},$$scope:{ctx:s}}}),k=new I({props:{profiles:s[0],minwidth:"minw22em"}}),{c(){e=r("div"),t=r("div"),n(v.$$.fragment),j=o(),w=r("div"),n(k.$$.fragment),b=o(),this.h()},l(s){e=a(s,"DIV",{class:!0});var r=i(e);t=a(r,"DIV",{class:!0});var n=i(t);l(v.$$.fragment,n),n.forEach(f),j=c(r),w=a(r,"DIV",{class:!0});var o=i(w);l(k.$$.fragment,o),o.forEach(f),b=c(r),r.forEach(f),this.h()},h(){m(t,"class","no-basis maxw26em grow"),m(w,"class","no-basis grow minw20em"),m(e,"class","flex mtb2 wrap")},m(s,r){p(s,e,r),$(e,t),u(v,t,null),$(e,j),$(e,w),u(k,w,null),$(e,b),y=!0},p(s,e){const t={};66&e&&(t.$$scope={dirty:e,ctx:s}),v.$set(t);const r={};2&e&&(r.profiles=s[0]),k.$set(r)},i(s){y||(d(v.$$.fragment,s),d(k.$$.fragment,s),y=!0)},o(s){h(v.$$.fragment,s),h(k.$$.fragment,s),y=!1},d(s){s&&f(e),g(v),g(k)}}}function B(s){var e,t,r;let a,i,m,$;a=new D({props:{title:"Profiles, workshops, talks + performances",description:s[0].map(H).join(", "),image:null==(r=null==(t=null==(e=s[0])?void 0:e[0])?void 0:t.cover)?void 0:r[0]}});let b=Object.entries(s[1]),y=[];for(let n=0;n<b.length;n+=1)y[n]=V(O(s,b,n));const x=s=>h(y[s],1,1,(()=>{y[s]=null}));return{c(){n(a.$$.fragment),i=o();for(let s=0;s<y.length;s+=1)y[s].c();m=v()},l(s){l(a.$$.fragment,s),i=c(s);for(let e=0;e<y.length;e+=1)y[e].l(s);m=v()},m(s,e){u(a,s,e),p(s,i,e);for(let t=0;t<y.length;t+=1)y[t].m(s,e);p(s,m,e),$=!0},p(s,[e]){var t,r,n;const o={};if(1&e&&(o.description=s[0].map(H).join(", ")),1&e&&(o.image=null==(n=null==(r=null==(t=s[0])?void 0:t[0])?void 0:r.cover)?void 0:n[0]),a.$set(o),2&e){let t;for(b=Object.entries(s[1]),t=0;t<b.length;t+=1){const r=O(s,b,t);y[t]?(y[t].p(r,e),d(y[t],1)):(y[t]=V(r),y[t].c(),d(y[t],1),y[t].m(m.parentNode,m))}for(k(),t=b.length;t<y.length;t+=1)x(t);j()}},i(s){if(!$){d(a.$$.fragment,s);for(let s=0;s<b.length;s+=1)d(y[s]);$=!0}},o(s){h(a.$$.fragment,s),y=y.filter(Boolean);for(let e=0;e<y.length;e+=1)h(y[e]);$=!1},d(s){g(a,s),s&&f(i),w(y,s),s&&f(m)}}}const F=async({fetch:s,page:e})=>({props:{profiles:(await(await s("/profiles.json")).json()).sort((s=>Math.random()>.5))}}),H=s=>s.name;function M(s,e,t){let r,{profiles:n}=e;return s.$$set=s=>{"profiles"in s&&t(0,n=s.profiles)},s.$$.update=()=>{1&s.$$.dirty&&t(1,r={Communities:n.filter((s=>"community"==s.type)),Residents:n.filter((s=>"residency"==s.type)),"Former members":n.filter((s=>"alumni"==s.type)),Orgs:n.filter((s=>"oragnisation"==s.type))})},[n,r]}export default class extends s{constructor(s){super(),e(this,s,M,B,t,{profiles:0})}}export{F as load};