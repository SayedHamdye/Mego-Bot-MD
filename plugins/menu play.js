let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/4a717e7678443cb885628.mp4'
  let { name } = global.db.data.users[who]
  m.react('🎮')
let str = `                  ✥━─━⌬ 𝑮𝒐𝒌𝒖_𝒃𝒐𝒕 ⌬━─━✥
【..≼قــســم الترفيه≽..】
                   ⋄━───═◞⬪⋇⬪◟═───━⋄
❐╎❌❯ .اكس_او⌉
❐╎📛❯ .كنسل⌉
❐╎🎯❯ .تحدي⌉
❐╎⚔️❯ .حرب⌉
❐╎❔❯ .احزر⌉
❐╎🎰❯ .حظ⌉
❐╎🧔🏻❯ .جميل⌉
❐╎👋🏻❯ .صفع⌉
❐╎🙌🏻❯ .طبطبه⌉
❐╎👦🏻❯ .ورع⌉
❐╎🤪❯ .اهبل⌉
❐╎🐑❯ .خروف⌉
❐╎🗣❯ .انطق⌉
❐╎📊❯ .نسبه⌉
❐╎👥❯ .لو⌉
❐╎🍀❯ .تويت⌉
❐╎👑❯ .تاج⌉
❐╎❓❯ .سؤال⌉
❐╎🎤❯ .اسئلني⌉
❐╎📃❯  كت⌉
❐╎♟️❯ .شطرنج⌉
❐╎🗡❯ .سلاحي
❐╎🏁❯ .علم⌉
❐╎🧺❯ .نصايح⌉
❐╎👁❯ .عين⌉
❐╎🙃❯ .عكس⌉
❐╎✨❯ .تويت⌉
❐╎👰🏻❯ .مراتي⌉
❐╎🧩❯ .فزوره⌉
❐╎🔠❯ .حروف⌉
❐╎💁🏻‍♂️❯ .شخصيه⌉
❐╎😕❯ .احرجني⌉
❐╎👤❯ .خمن⌉
❐╎🔧❯ .فكك⌉
❐╎🧞‍♂️❯ .المار⌉
❐╎🕋❯ .دين⌉
❐╎🍁❯ .ايمو⌉
❐╎⚽❯ .كوره⌉
❐╎🧮❯ .رياضيات⌉
❐╎🎧❯ .تخمين⌉
❐╎🎮❯ .العاب⌉
❐╎😁❯ .اموجي⌉
❐╎🤹‍♂️❯ .تحداني⌉
❐╎⛹️‍♂️❯ .رياضه⌉
❐╎🧨❯ .فعاليه⌉
❐╎🌍❯ .ثقافه⌉
❐╎🧧❯ .مانغا⌉
❐╎❓❯ .لغز⌉
❐╎💣❯ .متفجرات⌉
❐╎👮🏻‍♂️❯ .بوليس⌉
                    ✥━─━⌬ 𝑮𝒐𝒌𝒖_𝒃𝒐𝒕 ⌬━─━✥
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['الترفيه']

export default handler
