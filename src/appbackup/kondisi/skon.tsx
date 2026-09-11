import { StyleSheet, Text, View } from "react-native";

// // // soal 1
// export default function skon(){
//     // deklarasi variabel
//     let nilai = 90;
//     let statusKelulusan = nilai >= 75 ? "Selamat, Anda Lulus!" : "Maaf, Anda Belum Lulus. ";

//     console.log(statusKelulusan);
//     console.log(nilai);

//     const outputMessage = `Nilai Ujian: ${nilai}
// Status: ${statusKelulusan}`;

//     return(
//         <View>
//             <Text>{outputMessage}</Text>
//         </View>
//     )
// }

// soal 2
// export default function skon(){
//     // deklarasi variabel
//     let suhuUdara = 34;
//     let peringatan;

//     if (suhuUdara >= 35) {
//         peringatan = "Peringatan: Cuaca sangat panas hari ini!";
//     } else {
//         peringatan = "Udara Normal";
//     }

//     console.log(suhuUdara);
//     console.log(peringatan);

//     const outputMessage = `Suhu udara: ${suhuUdara} ${peringatan}`;

//     return(
//         <View>
//             <Text>{outputMessage}</Text>
//         </View>
//     )
// }

// soal 3
// export default function skon() {
//   // deklarasi variabel
//   const isLoggedIn = true;
//   const namaUser = "admin_smkn10";
//   let outputMessage;

//   if (isLoggedIn) {
//     outputMessage = `Halo, ${namaUser}!`;
//   } else {
//     outputMessage = "Silakan Login Terlebih Dahulu";
//   }

//   console.log(outputMessage);

//   return (
//     <View>
//       <Text>{outputMessage}</Text>
//     </View>
//   );
// }

// soal 4
// export default function skon(){
//     // deklarasi variabel
//     let totalBelanja = 350000;
//     let keteranganDiskon;

//     if (totalBelanja > 500000) {
//         keteranganDiskon = "Anda Mendapat Diskon 20%!";
//     } else if (totalBelanja >= 200000) {
//         keteranganDiskon = "Anda Mendapat Diskon 10%!";
//     } else {
//         keteranganDiskon = "Belanja lebih banyak untuk dapat diskon!";
//     }

//     console.log(totalBelanja);
//     console.log(keteranganDiskon);

//     const outputMessage = `Total Belanja: ${totalBelanja}
// ${keteranganDiskon}`;

//     return(
//         <View>
//             <Text>{outputMessage}</Text>
//         </View>
//     )
// }

// soal 5
// export default function skon(){
//     // deklarasi variabel
//     let jamSekarang = 9;
//     let statusToko;

//     if (jamSekarang > 8 && jamSekarang < 17) {
//         statusToko = "Toko Buka";
//     } else {
//         statusToko = "Toko Tutup";
//     }

//     console.log(jamSekarang);
//     console.log(statusToko);

//     const outputMessage = `Jam Sekarang: ${jamSekarang}
// Status: ${statusToko}`;

//     return(
//         <View>
//             <Text>{outputMessage}</Text>
//         </View>
//     )
// }

// soal 6
// export default function skon(){
//     // deklarasi variabel
//     let isDarkMode = false;

//     let backgroundColor = isDarkMode ? "#121212" : "#FFFFFF";
//     let textColor = isDarkMode ? "white" : "black";

//     console.log(isDarkMode);
//     console.log(backgroundColor, textColor);

//     const outputMessage = `Mode: ${isDarkMode ? "Dark Mode" : "Light Mode"}`;

//     return(
//         <View style={{ backgroundColor: backgroundColor, flex: 1, padding: 20 }}>
//             <Text style={{ color: textColor }}>{outputMessage}</Text>
//         </View>
//     )
// }

// soal 7
// export default function skon(){
//     // deklarasi variabel
//     let password = "abc12";

//     let errorMessage = password.length < 6 ? "Password terlalu pendek (minimal 6 karakter)" : "";

//     console.log(password);
//     console.log(errorMessage);

//     const outputMessage = `Password: ${password}
// ${errorMessage}`;

//     return(
//         <View>
//             <Text>{outputMessage}</Text>
//             {password.length < 6 && (
//                 <Text style={{ color: "red" }}>Password terlalu pendek (minimal 6 karakter)</Text>
//             )}
//         </View>
//     )
// }

// soal 8
// export default function skon(){
//     // deklarasi variabel
//     let jenisKendaraan = "Motor";
//     let tarifParkir;

//     if (jenisKendaraan === "Mobil") {
//         tarifParkir = "Tarif Parkir: Rp 5.000 / jam";
//     } else if (jenisKendaraan === "Motor") {
//         tarifParkir = "Tarif Parkir: Rp 2.000 / jam";
//     } else {
//         tarifParkir = "Jenis kendaraan tidak dikenali";
//     }

//     console.log(jenisKendaraan);
//     console.log(tarifParkir);

//     const outputMessage = `Jenis Kendaraan: ${jenisKendaraan}
// ${tarifParkir}`;

//     return(
//         <View>
//             <Text>{outputMessage}</Text>
//         </View>
//     )
// }

// soal 9
// export default function skon(){
//     // deklarasi variabel
//     let stokBarang = 10;
//     let statusStok;
//     let warnaTeks;

//     if (stokBarang > 10) {
//         statusStok = "Stok Tersedia";
//         warnaTeks = "green";
//     } else if (stokBarang >= 1 && stokBarang <= 10) {
//         statusStok = "Stok Terbatas! Segera Beli";
//         warnaTeks = "orange";
//     } else if (stokBarang === 0) {
//         statusStok = "Stok Habis";
//         warnaTeks = "red";
//     }

//     console.log(stokBarang);
//     console.log(statusStok);

//     const outputMessage = `Stok Barang: ${stokBarang}
// ${statusStok}`;

//     return(
//         <View>
//             <Text style={{ color: warnaTeks }}>{outputMessage}</Text>
//         </View>
//     )
// }

// soal 10
// export default function skon(){
//     // deklarasi variabel
//     let usiaPenonton = 13;
//     let kategoriFilm;

//     if (usiaPenonton < 13) {
//         kategoriFilm = "Kategori: Semua Umur (SU)";
//     } else if (usiaPenonton >= 13 && usiaPenonton <= 17) {
//         kategoriFilm = "Kategori: Remaja (R)";
//     } else {
//         kategoriFilm = "Kategori: Dewasa (D)";
//     }

//     console.log(usiaPenonton);
//     console.log(kategoriFilm);

//     const outputMessage = `Usia Penonton: ${usiaPenonton}
// ${kategoriFilm}`;

//     return(
//         <View>
//             <Text>{outputMessage}</Text>
//         </View>
//     )
// }
