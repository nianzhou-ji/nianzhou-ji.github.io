要在 Ubuntu 系统中为 Docker 配置全局代理（使用本地回环地址 `127.0.0.1` 和端口 `7890`），你可以按照以下步骤进行操作。这将使 Docker 引擎和 Docker 客户端的所有请求都通过该代理。

### 1. 为 Docker 服务配置全局代理

#### 1.1 创建 Docker 服务目录文件

首先，你需要为 Docker 创建一个专用的 systemd 服务目录文件。

```bash
sudo mkdir -p /etc/systemd/system/docker.service.d
```

#### 1.2 创建或编辑 `http-proxy.conf` 文件

然后，创建或编辑该目录下的 `http-proxy.conf` 文件：

```bash
sudo nano /etc/systemd/system/docker.service.d/http-proxy.conf
```

#### 1.3 添加代理配置

在文件中添加以下内容：

```ini
[Service]
Environment="HTTP_PROXY=http://127.0.0.1:7890"
Environment="HTTPS_PROXY=http://127.0.0.1:7890"
Environment="NO_PROXY=localhost,127.0.0.1"
```

这里：
- `HTTP_PROXY` 和 `HTTPS_PROXY` 设置为你的本地代理地址 `127.0.0.1:7890`。
- `NO_PROXY` 设置为 `localhost,127.0.0.1`，表示这些地址不通过代理。

#### 1.4 重新加载 systemd 并重启 Docker

完成配置后，执行以下命令重新加载 systemd 并重启 Docker 服务：

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```

#### 1.5 验证配置

可以使用以下命令来验证 Docker 是否正确配置了代理：

```bash
sudo systemctl show --property=Environment docker
```

如果配置正确，你应该能看到配置的环境变量。

