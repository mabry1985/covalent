import{t as B}from"./table-row-selection.content-2dc6f2e9.js";import{x as d,i as h,r as u,l as F,A as H,e as Z}from"./query-assigned-elements-9f88bee1.js";import{n as l}from"./property-f36ea729.js";import{o as w}from"./class-map-018c3a6a.js";import{a as D,b as M,_ as b}from"./tslib.es6-4b90b051.js";import"./inert.esm-a76031cb.js";import{B as U}from"./base-element-cae00a28.js";import{o as G}from"./observer-1f401936.js";import{i as P}from"./query-3e91a3b8.js";import{a as K}from"./utils-529e1a6d.js";import"./action-ribbon-30ef7d5c.js";import"./icon-dab2e138.js";import"./icon-button-d258c64b.js";import"./list-14a4fe54.js";import{C as Q,s as Y,a as W,b as J}from"./list-item-a8093f25.js";import"./toolbar-02d53760.js";import"./button-54d97217.js";import{M as X,e as V}from"./component-95f05123.js";import"./foundation-4f97f2e7.js";import"./mwc-icon-6ece1001.js";import"./mwc-icon-button-base-8137080c.js";import"./ripple-handlers-20d146be.js";import"./state-2a0073ff.js";import"./style-map-4c420736.js";import"./aria-property-3dc182ec.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";import"./mwc-list-base-90359a36.js";import"./query-assigned-nodes-be20542b.js";import"./mwc-top-app-bar-base-b0b432c1.js";import"./mwc-button-base-82cdc40f.js";import"./index-ec0f687a.js";import"./_commonjsHelpers-de833af9.js";/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var o={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},L={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var tt=function(){function e(t){t===void 0&&(t={}),this.adapter=t}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var $=function(e){D(t,e);function t(n){var i=e.call(this,M(M({},t.defaultAdapter),n))||this;return i.animationFrame=0,i.animationTimer=0,i}return Object.defineProperty(t,"strings",{get:function(){return L},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return o},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),t.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},t.prototype.open=function(){var n=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(o.OPEN),this.adapter.addClass(o.ANIMATE),this.runNextAnimationFrame(function(){n.adapter.addClass(o.OPENING)}),this.adapter.saveFocus())},t.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(o.CLOSING)},t.prototype.isOpen=function(){return this.adapter.hasClass(o.OPEN)},t.prototype.isOpening=function(){return this.adapter.hasClass(o.OPENING)||this.adapter.hasClass(o.ANIMATE)},t.prototype.isClosing=function(){return this.adapter.hasClass(o.CLOSING)},t.prototype.handleKeydown=function(n){var i=n.keyCode,a=n.key,s=a==="Escape"||i===27;s&&this.close()},t.prototype.handleTransitionEnd=function(n){var i=o.OPENING,a=o.CLOSING,s=o.OPEN,r=o.ANIMATE,z=o.ROOT,j=this.isElement(n.target)&&this.adapter.elementHasClass(n.target,z);j&&(this.isClosing()?(this.adapter.removeClass(s),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(r),this.adapter.removeClass(i),this.adapter.removeClass(a))},t.prototype.opened=function(){},t.prototype.closed=function(){},t.prototype.runNextAnimationFrame=function(n){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(n,0)})},t.prototype.isElement=function(n){return!!n.classList},t}(tt);const et=$;/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var nt=function(e){D(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.handleScrimClick=function(){this.close()},t.prototype.opened=function(){this.adapter.trapFocus()},t.prototype.closed=function(){this.adapter.releaseFocus()},t}($);const O=nt;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const S=document.$blockingElements;class v extends U{constructor(){super(...arguments),this._previousFocus=null,this.open=!1,this.hasHeader=!1,this.type=""}get mdcFoundationClass(){return this.type==="modal"?O:et}createAdapter(){return Object.assign(Object.assign({},K(this.mdcRoot)),{elementHasClass:(t,n)=>t.classList.contains(n),saveFocus:()=>{this._previousFocus=this.getRootNode().activeElement},restoreFocus:()=>{this._previousFocus&&this._previousFocus.focus&&this._previousFocus.focus()},notifyClose:()=>{this.open=!1,this.dispatchEvent(new Event(L.CLOSE_EVENT,{bubbles:!0,cancelable:!0}))},notifyOpen:()=>{this.open=!0,this.dispatchEvent(new Event(L.OPEN_EVENT,{bubbles:!0,cancelable:!0}))},focusActiveNavigationItem:()=>{},trapFocus:()=>{S.push(this),this.appContent.inert=!0},releaseFocus:()=>{S.remove(this),this.appContent.inert=!1}})}_handleScrimClick(){this.mdcFoundation instanceof O&&this.mdcFoundation.handleScrimClick()}render(){const t=this.type==="dismissible"||this.type==="modal",n=this.type==="modal",i=this.hasHeader?d`
      <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title"><slot name="title"></slot></h3>
        <h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6>
        <slot name="header"></slot>
      </div>
      `:"";return d`
      <aside class="mdc-drawer ${w({"mdc-drawer--dismissible":t,"mdc-drawer--modal":n})}">
        ${i}
        <div class="mdc-drawer__content"><slot></slot></div>
      </aside>
      ${n?d`<div class="mdc-drawer-scrim"
                          @click="${this._handleScrimClick}"></div>`:""}
      <div class="mdc-drawer-app-content">
        <slot name="appContent"></slot>
      </div>
      `}firstUpdated(){this.mdcRoot.addEventListener("keydown",t=>this.mdcFoundation.handleKeydown(t)),this.mdcRoot.addEventListener("transitionend",t=>this.mdcFoundation.handleTransitionEnd(t))}updated(t){t.has("type")&&this.createFoundation()}}b([P(".mdc-drawer")],v.prototype,"mdcRoot",void 0);b([P(".mdc-drawer-app-content")],v.prototype,"appContent",void 0);b([G(function(e){this.type!==""&&(e?this.mdcFoundation.open():this.mdcFoundation.close())}),l({type:Boolean,reflect:!0})],v.prototype,"open",void 0);b([l({type:Boolean})],v.prototype,"hasHeader",void 0);b([l({reflect:!0})],v.prototype,"type",void 0);const it=`.mdc-drawer{border-color:#0000001f;background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-top-left-radius:0;border-top-right-radius:0;border-top-right-radius:var(--mdc-shape-large, 0);border-bottom-right-radius:0;border-bottom-right-radius:var(--mdc-shape-large, 0);border-bottom-left-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-drawer .mdc-drawer__title{color:#000000de}.mdc-drawer .mdc-deprecated-list-group__subheader,.mdc-drawer .mdc-drawer__subtitle,.mdc-drawer .mdc-deprecated-list-item__graphic{color:#0009}.mdc-drawer .mdc-deprecated-list-item{color:#000000de}.mdc-drawer .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-deprecated-list-item--activated{color:#6200eede}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-top-left-radius:0;border-top-left-radius:var(--mdc-shape-large, 0);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom-left-radius:var(--mdc-shape-large, 0)}.mdc-drawer .mdc-deprecated-list-item{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-deprecated-list-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-subtitle2-font-size, .875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, .0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);height:40px;margin:8px;padding:0 8px}.mdc-drawer .mdc-deprecated-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-deprecated-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-deprecated-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-deprecated-list-group__subheader:before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-deprecated-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-deprecated-list-item__text,.mdc-drawer .mdc-deprecated-list-item__graphic{pointer-events:none}.mdc-drawer--animate{transform:translate(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{transform:translate(100%)}.mdc-drawer--opening{transform:translate(0);transition-duration:.25s}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{transform:translate(0)}.mdc-drawer--closing{transform:translate(-100%);transition-duration:.2s}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{transform:translate(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, .0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title:before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title:after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle:before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f;left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:#00000052}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:.25s;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:.2s;opacity:0}:host{--mdc-theme-surface: var(--mdc-theme-background);--mdc-list-vertical-padding: 0;--cv-list-padding-right: 0;--cv-list-item-border-radius: 100%;--cv-list-item-width: 48px;--cv-list-item-graphic-margin-left: 0;--cv-list-menu-height: 0;--cv-list-item-expansion-icon-size: 0}:host([open]){--cv-list-padding-right: 16px;--cv-list-item-border-radius: 0 28px 28px 0;--cv-list-item-width: 100%;--cv-list-item-graphic-margin-left: 12px;--cv-list-item-expansion-icon-margin: -24px;--cv-list-item-expansion-icon-size: 24px;--cv-list-menu-height: inherit}.app-shell{background-color:var(--mdc-theme-surface);display:grid;grid-template:"nav mini-list main help" min-content/auto auto 1fr;min-height:100vh}.app-shell:after{content:"";position:absolute;top:0;height:2px;width:100%;z-index:1000;background-color:#ff5f02}.main{grid-area:main;overflow:auto;height:100vh;border-left:1px solid;border-color:var(--mdc-theme-border, rgba(0, 0, 0, .12))}@media only screen and (min-width: 768px){.cov-drawer--hovered .main,.main.cov-drawer--hovered-closing{margin-left:72px}:not(.cov-drawer--forced-open) .main{margin-left:72px}.cov-drawer--open .main{margin-left:0}}.help{grid-area:help;width:320px;height:100vh;overflow-y:auto;border-left:1px solid;border-color:var(--mdc-theme-border, rgba(0, 0, 0, .12));transition-property:width;transition-duration:.2s}.help.help--closed{width:0;border:none}.current-section{align-items:center;border-bottom:1px solid var(--mdc-theme-border);display:flex;column-gap:12px;font-size:var(--mdc-typography-body2-font-size);font-family:var(--mdc-typography-body2-font-family);font-weight:600;justify-content:flex-start;overflow:hidden;min-height:48px;padding:8px 16px 8px 12px;position:relative;text-align:left}[name=mini-list]{display:none;border-left:1px solid;border-color:var(--mdc-theme-border, rgba(0, 0, 0, .12));width:320px;height:100vh}@media only screen and (min-width: 768px){.cov-appshell--minilist [name=mini-list]{display:block}:not(.cov-drawer--forced-open) [name=mini-list]{margin-left:72px}}@media only screen and (max-width: 1000px){[name=mini-list]{display:none}}nav.navigation{grid-area:nav;height:100vh;overflow-y:auto;border-right:0}nav.navigation .toggle-drawer{margin:8px auto}nav.navigation .navigation-toolbar{border-bottom:1px solid var(--mdc-theme-border);display:flex;align-items:center}nav.navigation slot[name=logo]{display:none}nav.navigation slot[name=navigation]{margin-top:8px;display:block}:not(.cov-drawer--forced-open) nav.navigation,:not(.cov-drawer--forced-open) nav.navigation.mdc-drawer--closed,:not(.cov-drawer--forced-open) nav.navigation.mdc-drawer--closing{position:absolute;top:0;left:0;bottom:0}nav.navigation.mdc-drawer--open{background-color:var(--mdc-theme-surface)}nav.navigation.mdc-drawer--open .toggle-drawer{margin-left:12px;margin-right:12px}nav.navigation.mdc-drawer--open slot[name=logo]{display:block}.cov-drawer--hovered nav.navigation{box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;border-right:1px solid var(--mdc-theme-border)}[divider]{border-bottom:1px solid;margin:16px;border-color:var(--mdc-theme-border, rgba(0, 0, 0, .12))}@media only screen and (min-width: 768px){nav.navigation{display:flex;flex-direction:column;transition-property:width;transition-duration:.2s;transform:none;background-color:transparent}.mdc-drawer--dismissible{display:block;width:72px;position:static}.mdc-drawer--open{width:256px}.mdc-drawer--opening{width:256px;transition-duration:.2s}.mdc-drawer--closing{width:72px;transition-duration:.2s}.header{display:none}}@media only screen and (max-width: 768px){.app-shell{grid-template-columns:1fr;grid-template-areas:"header" "main" "mini-list" "help"}[name=help]::slotted(*),.main{height:auto;width:auto;border:none}}
`;var at=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,p=(e,t,n,i)=>{for(var a=i>1?void 0:i?ot(t,n):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(a=(i?r(t,n,a):r(a))||a);return i&&a&&at(t,n,a),a};let c=class extends v{constructor(){super(),this.appName="",this.sectionName="",this.drawerOpen=!1,this.helpOpen=!1,this.forcedOpen=!1,this.hovered=!1,this.resizeEvent()}_toggleOpen(e=!1){this.mdcFoundation.isOpening()||this.mdcFoundation.isClosing()||(this.open=e||!this.open,this.dispatchEvent(new Event("CovalentAppShell:toggle",{bubbles:!0,composed:!0})),this.requestUpdate())}_handleMenuClick(){this._toggleOpen(!this.forcedOpen),this.forcedOpen=!0,this.hovered=!1}_handleNavMouseOver(){this.open||this.forcedOpen||(this.hovered=!0,this._toggleOpen())}_handleNavMouseOut(){!this.open||this.forcedOpen||this._toggleOpen()}_handleDrawerClosed(){this.forcedOpen=!1,this.hovered=!1,this.requestUpdate()}resizeEvent(){const e=window.matchMedia("(max-width: 800px)");e.matches&&this.type!=="modal"?this.type="modal":!e.matches&&this.type!=="dismissible"&&(this.type="dismissible"),this.requestUpdate()}connectedCallback(){super.connectedCallback(),this.addEventListener("MDCDrawer:closed",this._handleDrawerClosed),window.addEventListener("resize",()=>this.resizeEvent())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("MDCDrawer:closed",this._handleDrawerClosed),window.removeEventListener("resize",this.resizeEvent)}renderSection(){return this.sectionName?d`<div class="current-section">
          <slot name="section-action"></slot>
          <span>${this.sectionName}</span>
        </div>`:H}render(){const e=this.type==="dismissible"||this.type==="modal",t=this.type==="modal",n={"cov-drawer--forced-open":this.forcedOpen,"cov-drawer--open":this.drawerOpen,"cov-drawer--hovered":this.hovered},i={"mdc-drawer--dismissible":e,"mdc-drawer--modal":t},a={"help--closed":!this.helpOpen},s=t?d`<div
          class="mdc-drawer-scrim"
          @click="${this._handleScrimClick}"
        ></div>`:H;return d`
      <div class="app-shell ${w(n)}">
        <span class="header"
          ><cv-top-app-bar-fixed centerTitle>
            <cv-icon-button
              class="toggle-drawer"
              @click=${this._handleMenuClick}
              slot="navigationIcon"
              icon="menu"
            ></cv-icon-button>
            <span slot="title">${this.appName}</span>
          </cv-top-app-bar-fixed>
        </span>
        <nav
          class="navigation mdc-drawer ${w(i)}"
          @mouseenter="${this._handleNavMouseOver}"
          @mouseleave="${this._handleNavMouseOut}"
        >
          <div class="navigation-toolbar">
            <cv-icon-button
              @click="${this._handleMenuClick}"
              class="toggle-drawer"
              icon="menu"
            ></cv-icon-button>
            <slot name="logo"></slot>
          </div>
          ${this.renderSection()}
          <slot name="navigation"></slot>
          <div style="display:flex; flex:1;"></div>
          <div divider></div>
          <slot name="user-menu"></slot>
        </nav>
        ${s}
        <slot name="mini-list"></slot>
        <div class="main mdc-drawer-app-content"><slot></slot></div>
        <div class="help ${w(a)}">
          <slot name="help"></slot>
        </div>
      </div>
    `}};c.styles=[h`
      ${u(it)}
    `];p([F({slot:"navigation"})],c.prototype,"navigationListElements",2);p([F({slot:"user-menu"})],c.prototype,"userMenuElements",2);p([l()],c.prototype,"appName",2);p([l()],c.prototype,"sectionName",2);p([l({type:Boolean,reflect:!0})],c.prototype,"drawerOpen",2);p([l({type:Boolean,reflect:!0})],c.prototype,"helpOpen",2);c=p([Z("cv-app-shell")],c);const st=`:host{font-family:var(--mdc-typography-font-family);font-size:var(--mdc-typography-body2-font-size);font-weight:600;line-height:var(--mdc-typography-body2-line-height);text-align:left;border-radius:var(--cv-list-item-border-radius, 28px);transition:border-radius .1s ease-out;width:var(--cv-list-item-width, 100%)}::slotted(.section-selector){display:none;position:absolute;top:0;right:0}:host([activated]) ::slotted(cv-icon[slot=graphic]){color:var(--mdc-theme-primary)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{margin-left:var(--cv-list-item-graphic-margin-left, 12px)}:host([graphic=avatar]){padding:0}:host([graphic=avatar]) ::slotted(cv-icon[slot=graphic]){margin-left:8px;background:transparent}:host([graphic=avatar]:not([twoline])){height:48px}:host(.beta-list-item){--mdc-theme-primary: var(--mdc-theme-surface-caution);--mdc-list-item-meta-size: 20px;--mdc-list-item-graphic-size: 40px;--mdc-list-item-graphic-margin: 0;--mdc-typography-subtitle1-font-size: var( --mdc-typography-subtitle2-font-size );--mdc-typography-body2-font-size: var(--mdc-typography-caption-font-size);margin-bottom:8px;margin-right:0;border-radius:0;height:48px;font-size:0;padding:0 0 0 15px}:host([hasChildren]){flex-direction:column;overflow:visible;height:inherit!important;background:none;padding:0;--mdc-list-side-padding: 0;--cv-list-item-graphic-margin-left: 12px}:host([hasChildren][open]:hover:not([activated])) .expansion-header{--mdc-ripple-color: transparent}:host([hasChildren][open]:hover:not([activated])) .expansion-header:hover{--mdc-ripple-color: var(--mdc-theme-primary)}.expansion-header{border-radius:var(--cv-list-item-border-radius);position:relative;height:48px;width:100%;overflow:hidden;display:flex;flex-shrink:0;align-items:center}.expansion-header-inner{padding:0 16px}.expansion-icon{margin-right:var(--cv-list-item-expansion-icon-margin, -12px);font-size:var(--cv-list-item-expansion-icon-size, --mdc-icon-size);color:var(--cv-list-item-text-icon-on-background, var(--mdc-theme-text-icon-on-background))}.expansion-panel{display:block;width:100%;height:var(--cv-list-menu-height, 0);--mdc-list-side-padding: 72px;transition:transform .15s ease-out;overflow:hidden}:host([open][hasChildren]:not([twoline])){height:inherit;display:flex;flex-direction:column;border-radius:0}:host([open][hasChildren]:not([twoline])) .expansion-panel{transition:min-height .25s ease-in;height:var(--cv-list-menu-height, inherit)}
`;var rt=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,_=(e,t,n,i)=>{for(var a=i>1?void 0:i?ct(t,n):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(a=(i?r(t,n,a):r(a))||a);return i&&a&&rt(t,n,a),a};let m=class extends Q{constructor(){super(...arguments),this.open=!1,this.hasChildren=!1,this.activated=!1,this.lastKeySelected=0}_toggleOpen(){this.open=!this.open}_handleKeydown(e){const t=this.expansionPanelElements[0],n=t?t==null?void 0:t.getFocusedItemIndex():0,i=(t==null?void 0:t.items.length)??0;if(this.hasChildren){if(e.code==="Enter"){e.preventDefault(),e.stopImmediatePropagation(),e.target.hasChildren?this._toggleOpen():this._deselectHeader(e);return}if(this.open){if(e.code==="ArrowUp"&&n===0&&this.lastKeySelected===0&&!e.target.hasChildren){e.preventDefault(),e.stopImmediatePropagation(),t.items[0].blur(),this.focus();return}e.code==="ArrowDown"&&n===-1&&(e.preventDefault(),e.stopImmediatePropagation(),t.focusItemAtIndex(0),this.lastKeySelected=0),e.code==="ArrowUp"&&n!==-1&&(e.preventDefault(),e.stopImmediatePropagation(),t.focusItemAtIndex(n),this.lastKeySelected=n),(e.code==="ArrowDown"||e.code==="ArrowUp")&&n!==-1&&this.lastKeySelected<i-1&&(e.preventDefault(),e.stopImmediatePropagation(),t.focusItemAtIndex(n),this.lastKeySelected=n)}}}_handleRequestSelected(e){const t=e;this.hasChildren&&t.detail.selected===!1&&t.detail.source==="property"&&this._deselectChildren()}_deselectChildren(){this.expansionPanelElements.forEach(e=>{e.items.forEach(t=>t.selected=!1)})}_deselectHeader(e){e.preventDefault(),e.stopImmediatePropagation(),this.fireRequestSelected(!1,"interaction"),this.activated=!1}renderExpansionItem(){const e=this.renderText(),t=this.graphic?this.renderGraphic():H,n=this.hasMeta?this.renderMeta():H,i=this.open?"arrow_drop_down":"arrow_right",a=d`<cv-icon class="expansion-icon">${i}</cv-icon>`;return d`
      <div
        @mousedown=${this._toggleOpen}
        @touchstart="${this._toggleOpen}"
        @keydown=${this._toggleOpen}
        class="expansion-header"
      >
        ${this.renderRipple()} ${a} ${t} ${e} ${n}
      </div>
      <div class="expansion-panel" @click=${this._deselectHeader}>
        <slot name="expansion-panel"></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeydown),this.addEventListener("request-selected",this._handleRequestSelected)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleKeydown),this.addEventListener("request-selected",this._handleRequestSelected)}render(){return this.hasChildren?this.renderExpansionItem():super.render()}};m.styles=[h`
      ${u(Y)}
    `,h`
      ${u(W)}
    `,h`
      ${u(J)}
    `,h`
      ${u(st)}
    `];_([F({slot:"expansion-panel",flatten:!0})],m.prototype,"expansionPanelElements",2);_([l({type:Boolean,reflect:!0})],m.prototype,"open",2);_([l({type:Boolean,reflect:!0})],m.prototype,"hasChildren",2);m=_([Z("cv-nav-list-item")],m);const Rt={title:"Patterns/App Shell",argTypes:{navClick:{action:"clicked"}},parameters:{layout:"fullscreen"}};let f,x,E;const y=()=>{const e=E.getSelectedRowIds().length,t=E.rowCheckboxList.length;e?(x.labelText=`(${e}/${t}) items selected`,x.show()):x.close()},R=({navClick:e,appName:t="[App name]",sectionTitle:n=""})=>(document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector(".mdc-data-table");f=document.querySelector("cv-app-shell"),x=document.querySelector("cv-action-ribbon"),E=new X(i),document.querySelector(".help-item").addEventListener("click",()=>{f.helpOpen=!f.helpOpen}),document.querySelector(".help-close").addEventListener("click",()=>{f.helpOpen=!1}),setTimeout(y,150)},{once:!0}),document.addEventListener(V.SELECTED_ALL,y),document.addEventListener(V.UNSELECTED_ALL,y),document.addEventListener(V.ROW_SELECTION_CHANGED,y),`
    <style>
    .hidden-large {
        display: none;
    }
 
    @media only screen and (max-width: 800px) {
        .hidden-large {
            display:flex;
        }
        .hidden-small {
            display: none;
        }
    }
    </style>
    <cv-app-shell ${t?`appName="${t}"`:""} ${n?`sectionName="${n}"`:""}>

      <cv-icon-button slot="section-action" icon="arrow_back"></cv-icon-button>

      <svg
        slot="logo" 
        width="103" 
        height="20"
        viewBox="0 0 103 20"
        style="fill: var(--covalent-theme-text-logo-on-background)" 
        fill="none">
        <path d="M0 2.30182H3.53561V5.6615H7.47898V8.88045H3.53561V14.5072C3.53561 15.9632 4.26909 16.4391 5.30341 16.4391H7.47898V19.658H5.30341C1.68575 19.658 0 18.0358 0 14.5072V2.30182Z" fill="#FF5F02"/>
        <path d="M15.9376 19.9907C11.5865 19.9907 8.67492 17.0506 8.67492 12.6854C8.67492 8.32008 11.5318 5.32374 15.7461 5.32374C19.9605 5.32374 22.708 8.17934 22.708 12.5446C22.708 12.9643 22.6806 13.4121 22.5986 13.9443H12.3746C12.7003 15.9043 13.8714 16.828 15.9923 16.828C17.325 16.828 18.3046 16.2395 18.685 15.4565H22.33C21.5145 18.1714 19.2295 19.9907 15.9376 19.9907ZM12.4293 10.9787H19.0107C18.6577 9.21565 17.6233 8.37637 15.7461 8.37637C13.9783 8.37637 12.8371 9.27194 12.4293 10.9787Z" fill="#FF5F02"/>
        <path d="M24.6672 5.65895H28.0661V7.33751C29.3167 6.05044 30.8135 5.40563 32.2282 5.65895V9.01863C30.4604 8.79601 29.3192 9.63529 28.2028 11.1168V19.6529H24.6672V5.65895Z" fill="#FF5F02"/>
        <path d="M36.6316 19.8218C34.1303 19.8218 32.1437 18.3096 32.1437 15.1751C32.1437 12.6009 33.7201 10.8379 37.2557 10.8379H40.3288V10.4183C40.3288 9.13121 39.5406 8.59898 37.5814 8.59898C36.276 8.59898 35.2417 8.73972 33.827 9.15936V5.88412C34.916 5.57706 36.276 5.38004 37.8797 5.38004C41.9599 5.38004 43.8619 6.97416 43.8619 10.4183V19.6555H40.4084V18.8443L39.6202 19.1795C38.6132 19.5992 37.5814 19.8244 36.6291 19.8244L36.6316 19.8218ZM38.5635 16.5466L40.3313 15.7636V13.6935H37.6386C36.4153 13.6935 35.6793 14.282 35.6793 15.2058C35.6793 16.2984 36.4128 16.828 37.3377 16.828C37.7181 16.828 38.1532 16.7154 38.561 16.5491L38.5635 16.5466Z" fill="#FF5F02"/>
        <path d="M56.3758 19.6555V18.7318L56.1868 18.8162C54.9362 19.4329 53.6035 19.7399 52.3255 19.7399C48.9267 19.7399 45.9331 17.4728 45.9331 12.6598C45.9331 7.8467 48.9242 5.55148 52.3529 5.55148C53.6035 5.55148 54.9362 5.85853 56.1868 6.4752L56.2962 6.53149V0.341797H59.8318V19.6555H56.3758ZM52.9769 16.3802C53.7378 16.3802 54.5806 16.1832 55.4509 15.7636L56.2938 15.3439V9.97049L55.4509 9.55085C54.5806 9.13121 53.7378 8.93419 52.9769 8.93419C51.0177 8.93419 49.5507 10.1931 49.5507 12.6572C49.5507 15.1213 51.0202 16.3802 52.9769 16.3802Z" fill="#FF5F02"/>
        <path d="M66.2218 19.8218C63.7205 19.8218 61.7339 18.3096 61.7339 15.1751C61.7339 12.6009 63.3103 10.8379 66.8459 10.8379H69.919V10.4183C69.919 9.13121 69.1308 8.59898 67.1716 8.59898C65.8662 8.59898 64.8319 8.73972 63.4172 9.15936V5.88412C64.5062 5.57706 65.8662 5.38004 67.4699 5.38004C71.5501 5.38004 73.4521 6.97416 73.4521 10.4183V19.6555H69.9986V18.8443L69.2104 19.1795C68.2034 19.5992 67.1716 19.8244 66.2193 19.8244L66.2218 19.8218ZM68.1537 16.5466L69.9215 15.7636V13.6935H67.2288C66.0055 13.6935 65.2695 14.282 65.2695 15.2058C65.2695 16.2984 66.003 16.828 66.9279 16.828C67.3083 16.828 67.7435 16.7154 68.1512 16.5491L68.1537 16.5466Z" fill="#FF5F02"/>
        <path d="M76.0653 2.30182H79.6009V5.6615H83.5443V8.88045H79.6009V14.5072C79.6009 15.9632 80.3344 16.4391 81.3687 16.4391H83.5443V19.658H81.3687C77.7511 19.658 76.0653 18.0358 76.0653 14.5072V2.30182Z" fill="#FF5F02"/>
        <path d="M89.2555 19.8218C86.7542 19.8218 84.7676 18.3096 84.7676 15.1751C84.7676 12.6009 86.3439 10.8379 89.8795 10.8379H92.9527V10.4183C92.9527 9.13121 92.1645 8.59898 90.2053 8.59898C88.8999 8.59898 87.8656 8.73972 86.4509 9.15936V5.88412C87.5399 5.57706 88.8999 5.38004 90.5036 5.38004C94.5837 5.38004 96.4858 6.97416 96.4858 10.4183V19.6555H93.0323V18.8443L92.2441 19.1795C91.2371 19.5992 90.2053 19.8244 89.253 19.8244L89.2555 19.8218ZM91.1874 16.5466L92.9552 15.7636V13.6935H90.2624C89.0392 13.6935 88.3032 14.282 88.3032 15.2058C88.3032 16.2984 89.0367 16.828 89.9616 16.828C90.342 16.828 90.7771 16.7154 91.1849 16.5491L91.1874 16.5466Z" fill="#FF5F02"/>
        <path d="M98.5296 18.0588C98.5296 16.9943 99.3451 16.1551 100.407 16.1551C101.468 16.1551 102.284 16.9943 102.284 18.0588C102.284 19.1233 101.441 19.9907 100.407 19.9907C99.3725 19.9907 98.5296 19.1233 98.5296 18.0588Z" fill="#FF5F02"/>
      </svg>
      
      <cv-list
        class="navigation-rail"
        slot="navigation"
        activatable
      >
      <cv-nav-list-item graphic="avatar">
        <cv-icon class="home-icon" slot="graphic">home</cv-icon>
        Home
      </cv-nav-list-item>

      <cv-nav-list-item graphic="avatar" hasChildren>
        <span>Editor</span>
        <cv-icon class="covalent-icon" slot="graphic">product_editor</cv-icon>
        <cv-list
          class="subnav"
          slot="expansion-panel"
          activatable>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
        </cv-list>
      </cv-nav-list-item>

        <cv-nav-list-item graphic="avatar">
          <span>Sites</span>
          <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Data Protections</span>
          <cv-icon slot="graphic">settings_backup_restore</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Identity</span>
          <cv-icon slot="graphic">contacts</cv-icon>
        </cv-nav-list-item>
      </cv-list>

      <cv-list class="navigation-rail" slot="user-menu" activatable>
        <cv-nav-list-item
          class="beta-list-item"
          graphic="icon"
          twoline
          activated
        >
          <svg
            slot="graphic"
            style="fill: orange; height: 20px"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path
                d="M0 2C0 0.895431 0.895431 0 2 0H40L34.9206 20H2C0.895429 20 0 19.1046 0 18V2Z"
              ></path>
              <path
                d="M5.73242 14V6.8418H8.41797C8.96484 6.8418 9.40267 6.91504 9.73145 7.06152C10.0635 7.20475 10.3223 7.42773 10.5078 7.73047C10.6966 8.02995 10.791 8.34408 10.791 8.67285C10.791 8.97884 10.708 9.26693 10.542 9.53711C10.376 9.80729 10.1253 10.0254 9.79004 10.1914C10.223 10.3184 10.555 10.5348 10.7861 10.8408C11.0205 11.1468 11.1377 11.5081 11.1377 11.9248C11.1377 12.2601 11.0661 12.5726 10.9229 12.8623C10.7829 13.1488 10.6087 13.3701 10.4004 13.5264C10.1921 13.6826 9.93001 13.8014 9.61426 13.8828C9.30176 13.9609 8.91764 14 8.46191 14H5.73242ZM6.67969 9.84961H8.22754C8.64746 9.84961 8.94857 9.82194 9.13086 9.7666C9.37174 9.69499 9.55241 9.57617 9.67285 9.41016C9.79655 9.24414 9.8584 9.03581 9.8584 8.78516C9.8584 8.54753 9.80143 8.33919 9.6875 8.16016C9.57357 7.97786 9.41081 7.85417 9.19922 7.78906C8.98763 7.7207 8.62467 7.68652 8.11035 7.68652H6.67969V9.84961ZM6.67969 13.1553H8.46191C8.7679 13.1553 8.98275 13.1439 9.10645 13.1211C9.32454 13.082 9.50684 13.0169 9.65332 12.9258C9.7998 12.8346 9.92025 12.7028 10.0146 12.5303C10.109 12.3545 10.1562 12.1527 10.1562 11.9248C10.1562 11.6579 10.0879 11.4268 9.95117 11.2314C9.81445 11.0329 9.62402 10.8945 9.37988 10.8164C9.139 10.735 8.79069 10.6943 8.33496 10.6943H6.67969V13.1553ZM12.7109 14V6.8418H17.8867V7.68652H13.6582V9.87891H17.6182V10.7188H13.6582V13.1553H18.0527V14H12.7109ZM21.4326 14V7.68652H19.0742V6.8418H24.748V7.68652H22.3799V14H21.4326ZM24.4463 14L27.1953 6.8418H28.2158L31.1455 14H30.0664L29.2314 11.832H26.2383L25.4521 14H24.4463ZM26.5117 11.0605H28.9385L28.1914 9.07812C27.9635 8.47591 27.7943 7.98112 27.6836 7.59375C27.5924 8.05273 27.4639 8.50846 27.2979 8.96094L26.5117 11.0605Z"
                fill="black"
                fill-opacity="0.87"
              ></path>
            </g>
          </svg>
          <span>You're trying console beta</span>
          <span slot="secondary">Return to classic</span>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Notification</span>
          <cv-icon slot="graphic">notifications</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar" class="help-item">
          <span>Help</span>
          <cv-icon slot="graphic">help</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Account</span>
          <cv-icon slot="graphic">person</cv-icon>
        </cv-nav-list-item>
      </cv-list>

      <div slot="help" class="mdc-typography">
        <cv-toolbar>
          <span slot="title">Help</span>
          <cv-icon-button
            slot="actionItems"
            icon="open_in_browser"
          ></cv-icon-button>
          <cv-icon-button
            slot="actionItems"
            icon="close"
            class="help-close"
          ></cv-icon-button>
        </cv-toolbar>
        <div style="padding: 16px">
          <h3 class="mdc-typography--subtitle2">
            Ultricies nunc massa, id ut felis sed varius accumsan platea.
          </h3>
          <p class="mdc-typography--body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </p>
          <p class="mdc-typography--body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </p>
          <p class="mdc-typography--body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </p>
          <p class="mdc-typography--body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </p>
          <p class="mdc-typography--body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </p>
          <p class="mdc-typography--body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </p>
        </div>
      </div>
      <div slot="mini-list">
        <cv-toolbar divider>
          <span slot="title">[Page name]</span>
          <cv-icon-button
            slot="actionItems"
            icon="filter_list"
          ></cv-icon-button>
          <cv-icon-button slot="actionItems" icon="add"></cv-icon-button>
        </cv-toolbar>
        <cv-list activatable>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline activated>
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
        </cv-list>
      </div>

      <cv-toolbar>
        <span slot="title">[Section name]</span>
        <cv-icon-button slot="actionItems" icon="menu_open"></cv-icon-button>
        <cv-icon-button
          class="hidden-large"
          slot="actionItems"
          icon="add"
        ></cv-icon-button>
        <cv-button
          class="hidden-small"
          class="create-new-button"
          label="Create New"
          slot="actionItems"
          raised
        ></cv-button>
      </cv-toolbar>

      <cv-tab-bar>
        <cv-tab label="Overview"></cv-tab>
        <cv-tab label="Usage"></cv-tab>
        <cv-tab label="Objects"></cv-tab>
        <cv-tab label="Queries"></cv-tab>
        <cv-tab label="Network"></cv-tab>
        <cv-tab label="Settings"></cv-tab>
      </cv-tab-bar>

      <cv-action-ribbon labelText="this is my label" state="active">
        <cv-button
          slot="action-items"
          class="mdc-banner__secondary-action"
          outlined
          >Bulk action</cv-button
        >
      </cv-action-ribbon>

      ${B}
    </cv-app-shell>
    `),C=R.bind({}),g=R.bind({});g.args={sectionTitle:"Environments"};var k,N,I;C.parameters={...C.parameters,docs:{...(k=C.parameters)==null?void 0:k.docs,source:{originalSource:`({
  navClick,
  appName = '[App name]',
  sectionTitle = ''
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const dataTableEl = document.querySelector('.mdc-data-table');
    appShell = document.querySelector('cv-app-shell');
    banner = document.querySelector('cv-action-ribbon');
    dataTable = new MDCDataTable(dataTableEl);
    document.querySelector('.help-item').addEventListener('click', () => {
      appShell.helpOpen = !appShell.helpOpen;
    });
    document.querySelector('.help-close').addEventListener('click', () => {
      appShell.helpOpen = false;
    });
    setTimeout(updateActionRibbon, 150);
  }, {
    once: true
  });
  document.addEventListener(events.SELECTED_ALL, updateActionRibbon);
  document.addEventListener(events.UNSELECTED_ALL, updateActionRibbon);
  document.addEventListener(events.ROW_SELECTION_CHANGED, updateActionRibbon);
  return \`
    <style>
    .hidden-large {
        display: none;
    }
 
    @media only screen and (max-width: 800px) {
        .hidden-large {
            display:flex;
        }
        .hidden-small {
            display: none;
        }
    }
    </style>
    <cv-app-shell \${appName ? \`appName="\${appName}"\` : ''} \${sectionTitle ? \`sectionName="\${sectionTitle}"\` : ''}>

      <cv-icon-button slot="section-action" icon="arrow_back"></cv-icon-button>

      <svg
        slot="logo" 
        width="103" 
        height="20"
        viewBox="0 0 103 20"
        style="fill: var(--covalent-theme-text-logo-on-background)" 
        fill="none">
        <path d="M0 2.30182H3.53561V5.6615H7.47898V8.88045H3.53561V14.5072C3.53561 15.9632 4.26909 16.4391 5.30341 16.4391H7.47898V19.658H5.30341C1.68575 19.658 0 18.0358 0 14.5072V2.30182Z" fill="#FF5F02"/>
        <path d="M15.9376 19.9907C11.5865 19.9907 8.67492 17.0506 8.67492 12.6854C8.67492 8.32008 11.5318 5.32374 15.7461 5.32374C19.9605 5.32374 22.708 8.17934 22.708 12.5446C22.708 12.9643 22.6806 13.4121 22.5986 13.9443H12.3746C12.7003 15.9043 13.8714 16.828 15.9923 16.828C17.325 16.828 18.3046 16.2395 18.685 15.4565H22.33C21.5145 18.1714 19.2295 19.9907 15.9376 19.9907ZM12.4293 10.9787H19.0107C18.6577 9.21565 17.6233 8.37637 15.7461 8.37637C13.9783 8.37637 12.8371 9.27194 12.4293 10.9787Z" fill="#FF5F02"/>
        <path d="M24.6672 5.65895H28.0661V7.33751C29.3167 6.05044 30.8135 5.40563 32.2282 5.65895V9.01863C30.4604 8.79601 29.3192 9.63529 28.2028 11.1168V19.6529H24.6672V5.65895Z" fill="#FF5F02"/>
        <path d="M36.6316 19.8218C34.1303 19.8218 32.1437 18.3096 32.1437 15.1751C32.1437 12.6009 33.7201 10.8379 37.2557 10.8379H40.3288V10.4183C40.3288 9.13121 39.5406 8.59898 37.5814 8.59898C36.276 8.59898 35.2417 8.73972 33.827 9.15936V5.88412C34.916 5.57706 36.276 5.38004 37.8797 5.38004C41.9599 5.38004 43.8619 6.97416 43.8619 10.4183V19.6555H40.4084V18.8443L39.6202 19.1795C38.6132 19.5992 37.5814 19.8244 36.6291 19.8244L36.6316 19.8218ZM38.5635 16.5466L40.3313 15.7636V13.6935H37.6386C36.4153 13.6935 35.6793 14.282 35.6793 15.2058C35.6793 16.2984 36.4128 16.828 37.3377 16.828C37.7181 16.828 38.1532 16.7154 38.561 16.5491L38.5635 16.5466Z" fill="#FF5F02"/>
        <path d="M56.3758 19.6555V18.7318L56.1868 18.8162C54.9362 19.4329 53.6035 19.7399 52.3255 19.7399C48.9267 19.7399 45.9331 17.4728 45.9331 12.6598C45.9331 7.8467 48.9242 5.55148 52.3529 5.55148C53.6035 5.55148 54.9362 5.85853 56.1868 6.4752L56.2962 6.53149V0.341797H59.8318V19.6555H56.3758ZM52.9769 16.3802C53.7378 16.3802 54.5806 16.1832 55.4509 15.7636L56.2938 15.3439V9.97049L55.4509 9.55085C54.5806 9.13121 53.7378 8.93419 52.9769 8.93419C51.0177 8.93419 49.5507 10.1931 49.5507 12.6572C49.5507 15.1213 51.0202 16.3802 52.9769 16.3802Z" fill="#FF5F02"/>
        <path d="M66.2218 19.8218C63.7205 19.8218 61.7339 18.3096 61.7339 15.1751C61.7339 12.6009 63.3103 10.8379 66.8459 10.8379H69.919V10.4183C69.919 9.13121 69.1308 8.59898 67.1716 8.59898C65.8662 8.59898 64.8319 8.73972 63.4172 9.15936V5.88412C64.5062 5.57706 65.8662 5.38004 67.4699 5.38004C71.5501 5.38004 73.4521 6.97416 73.4521 10.4183V19.6555H69.9986V18.8443L69.2104 19.1795C68.2034 19.5992 67.1716 19.8244 66.2193 19.8244L66.2218 19.8218ZM68.1537 16.5466L69.9215 15.7636V13.6935H67.2288C66.0055 13.6935 65.2695 14.282 65.2695 15.2058C65.2695 16.2984 66.003 16.828 66.9279 16.828C67.3083 16.828 67.7435 16.7154 68.1512 16.5491L68.1537 16.5466Z" fill="#FF5F02"/>
        <path d="M76.0653 2.30182H79.6009V5.6615H83.5443V8.88045H79.6009V14.5072C79.6009 15.9632 80.3344 16.4391 81.3687 16.4391H83.5443V19.658H81.3687C77.7511 19.658 76.0653 18.0358 76.0653 14.5072V2.30182Z" fill="#FF5F02"/>
        <path d="M89.2555 19.8218C86.7542 19.8218 84.7676 18.3096 84.7676 15.1751C84.7676 12.6009 86.3439 10.8379 89.8795 10.8379H92.9527V10.4183C92.9527 9.13121 92.1645 8.59898 90.2053 8.59898C88.8999 8.59898 87.8656 8.73972 86.4509 9.15936V5.88412C87.5399 5.57706 88.8999 5.38004 90.5036 5.38004C94.5837 5.38004 96.4858 6.97416 96.4858 10.4183V19.6555H93.0323V18.8443L92.2441 19.1795C91.2371 19.5992 90.2053 19.8244 89.253 19.8244L89.2555 19.8218ZM91.1874 16.5466L92.9552 15.7636V13.6935H90.2624C89.0392 13.6935 88.3032 14.282 88.3032 15.2058C88.3032 16.2984 89.0367 16.828 89.9616 16.828C90.342 16.828 90.7771 16.7154 91.1849 16.5491L91.1874 16.5466Z" fill="#FF5F02"/>
        <path d="M98.5296 18.0588C98.5296 16.9943 99.3451 16.1551 100.407 16.1551C101.468 16.1551 102.284 16.9943 102.284 18.0588C102.284 19.1233 101.441 19.9907 100.407 19.9907C99.3725 19.9907 98.5296 19.1233 98.5296 18.0588Z" fill="#FF5F02"/>
      </svg>
      
      <cv-list
        class="navigation-rail"
        slot="navigation"
        activatable
      >
      <cv-nav-list-item graphic="avatar">
        <cv-icon class="home-icon" slot="graphic">home</cv-icon>
        Home
      </cv-nav-list-item>

      <cv-nav-list-item graphic="avatar" hasChildren>
        <span>Editor</span>
        <cv-icon class="covalent-icon" slot="graphic">product_editor</cv-icon>
        <cv-list
          class="subnav"
          slot="expansion-panel"
          activatable>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
        </cv-list>
      </cv-nav-list-item>

        <cv-nav-list-item graphic="avatar">
          <span>Sites</span>
          <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Data Protections</span>
          <cv-icon slot="graphic">settings_backup_restore</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Identity</span>
          <cv-icon slot="graphic">contacts</cv-icon>
        </cv-nav-list-item>
      </cv-list>

      <cv-list class="navigation-rail" slot="user-menu" activatable>
        <cv-nav-list-item
          class="beta-list-item"
          graphic="icon"
          twoline
          activated
        >
          <svg
            slot="graphic"
            style="fill: orange; height: 20px"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path
                d="M0 2C0 0.895431 0.895431 0 2 0H40L34.9206 20H2C0.895429 20 0 19.1046 0 18V2Z"
              ></path>
              <path
                d="M5.73242 14V6.8418H8.41797C8.96484 6.8418 9.40267 6.91504 9.73145 7.06152C10.0635 7.20475 10.3223 7.42773 10.5078 7.73047C10.6966 8.02995 10.791 8.34408 10.791 8.67285C10.791 8.97884 10.708 9.26693 10.542 9.53711C10.376 9.80729 10.1253 10.0254 9.79004 10.1914C10.223 10.3184 10.555 10.5348 10.7861 10.8408C11.0205 11.1468 11.1377 11.5081 11.1377 11.9248C11.1377 12.2601 11.0661 12.5726 10.9229 12.8623C10.7829 13.1488 10.6087 13.3701 10.4004 13.5264C10.1921 13.6826 9.93001 13.8014 9.61426 13.8828C9.30176 13.9609 8.91764 14 8.46191 14H5.73242ZM6.67969 9.84961H8.22754C8.64746 9.84961 8.94857 9.82194 9.13086 9.7666C9.37174 9.69499 9.55241 9.57617 9.67285 9.41016C9.79655 9.24414 9.8584 9.03581 9.8584 8.78516C9.8584 8.54753 9.80143 8.33919 9.6875 8.16016C9.57357 7.97786 9.41081 7.85417 9.19922 7.78906C8.98763 7.7207 8.62467 7.68652 8.11035 7.68652H6.67969V9.84961ZM6.67969 13.1553H8.46191C8.7679 13.1553 8.98275 13.1439 9.10645 13.1211C9.32454 13.082 9.50684 13.0169 9.65332 12.9258C9.7998 12.8346 9.92025 12.7028 10.0146 12.5303C10.109 12.3545 10.1562 12.1527 10.1562 11.9248C10.1562 11.6579 10.0879 11.4268 9.95117 11.2314C9.81445 11.0329 9.62402 10.8945 9.37988 10.8164C9.139 10.735 8.79069 10.6943 8.33496 10.6943H6.67969V13.1553ZM12.7109 14V6.8418H17.8867V7.68652H13.6582V9.87891H17.6182V10.7188H13.6582V13.1553H18.0527V14H12.7109ZM21.4326 14V7.68652H19.0742V6.8418H24.748V7.68652H22.3799V14H21.4326ZM24.4463 14L27.1953 6.8418H28.2158L31.1455 14H30.0664L29.2314 11.832H26.2383L25.4521 14H24.4463ZM26.5117 11.0605H28.9385L28.1914 9.07812C27.9635 8.47591 27.7943 7.98112 27.6836 7.59375C27.5924 8.05273 27.4639 8.50846 27.2979 8.96094L26.5117 11.0605Z"
                fill="black"
                fill-opacity="0.87"
              ></path>
            </g>
          </svg>
          <span>You're trying console beta</span>
          <span slot="secondary">Return to classic</span>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Notification</span>
          <cv-icon slot="graphic">notifications</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar" class="help-item">
          <span>Help</span>
          <cv-icon slot="graphic">help</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Account</span>
          <cv-icon slot="graphic">person</cv-icon>
        </cv-nav-list-item>
      </cv-list>

      <div slot="help" class="mdc-typography">
        <cv-toolbar>
          <span slot="title">Help</span>
          <cv-icon-button
            slot="actionItems"
            icon="open_in_browser"
          ></cv-icon-button>
          <cv-icon-button
            slot="actionItems"
            icon="close"
            class="help-close"
          ></cv-icon-button>
        </cv-toolbar>
        <div style="padding: 16px">
          <h3 class="mdc-typography--subtitle2">
            Ultricies nunc massa, id ut felis sed varius accumsan platea.
          </h3>
          <p class="mdc-typography--body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </p>
          <p class="mdc-typography--body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </p>
          <p class="mdc-typography--body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </p>
          <p class="mdc-typography--body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </p>
          <p class="mdc-typography--body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </p>
          <p class="mdc-typography--body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </p>
        </div>
      </div>
      <div slot="mini-list">
        <cv-toolbar divider>
          <span slot="title">[Page name]</span>
          <cv-icon-button
            slot="actionItems"
            icon="filter_list"
          ></cv-icon-button>
          <cv-icon-button slot="actionItems" icon="add"></cv-icon-button>
        </cv-toolbar>
        <cv-list activatable>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline activated>
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
        </cv-list>
      </div>

      <cv-toolbar>
        <span slot="title">[Section name]</span>
        <cv-icon-button slot="actionItems" icon="menu_open"></cv-icon-button>
        <cv-icon-button
          class="hidden-large"
          slot="actionItems"
          icon="add"
        ></cv-icon-button>
        <cv-button
          class="hidden-small"
          class="create-new-button"
          label="Create New"
          slot="actionItems"
          raised
        ></cv-button>
      </cv-toolbar>

      <cv-tab-bar>
        <cv-tab label="Overview"></cv-tab>
        <cv-tab label="Usage"></cv-tab>
        <cv-tab label="Objects"></cv-tab>
        <cv-tab label="Queries"></cv-tab>
        <cv-tab label="Network"></cv-tab>
        <cv-tab label="Settings"></cv-tab>
      </cv-tab-bar>

      <cv-action-ribbon labelText="this is my label" state="active">
        <cv-button
          slot="action-items"
          class="mdc-banner__secondary-action"
          outlined
          >Bulk action</cv-button
        >
      </cv-action-ribbon>

      \${tableRowSelectionContent}
    </cv-app-shell>
    \`;
}`,...(I=(N=C.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var T,A,q;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`({
  navClick,
  appName = '[App name]',
  sectionTitle = ''
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const dataTableEl = document.querySelector('.mdc-data-table');
    appShell = document.querySelector('cv-app-shell');
    banner = document.querySelector('cv-action-ribbon');
    dataTable = new MDCDataTable(dataTableEl);
    document.querySelector('.help-item').addEventListener('click', () => {
      appShell.helpOpen = !appShell.helpOpen;
    });
    document.querySelector('.help-close').addEventListener('click', () => {
      appShell.helpOpen = false;
    });
    setTimeout(updateActionRibbon, 150);
  }, {
    once: true
  });
  document.addEventListener(events.SELECTED_ALL, updateActionRibbon);
  document.addEventListener(events.UNSELECTED_ALL, updateActionRibbon);
  document.addEventListener(events.ROW_SELECTION_CHANGED, updateActionRibbon);
  return \`
    <style>
    .hidden-large {
        display: none;
    }
 
    @media only screen and (max-width: 800px) {
        .hidden-large {
            display:flex;
        }
        .hidden-small {
            display: none;
        }
    }
    </style>
    <cv-app-shell \${appName ? \`appName="\${appName}"\` : ''} \${sectionTitle ? \`sectionName="\${sectionTitle}"\` : ''}>

      <cv-icon-button slot="section-action" icon="arrow_back"></cv-icon-button>

      <svg
        slot="logo" 
        width="103" 
        height="20"
        viewBox="0 0 103 20"
        style="fill: var(--covalent-theme-text-logo-on-background)" 
        fill="none">
        <path d="M0 2.30182H3.53561V5.6615H7.47898V8.88045H3.53561V14.5072C3.53561 15.9632 4.26909 16.4391 5.30341 16.4391H7.47898V19.658H5.30341C1.68575 19.658 0 18.0358 0 14.5072V2.30182Z" fill="#FF5F02"/>
        <path d="M15.9376 19.9907C11.5865 19.9907 8.67492 17.0506 8.67492 12.6854C8.67492 8.32008 11.5318 5.32374 15.7461 5.32374C19.9605 5.32374 22.708 8.17934 22.708 12.5446C22.708 12.9643 22.6806 13.4121 22.5986 13.9443H12.3746C12.7003 15.9043 13.8714 16.828 15.9923 16.828C17.325 16.828 18.3046 16.2395 18.685 15.4565H22.33C21.5145 18.1714 19.2295 19.9907 15.9376 19.9907ZM12.4293 10.9787H19.0107C18.6577 9.21565 17.6233 8.37637 15.7461 8.37637C13.9783 8.37637 12.8371 9.27194 12.4293 10.9787Z" fill="#FF5F02"/>
        <path d="M24.6672 5.65895H28.0661V7.33751C29.3167 6.05044 30.8135 5.40563 32.2282 5.65895V9.01863C30.4604 8.79601 29.3192 9.63529 28.2028 11.1168V19.6529H24.6672V5.65895Z" fill="#FF5F02"/>
        <path d="M36.6316 19.8218C34.1303 19.8218 32.1437 18.3096 32.1437 15.1751C32.1437 12.6009 33.7201 10.8379 37.2557 10.8379H40.3288V10.4183C40.3288 9.13121 39.5406 8.59898 37.5814 8.59898C36.276 8.59898 35.2417 8.73972 33.827 9.15936V5.88412C34.916 5.57706 36.276 5.38004 37.8797 5.38004C41.9599 5.38004 43.8619 6.97416 43.8619 10.4183V19.6555H40.4084V18.8443L39.6202 19.1795C38.6132 19.5992 37.5814 19.8244 36.6291 19.8244L36.6316 19.8218ZM38.5635 16.5466L40.3313 15.7636V13.6935H37.6386C36.4153 13.6935 35.6793 14.282 35.6793 15.2058C35.6793 16.2984 36.4128 16.828 37.3377 16.828C37.7181 16.828 38.1532 16.7154 38.561 16.5491L38.5635 16.5466Z" fill="#FF5F02"/>
        <path d="M56.3758 19.6555V18.7318L56.1868 18.8162C54.9362 19.4329 53.6035 19.7399 52.3255 19.7399C48.9267 19.7399 45.9331 17.4728 45.9331 12.6598C45.9331 7.8467 48.9242 5.55148 52.3529 5.55148C53.6035 5.55148 54.9362 5.85853 56.1868 6.4752L56.2962 6.53149V0.341797H59.8318V19.6555H56.3758ZM52.9769 16.3802C53.7378 16.3802 54.5806 16.1832 55.4509 15.7636L56.2938 15.3439V9.97049L55.4509 9.55085C54.5806 9.13121 53.7378 8.93419 52.9769 8.93419C51.0177 8.93419 49.5507 10.1931 49.5507 12.6572C49.5507 15.1213 51.0202 16.3802 52.9769 16.3802Z" fill="#FF5F02"/>
        <path d="M66.2218 19.8218C63.7205 19.8218 61.7339 18.3096 61.7339 15.1751C61.7339 12.6009 63.3103 10.8379 66.8459 10.8379H69.919V10.4183C69.919 9.13121 69.1308 8.59898 67.1716 8.59898C65.8662 8.59898 64.8319 8.73972 63.4172 9.15936V5.88412C64.5062 5.57706 65.8662 5.38004 67.4699 5.38004C71.5501 5.38004 73.4521 6.97416 73.4521 10.4183V19.6555H69.9986V18.8443L69.2104 19.1795C68.2034 19.5992 67.1716 19.8244 66.2193 19.8244L66.2218 19.8218ZM68.1537 16.5466L69.9215 15.7636V13.6935H67.2288C66.0055 13.6935 65.2695 14.282 65.2695 15.2058C65.2695 16.2984 66.003 16.828 66.9279 16.828C67.3083 16.828 67.7435 16.7154 68.1512 16.5491L68.1537 16.5466Z" fill="#FF5F02"/>
        <path d="M76.0653 2.30182H79.6009V5.6615H83.5443V8.88045H79.6009V14.5072C79.6009 15.9632 80.3344 16.4391 81.3687 16.4391H83.5443V19.658H81.3687C77.7511 19.658 76.0653 18.0358 76.0653 14.5072V2.30182Z" fill="#FF5F02"/>
        <path d="M89.2555 19.8218C86.7542 19.8218 84.7676 18.3096 84.7676 15.1751C84.7676 12.6009 86.3439 10.8379 89.8795 10.8379H92.9527V10.4183C92.9527 9.13121 92.1645 8.59898 90.2053 8.59898C88.8999 8.59898 87.8656 8.73972 86.4509 9.15936V5.88412C87.5399 5.57706 88.8999 5.38004 90.5036 5.38004C94.5837 5.38004 96.4858 6.97416 96.4858 10.4183V19.6555H93.0323V18.8443L92.2441 19.1795C91.2371 19.5992 90.2053 19.8244 89.253 19.8244L89.2555 19.8218ZM91.1874 16.5466L92.9552 15.7636V13.6935H90.2624C89.0392 13.6935 88.3032 14.282 88.3032 15.2058C88.3032 16.2984 89.0367 16.828 89.9616 16.828C90.342 16.828 90.7771 16.7154 91.1849 16.5491L91.1874 16.5466Z" fill="#FF5F02"/>
        <path d="M98.5296 18.0588C98.5296 16.9943 99.3451 16.1551 100.407 16.1551C101.468 16.1551 102.284 16.9943 102.284 18.0588C102.284 19.1233 101.441 19.9907 100.407 19.9907C99.3725 19.9907 98.5296 19.1233 98.5296 18.0588Z" fill="#FF5F02"/>
      </svg>
      
      <cv-list
        class="navigation-rail"
        slot="navigation"
        activatable
      >
      <cv-nav-list-item graphic="avatar">
        <cv-icon class="home-icon" slot="graphic">home</cv-icon>
        Home
      </cv-nav-list-item>

      <cv-nav-list-item graphic="avatar" hasChildren>
        <span>Editor</span>
        <cv-icon class="covalent-icon" slot="graphic">product_editor</cv-icon>
        <cv-list
          class="subnav"
          slot="expansion-panel"
          activatable>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
          <cv-nav-list-item>Scripts</cv-nav-list-item>
        </cv-list>
      </cv-nav-list-item>

        <cv-nav-list-item graphic="avatar">
          <span>Sites</span>
          <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Data Protections</span>
          <cv-icon slot="graphic">settings_backup_restore</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Identity</span>
          <cv-icon slot="graphic">contacts</cv-icon>
        </cv-nav-list-item>
      </cv-list>

      <cv-list class="navigation-rail" slot="user-menu" activatable>
        <cv-nav-list-item
          class="beta-list-item"
          graphic="icon"
          twoline
          activated
        >
          <svg
            slot="graphic"
            style="fill: orange; height: 20px"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <g>
              <path
                d="M0 2C0 0.895431 0.895431 0 2 0H40L34.9206 20H2C0.895429 20 0 19.1046 0 18V2Z"
              ></path>
              <path
                d="M5.73242 14V6.8418H8.41797C8.96484 6.8418 9.40267 6.91504 9.73145 7.06152C10.0635 7.20475 10.3223 7.42773 10.5078 7.73047C10.6966 8.02995 10.791 8.34408 10.791 8.67285C10.791 8.97884 10.708 9.26693 10.542 9.53711C10.376 9.80729 10.1253 10.0254 9.79004 10.1914C10.223 10.3184 10.555 10.5348 10.7861 10.8408C11.0205 11.1468 11.1377 11.5081 11.1377 11.9248C11.1377 12.2601 11.0661 12.5726 10.9229 12.8623C10.7829 13.1488 10.6087 13.3701 10.4004 13.5264C10.1921 13.6826 9.93001 13.8014 9.61426 13.8828C9.30176 13.9609 8.91764 14 8.46191 14H5.73242ZM6.67969 9.84961H8.22754C8.64746 9.84961 8.94857 9.82194 9.13086 9.7666C9.37174 9.69499 9.55241 9.57617 9.67285 9.41016C9.79655 9.24414 9.8584 9.03581 9.8584 8.78516C9.8584 8.54753 9.80143 8.33919 9.6875 8.16016C9.57357 7.97786 9.41081 7.85417 9.19922 7.78906C8.98763 7.7207 8.62467 7.68652 8.11035 7.68652H6.67969V9.84961ZM6.67969 13.1553H8.46191C8.7679 13.1553 8.98275 13.1439 9.10645 13.1211C9.32454 13.082 9.50684 13.0169 9.65332 12.9258C9.7998 12.8346 9.92025 12.7028 10.0146 12.5303C10.109 12.3545 10.1562 12.1527 10.1562 11.9248C10.1562 11.6579 10.0879 11.4268 9.95117 11.2314C9.81445 11.0329 9.62402 10.8945 9.37988 10.8164C9.139 10.735 8.79069 10.6943 8.33496 10.6943H6.67969V13.1553ZM12.7109 14V6.8418H17.8867V7.68652H13.6582V9.87891H17.6182V10.7188H13.6582V13.1553H18.0527V14H12.7109ZM21.4326 14V7.68652H19.0742V6.8418H24.748V7.68652H22.3799V14H21.4326ZM24.4463 14L27.1953 6.8418H28.2158L31.1455 14H30.0664L29.2314 11.832H26.2383L25.4521 14H24.4463ZM26.5117 11.0605H28.9385L28.1914 9.07812C27.9635 8.47591 27.7943 7.98112 27.6836 7.59375C27.5924 8.05273 27.4639 8.50846 27.2979 8.96094L26.5117 11.0605Z"
                fill="black"
                fill-opacity="0.87"
              ></path>
            </g>
          </svg>
          <span>You're trying console beta</span>
          <span slot="secondary">Return to classic</span>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Notification</span>
          <cv-icon slot="graphic">notifications</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar" class="help-item">
          <span>Help</span>
          <cv-icon slot="graphic">help</cv-icon>
        </cv-nav-list-item>
        <cv-nav-list-item graphic="avatar">
          <span>Account</span>
          <cv-icon slot="graphic">person</cv-icon>
        </cv-nav-list-item>
      </cv-list>

      <div slot="help" class="mdc-typography">
        <cv-toolbar>
          <span slot="title">Help</span>
          <cv-icon-button
            slot="actionItems"
            icon="open_in_browser"
          ></cv-icon-button>
          <cv-icon-button
            slot="actionItems"
            icon="close"
            class="help-close"
          ></cv-icon-button>
        </cv-toolbar>
        <div style="padding: 16px">
          <h3 class="mdc-typography--subtitle2">
            Ultricies nunc massa, id ut felis sed varius accumsan platea.
          </h3>
          <p class="mdc-typography--body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </p>
          <p class="mdc-typography--body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </p>
          <p class="mdc-typography--body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </p>
          <p class="mdc-typography--body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt lectus risus, id aliquet mi congue sed.
          </p>
          <p class="mdc-typography--body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            pouere cubilia curae; Phasellus tincidunt eros arcu, sollicitudin
            laoreet urna aliquet eget.
          </p>
          <p class="mdc-typography--body1">
            Phasellus porta sed libero vel vulputate. Quisque non nisl sem.
            Pellentesque nec pretium magna, et vestibulum neque. Mauris molestie
            eros quis nisi pretium,
          </p>
        </div>
      </div>
      <div slot="mini-list">
        <cv-toolbar divider>
          <span slot="title">[Page name]</span>
          <cv-icon-button
            slot="actionItems"
            icon="filter_list"
          ></cv-icon-button>
          <cv-icon-button slot="actionItems" icon="add"></cv-icon-button>
        </cv-toolbar>
        <cv-list activatable>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline activated>
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
          <cv-list-item graphic="avatar" twoline>
            <cv-icon class="covalent-icon" slot="graphic">server</cv-icon>
            <span>[Object name]</span>
            <span slot="secondary">Secondary info</span>
          </cv-list-item>
        </cv-list>
      </div>

      <cv-toolbar>
        <span slot="title">[Section name]</span>
        <cv-icon-button slot="actionItems" icon="menu_open"></cv-icon-button>
        <cv-icon-button
          class="hidden-large"
          slot="actionItems"
          icon="add"
        ></cv-icon-button>
        <cv-button
          class="hidden-small"
          class="create-new-button"
          label="Create New"
          slot="actionItems"
          raised
        ></cv-button>
      </cv-toolbar>

      <cv-tab-bar>
        <cv-tab label="Overview"></cv-tab>
        <cv-tab label="Usage"></cv-tab>
        <cv-tab label="Objects"></cv-tab>
        <cv-tab label="Queries"></cv-tab>
        <cv-tab label="Network"></cv-tab>
        <cv-tab label="Settings"></cv-tab>
      </cv-tab-bar>

      <cv-action-ribbon labelText="this is my label" state="active">
        <cv-button
          slot="action-items"
          class="mdc-banner__secondary-action"
          outlined
          >Bulk action</cv-button
        >
      </cv-action-ribbon>

      \${tableRowSelectionContent}
    </cv-app-shell>
    \`;
}`,...(q=(A=g.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};const zt=["Basic","sectionTitle"];export{C as Basic,zt as __namedExportsOrder,Rt as default,g as sectionTitle};
//# sourceMappingURL=app-shell.stories-23f1d2dd.js.map
