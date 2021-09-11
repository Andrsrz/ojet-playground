/**
  Copyright (c) 2015, 2021, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
'use strict';
define(
    ['knockout', 
    'ojL10n!./resources/nls/my-dropdown-with-chart-strings', 
    'ojs/ojcontext',
    'ojs/ojarraydataprovider', 
    'ojs/ojknockout'], 
    function (ko, componentStrings, Context, ArrayDataProvider) {
    
    function ExampleComponentModel(context) {
        //At the start of your viewModel constructor
        var busyContext = Context.getContext(context.element).getBusyContext();
        var options = {"description": "Web Component Startup - Waiting for data"};
        this.busyResolve = busyContext.addBusyState(options);

        this.composite = context.element;

        // Types objects to use on selector
        let types = [
          { value: 'pie', label: 'Pie'},
          { value: 'bar', label: 'Bar'}
        ];

        //  Set types objects into array to use it
        this.chartTypes = new ArrayDataProvider(types, { keyAttributes: 'value'});
        this.val = context.properties.chartType ? ko.observable(context.properties.chartType) : ko.observable("pie");

        // Dummy data to show on chart
        let chartData = [
          { "id": 0, "series": "Baseball", "group": "Group A", "value": 42 },
          { "id": 1, "series": "Baseball", "group": "Group B", "value": 34 },
          { "id": 2, "series": "Bicycling", "group": "Group A", "value": 55 },
          { "id": 3, "series": "Bicycling", "group": "Group B", "value": 30 },
          { "id": 4, "series": "Skiing", "group": "Group A", "value": 36 },
          { "id": 5, "series": "Skiing", "group": "Group B", "value": 50 },
          { "id": 6, "series": "Soccer", "group": "Group A", "value": 22 },
          { "id": 7, "series": "Soccer", "group": "Group B", "value": 46 }
        ];

        // Set chart data objects into array to use it
        this.chartDataProvider = new ArrayDataProvider(chartData, { keyAttributes: 'id'});

        this.properties = context.properties;
        this.res = componentStrings['my-dropdown-with-chart'];

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
