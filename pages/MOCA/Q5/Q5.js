// pages/MOCA/Q5/Q5.js
const recorderManager = wx.getRecorderManager()
const options = {
  duration: 100000, //指定录音的时长，单位 ms
  sampleRate: 16000, //采样率
  numberOfChannels: 1, //录音通道数
  encodeBitRate: 96000, //编码码率
  format: 'mp3', //音频格式，有效值 aac/mp3
  frameSize: 50, //指定帧大小，单位 KB
}
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    restTime: '60.00',
    show5_1: true,
    show5_2: false,
    show5_3: false,
    isBegin: false,
    tempFilePath: '',
  },
  help5_1: function(e) {
    wx.showModal({
      title: '第一题指导',
      content: '点击“播放”，仔细听。播完后，请按“开始录音”，并重复你听到的句子。结束请按“结束录音”。',
    })
  },
  help5_2: function(e) {
    wx.showModal({
      title: '第二题指导',
      content: '点击“播放”，仔细听。播完后，请按“开始录音”，并重复你听到的句子。结束请按“结束录音”。',
    })
  },
  help5_3: function(e) {
    wx.showModal({
      title: '第三题指导',
      content: '在一分钟内尽可能多的说出动物的名字。点击“开始录音”开始倒计时。',
    })
  },

  back5_1: function(e) {
    if (!this.data.isBegin) {
      wx.navigateBack({
        delta: 1
      })
    } else {
      wx.showToast({
        title: '您还未停止录音',
        icon: 'none'
      })
    }
  },
  back5_2: function(e) {
    if (!this.data.isBegin) {
      this.setData({
        show5_1: true,
        show5_2: false,
        show5_3: false
      })
    } else {
      wx.showToast({
        title: '您还未停止录音',
        icon: 'none'
      })
    }
  },
  back5_3: function(e) {
    var that = this
    if (this.data.restTime == "0.00") {
      recorderManager.onStop((res) => {
        console.log('停止录音', res.tempFilePath)
        that.setData({
          tempFilePath: res.tempFilePath
        })
      })
      recorderManager.stop(options)
      this.setData({
        show5_1: false,
        show5_2: true,
        show5_3: false
      })
    }
    else if (this.data.restTime == "60.00") {
      this.setData({
        show5_1: false,
        show5_2: true,
        show5_3: false
      })
      wx.setStorageSync('5-3', '')
    } else {
      wx.showModal({
        title: '提示',
        content: '是否结束录音',
        success(res) {
          if (res.confirm) {
            that.setData({
              restTime: '0.00',
              isBegin: false
            })
            recorderManager.stop(options)
          }
        }
      })

    }
  },

  stopEarly: function() {
    var that = this
    if (this.data.restTime == "0.00") {
      recorderManager.onStop((res) => {
        console.log('停止录音', res.tempFilePath)
        that.setData({
          tempFilePath: res.tempFilePath
        })
      })
      recorderManager.stop(options)
    } else {
      wx.showModal({
        title: '提示',
        content: '是否结束录音',
        success(res) {
          
          if (res.confirm) {
            recorderManager.onStop((res) => {
              console.log('停止录音', res.tempFilePath)
              that.setData({
                restTime: '0.00',
                isBegin: false,
                tempFilePath: res.tempFilePath
              })
            })
            recorderManager.stop(options)
          }
        }
      })
    }
  },
  next5_1: function(e) {
    if (!this.data.isBegin) {
      this.setData({
        show5_1: false,
        show5_2: true,
        show5_3: false
      })
      wx.setStorageSync('5-1', this.data.tempFilePath)
    } else {
      wx.showToast({
        title: '您还未停止录音',
        icon: 'none'
      })
    }
  },
  next5_2: function(e) {
    if (!this.data.isBegin) {
      this.setData({
        show5_1: false,
        show5_2: false,
        show5_3: true
      })
      wx.setStorageSync('5-2', this.data.tempFilePath)
    } else {
      wx.showToast({
        title: '您还未停止录音',
        icon: 'none'
      })
    }
  },
  next5_3: function(e) {
    var that = this
    if (this.data.restTime == "0.00") {
      recorderManager.onStop((res) => {
        console.log('停止录音', res.tempFilePath)
        that.setData({
          tempFilePath: res.tempFilePath
        })
      })
      recorderManager.stop(options)
      wx.setStorageSync('5-3', that.data.tempFilePath)
      wx.navigateTo({
        url: '../Q6/Q6',
      })
    }
    else if (this.data.restTime == "60.00") {
      wx.setStorageSync('5-3', '')
      wx.navigateTo({
        url: '../Q6/Q6',
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '是否结束录音',
        success(res) {
          if (res.confirm) {
            that.setData({
              restTime: '0.00',
              isBegin: false
            })
            recorderManager.onStop((res) => {
              console.log('停止录音', res.tempFilePath)
              that.setData({
                tempFilePath: res.tempFilePath
              })
            })
            recorderManager.stop(options)
            wx.setStorageSync('5-3', that.data.tempFilePath)
          }
        }
      })

    }
  },
  startRecord: function() {
    this.setData({
      isBegin: true
    })
    recorderManager.start(options)
    recorderManager.onStart(() => {
      console.log('recorder start')
    })
  },
  stopRecord: function() {
    this.setData({
      isBegin: false
    })
    recorderManager.onStop((res) => {
      console.log('停止录音', res.tempFilePath)
      this.setData({
        tempFilePath: res.tempFilePath
      })
    })
    recorderManager.stop(options)
  },
  startTimeRecord: function() {
    if (this.data.restTime != '0.00' && this.data.isBegin == false) {
      this.setData({
        isBegin: true
      })
      recorderManager.start(options)
      recorderManager.onStart(() => {
        console.log('recorder start')
      })
      this.setTimeCount()
    }
  },
  setTimeCount: function() {
    let time = this.data.restTime
    time -= 0.01;
    if (time <= 0) {
      time = 0;
    } else if (time > 0 && this.data.isBegin == true) {
      time = time.toFixed(2)
      this.setData({
        restTime: time
      })
      setTimeout(this.setTimeCount, 10);
    }
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
    this.setData({
      restTime: '60.00'
    })
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