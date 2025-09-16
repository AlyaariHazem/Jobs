const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'jobs',
  filename: 'JobsModule.js',

  exposes: {
    './Component': './src/app/app.ts',
  },

  shared: {
    '@angular/core':   { singleton: true, strictVersion: true, requiredVersion: '20.3.0' },
    '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '20.3.0' },
    '@angular/router': { singleton: true, strictVersion: true, requiredVersion: '20.3.0' },
  },

});
