interface SortResult {
  sortedArray: number[];
}

function bubble_sort(list: number[]): SortResult {
  let sortedArray: number[] = list.slice();

	for (let i = 0; i < sortedArray.length; i++) {
		console.log('i:', i);	  
		for (let j = 0; j < sortedArray.length - 1; j++) {
			console.log('j:', j);
      j;
      if (sortedArray[j] > sortedArray[j + 1]) {
        let temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }

  return { sortedArray };
}

console.log(bubble_sort([5, 3, 8, 4, 2]));