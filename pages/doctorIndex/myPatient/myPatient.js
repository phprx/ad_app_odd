// pages/doctorIndex/myPatient/myPatient.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: {
      "id": "病人openid",
      "name": "病人名称",
      "gender": "病人性别",
      "age": "病人年龄",
      "dieaseHistory": "查看病史"
    },
    listData: [
    {
      "id": "01",
      "type1": "type1",
      "type2": "type1",
      "type3": "type1",
      "type4": "查看"
    },
    {
      "id": "02",
      "type1": "type1",
      "type2": "type1",
      "type3": "type1",
      "type4": "查看"
    },
    {
      "id": "03",
      "type1": "type1",
      "type2": "type1",
      "type3": "type1",
      "type4": "查看"
    },
    {
      "id": "04",
      "type1": "type1",
      "type2": "type1",
      "type3": "type1",
      "type4": "查看"
    },
    {
      "id": "05",
      "type1": "type1",
      "type2": "type1",
      "type3": "type1",
      "type4": "查看"
    }
    ]
  },
  showPatientDieaseHistory:function(e){
    wx.setStorageSync('patientOpenid', e.currentTarget.dataset.index)
    wx.navigateTo({
      url: '../patientDieaseHistory/patientDieaseHistory',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.globalData.url + 'myPatientInfo/',
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