function solution(num_list, n) {
	let arr=[];
    let count=num_list.length/n
    for(let i=0;i<count;i++){
        arr.push(num_list.splice(0,n));
    }
    return arr;
}

//2차원 배열의 length는 num_list.length/n
//1차원 배열의 length는 n
