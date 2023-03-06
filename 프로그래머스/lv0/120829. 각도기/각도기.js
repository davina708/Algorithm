function solution(angle) {
    let res=0;
    if(0<angle&&angle<90){
        res= 1;
    } else if (angle===90){
        res= 2;
    } else if (90<angle&&angle<180){
        res= 3;
    } else if(angle===180){
        res= 4;
    }
    return res;
}