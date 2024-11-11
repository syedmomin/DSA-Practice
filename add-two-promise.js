/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    // method 1
    // let p1;
    // let p2;
    // await promise1.then(v => p1 = v);
    // await promise2.then(v => p2 = v);
    // return new Promise(resolve => resolve(p1 + p2))

    // method 2
    const [p1, p2] = await Promise.all([promise1, promise2]);
    return p1 + p2;
};


addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log); // 4

