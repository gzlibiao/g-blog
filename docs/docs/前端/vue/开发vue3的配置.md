#### 安装 Volar 插件

vue language feature

#### 禁用 @builtin typescript

#### cnpm

```
npm install -g cnpm --registry=https://registry.npm.taobao.org 设置 npm config set registry https://registry.npm.taobao.org
```

#### 安装 vue 脚手架

```
cnpm install @vue/cli -g

```

#### 配置

```
.editorconfig
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false


安装插件 EditorConfig for VS Code
```

#### 使用 prettier

```
npm install prettier -D
.prettierrc文件

{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}

.prettierignore文件

/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*


安装prettier插件

package.json ->     "prettier": "prettier --write ."

```
