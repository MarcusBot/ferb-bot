const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setDescription('')
  .setColor("RANDOM")
  .addField("**Moderasyon Komutları**", '\n' + prefix + 'at | İstediğiniz kullanıcıyı sunucudan atarsınız. \n' + prefix + 'sustur | İstediğiniz kullanıyı susturursunuz. \n' + prefix + 'uyar | İstediğiniz kullanıcıyı uyarırsınız. \n' + prefix + 'duyuru | Daha güzel bir şekilde duyuru yapmanızı sağlar. \n' + prefix + 'temizle | 1 ile 100 arası mesajları siler.')
  .setFooter('Gresp | Bu komutları sadece sunucudaki yetkililer kullanabilirler.', client.user.displayAvatarURL)
  .setThumbnail(client.user.avatarURL)
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['admin'],
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Botun moderasyon komutlarını gösterir.',
  usage: 'moderasyon'
};
