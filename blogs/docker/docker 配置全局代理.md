# 创建 Docker 服务配置目录

```
sudo mkdir -p /etc/systemd/system/docker.service.d
```

# 创建代理配置文件

```
sudo tee /etc/systemd/system/docker.service.d/http-proxy.conf <<-'EOF'
[Service]
Environment="HTTP_PROXY=http://127.0.0.1:7890"
Environment="HTTPS_PROXY=http://127.0.0.1:7890"
Environment="NO_PROXY=localhost,127.0.0.1,*.local"
EOF
```

# 重新加载配置并重启 Docker

```
sudo systemctl daemon-reload
sudo systemctl restart docker
```

# 验证配置

```
sudo systemctl show --property=Environment docker
```
