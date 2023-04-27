

/**
 * 
 * @param {"cal-1"} id 
 * @param {"cals"} elementId 
 * @param {null} options 
 */

function Calculator(id, elementId, options) {

    this.init = function (id, elementId, options) {

        // creating calculator model with given id
        this.model = new CalculatorModel(id, options);

        // getting parent element where  calculator code to be generated
        var parentElement = document.getElementById(elementId);

        // creating calculator view with given id and under parent Element
        this.view = new CalculatorView(id, parentElement, options);

        this.id = id;
        this.options = options;

        // getting widget element from calculator view
        this.widgetElement = this.view.getWidget();

        // setting widgets
        this.setWidgets();

    }


    // setting widgets for display and buttons

    this.setWidgets = function () {

        /**
         * Display
         */
        this.display = new Display('display_' + this.id, { className: "display_class" });
        this.displayElement = this.display.getWidget();
        this.view.setDisplay(this.displayElement);
        this.display.setDisplay(0);

        /**
       * function buttons
       */
       var fnBtns = this.model.functionBtns;  // getting function buttons from calculator model
        var fnBtnArray = [];
       
        for (let i = 0; i < fnBtns.length; i++) {
           
            var opt = {
                title: fnBtns[i], 
                value: fnBtns[i], 
                className: "btn btn-danger function",
                width : '100px' 
            }
            var fbtn = new FunctionButton('fnBtn_' + this.id + '_' + fnBtns[i], opt);
            
            var _this = this;
            fbtn.onBtnPress = function( ) {
                 _this.functionBtnClickHandler(fnBtns[i]);
            }
            fnBtnArray.push(fbtn.getWidget());
        }
        this.view.setFunctionButtons(fnBtnArray);
 

        /**
       * number buttons
       */

      
       var numBtns = this.model.numericalBtns;
        var numBtnArray = [];

     for (let i = 0; i < numBtns.length; i++) {
            var numBtn = new NumericButtons('numBtn_' + [i] + '_' + this.id, { title: numBtns[i], value: numBtns[i], className: 'btn btn-primary numerical' });
            var _this = this;
            numBtn.onBtnPress = function () {
               
                _this.numberBtnClickHandler( numBtns[i]);
            }
            numBtnArray.push(numBtn.getWidget());
        }

        this.view.setNumberButtons(numBtnArray);


        /**
        * operation buttons
        */
        var operationBtns = this.model.operationalBtns;
        var operationBtnArray = [];

        for (let i = 0; i < operationBtns.length; i++) {
            var operationBtn = new OperatorButton('opBtn_' + this.id + '_' + operationBtns[i], { title: operationBtns[i], value: operationBtns[i], className: 'btn btn-warning operations' });
            var _this = this;
            
            operationBtn.onBtnPress = function () {
                _this.operationBtnClickHandler(operationBtns[i]);

            }

            operationBtnArray.push(operationBtn.getWidget());

        }

        this.view.setOperationButtons(operationBtnArray);

    }


    /**
        * Numeric Button click Handler
        * @param {*} key 
        */
    this.numberBtnClickHandler = function (key) {
        console.log(key)
        var displayContent = this.display.getDisplayValue();
        if (displayContent.substring(0) == 0) {
            this.display.setDisplay(key);
        }
        else {
            this.display.setDisplay(displayContent += key);
        }
    }

    /**
      * Operation Button click Handler
      * @param {*} key 
    */
    this.operationBtnClickHandler = function (key) {
        console.log(key)
        var displayContent = this.display.getDisplayValue();

        if (key == "=") {
            var initialDisplay = this.display.getDisplayValue();
            var result = eval(initialDisplay);
            this.display.setDisplay(initialDisplay + ' = ' + result);
        }
        else {
            displayContent += key;
            this.display.setDisplay(displayContent);
        }
    }



    /**
     * Function Button click Handler
     * @param {*} key 
     */

    this.functionBtnClickHandler = function (key) {
        console.log(key)
        var displayContent = this.display.getDisplayValue();
        if (key == 'AC') {
            this.display.setDisplay(0);
        }
        else if (key == "DEL") {
            this.display.setDisplay(displayContent.substring(0, displayContent.length - 1));
        }

    }



    this.init(id, elementId, options)

}