// pages/patientIndex/diagnosisHistory/diagnosisHistory.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: {
      "mocaTestId": "诊断id",
      "date": "日期",
      "doctorName": "医生",
      "status": "诊断状态",
      "result": "Moca得分",
    },
    listData: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.request({
      url: app.globalData.url + 'diagnosisHistory/',
      data: {},
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync('cookieKey')
      },
      success: function(res) {
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
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})