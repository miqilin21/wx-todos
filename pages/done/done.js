var e = require("../../model/list.js"), t = require("../../model/category.js"), o = new e.ListModel();

new t.CategoryModel();

Page({
    data: {
        completed: []
    },
    onShow: function() {
        var e = o.getCompleted();
        this.setData({
            completed: e
        });
    },
    onStateChange: function(e) {
        var t = e.detail.todo, a = this.data.completed;
        a = a.filter(function(e) {
            return e.id !== t.id;
        }), this.setData({
            completed: a
        }), o.updateLists(t);
    }
});