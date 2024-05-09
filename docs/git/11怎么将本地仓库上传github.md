# 本地仓库与远程仓库关联

## 01)在本地创建一个新的Git仓库

```shell
git init
```

或者，如果你已经有一个现有的项目并希望将其纳入 Git 管理，可以进入项目目录并运行：

```shell
git init
```

## 02)将本地仓库的文件添加到Git中

```shell
git add .
```

- 如果要添加指定文件

这将把当前目录下的所有文件添加到 Git 中。你也可以使用 `git add <file>` 来添加指定文件。

## 03)提交本地仓库的更改

```
git commit -m "Initial commit"
```

这将提交你添加的文件到本地仓库，并创建一个初始的提交。

1. 在远程仓库创建一个新的空仓库（如果还没有）

   在远程仓库（例如 GitHub、GitLab 等）上创建一个新的空仓库。

2. 获取远程仓库的 URL

   获取远程仓库的 URL，通常是以 `https` 或 `git` 协议开头的 URL。可以在远程仓库的页面上找到这个 URL。

3. 将本地仓库与远程仓库关联

   ```shell
   git remote add origin <remote-repository-url>
   ```

   替换 `<remote-repository-url>` 为远程仓库的 URL。

## 04)将本地仓库的更改推送到远程仓库

```shell
git push -u origin master
```

这将把本地仓库的 `master` 分支推送到远程仓库，并设置上游分支。如果你在创建远程仓库时选择了不同的分支名，需要相应地替换 `master`。