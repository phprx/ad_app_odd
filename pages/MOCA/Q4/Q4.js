// pages/MOCA/Q4/Q4.js
const app = getApp();
const recorderManager = wx.getRecorderManager()
const options = {
  duration: 100000, //指定录音的时长，单位 ms
  sampleRate: 16000, //采样率
  numberOfChannels: 1, //录音通道数
  encodeBitRate: 96000, //编码码率
  format: 'mp3', //音频格式，有效值 aac/mp3
  frameSize: 50, //指定帧大小，单位 KB
}
const playlist1 = ["/assets/moca/2.mp3", "/assets/moca/1.mp3", "/assets/moca/8.mp3", "/assets/moca/5.mp3", "/assets/moca/4.mp3"];
const playlist2 = ["/assets/moca/7.mp3", "/assets/moca/4.mp3", "/assets/moca/2.mp3"];
const playlist3 = ["/assets/moca/5.mp3", "/assets/moca/2.mp3", "/assets/moca/1.mp3", "/assets/moca/3.mp3", "/assets/moca/9.mp3", "/assets/moca/4.mp3", "/assets/moca/1.mp3", "/assets/moca/1.mp3", "/assets/moca/8.mp3", "/assets/moca/0.mp3", "/assets/moca/6.mp3", "/assets/moca/2.mp3", "/assets/moca/1.mp3", "/assets/moca/5.mp3", "/assets/moca/1.mp3", "/assets/moca/9.mp3", "/assets/moca/4.mp3", "/assets/moca/5.mp3", "/assets/moca/1.mp3", "/assets/moca/1.mp3", "/assets/moca/1.mp3", "/assets/moca/4.mp3", "/assets/moca/1.mp3", "/assets/moca/9.mp3", "/assets/moca/0.mp3", "/assets/moca/5.mp3", "/assets/moca/1.mp3", "/assets/moca/1.mp3", "/assets/moca/2.mp3"];
var count1 = 1;
var count2 = 1;
var count3 = 1;
var taplist= [0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0]
var usertap= [0]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show4_1: true,
    show4_2: false,
    show4_3: false,
    show4_4: false,
    isBegin: false,
    playitem1: '/assets/moca/2.mp3',
    playitem2: '/assets/moca/7.mp3',
    playitem3: '/assets/moca/5.mp3',
    answer1: 0,
    answer2: 0,
    answer3: 0,
    answer4: 0,
    answer5: 0,
    tapcount:0
  },
  help4_1: function(e) {
    wx.showModal({
      title: '第一题指导',
      content: '点击“播放”，仔细听一组数字。播放结束后，按“开始录音”，并背诵这组数字。',
    })
  },
  help4_2: function(e) {
    wx.showModal({
      title: '第二题指导',
      content: '点击“播放”，仔细听一组数字。播放结束后，按“开始录音”，并倒着背诵这组数字。',
    })
  },
  help4_3: function(e) {
    wx.showModal({
      title: '第三题指导',
      content: '点击“播放”，仔细听一组数字。每当读到１的时候，您就按一下灰色方块按钮；当读到其他的数字时则不需要动作。',
    })
  },
  help4_4: function(e) {
    wx.showModal({
      title: '第四题指导',
      content: '100连续减7。',
    })
  },
  back4_1: function(e) {
    
    if (!this.data.isBegin && (count1 == 1 || count1 >= playlist1.length)) {
      wx.navigateBack({
        delta: 1
      })
      
      this.setData({playitem1: playlist1[0], playitem2: playlist2[0], playitem3: playlist3[0]})
      if (count1 == 1) {
        wx.setStorageSync('4-1', '')
      }
      else {
        wx.setStorageSync('4-1', this.data.tempFilePath)
        count1 = 1;
        count2 = 1;
        count3 = 1;
      }
    } else {
      wx.showToast({
        title: '您还未停止录音',
        icon: 'none'
      })
    }
  },
  back4_2: function(e) {
    
    if (!this.data.isBegin && (count2==1||count2 >= playlist2.length)) {
      this.setData({
        show4_1: true,
        show4_2: false,
        show4_3: false,
        show4_4: false, playitem1: playlist1[0], playitem2: playlist2[0], playitem3: playlist3[0]
      })
      if (count2 == 1) {
        wx.setStorageSync('4-2', '')
      }
      else {
        wx.setStorageSync('4-2', this.data.tempFilePath)
        count1 = 1;
        count2 = 1;
        count3 = 1;
      }
      
    } else {
      wx.showToast({
        title: '您还未停止录音',
        icon: 'none'
      })
    }
  },
  back4_3: function(e) {
    if (count3 >= playlist3.length) {
      count1 = 1;
      count2 = 1;
      count3 = 1;
      var tapresult = 0
      for (var i = 0; i < playlist3.length; i++) {
        if (playlist3[i] == taplist[i]) {
          tapresult++
      }
      wx.setStorageSync('4-3', tapresult)
      this.setData({
        show4_1: false,
        show4_2: true,
        show4_3: false,
        show4_4: false, playitem1: playlist1[0], playitem2: playlist2[0], playitem3: playlist3[0]
      })
    }
    }
    else {
      wx.setStorageSync('4-3', '')
      this.setData({
        show4_1: false,
        show4_2: true,
        show4_3: false,
        show4_4: false, playitem1: playlist1[0], playitem2: playlist2[0], playitem3: playlist3[0]
      })
    }
  },
  back4_4: function(e) {
    count1 = 1;
    count2 = 1;
    count3 = 1;
    this.setData({ playitem1: playlist1[0], playitem2: playlist2[0], playitem3: playlist3[0]})
    this.setData({
      show4_1: false,
      show4_2: false,
      show4_3: true,
      show4_4: false
    })
  },

  next4_1: function(e) {
    if (!this.data.isBegin && (count1 == 1 || count1 >= playlist1.length)) {
      this.setData({
        show4_1: false,
        show4_2: true,
        show4_3: false,
        show4_4: false, playitem1: playlist1[0], playitem2: playlist2[0], playitem3: playlist3[0]
      })

      if(count1 == 1){
        wx.setStorageSync('4-1', '')
      }
      else { 
        wx.setStorageSync('4-1', this.data.tempFilePath)
        count1 = 1;
        count2 = 1;
        count3 = 1;
      }
    } else {
      wx.showToast({
        title: '您还未停止录音',
        icon: 'none'
      })
    }
  },
  next4_2: function(e) {

    if (!this.data.isBegin && (count2 == 1 || count2 >= playlist2.length)) {
      this.setData({
        show4_1: false,
        show4_2: false,
        show4_3: true,
        show4_4: false, playitem1: playlist1[0], playitem2: playlist2[0], playitem3: playlist3[0]
      })

      if (count2 == 1) {
        wx.setStorageSync('4-2', '')
      }
      else {
        wx.setStorageSync('4-2', this.data.tempFilePath) 
        count1 = 1;
        count2 = 1;
        count3 = 1;
      }
    } else {
      wx.showToast({
        title: '您还未停止录音',
        icon: 'none'
      })
    }
  },
  next4_3: function(e) {
    var that = this
    if (count3 >= playlist3.length){
      count1 = 1;
      count2 = 1;
      count3 = 1;
      var tapresult = 0
      for(var i=0;i<playlist3.length;i++){
        if(taplist[i] != usertap[i]){
          tapresult++
        }
      }
      wx.setStorageSync('4-3', tapresult)
      this.setData({
        show4_1: false,
        show4_2: false,
        show4_3: false,
        show4_4: true, playitem1: playlist1[0], playitem2: playlist2[0], playitem3: playlist3[0]
      })
    }
    else{
      wx.setStorageSync('4-3', '')
      this.setData({
        show4_1: false,
        show4_2: false,
        show4_3: false,
        show4_4: true, playitem1: playlist1[0], playitem2: playlist2[0], playitem3: playlist3[0]
      })
    }

  },
  next4_4: function(e) {
    var temp = [this.data.answer1, this.data.answer2, this.data.answer3, this.data.answer4, this.data.answer5]
    wx.setStorageSync('4-4', temp)
    wx.navigateTo({
      url: '../Q5/Q5',
    })
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
  answer1: function(e) {
    this.setData({
      answer1: e.detail.value
    })
  },
  answer2: function(e) {
    this.setData({
      answer2: e.detail.value
    })
  },
  answer3: function(e) {
    this.setData({
      answer3: e.detail.value
    })
  },
  answer4: function(e) {
    this.setData({
      answer4: e.detail.value
    })
  },
  answer5: function(e) {
    this.setData({
      answer5: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  audioStart1: function() {
    var that = this
    if (count1 < playlist1.length) {

      setTimeout(function() {
        if (count1 < playlist1.length) {
          that.setData({
            playitem1: playlist1[count1]
          })
          that.audioCtx1.play()
          that.audioCtx1.seek(0)
          count1++
        } else {
          that.audioCtx1.pause()
          return
        }
      }, 2000)
    }
  },
  audioStart2: function() {
    var that = this
    if (count2 < playlist2.length) {

      setTimeout(function() {
        if (count2 < playlist2.length) {
          that.setData({
            playitem2: playlist2[count2]
          })
          that.audioCtx2.play()
          that.audioCtx2.seek(0)
          count2++
        } else {
          that.audioCtx2.pause()
          return
        }
      }, 2000)
    }
  },
  audioStart3: function() {
    usertap[0]=0
    var that = this
    if (count3 < playlist3.length) {
      setTimeout(function() {
        usertap.push(0)
        if (count3 < playlist3.length) {
          that.setData({
            playitem3: playlist3[count3],
            tapcount: usertap.length
          })
          that.audioCtx3.play()
          that.audioCtx3.seek(0)
          count3++
        } else {
          that.audioCtx3.pause()
          return
        }
      }, 2000)
    }
  },
  btntap:function(){
    usertap.pop()
    usertap.push(1)
    console.log(usertap)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.audioCtx1 = wx.createAudioContext('audio1')
    this.audioCtx2 = wx.createAudioContext('audio2')
    this.audioCtx3 = wx.createAudioContext('audio3')
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