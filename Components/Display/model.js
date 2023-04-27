/**
 * 
 * @param {*} id  = 'display_' + this.id
 * @param {*} options  = className:"display_class"
 */

function DisplayModel(id,options){
    
    this.init = function(id,options){
        this.id = id ; 
        this.options = options;
    }
    this.init(id,options);
}