App = new Backbone.Marionette.Application();

App.addRegions({
    mainRegion: '#app',
});

App.addInitializer(function() {

    $.ajaxSetup({
        timeout: 30000
    });

});
App.on("start", function() {

    // Remove for debug
    Backbone.Marionette.TemplateCache.clear();

    baseView = new BaseView();
    headerView = new HeaderView();
    footerView = new FooterView();

    commonRegion = { 
        mainRegion: App.mainRegion,
        baseRegion: baseView,
        headerRegion:headerView,
        footerRegion:footerView 
    }

    homeController = new HomeController(commonRegion);
    homeRouter = new HomeRouter({controller: homeController});

    // Adding all the routers       
    Backbone.history.start();

});

$(function() {

    App.start({});

});