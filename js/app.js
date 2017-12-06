require(['jquery', 'common'], function($, common) {
    common.info("initializing app ...");

    $(function() {
        common.info("document loaded");
        common.addH1("Hallo");

        var i = 1;
        var timer = setInterval(function() {
            if (i < 10) {
                common.addH1("Hallo " + (i++));
            } else {
                common.info("application done");
                clearInterval(timer);
            }
        }, 1000);
    });
});
