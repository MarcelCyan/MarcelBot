const { 
      WAConnection, 
      MessageType, 
      Mimetype

} = require('@adiwajshing/baileys')
const qrcode = require('qrcode')
const fs = require('fs')
listjadibot = [];

const jadibot = async(reply,client,id) => {
	conn = new WAConnection()
    conn.logger.level = 'warn'
    conn.version = [2, 2140, 12]
    conn.browserDescription = ["Broh Numpang Ya", "SAFARI", "3.0"]
    conn.on('qr', async qr => {
  	let bot = await qrcode.toDataURL(qr, { scale: 8 })
    let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
   	bot = await client.sendMessage(id,buffer,MessageType.image,{caption:'Scan QR ini untuk jadi bot sementara!\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \n\nQR Expired dalam 20 detik'})
    setTimeout(() => {
   	client.deleteMessage(id, bot.key)},30000)
})
    conn.on('connecting', () => {
})
    conn.on('open', () => {
    	reply(`*Berhasil Tersambung Dengan WhatsApp Kamu♥️*\n\n${JSON.stringify(conn.user,null,2)}`)
})
    await conn.connect({timeoutMs: 30 * 1000})
        listjadibot.push(conn.user)
    
    conn.on('chat-update', async (message) => {
        require('../index.js')(conn, message)
})
}

    const stopjadibot = (reply) => {
    	conn = new WAConnection();
	    conn.close()
	    reply('Sukses Stop jadibot')
}

module.exports = {
	jadibot,
	stopjadibot,
	listjadibot
}