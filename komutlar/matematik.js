const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setDescription('')
  .setColor("RANDOM")
  .addField("**Matematik Komutları**", '\n' + prefix + 'topla | Sayıları toplamada yardımcı olur. \n' + prefix + 'çıkar | Sayıları çıkarmada yardımcı olur. \n' + prefix + 'çarp | Sayıları çarpmanızda yardımcı olur. \n' + prefix + 'böl | Sayıları bölmenize yardımcı olur.')
  .setFooter('Gresp | Bu komutları örneğe göre yapınız. "g!topla 1 1" şeklinde yazınız.', client.user.displayAvatarURL)
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
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'matematik',
  description: 'Botun matematik komutlarını gösterir.',
  usage: 'matematik'
};
