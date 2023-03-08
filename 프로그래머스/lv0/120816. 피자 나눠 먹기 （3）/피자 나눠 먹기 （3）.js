function solution(slice, n) {
    let res=1;
    while(slice*res<n){
        res++;
    }
    return res;
}