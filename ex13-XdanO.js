//  NAMA: Hamzah Abdullah Mubarak

function xo(str) {
    var countX = 0
    var countO = 0
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x'){
            countX += 1
        }
        else if (str[i] === 'o'){
            countO += 1
        }
    }
    console.log(countO, countX);
    
    if (countO !== countX){
        return false
    }
    return true
}
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true