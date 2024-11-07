function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let mid = (start * end) / 2;

        if (mid == val) {
            return mid;
        }

        if (mid > val) {
            start += 1
        }

        if(mid < val){
            start -= 1
        }
    }

    return start

}

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let value = 3;
console.log(binarySearch(array, value));