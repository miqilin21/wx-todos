var t = new (require("../../model/category.js").CategoryModel)();

Page({
    data: {
        cate: {},
        text: "",
        isAdd: !0
    },
    onLoad: function(t) {
        var a = t.cate || "";
        a && (a = JSON.parse(a), this.setData({
            cate: a,
            text: a.text,
            isAdd: !1
        }));
    },
    onInput: function(t) {
        var a = t.detail.value;
        this.setData({
            text: a
        });
    },
    addCate: function(a) {
        var e = this.data.text;
        e && (t.addCategory(e), wx.navigateBack({
            delta: 1
        }));
    },
    editCate: function(a) {
        var e = this.data.text, n = this.data.cate;
        t.editCategory(n.id, e), wx.navigateBack({
            delta: 1
        });
    },
    delCate: function() {
        var a = this.data.cate;
        t.deleteCategory(a.id), wx.navigateBack({
            delta: 1
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});