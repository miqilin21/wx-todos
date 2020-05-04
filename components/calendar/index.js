Component({
    properties: {
        todo: {
            type: Array,
            value: [],
            observer: "_dataChange"
        }
    },
    data: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        clickedDate: new Date(),
        weeks: [ "日", "一", "二", "三", "四", "五", "六" ],
        dates: []
    },
    attached: function() {
        var t = new Date();
        this._renderByDate(t);
    },
    methods: {
        prevMonth: function(t) {
            var e = this.data.clickedDate, a = new Date(e.year, e.month - 1, e.date);
            for (a.setMonth(a.getMonth() - 1); a.getMonth() + 1 === e.month; ) a.setDate(a.getDate() - 1);
            this._renderByDate(a), this.triggerEvent("changed", {
                date: a
            }, {});
        },
        nextMonth: function(t) {
            var e = this.data.clickedDate, a = new Date(e.year, e.month - 1, e.date);
            for (a.setMonth(a.getMonth() + 1); a.getMonth() + 1 === e.month; ) a.setDate(a.getDate() + 1);
            this._renderByDate(a), this.triggerEvent("changed", {
                date: a
            }, {});
        },
        dateChange: function(t) {
            var e = t.detail.value;
            e = new Date(e), this.setData({
                year: e.getFullYear(),
                month: e.getMonth() + 1
            }), this._renderByDate(e), this.triggerEvent("changed", {
                date: e
            }, {});
        },
        selectDay: function(t) {
            var e = t.currentTarget.dataset.day, a = new Date(e.year, e.month - 1, e.date);
            this._renderByDate(a);
        },
        _dataChange: function(t, e) {
            this.setData({
                todo: t
            });
            var a = this.data.clickedDate, n = new Date(a.year, a.month - 1, a.date);
            this._renderByDate(n);
        },
        _renderByDate: function(t) {
            var e = new Date(t);
            e.setDate(e.getDate() - t.getDate() + 1), e.setDate(e.getDate() - e.getDay());
            for (var a = [], n = 0; n < 6 && (5 !== n || e.getMonth() === t.getMonth()); n++) {
                a[n] = [];
                for (var r = 0; r < 7; r++) {
                    var o = {
                        year: e.getFullYear(),
                        month: e.getMonth() + 1,
                        date: e.getDate(),
                        color: "#000",
                        background: "#fff"
                    };
                    e.getMonth() !== t.getMonth() ? o.color = "#999" : -1 !== this.data.todo.indexOf(o.date) && (o.todo = !0), 
                    e.getTime() === t.getTime() && (o.background = "#333", o.color = "#fff", this.setData({
                        clickedDate: o,
                        year: o.year,
                        month: o.month
                    }), this.triggerEvent("todos", {
                        day: o
                    }, {})), a[n].push(o), e.setDate(e.getDate() + 1);
                }
            }
            this.setData({
                dates: a
            });
        }
    }
});