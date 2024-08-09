function fibsRec(times) {
    if (times <= 0) {
      return [];
    }
    if (times === 1) {
      return [0];
    } else if (times === 2) {
      return (fibsRec(times-1).concat([1]));
    }
    let temp = fibsRec(times-1);
    
    return temp.concat(temp[temp.length -1] + temp[temp.length -2]);
  }
  
  
  
  function fibs(n) {
    if (n === 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    }
    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
      
      arr = arr.concat([arr[arr.length-1] + arr[arr.length-2]]);
    }
    
    return arr;
  }