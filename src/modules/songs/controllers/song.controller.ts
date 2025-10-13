import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi'
import { Routes } from '../../../types/index.js'
import { SongService } from '../services/song.service.js'
import { SongModel } from '../models/song.model.js'

export class SongController implements Routes {
  public controller: OpenAPIHono
  private songService: SongService

  constructor() {
    this.controller = new OpenAPIHono()
    this.songService = new SongService()
  }

  public initRoutes() {
    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/songs',
        tags: ['Songs'],
        summary: 'Retrieve a song by URL',
        description: 'Retrieve a song by providing a direct URL to the song on Pandora.',
        operationId: 'getSongByUrl',
        request: {
          query: z.object({
            url: z
              .string()
              .url()
              .regex(
                new RegExp('^https://www\\.pandora\\.com/artist/[^/]+/[^/]+/[^/]+/[A-Za-z0-9]+$'),
                'Invalid Pandora Track URL format'
              )
              .openapi({
                title: 'Pandora Track URL',
                description:
                  'A direct URL to the track on Pandora, e.g., https://www.pandora.com/artist/imagine-dragons/evolve/believer/TRtlJmmZP3nzh3m',
                example: 'https://www.pandora.com/artist/imagine-dragons/evolve/believer/TRtlJmmZP3nzh3m',
                default: 'https://www.pandora.com/artist/imagine-dragons/evolve/believer/TRtlJmmZP3nzh3m',
                pattern: '^https://www\\.pandora\\.com/artist/[^/]+/[^/]+/[^/]+/[A-Za-z0-9]+$'
              })
          })
        },
        responses: {
          200: {
            description: 'Successful response with song details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates if the operation was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: SongModel.openapi({
                    title: 'Song Details',
                    description: 'The detailed information of the song'
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

        const response = await this.songService.getSongByUrl(url)

        return ctx.json({ success: true, data: response })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/songs/{id}',
        tags: ['Songs'],
        summary: 'Retrieve a song by ID',
        operationId: 'getSongById',
        request: {
          params: z.object({
            id: z
              .string()
              .regex(/^TR:\d+$/, 'Invalid track ID format')
              .openapi({
                param: {
                  name: 'id',
                  in: 'path'
                },
                title: 'Song ID',
                description: 'The unique ID of the song',
                type: 'string',
                example: 'TR:11423273',
                default: 'TR:11423273'
              })
          })
        },
        responses: {
          200: {
            description: 'Successful response with song details',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates if the operation was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: SongModel.openapi({
                    title: 'Song Details',
                    description: 'The detailed information of the song'
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
        const song = await this.songService.getSongById(id)
        return ctx.json({ success: true, data: song })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/songs/{id}/suggestions',
        tags: ['Songs'],
        summary: 'Retrieve song suggestions by ID',
        operationId: 'getSongSuggestions',
        request: {
          params: z.object({
            id: z
              .string()
              .regex(/^TR:\d+$/, 'Invalid track ID format')
              .openapi({
                param: {
                  name: 'id',
                  in: 'path'
                },
                title: 'Track ID',
                description: 'The unique Pandora track ID (e.g., TR:11423273)',
                type: 'string',
                example: 'TR:11423273',
                default: 'TR:11423273'
              })
          })
        },
        responses: {
          200: {
            description: 'Successfully retrieved similar songs for the given track',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates if the operation was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: z
                    .array(
                      SongModel.openapi({
                        title: 'Song Suggestion',
                        description: 'A similar or recommended song'
                      })
                    )
                    .openapi({
                      title: 'Song Suggestions',
                      description: 'A list of similar or recommended songs'
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
        const songs = await this.songService.getSongSuggestions(id)
        return ctx.json({ success: true, data: songs })
      }
    )
  }
}
