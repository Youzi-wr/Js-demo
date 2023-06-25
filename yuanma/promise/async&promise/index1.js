async function async1() {
  new Promise((resolve) => {
    console.log('3')

    resolve()
    console.log('4')
  }).then(() => {
    // console.log('AAA') // 没有return: 3 4 7 AAA 8 9 10
  }).then(() => {
    // console.log('AAA') // await promise Or return await promise: 3 4 7 8 AAA 9 10
  }).then(() => {
    console.log('AAA') // return promise: 3 4 7 8 9 AAA 10
  })
}

async1()

new Promise((resolve) => {
  console.log('7')
  resolve()
}).then(() => {
  console.log('8')
}).then(() => {
  console.log('9')
}).then(() => {
  console.log('10')
})


