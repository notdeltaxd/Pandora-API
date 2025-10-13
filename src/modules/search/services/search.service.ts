import { SearchArgs } from '../../../types/index.js'
import {
  SearchAlbumsUseCase,
  SearchAllUseCase,
  SearchArtistsUseCase,
  SearchPlaylistsUseCase,
  SearchSongsUseCase
} from '../use-cases/index.js'

export class SearchService {
  private readonly searchAllUseCase: SearchAllUseCase
  private readonly searchSongsUseCase: SearchSongsUseCase
  private readonly searchAlbumsUseCase: SearchAlbumsUseCase
  private readonly searchArtistsUseCase: SearchArtistsUseCase
  private readonly searchPlaylistsUseCase: SearchPlaylistsUseCase

  constructor() {
    this.searchAllUseCase = new SearchAllUseCase()
    this.searchSongsUseCase = new SearchSongsUseCase()
    this.searchAlbumsUseCase = new SearchAlbumsUseCase()
    this.searchArtistsUseCase = new SearchArtistsUseCase()
    this.searchPlaylistsUseCase = new SearchPlaylistsUseCase()
  }

  searchAll = (query: string) => {
    return this.searchAllUseCase.execute(query)
  }

  searchSongs = (args: SearchArgs) => {
    return this.searchSongsUseCase.execute(args)
  }

  searchAlbums = (args: SearchArgs) => {
    return this.searchAlbumsUseCase.execute(args)
  }

  searchArtists = (args: SearchArgs) => {
    return this.searchArtistsUseCase.execute(args)
  }

  searchPlaylists = (args: SearchArgs) => {
    return this.searchPlaylistsUseCase.execute(args)
  }
}
