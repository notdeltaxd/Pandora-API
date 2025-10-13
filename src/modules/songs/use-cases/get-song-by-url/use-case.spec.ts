import { SongModel } from '../../models/index.js'
import { GetSongByUrlUseCase } from '../../use-cases/index.js'
import { HTTPException } from 'hono/http-exception'
import { beforeAll, describe, expect, it } from 'vitest'

describe('GetSongByUrl', () => {
  let getSongByUrlUseCase: GetSongByUrlUseCase

  beforeAll(() => {
    getSongByUrlUseCase = new GetSongByUrlUseCase()
  })

  it('should return a song by URL', async () => {
    const song = await getSongByUrlUseCase.execute(
      'https://www.pandora.com/artist/imagine-dragons/evolve/believer/TRtlJmmZP3nzh3m'
    )

    expect(() => SongModel.parse(song)).not.toThrow()
  })
})
