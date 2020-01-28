const Model = require('../models').command
class Ping extends Model {
  constructor (client) {
    super(client, {
      alias: ['ping', 'pong'],
      cmdName: 'ping'
    })
  }

  run (msg) {
    msg.channel.send(`${this.client.ping}ms!`)
  }
}

module.exports = Ping
