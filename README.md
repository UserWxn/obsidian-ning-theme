## 🧩 开发调试

- color-scheme：配色方案
- components：组件，如：checkbox、callout、列表、标题等
- layout：布局
- others：其他，如：font字体、自定义cssclass等
- plugins：针对某些插件的 css 样式
- style-settings：样式设置
- variables：变量

> 根据你的操作系统，修改 `.env` 文件中的 `OBSIDIAN_PATH` 为你的 Obsidian 所在库的路径。

| 分类     | 场景       | 命令                | 说明                                               |
| -------- | ---------- | ------------------- | -------------------------------------------------- |
| 环境准备 | 安装依赖   | `npm install`       | 安装项目所需依赖                                   |
| 开发调试 | 样式开发   | `npm run dev`       | 监听 `src/dev.scss`，实时输出到 Obsidian snippets  |
| 开发调试 | 测试样式   | `npm run dev:test`  | 监听测试样式文件                                   |
| 发布构建 | 本地构建   | `npm run build`     | 编译 `theme.css` 并复制到本地主题目录              |
| 发布构建 | 发布前构建 | `npm run release`   | 更新版本号并执行构建                               |

## 🎨 外观

## 📦 功能展示

##  🚧 免责声明

- 该主题是基于 Obsidian 众多主题深度魔改的版本，因此可能会在未来的更新中出现兼容性问题。
- 该主题也可能与您已有的其他 CSS 代码片段（或插件的 CSS 样式）发生冲突。
- 该主题不会上架 Obsidian 主题市场，您可以通过 Obsidian 的插件：BART来安装。

## 🌺 致谢

- [Baseline](https://github.com/aaaaalexis/obsidian-baseline)：页面布局、样式、表格、彩色文件夹、cssclasses等
- [Primary](https://github.com/primary-theme/obsidian)：链接等
- [Maple](https://github.com/subframe7536/obsidian-theme-maple)：Heading、SCSS搭建
- 论坛、社区、Discord、Reddit、群聊等大佬分享的CSS、SCSS代码
