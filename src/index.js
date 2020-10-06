module.exports = function check(str, bracketsConfig) {
    let stack = new Array();
    let cfg = new Map(bracketsConfig);

    for (let i = 0; i < str.length; i++) {
        let top = stack[stack.length - 1];
        let current = str[i];
        let isPairOfDifferentBrackets = cfg.has(current) && current != cfg.get(current);
        let isPairOfIdenticalBrackets = cfg.has(current) && current == cfg.get(current);

        if (isPairOfDifferentBrackets || (isPairOfIdenticalBrackets && top != current)) {
            stack.push(current);
        } else if (current != cfg.get(top)) {
            return false;
        }else{
            stack.pop();
        }
        
    }
    return stack.length == 0;
}
