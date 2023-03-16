function solution(n) {
    let letter=n.toString();
    let sum=0;
    for(let i=0;i<letter.length;i++){
        sum=sum+Number(letter[i]);
    }
    return sum;
}