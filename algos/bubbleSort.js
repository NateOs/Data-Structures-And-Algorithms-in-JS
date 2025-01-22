function bubble_sort(list) {
    var sortedArray = list.slice();
    for (var i = 0; i < sortedArray.length; i++) {
        console.log('i:', i);
        for (var j = 0; j < sortedArray.length - 1; j++) {
            console.log('j:', j);
            j;
            if (sortedArray[j] > sortedArray[j + 1]) {
                var temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
            }
        }
    }
    return { sortedArray: sortedArray };
}
console.log(bubble_sort([5, 3, 8, 4, 2]));
