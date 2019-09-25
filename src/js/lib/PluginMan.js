(function(root, factory) {
  'use strict';

  var namespace   = 'PluginMan';

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

  function PluginMan(kintone, opt){
    var self = this;
    self.$ = $;
    self.$k = kintone;
    self.plugin_id = self.$k.$PLUGIN_ID;
    self.config = new PluginConfig(self);
    self.api = new PluginAPI(self);
    self.ui = new PluginUI(self);
  }

  var prt = PluginMan.prototype;

  /*
   * 詳細は sweetalert2 のヘルプを参照。
   */
  prt.dialog = function(){
    return Swal.queue.apply(Swal, [arguments]);
  }

  return PluginMan;

});
