import { createBot } from './modules/bot/bot.factory'

async function bootstrap() {
	try {
		const bot = createBot()
		bot.launch()
		console.log('Bot is running...')
	} catch (error) {
		console.error('Error starting the bot:', error)
		process.exit(1)
	}
}

bootstrap()
