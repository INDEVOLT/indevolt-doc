---
title: Home Assistant 集成
description: 将 INDEVOLT 储能系统接入 Home Assistant，实现本地监控与自动化控制。
slug: /home-assistant
---

# Home Assistant 集成

## 前提条件 {#prerequisite}

✅已按照[官方安装指南](https://www.home-assistant.io/installation/)安装Home Assistant。  

✅设备与Home Assistant服务器在**同一局域网**。

✅Indevolt设备已开机并**获取IP地址**。以下三种方法任选其一查看设备IP：
    - 🧩方法 1：路由器管理后台查询；
    - 🧩方法 2：App设备设置界面查看；
      <img src={require("./img/select-network.png").default} width="240"/>
      <img src={require("./img/view-ip.png").default} width="240"/>
    
    - 🧩方法 3: UDP广播获取IP
        (1) 确保设备接入的WiFi网络与电脑处于同一局域网。  
        (2) 打开网络调试工具。  
        (3) 选择 **UDP** 协议。  
        (4) 选择 Local Host Addr。  
        (5) 设置Local Host Port为**10000**。  
        (6) 单击 **Open**。  
          <img src={require("./img/udp-settings.png").default} width="120"/>
        (7) 在Remote设置广播地址及端口：**255.255.255.255:8099**。  
          <img src={require("./img/set-udp-remote.png").default} width="480"/>
        (8) 在消息框里填写AT指令：**AT+IGDEVICEIP**。  
        (9) 单击 **Send**。  
          <img src={require("./img/send-at-command.png").default} width="360"/>
        (10) 同一局域网内的INDEVOLT设备会回复其IP地址和SN号。
          <img src={require("./img/udp-message.png").default} width="360"/>

✅确保Indevolt设备**API功能已开启**。

    OpenData提供以下三种方式，此集成只支持HTTP不加密方式。
    - HTTP
    - HTTP+ Digest 认证
    - HTTPS（目前不支持，敬请期待）

  您可在INDEVOLT App设置本地API:
  <img src={require("./img/profile_page.png").default} width="200"/>
  <img src={require("./img/scan_qr_code.png").default} width="200"/>
  <img src={require("./img/connect_device.png").default} width="200"/>
  <img src={require("./img/device_connected.png").default} width="200"/>
  <img src={require("./img/select-local-api.png").default} width="200"/>
  <img src={require("./img/local-api.png").default} width="200"/>
   

✅确保设备固件版本版本不低于以下表格所列版本。

    | 型号                       | 适用固件版本    |
    | --------------------------- | ------------------------------- |
    | BK1600/BK1600Ultra          | V1.3.0A_R006.072_M4848_00000039 |
    | SolidFlex2000/PowerFlex2000 | V1.3.09_R00D.012_M4801_00000015 |


## 步骤一、下载Indevolt集成文件 {#step1}

1. 访问 [GitHub 仓库](https://github.com/INDEVOLT/homeassistant-indevolt).
2. 2.点击 **Code** > **Download ZIP**。  
    <img src={require("./img/download-zip.png").default} width="240"/>

3. 解压 ZIP 文件到本地。

## 步骤二、确定配置目录路径 {#step2}

- Home Assistant OS：配置目录位于`/config`。
- Home Assistant Container：可通过定位`configuration.yaml`文件来访问配置目录。

:::tip

目录中应包含 `configuration.yaml` 文件。

```
configuration directory/
└── configuration.yaml
```
:::


## 步骤三、创建自定义集成目录 {#step3}

1. 进入 `config directory`。
2. 创建 `custom_components`目录（如果不存在）。

```
config directory/
├── custom_components/
└── configuration.yaml
```

:::info
所有自定义集成必须放在 `custom_components` 下，否则HA无法识别。
:::

## 步骤四、添加集成文件 {#step4}

将解压后的 indevolt 文件夹完整复制到 `custom_components` 目录下。

```
config directory/
└── custom_components/
    ├── indevolt/
       ├── __init__.py
       ├── manifest.json
       ├── ...
```

## 步骤五、重启Home Assistant {#step5}

1. 在 Web 界面选择 **Settings** > **System**。
   <img src={require("./img/select-ha-settings.png").default} width="720"/>

2. 点击右上角重启图标。
    <img src={require("./img/click-restart-icon.png").default} width="480"/>

3. 点击 **Restart Home Assistant**。
    <img src={require("./img/restart-ha.png").default} width="360"/>
   
4. 点击 **RESTART**。
    <img src={require("./img/click-restart.png").default} width="360"/>
   

## 步骤六、添加集成到Home Assistant {#step6}

1. 重启后进入 Web 界面，选择 **Settings** > **Devices & services**。
   <img src={require("./img/select-device-service.png").default} width="720"/>

2. 点击右下角 **+ADD INTEGRATION**。
   <img src={require("./img/add-integration.png").default} width="180"/>

3. 搜索集成 **indevolt**。
   <img src={require("./img/search-integration.png").default} width="360"/>

4. 配置参数：
   - **host**：设备IP地址，可通过查看路由器/App获取。
   - **port**：默认8080。​
   - **scan_interval**：用于控制数据更新频率，默认30s。
   - **device_model**：设备型号。

    <img src={require("./img/set-integration.png").default} width="300"/>

5. 点击 **SUBMIT** 完成安装。


## 查看集成​ {#view-integration}

选择INDEVOLT集成，安装成功即可看到设备和实体信息。
  <img src={require("./img/view-integration.png").default} width="360"/>

  <img src={require("./img/view-device.png").default} width="720"/>


## 更新集成​ {#update-integration}
1. 下载新版集成文件。
2. 覆盖 `custom_components/indevolt` 中的文件。
3. 重启 Home Assistant。
4. 集成将自动更新，无需重新配置。


## FAQ

| 问题现象             | ​	解决方案                                                                 |
| -------------------- | -------------------------------------------------------------------------- |
| 集成未出现在搜索列表 | 检查文件夹路径：`custom_components`/`indevolt`                             |
| 无法连接设备         | 1. 确认IP正确。<br />2. 检查设备网络状态。                                 |
| 实体无数据           | ​​1. 检查设备电源。<br />2. 检查设备网络状态。<br />3. 查看日志错误信息。 |

