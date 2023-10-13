import React from 'react'
import './Home.css'
import SectionBreak from '../../components/sectionBreak/SectionBreak'
import EmailBreak from '../../components/emailBreak/EmailBreak'
import NewCollectionPoster from '../../components/newCollectionPoster/NewCollectionPoster'
import LatestCollection from '../../components/latestCollection/LatestCollection'
import PhotoCarousel from '../../components/photoCarousel/PhotoCarousel'

export default function Home({ collections }) {
  return (
    <div>
      {/* <NewCollectionPoster /> */}
      <PhotoCarousel />
      <EmailBreak />
      <LatestCollection collections={collections} />
      <SectionBreak />
    </div>
  )
}
