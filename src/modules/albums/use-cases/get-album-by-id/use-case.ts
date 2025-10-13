import { useFetch } from '../../../../common/helpers/index.js'
import { HTTPException } from 'hono/http-exception'
import type { AlbumModel } from '../../../albums/models/index.js'
import type { z } from 'zod'
import type { IUseCase } from '../../../../types/index.js'
import { endpoints } from '../../../../common/constants/index.js'
import { createAlbumPayload } from '../../helpers/index.js'

export class GetAlbumByIdUseCase implements IUseCase<string, z.infer<typeof AlbumModel>> {
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
          message: 'We couldn’t find the album details. Please verify the id or try again later.'
        })
      }

      return createAlbumPayload(id, data)
    } catch (error) {
      throw error
    }
  }
}
