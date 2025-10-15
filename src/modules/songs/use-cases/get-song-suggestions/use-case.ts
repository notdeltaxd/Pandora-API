import { IUseCase } from '../../../../types/index.js'
import z from 'zod'
import { SongModel } from '../../models/song.model.js'
import { useFetch } from '../../../../common/helpers/index.js'
import { endpoints } from '../../../../common/constants/index.js'
import { HTTPException } from 'hono/http-exception'
import { createSongPayload } from '../../helper/song.helper.js'

export class GetSongSuggestionsUseCase implements IUseCase<string, z.infer<typeof SongModel>[]> {
  constructor() {}

  async execute(id: string) {
    try {
      const res = await useFetch<any>({
        path: endpoints.details,
        method: 'POST',
        body: { pandoraId: id }
      })

      const data = res.data
      if (!data || !data.trackDetails) {
        throw new HTTPException(404, {
          message: 'We couldn’t find the song details. Please verify the id or try again later.'
        })
      }

      const similarIds = data.trackDetails.similarTracks
      if (!similarIds || !similarIds.length) {
        throw new HTTPException(404, {
          message: 'We couldn’t find any similar tracks for the given ID. Please verify the id or try again later.'
        })
      }

      const similarTracks = await useFetch<any>({
        path: endpoints.annotate,
        method: 'POST',
        body: { pandoraIds: similarIds }
      })

      const annotations = similarTracks.data || {}

      return similarIds.map((id: string) =>
        createSongPayload(id, {
          annotations,
          trackDetails: data.trackDetails
        })
      )
    } catch (error) {
      throw error
    }
  }
}
