#!/usr/bin/env node
const { resolve } = require('path');
const { runner } = require('hygen');
const Logger = require('hygen/lib/logger');
const defaultTemplates = resolve(__dirname,'templates');

function init() {
  const appName = process.argv[2] || 'my-app';

  runner([
    'reprocessing',
    'new',
    `--appName=${appName}`,
  ], {
    cwd: process.cwd(),
    debug: !!process.env.DEBUG,
    logger: new Logger(console.log.bind(console)),
    templates: defaultTemplates,
  });
}
  
init();