!function(e){"function"==typeof define&&define.amd?define("laravelPro",e):e()}(function(){"use strict";var e,h=(function(e){e.exports=function(e){function o(e,t){return e.hasOwnProperty(t)&&(!0===e[t]||e[t].length)}function c(e,t,i){e.parentNode?e.parentNode.parentNode||t.appendChild(e.parentNode):t.appendChild(e);r.removeClass(e,"excluded");i||(e.innerHTML=e.textContent)}var s=function(){};s.prototype={on:function(e,t){this._events=this._events||{};this._events[e]=this._events[e]||[];this._events[e].push(t)},off:function(e,t){this._events=this._events||{};!1!==e in this._events&&this._events[e].splice(this._events[e].indexOf(t),1)},emit:function(e){this._events=this._events||{};if(!1!==e in this._events)for(var t=0;t<this._events[e].length;t++)this._events[e][t].apply(this,Array.prototype.slice.call(arguments,1))}},s.mixin=function(e){for(var t=["on","off","emit"],i=0;i<t.length;i++)"function"===typeof e?e.prototype[t[i]]=s.prototype[t[i]]:e[t[i]]=s.prototype[t[i]];return e};var r={extend:function(e,t){for(var i in t)if(t.hasOwnProperty(i)){var s=t[i];s&&"[object Object]"===Object.prototype.toString.call(s)?(e[i]=e[i]||{},r.extend(e[i],s)):e[i]=s}return e},each:function(e,t,i){if("[object Object]"===Object.prototype.toString.call(e))for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(i,s,e[s],e);else{s=0;for(var n=e.length;s<n;s++)t.call(i,s,e[s],e)}},createElement:function(e,t){var i=document,s=i.createElement(e);if(t&&"[object Object]"===Object.prototype.toString.call(t))for(var n in t)if(n in s)s[n]=t[n];else if("html"===n)s.innerHTML=t[n];else if("text"===n){var a=i.createTextNode(t[n]);s.appendChild(a)}else s.setAttribute(n,t[n]);return s},hasClass:function(e,t){if(e)return e.classList?e.classList.contains(t):!!e.className&&!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},addClass:function(e,t){r.hasClass(e,t)||(e.classList?e.classList.add(t):e.className=e.className.trim()+" "+t)},removeClass:function(e,t){r.hasClass(e,t)&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," "))},closest:function(e,t){return e&&e!==document.body&&(t(e)?e:r.closest(e.parentNode,t))},isInt:function(e){return"number"===typeof e&&isFinite(e)&&Math.floor(e)===e},debounce:function(s,n,a){var l;return function(){var e=this,t=arguments,i=a&&!l;clearTimeout(l);l=setTimeout(function(){l=null;a||s.apply(e,t)},n);i&&s.apply(e,t)}},rect:function(e,t){var i=window,s=e.getBoundingClientRect(),n=t?i.pageXOffset:0;i=t?i.pageYOffset:0;return{bottom:s.bottom+i,height:s.height,left:s.left+n,right:s.right+n,top:s.top+i,width:s.width}},includes:function(e,t){return-1<e.indexOf(t)},startsWith:function(e,t){return e.substr(0,t.length)===t},truncate:function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}},d=function(){if(this.items.length){var i=document.createDocumentFragment();if(this.config.pagination){var e=this.pages.slice(0,this.pageIndex);r.each(e,function(e,t){r.each(t,function(e,t){c(t,i,this.customOption)},this)},this)}else r.each(this.items,function(e,t){c(t,i,this.customOption)},this);i.childElementCount&&(r.removeClass(this.items[this.navIndex],"active"),this.navIndex=(i.querySelector(".selectr-option.selected")||i.querySelector(".selectr-option")).idx,r.addClass(this.items[this.navIndex],"active"));this.tree.appendChild(i)}},t=function(e){this.container.contains(e.target)||!this.opened&&!r.hasClass(this.container,"notice")||this.close()},h=function(e,t){var i=this.customOption?this.config.renderOption(t||e):e.textContent;i=r.createElement("li",{class:"selectr-option",html:i,role:"treeitem","aria-selected":!1});i.idx=e.idx;this.items.push(i);e.defaultSelected&&this.defaultSelected.push(e.idx);e.disabled&&(i.disabled=!0,r.addClass(i,"disabled"));return i},i=function(){this.requiresPagination=this.config.pagination&&0<this.config.pagination,o(this.config,"width")&&(r.isInt(this.config.width)?this.width=this.config.width+"px":"auto"===this.config.width?this.width="100%":r.includes(this.config.width,"%")&&(this.width=this.config.width)),this.container=r.createElement("div",{class:"selectr-container"}),this.config.customClass&&r.addClass(this.container,this.config.customClass),this.mobileDevice?r.addClass(this.container,"selectr-mobile"):r.addClass(this.container,"selectr-desktop"),this.el.tabIndex=-1,this.config.nativeDropdown||this.mobileDevice?r.addClass(this.el,"selectr-visible"):r.addClass(this.el,"selectr-hidden"),this.selected=r.createElement("div",{class:"selectr-selected",disabled:this.disabled,tabIndex:0,"aria-expanded":!1}),this.label=r.createElement(this.el.multiple?"ul":"span",{class:"selectr-label"});var e=r.createElement("div",{class:"selectr-options-container"});if(this.tree=r.createElement("ul",{class:"selectr-options",role:"tree","aria-hidden":!0,"aria-expanded":!1}),this.notice=r.createElement("div",{class:"selectr-notice"}),this.el.setAttribute("aria-hidden",!0),this.disabled&&(this.el.disabled=!0),this.el.multiple&&(r.addClass(this.label,"selectr-tags"),r.addClass(this.container,"multiple"),this.tags=[],this.selectedValues=this.getSelectedProperties("value"),this.selectedIndexes=this.getSelectedProperties("idx")),this.selected.appendChild(this.label),this.config.clearable&&(this.selectClear=r.createElement("button",{class:"selectr-clear",type:"button"}),this.container.appendChild(this.selectClear),r.addClass(this.container,"clearable")),this.config.taggable){var t=r.createElement("li",{class:"input-tag"});this.input=r.createElement("input",{class:"selectr-tag-input",placeholder:this.config.tagPlaceholder,tagIndex:0,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",role:"textbox",type:"search"});t.appendChild(this.input);this.label.appendChild(t);r.addClass(this.container,"taggable");this.tagSeperators=[","];this.config.tagSeperators&&(this.tagSeperators=this.tagSeperators.concat(this.config.tagSeperators))}this.config.searchable&&(this.input=r.createElement("input",{class:"selectr-input",tagIndex:-1,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",role:"textbox",type:"search"}),this.inputClear=r.createElement("button",{class:"selectr-input-clear",type:"button"}),this.inputContainer=r.createElement("div",{class:"selectr-input-container"}),this.inputContainer.appendChild(this.input),this.inputContainer.appendChild(this.inputClear),e.appendChild(this.inputContainer)),e.appendChild(this.notice),e.appendChild(this.tree),this.items=[],this.options=[],this.el.options.length&&(this.options=[].slice.call(this.el.options));var i=!1,s=0;if(this.el.children.length&&r.each(this.el.children,function(e,t){"OPTGROUP"===t.nodeName?(i=r.createElement("ul",{class:"selectr-optgroup",role:"group",html:"<li class='selectr-optgroup--label'>"+t.label+"</li>"}),r.each(t.children,function(e,t){t.idx=s;i.appendChild(h.call(this,t,i));s++},this)):(t.idx=s,h.call(this,t),s++)},this),this.config.data&&Array.isArray(this.config.data)){this.data=[];var n=!1,a;i=!1;s=0;r.each(this.config.data,function(e,t){o(t,"children")?(n=r.createElement("optgroup",{label:t.text}),i=r.createElement("ul",{class:"selectr-optgroup",role:"group",html:"<li class='selectr-optgroup--label'>"+t.text+"</li>"}),r.each(t.children,function(e,t){a=new Option(t.text,t.value,!1,t.hasOwnProperty("selected")&&!0===t.selected);a.disabled=o(t,"disabled");this.options.push(a);n.appendChild(a);a.idx=s;i.appendChild(h.call(this,a,t));this.data[s]=t;s++},this),this.el.appendChild(n)):(a=new Option(t.text,t.value,!1,t.hasOwnProperty("selected")&&!0===t.selected),a.disabled=o(t,"disabled"),this.options.push(a),a.idx=s,h.call(this,a,t),this.data[s]=t,s++)},this)}this.setSelected(!0);for(var l=this.navIndex=0;l<this.items.length;l++)if(t=this.items[l],!r.hasClass(t,"disabled")){r.addClass(t,"active");this.navIndex=l;break}this.requiresPagination&&(this.pageIndex=1,this.paginate()),this.container.appendChild(this.selected),this.container.appendChild(e),this.placeEl=r.createElement("div",{class:"selectr-placeholder"}),this.setPlaceholder(),this.selected.appendChild(this.placeEl),this.disabled&&this.disable(),this.el.parentNode.insertBefore(this.container,this.el),this.container.appendChild(this.el)},n=function(e){if(e=e||window.event,this.items.length&&this.opened&&r.includes([13,38,40],e.which)){e.preventDefault();if(13===e.which)return this.noResults||this.config.taggable&&0<this.input.value.length?!1:this.change(this.navIndex);var t=this.items[this.navIndex],i=this.navIndex;switch(e.which){case 38:var s=0;0<this.navIndex&&this.navIndex--;break;case 40:s=1,this.navIndex<this.items.length-1&&this.navIndex++}for(this.navigating=!0;r.hasClass(this.items[this.navIndex],"disabled")||r.hasClass(this.items[this.navIndex],"excluded");){if(0<this.navIndex&&this.navIndex<this.items.length-1)s?this.navIndex++:this.navIndex--;else{this.navIndex=i;break}if(this.searching)if(this.navIndex>this.tree.lastElementChild.idx){this.navIndex=this.tree.lastElementChild.idx;break}else if(this.navIndex<this.tree.firstElementChild.idx){this.navIndex=this.tree.firstElementChild.idx;break}}e=r.rect(this.items[this.navIndex]);s?(0===this.navIndex?this.tree.scrollTop=0:e.top+e.height>this.optsRect.top+this.optsRect.height&&(this.tree.scrollTop+=e.top+e.height-(this.optsRect.top+this.optsRect.height)),this.navIndex===this.tree.childElementCount-1&&this.requiresPagination&&p.call(this)):0===this.navIndex?this.tree.scrollTop=0:0>e.top-this.optsRect.top&&(this.tree.scrollTop+=e.top-this.optsRect.top);t&&r.removeClass(t,"active");r.addClass(this.items[this.navIndex],"active")}else this.navigating=!1},a=function(e){var l=this,i=document.createDocumentFragment(),t=this.options[e.idx],s=this.data?this.data[e.idx]:t;s=this.customSelected?this.config.renderSelection(s):t.textContent,s=r.createElement("li",{class:"selectr-tag",html:s});var n=r.createElement("button",{class:"selectr-tag-remove",type:"button"});if(s.appendChild(n),s.idx=e.idx,s.tag=t.value,this.tags.push(s),this.config.sortSelected){e=this.tags.slice();var o=function(e,s){e.replace(/(\d+)|(\D+)/g,function(e,t,i){s.push([t||Infinity,i||""])})};e.sort(function(e,t){var i=[],s=[];if(!0===l.config.sortSelected){var n=e.tag;var a=t.tag}else"text"===l.config.sortSelected&&(n=e.textContent,a=t.textContent);o(n,i);for(o(a,s);i.length&&s.length;)if(n=i.shift(),a=s.shift(),n=n[0]-a[0]||n[1].localeCompare(a[1]))return n;return i.length-s.length});r.each(e,function(e,t){i.appendChild(t)});this.label.innerHTML=""}else i.appendChild(s);this.config.taggable?this.label.insertBefore(i,this.input.parentNode):this.label.appendChild(i)},l=function(i){var s=!1;r.each(this.tags,function(e,t){t.idx===i.idx&&(s=t)},this),s&&(this.label.removeChild(s),this.tags.splice(this.tags.indexOf(s),1))},p=function(){var e=this.tree;if(e.scrollTop>=e.scrollHeight-e.offsetHeight&&this.pageIndex<this.pages.length){var i=document.createDocumentFragment();r.each(this.pages[this.pageIndex],function(e,t){c(t,i,this.customOption)},this);e.appendChild(i);this.pageIndex++;this.emit("selectr.paginate",{items:this.items.length,total:this.data.length,page:this.pageIndex,pages:this.pages.length})}},u=function(){if(this.config.searchable||this.config.taggable)this.input.value=null,this.searching=!1,this.config.searchable&&r.removeClass(this.inputContainer,"active"),r.hasClass(this.container,"notice")&&(r.removeClass(this.container,"notice"),r.addClass(this.container,"open"),this.input.focus()),r.each(this.items,function(e,t){r.removeClass(t,"excluded");this.customOption||(t.innerHTML=t.textContent)},this)};return(e=function(e,t){if(this.defaultConfig={defaultSelected:!0,width:"auto",disabled:!1,searchable:!0,clearable:!1,sortSelected:!1,allowDeselect:!1,closeOnScroll:!1,nativeDropdown:!1,nativeKeyboard:!1,placeholder:"Select an option...",taggable:!1,tagPlaceholder:"Enter a tag...",messages:{noResults:"No results.",noOptions:"No options available.",maxSelections:"A maximum of {max} items can be selected.",tagDuplicate:"That tag is already in use."}},!e)throw Error("You must supply either a HTMLSelectElement or a CSS3 selector string.");if("string"==typeof(this.el=e)&&(this.el=document.querySelector(e)),null===this.el)throw Error("The element you passed to Selectr can not be found.");if("select"!==this.el.nodeName.toLowerCase())throw Error("The element you passed to Selectr is not a HTMLSelectElement.");this.render(t)}).prototype.render=function(e){var t;this.rendered||((this.el.selectr=this).config=r.extend(this.defaultConfig,e),this.originalType=this.el.type,this.originalIndex=this.el.tabIndex,this.defaultSelected=[],this.originalOptionCount=this.el.options.length,(this.config.multiple||this.config.taggable)&&(this.el.multiple=!0),this.disabled=o(this.config,"disabled"),this.opened=!1,this.config.taggable&&(this.config.searchable=!1),this.mobileDevice=this.navigating=!1,/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)&&(this.mobileDevice=!0),this.customOption=this.config.hasOwnProperty("renderOption")&&"function"==typeof this.config.renderOption,this.customSelected=this.config.hasOwnProperty("renderSelection")&&"function"==typeof this.config.renderSelection,this.supportsEventPassiveOption=this.detectEventPassiveOption(),s.mixin(this),function(){this.requiresPagination=this.config.pagination&&0<this.config.pagination,o(this.config,"width")&&(r.isInt(this.config.width)?this.width=this.config.width+"px":"auto"===this.config.width?this.width="100%":r.includes(this.config.width,"%")&&(this.width=this.config.width)),this.container=r.createElement("div",{class:"selectr-container"}),this.config.customClass&&r.addClass(this.container,this.config.customClass),this.mobileDevice?r.addClass(this.container,"selectr-mobile"):r.addClass(this.container,"selectr-desktop"),this.el.tabIndex=-1,this.config.nativeDropdown||this.mobileDevice?r.addClass(this.el,"selectr-visible"):r.addClass(this.el,"selectr-hidden"),this.selected=r.createElement("div",{class:"selectr-selected",disabled:this.disabled,tabIndex:0,"aria-expanded":!1}),this.label=r.createElement(this.el.multiple?"ul":"span",{class:"selectr-label"});var e=r.createElement("div",{class:"selectr-options-container"});if(this.tree=r.createElement("ul",{class:"selectr-options",role:"tree","aria-hidden":!0,"aria-expanded":!1}),this.notice=r.createElement("div",{class:"selectr-notice"}),this.el.setAttribute("aria-hidden",!0),this.disabled&&(this.el.disabled=!0),this.el.multiple&&(r.addClass(this.label,"selectr-tags"),r.addClass(this.container,"multiple"),this.tags=[],this.selectedValues=this.getSelectedProperties("value"),this.selectedIndexes=this.getSelectedProperties("idx")),this.selected.appendChild(this.label),this.config.clearable&&(this.selectClear=r.createElement("button",{class:"selectr-clear",type:"button"}),this.container.appendChild(this.selectClear),r.addClass(this.container,"clearable")),this.config.taggable){var t=r.createElement("li",{class:"input-tag"});this.input=r.createElement("input",{class:"selectr-tag-input",placeholder:this.config.tagPlaceholder,tagIndex:0,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",role:"textbox",type:"search"});t.appendChild(this.input);this.label.appendChild(t);r.addClass(this.container,"taggable");this.tagSeperators=[","];this.config.tagSeperators&&(this.tagSeperators=this.tagSeperators.concat(this.config.tagSeperators))}this.config.searchable&&(this.input=r.createElement("input",{class:"selectr-input",tagIndex:-1,autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",role:"textbox",type:"search"}),this.inputClear=r.createElement("button",{class:"selectr-input-clear",type:"button"}),this.inputContainer=r.createElement("div",{class:"selectr-input-container"}),this.inputContainer.appendChild(this.input),this.inputContainer.appendChild(this.inputClear),e.appendChild(this.inputContainer)),e.appendChild(this.notice),e.appendChild(this.tree),this.items=[],this.options=[],this.el.options.length&&(this.options=[].slice.call(this.el.options));var i=!1,s=0;if(this.el.children.length&&r.each(this.el.children,function(e,t){"OPTGROUP"===t.nodeName?(i=r.createElement("ul",{class:"selectr-optgroup",role:"group",html:"<li class='selectr-optgroup--label'>"+t.label+"</li>"}),r.each(t.children,function(e,t){t.idx=s;i.appendChild(h.call(this,t,i));s++},this)):(t.idx=s,h.call(this,t),s++)},this),this.config.data&&Array.isArray(this.config.data)){this.data=[];var n=!1,a;i=!1;s=0;r.each(this.config.data,function(e,t){o(t,"children")?(n=r.createElement("optgroup",{label:t.text}),i=r.createElement("ul",{class:"selectr-optgroup",role:"group",html:"<li class='selectr-optgroup--label'>"+t.text+"</li>"}),r.each(t.children,function(e,t){a=new Option(t.text,t.value,!1,t.hasOwnProperty("selected")&&!0===t.selected);a.disabled=o(t,"disabled");this.options.push(a);n.appendChild(a);a.idx=s;i.appendChild(h.call(this,a,t));this.data[s]=t;s++},this),this.el.appendChild(n)):(a=new Option(t.text,t.value,!1,t.hasOwnProperty("selected")&&!0===t.selected),a.disabled=o(t,"disabled"),this.options.push(a),a.idx=s,h.call(this,a,t),this.data[s]=t,s++)},this)}this.setSelected(!0);for(var l=this.navIndex=0;l<this.items.length;l++)if(t=this.items[l],!r.hasClass(t,"disabled")){r.addClass(t,"active");this.navIndex=l;break}this.requiresPagination&&(this.pageIndex=1,this.paginate()),this.container.appendChild(this.selected),this.container.appendChild(e),this.placeEl=r.createElement("div",{class:"selectr-placeholder"}),this.setPlaceholder(),this.selected.appendChild(this.placeEl),this.disabled&&this.disable(),this.el.parentNode.insertBefore(this.container,this.el),this.container.appendChild(this.el)}.call(this),this.bindEvents(),this.update(),this.optsRect=r.rect(this.tree),this.rendered=!0,this.el.multiple||(this.el.selectedIndex=this.selectedIndex),t=this,setTimeout(function(){t.emit("selectr.init")},20))},e.prototype.getSelected=function(){return this.el.querySelectorAll("option:checked")},e.prototype.getSelectedProperties=function(t){var e=this.getSelected();return[].slice.call(e).map(function(e){return e[t]}).filter(function(e){return null!=e})},e.prototype.detectEventPassiveOption=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e},e.prototype.bindEvents=function(){var i,s=this;this.events={},this.events.dismiss=function(e){this.container.contains(e.target)||!this.opened&&!r.hasClass(this.container,"notice")||this.close()}.bind(this),this.events.navigate=function(e){if(e=e||window.event,this.items.length&&this.opened&&r.includes([13,38,40],e.which)){e.preventDefault();if(13===e.which)return this.noResults||this.config.taggable&&0<this.input.value.length?!1:this.change(this.navIndex);var t=this.items[this.navIndex],i=this.navIndex;switch(e.which){case 38:var s=0;0<this.navIndex&&this.navIndex--;break;case 40:s=1,this.navIndex<this.items.length-1&&this.navIndex++}for(this.navigating=!0;r.hasClass(this.items[this.navIndex],"disabled")||r.hasClass(this.items[this.navIndex],"excluded");){if(0<this.navIndex&&this.navIndex<this.items.length-1)s?this.navIndex++:this.navIndex--;else{this.navIndex=i;break}if(this.searching)if(this.navIndex>this.tree.lastElementChild.idx){this.navIndex=this.tree.lastElementChild.idx;break}else if(this.navIndex<this.tree.firstElementChild.idx){this.navIndex=this.tree.firstElementChild.idx;break}}e=r.rect(this.items[this.navIndex]);s?(0===this.navIndex?this.tree.scrollTop=0:e.top+e.height>this.optsRect.top+this.optsRect.height&&(this.tree.scrollTop+=e.top+e.height-(this.optsRect.top+this.optsRect.height)),this.navIndex===this.tree.childElementCount-1&&this.requiresPagination&&p.call(this)):0===this.navIndex?this.tree.scrollTop=0:0>e.top-this.optsRect.top&&(this.tree.scrollTop+=e.top-this.optsRect.top);t&&r.removeClass(t,"active");r.addClass(this.items[this.navIndex],"active")}else this.navigating=!1}.bind(this),this.events.reset=this.reset.bind(this),(this.config.nativeDropdown||this.mobileDevice)&&(this.container.addEventListener("touchstart",function(e){e.changedTouches[0].target===s.el&&s.toggle()},!!this.supportsEventPassiveOption&&{passive:!0}),this.container.addEventListener("click",function(e){e.target===s.el&&s.toggle()}),this.el.addEventListener("change",function(e){s.el.multiple?(e=s.getSelectedProperties("idx"),e=function(e,t){for(var i,s=[],n=e.slice(0),a=0;a<t.length;a++)-1<(i=n.indexOf(t[a]))?n.splice(i,1):s.push(t[a]);return[s,n]}(s.selectedIndexes,e),r.each(e[0],function(e,t){s.select(t)},s),r.each(e[1],function(e,t){s.deselect(t)},s)):-1<s.el.selectedIndex&&s.select(s.el.selectedIndex)})),this.container.addEventListener("keydown",function(e){"Escape"===e.key&&s.close(),"Enter"===e.key&&s.selected===document.activeElement&&void 0!==s.el.form.submit&&s.el.form.submit()," "!==e.key&&"ArrowUp"!==e.key&&"ArrowDown"!==e.key||s.selected!==document.activeElement||(setTimeout(function(){s.toggle()},200),s.config.nativeDropdown&&setTimeout(function(){s.el.focus()},200))}),this.selected.addEventListener("click",function(e){s.disabled||s.toggle(),e.preventDefault()}),this.config.nativeKeyboard&&(i="",this.selected.addEventListener("keydown",function(e){var t;s.disabled||s.selected!==document.activeElement||e.altKey||e.ctrlKey||e.metaKey||(" "===e.key||!s.opened&&-1<["Enter","ArrowUp","ArrowDown"].indexOf(e.key)?(s.toggle(),e.preventDefault(),e.stopPropagation()):e.key.length<=2&&String[String.fromCodePoint?"fromCodePoint":"fromCharCode"](e.key[String.codePointAt?"codePointAt":"charCodeAt"](0))===e.key&&(s.config.multiple?(s.open(),s.config.searchable&&(s.input.value=e.key,s.input.focus(),s.search(null,!0))):(i+=e.key,(t=s.search(i,!0))&&t.length&&(s.clear(),s.setValue(t[0].value)),setTimeout(function(){i=""},1e3)),e.preventDefault(),e.stopPropagation()))}),this.container.addEventListener("keyup",function(e){s.opened&&"Escape"===e.key&&(s.close(),e.stopPropagation(),s.selected.focus())})),this.label.addEventListener("click",function(e){r.hasClass(e.target,"selectr-tag-remove")&&s.deselect(e.target.parentNode.idx)}),this.selectClear&&this.selectClear.addEventListener("click",this.clear.bind(this)),this.tree.addEventListener("mousedown",function(e){e.preventDefault()}),this.tree.addEventListener("click",function(e){var t=r.closest(e.target,function(e){return e&&r.hasClass(e,"selectr-option")});t&&!r.hasClass(t,"disabled")&&(r.hasClass(t,"selected")?(s.el.multiple||!s.el.multiple&&s.config.allowDeselect)&&s.deselect(t.idx):s.select(t.idx),s.opened&&!s.el.multiple&&s.close()),e.preventDefault(),e.stopPropagation()}),this.tree.addEventListener("mouseover",function(e){r.hasClass(e.target,"selectr-option")&&!r.hasClass(e.target,"disabled")&&(r.removeClass(s.items[s.navIndex],"active"),r.addClass(e.target,"active"),s.navIndex=[].slice.call(s.items).indexOf(e.target))}),this.config.searchable&&(this.input.addEventListener("focus",function(e){s.searching=!0}),this.input.addEventListener("blur",function(e){s.searching=!1}),this.input.addEventListener("keyup",function(e){s.search(),s.config.taggable||(this.value.length?r.addClass(this.parentNode,"active"):r.removeClass(this.parentNode,"active"))}),this.inputClear.addEventListener("click",function(e){s.input.value=null,u.call(s),s.tree.childElementCount||d.call(s)})),this.config.taggable&&this.input.addEventListener("keyup",function(e){var i;s.search(),s.config.taggable&&this.value.length&&(i=this.value.trim(),13!==e.which&&!r.includes(s.tagSeperators,e.key)||(r.each(s.tagSeperators,function(e,t){i=i.replace(t,"")}),s.add({value:i,text:i,selected:!0},!0)?(s.close(),u.call(s)):(this.value="",s.setMessage(s.config.messages.tagDuplicate))))}),this.update=r.debounce(function(){s.opened&&s.config.closeOnScroll&&s.close(),s.width&&(s.container.style.width=s.width),s.invert()},50),this.requiresPagination&&(this.paginateItems=r.debounce(function(){p.call(this)},50),this.tree.addEventListener("scroll",this.paginateItems.bind(this))),document.addEventListener("click",this.events.dismiss),window.addEventListener("keydown",this.events.navigate),window.addEventListener("resize",this.update),window.addEventListener("scroll",this.update),this.on("selectr.destroy",function(){document.removeEventListener("click",this.events.dismiss),window.removeEventListener("keydown",this.events.navigate),window.removeEventListener("resize",this.update),window.removeEventListener("scroll",this.update)}),this.el.form&&(this.el.form.addEventListener("reset",this.events.reset),this.on("selectr.destroy",function(){this.el.form.removeEventListener("reset",this.events.reset)}))},e.prototype.setSelected=function(e){var i;this.config.data||this.el.multiple||!this.el.options.length||(0!==this.el.selectedIndex||this.el.options[0].defaultSelected||this.config.defaultSelected||(this.el.selectedIndex=-1),this.selectedIndex=this.el.selectedIndex,-1<this.selectedIndex&&this.select(this.selectedIndex)),this.config.multiple&&"select-one"===this.originalType&&!this.config.data&&this.el.options[0].selected&&!this.el.options[0].defaultSelected&&(this.el.options[0].selected=!1),r.each(this.options,function(e,t){t.selected&&t.defaultSelected&&this.select(t.idx)},this),this.config.selectedValue&&this.setValue(this.config.selectedValue),this.config.data&&(!this.el.multiple&&this.config.defaultSelected&&this.el.selectedIndex<0&&this.select(0),i=0,r.each(this.config.data,function(e,t){o(t,"children")?r.each(t.children,function(e,t){t.hasOwnProperty("selected")&&!0===t.selected&&this.select(i),i++},this):(t.hasOwnProperty("selected")&&!0===t.selected&&this.select(i),i++)},this))},e.prototype.destroy=function(){this.rendered&&(this.emit("selectr.destroy"),"select-one"===this.originalType&&(this.el.multiple=!1),this.config.data&&(this.el.innerHTML=""),r.removeClass(this.el,"selectr-hidden"),this.container.parentNode.replaceChild(this.el,this.container),this.rendered=!1,delete this.el.selectr)},e.prototype.change=function(e){var t=this.items[e],i=this.options[e];i.disabled||(i.selected&&r.hasClass(t,"selected")?this.deselect(e):this.select(e),this.opened&&!this.el.multiple&&this.close())},e.prototype.select=function(s){var e=this.items[s],t=[].slice.call(this.el.options),i=this.options[s];if(this.el.multiple){if(r.includes(this.selectedIndexes,s))return!1;if(this.config.maxSelections&&this.tags.length===this.config.maxSelections)return this.setMessage(this.config.messages.maxSelections.replace("{max}",this.config.maxSelections),!0),!1;this.selectedValues.push(i.value),this.selectedIndexes.push(s),function(e){var l=this,i=document.createDocumentFragment(),t=this.options[e.idx],s=this.data?this.data[e.idx]:t;s=this.customSelected?this.config.renderSelection(s):t.textContent,s=r.createElement("li",{class:"selectr-tag",html:s});var n=r.createElement("button",{class:"selectr-tag-remove",type:"button"});if(s.appendChild(n),s.idx=e.idx,s.tag=t.value,this.tags.push(s),this.config.sortSelected){e=this.tags.slice();var o=function(e,s){e.replace(/(\d+)|(\D+)/g,function(e,t,i){s.push([t||Infinity,i||""])})};e.sort(function(e,t){var i=[],s=[];if(!0===l.config.sortSelected){var n=e.tag;var a=t.tag}else"text"===l.config.sortSelected&&(n=e.textContent,a=t.textContent);o(n,i);for(o(a,s);i.length&&s.length;)if(n=i.shift(),a=s.shift(),n=n[0]-a[0]||n[1].localeCompare(a[1]))return n;return i.length-s.length});r.each(e,function(e,t){i.appendChild(t)});this.label.innerHTML=""}else i.appendChild(s);this.config.taggable?this.label.insertBefore(i,this.input.parentNode):this.label.appendChild(i)}.call(this,e)}else{var n=this.data?this.data[s]:i;this.label.innerHTML=this.customSelected?this.config.renderSelection(n):i.textContent,this.selectedValue=i.value,this.selectedIndex=s,r.each(this.options,function(e,t){var i=this.items[e];e!==s&&(i&&r.removeClass(i,"selected"),t.selected=!1,t.removeAttribute("selected"))},this)}r.includes(t,i)||this.el.add(i),e.setAttribute("aria-selected",!0),r.addClass(e,"selected"),r.addClass(this.container,"has-selected"),i.selected=!0,i.setAttribute("selected",""),this.emit("selectr.change",i),this.emit("selectr.select",i),"createEvent"in document?((e=document.createEvent("HTMLEvents")).initEvent("change",!0,!0),this.el.dispatchEvent(e)):this.el.fireEvent("onchange")},e.prototype.deselect=function(e,t){var i=this.items[e],s=this.options[e];if(this.el.multiple){var n=this.selectedIndexes.indexOf(e);this.selectedIndexes.splice(n,1),n=this.selectedValues.indexOf(s.value),this.selectedValues.splice(n,1),function(i){var s=!1;r.each(this.tags,function(e,t){t.idx===i.idx&&(s=t)},this),s&&(this.label.removeChild(s),this.tags.splice(this.tags.indexOf(s),1))}.call(this,i),this.tags.length||r.removeClass(this.container,"has-selected")}else{if(!t&&!this.config.clearable&&!this.config.allowDeselect)return!1;this.label.innerHTML="",this.selectedValue=null,this.el.selectedIndex=this.selectedIndex=-1,r.removeClass(this.container,"has-selected")}this.items[e].setAttribute("aria-selected",!1),r.removeClass(this.items[e],"selected"),s.selected=!1,s.removeAttribute("selected"),this.emit("selectr.change",null),this.emit("selectr.deselect",s),"createEvent"in document?((i=document.createEvent("HTMLEvents")).initEvent("change",!0,!0),this.el.dispatchEvent(i)):this.el.fireEvent("onchange")},e.prototype.setValue=function(i){var s=Array.isArray(i);if(s||(i=i.toString().trim()),!this.el.multiple&&s)return!1;r.each(this.options,function(e,t){(s&&-1<i.indexOf(t.value)||t.value===i)&&this.change(t.idx)},this)},e.prototype.getValue=function(e,t){var i,s;return this.el.multiple?e?this.selectedIndexes.length&&(s={values:[]},r.each(this.selectedIndexes,function(e,t){t=this.options[t];s.values[e]={value:t.value,text:t.textContent}},this)):s=this.selectedValues.slice():s=e?{value:(i=this.options[this.selectedIndex]).value,text:i.textContent}:this.selectedValue,s=e&&t?JSON.stringify(s):s},e.prototype.add=function(i,s){if(i){if(this.data=this.data||[],this.items=this.items||[],this.options=this.options||[],Array.isArray(i))r.each(i,function(e,t){this.add(t,s)},this);else if("[object Object]"===Object.prototype.toString.call(i)){if(s){var n=!1;if(r.each(this.options,function(e,t){t.value.toLowerCase()===i.value.toLowerCase()&&(n=!0)}),n)return!1}var e=r.createElement("option",i);return this.data.push(i),this.options.push(e),e.idx=0<this.options.length?this.options.length-1:0,h.call(this,e),i.selected&&this.select(e.idx),this.setPlaceholder(),e}return this.config.pagination&&this.paginate(),!0}},e.prototype.remove=function(e){var i,s=[];Array.isArray(e)?r.each(e,function(e,t){r.isInt(t)?s.push(this.getOptionByIndex(t)):"string"==typeof t&&s.push(this.getOptionByValue(t))},this):r.isInt(e)?s.push(this.getOptionByIndex(e)):"string"==typeof e&&s.push(this.getOptionByValue(e)),s.length&&(r.each(s,function(e,t){i=t.idx,this.el.remove(t),this.options.splice(i,1);t=this.items[i].parentNode;t&&t.removeChild(this.items[i]),this.items.splice(i,1),r.each(this.options,function(e,t){t.idx=e,this.items[e].idx=e},this)},this),this.setPlaceholder(),this.config.pagination&&this.paginate())},e.prototype.removeAll=function(){this.clear(!0),r.each(this.el.options,function(e,t){this.el.remove(t)},this),r.truncate(this.tree),this.items=[],this.options=[],this.data=[],this.navIndex=0,this.requiresPagination&&(this.requiresPagination=!1,this.pageIndex=1,this.pages=[]),this.setPlaceholder()},e.prototype.search=function(n,e){if(!this.navigating){var a=!1;n||(n=this.input.value,a=!0,this.removeMessage(),r.truncate(this.tree));var l,t,o=[],h=document.createDocumentFragment();return 0<(n=n.trim().toLowerCase()).length?(l=e?r.startsWith:r.includes,r.each(this.options,function(e,t){var i,s=this.items[t.idx];l(t.textContent.trim().toLowerCase(),n)&&!t.disabled?(o.push({text:t.textContent,value:t.value}),a&&(c(s,h,this.customOption),r.removeClass(s,"excluded"),!this.customOption)&&(i=!!(i=new RegExp(n,"i").exec(t.textContent))&&t.textContent.replace(i[0],"<span class='selectr-match'>"+i[0]+"</span>"),s.innerHTML=i)):a&&r.addClass(s,"excluded")},this),a&&(h.childElementCount?(t=this.items[this.navIndex],e=h.querySelector(".selectr-option:not(.excluded)"),this.noResults=!1,r.removeClass(t,"active"),this.navIndex=e.idx,r.addClass(e,"active")):this.config.taggable||(this.noResults=!0,this.setMessage(this.config.messages.noResults)),this.tree.appendChild(h))):d.call(this),o}},e.prototype.toggle=function(){this.disabled||(this.opened?this.close():this.open())},e.prototype.open=function(){var e=this;if(!this.options.length)return!1;this.opened||this.emit("selectr.open"),this.opened=!0,this.mobileDevice||this.config.nativeDropdown?(r.addClass(this.container,"native-open"),this.config.data&&r.each(this.options,function(e,t){this.el.add(t)},this)):(r.addClass(this.container,"open"),d.call(this),this.invert(),this.tree.scrollTop=0,r.removeClass(this.container,"notice"),this.selected.setAttribute("aria-expanded",!0),this.tree.setAttribute("aria-hidden",!1),this.tree.setAttribute("aria-expanded",!0),this.config.searchable&&!this.config.taggable&&setTimeout(function(){e.input.focus(),e.input.tabIndex=0},10))},e.prototype.close=function(){var e;this.opened&&this.emit("selectr.close"),this.navigating=this.opened=!1,this.mobileDevice||this.config.nativeDropdown?r.removeClass(this.container,"native-open"):(e=r.hasClass(this.container,"notice"),this.config.searchable&&!e&&(this.input.blur(),this.input.tabIndex=-1,this.searching=!1),e&&(r.removeClass(this.container,"notice"),this.notice.textContent=""),r.removeClass(this.container,"open"),r.removeClass(this.container,"native-open"),this.selected.setAttribute("aria-expanded",!1),this.tree.setAttribute("aria-hidden",!0),this.tree.setAttribute("aria-expanded",!1),r.truncate(this.tree),u.call(this),this.selected.focus())},e.prototype.enable=function(){this.disabled=!1,this.el.disabled=!1,this.selected.tabIndex=this.originalIndex,this.el.multiple&&r.each(this.tags,function(e,t){t.lastElementChild.tabIndex=0}),r.removeClass(this.container,"selectr-disabled")},e.prototype.disable=function(e){e||(this.el.disabled=!0),this.selected.tabIndex=-1,this.el.multiple&&r.each(this.tags,function(e,t){t.lastElementChild.tabIndex=-1}),this.disabled=!0,r.addClass(this.container,"selectr-disabled")},e.prototype.reset=function(){this.disabled||(this.clear(),this.setSelected(!0),r.each(this.defaultSelected,function(e,t){this.select(t)},this),this.emit("selectr.reset"))},e.prototype.clear=function(e){this.el.multiple?this.selectedIndexes.length&&(e=this.selectedIndexes.slice(),r.each(e,function(e,t){this.deselect(t)},this)):-1<this.selectedIndex&&this.deselect(this.selectedIndex,e),this.emit("selectr.clear")},e.prototype.serialise=function(e){var s=[];return r.each(this.options,function(e,t){var i={value:t.value,text:t.textContent};t.selected&&(i.selected=!0),t.disabled&&(i.disabled=!0),s[e]=i}),e?JSON.stringify(s):s},e.prototype.serialize=function(e){return this.serialise(e)},e.prototype.setPlaceholder=function(e){e=e||this.config.placeholder||this.el.getAttribute("placeholder"),this.options.length||(e=this.config.messages.noOptions),this.placeEl.innerHTML=e},e.prototype.paginate=function(){if(this.items.length){var i=this;return this.pages=this.items.map(function(e,t){return 0==t%i.config.pagination?i.items.slice(t,t+i.config.pagination):null}).filter(function(e){return e})}},e.prototype.setMessage=function(e,t){t&&this.close(),r.addClass(this.container,"notice"),this.notice.textContent=e},e.prototype.removeMessage=function(){r.removeClass(this.container,"notice"),this.notice.innerHTML=""},e.prototype.invert=function(){var e=r.rect(this.selected);e.top+e.height+this.tree.parentNode.offsetHeight>window.innerHeight?(r.addClass(this.container,"inverted"),this.isInverted=!0):(r.removeClass(this.container,"inverted"),this.isInverted=!1),this.optsRect=r.rect(this.tree)},e.prototype.getOptionByIndex=function(e){return this.options[e]},e.prototype.getOptionByValue=function(e){for(var t=!1,i=0,s=this.options.length;i<s;i++)if(this.options[i].value.trim()===e.toString().trim()){t=this.options[i];break}return t},e}("Selectr")}(e={exports:{}}),e.exports);!function(){var i="select[data-toggle='select-default']",s="select[data-toggle='select']",n="select[data-toggle='select-multi']",a="select[data-toggle='select-taggable']";const e=document.querySelectorAll(i);e.forEach(e=>{new h(e,{searchable:!1,defaultSelected:!1})});const t=document.querySelectorAll(s);t.forEach(e=>{new h(e,{defaultSelected:!1})});const l=document.querySelectorAll(n);l.forEach(e=>{new h(e,{multiple:!0,defaultSelected:!1})});const o=document.querySelectorAll(a);o.forEach(e=>{new h(e,{taggable:!0,defaultSelected:!1})}),document.addEventListener("DOMContentLoaded",()=>{"undefined"!=typeof Livewire&&Livewire.hook("message.processed",(e,t)=>{document.querySelectorAll(i).forEach(e=>{new h(e,{searchable:!1,defaultSelected:!1})}),document.querySelectorAll(s).forEach(e=>{new h(e,{defaultSelected:!1})}),document.querySelectorAll(n).forEach(e=>{new h(e,{multiple:!0,defaultSelected:!1})}),document.querySelectorAll(a).forEach(e=>{new h(e,{taggable:!0,defaultSelected:!1})})})})}()});