import { beforeAll, describe, expect, it } from 'vitest'
import { GetArtistByUrlUseCase } from './use-case.js'
import { ArtistModel } from '../../models/artist.model.js'

describe('GetArtistById', () => {
  let getArtistByUrlUseCase: GetArtistByUrlUseCase

  beforeAll(() => {
    getArtistByUrlUseCase = new GetArtistByUrlUseCase()
  })

  it('should fetch artist by valid URL', async () => {
    const artist = await getArtistByUrlUseCase.execute('https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z')

    expect(() => ArtistModel.parse(artist)).not.toThrow()
  })

  it('should not fetch artist by invalid URL', async () => {
    await expect(getArtistByUrlUseCase.execute('invalid-url')).rejects.toThrow('Artist not found')
  })
})
