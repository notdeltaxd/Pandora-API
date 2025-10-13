import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi'
import { Routes } from '../../../types/index.js'
import { SearchService } from '../services/index.js'
import {
  SearchAlbumModel,
  SearchArtistModel,
  SearchModel,
  SearchPlaylistModel,
  SearchSongModel
} from '../models/index.js'

export class SearchController implements Routes {
  public controller: OpenAPIHono
  private searchService: SearchService

  constructor() {
    this.controller = new OpenAPIHono()
    this.searchService = new SearchService()
  }

  public initRoutes() {
    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/search',
        tags: ['Search'],
        summary: 'Global search',
        description: 'Search for songs, albums, artists, and playlists based on the provided query string.',
        operationId: 'globalSearch',
        request: {
          query: z.object({
            query: z.string().min(1, { message: 'Search query must be at least 1 character long' }).openapi({
              title: 'Search query',
              description: 'The search query string. Minimum 2 characters recommended for better results.',
              type: 'string',
              example: 'Imagine Dragons',
              minLength: 1
            })
          })
        },
        responses: {
          200: {
            description: 'Successful global search',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates whether the search was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: SearchModel.openapi({
                    description: 'Search results including songs, albums, artists, and playlists'
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
        const { query } = ctx.req.valid('query')

        const result = await this.searchService.searchAll(query)

        return ctx.json({ success: true, data: result })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/search/songs',
        tags: ['Search'],
        summary: 'Search for songs',
        description: 'Search for songs based on the provided query',
        operationId: 'searchSongs',
        request: {
          query: z.object({
            query: z.string().min(1, { message: 'Search query must be at least 1 character long' }).openapi({
              title: 'Search query',
              description: 'Search query for songs. Minimum 2 characters recommended for better results.',
              type: 'string',
              example: 'Believer',
              minLength: 1
            }),
            limit: z.coerce
              .number()
              .min(1, { message: 'Limit must be at least 1' })
              .max(100, { message: 'Limit cannot exceed 100' })
              .optional()
              .openapi({
                title: 'Limit',
                description: 'Maximum number of results to return. Capped at 100 for performance reasons.',
                type: 'integer',
                example: '10',
                default: '10',
                maximum: 100,
                minimum: 1
              })
          })
        },
        responses: {
          200: {
            description: 'Successful response with song search results',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates whether the song search was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: SearchSongModel.openapi({
                    description: 'Search results for songs'
                  })
                })
              }
            }
          },
          //   404: {
          //     description: 'Not found',
          //     content: {
          //       'application/json': {
          //         schema: z.object({
          //           success: z.boolean().openapi({
          //             description: 'Indicates if the operation was successful',
          //             type: 'boolean',
          //             example: false
          //           }),
          //           message: z.string().optional().openapi({
          //             description: 'Error message',
          //             type: 'string',
          //             example: 'Not found',
          //             default: 'Not found'
          //           })
          //         })
          //       }
          //     }
          //   },
          //   500: {
          //     description: 'Internal server error',
          //     content: {
          //       'application/json': {
          //         schema: z.object({
          //           success: z.boolean().openapi({
          //             description: 'Indicates if the operation was successful',
          //             type: 'boolean',
          //             example: false
          //           }),
          //           message: z.string().optional().openapi({
          //             description: 'Error message',
          //             type: 'string',
          //             example: 'Internal server error',
          //             default: 'Internal server error'
          //           })
          //         })
          //       }
          //     }
          //   }

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
        const { query, limit } = ctx.req.valid('query')

        const result = await this.searchService.searchSongs({ query, limit: limit || 10 })

        return ctx.json({ success: true, data: result })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/search/albums',
        tags: ['Search'],
        summary: 'Search for albums',
        description: 'Search for albums based on the provided query',
        operationId: 'searchAlbums',
        request: {
          query: z.object({
            query: z.string().min(1, { message: 'Search query must be at least 1 character long' }).openapi({
              description: 'Search query for albums. Minimum 2 characters recommended for better results.',
              type: 'string',
              example: 'Evolve',
              minLength: 1
            }),
            limit: z.coerce
              .number()
              .min(1, { message: 'Limit must be at least 1' })
              .max(100, { message: 'Limit cannot exceed 100' })
              .optional()
              .openapi({
                description: 'Maximum number of results to return. Capped at 100 for performance reasons.',
                type: 'integer',
                example: '10',
                default: '10',
                minimum: 1,
                maximum: 50
              })
          })
        },
        responses: {
          200: {
            description: 'Successful response with album search results',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates whether the album search was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: SearchAlbumModel.openapi({
                    description: 'Search results for albums'
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
        const { query, limit } = ctx.req.valid('query')

        const result = await this.searchService.searchAlbums({ query, limit: limit || 10 })

        return ctx.json({ success: true, data: result })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/search/artists',
        tags: ['Search'],
        summary: 'Search for artists',
        description: 'Search for artists based on the provided query',
        operationId: 'searchArtists',
        request: {
          query: z.object({
            query: z.string().min(1, { message: 'Search query must be at least 1 character long' }).openapi({
              title: 'Search query',
              description: 'Search query for artists. Minimum 2 characters recommended for better results.',
              type: 'string',
              example: 'Adele',
              minLength: 1
            }),
            limit: z.coerce
              .number()
              .min(1, { message: 'Limit must be at least 1' })
              .max(100, { message: 'Limit cannot exceed 100' })
              .optional()
              .openapi({
                title: 'Limit',
                description: 'Maximum number of results to return. Capped at 100 for performance reasons.',
                type: 'integer',
                example: '10',
                default: '10',
                minimum: 1,
                maximum: 100
              })
          })
        },
        responses: {
          200: {
            description: 'Successful response with artist search results',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates whether the artist search was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: SearchArtistModel.openapi({
                    description: 'Search results for artists'
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
        const { query, limit } = ctx.req.valid('query')

        const result = await this.searchService.searchArtists({ query, limit: limit || 10 })

        return ctx.json({ success: true, data: result })
      }
    )

    this.controller.openapi(
      createRoute({
        method: 'get',
        path: '/search/playlists',
        tags: ['Search'],
        summary: 'Search for playlists',
        description: 'Search for playlists based on the provided query',
        operationId: 'searchPlaylists',
        request: {
          query: z.object({
            query: z.string().min(1, { message: 'Search query must be at least 1 character long' }).openapi({
              title: 'Search query',
              description: 'Search query for playlists. Minimum 2 characters recommended for better results.',
              type: 'string',
              example: 'Indie',
              minLength: 1
            }),
            limit: z.coerce
              .number()
              .min(1, { message: 'Limit must be at least 1' })
              .max(100, { message: 'Limit cannot exceed 100' })
              .optional()
              .openapi({
                title: 'Limit',
                description: 'Maximum number of results to return. Capped at 100 for performance reasons.',
                type: 'integer',
                example: '10',
                default: '10',
                minimum: 1,
                maximum: 100
              })
          })
        },
        responses: {
          200: {
            description: 'Successful response with playlist search results',
            content: {
              'application/json': {
                schema: z.object({
                  success: z.boolean().openapi({
                    description: 'Indicates whether the playlist search was successful',
                    type: 'boolean',
                    example: true
                  }),
                  data: SearchPlaylistModel.openapi({
                    description: 'Search results for playlist'
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
        const { query, limit } = ctx.req.valid('query')

        const result = await this.searchService.searchPlaylists({ query, limit: limit || 10 })

        return ctx.json({ success: true, data: result })
      }
    )
  }
}
