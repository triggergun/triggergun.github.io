# 案例二：企业门户查询

## 业务需求

 查询时间钱包对象集合，并且可通过商家的名字条件查询。

```xml
        <!--  时间钱包通过   商家名字收索 、 列表查询   -->
    <resultMap id="baseMap01" type="TimeWalletVo">
        <id column="id" property="id"/>
        <result column="mch_id" property="mchId"/>
        <result column="avail_time" property="availTime"/>
        <result column="company_id" property="companyId"/>
        <result column="company_name" property="companyName"/>
        <result column="status" property="status"/>
        <!--   merchant 表中的      -->
        <result column="name" property="name"/>
    </resultMap>
    
    <select id="listTimeWallet" resultType="java.util.List" resultMap="baseMap01">
        select
        tw.id,
        tw.mch_id,
        tw.avail_time,
        tw.company_id,
        tw.company_name,
        tw.status,
        mch.name,
        mch.branch_name
        from time_wallet tw
        inner join merchant mch
        on tw.mch_id = mch.id
        <where>
            <if test="companyId != null">
                tw.company_id = #{companyId}
            </if>
            <if test="mchName != null">
                and mch.name like concat("%", #{mchName}, "%")
            </if>
        </where>
    </select>

```

## 查询条件

- 通过公司的id去查询。

```xml
        <if test="companyId != null">
            tw.company_id = #{companyId}
        </if>
```

若果：是门户的话，一定要添加这个条件，过滤是这个公司的数据进行展示。

## 条件查询列表

- 通过商户名字进行了**模糊匹配**查询。

```xml
            <if test="mchName != null">
                and mch.name like concat("%", #{mchName}, "%")
            </if>
```





