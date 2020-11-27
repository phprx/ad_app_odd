// pages/AI_diagnosis/AI_scale2/AI_scale2.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showFirsttime: true,
    showSecondtime: false,
    multiIndex: [0, 0, 0],
    date1: '2000-07-01',
    date2: '2000-07-01',
    
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.showToast({
      title: 'AI模型正在诊断',
      icon: 'loading',
    })
    wx.request({
      url: app.globalData.url + 'AI_scale2/',
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
            content: res.data.result,
          })
        }
        else {
          wx.showModal({
            title: '',
            content: '分析失败，请重试',
          })
        }
      },
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  show: function (e) {
    if (e.currentTarget.dataset.index == "1")
      this.setData({ showFirsttime: !this.data.showFirsttime });
    else if (e.currentTarget.dataset.index == "2")
      this.setData({ showSecondtime: !this.data.showSecondtime });
  },
  bindDateChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date1: e.detail.value
    })
  },
  bindDateChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date2: e.detail.value
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