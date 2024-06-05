// // Answer 01
for(let i = 1; i <= 100; i++){
    if(i % 2 == 0) console.log(i);
}




// // Answer 02
function calMe(o, a, b){
    switch(o){
        case "+": console.log(`${a} + ${b} = ${a+b}`); break;
        case "-": console.log(`${a} - ${b} = ${a-b}`); break;
        case "*": console.log(`${a} * ${b} = ${a*b}`); break;
        case "/": console.log(`${a} / ${b} = ${a/b}`); break;
        default: console.log("It's not one of operator");
    }
}

calMe('*', 2, 4);
calMe('/', 20, 4);
calMe('-', 2, 4);
calMe('+', 2, 4);



// // Answer 03
function findTax(n){
    var taxAmount = 0;
    if(n <= 500000 && n > 0){
        taxAmount = (n * 0 / 100);
    } else if (n <= 1000000 && n > 500000){
        taxAmount = (n * 10 / 100);
    } else if (n <= 1500000 && n > 1000000){
        taxAmount = (n * 20 / 100);
    } else {
        taxAmount = (n * 30 / 100);
    }
    console.log(`The tax amount on ${n} of salary is: ${taxAmount}`);
}

findTax(300000);
findTax(3000);
findTax(300000000);
findTax(3000000);




// // Answer 04
function getSum(n1, n2){
    const len1 = Math.ceil(Math.log10(n1 + 1));
    const len2 = Math.ceil(Math.log10(n2 + 1));
    let sum = 0, maxLen;
    if(len1 > len2){
        maxLen = len1;
    } else {
        maxLen = len2;
    }
    
    for(let i = 0; i < maxLen; i++){
        sum += Math.floor(n1 % 10) * Math.floor(n2 % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }
    console.log(sum);
}

getSum(6, 34);
getSum(16, 3402);
getSum(003, 21);