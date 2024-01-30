let n = 0;
while (n < 40) {
    n++;
    if (n % 5 !== 0) {
        continue;
    }
    console.log(n);
}