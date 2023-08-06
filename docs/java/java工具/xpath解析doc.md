# xpath解析xml文档

## step1)导入maven坐标

```xml
        <!--dom4j解析-->
        <dependency>
            <groupId>dom4j</groupId>
            <artifactId>dom4j</artifactId>
            <version>1.6.1</version>
        </dependency>
        <!--xpath表达式-->
        <dependency>
            <groupId>jaxen</groupId>
            <artifactId>jaxen</artifactId>
            <version>1.1.6</version>
        </dependency>

 <!-- 可以编写mian 方法-->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
        </dependency>

```

## step2)编写xml文件

创建xml文件，名字为books.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>

    <book>
        <title lang="eng">Harry Potter</title>
        <price>29.99</price>
    </book>

    <book>
        <title lang="eng">Learning XML</title>
        <price>39.95</price>
    </book>

</bookstore>
```

## step3)编写解析文档方法

使用： XPath 使用路径表达式来选取 XML 文档中的节点或节点集，经常使用到的路径表达式,如下表：

| 语法     | 作用                                                       |
| -------- | ---------------------------------------------------------- |
| nodename | 选取当前节点的所有子节点。                                 |
| /        | 从根节点选取。                                             |
| //       | 从匹配选择的当前节点选择文档中的节点，而不考虑它们的位置。 |
| .        | 选取当前节点。                                             |
| ..       | 选取当前节点的父节点。                                     |
| @        | 选取属性。如：@xxx的xxx表示你要提取该节点的属性名。        |

上面语法了解就行，不太全面。

需求：

- 解析xml文档，获取里面的book元素对象，并且打印。
- 在获取book节点下的子节点title里面的属性值打印。
- title元素的文本内容，打印。

```java
package xpath;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.junit.Test;

import java.io.InputStream;
import java.util.List;

/**
 * @author 吾图南
 */
public class XpathTest {
    @Test
    public void testXpath() throws DocumentException {
        
        // 获取这个文档的输入流对象
        InputStream resourceAsStream = this.getClass().getClassLoader().getResourceAsStream("books.xml");
        
        // 读取解析器对象
        SAXReader saxReader = new SAXReader();
        
        // 调用方法进行解析
        Document document = saxReader.read(resourceAsStream);
        
        // 解析后的 文档对象
        Element rootElement = document.getRootElement();
        
        // 找 xml 根元素的下一级元素
        List<Element> selectNodes = rootElement.selectNodes("book");
        // 编列2个book元素节点
        for (int i = 0; i < selectNodes.size(); i++) {
            //打印book节点对象
            Element element =  selectNodes.get(i);
            System.out.println("第"+i+"个book节点：=="+element);
            // book节点下的title属性值并且打印
            List<Element> title = element.selectNodes("title");
            Element eTitle = title.get(0);
            String lang = eTitle.attributeValue("lang");

            System.out.println("title元素的值："+lang);

            String text = eTitle.getText();
            System.out.println("title文本内容是："+text);
            
        }

    }
}
```

运行结果：

![image-20230806142821716](xpath解析doc.assets/image-20230806142821716.png)



