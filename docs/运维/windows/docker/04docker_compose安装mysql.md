# 04)dockerCompose安装mysql

![image-20240101115511600](04docker_compose安装mysql.assets/image-20240101115511600.png)



## 解压

```shell
tar -zxvf movie_service_compose.tar.gz
```

![image-20240101115637976](04docker_compose安装mysql.assets/image-20240101115637976.png)

- 注意：要进入这个目录movie_service_compose启动。



## 修改下密码

```shell
 vi docker-compose.yml 
```

不要使用默认密码root。防止弱口令爆破。

![image-20240101120006502](04docker_compose安装mysql.assets/image-20240101120006502.png)



## 启动拉取镜像

![image-20240101121355507](04docker_compose安装mysql.assets/image-20240101121355507.png)