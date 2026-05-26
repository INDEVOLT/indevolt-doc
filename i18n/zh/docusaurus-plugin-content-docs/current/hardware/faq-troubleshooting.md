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

  答：建议适配光伏开路电压（Voc）在10-60V范围内、短路电流（Isc）不超过20A的太阳能板。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. 问：设备能否在0°C以下环境使用？电池的理想工作温度范围是多少？
  </summary>

  答：设备在0°C以下可正常实现充放电功能，光伏发电也能正常进行。受冬季光照条件影响，发电量会有所降低，此时光伏电力基本可满足自用，无电力浪费情况。电池理想环境温度范围如下：
    - 充电：-20~55°C
    - 放电：-20~55°C
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. 问：设备可以适配哪些品牌的产品？
  </summary>

  答：目前支持Shelly、Solarman、Indevolt等品牌产品。
</details>


## 二、安装、接线与使用

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. 问：使用本产品是否需要额外配备微型逆变器？
  </summary>

  答：非Eco版本的型号，无需额外配备微型逆变器，设备已内置微型逆变器，且包含4路MPPT（最大功率点跟踪）。若需提升太阳能输出功率，可额外增加微型逆变器。另Eco版本不支持MPPT。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. 问：插入或添加扩展电池前需注意哪些事项？
  </summary>

  答：插入或添加扩展电池时，必须先关闭系统，以保障人员安全及设备稳定，带电操作将导致产品损坏。正确操作步骤如下：  
      1. 断开AC电源插头；  
      2. 长按电源键2秒，关闭设备；  
      3. 设备关闭后，插入扩展电池；  
      4. 重新连接太阳能板，即可正常使用。  
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

  答：旁路模式是设备为适配特定外接设备而设计的运行模式，当旁路模式开启时，支持接入微型逆变器、关键负载等设备。用户可根据实际接入的设备类型，在设备或APP中选择对应开关，开启后APP界面会显示所接入设备的图案及能量流状态，便于实时监测设备运行情况。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. 问：网络中断后，如何查看设备监测数据及调整参数？
  </summary>

  答：网络中断时，设备底层功能仍正常运行，可以通过连接本地蓝牙查看数据，操作路径如下：
    - 方式一：在设备登录界面，选择“蓝牙连接”，通过蓝牙与设备建立直连；
    - 方式二：在APP应用中“我的”页面，选择“设备直连”功能，直接连接设备。
</details>


## 三、扩展、电池与并机

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. 问：请介绍集群模式的功能及使用方法。
  </summary>

  答：集群模式是指多台同类型储能设备（如多台SolidFlex 2000）通过无线或有线方式组网，实现协同运行的模式，其核心功能包括：
  - 统一调度：多台设备共享负载信息，按预设规则分配充放电功率，提升整体运行效率；
  - 容量叠加：多台设备的电池容量叠加，满足更高负载或更长续航需求；
  - 冗余备份：某一台设备故障时，其余设备可正常运行，保障供电稳定性。
  
  使用方法：在APP中完成所有设备的添加配网后，进入“设备”设置页面，选择“并机设置”，按照提示添加需组网的设备，完成配对后即可启用集群模式，同时可在该界面设置功率分配规则、SOC阈值等参数。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  2. 问：PowerFlex系统与SolidFlex系统能否在集群模式下共同运行？
  </summary>

  答：目前已支持PowerFlex系统与SolidFlex系统在集群模式下共同运行。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  3. 问：电池参数显示最大功率为 2400W，但当前配置默认功率为800W，能否将功率调整至2400W？
  </summary>

  答：设备的放电能力由电池包数量决定，若需提升放电功率至2400W，需增加电池包数量；仅通过参数调整无法实现功率提升。增加电池包数量后，设备放电能力会相应增强，需确保电路负载匹配，避免因负载过高导致设备故障。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  4. 问：系统在多台设备并机时，供电功率是如何分配的？
  </summary>

  答：系统采用基于 SOC 与负载功率的分级供电分配规则，具体如下：
  - 放电功率＜200W 时，仅由 SOC 最高的设备承担全部放电负荷；
  - 200W≤放电功率＜500W 时，由两台 SOC 较高的设备共同分担放电功率；
  - 放电功率＞500W 时，所有从机均参与放电，且按各设备 SOC 占比分配功率。  
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. 问：系统最多支持多少台SolidFlex 2000设备和SFA1800电池模块？总功率上限是多少？
  </summary>

  答：
  - 最大接入数量：系统支持最多3台SolidFlex 2000作为无线集群，单个Shelly电流互感器可控制该3台SolidFlex 2000；每台SolidFlex 2000最大可接入5个SFA1800电池模块，单台设备最大装机容量为10.8千瓦时（5个SFA1800电池模块总容量）；
  - 总放电功率上限：单台SolidFlex 2000的额定放电功率为2400W，3台集群运行时，累计总放电功率上限为7200W（3×2400W）。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. 问：接入多台 SolidFlex 2000 后，系统或固件会限制总功率吗？APP支持识别的最大装机总容量是多少？
  </summary>

  答：
  - 固件功率限制：接入多组SolidFlex 2000电池簇时，固件不会限制总功率输出，用户可在APP中根据实际需求调整设备总功率（需确保不超过电路承载能力）；
  - APP识别容量：APP不限制识别的最大装机总容量，例如接入2台SolidFlex 2000，APP会分别显示每台设备的装机容量，并在集群界面显示总容量。
</details>

## 四、关联设备与系统联动

<details className="custom-details" open>
  <summary className="custom-details__summary">
  1. 问：能否与其他品牌储能系统联动？
  </summary>

  答：可以。通过 Home Assistant，可实现与其他系统的联动控制。操作时需确保两套系统均已接入HomeAssistant，并完成设备授权与指令对接。
</details>



## 五、质保问题

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
  4. 问：标称 8000 次循环寿命时，实际放电深度（DOD）是多少？
  </summary>

  答：8000次循环寿命采用的实际放电深度为100%；系统设定的电池保护/预留电量比例为5%
</details>


<details className="custom-details" open>
  <summary className="custom-details__summary">
  5. 问：若要享受质保服务，电池允许的最大放电深度（DOD）为多少？
  </summary>

  答：在质保条件下，电池允许的最大放电深度为100%（日常使用中建议根据需求调整，避免频繁满放）。
</details>

<details className="custom-details" open>
  <summary className="custom-details__summary">
  6. 问：符合质保条件的设备运行温度范围是多少？
  </summary>

  答：符合质保条件的设备运行温度范围为-20~55℃（最高限值55℃，最低限值-20℃）。
</details>


<details className="custom-details" open>
  <summary className="custom-details__summary">
  7. 问：系统是否会自动限制充放电倍率（C-rate），以延长电池使用寿命？
  </summary>

  答：系统支持手动调整充放电功率，同时会根据电池状态（如SOC、温度）自动限制充放电倍率，避免过高倍率对电池造成损伤，延长电池使用寿命。

</details>
