import { ArtistType } from '../models/index.js'
import { getArtworkLinks } from '../../../common/helpers/index.js'
import { createSongPayload } from '../../songs/helper/index.js'
import { createAlbumPayload } from '../../albums/helpers/index.js'

export const createArtistPayload = (id: string, data: any): ArtistType => {
  const artist = data.annotations[id]

  return {
    id: artist.pandoraId,
    name: artist.name,
    url: artist.shareableUrlPath ? `https://www.pandora.com${artist.shareableUrlPath}` : '',
    type: artist.type || 'AR',
    image: getArtworkLinks(artist),
    topSongs: data.artistDetails?.topTracks.map((id: string) => {
      const t = data.annotations[id]
      if (!t) return null
      const ar = data.annotations[t.artistId]
      const al = data.annotations[t.albumId]
      return {
        id: t.pandoraId,
        name: t.name,
        type: 'TR',
        duration: t.duration || 0,
        url: t.shareableUrlPath ? `https://www.pandora.com${t.shareableUrlPath}` : ``,
        isrc: t.isrc || null,
        album: {
          id: al.pandoraId || ``,
          name: al.name || ``,
          image: getArtworkLinks(al),
          url: al.shareableUrlPath ? `https://www.pandora.com${al.shareableUrlPath}` : ``
        },
        artists: t.artistName
          ? [
              {
                id: t.artistId,
                name: t.artistName,
                image: getArtworkLinks(ar),
                url: ar ? `https://www.pandora.com${ar.shareableUrlPath}` : ``
              }
            ]
          : [],
        image: getArtworkLinks(t)
      }
    }),
    topAlbums: data.artistDetails?.topAlbums.map((id: string) => {
      const a = data.annotations[id]
      if (!a) return null
      const ar = data.annotations[a.artistId]
      return {
        id: a.pandoraId,
        name: a.name,
        type: 'AL',
        duration: a.duration,
        trackCount: a.trackCount,
        url: a.shareableUrlPath ? `https://www.pandora.com${a.shareableUrlPath}` : null,
        artists: a.artistName
          ? [
              {
                id: a.artistId,
                name: a.artistName,
                image: getArtworkLinks(ar),
                url: ar ? `https://www.pandora.com${ar.shareableUrlPath}` : ``
              }
            ]
          : [],
        songCount: a.trackCount || null,
        image: getArtworkLinks(a),
        songs: a.tracks
      }
    }),
    similarArtists: data.artistDetails.similarArtists.map((id: string) => {
      const ar = data.annotations[id]
      if (!ar) return null
      return {
        id: ar.pandoraId,
        name: ar.name,
        type: 'AR',
        url: ar.shareableUrlPath ? `https://www.pandora.com${ar.shareableUrlPath}` : ``,
        image: getArtworkLinks(ar),
        albumCount: ar.albumCount,
        trackCount: ar.trackCount
      }
    })
  }
}
