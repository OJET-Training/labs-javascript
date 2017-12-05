(function($) {
    window.console.log("running main.js");

    var addH1 = function(text) {
        document.body.innerHTML = "<h1>" + text + "</h1>";
    };

    window.setTimeout(function() {
        addH1("Hallo");
    }, 5000);
})();
})(jQuery);
