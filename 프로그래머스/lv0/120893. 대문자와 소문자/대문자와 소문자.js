function solution(my_string) {
    // let lower="abcdefghijklmnopqrstuvwxyz";
    // let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // let res="";
    
    // 용균코드
    let result = "";
    for (let i = 0; i < my_string.length; i++) {
        let charCode = my_string[i].charCodeAt()
        if (charCode >= 65 && charCode <= 90) {
            result += my_string[i].toLowerCase()
        } else {
            result += my_string[i].toUpperCase()
        }
    }
    
    return result
    
    // 용균코드 끝
    
    // for(let i=0;i<lower.length;i++){
    //     for(let j=0;j<my_string.length;j++){
    //         if(lower[i]===my_string[j]){
    //             res=res+lower[i].toUpperCase();
    //         } else if(upper[j]===my_string[i]){
    //             res=res+upper[j].toLowerCase();
    //         } else 
    //             continue;
    //     }
    // }
    // return res;
}