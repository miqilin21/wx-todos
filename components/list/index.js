Component({
    properties: {
        todo: Object,
        index: Number
    },
    data: {
        check_url: "/images/icon/checked.png",
        uncheck_url: "/images/icon/unchecked.png"
    },
    methods: {
        onTap: function(e) {
            var t = this.properties.todo;
            t.done = !t.done, this.triggerEvent("state", {
                todo: t
            }, {});
        },
        onTapView: function(e) {
            wx.navigateTo({
                url: "/pages/detail/detail?tid=" + this.properties.todo.id
            });
        },
        onDel: function(e) {
            var t = this.properties.todo.id;
            this.triggerEvent("delete", {
                id: t
            }, {});
        }
    }
});