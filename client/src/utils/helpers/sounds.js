import hoverSound from '../../assets/sounds/hover.ogg'
import pressSound from '../../assets/sounds/press.ogg'
import backSound from '../../assets/sounds/back.ogg'

export function playHover() {
  new Audio(hoverSound).play()
} 

export function playPress() {
  new Audio(pressSound).play()
} 

export function playBack() {
  new Audio(backSound).play()
} 