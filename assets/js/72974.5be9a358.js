"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[72974,29514],{12004:function(e,t,n){n.r(t);var a=n(67294),r=n(36247),o=n(54416);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},15502:function(e,t,n){var a=n(67294).createContext(void 0);t.Z=a},26266:function(e,t,n){var a=n(67294),r=n(15502);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},32577:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(22122),r=n(19756),o=n(67294),l=n(86010),i=n(51384),s=n(19257),c=n(51402),u=n(45697),m=n.n(u),d=n(34455),p=[{title:"Youtube",imageUrl:"/img/youtube.svg",url:"https://www.youtube.com/c/iotafoundation",backgroundColor:"var(--ifm-color-gray-900)"},{title:"GitHub",imageUrl:"/img/github.svg",url:"https://www.github.com/iotaledger/",backgroundColor:"#2C3850"},{title:"Discord",imageUrl:"/img/discord.svg",url:"https://discord.iota.org/",backgroundColor:"#4B576F"},{title:"Twitter",imageUrl:"/img/twitter.svg",url:"https://www.twitter.com/iota/",backgroundColor:"#6A768E"},{title:"Reddit",imageUrl:"/img/reddit.svg",url:"https://www.reddit.com/r/iota/",backgroundColor:"#7D89A1"},{title:"Linkedin",imageUrl:"/img/linkedin.svg",url:"https://www.linkedin.com/company/iotafoundation/",backgroundColor:"#8995AD"},{title:"Instagram",imageUrl:"/img/instagram.svg",url:"https://www.instagram.com/iotafoundation/",backgroundColor:"#99A5BD"},{title:"Facebook",imageUrl:"/img/facebook.svg",url:"https://www.facebook.com/TheIOTAFoundation/",backgroundColor:"#BAC6DE"}];function f(e){var t=e.title,n=e.imageUrl,a=e.url,r=e.backgroundColor;return o.createElement("a",{className:"social__link padding-horiz--sm padding-vert--md",style:{backgroundColor:r},href:a},o.createElement("img",{alt:t,className:"social__image",src:(0,c.Z)(n)}),o.createElement("div",{className:"social__title"},t))}f.propTypes={title:m().string,imageUrl:m().string,url:m().string,backgroundColor:m().string};var g=function(){return o.createElement("div",{className:"social"},p.map((function(e,t){return o.createElement(f,(0,a.Z)({key:t},e))})))},v=["to","href","label","prependBaseUrlToHref"];function h(e){var t=e.to,n=e.href,l=e.label,s=e.prependBaseUrlToHref,u=(0,r.Z)(e,v),m=(0,c.Z)(t),d=(0,c.Z)(n,{forcePrependBaseUrl:!0});return o.createElement(i.Z,(0,a.Z)({className:"footer__link-item"},n?{href:s?d:n}:{to:m},u),l)}h.propTypes={to:m().string,href:m().string,label:m().string,prependBaseUrlToHref:m().bool};var _=function(e){var t=e.sources,n=e.alt;return o.createElement(d.Z,{className:"footer__logo",alt:n,sources:t})};_.propTypes={sources:m().shape({light:m().string,dark:m().string}),alt:m().string};var b=function(){var e=(0,s.LU)().footer,t=e||{},n=t.copyright,a=t.links,r=void 0===a?[]:a,u=t.logo,m=void 0===u?{}:u,d={light:(0,c.Z)(m.src),dark:(0,c.Z)(m.srcDark||m.src)};return e?o.createElement("footer",{className:(0,l.Z)("footer","padding--none",{"footer--dark":"dark"===e.style})},o.createElement("div",{className:"container"},r&&r.length>0&&o.createElement("div",{className:"row footer__links padding-vert--xl"},r.map((function(e,t){return o.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.createElement("li",{key:e.href||e.to,className:"footer__item"},o.createElement(h,e))}))):null)}))),(m||n)&&o.createElement("div",{className:"footer__bottom padding-bottom--xl"},m&&(m.src||m.srcDark)&&o.createElement("div",null,m.href?o.createElement(i.Z,{href:m.href},o.createElement(_,{alt:m.alt,sources:d})):o.createElement(_,{alt:m.alt,sources:d})),n?o.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null)),o.createElement(g,null)):null}},78358:function(e,t,n){n.d(t,{O:function(){return h}});var a=n(22122),r=n(19756),o=n(67294),l=n(86010),i=n(45697),s=n.n(i),c=n(51384),u=n(51402),m=n(78168),d=n(71699),p=["activeBasePath","activeBaseRegex","to","href","label","sublabel","icon","activeClassName","prependBaseUrlToHref"],f=["className","isDropdownItem"],g=["className"],v=["mobile","to","label"];function h(e){var t=e.activeBasePath,n=e.activeBaseRegex,l=e.to,i=e.href,s=e.label,f=e.sublabel,g=e.icon,v=e.activeClassName,h=void 0===v?"navbar__link--active":v,_=e.prependBaseUrlToHref,b=(0,r.Z)(e,p),k=(0,u.Z)(l),E=(0,u.Z)(t),w=(0,u.Z)(i,{forcePrependBaseUrl:!0}),N=s&&i&&!(0,d.Z)(i),y="dropdown__link--active"===h;return o.createElement(c.Z,(0,a.Z)({},i?{href:_?w:i}:Object.assign({isNavLink:!0,activeClassName:h,to:k},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(E)}}:null),b),o.createElement("div",{className:"link"},g&&o.createElement("div",{className:"link__icon"},g),o.createElement("div",{className:"link__body"},o.createElement("div",{className:"link__label"},N?o.createElement("span",null,s,o.createElement(m.Z,y&&{width:12,height:12})):s),f&&o.createElement("div",{className:"link__sublabel"},f))))}function _(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,s=(0,r.Z)(e,f),c=o.createElement(h,(0,a.Z)({className:(0,l.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},s));return i?o.createElement("li",null,c):c}function b(e){var t=e.className,n=(0,r.Z)(e,g);return delete n.isDropdownItem,o.createElement("li",{className:"menu__list-item"},o.createElement(h,(0,a.Z)({className:(0,l.Z)("menu__link",t)},n)))}function k(e){var t=e.mobile,n=void 0!==t&&t,l=e.to,i=e.label,s=(0,r.Z)(e,v);if(delete s.position,"category-header"===l){return o.createElement("li",{style:{fontSize:"10px",color:"var(--ifm-color-emphasis-600)",paddingTop:"10px"}},i)}var c=n?b:_;return o.createElement(c,(0,a.Z)({to:l,label:i},s))}h.propTypes={activeBasePath:s().string,activeBaseRegex:s().string,to:s().string,href:s().string,label:s().string,sublabel:s().string,icon:s().string,activeClassName:s().string,prependBaseUrlToHref:s().bool},h.defaultProps={activeClassName:"navbar__link--active"},_.propTypes={className:s().string,isDropdownItem:s().bool},_.defaultProps={isDropdownItem:!1},b.propTypes={className:s().string},k.propTypes={mobile:s().bool,to:s().string,label:s().string},k.defaultProps={mobile:!1},t.Z=k},61142:function(e,t,n){var a=n(22122),r=n(19756),o=n(67294),l=n(86010),i=n(45697),s=n.n(i),c=n(19257),u=n(78358),m=n(52807),d=["items","position","className"],p=["items","className"],f=["mobile"];function g(e,t){return!!(0,c.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath)))}function v(e){var t,n=e.items,i=e.position,s=e.className,p=(0,r.Z)(e,d),f=(0,o.useRef)(null),v=(0,o.useRef)(null),h=(0,o.useState)(!1),_=h[0],b=h[1],k=function(e,t,n){var a=t.filter((function(e){return g(e,n)}));return a.length?Object.assign({},a[0],{label:e.label+" > "+a[0].label}):e}(p,n,(0,c.be)());return(0,o.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),o.createElement("div",{ref:f,className:(0,l.Z)("dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":_})},o.createElement(u.O,(0,a.Z)({className:(0,l.Z)("navbar__item navbar__link",s)},k,{onClick:p.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!_))}}),null!=(t=p.children)?t:p.label),o.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(m.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var a=f.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,i=e.className,s=(0,r.Z)(e,p);delete s.position;var d=(0,c.be)(),f=function(e,t){return e.some((function(e){return g(e,t)}))}(n,d),v=(0,c.uR)({initialState:function(){return!f}}),h=v.collapsed,_=v.toggleCollapsed,b=v.setCollapsed;return(0,o.useEffect)((function(){f&&b(!f)}),[d,f]),o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":h})},o.createElement(u.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",i)},s,{onClick:function(e){e.preventDefault(),_()}}),null!=(t=s.children)?t:s.label),o.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},n.map((function(e,t){return o.createElement(m.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:s.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function _(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,f);delete a.isDropdownItem;var l=n?h:v;return o.createElement(l,a)}v.propTypes=Object.assign({items:s().array,position:s().string,className:s().string},u.O.propTypes),h.propTypes=Object.assign({items:s().array,className:s().string},u.O.propTypes),_.propTypes={mobile:s().bool},_.defaultProps={mobile:!1},t.Z=_},52807:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(22122),r=n(19756),o=n(67294),l=n(45697),i=n.n(l),s=n(78358),c=n(61142),u=n(86010),m=n(19257),d=["items","label","className"],p=["className","to","href","label"],f=["items_","layout","position","className"],g=["items_","className"],v=["mobile"];function h(e,t){return e.some((function(e){e.items?h(e.items,t):function(e,t){!!(0,m.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||(!e.activeBasePath||t.startsWith(e.activeBasePath))}(e,t)}))}function _(e){var t,n=e.items,a=e.label,o=e.className,l=(0,r.Z)(e,d),i={items:[],index:0};n?(a&&i.items.push({label:a,className:o}),(t=i.items).push.apply(t,n)):i.items.push(Object.assign({label:a,className:o},l));return i}function b(e){var t=e.className,n=e.to,l=e.href,i=e.label,c=(0,r.Z)(e,p);if(n||l)return o.createElement(s.O,(0,a.Z)({className:(0,u.Z)("dropdown__link",t),activeClassName:"dropdown__link--active",to:n,href:l,label:i},c));if(i)return o.createElement("div",{className:"dropdown__label"},i);throw"Mega dropdown item must be a link or a category header."}function k(e){var t,n=e.items_,l=e.layout,i=e.position,c=e.className,d=(0,r.Z)(e,f),p=h(n,(0,m.be)()),g=(0,o.useRef)(null),v=(0,o.useState)(!1),k=v[0],E=v[1],w=n.map(_),N=l.length,y=Math.max.apply(Math,l.map((function(e){return e.split(/\s+/).length}))),Z=[];l.forEach((function(e,t){e.split(/\s+/).forEach((function(e,n){e&&"."!==e&&(Z[t+n*N]=e)}))}));for(var C=Z.map((function(e){var t,n=w[e];if(n)return null!=(t=n.items[n.index++])?t:null})),T=[],D=null,x=0;x<N;x++){for(var B=[],U=0;U<y;U++){var I=C[x+U*N];B.push(I),I&&(D=I)}T.push(B)}return D.onKeyDown=function(e){"Tab"===e.key&&E(!1)},(0,o.useEffect)((function(){var e=function(e){g.current&&!g.current.contains(e.target)&&E(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[g]),o.createElement(o.Fragment,null,o.createElement("div",{ref:g,className:(0,u.Z)("dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":k}),onMouseEnter:function(){return E(!0)},onMouseLeave:function(){return E(!1)}},o.createElement(s.O,(0,a.Z)({className:(0,u.Z)("navbar__item navbar__link",c,{"navbar__link--active":p})},d,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),E(!k))}}),null!=(t=d.children)?t:d.label)),o.createElement("div",{className:(0,u.Z)("dropdown__container",{"dropdown__container--show":k}),onMouseEnter:function(){return E(!0)},onMouseLeave:function(){return E(!1)}},o.createElement("div",{className:"dropdown__menu dropdown__menu--mega"},T.map((function(e,t){return o.createElement("div",{className:"row row--no-gutters dropdown__row",key:t},e.map((function(e,t){return o.createElement("div",{className:"col margin-horiz--xs dropdown__col",key:t},e?o.createElement(b,e):null)})))})))))}function E(e){var t,n=e.items_,l=e.className,i=(0,r.Z)(e,g);delete i.position,delete i.layout;var c=(0,m.be)(),d=h(n,c),p=(0,m.uR)({initialState:function(){return!d}}),f=p.collapsed,v=p.toggleCollapsed,_=p.setCollapsed;return(0,o.useEffect)((function(){d&&_(!d)}),[c,d]),o.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":f})},o.createElement(s.O,(0,a.Z)({role:"button",className:(0,u.Z)("menu__link menu__link--sublist",l)},i,{onClick:function(e){e.preventDefault(),v()}}),null!=(t=i.children)?t:i.label),o.createElement(m.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},n.map((function(e,t){return o.createElement(x,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:i.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function w(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,v),l=n?E:k;return o.createElement(l,a)}b.propTypes={className:i().string,to:i().string,href:i().string,label:i().string},k.propTypes=Object.assign({items_:i().array,layout:i().arrayOf(i().string),position:i().string,className:i().string},s.O.propTypes),E.propTypes=Object.assign({items_:i().array,className:i().string},s.O.propTypes),w.propTypes={mobile:i().bool},w.defaultProps={mobile:!1};var N=w,y=n(36508),Z=n(62437),C=["type","items","layout"],T={default:function(){return s.Z},localeDropdown:function(){return y.Z},search:function(){return Z.Z},dropdown:function(){return c.Z},megaDropdown:function(){return N},docsVersion:function(){return n(39693).Z},docsVersionDropdown:function(){return n(74493).Z},doc:function(){return n(36673).Z}};function D(e){var t=e.type,n=e.items,l=e.layout,i=(0,r.Z)(e,C),s=function(e){var t=T[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t,n){return n?"megaDropdown":e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n,void 0!==l));return o.createElement(s,(0,a.Z)({items:n,layout:l},i))}D.propTypes={type:i().string,items:i().array,layout:i().arrayOf(i().string)};var x=D},5086:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(22122),r=n(67294),o=n(45697),l=n.n(o),i=n(19257),s=n(5730),c=n(86010),u=(0,r.memo)((function(e){var t=e.className,n=e.styles,a=e.icons,o=e.checked,l=e.disabled,i=e.onChange,s=(0,r.useState)(o),u=s[0],m=s[1],d=(0,r.useState)(!1),p=d[0],f=d[1],g=(0,r.useRef)(null);return r.createElement("div",{className:(0,c.Z)("toggle",t,{"toggle--checked":u,"toggle--focused":p,"toggle--disabled":l}),role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=g.current)?void 0:e.click()}},r.createElement("div",{className:"toggle__icon toggle__icon--unchecked",style:n.unchecked},a.unchecked),r.createElement("div",{className:"toggle__icon toggle__icon--checked",style:n.checked},a.checked),r.createElement("input",{ref:g,checked:u,type:"checkbox",className:"toggle__screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onClick:function(){return m(!u)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=g.current)||t.click())}}))}));function m(e){var t=(0,i.LU)().colorMode.switchConfig,n=t.darkIcon,o=t.darkIconStyle,l=t.lightIcon,c=t.lightIconStyle,m=(0,s.Z)();return r.createElement(u,(0,a.Z)({disabled:!m,styles:{unchecked:c,checked:o},icons:{unchecked:l,checked:n}},e))}u.displayName="ToggleMemo",u.propTypes={className:l().string,styles:l().shape({unchecked:l().any,checked:l().any}),icons:l().shape({unchecked:l().string,checked:l().string}),checked:l().bool,disabled:l().bool,onChange:l().func}}}]);