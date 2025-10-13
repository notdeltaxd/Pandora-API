import { GetArtistByIdUseCase, GetArtistByUrlUseCase } from '../use-cases/index.js'

export class ArtistService {
  private readonly getArtistByIdUseCase: GetArtistByIdUseCase
  private readonly getArtistByUrlUseCase: GetArtistByUrlUseCase

  constructor() {
    this.getArtistByIdUseCase = new GetArtistByIdUseCase()
    this.getArtistByUrlUseCase = new GetArtistByUrlUseCase()
  }

  async getArtistById(id: string) {
    return this.getArtistByIdUseCase.execute(id)
  }

  async getAlbumByUrl(url: string) {
    return this.getArtistByUrlUseCase.execute(url)
  }
}
