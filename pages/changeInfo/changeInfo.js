// pages/changeInfo/changeInfo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '病人', value: 'patient', checked: 'true' },
      { name: '护理', value: 'paramedic' },
      { name: '医生', value: 'doctor' },
    ],
    gender:[
      { name: '男', value: '男', checked: 'true' },
      { name: '女', value: '女' }
    ],
    listData: [{ name: '123', birthday:'1990-12-01',id:'01'},{}],
    multiIndex: [0, 0, 0],
    date: '1970-07-01',
    showParamedic:false,
    patientId:''
  },
  formSubmit: function (e) {
    if (this.data.patientId != ''){
    e.detail.value.patientId = this.data.patientId
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var that = this
    wx.showModal({
      title: '',
      content: '是否确认提交',
      success: function () {
        wx.request({
          url: app.globalData.url + 'modify/',
          data: e.detail.value,
          method: 'GET',
          header: {
            'content-type': 'application/json',
            'Cookie': wx.getStorageSync('cookieKey')
          },
          success: function (res) {
            if (res.statusCode == 200) {
              wx.setStorageSync('role', e.detail.value.role)
              wx.navigateBack({
                delta: 1
              })
            }
          },
        })
      }
    })
    }
    else{
      wx.showModal({
        title: '提示',
        content: '您还没有绑定病人',
      })
    }
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  radioChange: function (e) {
    if (e.detail.value == 'paramedic'){
      this.setData({ showParamedic: true }) 
    }
    else{
      this.setData({ showParamedic: false }) 
    }
  },
  bindPatient:function(e){
    console.log(e)
    var that = this
    wx.showModal({
      title: '提示',
      content: '您确定绑定这个病人么',
      success(res){
        if (res.confirm)
          that.setData({ showParamedic: false ,patientId: e.currentTarget.dataset.index}) 
      }
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