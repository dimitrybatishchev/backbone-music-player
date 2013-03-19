define([
  'underscore',
  'backbone',
  'model/Artist'
], function(_, Backbone, ProjectModel){
  var ArtistCollection = Backbone.Collection.extend({
    model: Artist
  });
  // You don't usually return a collection instantiated
  return ArtistCollection;
});
