// 防抖
var doc = document.getElementById('input');
doc.addEventListener('keyup', debounce(handleInput))

function handleInput(e) {
  console.log(e.target.value)
}

// 节流
var doc1 = document.getElementById('scrollDiv')
doc1.addEventListener('scroll', throttle(scrollFn))

function scrollFn(e) {
  console.log(e.target.scrollTop)
}

// 防抖
function debounce(fn, delay) {
  var timer;
  delay = delay || 200;

  return function (...args) {  //这里的function才是实际的function，args也是实际function的参数。这里的调是不受控的，取决于用户
    var self = this;    //保留实际function的作用域
    clearTimeout(timer);    //通过清除定时器和重置定时器控制fn真正调用时机
    timer = setTimeout(function () {
      fn.apply(self, args)    //right
      // fn.apply(self, ...arguments) //error
    }, delay)
  }
}

// 节流
function throttle(fn, delay) {
  var timer,
    startTime = Date.now();
  delay = delay || 1000;

  return function (...args) {
    var endTime = Date.now();
    var self = this;

    // 第一种
    // if (endTime - startTime >= delay) {
    //     clearTimeout(timer);
    //     startTime = endTime;
    //     timer = null;
    //     fn.apply(self, args)
    // } else if (!timer) {
    //     timer = setTimeout(function () {
    //         fn.apply(self, args)
    //     }, delay)
    // }

    // 第二种
    if (endTime - startTime < delay) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        startTime = endTime;
        fn.apply(self, args)
      }, delay)
    } else {
      startTime = endTime;
      fn.apply(self, args)
    }



    // 第一种：I_I_____I_I_____I_I_____I_I_____
    // 第二种：I_____I__________I______I__________________I

    // 第一种逻辑是有误的，在大于1s的时间执行一次，在紧邻的小于1s的时间又会执行一次，所以它的最小单位是：I_I_____
    // 第二种的逻辑是正确的，在小于1s的时间内重置计时器，在大于1s的时间内直接执行，但最终还会多出来一次定时器的执行。

    // 总体来说第二种方案效果大于第一种方案效果
  }
}

