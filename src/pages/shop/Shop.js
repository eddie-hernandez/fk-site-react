import React from 'react'
import './Shop.css'
import AllItems from '../../components/allItems/AllItems'
import EmailBreak from '../../components/emailBreak/EmailBreak'
import SectionBreak from '../../components/sectionBreak/SectionBreak'

export default function Shop() {
  return (
    <div className='shopPage'>
      <AllItems />
      <EmailBreak />
      <SectionBreak />
    </div>
  )
}
