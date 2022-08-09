const fiboResult2 = [];

function fibo2() {
    for (let i = 0; i <= 100; i++) {
        fiboResult2[i] = i === 0 || i === 1 ? i : fiboResult2[i-1] + fiboResult2[i-2];
    }
}

fibo2();
console.log('final');
console.log(fiboResult2.join(', \n'));