import React from 'react'
import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useFactCat } from './hooks/useCatFact.js'

export function App() {
  const { fact, refreshRandomFact } = useFactCat()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = () => {
    refreshRandomFact()
  }

  return (
    <main className="container">
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first three words of ${fact}`}
        />
      )}
    </main>
  )
}
