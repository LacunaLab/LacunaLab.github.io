import{S as t,i as s,s as e,e as r,j as o,k as n,c as a,a as i,m as l,d as f,n as c,b as m,f as p,F as $,o as u,r as g,u as h,v as d,w,l as v,Q as j,B as b,t as x,g as k,h as y}from"../../chunks/vendor-e2340380.js";import{T as E}from"../../chunks/Title-cfc72760.js";import{H as D}from"../../chunks/Head-5eb7aaf5.js";import{P as I}from"../../chunks/Profiles-ae4e288e.js";import{u as O}from"../../chunks/utils-bd9c12ba.js";import"../../chunks/EzeMedia-16fb6722.js";import"../../chunks/_stores-6417d3b8.js";function P(t,s,e){const r=t.slice();return r[3]=s[e][0],r[4]=s[e][1],r[6]=e,r}function V(t){let s,e=t[3]+"";return{c(){s=x(e)},l(t){s=k(t,e)},m(t,e){p(t,s,e)},p(t,r){2&r&&e!==(e=t[3]+"")&&y(s,e)},d(t){t&&f(s)}}}function B(t){let s,e,v,j,x,k,y,D,I;v=new E({props:{$$slots:{default:[V]},$$scope:{ctx:t}}});var P=t[4].component;function B(t){return{props:{profiles:t[4].items,grow:t[4].grow,format:"220x0x90xfit",minwidth:"minw22em",stretch:t[4].stretch}}}return P&&(k=new P(B(t))),{c(){s=r("div"),e=r("div"),o(v.$$.fragment),j=n(),x=r("div"),k&&o(k.$$.fragment),y=n(),this.h()},l(t){s=a(t,"DIV",{class:!0});var r=i(s);e=a(r,"DIV",{class:!0});var o=i(e);l(v.$$.fragment,o),o.forEach(f),j=c(r),x=a(r,"DIV",{class:!0});var n=i(x);k&&l(k.$$.fragment,n),n.forEach(f),y=c(r),r.forEach(f),this.h()},h(){m(e,"class","no-basis maxw26em grow"),m(x,"class","no-basis grow minw20em"),m(s,"class",D="flex mtb2 wrap profiles "+O.slugify(t[3]))},m(t,r){p(t,s,r),$(s,e),u(v,e,null),$(s,j),$(s,x),k&&u(k,x,null),$(s,y),I=!0},p(t,e){const r={};130&e&&(r.$$scope={dirty:e,ctx:t}),v.$set(r);const n={};if(2&e&&(n.profiles=t[4].items),2&e&&(n.grow=t[4].grow),2&e&&(n.stretch=t[4].stretch),P!==(P=t[4].component)){if(k){b();const t=k;g(t.$$.fragment,1,0,(()=>{w(t,1)})),h()}P?(k=new P(B(t)),o(k.$$.fragment),d(k.$$.fragment,1),u(k,x,null)):k=null}else P&&k.$set(n);(!I||2&e&&D!==(D="flex mtb2 wrap profiles "+O.slugify(t[3])))&&m(s,"class",D)},i(t){I||(d(v.$$.fragment,t),k&&d(k.$$.fragment,t),I=!0)},o(t){g(v.$$.fragment,t),k&&g(k.$$.fragment,t),I=!1},d(t){t&&f(s),w(v),k&&w(k)}}}function H(t){var s,e,r;let a,i,m,$;a=new D({props:{title:"Profiles, workshops, talks + performances",description:t[0].map(T).join(", "),image:null==(r=null==(e=null==(s=t[0])?void 0:s[0])?void 0:e.cover)?void 0:r[0]}});let x=Object.entries(t[1]),k=[];for(let o=0;o<x.length;o+=1)k[o]=B(P(t,x,o));const y=t=>g(k[t],1,1,(()=>{k[t]=null}));return{c(){o(a.$$.fragment),i=n();for(let t=0;t<k.length;t+=1)k[t].c();m=v()},l(t){l(a.$$.fragment,t),i=c(t);for(let s=0;s<k.length;s+=1)k[s].l(t);m=v()},m(t,s){u(a,t,s),p(t,i,s);for(let e=0;e<k.length;e+=1)k[e].m(t,s);p(t,m,s),$=!0},p(t,[s]){var e,r,o;const n={};if(1&s&&(n.description=t[0].map(T).join(", ")),1&s&&(n.image=null==(o=null==(r=null==(e=t[0])?void 0:e[0])?void 0:r.cover)?void 0:o[0]),a.$set(n),2&s){let e;for(x=Object.entries(t[1]),e=0;e<x.length;e+=1){const r=P(t,x,e);k[e]?(k[e].p(r,s),d(k[e],1)):(k[e]=B(r),k[e].c(),d(k[e],1),k[e].m(m.parentNode,m))}for(b(),e=x.length;e<k.length;e+=1)y(e);h()}},i(t){if(!$){d(a.$$.fragment,t);for(let t=0;t<x.length;t+=1)d(k[t]);$=!0}},o(t){g(a.$$.fragment,t),k=k.filter(Boolean);for(let s=0;s<k.length;s+=1)g(k[s]);$=!1},d(t){w(a,t),t&&f(i),j(k,t),t&&f(m)}}}const M=async({fetch:t,page:s})=>({props:{profiles:(await(await t("/profiles.json")).json()).sort((t=>Math.random()>.5))}}),T=t=>t.name;function z(t,s,e){let r,{profiles:o}=s;return t.$$set=t=>{"profiles"in t&&e(0,o=t.profiles)},t.$$.update=()=>{1&t.$$.dirty&&e(1,r={Communities:{items:o.filter((t=>"community"==t.type)),component:I,grow:!0,stretch:"width"},Orgs:{items:o.filter((t=>"organisation"==t.type)),component:I,grow:!0,stretch:"width"}})},[o,r]}export default class extends t{constructor(t){super(),s(this,t,z,H,e,{profiles:0})}}export{M as load};