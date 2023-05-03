
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
  

// var i = 0;

// function topSlide() {

//   if(i == 0) {
//   $('.hot').addClass('top1');
//   i++;
// }else if(i == 1) {
//   $('.hot').addClass('top2');
//   i++; 
// }else if(i == 2) {
//   $('.hot').addClass('top3');
//   i++;
// }else if(i == 3) {
//   $('.hot').addClass('top4');
//   i++;
// } else if(i == 4) {
//   $('.hot').addClass('top5');
//   i++;
// } else if(i == 5) {
//   $('.hot').addClass('top6');
//   i++;
// } else if(i == 6) {
//   $('.hot').addClass('top7');
//   i++;
// } else if(i == 7) {
//   $('.hot').addClass('top8');
//   i++;
// } else if(i == 8) {
//   $('.hot').addClass('top9');
//   i++;
// } else if(i == 9) {
//   $('.hot').addClass('top10');
//   i++;
// } else if(i == 10) { 
//   i == 0;
// }
// console.log('topSlide');
// }
// setInterval(topSlide, 2000);

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

$(function () {
var slideWrap = $('.slidewrap');
var slides = slideWrap.find('li');
// 이동할 때 함수에 시킬 것이기 때문에 현재 인덱스번호를 업데이트시킬 함수 생성
var timer = undefined;
var currentIdx = 0;
var pager = slideWrap.find('.pager > a');

// 각각의 슬라이드마다 역할이 있기 때문에 메소드 .each를 사용하여 각각 역할을 나누어줌.
// 결과: 슬라이드 1번이 가장 위로 올라오고, 각각의 이미지가 left: 100씩 증가함.
slides.each(function(idx){

  $(this).css({left:`${idx*100}%`})

});


pager.click(function(e) {
  // a링크는 기본적으로 이벤트가 적용되기 때문에 preventDefault로 삭제
  e.preventDefault();

  // 변수 idx = 클릭한 해당 인덱스 번호
  var idx = $(this).index();
  //함수로 호출
  moveSlide(idx);
});

function moveSlide (i) {
  if(currentIdx === i) return;

  // 보고싶은 이미지 슬라이드를 오른쪽에 배치하기 위해 작성
  var currentSlide = slides.eq(currentIdx);
  var nextSlide = slides.eq(i);

  nextSlide.css({left:'100%'}).animate({left:'0%'});
  currentSlide.animate({left:'-100%'});

  currentIdx = i;
  //모든 페이저에서 active제거하고 현재 번호에 맞는 요소에 active추가
  pager.removeClass('active');
  pager.eq(currentIdx).addClass('active');
}

//무한슬라이드로 돌게끔 
function autoSlide () {
  if(timer == undefined) {
      timer = setInterval(() => {
    // var ni = (currentIdx + 1)%slides.lenght;
    var ni = currentIdx + 1;
    if(ni === slides.length) {
      ni=0;
    }
    moveSlide(ni);
  }, 2000);
}
}
autoSlide();
// 마우스가 올라가면
slideWrap.mouseenter(function () {
  clearInterval(timer);
  timer = undefined;
})
// 마우스가 떠나면
.mouseleave(function() {
  autoSlide();
})

});

// 예약 서브메뉴 변경
$('.reserve-gnb > li').first().find('.reserve').show();
$('.reserve-gnb >li').first().css('fontWeight', 'bold');
$('.reserve-gnb > li').first().find('.reserve').css('fontWeight','normal');
$('.reserve-gnb > li').first().css('borderBottom','2px solid #8f32d9');

$('.reserve-gnb > li').click(function () {
  $(this).css('fontWeight', 'bold');
  $(this).css('borderBottom','2px solid #8f32d9');
  $(this).css('fontWeight', 'bold');
  $(this).find('.reserve').css('fontWeight','normal')
  $('.reserve-gnb > li ').not(this).css('fontWeight', 'normal');
  $('.reserve-gnb > li ').not(this).css('borderBottom','none');
  $(this).find('.reserve').show();
  $('.reserve-gnb > li').not(this).find('.reserve').hide();
})

// con2번의 버튼에 따라 콘텐츠 변경

$('.con2-button-con1').show();
$('.con2-button > button:first-child').css('background','#8f32d9').css('color','#fff').show();

$('.con2-button > button:first-child').click(function () {
  $('.con2-button > button:first-child').css('background','#8f32d9').css('color','#fff');
  $('.con2-button > button').not(this).css('background','#fff').css('color','#000');
  $('.con2-button-con1').show();
  $('.con2-button-con2').hide();
  $('.con2-button-con3').hide();
  $('.con2-button-con4').hide();

})

$('.con2-button > button:nth-child(2)').click(function () {
  $('.con2-button-con2').show();
  $('.con2-button > button:nth-child(2)').css('background','#8f32d9').css('color','#fff');
  $('.con2-button > button').not(this).css('background','#fff').css('color','#000');
  $('.con2-button-con1').hide();
  $('.con2-button-con3').hide();
  $('.con2-button-con4').hide();
})

$('.con2-button > button:nth-child(3)').click(function () {
  $('.con2-button-con3').show();
  $('.con2-button > button:nth-child(3)').css('background','#8f32d9').css('color','#fff');
  $('.con2-button > button').not(this).css('background','#fff').css('color','#000');
  $('.con2-button-con1').hide();
  $('.con2-button-con2').hide();
  $('.con2-button-con4').hide();
})

$('.con2-button > button:nth-child(4)').click(function () {
  $('.con2-button-con4').show();
  $('.con2-button > button:nth-child(4)').css('background','#8f32d9').css('color','#fff');
  $('.con2-button > button').not(this).css('background','#fff').css('color','#000');
  $('.con2-button-con1').hide();
  $('.con2-button-con2').hide();
  $('.con2-button-con3').hide();
})


// 콘텐츠3번: 고객님만을 위한 추천여행
$('.center').slick({
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 3.99,
  prevArrow: "<button type = 'button' class = 'slick-prev'><</button>",
  nextArrow: "<button type = 'button' class = 'slick-next'>></button>",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// 콘텐츠4번 하나origin 등
$('.con4-ch').slick( {
  slidesToShow: 1,
  dots:true,
  // .으로 보여주는 슬라이드 갯수
  arrows: false,
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