import { SongModel } from '../../songs/models/song.model.js'
import { z } from 'zod'

const ArtistModel = z.object({
  id: z.string(),
  name: z.string(),
  image: z.array(
    z.object({
      url: z.string().url(),
      quality: z.string()
    })
  ),
  url: z.url()
})

export const AlbumModel = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  description: z.string().nullable(),
  url: z.url(),
  image: z.array(
    z.object({
      url: z.url(),
      quality: z.string()
    })
  ),
  artists: z.array(ArtistModel),
  totalSongs: z.number(),
  songs: z.array(SongModel).nullable()
})

export type AlbumType = z.infer<typeof AlbumModel>
