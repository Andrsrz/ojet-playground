/**
  Copyright (c) 2015, 2021, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
'use strict';
define(
    ['knockout', 'ojL10n!./resources/nls/demo-card-2-strings', 'ojs/ojcontext', 'ojs/ojknockout'], function (ko, componentStrings, Context) {
    
    function ExampleComponentModel(context) {        
        //At the start of your viewModel constructor
        var busyContext = Context.getContext(context.element).getBusyContext();
        var options = {"description": "Web Component Startup - Waiting for data"};
        this.busyResolve = busyContext.addBusyState(options);

        this.composite = context.element;

        this.initials = null;
        this.workFormatted = null;
        var element = context.element;

        /**
         * Formats a 10 digit number as a phone number.
         * @param  {number} number The number to format
         * @return {string}        The formatted phone number
         */
        var formatPhoneNumber = function(number) {
          return Number(number).toString().replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        }

        if (context.properties.name) {
          var initials = context.properties.name.match(/\b\w/g);
          this.initials = (initials.shift() + initials.pop()).toUpperCase();
        }
        if (context.properties.workNumber)
          this.workFormatted = formatPhoneNumber(context.properties.workNumber);

        /**
         * Flips a card
         * @param  {MouseEvent} event The click event
         */
        this.flipCard = function(event) {
          if (event.type === 'click' || (event.type === 'keypress' && event.keyCode === 13)) {
            // It's better to look for View elements using a selector
            // instead of by DOM node order which isn't guaranteed.
            element.querySelector('.demo-card-2-flip-container').classList.toggle('demo-card-2-flipped');
          }
        };

        //Example observable
        this.properties = context.properties;
        this.res = componentStrings['demo-card-2'];
        // Example for parsing context properties
        // if (context.properties.name) {
        //     parse the context properties here
        // }

        //Once all startup and async activities have finished, relocate if there are any async activities
        this.busyResolve();
    };
    
    //Lifecycle methods - uncomment and implement if necessary 
    //ExampleComponentModel.prototype.activated = function(context){
    //};

    //ExampleComponentModel.prototype.connected = function(context){
    //};

    //ExampleComponentModel.prototype.bindingsApplied = function(context){
    //};

    //ExampleComponentModel.prototype.disconnected = function(context){
    //};

    //ExampleComponentModel.prototype.propertyChanged = function(context){
    //};

    return ExampleComponentModel;
});
