function solution(n) {
    let base=2;
    let sum=0;
    let arr=[];
    while(base<=n){
        arr.push(base);
        base=base+2;
    }
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum;
}