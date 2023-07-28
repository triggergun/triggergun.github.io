# 2.转换流

## 2.1字符流中和编码解码问题相关的两个类【理解】

- InputStreamReader：是从字节流到字符流的桥梁,父类是Reader

  ​	它读取字节，并使用指定的编码将其`解码`为字符

  ​	它使用的字符集可以由名称指定，也可以被明确指定，或者可以接受平台的默认字符集

- OutputStreamWriter：是从字符流到字节流的桥梁,父类是Writer

  ​	是从字符流到字节流的桥梁，使用指定的编码将写入的字符`编码`为字节

  ​	它使用的字符集可以由名称指定，也可以被明确指定，或者可以接受平台的默认字符集

## 2.2转换流读写数据【应用】

+ 构造方法

  | 方法名                                              | 说明                                         |
  | --------------------------------------------------- | -------------------------------------------- |
  | InputStreamReader(InputStream in)                   | 使用默认字符编码创建InputStreamReader对象    |
  | InputStreamReader(InputStream in,String chatset)    | 使用指定的字符编码创建InputStreamReader对象  |
  | OutputStreamWriter(OutputStream out)                | 使用默认字符编码创建OutputStreamWriter对象   |
  | OutputStreamWriter(OutputStream out,String charset) | 使用指定的字符编码创建OutputStreamWriter对象 |

+ 代码演示

  ```java
  public class ConversionStreamDemo {
      public static void main(String[] args) throws IOException {
          //OutputStreamWriter osw = new OutputStreamWriter(new                                             FileOutputStream("myCharStream\\osw.txt"));
          OutputStreamWriter osw = new OutputStreamWriter(new                                              FileOutputStream("myCharStream\\osw.txt"),"GBK");
          osw.write("中国");
          osw.close();
  
          //InputStreamReader isr = new InputStreamReader(new 	                                         FileInputStream("myCharStream\\osw.txt"));
          InputStreamReader isr = new InputStreamReader(new                                                 FileInputStream("myCharStream\\osw.txt"),"GBK");
          //一次读取一个字符数据
          int ch;
          while ((ch=isr.read())!=-1) {
              System.out.print((char)ch);
          }
          isr.close();
      }
  }
  ```



## 需求假设

如果：写‘中国’用GBK写入，读出用UTF-8进行`解码`读出来的是什么呢？

**实验结果**如下：



