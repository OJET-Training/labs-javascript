requirejs.config({
    baseUrl: 'js/libs',
    paths: {
        jquery: './vendor/jquery-3.2.1',
        common: './common',
        app: '../app'
    }
});

require(['app'], function() {
    require(['common'], function(common) {
        common.info('starting application ...');
    });
});
