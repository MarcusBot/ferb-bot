const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Uyarı** :warning:', '`uyar` **adlı komutu özel mesajlarda kullanamazsın.**')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'log');
  if (!modlog) return message.channel.send('``log`` adlı kanalı bulamıyorum. Lütfen ``log`` adlı bir kanal oluşturunuz ve ondan sonra deneyiniz.');
  if (reason.length < 1) return message.channel.send(':no_entry: Uyarma sebebini yazmalısın!');
  if (message.mentions.users.size < 1) return message.channel.send(':no_entry: Kimi uyaracağımı yazmadığın için kimseyi uyaramıyorum.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setFooter('Gresp', client.user.displayAvatarURL)
  .setTimestamp()
  .addField('Eylem', 'Uyarı')
  .addField('Kullanıcı', `${user.username}#${user.discriminator}`)
  .addField('Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('Sebep', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'uyar',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'uyar [kullanıcı] [sebep]'
};
