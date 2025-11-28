#!/usr/bin/node
const { exec } = require('child_process');
require('process')

const command = process.argv[2] || 'ls -l'

const display = (error, stdout, stderr) => {
  if (error) { console.error(error); return };
  if (stderr) { console.error(stderr); return };
  console.log(stdout);
}

exec(command, display);