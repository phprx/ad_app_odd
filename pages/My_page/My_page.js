// const APP_ID = 'wx6c40eb3a67e35f23';//输入小程序appid  
// const APP_SECRET = '3b1f1ccd659ab577e24cd9ead98ac07d';//输入小程序app_secret  
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: "",
    userName: "",
    isLogin: false,
    isExist: false,
    isDoctor: false,
    isParamedic:false,
    isPatient: false,

  },
  onGotUserInfo: function (e) {
    var that = this
    // this.setData({ isParamedic: true, isLogin: !this.data.isLogin, avatarUrl: e.detail.userInfo.avatarUrl, userName: e.detail.userInfo.nickName })
    this.setData({ isLogin: !this.data.isLogin, avatarUrl: e.detail.userInfo.avatarUrl, userName: e.detail.userInfo.nickName })
    wx.setStorageSync('isLogin', this.data.isLogin)
    wx.login({
      success: function (res) {
        wx.request({
          url: app.globalData.url + 'getOpenid/',
          data: { code: res.code },
          method: 'GET',
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            if (res.statusCode == 200) {
              console.log(res)
              wx.request({
                url: app.globalData.url + 'login/',
                data: { openId: res.data.openid },
                method: 'GET',
                header: {
                  'content-type': 'application/json'
                },
                success: function (res) {
                  if (res.statusCode == 200) {
                    console.log(res)
                    that.setData({ isExist: res.data.exist, isDoctor: res.data.isDoctor, isParamedic: res.data.isParamedic, isPatient: res.data.isPatient})
                    wx.setStorageSync('isPatient', that.data.isPatient)
                    if (res && res.header && res.header['Set-Cookie']) {
                      wx.setStorageSync('cookieKey', res.header['Set-Cookie']) //保存Cookie到Storage
                    }
                    if (!that.data.isExist) {
                      wx.showModal({
                        title: '',
                        content: '请点击修改信息选择您的身份',
                      })
                    }
                  }
                },
              })
            }
          },
        })
      }
    })
    
  },
  changeInfoHandle:function(){
    wx.navigateTo({
      url: '../changeInfo/changeInfo',
    })
  },
  doctorHandle1:function(){
    wx.navigateTo({
      url: '../doctorIndex/mocaDiagnosis/mocaDiagnosis',
    })
  },
  doctorHandle2: function () {
    wx.navigateTo({
      url: '../doctorIndex/myPatient/myPatient',
    })
  },
  doctorHandle3: function () {
    wx.navigateTo({
      url: '../doctorIndex/diagnosisHistory/diagnosisHistory',
    })
  },
  paramedicHandle1: function () {
    wx.navigateTo({
      url: '../paramedicIndex/patientDiease/patientDiease',
    })
  },
  paramedicHandle2: function () {
    wx.navigateTo({
      url: '../paramedicIndex/patientDieaseHistory/patientDieaseHistory',
    })
  },
  paramedicHandle3: function () {
    wx.navigateTo({
      url: '../paramedicIndex/diagnosisHistory/diagnosisHistory',
    })
  },
  patientHandle1: function () {
    wx.navigateTo({
      url: '../patientIndex/myDiease/myDiease',
    })
  },
  patientHandle2: function () {
    wx.navigateTo({
      url: '../patientIndex/myDieaseHistory/myDieaseHistory',
    })
  },
  patientHandle3: function () {
    wx.navigateTo({
      url: '../patientIndex/diagnosisHistory/diagnosisHistory',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 判断isLogin决定按钮的显示
    var role = wx.getStorageSync('role')
    if (role != '') {
      this.setData({ isExist: true })
      if (role == 'patient') {
        this.setData({ isPatient: true })
      }
      else if (role == 'paramedic') {
        this.setData({ isParamedic: true })
      }
      else if (role == 'doctor') {
        this.setData({ isDoctor: true })
      }
    }
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})