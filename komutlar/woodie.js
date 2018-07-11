const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**WOODIE**")
        .setImage("https://cdn.weasyl.com/static/media/02/17/39/021739043ecbfa23f94a0b32c6b18602c37308e35781be5cd6c5ae050105779f.png")
        .setThumbnail("https://cdn.weasyl.com/static/media/02/17/39/021739043ecbfa23f94a0b32c6b18602c37308e35781be5cd6c5ae050105779f.png")     
        .setColor(0x00AE86)
        .addField("Lakabı", "The Lumberjack (Oduncu)", true)
        .addField("Yetenekleri", `
        *Çok güzel bir baltası var
        *Korkunç bir sırrı var (Werebeaver)
        `, true)
        .addField("Motto", `That's nice tree, eh? (güzel açaç, ha?)`, true)
        .addField("selam", "haha naber")

        message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['ping','p'], 
  permLevel: 0 
};

exports.help = {
  name: 'woodie', 
  description: 'Woodie the Lumberjack hakkında bilgi verir', 
  usage: 'woodie' 
};
