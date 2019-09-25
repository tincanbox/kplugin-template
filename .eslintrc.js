'use strict';

module.exports =
  {
    "extends": ['kintone', "eslint:recommended"],
    "plugins": [],
    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "env": {
      "node": true,
      "browser": true,
      "es6": true
    },
    "globals": {
      "_": true,
      "jQuery": true,
      "FM": true
    },
    "rules": {}
  }
