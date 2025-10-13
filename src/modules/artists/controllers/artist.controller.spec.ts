import { beforeAll, describe, expect, it } from 'vitest'
import { ArtistController } from './artist.controller.js'
import { ArtistModel } from '../models/artist.model.js'
import z from 'zod'

describe('ArtistController', () => {
  let artistController: ArtistController

  beforeAll(() => {
    artistController = new ArtistController()
    artistController.initRoutes()
  })

  it('Retrieve artist by url', async () => {
    const response = await artistController.controller.request(
      '/artists?url=https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z'
    )

    const { success, data } = (await response.json()) as { success: boolean; data: z.infer<typeof ArtistModel> }
    expect(() => ArtistModel.parse(data)).not.toThrow()
    expect(success).toBe(true)
  })

  it('Retrive artist by id', async () => {
    const response = await artistController.controller.request(`/artists/AR:480432`)

    const { success, data } = (await response.json()) as { success: boolean; data: z.infer<typeof ArtistModel> }

    expect(() => ArtistModel.parse(data)).not.toThrow()
    expect(success).toBe(true)
  })
})
