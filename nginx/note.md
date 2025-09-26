# Notes

## OSI 七层模型（从底到顶）

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

### 子域名 转发

```linux
# nginx.conf
http {
    server {
        listen 80;
        server_name nas.monster.com; # 只处理访问这个地址的请求

        location / {
            proxy_pass http://100.99.128.22:5000; # 传给目标主机
        }
    }
}
```

### 路径 转发🚀🚀🚀

```linux
http {
    server {
        listen 80;
        server_name monster.com;

        # =========== NAS ===========
        location /nas/ {
            proxy_pass http://100.99.128.22:5000/;
            
			proxy_set_header Host $host;               # 把用户请求的 Host 传递给后端
			proxy_set_header X-Real-IP $remote_addr;   # 客户端真实 IP
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; # 转发链路里的 IP
			proxy_set_header X-Forwarded-Proto $scheme; # http/https 协议
			proxy_request_buffering off;   # 上传文件时，不缓存到临时文件，直接转发
			proxy_buffering off;           # 下载时，直接转发，不做缓冲
        }

        location /nas/movie/ {
            proxy_pass http://100.99.128.22:32400/;   # Plex
        }

        location /nas/music/ {
            proxy_pass http://100.99.128.22:6600/;    # 音乐服务
        }

        # =========== 软路由 (lede) ===========
        location /lede/ {
            proxy_pass http://100.99.128.33:80/;      # 软路由管理界面
            
            proxy_set_header Host $host;
    		proxy_set_header X-Real-IP $remote_addr;
    		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    		proxy_set_header X-Forwarded-Proto $scheme;
        }

        location /lede/webdav/ {
            proxy_pass http://100.99.128.44:8080/;    # WebDAV 服务
        }

        location /lede/plex/ {
            proxy_pass http://100.99.128.22:32400/;   # Plex 也可以从这里走
        }

        location /lede/pve/ {
            proxy_pass http://100.99.128.55:8006/;    # Proxmox VE 管理界面
        }
    }
}

```

## 受信任证书申请 + 自动续签

acme.sh - 生成证书 + 自动续签 的工具

acme.sh 使用步骤:

```linux
# 安装 acme.sh
curl https://get.acme.sh | sh -s email=<my@example.com>

# 让当前这个 shell 立刻读取刚被安装脚本写入 
source ~/.bashrc 2>/dev/null || true

# 修改默认 CA
# acme.sh 脚本默认 CA 服务器是 ZeroSSL 只需要把 CA 服务器改成 Let's Encrypt 即可
acme.sh --set-default-ca --server letsencrypt

# 用 cloudflare 自动验证（DNS API）
# 给单域名使用
# export CF_Token="<Zone-ID>"
# export CF_Account_ID="<Acount-ID>"

# 签发通配符证书
./acme.sh --issue --dns dns_cf -d <example.com> -d '*.<example.com>'
```

## Nginx 备份与迁移

主要备份的配置文件:

```linux
# 主配置
/etc/nginx/nginx.conf
# 全局配置片段（可能有自定义）
/etc/nginx/conf.d/
# 各站点配置
/etc/nginx/site-available/
/etc/nginx/sites-enabled/
其他辅助配置
/etc/nginx/snippets/
/etc/nginx/proxy_params
```

```linux
# 打包 Nginx 配置
sudo tar -czvf nginx-config-backup.tar.gz /etc/nginx

# （可选）打包 Let’s Encrypt 证书
sudo tar -czvf letsencrypt-backup.tar.gz /etc/letsencrypt

# （可选）打包 acme.sh 数据
sudo tar -czvf acme-sh-backup.tar.gz ~/.acme.sh
```

把这些文件拷贝到新服务器，在 `/etc/` 下解压，跑一遍 `nginx -t` 测试，然后启动服务。

**普通个人用户：新服务器直接重装 acme.sh → 重新申请证书，更推荐。**

谨慎/企业用户：把 `~/.acme.sh` 也打包走，保证完全无损迁移。
