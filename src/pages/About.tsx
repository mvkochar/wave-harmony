import React from 'react'
import PageBreadcrumbs from '../components/PageBreadcrumbs/PageBreadcrumbs'

const About = () => {
  return (
   <>
    <PageBreadcrumbs
        rootPage='Home'
        currentPage='About'
    />
    <div className="about-caption d-f">
        <div>
            <h1 className="abot-title">About the brand</h1>
            <div><img src="/images/decore-wave.png" alt="decore-wave" width={152} /></div>
        </div>
    </div>
   </>
  )
}

export default About