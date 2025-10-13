import { SongModel } from '../../models/index.js'
import { GetSongByIdUseCase } from '../../use-cases/index.js'
import { HTTPException } from 'hono/http-exception'
import { beforeAll, describe, expect, it } from 'vitest'

describe('GetSongById', () => {
  let getSongByIdUseCase: GetSongByIdUseCase

  beforeAll(() => {
    getSongByIdUseCase = new GetSongByIdUseCase()
  })

  it('should return a song by ID', async () => {
    const song = await getSongByIdUseCase.execute('TR:11423273')

    expect(() => SongModel.parse(song)).not.toThrow()
  })

  it('should not return a song by invalid ID', async () => {
    await expect(getSongByIdUseCase.execute('invalid-id')).rejects.toThrow(HTTPException)
  })
})
