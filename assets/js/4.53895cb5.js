(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(t,e,n){"use strict";n.r(e);n(45),n(129);var o,a,r=n(130),s=n(46),i=n(131),l={name:"Detail",mixins:[s.a,i.a],data:function(){return{loaded:!1,loading:!0,tokenLink:"",tokenEmbed:"",currentNetwork:null,token:{}}},mounted:function(){this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{initDapp:(a=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.network.current=this.network.list[this.currentNetwork],t.prev=1,t.next=4,this.initWeb3(this.currentNetwork,!0);case 4:return t.next=6,this.getToken(this.getParam("address"));case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),alert(t.t0),document.location.href=this.$withBase("/");case 12:case"end":return t.stop()}},t,this,[[1,8]])})),function(){return a.apply(this,arguments)}),getToken:(o=Object(r.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.token.address=e,this.initContract(this.token.address),t.next=4,this.contractGet("name");case 4:return this.token.name=t.sent,t.next=7,this.contractGet("symbol");case 7:return this.token.symbol=t.sent,t.next=10,this.contractGet("decimals");case 10:this.token.decimals=t.sent.valueOf(),this.token.logo=this.getParam("logo")?decodeURIComponent(this.getParam("logo")):"",this.token.name&&this.token.symbol&&this.token.decimals?(this.loaded=!0,this.tokenLink=window.location.origin+this.$withBase("/detail.html?address=".concat(this.token.address,"&network=").concat(this.currentNetwork,"&logo=").concat(this.token.logo)),this.tokenEmbed='<iframe src="'.concat(this.tokenLink,'&embedded=1" width="510" height="320" style="border:none; overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>')):(alert("It seems that it is not a valid Token or you are on th wrong network"),this.loaded=!1),this.loading=!1;case 14:case"end":return t.stop()}},t,this)})),function(t){return o.apply(this,arguments)}),watchToken:function(){if(this.metamask.installed)if(this.metamask.netId===this.network.current.id)try{this.web3Provider.sendAsync({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:this.token.address,symbol:this.token.symbol,decimals:this.token.decimals,image:this.token.logo}},id:Math.round(1e5*Math.random())},function(t,e){t?console.log(t.message):e.result?console.log("Token added"):console.log("Some error")})}catch(t){console.log(t)}else alert("Your MetaMask in on the wrong network. Please switch on "+this.network.current.name+" and try again!");else alert("Please install MetaMask and try again!")},shareToken:function(){this.$refs.shareModal.show()}}},d=n(6),c=Object(d.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",[t.loading?n("b-col",{staticClass:"mt-4 p-0",attrs:{lg:"6","offset-lg":"3"}},[n("b-card",{attrs:{"bg-variant":"light"}},[n("ui--loader",{attrs:{loading:t.loading}})],1)],1):t._e(),t._v(" "),t.loading||t.loaded?t._e():n("b-col",{staticClass:"mt-4 p-0",attrs:{lg:"6","offset-lg":"3"}},[n("b-card",{attrs:{"bg-variant":"light"}},[n("blockquote",[t._v("Some error occurred")]),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("Try adding your token")])],1)],1),t._v(" "),t.loaded?n("b-col",{staticClass:"mt-4 p-0",attrs:{lg:"6","offset-lg":"3"}},[n("b-card",{attrs:{"bg-variant":"light"}},[n("b-media",[t.token.logo?n("b-img",{attrs:{slot:"aside",src:t.token.logo,rounded:"circle",width:"48",height:"48",alt:t.token.name},slot:"aside"}):t._e(),t._v(" "),n("h4",{staticClass:"card-title"},[t._v(t._s(t.token.name)+" ("+t._s(t.token.symbol)+")")]),t._v(" "),n("h6",{staticClass:"card-subtitle text-muted"},[t._v(t._s(t.token.address))]),t._v(" "),n("small",{staticClass:"text-muted"},[t._v("Decimals: "+t._s(t.token.decimals))])],1),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("b-button",{attrs:{variant:"link"},on:{click:t.watchToken}},[t._v("Add to MetaMask")]),t._v(" "),n("b-button",{attrs:{variant:"link",href:this.network.current.etherscanLink+"/token/"+t.token.address,target:"_blank"}},[t._v("\n                    View on Etherscan\n                ")]),t._v(" "),n("b-button",{attrs:{variant:"link"},on:{click:t.shareToken}},[t._v("\n                    Share or Embed\n                ")])],1)],1),t._v(" "),n("b-modal",{ref:"shareModal",attrs:{"hide-footer":"",title:"Share your token page"}},[n("b-row",[n("b-col",{attrs:{lg:"12"}},[n("b-form-group",{attrs:{label:"Share link","label-for":"tokenLink"}},[n("b-form-input",{attrs:{id:"tokenLink",name:"tokenLink",placeholder:"Your token link",size:"lg",readonly:""},model:{value:t.tokenLink,callback:function(e){t.tokenLink="string"==typeof e?e.trim():e},expression:"tokenLink"}})],1)],1),t._v(" "),n("b-col",{attrs:{lg:"12"}},[n("b-form-group",{attrs:{label:"Embed code","label-for":"tokenEmbed"}},[n("b-form-input",{attrs:{id:"tokenEmbed",name:"tokenEmbed",placeholder:"Your token embed",size:"lg",readonly:""},model:{value:t.tokenEmbed,callback:function(e){t.tokenEmbed="string"==typeof e?e.trim():e},expression:"tokenEmbed"}})],1)],1)],1)],1),t._v(" "),t.embedded?n("div",{staticClass:"text-right"},[n("b-link",{attrs:{href:"/",target:"_blank"}},[n("small",{staticClass:"text-muted"},[t._v("Powered by watch-token")])])],1):t._e()],1):t._e()],1)},[],!1,null,null,null);c.options.__file="Detail.vue";e.default=c.exports}}]);