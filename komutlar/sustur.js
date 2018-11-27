const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Uyarı** :warning:', '`sustur` **adlı komutu özel mesajlarda kullanamazsın.**')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!modlog) return message.channel.send(':no_entry: ``log`` adlı bir kanal bulamadım. Lütfen ``log`` adlı bir kanal oluşturunuz. Aksi takdirde ``sustur`` komutu çalışmayacaktır.').catch(console.error);
  if (!muteRole) return message.channel.send(':no_entry: ``Muted`` adlı bir rol bulamadım. Lütfen ``Muted`` adlı bir rol oluştunuz.').catch(console.error);
  if (reason.length < 1) return message.channel.send(':no_entry: Susturmamı istediğiniz kullanıcı için bir sebeb yazın.').catch(console.error);
  if (message.mentions.users.size < 1) return message.channel.send(':no_entry: Hangi kullanıcıyı susturmak istediğini yazmadın!').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
    .setTimestamp()
    .addField('Eylem:', 'Susturma :bangbang: ')
    .addField('Susturulan Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Susturma Sebebi', reason);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.channel.send(':no_entry: Gerekli yetkilere sahip değilim. Lütfen bir kontrol ediniz ve ondan sonra deneyiniz.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'sustur',
  description: 'İstediğiniz kişiyi  susturur.',
  usage: 'sustur [kullanıcı] [sebep]'
};
