import React from 'react'

import CallInSection from '../components/header/CallInSection'
import ClientSection from '../components/header/ClientSection'
import CurrentAuction from '../components/header/CurrentAuction'
import Footer from '../components/header/Footer'
import HeaderFrist from '../components/header/HeaderFrist'
import HeaderSecound from '../components/header/HeaderSecound'
import MainSilderSection from '../components/header/MainSilderSection'
import NewAuction from '../components/header/NewAuction'
import SectionBrowse from '../components/header/SectionBrowse'
import Upcoming from '../components/header/Upcoming'
export default function Home() {
  return (
    <div>
      <HeaderFrist/>
      <HeaderSecound/>
      <MainSilderSection/>
      <SectionBrowse/>
      <CurrentAuction/>
      {/* <Upcoming/> */}
      <CallInSection/>
      <NewAuction/>
      <ClientSection/>
      <Footer/>
    </div>
  )
}
