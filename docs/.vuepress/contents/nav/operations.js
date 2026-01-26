// 选项4：运维
module.exports = [
    {text: '命令', link: '/operation/windows/cmd'},
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
            {text: "nmap扫描实战", link: '/network/nmap/demo01_2025_11_11_01'},
            {text: "密码破解实战", link: '/network/password/demo01_2025_11_11_01'},
            {text: "Metasploit(MSF)实战", link: '/network/msf/demo01_2025_11_11_01'},
        ]
    },
    {
        // top的红色 标题
        text: 'shell运维',
        items: [
            {text: "shell实战", link: '/operation/shell/demo01_2025_03_19_01'},
        ]
    },
    {
        // linux的基础
        text: 'linux基础理论',
        items: [
            {text: "linux基础概念", link: '/operation/linux_base/demo01_2025_03_22_01'},
        ]
    },
    {
        // nginx运维
        text: 'nginx运维',
        items: [
            {text: "nginx常用命令", link: '/operation/nginx_base/demo01_2025_11_12_01'},
        ]
    },
    {
        // 运维问题集
        text: '运维问题集',
        items: [
            {text: "运维问题排错", link: '/operation/problem/demo01_2025_11_11_01'},
        ]
    },
    {
        // 网络面试试题
        text: '网络面试题',
        items: [
            {text: "网络物理设备面试题", link: '/network/interview/demo01_2025_11_11_01'},
        ]
    }
];