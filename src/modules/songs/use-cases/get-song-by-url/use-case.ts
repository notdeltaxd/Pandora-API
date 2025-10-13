import { IUseCase } from '../../../../types/index.js'
import z from 'zod'
import { SongModel } from '../../models/song.model.js'
import { getArtworkLinks, useFetch } from '../../../../common/helpers/index.js'
import { endpoints, userAgents } from '../../../../common/constants/index.js'
import { HTTPException } from 'hono/http-exception'
import { createSongPayload } from '../../helper/song.helper.js'

export class GetSongByUrlUseCase implements IUseCase<string, z.infer<typeof SongModel>> {
  constructor() {}

  async execute(url: string) {
    try {
      const match = url.match(/\/(TR[a-zA-Z0-9]+)$/)
      if (!match || !match[1]) {
        throw new HTTPException(400, {
          message: 'The provided URL does not appear to be a valid Pandora album link. Please check and try again.'
        })
      }
      const songId = match[1]

      const res = await useFetch<any>({
        path: endpoints.details,
        method: 'POST',
        body: { pandoraId: songId }
      })

      const data = res.data
      // console.log(JSON.stringify(data, null, 2))

      const trackKeys = Object.keys(data.annotations).filter((k) => k.startsWith('TR:'))
      if (!trackKeys.length) {
        throw new HTTPException(404, {
          message: 'We couldn’t find the song details. Please verify the id or try again later.'
        })
      }
      const internalSongId = trackKeys[0]

      if (!data || !data.annotations || !data.annotations[internalSongId]) {
        throw new HTTPException(404, {
          message: 'We couldn’t find the song details. Please verify the id or try again later.'
        })
      }

      return createSongPayload(internalSongId, data)
    } catch (error) {
      throw error
    }
  }
}
