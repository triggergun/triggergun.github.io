(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1127:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_01怎么删除远程标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01怎么删除远程标签"}},[a._v("#")]),a._v(" 01怎么删除远程标签")]),a._v(" "),s("h2",{attrs:{id:"_1-列出所有远程标签-本地标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-列出所有远程标签-本地标签"}},[a._v("#")]),a._v(" 1. 列出所有远程标签&本地标签")]),a._v(" "),s("p",[a._v("在删除远程标签之前，我们需要先了解当前远程仓库中有哪些标签。我们可以使用下面的命令列出所有的远程标签：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" ls-remote "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tags")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("查看本地标签。")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" tag "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"_2-删除远程标签步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-删除远程标签步骤"}},[a._v("#")]),a._v(" 2. 删除远程标签步骤")]),a._v(" "),s("h3",{attrs:{id:"_2-1-删除本地标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-删除本地标签"}},[a._v("#")]),a._v(" 2.1 删除本地标签")]),a._v(" "),s("p",[a._v("先要删除本地标签，我们可以使用下面的命令：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" tag "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("tagname"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("其中 "),s("code",[a._v("<tagname>")]),a._v(" 是要删除的标签名。")]),a._v(" "),s("h3",{attrs:{id:"_2-2删除远程标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2删除远程标签"}},[a._v("#")]),a._v(" 2.2删除远程标签")]),a._v(" "),s("p",[a._v("例如，如果要删除名为 "),s("code",[a._v("v1.2.34-beta24")]),a._v(" 的标签，命令将类似于：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--delete")]),a._v(" refs/tags/v1.2.32-beta22\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("作用：这将通知远程仓库删除指定的标签。")]),a._v(" "),s("p",[a._v("注意：一定要小心，不要输入错误哦，这是永久删除的哦。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("https://geek-docs.com/git/git-questions/1179_git_how_to_see_remote_tags.html#:~:text=1%20%E4%BD%BF%E7%94%A8%20git%20ls-remote%20--tags%20origin%20%E5%91%BD%E4%BB%A4%E5%8F%AF%E4%BB%A5%E6%9F%A5%E7%9C%8B%E8%BF%9C%E7%A8%8B%E5%BA%93%E4%B8%AD%E7%9A%84%E6%89%80%E6%9C%89%E6%A0%87%E7%AD%BE%E3%80%82%202,%3Ctag%3E%20%E5%91%BD%E4%BB%A4%E5%8F%AF%E4%BB%A5%E6%9F%A5%E7%9C%8B%E7%89%B9%E5%AE%9A%E7%9A%84%E8%BF%9C%E7%A8%8B%E6%A0%87%E7%AD%BE%E3%80%82%203%20%E4%BD%BF%E7%94%A8%20git%20tag%20-l%20%E5%91%BD%E4%BB%A4%E5%8F%AF%E4%BB%A5%E6%9F%A5%E7%9C%8B%E6%9C%AC%E5%9C%B0%E5%BA%93%E4%B8%AD%E7%9A%84%E6%89%80%E6%9C%89%E6%A0%87%E7%AD%BE%E3%80%82\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);