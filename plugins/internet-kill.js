import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/kill')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, 'OMAE WA MOU SHINDEIRU!', author, json.url, [['kill', `${usedPrefix}kill`]], m)
}
handler.help = ['kill']
handler.tags = ['internet']
handler.command = /^(kill)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
