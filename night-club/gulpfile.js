const gulp = require("gulp");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const imagemin = require("gulp-imagemin");


sass.compiler = require("node-sass");



const dirsToCopy = [ "src/fontawesome/**/*", "src/image-layout/**/*" ];


function copyDirs(next) {
    gulp.src(dirsToCopy)
        .pipe(gulp.dest("./dist/assets/"))
        .pipe(connect.reload());

    next();
}

function html(next) {
    gulp.src("./src/html/templates/*.ejs")
        .pipe(ejs().on("error", (err) => { console.log(err); }))
        .pipe(rename(function(path) {
            if(path.basename !== "index") {
                path.dirname = path.basename;
                path.basename = "index";
            }

            path.extname = ".html";
        }))
        .pipe(gulp.dest("./dist/"))
        .pipe(connect.reload());

    next();
}

function images(next) {
    gulp.src("./src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/assets/img/"))
        .pipe(connect.reload());

    next();
}

function scss(next) {
    gulp.src("./src/css/**/*.scss")
        .pipe(sass()).on("error", err => console.log(err))
        .pipe(gulp.dest("./dist/assets/css"))
        .pipe(connect.reload());

    next();
}

function js(next) {
    gulp.src("./src/js/**/*.js")
        /*.pipe(babel({
            presets: ['@babel/env']
        }).on("error", err => console.log(err)))*/
        .pipe(gulp.dest("./dist/assets/js"))
        .pipe(connect.reload());

    next();
}

// Watchers
function watchHtml() {
    gulp.watch("./src/html/**/*.ejs", { ignoreInitial: false }, html);
}

function watchImages() {
    gulp.watch("./src/img/**/*", { ignoreInitial: false }, images);
}

function watchScss() {
    gulp.watch("./src/css/**/*.scss", { ignoreInitial: false }, scss);
}

function watchJs() {
    gulp.watch("./src/js/**/*.js", { ignoreInitial: false }, js);
}

gulp.task("dev", function(next) {
    watchHtml();
    watchImages();
    watchScss();
    watchJs();
    copyDirs(next);
    connect.server({
        livereload: true,
        root: "dist"
    });

    next();
});

gulp.task("build", function(next) {
    js(next);
    scss(next);
    images(next);
    html(next);
    copyDirs(next);
    
    next();
});