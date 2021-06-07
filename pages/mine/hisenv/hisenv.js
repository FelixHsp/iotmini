Page({
  data: {
    TabCur: 0,
    scrollLeft: 0,
    lux: [{ value: "40", time: "2019-6-13 08:10:20" }, { value: "41", time: "2019-6-13 08:10:10" }, { value: "38", time: "2019-6-13 08:10:00" }, { value: "43", time: "2019-6-13 08:09:50" }],
    tem: [{ value: "25", time: "2019-6-13 08:10:20" }, { value: "25", time: "2019-6-13 08:10:10" },{ value: "25", time: "2019-6-13 08:10:00" }, { value: "25", time: "2019-6-13 08:09:50"}],
    pm: [{ value: "无火源", time: "2019-6-13 08:10:20" }, { value: "无火源", time: "2019-6-13 08:10:10" }, { value: "无火源", time: "2019-6-13 08:10:00" }, { value: "无火源", time: "2019-6-13 08:09:50" }],
    zi: [{ value: "4", time: "2019-6-13 08:10:20" }, { value: "4", time: "2019-6-13 08:10:10" }, { value: "4", time: "2019-6-13 08:10:00" },{ value: "4", time: "2019-6-13 08:09:50" }]
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  }
})