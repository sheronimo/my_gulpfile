var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
 
gulp.task('pack-js', function () {    
    return gulp.src(['js/custom.js', 'js/cart.js'])
        .pipe(concat('custom.min.js'))
        .pipe(minify({
            ext:{
                min:'.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('min'));
});

gulp.task('pack-js-vendor', function () {    
    return gulp.src(['lib/select2/js/select2.min.js', 'lib/jquery.bxslider/jquery.bxslider.js', 'lib/owl-carousel/js/owl.carousel.min.js', 'lib/scrollmagic/TweenMax.min.js', 'lib/scrollmagic/ScrollMagic.min.js', 'lib/jquery.countdown/jquery.countdown.min.js', 'lib/bootstrap-progressbar/bootstrap-progressbar.min.js', 'lib/flexslider/jquery.flexslider-min.js', 'js/jquery.actual.min.js', 'js/pnotify.custom.min.js', 'js/nouislider.min.js', 'js/theme-script.js', 'lib/jquery/jquery.easing.min.js', 'lib/fancybox-3.2.10/jquery.fancybox.js', 'lib/bootbox.min.js', 'lib/jquery.blockUI.js', 'lib/jquery.cookie.js', 'lib/flipbook3/js/flipbook.min.js', 'lib/slick/slick.min.js', 'lib/lightslider/js/lightslider.min.js'])
        .pipe(concat('vendor.min.js'))
        .pipe(minify({
            ext:{
                min:'.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('min'));
});
 
gulp.task('pack-css-cust1', function () {    
    return gulp.src(['css/catalog.css', 'lib/giant2-webfont/style.css', 'lib/bootstrap/css/bootstrap.min.css', 'lib/owl-carousel/css/owl.carousel.css', 'css/custom-old.css', 'css/individual-product.css', 'css/style-pagebuilder.css'])
        .pipe(concat('custom1.min.css'))
        .pipe(cleanCss())
   .pipe(gulp.dest('min'));
});

gulp.task('pack-css-cust2', function () {    
    return gulp.src(['css/custom-cook-share-love.css', 'css/basic-template.css', 'css/color-config.css', 'css/custom-christmas.css'])
        .pipe(concat('custom2.min.css'))
        .pipe(cleanCss())
   .pipe(gulp.dest('min'));
});

gulp.task('pack-css-vendor', function () {    
    return gulp.src(['lib/select2/css/select2.min.css', 'lib/jquery.bxslider/jquery.bxslider.css', 'lib/jquery-ui/jquery-ui.css', 'lib/flipbook3/css/flipbook.style.css', 'lib/slick/slick.css', 'css/nouislider.min.css', 'lib/slick/slick-theme.css', 'css/animate.css', 'css/pnotify.custom.min.css', 'lib/lightslider/css/lightslider.min.css', 'lib/flexslider/flexslider.css', 'lib/fancybox-3.2.10/jquery.fancybox.css'])
        .pipe(concat('vendor.min.css'))
        .pipe(cleanCss())
   .pipe(gulp.dest('min'));
});

gulp.task('default', gulp.series('pack-js', 'pack-js-vendor', 'pack-css-cust1', 'pack-css-cust2', 'pack-css-vendor'));