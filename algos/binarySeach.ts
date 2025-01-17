
/**
 * Performs a binary search on a sorted array of numbers.
 * 
 * @param listItems - The sorted array of numbers to search through.
 * @param searchItem - The number to search for in the array.
 * @returns A boolean indicating whether the searchItem was found in the array.
 */
function binarySearch(listItems: number[], searchItem: number): boolean {
  let lo = 0; // the lowest index in the array, also the start of the array
  let hi = listItems.length;  // the highest index in the array, also the end of the array

  do {  // we iterate through the array whilst the lower bound is less than the upper bound
    const mid = Math.floor((lo + hi) / 2);  // we calculate the middle index of the array
    const val = listItems[mid];  // we set the value at the middle index of the array

    if (val === searchItem) { // and check if the value is also the search item, if TRUE, it means the search is over and this is the best case scenario
      return true;
    } else if (val > searchItem) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  } while (lo < hi);
  return false;
}


// Test cases, assumiing we are looking for the value 6
// 1 2 3 4 5 6, 6
// lo = 1, hi = 6, mid = 3, val = 6
// lo = 4, hi = 6, mid = 5, val = 6
// lo = 5, hi = 6, mid = 5, val = 6


 