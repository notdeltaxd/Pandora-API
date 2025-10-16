import { PlaylistType } from '../models/index.js'
import { getArtworkLinks } from '../../../common/helpers/index.js'
import { createSongPayload } from '../../songs/helper/index.js'

export const createPlaylistPayload = (data: any): PlaylistType => {
  const tracks = data.tracks.map((t: any) => {
    const trackId = t.pandoraId

    return createSongPayload(trackId, data)
  });

  return {
    id: data.pandoraId || '',
    name: data.name || '',
    description: data.description || '',
    type: 'PL' as const,
    url: data.shareableUrlPath ? `https://www.pandora.com${data.shareableUrlPath}` : '',
    duration: data.duration || 0,
    image: getArtworkLinks(data),
    songCount: data.totalTracks || tracks.length,
    songs: tracks
  }
}
