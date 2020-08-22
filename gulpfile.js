const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();

function style () {
	return gulp.src('./less/**/*.less')
		   .pipe(less())
		   .pipe(gulp.dest('./css'))
		   .pipe(browserSync.stream())
}

function watch () {
	browserSync.init({
		server: {
			baseDir: './'
		}
	})
	gulp.watch('./less/**/*.less', style);
}
exports.style = style;
exports.watch = watch;

