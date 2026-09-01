import { Telegraf } from 'telegraf'
import { TelegrafContext } from '../../../shared/interfaces'

export function registerContactHandler(bot: Telegraf<TelegrafContext>) {
	bot.on('contact', async ctx => {
		const phone = ctx.message.contact.phone_number

		console.log('Received contact:', phone)
	})
}
