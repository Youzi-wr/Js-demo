// 1.
// let myEvent = new Event('myEvent');

// 2.
// let myEvent = new CustomEvent('myEvent', {
//   detail: {
//     name: 'lindaidai'
//   }
// })

// 3.
let myEvent = document.createEvent('CustomEvent');
myEvent.initEvent('myEvent', true, true)

let btn = document.getElementsByTagName('button')[0]
btn.addEventListener('myEvent', function (e) {
    console.log(e)
    console.log(e.detail)
})
setTimeout(() => {
    btn.dispatchEvent(myEvent)
}, 2000)
