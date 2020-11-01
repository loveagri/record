#!/usr/bin/env sh

git add .
git commit -m 'deploy'
git push

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
echo 'blog.dotohi.com' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:loveagri/record.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://loveagri:${GITHUB_TOKEN}@github.com/loveagri/record.git
  git config --global user.name "loveagri"
  git config --
  global user.email "1044531744@qq.com"
fi


git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
