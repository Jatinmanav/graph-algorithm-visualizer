(this["webpackJsonpgraph-algorithm-visualizer"]=this["webpackJsonpgraph-algorithm-visualizer"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),l=n(1),i=n(5),u=n(2),s=Object(a.createContext)({nodeList:[],edgeList:[],adjacencyList:[],addNode:function(e){},addEdge:function(e){},addUndirectedEdge:function(e,t){},moveNode:function(e){},deleteNode:function(e,t){},clearNodes:function(){}}),d=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],o=n[1],d=Object(a.useState)([]),f=Object(u.a)(d,2),v=f[0],m=f[1],g=Object(a.useState)([]),h=Object(u.a)(g,2),b=h[0],p=h[1];return c.a.createElement(s.Provider,{value:{nodeList:r,edgeList:v,adjacencyList:b,addNode:function(e){b.push({count:e.count,target:[]}),o([].concat(Object(i.a)(r),[e])),p(b)},addEdge:function(e){var t,n=b,a=Object(l.a)(n);try{for(a.s();!(t=a.n()).done;){var c=t.value;c.count===e.source.count&&c.target.push(e.target.count)}}catch(r){a.e(r)}finally{a.f()}m([].concat(Object(i.a)(v),[e])),p(n),console.log(b),console.log(v)},addUndirectedEdge:function(e,t){var n,a=b,c=Object(l.a)(a);try{for(c.s();!(n=c.n()).done;){var r=n.value;r.count===e.source.count?r.target.push(e.target.count):r.count===t.source.count&&r.target.push(t.target.count)}}catch(o){c.e(o)}finally{c.f()}m([].concat(Object(i.a)(v),[e,t])),p(a),console.log(b),console.log(v)},clearNodes:function(){o([]),m([]),p([])},moveNode:function(e){var t=e.count,n=r;for(var a in n)n[a].count===t&&(n[a]=e);o(n)},deleteNode:function(e,t){var n,a=0,c=Object(l.a)(r);try{for(c.s();!(n=c.n()).done;){var i=n.value;Math.abs(e-i.clientX)<20&&Math.abs(t-i.clientY)<20&&(a=i.count)}}catch(y){c.e(y)}finally{c.f()}var u=v.filter((function(e){return console.log(e.source.count,e.target.count,a),e.source.count!==a&&e.target.count!==a}));m(u);for(var s=r.filter((function(e){return e.count!==a})),d=b,f=d.length;f--;)d[f].count===a&&d.splice(f,1);var g,h=Object(l.a)(d);try{for(h.s();!(g=h.n()).done;)for(var O=g.value,w=O.target.length;w--;)O.target[w]===a&&O.target.splice(w,1)}catch(y){h.e(y)}finally{h.f()}p(d),o(s)}}},e.children)},f=Object(a.createContext)({canvas:null,context:null,setCanvas:function(){},setContext:function(){}}),v=function(e){var t=Object(a.useState)(null),n=Object(u.a)(t,2),r=n[0],o=n[1],l=Object(a.useState)(null),i=Object(u.a)(l,2),s=i[0],d=i[1];return c.a.createElement(f.Provider,{value:{canvas:r,context:s,setCanvas:o,setContext:d}},e.children)},m=Object(a.createContext)({open:!1,message:"",toggleSnackbar:function(){}}),g=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),r=n[0],o=n[1],l=Object(a.useState)(""),i=Object(u.a)(l,2),s=i[0],d=i[1];return c.a.createElement(m.Provider,{value:{open:r,message:s,toggleSnackbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.length<1?(o(!1),d("")):(o(!0),d(e))}}},e.children)};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),O=c.a.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),w=function(e){var t=e.svgRef,n=e.title,a=b(e,["svgRef","title"]);return c.a.createElement("svg",h({viewBox:"0 0 24 24",fill:"black",width:"24px",height:"24px",ref:t},a),n?c.a.createElement("title",null,n):null,p,O)},y=c.a.forwardRef((function(e,t){return c.a.createElement(w,h({svgRef:t},e))}));n.p;function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var x=c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),N=c.a.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),C=function(e){var t=e.svgRef,n=e.title,a=j(e,["svgRef","title"]);return c.a.createElement("svg",E({viewBox:"0 0 24 24",fill:"black",width:"24px",height:"24px",ref:t},a),n?c.a.createElement("title",null,n):null,x,N)},S=c.a.forwardRef((function(e,t){return c.a.createElement(C,E({svgRef:t},e))})),k=(n.p,function(e){var t=e.nodeList,n=e.count,r=e.setNode,o=Object(a.useState)(!1),l=Object(u.a)(o,2),i=l[0],s=l[1];return c.a.createElement("div",{className:"dropdown-container",onClick:function(e){e.preventDefault(),s(!i)}},c.a.createElement("div",{className:"dropdown-text-container"},c.a.createElement("div",{className:"dropdown-text"}," Node ",n," "),c.a.createElement("div",{className:"dropdown-arrow"},i?c.a.createElement(S,null):c.a.createElement(y,null))),i?c.a.createElement("div",{className:"dropdown-item-container"},t.length<=1?c.a.createElement("div",{className:"dropdown-item"},"Nodes Unavailable"):t.map((function(e){return e.count!==n?c.a.createElement("div",{className:"dropdown-item",key:e.count,onClick:function(t){return function(e,t){e.preventDefault(),s(!i),r(t)}(t,e.count)}},"Node ",e.count):c.a.createElement(c.a.Fragment,{key:e.count})}))):c.a.createElement(c.a.Fragment,null))}),M=function(e,t,n,a,c){t.beginPath(),t.arc(n,a,20,0,2*Math.PI,!1),t.lineWidth=2,t.fillStyle=c,t.closePath(),t.fill(),t.strokeStyle="#121212",t.fillStyle="#121212",t.arc(n,a,20,0,2*Math.PI,!1),t.stroke(),t.font="20px Roboto",t.textAlign="center",t.textBaseline="middle",t.fillText(e.toString(),n,a)};var Y=function(e,t,n,a,c){var r=e.canvasX,o=e.canvasY,l=t.canvasX,i=t.canvasY,s=Math.atan2(i-o,l-r);l-=20*Math.cos(s),i-=20*Math.sin(s),r+=20*Math.cos(s),o+=20*Math.sin(s),a.lineWidth=3,a.strokeStyle=c,a.fillStyle=c,a.beginPath(),a.moveTo(r,o),a.lineTo(l,i),a.stroke(),n&&function(e,t,n,a,c){var r,o,l,i=Object(u.a)(n,2),s=i[0],d=i[1],f=Object(u.a)(t,2),v=f[0],m=f[1];e.fillStyle=c,r=Math.atan2(d-m,s-v),o=s,l=d,e.moveTo(o,l),r+=1/3*(2*Math.PI),o=a*Math.cos(r)+s,l=a*Math.sin(r)+d,e.lineTo(o,l),r+=1/3*(2*Math.PI),o=a*Math.cos(r)+s,l=a*Math.sin(r)+d,e.lineTo(o,l),e.closePath(),e.fill()}(a,[r,o],[l,i],15,c)},X=function(e){var t="#eeeeee";return"dark"===e.documentElement.getAttribute("data-theme")&&(t="#eeeeee"),t},D=function(e){var t="#6002ee";return"dark"===e.documentElement.getAttribute("data-theme")&&(t="#03dac5"),t},L=function(e,t,n,a,c){if(n&&a){a.clearRect(0,0,n.width,n.height);var r,o=n.getBoundingClientRect(),i=Object(l.a)(e);try{for(i.s();!(r=i.n()).done;){var u=r.value;u.color=X(document),o.right===u.windowX&&o.bottom===u.windowY||(console.log(u.count),console.log(u.windowY),console.log(window.innerHeight),u.clientX=u.clientX*(o.right/u.windowX),u.clientY=u.clientY*(o.bottom/u.windowY),u.canvasX=u.clientX-o.left,u.canvasY=u.clientY-o.top,u.windowX=o.right,u.windowY=o.bottom)}}catch(h){i.e(h)}finally{i.f()}var s,d=Object(l.a)(t);try{for(d.s();!(s=d.n()).done;){var f=s.value;Y(f.source,f.target,f.directed,a,c)}}catch(h){d.e(h)}finally{d.f()}var v,m=Object(l.a)(e);try{for(m.s();!(v=m.n()).done;){var g=v.value;g.visualize&&(g.color=D(document)),M(g.count,a,g.canvasX,g.canvasY,g.color)}}catch(h){m.e(h)}finally{m.f()}}},R=(n(15),function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(0),i=Object(u.a)(o,2),d=i[0],v=i[1],m=Object(a.useContext)(s),g=m.nodeList,h=m.edgeList,b=m.addEdge,p=m.addUndirectedEdge,O=m.clearNodes,w=Object(a.useContext)(f),y=w.canvas,E=w.context,j=function(){document.documentElement.classList.add("transition"),window.setTimeout((function(){document.documentElement.classList.remove("transition")}),1e3)};return c.a.createElement("header",{className:"navbar"},c.a.createElement(k,{nodeList:g,count:n,setNode:r}),c.a.createElement(k,{nodeList:g,count:d,setNode:v}),c.a.createElement("button",{className:"add-edge-one header-button",onClick:function(e){if(e.preventDefault(),E&&y){var t,a=n,c=d,r=null,o=null,i=Object(l.a)(g);try{for(i.s();!(t=i.n()).done;){var u=t.value;u.count===a?r=u:u.count===c&&(o=u)}}catch(s){i.e(s)}finally{i.f()}if(r&&o)b({source:r,target:o,directed:!0,weight:1})}}},"Add Directed Edge"),c.a.createElement("button",{className:"add-edge-two header-button",onClick:function(e){if(e.preventDefault(),E&&y){var t,a=n,c=d,r=null,o=null,i=Object(l.a)(g);try{for(i.s();!(t=i.n()).done;){var u=t.value;u.count===a?r=u:u.count===c&&(o=u)}}catch(s){i.e(s)}finally{i.f()}if(r&&o)p({source:r,target:o,directed:!1,weight:1},{source:o,target:r,directed:!1,weight:1})}}},"Add Undirected Edge"),c.a.createElement("button",{className:"clear-canvas header-button",onClick:function(e){e.preventDefault(),E&&y&&(E.clearRect(0,0,y.width,y.height),O())}},"Clear Canvas"),c.a.createElement("div",{className:"toggle-container"},c.a.createElement("input",{type:"checkbox",id:"switch",className:"toggle-switch",onClick:function(e){var t;t=e.target.checked,console.log("test"),t?(j(),document.documentElement.setAttribute("data-theme","dark"),L(g,h,y,E,"#eeeeee")):(j(),document.documentElement.setAttribute("data-theme","light"),L(g,h,y,E,"#333333"))}}),c.a.createElement("label",{className:"toggle-label",htmlFor:"switch"},"Toggle")))}),P=function(){var e=Object(a.useState)([0,0]),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useLayoutEffect)((function(){var e=function(){c([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n};function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var A=c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),T=c.a.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),H=function(e){var t=e.svgRef,n=e.title,a=B(e,["svgRef","title"]);return c.a.createElement("svg",z({viewBox:"0 0 24 24",fill:"black",width:"24px",height:"24px",ref:t},a),n?c.a.createElement("title",null,n):null,A,T)},I=c.a.forwardRef((function(e,t){return c.a.createElement(H,z({svgRef:t},e))})),F=(n.p,function(e){var t=e.source,n=e.target,r=e.directed,o=Object(a.useContext)(s),i=o.nodeList,u=o.addEdge,d=o.addUndirectedEdge,v=Object(a.useContext)(f),m=v.canvas,g=v.context;return c.a.createElement("div",{key:n,onClick:r?function(e){if(e.preventDefault(),g&&m){var a,c=t,r=n,o=null,s=null,d=Object(l.a)(i);try{for(d.s();!(a=d.n()).done;){var f=a.value;f.count===c?o=f:f.count===r&&(s=f)}}catch(v){d.e(v)}finally{d.f()}if(o&&s)u({source:o,target:s,directed:!0,weight:1})}}:function(e){if(e.preventDefault(),g&&m){var a,c=+t,r=+n,o=null,u=null,s=Object(l.a)(i);try{for(s.s();!(a=s.n()).done;){var f=a.value;f.count===c?o=f:f.count===r&&(u=f)}}catch(v){s.e(v)}finally{s.f()}if(o&&u)d({source:o,target:u,directed:!1,weight:1},{source:u,target:o,directed:!1,weight:1})}},className:"context-menu-option context-menu-edge-option"},"Node ",n)}),U=function(e,t,n){var a,c=!0,r=Object(l.a)(e);try{for(r.s();!(a=r.n()).done;){var o=a.value;console.log("Pos: ".concat(t," ").concat(n,", Item: ").concat(o.windowX," ").concat(o.windowY)),Math.abs(o.clientX-t)<20&&Math.abs(o.clientY-n)<20&&(c=!1)}}catch(i){r.e(i)}finally{r.f()}return c},W=function(e,t,n,a,c,r,o,l){return{count:e,canvasX:t,canvasY:n,clientX:a,clientY:c,windowX:r,windowY:o,color:l,visualize:!1}},J=function(e){var t="#333333";return"dark"===e.documentElement.getAttribute("data-theme")&&(t="#eeeeee"),t},G=function(e){var t=0;return e.length>0&&(t=e.slice(-1)[0].count+1),t},V=function(e){var t=e.contextmenu,n=e.setContextMenuState,r=Object(a.useState)({isOpen:!1}),o=Object(u.a)(r,2),i=o[0],d=o[1],v=Object(a.useState)({x:0,y:0}),m=Object(u.a)(v,2),g=m[0],h=m[1],b=Object(a.useState)({x:0,edgeCase:!1,y1:0,y2:0}),p=Object(u.a)(b,2),O=p[0],w=p[1],y=Object(a.useState)(-1),E=Object(u.a)(y,2),j=E[0],x=E[1],N=Object(a.useState)(!0),C=Object(u.a)(N,2),S=C[0],k=C[1],M=Object(a.useRef)(null),Y=Object(a.useRef)(null),D=t.x,R=t.y,P=Object(a.useContext)(f),z=P.canvas,B=P.context,A=Object(a.useContext)(s),T=A.nodeList,H=A.edgeList,V=A.addNode,q=A.clearNodes,K=A.deleteNode;Object(a.useEffect)((function(){var e=D,t=R;if(D+200>window.innerWidth&&(e=D-200),R+150>window.innerHeight&&(t=S?R-100:R-150),null!=M.current){var n=M.current.getBoundingClientRect(),a=M.current.getBoundingClientRect(),c=!1,r=n.right,o=n.top,i=n.bottom;n.right+200>window.innerWidth&&(r-=403),n.top+200>window.innerHeight&&(o=window.innerHeight-a.top-45,i=window.innerHeight-a.bottom-45,c=!0),console.log("top ",o),console.log("bottom ",i),w({x:r,edgeCase:c,y1:o,y2:i})}if(h({x:e,y:t}),k(U(T,D,R)),!1===S){var u,s=Object(l.a)(T);try{for(s.s();!(u=s.n()).done;){var d=u.value;Math.abs(D-d.clientX)<20&&Math.abs(R-d.clientY)<20&&(console.log(d.count),x(d.count))}}catch(f){s.e(f)}finally{s.f()}}}),[D,R,T,j,S]);var Q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n={isOpen:e,directed:t};d(n)};return c.a.createElement("div",{className:"context-menu-container",onMouseLeave:function(e){e.preventDefault(),Q(!1)}},i.isOpen?c.a.createElement("div",{className:"context-menu context-menu-new-edge",style:O.edgeCase?{left:O.x,bottom:i.directed?O.y1:O.y2,position:"absolute"}:{left:O.x,top:i.directed?O.y1:O.y2,position:"absolute"}},1===T.length?c.a.createElement("div",{className:"context-menu-option context-menu-edge-option"},"Nodes Unavailable"):T.map((function(e){return e.count!==j&&void 0!==i.directed?c.a.createElement(F,{key:e.count,source:j,target:e.count,directed:i.directed}):null}))):c.a.createElement(c.a.Fragment,null),c.a.createElement("div",{className:"context-menu",style:{left:g.x,top:g.y,position:"absolute"},onContextMenu:function(e){e.preventDefault()}},S?c.a.createElement("div",null,c.a.createElement("div",{className:"context-menu-option",onClick:function(e){if(e.preventDefault(),z){var t=z.getBoundingClientRect(),a=D-t.left,c=R-t.top;if(B){var r=G(T),o=W(r,a,c,D,R,t.right,t.bottom,X(document));V(o)}n(!1)}}},c.a.createElement("span",{className:"context-menu-text"},"Add Node")),c.a.createElement("div",{className:"context-menu-option",onClick:function(e){e.preventDefault(),console.log("Clear Canvas"),B&&z&&(B.clearRect(0,0,z.width,z.height),q()),n(!1)}},c.a.createElement("span",{className:"context-menu-text"},"Clear Canvas"))):c.a.createElement("div",null,c.a.createElement("div",{className:"context-menu-option",onClick:function(e){e.preventDefault(),K(D,R),L(T,H,z,B,J(document)),n(!1)}},c.a.createElement("span",{className:"context-menu-text"},"Delete Node")),c.a.createElement("div",{className:"context-menu-option context-menu-arrow",ref:M,onMouseEnter:function(e){e.preventDefault(),Q(!0,!0)}},c.a.createElement("span",{className:"context-menu-arrow-text context-menu-text"},"Add Direceted Edge"),c.a.createElement(I,{className:"context-menu-arrow-head"})),c.a.createElement("div",{className:"context-menu-option context-menu-arrow",ref:Y,onMouseEnter:function(e){e.preventDefault(),Q(!0,!1)}},c.a.createElement("span",{className:"context-menu-arrow-text context-menu-text"},"Add Undireceted Edge"),c.a.createElement(I,{className:"context-menu-arrow-head"})))))},q=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(0),l=Object(u.a)(o,2),i=l[0],d=l[1],v=Object(a.useState)({isOpen:!1,x:0,y:0}),m=Object(u.a)(v,2),g=m[0],h=m[1],b=Object(a.useRef)(null),p=P(),O=Object(u.a)(p,2),w=O[0],y=O[1],E=Object(a.useContext)(s),j=E.nodeList,x=E.edgeList,N=E.moveNode,C=E.addNode,S=Object(a.useContext)(f),k=S.canvas,M=S.context,Y=S.setCanvas,D=S.setContext,R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;console.log(e);var a={isOpen:e,x:t,y:n};h(a)};Object(a.useEffect)((function(){var e=b.current;e&&(Y(e),D(e.getContext("2d")),e.width=window.innerWidth,e.height=window.innerHeight),L(j,x,e,M,J(document))}),[w,y,j,x,M,Y,D]);return c.a.createElement("div",{className:"canvas-container"},g.isOpen?c.a.createElement(V,{contextmenu:g,setContextMenuState:R}):c.a.createElement(c.a.Fragment,null),c.a.createElement("canvas",{ref:b,"data-testid":"canvas-element",className:"canvas",onMouseDown:function(e){if(e.preventDefault(),d(e.buttons),k&&1===e.buttons){var t=e.clientX,n=e.clientY,a=k.getBoundingClientRect(),c=-1;for(var o in j)Math.abs(t-j[o].clientX)<20&&Math.abs(n-j[o].clientY)<20&&(c=+o);if(c>-1){console.log(c);var l=j[c];l.clientX=t,l.clientY=n,l.canvasX=t-a.left,l.canvasY=n-a.top,r(l)}}2===e.buttons&&(R(!0,e.clientX,e.clientY),console.log("Context Menu Open"))},onMouseMove:function(e){if(e.preventDefault(),n&&k&&1===e.buttons){var t=e.clientX,a=e.clientY,c=n,o=k.getBoundingClientRect();c.clientX=t,c.clientY=a,c.canvasX=t-o.left,c.canvasY=a-o.top,r(c),N(n),L(j,x,k,M,J(document))}},onMouseUp:function(e){if(e.preventDefault(),console.log(e.buttons),n)r(null);else if(!1===g.isOpen&&k){var t=k.getBoundingClientRect(),a=e.clientX-t.left,c=e.clientY-t.top;if(M){var o=G(j),l=W(o,a,c,e.clientX,e.clientY,t.right,t.bottom,X(document));C(l)}}else 1===i&&R(!1)},onMouseOut:function(e){e.preventDefault(),r(null)},onContextMenu:function(e){e.preventDefault()}}))},K=function(e){var t=e.algoList,n=e.count,r=e.setAlgorithm,o=Object(a.useState)(!1),l=Object(u.a)(o,2),i=l[0],s=l[1];return c.a.createElement("div",{className:"algorithm-dropdown-container",onClick:function(e){e.preventDefault(),s(!i)}},i?c.a.createElement("div",{className:"algorithm-dropdown-item-container"},t.map((function(e){return c.a.createElement("div",{className:"algorithm-dropdown-item",key:e,onClick:function(n){return function(e,t){e.preventDefault(),s(!i),r(t)}(n,t.indexOf(e))}},e)}))):c.a.createElement(c.a.Fragment,null),c.a.createElement("div",{className:"algorithm-dropdown-text-container"},c.a.createElement("div",{className:"algorithm-dropdown-text"}," ",t[n]," "),c.a.createElement("div",{className:"algorithm-dropdown-arrow"},i?c.a.createElement(S,null):c.a.createElement(y,null))))},Q=function(e){var t=[];if(e.length>0){var n=new Set,a=[];for(n.add(e[0].count),a.push(e[0].count);a.length>0;){var c=a[0];a.shift(),t.push(c);var r,o=Object(l.a)(e);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(i.count===c){var u,s=Object(l.a)(i.target);try{for(s.s();!(u=s.n()).done;){var d=u.value;n.has(d)||(n.add(d),a.push(d))}}catch(f){s.e(f)}finally{s.f()}}}}catch(f){o.e(f)}finally{o.f()}}}return t},Z=function e(t,n,a,c,r){if(!1===a.has(n)){a.add(n),c.add(n),r.push(n);var o,i=Object(l.a)(t);try{for(i.s();!(o=i.n()).done;){var u=o.value;if(u.count===n){var s,d=Object(l.a)(u.target);try{for(d.s();!(s=d.n()).done;){var f=s.value;if(!a.has(f)&&e(t,f,a,c,r))return!0;if(c.has(f))return!0}}catch(v){d.e(v)}finally{d.f()}}}}catch(v){i.e(v)}finally{i.f()}}return c.delete(n),!1},$=function(e){var t,n=[],a=new Set,c=new Set,r=Object(l.a)(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(Z(e,o.count,a,c,n))return{errorDetected:!0,result:n}}}catch(i){r.e(i)}finally{r.f()}return{errorDetected:!1,result:n}},_=function(e){var t=[];e.length>0&&function e(t,n,a,c){a.add(c),n.push(c);var r,o=Object(l.a)(t);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(i.count===c){var u,s=Object(l.a)(i.target);try{for(s.s();!(u=s.n()).done;){var d=u.value;a.has(d)||e(t,n,a,d)}}catch(f){s.e(f)}finally{s.f()}}}}catch(f){o.e(f)}finally{o.f()}}(e,t,new Set,e[0].count);return t},ee=function e(t,n,a,c,r,o){var i=function(e,t){for(var n in e)if(e[+n].count-t===0)return+n;return-1}(t,a);c.add(a),r.add(a),0===t[i].target.length&&r.clear();var u,s=Object(l.a)(t[i].target);try{for(s.s();!(u=s.n()).done;){var d=u.value;if(!0===r.has(d))return!1;if(!1===c.has(d))if(!1===e(t,n,d,c,r,o))return!1}}catch(f){s.e(f)}finally{s.f()}return o.push(a),!0},te=function(e,t){var n=[],a=new Set;for(var c in e){var r=e[+c],o=new Set;if(!1===a.has(r.count))if(!1===ee(e,t,r.count,a,o,n))return n=[]}return n},ne=n(6),ae=n.n(ne),ce=n(9),re=function(){var e=Object(ce.a)(ae.a.mark((function e(t,n,a,c,r,o){var i,u,s,d;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=[],u=Object(l.a)(n);try{for(d=function(){var e=s.value;i.push(new Promise((function(o,l){setTimeout((function(){e.visualize=!0,L(t,a,c,r,J(document)),o(!0)}),1e3*n.findIndex((function(t){return t.count===e.count})))})))},u.s();!(s=u.n()).done;)d()}catch(f){u.e(f)}finally{u.f()}Promise.all(i).then((function(){var e,t=Object(l.a)(n);try{for(t.s();!(e=t.n()).done;){e.value.visualize=!1}}catch(f){t.e(f)}finally{t.f()}o(!0)}));case 4:case"end":return e.stop()}}),e)})));return function(t,n,a,c,r,o){return e.apply(this,arguments)}}(),oe=function(e,t,n,a,c){if(a&&c){c.clearRect(0,0,a.width,a.height);var r,o=a.getBoundingClientRect(),i=Object(l.a)(e);try{for(i.s();!(r=i.n()).done;){var u=r.value;o.right===u.windowX&&o.bottom===u.windowY||(u.clientX=u.clientX*(o.right/u.windowX),u.clientY=u.clientY*(o.bottom/u.windowY),u.canvasX=u.clientX-o.left,u.canvasY=u.clientY-o.top,u.windowX=o.right,u.windowY=o.bottom)}}catch(s){i.e(s)}finally{i.f()}return L(e,n,a,c,J(document)),new Promise((function(r){return re(e,t,n,a,c,r)}))}return new Promise((function(e,t){t(0)}))},le=(n(17),function(){var e=Object(a.useContext)(s),t=e.nodeList,n=e.edgeList,r=e.adjacencyList,o=Object(a.useContext)(f),i=o.canvas,d=o.context,v=Object(a.useContext)(m).toggleSnackbar,g=Object(a.useState)(0),h=Object(u.a)(g,2),b=h[0],p=h[1];return c.a.createElement("div",{className:"visualize-container"},c.a.createElement(K,{algoList:["Topological Sort","Breadth First Traversal","Depth First Traversal","Graph Cycle Detection"],count:b,setAlgorithm:p}),c.a.createElement("div",{className:"visualize-button",onClick:function(e){var a=!1;e.preventDefault();var c=[];if(0===b)c=te(r,t);else if(1===b)c=Q(r);else if(2===b)c=_(r);else if(3===b){var o=$(r);a=o.errorDetected,c=o.result}var u,s=[],f=Object(l.a)(c);try{for(f.s();!(u=f.n()).done;){var m,g=u.value,h=Object(l.a)(t);try{for(h.s();!(m=h.n()).done;){var p=m.value;p.count===g&&s.push(p)}}catch(O){h.e(O)}finally{h.f()}}}catch(O){f.e(O)}finally{f.f()}console.log(n),oe(t,s,n,i,d).then((function(e){e&&3===b&&v(a?"Cycle Detected":"No Cycle Detected")}))}},"Visualize"))});function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var se=c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),de=c.a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),fe=function(e){var t=e.svgRef,n=e.title,a=ue(e,["svgRef","title"]);return c.a.createElement("svg",ie({viewBox:"0 0 24 24",fill:"black",width:"24px",height:"24px",ref:t},a),n?c.a.createElement("title",null,n):null,se,de)},ve=c.a.forwardRef((function(e,t){return c.a.createElement(fe,ie({svgRef:t},e))})),me=(n.p,n(18),function(){var e=Object(a.useContext)(m),t=e.open,n=e.message,r=e.toggleSnackbar;return c.a.createElement("div",null,t?c.a.createElement("div",{className:"snackbar-container"},c.a.createElement("p",{className:"snackbar-text"},n),c.a.createElement(ve,{onClick:function(){return r()},className:"snackbar-close-icon"})):c.a.createElement(c.a.Fragment,null))}),ge=(n(19),n(20),function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d,null,c.a.createElement(v,null,c.a.createElement(g,null,c.a.createElement(R,null),c.a.createElement("div",{className:"container"},c.a.createElement(q,null),c.a.createElement(le,null),c.a.createElement(me,null))))))});n(21);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ge,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.c7e89917.chunk.js.map