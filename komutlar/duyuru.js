const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.channel.send(':no_entry: Duyuru yapabilmek için komuttan sonra birşey yazman gerekiyor...');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${mesaj}`)
	.setFooter(`${message.author.username} tarafından yazıldı ve istendi.`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuryap', 'duyur'],
  permLevel: 2
};

exports.help = {
  name: 'duyuru',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: 'duyuru [Duyuruda Yazıcak Şey]'
};
