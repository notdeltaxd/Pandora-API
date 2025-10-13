import { endpoints } from '../../../../common/constants/index.js'
import { useFetch } from '../../../../common/helpers/index.js'
import { AlbumModel } from '../../models/index.js'
import { IUseCase } from '../../../../types/index.js'
import { HTTPException } from 'hono/http-exception'
import z from 'zod'
import { createAlbumPayload } from '../../helpers/index.js'

export class GetAlbumByUrlUseCase implements IUseCase<string, z.infer<typeof AlbumModel>> {
  constructor() {}

  async execute(url: string) {
    try {
      // album url - https://www.pandora.com/artist/rallydee/believer/ALzVcpbcPZ63ghg

      // Extract the album ID from the URL
      const match = url.match(/\/(AL[a-zA-Z0-9]+)$/)
      if (!match || !match[1]) {
        throw new HTTPException(400, {
          message: 'The provided URL does not appear to be a valid Pandora album link. Please check and try again.'
        })
      }
      const albumId = match[1]

      const res = await useFetch<any>({
        path: endpoints.details,
        method: 'POST',
        body: { pandoraId: albumId }
      })

      const data = res.data

      const albumKeys = Object.keys(data.annotations).filter((k) => k.startsWith('AL:'))
      if (!albumKeys.length) {
        throw new HTTPException(404, {
          message: 'We couldn’t find the song details. Please verify the id or try again later.'
        })
      }
      const internalAlbumId = albumKeys[0]

      if (!data || !data.annotations || !data.annotations[internalAlbumId]) {
        throw new HTTPException(404, {
          message: 'We couldn’t find the album details. Please verify the url or try again later.'
        })
      }

      return createAlbumPayload(internalAlbumId, data)
    } catch (error) {
      throw error
    }
  }
}
