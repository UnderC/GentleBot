const Discord = require('discord.js')

const Model = require('../models').command
class Ping extends Model {
  constructor(client) {
    super(client, {
      alias: ['ping', 'pong'],
      cmdName: 'ping',
    })
  }

  run(msg) {
    const embed = new Discord.RichEmbed()
      .setColor('#0099ff')
      .addField(
        '🏓핑!',
        `⏳API 핑은 **${Math.round(this.client.ping)}ms** 에요!`,
        true,
      )
      .setTimestamp()
      .setFooter('GentleBot by TanzenT Lab.')
    msg.channel.send(embed)
  }
}

module.exports = Ping
