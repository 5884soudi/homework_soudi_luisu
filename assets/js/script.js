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


    // let soudi = [];
    // let dj = [];
    // let tiger = [];
    // let matu = []
    // let numkey = $('.num');
    // $('#hamburger').on('click',function(){
    //     $('#nav').addClass('in').toggleClass('in');
    //     $('#line1').addClass('line_1').toggleClass('line_1');
    //     $('#line2').addClass('line_2').toggleClass('line_2');
    //     $('#line3').addClass('line_3').toggleClass('line_3');
    // })

    // 結果表示
    // let calculation;
    // $('.result').on('click', function () {
    //     if ($('#player_name').val() !== 'select') {
    //         if ($('.result').hasClass('clicked') == true) {
    //          //何もしない
    //         }else {

    //             $.each(numkey, function () {
    //                 if ($(this).val() !== '') {
    //                     soudi.push($(this).val());
    //                     calculation = soudi.reduce(function (sum, element) {
    //                         return sum + Number(element);
    //                     }, 0);

    //                 }
    //             });

    //             $('.total_score').text(calculation);
    //             $('.result').addClass('clicked');

    //         }



    //     }   

    // });
    // $('#player_name').change(function(){
    //     let player = $(this).val();

    // })

    //----------------------------------------------------------------------
    //各プレイヤーの配列作り
    let players = {
        soudi: [],
        dj: [],
        tiger: [],
        matsuyama: []
    };
    //---
    let playerImage = {
        soudi: 0,
        dj: 1,
        tiger: 2,
        matsuyama: 3

    }

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

    //Goボタンを押したらセレクトに名前が入る作業
    //goボタンを押す
    $('.insert').on('click', function () {
        // $('#player_name').append(`<option value=${$('.inputPlayer').val()}>${$('.inputPlayer').val()}</option>`)
        // タンスを作る
        if ($('.inputPlayer').val() !== '') {
            let namae = []
            //タンスに書かれたやつが入る
            namae.push($('.inputPlayer').val());
            console.log(namae);
        }
        

    })



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