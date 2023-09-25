import React from 'react'
import './Home.css'
import SectionBreak from '../../components/sectionBreak/SectionBreak'
import EmailBreak from '../../components/emailBreak/EmailBreak'
import LatestCollection from '../../components/latestCollection/LatestCollection'
import NewCollectionPoster from '../../components/newCollectionPoster/NewCollectionPoster'

export default function Home() {
  return (
    <div>
      <NewCollectionPoster />
      <EmailBreak />
      <LatestCollection />
      <SectionBreak />
    </div>
  )
}
