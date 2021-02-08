import { useMemo } from 'react'
import scenes from '../data/scenes'

export const useScene = id => {
  const scene = useMemo(() => scenes[id] || null, [scenes, id])
  return scene
}
