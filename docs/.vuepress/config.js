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
        ['link', {rel: 'icon', href: 'favicon.ico'}],
        ['link', { rel: 'stylesheet', href: '/css/katex.min.css' }],
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

            // ========================  选项二
            {
                text: '图南的博客',
                // 子选项
                items: [
                    {text: 'Blog-first', link: 'https://ground-gun.gitee.io/'},
                    {text: 'Blog-second', link: 'https://wutunan.vercel.app/'},
                    {text: 'Gitee', link: 'https://gitee.com/ground-gun'},
                    {text: 'Github', link: 'https://github.com/triggergun'},
                    {text: '知乎', link: 'https://www.zhihu.com/people/hong-lang-80-78/posts'},
                    {text: '英语', link: 'https://eglish.wutunan.top'}
                ]
            },

            //========================   选项三   start ==============
            {text: 'git', link: '/git/git'},
            //========================   选项三   end ==============

            //========================选项4    link   top   start =================
            {
                text: '运维',
                items: [
                    {text: '命令', link: '/运维/windows/cmd'},
                    {text: '网络', link: '/network/network01'},
                    {
                        text: 'https原理实战',
                        items: [
                            {text: "02)密码学", link: '/network/https/深入浅出https原理/02密码学'},
                        ]
                    },
                    {
                        // top的红色 标题
                        text: '你真的安全吗？',
                        items: [
                            // windows安全 top栏的选项
                            {text: "windows安全", link: '/network/security/windows/win10绕过密码'},
                        ]
                    }
                ]

            },
            //========================选项4    link   top   end =================


            //============================= top  选项5    start ==============
            {
                text: 'java',
                // 子选项
                items: [
                    //------------- java技术栈
                    {
                        text: 'java技术栈',
                        items: [
                            {text: 'java基础', link: '/java/javaSEBase/java'},

                            {text: 'gradle', link: encodeURI('/java/gradle/01安装gradle')},
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
                            {text: "spring源码分析", link: encodeURI('/java/spring源码分析/01Spring源码下载')},
                            {text: "spring-boot源码分析", link: encodeURI('/java/springboot_source_code/20250105_demo01')},
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

                ]
            },

            //============================= top  选项5    end ==============

            //=========================================== top 选项6  start  ==================
            {
                text: 'lyp',
                // 子选项
                items: [

                    {
                        text: 'javascript',
                        items: [
                            {text: "基础概念", link: encodeURI('/lyp/javascript/01什么是事件')},

                        ],
                    },
                    {
                        text: '微信小程序',
                        items: [
                            {text: "微信小程序", link: encodeURI('/lyp/小程序/微信小程序/01什么是小程序')},

                        ],
                    },
                    // 子选项 c语言
                    {
                        text: 'c语言',
                        items: [
                            {text: "c语言", link: encodeURI('/lyp/c语言/安装devc++')},

                        ],
                    },
                    // 子选项 c++
                    {
                        text: 'C++',
                        items: [
                            {text: "C++", link: encodeURI('/lyp/C++语言/01我的第一个C++程序/01如何创建工程')},

                        ],
                    },
                    // 子选项 db top导航栏
                    {
                        text: 'db',
                        items: [
                            {
                                text: "mysql实验总结",
                                link: encodeURI('/lyp/db/mysql/mysql数据库总结/01添加唯一索引程序在添加数据')
                            },

                        ],
                    },
                    {

                        //  top栏
                        text: 'rust语言',
                        items: [
                            {text: "第一阶段基础", link: encodeURI('/lyp/rust语言/第一阶段基础篇/01rust是什么')},

                        ],
                    }, {
                        //  top栏
                        text: 'python之路',
                        items: [
                            {text: "第一阶段基础", link: encodeURI('/lyp/python/第一阶段基础/01python的安装')},

                        ],
                    },
                    {
                        //  top栏
                        text: 'android之路',
                        items: [
                            {text: "kotlin&android", link: encodeURI('/lyp/android/kotlin/demo01_2025_02_21')},

                        ],
                    },
                ]
            },

            //===========================================top 选项6   end  ==================
            //=================================大数据  选项7 =========================
            {
                text: '大数据',
                // 子选项
                items: [
                    {
                        text: 'hadoop基础理论',
                        items: [
                            {
                                text: "MapReduce理论",
                                link: encodeURI('/lyp/大数据/hadoop基本概念/阶段一/01MapReduce是什么')
                            },

                        ],
                    },
                    {
                        text: 'spark',
                        items: [
                            {text: "spark集群", link: encodeURI('/lyp/大数据/02spark/01Spark集群安装与部署')},
                            {text: "scala语言基础", link: encodeURI('/lyp/大数据/scala语言基础/01scala简介')},

                        ],
                    },
                    {
                        text: 'zookeepre',
                        items: [
                            {text: "zookeepre集群", link: encodeURI('/lyp/大数据/zookeeper/01Zookeeper分布式集群部署')},

                        ],
                    },
                    {
                        text: 'kafka',
                        items: [
                            {text: "kafka集群", link: encodeURI('/lyp/大数据/kafka/01Kafka集群部署与测试')},

                        ],
                    },
                    {
                        text: '大话flume',
                        items: [
                            {text: "flume", link: encodeURI('/lyp/大数据/flume/base01/版本管理')},

                        ],
                    },

                ]
            },
            //=================================大数据  选项7  top end =========================

            //  ============   top 的 选项 8   ============================================
            {
                text: '美工',
                // 子选项
                items: [
                    {
                        text: 'ps',
                        items: [
                            {text: "pa基础", link: encodeURI('/美工/ps/01ps基础/01巧记ps快捷键')},
                        ],
                    }
                ]
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
            }
            // //  ============   top 的 选项 9   end  ============================================

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
                    children: [
                        '/git/01怎么删除远程标签',
                        '/git/02怎么打tag推送到远程',
                        '/git/03快熟创建git仓库与本地Idea关联',
                        '/git/04修改远程分支名称',
                        '/git/05合并开发分支',
                        '/git/06怎么删除远程分支',
                        '/git/07删除本地分支',
                        '/git/08本地切换远程分支',
                        '/git/09idea中强制迁出和智能迁出',
                        '/git/10tag太多怎么过滤',
                        '/git/11怎么将本地仓库上传github',
                        '/git/12gitee怎么同步github仓库',
                        '/git/13idea中使用git回退单个文件的版本',
                        '/git/14重置某个提交的文件',
                        '/git/15在master分支一键合并开发分支代码',
                        '/git/16远程与本地【冲突】',
                        '/git/github常见问题',
                    ],

                },


            ],
            // 表示：运维选  =============================
            '/运维/': [
                {
                    title: 'windows运维',
                    collapsable: false,
                    children: [
                    '/运维/windows/cmd',
                    "/运维/windows/cmd01",
                    "/运维/windows/cmd02"
                    ],

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
                        '/运维/windows/docker/demo01_2025_01_26',
                        '/运维/windows/docker/demo02_2025_01_26',

                    ],

                },
                {
                    title: 'centos运维',
                    collapsable: false,
                    children: [
                        '/运维/centos/01防火墙命令',
                        '/运维/centos/02linux找文件夹',
                        '/运维/centos/demo01_2025_02_26',
                        '/运维/centos/demo02_2025_02_27',
                        '/运维/centos/demo03_2025_02_27',
                        '/运维/centos/demo04_2025_02_28',
                        '/运维/centos/demo05_2025_02_28',
                        '/运维/centos/demo06_2025_02_28',
                        '/运维/centos/demo07_2025_02_28',
                        '/运维/centos/demo08_2025_02_28',
                        '/运维/centos/demo09_2025_02_28',
                        '/运维/centos/demo10_2025_02_28',
                        '/运维/centos/demo11_2025_02_28',
                        '/运维/centos/demo12_2025_02_28',
                        '/运维/centos/demo13_2025_02_28',
                        '/运维/centos/demo14_2025_02_28',
                        '/运维/centos/demo15_2025_02_28',
                    ],
                },
                {
                    title: 'centos常用命令',
                    collapsable: false,
                    children: [
                        '/运维/centos_cmd/demo01_2025_03_03',
                    ],
                },
                {
                    title: 'ubuntu运维',
                    collapsable: false,
                    children: [
                        '/运维/ubuntu/demo01_2025_02_21',
                        '/运维/ubuntu/demo02_2025_02_22'],
                },
                {
                    title: '系统架构',
                    collapsable: false,
                    children: [
                        '/运维/架构笔记/01如何利用Docker快速构建基于Prometheus的MySQL监控系统'
                    ],

                }

            ],
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

            ],
            //  网络基础知识     侧边栏 end  ===============
            // dao层区的侧边目录========表示：点击mybatis标题的导航栏后，侧边栏显示的标题有：java
            '/java/Mybatis/': [
                {
                    title: 'mybatis整合springboot',
                    collapsable: false,
                    children: ['/java/Mybatis/mybatis'],

                },
                {
                    title: 'crud',
                    collapsable: false,
                    children: [
                        '/java/Mybatis/select01',
                        '/java/Mybatis/select02',
                        '/java/Mybatis/sesion3电视剧crud'
                    ],

                }

            ],
            '/java/mybatis_plus/': [
                {
                    title: 'mybatis-pius使用多数据源',
                    collapsable: true,
                    children: ['/java/mybatis_plus/03多数据库源的编写'],

                },

            ],
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

            // ===================== 点击设 gradle ===========
            '/java/gradle/': [
                {
                    title: 'gradle入门',
                    collapsable: false,
                    children: [
                        encodeURI('/java/gradle/01安装gradle'),
                        encodeURI('/java/gradle/02Gradle项目目录结构'),
                        encodeURI('/java/gradle/03Gradle创建第一个项目'),

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
            '/lyp/rust语言': [
                {
                    title: '第一阶段基础篇',
                    collapsable: false,
                    children: [
                        // 第一阶段基础篇
                        encodeURI('/lyp/rust语言/第一阶段基础篇/01rust是什么'),
                        encodeURI('/lyp/rust语言/第一阶段基础篇/02rust的安装'),
                        encodeURI('/lyp/rust语言/第一阶段基础篇/03rust工具概念'),
                        encodeURI('/lyp/rust语言/第一阶段基础篇/04helloworld'),
                        encodeURI('/lyp/rust语言/第一阶段基础篇/05Hello_Cargo'),
                        encodeURI('/lyp/rust语言/第一阶段基础篇/06rust命令总结'),
                        encodeURI('/lyp/rust语言/第一阶段基础篇/07rust编写猜数字游戏'),
                        encodeURI('/lyp/rust语言/第一阶段基础篇/08生成一个随机数'),
                        encodeURI('/lyp/rust语言/第一阶段基础篇/09比较猜测的数字和秘密数字'),
                        encodeURI('/lyp/rust语言/第一阶段基础篇/10通用编程概念'),
                    ]
                },
                {
                    title: 'rust第二阶段问答篇',
                    collapsable: false,
                    children: [
                        // rust的项目集合readme的翻译
                        encodeURI('/lyp/rust语言/第二阶段问答篇/rust_20250104_demo01'),
                        encodeURI('/lyp/rust语言/第二阶段问答篇/rust_20250106_demo02'),
                        encodeURI('/lyp/rust语言/第二阶段问答篇/rust_20250110_demo03'),
                        encodeURI('/lyp/rust语言/第二阶段问答篇/rust_20250124_demo04'),
                        encodeURI('/lyp/rust语言/第二阶段问答篇/rust_20250125_demo05'),
                        encodeURI('/lyp/rust语言/第二阶段问答篇/rust_20250206_demo06'),
                    ]
                },
                {
                    title: 'rust demo',
                    collapsable: false,
                    children: [
                        // rust的项目集合readme的翻译
                        encodeURI('/lyp/rust语言/rust_demo_set/ocrs_readme'),
                    ]
                },

            ],
            // ===================== lyp模块点击设rust语言 ,rust语言的侧边栏目录    设置 end ===========


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

            ],
            // ===================== lyp模块点击设python语言 ,python语言的侧边栏目录    设置 end ===========


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

            //  ==================== 不显示: desc:linux常用命令    在top 上没有提供点击按钮   直接地址访问  =============================

            '/lyp/linux/': [
                {
                    title: 'linux常用命令',
                    collapsable: false,
                    children: [
                        encodeURI('/lyp/linux/01常用命令linux'),
                    ]

                },

            ],

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

            '/美工/ps/': [
                // 第一阶段
                {
                    title: '第一阶段ps基础',
                    collapsable: false,
                    children: [
                        encodeURI('/美工/ps/01ps基础/01巧记ps快捷键'),
                    ]

                },
                {
                    title: '第二阶段ps实战',
                    collapsable: false,
                    children: [
                        encodeURI('/美工/ps/01ps基础/demo01_2025_02_22'),
                        encodeURI('/美工/ps/01ps基础/demo02_2025_02_25'),
                        encodeURI('/美工/ps/01ps基础/demo03_2025_02_26'),
                    ]

                },
            ],
            //  ps  ================================  end  ==========


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
                    ]

                },
            ],

            //  安卓的侧边栏的配置  ================================  end  ==========


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
