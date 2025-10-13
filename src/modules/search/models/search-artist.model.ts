import z from 'zod'

export const SearchArtistModel = z.object({
  total: z.number(),
  results: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      type: z.string(),
      url: z.string(),
      image: z.array(
        z.object({
          url: z.url(),
          quality: z.string()
        })
      )
    })
  )
})
