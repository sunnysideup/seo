!function(e){function t(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var a={};t.m=e,t.c=a,t.i=function(e){return e},t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t){e.exports=React},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(0),c=n(s),u=a(4),f=n(u),d=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"seo-input field"},c.default.createElement("label",null,this.props.label),c.default.createElement("input",{type:"text",className:"text",name:this.props.name,value:this.props.value,onChange:this.props.onChange}),c.default.createElement(f.default,null))}}]),t}(c.default.Component);t.default=d},function(e,t){e.exports=jQuery},function(e,t){e.exports=ReactDom},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(0),s=function(e){return e&&e.__esModule?e:{default:e}}(i),c=function(e){function t(e){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),l(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"seo-input-progress"},s.default.createElement("div",{className:"bar"},s.default.createElement("div",{className:"indicator"})))}}]),t}(s.default.Component);t.default=c},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(2),c=n(s),u=a(0),f=n(u),d=a(1),p=n(d),m=a(10),h=n(m),b=a(8),g=n(b),v=a(9),w=n(v),y=void 0!==window.ss?window.ss:{};c.default.entwine("ss",function(e){y.seo={openImageEditor:function(t,a){var n=e("#insert-seo-media-react__dialog-wrapper");n.length||(n=e('<div id="insert-seo-media-react__dialog-wrapper" />'),e("body").append(n)),n.setElement({Type:t,Element:a}),n.open()}}});var E=function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={Name:e.name,Link:e.link,MetaTitle:e.seodata.MetaTitle,MetaDescription:e.seodata.MetaDescription,MetaRobotsFollow:e.seodata.MetaRobotsFollow,MetaRobotsIndex:e.seodata.MetaRobotsIndex,FacebookTitle:e.seodata.FacebookTitle,FacebookDescription:e.seodata.FacebookDescription,TwitterTitle:e.seodata.TwitterTitle,TwitterDescription:e.seodata.TwitterDescription,CurrentTab:"seo",FacebookImageURL:e.seodata.FacebookImageURL,FacebookImageID:e.seodata.FacebookImageID,TwitterImageURL:e.seodata.TwitterImageURL,TwitterImageID:e.seodata.TwitterImageID,HostName:e.seodata.HostName},a}return l(t,e),i(t,[{key:"getFieldName",value:function(e){return this.state.Name+"["+e+"]"}},{key:"openTab",value:function(e){this.setState({CurrentTab:e})}},{key:"setImageForType",value:function(e,t){"FacebookImage"===e?this.setState({FacebookImageID:t.ID,FacebookImageURL:t.url}):this.setState({TwitterImageID:t.ID,TwitterImageURL:t.url})}},{key:"handleInputChange",value:function(e,t){var a={};a[t]=e.target.value,this.setState(a)}},{key:"handleRadioChange",value:function(e,t){var a={};e.target.checked&&(a[t]=e.target.value,this.setState(a))}},{key:"openImageEditor",value:function(e){y.seo.openImageEditor(e,this)}},{key:"removeImage",value:function(e){"FacebookImage"===e?this.setState({FacebookImageID:0,FacebookImageURL:null}):this.setState({TwitterImageID:0,TwitterImageURL:null})}},{key:"render",value:function(){var e=this;return f.default.createElement("div",{className:"seo-editor"},f.default.createElement("nav",null,f.default.createElement("ul",null,f.default.createElement("li",null,f.default.createElement("a",{className:"seo"===this.state.CurrentTab?"active":"","data-href":"#seo",onClick:function(){e.openTab("seo")}},f.default.createElement("i",{className:"seo-rocket"}))),f.default.createElement("li",null,f.default.createElement("a",{className:"facebook"===this.state.CurrentTab?"active":"","data-href":"#facebook",onClick:function(){e.openTab("facebook")}},f.default.createElement("i",{className:"seo-facebook-square"}))),f.default.createElement("li",null,f.default.createElement("a",{className:"twitter"===this.state.CurrentTab?"active":"","data-href":"#twitter",onClick:function(){e.openTab("twitter")}},f.default.createElement("i",{className:"seo-twitter-square"}))),f.default.createElement("li",null,f.default.createElement("a",{className:"settings"===this.state.CurrentTab?"active":"","data-href":"#settings",onClick:function(){e.openTab("settings")}},f.default.createElement("i",{className:"seo-cog"}))))),f.default.createElement("div",{className:"seo-tab-container"},f.default.createElement("div",{className:"seo-tab "+("seo"===this.state.CurrentTab?"active":""),"data-tab":"seo"},f.default.createElement("h3",{className:"seo-tab__title"},"SEO Data"),f.default.createElement("div",{className:"seo-section"},f.default.createElement("div",{className:"fields"},f.default.createElement(p.default,{label:"Meta Title",value:this.state.MetaTitle,name:this.getFieldName("MetaTitle"),onChange:function(t){e.handleInputChange(t,"MetaTitle")}}),f.default.createElement(h.default,{label:"Meta Description",value:this.state.MetaDescription,name:this.getFieldName("MetaDescription"),onChange:function(t){e.handleInputChange(t,"MetaDescription")}})),f.default.createElement("div",{className:"preview-holder"},f.default.createElement("div",{className:"preview-card google"},f.default.createElement("h3",null,this.state.MetaTitle),f.default.createElement("p",{className:"preview-link"},this.state.Link),f.default.createElement("p",{className:"preview-description"},this.state.MetaDescription))))),f.default.createElement("div",{className:"seo-tab "+("facebook"===this.state.CurrentTab?"active":""),"data-tab":"facebook"},f.default.createElement("h3",{className:"seo-tab__title"},"Facebook"),f.default.createElement("div",{className:"seo-section"},f.default.createElement("div",{className:"fields"},f.default.createElement(p.default,{label:"Facebook Title",value:this.state.FacebookTitle,name:this.getFieldName("FacebookTitle"),onChange:function(t){e.handleInputChange(t,"FacebookTitle")}}),f.default.createElement(h.default,{label:"Facebook Description",value:this.state.FacebookDescription,name:this.getFieldName("FacebookDescription"),onChange:function(t){e.handleInputChange(t,"FacebookDescription")}}),f.default.createElement("input",{type:"hidden",value:this.state.FacebookImageID,name:this.getFieldName("FacebookImageID")})),f.default.createElement("div",{className:"preview-holder"},f.default.createElement("div",{className:"preview-card facebook"},f.default.createElement("div",{className:"preview-card--image"},f.default.createElement("div",{className:"preview-card--actions"},f.default.createElement("a",{className:"js-og-image-selector",onClick:function(){e.openImageEditor("FacebookImage")}},f.default.createElement("i",{className:"seo-pencil-square-o"})),f.default.createElement("a",{className:"js-og-image-selector",onClick:function(){e.removeImage("FacebookImage")}},f.default.createElement("i",{className:"seo-trash"}))),this.state.FacebookImageURL&&f.default.createElement("div",{className:"img"},f.default.createElement("img",{src:this.state.FacebookImageURL}))),f.default.createElement("h3",null,this.state.FacebookTitle),f.default.createElement("p",{className:"preview-description"},this.state.FacebookDescription),f.default.createElement("p",{className:"preview-link"},this.state.HostName))))),f.default.createElement("div",{className:"seo-tab "+("twitter"===this.state.CurrentTab?"active":""),"data-tab":"twitter"},f.default.createElement("h3",{className:"seo-tab__title"},"Twitter"),f.default.createElement("div",{className:"seo-section"},f.default.createElement("div",{className:"fields"},f.default.createElement(p.default,{label:"Twitter Title",value:this.state.TwitterTitle,name:this.getFieldName("TwitterTitle"),onChange:function(t){e.handleInputChange(t,"TwitterTitle")}}),f.default.createElement(h.default,{label:"Twitter Description",value:this.state.TwitterDescription,name:this.getFieldName("TwitterDescription"),onChange:function(t){e.handleInputChange(t,"TwitterDescription")}}),f.default.createElement("input",{type:"hidden",value:this.state.TwitterImageID,name:this.getFieldName("TwitterImageID")})),f.default.createElement("div",{className:"preview-holder"},f.default.createElement("div",{className:"preview-card twitter"},f.default.createElement("div",{className:"preview-contents"},f.default.createElement("div",{className:"preview-card--image"},f.default.createElement("div",{className:"preview-card--actions"},f.default.createElement("a",{className:"js-og-image-selector",onClick:function(){e.openImageEditor("TwitterImage")}},f.default.createElement("i",{className:"seo-pencil-square-o"})),f.default.createElement("a",{className:"js-og-image-selector",onClick:function(){e.removeImage("TwitterImage")}},f.default.createElement("i",{className:"seo-trash"}))),this.state.TwitterImageURL&&f.default.createElement("div",{className:"img"},f.default.createElement("img",{src:this.state.TwitterImageURL}))),f.default.createElement("h3",null,this.state.TwitterTitle),f.default.createElement("p",{className:"preview-description"},this.state.TwitterDescription),f.default.createElement("p",{className:"preview-link"},this.state.HostName)))))),f.default.createElement("div",{className:"seo-tab "+("settings"===this.state.CurrentTab?"active":""),"data-tab":"settings"},f.default.createElement("h3",{className:"seo-tab__title"},"Settings"),f.default.createElement(w.default,{label:"Meta robots index",value:this.state.MetaRobotsIndex,name:this.getFieldName("MetaRobotsIndex"),onChange:function(t){e.handleInputChange(t,"MetaRobotsIndex")}}),f.default.createElement(g.default,{label:"Meta robots follow",value:this.state.MetaRobotsFollow,name:this.getFieldName("MetaRobotsFollow"),onChange:function(t){e.handleRadioChange(t,"MetaRobotsFollow")}}),f.default.createElement(p.default,{label:"Canonical URL",value:this.state.CanonicalURL,name:this.getFieldName("CanonicalURL"),onChange:function(t){e.handleInputChange(t,"CanonicalURL")}}),f.default.createElement("p",null,"The canonical URL that this page should point to, leave empty to default to permalink.",f.default.createElement("a",{href:"https://webmasters.googleblog.com/2009/12/handling-legitimate-cross-domain.html",target:"_blank"},"Cross domain canonical")," supported too."))))}}]),t}(f.default.Component);t.default=E},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=a(2),r=n(o),l=a(0),i=n(l),s=a(3),c=n(s),u=a(12),f=a(11),d=(0,f.provideInjector)(window.InsertMediaModal.default);r.default.entwine("ss",function(e){e("#insert-seo-media-react__dialog-wrapper").entwine({Element:null,ImageType:null,Data:{},onunmatch:function(){this._clearModal()},_clearModal:function(){c.default.unmountComponentAtNode(this[0])},open:function(){this._renderModal(!0)},close:function(){this._renderModal(!1)},setTypeField:function(e){this.ImageType=e,console.log(this.ImageType)},_renderModal:function(e){var t=this,a=function(){return t.close()},n=function(){return t._handleInsert.apply(t,arguments)},o=window.ss.store,r=window.ss.apolloClient,l={};delete l.url,c.default.render(i.default.createElement(u.ApolloProvider,{store:o,client:r},i.default.createElement(d,{title:!1,type:"insert-media",show:e,onInsert:n,onHide:a,bodyClassName:"modal__dialog",className:"insert-media-react__dialog-wrapper",requireLinkText:!1,fileAttributes:l})),this[0])},_handleInsert:function(e,t){var a=!1;this.setData(Object.assign({},e,t));try{if("image"!==(t?t.category:"image"))throw"Wrong file type";a=this.insertImage()}catch(e){this.statusMessage(e,"bad")}return a&&this.close(),Promise.resolve()},insertImage:function(){var e=this.getElement();if(!e)return!1;var t=this.getData();return e.Element.setImageForType(e.Type,t),!0},statusMessage:function(t,a){var n=e("<div/>").text(t).html();e.noticeAdd({text:n,type:a,stayTime:5e3,inEffect:{left:"0",opacity:"show"}})}})})},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=a(2),r=n(o),l=a(0),i=n(l),s=a(3),c=n(s),u=a(5),f=n(u);a(6),r.default.entwine("ss",function(e){e(".js-seo-editor:visible").entwine({onunmatch:function(){this._super(),c.default.unmountComponentAtNode(this[0])},onmatch:function(){this._super(),this.refresh()},refresh:function(){var e=this.data("name"),t=this.data("seo"),a=this.data("recordlink");c.default.render(i.default.createElement(f.default,{link:a,name:e,seodata:t}),this[0])}})})},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(0),c=n(s),u=a(1),f=n(u),d=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"seo-input field radio"},c.default.createElement("label",null,this.props.label),c.default.createElement("div",{className:"radio-options"},c.default.createElement("label",null,c.default.createElement("input",{type:"radio",value:"follow",name:this.props.name,onClick:this.props.onChange,checked:"follow"===this.props.value}),"Follow"),c.default.createElement("label",null,c.default.createElement("input",{type:"radio",value:"no-follow",name:this.props.name,onClick:this.props.onChange,checked:"no-follow"===this.props.value}),"No Follow")))}}]),t}(f.default);t.default=d},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(0),c=n(s),u=a(1),f=n(u),d=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"seo-input field"},c.default.createElement("label",null,this.props.label),c.default.createElement("select",{className:"dropdown",name:this.props.name,onChange:this.props.onChange},c.default.createElement("option",{value:"",selected:""==this.props.value},"none"),c.default.createElement("option",{value:"index",selected:"index"==this.props.value},"index"),c.default.createElement("option",{value:"noindex",selected:"noindex"==this.props.value},"noindex")),c.default.createElement("p",null,"Note: This setting will be overridden by the site config's search engine visibility setting"))}}]),t}(f.default);t.default=d},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(0),c=n(s),u=a(1),f=n(u),d=a(4),p=n(d),m=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"seo-input field"},c.default.createElement("label",null,this.props.label),c.default.createElement("textarea",{className:"text",name:this.props.name,onChange:this.props.onChange},this.props.value),c.default.createElement(p.default,null))}}]),t}(f.default);t.default=m},function(e,t){e.exports=Injector},function(e,t){e.exports=ReactApollo}]);