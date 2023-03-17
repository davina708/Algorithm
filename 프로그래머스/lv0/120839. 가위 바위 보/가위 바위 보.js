function solution(rsp) {
    let res="";
    for(let i=0;i<rsp.length;i++){
        if(rsp[i]==="2"){
            res=res+"0";
        } else if(rsp[i]==="0"){
            res=res+"5";
        } else if(rsp[i]==="5"){
            res=res+"2";
        }
    }
    return res;
}