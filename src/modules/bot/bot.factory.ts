import { session, Telegraf } from 'telegraf'
import { env } from '../../config/index'
import { registerBotHandlers } from './handlers/index'

export const createBot = (): Telegraf => {
	const bot = new Telegraf(env.BOT_TOKEN)

	bot.use(session())

	registerBotHandlers(bot)

	return bot
}
