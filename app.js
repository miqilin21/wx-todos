App({
    onLaunch: function() {
        var n = this;
        wx.login({
            success: function(n) {}
        }), wx.getSetting({
            success: function(s) {
                s.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(s) {
                        n.globalData.userInfo = s.userInfo, n.userInfoReadyCallback && n.userInfoReadyCallback(s);
                    }
                });
            }
        });
    },
    globalData: {
        userInfo: null
    }
});