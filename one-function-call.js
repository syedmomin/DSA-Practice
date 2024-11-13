// one function call one time 

function oneTime(...args){
    console.log("hello",...args);
}

function once(fn) {
    let count = 0;
    return function (...args) {
        if(!count++) return fn(...args);
        return undefined;
    };
}


const fnCall = once(oneTime);
fnCall(1, 2, 3);
fnCall(2, 3, 6);
fnCall(2, 3, 6);