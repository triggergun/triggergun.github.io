# 3.对象操作流

## 3.1对象序列化流【应用】

- 对象序列化介绍

  - 对象序列化：就是将对象保存到磁盘中，或者在网络中传输对象
  - 这种机制就是使用一个字节序列表示一个对象，该字节序列包含：对象的类型、对象的数据和对象中存储的属性等信息
  - 字节序列写到文件之后，相当于文件中持久保存了一个对象的信息
  - 反之，该字节序列还可以从文件中读取回来，重构对象，对它进行反序列化

- 对象序列化流： ObjectOutputStream

  - 将Java对象的原始数据类型和图形写入OutputStream。 可以使用ObjectInputStream读取（重构）对象。 可以通过使用流的文件来实现对象的持久存储。 如果流是网络套接字流，则可以在另一个主机上或另一个进程中重构对象 

- 构造方法

  | 方法名                               | 说明                                               |
  | ------------------------------------ | -------------------------------------------------- |
  | ObjectOutputStream(OutputStream out) | 创建一个写入指定的OutputStream的ObjectOutputStream |

- 序列化对象的方法

  | 方法名                       | 说明                               |
  | ---------------------------- | ---------------------------------- |
  | void writeObject(Object obj) | 将指定的对象写入ObjectOutputStream |

- 示例代码

  学生类

  ```java
  public class Student implements Serializable {
      private String name;
      private int age;
  
      public Student() {
      }
  
      public Student(String name, int age) {
          this.name = name;
          this.age = age;
      }
  
      public String getName() {
          return name;
      }
  
      public void setName(String name) {
          this.name = name;
      }
  
      public int getAge() {
          return age;
      }
  
      public void setAge(int age) {
          this.age = age;
      }
  
      @Override
      public String toString() {
          return "Student{" +
                  "name='" + name + '\'' +
                  ", age=" + age +
                  '}';
      }
  }
  ```

  测试类

  ```java
  public class ObjectOutputStreamDemo {
      public static void main(String[] args) throws IOException {
          //ObjectOutputStream(OutputStream out)：创建一个写入指定的OutputStream的ObjectOutputStream
          ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("myOtherStream\\oos.txt"));
  
          //创建对象
          Student s = new Student("佟丽娅",30);
  
          //void writeObject(Object obj)：将指定的对象写入ObjectOutputStream
          oos.writeObject(s);
  
          //释放资源
          oos.close();
      }
  }
  ```

- 注意事项

  - 一个对象要想被序列化，该对象所属的类必须必须实现Serializable 接口
  - Serializable是一个标记接口，实现该接口，不需要重写任何方法

## 3.2对象反序列化流【应用】

- 对象反序列化流： ObjectInputStream

  - ObjectInputStream反序列化先前使用ObjectOutputStream编写的原始数据和对象

- 构造方法

  | 方法名                            | 说明                                           |
  | --------------------------------- | ---------------------------------------------- |
  | ObjectInputStream(InputStream in) | 创建从指定的InputStream读取的ObjectInputStream |

- 反序列化对象的方法

  | 方法名              | 说明                            |
  | ------------------- | ------------------------------- |
  | Object readObject() | 从ObjectInputStream读取一个对象 |

- 示例代码

  ```java
  public class ObjectInputStreamDemo {
      public static void main(String[] args) throws IOException, ClassNotFoundException {
          //ObjectInputStream(InputStream in)：创建从指定的InputStream读取的ObjectInputStream
          ObjectInputStream ois = new ObjectInputStream(new FileInputStream("myOtherStream\\oos.txt"));
  
          //Object readObject()：从ObjectInputStream读取一个对象
          Object obj = ois.readObject();
  
          Student s = (Student) obj;
          System.out.println(s.getName() + "," + s.getAge());
  
          ois.close();
      }
  }
  ```

## 3.3serialVersionUID&transient【应用】

- serialVersionUID

  - 用对象序列化流序列化了一个对象后，假如我们修改了对象所属的类文件，读取数据会不会出问题呢？
    - 会出问题，会抛出InvalidClassException异常
  - 如果出问题了，如何解决呢？
    - 重新序列化
    - 给对象所属的类加一个serialVersionUID 
      - private static final long serialVersionUID = 42L;

- transient

  - 如果一个对象中的某个成员变量的值不想被序列化，又该如何实现呢？
    - 给该成员变量加transient关键字修饰，该关键字标记的成员变量不参与序列化过程

- 示例代码

  学生类

  ```java
  public class Student implements Serializable {
      private static final long serialVersionUID = 42L;
      private String name;
  //    private int age;
      private transient int age;
  
      public Student() {
      }
  
      public Student(String name, int age) {
          this.name = name;
          this.age = age;
      }
  
      public String getName() {
          return name;
      }
  
      public void setName(String name) {
          this.name = name;
      }
  
      public int getAge() {
          return age;
      }
  
      public void setAge(int age) {
          this.age = age;
      }
  
  //    @Override
  //    public String toString() {
  //        return "Student{" +
  //                "name='" + name + '\'' +
  //                ", age=" + age +
  //                '}';
  //    }
  }
  ```

  测试类

  ```java
  public class ObjectStreamDemo {
      public static void main(String[] args) throws IOException, ClassNotFoundException {
  //        write();
          read();
      }
  
      //反序列化
      private static void read() throws IOException, ClassNotFoundException {
          ObjectInputStream ois = new ObjectInputStream(new FileInputStream("myOtherStream\\oos.txt"));
          Object obj = ois.readObject();
          Student s = (Student) obj;
          System.out.println(s.getName() + "," + s.getAge());
          ois.close();
      }
  
      //序列化
      private static void write() throws IOException {
          ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("myOtherStream\\oos.txt"));
          Student s = new Student("佟丽娅", 30);
          oos.writeObject(s);
          oos.close();
      }
  }
  ```

## 3.4对象操作流练习【应用】

- 案例需求

  创建多个学生类对象写到文件中,再次读取到内存中

- 实现步骤

  - 创建序列化流对象
  - 创建多个学生对象
  - 将学生对象添加到集合中
  - 将集合对象序列化到文件中
  - 创建反序列化流对象
  - 将文件中的对象数据,读取到内存中

- 代码实现

  学生类

  ```java
  public class Student implements Serializable{
      
      private static final long serialVersionUID = 2L;
  
      private String name;
      private int age;
  
      public Student() {
      }
  
      public Student(String name, int age) {
          this.name = name;
          this.age = age;
      }
  
      public String getName() {
          return name;
      }
  
      public void setName(String name) {
          this.name = name;
      }
  
      public int getAge() {
          return age;
      }
  
      public void setAge(int age) {
          this.age = age;
      }
  }
  ```

  测试类

  ```java
  public class Demo03 {
      /**
       *  read():
       *      读取到文件末尾返回值是 -1
       *  readLine():
       *      读取到文件的末尾返回值 null
       *  readObject():
       *      读取到文件的末尾 直接抛出异常
       *  如果要序列化的对象有多个,不建议直接将多个对象序列化到文件中,因为反序列化时容易出异常
       *      建议: 将要序列化的多个对象存储到集合中,然后将集合序列化到文件中
       */
      public static void main(String[] args) throws Exception {
          /*// 序列化
          //1.创建序列化流对象
          ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("myCode\\oos.txt"));
          ArrayList<Student> arrayList = new ArrayList<>();
          //2.创建多个学生对象
          Student s = new Student("佟丽娅",30);
          Student s01 = new Student("佟丽娅",30);
          //3.将学生对象添加到集合中
          arrayList.add(s);
          arrayList.add(s01);
          //4.将集合对象序列化到文件中
          oos.writeObject(arrayList);
          oos.close();*/
  
          // 反序列化
        	//5.创建反序列化流对象
          ObjectInputStream ois = new ObjectInputStream(new FileInputStream("myCode\\oos.txt"));
        	//6.将文件中的对象数据,读取到内存中
          Object obj = ois.readObject();
          ArrayList<Student> arrayList = (ArrayList<Student>)obj;
          ois.close();
          for (Student s : arrayList) {
              System.out.println(s.getName() + "," + s.getAge());
          }
      }
  }
  ```

