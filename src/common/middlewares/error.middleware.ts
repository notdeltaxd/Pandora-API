import { createMiddleware } from 'hono/factory'
import type { Context, Next } from 'hono'

const errorMiddleware = createMiddleware(async (c: Context, next: Next) => {
  try {
    await next()
  } catch (err: any) {
    console.error('Error caught in middleware:', err)

    const status = err.status || 500

    // Build the error response dynamically
    const errorResponse: Record<string, any> = {
      success: false,
      message: err.message || 'Internal Server Error'
    }

    return c.json(errorResponse, status)
  }
})

export default errorMiddleware
