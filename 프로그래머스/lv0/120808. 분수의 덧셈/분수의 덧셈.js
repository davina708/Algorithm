function solution(numer1, denom1, numer2, denom2) {
    let arr = [];
    let gcd=1;
    let lcm=denom1*denom2;
    let num=Math.max(denom1,denom2)
    for(let i=2;i<=num;i++){
        if(denom1%i===0&&denom2%i===0){
            gcd=i;
        }
    }
    lcm=lcm/gcd;
    arr[0]=(numer1*(lcm/denom1))+(numer2*(lcm/denom2))
    arr[1]=lcm;
    let sm=1;
    let num2=Math.min(arr[0],arr[1])
    for(let i=2;i<=num2;i++){
        if(arr[0]%i===0&&arr[1]%i===0){
            sm=i;
        }
    }
    return [arr[0]/sm,arr[1]/sm];
}

//1. denom1 & denom2 의 최소공배수를 구한다
//2. 최소공배수 % denom1을 numer1에 곱하고 
//3. 최소공배수 % denom2을 numer2에 곱하고 
//4. 두 수의 합이 첫번째 인자, 
//5. 최소공배수가 두번째 인자로 배열 return 