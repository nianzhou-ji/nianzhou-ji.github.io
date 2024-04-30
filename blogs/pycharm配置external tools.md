# 配置designer

![image-20240430165659122](https://raw.githubusercontent.com/nianzhou-ji/JpPics/main/assets/c66a8a6d-06d0-11ef-b1bf-005056c00008.png)





```bash
D:\Qt5.14.2\5.14.2\mingw73_64\bin\designer.exe

$ProjectFileDir$
```



# 配置UI转换

![image-20240430165707784](https://raw.githubusercontent.com/nianzhou-ji/JpPics/main/assets/c7c9ecb1-06d0-11ef-ad4f-005056c00008.png)

```bash
D:\Python38\Scripts\pyuic5.exe

$FileName$ -o $FileNameWithoutExtension$.py

$FileDir$
```







# 配置资源转换

![image-20240430165718361](https://raw.githubusercontent.com/nianzhou-ji/JpPics/main/assets/c9317434-06d0-11ef-9035-005056c00008.png)

```bash
D:\Python38\Scripts\pyrcc5.exe

$FileName$ -o $FileNameWithoutExtension$_rc.py

$FileDir$
```

