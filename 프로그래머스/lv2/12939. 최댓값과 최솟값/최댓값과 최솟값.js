function solution(s) {
    let arr=s.split(' '); //["1","2","3","4"]
    let numarr=[];
   for (let i=0;i<arr.length;i++){
       numarr.push(Number(arr[i]));
   }
    return [Math.min(...numarr),Math.max(...numarr)].join(" ")
}