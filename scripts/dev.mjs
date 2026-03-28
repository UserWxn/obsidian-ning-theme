import { spawn } from "child_process";
import { basename, extname, join } from "path";
import { homedir, platform } from "os";

// 确定 devVaultRoot 的路径
const devVaultRoot = platform() === "darwin"
  ? "/Users/ning/obsidian-doc/WXN-Obsidian"  // macOS 上的路径
  : homedir() + "/obsidian-doc/WXN-Obsidian";  // 其他平台使用主目录拼接路径

console.log("devVaultRoot:", devVaultRoot);  // 打印路径确认

// 获取输入和输出路径
const input = process.argv?.[2] ?? "src/index.scss";  // 默认从 src/index.scss 编译
const output = basename(input).replace(extname(input), ".css");  // 输出为 .css 文件

console.log("Input file:", input);  // 打印输入文件路径
console.log("Output file:", output);  // 打印输出文件名

// 使用 node_modules 下的 sass 编译器
const command = join(process.cwd(), "node_modules", ".bin", "sass");
console.log("Sass command:", command);  // 打印 sass 命令

// 构建命令参数
const args = [
  input,  // 输入文件
  `${devVaultRoot}/.obsidian/snippets/${output}`,  // 输出到 .obsidian/snippets 文件夹
  "--watch",  // 持续监视文件
  "--no-source-map",  // 不生成源映射
  "--update"  // 更新已有文件
];

console.log("Sass command arguments:", args);  // 打印命令参数

// 启动子进程执行 sass 命令
const childProcess = spawn(command, args, { env: process.env });

childProcess.stdout.on("data", (data) => {
  console.log(data.toString());  // 输出 Sass 编译的标准输出
});

childProcess.stderr.on("data", (data) => {
  console.error(data.toString());  // 输出 Sass 编译的错误信息
});

childProcess.on("error", (error) => {
  console.error("Error:", error);  // 输出启动进程时的错误
});
