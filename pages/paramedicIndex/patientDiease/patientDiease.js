// pages/patientIndex/myDiease/myDiease.js
var util = require('../../../utils/util.js')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '', value: '短暂失忆' },
      { name: '', value: '时间感知障碍和方向感迷失', checked: 'true' },
      { name: '', value: '焦虑' },
      { name: '', value: '大小便失禁' },
      { name: '', value: '身体僵硬' },
    ],
    multiIndex: [0, 0, 0],
    initDate: '2000-07-01',
    todayDate: ''
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.showModal({
      title: '',
      content: '是否确认提交',
      success:function(){
        wx.request({
          url: app.globalData.url + 'patientMyDiease/',
          data: e.detail.value,
          method: 'GET',
          header: {
            'content-type': 'application/json',
            'Cookie': wx.getStorageSync('cookieKey')
          },
          success: function (res) {
            if (res.statusCode == 200) {
              wx.showModal({
                title: '',
                content: '记录成功',
              })
            }
            else {
              wx.showModal({
                title: '',
                content: '记录失败，请重试',
              })
            }
          },
        })
      }
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var TIME = util.formatTime(new Date());
    this.setData({
      todayDate: TIME,
    });
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