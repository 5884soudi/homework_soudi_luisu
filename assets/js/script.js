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
    let soudi = [];
    let dj = [];
    let tiger = [];
    let matu = []
    let numkey = $('.num');
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
    $('#player_name').change(function(){
        let player = $(this).val();
        
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