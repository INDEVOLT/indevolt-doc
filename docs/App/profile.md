---
title: Profile
description: Manage your account and customize your personal settings.
---

# Profile

Click the **Profile** tab in the bottom navigation bar to enter the page. This page is used to manage account information, adjust app settings, and configure personalization options.

<img src={require("./img/profile_page.png").default} width="240"/>

## 1. Account

Tap **Account** to enter the account settings page, where you can view and manage all account-related configurations.

<img src={require("./img/profile_page.png").default} width="240"/>
<img src={require("./img/account.png").default} width="240"/>


### 1.1 Profile

Tap **Profile** to enter the detailed account page where you can update your profile picture, change your username, and update your bound email or phone number.

<img src={require("./img/account.png").default} width="240"/>
<img src={require("./img/account_profile.png").default} width="240"/>


### 1.2 Change Password

Tap **Change Password**, then follow the instructions to **enter your current and new passwords**. After saving successfully, the system will automatically redirect you to the login page, where you can sign in again using the new password.

<img src={require("./img/account.png").default} width="240"/>
<img src={require("./img/change_password.png").default} width="240"/>


### 1.3 Delete Account

:::warning
Deleting your account will permanently erase all associated data and cannot be undone. Please proceed with caution.
:::

1. **[Delete](#23-delete-home) all homes** under your account.
2. Tap **Delete My Account** to begin the account cancellation process.
3. Carefully review the on-screen instructions and the “Account Cancellation Reminder”. Confirm that you meet the conditions and understand the consequences. If no concerns, check **I have read and agree Account Cancellation Reminder**.
4. Tap **Confirm Cancellation** to proceed.
5. For security, the system will require **identity verification**: enter your password and verify your bound phone number or email.
6. Enter the confirmation code received, then tap **Done** to complete the account deletion.

   <img src={require("./img/account.png").default} width="240"/>
   <img src={require("./img/account_cancellation.png").default} width="240"/>
   <img src={require("./img/logout_account_verification.png").default} width="240"/>


### 1.4 Log Out

Tap **Log Out** to securely exit your current account. The system will return to the login page.

<img src={require("./img/account.png").default} alt="App overview" width="240"/>
<img src={require("./img/exit.png").default} alt="App overview" width="240"/>


### 1.5 Remember Password

The Remember Password feature allows you to save your **account login password** and **the Wi-Fi password** used during device network setup, so you won’t need to enter them repeatedly.

You can enable or disable password saving (including both login and Wi-Fi passwords) anytime by toggling the Remember Password switch.

<img src={require("./img/account.png").default} width="240"/>


## 2. Home

Tap your current home name to enter the home information page.

<img src={require("./img/profile_page.png").default} width="240"/>
<img src={require("./img/edit_home.png").default} width="240"/>


### 2.1 Add Home

1. Tap the **+ button** in the upper right corner.
2. On the new page, complete the home information:
   - **Home Name:** Set a recognizable name for the home.
   - **Location**: The app automatically detects your country; you may also manually select it.
   - **Home Address**: The app auto-fills an approximate area; you may tap the icon next to the address bar to re-locate on the Mapbox map.
3. After confirming all information, tap **Add**. The new home will immediately appear in your home list.

   <img src={require("./img/add_home.png").default} width="240"/>
   <img src={require("./img/location.png").default} width="240"/>
   <img src={require("./img/home_address.png").default} width="240"/>


### 2.2 Edit Home

You can edit the following home information:
<img src={require("./img/edit_home.png").default} width="240"/>

#### 2.2.1 Home Name

Tap the name field to modify it.
<img src={require("./img/edit_home_name.png").default} width="240"/>

#### 2.2.2 Home Address

Tap the address field to reselect or relocate.
<img src={require("./img/edit_home_address.png").default} width="240"/>

#### 2.2.3 Grid and PV

Configure your home's electricity usage and feed-in options:
- Whether you purchase electricity from the utility company.
- Whether your household approved to sell electricity to the utility company.

  <img src={require("./img/grid_supply1.png").default} width="240"/>
  <img src={require("./img/grid_supply2.png").default} width="240"/>

#### 2.2.4 Add Home Member

1. Tap **Add home members**.
2. Select the member’s permissions:

   | Permission    | Description                                                   |
   | ------------- | ------------------------------------------------------------- |
   | Member        | View home and device data only.                               |
   | Administrator | Can add and remove devices and members, set home information. |

3. Tap **Next**.
4. Enter the user’s account (email or phone number).
5. Tap **Search**.
6. In the search results, tap the **add icon** next to the user.
7. When the **Added successfully** message appears, the process is complete.

   <img src={require("./img/add_home_member.png").default} width="240"/>
   <img src={require("./img/select_member_permission.png").default} width="240"/>
   <img src={require("./img/invite_member.png").default} width="240"/>
   <img src={require("./img/member_added.png").default} width="240"/>


#### 2.2.5 Manage Home Member Permissions

1. In the member list, tap the member whose permissions you want to modify.
2. Tap the **Family Permissions** field.
3. Choose a new permission level:

   | Permission    | Description                                                            |
   | ------------- | ---------------------------------------------------------------------- |
   | Member        | View home and device data only.                                        |
   | Administrator | Can add and remove devices and members, set home information.          |
   | Owner         | Transfers home ownership; you will lose all permissions for this home. |

4. Tap **OK**.

   <img src={require("./img/select_member.png").default} width="240"/>
   <img src={require("./img/manage_member_permission.png").default} width="240"/>


#### 2.2.6 Remove Home Member

At the bottom of the member information page, tap **Delete**. The app will ask for confirmation; after confirming, the member will be removed.

<img src={require("./img/delete_member.png").default} width="240"/>


### 2.3 Delete Home

:::warning
This action is irreversible and will erase all data for this home. Please proceed carefully!
:::

At the bottom of the home management page, tap **Delete**. After confirmation, the home will be removed.

<img src={require("./img/delete_home.png").default} width="240"/>


## 3. Tariff

Tap **Tariff** to enter the electricity price management interface.

<img src={require("./img/profile_page.png").default} width="240"/>
<img src={require("./img/tariff.png").default} width="240"/>


### 3.1 Add Tariff

Tap **+ Add Electricity Price** to create a new **purchase or selling price** plan.
<img src={require("./img/add_price.png").default} width="240"/>
<img src={require("./img/electricity_price.png").default} width="240"/>

The setup process for purchase and selling prices is similar. The purchase price is used as an example below:
<img src={require("./img/configure_price.png").default} width="240"/>

1. Set the **start and end time** for the tariff.

   - The end time is set to “Now” by default, meaning the price will remain effective.

      <img src={require("./img/price_start_end_time1.png").default} width="240"/>

   - To set electricity prices for a historical period, turn off the “Now” toggle and manually select the time range.

      <img src={require("./img/price_start_end_time2.png").default} width="240"/>

2. Select your home’s **area**.
3. Choose your **electricity supplier** from the list.
4. Configure the **electricity tariff** plan:
   - **Dynamic**: Requires setting taxes and the monthly fixed base price.

     <img src={require("./img/dynamic_tariff.png").default} width="240"/>

   - **Static**: Requires setting the base price and the time-of-use (TOU) rates for different periods.

     <img src={require("./img/static_tariff1.png").default} width="240"/>
     <img src={require("./img/static_tariff2.png").default} width="240"/>
     <img src={require("./img/static_tariff3.png").default} width="240"/>

5. Tap **Save**.

:::info
The tariff settings here are used for in-app visualization and estimation only. Actual billing is subject to your electricity provider’s official data.
:::

### 3.2 View Historical Tariffs

Tap the icon in the upper right corner to view past electricity price.
<img src={require("./img/history_price_plan1.png").default} width="240"/>
<img src={require("./img/history_price_plan2.png").default} width="240"/>


## 4. Cluster

Cluster settings allow you to combine multiple energy storage devices or inverters - via wired or wireless connections - into a unified system for expanded capacity and load balancing.

:::info Prerequisite
- At least one energy storage device and one compatible device must exist in the current home.
- All devices participating in clustering must be powered on and connected to the same Wi-Fi network.
:::

You must configure main-sub mode: designate one device as the main device, with the others acting as sub-devices, coordinated by the main.

The following table shows which models support main/sub roles:


<table><thead>
  <tr>
    <th></th>
    <th colspan="2">Wired</th>
    <th colspan="2">Wireless</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Model</td>
    <td>Main</td>
    <td>Sub</td>
    <td>Main</td>
    <td>Sub</td>
  </tr>
  <tr>
    <td>BK1600</td>
    <td>✗</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>BK1600 Ultra</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>PowerFlex 2000</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>SolidFlex 2000</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
    <td>✓</td>
  </tr>
  <tr>
    <td>Smart Plug</td>
    <td>✗</td>
    <td>✓</td>
    <td>✗</td>
    <td>✓</td>
  </tr>
</tbody>
</table>

**Steps:**

1. Tap **Cluster**.
2. Tap **Create a Cluster**.
3. Select **Cluster Mode**: wireless or wired. Press and hold device cards and drag them into the main or sub slots.
4. Set the **AC Output Power Limitation** according to grid regulations and local policies.
5. Tap **Save** to complete the cluster setup.

   <img src={require("./img/profile_page.png").default} width="240"/>
   <img src={require("./img/cluster.png").default} width="240"/>
   <img src={require("./img/create_cluster.png").default} width="240"/>
   <img src={require("./img/output_power_limit.png").default} width="240"/>
   <img src={require("./img/cluster_created.png").default} width="240"/>
   <img src={require("./img/view_cluster.png").default} width="240"/>


## 5. Data Source

With Data Source settings, you can specify the data sources used for home energy statistics to improve the accuracy and reliability of analytical results.
The system supports four types of data sources: Solar, Battery, Grid, and Load.

1. Tap **Data Source** to enter the configuration page.
2. Select the data source type you want to configure.
3. Click **Custom** on the right and select one or more devices as the statistical input for this data source.
4. After completing the selection, tap **Save** to apply the settings.

   <img src={require("./img/profile_page.png").default} width="240"/>
   <img src={require("./img/select_data_source.png").default} width="240"/>
   <img src={require("./img/tap_custom.png").default} width="240"/>
   <img src={require("./img/choose_data_source_device.png").default} width="240"/>
   <img src={require("./img/save_data_source.png").default} width="240"/>

## 6. Display

Tap **Display** to customize the app’s appearance and formatting preferences.

### 6.1 Language

Support multiple interface languages: Simplified Chinese, English, French, German, Italian and Dutch.
<img src={require("./img/language.png").default} width="240"/>

### 6.2 Dark Mode

Turn on or off dark mode to suit different lighting environments.
<img src={require("./img/dark_mode.png").default} width="240"/>

### 6.3 Temperature Unit

Choose your preferred temperature unit: Celsius (℃) or Fahrenheit (℉).
<img src={require("./img/temperature_unit.png").default} width="240"/>

### 6.4 Date and Time Format

Customize the display format for date order and 12-/24-hour clock.
<img src={require("./img/date_time_format.png").default} width="240"/>

### 6.5 Decimal Display Preference

Select your preferred decimal separator: dot or comma.
<img src={require("./img/decimal_preference.png").default} width="240"/>

Tap **Save** and all changes will take effect immediately. You can return anytime to adjust preferences.


## 7. Suggestions Board

The Suggestions Board is your direct channel to communicate with us - submit product suggestions or report issues encountered during use.

Tap **Suggestions Board** to enter the feature.
<img src={require("./img/profile_page.png").default} width="240"/>

You can perform the following actions:

- View suggestions: Browse feature suggestions and feedback from other users.
   <img src={require("./img/suggestions.png").default} width="240"/>

- Report an issue: Tap **Report it directly**, describe the problem, and submit it.
   <img src={require("./img/tap_report_issue.png").default} width="240"/>
   <img src={require("./img/report_issue.png").default} width="240"/>

- Share suggestions: Tap **Share Suggestion** to provide your ideas for improvements or new features.
   <img src={require("./img/share_suggestion1.png").default} width="240"/>
   <img src={require("./img/share_suggestion2.png").default} width="240"/>


## 8. Operation Services

For easier maintenance, you can add and manage service providers (such as retailer and installers) via **Operation Services**. After authorization, a provider can view your basic device information to offer more accurate support.

<img src={require("./img/profile_page.png").default} width="240"/>
<img src={require("./img/operation_service.png").default} width="240"/>


## 9. Direct Device Connection

Direct Device Connection uses Bluetooth for nearby communication, allowing you to monitor and manage supported devices without connecting to the home network.

:::info
This feature currently supports INDEVOLT home energy storage system:
- BK1600  
- BK1600 Ultra  
- SolidFlex 2000  
- PowerFlex 2000  

More devices will be supported in the future. Please stay tuned.
:::

:::tip Prerequisite
Ensure Bluetooth is enabled on your phone and the target device is powered on and ready for pairing.
:::

1. Tap **Direct Device Connection**.
2. Scan the device QR code using the app for automatic identification.
3. Tap **Connect to Device** and move your phone close to the device. The system will establish a Bluetooth connection.
4. After successful connection, you may view real-time data, set charge/discharge schedules, and configure parameters.
5. Tap the **back arrow (\<)** in the upper-left corner to exit.

   <img src={require("./img/profile_page.png").default} width="240"/>
   <img src={require("./img/scan_qr_code.png").default} width="240"/>
   <img src={require("./img/connect_device.png").default} width="240"/>
   <img src={require("./img/device_connected.png").default} width="240"/>
   <img src={require("./img/disconnect_device.png").default} width="240"/>


## 10. Remote Support

This function helps after-sales technicians quickly locate and resolve potential device issues.

:::tip Prerequisite
- Ensure the device is powered on and connected to the internet via 4G/5G or Wi-Fi.
- Keep the Bluetooth connection stable during debugging. It is recommended to set your phone screen to stay awake to avoid disconnection.
:::

1. Tap **Remote Support**.
2. Read the information and tap **Next**.
3. Scan the device QR code or manually enter the SN to establish a Bluetooth connection.
4. The system will generate a **Remote ID**. Provide this ID to the technician for remote diagnosis.

   <img src={require("./img/profile_page.png").default} width="240"/>
   <img src={require("./img/remote_support.png").default} width="240"/>
   <img src={require("./img/scan_qr_code.png").default} width="240"/>
   <img src={require("./img/remote_id.png").default} width="240"/>

:::info
- The debugging process does not affect normal device operation.
- This feature is for authorized technicians only - do not share the ID with unauthorized parties.
- After debugging, please exit the mode to end the remote session and ensure security.
:::


## 11. About INDEVOLT

Tap **About INDEVOLT** to learn more about the app, including the current version, service and privacy agreements, third-party information sharing list, permission descriptions, and system permission management.

<img src={require("./img/about_indevolt.png").default} width="240"/>
