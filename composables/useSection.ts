export async function getSectionById(sectionId: String) {
	const runtimeConfig = useRuntimeConfig()
	const API_URL = runtimeConfig.public.API_URL
	const url = `${API_URL}sections/${sectionId}`
	// const auth = useAuth()
	// const token = auth.$storage.getUniversal('_token.local') as string
	const { data, error, status } = await useFetch(url, {
		method: 'GET'
	})
	if (error.value) {
		throw createError({
			...error.value,
			statusMessage: `Could not fetch data from ${url}`
		})
	}
	return { data, status }
}
