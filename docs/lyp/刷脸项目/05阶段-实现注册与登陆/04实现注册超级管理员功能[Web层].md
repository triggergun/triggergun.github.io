# 实现注册超级管理员功能(Web层)[5-4]

## 01)创建表单类

接收移动端提交的注册请求，我们需要用表单类来封装数据，所以创建 RegisterForm.java 类

```java
package com.example.emos.wx.controller.form;

import io.swagger.annotations.ApiModel;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Data
@ApiModel
public class RegisterForm {
    @NotBlank(message = "注册码不能为空")
    @Pattern(regexp = "^[0-9]{6}$",message = "注册码必须是6位数字")
    private String registerCode;

    @NotBlank(message = "微信临时授权不能为空")
    private String code;

    @NotBlank(message = "昵称不能为空")
    private String nickname;

    @NotBlank(message = "头像不能为空")
    private String photo;
}
```



## 02)创建Controller类

处理移动端提交的请求，我们需要Contrcller类，所以创建UserController.java 类

::: tip 为什么web层不用先定义接口呢？

- 问:业务层采用先定义接口，后声明实现类的做法，为什么Web层不这么做?

答:业务层的需求经常变化，所以应该先声明接口，然后再写实现类。Web层这里变化并不大，可以直接定义具体类。

:::

```java
package com.example.emos.wx.controller;

import cn.hutool.json.JSONUtil;
import com.example.emos.wx.common.util.R;
import com.example.emos.wx.config.shiro.JwtUtil;
import com.example.emos.wx.config.tencent.TLSSigAPIv2;
import com.example.emos.wx.controller.form.*;
import com.example.emos.wx.exception.EmosException;
import com.example.emos.wx.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.shiro.authz.annotation.Logical;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("/user")
@Api("用户模块Web接口")
public class UserController {
    @Autowired
    private UserService userService;


    // 用户登入成功，要返回令牌字符串。
    // 使用这个类生成令牌字符串。
    @Autowired
    private JwtUtil jwtUtil;

    // redis的操作
    // redis缓存令牌字符串
    @Autowired
    private RedisTemplate redisTemplate;

    // redis缓存令牌不是永久缓存，有个过期时间的。
    @Value("${emos.jwt.cache-expire}")
    private int cacheExpire;

    @Value("${trtc.appid}")
    private Integer appid;

    @Value("${trtc.key}")
    private String key;

    @Value("${trtc.expire}")
    private Integer expire;


    /**
     * 都是走这个方法注册。
     * root
     * 普通用户
     * @param form
     * @return
     */
    @PostMapping("/register")
    @ApiOperation("注册用户")
    public R register(@Valid @RequestBody RegisterForm form){
        int id=userService.registerUser(form.getRegisterCode(),form.getCode(),form.getNickname(),form.getPhoto());

        // 用户id 生成字符串
        String token=jwtUtil.createToken(id);

        // 找用户的权限
        Set<String> permsSet=userService.searchUserPermissions(id);

        // 保存到redis中 token 与 用户id
        saveCacheToken(token,id);

        // 返回生成的token 与用户的权限
        return R.ok("用户注册成功").put("token",token).put("permission",permsSet);
    }
    
        // 注册成功、登入成功。都要向redis中保存令牌
    private void saveCacheToken(String token,int userId){
        // key = token
        // value = 用户的id
        redisTemplate.opsForValue().set(token,userId+"",cacheExpire, TimeUnit.DAYS);
    }
```





## 03)test

默认访问的地址。

http://127.0.0.1:8080/emos-wx-api/swagger-ui.html

![image-20231209170117257](04实现注册超级管理员功能(Web层).assets/image-20231209170117257.png)



测试参数

```json
{
  "code": "0a1UCvGa1WVxvG02vpHa1SeiFd0UCvGo",
  "nickname": "微信用户",
  "photo": "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BW",
  "registerCode": "000000"
}
```

结果

![image-20231209171629028](04实现注册超级管理员功能(Web层).assets/image-20231209171629028.png)



::: danger openid怎么获取

临时授权字符串 + appid + app的密钥  = openid【向微信平台换取】

::: 

























































