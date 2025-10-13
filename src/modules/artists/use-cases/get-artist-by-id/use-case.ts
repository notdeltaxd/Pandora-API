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

      // const item = data.annotations[id]

      // const imageUrl = getArtworkLinks(item)
      // const image = imageUrl ? imageUrl : []

      // const topSongs = (data.artistDetails?.topTracks || [])
      //   .map((id: string) => {
      //     const t = data.annotations[id]
      //     if (!t) return null
      //     const ar = data.annotations[t.artistId];
      //     const al = data.annotations[t.albumId];
      //     return {
      //       id: t.pandoraId,
      //       name: t.name,
      //       type: 'TR',
      //       duration: t.duration || 0,
      //       url: t.shareableUrlPath ? `https://www.pandora.com${t.shareableUrlPath}` : ``,
      //       isrc: t.isrc || null,
      //       album: {
      //         id: al.pandoraId || ``,
      //         name: al.name || ``,
      //         image: getArtworkLinks(al),
      //         url: al.shareableUrlPath ? `https://www.pandora.com${al.shareableUrlPath}` : ``
      //       },
      //       artists: t.artistName
      //         ? [
      //             {
      //               id: t.artistId,
      //               name: t.artistName,
      //               image: getArtworkLinks(ar),
      //               url: ar ? `https://www.pandora.com${ar.shareableUrlPath}` : ``
      //             }
      //           ]
      //         : [],
      //       image: getArtworkLinks(t)
      //     }
      //   })
      //   .filter(Boolean)

      // const topAlbums = (data.artistDetails?.topAlbums || [])
      //   .map((id: string) => {
      //     const a = data.annotations[id]
      //     if (!a) return null
      //     const ar = data.annotations[a.artistId]
      //     return {
      //       id: a.pandoraId,
      //       name: a.name,
      //       type: 'AL',
      //       duration: a.duration,
      //       trackCount: a.trackCount,
      //       url: a.shareableUrlPath ? `https://www.pandora.com${a.shareableUrlPath}` : null,
      //       artists: a.artistName
      //         ? [
      //             {
      //               id: a.artistId,
      //               name: a.artistName,
      //               image: getArtworkLinks(ar),
      //               url: ar ? `https://www.pandora.com${ar.shareableUrlPath}` : ``
      //             }
      //           ]
      //         : [],
      //       songCount: a.trackCount || null,
      //       image: getArtworkLinks(a),
      //       songs: a.tracks
      //     }
      //   })
      //   .filter(Boolean)

      // const similarArtists = (data.artistDetails.similarArtists || [])
      //   .map((id: string) => {
      //     const ar = data.annotations[id]
      //     if (!ar) return null
      //     return {
      //       id: ar.pandoraId,
      //       name: ar.name,
      //       type: 'AR',
      //       url: ar.shareableUrlPath ? `https://www.pandora.com${ar.shareableUrlPath}` : ``,
      //       image: getArtworkLinks(ar),
      //       albumCount: ar.albumCount,
      //       trackCount: ar.trackCount
      //     }
      //   })
      //   .filter(Boolean)

      // return {
      //   id: item.pandoraId,
      //   name: item.name,
      //   url: item.shareableUrlPath ? `https://www.pandora.com${item.shareableUrlPath}` : '',
      //   type: item.type || 'AR',
      //   image,
      //   topSongs,
      //   topAlbums,
      //   similarArtists
      // }

      // console.log(JSON.stringify(data, null, 2))

      return createArtistPayload(id, data)
    } catch (error) {
      throw error
    }
  }
}
