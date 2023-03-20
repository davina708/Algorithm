function solution(numbers, direction) {
    let res=[];
    if(direction==="right"){
        res.unshift(numbers[numbers.length-1]);
        for(let i=0;i<numbers.length-1;i++)
        res.push(numbers[i]);
    }
        if(direction==="left"){
        for(let i=1;i<numbers.length;i++)
        res.push(numbers[i]);
        res.push(numbers[0]);
    }
    return res;
}