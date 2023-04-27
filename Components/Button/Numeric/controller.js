
function  NumericButtons(id,options){

    this.init = function(id,options){
       
         this.model = new NumericButtonModel();
         this.view = new  NumericButtonView(id,this.model, options);
}


Button.call(this,id,options);

}

NumericButtons.prototype = Object.create(Button.prototype);
NumericButtons.prototype.constructor = NumericButtons;
