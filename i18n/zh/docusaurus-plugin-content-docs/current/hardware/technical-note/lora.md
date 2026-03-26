---
title: LoRa 接入说明
description: 微储设备接入 LoRa 终端设备的用户指南
---

# LoRa 接入说明

## 什么是LoRa

LoRa（Long Range，长距离）通讯是一种基于扩频技术的低功耗、广域网（LPWAN）无线通信技术，核心是扩频调制技术。它通过将信号“扩展”到一个更宽的频率带宽上进行传输，从而获得了极强的抗干扰能力和很高的接收灵敏度。

简单来说，LoRa 是一种让设备之间进行“远距离无线沟通”的技术。不同于我们常用的 Wi-Fi 或蓝牙，它不依赖家庭网络，也不需要复杂设置，就像设备之间自带了一条专门传递信息的无线通道。  

有了 LoRa，设备可以自动交换信息，例如电表会把家庭用电数据传给微储设备，微储设备再根据这些信息自动调整充放电状态。整个过程都是后台自动完成的，你几乎感觉不到它的存在。

**核心特点**

- 超远距离：在理想环境下（如郊区、空旷地区），通信距离可达10-20公里，甚至更远。
- 超低功耗：使用它的设备（如传感器）电池寿命可达数年甚至十年。
- 大容量：一个基站（网关）可以连接成千上万个终端节点。
- 低成本：模块和网络部署成本相对较低。


## LoRa 与 Wi-Fi 的区别

可以把 Wi-Fi 想象成家里的高速网络，用来上网、看视频，速度快但耗电多，而且一旦断网，很多设备可能就无法工作。  

LoRa 则专门传输小数据，比如用电量或设备状态。它传输速度不快，但可以传得更远，非常省电，也不依赖家里的网络，断网也不会影响设备的通信。

简单来说，Wi-Fi 负责上网，而 LoRa 负责让设备自己互相沟通，使系统更智能、更省心。


## 适用场景

- 网络环境较差或 Wi-Fi 信号覆盖不足的场所：如：地下室，阁楼等
- 存在强干扰的地方，如：机房、电站等


## 适用产品

本指南适用于以下设备：


| 设备 | 型号                                                     | 最低固件版本                              |
| ---- | ------------------------------------------------------------ | ----------------------------------------- |
| 微储 | SolidFlex 2000<br />PowerFlex 2000<br />SolidFlex 2000 Eco<br />PowerFlex 2000 Eco<br />PowerFlex 3000 Hybrid<br />PowerFlex 3000 AC<br />SolidFlex 3000 Hybrid<br />SolidFlex 3000 AC | **CMS**: V1406.07.002B <br/>**Pfile**: V0D.00.11 |
| 电表 |  MR3-D5-WR |  V1.4.09_R01C.0C2_M0515_00000013  |



:::note 即将支持的型号

以下型号预计将在对应时间版本中支持 LoRa 接入功能：

| 型号       | 预计支持时间 |
| ---------- | ------------ |
| MR1-D5-WR  | 2026/03/27   |
| MR3-D4-WRE | 2026/04/03   |
| P1-2WR     | 2026/03/27   |
| NIR-32-EU  | 2026/04/03   |

:::

## 操作步骤


### 连接LoRa终端设备

:::info 准备
请先确认以下条件已满足：
- 已在 Indevolt App 中添加微储设备，且设备已开机并在线  
- 支持LoRa 的终端设备已安装完成并通电  
:::

1. 打开 Indevolt App，在设备页面点击右上角“+”，选择需要添加的设备（以电表为例）。
   
   <img src={require("./img/click_add_device.png").default} width="200"/>
   <img src={require("./img/select_lora_device.png").default} width="200"/>

2. 扫描电表机身二维码，识别成功后点击**连接设备**。
   <img src={require("./img/scan_qr_code.png").default} width="200"/>
   <img src={require("./img/connect_device.png").default} width="200"/>

3. 选择接入方式为**LoRa 无线接入**，然后选择需要绑定的微储设备，点击**绑定**并等待连接完成。  

   <img src={require("./img/select_lora.png").default} width="210"/>
   <img src={require("./img/select_bind_device.png").default} width="200"/>
   <img src={require("./img/connecting_device.png").default} width="200"/>
   <img src={require("./img/connected_device.png").default} width="200"/>


4. 查看是否连接成功

   进入设备页面，点击电表，进入详情页后点击右上角设置<img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/>，选择**网络设置**，查看当前接入方式是否为 **LoRa 无线接入**。

   <img src={require("./img/tap_device.png").default} width="210"/>
   <img src={require("./img/device_setting.png").default} width="200"/>
   <img src={require("./img/network_setting.png").default} width="200"/>
   <img src={require("./img/network_info_lora.png").default} width="200"/>

   此外，在设备列表中，设备卡片右上角图标也会显示当前接入方式（Wi-Fi 或 LoRa）。
   <img src={require("./img/lora_icon.png").default} width="210"/>

---

### 切换接入方式（Wi-Fi/LoRa）

如需切换接入方式，可按以下步骤操作：

1. 在设备页面点击电表，进入后点击右上角设置<img src={require("./img/settings_icon.png").default} width="30" style={{verticalAlign: "middle"}}/>，选择**网络设置**，点击页面底部**切换接入方式**
    <img src={require("./img/tap_device.png").default} width="210"/>
    <img src={require("./img/device_setting.png").default} width="200"/>
    <img src={require("./img/network_setting.png").default} width="200"/>
    <img src={require("./img/switch_connection_method.png").default} width="200"/>

2. 点击**连接设备**，选择**Wi-Fi接入**。
   <img src={require("./img/connect_device.png").default} width="200"/>
   <img src={require("./img/select_wifi.png").default} width="210"/>

3. 选择需要连接的 Wi-Fi 网络，完成配置并等待连接成功。
   <img src={require("./img/configure_wifi.png").default} width="200"/>
   <img src={require("./img/connecting_wifi.png").default} width="200"/>
   <img src={require("./img/connected_wifi.png").default} width="200"/>

4. 返回设备详情页，在**网络设置**中查看当前接入方式是否已变为 Wi-Fi。 
   <img src={require("./img/network_info_wifi.png").default} width="200"/>
