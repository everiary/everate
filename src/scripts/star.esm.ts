let drawStars: any = (speed?: number, amount?: number) => {
  /**
   * author: @sun0225SUN
   * origin repo: https://github.com/sun0225SUN/home
   * modified & rewrite: @wemsx
   * project repo: https://github.com/everiary/everate
   */
  // 定义一个跨浏览器兼容的requestAnimationFrame函数
  var requestAnimFrame = function (callback: FrameRequestCallback) {
    window.requestAnimationFrame(callback);
  };

  // 创建一个canvas及其2D渲染上下文
  var canvas = document.createElement("canvas"),
    starfield = <HTMLCanvasElement>document.getElementById("startrack");

  // 设置canvas尺寸以匹配starfield元素
  canvas.width = starfield.width = starfield.offsetWidth;
  canvas.height = starfield.height = starfield.offsetHeight;

  // 调整高DPI显示的canvas尺寸
  var maxSize = Math.max(canvas.width, canvas.height);
  canvas.width = 2.6 * maxSize;
  canvas.height = 2.6 * maxSize;

  // 创建第二个渲染上下文用于starfield元素
  var starContext = <CanvasRenderingContext2D>starfield.getContext("2d"),
    stars: any[] = [], // 用于存储星星对象的数组
    frameCount = 0; // 帧数计数器

  // 生成两个值之间的随机数的函数
  function randomBetween(t: number, e: number) {
    var range = e - t;
    return t + Math.round(Math.random() * range);
  }

  // 将星空绘制到第二个渲染上下文上
  function drawStarfield() {
    starContext.drawImage(canvas, -canvas.width / 2, -canvas.height / 2);
  }

  // 更新帧，清除拖尾，并旋转星空
  function updateFrame() {
    drawStarfield();

    // 在150帧后，每8帧清除拖尾
    if (++frameCount > 150 && frameCount % 8 === 0) {
      starContext.fillStyle = "rgba(0,0,0,.04)";
      starContext.fillRect(
        -3 * maxSize,
        -3 * maxSize,
        6 * maxSize,
        6 * maxSize
      );
    }

    // 以小角度旋转星空
    rotateContext(speed ? speed / 10000 : 0.0009);
  }

  // 将上下文按指定角度旋转
  function rotateContext(angle: number) {
    starContext.rotate(angle);
  }

  // 为星空设置初始背景颜色
  starContext.fillStyle = "rgba(21,21,21,1)";
  starContext.fillRect(0, 0, canvas.width, canvas.height);
  starContext.lineCap = "round";

  // 定义星星数量并创建星星对象数组
  var numStars = amount ? amount : 8000 // 调整此值以控制星星密度

  for (var i = 0; i < numStars; i++) {
    stars.push({
      x: randomBetween(-canvas.width, canvas.width),
      y: randomBetween(-canvas.height, canvas.height),
      size: 1.2,
      color: `rgba(${randomBetween(120, 255)},${randomBetween(
        120,
        255
      )},${randomBetween(120, 255)},${randomBetween(30, 100) / 100})`,
    });
  }

  // 在星空上绘制星星
  function drawStars() {
    for (var i = stars.length; i--; ) {
      var star = stars[i];
      starContext.beginPath();
      starContext.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
      starContext.fillStyle = star.color;
      starContext.closePath();
      starContext.fill();
    }
  }

  // 自执行函数创建动画循环
  (function animate() {
    requestAnimFrame(animate);
    updateFrame();
    drawStars();
  })();

  // 处理窗口大小调整事件以更新canvas尺寸
  window.onresize = function () {
    canvas.width = starfield.width = starfield.offsetWidth;
    canvas.height = starfield.height = starfield.offsetHeight;
    starContext.fillStyle = "rgba(21,21,21,1)";
    starContext.fillRect(0, 0, canvas.width, canvas.height);
  };
};

export default drawStars;
