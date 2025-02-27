## 03)centos安装dockerCompose



## 通过上传包安装

![image-20240101114808081](03centos安装docker_compose.assets/image-20240101114808081.png)

传到`/usr/local/bin/`目录。

```shell
cd  /usr/local/bin/
```

::: tip  题问题

- 问：docker-compose文件哪里下载呢？

  答：通过网盘分享的文件：docker-compose
  链接: https://pan.baidu.com/s/1dlQtlM6SG5v3ioEb3mq_oQ?pwd=p5wp 提取码: p5wp 
  --来自百度网盘超级会员v4的分享

:::

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