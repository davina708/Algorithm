function solution(A,B){
    let arr1=A.sort((a,b)=>a-b); //[1,2,4] [1,2]
    let arr2=B.sort((a,b)=>b-a); //[5,4,4] [4,3]
    let res=0;
    
    for(let i=0;i<arr1.length;i++){
        res=res+(arr1[i]*arr2[i]);
        }
        return res;
    }