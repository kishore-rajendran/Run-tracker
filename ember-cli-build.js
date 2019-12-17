'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
var nodeSass = require('node-sass');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      implementation: nodeSass,
      extension: 'scss'
    }
  });
  app.import("node_modules/fusioncharts/fusioncharts.js");
  app.import("node_modules/fusioncharts/fusioncharts.charts.js");
  app.import("node_modules/fusioncharts/themes/fusioncharts.theme.fusion.js");
  return app.toTree();
};
