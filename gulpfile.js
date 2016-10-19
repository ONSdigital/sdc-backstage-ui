var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    react = require('gulp-react'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream'),
    livereload = require('gulp-livereload'),
    static = require('node-static'),
    argv = require('yargs').argv,

    config = {
        jsSrc: './app/**/*.js',
        sassSrc: './app/app.scss',
        //sassSrc: './app/**/*.scss',
        jsxSrc: './app/**/*.jsx',
        outputDir: './dist'
    };

console.log(argv);

var portNumber = argv.port || 8080;

/**
 * Compile tasks
 */
/*gulp.task('compile:js', () => {
    return gulp.src(config.jsSrc)
        .pipe(concat('site.min.js'))
        .pipe(gulp.dest(config.outputDir))
        .pipe(livereload());
});*/

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


/**
 * Watch tasks
 *//*
gulp.task('watch:compile:js', ['compile:js'], () => {
    gulp.watch(config.jsSrc, ['compile:js']);
});*/

gulp.task('watch:compile:sass', ['compile:sass'], () => {
    gulp.watch('./app/**/*.scss', ['compile:sass']);
});

gulp.task('watch:compile:jsx', ['compile:jsx'], () => {
    gulp.watch(config.jsxSrc, ['compile:jsx']);
});





/**
 * Run tasks
 */
gulp.task('dev', [
    //'watch:compile:js',
    'watch:compile:sass',
    'watch:compile:jsx'
], () => {
    livereload.listen();

    var fileServer = new static.Server('./');

    require('http').createServer(function (request, response) {
        request.addListener('end', function () {
            //
            // Serve files!
            //
            fileServer.serve(request, response, function (e, res) {

                if (e && (e.status === 404)) {
                    fileServer.serveFile('/index.html', 404, {}, request, response);
                }

            });
        }).resume();
    }).listen(portNumber);

});




gulp.task('test', [
    'compile:sass',
    'compile:jsx'
], () => {
    var fileServer = new static.Server('./');

    require('http').createServer(function (request, response) {
        request.addListener('end', function () {
            //
            // Serve files!
            //
            fileServer.serve(request, response, function (e, res) {

                if (e && (e.status === 404)) {
                    fileServer.serveFile('/index.html', 404, {}, request, response);
                }

            });
        }).resume();
    }).listen(portNumber);

});













