(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1243:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"github常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github常见问题"}},[t._v("#")]),t._v(" github常见问题")]),t._v(" "),s("h2",{attrs:{id:"pull失败问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pull失败问题"}},[t._v("#")]),t._v(" pull失败问题")]),t._v(" "),s("h3",{attrs:{id:"问题描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),s("p",[t._v("第一步：github复制https的地址进行本地clone下来。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(324),alt:"image-20240502173541579"}})]),t._v(" "),s("p",[t._v("结果：报错")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("32802@gun MINGW64 /e/java_code\n$ git clone https://github.com/triggergun/nacos_code_gun.git\nCloning into 'nacos_code_gun'...\nfatal: unable to access 'https://github.com/triggergun/nacos_code_gun.git/': Failed to connect to github.com port 443 after 21169 ms: Couldn't connect to server\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("19:30\tPush failed\n\t\t\tunable to access 'https://github.com/triggergun/nacos_code_gun.git/': Failed to connect to github.com port 443 after 21092 ms: Couldn't connect to server\n\t\t\tShow details in console\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("图片描述问题")]),t._v(" "),s("p",[s("img",{attrs:{src:a(325),alt:"image-20240504193448988"}})]),t._v(" "),s("h3",{attrs:{id:"问题分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题分析"}},[t._v("#")]),t._v(" 问题分析")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("致命：无法访问'https://github.com/triggergun/nacos_code_gun.git/'：21169毫秒后无法连接到github.com端口443：无法连接到服务器\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"问题原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题原因"}},[t._v("#")]),t._v(" 问题原因")]),t._v(" "),s("p",[t._v("未知..")]),t._v(" "),s("p",[t._v("网上看法：")]),t._v(" "),s("p",[t._v("这个问题应该是由于本机系统代理端口和git端口不一致导致的（大概率是科学上网的问题，代理出现了变化），可以尝试以下方法\n第一步检查一下本机代理设置---网络和Internet---代理---地址:端口，找到你的IP地址和端口号\n第二步修改git配置")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git config --global http.proxy http://127.0.0.1（你的地址）:10809（你的端口号）\ngit config --global https.proxy http://127.0.0.1（你的地址）:10809（你的端口号）\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"问题解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题解决"}},[t._v("#")]),t._v(" 问题解决")]),t._v(" "),s("p",[t._v("你第一步可以采取的方法就是通过以下Git命令取消proxy代理，然后再回到你前面要执行的步骤\n解决：通过git取消代理：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git config --global --unset http.proxy\ngit config --global --unset https.proxy\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("参考文章：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/m0_72594605/article/details/132559545",target:"_blank",rel:"noopener noreferrer"}},[t._v("【Github问题解决】解决Github：fatal:unable to access ‘https://github.com/.../.git‘:Could not resolve host:git_unable to access github-CSDN博客"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports},324:function(t,s,a){t.exports=a.p+"assets/img/image-20240502173541579.621d9dcc.png"},325:function(t,s,a){t.exports=a.p+"assets/img/image-20240504193448988.a54dc486.png"}}]);