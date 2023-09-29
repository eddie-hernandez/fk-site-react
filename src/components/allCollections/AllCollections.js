import React from 'react'
import './AllCollections.css'
import CollectionView from '../collectionView/CollectionView'

export default function AllCollections({ collections }) {
  return (
    <div className="collectionComponentContainer">
      <h2 className="pageTitle">ALL COLLECTIONS</h2>
      <CollectionView collectionList={collections} />
    </div>
  )
}
