define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/expenses/expense.html'  
], function($, _, Backbone, listItem, formItem){
  var ExpenseView = Backbone.View.extend({
    
    tagName: 'tr',
    events:{
      'click': 'showDescription'
    },

    initialize: function(options){
      var self = this;
      self.template = _.template(listItem);      
      self.model = options.model;
    },

    showDescription: function() {
      console.log('should show description', this.model.get('name') );
      // TBD              
    },

    render: function(){
      var self = this;
      
      $(this.el).empty();
      
      var renderContent = self.template({model: self.model});
      $(self.el).html(renderContent);
      return self;
    },
    


  });

  return ExpenseView;
});
