import { beforeAll, describe, expect, it } from 'vitest'
import { PlaylistController } from './index.js'
import z from 'zod'
import { PlaylistModel } from '../models/playlist.model.js'

describe('PlaylistController', () => {
  let playlistController: PlaylistController

  beforeAll(() => {
    playlistController = new PlaylistController()
    playlistController.initRoutes()
  })

  it('Retrieve playlist by URL', async () => {
    const response = await playlistController.controller.request(
      '/playlists?url=https://www.pandora.com/playlist/PL:844424980353351:1756780791'
    )

    const { success, data } = (await response.json()) as { success: boolean; data: z.infer<typeof PlaylistModel> }
    expect(() => PlaylistModel.parse(data)).not.toThrow()
    expect(success).toBe(true)
  })

  it('Retrieve playlist by id', async () => {
    const response = await playlistController.controller.request('/playlists/PL:844424980353351:1756780791')

    const { success, data } = (await response.json()) as { success: boolean; data: z.infer<typeof PlaylistModel> }

    expect(() => PlaylistModel.parse(data)).not.toThrow()
    expect(success).toBe(true)
  })
})
