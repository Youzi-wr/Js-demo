const providers = []
const disposables = []

function test() {
  function registerProviders() {
    disposeAll(providers)
    let i = 10
    while (i > 0) {
      i--
      providers.push({dispose: function(){console.log(i)}})
    }
  }

  registerProviders()
  disposables.push(asDisposable(providers));
  return asDisposable(disposables);
}

function asDisposable(disposables) {
  return { dispose: function () { return disposeAll(disposables); } };
}
function disposeAll(disposables) {
  while (disposables.length) {
      disposables.pop().dispose();
  }
}

console.log(test().dispose())