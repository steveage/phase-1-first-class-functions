function receivesAFunction(aFunction) {
    aFunction();
}

const someFunction = function() {
    console.log(`Hello from someFunction.`);
}

function returnsANamedFunction() {
    return namedFunction;
}

function namedFunction() {
    console.log(`Hello from namedFunction`);
}

function returnsAnAnonymousFunction() {
    return function() {console.log(`Hello from an anonymous function.`)}
}