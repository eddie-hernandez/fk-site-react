import React from 'react'
import CollectionView from '../collectionView/CollectionView'

export default function LatestCollection({ collections }) {
  const desiredCollections = [
    'THE FRANK OCEAN COLLECTION',
    'THE INDIE ROCK COLLECTION',
    'THE R&B COLLECTION',
  ]

  const latestCollections = collections.filter((collectionName) =>
    desiredCollections.includes(collectionName)
  )

  return (
    <div className="collectionComponentContainer">
      <h2 className="pageTitle">SHOP THE LATEST</h2>
      <CollectionView collectionList={latestCollections} />
    </div>
  )
}
