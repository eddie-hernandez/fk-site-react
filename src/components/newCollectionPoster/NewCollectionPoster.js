import React from 'react'
import { Link } from 'react-router-dom'
import './NewCollectionPoster.css'
import FrankCollectionPoster from '../../assets/newCollectionPoster.png'

export default function NewCollectionPoster() {
  return (
    <div className="posterContainer">
      {/* <Link to='/shop/collections' */}
      <img
        src={FrankCollectionPoster}
        alt="Frank Ocean Collection Poster"
        className="newCollectionPoster clickable"
      />
    </div>
  )
}
