# 实现用户登陆功能[Web层]

## 01)创建表单类

创建<font color='red'>LoginForm.java 类</font>，封装客户端提交的数据。

```java
package com.example.emos.wx.controller.form;

import io.swagger.annotations.ApiModel;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
@ApiModel
public class LoginForm {

    // 前端提交过来的值不能为空。
    @NotBlank(message = "临时授权不能为空")
    private String code;
}

```



## 02)创建登陆Web方法

在<font color='red'>UserController.java</font>中创建<font color='red'>login()</font>方法。

```java

    /**
     * 用户登入
     * @param form 登入的参数对象。
     * @return
     */
    @PostMapping("/login")
    @ApiOperation("登陆系统")
    public R login(@Valid @RequestBody LoginForm form){
        int id=userService.login(form.getCode());
        String token=jwtUtil.createToken(id);
        saveCacheToken(token,id);
        Set<String> permsSet = userService.searchUserPermissions(id);
        return R.ok("登陆成功").put("token",token).put("permission",permsSet);
    }

```

