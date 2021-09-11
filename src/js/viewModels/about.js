/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your about ViewModel code goes here
 */
define(['knockout', 'accUtils', 'ojs/ojarraydataprovider', 'ojs/ojhtmlutils', 'ojs/ojlabel', 'ojs/ojselectsingle', 'ojs/ojchart', 'ojs/ojbinddom', 'my-dropdown-with-chart/loader'],
 function(ko, accUtils, ArrayDataProvider, HtmlUtils) {
    function AboutViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      // Types objects to use on selector
      let types = [
        { value: 'pie', label: 'Pie'},
        { value: 'bar', label: 'Bar'}
      ];

      // Set types objects into array to use it
      this.chartTypes = new ArrayDataProvider(types, { keyAttributes: 'value'});
      this.val = ko.observable("pie");

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

      // Color for p tag
      this.color = 'purple';
      this.customId = 'purple';

      // HTML elements
      this.config = {
        view: HtmlUtils.stringToNodeArray("<h1>Content from config object</h1>"),
        data: {}
      };

      // Class binding
      this.pinkBox = 'pinkBox';

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.connected = () => {
        accUtils.announce('Information page loaded.', 'assertive');
        document.title = "Information";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return AboutViewModel;
  }
);
