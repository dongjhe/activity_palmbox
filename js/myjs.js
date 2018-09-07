$(function() {
    // banner
    $('.carousel').carousel({
        pause: false
    })

    var HIGHT = $(".banner").height() + $(".header").height()
    $(".GOGO").click(function() {
        $("html,body").stop(true, false).animate({
            scrollTop: HIGHT
        }, 800);
        return false;
    });

    // top
    $(".top").click(function() {
        $("html,body").stop(true, false).animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    //當有人拉動捲軸的時候 就會觸發事件做動作
    $(window).scroll(function() {

        var nowH = $(window).scrollTop(); //抓目前網頁捲軸的座標

        if (nowH > HIGHT) {
            $(".top").fadeIn(500);
        } else {
            $(".top").fadeOut(500);
        }
    });

    // section02 TAB
    $(".TAB0").on("click", showIt);
    $(".TAB1").on("click", showIt);

    function showIt() {
        $(".BOXS").hide(); //先把 4 個 BOX 關掉
        var NOW = $(this).index(); //先確定目前是摸到那一個按鈕
        $(".BOXS").eq(NOW).fadeIn(); //再把目前要的那一個打開來
        $("ul>li").removeClass("active");
        $('.TAB' + NOW).addClass("active");
        return false;
    }

    $(".BOX2_btn").click(function() {
        $(".TAB1").trigger("click");
    });

    // section02 APP
    var NN_r = 0;
    var NN_p = 0;
    var GOGO = 0;
    $(".tip").click(function() {
        if (NN_r < 20) {
            NN_r += 1;
            GOGO = NN_r * $(".registered>.page>img").width() * -1;
            $(".registered .page").stop(true, false).animate({
                left: GOGO
            }, 300);
        }
    });
    $(".back01").click(function() {
        if (NN_r < 20) {
            NN_r -= 1;
            GOGO = NN_r * $(".registered>.page>img").width() * -1;
            $(".registered .page").stop(true, false).animate({
                left: GOGO
            }, 300);
        }
    });
    $(".tip_post").click(function() {
        if (NN_p < 20) {
            NN_p += 1;
            GOGO = NN_p * $(".post>.page>img").width() * -1;
            $(".post .page").stop(true, false).animate({
                left: GOGO
            }, 300);
        }
    });
    $(".back02").click(function() {
        if (NN_p < 20) {
            NN_p -= 1;
            GOGO = NN_p * $(".post>.page>img").width() * -1;
            $(".post .page").stop(true, false).animate({
                left: GOGO
            }, 300);
        }
    });

    // map iframe
    $(".scroll_l").click(function() {
        $("#iframe").stop(true, false).animate({ scrollLeft: 550 }, 500);
    });


    $('.slider').slick({
        dots: true,
        infinite: true, //是否無限的輪播
        speed: 300,
        slidesToShow: 1, //一次顯示在輪播畫面中的張數
        slidesToScroll: 1, //輪播效果更新的張數
        autoplay: true, //自動播放
        autoplaySpeed: 3000,
        arrows: false
    });


    

    // 關閉鈕
    $('.closebtn').on('click', function() {
        $('.newsbanner').hide()
    })
    // 點後面也可關閉
    $('.newsbanner').on('click', function() {
        $('.newsbanner').hide()
    })
    // 消除冒泡事件
    $('.slider').on('click', function(e) {
        e.stopPropagation()
    })


    $('.News').on('click',function(){
        $('.newsbanner').show(function(){
             $(window).trigger('resize');
        })

    })



    // 先判斷是否已有 cookie 值
    // 如果沒有則詢問名字並建立一筆新的 cookie
    if ($.cookie("name") == null) {
        var _hostname = window.location.hostname; //取得網址
        // 把 _name 跟 1 分別存在記錄中
        $.cookie("name", _hostname, { expires: 1, path: '/' }); //cookie紀錄一天"path:/"為整個網站有效
        // $.cookie("count", 1, { expires: 1, path: '/' }); //cookie紀錄一天"path:/"為整個網站有效

        $('.newsbanner').show()
    } else {
        $('.newsbanner').hide()
    }
    
});