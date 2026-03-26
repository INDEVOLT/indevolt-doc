---
title: Home Assistant 集成
description: 将 INDEVOLT 储能系统接入 Home Assistant，实现本地监控与自动化控制。
toc_max_heading_level: 2
---

# Home Assistant 集成

## 前提条件 {#prerequisite}

### 1️⃣ Home Assistant 环境

已按照 [官方安装指南](https://www.home-assistant.io/installation/) 完成 Home Assistant 的安装。


### 2️⃣ 同一局域网环境

设备与 Home Assistant 服务器处于同一局域网内。


### 3️⃣ 获取设备 IP 地址

确保 Indevolt 设备已开机并成功获取 IP 地址。可通过以下任一方式获取设备 IP：

**🧩 方法 1 – 通过路由器查询**

登录路由器后台，在已连接设备列表中查找设备 IP 地址。


**🧩 方法 2 – 在 INDEVOLT App 中查看**

在 App 设备设置中查看：

<img src={require("./img/select-network.png").default} width="240"/>
<img src={require("./img/view_ip.png").default} width="240"/>


**🧩 方法 3 – 通过 UDP 广播获取（高级方式）**

1. 确保设备所连接的 WiFi 网络与电脑处于同一局域网。  
2. 打开网络调试工具。  
3. 选择 **UDP** 协议。  
4. 选择 Local Host Addr。  
5. 将 Local Host Port 设置为 **10000**。  
6. 点击 **Open**。  

<img src={require("./img/udp-settings.png").default} width="120"/>

7. 在 Remote 中配置广播地址和端口：**255.255.255.255:8099**  

<img src={require("./img/set-udp-remote.png").default} width="480"/>

8. 在消息输入框中输入 AT 指令：**AT+IGDEVICEIP**  
9. 点击 **Send**。  

<img src={require("./img/send-at-command.png").default} width="360"/>

10. 同一网络中的 INDEVOLT 设备将返回其 IP 地址及序列号（SN）。

<img src={require("./img/udp-message.png").default} width="360"/>


### 4️⃣ 启用本地 API

确保 Indevolt 设备已启用本地 API。

OpenData 提供三种模式，但当前集成仅支持 **HTTP** 模式：

- HTTP
- HTTP Digest
- HTTPS（暂不支持，敬请期待）

您可在 INDEVOLT App 中配置本地 API：

<img src={require("./img/profile_page.png").default} width="200"/>
<img src={require("./img/scan_qr_code.png").default} width="200"/>
<img src={require("./img/connect_device.png").default} width="200"/>
<img src={require("./img/device_connected.png").default} width="200"/>
<img src={require("./img/select_local_api.png").default} width="200"/>
<img src={require("./img/local_api.png").default} width="200"/>


### 5️⃣ 固件版本要求

请确保设备固件版本满足或高于下表所列的最低版本要求。

| 型号 | 最低适用固件版本 |
| ---- | ---------------- |
| BK1600/BK1600Ultra          | V1.3.0A_R006.072_M4848_00000039     |
| SolidFlex2000/PowerFlex2000 | CMS：V1406.07.002E   



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
   - **scan_interval**：用于控制数据更新频率，默认30s。

    <img src={require("./img/set-integration.png").default} width="300"/>

5. 点击 **Submit** 完成安装。  

6. 安装完成后，将显示电源模块和电池包信息。点击 **Skip and Finish** 完成设置流程。  

   - 每个电源模块最多支持连接 5 个电池包。  
   - 若未连接电池包，对应字段将显示为 None。  
   - 当连接电池包后，将显示每个电池包的序列号（SN）以便识别。  

   <img src={require("./img/finish.png").default} width="360"/>

## 查看集成​ {#view-integration}

选择INDEVOLT集成，安装成功即可看到设备和实体信息。
  <img src={require("./img/view-integration.png").default} width="360"/>
  <img src={require("./img/view-device.png").default} width="720"/>


## 更新集成

1. 下载最新版本的集成安装包。  
2. 覆盖 `custom_components`/`indevolt` 目录下的文件。  
3. 点击之前已添加设备右侧的三点菜单，选择 **Delete** 删除设备。  

   <img src={require("./img/delete-device.png").default} width="720"/>

4. 重启 Home Assistant。  
5. 点击 **Add Entry** 按钮，并按照相同的设备添加流程重新添加设备。


## 创建自动化：设置实时控制

1. 进入 **Settings** > **Automations & Scenes**。  

   <img src={require("./img/automation.png").default} width="720"/>

2. 点击右下角按钮 **+ Create Automation**。  

   <img src={require("./img/create-automation1.png").default} width="720"/>

3. 选择 **Create New Automation**。  

   <img src={require("./img/create-automation2.png").default} width="360"/>

4. 点击 **+ Add Trigger**，根据需求配置触发条件。  

   <img src={require("./img/new-automation.png").default} width="540"/>

5. 点击 **+ Add Action** 配置设备执行动作。  

6. 搜索 “mode”，选择 **Set SolidFlex2000/PowerFlex2000 Work Mode**（示例）。  

   <img src={require("./img/search-mode.png").default} width="360"/>

7. 在 **Target** 部分，点击 **+ Choose Device**，并从列表中选择你的设备。  

   <img src={require("./img/choose-target1.png").default} width="720"/>
   <img src={require("./img/choose-target2.png").default} width="360"/>

8. 在 **Work Mode** 部分，选择 **Real-Time Control**，然后根据需要配置 **Status**、**Power** 和 **Target SOC**。  

   <img src={require("./img/set-mode1.png").default} width="360"/>
   <img src={require("./img/set-mode2.png").default} width="360"/>

9. 点击 **Save** 完成自动化设置。


## FAQ

| 问题现象             | ​	解决方案                                                                 |
| -------------------- | -------------------------------------------------------------------------- |
| 集成未出现在搜索列表 | 检查文件夹路径：`custom_components`/`indevolt`                             |
| 无法连接设备         | 1. 确认IP正确。<br />2. 检查设备网络状态。                                 |
| 实体无数据           | ​​1. 检查设备电源。<br />2. 检查设备网络状态。<br />3. 查看日志错误信息。 |

