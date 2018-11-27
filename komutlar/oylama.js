	const Discord = require('discord.js');

	exports.run = (client, message, args) => {
		let mesaj = args.slice(0).join(' ');
		if (mesaj.length < 1) return message.channel.send(':no_entry: Oylama başlatmak için bir sebeb veya soru yazmanız gereklidir!');
		message.delete();
		const embed = new Discord.RichEmbed()
		.setAuthor(`Oylama / Anket`)
		.setColor("RANDOM")
		.setDescription(`${mesaj}`)
		.setFooter(`Evet: 👍  | Hayır: 👎`)
		return message.channel.sendEmbed(embed).then(m => {
		  m.react('👎');
		  m.react('👍');
		})
	};

	exports.conf = {
	  enabled: true,
	  guildOnly: false,
	  aliases: ['anket'],
	  permLevel: 2
	};

	exports.help = {
	  name: 'oylama',
	  description: 'Sadece sizin değil bütün halkın görüşünü almak için güzel bir sistem...',
	  usage: 'oylama [Oylamada yazılacak şey]'
	};
