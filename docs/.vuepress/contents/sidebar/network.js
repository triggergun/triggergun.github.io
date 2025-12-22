module.exports = [
    {
        title: 'ip地址说起',
        collapsable: false,
        children: [
            encodeURI('/network/network01'),
            encodeURI('/network/network02'),
            encodeURI('/network/network03')
        ],

    },
    {
        title: '华为HCIA',
        collapsable: false,
        children: [
            encodeURI('/network/华为/HCIA认证/01华为认证体系介绍'),
            encodeURI('/network/华为/HCIA认证/02eNSP的安装'),
            encodeURI('/network/华为/HCIA认证/03配置ssh协议')
        ],

    },
    // 第一阶段  安全
    {
        title: 'windows安全',
        collapsable: false,
        children: [
            encodeURI('/network/security/windows/win10绕过密码'),
            encodeURI('/network/security/windows/demo01_2025_11_18_01'),
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
    // nmap实战
    {
        title: 'nmap实战',
        collapsable: false,
        children: [
            encodeURI('/network/nmap/demo01_2025_11_11_01'),
        ]
    },
    //密码破解实战
    {
        title: '密码破解实战',
        collapsable: false,
        children: [
            encodeURI('/network/password/demo01_2025_11_11_01'),
        ]
    },
    {
        title: 'Metasploit(MSF)实战',
        collapsable: false,
        children: [
            encodeURI('/network/msf/demo01_2025_11_11_01'),
        ]
    },
];