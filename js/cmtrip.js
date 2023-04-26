
// 인기검색어 슬라이드 완성하기

// var hotWrap = $('.hot');
// var hotch = $('.hot > li');
// var chCount = hotch.length;

// hotch.css({display:'none'});
// hotch.eq(0).css({display:'block'});

// var i = 0;
// function topMove () {
//   n = (i+1) % 10; 
//   hotch.eq(i).show();
//   hotch.eq(n).slideUp();

//   i = n;
// }

// setInterval(topMove,1000);


$('.nav1-gnb').css('display','none');
$('.nav1').css('color','black')


// 전체메뉴
$('.nav1 > li > a').toggle(function () {
  $(this).css('backgroundColor','#8f32d9');
  $(this).css('color','#fff');
  $('.nav1-gnb').slideDown();
}, function () {
  $(this).css('backgroundColor','#fff');
  $(this).css('color','#000');
  $('.nav1-gnb').slideUp();
})

// 서브메뉴나옴
$('.nav2 > li').hover(function () {
  $(this).find('.nav2-gnb').show();
}, function () {
  $(this).find('.nav2-gnb').hide();
})

// 서브에 서브메뉴 나옴
$('.nav2-gnb> li').hover(function () {
  $(this).find('.nav2-sub').show();
}, function () {
  $(this).find('.nav2-sub').hide();
})

$('.nav2-gnb> li').hover(function () {
  $(this).find('.nav2-sub4').show();
}, function () {
  $(this).find('.nav2-sub4').hide();
})

$('.nav2-gnb> li').hover(function () {
  $(this).find('.nav2-sub5').show();
}, function () {
  $(this).find('.nav2-sub5').hide();
})

$('.estimate > li').hover(function() {
  $(this).css('border','1px solid #8f32d9');
  $(this).find('div > p:nth-child(1)').css('color','#8f32d9');
},function() {
  $(this).css('border','1px solid #ccc');
  $(this).find('div > p:nth-child(1)').css('color','#000');
})

// 상하슬라이드 만들기
$('.hot-wrap').slick({
  vertical: true,
  // 세로슬라이드 여부
  Infinite: true,
  // 무한 슬라이드 여부
  autoplay: true,
  // 자동 슬라이드 여부
  autoplayspeed: 3000,
  // 자동 슬라이드 시간
  arrows: false,
  // 화살표
});

// 아코디언 사이드바
$('.side2').click(function () {
  $(this).next().slideToggle();
});

// footer4의 상하슬라이드
$('.fo4-1').slick({
  slidesToShow: 4,
  // 보여줄 슬라이드 갯수
  arrows: true,
  // 화살표 여부
  prevArrow: "<button type = 'button' class = 'slick-prev'><</button>",
  nextArrow: "<button type = 'button' class = 'slick-next'>></button>",
});

// 공지사항
$('.notice').slick({
  vertical: true,
  // 세로슬라이드 여부
  Infinite: true,
  // 무한 슬라이드 여부
  autoplay: true,
  // 자동 슬라이드 여부
  autoplayspeed: 3000,
  // 자동 슬라이드 시간
  arrows: false,
  // 화살표
});