# antd-stencil

> 基于 antd 的 stenciljs 实现

## 简介

**antd-stencil** 基于 antd 的 stenciljs 实现

### 版本说明

致力于打造跨技术栈组件库

### 框架支持

1. vue
2. react
3. angular
4. 任何基于 html 的框架

## 开始

本项目使用 lerna 和 yarn 管理依赖和发布,yarn 管理依赖,lerna 管理发布 #使用 yarn 命令安装所有 package 下的依赖到根目录的 node_modules

```bash
yarn
env PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true" yarn add eslint-plugin-html -D -W
```

puppeteer 安装问题

```bash
yarn cache clean
env PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true" yarn
```

mozjpeg pre-build test failed 安装问题

```bash
#mac
brew install nasm
#ubuntu
sudo apt install nasm
```

查看所有的包

```bash
lerna list
```

创建一个包,
第一步:在更目录 package.json 中 workspaces 中创建包名称
第二步:创建包

```bash
lerna create <name> [loc]
#创建一个包，name包名，loc 位置可选
```

## 工作流

1. Make changes
1. Commit those changes
1. Make sure Travis turns green
1. Bump version in `package.json`
1. `conventionalChangelog`
1. Commit `package.json` and `CHANGELOG.md` files
1. Tag
1. Push

#### 为 antd-stencil 贡献代码

antd-stencil 非常欢迎社区开发者为 antd-stencil 贡献代码，在贡献之前请先阅读[贡献指南](https://github.com/grasilife/antd-stencil/blob/master/.github/CONTRIBUTING.md)。

## 问题反馈与建议

[给 antd-stencil 提 ISSUE](http://new-issue.ant.design/)

## 贡献者们

<a href="https://github.com/grasilife/antd-stencil/graphs/contributors"></a>

## 开发计划

[Milestones](https://github.com/grasilife/antd-stencil/milestones)

## 更新日志

本项目遵从 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)，更新日志请查阅 [changelog](https://github.com/grasilife/antd-stencil/blob/master/CHANGELOG.md)。

## 开发交流

[官方交流微信群]()

## License

MIT License
