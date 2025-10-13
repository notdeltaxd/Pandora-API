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
      // Fetch main song details
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

      // Fetch all annotations for similar tracks
      const similarTracks = await useFetch<any>({
        path: endpoints.annotate,
        method: 'POST',
        body: { pandoraIds: similarIds }
      })

      const annotations = similarTracks.data || {}

      // // Map each track’s data into your return structure
      // const items = similarIds
      //   .map((id: string) => {
      //     const track = annotations[id]
      //     if (!track) return null

      //     const ar = annotations[track.artistId]
      //     const al = annotations[track.albumId]

      //     return {
      //       id: track.pandoraId || '',
      //       name: track.name || '',
      //       type: 'TR',
      //       duration: track.duration || 0,
      //       url: track.shareableUrlPath ? `https://www.pandora.com${track.shareableUrlPath}` : '',
      //       isrc: track.isrc || null,
      //       releaseDate: data.trackDetails.releaseDate,
      //       copyright: data.trackDetails.copyright,
      //       album: {
      //         id: al?.pandoraId || '',
      //         name: al?.name || '',
      //         image: getArtworkLinks(al),
      //         url: al?.shareableUrlPath ? `https://www.pandora.com${al.shareableUrlPath}` : ''
      //       },
      //       artists: track.artistName
      //         ? [
      //             {
      //               id: track.artistId,
      //               name: track.artistName,
      //               image: getArtworkLinks(ar),
      //               url: ar ? `https://www.pandora.com${ar.shareableUrlPath}` : ''
      //             }
      //           ]
      //         : [],
      //       image: getArtworkLinks(track)
      //     }
      //   })
      //   .filter(Boolean)

      // return items

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
