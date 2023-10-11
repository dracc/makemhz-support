"use strict";(self.webpackChunkmakemhz_support=self.webpackChunkmakemhz_support||[]).push([[334],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var s=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,i=function(e,t){if(null==e)return{};var a,s,i={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=s.createContext({}),r=function(e){var t=s.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=r(e.components);return s.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},f=s.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),c=r(a),f=i,u=c["".concat(p,".").concat(f)]||c[f]||d[f]||n;return a?s.createElement(u,l(l({ref:t},h),{},{components:a})):s.createElement(u,l({ref:t},h))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var r=2;r<n;r++)l[r]=a[r];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8996:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>r});var s=a(7462),i=(a(7294),a(3905));const n={},l="XboxHD+ Software",o={unversionedId:"xbox-hdmi/software/xboxhd",id:"xbox-hdmi/software/xboxhd",title:"XboxHD+ Software",description:"This guide is for the installation of the XboxHD+ software and kernel patch.",source:"@site/docs/03-xbox-hdmi/02-software/00-xboxhd.md",sourceDirName:"03-xbox-hdmi/02-software",slug:"/xbox-hdmi/software/xboxhd",permalink:"/xbox-hdmi/software/xboxhd",draft:!1,editUrl:"https://github.com/makemhz/makemhz-support/tree/main/docs/03-xbox-hdmi/02-software/00-xboxhd.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"documentation",previous:{title:"ind.5003.xx",permalink:"/xbox-hdmi/kernel-patch/ind"},next:{title:"XboxHDMI Software",permalink:"/xbox-hdmi/software/xboxhdmi"}},p={},r=[{value:"Checklist",id:"checklist",level:2},{value:"Hard Drive Preparation",id:"hard-drive-preparation",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Patching BIOS with kpatcher Support",id:"patching-bios-with-kpatcher-support",level:2},{value:"Step 1",id:"step-1-1",level:3},{value:"Step 2",id:"step-2-1",level:3},{value:"Step 3",id:"step-3-1",level:3},{value:"Step 4",id:"step-4-1",level:3},{value:"Step 5",id:"step-5",level:3},{value:"Step 6",id:"step-6",level:3},{value:"Verification",id:"verification",level:2},{value:"Step 1",id:"step-1-2",level:3},{value:"All Done",id:"all-done",level:2}],h={toc:r},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,s.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"xboxhd-software"},"XboxHD+ Software"),(0,i.kt)("p",null,"This guide is for the installation of the XboxHD+ software and kernel patch."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Say goodbye to the hassle of software patching! With ",(0,i.kt)("a",{parentName:"p",href:"https://makemhz.com/products/stellar"},"Project Stellar"),",\nenjoy a seamless installation experience where software patching becomes a thing of the past.")),(0,i.kt)("h2",{id:"checklist"},"Checklist"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","OpenXenium installed.",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Tested and verified that OpenXenium is accessible via network. (Both HTTP and FTP)"))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","System is fully working.")),(0,i.kt)("h2",{id:"hard-drive-preparation"},"Hard Drive Preparation"),(0,i.kt)("h3",{id:"step-1"},"Step 1"),(0,i.kt)("p",null,"Boot console to XeniumOS via the eject button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"XeniumOS Boot Screen",src:a(2046).Z,width:"1280",height:"960"})),(0,i.kt)("h3",{id:"step-2"},"Step 2"),(0,i.kt)("p",null,"Download the latest XboxHD+ app release."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/MakeMHz/xbox-hd-plus-app/releases/latest"},"Latest Release")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"FTP BIOS bin file",src:a(3264).Z,width:"1346",height:"878"})),(0,i.kt)("h3",{id:"step-3"},"Step 3"),(0,i.kt)("p",null,"Extract the files and FTP over contents to the C drive. Files must be placed on the C drive. (Inside of a folder called 'xboxhd' as shown)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"XeniumOS Boot Screen",src:a(3543).Z,width:"1261",height:"872"})),(0,i.kt)("h3",{id:"step-4"},"Step 4"),(0,i.kt)("p",null,"Leave Xbox on and continue to the next section."),(0,i.kt)("h2",{id:"patching-bios-with-kpatcher-support"},"Patching BIOS with kpatcher Support"),(0,i.kt)("h3",{id:"step-1-1"},"Step 1"),(0,i.kt)("p",null,"Download the latest kpatch IPS file for your BIOS of choice."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/MakeMHz/xbox-hd-plus/blob/master/patches/README.md#xbox-kernel-patches-kpatch---xboxhd"},"BIOS Patches")),(0,i.kt)("h3",{id:"step-2-1"},"Step 2"),(0,i.kt)("p",null,"Apply patch to BIOS by following the link to the patching guide for the corresponding BIOS patch. (Due to legal reasons we can not distribute the BIOS files)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"BIOS Guides",src:a(6965).Z,width:"1556",height:"829"})),(0,i.kt)("h3",{id:"step-3-1"},"Step 3"),(0,i.kt)("p",null,"FTP the patched BIOS file over to Xbox. It's recommended to store the BIOS file inside of a folder on the C drive called 'BIOS' for future refrences."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"FTP BIOS bin file",src:a(1866).Z,width:"1433",height:"1052"})),(0,i.kt)("h3",{id:"step-4-1"},"Step 4"),(0,i.kt)("p",null,"Flash BIOS."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"BIOS Flashing Step 1",src:a(1851).Z,width:"1280",height:"720"}),"\n",(0,i.kt)("img",{alt:"BIOS Flashing Step 2",src:a(3993).Z,width:"1280",height:"720"}),"\n",(0,i.kt)("img",{alt:"BIOS Flashing Step 3",src:a(6289).Z,width:"1280",height:"720"}),"\n",(0,i.kt)("img",{alt:"BIOS Flashing Step 4",src:a(6923).Z,width:"1280",height:"720"}),"\n",(0,i.kt)("img",{alt:"BIOS Flashing Step 5",src:a(1010).Z,width:"1280",height:"720"}),"\n",(0,i.kt)("img",{alt:"BIOS Flashing Step 6",src:a(4068).Z,width:"1280",height:"720"}),"\n",(0,i.kt)("img",{alt:"BIOS Flashing Step 7",src:a(6936).Z,width:"1280",height:"720"}),"\n",(0,i.kt)("img",{alt:"BIOS Flashing Step 8",src:a(2678).Z,width:"1280",height:"720"})),(0,i.kt)("h3",{id:"step-5"},"Step 5"),(0,i.kt)("p",null,"Set the newly flashed BIOS as the default BIOS."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"BIOS Flashing Step 9",src:a(5990).Z,width:"1280",height:"720"}),"\n",(0,i.kt)("img",{alt:"BIOS Flashing Step 10",src:a(4916).Z,width:"1280",height:"720"})),(0,i.kt)("h3",{id:"step-6"},"Step 6"),(0,i.kt)("p",null,"Ensure that 'Instant Boot' is enabled. This automatically boot the default BIOS on power up."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"BIOS Flashing Step 11",src:a(8052).Z,width:"1280",height:"720"}),"\n",(0,i.kt)("img",{alt:"BIOS Flashing Step 12",src:a(6536).Z,width:"1280",height:"720"}),"\n",(0,i.kt)("img",{alt:"BIOS Flashing Step 13",src:a(1290).Z,width:"1280",height:"720"})),(0,i.kt)("h2",{id:"verification"},"Verification"),(0,i.kt)("p",null,"At this point you can reboot the Xbox. This will boot the patched BIOS."),(0,i.kt)("h3",{id:"step-1-2"},"Step 1"),(0,i.kt)("p",null,"Launch the XboxHD+ app. If all went well you should now see the configuration app and text that says 'Kernel patch loader detected'.\n",(0,i.kt)("img",{alt:"Kernel patch installation verification",src:a(9673).Z,width:"1279",height:"709"})),(0,i.kt)("h2",{id:"all-done"},"All Done"),(0,i.kt)("p",null,"And that's it! Installation of the XboxHD+ kit can now continue."))}d.isMDXComponent=!0},9673:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/KPatch-Verification-6597cea1e328665364c0960052b46b7e.png"},1851:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/flash_step1-bc9e0fe575961554abe3393314c435ea.png"},4916:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/flash_step10-3fe35b2182705bcdcf6dcca31c6a177e.png"},8052:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/flash_step11-86018d6d68bfe2f1c231c4a6c7b332ad.png"},6536:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/flash_step12-0554c8f916ce02474d6fdfa0eb473a80.png"},1290:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/flash_step13-ab98aca7856ff2116a3326f2b790bbef.png"},3993:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/flash_step2-9d8ceffa9df81bdcfe8b9671b2d87db6.png"},6289:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/flash_step3-d86349e5e9ceeed62d970c56eb572c95.png"},6923:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/flash_step4-4367c6e06460410ed3bcdfc3353a5bd8.png"},1010:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/flash_step5-826d59340a1031357eb3da3062bbe3a1.png"},4068:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/flash_step6-aa95b1531fa0da215bc3db2350f13a65.png"},6936:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/flash_step7-e9f616680d3436ca16960ee4dd11fd20.png"},2678:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/flash_step8-2e90bd7e87564f4620a4b0ef9da26c0c.png"},5990:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/flash_step9-4d76183a0d5c41a8ffb2490fa6d2ba00.png"},3543:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/ftp_app-2d4d208be451fe9566e227ef23ae4e48.png"},1866:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/ftp_bios-7ce4d0788791e06303ce9538ea743d4c.png"},3264:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/latest_release-43bb6dce6703f862b177df8b3d826f8e.png"},6965:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/patches_guide-0a80dadd50100964bb2565fe7d599e2a.png"},2046:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/xeniumos-ed48578f5629706b05f9c8370beda585.png"}}]);