#!/usr/bin/env node

//const shell = require("shelljs");
const path = require("path");
const scriptPath = path.join(__dirname, '../stunserver/stunserver');
const scriptArgs = process.argv.slice(2)
const { execFile } = require('child_process');

execFile(scriptPath, scriptArgs, (error, stdout, stderr) => {
  process.stdout.write(stdout);
  process.stderr.write(stderr);
});
