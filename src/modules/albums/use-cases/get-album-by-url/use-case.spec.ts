import { AlbumModel } from '../../models/index.js'
import { beforeAll, describe, expect, it } from 'vitest'
import { GetAlbumByUrlUseCase } from '../../use-cases/index.js'

describe('GetAlbumByUrl', () => {
  let getAlbumByUrlUseCase: GetAlbumByUrlUseCase

  beforeAll(() => {
    getAlbumByUrlUseCase = new GetAlbumByUrlUseCase()
  })

  it('Should get album by URL and return an album', async () => {
    const album = await getAlbumByUrlUseCase.execute(
      'https://www.pandora.com/artist/nbl-nexuz/on-my-way/AL9kVthv7lq6nfw'
    )

    expect(() => AlbumModel.parse(album)).not.toThrow()
  })
})
