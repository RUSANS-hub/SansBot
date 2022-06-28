let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `“${bucin.getRandom()}”`, author, ['Tch.. Mendokuse', `${usedPrefix}anime`], m)

handler.help = ['anime']
handler.tags = ['quotes']
handler.command = /^(anime)$/i

export default handler


// https://jalantikus.com/tips/kata-kata-bucin/
const bucin = [
    "Kalau itu adalah kenangan yang berarti, jangan dilupakan. Sebab jika manusia mati, mereka hanya bisa hidup dalam kenangan orang lain.",
    "Bagaimana kamu bisa bergerak maju kalau kamu terus menyesali masa lalu?",
    "Perbedaan antara pemula dan master adalah bahwa master telah gagal lebih dari yang telah dicoba pemula.",
    "Pernah berjuang untuk sebuah senyuman, hingga akhirnya tinggal kenangan. Pernah menjadi bayangan, lalu hilang terbawa angan.",
    "Kita harus menjalani hidup kita sepenuhnya. Kamu tidak pernah tahu, kita mungkin sudah mati besok.",
    "Suatu saat akan datang hari di mana semua akan menjadi kenangan.",
    "Air mata palsu bisa menyakiti orang lain. Tapi, senyuman palsu hanya akan menyakiti dirimu sendiri.",
    "Lebih baik menerima kejujuran yang pahit, dari pada kebohongan yang manis.",
    "Kegagalan seorang pria yang paling sulit yaitu ketika dia gagal untuk menghentikan air mata seorang wanita.",
    "Jangan menyerah. Hal memalukan bukanlah ketika kau jatuh, tetapi ketika kau tidak mau bangkit lagi.",
    "Untuk mendapatkan kesuksesan, keberanianmu harus lebih besar daripada ketakutanmu.",
    "Jangan khawatirkan apa yang dipikirkan orang lain. Tegakkan kepalamu dan melangkahlah ke depan.",
    "Ketakutan bukanlah kejahatan. Itu memberi tahu apa kelemahanmu. Dan begitu tahu kelemahanmu, kamu bisa menjadi lebih kuat.",
    "Tuhan tak akan menempatkan kita di sini melalui derita demi derita bila Ia tak yakin kita bisa melaluinya.",
    "Ketika kau bekerja keras dan gagal, penyesalan itu akan cepat berlalu. Berbeda dengan penyesalan ketika tidak berani mencoba.",
    "Mula-mula, kau harus mengubah dirimu sendiri atau tidak akan ada yang berubah untukmu.",
    "Kalau kau ingin menangis karena gagal, berlatihlah lebih keras lagi sehingga kau pantas menangis ketika kau gagal.",
    "Banyak orang gagal karena mereka tidak memahami usaha yang diperlukan untuk menjadi sukses.",
    "Kita harus mensyukuri apa yang kita punya saat ini karena mungkin orang lain belum tentu mempunyainya.",
    "Kekuatan sejati dari umat manusia adalah bahwa kita memiliki kuasa penuh untuk mengubah diri kita sendiri.",
    "Hidup bukanlah permainan keberuntungan. Jika kau ingin menang, kau harus bekerja keras.",
    "Cinta membuat orang menjadi kuat dan cinta itu juga yang dapat membuat orang menjadi lemah.",
    "Jika kau seorang pria, buatlah wanita yang kau cintai jatuh cinta denganmu apa pun yang terjadi!",
    "Kamu percaya padaku dan aku akan percaya padamu.",
    "Jika akhirnya bukan aku yang kau pilih setidaknya aku sudah pernah ada di hatimu walaupun sementara.",
    "Wanita itu sangat indah, satu senyuman mereka aja sudah menjadi sebuah keajaiban.",
    "Ada Teori bahwa hati adalah yang menentukan kecepatan proses berpikir manusia.",
    "Tidak peduli udah berapa banyak hubungan yang kita miliki, kita semua nanti akan sendirian.",
    "Aku tidak suka hubungan yang tidak jelas.",
    "Kita banyak membuang waktu mencari kekasih yang sempurna dari pada menciptakan cinta yang sempurna.",
    "Keluargamu adalah pahlawanmu.",
    "Ini adalah hadiah terbaik yang aku dapat berikan ke kamu sekarang, sebuah hadiah tanpa bentuk yang disebut kenangan.",
    "Manusia pasti akan berubah selama mereka hidup, belajarlah untuk menghargai dirimu sendiri.",
    "Aku mulai menyukaimu karena kamu sering berada di dekatku.",
    "Mengkhianati temanmu merupakan hal yang akan kau sesali sepanjang hidupmu.",
    "Seseorang yang gagal menolong temannya tidak pantas menjadi hokage.",
    "Aku pernah kehilangan semuanya. Aku tak mau lagi melihat teman yang berharga bagiku tewas di hadapanku.",
    "Aku hanya ingin melindungi mereka, walau harus menjalani penderitaan seperti apapun.",
    "Shinobi yang melanggar aturan memang disebut sampah. Tetapi Shinobi yang meninggalkan sahabatnya lebih rendah dari sampah.",
    "Kau harus menilai temanmu dengan sudut pandang yang lebih bijaksana.",
    "Selama manusia ada, benci juga akan ada.",
    "Penderitaan membuatku semakin kuat dan berkembang.",
    "Seseorang yang tidak tahu apa itu rasa sakit, tidak akan tahu apa itu kedamaian sejati.",
    "Sampai matipun aku akan mengejar cita-citaku.",
    "Jika kau ingin orang-orang percaya pada hal yang ingin kau lakukan, hanya ada satu hal yang harus kamu lakukan! jangan hanya mengatakannya saja tapi lakukan dengan tindakanmu.",
    "Aku pasti akan melakukan apa yang telah aku tetapkan.",
    "Aku tidak peduli, walaupun aku harus mati untuk mengejar impianku.",
    "Apakah kekalahan membuktikan kalian itu lemah? Bukankah bagi kalian kalah lebih terdengar seperti ujian? Apa kalian bisa berdiri dan berjalan lagi setelah kalian terjatuh? Jika kalian tetap duduk seperti itu, itu membuktikan bahwa kalian lemah.",
    "Impian Manusia tidak akan pernah habis.",
    "Kalau kita tidak pernah berjuang sampai akhir, kita tidak akan pernah melihatnya walau ada di depan mata.",
    "Kita tidak akan pernah bisa menang, bila kita tidak percaya bahwa kita bisa.",
    "Jika kamu percaya dengan impianmu, aku akan membuktikan padamu bahwa kamu bisa meraih impianmu hanya dengan bekerja keras.",
    "Terserah dengan apa yang kau punya, tapi kalau cuma berdiam diri, sama halnya kau tidak punya mimpi.",
    "Aku tidak khawatir akan jadi apa aku di masa depan nanti, apa aku akan berhasil atau gagal. Tapi yang pasti apa yang aku lakukan sekarang akan membentukku di masa depan nanti.",
    "Jika kau menungguku untuk menyerah, kau akan menungguku selamanya.",
    "Menang dan kalah yang membuatmu lebih dewasa, menangislah dan bangkitlah.",
    "Yang diperlukan seorang shinobi bukanlah banyak jutsu yang dikuasainya, namun sebuah tekad pantang menyerah.",
    "Jangan menyerah! Tidaklah memalukan untuk gagal. Yang memalukan adalah tak bisa bangkit lagi!",
    "Ada orang yang jauh lebih kuat dan pernah mengalahkanku. Dia orang yang tak pernah putus asa.",
    "Hidup itu harus memilih, disaat kau tidak memilih, Itulah Pilihanmu.",
    "Siapapun pasti pernah melakukan kesalahan. Yang terpenting adalah mengambil pelajaran dari kesalahanmu.",
    "Jalan yang paling menjanjikan untuk sukses adalah mencoba satu kali lagi.",
    "Jangan pernah meremehkan diri sendiri, karena diri sendiri ada kelebihan tersendiri.",
    "Kamu tidak akan mampu menghentikan orang yang sedang jatuh cinta kepada orang yang dia cintai.",
    "Kehidupan normal? apa itu?",
    "Jangan percaya kalau setiap yang berkaca mata itu pintar!",
    "Pornografi dapat menyelamatkan dunia!"
]
