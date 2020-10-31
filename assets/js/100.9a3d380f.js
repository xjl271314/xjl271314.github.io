(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{758:function(v,_,p){"use strict";p.r(_);var i=p(14),t=Object(i.a)({},(function(){var v=this,_=v.$createElement,p=v._self._c||_;return p("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[p("h1",{attrs:{id:"移动端hybrid开发相关知识"}},[v._v("移动端Hybrid开发相关知识")]),v._v(" "),p("ul",[p("li",[v._v("2020-07-06")])]),v._v(" "),p("h2",{attrs:{id:"什么是hybrid-app"}},[v._v("什么是Hybrid App")]),v._v(" "),p("blockquote",[p("p",[p("code",[v._v("Hybrid App")]),v._v("其实指的是那些在原生应用开发(ios应用、android应用)中嵌入了H5技术等的app。")])]),v._v(" "),p("p",[v._v("早在"),p("code",[v._v("Google")]),v._v("推出"),p("code",[v._v("Android")]),v._v(","),p("code",[v._v("Apple")]),v._v("推出"),p("code",[v._v("iOS")]),v._v("后，就有了App开发工程师。早期的app基本上都是以原生开发为主，对应工程师开发对应的平台。直到H5技术的出现,可以说把"),p("code",[v._v("Hybrid App")]),v._v("带上了高潮。")]),v._v(" "),p("h2",{attrs:{id:"h5部分概念"}},[v._v("H5部分概念")]),v._v(" "),p("p",[p("code",[v._v("HTML5")]),v._v("是在2014年9月份正式发布的,对标早期的HTML版本做了很大的升级，可以说是新开门派了。"),p("code",[v._v("HTML5")]),v._v("正式火爆应该算是在2015年之后，正是由于H5技术热，带动了原生应用对H5技术的升级。")]),v._v(" "),p("h2",{attrs:{id:"原生应用中的webview"}},[v._v("原生应用中的webview")]),v._v(" "),p("p",[v._v("我们都知道原生应用中提供了一个用来显示网页的组件，在"),p("code",[v._v("android")]),v._v("中提供的是"),p("code",[v._v("webview")]),v._v("，"),p("code",[v._v("ios7")]),v._v("以下是"),p("code",[v._v("UIWebview")]),v._v("，"),p("code",[v._v("ios7")]),v._v("以上是"),p("code",[v._v("WKWebview")]),v._v("。")]),v._v(" "),p("p",[v._v("在HTML5大火之前，这些"),p("code",[v._v("webview")]),v._v("可能只是用来承载一些规则页等静态资源，大火之后一些酷炫的功能也可以通过H5技术来实现，然后让元生应用来承载这个页面，这样大大提高了开发效率，也增加了别样的用户体验。")]),v._v(" "),p("h2",{attrs:{id:"hybrid的开发形式"}},[v._v("Hybrid的开发形式")]),v._v(" "),p("ul",[p("li",[v._v("半Native 半web开发模式")])]),v._v(" "),p("p",[v._v("这种模式下,底层功能API均由原生容器通过某种方式提供,然后业务逻辑由H5页面完成,最终原生容器加载H5页面,完成整个App。")]),v._v(" "),p("ul",[p("li",[v._v("纯web开发模式")])]),v._v(" "),p("p",[v._v("这种模式下,意味着Native侧各种类型的api都很完善,那么这时候几乎所有与业务相关的逻辑都是放在H5页面中的,原生只作为容器存在。")]),v._v(" "),p("h2",{attrs:{id:"市场上现有app开发技术方案"}},[v._v("市场上现有App开发技术方案")]),v._v(" "),p("ol",[p("li",[p("h3",{attrs:{id:"native-app"}},[v._v("Native App")])])]),v._v(" "),p("p",[v._v("这种模式即传统的原生APP开发模式,"),p("code",[v._v("Android")]),v._v("基于"),p("code",[v._v("Java")]),v._v("语言,底层调用"),p("code",[v._v("Google")]),v._v("的 API;"),p("code",[v._v("iOS")]),v._v("基于"),p("code",[v._v("Object-C")]),v._v("或者"),p("code",[v._v("Swift")]),v._v("语言,底层调用"),p("code",[v._v("App")]),v._v("官方提供的API。")]),v._v(" "),p("p",[p("strong",[v._v("优点")])]),v._v(" "),p("ul",[p("li",[p("p",[v._v("直接依托于操作系统,交互性最强,性能最好,开发出来的体验最好。")])]),v._v(" "),p("li",[p("p",[v._v("功能最为强大,特别是在与系统交互中,几乎所有功能都能实现。")])])]),v._v(" "),p("p",[p("strong",[v._v("缺点")])]),v._v(" "),p("ul",[p("li",[p("p",[v._v("开发成本高,开发周期长,无法跨平台,不同平台"),p("code",[v._v("Android")]),v._v("和"),p("code",[v._v("iOS")]),v._v("需要各自独立开发。")])]),v._v(" "),p("li",[p("p",[v._v("门槛较高,原生人员有一定的入门门槛,而且需要学习不同的语言。")])]),v._v(" "),p("li",[p("p",[v._v("更新缓慢,特别是发布应用商店后,需要等待商店审核,特别是ios这块。")])]),v._v(" "),p("li",[p("p",[v._v("后期维护成本高,需要维护两套代码。")])])]),v._v(" "),p("ol",{attrs:{start:"2"}},[p("li",[p("h3",{attrs:{id:"web-app"}},[v._v("Web App")])])]),v._v(" "),p("p",[v._v("这种模式即移动端的网站,将页面部署在服务器上,然后用户使用各大浏览器访问。一般泛指 "),p("code",[v._v("SPA(Single Page Application)")]),v._v("模式开发出的网站。现有技术一般也会将其只作为"),p("code",[v._v("PWA")]),v._v("模式。")]),v._v(" "),p("p",[p("strong",[v._v("优点")])]),v._v(" "),p("ul",[p("li",[p("p",[v._v("开发成本低,可以跨平台,调试方便,一套代码可以在所有浏览器上跑。")])]),v._v(" "),p("li",[p("p",[v._v("维护成本低,可以自由的进行发版和修复,无需等待审核。")])]),v._v(" "),p("li",[p("p",[v._v("无需安装对应的app,一个网站就可以轻松访问。")])])]),v._v(" "),p("p",[p("strong",[v._v("缺点")])]),v._v(" "),p("ul",[p("li",[p("p",[v._v("性能低,用户体验差,直接通过浏览器访问,一些原生的api无法使用。")])]),v._v(" "),p("li",[p("p",[v._v("过渡依赖于网络状况,网络差的时候就会产生长时间的白屏等问题,消耗的流量比较大。")])]),v._v(" "),p("li",[p("p",[v._v("临时性入口,用户留存率低,由于无需安装对应的应用,用户可能使用了一次之后忘记了入口。")])])]),v._v(" "),p("ol",{attrs:{start:"3"}},[p("li",[p("h3",{attrs:{id:"hybrid-app"}},[v._v("Hybrid App")])])]),v._v(" "),p("p",[v._v("这种模式即本文的混合开发,由"),p("code",[v._v("Native")]),v._v("通过"),p("code",[v._v("JSBridge")]),v._v("提供统一的"),p("code",[v._v("API")]),v._v(",然后用"),p("code",[v._v("HTML5+JS")]),v._v("来写实际的逻辑,调用API,这种模式下,由于"),p("code",[v._v("Android")]),v._v(","),p("code",[v._v("iOS")]),v._v("的API一般有一致性,而且最终的页面也是在"),p("code",[v._v("webview")]),v._v("中显示,所以可以达到跨平台开发的效果。")]),v._v(" "),p("p",[p("strong",[v._v("优点")])]),v._v(" "),p("ul",[p("li",[p("p",[v._v("相对原生开发,开发成本较低,可以跨平台,调试方便。")])]),v._v(" "),p("li",[p("p",[v._v("维护成本低,功能可复用,而且没有更新的限制(指app仅提供api且api没有变更的场景)。")])]),v._v(" "),p("li",[p("p",[v._v("功能更加完善,性能和体验要比起web app好许多,一些原生的方法都可以使用。")])]),v._v(" "),p("li",[p("p",[v._v("部分对性能要求较高,或者功能上大都是与原生系统交互的页面可以选择使用原生开发,比较灵活。")])])]),v._v(" "),p("p",[p("strong",[v._v("缺点")])]),v._v(" "),p("ul",[p("li",[p("p",[v._v("相比原生应用,性能仍然有较大损耗,瓶颈主要在"),p("code",[v._v("webview")]),v._v("的加载与注入以及本身对"),p("code",[v._v("webview")]),v._v("的限制。")])]),v._v(" "),p("li",[p("p",[v._v("不适用于交互性较强的app,如那些对原生系统依赖较多,动画要求较高的一些应用。")])])]),v._v(" "),p("ol",{attrs:{start:"4"}},[p("li",[p("h3",{attrs:{id:"react-native、flutter等第三方框架"}},[v._v("React Native、Flutter等第三方框架")])])]),v._v(" "),p("p",[v._v("这种模式下基本都是实现了Js开发(RN)或者 Data语言开发原生app的技术，对应的都有一套自己的AST树转化规则和生成UI视图的机制。可以通过js等编写出跨平台app。")]),v._v(" "),p("p",[p("strong",[v._v("优点")])]),v._v(" "),p("ul",[p("li",[p("p",[v._v("拥有接近原生应用的用户体验,在可以使用原生功能的基础上,开发效率大大提升。")])]),v._v(" "),p("li",[p("p",[v._v("跨平台开发,一套代码可以跑通多端,更新比较方便(指不涉及原生改动),可以直接热修复。")])]),v._v(" "),p("li",[p("p",[v._v("社区比较繁荣,很多功能已有现成轮子,遇到问题可以去社区中找寻答案。")])])]),v._v(" "),p("p",[p("strong",[v._v("缺点")])]),v._v(" "),p("ul",[p("li",[p("p",[v._v("虽然是跨平台开发,但是某些功能可能单个平台才支持,适配和一些api仍需两端独立开发。")])]),v._v(" "),p("li",[p("p",[v._v("学习成本较高,需要额外掌握对应的跨平台开发语言。")])])]),v._v(" "),p("div",{staticClass:"custom-block tip"},[p("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),p("p",[v._v("具体要选择什么样的开发模式需要根据实际的业务场景进行选择。")]),v._v(" "),p("p",[v._v("相对于原生开发，Hybrid开发效率提高了很大，但是同时也损耗了一些用户体验。")])]),v._v(" "),p("h2",{attrs:{id:"hybrid通信基本架构"}},[v._v("Hybrid通信基本架构")]),v._v(" "),p("p",[v._v("最简单的通信方式如下所示:")]),v._v(" "),p("p",[p("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200706114445553.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3hqbDI3MTMxNA==,size_16,color_FFFFFF,t_70",alt:"Hybrid通信基本架构"}})]),v._v(" "),p("h2",{attrs:{id:"hybrid通信实现"}},[v._v("Hybrid通信实现")]),v._v(" "),p("p",[v._v("在实现与Native侧交互前,涉及到两个概念。")]),v._v(" "),p("ol",[p("li",[p("p",[v._v("app基本上都是与版本有关的,某些版本可能才支持某些特有的功能。")])]),v._v(" "),p("li",[p("p",[v._v("如何知道当前是处于app环境中,并且如何获得真实的app版本号。")])])]),v._v(" "),p("p",[v._v("实际开发过程中,我们会把对应的app版本等信息挂载到user-agent属性上。")])])}),[],!1,null,null,null);_.default=t.exports}}]);