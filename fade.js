$(document).ready(function () {
    // 初回のフェードイン処理
    fade_effect();

    // スクロールイベント時のフェードイン処理
    $(window).scroll(function () {
        fade_effect();
    });
});

function fade_effect() {
    $('.fade').each(function () {
        // 要素の上端位置
        const targetElement = $(this).offset().top;

        // 現在の垂直スクロール位置
        const scroll = $(window).scrollTop();

        // ウィンドウの高さ
        const windowHeight = $(window).height();

        // 画面下端からのオフセット（必要に応じて調整）
        const bottomOffset = 0;

        // 要素が画面内の下でフェードインする条件
        if (scroll + windowHeight > targetElement + bottomOffset) {
            $(this).addClass('view');
        } else {
            $(this).removeClass('view');
        }
    });
};