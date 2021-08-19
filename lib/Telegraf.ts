import { Telegraf } from 'telegraf'
const {
  context: Context,
  telegram: Telegram
} = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)
export { Context, Telegram }