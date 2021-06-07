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
  opendeng:function(){
    wx.showModal({
      title: '成功',
      content: '灯已打开',
    })
    wx.request({
      url: 'http://123.207.216.106/iot/test/open.php',
      method: 'GET',
      success: function (res) {
        // success
        console.log(res)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  closedeng: function () {
    wx.showModal({
      title: '成功',
      content: '灯已关闭',
    })
    wx.request({
      url: 'http://123.207.216.106/iot/test/close.php',
      method: 'GET',
      success: function (res) {
        // success
        console.log(res)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  go:function(){
    console.log('前进')
    this.setData({
      dis2:true,
      dis3: true,
      dis4: true
    })
    wx.request({
      url: 'http://123.207.216.106/iot/test/go.php',
      method: 'GET',
      success: function (res) {
        // success
        console.log(res)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  back: function () {
    console.log('后退')
    this.setData({
      dis2: true,
      dis1: true,
      dis4: true
    })
    wx.request({
      url: 'http://123.207.216.106/iot/test/bc.php',
      method: 'GET',
      success: function (res) {
        // success
        console.log(res)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  left: function () {
    console.log('左转')
    this.setData({
      dis1: true,
      dis3: true,
      dis4: true
    })
    wx.request({
      url: 'http://123.207.216.106/iot/test/le.php',
      method: 'GET',
      success: function (res) {
        // success
        console.log(res)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  right: function () {
    console.log('右转')
    this.setData({
      dis2: true,
      dis3: true,
      dis1: true
    })
    wx.request({
      url: 'http://123.207.216.106/iot/test/ri.php',
      method: 'GET',
      success: function (res) {
        // success
        console.log(res)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
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
    wx.request({
      url: 'http://123.207.216.106/iot/test/st.php',
      method: 'GET',
      success: function (res) {
        // success
        console.log(res)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
})