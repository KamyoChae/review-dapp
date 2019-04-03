
# review-dapp
vue仿DAppReview官网的一个练手项目

项目描述：使用vue对官网进行重构，调用后台接口将数据动态渲染，并将“深度好文”模块重构为
轮播图展示、将静态波纹图片用canvas重写成动画效果

技术栈：vue-cli + v-charts + axios + h5 + css3 + es6 

项目主要内容：
1. 通过webpack proxyTable代理解决跨域访问接口问题，利用钩子函数在组件创建时使用axios拉取后端数据优化性能。
2. 官网图表部分采用的是react方面的库，为了贴近官网设计，学习了与vue相关的v-charts图表库并成功实现了数据的可视化。
3. 官网”深度好文“模块略显呆板，随后学习了vue动画的实现方式，最终将该模块封装成轮播图效果，增强交互体验。
4. 官网模块之间使用了一张svg水波纹图片进行衔接，为了烘托网站主题氛围，使用canvas对水波纹效果进行了动画效果的重构设计。

# 查看在线[效果](https://kamyochae.github.io/review-dapp-noapi/)

## 食用方法

### 第一步 ：添加作料

npm install 

### 第二步 ：爆炒

npm run dev 

### 第三步 ：出锅

在浏览器打开 localhost:8080 即可食用
 
# [整理的接口文档](https://github.com/KamyoChae/review-dapp/blob/master/api.md)

# 2019-03-05更新 优化首页水波纹动效 这个版本是用来接口的，无接口版本点[这里](https://github.com/KamyoChae/review-dapp-noapi)

## 重构的部分 官网的样子：

![](https://github.com/KamyoChae/review-dapp/blob/master/_demo_image/deep1.JPG)
![](https://github.com/KamyoChae/review-dapp/blob/master/_demo_image/deep2.JPG)

## 重构之后的样子：
![](https://github.com/KamyoChae/review-dapp/blob/master/_demo_image/slider1.gif) 

# 下面是vue重构的页面，力求还原官网设计 

[下载demo视频](https://github.com/KamyoChae/review-dapp/blob/master/_demo_image/DAppReview.mp4)

# 先放上重构结束的项目截图

![](https://github.com/KamyoChae/review-dapp/blob/master/_demo_image/index_page_min.png)

#
### 首页点击搜索弹出搜索框 上面的几张图片有动画效果
![](https://github.com/KamyoChae/review-dapp/blob/master/_demo_image/index_1_search.JPG)

 
#
### 这张图标用了 v-charts 
![](https://github.com/KamyoChae/review-dapp/blob/master/_demo_image/index_4.JPG)

#
### 切换到日活选项 动态生成图表
![](https://github.com/KamyoChae/review-dapp/blob/master/_demo_image/index_4_user.JPG)

#
### 深度好文模块
![](https://github.com/KamyoChae/review-dapp/blob/master/_demo_image/index_5.JPG)

#
### 重构了一下官网的 深度文章 模块
![](https://github.com/KamyoChae/review-dapp/blob/master/_demo_image/index_5_slider.JPG)

#### 这里改了官网的设计，用自己的思路实现了一个轮播组件，看上去比官网的舒服

#
### 后面页脚就不多说了 没啥亮点
![](https://github.com/KamyoChae/review-dapp/blob/master/_demo_image/index_6.JPG) 
![](https://github.com/KamyoChae/review-dapp/blob/master/_demo_image/index_7.JPG)
