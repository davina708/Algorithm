function solution(money) {
    // let count=0;
    // while(money>=5500){
    //     money=money-5500;
    //     count++;
    // }
    //    return [count,money]
    return [Math.floor(money/5500), money%5500]
}