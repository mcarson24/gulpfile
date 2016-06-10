var gulp = require('gulp');
var phpspec = require('gulp-phpspec');
var notify = require('gulp-notify');

gulp.task('test', function() {
    gulp.src('spec/**/*.php')
        .pipe(phpspec('', { clear: true, notify: true }))
        .on('error', notify.onError({
            title: 'Darn!',
            message: 'Your tests failed Matthew:-(',
            icon: __dirname + '/fail.png'
        }))
        .pipe(notify({
            title: "Woopee!",
            message: 'It\'s so easy bein\' green!',
            icon: __dirname + '/success.png'

        }));
});

gulp.task('watch', function() {
    gulp.watch(['spec/**/*.php', 'src/**/*.php'], ['test']);
});

gulp.task('default', ['test', 'watch']);