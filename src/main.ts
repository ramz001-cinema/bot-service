import { createBot } from './modules/bot/bot.factory'

const bot = createBot()

async function bootstrap() {
	// Clear any leftover webhook so long polling can own getUpdates.
	await bot.telegram.deleteWebhook({ drop_pending_updates: true })

	// launch() must be awaited: an unhandled rejection kills the process on Node 24.
	await bot.launch()
	console.log('Bot is running...')

	// Stop polling on shutdown so a redeploy does not leave two pollers fighting.
	process.once('SIGINT', () => bot.stop('SIGINT'))
	process.once('SIGTERM', () => bot.stop('SIGTERM'))
}

bootstrap().catch(error => {
	console.error('Error starting the bot:', error)
	process.exit(1)
})
