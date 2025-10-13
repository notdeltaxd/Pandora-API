import z from 'zod'
import { getArtworkLinks } from '../../../common/helpers/index.js'
import { SearchArtistModel } from '../models/index.js'

export const createSearchArtistPayload = (results: any[], limit: number = 10): z.infer<typeof SearchArtistModel> => {
  const mapArtistItem = (item: any) => {
    return {
      id: item.pandoraId || '',
      name: item.name || '',
      type: item.type || 'AR',
      url: item.shareableUrlPath ? `https://www.pandora.com${item.shareableUrlPath}` : '',
      image: getArtworkLinks(item)
    }
  }

  return {
    total: results.length,
    results: results.slice(0, limit).map(mapArtistItem)
  }
}
