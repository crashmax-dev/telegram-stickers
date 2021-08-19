import { Telegram } from '~/lib/Telegraf'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const stickers = await getStickers(req.body.stickers)
      res.status(200).json(stickers)
    } else {
      res.status(405).json({ message: 'Method Not Allowed' })
    }
  } catch (err) {
    res.status(400).json(err)
  }
}

export const getStickers = async (stickers: string) => {
  return await Telegram.getStickerSet(stickers)
}