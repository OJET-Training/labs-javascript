(function($) {
    window.console.log("running main.js");

    var addH1 = function(text) {
        $("body").append("<h1>" + text + "</h1>");
    };

    $(document).ready(function() {
        window.console.log("document loaded");
        addH1("Hallo");
        var i = 1;
        var timer = setInterval(function() {
            if (i < 10) {
                addH1("Hallo " + (i++));
            } else {
                window.console.log("done");
                clearInterval(timer);
            }
        }, 1000);
    });
})(jQuery);
