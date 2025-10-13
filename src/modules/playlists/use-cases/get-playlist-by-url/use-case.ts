import z from 'zod'
import { IUseCase } from '../../../../types/index.js'
import { PlaylistModel } from '../../models/playlist.model.js'
import { HTTPException } from 'hono/http-exception'
import { useFetch } from '../../../../common/helpers/index.js'
import { endpoints } from '../../../../common/constants/index.js'
import { createPlaylistPayload } from '../../helpers/index.js'

export class GetPlaylistByUrlUseCase implements IUseCase<string, z.infer<typeof PlaylistModel>> {
  constructor() {}

  async execute(url: string) {
    try {
      // url = https://www.pandora.com/playlist/PL:844424980353351:1756780791"
      const match = url.match(/playlist\/(PL:[^/]+)/)
      const id = match ? match[1] : null

      if (!id) {
        throw new HTTPException(400, { message: 'Invalid playlist link format' })
      }

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
