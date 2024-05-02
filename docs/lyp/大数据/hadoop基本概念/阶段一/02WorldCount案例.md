# WordCount经典案例

::: tip 需求

需求: 在一堆给定的文本文件中统计输出每一个单词出现的总次数。

:::

## Step1)数据的准备工作

1. 创建一个新的文件





2. 向其中放入以下内容并保存

```
hello,world,hadoop
hive,sqoop,flume,hello
kitty,tom,jerry,world
hadoop
```

3. 上传到 HDFS

```
// 在hdfs上创建一个目录。
hdfs dfs -mkdir /wordcount/

// 上传指定文件 到 hdfs的指定目录下。
hdfs dfs -put wordcount.txt /wordcount/
```

## Step2)Mapper