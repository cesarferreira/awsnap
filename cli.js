#!/usr/bin/env node
'use strict';

const meow = require('meow');
const router = require('./src/router');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({ pkg }).notify();

const cli = meow(`
Usage

   $ awsnap <command> <params>

   $ awsnap sample <param>             # Uses the <PARAM>
   $ awsnap other <param>              # Other the <PARAM>
   $ awsnap another <param>            # Another the <PARAM>
   
 Examples

   $ awsnap sample TEST                # Uses the TEST
   $ awsnap sample YOLO                # Uses the YOLO
   $ awsnap other YOLO                 # Uses the YOLO
   $ awsnap another YOLO               # Uses the YOLO
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