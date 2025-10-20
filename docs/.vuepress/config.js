﻿// import blog from './contents/nav/blog.js'

// 顶部导航栏
const blogArray = require('./contents/nav/blog.js');
const operationsArray = require('./contents/nav/operations.js');
const javaArray = require('./contents/nav/java.js');
const lypArray = require('./contents/nav/lyp.js');
const bigDataArray = require('./contents/nav/bigData.js');
const mei_gongArray = require('./contents/nav/mei_gong.js');
const dbArray = require('./contents/nav/db.js');
const tan_jia_gouArray = require('./contents/nav/tan_jia_gou.js');
const tan_qian_duanArray = require('./contents/nav/tan_qian_duan.js');

// 侧边栏
const operationsSidebarArray = require('./contents/sidebar/operations.js');
const faceObjectSidebarArray = require('./contents/sidebar/faceObject.js');
const lypDbSidebarArray = require('./contents/sidebar/lypDb.js');
const gitSidebarArray = require('./contents/sidebar/git.js');

// 美工 start
const mei_gongPsSidebarArray = require('./contents/sidebar/mei_gongPs.js');
const mei_gongWordSidebarArray = require('./contents/sidebar/mei_gongWord.js');
const mei_gongPrSidebarArray = require('./contents/sidebar/mei_gongPr.js');
// 美工 end
const javaMybatisPlusSidebarArray = require('./contents/sidebar/javaMybatisPlus.js');
const javaGradleSidebarArray = require('./contents/sidebar/javaGradle.js');
// maven
const javaMavenSidebarArray = require('./contents/sidebar/javaMaven.js');
const dbSidebarArray = require('./contents/sidebar/db.js');
const lypRustSidebarArray = require('./contents/sidebar/lypRust.js');
const lypLinuxSidebarArray = require('./contents/sidebar/lypLinux.js');
const javaMybatisSidebarArray = require('./contents/sidebar/javaMybatis.js');
const lypBigDataScalaBaseSidebarArray = require('./contents/sidebar/lypBigDataScalaBase.js');
const lypBigDataFlumeBase01SidebarArray = require('./contents/sidebar/lypBigDataFlumeBase01.js');
// docs/.vuepress/config.js
module.exports = {


    // 扒拉我源码的伙伴，请不要转发我这里的内容！后果自付！


    //前缀 一般不要
    //  base: '/blog/',

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
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['link', {rel: 'stylesheet', href: '/css/katex.min.css'}],
        // 谷歌广告位
        // <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6542685716937885" crossorigin="anonymous"></script>
        ['script', {
            async: true,
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6542685716937885',
            crossorigin: "anonymous"
        }],
        ['script', {async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'}],

        // https
        // <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        // http
        //<meta http-equiv="Content-Security-Policy">

        ['meta', {http_equiv: 'Content-Security-Policy', content: 'upgrade-insecure-requests'}],
        ['meta', {name: 'baidu-site-verification', content: 'codeva-7KiW1mSNFG'}],
        ['meta', {name: 'google-adsense-account', content: 'ca-pub-6542685716937885'}],
        //  ['link', { rel: 'stylesheet', href: 'index.css' }],
    ],

    markdown: {
        lineNumbers: true,

        //  解决：图片中文路径  与 前面 要加 ./ 才能解析。
        extendMarkdown: md => {
            md.use(require("markdown-it-disable-url-encode"));
            md.use(require('markdown-it-katex'));
        }

    },

    /**
     * 下面是主题的配置，主要配置那些呢？
     *
     *
     */

    // ====================顶上的导航栏
    // ====================顶上的导航栏
    // ====================顶上的导航栏
    // ====================顶上的导航栏
    // ====================顶上的导航栏
    // ====================顶上的导航栏
    // ====================顶上的导航栏
    // ====================顶上的导航栏
    // ====================顶上的导航栏
    // ====================顶上的导航栏
    // ====================顶上的导航栏
    // 主题配置
    themeConfig: {

        logo: 'https://blog-1320192491.cos.ap-nanjing.myqcloud.com/logo.png',
        // ====================顶上的导航栏


        //========================================top导航栏开始============================================
        nav: [
            // 选项一
            {text: '首页', link: '/'},
            // ========================  选项二  start
            {
                text: '图南博客',
                // 子选项
                items: blogArray
            },
            // ========================  选项二  end
            //========================   选项三   start ==============
            {text: 'git', link: '/git/git'},
            //========================   选项三   end ==============
            //========================选项4    link   top   start =================
            {
                text: '运维',
                items: operationsArray,
            },
            //========================选项4    link   top   end =================
            //============================= top  选项5    start ==============
            {
                text: 'java',
                // 子选项
                items: javaArray,
            },
            //============================= top  选项5  java  end ==============
            //=========================================== top 选项6  start  ==================
            {
                text: 'lyp',
                // 子选项
                items: lypArray,
            },
            //===========================================top 选项6   end  ==================
            //=================================大数据  选项7 =========================
            {
                text: '大数据',
                // 子选项
                items: bigDataArray,
            },
            //=================================大数据  选项7  top end =========================
            //  ============   top 的 选项 8   ============================================
            {
                text: '美工',
                // 子选项
                items: mei_gongArray,
            },
            //  ============   top 的 选项 8   end ============================================
            // //  ============   top 的 选项 9   ============================================
            {
                text: '基础科学',
                // 子选项
                items: [
                    {
                        text: '数学之美',
                        items: [
                            {
                                text: "中等数学思想",
                                link: encodeURI('/基础科学/数学基础/02中等数学思想/球体体积公式推过程')
                            },
                        ],
                    },
                    {
                        text: '物理电学',
                        items: [
                            {
                                text: "中等电学思想",
                                link: encodeURI('/基础科学/physical_base/middle_school_stage/demo01_2025_03_01')
                            },
                        ],
                    }
                ]
            },
            // //  ============   top 的 选项 9   end  ============================================
            // //  ============ 谈架构   top 的 选项 10  start  ============================================
            {
                text: '谈架构',
                // 子选项
                items: tan_jia_gouArray,
            },
            // //  ============   top 的 选项 10   end  ============================================
            // //  ============ 谈架构   top 的 选项 11  start  ============================================
            {
                text: '谈游戏',
                // 子选项
                items: [
                    {
                        text: '第一步',
                        items: [
                            {
                                text: "启蒙之书",
                                link: encodeURI('/game/unity_book01/demo01_2025_08_23_01')
                            },
                        ],
                    }
                ]
            },
            // //  ============   top 的 选项 11   end  ============================================
            // //  ============ 谈前端   top 的 选项 12  start  ============================================
            {
                text: '谈前端',
                // 子选项
                items: tan_qian_duanArray,
            },
            // //  ============   top 谈前端的 选项 12   end  ============================================
            // //  ============ 谈数据库   top 的 选项 13  start  ============================================
            {
                text: '数据库',
                // 子选项
                items: dbArray,
            }
            // //  ============  谈数据库 top 谈数据库 选项 13   end  ============================================
        ],

        //========================================top导航栏 数组 ]  end============================================


        // ===================================================文章的侧边栏    start  ====================================
        // ===================================================文章的侧边栏    start  ====================================
        // ===================================================文章的侧边栏    start  ====================================
        // ===================================================文章的侧边栏    start  ====================================
        // ===================================================文章的侧边栏    start  ====================================
        // ===================================================文章的侧边栏    start  ====================================
        // ===================================================文章的侧边栏    start  ====================================
        // ===================================================文章的侧边栏    start  ====================================
        // ===================================================文章的侧边栏    start  ====================================
        // ===================================================文章的侧边栏    start  ====================================
        sidebar: {
            // 表示：基础科学的研究  maht =============================
            '/基础科学/数学基础/': [
                {
                    title: '微积分启蒙',
                    collapsable: false,
                    children: [
                        encodeURI('/基础科学/数学基础/02中等数学思想/球体体积公式推过程'),
                        encodeURI('/基础科学/数学基础/02中等数学思想/微积分的启蒙'),
                        encodeURI('/基础科学/数学基础/02中等数学思想/02什么是微积分'),
                    ],
                },
            ],
            // 物理的侧边栏设置    start   ===============
            '/基础科学/physical_base/': [
                {
                    title: '电学基础',
                    collapsable: false,
                    children: [
                        encodeURI('/基础科学/physical_base/middle_school_stage/demo01_2025_03_01'),
                    ],
                },
            ],
            // 物理的侧边栏设置    end   ===============
            // ==================================   首页      软件资源    ====================
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
                    children: [
                        '/软件资源/vuepress怎么玩/SetTitle',
                        '/软件资源/vuepress怎么玩/Writing_rules',
                        '/软件资源/vuepress怎么玩/02top导航栏的设置',
                        '/软件资源/vuepress怎么玩/03vuepress的流水线部署'],
                },

                // 教你怎么在我的博客上进行编写加添内容
                {
                    title: '参与博客编写规则',
                    collapsable: false,
                    children: [
                        encodeURI('/软件资源/博客编写/01github拉取博客仓库'),
                        encodeURI('/软件资源/博客编写/02拉取下来的代码怎么运行')],

                },
                // 学车
                {
                    title: '学车',
                    collapsable: false,
                    children: [
                        encodeURI('/软件资源/study_car/科目一技巧总结'),
                        encodeURI('/软件资源/study_car/练习科目二day01'),
                        encodeURI('/软件资源/study_car/练习科目二day02'),
                        encodeURI('/软件资源/study_car/练习科目二day03'),
                        encodeURI('/软件资源/study_car/练习科目二day04'),
                        encodeURI('/软件资源/study_car/科目三上路'),
                        encodeURI('/软件资源/study_car/科目二考试要点')
                    ],

                },

                // 黑客资料集
                {
                    title: '黑客学',
                    collapsable: false,
                    children: [encodeURI('/软件资源/黑客资料/黑客目录'),],

                },


            ],

            // 表示：点击导航栏后，侧边栏显示的标题有：git选
            '/git/': gitSidebarArray,
            // 表示：运维选  =============================
            // 注意 不能再搞 /运维/xxx/的 侧边栏了。
            '/运维/': operationsSidebarArray,
            //  网络基础知识     侧边栏 start  ===============
            '/network/': [
                {
                    title: 'ip地址说起',
                    collapsable: false,
                    children: [
                        '/network/network01',
                        '/network/network02',
                        '/network/network03'
                    ],

                },
                {
                    title: '华为HCIA',
                    collapsable: false,
                    children: [
                        '/network/华为/HCIA认证/01华为认证体系介绍',
                        '/network/华为/HCIA认证/02eNSP的安装',
                        '/network/华为/HCIA认证/03配置ssh协议'
                    ],

                },
                // 第一阶段  安全
                {
                    title: 'windows安全',
                    collapsable: false,
                    children: [
                        encodeURI('/network/security/windows/win10绕过密码'),
                    ]
                },
                // 第一阶段  tcp
                {
                    title: 'tcp',
                    collapsable: false,
                    children: [
                        encodeURI('/network/tcp/01tcp.md'),
                    ]
                },
                // 第一阶段  jwt
                {
                    title: 'jwt',
                    collapsable: false,
                    children: [
                        encodeURI('/network/jwt/01什么是jwt.md'),
                    ]
                },

            ],
            //  网络基础知识     侧边栏 end  ===============
            // dao层区的侧边目录========表示：点击mybatis标题的导航栏后，侧边栏显示的标题有：java
            '/java/Mybatis/': javaMybatisSidebarArray,
            '/java/mybatis_plus/': javaMybatisPlusSidebarArray,
            // java基础学习阶段
            // 表示：点击导航栏后，侧边栏显示的标题有：java
            '/java/javaSEBase/': [
                {
                    title: 'java基础案例',
                    collapsable: false,
                    children: ['/java/javaSEBase/java'],

                },
                {
                    title: 'java值传递',
                    collapsable: false,
                    children: ['/java/javaSEBase/day02'],

                },
                {
                    title: 'java面向对象',
                    collapsable: false,
                    children: ['/java/javaSEBase/day03'],

                },
                {
                    title: 'IO流',
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
                    title: 'java泛型',
                    collapsable: false,
                    children: [
                        '/java/javaSEBase/day18_2025_04_25_01',
                        '/java/javaSEBase/day18_2025_04_25_02',
                        '/java/javaSEBase/day18_2025_04_25_03',
                    ],

                },
                {
                    title: 'java日期',
                    collapsable: false,
                    children: [
                        '/java/javaSEBase/day18_2025_04_26_01',
                    ],

                },
                {
                    title: 'java沉思',
                    collapsable: false,
                    children: [
                        '/java/javaSEBase/java01',
                    ]

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
                        encodeURI('/java/java工具/01发布一个jar到中央仓库'),
                        encodeURI('/java/java工具/02阿里云短信服务'),
                        encodeURI('/java/java工具/03阿里云短信'),
                        encodeURI('/java/java工具/04阿里云oss'),
                        encodeURI('/java/java工具/05IDEA常用工具'),
                        encodeURI('/java/java工具/06mybatis代码生成器'),
                        encodeURI('/java/java工具/07java实例json格式化'),
                        encodeURI('/java/java工具/08java项目打包exe文件'),
                    ]

                },

            ],

            // =====================在 top栏上 点击==》 java基础服务 ===========
            '/java/java基础服务/': [
                {
                    title: 'nexus服务',
                    collapsable: false,
                    children: [
                        encodeURI('/java/java基础服务/nexus/01nexus3的docker安装'),
                    ]

                },
                {
                    title: 'nacos服务',
                    collapsable: false,
                    children: [
                        encodeURI('/java/java基础服务/nacos/nacos常见问题'),
                    ]

                },

            ],

            // ===================== 点击设 spring源码分析 ===========
            '/java/spring源码分析/': [
                {
                    title: 'spring源码分析',
                    collapsable: false,
                    children: [
                        encodeURI('/java/spring源码分析/01Spring源码下载'),
                        encodeURI('/java/spring源码分析/02srping源码编译'),

                    ]

                },

            ],

            // ===================== 点击设 springboot源码分析 ===========
            '/java/springboot_source_code/': [
                {
                    title: 'spring-boot自动装配',
                    collapsable: false,
                    children: [
                        encodeURI('/java/springboot_source_code/20250105_demo01'),

                    ]

                },

            ],

            // ===================== 侧边栏 配置  点击设 gradle  start ===========
            '/java/gradle/': javaGradleSidebarArray,
            // ===================== 侧边栏 配置  点击设 gradle  end ===========

            // ===================== 侧边栏 配置  点击设 maven  start ===========
            '/java/maven/': javaMavenSidebarArray,
            // ===================== 侧边栏 配置  点击设 maven  end ===========


            // ===================== lyp    点击设 javascript的  基础概念 ===========
            '/lyp/javascript/': [
                {
                    title: 'javascript基础概念',
                    collapsable: false,
                    children: [
                        encodeURI('/lyp/javascript/01什么是事件'),
                        encodeURI('/lyp/javascript/demo01_20250430_01'),
                        encodeURI('/lyp/javascript/demo01_20250430_02'),

                    ]

                },
                {
                    title: '前端FAQ',
                    collapsable: false,
                    children: [encodeURI('/lyp/javascript/faq_demo01_2025_04_04_01')]

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

            // ===================== lyp  模块  点击设 c语言 ,c语言侧边栏 目录    设置 ===========
            // 2024年-1-13
            '/lyp/c语言': [
                {
                    title: 'c语言基础',
                    collapsable: false,
                    children: [
                        //  c 语言的 侧边栏 目录
                        encodeURI('/lyp/c语言/安装devc++'),
                        encodeURI('/lyp/c语言/01我的第一个程序/01我的第一个c程序'),
                    ]
                },
                {
                    title: 'c数据结构与算法',
                    collapsable: false,
                    children: [
                        //  c 语言的 侧边栏 目录
                        encodeURI('/lyp/c语言/数据结构与算法/01c语言数据结构与算法'),

                    ]
                },

            ],


            // ===================== lyp  模块  点击设 C++ ,c语言侧边栏 目录    设置 ===========
            // 2024年-1-13
            '/lyp/C++语言': [
                {
                    title: 'C++',
                    collapsable: false,
                    children: [
                        //  c++语言的 侧边栏 目录
                        encodeURI('/lyp/C++语言/01我的第一个C++程序/01如何创建工程'),
                        encodeURI('/lyp/C++语言/01我的第一个C++程序/02c++第一个程序'),

                    ]
                },

            ],

            // ===================== lyp模块点击设rust语言 ,rust语言的侧边栏目录    设置  start ===========
            // 2024年-5-14
            // 第一阶段 基础
            '/lyp/rust语言': lypRustSidebarArray,
            // ===================== lyp模块点击设rust语言 ,rust语言的侧边栏目录    设置 end ===========

            // ===================== lyp模块点击设  vue     设置  start ===========
            // 2024年-5-14
            // 前端 基础
            '/lyp/前端': [
                {
                    title: 'vue',
                    collapsable: false,
                    children: [
                        // 第一阶段基础篇
                        encodeURI('/lyp/前端/vue/demo01-20250430-01'),
                        encodeURI('/lyp/前端/vue/demo01-20250430-02'),
                        encodeURI('/lyp/前端/vue/demo02-20250601-01'),
                    ]
                },
                {
                    title: '布局',
                    collapsable: false,
                    children: [
                        // rust的项目集合readme的翻译
                        encodeURI('/lyp/前端/layout/demo01_2025_04_23_01'),
                    ]
                },
                {
                    title: '前端基础常识',
                    collapsable: false,
                    children: [
                        // 第一阶段基础篇
                        encodeURI('/lyp/前端/base/demo01_20250527_01'),
                        encodeURI('/lyp/前端/base/demo02_faq_20251020_01'),
                        encodeURI('/lyp/前端/base/demo02_faq_20251020_02'),
                        encodeURI('/lyp/前端/base/demo02_faq_20251020_03'),
                    ]
                },
                {
                    title: 'uni-app基础',
                    collapsable: true,
                    children: [
                        // 第一阶段基础篇
                        encodeURI('/lyp/前端/uniapp/demo01_2025_06_17_01'),
                    ]
                },
                {
                    title: '前端基础FAQ',
                    collapsable: false,
                    children: [
                        // 第一阶段基础篇
                        encodeURI('/lyp/前端/base/demo01_faq_20250527_01'),
                        encodeURI('/lyp/前端/base/demo01_faq_20250527_02'),
                        encodeURI('/lyp/前端/base/demo01_faq_20250527_03'),
                    ]
                },

            ],
            // =====================  lyp模块点击设  vue        设置 end ===========


            // ===================== lyp模块点击设python语言 ,python语言的侧边栏目录    设置  start ===========
            // 2024年-5-14
            // 第一阶段 基础
            '/lyp/python': [
                {
                    title: '第一阶段基础篇',
                    collapsable: false,
                    children: [
                        // 第一阶段基础篇
                        encodeURI('/lyp/python/第一阶段基础/01python的安装'),
                        encodeURI('/lyp/python/第一阶段基础/02PythonPackagingUserGuide【Python打包用户指南】'),
                        encodeURI('/lyp/python/第一阶段基础/03打包python项目'),
                        encodeURI('/lyp/python/第一阶段基础/04PyCharm创建一个项目'),
                        encodeURI('/lyp/python/第一阶段基础/常用的python命令'),
                        encodeURI('/lyp/python/第一阶段基础/demo01_2025_04_08_01'),
                        encodeURI('/lyp/python/第一阶段基础/demo01_2025_04_08_02'),

                    ]
                },
                {
                    title: '爬虫',
                    collapsable: false,
                    children: [
                        // 第一阶段基础篇
                        encodeURI('/lyp/python/crawl/day01'),

                    ]
                },
                {
                    title: 'jupyter',
                    collapsable: false,
                    children: [
                        // 第2阶段基础篇
                        encodeURI('/lyp/python/jupyter/demo01_2025_03_19_01'),
                        encodeURI('/lyp/python/jupyter/demo01_2025_03_19_02'),

                    ]
                },


            ],
            // ===================== lyp模块点击设python语言 ,python语言的侧边栏目录    设置 end ===========


            //    ==========    不同语言的语法比较    start   ===========
            '/lyp/compare': [
                {
                    title: '语法比较',
                    collapsable: false,
                    children: [
                        // 结构体
                        encodeURI('/lyp/compare/demo01_2025_04_07_01'),
                        encodeURI('/lyp/compare/demo02_2025_04_07_02'),

                    ]
                }

            ],
            //    ==========    不同语言的语法比较    end   ===========

            //================= top上 有按钮  大数据的  start ===========================

            '/lyp/大数据/hadoop基本概念': [
                {
                    title: '阶段一',
                    collapsable: false,
                    children: [
                        encodeURI('/lyp/大数据/hadoop基本概念/阶段一/01MapReduce是什么'),
                        encodeURI('/lyp/大数据/hadoop基本概念/阶段一/02WorldCount案例'),
                        encodeURI('/lyp/大数据/hadoop基本概念/阶段一/hadoop集群搭建'),

                    ]

                },
                {
                    title: 'hadoop官方',
                    collapsable: false,
                    children: [
                        encodeURI('/lyp/大数据/hadoop基本概念/hadoop官网资料/01hadoop首页'),
                        encodeURI('/lyp/大数据/hadoop基本概念/hadoop官网资料/02最新消息'),
                    ]

                },

            ],
            //================= top上 有按钮  大数据的  end ===========================


            //================= top上 有按钮  go  start ===========================
            '/lyp/go/': [
                {
                    title: 'go华山论剑',
                    collapsable: false,
                    children: [
                        encodeURI('/lyp/go/demo01_2025_03_22_01'),
                    ]
                },

            ],
            //================= top上 有按钮  go  end ===========================


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
            '/lyp/大数据/scala语言基础': lypBigDataScalaBaseSidebarArray,
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
            '/lyp/大数据/flume/base01': lypBigDataFlumeBase01SidebarArray,
            //***************************   top上 有按钮  大数据  end *****************************************

            // 数据库的侧边栏  start  =========
            '/lyp/db/': lypDbSidebarArray,
            // 数据库的侧边栏  end  =========

            //  ====================     在top 上没有提供点击按钮   直接地址访问  =============================

            '/lyp/刷脸项目/': faceObjectSidebarArray,

            //  ==================== 不显示: desc:linux常用命令    在top 上没有提供点击按钮   直接地址访问  =============================

            '/lyp/linux/': lypLinuxSidebarArray,

            //  =====================================   发票的的项目   start ==========================================
            '/lyp/发票项目2024-3-1/': [
                // 第一阶段
                {
                    title: '01)微信小程序用户登入',
                    collapsable: false,
                    children: [
                        encodeURI('/lyp/发票项目2024-3-1/01微信小程序用户登入/01小程序登入'),
                        encodeURI('/lyp/发票项目2024-3-1/01微信小程序用户登入/02小程序授权设计与实现'),
                    ]

                },
                // 第二阶段
                {
                    title: '02)发票扫码',
                    collapsable: false,
                    children: []

                },
                // 美术的阶段
                {
                    title: '发票的UI设计',
                    collapsable: false,
                    children: [
                        encodeURI('/lyp/发票项目2024-3-1/ui设计/01团队logo设计'),
                    ]
                },

            ],
            //  =====================================   发票的的项目   end ==========================================

            //  ps  ================================  start  ==========

            '/美工/ps/': mei_gongPsSidebarArray,
            //  ps  ================================  end  ==========

            //  word  ================================  start  ==========
            '/美工/word/': mei_gongWordSidebarArray,
            //  word  ================================  end  ==========
            //  美工 start 侧边栏
            '/美工/word/': mei_gongPrSidebarArray,
            //  美工 end 侧边栏


            //  安卓的侧边栏的配置  ================================  start  ==========
            '/lyp/android/': [
                // /lyp/android/ 是父亲目录。
                // kotlin 是父亲的子目录。
                // android与kotlin
                {
                    title: 'android与kotlin',
                    collapsable: false,
                    children: [
                        encodeURI('/lyp/android/kotlin/demo01_2025_02_21'),
                        encodeURI('/lyp/android/kotlin/demo06_2025_03_18_01'),
                    ]

                },
            ],

            //  安卓的侧边栏的配置  ================================  end  ==========

            //  谈架构   ================================  start  ==========
            '/framework/cloud/': [
                // /framework/cloud/ 是父亲目录。
                // cloud 下面都是文件。
                {
                    title: '云原生',
                    collapsable: false,
                    children: [
                        encodeURI('/framework/cloud/demo01_2025_03_19_01'),
                    ]
                },
            ],

            // web架构
            '/framework/web/': [
                // /framework/cloud/ 是父亲目录。
                // cloud 下面都是文件。
                {
                    title: 'web架构',
                    collapsable: false,
                    children: [
                        encodeURI('/framework/web/demo01_2025_04_01_01'),
                        encodeURI('/framework/web/demo01_2025_04_01_02'),
                        encodeURI('/framework/web/demo02_2025_04_30_01'),
                        encodeURI('/framework/web/demo02_2025_04_30_02'),
                        encodeURI('/framework/web/demo02_2025_04_30_03'),
                        // 接口幂等性问题
                        encodeURI('/framework/web/demo03_2025_04_30_01'),
                        // web设计
                        encodeURI('/framework/web/demo04_2025_05_01_01'),
                        // web登入逻辑设计
                        encodeURI('/framework/web/demo05_2025_06_01_01')
                    ]
                },
            ],
            // 深度学习
            '/framework/Introduction_to_Deep_Learning_4/': [
                // /framework/cloud/ 是父亲目录。
                // cloud 下面都是文件。
                {
                    title: '深度学习入门',
                    collapsable: false,
                    children: [
                        encodeURI('/framework/Introduction_to_Deep_Learning_4/chapter_01_20250601_01'),
                    ]
                },
            ],
            // 深度学习 end
            // 书籍阅读观后感 start
            '/framework/system_book01/': [
                // /framework/cloud/ 是父亲目录。
                // cloud 下面都是文件。
                {
                    title: '深入理解计算机系统',
                    collapsable: false,
                    children: [
                        encodeURI('/framework/system_book01/chapter_01_20251010_01'),
                        encodeURI('/framework/system_book01/chapter_01_20250601_0101'),
                        encodeURI('/framework/system_book01/chapter_01_20250601_0102'),
                    ]
                },
            ],
            // 书籍阅读观后感 end

            // 物联网 iot start
            '/framework/iot/': [
                // /framework/cloud/ 是父亲目录。
                // cloud 下面都是文件。
                {
                    title: 'emqx',
                    collapsable: false,
                    children: [
                        encodeURI('/framework/iot/emqx/demo01_2015_10_10_01'),
                    ]
                },
            ],
            // 物联网 iot end


            //  谈架构  ================================  end  ==========

            //  谈游戏   ================================  start  ==========
            '/game/': [
                {
                    title: '启蒙之书',
                    collapsable: false,
                    children: [
                        encodeURI('/game/unity_book01/demo01_2025_08_23_01'),
                        encodeURI('/game/unity_book01/demo01_2025_08_23_02'),
                    ]
                },
            ],
            //  谈游戏  ================================  end  ==========

            //  谈前端   ================================  start  ==========
            '/front_end/': [

                {
                    title: '前端学习路线',
                    collapsable: false,
                    children: [
                        encodeURI('/front_end/roadmap/demo01_2025_10_02_01'),
                    ]
                },
                {
                    title: 'html初级之路',
                    collapsable: false,
                    children: [
                        encodeURI('/front_end/html/demo01_2025_10_01_01'),
                        encodeURI('/front_end/html/demo01_2025_10_01_02'),
                    ]
                },
                {
                    title: 'css初级之路',
                    collapsable: false,
                    children: [
                        encodeURI('/front_end/css_basic/demo01_2025_10_01_01'),
                        encodeURI('/front_end/css_basic/demo02_2025_10_08_01'),
                        encodeURI('/front_end/css_basic/demo02_2025_10_08_02'),
                        encodeURI('/front_end/css_basic/demo03_2025_10_15_01'),
                    ]
                },
            ],
            //  谈前端  ================================  end  ==========

            //  谈数据库   ================================  start  ==========
            '/db/': dbSidebarArray,
            //  谈数据库  ================================  end  ==========

            // ======  外层的括号  ==========
        },


        // ======  外层的括号  ==========
        // ======  外层的括号  ==========
        // ======  外层的括号  ==========
        // ======  外层的括号  ==========
        // ======  外层的括号  ==========
        // ======  外层的括号  ==========
        // ======  外层的括号  ==========
        // ======  外层的括号  ==========
        // ======  外层的括号  ==========
        // ======  外层的括号  ==========
        // ======  外层的括号  ==========
        // ======  外层的括号  ==========
        // ======  外层的括号  ==========
        // ======  外层的括号  ==========

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
        ],
        // 只要把这个放进 config的plugins中就可以了
        // ["sakura", {
        //   num: 20,  // 默认数量
        //   show: true, //  是否显示
        //   zIndex: -100,   // 层级
        //   img: {
        //     replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
        //     httpUrl: '...'     // 绝对路径
        //   }
        // }]


    ]


};
