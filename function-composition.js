functions = [x => x + 1, x => x * x, x => 2 * x],
x = 4

function compose(functions) {

    return function (x) {

        // method 1 
        // for (let i = functions.length - 1; i >= 0; i--) {
        //    x = functions[i](x)
        // }
        // return x


        // method 2
        // return functions.reverse().reduce((acc,fn) => fn(acc),x)


        // method 3
       return functions.reduceRight((acc,fn) => fn(acc),x)
    }
}

const fn = compose(functions);
const result = fn(x)
console.log(result);
