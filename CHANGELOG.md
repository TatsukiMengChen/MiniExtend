# 更新日志 #

## v1.0.0
**第一个正式的 MiniExtend 版本**

## v1.0.1
- 修改了自述文件 *README.md* ，更新了 MarkdownPad 风格文档。  
- 删除了 *order.md* 文件。  
- 修复了 `scheduleCall(ticks, func, ...)` 函数在 `ticks` 大于 1 时会多等待 1 帧的问题。  
- `_G2["__newUI"]` 替换为 `_G2["__SENDSSE"]` ，并同步修改。  
- `_G2["__objid"]` 替换为 `_G2["__OBJID"]` ，并同步修改。  
- `useObjectId()` 函数的名称替换为 `setObjectId()` ，并同步修改。  
- 修复了其它小 bug 。  

## v2.0.0
- 修改了自述文件 *README.md* 。  
- 使用 ~Apache Licence 2.0~ 作为许可证，并在代码开头添加作者信息。  
- MiniExtend 代码不再使用 MarkdownPad 风格文档。  
- 分离文档让开发者自己维护自己风格的 MiniExtend 文档。  
- 整体优化代码，原则为**以空间换时间**。  
- 代码使用更详细的注释。  
- 删除了 `_LUAG` 。  
- 新增了 `GameVM` 全局变量，存储游戏 API 对象，例如通过 `GameVM.UI` 来访问 UI API 。  
- 修改了 `_G` 元表的 `__index` 函数，使其能更快索引不在 `_G` 中的键。  
- 新增 `Time` 作用域，将全局函数 `getTick()`, `scheduleCall()` 和 `nextTick()` 转移到 `Time` 作用域中。  
- 新增了计时器类 `Time.Timer` ，详见 *time.lua* 。  
- 优化了 `Console` 作用域下的函数。  
- `_G2["__SENDSSE"]` 修改为 `_G2["__CONNECT"]` 。  
- 修改了 MiniExtend 自定义事件名的名称，并且使用 `"$"` 开头来标记事件是 MiniExtend 自定义事件。  
- 将 `Event.Listener` 更改为 `Event.Connecter` 。  
- 将 `Event:connect()` 函数更改为 `Event.Connecter:new()` 。  
- 将 `CustomUI` 作用域更改为 `UI` 作用域，使用 `GameVM.UI` 来访问因此被顶替的 UI API 。  
- 在 *ui.lua* 中将 `Image` 和 `Text` 分别更改为 `Texture` 和 `Label` ，即修改了相应的类名和函数名。  
- 现在允许通过 `UI.$CLASSNAME:new(uiview, elementid)` 来构造 `$CLASSNAME` 对象，显然 `$CLASSNAME` 包含 `Texture`, `Button`, `Label`, `EditBox` 。  

## v2.0.1
- 改动了 *ide.lua* 。  
- 使用 MIT Licence 作为许可证。  
- 在 *README.md* 中增加了引用文档的仓库链接。  

## v2.0.2
- 修复了上个版本发布时一些文件中没有及时更新版本的问题。  
- 修复了 `UI.Texture` 类被设置为全局变量的问题。  
- 在文档中增加以前未提出的 `UI:getRootSize()` 函数。  

## v2.1.0
- 修复了部分文件合并时 git 增加的合并标识没有去掉的问题。  
- 修复了 *object.lua* 中仍使用 `_LUAG` 的问题。  
- 修复了文档使用绝对路径索引图片的问题。  
- `Time.Timer` 类增加 `delay` 成员变量，表示下一次调用 `callback` 的间隔帧数。  
- <b style="color: red;">将 `UI` 作用域改为 `MUI` 作用域</b>。  
- 优化文档。  
