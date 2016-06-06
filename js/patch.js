Backbone.Marionette.TemplateCache.prototype.loadTemplate = function ( templateId ) {
    var template = '',
        url = 'templates/' + templateId + '.html';

    // Load the template by fetching the URL content synchronously.
    Backbone.$.ajax( {
        async   : false,
        url     : url,
        success : function ( templateHtml ) {
            template = templateHtml;
        }
    } );
    return template;
};