在 Nginx 中，当你使用 Vue.js 或其他前端框架构建的单页应用（SPA）时，直接刷新页面可能会导致 404 错误。这是因为 SPA 通常使用客户端路由，而 Nginx 默认会尝试在服务器上查找对应的文件路径。

要解决这个问题，你需要在 Nginx 配置中添加一个重写规则，将所有请求重定向到`index.html`，除了静态资源请求。可以在你的 Nginx 配置文件中添加以下内容：

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

将这段代码添加到你的 Nginx 配置文件中适当的位置，例如在`server`块中。这样，当用户访问一个不存在的路径时，Nginx 会将请求重定向到`index.html`，从而由前端路由处理。

完整的配置示例如下：

```nginx
server {
    listen 80;
    server_name 188.8.12.201;
    index index.html index.htm default.htm default.html;
    root /www/wwwroot/uipreview;

    # 其他配置...

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 其他配置...
}
```

完成修改后，记得重启 Nginx 服务以应用更改：

```bash
sudo systemctl restart nginx
```

这样，刷新页面时就不会再出现 404 错误了。
