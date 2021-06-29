// -----------------------------------例1
function asyncThing(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), 1000)
  })
}
function main() {
  return Promise.all([1, 2, 3, 4].map(async (value) => {
    const v = await asyncThing(value);
    return v * 2
  }))
}

async function callMain() {
  var promiseList = await main();
  console.log('promiseList >>> ', promiseList)
}
callMain()


// -----------------------------------例2
function testParent() {
  let f
  await Promise.all(
    [1, 2, 3].map(async scene => {
      f = await test(scene)
    })
  )
  console.warn('223', f)
}

function test() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('ddd')
    }, 1000)
  })

  //TODO: 如何将Promise setTimeOut改造成async await
  // return setTimeout(async () => {
  //   return await 'ddd'
  // }, 1000)
}