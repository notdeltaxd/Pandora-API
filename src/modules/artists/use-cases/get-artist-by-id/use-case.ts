import z from 'zod'
import { IUseCase } from '../../../../types/index.js'
import { ArtistModel } from '../../../artists/models/artist.model.js'
import { getArtworkLinks, useFetch } from '../../../../common/helpers/index.js'
import { endpoints } from '../../../../common/constants/index.js'
import { HTTPException } from 'hono/http-exception'
import { createArtistPayload } from '../../helpers/index.js'

export class GetArtistByIdUseCase implements IUseCase<string, z.infer<typeof ArtistModel>> {
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
          message: `We couldn't find the artist details. Please verify the id or try again later.`
        })
      }

      return createArtistPayload(id, data)
    } catch (error) {
      throw error
    }
  }
}
