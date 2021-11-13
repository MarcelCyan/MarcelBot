const {
  Presence,
  MessageOptions,
  ChatModification,
  MessageType,  
  ProxyAgent,
  GroupSettingChange,
  mentionedJid
} = require("@adiwajshing/baileys");

module.exports = async(client, anu, welcome, color, bgcolor, brightcolor) => {
        const isWelcome = welcome.includes(anu.jid)
        metdata = await client.groupMetadata(anu.jid)
        const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;pemuda;;;\nFN:pemuda\nitem1.TEL;waid=6285721599053:6285721599053\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}  
        if (!isWelcome) return  	        
        if(anu.announce == 'false'){
        if (!welcome.includes(anu.jid)) return
        teks = `*- [ Group Opened ] -*\n\nHoree.. Group telah dibuka oleh admin\nSekarang semua member bisa mengirim pesan`
        client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
        console.log(color('[ INFO ]'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
} 
   else if(anu.announce == 'true'){
        if (!welcome.includes(anu.jid)) return
        teks = `*- [ Group Closed ] -*\n\nYahh..Group telah ditutup oleh admin\nSekarang hanya admin yang dapat mengirim pesan`
        client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
        console.log(color('[ INFO ]'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
}
   else if(!anu.desc == ''){
        if (!welcome.includes(anu.jid)) return
        tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
        teks = `*- [ Group Description Change ] -*\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
        client.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
        console.log(color('[ INFO ]'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
}
   else if(anu.restrict == 'false'){
        if (!welcome.includes(anu.jid)) return
        teks = `*- [ Group Setting Change ] -*\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
        client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
        console.log(color('[ INFO ]'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
}
   else if(anu.restrict == 'true'){
        if (!welcome.includes(anu.jid)) return
        teks = `*- [ Group Setting Change ] -*\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
        client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
        console.log(color('[ INFO ]'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
   }   
}