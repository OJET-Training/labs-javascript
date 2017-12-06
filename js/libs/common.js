define(['jquery'], function($) {
    console.log('initializing common module ...');

    return {
        addH1: function(text) {
            $("body").append("<h1>" + text + "</h1>");
        },
        info: function(message) {
            if (window.console && window.console.log) {
                console.log("info: " + message);
            }
        }
    }
});
