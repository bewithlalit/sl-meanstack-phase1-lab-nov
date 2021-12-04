const funadd = function add(a, b){
    return a+b;
}

const funsub = function sub(a, b){
    return a-b;
}

const funmul = function mul(a, b) {
    return a*b;
}

const fundiv = function div(a, b) {
    return a/b;
}

module.exports ={
    add: funadd,
    sub: funsub,
    mul: funmul,
    div: fundiv
}