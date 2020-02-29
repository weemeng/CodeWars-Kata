function validParentheses(parens){
    let rollingVal = 0;
    for (let i = 0; i < parens.length && rollingVal >= 0; i++) {
        rollingVal += (parens[i] == '(') ? 1 : -1;
    }
    return rollingVal == 0 ? true : false;
}

module.exports = validParentheses