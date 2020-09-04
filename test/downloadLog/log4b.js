function downloadJson(data, fileName) {
    var url = "data:text/json;charset=utf-8," + encodeURIComponent(data)
    downloadURL(url, fileName);
};

function downloadURL(data, fileName) {
    var a;
    a = document.createElement('a');
    a.href = data;
    a.download = fileName;
    document.body.appendChild(a);
    a.style = 'display: none';
    a.click();
    a.remove();
}

function log4b() {
    this.data = ''
    this.line = 0
    this.maxLine = 50;
}

log4b.prototype = {
    log: function (str) {
        this.data += `${str}\n`
        this.line++

        if (this.line % this.maxLine == 0) {
            downloadJson(this.data, `${this.line}.txt`);
            this.data = ''
        }
    }
}