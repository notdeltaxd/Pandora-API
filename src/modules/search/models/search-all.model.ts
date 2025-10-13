import { SearchAlbumModel } from './search-album.model.js'
import { SearchArtistModel } from './search-artist.model.js'
import { SearchPlaylistModel } from './search-playlist.model.js'
import { SearchSongModel } from './search-song.model.js'
import z from 'zod'

export const SearchModel = z.object({
  songs: SearchSongModel,
  albums: SearchAlbumModel,
  artists: SearchArtistModel,
  playlists: SearchPlaylistModel
})
