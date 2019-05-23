(function(root, factory) {
  'use strict';

  var namespace   = 'PluginConfig';

  // Exposure!!
  ;((typeof exports) === "object" && (typeof module) === "object")
    ? (module.exports = factory())
    : (
      (typeof define === "function" && define.amd)
        ? define([], factory)
        : (root[namespace] = factory())
      );

})(this, function(){

  function PluginConfig(par, opt){
    var self = this;
    self.par = par;
    self.$k = par.$k;
    self.$ = par.$;
    self.opt = opt || {};
    self.$form = self.$('.js-submit-settings');

    self.init();
  }

  var prt = PluginConfig.prototype;

  /* Object
   */
  prt.init = function(){
    this.update_form();
  }

  /* Object
   */
  prt.option = {
    "form_input_class": "plugin-data"
  }

  /* name[%form_input_class%] を持つ全要素に対して、
   * val() で値の更新をかける。主に fetch_config とのセット用。
   *
   * ( void
   * ) -> Nothing
   */
  prt.apply_app_config = function(){
    var self = this;
    for(var k in self.config){
      self.par.$("." + self.option.form_input_class + "[name=" + k + "]").val(self.config[k]);
    }
  }

  /* 
   *
   * ( p:Object = Object for setConfig(p) param.
   * ) -> Promise
   */
  prt.save = function(p){
    var self = this;
    return new self.$k.Promise(function(res, rej){
      var d = self.retrieve_form_data();
      console.log("Saving form data", d);
      try{
        self.$k.plugin.app.setConfig(d, function() {
          self.update_form();
          res(self.config);
        });
      }catch(e){
        rej(e);
      }
    });
  }

  /* getConfig() して self.config の内容を更新するだけ。
   *
   * ( void
   * ) -> Nothing
   */
  prt.fetch_config = function(){
    var self = this;
    self.config = self.par.$k.plugin.app.getConfig(self.par.plugin_id)
    return self.config;
  }

  /* fetch_config で self.config の内容を更新したうえで、
   * apply_app_config を呼ぶだけのショートカット
   *
   * ( void
   * ) -> Nothing
   */
  prt.update_form = function(){
    console.log("Updating form");
    this.fetch_config();
    this.apply_app_config();
  }

  /* form_input_class(default: plugin-data) に設定された要素を全取得し、
   * val() で取得した値をObjectにまとめて返す
   *
   * ( void
   * ) -> Object
   */
  prt.retrieve_form_data = function(){
    var self = this;
    var data = {};
    self.par.$("." + self.option.form_input_class).each(function(i, el){
      var $el = self.par.$(el);
      var nm = $el.attr("name");
      data[nm] = $el.val();
    });
    return data;
  }

  return PluginConfig;

});
