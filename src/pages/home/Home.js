import React from 'react'
import './Home.css'
import SectionBreak from '../../components/sectionBreak/SectionBreak'
import EmailBreak from '../../components/emailBreak/EmailBreak'
import NewCollectionPoster from '../../components/newCollectionPoster/NewCollectionPoster'
import LatestCollection from '../../components/latestCollection/LatestCollection'

export default function Home({ collections }) {
  return (
    <div>
      <NewCollectionPoster />
      <EmailBreak />
      <LatestCollection collections={collections} />
      <SectionBreak />
    </div>
  )
}
