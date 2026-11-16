import config from '@ramz001-cinema/core/eslint/core'

export default [
	...config,
	{
		rules: {
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['@ramz001-cinema/contracts/gen/*'],
							message:
								'bot-service is not a NestJS app. Import from @ramz001-cinema/contracts/gen-grpc/* instead.'
						}
					]
				}
			]
		}
	}
]