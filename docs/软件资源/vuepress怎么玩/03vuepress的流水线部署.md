# vuepress的流水线部署

效果：

1. 推送vuepress文档到pages分支上进行构建。
2. 将构建的源html的源码推送的master分支上。
3. 将github的master分支推送到gitee上。



如下脚本存在的问题。

1. 都是强制推送。没有记录。不知道怎么优化。

```yaml
name: VuePress CI/CD
on:
  push:
    branches:
      - pages  # 监听 pages 分支的 push 事件

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v2

      - name: Install Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14.17.0'

      - name: Install Dependencies
        run: npm install

      - name: Build VuePress
        run: npm run build

      - name: Commit Build Results to Pages Branch
        run: |
          git config user.name "triggergun"
          git config user.email "930572358@qq.com"
          git checkout pages  # 切换到 pages 分支
          git add docs/
          git commit -m "Build docs dir"
          git add node_modules  # 添加到工作树中
          git commit -m "Build commit node_modules"
          git push origin pages  # 推送构建结果到 pages 分支，这里提交的是源码的目录
          cp  -r docs/.vuepress/dist ../build  # 将构建的源码copy到上一级目录
      - name: Pull branch
        run: |
          git fetch
          git branch -a
      - name: Copy Build Results to Master Branch
        run: |
          git config user.name "triggergun"
          git config user.email "930572358@qq.com"
          git checkout master  # 切换到 master 分支
          git pull  # 拉取最新代码
          cp -r ../build/* .  # 复制构建源码结果到工作目录到当前的master下
          git add .
          git commit -m "Update master with latest build results"
          git remote add origin_with_token_with_branch https://github.com/triggergun/triggergun.git
          git push --force origin_with_token_with_branch master  # 推送构建结果到 master 分支
  sync-to-gitee:
    name: Sync to Gitee
    needs: build_and_deploy
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v2  # 检出代码到工作流程的执行环境中

      - name: Install Git
        run: sudo apt-get -y install git  # 安装 Git

      - name: Set Up SSH Key for Gitee
        run: |
          mkdir -p ~/.ssh
          echo "${{ secrets.GITEE_RSA_PRIVATE_KEY }}" > ~/.ssh/id_rsa
        env:
          GITEE_SSH_PRIVATE_KEY: ${{ secrets.GITEE_RSA_PRIVATE_KEY }}

      - name: Set Permissions for SSH Key
        run: chmod 600 ~/.ssh/id_rsa

      - name: Add Gitee SSH Host to Known Hosts
        run: ssh-keyscan gitee.com >> ~/.ssh/known_hosts

      - name: Pull branch
        run: |
          git fetch
          git checkout master
          git branch -a
      # - name: copy file
      #   run: |
      #     mkdir ../build01
      #     cp -r docs/.vuepress/dist/* build01
      #     git branch -a     

      - name: Push to Gitee Repository
        run: |
          git config --global user.name "triggergun"
          git config --global user.email "930572358@qq.com"
          git remote add gitee git@gitee.com:ground-gun/triggergun.git
          git push -f gitee master  # 推送构建结果到 Gitee 仓库的 master 分支
  deploy_and_refresh_pages:
    needs: sync-to-gitee
    runs-on: ubuntu-latest
    steps:
      - name: Build Gitee Pages
        uses: yanglbme/gitee-pages-action@master
        with:
          # 注意替换为你的 Gitee 用户名
          gitee-username: ground-gun
          # 注意在 Settings->Secrets 配置 GITEE_PASSWORD
          gitee-password: ${{ secrets.GITEE_PASSWORD }}
          # 注意替换为你的 Gitee 仓库
          gitee-repo: ground-gun/triggergun
```

