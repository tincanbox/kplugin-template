(function(root, factory) {
  'use strict';

  var namespace   = 'PluginAPI';

  // Exposure!!
  ;((typeof exports) === "object" && (typeof module) === "object")
    ? (module.exports = factory())
    : (
      (typeof define === "function" && define.amd)
        ? define([], factory)
        : (root[namespace] = factory())
      );

})(this, function(){

  function PluginAPI(par, opt){
    var self = this;
    self.par = par;
    self.$k = par.$k;
    self.$ = par.$;
  }

  var prt = PluginAPI.prototype;

  prt.request = function(method, url, param){
    console.log("API Request[" + method + "]", url);
    var self = this;
    return self.$k.api(
      self.$k.api.url(url, true),
      method.toUpperCase(),
      param ? (self.$.extend({app: self.$k.app.getId()}, param || {})) : null
    );
  }

  prt.error_handler = function(r){
    var self = this;
    return new self.$k.Promise(function(res, rej){
      console.log("PLUGIN API ERROR", r);
      switch(r.code){
        // Error: The app %% not found
        case "GAIA_AP01":
          break;
        default:
          break;
      }
      return rej(r);
    });
  }


  /*----------------------------------------------
   * Aliases
   *----------------------------------------------
   */

  prt.fetch_form_field_list = function(){
    return this.request('get', '/k/v1/app/form/fields', {});
  }

  return PluginAPI;

});
