(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{464:function(t,e,s){"use strict";e.a={videos:{1:{title:"狂おしいほど僕には美しい - majiko",url:"https://vodkgeyttp8.vod.126.net/cloudmusic/54d6/core/6d56/c214191ded3a802ddd5ae96a5d5f5cf1.mp4?wsSecret=6b6de158cf35b9ab61671c2e450e3c23&wsTime=1598698281",pic:"https://cdn.jsdelivr.net/gh/ty-peng/ty-peng.github.io/img/cover/video/狂おしいほど僕には美しい - majiko.jpg"}},options:{}}},465:function(t,e,s){},522:function(t,e,s){"use strict";var n=s(465);s.n(n).a},555:function(t,e,s){"use strict";s.r(e);s(230);var n=s(464),r={components:{"remote-css":{render:function(t){return t("link",{attrs:{rel:"stylesheet",href:this.href}})},props:{href:{type:String,required:!0}}},"remote-js":{render:function(t){return t("script",{attrs:{type:"text/javascript",src:this.src}})},props:{src:{type:String,required:!0}}}},props:{optionsId:{type:Object,default:null},videoId:{type:Number,default:null},category:{type:String,default:"video"}},data:function(){return{options:{video:{url:""},preload:"metadata",contextmenu:[{text:"Life's Monent",link:"/"},{text:">>> 更多视频",link:"/tag/video/"}]}}},methods:{load:function(){this.options.container=this.$refs.dplayer,this.dplayer=new DPlayer(this.options)}},mounted:function(){var t=this,e=document.querySelector("#dplayer-container"),s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js",e.appendChild(s),s.onload=function(){switch(t.videoId&&(t.options.video=n.a.videos[t.videoId]),t.category){case"music":t.options.contextmenu.push({text:">>> 更多音乐推荐",link:"/tag/music/"})}if(t.optionsId){var e=n.a.options[t.optionsId];Object.assign(t.options,e)}t.load()}},beforeDestroy:function(){this.dplayer&&this.dplayer.destroy()}},i=(s(522),s(4)),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"dplayer-container"}},[s("remote-css",{attrs:{href:"https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.css"}}),t._v(" "),s("remote-js",{attrs:{src:"https://cdn.jsdelivr.net/npm/flv.js/dist/flv.min.js"}}),t._v(" "),s("remote-js",{attrs:{src:"https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js"}}),t._v(" "),s("remote-js",{attrs:{src:"https://cdn.jsdelivr.net/npm/dashjs/dist/dash.all.min.js"}}),t._v(" "),s("remote-js",{attrs:{src:"https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js"}}),t._v(" "),s("div",{staticClass:"dplayer-wrap"},[s("p",[t._v(t._s(t.options.video.title||""))]),t._v(" "),s("div",{ref:"dplayer",staticClass:"dplayer"},[s("button",{staticClass:"load",on:{click:t.load}},[t._v(">>>加载视频")])])])],1)}),[],!1,null,"8fc676a8",null);e.default=o.exports}}]);