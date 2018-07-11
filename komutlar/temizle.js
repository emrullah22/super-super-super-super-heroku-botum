const Discord = require('discord.js');


exports.run = function(client, message) {
    message.channel.bulkDelete(20);
    message.channel.send("**100 adet mesaj sildim!**").then(msg =>{
        msg.delete("1000")
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 3 
};

exports.help = {
  name: 'temizle', 
  description: '100 Adet mesaj siler',
  usage: 'temizle' 
};

