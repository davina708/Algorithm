function solution(my_string, letter) {
    let res="";
 for(let i=0;i<my_string.length;i++){
     if(my_string[i]!==letter){
         res=res+my_string[i]
     }else continue;
 }
    return res;
}