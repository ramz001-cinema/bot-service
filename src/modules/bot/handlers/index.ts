import { Telegraf } from 'telegraf'
import { registerStartHandler } from './start.handler'
import { TelegrafContext } from '../../../shared/interfaces'
import { registerContactHandler } from './contact.handler'

export const registerBotHandlers = (bot: Telegraf<TelegrafContext>) => {
	registerStartHandler(bot)
	registerContactHandler(bot)
}
