require.config({
  baseUrl: "/player/js/",
  paths: {
    jquery: 'vendor/jquery',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone'
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone.localStorage': {
      deps: ['backbone'],
      exports: 'Backbone'
    }
  }
});

require([
    'jquery',
    'backbone'
  ], function($, Backbone) {
 
  var Router = Backbone.Router.extend({
    routes: {
      "": "main"
    },
    main: function(){
		$("#container").html('hello');
    }
  });
  
  var router = new Router;
  Backbone.history.start();
});