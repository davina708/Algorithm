function solution(my_string) {
    const arr=my_string.split("");
    const arr2=arr.reverse();
    let res="";
    for(let i=0;i<arr2.length;i++){
        res=res+arr2[i];
    }
    return res;
}