// pages/admin/profile.js
let app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    applied_users: [
      {name: 'Zora', location: 'Changning', contact: '3456789', image_url: 'https://images.unsplash.com/photo-1610295399810-4964d7fdc693?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
      
      {name: 'Ann', location: 'JingAn', contact: '2345678', image_url: 'https://images.unsplash.com/photo-1643386620665-0888553791d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}
    ],

    requested_users: [
      {name: 'Julian'},
      {name: 'Annie'}
    ],

    listed_pets: [
      {name: 'Dobby'},
      {name: 'Tiger'}
    ],

    active_tab: "application"
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {
    this.setData({
      content: app.globalData.content
    })
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  },

  active_application() {
    this.setData({
      active_tab: "application"
    })
  },

  active_request() {
    this.setData({
      active_tab: "request"
    })
  },

  active_listing() {
    this.setData({
      active_tab: "listing"
    })
  }
})