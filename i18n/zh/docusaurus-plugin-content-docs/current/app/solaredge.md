---
title: SolarEdge
description: 如何添加 SolarEdge V2 授权
---

# 如何添加 V2 授权

:::note 开始前
- 请先将您的 INDEVOLT App 更新至 **V1.4.11** 或更高版本。
- SolarEdge 免费 API 计划每月提供 **2000 credits**，因此数据约每 **15 分钟**更新一次。
- 根据 [SolarEdge 官方文档](https://api-docs.solaredge.com/)，**V1 将于 2026 年 11 月 1 日停止使用**。如果您仍在使用 V1 API（apiKey + siteId），请在 **2026 年 11 月 1 日**之前完成此 V2 授权。
:::

## 1. 创建开发者账号

进入 [developer.solaredge.com](https://developer.solaredge.com/)，使用您的 SolarEdge 账号登录。如果还没有 SolarEdge 账号，请注册一个新账号。无论哪种方式，系统都会提示您填写开发者账号资料：

| 字段 | 填写内容 |
|-------|---------------|
| Company Name | 您的姓名或项目名称（仅限英文字母和数字，不带重音符号），例如 "Maya Smith" 或 "Solar Dashboard Project" |
| Industry type | 选择 "Other / Hobbyist" 即可 |
| Expected monthly API usage | 选择 "Low — personal project" 即可 |

:::info
现在您是全新开发者账号的**账号管理员**，已自动开通**免费套餐**（每月 2000 credits、10 CPM、1 个应用）。您的个人账号不受影响，仍可正常使用。
:::

## 2. 创建 Site Access 应用

在控制台中点击 **Create Application**，然后依次完成以下三步：

1. **名称与服务** — 为应用命名，例如 "My Home Dashboard"。描述："Personal solar data integration"。服务：**Monitoring API**。
2. **访问类型** — 选择 **Site Access**（如果没有安装商档案，则无法选择 Fleet Access）。
3. **OAuth 配置** — 填写以下字段，系统将生成您的 **Client ID** 和 **Client Secret**。

| 设置项 | 填写值 |
|---------|-------|
| Origin URL | *留空* |
| Redirect URI | `https://manosdatahubse.indevolt.com` |
| Returned URL | `https://manosdatahubse.indevolt.com` |
| Scopes | **SITE_DATA** + **DEVICE_DATA** |

:::caution 现在保存您的 Secret
请立即复制 **Client Secret** —— 它**只会显示一次**。请将其保存到 `.env` 文件或密钥管理器中。
:::

## 3. 再次确认您的应用配置

**请确认应用类型为 "SITE ACCESS"：**

<img src={require("./img/solaredge_step2.png").default} style={{ maxWidth: "700px" }} />

**点击应用名称，打开 Settings 设置页面：**

<img src={require("./img/solaredge_step3.png").default} style={{ maxWidth: "400px" }} />

请确认 **Allowed Redirect URL(s)** 和 **Allowed Returned URL(s) (Optional)** 使用我们的域名：`https://manosdatahubse.indevolt.com`。

**点击 Credentials**，查看您的 Client ID 和 Client Secret：

<img src={require("./img/solaredge_step4.png").default} style={{ maxWidth: "700px" }} />

:::tip
找不到 Client Secret？点击 **Regenerate Secret** 即可重新生成。
:::

## 4. 在 INDEVOLT App 中添加 V2 授权

在 INDEVOLT App 中，依次点击 **Home → Add device → SolarEdge → Add Access**，开始授权。

**1. 输入您的 Client ID 和 Client Secret：**

<img src={require("./img/solaredge_auth_bind.jpeg").default} style={{ maxWidth: "240px" }} />

**2. 点击 Bind** —— 您将被跳转至 SolarEdge 登录页面：

<img src={require("./img/solaredge_auth_login.jpeg").default} style={{ maxWidth: "240px" }} />

**3. 使用您的 SolarEdge 邮箱和密码登录。**

**4. 点击 Approve** 完成授权：

<img src={require("./img/solaredge_auth_approve.jpeg").default} style={{ maxWidth: "240px" }} />

:::tip
如果您看不到带有 **Approve** 按钮的页面，请返回 INDEVOLT App 并再次点击 **Bind**，系统将重新跳转到此页面。
:::

**5. 确认** —— 您应看到包含 `{"result": true, "message":"OK"}` 的页面：

<img src={require("./img/solaredge_auth_success.jpeg").default} style={{ maxWidth: "240px" }} />

:::tip 完成！
返回 INDEVOLT App，依次进入 **My Profile → Energy Integrations**，即可看到 SolarEdge 已成功连接。
:::

## 注意事项

- 如果您先在 INDEVOLT 上完成了授权，之后又在 SolarEdge 平台重新生成了 **CLIENT SECRET**，则 INDEVOLT 上的授权将失效。您需要在 INDEVOLT 上 **Deauthorize** SolarEdge，并使用最新的 Client Secret 重新授权。
- 受 credits 限制，白天数据约每 **15 分钟**更新一次。首次添加 SolarEdge 逆变器时，设备需要一段时间才会显示可用。
