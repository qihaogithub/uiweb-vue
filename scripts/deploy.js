// 这是自动部署脚本，执行npm run deploy，可以自动构建并部署到服务器
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const deploy = async () => {
  try {
    // 构建项目
    console.log("开始构建...");
    await execAsync("npm run build");

    // rsync 同步到服务器
    console.log("开始部署...");
    await execAsync(
      "rsync -avz --chmod=u=rwx,g=rwx,o=rx dist/* qihao@188.8.12.201:/var/www/uipreview"
    );

    console.log("部署完成!");
  } catch (error) {
    console.error("部署失败:", error);
    process.exit(1);
  }
};

deploy();
