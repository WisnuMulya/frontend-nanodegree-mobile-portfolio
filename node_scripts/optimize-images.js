var Imagemin = require('imagemin');
var imageminMozjpeg = require('imagemin-mozjpeg');

new Imagemin()
  .src('src/views/images/*.jpg')
  .dest('dist/views/images')
  .use(imageminMozjpeg({quality: 10}))
  .run();

new Imagemin()
  .src('src/img/*.jpg')
  .dest('dist/img')
  .use(imageminMozjpeg({quality: 50}))
  .run();

new Imagemin()
  .src('src/img/*.{png,gif,svg}')
  .dest('dist/img')
  .run();

new Imagemin()
  .src('src/views/images/*.{png,gif,svg}')
  .dest('dist/views/images')
  .run();
