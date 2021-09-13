/**
  Copyright (c) 2015, 2021, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
define(['ojs/ojcomposite', 'text!./demo-card-2-view.html', './demo-card-2-viewModel', 'text!./component.json', 'css!./demo-card-2-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('demo-card-2', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);