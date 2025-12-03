# 05)idea连接远程docker构建镜像



## 启动远程镜像服务

```shell
vim /usr/lib/systemd/system/docker.service
```



```shell
在ExecStart=/usr/bin/dockerd 后面加上-H tcp://0.0.0.0:2375 -H unix://var/run/docker.sock
```



```
 -H fd:// --containerd=/run/containerd/containerd.sock
```



## 重新加载配置文件

```shell
sudo systemctl daemon-reload 
```



## 重新启动docker

```shell
sudo systemctl restart docker
```





## 启动远程镜像无法启动docker问题

::: warning 一定要按照如下配置进行

- 这个问题我花费了2个多小时解决。按照如下步骤可以开启远程访问。
- 我google查过，找了很久找到解决方案。

:::

场景：我按照上面的步骤配置后。启动docker报错。开启远程docker访问失败。

- 报错一

![image-20240101161735613](05idea连接远程docker构建镜像.assets/image-20240101161735613.png)

```shell
[root@VM-8-4-centos movie_service_compose]# sudo systemctl restart docker
Job for docker.service failed because start of the service was attempted too often. See "systemctl status docker.service" and "journalctl -xe" for details.
```

- 报错二，查看镜像都报错。

```shell
[root@VM-8-4-centos movie_service_compose]# docker images
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
```

- 报错三，启动停止也是报错。

### 解决

我的[docker](https://so.csdn.net/so/search?q=docker&spm=1001.2101.3001.7020)版本：

```shell
[root@VM-8-4-centos movie_service_compose]# docker -v
Docker version 24.0.7, build afdd53b
[root@VM-8-4-centos movie_service_compose]# 
```

参考网上的一个说明，docker开启远程访问的配置为：

- 第一步：创建 `/etc/docker/daemon.json` 文件（如果已经存在则修改），加入以下内容：

```shell
vi /etc/docker/daemon.json
```

```json
{
  "hosts" : ["unix:///var/run/docker.sock", "tcp://0.0.0.0:2375"]
}
```

- `"unix:///var/run/docker.sock"`：unix socket，本地客户端将通过这个来连接 Docker Daemon。
- `"tcp://0.0.0.0:2375"`：tcp socket，表示允许任何远程客户端通过 2375 端口连接 Docker Daemon。

**第二步**：下面重启docker。

查看dockerd报错日志：

```shell
journalctl -u docker
```

有这么一行报错日志。

```shell
 dockerd[12747]: unable to configure the Docker daemon with file /etc/docker/daemon.json: 
the following directives are specified both as  a flag and in the configuration file: hosts: (from flag: [fd://], from file: [unix:///var/run/docker.sock tcp://0.0.0.0:2375])
```

经过查阅相关资料，官网文档上有说这个错误原因：

https://docs.docker.com/config/daemon/#use-the-hosts-key-in-daemonjson-with-systemd

简而言之，就是配置冲突。

解决方法：

修改docker.service文件

```
 vim /usr/lib/systemd/system/docker.service
```

删掉【service】单元中ExecStart中的-H参数，如图

![image-20240101162437680](05idea连接远程docker构建镜像.assets/image-20240101162437680.png)

然后重启docker，问题解决。