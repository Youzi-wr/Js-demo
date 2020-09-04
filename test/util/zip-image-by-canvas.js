// 利用canvas进行图片压缩
function init() {
    let img = new Image();
    let self = this;
    img.src = this.bg;
    console.log("********未压缩前的图片大小********");
    console.log(this.bg.length / 1024);
    img.onload = function () {
        let data = self.compress(img, 0.3);
        // self.uploadImg(data, id);
        self.bg = data;
    };
}
function compress(img, size) {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    let initSize = img.src.length;
    let width = img.width;
    let height = img.height;
    canvas.width = width;
    canvas.height = height;
    // 铺底色
    ctx.fillStyle = "#fff";、
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, width, height);
    //进行最小压缩
    let ndata = canvas.toDataURL("image/jpeg", size);
    console.log("*******压缩后的图片大小*******");
    // console.log(ndata)
    console.log(ndata.length / 1024);
    return ndata;
}