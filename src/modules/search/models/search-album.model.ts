import { ArtistModel } from '../../artists/models/artist.model.js'
import z from 'zod'

export const SearchAlbumModel = z.object({
  total: z.number(),
  results: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      type: z.string(),
      url: z.url(),
      image: z.array(
        z.object({
          url: z.url(),
          quality: z.string()
        })
      ),
      artists: z.array(ArtistModel),
      songCount: z.number().nullable()
    })
  )
})
