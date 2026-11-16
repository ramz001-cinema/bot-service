import { credentials } from '@grpc/grpc-js'
import {
	AuthServiceClient,
	type TelegramCompleteRequest,
	type TelegramCompleteResponse
} from '@ramz001-cinema/contracts/gen-grpc/auth/v1'
import { env } from '../../config'

const authClient = new AuthServiceClient(
	env.GRPC_URL,
	credentials.createInsecure()
)

// grpc-js is callback based; handlers await this promise instead.
export const telegramComplete = (request: TelegramCompleteRequest) =>
	new Promise<TelegramCompleteResponse>((resolve, reject) =>
		authClient.telegramComplete(request, (error, response) =>
			error ? reject(error) : resolve(response)
		)
	)
