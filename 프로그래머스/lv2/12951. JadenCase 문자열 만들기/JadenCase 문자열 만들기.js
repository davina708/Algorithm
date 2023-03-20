function solution(s) {
    let newS=s.toLowerCase();
    let arr=newS.split(" ") //["for", "the", "last", "week"]
    return arr.map((el)=>el.charAt(0).toUpperCase() + el.slice(1)).join(" ")
}