(function(kintone, factory) {
  'use strict';

  var plugin = new PluginMan(kintone);
  factory(plugin);

})(kintone, function(p){

  var plugin = p;
  var $ = plugin.$;

  var ST = {
    form_prop: null
  };

  var CNF = {
  };

  var ACT = {
  };

  function init(){
    console.log("Initializing");

    plugin.config.$form.on('submit', function(e) {
      e.preventDefault();
      plugin.config.save().then(on_save);
    });

  }

  function on_save(){
    plugin.dialog({
      type: "success",
      title: "",
      text: "保存しました！"
    });
  }

  init();
});
