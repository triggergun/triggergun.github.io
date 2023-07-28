# 4.Properties集合

## 4.1Properties作为Map集合的使用【应用】

- Properties介绍

  - 是一个Map体系的集合类
  - Properties可以保存到流中或从流中加载
  - 属性列表中的每个键及其对应的值都是一个字符串

- Properties基本使用

  ```java
  public class PropertiesDemo01 {
      public static void main(String[] args) {
          //创建集合对象
  //        Properties<String,String> prop = new Properties<String,String>(); //错误
          Properties prop = new Properties();
  
          //存储元素
          prop.put("itheima001", "佟丽娅");
          prop.put("itheima002", "赵丽颖");
          prop.put("itheima003", "刘诗诗");
  
          //遍历集合
          Set<Object> keySet = prop.keySet();
          for (Object key : keySet) {
              Object value = prop.get(key);
              System.out.println(key + "," + value);
          }
      }
  }
  ```

## 4.2Properties作为Map集合的特有方法【应用】

- 特有方法

  Object   setProperty(String key, String value)设置集合的键和值，都是String类型，底层调用   Hashtable方法put

  ```xquery
  String   getProperty(String key)使用此属性列表中指定的键搜索属性Set<String>   
  
  stringPropertyNames()从该属性列表中返回一个不可修改的键集，其中键及其对应的值是字符串
  ```

  

- 示例代码

  ```java
  public class PropertiesDemo02 {
      public static void main(String[] args) {
          //创建集合对象
          Properties prop = new Properties();
  
          //Object setProperty(String key, String value)：设置集合的键和值，都是String类型
          prop.setProperty("itheima001", "佟丽娅");
          prop.setProperty("itheima002", "赵丽颖");
          prop.setProperty("itheima003", "刘诗诗");
  
          //String getProperty(String key)：使用此属性列表中指定的键搜索属性
  //        System.out.println(prop.getProperty("itheima001"));
  //        System.out.println(prop.getProperty("itheima0011"));
  
  //        System.out.println(prop);
  
          //Set<String> stringPropertyNames()：从该属性列表中返回一个不可修改的键集，其中键及其对应的值是字符串
          Set<String> names = prop.stringPropertyNames();
          for (String key : names) {
  //            System.out.println(key);
              String value = prop.getProperty(key);
              System.out.println(key + "," + value);
          }
      }
  }
  ```

## 4.3Properties和IO流相结合的方法【应用】

- 和IO流结合的方法

  void   load(Reader reader)  从输入字符流读取属性列表（键和元素对）

  void   store(Writer writer, String comments) 将此属性列表（键和元素对）写入此   Properties表中，以适合使用   load(Reader)方法的格式写入输出字符流

- 示例代码

  ```java
  public class PropertiesDemo03 {
      public static void main(String[] args) throws IOException {
          //把集合中的数据保存到文件
  //        myStore();
  
          //把文件中的数据加载到集合
          myLoad();
  
      }
  
      private static void myLoad() throws IOException {
          Properties prop = new Properties();
  
          //void load(Reader reader)：
          FileReader fr = new FileReader("myOtherStream\\fw.txt");
          prop.load(fr);
          fr.close();
  
          System.out.println(prop);
      }
  
      private static void myStore() throws IOException {
          Properties prop = new Properties();
  
          prop.setProperty("itheima001","佟丽娅");
          prop.setProperty("itheima002","赵丽颖");
          prop.setProperty("itheima003","刘诗诗");
  
          //void store(Writer writer, String comments)：
          FileWriter fw = new FileWriter("myOtherStream\\fw.txt");
          prop.store(fw,null);
          fw.close();
      }
  }
  ```

## 4.4Properties集合练习【应用】

- 案例需求

  在Properties文件中手动写上姓名和年龄,读取到集合中,将该数据封装成学生对象,写到本地文件

- 实现步骤

  - 创建Properties集合,将本地文件中的数据加载到集合中
  - 获取集合中的键值对数据,封装到学生对象中
  - 创建序列化流对象,将学生对象序列化到本地文件中

- 代码实现

  学生类

  ```java
  public class Student implements Serializable {
      private static final long serialVersionUID = 1L;
  
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
  public class Test {
  
      public static void main(String[] args) throws IOException {
        	//1.创建Properties集合,将本地文件中的数据加载到集合中
          Properties prop = new Properties();
          FileReader fr = new FileReader("prop.properties");
          prop.load(fr);
          fr.close();
  		//2.获取集合中的键值对数据,封装到学生对象中
          String name = prop.getProperty("name");
          int age = Integer.parseInt(prop.getProperty("age"));
          Student s = new Student(name,age);
  		//3.创建序列化流对象,将学生对象序列化到本地文件中
          ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("a.txt"));
          oos.writeObject(s);
          oos.close();
      }
  }
  ```



