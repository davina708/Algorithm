function solution(my_string) {
    let reg=/[aeiou]/g
    return my_string.replaceAll(reg,"")
}