
/**
 * 
 * @param {*} id  = 'display_' + this.id
 * @param {*} options  = { width: 250, height: 55 }
 */

function DisplayView(id,options){


/**
 * 
 * @param {*} id = 'display_' + this.id
 * @param {*} options = { width: 250, height: 55 }
 */

    this.init = function(id,options){
        this.id = id;
        this.options = options;
        this.widgetElement = null;
        this._setWidget();


    }

    /**
     *  Creating input element for display
     */
   this._setWidget = function(){
    this.widgetElement = document.createElement('input');    // setting widget =  creating element in DOM
    this.widgetElement.setAttribute('id',this.id);
    this.widgetElement.setAttribute('type','text');
    this.widgetElement.style.fontSize = "20px";
    this.widgetElement.style.fontFamily = "orbitron";
    this.widgetElement.setAttribute('placeholder','0');
    this.widgetElement.setAttribute('class', this.options.className);
    this.widgetElement.disabled = true;
    this.widgetElement.value = 0;
   }


this.getWidget = function(){
    return this.widgetElement;
}

this.destroy = function(){

}
this.init(id, options);



}