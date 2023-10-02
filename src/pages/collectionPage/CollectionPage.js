import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CollectionPage.css';
import CollectionView from '../../components/collectionView/CollectionView';

export default function CollectionPage({ collections }) {
  const { collectionName } = useParams();
  const [displayedCollection, setDisplayedCollection] = useState([]);

  useEffect(() => {
    // find the collection matching the collectionName from the URL
    const matchedCollection = collectionName
      .replace(/-/g, ' ')
      .replace(/^/, 'the ')
      .replace(/$/, ' collection')
      .toUpperCase();

    const specifiedCollection = collections.filter(
      (collection) => collection === matchedCollection
    );

    setDisplayedCollection(specifiedCollection);
  }, [collectionName, collections]);

  return (
    <div>
      <CollectionView collectionList={displayedCollection} />
    </div>
  );
}