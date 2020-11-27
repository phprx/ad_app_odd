// pages/AI_diagnosis/AI_MRI_report/AI_MRI_report.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths:'',
    tempFilecontent:'',
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.showToast({
      title: 'AI模型正在诊断',
      icon: 'loading',
      duration: 7500
    })
    wx.request({
      url: app.globalData.url + 'AI_report/',
      data: {text : e.detail.value},
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
        else{
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
  chooseFile:function(){
    var that = this
    wx.chooseMessageFile({
      count:1,
      type:'file',
      success(res){
        var tempFiles = res.tempFiles[0]
        console.log(tempFiles.path)
        wx.uploadFile({
          url: app.globalData.url + 'report_content/', 
          filePath: tempFiles.path,
          header: {
            'content-type': 'multipart/form-data',
            'Cookie': wx.getStorageSync('cookieKey')
          },
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            that.setData({ tempFilecontent: res.data})
            console.log(that.data.tempFilecontent)
            //do something
          },

        })
      },
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