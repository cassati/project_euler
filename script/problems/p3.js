
// Problem 3
// Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
// 最大质因数
// 13195的所有质因数为5、7、13和29。
// 600851475143最大的质因数是多少？

function isPrime(num) {
    if(num < 2) {
        return false;
    }
    if(num === 2) {
        return true;
    }
    if(num % 2 === 0){
        return false;
    }
    var p = 3;
    var limit = parseInt(num / 2);
    while(p <= limit) {
        if(num % p === 0) {
            return false;
        }
        p += 2;
    }
    return true;
}

function nextPrime(num) {
    if(num === 2) {
        return 3;
    }
    var next = 0;
    if(num % 2 === 0) {
        next = num + 1;
    }else {
        next = num + 2;
    }
    while(!isPrime(next)) {
        next += 2;
    }
    return next;
}

function primeFactor(num) {
    if(num < 2) {
        throw {
            'name': 'PrimeRangeException',
            'message': 'number should >= 2'
        }
    }
    
    var factors = [];
    var fac = 2;
    var limit = parseInt(num / 2);
    var multi = 1;
    
    // find the first prime factor
    while(num % fac !== 0) {
        fac = nextPrime(fac);
        if(fac >= limit) {
            break;
        }
    }
    
    while(fac < limit) {
        if(num % fac === 0){
            factors.push(fac);
            multi *= fac;
            if(multi === num) {
                break;
            }
        }
        fac = nextPrime(fac);
        if(fac > limit) {
            break;
        }
    }
    
    return factors;
}

var start = new Date().getTime();
var factors = primeFactor(600851475143);
var end = new Date().getTime();
console.log('耗时：'+(end - start)+'ms');
console.log(factors);
