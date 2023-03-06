function solution(array) {
    let sortedArr=array.sort((a,b)=>a-b);
    let mid = (array.length-1)/2
    return sortedArr[mid];
}

//[0,1,2] 1 = 1*2+1 = 길이-1 /2
//[0,1,2,3,4] 2 =2*2+1
//[0,1,2,3,4,5,6] 3