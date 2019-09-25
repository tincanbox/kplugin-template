(function(root, factory) {
  'use strict';

  var namespace   = 'GAPI_adaptor';

  // Exposure!!
  ;((typeof exports) === "object" && (typeof module) === "object")
    ? (module.exports = factory())
    : (
      (typeof define === "function" && define.amd)
        ? define([], factory)
        : (root[namespace] = factory())
      );

})(this, function(){

  var $ = jQuery.noConflict();

  function GAPI_adaptor(conf){
    var self = this;
    self.ins = gapi;
    self.config = conf;
  }

  var prt = GAPI_adaptor.prototype;

  prt.ins = null;
  prt.config = null;

  prt.init = function(){
    var p = new $.Deferred;
    var self = this;
    self.oauth(
      function(){
        self.ins.client.init(self.config);
        p.resolve();
      },
      function(){
        p.reject();
      }
    );
    return p;
  }

  prt.oauth = function(success, fail){
    return gapi.load('client:auth2', {
      callback: success,
      onerror: fail
    });
  }

  prt.signin = function(){
    if(this.is_signedin()){
      return true;
    }else{
      return this.ins.auth2.getAuthInstance().signIn();
    }
  }

  prt.is_signedin = function(){
    return this.auth2.getAuthInstance().isSignedIn.get() ? true : false;
  }

  return GAPI_adaptor;
});
