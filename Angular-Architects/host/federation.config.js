const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'host',
 remotes:{},

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});
