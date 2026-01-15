---
title: 添加设备
description: 将设备添加至家庭，轻松实现集中管理和数据监控。
---

# 添加设备

首次登录时，App将自动创建默认家庭“我的家庭”，用于集中管理其名下的设备。

INDEVOLT App 目前已支持的品牌：
- INDEVOLT
- SOLARMAN
- Deye
- EverHome
- Shelly

不同品牌或型号的设备，其添加与配置方式可能不同，建议您在实际操作中以实际界面和指引为准。

## 步骤一、点击添加设备

点击**添加设备**按钮，或点击右上角 **+** > **添加设备**。

<img src={require("./img/add_device.png").default} width="240"/>

## 步骤二、选择设备

:::tip 准备

1. 打开手机蓝牙以连接设备。若未开启，App在连接过程中会给出提示。
2. 从设备本体上找到二维码及序列号（SN）。

:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="scan" label="方法一、扫码添加" default>
  
  1. 点击App右上角的 <img src={require("./img/scan_icon.png").default} width="30" style={{verticalAlign: "middle"}}/> 图标。
  2. 扫描设备上的二维码，或手动输入SN号。

      <img src={require("./img/discover_devices.png").default} width="240"/>
      <img src={require("./img/scan_qr_code.png").default} width="240"/>
      <img src={require("./img/connecting_device.png").default} width="240"/>

  </TabItem>

  <TabItem value="bluetooth" label="方法二、蓝牙搜索">

  :::info
  当前蓝牙发现功能适用于SOLARMAN、INDEVOLT设备。点击App内的**查看支持蓝牙发现的设备列表**可获取详情。
  :::

   App将自动扫描并列出周边可用的蓝牙设备，根据产品名称与序列号选择您的目标设备进行连接。

      <img src={require("./img/discover_devices.png").default} width="240"/>
      <img src={require("./img/connecting_device.png").default} width="240"/>

  </TabItem>
  <TabItem value="manual" label="方法三、手动添加">

  1. 选择设备品牌。
  2. 选择该品牌下的具体设备型号。
  3. 扫描设备上的二维码，或手动输入SN号。
     
      <img src={require("./img/discover_devices.png").default} width="240"/>
      <img src={require("./img/select_device.png").default} width="240"/>
      <img src={require("./img/scan_qr_code.png").default} width="240"/>
      <img src={require("./img/connecting_device.png").default} width="240"/>


  </TabItem>
</Tabs>



## 步骤三、配置网络

1. 请确保手机已经连接家中的Wi-Fi网络，与页面上显示的网络一致。输入该网络的连接**密码**。
2. 如果手机已连接Wi-Fi，但系统搜索不到，可以手动输入SSID和密码。
3. 完成输入并确认信息无误后，点击**确认**按钮。
   <img src={require("./img/select_wifi.png").default} width="240"/>

4. 添加成功。
   <img src={require("./img/connect_bluetooth.png").default} width="240"/>
   <img src={require("./img/configure_network.png").default} width="240"/>
   <img src={require("./img/wifi_connected.png").default} width="240"/>

5. （可选）您可为该设备添加关联设备，流程与之前一致。如需稍后设置，可点击左上角 **\<** 返回按钮退出。
   <img src={require("./img/link_device.png").default} width="240"/>

:::info

1. 配网过程中，请使用2.4G网络进行配置，暂不支持5G网络。
2. 设备添加后需等待几分钟才会在App正常显示数据。

:::


:::tip

若页面提示配置失败时，请根据以下可能的原因进行检查并重试：
1. 确保您的手机WLAN和蓝牙为打开状态；
2. 确认家中Wi-Fi网络能够正常上网；
3. 确保无线路由器没有开启黑白名单；
4. 尝试缩短手机与设备的距离；
5. 尝试连接其他Wi-Fi网络重新配网；
6. 尝试去除Wi-Fi网络名称中的（，；‘’=“”`）等特殊字符。

:::

## 下一步

完成设备添加后，您可以

- 在[家庭](./home.md)和[统计](./report.md)标签页可查看设备数据。
- 在[设备](./device.md)标签页管理设备。
- 在[智能](./smart.md)标签页设置智能充放电计划。
