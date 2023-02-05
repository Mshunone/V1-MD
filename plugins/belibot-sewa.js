let fs = require('fs')
let handler = async (m, { conn }) => {
let anu = `
๑━━━═『 Open Sewa Botz 』═━━━๑

╭━━━━「 *SEWA BOTZ* 」
┊⫹⫺ PerBulan : 10k
┊⫹⫺ PerTahun : 75k
┊⫹⫺ Hemat : 3 Bulan = 25k
┊⬡ MAU REQ HARGA SEWA? BISAA                                                      
┊⬡ LANGGANAN 1 THN DPT APA? DPT DISKON PERMANEN 50%
╰═┅═━––––––๑
╭━━━━「 *JADI BOT* 」
┊⫹⫺ PerBulan : 10k
┊⫹⫺ PerTahun : 85k
┊⫹⫺ Hemat : 5 Bulan = 45k
┊⬡ MAU REQ HARGA JADIBOT? BISAA                                               
┊⬡ MAU PUNYA BOT SENDIRI TP GA MAU PUSING 
┊  MASALAH SERVER? DI SINI BISA !!
╰═┅═━––––––๑
   
📮*NOTE* : Tidak melayani sewa bot permanen Tapi Klo mau 250k Gas...
🎗️*GRUP BOT* : 
https://chat.whatsapp.com/GeWPLmclHaVHsF0GymCcJz
wa.me/6283805685278 ( Owner )
`
await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 9999,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: anu,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}// Tambah sendiri kalo mau
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa|belibot|sewabot)$/i

module.exports = handler
