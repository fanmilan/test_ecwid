(this.webpackJsonptest_ecwid=this.webpackJsonptest_ecwid||[]).push([[0],{425:function(e,t,n){},426:function(e,t,n){},432:function(e,t,n){},433:function(e,t,n){},434:function(e,t,n){},435:function(e,t,n){},436:function(e,t,n){},437:function(e,t,n){},438:function(e,t,n){},439:function(e,t,n){},440:function(e,t,n){"use strict";n.r(t);n(190),n(240);var a,r=n(2),i=n.n(r),c=n(93),s=n.n(c),l=(n(425),n(426),n(1)),o=function(e){var t=e.name,n=e.children;return Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)("div",{className:"page__inside",children:[Object(l.jsx)(u,{title:t}),Object(l.jsx)(d,{children:n})]})})},u=Object(r.memo)((function(e){var t=e.title;return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h1",{className:"header__title",children:t})})})),d=function(e){var t=e.children;return Object(l.jsx)("div",{className:"main",children:t})},j=n(31),f=n(69),h=n(68),g=n(38),b=n(15);!function(e){e.ADD_IMAGE_REQUEST="ADD_IMAGE_REQUEST",e.ADD_MASSIVE_IMAGE_REQUEST="ADD_MASSIVE_IMAGE_REQUEST",e.ADD_IMAGE="ADD_IMAGE",e.DELETE_IMAGE="DELETE_IMAGE",e.CALC_GALLERY="CALC_GALLERY",e.CHANGE_WIDTH="CHANGE_WIDTH"}(a||(a={}));var O,m=180,v=3,E={width:860,images:[]},p=function(e,t){return e.width===t.width&&e.height===t.height&&e.sizeInGallery&&t.sizeInGallery&&e.sizeInGallery.width===t.sizeInGallery.width&&e.sizeInGallery.height===t.sizeInGallery.height};function _(e,t){for(var n=0,a=Object(g.a)(e),r=e.map((function(e){return e.width/e.height})),i=[],c=m,s=v,l=0,o=function(e){var o=r[e];i.push([e,o]),n+=o;var d=Math.round((t-(i.length-1)*s)/n);if(d>c)l=d;else{Math.abs(d-c)>Math.abs(l-c)?(console.log(l),d=l,e--,i.pop()):console.log(d);var j=0;i.forEach((function(e,n){var r=Object(h.a)(e,2),c=r[0],l=r[1],o=0,u=s;n===i.length-1?(o=t-j-(i.length-1)*s,u=0):(o=Math.round(d*l),j+=o),console.log(c+"->"+d),a[c].sizeInGallery={height:d,width:o,marginRight:u,marginTop:s}})),n=0,i=[],l=0}u=e},u=0;u<r.length;u++)o(u);return n>0&&i.forEach((function(e){var t=Object(h.a)(e,2),n=t[0],r=t[1],i=Math.round(c*r);a[n].sizeInGallery={height:c,width:i,marginRight:s,marginTop:s}})),a}!function(e){e.ADD_ERROR="ADD_ERROR",e.REMOVE_ERROR="REMOVE_ERROR"}(O||(O={}));var x={error:[]},R=Object(f.b)({gallery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.CHANGE_WIDTH:return console.log("width_change"),Object(b.a)(Object(b.a)({},e),{},{width:t.payload.width,images:_(e.images,t.payload.width)});case a.CALC_GALLERY:return console.log(e),Object(b.a)(Object(b.a)({},e),{},{images:_(e.images,t.payload.width)});case a.ADD_IMAGE_REQUEST:return Object(b.a)(Object(b.a)({},e),{},{images:_([].concat(Object(g.a)(e.images),[t.payload.image]),e.width)});case a.ADD_MASSIVE_IMAGE_REQUEST:return Object(b.a)(Object(b.a)({},e),{},{images:_([].concat(Object(g.a)(e.images),Object(g.a)(t.payload.images)),e.width)});case a.ADD_IMAGE:var n=t.payload.image,r=Object(g.a)(e.images),i=r.findIndex((function(e){return e.id===n.id}));if(-1!==i){var c=!p(r[i],n);r[i]=n,c&&_(r,e.width)}return Object(b.a)(Object(b.a)({},e),{},{images:r});case a.DELETE_IMAGE:return Object(b.a)(Object(b.a)({},e),{},{images:_(Object(g.a)(e.images).filter((function(e){return e.id!==t.payload.id})),e.width)});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.ADD_ERROR:return Object(b.a)(Object(b.a)({},e),{},{error:[].concat(Object(g.a)(e.error),[t.payload])});case O.REMOVE_ERROR:var n=Object(g.a)(e.error);return n.shift(),Object(b.a)(Object(b.a)({},e),{},{error:n});default:return e}}}),A=n(189),D=Object(f.c)(R,Object(f.a)(A.a)),I=(n(432),n(433),n(434),n(37)),w=function(e){return function(t){t(function(e){return Object(I.action)(O.ADD_ERROR,{text:e})}(e)),setTimeout((function(){t(Object(I.action)(O.REMOVE_ERROR))}),5e3)}},y=n(123),G=n.n(y),N=function(e){return Object(I.action)(a.ADD_IMAGE_REQUEST,{image:e})},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300;return function(a){var r={id:G()(),url:e,isLoading:!0,width:t,height:n};a(N(r)),a(T(r))}},T=function(e){return function(t){var n=new Image;n.src=e.url,n.onload=function(){t(function(e){return Object(I.action)(a.ADD_IMAGE,{image:e})}(Object(b.a)(Object(b.a)({},e),{},{height:n.height,width:n.width,isLoading:!1})))}}},L=function(e){return function(t){if(e.galleryImages){var n=e.galleryImages.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{id:G()(),isLoading:!0})}));t(function(e){return Object(I.action)(a.ADD_MASSIVE_IMAGE_REQUEST,{images:e})}(n)),n.forEach((function(e){t(T(e))}))}else t(w("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 JSON."))}},S=function(e){return function(t){var n;null!==e.match(/\.(jpeg|jpg|gif|png)$/)?t(M(e)):null!==e.match(/\.(json)$/)?t((n=e,function(e){fetch(n).then((function(e){if(!e.ok)throw new Error("not OK");return e.json()})).then((function(t){e(L(t))})).catch((function(t){e(w("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0444\u0430\u0439\u043b\u0430. ".concat(t)))}))})):t(w("\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0444\u0430\u0439\u043b\u0430. \u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u044b: jpg, json, gif, png."))}},C=function(e){return function(t){for(var n=0;n<e.length;n++)!function(){switch(e[n].type){case"image/jpeg":case"image/gif":case"image/png":t(M(URL.createObjectURL(e[n])));break;case"application/json":var a=new FileReader;a.onload=function(){try{var e=JSON.parse(a.result);t(L(e))}catch(n){t(w("\u041e\u0448\u0438\u0431\u043a\u0430 \u0447\u0442\u0435\u043d\u0438\u044f \u0444\u0430\u0439\u043b\u0430. ".concat(n)))}},a.readAsText(e[n]);break;default:t(w("\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0444\u0430\u0439\u043b\u0430. \u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u044b: jpg, json, gif, png."))}}()}},z=(n(435),function(e){var t=e.className,n=e.onClick,a=e.name;return Object(l.jsx)("button",{className:"btn "+(t||""),onClick:function(e){n&&n()},children:a})}),k=function(){var e=Object(r.useState)(!1),t=Object(h.a)(e,2),n=t[0],a=t[1],i=Object(j.b)(),c=Object(r.useRef)(null),s=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=c.current,t=0,n=function(e){e.preventDefault(),e.stopPropagation(),t++,e.dataTransfer&&e.dataTransfer.items&&e.dataTransfer.items.length>0&&a(!0)},r=function(e){e.preventDefault(),e.stopPropagation(),0===--t&&a(!1)},s=function(e){e.preventDefault(),e.stopPropagation()},l=function(e){e.preventDefault(),e.stopPropagation(),a(!1),e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files.length>0&&(i(C(e.dataTransfer.files)),e.dataTransfer.clearData()),t=0};return e&&(e.addEventListener("dragenter",n),e.addEventListener("dragleave",r),e.addEventListener("dragover",s),e.addEventListener("drop",l)),function(){e&&(e.removeEventListener("dragenter",n),e.removeEventListener("dragleave",r),e.removeEventListener("dragover",s),e.removeEventListener("drop",l))}}),[i]),Object(l.jsx)("div",{className:"drag-and-drop"+(n?" drag-and-drop_active":""),ref:c,children:Object(l.jsxs)("div",{className:"drag-and-drop__text",children:["\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u044c \u0441\u044e\u0434\u0430 \u0444\u0430\u0439\u043b\u044b",Object(l.jsx)("span",{className:"split-with-or",children:"\u0438\u043b\u0438"}),Object(l.jsxs)("div",{className:"upload-file-locale",children:[Object(l.jsx)(z,{name:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e",className:"btn_upload",onClick:function(){return s.current&&s.current.click()}}),Object(l.jsx)("input",{className:"file-input",type:"file",onChange:function(e){var t=e.target.files;t&&t.length>0&&(i(C(t)),e.target.value="")},ref:s})]})]})})},U=(n(436),n(437),i.a.forwardRef((function(e,t){var n=e.name,a=e.placeholder;return Object(l.jsx)("input",{type:"text",className:"input input_text",name:n,placeholder:a,ref:t})}))),H=function(){var e=Object(r.useRef)(null),t=Object(j.b)();return Object(l.jsxs)("div",{className:"upload-by-link",children:[Object(l.jsx)(U,{name:"link",placeholder:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435...",ref:e}),Object(l.jsx)(z,{className:"btn_upload-link",name:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c",onClick:function(){if(e.current){var n=e.current.value.trim();n&&t(S(n)),e.current.value=""}}})]})},Q=(n(438),function(){var e=Object(j.c)((function(e){return e.error.error}));return e.length>0?Object(l.jsxs)("div",{className:"error",children:[Object(l.jsx)("h3",{className:"error__title",children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"}),Object(l.jsx)("ul",{className:"error__list",children:e.map((function(e,t){return Object(l.jsx)(V,{item:e},t)}))})]}):null}),V=function(e){var t=e.item;return Object(l.jsx)("li",{className:"error__item",children:t.text})},W=function(){return Object(l.jsxs)("div",{className:"upload-field",children:[Object(l.jsx)(H,{}),Object(l.jsx)("div",{className:"split-with-or",children:"\u0418\u041b\u0418"}),Object(l.jsx)(k,{}),Object(l.jsx)(Q,{})]})},J=(n(439),function(e){var t=e.item,n=Object(j.b)();return t.sizeInGallery?Object(l.jsx)("article",{"data-id":t.id,className:"gallery-item",style:{height:t.sizeInGallery.height,width:t.sizeInGallery.width,marginRight:t.sizeInGallery.marginRight,marginTop:t.sizeInGallery.marginTop},children:!t.isLoading&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"gallery-item__bar",children:Object(l.jsx)(z,{name:"\u2715",className:"btn_small btn_bar",onClick:function(){return n((e=t.id,Object(I.action)(a.DELETE_IMAGE,{id:e})));var e}})}),Object(l.jsx)("img",{className:"gallery-item__img",src:t.url,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0433\u0430\u043b\u0435\u0440\u0435\u0438"})]})}):null}),P=function(){var e=Object(r.useRef)(null),t=Object(j.c)((function(e){return e.gallery})).images,n=Object(j.b)();Object(r.useEffect)((function(){var e=function(){i()};return i(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[n]);var i=function(){var t=e.current;if(t){var r=t.clientWidth;n(function(e){return Object(I.action)(a.CHANGE_WIDTH,{width:e})}(r))}};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(W,{}),Object(l.jsx)("div",{className:"gallery",ref:e,children:t.length?t.map((function(e){return Object(l.jsx)(J,{item:e},e.id)})):Object(l.jsx)("div",{className:"gallery__empty",children:"\u0413\u0430\u043b\u0435\u0440\u0435\u044f \u043f\u0443\u0441\u0442\u0430"})})]})};var F=function(){return Object(l.jsx)(j.a,{store:D,children:Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(o,{name:"\u0413\u0430\u043b\u0435\u0440\u0435\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",children:Object(l.jsx)(P,{})})})})};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(F,{})}),document.getElementById("root"))}},[[440,1,2]]]);
//# sourceMappingURL=main.461291a2.chunk.js.map