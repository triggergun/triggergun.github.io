# 01ldap基础



## 常用命令

```cmd
ladpsearch -x -H ldap://localhost -b dc=example,dc=org -D “cn=admin,dc=example,dc=org” -w admin
```

ldapsearch：表示查询数据。

- -x：使用简单认证方式。
- -H： 表示openldap服务器的地址
- -b： dc要在example,dc=org。这几个域名内。
- -D：用户名。
- -w:  身份的密码。

## openldap基础知识

ldap:简单目录访问协议，