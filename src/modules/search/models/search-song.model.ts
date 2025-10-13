import { SongModel } from '../../songs/models/index.js'
import z from 'zod'

export const SearchSongModel = z.object({
  total: z.number(),
  results: z.array(SongModel)
})
