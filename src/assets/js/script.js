jQuery(function () {

  // slick
  jQuery(".sliderArea").each(function (i) {
    jQuery(this).addClass("sliderArea-" + i);
    jQuery(this)
      .find(".slider-for")
      .not(".slick-initialized")
      .slick({
        arrows: false, // スライドの左右の矢印ボタン
        asNavFor: ".sliderArea-" + i + " .slider-nav", // スライダを他のスライダのナビゲーションに設定する（class名またはID名）
      });
    jQuery(this)
      .find(".slider-nav")
      .not(".slick-initialized")
      .slick({
        asNavFor: ".sliderArea-" + i + " .slider-for", // スライダを他のスライダのナビゲーションに設定する（class名またはID名）
        focusOnSelect: true, // クリックでのスライド切り替えを有効にするか
        slidesToShow: 4, // 表示するスライド数を設定
        slidesToScroll: 1, // スクロールするスライド数を設定
      });
  });
  jQuery(document).on("ready", function () {
    jQuery(".regular").slick({
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
    });
  });

  


  // ドロワーメニュー
  jQuery('.l-drawer').on('click', function () {
    // e.preventDefault();
    // alert('click');
    jQuery('.l-drawer-icon').toggleClass('is-active');
    jQuery('.l-drawer-content').toggleClass('is-active');
    jQuery('.l-drawer-background').toggleClass('is-active');
    jQuery(".l-drawer__right").toggleClass("is-active");
    return false;
  });
  
  
  

});