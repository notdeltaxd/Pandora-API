import { userAgents } from '../constants/index.js'
import { env } from '../config/env.js'
import { FetchParams, FetchResponse } from '../../types/index.js'

export const useFetch = async <T>({ path, params, method = 'POST', body }: FetchParams): Promise<FetchResponse<T>> => {
  const url = new URL(path, env.PANDORA_BASE_URL)
  Object.entries(params || {}).forEach(([key, value]) => {
    url.searchParams.append(key, value.toString())
  });
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

// export const getToken = async <T>() => {
//   const url = new URL(env.PANDORA_BASE_URL)

//   const headers = {
//     Accept: 'application/json, text/plain, */*',
//     'accept-language': 'en-US,en;q=0.9,bn;q=0.8',
//     'Content-Type': 'application/json',
//     origin: 'https://www.pandora.com',
//     priority: 'u=1, i',
//     'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
//     'sec-ch-ua-mobile': '?1',
//     'sec-fetch-mode': 'cors',
//     'sec-fetch-site': 'same',
//     'User-Agent': userAgents[Math.floor(Math.random() * userAgents.length)]
//   }

//   const res = await fetch(url.toString(), {
//     method: 'HEAD',
//     headers
//   })

//   if (!res.ok) {
//     console.log('Failed to set CSRF token from Pandora.')
//     return
//   }

//   const setCookies =
//     typeof (res.headers as any).getSetCookie === 'function'
//       ? (res.headers as any).getSetCookie()
//       : (res.headers.get('set-cookie')?.split('\n') ?? [])

//   const csrfCookie = setCookies.find((c: string) => c.toLowerCase().includes('csrftoken='))
//   if (!csrfCookie) {
//     return
//   }

//   const match = /csrftoken=([a-f0-9]{16})/i.exec(csrfCookie)
//   if (!match) {
//     return
//   }
//   const csrf = match[1]

//   const tokenRes = await fetch('https://www.pandora.com/api/v1/auth/anonymousLogin', {
//     method: 'POST',
//     headers: {
//       Cookie: csrfCookie,
//       'Content-Type': 'application/json',
//       Accept: '*/*',
//       'X-CsrfToken': csrf,
//       'User-Agent': userAgents[Math.floor(Math.random() * userAgents.length)]
//     },
//     body: JSON.stringify({})
//   })

//   if (!tokenRes.ok) {
//     console.log('Failed to set auth token from Pandora.')
//     return
//   }

//   const rawBody = await tokenRes.text()
//   if (!rawBody) {
//     console.log('Failed to set auth token from Pandora.')
//     return
//   }

//   let tokenJson: any
//   try {
//     tokenJson = JSON.parse(rawBody)
//   } catch {
//     console.log('Failed to parse auth token response from Pandora.')
//     return
//   }

//   if (!tokenJson || !tokenJson.authToken) {
//     console.log('Failed to set auth token from Pandora.')
//     return
//   }

//   return {
//     authToken: tokenJson.authToken,
//     csrfToken: csrf,
//     cookie: csrfCookie
//   }
// }
