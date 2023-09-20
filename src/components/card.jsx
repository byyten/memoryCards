import { useState } from 'react'

import './card.css'

function Card({ id, url, username, title, handleClick }) {
    // const [hasBeenClicked, setHasBeenClicked] = useState(false)

    return (
        <>
          <div className={ "card " + id } key={ id } onClick={ (evt) => handleClick(evt) }>
            <div className="img">
                <img src={ url } alt={ title } className={"url " + id} />
            </div>
               
                <h3 className={"username " + id }>{ username }</h3>
                {/* <p>{ url }</p> */}
            </div>
        
        </>
    )
}

export  { Card }