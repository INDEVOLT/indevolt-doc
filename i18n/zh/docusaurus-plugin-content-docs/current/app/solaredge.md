---
title: SolarEdge
description: 如何获取 SolarEdge Client ID 和 Client Secret
---

# 如何获取 SolarEdge Client ID 和 Client Secret

使用 SolarEdge 设备前，请先将 INDEVOLT App 更新至最新版本。

在 INDEVOLT App 中连接 SolarEdge 时，您需要先填写 **Client ID** 和 **Client Secret**。填写完成后，INDEVOLT App 会跳转至 SolarEdge 页面，登录您的 SolarEdge 账号并完成授权。

> **注意**
>
> SolarEdge 免费 API 计划每月提供 **2000 credits**，因此设备数据默认约每 **15 分钟**更新一次。

## 如何获取 SolarEdge Client ID 和 Client Secret？

### 第一步

进入 [SolarEdge Developer Console](https://developer.solaredge.com/)，使用您现有的 SolarEdge 账号登录。

### 第二步

在 Developer Console 中创建一个 **Site Access** 类型的应用。

<img src={require("./img/solaredge_step2.png").default} />

### 第三步

点击已创建的应用名称，进入应用的 **Settings** 设置页面。

<img src={require("./img/solaredge_step3.png").default} />

在 **Settings** 页面中，将以下两个地址设置为 INDEVOLT 的域名：

- **Allowed Redirect URL(s)**：`https://manosdatahubse.indevolt.com`
- **Allowed Returned URL(s) (Optional)**：`https://manosdatahubse.indevolt.com`

> **注意**
>
> 请确保上述地址填写正确，否则可能无法完成 SolarEdge 授权。

### 第四步

进入 **Credentials** 页面，查看您的 **Client ID** 和 **Client Secret**。

<img src={require("./img/solaredge_step4.png").default} />

如果无法找到 **Client Secret**，可以点击 **Regenerate Secret** 重新生成。

> **注意**
>
> 重新生成 Client Secret 后，请使用新的 Client Secret 完成后续授权。

