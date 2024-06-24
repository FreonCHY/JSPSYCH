# 帮运别人的仓库
- git clone git@github.com:username/repositoryname.git

# 建立自己的仓库（工作树）并上传
- git init
- git add    
- git status
- **commit**: git commit;  git commit xxx -m"cause; git commit --amend(修改提交信息);
#####xxx.xx表示某个单独文件
+ **log**: 
+ git log（当前状态的操作历史）;
+ git log --graph(图表形式提交日志);
+ git reflog(仓库的所有操作历史); 
+ git log -p xxx.xx;    git log xxx.xx; 
- git diff; git diff HEAD;  
- **branch**: git branch; git checkout; git checkout -; git checkout -b xxx; 
	```"git checkout -b feature-A"``` 
	**same as**
	```"git branch feature-A"+"git checkout feature-A";``` 
- git merge --no-f feature-A
- git reset --hard f20b6fef33b0c8b7c01263d097dd30e97f863035
- git rebase -i HEAD~n 最近的n个历史更改的哈希值压缩成为一个，将pick改成fixup
- git remote add origin xxx.git
- git push -u origin main/feature-A