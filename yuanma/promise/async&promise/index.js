import AjPromise from './promise.js'

async function async1() {
  await async2()
  console.log('AAA')
}

async function async2() {
  console.log('3')
  return await new Promise((resolve, reject) => {
    resolve()
    console.log('4')
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
