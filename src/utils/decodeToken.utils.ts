interface TokenPayload {
	exp: number
}

const decode = (token: string): TokenPayload | null => {
	const tokenParts = token.split('.')
	if (tokenParts.length < 3) {
		return null
	}

	const payload = tokenParts[1]
	const decodedPayload = atob(payload)
	return JSON.parse(decodedPayload)
}

const decodeTokenUtils = { decode }

export default decodeTokenUtils
