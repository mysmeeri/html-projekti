
function generoiSalasana(length) {
    
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    if (erikoismerkit == true) {
        characters = characters + ''
    }
    if (isotKirjaimet == true) {
        characters = characters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (numerot == true) {
        characters = characters + '0123456789'
    }
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(generoiSalasana(8));