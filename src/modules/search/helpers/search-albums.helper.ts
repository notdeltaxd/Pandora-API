import z from 'zod'
import { getArtworkLinks } from '../../../common/helpers/index.js'
import { SearchAlbumModel } from '../models/index.js'

export const createSearchAlbumPayload = (
  results: any[],
  annotations: any,
  limit: number = 10
): z.infer<typeof SearchAlbumModel> => {
  const mapAlbumItem = (item: any) => {
    const ar = annotations[item.artistId]

    return {
      id: item.pandoraId || '',
      name: item.name || '',
      url: item.shareableUrlPath ? `https://www.pandora.com${item.shareableUrlPath}` : '',
      type: item.type || 'AL',
      image: getArtworkLinks(item),
      artists: item.artistName
        ? [
            {
              id: item.artistId,
              name: item.artistName,
              image: getArtworkLinks(ar),
              url: ar ? `https://www.pandora.com${ar.shareableUrlPath}` : ``
            }
          ]
        : [],
      songCount: item.trackCount || null
    }
  }

  return {
    total: results.length,
    results: results.slice(0, limit).map(mapAlbumItem)
  }
}
