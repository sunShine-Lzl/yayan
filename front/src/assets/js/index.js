(() => {
  let arr = [
    "./nowdata.html",
    "./user.html",
    "./yuyue.html",
    "./xfjl.html",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  //tab切换逻辑
  function tabToggle() {
    $(".el-submenu").click(function () {
      if ($(this).hasClass("active")) {
        $(this).next().toggle(600);
        $(this).next().siblings(".el-submenu-count").hide(400);
        $(this).removeClass("active");
      } else {
        $(this).next().siblings(".el-submenu-count").hide(400);
        $(this).addClass("active");
        $(this).next().toggle(600);
      }
    });
  }

  //点击侧边分类tab切换显示页面
  function tabShow() {
    $(".el-submenu-count .branch").click(function () {
      let data = arr[$(this).data("i")];
      $("iframe").attr("src", data);
    });
  }

  function init() {
    $("header").addClass("active");
    console.log(1);
  }
  tabToggle();
  tabShow();
  init();
})();
