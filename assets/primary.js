!function(){var t={219:function(){class t extends HTMLElement{constructor(){super(),this.input=this.querySelector('input[type="search"]'),this.resetButton=this.querySelector('button[type="reset"]'),this.input&&(this.input.form.addEventListener("reset",this.onFormReset.bind(this)),this.input.addEventListener("input",debounce((t=>{this.onChange(t)}),300).bind(this)))}toggleResetButton(){const t=this.resetButton.classList.contains("hidden");this.input.value.length>0&&t?this.resetButton.classList.remove("hidden"):0!==this.input.value.length||t||this.resetButton.classList.add("hidden")}onChange(){this.toggleResetButton()}shouldResetForm(){return!document.querySelector('[aria-selected="true"] a')}onFormReset(t){t.preventDefault(),this.shouldResetForm()&&(this.input.value="",this.input.focus(),this.toggleResetButton())}}customElements.define("search-form",t)}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,n),r.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";n(219),document.getElementById("test").addEventListener("click",(function(){}))}()}();