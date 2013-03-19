define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
  var AppRouter = Backbone.Router.extend({
    routes: {
		'':     'artistsList',
    },
	initialize: function() {
		this.views = {};
    },
  });
  return AppRouter;
});