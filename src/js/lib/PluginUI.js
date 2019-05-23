(function(root, factory) {
  'use strict';

  var namespace   = 'PluginUI';

  // Exposure!!
  ;((typeof exports) === "object" && (typeof module) === "object")
    ? (module.exports = factory())
    : (
      (typeof define === "function" && define.amd)
        ? define([], factory)
        : (root[namespace] = factory())
      );

})(this, function(){

  function PluginUI(par, opt){
    var self = this;
    self.par = par;
    self.$k = par.$k;
    self.$ = par.$;
    self.opt = opt || {};

    self.init_action_handler();
  }

  var prt = PluginUI.prototype;

  /*
   */
  prt.init_action_handler = function(){
    var self = this;
    var cls = ".action-handler";
    self.par.$(cls).each(function(i, el){
      var $el = plugin.$(el);
      var evc = $el.attr("data-action").split(":");
      var evn = evc[0];
      var evh = evc[1];
      if(ACT.hasOwnProperty(evh)){
        self.par.$(document).on(evn, cls, self.par.$.proxy(ACT[evh], self.par.$));
      }
    });
  }

  /*
   */
  prt.render = function(template_id, attr){
    var t_el = document.getElementById('template:' + template_id);
    if(t_el){
      var comp = _.template(this.$(t_el).html());
      return attr ? comp(attr) : comp;
    }else{
      return "TEMPLATE ERROR";
    }
  }

  return PluginUI;
});
