import Route from '@ember/routing/route';

export default Route.extend({
    model: function(){
       return ({
           user :this.store.findRecord('user',1),
           quotes :this.store.findAll('quote')
       }); 
    }
});
