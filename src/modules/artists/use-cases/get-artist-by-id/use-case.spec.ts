import { beforeAll, describe, expect, it } from 'vitest'
import { GetArtistByIdUseCase } from './use-case.js'
import { ArtistModel } from '../../models/artist.model.js'

describe('GetArtistById', () => {
  let getArtistByIdUseCase: GetArtistByIdUseCase

  beforeAll(() => {
    getArtistByIdUseCase = new GetArtistByIdUseCase()
  })

  it('should fetch artist by valid ID', async () => {
    const artist = await getArtistByIdUseCase.execute('AR:480432')

    expect(() => ArtistModel.parse(artist)).not.toThrow()
  })

  it('should not fetch artist by invalid ID', async () => {
    await expect(getArtistByIdUseCase.execute('invalid-id')).rejects.toThrow('Artist not found')
  })
})
