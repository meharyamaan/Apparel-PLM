import React from 'react'
import Counts from './Additionals/Counts'
import MainDiv from './Additionals/MainDiv'
// import FeatureCard from './Additionals/FeatureCard'
import ServiceCard from './Additionals/ServiceCard'
import Contacts from './Additionals/Contacts'
import FooterBar from './Additionals/FooterBar'
import Navbar from './Additionals/Navbar'

export default function LandingPage() {

  return (
    <div>
      <div>
      <Navbar/>
      </div>
    <div className="container-fluid" style={{ overflow: 'hidden' }}>
      <div className="row" style={{backgroundColor: '#1E2D3B'}}>
        <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
          <MainDiv />
        </div>
      </div>
    </div>
    <div style={{ clear: 'both' }}></div>
    <ServiceCard/>
    <Counts/>
    <Contacts/>
    <FooterBar/>


  </div>
  
  )
}
