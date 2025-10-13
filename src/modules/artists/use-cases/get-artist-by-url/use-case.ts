import z from 'zod'
import { IUseCase } from '../../../../types/index.js'
import { ArtistModel } from '../../../artists/models/artist.model.js'
import { endpoints } from '../../../../common/constants/index.js'
import { HTTPException } from 'hono/http-exception'
import { useFetch } from '../../../../common/helpers/index.js'
import { createArtistPayload } from '../../helpers/index.js'

export class GetArtistByUrlUseCase implements IUseCase<string, z.infer<typeof ArtistModel>> {
  constructor() {}

  async execute(url: string) {
    try {
      const match = url.match(/\/(AR[a-zA-Z0-9]+)$/)
      if (!match || !match[1]) {
        throw new HTTPException(400, {
          message: 'The provided URL does not appear to be a valid Pandora album link. Please check and try again.'
        })
      }
      const artistId = match[1]

      const res = await useFetch<any>({
        path: endpoints.details,
        method: 'POST',
        body: { pandoraId: artistId }
      })

      const data = res.data

      const artistKeys = Object.keys(data.annotations).filter((k) => k.startsWith('AR:'))
      if (!artistKeys.length) {
        throw new HTTPException(404, {
          message: 'We couldn’t find the artist details. Please verify the id or try again later.'
        })
      }
      const internalArtistId = artistKeys[0]
      if (!data || !data.annotations || !data.annotations[internalArtistId]) {
        throw new HTTPException(404, {
          message: 'We couldn’t find the artist details. Please verify the url or try again later.'
        })
      }

      // console.log(JSON.stringify(data, null, 2))

      return createArtistPayload(internalArtistId, data)
    } catch (error) {
      throw error
    }
  }
}
