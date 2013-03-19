define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var Artist = Backbone.Model.extend({
    defaults: {
		name: ""
    }
  });
  return Artist;
});