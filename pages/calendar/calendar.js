var t = new (require("../../model/list.js").ListModel)();

Page({
    data: {
        days: [],
        todos: []
    },
    onLoad: function(t) {},
    getTodos: function(o) {
        var e = o.detail.day, a = new Date(e.year, e.month - 1, e.date), n = t.getTodosOfDate(a);
        n && this.setData({
            todos: n
        });
    },
    getDays: function(o) {
        var e = o.detail.date, a = t.getTodoDays({
            year: e.getFullYear(),
            month: e.getMonth() + 1
        });
        this.setData({
            days: a
        });
    },
    onReady: function() {},
    onShow: function() {
        var o = new Date(), e = t.getTodosOfDate(o);
        e && this.setData({
            todos: e
        });
        var a = t.getTodoDays({
            year: o.getFullYear(),
            month: o.getMonth() + 1
        });
        this.setData({
            days: a
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});