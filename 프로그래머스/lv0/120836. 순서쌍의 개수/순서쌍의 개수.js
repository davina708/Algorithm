function solution(n) {
    let count=0;
    for (let i=1;i<=n;i++){
        if(n%i===0){
            count++;
        }
        continue;
    }
    return count;
}

//n의 약수의 개수 return