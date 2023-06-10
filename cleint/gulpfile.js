const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const sass = gulpSass(require("sass"));

gulp.task("sass", async () => {
    gulp.src("src/*.css").pipe(sass()).pipe(gulp.dest("css"));
});
