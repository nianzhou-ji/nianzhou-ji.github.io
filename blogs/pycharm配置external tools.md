# 摘要

在Pycharm中配置PyQt5的designer、ui2py、rcc2py工具

# 配置designer

![image-20240430165659122](https://raw.githubusercontent.com/nianzhou-ji/JpPics/main/assets/7aa1527b-06d2-11ef-93be-005056c00008.png)





```bash
D:\Qt5.14.2\5.14.2\mingw73_64\bin\designer.exe

$ProjectFileDir$
```



# 配置UI转换

![image-20240430165707784](https://raw.githubusercontent.com/nianzhou-ji/JpPics/main/assets/7d05a7fe-06d2-11ef-8729-005056c00008.png)

```bash
D:\Python38\Scripts\pyuic5.exe

$FileName$ -o $FileNameWithoutExtension$.py

$FileDir$
```







# 配置资源转换

![image-20240430165718361](https://raw.githubusercontent.com/nianzhou-ji/JpPics/main/assets/7e70a3cd-06d2-11ef-8ce7-005056c00008.png)

```bash
D:\Python38\Scripts\pyrcc5.exe

$FileName$ -o $FileNameWithoutExtension$_rc.py

$FileDir$
```

