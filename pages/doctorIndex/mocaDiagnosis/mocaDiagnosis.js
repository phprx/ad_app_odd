// pages/doctorIndex/mocaDiagnosis/mocaDiagnosis.js// pages/patientIndex/diagnosisHistory/diagnosisHistory.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: {
      "id": "诊断id",
      "date": "提交日期",
      "name": "病人姓名",
      "gender": "病人性别",
      "age": "病人年龄",
      "operate": "操作",
    },
    listData: [],
    tempFilePath:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.globalData.url + 'mocaDiagnosis/',
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
  diagnosisHandle:function(e){
    var that = this
    wx.downloadFile({
      url: app.globalData.url + 'downloadtest/',
      data: e.currentTarget.dataset.index,
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'Cookie': wx.getStorageSync('cookieKey')
      },
      success(res) {
        if (res.statusCode === 200) {
          that.setData({ tempFilePath: res.tempFilePath })
        }
      },
      complete() {
        wx.setStorageSync('patientFilePath', that.data.tempFilePath)
      }
    })
    // wx.request({
    //   url: app.globalData.url + 'mocaAnswer/',
    //   data: e.currentTarget.dataset.index,
    //   method: 'GET',
    //   header: {
    //     'content-type': 'application/json',
    //     'Cookie': wx.getStorageSync('cookieKey')
    //   },
    //   success(res){
    //     if (res.statusCode === 200) {
    //       wx.navigateTo({
    //         url: '../mocaDiagnosisShow/mocaDiagnosisShow'
    //       })
    //     }
    //   }
    // })
    wx.navigateTo({
            url: '../mocaDiagnosisShow/mocaDiagnosisShow'
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
