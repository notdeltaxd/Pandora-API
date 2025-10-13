import { userAgents } from '../constants/index.js'
import { env } from '../config/env.js'
import { FetchParams, FetchResponse } from '../../types/index.js'

export const useFetch = async <T>({ path, params, method = 'POST', body }: FetchParams): Promise<FetchResponse<T>> => {
  const url = new URL(path, env.PANDORA_BASE_URL)
  Object.entries(params || {}).forEach(([key, value]) => {
    url.searchParams.append(key, value.toString())
  })
  const headers = {
    Accept: 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9,bn;q=0.8',
    'Content-Type': 'application/json',
    origin: 'https://www.pandora.com',
    priority: 'u=1, i',
    'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
    'sec-ch-ua-mobile': '?1',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same',
    Cookie: env.PANDORA_COOKIE,
    'X-Csrftoken': env.PANDORA_CSRF_TOKEN,
    'X-Authtoken': env.PANDORA_AUTH_TOKEN,
    'User-Agent': userAgents[Math.floor(Math.random() * userAgents.length)]
  }

  const response = await fetch(url.toString(), {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  })

  const data = await response.json()

  if (!response.ok || (data as any).ok === false) {
    const error: any = new Error()
    error.message = 'Something went wrong while processing your request. Please try again later.'
    error.status = 500
    throw error
  }

  return { data: data as T, ok: response.ok, status: response.status }
}
