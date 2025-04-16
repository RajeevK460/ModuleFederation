const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'sharedui',  // Unique remote name used by hosts
  exposes: {
    './Button': './src/app/button/button.component.ts',
    './Card': './src/app/card/card.component.ts'
  },
  shared: {
    //...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
    shared: {
      '@angular/core': { singleton: true, strictVersion: true, requiredVersion: '19.2.0' },
    '@angular/common': { singleton: true, strictVersion: true, requiredVersion: '19.2.0' },
    '@angular/router': { singleton: true, strictVersion: true, requiredVersion: '19.2.0' }
    }
  }
});