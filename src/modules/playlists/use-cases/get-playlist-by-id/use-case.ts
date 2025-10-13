import z from 'zod'
import { IUseCase } from '../../../../types/index.js'
import type { PlaylistModel } from '../../models/index.js'
import { useFetch } from '../../../../common/helpers/index.js'
import { endpoints } from '../../../../common/constants/index.js'
import { HTTPException } from 'hono/http-exception'
import { createPlaylistPayload } from '../../helpers/index.js'

export class GetPlaylistByIdUseCase implements IUseCase<string, z.infer<typeof PlaylistModel>> {
  constructor() {}

  async execute(id: string) {
    try {
      const res = await useFetch<any>({
        path: endpoints.playlist.tracks,
        method: 'POST',
        body: {
          request: {
            pandoraId: id,
            playlistVersion: 0,
            offset: 0,
            limit: 100,
            annotationLimit: 100,
            allowedTypes: ['TR'],
            bypassPrivacyRules: true
          }
        }
      })

      const data = res.data
      if (!data || !data.tracks || !Array.isArray(data.tracks)) {
        throw new HTTPException(404, {
          message: 'We couldn’t find the playlist details. Please verify the id or try again later.'
        })
      }

      return createPlaylistPayload(data)
    } catch (error) {
      throw error
    }
  }
}
