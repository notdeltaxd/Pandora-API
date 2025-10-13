import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi'
import { Routes } from '../../../types/index.js'
import { AlbumModel } from '../models/index.js'
import { AlbumService } from '../services/index.js'

export class AlbumController implements Routes {
  public controller: OpenAPIHono
  private albumService: AlbumService

  constructor() {
    this.controller = new OpenAPIHono()
    this.albumService = new AlbumService()
  }

  public initRoutes() {
    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/albums',
        tags: ['Album'],
        summary: 'Retrieve an album by URL',
        description: 'Retrieve an album by providing a direct URL to the album on Pandora.',
        operationId: 'getAlbumByUrl',
        request: {
          query: z.object({
            url: z
              .string()
              .min(1, { message: 'URL cannot be empty' })
              .url({ message: 'Invalid URL format' })
              .regex(
                new RegExp('^https://www\\.pandora\\.com/artist/[^/]+/[^/]+/[A-Za-z0-9]+$'),
                'Invalid Pandora URL format'
              )
              .openapi({
                title: 'Pandora Album URL',
                description:
                  'A direct URL to the album on Pandora, e.g., https://www.pandora.com/artist/nbl-nexuz/on-my-way/AL9kVthv7lq6nfw',
                example: 'https://www.pandora.com/artist/nbl-nexuz/on-my-way/AL9kVthv7lq6nfw',
                default: 'https://www.pandora.com/artist/nbl-nexuz/on-my-way/AL9kVthv7lq6nfw',
                pattern: '^https://www\\.pandora\\.com/artist/[^/]+/[^/]+/[A-Za-z0-9]+$'
              })
          })
        },
        responses: {
          200: {
            description: 'Successful response with album details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates if the operation was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: AlbumModel.openapi({
                    title: 'Album Details',
                    description: 'The detailed information of the album'
                  })
                })
              }
            }
          },
          400: {
            description: 'Bad Request - Validation failed',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates if the operation was successful',
                    type: 'boolean',
                    example: false
                  }),
                  message: z.string().optional().openapi({
                    description: 'Validation error message',
                    type: 'string',
                    default: 'Validation failed'
                  })
                })
              }
            }
          },

          404: {
            description: 'Not Found - No results found',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates if the operation was successful',
                    type: 'boolean',
                    example: false
                  }),
                  message: z.string().optional().openapi({
                    description: 'Error message',
                    type: 'string',
                    example: 'Not found',
                    default: 'Not found'
                  })
                })
              }
            }
          },
          429: {
            description: 'Too Many Requests - Rate limit exceeded',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates if the operation was successful',
                    type: 'boolean',
                    example: false
                  }),
                  message: z.string().optional().openapi({
                    description: 'Error message',
                    type: 'string',
                    example: 'Rate limit exceeded, please try again later',
                    default: 'Too many requests'
                  })
                })
              }
            }
          },
          500: {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates if the operation was successful',
                    type: 'boolean',
                    example: false
                  }),
                  message: z.string().optional().openapi({
                    description: 'Error message',
                    type: 'string',
                    example: 'Internal server error',
                    default: 'Internal server error'
                  })
                })
              }
            }
          }
        }
      }),
      async (ctx) => {
        const { url } = ctx.req.query()

        const response = await this.albumService.getAlbumByUrl(url)

        return ctx.json({ success: true, data: response })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/albums/{id}',
        tags: ['Album'],
        summary: 'Retrieve an album by ID',
        operationId: 'getAlbumById',
        request: {
          params: z.object({
            id: z
              .string()
              .regex(/^AL:\d+$/, 'Invalid album ID format')
              .openapi({
                param: {
                  name: 'id',
                  in: 'path'
                },
                title: 'Album ID',
                description: 'The unique ID of the album',
                type: 'string',
                example: 'AL:54628772',
                default: 'AL:54628772'
              })
          })
        },
        responses: {
          200: {
            description: 'Successful response with album details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates if the operation was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: AlbumModel.openapi({
                    title: 'Album Details',
                    description: 'The detailed information of the album'
                  })
                })
              }
            }
          },
          400: {
            description: 'Bad Request - Validation failed',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates if the operation was successful',
                    type: 'boolean',
                    example: false
                  }),
                  message: z.string().optional().openapi({
                    description: 'Validation error message',
                    type: 'string',
                    default: 'Validation failed'
                  })
                })
              }
            }
          },

          404: {
            description: 'Not Found - No results found',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates if the operation was successful',
                    type: 'boolean',
                    example: false
                  }),
                  message: z.string().optional().openapi({
                    description: 'Error message',
                    type: 'string',
                    example: 'Not found',
                    default: 'Not found'
                  })
                })
              }
            }
          },
          429: {
            description: 'Too Many Requests - Rate limit exceeded',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates if the operation was successful',
                    type: 'boolean',
                    example: false
                  }),
                  message: z.string().optional().openapi({
                    description: 'Error message',
                    type: 'string',
                    example: 'Rate limit exceeded, please try again later',
                    default: 'Too many requests'
                  })
                })
              }
            }
          },
          500: {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates if the operation was successful',
                    type: 'boolean',
                    example: false
                  }),
                  message: z.string().optional().openapi({
                    description: 'Error message',
                    type: 'string',
                    example: 'Internal server error',
                    default: 'Internal server error'
                  })
                })
              }
            }
          }
        }
      }),
      async (ctx) => {
        const { id } = ctx.req.param()
        const album = await this.albumService.getAlbumById(id)
        return ctx.json({ success: true, data: album })
      }
    )
  }
}
