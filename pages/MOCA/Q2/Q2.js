// pages/MOCA/Q1-1/Q1-1.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show2_1: true,
    show2_2: false,
    show2_3: false,
    value: '',
  },

  help2_1: function (e) {
    wx.showModal({
      title: '第一题指导',
      content: '请写出这个动物的名字。',
    })
  },
  help2_2: function (e) {
    wx.showModal({
      title: '第二题指导',
      content: '请写出这个动物的名字。',
    })
  },
  help2_3: function (e) {
    wx.showModal({
      title: '第三题指导',
      content: '请写出这个动物的名字。',
    })
  },
  back2_1: function (e) {
    wx.navigateBack({
      delta: 1
    })
  },
  back2_2: function (e) {
    this.setData({ show2_1: true, show2_2: false, show2_3: false })
  },
  back2_3: function (e) {
    this.setData({ show2_1: false, show2_2: true, show2_3: false })
  },

  next2_1: function (e) {
    this.setData({ show2_1: false, show2_2: true, show2_3: false })
    wx.setStorageSync('2-1', this.data.value)
  },
  next2_2: function (e) {
    wx.setStorageSync('2-2', this.data.value)
    this.setData({ show2_1: false, show2_2: false, show2_3: true })
  },
  next2_3: function (e) {
    wx.setStorageSync('2-3', this.data.value)
    wx.navigateTo({
      url: '../Q3/Q3',
    })
  },
  input2_1: function (e) {
    this.setData({value: e.detail.value})
  },
  input2_2: function (e) {
    this.setData({ value: e.detail.value })
  },
  input2_3: function (e) {
    this.setData({ value: e.detail.value })
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