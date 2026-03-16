import React from 'react'
import Intro from './Intro'
import Updates from './Updates'

const Home = () => {
  return (
    <div> 
        <main>
                <div className="section" aria-hidden="true" />
                <div className="page">
                  <Intro />
                  <Updates />
                </div>
              </main>
    </div>
  )
}

export default Home