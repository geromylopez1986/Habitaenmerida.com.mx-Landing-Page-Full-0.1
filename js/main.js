$(document).ready(function () {
  $(window).scroll(function () {
    const winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $(".navegation").addClass("sticky");
    } else {
      $(".navegation").removeClass("sticky");
    }
  });

  $(".navegation nav ul li a").on("click", function (e) {
    if (this.hash != "") {
      e.preventDefault();

      const hash = this.hash;
      const interval = 800;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        interval
      );
    }
  });
});
