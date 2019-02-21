const Discord = require("discord.js");

var PREFIX = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("GetLife, !help");
    console.log("Je suis bien présent :)");
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.cleanContent.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "invite":
        message.channel.send("", {
            embed: {
                color: 0xFF0000,
                author: message.author.name,
                title: '',
                fields: [{
                    name: "Lien d'invitation",
                    value: "https://discord.gg/P3sKfsp",
                    inline: false
                }],
                footer: {
                    footer: "Partager ce lien à tous vos amis !",
                },
            }
        });
        break;
    }
});

bot.login(process.env.TOKEN);
