function solution(letter) {
    morse = { 
    '.-':'a',
    '-...':'b',
    '-.-.':'c',
    '-..':'d',
    '.':'e',
    '..-.':'f',
    '--.':'g',
    '....':'h',
    '..':'i',
    '.---':'j',
    '-.-':'k',
    '.-..':'l',
    '--':'m',
    '-.':'n',
    '---':'o',
    '.--.':'p',
    '--.-':'q',
    '.-.':'r',
    '...':'s',
    '-':'t',
    '..-':'u',
    '...-':'v',
    '.--':'w',
    '-..-':'x',
    '-.--':'y',
    '--..':'z'
}
    let newLetter=letter.split(" ");
    let res="";
    for(let i=0;i<newLetter.length;i++){
        for(let keys in morse)
        if(newLetter[i]===keys){
            res=res+morse[keys];
        }
    }
    return res;
}