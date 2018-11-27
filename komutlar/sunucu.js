const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setDescription('')
  .setColor("RANDOM")
  .addField("**Sunucu Komutları**", '\n' + prefix + 'sunucubilgi | Sunucu hakkında bilgi verir. \n' + prefix + 'kullanıcıbilgim | Sizin hakkınızda bilgi verir. \n' + prefix + 'sunucuemojileri | Sunucudaki emojileri gösterir \n' + prefix + 'bilgi | Bot hakkında bilgi verir. \n' + prefix + 'saat | Türkiye saatine göre saati söyler.')
  .setFooter('Gresp', client.user.displayAvatarURL)
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
  aliases: ['server'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu',
  description: 'Botun sunucu komutlarını gösterir.',
  usage: 'sunucu'
};
