# git配置
### 设置git全局设置
```
git config --global --list
git config --global user.name xxx
git config --global user.email xxx
```

### 推送
```
git add .
git commit -m"x"
git push
git pull  //保持本地仓库和远程仓库的同步
```

### 分支管理
```
git checkout -b 01nav  //新建分支并切换分支
git branch //查看分支
git push origin 01nav  //推送分支到远程
git checkout master //切换分支
git merge 01nav  //合并分支
```

### 版本回退
```
git log //打印日志信息
git reflog //打印日志
git reset --hard xxxx //版本回退
```

### 清缓存
```
git rm -r --cached .
```