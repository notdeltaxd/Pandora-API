import { SongController } from '../controllers/index.js'
import { SongModel } from '../models/index.js'
import { beforeAll, describe, expect, it } from 'vitest'
import type { z } from 'zod'

describe('SongController', () => {
  let songController: SongController

  beforeAll(() => {
    songController = new SongController()
    songController.initRoutes()
  })

  it('retrieve songs by url', async () => {
    const response = await songController.controller.request(
      '/songs?url=https://www.pandora.com/artist/imagine-dragons/evolve/believer/TRtlJmmZP3nzh3m'
    )

    const { success, data } = (await response.json()) as { success: boolean; data: z.infer<typeof SongModel>[] }
    expect(() => SongModel.parse(data)).not.toThrow()
    expect(success).toBe(true)
  })

  it('retrieve song by ID', async () => {
    const response = await songController.controller.request('/songs/TR:11423273')

    const { success, data } = (await response.json()) as { success: boolean; data: z.infer<typeof SongModel>[] }
    expect(() => SongModel.parse(data)).not.toThrow()
    expect(success).toBe(true)
  })

  it('retrieve song suggestions', async () => {
    const response = await songController.controller.request('/songs/TR:11423273/suggestions')

    const { success, data } = (await response.json()) as { success: boolean; data: z.infer<typeof SongModel>[] }
    expect(() => SongModel.parse(data)).not.toThrow()
    expect(success).toBe(true)
  })
})
