function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), r = function() {
    function r() {
        e(this, r);
    }
    return t(r, [ {
        key: "addCategory",
        value: function(e) {
            var t = this.getCategories();
            t.some(function(t) {
                return t.text == e;
            }) || (t.push({
                text: e,
                id: new Date().getTime()
            }), wx.setStorageSync("categories", t));
        }
    }, {
        key: "editCategory",
        value: function(e, t) {
            var r = this.getCategories();
            r.forEach(function(r) {
                r.id === e && (r.text = t);
            }), wx.setStorageSync("categories", r);
        }
    }, {
        key: "deleteCategory",
        value: function(e) {
            var t = this.getCategories();
            t.forEach(function(r, n) {
                r.id === e && t.splice(n, 1);
            }), wx.setStorageSync("categories", t);
        }
    }, {
        key: "findCategory",
        value: function(e) {
            var t = this.getCategories();
            return e = t.filter(function(t) {
                return t.text == e;
            });
        }
    }, {
        key: "getCategories",
        value: function() {
            var e = wx.getStorageSync("categories") || [];
            return e.length || (e.push({
                text: "默认",
                id: new Date().getTime()
            }), wx.setStorageSync("categories", e)), e;
        }
    } ]), r;
}();

exports.CategoryModel = r;