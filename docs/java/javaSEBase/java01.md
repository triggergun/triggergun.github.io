# java沉思录

## 合法行为1(向下转型)

- **向上转型是安全的，向下转型是危险的**。

**向上转型（子类→父类）**：总是安全，因为子类继承了父类的所有成员

```java
Cat cat = new Cat();
Animal animal = cat;  // 安全，子类一定是父类
```

合法操作。

**向下转型（父类→子类）**：必须显式强制转换，且需要运行时验证，因为父类不一定是子类。

```java
Animal animal = new Cat();  // 实际是 Cat 对象
Cat cat = (Cat) animal;     // 合法，因为 animal 的运行时类型是 Cat
```

显式强制转换。

## 不合法行为1

- **父类强制转换为子类是非法的。会报java.lang.ClassCastException。**

案例证明：

```java
public class Test01 {
    public static void main(String[] args) {
        // 强制做 爸爸
        Person person = (Person) new Student(); // 合法
        // java.lang.ClassCastException
        Student student = (Student) new Person(); // 不合法
    }
}
```

- 沉思：为什么父类强制转换为子类是非法的呢？

  解答：

  1. **父类强制转为子类非法**的根本原因是：父类对象可能缺少子类的属性和方法，直接转换会导致内存访问错误。
  2. 类型系统的设计强制要求开发者显式处理这种不确定性（如 `instanceof` 检查），以保障运行时安全。

  这种限制体现了OOP中里氏替换原则（LSP）的思想：子类可以替换父类，但父类不能随意替换子类。

- 引申扩展：那么什么情况下父类对象可以向下转型呢？（见合法行为1）

