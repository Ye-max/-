const config = require("config.js");

App({
      openid: '', //用户唯一id
      userinfo:'', //用户信息
      roomlist:[],
      roomid:'', //卖家微信二维码
      shareid:'', //动态id
      shpublisher:'', //动态发布者id
      canReflect:true,
      onLaunch: function() {
            if (!wx.cloud) {
                  console.error('请使用 2.2.3 或以上的基础库以使用云能力')
            } else {
                  wx.cloud.init({
                       env: JSON.parse(config.data).env,
                        traceUser: true,
                  })
            }
           this.systeminfo=wx.getSystemInfoSync();
      }
})