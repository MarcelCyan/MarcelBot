// Fitur Dikit?? Tambahin Sendiri🗿
const {
	 WAConnection,
	 MessageType,
	 Presence,
	 MessageOptions,
	 Mimetype,
	 WALocationMessage,
	 WA_MESSAGE_STUB_TYPES,
	 WA_DEFAULT_EPHEMERAL,
	 ReconnectMode,
	 ProxyAgent,
	 ChatModification,
	 GroupSettingChange,
	 waChatKey,
	 mentionedJid,
	 processTime,
} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const gis = require('g-i-s')
const got = require("got")
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const hx = require('hxz-api')
const crypto = require('crypto')
const ggs = require('google-it')
const yts = require( 'yt-search')
const request = require('request')
const { EmojiAPI } = require('emoji-api');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const brainly = require('brainly-scraper')
const emoji = new EmojiAPI()
const { exec, spawn } = require('child_process')
const { sleep } = require('./lib/offline')
const { mess } = require('./media/mess/mess')
const { fetchJosn, fetchText, createExif } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { pinterest } = require('./lib/pinterest.js')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot');
const { pShadow, pRomantic, pSmoke, pBurnPapper, pNaruto, pLoveMsg, pMsgGrass, pGlitch, pDoubleHeart, pCoffeCup, pLoveText, pButterfly, pWanted } = require('./lib/photooxy')
const { calender, week, weton, jmn, waktoonyabro, waktoo, ucapanWaktu } = require("./lib/ucapanWaktu");
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { mediafireDl } = require('./lib/mediafire.js')
const { lirikLagu } = require('./lib/lirik.js')
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js');
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl');
const { TiktokDownloader } = require("./lib/gif.js");
const fakeimage = fs.readFileSync ('./media/menu2.jpeg')
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game")
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
const Exif = require('./lib/exif')
const exif = new Exif()
ky_ttt = []

//Database
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'));
const pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))

//Setting
banChats = true
owner = '6283803320107'
botname = 'MarcelBot'
ownerName = 'MarcelCyan'
fake = 'ᴹᴿ᭄Marcel⁴̅⁰͍⁴̵〆🌹'
footerr = 'ᴹᴿ᭄Marcel⁴̅⁰͍⁴̵〆🌹' 
dapuhuy = 'FixMood' 

module.exports = client = async (client, mek) => {
    try {        
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
       	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format("HH:mm:ss");
		const timeWita = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeWit = moment().tz('Asia/Jayapura').format("HH:mm:ss");		
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = body.substring(body.indexOf(' ') + 1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const txt = mek.message.conversation
		const botNumber = client.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6283803320107@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		const sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await client.chats.all()
		const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'    
        idttt = []
   	    players1 = []
   	    players2 = []
   	    gilir = []
   	    for (let t of ky_ttt){
   	    idttt.push(t.id)
   	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)}
        const isTTT = isGroup ? idttt.includes(from) : false
        isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false	            
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isUser = pendaftar.includes(sender)
		const isMybot = isOwner || mek.key.fromMe		
		const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
	    const floorangka = (angka) => {
            return Math.floor(angka)
        }                        
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        function monospace(string) {

            return '' + string + ''

        }                 
        const reply = (teks) => {
            client.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            client.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : client.sendMessage(from, teks.trim(), extendedText, { quoted: ftroli, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		const runtime = function (seconds) {
            seconds = Number(seconds);
            var d = Math.floor(seconds / (3600 * 24));
            var h = Math.floor((seconds % (3600 * 24)) / 3600);
            var m = Math.floor((seconds % 3600) / 60);
            var s = Math.floor(seconds % 60);
            var dDisplay = d > 0 ? d + (d == 1 ? "hari, " : "hari, ") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? "jam, " : "jam, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? "menit, " : "menit, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? "detik" : "detik") : "";
            return dDisplay + hDisplay + mDisplay + sDisplay

        }        
        const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
            contentText: context,
            footerText: fortext,
            buttons: but,
            headerType: 1
        }
            client.sendMessage(from, buttonMessages, MessageType.buttonsMessage, options)
        }
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await client.prepareMessage(from, img, image)
            buttonMessagesI = {
            imageMessage: jadinya.message.imageMessage,
            contentText: context,
            footerText: fortext,
            buttons: but,
            headerType: 4
        }
            client.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, { quoted: mek})
        }
        const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
            kma = vid1
            mhan = await client.prepareMessage(from, kma, video)
            const buttonMessages = {
            videoMessage: mhan.message.videoMessage,
            contentText: text1,
            footerText: desc1,
            buttons: but,
            headerType: 5
        }
            client.sendMessage(from, buttonMessages, MessageType.buttonsMessage, { quoted: mek})
        }         	
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }                
        const fakestatus = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        "participant":"0@s.whatsapp.net", ...(from ? { "remoteJid": "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                           "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                           "mimetype": "image/jpeg",
                           "caption": fake,
                           "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                           "fileLength": "28777",
                           "height": 1080,
                           "width": 1079,
                           "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                           "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                           "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                           "mediaKeyTimestamp": "1610993486",
                           "jpegThumbnail": fakeimage,
                           "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":1,"isForwarded":true},sendEphemeral: true
            })
        } 
        const fakethumb = (teks, yes) => {
            client.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./media/menu2.jpeg'),quoted:mek,caption:yes})
        }                                 
        const ftroli = { 
            key: { fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fakeimage, surface: 200, message: fake, orderTitle: 'MarcelGz', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true

        }                                                                                
        const fakegroup = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        "participant":"0@s.whatsapp.net", ...(from ? { "remoteJid": "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/menu1.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }        
        const sendKontak = (from, nomor, nama, org = "") => {
   	    const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	    client.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}                     
        const sendStickerFromUrl = async(to, url) => {
        var names = Date.now() / 10000;
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback)})
}
        download(url, './stik' + names + '.png', async function () {
        console.log('selesai');
        let filess = './stik' + names + '.png'
        let asw = './stik' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
        let media = fs.readFileSync(asw)
        client.sendMessage(to, media, MessageType.sticker,{quoted:mek})
        fs.unlinkSync(filess)
        fs.unlinkSync(asw)})})
}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
        if(mids.length > 0){
        text = normalizeMention(to, text, mids)
}
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        mime = res.headers['content-type']
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback)})
}
        download(url, filename, async function () {
        console.log('done');
        let media = fs.readFileSync(filename)
        let type = mime.split("/")[0]+"Message"
        if(mime === "image/gif"){
        type = MessageType.video
        mime = Mimetype.gif
}
        if(mime.split("/")[0] === "audio"){
        mime = Mimetype.mp4Audio
}
        client.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})                    
        fs.unlinkSync(filename)})
}      
        function addMetadata(packname, author) {
        if (!packname) packname = 'Jangan Di Ambil';
        if (!author) author = 'Punya Saya';
        author = author.replace(/[^a-zA-Z0-9]/g, '');
        let name = `${author}_${packname}`
        if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
        const json = {
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
}
        const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
        const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
        let len = JSON.stringify(json).length
        let last
        if (len > 256) {
        len = len - 256
        bytes.unshift(0x01)
        } else {
        bytes.unshift(0x00)
        }
        if (len < 16) {
        last = len.toString(16)
        last = "0" + len
        } else {
        last = len.toString(16)
        }
        const buf2 = Buffer.from(last, "hex")
        const buf3 = Buffer.from(bytes)
        const buf4 = Buffer.from(JSON.stringify(json))
        const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
        fs.writeFile(`./${name}.exif`, buffer, (err) => {
        return `./${name}.exif`})	
}
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins && !mek.key.fromMe && isPremium){
        if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
        fakestatus(`*──「 GROUP LINK DETECTOR 」──*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
        client.groupRemove(from, [sender])}
}
        if (isCmd && !isUser){
        pendaftar.push(sender)
        fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
}
        client.chatRead(from, "read")
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        if (isCmd && !isGroup) { 
        console.log(color('[ CMD PRIVATE ]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'white'), color(`${command} [${args.length}]`, 'cyan'))}
        if (isCmd && isGroup) {
        console.log(color('[ CMD GROUP ]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'white'), color(`${command} [${args.length}]`, 'cyan'), color('from', 'greenyellow'), color(`${pushname}`, 'yellow'), color('in', 'greenyellow'), color(`${groupName}`, 'gold'))}  
        if (!mek.key.fromMe && !isOwner && banChats === true) return                           
        switch (command) { 
    case 'tesmenu':
            if(!isOwner) return fakestatus(mess.only.owner)      
            menunya = `*${ucapanWaktu} @${sender.split("@")[0]}* 👋`
            buttons = [{buttonId: `${prefix}owner`, buttonText: {displayText: '👤 CONTACT OWNER'}, type: 1},{buttonId: `${prefix}sc`, buttonText: {displayText: '📄 SCRIPT BOT'}, type: 1}]
            imageMsg = (await client.prepareMessageMedia(fakeimage, 'imageMessage', {thumbnail: fakeimage})).imageMessage                                                                
            buttonsMessage = {
            contentText: `${menunya}`,           
            footerText: `${footerr}`,
            imageMessage: imageMsg,
            buttons: buttons,
            headerType: 4}            
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek, contextInfo: {"mentionedJid": [owner + "@s.whatsapp.net", sender]}})
            client.relayWAMessage(prep)                                                                                                                                                                                                          
            break 
	case 'help':                                                       
	case 'menu':                            
            gambar = fs.readFileSync('./media/menu1.jpeg')
            timestamp = speed();
			latensi = speed() - timestamp
            menunya = `*${ucapanWaktu} @${sender.split("@")[0]}* 👋

*✗⃝🌍 Date Waktu*
• ${timeWib} Wib
• ${timeWita} Wita
• ${timeWit} Wit   

*✗⃝🎩 Contak personel*
• MarcelCyan@gmail.com

*✗⃝🍂 Github Owner*
• https://github.com/MarcelCyan

*✗⃝💫 Creator Bot*
• @${owner}

</𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨/>
*✗⃝🕊 ️${prefix}self*
*✗⃝🕊 ️${prefix}public*
*✗⃝🕊 ️${prefix}readall*
*✗⃝🕊 ️${prefix}unreadall*
*✗⃝🕊 ️${prefix}archive*
*✗⃝🕊 ️${prefix}unarchiveall*  
*✗⃝🕊 ️${prefix}return* 
*✗⃝🕊 ️${prefix}join*
*✗⃝🕊 ️${prefix}repeat*
*✗⃝🕊 ️${prefix}exif*
*✗⃝🕊 ️${prefix}culik*
*✗⃝🕊 ️${prefix}pin*   
*✗⃝🕊 ️${prefix}unpin*
*✗⃝🕊 ️${prefix}bc*
*✗⃝🕊 ️${prefix}tobc*
*✗⃝🕊 ️${prefix}bcaudio*
*✗⃝🕊 ️$*
*✗⃝🕊 >*

</𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨/>
*✗⃝🕊 ${prefix}antilink*
*✗⃝🕊 ️${prefix}welcome*
*✗⃝🕊 ${prefix}group*
*✗⃝🕊 ${prefix}linkgrup*
*✗⃝🕊 ️${prefix}promote*
*✗⃝🕊 ️${prefix}demote*
*✗⃝🕊 ${prefix}add*
*✗⃝🕊 ${prefix}kick*
*✗⃝🕊 ️${prefix}setpp*
*✗⃝🕊 ️${prefix}setdesc*
*✗⃝🕊 ${prefix}setname*
*✗⃝🕊 ️${prefix}hidetag*
*✗⃝🕊 ️${prefix}infogc*

</𝗚𝗔𝗠𝗘 𝗠𝗘𝗡𝗨/>
*✗⃝🕊 ️${prefix}suit*     
*✗⃝🕊 ️${prefix}slot*
*✗⃝🕊 ️${prefix}gelud*
*✗⃝🕊 ️${prefix}tictactoe*
*✗⃝🕊 ️${prefix}resetgame*
*✗⃝🕊 ️${prefix}delsesigelud*
*✗⃝🕊 ️${prefix}caklontong*
*✗⃝🕊 ️${prefix}tebakgambar*
*✗⃝🕊 ️${prefix}family100*

</𝗚𝗔𝗕𝗨𝗧 𝗠𝗘𝗡𝗨/>        
*✗⃝🕊 ${prefix}apakah*
*✗⃝🕊 ${prefix}cekganteng*
*✗⃝🕊 ${prefix}cekcantik*
*✗⃝🕊 ${prefix}hobby*
*✗⃝🕊 ${prefix}bisakah*
*✗⃝🕊 ${prefix}kapankah*
*✗⃝🕊 ${prefix}citacita*
   ️
</𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨/>  
*✗⃝🕊 ${prefix}tourl*            
*✗⃝🕊 ${prefix}sticker*
*✗⃝🕊 ${prefix}attp*
*✗⃝🕊 ${prefix}toimg*
*✗⃝🕊 ${prefix}tomp3*
*✗⃝🕊 ${prefix}tovideo*
*✗⃝🕊 ${prefix}emoji*
*✗⃝🕊 ${prefix}audiotourl*
*✗⃝🕊 ${prefix}videotourl*
*✗⃝🕊 ${prefix}stickertourl*

</𝗦𝗘𝗔𝗥𝗖𝗛𝗜𝗡𝗚/>
*✗⃝🕊 ️${prefix}image*   
*✗⃝🕊 ️${prefix}video*   
*✗⃝🕊 ️${prefix}pinterest*
*✗⃝🕊 ️${prefix}ytsearch*
*✗⃝🕊 ️${prefix}brainly*
*✗⃝🕊 ️${prefix}anime*
*✗⃝🕊 ️${prefix}searchfilm*
*✗⃝🕊 ️${prefix}searchanime*   
*✗⃝🕊 ️${prefix}happymod*
*✗⃝🕊 ️${prefix}lirik*
*✗⃝🕊 ️${prefix}lirik2*
*✗⃝🕊 ️${prefix}chara*  
*✗⃝🕊 ️${prefix}playstore*   
*✗⃝🕊 ️${prefix}otaku*
*✗⃝🕊 ️${prefix}herodetail*
*✗⃝🕊 ️${prefix}herolist*
*✗⃝🕊 ️${prefix}komiku*
*✗⃝🕊 ️${prefix}google*
*✗⃝🕊 ️${prefix}wiki*

</𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗/>
*✗⃝🕊 ️${prefix}ig*    
*✗⃝🕊 ️${prefix}mediafire*    
*✗⃝🕊 ️${prefix}pinterest*  
*✗⃝🕊 ️${prefix}youtube*
*✗⃝🕊 ️${prefix}tiktoknowm*
*✗⃝🕊 ️${prefix}play*
*✗⃝🕊 ️${prefix}twmp4*
*✗⃝🕊 ️${prefix}twmp3*
*✗⃝🕊 ️${prefix}tiktok*
*✗⃝🕊 ️${prefix}fbmp4*
*✗⃝🕊 ️${prefix}fbmp3*
*✗⃝🕊 ️${prefix}tinyurl*

</𝗣𝗛𝗢𝗧𝗢𝗢𝗫𝗬/>
*✗⃝🕊 ️${prefix}burnpaper*
*✗⃝🕊 ️${prefix}smoke*
*✗⃝🕊 ️${prefix}shadow*
*✗⃝🕊 ️${prefix}romantic*
*✗⃝🕊 ️${prefix}naruto*
*✗⃝🕊 ️${prefix}coffecup*
*✗⃝🕊 ️${prefix}doubleheart*
*✗⃝🕊 ️${prefix}lovemsg*
*✗⃝🕊 ️${prefix}grass*
*✗⃝🕊 ️${prefix}butterfly*
*✗⃝🕊 ️${prefix}lovetext*

</𝗪𝗜𝗕𝗨 𝗠𝗘𝗡𝗨/>
*✗⃝🕊 ️${prefix}bj*
*✗⃝🕊 ️${prefix}loli*
*✗⃝🕊 ️${prefix}yuri*
*✗⃝🕊 ️${prefix}kiryu*   
*✗⃝🕊 ️${prefix}animeplanet*
*✗⃝🕊 ️${prefix}klikmanga*
*✗⃝🕊 ️${prefix}cosplay*
*✗⃝🕊 ️${prefix}waifu*
*✗⃝🕊 ️${prefix}randomloli*
*✗⃝🕊 ️${prefix}husbu*
*✗⃝🕊 ️${prefix}wallml*
*✗⃝🕊 ️${prefix}milf*
*✗⃝🕊 ️${prefix}trapnime*
*✗⃝🕊 ️${prefix}neko*
*✗⃝🕊 ️${prefix}megumin*
*✗⃝🕊 ️${prefix}blowjob*
*✗⃝🕊 ️${prefix}hentai*
*✗⃝🕊 ️${prefix}awoo*
*✗⃝🕊 ️${prefix}eroneko*
*✗⃝🕊 ️${prefix}lesbian*
*✗⃝🕊 ️${prefix}anal*
*✗⃝🕊 ️${prefix}baka*
*✗⃝🕊 ️${prefix}neko2*
*✗⃝🕊 ️${prefix}wallpaper*
*✗⃝🕊 ️${prefix}pussy*
*✗⃝🕊 ️${prefix}kitsune*
*✗⃝🕊 ️${prefix}keta*
*✗⃝🕊 ️${prefix}neko2*
*✗⃝🕊 ️${prefix}poke*
*✗⃝🕊 ️${prefix}slap*

</𝗠𝗨𝗟𝗧𝗜 𝗦𝗘𝗦𝗦𝗜𝗢𝗡/>
*✗⃝🕊 ️${prefix}jadibot*
*✗⃝🕊 ️${prefix}stopjadibot*
*✗⃝🕊 ️${prefix}listjadibot*

𒍮 _*NOTE USER BOT*_

*• This Whatsapp bot is still under development*

*• And I thank you for* 
  *my team who have taught me about bots*
  
*• If you find a Bug*
  *Please contact Delevor Bot Whatsapp*`
            mengfoter = `${footerr}`
            buttonss = [{ buttonId: `${prefix}sc`, buttonText: { displayText: '𝗦𝗖𝗥𝗜𝗣𝗧 𝗕𝗢𝗧' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝗢𝗪𝗡𝗘𝗥' }, type: 1 }]
            sendButLocation(from, menunya, mengfoter, gambar, buttonss, {contextInfo:{mentionedJid: [owner + "@s.whatsapp.net", sender]}})
            break
				                	          
    case 'bc':
    case 'broadcast':    
           
            if (!isOwner && !mek.key.fromMe) return     
           
            if (args.length < 1) return fakestatus('teks?')
            anu100 = await client.chats.all()
            if (isMedia && !client.message.videoMessage || isQuotedImage) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            bc100 = await client.downloadMediaMessage(encmedia)
            for (let _ of anu100) {
            client.sendMessage(_.jid, bc100, image, {quoted: freply, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})}
            fakestatus('Suksess broadcast')
            } else {
            for (let _ of anu100) {
            client.sendMessage(_.jid, {
	   	    contentText: `${body.slice(4)}`,
		    footerText: `${footerr}`,
		    buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '𝗔𝗟𝗟 𝗠𝗘𝗡𝗨' }, type: 1 },{ buttonId: `${prefix}sc`, buttonText: { displayText: '𝗦𝗖𝗥𝗜𝗣𝗧 𝗕𝗢𝗧' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝗢𝗪𝗡𝗘𝗥' }, type: 1 }], 
		    headerType: 'LOCATION',
	 	    locationMessage: { degreesLatitude: '',
	   	    degreesLongitude: '',
	 	    jpegThumbnail: fakeimage,
		    }}, MessageType.buttonsMessage )}
            fakestatus('Suksess broadcast')}
            break 
	case 'tobc':
            if (!isOwner && !mek.key.fromMe) return                
		    client.updatePresence(from, Presence.composing)
		    anu = await client.chats.all()
		    if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
		    const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		    buff = await client.downloadMediaMessage(encmedia)
		    for (let _ of anu) {
		    client.sendMessage(_.jid, buff, audio, { quoted: ftroli, mimetype: 'audio/mp4', ptt:true})}
		    } else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
		    const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		    buff = await client.downloadMediaMessage(encmedia)
		    for (let _ of anu) {
		    client.sendMessage(_.jid, buff, sticker, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}})}
		    } else{
            fakestatus('reply sticker/audio')}
	        break  
    case 'bcaudio':					
            if (!isOwner && !mek.key.fromMe) return                
            anu = await client.chats.all()
            if (isMedia && !client.message.audioMessage || isQuotedAudio) {
            const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            bc = await client.downloadMediaMessage(encmedia)
            for (let _ of anu) {
            client.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftroli})
            }
            fakestatus('Suksess broadcast')
            }
            break
                       
     case 'sendfile':
            if(!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)      
            if (!q) return fakestatus(`Example : ${prefix+command} ./lib/simple.js|simple.js`)
            namaf = q.split('|')[0]
            fnama = q.split('|')[1]
            anud = fs.readFileSync(namaf)
            client.sendMessage(from, anud, document, {mimetype:'jpg/application', filename:`${fnama}`})
            break                                 
     case 'savefile':
            if(!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)      
            if(!m.quoted) return fakestatus('Reply Teksnya')
            if(!q) return fakestatus(`Nama Filenya Apa Kak?`)
            fakestatus(mess.wait)
            mengsev = await m.quoted.text
            fs.writeFileSync(`./${q}`, mengsev)
            fakestatus(`Sukses Save File Dengan Nama ${q}`)
            break
     case 'downloadfile':
            if(!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)      
            if(!m.quoted) return fakestatus('Reply File Yang Ingin Di Download!')
            if (!q) return fakestatus(`Nama Filenya Apa Kak?`)
            fakestatus(mess.wait)
            saveas = await m.quoted.download()
            fs.writeFileSync(`./${q}`, saveas)
            fakestatus(`Sukses Download File Dengan Nama ${q}`)
            break
     case 'readfile':
            if(!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)      
            if(!m.quoted) return fakestatus('_Reply File Yang Ingin Di Lihat!_')
            if (!q) return fakestatus(`Masukan Format File!`)
            fakestatus(mess.wait)
            saveas = await m.quoted.download()
            fs.writeFileSync(`./lib/${q}`, saveas)
            cmyd2 = `cat lib.${q}`
            var itsme2 = `0@s.whatsapp.net`
            var split2 = `${fake}`
            term2 = {
            contextInfo: {
            participant: itsme2,
            quotedMessage: {
            extendedTextMessage: {
            text: split2,}}}}
            exec(cmyd2, (err, stdout) => {
            if (err) return client.sendMessage(from, ` ${err}`, text, { quoted:mek })
            if (stdout) {
            client.sendMessage(from, stdout, text, term2)}})
            break            
     case 'unpin':
            if(!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)      
            client.modifyChat(from, ChatModification.unpin)
            fakestatus('_*Successfully Unpin Chats🌹*_')
            console.log('Unpin Chat' + from)
            break                
     case 'pin':
            if(!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)      
            client.modifyChat(from, ChatModification.pin)
            fakestatus('_*Successfully Pin Chats🌹*_')
            console.log('Pin Chat ' + from)
            break                
     case 'archive':
            if(!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)      
            fakestatus('_*Successfully Archive Chats🌹*_')
            console.log('succes archive chat = ' + from)
            await sleep(3000)
            client.modifyChat(from, ChatModification.archive)
            break                
     case 'unreadall':
            if(!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)      
            var chats = await client.chats.all()
            chats.map( async ({ jid }) => {
            await client.chatRead(jid, 'unread')})
		    var teks = `_*Successfully Unread ${chats.length} Chats🌹*_`
		    await client.sendMessage(from, teks, text, {quoted: mek})
		    console.log(chats.length)
	        break	
     case 'readall':
            if(!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)      
            var chats = await client.chats.all()
            chats.map( async ({ jid }) => {
            await client.chatRead(jid)})
		    var teks = `_*Successfully Read ${chats.length} Chats🌹*_`
	        await client.sendMessage(from, teks, text, {quoted: mek})
            console.log(chats.length)
		    break		
    case 'unarchiveall':
            if(!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)      
            fakestatus('_*Sukses Unarchive Allchat🌹*_')
            console.log('succes unarchive chat = ' + from)
            anu = await client.chats.all()
            for (let _ of anu) {
            client.modifyChat(_.jid, ChatModification.unarchive)}
            break

	case 'return':
            if(!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)      
		    return client.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
		    if (err) return client.sendMessage(from, `Root @MarcelCyan:~ ${err}`, text, { quoted: mek })
            break                                                                                    
    case 'exif':
            if(!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)      
            if (!q) return fakestatus(mess.wrongFormat)
            if (!arg.split('|')) return fakestatus(`Penggunaan ${prefix}exif nama|author`)
            exif.create(arg.split('|')[0], arg.split('|')[1])
            fakestatus('Sukses!!')
            break		
    case 'join': 
            if (!q) return fakestatus('Linknya?')
            if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
            if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return fakestatus('Linknya Invalid Tod')
            link = args[0].replace('https://chat.whatsapp.com/','')
            fak = client.query({ json: ['action', 'invite', link],
            expect200: true })
            fakestatus('Berhasil Masuk Grup')
            break            
    case 'public':
            if (!mek.key.fromMe && !isOwner) return fakestatus(mess.only.owner)
            if (banChats === false) return
            banChats = false
            fakestatus(`*⊷️「 PUBLIC-MODE 」*`)
            break
 	case 'self':
            if (!mek.key.fromMe && !isOwner) return fakestatus(mess.only.owner)
            if (banChats === true) return
            uptime = process.uptime()
            banChats = true
            fakestatus(`*⊷️「 SELF-MODE 」*`)
            break   
    case 'culik':
            if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
            if (args.length < 1) return fakestatus('Masukin id grupnya')
            let pantek = []
            for (let i of groupMembers) {
            pantek.push(i.jid)
            }
            client.groupAdd(args[0], pantek)
            break                      
    case 'repeat':
            if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)    
            var cuok = `${args.join(' ')}`
            var Emoji = cuok.split("|")[0];
            let Karina = `${Emoji}`.repeat(99999)
            client.sendMessage(from, Karina, MessageType.text, { quoted: mek})
            break
           
    case 'jadibot':
            jadibot(reply,client,from)
            break
    case 'stopjadibot':
            stopjadibot(reply)
            break
    case 'listbot':
    case 'listjadibot':
            let jamdibot = '*──「 LIST JADIBOT 」──*\\n\n'
            for(let i of listjadibot) {
            jamdibot += `*❑ Nomor* : ${i.jid.split('@')[0]}
*❑ Nama* : ${i.name}
*❑ Device* : ${i.phone.device_manufacturer}
*❑ Model* : ${i.phone.device_model}\n\n`
}
            fakestatus(jamdibot)           
            break
           
       case 'infogc':
       case 'infogrup':
       case 'grupinfo':
       case 'groupinfo':
            if (!isGroup) return fakestatus(mess.only.group)
            try {
            var pic = await client.getProfilePicture(from)
            } catch {
            var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
            }
            ngen = await getBuffer(pic)
            ingfo = `*─「 INFO GRUP 」─*
              
*️𝐍𝐚𝐦𝐞 :* ${groupName}
*𝐈𝐝 :* ${from}
*𝐃𝐢𝐛𝐮𝐚𝐭 :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}
*𝐎𝐰𝐧𝐞𝐫 𝐆𝐫𝐮𝐩 :* @${groupMetadata.owner.split('@')[0]}
*𝐓𝐨𝐭𝐚𝐥 𝐀𝐝𝐦𝐢𝐧:* ${groupAdmins.length}
*𝐓𝐨𝐭𝐚𝐥 𝐌𝐞𝐦𝐛𝐞𝐫 :* ${groupMembers.length}`
            buttons = [{buttonId: `${prefix}descc`, buttonText: {displayText: '📄 DESKRIPSI'}, type: 1}]               
            imageMsg = (await client.prepareMessageMedia(ngen, 'imageMessage', {thumbnail: ngen})).imageMessage                                                                
            buttonsMessage = {
            contentText: `${ingfo}`,           
            footerText: `${footerr}`,
            imageMessage: imageMsg,
            buttons: buttons,
            headerType: 4}            
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
            client.relayWAMessage(prep)                                                                                                                                                                                                          
            break   
    case 'descc':
            ngga = `• 𝐃𝐞𝐬𝐤𝐫𝐢𝐩𝐬𝐢 𝐆𝐫𝐮𝐩🍡\n\n${groupMetadata.desc}`

            fakestatus(ngga)
            break                                                                                                                                                                                                           	           	
    case 'welcome': 
            if (!isGroup)return fakestatus(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin) 
            if(args[0] === 'on'){
            welkom.push(from)
            fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
            fakestatus('Sukses mengaktifkan Welcome digroup ini')
            } else if(args[0] === 'off'){
            welkom.splice(from, 1)                      
            fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
            fakestatus('Sukses menonaktifkan Welcome digroup ini')
            } else {
            linkr= [{buttonId: `${prefix}welcome on`, buttonText: {displayText: `enable`}, type: 1},{buttonId: `${prefix}welcome off`, buttonText: {displayText: `disable`}, type: 1}]
            antl = {
            contentText: `*Hello Admin👋, Please choose one below!*`,
            footerText: `${footerr}`,
            buttons: linkr,
            headerType: 1 }
            return client.sendMessage(from, antl, MessageType.buttonsMessage)}
            break 
    case 'antilink':
            if (!isGroup)return fakestatus(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)    
            if (!isBotGroupAdmins) return fakestatus(`Bot Harus jadi Admin`)                             
            if(args[0] === 'on'){
            antilink.push(from)
            fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
            fakestatus('Sukses mengaktifkan Antilink Whatsapp digroup ini')
            } else if(args[0] === 'off'){
            anu = antilink.indexOf(from)
            antilink.splice(anu, 1)
            fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
            fakestatus('Sukses menonaktifkan Antilink Whatsapp digroup ini')
            } else {
            linkr= [{buttonId: `${prefix}antilink on`, buttonText: {displayText: `enable`}, type: 1},{buttonId: `${prefix}antilink off`, buttonText: {displayText: `disable`}, type: 1}]
            antl = {
            contentText: `*Hello Admin👋, Please choose one below!*`,
            footerText: `${footerr}`,
            buttons: linkr,
            headerType: 1 }
            return client.sendMessage(from, antl, MessageType.buttonsMessage)}
            break 
    case 'group':
            if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
            if (!isGroup) return fakestatus(mess.only.group)
            if (!isBotGroupAdmins) return fakestatus("Bot Bukan Admin :)")
            but = [{ buttonId: '!groupbuka', buttonText: { displayText: 'Buka' }, type: 1 },{ buttonId: '!geouptutup', buttonText: { displayText: 'Tutup' }, type: 1 }]
            sendButton(from, "Silahkan pilih untuk buka/tutup group", fake, but, mek)
            break
    case 'groupbuka':
            if (!isGroup) return fakestatus(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
            if (!isBotGroupAdmins) return fakestatus("Bot Bukan Admin :)")
            fakestatus(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
            client.groupSettingChange(from, GroupSettingChange.messageSend, false)
            break
    case 'grouptutup':
            if (!isGroup) return fakestatus(mess.only.group)
            if (!isGroupAdmins) return fakestatus(mess.only.admin)
            if (!isBotGroupAdmins) return fakestatus("Bot Bukan Admin :)")
            fakestatus(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
            client.groupSettingChange(from, GroupSettingChange.messageSend, true)
            break
    case 'linkgc':
    case 'linkgrup':
            if (!isGroup) return fakestatus(mess.only.group)
            if (!isBotGroupAdmins) return fakestatus("Bot Bukan Admin :)")
            linkgc = await client.groupInviteCode(from)
            yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
            client.sendMessage(from, yeh, text, { quoted: ftroli })
            break
    case 'promote':
            if (!isGroup) return fakestatus(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
            if (!isBotGroupAdmins) return fakestatus("Bot Bukan Admin :)")
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakestatus('Tag target yang ingin di jadi admin!')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            if (mentioned.length > 1) {
            teks = 'Perintah di terima, anda menjdi admin :\n'
            for (let _ of mentioned) {
            teks += `@${_.split('@')[0]}\n`
            }
            mentions(teks, mentioned, true)
            client.groupMakeAdmin(from, mentioned)
            } else {
            mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
            client.groupMakeAdmin(from, mentioned)
            }
            break
    case 'demote':
            if (!isGroup) return fakestatus(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
            if (!isBotGroupAdmins) return fakestatus("Bot Bukan Admin :)")
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakestatus('Tag target yang ingin di tidak jadi admin!')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            if (mentioned.length > 1) {
            teks = 'Perintah di terima, anda tidak menjadi admin :\n'
            for (let _ of mentioned) {
            teks += `@${_.split('@')[0]}\n`
            }
            mentions(teks, mentioned, true)
            client.groupDemoteAdmin(from, mentioned)
            } else {
            mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
            client.groupDemoteAdmin(from, mentioned)
            }
            break
    case 'add':
            if (!isGroup) return fakestatus(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
            if (!isBotGroupAdmins) return fakestatus("Bot Bukan Admin :)")
            if (args.length < 1) return fakestatus('Yang mau di add siapa??')
            if (args[0].startsWith('08')) return fakestatus('Gunakan kode negara Gan')
            try {
            num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
            client.groupAdd(from, [num])
            } catch (e) {
            console.log('Error :', e)
            fakestatus('Gagal menambahkan target, mungkin karena di private')
            }
            break
    case 'kick':
            if (!isGroup) return fakestatus(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
            if (!isBotGroupAdmins) return fakestatus("Bot Bukan Admin :)")
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakestatus('Tag target yang ingin di tendang!')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            if (mentioned.length > 1) {
            teks = 'Perintah di terima, mengeluarkan :\n'
            for (let _ of mentioned) {
            teks += `@${_.split('@')[0]}\n`
            }
            mentions(teks, mentioned, true)
            client.groupRemove(from, mentioned)
            } else {
            mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
            client.groupRemove(from, mentioned)
            }
            break
    case 'tagall':
            if (!isGroup) return fakestatus(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
            members_id = []
            teks = (args.length > 1) ? args.join(' ').trim() : ''
            teks += '\n\n'
            for (let mem of groupMembers) {
            teks += `• @${mem.jid.split('@')[0]}\n`
            members_id.push(mem.jid)
            }
            mentions(teks, members_id, true)
            break
    case 'setname':
            if (!isGroup) return fakestatus(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
            if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
            client.groupUpdateSubject(from, `${body.slice(9)}`)
            client.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftroli })
            break
    case 'setdesc':
            if (!isGroup) return fakestatus(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
            if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
            client.groupUpdateDescription(from, `${body.slice(9)}`)
            client.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftroli })
            break
    case 'setpp':
            if (!isGroup) return fakestatus(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
            if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
            media = await client.downloadAndSaveMediaMessage(mek, './database/media_user')
            await client.updateProfilePicture(from, media)
            fakestatus(mess.wait)
            fakestatus(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
            break
    case 'hidetag':
            if (!isGroup) return fakestatus(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
            var value = body.slice(9)
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))})
            var options = {
            text: value,
            contextInfo: { mentionedJid: mem }, quoted: ftroli
            }
            client.sendMessage(from, options, text)
            break
    case 'attp':
            if (args.length == 0) return fakestatus(`Example: ${prefix + command} Hai`)
            buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
            client.sendMessage(from, buffer, sticker, { quoted: ftroli })
            break
   case 'emoji':
            if (!q) return fakestatus('emojinya?')
            qes = args.join(' ')
            emoji.get(`${qes}`).then(emoji => {
            teks = `${emoji.images[4].url}`
            sendStickerFromUrl(from,`${teks}`)	
            console.log(teks)})
            break   
    case 'gura':
    case 'gawrgura':
    case 'stickgura':
    case 'gurastick':
             var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             var wifegerak = ano.split('\n')
             var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
             sendStickerUrl(from, wifegerakx)
             break
    case 'doge':
    case 'domge':
    case 'stickdoge':
    case 'dogestick':
             var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             var wifegerak = ano.split('\n')
             var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
             sendStickerUrl(from, wifegerakx)
             break
    case 'patrick':
    case 'patrik':
    case 'patrickstick':
             var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             var wifegerak = ano.split('\n')
             var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
             sendStickerUrl(from, wifegerakx)
             break
                                                                                                                                                                     
    case 'sticker':
    case 'stiker':
	case 's':
			if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			const enbcmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			const mbedia = await client.downloadAndSaveMediaMessage(enbcmedia, `./sticker/${sender}`)
		    await ffmpeg(`${mbedia}`)
			.input(mbedia)
		    .on('start', function (cmd) {
			console.log(`Started : ${cmd}`)})
			.on('error', function (err) {
			console.log(`Error : ${err}`)
			fs.unlinkSync(mbedia)
			fakestatus(mess.error.api)})
			.on('end', function () {
			console.log('Finish')
			exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
			if (error) return fakestatus(mess.error.api)
	  	    client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
		    fs.unlinkSync(mbedia)	
		    fs.unlinkSync(`./sticker/${sender}.webp`)})})
			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
			.toFormat('webp')
			.save(`./sticker/${sender}.webp`)
			} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
			const enacmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			const maedia = await client.downloadAndSaveMediaMessage(enacmedia, `./sticker/${sender}`)
			ffakestatus(mess.wait)
			await ffmpeg(`${maedia}`)
			.inputFormat(maedia.split('.')[4])
			.on('start', function (cmd) {
			console.log(`Started : ${cmd}`)})
			.on('error', function (err) {
			console.log(`Error : ${err}`)
			fs.unlinkSync(maedia)
			tipe = media.endsWith('.mp4') ? 'video' : 'gif'
		    fakestatus(mess.error.api)})
			.on('end', function () {
			console.log('Finish')
			exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
			if (error) return fakestatus(mess.error.api)
			client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek })
			fs.unlinkSync(maedia)
			fs.unlinkSync(`./sticker/${sender}.webp`)})})
			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
			.toFormat('webp')
			.save(`./sticker/${sender}.webp`)
			} else {
			fakestatus(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
			}
			break
    case 'toimg':
			if (!isQuotedSticker) return fakestatus('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await client.downloadAndSaveMediaMessage(encmedia, './database/media_user')
            ran = getRandom('.png')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakestatus(' Gagal, pada saat mengkonversi sticker ke gambar ')
            buffer = fs.readFileSync(ran)
            costum(buffer, image, verivikasi, `Nih Kack`)
            fs.unlinkSync(ran)})
            break
    case 'tomp3':
            client.updatePresence(from, Presence.recording)
            if (!isQuotedVideo) return fakestatus('Reply Video nya Tod')
            fakestatus(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await client.downloadAndSaveMediaMessage(encmedia, './database/media_user')
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakestatus('Gagal, pada saat mengkonversi video ke mp3')
            bufferlkj = fs.readFileSync(ran)
            client.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftroli })
            fs.unlinkSync(ran)})
            break
    case 'tovideo':
            if (!isQuotedSticker) return fakestatus('Reply stikernya')
            fakestatus(mess.wait)
            anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            anum = await client.downloadAndSaveMediaMessage(anumedia, './database/media_user')
            ran = getRandom('.webp')
            exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
            fs.unlinkSync(anum)
            buffer = fs.readFileSync(ran)
            client.sendMessage(from, buffer, video, { quoted: ftroli, caption: 'Done... Jangan Lupa Subscribe client Botz' })
            fs.unlinkSync(ran)})
            break 
    case 'tourl':
    case 'imagetorul':
    case 'imgtourl':
    case 'audiotourl':
    case 'videotourl':
    case 'stickertourl':
    case 'stikertourl':
    case 'tolink':
           var imgbb = require('imgbb-uploader')
           if (isQuotedAudio) {
           ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
           reply(mess.wait)
           owgi = await client.downloadAndSaveMediaMessage(ger)
           Okelor = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
           teks=`*─ 「 AUDIO TO URL 」 ─*

*$Url : ${Okelor.display_url}*`
           reply(teks) 
           } else if (isQuotedImage) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
           owgi = await client.downloadAndSaveMediaMessage(ger)
           qbc = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
           teks=`*─ 「 IMAGE TO URL 」 ─*

*Url : ${qbc.display_url}*`
           reply(teks)
           } else if (isQuotedVideo) {
           ger = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
           owgi = await client.downloadAndSaveMediaMessage(ger)
           ffff = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
           teks=`*─ 「 VIDEO TO URL 」 ─*

*$Url : ${ffff.display_url}*`
           reply(teks)
           } else if (isQuotedSticker) {
           ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
           reply(mess.wait)
           owgi = await client.downloadAndSaveMediaMessage(ger)
           vrr = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
           teks=`*─ 「 STICKER TO URL 」 ─*

*Url : ${vrr.display_url}*`
           reply(teks)
           }          
           break                                                                                            
    case 'waifu':
    case 'loli':
    case 'husbu':
    case 'milf':
    case 'cosplay':
    case 'wallml':
            let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
            let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
            fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
    	    buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = ( await client.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep)
            fs.unlinkSync(`./${sender}.jpeg`)
            break
                            
    case 'yuri':
            kon = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=yuri&apikey=hardianto`)
            hai00 = await getBuffer(kon)          
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(hai00, "imageMessage", { thumbnail: hai00, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep)  
            break
    case 'anal':
            aku = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=anal&apikey=hardianto`)
            kon = await getBuffer(aku)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep) 
            break
    case 'lesbian':
            kau = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=lesbian&apikey=hardianto`)
            kon = await getBuffer(kau)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep) 
            break
    case 'eroneko':
            hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroNeko&apikey=hardianto`)
            kon = await getBuffer(hai)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep)   
            break
    case 'bj':
            hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=bJ&apikey=hardianto`)
            kon = await getBuffer(hai)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep)  
            break
    case 'kitsune':
            hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kitsune&apikey=hardianto`)
            kon = await getBuffer(hai)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep)  
            break
    case 'pussy':
            hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=pussy&apikey=hardianto`)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep) 
            break
    case 'wallpaper':   
            hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=hardianto`)
            kon = await getBuffer(hai)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep) 
            break
    case 'neko2':
            hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
            kon = await getBuffer(hai)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep)  
            break
    case 'baka':
            hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=baka&apikey=hardianto`)
            kon = await getBuffer(hai)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep) 
            break
    case 'slap':
            hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=slap&apikey=hardianto`)
            kon = await getBuffer(hai)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep) 
            break
    case 'poke':
            hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=poke&apikey=hardianto`)
            kon = await getBuffer(hai)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep)   
            break
    case 'neko2':
            hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
            kon = await getBuffer(hai)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep) 
            break
    case 'keta':
            hai = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=keta&apikey=hardianto`)
            kon = await getBuffer(hai)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep) 
            break
    case 'awoo':
            anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
            buffer = await getBuffer(anu.url)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep)                         
            break
    case 'blowjob':
            anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
            buffer = await getBuffer(anu.url)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep)                        
            break
    case 'hentai': 
            anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
            buffer = await getBuffer(anu.url)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep)                         
            break
    case 'megumin':
            anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
            buffer = await getBuffer(anu.url)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep) 
            break
    case 'neko':
            anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
            buffer = await getBuffer(anu.url)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep) 
            break
    case 'trapnime':
            anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
            buffer = await getBuffer(anu.url)
            buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
            imageMsg = (await client.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
            buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
            contentText:`Nih Kack`,buttons,headerType:4}
            prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
            client.relayWAMessage(prep) 
            break                                                       
    case 'apakah':
            apakah = body.slice(1)
            const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
            const kah = apa[Math.floor(Math.random() * apa.length)]
            client.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: ftroli })
            break
    case 'cekganteng':
            ganteng = body.slice(1)
            const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
            const teng = gan[Math.floor(Math.random() * gan.length)]
            client.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: ftroli })
            break
    case 'cekcantik':
            cantik = body.slice(1)
            const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
            const tik = can[Math.floor(Math.random() * can.length)]
            client.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: ftroli })
            break
    case 'hobby':
            const kan =['Coli','baca buku','Tadi','ngeliat org mandi','Nonton bokep','sepedaan','Baca wattpad','belajar','Main discord','menabung']
            const hooo = kan[Math.floor(Math.random() * kan.length)]
            client.sendMessage(from, 'Pertanyaan : *hoby*\n\nJawaban : '+ hooo, text, { quoted: ftroli })
            break
    case 'bisakah':
            bisakah = body.slice(1)
            const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ya mana gw tau']
            const keh = bisa[Math.floor(Math.random() * bisa.length)]
            client.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: ftroli })
            break
    case 'citacita':       
            var cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
            var cita3 = cita[Math.floor(Math.random() * cita.length)]
            cita2 = await getBuffer(cita3)
            client.sendMessage(from, cita2, MessageType.audio, {quoted: ftroli, mimetype: 'audio/mp4', ptt:true, duration: -838719282910})
            break
    case 'kapankah':
            kapankah = body.slice(1)
            const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
            const koh = kapan[Math.floor(Math.random() * kapan.length)]
            client.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: ftroli })
            break
    case 'owner':
    case 'creator':             
            sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
            break              
    case 'runtime':
            memekk = `Runtime : ${runtime(process.uptime())}`
            fakestatus(memekk)
            break
    case 'sc':
    case 'scrip':
    case 'script':
    case 'sourcecode':	
            ohu = `*`
		    source = `${ohu}Sourcecode Dari Sini🐧${ohu}\nhttps://github.com/MarcelCyan/Self-Bot`
            sendButton(from, `${source}`, `${footerr}`, [{buttonId: `y`,buttonText: {displayText: `Oke Bang !`},type: 1}])  
	        break

    case 'tes':
            tekss = `Oke Nyala`
            fakestatus(tekss)
            break 	        
 
    case 'gelud':
            if (!isGroup) return fakestatus(mess.only.group)
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return fakestatus('Hanya bisa dengan 1 orang')
            if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
            if (args.length === 0) return fakestatus(`Tag Lawan Yang Ingin Diajak Bermain Game`)
            if (fs.existsSync(`./media/${from}.json`)) return fakestatus(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)					
            gelutSkuy = setGelud(`${from}`)
            gelutSkuy.status = false
            gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
            gelutSkuy.Y = args[0].replace("@", "");
            fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
            starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

            client.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
            break
    case 'delsesigelud':
            if (!isGroup) return fakestatus(mess.only.group)
            if (fs.existsSync('./media/' + from + '.json')) {
            fs.unlinkSync('./media/' + from + '.json')
            fakestatus('Berhasil Menghapus Sesi Gelud')
            } else {
            fakestatus('Tidak ada sesi yang berlangsung')
}
            break
    case 'delsesittt':
    case 'resetgame':
            if (!isTTT) return fakestatus('Tidak Ada Permainan Di Grub Ini')
            naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
            ky_ttt = naa 
            fakestatus('Sukses Mereset Game')
            break
    case 'tictactoe':
    case 'ttc':
            if (!isGroup) return fakestatus(mess.only.group)
            if (args.length < 1) return fakestatus('Tag Lawan Anda! ')
            if (isTTT) return fakestatus('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakestatus('Tag target Lawan!')
            ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
            player1 = sender
            player2 = ment[0]
            angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
            id = from
            gilir = player2
            ky_ttt.push({player1,player2,id,angka,gilir})
            client.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
            break
   case 'slot':
            const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
            somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
            somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
            somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
            if (somtoyy  == '🍌 : 🍌 : 🍌') {
            fakestatus(`*🎰 GAME SLOT 🎰*\n\n⌬━━━━━━━━━━━⌬\n${somtoy}\n${somtoyy} *⌬━━━━⌬*\n${somtoyyy}\n⌬━━━━━━━━━━━⌬\n\n*SELAMAT KAMU MENANG🎉*`)
            } else if (somtoyy == '?? : 🍒 : 🍒') {
            fakestatus(`*🎰 GAME SLOT 🎰*\n\n⌬━━━━━━━━━━━⌬\n${somtoy}\n${somtoyy} *⌬━━━━⌬*\n${somtoyyy}\n⌬━━━━━━━━━━━⌬\n\n*SELAMAT KAMU MENANG🎉*`)
            } else if (somtoyy == '🔔 : 🔔 : 🔔') {
            fakestatus(`*🎰 GAME SLOT 🎰*\n\n⌬━━━━━━━━━━━⌬\n${somtoy}\n${somtoyy} *⌬━━━━⌬*\n${somtoyyy}\n⌬━━━━━━━━━━━⌬\n\n*SELAMAT KAMU MENANG🎉*`)
            } else if (somtoyy == '?? : 🍐 : 🍐') {
            fakestatus(`*🎰 GAME SLOT 🎰*\n\n⌬━━━━━━━━━━━⌬\n${somtoy}\n${somtoyy} *⌬━━━━⌬*\n${somtoyyy}\n⌬━━━━━━━━━━━⌬\n\n*SELAMAT KAMU MENANG🎉*`)
            } else if (somtoyy == '🍇 : 🍇 : 🍇') {
            fakestatus(`*🎰 GAME SLOT 🎰*\n\n⌬━━━━━━━━━━━⌬\n${somtoy}\n${somtoyy} *⌬━━━━⌬*\n${somtoyyy}\n⌬━━━━━━━━━━━⌬\n\n*SELAMAT KAMU MEMANG🎉*`)
            } else {
            fakestatus(`*🎰 GAME SLOT 🎰*\n\n⌬━━━━━━━━━━━⌬\n${somtoy}\n${somtoyy} *⌬━━━━⌬*\n${somtoyyy}\n⌬━━━━━━━━━━━⌬\n\n*SELAMAT KAMU KALAH🐤*`)
}
            break 
   case 'caklontong':
			data17 = fs.readFileSync('./lib/caklontong.js');
			cak17 = JSON.parse(data17);
			lontong17 = Math.floor(Math.random() * cak17.length);
			randKey17 = cak17[lontong17];
			Pertanyaan = randKey17.result.soal
			Jawaban = '\n*'+randKey17.result.desc +'*'
			setTimeout( () => {
			client.sendMessage(from, Jawaban, text, {quoted: mek})
			}, 30000)
			setTimeout( () => {
			client.sendMessage(from, '_10 Detik lagi_', text) 
			}, 20000) 
			setTimeout( () => {
			client.sendMessage(from, '_20 Detik lagi_', text) 
			}, 10000) 
			setTimeout( () => {
			client.sendMessage(from, '_30 Detik lagi_', text) 
			}, 2500) 
			client.sendMessage(from, Pertanyaan, text, {quoted: mek})
		    break
   case 'family100':
			datalu = fs.readFileSync('./lib/family100.js');
            familu = JSON.parse(datalu);
			ly100 = Math.floor(Math.random() * familu.length);
			randKeyo = familu[ly100];
			Pertanyaan = randKeyo.result.soal
			setTimeout( () => {
			client.sendMessage(from, '*Jawaban :* \n```'+randKeyo.result.jawaban +'```', text, {quoted: mek}) 
			}, 30000) 
			setTimeout( () => {
		    fakestatus('_Waktu Anda Habis_')
			}, 29000)
			setTimeout( () => {
			client.sendMessage(from, '_10 Detik lagi_', text) 
			}, 20000) 
			setTimeout( () => {
			client.sendMessage(from, '_20 Detik lagi_', text) 
			}, 10000) 
			setTimeout( () => {
			client.sendMessage(from, '_30 Detik lagi_', text) 
			}, 2500) 
			setTimeout( () => {
			client.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: mek }) 
			}, 0) 
		    break 
   case 'tebakgambar':
			datapp = fs.readFileSync('./lib/tebakgambar.js');
			jsonData = JSON.parse(datapp);
			rannikdepx = Math.floor(Math.random() * jsonData.length);
			randKepy = jsonData[rannikdepx];
			randSoal = await getBuffer(randKepy.result.soalImg)
			setTimeout( () => {
			client.sendMessage(from, '*Jawaban :* '+ randKepy.result.jawaban +'\n', text, {quoted: mek}) // ur cods
			}, 30000) 
			setTimeout( () => {
			client.sendMessage(from, '_10 Detik lagi_', text) 
			}, 20000) 
			setTimeout( () => {
			client.sendMessage(from, '_20 Detik lagi_', text) 
			}, 10000) 
			setTimeout( () => {
			client.sendMessage(from, '_30 Detik lagi_', text) 
			}, 2500) 
			setTimeout( () => {
	    	client.sendMessage(from, randSoal, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
			}, 0) 					
   		    break					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
   case 'suit': 
            if (!q) return fakestatus(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
            const userspilih = q
            if (!userspilih.match(/batu|gunting|kertas/)) return fakestatus(`Pilih batu, kertas, gunting`)
            var computer = Math.random();
            if (computer < 0.34 ) {
            computer = 'batu';
            } else if( computer >= 0.34 && computer < 0.67) {
            computer = 'gunting';
            } else {
            computer = 'kertas';
}
            if ( userspilih == computer ) {
            fakestatus(`Pertandingan Seri!`)
            } else if ( userspilih == 'batu' ) {
            if( computer == 'gunting' ) {
            fakestatus(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
            } else {
            fakestatus(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
            } else if ( userspilih == 'gunting' ) {
            if( computer == 'batu' ) {
            fakestatus(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
            } else {
            fakestatus(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
            } else if ( userspilih == 'kertas' ) {
            if( computer == 'batu' ) {
            fakestatus(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
            } else {
            fakestatus(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}         
            break 
     case 'mediafire':
              if (args.length < 1) return fakestatus('Link Nya Mana? ')
              if(!isUrl(args[0]) && !args[0].includes('mediafire')) return fakestatus(mess.error.Iv)
              teks = args.join(' ')
              res = await mediafireDl(teks)
              result = `Media Fire Downloader\n_*Tunggu Proses Mengirim Media......*_`
              fakestatus(result)
              sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
              break 
     case 'tinyurl':
              try {
              link = args[0]
              anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
              fakestatus(`${anu.data}`)
              } catch (e) {
              emror = String(e)
              fakestatus(`${e}`)
              }
              break                                  
     case 'pinterest': 
              if(!q) return fakestatus('Cari apa?')   
              const nganu = args.join(' ')                         
              let pin = await hx.pinterest(q);
              let ac = pin[Math.floor(Math.random() * pin.length)];
              let di = await getBuffer(ac);
              buttons = [{buttonId: `${prefix + command} ${q}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await client.prepareMessageMedia(di, "imageMessage", { thumbnail: di, })).imageMessage
              buttonsMessage = {footerText: `${footerr}`, imageMessage: imageMsg,
              contentText:`Nih Kack`,buttons,headerType:4}
              prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              client.relayWAMessage(prep)
              break                                                                                                                  
    case 'tiktok': 
    case 'ttdl':
              if (!q) return fakestatus('Linknya?')
              if (!q.includes('tiktok')) return fakestatus(mess.error.Iv)
              fakestatus(mess.wait)
              anu = await TiktokDownloader(`${q}`)
              .then((data) => { sendMediaURL(from, data.result.nowatermark) })
              .catch((err) => { fakestatus(String(err)) })
              break
    case 'ttnowm': 
    case 'tiktoknowm':
              if (!q) return fakestatus('Linknya?')
              if (!q.includes('tiktok')) return fakestatus(mess.error.Iv)
              fakestatus(mess.wait)
              anu = await TiktokDownloader(`${q}`)
              .then((data) => { sendMediaURL(from, data.result.nowatermark) })
              .catch((err) => { fakestatus(String(err)) })
              break           
     case 'ig':
             if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return fakestatus(mess.Iv)
             if (args.length < 1) return fakestatus('Link?')
             lin = args[0]          
             hx.igdl(lin).then(res => {             
             Anu = res[0].downloadUrl
             fto = potogw
             client.sendMessage(from, fto, image, {quoted:mek, caption:`*𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗠𝗣4*
             
•🌹Priview : ${res[0].preview}
•🌹Link : ${res[0].url}
•🌹Linkdl : ${res[0].downloadUrl}

Please wait, the media file is being sent it may take a few minutes`, thumbnail:potofake, contextInfo:{forwardingScore: 989, isForwarded: true}})
             sendMediaURL(from, Anu, 'Done!')
             })
             break             
    case 'fbmp4':
             if (args.length < 1) return fakestatus('Link?')
             lin = args[0]             
             hx.fbdown(lin).then(res => {           
             Anu = res.HD
             fto = potogw
             client.sendMessage(from, fto, image, {quoted:mek, caption:`*𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗠𝗣4*
             
•🌹Normal : ${res.Normal_video}
•🌹Hd : ${res.HD}
•🌹Audio : ${res.audio}

_Please wait, the media file is being sent it may take a few minutes`, thumbnail:potofake, contextInfo:{forwardingScore: 989, isForwarded: true}})
             sendMediaURL(from, Anu, 'Done!')
             })
             break
    case 'fbmp3':
             if (args.length < 1) return fakestatus('Link?')
             lin = args[0]             
             hx.fbdown(lin).then(async (res) => {             
             Anu = res.HD
             fto = potogw
             client.sendMessage(from, fto, image, {quoted:mek, caption:`*𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗠𝗣3*
             
•🌹Normal : ${res.Normal_video}
•🌹Hd : ${res.HD}
•🌹Audio : ${res.audio}

Please wait, the media file is being sent it may take a few minutes`, thumbnail:potofake, contextInfo:{forwardingScore: 989, isForwarded: true}})
             khs = await getBuffer(Anu)
             client.sendMessage(from, khs, audio, {quoted:mek, mimetype:'audio/mp4', filename:'clientgans.mp3', ptt:true})
             })
             break             
    case'twitter':
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return fakestatus(mess.Iv)
             if (!q) return fakestatus('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
             .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'DONE')
             })
             break 
     case 'ytdl':
     case 'play':      
     case 'youtube':       
     case 'youtubedl':  
             if (args.length < 1) return fakestatus(`Kirim perintah *${prefix}play query`)
             fakestatus('Searching...')
             let yut = await yts(q)
             yta(yut.videos[0].url)             
             .then(async(res) => {
             const { thumb, title, filesizeF, filesize } = res
             const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬
		     
•🌹Judul : ${yut.all[0].title}
•🌹ID Video : ${yut.all[0].videoId}
•🌹️Diupload Pada : ${yut.all[0].ago}
•🌹️Views : ${yut.all[0].views}
•🌹Durasi : ${yut.all[0].timestamp}
•🌹Channel : ${yut.all[0].author.name}
•🌹Link Channel : ${yut.all[0].author.url}`
             ya = await getBuffer(thumb)
             py =await client.prepareMessage(from, ya, image)
             gbutsan = [{buttonId: `${prefix}buttonmusic ${yut.all[0].url}`, buttonText: {displayText: '🎵AUDIO'}, type: 1},{buttonId: `${prefix}buttonvideo ${yut.all[0].url}`, buttonText: {displayText: '🎥VIDEO'}, type: 1}]
             gbuttonan = {
             imageMessage: py.message.imageMessage,
             contentText: capti,
             footerText: 'Silahkan Pilih Jenis File Dibawah Ini☕',
             buttons: gbutsan,
             headerType: 4
}
             await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
             break                                                        
      case 'buttonmusic':
             if(!q) return fakestatus('linknya?')              
             res = await yta(`${q}`).catch(e => {
             fakestatus('```[ ! ] Error Saat Mengirim Audio```')})
             sendMediaURL(from, `${res.dl_link}`,{quoted:mek})
             break         
     case 'buttonvideo':
             if(!q) return fakestatus('linknya?')            
             res = await ytv(`${q}`).catch(e => {
             fakestatus('```[ ! ] Error Saat Mengirim Video```')})
             sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
             break             
 	case 'ytsearch':
 		 	 if (args.length < 1) return fakestatus('Tolong masukan query!')
			 var srch = args.join('');
	  		 try {
          	 var aramas = await yts(srch);
   			 } catch {
        	 return await client.sendMessage(from, 'Error!', MessageType.text, dload)
    		 }
    		 aramat = aramas.all 
    	 	 var tbuff = await getBuffer(aramat[0].image)
    		 var ytresult = '';
    		 ytresult += '𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗦𝗘𝗔𝗥𝗖𝗛'
    	 	 ytresult += '\n⌬━━━━━━━━━━━━⌬\n\n'
   			 aramas.all.map((video) => {
        	 ytresult += '•🌹Title: ' + video.title + '\n'
             ytresult += '•🌹Link: ' + video.url + '\n'
             ytresult += '•🌹Durasi: ' + video.timestamp + '\n'
             ytresult += '•🌹Upload: ' + video.ago + '\n⌬━━━━━━━━━━━━⌬\n\n'
    	 	 });    	 	 
    	     await fakethumb(tbuff,ytresult)
			 break  			
    case 'twmp4':
             if (args.length < 1) return fakestatus('Link?')
             lin = args[0]            
             hx.twitter(lin).then(res => {             
             Anu = res.SD
             fto = potogw
             client.sendMessage(from, fto, image, {quoted:mek, caption:`*𝗧𝗪𝗜𝗧𝗧𝗘𝗥 𝗠𝗣4*
•🌹Hd : ${res.HD}
•🌹Sd : ${res.SD}
•🌹Audio : ${res.audio}

Please wait, the media file is being sent it may take a few minutes`, thumbnail:potofake, contextInfo:{forwardingScore: 989, isForwarded: true}})
             sendMediaURL(from, Anu, 'Done!')
             })
             break
    case 'twmp3':
             if (args.length < 1) return fakestatus('Link?')             
             lin = args[0]             
             hx.twitter(lin).then(async (res) => {           
             Anu = res.SD
             fto = potogw
             client.sendMessage(from, fto, image, {quoted:mek, caption:`*𝗧𝗪𝗜𝗧𝗧𝗘𝗥 𝗠𝗣3*
•🌹Hd : ${res.HD}
•🌹Sd : ${res.SD}
•🌹Audio : ${res.audio}

Please wait, the media file is being sent it may take a few minutes`, thumbnail:potofake, contextInfo:{forwardingScore: 989, isForwarded: true}})
             khs = await getBuffer(Anu)
             client.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'clientgan.mp3', quoted:mek, ptt:true})
             })            
             break 
   case 'brainly':
			if (args.length < 1) return fakestatus('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			client.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            }) 
			break
   case 'anime':
            fakestatus(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            client.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });            
            break			
    case 'image':
            if (args.length < 1) return fakestatus('Masukan teks!')
            const gimg = args.join('');
            fakestatus(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            client.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break

    case 'video':
            if (args.length === 0) return fakestatus(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            fakestatus(mess.wait)
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
            try {
            ytv(mulaikah)
            .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
            .then(async (a) => {
            if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*YT VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For the duration of more than the limit is presented in the form of a link_`)
            const captions = `*YT VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Please wait, the media file is being sent it may take a few minutes_`
            sendMediaURL(from, thumb, captions)
            await sendMediaURL(from, dl_link).catch(() => fakestatus('error'))
            })                
            })
            } catch (err) {
            fakestatus(mess.error.api)
            }
            break              			
    case 'playstore':
           if (args.length < 1) return fakestatus(`Example :\n${prefix}playstore termux`)
           quer = args.join(" ")
           hx.playstore(quer).then(res => {
           teks = '```「 Play Store 」```'
           for (let i of res) {
           teks += `\n\n${i.name}\n`
           teks += `${i.link}\n`
           teks += `${i.developer}`
           }
           fakestatus(teks)
           })
           break                           
    case 'herolist':
           await herolist().then((ress) => {
           let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
           for (var i = 0; i < ress.hero.length; i++) {
           listt += '-  ' + ress.hero[i] + '\n'
           }
           fakestatus(listt)})
           break
    case 'herodetail':
           res = await herodetails(body.slice(12))
           her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
           fakestatus(her)
           break
     case 'google':
     case 'googlesearch':
     case 'ggs':
           if (args.length < 1) return fakestatus('Yang mau di cari apaan?')
           teks = args.join(' ')
           fakestatus(mess.wait)
           res = await ggs({'query' : `${teks}`})
           kant = ``
           for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
           }
           var akhir = kant.trim()
           fakestatus(akhir)
           break
    case 'wiki':
            if (args.length < 1) return fakestatus(' Yang Mau Di Cari Apa? ')
           teks = args.join(' ')
           res = await wikiSearch(teks).catch(e => {
           return fakestatus('[ ! ] Error Hasil Tidak Ditemukan') }) 
           result = `*Judul :* ${res[0].judul}
           *Wiki :* ${res[0].wiki}`
           sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
           fakestatus(result)})
           break                                                                                                                                                                                                                                                                                                  
    case 'lirik':
            if(!q) return fakestatus('lagu apa?')
           let song = await hx.lirik(q)
           sendMediaURL(from,song.thumb,song.lirik)
           break
    case 'lirik2':
           if (args.length < 1) return fakestatus('Judulnya?')
           fakestatus(mess.wait)
           teks = body.slice(7)
           lirikLagu(teks).then((res) => {
           let lirik = `${res[0].result}`
           fakestatus(lirik)})
           break
    case 'otaku':
           if(!q) return fakestatus('judul animenya?')
           let anime = await hx.otakudesu(q)
           rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
           ram = await getBuffer(anime.img)
           client.sendMessage(from,ram,image,{quoted:bal,caption:rem})
           break
    case 'komiku':
           if(!q) return fakestatus(`judulnya?\n${prefix}komiku mao gakuin`)
           let komik = await hx.komiku(q)
           result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
           sendMediaURL(from, komik.image,result)
            break
    case 'chara':
           if(!q) return fakestatus(`gambar apa?\n${prefix}chara nino`)
           let im = await hx.chara(q)
           let acak = im[Math.floor(Math.random() * im.length)]
           let li = await getBuffer(acak)
           await client.sendMessage(from,li,image,{quoted: ftroli})
           break  
      case 'happymod': 
           if (args.length == 0) return fakestatus(`Example: ${prefix + command} free fire`)
           query = args.join(" ")
           get_result = await fetchJson(`https://api.dapuhy.ga/api/search/happymod?query=${query}&apikey=${dapuhuy}`, {method: 'get'})
           kontol = get_result.result
           ini_txt = "Result : \n"
           for (var x of kontol) {
           ini_txt += `${x.title}\n`
           ini_txt += `${x.url}\n\n`
           }
           fakestatus(ini_txt)
           break   
     case 'klikmanga': 
           if (args.length == 0) return fakestatus(`Example: ${prefix + command} naruto`)
           query = args.join(" ")
           get_result = await fetchJson(`https://api.dapuhy.ga/api/manga/klikmanga?query=${query}&apikey=${dapuhuy}`, {method: 'get'})
           kontol = get_result.result
           ini_txt = "Result : \n"
           for (var x of kontol) {
           ini_txt += `${x.title}\n`
           ini_txt += `${x.genre}\n`
           ini_txt += `${x.author}\n`
           ini_txt += `${x.status}\n`
           ini_txt += `${x.release}\n`
           ini_txt += `${x.desc}\n`
           ini_txt += `${x.url}\n\n`
           }
           fakestatus(ini_txt)
           break   
      case 'kiryu': 
           if (args.length == 0) return fakestatus(`Example: ${prefix + command} naruto`)
           query = args.join(" ")
           get_result = await fetchJson(`https://api.dapuhy.ga/api/manga/kiryuu?query=${query}&apikey=${dapuhuy}`, {method: 'get'})
           kontol = get_result.result
           ini_txt = "Result : \n"
           for (var x of kontol) {
           ini_txt += `${x.title}\n`
           ini_txt += `${x.episode}\n`
           ini_txt += `${x.rating}\n`
           ini_txt += `${x.url}\n\n`
           }
           fakestatus(ini_txt)
           break   
      case 'animeplanet': 
           if (args.length == 0) return fakestatus(`Example: ${prefix + command} naruto`)
           query = args.join(" ")
           get_result = await fetchJson(`https://api.dapuhy.ga/api/manga/animeplanet?query=${query}&apikey=${dapuhuy}`, {method: 'get'})
           kontol = get_result.result
           ini_txt = "Result : \n"
           for (var x of kontol) {
           ini_txt += `${x.title}\n`
           ini_txt += `${x.url}\n\n`
           }
           fakestatus(ini_txt)
           break 
    case 'wanted':    
            if (args.length < 2) return fakestatus(`Example :\n${prefix}wanted https://telegra.ph/file/af4038f3cd8db3831aa28.jpg|Marcel|Cyan`)
            var cv = body.slice(12)
            var uri = cv.split("|")[0];
            var quer = cv.split("|")[1];
            var quer1 = cv.split("|")[2];
            fakestatus(mess.wait)
            pWanted(uri, quer, quer1).then(res => {
            sendMediaURL(from, `${res.url}`, 'Dah jadi ngab')})  
            break                               
    case 'naruto':
			if (!q) return fakestatus('Teksnya Lord?')
			fakestatus(mess.wait)
			pNaruto(`${q}`).then(res => {
			sendMediaURL(from, res.url, q)})
			break									
	case 'shadow':
			if (!q) return fakestatus('Teksnya Lord?')
			fakestatus(mess.wait)
			pShadow(`${q}`).then(res => {
			sendMediaURL(from, res.url)})
			break									
	case 'romantic':
			if (!q) return fakestatus('Teksnya Lord?')
			fakestatus(mess.wait)
			pRomantic(`${q}`).then(res => {
			sendMediaURL(from, res.url)})
			break									
	case 'smoke':
			if (!q) return fakestatus('Teksnya Lord?')
			fakestatus(mess.wait)
			pSmoke(`${q}`).then(res => {
			sendMediaURL(from, res.url)})
			break									
	case 'burnpaper':
			if (!q) return fakestatus('Teksnya Lord?')
			fakestatus(mess.wait)
			pBurnPapper(`${q}`).then(res => {
			sendMediaURL(from, res.url)})
	    	break							
	case 'lovemsg':
			if (!q) return fakestatus('Teksnya Lord?')
			fakestatus(mess.wait)
			pLoveMsg(`${q}`).then(res => {
			sendMediaURL(from, res.url)})
			break									
	case 'grass':
			if (!q) return fakestatus('Teksnya Lord?')
			fakestatus(mess.wait)
			pMsgGrass(`${q}`).then(res => {
			sendMediaURL(from, res.url)})
			break									
	case 'doubleheart':
			if (!q) return fakestatus('teksnya Lord?')
			fakestatus(mess.wait)
			pDoubleHeart(`${q}`).then(res => {
			sendMediaURL(from, res.url)})
			break									
	case 'coffecup':
			if (!q) return fakestatus('Teksnya Lord?')
			fakestatus(mess.wait)
			pCoffeCup(`${q}`).then(res => {
			sendMediaURL(from, res.url)})
			break									
	case 'lovetext':
			if (!q) return fakestatus('Teksnya Lord?')
			fakestatus(mess.wait)
			pLoveText(`${q}`).then(res => {
			sendMediaURL(from, res.url)})
			break									
	case 'butterfly':
			if (!q) return fakestatus('Teksnya Lord?')
			fakestatus(mess.wait)
		    pButterfly(`${q}`).then(res => {
			sendMediaURL(from, res.url)})
			break                                    
    case 'randomloli':
             fakestatus(mess.wait)
             aku = (`https://hardianto-chan.herokuapp.com/api/anime/loli?apikey=hardianto`)
             kon = await getBuffer(aku)
             sendButImage(from, `Nih Kak`, `${footerr}`, kon, [{buttonId: `${prefix+command}`,buttonText: {displayText: `➡️Next`,},type: 1}])                
             break                                                                                                                                                                                                                                   	                  
default:
if (fs.existsSync(`./media/${from}.json`)) {
gelutSkuy = setGelud(`${from}`)
if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
if (gelutSkuy.status) return fakestatus(`Game telah dimulai sebelumnya!`)
gelutSkuy.status = true
rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
winR = rand0m[Math.floor(Math.random() * rand0m.length)]
fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
client.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
fs.unlinkSync("./media/" + from + ".json");
} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
client.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: mek, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
fs.unlinkSync("./media/" + from + ".json");
}
}
if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}`
client.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
client.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return fakestatus('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return fakestatus('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return fakestatus('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
client.sendMessage(from, ucapan1, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
fakestatus(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
client.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return fakestatus('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return fakestatus('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return fakestatus('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
client.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
fakestatus(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
client.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return fakestatus(`${err}`)
if (stdout) {
fakestatus(stdout)
}
}
)
}
if (budy.startsWith('>')){
if (!mek.key.fromMe && !isOwner) return
try {
return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
fakestatus(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))}
}
}
	   