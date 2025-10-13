import { AlbumType } from '../models/index.js'
import { getArtworkLinks } from '../../../common/helpers/index.js'
import { createSongPayload } from '../../songs/helper/index.js'

export const createAlbumPayload = (id: string, data: any): AlbumType => {
  const album = data.annotations[id]
  const artistInfo = data.annotations[album.artistId]

  return {
    id: album.pandoraId || '',
    name: album.name || '',
    description: album.description || '',
    type: album.type || 'AL',
    url: album.shareableUrlPath ? `https://www.pandora.com${album.shareableUrlPath}` : '',
    artists: album.artistName
      ? [
          {
            id: album.artistId,
            name: album.artistName,
            image: getArtworkLinks(artistInfo),
            url: artistInfo ? `https://www.pandora.com${artistInfo.shareableUrlPath}` : ``
          }
        ]
      : [],
    image: getArtworkLinks(album),
    totalSongs: album.trackCount || 0,
    songs: album.tracks.map((id: string) => createSongPayload(id, data))
  }
}
