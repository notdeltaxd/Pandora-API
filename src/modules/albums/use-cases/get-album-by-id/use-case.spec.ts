import { AlbumModel } from '../../models/index.js'
import { GetAlbumByIdUseCase } from '../../use-cases/index.js'
import { beforeAll, describe, expect, it } from 'vitest'

describe('GetAlbumById', () => {
  let getAlbumByIdUseCase: GetAlbumByIdUseCase

  beforeAll(() => {
    getAlbumByIdUseCase = new GetAlbumByIdUseCase()
  })

  it('should fetch album by valid ID', async () => {
    const album = await getAlbumByIdUseCase.execute('AL:1238570')

    expect(() => AlbumModel.parse(album)).not.toThrow()
  })

  it('should not fetch album by invalid ID', async () => {
    await expect(getAlbumByIdUseCase.execute('invalid-id')).rejects.toThrow('Album not found')
  })
})
