---
title: FAQ与故障排查
description: INDEVOLT 储能设备常见问题解答与使用说明
---

# FAQ与故障排查

## 一、适用范围与基础兼容

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. 问：设备兼容何种规格的太阳能板？
  </summary>

  答：建议适配光伏开路电压（Voc）在 10-60V 范围内、短路电流（Isc）不超过 20A 的太阳能板。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. 问：设备能否在 0°C 以下环境使用？电池的理想工作温度范围是多少？
  </summary>

  答：设备在 0°C 以下可正常实现充放电功能，光伏发电也能正常进行。受冬季光照条件影响，发电量会有所降低，此时光伏电力基本可满足自用，无电力浪费情况。
  
  电池理想环境温度范围如下：
    - 充电：-20~55°C
    - 放电：-20~55°C
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. 问：设备可以适配哪些品牌的产品？
  </summary>

  答：目前支持 Shelly、SOLARMAN 、INDEVOLT 等品牌产品。
</details>


## 二、安装、接线与使用

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. 问：是否需要额外配备微型逆变器？
  </summary>

  答：根据型号不同，情况如下：
  - 非 ECO 型号：已内置微型逆变器，无需额外配置，且包含 4 路 MPPT（最大功率点跟踪）。若需提升光伏输出功率，可额外接入微型逆变器。
  - ECO 型号：不支持 MPPT。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. 问：插入或添加扩展电池前需注意哪些事项？
  </summary>

  答：必须在设备完全断电状态下操作，严禁带电插拔，否则可能导致设备损坏或安全风险。正确操作步骤如下：  
      1. 断开光伏输入连接和 AC 电源插头；  
      2. 长按电源键 2 秒，关闭设备；  
      3. 设备关闭后，插入扩展电池；  
      4. 重新连接太阳能板并通电，恢复使用。  
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. 问：停电时，设备能否正常使用？
  </summary>

  答：家庭停电时设备可正常使用，可通过光伏进行充电，其离网输出接口根据不同产品型号最大输出功率有所不同。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. 问：停电时，能否使用并网口？
  </summary>

  答：根据相关并网认证标准，设备需具备防孤岛功能（防止电网停电时设备向电网供电，避免对电网维修人员造成安全隐患）。因此，电网停电时，不能通过并网端口向电网供电，仅可通过设备的离网端口为负载供电。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. 问：如何理解旁路模式？
  </summary>

  答：旁路模式是设备为适配特定外接设备而设计的运行模式，当旁路模式开启时，支持接入微型逆变器、关键负载等设备。用户可根据实际接入的设备类型，在设备或 App 中选择对应开关，开启后 App 界面会显示所接入设备的图案及能量流状态，便于实时监测设备运行情况。
  
  👉 查看详细说明：[旁路口使用说明](./technical-note/bypass.md)
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. 问：网络中断后，如何查看设备监测数据及调整参数？
  </summary>

  答：网络中断时，设备底层功能仍正常运行，可以通过连接本地蓝牙查看数据：
    - 方式一：在账号登录界面，选择“设备直连”，通过蓝牙与设备建立直连；
    - 方式二：在 App 应用中“我的”页面，选择“设备直连”功能，直接连接设备。
</details>

## 三、充放电与能量管理策略

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. 问：多个电池 SOC 不一样，会有问题吗？
  </summary>

  答：不会，这是正常现象。  

  每个电池包都配备独立的 DC-DC 优化器，系统可以自动协调不同电池之间的电量差异。即便不同容量、不同 SOC 的电池包，也可混合使用，系统会自动进行 SOC 均衡，无需手动处理。

  👉 查看详细说明：[SOC 均衡说明](./technical-note/soc-balancing.md)
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. 问：如何设置设备，使其不向家庭电网馈入电力？
  </summary>

  答：在 App 内进入设备的“功率设置”，将最大馈网功率设置为 0。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. 问：能否按“时间 + 电量”条件控制放电？
  </summary>

  答：可通过 Home Assistant 自行设置条件，在实时控制模式下，添加对应的时间规则与 SOC 阈值规则，实现两者的联动控制。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. 问：如何设置让设备通过太阳能电池板为电池充电？
  </summary>

  答：在 App 设定自定义时间计划，充电方式选择“仅光伏充电”。
  
  > **注意**：为维持电池健康状态，当电池电量极低（SOC≤3%），且光伏功率不足时，系统将自动从电网充电，以保护电池安全。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. 问：当光伏功率达到多少时，设备才会开始充电？
  </summary>

  答：系统会在光伏功率高于 50W 后开始给电池充电。设备自身运行功耗约 35 W，加上电能转换损耗，若光伏功率低于 50W，扣除损耗后，剩余电量基本无法为电池充电。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. 问：为什么光伏功率较低时，设备没有显示“充电”？
  </summary>

  答：当光伏功率较小时，设备会优先消耗一部分电能用于自身运行和电能转换，因此实际进入电池的充电功率可能非常小。

  如果实际充电功率低于系统显示阈值，App 会显示为“静止”，但电池实际上仍可能在缓慢充电，这是正常现象。

  显示阈值如下：

  - 充电功率 ≥ 30W 时，显示“充电”；
  - 放电功率 ≥ 60W 时，显示“放电”；
  - 低于以上阈值时，显示“静止”。

</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  7. 问：使用储能产品前，是否需要将电池充满电？
  </summary>

  答：建议在首次使用前，将电池满充 1 次，用于校准 SOC 数值，确保后续 App 显示的 SOC 与电池实际电量一致，提升使用体验。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  8. 问：当电池充满电后，太阳能电池板是否会停止发电？这样是否安全？
  </summary>

  答：设备内置过充保护，当电池 SOC 达到 100% 时，会自动停止对电池充电，这是正常现象。

  电池充满后，太阳能板是否继续发电，取决于当前系统状态和 App 设置：

  - 如果负载仍在用电，太阳能板会继续发电为负载供电；
  - 如果开启了馈网功能，多余电力会按照 App 中设置的“最大馈网功率”送入电网；
  - 如果没有用电需求，系统会自动降低或停止从太阳能板取电。

  整个过程由系统自动控制，不会对设备、电池或太阳能板造成损坏，可放心使用。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  9. 问：为什么断开电网后，Backup 接口没有电？
  </summary>

  答：可能有以下原因：
  
  - 当 EMS 固件版本低于 1.01.08 时，如果 Backup 接口处于微逆运行模式，系统会禁止该接口离网放电，以保护设备；
  - 当电池 SOC 低于 5% 时，该接口也可能停止供电。

  建议检查以下内容：
  - 在 App 中将 EMS 固件升级至 1.01.08 及以上版本；
  - 确认当前电池电量是否过低。
  
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  10. 问：SolidFlex 2000 设备的耗电量是多少？
  </summary>

  答：SolidFlex 2000 设备的耗电量分两种情况：
  - 工作状态（处于充放电或为负载供电时）：功耗约 30W；
  - 深度待机状态（不充电、不放电，设备低功耗运行）：功耗会随系统设置变化，详见[待机功耗说明](./technical-note/standby-power.md)
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  11. 问：负载耗电是否总是从电池取电，还是可直接使用光伏电力？
  </summary>

  答：不一定。
  - 当光伏发电功率足够时，系统会优先使用光伏电力为负载供电，多余的电力再用于给电池充电。
  - 当光伏功率不足时，系统才会由电池补充供电。
  - 2025 年 12 月之后生产的设备含 AC 辅源模块，深度待机时由电网供电。

</details>


## 四、扩展、电池与并机

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. 问：集群模式是什么？如何使用？
  </summary>

  答：集群是指将多台微储设备连接为一个统一运行的系统，由多台设备共同完成供电、储能与能量管理。
  
  使用方法：在 App 中完成所有设备的添加配网后，进入“设备”设置页面，选择“并机设置”，按照提示添加需组网的设备，完成配对后即可启用集群模式，同时可在该界面设置功率分配规则、SOC 阈值等参数。

  👉 查看详细说明：[并机说明](./technical-note/cluster.md)
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. 问：PowerFlex 系统与 SolidFlex 系统能否在集群模式下共同运行？
  </summary>

  答：已支持 PowerFlex 系统与 SolidFlex 系统在集群模式下共同运行。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. 问：若拥有两个并机的电池组，设备输出功率可设置为 2×2400W，还是总功率仅为 2400W？
  </summary>

  答：可在 App 并机分组的“功率设置”页面中查看当前系统可设置的最大交流输出功率。  

  不同并机方式下，系统的输出能力有所不同：
  - 协同式并机：每台设备都会独立接入电网，并分别完成交流输入与输出，因此每个电池组最高可输出 2400W。
  - 集中式并机：所有设备的交流输入与输出都会集中到主设备，由主设备统一接入电网并完成输出管理。并机后，主设备侧的最大输出功率最高可达 2 × 2400W。
  
  但实际可设置功率还需符合当地电网、电气规范及法规要求。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. 问：系统在多台设备并机时，供电功率是如何分配的？
  </summary>

  答：系统采用基于 SOC 与负载功率的分级供电分配规则，具体如下：
  - 放电功率 ＜ 200W 时，仅由 SOC 最高的设备承担全部放电负荷；
  - 200W ≤ 放电功率 ＜ 500W 时，由两台 SOC 较高的设备共同分担放电功率；
  - 放电功率 ＞ 500W 时，所有从机均参与放电，且按各设备 SOC 占比分配功率。  
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. 问：电池参数显示最大功率为 2400W，但当前配置默认功率为 800W，能否将功率调整至 2400W？
  </summary>

  答：设备的放电能力由电池包数量决定，若需提升放电功率至 2400W，需增加电池包数量；仅通过参数调整无法实现功率提升。增加电池包数量后，设备放电能力会相应增强，需确保电路负载匹配，避免因负载过高导致设备故障。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. 问：系统最多支持多少台 SolidFlex 2000 设备和 SFA1800 电池模块？总功率上限是多少？
  </summary>

  答：
  - 最大接入数量：每台 SolidFlex 2000 最大可接入 5 个 SFA1800 电池模块，单台设备最大装机容量为 10.8 千瓦时（5 个 SFA1800 电池模块总容量）；
  - 总放电功率上限：单台 SolidFlex 2000 的额定放电功率为 2400W；系统支持最多 3 台 SolidFlex 2000 作为无线集群，累计总放电功率上限为 7200W（3 × 2400W）。
</details>

## 五、系统联动

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. 问：能否与其他品牌储能系统联动？
  </summary>

  答：可以。通过 Home Assistant，可实现与其他系统的联动控制。操作时需确保两套系统均已接入 Home Assistant，并完成设备授权与指令对接。
</details>

## 六、质保问题

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. 问：产品质保期是多久？覆盖哪些部件？
  </summary>

  答：产品提供 **10 年有限质保**。质保范围涵盖电池、交流逆变器及整套系统（具体以质保合同条款为准，易损件除外）。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. 问：8000次循环寿命是否具备合同质保效力，还是仅为理论标称值。
  </summary>

  答：8000次循环寿命是基于实际测试得出的结果（设备采用两颗大电芯，提升循环稳定性），具备合同质保效力。
</details>
 
 <details className="custom-details" open>
  <summary className="custom-details__summary">
  3. 问：质保期结束时，系统承诺的电池剩余容量（SOH）为多少？
  </summary>

  答：不低于70%（SOH）。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. 问：电池允许的最大放电深度（DOD）为多少？
  </summary>

  答：在质保条件下，电池允许的最大放电深度为100%（日常使用中建议根据需求调整，避免频繁满放）。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. 问：系统是否会自动限制充放电倍率（C-rate），以延长电池使用寿命？
  </summary>

  答：系统支持手动调整充放电功率，同时会根据电池状态（如SOC、温度）自动限制充放电倍率，避免过高倍率对电池造成损伤，延长电池使用寿命。

</details>
