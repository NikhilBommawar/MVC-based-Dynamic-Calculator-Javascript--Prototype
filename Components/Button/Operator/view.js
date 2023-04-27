var OperatorButtonView = function(id, model, options) {
  
    this.init = function (id, model, options) { 
        this.model = model;
        this.setWidget();
    }
    this.setWidget = function () {
        this.widgetElement.style.color = this.model.color;
    }
    ButtonView.call(this,id, model, options);
}

OperatorButtonView.prototype = Object.create(ButtonView.prototype);
OperatorButtonView.prototype.constructor = OperatorButtonView;