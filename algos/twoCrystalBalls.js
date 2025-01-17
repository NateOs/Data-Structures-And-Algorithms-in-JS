function two_crystal_balls(breaks) {
    var jmpAmount = Math.floor(Math.sqrt(breaks.length));
    var i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    i -= jmpAmount;
    for (var j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
// Test cases
var test1 = [false, false, false, false, true, true, true]; // Should return 4
var test2 = [false, false, false, false, false]; // Should return -1
var test3 = [true, true, true, true, true]; // Should return 0
console.log("Test 1 result:", two_crystal_balls(test1));
console.log("Test 2 result:", two_crystal_balls(test2));
console.log("Test 3 result:", two_crystal_balls(test3));
