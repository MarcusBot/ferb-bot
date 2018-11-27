const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setDescription('')
  .setColor("RANDOM")
  .addField(`**Eğlence Komutları** 1/2`, ` \n${prefix}atatürk | Atatürkün bilinen ve bilinmeyen fotoğraflarını yollar. \n${prefix}atatürk-bilgi | Atatürk hakkında bilinen ve bilinmeyen bilgiler yollar. \n${prefix}avatar | Avatarınızı gösterir. \n${prefix}söv | Söver. \n${prefix}8ball | Sorduğunuz sorulara 'evet' veya 'hayır' şeklinde cevap verir.  \n${prefix}korkuhikayeleri | Çok korkunç korku hikayeleri anlatarak sizi korkutabilir. \n${prefix}köpek | Köpek gifleri atar. :dog: \n${prefix}iqümkac | IQ'nüzün kaç olduğunu söyler. :robot: \n${prefix}atasözleri | Atasözlerini, anlamları ile atar. \n${prefix}sigara | Sigara içer. Sigara içmek zararlıdır! :no_smoking: \n${prefix}kimlikolustur | Rastgele bilgiler ile TC Kimliği oluşturur. :page_with_curl: \n${prefix}çalış | Herhangi bir işte çalırsınız. \n${prefix}kaçcm | Kaç santimetre?? \n${prefix}slot | Gazinodaki gibi slot oynayabilirsiniz! :slot_machine: \n${prefix}saat | Türkiye saat'ine göre saati söyler. \n${prefix}mcskin | İstediğiniz minecraft kullanıcısının skinini gösterir. \n${prefix}mchead | İstediğiniz minecraft kullanıcısının kafa avatarını gösterir.`)
  .addField(`**Eğlence Komutları** 2/2`, ` \n${prefix}mcbasarim | Yazdığınız şeyi Minecraft başarisina çevirir. \n${prefix}öpüş | Etiketlediğiniz kişi ile öpüşürsünüz. \n${prefix}ilgincbilgi | Hiç bilmediğin ve ilginç şeyleri öğrenmeye hazır mısın? \n${prefix}yazı-tura | Yazı mı tura mı? \n${prefix}tkm | Taş, kağıt, makas! \n${prefix}emoji-yazı | Emoji ile yazılarını güzelleştir. \n${prefix}inputtranspa | Muhteşem bir yazı stili... \n${prefix}espriyap | Espri yapar. \n${prefix}efkarlı-sözler | E F K A R L A N D I N I Z. \n${prefix}rastgelesayı | Rastgele bir sayı söyler. \n${prefix}havadurumu | Yazdığınız yerin hava durumunu gösterir. \n${prefix}csgo-kasa-açma | CS:GO Kasa açma simülasyonu \n${prefix}steam-oyun-fiyat | Steamde bulunan oyunun bilgilerini verir.`)
  .setFooter('Gresp', client.user.displayAvatarURL)
  .setThumbnail(client.user.avatarURL)
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.sendEmbed(embedyardim);
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
  aliases: ['fun'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Botun eğlence komutlarını gösterir.',
  usage: 'eğlence'
};