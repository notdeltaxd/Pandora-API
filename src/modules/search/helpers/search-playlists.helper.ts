import z from 'zod'
import { getArtworkLinks } from '../../../common/helpers/index.js'
import { SearchPlaylistModel } from '../models/index.js'

export const createSearchPlaylistPayload = (
  results: any[],
  annotations: any,
  limit: number = 10
): z.infer<typeof SearchPlaylistModel> => {
  const mapPlaylistItem = (item: any) => {
    const author = annotations[item.listenerPandoraId]

    return {
      id: item.pandoraId || '',
      name: item.name || '',
      url: item.shareableUrlPath ? `https://www.pandora.com${item.shareableUrlPath}` : '',
      type: item.type || 'PL',
      duration: item.duration,
      description: item.description,
      image: getArtworkLinks(item),
      songCount: item.totalTracks || 0,
      author: {
        id: author.pandoraId,
        name: author.fullname,
        type: author.type || 'LI'
      }
    }
  }

  return {
    total: results.length,
    results: results.slice(0, limit).map(mapPlaylistItem)
  }
}
