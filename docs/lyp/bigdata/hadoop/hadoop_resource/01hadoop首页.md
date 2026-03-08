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

## Modules【模块】

The project includes these modules:

该项目包括以下模块：

- **Hadoop Common**: The common utilities that support the other Hadoop modules.
- **Hadoop Distributed File System (HDFS™)**: A distributed file system that provides high-throughput access to application data.
- **Hadoop YARN**: A framework for job scheduling and cluster resource management.
- **Hadoop MapReduce**: A YARN-based system for parallel processing of large data sets.

::: details 翻译

- 第1句话：支持其他Hadoop模块的通用实用程序。
- 第2句话：一种分布式文件系统，提供对应用程序数据的高吞吐量访问。
- 第3句话：作业调度和集群资源管理的框架。
- 第4句话：一种基于YARN的大型数据集并行处理系统。

:::

::: details  重点词汇

- 第1句

| English   | Phonetic        | Chinese                                                      |
| --------- | --------------- | ------------------------------------------------------------ |
| common    | /ˈkɒmən/        | 常见的，共同的，普通的，普遍的，通常的，共享的，共有的，平常的，寻常的，平凡的，粗俗的，公共用地，公地，学生，公共食堂 |
| utilities | /juːˌtɪlɪˈtiːz/ | 实用，实用程序，效用，公用事业，公用程序，有用               |
| support   | /səˈpɔːt/       | 支持，支撑，帮助，援助，鼓励，资助，赞助，证实，拥护，养活，当助演，担任演出嘉宾，支承，技术支持，支座，支柱，证据，支持器，托支撑物，救助，助演嘉宾 |
| Hadoop    | /ˈhæduːp/       | 安装，云计算，分布式计算，大数据分析，分布式系统             |
| modules   | /ˈmɒdjuːlz/     | 模块，单元，组件，配件，功能块，程序块                       |

- 第2句

| English                 | Phonetic                     | Chinese        |
| ----------------------- | ---------------------------- | -------------- |
| Distributed File System | /dɪˈstrɪbjʊtɪd faɪl ˈsɪstəm/ | 分布式文件系统 |
| Provides                | /prəˈvaɪdz/                  | 提供           |
| High-throughput         | /haɪ θruːˈpʊt/               | 高通量         |
| Access to               | /ˈæksɛs tuː/                 | 访问           |
| Application             | /ˌæplɪˈkeɪʃən/               | 应用           |
| Data                    | /ˈdeɪtə/                     | 数据           |

- 第3句

| English             | Chinese                                                     |
| ------------------- | ----------------------------------------------------------- |
| Framework           | 框架 / 结构 / 机制 / 构架 / 准则 / 观点 / 信仰              |
| Job Scheduling      | 作业调度 / 任务调度 / 工作排程                              |
| Cluster             | 簇 / 团 / 束 / 串 / 群 / 组 / 辅音连缀 / 辅音丛 / 聚 / 聚集 |
| Resource Management | 资源管理 / 管理资源 / 资源管理类                            |

- 第4句

| English             | Chinese                                                    |
| ------------------- | ---------------------------------------------------------- |
| System              | 系统 / 制度，体系，集团 / 体系 / 制度 / 方法 / 体制 / 身体 |
| Parallel processing | 并行处理                                                   |
| Large data sets     | 大型数据集 / 大数据集                                      |

:::

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

Other Hadoop-related projects at Apache include:

Apache的其他Hadoop相关项目包括：

- [**Ambari™**](https://ambari.apache.org/): A web-based tool for provisioning, managing, and monitoring Apache Hadoop clusters which includes support for Hadoop HDFS, Hadoop MapReduce, Hive, HCatalog, HBase, ZooKeeper, Oozie, Pig and Sqoop. Ambari also provides a dashboard for viewing cluster health such as heatmaps and ability to view MapReduce, Pig and Hive applications visually alongwith features to diagnose their performance characteristics in a user-friendly manner.

::: details 翻译

- 第1句话：一个基于web的工具，用于提供、管理和监控Apache Hadoop集群，包括对Hadoop HDFS、Hadoop MapReduce、Hive、HCatalog、HBase、ZooKeeper、Oozie、Pig和Sqoop的支持。
- 第2句话：Ambari还提供了一个用于查看集群运行状况的仪表板，如热图，以及可视化查看MapReduce、Pig和Hive应用程序的能力，以及以用户友好的方式诊断其性能特征的功能。

:::

::: details 重点词汇

- 第1句话

| English        | Phonetic      | Chinese                                                      |
| -------------- | ------------- | ------------------------------------------------------------ |
| provisioning   | /prəˈvɪʒənɪŋ/ | 供应配置，供给，指配置备                                     |
| Apache         | /əˈpætʃi/     | 阿帕切人                                                     |
| Hadoop         | /ˈhæduːp/     | 安装，云计算，分布式计算，大数据分析，分布式系统             |
| clusters       | /ˈklʌstəz/    | 簇，团，束，串，群，组，辅音连缀，辅音丛，群聚，聚集         |
| which includes |               | 其中包括，包括                                               |
| support for    |               | 对……的支持                                                   |
| Hive           | /haɪv/        | 蜂巢，蜂箱，蜂房                                             |
| ZooKeeper      | /zuːˈkiːpər/  | 动物园管理员                                                 |
| Pig            | /pɪɡ/         | 猪，令人不快的人，贪婪的人，对警察的蔑称，吃得过量，大吃特吃 |

- 第2句话

| English                     | Phonetic            | Chinese                                                      |
| --------------------------- | ------------------- | ------------------------------------------------------------ |
| Ambari                      | /ˈæmbɑːri/          | 洋麻                                                         |
| dashboard                   | /ˈdæʃbɔːrd/         | 仪表板                                                       |
| cluster                     | /ˈklʌstər/          | 簇，团，束，串，群，组，辅音连缀，辅音丛，群聚，聚集         |
| such as                     |                     | 例如……等像像……这样，像……那种诸如……之类                       |
| Pig                         | /pɪɡ/               | 猪，令人不快的人，贪婪的人，对警察的蔑称，吃得过量，大吃特吃 |
| Hive                        | /haɪv/              | 蜂巢，蜂箱，蜂房                                             |
| visually                    | /ˈvɪʒuəli/          | 视觉上形象化地；外表上；看得见地                             |
| diagnose                    | /ˈdaɪəɡnəʊz/        | 诊断，判断                                                   |
| performance characteristics |                     | 性能特征，性能特性，性能特点，工作特性                       |
| user-friendly               | /ˈjuːzə(r)ˌfrɛndli/ | 便于使用的，用户友好型，易于掌握的，方便非专业用户的         |

:::

- [**Avro™**](https://avro.apache.org/): A data serialization system.一种数据序列化系统。
- [**Cassandra™**](https://cassandra.apache.org/): A scalable multi-master database with no single points of failure.

::: details 翻译

- 第1句话：一个可扩展的多主机数据库，没有单点故障。

:::

::: details 重点词汇

- 第1句话

| English  | Phonetic     | Chinese                                                      |
| -------- | ------------ | ------------------------------------------------------------ |
| scalable | /ˈskeɪləbl/  | 可伸缩的，可攀登的，可去鳞的，可称量的                       |
| database | /ˈdeɪtəbeɪs/ | 数据库                                                       |
| single   | /ˈsɪŋɡəl/    | 单个的，单一的，单身的，单人的，单程的，未婚的，仅有一个的，无伴侣的，特指某人或事物 |
| points   | /pɔɪnts/     | 观点，要点，重点，目的，理由，论点，意图，见解，核心问题，指，指向，朝向，瞄准 |
| failure  | /ˈfeɪljər/   | 失败，故障，倒闭，未做，未履行，歉收，失败的人               |

:::

- [**Chukwa™**](https://chukwa.apache.org/): A data collection system for managing large distributed systems.
- [**HBase™**](https://hbase.apache.org/): A scalable, distributed database that supports structured data storage for large tables.

::: details 翻译

- 第1句话：提供数据摘要和即席查询的数据仓库基础设施。

:::

::: details 重点词汇

- 第1句话

:::

- 

- [**Hive™**](https://hive.apache.org/): A data warehouse infrastructure that provides data summarization and ad hoc querying.

::: details 翻译

- 第1句话：提供数据摘要和即席查询的数据仓库基础设施。

:::

::: details 重点词汇

- 第1句话

:::

- [**Mahout™**](https://mahout.apache.org/): A Scalable machine learning and data mining library.

一个可扩展的机器学习和数据挖掘库。

::: details 重点词汇

- 第1句话

| English          | Phonetic           | Chinese                                            |
| ---------------- | ------------------ | -------------------------------------------------- |
| Scalable         | /ˈskeɪləbl/        | 可扩展性，可扩展，可伸缩的，可伸缩，可伸缩性       |
| machine learning | /məˈʃiːn ˈlɜːrnɪŋ/ | 机器学习；机器改进能力                             |
| data mining      | /ˈdeɪtə ˈmaɪnɪŋ/   | 数据采掘                                           |
| library          | /ˈlaɪbrəri/        | 图书馆，图书室，资料室，藏书楼，个人收藏，系列丛书 |

:::

- [**Ozone™**](https://ozone.apache.org/): A scalable, redundant, and distributed object store for Hadoop.

::: details 翻译

- 第1句话：Hadoop的可扩展、冗余和分布式对象存储。

:::

::: details 重点词汇

- 第1句话

| English            | Phonetic                  | Chinese                                                      |
| ------------------ | ------------------------- | ------------------------------------------------------------ |
| scalable           | /ˈskeɪləbl/               | 可伸缩的，可攀登的，可去鳞的，可称量的                       |
| redundant          | /rɪˈdʌndənt/              | 冗余的，多余的，不需要的，被裁减的                           |
| distributed object | /dɪˈstrɪbjuːtɪd ˈɒbdʒɪkt/ | 分布式对象，分布对象                                         |
| store              | /stɔːr/                   | 百货商店，储存，储备，商店，仓库，栈房，储藏所，大量，丰富，存储器，储存品，备用品，补给品，储备金，待肥育猪，存入仓库，贮存，供应，记忆，容纳，装满，储存的，制成品的，现成的，待肥育的，商店里买得到的，用作储藏所的 |
| Hadoop             | /ˈhæduːp/                 | 安装，云计算，分布式计算，大数据分析，分布式系统             |

:::

- [**Pig™**](https://pig.apache.org/): A high-level data-flow language and execution framework for parallel computation.

::: details 翻译

- 第1句话：一种用于并行计算的高级数据流语言和执行框架。

:::

::: details 重点词汇

- 第1句话

| English              | Phonetic                  | Chinese                                              |
| -------------------- | ------------------------- | ---------------------------------------------------- |
| high-level           | /haɪ levəl/               | 高级的，高层的，高等的，在高处的，级别高的，位置高的 |
| data-flow language   | /ˈdeɪtə fləʊ ˈlæŋɡwɪdʒ/   | 数据流语言                                           |
| execution            | /ˌɛksɪˈkjuːʃən/           | 执行，实施，处决，实行，制作，表演，演奏             |
| framework            | /ˈfreɪmwɜːrk/             | 框架，结构，机制，构架，准则，观点，信仰             |
| parallel computation | /ˈpærəlel ˌkɒmpjuˈteɪʃən/ | 并行计算，平行计算；并行运算                         |

:::

- [**Spark™**](https://spark.apache.org/): A fast and general compute engine for Hadoop data. Spark provides a simple and expressive programming model that supports a wide range of applications, including ETL, machine learning, stream processing, and graph computation.

::: details 翻译

- 第1句话：Hadoop数据的快速通用计算引擎。
- 第2句话：Spark提供了一个简单而富有表现力的编程模型，支持广泛的应用程序，包括ETL、机器学习、流处理和图形计算。

:::

::: details 重点词汇

- 第2句话

| English           | Phonetic            | Chinese                                                      |
| ----------------- | ------------------- | ------------------------------------------------------------ |
| Spark             | /spɑːrk/            | 火花，电火花，火星，生气，诱因，一星，丝毫，一丁点，愤怒的情感，引发，触发，产生电火花，冒火花，飞火星 |
| expressive        | /ɪkˈsprɛsɪv/        | 有表现力的，表示，表现，表达，富于表情的，意味深长的         |
| programming model | /ˈprəʊɡræmɪŋ ˈmɒdl/ | 编程模型，编程模式，程序设计模型                             |
| supports          | /səˈpɔːrts/         | 支持，帮助，援助，鼓励，资助，赞助，拥护，支持，支承结构，忍受，[法]赡养（support 的复数） |
| wide range        | /waɪd reɪndʒ/       | 数量繁多                                                     |
| ETL               | /ˌiːtiːˈɛl/         | 最早发射时间(Earliest Time to Launch)，电子技术实验室(Electronic Technology Laboratory)，应急时限(Emergency Time Limit) |
| machine learning  | /məˈʃiːn ˈlɜːrnɪŋ/  | 机器学习；机器改进能力                                       |
| stream            | /striːm/            | 流，流动，流出，用流式传输，流播，飘动，飘扬，按能力分班，一个接一个地移动，鱼贯而行，班，组，溪，小河，一连串，接二连三，源源不断 |
| graph             | /ɡræf/              | 图，曲线图，图表，用图表表示，用胶版印刷                     |
| computation       | /ˌkɒmpjuːˈteɪʃən/   | 计算，计算过程                                               |

:::

- [**Submarine**](https://submarine.apache.org/): A unified AI platform which allows engineers and data scientists to run Machine Learning and Deep Learning workload in distributed cluster.

::: details 翻译

- 第1句话：一个统一的人工智能平台，允许工程师和数据科学家在分布式集群中运行机器学习和深度学习工作负载。

:::

::: details 重点词汇

- 第1句话

| English          | Phonetic           | Chinese                                                      |
| ---------------- | ------------------ | ------------------------------------------------------------ |
| unified          | /ˈjuːnɪfaɪd/       | 统一的，一致的；联合的，一体的                               |
| platform         | /ˈplætfɔːm/        | 平台，站台，纲领，政纲，宣言，机会，阵地，讲坛，月台，计算机平台，舞台，讲台，上下车出入口，入口平台，厚鞋底，演讲，把…放在台上，为…设台 |
| allows           | /əˈlaʊzɪz/         | 允许，给予，准许，允许进入                                   |
| engineers        | /ˌendʒɪˈnɪəz/      | 工程师，设计师，技师，技工，机械师，机修工，轮机手，密谋，策划，设计，制造，改变…的基因结构 |
| scientists       | /ˈsaɪəntɪsts/      | 科学家                                                       |
| Machine Learning | /məˈʃiːn ˈlɜːrnɪŋ/ | 机器学习，机械学习，自动学习，机器学                         |
| Learning         | /ˈlɜːrnɪŋ/         | 学习，知识，学问，学识，学，学会，学到，得知，获悉，记住，听到，熟记，背熟 |
| workload         | /ˈwɜːkˌləʊd/       | 工作量，工作负担                                             |
| distributed      | /dɪˈstrɪbjuːtɪd/   | 分布的，分散的，使分布，分配，分发，分销，分散，使散开       |
| cluster          | /ˈklʌstər/         | 簇，团，束，串，群，组，辅音连缀，辅音丛，群聚，聚集         |

:::

- [**Tez™**](https://tez.apache.org/): A generalized data-flow programming framework, built on Hadoop YARN, which provides a powerful and flexible engine to execute an arbitrary DAG of tasks to process data for both batch and interactive use-cases. Tez is being adopted by Hive™, Pig™ and other frameworks in the Hadoop ecosystem, and also by other commercial software (e.g. ETL tools), to replace Hadoop™ MapReduce as the underlying execution engine.
- [**ZooKeeper™**](https://zookeeper.apache.org/): A high-performance coordination service for distributed applications.

::: details 翻译

- 第1句话：用于分布式应用程序的高性能协调服务。

:::