import { StyleSheet, Text, View } from "react-native";

// // soal 1
export default function tugas1() {
  var hasil = [];
  for (let i = 1; i <= 20; i++) {
    hasil.push("Tiket antrean nomor: " + i);
  }
  console.log(hasil);

  return (
    <View>
      {hasil.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}

// soal 2
// export default function tugas2() {
//   var hasil = [];
//   for (let i = 5; i >= 1; i--) {
//     hasil.push(i.toString());
//   }
//   hasil.push("Roket Meluncur!");
//   console.log(hasil);

//   return (
//     <View>
//       {hasil.map((item, index) => (
//         <Text key={index}>{item}</Text>
//       ))}
//     </View>
//   );
// }

// soal 3
// export default function tugas3() {
//   var hasil = [];
//   var jumlah = 0;
//   for (var deret = 5; deret > 0; deret--) {
//     jumlah += deret;
//     hasil.push("Total poin saat ini: " + jumlah);
//   }
//   console.log(hasil);

//   return (
//     <View>
//       {hasil.map((item, index) => (
//         <Text key={index}>{item}</Text>
//       ))}
//     </View>
//   );
// }

// soal 4
// export default function tugas4() {
//   var hasil = [];
//   for (var deret = 2; deret < 10; deret += 2) {
//     hasil.push("Meja VIP nomor: " + deret);
//   }
//   console.log(hasil);

//   return (
//     <View>
//       {hasil.map((item, index) => (
//         <Text key={index}>{item}</Text>
//       ))}
//     </View>
//   );
// }

// soal 5
// export default function tugas5() {
//   var hasil = [];
//   for (let i = 0; i <= 6; i++) {
//     if (i === 3) {
//       hasil.push("Peringatan: Suhu Mesin Stabil!");
//     } else {
//       hasil.push(i.toString());
//     }
//   }
//   console.log(hasil);

//   return (
//     <View>
//       {hasil.map((item, index) => (
//         <Text key={index}>{item}</Text>
//       ))}
//     </View>
//   );
// }

// soal 6
// export default function tugas6() {
//   var hasil = [];
//   var flag = 1;
//   while (flag < 10) {
//     hasil.push("Memanggil nasabah antrean ke-" + flag);
//     flag++;
//   }
//   console.log(hasil);

//   return (
//     <View>
//       {hasil.map((item, index) => (
//         <Text key={index}>{item}</Text>
//       ))}
//     </View>
//   );
// }

// soal 7
// export default function tugas7() {
//   var hasil = [];
//   var jumlah = 0;
//   var deret = 4;
//   while (deret > 0) {
//     jumlah += deret;
//     deret--;
//     hasil.push("Jumlah tabungan saat ini: " + jumlah);
//   }
//   console.log(hasil);

//   return (
//     <View>
//       {hasil.map((item, index) => (
//         <Text key={index}>{item}</Text>
//       ))}
//     </View>
//   );
// }

// soal 8
// export default function tugas8() {
//   var hasil = [];
//   var i = 0;
//   while (i < 5) {
//     if (i === 3) {
//       hasil.push("Awas Halangan Dekat!");
//     } else {
//       hasil.push("Iterasi ke-" + i);
//     }
//     i++;
//   }
//   console.log(hasil);

//   return (
//     <View>
//       {hasil.map((item, index) => (
//         <Text key={index}>{item}</Text>
//       ))}
//     </View>
//   );
// }

// soal 9
// export default function tugas9() {
//   var hasil = [];
//   var flag = 1;
//   while (flag < 10) {
//     hasil.push("Iterasi ke-" + flag);
//     flag++; // perbaikan: tanpa ini akan infinite loop
//   }
//   console.log(hasil);

//   return (
//     <View>
//       <Text>Penjelasan: Kode asli tanpa flag++ akan Infinite Loop karena kondisi flag {"<"} 10 selalu true.</Text>
//       {hasil.map((item, index) => (
//         <Text key={index}>{item}</Text>
//       ))}
//     </View>
//   );
// }

// soal 10
// export default function tugas10() {
//   var hasil = [];
//   for (let nomorKupon = 1; nomorKupon <= 10; nomorKupon++) {
//     if (nomorKupon % 2 === 0) {
//       hasil.push("Kupon nomor " + nomorKupon + ": Kupon Genap");
//     } else {
//       hasil.push("Kupon nomor " + nomorKupon + ": Kupon Ganjil");
//     }
//   }
//   console.log(hasil);

//   return (
//     <View>
//       {hasil.map((item, index) => (
//         <Text key={index}>{item}</Text>
//       ))}
//     </View>
//   );
// }
