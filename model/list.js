function t(t) {
    if (Array.isArray(t)) {
        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
        return n;
    }
    return Array.from(t);
}

function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
    };
}(), r = function() {
    function r() {
        e(this, r);
    }
    return n(r, [ {
        key: "getLists",
        value: function() {
            return wx.getStorageSync("todos") || [];
        }
    }, {
        key: "getTodos",
        value: function() {
            var t = this.getLists(), e = [];
            return t && (e = t.filter(function(t) {
                return !1 === t.done;
            }).sort(function(t, e) {
                return e.date - t.date || e.id - t.id;
            })), e;
        }
    }, {
        key: "getCompleted",
        value: function() {
            var t = this.getLists(), e = [];
            return t && (e = t.filter(function(t) {
                return !0 === t.done;
            }).sort(function(t, e) {
                return e.date - t.date || e.id - t.id;
            })), e;
        }
    }, {
        key: "addTodos",
        value: function(t) {
            var e = this.getLists();
            e.push(t), wx.setStorageSync("todos", e);
        }
    }, {
        key: "deleteTodo",
        value: function(t) {
            var e = this.getLists();
            e.forEach(function(n, r) {
                n.id === t && e.splice(r, 1);
            }), wx.setStorageSync("todos", e);
        }
    }, {
        key: "updateLists",
        value: function(t) {
            var e = this.getLists();
            e && e.forEach(function(e) {
                e.id === t.id && Object.keys(t).forEach(function(n) {
                    e[n] = t[n];
                });
            }), wx.setStorageSync("todos", e);
        }
    }, {
        key: "getTodoDetail",
        value: function(t) {
            return this.getLists().find(function(e) {
                return e.id == t;
            });
        }
    }, {
        key: "filterTodos",
        value: function(t) {
            var e = t.cate, n = t.search, r = this.getTodos();
            return "全部" == e ? n ? r = r.filter(function(t) {
                return t.text.includes(n);
            }) : r : (r = r.filter(function(t) {
                return t.category == e;
            }), n && (r = r.filter(function(t) {
                return t.text.includes(n);
            })), r);
        }
    }, {
        key: "getListsByCate",
        value: function(t) {
            var e = this.getTodos(), n = this.getCompleted(), r = e.concat(n);
            return r = r.filter(function(e) {
                return e.category == t;
            });
        }
    }, {
        key: "getTodosOfDate",
        value: function(t) {
            var e = this.getLists();
            if (e.length) return (e = e.filter(function(e) {
                var n = new Date(e.date);
                return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate();
            })).sort(function(t, e) {
                return Number(t.done) - Number(e.done);
            }), e;
        }
    }, {
        key: "getTodoDays",
        value: function(e) {
            var n = e.year, r = e.month, o = this.getLists();
            if (!o.length) return [];
            var i = new Set();
            return o.forEach(function(t) {
                var e = t.date;
                (e = new Date(e)).getFullYear() === n && e.getMonth() + 1 === r && i.add(e.getDate());
            }), [].concat(t(i)).sort(function(t, e) {
                return t - e;
            });
        }
    } ]), r;
}();

exports.ListModel = r;