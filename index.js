const Discord = require('discord.js')
const config = require('./settings')
const logger = require('./utils/logger')

const commands = require('./commands')
const events = require('./events')

class GentleBot extends Discord.Client {
  constructor(_config) {
    super()
    this.config = _config
    this.logger = logger
    this.commands = new Map()

    this.on('debug', async debugInfo => {
      this.logger.debug(debugInfo)
    })

    this.on('error', async err => {
      this.logger.error(err.message)
    })

    this.on('ready', () => {
      this.logger.info(`
        Login Success!
        Bot id: ${this.user.id}
        Bot Name: ${this.user.username}
      `)
    })

    Object.values(events).forEach(e => new e(this))
    Object.values(commands).forEach(raw => new raw(this))
  }

  login (token) {
    super.login(token || this.config.bot.token)
  }
}

const client = new GentleBot(config)
client.login()
