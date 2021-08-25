import { getStickers } from './api/stickers'
import { Layout } from '~/components/Layout'
import { AddStickers } from '~/components/AddStickers'
import { StickersList } from '~/components/StickersList'
import { StickerSet } from 'telegraf/typings/core/types/typegram'


export default function StickerPackPage(props: StickerSet) {
  if (!Object.keys(props).length) {
    return (
      <Layout justifyContent="center" loading />
    )
  }

  return (
    <Layout title={props.title} justifyContent="space-between">
      <StickersList stickerPack={props} />
      <AddStickers name={props.name} />
    </Layout>
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
    const stickersSet = await getStickers(params.stickers)

    if (!stickersSet.stickers.length) {
      throw new Error()
    }

    return {
      props: stickersSet
    }
  } catch (_) {
    return {
      redirect: {
        destination: '/'
      }
    }
  }
}