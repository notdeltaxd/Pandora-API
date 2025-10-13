import { GetSongByIdUseCase, GetSongByUrlUseCase, GetSongSuggestionsUseCase } from '../use-cases/index.js'

export class SongService {
  private readonly getSongByIdUseCase: GetSongByIdUseCase
  private readonly getSongByUrlUseCase: GetSongByUrlUseCase
  private readonly getSongSuggestionsUseCase: GetSongSuggestionsUseCase

  constructor() {
    this.getSongByIdUseCase = new GetSongByIdUseCase()
    this.getSongByUrlUseCase = new GetSongByUrlUseCase()
    this.getSongSuggestionsUseCase = new GetSongSuggestionsUseCase()
  }

  async getSongById(id: string) {
    return this.getSongByIdUseCase.execute(id)
  }

  async getSongByUrl(url: string) {
    return this.getSongByUrlUseCase.execute(url)
  }

  async getSongSuggestions(id: string) {
    return this.getSongSuggestionsUseCase.execute(id)
  }
}
