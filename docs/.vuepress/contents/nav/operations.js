// 选项4：运维
module.exports = [
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
    },
    {
        // top的红色 标题
        text: 'shell运维',
        items: [
            {text: "shell实战", link: '/运维/shell/demo01_2025_03_19_01'},
        ]
    },
    {
        // linux的基础
        text: 'linux基础理论',
        items: [
            {text: "linux基础概念", link: '/运维/linux_base/demo01_2025_03_22_01'},
        ]
    },
    {
        // nginx运维
        text: 'nginx运维',
        items: [
            {text: "nginx常用命令", link: '/运维/nginx_base/demo01_2025_11_12_01'},
        ]
    }
];