// top 选项5 start
module.exports = [
    //------------- java技术栈
    {
        text: 'java技术栈',
        items: [
            {text: 'java基础', link: '/java/javaSEBase/java'},
            {text: 'gradle', link: encodeURI('/java/gradle/01安装gradle')},
            // maven
            {text: 'maven', link: encodeURI('/java/maven/maven01_2025_10_19_01')},
        ]
    },
    //------------- dao层区
    {
        text: 'dao层框架',
        items: [
            {text: "mybatis", link: '/java/Mybatis/mybatis'},
            {text: "mybatis-plus", link: encodeURI('/java/mybatis_plus/03多数据库源的编写')},
        ]
    },
    //-------------java的  源码分析 start
    {
        text: '源码分析区',
        items: [
            {text: "spring源码分析", link: encodeURI('/java/spring_code/01Spring源码下载')},
            {
                text: "spring-boot源码分析",
                link: encodeURI('/java/springboot_source_code/20250105_demo01')
            },
        ]
    },
    //-------------java的  源码分析 end
    //---------------springCloud
    {
        text: 'springCloud',
        items: [
            {text: "gateway", link: '/java/springcloudgateway/01gateway'},

        ]
    },
    {text: '设计模式', link: '/java/designModel/AssemblerDesignPattern'},
    {text: 'java工具', link: encodeURI('/java/java工具/xpath解析doc')},
    {text: 'java基础服务', link: encodeURI('/java/java基础服务/nexus/01nexus3的docker安装')},
    {
        text: '面试',
        items: [
            {text: "java面试", link: '/java/interview/java/javaDemo01_2025_11_11_01'},

        ]
    },
    {
        text: '设计思想',
        items: [
            {text: "编程设计思想", link: '/java/designPhilosophy/function/demo01_2025_12_22_01'},
        ]
    },

];