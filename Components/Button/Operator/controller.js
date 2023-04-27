function OperatorButton(id, options) {

    this.init = function(id,options){
       
        this.model = new OperatorButtonModel();
        this.view = new OperatorButtonView(id,this.model,options);
    }

    Button.call(this,id,options);
}


OperatorButton.prototype = Object.create(Button.prototype);
OperatorButton.prototype.constructor = OperatorButton;