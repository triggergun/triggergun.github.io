## 怎么用docker-compose.yml启动容器？

要使用`docker-compose.yml`文件来启动Docker容器组，可以使用以下命令:

```bash
docker-compose up
```

请确保你已经在包含`docker-compose.yml`文件的目录中运行此命令。Docker Compose会根据配置文件中定义的服务和容器来创建和启动容器。

### 后台启动

如果你希望在后台（detached mode）运行容器，可以添加`-d`标志：

```bash
docker-compose up -d
```

这样，容器组将在后台运行，而不会占用你的终端。

如果你只想构建镜像而不运行容器，可以使用以下命令：

```bash
docker-compose build
```

此命令将根据`docker-compose.yml`文件中的配置构建所需的镜像，但不会启动容器。



### 停止容器

要停止运行中的容器组，可以使用以下命令：

```bash
docker-compose down
```

这将停止并删除由`docker-compose.yml`定义的所有容器和相关网络。如果你使用了`-d`标志来运行容器组，可以使用以下命令停止容器：

```bash
docker-compose stop
```

这样，容器将会停止但不会被删除。

记得在运行`docker-compose`命令之前，要确保已经正确安装了Docker Compose工具。希望这可以帮助到你顺利地使用`docker-compose.yml`文件来管理Docker容器组。