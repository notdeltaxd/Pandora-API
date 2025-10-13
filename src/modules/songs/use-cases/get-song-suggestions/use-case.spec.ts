import { SongModel } from '../../models/index.js'
import { GetSongSuggestionsUseCase } from '../../use-cases/index.js'
import { HTTPException } from 'hono/http-exception'
import { beforeAll, describe, expect, it } from 'vitest'

describe('GetSongById', () => {
  let getSongSuggestionsUseCase: GetSongSuggestionsUseCase

  beforeAll(() => {
    getSongSuggestionsUseCase = new GetSongSuggestionsUseCase()
  })

  it('should return song suggestions by ID', async () => {
    const song = await getSongSuggestionsUseCase.execute('TR:11423273')

    expect(() => SongModel.parse(song)).not.toThrow()
  })

  it('should not return song suggestions by invalid ID', async () => {
    await expect(getSongSuggestionsUseCase.execute('invalid-id')).rejects.toThrow(HTTPException)
  })
})
