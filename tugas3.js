const printSegitiga = 5;

// Validasi: Pastikan input adalah angka positif
if (typeof printSegitiga === 'number') {
  for (let i = printSegitiga; i >= 1; i--) {
    let output = '';
    for (let j = 1; j <= i; j++) {
      output += j + ' ';
    }
    console.log(output);
  }
} else {
  console.log("data harus number");
}
