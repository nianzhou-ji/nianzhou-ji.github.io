# 摘要

AR Creator学习分享资料整理



# 1.  学习分享目录 

## 1.1  HUD的产品介绍

主要介绍C-HUD，W-HUD，AR-HUD的对比，以及AR-HUD的先进性



 ![image-20240430165426612](https://raw.githubusercontent.com/nianzhou-ji/JpPics/main/assets/726f3f3f-06d2-11ef-9dd6-005056c00008.png)

​                               

20210421-头豹研究院-头豹研究院2021年中国抬头显示器行业概览（2021-04-21）

## 1.2  AR-HUD的工作原理

放一张流程图

![image-20240430165438355](https://raw.githubusercontent.com/nianzhou-ji/JpPics/main/assets/7409f5de-06d2-11ef-a258-005056c00008.png)

 

## 1.3  AR-Creator的算法开发包括的内容

放一张框图

![image-20240430165446290](https://raw.githubusercontent.com/nianzhou-ji/JpPics/main/assets/7581bf46-06d2-11ef-a5b3-005056c00008.png)

![image-20240430165454035](https://raw.githubusercontent.com/nianzhou-ji/JpPics/main/assets/772367be-06d2-11ef-a5cb-005056c00008.png)



 

 

智能座舱系列五AR-HUD.pdf

## 1.4  HUD开发环境、运行环境介绍

在下面有

## 1.5  技术栈梳理

C++、Qt、Linux、openGL，分别介绍学习的重点内容

### 1.5.1 C++

简要介绍：https://book.itheima.net/course/223/1275663370879508481/1275663596960882691

 

目录：

![image-20240430165526413](https://raw.githubusercontent.com/nianzhou-ji/JpPics/main/assets/78ed4aa6-06d2-11ef-b344-005056c00008.png)

   

### 1.5.2 Qt

### 1.5.3 OpenGl

### 1.5.4 Linux

## 1.6  学习项目展示

## 1.7  总结



**AR-Creator****开发学习**

# 2. 实现的功能

开发AR-HUD上运行的界面程序。主要功能是接受来自ADAS等的实信号，通过AR-Creator生成视频流，以HDMI或者LVDS协议传输的DLP，最终通过光机系统展示在界面上。

# 3. 开发环境

1. Ubuntu18.04
2. Qt5.14.2

# 4. 运行环境

1. Ubuntu18.04:linux发行版
2. OpenSUSE15.2：linux发行版
3. Raspberry4B：树莓派4代B型开发板
4. NXP I.MX8：恩智浦半导体开发板

# 5. 外部设备

1. EYEQ3：Mobileye向世界发布了公司第三代图像处理芯片——EyeQ3
2. DMS
3. Raspberry4B

 

# 6. 算力

CPU：7.2k DMIPS

GPU：112G FLOPS

Flash：30mb

评估平台：芯驰 X9H

# 7. 测试环境

通过虚拟CAN产生程序产生CAN报文，作为输入

# 8. 技术栈

1. unity
2. openGL

 

 



# 9. 术语

[1]  HDMI：**高清多媒体界面**（英语：**H**igh **D**efinition **M**ultimedia **I**nterface，缩写：**HDMI**）是一种全[数字](https://zh.wikipedia.org/wiki/數位)化[影像](https://zh.wikipedia.org/wiki/影像)和[声音](https://zh.wikipedia.org/wiki/聲音)发送接口，可以发送未[压缩](https://zh.wikipedia.org/wiki/數位壓縮)的[音频](https://zh.wikipedia.org/wiki/音频)及[视频](https://zh.wikipedia.org/wiki/視頻)信号。HDMI可用于[机顶盒](https://zh.wikipedia.org/wiki/機上盒)、[DVD播放机](https://zh.wikipedia.org/wiki/DVD播放機)、[个人电脑](https://zh.wikipedia.org/wiki/個人電腦)、[电视游乐器](https://zh.wikipedia.org/wiki/電視遊樂器)、综合扩大机、数字音响与[电视机](https://zh.wikipedia.org/wiki/電視機)等设备。HDMI可以同时发送音频和视频信号，由于音频和视频信号采用同一条线材，大大简化系统线路的安装难度。

[2]  **LVDS****：低电压差分信号**（Low-Voltage Differential Signaling，**LVDS**）是一种电子信号系统，可满足现今对**高性能资料传输应用的需求**，同时系统供电**电压减低到****2**[**伏特**](https://zh.wikipedia.org/wiki/伏特)，适用于分辨率高于[SVGA](https://zh.wikipedia.org/wiki/SVGA)的[TFT](https://zh.wikipedia.org/wiki/TFT) [LCD](https://zh.wikipedia.org/wiki/LCD)显示设备，目前已得到了广泛的应用，甚至可以嵌入到[FPGA](https://zh.wikipedia.org/wiki/FPGA)、[ASIC](https://zh.wikipedia.org/wiki/ASIC)或其他组件身上。

[3] **CAN****：控制器局域网** (**Controller Area Network**，简称**CAN**或者**CAN bus**) 是一种功能丰富的[车用总线](https://zh.wikipedia.org/w/index.php?title=车用总线&action=edit&redlink=1)标准。被设计用于在不需要[主机](https://zh.wikipedia.org/wiki/网络主机)（Host）的情况下，允许网络上的[单片机](https://zh.wikipedia.org/wiki/单片机)和仪器相互通信。 它基于[消息传递协议](https://zh.wikipedia.org/wiki/訊息傳遞_(軟體))，设计之初在车辆上采用[复用通信](https://zh.wikipedia.org/wiki/多路复用)线缆，以降低铜线使用量，后来也被其他行业所使用。

[4] DLP：是“Digital Light Procession”的缩写，即为**数字光处理**，也就是说这种技术要先把影像信号经过数字处理，然后再把光投影出来。它是基于TI（美国德州仪器）公司开发的数字微镜元件——DMD（Digital Micromirror Device）来完成可视数字信息显示的技术。说得具体点，就是DLP投影技术应用了数字微镜晶片（DMD）来作为主要关键处理元件以实现数字光学处理过程。

[5] *DMS* *：**DMS*（Driver Monitor System）为驾驶员监测系统的简称，是指驾驶员行驶过程中，全天候监测驾驶员的疲劳状态、危险驾驶行为的信息技术系统

[6] DMIPS ：DMIPS(Dhrystone Million Instructions executed Per Second)，Dhrystone是测量处理器运算能力的最常见基准程序之一，常用于处理器的整型运算性能的测量。

[7] FLOPS：是“每秒所执行的浮点运算次数”（floating-point operations per second）的缩写。 它常被用来估算电脑的执行效能，尤其是在使用到大量浮点运算的科学计算领域中。

[8] 芯驰：*芯驰*科技是一家提供高性能域控级别大型车规处理器的本土芯片企业，业务领域覆盖智能座舱、中央网关、自动驾驶。

 