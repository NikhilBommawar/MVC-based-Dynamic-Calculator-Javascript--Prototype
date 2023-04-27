var NumericButtonView = function(id, model, options) {
   
    this.init = function (id, model, options) { 
       
        this.model = model;
        this.setWidget();
    }
    this.setWidget = function () {
        this.widgetElement.style.color = this.model.color;
    }
   
    ButtonView.call(this,id, model, options);
}
 

NumericButtonView.prototype = Object.create(ButtonView.prototype);
NumericButtonView.prototype.constructor = NumericButtonView;