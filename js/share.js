var baseUrl="http://118.190.76.178:8088/";
// var link = encodeURIComponent(location.href);
var link = location.href
$.ajax({
    url:baseUrl,
    type:"GET",
    data:{"url":link},
    async:true,
    dataType:"json",
    success:function (data){
        wx.config({
            debug: false,
            appId: data.configMap.appId,
            timestamp: data.configMap.timestamp,
            nonceStr: data.configMap.nonceStr,
            signature: data.configMap.signature,
            jsApiList: [
                "onMenuShareTimeline",
                "onMenuShareAppMessage"
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
var imgUrl="../img/title.png",title="东风日产蓝鸟设计大赛",desc="立即报名，赢取丰富礼品！"
wx.ready(function(res) {
    wx.onMenuShareAppMessage({
        title: title,
        desc:desc,
        link: link,
        imgUrl: imgUrl,
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