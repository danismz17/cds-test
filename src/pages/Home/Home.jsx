import React from 'react'
import './Home.css'
import { HeaderPages } from '../../components/PagesComponents/HeaderPages/HeaderPages'
import EventosDelDia from '../../components/PagesComponents/HomeComponents/EventosDelDia/EventosDelDia'



const Home = () => {
  return (
    <>
      <div className="home-container">
        <HeaderPages tituloPagina="Home" />
        <div className="home-content">
          <div className="angry-grid">
            
            <div className="home-card-1">
              <EventosDelDia/>              
            </div>
            <div className="home-card-2">2</div>
            <div className="home-card-3">3</div>
            <div className="home-card-4">4</div>
            <div className="home-card-5">5</div>
            <div className="home-card-6">6</div>
            <div className="home-card-7">7</div>
            <div className="home-card-8">8</div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
