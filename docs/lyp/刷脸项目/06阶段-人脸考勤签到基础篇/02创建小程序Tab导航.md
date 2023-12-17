# 创建小程序Tab导航

## 01底部导航

之前我们创建的Emos小程序Index页面是很简陋的，真正的index页面我们来认真看一下。





我们看到Index页面的底部含有Tab导航，集成了五个页面的跳转。那么这个Tab导航是怎么实现的呢?很简单，我们先创建5个小程序页面，然后在 pages.json 文件中设置，于是小程序页面上就出现了Tab导航。

## 02创建页面

底部导航分为 首页、会议 、文档 、通讯录和 我的，目前首页已经有了，接下来我们还要创建出另外四个页面。

| 序号 | 页面     | 路径                            |
| ---- | -------- | ------------------------------- |
| 1    | 首页     | pages/index/index               |
| 2    | 会议列表 | pages/meeting list/meeting_list |
| 3    | 文档     | pages/document/document         |
| 4    | 通讯录   | pages/contacts/contacts         |
| 5    | 我的     | pages/mine/mine                 |
|      |          |                                 |



## 03设置分页导航tabBar属性

在pages.json 文档设置一下tabBar属性，就可以实现Tab导航效果

```json
"tabBar": {
		"color": "#666",
		"selectedColor": "#3474FF",
		"list": [{
				"text": "首页",
				"pagePath": "pages/index/index",
				"iconPath": "static/bar-1.png",
				"selectedIconPath": "static/bar-1-active.png"
			},
			{
				"text": "会议",
				"pagePath": "pages/meeting_list/meeting_list",
				"iconPath": "static/bar-2.png",
				"selectedIconPath": "static/bar-2-active.png"
			},
			{
				"text": "文档",
				"pagePath": "pages/document/document",
				"iconPath": "static/bar-3.png",
				"selectedIconPath": "static/bar-3-active.png"
			},
			{
				"text": "通讯录",
				"pagePath": "pages/contacts/contacts",
				"iconPath": "static/bar-4.png",
				"selectedIconPath": "static/bar-4-active.png"
			},
			{
				"text": "我的",
				"pagePath": "pages/mine/mine",
				"iconPath": "static/bar-5.png",
				"selectedIconPath": "static/bar-5-active.png"
			}
		]
	}
```



```
		{
			"path": "pages/meeting_list/meeting_list",
			"style": {
				"navigationBarTitleText": "会议列表",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "pages/document/document",
			"style": {
				"navigationBarTitleText": "",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "pages/contacts/contacts",
			"style": {
				"navigationBarTitleText": "",
				"enablePullDownRefresh": false
			}
		},
		{
			"path": "pages/mine/mine",
			"style": {
				"navigationBarTitleText": "",
				"enablePullDownRefresh": false
			}
		},
```



## 04登入成功跳转首页

















