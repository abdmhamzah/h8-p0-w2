//  NAMA: Hamzah Abdullah Mubarak

function konversiMenit(menit) {
    var det = menit % 60
    var men = (menit - det) / 60

    if (det < 10){
        det = '0' + det
    }
    
    return `${men}:${det}`
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00