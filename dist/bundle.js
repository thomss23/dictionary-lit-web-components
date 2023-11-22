/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new o(i,t,s)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:h,defineProperty:a,getOwnPropertyDescriptor:l,getOwnPropertyNames:c,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,g=f?f.emptyScript:"",m=u.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},x=(t,e)=>!h(t,e),w={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&a(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const n=i?.call(this);o.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...c(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{if(e)s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),o=t.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i,this[i]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??x)(i?o:this[t],e))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[v("elementProperties")]=new Map,b[v("finalized")]=new Map,m?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,S=$.trustedTypes,k=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",M=`lit$${(Math.random()+"").slice(9)}$`,C="?"+M,E=`<${C}>`,_=document,T=()=>_.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,j=t=>z(t)||"function"==typeof t?.[Symbol.iterator],O="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,F=/>/g,R=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,B=/"/g,L=/^(?:script|style|textarea|title)$/i,H=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),I=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,X=_.createTreeWalker(_,129);function J(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const K=(t,e)=>{const s=t.length-1,i=[];let o,n=2===e?"<svg>":"",r=U;for(let e=0;e<s;e++){const s=t[e];let h,a,l=-1,c=0;for(;c<s.length&&(r.lastIndex=c,a=r.exec(s),null!==a);)c=r.lastIndex,r===U?"!--"===a[1]?r=P:void 0!==a[1]?r=F:void 0!==a[2]?(L.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=R):void 0!==a[3]&&(r=R):r===R?">"===a[0]?(r=o??U,l=-1):void 0===a[1]?l=-2:(l=r.lastIndex-a[2].length,h=a[1],r=void 0===a[3]?R:'"'===a[3]?B:N):r===B||r===N?r=R:r===P||r===F?r=U:(r=R,o=void 0);const d=r===R&&t[e+1].startsWith("/>")?" ":"";n+=r===U?s+E:l>=0?(i.push(h),s.slice(0,l)+A+s.slice(l)+M+d):s+M+(-2===l?e:d)}return[J(t,n+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class Z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const r=t.length-1,h=this.parts,[a,l]=K(t,e);if(this.el=Z.createElement(a,s),X.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=X.nextNode())&&h.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(A)){const e=l[n++],s=i.getAttribute(t).split(M),r=/([.?@])?(.*)/.exec(e);h.push({type:1,index:o,name:r[2],strings:s,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?st:Y}),i.removeAttribute(t)}else t.startsWith(M)&&(h.push({type:6,index:o}),i.removeAttribute(t));if(L.test(i.tagName)){const t=i.textContent.split(M),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),X.nextNode(),h.push({type:2,index:++o});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===C)h.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(M,t+1));)h.push({type:7,index:o}),t+=M.length-1}o++}}static createElement(t,e){const s=_.createElement("template");return s.innerHTML=t,s}}function q(t,e,s=t,i){if(e===I)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const n=D(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=q(t,o._$AS(t,e.values),o,i)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??_).importNode(e,!0);X.currentNode=i;let o=X.nextNode(),n=0,r=0,h=s[0];for(;void 0!==h;){if(n===h.index){let e;2===h.type?e=new Q(o,o.nextSibling,this,t):1===h.type?e=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(e=new it(o,this,t)),this._$AV.push(e),h=s[++r]}n!==h?.index&&(o=X.nextNode(),n++)}return X.currentNode=_,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),D(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):j(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==W&&D(this._$AH)?this._$AA.nextSibling.data=t:this.$(_.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Z.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new G(i,this),s=t.u(this.options);t.p(e),this.$(s),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new Z(t)),e}T(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new Q(this.k(T()),this.k(T()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(void 0===o)t=q(this,t,e,0),n=!D(t)||t!==this._$AH&&t!==I,n&&(this._$AH=t);else{const i=t;let r,h;for(t=o[0],r=0;r<o.length-1;r++)h=q(this,i[s+r],e,r),h===I&&(h=this._$AH[r]),n||=!D(h)||h!==this._$AH[r],h===W?t=W:t!==W&&(t+=(h??"")+o[r+1]),this._$AH[r]=h}n&&!i&&this.O(t)}O(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===W?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class st extends Y{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=q(this,t,e,0)??W)===I)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const ot={j:A,P:M,A:C,C:1,M:K,L:G,R:j,V:q,D:Q,I:Y,H:et,N:st,U:tt,B:it},nt=$.litHtmlPolyfillSupport;nt?.(Z,Q),($.litHtmlVersions??=[]).push("3.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let rt=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new Q(e.insertBefore(T(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const ht=globalThis.litElementPolyfillSupport;ht?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at=2;class lt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:ct}=ot,dt=()=>document.createComment(""),pt=(t,e,s)=>{const i=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===s){const e=i.insertBefore(dt(),o),n=i.insertBefore(dt(),o);s=new ct(e,n,t,t.options)}else{const e=s._$AB.nextSibling,n=s._$AM,r=n!==t;if(r){let e;s._$AQ?.(t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==n._$AU&&s._$AP(e)}if(e!==o||r){let t=s._$AA;for(;t!==e;){const e=t.nextSibling;i.insertBefore(t,o),t=e}}}return s},ut=(t,e,s=t)=>(t._$AI(e,s),t),ft={},gt=t=>{t._$AP?.(!1,!0);let e=t._$AA;const s=t._$AB.nextSibling;for(;e!==s;){const t=e.nextSibling;e.remove(),e=t}},mt=(t,e,s)=>{const i=new Map;for(let o=e;o<=s;o++)i.set(t[o],o);return i},vt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends lt{constructor(t){if(super(t),t.type!==at)throw Error("repeat() can only be used in text expressions")}ht(t,e,s){let i;void 0===s?s=e:void 0!==e&&(i=e);const o=[],n=[];let r=0;for(const e of t)o[r]=i?i(e,r):r,n[r]=s(e,r),r++;return{values:n,keys:o}}render(t,e,s){return this.ht(t,e,s).values}update(t,[e,s,i]){const o=(t=>t._$AH)(t),{values:n,keys:r}=this.ht(e,s,i);if(!Array.isArray(o))return this.dt=r,n;const h=this.dt??=[],a=[];let l,c,d=0,p=o.length-1,u=0,f=n.length-1;for(;d<=p&&u<=f;)if(null===o[d])d++;else if(null===o[p])p--;else if(h[d]===r[u])a[u]=ut(o[d],n[u]),d++,u++;else if(h[p]===r[f])a[f]=ut(o[p],n[f]),p--,f--;else if(h[d]===r[f])a[f]=ut(o[d],n[f]),pt(t,a[f+1],o[d]),d++,f--;else if(h[p]===r[u])a[u]=ut(o[p],n[u]),pt(t,o[d],o[p]),p--,u++;else if(void 0===l&&(l=mt(r,u,f),c=mt(h,d,p)),l.has(h[d]))if(l.has(h[p])){const e=c.get(r[u]),s=void 0!==e?o[e]:null;if(null===s){const e=pt(t,o[d]);ut(e,n[u]),a[u]=e}else a[u]=ut(s,n[u]),pt(t,o[d],s),o[e]=null;u++}else gt(o[p]),p--;else gt(o[d]),d++;for(;u<=f;){const e=pt(t,a[f+1]);ut(e,n[u]),a[u++]=e}for(;d<=p;){const t=o[d++];null!==t&&gt(t)}return this.dt=r,((t,e=ft)=>{t._$AH=e})(t,a),I}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yt=n`

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

`;window.customElements.define("definition-element",class extends rt{static properties={meaning:{type:Object}};constructor(){super(),this.meaning=null}static styles=[yt];render(){return H`

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

        `}});var xt=n`
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

`;window.customElements.define("content-element",class extends rt{static styles=[xt];static properties={data:{type:Object}};constructor(){super(),this.data=null}_retrieveResultWithMostMeaningsFromData(t){return t.sort(((t,e)=>{const s=t.meanings.length,i=e.meanings.length;return s<i?1:s>i?-1:0}))[0]}_playPhonetic(){const t=this.shadowRoot.getElementById("myAudio"),e=this.shadowRoot.querySelector("img");t.addEventListener("playing",(()=>{e.src="/assets/images/icon-played.svg"})),t.addEventListener("ended",(()=>{e.src="/assets/images/icon-play.svg"})),t.paused?t.play():t.paused()}render(){const t=this._retrieveResultWithMostMeaningsFromData(this.data),e=this.data.flatMap((t=>t.phonetics)).find((t=>""!==t.audio));return H`
            <div class="content-container">
                <div>
                    <h1>${t.word}</h1>
                    <p id="phonetic">${t.phonetic}</p>
                </div>
                ${e?H`<img @click=${this._playPhonetic} src='/assets/images/icon-play.svg'/><audio src=${e.audio} id="myAudio"></audio>
`:""}
            </div>
            ${vt(t.meanings,(t=>t.partOfSpeach),(t=>H`
                    <definition-element .meaning=${t}></definition-element>
                `))}

            <footer-element .sourceURL=${t.sourceUrls[0]}></footer-element>

        `}});var wt=n`
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
`;window.customElements.define("footer-element",class extends rt{static styles=[wt];static properties={sourceURL:{type:String}};constructor(){super(),this.url=""}render(){return H`
            <div class="footer-container">
                <div class="separator"></div>
                <p>Source: <a href=${this.sourceURL}>${this.sourceURL}</a></p>
            </div>

        `}});var bt=n`
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
`;window.customElements.define("toggle-switch-element",class extends rt{static styles=[bt];handleToggle(){const t=new CustomEvent("toggle-mode",{bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return H`
            <label class="switch">
            <input type="checkbox" @change="${this.handleToggle}">
            <span class="slider round"></span>
        </label>
        `}});var $t=n`
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
`;customElements.define("font-dropdown-element",class extends rt{static styles=[$t];render(){return H`
            <div class="dropdown">
                <div class="option" @click="${()=>this.selectFont("Sans Serif")}">Sans Serif</div>
                <div class="option" @click="${()=>this.selectFont("Serif")}">Serif</div>
                <div class="option" @click="${()=>this.selectFont("Mono")}">Mono</div>
            </div>
        `}selectFont(t){this.dispatchEvent(new CustomEvent("font-selected",{detail:t,composed:!0,bubbling:!0}))}});const St=n`

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
  
`,kt=n`

    .font-text {
        color: black;
    }
  
`,At=n`

    .font-text {
        color: white;
    }
  
`;class Mt extends rt{get styles(){return n`
            ${St}

            ${this.isDarkMode?At:kt}
        `}static properties={isDropdownVisible:{type:Boolean},fontType:{type:String},isDarkMode:{type:Boolean}};constructor(){super(),this.isDropdownVisible=!1}toggleDropdown(){this.isDropdownVisible=!this.isDropdownVisible}handleFontSelected(){this.isDropdownVisible=!1}render(){return console.log("Header: "+this.isDarkMode),H`

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
        `}}window.customElements.define("header-element",Mt);var Ct=n`
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
`;class Et extends rt{static styles=[Ct];static properties={searchTerm:{type:String},isEmptySearchTerm:{type:Boolean}};constructor(){super(),this.searchTerm="",this.isEmptySearchTerm=!1}_handleClick(){this.searchTerm?(this.dispatchEvent(new CustomEvent("searchClick",{detail:this.searchTerm})),this.isEmptySearchTerm=!1):this.isEmptySearchTerm=!0}_handleKeyDown(t){"Enter"===t.key&&this.searchTerm?(this.dispatchEvent(new CustomEvent("pressed",{detail:this.searchTerm})),this.isEmptySearchTerm=!1):this.searchTerm||(this.isEmptySearchTerm=!0)}_handleInputChange(t){this.searchTerm=t.target.value,this.isEmptySearchTerm&&this.searchTerm&&(this.isEmptySearchTerm=!1)}render(){return H`
            <input
             .value= ${this.searchTerm}
             placeholder="Search for any word..."
             @input=${this._handleInputChange}
             @keydown=${this._handleKeyDown}
             type="text"
            >
            ${this.isEmptySearchTerm?H`<div class="error-message" aria-live="assertive">Whoops, can't be empty</div>`:""}
            <img @click=${this._handleClick} src='/assets/images/icon-search.svg'/>
        `}}window.customElements.define("searchbar-component",Et);var _t=n`
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
`;customElements.define("error-element",class extends rt{static styles=[_t];static properties={error:{type:Object}};constructor(){super(),this.error={}}render(){return H`
            <div class="error-container">
                <div class="emoji">&#128533;</div>
                <h1>${this.error.title}</h1>
                <p>${this.error.message}${this.error.resolution}</p>
            </div>
        `}});var Tt=n`

    .container {
        margin: 0 auto;
        width: 100%;
        max-width: 600px;
        height: 45px;
        position:relative;
    }
        
    @media (max-width: 650px) {
        .container {
            width: 400px;
            margin: 0 auto;
            max-width: 500px;
            height: 45px;
            position: relative;
        }
    } 
  
`;class Dt extends rt{static styles=[Tt];static properties={data:{type:Object},error:{type:Object},fontType:{type:String},isDarkMode:{type:Boolean}};constructor(){super(),this.data=null,this.error=null}async handleSearch(t){const e=t.detail;try{const t=await async function(t){const e="https://api.dictionaryapi.dev/api/v2/entries/en/"+t,s=await fetch(e);if(!s.ok){const t=await s.json();throw{status:s.status,message:"HTTP error",details:t}}return s.json()}(e);this.data=t,this.error=null}catch(t){this.data=null,this.error=t.details}}async handleEnter(t){await this.handleSearch(t)}render(){return console.log("Main"+this.isDarkMode),this.error?H`
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
      `}}window.customElements.define("main-element",Dt);class zt extends rt{static properties={fontType:{type:String},isDarkMode:{type:Boolean}};constructor(){super(),this.fontType="Sans Serif",this.isDarkMode=!1,this.addEventListener("font-selected",this.handleSelectedFont),this.addEventListener("toggle-mode",this.handleToggleMode)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("toggle-mode",this.handleToggleMode)}handleToggleMode(){this.isDarkMode=!this.isDarkMode,this.isDarkMode?document.body.style.backgroundColor="black":document.body.style.backgroundColor="white"}handleSelectedFont(t){this.fontType=t.detail}render(){return console.log("AppContainer"+this.isDarkMode),H`
      <style>
        :host {
          font-family: ${this.fontType.toLowerCase().replace(" ","-")+"-custom"};
        }
      </style>
      <main-element .isDarkMode=${this.isDarkMode} .fontType = ${this.fontType}></main-element>
    `}}window.customElements.define("app-container",zt);export{zt as AppContainer};