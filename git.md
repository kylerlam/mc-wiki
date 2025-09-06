# Git 

## WORKFLOW

1. Working Directory
   - write codes & add
2. Stage / Index
   - rm / commit
3. Commit History
   - push / reset
4. Remote Repository

## SETUP

```shell
# check account
git config --global user.name
git config --global user.email

# setup account
git config --global user.name "<username>"
git config --global user.email "<github_email>"
```

## STAGE & SNAPSHOT

```shell
# show modified files in working directory
git status

# add a file as it looks now to the stage for next commit
git add <file>

# unstage a file while retaining the changes in working directory
git reset <file>

# commit the staged content as a new commit snapshot
git commit -m "<descriptive message>"

# back to a specific commit and keep files in Working Directory and Stage
git reset --soft HEAD~<number_back>

# back to a specific commit and reset Working Directory and Stage
git reset --hard HEAD~<number_back>
# back to a specific commit on remote (erase history)
git push --force
```

## BRANCH & MERGE

```shell
# list all branches
git branch
# list all branches including remotes
git branch -a

# create a new branch at the current commit
git branch <branch_name>

# delete a local branch
git branch -d <branch_to_delete>

# switch to an existing branch and check it out into the working directory
git checkout <branch_name>
# switch to a branch (if it does not exist, create it)
git checkout -b <branch_name>

# 1. create an empty branch without commit history
git checkout --orphan <empty_branch>
# 2. remove all files
git rm -rf .
# 3. push the empty branch to remote (make sure to have an initial commit)
git push -u origin <empty_branch>

# merge the specified branch’s history into the current one
git merge <alias>/<branch>
```

## SHARE & UPDATE

```shell
# add a git URL as an alias; <alias> is usually "origin"
git remote add <alias> <url>

# fetch down all the branches from that Git remote
get fetch <alias>/<branch>

# transmit local branch commits to the remote repository branch
git push <alias>/<branch>

# delete a remote branch
# git push origin --delete <branch>
git push origin -d <branch>

# fetch and merge any commits from the tracking remote branch
git pull
```

## TRACKING PATH CHANGES

```shell
# delete the file from project and stage the removal for commit
git rm <file>

# remove a file from the index(staging area)
git rm --cache <file>
```

