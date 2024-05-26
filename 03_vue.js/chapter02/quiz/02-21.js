const p = new Promise((res, rej) => {
  setTimeout(() => {
    let num = Math.random();
    //0~1사이의 난수 발생
    if (num >= 0.8) {
      rej('생성된 숫자가 0.8이상임- ' + num);
    }
    res(num);
  }, 2000);
});

// p.then((result) => {
//   console.log('처리 결과 : ', result);
// }).catch((error) => {
//   console.log('오류 : ', error);
// });

// console.log('## Promise 객체 생성!');
async function asyncFunc() {
  try {
    const result = await p;
    console.log(`처리결과 : ${result}`);
  } catch (error) {
    console.log('오류 : ', error);
  }
}
asyncFunc();
console.log('## Promise 객체 생성!');
