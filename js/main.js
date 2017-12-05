(function($) {
    window.console.log("running main.js");

    var addH1 = function(text) {
        document.body.innerHTML = "<h1>" + text + "</h1>";
    };

    window.setTimeout(function() {
    $(document).ready(function() {
        window.console.log("document loaded");
        addH1("Hallo");
    });
})(jQuery);
