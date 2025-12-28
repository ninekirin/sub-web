// 远程配置选项
export const REMOTE_CONFIGS = [
  {
    label: "universal",
    options: [
      {
        label: "No-Urltest",
        value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/no-urltest.ini"
      },
      {
        label: "Urltest",
        value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/urltest.ini"
      }
    ]
  },
  {
    label: "customized",
    options: [
      { label: "Maying", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/maying.ini" },
      { label: "Ytoo", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ytoo.ini" },
      { label: "FlowerCloud", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/flowercloud.ini" },
      { label: "Nexitally", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nexitally.ini" },
      { label: "SoCloud", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/socloud.ini" },
      { label: "ARK", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ark.ini" },
      { label: "ssrCloud", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ssrcloud.ini" }
    ]
  },
  {
    label: "Special",
    options: [
      { label: "NeteaseUnblock(仅规则，No-Urltest)", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/netease.ini" },
      { label: "Basic(仅GEOIP CN + Final)", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/basic.ini" }
    ]
  },
  {
    "label": "ACL4SSR",
    "options": [
      {
        "label": "ACL4SSR 默认版 分组比较全 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR.ini"
      },
      {
        "label": "ACL4SSR AdblockPlus版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_AdblockPlus.ini"
      },
      {
        "label": "ACL4SSR BackCN版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_BackCN.ini"
      },
      {
        "label": "ACL4SSR Mini版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Mini.ini"
      },
      {
        "label": "ACL4SSR Mini Fallback版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Mini_Fallback.ini"
      },
      {
        "label": "ACL4SSR Mini MultiMode版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Mini_MultiMode.ini"
      },
      {
        "label": "ACL4SSR Mini NoAuto版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Mini_NoAuto.ini"
      },
      {
        "label": "ACL4SSR NoApple版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_NoApple.ini"
      },
      {
        "label": "ACL4SSR NoAuto版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_NoAuto.ini"
      },
      {
        "label": "ACL4SSR NoAuto NoApple版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_NoAuto_NoApple.ini"
      },
      {
        "label": "ACL4SSR NoAuto NoApple NoMicrosoft版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_NoAuto_NoApple_NoMicrosoft.ini"
      },
      {
        "label": "ACL4SSR NoMicrosoft版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_NoMicrosoft.ini"
      },
      {
        "label": "ACL4SSR Online版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"
      },
      {
        "label": "ACL4SSR Online AdblockPlus版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"
      },
      {
        "label": "ACL4SSR Online Full版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"
      },
      {
        "label": "ACL4SSR Online Full AdblockPlus版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"
      },
      {
        "label": "ACL4SSR Online Full Google版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Google.ini"
      },
      {
        "label": "ACL4SSR Online Full MultiMode版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini"
      },
      {
        "label": "ACL4SSR Online Full Netflix版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini"
      },
      {
        "label": "ACL4SSR Online Full NoAuto版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini"
      },
      {
        "label": "ACL4SSR Online Mini版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"
      },
      {
        "label": "ACL4SSR Online Mini AdblockPlus版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"
      },
      {
        "label": "ACL4SSR Online Mini Ai版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Ai.ini"
      },
      {
        "label": "ACL4SSR Online Mini Fallback版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"
      },
      {
        "label": "ACL4SSR Online Mini MultiCountry版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiCountry.ini"
      },
      {
        "label": "ACL4SSR Online Mini MultiMode版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"
      },
      {
        "label": "ACL4SSR Online Mini NoAuto版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini"
      },
      {
        "label": "ACL4SSR Online MultiCountry版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_MultiCountry.ini"
      },
      {
        "label": "ACL4SSR Online NoAuto版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"
      },
      {
        "label": "ACL4SSR Online NoReject版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini"
      },
      {
        "label": "ACL4SSR WithChinaIp版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_WithChinaIp.ini"
      },
      {
        "label": "ACL4SSR WithChinaIp WithGFW版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_WithChinaIp_WithGFW.ini"
      },
      {
        "label": "ACL4SSR WithGFW版 (与Github同步)",
        "value": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_WithGFW.ini"
      },
      {
        "label": "ACL4SSR 默认版 分组比较全 (本地)",
        "value": "config/ACL4SSR.ini"
      },
      {
        "label": "ACL4SSR AdblockPlus版 (本地)",
        "value": "config/ACL4SSR_AdblockPlus.ini"
      },
      {
        "label": "ACL4SSR BackCN版 (本地)",
        "value": "config/ACL4SSR_BackCN.ini"
      },
      {
        "label": "ACL4SSR Mini版 (本地)",
        "value": "config/ACL4SSR_Mini.ini"
      },
      {
        "label": "ACL4SSR Mini Fallback版 (本地)",
        "value": "config/ACL4SSR_Mini_Fallback.ini"
      },
      {
        "label": "ACL4SSR Mini MultiMode版 (本地)",
        "value": "config/ACL4SSR_Mini_MultiMode.ini"
      },
      {
        "label": "ACL4SSR Mini NoAuto版 (本地)",
        "value": "config/ACL4SSR_Mini_NoAuto.ini"
      },
      {
        "label": "ACL4SSR NoApple版 (本地)",
        "value": "config/ACL4SSR_NoApple.ini"
      },
      {
        "label": "ACL4SSR NoAuto版 (本地)",
        "value": "config/ACL4SSR_NoAuto.ini"
      },
      {
        "label": "ACL4SSR NoAuto NoApple版 (本地)",
        "value": "config/ACL4SSR_NoAuto_NoApple.ini"
      },
      {
        "label": "ACL4SSR NoAuto NoApple NoMicrosoft版 (本地)",
        "value": "config/ACL4SSR_NoAuto_NoApple_NoMicrosoft.ini"
      },
      {
        "label": "ACL4SSR NoMicrosoft版 (本地)",
        "value": "config/ACL4SSR_NoMicrosoft.ini"
      },
      {
        "label": "ACL4SSR Online版 (本地)",
        "value": "config/ACL4SSR_Online.ini"
      },
      {
        "label": "ACL4SSR Online AdblockPlus版 (本地)",
        "value": "config/ACL4SSR_Online_AdblockPlus.ini"
      },
      {
        "label": "ACL4SSR Online Full版 (本地)",
        "value": "config/ACL4SSR_Online_Full.ini"
      },
      {
        "label": "ACL4SSR Online Full AdblockPlus版 (本地)",
        "value": "config/ACL4SSR_Online_Full_AdblockPlus.ini"
      },
      {
        "label": "ACL4SSR Online Full Google版 (本地)",
        "value": "config/ACL4SSR_Online_Full_Google.ini"
      },
      {
        "label": "ACL4SSR Online Full MultiMode版 (本地)",
        "value": "config/ACL4SSR_Online_Full_MultiMode.ini"
      },
      {
        "label": "ACL4SSR Online Full Netflix版 (本地)",
        "value": "config/ACL4SSR_Online_Full_Netflix.ini"
      },
      {
        "label": "ACL4SSR Online Full NoAuto版 (本地)",
        "value": "config/ACL4SSR_Online_Full_NoAuto.ini"
      },
      {
        "label": "ACL4SSR Online Mini版 (本地)",
        "value": "config/ACL4SSR_Online_Mini.ini"
      },
      {
        "label": "ACL4SSR Online Mini AdblockPlus版 (本地)",
        "value": "config/ACL4SSR_Online_Mini_AdblockPlus.ini"
      },
      {
        "label": "ACL4SSR Online Mini Fallback版 (本地)",
        "value": "config/ACL4SSR_Online_Mini_Fallback.ini"
      },
      {
        "label": "ACL4SSR Online Mini MultiCountry版 (本地)",
        "value": "config/ACL4SSR_Online_Mini_MultiCountry.ini"
      },
      {
        "label": "ACL4SSR Online Mini MultiMode版 (本地)",
        "value": "config/ACL4SSR_Online_Mini_MultiMode.ini"
      },
      {
        "label": "ACL4SSR Online Mini NoAuto版 (本地)",
        "value": "config/ACL4SSR_Online_Mini_NoAuto.ini"
      },
      {
        "label": "ACL4SSR Online MultiCountry版 (本地)",
        "value": "config/ACL4SSR_Online_MultiCountry.ini"
      },
      {
        "label": "ACL4SSR Online NoAuto版 (本地)",
        "value": "config/ACL4SSR_Online_NoAuto.ini"
      },
      {
        "label": "ACL4SSR Online NoReject版 (本地)",
        "value": "config/ACL4SSR_Online_NoReject.ini"
      },
      {
        "label": "ACL4SSR WithChinaIp版 (本地)",
        "value": "config/ACL4SSR_WithChinaIp.ini"
      },
      {
        "label": "ACL4SSR WithChinaIp WithGFW版 (本地)",
        "value": "config/ACL4SSR_WithChinaIp_WithGFW.ini"
      },
      {
        "label": "ACL4SSR WithGFW版 (本地)",
        "value": "config/ACL4SSR_WithGFW.ini"
      }
    ]
  }
];
