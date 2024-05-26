const promise = new Promise((resolve, reject) => {
  console.log('나 로또 사도 될까!?');
  setTimeout(() => {
    const rand = parseInt(Math.random() * 10);
    console.log(`나온 숫자는 ${rand}`);

    if (rand >= 5) {
      return resolve('아싸! 로또사자');

      //function()
    } else {
      reject('아...망했어요');
    }
  }, 3000);
});

// promise
//   .then((data) => {
//     console.log(data);
//   })

//   .catch((err) => {
//     console.log(err);
//   });
async function lottoAsyncAwait() {
  try {
    const data = await promise;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
lottoAsyncAwait();
