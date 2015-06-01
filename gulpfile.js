var gulp = require('gulp');
var less = require('gulp-less');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var del = require('del');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var jsFiles = [
  'assets/vendor/jquery/dist/jquery.js',
  'assets/vendor/jquery-ui/jquery-ui.js',
  'assets/vendor/bootstrap/dist/bootstrap.js',
  'assets/vendor/bootstrap-multiselect/bootstrap-multiselect.js',
  'assets/vendor/formvalidation/dist/js/formValidation.js',
  'assets/vendor/formvalidation/dist/js/framework/bootstrap.js',
  //'assets/vendor/iframe-resizer/src/iframeResizer.contentWindow.js',
  'assets/js/*.js'
]

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task('styles', function() {
  return gulp.src('assets/sass/app.scss')
    .pipe(plumber())
  	.pipe(sourcemaps.init())
      .pipe(sass({ style: 'expanded' }))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(minifycss())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'Styles Compiled' }));
});

gulp.task('bootstrap', function() {
    gulp.src(['assets/less/bootstrap.less'])
        .pipe(plumber())
        .pipe(less())
        .pipe(minifycss())
        .pipe(rename('bootstrap.min.css'))
        .pipe(gulp.dest('dist/bootstrap'));
});

gulp.task('scripts', function () {
    return gulp.src(jsFiles)
        .pipe(plumber())
        .pipe(concat('app.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(notify({ message: 'Scripts Compiled' }));
});

gulp.task('watch', function() {
  gulp.watch('assets/sass/**', ['styles']);
});

gulp.task('default', ['bootstrap','styles', 'scripts']);

function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}