function fib(n){ //return fib number n recursively
    return (n == 1||n == 2 ? 1 : fibRec(n-1)+fibRec(n-2));
}

function fibs(n){ //returns array up until fib number n
    let arr = [0];
    let a = 1;
    let b = 1;
    if (n >= 1){
        arr.push(a);
    }
    if (n >= 2){
        arr.push(b)
    }
    for (i = 3; i <= n; i++){
        let c = a + b;
        arr.push(c);
        a = b;
        b = c;
    }
    return arr;
}


function fibsRec(n){ //return array up until fib number n
    let arr = [0];
    if (n >= 1){
        arr.push(1);
    }
    if (n >= 2){
        arr.push(1);
    }
    for (i = 3; i <= n; i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr;
}



array1 = [8, 9, 16, 4, 3, 9, 0, 11] // 8 item array
array2 = [4, 3, 8, 0, 6]//6 item array
array3 = [7, 0, 13, 3, 2, 5, 12, 6, 10]//9 item array 


function mergeSort(array){ //merge sort
    let end = array.length;
    let start = 0;
    let middle = (end - start)/2;

    let firstHalf = array.slice(start, middle);
    let secondHalf = array.slice(middle, end);
    if (end-start <= 1){
        return array;
    }
    
    let newArray = merge(mergeSort(firstHalf), mergeSort(secondHalf));
    
    return newArray;
}

function merge(firstHalf, secondHalf){
    console.log(firstHalf);
    console.log(secondHalf);
    let newArray = [];
    let i = 0;
    let j = 0;
    for ( ;firstHalf[i] != undefined || secondHalf[j] != undefined; ){
        if(firstHalf[i] != undefined && secondHalf[j] != undefined){
            if(firstHalf[i] <= secondHalf[j]){
                newArray.push(firstHalf[i]);
                i++;
            }
            else{
                newArray.push(secondHalf[j]);
                j++;
            }
        }
        else if(firstHalf[i] == undefined){
            newArray.push(secondHalf[j]);
            j++;
        }
        else if(secondHalf[j] == undefined){
            newArray.push(firstHalf[i]);
            i++;
        }
    }
    console.log(firstHalf+' and '+ secondHalf)
    console.log(newArray);
    return newArray;
}

