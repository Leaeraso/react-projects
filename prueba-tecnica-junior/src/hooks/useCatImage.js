import { useEffect, useState } from 'react'
import { getImageUrl } from '../services/facts'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    getImageUrl(threeFirstWords).then((newImageUrl) => setImageUrl(newImageUrl))

    console.log(imageUrl)
  }, [fact])

  return { imageUrl }
}
