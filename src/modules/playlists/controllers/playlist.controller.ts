import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi'
import { Routes } from '../../../types/index.js'
import { PlaylistService } from '../services/index.js'
import { PlaylistModel } from '../models/playlist.model.js'

export class PlaylistController implements Routes {
  public controller: OpenAPIHono
  private playlistService: PlaylistService

  constructor() {
    this.controller = new OpenAPIHono()
    this.playlistService = new PlaylistService()
  }

  public initRoutes() {
    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/playlists',
        tags: ['Playlist'],
        summary: 'Retrieve a playlist by URL',
        description: 'Retrieve a playlist by providing a direct URL to the playlist on Pandora.',
        operationId: 'getPlaylistByUrl',
        request: {
          query: z.object({
            url: z
              .string()
              .url()
              .regex(/^https:\/\/www\.pandora\.com\/playlist\/PL:[0-9]+:[0-9]+$/, 'Invalid Pandora playlist URL format')
              .openapi({
                title: 'Pandora Playlist URL',
                description:
                  'A direct URL to a Pandora playlist using the full numeric PL format, e.g. https://www.pandora.com/playlist/PL:844424980353351:1756780791',
                example: 'https://www.pandora.com/playlist/PL:844424980353351:1756780791',
                default: 'https://www.pandora.com/playlist/PL:844424980353351:1756780791',
                pattern: '^https:\\/\\/www\\.pandora\\.com\\/playlist\\/PL:[0-9]+:[0-9]+$'
              })
          })
        },
        responses: {
          200: {
            description: 'Successful response with playlist details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates if the operation was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: PlaylistModel.openapi({
                    title: 'Playlist Details',
                    description: 'The detailed information of the playlist'
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

        const response = await this.playlistService.getPlaylistByUrl(url)

        return ctx.json({ success: true, data: response })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/playlists/{id}',
        tags: ['Playlist'],
        summary: 'Retrieve a playlist by ID',
        operationId: 'getPlaylistById',
        request: {
          params: z.object({
            id: z
              .string()
              .regex(/^PL:\d+:\d+$/, 'Invalid playlist ID format')
              .openapi({
                param: {
                  name: 'id',
                  in: 'path'
                },
                title: 'playlist ID',
                description: 'The unique ID of the playlist',
                type: 'string',
                example: 'PL:844424980353351:1756780791',
                default: 'PL:844424980353351:1756780791'
              })
          })
        },
        responses: {
          200: {
            description: 'Successful response with playlist details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates if the operation was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: PlaylistModel.openapi({
                    title: 'playlist Details',
                    description: 'The detailed information of the playlist'
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
        const playlist = await this.playlistService.getPlaylistById(id)
        return ctx.json({ success: true, data: playlist })
      }
    )
  }
}
