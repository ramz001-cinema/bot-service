import { Telegraf } from 'telegraf'
import { TelegrafContext } from '../../../shared/interfaces'
import { type TelegramCompleteRequest } from '@ramz001-cinema/contracts/gen-grpc/auth/v1'
import { telegramComplete } from '../../../infrastructure/grpc/auth.client'
import { env } from '../../../config'

export function registerContactHandler(bot: Telegraf<TelegrafContext>) {
	bot.on('contact', async ctx => {
		const phone = ctx.message.contact.phone_number
		const firstName = ctx.message.contact.first_name
		const lastName = ctx.message.contact.last_name
		const userId = ctx.session.id

		console.log('Received contact:', { phone, firstName, lastName, userId })

		if (!ctx.chat.id || !ctx.session.id)
			return ctx.reply('Chat ID or Session ID is missing.')

		const request: TelegramCompleteRequest = {
			sessionId: ctx.session.id,
			phone
		}

		const { sessionId } = await telegramComplete(request)

		await ctx.reply('The registration process is complete successfully.', {
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: 'Return to Site',
							url: `${env.REDIRECT_ORIGIN}/auth/tg-finalize?sessionId=${sessionId}`
						}
					]
				]
			}
		})
	})
}
