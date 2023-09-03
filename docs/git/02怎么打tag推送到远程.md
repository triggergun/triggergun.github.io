# git创建标签并推送到远程

一些指令不经常使用总是爱忘记，用的时候又到处查询很麻烦，在此记录，以备不时之需。

## 打标签推送远程

- 1、在Git中打标签非常简单，首先，切换到需要打标签的分支上

```cmd
# 查看分支
$ git branch
* dev
master

# 切换分支
$ git checkout master
Switched to branch 'master' 
```

- 2、敲命令git tag <name>就可以打一个新标签

```
$ git tag v1.0.1  # 创建一个新分支
```

- 3、查看已经常见的Tag

```cmd
# 查看当前打的标签是什么
$ git tag
v1.0.1
```

- 4、推送到远程服务器上

```cmd
$ git push origin --tags
```

 **补充：**

一、如何对以前内容打标签。 需要找到历史提交的commit id，输入如下指令获取提交信息

**`$ git log --pretty=oneline --abbrev-commit`**

be58e91 添加中文说明
007a52f 1.0.6 重新整理代码
0116e99 Update README.md
fe62401 Delete MessageType.png

然后执行

**`$ git tag V1.0.6 007a52f`**



为id为007a52f的节点创建一个标签。

再用命令`git tag`查看标签：

**`$ git tag`**

 

也可以创建带有说明的标签，用`-a`指定标签名，`-m`指定说明文字：

**`$ git tag -a v1.0.6 -m "version 1.0.6 released" 007a52f`**

 

删除远程标签

```cmd
$ git push --delete origin v1.0.9
```

删除本地标签

```cmd
$ git tag -d `v1.0.9`
```

###  02)标签重置

 二、重置当前分支到特定标签 

```cmd
$ git reset --hard tagname
```

