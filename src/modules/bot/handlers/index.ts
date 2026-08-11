import { Telegraf } from 'telegraf'
import { registerStartHandler } from './start.handler'

export const registerBotHandlers = (bot: Telegraf) => {
	registerStartHandler(bot)
}
