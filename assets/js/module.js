$(function () {
  // これが選択されたららしいよ！普通にあった（笑）
  $("#golf").change(function(){
    let player = $(this).val();
    $('.image').each(function(index){
      if ($(this).hasClass('on')) {
        $(this).removeClass('on');
        $(this).fadeOut(500);
      }
      // playerで選ばれた番号をfadeIn、setTimeoutで時間差を置く
      if(index == player){
        $(this).addClass('on');
        setTimeout(function () {
          $('.image.on').fadeIn(1000);
        },500)
      }
    });
  });
});
