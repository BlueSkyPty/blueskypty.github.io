(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{591:function(t,e,a){"use strict";a.r(e);var n=a(4),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("今天开发的时候遇到一个 MySQL 插入数据报错的小问题。")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("### Error updating database.  Cause: com.mysql.jdbc.MysqlDataTruncation: Data truncation: Incorrect datetime value: '2099-12-31 00:00:00' for column 'recommend_end_time' at row 1\n### The error may involve RankingsGroupDao.insert-Inline\n### The error occurred while setting parameters\n### SQL: insert into t_rankings_group (`name`, `cover`,         `desc`, `group_type`, `status`,         `show_order`, `recommend_start_time`, `recommend_end_time`,         `create_time`, `update_time`)         values (?, ?,         ?, ?, ?,         ?, ?, ?,         ?, ?)\n### Cause: com.mysql.jdbc.MysqlDataTruncation: Data truncation: Incorrect datetime value: '2099-12-31 00:00:00' for column 'recommend_end_time' at row 1\n; ]; Data truncation: Incorrect datetime value: '2099-12-31 00:00:00' for column 'recommend_end_time' at row 1\n")])])]),a("p",[t._v("DDL：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("recommend_start_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'推荐开始时间'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("recommend_end_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'推荐结束时间'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("一开始没什么头绪，想着格式也没错啊，而且为什么 "),a("code",[t._v("recommend_start_time")]),t._v(" 也是同样的数据库类型和 Java 类型却可以。"),a("br"),t._v("\n复制语句到数据库执行，尝试换成和 "),a("code",[t._v("recommend_start_time")]),t._v(" 一样的日期插入数据，可以了。"),a("br"),t._v("\n考虑是不是日期太大了，取值范围不够，一查，果然。")]),t._v(" "),a("p",[t._v("附 MySQL 日期类型取值范围：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("类型名称")]),t._v(" "),a("th",[t._v("日期格式")]),t._v(" "),a("th",[t._v("日期范围")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("YEAR")]),t._v(" "),a("td",[t._v("YYYY")]),t._v(" "),a("td",[t._v("1901 ~ 2155")])]),t._v(" "),a("tr",[a("td",[t._v("TIME")]),t._v(" "),a("td",[t._v("HH:MM:SS")]),t._v(" "),a("td",[t._v("-838:59:59 ~ 838:59:59")])]),t._v(" "),a("tr",[a("td",[t._v("DATE")]),t._v(" "),a("td",[t._v("YYYY-MM-DD")]),t._v(" "),a("td",[t._v("1000-01-01 ~ 9999-12-31")])]),t._v(" "),a("tr",[a("td",[t._v("DATETIME")]),t._v(" "),a("td",[t._v("YYYY-MM-DD HH:MM:SS")]),t._v(" "),a("td",[t._v("1000-01-01 00:00:00 ~ 9999-12-31 23:59:59")])]),t._v(" "),a("tr",[a("td",[t._v("TIMESTAMP")]),t._v(" "),a("td",[t._v("YYYY-MM-DD HH:MM:SS")]),t._v(" "),a("td",[t._v("1970-01-01 00:00:01 UTC ~ 2038-01-19 03:14:07 UTC")])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/date-and-time-type-syntax.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL :: MySQL 5.7 Reference Manual :: 11.2.1 Date and Time Data Type Syntax"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);