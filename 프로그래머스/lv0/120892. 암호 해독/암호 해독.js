function solution(cipher, code) {
    let res="";
    for(let i=code-1;i<cipher.length;i+=code){
            res=res+cipher[i];
        }
    return res;
}