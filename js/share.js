var baseUrls="http://118.190.76.178:8088/";
var link = location.href;
$.ajax({
    url:baseUrls+"share/GETJSSDK",
    type:"get",
    data:{"url":link.split('#')[0]},
    async:true,
    dataType:"json",
    success:function (data){
        var data=JSON.parse(data.returnValue);
        wx.config({
            debug: false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.noncestr,
            signature: data.signature,
            jsApiList: [
                "onMenuShareTimeline",
                "onMenuShareAppMessage",
                "onMenuShareWeibo"
            ]
        });
        wx.error(function (res) {
            console.log(res);
        });
    },
    error:function (error){
        console.log(error);
    }
});
var title="东风日产蓝鸟设计大赛",desc="立即报名，赢取丰富礼品！"
wx.ready(function(res) {
    wx.onMenuShareAppMessage({
        title: title,
        desc:desc,
        link: link,
        imgUrl: "http://www.1roadshow.com/img/title.png",
        success: function(res) {},
        cancel: function(res) {}
    });
    wx.onMenuShareTimeline({
        title: title,
        link: link,
        imgUrl: imgUrl,
        success: function(res) {},
        cancel: function(res) {}
    });
    wx.onMenuShareWeibo({
        title: title,
        desc:desc,
        link: link,
        imgUrl: imgUrl,
        success: function () {},
        cancel: function () {}
    });
});