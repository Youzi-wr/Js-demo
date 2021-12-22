// promise实现
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Hello from a Promise!');
  }, 2000);
});

promise.then(value => console.log(value));

// rxjs实现
import { Observable } from 'rxjs/Observable';

const observable = new Observable((observer) => {
  setTimeout(() => {
    observer.next('Hello from a Observable!');
  }, 2000);
});

observable.subscribe(value => console.log(value));