import type { ItemType } from "@prisma/client"

export const MISSING_CARD_IMG = 'https://placehold.co/400x624.png?text=Use+/setimage+id+para+trocar%20esta%20imagem.'
export const MEDAL_MAP = {
  'Comum': '🥉',
  'Raro': '🥈',
  'Lendário': '🥇'
}

export const NUMBER_EMOJIS = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣']

export const formatCard = (c) => MEDAL_MAP[c.rarity.name || c.rarity] + ` <code>${c.id}</code>. <b>${c.name}</b> (${c.subcategory?.name || c.subcategory})`

export const TYPE_TO_EMOJI: Record<ItemType, string> = {
  'BACKGROUND': '🖼',
  'STICKER': '🎨',
  'DRAWS': '🎡',
  'MARRIAGE_RING': '💍'
}

export const CARD_DELETION_REWARD = {
  1: 250,
  3: 500,
  4: 1000
}

export const cativeiroEmoji = (cardCount, returnFalseInsteadOfNothing = false) => {
  if (process.env.JANET_VERSION) {
    if (cardCount >= 25) return '❤‍🔥'
    if (cardCount >= 20) return '💌'
    if (cardCount >= 15) return '🎀'
    if (cardCount >= 10) return '💋'
    if (cardCount >= 5) return '✨'
  } else {
    if (cardCount >= 100) return '❤‍🔥'
    if (cardCount >= 70) return '💘'
    if (cardCount >= 50) return '💖'
    if (cardCount >= 30) return '🌟'
    if (cardCount >= 15) return '💫'
    if (cardCount >= 5) return '✨'
  }

  if (returnFalseInsteadOfNothing) return false
  return ''
}

export const ALLOW_CUSTOM_PHOTO = process.env.JANET_VERSION ? 50 : 50

export const DISCOTECA_ID = process.env.JANET_VERSION ? 4 : 17

export const ARTIST_CATEGORY_IDS =
  process.env.JANET_VERSION
  ? [1]
  : [2, 7]

export const ALBUM_SUBCATEGORIES = process.env.JANET_VERSION
  ? [86, 84, 78, 70, 66, 61, 54, 42, 41]
  : [11647, 11650, 11651, 11653, 11654, 11655, 11656, 11722, 11770]

export const TRACK_SUBCATEGORIES = process.env.JANET_VERSION
  ? [151]
  : []

export const STAGE_ONE_DRAW_GIF = process.env.JANET_VERSION
  ? 'https://s3.girae.altadena.space/RsdFhJRwQcFNUeKb2mbEoWGybsUMONBr.mp4'
  : 'https://altadena.space/assets/girar-one.mp4'

export const STAGE_TWO_DRAW_GIF = process.env.JANET_VERSION
  ? 'https://s3.girae.altadena.space/XxLe7Xdp31jn8oPsWFsBxU7yEmecWN88.mp4'
  : 'https://altadena.space/assets/girar-two.mp4?c'
