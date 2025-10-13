import { SongModel } from '../../songs/models/song.model.js'
import { z } from 'zod'

export const PlaylistModel = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  description: z.string().nullable(),
  url: z.url(),
  duration: z.number(),
  image: z.array(
    z.object({
      quality: z.string(),
      url: z.url()
    })
  ),
  songCount: z.number(),
  songs: z.array(SongModel)
})

export type PlaylistType = z.infer<typeof PlaylistModel>
