import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/bonk')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, 'BONK!!', author, json.url, [['gebuk', `${usedPrefix}gebuk`]], m)
}
handler.help = ['gebuk']
handler.tags = ['internet']
handler.command = /^(gebuk)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
