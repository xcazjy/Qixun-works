$('.show').on('click', function() {
  $('.show').hide();
  $('.hid').show();
});
//显示10条评论

$('.zoom').on('click', function() {
  $('.hid').hide();
  $('.show').show();
});
//隐藏10条评论

var zan = true;

$('.r-zan-l').on('click', function() {
  var good = parseInt($('#zan').text());

  if (zan == true) {
    zan = false;
    $('.r-zan-l').css('background-position', '-85px -1264px');
    $('#zan').text(good + 1);
  } else {
    zan = true;
    $('.r-zan-l').css('background-position', '-85px -1790px');
    $('#zan').text(good - 1);
  }
});
//点赞

// $('.one').on('click',function(){
//   window.open('img/friendcircle-banner.png');
// })