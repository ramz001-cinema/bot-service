import * as dotenv from 'dotenv'
import * as z from 'zod'

dotenv.config()

const envVariables = z.object({
	GRPC_URL: z.url().nonempty(),
	BOT_TOKEN: z.string().nonempty(),
	REDIRECT_ORIGIN: z.string().nonempty()
})

export const env = envVariables.parse(process.env)

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace NodeJS {
		// eslint-disable-next-line @typescript-eslint/no-empty-object-type
		interface ProcessEnv extends z.infer<typeof envVariables> {}
	}
}
