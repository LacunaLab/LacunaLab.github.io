import{S as e,i as t,s as n,e as i,c as a,a as r,d as o,b as s,f as h,G as d,M as l,z as g,a2 as m,K as p}from"../chunks/vendor-e2340380.js";import{u}from"../chunks/utils-bd9c12ba.js";function c(e){let t,n,g;return{c(){t=i("canvas"),this.h()},l(e){t=a(e,"CANVAS",{class:!0,width:!0,height:!0,style:!0}),r(t).forEach(o),this.h()},h(){s(t,"class","border"),s(t,"width",e[0]),s(t,"height",e[1]),s(t,"style",e[4])},m(i,a){h(i,t,a),e[9](t),n||(g=d(t,"mousemove",e[3]),n=!0)},p(e,[n]){1&n&&s(t,"width",e[0]),2&n&&s(t,"height",e[1])},i:l,o:l,d(i){i&&o(t),e[9](null),n=!1,g()}}}function f(e,t,n,i){e[n*i+t]=286331153}function w(e,t,n){let i,a,r,{width:o=100}=t,{height:s=100}=t,{spread:h=20}=t,{max:d=100}=t,{interp:l=0}=t,{noise:c=.92}=t,w={x:0,y:0},y=[];function x(e,t,n){var a=r.applyToPoint(t.x,t.y),o=r.applyToPoint(n.x,n.y);!function(e,t,n,i,a,r){var o,s,h,d=a-n,l=i-t,g=!1,m=l>>31,p=d>>31;if((d^p)-p>(l^m)-m&&(d^=l,d^=l^=d,g=!0),o=l<0?-1:1,s=0===l?d:d/l,g)for(t+=.5,h=0;h!==l;h+=o)f(e,t+h*s|0,n+h,r);else for(n+=.5,h=0;h!==l;h+=o)f(e,t+h,n+h*s|0,r)}(e,0|a.x,0|a.y,0|o.x,0|o.y,i.width)}!function(e){if(!u.browser)return"";let t,n=document.createElement("div");n.style.cssText="position:fixed;left:-100px;top:-100px;width:1px;height:1px",n.className=e,document.body.appendChild(n),t=getComputedStyle(n).getPropertyValue("color"),document.body.removeChild(n)}("normal");function b(){if(r.reset(),r.scale(1,1),y.length>0){let t=w?y.concat([w]):y;t[0];t[t.length-1],t.length>0&&t[t.length-2];var e=a.getImageData(0,0,i.width,i.height);new Uint32Array(e.data.buffer);let n=Uint32Array.from({length:o*s},(()=>Math.random()>c?4294967295:0));n=new ImageData(new Uint8ClampedArray(n.buffer),o,s);for(let i=0;i<e.data.length;i++)255==n.data[i]&&(e.data[i]=0);a.putImageData(e,0,0)}window.requestAnimationFrame(b)}g((e=>{u.browser&&(r=new m.Matrix,console.log(r),a=i.getContext("2d"),u.browser&&window.requestAnimationFrame(b))}));return e.$$set=e=>{"width"in e&&n(0,o=e.width),"height"in e&&n(1,s=e.height),"spread"in e&&n(5,h=e.spread),"max"in e&&n(6,d=e.max),"interp"in e&&n(7,l=e.interp),"noise"in e&&n(8,c=e.noise)},e.$$.update=()=>{e.$$.dirty},[o,s,i,function(e){window.el=i;let t={x:Math.round(o/i.offsetWidth*e.layerX)+0,y:Math.round(s/i.offsetHeight*e.layerY)+0},n=0;var r,l;y.length>0&&(r=t,l=y[y.length-1],n=Math.sqrt(Math.pow(r.x-l.x,2)+Math.pow(r.y-l.y,2))),(n>h||0==y.length)&&y.push(t);var g=a.getImageData(0,0,i.width,i.height);for(x(new Uint32Array(g.data.buffer),t,w),a.putImageData(g,0,0);y.length>d;)y.shift();w=t},"\n\t\timage-rendering: optimizeSpeed;\n\t    image-rendering: -moz-crisp-edges;\n\t    image-rendering: -o-crisp-edges;\n\t    image-rendering: -webkit-optimize-contrast;\n\t    image-rendering: pixelated;\n\t    image-rendering: optimize-contrast;\n\t    -ms-interpolation-mode: nearest-neighbor;\n\t",h,d,l,c,function(e){p[e?"unshift":"push"]((()=>{i=e,n(2,i)}))}]}export default class extends e{constructor(e){super(),t(this,e,w,c,n,{width:0,height:1,spread:5,max:6,interp:7,noise:8})}}