function solution(array) {    
    // if(array.length===1){
    //     return array[0];
    // }
    
    let count={}; //{1:1,2:1,3:3,4:1} {1:2,2:2}
    for(let i=0;i<array.length;i++){
        if(count[array[i]]===undefined){ //처음보는 요소야?
            count[array[i]]=1; //count 1부터 시작 
        } else { //중복된 요소면
            count[array[i]]++; //count 증가
        }
    }
    
    let newArr=[];
    for(let key in count){
        newArr.push(count[key])
    }
    let maxCount= Math.max(...newArr);
    
    let newArr2=[];
        for(let key in count){
            if(count[key]===maxCount)
        newArr2.push(key)
    }
    if(newArr2.length>1){
        return -1
    } else {
        return Number(newArr2[0])
    }
}