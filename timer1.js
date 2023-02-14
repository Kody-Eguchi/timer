const numArr = process.argv.slice(2);

const timer1 = function(numArr) {
  // console.log(numArr);
  
  if (numArr.length === 0) {
    return;
  }
  
  for (let num of numArr) {
    num = Number(num);
    // console.log(num);/
    if (num < 0) {
      return;
    }

    if (!Number.isInteger(num)) {
      return;
    }

    setTimeout(() => {
      process.stdout.write('\u0007');
      console.log('beep!');
    }, 1000 * num);

  }
};

timer1(numArr);