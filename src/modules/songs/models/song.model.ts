import { z } from 'zod'

export const SongModel = z.object({
  id: z.string(),
  type: z.string().default('TR'),
  name: z.string(),
  duration: z.number(),
  url: z.url(),
  isrc: z.string().nullable(),
  releaseDate: z.string().optional(),
  copyright: z.string().optional(),
  image: z.array(
    z.object({
      quality: z.string(),
      url: z.url()
    })
  ),
  album: z.object({
    id: z.string(),
    name: z.string(),
    url: z.url(),
    image: z.array(
      z.object({
        quality: z.string(),
        url: z.string()
      })
    )
  }),
  artists: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      url: z.url(),
      image: z.array(
        z.object({
          quality: z.string(),
          url: z.string()
        })
      )
    })
  )
})

export type SongType = z.infer<typeof SongModel>
