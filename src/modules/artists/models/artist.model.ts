import { AlbumModel } from '../../albums/models/index.js'
import { SongModel } from '../../songs/models/index.js'
import { z } from 'zod'

const SimilarArtistModel = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string().optional(),
  url: z.url().optional()
})

export const ArtistModel = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string().optional(),
  url: z.url(),
  image: z.array(
    z.object({
      quality: z.string(),
      url: z.url()
    })
  ),
  topSongs: z.array(SongModel).optional(),
  topAlbums: z.array(AlbumModel).optional(),
  similarArtists: z.array(SimilarArtistModel).optional()
})

export type ArtistType = z.infer<typeof ArtistModel>
