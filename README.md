## This repository for reproducing bug with gulp-postcss and gulp-sourcemaps ##

Steps to reproduce:
 1. npm install
 2. run gulp
 3. inspect "image-container" (*you can see details on screenshot*)
 4. uncomment second task in gulpfile.js (and comment first)
 5. run gulp
 6. result: everything fine if use with poststylus
 
issue is here https://github.com/postcss/gulp-postcss/issues/80
