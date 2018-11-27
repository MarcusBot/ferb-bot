const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.channel.send(':no_entry: Bişey yazmam için senin bana birşey yazdırman lazım!');
	message.delete();
    return message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yazdır',
  description: 'Bota normal bir şekilde birşey yaptırır.',
  usage: 'yazdır [Duyuruda Yazıcak Şey]'
};
