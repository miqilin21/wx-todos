module.exports = {
    formatTime: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = e.getFullYear(), n = e.getMonth() + 1, u = e.getDate(), a = new Date(), g = a.getFullYear(), i = a.getMonth() + 1, o = a.getDate();
        if (0 === t) {
            if (r === g && n === i) return u === o ? "今天" : u === o - 1 ? "昨天" : u === o + 1 ? "明天" : n + "月" + u + "日";
            if (r === g && n !== i) return n + "月" + u + "日";
        }
        return r + "年" + n + "月" + u + "日";
    }
};