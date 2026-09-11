import { Stylesheet, Text, View } from "react-native";

// soal 1
// export default function svar() {
  //deklarasi variabel
//   const firstname = "Budi";
//   const lastname = "Santoso";
//   let isAktif = true;

//   const outputMessage = `Akun atas nama ${firstname} ${lastname} status aktif:${isAktif}`;

//   console.log(outputMessage);

//   return (
//     <View>
//       <Text>{outputMessage}</Text>
//     </View>
//   );
// }



// // soal 2
//   export default function svar(){
//     // deklarasi variabel
//     const rawUsername = " admin_smkn10 ";
//     // membersihkan spasi
//     const hilangspasi = rawUsername.trim();
//     // menghitung karakter
//     const hitung = hilangspasi.length;

//     console.log(hilangspasi);
//     console.log(hitung);

//     const outputMessage = `Username bersih:"${hilangspasi}" Panjang karakter:${hitung}`;

//     return(
//       <View>
//         <Text>{outputMessage}</Text>
//       </View>
//     )
// }

// // soal 3
// export default function svar(){
//   // deklarasi variabel
//   let komentar = "Wah, aplikasi ini sangat lambat dan buruk!";
//   // mencari buruk
//   const cari = komentar.indexOf("buruk");
//   // ambil potongan kalimat
//   const ambil = komentar.substr(0,19);

//   console.log(cari);
//   console.log(ambil);

//   const outputMessage = `mencari kata "buruk":${cari} dan Kalimat 0 sampai 19:${ambil}`;

//   return(
//     <View>
//       <Text>{outputMessage}</Text>
//     </View>
//   )
// }

// soal 4
// export default function svar(){
//   // deklarasi variabel
//   const string1 = "diskon";
//   const string2 = "spesial150";
//   // menggabungkan kata
//   const gabung = string1.concat(string2);
//   // kapital
//   const kapital = gabung.toUpperCase();
//   console.log(gabung);
//   console.log(kapital);

//   const outputMessage = `${gabung,kapital}`;

//   return(
//     <View>
//       <Text>{outputMessage}</Text>
//     </View>
//   )
// }

// soal 5
// export default function svar(){
//   // deklarasi variabel
//   let hargastr = 150000.50;
//   let stokstr = 25;
//   // konversi string
//   let konversi = parseFloat(hargastr);
//   // diubah ke integer
//   let stok = parseInt(stokstr);
//   // kalikan harga dan stok
//   let perkalian = konversi * stok;

//   console.log(konversi);
//   console.log(stok);
//   console.log(perkalian);

//   const outputMessage = `hasil konversi: ${konversi} stok: ${stok} total harga: ${perkalian}`;

//   return(
//     <View>
//       <Text>{outputMessage}</Text>
//     </View>
//   )
// }

// soal 6
// export default function svar() {
//   // deklarasi variabel
//   let totalbelanja = 250000;
//   // diskon langsung
//   let diskon = totalbelanja -= 50000;
//   // pajak totalharga
//   let pajak = diskon * 10 / 100;

//   console.log(diskon);
//   console.log(pajak);

//   const outputMessage = `${diskon} terkena pajak menjadi ${pajak}`;

//   return(
//     <View>
//       <Text>{outputMessage}</Text>
//     </View>
//   )
// }

// soal 7
// export default function svar(){
//   // deklarasi variabel
//   let inputUsia = "17";
//   let syaratUsia = 17;
//   // cek equal
//   var equal = inputUsia === syaratUsia;
//   var lebihdari = inputUsia >= syaratUsia;
//   console.log(lebihdari);
//   console.log(equal);

//   const outputMessage = `Strict Equal: ${equal} Lebih Dari: ${lebihdari} karena berbeda tipe data`;

//   return(
//     <View>
//       <Text>{outputMessage}</Text>
//     </View>
//   )
// }

// soal 8
// export default function svar() {
//   // Deklarasi variabel boolean
//   let isPasswordCorrect = true;
//   let isEmailVerified = false;

//   // Mengecek apakah boleh masuk dashboard
//   let masukDashboard = isPasswordCorrect && isEmailVerified;

//   console.log(masukDashboard);

//   const outputMessage = `Password Benar: ${isPasswordCorrect}
// Email Terverifikasi: ${isEmailVerified}
// Masuk Dashboard: ${masukDashboard}`;

//   return (
//     <View>
//       <Text>{outputMessage}</Text>
//     </View>
//   );
// }

// soal 9

// export default function svar() {
//   // Deklarasi variabel
//   let isNilaiTinggi = true;
//   let isJuaraLomba = false;

//   // Operator OR (||)
//   let layakBeasiswa = isNilaiTinggi || isJuaraLomba;

//   console.log(layakBeasiswa);

//   const outputMessage = `Nilai Tinggi: ${isNilaiTinggi}
// Juara Lomba: ${isJuaraLomba}
// Layak Beasiswa: ${layakBeasiswa}`;

//   return (
//     <View>
//       <Text>{outputMessage}</Text>
//     </View>
//   );
// }

// soal 10
// export default function svar() {
//   let member = true;
//   let totalHarga = 200000;

//   if (member === true) {
//     let diskon = 0.2;
//     let totalBayar = totalHarga - (totalHarga * diskon);

//     console.log("Total Bayar:", totalBayar);
//   }

//   console.log(diskon); // Error
//   console.log(totalBayar); // Error

//   const outputMessage =
//     "Lihat hasil di Console. Variabel 'diskon' dan 'totalBayar' tidak bisa diakses di luar blok if.";

//   return (
//     <View>
//       <Text>{outputMessage}</Text>
//     </View>
//   );
// }
// export default function svar() {
//   let member = true;
//   let totalHarga = 200000;

//   if (member === true) {
//     var diskon = 0.2;
//     var totalBayar = totalHarga - (totalHarga * diskon);
//   }

//   console.log("Diskon:", diskon);
//   console.log("Total Bayar:", totalBayar);

//   const outputMessage = `Diskon: ${diskon}
// Total Bayar: ${totalBayar}`;

//   return (
//     <View>
//       <Text>{outputMessage}</Text>
//     </View>
//   );
// }
