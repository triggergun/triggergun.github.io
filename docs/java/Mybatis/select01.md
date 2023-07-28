# 案例一：查询列表数据

在更多的业务场景下，写sql是最重要的。业务逻辑代码书写是在Mybatis框架中写xml的查询sql·


```xml
    

    <resultMap id="baseMap01" type="cn.dasyun.dasbusinesslib.vo.wallet.TimeWalletVo">
        <id column="id" property="id"/>
        <result column="mch_id" property="mchId"/>
        <result column="avail_time" property="availTime"/>
        <result column="company_id" property="companyId"/>
        <result column="company_name" property="companyName"/>
        <result column="status" property="status"/>
        <result column="create_time" property="createTime"/>
        <result column="name" property="name"/>
        <result column="branch_name" property="branchName"/>
    </resultMap>


	<select id="listByCompanyId" resultType="java.util.List" resultMap="baseMap01">
        select
            tw.id,
            tw.mch_id,
            tw.avail_time,
            tw.company_id,
            tw.company_name,
            tw.status,
            tw.create_time,
            mch.name,
            mch.branch_name
        from time_wallet tw
        inner join merchant mch
        on tw.mch_id = mch.id
        <where>
            <if test="companyId != null">
                and tw.company_id = #{companyId}
            </if>
            <if test="mchId != null">
                and tw.mch_id = #{mchId}
            </if>
            <if test="keyword != null and keyword != ''">
                <choose>
                    <when test="companyId != null">
                        and mch.name like concat("%", #{keyword}, "%")
                    </when>
                    <when test="mchId == null and companyId == null">
                        and CONCAT_WS(",", tw.company_name, mch.name) like concat("%", #{keyword}, "%")
                    </when>
                </choose>
            </if>
        </where>
        order by tw.create_time desc
    </select>
```

## 业务场景描述

现在有：时间钱包表【time_wallet】，商家表【merchant】

```xml
        tw.id, --时间钱包id
        tw.mch_id, -- 商家id
        tw.avail_time,  -- 有效的时间
        tw.company_id,  --  公司id
        tw.company_name,  -- 公司的名字
        tw.status,     -- 时间钱包的状态  0  关闭  1 开起
        tw.create_time,   -- 时间钱包创建的时间
        mch.name,     -- 商户的名字
        mch.branch_name   -- 商家分店的名字
```

由于没有原型图加上，只能用字段来说明要查询展示的字段。可以看出一定有二个表进行关联查询。

## 关系分析

1. 一个**时间钱包**  =》 对应一个**商家**     一对一

2. 一个**商家**   =》  只有一个**分店名称**。  【可能是一对一，或  一对多。】

## 第一步：查询结果映射

```xml
    <resultMap id="baseMap01" 			type="cn.dasyun.dasbusinesslib.vo.wallet.TimeWalletVo">
        <id column="id" property="id"/>
        <result column="mch_id" property="mchId"/>
        <result column="avail_time" property="availTime"/>
        <result column="company_id" property="companyId"/>
        <result column="company_name" property="companyName"/>
        <result column="status" property="status"/>
        <result column="create_time" property="createTime"/>
        <result column="name" property="name"/>
        <result column="branch_name" property="branchName"/>
    </resultMap>
```
:::tip
resultMap：结果映射·标签

- type属性：数据表数据映射具体的java实体类的全路径名。

result：具体映射属性标签，属性如下：

- column：要与表中的字段名对应。
 - property：要与java的实体对象类的成员属性变量名对应
:::

## 第二步：编写查询语句

此处没有具体的筛选条件。先看看sql语句的编写吧！

```xml
	<select id="listByCompanyId" resultType="java.util.List" resultMap="baseMap01">
        select
            tw.id,
            tw.mch_id,
            tw.avail_time,
            tw.company_id,
            tw.company_name,
            tw.status,
            tw.create_time,
            mch.name,
            mch.branch_name
        from time_wallet tw
        inner join merchant mch
        on tw.mch_id = mch.id
    </select>
```



## 第三步：查询条件

```xml
    <where>
        -- 公司id不是空，就拼接sql语句
        <if test="companyId != null">
            and tw.company_id = #{companyId}
        </if>
        
        
        -- 商家id 不是空，拼接。
        <if test="mchId != null">
            and tw.mch_id = #{mchId}
        </if>
        
        
        
        <if test="keyword != null and keyword != ''">
            <choose>
                -- 前端传递了 公司id查询，说明是：门户
                -- 门户通过 搜索条件查询
                <when test="companyId != null">
                    and mch.name like concat("%", #{keyword}, "%")
                </when>
                
                --  这个上面二个字段没有拼接sql语句，
                --  说明：客户是通过搜索条件进行查询的。查询什么呢？如下分解！
                <when test="mchId == null and companyId == null">
                    and CONCAT_WS(",", tw.company_name, mch.name) like concat("%", #{keyword}, "%")
                </when>
            </choose>
        </if>
    </where>
```

- 通过搜索框进行模糊查询

```xml
                --  这个上面二个字段没有拼接sql语句，
                --  说明：客户是通过搜索条件进行查询的。查询什么呢？如下分解！
                <when test="mchId == null and companyId == null">
                    and CONCAT_WS(",", tw.company_name, mch.name) like concat("%", #{keyword}, "%")
                </when>
```

CONCAT_WS( )函数怎么用呢？

案例：A，B  like  %B%

返回为 1