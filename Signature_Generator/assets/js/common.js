var APP = APP || {};
APP.model = Backbone.Model.extend({
    initialize : function(obj){
        _.extend(this,obj);
        return this;
    }
});

APP.collection = Backbone.Collection.extend({
    model : APP.model,
    initialize : function(obj){
        _.extend(this,obj);
        this.modelId = function(){};
        return this;
    }
});
