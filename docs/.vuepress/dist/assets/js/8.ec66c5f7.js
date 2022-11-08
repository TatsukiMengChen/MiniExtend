(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{284:function(_,v,t){"use strict";t.r(v);var s=t(14),i=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"api-简介-约定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#api-简介-约定"}},[_._v("#")]),_._v(" API 简介&约定")]),_._v(" "),v("p",[_._v("miniExtend 是一个为"),v("span",{attrs:{title:"理论上支持任何使用迷你世界引擎的软件，例如迷你编程"}},[_._v("迷你世界")]),_._v("脚本设计的 lua 库。\n使用 miniExtend 可以极大简化迷你世界脚本开发。\n使用 miniExtend 并不困难。")]),_._v(" "),v("details",{staticClass:"custom-block details"},[v("summary",[_._v("👈点击查看 miniExtend 的优势")]),_._v(" "),v("p",[_._v("miniExtend 允许你像正常一样调用 lua 基本函数，例如 "),v("code",[_._v("os.execute")]),_._v(" 函数，该函数正常情况是不能"),v("strong",[_._v("直接")]),_._v("调用的。")]),_._v(" "),v("p",[_._v("miniExtend 允许你将脚本代码集中在"),v("strong",[_._v("全局作用域")]),_._v("下管理，只需在 "),v("em",[_._v("UI 作用域")]),_._v("下添加简短的脚本并稍作修改即可，而不是在各个_作用域_之间来回切换，通常无法"),v("strong",[_._v("直接")]),_._v("在全局作用域下绑定绑定UI 事件。")]),_._v(" "),v("p",[_._v("miniExtend 允许你执行基于对象的迷你世界 API ，这甚至允许你将原来所需的 3 个参数降至 0 个！一个例子是 "),v("code",[_._v("CustomUI.UIView.Element:show()")]),_._v(" ，首先根据对象自身属性确定 2 个参数，然后根据 "),v("code",[_._v('_G2["__OBJID"]')]),_._v(" 再确定 1 个参数！")]),_._v(" "),v("p",[_._v("阅读源代码，你会发现更多有趣的内容！")])]),_._v(" "),v("h2",{attrs:{id:"代码规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代码规范"}},[_._v("#")]),_._v(" 代码规范")]),_._v(" "),v("ul",[v("li",[_._v("使用 "),v("code",[_._v(":")]),_._v(" 而不是 "),v("code",[_._v(".")]),_._v(" 调用 miniExtend 作用域和对象的函数。")]),_._v(" "),v("li",[_._v("如果没有说明对象属性的意义，不要修改这个属性，否则可能导致错误。")]),_._v(" "),v("li",[_._v("miniExtend 不经常检查参数是否正确，请保证实参的正确性！")])]),_._v(" "),v("h2",{attrs:{id:"定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[_._v("#")]),_._v(" 定义")]),_._v(" "),v("h3",{attrs:{id:"脚本作用域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#脚本作用域"}},[_._v("#")]),_._v(" 脚本作用域")]),_._v(" "),v("p",[_._v("脚本文件所处的位置叫做脚本文件的作用域。")]),_._v(" "),v("p",[_._v("所处的位置和脚本文件在文件结构上的位置有关，例如有的脚本文件在"),v("span",{attrs:{title:"这里包括子文件夹，后同"}},[_._v("地图文件夹")]),_._v("中，而有的在 UI 界面文件夹中。")]),_._v(" "),v("p",[_._v("所处的位置决定了脚本在什么时候执行，以及脚本执行时的环境，这就是定义它的意义。")]),_._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[_._v("WARNING")]),_._v(" "),v("p",[_._v("不同的脚本作用域的 "),v("code",[_._v("_G")]),_._v(" 是不同的，所以"),v("strong",[_._v("不同作用域下的脚本是隔离的")]),_._v("，但有其它方式来让它们交流。")]),_._v(" "),v("p",[_._v("更多内容详见 "),v("code",[_._v("core.lua")]),_._v(" 。")])]),_._v(" "),v("p",[_._v("在 miniExtend ，一般将作用域分为两类：")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("全局作用域")]),_._v("：该脚本文件位于地图文件夹中，辨别方式是"),v("strong",[_._v("其在脚本编辑器创建")]),_._v("，其性质是该作用域下的文件总是在"),v("span",{attrs:{title:"这里指开发者可编辑的脚本，可能不包含插件包，这有待测试"}},[_._v("可见脚本")]),_._v("中最先执行。")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("UI 作用域")]),_._v("：该脚本文件位于自定义 UI 界面文件夹中，辨别方式是"),v("strong",[_._v("其在 UI 编辑器中创建")]),_._v("，其性质是该作用域下的文件晚于全局作用域下的脚本文件执行，脚本可以使用 "),v("code",[_._v("ScriptSupportEvent")]),_._v(" 监听所属 UI 界面的事件，全局作用域和其它 UI 作用域无法使用 "),v("code",[_._v("ScriptSupportEvent")])])])]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("这可能很难理解")]),_._v(" "),v("p",[_._v("没关系！你只需知道如何区分全局作用域和 UI 作用域即可！")]),_._v(" "),v("p",[_._v("除非你是 miniExtend 代码仓库贡献者，那样的话建议你理解它！")])]),_._v(" "),v("h3",{attrs:{id:"游戏帧"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#游戏帧"}},[_._v("#")]),_._v(" 游戏帧")]),_._v(" "),v("p",[_._v("游戏帧是游戏的基本事件单位，游戏帧从 0 开始（以下简称“帧”）。")]),_._v(" "),v("p",[_._v("游戏数据每帧改变一次。")]),_._v(" "),v("p",[_._v("从第 0 帧开始，平均每 "),v("strong",[_._v("0.05秒")]),_._v(" 会进入新的游戏帧。每个游戏帧的时长是无规律，不确定的，这可能与游戏的计算量有关。")]),_._v(" "),v("p",[_._v("可以近似的把 1 帧当做 0.05s ，但要知道它并不是真正的 0.05s 。记住，不要利用游戏帧来做精密的计时器，类似的功能可以用 "),v("code",[_._v("os.clock")]),_._v(" 替代。")]),_._v(" "),v("p",[_._v("对于延续性事件（例如玩家挖掘方块），每一帧会触发一次事件，这也体现了游戏帧的意义。")]),_._v(" "),v("h2",{attrs:{id:"代码示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[_._v("#")]),_._v(" 代码示例")]),_._v(" "),v("p",[_._v("本文档包含了一些代码示例，让它们正确运行的前提是你"),v("strong",[_._v("已经")]),_._v("搭建好 miniExtend 环境，有的代码可能会有其它要求。")]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),v("p",[_._v("对于 UI 实例，在代码开头会列出一些局部变量，表示 UI 界面或元件的 id ，"),v("strong",[_._v("不要忘记替换它们")]),_._v("！")])]),_._v(" "),v("h2",{attrs:{id:"关键字"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关键字"}},[_._v("#")]),_._v(" 关键字")]),_._v(" "),v("p",[_._v("以下是 miniExtend 关键字，避免意外地使用它们作为自己的标识符，改变脚本添加的函数的意义不会影响 miniExtend 的使用，但有的 API 可能会使用这些函数从而导致脚本无法正常运行。")]),_._v(" "),v("ul",[v("li",[_._v("脚本添加的函数：\n"),v("ul",[v("li",[v("code",[_._v("copy_tableisTypeError")])]),_._v(" "),v("li",[v("code",[_._v("print_console")])]),_._v(" "),v("li",[v("code",[_._v("printtag")])]),_._v(" "),v("li",[v("code",[_._v("warn")])])])]),_._v(" "),v("li",[_._v("miniExtend 全局函数\n"),v("ul",[v("li",[v("code",[_._v("getObjectId")])]),_._v(" "),v("li",[v("code",[_._v("setObjectId")])])])]),_._v(" "),v("li",[_._v("miniExtend 全局表/作用域/类\n"),v("ul",[v("li",[v("code",[_._v("_G2")])]),_._v(" "),v("li",[v("code",[_._v("Console")])]),_._v(" "),v("li",[v("code",[_._v("CustomUI")])]),_._v(" "),v("li",[v("code",[_._v("Event")])])])])])])}),[],!1,null,null,null);v.default=i.exports}}]);