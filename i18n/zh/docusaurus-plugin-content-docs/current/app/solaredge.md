---
title: SolarEdge
description: 如何获取 SolarEdge API Key 和 Site ID
---

# 如何获取 SolarEdge API Key 和 Site ID

获取 SolarEdge API Key 和 Site ID 有三种方式：

- **方式一**：登录您的 [SolarEdge 监控平台账号](https://monitoring.solaredge.com/) 自行获取。
- **方式二**：通过邮件联系安装商，请其为您开通管理员权限，或直接向您提供 API Key 和 Site ID。
- **方式三**：通过 [SolarEdge 在线客服](https://www.solaredge.com/us/support) 申请相关信息。

---

## 方式一：自行获取

### 第一步

登录您的 [SolarEdge 监控平台账号](https://monitoring.solaredge.com/)。

### 第二步

如果您的账号拥有 **Admin** 权限，顶部菜单中会显示 **Admin** 入口。点击进入 **Admin** 管理页面。

<img src={require("./img/solaredge_step2.png").default} />

<details open>
  <summary>**问题**：未看到“Admin”菜单项？请参考方式二。</summary>

  **解决方案**：
  - （推荐）通过邮件向安装商申请管理员权限；
  - 请安装商为您获取并发送 **API Key**，必要时可将本页面链接发送给对方参考。

</details>

### 第三步

进入 **Admin** 页面后，依次点击 **Site Access** → **Access Control**，参考下图操作。

<img src={require("./img/solaredge_step3.png").default} />

### 第四步

- 滚动至 “API Access” 区域；
- 勾选 **“I have read, understood…”**；
- 点击 **Save** 保存；
- 在弹出的窗口中点击 **Ok**；
- 双击长串密钥以复制完整的 **API Key**；
- 同时复制 **Site ID**。

### 第五步

完成以上步骤后，将 **API Key** 和 **Site ID** 填入 INDEVOLT App 对应位置即可。

:::note
1. 点击 “New key” 可能会导致当前可用的 API 连接失效，如遇此情况需重新提交新的 API Key。
2. 为避免触发 API 调用限制，请勿在多个应用中同时使用同一个 API。
3. 填写完成后，在设备在线状态下，可能需要等待 5–10 分钟，才能在 SolarEdge 设备列表中看到设备序列号。
:::
