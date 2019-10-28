import SharedLib from '../lib/shared.js';

(function(k, factory) {
  'use strict';

  factory(new Kluginn.default(), {
    plugin: "YOUR_PLUGIN_NAME"
  });

})(kintone, function(p, info){

  const shared_lib = new SharedLib();

  var K = p;
  var $ = K.$;
  var S = {
    config: K.config.fetch()
  };

  K.init().then(main);

  /* Put kintone-event listener on top level.
   *
   * K.$k.events.on()
   */

  function main(){
  }

});
