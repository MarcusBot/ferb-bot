const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const haste = require('hastebin-gen');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send(':regional_indicator_a: :regional_indicator_s:')
  }
  });
  
client.on ('message', message => {
if (message.content === prefix + "sunucuemojileri") {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" \n");
  const emojiembed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription(`${message.guild.name} adlı sunucuda bulunan emojiler; \n${emojiList}`)
  .setFooter(`${message.guild.name} sunucusunda bulunan emojiler yukarıda görünmektedir.`)
  return message.channel.sendEmbed(emojiembed);
}
});

client.on('message', msg => {
  if (msg.content === prefix + 'tkm') {
    msg.channel.send(':no_entry: Taş kağıt makas komutunu kullanmak için herhangi bir seçeneği yazmalısınız! Kullanım: g!tkm ``taş``, ``makas``, ``kağıt``');
  }
});
client.on('message', msg => {
  if (msg.content === prefix + 'tkm taş') {
  var tascevap = [
    "Ah lanet olsun! Niye taş diyorsun ki?! Kaybettim!",
    "Hahaha, seni gidi acemi, ben kazandım!",
    ":expressionless: Berabere!"
  ]
  var tascevap = tascevap[Math.floor(Math.random(1) * tascevap.length)]
     msg.reply(tascevap);
  }
});
client.on('message', msg => {
  if (msg.content === prefix + 'tkm kağıt') {
  var kagitcevap = [
    ":thinking: Kağıt nasıl taş'ı alabiliyor hala aklım almıyor. Kaybettim!",
    ":grin: Makas, kağıdı keser canım! Kazandım!",
    ":expressionless: Berabere!"
  ]
  var kagitcevap = kagitcevap[Math.floor(Math.random(1) * kagitcevap.length)]
     msg.reply(kagitcevap);
  }
});
client.on('message', msg => {
  if (msg.content === prefix + 'tkm makas') {
  var makascevap = [
    "Taş, makası kırar. Kazandım! :tada:",
    ":grin: Kağıt makası keser, kaybettim!",
    ":expressionless: Berabere!"
  ]
  var makascevap = makascevap[Math.floor(Math.random(1) * makascevap.length)]
     msg.reply(makascevap);
  }
});

const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

client.on("message", message => {
  const args = message.content.split(" ").slice(1);

  if (message.content.startsWith(prefix + "eval")) {
    if(message.author.id !== "439820061939597312") return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
