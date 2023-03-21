function solution(my_string) {
    let num=[1,2,3,4,5,6,7,8,9]
    let sum=0;
    for(let i=0;i<my_string.length;i++){
        for(let j=0;j<num.length;j++){
              if(Number(my_string[i])===num[j]){
            sum=sum+Number(my_string[i]);
        } else
        continue;
    }
        }
      
    return sum;
}