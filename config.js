let fs = require('fs')
let chalk = require('chalk')
global.owner = ['6285807231447', '6285777451314'] // Nomor Owner
global.autoread = true // false untuk menonaktifkan autoread, true untuk menyalakan autoread
global.selfmode = false // false = Mode Publik, true = Mode Self
global.thumb = './thumb/itsuki.jpg'
global.fakereplyt = '*FAR-BOTz*' // Teks Untuk Fake Reply
global.mess = {
group : {
welcome : `- š š š š š š š  š š š š š š š -\n\nšš¦š­š¢š®š¢šµ šš¢šµš¢šÆšØ @user šš»\nš„šŖ šš³š°š¶š±: @subject\nš”š¢š§š: Semoga Betah ya di Group Ini!`, // Teks Untuk Welcome
bye : `- š š š š š š š  š š š š š š š -\n\nšš¦š­š¢š®š¢šµ šš¢š­š¢šÆ @user\nš”š¢š§š: Semoga ini Jalan Terbaikmu Meninggalkan Group`, // Teks Untuk Bye
promote: 'š š š š š š š - š š š š š š š š\n @user Sekarang adalah Admin!', // Teks Untuk Detect Promote
demote: 'š š š š š š - š š š š š š š š\n @user Sekarang bukan Admin!' // Teks Untuk Detect Demote
},
error : '[ ! ] Maaf, telah Terjadi kesalahan dalam System BOTz!', // Error
success: '[ ā ] Mantap! Permintaan Anda telah Sukses kami Jalankan...' // Sukses
}
global.server = false // true = Manyalakan server Localhost, false = menonaktifkan server Localhost
global.prefix = '.' // Skip, Ga Terlalu Berguna
global.author = 'ā¤ļø' // Nama Author Sticker
global.packname = 'FarrellAR' // Nama Packname Sticker


// LIST APIKEY

global.APIs = { // API Prefix
  nrtm: 'https://nurutomo.herokuapp.com',
  zeks: 'https://api.zeks.me',
  mel: 'https://melcanz.com'
}

global.APIKeys = { // APIKey Here
  'https://api.zeks.me': 'rikkabotwa', // Free Ampikey :v
  'https://melcanz.com': '22N2T9eK', // Buy Apikey On https://wa.me/6287755080455 Or Register On https://melcanz.com
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
