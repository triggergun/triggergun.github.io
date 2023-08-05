// docs/.vuepress/config.js
module.exports = {
  //前缀
  base: '/triggergun/',

  // 标题,同时，默认主题下，它将显示在导航栏（navbar）上
  title: "科技趣玩",
  // 描述
  description: "分享各类资源、教程、黑科技软件、工具等等",

  head: [
    ['link', { rel: 'icon', href: 'favicon.svg' }],

  ],


  markdown: {
    lineNumbers: true,

    //  解决：图片中文路径  与 前面 要加 ./ 才能解析。
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }

  },



  // 主题配置
  themeConfig: {


    // ====================顶上的导航栏
    nav: [

      // 选项一
      { text: '首页', link: '/' },

      // 选项二
      {
        text: '图南的博客',
        // 子选项
        items: [
          { text: 'Github', link: 'https://github.com/triggergun' },
          { text: '知乎', link: 'https://www.zhihu.com/people/hong-lang-80-78/posts' }
        ]
      },

      //选项三
      { text: 'git', link: '/git/git' },


      //选项4    link 
      {
        text: '运维',
        items: [
          { text: '命令', link: '/运维/windows/cmd' },
          { text: '网络', link: '/network/network01' }
        ]

      },




      // top  选项5
      {
        text: 'java',
        // 子选项
        items: [
          { text: 'mybatis', link: '/java/Mybatis/mybatis' },
          { text: 'java基础', link: '/java/javaSEBase/java' },
          { text: 'springCloud', link: '/java/springcloudgateway/01gateway' },
          { text: '设计模式', link: '/java/designModel/AssemblerDesignPattern' }

        ]
      }
    ],

    // ===================================================侧边栏====================================
    sidebar: {

      // ==================================   首页
      '/软件资源/': [
        {
          title: '软件资源',
          collapsable: false,
          children: ['/软件资源/软件资源', '/软件资源/English_syntax'],

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
          children: ['/软件资源/vuepress怎么玩/SetTitle', '/软件资源/vuepress怎么玩/Writing_rules'],

        }

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
      // 表示：点击mybatis标题的导航栏后，侧边栏显示的标题有：java
      '/java/Mybatis/': [
        {
          title: 'mybatis整合springboot',
          collapsable: false,
          children: ['/java/Mybatis/mybatis'],

        },
        {
          title: '查询',
          collapsable: false,
          children: ['/java/Mybatis/select01', '/java/Mybatis/select02'],

        }

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
          children: ['/java/javaSEBase/day14-IO', '/java/javaSEBase/day15-IO01流', '/java/javaSEBase/day15-IO02转换流', '/java/javaSEBase/day15-IO03对象操作流', '/java/javaSEBase/day15-IO04Properties集合'],

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
          children: ['/java/designModel/AssemblerDesignPattern',encodeURI('/java/designModel/02动态代理模式')]

        },

      ]



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
