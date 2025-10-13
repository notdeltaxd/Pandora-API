import { OpenAPIHono } from '@hono/zod-openapi'
import { apiReference } from '@scalar/hono-api-reference'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'
import { Home } from './pages/home.js'
import type { Routes } from './types/index.js'
import type { HTTPException } from 'hono/http-exception'
import errorMiddleware from './common/middlewares/error.middleware.js'

export class App {
  private app: OpenAPIHono

  constructor(routes: Routes[]) {
    this.app = new OpenAPIHono()

    this.initializeGlobalMiddlewares()
    this.initializeRoutes(routes)
    this.initializeSwaggerUI()
    this.initializeRouteFallback()
    this.initializeErrorHandler()
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      route.initRoutes()
      this.app.route('/api', route.controller)
    })

    this.app.route('/', Home)
  }

  private initializeGlobalMiddlewares() {
    this.app.use(logger())
    this.app.use(prettyJSON())
    this.app.use(cors())
    this.app.use(errorMiddleware)
  }

  private initializeSwaggerUI() {
    this.app.doc31('/swagger', (c) => {
      const { protocol: urlProtocol, hostname, port } = new URL(c.req.url)
      const protocol = c.req.header('x-forwarded-proto') ? `${c.req.header('x-forwarded-proto')}:` : urlProtocol

      return {
        openapi: '3.1.0',

        info: {
          version: '1.0.0',
          title: 'Unofficial Pandora API',
          description: `# Introduction 
          \nUnofficial Pandora API, accessible at [pandora-music-api.vercel.app](https://pandora-music-api.vercel.app), is an unofficial API that provides programmatic access to music metadata (songs, albums, artists, playlists) sourced from Pandora. 
          It offers a simple adapter layer to expose Pandora data with the existing API contracts. \n`
        },
        servers: [{ url: `${protocol}//${hostname}${port ? `:${port}` : ''}`, description: 'Current environment' }]
      }
    })

    this.app.get(
      '/docs',
      apiReference({
        pageTitle: 'Pandora API Documentation',
        theme: 'deepSpace',
        isEditable: false,
        layout: 'modern',
        darkMode: true,
        metaData: {
          applicationName: 'Pandora API',
          author: 'NOT DELTA',
          creator: 'NOT DELTA',
          publisher: 'NOT DELTA',
          robots: 'index, follow',
          description:
            'Pandora API is an unofficial wrapper written in TypeScript that adapts Pandora.com metadata into the existing API schema for songs, albums, artists, and playlists.'
        },
        url: '/swagger'
      })
    )
  }

  private initializeRouteFallback() {
    this.app.notFound((ctx) => {
      return ctx.json(
        { success: false, message: 'route not found, check docs at https://pandora-music-api.vercel.app/docs' },
        404
      )
    })
  }

  private initializeErrorHandler() {
    this.app.onError((err, ctx) => {
      const error = err as HTTPException
      return ctx.json({ success: false, message: error.message }, error.status || 500)
    })
  }

  public getApp() {
    return this.app
  }
}
