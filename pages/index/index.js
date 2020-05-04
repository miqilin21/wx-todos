var t = require("../../model/list.js"), a = require("../../model/category.js"), e = new t.ListModel(), s = new a.CategoryModel();

Page({
    data: {
        todos: [],
        addText: "",
        delBtnWidth: 120,
        isAdd: !0,
        cates: [],
        cate: ""
    },
    onShow: function() {
        var t = e.getTodos();
        this.setData({
            todos: t
        });
        var a = s.getCategories();
        (a = a.map(function(t) {
            return t.text;
        })).unshift("全部"), this.setData({
            cates: a,
            cate: "全部",
            isAdd: !0,
            addText: ""
        });
    },
    onTap: function() {
        var t = this.data.todos;
        t.forEach(function(t) {
            t.txtStyle = "";
        }), this.setData({
            todos: t
        });
    },
    onInput: function(t) {
        this.setData({
            addText: t.detail.value
        });
    },
    onChange: function(t) {
        var a = !this.data.isAdd;
        if (this.setData({
            isAdd: a
        }), a) {
            var s = e.getTodos();
            this.setData({
                todos: s,
                addText: "",
                cate: "全部"
            });
        }
    },
    onConfirm: function(t) {
        var a = this.data.addText;
        if (a) if (this.data.isAdd) {
            var s = new Date().getTime(), o = {
                text: a,
                id: s,
                done: !1,
                date: s,
                category: "默认"
            }, d = e.getTodos();
            d.unshift(o), this.setData({
                todos: d,
                addText: ""
            }), e.addTodos(o);
        } else {
            var i = this.data.cate, n = e.filterTodos({
                cate: i,
                search: a
            });
            console.log(n), this.setData({
                todos: n
            });
        }
    },
    bindPickerChange: function(t) {
        var a = t.detail.value, s = this.data.cates[a], o = e.filterTodos({
            cate: s
        });
        this.setData({
            cate: s,
            todos: o
        });
    },
    onStateChange: function(t) {
        var a = t.detail.todo, s = this.data.todos;
        s = s.filter(function(t) {
            return t.id !== a.id;
        }), this.setData({
            todos: s
        }), e.updateLists(a);
    },
    onDelete: function(t) {
        var a = t.target.dataset.index, s = t.detail.id, o = this.data.todos;
        o.splice(a, 1), this.setData({
            todos: o
        }), e.deleteTodo(s);
    },
    touchStart: function(t) {
        var a = this.data.todos;
        a.forEach(function(t) {
            t.txtStyle = "";
        }), this.setData({
            todos: a
        }), 1 === t.touches.length && this.setData({
            startX: t.touches[0].clientX
        });
    },
    touchMove: function(t) {
        if (1 === t.touches.length) {
            var a = t.touches[0].clientX, e = this.data.startX - a, s = this.data.delBtnWidth, o = "";
            e <= 0 ? o = "left:0" : e > 0 && (o = "left:-" + e + "rpx", e > s && (o = "left:-" + s + "rpx"));
            var d = t.currentTarget.dataset.index, i = this.data.todos;
            i[d].txtStyle = o, this.setData({
                todos: i
            });
        }
    },
    touchEnd: function(t) {
        if (1 === t.changedTouches.length) {
            var a = t.changedTouches[0].clientX, e = this.data.startX - a, s = this.data.delBtnWidth, o = e > s / 2 ? "left:-" + s + "rpx" : "left:0", d = t.currentTarget.dataset.index, i = this.data.todos;
            i[d].txtStyle = o, this.setData({
                todos: i
            });
        }
    }
});