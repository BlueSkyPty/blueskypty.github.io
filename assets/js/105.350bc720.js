(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{644:function(o,t,e){"use strict";e.r(t);var r=e(4),s=Object(r.a)({},(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("p",[o._v("记录一些 Magisk 相关的问题修复的过程。")]),o._v(" "),e("h2",{attrs:{id:"unsupported-unknown-image-format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unsupported-unknown-image-format"}},[o._v("#")]),o._v(" Unsupported/Unknown image format")]),o._v(" "),e("p",[o._v("本来打算更新一下 Magisk 到 v21.4 版本，选择直接安装，谁知道安装的时候提示 Unsupported/Unknown image format，\n然后返回主页的时候就提示运行环境需要修复之类的，没多想点了修复，然后自动重启之后就开不了机了，卡在 fastboot 页面。\n正好要出门，然后差不多从上午到傍晚都没用手机。")]),o._v(" "),e("p",[o._v("回到家后，首先自然是使用搜索引擎看看有没有遇到过同一问题的，在 Magisk 的 GitHub 仓库搜索到一个 "),e("a",{attrs:{href:"https://github.com/topjohnwu/Magisk/issues/1634",target:"_blank",rel:"noopener noreferrer"}},[o._v("issue"),e("OutboundLink")],1),o._v("，\n看了下感觉有点不太确定，还是先看下 Magisk 的原理是否和 boot.img 有关。")]),o._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[o._v("Magisk 相关原理")]),o._v(" "),e("blockquote",[e("p",[o._v("Xposed 框架的原理就是替换安卓系统的 app_process 文件，从而实现对系统的接管，通过回调模块的方式来达到不用修改 APK 就能改变其表现行为的目的。用通俗的话来说就是是在任意进程启动之前，能加载特定 Xposed 模块的代码，从而控制任意进程的行为。这些特定的 Xposed 模块，能在 App 进程启动之前执行特定代码。app_process 其实是存放在 systen/bin 目录下的一个程序，其作用就是启动 zygote，在 Android 中，zygote 是整个系统创建新进程的核心进程。Xposed 框架 Hook 了核心进程 Zygote，而其他应用启动都是从 Zygote 进程 fork 而来，就够达到针对系统上所有的应用程序进程的 Hook。举个例子，比如很著名的某微信模块，就是你在启动微信之前，首先要运行模块内的一些脚本，这些脚本会劫持微信这个 APP 里的所有行为，所以最终能够实现微信内容防撤回，自定义微信摇骰子和石头剪刀布。"),e("br"),o._v("\n而 magisk 的原理简单的说就是在系统 boot 时将其 img 挂载到自己的分区下，构建一个虚拟文件系统，和 system 分区无关，以不修改系统文件为前提，从而达到修改系统文件的效果。通过这种方式绕过谷歌安全机制，系统 OTA 升级，部分”被禁”软件都可以正常使用。而 Xposed 相反，框架一旦被加载就会修改系统，改动会影响在安全机制保护下的 APP，所以一些理财软件,比如某某银行可能就无法使用，这些应用对 root 权限非常敏感。"),e("br"),o._v("\n总的来说 Magisk 是通过 systemless 方式获取 root，xposed 则需要 root 才可以工作。所以 magisk 虽然集合了各种功能，但延展性上不如 Xposed，两者虽有一些相似之处，但本质上完全不同，Magisk 是创建新的分区而 Xposed 是直接修改系统文件。现在最好的结果就是二者相辅相成，按自己需要。"),e("br"),o._v(" "),e("a",{attrs:{href:"https://www.zdynb.cn/2020/magisk-jie-shao-ji-yun-zuo-yuan-li.html",target:"_blank",rel:"noopener noreferrer"}},[o._v("magisk 介绍及运行原理 | 张登友的博客"),e("OutboundLink")],1)])])]),o._v(" "),e("p",[o._v("所以猜想前面的错误提示 Unsupported/Unknown image format，这里应该是 boot.img 文件出现问题了，\n所以按照 issue 里面的内容，重刷当前 ROM 包里提取的 boot.img 应该就行了。")]),o._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[o._v("MIUI ROM 包下载")]),o._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.miui.com/download.html",target:"_blank",rel:"noopener noreferrer"}},[o._v("MIUI 下载 - MIUI 论坛"),e("OutboundLink")],1),o._v(" "),e("code",[o._v("官方")]),o._v(" "),e("code",[o._v("不全")])]),o._v(" "),e("li",[e("a",{attrs:{href:"https://xiaomirom.com/",target:"_blank",rel:"noopener noreferrer"}},[o._v("XiaomiROM.com - 小米 ROM 线刷包, 卡刷包的最新及历史版本下载"),e("OutboundLink")],1),o._v(" "),e("code",[o._v("第三方")]),o._v(" "),e("code",[o._v("推荐")])]),o._v(" "),e("li",[e("a",{attrs:{href:"https://roms.miuier.com/",target:"_blank",rel:"noopener noreferrer"}},[o._v("MIUI 官方 ROM 仓库--由米柚发烧友整理维护"),e("OutboundLink")],1),o._v(" "),e("code",[o._v("第三方")]),o._v(" "),e("code",[o._v("不全")])]),o._v(" "),e("li",[e("a",{attrs:{href:"https://miuiver.com/",target:"_blank",rel:"noopener noreferrer"}},[o._v("MIUI 历史版本 – 各机型 MIUI 旧版本下载索引"),e("OutboundLink")],1),o._v(" "),e("code",[o._v("第三方")]),o._v(" "),e("code",[o._v("需要注册登录")])])])]),o._v(" "),e("p",[o._v("一开始想的是使用电脑 fastboot 刷入 boot.img。")]),o._v(" "),e("p",[o._v("下载 Android "),e("a",{attrs:{href:"https://developer.android.com/studio/releases/platform-tools.html",target:"_blank",rel:"noopener noreferrer"}},[o._v("SDK Platform Tools"),e("OutboundLink")],1),o._v("，执行相关命令，注意路径。")]),o._v(" "),e("div",{staticClass:"language-cmd extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[o._v("fastboot flash boot boot.img\n> fastboot: error: cannot get boot partition size\n")])])]),e("p",[o._v("莫名其妙报错，具体原因没有再深究，意义不大，\n最后进 Recovery 直接使用 TWRP 刷入 image 的功能刷入了 boot.img，然后重新刷入 Magisk，重启，开机成功。")])])}),[],!1,null,null,null);t.default=s.exports}}]);