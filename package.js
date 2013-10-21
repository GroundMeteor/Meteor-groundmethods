Package.describe({
  summary: "Ground Meteor Method calls offline\n"+
  "\u001b[32mv0.0.1\n"+
  "\u001b[33m-----------------------------------------\n"+
  "\u001b[0m GroundMethods is a thin layer providing  \n"+
  "\u001b[0m Meteor offline methods                   \n"+
  "\u001b[33m-------------------------------------RaiX\n"
});

Package.on_use(function (api) {
  "use strict";
  //api.export && api.export('GroundMethods');
  api.export && api.export('_gMethods', ['client', 'server'], {testOnly: true});
  api.use(['meteor', 'underscore', 'random', 'minimongo', 'ejson', 'ejson-minimax'],
          ['client', 'server']);

  api.use('standard-app-packages', ['client', 'server']);

  api.use(['deps'], 'client');
  //api.use([], 'server');
  //api.use(['localstorage', 'ejson'], 'client');
  api.add_files('groundMethods.client.js', 'client');
  api.add_files('groundMethods.server.js', 'server');
});

Package.on_test(function (api) {
  api.use('groundmethods', ['client']);
  api.use('test-helpers', 'client');
  api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
           'random', 'deps']);

  api.add_files('groundMethods.client.tests.js', 'client');
  api.add_files('groundMethods.server.tests.js', 'server');
});
