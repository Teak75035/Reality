import DefaultTheme from 'vitepress/theme'
import './style.css'
import { animate } from "motion"

export default DefaultTheme
animate(
  ".VPContent",
  { opacity: [0, 1], y: [20, 0] },
  { duration: 0.6 }
)
