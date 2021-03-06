// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var templatecache = require('gulp-angular-templatecache');

var path = {
  js: [
    './app/index.module.js',
    './app/**/*.module.js',
    './app/**/*.js'
  ],
  css: [
    './app/**/*.css'
  ],
  html: [
    './app/index.html',
    './app/**/*.html'
  ],
  vendorjs: [
    './bower_components/angular/angular.js',
    './bower_components/angular-ui-router/release/angular-ui-router.js',
    './bower_components/jquery/dist/jquery.js'
  ]
};

// tasks
gulp.task('lint', function() {
  gulp.src(path.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});
gulp.task('clean', function() {
  return gulp.src(['./build/css/*.css', './build/*.js'])
    .pipe(clean({force: true}));
});
gulp.task('minify-css', function() {
  return gulp.src(['./app/**/*.css'])
    .pipe(gulp.dest('./build/'))
    .pipe(connect.reload());
});
gulp.task('vendorjs', function () {
  return gulp.src(path.vendorjs)
    .pipe(uglify())
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('./build/'));
});
gulp.task('browserify', function() {
  return gulp.src(path.js)
    .pipe(concat('bundled.js'))
    .pipe(gulp.dest('./build/'))
    .pipe(connect.reload());
});
gulp.task('templatecache', function () {
  return gulp.src(path.html)
    .pipe(templatecache('templates.js', {
        module: 'bm',
        standalone: false,
        root: 'app/'
    }))
    .pipe(gulp.dest('./build/'))
    .pipe(connect.reload());
});
gulp.task('connect', function () {
  return connect.server({
    root: 'app',
    port: 8100,
    livereload: true,
    middleware: function(connect) {
        return [
          connect().use('/bower_components', connect.static('bower_components')),
          connect().use('/build', connect.static('build'))
        ];
    }
  });
});

gulp.task('watch', function() {
  gulp.watch(path.js, ['browserify']);
  gulp.watch(path.css, ['minify-css']);
  gulp.watch(path.html, ['templatecache']);
});

// *** default task *** //
gulp.task('default', ['build', 'watch', 'connect']);
// *** build task *** //
gulp.task('build', function() {
  runSequence(
    ['clean'],
    [/*'lint',*/ 'minify-css', 'vendorjs', 'templatecache', 'browserify']
  );
});