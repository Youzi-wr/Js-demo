
// 有8个图片资源的url，已经存储在数组urls中。
// urls类似于['https://image1.png', 'https://image2.png', ....]
// 而且已经有一个函数function loadImg，输入一个url链接，返回一个Promise，该Promise在图片下载完成的时候resolve，下载失败则reject。
// 但有一个要求，任何时刻同时下载的链接数量不可以超过3个。
// 请写一段代码实现这个需求，要求尽可能快速地将所有图片下载完成。

var urls = [
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png",
];
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      console.log(`图片加载完成: ${url}`);
      resolve(img);
    };
    img.onerror = function () {
      reject(new Error('Could not load image at' + url));
    };
    img.src = url;
  });
}

// self----------------
// function limitLoad(urls, handle, limit) {
//     let sequence = [].concat(urls);

//     // 处理limit长度的的promise
//     let promises = sequence.splice(0, limit).map((url, index) => {
//         return handle(url).then(() => {
//             return index;
//         })
//     })

//     // 处理剩下的promise
//     return sequence
//         .reduce((imagePromise, url) => {
//             return imagePromise
//                 .then(() => {
//                     return Promise.race(promises)
//                         .then(finishIndex => {
//                             promises[finishIndex] = handle(url).then(() => {
//                                 return finishIndex;
//                             })
//                         })
//                 })
//         }, Promise.resolve()) //至此，sequence已经遍历完了，得到了一组还在加载的promise
//         .then(() => { // 最后三个用.all来调用
//             return Promise.all(promises);
//         });
// }

// standard----------------
function limitLoad(urls, handler, limit) {
  let sequence = [].concat(urls); // 复制urls
  // 这一步是为了初始化 promises 这个"容器"
  let promises = sequence.splice(0, limit).map((url, index) => {
    return handler(url).then(() => {
      // 返回下标是为了知道数组中是哪一项最先完成
      return index;
    });
  });
  // 注意这里要将整个变量过程返回，这样得到的就是一个Promise，可以在外面链式调用
  return sequence
    .reduce((pCollect, url) => {
      return pCollect
        .then(() => {
          return Promise.race(promises); // 返回已经完成的下标
        })
        .then(fastestIndex => { // 获取到已经完成的下标
          // 将"容器"内已经完成的那一项替换
          promises[fastestIndex] = handler(url).then(
            () => {
              return fastestIndex; // 要继续将这个下标返回，以便下一次变量
            }
          );
        })
        .catch(err => {
          console.error(err);
        });
    }, Promise.resolve()) // 初始化传入
    .then(() => { // 最后三个用.all来调用
      return Promise.all(promises);
    });
}


limitLoad(urls, loadImg, 3)
  .then(res => {
    console.log("图片全部加载完毕");
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });

// -------------------分析---------------
// 首先处理一个长度为limit的promise队列A，剩余为队列B。其次捕获队列A中最先完成的promise，记录其下标，将其替换成队列B中promise

// 关键点一：如何捕获最先完成的promise
// 关键点二：promise A的更新时机（在B循环中更新主队列A，在promise回调中循环）
// 关键点三：精准传参，搞清楚return的目的

// 为什么到处都是return？
// 记住：.then()需要一个return值，return一个promise对象或者return一个常量（常量将会被包裹成promise对象），return是链式调用的必要条件，如果没有return，链式调用会被打破

// reduce+promise返回了啥？
// 要看最里层的promise的return值，其余的return更多的是在返回promise对象（链式调用的需要）