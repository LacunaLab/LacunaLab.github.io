import{S as t,i as e,s as i,e as o,c as n,a,d as l,b as s,f as r,M as c,z as d,$ as u,a0 as h,K as p,k as m,n as f,F as g,v as $,r as y,A as v,X as w,V as A,j as b,m as x,o as k,p as j,q as E,W as S,w as z,Y as C,G as I,I as V,t as F,g as N,T as R}from"./vendor-e2340380.js";import{E as q,A as O,M as T}from"./_stores-6417d3b8.js";import{u as H}from"./utils-bd9c12ba.js";function Y(t){let e;return{c(){e=o("span"),this.h()},l(t){e=n(t,"SPAN",{class:!0,id:!0}),a(e).forEach(l),this.h()},h(){s(e,"class","fill vimeo"),s(e,"id",t[1])},m(i,o){r(i,e,o),t[17](e)},p(t,[i]){2&i&&s(e,"id",t[1])},i:c,o:c,d(i){i&&l(e),t[17](null)}}}function B(t){console.log("PLAY!!!")}function M(t,e,i){let o,n,a,{file:l}=e,{autohide:s=!1}=e,{format:r=""}=e,{hidden:c=!!s}=e,{paused:m=!0}=e,{autoplay:f=!1}=e,{muted:g=!0}=e,{loop:$=!0}=e,{root:y=null}=e,{orientation:v}=e,{width:w=1280}=e,{height:A=720}=e,{ratio:b}=e,{class:x=""}=e,{style:k=""}=e;return d((async t=>{if(n)return;n=new u(a,{url:l.url,background:!1,width:"100%",height:800,color:"#333",dnt:!0}),await n.on("play",B);const e=await n.getVideoTitle();i(2,w=await n.getVideoWidth()),i(3,A=await n.getVideoHeight()),i(4,b=A/w*100),console.log("[vimeo] getting dimensions",{title:e,width:w,height:A})})),h((async t=>{n&&await n.destroy()})),t.$$set=t=>{"file"in t&&i(5,l=t.file),"autohide"in t&&i(6,s=t.autohide),"format"in t&&i(7,r=t.format),"hidden"in t&&i(8,c=t.hidden),"paused"in t&&i(9,m=t.paused),"autoplay"in t&&i(10,f=t.autoplay),"muted"in t&&i(11,g=t.muted),"loop"in t&&i(12,$=t.loop),"root"in t&&i(13,y=t.root),"orientation"in t&&i(14,v=t.orientation),"width"in t&&i(2,w=t.width),"height"in t&&i(3,A=t.height),"ratio"in t&&i(4,b=t.ratio),"class"in t&&i(15,x=t.class),"style"in t&&i(16,k=t.style)},t.$$.update=()=>{t.$$.dirty,64&t.$$.dirty&&i(1,o=s||"vimeo-player-untitled")},[a,o,w,A,b,l,s,r,c,m,f,g,$,y,v,x,k,function(t){p[t?"unshift":"push"]((()=>{a=t,i(0,a)}))}]}class P extends t{constructor(t){super(),e(this,t,M,Y,i,{file:5,autohide:6,format:7,hidden:8,paused:9,autoplay:10,muted:11,loop:12,root:13,orientation:14,width:2,height:3,ratio:4,class:15,style:16})}}function G(t){let e,i,o,n,a;const l=[t[21]];function s(e){t[38](e)}function r(e){t[39](e)}function c(e){t[40](e)}let d={};for(let u=0;u<l.length;u+=1)d=v(d,l[u]);return void 0!==t[6]&&(d.width=t[6]),void 0!==t[7]&&(d.height=t[7]),void 0!==t[8]&&(d.ratio=t[8]),e=new P({props:d}),p.push((()=>A(e,"width",s))),p.push((()=>A(e,"height",r))),p.push((()=>A(e,"ratio",c))),{c(){b(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,i){k(e,t,i),a=!0},p(t,a){const s=2097152&a[0]?j(l,[E(t[21])]):{};!i&&64&a[0]&&(i=!0,s.width=t[6],S((()=>i=!1))),!o&&128&a[0]&&(o=!0,s.height=t[7],S((()=>o=!1))),!n&&256&a[0]&&(n=!0,s.ratio=t[8],S((()=>n=!1))),e.$set(s)},i(t){a||($(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){z(e,t)}}}function K(t){let e,i,d,u,h,p,m,f,g,$=!0;return{c(){e=o("video"),this.h()},l(t){e=n(t,"VIDEO",{class:!0,poster:!0,width:!0,height:!0,playsinline:!0,src:!0,muted:!0,autoplay:!0,loop:!0,preload:!0,controls:!0}),a(e).forEach(l),this.h()},h(){s(e,"class",i="embed fill "+t[17]+" z-index66"),s(e,"poster",d=t[9]?W:t[11]),s(e,"width",t[6]),s(e,"height",t[7]),e.playsInline=!0,e.src!==(u=t[9]?W:t[10])&&s(e,"src",u),e.muted=h=!t[14],e.autoplay=p=t[0]&&!t[1],e.loop=t[2],s(e,"preload",m=t[9]?"none":"auto"),e.controls=t[3],C(e,"active",!t[9]),C(e,"playing",!t[1]),C(e,"paused",t[1])},m(i,o){r(i,e,o),t[36](e),f||(g=[I(e,"play",X),I(e,"click",t[19]),I(e,"fullscreenchange",t[20]),I(e,"play",t[37]),I(e,"pause",t[37])],f=!0)},p(t,o){131072&o[0]&&i!==(i="embed fill "+t[17]+" z-index66")&&s(e,"class",i),2560&o[0]&&d!==(d=t[9]?W:t[11])&&s(e,"poster",d),64&o[0]&&s(e,"width",t[6]),128&o[0]&&s(e,"height",t[7]),1536&o[0]&&e.src!==(u=t[9]?W:t[10])&&s(e,"src",u),16384&o[0]&&h!==(h=!t[14])&&(e.muted=h),3&o[0]&&p!==(p=t[0]&&!t[1])&&(e.autoplay=p),4&o[0]&&(e.loop=t[2]),512&o[0]&&m!==(m=t[9]?"none":"auto")&&s(e,"preload",m),8&o[0]&&(e.controls=t[3]),2&o[0]&&$!==($=t[1])&&e[$?"pause":"play"](),131584&o[0]&&C(e,"active",!t[9]),131074&o[0]&&C(e,"playing",!t[1]),131074&o[0]&&C(e,"paused",t[1])},i:c,o:c,d(i){i&&l(e),t[36](null),f=!1,V(g)}}}function U(t){let e,i,a;return{c(){e=o("img"),this.h()},l(t){e=n(t,"IMG",{class:!0,width:!0,height:!0,src:!0}),this.h()},h(){s(e,"class",i="embed fill "+t[17]),s(e,"width",t[6]),s(e,"height",t[7]),e.src!==(a=t[9]?W:t[11])&&s(e,"src",a),C(e,"active",!t[9])},m(t,i){r(t,e,i)},p(t,o){131072&o[0]&&i!==(i="embed fill "+t[17])&&s(e,"class",i),64&o[0]&&s(e,"width",t[6]),128&o[0]&&s(e,"height",t[7]),2560&o[0]&&e.src!==(a=t[9]?W:t[11])&&s(e,"src",a),131584&o[0]&&C(e,"active",!t[9])},i:c,o:c,d(t){t&&l(e)}}}function D(t){let e,i;return{c(){e=o("div"),i=F(Q),this.h()},l(t){e=n(t,"DIV",{class:!0});var o=a(e);i=N(o,Q),o.forEach(l),this.h()},h(){s(e,"class","fill flex row-center-center")},m(t,o){r(t,e,o),g(e,i)},p:c,i:c,o:c,d(t){t&&l(e)}}}function L(t){let e,i,c,d,u,h,p,v,w;const A=[D,U,K,G],b=[];var x;return~(i=(x=t)[18]("image")?1:x[18]("video")?2:x[18]("vimeo")?3:-1)&&(c=b[i]=A[i](t)),{c(){e=o("span"),c&&c.c(),d=m(),u=o("canvas"),this.h()},l(t){e=n(t,"SPAN",{class:!0,style:!0});var i=a(e);c&&c.l(i),d=f(i),u=n(i,"CANVAS",{class:!0,width:!0,height:!0}),a(u).forEach(l),i.forEach(l),this.h()},h(){s(u,"class",h="hidden "+t[17]),s(u,"width",t[6]),s(u,"height",t[7]),s(e,"class",p=`${Object.values(t[16]).join(" ")} media block rel overflow-hidden ${t[17]} ${t[4]}`),s(e,"style",v=`${t[5]};${t[15]};`)},m(o,n){r(o,e,n),~i&&b[i].m(e,null),g(e,d),g(e,u),t[41](e),w=!0},p(t,i){c&&c.p(t,i),(!w||131072&i[0]&&h!==(h="hidden "+t[17]))&&s(u,"class",h),(!w||64&i[0])&&s(u,"width",t[6]),(!w||128&i[0])&&s(u,"height",t[7]),(!w||196624&i[0]&&p!==(p=`${Object.values(t[16]).join(" ")} media block rel overflow-hidden ${t[17]} ${t[4]}`))&&s(e,"class",p),(!w||32800&i[0]&&v!==(v=`${t[5]};${t[15]};`))&&s(e,"style",v)},i(t){w||($(c),w=!0)},o(t){y(c),w=!1},d(o){o&&l(e),~i&&b[i].d(),t[41](null)}}}let Q=null;const W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";function X(){}function _(t,e,i){let o,n,a,l,s,r,c,{autoplaying:u}=e,{muted:h}=e,{scroller:m}=e,{centroid:f}=e,{eze:g}=e,$=H.browser,{file:y}=e,{autohide:A=!1}=e,{format:b=""}=e,{loop:x=!0}=e,{threshold:k=.75}=e,{orientation:j=null}=e,{paused:E=!0}=e,{root:S}=e,{force:z=!1}=e,{controls:C=!1}=e,{stretch:I="width"}=e,{class:V=""}=e,{style:F=""}=e;$&&H.device();let N,R,q=!!A;function O(t,e){t&&e&&(i(23,j=t>=e?"portrait":"landscape"),console.log("[media] notifying orientation",j))}const T=(t,e)=>{var i=e||"/",o=new RegExp(i+"{1,}","g");return t.join(i).replace(o,i)};let Y,B=null,M=null,P=null;let G,K;let U=!1;function D(t,e){if(!$||!A||!U)return;K&&(clearTimeout(K),K=null);const o=(null==G?void 0:G.getBoundingClientRect())||{},n=-window.innerHeight,a=-1*o.y>o.height-n,l=o.y>window.innerHeight-n;i(9,q=a||l),K=setTimeout((t=>{const e=(null==f?void 0:f.id)||"undefined-centroid",n=(null==f?void 0:f.center)||999999999,a=Math.abs(o.y+o.height/2-window.innerHeight/2);A==e&&a!=n&&i(22,f={center:a,id:A}),a<n&&e!=A&&(console.log(`[media] ☯️  new centroid : ${B}/${M}/${(P||0).toFixed(2)} ${A}`),i(22,f={center:a,id:A})),s&&i(1,E=f.id!=A||!u)}),20)}d((async t=>{U=!0,setTimeout((t=>{D()}),100)}));let L=!1,Q=!1;return t.$$set=t=>{i(21,e=v(v({},e),w(t))),"autoplaying"in t&&i(0,u=t.autoplaying),"muted"in t&&i(24,h=t.muted),"scroller"in t&&i(25,m=t.scroller),"centroid"in t&&i(22,f=t.centroid),"eze"in t&&i(26,g=t.eze),"file"in t&&i(27,y=t.file),"autohide"in t&&i(28,A=t.autohide),"format"in t&&i(29,b=t.format),"loop"in t&&i(2,x=t.loop),"threshold"in t&&i(30,k=t.threshold),"orientation"in t&&i(23,j=t.orientation),"paused"in t&&i(1,E=t.paused),"root"in t&&i(31,S=t.root),"force"in t&&i(32,z=t.force),"controls"in t&&i(3,C=t.controls),"stretch"in t&&i(33,I=t.stretch),"class"in t&&i(4,V=t.class),"style"in t&&i(5,F=t.style)},t.$$.update=()=>{var e,d;16777216&t.$$.dirty[0]&&i(14,o=!h),1073742080&t.$$.dirty[0]&&O(P,k),134217728&t.$$.dirty[0]&&async function(t){var e;if(!t)return;let{id:o,location:n}=t,{ext:a,name:l}=(null==t?void 0:t.item)||{};if(i(8,P=null==(e=null==t?void 0:t.item)?void 0:e.ratio),a=a?"."+a:a,console.log("[media] syncing file",n,o,b),o&&n&&a&&l){S||console.error("[media] no root is set!");let e=b;if(i(6,B=parseInt(e.split("x")[0])),i(7,M=parseInt(e.split("x")[1])),0==B?i(6,B=M/P):0==M?i(7,M=B*P):isNaN(B)||isNaN(M)?(i(6,B=t.item.width),i(7,M=t.item.height)):i(8,P=1),O(P,k),(null==e?void 0:e.length)>0&&(e="."+e),(null==g?void 0:g.api)&&""!=(null==g?void 0:g.api)&&(null==g?void 0:g.copy)){const t=T([g.project,g.assets,S]),o=T(["/media/",y.location]),n=l+e+a,s=l+a,r=`?copy=${T([t,s])}`,c=`?copy=${T([t,n])}`,d="/"==g.api.substring(g.api.length-1)?g.api.substring(0,g.api.length-1):g.api;i(10,N=d+T([o,s+r])),i(11,R=d+T([o,n+c])),z&&(await fetch(N),await fetch(R)),console.log("[media] pinging API to copy file:",l)}else i(10,N=T([S,l+a])),i(11,R=T([S,l+e+a]));console.log("[media] formatted to:"),console.log(`[media] video thumbnail: ${N}`),console.log(`[media] thumb thumbnail: ${N}`)}else console.error("[media] media file is missing id location ext name:",{id:o,location:n,ext:a,name:l},t),console.error("[media] media file:",t)}(y),134217728&t.$$.dirty[0]&&i(34,n=function(t){var e;if(!(null==(e=null==y?void 0:y.item)?void 0:e.vibrant))return{};let i={};for(const[o,n]of Object.entries(y.item.vibrant))i[o.toLowerCase()]=`rgb(${n.rgb.join(",")})`;return i}()),1&t.$$.dirty[0]&&(d=u,(null==f?void 0:f.id)==A&&s&&i(1,E=!d)),2&t.$$.dirty[0]&&(E||U||i(1,E=!0)),37748736&t.$$.dirty[0]&&D(),8&t.$$.dirty[1]&&i(35,a=(null==n?void 0:n.vibrant)||"var(--color)"),16&t.$$.dirty[1]&&i(15,l=`background-image: linear-gradient(to top left, transparent 0%, transparent calc(50% - var(--stroke-width)), ${a} 50%, transparent calc(50% + var(--stroke-width)), transparent 100%), linear-gradient(to top right, transparent 0%, transparent calc(50% - var(--stroke-width)), ${a} 50%, transparent calc(50% + var(--stroke-width)), transparent 100%);box-shadow:inset 0px 0px 0px 1px ${a}`),272629761&t.$$.dirty[0]&&u&&(null==f||f.id),142606784&t.$$.dirty[0]&&i(16,r={mime:"media-mime-"+H.slugify(((null==(e=null==y?void 0:y.item)?void 0:e.mime)||"").split("/")[0]),width:"media-width-"+B,height:"media-height-"+M,ratio:"media-ratio-"+P,orientation:"media-orientation-"+j}),4&t.$$.dirty[1]&&i(17,c="width"==I?"w100pc h-auto":"w-auto h100pc")},s=!0,e=w(e),[u,E,x,C,V,F,B,M,P,q,N,R,Y,G,o,l,r,c,t=>H.isFileType(t,y),function(t){t.target.requestFullScreen?t.target.requestFullScreen():t.target.mozRequestFullScreen?t.target.mozRequestFullScreen():t.target.webkitRequestFullScreen?t.target.webkitRequestFullScreen():i(0,u=!u)},function(t,e){const n=document.fullscreenElement==t.target;n&&(L=o,Q=E,i(0,u=!0)),!o&&n&&i(14,o=!0),E&&n&&i(1,E=!1),n||(i(14,o=L),i(1,E=Q))},e,f,j,h,m,g,y,A,b,k,S,z,I,n,a,function(t){p[t?"unshift":"push"]((()=>{Y=t,i(12,Y)}))},function(){E=this.paused,i(1,E)},function(t){B=t,i(6,B)},function(t){M=t,i(7,M)},function(t){P=t,i(8,P)},function(t){p[t?"unshift":"push"]((()=>{G=t,i(13,G)}))}]}class J extends t{constructor(t){super(),e(this,t,_,L,i,{autoplaying:0,muted:24,scroller:25,centroid:22,eze:26,file:27,autohide:28,format:29,loop:2,threshold:30,orientation:23,paused:1,root:31,force:32,controls:3,stretch:33,class:4,style:5},[-1,-1])}}function Z(t){let e,i;return e=new J({props:{class:t[4],style:`background-color: ${t[6]};color:${t[6]};`+t[5],format:t[0],file:t[1],root:t[2],stretch:t[3],eze:t[7],autoplaying:t[8],muted:t[9]}}),{c(){b(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,o){k(e,t,o),i=!0},p(t,[i]){const o={};16&i&&(o.class=t[4]),96&i&&(o.style=`background-color: ${t[6]};color:${t[6]};`+t[5]),1&i&&(o.format=t[0]),2&i&&(o.file=t[1]),4&i&&(o.root=t[2]),8&i&&(o.stretch=t[3]),128&i&&(o.eze=t[7]),256&i&&(o.autoplaying=t[8]),512&i&&(o.muted=t[9]),e.$set(o)},i(t){i||($(e.$$.fragment,t),i=!0)},o(t){y(e.$$.fragment,t),i=!1},d(t){z(e,t)}}}function tt(t,e,i){let o,n,a,l;R(t,q,(t=>i(7,n=t))),R(t,O,(t=>i(8,a=t))),R(t,T,(t=>i(9,l=t)));let{format:s}=e,{file:r}=e,{root:c}=e,{stretch:d}=e,{class:u=""}=e,{style:h=""}=e;return t.$$set=t=>{"format"in t&&i(0,s=t.format),"file"in t&&i(1,r=t.file),"root"in t&&i(2,c=t.root),"stretch"in t&&i(3,d=t.stretch),"class"in t&&i(4,u=t.class),"style"in t&&i(5,h=t.style)},t.$$.update=()=>{var e,n;2&t.$$.dirty&&i(6,o=((null==(n=null==(e=null==r?void 0:r.item)?void 0:e.meta)?void 0:n.colours)||[])[0])},[s,r,c,d,u,h,o,n,a,l]}class et extends t{constructor(t){super(),e(this,t,tt,Z,i,{format:0,file:1,root:2,stretch:3,class:4,style:5})}}export{et as E};