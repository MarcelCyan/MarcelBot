const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    mentionedjid,
    connect,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const simple = require("./lib/simple.js")
const WAConnection = simple.WAConnection(_WAConnection)
const fs = require('fs')
const figlet = require('figlet')
const colors = require('colors');
const fetch = require('node-fetch')
const PhoneNumber = require('awesome-phonenumber');
const moment = require("moment-timezone");
const { getBuffer } = require('./lib/myfunc');
const { uncache, nocache } = require('./lib/loader')
const { color, bgcolor, brightcolor } = require("./lib/color");
const { forks, start, success, time, sleep, banner, waktoonyabro, calender, getGroupAdmins } = require('./lib/functions')
const welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
baterai = '63'
charging = 'Gak Dicas'
blocked = []
memek = {
"actioncall": "Maaf Otomatis Di Blokir Oleh Sistem, Tolong Jangan Telepon Nomor Ini, Saya Udah Rakit Khusus Dengan Penuh Keamanan Bot.\n\nSorry Automatically Blocked By The System, Please Don't Call This Number, I've Specially Assembled With Fully Bot Security.",
}

require('./main.js')
nocache('../main.js', module => console.log(color('[ WATCH ]', 'greenyellow'), color(`'${module}'`, 'white'), 'File is updated!'))
require('./Marcel.js')
nocache('../Marcel.js', module => console.log(color('[ WATCH ]', 'greenyellow'), color(`'${module}'`, 'white'), 'File is updated!'))

const starts = async (client = new WAConnection()) => {
   client.logger.level = 'warn' 
   client.version = [2, 2140, 12]
   console.log(color(figlet.textSync('Marcel Cyan', {font: 'Elite'}), 'yellow'))   
   client.browserDescription = ["Marcel Cyan", "SAFARI", "3.0"]
   client.on('qr', () => {
       console.log(color('[','white'), color('!','red'), color(']','white'), color('Scan bang'))
})
   fs.existsSync('./media/QrNya.json') && client.loadAuthInfo('./media/QrNya.json')
   client.on('connecting', () => {
       console.log(bgcolor(waktoonyabro, 'red'))
})
   client.on('open', () => {
       start('2', '\n');
})
   await client.connect({timeoutMs: 30*1000})
   fs.writeFileSync('./media/QrNya.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
       start('2',color("\nMenunggu Pesan Baru...\n       メ𝐶𝑒𝑙  ⁴̅⁰͍⁴̵𒉽", 'yellow'));

                                    
   client.on('ws-close', () => {
       client.logger.warn('Connected Timeout')
       console.log(color('Koneksi terputus, mencoba menghubungkan kembali..', 'yellow'))       
})

   client.on('close', async ({ reason, isReconnecting }) => {
       console.log(color('Terputus, Alasan :' + reason + '\nMencoba mengkoneksi ulang :' + isReconnecting, 'yellow'))
       if (!isReconnecting) {
       console.log(color('Connect To Phone Rejected and Shutting Down.', 'yellow'))}
})

   client.on('chat-update', async (message) => {
       require('./Marcel.js')(client, message)
}) 

   client.on('group-participants-update', async (anj) => {
        
       require('./media/group/group.js')(client, anj, welcome, color, getBuffer, getGroupAdmins)
    
})

   client.on('group-update', async (anu) => {
        
       require('./media/group/gcdetect.js')(client, anu, welcome, color, bgcolor, brightcolor)
    
})
				    				    	    	     
   client.on("message-delete", async (m) => {
        if (m.key.remoteJid == "status@broadcast") return;
        if (!m.key.fromMe && m.key.fromMe) return;              
        m.message = Object.keys(m.message)[0] === "ephemeralMessage" ? m.message.ephemeralMessage.message : m.message;
        const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");
        let d = new Date();
        let locale = "id";
        let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();
        let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
        Math.floor((d * 1 + gmt) / 84600000) % 5];
        let week = d.toLocaleDateString(locale, { weekday: "long" });
        let calender = d.toLocaleDateString(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
});
        const type = Object.keys(m.message)[0];
        client.sendMessage(
        m.key.remoteJid, `🔖𝐀𝐍𝐓𝐈𝐃𝐄𝐋𝐄𝐓𝐄🔖
      
*•🌹Nama :* @${m.participant.split("@")[0]}
*•🌹Waktu :* ${week} ${calender}
*•🌹Type :* ${type}`,
        MessageType.text,{ quoted: m.message, contextInfo: { mentionedJid: [m.participant]}});
        client.copyNForward(m.key.remoteJid, m.message);
})
   client.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
})
   	    global.batrei = global.batrei ? global.batrei : []
   	    
   client.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
})
  
   client.on('CB:action,,call', async json => {           
        let callerId = json[2][0][1].from;
        console.log("call dari "+ callerId)
        client.sendMessage(callerId, memek.actioncall, MessageType.text)
        await sleep(4000)        
        await client.blockUser(callerId, "add")
})      	                           
   client.on('CB:Blocklist', json => {
        if (blocked.length > 2) return
        for (let i of json[1].blocklist) {
        blocked.push(i.replace('c.us', 's.whatsapp.net'))
    }
})
}

starts()
