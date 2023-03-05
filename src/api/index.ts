const BASE_URL = 'https://tapapp.free.beeceptor.com'

export const post = async (url: string) => {
  const controller = new AbortController()

  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      signal: controller.signal,
    })
    return response.json()
  } catch (error) {
    controller.abort()
  }
}
