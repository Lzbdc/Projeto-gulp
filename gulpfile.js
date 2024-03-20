const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


function comprimirndoSass(){
    return gulp.src('./source/*scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build'));
}

function comprimeJavascript() {
    return gulp.src('./source/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/arquivos-js'));
}

function comprimindoImagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}
exports.default = gulp.series(comprimindoImagens,comprimeJavascript,comprimirndoSass);