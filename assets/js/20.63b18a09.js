(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{464:function(t,e,o){"use strict";e.a={videos:{1:{title:"狂おしいほど僕には美しい - majiko",url:"https://vodkgeyttp8.vod.126.net/cloudmusic/54d6/core/6d56/c214191ded3a802ddd5ae96a5d5f5cf1.mp4?wsSecret=6b6de158cf35b9ab61671c2e450e3c23&wsTime=1598698281",pic:"https://cdn.jsdelivr.net/gh/ty-peng/ty-peng.github.io/img/cover/video/狂おしいほど僕には美しい - majiko.jpg"}},options:{}}},558:function(t,e,o){"use strict";o.r(e);o(230);var i=o(464),s={props:{optionsId:{type:Object,default:null},videoId:{type:Number,default:null},category:{type:String,default:"video"}},data:function(){return{options:{video:{url:"",pic:"",type:"video/mp4"},preload:"metadata",contextmenu:[{text:"Life's Monent",link:"/"},{text:">>> 更多视频",link:"/categories/video/"}]}}},methods:{init:function(){switch(this.videoId&&(this.options.video=i.a.videos[this.videoId]),this.category){case"music":this.options.contextmenu.push({text:">>> 更多音乐推荐",link:"/tags/music/"})}if(this.optionsId){var t=i.a.options[this.optionsId];Object.assign(this.options,t)}}},mounted:function(){this.init()}},n=o(4),d=Object(n.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("p",[t._v(t._s(t.options.video.title))]),t._v(" "),o("video",{attrs:{width:"100%",controls:"",preload:t.options.preload,poster:t.options.video.pic}},[o("source",{attrs:{src:t.options.video.url,type:t.options.video.type}}),t._v("\n    Your browser does not support the video tag.\n  ")])])}),[],!1,null,"fb8c395a",null);e.default=d.exports}}]);