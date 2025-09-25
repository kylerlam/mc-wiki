# Notes

- OSI 七层模型（从底到顶）

1. 物理层
2. 数据链路层
3. 网络层
4. 传输层
5. 会话层
6. 表示层
7. 应用层

## 端口转发 - Port Forwarding

- 在第四层的 TCP 层

- 从 github 克隆下来的 nginx.conf 配置文件在修改完以后记得更新到 nginx安装目录的配置文件 "/etc/nginx/nginx.conf" 不然nginx 只会不断读取旧的.
- 如果目标机器设置了端口转发, nginx.conf 需要跟写到那个端口.
- 反向代理只用关注两个参数:

```linux
# nginx.conf

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
}

# 把所有访问 服务器公网IP:2000 的 TCP 流量，原封不动转发到 100.99.128.22:80
# stream 允许较大的数据传输
stream{
    server {
        listen       2000; # listen 服务器监听的端口
        proxy_pass 100.99.128.22:80; # proxy_pass 数据传递的目标机器 IP + 端口
    }
}
```

## 反向代理 - Reverse Proxy

- 在第七层的 HTTP 层
