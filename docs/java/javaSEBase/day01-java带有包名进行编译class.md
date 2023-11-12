# java编译梦开始的地方

## javac，使用"-d ."与省略-d的区别

在当前工作目录下生成class文件，一般情况下有两种方法

方法一： javac <srcFile>

方法二： javac -d . <srcFile>

javac 的 -d参数用于指定生成class文件的位置，.(点号)表示当前目录。

所以两种方法相似，但不完全等同。如下例

当前目录是d:\temp，d:\temp下有个类hello.java如下

```java
package org.Hello;

public class hello{
    static public void main(String[] args){
        System.out.println("hello world");
    }
}
```

## 按照方法一

运行

```cmd
 javac hello.java
```

生成hello.class文件在d:\temp目录下。



## 按照方法二

运行 

```cmd
javac -d . hello.java
```

生成hello.class文件并不在d:\temp目录，而是在d:\temp\org\Hello。



删除代码中的“package org.Hello;”后，再分别用javac hello.java和javac -d . hello.java生成的hello.class文件都是d:\temp目录



## 总结

现在可以看出，-d参数的作用是指定生成java包的根目录，”-d .“应该这样理解更准确：在当前目录上编译生成java包。

如果省略了-d，则仅仅是在当前目录生成的class文件。

大多数情况都是编译生成java，尽量使用-d参数