
/**
 * 
 * @param {'fnBtn_' + this.id + '_' + fnBtns[i]} id  for function buttons
 * @param { { title: , value: fnBtns[i] ,className: "btn btn-danger function" }} options  for function buttons
 */
function Button (id, options){
    
     this._init = function(id,options){
        this.id =id;
        this.options = options;
        this.init(id,options);     // this will call the overriden init method which is in function button controller init
        this.setEvent();
    } 
   
    this.setEvent= function(){
        var _this = this;
        this.getWidget().onclick = function(event){
            _this.onBtnPress(event);
        }
    }


    this._init(id,options);
}

Button.prototype.init = function(id, options){         // this method is overridden , so not executed
   
    this.model = new ButtonModel();                        
    this.view = new ButtonView(id, this.model, options);
}

Button.prototype.getWidget = function(){
    
    return this.view.getWidgetElement();
}

Button.prototype.onBtnPress =  function(event){
  
}





