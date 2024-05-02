# srping源码编译

当前版本下载地址

https://github.com/spring-projects/spring-framework/tags?after=v6.1.0-RC1

解压：

![image-20240427100649715](02srping源码编译.assets/image-20240427100649715.png)



spring的源码目录。



![image-20240427100701776](02srping源码编译.assets/image-20240427100701776.png)

## 01)安装gradle



![image-20240427100933538](02srping源码编译.assets/image-20240427100933538.png)



## 02)idea打开

修改gradle的安装配置文件

![image-20240427101012773](02srping源码编译.assets/image-20240427101012773.png)



```
distributionUrl=file:///D:/worktools/gradle/gradle-5.6.4-bin.zip
```



## 03)修改下载依赖地址

拉取下载依赖地址要改为阿里的

![image-20240427101416742](02srping源码编译.assets/image-20240427101416742.png)



```xml
		repositories {
			//mavenCentral()
			maven { url "https://maven.aliyun.com/nexus/content/groups/public/"}
			maven { url "https://maven.aliyun.com/nexus/content/repositories/jcenter"}
			maven { url "https://repo.spring.io/libs-spring-framework-build" }
			maven { url "https://repo.spring.io/snapshot" } // Reactor
			maven { url "https://oss.jfrog.org/artifactory/oss-snapshot-local" }
		}
```



## 04)构建完成

![image-20240427101607805](02srping源码编译.assets/image-20240427101607805.png)



## 05)创建一个模块

- 选中工程，右键。创建一个模块。

![image-20240427101727838](02srping源码编译.assets/image-20240427101727838.png)



- 选择：gradle



![image-20240427101740438](02srping源码编译.assets/image-20240427101740438.png)



- 模块起一个名字。

![image-20240427101755713](02srping源码编译.assets/image-20240427101755713.png)



- 创建的效果如图：

![image-20240427101816693](02srping源码编译.assets/image-20240427101816693.png)



## 06)编译响应的模块

![image-20240427102503578](02srping源码编译.assets/image-20240427102503578.png)

```xml
dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter-api:5.7.0'
    testRuntimeOnly 'org.junit.jupiter:junit-jupiter-engine:5.7.0'
    compile(project(":spring-context"))
//    optional(":spring-context")
}
```

![image-20240427102525920](02srping源码编译.assets/image-20240427102525920.png)







![image-20240427103118054](02srping源码编译.assets/image-20240427103118054.png)



## 常见报错

### **问题一：**

```
fatal: not a git repository (or any of the parent directories): .git

BUILD SUCCESSFUL in 21s
Build scan background action failed.
org.gradle.process.internal.ExecException: Process 'command 'git'' finished with non-zero exit value 128
	at org.gradle.process.internal.DefaultExecHandle$ExecResultImpl.assertNormalExitValue(DefaultExecHandle.java:409)
	at org.gradle.process.internal.DefaultExecAction.execute(DefaultExecAction.java:38)
	at org.gradle.process.internal.DefaultExecActionFactory.exec(DefaultExecActionFactory.java:145)
	at io.spring.ge.conventions.gradle.WorkingDirectoryProcessOperations.exec(WorkingDirectoryProcessOperations.java:45)
	at io.spring.ge.conventions.gradle.ProcessOperationsProcessRunner.run(ProcessOperationsProcessRunner.java:41)
	at io.spring.ge.conventions.core.BuildScanConventions.run(BuildScanConventions.java:166)
	at io.spring.ge.conventions.core.BuildScanConventions.addGitMetadata(BuildScanConventions.java:113)
	at io.spring.ge.conventions.gradle.GradleConfigurableBuildScan.lambda$background$0(GradleConfigurableBuildScan.java:104)
	at com.gradle.scan.plugin.internal.api.j.a(SourceFile:22)
	at com.gradle.scan.plugin.internal.api.k$a.a(SourceFile:112)
	at com.gradle.scan.plugin.internal.api.h.a(SourceFile:62)
	at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)
	at java.lang.Thread.run(Thread.java:745)
```



::: tip 我这个之前编译过
本地就有之前编译的依赖。
:::



### **问题二：**

- **发生问题的场景：**

自己在A电脑上编译后推送到gitee上。在B电脑pull下来编译。运行结果报错！



![image-20240501100001933](02srping源码编译.assets/image-20240501100001933.png)





![image-20240501110126621](02srping源码编译.assets/image-20240501110126621.png)



- 分析

无法导入这个包下的文件。排查后发现。

![image-20240501100220229](02srping源码编译.assets/image-20240501100220229.png)



- 原因：

是在A电脑编译后，gitignore导致的。

![image-20240501100351350](02srping源码编译.assets/image-20240501100351350.png)

- **解决：**

![image-20240501100609366](02srping源码编译.assets/image-20240501100609366.png)















### 问题三：

- **问题**描述

在A电脑上运行效果如下：**解决的效果图**。现在运行如下：

![image-20240501105120652](02srping源码编译.assets/image-20240501105120652.png)







- **解决**

![image-20240501104834610](02srping源码编译.assets/image-20240501104834610.png)

问题是在没有跑spring-core的test。



- 解决的效果图

![image-20240501105202726](02srping源码编译.assets/image-20240501105202726.png)



























