import { GetPlaylistByIdUseCase, GetPlaylistByUrlUseCase } from '../use-cases/index.js'

export class PlaylistService {
  private readonly getPlaylistByIdUseCase: GetPlaylistByIdUseCase
  private readonly getPlaylistByUrlUseCase: GetPlaylistByUrlUseCase

  constructor() {
    this.getPlaylistByIdUseCase = new GetPlaylistByIdUseCase()
    this.getPlaylistByUrlUseCase = new GetPlaylistByUrlUseCase()
  }

  async getPlaylistById(id: string) {
    return this.getPlaylistByIdUseCase.execute(id)
  }

  async getPlaylistByUrl(url: string) {
    return this.getPlaylistByUrlUseCase.execute(url)
  }
}
