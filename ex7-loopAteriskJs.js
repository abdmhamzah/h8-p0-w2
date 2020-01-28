//  NAMA: Hamzah Abdullah Mubarak

// 1. Menyusun Barisan Bintang

console.log('Barisan Bintang');
var rows1 = 5;
for (let i = 0; i < rows1; i++) {
    console.log('*');
}


// 2. Menyusun Barisan Bintang Dengan Nested Looping

console.log('Barisan Bintang Dengan Nested Looping');
var rows2 = 5
for (let i = 0; i < rows2; i++) {
    var hasil2 = ''
    for (let j = 0; j < 5; j++) {
        hasil2 += '*'
    }
    console.log(hasil2);
}


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

console.log('Barisan Tangga Bintang Dengan Nested Looping');
var rows3 = 5
for (let i = 0; i < rows3; i++) {
    var hasil3 = ''
    for (let j = 0; j <= i; j++) {
        hasil3 += '*'
    }
    console.log(hasil3);
}