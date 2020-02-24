// pages/kecheng/kecheng.js
Page({
  data: {
    active: 0,
    currentTab: 0
  },
  switchNav: function (e) {
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({
        currentTab: id
      });
    }
    page.setData({
      active: id
    });
  }
})

