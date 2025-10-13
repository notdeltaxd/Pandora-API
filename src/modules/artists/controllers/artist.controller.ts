import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi'
import { Routes } from '../../../types/index.js'
import { ArtistService } from '../services/artist.service.js'
import { ArtistModel } from '../models/artist.model.js'

export class ArtistController implements Routes {
  public controller: OpenAPIHono
  private artistService: ArtistService

  constructor() {
    this.controller = new OpenAPIHono()
    this.artistService = new ArtistService()
  }

  public initRoutes() {
    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/artists',
        tags: ['Artist'],
        summary: 'Retrieve an artist by URL',
        description: 'Retrieve an artist by providing a direct URL to the artist on Pandora.',
        operationId: 'getArtistByUrl',
        request: {
          query: z.object({
            url: z
              .string()
              .url()
              .regex(
                new RegExp('^https://www\\.pandora\\.com/artist/[^/]+/[A-Za-z0-9]+$'),
                'Invalid Pandora URL format'
              )
              .openapi({
                title: 'Pandora Album URL',
                description:
                  'A direct URL to the album on Pandora, e.g., https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z',
                example: 'https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z',
                default: 'https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z',
                pattern: '^https://www\\.pandora\\.com/artist/[^/]+/[^/]+/[A-Za-z0-9]+$'
              })
          })
        },
        responses: {
          200: {
            description: 'Successful response with artist details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates if the operation was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: ArtistModel.openapi({
                    title: 'Artist Details',
                    description: 'The detailed information of the artist'
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

        const response = await this.artistService.getAlbumByUrl(url)

        return ctx.json({ success: true, data: response })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/artists/{id}',
        tags: ['Artist'],
        summary: 'Retrieve an artist by ID',
        operationId: 'getArtistById',
        request: {
          params: z.object({
            id: z
              .string()
              .regex(/^AR:\d+$/, 'Invalid artist ID format')
              .openapi({
                param: {
                  name: 'id',
                  in: 'path'
                },
                title: 'Artist ID',
                description: 'The unique ID of the artist',
                type: 'string',
                example: 'AR:480432',
                default: 'AR:480432'
              })
          })
        },
        responses: {
          200: {
            description: 'Successful response with artist details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates if the operation was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: ArtistModel.openapi({
                    title: 'Artist Details',
                    description: 'The detailed information of the artist'
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
        const album = await this.artistService.getArtistById(id)
        return ctx.json({ success: true, data: album })
      }
    )
  }
}
