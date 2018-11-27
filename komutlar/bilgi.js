const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
	.setFooter(`${message.author.username} tarafından botun bilgi mesajı istendi.`)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Bot ile ilgili bilgi mesajı yollandı! Özel mesajlarınıza bakınız!');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Bot Bilgi Menüsü", client.user.displayAvatarURL)
    .setDescription("")
	.addField("**Gresp BOT Hikayesi**", " \nGresp BOT fikri aslında başka bir bot'tan çıktı. Aslında o bot'ta bizimdi ama biz o botun ismini değiştirmeye çalıştığımızda hata veriyordu. O yüzden bu botla tekrar geri döndük. Komutlarda bazı değişikliklere gidildi. İnşallah beğenirsiniz.")
	.addField("Bot Sahibi", `[Marcus#7950](https://discord.gg/yZduSWC)`)
	.addField("Destek Sunucusu", "[Destek sunucusuna katılın!](https://discord.gg/yZduSWC)")
	.setFooter(`${message.author.username} tarafından istendi.`)
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
