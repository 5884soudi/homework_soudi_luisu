$(function () {
  //----------------------------------------- 画像の処理を行うところ！--------------------------------------！
  // これが選択されたららしいよ！普通にあった（笑）
  $("#golf").change(function () {
    let player = $(this).val();
    $('.image').each(function (index) {
      if ($(this).hasClass('on')) {
        $(this).removeClass('on');
        $(this).fadeOut(500);
      }
      // playerで選ばれた番号をfadeIn、setTimeoutで時間差を置く
      if (index == player) {
        $(this).addClass('on');
        setTimeout(function () {
          $('.image.on').fadeIn(1000);
        }, 500)
      }
    });
  });


  // -----------------------------------------スコア計算を行うところ--------------------------------------！
  // 各プレーヤーの配列作り
  let players = {
    soudi: [],
    dj: [],
    tiger: [],
    matuyama: []
  };

  // プレーヤー箱とスコア箱の作成
  let player;
  let score;

  // ①セレクトタグが変わったら行われる作業
  $('#player_name').change(function () {
    // resultを空にする
    $('.total_score').text('');
    // playerの取得
    player = $(this).val();
    // スコアの取得
    score = players[player];
    // 一個一個取り出してinputに出力
    $('.num').each(function (index) {
      $(this).val(score[index]);
    });
  })


  // ②ボタンが押されたら行われる作業！
  // ボタンを押したら計算＋配列に追加
  $('.result').on('click', function () {
    let newScore = [];
    $('.num').each(function (index) {
      if ($(this).val() != '') {
        let num = Number($(this).val())
        newScore.push(num);
      };
    });
    players[player] = newScore;
    let ttt = players[player].reduce(function (sum, element) {
      return sum + element;
    }, 0);
    // 結果を表示
    $('.total_score').text(ttt);
    console.log(players[player]);
  });

  //------名前を入れてボタンを押したらセレクトに入るところ-------
  //goボタンを押す
  $('.insert').on('click', function () {
    //インプットの文字を取得
    let inputName = $('.inputPlayer').val();
    console.log(inputName);
    //セレクトに入る文字を取得
    let selectItem = $('#aaa');
    console.log(selectItem);
    //セレクトにオプションタグを追加
    // $('#aaa').append('<option value ='+ inputName + '>' + inputName + '</option>');
    $('#aaa').append(`<option value =${inputName}>${inputName}</option>`);
    console.log($('#aaa'));



  })







});
