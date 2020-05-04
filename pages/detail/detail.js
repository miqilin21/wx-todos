var e = require("../../model/list.js"), t = require("../../model/category.js"), a = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/util.js")), o = new e.ListModel(), i = new t.CategoryModel();

Page({
    data: {
        todo: {},
        check_url: "/images/icon/checked.png",
        uncheck_url: "/images/icon/unchecked.png",
        categories: [],
        date: "",
        cate: ""
    },
    onLoad: function(e) {
        var t = e.tid, d = o.getTodoDetail(t), n = i.getCategories();
        n = n.map(function(e) {
            return e.text;
        }), this.setData({
            todo: d,
            categories: n,
            index: d.index || 0,
            date: a.default.formatTime(new Date(d.date), 1),
            cate: d.category
        });
    },
    bindDateChange: function(e) {
        var t = e.detail.value;
        t = new Date(t).getTime(), this.setData({
            date: a.default.formatTime(new Date(t), 1)
        }), this.data.todo.date = t;
    },
    bindPickerChange: function(e) {
        var t = e.detail.value, a = this.data.categories[t];
        this.setData({
            cate: a
        }), this.data.todo.category = a;
    },
    onChangeText: function(e) {
        var t = e.detail.value;
        this.data.todo.text = t;
    },
    onDelete: function(e) {
        var t = this.data.todo.id;
        o.deleteTodo(t), wx.navigateBack();
    },
    onChangeDesc: function(e) {
        var t = e.detail.value;
        this.data.todo.desc = t;
    },
    onUnload: function() {
        o.updateLists(this.data.todo);
    }
});