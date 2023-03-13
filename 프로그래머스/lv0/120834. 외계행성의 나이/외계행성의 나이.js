function solution(age) {
    let age1=age.toString();
    let letters="abcdefghijklmnopqrstuvwxyz";
    let res="";
    for(let i=0;i<age1.length;i++){
            res=res+letters[age1[i]];
  }
    return res;
    }

