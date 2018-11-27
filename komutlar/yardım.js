const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setAuthor("Komutlar", client.user.displayAvatarURL)
  .setDescription('**g!eğlence** - Eğlence komutlarını gösterir. \n**g!yemek**- Yemek komutlarını gösterir. \n**g!matematik**- Matematik komutlarını gösterir. \n**g!moderasyon**- Moderasyon komutlarını gösterir. \n**g!sunucu**- Sunucu komutlarını gösterir. \n[Bot Destek Sunucusu](https://discord.gg/XDbBmw)')
  .setColor("RANDOM")
  .setFooter(`${message.author.username} tarafından istendi.`)
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
  aliases: ['commands', 'yardım', 'help'],
  permLevel: 0
};

exports.help = {
  name: 'komutlar',
  description: 'Tüm komutları gösterir.',
  usage: 'komutlar [komut]'
};
