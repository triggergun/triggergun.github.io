(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1153:function(a,e,t){"use strict";t.r(e);var n=t(14),r=Object(n.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"spring源码下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring源码下载"}},[a._v("#")]),a._v(" Spring源码下载")]),a._v(" "),e("p",[a._v("从"),e("a",{attrs:{href:"https://so.csdn.net/so/search?q=github&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[a._v("github"),e("OutboundLink")],1),a._v("上下载Spring的源代码")]),a._v(" "),e("p",[a._v("下载地址：https://github.com/spring-projects/spring-framework")]),a._v(" "),e("p",[a._v("访问地址之后，打开Spring的代码页面找到你想下载的版本，如5.0.x，如下图所示：")]),a._v(" "),e("p",[e("img",{attrs:{src:t(509),alt:"image-20240414185029475"}})]),a._v(" "),e("h2",{attrs:{id:"下载方式一-git-clone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载方式一-git-clone"}},[a._v("#")]),a._v(" 下载方式一：git clone")]),a._v(" "),e("p",[a._v("切换版本后，点右侧的code按钮，拷贝地址，在本地的执行git clone命令")]),a._v(" "),e("p",[e("img",{attrs:{src:t(510),alt:"image-20240414185101395"}})]),a._v(" "),e("ul",[e("li",[a._v("下载源码")])]),a._v(" "),e("p",[e("img",{attrs:{src:t(511),alt:"image-20240414185153780"}})]),a._v(" "),e("ul",[e("li",[a._v("项目的目录结构")])]),a._v(" "),e("p",[e("img",{attrs:{src:t(512),alt:"image-20240414185334844"}})]),a._v(" "),e("ul",[e("li",[a._v("打开spring项目")])]),a._v(" "),e("p",[e("img",{attrs:{src:t(513),alt:"image-20240414185951540"}})]),a._v(" "),e("p",[e("img",{attrs:{src:t(514),alt:"image-20240414190456709"}})]),a._v(" "),e("h2",{attrs:{id:"下载方式二-直接下载压缩包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载方式二-直接下载压缩包"}},[a._v("#")]),a._v(" 下载方式二：直接下载压缩包")]),a._v(" "),e("p",[a._v("还是在Code按钮中点开，找到下载代码压缩包，如下图所示：")]),a._v(" "),e("p",[e("img",{attrs:{src:t(515),alt:"image-20240414185254241"}})]),a._v(" "),e("ul",[e("li",[a._v("压缩包下载")])]),a._v(" "),e("p",[e("img",{attrs:{src:t(516),alt:"image-20240414190523596"}})]),a._v(" "),e("p",[e("img",{attrs:{src:t(517),alt:"image-20240414190713745"}})]),a._v(" "),e("h2",{attrs:{id:"编译中遇到问题1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译中遇到问题1"}},[a._v("#")]),a._v(" 编译中遇到问题1")]),a._v(" "),e("p",[a._v("由于到目前为止，只是打开代码等待IDEA的自动编译，在编译的过程中会出现如下错误：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Could not GET ‘https://repo.spring.io/plugins-release/org/springframework/build/gradle/xxx\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("控制台的报错信息如下：")]),a._v(" "),e("p",[e("img",{attrs:{src:t(518),alt:"image-20240414190951588"}})]),a._v(" "),e("p",[a._v("无法获取“https://repo.spring.io/plugins-release/io/spring/gradle/propdeps-plugin/0.0.9.RELEASE/propdeps-plugin-0.0.9.RELEASE.pom'. 从服务器接收到状态代码401：禁用Gradle“脱机模式”并同步项目")]),a._v(" "),e("p",[e("strong",[a._v("原因")])]),a._v(" "),e("p",[a._v("原来Spring从5.X之后访问"),e("strong",[a._v("repo.spring.io")]),a._v("仓库需要权限认证了，但是我没有Spring仓库的账户和密码改怎么拉去jar呢？在这里我们可以用阿里云的镜像代替Spring官网的镜像。在项目中的"),e("strong",[a._v("build.gradle")]),a._v("文件中的镜像修改一下就好啦。")]),a._v(" "),e("p",[e("strong",[a._v("解决")])]),a._v(" "),e("p",[a._v("打开工程下的"),e("strong",[a._v("build.gradle文件，如下图所示：")])]),a._v(" "),e("p",[e("img",{attrs:{src:t(519),alt:"image-20240414191227573"}})]),a._v(" "),e("div",{staticClass:"language-gradle line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-gradle"}},[e("code",[a._v("\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//maven私服。此处设置为ali的旧库，地址是url")]),a._v("\n\t\tmaven"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" url "),e("span",{pre:!0,attrs:{class:"token interpolation-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://maven.aliyun.com/nexus/content/groups/public"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//阿里云新库")]),a._v("\n\t\tmaven "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" url "),e("span",{pre:!0,attrs:{class:"token interpolation-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://maven.aliyun.com/repository/central"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\t\tmaven "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" url "),e("span",{pre:!0,attrs:{class:"token interpolation-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://maven.aliyun.com/repository/google"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\t\tmaven "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" url "),e("span",{pre:!0,attrs:{class:"token interpolation-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://maven.aliyun.com/repository/gradle-plugin"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\t\tmaven "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" url "),e("span",{pre:!0,attrs:{class:"token interpolation-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://maven.aliyun.com/repository/jcenter"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\t\tmaven "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" url "),e("span",{pre:!0,attrs:{class:"token interpolation-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://maven.aliyun.com/repository/spring"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\t\tmaven "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" url "),e("span",{pre:!0,attrs:{class:"token interpolation-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://maven.aliyun.com/repository/spring-plugin"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\t\tmaven "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" url "),e("span",{pre:!0,attrs:{class:"token interpolation-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://maven.aliyun.com/repository/public"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\t\tmaven "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" url "),e("span",{pre:!0,attrs:{class:"token interpolation-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://maven.aliyun.com/repository/releases"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\t\tmaven "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" url "),e("span",{pre:!0,attrs:{class:"token interpolation-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://maven.aliyun.com/repository/snapshots"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\t\tmaven "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" url "),e("span",{pre:!0,attrs:{class:"token interpolation-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://maven.aliyun.com/repository/grails-core"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\t\tmaven "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" url "),e("span",{pre:!0,attrs:{class:"token interpolation-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://maven.aliyun.com/repository/mapr-public"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\t\tmaven "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" url "),e("span",{pre:!0,attrs:{class:"token interpolation-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://maven.aliyun.com/repository/apache-snapshots"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br")])]),e("ul",[e("li",[a._v("替换的效果")])]),a._v(" "),e("p",[e("img",{attrs:{src:t(520),alt:"image-20240414191413829"}})]),a._v(" "),e("p",[a._v("替换结束后，重新点击编译，此时就可以下载依赖的jar包了。")]),a._v(" "),e("blockquote",[e("p",[a._v("注意："),e("font",{attrs:{color:"red"}},[e("strong",[a._v("此过程可能较慢，请耐心等待。。。")])]),a._v("等下载完成后，编译结束，就可以自由查阅Spring源码了。。。")],1)]),a._v(" "),e("h2",{attrs:{id:"常见问题2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题2"}},[a._v("#")]),a._v(" 常见问题2")]),a._v(" "),e("p",[e("img",{attrs:{src:t(521),alt:"image-20240414213606959"}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("distributionUrl=file:///D:/worktools/gradle/gradle-4.3.1-bin.zip\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("CONFIGURE SUCCESSFUL in 9s\nThe getTestClassesDir() method has been deprecated and is scheduled to be removed in Gradle 5.0. Please use the getTestClassesDirs() method instead.\n\tat org.gradle.api.tasks.testing.Test.getTestClassesDir(Test.java:950)\n\tat org.gradle.api.tasks.testing.Test_Decorated.getTestClassesDir(Unknown Source)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\n\tat groovy.lang.MetaBeanProperty.getProperty(MetaBeanProperty.java:59)\n\tat org.gradle.internal.metaobject.BeanDynamicObject$MetaClassAdapter.getProperty(BeanDynamicObject.java:228)\n\tat org.gradle.internal.metaobject.BeanDynamicObject.tryGetProperty(BeanDynamicObject.java:171)\n\tat org.gradle.internal.metaobject.CompositeDynamicObject.tryGetProperty(CompositeDynamicObject.java:55)\n\tat org.gradle.internal.metaobject.AbstractDynamicObject.getProperty(AbstractDynamicObject.java:59)\n\tat org.gradle.api.tasks.testing.Test_Decorated.getProperty(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.PogoGetPropertySite.getProperty(PogoGetPropertySite.java:50)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callGetProperty(AbstractCallSite.java:296)\n\tat org.jetbrains.plugins.gradle.tooling.builder.ExternalTestsModelBuilderImpl.getClassesDirs(ExternalTestsModelBuilderImpl.groovy:84)\n\tat org.jetbrains.plugins.gradle.tooling.builder.ExternalTestsModelBuilderImpl.access$0(ExternalTestsModelBuilderImpl.groovy)\n\tat org.jetbrains.plugins.gradle.tooling.builder.ExternalTestsModelBuilderImpl$_getMapping_closure1.doCall(ExternalTestsModelBuilderImpl.groovy:41)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:294)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1022)\n\tat groovy.lang.Closure.call(Closure.java:414)\n\tat groovy.lang.Closure.call(Closure.java:430)\n\tat org.gradle.api.internal.ClosureBackedAction.execute(ClosureBackedAction.java:71)\n\tat org.gradle.util.ConfigureUtil.configureTarget(ConfigureUtil.java:160)\n\tat org.gradle.util.ConfigureUtil.configureSelf(ConfigureUtil.java:136)\n\tat org.gradle.api.internal.AbstractTask.configure(AbstractTask.java:638)\n\tat org.gradle.api.internal.AbstractTask.configure(AbstractTask.java:90)\n\tat org.gradle.util.ConfigureUtil.configure(ConfigureUtil.java:104)\n\tat org.gradle.util.ConfigureUtil$1.execute(ConfigureUtil.java:123)\n\tat org.gradle.internal.Actions$FilteredAction.execute(Actions.java:205)\n\tat org.gradle.api.internal.DefaultDomainObjectCollection.all(DefaultDomainObjectCollection.java:136)\n\tat org.gradle.api.internal.DefaultDomainObjectCollection.all(DefaultDomainObjectCollection.java:154)\n\tat org.gradle.api.internal.tasks.RealizableTaskCollection.all(RealizableTaskCollection.java:197)\n\tat org.gradle.api.internal.DefaultDomainObjectCollection.withType(DefaultDomainObjectCollection.java:165)\n\tat org.jetbrains.plugins.gradle.tooling.builder.ExternalTestsModelBuilderImpl.getMapping(ExternalTestsModelBuilderImpl.groovy:40)\n\tat org.jetbrains.plugins.gradle.tooling.builder.ExternalTestsModelBuilderImpl.buildAll(ExternalTestsModelBuilderImpl.groovy:29)\n\tat org.jetbrains.plugins.gradle.tooling.internal.ExtraModelBuilder.buildAll(ExtraModelBuilder.java:115)\n\tat org.jetbrains.plugins.gradle.tooling.internal.ExtraModelBuilder.buildAll(ExtraModelBuilder.java:80)\n\tat org.gradle.tooling.internal.provider.runner.DefaultBuildController.getModel(DefaultBuildController.java:55)\n\tat org.gradle.tooling.internal.consumer.connection.BuildControllerWithoutParameterSupport.getModel(BuildControllerWithoutParameterSupport.java:53)\n\tat org.gradle.tooling.internal.consumer.connection.UnparameterizedBuildController.getModel(UnparameterizedBuildController.java:113)\n\tat org.gradle.tooling.internal.consumer.connection.BuildControllerWithoutParameterSupport.getModel(BuildControllerWithoutParameterSupport.java:48)\n\tat org.gradle.tooling.internal.consumer.connection.UnparameterizedBuildController.findModel(UnparameterizedBuildController.java:97)\n\tat org.gradle.tooling.internal.consumer.connection.BuildControllerWithoutParameterSupport.findModel(BuildControllerWithoutParameterSupport.java:32)\n\tat org.gradle.tooling.internal.consumer.connection.UnparameterizedBuildController.findModel(UnparameterizedBuildController.java:81)\n\tat org.gradle.tooling.internal.consumer.connection.BuildControllerWithoutParameterSupport.findModel(BuildControllerWithoutParameterSupport.java:32)\n\tat org.jetbrains.plugins.gradle.model.ProjectImportAction$MyBuildController.findModel(ProjectImportAction.java:581)\n\tat org.jetbrains.plugins.gradle.model.ClassSetImportModelProvider.populateProjectModels(ClassSetImportModelProvider.java:39)\n\tat org.jetbrains.plugins.gradle.model.ProjectImportAction.getProjectModels(ProjectImportAction.java:290)\n\tat org.jetbrains.plugins.gradle.model.ProjectImportAction.access$600(ProjectImportAction.java:42)\n\tat org.jetbrains.plugins.gradle.model.ProjectImportAction$5.execute(ProjectImportAction.java:206)\n\tat org.jetbrains.plugins.gradle.model.ProjectImportAction$5.execute(ProjectImportAction.java:203)\n\tat org.jetbrains.plugins.gradle.model.ProjectImportAction.fetchProjectBuildModels(ProjectImportAction.java:219)\n\tat org.jetbrains.plugins.gradle.model.ProjectImportAction.execute(ProjectImportAction.java:126)\n\tat org.jetbrains.plugins.gradle.model.ProjectImportAction.execute(ProjectImportAction.java:42)\n\tat org.gradle.tooling.internal.consumer.connection.InternalBuildActionAdapter.execute(InternalBuildActionAdapter.java:55)\n\tat org.gradle.tooling.internal.provider.runner.ClientProvidedBuildActionRunner.buildResult(ClientProvidedBuildActionRunner.java:76)\n\tat org.gradle.tooling.internal.provider.runner.ClientProvidedBuildActionRunner.access$000(ClientProvidedBuildActionRunner.java:38)\n\tat org.gradle.tooling.internal.provider.runner.ClientProvidedBuildActionRunner$1.buildFinished(ClientProvidedBuildActionRunner.java:57)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.event.DefaultListenerManager$ListenerDetails.dispatch(DefaultListenerManager.java:371)\n\tat org.gradle.internal.event.DefaultListenerManager$ListenerDetails.dispatch(DefaultListenerManager.java:353)\n\tat org.gradle.internal.event.AbstractBroadcastDispatch.dispatch(AbstractBroadcastDispatch.java:58)\n\tat org.gradle.internal.event.DefaultListenerManager$EventBroadcast$ListenerDispatch.dispatch(DefaultListenerManager.java:341)\n\tat org.gradle.internal.event.DefaultListenerManager$EventBroadcast$ListenerDispatch.dispatch(DefaultListenerManager.java:328)\n\tat org.gradle.internal.event.AbstractBroadcastDispatch.dispatch(AbstractBroadcastDispatch.java:42)\n\tat org.gradle.internal.event.BroadcastDispatch$SingletonDispatch.dispatch(BroadcastDispatch.java:230)\n\tat org.gradle.internal.event.BroadcastDispatch$SingletonDispatch.dispatch(BroadcastDispatch.java:149)\n\tat org.gradle.internal.event.AbstractBroadcastDispatch.dispatch(AbstractBroadcastDispatch.java:58)\n\tat org.gradle.internal.event.BroadcastDispatch$CompositeDispatch.dispatch(BroadcastDispatch.java:324)\n\tat org.gradle.internal.event.BroadcastDispatch$CompositeDispatch.dispatch(BroadcastDispatch.java:234)\n\tat org.gradle.internal.event.ListenerBroadcast.dispatch(ListenerBroadcast.java:140)\n\tat org.gradle.internal.event.ListenerBroadcast.dispatch(ListenerBroadcast.java:37)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy17.buildFinished(Unknown Source)\n\tat org.gradle.initialization.DefaultGradleLauncher.finishBuild(DefaultGradleLauncher.java:148)\n\tat org.gradle.initialization.DefaultGradleLauncher.finishBuild(DefaultGradleLauncher.java:116)\n\tat org.gradle.internal.invocation.GradleBuildController$2.call(GradleBuildController.java:88)\n\tat org.gradle.internal.invocation.GradleBuildController$2.call(GradleBuildController.java:84)\n\tat org.gradle.internal.work.DefaultWorkerLeaseService.withLocks(DefaultWorkerLeaseService.java:152)\n\tat org.gradle.internal.invocation.GradleBuildController.doBuild(GradleBuildController.java:100)\n\tat org.gradle.internal.invocation.GradleBuildController.configure(GradleBuildController.java:84)\n\tat org.gradle.tooling.internal.provider.runner.ClientProvidedBuildActionRunner.run(ClientProvidedBuildActionRunner.java:65)\n\tat org.gradle.launcher.exec.ChainingBuildActionRunner.run(ChainingBuildActionRunner.java:35)\n\tat org.gradle.launcher.exec.ChainingBuildActionRunner.run(ChainingBuildActionRunner.java:35)\n\tat org.gradle.tooling.internal.provider.ValidatingBuildActionRunner.run(ValidatingBuildActionRunner.java:32)\n\tat org.gradle.launcher.exec.RunAsBuildOperationBuildActionRunner$1.run(RunAsBuildOperationBuildActionRunner.java:43)\n\tat org.gradle.internal.progress.DefaultBuildOperationExecutor$RunnableBuildOperationWorker.execute(DefaultBuildOperationExecutor.java:336)\n\tat org.gradle.internal.progress.DefaultBuildOperationExecutor$RunnableBuildOperationWorker.execute(DefaultBuildOperationExecutor.java:328)\n\tat org.gradle.internal.progress.DefaultBuildOperationExecutor.execute(DefaultBuildOperationExecutor.java:199)\n\tat org.gradle.internal.progress.DefaultBuildOperationExecutor.run(DefaultBuildOperationExecutor.java:110)\n\tat org.gradle.launcher.exec.RunAsBuildOperationBuildActionRunner.run(RunAsBuildOperationBuildActionRunner.java:40)\n\tat org.gradle.tooling.internal.provider.SubscribableBuildActionRunner.run(SubscribableBuildActionRunner.java:51)\n\tat org.gradle.launcher.exec.InProcessBuildActionExecuter.execute(InProcessBuildActionExecuter.java:47)\n\tat org.gradle.launcher.exec.InProcessBuildActionExecuter.execute(InProcessBuildActionExecuter.java:30)\n\tat org.gradle.launcher.exec.BuildTreeScopeBuildActionExecuter.execute(BuildTreeScopeBuildActionExecuter.java:39)\n\tat org.gradle.launcher.exec.BuildTreeScopeBuildActionExecuter.execute(BuildTreeScopeBuildActionExecuter.java:25)\n\tat org.gradle.tooling.internal.provider.ContinuousBuildActionExecuter.execute(ContinuousBuildActionExecuter.java:80)\n\tat org.gradle.tooling.internal.provider.ContinuousBuildActionExecuter.execute(ContinuousBuildActionExecuter.java:53)\n\tat org.gradle.tooling.internal.provider.ServicesSetupBuildActionExecuter.execute(ServicesSetupBuildActionExecuter.java:57)\n\tat org.gradle.tooling.internal.provider.ServicesSetupBuildActionExecuter.execute(ServicesSetupBuildActionExecuter.java:32)\n\tat org.gradle.tooling.internal.provider.GradleThreadBuildActionExecuter.execute(GradleThreadBuildActionExecuter.java:36)\n\tat org.gradle.tooling.internal.provider.GradleThreadBuildActionExecuter.execute(GradleThreadBuildActionExecuter.java:25)\n\tat org.gradle.tooling.internal.provider.ParallelismConfigurationBuildActionExecuter.execute(ParallelismConfigurationBuildActionExecuter.java:43)\n\tat org.gradle.tooling.internal.provider.ParallelismConfigurationBuildActionExecuter.execute(ParallelismConfigurationBuildActionExecuter.java:29)\n\tat org.gradle.tooling.internal.provider.StartParamsValidatingActionExecuter.execute(StartParamsValidatingActionExecuter.java:64)\n\tat org.gradle.tooling.internal.provider.StartParamsValidatingActionExecuter.execute(StartParamsValidatingActionExecuter.java:29)\n\tat org.gradle.tooling.internal.provider.SessionFailureReportingActionExecuter.execute(SessionFailureReportingActionExecuter.java:59)\n\tat org.gradle.tooling.internal.provider.SessionFailureReportingActionExecuter.execute(SessionFailureReportingActionExecuter.java:44)\n\tat org.gradle.tooling.internal.provider.SetupLoggingActionExecuter.execute(SetupLoggingActionExecuter.java:45)\n\tat org.gradle.tooling.internal.provider.SetupLoggingActionExecuter.execute(SetupLoggingActionExecuter.java:30)\n\tat org.gradle.launcher.daemon.server.exec.ExecuteBuild.doBuild(ExecuteBuild.java:67)\n\tat org.gradle.launcher.daemon.server.exec.BuildCommandOnly.execute(BuildCommandOnly.java:36)\n\tat org.gradle.launcher.daemon.server.api.DaemonCommandExecution.proceed(DaemonCommandExecution.java:122)\n\tat org.gradle.launcher.daemon.server.exec.WatchForDisconnection.execute(WatchForDisconnection.java:37)\n\tat org.gradle.launcher.daemon.server.api.DaemonCommandExecution.proceed(DaemonCommandExecution.java:122)\n\tat org.gradle.launcher.daemon.server.exec.ResetDeprecationLogger.execute(ResetDeprecationLogger.java:26)\n\tat org.gradle.launcher.daemon.server.api.DaemonCommandExecution.proceed(DaemonCommandExecution.java:122)\n\tat org.gradle.launcher.daemon.server.exec.RequestStopIfSingleUsedDaemon.execute(RequestStopIfSingleUsedDaemon.java:34)\n\tat org.gradle.launcher.daemon.server.api.DaemonCommandExecution.proceed(DaemonCommandExecution.java:122)\n\tat org.gradle.launcher.daemon.server.exec.ForwardClientInput$2.call(ForwardClientInput.java:74)\n\tat org.gradle.launcher.daemon.server.exec.ForwardClientInput$2.call(ForwardClientInput.java:72)\n\tat org.gradle.util.Swapper.swap(Swapper.java:38)\n\tat org.gradle.launcher.daemon.server.exec.ForwardClientInput.execute(ForwardClientInput.java:72)\n\tat org.gradle.launcher.daemon.server.api.DaemonCommandExecution.proceed(DaemonCommandExecution.java:122)\n\tat org.gradle.launcher.daemon.server.exec.LogAndCheckHealth.execute(LogAndCheckHealth.java:55)\n\tat org.gradle.launcher.daemon.server.api.DaemonCommandExecution.proceed(DaemonCommandExecution.java:122)\n\tat org.gradle.launcher.daemon.server.exec.LogToClient.doBuild(LogToClient.java:62)\n\tat org.gradle.launcher.daemon.server.exec.BuildCommandOnly.execute(BuildCommandOnly.java:36)\n\tat org.gradle.launcher.daemon.server.api.DaemonCommandExecution.proceed(DaemonCommandExecution.java:122)\n\tat org.gradle.launcher.daemon.server.exec.EstablishBuildEnvironment.doBuild(EstablishBuildEnvironment.java:82)\n\tat org.gradle.launcher.daemon.server.exec.BuildCommandOnly.execute(BuildCommandOnly.java:36)\n\tat org.gradle.launcher.daemon.server.api.DaemonCommandExecution.proceed(DaemonCommandExecution.java:122)\n\tat org.gradle.launcher.daemon.server.exec.StartBuildOrRespondWithBusy$1.run(StartBuildOrRespondWithBusy.java:50)\n\tat org.gradle.launcher.daemon.server.DaemonStateCoordinator$1.run(DaemonStateCoordinator.java:295)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\n\tat java.lang.Thread.run(Thread.java:745)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br"),e("span",{staticClass:"line-number"},[a._v("26")]),e("br"),e("span",{staticClass:"line-number"},[a._v("27")]),e("br"),e("span",{staticClass:"line-number"},[a._v("28")]),e("br"),e("span",{staticClass:"line-number"},[a._v("29")]),e("br"),e("span",{staticClass:"line-number"},[a._v("30")]),e("br"),e("span",{staticClass:"line-number"},[a._v("31")]),e("br"),e("span",{staticClass:"line-number"},[a._v("32")]),e("br"),e("span",{staticClass:"line-number"},[a._v("33")]),e("br"),e("span",{staticClass:"line-number"},[a._v("34")]),e("br"),e("span",{staticClass:"line-number"},[a._v("35")]),e("br"),e("span",{staticClass:"line-number"},[a._v("36")]),e("br"),e("span",{staticClass:"line-number"},[a._v("37")]),e("br"),e("span",{staticClass:"line-number"},[a._v("38")]),e("br"),e("span",{staticClass:"line-number"},[a._v("39")]),e("br"),e("span",{staticClass:"line-number"},[a._v("40")]),e("br"),e("span",{staticClass:"line-number"},[a._v("41")]),e("br"),e("span",{staticClass:"line-number"},[a._v("42")]),e("br"),e("span",{staticClass:"line-number"},[a._v("43")]),e("br"),e("span",{staticClass:"line-number"},[a._v("44")]),e("br"),e("span",{staticClass:"line-number"},[a._v("45")]),e("br"),e("span",{staticClass:"line-number"},[a._v("46")]),e("br"),e("span",{staticClass:"line-number"},[a._v("47")]),e("br"),e("span",{staticClass:"line-number"},[a._v("48")]),e("br"),e("span",{staticClass:"line-number"},[a._v("49")]),e("br"),e("span",{staticClass:"line-number"},[a._v("50")]),e("br"),e("span",{staticClass:"line-number"},[a._v("51")]),e("br"),e("span",{staticClass:"line-number"},[a._v("52")]),e("br"),e("span",{staticClass:"line-number"},[a._v("53")]),e("br"),e("span",{staticClass:"line-number"},[a._v("54")]),e("br"),e("span",{staticClass:"line-number"},[a._v("55")]),e("br"),e("span",{staticClass:"line-number"},[a._v("56")]),e("br"),e("span",{staticClass:"line-number"},[a._v("57")]),e("br"),e("span",{staticClass:"line-number"},[a._v("58")]),e("br"),e("span",{staticClass:"line-number"},[a._v("59")]),e("br"),e("span",{staticClass:"line-number"},[a._v("60")]),e("br"),e("span",{staticClass:"line-number"},[a._v("61")]),e("br"),e("span",{staticClass:"line-number"},[a._v("62")]),e("br"),e("span",{staticClass:"line-number"},[a._v("63")]),e("br"),e("span",{staticClass:"line-number"},[a._v("64")]),e("br"),e("span",{staticClass:"line-number"},[a._v("65")]),e("br"),e("span",{staticClass:"line-number"},[a._v("66")]),e("br"),e("span",{staticClass:"line-number"},[a._v("67")]),e("br"),e("span",{staticClass:"line-number"},[a._v("68")]),e("br"),e("span",{staticClass:"line-number"},[a._v("69")]),e("br"),e("span",{staticClass:"line-number"},[a._v("70")]),e("br"),e("span",{staticClass:"line-number"},[a._v("71")]),e("br"),e("span",{staticClass:"line-number"},[a._v("72")]),e("br"),e("span",{staticClass:"line-number"},[a._v("73")]),e("br"),e("span",{staticClass:"line-number"},[a._v("74")]),e("br"),e("span",{staticClass:"line-number"},[a._v("75")]),e("br"),e("span",{staticClass:"line-number"},[a._v("76")]),e("br"),e("span",{staticClass:"line-number"},[a._v("77")]),e("br"),e("span",{staticClass:"line-number"},[a._v("78")]),e("br"),e("span",{staticClass:"line-number"},[a._v("79")]),e("br"),e("span",{staticClass:"line-number"},[a._v("80")]),e("br"),e("span",{staticClass:"line-number"},[a._v("81")]),e("br"),e("span",{staticClass:"line-number"},[a._v("82")]),e("br"),e("span",{staticClass:"line-number"},[a._v("83")]),e("br"),e("span",{staticClass:"line-number"},[a._v("84")]),e("br"),e("span",{staticClass:"line-number"},[a._v("85")]),e("br"),e("span",{staticClass:"line-number"},[a._v("86")]),e("br"),e("span",{staticClass:"line-number"},[a._v("87")]),e("br"),e("span",{staticClass:"line-number"},[a._v("88")]),e("br"),e("span",{staticClass:"line-number"},[a._v("89")]),e("br"),e("span",{staticClass:"line-number"},[a._v("90")]),e("br"),e("span",{staticClass:"line-number"},[a._v("91")]),e("br"),e("span",{staticClass:"line-number"},[a._v("92")]),e("br"),e("span",{staticClass:"line-number"},[a._v("93")]),e("br"),e("span",{staticClass:"line-number"},[a._v("94")]),e("br"),e("span",{staticClass:"line-number"},[a._v("95")]),e("br"),e("span",{staticClass:"line-number"},[a._v("96")]),e("br"),e("span",{staticClass:"line-number"},[a._v("97")]),e("br"),e("span",{staticClass:"line-number"},[a._v("98")]),e("br"),e("span",{staticClass:"line-number"},[a._v("99")]),e("br"),e("span",{staticClass:"line-number"},[a._v("100")]),e("br"),e("span",{staticClass:"line-number"},[a._v("101")]),e("br"),e("span",{staticClass:"line-number"},[a._v("102")]),e("br"),e("span",{staticClass:"line-number"},[a._v("103")]),e("br"),e("span",{staticClass:"line-number"},[a._v("104")]),e("br"),e("span",{staticClass:"line-number"},[a._v("105")]),e("br"),e("span",{staticClass:"line-number"},[a._v("106")]),e("br"),e("span",{staticClass:"line-number"},[a._v("107")]),e("br"),e("span",{staticClass:"line-number"},[a._v("108")]),e("br"),e("span",{staticClass:"line-number"},[a._v("109")]),e("br"),e("span",{staticClass:"line-number"},[a._v("110")]),e("br"),e("span",{staticClass:"line-number"},[a._v("111")]),e("br"),e("span",{staticClass:"line-number"},[a._v("112")]),e("br"),e("span",{staticClass:"line-number"},[a._v("113")]),e("br"),e("span",{staticClass:"line-number"},[a._v("114")]),e("br"),e("span",{staticClass:"line-number"},[a._v("115")]),e("br"),e("span",{staticClass:"line-number"},[a._v("116")]),e("br"),e("span",{staticClass:"line-number"},[a._v("117")]),e("br"),e("span",{staticClass:"line-number"},[a._v("118")]),e("br"),e("span",{staticClass:"line-number"},[a._v("119")]),e("br"),e("span",{staticClass:"line-number"},[a._v("120")]),e("br"),e("span",{staticClass:"line-number"},[a._v("121")]),e("br"),e("span",{staticClass:"line-number"},[a._v("122")]),e("br"),e("span",{staticClass:"line-number"},[a._v("123")]),e("br"),e("span",{staticClass:"line-number"},[a._v("124")]),e("br"),e("span",{staticClass:"line-number"},[a._v("125")]),e("br"),e("span",{staticClass:"line-number"},[a._v("126")]),e("br"),e("span",{staticClass:"line-number"},[a._v("127")]),e("br"),e("span",{staticClass:"line-number"},[a._v("128")]),e("br"),e("span",{staticClass:"line-number"},[a._v("129")]),e("br"),e("span",{staticClass:"line-number"},[a._v("130")]),e("br"),e("span",{staticClass:"line-number"},[a._v("131")]),e("br"),e("span",{staticClass:"line-number"},[a._v("132")]),e("br"),e("span",{staticClass:"line-number"},[a._v("133")]),e("br"),e("span",{staticClass:"line-number"},[a._v("134")]),e("br"),e("span",{staticClass:"line-number"},[a._v("135")]),e("br"),e("span",{staticClass:"line-number"},[a._v("136")]),e("br"),e("span",{staticClass:"line-number"},[a._v("137")]),e("br"),e("span",{staticClass:"line-number"},[a._v("138")]),e("br"),e("span",{staticClass:"line-number"},[a._v("139")]),e("br"),e("span",{staticClass:"line-number"},[a._v("140")]),e("br"),e("span",{staticClass:"line-number"},[a._v("141")]),e("br"),e("span",{staticClass:"line-number"},[a._v("142")]),e("br"),e("span",{staticClass:"line-number"},[a._v("143")]),e("br"),e("span",{staticClass:"line-number"},[a._v("144")]),e("br"),e("span",{staticClass:"line-number"},[a._v("145")]),e("br"),e("span",{staticClass:"line-number"},[a._v("146")]),e("br"),e("span",{staticClass:"line-number"},[a._v("147")]),e("br"),e("span",{staticClass:"line-number"},[a._v("148")]),e("br"),e("span",{staticClass:"line-number"},[a._v("149")]),e("br"),e("span",{staticClass:"line-number"},[a._v("150")]),e("br"),e("span",{staticClass:"line-number"},[a._v("151")]),e("br"),e("span",{staticClass:"line-number"},[a._v("152")]),e("br"),e("span",{staticClass:"line-number"},[a._v("153")]),e("br"),e("span",{staticClass:"line-number"},[a._v("154")]),e("br")])]),e("p",[e("img",{attrs:{src:t(522),alt:"image-20240414213553477"}})])])}),[],!1,null,null,null);e.default=r.exports},509:function(a,e,t){a.exports=t.p+"assets/img/image-20240414185029475.7f5b82a9.png"},510:function(a,e,t){a.exports=t.p+"assets/img/image-20240414185101395.7ef1dca7.png"},511:function(a,e,t){a.exports=t.p+"assets/img/image-20240414185153780.f981de23.png"},512:function(a,e,t){a.exports=t.p+"assets/img/image-20240414185334844.9b4e7207.png"},513:function(a,e,t){a.exports=t.p+"assets/img/image-20240414185951540.e453fc9c.png"},514:function(a,e,t){a.exports=t.p+"assets/img/image-20240414190456709.59fd379d.png"},515:function(a,e,t){a.exports=t.p+"assets/img/image-20240414185254241.b799af4e.png"},516:function(a,e,t){a.exports=t.p+"assets/img/image-20240414190523596.528a4e71.png"},517:function(a,e,t){a.exports=t.p+"assets/img/image-20240414190713745.79893571.png"},518:function(a,e,t){a.exports=t.p+"assets/img/image-20240414190951588.ba8ae591.png"},519:function(a,e,t){a.exports=t.p+"assets/img/image-20240414191227573.fa13c3fb.png"},520:function(a,e,t){a.exports=t.p+"assets/img/image-20240414191413829.556a3cfc.png"},521:function(a,e,t){a.exports=t.p+"assets/img/image-20240414213606959.e8e7bf6c.png"},522:function(a,e,t){a.exports=t.p+"assets/img/image-20240414213553477-17131017856021.9b4eceb5.png"}}]);