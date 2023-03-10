function solution(my_string, n) {
    let res="";
    let arr=my_string.split("")
    for(let i=0;i<arr.length;i++){
            let newstring=arr[i].repeat(n);
            res=res+newstring;
        }
return res;
}