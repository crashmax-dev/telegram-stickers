import { Telegram } from '~/lib/telegram'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { href } = await Telegram.getFileLink(req.query.fileId as string)
    const image = await fetch(href)

    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate')
    if (!href.match('.tgs')) {
      res.setHeader('Content-Type', 'image/webp')
    }
    res.send(image.body)
  } catch (err) {
    res.status(400).json(err)
  }
}
