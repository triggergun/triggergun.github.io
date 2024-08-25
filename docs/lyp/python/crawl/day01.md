# python爬虫必知

## cookie

::: tip cookie是什么呢？

http协议，无状态
作用：网站登入时候的问题，用来记录用户身份的。

:::

模拟登入===》【人人网 】
	抓包获取cookie，发送request

## 正则表达式解析

为什么引入正则表达式？

答：用来匹配一类具有相同规则的”字符串“。
规则：

### 1)单字符：

| 符号 | 描述                                 |
| ---- | ------------------------------------ |
| .    | 除换行(\n)以外所有字符               |
| [ ]  | [ aoe] [a-w]  匹配集合中任意一个字符 |
| \d   | 数字[0-9]                            |
| \D   | 非数字                               |
| \w   | 数字，字母，下划线，中文             |
| \W   | 非\w                                 |
| \s   | 所有的空白字符                       |
| \S   | 非空白                               |
|      |                                      |

### 2)数量修饰:

*	 任意多次  	 >=0
+	至少1次   	 >=1

| 符号  | 描述                       |
| ----- | -------------------------- |
| ?     | 可有可无  	0次  or  1次 |
| {m}   | 固定m次                    |
| {m,}  | 至少m次                    |
| {m,n} | m-n次                      |
|       |                            |

### 3)边界：

| 符号 | 描述       |
| ---- | ---------- |
| \b   |            |
| \B   |            |
| $    |            |
| ^    | 以某某开头 |
| .*?  | 贪婪模式   |
| .+?  | 贪婪模式   |

re.I ： 忽略大小写
re.M ：多行匹配
re.S ：单行匹配

```python
match\search\findaall
re.sub(正则表达式，替换内容，charset）
     图片下载：
```
爬取的需求：（一点点语录网）

## bs4库

Beautiful Soup

需要安装，执行如下命令。

```
pip install bs4 
pip install lxml
```

`注意：`需要将pip源改为国类源

使用

```python
from bs4 import BeautifulSoup （类）
```

使用方法：可以将一个html文档，转化为指定的对象，然后通过对象的方法或者属性去查找指定的内容；
1、转化本地文件：

```python
soup = BeautifulSoup(open("本地文件"),"lxml")
```

2、将字符串转化为指定对象soup。

```python
soup = BeautifulSoup("字符串类型或者字节类型"，‘lxml’)
```

​	

### BeautifulSoup对象

### 根据标签名查找

```python
	对象.a  	# 只能找到第一个符合<a>的标签
```

### 获取属性

```python
	对象.a.attrs    # 获取所有的属性和值，返回一个”字典“
	对象.a.attrs['href']   # 获取href属性
```

### 获取内容

```python
	print（soup.a.text）
	soup.a.string		# 注：如果标签里面还有标签，string不能全部获取内容；
	soup.a.get_text( )
```

### find()方法【行为】

```python
soup.find(a)     # 找到第一个符号要求的a标签的属性和内容
soup.find(a,title=’***‘) # find通过第二个参数,以标签的属性去-'筛选'-想要找到-'目标'-标签。
soup.find(a,class_='***')  # 注:class属性因为class是关键字,所以是: class_

#find方法不仅soup可以调用，普通的div对象也能够调用，会
#去指定的div里面去查找符合要求的 ==》‘节点’

#find找到的都是‘第一个’符合要求的==》‘标签’
```
### find_all  [return list]

```python
soup.find_all('a')
soup.find_all(['a','b'])
soup.find_all('a',limit=2)      # 限制前两个
```

单词：limit  -------- /'limit/

### select/si'lekt/

根据选择器选择指定的类容
常见的选择器：
1.标签选择器
2.类选择器
3.id选择器
4.并集(组合)选择器
5.层级选择器
6.伪类选择器
7.属性选择器

上面都是前端css的知识点。

1. select选择器return永远是list，需要通过下标提取指定的对象，然后获取属性和节点
2. 该方法也可以通过普通的对象调用，找到都是这个对象下面符合要求的所有的节点

## xpath

```shell
pip install lxml
```

::: tip  什么是xpath？

xml是用来存储和传输数据使用的和html的不同点有两点：
(1)html用来显示数据，xml是用来传输数据
(2)html标签是固定的，xml标签是自定义的
作用：xpath是用来在xml中查找指定的元素，它是一种路径表达式

::: 

### xpath-语法:

常用的路径表达式

| 语法 | 描述                             |
| ---- | -------------------------------- |
| //   | 不考虑位置的查找                 |
| ./   | 从当前节点开始往下查找           |
| ../  | 从当前节点的父节点查找（不常用） |
| @    | 选取属性                         |



	实例：
	路径表达式		描述
	/bookstore/book：  选取根节点bookstore下面所有的book
	//book：		 选取所有book
	bookstore//book：  查找bookstore下面所有的book
	/bookstore/book[1]: 查找bookstore里面第一个book
	/bookstore/book[last()]: bookstore里面的最后一个book
	/bookstore/book[position()<3]: 选取最前面的两个属于bookstore元素的儿子元素的book元素。
	//title[@lang]： 选取所有拥有名为lang的属性的title元素（节点）。
	//title[@lang='eng']: 所有的lang属性值为eng的title节点。

---------------------------------------------
	*：匹配任何元素节点
	@*： 匹配任何属性节点。
	node(): 匹配任何类型的节点。
--------------------------------------------
	安装xpath插件
	打开xpath快捷键： ctrl + shift+x
	1.属性定位
	//input[@id="kw"]
	//input[@class="bg s_btn"]
	2.层级定位
	   索引定位
	
	//div[@id='head']/div/div[2]/a[@class='toindex']
[注意]：索引从1开始。
	//div[@id="head"]//a[@class="toindex"]
[注意]：双斜杠代表下面所有的a节点，不管位置。
	3.逻辑运算
	and    逻辑与
	列：  //input[@class="s_ipt"  and @name="wd"]
	4.模糊匹配
	contains
	//input[contains(@class, "s_i")]
	所有的input，有class属性，并且属中带s_i的节点。
	starts-with
	//input[starts-with(@class,"s")]
	所有的input，有class属性，并且属性以s开头。
	6.取文本
	      //div[@id="u1"]/a[5]/text()  获取节点内容
  	      //div[@id="u1"]//text()        获取节点里面所有内容，并且不带标签的。
	7.取属性
	      //div[@id="u1"]/a[5]/@href

	代码怎么操作xpath：
	from lxml import etree
	1.将html文档变成一个对象，
	2.然后调用对象的方法去查找指定的node
	（1）本地文件
	tree = etree.parse(文件名)
	（2）网络文件
	tree = etree.HTML(网页字符串)
	
	ret = tree.xpath(路径表达式)
	[注意]：ret返回的是一个列表
	
	直接将所有的内容拼接起来
	ret =tree.xpath('//div[@class="song"]')
	string=ret[0].xpath('string(.)')
	print(string.replace('\n'," ").replace("\t", ""))


[案例]：    http：//www.haoduanzi.com/
	http://www.haoduanzi.com/category/?1-1.html


======================================

1.图片
	meizitu
http：//sc.chinaz.com/tupian/xingganmeinvtupian.html

懒加载技术:
	用到时候在加载
实现方法：
	<img src2="图片路经">
	<img src2>  

不懂

os.path.exists( )
os.path.basename( ) 

--------------------------------
2.jsonpath
jsonpath:  用来解析json数据使用的
python处理json格式用到的函数
	json数据有点像  python 字典 列表

	import  json
	json.dumps( )  :将字典  or  列表转化为    json格式的字符串
￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥
import json 

lt = [
	{'name': '王宝强', 'age': 30},
	{'name': '做杰润', 'age': 36},
	{'name': '李宇鹏', 'age': 39},
	{'name': '李玉洁', 'age': 56},
       ]

string = json.dumps (lt)

obj = json.loads(string)
print(type(obj))  # <class list>

#写             将 lt 写入文件中去
json.dump(lt, open('json.txt', 'w', enconding= 'utf-8'))

读将文件中的json数据读出来

obj = json.load(open('json.txt', 'r', encoding='utf-8'))
print(type(obj))
print(obj)



￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥
	json.loads( )  ：将json格式字符转化为python对象 
	json.dump( ) ：将字典 or 列表转化为  json格式字符串并且写入到文件（file）中
	json.load( ) ：从文件中读取json格式字符串，转化为python对象

记忆： 带s——>string  处理字符串
           不带s——> 处理 文件 

前端处理：
	将json格式的字符串转化为js对象
	JSON.parse('json格式字符串')
	eval('('+json格式字符串+')')	
     安装：
	pip install  jsonpath
	pip install lxml

jsonpath 和 xpath 的对比 -------------------------------

	xpath	jsonpath		元素
	/	$		根元素
	.	@		当前元素
	/	.		子元素
	//	..		任意位置查找
	*	*		通配符
	xpath 索引下标从0开始
	jsonpath 索引下标从1开始

https：//blog.csdn.net/luxideyao/article/details/77802389



selenium是什么？
	是以个python的一个第三方库，对象提供的接口可以操作你
	的浏览器，然后让你的浏览器完成自动化的操作！
	安装：pip install selenium
	使用：
		操作谷歌浏览器，首先必需有谷歌浏览器驱动

Selenium [1]  是一个用于Web应用程序测试的工具。Selenium测试直接运行在浏览器中，就像真正的用户在操作一样。支持的浏览器包括IE（7, 8, 9, 10, 11），Mozilla Firefox，Safari，Google Chrome，Opera，Edge等。这个工具的主要功能包括：测试与浏览器的兼容性——测试你的应用程序看是否能够很好得工作在不同浏览器和操作系统之上。测试系统功能——创建回归测试检验软件功能和用户需求。支持自动录制动作和自动生成 .Net、Java、Perl等不同语言的测试脚本。
代码操作：
from selenium import webdriver

browser = webdriver.Chrome(path)

browser.get( )

使用下面的方法，查找指定的元素进行操作即可
find_element_by_id			根据id找节点
find_element_by_name		根据name(属性)找
find_element_by_xpath		根据xpath查找
find_element_by_tag_name		根据标签名找
find_element_by_class_name		根据class名字查找
find_element_by_css_selector		根据选择器查找
find_element_by_link_text		根据链接内容查找

get/send_keys/click	

+++++++++++++++++++++++++++++++++++++++++

PhantomJS
	是什么？是一款浏览器，是无界面浏览器
	selenium + PhantomJS 就是爬虫终极解决方案
让browser执行简单的js代码，模拟滚动条到底部

---------------------------------------------
js ='document.body.scrollTop=10000'
#执行js代码
browser.execute_script(js)

#获取网页的代码，保存到文件中
html = browser.page_source

豆瓣电影下拉
	图片的加载
图片加载
	图片懒加载
	获取网页的代码： browser.page_source
网站：(chinaUnix)

day06-爬虫6------------------------------------------------
截图
browser.save_screenshot(image_path)

1 Headless Chrome
	无头谷歌浏览器
	因为phantomjs现在都不维护了 
	from selenium.webdriver.chrome.option import options
	chrome_options = Option( )
	chrome_options.add_argument('--headless')
	chrome_options.add_argument('--disable-gpu')

如何使用Headless Chrome
Headless模式是Chrome 59中的新特征。
要使用Chrome需要安装-----chromedriver----。


《chromedriver》下载地址：http://npm.taobao.org/mirrors/chromedriver/

from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--disable-gpu')
driver = webdriver.Chrome(chrome_options=chrome_options)
driver.get("https://cnblogs.com/")

2 requests
	安装 ： pip install requests
	官方文档：
	http://cn.python-requests.org/zh_CN/latest/
	用来做什么？
		和url-lib是同一个位置的
	get请求
		url =‘http://www.baidu.com/’

​		r = requests.get（url ）

响应对象
	r.text		字符串形式查看响应
	r.content		字节类型查看响应
	r.encoding	查看或者设置编码类型
	r.status_code	查看状态码
	r.headers		查看相应头部
	r.url  		查看所请求的url


--------------------------------------------------------------------

	post请求
	
	必应翻译
	formdata：是一个原生字典即可
	r = requests.post(url=url, headers= headers, data=formdata)
----------------------------------------------------------------
	ajax
	和上面的一样的
-----------------------------------------------------------------
	代理
	r = requests.get(url, headrs=headers, proxies=proxies)

---------------------------------------------------------------
	cookie
	实现：人人登入
	1.创建会话对象
	s = requests.Session( )	能保存post请求cookie的一个对象
	s.get( )
	s.post( )
	登入的思路：
	1.访问登入页面，获取登入所需要的一些参数
	2.生成soup对象，获取formhash
	get 
	2.
	post
	get
单词
	parameters   参数	

3.验证码
tesserct   app安装
检验   tesseract

	tesseract简介
	光学识别，但是不要对它期望太高。只能识别简单的代码测试
pip install pytesseract
pip install pillow

转化为灰色图片

img = img.convert('L')
img.show( )

二值化处理

threshold = 140
table = []
for i in range(256)
	if i <threshold :
		table.append(0)
	else:
		table.append(1)
out = img.point(table,'1')
out.show()

img = img.convert("RGB")

import pytesseract
from PIL import Image


#打开图片
img = Image.open('image_path')

img = img.convert('RGB')

识别图片

print(pytesseract.image_to_string("img" ))


----------------------------------------------------------



day 07--爬虫7
=1=，打码平台
云打码
	下载python HTTP接口示列
=2=，视频下载
	哔哔视频为列
	365yg.com
=3=，线程回顾
(1).引入
	多任务，多个任务同时进行，多进程，多线程。
	word，编辑，检查（多线程）
	qq，语音，视频，发送消息（多线程）
	程序中，代码中。
(2).创建线程 [Thread]
*************************************************************
	1=面向过程
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	thread_obj = (target=xxx, name=xxx, args=xxx,xxx)
	target: 线程启动之后要执行的 functions
	name ： 线程的name
	获取线程名字：threading.current_thread().name
	args： 主线程向子线程传递参数
	对象方法：
		# 启动线程
		thread_obj.start( )
		# 让=主线程=等待=子线程=结束
		thread_obj.start( )
***************************************************************
	2=面向对象&&&
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
		定义一个类。继承自threading.Thread,重写一个方法（run（））

问题：
	1怎么给线程起名字？
	2.怎么传递参数？
	-答-：需要线程的-名字，传递参数，重写构造方法，
	tip：在重写构造方法的时候，一定要注意手动调用父类的构造方法。

子类重写了父类的构造方法，子类要调用父类的构造方法，作用初始化父类的构造方法；
如果父类方法有用，子类一定要调用super.__init__( )
import threading
********************************************************************
	3=线程同步
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
		线程之间共享 全局变量，-----很容易发生数据紊乱问题
		这个时候要用到线程锁
	理解：同排队上厕所，自己把门一锁。被人想用，等待我解锁
	坑位如同 -"全局变量"-
	顺序：    抢，谁先抢到。谁上锁之后，谁先用。

用法

	# 创建锁
		锁 = threading.Lock( )
	# 上锁
		锁.acquire()
		xxxxxxxxxxxxxxx
	# 释放锁
		锁.release( )
*****************************************************************
	4=队列（queue）
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	下载线程
	解析线程
	生产者  生产数据
	消费者  消费数据
q = Queue(5)

存储数据

q.qut('xxx')		如果队列满，程序卡在这等待
q.qut('xxx', False) 		如果队列满，程序直接报错
q.qut('xxx',Ture， 3) 	如果队列满，程序等待3s在报错

取数据

print(q.get( ))		如果队列为空，程序卡在这里等待
print(q.get( False))		如果队列为空，程序直接报错
print(q.get(Ture， 3 ))	如果队列为空，程序等待3s在报错

q.empty( )		判断队列是否为空
q.full( )			判断队列是否已经满了
q.qsize( )			获取队列长度


from queue import Queue

创建队列

q = Queue(5)

存储数据

q.put('科比')
q.put('勒布朗')
q.put('JR')
q.put('汤普森')
q.qut()
q.qut()

取数据 结果： 先进先出的原则！

print(q.get( ))
print(q.get( ))
print(q.get( ))
print(q.get( ))
print(q.get( ))




&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&		
#写一个类，继承自threading.Thread
class SingThread(threading.Thread):
	def __init__(self, name, a):
		
		super.__init__( )# 调用=父类方法
		self.name = name
		self.a = a
	
	# 重写了 父类的方法run( )
	def run(self):
		for x in range(1, 6):
		print('我在唱七里香')
		time.sleep(1)
		pass
class DanceThread(threading.Thread):
	def run(self):
		for x in range(1, 6):
		print('我在跳广场舞')
		time.sleep(1)
		pass
def main()

	tsing = SingThread( ) # 没有构造方法什么也不用填	
	tdance = DanceThread( )
	
	#启动线程
	tsing.start( )
	tdance.start( )
	
	# 让主线程等待子线程结束之后在结束
	tsing.join( )
	tdance.join( )
	
	print('主线程和子线程全部结束')
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
+++++++++++++++++++++++++++++++++++++++++
import time

def sing():
	for x in range(1, 6):
		print('我在唱什么')
		time.sleep(1)

def dance():
	for x in range(1, 6):
		print('我在跳hiphop舞')
		time.sleep(1)

def  main():
	sing()
	dance()

if __name__ =="__main__":
	main()
小结：  ---先唱---，---在跳---。
++++++++++++++++++++++++++++++++++++++++++++
一个主线程，两个子线程，(唱歌线程，跳舞线程)
多个任务同时进行

def sing( a):
	print('线程为%s接收过来的参数%s' %( threading.current_thread().name, a))
	for x in range(1, 6):
		print('我在唱什么')
		time.sleep(1)


def dance(a):
	print('线程为%s接收过来的参数%s' %( threading.current_thread().name, a))
	for x in range(1, 6):
		print('我在跳hiphop舞')
		time.sleep(1)

def main();
	# 创建唱歌线程，
	# name 给线程起一个名字
	a = "孙悟空"
	t_sing = threading.Thrad(target=sing, name='changge'， args(a,))
	# 创建跳舞线程，# 通过元组传参
	t_dance = threading.Thrad(target=dance, name='tiaowu'， args(a,))
	
	# 通过对象的方法启动线程
	#启动线程
	tsing.start( )
	tdance.start( )
让主线程等待子线程结束之后在结束

	tsing.join( )
	tdance.join( )
	
	print('这里是主线程')
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
单词：
thread
current
join
acquire
release

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

4，多线程爬虫
	分析：
	两类线程： 下载线程(3个)，解析(3个)
	内容队列：下载线程 往队列中put数据，解析线程从队列get数据
url队列： =下载线程=从url队列       get 数据
写数据：



from queue import Queue
import requests
form lxml import etree
import json

用来存放采集线程 

g_crawl_list = [ ]

用来存放解析线程 

g_parse_list = [ ]

class CrawlThread(threading.Thread):
	def __init__(self, name, page_queue, data_queue):
		super(CrawlThread, self).__init__( )
		self.name = name
		self.page_queue = page_queue
		self.data_queue = data_queue
		self.url = 'xxxxxxxxxxxxxxxxxx{ }xxx'
		self.headers = {xxxxxxxxxxxxxxxxxxxxxxx}
	
	def run():
		print('%s---线程启动'%self.name)
		while 1:
			# 判断采集线程何时退出
			if self.page_queue.empty():
				break
			# 从队列中取出页码
			page = self.page_queue.get()
	
			url =self.url.format(page)
			r = requests.get(url, headers = self.headers)
			self.data_queue.put(r.text)
		print('%s---线程over' %self.name)


class ParserThread(threading.Thread):

	def __init__(self, name, data_queue, fp, lock):
		super(ParserThread, self).__init__( )
		self.name = name
		self.page_queue = page_queu
		self.fp = fp
		self.lock = lock
	
	def run():
		print('%s---线程启动'%self.name)
		while 1:
			data = self.data_queue.get(True, 10)
			# 解析内容即可
			self.parse_content(data)
	
		print('%s---线程over' %self.name)
	
	def parse_content(self， data)：
		tree = etree.HTML(data)
		
		li_list = tree.xpath('//ul[@class="cont-list"]/li')
		
		items =[ ]
	
		for oli in li_list:
			title = oli.xpath('//h2/a/text()')[0]
			image_url = oli.xpath('.//div[contains(@class, "cont-list-maun")]//img/@data-src')
			item = {
	
			"标题"：title，
			"链接": image_url
			}
			
			items.append(item)
		
		# 上锁
		self.lock.acquire()
		self.fp.write(json.dumps(items, ensurs_ascii=False+'\n'))
		# 释放锁
		self.lock.release( )

def create_queue():
	# 创建页码队列
	page_queue = Queue()
	for page in range(1, 11):
		page_queue.put(page)
	# 创建内容队列
	data_queue = Queue()
	return page_queue, data_queue

创建采集线程

def create_crawl_thread(page_queue, data_queue):
	crawl_name = ['采集线程1号', '采集线程2号','采集线程3号']
	for name in crawl_name:
		# 创建一个采集线程
		tcrawl = CrawlThread(name, page_queue, data_queue)
		# 保存到列表中
		g_crawl_list.append(tcrawl)

创建解析线程

def create_parse_thread(page_queue, data_queue):
	parse_name = ['解析线程1号', '解析线程2号','解析线程3号']
	for name in parse_name:
		# 创建一个解析线程
		tparse = CrawlThread(name, data_queue, fp, lock)
		# 保存到列表中
		g_parse_list.append(tparse)



def main():
	# 创建队列函数
	page_queue, data_queue = create_queue()
	# 打开文件

线程之间不共享局部变量

	fp = open('jian.json', 'a', encoding = 'utf-8')
	# 创建锁
	lock = treading.Lock()
	# 创建采集线程
	create_crawl_thread(page_queue, data_queue)
	time.sleep(3)
	# 创建解析线程
	create_parse_thread(data_queue, fp, lock)
	
	# 启动所有采集线程
	for tcrawl in g_crawl_list:
		tcrawl.start()
	# 启动所有解析线程
	for tparse in g_parse_list:
		tparse.start()
让主线程等待子线程结束之后在结束

	for tcrawl in g_crawl_list:
		tcrawl.join()
	for tparse in g_parse_list:
		tparse.join()
	
	fp.close()



=============================================




？？？？？？？？？？？？？？？？？？？？？？？？？？？
day08---爬虫8

1.scrapy初认识
	scrapy是什么？
		是python的一个爬虫的框架，非常出名，非常强悍，
学的就是用法，当然，底层肯定使用了多进程，多线程，队列等及技术。

安装 ： pip install  scrapy

	框架有5部分组成
	引擎，下载器，spiders，调度器(schedule),管道(pipeline)
	我们的代码写到spiders， 管道中，
spiders： 文件内容解析，链接提取
pipeline ： 数据是保存到文件中，mysql中，MongoDB中？

工作原理：见图
简单使用：
	(1)创建项目
	scrapy  startproject [项目名]firstblood
	(2)认识目录结构
	firstblood
		firstblood   	正真的项目文件
			__pycache__
			spiders		爬虫文件存放的地方
				__pycache__
				__init__.py
				new_file.py	爬虫文件 (*)	
			__init__.py	代表firstblood是包
			items.py		定义数据结构的地方 (*)
			middle-wares.py	中间件
			pipelines.py	管道文件	(*)
			settings.py	配置文件(*)
		
		scrapy.cfg	不用管
	
	(3)生成爬虫文件
·	第一：
		cd [项目名]
		cd firstblood
	第二:
		scrapy genspider qiubai[名字]  域名
---------------------------------------------代码
	class QiubaiSpider(scrapy.Spider):
		# 爬虫的名字
		name = 'quibai'
		# 允许的 -域名, 是一个列表，里面可以放多个，一般都做限制
		allowed_domains = ['www.qiushibaike.com']
		# 起始url，是一个列表
		start_urls = ['http://www.quishibaike.com']
		
		# 解析解析函数， 重写这个方法，
发送请求之后，响应来了就会调用这个方法，函数就有一个参数response就是响应内容，该
函数对返回值有一个要求，必须返回--可迭代对象

		def parse(self, response):
			pass
------------------------------------------------
	(4)认识response对象
	程序跑起来
	cd firstblood/firstblood/spider
	scrapy crawl qiubai[用的是QiubaiSpider类中的属性name]
	
	(问题1)pywin32安装一下，
	(问题2)取消遵从robots协议
		settings.py中第22行
	(问题3)修改UA头部信息
		settings.py中第19行
	response的常用 =方法=  和  =属性=
		text:	字符串类型
		body:	字节类型
 =方法=================
		xpath():		scrapy内部已经集成了xpath,直接使用即可，
		此xpath非彼xpath，略有不同。
			extract( )
	(5)执行输出指定格式
	scrapy crawl qiubai -o qiubai.json
	scrapy crawl qiubai -o qiubai.xml
	scrapy crawl qiubai -o qiubai.csv
	【注】：你输出为csv的时候，中间估计有空行，自己百度一下解决掉。
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@		
		
2.scrapy shell
	scrapy shell是什么？
		调试工具，常用来调试xpath对不对
	安装依赖：pip install ipython
	作用：	更加智能的交互环境
		可以通过tab键智能提醒
	终端下任意位置，输入如下指令：
		scrapy sheel url
进行交互
	++++++++++++++++++++++++++
	response
	-----------	属性
	text	字符串类型
	body	字节类型
	url	请求的url
	status	响应状态码
	headers	响应头
	-----------	方法
	xpath( )	提取出来的多是selector对象，需要进行extract( )
	css( ) 	根据选择器进行获取指定的内容
	# content-left >div>div>a>img
	ret = response.css('#content-left>div>.author img::attr(src)')#  提取img 中的src的\内容
【注意】这种获取属性的方式只能在scrapy中使用，bs中不能这么使用
	ret = response.css('#content-left>div>.author h1::text')# 提取h1 中的文本内容
	【注】这中方式获取的列表，也得extract一下，才能得到你想要的字符串。
	selector 对象
		是scrapy自己封装的一个对象，不论你是通过xpath还是css，获取到的都是
		这个对象，
	=+++++对象方法++++++==
	xpath( )
	css( )
	extract( )		将对象直接转化为字符串
	extract_first( )	功能就等同于
		extract_first() == [0].extract() == extract()[0]
	如果xpath或者css写错了，返回的是空列表。那么通过后两种方式获取的时候就会报错
	但是通过extract_first()获取，会返会None 
	item对象
		爬取数据的时候，第一步要定义数据结构，在items.py种定义，
		通过这个类创建的对象非常特殊，这个=对象=使用的时候类似字典
		而且这个对象可以方便的转化为字典
		class Person(scrapy.Item):
			name = scrapy.Field()
			age = scrapy.Field()
		p = Person()
		赋值和使用
		p['name'] = 'goudan'
		p['age'] = 20
		p[name]  p["age"]
		转化为字典
		d = dict()
		
3 yield item 和 请求
	yield是什么意思？
	答: 函数中出现yield，代表这个函数是一个生成器，【注意】：函数可以出现
	多个yield
	通过scrapy 来爬稠视百科
		DOWNLOAD_DELAY = 3  下载延时
		ITEM_PIPELINES = {
		'xxxxx.xxxxxxxxxx.xxxxxPipeline':300,
		}
		

列子：
	def test():
		lt = [ ]
		for x in range(1, 11):
			lt.append(x)
		return lt

生成器【generator】，不是保存的数据，而是保存的这个数据生成的方式，用到的时候，直接调用，再给你生成

def demo()：
	for x in range(1, 11):
		yield x
		print("嘿嘿嘿")
		# 请问打印一个1的时候会打印-嘿嘿嘿-吗？？？
		答： ON
		因为 ：生成器的作用：就是 【口诀】《 用一个 ，就拿一，》
		不用就不生成，用就生成。节约了内存空间。
a = demo()
print(a) # 是个generator     可以遍历a

取数据

print(next(a))  # 1
print(next(a))  # 2
print(next(a))  # 3



？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？

day09-爬虫9

网页
www.521609.com

电影网id97

1，下载图片

2，请求传参
提取的数据不在一个页面

3，crawlspider
	LinkExtractor(
		allow=xxx,	#正则表达式，要(*)
		deny=xxx,	#正则表达式，不要这个
		restrict_xpaths=xxx,	# xpath路径（*）
		restrict_css=xxx,		# 选择器（*）
		deny_domains=xxx,	# 不允许的域名
		
)

LinkEXtractor是一个类
	
	用法演示：
		scrapy  shell  http://www.id97.com/movie
		from scrapy.linkextractors import LnkExtractor

第一种提取方式：	
	======	通过正则表达提取链接
			links = LinkExtractor(allow=r'/movie/\?page=\d')
		将所有包含这个正则表达式的href全部获取到，并返回
		links.tract_links(response)进行查看提取到的链接
		【注意】将重复的url去除掉

第二种提取方式：	
	======	通过xpath提取
		links = LinkExtractor(restrict_xpaths=xxx,)
		links = LinkExtractor(restrict_xpaths=' //ul[@class="pagination pagination-sm"]/li/a ')

第三种提取方式：	
	======通过  【css选择器 +  > + 标签名字】   提取
		links = LinkExtractor(restrict_css=xxx,)
使用：
	follow ： 是否 跟进
	什么是  	是否 跟进？
	第一页提取的页码是： 2 3 4 5 6
		

4,日志信息和等级
	CRITICAL : 严重错误
	ERROR：　一般错误
	WARNING：　警告
	INFO：　一般的信息
	DEBUG：　调试信息
	默认的是显示级别是DEBUG
========配置代码==============
ＬＯＧ＿ＬＥＶＥＬ　＝　＇ＤＥＢＵＧ＇	级别是debug
ＬＯＧ＿ＦＩＬＥ　＝　'log.txt'		将调试信息显示到指定的文件中。　　　　	
5，发送post请求
	直接发送post请求，需要将start_urls注释掉，然后重写start_requests方法，在这个方法
里面直接发送post请求
	yield scrapy.FormRequest(url= post_url, formdata=formdata, callback.parse)

？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？

day10-爬虫10


1.代理的使用
	下载中间件
2.模拟登入
	豆瓣（未看）

3.存储到MySQL，mongodb
	














































​	 