function solution(numbers, k) {
    let count = 1;
        for(let i=0;i<k-1;i++){
            count=count+2;
            if(count>numbers.length){
                count=count-numbers.length;
            }
    }
    return count;
}

//[1,2,3,4,1,2,3,4,1,2,3,4]