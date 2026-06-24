import React from 'react'
import './MainContent.css'

const MainContent = () => {
  return (
    <div className='contentContainer'>
        <div className="title">
            <h1>Create Amazing <br />URLs</h1>
        </div>
        <div className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio consequuntur cumque voluptatum aperiam nostrum. Assumenda dolorem dignissimos, vel magni voluptatum aperiam adipisci. Ipsam molestiae voluptatibus ipsum! Voluptatibus animi voluptates vel.
        </div>
        <div className="buttons">
            <button>Sign Up for free</button>
            <button id='learnMoreButton'>Learn more</button>
        </div>
    </div>
  )
}

export default MainContent