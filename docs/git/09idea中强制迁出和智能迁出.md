# 09)IDEA Smart Checkout和Force Checkout区别



## 场景

IDEA 当在一个分支A上**修改了内容没有提交**，然后**切换**到另一个分支B时，可能会发生冲突。 这时IDEA会弹出提示，问你要选择**Smart Checkout**还是**Force Checkout**:

## 选择**Smart Checkout**:

IDEA会先执行sta[sh命令](https://so.csdn.net/so/search?q=sh命令&spm=1001.2101.3001.7020)，贮存这些未提交的修改，然后checkout 到分支B，在切换到分支B后，unstash 这些修改，

::: warning

注意：所以A分支本地的这些修改会带到B分支上。

:::

## 选择**Force Checkout**：

不会保留你的修改，切到另一个分支内容就消失了，且切回来原来分支也找不回，<font color='red'>白写了</font>。