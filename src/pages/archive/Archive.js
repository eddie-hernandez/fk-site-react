import React from 'react'
import './Archive.css'
import SectionBreak from '../../components/sectionBreak/SectionBreak'
import PastCollections from '../../components/pastCollections/PastCollections'
import PastEvents from '../../components/pastEvents/PastEvents'
import EmailBreak from '../../components/emailBreak/EmailBreak'

export default function Archive() {
  return (
    <div className="archivePage">
      <PastCollections />
      <SectionBreak />
      <PastEvents />
      <EmailBreak />
    </div>
  )
}
