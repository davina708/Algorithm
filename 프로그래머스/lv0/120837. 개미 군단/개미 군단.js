function solution(hp) {
    let count=Math.floor(hp/5);
    if(hp%5>=3){
        count=count+Math.floor(hp%5/3)+hp%5%3;
    } else
    count=count+hp%5;
    return count;
}

//24%5=4 / 4
//4%3=1 /1
