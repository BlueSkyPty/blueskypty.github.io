(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{613:function(t,e,_){"use strict";_.r(e);var v=_(4),r=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("简述一下工作中遇到的 Git 合并错了分支后的恢复问题。")]),t._v(" "),_("h2",{attrs:{id:"背景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),_("p",[t._v("交代一下背景，分支名简化")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("场景")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("分支")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("线上")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("master")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("测试环境")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("test_common(多开发分支混合合并分支)")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("本版本")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("dev_1")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("其他版本")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("dev_2")])])])]),t._v(" "),_("p",[t._v("假设 3 月 23 日某次将本版本 dev_1 分支合并入测试环境 test_common 分支准备测试环境发布时，\n解决冲突时，将 test_common 分支操作合并到了 dev_1 分支，而 test_common 分支中包含了其他版本 dev_2 分支的提交。")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"title"}),_("p",[t._v("dev_1 作为版本分支当时未做权限控制，如果有进行权限控制就能有效避免此类问题。")])]),_("p",[t._v("dev_2 分支中掺杂了其他版本分支代码，现在要恢复该版本自己的代码。")]),t._v(" "),_("h2",{attrs:{id:"解决思路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决思路"}},[t._v("#")]),t._v(" 解决思路")]),t._v(" "),_("h3",{attrs:{id:"关键词-cherry-pick"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关键词-cherry-pick"}},[t._v("#")]),t._v(" 关键词："),_("code",[t._v("Cherry-Pick")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"title"}),_("p",[t._v("建议使用 IDEA 进行 Git 操作，不仅有完善的 Git Version Control 图形界面工具，而且简单方便。")])]),_("h3",{attrs:{id:"具体流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#具体流程"}},[t._v("#")]),t._v(" 具体流程")]),t._v(" "),_("ol",[_("li",[t._v("从最新的"),_("code",[t._v("master")]),t._v("分支代码"),_("code",[t._v("checkout")]),t._v("新分支"),_("code",[t._v("dev_new")]),t._v("；")]),t._v(" "),_("li",[_("code",[t._v("dev_new")]),t._v(" "),_("code",[t._v("reset")]),t._v("回退到"),_("code",[t._v("dev_2")]),t._v("分支刚创建时"),_("code",[t._v("master")]),t._v("上的提交；\n"),_("ul",[_("li",[t._v("减少"),_("code",[t._v("cherry-pick")]),t._v("时的冲突；")]),t._v(" "),_("li",[t._v("冲突来源更清晰；")])])]),t._v(" "),_("li",[_("code",[t._v("cherry-pick")]),t._v(" "),_("code",[t._v("dev_2")]),t._v("上所有本版本提交到"),_("code",[t._v("dev_new")]),t._v("；\n"),_("ul",[_("li",[t._v("注意合并"),_("code",[t._v("merge")]),t._v("操作中，合并后其他分支的提交会直接显示在提交列表，而那个"),_("code",[t._v("Merge xxx")]),t._v("提交记录只是一个标识，\n本身不涉及文件修改，影响的是合并前的提交记录，合并后的提交记录反倒没有影响；")]),t._v(" "),_("li",[t._v("要排除 3 月 23 日合并过来的提交，可以通过用户名（本版本开发人员）筛选或者自己手动选择（IDEA 可多选按顺序"),_("code",[t._v("cherry-pick")]),t._v("）；")])])]),t._v(" "),_("li",[t._v("再合并最新的主干"),_("code",[t._v("master")]),t._v("分支即可。")])]),t._v(" "),_("h2",{attrs:{id:"最终处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最终处理"}},[t._v("#")]),t._v(" 最终处理")]),t._v(" "),_("p",[t._v("最后得知其他版本分支先于我们版本发布（测试后合并到 master 分支），可以不用进行以上操作，\n所以以上目前只是一个理论上的思路，留做记录，待日后参考。")]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"其他"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),_("p",[t._v("（20200817 更新）"),_("br"),t._v("\n使用 Git 沙盒 "),_("a",{attrs:{href:"https://learngitbranching.js.org/?NODEMO=&locale=zh_CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("Learn Git Branching"),_("OutboundLink")],1),t._v(" 测试了一下，合并的时候，会产生一个合并 commit，直接 "),_("code",[t._v("reset")]),t._v(" 到该合并提交的上一个提交即可撤回合并的更改，采用线的形式来理解 git 提交会比较好理解")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ty-peng/pic-bed/img/202003302049-git-merge-problem-20200818114147.png",alt:"pic-202003302049-git-merge-problem-20200818114147"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);