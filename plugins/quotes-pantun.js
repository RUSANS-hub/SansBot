let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `“${bucin.getRandom()}”`, author, ['Ngakak Abiez', `${usedPrefix}pantun`], m)

handler.help = ['pantun']
handler.tags = ['quotes']
handler.command = /^(pantun)$/i

export default handler


// https://jalantikus.com/tips/kata-kata-bucin/
const bucin = [
    "Kue ketan campur kelapa, Kamu tampan aku yang punya.",
    "Pohon benalu di pohon randu, Pulang malu, tak pulang rindu.",
    "Pohon randu tempat benalu, Jauh rindu, dekat malu.",
    "Buah berduri hujan rintik, Salah sendiri wajahnya cantik.",
    "Orang barat menuju hulu, Sungguh berat menahan rindu.",
    "Daun randu amat lebatnya, Kalau rindu bertemu obatnya.",
    "Minum jamu di atas tandu, Jarang ketemu, bikin rindu.",
    "Makan mentimun dekat batu, Duduk melamun karena rindu.",
    "Ada onta di gurun sahara, Rasa cinta makin membara.",
    "Anak kera main di rimba, Tak terkira rindu di dada.",
    "Kena tinta terbayang-bayang, Kalau cinta banyak-banyak sayang.",
    "Ikan pari panjang ekornya, Cinta sehari sayang selamanya.",
    "Terbang melayang turun ke belukar, Hati penyayang akhlaknya sabar.",
    "Kaki luka ikat dengan perban, Tanda cinta banyak berkorban.",
    "Burung elang ke tepian, Tanda sayang selalu pengertian.",
    "Air cuka warnanya merah, Jangan suka marah-marah.",
    "Anak itik makan petis, Sudah cantik kamu romantis.",
    "Beli paku beli jamu, Izinkan diriku jadi suamimu.",
    "Pergi ke kota pakai pedati, Jauh di mata dekat di hati.",
    "Kain batik di Kota Mekah, Neng cantik ayo nikah.",
    "Pergi ke desa melihat kuda, Putus cinta sejuta luka.",
    "Putus cinta sejuta luka, Aku kecewa melihat kau mendua.",
    "Melihat sapi sambil ngopi, ku di sini terdiam sepi.",
    "Air mendidih cepat berlalu, Hati pedih mengenang masa lalu.",
    "Rumah bagus tak berpenghuni, Cintaku tulus dia tak peduli.",
    "Beli susu ke Senopati, Janjimu palsu bikin sakit hati.",
    "Bayar hutang malah kena tilang, Akunya berjuang kamunya ngilang.",
    "Ikan hiu makan Awkarin, Yaudah ikhlasin.",
    "Satu tambah satu sama dengan dua, Aku cinta kamu tapi kamu cinta dia.",
    "Buah duku buah kemumu, Di sini aku menantimu.",
    "Buku cerita jumlahnya dua, Aku setia kamunya menduaAku setia kamunya mendua.",
    "Satu tambah satu sama dengan dua, Aku sama kamu cinta sampai tua.",
    "Dapet kado isinya tomat, Bodo amat!",
    "Di sini bingung, di sana linglung, ini pantun, pantun gak nyambung.",
    "Baju merah punya mang oding, Jangan marah.. hanya just kidding.",
    "Ikan hiu lagi berenang, Ya udah sih berenang aja gausah diganggu bang.",
    "Kura-kura dalam perahu, Pura-pura tidak tahu.",
    "Air cuka air cinta, Air cuka air cinta.",
    "Pergi ke Batang cabut gigi, Ditagih utang, malah pergi."
]
