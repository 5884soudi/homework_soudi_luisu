function hamburger() {
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('nav').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click', function () {
    hamburger();
});

$(function () {
    //入力ボタンを押したらnamaeのボックスに名前が入る作業
    //入力ボタンを押す
    let namae = [];
    $('.insert').on('click', function () {
        if ($('.inputPlayer').val() !== '') {
            //タンスに書かれたやつが入る
            namae.push($('.inputPlayer').val());
            console.log(namae);
        }
        $('.inputPlayer').val('');
    });

    //各プレイヤーの配列作り
    let players = {};
    let playerImage = {}
    // スクロールさせない部分
    $(window).scrollTop(0);
    let target = $('h1').offset().top;
    $('.go').on('click',function () {
        $('body,html').removeClass('js-scroll-stop');
        $('body,html').animate({scrollTop:target},1000);
    })


    //Goボタンを押したらnamaeのボックスから取得してセレクトボタンに追加する作業
    //goボタンを押す
    $('.go').on('click', function () {
        // namae.each(function(){
        //     $('#player_name').append(`<option value = ${$(this)}>${$(this)}</option>`)
        // })　//配列の繰り返し文はjQueryではないので普通にfor文にする
        for (var i = 0; i < namae.length; i++) {
            $('#player_name').append(`<option value = ${namae[i]}>${namae[i]}</option>`)
            players[namae[i]] = [];
            playerImage[namae[i]] = i;
        }
        console.log(players);
        $(this).prop("disabled", true);
    })


    //---
    
        // soudi: 0,
        // dj: 1,
        // tiger: 2,
        // matsuyama: 3
    

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

        // 選択したら画像が出る部分ーーーーーーーーーーーーーーーーーー
        let playerName = $(this).val();
        $('.image').each(function (index) {
            if ($(this).hasClass('on')) {
                $(this).removeClass('on');
                $(this).fadeOut(500);

            }

            // playerで選ばれた番号をfadeIn、setTimeoutで時間差を置く
            if (index == playerImage[playerName]) {
                $(this).addClass('on');
                setTimeout(function () {
                    $('.image.on').fadeIn(1000);
                }, 500)
            }
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



});


// スワイパー
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    }
});