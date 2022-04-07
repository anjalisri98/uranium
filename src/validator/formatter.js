// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

let exe = function(){
    let a = "   functionUp   ";
    return(a.trim());

}
let changetoLowerCase = function(){
    let b = exe();
    return(b.toLowerCase());
}
let changeToUpperCase = function(){
     let c = exe();
     return(c.toUpperCase());
}

module.exports.exe= exe;
module.exports.changetoLowerCase = changetoLowerCase;
module.exports.changeToUpperCase = changeToUpperCase;
