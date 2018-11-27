const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - Üye Sayısı: **${guild.memberCount}**`, guild.id);
      embed.setColor("RANDOM")
      embed.setTitle('Sunucular')
      embed.setDescription(`**${bot.guilds.size}** kadar sunucu var !`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s', 'konuş', 'sohbet', 'ask'],
  permLevel: 0
};

exports.help = {
  name: "sunucular",
  description: "Botun Olduğu Sunucuları Gösterir.",
  usage: "sunucular"
};