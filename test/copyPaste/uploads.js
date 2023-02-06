class CopyPaste {
  constructor() {
    this.type = ['image/jpeg', 'image/jpg', 'image/gif', 'image/png', 'image/svg+xml', 'video/mp4']


  }

  dataURItoBlob(res, filename) {
    const c = atob(res.split(",")[1]),
      buffer = new ArrayBuffer(c.length)
    // arrayBuffer = new Uint8Array(buffer)

    res = res.split(",")[0].split(":")[1].split(";")[0];

    // for (let i = 0; i < c.length; i++) {
    //   arrayBuffer[i] = c.charCodeAt(i);
    // }
    return new Blob([buffer], { type: res, name: filename || "" })
  }

  createfileDom(type) {
    let dom

    if (type.indexOf('video') > -1) {
      dom = document.createElement('video')
      dom.style.width = '200px'
    } else {
      dom = document.createElement("img")
    }

    return dom
  }

  getBlob(file) {
    const fileReader = new FileReader

    return new Promise(resolve => {
      fileReader.onload = (e) => {
        const result = e.currentTarget.result
        resolve({
          src: result,
          blob: this.dataURItoBlob(result, file.name),
          name: file.name
        })
      };
      fileReader.readAsDataURL(file)
    })
  }

  async upload(file) {
    // 上传单个文件
    if (this.type.indexOf(file.type) > -1) {
      const d = this.createfileDom(file.type)
      const b = await this.getBlob(file)

      d.setAttribute("src", b.src);

      return {
        img: d,
        ...b
      }
    }
  }

  /**
   * 拖拽
   */
  async drop(callback, e) {
    e.preventDefault();

    const files = e.dataTransfer.files
    const r = await this.upload(files[0])

    callback(r)
  }

  /**
   * 粘贴
   */
  async paste(e) {
    const clipData = e.clipboardData

    const r = await this.upload(clipData.files[0])
    document.getElementById('drop').appendChild(r.img)
  }

  getDragImage({ id, callback }) {
    const dom = document.getElementById(id)

    dom.addEventListener('drop', this.drop.bind(this, callback))
    dom.addEventListener("dragenter", function (b) { b.preventDefault() }, !1);
    dom.addEventListener("dragleave", function (b) { b.preventDefault() }, !1);
    dom.addEventListener("dragover", function (b) { b.preventDefault() }, !1)

    // 监听粘贴事件
    // document.addEventListener("paste", this.paste.bind(this))

    document.addEventListener('keydown', async (e) => {
      if ((e.metaKey || e.ctrlKey) && e.keyCode === 86) {
        // const text = await navigator.clipboard.read()
        // debugger
        // const queryOpts = { name: 'clipboard-read', allowWithoutGesture: false };
        // const permissionStatus = await navigator.permissions.query(queryOpts);
        // // Will be 'granted', 'denied' or 'prompt':
        // console.log(permissionStatus.state);
        // const text = await navigator.clipboard.read()
        // debugger

        // // Listen for changes to the permission state
        // permissionStatus.onchange = () => {
        //   console.log(permissionStatus.state);
        // };

        navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
          // If permission to read the clipboard is granted or if the user will
          // be prompted to allow it, we proceed.

          if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard.read().then((data) => {
              debugger
              for (let i = 0; i < data.length; i++) {
                if (!data[i].types.includes("image/png")) {
                  alert("Clipboard contains non-image data. Unable to access it.");
                } else {
                  data[i].getType("image/png").then((blob) => {
                    imgElem.src = URL.createObjectURL(blob);
                  });
                }
              }
            });
          }
        });
      }
    })

  }
}

window.CopyPaste = CopyPaste