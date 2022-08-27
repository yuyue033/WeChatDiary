const CONFIG = {
  // ================================基础配置 - 无需修改================================
  // 和风天气API
  HEFENG_API_KEY: "",

  // ================================高级配置 - 需要修改================================

  // 微信公众号的appID
  APP_ID: "wxdd31e220394ffed2",

  // 微信公众号的appsecret
  APP_SECRET: "dde19993be898c2a928663a4bd475be8",

  // 微信公众号的模板ID
  TEMPLATE_ID: "M-5-oMAgorLZcsfjtnPEpmLQA5W3MJ1XCfanSKAre-o",

  // 天行API的key
  TXApiKey: "7bc0a79ea6f18cfdf18f1ffacac47a11",

  // 用户列表 可配置多个用户
  user: [
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "丹丹",
      // 用户列表的`微信号`
      userId: "oegew6qVv354kMKtDMQurp5px3Ho",
      // 星座
      star: "双鱼",
      // 生日 - 格式：08-22
      birthday: "03-09",
      // 城市 - 格式：支持省市县区
      city: "伊犁",
    },
  ],

  // 计划旅游日 - 格式：2022-08-20
  tourism: "2022-09-30",

  // 恋爱纪念日 - 格式：2022-05-20
  loveDay: "2022-08-27",

  // ================================功能配置 - 可选修改================================

  // 默认全部开启，关闭可以加快响应速度
  // true 开启，false 关闭
  plugins: {
    // 天气预报
    weather: true,
    // 天气接口 默认接口1，可选接口1、2，接口2暂时无法使用
    weatherType: 1,
    // 星座运势
    star: true,
    // 土味情话
    saylove: true,
    // 健康小提示
    healthtip: false,
    // 毒鸡汤
    duJiTang: true,
    // 早安心语
    zaoAn: false,
    // 晚安心语
    wanAn: true,
    // 彩虹屁
    caiHongPi: true,
  },
};

module.exports = {
  CONFIG,
};
