// Package to optimize general images
var Imagemin = require('imagemin');
// Package to optimize JPEG images
var imageminMozjpeg = require('imagemin-mozjpeg');
// Package to resize images
var im = require('imagemagick');

// Optimize JPEG images
new Imagemin()
  .src('src/views/images/*.jpg')
  .dest('dist/views/images')
  .use(imageminMozjpeg({quality: 10}))
  .run();

new Imagemin()
  .src(['src/img/cam_be_like.jpg','src/img/mobilewebdev.jpg'])
  .dest('dist/img')
  .use(imageminMozjpeg({quality: 50}))
  .run();

// Optimize other images
new Imagemin()
  .src(['src/img/2048.png','src/img/profilepic.jpg'])
  .dest('dist/img')
  .run();

new Imagemin()
  .src('src/views/images/*.{png,gif,svg}')
  .dest('dist/views/images')
  .run();

// Resize pizzeria.jpg for index.html only
im.resize({
  srcPath: 'dist/views/images/pizzeria.jpg',
  dstPath: 'dist/views/images/pizzeria-small.jpg',
  width: 100
}, function(err, stdout, stderr){
  if (err) throw err;
  console.log('pizzeria-small successfully created');
});
