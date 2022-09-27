// 상단메뉴
$(document).ready(function(){
  
  var btn = $("#aboutMe");
  var modal = $(".modal_container");
  var close = $("#close");

  btn.on("click", function () {
    modal.addClass("show");
  });

  close.on("click", function () {
    modal.removeClass("show");
  });

  var btn2 = $("#btn2");
  var portfolio = $(".portfolio");

  // btn2
  //   .on("mouseover", function () {
  //     portfolio.addClass("show");
  //   })
  //   .on("click", function () {
  //     portfolio.removeClass("show");
  // });

  // 메뉴바 프로젝트 리스트 슬라이드 다운, 업
  $('.nav_list #btn2').hover(function(){
    $(this).find('>ul').stop().slideDown();
  }, function(){
    $(this).find('>ul').stop().slideUp();
  })



  // 스크롤 top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".top").fadeIn();
    } else {
      $(".top").fadeOut();
    }
    
  });

  $(".top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 400);
    return false;
  });
  
  //모바일 버튼
  $(".moblie_btn").click(function () {
    $(".sub_nav").toggleClass("on");
  });

  // 메인 슬라이드
  $(".wrapper .img .slide_ctn").slick({
    arrows:false,
    slidesToShow: 1, //슬라이드 보여주는 갯수 정하기
    slidesToScroll: 1, //슬라이드가 넘어갈 때 갯수
    speed:2000, //넘어가는 속도
    autoplay:true, //자동으로 넘기겠는가
    pauseOnHover:false, //마우스가 호버될 때는 자동으로 슬라이더 넘김 방지, 기본값: true, false: 넘김.
    pauseOnFocus:false, //마우스가 클릭(포커스)됐을 때 정지 기본값: true, false: 넘김.
  })
})




