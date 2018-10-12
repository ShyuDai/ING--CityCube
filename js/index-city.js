$(function(){
    $(".items__item").on('click',function(){
        $(this).addClass("items__active").siblings().removeClass("items__active");
    })

    $(".inpu1").on('focus',function(){
         $('.search').removeClass('search').addClass('search1');
    })

    $(".inpu1").on('blur',function(){
         $('.search1').removeClass('search1').addClass('search');
    })

    $(".logo").on('click', function() {
        window.open('index.html');
    });

    $(".tag-ad").on('click', function() {
        $(this).addClass('tag-active').siblings().removeClass('tag-active');
        $('.box-ad').show().siblings().hide();
    });
    $(".tag-transit").on('click', function() {
        $(this).addClass('tag-active').siblings().removeClass('tag-active');
        $('.box-transit').show().siblings().hide();
    });
    $(".tag-map").on('click', function() {
        $(this).addClass('tag-active').siblings().removeClass('tag-active');
        $('.box-map').show().siblings().hide();
    });
    $(".tag-food").on('click', function() {
        $(this).addClass('tag-active').siblings().removeClass('tag-active');
        $('.box-food').show().siblings().hide();
    });
    $(".tag-spot").on('click', function() {
        $(this).addClass('tag-active').siblings().removeClass('tag-active');
        $('.box-spot').show().siblings().hide();
    });
    $(".tag-special").on('click', function() {
        $(this).addClass('tag-active').siblings().removeClass('tag-active');
        $('.box-special').show().siblings().hide();
    });
    $(".tag-rent").on('click', function() {
        $(this).addClass('tag-active').siblings().removeClass('tag-active');
        $('.box-rent').show().siblings().hide();
    });
    $(".tag-app").on('click', function() {
        $(this).addClass('tag-active').siblings().removeClass('tag-active');
        $('.box-app').show().siblings().hide();
    });
    //公交搜索框切换
    $(".transfer").on('click', function() {
        $(this).addClass('tr-active');
        $(".line").removeClass('tr-active');
        $(".site").removeClass('tr-active');

        $(".transit-in1").show();
        $(".transit-p1").show();

        $(".transit-in2").hide();
        $(".transit-p2").hide();

        $(".transit-in3").hide();
        $(".transit-p3").hide();

        $(".transit-in4").hide();
        $(".transit-sp34").hide();
    });
    $(".line").on('click', function() {
        $(this).addClass('tr-active');
        $(".transfer").removeClass('tr-active');
        $(".site").removeClass('tr-active');

        $(".transit-in2").show();
        $(".transit-p2").show();

        $(".transit-in1").hide();
        $(".transit-p1").hide();

        $(".transit-in3").hide();
        $(".transit-p3").hide();

        $(".transit-in4").hide();
        $(".transit-sp34").hide();
    });
    $(".site").on('click', function() {
        $(this).addClass('tr-active');
        $(".line").removeClass('tr-active');
        $(".transfer").removeClass('tr-active');

        $(".transit-in3").show();
        $(".transit-p3").show();

        $(".transit-in2").hide();
        $(".transit-p2").hide();

        $(".transit-in1").hide();
        $(".transit-p1").hide();

        $(".transit-in4").show();
        $(".transit-sp34").show();
    });


})
