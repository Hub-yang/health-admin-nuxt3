#!/bin/bash

# 当前目录创建commitlint.config.js文件并添加默认内容
echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
# package.json文件中添加commitlint命令
npm pkg set scripts.commitlint="commitlint --edit"
# 初始化husky
npx husky init
# 当前目录创建.husky/commit-msg文件并添加内容
echo -e '#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\npnpm commitlint ${1}' > .husky/commit-msg
echo -e '#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\npnpm lint-staged' > .husky/pre-commit