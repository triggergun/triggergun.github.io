# bean的加载



spring启动

```java
	public static void main(String[] args) {
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(Config.class);
		System.out.println(TestService.class);
		// class 当前类的引用
		// class top.wutunan.service.TestService
//		TestService bean = context.getBean(TestService.class);
		TestService TestService = (TestService)context.getBean("testService");
		TestService.sayHello();

	}}
```

提出问题！

- 下面代码实现了什么功能？

```java
		TestService TestService = (TestService)context.getBean("testService");
```

