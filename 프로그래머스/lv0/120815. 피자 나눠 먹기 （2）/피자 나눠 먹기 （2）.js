function solution(n) {
    let flag=true;
    let k=1;
    while(flag){
        if(6*k%n===0){
            flag=false;
            return k;
        } else {
            k++;
        }
    }
}
//n*k===6*k가 되는 순간 까지 k증가
//n과 6의 최소공배수