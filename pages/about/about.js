var e = new (require("../../model/category.js").CategoryModel)(), a = getApp();

Page({
    data: {
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        cates: []
    },
    onLoad: function() {
        var e = this;
        a.globalData.userInfo ? this.setData({
            userInfo: a.globalData.userInfo,
            hasUserInfo: !0
        }) : this.data.canIUse ? a.userInfoReadyCallback = function(a) {
            e.setData({
                userInfo: a.userInfo,
                hasUserInfo: !0
            });
        } : wx.getUserInfo({
            success: function(t) {
                a.globalData.userInfo = t.userInfo, e.setData({
                    userInfo: t.userInfo,
                    hasUserInfo: !0
                });
            }
        });
    },
    onShow: function() {
        var a = e.getCategories();
        this.setData({
            cates: a
        });
    },
    getUserInfo: function(e) {
        a.globalData.userInfo = e.detail.userInfo, this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: !0
        });
    },
    onAdd: function(e) {
        wx.navigateTo({
            url: "/pages/cate/cate?cate=" + (JSON.stringify(e.currentTarget.dataset.cate) || "")
        });
    }
});