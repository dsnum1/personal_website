import React from 'react'
import './Home.css'
import logo1 from './Images/DSC_0672.JPG'
import FigureExample from './Figure.js'
import HomeBackground from './Images/Draft2/Home1.png'
import socials from './Images/Draft2/Socials.png'

import iconInsta from './Images/Draft2/instaIcon.png'
import iconGit from './Images/Draft2/github_icon_coloredpng.png'
import iconTele from './Images/Draft2/IconTele.png'
import iconTwit from './Images/Draft2/IconTwit.png'
import iconLink from './Images/Draft2/IconLink.png'

function Home() {
    return (
        <>
            <WallpaperReact />
        </>
    )

}




function WallpaperReact() {
    return (
        <div className="home-banner">
            <div className='title-holder'>
                <h1 className='title'>
                <span className='white-baggy'>
                    NOT FORGETTING <br />
                    <span className='white-text'>TO                 
                    <span className='emphasis-title'> B<span className='blue-text'>RE</span>ATHE</span>
                    </span>
                    <br/>
                    <span className='green-text'>
                    -DIVYANSH SHARMA
                    </span>
                </span>
                </h1>
            </div>
            <div className='socials'>
                <a className = "social-link" target="_blank" href= "https://www.instagram.com/dsnum1/"><img width={40} src={iconInsta}></img></a>
                <a className = "social-link" target="_blank" href= "https://github.com/dsnum1"><img width={40} src={iconGit}></img></a>
                <a className = "social-link" target="_blank" href= "https://www.linkedin.com/in/divyansh-sharma-ntu/"><img width={40} src={iconLink}></img></a>
                <a className = "social-link" target="_blank" href= "https://twitter.com/Divi1023"><img width={40} src={iconTwit}></img></a>
                <a className = "social-link" target="_blank" href= "https://t.me/dsnum1"><img width={40} src={iconTele}></img></a>
            </div>
        </div>
    )
}

export default Home;

