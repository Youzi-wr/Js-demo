export function measure(target, name, descriptor) {
  var oldVal = descriptor.value

  descriptor.value = async function () {
    console.time(name)
    const res = await oldVal.apply(this, arguments)
    console.timeEnd(name)
    return res
  }
  return descriptor
}