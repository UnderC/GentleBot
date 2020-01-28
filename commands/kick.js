const Discord = require('discord.js')

const Model = require('../models').command
class Kick extends Model {
  constructor(client) {
    super(client, {
      alias: ['kick', 'softban'],
      cmdName: 'kick',
    })
  }

  async run(msg) {
    const target = msg.mentions.members.first()
    target.kick().then(() => {
      const succesEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('🦶킥', `해당 대상을 킥했어요! 속이 시원하네요!`, true)
        .setTimestamp()
        .setFooter('GentleBot by TanzenT Lab.')
      msg.channel.send(succesEmbed)
    })
  }
}

module.exports = Kick
