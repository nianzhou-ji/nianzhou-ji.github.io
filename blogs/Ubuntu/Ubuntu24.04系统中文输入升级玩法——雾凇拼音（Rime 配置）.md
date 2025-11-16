# 配置文件的方案

```
├── default.yaml   # 一些全局设置

├── rime_ice.schema.yaml  # 全拼方案
├── double_pinyin*.yaml   # 双拼方案
├── rime_ice.dict.yaml    # 挂载词库
├── cn_dicts/             # 词库目录

├── melt_eng.schema.yaml  # 英文方案，作为次翻译器挂载到拼音方案
├── melt_eng.dict.yaml    # 挂载词库
├── en_dicts/             # 词库目录

├── radical_pinyin.schema.yaml  # 部件拆字方案，作为反查挂载到拼音方案
├── radical_pinyin.dict.yaml    # 部件拆字词库

├── custom_phrase.txt    # 自定义短语
├── symbols_v.yaml       # 全拼 v 模式
├── symbols_caps_v.yaml  # 双拼 V 模式
├── opencc/              # 词语映射，Emoji
├── rime.lua             # 引入 Lua 脚本
├── lua/                 # 各个 Lua 脚本

├── squirrel.yaml  # 鼠须管的前端配置文件
└── weasel.yaml    # 小狼毫的前端配置文件
```

# 雾凇拼音的安装

1）雾凇拼音安装的前提当然是先安装rime，建议采用ibus

```
sudo apt install ibus ibus-rime
```

2）安装Plum管理器
首先安装Plum配置文件管理器东风破Plum
新建一个目录，在该目录下执行命令：

```
curl -fsSL https://raw.githubusercontent.com/rime/plum/master/rime-install | bash
```

该命令会在当前目录下clone plum的项目，并执行其中的初始化命令。按提示补缺未安装的curl或git工具。

3）在上面的Plum项目目录下使用rime-install安装雾凇拼音配置文件：

```
bash rime-install iDvel/rime-ice:others/recipes/full
```

对ibus进行重启：

```
ibus restart
```

如果不成功可尝试注销系统或重启系统，正常可以看到rime图标变成了雾的图标。
如果是全新系统安装，在系统设置 -> 键盘 -> 输入源 -> 添加 -> 汉语 -> 选择中文（rime），同时将输入法选中为中文(rime)或者删除其他键盘输入源。

# 雾凇拼音的使用

1）拼音输入字符功能回归
这个功能很实用，比如输入wujiaoxing，会出来⭐的符号，输入dayu可以出现>或≥好，一些emoji图标也隐藏在输入法中，效率提供很多，不需要默认的rime输入法那样去记特殊符号输入方式了。
