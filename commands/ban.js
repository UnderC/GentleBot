const Discord = require('discord.js')

const Model = require('../models').command
class Ban extends Model {
  constructor(client) {
    super(client, {
      alias: ['ban', 'hardban'],
      cmdName: 'ban',
    })
  }

  async run(msg) {
    const target = msg.mentions.members.first()
    target.ban().then(() => {
      const succesEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .addField('🔨밴', `해당 대상을 밴했어요! 홈런!!`, true)
        .setTimestamp()
        .setFooter('GentleBot by TanzenT Lab.')
      msg.channel.send(succesEmbed)
    })
  }
}

module.exports = Ban
