import z from 'zod'
import { getArtworkLinks } from '../../../common/helpers/index.js'
import { SearchSongModel } from '../models/index.js'

export const createSearchSongPayload = (
  results: any[],
  annotations: any,
  limit: number = 10
): z.infer<typeof SearchSongModel> => {
  const mapSongs = (track: any) => {
    const ar = annotations[track.artistId]
    const al = annotations[track.albumId]

    return {
      id: track.pandoraId || '',
      name: track.name || '',
      type: track.type || 'TR',
      duration: track.duration || 0,
      url: track.shareableUrlPath ? `https://www.pandora.com${track.shareableUrlPath}` : '',
      isrc: track.isrc || null,
      album: {
        id: track.albumId || ``,
        name: track.albumName || ``,
        image: getArtworkLinks(al),
        url: al.shareableUrlPath ? `https://www.pandora.com${al.shareableUrlPath}` : ``
      },
      artists: track.artistName
        ? [
            {
              id: track.artistId,
              name: track.artistName,
              image: getArtworkLinks(ar),
              url: ar ? `https://www.pandora.com${ar.shareableUrlPath}` : ``
            }
          ]
        : [],
      image: getArtworkLinks(track)
    }
  }

  return {
    total: results.length,
    results: results.slice(0, limit).map(mapSongs)
  }
}
