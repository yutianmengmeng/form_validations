### angular实现注册表单
#### 分析
* 页面结构:三块表单:用户信息\密码\确认密码
* 业务逻辑:
  + 用户信息:4-32个字符;邮箱格式判断;
  + 密码:8-16个字符; 数字密码_$的组合
  + 确认密码:跟密码模块做数据校验,数据同步

#### 设计
* 结构: bootstrap的表单
* 功能: angular的双向数据绑定功能
  - 用户信息:判断字符长度/用正则判断邮箱格式/用户姓名开头
  - 密码: 判断长度/用正则判断数据格式
  - 确认密码:判断是否跟密码一致

#### 实现
* 结构
* ng命令:ng-model(绑定数据) 
  ng-minlength(最小长度) 
  ng-maxlength(最大长度)
  ng-submit(表达提交事件) 
  ng-class(绑定样式)
  ng-if(如何满足if内的条件语句就执行下面的内容)
  ng-disabled(禁用)

tips:判断表单数据在输入后不合法 ```formName.username.$invalid && formName.username.$touched```

#### 利用bootstrap快速搭建表单
```<form>
 