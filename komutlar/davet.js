const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
	.setFooter(`${message.author.username} tarafından davet linki istendi.`)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Botun davet linki için özel mesajlarınızı kontrol ediniz.');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
	.setThumbnail(client.user.avatarURL)
	.setFooter(`${message.author.username} tarafından kullanıldı.`)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('[Gresp BOT Davet Linki | Üzerine tıklayarak gidebilirsiniz!](https://discordapp.com/api/oauth2/authorize?client_id=453137622173351936&permissions=8&scope=bot)');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini gönderir.',
  usage: 'davet'
};
