// pages/MOCA/Q3/Q3.js
const recorderManager = wx.getRecorderManager()
const options = {
  duration: 100000,//指定录音的时长，单位 ms
  sampleRate: 16000,//采样率
  numberOfChannels: 1,//录音通道数
  encodeBitRate: 96000,//编码码率
  format: 'mp3',//音频格式，有效值 aac/mp3
  frameSize: 50,//指定帧大小，单位 KB
}
const app = getApp();
const playlist = ["/assets/moca/8.1/face.mp3", "/assets/moca/8.1/velvet.mp3", "/assets/moca/8.1/church.mp3", "/assets/moca/8.1/daisy.mp3", "/assets/moca/8.1/red.mp3"]
var count = 1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemType: [
      { name: '1-1', value:'身体的一部分'},
      { name: '1-2', value:'一种纤维'},
      { name: '1-3', value: '一种建筑物' },
      { name: '1-4', value: '一种花' },
      { name: '1-5', value: '一种颜色' }
      ],
    itemMulti:[
      { name: '2-1', value:'大腿, 面孔, 手'},
      { name: '2-2', value: '尼龙, 天鹅绒, 棉' },
      { name: '2-3', value: '教堂, 学校, 公园' },
      { name: '2-4', value: '玫瑰, 雏菊, 郁金香' },
      { name: '2-5', value: '红色, 黄色, 白色' },
    ],
    show3_1: true,
    show3_2: false,
    showType: false,
    showMulti: false,
    isBegin: false,
    checkboxValue1: [],
    checkboxValue2: [],
    tempFilePath:'',
    playitem:'/assets/moca/8.1/face.mp3'
  },

  showType:function(){
    this.setData({ showType: !this.data.showType })
  },
  showMulti: function () {
    this.setData({ showMulti: !this.data.showMulti })
  },
  help3_1: function (e) {
    wx.showModal({
      title: '第一题指导',
      content: '这是一个记忆力测验。点击“播放”，仔细听一组词语，并尽量记住。当播放结束后，按“开始录音”键，重复您记住的单词，但不必按照它们的播放顺序。结束请按“停止录音”。在所有测试的最后，您还需要再试一次。',
    })
  },
  help3_2: function (e) {
    wx.showModal({
      title: '第二题指导',
      content: '之前的检查中，您被要求记住一组词语。现在请您复述它们，能记得几个就说几个。按“开始录音”后开始。如果您不记得某些词语，请点击屏幕上的提示。如果您在某个提示下回忆起了某个词语，请在该提示前打勾。',
    })
  },
  back3_1: function (e) {
    if (!this.data.isBegin && (count == 1 || count >= playlist.length) ) {
      wx.navigateBack({
        delta: 1
      })
      this.setData({playitem:playlist[0]})
      if (count == 1) {
        wx.setStorageSync('3-1', '')
      }
      else{
        wx.setStorageSync('3-1', this.data.tempFilePath)
        count = 1
      }
    }
    else {
      wx.showToast({
        title: '您还未停止录音',
        icon: 'none'
      })
    }
  },
  back3_2: function (e) {
    
    if (!this.data.isBegin) {
      this.setData({ show3_1: true, show3_2: false })
    }
    else {
      wx.showToast({
        title: '您还未停止录音',
        icon: 'none'
      })
    }
  },

  next3_1: function (e) {
    if (!this.data.isBegin && (count == 1 || count >= playlist.length)){
      this.setData({ show3_1: false, show3_2: true, playitem: playlist[0]})
      if (count == 1) {
        wx.setStorageSync('3-1', '')
      }
      else {
        wx.setStorageSync('3-1', this.data.tempFilePath)
        count = 1;
      }
      // wx.uploadFile({
      //   url: app.globalData.url + 'audioTest/',
      //   filePath: this.data.tempFilePath,
      //   header: {
      //     'content-type': 'multipart/form-data',
      //     'Cookie': wx.getStorageSync('cookieKey')
      //   },
      //   formData: {
      //     'user': 'test'
      //   },
      //   name: '3-1',
      // })
    }
    else{
      wx.showToast({
        title: '您还未停止录音',
        icon:'none'
      })
    }
  },
  next3_2: function (e) {
    if (!this.data.isBegin) {
      wx.navigateTo({
        url: '../Q4/Q4',
      })
      wx.setStorageSync('3-2', this.data.tempFilePath)
      var checkbox = this.data.checkboxValue1.concat(this.data.checkboxValue2)
      wx.setStorageSync('3-2checkbox', checkbox)
    }
    else {
      wx.showToast({
        title: '您还未停止录音',
        icon: 'none'
      })
    }
  },
  startRecord:function(){
    this.setData({isBegin: true})
    recorderManager.start(options)
    recorderManager.onStart(() => {
      console.log('recorder start')
    })
  },
  stopRecord:function(){
    this.setData({ isBegin: false })
    recorderManager.onStop((res) => {
      console.log('停止录音', res.tempFilePath)
      this.setData({ tempFilePath: res.tempFilePath})
    })
    recorderManager.stop(options)
  },
  checkboxChange1: function (e) {
    this.setData({checkboxValue1: e.detail.value})
  },
  checkboxChange2: function (e) {
    this.setData({ checkboxValue2: e.detail.value})
  },
  audioStart: function () {
    var that = this
    if (count < playlist.length) {

      setTimeout(function () {
        if (count < playlist.length) {
          that.setData({
            playitem: playlist[count]
          })
          that.audioCtx.play()
          that.audioCtx.seek(0)
          count++
        } else {
          that.audioCtx.pause()
          return
        }
      }, 2000)
    }
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
    this.audioCtx = wx.createAudioContext('audio')
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