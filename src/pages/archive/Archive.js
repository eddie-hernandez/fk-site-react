import React from 'react'
import './Archive.css'
import SectionBreak from '../../components/sectionBreak/SectionBreak'
import PastCollections from '../../components/pastCollections/PastCollections'
import PastEvents from '../../components/pastEvents/PastEvents'

export default function Archive() {
  return (
    <div className="archivePage">
      <PastCollections />
      <SectionBreak />
      <PastEvents />
    </div>
  )
}
