(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{637:function(t,r,e){"use strict";e.r(r);var s=e(4),a=Object(s.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"scrcpy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scrcpy"}},[t._v("#")]),t._v(" Scrcpy")]),t._v(" "),e("blockquote",[e("p",[t._v("This application provides display and control of Android devices connected on USB (or over TCP/IP). It does not require any root access. It works on GNU/Linux, Windows and macOS.")])]),t._v(" "),e("p",[e("strong",[t._v("Scrcpy")]),t._v(" 可以将安卓手机的画面显示到电脑上，而且可以进行操控，进行多屏协同，不仅让很多事情变得更有效率，而且多了很多可玩性。\n它可以跨多平台（"),e("em",[t._v("GNU / Linux，Windows 和 macOS")]),t._v("）运行，支持有线 / 无线连接、鼠标控制、键盘输入、电脑剪切板复制粘贴、拖放文件传输到手机、以及拖放 APK 文件进行安装等。\n因为是开源的，你甚至可以自己为它添加更多新特性。")]),t._v(" "),e("ul",[e("li",[t._v("优势：\n"),e("code",[t._v("开源")]),t._v(" "),e("code",[t._v("免费")]),t._v(" "),e("code",[t._v("轻量")]),t._v(" "),e("code",[t._v("性能")]),t._v(" "),e("code",[t._v("画质")]),t._v(" "),e("code",[t._v("低延迟")]),t._v(" "),e("code",[t._v("启动快")]),t._v(" "),e("code",[t._v("非侵入")])]),t._v(" "),e("li",[t._v("不足：\n"),e("code",[t._v("只支持 Android")]),t._v(" "),e("code",[t._v("命令行操作门槛相对较高")])])]),t._v(" "),e("h3",{attrs:{id:"通过命令行使用-scrcpy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过命令行使用-scrcpy"}},[t._v("#")]),t._v(" 通过命令行使用 Scrcpy")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/Genymobile/scrcpy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scrcpy GitHub 仓库"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://github.com/Genymobile/scrcpy/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("最新 Release 下载"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"title"},[t._v("运行要求")]),e("p",[t._v("安卓系统版本 >= Android 5.0 API 21"),e("br"),t._v("\n开启 "),e("a",{attrs:{href:"https://developer.android.com/studio/command-line/adb.html#Enabling",target:"_blank",rel:"noopener noreferrer"}},[t._v("开发者选项"),e("OutboundLink")],1),t._v(" 中的 "),e("code",[t._v("USB 调试")]),t._v(" 和 "),e("code",[t._v("USB 调试（安全设置）")])])]),e("p",[t._v("Windows 下直接下载对应系统版本的 zip 压缩包解压到本地")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"},[t._v("TIP")]),e("p",[t._v("Scrcpy 本身是基于命令行的，如果不想每次打开终端都要进入 Scrcpy 文件夹执行命令，可以将该路径添加到环境变量")])]),e("p",[t._v("打开终端，进入 Scrcpy 文件夹，使用 USB 数据线连接电脑和手机，然后终端中运行 "),e("code",[t._v("scrcpy")]),t._v("，即可以默认模式启动 Scrcpy，如果连接正确，你的手机屏幕内容将显示在你的电脑屏幕上，\n现在，你可以开始你的操作了。")]),t._v(" "),e("p",[t._v("一些常用按键映射：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("鼠标右键")]),t._v(" -> "),e("code",[t._v("返回")])]),t._v(" "),e("li",[e("code",[t._v("鼠标中键")]),t._v(" -> "),e("code",[t._v("主页")])]),t._v(" "),e("li",[e("code",[t._v("Ctrl")]),t._v(" + "),e("code",[t._v("鼠标左键")]),t._v(" -> "),e("code",[t._v("缩放")])])]),t._v(" "),e("h4",{attrs:{id:"自定义配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义配置"}},[t._v("#")]),t._v(" "),e("strong",[t._v("自定义配置")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("无线连接")]),t._v(" "),e("ol",[e("li",[t._v("和电脑连接同一 WIFI（或同一局域网内）")]),t._v(" "),e("li",[t._v("获取手机 IP（设置 -> 关于手机 -> 状态）")]),t._v(" "),e("li",[t._v("启用无线 ADB 端口（插入数据线连接后执行 "),e("code",[t._v("adb tcpip 5555")]),t._v("）")]),t._v(" "),e("li",[t._v("拔掉数据线")]),t._v(" "),e("li",[t._v("输入 ADB 命令连接手机："),e("code",[t._v("adb connect DEVICE_IP:5555")]),t._v("（替换 DEVICE_IP 为你的手机 IP）")]),t._v(" "),e("li",[t._v("和之前一样运行 scrcpy")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"},[t._v("TIP")]),e("p",[t._v("在手机已 ROOT 且有终端的情况下，前四步可用如下命令替代（好处是不用数据线连接电脑）：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启用无线 ADB 端口")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v("\nsetprop service.adb.tcp.port "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5555")]),t._v("\nstop adbd\nstart adbd\n")])])]),e("p",[t._v("如果想关闭：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭无线 ADB 端口")]),t._v("\nsetprop service.adb.tcp.port -1\nstop adbd\nstart adbd\n")])])])])]),t._v(" "),e("li",[e("p",[t._v("其他有用到的时候再补，可以自行查看项目文档")])])]),t._v(" "),e("h3",{attrs:{id:"scrcpy-图形界面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scrcpy-图形界面"}},[t._v("#")]),t._v(" Scrcpy 图形界面")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/Tomotoes/scrcpy-gui",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tomotoes/scrcpy-gui"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("配置参数界面化，暂时没用过")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/barry-ran/QtScrcpy",target:"_blank",rel:"noopener noreferrer"}},[t._v("barry-ran/QtScrcpy"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("有很多其他特性，但是快捷键用不习惯")])])])]),t._v(" "),e("h2",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),e("h3",{attrs:{id:"_1-虫洞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-虫洞"}},[t._v("#")]),t._v(" 1. "),e("a",{attrs:{href:"https://er.run/",target:"_blank",rel:"noopener noreferrer"}},[t._v("虫洞"),e("OutboundLink")],1)]),t._v(" "),e("img",{staticStyle:{margin:"0 auto",display:"block"},attrs:{src:"https://cdn.jsdelivr.net/gh/ty-peng/pic-bed/img/202008261312-control-phone-on-pc-20200826145811.png",alt:"202008261312-control-phone-on-pc-20200826145811"}}),t._v(" "),e("img",{staticStyle:{margin:"0 auto",display:"block"},attrs:{src:"https://cdn.jsdelivr.net/gh/ty-peng/pic-bed/img/202008261312-control-phone-on-pc-20200826145835.png",alt:"202008261312-control-phone-on-pc-20200826145835"}}),t._v(" "),e("ul",[e("li",[t._v("优势：\n"),e("code",[t._v("支持 Android 和 iOS")])]),t._v(" "),e("li",[t._v("不足：\n"),e("code",[t._v("安卓需要同时安装桌面和移动端")]),t._v(" "),e("code",[t._v("安卓部分功能和 iOS 功能收费")])])])])}),[],!1,null,null,null);r.default=a.exports}}]);