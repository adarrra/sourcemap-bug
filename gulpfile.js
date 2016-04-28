
/* jslint node: true */

'use strict';
var autoprefixer = require('autoprefixer');
var csso = require('postcss-csso');
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var poststylus = require('poststylus');
var sourcemaps = require('gulp-sourcemaps');
var stylus = require('gulp-stylus');

var paths = {
    stylSrc: './main.styl',
    output: './build'
};

gulp.task('cssbuild', function () {
    gulp.src(paths.stylSrc)
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(postcss([
         autoprefixer({browsers: ['ie >= 9', 'last 2 versions']}),
         csso()
     ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.output));
});

// THIS EXAMPLE WORKING RIGHT:
// gulp.task('cssbuild', function () {
//     gulp.src(paths.stylSrc)
//     .pipe(sourcemaps.init())
//     .pipe(stylus({
//         use: [
//         poststylus([
//         autoprefixer({browsers: ['ie >= 9', 'last 2 versions']}),
//         'postcss-csso'
//         ])
//       ]
//     }))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest(paths.output));
// });

gulp.task('default', ['cssbuild']);
