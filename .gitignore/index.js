const Discord = require("discord.js");
var client = new Discord.Client();
var prefix = "!";
var footer = ("Boubouv2")
var footer2 = ('https://cdn.discordapp.com/attachments/414476552596619264/548133022029840384/Lgog_Offi_vide.png')
var color = ("0x78eeff")

client.on('message', message => {
    var time = message.createdAt.toString().split(" ");
    console.log(message.guild.name + ' | ' +  message.channel.name + ' > [' + time[4] + '] ' + message.author.tag + ": " + message.content);
});

client.on('ready', function () {

    var games = [
        "!help | GetLife",
        "Merci Zid !",
    ]
    client.user.setActivity(setInterval(function() {
    client.user.setActivity(games[Math.floor(Math.random() * games.length)], {url:"https://www.twitch.tv/deax_licorne", type: "STREAMING"})}, 10000))

    console.log("GetLife - Connecté");

});

client.on('message', message => {
    
    var ping = client.ping;
    var member = message.member;
    var users = message.guild.memberCount
    var args = message.content.split(' ');

    if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
        .setTitle("<:logoPNG:548133022029840384> | Ci-dessous, les nombreuses commandes de GetLife.")
        .addField("**__Commandes utiles:__**",`[${prefix}help](https://discord.gg/P3sKfsp) - Liste des commandes du bot. \n[${prefix}ping](https://discord.gg/P3sKfsp) - Ping de GetLife. \n[${prefix}users](https://discord.gg/P3sKfsp). Voir le nombre de personne sur le discord. \n[${prefix}invite](https://discord.gg/P3sKfsp). Invitation pour le discord GetLife. \n[${prefix}deaxlicorne](https://discord.gg/P3sKfsp). Lien twitch de notre Amie Deax. \n[${prefix}partenaire](https://discord.gg/P3sKfsp). Liste des partenaires et lien du formulaire.`)
        .addField("**__Commandes de modération:__**",`[${prefix}kick @user raison](https://discord.gg/P3sKfsp) - Exclure un utilisateur n'ayant pas respecter le règlement. \n[${prefix}ban @user raison](https://discord.gg/P3sKfsp) - Bannir un utilisateur dans un cas extrême.\n[${prefix}clear (nombre)](https://discord.gg/P3sKfsp) - Supprime un nombre x de message dans un salon. \n[${prefix}mute @user raison](https://discord.gg/P3sKfsp) - Mute un utilisateur n'ayant pas respecter le règlement.`)
        .setColor(color)
        .setTimestamp()
        .setFooter(footer, footer2)
        message.delete() 
    message.channel.send(embed);
    }
  
    if (message.content === prefix + "ping"){
        if(ping <= 99) {
             var embed = new Discord.RichEmbed()
             .addField(`<:logoPNG:548133022029840384> | Latence du robot`, `:hourglass: | ${Math.round(client.ping)} ms.`)
             .setColor("0x7cc576")
             .setTimestamp()
             .setFooter(footer, footer2)
             message.channel.send(embed);
        } else if(ping <= 200) {
             var embed = new Discord.RichEmbed()
             .addField(`<:logoPNG:548133022029840384> | Latence du robot`, `:hourglass: | ${Math.round(client.ping)} ms.`)
             .setColor("0xffe200")
             .setTimestamp()
             .setFooter(footer, footer2)
             message.channel.send(embed);
        } else if(ping <= 999) {
             var embed = new Discord.RichEmbed()
             .addField(`<:logoPNG:548133022029840384> | Latence du robot`, `:hourglass_flowing_sand: | ${Math.round(client.ping)} ms.`)
             .setColor("0xdb3328")
             .setTimestamp()
             .setFooter(footer, footer2)
             message.channel.send(embed);
        }
    }
    if (message.content === prefix + "users"){
         if(users <= 100) {
             var embed = new Discord.RichEmbed()
             .addField("<:logoPNG:548133022029840384> | Membres du serveur", `👥 | ${users - getBotCount(member.guild)}  membres.`)
             .setColor("0xdb3328")
             .setTimestamp()
             .setFooter(footer, footer2)
             message.channel.send(embed);
        } else if(users <= 500) {
             var embed = new Discord.RichEmbed()
             .addField("<:logoPNG:548133022029840384> | Membres du serveur", `👥 |  ${users - getBotCount(member.guild)}  membres.`)
             .setColor("0xffe200")
             .setTimestamp()
             .setFooter(footer, footer2)
             message.channel.send(embed);
        } else if(users >= 999) {
             var embed = new Discord.RichEmbed()
             .addField("<:logoPNG:548133022029840384> | Membres du serveur", `👥 | ${users - getBotCount(member.guild)} +  membres.`)
             .setColor("0x7cc576")
             .setTimestamp()
             .setFooter(footer, footer2)
             message.channel.send(embed);
        }
        function getBotCount(guild) {
            return guild.members.filter(member => { return member.user.bot }).size;
        }
    }

    if(message.content.startsWith(prefix + "clear")){
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
               var ClearEmbed = new Discord.RichEmbed()
               .setDescription("❗ | Vous n'avez pas la permission !")
               .setColor(color)
               .setTimestamp()
               .setFooter(footer, footer2)
               message.delete()
            return message.channel.send(ClearEmbed)};
            var ClearrEmbed = new Discord.RichEmbed()
              .setDescription("❓ | Vous devez préciser le nombre de message à supprimer.")
              .setColor(color)
              .setTimestamp()
              .setFooter(footer, footer2)
              message.delete()
           let args = message.content.split(" ").slice(1);
           if(!args[0]) return message.channel.send(ClearrEmbed);
            message.channel.bulkDelete(args[0]).then(() => {
                var ClearEmbed = new Discord.RichEmbed()
                .addField(`<:logoPNG:548133022029840384> | Nombre de message supprimé`,`🗑 | ${args[0]} messages.`)
                .setColor(color)
                .setTimestamp()
                .setFooter(footer, footer2)
                message.delete()
                message.channel.send(ClearEmbed);
           });
        }
  
      if (message.content === prefix + "invite"){
            var embed = new Discord.RichEmbed()
           .addField("<:logoPNG:548133022029840384> | Lien d'invitation", "📨 | https://discord.gg/P3sKfsp")
           .setColor(color)
           .setTimestamp()
           .setFooter(footer, footer2)
           message.delete()
           message.channel.send(embed);
        }
        if (message.content == prefix + "deaxlicorne"){
            var EmbedTwitter = new Discord.RichEmbed()
            .addField("<:logoPNG:548133022029840384> | Lien de Deax_Licorne", `📺 | https://www.twitch.tv/deax_licorne`)
            .setColor(color)
            .setTimestamp()
            .setFooter(footer, footer2)
            message.delete()
            message.channel.send(EmbedTwitter)
        }  
        if (message.content == prefix + "partenaires"){
            var EmbedTwitter = new Discord.RichEmbed()
            .addField("<:logoPNG:548133022029840384> | Lien de partenariat", `📑 | https://goo.gl/forms/ghn1D2Ff5mABCciq2a`)
            .setTimestamp()
            .setFooter(footer, footer2)
            message.delete()
            message.channel.send(EmbedTwitter)
        }
});

client.on('message', async message => {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.length).split(/ +/);
    command = args.shift().toLowerCase();


    if (message.content.startsWith(`${prefix}mute`)) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            var MuteEmbed = new Discord.RichEmbed()
            .setDescription("❗ | Vous n'avez pas la permission !")
            .setColor(color)
            .setTimestamp()
            .setFooter(footer, footer2)
            message.delete()
            return message.channel.send(MuteEmbed);
        } else {
            let userToMute = message.mentions.users.first();
            if (!userToMute) {
                var MuteEmbed = new Discord.RichEmbed()
                .setDescription("❓ | Merci de mentionner l'utilisateur à mute")
                .setColor(color)
                .setTimestamp()
                .setFooter(footer, footer2)
                message.delete()
                return message.channel.send(MuteEmbed);
            } else {
                let role = message.guild.roles.find(r => r.name === "🔇 Mute");
                if (!role) {
                    try {
                        role = await message.guild.createRole({
                            name: "🔇 Mute",
                            color: "#c4c1c1",
                            permissions: []
                        });
                        message.guild.channels.forEach(async (channel) => {
                            await channel.overwritePermissions(role, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS: false
                            });
                        });
                    } catch (e) {
                        console.log(e.stack);
                    }
                }
                const memberToMute = message.guild.member(userToMute) || await message.guild.fetchMember(userToMute);
                await memberToMute.addRole(role);
                var MuteEmbed = new Discord.RichEmbed()
                .addField(`<:logoPNG:548133022029840384> | Mute effectué`,`${message.mentions.users.first()} a été mute par <@` + message.member.id + `>.`)
                .setColor(color)
                .setTimestamp()
                .setFooter(footer, footer2)
                message.delete()
                message.channel.send(MuteEmbed); 
                return;
            }
        }
    }

    if (message.content.startsWith(`${prefix}unmute`)) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            var MuteEmbed = new Discord.RichEmbed()
            .setDescription("❗ | Vous n'avez pas la permission !")
            .setColor(color)
            .setTimestamp()
            .setFooter(footer, footer2)
            message.delete()
            return message.channel.send(MuteEmbed);
        } else {
            let userToMute = message.mentions.users.first();
            if (!userToMute) {
                var MuteEmbed = new Discord.RichEmbed()
                .setDescription("❓ | Merci de mentionner l'utilisateur à unmute")
                .setColor(color)
                .setTimestamp()
                .setFooter(footer, footer2)
                message.delete()
                return message.channel.send(MuteEmbed);
            } else {
                let role = message.guild.roles.find(r => r.name === "🔇 Mute");

                const memberToMute = message.guild.member(userToMute) || await message.guild.fetchMember(userToMute);
                
                await memberToMute.removeRole(role);
                var MuteEmbed = new Discord.RichEmbed()
                .addField(`<:logoPNG:548133022029840384> | Unmute effectué `,`${message.mentions.users.first()} a été demute par <@` + message.member.id + `>.`)
                .setColor(color)
                .setTimestamp()
                .setFooter(footer, footer2)
                message.delete()
                message.channel.send(MuteEmbed);
                return;
           }                                                              
        }
    }

    if(message.content.startsWith(prefix + "ban")){
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            var BanEmbed = new Discord.RichEmbed()
                .setDescription(`❗ | Vous n'avez pas la permission !`)
                .setColor(color)
                .setTimestamp()
                .setFooter(footer, footer2)
                message.delete()
            return message.channel.send(BanEmbed).catch((error) => { console.log(error.message) })
        }
            
        let member = message.mentions.members.first();
        if(!member) {
          var BanEmbed = new Discord.RichEmbed()
              .setDescription(`❓ | Merci de mentionner l'utilisateur à bannir`)
              .setColor(color)
              .setTimestamp()
              .setFooter(footer, footer2)
          message.delete()
          return message.channel.send(BanEmbed).catch((error) => { console.log(error.message) });
        }
        if(!member.bannable) {
                var EmbedBan = new Discord.RichEmbed()
                .setDescription(`❓ | Je ne peux pas interdire cet utilisateur! Ont-ils un rôle plus élevé? Ai-je des droits BAN_MEMBERS?`)
                .setColor(color)
                .setTimestamp()
                .setFooter(footer, footer2)
            message.delete()
                return message.channel.send(EmbedBan).catch((error) => { console.log(error.message) });
        }
    
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "Aucune raison fournie.";
        
        member.ban(reason)
          .catch(error => message.reply(` ❓ | Désolé ${message.author} Je ne peux pas interdire à cause de: ${error}`));
          message.channel.send(new Discord.RichEmbed()
          .addField(`<:logoPNG:548133022029840384> | Ban effectué`, `${message.mentions.members.first()} a été banni par <@` + message.member.id + `>. car: ${reason}`)
          .setColor(color)
          .setTimestamp()
          .setFooter(footer, footer2)).catch((error) => { console.log(error.message) });
    }     
    
    if(message.content.startsWith(prefix + "kick")){
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            var KickEmbed = new Discord.RichEmbed()
                .setDescription(`❗ | Vous n'avez pas la permission !`)
                .setColor(color)
                .setTimestamp()
                .setFooter(footer, footer2)
                message.delete()
           return message.reply(KickEmbed).catch(console.log("permission = null"));
       }
        if(message.mentions.users.size === 0) {
            var KickEmbed = new Discord.RichEmbed()
              .setDescription(`❓ | Merci de mentionner l'utilisateur à expluser`)
              .setColor(color)
              .setTimestamp()
              .setFooter(footer, footer2)
          message.delete()
           return message.reply(KickEmbed).catch(console.log("mention = null"));
       }
        let kickMember = message.guild.member(message.mentions.users.first());
         if(!kickMember) {
            var EmbedKick = new Discord.RichEmbed()
            .setDescription(` ❓ | Cet utilisateur est introuvable ou impossible à expluser.`)
            .setColor(color)
            .setTimestamp()
            .setFooter(footer, footer2)
            message.delete()
              return message.reply(EmbedKick).catch(console.log("perm = null"));
        }
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            var EmbedKick = new Discord.RichEmbed()
            .setDescription(` ❓ | Je n'ai pas la permission KICK_MEMBERS pour faire ceci.`)
            .setColor(color)
            .setTimestamp()
            .setFooter(footer, footer2)
            message.delete()
            return message.reply(EmbedKick).catch(console.log("KICK_MEMBERS = null"));
        }
         kickMember.kick().then(member => {
            var EmbedKick = new Discord.RichEmbed()
            .addField(`<:logoPNG:548133022029840384> | Kick effectué`, `**${message.mentions.members.first()}** a été expulsé du discord par <@` + message.member.id + `>.`)
            .setColor(color)
            .setTimestamp()
            .setFooter(footer, footer2)
            message.delete()
        message.channel.send(EmbedKick).catch(console.log("Expulsion reussie"))});
    }

});

client.on('guildMemberAdd', member => {
    member.addRole(member.guild.roles.find("name", ">! Member !<"));
    var MemberJoinEmbed = new Discord.RichEmbed()
        .addField(`Nous sommes désormais **${member.guild.memberCount}** sur le serveur :white_check_mark:`,`Bienvenue à toi, ${member.displayName} sur le Discord **${member.guild.name}.**\n`)
        .setColor(color)
        .setTimestamp()
        .setFooter(footer, footer2)
    member.guild.channels.find("name","austel-chat").send(MemberJoinEmbed);
});

client.on("guildMemberRemove", member => {
    var MemberLeaveEmbed = new Discord.RichEmbed()
        .addField(`Nous sommes désormais **${member.guild.memberCount}** sur le serveur :x:`,`${member.displayName} a quitté **${member.guild.name} :x:**\n`)
        .setColor("0xFF0000")
        .setTimestamp()
        .setFooter(footer, footer2)
  member.guild.channels.find("name", "austel-chat").send(MemberLeaveEmbed);
});

client.login(process.env.TOKEN);
