const {
	MessageType,
	Presence
} = require("@adiwajshing/baileys");
const fs = require("fs");
const encodeUrl = require('encodeurl')
const PhoneNumber = require('awesome-phonenumber');
const moment = require("moment-timezone");

module.exports = async(client, anj, welcome, color, getBuffer, getGroupAdmins) => {
        const sender = client.user.jid
        const isWelcome = welcome.includes(anj.jid)
        const groupMet = await client.groupMetadata(anj.jid);
        const groupMembers = groupMet.participants;
        const groupAdmins = getGroupAdmins(groupMembers);
        const mdata = await client.groupMetadata(anj.jid)
        const conts = client.contacts[anj.participants[0]] || { notify: jid.replace(/@.+/, '') }
	
        const pushname = conts.notify || conts.vname || conts.name || PhoneNumber('+' + anj.participants[0].replace('@s.whatsapp.net', '')).getNumber('international')

 	    const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anj.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;pemuda;;;\nFN:pemuda\nitem1.TEL;waid=6285721599053:6285721599053\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}    	
        taguser = `${anj.participants[0].split("@")[0]}`
        if (!isWelcome) return

        try {	        
		console.log(anj)
		mem = anj.participants[0]
        if (anj.action == "add" && mem.includes(client.user.jid)) {
        client.sendMessage(anj.jid, "Terima Kasih Telah Mengundangkan bot ini ke grup mu Silahkan Ketik #menu untuk melihat fitur bot ini yang sangatt berguna untuk kalian buat sticker🌚\n\n*Join link group di bawah ini untuk informasi Bot Marcel*\n*○* https://chat.whatsapp.com/E1Z7l6gJ1QxJuNN8yuScp1", "conversation");
        }
		if (anj.action == 'add') {
		num = anj.participants[0]	
		if (!welcome.includes(anj.jid)) return			
        try {
            pp_user = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
        } catch (e) {
            pp_user = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
        }        			
        memeg = mdata.participants.length;
        buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${pushname}&descriminator=${groupMembers.length}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.ibb.co/TmpPqx1/c5e64e8ccfc3.jpg`)
		buttons = [{ buttonId: `98`, buttonText: { displayText: "Selamat Datang !" }, type: 1 }]
        imageMsg = (
        await client.prepareMessageMedia(buff, "imageMessage", {
        thumbnail: buff,
})
        ).imageMessage;
        buttonsMessage = {        
        contentText: `*── 「 WELCOME 」 ──*\n\nHai kak @${taguser}\nSelamat Datang Budayakan Baca Deskripsi Dan Patuhi Peraturan Grup☕`,
        footerText: "Welcome Message",
        imageMessage: imageMsg,
        buttons: buttons,
        headerType: 4,
        }
        prep = await client.prepareMessageFromContent(
        mdata.id, { buttonsMessage },{ contextInfo:{"mentionedJid": [taguser + '@s.whatsapp.net', sender]}})      
        client.relayWAMessage(prep)  
        } else if (anj.action === 'remove'){  
        if (!welcome.includes(anj.jid)) return 				             		
		num = anj.participants[0]
        try {
            pp_user2 = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
        } catch (e) {
            pp_user2 = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
        }       				
	    memeg = mdata.participants.length;
        buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${pushname}&descriminator=${groupMembers.length}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user2}&bg=https://i.ibb.co/TmpPqx1/c5e64e8ccfc3.jpg`);			
	    buttons = [{ buttonId: `98`, buttonText: { displayText: "Good Bye !" }, type: 1 },]
        imageMsg = (
        await client.prepareMessageMedia(buff, "imageMessage", {
        thumbnail: buff,
})
        ).imageMessage;
        buttonsMessage = {
        contentText: `Sayonara @${taguser}👋🏻`,
        footerText: "Leave Message",
        imageMessage: imageMsg,
        buttons: buttons,
        headerType: 4,
        }
        prep = await client.prepareMessageFromContent(
        mdata.id, { buttonsMessage },{ contextInfo:{"mentionedJid": [taguser + '@s.whatsapp.net', sender]}})                     
        client.relayWAMessage(prep) 
        }
		} catch (e) {
        console.log('Error : %s', color(e, 'red'))
}       
		
}	