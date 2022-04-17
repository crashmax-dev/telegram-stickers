import { Telegram } from '~/lib/telegram'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { StickerSet } from 'telegraf/typings/core/types/typegram'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { query } = req.body
    if (req.method === 'POST' && query) {
      const stickers = await getStickers(query)
      res.status(200).json(stickers)
    } else {
      res.status(405).json({ message: 'Method Not Allowed' })
    }
  } catch (err) {
    res.status(400).json(err)
  }
}

export const getStickers = async (stickers: string): Promise<StickerSet> => {
  return await Telegram.getStickerSet(stickers)
}
