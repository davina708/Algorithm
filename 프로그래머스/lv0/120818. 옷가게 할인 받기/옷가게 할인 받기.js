function solution(price) {
    if(price<100000){
        return price;
    } else if(100000<=price && price<300000){
        return Math.floor(price*0.95);
    } else if (300000<=price && price<500000){
        return Math.floor(price*0.9);
    } else if(500000<=price) {
        return Math.floor(price*0.8);
    }
}