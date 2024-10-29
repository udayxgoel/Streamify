import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className='hero'>
                <img src={hero_banner} className='banner-img' />
                <div className="hero-caption">
                    <img src={hero_title} className='caption-img' />
                    <p>
                        Hakan is a young shopkeeper whose modern world gets turned upside down when he learns that he is connected to a secret ancient order that is tasked with protecting Istanbul from an immortal enemy.
                    </p>
                    <div className="hero-btns">
                        <button className='btn'><img src={play_icon} />Play</button>
                        <button className='btn dark-btn'><img src={info_icon} />More Info</button>
                    </div>
                    <TitleCards />
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
                <TitleCards title={"Only on Netflix"} category={"popular"} />
                <TitleCards title={"Upcomings"} category={"upcoming"} />
                <TitleCards title={"Top Pics for You"} category={"now_playing"} />
            </div>
            <Footer />
        </div>
    )
}

export default Home