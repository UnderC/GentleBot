const Discord = require('discord.js')
const config = require('./settings')
const logger = require('./utils/logger')

class GentleBot extends Discord.Client {
  constructor(_config) {
    super()
    this.config = _config
    this.logger = logger

    this.on('debug', async debugInfo => {
      this.logger.debug(debugInfo)
    })

    this.on('error', async err => {
      this.logger.error(err.message)
    })

    this.login(this.config.bot.token)

    this.on('ready', async => {
      this.logger.info(`Login Success!
Bot id: ${this.user.id}
Bot Name: ${this.user.username}
Invite URL: https://discordapp.com/api/oauth2/authorize?client_id=${this.user.id}&permissions=${this.config.bot.permission}&scope=bot
      `)
    })
  }
}

const client = new GentleBot(config)
