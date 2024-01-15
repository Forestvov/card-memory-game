import { getCardIcons } from './get-card-icons'

export const generateCardsHelper = (size: number): string[] => {
  const icons = getCardIcons(size * size)
  let currentIndex = icons.length
  let tempValue
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    tempValue = icons[currentIndex]
    icons[currentIndex] = icons[randomIndex]
    icons[randomIndex] = tempValue
  }

  return icons
}
