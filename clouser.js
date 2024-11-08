function counter(number) {
    let count = number;
     
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        }
    };
}

const myCounter = counter(5);
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.decrement());
