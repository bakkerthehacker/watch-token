(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{304:function(e,t,r){"use strict";r(166),r(10),r(62),r(92);t.a={data:function(){return{embedded:!1}},mounted:function(){this.embedded=this.getParam("embedded")||!1},methods:{makeToast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:r,solid:!0})},promisify:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return new Promise((function(t,n){e.apply(void 0,r.concat([function(e,r){e?n(e):t(r)}]))}))},getParam:function(e){var t={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(e,r,n){t[r]=void 0!==n?n:""})),e?t[e]?t[e]:null:t}}}},307:function(e,t,r){"use strict";r(166),r(63),r(91),r(93),r(90);var n=r(41),a=r(308),o=r.n(a),s=r(309);t.a={data:function(){return{web3:null,web3Provider:null,metamask:{installed:!1,netId:null},network:{default:o.a.defaultNetwork,current:null,map:{1:"mainnet",3:"ropsten",4:"rinkeby",42:"kovan",5:"goerli"},list:{mainnet:{web3Provider:"https://mainnet.infura.io/v3/".concat(o.a.infuraProjectId),etherscanLink:"https://etherscan.io",id:1,name:"Main Ethereum Network"},ropsten:{web3Provider:"https://ropsten.infura.io/v3/".concat(o.a.infuraProjectId),etherscanLink:"https://ropsten.etherscan.io",id:3,name:"Ropsten Test Network"},rinkeby:{web3Provider:"https://rinkeby.infura.io/v3/".concat(o.a.infuraProjectId),etherscanLink:"https://rinkeby.etherscan.io",id:4,name:"Rinkeby Test Network"},kovan:{web3Provider:"https://kovan.infura.io/v3/".concat(o.a.infuraProjectId),etherscanLink:"https://kovan.etherscan.io",id:42,name:"Kovan Test Network"},goerli:{web3Provider:"https://goerli.infura.io/v3/".concat(o.a.infuraProjectId),etherscanLink:"https://goerli.etherscan.io",id:5,name:"Goerli Test Network"}}},contracts:{token:null},instances:{token:null}}},methods:{initWeb3:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(Object.prototype.hasOwnProperty.call(r.network.list,e)){n.next=2;break}throw new Error("Failed initializing network ".concat(e,". Allowed values are ").concat(Object.keys(r.network.list),"."));case 2:if(!t||void 0===window.ethereum){n.next=17;break}return console.log("injected ethereum"),r.web3Provider=window.ethereum,r.web3=new Web3(r.web3Provider),r.metamask.installed=r.web3Provider.isMetaMask,n.next=9,r.promisify(r.web3.eth.getChainId);case 9:if(a=n.sent,r.metamask.netId=a,a===r.network.list[e].id){n.next=15;break}return r.network.current=r.network.list[r.network.map[a]],n.next=15,r.initWeb3(e,!1);case 15:n.next=21;break;case 17:console.log("provided ethereum"),r.network.current=r.network.list[e],r.web3Provider=new Web3.providers.HttpProvider(r.network.list[e].web3Provider),r.web3=new Web3(r.web3Provider);case 21:case"end":return n.stop()}}),n)})))()},initContract:function(e){console.log("init ".concat(e," on ").concat(this.network.current.name)),this.instances.token=new this.web3.eth.Contract(s,e)}}}},308:function(e,t){e.exports={description:"Create a link to your ERC20 Token or an embeddable Widget for your Website. Add your Token to DApp browsers or MetaMask.",base:"/watch-token/",plugins:[["@vuepress/google-analytics",{ga:"UA-115756440-2"}]],head:[["link",{rel:"icon",href:"/favicon.ico"}],["meta",{property:"og:type",content:"website"}],["meta",{property:"og:url",content:"https://vittominacori.github.io/watch-token"}],["meta",{property:"og:image",content:"https://vittominacori.github.io/watch-token/assets/images/watch-token.jpg"}],["meta",{property:"twitter:card",content:"summary_large_image"}],["meta",{property:"twitter:image",content:"https://vittominacori.github.io/watch-token/assets/images/watch-token.jpg"}],["meta",{property:"twitter:title",content:"WatchToken | Create a Widget for your ERC20 Token"}],["script",{src:"/assets/js/web3.min.js"}],["script",{src:"https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1",defer:!0}]],defaultNetwork:"mainnet",infuraProjectId:"be402bb729b2472ba828e013468dc626"}},309:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]')},314:function(e,t,r){"use strict";r.r(t);r(166),r(91),r(90);var n=r(41),a=r(304),o=r(307),s={name:"Generator",mixins:[a.a,o.a],data:function(){return{loaded:!1,loading:!1,currentNetwork:null,token:{address:"",name:"",symbol:"",decimals:"",logo:""}}},mounted:function(){this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{initDapp:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.network.current=e.network.list[e.currentNetwork],t.prev=1,t.next=4,e.initWeb3(e.currentNetwork,!0);case 4:e.$validator.extend("eth_address",{getMessage:function(e){return"Insert a valid token address."},validate:function(t){return e.web3.utils.isAddress(t)}}),e.token.address=e.getParam("address")||"",""!==e.token.address&&e.getToken(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),alert(t.t0),document.location.href=e.$withBase("/");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},getToken:function(){var e=this;this.$validator.validateAll().then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=15;break}return e.loaded=!1,e.loading=!0,e.initContract(e.token.address),t.next=6,e.promisify(e.instances.token.methods.name().call);case 6:return e.token.name=t.sent,t.next=9,e.promisify(e.instances.token.methods.symbol().call);case 9:return e.token.symbol=t.sent,t.next=12,e.promisify(e.instances.token.methods.decimals().call);case 12:e.token.decimals=t.sent.valueOf(),e.token.name&&e.token.symbol&&e.token.decimals?e.loaded=!0:(alert("It seems that it is not a valid Token or you are on the wrong network"),e.loaded=!1),e.loading=!1;case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},createTokenPage:function(){var e=this;this.$validator.validateAll().then((function(t){t&&(document.location.href=e.$withBase("detail.html?address=".concat(e.token.address,"&network=").concat(e.currentNetwork,"&logo=").concat(e.token.logo)))}))}}},i=r(40),l=Object(i.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",{staticClass:"p-0 pt-4"},[e.loaded||e.loading?e._e():r("b-col",{attrs:{lg:"6","offset-lg":"3"}},[r("b-card",{attrs:{"bg-variant":"light",title:"Create your ERC20 Token Widget"}},[r("p",[e._v(e._s(e.$frontmatter.description))]),e._v(" "),r("b-form",{staticClass:"mt-3",on:{submit:function(t){return t.preventDefault(),e.getToken(t)}}},[r("b-row",[r("b-col",{attrs:{lg:"12"}},[r("b-form-group",{attrs:{label:"Network","label-for":"network"}},[r("b-form-select",{attrs:{id:"network",size:"lg",disabled:e.loading},on:{input:e.initDapp},model:{value:e.currentNetwork,callback:function(t){e.currentNetwork=t},expression:"currentNetwork"}},e._l(e.network.list,(function(t,n){return r("option",{domProps:{value:n}},[e._v(e._s(t.name))])})),0)],1)],1),e._v(" "),r("b-col",{attrs:{lg:"12"}},[r("b-form-group",{attrs:{label:"Token address","label-for":"tokenAddress"}},[r("b-input-group",[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|eth_address",expression:"'required|eth_address'"}],class:{"is-invalid":e.errors.has("tokenAddress")},attrs:{name:"tokenAddress",placeholder:"Your token address",size:"lg",disabled:e.loading,"data-vv-as":"token address"},model:{value:e.token.address,callback:function(t){e.$set(e.token,"address","string"==typeof t?t.trim():t)},expression:"token.address"}}),e._v(" "),r("b-input-group-append",[r("b-button",{attrs:{disabled:e.loading,type:"submit",variant:"success"}},[r("b-icon-search")],1)],1)],1),e._v(" "),r("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("tokenAddress"),expression:"errors.has('tokenAddress')"}],staticClass:"text-danger"},[e._v("\n                                "+e._s(e.errors.first("tokenAddress"))+"\n                            ")])],1)],1)],1)],1)],1)],1),e._v(" "),e.loading?r("b-col",{attrs:{lg:"6","offset-lg":"3"}},[r("b-card",{attrs:{"bg-variant":"light"}},[r("ui--loader",{attrs:{loading:e.loading}})],1)],1):e._e(),e._v(" "),e.loaded?r("b-col",{attrs:{lg:"6","offset-lg":"3"}},[r("b-card",{attrs:{"bg-variant":"light"}},[r("b-form",{staticClass:"mt-3",on:{submit:function(t){return t.preventDefault(),e.createTokenPage(t)}}},[r("b-row",[r("b-col",{attrs:{lg:"12"}},[r("b-form-group",{attrs:{label:"Token address","label-for":"tokenAddress"}},[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|eth_address",expression:"'required|eth_address'"}],class:{"is-invalid":e.errors.has("tokenAddress")},attrs:{id:"tokenAddress",name:"tokenAddress",placeholder:"Your token address",size:"lg",readonly:"","data-vv-as":"token address"},model:{value:e.token.address,callback:function(t){e.$set(e.token,"address","string"==typeof t?t.trim():t)},expression:"token.address"}}),e._v(" "),r("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("tokenAddress"),expression:"errors.has('tokenAddress')"}],staticClass:"text-danger"},[e._v("\n                                "+e._s(e.errors.first("tokenAddress"))+"\n                            ")])],1)],1),e._v(" "),r("b-col",{attrs:{lg:"12"}},[r("b-form-group",{attrs:{label:"Token name","label-for":"tokenName"}},[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("tokenName")},attrs:{id:"tokenName",name:"tokenName",placeholder:"Your token name",size:"lg",readonly:"","data-vv-as":"token name"},model:{value:e.token.name,callback:function(t){e.$set(e.token,"name","string"==typeof t?t.trim():t)},expression:"token.name"}}),e._v(" "),r("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("tokenName"),expression:"errors.has('tokenName')"}],staticClass:"text-danger"},[e._v("\n                                "+e._s(e.errors.first("tokenName"))+"\n                            ")])],1)],1),e._v(" "),r("b-col",{attrs:{lg:"12"}},[r("b-form-group",{attrs:{label:"Token symbol","label-for":"tokenSymbol"}},[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("tokenSymbol")},attrs:{id:"tokenSymbol",name:"tokenSymbol",placeholder:"Your token symbol",size:"lg",readonly:"","data-vv-as":"token symbol"},model:{value:e.token.symbol,callback:function(t){e.$set(e.token,"symbol","string"==typeof t?t.trim():t)},expression:"token.symbol"}}),e._v(" "),r("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("tokenSymbol"),expression:"errors.has('tokenSymbol')"}],staticClass:"text-danger"},[e._v("\n                                "+e._s(e.errors.first("tokenSymbol"))+"\n                            ")])],1)],1),e._v(" "),r("b-col",{attrs:{lg:"12"}},[r("b-form-group",{attrs:{label:"Token decimals","label-for":"tokenDecimals"}},[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("tokenDecimals")},attrs:{id:"tokenDecimals",name:"tokenDecimals",placeholder:"Your token decimals",size:"lg",readonly:"",type:"number",min:"0",max:"36",step:"1","data-vv-as":"token decimals"},model:{value:e.token.decimals,callback:function(t){e.$set(e.token,"decimals","string"==typeof t?t.trim():t)},expression:"token.decimals"}}),e._v(" "),r("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("tokenDecimals"),expression:"errors.has('tokenDecimals')"}],staticClass:"text-danger"},[e._v("\n                                "+e._s(e.errors.first("tokenDecimals"))+"\n                            ")])],1)],1),e._v(" "),r("b-col",{attrs:{lg:"12"}},[r("b-form-group",{attrs:{label:"Token logo (optional)","label-for":"tokenLogo",description:"Suggested: a square SVG or PNG with transparent background (recommended greater than 64x64px)."}},[r("b-form-input",{attrs:{id:"tokenLogo",placeholder:"Your token logo link",size:"lg"},model:{value:e.token.logo,callback:function(t){e.$set(e.token,"logo","string"==typeof t?t.trim():t)},expression:"token.logo"}})],1)],1)],1),e._v(" "),r("b-row",[r("b-col",{staticClass:"mt-3",attrs:{lg:"12"}},[r("b-button",{attrs:{size:"lg",variant:"outline-success",block:"",type:"submit"}},[e._v("\n                            Create Token Widget\n                        ")])],1)],1)],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.default=l.exports}}]);