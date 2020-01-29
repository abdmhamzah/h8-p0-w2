//  NAMA: Hamzah Abdullah Mubarak

// 1. Melakukan Looping Menggunakan While

console.log('Looping Menggunakan While');
console.log('LOOPING PERTAMA');
var x = 0
while (x < 20){
    x += 2
    console.log(`${x} - I Love Coding`);
}

console.log('LOOPING KEDUA');
var y = 20
while (y > 0){
    console.log(`${y} - I Will Become Fullstack Developer`);
    y -= 2
}


// 2. Melakukan Looping Menggunakan For

console.log('Looping Menggunakan For');
console.log('LOOPING PERTAMA');
for (var i = 1; i <= 20; i++) {
    console.log(`${i} - I Love Coding`);
}
console.log('LOOPING KEDUA');
for (var i = 20; i >= 1; i--) {
    console.log(`${i} - I Will Become Fullstack Developer`);
}


// 3. Angka Ganjil dan Genap

console.log('contoh - ganjil genap');
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0){
        console.log('GANJIL');
    }
    if (i % 2 == 0){
        console.log('GENAP');
    }
}

console.log('contoh - untuk pertambahan counter 2');
for (var i = 1; i <= 100; i += 2) {
    if (i % 3 == 0){
        console.log(`${i} KELIPATAN 3`);
    }
}

console.log('contoh - untuk pertambahan counter 5');
for (var i = 1; i <= 100; i += 5) {
    if (i % 6 == 0){
        console.log(`${i} KELIPATAN 6`);
    }
}

console.log('contoh - untuk pertambahan counter 9');
for (var i = 1; i <= 100; i += 9) {
    if (i % 10 == 0){
        console.log(`${i} KELIPATAN 10`);
    }
}