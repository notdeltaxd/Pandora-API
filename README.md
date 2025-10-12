<div align="center">

# 🎧 Unofficial Pandora API

A fast and lightweight REST API built with **Hono**, designed to fetch **Pandora music metadata** — songs, albums, artists, and playlists.  
It doesn’t stream or decrypt anything — it just gives you clean, structured metadata.

<p>
  <a href="https://github.com/notdeltaxd/Pandora-API/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/notdeltaxd/Pandora-API" alt="Contributors">
  </a>
  <a href="https://github.com/notdeltaxd/Pandora-API/commits/main">
    <img src="https://img.shields.io/github/last-commit/notdeltaxd/Pandora-API" alt="Last Commit">
  </a>
  <a href="https://github.com/notdeltaxd/Pandora-API/network/members">
    <img src="https://img.shields.io/github/forks/notdeltaxd/Pandora-API" alt="Forks">
  </a>
  <a href="https://github.com/notdeltaxd/Pandora-API/stargazers">
    <img src="https://img.shields.io/github/stars/notdeltaxd/Pandora-API?color=yellow" alt="Stars">
  </a>
  <a href="https://github.com/notdeltaxd/Pandora-API/issues">
    <img src="https://img.shields.io/github/issues/notdeltaxd/Pandora-API?color=purple" alt="Open Issues">
  </a>
  <a href="https://github.com/notdeltaxd/Pandora-API/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/notdeltaxd/Pandora-API.svg" alt="License">
  </a>
</p>

<h4>
  <a href="https://pandora-music-api.vercel.app/docs">Docs</a> •
  <a href="https://github.com/notdeltaxd/Pandora-API/issues">Report Bug</a> •
  <a href="https://github.com/notdeltaxd/Pandora-API/issues">Request Feature</a>
</h4>

> ⚠️ The API is still in development. It’s an unofficial, experimental API. It’s for **educational use only** and not associated with Pandora.

</div>

**Base URL:**  
🔗 [https://pandora-music-api.vercel.app/](https://pandora-music-api.vercel.app/)

## Features

- ⚡ Extremely fast: Average response under 150-200ms  
- 🎯 Provides metadata for tracks, albums, artists, and playlists  
- 🔍 Supports global search and individual searches for songs, albums, or artists  
- 🛡 Rate limiting and security implemented  
- 🚀 Built on Hono for performance  
- 🧩 Input validation with Zod for consistent API responses  
- ☁️ Deployed on Vercel with automatic scaling 

## API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/api/search?query={query}` | Global search |
| `GET` | `/api/search/songs?query={query}` | Search for songs only |
| `GET` | `/api/search/albums?query={query}` | Search for albums only |
| `GET` | `/api/search/artists?query={query}` | Search for artists only |
| `GET` | `/api/search/playlist?query={query}` | Search for playlists only |
| `GET` | `/api/songs/:id` | Get song details |
| `GET` | `/api/songs/:id/suggestions` | Get song suggestions |
| `GET` | `/api/albums/:id` | Get album details |
| `GET` | `/api/artists/:id` | Get artist info |
| `GET` | `/api/playlists/:id` | Get playlist metadata |
| `GET` | `/api/songs?url={song_url}` | Get song details via URL |
| `GET` | `/api/albums?url={album_url}` | Get album details via URL |
| `GET` | `/api/artists?url={artist_url}` | Get artist info via URL |
| `GET` | `/api/playlists?url={playlist_url}` | Get playlist metadata via URL |

### Example Requests

```bash
# Get song details via URL
curl 'https://pandora-music-api.vercel.app/api/songs?url=https%3A%2F%2Fwww.pandora.com%2Fartist%2Fimagine-dragons%2Fevolve%2Fbeliever%2FTRtlJmmZP3nzh3m'

# Get song details via ID
curl 'https://pandora-music-api.vercel.app/api/songs/TR:11423273'

# Get song suggestions
curl 'https://pandora-music-api.vercel.app/api/songs/TR:11423273/suggestions'

# Get artist info via URL
curl 'https://pandora-music-api.vercel.app/api/artists?url=https%3A%2F%2Fwww.pandora.com%2Fartist%2Falan-walker%2FARcKz4k4z2bbd5Z'

# Get playlist metadata via URL
curl 'https://pandora-music-api.vercel.app/api/playlists?url=https%3A%2F%2Fwww.pandora.com%2Fplaylist%2FPL%3A844424980353351%3A1756780791'
```


## Search Responses

<details>
  <summary>Song Search Response (Believer)</summary>

```json
{
  "success": true,
  "data": {
    "total": 1,
    "results": [
      {
        "id": "TR:11423273",
        "name": "Believer",
        "type": "TR",
        "duration": 204,
        "url": "https://www.pandora.com/artist/imagine-dragons/evolve/believer/TRtlJmmZP3nzh3m",
        "isrc": "USUM71700626",
        "album": {
          "id": "AL:1238570",
          "name": "Evolve",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/imagine-dragons/evolve/ALnnjZppcXwg3ZJ"
        },
        "artists": [
          {
            "id": "AR:359199",
            "name": "Imagine Dragons",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/1c/ce/74/9f/f0e24a27a618b4c7ffc538f0/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/1c/ce/74/9f/f0e24a27a618b4c7ffc538f0/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/1c/ce/74/9f/f0e24a27a618b4c7ffc538f0/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/1c/ce/74/9f/f0e24a27a618b4c7ffc538f0/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/1c/ce/74/9f/f0e24a27a618b4c7ffc538f0/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/1c/ce/74/9f/f0e24a27a618b4c7ffc538f0/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/imagine-dragons/ARl373hp6lJn9Xg"
          }
        ],
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_1080W_1080H.jpg"
          }
        ]
      }
    ]
  }
}
```
</details>

<details>
  <summary>Album Search Response (Evolve)</summary>

```json
{
  "success": true,
  "data": {
    "total": 1,
    "results": [
      {
        "id": "AL:54344416",
        "name": "evolve",
        "url": "https://www.pandora.com/artist/fred-russ/evolve/ALwKdh6zk5pznbX",
        "type": "AL",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/e8/3a/fe/fa/af76407494ace33d750245a5/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/e8/3a/fe/fa/af76407494ace33d750245a5/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/e8/3a/fe/fa/af76407494ace33d750245a5/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/e8/3a/fe/fa/af76407494ace33d750245a5/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/e8/3a/fe/fa/af76407494ace33d750245a5/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/e8/3a/fe/fa/af76407494ace33d750245a5/_1080W_1080H.jpg"
          }
        ],
        "artists": [
          {
            "id": "AR:17518060",
            "name": "Fred Russ",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/54/3e/89/fe/46054ae68854a9a731afec9c/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/54/3e/89/fe/46054ae68854a9a731afec9c/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/54/3e/89/fe/46054ae68854a9a731afec9c/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/54/3e/89/fe/46054ae68854a9a731afec9c/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/54/3e/89/fe/46054ae68854a9a731afec9c/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/54/3e/89/fe/46054ae68854a9a731afec9c/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/fred-russ/AR3J4d4KXPlzP5m"
          }
        ],
        "songCount": 1
      }
    ]
  }
}
```
</details>

<details>
  <summary>Artist Search Response (Adele)</summary>
  
```json
{
  "success": true,
  "data": {
    "total": 10,
    "results": [
      {
        "id": "AR:269367",
        "name": "Adele",
        "type": "AR",
        "url": "https://www.pandora.com/artist/adele/AR3dZvm72v7KXjq",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/d2/b5/42/78/8ef94023ae39bf37fcb2c782/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/d2/b5/42/78/8ef94023ae39bf37fcb2c782/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/d2/b5/42/78/8ef94023ae39bf37fcb2c782/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/d2/b5/42/78/8ef94023ae39bf37fcb2c782/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/d2/b5/42/78/8ef94023ae39bf37fcb2c782/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/d2/b5/42/78/8ef94023ae39bf37fcb2c782/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "AR:5957082",
        "name": "Tanner Adell",
        "type": "AR",
        "url": "https://www.pandora.com/artist/tanner-adell/ARwjvkKp4rPVc9X",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/68/f1/36/da/45b74d90ab3bceab6400dfd6/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/68/f1/36/da/45b74d90ab3bceab6400dfd6/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/68/f1/36/da/45b74d90ab3bceab6400dfd6/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/68/f1/36/da/45b74d90ab3bceab6400dfd6/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/68/f1/36/da/45b74d90ab3bceab6400dfd6/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/68/f1/36/da/45b74d90ab3bceab6400dfd6/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "AR:170186",
        "name": "Idina Menzel",
        "type": "AR",
        "url": "https://www.pandora.com/artist/idina-menzel/ARgtrV2qPm5j7tc",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/8c/dd/4e/e1/f07d4fe484137f6ffe5aa0e0/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/8c/dd/4e/e1/f07d4fe484137f6ffe5aa0e0/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/8c/dd/4e/e1/f07d4fe484137f6ffe5aa0e0/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/8c/dd/4e/e1/f07d4fe484137f6ffe5aa0e0/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/8c/dd/4e/e1/f07d4fe484137f6ffe5aa0e0/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/8c/dd/4e/e1/f07d4fe484137f6ffe5aa0e0/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "AR:3971648",
        "name": "Adele Givens",
        "type": "AR",
        "url": "https://www.pandora.com/artist/adele-givens/AR99cj92pgX9tpV",
        "image": []
      },
      {
        "id": "AR:888020",
        "name": "Adele Anthony",
        "type": "AR",
        "url": "https://www.pandora.com/artist/adele-anthony/ARftkwwd3VPghdw",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/20/a4/cb/7b/fd0f4cd78b076506c810df0f/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/20/a4/cb/7b/fd0f4cd78b076506c810df0f/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/20/a4/cb/7b/fd0f4cd78b076506c810df0f/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/20/a4/cb/7b/fd0f4cd78b076506c810df0f/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/20/a4/cb/7b/fd0f4cd78b076506c810df0f/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/20/a4/cb/7b/fd0f4cd78b076506c810df0f/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "AR:9666838",
        "name": "Adèle Castillon & Videoclub",
        "type": "AR",
        "url": "https://www.pandora.com/artist/adele-castillon-and-videoclub/ARPvjptwr7Z5cgm",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/e7/e8/70/41/becd40f29a8395e7c70e205c/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/e7/e8/70/41/becd40f29a8395e7c70e205c/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/e7/e8/70/41/becd40f29a8395e7c70e205c/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/e7/e8/70/41/becd40f29a8395e7c70e205c/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/e7/e8/70/41/becd40f29a8395e7c70e205c/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/e7/e8/70/41/becd40f29a8395e7c70e205c/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "AR:1025559",
        "name": "Adexe & Nau",
        "type": "AR",
        "url": "https://www.pandora.com/artist/adexe-and-nau/ARkwtzhczzXlpXc",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/05/4d/dd/f8/05424a53b4bdd79632b11d59/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/05/4d/dd/f8/05424a53b4bdd79632b11d59/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/05/4d/dd/f8/05424a53b4bdd79632b11d59/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/05/4d/dd/f8/05424a53b4bdd79632b11d59/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/05/4d/dd/f8/05424a53b4bdd79632b11d59/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/05/4d/dd/f8/05424a53b4bdd79632b11d59/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "AR:6401660",
        "name": "Adele",
        "type": "AR",
        "url": "https://www.pandora.com/artist/adele/AR6rhwZJxZK2hbc",
        "image": []
      },
      {
        "id": "AR:6490670",
        "name": "Adele",
        "type": "AR",
        "url": "https://www.pandora.com/artist/adele/ARkXZxjqcpnP2mV",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/3e/ac/0b/72/8a7c43509335523593955cbd/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/3e/ac/0b/72/8a7c43509335523593955cbd/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/3e/ac/0b/72/8a7c43509335523593955cbd/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/3e/ac/0b/72/8a7c43509335523593955cbd/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/3e/ac/0b/72/8a7c43509335523593955cbd/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/3e/ac/0b/72/8a7c43509335523593955cbd/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "AR:17063643",
        "name": "Adele",
        "type": "AR",
        "url": "https://www.pandora.com/artist/adele/AR3cZh7rJfr6bpm",
        "image": []
      }
    ]
  }
}
```
</details>

<details>
  <summary>Playlist Search Response (Indie)</summary>

```json
{
  "success": true,
  "data": {
    "total": 1,
    "results": [
      {
        "id": "PL:844424980353351:1756780791",
        "name": "Pandora Stories: The Music of Wes Anderson With Randall Poster",
        "url": "https://www.pandora.com/playlist/PL:844424980353351:1756780791",
        "type": "PL",
        "duration": 1527,
        "description": "“I wish that I knew what I know now, when I was younger.” That’s a key line in the Faces’ great song “Ooh La La” and a signature song of Wes Anderson’s “Rushmore.” That movie helped establish the director’s wry, unmistakable style, and his uncanny knack for creating picture-postcard soundtracks. When Anderson’s longtime music supervisor and collaborator Randall Poster sees his own name come up in the credits while “Ooh La La” plays, he still feels like “a proud papa.” Listen now as Poster walks us through his long, prolific association with Anderson, from “Rushmore” to “Moonrise Kingdom.”",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/f1/fb/7c/38/d0f14873ba9634e72ca8a9cb/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/f1/fb/7c/38/d0f14873ba9634e72ca8a9cb/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/f1/fb/7c/38/d0f14873ba9634e72ca8a9cb/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/f1/fb/7c/38/d0f14873ba9634e72ca8a9cb/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/f1/fb/7c/38/d0f14873ba9634e72ca8a9cb/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/f1/fb/7c/38/d0f14873ba9634e72ca8a9cb/_1080W_1080H.jpg"
          }
        ],
        "songCount": 18,
        "author": {
          "id": "LI:1756780791",
          "name": "Pandora",
          "type": "LI"
        }
      }
    ]
  }
}
```
</details>

## Song Suggestions Response

<details>
  <summary>Song Suggestions Response</summary>

```json
{
  "success": true,
  "data": [
    {
      "id": "TR:11423274",
      "name": "Thunder",
      "type": "TR",
      "duration": 187,
      "url": "https://www.pandora.com/artist/imagine-dragons/evolve/thunder/TRVXtv5ZmJcc29m",
      "isrc": "USUM71704167",
      "releaseDate": "2018-07-18T00:00:00.000-07:00",
      "copyright": "© 2018 KIDinaKORNER/Interscope Records\n℗ 2017 KIDinaKORNER/Interscope Records",
      "album": {
        "id": "AL:1238570",
        "name": "Evolve",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_1080W_1080H.jpg"
          }
        ],
        "url": "https://www.pandora.com/artist/imagine-dragons/evolve/ALnnjZppcXwg3ZJ"
      },
      "artists": [
        {
          "id": "AR:359199",
          "name": "Imagine Dragons",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/1c/ce/74/9f/f0e24a27a618b4c7ffc538f0/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/1c/ce/74/9f/f0e24a27a618b4c7ffc538f0/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/1c/ce/74/9f/f0e24a27a618b4c7ffc538f0/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/1c/ce/74/9f/f0e24a27a618b4c7ffc538f0/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/1c/ce/74/9f/f0e24a27a618b4c7ffc538f0/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/1c/ce/74/9f/f0e24a27a618b4c7ffc538f0/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/imagine-dragons/ARl373hp6lJn9Xg"
        }
      ],
      "image": [
        {
          "quality": "90x90",
          "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_90W_90H.jpg"
        },
        {
          "quality": "130x130",
          "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_130W_130H.jpg"
        },
        {
          "quality": "250x250",
          "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_250W_250H.jpg"
        },
        {
          "quality": "500x500",
          "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_500W_500H.jpg"
        },
        {
          "quality": "640x640",
          "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_640W_640H.jpg"
        },
        {
          "quality": "1080x1080",
          "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_1080W_1080H.jpg"
        }
      ]
    },
    {
      "id": "TR:10962061",
      "name": "Legend",
      "type": "TR",
      "duration": 189,
      "url": "https://www.pandora.com/artist/the-score/atlas-deluxe/legend/TR3Z6vtJZ6fwmzJ",
      "isrc": "USUM71700853",
      "releaseDate": "2018-07-18T00:00:00.000-07:00",
      "copyright": "© 2018 KIDinaKORNER/Interscope Records\n℗ 2017 KIDinaKORNER/Interscope Records",
      "album": {
        "id": "AL:1168850",
        "name": "ATLAS (Deluxe)",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/d6/53/6d/bc/dc1f484685b8053059cc51ef/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/d6/53/6d/bc/dc1f484685b8053059cc51ef/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/d6/53/6d/bc/dc1f484685b8053059cc51ef/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/d6/53/6d/bc/dc1f484685b8053059cc51ef/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/d6/53/6d/bc/dc1f484685b8053059cc51ef/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/d6/53/6d/bc/dc1f484685b8053059cc51ef/_1080W_1080H.jpg"
          }
        ],
        "url": "https://www.pandora.com/artist/the-score/atlas-deluxe/AL6V2KcrZhmZqJK"
      },
      "artists": [
        {
          "id": "AR:447492",
          "name": "The Score",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/03/a8/e2/fd/229341d291528a390d9e0a6c/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/03/a8/e2/fd/229341d291528a390d9e0a6c/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/03/a8/e2/fd/229341d291528a390d9e0a6c/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/03/a8/e2/fd/229341d291528a390d9e0a6c/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/03/a8/e2/fd/229341d291528a390d9e0a6c/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/03/a8/e2/fd/229341d291528a390d9e0a6c/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/the-score/ARV9P3rdV53PlnX"
        }
      ],
      "image": [
        {
          "quality": "90x90",
          "url": "https://content-images.p-cdn.com/images/d6/53/6d/bc/dc1f484685b8053059cc51ef/_90W_90H.jpg"
        },
        {
          "quality": "130x130",
          "url": "https://content-images.p-cdn.com/images/d6/53/6d/bc/dc1f484685b8053059cc51ef/_130W_130H.jpg"
        },
        {
          "quality": "250x250",
          "url": "https://content-images.p-cdn.com/images/d6/53/6d/bc/dc1f484685b8053059cc51ef/_250W_250H.jpg"
        },
        {
          "quality": "500x500",
          "url": "https://content-images.p-cdn.com/images/d6/53/6d/bc/dc1f484685b8053059cc51ef/_500W_500H.jpg"
        },
        {
          "quality": "640x640",
          "url": "https://content-images.p-cdn.com/images/d6/53/6d/bc/dc1f484685b8053059cc51ef/_640W_640H.jpg"
        },
        {
          "quality": "1080x1080",
          "url": "https://content-images.p-cdn.com/images/d6/53/6d/bc/dc1f484685b8053059cc51ef/_1080W_1080H.jpg"
        }
      ]
    },
    {
      "id": "TR:2958203",
      "name": "Centuries",
      "type": "TR",
      "duration": 228,
      "url": "https://www.pandora.com/artist/fall-out-boy/american-beauty-american-psycho/centuries/TRjbzdjrbw9qg7K",
      "isrc": "USUM71412644",
      "releaseDate": "2018-07-18T00:00:00.000-07:00",
      "copyright": "© 2018 KIDinaKORNER/Interscope Records\n℗ 2017 KIDinaKORNER/Interscope Records",
      "album": {
        "id": "AL:285127",
        "name": "American Beauty/American Psycho",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/7a/9a/89/25/179d450080e8f57a12327bdd/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/7a/9a/89/25/179d450080e8f57a12327bdd/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/7a/9a/89/25/179d450080e8f57a12327bdd/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/7a/9a/89/25/179d450080e8f57a12327bdd/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/7a/9a/89/25/179d450080e8f57a12327bdd/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/7a/9a/89/25/179d450080e8f57a12327bdd/_1080W_1080H.jpg"
          }
        ],
        "url": "https://www.pandora.com/artist/fall-out-boy/american-beauty-american-psycho/ALp33wb7znpdPxX"
      },
      "artists": [
        {
          "id": "AR:141503",
          "name": "Fall Out Boy",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/4a/33/af/56/932441fc9fdec212c8400cb6/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/4a/33/af/56/932441fc9fdec212c8400cb6/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/4a/33/af/56/932441fc9fdec212c8400cb6/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/4a/33/af/56/932441fc9fdec212c8400cb6/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/4a/33/af/56/932441fc9fdec212c8400cb6/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/4a/33/af/56/932441fc9fdec212c8400cb6/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/fall-out-boy/AR4nX3fc6VVKppP"
        }
      ],
      "image": [
        {
          "quality": "90x90",
          "url": "https://content-images.p-cdn.com/images/7a/9a/89/25/179d450080e8f57a12327bdd/_90W_90H.jpg"
        },
        {
          "quality": "130x130",
          "url": "https://content-images.p-cdn.com/images/7a/9a/89/25/179d450080e8f57a12327bdd/_130W_130H.jpg"
        },
        {
          "quality": "250x250",
          "url": "https://content-images.p-cdn.com/images/7a/9a/89/25/179d450080e8f57a12327bdd/_250W_250H.jpg"
        },
        {
          "quality": "500x500",
          "url": "https://content-images.p-cdn.com/images/7a/9a/89/25/179d450080e8f57a12327bdd/_500W_500H.jpg"
        },
        {
          "quality": "640x640",
          "url": "https://content-images.p-cdn.com/images/7a/9a/89/25/179d450080e8f57a12327bdd/_640W_640H.jpg"
        },
        {
          "quality": "1080x1080",
          "url": "https://content-images.p-cdn.com/images/7a/9a/89/25/179d450080e8f57a12327bdd/_1080W_1080H.jpg"
        }
      ]
    },
    {
      "id": "TR:5474219",
      "name": "Heathens",
      "type": "TR",
      "duration": 196,
      "url": "https://www.pandora.com/artist/20-1-pilots/suicide-squad-the-album/heathens/TRgv9wZjklmPKKm",
      "isrc": "USAT21601930",
      "releaseDate": "2018-07-18T00:00:00.000-07:00",
      "copyright": "© 2018 KIDinaKORNER/Interscope Records\n℗ 2017 KIDinaKORNER/Interscope Records",
      "album": {
        "id": "AL:633766",
        "name": "Suicide Squad: The Album",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/f8/f3/17/87/9bd8455fa840d627dfc38752/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/f8/f3/17/87/9bd8455fa840d627dfc38752/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/f8/f3/17/87/9bd8455fa840d627dfc38752/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/f8/f3/17/87/9bd8455fa840d627dfc38752/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/f8/f3/17/87/9bd8455fa840d627dfc38752/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/f8/f3/17/87/9bd8455fa840d627dfc38752/_1080W_1080H.jpg"
          }
        ],
        "url": "https://www.pandora.com/artist/various-artists/suicide-squad-the-album/ALdh2XpVJgVh6jZ"
      },
      "artists": [
        {
          "id": "AR:364536",
          "name": "Twenty One Pilots",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/95/14/f3/d8/3f664292b5ba0626c4074d37/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/95/14/f3/d8/3f664292b5ba0626c4074d37/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/95/14/f3/d8/3f664292b5ba0626c4074d37/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/95/14/f3/d8/3f664292b5ba0626c4074d37/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/95/14/f3/d8/3f664292b5ba0626c4074d37/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/95/14/f3/d8/3f664292b5ba0626c4074d37/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/20-1-pilots/ARqjn6Xcg9mvjKP"
        }
      ],
      "image": [
        {
          "quality": "90x90",
          "url": "https://content-images.p-cdn.com/images/f8/f3/17/87/9bd8455fa840d627dfc38752/_90W_90H.jpg"
        },
        {
          "quality": "130x130",
          "url": "https://content-images.p-cdn.com/images/f8/f3/17/87/9bd8455fa840d627dfc38752/_130W_130H.jpg"
        },
        {
          "quality": "250x250",
          "url": "https://content-images.p-cdn.com/images/f8/f3/17/87/9bd8455fa840d627dfc38752/_250W_250H.jpg"
        },
        {
          "quality": "500x500",
          "url": "https://content-images.p-cdn.com/images/f8/f3/17/87/9bd8455fa840d627dfc38752/_500W_500H.jpg"
        },
        {
          "quality": "640x640",
          "url": "https://content-images.p-cdn.com/images/f8/f3/17/87/9bd8455fa840d627dfc38752/_640W_640H.jpg"
        },
        {
          "quality": "1080x1080",
          "url": "https://content-images.p-cdn.com/images/f8/f3/17/87/9bd8455fa840d627dfc38752/_1080W_1080H.jpg"
        }
      ]
    },
    {
      "id": "TR:10591931",
      "name": "HandClap",
      "type": "TR",
      "duration": 193,
      "url": "https://www.pandora.com/artist/fitz-and-the-tantrums/fitz-and-the-tantrums-deluxe-edition/handclap/TRzxzvKd2mX2mkc",
      "isrc": "USAT21600408",
      "releaseDate": "2018-07-18T00:00:00.000-07:00",
      "copyright": "© 2018 KIDinaKORNER/Interscope Records\n℗ 2017 KIDinaKORNER/Interscope Records",
      "album": {
        "id": "AL:1123912",
        "name": "Fitz and The Tantrums (Deluxe Edition)",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/6b/03/f4/94/51464748bcf771533ab6703c/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/6b/03/f4/94/51464748bcf771533ab6703c/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/6b/03/f4/94/51464748bcf771533ab6703c/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/6b/03/f4/94/51464748bcf771533ab6703c/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/6b/03/f4/94/51464748bcf771533ab6703c/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/6b/03/f4/94/51464748bcf771533ab6703c/_1080W_1080H.jpg"
          }
        ],
        "url": "https://www.pandora.com/artist/fitz-and-the-tantrums/fitz-and-the-tantrums-deluxe-edition/ALxvK34xbgzPffK"
      },
      "artists": [
        {
          "id": "AR:303122",
          "name": "Fitz and The Tantrums",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/f0/13/d4/c4/794f41aba06ef126fd07282f/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/f0/13/d4/c4/794f41aba06ef126fd07282f/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/f0/13/d4/c4/794f41aba06ef126fd07282f/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/f0/13/d4/c4/794f41aba06ef126fd07282f/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/f0/13/d4/c4/794f41aba06ef126fd07282f/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/f0/13/d4/c4/794f41aba06ef126fd07282f/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/fitz-and-the-tantrums/ARmltVmnnp7JpZw"
        }
      ],
      "image": [
        {
          "quality": "90x90",
          "url": "https://content-images.p-cdn.com/images/6b/03/f4/94/51464748bcf771533ab6703c/_90W_90H.jpg"
        },
        {
          "quality": "130x130",
          "url": "https://content-images.p-cdn.com/images/6b/03/f4/94/51464748bcf771533ab6703c/_130W_130H.jpg"
        },
        {
          "quality": "250x250",
          "url": "https://content-images.p-cdn.com/images/6b/03/f4/94/51464748bcf771533ab6703c/_250W_250H.jpg"
        },
        {
          "quality": "500x500",
          "url": "https://content-images.p-cdn.com/images/6b/03/f4/94/51464748bcf771533ab6703c/_500W_500H.jpg"
        },
        {
          "quality": "640x640",
          "url": "https://content-images.p-cdn.com/images/6b/03/f4/94/51464748bcf771533ab6703c/_640W_640H.jpg"
        },
        {
          "quality": "1080x1080",
          "url": "https://content-images.p-cdn.com/images/6b/03/f4/94/51464748bcf771533ab6703c/_1080W_1080H.jpg"
        }
      ]
    },
    {
      "id": "TR:12984317",
      "name": "High Hopes",
      "type": "TR",
      "duration": 191,
      "url": "https://www.pandora.com/artist/panic-at-the-disco/pray-for-the-wicked/high-hopes/TRVl9qgZ29gkd5c",
      "isrc": "USAT21801174",
      "releaseDate": "2018-07-18T00:00:00.000-07:00",
      "copyright": "© 2018 KIDinaKORNER/Interscope Records\n℗ 2017 KIDinaKORNER/Interscope Records",
      "album": {
        "id": "AL:1448601",
        "name": "Pray for the Wicked",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/ac/2e/34/65/8cd74fc38f4acecf6efd0953/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/ac/2e/34/65/8cd74fc38f4acecf6efd0953/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/ac/2e/34/65/8cd74fc38f4acecf6efd0953/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/ac/2e/34/65/8cd74fc38f4acecf6efd0953/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/ac/2e/34/65/8cd74fc38f4acecf6efd0953/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/ac/2e/34/65/8cd74fc38f4acecf6efd0953/_1080W_1080H.jpg"
          }
        ],
        "url": "https://www.pandora.com/artist/panic-at-the-disco/pray-for-the-wicked/ALlnqv926bj64wX"
      },
      "artists": [
        {
          "id": "AR:170267",
          "name": "Panic! At The Disco",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/47/d4/69/a0/bf4a4926aa8a5a2ae07ca5c5/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/47/d4/69/a0/bf4a4926aa8a5a2ae07ca5c5/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/47/d4/69/a0/bf4a4926aa8a5a2ae07ca5c5/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/47/d4/69/a0/bf4a4926aa8a5a2ae07ca5c5/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/47/d4/69/a0/bf4a4926aa8a5a2ae07ca5c5/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/47/d4/69/a0/bf4a4926aa8a5a2ae07ca5c5/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/panic-at-the-disco/ARbtlkZ2bcbg5c6"
        }
      ],
      "image": [
        {
          "quality": "90x90",
          "url": "https://content-images.p-cdn.com/images/ac/2e/34/65/8cd74fc38f4acecf6efd0953/_90W_90H.jpg"
        },
        {
          "quality": "130x130",
          "url": "https://content-images.p-cdn.com/images/ac/2e/34/65/8cd74fc38f4acecf6efd0953/_130W_130H.jpg"
        },
        {
          "quality": "250x250",
          "url": "https://content-images.p-cdn.com/images/ac/2e/34/65/8cd74fc38f4acecf6efd0953/_250W_250H.jpg"
        },
        {
          "quality": "500x500",
          "url": "https://content-images.p-cdn.com/images/ac/2e/34/65/8cd74fc38f4acecf6efd0953/_500W_500H.jpg"
        },
        {
          "quality": "640x640",
          "url": "https://content-images.p-cdn.com/images/ac/2e/34/65/8cd74fc38f4acecf6efd0953/_640W_640H.jpg"
        },
        {
          "quality": "1080x1080",
          "url": "https://content-images.p-cdn.com/images/ac/2e/34/65/8cd74fc38f4acecf6efd0953/_1080W_1080H.jpg"
        }
      ]
    }
  ]
}
```
</details>

## Details Responses

<details>
  <summary>Song Details Response</summary>

```json
{
  "success": true,
  "data": {
    "id": "TR:11423273",
    "name": "Believer",
    "type": "TR",
    "duration": 204,
    "url": "https://www.pandora.com/artist/imagine-dragons/evolve/believer/TRtlJmmZP3nzh3m",
    "isrc": "USUM71700626",
    "releaseDate": "2018-07-18T00:00:00.000-07:00",
    "copyright": "© 2018 KIDinaKORNER/Interscope Records\n℗ 2017 KIDinaKORNER/Interscope Records",
    "album": {
      "id": "TR:11423273",
      "name": "Believer",
      "image": [
        {
          "quality": "90x90",
          "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_90W_90H.jpg"
        },
        {
          "quality": "130x130",
          "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_130W_130H.jpg"
        },
        {
          "quality": "250x250",
          "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_250W_250H.jpg"
        },
        {
          "quality": "500x500",
          "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_500W_500H.jpg"
        },
        {
          "quality": "640x640",
          "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_640W_640H.jpg"
        },
        {
          "quality": "1080x1080",
          "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_1080W_1080H.jpg"
        }
      ],
      "url": "https://www.pandora.com/artist/imagine-dragons/evolve/ALnnjZppcXwg3ZJ"
    },
    "artists": [
      {
        "id": "AR:359199",
        "name": "Imagine Dragons",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/1c/ce/74/9f/f0e24a27a618b4c7ffc538f0/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/1c/ce/74/9f/f0e24a27a618b4c7ffc538f0/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/1c/ce/74/9f/f0e24a27a618b4c7ffc538f0/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/1c/ce/74/9f/f0e24a27a618b4c7ffc538f0/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/1c/ce/74/9f/f0e24a27a618b4c7ffc538f0/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/1c/ce/74/9f/f0e24a27a618b4c7ffc538f0/_1080W_1080H.jpg"
          }
        ],
        "url": "https://www.pandora.com/artist/imagine-dragons/ARl373hp6lJn9Xg"
      }
    ],
    "image": [
      {
        "quality": "90x90",
        "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_90W_90H.jpg"
      },
      {
        "quality": "130x130",
        "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_130W_130H.jpg"
      },
      {
        "quality": "250x250",
        "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_250W_250H.jpg"
      },
      {
        "quality": "500x500",
        "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_500W_500H.jpg"
      },
      {
        "quality": "640x640",
        "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_640W_640H.jpg"
      },
      {
        "quality": "1080x1080",
        "url": "https://content-images.p-cdn.com/images/22/93/90/77/0e694968be849ae7d4d28e0e/_1080W_1080H.jpg"
      }
    ]
  }
}
```
</details>

<details>
  <summary>Album Details Response</summary>

```json
{
  "success": true,
  "data": {
    "id": "AL:54628772",
    "name": "On My Way!!!",
    "description": "",
    "type": "AL",
    "url": "https://www.pandora.com/artist/nbl-nexuz/on-my-way/AL9kVthv7lq6nfw",
    "artists": [
      {
        "id": "AR:4867552",
        "name": "NBL Nexuz",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_1080W_1080H.jpg"
          }
        ],
        "url": "https://www.pandora.com/artist/nbl-nexuz/ARhtxrXKqjbkJv6"
      }
    ],
    "songCount": 6,
    "image": [
      {
        "quality": "90x90",
        "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_90W_90H.jpg"
      },
      {
        "quality": "130x130",
        "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_130W_130H.jpg"
      },
      {
        "quality": "250x250",
        "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_250W_250H.jpg"
      },
      {
        "quality": "500x500",
        "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_500W_500H.jpg"
      },
      {
        "quality": "640x640",
        "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_640W_640H.jpg"
      },
      {
        "quality": "1080x1080",
        "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_1080W_1080H.jpg"
      }
    ],
    "songs": [
      {
        "id": "TR:175847313",
        "name": "Woke 2 Da Broke",
        "type": "TR",
        "duration": 221,
        "url": "https://www.pandora.com/artist/nbl-nexuz/on-my-way/woke-2-da-broke/TRtJbrzfbqj2m49",
        "isrc": "QZNMX2596530",
        "album": {
          "id": "AL:54628772",
          "name": "On My Way!!!",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/nbl-nexuz/on-my-way/AL9kVthv7lq6nfw"
        },
        "artists": [
          {
            "id": "AR:4867552",
            "name": "NBL Nexuz",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/nbl-nexuz/ARhtxrXKqjbkJv6"
          }
        ],
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "TR:175847314",
        "name": "Suppose To",
        "type": "TR",
        "duration": 174,
        "url": "https://www.pandora.com/artist/nbl-nexuz/on-my-way/suppose-to/TRxz4cfdzbxVpr4",
        "isrc": "QZNMX2596531",
        "album": {
          "id": "AL:54628772",
          "name": "On My Way!!!",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/nbl-nexuz/on-my-way/AL9kVthv7lq6nfw"
        },
        "artists": [
          {
            "id": "AR:4867552",
            "name": "NBL Nexuz",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/nbl-nexuz/ARhtxrXKqjbkJv6"
          }
        ],
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "TR:175847315",
        "name": "Whatchu Wanna Know",
        "type": "TR",
        "duration": 154,
        "url": "https://www.pandora.com/artist/nbl-nexuz/on-my-way/whatchu-wanna-know/TRhZk3ldjK9cVP2",
        "isrc": "QZNMX2596532",
        "album": {
          "id": "AL:54628772",
          "name": "On My Way!!!",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/nbl-nexuz/on-my-way/AL9kVthv7lq6nfw"
        },
        "artists": [
          {
            "id": "AR:4867552",
            "name": "NBL Nexuz",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/nbl-nexuz/ARhtxrXKqjbkJv6"
          }
        ],
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "TR:175847316",
        "name": "Luv You More",
        "type": "TR",
        "duration": 160,
        "url": "https://www.pandora.com/artist/nbl-nexuz/on-my-way/luv-you-more/TRrx3PXPjZ2J9l2",
        "isrc": "QZNMX2596533",
        "album": {
          "id": "AL:54628772",
          "name": "On My Way!!!",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/nbl-nexuz/on-my-way/AL9kVthv7lq6nfw"
        },
        "artists": [
          {
            "id": "AR:4867552",
            "name": "NBL Nexuz",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/nbl-nexuz/ARhtxrXKqjbkJv6"
          }
        ],
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "TR:175847317",
        "name": "I Continue",
        "type": "TR",
        "duration": 218,
        "url": "https://www.pandora.com/artist/nbl-nexuz/on-my-way/i-continue/TR3xtm5l2qdKp7V",
        "isrc": "QZNMX2596534",
        "album": {
          "id": "AL:54628772",
          "name": "On My Way!!!",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/nbl-nexuz/on-my-way/AL9kVthv7lq6nfw"
        },
        "artists": [
          {
            "id": "AR:4867552",
            "name": "NBL Nexuz",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/nbl-nexuz/ARhtxrXKqjbkJv6"
          }
        ],
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "TR:175847318",
        "name": "Bossin Up",
        "type": "TR",
        "duration": 107,
        "url": "https://www.pandora.com/artist/nbl-nexuz/on-my-way/bossin-up/TRzgXdfmt9jp99X",
        "isrc": "QZNMX2596535",
        "album": {
          "id": "AL:54628772",
          "name": "On My Way!!!",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/nbl-nexuz/on-my-way/AL9kVthv7lq6nfw"
        },
        "artists": [
          {
            "id": "AR:4867552",
            "name": "NBL Nexuz",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/2d/2a/93/10/f2af45739bdabdf267ff93ca/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/nbl-nexuz/ARhtxrXKqjbkJv6"
          }
        ],
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/6c/34/cc/42/91004e2a95e886656bb78c97/_1080W_1080H.jpg"
          }
        ]
      }
    ]
  }
}
```
</details>

<details>
  <summary>Artist Details Response</summary>

```json
{
  "success": true,
  "data": {
    "id": "AR:480432",
    "name": "Alan Walker",
    "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z",
    "type": "AR",
    "image": [
      {
        "quality": "90x90",
        "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
      },
      {
        "quality": "130x130",
        "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
      },
      {
        "quality": "250x250",
        "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
      },
      {
        "quality": "500x500",
        "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
      },
      {
        "quality": "640x640",
        "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
      },
      {
        "quality": "1080x1080",
        "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
      }
    ],
    "topSongs": [
      {
        "id": "TR:15688731",
        "name": "Faded",
        "type": "TR",
        "duration": 212,
        "url": "https://www.pandora.com/artist/alan-walker/different-world/faded/TRcK6hZcjhbz6xP",
        "isrc": "NOG841549010",
        "album": {
          "id": "AR:480432",
          "name": "Alan Walker",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
        },
        "artists": [
          {
            "id": "AR:480432",
            "name": "Alan Walker",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
          }
        ],
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "TR:70462425",
        "name": "Fade",
        "type": "TR",
        "duration": 264,
        "url": "https://www.pandora.com/artist/alan-walker/origins/fade/TR2fkmkzgzb6x3g",
        "isrc": "NOG842209010",
        "album": {
          "id": "AR:480432",
          "name": "Alan Walker",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
        },
        "artists": [
          {
            "id": "AR:480432",
            "name": "Alan Walker",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
          }
        ],
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/73/8a/19/5f/08674a4d83ce45dae564d55a/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/73/8a/19/5f/08674a4d83ce45dae564d55a/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/73/8a/19/5f/08674a4d83ce45dae564d55a/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/73/8a/19/5f/08674a4d83ce45dae564d55a/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/73/8a/19/5f/08674a4d83ce45dae564d55a/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/73/8a/19/5f/08674a4d83ce45dae564d55a/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "TR:15688738",
        "name": "Alone",
        "type": "TR",
        "duration": 160,
        "url": "https://www.pandora.com/artist/alan-walker/different-world/alone/TRxxd92VZzdw9c9",
        "isrc": "NOG841617010",
        "album": {
          "id": "AR:480432",
          "name": "Alan Walker",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
        },
        "artists": [
          {
            "id": "AR:480432",
            "name": "Alan Walker",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
          }
        ],
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "TR:106417042",
        "name": "The Spectre",
        "type": "TR",
        "duration": 194,
        "url": "https://www.pandora.com/artist/alan-walker/the-spectre-remixes/the-spectre/TR4c7gwx24drdjw",
        "isrc": "NOG841713010",
        "album": {
          "id": "AR:480432",
          "name": "Alan Walker",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
        },
        "artists": [
          {
            "id": "AR:480432",
            "name": "Alan Walker",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
          }
        ],
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/50/4c/ee/fc/59d14ab9ac7a1a706025fec0/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/50/4c/ee/fc/59d14ab9ac7a1a706025fec0/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/50/4c/ee/fc/59d14ab9ac7a1a706025fec0/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/50/4c/ee/fc/59d14ab9ac7a1a706025fec0/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/50/4c/ee/fc/59d14ab9ac7a1a706025fec0/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/50/4c/ee/fc/59d14ab9ac7a1a706025fec0/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "TR:130595867",
        "name": "Lifeline (feat. LOVA)",
        "type": "TR",
        "duration": 203,
        "url": "https://www.pandora.com/artist/alan-walker/neon-nights/lifeline-feat-lova/TRhJVzZcg6mjmmK",
        "isrc": "CA6D22400325",
        "album": {
          "id": "AR:480432",
          "name": "Alan Walker",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
        },
        "artists": [
          {
            "id": "AR:480432",
            "name": "Alan Walker",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
          }
        ],
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/c1/df/a4/30/0e7c43c09c564451dcc085cb/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/c1/df/a4/30/0e7c43c09c564451dcc085cb/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/c1/df/a4/30/0e7c43c09c564451dcc085cb/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/c1/df/a4/30/0e7c43c09c564451dcc085cb/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/c1/df/a4/30/0e7c43c09c564451dcc085cb/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/c1/df/a4/30/0e7c43c09c564451dcc085cb/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "TR:70462427",
        "name": "Spectre",
        "type": "TR",
        "duration": 231,
        "url": "https://www.pandora.com/artist/alan-walker/origins/spectre/TR7KndV7ngwV7mk",
        "isrc": "NOG842211010",
        "album": {
          "id": "AR:480432",
          "name": "Alan Walker",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
        },
        "artists": [
          {
            "id": "AR:480432",
            "name": "Alan Walker",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
          }
        ],
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/73/8a/19/5f/08674a4d83ce45dae564d55a/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/73/8a/19/5f/08674a4d83ce45dae564d55a/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/73/8a/19/5f/08674a4d83ce45dae564d55a/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/73/8a/19/5f/08674a4d83ce45dae564d55a/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/73/8a/19/5f/08674a4d83ce45dae564d55a/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/73/8a/19/5f/08674a4d83ce45dae564d55a/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "TR:64068649",
        "name": "The Drum",
        "type": "TR",
        "duration": 189,
        "url": "https://www.pandora.com/artist/alan-walker/the-drum/the-drum/TRx5V5d9VKZ3fVc",
        "isrc": "NOG842205010",
        "album": {
          "id": "AR:480432",
          "name": "Alan Walker",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
        },
        "artists": [
          {
            "id": "AR:480432",
            "name": "Alan Walker",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
          }
        ],
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/e7/9d/d4/88/00ca4dbdbf68dbe1ba8bf4d4/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/e7/9d/d4/88/00ca4dbdbf68dbe1ba8bf4d4/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/e7/9d/d4/88/00ca4dbdbf68dbe1ba8bf4d4/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/e7/9d/d4/88/00ca4dbdbf68dbe1ba8bf4d4/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/e7/9d/d4/88/00ca4dbdbf68dbe1ba8bf4d4/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/e7/9d/d4/88/00ca4dbdbf68dbe1ba8bf4d4/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "TR:149761897",
        "name": "Forever Young",
        "type": "TR",
        "duration": 178,
        "url": "https://www.pandora.com/artist/alan-walker/walkerworld-2-0/forever-young/TRcjnwPnwpz4lvK",
        "isrc": "NOG842502010",
        "album": {
          "id": "AR:480432",
          "name": "Alan Walker",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
        },
        "artists": [
          {
            "id": "AR:480432",
            "name": "Alan Walker",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
          }
        ],
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/30/80/ba/b8/fe684000910ce22afe94c5b3/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/30/80/ba/b8/fe684000910ce22afe94c5b3/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/30/80/ba/b8/fe684000910ce22afe94c5b3/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/30/80/ba/b8/fe684000910ce22afe94c5b3/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/30/80/ba/b8/fe684000910ce22afe94c5b3/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/30/80/ba/b8/fe684000910ce22afe94c5b3/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "TR:15688740",
        "name": "Sing Me to Sleep",
        "type": "TR",
        "duration": 188,
        "url": "https://www.pandora.com/artist/alan-walker/different-world/sing-me-to-sleep/TR4ZmfZrmXfgpJg",
        "isrc": "NOG841611010",
        "album": {
          "id": "AR:480432",
          "name": "Alan Walker",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
        },
        "artists": [
          {
            "id": "AR:480432",
            "name": "Alan Walker",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
          }
        ],
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_1080W_1080H.jpg"
          }
        ]
      },
      {
        "id": "TR:70462426",
        "name": "Force",
        "type": "TR",
        "duration": 240,
        "url": "https://www.pandora.com/artist/alan-walker/origins/force/TRpjcv9qm6k5xhZ",
        "isrc": "NOG842210010",
        "album": {
          "id": "AR:480432",
          "name": "Alan Walker",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
            }
          ],
          "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
        },
        "artists": [
          {
            "id": "AR:480432",
            "name": "Alan Walker",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
          }
        ],
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/73/8a/19/5f/08674a4d83ce45dae564d55a/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/73/8a/19/5f/08674a4d83ce45dae564d55a/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/73/8a/19/5f/08674a4d83ce45dae564d55a/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/73/8a/19/5f/08674a4d83ce45dae564d55a/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/73/8a/19/5f/08674a4d83ce45dae564d55a/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/73/8a/19/5f/08674a4d83ce45dae564d55a/_1080W_1080H.jpg"
          }
        ]
      }
    ],
    "topAlbums": [
      {
        "id": "AL:28407318",
        "name": "Walkerworld",
        "type": "AL",
        "duration": 1661,
        "trackCount": 10,
        "url": "https://www.pandora.com/artist/alan-walker/walkerworld/AL62Kvjdhff27qJ",
        "artists": [
          {
            "id": "AR:480432",
            "name": "Alan Walker",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
          }
        ],
        "songCount": 10,
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/67/bb/a9/d9/c4a44571b3e7acaff74281e4/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/67/bb/a9/d9/c4a44571b3e7acaff74281e4/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/67/bb/a9/d9/c4a44571b3e7acaff74281e4/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/67/bb/a9/d9/c4a44571b3e7acaff74281e4/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/67/bb/a9/d9/c4a44571b3e7acaff74281e4/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/67/bb/a9/d9/c4a44571b3e7acaff74281e4/_1080W_1080H.jpg"
          }
        ],
        "songs": [
          "TR:107783216",
          "TR:107783217",
          "TR:107783221",
          "TR:107783218",
          "TR:107783219",
          "TR:107783220",
          "TR:107783222",
          "TR:107783223",
          "TR:107783224",
          "TR:107783225"
        ]
      },
      {
        "id": "AL:1922372",
        "name": "Different World",
        "type": "AL",
        "duration": 2582,
        "trackCount": 15,
        "url": "https://www.pandora.com/artist/alan-walker/different-world/ALz3Vp96zmXVbg2",
        "artists": [
          {
            "id": "AR:480432",
            "name": "Alan Walker",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
          }
        ],
        "songCount": 15,
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/be/27/bc/cd/f66d4868b4496ffe53fa782f/_1080W_1080H.jpg"
          }
        ],
        "songs": [
          "TR:15688737",
          "TR:15688741",
          "TR:15688729",
          "TR:15688735",
          "TR:15688728",
          "TR:15688742",
          "TR:15688734",
          "TR:15688732",
          "TR:15688740",
          "TR:15688730",
          "TR:15688736",
          "TR:15688738",
          "TR:15688739",
          "TR:15688733",
          "TR:15688731"
        ]
      },
      {
        "id": "AL:44296045",
        "name": "Walkerworld 2.0",
        "type": "AL",
        "duration": 4052,
        "trackCount": 24,
        "url": "https://www.pandora.com/artist/alan-walker/walkerworld-2-0/ALdmfvbwk4tqKhk",
        "artists": [
          {
            "id": "AR:480432",
            "name": "Alan Walker",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
          }
        ],
        "songCount": 24,
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/30/80/ba/b8/fe684000910ce22afe94c5b3/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/30/80/ba/b8/fe684000910ce22afe94c5b3/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/30/80/ba/b8/fe684000910ce22afe94c5b3/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/30/80/ba/b8/fe684000910ce22afe94c5b3/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/30/80/ba/b8/fe684000910ce22afe94c5b3/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/30/80/ba/b8/fe684000910ce22afe94c5b3/_1080W_1080H.jpg"
          }
        ],
        "songs": [
          "TR:149761897",
          "TR:149761898",
          "TR:149761899",
          "TR:149761900",
          "TR:149761901",
          "TR:149761902",
          "TR:149761903",
          "TR:149761904",
          "TR:149761905",
          "TR:149761906",
          "TR:149761907",
          "TR:149761909",
          "TR:149761910",
          "TR:149761912",
          "TR:149761913",
          "TR:149761914",
          "TR:149761916",
          "TR:149761917",
          "TR:149761919",
          "TR:149761920",
          "TR:149761922",
          "TR:149761923",
          "TR:149761924",
          "TR:149761926"
        ]
      },
      {
        "id": "AL:11529439",
        "name": "World Of Walker",
        "type": "AL",
        "duration": 2285,
        "trackCount": 15,
        "url": "https://www.pandora.com/artist/alan-walker/world-of-walker/ALpjpfzJbn69xK2",
        "artists": [
          {
            "id": "AR:480432",
            "name": "Alan Walker",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
          }
        ],
        "songCount": 15,
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/a2/15/43/c7/d1a149e3987cb1a86d3b6595/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/a2/15/43/c7/d1a149e3987cb1a86d3b6595/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/a2/15/43/c7/d1a149e3987cb1a86d3b6595/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/a2/15/43/c7/d1a149e3987cb1a86d3b6595/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/a2/15/43/c7/d1a149e3987cb1a86d3b6595/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/a2/15/43/c7/d1a149e3987cb1a86d3b6595/_1080W_1080H.jpg"
          }
        ],
        "songs": [
          "TR:51809783",
          "TR:51809784",
          "TR:51809785",
          "TR:51809786",
          "TR:51809787",
          "TR:51809788",
          "TR:51809789",
          "TR:51809790",
          "TR:51809791",
          "TR:51809792",
          "TR:51809793",
          "TR:51809794",
          "TR:51809795",
          "TR:51809796",
          "TR:51809797"
        ]
      },
      {
        "id": "AL:10576896",
        "name": "Walker Racing League",
        "type": "AL",
        "duration": 768,
        "trackCount": 6,
        "url": "https://www.pandora.com/artist/alan-walker/walker-racing-league/ALlPjbpcZxv2prm",
        "artists": [
          {
            "id": "AR:480432",
            "name": "Alan Walker",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
          }
        ],
        "songCount": 6,
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/0d/89/75/4f/0fc04c529fc0c50dfef188d5/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/0d/89/75/4f/0fc04c529fc0c50dfef188d5/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/0d/89/75/4f/0fc04c529fc0c50dfef188d5/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/0d/89/75/4f/0fc04c529fc0c50dfef188d5/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/0d/89/75/4f/0fc04c529fc0c50dfef188d5/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/0d/89/75/4f/0fc04c529fc0c50dfef188d5/_1080W_1080H.jpg"
          }
        ],
        "songs": [
          "TR:48788523",
          "TR:48788524",
          "TR:48788525",
          "TR:48788526",
          "TR:48788527",
          "TR:48788528"
        ]
      },
      {
        "id": "AL:15791700",
        "name": "Walkerverse, Pt. I",
        "type": "AL",
        "duration": 896,
        "trackCount": 5,
        "url": "https://www.pandora.com/artist/alan-walker/walkerverse-pt-i/AL47Zn52dqKVh7Z",
        "artists": [
          {
            "id": "AR:480432",
            "name": "Alan Walker",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
          }
        ],
        "songCount": 5,
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/f8/39/55/f3/92db4748b7fdd26b0d30cf41/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/f8/39/55/f3/92db4748b7fdd26b0d30cf41/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/f8/39/55/f3/92db4748b7fdd26b0d30cf41/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/f8/39/55/f3/92db4748b7fdd26b0d30cf41/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/f8/39/55/f3/92db4748b7fdd26b0d30cf41/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/f8/39/55/f3/92db4748b7fdd26b0d30cf41/_1080W_1080H.jpg"
          }
        ],
        "songs": [
          "TR:69825824",
          "TR:69825827",
          "TR:69825829",
          "TR:69825831",
          "TR:69825834"
        ]
      },
      {
        "id": "AL:16762127",
        "name": "Sped up",
        "type": "AL",
        "duration": 847,
        "trackCount": 5,
        "url": "https://www.pandora.com/artist/alan-walker/sped-up/ALkmlfK5rkvPVXV",
        "artists": [
          {
            "id": "AR:480432",
            "name": "Alan Walker",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
          }
        ],
        "songCount": 5,
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/80/56/ce/01/ea6a4561a546ed8da1114808/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/80/56/ce/01/ea6a4561a546ed8da1114808/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/80/56/ce/01/ea6a4561a546ed8da1114808/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/80/56/ce/01/ea6a4561a546ed8da1114808/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/80/56/ce/01/ea6a4561a546ed8da1114808/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/80/56/ce/01/ea6a4561a546ed8da1114808/_1080W_1080H.jpg"
          }
        ],
        "songs": [
          "TR:74066805",
          "TR:74066806",
          "TR:74066807",
          "TR:74066808",
          "TR:74066809"
        ]
      },
      {
        "id": "AL:16522749",
        "name": "Slowed",
        "type": "AL",
        "duration": 1168,
        "trackCount": 5,
        "url": "https://www.pandora.com/artist/alan-walker/slowed/ALzgwpcXV97h5vm",
        "artists": [
          {
            "id": "AR:480432",
            "name": "Alan Walker",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/58/6f/a8/cf/cc62416da7273150a3679db8/_1080W_1080H.jpg"
              }
            ],
            "url": "https://www.pandora.com/artist/alan-walker/ARcKz4k4z2bbd5Z"
          }
        ],
        "songCount": 5,
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/31/9c/c5/ed/bf7e45e1aa96d6fdd5d6e80a/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/31/9c/c5/ed/bf7e45e1aa96d6fdd5d6e80a/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/31/9c/c5/ed/bf7e45e1aa96d6fdd5d6e80a/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/31/9c/c5/ed/bf7e45e1aa96d6fdd5d6e80a/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/31/9c/c5/ed/bf7e45e1aa96d6fdd5d6e80a/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/31/9c/c5/ed/bf7e45e1aa96d6fdd5d6e80a/_1080W_1080H.jpg"
          }
        ],
        "songs": [
          "TR:72796435",
          "TR:72796436",
          "TR:72796437",
          "TR:72796438",
          "TR:72796439"
        ]
      }
    ],
    "similarArtists": [
      {
        "id": "AR:590713",
        "name": "K-391",
        "type": "AR",
        "url": "https://www.pandora.com/artist/k-391/ARk4vZg3n4P3cJc",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/e4/1f/30/5c/ed514a13a33a08933cdc8896/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/e4/1f/30/5c/ed514a13a33a08933cdc8896/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/e4/1f/30/5c/ed514a13a33a08933cdc8896/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/e4/1f/30/5c/ed514a13a33a08933cdc8896/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/e4/1f/30/5c/ed514a13a33a08933cdc8896/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/e4/1f/30/5c/ed514a13a33a08933cdc8896/_1080W_1080H.jpg"
          }
        ],
        "albumCount": 16,
        "trackCount": 37
      },
      {
        "id": "AR:481370",
        "name": "Klaas",
        "type": "AR",
        "url": "https://www.pandora.com/artist/klaas/ARcwzwvrxzcbjb4",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/5d/22/80/52/90a1480994279bdde6fd71ba/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/5d/22/80/52/90a1480994279bdde6fd71ba/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/5d/22/80/52/90a1480994279bdde6fd71ba/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/5d/22/80/52/90a1480994279bdde6fd71ba/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/5d/22/80/52/90a1480994279bdde6fd71ba/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/5d/22/80/52/90a1480994279bdde6fd71ba/_1080W_1080H.jpg"
          }
        ],
        "albumCount": 194,
        "trackCount": 294
      },
      {
        "id": "AR:406153",
        "name": "TheFatRat",
        "type": "AR",
        "url": "https://www.pandora.com/artist/thefatrat/AR9vhbkr554phtw",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/41/c4/fe/a9/f5064ce2be9a714d5986fe54/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/41/c4/fe/a9/f5064ce2be9a714d5986fe54/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/41/c4/fe/a9/f5064ce2be9a714d5986fe54/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/41/c4/fe/a9/f5064ce2be9a714d5986fe54/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/41/c4/fe/a9/f5064ce2be9a714d5986fe54/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/41/c4/fe/a9/f5064ce2be9a714d5986fe54/_1080W_1080H.jpg"
          }
        ],
        "albumCount": 44,
        "trackCount": 73
      },
      {
        "id": "AR:2999261",
        "name": "LUNAX",
        "type": "AR",
        "url": "https://www.pandora.com/artist/lunax/ARt3X3X7cX379qq",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/b3/69/35/28/8a9844ba9b05eef2f7eebb94/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/b3/69/35/28/8a9844ba9b05eef2f7eebb94/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/b3/69/35/28/8a9844ba9b05eef2f7eebb94/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/b3/69/35/28/8a9844ba9b05eef2f7eebb94/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/b3/69/35/28/8a9844ba9b05eef2f7eebb94/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/b3/69/35/28/8a9844ba9b05eef2f7eebb94/_1080W_1080H.jpg"
          }
        ],
        "albumCount": 21,
        "trackCount": 22
      },
      {
        "id": "AR:697927",
        "name": "Elektronomia",
        "type": "AR",
        "url": "https://www.pandora.com/artist/elektronomia/ARqpfKXxhKnl96c",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/c1/6b/f9/75/e15044d6977ecfdb9ec6152e/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/c1/6b/f9/75/e15044d6977ecfdb9ec6152e/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/c1/6b/f9/75/e15044d6977ecfdb9ec6152e/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/c1/6b/f9/75/e15044d6977ecfdb9ec6152e/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/c1/6b/f9/75/e15044d6977ecfdb9ec6152e/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/c1/6b/f9/75/e15044d6977ecfdb9ec6152e/_1080W_1080H.jpg"
          }
        ],
        "albumCount": 40,
        "trackCount": 38
      },
      {
        "id": "AR:446431",
        "name": "ILLENIUM",
        "type": "AR",
        "url": "https://www.pandora.com/artist/illenium/ARvKr9XZKKl7Xrq",
        "image": [
          {
            "quality": "90x90",
            "url": "https://content-images.p-cdn.com/images/03/e2/f2/ce/d1164adf94e67a888b47504d/_90W_90H.jpg"
          },
          {
            "quality": "130x130",
            "url": "https://content-images.p-cdn.com/images/03/e2/f2/ce/d1164adf94e67a888b47504d/_130W_130H.jpg"
          },
          {
            "quality": "250x250",
            "url": "https://content-images.p-cdn.com/images/03/e2/f2/ce/d1164adf94e67a888b47504d/_250W_250H.jpg"
          },
          {
            "quality": "500x500",
            "url": "https://content-images.p-cdn.com/images/03/e2/f2/ce/d1164adf94e67a888b47504d/_500W_500H.jpg"
          },
          {
            "quality": "640x640",
            "url": "https://content-images.p-cdn.com/images/03/e2/f2/ce/d1164adf94e67a888b47504d/_640W_640H.jpg"
          },
          {
            "quality": "1080x1080",
            "url": "https://content-images.p-cdn.com/images/03/e2/f2/ce/d1164adf94e67a888b47504d/_1080W_1080H.jpg"
          }
        ],
        "albumCount": 44,
        "trackCount": 117
      }
    ]
  }
}
```
</details>

<details>
  <summary>Playlist Details Response</summary>

```json
{
  "success": true,
  "data": {
    "id": "PL:844424980353351:1756780791",
    "name": "Pandora Stories: The Music of Wes Anderson With Randall Poster",
    "description": "“I wish that I knew what I know now, when I was younger.” That’s a key line in the Faces’ great song “Ooh La La” and a signature song of Wes Anderson’s “Rushmore.” That movie helped establish the director’s wry, unmistakable style, and his uncanny knack for creating picture-postcard soundtracks. When Anderson’s longtime music supervisor and collaborator Randall Poster sees his own name come up in the credits while “Ooh La La” plays, he still feels like “a proud papa.” Listen now as Poster walks us through his long, prolific association with Anderson, from “Rushmore” to “Moonrise Kingdom.”",
    "type": "PL",
    "url": "https://www.pandora.com/playlist/PL:844424980353351:1756780791",
    "duration": 1147,
    "image": [
      {
        "quality": "90x90",
        "url": "https://content-images.p-cdn.com/images/f1/fb/7c/38/d0f14873ba9634e72ca8a9cb/_90W_90H.jpg"
      },
      {
        "quality": "130x130",
        "url": "https://content-images.p-cdn.com/images/f1/fb/7c/38/d0f14873ba9634e72ca8a9cb/_130W_130H.jpg"
      },
      {
        "quality": "250x250",
        "url": "https://content-images.p-cdn.com/images/f1/fb/7c/38/d0f14873ba9634e72ca8a9cb/_250W_250H.jpg"
      },
      {
        "quality": "500x500",
        "url": "https://content-images.p-cdn.com/images/f1/fb/7c/38/d0f14873ba9634e72ca8a9cb/_500W_500H.jpg"
      },
      {
        "quality": "640x640",
        "url": "https://content-images.p-cdn.com/images/f1/fb/7c/38/d0f14873ba9634e72ca8a9cb/_640W_640H.jpg"
      },
      {
        "quality": "1080x1080",
        "url": "https://content-images.p-cdn.com/images/f1/fb/7c/38/d0f14873ba9634e72ca8a9cb/_1080W_1080H.jpg"
      }
    ],
    "songCount": 7,
    "songs": [
      {
        "id": "TR:4520387",
        "name": "Ooh La La (2006 Remaster)",
        "type": "TR",
        "duration": 212,
        "url": "https://www.pandora.com/artist/faces/stay-with-me-the-faces-anthology/ooh-la-la-2006-remaster/TRV65J2cbldcjhJ",
        "isrc": "USWB10606036",
        "album": {
          "id": "AL:520207",
          "name": "Stay With Me: The Faces Anthology",
          "url": "https://www.pandora.com/artist/faces/stay-with-me-the-faces-anthology/ALdrltrgk5Z6xbk",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/03/a7/65/e9/67e34dd786dddcb6a574d4dd/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/03/a7/65/e9/67e34dd786dddcb6a574d4dd/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/03/a7/65/e9/67e34dd786dddcb6a574d4dd/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/03/a7/65/e9/67e34dd786dddcb6a574d4dd/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/03/a7/65/e9/67e34dd786dddcb6a574d4dd/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/03/a7/65/e9/67e34dd786dddcb6a574d4dd/_1080W_1080H.jpg"
            }
          ]
        },
        "artists": [
          {
            "id": "AR:620491",
            "name": "Faces",
            "url": "https://www.pandora.com/artist/faces/AR7rKPp3pdhc6JZ",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/d6/5c/6a/b6/3dc2412bbcf903476c41a752/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/d6/5c/6a/b6/3dc2412bbcf903476c41a752/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/d6/5c/6a/b6/3dc2412bbcf903476c41a752/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/d6/5c/6a/b6/3dc2412bbcf903476c41a752/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/d6/5c/6a/b6/3dc2412bbcf903476c41a752/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/d6/5c/6a/b6/3dc2412bbcf903476c41a752/_1080W_1080H.jpg"
              }
            ]
          }
        ]
      },
      {
        "id": "TR:252948",
        "name": "These Days",
        "type": "TR",
        "duration": 211,
        "url": "https://www.pandora.com/artist/nico/chelsea-girl/these-days/TR2rxZ3nhr237l9",
        "isrc": "USF096625390",
        "album": {
          "id": "AL:18819",
          "name": "Chelsea Girl",
          "url": "https://www.pandora.com/artist/nico/chelsea-girl/AL4mcwj3pctxJrX",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/8f/25/1a/e2/ea8f452aa9807ece6475aff7/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/8f/25/1a/e2/ea8f452aa9807ece6475aff7/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/8f/25/1a/e2/ea8f452aa9807ece6475aff7/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/8f/25/1a/e2/ea8f452aa9807ece6475aff7/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/8f/25/1a/e2/ea8f452aa9807ece6475aff7/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/8f/25/1a/e2/ea8f452aa9807ece6475aff7/_1080W_1080H.jpg"
            }
          ]
        },
        "artists": [
          {
            "id": "AR:140739",
            "name": "Nico",
            "url": "https://www.pandora.com/artist/nico/ARfbXVzPZVZt5wc",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/a8/88/85/54/693f4ec7b1c29e0ed4f98fda/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/a8/88/85/54/693f4ec7b1c29e0ed4f98fda/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/a8/88/85/54/693f4ec7b1c29e0ed4f98fda/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/a8/88/85/54/693f4ec7b1c29e0ed4f98fda/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/a8/88/85/54/693f4ec7b1c29e0ed4f98fda/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/a8/88/85/54/693f4ec7b1c29e0ed4f98fda/_1080W_1080H.jpg"
              }
            ]
          }
        ]
      },
      {
        "id": "TR:641712",
        "name": "Let Her Dance",
        "type": "TR",
        "duration": 155,
        "url": "https://www.pandora.com/artist/the-bobby-fuller-4/i-fought-the-law-the-best-of-bobby-fuller-4/let-her-dance/TRP3cKJpPmjc3cP",
        "isrc": "USRH10450295",
        "album": {
          "id": "AL:49183",
          "name": "I Fought The Law: The Best Of Bobby Fuller Four",
          "url": "https://www.pandora.com/artist/the-bobby-fuller-4/i-fought-the-law-the-best-of-bobby-fuller-4/ALVnx7ZqVrV69JX",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/c4/1d/5e/e4/642b4f8ebc58204d51f3deb4/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/c4/1d/5e/e4/642b4f8ebc58204d51f3deb4/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/c4/1d/5e/e4/642b4f8ebc58204d51f3deb4/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/c4/1d/5e/e4/642b4f8ebc58204d51f3deb4/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/c4/1d/5e/e4/642b4f8ebc58204d51f3deb4/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/c4/1d/5e/e4/642b4f8ebc58204d51f3deb4/_1080W_1080H.jpg"
            }
          ]
        },
        "artists": [
          {
            "id": "AR:202871",
            "name": "The Bobby Fuller Four",
            "url": "https://www.pandora.com/artist/the-bobby-fuller-4/ARtK2VwgZvkplJ9",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/9d/57/8a/d7/ff714577b67b1d21569cc8dd/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/9d/57/8a/d7/ff714577b67b1d21569cc8dd/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/9d/57/8a/d7/ff714577b67b1d21569cc8dd/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/9d/57/8a/d7/ff714577b67b1d21569cc8dd/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/9d/57/8a/d7/ff714577b67b1d21569cc8dd/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/9d/57/8a/d7/ff714577b67b1d21569cc8dd/_1080W_1080H.jpg"
              }
            ]
          }
        ]
      },
      {
        "id": "TR:9715595",
        "name": "Le temps de l'amour (Stereo Mix)",
        "type": "TR",
        "duration": 145,
        "url": "https://www.pandora.com/artist/francoise-hardy/tous-les-garcons-et-les-filles/le-temps-de-lamour-stereo-mix/TRPdq9KjlwZwf6X",
        "isrc": "FRZ196200210",
        "album": {
          "id": "AL:1030568",
          "name": "Tous les garçons et les filles",
          "url": "https://www.pandora.com/artist/francoise-hardy/tous-les-garcons-et-les-filles/ALzwclVn7pq23X4",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/a1/33/c9/72/e7a04f14ac84367982c8992c/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/a1/33/c9/72/e7a04f14ac84367982c8992c/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/a1/33/c9/72/e7a04f14ac84367982c8992c/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/a1/33/c9/72/e7a04f14ac84367982c8992c/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/a1/33/c9/72/e7a04f14ac84367982c8992c/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/a1/33/c9/72/e7a04f14ac84367982c8992c/_1080W_1080H.jpg"
            }
          ]
        },
        "artists": [
          {
            "id": "AR:182821",
            "name": "Françoise Hardy",
            "url": "https://www.pandora.com/artist/francoise-hardy/ARJvfhgnk4td47k",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/e0/56/86/a2/e2a54c179326d4a20881adc2/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/e0/56/86/a2/e2a54c179326d4a20881adc2/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/e0/56/86/a2/e2a54c179326d4a20881adc2/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/e0/56/86/a2/e2a54c179326d4a20881adc2/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/e0/56/86/a2/e2a54c179326d4a20881adc2/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/e0/56/86/a2/e2a54c179326d4a20881adc2/_1080W_1080H.jpg"
              }
            ]
          }
        ]
      },
      {
        "id": "TR:212804",
        "name": "The Wind",
        "type": "TR",
        "duration": 100,
        "url": "https://www.pandora.com/artist/cat-stevens/rushmore/the-wind/TR975rV9j453m7w",
        "isrc": "GBAAN7100062",
        "album": {
          "id": "AL:15943",
          "name": "Rushmore",
          "url": "https://www.pandora.com/artist/various/rushmore/ALlvjfm9xw5brV4",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/90/13/99/15/fa504beb8cc181fbc49418b2/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/90/13/99/15/fa504beb8cc181fbc49418b2/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/90/13/99/15/fa504beb8cc181fbc49418b2/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/90/13/99/15/fa504beb8cc181fbc49418b2/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/90/13/99/15/fa504beb8cc181fbc49418b2/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/90/13/99/15/fa504beb8cc181fbc49418b2/_1080W_1080H.jpg"
            }
          ]
        },
        "artists": [
          {
            "id": "AR:124359",
            "name": "Cat Stevens",
            "url": "https://www.pandora.com/artist/cat-stevens/AR43w2qbP744rlc",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/07/44/a4/99/01594a6bad905522c501e1e1/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/07/44/a4/99/01594a6bad905522c501e1e1/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/07/44/a4/99/01594a6bad905522c501e1e1/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/07/44/a4/99/01594a6bad905522c501e1e1/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/07/44/a4/99/01594a6bad905522c501e1e1/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/07/44/a4/99/01594a6bad905522c501e1e1/_1080W_1080H.jpg"
              }
            ]
          }
        ]
      },
      {
        "id": "TR:167532",
        "name": "Needle in the Hay",
        "type": "TR",
        "duration": 260,
        "url": "https://www.pandora.com/artist/elliott-smith/elliott-smith/needle-in-the-hay/TRrkqjkVdzzKztm",
        "isrc": "USKRS0324601",
        "album": {
          "id": "AL:12895",
          "name": "Elliott Smith",
          "url": "https://www.pandora.com/artist/elliott-smith/elliott-smith/ALwvp7hvf7xdnzV",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/7f/a5/58/a0/f05f4107850bd3acdb9fd2a0/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/7f/a5/58/a0/f05f4107850bd3acdb9fd2a0/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/7f/a5/58/a0/f05f4107850bd3acdb9fd2a0/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/7f/a5/58/a0/f05f4107850bd3acdb9fd2a0/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/7f/a5/58/a0/f05f4107850bd3acdb9fd2a0/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/7f/a5/58/a0/f05f4107850bd3acdb9fd2a0/_1080W_1080H.jpg"
            }
          ]
        },
        "artists": [
          {
            "id": "AR:74389",
            "name": "Elliott Smith",
            "url": "https://www.pandora.com/artist/elliott-smith/ARj7bv45wbqrgK9",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/b6/b9/c5/f4/421e47a38c92e00425e10204/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/b6/b9/c5/f4/421e47a38c92e00425e10204/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/b6/b9/c5/f4/421e47a38c92e00425e10204/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/b6/b9/c5/f4/421e47a38c92e00425e10204/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/b6/b9/c5/f4/421e47a38c92e00425e10204/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/b6/b9/c5/f4/421e47a38c92e00425e10204/_1080W_1080H.jpg"
              }
            ]
          }
        ]
      },
      {
        "id": "TR:1377201",
        "name": "Lullabye",
        "type": "TR",
        "duration": 66,
        "url": "https://www.pandora.com/artist/emitt-rhodes/the-emitt-rhodes-recordings-1969-1973/lullabye/TR7Vj7Xgfktk5d9",
        "isrc": "USMC17054044",
        "album": {
          "id": "AL:119955",
          "name": "The Emitt Rhodes Recordings (1969-1973)",
          "url": "https://www.pandora.com/artist/emitt-rhodes/the-emitt-rhodes-recordings-1969-1973/ALbg2pmxzZch2qm",
          "image": [
            {
              "quality": "90x90",
              "url": "https://content-images.p-cdn.com/images/7f/5a/88/21/aa3141758be8cb38504e8b5b/_90W_90H.jpg"
            },
            {
              "quality": "130x130",
              "url": "https://content-images.p-cdn.com/images/7f/5a/88/21/aa3141758be8cb38504e8b5b/_130W_130H.jpg"
            },
            {
              "quality": "250x250",
              "url": "https://content-images.p-cdn.com/images/7f/5a/88/21/aa3141758be8cb38504e8b5b/_250W_250H.jpg"
            },
            {
              "quality": "500x500",
              "url": "https://content-images.p-cdn.com/images/7f/5a/88/21/aa3141758be8cb38504e8b5b/_500W_500H.jpg"
            },
            {
              "quality": "640x640",
              "url": "https://content-images.p-cdn.com/images/7f/5a/88/21/aa3141758be8cb38504e8b5b/_640W_640H.jpg"
            },
            {
              "quality": "1080x1080",
              "url": "https://content-images.p-cdn.com/images/7f/5a/88/21/aa3141758be8cb38504e8b5b/_1080W_1080H.jpg"
            }
          ]
        },
        "artists": [
          {
            "id": "AR:187748",
            "name": "Emitt Rhodes",
            "url": "https://www.pandora.com/artist/emitt-rhodes/AR7dlmvJ3XvxrVm",
            "image": [
              {
                "quality": "90x90",
                "url": "https://content-images.p-cdn.com/images/0d/53/09/c0/540a402cb0b70084bf2cc9a6/_90W_90H.jpg"
              },
              {
                "quality": "130x130",
                "url": "https://content-images.p-cdn.com/images/0d/53/09/c0/540a402cb0b70084bf2cc9a6/_130W_130H.jpg"
              },
              {
                "quality": "250x250",
                "url": "https://content-images.p-cdn.com/images/0d/53/09/c0/540a402cb0b70084bf2cc9a6/_250W_250H.jpg"
              },
              {
                "quality": "500x500",
                "url": "https://content-images.p-cdn.com/images/0d/53/09/c0/540a402cb0b70084bf2cc9a6/_500W_500H.jpg"
              },
              {
                "quality": "640x640",
                "url": "https://content-images.p-cdn.com/images/0d/53/09/c0/540a402cb0b70084bf2cc9a6/_640W_640H.jpg"
              },
              {
                "quality": "1080x1080",
                "url": "https://content-images.p-cdn.com/images/0d/53/09/c0/540a402cb0b70084bf2cc9a6/_1080W_1080H.jpg"
              }
            ]
          }
        ]
      }
    ]
  }
}
```
</details>

<div align="center">
  
## ⚠️ Legal Disclaimer

This project is intended for **educational and research purposes only**. It interacts with Pandora’s internal APIs in an unofficial manner and may not comply with Pandora’s Terms of Service. The authors are **not affiliated with Pandora** in any way.  

This software is provided **“as is”** without any warranties, express or implied. Use of this API is **at your own risk**, and you are solely responsible for ensuring compliance with applicable laws and terms in your country or region.  

This project is **non-commercial** and does **not host, stream, or distribute any Pandora-owned content**.

</div>
