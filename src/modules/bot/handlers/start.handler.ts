import { Markup, Telegraf } from 'telegraf'

export function registerStartHandler(bot: Telegraf) {
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
	})
}
