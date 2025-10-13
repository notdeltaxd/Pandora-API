import { getArtworkLinks } from '../../../common/helpers/index.js'
import { SongType } from '../models/song.model.js'

export const createSongPayload = (id: string, data: any): SongType => {
  const track = data.annotations[id]
  const ar = data.annotations[track.artistId]
  const al = data.annotations[track.albumId]

  // console.log(JSON.stringify(track,null,2))

  return {
    id: track.pandoraId || '',
    name: track.name || '',
    type: 'TR',
    duration: track.duration || 0,
    url: track.shareableUrlPath ? `https://www.pandora.com${track.shareableUrlPath}` : '',
    isrc: track.isrc || null,
    album: {
      id: track.pandoraId || ``,
      name: track.name || ``,
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
