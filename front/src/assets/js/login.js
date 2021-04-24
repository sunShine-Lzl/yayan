(function () {
  let flag = true;
  //登录时 登录框的input逻辑
  function loginInt() {
    $(".login input").blur(function () {
      if (!$(this).val()) {
        $(this).removeClass("active2").addClass("active1");
        $(this).next().addClass("active");
      } else {
        $(this).removeClass("active1").addClass("active2");
        $(this).next().removeClass("active");
      }
    });
  }
  //点击切换密码可见
  function toggle() {
    $(".pw em").click(function () {
      if (flag) {
        $(this).removeClass("active").next().addClass("active");
        $(".pw input").attr("type", "text");
        flag = false;
      } else {
        $(this).removeClass("active").prev().addClass("active");
        $(".pw input").attr("type", "password");
        flag = true;
      }
    });
  }
  function init() {
    $("header").addClass("active");
    if ($.cookie()) {
      // window.location.href = "./index.html";
    }
    console.log($.cookie());
  }
  //点击登录时逻辑
  function clickLogin() {
    let flag = false,
      f1,
      f2,
      f3,
      day;
    $(".login button").click(function () {
      $("p input").each((index, el) => {
        if (!el.value) {
          $(el).addClass("active1");
          $(el).next().addClass("active");
        }
      });

      f1 = $(".tel input").hasClass("active2");
      f2 = $(".pw input").hasClass("active2");
      f3 = $(".vf input").hasClass("active2");
      if (f1 && f2 && f3) {
        flag = true;
      } else {
        flag = false;
      }
      if (flag) {
        if ($(".checkbox input").prop("checked")) {
          day = 7;
        } else {
          day = 1;
        }
        $.cookie("张三", $(".pw input").val(), {
          expires: day,
          path: "/",
        });
        window.location.href = "./index.html";
      }
    });
  }

  loginInt();
  toggle();
  init();
  clickLogin();
})();
