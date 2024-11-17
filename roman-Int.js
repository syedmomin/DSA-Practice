function romanToInt(s) {
    let arr = s.split('');
    let count = 0 ;
    const makeRoman = new Map()
    makeRoman.set('I', 1)
    makeRoman.set('V', 5)
    makeRoman.set('X', 10)
    makeRoman.set('L', 50)
    makeRoman.set('C', 100)
    makeRoman.set('D', 500)
    makeRoman.set('M', 1000)

    for (let i = 0; i < arr.length; i++) {
        console.log(makeRoman.get(arr[i]));
        
        count += makeRoman.get(arr[i])
    }
    return count
};

console.log(romanToInt("MCMXCIV"));
