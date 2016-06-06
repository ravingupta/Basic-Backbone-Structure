var BaseView = Backbone.Marionette.LayoutView.extend({
    template: "common/base",
    regions: {
        header: "#headerId",
        body: "#bodyId",
        footer: "#footerId"
    }
});

var HeaderView = Backbone.Marionette.LayoutView.extend({
    template: "common/header",
    events: {
        "click #hheadlines": "headlines",
    },
    headlines: function() {
        // homeRouter.navigate("/home/headlines", true);
    }
});

var FooterView = Backbone.Marionette.LayoutView.extend({
    template: "common/footer",
    events: {
        "click #bhome": "home"
    },
    home: function() {
        // homeRouter.navigate("/home", true);
    }
});