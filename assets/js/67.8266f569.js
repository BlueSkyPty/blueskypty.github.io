(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{607:function(t,e,n){"use strict";n.r(e);var o=n(4),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("以往 JS 日期格式化似乎要写很多代码，今天看到一个一行代码搞定。")]),t._v(" "),n("p",[n("code",[t._v("new Date(timestamp + 8 * 3600 * 1000).toJSON().substr(0, 19).replace('T', ' ')")])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"}),n("p",[t._v("Date 的"),n("code",[t._v("toJSON")]),t._v("方法返回格林威治时间的 JSON 格式字符串，\n实际是使用"),n("code",[t._v("toISOString")]),t._v("方法的结果。\n字符串形如"),n("code",[t._v("2018-08-09T10:20:54.396Z")]),t._v("，\n转化为北京时间需要额外增加八个时区，\n我们需要取字符串前 19 位，然后把"),n("code",[t._v("T")]),t._v("替换为空格，即是我们需要的时间格式。")])]),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("p",[n("strong",[t._v("原文链接：")])]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000015992232",target:"_blank",rel:"noopener noreferrer"}},[t._v("一行 js 代码实现时间戳转时间格式 - 前端笔记 - SegmentFault 思否"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);