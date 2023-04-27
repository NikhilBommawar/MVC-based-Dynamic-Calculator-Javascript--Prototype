
/**
 * 
 * @param {*} id  = 'display_' + this.id
 * @param {*} options ={ className:"display_class"}
 */

function Display(id, options) {

    this.init = function(id, options){
        this.model = new DisplayModel(id, options);      // getting display model
        this.view = new DisplayView(id, options);       // getting display view and setting widget simultaneously
        this.id = id;
        this.options = options;
        this.widgetElement = this.view.getWidget();    // getting widget of display
    
    }
        

    /**
     * 
     * @returns display widget
     */

    this.getWidget = function () {
        return this.widgetElement;
    }


    /**
     * 
     * @returns 
     */

    this.getDisplayValue = function () {
        return this.widgetElement.value;
    }

    /**
     * 
     * @param {0} val 
     */
    
    this.setDisplay = function (val) {
        this.widgetElement.value = val;
    }

    this.init(id,options);
}