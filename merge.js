function mergeSort(arr) {
    if (0 >= arr.length-1 ) {
      return arr;
    }
     let mid = (0 + arr.length) / 2;
     let a = mergeSort(arr.slice(0, mid));
     let b = mergeSort(arr.slice(mid));
     let aIndex = 0;
     let bIndex = 0;
     let aLength = a.length-1;
     let bLength = b.length-1;
     let newArr = [];
    while (aIndex <= aLength && bIndex <= bLength) {
    if (a[aIndex] < b[bIndex]) {
        newArr.push(a[aIndex++]);
    } else {
        newArr.push(b[bIndex++]);
    }
    
    }
    for (; aIndex <= aLength;) {
    newArr.push(a[aIndex++]);
    }
    for (; bIndex <= bLength; ) {
    newArr.push(b[bIndex++]);
    
    }
    
    return newArr;
    
  }
  