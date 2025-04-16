const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

export const getImageUrl = async (threeFirstWords) => {
  const res = await fetch(
    `https://cataas.com/cat/says/${threeFirstWords}?json=true`
  )
  const data = await res.json()
  const { url } = data
  return url
}
