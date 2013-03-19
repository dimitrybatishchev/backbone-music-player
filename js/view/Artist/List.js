define([
  'jquery',
  'underscore',
  'backbone',
  'collection/Artists',
  'text!templates/artist/list'
], function($, _, Backbone, ProjectsCollection, projectsListTemplate){
  var ProjectListView = Backbone.View.extend({
    el: $("#container"),
    initialize: function(){
      this.collection = new ProjectsCollection();
      this.collection.add({ name: "Ginger Kid"});
      // Compile the template using Underscores micro-templating
      var compiledTemplate = _.template( projectsListTemplate, { projects: this.collection.models } );
      this.$el.html(compiledTemplate);
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  return ProjectListView;
});