let item = ['Ama','Esi','Yaw','Kwaku','Aku','Baaba']
let n = item.length

const insertionSort = (item, n) => {
    let i, j; //counters
    let sort = []
    for (i = 1; i < n; i++) {
        j = i;
        while ((j>0) && (item[j] < item[j-1])) {

            //swapping
            let small = item[j]; //2 is small
            item[j] = item[j-1];//4 is j
            item[j-1] = small;//2 is first

            j = j-1;
        }
    } 
    
    sort = item
    console.log(sort)
}

insertionSort(item, n)