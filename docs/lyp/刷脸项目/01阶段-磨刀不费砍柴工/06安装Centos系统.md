# 安装Centos系统

## 添加CentoS镜像

![image-20230917114928965](06安装Centos系统.assets/image-20230917114928965.png)

![image-20230917115040917](06安装Centos系统.assets/image-20230917115040917.png)









![image-20230917115141538](06安装Centos系统.assets/image-20230917115141538.png)





![image-20230917115215605](06安装Centos系统.assets/image-20230917115215605.png)



效果：

![image-20230917115234616](06安装Centos系统.assets/image-20230917115234616.png)



## 启动Centos系统

启动虚拟机

![image-20230917115438607](06安装Centos系统.assets/image-20230917115438607.png)



选择第一个选项，开始执行安装

![image-20230917115506444](06安装Centos系统.assets/image-20230917115506444.png)



安装界面语言选择中文

![image-20230917115555619](06安装Centos系统.assets/image-20230917115555619.png)

选择安装位置

![image-20230917115637723](06安装Centos系统.assets/image-20230917115637723.png)



默认会自动创建分区，不需要我们干预，点击完成即可



![image-20230917115717845](06安装Centos系统.assets/image-20230917115717845.png)

默认情况下Centos并没有开启联网功能，所以我们要手动开启联网。

![image-20230917115820755](06安装Centos系统.assets/image-20230917115820755.png)



选择打开网络，然后记住你的虚拟网卡名字

![image-20230917115906747](06安装Centos系统.assets/image-20230917115906747.png)

开始选择安装Centos

![image-20230917115940661](06安装Centos系统.assets/image-20230917115940661.png)



安装的过程中，可以设置root帐户密码。



![image-20230917120018135](06安装Centos系统.assets/image-20230917120018135.png)



安装完成之后，用root帐户登陆Centos，查看系统的IP地址。

```
#下面的命合可以查看IP地址
ip addr
```

![image-20230917120131711](06安装Centos系统.assets/image-20230917120131711.png)







