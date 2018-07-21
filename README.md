# awsnap
> 🏄  Generate beautiful screenshots

<p align="center">
  <img src="extras/output.png" width="100%" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/awsnap"><img src="https://img.shields.io/npm/dt/awsnap.svg" alt="npm"></a>
  <a href="https://www.npmjs.com/package/awsnap"><img src="https://img.shields.io/npm/v/awsnap.svg" alt="npm"></a>
  <a href="https://github.com/cesarferreira/awsnap/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
</p>


I decided to open source the tool I've developed to create [this](https://github.com/cesarferreira/facelift):

<p align="center">
  <img src="extras/facelift-ss.png" width="90%" />
</p>

## Install

```sh
brew install pkg-config cairo libpng jpeg giflib imagemagick
```

```sh
npm install -g awsnap
```

## Usage

```
Usage

   $ awsnap <command> <params>

```

```
Examples
   $ awsnap generate 2000 800 f7d794 extras/ss.png extras/output.png 1500 700    
```

this will generate an image with the size of `2000 x 800`, color `#f7d794`, screenshot at `extras/ss.png` will output into `extras/output.png` and optionally will crop the image to be `1500 x 700`

Here you can see the `ss.png` :

<p align="center">
  <img src="extras/ss.png" width="100%" />
</p>

the output is:

> awsnap generate 2000 800 d3d3d3 extras/ss.png extras/output.png 1500 700
<p align="center">
  <img src="extras/output.png" width="100%" />
</p>

> awsnap generate 2000 800 718B71 extras/ss.png extras/output2.png 1500 700
<p align="center">
  <img src="extras/output2.png" width="100%" />
</p>

> awsnap generate 2000 800 d3d3d3 extras/ss.png extras/output3.png 1500 700
<p align="center">
  <img src="extras/output3.png" width="100%" />
</p>

## Created by
[Cesar Ferreira](https://cesarferreira.com)

## License
MIT © [Cesar Ferreira](http://cesarferreira.com)
