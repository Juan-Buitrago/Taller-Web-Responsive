// importamos gulp
var gulp = require('gulp');
var sass = require('gulp-sass');

// definimos tarea por defecto
gulp.task("default", ["compile-sass"], function(){

    // observa cambios en archivos SASS y ejecuta la tarea de compilación
    gulp.watch("./src/scss/*.scss", ["compile-sass"]);

});

// definimos la tarea para compilar SASS
gulp.task("compile-sass", function(){
    gulp.src("./src/scss/style.scss") // cargamos le archivo
    .pipe(sass().on('error', sass.logError)) // compilamos el archivo SASS
    .pipe(gulp.dest("./dist/css/")); // guardamos el archivo en dist/css 
});