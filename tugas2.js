const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

// Validasi: Memastikan semua nilai diisi (isNaN artinya is not number)
if (isNaN(mtk) || isNaN(bahasaIndonesia) || isNaN(bahasaInggris) || isNaN(ipa)) {
    console.log("Semua nilai harus diisi");
  } else {
    // Menghitung rata-rata
    const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
  
    // Menentukan grade
    let grade;
    if (rataRata >= 90 && rataRata <= 100) {
      grade = "A";
    } else if (rataRata >= 80 && rataRata < 90) {
      grade = "B";
    } else if (rataRata >= 70 && rataRata < 80) {
      grade = "C";
    } else if (rataRata >= 60 && rataRata < 70) {
      grade = "D";
    } else if (rataRata >= 0 && rataRata < 60) {
      grade = "E";
    } else {
      console.log("Rata-rata nilai tidak valid");
    }
  
    // Menampilkan hasil
    if (grade) {
      console.log(`Rata-rata: ${rataRata}`);
      console.log(`Grade: ${grade}`);
    }
  }
  