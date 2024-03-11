import { clearTradeData } from "../scenes/start-trade.js"
import { BotContext } from "../types/context.js"

export default async (ctx: BotContext) => {
  const ec = await _brklyn.es2.getEC(ctx.from.id, 'tradeData')
  if (ec) {
      await clearTradeData(ec)
      return ctx.reply('Troca cancelada.')
  }
}

export const info = {
  aliases: ['cancelar']
}
