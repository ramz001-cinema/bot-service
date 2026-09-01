import { Markup, Telegraf } from 'telegraf'
import { TelegrafContext } from '../../../shared/interfaces'

export function registerStartHandler(bot: Telegraf<TelegrafContext>) {
	bot.start(async ctx => {
		const sessionId = ctx.payload

		if (!sessionId) {
			return ctx.reply(
				'Please authorize through an official site.',
				Markup.inlineKeyboard([
					Markup.button.url(
						'Link to authorize',
						`${process.env.REDIRECT_ORIGIN}/auth/telegram`
					)
				])
			)
		}

		ctx.session.id = sessionId

		await ctx.reply(
			'Please to finish the authorization, send your phone number to the bot. You can do this by clicking the button below.',
			Markup.keyboard([
				Markup.button.contactRequest('Send my phone number')
			])
				.oneTime()
				.resize()
		)
	})
}
