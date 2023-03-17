function solution(balls, share) {
    function factorial(n){
        let base=1;
        for(let i=2;i<=n;i++){
            base=base*i;
        }   
        return base;
    }
    
    return Math.round(factorial(balls)/(factorial(balls-share)*factorial(share)));
}