const gulp = require('gulp');   //本地库
const uglify = require('gulp-uglify');  //压缩js


// 流的方式  先什么后什么再什么
//取名字 名字叫js
// 回调函数 所有东西都在return
gulp.task('js',()=>{
    return gulp.src(['./src/js/*.js'])  //匹配js文件
        .pipe(uglify())         //使用uglify压缩js代码
        .pipe(gulp.dest('./build/js/'));     //输出目录 
});


// default是死的名字 不能更改 任务名字都写这里
gulp.task('default',['js']);
