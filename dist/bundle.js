!function(t){
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(i,t,s)},h=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,g=f.trustedTypes,m=g?g.emptyScript:"",v=f.reactiveElementPolyfillSupport,x=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!a(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const n=s?.call(this);o.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s,this[s]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??w)(s?o:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[x("elementProperties")]=new Map,$[x("finalized")]=new Map,v?.({ReactiveElement:$}),(f.reactiveElementVersions??=[]).push("2.0.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const S=globalThis,k=S.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,M="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,E="?"+C,_=`<${E}>`,T=document,D=()=>T.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,F=Array.isArray,j=t=>F(t)||"function"==typeof t?.[Symbol.iterator],O="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,R=/>/g,N=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,L=/"/g,I=/^(?:script|style|textarea|title)$/i,H=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),X=new WeakMap,J=T.createTreeWalker(T,129);function K(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=U;for(let e=0;e<i;e++){const i=t[e];let h,a,l=-1,c=0;for(;c<i.length&&(r.lastIndex=c,a=r.exec(i),null!==a);)c=r.lastIndex,r===U?"!--"===a[1]?r=P:void 0!==a[1]?r=R:void 0!==a[2]?(I.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=N):void 0!==a[3]&&(r=N):r===N?">"===a[0]?(r=o??U,l=-1):void 0===a[1]?l=-2:(l=r.lastIndex-a[2].length,h=a[1],r=void 0===a[3]?N:'"'===a[3]?L:B):r===L||r===B?r=N:r===P||r===R?r=U:(r=N,o=void 0);const d=r===N&&t[e+1].startsWith("/>")?" ":"";n+=r===U?i+_:l>=0?(s.push(h),i.slice(0,l)+M+i.slice(l)+C+d):i+C+(-2===l?e:d)}return[K(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,h=this.parts,[a,l]=Z(t,e);if(this.el=q.createElement(a,i),J.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=J.nextNode())&&h.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(M)){const e=l[n++],i=s.getAttribute(t).split(C),r=/([.?@])?(.*)/.exec(e);h.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?et:"?"===r[1]?it:"@"===r[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(C)&&(h.push({type:6,index:o}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],D()),J.nextNode(),h.push({type:2,index:++o});s.append(t[e],D())}}}else if(8===s.nodeType)if(s.data===E)h.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)h.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,s){if(e===W)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=z(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=G(t,o._$AS(t,e.values),o,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);J.currentNode=s;let o=J.nextNode(),n=0,r=0,h=i[0];for(;void 0!==h;){if(n===h.index){let e;2===h.type?e=new Y(o,o.nextSibling,this,t):1===h.type?e=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(e=new ot(o,this,t)),this._$AV.push(e),h=i[++r]}n!==h?.index&&(o=J.nextNode(),n++)}return J.currentNode=T,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),z(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):j(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&z(this._$AH)?this._$AA.nextSibling.data=t:this.$(T.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=q.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=X.get(t.strings);return void 0===e&&X.set(t.strings,e=new q(t)),e}T(t){F(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Y(this.k(D()),this.k(D()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=G(this,t,e,0),n=!z(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const s=t;let r,h;for(t=o[0],r=0;r<o.length-1;r++)h=G(this,s[i+r],e,r),h===W&&(h=this._$AH[r]),n||=!z(h)||h!==this._$AH[r],h===V?t=V:t!==V&&(t+=(h??"")+o[r+1]),this._$AH[r]=h}n&&!s&&this.O(t)}O(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===V?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class st extends tt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??V)===W)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const nt={j:M,P:C,A:E,C:1,M:Z,L:Q,R:j,V:G,D:Y,I:tt,H:it,N:st,U:et,B:ot},rt=S.litHtmlPolyfillSupport;rt?.(q,Y),(S.litHtmlVersions??=[]).push("3.1.0");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
let ht=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Y(e.insertBefore(D(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};ht._$litElement$=!0,ht.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ht});const at=globalThis.litElementPolyfillSupport;at?.({LitElement:ht}),(globalThis.litElementVersions??=[]).push("4.0.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const lt=2;class ct{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const{D:dt}=nt,pt=()=>document.createComment(""),ut=(t,e,i)=>{const s=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=s.insertBefore(pt(),o),n=s.insertBefore(pt(),o);i=new dt(e,n,t,t.options)}else{const e=i._$AB.nextSibling,n=i._$AM,r=n!==t;if(r){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==n._$AU&&i._$AP(e)}if(e!==o||r){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;s.insertBefore(t,o),t=e}}}return i},ft=(t,e,i=t)=>(t._$AI(e,i),t),gt={},mt=t=>{t._$AP?.(!1,!0);let e=t._$AA;const i=t._$AB.nextSibling;for(;e!==i;){const t=e.nextSibling;e.remove(),e=t}},vt=(t,e,i)=>{const s=new Map;for(let o=e;o<=i;o++)s.set(t[o],o);return s},xt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends ct{constructor(t){if(super(t),t.type!==lt)throw Error("repeat() can only be used in text expressions")}ht(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const o=[],n=[];let r=0;for(const e of t)o[r]=s?s(e,r):r,n[r]=i(e,r),r++;return{values:n,keys:o}}render(t,e,i){return this.ht(t,e,i).values}update(t,[e,i,s]){const o=(t=>t._$AH)(t),{values:n,keys:r}=this.ht(e,i,s);if(!Array.isArray(o))return this.dt=r,n;const h=this.dt??=[],a=[];let l,c,d=0,p=o.length-1,u=0,f=n.length-1;for(;d<=p&&u<=f;)if(null===o[d])d++;else if(null===o[p])p--;else if(h[d]===r[u])a[u]=ft(o[d],n[u]),d++,u++;else if(h[p]===r[f])a[f]=ft(o[p],n[f]),p--,f--;else if(h[d]===r[f])a[f]=ft(o[d],n[f]),ut(t,a[f+1],o[d]),d++,f--;else if(h[p]===r[u])a[u]=ft(o[p],n[u]),ut(t,o[d],o[p]),p--,u++;else if(void 0===l&&(l=vt(r,u,f),c=vt(h,d,p)),l.has(h[d]))if(l.has(h[p])){const e=c.get(r[u]),i=void 0!==e?o[e]:null;if(null===i){const e=ut(t,o[d]);ft(e,n[u]),a[u]=e}else a[u]=ft(i,n[u]),ut(t,o[d],i),o[e]=null;u++}else mt(o[p]),p--;else mt(o[d]),d++;for(;u<=f;){const e=ut(t,a[f+1]);ft(e,n[u]),a[u++]=e}for(;d<=p;){const t=o[d++];null!==t&&mt(t)}return this.dt=r,((t,e=gt)=>{t._$AH=e})(t,a),W}});
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var yt=r`

    .type-container {
        display: flex;
        justify-content: space-between;
    }

    .word-type{
        font-size: 24px;
        font-weight: bold;
    }
    .separator {
        margin-top: 13px;
        border-top: 1px solid #e2e2e2;
        width: calc(100% - 28%); 
    }

    li {
        padding: 5px;
        font-size: 18px;
    }

    .example {
        color: #757575;
        margin: 4px;
        font-size: 18px;
    }

    .alternatives-container {
        display: flex;
        justify-content: space-between;
        gap: 5px;
        /* flex-wrap: wrap; */
    }
    .alternative {
        width: 100%;
        white-space: nowrap;
        color: #8f19e8;
        font-weight: bold;
    }

    .main-container {
        display: flex;
        justify-content: flex-start;
        gap: 25px;    
    }

    #meaning {
        margin-top: 30px;
        color: #757575;
        font-size:20px;
    }


    ul {
        list-style: none
    }

    li::before {
        content: "•"; 
        color: #8f19e8;
        display: inline-block; 
        width: 1.5em;
        margin-left: -1.3em
    }

    p {
        font-size: 20px;
    }

    p:not(.alternative) {
        color: #757575;
    }

`;window.customElements.define("definition-element",class extends ht{static properties={meaning:{type:Object}};constructor(){super(),this.meaning=null}static styles=[yt];render(){return H`

            <div class="definition-container">

                <div class="type-container">
                        <div class="word-type">${this.meaning.partOfSpeech}</div>
                        <div class="separator"></div>
                </div>
                <p id="meaning">Meaning</p>
                <ul>
                    ${this.meaning.definitions.map((t=>H`
                        <li>${t.definition}</li>
                        ${t.example?H`<p class="example">"${t.example}"</p>`:""}
                        `))}
                </ul>   

                ${this.meaning.synonyms.length>0?H`
                    <div class="main-container">
                        <p>Synonyms</p>
                        <div class="alternatives-container">
                            ${this.meaning.synonyms.map(((t,e)=>{if(e<4)return H`<p class="alternative">${t}</p>`}))}
                        </div>
                    </div>
                    `:""}
            
                ${this.meaning.antonyms.length>0?H`
                        <div class="main-container">
                            <p>Antonyms</p>
                            <div class="alternatives-container">
                                ${this.meaning.antonyms.map(((t,e)=>{if(e<4)return H`<p class="alternative">${t}</p>`}))}
                            </div>
                        </div>

                    `:""}


            </div>

        `}});var wt=r`
    .content-container {
        width:100%;
        display:flex;
        justify-content: space-between;
    }
    
    img {
        cursor: pointer;
    }

    h1 {
        margin-bottom: 5px;
        font-size: 64px;
        font-weight: bold;
    }

    #phonetic {
        margin-top: 0px;
        color: #8f19e8;
        font-size: 24px;
    }

`;window.customElements.define("content-element",class extends ht{static styles=[wt];static properties={data:{type:Object}};constructor(){super(),this.data=null}_retrieveResultWithMostMeaningsFromData(t){return t.sort(((t,e)=>{const i=t.meanings.length,s=e.meanings.length;return i<s?1:i>s?-1:0}))[0]}_playPhonetic(){const t=this.shadowRoot.getElementById("myAudio"),e=this.shadowRoot.querySelector("img");t.addEventListener("playing",(()=>{e.src="/assets/images/icon-played.svg"})),t.addEventListener("ended",(()=>{e.src="/assets/images/icon-play.svg"})),t.paused?t.play():t.paused()}render(){const t=this._retrieveResultWithMostMeaningsFromData(this.data),e=this.data.flatMap((t=>t.phonetics)).find((t=>""!==t.audio));return H`
            <div class="content-container">
                <div>
                    <h1>${t.word}</h1>
                    <p id="phonetic">${t.phonetic}</p>
                </div>
                ${e?H`<img @click=${this._playPhonetic} src='/assets/images/icon-play.svg'/><audio src=${e.audio} id="myAudio"></audio>
`:""}
            </div>
            ${xt(t.meanings,(t=>t.partOfSpeach),(t=>H`
                    <definition-element .meaning=${t}></definition-element>
                `))}

            <footer-element .sourceURL=${t.sourceUrls[0]}></footer-element>

        `}});var bt=r`
    .separator {
        /* needs to be adjusted depending on the final font size of the word type */
        margin-top: 13px; 
        border-top: 1px solid #e2e2e2;
        width: 88%;
    }

    .footer-container {
        margin-top: 15px;
        padding-bottom: 35px;
        font-size: 14px;
    }
    
    a {
        text-decoration: none;
        color: grey;
        text-decoration: underline;
    }
`;window.customElements.define("footer-element",class extends ht{static styles=[bt];static properties={sourceURL:{type:String}};constructor(){super(),this.url=""}render(){return H`
            <div class="footer-container">
                <div class="separator"></div>
                <p>Source: <a href=${this.sourceURL}>${this.sourceURL}</a></p>
            </div>

        `}});var $t=r`
   /* The switch - the box around the slider */
   .switch {
        position: relative;
        display: inline-block;
        right: 10px;
        width: 45px;
        height: 20px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #757575;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #A445ED;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #A445ED;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;window.customElements.define("toggle-switch-element",class extends ht{static styles=[$t];handleToggle(){const t=new CustomEvent("toggle-mode",{bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return H`
            <label class="switch">
            <input type="checkbox" @change="${this.handleToggle}">
            <span class="slider round"></span>
        </label>
        `}});var St=r`
    .dropdown {
        border-radius: 10px;
        box-sizing: border-box; 
        position: absolute;
        top: 100%;
        left: 320px;
        width: 150px; 
        background-color: #FFFFFF;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1;
        padding: 10px;
    }

    .option {
        padding: 10px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .option:hover {
        color: #A445ED;
    }

    div {
        font-weight: bold;
        font-size: 18px;
    }

    @media (max-width: 650px) {
        .dropdown {
            border-radius: 10px;
            box-sizing: border-box; 
            position: absolute;
            top: 100%;
            left: 210px;
            width: 150px; 
            background-color: #FFFFFF;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1;
            padding: 10px;
        }
    } 
  
`;customElements.define("font-dropdown-element",class extends ht{static styles=[St];render(){return H`
            <div class="dropdown">
                <div class="option" @click="${()=>this.selectFont("Sans Serif")}">Sans Serif</div>
                <div class="option" @click="${()=>this.selectFont("Serif")}">Serif</div>
                <div class="option" @click="${()=>this.selectFont("Mono")}">Mono</div>
            </div>
        `}selectFont(t){this.dispatchEvent(new CustomEvent("font-selected",{detail:t,composed:!0,bubbling:!0}))}});const kt=r`

    .header-container {
        display: flex;
        justify-content: space-between;
        margin-top: 35px;
        margin-bottom: 35px;
    }

    .logo {
        height: 30px;
        width: 30px;
    }

    .right {
        display: flex;
        align-items: center; 
    }

    .font-text {
        margin-right: 10px;
        font-size: 18px;
        font-weight: bold;
    }

    .arrow {
        height: 15px;
        width: 15px;
        margin-left: 5px;
        cursor: pointer;
    }

    .separator {
        border-right: 1px solid #e2e2e2;
        margin-right: 30px;
        margin-left: 20px;
        height:35px;
    }

    .toggle-switch-container {
        display: flex;
        align-items: center; 
    }

    .moon {
        height: 20px;
        width: 20px;
        margin-left: 10px;
    }  
  
`,At=r`

    .font-text {
        color: black;
    }
  
`,Mt=r`

    .font-text {
        color: white;
    }
  
`;class Ct extends ht{get styles(){return r`
            ${kt}

            ${this.isDarkMode?Mt:At}
        `}static properties={isDropdownVisible:{type:Boolean},fontType:{type:String},isDarkMode:{type:Boolean}};constructor(){super(),this.isDropdownVisible=!1}toggleDropdown(){this.isDropdownVisible=!this.isDropdownVisible}handleFontSelected(){this.isDropdownVisible=!1}render(){return H`

            <style>
                ${this.styles}
            </style>

            <div class="header-container">
                <img class="logo" src='/assets/images/logo.svg'/> 

                <div class="right">
                    <div class="font-text">${this.fontType}</div>
                    <img @click="${this.toggleDropdown}" class="arrow" src='/assets/images/icon-arrow-down.svg'/>  
                    <div class="separator"></div>
                    <div class="toggle-switch-container">
                        <toggle-switch-element></toggle-switch-element>
                        <img class="moon" src='/assets/images/icon-moon.svg'/>  
                    </div>
                    ${this.isDropdownVisible?H`<font-dropdown-element @font-selected="${this.handleFontSelected}"></font-dropdown-element>`:""}
                </div>
            </div>
        `}}window.customElements.define("header-element",Ct);var Et=r`
    input {
        box-sizing: border-box; 
        width: 100%;
        height: 50px;
        border-radius: 10px;
        font-size: 20px;
        border: none;
        padding: 5px 5px 5px 5px;
        background-color: #F4F4F4;
        margin-bottom: 5px;  
        padding: 20px;
        font-family: inherit;
        font-weight: bold;
    }

    input:focus{
        outline: none;
        border: 2px solid #A445ED
    }

    img {
        width: 20px;
        height: 20px;
        cursor: pointer;
        position: absolute;
        top: 85px;
        right: 20px;
        transition: transform 0.2s;
    }

    img:hover {
        transform: scale(1.2);
    }
    
    .error-message {
        color: #FF5252;
        position: relative;
        top:-15px; 
    }
`;class _t extends ht{static styles=[Et];static properties={searchTerm:{type:String},isEmptySearchTerm:{type:Boolean}};constructor(){super(),this.searchTerm="",this.isEmptySearchTerm=!1}_handleClick(){this.searchTerm?(this.dispatchEvent(new CustomEvent("searchClick",{detail:this.searchTerm})),this.isEmptySearchTerm=!1):this.isEmptySearchTerm=!0}_handleKeyDown(t){"Enter"===t.key&&this.searchTerm?(this.dispatchEvent(new CustomEvent("pressed",{detail:this.searchTerm})),this.isEmptySearchTerm=!1):this.searchTerm||(this.isEmptySearchTerm=!0)}_handleInputChange(t){this.searchTerm=t.target.value,this.isEmptySearchTerm&&this.searchTerm&&(this.isEmptySearchTerm=!1)}render(){return H`
            <input
             .value= ${this.searchTerm}
             placeholder="Search for any word..."
             @input=${this._handleInputChange}
             @keydown=${this._handleKeyDown}
             type="text"
            >
            ${this.isEmptySearchTerm?H`<div class="error-message" aria-live="assertive">Whoops, can't be empty</div>`:""}
            <img @click=${this._handleClick} src='/assets/images/icon-search.svg'/>
        `}}window.customElements.define("searchbar-component",_t);var Tt=r`
    .error-container {
            width:100%;
            display:flex;
            justify-content: space-between;
            flex-direction: column;
            text-align: center;
        }

    .emoji {
        font-size: 60px;
    }
`;customElements.define("error-element",class extends ht{static styles=[Tt];static properties={error:{type:Object}};constructor(){super(),this.error={}}render(){return H`
            <div class="error-container">
                <div class="emoji">&#128533;</div>
                <h1>${this.error.title}</h1>
                <p>${this.error.message}${this.error.resolution}</p>
            </div>
        `}});var Dt=r`

    .container {
        margin: 0 auto;
        width: 100%;
        max-width: 600px;
        height: 45px;
        position:relative;
    }
        
    @media (max-width: 650px) {
        .container {
            width: 350px;
            margin: 0 auto;
            max-width: 500px;
            height: 45px;
            position: relative;
        }
    } 
  
`;class zt extends ht{static styles=[Dt];static properties={data:{type:Object},error:{type:Object},fontType:{type:String},isDarkMode:{type:Boolean}};constructor(){super(),this.data=null,this.error=null}async handleSearch(t){const e=t.detail;try{const t=await async function(t){const e="https://api.dictionaryapi.dev/api/v2/entries/en/"+t,i=await fetch(e);if(!i.ok){const t=await i.json();throw{status:i.status,message:"HTTP error",details:t}}return i.json()}(e);this.data=t,this.error=null}catch(t){this.data=null,this.error=t.details}}async handleEnter(t){await this.handleSearch(t)}render(){return console.log("Main"+this.isDarkMode),this.error?H`
        <div class="container">
          <header-element .isDarkMode=${this.isDarkMode} .fontType = ${this.fontType}></header-element>
          <searchbar-component .isDarkMode=${this.isDarkMode} @pressed=${this.handleEnter} @searchClick=${this.handleSearch}></searchbar-component>
          <error-element .isDarkMode=${this.isDarkMode} .error=${this.error}></error-element>
        </div>
      `:this.data?H`
        <div class="container">
          <header-element .isDarkMode=${this.isDarkMode} .fontType = ${this.fontType}></header-element>
          <searchbar-component .isDarkMode=${this.isDarkMode} @pressed=${this.handleEnter} @searchClick=${this.handleSearch}></searchbar-component>
          <content-element .isDarkMode=${this.isDarkMode} .data=${this.data}></content-element>
        </div>
      `:H`
        <div class="container">
          <header-element .isDarkMode=${this.isDarkMode} .fontType = ${this.fontType}></header-element>
          <searchbar-component .isDarkMode=${this.isDarkMode} @pressed=${this.handleEnter} @searchClick=${this.handleSearch}></searchbar-component>
        </div>
      `}}window.customElements.define("main-element",zt);class Ft extends ht{static properties={fontType:{type:String},isDarkMode:{type:Boolean}};constructor(){super(),this.fontType="Sans Serif",this.isDarkMode=!1,this.addEventListener("font-selected",this.handleSelectedFont),this.addEventListener("toggle-mode",this.handleToggleMode)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("toggle-mode",this.handleToggleMode)}handleToggleMode(){this.isDarkMode=!this.isDarkMode,this.isDarkMode?document.body.style.backgroundColor="black":document.body.style.backgroundColor="white"}handleSelectedFont(t){this.fontType=t.detail}render(){return console.log("AppContainer"+this.isDarkMode),H`
      <style>
        :host {
          font-family: ${this.fontType.toLowerCase().replace(" ","-")+"-custom"};
        }
      </style>
      <main-element .isDarkMode=${this.isDarkMode} .fontType = ${this.fontType}></main-element>
    `}}window.customElements.define("app-container",Ft),t.AppContainer=Ft}({});
//# sourceMappingURL=bundle.js.map
