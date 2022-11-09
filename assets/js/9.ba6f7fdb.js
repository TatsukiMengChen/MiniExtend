(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{280:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"miniextend-console"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#miniextend-console"}},[t._v("#")]),t._v(" miniExtend Console")]),t._v(" "),a("p",[t._v("这里的 Console 并不指真实的程序控制台，而是指日志，如图所示：\n"),a("img",{attrs:{src:"/static/console.png",alt:"日志"}}),t._v("\n真正在控制台输出的信息几乎是不可见的，但是日志中的信息是可见的。")]),t._v(" "),a("h2",{attrs:{id:"前置事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置事项"}},[t._v("#")]),t._v(" 前置事项")]),t._v(" "),a("p",[t._v("在开发者工具中配置“测试”按钮（"),a("img",{staticStyle:{width:"52px",height:"17px"},attrs:{src:"/static/test-button.png"}}),t._v("）以启用日志。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("该按钮偶发显示异常，为保证日志功能正常启用，可多点几次以刷新状态。")])]),t._v(" "),a("p",[t._v("在玩法模式下按“日志”按钮（"),a("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:"/static/console-button.png"}}),t._v("）以打开日志窗口。")]),t._v(" "),a("h2",{attrs:{id:"函数介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数介绍"}},[t._v("#")]),t._v(" 函数介绍")]),t._v(" "),a("h3",{attrs:{id:"logtag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logtag"}},[t._v("#")]),t._v(" "),a("code",[t._v("logtag")])]),t._v(" "),a("p",[t._v("函数原型：")]),t._v(" "),a("div",{staticClass:"language-lua extra-class"},[a("pre",{pre:!0,attrs:{class:"language-lua"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("logtag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("在日志以 "),a("code",[t._v("tag")]),t._v(" 为标签格式化输出 "),a("code",[t._v("...")]),t._v("，格式化方式与 Lua 基本函数 "),a("code",[t._v("print(...)")]),t._v(" 相同。")]),t._v(" "),a("p",[t._v("如果 "),a("code",[t._v("tag")]),t._v(" 不是字符串，结果会令人疑惑。")]),t._v(" "),a("h3",{attrs:{id:"log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[t._v("#")]),t._v(" "),a("code",[t._v("log")])]),t._v(" "),a("p",[t._v("函数原型：")]),t._v(" "),a("div",{staticClass:"language-lua extra-class"},[a("pre",{pre:!0,attrs:{class:"language-lua"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("logtag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"global"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("在日志输出日志，标签为 "),a("code",[t._v("global")]),t._v(" 。")]),t._v(" "),a("p",[t._v("等价于 "),a("code",[t._v('Console:logtag("global", ...)')]),t._v(" 。")]),t._v(" "),a("h3",{attrs:{id:"warn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#warn"}},[t._v("#")]),t._v(" "),a("code",[t._v("warn")])]),t._v(" "),a("p",[t._v("函数原型：")]),t._v(" "),a("div",{staticClass:"language-lua extra-class"},[a("pre",{pre:!0,attrs:{class:"language-lua"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("在日志输出警告信息 "),a("code",[t._v("message")]),t._v(" ，标签为 "),a("code",[t._v("warning")]),t._v(" 。")]),t._v(" "),a("p",[t._v("这和"),a("span",{attrs:{title:"这个 warn 函数指全局函数 warn，参见 difference.html"}},[t._v(" Lua 标准函数 "),a("code",[t._v("warn")])]),t._v("很像，但 "),a("code",[t._v("Console:warn(message)")]),t._v(" 会以黄色高亮显示警告。")]),t._v(" "),a("h3",{attrs:{id:"error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error"}},[t._v("#")]),t._v(" "),a("code",[t._v("error")])]),t._v(" "),a("p",[t._v("函数原型：")]),t._v(" "),a("div",{staticClass:"language-lua extra-class"},[a("pre",{pre:!0,attrs:{class:"language-lua"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("在日志输出错误信息，标签为 "),a("code",[t._v("error")]),t._v(" 。")]),t._v(" "),a("p",[t._v("该函数不会真正抛出错误，只是输出了错误信息 "),a("code",[t._v("message")]),t._v(" ，代码会正常运行。")]),t._v(" "),a("p",[t._v("该函数会以红色高亮显示警告。")]),t._v(" "),a("h3",{attrs:{id:"clear"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clear"}},[t._v("#")]),t._v(" "),a("code",[t._v("clear")])]),t._v(" "),a("p",[t._v("函数原型：")]),t._v(" "),a("div",{staticClass:"language-lua extra-class"},[a("pre",{pre:!0,attrs:{class:"language-lua"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("清空日志，效果同在控制台点击“清空日志”按钮。")])])}),[],!1,null,null,null);a.default=e.exports}}]);