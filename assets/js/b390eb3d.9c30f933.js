"use strict";(self.webpackChunkmakemhz_support=self.webpackChunkmakemhz_support||[]).push([[961],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=i,g=d["".concat(p,".").concat(u)]||d[u]||f[u]||o;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2723:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:2},a="FATXplorer",l={unversionedId:"project-stellar/user-guide/xfer-files/fatexplorer/index",id:"project-stellar/user-guide/xfer-files/fatexplorer/index",title:"FATXplorer",description:"FATXplorer",source:"@site/docs/project-stellar/user-guide/02-xfer-files/fatexplorer/index.md",sourceDirName:"project-stellar/user-guide/02-xfer-files/fatexplorer",slug:"/project-stellar/user-guide/xfer-files/fatexplorer/",permalink:"/project-stellar/user-guide/xfer-files/fatexplorer/",draft:!1,editUrl:"https://github.com/makemhz/makemhz-support/tree/main/docs/project-stellar/user-guide/02-xfer-files/fatexplorer/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentation",previous:{title:"StellarOS FTP",permalink:"/project-stellar/user-guide/xfer-files/ftp/"},next:{title:"Overview",permalink:"/project-stellar/user-guide/new-hdd/overview/"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Selecting Device",id:"selecting-device",level:2},{value:"Mounting Partition",id:"mounting-partition",level:2},{value:"Transfering Files",id:"transfering-files",level:2},{value:"Wrapping Up",id:"wrapping-up",level:2}],c={toc:s},d="wrapper";function f(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fatxplorer"},"FATXplorer"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"FATXplorer",src:r(8843).Z,width:"1313",height:"851"})),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://fatxplorer.eaton-works.com/"},"FATXplorer"),", developed by Eaton Works, offers a user-friendly interface for mounting an Xbox hard drive on Windows. Once you connect the hard drive to a PC, this tool facilitates swift mounting and file transfers."),(0,i.kt)("h2",{id:"selecting-device"},"Selecting Device"),(0,i.kt)("p",null,"After installing FATXplorer, launch the program and choose the connected hard drive from the dropdown options."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If the drive isn't formatted, it won't appear under devices. To set up the drive, refer to the New Hard Drive guide.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"FATXplorer",src:r(1391).Z,width:"1313",height:"851"})),(0,i.kt)("h2",{id:"mounting-partition"},"Mounting Partition"),(0,i.kt)("p",null,"After the drive loads, a window will appear prompting you to choose which partition to mount, as well as the virtual drive letter you'd like to assign to it."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("a",{parentName:"p",href:"/project-stellar/user-guide/xfer-files/overview"},"Overview")," section provides insights into the various partitions present on the Xbox hard drive.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"FATXplorer",src:r(6380).Z,width:"1313",height:"851"})),(0,i.kt)("h2",{id:"transfering-files"},"Transfering Files"),(0,i.kt)("p",null,"When the drive partition is mounted, a Windows File Explorer window will pop up, allowing for file transfers."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"FATXplorer",src:r(7840).Z,width:"1313",height:"851"})),(0,i.kt)("h2",{id:"wrapping-up"},"Wrapping Up"),(0,i.kt)("p",null,"After completing the process, go back to FATXplorer, choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Devices"),", and then select ",(0,i.kt)("inlineCode",{parentName:"p"},"Close All")," to disengage the drive."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"FATXplorer",src:r(5903).Z,width:"1313",height:"851"})))}f.isMDXComponent=!0},8843:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/fatxplorer_00-740cb85df6f53cec355d2ecee2465553.png"},1391:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/fatxplorer_01-5bc44c1f8525a71b30c346e05dca2f41.png"},6380:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/fatxplorer_02-6413862edc3a975fe7f139f0a4a93c25.png"},7840:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/fatxplorer_03-84a71411eb580f9bc2c0d9213c28de09.png"},5903:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/fatxplorer_04-fe77cf1a1ea38a84a39049c51089f17d.png"}}]);