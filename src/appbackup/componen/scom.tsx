// soal 1
// import {View, Text, Image} from "react-native";

// function UserCard({ name, status, imageUrl }) {
//     return (
//         <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
//         <Image source={imageUrl} style={{ width: 60, height: 60, borderRadius: 30, marginRight: 10 }} />
//         <View>
//             <Text style={{ fontWeight: "bold" }}>{name}</Text>
//             <Text style={{ color: "gray" }}>{status}</Text>
//         </View>
//         </View>
//     );
// }
// export default function scom() {
//     return (
//         <View style={{ padding: 20 }}>
//         <UserCard name="Sa'dan Robbany" status="Aktif" imageUrl={require('../assets/upn.jpg')} />
//         <UserCard name="Ardi" status="Alumni" imageUrl={require('../assets/tutwuri.png')} />
//         </View>
//     );
// }

// soal 2
// import { View, Text, TextInput, Pressable } from "react-native";

// export default function LoginForm() {
//     return (
//         <View style={{padding: 30}}>
//         <TextInput placeholder="Masukkan Email" style={{ borderWidth: 1, marginBottom: 10, padding: 7}} />
//         <TextInput placeholder="Masukkan Password" style={{ borderWidth: 1, marginBottom: 10, padding: 7}} secureTextEntry/>

//         <Pressable style={({ pressed }) => ({backgroundColor: pressed ? "#004a99" : "#0066cc",padding: 12,borderRadius: 8,alignItems:"center",})}>
//             <Text style={{ color: "white" }}>Login</Text>
//         </Pressable>
//         </View>
//     );
// }

// soal 3
// import { View, Text, FlatList } from "react-native";

// const products = Array.from({ length: 50 }, (_, index) => ({
//   id: (index + 1).toString(),
//   name: `Produk ${index + 1}`,
//   price: `Rp${(index + 1) * 10000}`,
// }));

// export default function ecommerce() {
//   return (
//     <View style={{ flex: 1, paddingTop: 40, paddingHorizontal: 15 }}>
//       <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
//         Katalog Produk
//       </Text>
//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View
//             style={{
//               backgroundColor: "#fff",
//               padding: 12,
//               borderRadius: 8,
//               marginBottom: 10,
//             }}
//           >
//             <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
//             <Text style={{ color: "gray" }}>{item.price}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }
