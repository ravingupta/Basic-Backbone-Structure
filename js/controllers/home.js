var HomeController = Marionette.Controller.extend({
    initialize: function(options) {
        this.mainRegion = options.mainRegion;
        this.baseRegion = options.baseRegion;
        this.headerRegion = options.headerRegion;
        this.footerRegion = options.footerRegion;
    },
    loadviews: function() {
        this.mainRegion.show(this.baseRegion);
        this.baseRegion.showChildView('header', this.headerRegion);
        this.baseRegion.showChildView('footer', this.footerRegion);
    },
    homepage: function() {
        this.loadviews();
        var homeView = new HomeView();
        this.baseRegion.showChildView('body', homeView);
    }
});