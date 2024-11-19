const p1 = new Promise(res => setTimeout(() => res("P1 Complete"), 75));
const p2 = new Promise(res => setTimeout(() => res("P2 Complete"), 74));
const p3 = new Promise(res => setTimeout(() => res("P3 Complete"), 71));

Promise.race([p1, p2, p3]).then(console.log); // "P2 Complete"
