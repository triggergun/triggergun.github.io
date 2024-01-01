## 03)centos安装dockerCompose



## 通过上传包安装

![image-20240101114808081](03centos安装docker_compose.assets/image-20240101114808081.png)

传到`/usr/local/bin/`目录。

```shell
cd  /usr/local/bin/
```



## 修改文件权限

- 修改权限

```shell
chmod +x /usr/local/bin/docker-compose
```

## 验证安装

```shell
 docker-compose -v
```

![image-20240101115111649](03centos安装docker_compose.assets/image-20240101115111649.png)