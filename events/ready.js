const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
 
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Divine BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Divine BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("do not disturb");
client.user.setGame(prefix + 'komutlar | ' + prefix + 'yenilikler | ' + client.guilds.size + ' sunucu ' + client.users.size + ' kullancı')
client.on('ready', () => {
  const channel = client.channels.get("448137003834277889")
  message.channel.send(`${client.user.username} botu açıldı!`)
});
};                                                                    
