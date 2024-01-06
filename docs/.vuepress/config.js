// docs/.vuepress/config.js
module.exports = {
  //前缀
  //  base: '/triggergun/',

  // 标题,同时，默认主题下，它将显示在导航栏（navbar）上
  title: "匆匆趣玩",
  // 描述
  description: "分享各类资源、教程、黑科技软件、工具等等",

  /**
   * 
   * google adsence 广告接入
   * <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2034953504252138" crossorigin="anonymous"></script>
   * <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6542685716937885" crossorigin="anonymous"></script>
   */


  /**
   * 
   * 百度爬取
   * <meta name="baidu-site-verification" content="codeva-7KiW1mSNFG" />
   */


  /**
   * 
   * 首页头像问题
   * https://blog-1320192491.cos.ap-nanjing.myqcloud.com/logo.png
   */
  head: [
    // 重装基本图片
    ['link', { rel: 'icon', href: 'favicon.svg' }],
    ['script', { async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6542685716937885', crossorigin: 'anonymous' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-7KiW1mSNFG' }],
    //  ['link', { rel: 'stylesheet', href: 'index.css' }],
  ],

  markdown: {
    lineNumbers: true,

    //  解决：图片中文路径  与 前面 要加 ./ 才能解析。
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }

  },

  /**
   * 下面是主题的配置，主要配置那些呢？
   * 
   * 
   */

  // 主题配置
  themeConfig: {

    logo: 'https://blog-1320192491.cos.ap-nanjing.myqcloud.com/logo.png',
    // ====================顶上的导航栏


    //========================================top导航栏开始============================================
    nav: [

      // 选项一
      { text: '首页', link: '/' },

      // 选项二
      {
        text: '图南的博客',
        // 子选项
        items: [
          { text: 'Gitee', link: 'https://gitee.com/ground-gun' },
          { text: 'Github', link: 'https://github.com/triggergun' },
          { text: '知乎', link: 'https://www.zhihu.com/people/hong-lang-80-78/posts' }
        ]
      },

      //========================选项三
      { text: 'git', link: '/git/git' },


      //========================选项4    link 
      {
        text: '运维',
        items: [
          { text: '命令', link: '/运维/windows/cmd' },
          { text: '网络', link: '/network/network01' }
        ]

      },

      //============================= top  选项5
      {
        text: 'java',
        // 子选项
        items: [
          { text: 'java基础', link: '/java/javaSEBase/java' },
          //------------- dao层区
          {
            text: 'dao层框架',
            items: [
              { text: "mybatis", link: '/java/Mybatis/mybatis' },
              { text: "mybatis-plus", link: encodeURI('/java/mybatis_plus/03多数据库源的编写') },
            ]
          },

          //---------------springCloud
          {
            text: 'springCloud',
            items: [
              { text: "gateway", link: '/java/springcloudgateway/01gateway' },

            ]
          },
          { text: '设计模式', link: '/java/designModel/AssemblerDesignPattern' },
          { text: 'java工具', link: encodeURI('/java/java工具/xpath解析doc') }

        ]
      },
      //===========================================top 选项6  ==================

      {
        text: 'lyp',
        // 子选项
        items: [

          {
            text: 'javascript',
            items: [
              { text: "基础概念", link: encodeURI('/lyp/javascript/01什么是事件') },

            ],
          },
          {
            text: '微信小程序',
            items: [
              { text: "微信小程序", link: encodeURI('/lyp/小程序/微信小程序/01什么是小程序') },

            ],
          },


        ]
      },
      //=================================大数据=========================
      {
        text: '大数据',
        // 子选项
        items: [

          {
            text: 'spark',
            items: [
              { text: "spark集群", link: encodeURI('/lyp/大数据/02spark/01Spark集群安装与部署') },

            ],
          },
          {
            text: 'zookeepre',
            items: [
              { text: "zookeepre集群", link: encodeURI('/lyp/大数据/zookeeper/01Zookeeper分布式集群部署') },

            ],
          },
          {
            text: 'kafka',
            items: [
              { text: "kafka集群", link: encodeURI('/lyp/大数据/kafka/01Kafka集群部署与测试') },

            ],
          },


        ]
      }


    ],

    //========================================top导航栏 数组 ]  end============================================



    // ===================================================文章的侧边栏    start  ====================================
    sidebar: {

      // ==================================   首页
      '/软件资源/': [
        {
          title: '软件资源',
          collapsable: false,
          children: ['/软件资源/软件资源',
            '/软件资源/English_syntax',
            '/软件资源/02英语的时态',
            '/软件资源/03英语的发音规则',
            '/软件资源/04词根词缀合集',
            '/软件资源/数学/多项式',
            '/软件资源/数学/Typora数学语法/全面整理Typora的Latex数学公式语法'],

        }
        ,

        // 英语 单词集
        {
          title: '看单词讲故事',
          collapsable: false,
          children: [
            '/软件资源/04词根词缀合集',
            '/软件资源/英语词根词缀集合/ang-',
          ],

        }
        ,

        {
          title: 'docsify',
          collapsable: false,
          children: ['/软件资源/01docsify'],

        }
        ,
        {
          title: 'vuepress语法',
          collapsable: false,
          children: ['/软件资源/vuepress怎么玩/SetTitle',
            '/软件资源/vuepress怎么玩/Writing_rules',
            '/软件资源/vuepress怎么玩/02top导航栏的设置'],

        },

        // 教你怎么在我的博客上进行编写加添内容
        {
          title: '参与博客编写规则',
          collapsable: false,
          children: [encodeURI('/软件资源/博客编写/01github拉取博客仓库'),
          encodeURI('/软件资源/博客编写/02拉取下来的代码怎么运行')],

        },

        // 黑客资料集
        {
          title: '黑客学',
          collapsable: false,
          children: [encodeURI('/软件资源/黑客资料/黑客目录'),],

        },


      ],

      // 表示：点击导航栏后，侧边栏显示的标题有：git选
      '/git/': [
        {
          title: 'git',
          collapsable: false,
          children: ['/git/git'],

        },
        {
          title: '本地仓库提交到git',// 注意：给文章起个别名。别名下面是文章搜标题。
          collapsable: false,
          children: ['/git/git推送到远程的仓库'],

        },
        {
          title: '必知必会的git操作',// 注意：给文章起个别名。别名下面是文章搜标题。
          collapsable: false,
          children: ['/git/01怎么删除远程标签',
            '/git/02怎么打tag推送到远程',
            '/git/03快熟创建git仓库与本地Idea关联',
            '/git/04修改远程分支名称',
            '/git/05合并开发分支',
            '/git/06怎么删除远程分支',
            '/git/07删除本地分支',
            '/git/08本地切换远程分支',
          ],

        },



      ],

      // 表示：点击导航栏后，侧边栏显示的标题有：git选
      '/运维/windows/': [
        {
          title: 'windows运维',
          collapsable: false,
          children: ['/运维/windows/cmd'],

        },
        {
          title: 'docker运维',
          collapsable: false,
          children: [
            '/运维/windows/docker/01docker实验一构建自己的镜像',
            '/运维/windows/docker/docker-compose命令常用',
            '/运维/windows/docker/怎么将镜像打包为zip',
            '/运维/windows/docker/02contos安装docker',
            '/运维/windows/docker/03centos安装docker_compose',
            '/运维/windows/docker/04docker_compose安装mysql',
            '/运维/windows/docker/05idea连接远程docker构建镜像',

          ],

        },

      ],

      // 
      '/network/': [
        {
          title: 'ip地址说起',
          collapsable: false,
          children: ['/network/network01'],

        },


      ],
      // dao层区的侧边目录========表示：点击mybatis标题的导航栏后，侧边栏显示的标题有：java
      '/java/Mybatis/': [
        {
          title: 'mybatis整合springboot',
          collapsable: false,
          children: ['/java/Mybatis/mybatis'],

        },
        {
          title: '查询',
          collapsable: false,
          children: ['/java/Mybatis/select01',
            '/java/Mybatis/select02'],

        }

      ],
      '/java/mybatis_plus/': [
        {
          title: 'mybatis-pius使用多数据源',
          collapsable: true,
          children: ['/java/mybatis_plus/03多数据库源的编写'],

        },

      ],


      // 表示：点击导航栏后，侧边栏显示的标题有：java
      '/java/javaSEBase/': [


        {
          title: 'java基础案例',
          collapsable: false,
          children: ['/java/javaSEBase/java'],

        },

        {
          title: 'java-IO',
          collapsable: false,
          children: [
            '/java/javaSEBase/day01-java带有包名进行编译class',
            '/java/javaSEBase/day14-IO',
            '/java/javaSEBase/day15-IO01流',
            '/java/javaSEBase/day15-IO02转换流',
            '/java/javaSEBase/day15-IO03对象操作流',
            '/java/javaSEBase/day15-IO04Properties集合'],

        },

        {
          title: 'java线程基础与案例',
          collapsable: false,
          children: ['/java/javaSEBase/day16-线程案例01',
          ],

        },


      ],
      //---------------------------表示springcloudgateway侧边栏目录
      '/java/springcloudgateway/': [


        {
          title: 'springCloud-Gateway',
          collapsable: false,
          children: ['/java/springcloudgateway/01gateway']

        },


      ],

      // ===================== 点击设计模式 ===========
      //encodeURI('/electron/设置透明窗口时的兼容性问题')
      '/java/designModel/': [

        {
          title: 'design',
          collapsable: false,
          children: ['/java/designModel/AssemblerDesignPattern',
            encodeURI('/java/designModel/02动态代理模式')]

        },

      ],
      // ===================== 点击设 java 工具 ===========
      '/java/java工具/': [
        {
          title: 'java常用工具库',
          collapsable: false,
          children: [
            encodeURI('/java/java工具/xpath解析doc'),
            encodeURI('/java/java工具/02阿里云短信服务'),
            encodeURI('/java/java工具/03阿里云短信'),
            encodeURI('/java/java工具/04阿里云oss'),
            encodeURI('/java/java工具/05IDEA常用工具'),
          ]

        },

      ],


      // ===================== lyp    点击设 javascript的  基础概念 ===========
      '/lyp/javascript/': [
        {
          title: 'javascript基础概念',
          collapsable: false,
          children: [encodeURI('/lyp/javascript/01什么是事件')]

        },

      ],

      // ===================== lyp  模块  点击设 微信小程序 ,微信小程序的侧边栏  设置 ===========
      '/lyp/小程序/微信小程序': [
        {
          title: '微信小程序开发',
          collapsable: false,
          children: [encodeURI('/lyp/小程序/微信小程序/01什么是小程序'),
          encodeURI('/lyp/小程序/微信小程序/02Appid怎么使用'),
          encodeURI('/lyp/小程序/微信小程序/03WXapplet文件的作用'),]

        },

      ],

      //================= top上 有按钮  大数据的  ===========================

      '/lyp/大数据/02spark': [
        {
          title: 'spark集',
          collapsable: false,
          children: [
            encodeURI('/lyp/大数据/02spark/01Spark集群安装与部署'),
            encodeURI('/lyp/大数据/02spark/02SparkHA集群部署'),
            encodeURI('/lyp/大数据/02spark/03体验第一个Spark程序'),
          ]

        },

      ],

      '/lyp/大数据/kafka': [
        {
          title: 'kafka集',
          collapsable: false,
          children: [encodeURI('/lyp/大数据/kafka/01Kafka集群部署与测试'),
          ]

        },

      ],

      '/lyp/大数据/zookeeper': [
        {
          title: 'zookeeper集',
          collapsable: false,
          children: [encodeURI('/lyp/大数据/zookeeper/01Zookeeper分布式集群部署'),
          ]

        },

      ],

      //***************************   top上 有按钮  大数据  end *****************************************




      //  ====================     在top 上没有提供点击按钮   直接地址访问  =============================

      '/lyp/刷脸项目/': [
        {
          title: '刷脸项目',
          collapsable: false,
          children: [
            encodeURI('/lyp/刷脸项目/01阶段-磨刀不费砍柴工/01mybatis插件安装'),
            encodeURI('/lyp/刷脸项目/01阶段-磨刀不费砍柴工/02安装小程序开发工具'),
            encodeURI('/lyp/刷脸项目/01阶段-磨刀不费砍柴工/03安装HBuilderX软件'),
            encodeURI('/lyp/刷脸项目/01阶段-磨刀不费砍柴工/04安装VirtualBox虚拟机'),
            encodeURI('/lyp/刷脸项目/01阶段-磨刀不费砍柴工/05VirtualBox创虚拟机实例'),
            encodeURI('/lyp/刷脸项目/01阶段-磨刀不费砍柴工/06安装Centos系统'),


          ]

        },
        //   2阶段
        {
          title: '刷脸项目第二阶段',
          collapsable: false,
          children: [
            encodeURI('/lyp/刷脸项目/02阶段-从零构建后端项目基础篇/01创建springboot项目'),
            encodeURI('/lyp/刷脸项目/02阶段-从零构建后端项目基础篇/02配置mybatis'),
            encodeURI('/lyp/刷脸项目/02阶段-从零构建后端项目基础篇/03创建自定义异常类_2-3'),
            encodeURI('/lyp/刷脸项目/02阶段-从零构建后端项目基础篇/04分装web返回的对象2-4'),
            encodeURI('/lyp/刷脸项目/02阶段-从零构建后端项目基础篇/05利用Swagger搭建REST_API2-5'),
            encodeURI('/lyp/刷脸项目/02阶段-从零构建后端项目基础篇/06配置后端验证功能2-6'),
            encodeURI('/lyp/刷脸项目/02阶段-从零构建后端项目基础篇/07抵御即跨站脚本XSS攻击2-7'),
          ]

        },
        //   3阶段
        {
          title: '刷脸项目第三阶段',
          collapsable: false,
          children: [
            encodeURI('/lyp/刷脸项目/03阶段-从零构建后端项目进阶篇/01本章介绍'),
            encodeURI('/lyp/刷脸项目/03阶段-从零构建后端项目进阶篇/02Shiro和JWT技术3-1'),
            encodeURI('/lyp/刷脸项目/03阶段-从零构建后端项目进阶篇/03创建JwtUtil工具类3-2'),
            encodeURI('/lyp/刷脸项目/03阶段-从零构建后端项目进阶篇/04把令牌封装成认证对象3-3'),
            encodeURI('/lyp/刷脸项目/03阶段-从零构建后端项目进阶篇/05创建存储令牌的媒介类3-4'),
            encodeURI('/lyp/刷脸项目/03阶段-从零构建后端项目进阶篇/06精简返回给客户端的异常内容3-5'),
            encodeURI('/lyp/刷脸项目/03阶段-从零构建后端项目进阶篇/07要点回顾'),
          ]

        },

        //   4阶段
        {
          title: '刷脸项目第四阶段',
          collapsable: false,
          children: [
            encodeURI('/lyp/刷脸项目/04阶段-利用UNI-APP创建移动端项目/01申请微信开发者账号4-1'),
            encodeURI('/lyp/刷脸项目/04阶段-利用UNI-APP创建移动端项目/02创建小程序项目4-2'),
            encodeURI('/lyp/刷脸项目/04阶段-利用UNI-APP创建移动端项目/03初始uni-app4-3'),
            encodeURI('/lyp/刷脸项目/04阶段-利用UNI-APP创建移动端项目/04创建登陆页面4-4'),
            encodeURI('/lyp/刷脸项目/04阶段-利用UNI-APP创建移动端项目/05创建注册页面4-5'),
            encodeURI('/lyp/刷脸项目/04阶段-利用UNI-APP创建移动端项目/06注册新用户的业务要点说明4-6'),
            encodeURI('/lyp/刷脸项目/04阶段-利用UNI-APP创建移动端项目/07获取临时授权和微信基本信息4-7'),
            encodeURI('/lyp/刷脸项目/04阶段-利用UNI-APP创建移动端项目/08章节总结4-8'),
          ]

        },
        // 5 阶段 05阶段-实现注册与登陆
        {
          title: '刷脸项目第五阶段',
          collapsable: false,
          children: [
            encodeURI('/lyp/刷脸项目/05阶段-实现注册与登陆/01实现注册超级管理员功能[持久层]'),
            encodeURI('/lyp/刷脸项目/05阶段-实现注册与登陆/02实现注册超级管理员功能[业务层]'),
            encodeURI('/lyp/刷脸项目/05阶段-实现注册与登陆/03掌握RABC权限模型'),
            encodeURI('/lyp/刷脸项目/05阶段-实现注册与登陆/04实现注册超级管理员功能[Web层]'),
            encodeURI('/lyp/刷脸项目/05阶段-实现注册与登陆/05定义全局路径和封装Aiax[移动端]'),
            encodeURI('/lyp/刷脸项目/05阶段-实现注册与登陆/06完成注册超级管理员功能[移动端]'),
            encodeURI('/lyp/刷脸项目/05阶段-实现注册与登陆/07实现用户登陆功能[持久层&业务层]'),
            encodeURI('/lyp/刷脸项目/05阶段-实现注册与登陆/08实现用户登陆功能[Web层]'),
            encodeURI('/lyp/刷脸项目/05阶段-实现注册与登陆/09实现用户登陆功能[移动端]'),
            encodeURI('/lyp/刷脸项目/05阶段-实现注册与登陆/10观察后端项目运行细节'),
          ]

          
        },
        // 6 阶段 06阶段-人脸考勤签到基础篇
        {
          title: '刷脸项目第六阶段',
          collapsable: false,
          children: [
            encodeURI('/lyp/刷脸项目/06阶段-人脸考勤签到基础篇/01章节介绍'),
            encodeURI('/lyp/刷脸项目/06阶段-人脸考勤签到基础篇/02创建小程序Tab导航'),
            encodeURI('/lyp/刷脸项目/06阶段-人脸考勤签到基础篇/03开通腾讯云对象存储服务'),
            encodeURI('/lyp/刷脸项目/06阶段-人脸考勤签到基础篇/04设计首页的英雄区和栏目导航'),
            encodeURI('/lyp/刷脸项目/06阶段-人脸考勤签到基础篇/05设计人脸签到页面'),
            encodeURI('/lyp/刷脸项目/06阶段-人脸考勤签到基础篇/06实现签到自拍功能'),
          ]

        },

      ],

      //  ==================== desc:linux常用命令    在top 上没有提供点击按钮   直接地址访问  =============================

      '/lyp/linux/': [
        {
          title: 'linux常用命令',
          collapsable: false,
          children: [
            encodeURI('/lyp/linux/01常用命令linux'),
          ]

        },

      ],

    },

    // 获取更新时间。
    lastUpdated: 'Last Updated',


    extraWatchFiles: [
      '.vuepress/config.js', // 使用相对路径

    ]
  },


  plugins: [

    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.theme-default-content img',
        delay: 1000,
        options: {
          margin: 24,
          background: '#BADA55',
          scrollOffset: 0,
        },
      }
    ]




  ]



};
