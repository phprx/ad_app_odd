// pages/patientIndex/myDieaseHistory/myDieaseHistory.js// pages/patientIndex/diagnosisHistory/diagnosisHistory.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [{
      "time": "日期",
      "text": "迹象与症状",
      "type1": "其它症状",

    },
    {
      "time": "01",
      "text": "text1",
      "type1": "type1",

    },
    {
      "time": "02",
      "text": "text2",
      "type1": "type1",

    },
    {
      "time": "03",
      "text": "text3",
      "type1": "type1",
    },
    {
      "time": "04",
      "text": "text4",
      "type1": "type1",
    },
    {
      "time": "05",
      "text": "text5",
      "type1": "type1",
    }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.globalData.url + 'myDieaseHistory/',
      data: {},
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync('cookieKey')
      },
      success: function (res) {
        if (res.statusCode == 200) {
          that.setData({
            listData: res.data.result
          })
        }
      },
    })
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