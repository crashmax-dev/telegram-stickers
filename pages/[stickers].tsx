import { useEffect } from 'react'
import { getStickers } from './api/stickers'
import { StickerSet } from 'telegraf/typings/core/types/typegram'
import { Layout } from '~/components/Layout'
import { AddStickers } from '~/components/AddStickers'
import { StickersList } from '~/components/StickersList'

export default function StickerPackPage({ title, name, is_animated, stickers }: StickerSet) {
  useEffect(() => {
    import('@lottiefiles/lottie-player/dist/tgs-player')
  }, [])

  if (!stickers) {
    return (
      <Layout justifyContent="center" loading />
    )
  }

  return (
    <Layout title={title} justifyContent="space-between">
      <StickersList stickers={stickers} is_animated={is_animated} />
      <AddStickers name={name} />
    </Layout >
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

    if (!stickers.length) {
      throw new Error()
    }

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