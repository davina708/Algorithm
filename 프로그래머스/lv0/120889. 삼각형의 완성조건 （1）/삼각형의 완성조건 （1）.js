function solution(sides) {
    let array=sides.sort((a,b)=>a-b);
    if(array[0]+array[1]>array[2]){
        return 1;
    }
    return 2;
}