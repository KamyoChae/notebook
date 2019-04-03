# notebook
A notebook made with vue. 利用vue做的一个SPA记事本 
[PC端查看效果](https://kamyochae.github.io/notebook/)

项目描述: 对文本框输入内容进行格式化封装，将数据通过localStorage存储到本地浏览器，记事本
具备添加、删除、收藏、搜索、筛选、存储、读取功能。

项目主要内容：
1. 使用vue-router配置了编辑页面的路由，将编辑页面独立成一个组件，优化网页性能，提高了页面的可维护性。
2. 通过vuex对记事本数据进行状态管理。记事本不需要异步调用接口，条目的添加、删除、收藏部分是通过事件直接commit到mutations中对state中的数据进行修改。
3. 搜索效果实现的方式是利用了watch监控搜索框输入内容，然后触发函数修改state中的值渲染出结果。
4. 筛选模块分多个方式筛选：已完成、未完成、已收藏和显示全部条目。为了提高代码的质量，对函数进行了封装复用，通过传入不同的参数对vuex进行操作。
5. 存储方式是调用函数将store中的数据转换成字符串之后，使用localStorage把数据存储到浏览器当中。读取则是使用生命钩子created，在组件创建之前调用函数并将字符串转换成合理的数据结构存到vuex中。


### 技术栈
- vue + vue-router + vuex + vue-cli + webpack 
- localStorage
- H5
- CSS3
- ES6


       $ npm install
       $ npm run dev


# 以下是自己画的UI图

![](https://github.com/KamyoChae/notebook/blob/master/%E8%AE%B0%E4%BA%8B%E6%9C%AC_%E5%88%9B%E5%BB%BA.png)
![](https://github.com/KamyoChae/notebook/blob/master/%E8%AE%B0%E4%BA%8B%E6%9C%AC_%E9%A6%96%E9%A1%B5.png)

# 下面是完成后的效果

## 增加了一些按钮和交互效果

![](https://github.com/KamyoChae/notebook/blob/master/demo.JPG)
![](https://github.com/KamyoChae/notebook/blob/master/default.JPG)
![](https://github.com/KamyoChae/notebook/blob/master/edit.JPG)

关于本项目在开发过程中遇到的问题会陆续更新到issues中~~
