  const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.channel.send('Hesaplanıyor...')
  .then(nmsg => nmsg.edit('Hesaplanıyor..'))
  .then(nmsg => nmsg.edit('Hesaplanıyor.'))
  .then(nmsg => nmsg.edit(':ping_pong: Pong! **' + client.ping + '** ms'))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Pinginizi gösterir.',
  usage: 'ping'
};
