# miniExtend v0.1.0（迷你脚本扩展 v0.1.0）
***
## 功能
**miniExtend** 扩展*迷你世界*[^1]脚本功能，这些功能大多比较基础（对于作者而言）。  
如果你进一步了解 miniExtend ，例如阅读源代码，你就会发现这种说法还不够准确，其作用不止于此。  
> ***“要添加的东西很多啊，比如你可以写一个空中寻路的功能~”***  
> 不要指望 **miniExtend** 提供这种复杂的算法，尽管 miniExtend 可能在将来支持它。  
> 使用 miniExtend 会使编写这样的算法会变得简单，即便如此，由于这种算法耗时较长，~~应该使用 C/C++ 编写这种算法，然后让 lua 调用它~~[^2]。  

***
## 使用方法
miniExtend 的大多数脚本应放置在全局作用域[^3]下，而且这些脚本有一定的先后顺序。  
通常在代码开头会体现所属作用域和依赖关系。  
而且 <u>order.md</u> 中也显示了这些内容，你甚至可以直接按 order.md 中的顺序构建脚本。  
使用 miniExtend 的脚本也要全局作用域下[^4]，且在 miniExtend 脚本之后执行。  
建议分出两个脚本组来分别管理两种脚本。  
+ 如果你只是 miniExtend 使用者，应该阅读文档。  
+ 如果你是 miniExtend 开发者，应该阅读源代码，然后根据需要增加内容[^5]，经过测试后提交修改。  
***
## 关于文档
文档中的所有 html 文件都是 miniExtend 文档，其中 <u>doc.html</u> 是文档入口。  
特别鸣谢[菜鸟教程](https://www.runoob.com) ，现在的 miniExtend 文档基本是 runoob 风格。  
如果你还未学习 lua ，可以从菜鸟教程的 [lua 教程](https://www.runoob.com/lua/lua-tutorial.html) 入门，但要注意，菜鸟教程上的版本是 <u>lua53</u> ，而*迷你世界*的脚本解释器版本为 <u>lua51</u> [^6]，入门后建议阅读 lua 官网的 [lua51 文档](http://www.lua.org/manual/5.1/) 。
> 注意，如果你下载的是压缩包，必须在解压压缩包后才能正常阅读文档。  
> 直接访问压缩包中的文件的话，压缩程序通常只解压该文件到一个临时文件夹，所以无法通过相对路径访问 css 等必要文件，要获得更多信息可以查找相关资料。  
> 考虑到内测版中~~很多~~使用者出现这个问题，所以才有了一个区块  

***
## 更新日志
### v0.1.0
> **作为第一个正式的 miniExtend 版本，并使用 git**

[^1]: 广义上也包含迷你编程等软件，只要它们能运行迷你世界中的脚本
[^2]: 理论上可以利用 package.loadlib 等函数调用 C/C++ 函数，但面临库文件转移，平台不同等问题
[^3]: miniExtend 定义的作用域包含全局作用域（对应开发者工具下的脚本）， UI 作用域（对应 UI 编辑器下的脚本）和内嵌作用域（在其它脚本中）
[^4]: 不要被“除前两个，其余的目前只能在UI编辑器内部的脚本使用”固化思维， miniExtend 很早就找到并应用高效的方法在全局作用域下使用得方法，但仍需要 UI 作用域下的 ui_main.lua 提供少量信息
[^5]: 目前建议遵循功能部分添加内容的原则，应该把重点放在开发基础功能上而不是开发复杂的功能
[^6]: 大多数使用 lua 作脚本的软件用的都是 lua51
