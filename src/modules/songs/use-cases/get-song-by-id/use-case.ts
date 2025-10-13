import { IUseCase } from '../../../../types/index.js'
import z from 'zod'
import { SongModel } from '../../models/song.model.js'
import { getArtworkLinks, useFetch } from '../../../../common/helpers/index.js'
import { endpoints } from '../../../../common/constants/index.js'
import { HTTPException } from 'hono/http-exception'
import { createSongPayload } from '../../helper/song.helper.js'

export class GetSongByIdUseCase implements IUseCase<string, z.infer<typeof SongModel>> {
  constructor() {}

  async execute(id: string) {
    try {
      const res = await useFetch<any>({
        path: endpoints.details,
        method: 'POST',
        body: { pandoraId: id }
      })

      const data = res.data
      if (!data || !data.annotations || !data.annotations[id]) {
        throw new HTTPException(404, {
          message: 'We couldn’t find the song details. Please verify the id or try again later.'
        })
      }

      return createSongPayload(id, data)
    } catch (error) {
      throw error
    }
  }
}
