/*
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let memoizedFn = new Map()
    return function (...args) {
        const key = JSON.stringify(args);
        if (memoizedFn.has(key)) {
            return memoizedFn.get(key)
        } else {
            let result = fn(...args)
            memoizedFn.set(key, result)            
            return result
        }
    }
   
}



let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1 
