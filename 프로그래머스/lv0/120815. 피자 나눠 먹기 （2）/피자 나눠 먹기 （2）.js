function solution(n) {
    // let a=n;
    // let b=6;
    // while(a%b!==0){
    //     let r=a%b;
    //     if(r!==0){
    //         a=b;
    //         b=r; 
    //     }
    // }
    // let lcm=(n*6)/b;
    // return lcm/6;
    let k=6;
    while(k%n!==0){
        k=k+6;
    }
    return k/6;
}
//n*k===6*k가 되는 순간 까지 k증가
//n과 6의 최소공배수