const Discord = require('discord.js');

exports.run = async (client, message, params) => {
  var channel = client.channels.find('id', '455421754727464970')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("Gresp | Canlı Destek")
  .setDescription("Canlı desteği kullandığın için teşekkürler, az sonra yetkili ekibimiz sizinle ilgilenecek.")
  .setFooter("30 saniye içinde geri dönülmezse lütfen iletişime geçin -> Marcus#7950")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor('Gresp Canlı Destek | Talep', message.author.avatarURL)
  .addField('**» Kullanıcı Adı: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı: **', message.guild.name)
  .setDescription(asdf.url)
      channel.send(invite)
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'canlıdestek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'canlıdestek'
};