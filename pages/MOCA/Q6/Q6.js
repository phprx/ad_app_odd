// pages/MOCA/Q6/Q6.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answer1: '',
    answer2: '',
    answer3: '',
  },
  help6_1: function(e) {
    wx.showModal({
      title: '第一题指导',
      content: '解释每一对词语的相似之处。比方说，“香蕉”和“桔子”都属于水果。',
    })
  },
  back6_1: function(e) {
    wx.navigateBack({
      delta: 1
    })
  },

  next6_1: function(e) {
    var answer = [this.data.answer1, this.data.answer2, this.data.answer3]
    wx.setStorageSync('6-1', answer)
    wx.navigateTo({
      url: '../Q7/Q7',
    })
  },
  answerHandle1: function(e) {
    this.setData({
      answer1: e.detail.value
    })
  },
  answerHandle2: function(e) {
    this.setData({
      answer2: e.detail.value
    })
  },
  answerHandle3: function(e) {
    this.setData({
      answer3: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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