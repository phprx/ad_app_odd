// pages/MOCA/Q1-3/Q1-3.js
var context = null; // 使用 wx.createContext 获取绘图上下文 context
var isButtonDown = false; //是否在绘制中
var arrx = []; //动作横坐标
var arry = []; //动作纵坐标
var arrz = []; //总做状态，标识按下到抬起的一个组合
var canvasw = 0; //画布宽度
var canvash = 0; //画布高度
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //canvas宽高
    canvasw: 0,
    canvash: 0,
    //canvas生成的图片路径
    canvasimgsrc: ""
  },
  help: function (e) {
    wx.showModal({
      title: '第三题指导',
      content: '请您在此处画一个钟表，填上所有的数字并指示出11点10分。',
      showCancel: false
    })
  },
  back: function (e) {
    this.cleardraw()
    wx.navigateBack({
      delta:1
    })
  },
  next: function (e) {
    var that = this;
    if (arrx.length == 0) {
      wx.showModal({
        title: '提示',
        content: '您还未答题哟',
        showCancel: false
      })
    } else {
      console.log("不是空的，canvas即将生成图片")
      //生成图片
      wx.canvasToTempFilePath({
        canvasId: 'canvas',
        success: function (res) {
          console.log("canvas可以生成图片")
          console.log(res.tempFilePath, 'canvas图片地址');
          that.setData({
            canvasimgsrc: res.tempFilePath
          })
          wx.setStorageSync('1-3', res.tempFilePath)
        },
        fail: function () {
          console.log("canvas不可以生成图片")
          wx.showModal({
            title: '提示',
            content: '微信当前版本不支持，请更新到最新版本！',
            showCancel: false
          });
        },
        complete: function () {
          that.cleardraw()
        }
      })
      wx.navigateTo({
        url: '../Q2/Q2',
      })
    }
  },

  startCanvas: function () {
    var that = this;
    //创建canvas
    this.initCanvas();
    //获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        canvasw = res.windowWidth - 0; //设备宽度
        canvash = canvasw;
        that.setData({
          'canvasw': canvasw
        });
        that.setData({
          'canvash': canvash
        });
      }
    });

  },
  //初始化函数
  initCanvas: function () {
    // 使用 wx.createContext 获取绘图上下文 context
    context = wx.createCanvasContext('canvas');
    context.beginPath()
    context.setStrokeStyle('#000000');
    context.setLineWidth(4);
    context.setLineCap('round');
    context.setLineJoin('round');
  },
  //事件监听
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  canvasStart: function (event) {
    isButtonDown = true;
    arrz.push(0);
    arrx.push(event.changedTouches[0].x);
    arry.push(event.changedTouches[0].y);

  },
  canvasMove: function (event) {
    if (isButtonDown) {
      arrz.push(1);
      arrx.push(event.changedTouches[0].x);
      arry.push(event.changedTouches[0].y);

    };

    for (var i = 0; i < arrx.length; i++) {
      if (arrz[i] == 0) {
        context.moveTo(arrx[i], arry[i])
      } else {
        context.lineTo(arrx[i], arry[i])
      };

    };
    context.clearRect(0, 0, canvasw, canvash);

    context.setStrokeStyle('#000000');
    context.setLineWidth(4);
    context.setLineCap('round');
    context.setLineJoin('round');
    context.stroke();

    context.draw(false);
  },
  canvasEnd: function (event) {
    isButtonDown = false;
  },
  //清除画布
  cleardraw: function () {
    //清除画布
    arrx = [];
    arry = [];
    arrz = [];
    context.clearRect(0, 0, canvasw, canvash);
    context.draw(true);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.startCanvas();
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