# Website Performance Optimization portfolio project

## Getting started
Make sure you have the followings installed in your system:
* Node JS: download the installer from [this link](https://nodejs.org/en/download/).
* NPM : installed when you install Node.

To build the distribution version from the src directory run this in this project root directory:
```bash
$> npm run build
```
To serve the distribution directory in your local machine and watch changes in files, run this in this project root directory:
```bash
$> npm run dev
```

## Resources
* This project uses NPM as a task runner as recommended in [this article](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/).
* NPM Packages:
  * [clean-css](https://www.npmjs.com/package/clean-css)
  * [html-minifier](https://www.npmjs.com/package/html-minifier)
  * [http-server](https://www.npmjs.com/package/http-server)
  * [imagemagick](https://www.npmjs.com/package/imagemagick)
  * [imagemin](https://www.npmjs.com/package/imagemin)
  * [imagemin-mozjpeg](https://www.npmjs.com/package/imagemin-mozjpeg)
  * [livereload](https://www.npmjs.com/package/livereload)
  * [onchange](https://www.npmjs.com/package/onchange)
  * [opener](https://www.npmjs.com/package/opener)
  * [parallelshell](https://www.npmjs.com/package/parallelshell)
  * [uglify-js](https://www.npmjs.com/package/uglify-js)

## Steps taken to optimize this project:
### Page index.html
1. Install Node and NPM
2. Create package.json file inside root directory of this project and include NPM packages listed above as dependencies
3. Write NPM scripts to automatically run tasks for you
4. Optimize index.html file
  * Make JS asynchronous
  * Inline CSS
5. Run tasks from NPM scripts for these optimization tasks:
  * Minify HTML
  * Minify CSS
  * Minify JS
  * Optimize Images
    * Optimizing images scripts are inside [node_scripts/optimize-images.js](https://github.com/WisnuMulya/frontend-nanodegree-mobile-portfolio/tree/master/node_scripts)

### Page pizza.html
1. Refactor ```resizeImage``` function in main.js by eliminating ```determineDx``` function.
2. Refactor ```updatePositions``` function in main.js by bringing ```document.body.scrollTop``` outside the loop.
3. Reduce the number of background pizzas generated and calculate the number dynamically depending on the user's window's height. This changes are in line 519-521 in main.js.

### Nitpicks
1. Include 'use strict' in every function definitions
2. Use ```getElementsByClassName``` or ```getElementById``` instead of ```querySelectorAll``` or ```querySelector```.
