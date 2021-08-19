import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getStickers } from './api/stickers'
import { StickerSet } from 'telegraf/typings/core/types/typegram'

export default function StickerPackPage({ title, name, is_animated, stickers }: StickerSet) {
  const router = useRouter()

  useEffect(() => {
    import('@lottiefiles/lottie-player/dist/tgs-player')
  })

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <h1 style={{ textAlign: 'center' }}>
          {title}
        </h1>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {stickers?.map(({ file_id, emoji }, key) => {
            if (is_animated) {
              return (
                <tgs-player
                  key={key}
                  hover
                  loop
                  mode="normal"
                  src={`/api/image/${file_id}`}
                  alt={emoji}
                  style={{ width: '128px', height: '128px' }}
                />
              )
            } else {
              return (
                <Image
                  key={key}
                  alt={emoji}
                  width="128"
                  height="128"
                  src={`/api/image/${file_id}`}
                />
              )
            }
          })}
        </div>

        <button
          type="button"
          style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}
          onClick={() => router.push(`tg://addstickers?set=${name}`)}
        >
          Add Stickers
        </button>
      </main>

    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  try {
    const { title, name, is_animated, stickers } = await getStickers(params.stickers)

    return {
      props: {
        title,
        name,
        is_animated,
        stickers
      }
    }
  } catch (_) {
    return {
      redirect: {
        destination: '/'
      }
    }
  }
}