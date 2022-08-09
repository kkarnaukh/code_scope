const fiboResult = [];

function fibo() {
    for (let i = 0; i <= 100; i++) {
        if (i === 0 || i === 1) {
            fiboResult[i] = i;
        } else {
            fiboResult[i] = fiboResult[i-1] + fiboResult[i-2];
        }
    }
}

fibo();
console.log('final');
console.log(fiboResult.join(', \n'));