// BASIC GULPFILE
// - - - - - - - - - - - - - - -
// This file processes all of the assets in the "client" folder
// and outputs the finished files in the "build" folder.

// 1. LIBRARIES
// - - - - - - - - - - - - - - -
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');

// 2. SETTINGS VARIABLES
// - - - - - - - - - - - - - - -
var paths = {
    client: 'client/',
    build: 'build/'
};

var assets = {
    js: 'assets/js/',
    css: 'assets/css/',
    vendor: 'assets/vendor/'
};

var files = {
    js: '**/*.js',
    css: '**/*.css',
    all: '**/*.*'
};

// 3. TASKS
// - - - - - - - - - - - - - - -
// Cleans the build directory
gulp.task('clean', function(cb) {
    del([paths.build], cb);
});

// Compiles and copies the JavaScript
gulp.task('js', function() {
    return gulp.src(paths.client + assets.js + files.js)
        .pipe(plugins.plumber())
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.concat('app.js'))
        .pipe(plugins.size({"showFiles":true}))
        .pipe(gulp.dest(paths.build + assets.js))
        .pipe(plugins.uglify())
        .on('error', function(e) { 
            console.log("Uglify did not complete."); 
        })
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.size({"showFiles":true}))
        .pipe(gulp.dest(paths.build + assets.js));
});

// Compiles scss and minifies CSS
gulp.task('css', function() {
    return gulp.src(paths.client + assets.css + files.css)
        .pipe(plugins.plumber())
        .pipe(plugins.autoprefixer())
        .pipe(plugins.concat('app.css'))
        .pipe(plugins.size({"showFiles":true}))
        .pipe(gulp.dest(paths.build + assets.css))
        .pipe(plugins.minifyCss())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.size({"showFiles":true}))
        .pipe(gulp.dest(paths.build + assets.css));
});

// Copies vendor files as is
gulp.task('vendor', function() {
    return gulp.src(paths.client + assets.vendor + files.all)
        .pipe(gulp.dest(paths.build + assets.vendor));
});

// Watch for changes and recompiles
gulp.task('watch', function() {
    gulp.watch(paths.client + assets.js + files.js, ['js']);
    gulp.watch(paths.client + assets.css + files.css, ['css']);
    gulp.watch(paths.client + assets.vendor + files.all, ['vendor']);
});

// Default task: builds your app
gulp.task('default', function() {
    runSequence('clean', ['js', 'css', 'vendor', 'watch'], function() {
        console.log("Successfully built.");
    });
});