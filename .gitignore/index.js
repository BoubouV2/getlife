const Discord = require("discord.js");
const Util = require('discord.js');
const queue = new Map();
const ytdl = require('ytdl-core');
const fs = require('fs');
const gif = require("gif-search");
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
            .addField("<:logoPNG:548133022029840384> | Lien de partenariat", `📑 | pasencoredispo.getlife`)
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
/////////////////////
///////MUSIQUE///////
/////////////////////
client.on('message', async msg =>{
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    let args = msg.content.split(' ');

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

    if(command === `ping`) {
    let embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setTitle("Pong!!")
    .setDescription(`${client.ping} ms,`)
    .setFooter(`Requested by | ${msg.author.tag}`);
    msg.delete().catch(O_o=>{})
    msg.channel.send(embed);
    }
});
/////////////////////////
////////////////////////
//////////////////////
client.on('message', async msg =>{
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    let args = msg.content.split(' ');

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

    if(command === `avatar`){
	if(msg.channel.type === 'dm') return msg.channel.send("Non Non!! vous ne pouvez pas utiliser la commande d'avatar dans les DM (:")
        let mentions = msg.mentions.members.first()
        if(!mentions) {
          let sicon = msg.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(msg.author.avatarURL)
          .setColor("#5074b3")
          msg.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#5074b3")
          .setImage(sicon)
          msg.channel.send({embed})
        }
    };
});
/////////////////////////
////////////////////////
//////////////////////
/////////////////////////
////////////////////////
//////////////////////

/////////////////////////
////////////////////////
//////////////////////
/////////////////////////
////////////////////////
//////////////////////
client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
    
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
        
        if (!voiceChannel) return msg.channel.send("Je ne vous vois dans aucun canal vocal!");
        
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        
        if (!permissions.has('CONNECT')) {

			return msg.channel.send("Je n'ai pas assez d'autorisations pour rejoindre votre canal vocal!");
        }
        
		if (!permissions.has('SPEAK')) {

			return msg.channel.send("Je n'ai pas assez d'autorisations pour parler dans votre canal vocal!");
		}

		if (!permissions.has('EMBED_LINKS')) {

			return msg.channel.sendMessage("Je n'ai pas assez d'autorisations pour insérer une URL!")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

			const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            

			for (const video of Object.values(videos)) {
                
                const video2 = await youtube.getVideoByID(video.id); 
                await handleVideo(video2, msg, voiceChannel, true); 
            }
			return msg.channel.send(`**${playlist.title}**, Just added to the queue!`);
		} else {

			try {

                var video = await youtube.getVideo(url);
                
			} catch (error) {
				try {

					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setTitle(":mag_right:  Résultats de recherche YouTube:")
                    .setDescription(`
                    ${videos.map(video2 => `${++index}. **${video2.title}**`).join('\n')}`)
                    
					.setColor("#f7abab")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
/////////////////					
					try {

						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('Personne ne répond à un numéro!!');
                    }
                    
					const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    
				} catch (err) {

					console.error(err);
					return msg.channel.send("Je n'ai trouvé aucun résultat!");
				}
			}

            return handleVideo(video, msg, voiceChannel);
            
        }
        
	} else if (command === `skip`) {

		if (!msg.member.voiceChannel) return msg.channel.send("Vous devez être dans un canal vocal pour exécuter les commandes de musique!");
        if (!serverQueue) return msg.channel.send("Il n'y a pas de file d'attente à sauter!!");

		serverQueue.connection.dispatcher.end('Ok, jé skip!');
        return undefined;
        
	} else if (command === `stop`) {

		if (!msg.member.voiceChannel) return msg.channel.send("Vous devez être dans un canal vocal pour exécuter les commandes de musique!");
        if (!serverQueue) return msg.channel.send("Il n'y a pas de file d'attente à arrêter !!");
        
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Ok, arrêté et déconnecté de votre canal vocal');
        return undefined;
        
	} else if (command === `vol`) {

		if (!msg.member.voiceChannel) return msg.channel.send("Vous devez être dans un canal vocal pour exécuter les commandes de musique!");
		if (!serverQueue) return msg.channel.send('Vous ne pouvez utiliser cette commande que pendant la lecture de la musique!');
        if (!args[1]) return msg.channel.send(`The bot volume is **${serverQueue.volume}**`);
        
		serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
        
        return msg.channel.send(`Volume Now is **${args[1]}**`);

	} else if (command === `np`) {

		if (!serverQueue) return msg.channel.send('Il ny a pas de file dattente!');
		const embedNP = new Discord.RichEmbed()
	    .setDescription(`Now playing **${serverQueue.songs[0].title}**`)
        return msg.channel.sendEmbed(embedNP);
        
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('Il ny a pas de file dattente!!');
		let index = 0;
//	//	//
		const embedqu = new Discord.RichEmbed()
        .setTitle("The Queue Songs :")
        .setDescription(`
        ${serverQueue.songs.map(song => `${++index}. **${song.title}**`).join('\n')}
**Now playing :** **${serverQueue.songs[0].title}**`)
        .setColor("#f7abab")
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('Ok, paused');
		}
		return msg.channel.send('There is no Queue to Pause!');
	} else if (command === "resume") {

		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
            return msg.channel.send('Ok, resumed!');
            
		}
		return msg.channel.send('Queue is empty!');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	

	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}!`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`Can't join this channel: ${error}!`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`**${song.title}**, just added to the queue! `);
	} 
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Le flux ne génère pas assez rapidement.') console.log('Chanson terminée.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`**${song.title}**, is now playing!`);
}


client.on('message', message => {
    if (message.content === 'help') {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle('**Les ordres du...**')
        .setDescription('**برفكس البوت (!)**')
        .addField('play', 'Jouer une chanson')
        .addField('join', 'Entrez votre codec audio')
        .addField('disconnect', 'Quittez votre podcast audio')
        .addField('skip', 'Passer la chanson')
        .addField('pause', 'Mettre en pause la chanson')
        .addField('resume', 'Terminez la chanson')
        .addField('queue', 'Afficher la playlist')
        .addField('np', 'Afficher la chanson que vous jouez actuellement')
        .setFooter('(general_commands) Afficher les commandes générales')
      message.channel.send(helpEmbed);
    }
});

client.on('message', message => {
    if (message.content === 'general_commands') {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle('**أوامر عامة...**')
        .addField('avatar', "Avatar de la personne désirée")
        .addField('gif', 'Trouvez le Jeff que vous demandez')
        .addField('ping', 'Connaissance de ping bot')
        .setFooter('Plus bientôt, si Dieu le veut!')
      message.channel.send(helpEmbed);
    }
});

client.login(process.env.TOKEN);
