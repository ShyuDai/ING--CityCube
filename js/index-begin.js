
var button = document.querySelector("#btn");
button.onclick = function(){
  // 取值
  var D = document;
  var cube = D.querySelector(".cube");
  var body = D.querySelector("body");
  var faces = D.getElementsByClassName("cube-face");
  var innerFaces = D.getElementsByClassName("inner-faces");
  var front = D.querySelector(".front");
  var back = D.querySelector(".back");
  var left = D.querySelector(".left");
  var right = D.querySelector(".right");
  var top = D.querySelector(".top");
  var bottom = D.querySelector(".bottom");
  var search = D.querySelector(".search");
  var waterfall = D.querySelector("#wrap");
  var dog = D.querySelector(".dog");
  var con = D.querySelector(".content");
  var footer = D.querySelector(".footer");
  var dayup = D.querySelector(".dayup");
  var upList = D.querySelector(".upList");

    for (let i = 0; i < innerFaces.length; i++){
      innerFaces[i].style.opacity = "0";
    }
    for (let i = 0; i < faces.length; i++){
      faces[i].style.fontSize = "40px";
      faces[i].style.boxShadow = "0px 0px 0px #fff";
      faces[i].style.border = "3px solid #111";
    }
    
    
    body.style.background = "#fdfdfd";
    front.style.background = "#0066CC";
    front.style.transform = " translateZ(125px)";
    back.style.background = "#0066CC";
    back.style.transform = "rotateY(180deg) translateZ(125px)";
    left.style.background = "#0066CC";
    left.style.transform = "rotateY(-90deg) translateZ(125px)";
    right.style.background = "#0066CC";
    right.style.transform = "rotateY(90deg) translateZ(125px)";
    top.style.background = "#0066CC";
    top.style.transform = "rotateX(90deg) translateZ(125px)";
    bottom.style.background = "#0066CC";
    bottom.style.transform = "rotateX(-90deg) translateZ(125px)";
    
    upList.style.display = "block";
    con.style.display = "block";
    dog.style.display = "block";
    button.style.display="none";
    search.style.display="block";
    dayup.style.display = "block";
    footer.style.display = "block";
    // button.style.background = "#fff";
    // button.style.color = "#f55";
    // button.style.borderRight = "2px solid purple";
    // button.style.borderLeft = "2px solid lightGreen";
    // button.style.borderTop = "2px solid magenta";
    // button.style.borderBottom = "2px solid yellow";
    // button.style.boxShadow="0 0 0 #fff"
    // button.innerHTML = "Search";
}

$(function(){
  // 点击狗狗页面跳转
  $(".dog").on('click',function(){
    window.open('index-waterfall.html');
    // $('.dog').popover(options);
  });
  //页面跳转主页
  $(".more").on('click',function(){
      window.open('index-city.html');
      // $('.dog').popover(options);
    });


  // 标签切换 caption
  $(".caption-item").on('click',function(){
        $(this).addClass("caption-focus").siblings().removeClass("caption-focus");
    });

  $(".block-item").on('click',function(){
        $(this).addClass("block-focus").siblings().removeClass("block-focus");
    });
  //设置对应的地区切换对应城市
  $(".region1").on('click',function(){
    $(".city1").addClass('city-show');
    $(".permanent-focus").addClass("block-focus").siblings().removeClass("block-focus");
    // $(".city2").removeClass('city-show');
    // $(".city3").removeClass('city-show');
    // $(".city4").removeClass('city-show');
    // $(".city5").removeClass('city-show');
    // $(".city6").removeClass('city-show');
    // $(".city7").removeClass('city-show');
    $(".city1").nextAll().removeClass('city-show');
    $(".city1").prevAll().removeClass('city-show');
  });
  $(".region2").on('click',function(){
    $(".city2").addClass('city-show');
    $(".permanent-focus").addClass("block-focus").siblings().removeClass("block-focus");
    // $(".city2").removeClass('city-show');
    // $(".city3").removeClass('city-show');
    // $(".city4").removeClass('city-show');
    // $(".city5").removeClass('city-show');
    // $(".city6").removeClass('city-show');
    // $(".city7").removeClass('city-show');
    $(".city2").nextAll().removeClass('city-show');
    $(".city2").prevAll().removeClass('city-show');
  });
  $(".region3").on('click',function(){
    $(".city3").addClass('city-show');
    $(".permanent-focus").addClass("block-focus").siblings().removeClass("block-focus");
    // $(".city2").removeClass('city-show');
    // $(".city3").removeClass('city-show');
    // $(".city4").removeClass('city-show');
    // $(".city5").removeClass('city-show');
    // $(".city6").removeClass('city-show');
    // $(".city7").removeClass('city-show');
    $(".city3").nextAll().removeClass('city-show');
    $(".city3").prevAll().removeClass('city-show');
  });
  $(".region4").on('click',function(){
    $(".city4").addClass('city-show');
    $(".permanent-focus").addClass("block-focus").siblings().removeClass("block-focus");
    // $(".city2").removeClass('city-show');
    // $(".city3").removeClass('city-show');
    // $(".city4").removeClass('city-show');
    // $(".city5").removeClass('city-show');
    // $(".city6").removeClass('city-show');
    // $(".city7").removeClass('city-show');
    $(".city4").nextAll().removeClass('city-show');
    $(".city4").prevAll().removeClass('city-show');
  });
  $(".region5").on('click',function(){
    $(".city5").addClass('city-show');
    $(".permanent-focus").addClass("block-focus").siblings().removeClass("block-focus");
    // $(".city2").removeClass('city-show');
    // $(".city3").removeClass('city-show');
    // $(".city4").removeClass('city-show');
    // $(".city5").removeClass('city-show');
    // $(".city6").removeClass('city-show');
    // $(".city7").removeClass('city-show');
    $(".city5").nextAll().removeClass('city-show');
    $(".city5").prevAll().removeClass('city-show');
  });
  $(".region6").on('click',function(){
    $(".city6").addClass('city-show');
    $(".permanent-focus").addClass("block-focus").siblings().removeClass("block-focus");
    // $(".city2").removeClass('city-show');
    // $(".city3").removeClass('city-show');
    // $(".city4").removeClass('city-show');
    // $(".city5").removeClass('city-show');
    // $(".city6").removeClass('city-show');
    // $(".city7").removeClass('city-show');
    $(".city6").nextAll().removeClass('city-show');
    $(".city6").prevAll().removeClass('city-show');
  });
  $(".region7").on('click',function(){
    $(".city7").addClass('city-show');
    $(".permanent-focus").addClass("block-focus").siblings().removeClass("block-focus");
    // $(".city2").removeClass('city-show');
    // $(".city3").removeClass('city-show');
    // $(".city4").removeClass('city-show');
    // $(".city5").removeClass('city-show');
    // $(".city7").removeClass('city-show');
    // $(".city7").removeClass('city-show');
    $(".city7").nextAll().removeClass('city-show');
    $(".city7").prevAll().removeClass('city-show');
  });
  
  // 点击跳转到页面相应位置
  $(".block-item").on('click',function(){
    $('body,html').animate({
       scrollTop: 705
      }, 1000);

    

      return false;
  });
  //设置狗位置固定
  // $(window).scroll(function() {
  //   if ($(this).scrollTop()>705) {
  //     $('.dog').addClass('dogMove');
  //   }
  //   if ($(this).scrollTop()<705) {
  //     $('.dog').removeClass('dogMove');
  //   }
  // });


  //返回顶部等按钮设置
  $(window).scroll(function(){
    if ($(this).scrollTop()>690) {
      $('.leftFloorD2').show();
      $('.leftFloorD1').show();
    }
    if ($(this).scrollTop()<690) {
      $('.leftFloorD2').hide();
      $('.leftFloorD1').hide();
    }
  })
  //返回顶部
  $(".i5").on('click',function(){
    $('body,html').animate({
      scrollTop:0
    },1000);
  })
  $(".r5").on('click',function(){
    $('body,html').animate({
      scrollTop:0
    },1000);
  })
  //动画显示
  $(".leftFloorD2").on('mouseover',function(){
    $(this).siblings().animate({left:'32px'});
    $(this).css('backgroundColor','#0066cc');

    return false;
  })
  $(".leftFloorD2").on('mouseout',function(){
    $(this).siblings().animate({left:'-32px'});
    $(this).css('backgroundColor','#65a2df');

    return false;
  })


  //改变点赞收藏背景
  $('.collect').on('click',function(){
     $(this).toggleClass('collect2').toggleClass('collect');
  });
  $('.thumbs').on('click',function(){
     $(this).toggleClass('thumbs2').toggleClass('thumbs');
  });
  $('.share').on('click',function(){
     $(this).toggleClass('share2').toggleClass('share');
  });

  //分页
  $('.pagination li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
  })

  // 登录链接事件
  $(".i1").click(function(){

    $('#regeHtml').hide();
    $('#loginHtml').show();
    //显示弹出层遮罩
    $("#layer-mask").show();
    //显示弹出层窗体
    $("#layer-pop").show();
    //弹出层关闭按钮绑定事件
    $("#layer-close").click(function(){
      //弹出层关闭
      $("#layer-mask").hide();
      $("#layer-pop").hide();
    });
    // 点击登录按钮
    $('#regeLink').click(function() {
      $('#loginHtml').hide();
      $('#regeHtml').show();
    });
    // 点击注册按钮
    $('#loginLink2').click(function() {
      $('#regeHtml').hide();
      $('#loginHtml').show();
    });
    // 验证登录
      $("#username").blur(function() {
      var username = $("input[name='username']").val();    
      if (username !== 'DXT') {
        $(".error-msg").html("请输入正确的手机号或者邮箱");
      };       
    });
      $("#password").blur(function() {
      var password = $("input[name='password']").val();
      if (password !== 'DXT') {
        $(".error-msg2").html("请输入6-16位密码，区分大小写，不能使用空格！");
      };       
    });
      
    // 验证注册
    $("#username2").blur(function() {
      var username2 = $("input[name='username2']").val();
      if (username2 !== 'DXT') {
        $(".error-msg3").html("请输入正确的手机号或者邮箱");
      };      
    });
    $("#yanzheng").blur(function() {
      var yanzheng = $("input[name='yanzheng']").val();     
      if (yanzheng !== 'GYyd') {
        $(".error-msg4").html("验证码输入错误！");
      };      
    });


      closeCallback();
      //将添加的字体删除
      function closeCallback () {
        $(".error-msg").html("");
        $(".error-msg2").html("");
        $(".error-msg3").html("");
        $(".error-msg4").html("");
      }
      
  });

});


