class Test {
  constructor() {
    this.countA = 1
    this.countB = 1
    for (let i = 0; i < 100; i++) {
      this[i] = () => { }
    }
  }
  a() {
    const start = new Date().getTime();
    console.time('testA')
    while (new Date().getTime() - start < 10000) {
      this.countA++
    }
    console.timeEnd('testA')
  }
  b() {
    const start = new Date().getTime();
    const _this = this
    console.time('testB')
    while (new Date().getTime() - start < 10000) {
      _this.countB++
    }
    console.timeEnd('testB')
  }
}
const test = new Test()
test.a()
test.b()