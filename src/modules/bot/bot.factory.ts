import { session, Telegraf } from 'telegraf'
import { env } from '../../config/index'
import { registerBotHandlers } from './handlers/index'
import { TelegrafContext } from '../../shared/interfaces'

export const createBot = () => {
	const bot = new Telegraf<TelegrafContext>(env.BOT_TOKEN)

	bot.use(
		session({
			defaultSession: () => ({ id: undefined })
		})
	)

	registerBotHandlers(bot)

	return bot
}
