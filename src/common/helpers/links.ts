export const getArtworkLinks = (artwork: any): { quality: string; url: string }[] => {
  const sizes = [
    { w: 90, h: 90 },
    { w: 130, h: 130 },
    { w: 250, h: 250 },
    { w: 500, h: 500 },
    { w: 640, h: 640 },
    { w: 1080, h: 1080 }
  ]

  if (artwork?.icon?.artUrl) {
    const artUrl = artwork.icon.artUrl.replace(
      /_(90W_90H|130W_130H|250W_250H|500W_500H|640W_640H|1080W_1080H)\.jpg$/,
      ''
    )

    return sizes.map(({ w, h }) => ({
      quality: `${w}x${h}`,
      url: `https://content-images.p-cdn.com/${artUrl}_${w}W_${h}H.jpg`
    }))
  }

  if (artwork?.thorLayers) {
    if (artwork.thorLayers.startsWith('_;grid')) {
      return sizes.map(({ w, h }) => ({
        quality: `${w}x${h}`,
        url: `https://dyn-images.p-cdn.com/?l=${encodeURIComponent(artwork.thorLayers)}&w=${w}&h=${h}`
      }))
    }

    const thorLayers = artwork.thorLayers.replace(
      /_(90W_90H|130W_130H|250W_250H|500W_500H|640W_640H|1080W_1080H)\.jpg$/,
      ''
    )

    return sizes.map(({ w, h }) => ({
      quality: `${w}x${h}`,
      url: `https://content-images.p-cdn.com/${thorLayers}_${w}W_${h}H.jpg`
    }))
  }

  return []
}
