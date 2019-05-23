(function(kintone, factory) {
  'use strict';

  var plugin = new PluginMan(kintone);
  factory(plugin);

})(kintone, function(p){

  var plugin = p;
  var $ = plugin.$;

  var $gapi = new GAPI_adaptor({
    'apiKey': 'AIzaSyAcW436q2uyyXRXafn3ZltUsug5BMk4p50',
    'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest'],
    'clientId': '1032338763338-6cavpj8uregu46nh152c956okb2fifvu.apps.googleusercontent.com',
    'scope': 'https://www.googleapis.com/auth/spreadsheets'
  });

  $gapi.init().then(function(){
    console.log("auth completed");
  });

});
