import { credentials, loadPackageDefinition } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
import { PROTO_PATHS, PROTO_ROOT } from '@ramz001-cinema/contracts'
import {
	AUTH_SERVICE_NAME,
	AUTH_V1_PACKAGE_NAME,
	AuthServiceClient
} from '@ramz001-cinema/contracts/gen/auth/v1'
import { env } from '../../config'

const proto = loadPackageDefinition(
	loadSync(PROTO_PATHS.AUTH, {
		keepCase: false,
		longs: String,
		defaults: true,
		oneofs: true,
		includeDirs: [PROTO_ROOT]
	})
) as unknown as {
	[AUTH_V1_PACKAGE_NAME]: {
		[AUTH_SERVICE_NAME]: new (...args: unknown[]) => AuthServiceClient
	}
}

export const authClient = new proto[AUTH_V1_PACKAGE_NAME][AUTH_SERVICE_NAME](
	env.GRPC_URL,
	credentials.createInsecure()
)
