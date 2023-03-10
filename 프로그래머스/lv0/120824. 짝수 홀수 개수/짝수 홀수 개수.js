function solution(num_list) {
    let holCount=0;
    let jjakCount=0;
    for(let i=0;i<num_list.length;i++){
        if(num_list[i]%2===0){
            jjakCount++;
        } else
        holCount++;
    }
    return [jjakCount, holCount];
}