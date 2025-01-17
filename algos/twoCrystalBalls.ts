function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jmpAmount;

    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpAmount;

    for (let j = 0; j <= jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}

// Test cases
const test1 = [false, false, false, false, true, true, true]; // Should return 4
const test2 = [false, false, false, false, false]; // Should return -1
const test3 = [true, true, true, true, true]; // Should return 0

console.log("Test 1 result:", two_crystal_balls(test1));
console.log("Test 2 result:", two_crystal_balls(test2));
console.log("Test 3 result:", two_crystal_balls(test3));