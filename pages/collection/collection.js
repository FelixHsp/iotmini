const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    light:"70",
    temp:"29",
    pm:"无",
    uv:'6',
    person: [{ name: '胡少鹏', price: '前端工程师', pic: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg', time: '10:20', type: 'text-cut' }, { name: '未知', price: '闯入警告', pic: '', time: '10:10', type:"cuIcon-infofill text-red"}, { name: '孙庆轩', price: 'iot架构工程师', pic:'https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png',time: '10:00' }],
    iconList: [{
      icon: 'flashlightopen',
      color: 'red',
      badge: 0,
      name: '光照强度'
    }, {
      icon: 'rank',
      color: 'orange',
      badge: 0,
      name: '温度'
    }, {
      icon: 'similar',
      color: 'yellow',
      badge: 0,
      name: '火焰检测'
    }, {
      icon: 'noticefill',
      color: 'olive',
      badge: 0,
      name: '紫外线强度'
    }],
    gridCol: 2,
    skin: false
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  gridchange: function (e) {
    this.setData({
      gridCol: e.detail.value
    });
  },
  gridswitch: function (e) {
    this.setData({
      gridBorder: e.detail.value
    });
  },
  menuBorder: function (e) {
    this.setData({
      menuBorder: e.detail.value
    });
  },
  menuArrow: function (e) {
    this.setData({
      menuArrow: e.detail.value
    });
  },
  menuCard: function (e) {
    this.setData({
      menuCard: e.detail.value
    });
  },
  switchSex: function (e) {
    this.setData({
      skin: e.detail.value
    });
  },
  datadetail:function(e){
    console.log(e.currentTarget.dataset.key)
    if (e.currentTarget.dataset.key==0){
      wx.showModal({
        title: '当前光照强度',
        content: this.data.light+'lux',
      })
    };
    if (e.currentTarget.dataset.key == 1) {
      wx.showModal({
        title: '当前温度',
        content: this.data.temp+'摄氏度',
      })
    };
    if (e.currentTarget.dataset.key == 2) {
      wx.showModal({
        title: '有无火焰',
        content: this.data.pm,
      })
    };
    if (e.currentTarget.dataset.key == 3) {
      wx.showModal({
        title: '当前紫外线',
        content: this.data.uv,
      })
    }
  }

})