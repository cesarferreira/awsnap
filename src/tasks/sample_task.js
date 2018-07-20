#!/usr/bin/env node
'use strict';

const Chalk = require('chalk');
const log = console.log;
const fs = require('fs');
const Utils = require('../utils/utils');
const PNGImage = require('pngjs-image');
const mergeImages = require('merge-images');
const hexRgb = require('hex-rgb');
const Canvas = require('canvas');
var path = require('path');


function base64ToPNG(data, destination) {
	data = data.replace(/^data:image\/png;base64,/, '');

	fs.writeFile(path.resolve(process.cwd(), destination), data, 'base64', function (err) {
		if (err) throw err;
	});
}

function createImage(width, height, color) {
	var image = PNGImage.createImage(width, height);
	image.fillRect(0, 0, width, height, color)
	return image
}

function getStartPosition(bigger, small) {
	const position = {
		x: (bigger.x-small.x)/2,
		y: (bigger.y-small.y)/2
	}
	log(position)
	return position
}

// Main code //
const self = module.exports = {
	init: input => {

		if (input.length < 2) {
			log(Chalk.red(`You need to specify a params`));
			return;
		}

		const width = input[0]
		const height = input[1]
		const hex = input[2]
		const highlightImage = input[3]
		const outputPath = input[4]
		const outputTempPath = '.tmp-img.png'

		var image = createImage(width, height, hexRgb('#' + hex))

		PNGImage.readImage(highlightImage, function (err, hero) {
			if (err) throw err;

			// Get width and height
			console.log("background: "+width+" x "+height);
			console.log("hero: "+hero.getWidth()+" x "+hero.getHeight());

			// Generate background
			image.writeImage(outputTempPath, function (err) {
				if (err) throw err;

				const startPosition = getStartPosition({ x: width, y: height }, { x: hero.getWidth(), y: hero.getHeight() }, )

				mergeImages([
					{ src: outputTempPath, x: 0, y: 0 },
					{ src: highlightImage, x: startPosition.x, y: startPosition.y }
				], { Canvas: Canvas })
					.then(b64 => {
						fs.unlinkSync(outputTempPath)
						base64ToPNG(b64, outputPath)
						console.log('Written to the file');
						log(Chalk.green(`File ${Chalk.yellow(outputPath)} created!`));

						// base64Img.img(b64, outputPath, 'o.png', function (err, filepath) { 	});
					})
			});

		});


	}
};
