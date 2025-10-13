import { GetAlbumByIdUseCase, GetAlbumByUrlUseCase } from '../use-cases/index.js'

export class AlbumService {
  private getAlbumByIdUseCase: GetAlbumByIdUseCase
  private getAlbumByUrlUseCase: GetAlbumByUrlUseCase

  constructor() {
    this.getAlbumByIdUseCase = new GetAlbumByIdUseCase()
    this.getAlbumByUrlUseCase = new GetAlbumByUrlUseCase()
  }

  async getAlbumById(id: string) {
    return this.getAlbumByIdUseCase.execute(id)
  }

  async getAlbumByUrl(url: string) {
    return this.getAlbumByUrlUseCase.execute(url)
  }
}
