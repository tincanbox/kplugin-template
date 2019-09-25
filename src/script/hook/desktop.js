(function(kintone, factory) {
  'use strict';

  var plugin = new Kluginn(kintone);
  factory(plugin);

})(kintone, function(p){

  var plugin = p;
  var $ = plugin.$;

  // Do Your Thing

  /* Sample: Google OAuth
  var $gapi = new GAPI_adaptor({
    'apiKey': '',
    'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest'],
    'clientId': '',
    'scope': 'https://www.googleapis.com/auth/spreadsheets'
  });

  $gapi.init().then(function(){
    console.log("auth completed");
  });
  */

});
