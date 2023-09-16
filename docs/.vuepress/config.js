// docs/.vuepress/config.js
module.exports = {
  //前缀
  //  base: '/triggergun/',

  // 标题,同时，默认主题下，它将显示在导航栏（navbar）上
  title: "匆匆趣玩",
  // 描述
  description: "分享各类资源、教程、黑科技软件、工具等等",

  head: [
    ['link', { rel: 'icon', href: 'favicon.svg' }],
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

    logo: 'logo.svg',
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
            '/软件资源/04词根词缀合集'],

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
          children: ['/java/javaSEBase/day14-IO',
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
          children: [encodeURI('/java/java工具/xpath解析doc')]

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
