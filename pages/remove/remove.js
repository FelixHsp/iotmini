// pages/remove/remove.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dis1:'',
    dis2:'',
    dis3:'',
    dis4:''
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

  },
  go:function(){
    console.log('前进')
    this.setData({
      dis2:true,
      dis3: true,
      dis4: true
    })
  },
  back: function () {
    console.log('后退')
    this.setData({
      dis2: true,
      dis1: true,
      dis4: true
    })
  },
  left: function () {
    console.log('左转')
    this.setData({
      dis1: true,
      dis3: true,
      dis4: true
    })
  },
  right: function () {
    console.log('右转')
    this.setData({
      dis2: true,
      dis3: true,
      dis1: true
    })
  },
  stop: function(){
    console.log('停止')
    this.setData({
      dis1: '',
      dis2: '',
      dis3: '',
      dis4: ''
    })
  }
})