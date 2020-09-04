function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
    var dataURL = canvas.toDataURL("image/" + ext);
    return dataURL;
}
 
 
/**
*Base64字符串转二进制
*/
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    var b =  new Blob([u8arr], {
        type: mime
    });
    // var url = window.URL.createObjectURL(b);
    // downloadURL(url, 'hhhhhh');
    console.log(b)
}


function downloadURL (data, fileName) {
  var a;
  a = document.createElement('a');
  a.href = data;
  a.download = fileName;
  document.body.appendChild(a);
  a.style = 'display: none';
  a.click();
  a.remove();
};
 
 
var img = "data:image/bmp;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAnCAYAAACSamGGAAAB4ElEQVR4Ae2XSy8DURiGv+kN7XFbIIRICYlEXMICEUEiYif2EjsWfoGdP+MPsBIsmggWbpumC0Jj0caqiVJiwfvN+dpqtNh0ciLnTd7MmW9mMs+85zIzRFbVlQP7xA6ZJZUiJzCJRggOw7VwkMwCZcjIEUDnsNMKt8ANZBaoSn1AAI0BdAWFPrgLbiRzQDWkgJ4CdA3FITILtAgpoOcAXceBYTIHtBRSQC8BumEQ6HdIAb0yCLQ8pGGglSFf395NAa0MycpknkwA/RmSlU4/lgP1csH/HZKVTD7oWU80DQ/C7aRfoz6qvkohs9lcoQ2o6y9GkpELgeQ0u+F62E/VVxGSAXHf3O7eQR4SYKFtnLQEz8NT8CjcD3fwxZ5CCuALxt0maveFLiZ1h5MW4Bl4BI6S/hDhFPnLyZvuFsBnAK6iMEuOOonFziRNdYw0twSSu7lTAIMeAUJO5BD3zAJwEXsD8LiGVbcMGY8nOM0bF56PeTsWSxQgvfbx0tLrbh21z4BumqTipJOcID0em+UaT8XdVkM6oSZyJ4QPiakEkt4BzzJqY6QnTY88kOeQedCAmLsy/8/Da2Eb6QkTlbZX6+OfxdB1pNPjt0xYaqb9rBVS9pNhCVpZWVlZWVlZ/S99Am5jbMFJ8oNQAAAAAElFTkSuQmCC";
var image = new Image();
image.src = img;
image.onload = function() {
    //这样就获取到了文件的Base64字符串
    var base64 = getBase64Image(image);
    //Base64字符串转二进制
    var file = dataURLtoBlob(base64);
}