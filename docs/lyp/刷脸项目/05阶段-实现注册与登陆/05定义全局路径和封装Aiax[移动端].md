# 定义全局路径和封装Aiax(移动端)[5-5]

## 01)封装全局路径

上节课我们创建好了后端的register方法，那么移动端发出请求，首先要填写好URL地址。为了在移动端项目上集中管理URL路径，我们可以在 main.js 文件中用全局变量的语法，定义全局的URL地址，这样更加便于维护。

```js
let baseUr1 ="http://192.168.99.216:8080/emos-wx-api'
Vue .prototype .ur1 = {

    register: baseUrl +"/user/register",

}

```



## 02)封装Ajax

移动端通过Aiax向服务端提交请求，然后接收到的响应分若干种情况:

1. 如果用户没有登陆系统，就跳转到登陆页面

2. 如果用户权限不够，就显示提示信息。

3. 如果后端出现异常，就提示异常信息

4. 如果后端验证令牌不正确，就提示信息

5. 如果后端正常处理请求，还要判断响应中是否有Token。如果令牌刷新了，还要在本地存储Token。

如果移动端每次发出Aiax，都要做这么多的判断，我们的重复性劳动太多了。所以尽可能的把Aiax封装起来，减少重复性的劳动。

- 打开main.js页面，默认就是这些值。

```js
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
```

- 添加注册页面的请求路径

```js
let baseUrl = "http://PC电脑的IP:8080/emos-wx-api"

Vue.prototype.url = {
	register: baseUrl + "/user/register",
}
```

- 封装请求方法

```js

Vue.prototype.ajax = function(url, method, data, fun) {
	uni.request({
		"url": url,
		"method": method,
		"header": {
			token: uni.getStorageSync("token")
		},
		"data": data,
		success: function(resp) {
			if (resp.statusCode == 401) {
				uni.redirectTo({
					url: "/pages/login/login.vue"
				})
			} else if (resp.statusCode == 200 && resp.data.code == 200) {
				let data = resp.data
				if (data.hasOwnProperty("token")) {
					let token = data.token
					// console.log(token)
					uni.setStorageSync("token", token)
				}
				fun(resp)
			} else {
				uni.showToast({
					icon: "none",
					title: resp.data
				})
			}
		},
	})
}

```























