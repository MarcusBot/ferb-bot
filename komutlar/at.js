const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'log');
  if (!modlog) return message.channel.send(':no_entry: ``log`` adlı bir kanal bulunamadı. Lütfen ``log`` adlı bir kanalınız yoksa ``log`` adlı bir kanal oluşturunuz. Aksi takdirde ``kick`` komutu çalışmayacaktır.');
  if (reason.length < 1) return message.channel.send(':no_entry: Atmamı istediğiniz kullanıcı için bir sebeb yazmalısınız.');
  if (message.mentions.users.size < 1) return message.channel.send(':no_entry: Hangi kullanıcıyı sunucudan atmamı istediğini yazmalısın!').catch(console.error);

  if (!message.guild.member(user).kickable) return message.channel.send(':no_entry: Yetkili bir kişiyi sunucudan atamam!');
  message.guild.member(user).kick();

  const embedkick = new Discord.RichEmbed()
  .setColor("RANDOM")
    .setTimestamp()
    .addField('Eylem:', ' Kick :bangbang: ')
    .addField('Atılan Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Atma Sebebi: ', reason);
  return guild.channels.get(modlog.id).sendEmbed(embedkick);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kick'],
  permLevel: 2
};

exports.help = {
  name: 'at',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'at [kullanıcı] [sebep]'
};
