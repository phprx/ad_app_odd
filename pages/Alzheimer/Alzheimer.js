// pages/Alzheimer/Alzheimer.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_MOCA:false,
    show_AI:false,
    isLogin: false
  },

  show:function(e){
    if (e.currentTarget.dataset.index == "1"){
      try {
        var value = wx.getStorageSync('isLogin')
        if (value == '' || value == false) {
          wx.showModal({
            title: '您还未登录',
            content: '请进入我的界面进行登录',
            confirmText: '去登陆',
            success(res) {
              if (res.confirm) {
                wx.switchTab({
                  url: '../My_page/My_page',
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else{
          this.setData({ show_MOCA: !this.data.show_MOCA, isLogin:value})
        }
      } catch (e) {
        console.log('get error')
      }
    }
    else if (e.currentTarget.dataset.index == "2"){
      this.setData({ });
      try {
        var value = wx.getStorageSync('isLogin')
        if (value == '' || value == false) {
          wx.showModal({
            title: '您还未登录',
            content: '请进入我的界面进行登录',
            confirmText:'去登陆',
            success(res) {
              if (res.confirm) {
                wx.switchTab({
                  url: '../My_page/My_page',
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else {
          this.setData({ show_AI: !this.data.show_AI, isLogin: value })
        }
      } catch (e) {
        console.log('get error')
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.setStorageSync('isLogin', false)
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