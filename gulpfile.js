// BASIC GULPFILE
// - - - - - - - - - - - - - - -
// This file processes all of the assets in the "src" folder
// and outputs the finished files in the "dist" folder.

// 1. LIBRARIES
// - - - - - - - - - - - - - - -
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');

// 2. SETTINGS VARIABLES
// - - - - - - - - - - - - - - -
var paths = {
    src: 'src/',
    dist: 'dist/'
};

var assets = {
    js: 'js/',
    css: 'css/',
    img: 'img/',
    lib: 'lib/'
};

var files = {
    js: '**/*.js',
    css: '**/*.css',
    all: '**/*.*'
};

// 3. TASKS
// - - - - - - - - - - - - - - -
// Cleans the dist directory
gulp.task('clean', function() {
    del([paths.dist]);
});

// Compiles and copies the JavaScript
gulp.task('js', function() {
    return gulp.src(paths.src + assets.js + files.js)
        .pipe(plugins.plumber())
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.concat('app.js'))
        .pipe(plugins.size({"showFiles":true}))
        .pipe(gulp.dest(paths.dist + assets.js))
        .pipe(plugins.uglify())
        .on('error', function(e) { 
            console.log("Uglify did not complete."); 
        })
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.size({"showFiles":true}))
        .pipe(gulp.dest(paths.dist + assets.js));
});

// Compiles scss and minifies CSS
gulp.task('css', function() {
    return gulp.src(paths.src + assets.css + files.css)
        .pipe(plugins.plumber())
        .pipe(plugins.autoprefixer())
        .pipe(plugins.concat('app.css'))
        .pipe(plugins.size({"showFiles":true}))
        .pipe(gulp.dest(paths.dist + assets.css))
        .pipe(plugins.minifyCss())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.size({"showFiles":true}))
        .pipe(gulp.dest(paths.dist + assets.css));
});

// Optimizes img files
gulp.task('img', function() {
    return gulp.src(paths.src + assets.img + files.all)
        .pipe(gulp.dest(paths.dist + assets.img));
});

// Copies lib files as is
gulp.task('lib', function() {
    return gulp.src(paths.src + assets.lib + files.all)
        .pipe(gulp.dest(paths.dist + assets.lib));
});

// Watch for changes and recompiles
gulp.task('watch', function() {
    gulp.watch(paths.src + assets.js + files.js, ['js']);
    gulp.watch(paths.src + assets.css + files.css, ['css']);
    gulp.watch(paths.src + assets.img + files.all, ['img']);
    gulp.watch(paths.src + assets.lib + files.all, ['lib']);
});

// Default task: builds your app
gulp.task('default', function() {
    runSequence('clean', ['js', 'css', 'img', 'lib', 'watch'], function() {
        console.log("Successfully built.");
    });
});