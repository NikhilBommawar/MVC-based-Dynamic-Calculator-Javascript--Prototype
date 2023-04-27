
/**
 * 
 * @param {cal-1} id 
 * @param {parentElement} parentElement 
 * @param {null} options 
 */

function CalculatorView(id, parentElement, options){

    this.init = function(id, parentElement, options){
        this.id = id;
        this.options = options;
        this.parentElement = parentElement;
        this.setCalculatorWidget();
    }

    // setting calculator widget i.e display container and button container under calculator container
    this.setCalculatorWidget = function(){

        // creating div for calculator container
        this.calculatorWidget = document.createElement('div');
        this.calculatorWidget.className = "calc-container";

        // creating div for button container
        this.btnContainer = document.createElement('div');
        this.btnContainer.className = 'btn-container';
       
        // creating div for display container
         this.displayContainer = document.createElement('div');
        this.displayContainer.className = "display-container";

        // creating div for numeric button container
        this.numericBtnContainer = document.createElement('div');
        this.numericBtnContainer.className = 'numBtn-container';

        // creating div for operation container
        this.operationBtnContainer = document.createElement('div');
        this.operationBtnContainer.className = 'opBtn-container';

        // creating div for function button container
        this.functionBtnContainer = document.createElement('div');
        this.functionBtnContainer.className = 'funBtn-container';

        // appending numeric,operation & function buttons to parent button container
        this.btnContainer.appendChild(this.functionBtnContainer);
        this.btnContainer.appendChild(this.operationBtnContainer);
        this.btnContainer.appendChild(this.numericBtnContainer);

        // appending display and button containers to the calculator widget container
        this.calculatorWidget.appendChild(this.displayContainer);
        this.calculatorWidget.appendChild(this.btnContainer);
        
        // appending calculator widget container to the parent Element div
        this.parentElement.appendChild(this.calculatorWidget);

    }

/**
 * method creating widget
 */
       createWidget = function(element,classname){
        this.element = element;
        this.classname = classname;
        this.widget = document.createElement(this.element);
        this.widget.className = this.classname;
        console.log(this.widget);
       }

       appendWidget = function(parentWidget,widget){
        this.parentWidget = parentWidget;
        this.widget = widget;
        this.parentWidget.appendChild.this.widget;
        console.log(this.parentWidget);
       }


     

     /**
     *  
     * @returns  calculator widget
     */
     this.getWidget = function(){
        return this.calculatorWidget;
    }

    /**
     * 
     * @param {*} displayElement = display widget
     */
    this.setDisplay = function(displayElement){
        this.displayContainer.appendChild(displayElement);
    }

    /**
     *  Setting Numeric Buttons to the numeric container
     * @param {*} NumBtnArray 
     */

    this.setNumberButtons = function(NumBtnArray){
        NumBtnArray.forEach(btn => {
            this.numericBtnContainer.appendChild(btn);
        });
    }


    /**
     *  Setting Opearation Buttons to the operation container
     * @param {*} operationBtnArray 
     */
    this.setOperationButtons = function(operationBtnArray){
        operationBtnArray.forEach(btn => {
            this.operationBtnContainer.appendChild(btn);
        });
    }

    /**
     *  Setting Function Buttons to the function container
     * @param {*} fnBtnsArray 
     */

    this.setFunctionButtons = function(fnBtnsArray){
        fnBtnsArray.forEach(btn => {
           this.functionBtnContainer.appendChild(btn);
        });
    }

    /**
     * 
     */
    
    this.init(id, parentElement, options);

}