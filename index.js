$(document).ready(function () {
  const a = "falling-image";
  const b = "falling-image1";
  const image = {
    image1: "./image/image1.png",
    image2: "./image/image2.png",
    image3: "./image/image3.png",
    image4: "./image/image4.png",
    image5: "./image/image5.png",
  };

  function getRandomImageKey() {
    const keys = Object.keys(image);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
  }

  // Lấy một khóa ngẫu nhiên từ đối tượng image

  function onClick() {
    $(document).click(function (event) {
      // Lấy tọa độ X và Y khi click
      var x = event.pageX;
      var y = event.pageY;

      ////////////////////////////
      var $newElement = $("<img />");
      var $newElementHeart = $("<div class=heart'></div>");

      const randomImageKey = getRandomImageKey();

      // Lấy đường dẫn ảnh tương ứng từ đối tượng image
      const imageURL = image[randomImageKey];

      // Đặt thuộc tính cho phần tử &lt;img&gt;
      $newElement.attr({
        id: Math.random() < 0.5 ? a : b,
        src: imageURL,
        alt: "Hình ảnh rơi",
        width: "80",
        height: "80",
      });

      // Đặt vị trí cho phần tử DOM mới
      $newElement.css({ top: y, left: x });
      //   $newElementHeart.css({ top: y, left: x });

      // Thêm phần tử DOM mới vào tài liệu
      $("body").append($newElement);
      $("body").append($newElementHeart);

      $newElement.css({ top: y, left: x, opacity: 1, display: "block" });

      // Thực hiện hiệu ứng rơi và mờ dần
      $newElement.animate(
        { top: $(document).height(), opacity: 0, rotate: 360 },
        4000,
        function () {
          // Khi hoàn thành, ẩn hình ảnh
          $newElement.remove();
        }
      );
      ////////////////////////
    });
  }

  function auTo() {
    // Lấy tọa độ X và Y khi click
    var x = Math.random() * ($(document).width() - 80); // Tránh vượt quá chiều rộng của màn hình
    var y = Math.random() * ($(document).height() - 80); // Tránh vượt quá chiều cao của màn hình
    ////////////////////////////
    var $newElement = $("<img />");

    // Đặt thuộc tính cho phần tử &lt;img&gt;

    const randomImageKey = getRandomImageKey();

    // Lấy đường dẫn ảnh tương ứng từ đối tượng image
    const imageURL = image[randomImageKey];

    $newElement.attr({
      id: Math.random() < 0.5 ? a : b,
      src: imageURL,
      alt: "Hình ảnh rơi",
      width: "80",
      height: "80",
    });

    // Đặt vị trí cho phần tử DOM mới
    $newElement.css({ top: y, left: x });

    // Thêm phần tử DOM mới vào tài liệu
    $("body").append($newElement);

    $newElement.css({ top: y, left: x, opacity: 1, display: "block" });

    // Thực hiện hiệu ứng rơi và mờ dần
    $newElement.animate(
      { top: $(document).height(), opacity: 0, rotate: 360 },
      4000,
      function () {
        // Khi hoàn thành, ẩn hình ảnh
        $newElement.remove();
        // $newElement.css({ display: "none" });
      }
    );
    ////////////////////////
  }
  onClick();
  setInterval(() => {
    auTo();
  }, 2000);
});
