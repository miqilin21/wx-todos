var t = new (require("../../model/list.js").ListModel)();

Page({
    data: {
        cate: "",
        lists: []
    },
    onLoad: function(a) {
        var e = a.cate, s = t.getListsByCate(e);
        this.setData({
            cate: e,
            lists: s
        });
    },
    onStateChange: function(a) {
        var e = a.detail.todo;
        t.updateLists(e);
        var s = this.data.cate, n = t.getListsByCate(s);
        this.setData({
            lists: n
        });
    },
    onReady: function() {},
    onShow: function() {
        var a = this.data.cate, e = t.getListsByCate(a);
        this.setData({
            lists: e
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});