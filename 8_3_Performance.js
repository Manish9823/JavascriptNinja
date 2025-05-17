
// Performance Measurement

function isPrime(number) {
    if (number < 2) return false;
    for (let index = 2; index < number; index++) {
        if (number % index == 0) return false;
    }
    return true;
}

isPrime = new Proxy(isPrime, {
    apply: (target, thisContext, args) => {
        console.time("isPrime");
        const result = target.apply(thisContext, args);
        console.timeEnd("isPrime");
        return result;
    }
});

isPrime(1299827);

// Output=>  isPrime: 39.574ms


// Here we supply a handler with an apply trap that will be executed on function invocation.