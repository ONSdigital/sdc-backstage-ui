var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    react = require('gulp-react'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream'),
    livereload = require('gulp-livereload'),
    webserver = require('gulp-webserver'),
    argv = require('yargs').argv,

    fs = require('fs'),

    config = {
        jsSrc: './app/**/*.js',
        sassSrc: './app/app.scss',
        //sassSrc: './app/**/*.scss',
        jsxSrc: ['./app/**/*.jsx', './fake/**/*.jsx'],
        outputDir: './dist'
    };

var portNumber = process.env.PORT || argv.port || 8080;


/**
 * Set environment variables use:   heroku config:set PAAS_PROVIDER=heroku
 */
function writeConfig() {

    if (process.env.PAAS_PROVIDER === 'heroku') {

		var configWrite = fs.writeFileSync("config.json",
			`{
  "mode": "dev",
  "app": {
    "endpoints": {
      "sdc-business-response-management": "http://test-sdc-business-response-management.apps.onsdigital.uk",
      "sdc-survey-registry": "http://sdc-survey-registry.herokuapp.com"
    }
  }
}`
		);

		console.log('Config result: ', configWrite);
	}
}

writeConfig();

gulp.task('compile:sass', () => {
    return gulp.src(config.sassSrc)
        .pipe(sass())
        .pipe(concat('site.min.css'))
        .pipe(gulp.dest(config.outputDir))
        .pipe(livereload());
});

gulp.task('compile:jsx', () => {
    return browserify({
            entries: ['./app/app.jsx'],
            debug: true
        })
        .transform(reactify)
        .bundle()
        .pipe(source('site.min.js'))
        .pipe(gulp.dest(config.outputDir))
        .pipe(livereload());
});


gulp.task('watch:compile:sass', ['compile:sass'], () => {
    gulp.watch('./app/**/*.scss', ['compile:sass']);
});

gulp.task('watch:compile:jsx', ['compile:jsx'], () => {
    gulp.watch(config.jsxSrc, ['compile:jsx']);
});

gulp.task('webserver', () => {
    gulp.src('./')
        .pipe(webserver({
            //livereload: true,
            //directoryListing: true,
            //open: true,
            fallback: 'index.html',
			host: (process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost'),
            port: portNumber
        }));
});


/**
 * Run tasks
 */
gulp.task('dev', [
    'watch:compile:sass',
    'watch:compile:jsx',
    'webserver'
], () => {
    livereload.listen();
});


gulp.task('test', [
    'webserver'
], () => {

});













