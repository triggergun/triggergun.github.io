# apache hadoop【官方】

官方：[Apache Hadoop](https://hadoop.apache.org/)

## what is hadoop ？【简介】

The Apache® Hadoop® project develops open-source software for <font color='red'>reliable</font>,<font color='red'> scalable</font>, <font color='red'>distributed computing</font>.

The Apache Hadoop software library is a framework that allows for the distributed processing of large data sets across clusters of computers using simple programming models. It is designed to scale up from single servers to thousands of machines, each offering local computation and storage. Rather than rely on hardware to deliver high-availability, the library itself is designed to detect and handle failures at the application layer, so delivering a highly-available service on top of a cluster of computers, each of which may be prone to failures.



::: details 翻译

- 第1句话：Apache®Hadoop®项目开发用于<font color='red'>可靠</font>、<font color='red'>可扩展</font>、<font color='red'>分布式计算</font>的开源软件。
- 第2句话：Apache Hadoop软件库是一个框架，允许使用简单的编程模型跨计算机集群分布式处理大型数据集。
- 第3句话：它被设计为从单个服务器扩展到数千台机器，每台机器都提供本地计算和存储。
- 第4句话：库本身的设计目的是在应用程序层检测和处理故障，而不是依靠硬件来提供高可用性，从而在计算机集群之上提供高可用服务，每个计算机集群都可能容易出现故障。

:::



::: details 重点词汇

- 第1句

| English               | Chinese                                                      |
| --------------------- | ------------------------------------------------------------ |
| Project               | 项目 / 工程 / 计划 / 方案 / 生产项目 / 专题研究 / 投影 / 突出 / 规划 / 预测 / 预计 / 投射 / 放映 / 展现 / 投掷 / 拟订方案 / 推想 |
| Develops              | 成长，发展，壮大 / 开发 / 研制 / 出现患 / 开始影响 / 开始侵袭 (develop的第三人称单数) |
| Software              | 软件                                                         |
| Reliable              | 可信赖的，可依靠的 / 真实可信的，确凿的 / 可靠度高的 / 可得出相同结果的 / 可靠的人 |
| Scalable              | 可伸缩的 / 可攀登的；可去鳞的；可称量的                      |
| Distributed Computing | 分布式计算 / 分布计算 / 分布式系统 / 分布式运算 / 分布式处理 |

- 第2句

| English                | Chinese                                                      |
| ---------------------- | ------------------------------------------------------------ |
| Software library       | 软件库 / 程序库                                              |
| Framework              | 框架 / 结构 / 机制 / 构架 / 准则 / 观点 / 信仰               |
| Allows                 | 允许 / 给予 / 准许 / 允许进入 (allow的第三人称单数)          |
| Distributed processing | 分布式处理 / 分布处理                                        |
| Large data sets        | 大型数据集 / 大数据集                                        |
| Clusters of computers  | 计算机的群集 / 电脑的群集 / computer的复数                   |
| Programming            | 程序设计 / 程序编制 / 编程 / 编排 / 选编 / 编写程序 (program的现在分词) / 编写程序 (programme的现在分词) |

- 第3句

| English      | Chinese                                                      |
| ------------ | ------------------------------------------------------------ |
| Designed     | 设计 (过去分词) / 设计 (过去式)                              |
| Scale up     | 增加 / 提高 / 增大                                           |
| Single       | 单个的 / 单一的 / 单身的 / 单人的 / 单程的 / 未婚的 / 仅有一个的 / 无伴侣的 / 特指某人或事物 / 单曲 / 单打 / 单人房间 / 单程票 / 单身者 / 一垒打 / 一元纸币 / 一分打 / 单曲磁带 / 挑选 / 作一垒手 |
| Servers      | 服务器 / 发球者 / 上菜用具 (server的复数)                    |
| Thousands of | 几千 / 成千上万                                              |
| Machines     | 机器 / 机械 / 装置 / 核心 / 机构 / 制造，加工，成型 (machine的第三人称单数和复数) |
| Offering     | 用品 / 作品 / 祭品 / 供品 / 剧作 / 供消遣的产品 / 提供 / 供应 / 主动提出 / 奉献，祭献 / 自愿给予 (offer的现在分词) |
| Local        | 地方的 / 本地的 / 当地的 / 局部的 / 当地人 / 本地人 / 公共汽车，火车 / 地方分会 / 住处附近的酒吧 |
| Computation  | 计算 / 计算过程                                              |
| Storage      | 存储，保管 / 存储 / 贮存，贮藏 / 蓄电 / 仓库 / 存储能力 / 仓储费，保管费 / 贮藏量，库存量 / 贮藏场所 |

- 第4句

| English           | Chinese                                                      |
| ----------------- | ------------------------------------------------------------ |
| Rather than       | 而不是                                                       |
| Rely on           | 依靠 / 信赖                                                  |
| Detect            | 发现 / 查明 / 侦察出                                         |
| Failures          | 失败 / 未做 / 未履行 / 失败的人 / 失败的复数                 |
| Application layer | 应用层 / 第七层 / 应用层面                                   |
| Delivering        | 交付 / 传送 / 递送 / 发表 / 发布 / 兑现 / 宣布 / 运载 / 履行 / 诺言不负所望 |
| On top of         | 在上面 / 在…之上 / 掌握 / 胜任 / 除…之外 / 完全控制某事物 / 对某事物摸得一清二楚 / 非常接近某人 / 逼近某人 |
| A cluster of      | 一组 / 一群 / 一簇 / 成群的 / 一串                           |
| May be            | 多半                                                         |
| Prone to          | 易于                                                         |

:::

## Latest news【最新消息】

### 2024 Mar 17【2024年3月17日】

- [Release 3.4.0 available](https://hadoop.apache.org/release/3.4.0.html)

This is the first release of Apache Hadoop 3.4 line. It contains 2888 bug fixes, improvements and enhancements since 3.3.

Users are encouraged to read the [overview of major changes](https://hadoop.apache.org/docs/r3.4.0/index.html). For details of please check [release notes](http://hadoop.apache.org/docs/r3.4.0/hadoop-project-dist/hadoop-common/release/3.4.0/RELEASENOTES.3.4.0.html) and [changelog](http://hadoop.apache.org/docs/r3.4.0/hadoop-project-dist/hadoop-common/release/3.4.0/CHANGELOG.3.4.0.html).

::: details 翻译

- 第1句话：这是Apache Hadoop 3.4系列的第一个版本。
- 第2句话：它包含自3.3以来的2888个错误修复、改进和增强。
- 第3句话：鼓励用户阅读主要变化的概述。
- 第4句话：有关的详细信息，请查看发布说明和更改日志。

:::

::: details 重点词汇

- 第3句

| English    | Chinese                                                      |
| ---------- | ------------------------------------------------------------ |
| Users      | 用户 / 用户信息 / 用户数 / 用户文件 / 受限用户               |
| Encouraged | 鼓励 / 支持 / 促进 / 激励 / 刺激 / 助长 / 怂恿 / 鼓动 / 劝告 (encourage的过去分词和过去式) |
| Overview   | 概述 / 概况 / 纵览 / 概论                                    |
| Major      | 专业 / 少校 / 大联盟 / 专业课 / 主修课程 / 主修学生 / 主要的 / 重要的 / 大的 / 严重 / 主修的 / 大调的 / 主修 / 专攻 |
| Changes    | 变化 / 改变 / 使不同 / 变换，改换，变成 / 变更 / 变革 / 更换 / 替代 / 替代物 (change的第三人称单数和复数) |

- 第4句

| English | Chinese                                                      |
| ------- | ------------------------------------------------------------ |
| Details | 详情 / 资料 / 消息 / 具体情况 / 全部细节 / 琐事 / 细微之处 / 枝节 / 详细说明 / 详述 / 派遣 / 详细列举 / 选派 / 彻底清洗 / 分遣 (detail的第三人称单数和复数) |
| Please  | 请 / 请问 / 请千万 / 请务必 / 的确 / 太感谢了 / 太好了 / 得了吧 / 算了吧 / 别闹了 / 收敛点儿 (常用在as或what、where等词后) / 想，选择，喜欢 / 使满意 / 使愉快 |
| Check   | 检查 / 控制 / 查看 / 检验 / 核查 / 核实 / 审查 / 托运 / 阻止 / 查明 / 抑制 / 克制，抑制 / 存放 / 弄确实 / 检查，查看 / 规定，条令，约束 / 调查 / 方格图案，方格，格子 / 寄存处，存放处 / 被将军的局面 / 存物牌，存放证 / 阻碍进程的事物 / 阻止恶化的事物 / 行已经办好 |
| Release | 释放 / 松开 / 免除，解除 / 公开 / 放出 / 开放 / 放开 / 发泄 / 放走 / 宣泄 / 使自由移动 / 使不紧张 / 发布 / 发行 / 排放 / 获释 / 解脱 / 新激光唱片，新电影 / 新发行的东西 |
| Notes   | 注释 / 记录 / 笔记 / 便条 / 批注 / 短笺 / 按语 / 注意 / 指出 / 留意 / 特别提到 (note的第三人称单数和复数) |

:::



## Modules【模块】

The project includes these modules:

该项目包括以下模块：

- **Hadoop Common**: The common utilities that support the other Hadoop modules.
- **Hadoop Distributed File System (HDFS™)**: A distributed file system that provides high-throughput access to application data.
- **Hadoop YARN**: A framework for job scheduling and cluster resource management.
- **Hadoop MapReduce**: A YARN-based system for parallel processing of large data sets.

## Who Uses Hadoop?

谁使用Hadoop？

A wide variety of companies and organizations use Hadoop for both research and production. Users are encouraged to add themselves to the Hadoop [PoweredBy wiki page](https://wiki.apache.org/hadoop2/PoweredBy).

::: details 翻译

- 第1句话：各种各样的公司和组织都使用Hadoop进行研究和生产。
- 第2句话：鼓励用户将自己添加到HadoopPoweredBy wiki页面。

:::



::: details 重点词汇

- 第2句

| English    | Chinese                                                      |
| ---------- | ------------------------------------------------------------ |
| Users      | 用户 / 用户信息 / 用户数 / 用户文件 / 受限用户               |
| Encouraged | 鼓励 / 支持 / 促进 / 激励 / 刺激 / 助长 / 怂恿 / 鼓动 / 劝告 (encourage的过去分词和过去式) |
| Themselves | 他们自己 / 它们自己 / 她们自己 (用以强调they或复数主语) / 他们亲自，他们本身 (指性别不详的人时，用以代替himself或herselfherself的复数) |

:::



## Related projects【相关项目】

