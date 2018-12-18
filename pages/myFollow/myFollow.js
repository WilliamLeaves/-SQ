Page({
  data: {
    navTab: ["用户", "提问","回答"],
    currentNavtab: "0",
    followedUser: [{
      "uid": "12345",
      "nickName": "Jack",
      "followTime": "2017-01-01"}],
    followedQuestion: [{
      "nickName": "Jack",
      "questionId": "Q003",
      "questionTitle": "如何当好java工程师？",
      "questionContent": "java是全世界最好的语言，所以我们应当如何当好一名java工程师呢？",
      "answerNum": "16",
      "followTime": "2017-06-07"}],
    followedAnswer: [{
      "nickName": "Jack",
      "questionId": "Q001",
      "answerId": "A004",
      "questionTitle": "如何使用微信小程序开发平台？",
      "answerContent": "多看，多学，多练",
      "reviewNum": "255",
      "followTime": "2018-11-15"}]
  },
  onLoad: function (options) {
    //this.getData()
  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
  getData:function(){
    wx.request({
      url: 'localhost:8000/followedUser',
      success(res){
        this.followedUser=res
      }
    })
    wx.request({
      url: 'localhost:8000/followedQuestion',
      success(res) {
        this.followedQuestion = res
      }
    })
    wx.request({
      url: 'localhost:8000/followAnswer',
      success(res) {
        this.followedAnswer = res
      }
    })
  }
})