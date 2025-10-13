import { z } from 'zod'

const envSchema = z.object({
  PANDORA_BASE_URL: z.string(),
  PANDORA_CSRF_TOKEN: z.string(),
  PANDORA_AUTH_TOKEN: z.string(),
  PANDORA_COOKIE: z.string()
})

type Env = z.infer<typeof envSchema>

export const env: Env = envSchema.parse(process.env)

for (const key in env) {
  if (!(key in env)) {
    throw new Error(`Missing env variable: ${key}. Please check the .env file and try again.`)
  }
}
