"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "intro", reaction: "💀", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*🤠* 👋 \n\n ' + " 💀 HELLOW FRIEND DON'T RUN THIS IS YESSER MD THE SIMPLE BOT CREATED BY 🤠 YESSERTECH 🤠 👉 SUPPORT amY YOUTUBE CHANNEL sub+like+comment 👉https://www.youtube.com/@Yesserboy92 🌛 THANKS";
    let d = '                                                                           𝐏yessertech is typing.......🤠✨';
    let varmess = z + d;
    var mp4 ='https://files.catbox.moe/j3cnwt.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
