# ip地址是怎么划分的呢

## 01）什么是ip地址

- 202.105.138.10是什么地址呢？

`202.105.138.10`是一个具体的IP地址，它用于标识网络上的设备，比如计算机、服务器或路由器等。IPv4地址由32位二进制数组成，通常用4个用点分隔的十进制数表示。

通常情况下，这个IP地址可能是某个网络设备的公共IP地址，可能用于提供Internet服务、访问网站、传输数据等。但是，根据具体的网络配置，该IP地址的具体用途可能有所不同。

如果你对这个IP地址有特定的疑问或需要更多的信息，建议查看相关的网络配置或联系网络管理员以获取详细的信息。

- IP地址怎么划分？

- IP地址是什么呢？

答：IP地址是用于在网络上唯一标识设备的一组数字。

- ip地址分类？

IP地址分为IPv4和IPv6两个版本，其中IPv4地址由32位二进制数字组成，IPv6地址由128位二进制数字组成。在这里，我将重点介绍IPv4地址的划分。

IPv4地址被分为网络地址和主机地址两部分。

- 网络地址是什么？

网络地址用于标识网络。

- 主机地址是什么？

主机地址用于标识网络中的具体设备。

- ip地址是什么进行划分的呢？

IPv4地址的划分方式是基于子网掩码（Subnet Mask）进行的。

- 网络地址与主机地址由什么决定呢？

答：子网掩码

**子网掩码**决定了**网络地址**和**主机地址**的划分边界。子网掩码由32位二进制数表示。

1. 网络部分为连续的1
2. 主机部分为连续的0

- 怎么得到网络地址与主机地址？

IPv4地址和子网掩码进行**逻辑与**操作，得到网络地址和主机地址。这样，同一个网络中的设备都有相同的网络地址，而主机地址则用于区分不同的设备。

例如，假设有一个IPv4地址为 `192.168.1.100`，子网掩码为 `255.255.255.0`（表示24位网络地址和8位主机地址）。（知道IPv4地址、子网掩码求网络地址的问题）

**进行逻辑与操作：**

```
IPv4地址：   1 1 0 0 0000.10101000.00000001.01100100
子网掩码：    1 1 1 1 1111.11111111.11111111.00000000
-----------------------------------------------  逻辑与得到网络地址。
网络地址：    1 1 0 0 0000.10101000.00000001.00000000
```

网络地址为 `192.168.1.0`，而主机地址为最后8位 `00000000`，因此在这个网络中的设备都具有相同的网络地址 `192.168.1.0`，但不同的主机地址用于区分不同的设备。

而主机地址是：11000000.10101000.00000001.01100100。表示为：192.168.1.100

::: danger 特殊的主机号（死都要记住的）

- 主机号为全是0表示当前的网段，当前网段！当前网段！也就是网络地址。这个地址是不分配为特定主机的。
- 主机号为全1表示广播地址。向当前网络段所以的主机发送消息。

:::

## 02）什么是子网划分

子网划分是将一个较大的IP地址段划分成多个更小的子网，这样可以更有效地管理IP地址，并提供更好的**网络性能**和**安全性**。

- 划分子网的优点有哪些？

在网络规划和配置中，管理员需要根据网络规模和需求来合理划分IP地址和子网。不同的子网规划可以帮助组织更好地

1. **管理网络设备**，
2. 高效的网络通信。

## 03）IP地址的类型划分

IP地址的划分是根据**地址的范围**和**开头的位数**来确定属于哪个IP地址类别。IP地址被分为A、B、C、D、E五个类别，分别用于不同规模的网络和特定用途。

IPv4地址的第一个字节决定了IP地址的类别，范围如下：

- A类地址范围：0.0.0.0 到 127.255.255.255
- B类地址范围：128.0.0.0 到 191.255.255.255
- C类地址范围：192.0.0.0 到 223.255.255.255
- D类地址范围：224.0.0.0 到 239.255.255.255（用于多播）
- E类地址范围：240.0.0.0 到 255.255.255.255（保留，不用于公共网络）

划分规则如下：

- A类地址以0开头，例如：10.0.0.0，110.0.0.0。
- B类地址以10开头，例如：172.16.0.0，192.168.0.0。
- C类地址以110开头，例如：192.0.2.0，223.255.255.0。

总结：定0，插1。法则！确定IP地址属于哪一类。

需要注意的是，上述规则只是划分IP地址类别的基本方法。在实际应用中，子网划分（Subnetting）技术可以将一个IP地址段划分为更小的子网，以更高效地利用IP地址空间和实现更好的网络管理。

例如，在私有网络中，通常会使用B类地址的私有地址范围（172.16.0.0 到 172.31.255.255）或C类地址的私有地址范围（192.168.0.0 到 192.168.255.255）来分配IP地址给内部设备。

综上所述，划分IP地址类别是根据IP地址的范围和开头的位数来确定的，帮助实现更好的网络规划和管理。

## 04）不同类型的地址范围是多少个

不同类型的IP地址范围如下：

1. A类地址范围：0.0.0.0 到 127.255.255.255，共有 128.0.0.0 个IP地址。【128是指不同的网络地址有128个】
2. B类地址范围：128.0.0.0 到 191.255.255.255，共有 64.0.0.0 个IP地址。
3. C类地址范围：192.0.0.0 到 223.255.255.255，共有 32.0.0.0 个IP地址。
4. D类地址范围：224.0.0.0 到 239.255.255.255，共有 16.0.0.0 个IP地址（用于多播，不可分配给主机）。
5. E类地址范围：240.0.0.0 到 255.255.255.255，共有 16.0.0.0 个IP地址（保留，不用于公共网络）。

总结起来，IPv4地址空间一共有 2^32 = 4,294,967,296 个IP地址，其中约 3.7 亿个IP地址用于A、B、C三类地址，D类地址用于多播，E类地址为保留地址。

202.105.138.10属于哪一类呢？

答：C类地址。

## 05）私有地址怎么分


私有地址是一类保留地址，用于在私有网络中使用，并不直接用于公共互联网。私有地址范围由Internet Assigned Numbers Authority (IANA) 定义，并在RFC 1918中规定。IPv4的私有地址范围如下：

- 10.0.0.0 到 10.255.255.255，共有 10.0.0.0/8
- 172.16.0.0 到 172.31.255.255，共有 172.16.0.0/12
- 192.168.0.0 到 192.168.255.255，共有 192.168.0.0/16

这些私有地址可以在组织内部使用，例如家庭、企业或组织的内部网络。它们在公共互联网中是不可路由的，因此在使用私有地址时不会与互联网上其他设备的地址冲突。

私有地址的分配通常由网络管理员进行，可以按照实际需求将私有地址划分给不同的子网和设备。私有地址的使用允许组织在内部创建自己的独立网络，并在局域网（LAN）中实现资源共享、内部通信和其他网络服务。

需要注意的是，当内部网络需要与公共互联网通信时，可以使用网络地址转换（NAT）技术，将私有地址映射为公共IP地址，以实现与外部网络的通信。这样，内部网络的设备可以通过NAT网关来访问互联网上的资源。

总结起来，私有地址是一类保留的IP地址，用于在私有网络中使用，不直接路由到公共互联网。它们提供了一种机制，允许组织内部创建自己的网络，并在内部实现资源共享和通信，同时与外部互联网进行通信通过NAT技术实现。

