"use strict";
const runAll = require("npm-run-all");

runAll(["develop", "upload"], {
  parallel: false,
  stdout: process.stdout,
  stdin: process.stdin
}).catch(({results}) => {
  if (results)
    results
      .filter(({code}) => code)
      .forEach(({name}) => {
        console.log(`"npm run ${name}" was failed`);
      });
});
