"use strict";(self.webpackChunkmakemhz_support=self.webpackChunkmakemhz_support||[]).push([[416],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const l={},a="Initial Setup",o={unversionedId:"project-stellar/initial-setup/index",id:"project-stellar/initial-setup/index",title:"Initial Setup",description:"The initial setup for Project Stellar is pretty straightforward; this guide will guide you through each step.",source:"@site/docs/02-project-stellar/00-initial-setup/index.md",sourceDirName:"02-project-stellar/00-initial-setup",slug:"/project-stellar/initial-setup/",permalink:"/project-stellar/initial-setup/",draft:!1,editUrl:"https://github.com/makemhz/makemhz-support/tree/main/docs/02-project-stellar/00-initial-setup/index.md",tags:[],version:"current",frontMatter:{},sidebar:"documentation",previous:{title:"Hard Drive Partitions",permalink:"/xbox/xbox-info/hdd-partitions/"},next:{title:"Installation Guide",permalink:"/project-stellar/installation-guide/"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Linux",id:"linux",level:3},{value:"Setup",id:"setup",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...l}=e;return(0,i.kt)(c,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"initial-setup"},"Initial Setup"),(0,i.kt)("p",null,"The initial setup for Project Stellar is pretty straightforward; this guide will guide you through each step."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chrome or Microsoft Edge web browser")),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create udev rule\n",(0,i.kt)("inlineCode",{parentName:"li"},'echo \'SUBSYSTEMS=="usb", ATTRS{idVendor}=="16d0", ATTRS{idProduct}=="119c", GROUP="users", MODE="666"\' | sudo tee /etc/udev/rules.d/99-stellar.rules')),(0,i.kt)("li",{parentName:"ul"},"Reload udev")),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Connect Project Stellar to your computer via USB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Navigate to ",(0,i.kt)("a",{parentName:"p",href:"https://stellar.makemhz.com"},"stellar.makemhz.com")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Setup Screenshot",src:r(8060).Z,width:"1920",height:"1200"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Click "Connect via USB" and choose "Project Stellar" from the popup window')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Setup Screenshot",src:r(5819).Z,width:"1920",height:"1200"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Click "Complete Setup"')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Setup Screenshot",src:r(5843).Z,width:"1920",height:"1200"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select your unmodified Xbox 5838 BIOS image")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Setup Screenshot",src:r(7931).Z,width:"1920",height:"1200"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Setup Screenshot",src:r(8460).Z,width:"1920",height:"1200"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Wait for for setup to complete")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Setup Screenshot",src:r(5123).Z,width:"1920",height:"1200"}),"\n",(0,i.kt)("img",{alt:"Setup Screenshot",src:r(3134).Z,width:"1920",height:"1200"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All done!")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Setup Screenshot",src:r(3210).Z,width:"1920",height:"1200"}),"\n",(0,i.kt)("img",{alt:"Setup Screenshot",src:r(395).Z,width:"1920",height:"1200"})))}d.isMDXComponent=!0},8060:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/inital_setup_1-24198b28fd1ce386790412549edb6c58.png"},395:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/inital_setup_10-2197771ef5e81466b3ccd393f057c09e.png"},5819:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/inital_setup_2-226a4efe89a1af470d09a5956d5ee847.png"},5843:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/inital_setup_4-d0fbe1ed3d73c4f38a30a3cbce2ed5c9.png"},7931:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/inital_setup_5-1d9efb191e1872f27f3f2e8506b3fc79.png"},8460:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/inital_setup_6-cbb1e7e5d533b32c5140ca2e34d03ac9.png"},5123:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/inital_setup_7-cd30091acc30df48ccdbcdae7c19d4b8.png"},3134:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/inital_setup_8-99bce5014a83cc5bc45ccdb62288995c.png"},3210:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/inital_setup_9-4cd27bc24b5d58cc44c5733721abd4f3.png"}}]);