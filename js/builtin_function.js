let strTen = '10';
console.log(strTen - 5);
console.log(strTen + 5);
console.log(+strTen + 20);
console.log(Number(strTen) + 30);
console.log(Number(strTen) + 50);

function Welcome(a){
    let result;
    if( a <= 0){
        result = "you're welcome.";
    }
    else if( a >= 5){
        result = " you are not welcome.";
    }
    else{
        result = "you are my best."
    }
    return result;
}
console.log(Welcome(1));

let p = '10';
console.log( p + 10 );
console.log( p - 5 );
console.log( p / 2 );
console.log( p * 2 );
console.log(p.toString().length)
console.log(Number.parseInt(p));
console.log(typeof(p));

console.log(Number.isInteger(p));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);

let max_safe = Number.MAX_SAFE_INTEGER;
console.log(max_safe.toString().length);
console.log(typeof(max_safe));
let unsafe = max_safe + 1000;
console.log(Number.isSafeInteger(unsafe));

let maxvalue = Number.MAX_VALUE;
console.log(maxvalue.toString().length);

let x = 10 / 2;
x++;
console.log(x);
console.log(typeof(x));
console.log(Number.isNaN(x));

let fix_int = 5;
fix_int = fix_int.toFixed(5);
console.log(fix_int);
console.log(typeof(fix_int));

// math

let nega = -10;
console.log(Math.abs(nega));

let v = 5.3;
console.log(Math.round(v));

let r = 5;
let f = 10;
console.log(Math.floor(Math.random(r) * Math.floor(f)));