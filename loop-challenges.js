// Loop 1
for (var x = 1; x < 20; x++) {
    if (x % 2 != 0) {
        console.log(x);
    }
}

// Loop 2
for (var x = 100; x >= 0; x--) {
    if (x % 3 == 0) {
        console.log(x);
    }
}

// Loop 3
var arr = [4, 2.5, 1, -0.5, -2, -3.5];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Loop 4
var sum = 0;
for (var i = 1; i <= 100; i++) {
    sum += i
    console.log(sum);
}

// Loop 5
var product = 1;
for (var i = 1; i <= 12; i++) {
    product *= i
    console.log(product);
}