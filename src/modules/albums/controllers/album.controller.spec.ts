import { AlbumModel } from '../models/album.model.js'
import { AlbumController } from './album.controller.js'
import { beforeAll, describe, expect, it } from 'vitest'
import type { z } from 'zod'

describe('AlbumController', () => {
  let albumController: AlbumController

  beforeAll(() => {
    albumController = new AlbumController()
    albumController.initRoutes()
  })

  it('retrieve album by url', async () => {
    const response = await albumController.controller.request(
      '/albums?url=https://www.pandora.com/artist/nbl-nexuz/on-my-way/AL9kVthv7lq6nfw'
    )

    const { success, data } = (await response.json()) as { success: boolean; data: z.infer<typeof AlbumModel> }
    expect(() => AlbumModel.parse(data)).not.toThrow()
    expect(success).toBe(true)
  })

  it('Retrive album by id', async () => {
    const response = await albumController.controller.request(`/albums/AL:1238570`)

    const { success, data } = (await response.json()) as { success: boolean; data: z.infer<typeof AlbumModel> }

    expect(() => AlbumModel.parse(data)).not.toThrow()
    expect(success).toBe(true)
  })
})
