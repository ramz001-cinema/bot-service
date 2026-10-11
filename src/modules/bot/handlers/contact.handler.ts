import { Telegraf } from 'telegraf'
import { TelegrafContext } from '../../../shared/interfaces'

export function registerContactHandler(bot: Telegraf<TelegrafContext>) {
	bot.on('contact', async ctx => {
		const phone = ctx.message.contact.phone_number
		const firstName = ctx.message.contact.first_name
		const lastName = ctx.message.contact.last_name
		const userId = ctx.session.id

		console.log('Received contact:', { phone, firstName, lastName, userId })
	})
}
