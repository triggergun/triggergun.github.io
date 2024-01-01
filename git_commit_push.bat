@echo off

REM 添加所有更改
git add .

REM 提示用户输入提交信息
set /p commit_message=请输入提交信息: 

REM 提交更改
git commit -m "%commit_message%"

REM 强制推送到远程分支
git push -f origin pages