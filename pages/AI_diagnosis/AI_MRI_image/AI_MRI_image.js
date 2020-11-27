// pages/AI_diagnosis/AI_MRI_image/AI_MRI_image.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    axialFilePaths: '',
    sagittalFilePaths: '',
    coronalFilePaths: ''
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.showToast({
      title: 'AI模型正在诊断',
      icon: 'loading',
      duration: 3000
    })
    wx.request({
      url: app.globalData.url + 'AI_image/',
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
  choose_axialimage:function(){
    var _this = this;
    wx.chooseImage({
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(res)
        _this.setData({
          axialFilePaths: res.tempFilePaths
        })
      }
    })
  },
  choose_sagittalimage: function () {
    var _this = this;
    wx.chooseImage({
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(res)
        _this.setData({
          sagittalFilePaths: res.tempFilePaths
        })
      }
    })
  },
  choose_coronalimage: function () {
    var _this = this;
    wx.chooseImage({
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(res)
        _this.setData({
          coronalFilePaths: res.tempFilePaths
        })
      }
    })
  },
  // 返回的是图片在本地的路径.如果需要将图片上传到服务器,需要用到另一个API.
  // wx.chooseImage({
  //   success: function (res) {
  //     var tempFilePaths = res.tempFilePaths
  //     wx.uploadFile({
  //       url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
  //       filePath: tempFilePaths[0],
  //       name: 'file',
  //       formData: {
  //         'user': 'test'
  //       },
  //       success: function (res) {
  //         var data = res.data
  //         //do something
  //       }
  //     })
  //   }
  // })

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