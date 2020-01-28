const Model = require('../models').event
class MessageEvent extends Model {
  constructor (client) {
    super(client, 'message')
  }

  run (msg) {
    if (!msg.content.startsWith(this.config.bot.prefix)) return
    msg.args = msg.content.replace(this.config.bot.prefix, '').split(' ')
    const cmd = this.commands.get(msg.args[0])
    if (cmd) cmd.run(msg)
  }
}

module.exports = MessageEvent
