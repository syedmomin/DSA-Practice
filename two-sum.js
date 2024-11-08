


let testMap = new Map()

testMap.set(43, "one");
testMap.set(12, "two");
testMap.set(33, false);
testMap.set("sadd", { key: "fizz" });
testMap.set(true, "three");

console.log(testMap);
console.log(testMap.values());
console.log(testMap.keys());
console.log(testMap.entries());

testMap.forEach((k,v)=>{
    console.log(k,'  ',v);
})
