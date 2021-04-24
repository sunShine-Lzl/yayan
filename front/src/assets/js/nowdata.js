(function () {
  function init() {
    let arr = [125, 185, 70];
    // $(".chart-box div").css("height");
    // for (let i = 0; i < $(".chart-box div").length; i++) {
    //   $(this).css("height", arr[i]);
    //   console.log($(this));
    //   console.log(arr[i]);
    // }
    $(".chart-box div").each((index, item) => {
      $(item).css("height", arr[index]);
    });
  }
  init();
})();
