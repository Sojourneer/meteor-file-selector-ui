Package.describe({
  name: 'sojourneer:file-selector-ui',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

var basePackages = [
  'ecmascript'
  ,'underscore'
  ,'meteor-base'
  ,'blaze-html-templates'
  ,'session'
  ,'jquery'
  ,'tracker'
  ,'check'
  ,'kadira:blaze-layout'
  ,'templating'
];

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(basePackages);
  api.addFiles('file-selector-ui.html', "client");
  api.addFiles('file-selector-ui.js', "client");
});

Package.onTest(function(api) {
  api.use(basePackages);
  api.use('tinytest');
  api.use('sojourneer:file-selector-ui');
  api.addFiles('file-selector-ui-tests.js');
});
