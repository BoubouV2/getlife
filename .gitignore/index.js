const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("GetLife, !help");
    console.log("Je suis bien présent :)");
});

bot.login(process.env.TOKEN);
