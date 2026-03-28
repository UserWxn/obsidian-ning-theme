# Ning Obsidian Theme

## 开发调试

先安装依赖：

```bash
npm install
```

### 1. 调试开发样式

监听 `src/dev.scss`，实时输出到当前 Obsidian vault 的 snippets 目录：

```bash
npm run dev
```

### 2. 调试测试样式

监听测试样式文件：

```bash
npm run dev:test
```

## 发布构建

### 本地构建

编译正式主题文件 `theme.css`，并复制到本地 Obsidian 主题目录：

```bash
npm run build
```

### 推送前发布

更新版本号并执行构建：

```bash
npm run release
```

执行完成后，再把生成结果提交并推送到 GitHub。

## BRAT / GitHub 仓库要求

推送到 GitHub 时，仓库根目录至少需要保留：

- `manifest.json`
- `theme.css`
- `package.json`
- `src/`
- `scripts/`

BRAT 安装主题时主要读取：

- `manifest.json`
- `theme.css`

## 相关网址

- scss 转换 css：[https://jsonformatter.org/scss-to-css](https://jsonformatter.org/scss-to-css)
- Obsidian BRAT：https://tfthacker.com/brat-themes
