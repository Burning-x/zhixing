# zhixing
一、需求分析
1，编写目的：确定应该如何具体实现所要求的系统，从而在编码阶段可以把
这个描述翻译成距离的程序语言书写程序，主要工作有：根据在需求分析书
中所描述的数据，功能，运行，性能需求，解决：公司员工的信息管理
二、功能设计：
1，公司员工信息的查看
2，员工信息的添加，3，在同一页面直观的查看员工信息，并防止误修改
三、系统架构设计
1、后台环境使用Node.js，使用相应的express框架加快开发
2、数据库采用mongodb,使用响应的mongoose框架，
3、尽量采用MVC三层架构，实现数据的低耦合，方便各模块的组合，
模块详细设计：
models文件夹里面提供一些数据操作接口js文件，views里面存放一些静态文件，
app.js为主控文件，提供相关路由，功能由models文件夹中的router文件提供


实现：用ejs写好初始化相关的模版
初次加载时，填入所有用户的姓名信息，并把用户的_id存放在html5的新功能
dataset中，在页面加载的时候给他们添加
点击事件，此点击事件可以通过ajax发送_id到后台，然后从后台获得数据，
动态的在右侧展现出来。
添加信息的时候，直接在后台用formidable插件获取解析，然后添加进数据库
之后返回至初始页面，显示出刚添加的信息。
在页面加载的时候，给右侧的表单和修改，提交按钮添加不可更改属性，
点击左侧员工名之后，右侧修改按钮生效，通过右侧的修改按钮
取消表单不可修改属性，修改信息后直接post提交即可，
页面布局，使用flex，实现各端的自适应

运行：运行环境：mongoDb数据库，Node.js环境
在控制台中进入app.js文件所在目录，node app.js即可
在浏览器中输入127.0.0.1：3000,进入首页，点击顶部新建即可新建员工信息
之后点击左侧员工姓名，右侧随之显示其详细信息，
点击修改之后，点击确定修改，即可对信息进行修改。