import z from 'zod'

export const SearchPlaylistModel = z.object({
  total: z.number(),
  results: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      type: z.string(),
      url: z.string(),
      duration: z.number(),
      description: z.string().optional(),
      image: z.array(
        z.object({
          url: z.url(),
          quality: z.string()
        })
      ),
      songCount: z.number(),
      author: z.object({
        id: z.string(),
        name: z.string(),
        type: z.string()
      })
    })
  )
})
