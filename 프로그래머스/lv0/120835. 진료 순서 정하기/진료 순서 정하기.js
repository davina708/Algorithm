function solution(emergency) { //[3,76,24]
    let sortedArr=[...emergency].sort((a,b)=>b-a); //[76,24,3]
    for(let i=0;i<emergency.length;i++){
        for(let j=0;j<sortedArr.length;j++){
            if(emergency[i]===sortedArr[j]){
                emergency[i]=j+1;
                break;
            }
            continue;
        }
    }
    return emergency;
}
