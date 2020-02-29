const MAX_NUM_LENGTH = 15;

function breakString(str) {
    const iter = Math.ceil(str.length/MAX_NUM_LENGTH);
    const arr = [];
    for (let i = 1; i <= iter; i++) {
        const initIndex = str.length-MAX_NUM_LENGTH*(i)
        const balance = initIndex < 0 ? -initIndex : 0;
        arr.push(str.slice(initIndex+balance, initIndex+MAX_NUM_LENGTH))
    }
    return arr;
}

function sumStrings(a,b) {     
    a.length > b.length ? b = '0'.repeat(a.length-b.length) + b : a = '0'.repeat(b.length-a.length) + a
    const output_a = breakString(a)
    const output_b = breakString(b)
    const mxlength = Math.max(output_a.length, output_b.length) 
    let final = "";
    let carryover = 0;
    for (let i = 0; i < mxlength; i++) {
        let val = String(Number(output_a[i])+Number(output_b[i])+carryover);
        if (val.length > MAX_NUM_LENGTH) {
            val = val.slice(1, val.length)
            carryover = 1;
        }
        final = val + final;
    }
    return final
}

module.exports = sumStrings;