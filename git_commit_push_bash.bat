#!/bin/bash

# 添加所有更改
git add .

# 提示用户输入提交信息
read -p "请输入提交信息: " commit_message

# 提交更改
git commit -m "$commit_message"

# 强制推送到远程分支
git push -f origin pages