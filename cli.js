#!/usr/bin/env node
'use strict';

const meow = require('meow');
const router = require('./src/router');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({ pkg }).notify();

const cli = meow(`
Usage

   $ makeup <command> <params>

   $ makeup sample <param>             # Uses the <PARAM>
   $ makeup other <param>              # Other the <PARAM>
   $ makeup another <param>            # Another the <PARAM>
   
 Examples

   $ makeup sample TEST                # Uses the TEST
   $ makeup sample YOLO                # Uses the YOLO
   $ makeup other YOLO                 # Uses the YOLO
   $ makeup another YOLO               # Uses the YOLO
`,
  {
    alias: {
      v: 'version'
    },
    boolean: ['version']
  }
);

if (cli.input.length > 0) {
	router.init(cli.input, cli.flags);
} else {
	cli.showHelp(2);
}