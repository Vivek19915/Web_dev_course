var i = 1;
while (i) {
    console.log(i)
    i=i*10
    if(i== 9.999999999999998e+307)break
}
while (i++) {
    console.log(i)
    i=i+100000000000000000
}