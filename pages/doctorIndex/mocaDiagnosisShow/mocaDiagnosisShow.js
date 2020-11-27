// pages/doctorIndex/mocaDiagnosisShow/mocaDiagnosisShow.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePath:'',
    itemType: [
      { name: '1-1', value: '身体的一部分' },
      { name: '1-2', value: '一种纤维',checked: "true" },
      { name: '1-3', value: '一种建筑物' },
      { name: '1-4', value: '一种花' },
      { name: '1-5', value: '一种颜色' }
    ],
    itemMulti: [
      { name: '2-1', value: '大腿, 面孔, 手' },
      { name: '2-2', value: '尼龙, 天鹅绒, 棉' },
      { name: '2-3', value: '教堂, 学校, 公园' },
      { name: '2-4', value: '玫瑰, 雏菊, 郁金香' },
      { name: '2-5', value: '红色, 黄色, 白色' },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({tempFilePath:wx.getStorageSync('patientFilePath')})
  },

  submit: function () {
    wx.showModal({
      title: '提示',
      content: '确定提交',
      success(res){
        if(res.confirm){
          wx.navigateBack({
            
          })
        }
      }

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