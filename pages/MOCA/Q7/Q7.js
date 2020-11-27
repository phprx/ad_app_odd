// pages/MOCA/Q7/Q7.js
const app = getApp();
function uploadFile(fileTemp, NUMBER) {
  console.log(fileTemp)
  wx.uploadFile({
    url: app.globalData.url + 'mutifile/',
    filePath: fileTemp[NUMBER],
    name: 'file',
    header: {
            'content-type': 'multipart/form-data',
            'Cookie': wx.getStorageSync('cookieKey')
    },
    formData: {
      //上传数据
      'NUMBER': NUMBER
    },
    success(res) {
      console.log(res);
      if (NUMBER + 1 == fileTemp.length) {
        wx.request({
          url: app.globalData.url + 'mutifile/',
          method: 'GET',
          data: {
            '2-1': wx.getStorageSync('2-1'),
            '2-2': wx.getStorageSync('2-2'),
            '2-3': wx.getStorageSync('2-3'),
            '3-2checkbox': wx.getStorageSync('3-2checkbox'),
            '4-3': wx.getStorageSync('4-3'),
            '4-4': wx.getStorageSync('4-4'),
            '6-1': wx.getStorageSync('6-1'),
            '7-1': wx.getStorageSync('7-1')
          },
          header: {
            'content-type': 'application/json',
            'Cookie': wx.getStorageSync('cookieKey')
          },
        })
        wx.showModal({
          title: '提示',
          content: '提交成功',
        })
      } else {
        uploadFile(fileTemp, NUMBER + 1);
      }
    }
  })
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
    answer6: '',
  },
  help7_1: function (e) {
    wx.showModal({
      title: '第一题指导',
      content: '输入今天的日期信息、你在什么地方和所处的城市。',
    })
  },
  back7_1: function (e) {
    wx.navigateBack({
      delta: 1
    })
  },
  stop: function (e) {
    var answer = [this.data.answer1, this.data.answer2, this.data.answer3, this.data.answer4, this.data.answer5, this.data.answer6]
    wx.setStorageSync('7-1', answer)
    if (wx.getStorageSync('isPatient') == true){
      uploadFile([wx.getStorageSync('1-1'), wx.getStorageSync('1-2'), wx.getStorageSync('1-3'), wx.getStorageSync('3-1'),
      wx.getStorageSync('3-2'), wx.getStorageSync('4-1'), wx.getStorageSync('4-2'), wx.getStorageSync('5-1'),
      wx.getStorageSync('5-2'), wx.getStorageSync('5-3')], 0)
    }
    else{
      setTimeout(function () {
        // 这里就是处理的事件
        wx.showModal({
          title: '提示',
          content: '您不是患者，提交失败',
        })
      }, 500);
    }
    wx.navigateBack({
      delta: 9
    })
  },
  answerHandle1: function (e) {
    this.setData({
      answer1: e.detail.value
    })
  },
  answerHandle2: function (e) {
    this.setData({
      answer2: e.detail.value
    })
  },
  answerHandle3: function (e) {
    this.setData({
      answer3: e.detail.value
    })
  },
  answerHandle4: function (e) {
    this.setData({
      answer4: e.detail.value
    })
  },
  answerHandle5: function (e) {
    this.setData({
      answer5: e.detail.value
    })
  },
  answerHandle6: function (e) {
    this.setData({
      answer6: e.detail.value
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