---
title: SolarEdge
description: 如何添加 SolarEdge V2 授权
---

# 如何添加 V2 授权？

:::note 开始之前
- 请将 INDEVOLT App 更新至 **V1.4.11** 或以上版本。
- SolarEdge 免费 API 套餐为每月 **2,000 次调用**，因此数据大约每 **15 分钟**更新一次，与 SolarEdge 官网一致。
- 根据 [SolarEdge 官方文档](https://api-docs.solaredge.com/)，**V1 接口将于 2026 年 11 月 1 日弃用**。如果您仍在使用 V1 API（apiKey + siteId），请在 **2026 年 11 月 1 日**之前完成本次 V2 授权。
:::

## 1. 创建开发者账户

前往 [developer.solaredge.com](https://developer.solaredge.com/)，使用您现有的 SolarEdge 账号登录。如果还没有 SolarEdge 账号，请先注册。登录后会提示您填写开发者资料：

| 字段 | 填写内容 |
|------|----------|
| 公司名称 | 您的姓名或项目名（仅英文字母和数字，不要特殊字符），例如 "Maya Smith" 或 "Solar Dashboard Project" |
| 行业类型 | 选 "Other / Hobbyist" 即可 |
| 预计月 API 调用量 | 选 "Low — personal project" 即可 |

:::info
您现在是新开发者账户的**管理员**，已自动开通**免费版**（每月 2,000 次调用，10 CPM，1 个应用）。您原有的 SolarEdge 账号不受影响。
:::

## 2. 创建应用以获取 CLIENT ID 和 CLIENT SECRET

| 设置项 | 值 |
|--------|-----|
| API Service | Monitoring API |
| Access Type | Site Access |
| Scopes | SITE_DATA 和 DEVICE_DATA |
| Allowed Redirect URL(s) | `https://manosdatahubse.indevolt.com` |
| Allowed Returned URL(s) | `https://manosdatahubse.indevolt.com` |

之后您会获得 **CLIENT ID** 和 **CLIENT SECRET**，请复制并妥善保存。

<img src={require("./img/solaredge_step2_new.png").default} style={{ maxWidth: "700px" }} />

## 3. 在 INDEVOLT App 中添加 V2 授权

在 INDEVOLT App 中依次点击：**首页 → 添加设备 → SolarEdge → 添加授权**，开始授权流程：

- 输入您应用的 **CLIENT ID** 和 **CLIENT SECRET**
- 点击 **Bind** 按钮，页面会跳转到 SolarEdge 登录页
- 输入您的 SolarEdge 邮箱和密码登录
- 登录后点击 **Approve** 按钮完成授权
- 如果看到包含 `{"result": true, "message":"OK"}` 的页面，说明授权成功！

<img src={require("./img/solaredge_step3_new.png").default} style={{ maxWidth: "700px" }} />

:::note
如果登录后没有看到带 **Approve** 按钮的页面，请返回 INDEVOLT App 再次点击 **Bind**，即可看到 Approve 按钮页面。
:::

如果最后一页出现错误，请在下表中查找对应错误码的解决方案：

| 错误码 | 常见原因 | 解决方案 |
|--------|----------|----------|
| **400** | 网络错误 | 请返回 App，从点击 **Bind** 开始重新授权。 |
| **403** | 缺少 DEVICE_DATA scope | 请删除当前的 SolarEdge 应用，重新创建一个包含 **DEVICE_DATA** scope 的应用，然后用新的 Client ID 和 Client Secret 重新在 App 中授权。 |
| **429** | 月度调用额度已用完 | 请确认没有其他服务在调用该 API，并于下月 1 日重新开始授权。 |

返回 INDEVOLT App，依次点击：**我的 → 能源接入**，即可看到 SolarEdge 已连接。

## 注意事项

- 如果您先在 INDEVOLT 完成了授权，之后又在 SolarEdge 后台重新生成了 **CLIENT SECRET**，INDEVOLT 上的授权会失效。请在 INDEVOLT 中**解除授权**，然后用最新的 Client Secret 重新授权。
- 受调用额度限制，数据仅在白天每 **15 分钟**更新一次。首次添加 SolarEdge 逆变器时，设备需要等待一段时间才会显示数据。
- 如果授权成功但设备数据不更新，最可能的原因是您没有添加 **DEVICE_DATA** scope。Scope 创建后无法修改——您需要删除 SolarEdge 应用并重新创建，然后在 App 中解除 SolarEdge 授权，用新的 Client ID 和 Client Secret 重新授权。
- **Allowed Redirect URL(s)** 和 **Allowed Returned URL(s)** 都必须设置为 `https://manosdatahubse.indevolt.com`，否则授权流程无法完成。
- 一个站点下有多台逆变器没有问题，我们可以全部连接。多个站点下有多台逆变器时，受 2,000 次调用限制，可能无法全部正常连接。建议将不同电站放在不同的 SolarEdge 监控账号下：在 INDEVOLT 中授权一个账号，另一个账号请联系平台团队处理授权。
